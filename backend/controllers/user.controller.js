const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");
const saltRounds = 10;
const secretkey = process.env.SECRET_KEY;

//user sign up
async function Signup(req, res) {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(404).json({ msg: "all fields must be filled!" });
    }

    bcrypt.hash(password, saltRounds, async function (error, hash) {
      // Storing the hasshed password in database
      if (error)
        return res.status(402).json({ msg: "some error occured", error });
      await userModel.create({ username, email, password: hash, favorites :[]});
      return res.status(200).json({ msg: "user created successfully!" });
    });
  } catch (err) {
    return res.status(402).json({ msg: "some error occured" });
  }
}

//user sign in
async function Signin(req, res) {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user)
      return res.status(404).json({ msg: "user not found Please sign up!" });

    //hasshed password from database
    const hash = user.password;

    //compare the password
    bcrypt.compare(password, hash, function (error, result) {
      // result == true
      if (error)
        return res.status(402).json({ msg: "some error occured", error });
      if (result) {
        //creating the token
        const payload = { username: user.username, email: user.email,userid:user._id };
        const token = jwt.sign(payload, secretkey, { expiresIn: "5h" });
        return res.status(200).json({ msg: "user signin successfully", token });
      } else {
        return res.status(401).json({ msg: "password is incorrect!" });
      }
    });
  } catch (err) {
    return res.status(402).json({ msg: "some error occured" });
  }
}

//all users
async function allUser(req, res) {
  try {
    const alluser = await userModel.find({});
    return res.status(200).json({ data: alluser });
  } catch (error) {
    return res.status(500).json({ msg: "some error occured" });
  }
}

//get particular user
async function getparticularuser(req, res) {
  try {
    const id = req.params.id;
    const user = await userModel.findOne({ _id: id });
    return res.status(200).json({ data: user });
  } catch (error) {
    return res.status(500).json({ msg: "some error occured" });
  }
}

//function to add the inde of favorite item
async function addFavorite(req,res){
  try{
    let id=req.params.id
    //getting the token from frontend
    let token=req.headers.auth
    let decoded= jwt.verify(token,secretkey);
    let userid=decoded.userid
    await userModel.findByIdAndUpdate({_id:userid},{$push:{favorites:id}})
    return res.status(200).json({msg:"food recepi added to favorite"})
  }
  catch(error){
    return res.status(500).json({msg:"some error occured",error:error.message})
  }
}

//get all favorite recepies
async function getfavoriterecepies(req,res){
  try{
    let token=req.headers.auth
    let decoded=jwt.verify(token,secretkey)
    let userid=decoded.userid
    let user=await userModel.findOne({_id:userid})
    return res.status(200).json({favorites:user.favorites})
  }
  catch(error){
    return res.status(500).json({msg:"some error occured",error:error.message})
  }
}

module.exports = {
  Signup,
  Signin,
  allUser,
  getparticularuser,
  addFavorite,
  getfavoriterecepies,
};

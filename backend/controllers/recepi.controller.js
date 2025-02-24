const apikey=process.env.API_KEY

//get all the recepi
async function getAllRecepi(req,res){
    try{
        fetch(`https://dummyjson.com/recipes?skip=0&limit=50&total=50`)
          .then((res) => res.json())
          .then((data) => {
            return res.status(200).json({ data });
          });
    }
    catch(error){
        return res.status(500).json({msg:"some error occured",error:error.message})
    }
}

//search a recepi
async function searchRecepi(req,res){
    try{
        let {query}=req.body
        fetch(
          `https://api.spoonacular.com/recipes/complexSearch?query=${query}&maxFat=25&number=2&apiKey=${apikey}&includeNutrition=true.`
        )
        .then(res=>res.json())
        .then(data=>{
            return res.status(200).json({data})
        })
        .catch((err)=>{
            return res.status(500).json({msg:"some error occured",error:err})
        })
    }
    catch(error){
        return res.status(500).json({msg:"some error occured",error:error.message})
    }
}

//get a recepi
async function getparicularRecepi(req,res){
    try{
        let indx=req.params.id
        let data=await fetch(`https://dummyjson.com/recipes/${indx}`);
        let result=await data.json()
        return res.status(200).json({data:result})
    }
    catch(error){

    }
}
module.exports = { getAllRecepi, searchRecepi, getparicularRecepi };
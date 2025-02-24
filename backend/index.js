require("dotenv").config();
const express = require("express");
const connectmongo = require("./mongoconnect");
const UserRoute = require("./routes/userRoute");
// const CampaignRoute = require("./routes/campaignRoute");
const cors = require("cors");
const recepiRoute = require("./routes/recepiRoute");
const app = express();
const port = process.env.PORT || 8000;

//connectdb
connectmongo();

//middleware
app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

//user route
app.use("/user", UserRoute);

//recepi router
app.use("/recepi", recepiRoute);

//starting the server
app.listen(port, () => console.log(`server started on port ${port}`));

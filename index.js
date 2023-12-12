const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const getCurrency = require("./controllers/getCurrency");
const convert = require("./controllers/convert");
const axios = require("axios");
const app = express();
dotenv.config();
const PORT=process.env.PORT || 5000;
app.use(express.json());
app.use(cors());
app.get("/",function(req,res){
  res.send("Terra Curremcy Exchange Server");
})
app.get("/getAllCurrencies", getCurrency);
app.get("/convert", convert);

app.listen(PORT, () => {
  console.log(`Currency Exchange Server started on port ${PORT}`);
});

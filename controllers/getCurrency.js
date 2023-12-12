const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const getCurrency = async (req, res) => {
  const nameURL =
    `https://openexchangerates.org/api/currencies.json?app_id=${process.env.OPEN_EXCHANGE_RATES_APP_ID}`;
  try {
    const nameResponse = await axios.get(nameURL);
    const nameData = nameResponse.data;
    return res.json(nameData);
  } catch (error) {
    res.status(500).json("Internal Server Error!");
  }
};

module.exports = getCurrency;

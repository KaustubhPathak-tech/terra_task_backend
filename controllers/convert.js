const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const convert = async (req, res) => {
  const { date, sourceCurrency, targetCurrency, amountInSourceCurrency } =
    req.query;

  try {
    const dataURL = `https://xecdapi.xe.com/v1/convert_to.json/?to=${sourceCurrency}&from=${targetCurrency}&amount=${amountInSourceCurrency}`;
    const dataResponse = await axios.get(dataURL, {
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(
            `${process.env.XE_APP_ID}:${process.env.XE_APP_KEY}`
          ).toString("base64"),
      },
    });


    return res.json(dataResponse.data.from[0].mid);
  } catch (error) {
    res.status(500).json("Internal Server Error!");
  }
};

module.exports = convert;
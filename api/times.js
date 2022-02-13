const axios = require("axios")
const geoTz = require("geo-tz")
const moment = require("moment")
require("moment-timezone")

export default async (req, res) => {
  try {
    const today = moment().format("DD-MM-YYYY")

    const { data } = await axios({
      url: `http://api.aladhan.com/v1/timings/${today}`,
      params: req.query,
    })

    const { latitude, longitude } = req.query
    const [timezone] = geoTz.find(latitude, longitude)
    const datetime = moment().tz(timezone).format()
    const timings = data.data.timings

    res.json({ datetime, timezone, timings })
  } catch (error) {
    res.json("ada error tuh")
  }
}

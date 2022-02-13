import moment from "moment"
import "moment-timezone"
import { useEffect } from "react"

function DigitalClock({ datetime, timezone, setDatetime }) {
  function timeFormat(time) {
    return moment(time).tz(timezone).format("HH:mm:ss")
  }

  useEffect(() => {
    const handler = setTimeout(() => {
      setDatetime(moment(datetime).add(1, "second").tz(timezone).format())
    }, 1000)

    return function () {
      clearTimeout(handler)
    }
  })

  return <div className="DigitalClock text-7xl">{timeFormat(datetime)}</div>
}

export default DigitalClock

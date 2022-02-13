import moment from "moment-hijri"
import "moment-timezone"

function Date({ datetime, timezone }) {
  const date = moment(datetime).tz(timezone)

  const gregorianDate = () => {
    return date.format("MMMM DD, YYYY")
  }

  return (
    <div className="mt-4 text-center Date">
      <div className="text-2xl gregorian">{gregorianDate()} M</div>
      <div className="mt-2 text-xl hijri text-white/60">
        H {date.format("iYYYY")} {date.format("iMMMM")}{" "}
        <span
          className="invisible"
          style={{ width: "0px", marginLeft: "-20px" }}
        >
          a
        </span>{" "}
        {date.format("iDD")}
      </div>
    </div>
  )
}

export default Date

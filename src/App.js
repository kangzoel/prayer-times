import { useEffect, useState } from "react"
import axios from "axios"
import DigitalClock from "./components/DigitalClock"
import Date from "./components/Date"
import Timings from "./components/Timings"
import CitySelect from "./components/CitySelect"

function App() {
  const [city, setCity] = useState({
    label: "KOTA JAKARTA",
    value: { lat: -6.1751, long: 106.865 },
  })
  const [datetime, setDatetime] = useState(null)
  const [timezone, setTimezone] = useState(null)
  const [timings, setTimings] = useState(null)

  useEffect(() => {
    async function fetchData(latitude, longitude) {
      const { data } = await axios({
        url: "times",
        params: { latitude, longitude },
      })

      setDatetime(data.datetime)
      setTimezone(data.timezone)
      setTimings(data.timings)
    }

    const { lat, long } = city.value

    fetchData(lat, long)
  }, [city])

  return (
    <div className="grid h-screen App place-items-center">
      {datetime && timezone && timings ? (
        <div className="py-8">
          <div className="flex flex-col items-center pb-10 mb-10 border-b border-solid border-white/20">
            <CitySelect defaultValue={city} setCity={setCity} />
            <DigitalClock
              datetime={datetime}
              timezone={timezone}
              setDatetime={setDatetime}
            />
            <Date datetime={datetime} timezone={timezone} />
          </div>
          <div className="grid place-items-center">
            <Timings data={timings} />
          </div>
          <div className="mt-6 text-center text-green-300 credit">
            Made by{" "}
            <a
              href="https://www.github.com/kangzoel"
              rel="noreferrer"
              target="_blank"
              className="underline"
            >
              Samsul Arif
            </a>
          </div>
        </div>
      ) : (
        "loading..."
      )}
    </div>
  )
}

export default App

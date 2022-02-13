import axios from "axios"
import CityAsyncSelect from "./CityAsyncSelect"

const loadOptions = async (input, callback) => {
  if (input.length < 4) return

  const { data } = await axios({
    url: "locations",
    params: { city: input },
  })

  const optionCompatibleData = data.map((city) => ({
    label: city.kabko,
    value: { lat: city.lat, long: city.long },
  }))

  callback(optionCompatibleData)
}

function CitySelect({ defaultValue, setCity }) {
  const onCityChanged = (newCity) => {
    setCity(newCity)
  }

  return (
    <div className="CitySelect mb-4">
      <CityAsyncSelect
        onChange={onCityChanged}
        loadOptions={loadOptions}
        defaultValue={defaultValue}
      />
    </div>
  )
}

export default CitySelect

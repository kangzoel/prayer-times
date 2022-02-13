const locations = require("./_list_location_id.json")

export default (req, res) => {
  if (!req.query.city) {
    res.json({ message: "Please supply city param!" })
    return
  }

  const query = req.query.city.toUpperCase()
  const filteredLocations = locations.filter((item) =>
    item.kabko.includes(query)
  )

  res.json(filteredLocations)
}

function Timings({ data }) {
  return (
    <div className="Timings">
      <h2 className="mb-2 text-xl text-center">Prayer Times</h2>
      <table className="leading-9">
        <tbody>
          {Object.keys(data).map((time) => {
            if (data[time] === "-") return null

            return (
              <tr key={time}>
                <th className="font-normal text-left opacity-80">{time}</th>
                <td className="pl-16 opacity-60">{data[time]}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Timings

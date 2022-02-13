import { useState } from "react"
import TesChild from "./TesChild"

function Tes() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TesChild count={count} />
      <button onClick={() => setCount(count + 1)}>Plus</button>
    </>
  )
}

export default Tes

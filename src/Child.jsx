import { useContext } from "react"
import { ImplementContext } from "../provider/Provider"

const Child = () => {
  const { setCount, setName } = useContext(ImplementContext)
  return (
    <>
      <div>
        <h5>I&apos;m from Child</h5>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          aria-label="Increment value"
          onClick={() => setCount(prev => prev = prev + 1)}
        >
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => setCount(prev => prev = prev - 1)}
        >
          Decrement
        </button>
        <button
          aria-label="Increment value"
          onClick={() => setCount(prev => prev = prev + 5)}
        >
          Increment By Amount
        </button>
      </div>
      <div style={{ marginTop: "5px" }}>
        <input type="text" name="" id="" onChange={(event) => setName(event.target.value)} />
      </div>
    </>
  )
}

export default Child
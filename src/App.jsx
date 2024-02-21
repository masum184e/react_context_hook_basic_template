import { useContext } from "react"
import SuperParent from "./SuperParent"
import { ImplementContext } from "../provider/Provider"

const App = () => {
  const { count, name } = useContext(ImplementContext)
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Hello React Context</h1>
      <h2>I&apos;m from App, my name {name} & value {count}</h2>
      <SuperParent />
    </>
  )
}

export default App
import { useState } from "react";
function App() {
  const [InputValue, setInputValue] = useState("Hola")
  const handleInputClick = () => {
    setInputValue(e.target.value)
    console.log (e.target.value);
  }
  return (
    <div style= {{textALign: "center"}} >
      <h1>Input Test</h1>
      <hr />
      <input
      onChange={(e) => handleInputClick(e)}
      type="text"
      value={InputValue}
      />
    </div>
  ) 
}
export default App
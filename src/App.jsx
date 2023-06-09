import { useState } from "react";
function App() {
  const [inputValue, setInputValue] = useState({
    input1: "",
    input2: "",
    password:"",
    checkbox:"",
    color:"",
    date:"",
    datetimelocal:"",
    email:"",
    file:"",
    hidden:"",
    image:"",
    month:"",
    number:"",
    radio:"",
    range:"",
    reset:"",
    search:"",
    tel:"",
    time:"",
    url:"",
    week:""
    });
  const handleInputChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <div style= {{textALign: "center"}} >
      <h1>Input Test</h1>
      <hr />
      <label htmlFor="int1">Input1</label>
      <input
      name="input1"
      onChange={(e) => handleInputChange(e)}
      type="text"
      value={inputValue.input1}
      />
      <br/>
      <label>
        Input2
      <input
      className="mt-2"
      name="input2"
      onChange={(e) => handleInputChange(e)}
      placeholder="Este es el input 2"
      type="text"
      value={inputValue.input2}
      />
      </label>
      <br/>
      <label>
        Password
      <input
      className="mt-2"
      name="password"
      onChange={(e) => handleInputChange(e)}
      type="password"
      value={inputValue.password}
      />
      </label>
      <br/>
      <label>
        Checkbox
      <input
      className="mt-2"
      name="checkbox"
      onChange={(e) => handleInputChange(e)}
      type="checkbox"
      value={inputValue.checkbox}
      />
      </label>
      <br/>
      <label>
        Color
      <input
      className="mt-2"
      name="color"
      onChange={(e) => handleInputChange(e)}
      type="color"
      value={inputValue.color}
      />
      </label>
      <br/>
      <label>
        Date
      <input
      className="mt-2"
      name="date"
      onChange={(e) => handleInputChange(e)}
      type="date"
      value={inputValue.date}
      />
      </label>
      <br/>
      <label>
        Datetime-local
      <input
      className="mt-2"
      name="datetimelocal"
      onChange={(e) => handleInputChange(e)}
      type="datetime-local"
      value={inputValue.datetimelocal}
      />
      </label>
      <br/>
      <label>
        Email
      <input
      className="mt-2"
      name="email"
      onChange={(e) => handleInputChange(e)}
      type="email"
      value={inputValue.email}
      />
      </label>
      <br/>
      <label>
        File
      <input
      className="mt-2"
      name="file"
      onChange={(e) => handleInputChange(e)}
      type="file"
      value={inputValue.file}
      />
      </label>
      <br/>
      <label>
        Hidden
      <input
      className="mt-2"
      name="hidden"
      onChange={(e) => handleInputChange(e)}
      type="hidden"
      value={inputValue.hidden}
      />
      </label>
      <br/>
      <label>
        Image
      <input
      className="mt-2"
      name="image"
      onChange={(e) => handleInputChange(e)}
      type="image"
      value={inputValue.image}
      />
      </label>
      <br/>
      <label>
        Month
      <input
      className="mt-2"
      name="month"
      onChange={(e) => handleInputChange(e)}
      type="month"
      value={inputValue.month}
      />
      </label>
      <br/>
      <label>
        Number
      <input
      className="mt-2"
      name="number"
      onChange={(e) => handleInputChange(e)}
      type="number"
      value={inputValue.number}
      />
      </label>
      <br/>
      <label>
        Radio
      <input
      className="mt-2"
      name="radio"
      onChange={(e) => handleInputChange(e)}
      type="radio"
      value={inputValue.radio}
      />
      </label>
      <br/>
      <label>
        Range
      <input
      className="mt-2"
      name="range"
      onChange={(e) => handleInputChange(e)}
      type="range"
      value={inputValue.range}
      />
      </label>
      <br/>
      <label>
        Search
      <input
      className="mt-2"
      name="search"
      onChange={(e) => handleInputChange(e)}
      type="search"
      value={inputValue.search}
      />
      </label>
      <br/>
      <label>
        Tel
      <input
      className="mt-2"
      name="tel"
      onChange={(e) => handleInputChange(e)}
      type="tel"
      value={inputValue.tel}
      />
      </label>
      <br/>
      <label>
        Time
      <input
      className="mt-2"
      name="time"
      onChange={(e) => handleInputChange(e)}
      type="time"
      value={inputValue.time}
      />
      </label>
      <br/>
      <label>
        Url
      <input
      className="mt-2"
      name="url"
      onChange={(e) => handleInputChange(e)}
      type="url"
      value={inputValue.url}
      />
      </label>
      <br/>
      <label>
        Week
      <input
      className="mt-2"
      name="week"
      onChange={(e) => handleInputChange(e)}
      type="week"
      value={inputValue.week}
      />
      </label>
    </div>
  ) 
}
export default App
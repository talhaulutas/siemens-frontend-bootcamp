import { useState,React } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [mission, setMission] = useState([]);
  const [name,setName] = useState("");


  const addMission = () => {
    setMission((prev) => [...prev, name])
  }

  return (
    <div className="App">
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={addMission}>Add</button>
      {mission.map((item,index) => (
        <div key={index}>
          <filter />
          {item}
        </div>
      ))}
    </div>
  )
}

export default App

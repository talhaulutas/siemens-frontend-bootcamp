import { useState,React } from 'react'
import Filter from './filter'


function Search() {
  const [todos, setTodos] = useState([]);
  const [name,setName] = useState("");


  const addMission = () => {
    setTodos((prev) => [...prev, name])
  }

  return (
    <div className="App">
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={addMission}>Add</button>
      {todos.map((item,index) => (
        <div key={index}>
          <Filter />
          {item}
        </div>
      ))}
    </div>
  )
}

export default Search

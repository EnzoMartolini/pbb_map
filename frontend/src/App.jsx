import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Map from './components/map.jsx'
import './App.css'
import getCoordinates from './utils/getCoordinates.js'

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [adress, setAdress] = useState("");

  const marker = fetch("http://localhost:5000/api/markers")
                  .then(res => res.json())
                  .then(data => {
                    console.log(data)
                  })
  console.log("Test")
  const coordonnées = async () => {
    return await getCoordinates("30 Traverse chante perdrix");
  };
  
  // Appel correct
  coordonnées().then((data) => console.log(data));
  

  return (
    <>
      <input
        type="text"
        placeholder="Rechercher..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onSubmit={(e) => setAdress(searchTerm)}
        className="search-input"
      />
      <button onClick={() => setAdress(searchTerm)}>Go</button>
      <p>Adresse : {adress}</p>
      <Map />
    </>
  )
}

export default App

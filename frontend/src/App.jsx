import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Teamember from "./component/Teamember"
function App() {
 
  const data = [
    {
      name : "Manoj",
      jobTiltle : "Software Developer"
    },
    {
      name : "Harish",
      jobTiltle : "Frontend Developer"
    },
    {
      name : "Preetham",
      jobTiltle : "Backend Developer"
    },
    {
      name : "Arav",
      jobTiltle : "Software Developer"
    },
    {
      name : "Venkatesh",
      jobTiltle : "Software Developer"
    },
    {
      name : "Joel",
      jobTiltle : "Software Developer"
    },
    {
      name : "Koushik",
      jobTiltle : "Software Developer"
    },
    {
      name : "Chris",
      jobTiltle : "Human Resource"
    },
    {
      name : "Lavan",
      jobTiltle : "Consultant"
    },
  ]

  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/about" element={<Teamember data = {data}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

import "./App.css"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Game from "./pages/Game"
import NewGame from "./pages/NewGame"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/detalhes" element={<Game/>}/>
        <Route path="/novoracha" element={<NewGame/>}/>
      </Routes>
    </>
  )
}

export default App
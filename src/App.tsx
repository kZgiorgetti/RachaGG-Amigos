import "./App.css"
import { Routes, Route } from "react-router"
import Home from "./pages/Home"
import Game from "./pages/Game"
import NewGameForm from "./pages/NewGameForm"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/detalhes/:id" element={<Game/>}/>
        <Route path="/novoracha" element={<NewGameForm onAddGame={undefined}/>}/>
      </Routes>
    </>
  )
}

export default App
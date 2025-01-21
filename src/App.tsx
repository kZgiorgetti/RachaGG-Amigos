import "./App.css"
import { Routes, Route } from "react-router"
import Home from "./pages/Home"
import Game from "./pages/Game"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/detalhes" element={<Game/>}/>

      </Routes>
    </>
  )
}

export default App
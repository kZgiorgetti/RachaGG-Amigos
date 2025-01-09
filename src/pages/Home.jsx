import style from "./Home.module.css"
import GameCard from "../components/GameCard"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <header className={style.topMenu}>
        <img src="../public/Logo.svg"/>
        <p>Racha GG & Amigos</p>
        <button><Link className={style.buttonCTA} to="/novoracha">Marcar racha</Link></button>
      </header>
      <div className={style.cards}>
        <GameCard/>
        <GameCard/>
        <GameCard/>
      </div>
    </div>
  )
}

export default Home
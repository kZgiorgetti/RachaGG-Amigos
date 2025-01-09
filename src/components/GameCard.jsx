import style from "./GameCard.module.css"
import { ArrowRight } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

const GameCard = () => {
  return (
    <div className={style.card}>
        <img src="/public/CardImage.png" alt="" />
        <h1>Racha</h1>
        <div>
            <p>Dia: <span>24/01/25</span></p> 
            <p>Hora: <span>20:30</span></p> 
            <p>Valor: <span>R$ 10,00</span></p> 
            <p>Jogadores: <span>14</span></p> <style></style>
            <p>Duração: <span>60 minutos</span></p>
            <p>Status: <span className={style.status}>Agendado</span></p>
        </div>
        <button><Link className={style.cardButton} to="/detalhes">Ver detalhes <ArrowRight size={20}/></Link></button>
    </div>
  )
}

export default GameCard
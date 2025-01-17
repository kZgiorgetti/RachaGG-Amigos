import style from "./GameCard.module.css"
import { ArrowRight } from "@phosphor-icons/react"
import { Link } from "react-router"


interface IProps {
  day: number,
  hour: string,
  value: number,
  players: number,
  duration: string,
  status: string,

}

const GameCard = ({day, hour, value, players, duration, status}:IProps) => {

  return (
    <div className={style.card}>
        <img src="/CardImage.png" alt="" />
        <h1>Racha</h1>
        <div>
            <p>Dia: <span>{day}</span></p> 
            <p>Hora: <span>{hour}</span></p> 
            <p>Valor total: <span>R$ {value}</span></p> 
            <p>Jogadores: <span>{players}</span></p> <style></style>
            <p>Duração: <span>{duration}</span></p>
            <p>Status: <span className={style.status}>{status}</span></p>
        </div>
        <button><Link className={style.cardButton} to="/detalhes">Ver detalhes <ArrowRight size={20}/></Link></button>
    </div>
  )
}

export default GameCard
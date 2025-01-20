import style from "./GameCard.module.css"
import { ArrowRight, Trash } from "@phosphor-icons/react"
import { Link } from "react-router"


interface IProps {
  day: Date,
  hour: string,
  value: string,
  players: number,
  duration: string,
  status: string,
  deleteGame: () => void

}

const GameCard = ({day, hour, value, players, duration, status, deleteGame}:IProps) => {

  return (
    <div className={style.card}>
        <img src="/CardImage.png" alt="" />
        <div className={style.cardHeader}>
          <h1>Racha</h1>
          <Trash className={style.deleteIcon} onClick={deleteGame} size={20} />
        </div>
        <div className={style.cardDetails}>
            <p>Dia: <span>{day}</span></p> 
            <p>Hora: <span>{hour}</span></p> 
            <p>Valor total: <span>R$ {value}</span></p> 
            <p>Jogadores: <span>{players}</span></p> <style></style>
            <p>Duração: <span>{duration}</span></p>
            <p>Status: <span className={style.status}>{status}</span></p>
        </div>
        <button><Link className={style.cardButton} to="/detalhes/:id">Ver detalhes <ArrowRight size={20}/></Link></button>
    </div>
  )
}

export default GameCard
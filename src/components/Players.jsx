import { MinusCircle } from "@phosphor-icons/react"
import style from "./Players.module.css"

const PlayerList = () => {
 
  return (
    <li className={style.list}>
        <span className={style.playerName}>GG</span>
        <div className={style.paymentInput}>
          <input type="checkbox"/>
          <span>Feito</span>
        </div>
        <p>Remover <MinusCircle size={20}/> </p>
    </li>
  )
}

export default PlayerList
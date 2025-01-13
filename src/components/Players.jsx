import { MinusCircle } from "@phosphor-icons/react"
import style from "./Players.module.css"

const Players = () => {
 
  return (
    <li className={style.list}>
        <span className={style.playerName}>Giovani</span>
        <div className={style.paymentInput}>
          <input type="checkbox"/>
        </div>
        <p>Remover <MinusCircle size={20}/> </p>
    </li>
  )
}

export default Players
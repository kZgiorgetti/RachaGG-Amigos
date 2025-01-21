import style from "./TopMenu.module.css"

interface IProps {
  text: string
  addGame: () => void
}

const TopMenu = ({text, addGame}:IProps) => {
  return (
    <div>
        <header className={style.topMenu}>
            <img src="../Logo.svg"/>
            <p>Racha GG & Amigos</p>
        <button onClick={addGame}>
            {text}
        </button>
      </header>
    </div>
  )
}

export default TopMenu

import style from "./NewGame.module.css"
import { Link } from "react-router-dom"
import { ArrowLeft } from "@phosphor-icons/react"
import { useState } from "react"

const NewGame = () => {

    const [day, setDay] = useState("")
    const [time, setTime] = useState("")
    const [value, setValue] = useState("")
    const [duration, setDuration] = useState("")
    const [loc, setLoc] = useState("")
    const [obs, setObs] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(value, day, duration)
    }

  return (
    <div>
        <header className={style.topMenu}>
            <img className={style.logo} src="../public/Logo.svg"/>
            <p className={style.appName}><Link className={style.appName} to="/">Racha GG & Amigos</Link></p>
            <button><Link className={style.buttonCTA} to="/novoracha">Marcar racha</Link></button>
        </header>
        <h1> <Link className={style.pageTitle} to="/"> <ArrowLeft size={24}/> Novo racha</Link></h1>
        <section className={style.formNewGame}>
            <img src="../../public/SoccerImg.svg" alt="" />
            <div>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="date" 
                        name="day" 
                        value={day}
                        onChange={(e) => setDay(e.target.value)}
                        />

                    <input 
                        type="time" 
                        name="Hour" 
                        value={time}
                        onChange={(e) => setTime(e.event.target.value)}
                        />

                    <input 
                        type="text" 
                        placeholder="Valor" 
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        />

                    <input 
                        type="number" 
                        name="duration" 
                        placeholder="Duração"
                        value={duration}
                        onChange={(e) => setDuration(e.event.value)}
                        
                        />

                    <input className={style.place} 
                        type="text" 
                        name="place" 
                        placeholder="Localização" 
                        value={loc}
                        onChange={(e) => setLoc(e.event.value)}
                        
                        
                        />

                    <textarea className={style.obs} 
                        name="obs" id="" 
                        placeholder="Observações" 
                        value={obs}
                        onChange={(e) => setObs(e.event.value)}
                       
                        ></textarea>

                    <button type="submit">Criar racha</button>
                </form>
            </div>
        </section>
    </div>
  )
}

export default NewGame
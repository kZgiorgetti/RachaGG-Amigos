import style from "./NewGame.module.css"
import { Link } from "react-router-dom"
import { ArrowLeft } from "@phosphor-icons/react"
import { useState } from "react"

const NewGame = () => {


    const {value, setValue} = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(value)
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
                        
                        />

                    <input 
                        type="time" 
                        name="Hour" 
                        />

                    <input 
                        type="text" 
                        name="value" 
                        placeholder="Valor" 
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        />

                    <input 
                        type="number" 
                        name="duration" 
                        placeholder="Duração" 
                        
                        />

                    <input className={style.place} 
                        type="text" 
                        name="place" 
                        placeholder="Localização" 
                        
                        
                        />

                    <textarea className={style.obs} 
                        name="obs" id="" 
                        placeholder="Observações" 
                       
                        ></textarea>

                    <button type="submit">Criar racha</button>
                </form>
            </div>
        </section>
    </div>
  )
}

export default NewGame
import style from "./NewGameForm.module.css"
import { Link } from "react-router"
import { ArrowLeft } from "@phosphor-icons/react"
import { useState } from "react"
import TopMenu from "../assets/components/TopMenu"

const NewGame = ({onAddGame}) => {

    const [data, setData] = useState("")
    const [hour, setHour] = useState("")
    const [value, setValue] = useState("")
    const [duration, setDuration] = useState("")
    const [place, setPlace] = useState("")
    const [obs, setObs] = useState("")


    const handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault()
        console.log(value, place, data, hour, duration, obs)
        onAddGame()
    }


  return (
    <div>
        <TopMenu text="Marcar racha" addGame={undefined}/>
        <h1> <Link className={style.pageTitle} to="/"> <ArrowLeft size={24}/> Novo racha</Link></h1>
        <section className={style.formNewGame}>
            <img src="../../public/SoccerImg.svg" alt="" />
            <div>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="date" 
                        name="day" 
                        value={data}
                        onChange={(e) => setData(e.target.value)}
                        required
                        />

                    <input 
                        type="time" 
                        name="Hour" 
                        required
                        value={hour}
                        onChange={(e) => setHour(e.target.value)}
                        />

                    <input 
                        type="number" 
                        placeholder="Valor" 
                        required
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        min={0}
                        step={10}
                        />

                    <input 
                        type="number" 
                        name="duration" 
                        placeholder="Duração"
                        min={0}
                        step={10}
                        required
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        
                        />

                    <input className={style.place} 
                        type="text" 
                        name="place" 
                        placeholder="Localização"
                        required
                        value={place}
                        onChange={(e) => setPlace(e.target.value)}
                        />

                    <textarea className={style.obs} 
                        name="obs" id="" 
                        placeholder="Observações"
                        value={obs}
                        onChange={(e) => setObs(e.target.value)}
                        ></textarea>

                    <button type="submit" >Criar racha</button>
                </form>
            </div>
        </section>
    </div>
  )
}

export default NewGame
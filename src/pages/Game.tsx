import style from "./Game.module.css"
import { ArrowLeft, MinusCircle } from "@phosphor-icons/react"
import { Link, useNavigate } from "react-router"
import { useState, useEffect } from "react"
import TopMenu from "../assets/components/TopMenu"
import { v4 as uuidv4 } from "uuid"
import { useForm, SubmitHandler } from "react-hook-form"
import useFormPersist from "react-hook-form-persist"

interface TopMenu {
    text: string
}

interface IFormInput {
    date:Date,
    value:number,
    valuePerPlayer:number,
    status:string,
    hour:number,
    duration:string,
    location:string,
    players:number
  }

const Game = () => {

    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/')
    }

    const [playersList, setPlayersList] = useState(
        JSON.parse(localStorage.getItem("playersList")!) || [])

    useEffect(() => {
        localStorage.setItem("playersList", JSON.stringify(playersList)); 
    }, [playersList])

    const [input, setInput] = useState("")

    const handleAddPlayer = (event: { preventDefault: () => void }) => {
        event.preventDefault()
        const newPlayer = { id: uuidv4(), name: input }
        console.log(newPlayer.id)
        setPlayersList([...playersList, newPlayer])
        setInput("")
    }

    const deletePlayer = (id: string) => {
        setPlayersList((oldState: never[]) => oldState.filter((item: { id: string }) => item.id !== id)) 
        
      }
   
    // const deleteGame = () => {

    // }

    const {
        register,
        watch,
        handleSubmit,
        setValue
      } = useForm<IFormInput>({});

    useFormPersist("form-name", { watch, setValue });

    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

    const valor = watch ("value")
    const soma = valor / playersList.length


  return (
    

    <div>
        <TopMenu text="Criar racha" addGame={handleClick}/>
        <h1> <Link className={style.pageTitle} to="/"> <ArrowLeft size={24}/> Racha</Link></h1>
        <section className={style.detailsBody}>
            <header className={style.headerDetails}>
                <h2>Detalhes</h2>
            </header>
            <div className={style.details} >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <p>Dia: 
                        <span><input 
                            required
                            type="date" 
                            {...register("date")}/>
                        </span>
                    </p>
                    <p>Valor total: 
                        <span><input 
                            required
                            type="number" 
                            min={0}
                            {...register("value", {
                                valueAsNumber: true
                            })} />
                        </span>
                    </p>
                    <p>Jogadores: 
                        <span><input 
                            disabled
                            type="number" 
                            {...register("players",  {
                                valueAsNumber: true
                            })}
                            value={playersList.length}/>
                            </span>
                    </p>
                    <p>Status: <span><select {...register("status")} >
                        <option value="Agendado">Agendado</option>
                        <option value="Cancelado">Cancelado</option>
                        <option value="Concluído">Concluído</option>
                        </select></span></p>
                    <p>Hora: 
                        <span><input 
                            required
                            type="time" 
                            {...register("hour")}/> 
                        </span></p>
                    <p>Valor por pessoa: 
                        <span><input 
                            disabled
                            type="number" 
                            {...register("valuePerPlayer", {
                                valueAsNumber: true
                            })}
                            value={soma}/>
                        </span></p> 
                    <p>Duração: 
                        <span><input
                            required
                            type="text" 
                            {...register("duration")}/>
                        </span></p>
                    <p>Local: 
                        <span><input 
                            required
                            type="text" 
                            {...register("location")}/>
                        </span></p>
                    <div className={style.buttons}>
                        <button onSubmit={undefined} className={style.delete}> Cancelar</button>
                        <button type="submit" className={style.edit}>Confirmar</button>
                    </div>
                </form> 
            </div>
        </section>
        <section className={style.detailsBody}>
            <header>
                    <h2>{playersList.length} Jogadores</h2>
                    <form className={style.addPlayerInput} onSubmit={handleAddPlayer}>
                        <input 
                            type="text" 
                            placeholder="Digite um nome" 
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            />
                        <button type="submit" className={style.addButton}>Adicionar</button>
                    </form>
            </header>          
            <div className={style.tableHeader}>
                <p>Nome</p> 
                <p>Pagamento</p>
                <p>Ações</p>
            </div>
            <table className={style.tableList}>
                <ul>
                    {/* <Players/> */}
                    {playersList.map(
                        (newPlayer: { id: string, name: string }) => (
                            <li key={newPlayer.id}>
                                {newPlayer.name} 
                                <div className={style.paymentInput}>
                                    <input type="checkbox"/>
                                </div>
                                <p 
                                    onClick={() => deletePlayer(newPlayer.id)}>
                                        Remover <MinusCircle size={20}/>
                                </p>
                            </li> 
                       )
                    )}
                </ul>
            </table>
        </section>
    </div>
  )
}

export default Game
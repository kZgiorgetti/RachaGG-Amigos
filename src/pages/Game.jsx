import style from "./Game.module.css"
import { ArrowLeft, Trash, PencilLine } from "@phosphor-icons/react"
import { Link } from "react-router-dom"
import PlayerList from "../components/Players"
import { useState } from "react"

const Game = () => {

    const [player, setPlayer] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(player)
    }

    // const addPlayer = (player) => {
    //     // id, name, payment

    //     setPlayer([...player, {id: Date.now(), text: player, payment: false}])
    // }

  return (
    <div>
        <header className={style.topMenu}>
                <img className={style.logo} src="../public/Logo.svg"/>
                <p className={style.appName}><Link className={style.appName} to="/">Racha GG & Amigos</Link></p>
                <button><Link className={style.buttonCTA} to="/novoracha">Marcar racha</Link></button>
        </header>
        <h1> <Link className={style.pageTitle} to="/"> <ArrowLeft size={24}/> Racha</Link></h1>
        <section className={style.detailsBody}>
            <header className={style.headerDetails}>
                <h2>Detalhes</h2>
                <div>
                    <button className={style.delete}><Trash size={16} /> Cancelar</button>
                    <button className={style.edit}><PencilLine size={16} /> Editar</button>
                </div>
            </header>
            <div className={style.details} >
                <p>Dia: <span>24/01/25</span></p>
                <p>Valor total: <span>R$ 140,00</span></p>
                <p>Jogadores: <span>14</span></p>
                <p>Status: <span>Agendado</span></p>
                <p>Hora: <span>20:30</span></p>
                <p>Valor por pessoa: <span>R$ 10,00</span></p> 
                <p>Duração: <span>60 minutos</span></p>
                <p>Local: <span>Avenida José Munia, 1000</span></p>
            </div>
            <p className={style.obs}>Observações: <span>Nenhuma observação</span></p>
        </section>
        <section className={style.detailsBody}>
            <header>
                <h2><span>14</span> Jogadores</h2>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Digite um nome" 
                        value={player}
                        onChange={(e) => setPlayer(e.target.value)}
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
                    <PlayerList/>
                </ul>
            </table>
        </section>
    </div>
  )
}

export default Game
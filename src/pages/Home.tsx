import style from "./Home.module.css"
import GameCard from "../assets/components/GameCard"
import { useState, useEffect } from "react"
import TopMenu from "../assets/components/TopMenu"
import { useNavigate } from "react-router"
// import EasyEdit from "react-easy-edit"

interface GameCard {
    id: string,
    day: Date,
    hour: string,
    value: string,
    players: number,
    duration: string,
    status: string,
}


const Home = () => {

  const navigate = useNavigate();
  const [gamesList, setGamesList] = useState<[]>(
    //  JSON.parse(localStorage.getItem("gamesList")) || 
     [])

  // useEffect(() => {
  //   localStorage.setItem("gamesList", JSON.stringify(gamesList)); 
  // }, [gamesList])

  const handleAddGame = (event: { preventDefault: () => void }) => {
      event.preventDefault()
      const newGame = {GameCard}
      setGamesList([...gamesList, newGame])
      // navigate('/detalhes')
      setTimeout(() => {
        navigate('/detalhes');
      }, 600);

  }

  // const deleteGame = (id) => {
  //   const updatedGames = gamesList.filter((game) => game.id !== id);
  //   setGamesList(updatedGames);
  //   localStorage.setItem("gamesList", JSON.stringify(updatedGames));
  // };

  // onClick={() => deletePlayer(newGame.id)}>

  return (
    <div>
      <TopMenu text="Criar racha" addGame={handleAddGame}/>
    
      <div className={style.cards}>
        <GameCard
        day={20}
        hour={"20h30"}
        value={140}
        players={14}
        duration={"60 minutos"}
        status={"Agendado"}
        />
        {gamesList.map(
          (newGame) => (
            <GameCard key={newGame.id}/>
          )
        )}
      </div>
    </div>
  )
}

export default Home
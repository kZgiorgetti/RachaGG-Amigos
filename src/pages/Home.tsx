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
  const [gamesList, setGamesList] = useState<GameCard[]>(
    JSON.parse(localStorage.getItem("gamesList")!) || []
);

useEffect(() => {
    const storedGames = JSON.parse(localStorage.getItem("gamesList")!) || [];
    setGamesList(storedGames);
}, []);

     

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
      {gamesList.map((game) => (
        <GameCard
            key={game.id}
            day={game.day}
            hour={game.hour}
            value={game.value}
            players={game.players}
            duration={game.duration}
            status={game.status}
        />
    ))}
      </div>
    </div>
  )
}

export default Home
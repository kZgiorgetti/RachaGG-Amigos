import style from "./Home.module.css"
import GameCard from "../assets/components/GameCard"
import { useState, useEffect } from "react"
import TopMenu from "../assets/components/TopMenu"
import { useNavigate } from "react-router"

interface GameCard {
    id: string,
    day: string,
    hour: string,
    value: string,
    players: number,
    duration: string,
    status: string,
    location: string,
}

const Home = () => {
  const navigate = useNavigate();
  const [gamesList, setGamesList] = useState<GameCard[]>(
    JSON.parse(localStorage.getItem("gamesList")!) || []
  );
  
  useEffect(() => {
    const handleStorageChange = () => {
      const storedGames = JSON.parse(localStorage.getItem("gamesList")!) || [];
      setGamesList(storedGames);
    };
  
    window.addEventListener("storage", handleStorageChange);
  
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);


  const handleDeleteGame = (id: string) => {
    const updatedGames = gamesList.filter((game) => game.id !== id);
    setGamesList(updatedGames);
    localStorage.setItem("gamesList", JSON.stringify(updatedGames)); // Atualiza o localStorage
  };

  const handleAddGame = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setTimeout(() => {
      navigate('/detalhes');
    }, 600);
  };


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
            location={game.location}
            deleteGame={() => handleDeleteGame(game.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default Home;


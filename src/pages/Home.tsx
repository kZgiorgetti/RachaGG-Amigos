import style from "./Home.module.css"
import GameCard from "../assets/components/GameCard"
import { useState, useEffect } from "react"
import TopMenu from "../assets/components/TopMenu"
import { useNavigate } from "react-router"

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
    const handleStorageChange = () => {
      const storedGames = JSON.parse(localStorage.getItem("gamesList")!) || [];
      setGamesList(storedGames);
    };

    window.addEventListener("storage", handleStorageChange); // Monitore mudanças no localStorage.

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Função para deletar um jogo da lista
  const handleDeleteGame = (id: string) => {
    const updatedGames = gamesList.filter((game) => game.id !== id);
    setGamesList(updatedGames);
    localStorage.setItem("gamesList", JSON.stringify(updatedGames)); // Atualiza o localStorage
  };

  const handleAddGame = (event: { preventDefault: () => void }) => {
      event.preventDefault()
      const newGame = {id: "unique-id", day: new Date(), hour: "10:00", value: "100", players: 4, duration: "60", status: "Ativo"}; // Exemplo de dados
      setGamesList([...gamesList, newGame]);
      setTimeout(() => {
        navigate('/detalhes');
      }, 600);
  }

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
            deleteGame={() => handleDeleteGame(game.id)} // Passa a função para deletar o jogo
          />
        ))}
      </div>
    </div>
  )
}

export default Home;

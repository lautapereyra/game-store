import GameCard from "../gameCard/GameCard";
import gamesData from "../../assets/gameData/gameData";
import Navbar from "../home/navbar/Navbar";
import "./Catalog.css";

function Catalog() {
    return (
        <>
            <Navbar />
            <div className="catalog-container">
                <div className="container">
                    <h2 className="catalog-title">Catálogo de Juegos</h2>

                    <div className="catalog-grid">
                        {gamesData.map((game) => (
                            <GameCard key={game.id} game={game} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Catalog;
import GameCard from "../../gameCard/GameCard";
import gamesData from "../../../assets/gameData/gameData";
import Navbar from "../../navbar/Navbar";
import "./catalog.css";




function Catalog({ addToCart }) {





    return (
        <>
            <Navbar />
            <div className="catalog-container">
                <div className="container">
                    <h2 className="catalog-title">Catálogo de Juegos</h2>

                    <div className="catalog-grid">
                        {gamesData.map((game) => (
                            <GameCard key={game.id} game={game} addToCart={addToCart} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Catalog;
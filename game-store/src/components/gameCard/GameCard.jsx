import "./GameCard.css";
import { useState } from 'react'

function GameCard({ game, addToCart }) {
    const [added, setAdded] = useState(false);

    const handleAdd = () => {
        addToCart(game);
        setAdded(true);

        setTimeout(() => {
            setAdded(false);
        }, 2000);
    };
    return (
        <div className="container">
            <div className="game-card">
                <img src={game.image} alt={game.title} />
                <div className="game-card-body">
                    <div className="game-card-title">{game.title}</div>
                    <div className="game-card-genre">{game.genre}</div>
                    <div className="game-card-price">${game.price}</div>
                    <button onClick={handleAdd}>Agregar al carrito</button>
                    {added && <p className="success-msg">Agregado al carrito ✅</p>}
                </div>
            </div>
        </div>
    );
}

export default GameCard;
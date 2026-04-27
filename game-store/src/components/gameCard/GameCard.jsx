import "./GameCard.css";

function GameCard({ game }) {
    return (
        <div className="container">
            <div className="game-card">
                <img src={game.image} alt={game.title} />
                <div className="game-card-body">
                    <div className="game-card-title">{game.title}</div>
                    <div className="game-card-genre">{game.genre}</div>
                    <div className="game-card-price">${game.price}</div>
                    <button>Comprar</button>
                </div>
            </div>
        </div>
    );
}

export default GameCard;
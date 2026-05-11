import React, { useState } from 'react'
import Navbar from '../../navbar/Navbar';
import { Button, Badge } from 'react-bootstrap';
import gamesData from '../../../assets/gameData/gameData';
import { useParams } from 'react-router';
import './gamedetails.css'

const GameDetails = ({ addToCart }) => {

  const { id } = useParams();

  const [added, setAdded] = useState(false);

  const game = gamesData.find(g => g.id === parseInt(id));

  const handleAdd = () => {
    addToCart(game);

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  }

  return (
    <>
      <Navbar />

      <div
        className="game-details-page"
        style={{
          backgroundImage: `linear-gradient(
            rgba(5,5,15,0.85),
            rgba(5,5,15,0.95)
          ), url(${game.image})`
        }}
      >

        <div className="game-details-overlay">

          <div className="game-hero">

            <div className="game-cover">
              <img src={game.image} alt={game.title} />
            </div>

            <div className="game-info">

              <Badge bg="primary" className='mb-3'>
                {game.genre}
              </Badge>
              <h1
                style={{
                  fontSize: "3rem",
                  fontWeight: "700"
                }}
              >
                {game.title}
              </h1>

              <p className="game-description">
                {game.description}
              </p>

              <div className="game-meta">
                <span>{game.rating}/10</span>
                <span>{game.gameMode}</span>
                <span>{game.platform}</span>
              </div>

              <h2 className="game-price">
                ${game.price}
              </h2>

              <div className="game-buttons">

                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleAdd}
                >
                  Agregar al carrito
                </Button>

                <Button
                  variant="outline-light"
                  size="lg"
                >
                  Wishlist
                </Button>

              </div>

              {added && (
                <p className="added-message">
                  Agregado al carrito ✅
                </p>
              )}

            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default GameDetails
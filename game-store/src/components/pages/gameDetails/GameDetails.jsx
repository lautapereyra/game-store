import React from 'react'
import gamesData from '../../../assets/gameData/gameData';
import Navbar from '../../navbar/Navbar';
import { Card, Badge, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router';
import Catalog from '../catalog/Catalog';

const GameDetails = () => {
     return (
        <>
            <Navbar />
           <Card>
            <Card.Img 
            height={500}
            variant='top'
            src= {gamesData.image}/>
            <Card.Body>
              <Card.Title>{gamesData.title}</Card.Title>
              <Card.Subtitle>{gamesData.genre}</Card.Subtitle>
              <p>{gamesData.description}</p>
              <Row>
                <Link to ="/game-details">
                <Button>
                  Comprar Juego
                </Button>
                </Link>
              </Row>
            </Card.Body>


           </Card>
        </>
    );
}

export default GameDetails
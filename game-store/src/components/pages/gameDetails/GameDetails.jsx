import React from 'react'
import Navbar from '../../navbar/Navbar';
import { Card, Badge, Row, Button, Col } from 'react-bootstrap';
import Catalog from '../catalog/Catalog';
import gamesData from '../../../assets/gameData/gameData';
import { useParams } from 'react-router';
import'./gamedetails.css' 


const GameDetails = () => {

  const {id} = useParams();

  const game = gamesData.find(g => g.id=== parseInt(id));

    return (
    <>
      <Navbar />
      <div className='game-background-bg'>
      <div className="container my-5">
        <Card className="p-3">
          <Row>
            <Col md={5}>
              <Card.Img
                src={game.image}
                style={{ height: "100%", objectFit: "cover" }}
              />
            </Col>
            
            <Col md={7}>
              <Card.Body>
                <Card.Title>{game.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {game.genre}
                </Card.Subtitle>

                <p>{game.description}</p>

                <h4 className="mt-3">${game.price}</h4>

                <Button variant="primary" className="mt-3">
                  Comprar Juego
                </Button>
              </Card.Body>
            </Col>

          </Row>
        </Card>
      </div>
      </div>
    </>
  );
}
export default GameDetails;
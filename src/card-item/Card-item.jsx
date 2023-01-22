import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import './Card-item.css'

const CardItem = (props) => {
  return (
    <div className='card-container'>
      <img alt={props.oeuvre.titre}
      className='image'
      src={props.oeuvre.imageUrl} />
      <h1>{props.oeuvre.titre}</h1>
      <p>{props.oeuvre.auteur} - {props.oeuvre.annee}</p>
      <Container>
        <Button variant="outline-secondary" size="sm" className="m-2 ">Editer</Button>
        <Button variant="outline-danger" size="sm" className="m-2">Supprimer</Button>
        </Container>
    </div>
  )
}

export default CardItem
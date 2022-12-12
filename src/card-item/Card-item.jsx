import React from 'react'
import './Card-item.css'

const CardItem = (props) => {
  return (
    <div className='card-container'>
      <img alt={props.oeuvre.titre}
      className='image'
      src={props.oeuvre.imageUrl} />
      <h1>{props.oeuvre.titre}</h1>
      <p>{props.oeuvre.auteur} - {props.oeuvre.annee}</p>
    </div>
  )
}

export default CardItem
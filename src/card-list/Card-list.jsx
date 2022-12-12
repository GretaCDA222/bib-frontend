import React from 'react'
import CardItem from '../card-item/Card-item'
import "./Card-list.css"
const CardList = (props) => {
  return (
    <div className='card-list' >
        {props.oeuvres.map(oeuvreItem => (
            <CardItem key={oeuvreItem.id} oeuvre={oeuvreItem} />
        )
            )}
    </div>
  )
}

export default CardList
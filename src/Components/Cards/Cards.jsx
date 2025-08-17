import React from 'react'
import "./Cards.css"
import { CardsData } from './CardsData'
import Card from '../Card/Card'

function Cards() {
  return (
   <div className="Cards">
    {
        CardsData.map((card,id) => {
            return(
                <div className="parentContainer">
                    <Card
                      title = {card.title}
                      value = {card.value}
                      icon = {card.icon}
                    />

                </div>
            )
        })
    }

   </div>
  )
}

export default Cards

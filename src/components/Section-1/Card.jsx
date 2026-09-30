import React from 'react'
import Number from './Number'
import CardBotum from './CardBotum'

const Card = (props) => {
  
  return (
    <div className="h-3/3 shrink-0 border-2 pb-2 flex flex-col justify-between  w-[30%] bg-[url({props.img})] bg-cover bg-center"style={{ backgroundImage: `url(${props.img})` }}>

        <Number number={props.number} />
       
        <CardBotum tag={props.tag} intro={props.intro} />
    </div>
  )
}

export default Card
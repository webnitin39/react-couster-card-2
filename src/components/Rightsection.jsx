import React from 'react'
import Card from './Section-1/Card'

const Rightsection = (props) => {
  
  
  return (
    <div className='w-[66%] gap-3 h-3/4 my-30 flex-nowrap overflow-scroll flex'>
      {props.users.map((e,idx)=>{
    console.log(e.color)
    return <Card key={idx} img={e.img} number={idx+1} tag={e.tag} intro={e.intro}/>
  })}
  
      
        
        
    </div>
  )
}

export default Rightsection
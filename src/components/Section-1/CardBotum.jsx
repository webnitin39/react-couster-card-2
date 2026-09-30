import React from 'react'

const CardBotum = (props) => {
  return (
    <div className='w-full h-1/2 flex flex-col justify-between '>
        <p className='w-2/3 mx-4 text-white'>{props.intro}</p>
        <div className='flex items-center justify-between h-1/6 mx-6 text-[20px] text-white'>
            <button className='bg-blue-500 w-32 rounded-2xl'>{props.tag}</button>
           
            <i className="ri-arrow-right-long-fill text-white bg-blue-500 w-[50px] h-12 rounded-full flex items-center justify-center text-3xl"></i>
        </div>
    </div>
  )
}

export default CardBotum
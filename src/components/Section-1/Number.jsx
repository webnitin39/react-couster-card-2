import React from 'react'

const Number = (props) => {
  return (
    <div className='w-[50px] h-[50px] m-5 rounded-full bg-black text-white flex items-center justify-center text-3xl'>{props.number}</div>
  )
}

export default Number
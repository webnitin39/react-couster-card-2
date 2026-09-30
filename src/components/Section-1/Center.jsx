import React from 'react'
import Leftsection from './Leftsection'
import Rightsection from '../Rightsection'

const Center = (props) => {
 
  return (
    <div className='w-full h-11/12 p-4 border-2 flex '> 
        <Leftsection />
        <Rightsection  users={props.users} />
    </div>
  )
}

export default Center
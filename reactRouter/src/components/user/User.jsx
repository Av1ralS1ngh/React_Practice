import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const { userid } = useParams()  
  return (
    <div className='text-2xl bg-gray-700 text-white p-2 '>User: {userid} </div>
  )
}

export default User
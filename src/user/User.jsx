import React from 'react'
import { useParams } from 'react-router-dom'
export default function User() {
    const {userid} = useParams
  return (
    <div>
      <h1 className='bg-gray-600 text-white py-3'>this is User: {userid} </h1>
    </div>
  )
}

import React from 'react'

export default function Components(props) {
  console.log(props.name);
  return (
    <div>
      <h1 className='bg-red-500 py-3 text-center my-2' >{props.name}</h1>
    </div>
  )
}

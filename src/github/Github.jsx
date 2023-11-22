import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
export default function Github() {
    const Data = useLoaderData()
    // const [Data,setData] = useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshChaudhary')
    //     .then((response) => response.json())
    //     .then((data) =>{
    //         setData(data)
    //     })
    // },[])
  return (
    <div className='text-center m-4 bg-gray-400 text-white p-4 text-3xl' >
        Github followers:{Data.followers}
        <img src={Data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
};
export const githubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/hiteshChaudhary')
    return response.json() 
}

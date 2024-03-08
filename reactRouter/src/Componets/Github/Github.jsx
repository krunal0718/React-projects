import React, { useEffect, useState } from 'react'


export default function Github() {
    const [data, setData] = useState([])
    useEffect(() =>{
        fetch('https://github.com/krunal0718')
        .then(Response => Response.json())
        .then(data => {
             setData(data)
        })
    })
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers: {data.followers}</div>
  )
}

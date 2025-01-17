import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
      fetch('https://api.github.com/users/Av1ralS1ngh')
        .then(response => response.json())
        .then(data => {console.log(data);
        setData(data)
    })
    }, [])
    
  return (

    <div className='text-center m-4 bg-gray-700 text-white p-2 text-3xl'>Github followers: {data.followers} 
        <img src={data.avatar_url} alt="Avatar" className="rounded-full h-250 w-250 flex items-center justify-center mx-auto" />
    </div>
)
}

export default Github
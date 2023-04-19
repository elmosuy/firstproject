import React, { useEffect } from 'react'
import data from "../../../api/All api/api_1.json"
import { useRouter } from 'next/router'

const Item = () => {
     
    const router = useRouter()
    const { id } = await  router.query
  
  return (
    <div  className='texts'>
      <div className='text'>
        <p>
            {data[id||1].text}
        </p>

      </div>
      
        
    </div>
  )
}

export default Item

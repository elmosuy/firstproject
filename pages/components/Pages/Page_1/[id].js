import React, { useEffect } from 'react';
import { useRouter  } from "next/router";




const Item = () => {
    useEffect(() => {
          const router = useRouter()
          const { id } = router.query

  });

  return (
    <div  className='texts'>
      <div className='text'>
        _<p>
            {data[id||1].text}
        </p>

      </div>
      
        
    </div>
  )
}

export default Item

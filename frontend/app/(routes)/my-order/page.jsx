
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

function MyOrder() {
    const jwt=sessionStorage.get('jwt');
    const router = useRouter();
    useEffect(()=>{
          if(!jwt)
          {
            router.replace('/')
          }
    },[]);

    
  return (
    <div>
      
    </div>
  )
}

export default MyOrder

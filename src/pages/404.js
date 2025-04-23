import React from 'react'
import Link from 'next/link'


function NotFound() {




  return (
    <div className='not_found'>
        <h1>404 - Page Not Found</h1>
        <p>Sorry, this page doesn't exist or has been moved.</p>
        <img src='https://images.unsplash.com/photo-1536094919620-d948a02d5085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' className='four_o'/>
            <Link href='/'>
            <button className='fof'>Take me Home</button>
            </Link>

    </div>
  )
}

export default NotFound
import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
  return (
   <footer className='flex justify-center py-5'>
        <p className='font-light'>Copyright © {year} All rights reserved</p>
   </footer>
  )
}

export default Footer

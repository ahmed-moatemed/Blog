import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
      <>
      <footer>
        <div className='para'>
          <p>© 2022 GorkCoder - All Rights Reserved.</p>
        </div>
        <div className='icon'>
          <i class="fab fa-facebook"></i>
          <i className='fab fa-instagram'></i>
          <i className='fab fa-twitter'></i>
          <i className='fab fa-youtube'></i>
        </div>
      </footer>
    </> 
  )
}

export default Footer
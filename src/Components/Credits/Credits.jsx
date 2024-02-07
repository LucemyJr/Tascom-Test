import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import "./Credits.css"


const Credits = () => {
  return (
    <div>
        <p className='final-credits'> @Did from <FontAwesomeIcon icon={faHeart}/> by Lucemy Ferreira</p>
    </div>
  )
}

export default Credits

import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <>
    <div className="container">
        <div className="tittle-container">
            <h1 className="tittle-text"><span className="to">To</span><span className='day'>day</span></h1>
            <p className="subtittle-text">Wake up , go ahead , do the thing not tomorrow, do <span className="to">to</span><span className='day'>day</span>.</p>
        </div>
    </div>
    </>
  )
}

export default Header

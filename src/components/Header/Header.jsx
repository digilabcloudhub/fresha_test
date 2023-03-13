import React from 'react'
import setting from '../images/settings.png';
import search from '../images/search.png'
const Header = () => {
  return (
    <div className='header'>
        
         <div className='search_bar'>
        <div className='search_box'>
            <input type="text" placeholder="       Search" />
            <img className="search" src={search} alt="search"/>
        </div>
           <div className='settings' >
            <img src={setting} alt='settings'/>
        </div>
    </div> 
        
    </div>
  )
}

export default Header
import React from 'react'
import"../css/style.css"
import { Link } from 'react-router-dom'

import Googleauth from './Googleauth'
const Header=()=>{

    return(
        <div>
            <div className="header">
              <div className="header__logo">
                 LUXERIO
              </div>
              <div className="header__btn">
                 <div className="btn__link">
                      <Link to="/show">All Listed Products</Link>   
                 </div>
                 <div className="Header__btn__login">
                     <Googleauth/>
                 </div>
             </div>
            </div>
        </div>
    )
}

export default Header
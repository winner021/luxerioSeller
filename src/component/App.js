import React from 'react'
import { connect } from 'react-redux';

import Addproduct from './products/Addproduct'

import Editproduct from "./products/Editproduct"

import { BrowserRouter,Route } from 'react-router-dom/cjs/react-router-dom.min'
import Header from "./Header"
const App=()=>{
return(
    <div>
      <BrowserRouter>
      <Header/>
        <Route path="/" exact component={Addproduct}/>
        
        <Route path="/edit" exact component={Editproduct}/>
        
      </BrowserRouter>
    </div>
)
}

export default connect() (App);
import React from 'react'
import { connect } from 'react-redux';

import Addproduct from './products/Addproduct'
import Deleteproduct from "./products/Deleteproduct"
import Editproduct from "./products/Editproduct"
import Showproduct from "./products/Showproduct"
import { BrowserRouter,Route } from 'react-router-dom/cjs/react-router-dom.min'
import Header from "./Header"
const App=()=>{
return(
    <div>
      <BrowserRouter>
      <Header/>
        <Route path="/" exact component={Addproduct}/>
        <Route path="/delete" exact component={Deleteproduct}/>
        <Route path="/edit" exact component={Editproduct}/>
        <Route path="/show" exact component={Showproduct}/>
      </BrowserRouter>
    </div>
)
}

export default connect() (App);
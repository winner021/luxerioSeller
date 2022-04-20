import React from 'react'
import { connect } from 'react-redux'
import { Field,reduxForm } from 'redux-form'
import {  producList } from '../../actions'
import"../../css/style.css"
import Productform from './Productform'
class Addproduct extends React.Component{

   
  
  
     
    submithandler=(formvalue)=>{
      this.props.producList({...formvalue,userid:this.props.userid})
      
     
    }
    
     render(){

       
        return(
           <div>
              <Productform onsubmit={this.submithandler}/>
           </div>
        )
    }
   
}


const mapStateToProps=(state)=>{
    return{userid:state.Authstate.userid}
}

const formconfig=reduxForm({form:'streamform'}) (Addproduct)
export default connect(mapStateToProps,{producList}) (formconfig)

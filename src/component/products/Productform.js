import React from 'react'
import { connect } from 'react-redux'
import { Field,reduxForm } from 'redux-form'
import {  producList } from '../../actions'
import"../../css/style.css"
class Productform extends React.Component{

    renderinput=({input,label})=>{
       
        return(
            <div className='form__field'>
            <label >{label}</label>
            <input {...input} type="text"  />
            </div>
            
        )
    }

    renderprice=({input,label})=>{
       
        return(
            <div className='form__field'>
            <label >{label}</label>
            <input {...input} type="number"  />
            </div>
            
        )
    }
    renderlist=({input,label})=>{
       
        return(
            <div className='form__field'>
            <label >{label}</label>
            <select {...input}>
            <option value="">select Product Category</option>
               <option value="T-Shirts">T-Shirts</option>
               <option value="Shirts">Shirts</option>
               <option value="Huddy">Huddy</option> 
               <option value="acesssories">Acesssories</option>
               <option value="footwear">footwear</option>
            </select>
            </div>
            
        )
    }
    Selectgender=({input,label})=>{
       
        return(
            <div className='form__field'>
            <label >{label}</label>
            <select {...input}>
            <option value="">Select Gender</option>
               <option value="Mens">Mens</option>
               <option value="Woman">Woman</option>
              
            </select>
            </div>
            
        )
    }
    renderimage=({input,label})=>{
       
        return(
            <div className='form__field'>
            <label >{label}</label>
            <input {...input} type="text"  />
            </div>
            
        )
    }
     
    submithandler=(formvalue)=>{
      this.props.onsubmit(formvalue)
     
    }
    
     render(){

       
        return(
            <div className='form'>
                <div className="AddDesc">
                 List Your Product And Grow With Us 
                </div>
               <form onSubmit={this.props.handleSubmit(this.submithandler)}>
                <Field name='Sellername' component={this.renderinput} label="Seller Name"/>
                <Field name='Brandname'  component={this.renderinput} label="Brand Name"/>
                <Field name='Price' component={this.renderprice} label="Product Price"/>
                <Field name='category' component={this.renderlist} label="Category"/>
                <Field name='For Gender'  component={this.Selectgender} label="gender"/>
                <Field name='Imageurl'  component={this.renderimage} label="Image Url"/>
                <button>
                    AddProduct
                </button>
               </form>
            </div>
        )
    }
   
}


const mapStateToProps=(state)=>{
    return{userid:state.Authstate.userid}
}

const formconfig=reduxForm({form:'streamform'}) (Productform )
export default connect(mapStateToProps,{producList}) (formconfig)
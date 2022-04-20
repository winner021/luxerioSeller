/*856212945630-n9k6a9gln6e1k0idnv22tq2tqnosd1qr.apps.googleusercontent.com*/ 
import React from 'react'
import { connect } from 'react-redux'
import { signInAction } from '../actions'
import { signInOut } from '../actions'
import '../css/style.css'
class Googleauth extends React.Component{

    componentDidMount(){

        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:'856212945630-n9k6a9gln6e1k0idnv22tq2tqnosd1qr.apps.googleusercontent.com',
                scope:'email',
            }).then(()=>{
                this.auth=window.gapi.auth2.getAuthInstance()
                this.authInstanceRender(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.authInstanceRender)
            })
        })

    }

     authInstanceRender=(isSignedIN)=>{
        
       if(isSignedIN){
            this.props.signInAction(window.gapi.auth2.getAuthInstance().currentUser.get().getId());
       }
       else{
           this.props.signInOut();
       }
    }

    renderbtn=()=>{
       if(this.props.loginStatus.Authstate.sign){
           return(
               <div>
                   <div className="login_btn">
                      <button className='login' onClick={this.signoutclick}>logout</button> 
                   </div>
               </div>
           )
       }
       else{
        return(
            <div>
                <div className="login_out">
                <button className='logout' onClick={this. signinclick}>login</button> 
                </div>
            </div>
        )
       }
    }

    signinclick=()=>{
        this.auth.signIn()
    }
    signoutclick=()=>{
        this.auth.signOut()
    }

    render(){
    
        return(
            <div>
               {this.renderbtn()}
            </div>
        )
    }
}


const mapStateToProps=(state)=>{
return{loginStatus:state}
}
export default connect(mapStateToProps,{signInAction,signInOut}) (Googleauth)
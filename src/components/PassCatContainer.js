import React,{ useState } from 'react'
import {connect} from 'react-redux';
import { addPassCat,updatePassCat} from '../redux';
import SignupContainer from './SignupContainer';
function PassCatContainer(props) {

    return (
       <SignupContainer/>
    )
}

const mapStatetoProps=(state)=>{
 return{
    category:state.pass.category,
    action:state.pass.action,
    id:state.pass.id,
    user_id:state.user.userDetails.userid,
    msg:state.pass.msg
 }
}

const mapDispatchtoProps=(dispatch)=>{
 return{
    addPassCat:function(category,user_id){
        dispatch(addPassCat(category,user_id));
    },
    updateCat:function(id,category,user_id){
        dispatch(updatePassCat(id,category,user_id));
    }  
 }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(PassCatContainer);

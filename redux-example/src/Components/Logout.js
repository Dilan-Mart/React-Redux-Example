import React from 'react';
import {connect} from 'react-redux';

const Logout = (props) => {
    return (
        <div>
            <h2>Welcome, {props.userName}</h2>
            <button onClick={props.logoutFn}>logout</button>
        </div>
    )
}

const StateToProps=state=>{
    return{
        userName:state.userName
    }
}

const DispatchToProps=dispatch=>{
    return{
        logoutFn:()=>dispatch({type:"LOGOUT"})
    }
}

export default connect(StateToProps,DispatchToProps)(Logout)

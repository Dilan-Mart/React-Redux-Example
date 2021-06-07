import React,{useState} from 'react';
import {connect} from 'react-redux';

const Login = (props) => {
    const [userName,setUserName]=useState('');
    const [password,setPassword]=useState('');

    const submitter=(event)=>{
        event.preventDefault();
        const logData={
            userName:userName,
            password:password
        }
        props.setData(logData)
    }

    return (
        <div>
            <form onSubmit={submitter}>
                <input type='text' placeholder="Username" value={userName} onChange={e=>setUserName(e.target.value)} />
                <input type='password'placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
                <input type="submit" value="Login"/>
            </form>
        </div>
    )
}


const mapDispatchToProps=dispatch=>{
    return{
        setData:(info)=>dispatch({type:"LOGIN",payload:{userName:info.userName,password:info.password}})
    }
}


export default connect(null,mapDispatchToProps)(Login)

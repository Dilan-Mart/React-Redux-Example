import './App.css';
import Login from './Components/Login';
import Logout from './Components/Logout';
import {connect} from 'react-redux';

const App=(props)=> {
  return (
    <div className="App">
      {props.loggedIn?<Logout />:<Login />}
    </div>
  );
}

const mapStateToProps=state=>{
  return{
    loggedIn:state.loggedIn
  }
}

export default connect(mapStateToProps)(App);

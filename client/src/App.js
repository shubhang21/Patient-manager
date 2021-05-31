import React,{useState,useEffect} from 'react';
import './App.css';
import Login from './Components/Login.js';
import Dashboard from'./Components/Dashboard.js'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';





function App() {

  const[token,setToken]=useState(false);
  useEffect(() => {
    console.log("Re-render")
    
  }, )

  if(!token){
    return <div className="App" ><Login setToken={setToken} /></div>
  }
  return (
    <div className="App">
       <AppBar position="static">
  <Toolbar>
    
    <Typography variant="h6">
      Patient Manager
    </Typography>
  </Toolbar>
</AppBar>
        
              <Dashboard />
        
      
        
    </div>
  );
}

export default App;

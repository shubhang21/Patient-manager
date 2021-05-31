
import React,{useState} from 'react'
import axios from 'axios'
import './Login.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';


   
 

function Login({setToken}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

  
    const handleSubmit= e=>{
        e.preventDefault();
        if(username===''||password==='')
        alert("Enter credentials")
        else
        {
        axios.get(`http://localhost:3002/api/login/${username}`).then((response)=>{
            if(response.data[0]!=null&&response.data[0].password===password)
            {
                setToken(true);
            }
            else{
                alert('Wrong credentials')
            }

        });
    }
        
    }


    return (
        <div className="login">
             <AppBar position="static">
  <Toolbar>
    
    <Typography variant="h6">
      Patient Manager
    </Typography>
  </Toolbar>
</AppBar>
            <h3>Welcome to Patient Manager</h3>
            <h4>Please Login to Proceed</h4>
            <form >
               <div>
                    {/* <div><label>Username</label></div> */}
                   <Input className='inputclass' placeholder="Username" type="text" onChange={e=>setUsername(e.target.value)} />
                </div> 
                <div>
                    
                    {/* <div><label>Password</label></div> */}
                    <Input className='inputclass' placeholder="Password" type="password" onChange={e=>setPassword(e.target.value)} />
                </div>
                
                <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>

            </form>
        </div>
    )
}

export default Login

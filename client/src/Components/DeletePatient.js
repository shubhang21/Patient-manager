import React,{useState} from 'react'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import axios from 'axios'


function DeletePatient() {
    const [mobile, setMobile] = useState(0)
    const handleSubmit=()=>{
        axios.delete(`http://localhost:3002/api/delete/${mobile}`).then((response)=>
        console.log(response))
    }
    
    return (
        <div>
            <h2>Delete Patient</h2>
            <Input type="text" placeholder="Enter Mobile" onChange={(e)=>{setMobile(parseInt(e.target.value))}} />
            <Button variant="contained" color="primary" onClick={handleSubmit}>Delete</Button>
        </div>
    )
}

export default DeletePatient

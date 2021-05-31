import React,{useState,useEffect} from 'react'

import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import axios from 'axios'



function InsertPatient({setReload}) {
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const [gender, setGender] = useState('')
    const [mobile, setMobile] = useState(0)
    const [email, setEmail] = useState('')


    const handleSubmit=(e)=>{
        axios.post(`http://localhost:3002/api/insertpatient`,{
            name:name,
            age:age,
            gender:gender,
            mobile:mobile,
            email:email}).then((response)=>
        console.log(response))
        setReload(true);
        
    }
    
    return (
        
        <div>
            <h2>Add New Patient</h2>
            <div><Input type="text"  placeholder ="Name" onChange={(e)=>{setName(e.target.value)} }/></div>
            <div><Input type="number"  placeholder ="Age" onChange={(e)=>{setAge(e.target.value)} }/></div>
            <div><Input type="text"  placeholder ="Gender" onChange={(e)=>{setGender(e.target.value)} }/></div>
            <div><Input type="text"  placeholder ="Mobile" onChange={(e)=>{setMobile(e.target.value)} }/></div>
            <div><Input type="text"  placeholder ="Email" onChange={(e)=>{setEmail(e.target.value)} }/></div>
            <Button variant="contained" color="primary" onClick={handleSubmit}>Insert</Button>
        </div>
    )
}

export default InsertPatient

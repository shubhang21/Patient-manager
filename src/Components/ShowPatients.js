import {Table, TableBody, TableHead, TableRow, TableCell, Tab, Button} from '@material-ui/core'
import axios from 'axios'
import React,{useEffect,useState} from 'react'



function ShowPatients({reload,setReload}) {

    const [people, setPeople] = useState()
    
    const [visit, setVisit] = useState()
    // const [mobile, setMobile] = useState('')

    const handleVisit=(mobile)=>{
        axios.get(`http://localhost:3002/api/visits/${mobile}`).then((response)=>
       { 
        setVisit(response.data)
        
    })
    }


    
    useEffect(()=>{
        
            axios.get(`http://localhost:3002/api/patients`).then((response)=>
           { 
            setPeople(response.data)}) 
            if(people)
            
                 
            setReload(false)
           
            
    },[reload])



    const handleDelete=(patient)=>{
        axios.delete(`http://localhost:3002/api/delete/${patient.mobile}`).then((response)=>
        console.log(response))
        setReload(true)
    }
    
    
      console.log(people)
    return (
        <div>
            <h2>Patients</h2>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Gender</TableCell>
                        <TableCell>Mobile</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {  
                        people&&people.map( patient=><React.Fragment key={patient.mobile}><TableRow key={patient.mobile}>
                            <TableCell>{patient.name}</TableCell>
                            <TableCell>{patient.age}</TableCell>
                            <TableCell>{patient.gender}</TableCell>
                            <TableCell>{patient.mobile}</TableCell>
                            <TableCell>{patient.email}</TableCell>
                            <TableCell><Button color="secondary"  onClick={()=>{handleVisit(patient.mobile)}}>View Visits</Button></TableCell>
                            <TableCell><Button color="secondary"  onClick={()=>{handleDelete(patient)}}>Delete</Button></TableCell>
                            </TableRow>
                            <TableHead>
                    <TableRow >
                        <TableCell>Date of Visit</TableCell>
                        <TableCell>Doctor</TableCell>
                        <TableCell>Symptoms</TableCell>
                        <TableCell>Prescription</TableCell>
                    </TableRow>
                </TableHead>
                            <TableRow>
                            {visit&&visit.map(vis=>
                    <TableRow>
                        <TableCell>{vis.dateofvisit}</TableCell>
                        <TableCell>{vis.doctor}</TableCell>
                        <TableCell>{vis.symptoms}</TableCell>
                        <TableCell>{vis.prescription}</TableCell>
                    </TableRow>)
                
      }
                            </TableRow>
                            </React.Fragment>
                            )
                            
                    }
                </TableBody>
            </Table>
            

            
        </div>
    )
}

export default ShowPatients

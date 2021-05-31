import React,{useState} from 'react'
import axios from 'axios'
import { TableCell, TableRow,Table,TableHead,Input, Button, TableBody } from '@material-ui/core'

function Visit() {
    const [visit, setVisit] = useState()
    const [mobile, setMobile] = useState('')

    
    

    const handleSubmit=()=>{
        axios.get(`http://localhost:3002/api/visits/${mobile}`).then((response)=>
       { 
        setVisit(response.data)
    console.log(visit)})
    }
    
    return (
        <div>
            <h2>Visits</h2>
            <Input type="text" placeholder="Enter Mobile" onChange={(e)=>{setMobile(e.target.value)}} />
            <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
            <Table size="small">
                <TableHead>
                    <TableRow >
                        <TableCell>Date of Visit</TableCell>
                        <TableCell>Doctor</TableCell>
                        <TableCell>Symptoms</TableCell>
                        <TableCell>Prescription</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {visit&&visit.map(vis=>
                    <TableRow>
                        <TableCell>{vis.dateofvisit}</TableCell>
                        <TableCell>{vis.doctor}</TableCell>
                        <TableCell>{vis.symptoms}</TableCell>
                        <TableCell>{vis.prescription}</TableCell>
                    </TableRow>)
                
      }
                </TableBody>
            </Table>
            
        </div>
    )
}

export default Visit

import React,{useState,useEffect} from 'react'
import InsertPatient from './InsertPatient'
import ShowPatients from './ShowPatients'
import Visit from './Visit'
import './Dashboard.css'
function Dashboard() {

    const [reload, setReload] = useState(false)

    useEffect(() => {
        
    }, [reload])
    
    return (
        <div>
           <h2>Dashboard</h2> 
           <div className="side">
               <InsertPatient className="item" setReload={setReload} />
                <Visit className="item" />
           </div>
            
            <ShowPatients reload={reload} setReload={setReload}/>
           
            {/* <DeletePatient /> */}

           
           
        </div>
    )
}

export default Dashboard

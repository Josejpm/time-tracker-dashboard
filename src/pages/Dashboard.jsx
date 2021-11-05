import axios from 'axios';
import React,{Fragment, useEffect, useState} from 'react';
import TimeCardsGrid from '../components/TimeCardsGrid';

const Dashboard = () => {

    const [data,setData] = useState([])

    useEffect(()=>{

        const apiCall = async()=>{
            const resp = await axios.get('http://localhost:3004/registries');
            setData(resp.data);
        }

        apiCall()

    },[]);

    return ( 
        <Fragment>
            <h1>Dashboard</h1>
            <div className="cards-container">
                <TimeCardsGrid data={data}  />
            </div>
        </Fragment>
        
     );
}
 
export default Dashboard;
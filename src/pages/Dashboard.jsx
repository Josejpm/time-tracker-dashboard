import axios from 'axios';
import React,{useEffect, useState} from 'react';
import TimeCardsGrid from '../components/TimeCardsGrid';
import User from '../components/User';

const Dashboard = () => {

    const [data,setData] = useState([]);
    const [selection,setSelection]=useState('daily')


    useEffect(()=>{
        const apiCall = async()=>{
            const resp = await axios.get('http://localhost:3004/registries');
            setData(resp.data);
        }
        apiCall()
    },[]);

    return ( 
        <div className="dashboard__grid">
            <User selection={selection} setSelection={setSelection} />
            <TimeCardsGrid data={data} selection={selection} />
        </div>
     );
}
 
export default Dashboard;
import axios from 'axios';
import React,{Fragment, useEffect, useState} from 'react';
import Card from '../components/Card';

const Dashboard = () => {

    const [data,setData] = useState([])

    useEffect(()=>{

        const apiCall = async()=>{
            const resp = await axios.get('http://localhost:3004/registries');
            console.log(data);
            setData(resp.data);
        }

        apiCall()

    },[]);

    console.log(data);
    return ( 
        <Fragment>
            <h1>Dashboard</h1>
            {data 
                ? (data.map(item=>(
                    <Card key={item.title} item={item} />
                ))) 
                : null
            }
            <Card data={data} />
        </Fragment>
        
     );
}
 
export default Dashboard;
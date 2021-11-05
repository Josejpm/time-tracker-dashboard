import React, { useState } from 'react';
import userImage from '../assets/img/image-jeremy.png'

const User = ({selection,setSelection}) => {

    const [activeClass,setActiveClass]= useState ({
        daily:'true',
        weekly:'false',
        monthly:'false',
    })

    const handleClick = (period)=>{

        switch (period) {
            case 'daily':
                setSelection(period)
                setActiveClass({ daily:'true',weekly:'false',monthly:'false' })
                break;
            case 'weekly':
                setSelection(period)
                setActiveClass({ daily:'false',weekly:'true',monthly:'false' })
                break;
            case 'monthly':
                setSelection(period)
                setActiveClass({ daily:'false',weekly:'false',monthly:'true' })
                break;
        
            default:
                setSelection(period)
                setActiveClass({ daily:'true',weekly:'false',monthly:'false' })
                break;
        }
        

    }


    return ( 
        <div className="user">
            <div className="user__info">
                <div className="user__image">
                    <img src={userImage} alt="user" />
                </div>
                <div className="user__display">
                    <p className='user__report'>Report for</p>
                    <p className='user__name'>Jeremy <span>Robson</span></p>
                </div>
            </div>
            <div className="period-selection">
                <p className={activeClass.daily} onClick={()=>handleClick('daily')} >Daily</p>
                <p className={activeClass.weekly} onClick={()=>handleClick('weekly')} >Weekly</p>
                <p className={activeClass.monthly} onClick={()=>handleClick('monthly')} >Monthly</p>
            </div>
        </div>
     );
}
 
export default User;
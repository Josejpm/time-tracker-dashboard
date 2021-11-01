import React from 'react';
import ellipsis from '../assets/img/icon-ellipsis.svg'

const Card = ({item}) => {

    console.log(item);
    return ( 

        <div className="card">
            <div className="card__header">
                <p className='card__title' >{item.title}</p>
                <div className="card__ellipsis">
                    <img src={ellipsis} alt="ellipsis"/>
                </div>
            </div>
        </div>

     );
}
 
export default Card;
import React from 'react';
import ellipsis from '../assets/img/icon-ellipsis.svg'

const Card = () => {
    return ( 

        <div className="card">
            <div className="card__header">
                <p className='card__title' >Work</p>
                <div className="card__ellipsis">
                    <img src={ellipsis} alt="ellipsis"/>
                </div>
            </div>
        </div>

     );
}
 
export default Card;
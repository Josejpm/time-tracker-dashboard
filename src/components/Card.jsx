import React from 'react';
import ellipsis from '../assets/img/icon-ellipsis.svg';
import iconExercise from '../assets/img/icon-exercise.svg'
import iconPlay from '../assets/img/icon-play.svg'
import iconSelfCare from '../assets/img/icon-self-care.svg'
import iconSocial from '../assets/img/icon-social.svg'
import iconStudy from '../assets/img/icon-study.svg'
import iconWork from '../assets/img/icon-work.svg'

const Card = ({item,selection}) => {

    const icon = ()=>{
        switch (item.title) {
            case 'Exercise':
                return iconExercise
            case 'Play':
                return iconPlay
            case 'Self Care':
                return iconSelfCare
            case 'Social':
                return iconSocial
            case 'Study':
                return iconStudy
            case 'Work':
                return iconWork
            default:
                return iconWork
        }
    }

    const legend =()=>{
        switch (selection) {
            case 'daily':
                return 'Yesterday'
            case 'weekly':
                return 'Last Week'
            case 'monthly':
                return 'Last Month'
            default:
                return 'daily'
        }
    }
    
    const {current,previous} = item.timeframes[`${selection}`];
                    
    return (
            <div className="card">
                <div className={`card-header ${item.title.toLowerCase()}`}  >
                    <img className='card-header__image'  src={icon()} alt="header icon"/>
                </div>

                <div className="card-body">
                    <div className='card-body__header'>
                        <h3 className='card-body__title' >{item.title}</h3>
                        <div className="card-body__ellipsis">
                            <img src={ellipsis} alt="ellipsis"/>
                        </div>
                    </div>
                    <p className="card-body__time"> {current}h </p>
                    <p className="card-body__period"> {legend()} - {previous}h </p>
                </div>
            </div>
    );
}
 
export default Card;
import React from 'react'
import Card from './Card'

const TimeCardsGrid = ({data}) => {
    return ( 

        <div className="cards-grid">
            {data 
                ? (data.map(item=>(
                    <Card key={item.title} item={item} />
                ))) 
                : null
            }
        </div>

     );
}
 
export default TimeCardsGrid;
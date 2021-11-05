import React from 'react'
import Card from './Card'

const TimeCardsGrid = ({data,selection}) => {

    return ( 

        <div className="cards-grid">
            {data 
                ? (data.map(item=>(
                    <Card key={item.title} item={item} selection={selection} />
                ))) 
                : null
            }
        </div>

     );
}
 
export default TimeCardsGrid;
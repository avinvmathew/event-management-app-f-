// import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Items from './Items';
import events from './events.json';

function Carousel1() {
    console.log(events);
    return (
        <Carousel>
            {events.map(item => (
                <Items key={item.id} item={item} />
            ))}
        </Carousel>
    );
}

export default Carousel1;

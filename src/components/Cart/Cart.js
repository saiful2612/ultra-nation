import React from 'react';
import Country from '../Country/Country';

const Cart = (props) => {
    const cart =props.cart;
    let totalPopulation=cart.reduce((sum,country) => sum + country.population,0)
    return (
        <div>
            <h4>This is cart:{cart.length} </h4>
            <h5>Total Population: {totalPopulation}</h5>
        </div>
    );
};

export default Cart;
import React from 'react';

const Country = (props) => {
    const {name,population,region,flag} = props.country;

    const flagStyle= {height:'100px'}

    const handleAddCountry=props.handleAddCountry;
    return (
        <div style={{border:'1px solid blue',margin:'10px',padding:'10px'}}>
            <div>
                <h4> Country: {name}</h4>
                <p>Population: {population}</p>
                <p><small>region: {region}</small></p>
            </div>

            <div>
                <img style={flagStyle} src={flag} alt=""/>
            </div>

            <button onClick={()=>handleAddCountry(props.country)} >Added Country</button>

        </div>

    
    );
};

export default Country;
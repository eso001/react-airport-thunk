import React from 'react';

const Matches = (props) => (
  <div className="destination">
    { !props.name &&
      <p className="airport">Enter a city or airport code above.</p>
    }
    { props.name &&
      <div>
        <h2 className="location">{props.city}, {props.country}</h2>
        <p className="airport"><span className="name">{props.name}</span> <span className="iata">({props.iata})</span></p>
      </div>
    }
  </div>
);

export default Matches;

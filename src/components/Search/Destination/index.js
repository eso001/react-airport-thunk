import React from 'react';

const Destination = (props) => (
  <div className="destination">
      <h2 className="location">{props.city}, {props.country}</h2>
      <div className="routes">
        { props.airlines && props.airlines.length > 0 &&
          props.airlines.map((line, ind) => {
            return (
              <div className="route" key={ind} >
                  <span className="route-detail airline">{line.name}</span>
                  <span className="route-detail time">{line.time}</span>
              </div>
            )
          })
        }
      </div>

      <iframe
        className="destination-map"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        title="destination"
        src={"https://maps.google.com/maps?q=" + props.latitude + "," + props.longitude + "&z=3&hl=en&output=embed"}>
      </iframe>
      <p className="airport"><span className="name">{props.name}</span> <span className="iata">({props.iata})</span></p>
  </div>
);

export default Destination;

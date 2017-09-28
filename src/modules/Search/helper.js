import _ from 'lodash';

export default {
  filterAirports(data, query) {
    return _.filter(data, (port) => {
      const { name, iata, city } = port;

      if ((name.toLowerCase().indexOf(query) > -1 || iata.toLowerCase().indexOf(query) > -1 || city.toLowerCase().indexOf(query) > -1) && iata !== 'LAX') {
        return port
      }
    })

  },

  createListOfTimes(data, airport, direction) {
    var routes = [];

    _.map(data, (airline) => {
      _.map(airline.routes, (route) => {

        if (direction === 'Outbound') {
          if (route.departure.icao === 'KLAX' && route.arrival.icao === airport.icao) {
            let line = {
              name: airline.name,
              time: route.departure.time
            }
            routes.push(line)
          }
        }

        if (direction === 'Inbound') {
          if (route.departure.icao === airport.icao && route.arrival.icao === 'KLAX') {
            let line = {
              name: airline.name,
              time: route.arrival.time
            }
            routes.push(line)
          }
        }

      })
    })

    return routes
  }
}

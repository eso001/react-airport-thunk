import React from 'react';

//Components
import Destination from './Destination';
import Matches from './Match';

export default class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            search: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

  handleChange(e) {
    const { value } = e.target;

    this.setState({ search: value });
    this.props.filterSearch(value);
  }

  setDirection(value) {
    this.props.setDirection(value);
    this.props.filterSearch(this.state.search);
  }

  render() {
    const { Airports, Airlines, Direction, changePage } = this.props;

    return (
      <div className="App">
        <button onClick={() => changePage('/')}>Go Back to Home</button>

        <header>
          <h1>Where Do You Want To Go?</h1>
          <input className="location-search" placeholder="City or airport code" value={ this.state.search } onChange={ this.handleChange } name='search' />
          <nav>
              <div className={"nav-button " + (Direction === 'Outbound' ? 'selected' : '') } onClick={() => this.setDirection('Outbound')}>Outbound</div>
              <div className={"nav-button " + (Direction === 'Inbound' ? 'selected' : '') } onClick={() => this.setDirection('Inbound')}>Inbound</div>
          </nav>
        </header>

        <main>
          { !Airports.length &&
            <Matches />
          }
          { Airports.length === 1 &&
            <Destination { ...Airports[0] } airlines={ Airlines } />
          }
          { Airports.length > 1 &&
            Airports.map((port, ind) => {
              return <Matches { ...port } key={ind} />
            })
          }
        </main>
      </div>
    );
  }
}

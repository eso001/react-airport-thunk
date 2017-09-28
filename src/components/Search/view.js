import React from 'react';

//Components
import Destination from './Destination';
import Matches from './Match';

let initialState = {
  search: ''
}

export default class Search extends React.Component {
  constructor() {
    super();
    this.state = initialState;

    this.handleChange = this.handleChange.bind(this);
    this.getSearch = this.getSearch.bind(this);
  }

  componentDidMount() {
    this.getSearch('');
  }

  handleChange(e) {
    const { value } = e.target;

    this.getSearch(value);
  }

  getSearch(value) {
    this.setState({ search: value });
    this.props.search(value);
  }

  setDirection(value) {
    this.props.setDirectionThunk(value, this.state.search);
    // this.props.setDirection(value);
    // this.props.search(this.state.search);
  }

  render() {
    const { Airports, Airlines, Direction, changePage } = this.props;

    return (
      <div className="App">
        <button className="redirect" onClick={() => changePage('/')}>Go Back to Home</button>

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

import React from 'react';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { changePage } = this.props;

    return (
      <div>
        <h1>Home</h1>

        <button onClick={() => changePage('/search')}>Click me to go to search</button>
      </div>
    )
  }
}

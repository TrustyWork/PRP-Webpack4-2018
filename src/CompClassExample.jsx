import React, { Component } from 'react';

class CompClassExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    const { count: oldCount } = this.state;
    const newCount = oldCount + 1;

    console.log('oldCount', oldCount);

    this.setState({
      count: newCount,
    });
  }

  render() {
    const { count } = this.state;
    const { handleClick } = this;
    return (
      <div>
        count: {count}
        <br />
        <button type="button" onClick={handleClick}>
          click for +1
        </button>
      </div>
    );
  }
}

export default CompClassExample;

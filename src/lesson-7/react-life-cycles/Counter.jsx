import React, { Component, PureComponent } from 'react';

export default class Counter extends Component {
  //   Mounting
  constructor(props) {
    super();
    console.log('Counter > constructor');
  }

  state = {
    number: 0,
  };

  increase = () => {
    this.setState({
      number: (this.state.number += 1),
    });
  };

  decrease = () => {
    this.setState({
      number: (this.state.number -= 1),
    });
  };

  interval = null;

  // Updating
  //   shouldComponentUpdate(nextProps, nextState) {
  //     if (nextProps.isShowCounter === this.props.isShowCounter) {
  //         return false;
  //     }
  //     return true;
  //   }

  // Mounting & Updating
  render() {
    console.log('Counter > render');
    return (
      <div className="text-center">
        <h1 className="my-5">Counter</h1>
        <button className="btn btn-danger" onClick={this.decrease}>
          -
        </button>{' '}
        {this.state.number}{' '}
        <button className="btn btn-success" onClick={this.increase}>
          +
        </button>
      </div>
    );
  }

  // Mouting
  componentDidMount() {
    // Dùng để call api
    this.interval = setInterval(() => {
      console.log('Counter > componentDidMount');
    }, 1000);
  }

  // Updating
  componentDidUpdate(prevProps, prevState) {
    console.log('Counter > componentDidUpdate');
  }

  // Unmounting
  componentWillUnmount() {
    clearInterval(this.interval);
    console.log('Counter > componentWillUnmount');
  }
}

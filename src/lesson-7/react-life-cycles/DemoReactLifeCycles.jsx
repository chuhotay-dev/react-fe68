import React, { Component } from 'react';
import Counter from './Counter';

export default class DemoReactLifeCycles extends Component {
  state = {
    isShowCounter: true,
  };

  removeCounter = () => {
    this.setState({
      isShowCounter: false,
    });
  };

  render() {
    console.log('DemoReactLifeCycles > render');
    return (
      <div className="text-center">
        {this.state.isShowCounter && <Counter isShowCounter={this.state.isShowCounter} />} 
        <button className="btn btn-danger mt-5" onClick={this.removeCounter}>Remove counter</button>
      </div>
    );
  }
}

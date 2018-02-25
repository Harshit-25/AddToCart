import React, { Component } from 'react';

class Course extends Component {
  Clicker(){
    var active=!this.state.active;
    this.setState({active:active});
    this.props.sumPrice(active ? this.props.price : -this.props.price);
  }
  constructor(props){
    super(props);
    
    this.state={
    active:false
    };
    this.Clicker=this.Clicker.bind(this);
  }
  render() {
    return (
      <div>
        <p onClick={this.Clicker}>{this.props.name} <b>{this.props.price}</b></p>
      </div>
    );
  }
}

export default Course;

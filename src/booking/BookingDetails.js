import React, { Component } from 'react';

export default class BookingDetails extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>Hi, {this.props.selected ? this.props.selected.firstName : 'no one'}</div>
    );
  }
}

import React, { Component } from 'react';

export default class Booking extends Component {

  render() {
    const { booking, index } = this.props;

    return (
      <tr className={`booking ${booking.cancelled ? 'booking--cancelled' : ''}`}
          key={index}>
        <td>{booking.title} {booking.firstName} {booking.lastName}</td>
        <td>{booking.time}</td>
        <td>{booking.partySize}</td>
        <td>{booking.seated ? 'Y' : 'N'}</td>
      </tr>
    );
  }
}

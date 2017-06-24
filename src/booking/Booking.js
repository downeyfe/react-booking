import React, {Component} from 'react';
import css from './Booking.scss';

export default class Booking extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {booking} = this.props;

    return (
      <tr className={`booking ${booking.cancelled ? 'booking--cancelled' : ''}`}
          onClick={this.props.clickHandler}>
        <td>{booking.title} {booking.firstName} {booking.lastName}</td>
        <td>{booking.time}</td>
        <td>{booking.partySize}</td>
        <td>{booking.seated ? 'Y' : 'N'}</td>
      </tr>
    );
  }
}

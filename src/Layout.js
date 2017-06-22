/* Feel free to edit */
import React, {Component} from 'react';
import Booking from './booking/Booking';
import BookingDetails from './booking/BookingDetails';
import bookings from '../bookings.json';

export default class Layout extends Component {

  constructor(props) {
    super(props);
    this.state = { selected: null, data: null };
    this.bookings = bookings;
  }

  selectBooking(index, booking) {
    this.setState({ selected: index, data: booking });
  };

  toggleCancel(index, data) {
    this.bookings[0].bookings[index].cancelled = !this.bookings[0].bookings[index].cancelled;
    this.setState({ selected: index, data });
  }

  getBookingRows() {
    return this.bookings[0].bookings.map((booking, index) => {
      return <Booking booking={booking} key={index} clickHandler={this.selectBooking.bind(this, index, booking)}/>
    });
  }

  render() {
    return (
      <div className="bui-app">
        <div className="bui-app-header">
          {/*TODO include, or replace heading with, logo */}
          <h1 className="bui-app-intro">Table Reservations</h1>
        </div>

        <h2>Bookings for {new Date().toJSON().slice(0, 10)}</h2>

        <table className="bookings__grid">
          <thead>
            <tr>
              <th>Name</th>
              <th>Time</th>
              <th>Covers</th>
              <th>Seated</th>
            </tr>
          </thead>
          <tbody>
            {this.getBookingRows()}
          </tbody>
        </table>

        <BookingDetails index={this.state.selected} selected={this.state.data} cancelHandler={this.toggleCancel.bind(this)} />
      </div>
    );
  }
}

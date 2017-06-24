/* Feel free to edit */
import React, {Component} from 'react';
import Booking from './booking/Booking';
import BookingDetails from './booking/BookingDetails';
import bookings from '../bookings.json';
import css from './Layout.scss';

export default class Layout extends Component {

  constructor(props) {
    super(props);
    this.state = {selected: null, data: null};
    this.bookings = bookings;
  }

  getBookingRows() {
    return this.bookings[0].bookings.map((booking, index) => {
      return <Booking className="booking"
                      booking={booking}
                      key={index}
                      clickHandler={this.selectBooking.bind(this, index, booking)}/>
    });
  }

  selectBooking(index, booking) {
    this.setState({selected: index, data: booking});
  }

  unselectBooking() {
    this.setState({selected: null, data: null});
  }

  toggleCancel(index, data) {
    this.bookings[0].bookings[index].cancelled = !this.bookings[0].bookings[index].cancelled;
    this.setState({selected: index, data});
  }

  toggleSeated(isSeated, index, data) {
    this.bookings[0].bookings[index].seated = isSeated;
    this.setState({selected: index, data});
  }

  render() {
    return (
      <div className="bui-app">
        <div className="bui-app-header">
          <div className="bui-app-intro">
            <h1>Bookatable by Michelin</h1>
          </div>
        </div>

        <div className="layout">
          <div className={`bookings ${this.state.data ? 'bookings--selected' : ''}`}>
            <h2 className="bookings__heading">Bookings for {new Date().toJSON().slice(0, 10)}</h2>

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
          </div>

          <BookingDetails className="details"
                          index={this.state.selected}
                          selected={this.state.data}
                          cancelHandler={this.toggleCancel.bind(this)}
                          seatedHandler={this.toggleSeated.bind(this)}
                          unselectHandler={this.unselectBooking.bind(this)} />
        </div>
      </div>
    );
  }
}

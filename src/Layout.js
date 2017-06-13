/* Feel free to edit */
import React from 'react';
import bookings from '../bookings.json';

export default function Layout({children}) {
  const bookingElements = bookings[0].bookings.map((booking, index) => {
    return (
      <tr className={`booking ${booking.cancelled ? 'booking--cancelled' : ''}`} key={index}>
        <td>{booking.title} {booking.firstName} {booking.lastName}</td>
        <td>{booking.time}</td>
        <td>{booking.partySize}</td>
        <td>{booking.seated ? 'Y' : 'N'}</td>
      </tr>
    );
  });

  return (
    <div className="bui-app">
      <div className="bui-app-header">
        {/*TODO include, or replace heading with, logo */}
        <h1 className="bui-app-intro">Table Reservations</h1>
      </div>

      <h2>Bookings for {new Date().toJSON().slice(0,10)}</h2>

      <table className="bookings__grid">
        <tr>
          <th>Name</th>
          <th>Time</th>
          <th>Covers</th>
          <th>Seated</th>
        </tr>
        {bookingElements}
      </table>
    </div>
  );
}

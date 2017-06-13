/* Feel free to edit */
import React from 'react';
import Booking from './booking/Booking';
import bookings from '../bookings.json';

export default function Layout({children}) {

  const bookingRows = bookings[0].bookings.map((booking, index) => {
    return <Booking booking={booking} index={index} />
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
        {bookingRows}
      </table>
    </div>
  );
}

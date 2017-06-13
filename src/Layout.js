/* Feel free to edit */
import React from 'react';
import bookings from '../bookings.json';

export default function Layout({children}) {
    const bookingElements = bookings[0].bookings.map((booking, index) => {
        return (
            <div className="booking" key={index}>
                <h4>{booking.title} {booking.firstName} {booking.lastName}</h4>
                <p>Time: {booking.time}</p>
                <p>Size: {booking.partySize}</p>
                <p>Notes: {booking.notes || 'none'}</p>
            </div>
        );
    });

    return (
        <div className="bui-app">
            <div className="bui-app-header">
                {/*TODO include, or replace heading with, logo */}
                <h1 className="bui-app-intro">Table Reservations</h1>
            </div>

            <div className="bookings__grid">
                {bookingElements}
            </div>
        </div>
    );
}

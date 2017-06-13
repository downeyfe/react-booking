import React, { Component } from 'react';

export default class BookingDetails extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const selected = this.props.selected;

    return selected ?
      <div>
        <h4>Booking update</h4>

        <p>Name: {selected.title} {selected.firstName} {selected.lastName}</p>
        <p>Time: {selected.time}</p>
        <p>Covers: {selected.partySize}</p>
        <p>Notes: {selected.notes || 'none'}</p>

        <div>
          Seated:
          <input type="radio" name="no" checked={!selected.seated && !selected.cancelled} />
          <input type="radio" name="yes" checked={selected.seated && !selected.cancelled} />
          <input type="radio" name="cancelled" checked={selected.cancelled} />
        </div>
      </div> :
      null;
  }
}

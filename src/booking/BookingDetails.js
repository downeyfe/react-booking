import React, {Component} from 'react';
import css from './BookingDetails.scss';

export default class BookingDetails extends Component {

  constructor(props) {
    super(props);
  }

  cancelToggle() {
    this.props.cancelHandler(this.props.index, this.props.selected);
  }

  seatedToggle() {
    this.props.seatedHandler(!this.props.selected.seated, this.props.index, this.props.selected);
  }

  unselect() {
    this.props.unselectHandler();
  }

  render() {
    const {selected} = this.props;

    return selected ?
      <div className="details">
        <div className="details__heading">
          <h2>Booking update</h2>
          <h2 className="unselect" onClick={this.unselect.bind(this)}>X</h2>
        </div>

        <div className="details__content">

          <p>Name: {selected.title} {selected.firstName} {selected.lastName}</p>
          <p>Time: {selected.time}</p>
          <p>Covers: {selected.partySize}</p>
          <p>Notes: {selected.notes || 'none'}</p>

          <div>
            Seated:
            <div>
              Yes:
              <input type="radio" name="yes" onChange={this.seatedToggle.bind(this)} checked={selected.seated} />
              No:
              <input type="radio" name="no" onChange={this.seatedToggle.bind(this)} checked={!selected.seated} />
            </div>
            Cancelled:
            <input type="radio" name="cancelled" onChange={this.cancelToggle.bind(this)} checked={selected.cancelled}/>
          </div>
        </div>
      </div> :
      null;
  }
}

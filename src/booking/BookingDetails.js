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

          <div className="details__name">
            <h3>Name</h3>
            <p>{selected.title} {selected.firstName} {selected.lastName}</p>
          </div>
          <div>
            <h4>Time</h4>
            <p>{selected.time}</p>
          </div>
          <div>
            <h4>Covers</h4>
            <p>{selected.partySize}</p>
          </div>

          <div>
            <h4>Seated</h4>
              <p>
                <input type="radio" name="no" onChange={this.seatedToggle.bind(this)} checked={!selected.seated} />
                No
              </p>
              <p>
                <input type="radio" name="yes" onChange={this.seatedToggle.bind(this)} checked={selected.seated} />
                Yes
              </p>
              <p>
                <input type="radio" name="cancelled" onChange={this.cancelToggle.bind(this)} checked={selected.cancelled}/>
                Cancelled
              </p>
          </div>

          <div>
            <h4>Notes</h4>
            <p>{selected.notes || 'none'}</p>
          </div>
        </div>
      </div> :
      null;
  }
}

import React, {Component} from 'react';

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

  render() {
    const {selected} = this.props;

    return selected ?
      <div>
        <h4>Booking update</h4>

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
      </div> :
      null;
  }
}

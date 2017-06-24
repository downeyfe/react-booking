jest.unmock('react');
jest.unmock('./BookingDetails');

import React  from 'react';
import {shallow} from 'enzyme';
import BookingDetails from './BookingDetails';

describe('Booking details rendering', () => {

  it('renders null if selected booking is not present', () => {
    const bookingEl = shallow(
      <BookingDetails selected={null} />
    );

    expect(bookingEl.equals(null)).toEqual(true);
  });

  [
    {notes: 'anything', displayed: 'anything'},
    {notes: '', displayed: 'none'},
    {notes: null, displayed: 'none'}
  ].forEach(scenario => {
    it(`renders notes if present or 'none' if not - ${scenario.notes}`, () => {
      const bookingEl = shallow(
        <BookingDetails selected={{notes: scenario.notes}}/>
      );

      expect(bookingEl.contains(<p>Notes: {scenario.displayed}</p>)).toEqual(true);
    });
  });

  it('calls cancel change handler with correct parameters', () => {
    const cancelStub = jest.fn();
    const bookingEl = shallow(
      <BookingDetails selected={{foo: 'bar'}} index={1} cancelHandler={cancelStub}/>
    );

    bookingEl.find('[name="cancelled"]').props().onChange();

    expect(cancelStub).toHaveBeenCalledWith(1, {foo: 'bar'});
  });

  it('calls seated change handler with correct parameters', () => {
    const seatedStub = jest.fn();
    const bookingEl = shallow(
      <BookingDetails selected={{seated: false}} index={1} seatedHandler={seatedStub}/>
    );

    bookingEl.find('input').first().props().onChange();

    expect(seatedStub).toHaveBeenCalledWith(true, 1, {seated: false});
  });

  it('calls unselect handler', () => {
    const unselectStub = jest.fn();
    const bookingEl = shallow(
      <BookingDetails selected={{seated: false}} index={1} unselectHandler={unselectStub}/>
    );

    bookingEl.find('.unselect').props().onClick();

    expect(unselectStub).toHaveBeenCalled();
  });
});

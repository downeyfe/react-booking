jest.unmock('react');
jest.unmock('./BookingDetails');

import React  from 'react';
import { shallow } from 'enzyme';
import BookingDetails from './BookingDetails';

describe('Booking details rendering', () => {

  it('calls change handler with correct parameters', () => {
    const cancelStub = jest.fn();
    const bookingEl = shallow(
      <BookingDetails selected={{ foo: 'bar' }} index={1} cancelHandler={cancelStub} />
    );

    bookingEl.find('input').props().onChange();

    expect(cancelStub).toHaveBeenCalledWith(1, { foo: 'bar' });
  });
});

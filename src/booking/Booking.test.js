jest.unmock('react');
jest.unmock('./Booking');

import React  from 'react';
import { shallow } from 'enzyme';
import Booking from './Booking';

describe('Booking rendering', () => {

  [true, false]
    .forEach(scenario => {
      it(`renders cancelled class if cancelled - ${scenario}`, () => {
        const booking = { cancelled: scenario };
        const bookingEl = shallow(
          <Booking booking={booking} />
        );

        expect(bookingEl.hasClass('booking--cancelled')).toEqual(scenario);
      });
    });
});

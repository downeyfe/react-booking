jest.unmock('react');
jest.unmock('./Booking');

import React  from 'react';
import {shallow} from 'enzyme';
import Booking from './Booking';

describe('Booking rendering', () => {

  [
    true,
    false
  ].forEach(scenario => {
    it(`renders cancelled class if cancelled - ${scenario}`, () => {
      const booking = {cancelled: scenario};
      const bookingEl = shallow(
        <Booking booking={booking}/>
      );

      expect(bookingEl.hasClass('booking--cancelled')).toEqual(scenario);
    });
  });

  [
    {isSeated: true, text: 'Y'},
    {isSeated: false, text: 'N'}
  ].forEach(scenario => {
    it(`displays seated value - ${scenario.isSeated}`, () => {
      const booking = {seated: scenario.isSeated};
      const bookingEl = shallow(
        <Booking booking={booking}/>
      );

      expect(bookingEl.contains(<td>{scenario.text}</td>)).toEqual(true);
    });
  });
});

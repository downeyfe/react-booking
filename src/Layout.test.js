jest.unmock('react');
jest.unmock('./Layout');

jest.mock('../bookings.json', () => {
  return [
    {
      bookings: [
        {foo: 'bar'},
        {bar: 'foo'}
      ]
    }
  ];
}, {virtual: true});

import React  from 'react';
import {shallow} from 'enzyme';
import Layout from './Layout';

describe('Layout rendering', () => {

  let layoutEl;

  beforeEach(() => {
    layoutEl = shallow(
      <Layout />
    );
  });

  it('sets up initial booking data', () => {
    expect(layoutEl.find('tbody').children().length).toEqual(2);
    expect(layoutEl.state('selected')).toEqual(null);
    expect(layoutEl.state('data')).toEqual(null);
  });

  it('updates state when booking is selected', () => {
    layoutEl.find('.booking').first().props().clickHandler();

    expect(layoutEl.state('selected')).toEqual(0);
    expect(layoutEl.state('data')).toEqual({foo: 'bar'});
  });

  it('updates cancelled value of booking when toggled', () => {
    layoutEl.find('.booking').first().props().clickHandler();
    layoutEl.find('.details').props().cancelHandler(0, {foo: 'bar', cancelled: false});

    expect(layoutEl.find('.booking').first().props().booking).toEqual({foo: 'bar', cancelled: true});
    expect(layoutEl.state('selected')).toEqual(0);
    expect(layoutEl.state('data')).toEqual({foo: 'bar', cancelled: false});

    layoutEl.find('.details').props().cancelHandler(0, {foo: 'bar', cancelled: true});

    expect(layoutEl.find('.booking').first().props().booking).toEqual({foo: 'bar', cancelled: false});
  });

  it('updates seated value of booking when toggled', () => {
    layoutEl.find('.booking').first().props().clickHandler();
    layoutEl.find('.details').props().seatedHandler(true, 0, {foo: 'bar', seated: false});

    expect(layoutEl.find('.booking').first().props().booking).toEqual({foo: 'bar', seated: true, cancelled: false});
    expect(layoutEl.state('selected')).toEqual(0);
    expect(layoutEl.state('data')).toEqual({foo: 'bar', seated: false});
  });

  it('unselects given selected booking', () => {
    layoutEl.find('.booking').first().props().clickHandler();
    layoutEl.find('.details').props().unselectHandler();

    expect(layoutEl.state('selected')).toEqual(null);
    expect(layoutEl.state('data')).toEqual(null);
  });
});

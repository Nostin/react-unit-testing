import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import MockDate from 'mockdate'
import { SelectBirthday } from './SelectBirthday';

describe('Select Birthday Test Suite', () => {
  afterEach(() => {
    MockDate.reset() // reset Date() to native implementation
  })

  test('Should not allow empty date', () => {
    const component = render(<SelectBirthday />);
    const input = component.getByLabelText('Birthday').querySelector('input');
    fireEvent.change(input, { target: { value: '' }});
    fireEvent.click(component.getByText('Enter'));
    expect(component.getByText('Invalid Date')).toBeInTheDocument();
  });

  test('Should not allow letters', () => {
    const component = render(<SelectBirthday />);
    const input = component.getByLabelText('Birthday').querySelector('input');
    fireEvent.change(input, { target: { value: 'NOT A DATE' }});
    fireEvent.click(component.getByText('Enter'));
    expect(component.getByText('Invalid Date')).toBeInTheDocument();
  });

  test('Should not allow invalid date', () => {
    const component = render(<SelectBirthday />);
    const input = component.getByLabelText('Birthday').querySelector('input');
    fireEvent.change(input, { target: { value: '2000-13-40' }});
    fireEvent.click(component.getByText('Enter'));
    expect(component.getByText('Invalid Date')).toBeInTheDocument();
  });

  test('Should not allow user to be born today', () => {
    MockDate.set('2020-01-01') // pretend today is 1 Jan 2020

    const component = render(<SelectBirthday />);
    const input = component.getByLabelText('Birthday').querySelector('input');
    fireEvent.change(input, { target: { value: '2020-01-01' }});
    fireEvent.click(component.getByText('Enter'));
    expect(component.getByText('You were literally born today?')).toBeInTheDocument();
  });

  test('Should not allow a future date', () => {
    MockDate.set('2020-01-01') // pretend today is 1 Jan 2020

    const component = render(<SelectBirthday />);
    const input = component.getByLabelText('Birthday').querySelector('input');
    fireEvent.change(input, { target: { value: '2025-05-20' }});
    fireEvent.click(component.getByText('Enter'));
    expect(component.getByText('Birthday cannot be in the future')).toBeInTheDocument();
  });

  test('Should say happy birthday', () => {
    MockDate.set('2020-01-01') // pretend today is 1 Jan 2020

    const component = render(<SelectBirthday />);
    const input = component.getByLabelText('Birthday').querySelector('input');
    fireEvent.change(input, { target: { value: '2010-01-01' }});
    fireEvent.click(component.getByText('Enter'));
    expect(component.getByText('Happy birthday!')).toBeInTheDocument();
  });

  test('Should say you are 5 years old', () => {
    MockDate.set('2020-01-01') // pretend today is 1 Jan 2020

    const component = render(<SelectBirthday />);
    const input = component.getByLabelText('Birthday').querySelector('input');
    fireEvent.change(input, { target: { value: '2014-12-31' }});
    fireEvent.click(component.getByText('Enter'));
    expect(component.getByText('You are 5 years old')).toBeInTheDocument();
  });

  test('Should say you are 1 year old', () => {
    MockDate.set('2020-01-01') // pretend today is 1 Jan 2020

    const component = render(<SelectBirthday />);
    const input = component.getByLabelText('Birthday').querySelector('input');
    fireEvent.change(input, { target: { value: '2018-12-31' }});
    fireEvent.click(component.getByText('Enter'));
    expect(component.getByText('You are 1 year old')).toBeInTheDocument();
  });
});

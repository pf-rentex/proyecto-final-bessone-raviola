import React from 'react';
import {render} from '@testing-library/react';
import CustomButton from '../CustomButton';

describe('Custom button', () => {
  test('renders button', () => {
    const component = render(<CustomButton text='Hola' color="primary"/>);

    expect(component.container).toBeInTheDocument();
    expect(component.container).toMatchSnapshot();
  });

  test('renders button text', () => {
    const component = render(<CustomButton text='Hola' color="primary"/>);

    component.getByText('Hola');
  });
});

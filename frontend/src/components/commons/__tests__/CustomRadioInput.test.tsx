import React from 'react';
import {render} from '@testing-library/react';
import CustomRadioInput from '../CustomRadioInput';

describe('Custom Radio Input', () => {
  test('renders button', () => {
    const component = render(<CustomRadioInput name="test"
                                               text="radio"
                                               id="id"
                                               isChecked={true}
                                               onSelect={() => {}}
    />);

    expect(component.container).toBeInTheDocument();
    expect(component.container).toMatchSnapshot();
  });

  test('toggles button', async () => {
    let checked = false;
    let onCheck = jest.fn(() => checked = true);
    const {getByLabelText, rerender } = await render(<CustomRadioInput name="test"
                                                                      text="radio"
                                                                      id="id"
                                                                      isChecked={checked}
                                                                      onSelect={onCheck}
    />);

    const input = getByLabelText('radio');

    expect(input).not.toBeChecked();

    await input.click()

    expect(onCheck).toHaveBeenCalled();
    expect(checked).toBeTruthy();

    rerender(<CustomRadioInput name="test"
                               text="radio"
                               id="id"
                               isChecked={checked}
                               onSelect={onCheck}
    />);
    expect(input).toBeChecked();

  });

});

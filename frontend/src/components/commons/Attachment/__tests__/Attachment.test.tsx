import React from 'react';
import { getByText, render } from '@testing-library/react';
import Attachment from '../Attachment';

describe('Attachment', () => {
    test('renders correctly', () => {
        const date = new Date(2020, 4, 12);
        const { container, getByText } = render(
            <Attachment size="10kb" attachedDate={date.toString()} handleDelete={() => {}} name="Attachment" />,
        );

        getByText('Attachment');
        getByText('10kb');
        getByText(date.toString());
        expect(container).toMatchSnapshot();
    });
});

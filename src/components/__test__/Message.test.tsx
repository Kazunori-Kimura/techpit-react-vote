import React from 'react';
import { render } from '@testing-library/react';
import Message from '../Message';

test('メッセージの表示', () => {
    const name = 'kimura';
    const { getByText } = render(<Message name={name} />);
    const textElement = getByText(`Hello, ${name}!`);
    expect(textElement).toBeInTheDocument();
});

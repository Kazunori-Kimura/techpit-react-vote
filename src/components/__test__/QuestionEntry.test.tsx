import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import QuestionEntry from '../question/QuestionEntry';

test('QuestionEntry', () => {
    const handleEntry = jest.fn();
    const { getByText } = render(<QuestionEntry onEntry={handleEntry} />);

    const entryButton = getByText('登録');
    fireEvent.click(entryButton);

    expect(handleEntry).toHaveBeenCalled();
});

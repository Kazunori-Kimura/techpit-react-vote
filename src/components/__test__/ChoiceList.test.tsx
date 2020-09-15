import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ChoiceList from '../question/ChoiceList';
import { questions } from '../../models/data';

test('ChoiceList', () => {
    const handleAdd = jest.fn();
    const handleDelete = jest.fn();
    const handleChange = jest.fn();

    const { getByPlaceholderText, getByText } = render(
        <ChoiceList
            choices={questions[0].choices}
            onAdd={handleAdd}
            onDelete={handleDelete}
            onChange={handleChange}
        />
    );

    // 追加ボタン
    const addButton = getByText('追加');
    fireEvent.click(addButton);
    expect(handleAdd).toHaveBeenCalled();

    // 削除ボタン
    const delButton = getByText('削除');
    fireEvent.click(delButton);
    expect(handleDelete).toHaveBeenCalled();

    // 変更
    const input = getByPlaceholderText('選択肢 1');
    fireEvent.change(input, { target: { value: 'ほげ' } });
    expect(handleChange).toHaveBeenCalled();
});

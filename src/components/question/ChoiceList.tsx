import React, { ChangeEvent } from 'react';
import ChoiceItem from './ChoiceItem';
import Button from '../common/Button';
import { ChoiceEntryAttributes } from '../../models/interfaces';

import './ChoiceList.css';

interface ChoiceListProps {
    choices: ChoiceEntryAttributes[];
    onAdd?: VoidFunction;
    onDelete?: (index: number) => void;
    onChange?: (event: ChangeEvent<HTMLInputElement>, index: number) => void;
}

const ChoiceList: React.FC<ChoiceListProps> = ({ choices, onAdd, onDelete, onChange }) => {
    return (
        <div className="choice-list">
            {choices.map((choice, index) => (
                <ChoiceItem
                    key={`choice-item-${choice.content}`}
                    className="choice-list__item"
                    index={index}
                    isLastItem={choices.length === index + 1}
                    value={choice.content}
                    required
                    maxLength={255}
                    onDelete={onDelete}
                    onChange={onChange}
                />
            ))}
            <Button variant="normal" className="choice-list__add-button" onClick={onAdd}>
                追加
            </Button>
        </div>
    );
};

export default ChoiceList;

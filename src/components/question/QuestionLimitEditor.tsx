import React, { InputHTMLAttributes } from 'react';
import { formatLocalDatetime } from '../../utils';

import './QuestionLimitEditor.css';

interface QuestionLimitEditorProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    value?: string;
    min?: string;
}
// value={value && formatLocalDatetime(new Date(value))}
const QuestionLimitEditor: React.FC<QuestionLimitEditorProps> = ({
    value,
    min,
    onChange,
    ...props
}) => {
    return (
        <label className="question-limit-editor__label" htmlFor="question-limit">
            <span className="question-limit-editor__labeltext">期限</span>
            <input
                id="question-limit"
                data-testid="question-limit"
                className="question-limit-editor__textfield"
                type="datetime-local"
                name="limit"
                value={value && formatLocalDatetime(new Date(value))}
                min={min && formatLocalDatetime(new Date(min))}
                onChange={onChange}
                {...props}
            />
        </label>
    );
};

export default QuestionLimitEditor;

import React from 'react';
import Question from './Question';

import './QuestionList.css';
import { QuestionAttributes } from '../../models/interfaces';

interface QuestionListProps {
    questions?: QuestionAttributes[];
    loginUserId?: number;
}

const QuestionList: React.FC<QuestionListProps> = ({ questions = [], loginUserId }) => {
    return (
        <div className="question-list">
            {questions.map((question) => (
                <Question
                    className="question-list__question"
                    {...question}
                    loginUserId={loginUserId}
                />
            ))}
        </div>
    );
};

export default QuestionList;

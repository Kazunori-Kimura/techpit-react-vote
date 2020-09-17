import React from 'react';
import QuestionSentence from './components/question/QuestionSentence';
import VoteCount from './components/question/VoteCount';
import QuestionLimit from './components/question/QuestionLimit';

import './App.css';
import { questions } from './models/data';

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <QuestionSentence sentence={questions[0].sentence} />
            <VoteCount count={questions[0].votes?.length ?? 0} />
            <QuestionLimit limit={questions[0].limit} />
        </div>
    );
};

export default App;

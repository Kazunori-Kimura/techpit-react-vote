import React from 'react';
import QuestionSentenceEditor from './components/question/QuestionSentenceEditor';
import QuestionLimitEditor from './components/question/QuestionLimitEditor';

import './App.css';

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

            <QuestionSentenceEditor />
            <QuestionLimitEditor />
        </div>
    );
};

export default App;

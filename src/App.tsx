import React from 'react';
import VoteResult from './components/question/VoteResult';

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
            {questions[1].choices.map((choice) => (
                <VoteResult
                    key={`vote-result=${choice.id}`}
                    choice={choice}
                    votes={questions[1].votes}
                    loginUserId={1}
                />
            ))}
        </div>
    );
};

export default App;

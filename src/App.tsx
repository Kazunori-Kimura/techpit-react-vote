import React from 'react';
import QuestionList from './components/question/QuestionList';

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

            <QuestionList questions={questions} loginUserId={1} />
        </div>
    );
};

export default App;

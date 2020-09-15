import React from 'react';
import ChoiceList from './components/question/ChoiceList';
import { questions } from './models/data';

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

            <ChoiceList choices={questions[0].choices} />
        </div>
    );
};

export default App;

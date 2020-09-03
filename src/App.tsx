import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './components/Message';
import NameInput from './components/NameInput';

const App: React.FC = () => {
    const [name, setName] = useState('');

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <NameInput name={name} onChange={setName} />
                <Message name={name} />
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
};

export default App;

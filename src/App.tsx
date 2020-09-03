import React, { useState, ChangeEvent } from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './components/Message';

const App: React.FC = () => {
    const [name, setName] = useState('');

    const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        setName(value);
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <input type="text" value={name} onChange={handleChangeName} />
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

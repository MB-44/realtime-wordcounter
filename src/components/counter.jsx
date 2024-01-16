import React, {useState} from "react";
import './counter.css';

function WordCounter() {
    const [inputValue, setInputValue] = useState('');
    const [wordCount, setWordCount] = useState(0);

    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);

        const words = value.trim().split(/\s+/);
        const count = words.length;

        setWordCount(count);
    }

    return (
        <div className="container">
            <label htmlFor="wordInput" className="label">Enter your words here </label>
            <input 
                type="text"
                id="wordInput"
                className="textbox"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="type your words here" />
            <p className="display"> Word Count: {wordCount}</p>
        </div>
    );
}

export default WordCounter;
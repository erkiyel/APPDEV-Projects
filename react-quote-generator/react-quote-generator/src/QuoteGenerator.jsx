import React, { useState } from 'react';

const karlMarx = [
    "1. Workers of the world, unite!",
    "2. Religion is the opium of the people.",
    "3. From each according to his ability, to each according to his needs.",
    "4. Capital is dead labor, which vampirelike, lives only by sucking living labor.",
    "5. The proletarians have nothing to lose but their chains."
];

const johnLocke = [
    "1. Where there is no law, there is no freedom.",
    "2. All wealth is the product of labor.",
    "3. No man's knowledge here can go beyond his experience.",
    "4. The end of law is not to abolish or restrain, but to preserve and enlarge freedom.",
    "5. I have always thought the actions of men the best interpreters of their thoughts."
];

export default function ColorPicker() {
    // State to hold the current quote
    const [quote, setQuote] = useState('');

    // Function to get a random number based on the length of an array
    function getRandomNumber(length) {
        return Math.floor(Math.random() * length);
    }

    // Update the state with a random quote from Karl Marx
    function randomQuoteMarx() {
        const quote = karlMarx[getRandomNumber(karlMarx.length)];
        setQuote(quote);
    }

    // Update the state with a random quote from John Locke
    function randomQuoteJohn() {
        const quote = johnLocke[getRandomNumber(johnLocke.length)];
        setQuote(quote);
    }

    return (
        <>
            <div className="quote-container">
                <h1>Quote Generator</h1>
                <div className="quote-display">
                    <p>{quote}</p>
                </div>
                <button className="randomize" onClick={randomQuoteMarx}>Karl Marx</button>
                <button className="randomize" onClick={randomQuoteJohn}>John Locke</button>
            </div>
        </>
    );
}

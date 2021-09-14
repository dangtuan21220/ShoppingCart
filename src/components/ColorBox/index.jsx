import React, { useState } from 'react';
import './ColorBox.scss';

ColorBox.propTypes = {};

function ColorBox(props) {
    const [Color, setColor] = useState("white");

    return (
        <div className="color-box">
           {Color}

           <button onClick={() => setColor('black')}>Change to black</button> 
           <button onClick={() => setColor('white')} >Change to white</button>
        </div>
    );
}

export default ColorBox;
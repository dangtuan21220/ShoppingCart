import React, { useState } from 'react';

ColorBox.propTypes = {};

function ColorBox(props) {
    const [Count, setCount] = useState(0)

    return (
        <div>
           {Count}

           <button onClick={() => setCount(x => x + 1)}>Increase</button> 
        </div>
    );
}

export default ColorBox;
import React from 'react';
const Action = (props)=>(
    <div>
        <button className="big-button" disabled={!props.hasOption} onClick={props.makeDecision}>What should I do?</button>
    </div>
) 

export default Action
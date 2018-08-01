import React from 'react';
import Option from './Option';

const Options = (props)=>(
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options</h3>
            <button className="button button--link" onClick={props.deleteOptions}>Remove All</button>
        </div>
        {props.options.length === 0 && <p className="widget-message">Add an option to start</p>}
        <ul className="option-parent">
            {
                props.options.map((option,index) =>
                    <Option key={option} optionIndex={index+1} optionText={option} deleteOption={props.deleteOption} /> )
            }
        </ul>
    </div>
)

export default Options
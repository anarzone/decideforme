import React from 'react'

const Option = (props)=> (
    <div>
        <li className="option option__text">{props.optionIndex}. {props.optionText}
            <button className="button button--link"
             onClick={()=>{
                    props.deleteOption(props.optionText)
                }
            }>Remove</button>
        </li>
    </div>
)

export default Option
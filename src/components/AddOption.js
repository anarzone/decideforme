import React, {Component} from 'react'

export default class AddOption extends Component{
    //babel class transform properties
    state = {
        error: undefined
    }
    render(){
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.addOption}>
                    <input className="add-option-input" type="text" name='option'/>
                    <button className="button">Add Option</button>
                </form>
            </div>
        )    
    }
    addOption = (e)=>{
        e.preventDefault()
        const option = e.target.elements.option.value.trim()
        const error = this.props.addOption(option)
        e.target.elements.option.value = ''
        this.setState(()=>({ error }))
    }
}
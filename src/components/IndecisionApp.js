import React, {Component} from 'react';
import Modal from 'react-modal';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

export default class IndecisionApp extends Component{
    state = {
        options: [],
        selectedOption: undefined
    }
    componentDidMount(){
        try{
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)
            if(options){
                this.setState(()=>({options: options}))
            }
        }catch(e){
            
        }
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options',json)
        }
    }
    //delete all options
    deleteOptions = ()=>{
        this.setState(()=>({ options: [] }))
    }
    //delete option
    deleteOption = (optionToRemove)=>{
        this.setState((prevState)=>{
            return{
                options: prevState.options.filter(option=>{
                    // return option === optionToRemove ? false : true
                    //alternatively
                    return optionToRemove !== option
                })
            }
        })
    }
    //make a decision 
    makeDecision = ()=>{
        const randomNum = Math.floor(Math.random()*this.state.options.length);
        const option = this.state.options[randomNum]
        this.setState({selectedOption: option})
    }
    //add option to options
    addOption = (option)=>{
        if(!option){
            return 'Empty option not allowed to enter'
        }else if(this.state.options.includes(option)){
            return 'This option already exist'
        }
        this.setState(prevState=>({ options: prevState.options.concat(option)}))
    }
    handleClearModal =()=>{
        this.setState({selectedOption: undefined})
    }
    render(){
        const subtitle = 'Let us make smart decision for you'
       return (
           <div>
           <Header subtitle={subtitle}/>
            <div className="container">
                <Action hasOption={this.state.options.length > 0} makeDecision={this.makeDecision}/>
                <div className="widget">
                    <Options deleteOptions={this.deleteOptions} 
                    deleteOption={this.deleteOption} options={this.state.options}
                    />
                    <AddOption addOption={this.addOption} options={this.state.options}/>
                </div>
            </div>
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    onClearModal={this.handleClearModal}
                />
            </div>
        )
    }
}


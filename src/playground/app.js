class IndecisionApp extends React.Component{
    constructor(props){
        super(props)
        this.deleteOptions = this.deleteOptions.bind(this)
        this.makeDecision = this.makeDecision.bind(this);
        this.addOption = this.addOption.bind(this)
        this.deleteOption = this.deleteOption.bind(this)
            this.state = {
            options: props.options
        }
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
    deleteOptions(){
        this.setState(()=>({ options: [] }))
    }
    //delete option
    deleteOption(optionToRemove){
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
    makeDecision(){
        const randomNum = Math.floor(Math.random()*this.state.options.length);
        console.log(this.state.options[randomNum])
    }
    //add option to options
    addOption(option){
        if(!option){
            return 'Empty option not allowed to enter'
        }else if(this.state.options.includes(option)){
            return 'This option already exist'
        }
        this.setState(prevState=>({ options: prevState.options.concat(option)}))
    }

    render(){
        const subtitle = 'Let us make smart decision for you'
       return (
           <div>
                <Header subtitle={subtitle}/>
                <Action hasOption={this.state.options.length > 0} makeDecision={this.makeDecision}/>
                <Options deleteOptions={this.deleteOptions} deleteOption={this.deleteOption} options={this.state.options}/>
                <AddOption addOption={this.addOption} options={this.state.options}/>
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}

const Header = (props)=>{
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle && props.subtitle}</h2>
        </div>
    )
}

Header.defaultProps = {
    title: 'Indecision'
}

const Action = (props)=>{
    return (
        <div>
            <button disabled={!props.hasOption} onClick={props.makeDecision}>What should I do?</button>
        </div>
    ) 
}

const Options = (props)=>{
    return (
        <div>
            <button onClick={props.deleteOptions}>Remove All</button>
            <ul>
                {
                    props.options.map(option => <Option key={option} optionText={option} deleteOption={props.deleteOption} />)
                }
            </ul>
        </div>
    )    
}

const Option = (props)=> {
    return (
        <div>
            <li>{props.optionText}<button onClick={()=>{
                props.deleteOption(props.optionText)
            }
            }>
                Remove</button> </li>
        </div>
    )
}

class AddOption extends React.Component{
    constructor(props){
        super(props)
        this.addOption = this.addOption.bind(this)
        this.state = {
            error: undefined
        }
    }
    render(){
        return (
            <div>
                {
                    this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.addOption}>
                    <input type="text" name='option'/>
                    <button>Add</button>
                </form>
            </div>
        )    
    }
    addOption(e){
        e.preventDefault()
        const option = e.target.elements.option.value.trim()
        const error = this.props.addOption(option)
        e.target.elements.option.value = ''
        this.setState(()=>({ error }))
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
class VisibilityToggle extends React.Component{
    constructor(props){
        super(props)
        this.showDetails = this.showDetails.bind(this)
        this.state = {
            visibility: false
        }
    }
    render(){
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.showDetails}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
                {this.state.visibility && <p>There are some visible text</p> }
            </div>
        )
    }
    showDetails(){
        this.setState((preVis)=>{
            return {
                visibility: !preVis.visibility
            }
        })
        console.log(this.state.visibility)
    }
}

ReactDOM.render(<VisibilityToggle />,document.getElementById('app'))

// let visibility = false

// let details = '';

// const onShowDetails = (e)=>{
//     visibility = !visibility
//     renderApp()
// }



// const renderApp = ()=>{
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button name="details" onClick={onShowDetails}>
//                 {visibility ? 'Hide Details' : 'Show Details'}
//             </button>
//             <p>{visibility && 'There are some details'}</p>
//         </div>
//     )
//     const app =  document.getElementById('app');
//     ReactDOM.render(template,app)
// }

// renderApp()
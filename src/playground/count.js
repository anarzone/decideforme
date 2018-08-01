class Counter extends React.Component{
    constructor(props){
        super(props)
        this.handleAddOne = this.handleAddOne.bind(this)
        this.handleMinusOne = this.handleMinusOne.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.state = {
            count: 0
        }
    }

    componentDidMount(){
        try{
            const count = parseInt(localStorage.getItem('count'))
            if(!isNaN(count)){
                this.setState(()=>({count}))
            }
        }catch(e){

        }
    }

    componentDidUpdate(prevProps,prevState){
        if(parseInt(prevState.count) !== parseInt(this.state.count)){
            localStorage.setItem('count',this.state.count)
        }
    }

    render(){
        return(
            <div>
                <h1>Count: {this.state.count}</h1>    
                <button onClick={this.handleAddOne}>+</button>
                <button onClick={this.handleMinusOne}>-</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }

    handleAddOne(){
        this.setState((elements)=>{
            return {
                count: elements.count + 1
            }
        })
    }
    handleMinusOne(){
        this.setState((elements)=>{
            return {
                count: elements.count - 1
            }
        })
    }
    handleReset(){
        this.setState((elements)=>{
            return {
                count: 0
            }
        })
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'))

// let count = 1;

// const addOne = ()=>{
//    count++;
//    renderCounterApp();
// }
// const minusOne = ()=>{
//     count--;
//     renderCounterApp();
// }
// const reset = ()=>{
//     count = 0
//     renderCounterApp();
// }

// const app = document.getElementById('app');

// const renderCounterApp = ()=>{
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     )

//     ReactDOM.render(templateTwo,app)
// }

// renderCounterApp();
//jsx - js xml

let movie = {
    title: 'Avengers',
    subTitle: 'A hero movie',
    options: []
}
const getSubtitle = (subTitle) => subTitle ? <p>{subTitle}</p> : false

const onFormSubmit = (e)=>{
    e.preventDefault()
    console.log('Form Submitted')
    let option = e.target.elements.option.value
    if(option){
        movie.options.push(option)
        e.target.elements.option.value = ''
        renderMovieApp()
    }
}

const onRemoveAll = ()=>{
    if(movie.options.length){
        movie.options.length = 0;
        renderMovieApp()
    }
}

const numbers = [22,13,65]

const onMakeDecision = ()=>{
    const randomNum = Math.floor(Math.random()*movie.options.length)
    console.log(movie.options[randomNum])
}

const renderMovieApp = ()=>{
    let template1 = (
        <div>
            <h1>Title: {movie.title}</h1>
            {movie.subTitle && <p>{movie.subTitle}</p>}
            <button disabled={!movie.options.length === 0} onClick={onMakeDecision}>What Should I do?</button>
            <button onClick={onRemoveAll} name="removeAll">Remove All</button>
            {
               numbers.map(num=> <p key={num}>{num}</p>)
            }
            <p>{movie.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
            <p>{movie.options.length}</p>
            <ul>
                {
                    movie.options.map(option=> <li key={option}>{option}</li>)
                }
            </ul>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    )
    const app = document.getElementById('app');
    ReactDOM.render(template1,app);
}

renderMovieApp()











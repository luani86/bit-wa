console.log(postsData);

const BlogItem = (props) => {
    return (<div>
        <h2 class = "podnaslov">{props.item.id} {props.item.title}</h2>
        <p>{props.item.body}</p>
    </div>)
}

const BlogList = (props) => {
    return (
    <ul>
        {
            props.items.map((e) => <BlogItem item = {e} key = {e.id}/>)
        }
    </ul>)
}

const App = (props) => {
    return (
    <div>
    <header><h1 id = "glavni-naslov">naslov</h1></header>
    <BlogList items={postsData}/>
    <footer id = "footer">Neki futer</footer>

    </div>
    )
}

const elGet = document.getElementById("root");

ReactDOM.render(<App/>, elGet);
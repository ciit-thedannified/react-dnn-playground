import "../css/style.css";

function Body(props) {

    let title = props.Title;
    let content = props.Content;

    return (
        <div className="content">
            <h2> {title} </h2>
            <p> {content} </p>
        </div>
    );

}

export default Body;
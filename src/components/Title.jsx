function Title(props) {

    let text = !props.Text || props.Text.trim().length === 0 ? "Title" : props.Text;

    return <h1> {text} </h1>;

}

export default Title;
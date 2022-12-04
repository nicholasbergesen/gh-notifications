function ShowText() {
    return (<div>
        Hello! {process.env.REACT_APP_HELLO}
    </div>)
}

export default ShowText
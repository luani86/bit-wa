import react from "react";

handleChange = (event) => {
    this.setState({
        inputValue: event.target.value
    });
}

export default handleChange;
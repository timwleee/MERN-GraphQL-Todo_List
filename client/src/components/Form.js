import React, { Component } from 'react'
import TextField from "@material-ui/core/TextField";

export default class Form extends Component {

state = {
    text: ""
};

handleChange = e => {
    const newText = e.target.value;
    this.setState({
        text: newText
    })
};

handleKeyDown = e => {
    if (e.key === 'enter') {
        this.props.submit(this.state.text);
    }
};

  render() {
    return (
        <TextField
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
            label="Enter a todo"
            margin="normal"
            value={this.state.text}
            fullWidth
        />
    )
  }
}

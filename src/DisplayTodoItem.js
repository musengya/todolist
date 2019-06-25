import React from "react";

export default class DisplayTodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            done: false
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        var _done = !this.state.done
        this.setState({
            done: _done
        })
    }
    render() {
        var item = this.props.item;
        return (
            <li>
            <input
                checked={this.state.done}
                onChange={this.handleChange}
                type="checkbox" />
            {item}
            <button onClick={this.props.handleDelete.bind(null, item)}>
                x
                </button>
        </li>
        )
    }
}
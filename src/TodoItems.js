

import React from "react";

export default class TodoItems extends React.Component {
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
        return (
            <ul className="theList">
                {this.props.items.map((item, i) => {
                    return <li key={item}>
                        <input
                            checked={this.state.done}
                            onChange={this.handleChange}
                            type="checkbox" />
                        {item}
                        <button onClick={this.props.handleDelete.bind(null, item)}>
                            x
                            </button>
                    </li>
                })
                }
            </ul>
        )
    }
}
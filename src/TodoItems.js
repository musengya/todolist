import React from "react";

export default class TodoItems extends React.Component {
    render() {
        return (
            <ul>
                {this.props.items.map((item, i) => {
                    return <li key={item}>
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
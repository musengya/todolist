

import React from "react";
import DisplayTodoItem from "./DisplayTodoItem";

export default class TodoItems extends React.Component {
    render() {
        return (
            <ul className="theList">
                {this.props.items.map((item, i) => {
                    return <DisplayTodoItem
                        key={item}
                        handleDelete={this.props.handleDelete.bind(null, item)}
                        item={item} />
                })
                }
              
            </ul>
        )
    }
}
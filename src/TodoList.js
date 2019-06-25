import React from "react";
import TodoItems from "./TodoItems";

class TodoList extends React.Component {
    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a} placeholder="input task" />
                        <button type="submit">Add Task</button>
                    </form>
                    <TodoItems />
                </div>

            </div>
        )
    }
}



export default TodoList;
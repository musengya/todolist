import React from "react";

class TodoList extends React.Component {
    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input type="text" placeholder="input task" />
                        <button type="submit">Add Task</button>
</form>
                </div>

            </div>
        )
    }
}



export default TodoList;
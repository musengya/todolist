
import React from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css"
export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            items: ["eggs", "beans", "Bread"]
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleChange(event) {
        var text = event.target.value;
        console.log(text);
        this.setState({
            text: text
        });
    }
    handleDelete(itemToBeDeleted) {
        var newItems = this.state.items.filter((_item) => {
            return _item !== itemToBeDeleted;
        })
        this.setState({
            items: newItems
        });

    }
    handleSubmit(event) {
        event.preventDefault();
        var text = this.state.text;
        var newItems = this.state.items.concat(text);
        this.setState({ text: "", items: newItems })
    }
    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <p>TODOLIST</p>
                    <form onSubmit={this.handleSubmit}>
                        <input onChange={this.handleChange} value={this.state.text} />
                        <button>Submit</button>
                    </form>

                    <TodoItems
                        handleDelete={this.handleDelete}
                        items={this.state.items} />
                </div>
            </div>
        )
    }
}


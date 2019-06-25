import React from "react";
import TodoList from "./TodoList";


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: []
        };
        this.addItem = this.addItem.bind(this);
    }
    handleInput(event) {
        console.log("hello!")
    }
    addItem(e) {
        if (this._inputElement.value !== "") {
            const newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };
            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
            this._inputElement.value = "";
        }
        console.log(this.state.items);
        e.preventDefault();
    }
    render() {
        return (
            <div className="App">
                <TodoList addItem={this.addItem}/>
            </div>
        )
    }
}
export default App;
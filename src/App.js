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
    addItem() {

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
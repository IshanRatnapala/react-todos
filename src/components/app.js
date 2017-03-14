import React from 'react';
import TodosList from './todos-list';

const todos = [
    {
        task: 'Learn React',
        isComplete: false
    },
    {
        task: 'Stop hating on jsx',
        isComplete: false
    }
];

export default class App extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            todos
        };
    }

    render () {
        return (
            <div>
                <h1>React Todos</h1>
                <TodosList todos={this.state.todos}/>
            </div>
        )
    }
}
import React from 'react';
import _ from 'lodash';
import TodoListHeader from './todos-list-header';
import TodoListItem from './todos-list-item';

export default class TodoList extends React.Component {
    renderItems(){
        const props = _.omit(this.props, 'todos');

        return _.map(this.props.todos,
            (todo, index) => <TodoListItem key={index} {...todo} {...props} />);
    }

    render () {
        return (
            <table>
                <TodoListHeader/>

                <tbody>
                    {this.renderItems()}
                </tbody>
            </table>
        )
    }
}
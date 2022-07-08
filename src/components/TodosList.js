import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItems';

class TodosList extends React.PureComponent {
  render() {
    const { todos } = this.props;
    return (
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    );
  }
}

TodosList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default TodosList;

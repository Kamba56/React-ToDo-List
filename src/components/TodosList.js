import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItems';

class TodosList extends React.PureComponent {
  render() {
    const { todos, handleChangeProps, delTodoProps } = this.props;
    return (
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={handleChangeProps}
            delTodoProps={delTodoProps}
          />
        ))}
      </ul>
    );
  }
}

TodosList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  delTodoProps: PropTypes.func.isRequired,
};

export default TodosList;

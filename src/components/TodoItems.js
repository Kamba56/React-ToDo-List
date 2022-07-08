import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = (props) => {
  const { todo, handleChangeProps } = props;
  return (
    <li>
      <input type="checkbox" onChange={handleChangeProps(todo.id)} checked={todo.completed} />
      {todo.title}
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
};

export default TodoItem;

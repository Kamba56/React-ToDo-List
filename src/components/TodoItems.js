import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = (props) => {
  const { todo } = props;
  const { title } = todo;
  return (<li>{title}</li>);
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default TodoItem;

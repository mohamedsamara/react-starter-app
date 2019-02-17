/*
 *
 * Todo
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import actions from '../../actions';
import messages from './messages';
import styles from './styles.css';
import TodoList from '../../components/TodoList';
import Message from '../../components/Message';
import LoadingIndicator from '../../components/LoadingIndicator';

export class Todo extends React.Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const { todos, isFetching, error } = this.props;

    return (
      <div className="todo">
        <Helmet
          title="Todo"
          meta={[{ name: 'description', content: 'Description of Todo' }]}
        />
        {isFetching && <LoadingIndicator message="Loading Todos" />}
        {error.isError ? <Message error={error} /> : <TodoList todos={todos} />}
      </div>
    );
  }
}

Todo.propTypes = {};

const mapStateToProps = state => {
  return {
    todos: state.todo.todos,
    error: state.todo.error,
    isFetching: state.todo.isFetching,
  };
};

export default connect(
  mapStateToProps,
  actions,
)(Todo);

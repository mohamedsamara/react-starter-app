/**
 *
 * TodoList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import messages from './messages';
import styles from './styles.css';

const muiStyles = {
  card: {
    marginBottom: 15,
  },
};

const TodoList = props => {
  const { todos, classes } = props;

  const todoNodes = todos.map(todo => (
    <Card key={todo.id} className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {todo.title}
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          {todo.completed ? 'Completed' : 'Not completed'}
        </Button>
      </CardActions>
    </Card>
  ));

  return <div className={styles.todoList}>{todoNodes}</div>;
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      completed: PropTypes.bool,
      id: PropTypes.number.isRequired,
      userId: PropTypes.number,
    }),
  ),
};

export default withStyles(muiStyles)(TodoList);

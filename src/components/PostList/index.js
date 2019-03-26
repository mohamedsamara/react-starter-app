/**
 *
 * PostList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import DeleteIcon from '@material-ui/icons/Delete';

import messages from './messages';
import styles from './styles.css';

import { posts } from '../../containers/Post/types';

const muiStyles = theme => ({
  root: {
    width: '100%',
  },
  expanded: {
    '&:last-child': {
      marginBottom: 20,
    },
  },
  accordionSpace: {
    marginBottom: 20,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

const PostList = props => {
  const { posts, classes, deletePost } = props;

  const postNodes = posts.map((post, index) => (
    <div key={post.id} className={classes.root} key={post.id}>
      <ExpansionPanel
        className={`${classes.accordionSpace} ${classes.expanded}`}
      >
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>{post.title}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>{post.body}</Typography>
        </ExpansionPanelDetails>

        <Divider />
        <ExpansionPanelActions>
          <Button size="small" color="primary">
            Save
          </Button>
          <Button
            color="primary"
            size="small"
            onClick={() => {
              deletePost(post.id, index);
            }}
          >
            Delete
            <DeleteIcon fontSize="small" />
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
    </div>
  ));

  return <div className={styles.postList}>{postNodes}</div>;
};

const { object, func } = PropTypes;
PostList.propTypes = {
  classes: object.isRequired,
  deletePost: func,
  posts: posts,
};

export default withStyles(muiStyles)(PostList);

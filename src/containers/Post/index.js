/*
 *
 * Post
 *
 */

import React, { Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import actions from '../../actions';
import messages from './messages';
import styles from './styles.css';
import LoadingIndicator from '../../components/LoadingIndicator';
import { posts } from './types';

const PostList = lazy(() => import('../../components/PostList'));

export class Post extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const { posts, deletePost } = this.props;

    return (
      <div className="post">
        <Helmet
          title="Post"
          meta={[{ name: 'description', content: 'Description of Post' }]}
        />
        {/* LoadingIndicator will show if there is slow network. To view -> chrome developer tools 
          -> network -> change from online to slow 3g */}
        <Suspense fallback={<LoadingIndicator message="Loading Posts" />}>
          <PostList
            posts={posts}
            deletePost={(id, index) => deletePost(id, index)}
          />
        </Suspense>
      </div>
    );
  }
}

const { func } = PropTypes;
Post.propTypes = {
  deletePost: func.isRequired,
  posts: posts,
};

const mapStateToProps = state => {
  return {
    posts: state.post.posts,
  };
};

export default connect(
  mapStateToProps,
  actions,
)(Post);

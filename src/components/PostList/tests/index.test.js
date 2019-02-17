import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import PostList from '../index';

const posts = [
  {
    userId: 1,
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body:
      'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
  {
    userId: 1,
    id: 2,
    title: 'qui est esse',
    body:
      'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
  },
  {
    userId: 1,
    id: 3,
    title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
    body:
      'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
  },
];

const renderComponent = (props = {}) =>
  shallow(<PostList {...props} posts={posts} />);

describe('<PostList />', () => {
  it('should render an <PostList> tag', () => {
    const renderedComponent = renderComponent();

    expect(renderedComponent.exists()).toBe(true);
  });

  it('should <PostList> render correctly', () => {
    const component = renderer.create(<PostList posts={posts} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should have an posts attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.prop('posts')).toEqual(posts);
  });
});

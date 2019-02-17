import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import TodoList from '../index';

const todos = [
  {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: 'quis ut nam facilis et officia qui',
    completed: false,
  },
];

const renderComponent = (props = {}) =>
  shallow(<TodoList {...props} todos={todos} />);

describe('<TodoList />', () => {
  it('should render an <TodoList> tag', () => {
    const renderedComponent = renderComponent();

    expect(renderedComponent.exists()).toBe(true);
  });

  it('should <TodoList> render correctly', () => {
    const component = renderer.create(<TodoList todos={todos} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should have an todos attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.prop('todos')).toEqual(todos);
  });
});

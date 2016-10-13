import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList', () => {
  let component;
  beforeEach(() => {
    const props = { comments: ['new comment 1', 'new comment 2'] };
    component = renderComponent(CommentList, null, props);
  });

  it('shows an LI for each comment', () => {
    expect(component.find('li').length).to.equal(2);
  });

  it('shows all the comments', () => {
    expect(component).to.contain('new comment 1');
    expect(component).to.contain('new comment 2');
  });
});

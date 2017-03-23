import React from 'react';
import renderer from 'react-test-renderer';

import SearchFilterInput from '../SearchFilterInput';

test('it displays the semantic-ui-react Select for search filters.', () => {
  const component = renderer.create(
    <SearchFilterInput options={[]} />
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

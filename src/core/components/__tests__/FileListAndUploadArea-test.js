import React from 'react';
import renderer from 'react-test-renderer';

import FileListAndUploadArea from '../FileListAndUploadArea';

test('it displays it children at the bottom of the drop area.', () => {
  const component = renderer.create(
    <FileListAndUploadArea />
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

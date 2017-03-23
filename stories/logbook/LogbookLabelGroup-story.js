import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Placeholder from '../Placeholder';

import LogbookLabel from '../../src/logbook/components/LogbookLabel';
import LogbookLabelGroup from '../../src/logbook/components/LogbookLabelGroup';

storiesOf('LogbookLabelGroup', module)
  .add('shows the label group with a placeholder child.', () => (
    <LogbookLabelGroup>
      <Placeholder width="auto" />
    </LogbookLabelGroup>
  ))
  .add('shows the label group with placeholder children.', () => (
    <LogbookLabelGroup>
      <Placeholder width="auto" />
      <Placeholder width="auto" />
      <Placeholder width="auto" />
      <Placeholder width="auto" />
      <Placeholder width="auto" />
    </LogbookLabelGroup>
  ))
  .add('shows the label group with placeholder children (when showing all).', () => (
    <LogbookLabelGroup showAll>
      <Placeholder width="auto" />
      <Placeholder width="auto" />
      <Placeholder width="auto" />
      <Placeholder width="auto" />
      <Placeholder width="auto" />
    </LogbookLabelGroup>
  ))
  .add('shows the label group with logbook label child.', () => (
    <LogbookLabelGroup>
      <LogbookLabel>Test Label</LogbookLabel>
    </LogbookLabelGroup>
  ))
  .add('shows the label group with logbook label children.', () => (
    <LogbookLabelGroup>
      <LogbookLabel>Test Label 0</LogbookLabel>
      <LogbookLabel>Test Label 1</LogbookLabel>
      <LogbookLabel>Test Label 2</LogbookLabel>
      <LogbookLabel>Test Label 3</LogbookLabel>
      <LogbookLabel>Test Label 4</LogbookLabel>
    </LogbookLabelGroup>
  ))
  .add('shows the label group with logbook label children (when showing all).', () => (
    <LogbookLabelGroup showAll>
      <LogbookLabel>Test Label 0</LogbookLabel>
      <LogbookLabel>Test Label 1</LogbookLabel>
      <LogbookLabel>Test Label 2</LogbookLabel>
      <LogbookLabel>Test Label 3</LogbookLabel>
      <LogbookLabel>Test Label 4</LogbookLabel>
    </LogbookLabelGroup>
  ));

import React from 'react';
import { storiesOf } from '@kadira/storybook';

import OrderByInput from '../../src/core/components/OrderByInput';

storiesOf('OrderByInput', module)
  .add('shows the input with an up arrow.', () => (
    <OrderByInput direction="up" />
  ))
  .add('shows the input with an down arrow.', () => (
    <OrderByInput direction="down" />
  ));

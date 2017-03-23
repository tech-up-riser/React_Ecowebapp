/* @flow */
import { compose } from 'recompose';

import { connectCommunicationsSearch } from '../../communication';
import removeReactRouterProps from './removeReactRouterProps';

export default compose(
  connectCommunicationsSearch,
  removeReactRouterProps,
);

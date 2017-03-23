/* @flow */
import { mapProps } from 'recompose';

/**
 * Update a NavButton to be for creating a new communication.
 */
export default mapProps((props) => ({
  onClick() {
    console.log('NYI: add communication');
  },
  children: 'Add',
  ...props,
}));

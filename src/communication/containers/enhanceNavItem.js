/* @flow */
import { mapProps } from 'recompose';

/**
 * Update a NavItem to be for the communication page / dropdown menu.
 */
export default mapProps((props) => ({
  label: 'Communication',
  onClick() {
    console.log('NYI: dropdown');
  },
  ...props,
}));

/* @flow */
import { hover } from 'reactcss';
import { compose, mapProps } from 'recompose';

export default compose(
  hover,
  mapProps(({ hover: isBeingHoveredOver, ...otherProps }) => ({
    showAll: isBeingHoveredOver,
    ...otherProps,
  })),
);

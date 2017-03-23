/* @flow */
import { compose, mapProps } from 'recompose';
import removeReactRouterProps from './removeReactRouterProps';

/**
 * Connect nessary data to the outer Page component.
 */
export default compose(
  mapProps((props) => ({
    logoImgSrc: '/images/logo-white.svg',
    ...props,
  })),
  removeReactRouterProps,
);

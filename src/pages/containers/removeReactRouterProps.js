/* @flow */
import { mapProps } from 'recompose';

export default mapProps(({ location, params, route, router, routeParams, routes, ...otherProps }) => otherProps);

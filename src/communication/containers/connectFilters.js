/* @flow */
import { mapProps } from 'recompose';

/**
 * A HOC that will connect titles and possible filter values for the Cateogory filter.
 */
export const connectCateogorySelectorFilter = mapProps((props) => ({
  placeholder: 'Cateogory Selector',
  options: [],
  ...props,
}));

/**
 * A HOC that will connect titles and possible filter values for the User filter.
 */
export const connectUserFilter = mapProps((props) => ({
  placeholder: 'User Filter',
  options: [],
  ...props,
}));

/**
 * A HOC that will connect titles and possible filter values for the Module filter.
 */
export const connectModuleFilter = mapProps((props) => ({
  placeholder: 'Module Filter',
  options: [],
  ...props,
}));

/**
 * A HOC that will connect titles and possible filter values for the Department filter.
 */
export const connectDepartmentFilter = mapProps((props) => ({
  placeholder: 'Department Filter',
  options: [],
  ...props,
}));

/**
 * A HOC that will connect titles and possible filter values for the More filters.
 */
export const connectMoreFilters = mapProps((props) => ({
  placeholder: 'More...',
  options: [],
  ...props,
}));

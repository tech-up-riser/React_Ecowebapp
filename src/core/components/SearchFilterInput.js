/* @flow */
import React from 'react';
import { Select } from 'semantic-ui-react';

type Props = {
};

/**
 * The input for selecting search filters.
 */
export default function SearchFilterInput({ ...otherProps }: Props): React.Element<*> {
  return (
    <Select multiple {...otherProps} />
  );
}

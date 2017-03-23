/* @flow */
import React from 'react';
import { Label } from 'semantic-ui-react';

type Props = {
};

/**
 * A component that displays the Label marking a logbook.
 */
export default function LogbookLabel({ ...otherProps }: Props): React.Element<*> {
  //TODO, update to used diffrent colors depending on likned logbook
  return (
    <Label color="green" size="tiny" basic {...otherProps} />
  );
}

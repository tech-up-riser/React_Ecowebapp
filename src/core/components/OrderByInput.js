/* @flow */
import React from 'react';
import reactCSS from 'reactcss';
import { Button, Icon, Select } from 'semantic-ui-react';

type Props = {
  direction: 'up' | 'down',
  onClickClear: () => void,
};

/**
 * An input to chose the order to display search results.
 */
export default function OrderByInput({ direction, onClickClear, ...otherProps}: Props): React.Element<*> {
  const styles = reactCSS({
    'default': {
      label: {
        paddingRight: 5,
      },
      directionArrow: {
        paddingLeft: 5,
        paddingRight: 5,
      },
    },
  });

  return (
    <div {...otherProps}>
      <span style={styles.label}>Order By: </span>
      <Select placeholder="Order" options={[]} />
      <Icon style={styles.directionArrow} name={`long arrow ${direction}`} fitted />
      <Button color="blue" onClick={onClickClear}>Clear</Button>
    </div>
  );
}

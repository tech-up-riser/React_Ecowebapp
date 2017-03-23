/* @flow */
import React from 'react';
import reactCSS from 'reactcss';

type Props = {
  showAll?: bool,
  children?: any,
};

/**
 * A component that displays Labels marking logbooks.
 */
export default function LogbookLabelGroup({ children, showAll, ...otherProps }: Props): React.Element<*> {
  const [ topLabel, ...otherLabels ] = React.Children.toArray(children);

  const styles = reactCSS({
    'default': {
      wrapper: {
        display: 'flex',
        marginTop: 5,
      },
      label: {
        position: 'relative',
        zIndex: otherLabels.length + 1,
        marginLeft: 5,
      },
    }
  });

  return (
    <div style={styles.wrapper} {...otherProps}>
      <div style={styles.label}>
        {topLabel}
      </div>
    {otherLabels.map((currLabel, index) =>
      <div
        style={{
          ...styles.label,
          left: showAll? undefined: -50 * (index + 1),
          zIndex: styles.label.zIndex - (index + 1),
        }}
        key={index}
      >
        {currLabel}
      </div>
    )}
    </div>
  );
}

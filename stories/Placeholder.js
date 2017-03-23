import React from 'react';
import reactCSS from 'reactcss';

export default function Placeholder({ color, width, height, style, children, ...otherPorps }: *): React.Element<*> {
  const styles = reactCSS({
    'default': {
      wrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: width? width: '100%',
        height: height? height: '100%',
        backgroundColor: color? color: 'green',
        ...(style? style: {}),
      },
      center: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      },
    },
    'hasStringChild': {
      center: {
        whiteSpace: 'nowrap',
      },
    },
  }, { hasStringChild: !children || typeof children === 'string' });

  return (
    <div style={styles.wrapper} {...otherPorps}>
      <div style={styles.center}>
        {children? children: 'Placeholder'}
      </div>
    </div>
  );
}

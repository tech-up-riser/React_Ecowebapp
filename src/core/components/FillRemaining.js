/* @flow */
import React from 'react';
import reactCSS from 'reactcss';

type Props = {
  direction?: 'column' | 'row',
  children?: any,
};

/**
 * A component that will keep it's first child it's given size, but grow and shrink it's remaining child to
 * fill the entier component.
 */
export default function FillRemaining({ direction, children, ...otherProps }: Props): React.Element<*> {
  if(React.Children.count(children) < 2) throw new Error('FillRemaining must contain more then one child.');
  const [ firstChild, ...remainingChildren ] = React.Children.toArray(children);

  if(!direction || direction === 'column') {
    return (
      <FillRemainingColumn fixedChild={firstChild} {...otherProps}>
        {remainingChildren}
      </FillRemainingColumn>
    );
  }
  else if(direction === 'row') {
    return (
      <FillRemainingRow fixedChild={firstChild} {...otherProps}>
        {remainingChildren}
      </FillRemainingRow>
    );
  }
  else {
    throw new Error(`Invalid direction, ${direction}, for FillRemaining.`);
  }
}

function FillRemainingColumn({ fixedChild, children, ...otherProps }: *): React.Element<*> {
  const styles = reactCSS({
    'default': {
      wrapper: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
      },
      fixed: {
      },
      stretch: {
        display: 'flex',
        flexDirection: 'row',
        flex: '1 0 1px',
      },
      fillWrapper: {
        position: 'relative',
        width: '100%',
      },
      fill: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
    },
  });

  return (
    <div style={styles.wrapper} {...otherProps}>
      <div style={styles.fixed}>
        {fixedChild}
      </div>
      <div style={styles.stretch}>
        <div style={styles.fillWrapper}>
          <div style={styles.fill}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

function FillRemainingRow({ fixedChild, children, ...otherProps }: *): React.Element<*> {
  const styles = reactCSS({
    'default': {
      wrapper: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '100%',
      },
      fixed: {
        height: '100%',
      },
      stretch: {
        flex: '1 0 1px',
        height: '100%',
      },
    },
  });

  return (
    <div style={styles.wrapper} {...otherProps}>
      <div style={styles.fixed} >
        {fixedChild}
      </div>
      <div style={styles.stretch}>
        {children}
      </div>
    </div>
  );
}

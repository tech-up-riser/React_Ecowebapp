/* @flow */
import React from 'react';
import reactCSS from 'reactcss';
import { Popup  } from 'semantic-ui-react';

type Props = {
  label: string,
  icon: any,
  isExpanded?: bool,
};

/**
 * A list item that can be displayed in expanded or collapsed formate, for side bars used for navigation.
 */
export default function SideBarNavItem({ label, icon, isExpanded, ...otherProps }: Props): React.Element<*> {
  if(isExpanded) {
    const styles = reactCSS({
      'default': {
        label: {
          paddingLeft: 25,
        },
      },
    });

    return (
      <span {...otherProps}>
        {icon}
        <span style={styles.label}>{label}</span>
      </span>
    );
  }
  else {
    return (
      <Popup
        trigger={<span {...otherProps}>{icon}</span>}
        content={label}
        positioning="right center"
      />
    );
  }
}

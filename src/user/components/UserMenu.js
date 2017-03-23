/* @flow */
import React from 'react';
import { Icon } from 'semantic-ui-react';

import { HeaderMenu } from '../../core';
import UserMenuDropdown from './UserMenuDropdown';

type Props = {
  clientName: string,
  clientId: string,
  isAdmin?: bool,
  performLogout: () => void,
};

/**
 * The user menu that is in the header.
 */
export default function UserMenu(props: Props): React.Element<*> {
  const { clientName, clientId, isAdmin, performLogout, ...otherProps } = props;

  return (
    <HeaderMenu {...otherProps}>
      <Icon name="bug" size="big" {...otherProps} />
      <Icon name="alarm outline" size="big" {...otherProps} />
    {isAdmin?
      <Icon name="settings" size="big" {...otherProps} />:
      null
    }
      <Icon name="ellipsis horizontal" size="big" {...otherProps} />
      <UserMenuDropdown icon={<Icon name="user" size="big" {...otherProps} />} >
        <span style={{ display: 'flex', flexDirection: 'column' }}>
          <span>{clientName}</span>
          <span>Client ID: {clientId}</span>
        </span>
        <a onClick={performLogout}>
          Sign Out
        </a>
      </UserMenuDropdown>
    </HeaderMenu>
  );
}

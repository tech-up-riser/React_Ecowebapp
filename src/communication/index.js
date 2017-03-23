/* @flow */
import React from 'react';

import { FileListAndUploadArea, NavItem, NavButton } from '../core';

import Communication from './components/Communication';
import CommunicationNavBar from './components/CommunicationNavBar';
import CommunicationSearchResult from './components/CommunicationSearchResult';

import connectCommunication from './containers/connectCommunication';
import connectCommunicationNavigation from './containers/connectCommunicationNavigation';
import connectCommunicationsSearch from './containers/connectCommunicationsSearch';
import enhanceNavItem from './containers/enhanceNavItem';
import enhanceNavButton from './containers/enhanceNavButton';

import communicationsReducer, { COMMUNICATION_REDUCER_STATE } from './reducers/communicationsReducer';
import getSelectedCommunication from './selectors/getSelectedCommunication';

const ConnectedCommunication = connectCommunication(Communication);
const ConnectedCommunicationNavBar = connectCommunicationNavigation(CommunicationNavBar);
const CommunicationNavItem = enhanceNavItem(NavItem);
const AddNavButton = enhanceNavButton(NavButton);

const reducers = {
  [COMMUNICATION_REDUCER_STATE]: communicationsReducer,
};

export {
  AddNavButton,
  ConnectedCommunicationNavBar as CommunicationNavBar,
  CommunicationNavItem as NavItem,
  ConnectedCommunication as Communication,
  CommunicationSearchResult,
  FileListAndUploadArea,
  connectCommunicationsSearch,
  reducers,
  getSelectedCommunication,
};

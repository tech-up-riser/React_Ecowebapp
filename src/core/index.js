/* @flow */
import Activity from './components/Activity';
import Comment from './components/Comment';
import FileListAndUploadArea from './components/FileListAndUploadArea';
import FillRemaining from './components/FillRemaining';
import Header from './components/Header';
import HeaderMenu from './components/HeaderMenu';
import Nav from './components/Nav';
import NavItem from './components/NavItem';
import NavButton from './components/NavButton';
import SearchFiltersBar from './components/SearchFiltersBar';
import SearchFilterInput from './components/SearchFilterInput';
import SearchSideBar from './components/SearchSideBar';
import SideBar from './components/SideBar';
import SideBarNavGroup from './components/SideBarNavGroup';
import SideBarNavHeader from './components/SideBarNavHeader';
import SideBarNavItem from './components/SideBarNavItem';

import connectSearchSideBar from './containers/connectSearchSideBar';
import connectSideBar from './containers/connectSideBar';

import collapseSideBarAction from './actions/collapseSideBarAction';
import expandSideBarAction from './actions/expandSideBarAction';
import sideBarReducer, { SIDEBAR_REDUCER_STATE } from './reducers/sideBarReducer';

const ConnectedSearchSideBar = connectSearchSideBar(SearchSideBar);
const ConnectedSideBar = connectSideBar(SideBar);

const reducers = {
  [SIDEBAR_REDUCER_STATE]: sideBarReducer,
};

export {
  Activity,
  Comment,
  FileListAndUploadArea,
  FillRemaining,
  Header,
  HeaderMenu,
  Nav,
  NavItem,
  NavButton,
  SearchFiltersBar,
  SearchFilterInput,
  ConnectedSearchSideBar as SearchSideBar,
  ConnectedSideBar as SideBar,
  SideBarNavGroup,
  SideBarNavHeader,
  SideBarNavItem,
  collapseSideBarAction,
  expandSideBarAction,
  reducers,
};

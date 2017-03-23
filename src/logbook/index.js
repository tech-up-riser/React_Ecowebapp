/* @flow */
import LogbookLabel from './components/LogbookLabel';
import LogbookLabelGroup from './components/LogbookLabelGroup';

import connectShowAllOnHover from './containers/connectShowAllOnHover';

const ConnectLogbookLabelGroup = connectShowAllOnHover(LogbookLabelGroup);

export {
  LogbookLabel,
  ConnectLogbookLabelGroup as LogbookLabelGroup,
};

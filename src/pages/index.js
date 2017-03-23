/* @flow */
import CommunicationActivityTab from './components/CommunicationActivityTab';
import CommunicationCommentsTab from './components/CommunicationCommentsTab';
import CommunicationDetailsTab from './components/CommunicationDetailsTab';
import CommunicationPage from './components/CommunicationPage';
import PageWrapper from './components/PageWrapper';

import enhanceCommunicationActivityTab from './containers/enhanceCommunicationActivityTab';
import enhanceCommunicationCommentsTab from './containers/enhanceCommunicationCommentsTab';
import enhanceCommunicationDetailsTab from './containers/enhanceCommunicationDetailsTab';
import enhanceCommunicationPage from './containers/enhanceCommunicationPage';
import enhancePageWrapper from './containers/enhancePageWrapper';

const EnhancedCommunicationActivityTab = enhanceCommunicationActivityTab(CommunicationActivityTab);
const EnhancedCommunicationCommentsTab = enhanceCommunicationCommentsTab(CommunicationCommentsTab);
const EnhancedCommunicationDetailsTab = enhanceCommunicationDetailsTab(CommunicationDetailsTab);
const EnhancedCommunicationPage = enhanceCommunicationPage(CommunicationPage);
const EnhancedPageWrapper = enhancePageWrapper(PageWrapper);

export {
  EnhancedCommunicationActivityTab as CommunicationActivityTab,
  EnhancedCommunicationCommentsTab as CommunicationCommentsTab,
  EnhancedCommunicationDetailsTab as CommunicationDetailsTab,
  EnhancedCommunicationPage as CommunicationPage,
  EnhancedPageWrapper as PageWrapper,
};

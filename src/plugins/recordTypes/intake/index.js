import advancedSearch from './advancedSearch';
import forms from './forms';

export default () => configContext => ({
  recordTypes: {
    intake: {
      advancedSearch: advancedSearch(configContext),
      forms: forms(configContext),
    },
  },
});

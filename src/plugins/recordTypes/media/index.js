import advancedSearch from './advancedSearch';
import forms from './forms';

export default () => configContext => ({
  recordTypes: {
    media: {
      advancedSearch: advancedSearch(configContext),
      forms: forms(configContext),
    },
  },
});

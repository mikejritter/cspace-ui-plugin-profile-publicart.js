import advancedSearch from './advancedSearch';
import forms from './forms';

export default () => configContext => ({
  recordTypes: {
    loanin: {
      advancedSearch: advancedSearch(configContext),
      forms: forms(configContext),
    },
  },
});

import advancedSearch from './advancedSearch';
import forms from './forms';

export default () => configContext => ({
  recordTypes: {
    movement: {
      advancedSearch: advancedSearch(configContext),
      forms: forms(configContext),
    },
  },
});

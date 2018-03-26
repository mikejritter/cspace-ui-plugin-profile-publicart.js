import advancedSearch from './advancedSearch';
import fields from './fields';
import forms from './forms';
import messages from './messages';

export default () => configContext => ({
  recordTypes: {
    location: {
      messages,
      advancedSearch: advancedSearch(configContext),
      fields: fields(configContext),
      forms: forms(configContext),
    },
  },
});

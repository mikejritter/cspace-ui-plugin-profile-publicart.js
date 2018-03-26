import advancedSearch from './advancedSearch';
import fields from './fields';
import forms from './forms';
import vocabularies from './vocabularies';

export default () => configContext => ({
  recordTypes: {
    person: {
      vocabularies,
      advancedSearch: advancedSearch(configContext),
      fields: fields(configContext),
      forms: forms(configContext),
    },
  },
});

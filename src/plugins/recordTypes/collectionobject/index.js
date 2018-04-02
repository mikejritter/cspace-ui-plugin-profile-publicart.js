import advancedSearch from './advancedSearch';
import columns from './columns';
import fields from './fields';
import forms from './forms';
import optionLists from './optionLists';

export default () => configContext => ({
  optionLists,
  recordTypes: {
    collectionobject: {
      advancedSearch: advancedSearch(configContext),
      columns: columns(configContext),
      fields: fields(configContext),
      forms: forms(configContext),
    },
  },
});

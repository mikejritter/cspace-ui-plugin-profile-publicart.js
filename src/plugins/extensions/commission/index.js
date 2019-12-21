import advancedSearch from './advancedSearch';
import fields from './fields';
import form from './form';
import messages from './messages';

export default () => (configContext) => ({
  extensions: {
    commission: {
      advancedSearch: advancedSearch(configContext),
      fields: fields(configContext),
      form: form(configContext),
    },
  },
  recordTypes: {
    acquisition: {
      messages,
    },
  },
});

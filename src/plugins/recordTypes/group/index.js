import fields from './fields';
import forms from './forms';

export default () => configContext => ({
  recordTypes: {
    group: {
      messages,
      serviceConfig,
      advancedSearch: advancedSearch(configContext),
      columns: columns(configContext),
      fields: fields(configContext),
      forms: forms(configContext),
      title: title(configContext),
    },
  },
});

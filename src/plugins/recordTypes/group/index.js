import fields from './fields';
import forms from './forms';

export default () => configContext => ({
  recordTypes: {
    group: {
      fields: fields(configContext),
      forms: forms(configContext),
    },
  },
});

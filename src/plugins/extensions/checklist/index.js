import fields from './fields';
import form from './form';
import messages from './messages';

export default () => (configContext) => ({
  extensions: {
    checklist: {
      fields: fields(configContext),
      form: form(configContext),
    },
  },
  recordTypes: {
    group: {
      messages,
    },
  },
});

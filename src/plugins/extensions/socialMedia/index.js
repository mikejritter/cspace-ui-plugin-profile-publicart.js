import fields from './fields';
import form from './form';

export default () => (configContext) => ({
  extensions: {
    socialMedia: {
      fields: fields(configContext),
      form: form(configContext),
    },
  },
});

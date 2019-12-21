import form from './form';

export default () => (configContext) => ({
  extensions: {
    dimension: {
      form: form(configContext),
    },
  },
});

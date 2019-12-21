import fields from './fields';

export default () => (configContext) => ({
  extensions: {
    address: {
      fields: fields(configContext),
    },
  },
});

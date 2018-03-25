import forms from './forms';

export default () => configContext => ({
  recordTypes: {
    objectexit: {
      forms: forms(configContext),
    },
  },
});

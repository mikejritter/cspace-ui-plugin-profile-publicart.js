import forms from './forms';
import optionLists from './optionLists';

export default () => (configContext) => ({
  optionLists,
  recordTypes: {
    objectexit: {
      forms: forms(configContext),
    },
  },
});

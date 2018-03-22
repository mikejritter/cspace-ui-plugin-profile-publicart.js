import forms from './forms';
import vocabularies from './vocabularies';

export default () => configContext => ({
  recordTypes: {
    concept: {
      vocabularies,
      forms: forms(configContext),
    },
  },
});

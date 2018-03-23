import { defineMessages } from 'react-intl';

export default {
  creatorTypes: {
    values: [
      'culture',
      'organization',
      'person',
    ],
    messages: defineMessages({
      culture: {
        id: 'option.creatorTypes.culture',
        defaultMessage: 'culture',
      },
      organization: {
        id: 'option.creatorTypes.organization',
        defaultMessage: 'organization',
      },
      person: {
        id: 'option.creatorTypes.person',
        defaultMessage: 'person',
      },
    }),
  },
};

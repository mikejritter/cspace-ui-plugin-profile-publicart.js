import { defineMessages } from 'react-intl';

export default {
  titleTypes: {
    values: [
      'assigned-by-artist',
      'collection',
      'cited',
      'popular',
      'series',
      'trade',
    ],
    messages: defineMessages({
      'assigned-by-artist': {
        id: 'option.titleTypes.assigned-by-artist',
        defaultMessage: 'assigned by artist',
      },
      collection: {
        id: 'option.titleTypes.collection',
        defaultMessage: 'collection',
      },
      cited: {
        id: 'option.titleTypes.cited',
        defaultMessage: 'cited',
      },
      popular: {
        id: 'option.titleTypes.popular',
        defaultMessage: 'popular',
      },
      series: {
        id: 'option.titleTypes.series',
        defaultMessage: 'series',
      },
      trade: {
        id: 'option.titleTypes.trade',
        defaultMessage: 'trade',
      },
    }),
  },
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

import { defineMessages } from 'react-intl';

export default {
  conservationPriorityLevels: {
    values: [
      'low',
      'medium',
      'high',
    ],
    messages: defineMessages({
      low: {
        id: 'option.conservationPriorityLevels.low',
        defaultMessage: 'low',
      },
      medium: {
        id: 'option.conservationPriorityLevels.medium',
        defaultMessage: 'medium',
      },
      high: {
        id: 'option.conservationPriorityLevels.high',
        defaultMessage: 'high',
      },
    }),
  },
};

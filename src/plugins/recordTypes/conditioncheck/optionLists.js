import { defineMessages } from 'react-intl';

export default {
  conditionCheckReasons: {
    values: [
      'cleaning',
      'conservation',
      'damagedintransit',
      'inventory',
      'loanin',
      'newacquisition',
    ],
    messages: defineMessages({
      cleaning: {
        id: 'option.conditionCheckReasons.cleaning',
        defaultMessage: 'cleaning',
      },
      inventory: {
        id: 'option.conditionCheckReasons.inventory',
        defaultMessage: 'inventory',
      },
    }),
  },
};

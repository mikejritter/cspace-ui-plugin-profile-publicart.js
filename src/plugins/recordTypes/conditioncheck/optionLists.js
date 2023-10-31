import { defineMessages } from 'react-intl';

export default {
  conditions: {
    values: [
      'needsnowork',
      'needs cleaning',
      'missing hardware',
      'light/electronic replacement',
      'environmental issue',
      'needs coating',
      'needs repair',
      'exhibitableneedswork',
      'notexhibitablestable',
      'injeopardy',
    ],
    messages: defineMessages({
      'needs cleaning': {
        id: 'option.conditions.needs cleaning',
        defaultMessage: 'needs cleaning',
      },
      'missing hardware': {
        id: 'option.conditions.missing hardware',
        defaultMessage: 'missing hardware',
      },
      'light/electronic replacement': {
        id: 'option.conditions.light/electronic replacement',
        defaultMessage: 'light/electronic replacement',
      },
      'environmental issue': {
        id: 'option.conditions.environmental issue',
        defaultMessage: 'environmental issue',
      },
      'needs coating': {
        id: 'option.conditions.needs coating',
        defaultMessage: 'needs coating',
      },
      'needs repair': {
        id: 'option.conditions.needs repair',
        defaultMessage: 'needs repair',
      },
    }),
  },
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

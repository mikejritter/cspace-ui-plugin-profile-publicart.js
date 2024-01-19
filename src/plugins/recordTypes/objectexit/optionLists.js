import { defineMessages } from 'react-intl';

export default {
  exitReasons: {
    values: [
      'temporary',
      'transfer',
      'painted out',
      'covered by construction',
      'lost to demolition',
    ],
    messages: defineMessages({
      temporary: {
        id: 'option.exitReasons.temporary',
        defaultMessage: 'temporary',
      },
      transfer: {
        id: 'option.exitReasons.transfer',
        defaultMessage: 'transfer',
      },
      'painted out': {
        id: 'option.exitReasons.painted out',
        defaultMessage: 'painted out',
      },
      'covered by construction': {
        id: 'option.exitReasons.covered by construction',
        defaultMessage: 'covered by construction',
      },
      'lost to demolition': {
        id: 'option.exitReasons.lost to demolition',
        defaultMessage: 'lost to demolition',
      },
    }),
  },
};

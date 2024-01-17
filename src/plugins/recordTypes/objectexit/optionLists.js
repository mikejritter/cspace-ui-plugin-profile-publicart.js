import { defineMessages } from 'react-intl';

export default {
  exitReasons: {
    values: [
      'deaccession',
      'disposal',
      'returnofloan',
      'temporary',
      'transfer',
      'painted out',
      'covered by construction',
      'lost to demolition',
    ],
    messages: defineMessages({
      deaccession: {
        id: 'option.exitReasons.deaccession',
        defaultMessage: 'deaccession',
      },
      disposal: {
        id: 'option.exitReasons.disposal',
        defaultMessage: 'disposal',
      },
      returnofloan: {
        id: 'option.exitReasons.returnofloan',
        defaultMessage: 'return of loan',
      },
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

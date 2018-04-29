import { defineMessages } from 'react-intl';

export default {
  activity: {
    disabled: true,
  },
  associated: {
    disabled: true,
  },
  worktype: {
    messages: defineMessages({
      name: {
        id: 'vocab.concept.worktype.name',
        description: 'The name of the worktype vocabulary.',
        defaultMessage: 'Work Type',
      },
      collectionName: {
        id: 'vocab.concept.worktype.collectionName',
        description: 'The name of a collection of records from the worktype vocabulary.',
        defaultMessage: 'Work Types',
      },
    }),
    serviceConfig: {
      servicePath: 'urn:cspace:name(worktype)',
    },
  },
};

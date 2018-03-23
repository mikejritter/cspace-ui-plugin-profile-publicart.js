import { defineMessages } from 'react-intl';

export default {
  activity: {
    disabled: true,
  },
  ethculture: {
    messages: defineMessages({
      name: {
        id: 'vocab.concept.ethculture.name',
        description: 'The name of the ethculture vocabulary.',
        defaultMessage: 'Ethnographic Culture',
      },
      collectionName: {
        id: 'vocab.concept.ethculture.collectionName',
        description: 'The name of a collection of records from the ethculture vocabulary.',
        defaultMessage: 'Ethnographic Cultures',
      },
    }),
    serviceConfig: {
      servicePath: 'urn:cspace:name(ethculture)',
    },
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

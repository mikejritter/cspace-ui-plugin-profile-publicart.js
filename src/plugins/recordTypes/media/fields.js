import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CompoundInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:media_publicart': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/media/local/publicart',
          },
        },
        publicartRightsHolders: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          publicartRightsHolder: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.media_publicart.publicartRightsHolder.name',
                  defaultMessage: 'Rights holder',
                },
              }),
              repeating: true,
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'person/local,organization/local',
                },
              },
            },
          },
        },
      },
    },
  };
};

import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    TermPickerInput,
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
        publishToList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          publishTo: {
            [config]: {
              defaultValue: 'urn:cspace:core.collectionspace.org:vocabularies:name(publishto):item:name(none)\'None\'',
              messages: defineMessages({
                name: {
                  id: 'field.media_publicart.publishTo.name',
                  defaultMessage: 'Publish to',
                },
              }),
              repeating: true,
              view: {
                type: TermPickerInput,
                props: {
                  source: 'publishto',
                },
              },
            },
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
                  source: 'person/local,person/shared,organization/local,organization/shared',
                },
              },
            },
          },
        },
      },
    },
  };
};

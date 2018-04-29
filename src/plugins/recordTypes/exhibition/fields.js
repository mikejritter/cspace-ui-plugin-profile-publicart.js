import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CompoundInput,
    TextInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:exhibitions_publicart': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/exhibition/local/publicart',
          },
        },
        exhibitionSupportGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          exhibitionSupportGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.exhibitions_publicart.exhibitionSupportGroup.name',
                  defaultMessage: 'Support',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            exhibitionSupport: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.exhibitions_publicart.exhibitionSupport.fullName',
                    defaultMessage: 'Support name',
                  },
                  name: {
                    id: 'field.exhibitions_publicart.exhibitionSupport.name',
                    defaultMessage: 'Name',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'person/local,organization/local',
                  },
                },
              },
            },
            exhibitionSupportNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.exhibitions_publicart.exhibitionSupportNote.fullName',
                    defaultMessage: 'Support note',
                  },
                  name: {
                    id: 'field.exhibitions_publicart.exhibitionSupportNote.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
      },
    },
  };
};

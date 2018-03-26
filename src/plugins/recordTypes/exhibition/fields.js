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
        publicartExhibitionObjectGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          publicartExhibitionObjectGroup: {
            [config]: {
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            exhibitionObjectNumber: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.exhibitions_publicart.exhibitionObjectNumber.name',
                    defaultMessage: 'Object',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            exhibitionObjectName: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.exhibitions_publicart.exhibitionObjectName.name',
                    defaultMessage: 'Name',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            exhibitionObjectCurrentLocation: {
              [config]: {
                cloneable: false,
                messages: defineMessages({
                  name: {
                    id: 'field.exhibitions_publicart.exhibitionObjectCurrentLocation.name',
                    defaultMessage: 'Artwork current location',
                  },
                }),
                searchView: {
                  type: AutocompleteInput,
                  props: {
                    source: 'location/local,location/offsite,organization/local',
                  },
                },
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'location/local,location/offsite,organization/local',
                    // readOnly: true,
                  },
                },
              },
            },
          },
        },
      },
    },
  };
};

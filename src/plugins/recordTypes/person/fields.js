import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CompoundInput,
    TextInput,
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:persons_publicart': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/person/local/publicart',
          },
        },
        organizations: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          organization: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.persons_publicart.organization.name',
                  defaultMessage: 'Person\'s organization',
                },
              }),
              repeating: true,
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'organization/local',
                },
              },
            },
          },
        },
        socialMediaGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          socialMediaGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.persons_publicart.socialMediaGroup.name',
                  defaultMessage: 'Social media',
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
            socialMediaHandle: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.persons_publicart.socialMediaHandle.fullName',
                    defaultMessage: 'Social media handle',
                  },
                  name: {
                    id: 'field.persons_publicart.socialMediaHandle.name',
                    defaultMessage: 'Handle',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            socialMediaHandleType: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.persons_publicart.socialMediaHandleType.fullName',
                    defaultMessage: 'Social media type',
                  },
                  name: {
                    id: 'field.persons_publicart.socialMediaHandleType.name',
                    defaultMessage: 'Type',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'socialmediatype',
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

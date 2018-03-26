import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    CompoundInput,
    TextInput,
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:organizations_publicart': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/organization/local/publicart',
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
                  id: 'field.organizations_publicart.socialMediaGroup.name',
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
                    id: 'field.organizations_publicart.socialMediaHandle.fullName',
                    defaultMessage: 'Social media handle',
                  },
                  name: {
                    id: 'field.organizations_publicart.socialMediaHandle.name',
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
                    id: 'field.organizations_publicart.socialMediaHandleType.fullName',
                    defaultMessage: 'Social media type',
                  },
                  name: {
                    id: 'field.organizations_publicart.socialMediaHandleType.name',
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

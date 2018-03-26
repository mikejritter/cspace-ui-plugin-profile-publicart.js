import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CompoundInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    extensions,
  } = configContext.config;

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
        ...extensions.socialMedia.fields,
      },
    },
  };
};

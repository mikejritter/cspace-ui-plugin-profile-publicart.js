import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    TextInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:conditionchecks_publicart': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/conditioncheck/local/publicart',
          },
        },
        installationRecommendations: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.conditionchecks_publicart.installationRecommendations.name',
                defaultMessage: 'Installation recommendation',
              },
            }),
            view: {
              type: TextInput,
              props: {
                multiline: true,
              },
            },
          },
        },
      },
    },
  };
};

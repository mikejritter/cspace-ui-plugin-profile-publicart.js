import { defineMessages } from 'react-intl';


export default (configContext) => {
  const {
    TermPickerInput,
    AutocompleteInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    extensions,
  } = configContext.config;

  return {
    document: {
      'ns2:organizations_common': {
        foundingPlace: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.organizations_common.foundingPlace.name',
                defaultMessage: 'Foundation place',
              },
            }),
            view: {
              type: AutocompleteInput,
              props: {
                source: 'place/local,place/shared',
              },
            },
          },
        },
      },
      'ns2:organizations_publicart': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/organization/local/publicart',
          },
        },
        placementType: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.organizations_publicart.placementType.name',
                defaultMessage: 'Placement type',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'placementtypes',
              },
            },
          },
        },
        currentPlace: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.organizations_publicart.currentPlace.name',
                defaultMessage: 'Current place',
              },
            }),
            view: {
              type: AutocompleteInput,
              props: {
                source: 'place/local,place/shared',
              },
            },
          },
        },
        ...extensions.socialMedia.fields,
      },
    },
  };
};

import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    addrGroupList: {
      addrGroup: {
        addressMunicipality: {
          [config]: {
            view: {
              props: {
                source: 'place/local,place/shared',
              },
            },
          },
        },
        addressStateOrProvince: {
          [config]: {
            view: {
              props: {
                source: 'place/local,place/shared',
              },
            },
          },
        },
        addressCountry: {
          [config]: {
            view: {
              props: {
                source: 'place/local,place/shared',
              },
            },
          },
        },
        addressCounty: {
          [config]: {
            messages: defineMessages({
              fullName: {
                id: 'field.ext.address.addressCounty.fullName',
                defaultMessage: 'Address county',
              },
              name: {
                id: 'field.ext.address.addressCounty.name',
                defaultMessage: 'County',
              },
            }),
            view: {
              type: AutocompleteInput,
              props: {
                // Suppress Chrome autofill
                autoComplete: 'cspace-county',
                source: 'place/local,place/shared',
              },
            },
          },
        },
      },
    },
  };
};

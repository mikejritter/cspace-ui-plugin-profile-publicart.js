import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    TextInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_FLOAT,
  } = configContext.dataTypes;

  const {
    extensions,
  } = configContext.config;

  return {
    document: {
      'ns2:locations_publicart': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/location/local/publicart',
          },
        },
        ...extensions.address.fields,
        decimalLatitude: {
          [config]: {
            dataType: DATA_TYPE_FLOAT,
            messages: defineMessages({
              name: {
                id: 'field.locations_publicart.decimalLatitude.name',
                defaultMessage: 'Decimal latitude',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        decimalLongitude: {
          [config]: {
            dataType: DATA_TYPE_FLOAT,
            messages: defineMessages({
              name: {
                id: 'field.locations_publicart.decimalLongitude.name',
                defaultMessage: 'Decimal longitude',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
      },
    },
  };
};

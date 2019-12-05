import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    CompoundInput,
    DateInput,
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_DATE,
  } = configContext.dataTypes;

  const {
    extensions,
  } = configContext.config;

  return {
    document: {
      'ns2:acquisitions_common': {
        accessionDateGroup: {
          // Replaced by accessionDate. Hide from search.
          [config]: {
            searchDisabled: true,
          },
        },
        acquisitionDateGroupList: {
          // Replaced by acquisitionDates. Hide from search.
          [config]: {
            searchDisabled: true,
          },
        },
        acquisitionMethod: {
          [config]: {
            view: {
              type: TermPickerInput,
              props: {
                source: 'acquisitionmethod',
              },
            },
          },
        },
      },
      'ns2:acquisitions_publicart': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/acquisition/local/publicart',
          },
        },
        accessionDate: {
          [config]: {
            dataType: DATA_TYPE_DATE,
            messages: defineMessages({
              name: {
                id: 'field.acquisitions_publicart.accessionDate.name',
                defaultMessage: 'Accession date',
              },
            }),
            view: {
              type: DateInput,
            },
          },
        },
        acquisitionDates: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          acquisitionDate: {
            [config]: {
              dataType: DATA_TYPE_DATE,
              messages: defineMessages({
                name: {
                  id: 'field.acquisitions_publicart.acquisitionDate.name',
                  defaultMessage: 'Acquisition date',
                },
              }),
              repeating: true,
              view: {
                type: DateInput,
              },
            },
          },
        },
      },
      ...extensions.commission.fields,
    },
  };
};

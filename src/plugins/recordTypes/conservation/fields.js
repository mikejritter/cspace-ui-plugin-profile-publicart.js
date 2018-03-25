import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    DateInput,
    OptionPickerInput,
    TermPickerInput,
    TextInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_DATE,
    DATA_TYPE_FLOAT,
  } = configContext.dataTypes;

  return {
    document: {
      'ns2:conservation_publicart': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/conservation/local/publicart',
          },
        },
        conservationPriorityLevel: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.conservation_publicart.conservationPriorityLevel.name',
                defaultMessage: 'Priority level',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'conservationPriorityLevels',
              },
            },
          },
        },
        proposedTreatmentEstCurrency: {
          [config]: {
            messages: defineMessages({
              fullName: {
                id: 'field.conservation_publicart.proposedTreatmentEstCurrency.fullName',
                defaultMessage: 'Proposed treatment estimate currency',
              },
              name: {
                id: 'field.conservation_publicart.proposedTreatmentEstCurrency.name',
                defaultMessage: 'Currency',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'currency',
              },
            },
          },
        },
        proposedTreatmentEstValue: {
          [config]: {
            dataType: DATA_TYPE_FLOAT,
            messages: defineMessages({
              fullName: {
                id: 'field.conservation_publicart.proposedTreatmentEstValue.fullName',
                defaultMessage: 'Proposed treatment estimate value',
              },
              name: {
                id: 'field.conservation_publicart.proposedTreatmentEstValue.name',
                defaultMessage: 'Value',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        proposedTreatmentStartDate: {
          [config]: {
            dataType: DATA_TYPE_DATE,
            messages: defineMessages({
              name: {
                id: 'field.conservation_publicart.proposedTreatmentStartDate.name',
                defaultMessage: 'Proposed treatment start date',
              },
            }),
            view: {
              type: DateInput,
            },
          },
        },
        proposedTreatmentEndDate: {
          [config]: {
            dataType: DATA_TYPE_DATE,
            messages: defineMessages({
              name: {
                id: 'field.conservation_publicart.proposedTreatmentEndDate.name',
                defaultMessage: 'Proposed treatment end date',
              },
            }),
            view: {
              type: DateInput,
            },
          },
        },
        proposedTreatmentContractRestrictions: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.conservation_publicart.proposedTreatmentContractRestrictions.name',
                defaultMessage: 'Proposed treatment contract restrictions',
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
        treatmentCostCurrency: {
          [config]: {
            messages: defineMessages({
              fullName: {
                id: 'field.conservation_publicart.treatmentCostCurrency.fullName',
                defaultMessage: 'Treatment cost currency',
              },
              name: {
                id: 'field.conservation_publicart.treatmentCostCurrency.name',
                defaultMessage: 'Currency',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'currency',
              },
            },
          },
        },
        treatmentCostValue: {
          [config]: {
            dataType: DATA_TYPE_FLOAT,
            messages: defineMessages({
              fullName: {
                id: 'field.conservation_publicart.treatmentCostValue.fullName',
                defaultMessage: 'Treatment cost value',
              },
              name: {
                id: 'field.conservation_publicart.treatmentCostValue.name',
                defaultMessage: 'Value',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        analysisRecommendations: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.conservation_publicart.analysisRecommendations.name',
                defaultMessage: 'Analyst recommendations',
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

import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    CompoundInput,
    DateInput,
    TermPickerInput,
    TextInput,
    AutocompleteInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_DATE,
  } = configContext.dataTypes;

  return {
    document: {
      'ns2:valuationcontrols_publicart': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/valuationcontrol/local/publicart',
          },
        },
        valueSourceRole: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.valuationcontrols_publicart.valueSourceRole.name',
                defaultMessage: 'Source role',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'valuationsourcerole',
              },
            },
          },
        },
        insuranceGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          insuranceGroup: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.valuationcontrols_publicart.insuranceGroup.fullName',
                  defaultMessage: 'Insurance',
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
            insurer: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.valuationcontrols_publicart.insurer.name',
                    defaultMessage: 'Insurer',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'person/local,person/shared,organization/local,organization/shared',
                  },
                },
              },
            },
            insuranceNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.valuationcontrols_publicart.insuranceNote.fullName',
                    defaultMessage: 'Insurance note',
                  },
                  name: {
                    id: 'field.valuationcontrols_publicart.insuranceNote.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            insurancePolicyNumber: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.valuationcontrols_publicart.insurancePolicyNumber.fullName',
                    defaultMessage: 'Insurance policy number',
                  },
                  name: {
                    id: 'field.valuationcontrols_publicart.insurancePolicyNumber.name',
                    defaultMessage: 'Policy number',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            insuranceRenewalDate: {
              [config]: {
                dataType: DATA_TYPE_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.valuationcontrols_publicart.insuranceRenewalDate.fullName',
                    defaultMessage: 'Insurance renewal date',
                  },
                  name: {
                    id: 'field.valuationcontrols_publicart.insuranceRenewalDate.name',
                    defaultMessage: 'Renewal date',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
          },
        },
      },
    },
  };
};

import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CompoundInput,
    DateInput,
    OptionPickerInput,
    StructuredDateInput,
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_STRUCTURED_DATE,
  } = configContext.dataTypes;

  const {
    extensions,
  } = configContext.config;

  return {
    document: {
      'ns2:collectionobjects_common': {
        responsibleDepartments: {
          responsibleDepartment: {
            [config]: {
              view: {
                type: TermPickerInput,
                props: {
                  source: 'department',
                },
              },
            },
          },
        },
        inventoryStatusList: {
          inventoryStatus: {
            [config]: {
              defaultValue: null,
            },
          },
        },
        objectNameList: {
          objectNameGroup: {
            objectName: {
              [config]: {
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'concept/worktype',
                  },
                },
              },
            },
          },
        },
        materialGroupList: {
          materialGroup: {
            material: {
              [config]: {
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'concept/material',
                  },
                },
              },
            },

          },
        },
      },
      'ns2:collectionobjects_publicart': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/collectionobject/local/publicart',
          },
        },
        publicartCollections: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          publicartCollection: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_publicart.publicartCollection.name',
                  defaultMessage: 'Collection',
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
        publicartProductionDateGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          publicartProductionDateGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_publicart.publicartProductionDateGroup.name',
                  defaultMessage: 'Production date',
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
            publicartProductionStructDateGroup: {
              [config]: {
                dataType: DATA_TYPE_STRUCTURED_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_publicart.publicartProductionStructDateGroup.fullName',
                    defaultMessage: 'Production date',
                  },
                  name: {
                    id: 'field.collectionobjects_publicart.publicartProductionStructDateGroup.name',
                    defaultMessage: 'Date',
                  },
                }),
                searchView: {
                  type: DateInput,
                },
                view: {
                  type: StructuredDateInput,
                },
              },
              ...extensions.structuredDate.fields,
            },
            publicartProductionDateType: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_publicart.publicartProductionDateType.fullName',
                    defaultMessage: 'Production date type',
                  },
                  name: {
                    id: 'field.collectionobjects_publicart.publicartProductionDateType.name',
                    defaultMessage: 'Type',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'proddatetype',
                  },
                },
              },
            },
          },
        },
        publicartProductionPersonGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          publicartProductionPersonGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_publicart.publicartProductionPersonGroup.name',
                  defaultMessage: 'Artwork creator',
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
            publicartProductionPerson: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_publicart.publicartProductionPerson.fullName',
                    defaultMessage: 'Artwork creator name',
                  },
                  name: {
                    id: 'field.collectionobjects_publicart.publicartProductionPerson.name',
                    defaultMessage: 'Name',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'person/local,organization/local,concept/ethculture',
                  },
                },
              },
            },
            publicartProductionPersonRole: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_publicart.publicartProductionPersonRole.fullName',
                    defaultMessage: 'Artwork creator role',
                  },
                  name: {
                    id: 'field.collectionobjects_publicart.publicartProductionPersonRole.name',
                    defaultMessage: 'Role',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'prodpersonrole',
                  },
                },
              },
            },
            publicartProductionPersonType: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_publicart.publicartProductionPersonType.fullName',
                    defaultMessage: 'Artwork creator type',
                  },
                  name: {
                    id: 'field.collectionobjects_publicart.publicartProductionPersonType.name',
                    defaultMessage: 'Type',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'creatorTypes',
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

import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CompoundInput,
    DateInput,
    TermPickerInput,
    TextInput,
  } = configContext.inputComponents;

  const {
    DATA_TYPE_DATE,
  } = configContext.dataTypes;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    'ns2:groups_checklist': {
      [config]: {
        service: {
          ns: 'http://collectionspace.org/services/group/domain/checklist',
        },
      },
      checklistGroupList: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        checklistGroup: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.groups_checklist.checklistGroup.name',
                defaultMessage: 'Checklists',
              },
            }),
            repeating: true,
            view: {
              type: CompoundInput,
            },
          },
          checklistType: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.groups_checklist.checklistType.fullName',
                  defaultMessage: 'Checklist type',
                },
                name: {
                  id: 'field.groups_checklist.checklistType.name',
                  defaultMessage: 'Type',
                },
              }),
              view: {
                type: TermPickerInput,
                props: {
                  source: 'checklisttype',
                },
              },
            },
          },
          checklistOpenDate: {
            [config]: {
              dataType: DATA_TYPE_DATE,
              messages: defineMessages({
                fullName: {
                  id: 'field.groups_checklist.checklistOpenDate.fullName',
                  defaultMessage: 'Checklist start date',
                },
                name: {
                  id: 'field.groups_checklist.checklistOpenDate.name',
                  defaultMessage: 'Start',
                },
              }),
              view: {
                type: DateInput,
              },
            },
          },
          checklistCloseDate: {
            [config]: {
              dataType: DATA_TYPE_DATE,
              messages: defineMessages({
                fullName: {
                  id: 'field.groups_checklist.checklistCloseDate.fullName',
                  defaultMessage: 'Checklist close date',
                },
                name: {
                  id: 'field.groups_checklist.checklistCloseDate.name',
                  defaultMessage: 'Close',
                },
              }),
              view: {
                type: DateInput,
              },
            },
          },
          checklistNote: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.groups_checklist.checklistNote.fullName',
                  defaultMessage: 'Checklist note',
                },
                name: {
                  id: 'field.groups_checklist.checklistNote.name',
                  defaultMessage: 'Note',
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
          checklistItemGroupList: {
            [config]: {
              view: {
                type: CompoundInput,
              },
            },
            checklistItemGroup: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.groups_checklist.checklistItemGroup.name',
                    defaultMessage: 'Checklist items',
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
              checklistItem: {
                [config]: {
                  messages: defineMessages({
                    fullName: {
                      id: 'field.groups_checklist.checklistItem.fullName',
                      defaultMessage: 'Checklist item',
                    },
                    name: {
                      id: 'field.groups_checklist.checklistItem.name',
                      defaultMessage: 'Item',
                    },
                  }),
                  view: {
                    type: TextInput,
                  },
                },
              },
              checklistAssignee: {
                [config]: {
                  messages: defineMessages({
                    name: {
                      id: 'field.groups_checklist.checklistAssignee.name',
                      defaultMessage: 'Assigned to',
                    },
                  }),
                  view: {
                    type: AutocompleteInput,
                    props: {
                      source: 'person/local,person/shared,person/ulan',
                    },
                  },
                },
              },
              checklistStatus: {
                [config]: {
                  messages: defineMessages({
                    name: {
                      id: 'field.groups_checklist.checklistStatus.name',
                      defaultMessage: 'Status',
                    },
                  }),
                  view: {
                    type: TermPickerInput,
                    props: {
                      source: 'checkliststatus',
                    },
                  },
                },
              },
              checklistStatusDate: {
                [config]: {
                  dataType: DATA_TYPE_DATE,
                  messages: defineMessages({
                    fullName: {
                      id: 'field.groups_checklist.checklistStatusDate.fullName',
                      defaultMessage: 'Status date',
                    },
                    name: {
                      id: 'field.groups_checklist.checklistStatusDate.name',
                      defaultMessage: 'Date',
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
    },
  };
};

export default (configContext) => {
  const {
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    extensions,
  } = configContext.config;

  return {
    document: {
      'ns2:groups_common': {
        responsibleDepartment: {
          [config]: {
            view: {
              type: TermPickerInput,
              props: {
                source: 'program',
              },
            },
          },
        },
        owner: {
          [config]: {
            view: {
              props: {
                source: 'person/local,person/shared,organization/local,organization/shared',
              },
            },
          },
        },
      },
      ...extensions.checklist.fields,
    },
  };
};

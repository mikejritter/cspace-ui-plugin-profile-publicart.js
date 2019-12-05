export default (configContext) => {
  const {
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

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
    },
  };
};

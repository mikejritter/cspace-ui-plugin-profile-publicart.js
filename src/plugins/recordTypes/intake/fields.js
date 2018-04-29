export default (configContext) => {
  const {
    IDGeneratorInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:intakes_common': {
        currentLocationGroupList: {
          currentLocationGroup: {
            currentLocation: {
              [config]: {
                view: {
                  props: {
                    source: 'location/local,place/local',
                  },
                },
              },
            },
          },
        },
        normalLocation: {
          [config]: {
            view: {
              props: {
                source: 'location/local,place/local',
              },
            },
          },
        },
        conditionCheckReferenceNumber: {
          [config]: {
            view: {
              type: IDGeneratorInput,
              props: {
                source: 'conditioncheck',
              },
            },
          },
        },
      },
    },
  };
};

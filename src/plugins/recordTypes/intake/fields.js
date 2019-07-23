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
                    source: 'location/local,location/offsite,organization/local,organization/shared,place/local,place/shared',
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
                source: 'location/local,location/offsite,organization/local,organization/shared,place/local,place/shared',
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

export default (configContext) => {
  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:movements_common': {
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
  };
};

export default (configContext) => {
  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    addrGroupList: {
      addrGroup: {
        addressMunicipality: {
          [config]: {
            view: {
              props: {
                source: 'place/local,place/shared',
              },
            },
          },
        },
        addressStateOrProvince: {
          [config]: {
            view: {
              props: {
                source: 'place/local,place/shared',
              },
            },
          },
        },
        addressCountry: {
          [config]: {
            view: {
              props: {
                source: 'place/local,place/shared',
              },
            },
          },
        },
      },
    },
  };
};

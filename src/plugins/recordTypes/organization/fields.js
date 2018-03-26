export default (configContext) => {
  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    extensions,
  } = configContext.config;

  return {
    document: {
      'ns2:organizations_publicart': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/organization/local/publicart',
          },
        },
        ...extensions.socialMedia.fields,
      },
    },
  };
};

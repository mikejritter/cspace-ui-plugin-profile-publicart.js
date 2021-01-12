export default () => (configContext) => {
  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    invocables: {
      batch: {
        'org.collectionspace.services.batch.nuxeo.MergeAuthorityItemsBatchJob': {
          fields: {
            document: {
              target: {
                [config]: {
                  view: {
                    props: {
                      source: 'citation/local,citation/worldcat,concept/activity,concept/associated,concept/material,organization/local,organization/ulan,person/local,person/ulan,place/local,place/tgn,place/shared,location/local,location/offsite,work/local',
                    },
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

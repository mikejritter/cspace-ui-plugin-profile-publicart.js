import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    CompoundInput,
    TextInput,
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    socialMediaGroupList: {
      [config]: {
        view: {
          type: CompoundInput,
        },
      },
      socialMediaGroup: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.ext.socialMedia.socialMediaGroup.name',
              defaultMessage: 'Social media',
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
        socialMediaHandle: {
          [config]: {
            messages: defineMessages({
              fullName: {
                id: 'field.ext.socialMedia.socialMediaHandle.fullName',
                defaultMessage: 'Social media handle',
              },
              name: {
                id: 'field.ext.socialMedia.socialMediaHandle.name',
                defaultMessage: 'Handle',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        socialMediaHandleType: {
          [config]: {
            messages: defineMessages({
              fullName: {
                id: 'field.ext.socialMedia.socialMediaHandleType.fullName',
                defaultMessage: 'Social media type',
              },
              name: {
                id: 'field.ext.socialMedia.socialMediaHandleType.name',
                defaultMessage: 'Type',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'socialmediatype',
              },
            },
          },
        },
      },
    },
  };
};

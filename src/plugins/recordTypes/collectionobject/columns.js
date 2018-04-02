import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    formatRefName,
  } = configContext.formatHelpers;

  return {
    narrow: {
      objectNumber: {
        width: 200,
      },
      title: {
        width: 225,
      },
      computedCurrentLocation: {
        formatValue: formatRefName,
        messages: defineMessages({
          label: {
            id: 'column.collectionobject.narrow.computedCurrentLocation',
            defaultMessage: 'Location',
          },
        }),
        order: 25,
        sortBy: 'collectionobjects_common:computedCurrentLocation',
        width: 225,
      },
      updatedAt: {
        width: 150,
      },
    },
  };
};

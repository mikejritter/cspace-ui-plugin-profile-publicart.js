import { defineMessages } from 'react-intl';

export default {
  placementTypes: {
    values: [
      'animal shelter',
      'arts center',
      'government office',
      'greenway',
      'firehouse',
      'library',
      'memorial',
      'open space',
      'park',
      'school',
      'street',
      'zoo',
    ],
    messages: defineMessages({
      'animal shelter': {
        id: 'option.placementTypes.animal shelter',
        defaultMessage: 'animal shelter',
      },
      'arts center': {
        id: 'option.placementTypes.arts center',
        defaultMessage: 'arts center',
      },
      'government office': {
        id: 'option.placementTypes.government office',
        defaultMessage: 'government office',
      },
      greenway: {
        id: 'option.placementTypes.greenway',
        defaultMessage: 'greenway',
      },
      firehouse: {
        id: 'option.placementTypes.firehouse',
        defaultMessage: 'firehouse',
      },
      library: {
        id: 'option.placementTypes.library',
        defaultMessage: 'library',
      },
      memorial: {
        id: 'option.placementTypes.memorial',
        defaultMessage: 'memorial',
      },
      'open space': {
        id: 'option.placementTypes.open space',
        defaultMessage: 'open space',
      },
      park: {
        id: 'option.placementTypes.park',
        defaultMessage: 'park',
      },
      school: {
        id: 'option.placementTypes.school',
        defaultMessage: 'school',
      },
      street: {
        id: 'option.placementTypes.street',
        defaultMessage: 'street',
      },
      zoo: {
        id: 'option.placementTypes.zoo',
        defaultMessage: 'zoo',
      },
    }),
  },
  placementEnvironments: {
    values: [
      'indoor',
      'outdoor',
      'both',
    ],
    messages: defineMessages({
      indoor: {
        id: 'option.placementEnvironments.indoor',
        defaultMessage: 'indoor',
      },
      outdoor: {
        id: 'option.placementEnvironments.outdoor',
        defaultMessage: 'outdoor',
      },
      both: {
        id: 'option.placementEnvironments.both',
        defaultMessage: 'both',
      },
    }),
  },
  placeOwnerTypes: {
    values: [
      'private',
      'public',
    ],
    messages: defineMessages({
      private: {
        id: 'option.placeOwnerTypes.private',
        defaultMessage: 'private',
      },
      public: {
        id: 'option.placeOwnerTypes.public',
        defaultMessage: 'public',
      },
    }),
  },
};

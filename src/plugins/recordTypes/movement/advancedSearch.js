export default (configContext) => {
  const {
    OP_EQ,
    OP_CONTAIN,
    OP_RANGE,
  } = configContext.searchOperators;

  const {
    defaultAdvancedSearchBooleanOp,
    extensions,
  } = configContext.config;

  return {
    op: defaultAdvancedSearchBooleanOp,
    value: [
      {
        op: OP_CONTAIN,
        path: 'ns2:movements_common/movementReferenceNumber',
      },
      {
        op: OP_EQ,
        path: 'ns2:movements_common/currentLocation',
      },
      {
        op: OP_RANGE,
        path: 'ns2:movements_common/locationDate',
      },
      {
        op: OP_EQ,
        path: 'ns2:movements_common/reasonForMove',
      },
      {
        op: OP_EQ,
        path: 'ns2:movements_common/movementMethods/movementMethod',
      },
      {
        op: OP_RANGE,
        path: 'ns2:movements_common/plannedRemovalDate',
      },
      {
        op: OP_RANGE,
        path: 'ns2:movements_common/removalDate',
      },
      {
        op: OP_EQ,
        path: 'ns2:movements_common/movementContact',
      },
      ...extensions.core.advancedSearch,
    ],
  };
};

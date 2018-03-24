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
        path: 'ns2:acquisitions_common/acquisitionReferenceNumber',
      },
      {
        op: OP_RANGE,
        path: 'ns2:acquisitions_publicart/accessionDate',
      },
      {
        op: OP_RANGE,
        path: 'ns2:acquisitions_publicart/acquisitionDates/acquisitionDate',
      },
      {
        op: OP_EQ,
        path: 'ns2:acquisitions_common/acquisitionMethod',
      },
      {
        op: OP_EQ,
        path: 'ns2:acquisitions_common/acquisitionSources/acquisitionSource',
      },
      {
        op: OP_EQ,
        path: 'ns2:acquisitions_common/acquisitionFundingList/acquisitionFunding/acquisitionFundingSource',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:acquisitions_common/creditLine',
      },
      ...extensions.commission.advancedSearch,
      ...extensions.core.advancedSearch,
    ],
  };
};

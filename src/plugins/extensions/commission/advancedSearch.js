export default (configContext) => {
  const {
    OP_EQ,
    OP_RANGE,
  } = configContext.searchOperators;

  return [
    {
      op: OP_EQ,
      path: 'ns2:acquisitions_commission/commissioningBodyList/commissioningBody',
    },
    {
      op: OP_RANGE,
      path: 'ns2:acquisitions_commission/commissionDate',
    },
  ];
};

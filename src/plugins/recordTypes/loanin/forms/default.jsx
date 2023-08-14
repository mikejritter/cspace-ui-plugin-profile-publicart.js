const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Panel,
    Row,
  } = configContext.layoutComponents;

  const {
    Field,
  } = configContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="info" collapsible>
        <Row>
          <Field name="loanInNumber" />
          <Field name="loanPurpose" />
        </Row>

        <Field name="loanStatusGroupList">
          <Field name="loanStatusGroup">
            <Field name="loanGroup" />
            <Field name="loanIndividual" />
            <Field name="loanStatus" />
            <Field name="loanStatusDate" />
            <Field name="loanStatusNote" />
          </Field>
        </Field>

        <Field name="lenderGroupList">
          <Field name="lenderGroup">
            <Field name="lender" />
            <Field name="lendersContact" />
            <Field name="lendersAuthorizationDate" />
          </Field>
        </Field>

        <Row>
          <Field name="loanInConditions" />
          <Field name="loanInNote" />
        </Row>

        <Row>
          <Field name="loanInDate" />
          <Field name="loanReturnDate" />
        </Row>

        <Field name="creditLine" />
      </Panel>
    </Field>
  );
};

export default (configContext) => ({
  template: template(configContext),
});

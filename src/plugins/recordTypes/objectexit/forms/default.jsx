const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Panel,
    Row,
    Cols,
    Col,
  } = configContext.layoutComponents;

  const {
    Field,
    InputTable,
  } = configContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="info" collapsible>
        <Cols>
          <Col>
            <Field name="exitNumber" />
            <Field name="exitDateGroup" />
            <Field name="exitReason" />
          </Col>

          <Col>
            <Field name="exitMethods">
              <Field name="exitMethod" />
            </Field>

            <Field name="currentOwner" />
            <Field name="depositor" />
          </Col>
        </Cols>

        <Field name="exitNote" />
        <Field name="packingNote" />
      </Panel>

      <Panel name="deaccessionDisposalInfo" collapsible collapsed>
        <Row>
          <Field name="displosalNewObjectNumber" />
          <Field name="deaccessionAuthorizer" />
          <Field name="authorizationDate" />
        </Row>

        <Field name="deacApprovalGroupList">
          <Field name="deacApprovalGroup">
            <Panel>
              <Row>
                <Field name="deaccessionApprovalGroup" />
                <Field name="deaccessionApprovalIndividual" />
                <Field name="deaccessionApprovalStatus" />
                <Field name="deaccessionApprovalDate" />
              </Row>
              <Field name="deaccessionApprovalNote" />
            </Panel>
          </Field>
        </Field>

        <Cols>
          <Col>
            <Field name="deaccessionDate" />
            <Field name="disposalDate" />
            <Field name="disposalMethod" />
            <Field name="displosalReason" />
          </Col>

          <Col>
            <Field name="disposalProposedRecipient" />
            <Field name="disposalRecipient" />

            <InputTable name="groupDisposal">
              <Field name="groupDisposalCurrency" />
              <Field name="groupDisplosalValue" />
            </InputTable>
          </Col>
        </Cols>

        <Field name="displosalProvisos" />
        <Field name="displosalNote" />
      </Panel>
    </Field>
  );
};

export default (configContext) => ({
  template: template(configContext),
});

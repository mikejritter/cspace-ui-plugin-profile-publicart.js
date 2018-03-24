export default (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Col,
    Cols,
    Panel,
    Row,
  } = configContext.layoutComponents;

  const {
    Field,
    InputTable,
  } = configContext.recordComponents;

  return (
    <Panel name="commission" collapsible collapsed>
      <Row>
        <Field name="commissioningBodyList" subpath="ns2:acquisitions_commission">
          <Field name="commissioningBody" />
        </Field>

        <Field name="commissionDate" subpath="ns2:acquisitions_commission" />
      </Row>

      <Field name="commissionBudgetGroupList" subpath="ns2:acquisitions_commission">
        <Field name="commissionBudgetGroup">
          <Panel>
            <Cols>
              <Col>
                <Field name="commissionBudgetType" />
                <Field name="commissionBudgetTypeNote" />
              </Col>

              <Col>
                <InputTable name="projectedValue">
                  <Field name="commissionProjectedValueCurrency" />
                  <Field name="commissionProjectedValueAmount" />
                </InputTable>

                <InputTable name="actualValue">
                  <Field name="commissionActualValueCurrency" />
                  <Field name="commissionActualValueAmount" />
                </InputTable>
              </Col>
            </Cols>
          </Panel>
        </Field>
      </Field>
    </Panel>
  );
};

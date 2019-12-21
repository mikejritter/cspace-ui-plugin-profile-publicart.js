const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Col,
    Cols,
    Panel,
  } = configContext.layoutComponents;

  const {
    Field,
  } = configContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="info" collapsible>
        <Cols>
          <Col>
            <Field name="valuationcontrolRefNumber" />

            <Field name="valueAmountsList">
              <Field name="valueAmounts">
                <Field name="valueCurrency" />
                <Field name="valueAmount" />
              </Field>
            </Field>

            <Field name="valueDate" />
            <Field name="valueRenewalDate" />
          </Col>

          <Col>
            <Field name="valueSource" />
            <Field name="valueSourceRole" subpath="ns2:valuationcontrols_publicart" />
            <Field name="valueType" />
            <Field name="valueNote" />
          </Col>
        </Cols>
      </Panel>

      <Panel name="insurance" collapsible collapsed>
        <Field name="insuranceGroupList" subpath="ns2:valuationcontrols_publicart">
          <Field name="insuranceGroup">
            <Field name="insurer" />
            <Field name="insuranceNote" />
            <Field name="insurancePolicyNumber" />
            <Field name="insuranceRenewalDate" />
          </Field>
        </Field>
      </Panel>
    </Field>
  );
};

export default (configContext) => ({
  template: template(configContext),
});

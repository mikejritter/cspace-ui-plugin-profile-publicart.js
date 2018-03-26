const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    CompoundInput,
  } = configContext.inputComponents;

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

  const {
    extensions,
  } = configContext.config;

  return (
    <Field name="document">
      <Panel name="info" collapsible>
        <Field name="locTermGroupList">
          <Field name="locTermGroup">
            <Panel>
              <Row>
                <Field name="termDisplayName" />
                <Field name="termName" />
                <Field name="termQualifier" />
                <Field name="termStatus" />
              </Row>

              <Row>
                <Field name="termType" />
                <Field name="termFlag" />
                <Field name="termLanguage" />
                <Field name="termPrefForLang" />
              </Row>

              <InputTable name="termSource">
                <Field name="termSource" />
                <Field name="termSourceDetail" />
                <Field name="termSourceID" />
                <Field name="termSourceNote" />
              </InputTable>
            </Panel>
          </Field>
        </Field>

        <Cols>
          <Col>
            <Field name="locationType" />
            <Field name="securityNote" />
          </Col>
          <Col>
            <Field name="accessNote" />
          </Col>
        </Cols>

        <Field name="conditionGroupList">
          <Field name="conditionGroup">
            <Field name="conditionNote" />
            <Field name="conditionNoteDate" />
          </Field>
        </Field>

        <CompoundInput subpath="ns2:locations_publicart">
          {extensions.address.form}
        </CompoundInput>
      </Panel>

      <Panel name="georef" collapsible collapsed>
        <Cols>
          <Col>
            <Row>
              <Field name="decimalLatitude" subpath="ns2:locations_publicart" />
              <Field name="decimalLongitude" subpath="ns2:locations_publicart" />
            </Row>
          </Col>

          <Col />
        </Cols>
      </Panel>

      <Panel name="hierarchy" collapsible collapsed>
        <Field name="relation-list-item" subpath="rel:relations-common-list" />
      </Panel>
    </Field>
  );
};

export default configContext => ({
  template: template(configContext),
});

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
    Subrecord,
  } = configContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="info" collapsible>
        <Field name="orgTermGroupList">
          <Field name="orgTermGroup">
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

              <InputTable name="nameDetail">
                <Field name="mainBodyName" />
                <Field name="additionsToName" />
              </InputTable>

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
            <Field name="organizationRecordTypes">
              <Field name="organizationRecordType" />
            </Field>

            <Field name="foundingDateGroup" />
            <Field name="foundingPlace" />
            <Field name="dissolutionDateGroup" />
          </Col>

          <Col>
            <Field name="historyNotes">
              <Field name="historyNote" />
            </Field>

            <Field name="socialMediaGroupList" subpath="ns2:organizations_publicart">
              <Field name="socialMediaGroup">
                <Field name="socialMediaHandle" />
                <Field name="socialMediaHandleType" />
              </Field>
            </Field>
          </Col>
        </Cols>
      </Panel>

      <Subrecord name="contact" />

      <Panel name="hierarchy" collapsible collapsed>
        <Field name="relation-list-item" subpath="rel:relations-common-list" />
      </Panel>
    </Field>
  );
};

export default configContext => ({
  template: template(configContext),
});

const template = (configContext) => {
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
    Subrecord,
  } = configContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="media" collapsible>
        <Row>
          <Field name="identificationNumber" />
          <Field name="title" />
        </Row>

        <Panel name="file" collapsible>
          <Subrecord name="blob" showDetachButton />
        </Panel>

        <Field name="externalUrl" />

        <Field name="checksumGroupList">
          <Field name="checksumGroup">
            <Field name="checksumValue" />
            <Field name="checksumType" />
            <Field name="checksumDate" />
          </Field>
        </Field>

        <Cols>
          <Col>
            <Field name="contributor" />
            <Field name="creator" />
            <Field name="copyrightStatement" />

            <Field name="typeList">
              <Field name="type" />
            </Field>

            <Field name="publishToList" subpath="ns2:media_publicart">
              <Field name="publishTo" />
            </Field>
          </Col>

          <Col>
            <Field name="dateGroupList">
              <Field name="dateGroup" />
            </Field>

            <Field name="source" />

            <Field name="publicartRightsHolders" subpath="ns2:media_publicart">
              <Field name="publicartRightsHolder" />
            </Field>
          </Col>
        </Cols>

        <Field name="description" />
        <Field name="altText" />
      </Panel>
    </Field>
  );
};

export default (configContext) => ({
  template: template(configContext),
});

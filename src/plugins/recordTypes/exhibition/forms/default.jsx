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
  } = configContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="info" collapsible>
        <Cols>
          <Col>
            <Field name="exhibitionNumber" />
            <Field name="type" />
            <Field name="title" />
          </Col>

          <Col>
            <Field name="exhibitionSupportGroupList" subpath="ns2:exhibitions_publicart">
              <Field name="exhibitionSupportGroup">
                <Field name="exhibitionSupport" />
                <Field name="exhibitionSupportNote" />
              </Field>
            </Field>

            <Field name="organizers">
              <Field name="organizer" />
            </Field>
          </Col>
        </Cols>

        <Row>
          <Field name="venueGroupList">
            <Field name="venueGroup">
              <Field name="venue" />
              <Field name="venueOpeningDate" />
              <Field name="venueClosingDate" />
              <Field name="venueAttendance" />
              <Field name="venueUrl" />
            </Field>
          </Field>
        </Row>

        <Cols>
          <Col>
            <Field name="planningNote" />
            <Field name="curatorialNote" />
          </Col>

          <Col>
            <Field name="generalNote" />
            <Field name="boilerplateText" />
          </Col>
        </Cols>

        <Field name="galleryRotationGroupList">
          <Field name="galleryRotationGroup">
            <Field name="galleryRotationName" />
            <Field name="galleryRotationStartDateGroup" />
            <Field name="galleryRotationEndDateGroup" />
            <Field name="galleryRotationNote" />
          </Field>
        </Field>
      </Panel>
    </Field>
  );
};

export default configContext => ({
  template: template(configContext),
});

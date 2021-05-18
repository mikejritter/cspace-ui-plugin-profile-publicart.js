export default (configContext) => {
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
    <Panel name="checklist" collapsible collapsed>
      <Field name="checklistGroupList" subpath="ns2:groups_checklist">
        <Field name="checklistGroup">
          <Panel>
            <Row>
              <Field name="checklistType" />
              <Field name="checklistOpenDate" />
              <Field name="checklistCloseDate" />
            </Row>

            <Field name="checklistNote" />

            <Field name="checklistItemGroupList">
              <Field name="checklistItemGroup">
                <Field name="checklistItem" />
                <Field name="checklistAssignee" />
                <Field name="checklistStatus" />
                <Field name="checklistStatusDate" />
              </Field>
            </Field>
          </Panel>
        </Field>
      </Field>
    </Panel>
  );
};

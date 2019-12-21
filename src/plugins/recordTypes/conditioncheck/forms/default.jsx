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
      <Panel name="conditionCheckAndTechAssessmentInfo" collapsible>
        <Cols>
          <Col>
            <Field name="conditionCheckRefNumber" />
            <Field name="conditionCheckAssessmentDate" />
            <Field name="conditionCheckMethod" />
          </Col>

          <Col>
            <Field name="conditionCheckReason" />
            <Field name="conditionChecker" />
          </Col>
        </Cols>

        <Field name="conditionCheckNote" />
      </Panel>

      <Panel name="objectConditionAndTechAssessmentInfo" collapsible collapsed>
        <Row>
          <Field name="objectAuditCategory" />
          <Field name="conservationTreatmentPriority" />
          <Field name="nextConditionCheckDate" />
        </Row>

        <Field name="completenessGroupList">
          <Field name="completenessGroup">
            <Field name="completeness" />
            <Field name="completenessDate" />
            <Field name="completenessNote" />
          </Field>
        </Field>

        <Field name="techAssessmentGroupList">
          <Field name="techAssessmentGroup">
            <Field name="techAssessment" />
            <Field name="techAssessmentDate" />
          </Field>
        </Field>

        <Field name="conditionCheckGroupList">
          <Field name="conditionCheckGroup">
            <Field name="condition" />
            <Field name="conditionDate" />
            <Field name="conditionNote" />
          </Field>
        </Field>

        <Field name="envConditionNoteGroupList">
          <Field name="envConditionNoteGroup">
            <Field name="envConditionNote" />
            <Field name="envConditionNoteDate" />
          </Field>
        </Field>
      </Panel>

      <Panel name="objectRequirementInfo" collapsible collapsed>
        <Cols>
          <Col>
            <Field name="displayRecommendations" />
            <Field name="handlingRecommendations" />
            <Field name="installationRecommendations" subpath="ns2:conditionchecks_publicart" />
          </Col>

          <Col>
            <Field name="envRecommendations" />
            <Field name="specialRequirements" />
            <Field name="legalRequirements" />
          </Col>
        </Cols>

        <Field name="legalReqsHeldGroupList">
          <Field name="legalReqsHeldGroup">
            <Field name="legalReqsHeld" />
            <Field name="legalReqsHeldBeginDate" />
            <Field name="legalReqsHeldEndDate" />
            <Field name="legalReqsHeldRenewDate" />
          </Field>
        </Field>
      </Panel>
    </Field>
  );
};

export default (configContext) => ({
  template: template(configContext),
});

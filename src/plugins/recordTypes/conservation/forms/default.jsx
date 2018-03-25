const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Cols,
    Col,
    Panel,
    Row,
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
            <Field name="conservationNumber" />

            <Field name="conservationStatusGroupList">
              <Field name="conservationStatusGroup">
                <Field name="status" />
                <Field name="statusDate" />
              </Field>
            </Field>

            <Field name="conservationPriorityLevel" subpath="ns2:conservation_publicart" />
          </Col>

          <Col>
            <Field name="treatmentPurpose" />

            <Field name="conservators">
              <Field name="conservator" />
            </Field>

            <Field name="otherPartyGroupList">
              <Field name="otherPartyGroup">
                <Field name="otherParty" />
                <Field name="otherPartyRole" />
                <Field name="otherPartyNote" />
              </Field>
            </Field>
          </Col>
        </Cols>

        <Field name="examinationGroupList">
          <Field name="examinationGroup">
            <Panel>
              <Row>
                <Field name="examinationStaff" />
                <Field name="examinationPhase" />
                <Field name="examinationDate" />
              </Row>

              <Field name="examinationNote" />
            </Panel>
          </Field>
        </Field>

        <Field name="fabricationNote" />
        <Field name="proposedTreatment" />

        <Cols>
          <Col>
            <Row>
              <Field name="proposedTreatmentStartDate" subpath="ns2:conservation_publicart" />
              <Field name="proposedTreatmentEndDate" subpath="ns2:conservation_publicart" />
            </Row>
          </Col>

          <Col>
            <InputTable name="proposedTreatmentEst">
              <Field name="proposedTreatmentEstCurrency" subpath="ns2:conservation_publicart" />
              <Field name="proposedTreatmentEstValue" subpath="ns2:conservation_publicart" />
            </InputTable>
          </Col>
        </Cols>

        <Field name="proposedTreatmentContractRestrictions" subpath="ns2:conservation_publicart" />

        <Row>
          <Field name="approvedBy" />
          <Field name="approvedDate" />
        </Row>

        <Field name="treatmentSummary" />

        <Cols>
          <Col>
            <Row>
              <Field name="treatmentStartDate" />
              <Field name="treatmentEndDate" />
            </Row>
          </Col>

          <Col>
            <InputTable name="treatmentCost">
              <Field name="treatmentCostCurrency" subpath="ns2:conservation_publicart" />
              <Field name="treatmentCostValue" subpath="ns2:conservation_publicart" />
            </InputTable>
          </Col>
        </Cols>
      </Panel>

      <Panel name="objectAnalysisInfo" collapsible collapsed>
        <Field name="proposedAnalysis" />

        <Row>
          <Field name="researcher" />
          <Field name="proposedAnalysisDate" />
        </Row>

        <Field name="analysisMethod" />
        <Field name="analysisResults" />
        <Field name="analysisRecommendations" subpath="ns2:conservation_publicart" />
      </Panel>
    </Field>
  );
};

export default configContext => ({
  template: template(configContext),
});

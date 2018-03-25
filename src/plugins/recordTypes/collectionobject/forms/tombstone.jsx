import { defineMessages } from 'react-intl';

const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Col,
    Panel,
    Row,
  } = configContext.layoutComponents;

  const {
    Field,
  } = configContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="id" collapsible>
        <Row>
          <Col>
            <Field name="objectNumber" />

            <Field name="responsibleDepartments">
              <Field name="responsibleDepartment" />
            </Field>
          </Col>

          <Col>
            <Field name="briefDescriptions">
              <Field name="briefDescription" />
            </Field>
          </Col>
        </Row>

        <Field name="titleGroupList">
          <Field name="titleGroup">
            <Field name="title" embedded label="" />
          </Field>
        </Field>

        <Row>
          <Field name="objectNameList">
            <Field name="objectNameGroup" tabular={false}>
              <Field name="objectName" embedded label="" />
            </Field>
          </Field>

          <Col />
        </Row>
      </Panel>

      <Panel name="desc" collapsible collapsed>
        <Row>
          <Field name="materialGroupList">
            <Field name="materialGroup" tabular={false}>
              <Field name="material" embedded label="" />
            </Field>
          </Field>

          <Col />
        </Row>
      </Panel>

      <Panel name="prod" collapsible collapsed>
        <Row>
          <Col>
            <Field
              name="publicartProductionDateGroupList"
              subpath="ns2:collectionobjects_publicart"
            >
              <Field name="publicartProductionDateGroup" tabular={false} >
                <Field name="publicartProductionDate" embedded label="" />
              </Field>
            </Field>
          </Col>

          <Col>
            <Field
              name="publicartProductionPersonGroupList"
              subpath="ns2:collectionobjects_publicart"
            >
              <Field name="publicartProductionPersonGroup" tabular={false} >
                <Field name="publicartProductionPerson" embedded label="" />
              </Field>
            </Field>
          </Col>
        </Row>
      </Panel>

      <Panel name="hist" collapsible collapsed>
        <Row>
          <Field name="owners">
            <Field name="owner" />
          </Field>

          <Col />
        </Row>
      </Panel>
    </Field>
  );
};

export default configContext => ({
  messages: defineMessages({
    name: {
      id: 'form.collectionobject.tombstone.name',
      defaultMessage: 'Tombstone Template',
    },
  }),
  template: template(configContext),
});

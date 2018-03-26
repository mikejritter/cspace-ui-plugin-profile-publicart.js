export default (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Field,
  } = configContext.recordComponents;

  return (
    <Field name="socialMediaGroupList">
      <Field name="socialMediaGroup">
        <Field name="socialMediaHandle" />
        <Field name="socialMediaHandleType" />
      </Field>
    </Field>
  );
};

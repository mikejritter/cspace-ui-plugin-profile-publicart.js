export default (configContext) => {
  const {
    lib,
    recordComponents,
  } = configContext;

  const {
    React,
  } = lib;

  const {
    Field,
  } = recordComponents;

  return (
    <Field name="socialMediaGroupList">
      <Field name="socialMediaGroup">
        <Field name="socialMediaHandle" />
        <Field name="socialMediaHandleType" />
      </Field>
    </Field>
  );
};

export const camelCaseToUserFacingName = (varName: string) => {
  const label = varName.split(/(?=[A-Z])/);
  label[0] = label[0].charAt(0).toUpperCase() + label[0].slice(1);
  return label.join(" ");
};

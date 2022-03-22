export const formErrors = (error) => {
  return error?.message ? error.message : "The field is required";
};

import { notifyError } from "./toastMethods";

// Use this validation if all fields in the form are required
export const formContainsEmptyValues = (obj) => {
  const registerFormKeys = Object.keys(obj);
    
  const emptyValue = registerFormKeys.find((key) => obj[key] === '');

  if (emptyValue) {
    notifyError('Please fill out all required fields before submitting the form.', 'bottom-center', false);
    return true;
  }

  return false;
}
import { notifyError } from "../components/Toast/methods";
import { convertSnakeCaseToReadable } from "./methods";

export const objectContainsEmptyValues = (obj) => {
  const registerFormKeys = Object.keys(obj);
    
  const emptyValue = registerFormKeys.find((key) => obj[key] === '');

  if (emptyValue) {
    notifyError(`${convertSnakeCaseToReadable(emptyValue)} cannot be empty.`, 'bottom-center');
    return true;
  }

  return false;
}
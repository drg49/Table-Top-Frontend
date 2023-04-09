const root = process.env.REACT_APP_API_ROOT_URL;

const handleResponse = response => response.ok ? response.json() : Promise.reject(response);

// export const getAllUsers = async () => handleResponse(
//   await fetch(`${root}/authentication/get-all-users`, {
//     method: "GET",
//     headers: {
//       Accept: "application/json"
//     },
//   })
// );
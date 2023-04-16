const root = process.env.REACT_APP_API_ROOT_URL;

const handleResponse = response => response.ok ? response.json() : Promise.reject(response);

export const login = async (formData) => handleResponse(
  await fetch(`${root}/authentication/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    withCredentials: true,
    credentials: 'include',
    body: JSON.stringify(formData)
  })
);

export const register = async (formData) => handleResponse(
  await fetch(`${root}/authentication/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  })
);
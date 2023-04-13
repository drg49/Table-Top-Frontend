const root = process.env.REACT_APP_API_ROOT_URL;

const handleResponse = response => response.ok ? response.json() : Promise.reject(response);

export const login = async (formData) => handleResponse(
  await fetch(`${root}/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    withCredentials: true,
    credentials: 'include',
    body: JSON.stringify(formData)
  })
);
const checkResponse = (res) => {
  if (res.ok || res.created) {
    return res.json();
  }
  return res.json().then((err) => {
    return Promise.reject(err);
  });
};
const headersWithContentType = { "Content-Type": "application/json" };
const headersWithAuthorizeFn = () => ({
  "Content-Type": "application/json",
  authorization: `Bearer ${sessionStorage.getItem("auth_token")}`,
});

export const getOwnVids = (id) => {
  return fetch(`${URL}/user/${id}/videos`, {
    method: "GET",
    headers: headersWithAuthorizeFn(),
  }).then(checkResponse);
};

export const removeVid = (id) => {
  return fetch(`${URL}/wishes/${id}`, {
    method: "DELETE",
    headers: headersWithAuthorizeFn(),
  }).then(checkResponse);
};
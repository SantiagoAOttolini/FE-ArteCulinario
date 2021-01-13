const baseURL = "http://localhost:3000/";

const requestHandler = res => {
  return res.json();
};

const errorHandler = err => {
  console.error(err);
  throw err;
};

const fetchi = (url, params) => {
  url = baseURL + url;
  const f = params ? fetch(url, params) : fetch(url);
  return f.then(requestHandler).catch(errorHandler);
};

export const get = (url, token = "") => {
  const params = {
    method: "GET",
    headers: token ? { Authorization: token } : undefined
  };
  return fetchi(url, params);
};

export const post = (url, data, token = "") => {
  const params = {
    method: "POST",
    headers: token
      ? { "Content-Type": "application/json", Authorization: token }
      : { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  };
  return fetchi(url, params);
};

export const patch = (url, data, token = "") => {
  const params = {
    method: "PATCH",
    headers: token
      ? { "Content-Type": "application/json", Authorization: token }
      : { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  };
  return fetchi(url, params);
};

export const remove = (url, token = "") => {
  const params = {
    method: "DELETE",
    headers: token
      ? { "Content-Type": "application/json", Authorization: token }
      : { "Content-Type": "application/json" }
  };
  return fetchi(url, params);
};

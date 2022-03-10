import AuthService from "./AuthService";

const get = (url: string) => {
  console.log("Get url: ", url);
  return fetchRequest(url, { method: "GET" });
};

const del = (url: string) => {
  console.log("Patch url: ", url);
  return fetchRequest(url, { method: "DELETE" });
};

const post = (url: string, body: any) => {
  console.log("Post url: ", url);
  return fetchRequest(url, { method: "POST", body });
};

const patch = (url: string, body: any) => {
  console.log("Patch url: ", url);
  return fetchRequest(url, { method: "PATCH", body });
};

const fetchRequest = (
  url: string,
  properties: { method: "GET" | "POST" | "PATCH" | "DELETE"; body?: any }
) => {
  const requestUrl = process.env.REACT_APP_SERVER_URL + "/api/v1" + url;
  return fetch(requestUrl, {
    method: properties.method,
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Access-Control-Allow-Methods": "*",
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    body: properties.body ? JSON.stringify(properties.body) : null,
    redirect: "follow",
    referrerPolicy: "no-referrer",
  }).then((result) => {
    if (result.status === 200 || result.status === 201) {
      const json = result.json();
      return json;
    } else if (result.status === 401) {
      new AuthService().logout();
    } else if (result.status === 500) {
      result.json().then((response) => {
        if (
          response?.status === "error" &&
          response.error?.name === "TokenExpiredError"
        ) {
          new AuthService().logout();
        }
      });
    }
    return;
  });
};

export { get, post, patch, del };

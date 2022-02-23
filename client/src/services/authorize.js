export const authenticate = (response, next) => {
  if (window != undefined) {
    sessionStorage.setItem("token", JSON.stringify(response.data.token));
    sessionStorage.setItem("username", JSON.stringify(response.data.username));
  }
  next();
};

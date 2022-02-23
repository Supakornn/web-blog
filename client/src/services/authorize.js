export const authenticate = (response, next) => {
  if (window != "undefined") {
    sessionStorage.setItem("token", JSON.stringify(response.data.token));
    sessionStorage.setItem("username", JSON.stringify(response.data.username));
  }
  next();
};

export const getToken = () => {
  if (window != "undefined") {
    if (sessionStorage.getItem("token")) {
      return JSON.parse(sessionStorage.getItem("token"));
    } else {
      return false;
    }
  }
};

export const getUsername = () => {
  if (window != "undefined") {
    if (sessionStorage.getItem("username")) {
      return JSON.parse(sessionStorage.getItem("username"));
    } else {
      return false;
    }
  }
};

export const logout = (next) => {
  if (window != "undefined") {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("username");
  }
  next();
};

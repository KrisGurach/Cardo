class Authorization {
    constructor({ baseUrl }) {
      this._baseUrl = baseUrl;
    }
  
    _request(endPoint, options) {
      return fetch(this._baseUrl + endPoint, options).then(this._getResponseData);
    }
  
    _getResponseData = (res) => {
      return res.ok ? res.json() : Promise.reject(res.status);
    };
  
    signUp = (values) => {
      return this._request("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
      });
    };
  
    signIn = (email, password) => {
      return this._request("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: password,
          email: email,
        }),
      }).then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          return data;
        }
      });
    };
  
    checkToken = (token) => {
      return this._request("/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
    };
  }
  
  const config = {
    baseUrl: "http://51.250.32.130:8080",
  };
  
  const auth = new Authorization(config);
  
  export default auth;
  
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
    baseUrl: "https://1a0188d5-333c-4d55-ac99-7fa84dab4afe.mock.pstmn.io",
  };
  
  const auth = new Authorization(config);
  
  export default auth;
  
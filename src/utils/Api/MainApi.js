class MainApi {
    constructor({ baseUrl }) {
      this._baseUrl = baseUrl;
    }
  
    _request(endPoint, options) {
      return fetch(this._baseUrl + endPoint, options).then(this._getResponseData);
    }
  
    _getResponseData = (res) => {
      return res.ok ? res.json() : Promise.reject(res.status);
    };
  
    _getToken = () => `Bearer ${localStorage.getItem("token")}`;

    

}

const config = {
    baseUrl: "https://localhost:8080",
  };
  
  const mainApi = new MainApi(config);
  
  export default mainApi;
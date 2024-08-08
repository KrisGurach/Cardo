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

    uploadVideo = ({ id, file, title }) => {
      return this._request(`/user/${id}/upload`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: this._getToken(),
        },
        body: JSON.stringify({
          file: file,
          title: title,
        }),
      });
    };

    getUser = (id) => {
      return this._request(`/user/${id}`, {
        method: "GET",
        headers: {
          authorization: this._getToken(),
        },
      });
    };

    updateUser = ({ id, firstname, name, middlname, gender, birthday, country, state, city, phone, email, portfolioURL, socialMediaURl}) => {
      return this._request(`/user/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: this._getToken(),
        },
        body: JSON.stringify({
          firstname: firstname,
          name: name,
          middlname: middlname,
          gender: gender,
          birthday: birthday,
          country: country,
          state: state,
          city: city,
          phone: phone,
          email: email, 
          portfolioURL: portfolioURL,
          socialMediaURl: socialMediaURl,
        }),
      });
    };

    getVideo = ({userId, videoId}) => {
      return this._request(`/user/${userId}/videos/${videoId}`, {
        method: "GET",
        headers: {
          authorization: this._getToken(),
        },
      });
    };

    getAllVideos = (id) => {
      return this._request(`/user/${id}/videos`, {
        method: "GET",
        headers: {
          authorization: this._getToken(),
        },
      });
    };
}

const config = {
    baseUrl: "https://localhost:8080",
  };
  
  const mainApi = new MainApi(config);
  
  export default mainApi;
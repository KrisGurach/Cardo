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

    uploadVideo = ({ formDataFile, title }) => {
      return this._request(`/user/upload`, {
        method: "POST",
        headers: {
          // "Content-Type": "multipart/form-data",
          authorization: this._getToken(),
        },
        body: formDataFile,
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

    getAllVideos = () => {
      return this._request(`/user/videos`, {
        method: "GET",
        headers: {
          authorization: this._getToken(),
        },
      });
    };
}

const config = {
  baseUrl: "http://51.250.32.130:8080",
};
  
  const mainApi = new MainApi(config);
  
  export default mainApi;
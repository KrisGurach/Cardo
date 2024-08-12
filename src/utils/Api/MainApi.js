class MainApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _request(endPoint, options) {
    return fetch(this._baseUrl + endPoint, options).then(this._getResponseData);
  }

  _getResponseData = (res) => {
    if (!res.ok) {
      return Promise.reject(res.status);
    }

    return res.text().then((text) => {
      let result;

      if (text) {
        result = JSON.parse(text);
      }
      
      return Promise.resolve(result);
    });
  };

  _getToken = () => `Bearer ${localStorage.getItem("token")}`;

  uploadVideo = (formDataFile) => {
    return this._request(`/user/upload`, {
      method: "POST",
      headers: {
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

  updateUser = ({
    firstName,
    lastName,
    middleName,
    gender,
    birthday,
    country,
    state,
    city,
  }) => {
    return this._request(`/user`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: this._getToken(),
      },
      body: JSON.stringify({
        firstName: firstName,
        surname: lastName,
        patronimic: middleName,
        gender: gender,
        birthday: birthday,
        country: country,
        state: state,
        city: city,
      }),
    });
  };

  getVideo = ({ userId, videoId }) => {
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

  getAllEvents = () => {
    return this._request("/public/events/all", {
      method: "GET",
    });
  };

  sendApplication = (eventId) => {
    return this._request(`/requests/event/${eventId}`, {
      method: "POST",
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
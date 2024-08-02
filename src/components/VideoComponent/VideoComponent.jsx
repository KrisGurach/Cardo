export default function VideoComponent() {
  const videos = [];

  return (
    <div className="video-container">
      {videos.length > 0 ? (
        videos.map((video, index) => (
          <div key={index} className="form__field form__field-checkbox">
            <label className="form__checkbox">
              <input
                type="checkbox"
                // checked={noMiddleName}
                // onChange={() => setNoMiddleName(!noMiddleName)}
              />
              <span className="form__checkmark"></span>
            </label>
            <div>
              <video src={video.url} controls />
            </div>
            <div className="form__title">
              <p className="form__title-video">{video.title}</p>
            </div>
          </div>
        ))
      ) : (
        <p>Нет загруженных видео</p>
      )}
    </div>
  );
}

export default function UploadVideo({
  title,
  setTitle,
  handleSubmit,
  handleFileChange,
  selectedFile,
}) {

  return (
    <div className="video-upload">
      <div className="video-upload__title-container">  
        <button className="direction__back-button video__back-button" onClick={() => window.history.back()}></button>
        <h3 className="video__subtitle">Добавление видео</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          id="video-upload"
          type="file"
          accept="video/*"
          onChange={handleFileChange}
          className="form__file-input"
        />

        <div>
          {selectedFile ? (
            <video
              src={selectedFile}
              controls
              style={{ width: "382px", height: "204px", borderRadius: "8px" }}
            />
          ) : (
            <div className="video-preview">
              <p>Загрузите видео</p>
            </div>
          )}
        </div>

        <div className="form__field">
          <input
            className="form__input video__input"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <button
          className="form__button form__button-app"
          disabled={!selectedFile || !title}
        >
          Добавить видео
        </button>
      </form>
    </div>
  );
}

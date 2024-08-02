export default function UploadVideo({
  title,
  setTitle,
  handleSubmit,
  handleFileChange,
  selectedFile,
}) {

  return (
    <div className="video-upload">
      <h3 className="form__subtitle">Добавление видео</h3>
      <form onSubmit={handleSubmit}>
        <input
          id="video-upload"
          type="file"
          accept="video/*"
          onChange={handleFileChange}
          className="form__file-input"
        />

        <div
          className="video-preview"
          style={{
            width: "382px",
            height: "204px",
            border: "1px solid #ccc",
            position: "relative",
          }}
        >
          {selectedFile ? (
            <video
              src={selectedFile}
              controls
              style={{ width: "100%", height: "100%" }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#f0f0f0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p>Загрузите видео</p>
            </div>
          )}
        </div>

        <div className="form__field">
          <input
            className="form__input"
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

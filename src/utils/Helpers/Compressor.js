import JSZip from "jszip";

class Compressor {
  constructor() {
    this.zip = new JSZip();
  }

  compress = async (file, title) => {
    this.zip.file(title, file);

    const zipped = await this.zip.generateAsync({ type: "blob" });
    return zipped;
  };

  decompress = async (file) => {
    try {
      const contents = await this.zip.loadAsync(file);
      
      if (contents.length > 0) {
        const videoFile = await contents.files[0].async("blob"); // Получаем первый видео файл
        return URL.createObjectURL(videoFile); // Устанавливаем URL для видео
      }

      throw new Error("В ZIP-архиве нет видеофайлов.");
    } catch (error) {
      console.error("Ошибка при разархивировании:", error);
    }
  };
}

const compressor = new Compressor();
export default compressor;

import JSZip from "jszip";

class Compressor {
  compressVideo = async (file, title) => {
    const zip = new JSZip();
    zip.file(title, file);

    const zipped = await zip.generateAsync({ type: 'blob' });
    return zipped;
  }
}

const compressor = new Compressor();
export default compressor;

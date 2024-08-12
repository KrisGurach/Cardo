"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_2 = __importDefault(require("react"));
const style_module_css_1 = __importDefault(require("./style.module.css"));
const menu_page_1 = __importDefault(require("../../components/menu-page/menu-page"));
const routes_1 = require("../../constants/routes");
const form_1 = __importDefault(require("../../components/form/form"));
const AddVideoPage = ({ data, handleFileChange, selectedFile, handleSubmit }) => {
    const [loading, setLoading] = (0, react_1.useState)(false);
    const [showPopup, setShowPopup] = (0, react_1.useState)(false);
    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        // Здесь handleSubmit для загрузки
        try {
            const error = await handleSubmit(e);
            if (error) {
                throw new Error(error);
            }
            setShowPopup(true);
        }
        catch (error) {
            console.error(error);
        }
        finally {
            setLoading(false);
        }
    };
    return (<menu_page_1.default title="Добавление видео" link={routes_1.videosRoute}>
      <>
      <input id="video-upload" type="file" accept="video/*" onChange={handleFileChange} className={style_module_css_1.default.videoUploadInput}/>
        <label htmlFor="video-upload" className={style_module_css_1.default.customFileInput}>
          <p className={style_module_css_1.default.text}>Выбрать видео</p>
        </label>
        <div className={style_module_css_1.default.videoUploadContainer}>
          {selectedFile ? (<div className={style_module_css_1.default.videoWrapper}>
              <video src={selectedFile} controls className={style_module_css_1.default.video}/>
            </div>) : (<div className={style_module_css_1.default.videoPreview}>
              {/* <p className="video-preview__text">Загрузи свое крутое видео</p> */}
            </div>)}
        </div>
        <form_1.default data={data}/>
        <button className={style_module_css_1.default.addVideoButton} onSubmit={onSubmit}>Добавить видео</button>
      </>
    </menu_page_1.default>);
};
exports.default = AddVideoPage;

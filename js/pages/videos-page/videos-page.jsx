"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_2 = __importDefault(require("react"));
const style_module_css_1 = __importDefault(require("./style.module.css"));
const menu_page_1 = __importDefault(require("../../components/menu-page/menu-page"));
const video_1 = __importDefault(require("../../components/video/video"));
const api_js_1 = __importDefault(require("../../utils/api.js"));
const routes_1 = require("../../constants/routes");
const VideosPage = () => {
    const [currentVidsId, setCurrentVidsId] = (0, react_1.useState)([]);
    const [data, setOwnVids] = (0, react_1.useState)([
        {
            id: 1,
            title: "Видео1",
            videoPath: 'string',
        },
        {
            id: 2,
            title: "Видео2",
            videoPath: 'string',
        },
        {
            id: 3,
            title: "Видео3",
            videoPath: 'string',
        },
    ]);
    const onSelectClick = (e) => {
        const vid = e.target.tagName === "BUTTON" ? e.target.closest('div') : e.target.closest("div");
        if (currentVidsId.indexOf(+vid.id) !== -1) {
            const arr = [...currentVidsId];
            arr.splice(currentVidsId.indexOf(+vid.id), 1);
            setCurrentVidsId(arr);
        }
        else {
            setCurrentVidsId([...currentVidsId, +vid.id]);
        }
        console.log(currentVidsId);
    };
    //Загружаем видео с сервера
    const getAllVids = () => {
        api_js_1.default.getAllVideos().then((res) => {
            setOwnVids(res);
        });
    };
    const handleRemoveVids = () => {
        Promise.all(currentVidsId.map((id) => api_js_1.default.removeVid(id).catch())).then(() => {
            api_js_1.default.getAllVideos().then((res) => {
                setCurrentVidsId([]);
                setOwnVids(res);
            });
        });
    };
    (0, react_1.useEffect)(() => {
        getAllVids();
    }, [data, currentVidsId]);
    return (<menu_page_1.default title="Мои видео">
      <>
        <div className={style_module_css_1.default.header}>
          <a className={style_module_css_1.default.addVideoButton} href={routes_1.addVideoRoute}>
            + Добавить видео
          </a>
          <h2 className={style_module_css_1.default.title}>Заставки для видео:</h2>
          <div className={style_module_css_1.default.videoPreviews}>
            Тут вы сможете увидеть заставки ваших видео
          </div>
        </div>
        <div className={style_module_css_1.default.videos} id="videos">
          <h2 className={style_module_css_1.default.titleVideos}>Загруженные ранее:</h2>
          <div className={style_module_css_1.default.buttonsGroup}>
            <button className={`${style_module_css_1.default.deleteButton} ${(currentVidsId.length > 0) && style_module_css_1.default.deleteActive}`} onClick={handleRemoveVids} disabled={currentVidsId.length ? false : true}>
              Удалить
            </button>
          </div>
          {data && data.map((vid, index) => {
            return (<video_1.default key={index} onClick={onSelectClick} data={vid}></video_1.default>);
        })}
        </div>
      </>
    </menu_page_1.default>);
};
exports.default = VideosPage;

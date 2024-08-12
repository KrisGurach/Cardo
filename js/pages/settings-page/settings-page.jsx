"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const style_module_css_1 = __importDefault(require("./style.module.css"));
const menu_page_1 = __importDefault(require("../../components/menu-page/menu-page"));
const setting_1 = __importDefault(require("../../components/setting/setting"));
const types_1 = require("../../components/types/types");
const SettingsPage = () => {
    return (<menu_page_1.default title="Настройки">
      <div className={style_module_css_1.default.container}>
        <div className={style_module_css_1.default.settings}>
          <h2 className={style_module_css_1.default.title}>Язык</h2>
          <setting_1.default title="Язык контента" type={types_1.SettingTypes.BUTTON} text="русский"></setting_1.default>
        </div>
        <div className={style_module_css_1.default.settings}>
          <h2 className={style_module_css_1.default.title}>Уведомления</h2>
          <setting_1.default title="Анонсы новых мероприятий" type={types_1.SettingTypes.CHECKBOX}></setting_1.default>
          <setting_1.default title="Изменение статуса заявки" type={types_1.SettingTypes.CHECKBOX}></setting_1.default>
          <setting_1.default title="Присылать уведомления" type={types_1.SettingTypes.BUTTON} text="push"></setting_1.default>
        </div>
      </div>
    </menu_page_1.default>);
};
exports.default = SettingsPage;

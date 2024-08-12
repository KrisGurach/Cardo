"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const style_module_css_1 = __importDefault(require("./style.module.css"));
const profile_info_1 = __importDefault(require("../../components/profile-page/profile-info/profile-info"));
const profile_menu_1 = __importDefault(require("../../components/profile-page/profile-menu/profile-menu"));
const profile_footer_1 = __importDefault(require("../../components/profile-page/profile-footer/profile-footer"));
const ProfilePage = () => {
    return (<div className={style_module_css_1.default.container}>
      <profile_info_1.default name="Иван Иванов" tag="@ivan6666"/>
      <profile_menu_1.default />
      <profile_footer_1.default />
    </div>);
};
exports.default = ProfilePage;

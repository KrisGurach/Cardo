"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const menu_page_1 = __importDefault(require("../../components/menu-page/menu-page"));
const form_1 = __importDefault(require("../../components/form/form"));
const mocks_1 = require("../../constants/mocks");
const constants_1 = require("../../constants/constants");
const api_js_1 = __importDefault(require("../../utils/api.js"));
const react_router_dom_1 = require("react-router-dom");
const defaultValues = {
    id: 0,
    firstName: '',
    surname: '',
    lastName: '',
    email: '',
    birthday: '',
    phone: '',
    socialMediaUrl: '',
    portfolioUrl: '',
    country: '',
    city: '',
    role: ''
};
const MyProfilePage = () => {
    const { id } = (0, react_router_dom_1.useParams)();
    const userData = api_js_1.default.getUser(id);
    return (<menu_page_1.default title="Мой профиль">
      <form_1.default data={constants_1.ProfileFormData} inputValues={userData ? userData : mocks_1.inputValuesMock} defaultValues={defaultValues}/>
    </menu_page_1.default>);
};
exports.default = MyProfilePage;

import { Link, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';

function App() {
  return (
    <div className="App">
      {/* Header: главная - 1.переход в ЛК 2.уведомления либо лк - 1.выйти и 2.фотка, сделать разные варианты хэдера*/}
      <Main />
      {/* Footer: там сделать меню главаня и направления, сделать скрытие и показ в зависимости от роута,где нах-ся юзер */}
    </div>
  );
}

export default App;

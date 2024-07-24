export default function Navbar({title}) {
  return (
    // разметка для создания одной позиции меню для главной и лк
    <div className="navbar">
      <h2 className="navbar__title">{title}</h2>
      <button type="button" className="navbar__button-link"></button>
    </div>
  );
}
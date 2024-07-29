export default function Item({src, alt, title}) {
  return (
    <div className="item">
      <img className="item-image" src={src} alt={alt} />
      <p className="item-title">{title}</p>
    </div>
  )
}
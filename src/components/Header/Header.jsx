export default function Header() {
  return (
    <div className='header'>
    <img src={require('../../images/header-logo.svg').default} />
    <img src={require('../../images/notification.svg').default} />
    </div>
  );
}
import './App.css'
import logo from './assets/logo.png'
import cssIcon from './assets/css-icon.png'
import htmlIcon from './assets/html-icon.png'
import urlIcon from './assets/url-icon.png'
import Card from './components/Card'
function App() {
  return (
    <div className='app'>
      <div className='sidebar'>
        <ul className='sidebar-categories'>
          <li className='sidebar-categories__item sidebar-categories__item--active'>Home</li>
          <li className='sidebar-categories__item'>Services</li>
          <li className='sidebar-categories__item'>News</li>
          <li className='sidebar-categories__item'>Blog</li>
          <li className='sidebar-categories__item'>Contact</li>
        </ul>
      </div>
      <div className='main'>
        <div className='container'>
          <figure className='logo'>
            <img className='logo__img' src={logo} alt="Logo NCC" />
          </figure>
          <article className='content-1'>
            <p className='content-1__title'>Lorem ipsum dolor sit asmet?</p>
            <p className='content-1__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.</p>
          </article>
          <ul className='cards'>
            <Card image={cssIcon} />
            <Card image={htmlIcon} />
            <Card image={urlIcon} />
          </ul>
        </div>
        <div className="line"></div>
        <div className='container copyright'>
          <p>Copyright © 2021</p>
        </div>
      </div>
    </div>
  )
}

export default App

import style from './Navbar.module.css'
import { ActiveLink } from './ActiveLink'


const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

export const Navbar = () => {
  return (
    <nav className={ style['menu-container'] } >
      {
        menuItems.map(({ text,href }) => {
          return <ActiveLink key={ href } href={ href } text={ text }/>
        })  
      }
    </nav>
  )
}

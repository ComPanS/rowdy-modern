import { NavLink, Outlet } from 'react-router-dom'
import { site } from '../content/site'

const navigation = [
  { to: '#about', label: 'О нас' },
  { to: '#services', label: 'Услуги' },
  { to: '#reviews', label: 'Отзывы' },
  { to: '#contacts', label: 'Контакты' },
]

export function SiteLayout() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <NavLink className="brand" to="/" end><img src={site.logo} alt="Rowdy" /><span>{site.shortName}</span></NavLink>
        <nav aria-label="Main navigation">
          {navigation.map(({ to, label }) => (
            <a key={to} href={to}>
              {label}
            </a>
          ))}
        </nav>
        <a className="header-cta" href={`tel:${site.phone.replace(/[^+\d]/g, '')}`}>Позвонить <span>↗</span></a>
      </header>
      <main><Outlet /></main>
      <footer className="site-footer">
        <p>© {site.name}, Краснодар</p><a href={site.mapUrl}>Баварская улица, 8 ↗</a>
      </footer>
    </div>
  )
}

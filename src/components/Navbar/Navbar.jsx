import { useEffect, useState } from 'react'
import { FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi'
import './Navbar.css'

const navItems = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Skills',
    href: '#skills',
  },
  {
    label: 'Projects',
    href: '#projects',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`)
          }
        })
      },
      {
        rootMargin: '-45% 0px -50% 0px',
        threshold: 0,
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleNavigate = () => {
    setIsOpen(false)
  }

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <a href="#home" className="navbar__brand" onClick={handleNavigate}>
          <span className="navbar__logo">MZ</span>

          <div className="navbar__identity">
            <strong>Moch Zidan</strong>
            <small>Portfolio</small>
          </div>
        </a>

        <nav className="navbar__desktop-menu">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={activeSection === item.href ? 'active' : ''}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="navbar__cta">
          Hubungi Saya <FiArrowUpRight />
        </a>

        <button
          className="navbar__toggle"
          type="button"
          aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <div className={`navbar__mobile ${isOpen ? 'navbar__mobile--open' : ''}`}>
        <nav className="navbar__mobile-menu">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleNavigate}
              style={{ transitionDelay: `${index * 0.06}s` }}
              className={activeSection === item.href ? 'active' : ''}
            >
              <span>0{index + 1}</span>
              {item.label}
            </a>
          ))}

          <a
            href="#contact"
            className="navbar__mobile-cta"
            onClick={handleNavigate}
          >
            Hubungi Saya <FiArrowUpRight />
          </a>
        </nav>
      </div>
    </header>
  )
}
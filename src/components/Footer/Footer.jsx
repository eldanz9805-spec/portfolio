import {
  FiArrowUp,
  FiExternalLink,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiMapPin,
} from 'react-icons/fi'
import { FaSpotify } from 'react-icons/fa'
import './Footer.css'

const footerLinks = [
  { label: 'Tentang', href: '#about' },
  { label: 'Teknologi', href: '#skills' },
  { label: 'Project', href: '#projects' },
  { label: 'Kontak', href: '#contact' },
]

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/eldanz9805-spec',
    icon: <FiGithub />,
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: <FiLinkedin />,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/el_mardianz?igsh=YXd4OG42cWJsMzhx',
    icon: <FiInstagram />,
  },
  {
    label: 'Email',
    href: 'mailto:eldanz9805@gmail.com',
    icon: <FiMail />,
  },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#home" className="footer__logo">
              MZ
            </a>

            <h2>Moch Zidan</h2>
            <p>
              Laravel Developer yang berfokus pada pembuatan website, sistem
              informasi, dashboard admin, dan desain antarmuka yang rapi.
            </p>

            <div className="footer__location">
              <FiMapPin />
              <span>Garut, Jawa Barat</span>
            </div>
          </div>

          <div className="footer__links">
            <h3>Navigasi</h3>

            <nav>
              {footerLinks.map((item) => (
                <a href={item.href} key={item.label}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="footer__social">
            <h3>Terhubung</h3>

            <div className="footer__social-grid">
              {socialLinks.map((item) => (
                <a
                  href={item.href}
                  key={item.label}
                  target={item.href === '#' ? '_self' : '_blank'}
                  rel="noreferrer"
                  aria-label={item.label}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="footer__spotify">
            <div className="footer__spotify-header">
              <div>
                <span className="footer__spotify-label">Spotify Playlist</span>
                <h3>Playlist Favorit</h3>
              </div>

              <div className="footer__spotify-icon">
                <FaSpotify />
              </div>
            </div>

            <div className="footer__spotify-embed">
              <iframe
                src="https://open.spotify.com/embed/playlist/03ajnu3QuDMvlGVDBLapou"
                width="100%"
                height="152"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Spotify Playlist"
              ></iframe>
            </div>

            <a
              href="https://open.spotify.com/playlist/03ajnu3QuDMvlGVDBLapou?si=Y64PDdIkTt-3GHIO735uVA&pi=DMqf3Wy3SbyAo"
              target="_blank"
              rel="noreferrer"
              className="footer__spotify-button"
            >
              Buka Playlist <FiExternalLink />
            </a>
          </div>
        </div>

        <div className="footer__middle">
          <h2>
            Mari Bangun Project <span>yang Bermanfaat</span>
          </h2>

          <a href="#contact" className="footer__cta">
            Mulai Kerja Sama
            <FiExternalLink />
          </a>
        </div>

        <div className="footer__bottom">
          <p>© {currentYear} Moch Zidan. Semua hak cipta dilindungi.</p>

          <p>Dibuat dengan React, Vite, dan desain yang responsif.</p>

          <a href="#home" className="footer__back-top" aria-label="Kembali ke atas">
            <FiArrowUp />
          </a>
        </div>
      </div>
    </footer>
  )
}
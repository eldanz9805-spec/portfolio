import {
  FiArrowDown,
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
} from 'react-icons/fi'
import { motion } from 'framer-motion'
import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__grid-bg"></div>

      <div className="hero__container">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 42 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
        >
          <div className="hero__badge">
            <span></span>
            Hallo, Saya
          </div>

          <h1>
            Moch Zidan
            <strong>Laravel Developer</strong>
          </h1>

          <p>
            Saya membangun aplikasi web dari frontend hingga backend dengan
            fokus pada struktur sistem, performa, dan pengalaman pengguna yang
            nyaman.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="hero__button hero__button--primary">
              Lihat Project <FiArrowUpRight />
            </a>

            <a href="#contact" className="hero__button hero__button--secondary">
              Hubungi Saya <FiMail />
            </a>
          </div>

          <div className="hero__socials">
            <a
              href="https://github.com/eldanz9805-spec"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.92, y: 42 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.18, ease: 'easeOut' }}
        >
          <div className="hero__image-card">
            <img src="/profile/profil zidan 1.jpeg" alt="Moch Zidan" />

            <div className="hero__status">
              <span></span>
              Open To Work
            </div>
          </div>

          <div className="hero__floating-card hero__floating-card--top">
            <span>3+</span>
            Project Selesai
          </div>

          <div className="hero__floating-card hero__floating-card--bottom">
            <span>Fullstack</span>
            Web Developer
          </div>
        </motion.div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll ke About">
        <FiArrowDown />
      </a>
    </section>
  )
}
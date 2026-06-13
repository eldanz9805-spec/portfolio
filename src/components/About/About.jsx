import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  FiCode,
  FiDatabase,
  FiLayout,
  FiLayers,
  FiCheckCircle,
} from 'react-icons/fi'
import './About.css'

const highlights = [
  'Membangun aplikasi web dari frontend hingga backend',
  'Terbiasa menggunakan Laravel, React, MySQL, dan Bootstrap',
  'Fokus pada tampilan yang rapi, responsif, dan mudah digunakan',
  'Memiliki minat pada pengembangan sistem informasi dan UI/UX',
]

const focusAreas = [
  {
    icon: <FiCode />,
    title: 'Web Development',
    description: 'Membuat website modern dengan struktur kode yang rapi.',
  },
  {
    icon: <FiDatabase />,
    title: 'Backend System',
    description: 'Mengelola data, autentikasi, dan proses sistem menggunakan backend.',
  },
  {
    icon: <FiLayout />,
    title: 'UI/UX Design',
    description: 'Mendesain tampilan yang nyaman, bersih, dan mudah dipahami pengguna.',
  },
  {
    icon: <FiLayers />,
    title: 'System Management',
    description: 'Membangun fitur dashboard, data master, laporan, dan manajemen sistem.',
  },
]

export default function About() {
  const ref = useRef(null)

  const inView = useInView(ref, {
    once: true,
    margin: '-120px',
  })

  return (
    <section id="about" className="about" ref={ref}>
      <div className="about__container">
        <motion.div
          className="about__header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">// Tentang Saya</p>
          <h2 className="section-title">Membangun Solusi Digital yang Rapi dan Fungsional</h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="about__content">
          <motion.div
            className="about__profile-card"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="about__photo-wrap">
              <div className="about__photo">
                <img src="/profile/zidan.jpg" alt="Moch Zidan" />
              </div>
            </div>

            <h3>Moch Zidan</h3>
            <p>Laravel Developer</p>

            <div className="about__profile-tags">
              <span>Frontend</span>
              <span>Backend</span>
              <span>UI/UX</span>
            </div>

            <div className="about__profile-info">
              <div>
                <strong>3+</strong>
                <span>Project</span>
              </div>

              <div>
                <strong>Web</strong>
                <span>Developer</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about__text"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="about__eyebrow">Profil Singkat</span>

            <h3>
              Saya berfokus pada pengembangan aplikasi web yang modern,
              responsif, dan mudah digunakan.
            </h3>

            <p>
              Saya adalah seorang developer yang memiliki ketertarikan pada
              pembuatan sistem informasi, dashboard admin, website interaktif,
              serta desain antarmuka pengguna. Dalam setiap project, saya
              berusaha membuat tampilan yang bersih, struktur fitur yang jelas,
              dan pengalaman pengguna yang nyaman.
            </p>

            <div className="about__highlights">
              {highlights.map((item) => (
                <div className="about__highlight" key={item}>
                  <FiCheckCircle />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="about__focus-grid"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {focusAreas.map((item) => (
            <article className="about__focus-card" key={item.title}>
              <div className="about__focus-icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
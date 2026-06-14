import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  FaReact,
  FaLaravel,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaFigma,
  FaGitAlt,
} from 'react-icons/fa'
import {
  SiMysql,
  SiVite,
  SiFramer,
  SiFlutter,
  SiDart,
} from 'react-icons/si'
import './Skills.css'

const mainTechnologies = [
  {
    name: 'Laravel',
    role: 'Backend Framework',
    icon: <FaLaravel />,
  },
  {
    name: 'React',
    role: 'Frontend Library',
    icon: <FaReact />,
  },
  {
    name: 'PHP',
    role: 'Backend Language',
    icon: <FaPhp />,
  },
  {
    name: 'JavaScript',
    role: 'Web Interaction',
    icon: <FaJs />,
  },
  {
    name: 'MySQL',
    role: 'Database',
    icon: <SiMysql />,
  },
  {
    name: 'Bootstrap',
    role: 'CSS Framework',
    icon: <FaBootstrap />,
  },
]

const technologyRowOne = [
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Vite', icon: <SiVite /> },
  { name: 'Framer Motion', icon: <SiFramer /> },
  { name: 'Laravel', icon: <FaLaravel /> },
  { name: 'PHP', icon: <FaPhp /> },
]

const technologyRowTwo = [
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'Bootstrap', icon: <FaBootstrap /> },
  { name: 'Figma', icon: <FaFigma /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'Flutter', icon: <SiFlutter /> },
  { name: 'Dart', icon: <SiDart /> },
  { name: 'UI/UX Design', icon: <FaFigma /> },
  { name: 'Responsive Web', icon: <FaCss3Alt /> },
]

function MarqueeRow({ items, reverse = false }) {
  const duplicatedItems = [...items, ...items]

  return (
    <div className={`skills__marquee ${reverse ? 'skills__marquee--reverse' : ''}`}>
      <div className="skills__marquee-track">
        {duplicatedItems.map((item, index) => (
          <div className="skills__marquee-item" key={`${item.name}-${index}`}>
            <span>{item.icon}</span>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)

  const inView = useInView(ref, {
    once: true,
    margin: '-120px',
  })

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="skills__container">
        <motion.div
          className="skills__header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">// Teknologi</p>
          <h2 className="section-title">Teknologi yang Saya Gunakan</h2>
          <div className="section-divider"></div>
          <p className="skills__subtitle">
            Beberapa teknologi dan tools yang saya gunakan untuk membangun
            website, sistem informasi, dashboard admin, dan desain antarmuka.
          </p>
        </motion.div>

        <motion.div
          className="skills__main-grid"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          {mainTechnologies.map((tech, index) => (
            <article className="skills__card" key={tech.name}>
              <div className="skills__card-icon">{tech.icon}</div>

              <div>
                <h3>{tech.name}</h3>
                <p>{tech.role}</p>
              </div>

              <span className="skills__card-number">
                0{index + 1}
              </span>
            </article>
          ))}
        </motion.div>

        <motion.div
          className="skills__slider-wrapper"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <div className="skills__slider-header">
            <span>Tech Stack</span>
            
          </div>

          <div className="skills__slider">
            <MarqueeRow items={technologyRowOne} />
            <MarqueeRow items={technologyRowTwo} reverse />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
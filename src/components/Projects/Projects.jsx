import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowUpRight, FiGithub, FiExternalLink } from 'react-icons/fi'
import { FaFigma } from 'react-icons/fa'

import { featuredProjects, otherProjects } from '../../data/projects'
import './Projects.css'

export default function Projects() {
  const ref = useRef(null)

  const inView = useInView(ref, {
    once: true,
    margin: '-100px',
  })

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="container">
        <motion.div
          className="projects__header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">// Projects</p>
          <h2 className="section-title">Project Pilihan</h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="projects__featured">
          {featuredProjects.map((project, index) => (
            <motion.article
              className="featured-project"
              key={project.slug}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="featured-project__image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="featured-project__content">
                <span className="featured-project__role">{project.role}</span>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="featured-project__tech">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="featured-project__actions">
                  <Link
                    to={`/projects/${project.slug}`}
                    className="project-detail-button"
                  >
                    More Details <FiArrowUpRight />
                  </Link>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link-button"
                    >
                      <FiGithub /> GitHub
                    </a>
                  )}

                  {project.figma && (
                    <a
                      href={project.figma}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link-button"
                    >
                      <FaFigma /> Figma
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link-button"
                    >
                      <FiExternalLink /> Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="projects__others"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="projects__others-title">Other Projects</h3>

          <div className="projects__others-grid">
            {otherProjects.map((project, index) => (
              <motion.article
                className="other-project"
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.08 * index }}
              >
                <div className="other-project__image">
                  <img src={project.image} alt={project.title} />
                </div>

                <div className="other-project__body">
                  <span className="other-project__category">
                    {project.category}
                  </span>

                  <h4>{project.title}</h4>

                  <div className="other-project__tech">
                    {project.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
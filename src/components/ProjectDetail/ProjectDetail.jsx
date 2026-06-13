import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FiArrowLeft, FiArrowRight, FiExternalLink } from 'react-icons/fi'

import { featuredProjects } from '../../data/projects'
import './ProjectDetail.css'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = featuredProjects.find((item) => item.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!project) {
    return (
      <main className="project-detail project-detail--not-found">
        <div className="project-detail__container">
          <Link to="/#projects" className="project-detail__back">
            <FiArrowLeft /> Kembali ke Portfolio
          </Link>

          <h1>Project tidak ditemukan</h1>
          <p>Project ini tidak tersedia di daftar Project Pilihan.</p>
        </div>
      </main>
    )
  }

  return (
    <main className="project-detail">
      <section className="project-detail__hero">
        <div className="project-detail__container">
          <Link to="/#projects" className="project-detail__back">
            <FiArrowLeft /> Kembali ke Portfolio
          </Link>

          <div className="project-detail__hero-grid">
            <div className="project-detail__intro">
              <span className="project-detail__badge">Studi Kasus</span>

              <h1>{project.title}</h1>

              <p>{project.shortDescription}</p>

              <div className="project-detail__hero-actions">
                {project.demo ? (
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    Lihat Project <FiExternalLink />
                  </a>
                ) : (
                  <Link to="/#projects">
  Semua Project <FiArrowRight />
</Link>
                )}
              </div>
            </div>

            <div className="project-detail__cover">
              <img src={project.image} alt={project.title} />
            </div>
          </div>
        </div>
      </section>

      <section className="project-detail__content">
        <div className="project-detail__container project-detail__content-grid">
          <aside className="project-detail__side-card">
            <div>
              <span>Peran Saya</span>
              <h3>{project.role}</h3>
            </div>

            <div>
              <span>Teknologi</span>
              <div className="project-detail__tech">
                {project.tech.map((tech) => (
                  <small key={tech}>{tech}</small>
                ))}
              </div>
            </div>
          </aside>

          <div className="project-detail__main-text">
            <article>
              <h2>Tantangan</h2>
              <p>{project.challenge}</p>
            </article>

            <article>
              <h2>Solusi</h2>
              <p>{project.solution}</p>
            </article>

            <article>
              <h2>Hasil</h2>
              <p>{project.result}</p>
            </article>

            <div className="project-detail__gallery">
              {project.gallery.map((image, index) => (
                <div className="project-detail__gallery-item" key={index}>
                  <img src={image} alt={`${project.title} preview ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="project-detail__cta">
        <div className="project-detail__container">
          <div className="project-detail__cta-box">
            <span>Siap Melihat Lagi?</span>
            <h2>Jelajahi Project Lainnya</h2>

            <Link to="/#projects">
  Semua Project <FiArrowRight />
</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
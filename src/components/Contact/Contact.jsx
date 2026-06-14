import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  FiArrowUpRight,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiPhone,
  FiSend,
} from 'react-icons/fi'
import './Contact.css'

const contactCards = [
  {
    icon: <FiMail />,
    label: 'Email',
    value: 'eldanz9805@gmail.com',
    href: 'mailto:eldanz9805@gmail.com',
  },
  {
    icon: <FiPhone />,
    label: 'WhatsApp',
    value: 'Hubungi via WhatsApp',
    href: 'https://wa.me/6282120735655',
  },
  {
    icon: <FiMapPin />,
    label: 'Lokasi',
    value: 'Garut, Jawa Barat',
    href: 'https://maps.app.goo.gl/xs96vzXNUSqerXfh8?g_st=aw',
  },
]

const socials = [
  {
    icon: <FiGithub />,
    label: 'GitHub',
    href: 'https://github.com/eldanz9805-spec',
  },
  {
    icon: <FiLinkedin />,
    label: 'LinkedIn',
    href: '#',
  },
  {
    icon: <FiInstagram />,
    label: 'Instagram',
    href: 'https://www.instagram.com/el_mardianz?igsh=YXd4OG42cWJsMzhx',
  },
]

export default function Contact() {
  const ref = useRef(null)

  const inView = useInView(ref, {
    once: true,
    margin: '-120px',
  })

  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')
    const subject = formData.get('subject')
    const message = formData.get('message')

    const body = `
Halo, saya ${name}

Email:
${email}

Pesan:
${message}
    `

    window.location.href = `mailto:eldanz9805@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="contact__container">
        <motion.div
          className="contact__header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">// Contact</p>
          <h2 className="section-title">Mari Bekerja Sama</h2>
          <div className="section-divider"></div>
          <p className="contact__subtitle">
            Tertarik membuat website, sistem informasi, dashboard admin, atau
            desain UI/UX? Silakan hubungi saya melalui form atau kontak yang
            tersedia.
          </p>
        </motion.div>

        <div className="contact__grid">
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="contact__profile">
              <div className="contact__avatar">
                <img src="/profile/profil zidan 2.jpeg" alt="Moch Zidan" />
              </div>

              <div>
                <h3>Moch Zidan</h3>
                <p>Laravel Developer</p>
              </div>
            </div>

            <div className="contact__status">
              <span></span>
              Terbuka untuk project baru
            </div>

            <p className="contact__description">
              Saya siap membantu membangun solusi digital yang rapi,
              fungsional, dan mudah digunakan. Mulai dari landing page,
              dashboard admin, sistem informasi, hingga prototype UI/UX.
            </p>

            <div className="contact__cards">
              {contactCards.map((item) => (
                <a
                  href={item.href}
                  className="contact__card"
                  key={item.label}
                  target={item.href === '#' ? '_self' : '_blank'}
                  rel="noreferrer"
                >
                  <div className="contact__card-icon">{item.icon}</div>

                  <div>
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>

                  {item.href !== '#' && <FiArrowUpRight />}
                </a>
              ))}
            </div>

            <div className="contact__socials">
              {socials.map((item) => (
                <a
                  href={item.href}
                  key={item.label}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            className="contact__form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="contact__form-header">
              <div>
                <span>Kirim Pesan</span>
                <h3>Ceritakan kebutuhan project kamu</h3>
              </div>

              <FiMessageCircle />
            </div>

            <div className="contact__form-row">
              <div className="contact__field">
                <label htmlFor="name">Nama</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Masukkan nama"
                  required
                />
              </div>

              <div className="contact__field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="nama@email.com"
                  required
                />
              </div>
            </div>

            <div className="contact__field">
              <label htmlFor="subject">Subjek</label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Contoh: Pembuatan website portfolio"
                required
              />
            </div>

            <div className="contact__field">
              <label htmlFor="message">Pesan</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Tulis pesan atau kebutuhan project..."
                required
              ></textarea>
            </div>

            <button type="submit" className="contact__submit">
              Kirim Pesan <FiSend />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
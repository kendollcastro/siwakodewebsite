import { useState, useCallback } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import useScrollReveal from '../hooks/useScrollReveal'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function CtaForm() {
  const [status, setStatus] = useState('idle')
  const [formData, setFormData] = useState({ email: '', message: '' })
  const [errors, setErrors] = useState({})
  const { t } = useLanguage()
  const [ref, visible] = useScrollReveal()

  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
  }, [])

  const validate = useCallback(() => {
    const errs = {}
    if (!EMAIL_REGEX.test(formData.email)) errs.email = true
    if (!formData.message.trim()) errs.message = true
    return errs
  }, [formData])

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault()
      const errs = validate()
      setErrors(errs)
      if (Object.keys(errs).length) return

      setStatus('loading')
      try {
        const fd = new FormData()
        fd.append('access_key', import.meta.env.VITE_WEB3FORMS_KEY || 'e95994e5-77a0-49b9-9531-3065dcf82d0b')
        fd.append('email', formData.email)
        fd.append('message', formData.message)
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: fd,
        })
        const data = await res.json()
        if (!data.success) throw new Error('API error')
        setStatus('success')
        setFormData({ email: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } catch {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
      }
    },
    [formData, validate],
  )

  return (
    <section
      id="contacto"
      className="py-section-gap bg-surface"
      aria-labelledby="cta-title"
    >
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div
          className={`bg-[#0D1F18] rounded-[40px] overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-stretch shadow-2xl transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="p-12 md:p-20 flex flex-col justify-center">
            <h2 id="cta-title" className="text-headline-xl text-white mb-8">
              {t.ctaForm.title}
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div>
                <label htmlFor="cta-email" className="sr-only">
                  {t.ctaForm.emailLabel}
                </label>
                <input
                  id="cta-email"
                  name="email"
                  className={`w-full bg-white/10 border-b-2 py-4 px-0 focus:ring-0 placeholder:text-white/50 transition-all outline-none ${
                    errors.email
                      ? 'border-red-400 text-red-400'
                      : 'border-primary-fixed/30 text-white focus:border-primary-fixed'
                  }`}
                  placeholder={t.ctaForm.emailPlaceholder}
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  aria-required="true"
                  aria-invalid={errors.email ? 'true' : undefined}
                  aria-describedby={errors.email ? 'cta-email-error' : undefined}
                />
                {errors.email && (
                  <p id="cta-email-error" className="text-red-400 text-small mt-2" role="alert">
                    {t.ctaForm.emailError}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="cta-message" className="sr-only">
                  {t.ctaForm.messageLabel}
                </label>
                <textarea
                  id="cta-message"
                  name="message"
                  className={`w-full bg-white/10 border-b-2 py-4 px-0 focus:ring-0 placeholder:text-white/50 transition-all outline-none resize-none ${
                    errors.message
                      ? 'border-red-400 text-red-400'
                      : 'border-primary-fixed/30 text-white focus:border-primary-fixed'
                  }`}
                  placeholder={t.ctaForm.messagePlaceholder}
                  rows={3}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  aria-required="true"
                  aria-invalid={errors.message ? 'true' : undefined}
                  aria-describedby={errors.message ? 'cta-msg-error' : undefined}
                  autoComplete="off"
                />
                {errors.message && (
                  <p id="cta-msg-error" className="text-red-400 text-small mt-2" role="alert">
                    {t.ctaForm.messageError}
                  </p>
                )}
              </div>
              <button
                className="bg-primary-fixed text-on-primary-fixed w-full md:w-auto px-10 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 focus-visible:outline-2 focus-visible:outline-white"
                type="submit"
                disabled={status === 'loading' || status === 'success'}
              >
                {status === 'loading' && (
                  <span className="w-5 h-5 border-2 border-on-primary-fixed border-t-transparent rounded-full animate-spin" aria-hidden="true" />
                )}
                {status === 'loading'
                  ? t.ctaForm.loading
                  : status === 'success'
                    ? t.ctaForm.success
                    : t.ctaForm.submit}
                {status === 'idle' && (
                  <span className="material-symbols-outlined" aria-hidden="true">send</span>
                )}
              </button>
              {status === 'success' && (
                <p className="text-primary-fixed text-body-md" role="status">
                  {t.ctaForm.successMsg}
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-body-md" role="alert">
                  {t.ctaForm.errorMsg}
                </p>
              )}
            </form>
          </div>
          <div className="relative min-h-[400px]">
            <img
              alt="Designer working on digital project"
              className="absolute inset-0 w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXqCjd5KYKzJVpK3kuitogoVdesMMYSjYU-L-aWFF_1Abz3FG9Fz1jG2NlsSfEJejIbcE3luqLRCKW0xqtUN2y3g0pDh0hgD8z66tzxfSJ8hqcIEg-dURyg-ruebUDA7VNwgEgzTdIVbIKIh_F2fjP9ylpDIQKaeXl3Bh6IXjqEhpntoZvzLy0H0XBJfKRc6qbzHLNXcqmgrTp4q3A7w9SfZuIfb6xs5TsLD4g7h7Dy0XgztmmQK5dgRzINNE1bdngnJh1bLvkL-m-"
              loading="lazy"
              width="800"
              height="600"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0D1F18] to-transparent lg:from-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaForm

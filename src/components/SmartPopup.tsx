'use client'

import { useEffect, useState } from 'react'

export default function SmartPopup() {
  const [visible, setVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    // Ne s'ouvre pas si déjà converti
    if (typeof window !== 'undefined' && localStorage.getItem('strativa_lead_converted') === 'true') return

    const timer = setTimeout(() => setVisible(true), 15000)
    const handleExit = (e: MouseEvent) => {
      if (e.clientY <= 0) setVisible(true)
    }
    document.addEventListener('mouseleave', handleExit)
    return () => {
      clearTimeout(timer)
      document.removeEventListener('mouseleave', handleExit)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return
    localStorage.setItem('strativa_lead_converted', 'true')
    setSuccess(true)
  }

  const handleClose = () => {
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-indigo/40 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-white p-8 shadow-2xl border border-champagne">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-anthracite/50 hover:text-indigo transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {!success ? (
          <>
            <div className="flex justify-center mb-6">
              <div className="h-14 w-14 bg-gold/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-serif font-bold text-indigo text-center mb-2">Guide exclusif offert</h2>
            <p className="text-anthracite text-sm text-center mb-6">
              Téléchargez le Guide : <strong>Les 3 freins invisibles qui bloquent la rentabilité de votre PME au Bénin</strong>.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
                required
                className="w-full border border-champagne bg-cream px-4 py-3 text-sm text-indigo placeholder:text-anthracite/50 focus:border-gold focus:ring-1 focus:ring-gold outline-none"
              />
              <button
                type="submit"
                className="w-full bg-indigo py-3 text-sm font-semibold text-white hover:bg-indigo/90 transition-colors"
              >
                Recevoir le guide gratuit
              </button>
            </form>
            <p className="mt-4 text-xs text-anthracite/50 text-center">Vos données restent confidentielles. Aucun spam.</p>
          </>
        ) : (
          <div className="text-center py-4">
            <div className="mx-auto h-14 w-14 bg-green-50 flex items-center justify-center mb-4">
              <svg className="h-7 w-7 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-serif font-bold text-indigo">Merci !</h3>
            <p className="text-sm text-anthracite mt-2">
              Votre guide a été envoyé à <strong>{email}</strong>.
            </p>
            <p className="text-xs text-anthracite/60 mt-1">
              Vérifiez votre boîte mail (et vos spams).
            </p>
            <button
              onClick={handleClose}
              className="mt-6 bg-indigo text-white px-6 py-2 text-sm font-medium hover:bg-indigo/90 transition-colors"
            >
              Quitter
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
'use client'

import { useState, useEffect } from 'react'

export default function LeadCaptureBar() {
  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [converted, setConverted] = useState(false) // sera mis à true après montage si déjà converti

  // Vérifie le localStorage après le montage
  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('strativa_lead_converted') === 'true') {
      setConverted(true)
    }
  }, [])

  const handleClick = () => {
    setError('')
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Veuillez entrer un email valide.')
      return
    }
    setLoading(true)
    // Simulation d'envoi (supprime ce setTimeout si tu veux un retour immédiat)
    setTimeout(() => {
      localStorage.setItem('strativa_lead_converted', 'true')
      setSuccess(true)
      setLoading(false)
    }, 300) // 300ms pour montrer un retour rapide
  }

  // Si déjà converti, ne rien afficher
  if (converted) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-indigo border-t border-champagne/20 py-3 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 relative">
        {success ? (
          <div className="flex-1 text-center sm:text-left flex flex-col sm:flex-row items-center gap-4">
            <p className="text-white text-sm">
              ✅ Guide envoyé à <strong>{email}</strong>. Vérifiez votre boîte mail.
            </p>
            <button
              onClick={() => setConverted(true)}
              className="bg-white text-indigo px-4 py-2 text-sm font-medium hover:bg-gold hover:text-white transition-colors"
            >
              Fermer
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 text-center sm:text-left">
              <p className="text-white text-sm font-medium">
                📘 Guide offert : <strong>Les 3 freins invisibles qui bloquent la rentabilité de votre PME au Bénin</strong>
              </p>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(''); }}
                placeholder="votre@email.com"
                className="w-full sm:w-56 border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/50 focus:border-gold focus:ring-1 focus:ring-gold outline-none"
              />
              <button
                onClick={handleClick}
                disabled={loading}
                className={`bg-white text-indigo px-4 py-2 text-sm font-medium hover:bg-gold hover:text-white transition-colors ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {loading ? 'Envoi...' : 'Recevoir'}
              </button>
            </div>
          </>
        )}

        {error && (
          <p className="absolute -top-8 left-0 right-0 text-center text-xs text-red-300 bg-red-900/80 px-4 py-1">
            {error}
          </p>
        )}
      </div>
    </div>
  )
}
'use client'

import { useState } from 'react'

export default function LeadCaptureBar() {
  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return
    setSuccess(true)
  }

  if (dismissed) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-indigo border-t border-champagne/20 py-3 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 relative">
        {success ? (
          <div className="flex-1 text-center sm:text-left flex flex-col sm:flex-row items-center gap-4">
            <div className="flex-1">
              <p className="text-white text-sm font-medium">✅ Guide envoyé à <strong>{email}</strong>.</p>
              <p className="text-white/70 text-xs mt-1">Consultez votre boîte mail ou téléchargez-le directement.</p>
            </div>
            <a
              href="/guide.pdf"
              download
              className="inline-flex items-center gap-2 bg-white text-indigo px-4 py-2 text-sm font-medium hover:bg-gold hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Télécharger le guide
            </a>
          </div>
        ) : (
          <>
            <div className="flex-1 text-center sm:text-left">
              <p className="text-white text-sm font-medium">
                📘 Guide offert : <strong>Les 3 freins invisibles qui bloquent la rentabilité de votre PME au Bénin</strong>
              </p>
            </div>
            <form onSubmit={handleSubmit} className="flex items-center gap-2 w-full sm:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
                required
                className="w-full sm:w-56 border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/50 focus:border-gold focus:ring-1 focus:ring-gold outline-none"
              />
              <button
                type="submit"
                className="bg-white text-indigo px-4 py-2 text-sm font-medium hover:bg-gold hover:text-white transition-colors"
              >
                Recevoir
              </button>
            </form>
          </>
        )}
        <button
          onClick={() => setDismissed(true)}
          className="absolute top-0 right-0 text-white/50 hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}
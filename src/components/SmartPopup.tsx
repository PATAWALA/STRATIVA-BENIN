'use client'

import { useEffect, useState, useCallback } from 'react'
import { createBrowserClient } from '@/lib/supabase/client'
import type { LeadInsert } from '@/types'

const POPUP_KEY = 'strativa_popup_closed'

export default function SmartPopup() {
  const [visible, setVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  // Vérifie si l'utilisateur a déjà interagi
  const hasInteracted = () => {
    if (typeof window === 'undefined') return true
    return localStorage.getItem(POPUP_KEY) === 'true'
  }

  // Déclencheurs : 15 secondes ou exit-intent
  useEffect(() => {
    if (hasInteracted()) return

    const timer = setTimeout(() => {
      setVisible(true)
    }, 15000)

    const handleExit = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasInteracted()) {
        setVisible(true)
      }
    }
    document.addEventListener('mouseleave', handleExit)

    return () => {
      clearTimeout(timer)
      document.removeEventListener('mouseleave', handleExit)
    }
  }, [])

  const closePopup = useCallback(() => {
    setVisible(false)
    localStorage.setItem(POPUP_KEY, 'true')
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Veuillez entrer une adresse email valide.')
      return
    }
    setLoading(true)
    try {
      const supabase = createBrowserClient()
      const lead: LeadInsert = {
        nom: '',
        prenom: '',
        email,
        source: 'popup',
      }
      const { error: insertError } = await supabase.from('leads').insert([lead])
      if (insertError) throw insertError
      setSuccess(true)
      localStorage.setItem(POPUP_KEY, 'true')
      setTimeout(() => setVisible(false), 3000)
    } catch (err: any) {
      setError('Une erreur est survenue. Veuillez réessayer.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-indigo/40 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl border border-champagne">
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 text-anthracite/50 hover:text-indigo transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        {!success ? (
          <>
            <div className="flex justify-center mb-6">
              <div className="h-14 w-14 rounded-full bg-gold/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-serif font-bold text-indigo text-center mb-2">
              Guide exclusif offert
            </h2>
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
                className="w-full rounded-lg border border-champagne bg-cream px-4 py-3 text-sm text-indigo placeholder:text-anthracite/50 focus:border-gold focus:ring-1 focus:ring-gold transition-all duration-300"
              />
              {error && <p className="text-xs text-red-500">{error}</p>}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-indigo py-3 text-sm font-semibold text-white hover:bg-indigo/90 transition-colors duration-300 disabled:opacity-70 flex items-center justify-center"
              >
                {loading ? (
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                ) : 'Recevoir le guide gratuit'}
              </button>
            </form>
            <p className="mt-4 text-xs text-anthracite/50 text-center">
              Vos données restent confidentielles. Aucun spam.
            </p>
          </>
        ) : (
          <div className="text-center py-4">
            <div className="mx-auto h-14 w-14 rounded-full bg-green-50 flex items-center justify-center mb-4">
              <svg className="h-7 w-7 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-serif font-bold text-indigo">Merci !</h3>
            <p className="text-sm text-anthracite mt-2">Le guide vous sera envoyé dans quelques instants.</p>
          </div>
        )}
      </div>
    </div>
  )
}
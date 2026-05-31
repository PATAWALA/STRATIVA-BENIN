'use client'

import { useState } from 'react'
import type { LeadInsert } from '@/types'

export default function ContactForm() {
  const [formData, setFormData] = useState<LeadInsert>({
    nom: '',
    prenom: '',
    email: '',
    nom_entreprise: '',
    taille_entreprise: undefined,
    type_besoin: '',
    source: 'contact',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (!formData.nom || !formData.prenom || !formData.email) {
      setError('Veuillez remplir tous les champs obligatoires.')
      return
    }
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Erreur inconnue')
      setSuccess(true)
      setFormData({
        nom: '', prenom: '', email: '', nom_entreprise: '', taille_entreprise: undefined, type_besoin: '', source: 'contact'
      })
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      {success ? (
        <div className="rounded-2xl border border-champagne bg-white p-10 text-center shadow-sm">
          <div className="mx-auto h-14 w-14 rounded-full bg-gold/10 flex items-center justify-center mb-4">
            <svg className="h-7 w-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-serif font-bold text-indigo">Message envoyé avec succès</h3>
          <p className="mt-2 text-anthracite">Notre équipe vous répondra dans les meilleurs délais.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-champagne bg-white p-8 md:p-10 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <label htmlFor="prenom" className="block text-sm font-medium text-indigo mb-1">Prénom *</label>
              <input
                id="prenom"
                name="prenom"
                type="text"
                required
                value={formData.prenom}
                onChange={handleChange}
                className="w-full rounded-lg border border-champagne bg-cream px-4 py-3 text-sm text-indigo placeholder:text-anthracite/50 focus:border-gold focus:ring-1 focus:ring-gold transition-all duration-300"
                placeholder="Jean"
              />
            </div>
            <div className="relative">
              <label htmlFor="nom" className="block text-sm font-medium text-indigo mb-1">Nom *</label>
              <input
                id="nom"
                name="nom"
                type="text"
                required
                value={formData.nom}
                onChange={handleChange}
                className="w-full rounded-lg border border-champagne bg-cream px-4 py-3 text-sm text-indigo placeholder:text-anthracite/50 focus:border-gold focus:ring-1 focus:ring-gold transition-all duration-300"
                placeholder="Doe"
              />
            </div>
          </div>
          <div className="relative">
            <label htmlFor="email" className="block text-sm font-medium text-indigo mb-1">Email professionnel *</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-champagne bg-cream px-4 py-3 text-sm text-indigo placeholder:text-anthracite/50 focus:border-gold focus:ring-1 focus:ring-gold transition-all duration-300"
              placeholder="jean.doe@entreprise.bj"
            />
          </div>
          <div className="relative">
            <label htmlFor="nom_entreprise" className="block text-sm font-medium text-indigo mb-1">Entreprise</label>
            <input
              id="nom_entreprise"
              name="nom_entreprise"
              type="text"
              value={formData.nom_entreprise}
              onChange={handleChange}
              className="w-full rounded-lg border border-champagne bg-cream px-4 py-3 text-sm text-indigo placeholder:text-anthracite/50 focus:border-gold focus:ring-1 focus:ring-gold transition-all duration-300"
              placeholder="Nom de votre entreprise"
            />
          </div>
          <div className="relative">
            <label htmlFor="taille_entreprise" className="block text-sm font-medium text-indigo mb-1">Taille de l'entreprise</label>
            <select
              id="taille_entreprise"
              name="taille_entreprise"
              value={formData.taille_entreprise || ''}
              onChange={handleChange}
              className="w-full rounded-lg border border-champagne bg-cream px-4 py-3 text-sm text-indigo focus:border-gold focus:ring-1 focus:ring-gold transition-all duration-300"
            >
              <option value="" disabled>Sélectionnez</option>
              <option value="2-10">2 - 10 employés</option>
              <option value="11-50">11 - 50 employés</option>
              <option value="50+">Plus de 50 employés</option>
            </select>
          </div>
          <div className="relative">
            <label htmlFor="type_besoin" className="block text-sm font-medium text-indigo mb-1">Votre besoin principal</label>
            <textarea
              id="type_besoin"
              name="type_besoin"
              rows={3}
              value={formData.type_besoin}
              onChange={handleChange}
              className="w-full rounded-lg border border-champagne bg-cream px-4 py-3 text-sm text-indigo placeholder:text-anthracite/50 focus:border-gold focus:ring-1 focus:ring-gold transition-all duration-300"
              placeholder="Décrivez brièvement votre projet ou défi stratégique"
            />
          </div>
          {error && <p className="text-sm text-red-500">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto rounded-full bg-indigo px-10 py-4 text-sm font-semibold text-white hover:bg-gold transition-colors duration-300 disabled:opacity-70 flex items-center justify-center"
          >
            {loading ? (
              <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
              </svg>
            ) : 'Envoyer ma demande'}
          </button>
        </form>
      )}
    </div>
  )
}
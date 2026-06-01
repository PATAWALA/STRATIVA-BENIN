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

  const whatsappNumber = '+2290123456789' // ← Remplace par le vrai numéro Strativa
  const whatsappMessage = encodeURIComponent('Bonjour Strativa, je souhaite échanger sur un accompagnement.')

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Contact rapide WhatsApp */}
      <div className="mb-10 bg-cream/50 border border-champagne/60 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-indigo mb-1">Un besoin urgent ?</p>
          <p className="text-xs text-anthracite/60">Contactez-nous directement sur WhatsApp</p>
        </div>
        <a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-600 text-white px-5 py-2.5 text-sm font-medium hover:bg-green-700 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          WhatsApp
        </a>
      </div>

      {success ? (
        <div className="border border-champagne bg-white p-10 text-center shadow-sm">
          <div className="mx-auto h-14 w-14 bg-gold/10 flex items-center justify-center mb-4">
            <svg className="h-7 w-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-serif font-bold text-indigo">Message envoyé avec succès</h3>
          <p className="mt-2 text-anthracite">Notre équipe vous répondra dans les meilleurs délais.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 border border-champagne bg-white p-8 md:p-10 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="prenom" className="block text-sm font-medium text-indigo mb-1">Prénom *</label>
              <input
                id="prenom"
                name="prenom"
                type="text"
                required
                value={formData.prenom}
                onChange={handleChange}
                className="w-full border border-champagne bg-cream px-4 py-3 text-sm text-indigo placeholder:text-anthracite/50 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                placeholder="Jean"
              />
            </div>
            <div>
              <label htmlFor="nom" className="block text-sm font-medium text-indigo mb-1">Nom *</label>
              <input
                id="nom"
                name="nom"
                type="text"
                required
                value={formData.nom}
                onChange={handleChange}
                className="w-full border border-champagne bg-cream px-4 py-3 text-sm text-indigo placeholder:text-anthracite/50 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                placeholder="Doe"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-indigo mb-1">Email professionnel *</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-champagne bg-cream px-4 py-3 text-sm text-indigo placeholder:text-anthracite/50 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
              placeholder="jean.doe@entreprise.bj"
            />
          </div>
          <div>
            <label htmlFor="nom_entreprise" className="block text-sm font-medium text-indigo mb-1">Entreprise</label>
            <input
              id="nom_entreprise"
              name="nom_entreprise"
              type="text"
              value={formData.nom_entreprise}
              onChange={handleChange}
              className="w-full border border-champagne bg-cream px-4 py-3 text-sm text-indigo placeholder:text-anthracite/50 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
              placeholder="Nom de votre entreprise"
            />
          </div>
          <div>
            <label htmlFor="taille_entreprise" className="block text-sm font-medium text-indigo mb-1">Taille de l'entreprise</label>
            <select
              id="taille_entreprise"
              name="taille_entreprise"
              value={formData.taille_entreprise || ''}
              onChange={handleChange}
              className="w-full border border-champagne bg-cream px-4 py-3 text-sm text-indigo focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
            >
              <option value="" disabled>Sélectionnez</option>
              <option value="2-10">2 - 10 employés</option>
              <option value="11-50">11 - 50 employés</option>
              <option value="50+">Plus de 50 employés</option>
            </select>
          </div>
          <div>
            <label htmlFor="type_besoin" className="block text-sm font-medium text-indigo mb-1">Votre besoin principal</label>
            <textarea
              id="type_besoin"
              name="type_besoin"
              rows={3}
              value={formData.type_besoin}
              onChange={handleChange}
              className="w-full border border-champagne bg-cream px-4 py-3 text-sm text-indigo placeholder:text-anthracite/50 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
              placeholder="Décrivez brièvement votre projet ou défi stratégique"
            />
          </div>
          {error && <p className="text-sm text-red-500">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto bg-indigo px-8 py-3.5 text-sm font-medium text-white hover:bg-indigo/90 transition-colors disabled:opacity-70 flex items-center justify-center"
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
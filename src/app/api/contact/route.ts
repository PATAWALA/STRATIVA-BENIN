import { NextResponse } from 'next/server'
import { createServiceClient } from '@/lib/supabase/server'
import type { LeadInsert } from '@/types'

export async function POST(request: Request) {
  try {
    const body: LeadInsert = await request.json()

    // Validation côté serveur
    if (!body.nom || !body.prenom || !body.email) {
      return NextResponse.json({ error: 'Champs obligatoires manquants.' }, { status: 400 })
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ error: 'Email invalide.' }, { status: 400 })
    }
    if (body.taille_entreprise && !['2-10', '11-50', '50+'].includes(body.taille_entreprise)) {
      return NextResponse.json({ error: 'Taille entreprise invalide.' }, { status: 400 })
    }
    if (body.source && !['contact', 'popup'].includes(body.source)) {
      body.source = 'contact'
    }

    // Insérer dans Supabase
    const supabase = createServiceClient()
    const { error: insertError } = await supabase.from('leads').insert([{
      nom: body.nom,
      prenom: body.prenom,
      email: body.email,
      nom_entreprise: body.nom_entreprise || null,
      taille_entreprise: body.taille_entreprise || null,
      type_besoin: body.type_besoin || null,
      source: body.source,
    }])

    if (insertError) {
      console.error('Erreur Supabase insert:', insertError)
      return NextResponse.json({ error: 'Erreur lors de l’enregistrement.' }, { status: 500 })
    }

    // Simuler l’envoi d’un webhook CRM (ex: HubSpot ou Notion)
    // En production, remplacez par un appel fetch vers l’API de votre CRM.
    try {
      await fetch('https://hooks.zapier.com/hooks/catch/...', { // ou l'endpoint de votre choix
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event: 'new_lead',
          lead: body,
        }),
      })
    } catch (webhookError) {
      console.error('Webhook failed but lead saved:', webhookError)
      // On ne bloque pas la réponse pour autant
    }

    return NextResponse.json({ success: true, message: 'Lead enregistré avec succès.' })
  } catch (err) {
    console.error('API Contact error:', err)
    return NextResponse.json({ error: 'Erreur interne du serveur.' }, { status: 500 })
  }
}
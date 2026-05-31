import Link from 'next/link'
import { createServiceClient } from '@/lib/supabase/server'

export default async function LatestInsight() {
  const supabase = createServiceClient()
  const { data: insight } = await supabase
    .from('insights')
    .select('id, titre, resume, temps_lecture, created_at')
    .order('created_at', { ascending: false })
    .limit(1)
    .single()

  if (!insight) {
    return (
      <div className="w-full max-w-sm mx-auto rounded-2xl border border-champagne bg-white p-8 animate-pulse">
        <div className="h-4 bg-champagne rounded w-3/4 mb-4" />
        <div className="h-3 bg-champagne rounded w-1/2 mb-2" />
        <div className="h-3 bg-champagne rounded w-5/6" />
      </div>
    )
  }

  return (
    <Link
      href={`/insights/${insight.id}`}
      className="group relative block w-full max-w-sm mx-auto rounded-2xl border border-champagne bg-white p-8 shadow-sm transition-all duration-500 hover:shadow-xl hover:border-gold/30 hover:-translate-y-1"
    >
      <span className="inline-flex items-center rounded-full bg-gold/10 px-3 py-1 text-xs font-medium text-gold">
        À la Une
      </span>
      <h3 className="mt-4 text-xl font-serif font-bold text-indigo group-hover:text-gold transition-colors duration-300">
        {insight.titre}
      </h3>
      <p className="mt-2 text-sm text-anthracite line-clamp-3">
        {insight.resume}
      </p>
      <div className="mt-4 flex items-center text-xs text-anthracite/70">
        <svg className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        {insight.temps_lecture} min de lecture
      </div>
    </Link>
  )
}
export default function Footer() {
  return (
    <footer className="bg-indigo text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Colonne 1 : Identité */}
        <div>
          <h3 className="text-xl font-serif font-bold text-white mb-4">STRATIVA</h3>
          <p className="text-sm text-cream/60 leading-relaxed">
            Cabinet de conseil en stratégie & performance au Bénin.
          </p>
          <p className="text-sm text-cream/60 mt-4">
            Structurer la croissance, transformer les ambitions en résultats.
          </p>
        </div>

        {/* Colonne 2 : Navigation */}
        <div>
          <h4 className="text-sm font-semibold text-gold uppercase tracking-wider mb-4">Navigation</h4>
          <ul className="space-y-3 text-sm text-cream/60">
            <li><a href="/" className="hover:text-white transition-colors">Accueil</a></li>
            <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="/ressources" className="hover:text-white transition-colors">Ressources</a></li>
            <li><a href="/a-propos" className="hover:text-white transition-colors">À propos</a></li>
            <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Colonne 3 : Contact */}
        <div>
          <h4 className="text-sm font-semibold text-gold uppercase tracking-wider mb-4">Contact</h4>
          <div className="space-y-3 text-sm text-cream/60">
            <p>Rue de la Révolution, Immeuble Akpakpa</p>
            <p>01 BP 1234, Cotonou, Bénin</p>
            <p className="mt-3">
              <a href="mailto:contact@strativa.bj" className="hover:text-white transition-colors underline underline-offset-4 decoration-gold/30 hover:decoration-gold">
                contact@strativa.bj
              </a>
            </p>
            <p>
              <a href="tel:+2290123456789" className="hover:text-white transition-colors underline underline-offset-4 decoration-gold/30 hover:decoration-gold">
                +229 01 23 45 67 89
              </a>
            </p>
          </div>
        </div>

        {/* Colonne 4 : Engagement */}
        <div>
          <h4 className="text-sm font-semibold text-gold uppercase tracking-wider mb-4">Engagement</h4>
          <p className="text-sm text-cream/60 leading-relaxed">
            Nous respectons la confidentialité de chaque mission et nous engageons à fournir des résultats mesurables dans la durée.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-flex items-center bg-white text-indigo px-6 py-3 text-sm font-medium hover:bg-gold hover:text-white transition-colors"
          >
            Se faire accompagner
          </a>
        </div>
      </div>

      {/* Barre inférieure */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/40">
          <p>© {new Date().getFullYear()} Strativa Bénin — Confidentialité & Excellence.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
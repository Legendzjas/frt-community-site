import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="shell hero-grid">
          <div>
            <span className="badge">
              <span className="dot" />
              Communauté FRT
            </span>
            <h1 className="title">
              La fraternité <span className="gradient-text">renaît des cendres</span>.
            </h1>
            <p className="lead">
              Bienvenue chez <strong>FRT — Fraternity</strong>, un foyer pour les joueurs
              francophones qui veulent progresser ensemble. Ce site est le hub de la
              communauté et sera bientôt relié au <strong>FRT Bot</strong> pour relier nos
              jeux, Discord et vos commandes en jeu.
            </p>

            <ul className="list">
              <li>Infos à jour sur nos jeux ARK et futurs projets.</li>
              <li>Cartes des streamers FRT à soutenir en live.</li>
              <li>Accès rapide : Discord, liens Steam, et bientôt le bot.</li>
            </ul>

            <div className="cta-row">
              <Link className="btn" href="/games">
                Voir les jeux
              </Link>
              <Link className="btn secondary" href="/streamers">
                Découvrir les streamers
              </Link>
              <a
                className="btn ghost"
                href="https://discord.gg/mMgaaytKgJ"
                target="_blank"
                rel="noreferrer"
                aria-label="Rejoindre le Discord FRT"
              >
                Rejoindre le Discord
              </a>
            </div>

            <div className="microcopy">
              <span className="pill">Synchronisé avec FRT Bot</span>
              <span className="pill">Jeux ARK Evolved & Ascended</span>
              <span className="pill">Communauté francophone</span>
            </div>
          </div>

          <div className="hero-card">
            <div className="rows">
              <div className="stat">
                <span className="dot" />
                <div>
                  <div className="muted">FRT Bot</div>
                  <div>Arrive bientôt : commandes Discord + outils communauté.</div>
                </div>
              </div>
              <div className="stat">
                <span className="dot" />
                <div>
                  <div className="muted">Jeux phénix</div>
                  <div>ARK: Survival Evolved · ARK: Survival Ascended.</div>
                </div>
              </div>
              <div className="stat">
                <span className="dot" />
                <div>
                  <div className="muted">Communauté</div>
                  <div>Streamers, events, guides, entraide en vocal.</div>
                </div>
              </div>
            </div>
            <div className="tag-row">
              <span className="tag">Liens Steam directs</span>
              <span className="tag">IPs visibles</span>
              <span className="tag">Discord FRT</span>
            </div>
          </div>
        </div>
      </section>
<!-- BANNER D'URGENCE - À SUPPRIMER QUAND LE BOT REVIENT -->
<div style="
    background: linear-gradient(135deg, #ff6b6b, #ee5a24);
    color: white;
    padding: 1rem;
    text-align: center;
    font-weight: bold;
    border-radius: 8px;
    margin: 1rem 0;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
">
    🚨 **ALERTE URGENCE** 🚨<br>
    Le bot Discord FRT est temporairement hors ligne.<br>
    Les fonctionnalités automatiques sont indisponibles.<br>
    <a href="#urgence" style="color: white; text-decoration: underline;">Voir les informations d'urgence</a>
</div>

<section id="urgence" class="shell" style="margin-top: 2rem;">
    <h2 class="section-head">🚨 Mode Urgence Activé</h2>
    <p class="section-sub">
        Le bot Discord est actuellement hors service. Voici les informations essentielles :
    </p>

    <article class="card">
        <h3>✅ Fonctionnalités Disponibles</h3>
        <ul class="list">
            <li>Statut des serveurs ARK (mis à jour manuellement)</li>
            <li>Informations sur les jeux et streamers</li>
            <li>Leaderboard (mis à jour manuellement)</li>
            <li>Site web entièrement fonctionnel</li>
        </ul>
    </article>

    <article class="card" style={{ marginTop: 16 }}>
        <h3>🔄 Mises à Jour Manuelles</h3>
        <p>
            Les statuts des serveurs et le leaderboard sont vérifiés et mis à jour manuellement
            par l'équipe FRT. Les données peuvent avoir un léger retard.
        </p>
    </article>

    <article class="card" style={{ marginTop: 16 }}>
        <h3>📢 Communication</h3>
        <ul class="list">
            <li>Restez informés via ce site web</li>
            <li>Contactez l'équipe sur Discord pour les urgences</li>
            <li>Suivez les annonces dans #général</li>
        </ul>
    </article>

    <article class="card" style={{ marginTop: 16 }}>
        <h3>🎮 Serveurs de Jeu</h3>
        <p>
            Les serveurs ARK restent opérationnels. Utilisez les liens de connexion directe :
        </p>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 1rem;">
            <a class="btn" href="steam://connect/46.251.242.49:11778/FRTUNITY">
                🦕 ARK Evolved
            </a>
            <a class="btn" href="steam://connect/37.10.100.8:5170">
                🦕 ARK Ascended
            </a>
        </div>
    </article>
</section>
<!-- FIN BANNER D'URGENCE -->


      <section className="shell">
        <div className="grid">
          <article className="card">
            <h3>Jeux FRT</h3>
            <p>
              Retrouvez nos jeux actifs, les règles et les accès rapides pour rejoindre
              nos serveurs.
            </p>
            <Link className="btn" href="/games">
              Accéder aux jeux
            </Link>
          </article>

          <article className="card">
            <h3>Streamers officiels</h3>
            <p>
              Encourage les créateurs de la communauté FRT. Twitch, YouTube… toutes les
              chaînes sont listées ici.
            </p>
            <Link className="btn secondary" href="/streamers">
              Voir les chaînes
            </Link>
          </article>

          <article className="card">
            <h3>FRT Bot & histoire</h3>
            <p>
              Découvre l&apos;histoire de FRT et les prochaines fonctionnalités du bot.
            </p>
            <Link className="btn ghost" href="/history">
              Découvrir l&apos;histoire FRT
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}

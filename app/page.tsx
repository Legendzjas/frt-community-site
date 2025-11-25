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
              serveurs, Discord et vos commandes en jeu.
            </p>

            <ul className="list">
              <li>Infos à jour sur nos serveurs ARK et futurs projets.</li>
              <li>Cartes des streamers FRT à soutenir en live.</li>
              <li>Accès rapide : Discord, liens Steam, et bientôt le bot.</li>
            </ul>

            <div className="cta-row">
              <Link className="btn" href="/servers">
                Voir les serveurs
              </Link>
              <Link className="btn secondary" href="/streamers">
                Découvrir les streamers
              </Link>
              <a
                className="btn ghost"
                href="https://discord.gg/mMgaaytKgJ"
                target="_blank"
                rel="noreferrer"
              >
                Rejoindre le Discord
              </a>
            </div>

            <div className="microcopy">
              <span className="pill">Synchronisé avec FRT Bot</span>
              <span className="pill">Serveurs ARK Evolved & Ascended</span>
              <span className="pill">Communauté francophone</span>
            </div>
          </div>

          <div className="hero-card">
            <div className="rows">
              <div className="stat">
                <span className="dot" />
                <div>
                  <div className="muted">FRT Bot</div>
                  <div>Arrive bientôt : commandes Discord + outils serveurs.</div>
                </div>
              </div>
              <div className="stat">
                <span className="dot" />
                <div>
                  <div className="muted">Serveurs phénix</div>
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

      <section className="shell">
        <div className="grid">
          <article className="card">
            <h3>Serveurs FRT</h3>
            <p>
              Suis l&apos;état de nos serveurs et connecte-toi en un clic sur PC via Steam.
              Les IPs et cartes sont toujours à jour.
            </p>
            <Link className="btn" href="/servers">
              Accéder aux serveurs
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
            <h3>FRT Bot & ressources</h3>
            <p>
              Les liens rapides pour rejoindre Discord, lancer les jeux et (bientôt) les
              commandes du bot FRT.
            </p>
            <Link className="btn ghost" href="/links">
              Liens rapides
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}

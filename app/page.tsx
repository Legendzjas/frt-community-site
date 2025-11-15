export default function Home() {
  return (
    <>
      {/* HERO volcanique avec ton fond Hero.png (géré dans globals.css) */}
      <section className="hero">
        <div
          className="container"
          style={{ maxWidth: "900px", margin: "0 auto" }}
        >
          <span className="badge">🔥 Communauté FRT</span>

          <h1 className="title">
            La fraternité <span className="phoenix-text">renaît des cendres</span>.
          </h1>

          <p className="lead">
            Bienvenue chez <strong>Fraternity - FRT</strong> !
            <br />
            Voici notre site spécifique pour notre communauté :
          </p>

          <ul style={{ marginTop: 8, paddingLeft: 20 }}>
            <li>Informations</li>
            <li>Les streamers de notre communauté</li>
            <li>Les accès à nos serveurs</li>
          </ul>

          <p className="lead" style={{ marginTop: 10 }}>
            À chaque nouveau membre nous grandissons !
            <br />
            <em>« Là où d’autres tombent, nous renaissons »</em>
          </p>

          <div
            style={{
              display: "flex",
              gap: 12,
              marginTop: 18,
              flexWrap: "wrap",
            }}
          >
            <a className="btn" href="/servers">
              Voir les serveurs
            </a>
            <a className="btn ghost" href="/streamers">
              Découvrir les streamers
            </a>
            <a className="btn ghost" href="/history">
              Découvre l&apos;histoire de FRT
            </a>
          </div>
        </div>
      </section>

      {/* Cartes d’accès */}
      <section style={{ paddingTop: 32 }}>
        <div className="grid">
          {/* Serveurs */}
          <article className="card">
            <h3>🎮 Serveurs</h3>
            <p>
              Consulte l’état de nos serveurs FRT et les informations importantes
              (IP, ports, type de serveur…).
            </p>
            <a className="btn" href="/servers">
              Voir le suivi
            </a>
          </article>

          {/* Streamers */}
          <article className="card">
            <h3>📺 Streamers</h3>
            <p>
              Découvre les streamers de la communauté FRT et soutiens-les en live.
            </p>
            <a className="btn" href="/streamers">
              Voir les chaînes
            </a>
          </article>

          {/* Discord (ancien liens rapides) */}
          <article className="card">
            <h3>💬 Rejoindre Discord</h3>
            <p>
              Rejoins le serveur Discord FRT pour discuter, suivre les annonces
              et participer aux événements.
            </p>
            <a
              className="btn"
              href="https://discord.gg/mMgaaytKgJ"
              target="_blank"
              rel="noreferrer"
            >
              Rejoindre FRT
            </a>
          </article>
        </div>
      </section>
    </>
  );
}

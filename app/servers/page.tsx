export default function ServersPage() {
  return (
    <section style={{ paddingTop: 32, paddingBottom: 32 }}>
      <h1 className="title" style={{ fontSize: "2.2rem", marginBottom: 12 }}>
        Serveurs FRT
      </h1>

      <p className="lead">
        Voici les serveurs de la communauté FRT. Tu trouveras ici les
        informations principales pour te connecter.
      </p>

      <div className="grid" style={{ marginTop: 24 }}>
        {/* ARK: Survival Evolved */}
        <article className="card">
          <h2 style={{ marginTop: 0 }}>🦖 ARK: Survival Evolved</h2>
          <p>
            Serveur FRT sur <strong>ARK: Survival Evolved</strong>, pensé pour
            jouer ensemble dans la bonne humeur.
          </p>
          <ul style={{ marginTop: 8, paddingLeft: 18 }}>
            <li>IP : <code>46.251.242.49</code></li>
            <li>Port jeu : <code>11777</code></li>
            <li>Query port : <code>11778</code></li>
            <li>Carte actuelle : Fjordur</li>
          </ul>
          <p style={{ marginTop: 8 }}>
            Connexion rapide via Steam (PC) :
          </p>
          <a
            className="btn"
            href="steam://connect/46.251.242.49:11778/FRTUNITY"
          >
            Connexion rapide Steam
          </a>
        </article>

        {/* ARK: Survival Ascended */}
        <article className="card">
          <h2 style={{ marginTop: 0 }}>🦕 ARK: Survival Ascended</h2>
          <p>
            Serveur FRT sur <strong>ARK: Survival Ascended</strong>.  
            Pour le moment, Nitrado ne fournit pas de lien de connexion rapide,
            mais tu peux te connecter avec les informations ci-dessous.
          </p>
          <ul style={{ marginTop: 8, paddingLeft: 18 }}>
            <li>IP : <code>37.10.115.184</code></li>
            <li>Port jeu : <code>8140</code></li>
            <li>Carte actuelle : Ragnarok_WP</li>
          </ul>
          <p style={{ marginTop: 8 }}>
            Depuis ARK Ascended, recherche le serveur par IP/port ou via la
            liste des serveurs si tu l&apos;as en favoris.
          </p>
        </article>
      </div>
    </section>
  );
}

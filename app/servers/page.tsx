export default function ServersPage() {
  return (
    <section style={{ paddingTop: 32, paddingBottom: 32 }}>
      <h1 className="title" style={{ fontSize: "2.2rem", marginBottom: 12 }}>
        Serveurs FRT
      </h1>

      <p className="lead">
        Voici les serveurs de la communauté <strong>FRT</strong>. Tu trouveras
        ici les informations principales et des boutons de connexion rapide
        lorsque c&apos;est possible.
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
            <li>Nom serveur : <strong>FRTUNITY</strong></li>
            <li>IP : <code>46.251.242.49</code></li>
            <li>Port jeu : <code>11777</code></li>
            <li>Query port : <code>11778</code></li>
            <li>Carte actuelle : Fjordur</li>
          </ul>

          <p style={{ marginTop: 8 }}>
            💡 Sur PC (Steam), tu peux utiliser le bouton ci-dessous :
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
            Serveur FRT sur <strong>ARK: Survival Ascended</strong> (Nitrado).
          </p>
          <ul style={{ marginTop: 8, paddingLeft: 18 }}>
            <li>Nom serveur : <strong>FRATERNITY</strong></li>
            <li>IP : <code>37.10.115.184</code></li>
            <li>Port jeu : <code>8140</code></li>
            <li>Carte actuelle : Ragnarok_WP</li>
          </ul>

          <p style={{ marginTop: 8 }}>
            🔗 ASA ne propose pas toujours un lien &quot;officiel&quot; comme Evolved,
            mais sur PC via Steam tu peux tester ce bouton de connexion directe :
          </p>

          <a
            className="btn"
            href="steam://connect/37.10.115.184:8140"
          >
            Connexion Steam (Ascended)
          </a>

          <p style={{ marginTop: 8, fontSize: "0.9rem", opacity: 0.85 }}>
            Si le bouton ne fonctionne pas, ajoute le serveur via l&apos;onglet
            &quot;Favoris&quot; de Steam ou directement depuis la liste de serveurs
            en utilisant l&apos;IP et le port ci-dessus.
          </p>
        </article>
      </div>
    </section>
  );
}

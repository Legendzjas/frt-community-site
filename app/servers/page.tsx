import Image from "next/image";

export default function ServersPage() {
  return (
    <section className="shell">
      <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
        <Image
          src="/frt-logo.gif"
          alt="Logo FRT"
          width={44}
          height={44}
          priority
          unoptimized
        />
        <div>
          <h1 className="section-head" style={{ margin: 0 }}>
            Serveurs FRT
          </h1>
          <p className="section-sub" style={{ margin: "4px 0 0" }}>
            Infos, IP et boutons de connexion directe. Si Steam est installé sur ton PC,
            clique et rejoins la partie en quelques secondes.
          </p>
        </div>
      </div>

      <div className="grid">
        <article className="card">
          <h2>ARK: Survival Evolved</h2>
          <p>
            Serveur pensé pour jouer ensemble dans une ambiance fraternelle. Sauvegardes
            régulières et règles simples pour rester fair-play.
          </p>
          <ul className="list">
            <li>Nom : <strong>FRTUNITY</strong></li>
            <li>IP : <code>46.251.242.49</code></li>
            <li>Port jeu : <code>11777</code></li>
            <li>Query port : <code>11778</code></li>
            <li>Carte actuelle : Fjordur</li>
          </ul>
          <p className="muted" style={{ marginTop: 12 }}>
            Sur PC (Steam), tu peux utiliser le bouton ci-dessous :
          </p>
          <a className="btn" href="steam://connect/46.251.242.49:11778/FRTUNITY">
            Connexion rapide Steam
          </a>
        </article>

        <article className="card">
          <h2>ARK: Survival Ascended</h2>
          <p>Serveur Nitrado FRT pour la nouvelle génération d&apos;ARK.</p>
          <ul className="list">
            <li>Nom : <strong>FRATERNITY</strong></li>
            <li>IP : <code>37.10.100.8</code></li>
            <li>Port jeu : <code>5170</code></li>
            <li>Carte actuelle : TheIsland_WP (profil Ragnarok prêt)</li>
            <li>Mot de passe serveur : <strong>aucun</strong> (connexion ouverte)</li>
          </ul>

          <p className="muted" style={{ marginTop: 12 }}>
            ASA n&apos;a pas toujours un lien officiel, mais sur PC via Steam tu peux
            tenter la connexion directe :
          </p>
          <a className="btn" href="steam://connect/37.10.100.8:5170">
            Connexion Steam (Ascended)
          </a>
          <p className="muted" style={{ marginTop: 10 }}>
            Si le bouton ne fonctionne pas : ajoute l&apos;IP dans l&apos;onglet
            <em> Favoris</em> de Steam puis rejoins depuis la liste des serveurs.
          </p>
        </article>
      </div>
    </section>
  );
}

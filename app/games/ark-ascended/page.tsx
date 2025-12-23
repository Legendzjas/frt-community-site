export default function ArkAscendedPage() {
  return (
    <section className="shell">
      <h1 className="section-head">ARK: Survival Ascended</h1>
      <p className="section-sub">
        La nouvelle version d&apos;ARK avec des graphismes améliorés, un gameplay
        modernisé et des cartes retravaillées.
      </p>

      <article className="card">
        <h3>Fonctionnement du jeu</h3>
        <p>
          Même ADN que Evolved : survie, craft, base building et dinos à dompter, avec
          une expérience visuelle et technique renforcée. L&apos;entraide et la stratégie
          de tribu restent au cœur du gameplay.
        </p>
        <ul className="list">
          <li>Genre : Survie / Craft / Monde ouvert.</li>
          <li>Objectif : progresser, dompter, construire et rivaliser.</li>
          <li>Mode : Multijoueur coopératif.</li>
        </ul>
      </article>

      <article className="card" style={{ marginTop: 16 }}>
        <h3>Prix</h3>
        <p>
          <strong>Payant</strong> (Steam / consoles).
        </p>
      </article>

      <article className="card" style={{ marginTop: 16 }}>
        <h3>Serveur FRT</h3>
        <ul className="list">
          <li>Nom : <strong>FRATERNITY</strong></li>
          <li>IP : <code>37.10.100.8</code></li>
          <li>Port jeu : <code>5170</code></li>
          <li>Carte actuelle : <strong>Ragnarok</strong> (slot Ragnarok_WP)</li>
          <li>Mot de passe serveur : <strong>FRT</strong></li>
        </ul>

        <p className="muted" style={{ marginTop: 10 }}>
          Pas de connexion directe officielle. Ajoute l&apos;IP et le port dans
          l&apos;onglet <em>Favoris</em> de Steam, puis rejoins le serveur depuis la liste.
          Si un mot de passe est demandé en jeu, saisis : <strong>FRT</strong>.
        </p>
      </article>
    </section>
  );
}

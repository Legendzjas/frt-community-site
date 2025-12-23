export default function ArkEvolvedPage() {
  return (
    <section className="shell">
      <h1 className="section-head">ARK: Survival Evolved</h1>
      <p className="section-sub">
        Survie, craft, base building et dinos à dompter. Une aventure coopérative où
        l&apos;entraide fait toute la différence.
      </p>

      <article className="card">
        <h3>Fonctionnement du jeu</h3>
        <p>
          Explore une île sauvage, récolte des ressources, fabrique ton équipement et
          dompte des créatures pour survivre. Le jeu met l&apos;accent sur la progression
          en tribu, la stratégie et la coopération.
        </p>
        <ul className="list">
          <li>Genre : Survie / Craft / Monde ouvert.</li>
          <li>Objectif : évoluer, dompter, construire et défendre sa base.</li>
          <li>Mode : Multijoueur coopératif avec tribus.</li>
        </ul>
      </article>

      <article className="card" style={{ marginTop: 16 }}>
        <h3>Prix</h3>
        <p>
          <strong>Gratuit</strong> (serveur FRT accessible sans frais supplémentaires).
        </p>
      </article>

      <article className="card" style={{ marginTop: 16 }}>
        <h3>Serveur FRT</h3>
        <ul className="list">
          <li>Nom : <strong>FRTUNITY</strong></li>
          <li>IP : <code>46.251.242.49</code></li>
          <li>Port jeu : <code>11777</code></li>
          <li>Query port : <code>11778</code></li>
          <li>Carte actuelle : Fjordur</li>
        </ul>

        <p className="muted" style={{ marginTop: 10 }}>
          Sur PC (Steam), tu peux utiliser la connexion directe :
        </p>
        <a className="btn" href="steam://connect/46.251.242.49:11778/FRTUNITY">
          Connexion rapide Steam
        </a>
      </article>
    </section>
  );
}

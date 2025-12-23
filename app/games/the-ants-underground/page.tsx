import Link from "next/link";

export default function TheAntsPage() {
  return (
    <section className="shell">
      <h1 className="section-head">The Ant&apos;s Underground</h1>
      <p className="section-sub">
        Jeu mobile de stratégie et de gestion : construis ta colonie, développe ton
        territoire et noue des alliances pour dominer ton serveur.
      </p>

      <article className="card">
        <h3>Fonctionnement du jeu</h3>
        <p>
          Tu diriges une colonie de fourmis, tu récoltes des ressources, tu améliores tes
          structures et tu mènes des offensives. Diplomatie et coordination d&apos;alliance
          sont essentielles pour tenir face aux autres factions.
        </p>
        <ul className="list">
          <li>Genre : Stratégie / Gestion / Alliance.</li>
          <li>Objectif : développer la colonie et gagner en puissance.</li>
          <li>Plateforme : Mobile.</li>
        </ul>
      </article>

      <article className="card" style={{ marginTop: 16 }}>
        <h3>Recrutement alliance PHF (serveur 21)</h3>
        <p>
          Si tu veux rejoindre l&apos;aventure, contacte-nous sur Discord pour une
          intégration dans l&apos;alliance <strong>PHF</strong> (serveur 21).
        </p>
        <Link className="btn" href="https://discord.gg/mMgaaytKgJ">
          Rejoindre le Discord
        </Link>
      </article>
    </section>
  );
}

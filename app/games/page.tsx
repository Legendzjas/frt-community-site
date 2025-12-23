import Link from "next/link";

export default function GamesPage() {
  return (
    <section className="shell">
      <h1 className="section-head">Jeux FRT</h1>
      <p className="section-sub">
        Choisis un jeu pour voir les infos, règles et accès rapides aux serveurs FRT.
      </p>

      <div className="grid">
        <article className="card">
          <h3>ARK: Survival Evolved</h3>
          <p>
            Survie, craft, dinos à dompter et progression en tribu. Serveur FRT prêt à
            rejoindre en un clic sur PC.
          </p>
          <Link className="btn" href="/games/ark-evolved">
            Voir la fiche
          </Link>
        </article>

        <article className="card">
          <h3>ARK: Survival Ascended</h3>
          <p>
            Nouvelle génération d&apos;ARK : graphismes améliorés, système modernisé et
            carte Ragnarok.
          </p>
          <Link className="btn secondary" href="/games/ark-ascended">
            Voir la fiche
          </Link>
        </article>

        <article className="card">
          <h3>The Ant&apos;s Underground</h3>
          <p>
            Stratégie mobile : colonie, alliances, guerres et diplomatie. Recrutement
            possible sur notre alliance PHF (serveur 21).
          </p>
          <Link className="btn ghost" href="/games/the-ants-underground">
            Voir la fiche
          </Link>
        </article>
      </div>
    </section>
  );
}

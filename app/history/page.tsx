export default function HistoryPage() {
  return (
    <section className="shell">
      <h1 className="section-head">L&apos;histoire de FRT</h1>
      <p className="section-sub">
        Fraternity est née autour du jeu en ligne avec une idée simple : créer un endroit
        où chacun peut progresser, s&apos;entraider et jouer dans une ambiance saine.
      </p>

      <p className="lead">
        Au fil des saisons et des serveurs, l&apos;esprit est resté le même : rester
        soudés, même quand les choses deviennent difficiles. De là est né notre slogan :
      </p>

      <p style={{ marginTop: 10, fontStyle: "italic", fontWeight: 700 }}>
        « Là où d&apos;autres tombent, nous renaissons »
      </p>

      <p style={{ marginTop: 16 }}>
        Aujourd&apos;hui, FRT grandit grâce à chaque membre — joueur occasionnel,
        compétiteur ou simple passionné. Cette page rassemblera bientôt les grandes
        étapes de notre histoire : anciens serveurs, alliances, événements marquants,
        anecdotes de la communauté et futurs projets avec le FRT Bot.
      </p>

      <p style={{ marginTop: 16 }}>
        En attendant, passe nous voir sur Discord ou en jeu : la fraternité s&apos;écrit
        avec vous.
      </p>

      <a
        className="btn"
        href="https://discord.gg/mMgaaytKgJ"
        target="_blank"
        rel="noreferrer"
        style={{ marginTop: 20, display: "inline-flex" }}
      >
        Rejoindre la communauté FRT
      </a>
    </section>
  );
}

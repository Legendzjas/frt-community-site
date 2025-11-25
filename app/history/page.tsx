export default function HistoryPage() {
  return (
    <section className="shell">
      <h1 className="section-head">L&apos;histoire de FRT</h1>
      <p className="section-sub">
        Un parcours fait de compétitions, d’alliances, de trahisons et de renaissances.
        Là où d’autres tombent, nous renaissons.
      </p>

      <article className="card" style={{ marginTop: 12 }}>
        <h3>Avant FRT : Cyborg DG et les premières batailles</h3>
        <p>
          Tout commence sur Rainbow Six Siege sous le nom <strong>Cyborg DG</strong>.
          Nous cherchons la compétition, mais jamais au détriment du plaisir et du partage.
          Puis vient <strong>Last Empire War Z</strong> : petite communauté, mêmes valeurs,
          mais l’envie d’ailleurs grandit.
        </p>
        <p>
          Sur <strong>Conqueror’s Blade</strong>, on franchit un cap. Les alliances se
          multiplient, on automatise nos tâches, on apprend la diplomatie et la gestion
          de groupes plus larges. La communauté s’élargit, l’organisation se muscle.
        </p>
      </article>

      <article className="card" style={{ marginTop: 12 }}>
        <h3>Naissance de la Fraternity sur The Ant&apos;s</h3>
        <p>
          Nous rejoignons <strong>The Ant’s Underground</strong> et l’alliance
          <strong> FRT</strong> (serveur 50). Les leaders défilent, les guerres approchent,
          et le chaos menace : rivalités, trahisons. Une faction dissidente crée la DOD.
          Il reste à peine 30&nbsp;% des joueurs, mais c’est l’étincelle.
        </p>
        <p>
          Nous reprenons l’alliance, reconstruisons pierre après pierre. On rappelle les
          anciens, on recrute des combattants, on remonte en puissance. Trois alliances
          FRT voient le jour, plus de 200 membres : la Fraternity devient un pilier du
          serveur et propose des solutions pour stabiliser la diplomatie.
        </p>
      </article>

      <article className="card" style={{ marginTop: 12 }}>
        <h3>Rogue wars, exil et voyages</h3>
        <p>
          Certains refusent la paix et jouent les rogues, piétinant les accords. Après des
          mois de conflits, nous choisissons d’explorer d’autres serveurs, d’autres
          communautés. FRT voyage, gagne des événements, se réinvente à chaque escale.
        </p>
        <p>
          Le nom FRT disparaît peut-être de The Ant’s, mais l’esprit reste dans chaque
          joueur qui continue l’aventure : entraide, persévérance, fraternité.
        </p>
      </article>

      <article className="card" style={{ marginTop: 12 }}>
        <h3>Aujourd’hui : la flamme continue</h3>
        <p>
          Fraternity vit encore dans nos nouveaux serveurs de jeux, nos alliances et nos
          outils (comme le futur FRT Bot). Nous sommes nés plusieurs fois, et chaque
          renaissance nous a rendus plus forts. Parce que nous croyons que :
        </p>
        <p style={{ fontStyle: "italic", fontWeight: 700 }}>
          « Là où d’autres tombent, nous renaissons. »
        </p>
      </article>

      <div style={{ marginTop: 18 }}>
        <a
          className="btn"
          href="https://discord.gg/mMgaaytKgJ"
          target="_blank"
          rel="noreferrer"
        >
          Rejoindre la communauté FRT
        </a>
      </div>
    </section>
  );
}

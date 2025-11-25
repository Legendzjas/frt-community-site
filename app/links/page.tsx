export default function Links() {
  const links = [
    {
      label: "Lancer ARK: Survival Evolved (Steam)",
      href: "steam://rungameid/346110",
      description: "Ouvre ARK via Steam sur PC. Assure-toi d’avoir Steam lancé.",
    },
    {
      label: "Serveur Discord FRT",
      href: "https://discord.gg/mMgaaytKgJ",
      description: "Rejoins la communauté, les annonces et les salons vocaux.",
    },
  ];

  return (
    <section className="shell">
      <h1 className="section-head">Liens rapides</h1>
      <p className="section-sub">
        Les liens <code>steam://</code> fonctionnent si Steam est installé sur la
        machine. Ajoute cette page en favori pour garder tout sous la main.
      </p>

      <div className="grid">
        {links.map((link) => (
          <article key={link.href} className="card">
            <h3>{link.label}</h3>
            <p>{link.description}</p>
            <a className="btn secondary" href={link.href} target="_blank" rel="noreferrer">
              Ouvrir
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

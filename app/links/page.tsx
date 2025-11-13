export default function Links(){
  const links = [
    { label: "Lancer Steam (ARK)", href: "steam://rungameid/346110" },
    { label: "Serveur Discord PHF", href: "https://discord.gg/xxxxxxx" }
  ];
  return (
    <section>
      <h1>Liens rapides</h1>
      <p>Les liens <code>steam://</code> fonctionnent si Steam est installé sur la machine.</p>
      <ul>
        {links.map((l,i)=>(
          <li key={i}><a href={l.href}>{l.label}</a></li>
        ))}
      </ul>
    </section>
  );
}

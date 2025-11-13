export default function Home(){
  return (
    <section>
      <h1>Bienvenue sur la communauté PHF / FRT</h1>
      <p>Suivi de nos serveurs, mise en avant des streamers et liens rapides (Steam://…).</p>
      <div className="grid" style={{marginTop:16}}>
        <article className="card"><h3>🎮 Serveurs</h3><p>Consulte l'état des serveurs et le nombre de joueurs en ligne.</p><a className="btn" href="/servers">Voir le suivi</a></article>
        <article className="card"><h3>📺 Streamers</h3><p>Découvre nos créateurs de contenu (Twitch / YouTube).</p><a className="btn" href="/streamers">Voir les chaînes</a></article>
        <article className="card"><h3>⚡ Liens rapides</h3><p>Lance tes jeux et outils en un clic (Steam, Discord, etc.).</p><a className="btn" href="/links">Ouvrir</a></article>
      </div>
    </section>
  );
}

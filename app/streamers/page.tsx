async function getStreamers(){
  const base = process.env.BASE_URL || "";
  const res = await fetch(base + "/streamers.json", { cache: "no-store" });
  return res.json();
}

export default async function Streamers(){
  const list = await getStreamers();
  return (
    <section>
      <h1>Nos streamers</h1>
      <div className="grid" style={{marginTop:16}}>
        {list.map((s:any, i:number)=>(
          <article key={i} className="card">
            <h3>{s.name}</h3>
            <p>Plateforme : {s.platform}</p>
            <a className="btn" href={s.url} target="_blank" rel="noopener">Voir la chaîne</a>
          </article>
        ))}
      </div>
    </section>
  );
}

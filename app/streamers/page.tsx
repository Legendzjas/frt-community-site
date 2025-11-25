import streamersData from "../../public/streamers.json";

type Streamer = (typeof streamersData)[number];

export const revalidate = 120;

export default function Streamers() {
  const streamers = streamersData as Streamer[];

  return (
    <section className="shell">
      <h1 className="section-head">Nos streamers</h1>
      <p className="section-sub">
        Soutiens les créateurs FRT sur leur plateforme préférée. Clique et rejoins le
        live directement.
      </p>

      {streamers.length === 0 ? (
        <p className="muted">
          Aucun streamer n&apos;est renseigné pour le moment. Ajoute des entrées dans
          <code> public/streamers.json </code> pour les afficher ici.
        </p>
      ) : (
        <div className="grid" style={{ marginTop: 12 }}>
          {streamers.map((streamer) => (
            <article key={streamer.url} className="card">
              <h3>{streamer.name}</h3>
              <p>Plateforme : {streamer.platform}</p>
              <a
                className="btn"
                href={streamer.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir la chaîne
              </a>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

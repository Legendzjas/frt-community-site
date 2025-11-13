"use client";
import { useEffect, useState } from "react";

type ServerInfo = {
  name: string;
  online: boolean;
  players?: number;
  maxPlayers?: number;
  map?: string;
  ping?: number;
  error?: string;
};

export default function Servers(){
  const [data, setData] = useState<ServerInfo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    fetch("/api/server-status")
      .then(r=>r.json())
      .then(j=>{
        setData(j.servers || []);
        setLoading(false);
      })
      .catch(()=> setLoading(false));
  },[]);

  return (
    <section>
      <h1>Suivi des serveurs</h1>
      <small>En local : interroge directement les serveurs via UDP. Sur Vercel : consomme un JSON externe (voir README).</small>
      {loading ? <p>Chargement…</p> : (
        <div className="grid" style={{marginTop:16}}>
          {data.map((s, i)=>(
            <article key={i} className="card">
              <h3>{s.name}</h3>
              <p>{s.online ? "🟢 En ligne" : "🔴 Hors ligne"}</p>
              {s.online ? (
                <>
                  {typeof s.players==="number" && <p>Joueurs : {s.players}/{s.maxPlayers ?? "?"}</p>}
                  {s.map && <p>Carte : {s.map}</p>}
                  {typeof s.ping==="number" && <p>Ping : {s.ping} ms</p>}
                </>
              ) : s.error ? <p>{s.error}</p> : null}
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

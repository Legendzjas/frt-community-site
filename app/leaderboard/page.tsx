"use client";

import { useEffect, useMemo, useState } from "react";

type Entry = {
  user_id: string;
  display_name: string;
  rank: number;
  points: number;
  joined_at: string;
  avatar_url?: string;
};

const LEADERBOARD_URL =
  process.env.NEXT_PUBLIC_LEADERBOARD_URL || "https://example.com/leaderboard.json";

export default function LeaderboardPage() {
  const [data, setData] = useState<Entry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastFetch, setLastFetch] = useState<Date | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(LEADERBOARD_URL, { cache: "no-store" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      setData(Array.isArray(json) ? json : json?.entries ?? []);
      setLastFetch(new Date());
    } catch (err: any) {
      setError(err?.message || "Impossible de récupérer le classement.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const id = setInterval(fetchData, 180_000); // refresh toutes les 3 minutes
    return () => clearInterval(id);
  }, []);

  const formatted = useMemo(
    () =>
      data.map((e) => ({
        ...e,
        joined: formatDate(e.joined_at),
      })),
    [data]
  );

  return (
    <section className="shell">
      <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
        <h1 className="section-head" style={{ margin: 0 }}>
          Classement Discord
        </h1>
        <button
          className="btn secondary"
          onClick={fetchData}
          disabled={loading}
          style={{ padding: "8px 12px", fontSize: 14 }}
        >
          Rafraîchir
        </button>
        {lastFetch && (
          <span className="muted" style={{ fontSize: 12 }}>
            Mis à jour : {lastFetch.toLocaleTimeString()}
          </span>
        )}
      </div>

      {loading ? (
        <p className="muted" style={{ marginTop: 12 }}>
          Chargement du classement...
        </p>
      ) : error ? (
        <p style={{ marginTop: 12, color: "#fca5a5" }}>
          Erreur : {error} — vérifie l&apos;URL du leaderboard.
        </p>
      ) : (
        <div className="card" style={{ marginTop: 16, overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 520 }}>
            <thead>
              <tr style={{ textAlign: "left" }}>
                <th style={thStyle}>#</th>
                <th style={thStyle}>Pseudo</th>
                <th style={thStyle}>Rang évolutif Discord</th>
                <th style={thStyle}>Nombre de points</th>
                <th style={thStyle}>Date de join FRT</th>
              </tr>
            </thead>
            <tbody>
              {formatted.map((entry) => (
                <tr key={entry.user_id} style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  <td style={tdStyle}>{entry.rank ?? "-"}</td>
                  <td style={{ ...tdStyle, display: "flex", alignItems: "center", gap: 10 }}>
                    {entry.avatar_url ? (
                      <img
                        src={entry.avatar_url}
                        alt=""
                        width={28}
                        height={28}
                        style={{ borderRadius: "50%", objectFit: "cover" }}
                      />
                    ) : null}
                    <span>{entry.display_name || "Inconnu"}</span>
                  </td>
                  <td style={tdStyle}>{entry.rank ?? "-"}</td>
                  <td style={tdStyle}>{entry.points?.toLocaleString("fr-FR") ?? "0"}</td>
                  <td style={tdStyle}>{entry.joined ?? "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

const thStyle: React.CSSProperties = {
  padding: "10px 8px",
  fontWeight: 700,
  fontSize: "0.9rem",
};

const tdStyle: React.CSSProperties = {
  padding: "10px 8px",
  fontSize: "0.95rem",
};

function formatDate(iso: string) {
  if (!iso) return "-";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("fr-FR");
}

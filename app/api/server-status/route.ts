import { NextResponse } from "next/server";
import fs from "node:fs/promises";

export async function GET(){
  try{
    // Mode Vercel: utiliser un JSON externe (pas d'UDP dispo)
    const statusUrl = process.env.STATUS_JSON_URL;
    if(statusUrl){
      const r = await fetch(statusUrl, { cache: "no-store" });
      const j = await r.json();
      return NextResponse.json(j);
    }

    // Mode local: si GAMEDIG_ENABLED=true, on interroge en UDP
    if(process.env.GAMEDIG_ENABLED === "true"){
      const Gamedig = (await import("gamedig")).default;
      const path = process.env.SERVERS_JSON || "./public/servers.json";
      const list = JSON.parse(await fs.readFile(path, "utf8"));

      const results = await Promise.all(list.map(async (s:any)=>{
        try{
          const res = await Gamedig.query({ type: s.type, host: s.host, port: s.port });
          return {
            name: s.name,
            online: true,
            map: res.map,
            players: res.players?.length || 0,
            maxPlayers: res.maxplayers || res.maxPlayers || 0,
            ping: res.ping
          };
        }catch(e:any){
          return { name: s.name, online: false, error: e?.message || "offline" };
        }
      }));

      return NextResponse.json({ servers: results });
    }

    // Fallback: renvoyer la liste sans statut (hors ligne)
    const path = process.env.SERVERS_JSON || "./public/servers.json";
    const list = JSON.parse(await fs.readFile(path, "utf8"));
    return NextResponse.json({ servers: list.map((s:any)=>({ name: s.name, online: false })) });
  }catch(e:any){
    return NextResponse.json({ error: e?.message || "failed" }, { status: 500 });
  }
}

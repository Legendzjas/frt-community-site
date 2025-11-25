# FRT — Community Site

Site communautaire gaming avec Next.js. Deux modes de fonctionnement :
- **Local** : suivi des serveurs via `gamedig` (UDP).
- **Vercel** : pas d’UDP, on consomme un JSON externe (`STATUS_JSON_URL`) ou on affiche des infos statiques.

## Lancer en local
```bash
npm i
# installe aussi gamedig si tu veux le suivi en local
npm i gamedig@4
npm run dev
# http://localhost:3000
```

Variables (optionnelles) dans `.env.local` :
```
GAMEDIG_ENABLED=true
SERVERS_JSON=./public/servers.json
STATUS_JSON_URL=
BASE_URL=http://localhost:3000
```

## Déploiement Vercel
1. `git init && git add . && git commit -m "init"` puis push sur GitHub.
2. Importer le repo sur Vercel — `Build command: npm run build`, `Output: .next` (auto).
3. Ne pas activer `GAMEDIG_ENABLED` sur Vercel.
4. (Optionnel) Fournir `STATUS_JSON_URL` vers un JSON accessible publiquement (Cloudflare, gist, mini-VM…).

## CI / déploiement auto
- Un workflow GitHub Actions `Build and Trigger Deploy` est présent (`.github/workflows/deploy.yml`).
- Il s’exécute sur push `main/master` et sur déclenchement manuel, installe, puis lance `npm run build`.
- Si tu ajoutes le secret `VERCEL_DEPLOY_HOOK`, le workflow appellera automatiquement ce hook pour déclencher un déploiement Vercel après chaque build réussi.

## JSONs
- `public/servers.json` — liste des serveurs à suivre.
- `public/streamers.json` — liste des streamers.
- Les liens `steam://` sont dans la page `/links`.

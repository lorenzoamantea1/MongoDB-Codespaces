# 1. Crea il devcontainer (se non già fatto)

1. Premi **CTRL+SHIFT+B** → **"Codespaces: Add Dev Container Configuration Files..."**
2. → **"Create a new configuration"**
3. → Seleziona **"Node.js & MongoDB"**

> Verrà generata la cartella `.devcontainer/` con `devcontainer.json` e `Dockerfile`.

---

# 2. Ricostruisci il container

- Ricostruisci per applicare la configurazione
- **CTRL+SHIFT+B** → **"Codespaces: Rebuild Container"**

> Attendi il completamento (può richiedere 1-2 minuti).

---

# 3. Verifica Node.js e npm

```bash
node -v
# Output atteso: v20.x.x (o simile, dipende dall'immagine)
```

```bash
npm -v
# Output atteso: 10.x.x
```


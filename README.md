<p align="center">
  <img width="1200" height="518" alt="image" src="https://github.com/user-attachments/assets/39308692-02e2-4b06-85bc-a5a0718c0ad3" />
</p>

# 1. Crea il devcontainer

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

# 3. Verifica Node.js

```bash
node -v
# Output atteso: v20.x.x (o simile, dipende dall'immagine)

npm -v
# Output atteso: 10.x.x
```

---

# 4. Inizializza il progetto e installa dipendenze

```bash
# Crea package.json
npm init -y
```

```bash
# Installa Express e Mongoose
npm install express mongoose
```


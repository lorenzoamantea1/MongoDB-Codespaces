# 1. Crea il devcontainer (se non già fatto)
# Premi CTRL+SHIFT+B → "Codespaces: Add Dev Container Configuration Files..."
# → "Create a new configuration" → Seleziona "Node.js & MongoDB"
> Verrà generata la cartella .devcontainer/ con devcontainer.json e Dockerfile.

# 2. Ricostruisci il container
# Ricostruisci per applicare la configurazione
# CTRL+SHIFT+B → "Codespaces: Rebuild Container"
> Attendi il completamento (può richiedere 1-2 minuti).

#3. Verifica Node.js
```
node -v
# Output atteso: v20.x.x (o simile, dipende dall'immagine)
```

```
npm -v
# Output atteso: 10.x.x
```

#4. Inizializza il progetto e installa dipendenze
```
# Crea package.json
npm init -y
```

```
# Installa Express e Mongoose
npm install express mongoose
```

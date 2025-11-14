<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Setup Node.js + MongoDB in GitHub Codespaces</title>
  <style>
    :root {
      --bg: #0d1117;
      --text: #c9d1d9;
      --accent: #58a6ff;
      --code-bg: #161b22;
      --border: #30363d;
      --success: #238636;
      --warning: #d29922;
      --radius: 8px;
      --font: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    }
    body {
      margin: 0;
      padding: 2rem;
      font-family: var(--font);
      background: var(--bg);
      color: var(--text);
      line-height: 1.6;
    }
    .container {
      max-width: 900px;
      margin: 0 auto;
      background: #010409;
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 2rem;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    }
    h1, h2 {
      color: var(--accent);
      border-bottom: 1px solid var(--border);
      padding-bottom: .5rem;
    }
    h1 {
      text-align: center;
      font-size: 1.8rem;
      margin-bottom: 1.5rem;
    }
    h2 {
      font-size: 1.4rem;
      margin-top: 2rem;
    }
    ol, ul {
      padding-left: 1.5rem;
    }
    li {
      margin: 0.8rem 0;
    }
    code {
      background: var(--code-bg);
      padding: 0.2em 0.4em;
      border-radius: 4px;
      font-family: 'JetBrains Mono', Consolas, monospace;
      font-size: 0.95em;
    }
    pre {
      background: var(--code-bg);
      padding: 1rem;
      border-radius: var(--radius);
      overflow-x: auto;
      border: 1px solid var(--border);
      margin: 1rem 0;
    }
    pre code {
      background: none;
      padding: 0;
      font-size: 0.95em;
    }
    .step {
      background: #161b22;
      padding: 1rem;
      border-left: 4px solid var(--accent);
      border-radius: 0 var(--radius) var(--radius) 0;
      margin: 1.5rem 0;
    }
    .note {
      background: rgba(88, 166, 255, 0.1);
      border: 1px solid var(--accent);
      padding: 1rem;
      border-radius: var(--radius);
      font-size: 0.95em;
      margin: 1.5rem 0;
    }
    .success {
      color: var(--success);
      font-weight: bold;
    }
    .tip {
      background: rgba(210, 153, 34, 0.1);
      border-left: 4px solid var(--warning);
      padding: 0.8rem 1rem;
      border-radius: 0 var(--radius) var(--radius) 0;
      margin: 1rem 0;
      font-size: 0.95em;
    }
    .logo {
      text-align: center;
      margin-bottom: 2rem;
    }
    .logo img {
      max-width: 100%;
      height: auto;
      border-radius: var(--radius);
    }
    @media (prefers-color-scheme: light) {
      :root {
        --bg: #ffffff;
        --text: #24292f;
        --accent: #0969da;
        --code-bg: #f6f8fa;
        --border: #d0d7de;
      }
      .container {
        background: #ffffff;
        border: 1px solid var(--border);
      }
    }
  </style>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap" rel="stylesheet">
</head>
<body>
  <div class="container">

    <div class="logo">
      <img width="1200" height="285" alt="Node.js + MongoDB Codespaces" src="https://github.com/user-attachments/assets/142594bf-d8f5-4bb4-9262-f3d43b379a01" />
    </div>

    <h1>Setup Node.js + MongoDB in GitHub Codespaces</h1>

    <div class="step">
      <h2>1. Crea il devcontainer</h2>
      <ol>
        <li>Premi <strong>CTRL+SHIFT+B</strong> → <code>"Codespaces: Add Dev Container Configuration Files..."</code></li>
        <li>→ <code>"Create a new configuration"</code></li>
        <li>→ Seleziona <strong>"Node.js & MongoDB"</strong></li>
      </ol>
      <div class="note">
        <strong>Verrà generata la cartella <code>.devcontainer/</code> con <code>devcontainer.json</code> e <code>Dockerfile</code>.</strong>
      </div>
    </div>

    <div class="step">
      <h2>2. Ricostruisci il container</h2>
      <ul>
        <li>Ricostruisci per applicare la configurazione</li>
        <li><strong>CTRL+SHIFT+B</strong> → <code>"Codespaces: Rebuild Container"</code></li>
      </ul>
      <div class="note">
        <strong>Attendi il completamento (può richiedere 1-2 minuti).</strong>
      </div>
    </div>

    <div class="step">
      <h2>3. Verifica Node.js</h2>
      <pre><code>node -v
# Output atteso: v20.x.x (o simile, dipende dall'immagine)</code></pre>
      <pre><code>npm -v
# Output atteso: 10.x.x</code></pre>
    </div>

    <div class="step">
      <h2>4. Inizializza il progetto e installa dipendenze</h2>
      <pre><code># Crea package.json
npm init -y</code></pre>
      <pre><code># Installa Express e Mongoose
npm install express mongoose</code></pre>
    </div>

    <div class="tip">
      <p><strong>Prossimi passi consigliati:</strong></p>
      <ul>
        <li>Crea <code>index.js</code> con un server Express base</li>
        <li>Connettiti a MongoDB su <code>mongodb://localhost:27017</code></li>
        <li>Avvia con <code>npm run dev</code></li>
        <li>Apri la porta <code>3000</code> nel browser integrato</li>
      </ul>
    </div>

    <div class="success" style="text-align:center; margin-top: 2rem; font-size:1.1rem;">
      Fatto! Hai un ambiente Node.js + Express + MongoDB pronto in Codespaces.
    </div>

  </div>
</body>
</html>

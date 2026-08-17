# FORGE FIT

App personale di allenamento (in italiano, con immagini degli esercizi).
File singolo + service worker, pensata per essere installata su iPhone.

## Pubblicare su GitHub Pages
1. Crea una repository (es. `forge-fit`) e carica `index.html`, `sw.js` e questo `README.md`.
2. Vai su **Settings → Pages**.
3. In **Build and deployment → Source** scegli **Deploy from a branch**, branch `main`, cartella `/ (root)`. Salva.
4. Dopo qualche minuto il sito sarà su:
   `https://<tuo-utente>.github.io/forge-fit/`

## Installare su iPhone
1. Apri il link in **Safari**.
2. Tocca **Condividi** → **Aggiungi alla schermata Home**.
3. Si apre a tutto schermo con la sua icona, come un'app. Dopo il primo avvio funziona anche offline.

## Note
- I dati (schede, storico, record, profilo) sono salvati **localmente sul dispositivo**.
- Le immagini degli esercizi vengono da free-exercise-db (dominio pubblico) e restano in cache dopo la prima visualizzazione.
- 105 esercizi in italiano: corpo libero, kettlebell, manubri, bilanciere + rack.

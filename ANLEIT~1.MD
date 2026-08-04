# 📲 Mathe-Trainer als Handy-App installieren

Die App ist eine sogenannte **PWA** (Progressive Web App). Das heißt: eigenes Icon auf dem Startbildschirm, Vollbild ohne Browserleiste, und nach dem ersten Öffnen funktioniert sie **komplett offline** – nichts muss mehr „geladen" werden.

Einmalig nötig: Die Dateien müssen ins Internet gelegt werden (kostenlos, ca. 10 Minuten), denn Handys installieren Apps nur von einer echten Webadresse.

---

## Schritt 1: Dateien kostenlos ins Netz legen (GitHub Pages)

1. Gehe auf **github.com** und erstelle ein kostenloses Konto (E-Mail genügt).
2. Klicke oben rechts auf **+** → **New repository**.
3. Name eingeben, z. B. `mathe-trainer` → Haken bei **Public** → **Create repository**.
4. Klicke auf den Link **„uploading an existing file"**.
5. Ziehe **alle Dateien aus dem Ordner `MatheTrainerApp`** in das Fenster (index.html, sw.js, manifest.webmanifest und die 4 Icon-Bilder – **nicht** den Ordner selbst, sondern die Dateien darin!). Dann unten **Commit changes**.
6. Gehe im Repository auf **Settings** → links **Pages** → bei „Branch" **main** auswählen → **Save**.
7. Nach 1–2 Minuten erscheint oben deine Adresse, z. B.:
   `https://DEINNAME.github.io/mathe-trainer/`

**Alternative:** netlify.com → kostenloses Konto → „Add new site" → „Deploy manually" → Ordnerinhalt hineinziehen. Ergebnis ist dasselbe.

---

## Schritt 2: Auf dem Handy installieren

**Android (Chrome):**
1. Die Adresse aus Schritt 1 im Chrome öffnen.
2. Es erscheint der Knopf **„📲 Als App installieren"** (oder: Menü ⋮ → **„App installieren"**).
3. Bestätigen – fertig! Das x²-Icon liegt jetzt auf dem Startbildschirm.

**iPhone (Safari):**
1. Die Adresse in **Safari** öffnen (muss Safari sein).
2. **Teilen-Symbol** (Viereck mit Pfeil) → **„Zum Home-Bildschirm"** → **Hinzufügen**.

Ab jetzt: App antippen wie jede andere – startet sofort, Vollbild, offline.

---

## Wichtig zu wissen

- **Fortschritt** wird pro Gerät gespeichert. Umzug zwischen PC und Handy: In der App unten **„Fortschritt speichern"** → Datei aufs andere Gerät → **„Fortschritt laden"**.
- **Sicherung:** Ab und zu „Fortschritt speichern" drücken – dann kann nie etwas verloren gehen.
- **Updates:** Wenn es eine neue Version der App gibt, einfach die neue `index.html` bei GitHub hochladen (gleicher Ort, alte Datei wird ersetzt). Die App auf dem Handy übernimmt das Update beim übernächsten Start automatisch.
- Die Datei `Mathe-Basis-Trainer.html` funktioniert weiterhin ganz normal **am PC per Doppelklick** – für zu Hause am Schreibtisch.

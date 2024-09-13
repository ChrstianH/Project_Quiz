# TypeScript Quiz
#### English below!
### Ein interaktives Quiz, um dein TypeScript-Wissen zu testen. Dieses Projekt wurde als Teil unseres Modulabschlussprojekts entwickelt und demonstriert unsere Fähigkeiten in TypeScript, HTML, CSS und DOM-Manipulation.

## Features

*   Fragen werden dynamisch aus JSON-Dateien geladen.
*   Unterstützt verschiedene Schwierigkeitsgrade (leicht/schwierig).
*   Fragen können auf Deutsch oder Englisch angezeigt werden, inklusive dynamischer Anpassung der Button-Beschriftungen.
*   Ansprechendes Design mit Karten für jede Frage.
*   Der Submit-Button wird erst aktiviert, wenn alle Fragen beantwortet wurden.
*   Nach dem Absenden:
    *   Scrollt die Seite automatisch nach oben.
    *   Das Ergebnis wird angezeigt.
    *   Richtige Antworten werden grün, falsche rot hervorgehoben
    *   Richtig beantwortete Fragen werden ausgeblendet
    *   Der Nutzer kann das Quiz wiederholen

## Installation
Klone das Repository: `git clone https://github.com/<dein-github-username>/typescript-quiz.gi`
Navigiere in das Projektverzeichnis: `cd typescript-quiz`
Außerdem um Vite / TypeScript nutzen zu können im Terminal ausführen: `npm i`
Öffne `index.html` in deinem Browser.

## Verwendung
Wähle die gewünschte Sprache und den Schwierigkeitsgrad aus.
Klicke auf "Start", um das Quiz zu beginnen.
Beantworte alle Fragen, indem du die entsprechenden Radio-Buttons auswählst.
Klicke auf "Absenden", um deine Antworten zu überprüfen und dein Ergebnis zu sehen.
Klicke auf "Quiz wiederholen!", um ein neues Quiz zu starten.

## Technologien
- TypeScript
- HTML5
- CSS3
- DOM-Manipulation
- Fetch API

## Projektstruktur

Das Projekt ist einfach gehalten, damit es leicht verständlich ist. Hier ist ein kurzer Überblick:

*   **`index.html`:** Das ist die Hauptdatei, die die Struktur des Quiz festlegt. Hier findest du das Grundgerüst mit Header, Formularen und Platzhaltern für die Fragen.
*   **`src/main.ts`:** Hier steckt die gesamte Logik des Quiz. Diese TypeScript-Datei kümmert sich darum, die Fragen zu laden, anzuzeigen und auszuwerten.
*   **`src/style.css`:** Diese Datei enthält das CSS, das dem Quiz sein Aussehen verleiht.
*   **`src/interfaces/IQuestions.ts`:** Hier wird das Interface definiert, um sicherzustellen, dass die geladenen Fragen die richtige Struktur haben.

Der Code wurde so sauber und übersichtlich wie möglich gehalten, damit man ihn auch später noch gut verstehen kann.

## Zukünftige Erweiterungen / Verbesserungen:
1. Die Struktur des Codes bietet eine gute Grundlage, um jede Karte individuell zu gestalten und animieren zu können!
2. Weitere Fragen und Kategorien: Das Quiz könnte durch zusätzliche Fragen und Kategorien erweitert werden, um das Wissen in verschiedenen TypeScript-Bereichen abzudecken.
3. Nutzerdatenspeicherung: Die Verwendung von LocalStorage könnte dazu dienen, den Punktestand oder die besten Ergebnisse zu speichern, um den Fortschritt der Benutzer zu verfolgen.

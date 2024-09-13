# TypeScript Quiz
#### English below!
### Ein interaktives Quiz, um dein TypeScript-Wissen zu testen. Dieses Projekt wurde als Teil unseres Modulabschlussprojekts entwickelt und demonstriert unsere Fähigkeiten in TypeScript, HTML, CSS und DOM-Manipulation.

## Features
Dynamisches Laden von Fragen: Fragen werden aus externen JSON-Dateien geladen, was eine einfache Erweiterung und Aktualisierung ermöglicht.
Sprach- und Schwierigkeitsgrad-Auswahl: Benutzer können zwischen Deutsch und Englisch wählen und den Schwierigkeitsgrad einstellen (leicht oder schwierig).
Intuitive Benutzeroberfläche: Fragen werden in übersichtlichen Karten präsentiert, und der "Absenden"-Button wird erst aktiviert, wenn alle Fragen beantwortet wurden.
Sofortiges Feedback: Nach dem Absenden wird das Ergebnis angezeigt und die Seite scrollt automatisch nach oben, um das Quiz erneut zu starten.

## Installation
Klone das Repository: `git clone https://github.com/<dein-github-username>/typescript-quiz.gi`
Navigiere in das Projektverzeichnis: `cd typescript-quiz`
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
4. Verbesserte Fehlerbehandlung:

## Lizenz
Dieses Projekt ist unter der MIT-Lizenz lizenziert. Siehe die LICENSE-Datei für weitere Informationen.

# TippHub by THM – Wettplattform (SWT-Projekt, Gruppe C)

TippHub ist eine Community-Wettplattform, die im Modul **Softwaretechnik (SWT)** an der THM entstanden ist (SS 2025). Nutzer tippen in Communities mit der virtuellen Währung **THMCoins**. Kommerzielle Wettanbieter (KWA) können sich registrieren und Wettangebote ankündigen.

**Meine Rolle: Softwaretesterin.** Außerdem habe ich den Teil *Kommerzielle Wettanbieter (KWA)* in Analyse und Entwurf ausgearbeitet.

## Inhalt

| Ordner | Inhalt |
|---|---|
| [`docs/Systemtest/`](docs/Systemtest) | **Testkonzept** für die KWA-Anwendungsfälle UC-24 bis UC-29: Testfälle mit Vor- und Nachbedingungen, Eingabe- und erwarteten Ausgabewerten (PDF und LaTeX-Quelle) |
| [`docs/Sequenzdiagramme/`](docs/Sequenzdiagramme) | System-Sequenzdiagramme der KWA-Anwendungsfälle |
| [`docs/Domaenendiagramm/`](docs/Domaenendiagramm) | Domänenmodell |
| [`docs/OOD/`](docs/OOD) | Objektorientierter Entwurf: Entwurfsklassendiagramme, Mock-ups, Sequenzdiagramme mit Operationen (PlantUML), Systementwurf (LaTeX/PDF) |
| [`docs/OOD_Update/`](docs/OOD_Update) | Überarbeiteter Entwurf: Interaktionsdiagramme, operationale Verträge, Abschlusspräsentation |
| `docs/KWA_Software_Entwurf.pdf` | Softwareentwurf für die KWA |
| [`app/`](app) | Frontend der Plattform (Angular 15): Startseite, Login/Registrierung, Meine Wetten, Meine Communities, Profil |

## Getestete Anwendungsfälle

| UC | Anwendungsfall | Testfälle |
|---|---|---|
| UC-24 | KWA auf der Plattform registrieren | Erfolg; Pflichtfeld leer |
| UC-25 | Ankündigung für Wettangebote erstellen | Erfolg; URL nicht freigegeben; Guthaben unter 10 THMCoins |
| UC-26 | Zielgruppe für Ankündigung festlegen | Erfolg; Warnung/Fehler bei der Konfiguration |
| UC-27 | Via externem Link ankündigen | Erfolg; fehlgeleitete Weiterleitung |
| UC-28 | Durch externen Link weiterleiten | Link funktioniert; Link nicht erlaubt |
| UC-29 | THMCoins an PUS gutschreiben | Erfolg; Guthaben unzureichend |
| – | Monatliche THMCoins-Abrechnung eines KWA | Erfolg |

Jeder Anwendungsfall hat einen Haupt-Szenario-Test (HS) und mindestens einen Alternativ-Szenario-Test (AS).

## App starten

```bash
cd app
npm install
npx ng serve        # http://localhost:4200
npx ng test         # Unit-Tests (Jasmine/Karma)
```

## Team

SWTP Gruppe C, Technische Hochschule Mittelhessen. Die App entstand im Team-Repository im THM-GitLab, dieses Repository ist ein Snapshot vom Stand 30.06.2025.

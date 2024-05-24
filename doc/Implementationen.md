# Implementationen

## Screenshot des Frontends mit Beschreibung

### All Challenges Page
![All Challenges](/doc/figures/AllChallenges.png)

Eine Übersicht mit allen erstellen Challenges von den Fitnesscoaches. Die Seite ist öffentlich und kann somit auch als ein nicht eingeloggter User betretten werden. Um eine Challenge dann jedoch beizutretten, wird der Hinweis angezeigt, sich ein Account zu erstellen. Sobald ein Fitnessuser einer Challenge beigetretten ist, so verschwindet die Challenge von diese Ansicht und wechselt auf der Ansicht von "My Challenges". Zu guter Letzt werden nur Challenges angezeigt die "OPEN" oder "WAITING" sind für eine saubere Darstellung für die User. Fitnesscoaches sehen alle Challenges auf dieser Page. Bei einem Beitritt der Challenge wird automatisch die Hälfte vom Wager Betrag dem User abgezogen. Bei fehlgeschlagenem Beitritt erhält der User eine Rückmeldung und muss wahrscheinlich sein Balance Account auffüllen.

### My Challenges
![My Challenges als Fitnessuser](/doc/figures/MyCompetedChallenges.png)
![My Challenges als Fitnesscoach](/doc/figures/MyCreatedChallenges.png)

Je nach Benutzerrolle werden hier die beigetretten Challenges von einem Fitnessuser oder die erstellten Challenges von einem Fitnesscoach angezeigt. Als Fitnessuser können hier keine weiteren Funktionen getätigt werden. Der Fitnesscoach kann hier, wenn eine Challenge auf "RUNNING" ist, einen Gewinner auswählen, und diese Challenge dann als abgeschlossen ("FINISHED") setzen.

### Balance Account
![Balance Account](/doc/figures/BalanceAccount.png)

Hier können beide User ihr Balance Account einsehen. Guthaben kann hier ebenfalls aufgeladen werden. Bei jeder Transaktion (Beitritt einer Challenge, Challenge-Gewinn, Guthaben aufladen und Fitnesscoachgebühren) wird ein Eintrag in das "Transaction History" gemacht und gleich angezeigt. Negative Beträge sind Rot und positive Beträge sind Grün markiert.

### Account Page
![Account Page](/doc/figures/AccountPage.png)
![Account Page with Fullfill](/doc/figures/AccountPage_Fullfill.png)

Hier werden die Account Details vom eingeloggten Benutzer angezeigt. Angezeigt werden Name, E-Mail, Benutzername und Bild. Falls der Benutzer noch etwas in seinem Account nachtragen muss, so wird ihm das unten angezeigt. Fitnesscoach müssen einen Fitnesscenter eintragen. Fitnessuser können das Geburtsdatum, die Grösse und das Gewicht eintragen.

## Klassendiagramm und Beschreibung des technischen Datenmodells (DTOs, DAOs)

## Klassendiagramm mit technischem dem Datenmodell
![Klassendiagramm](/doc/figures/uml_diagramm.drawio.svg)

Bei der Erstellung der beiden Usertypen (Fitnesscoach und Fitnessuser) sind nur die Attribute "name" und "email" relevant. Zusätzliche Attribute können dann für die jeweiligen Usertypen hinzugefügt werden. Beim Fitnesscoach muss das zustälcihe Attribut "Fitnesscenter" hinzugefügt werden, da es bei einer Erstellung der Challenge mitgegeben wird. Beim Fitnessuser können die zusätzlichen Attribute wie "birthDate", "height" und "weight" später noch hinzugefügt werden. Diese Variante mit dem späteren hinzufügen von den zusätlzichen Variablen wurde so gewählt, da ein Account mit dem Drittsystem "Auth0" erstellt wird und einfachheitshlber wurden die beiden Attribute "email und "name" übernommen. Jeder Benutzer besitzt zusätzlich einen Balance Account und wird automatisch beim Erstellen (Sign Up) eines Benutzers erstellt.

## Drittsysteme

### Auth0
Auth0 wurde als Drittsystem genutzt für das Account Management (Login und Sign Up) bei diesem Projekt. Benutzer können bei einem Sign Up Rollen zugewiesen werden, die dann wiederrum verschiedene Funktionen und Zugriffe haben. Zudem würde die Möglichkeit bestehen bei Auth0 eine Multi-Faktor-Authentifizierung (MFA) einzuschalten, für eine noch bessere Sichherheit der Accounts. Zudem ist das Zugriffmanagemnt auf der Auth0 Webseite sehr Übersichtlich und eine Regeleinführung, sei es bei einem Log In oder bei einem Sign Up, ist ebenfalls möglich.

### ChatGPT
ChatGPT wurde hier als Drittsystem genutzt, um bei der Erstellung einer Challenge die Beschreibung automatisch zu generieren. Hierfür wurde im Backend ein bestimmer Prompt bestimmt, welches eine kurze Beschreibung mit 3 kleinen messbare Ziele für Anfänger - Durchschnittliche Fitnessbenutzer erstellt. Der Fitnesscoach muss somit nicht überlegen, welche Ziele er für diese Challenge bestimmt und erhält gleich eine Beschreibung von ChatGPT. Der Negative Punkt dabei ist, dass der Coach die Ziele nicht selber definieren kann und ein API-Key (Bei ChatGPT nur mit einer gewissen einbezahlten Betrag) verfügbar sein muss.
# Anforderungen

# Use Case Diagram
![Use case diagram](/doc/figures/uc-diagram.drawio.svg)

# Use Case Beschreibung(en)

| Use Case Description UC1 ||
| -------- | ------- |
|Id|UC1|
|Name|Profil erstellen|
|Akteure|Fitnessuser & Fitnesscoach|
|Sequenz| <ol><li>Benutzer legt sich bei "Sign up" ein neues Profil an </li><li>Benutzer tippt E-Mail, Name und wählt Profilbild als URL</li><li>Benutzer wählt selber aus ob er ein "Fitnessuser" oder "Fitnessoach" ist</li><li>Benutzer klickt auf Button "Sign up"</li></ol>|
|Eintrittsbedingung|Gewählte E-Mail Adresse ist nicht bereis verwendet worden |
|Austrittsbedingung|Wenn alle Attribute richtig eingetippt wurden|
|Ausnahmen|Sollte der User eine bereits verwendete E-Mail verwenden, so wird er eine Fehlermeldung erhalten.|
|Besondere Anforderungen|-|

| Use Case Description UC2 ||
| -------- | ------- |
|Id|UC2|
|Name|Fitnessdaten eingeben|
|Akteure|Fitnessuser|
|Sequenz| <ol><li>Fitnessuser klickt auf den "Account" Button</li><li>Fitnessuser wählt "Fullfill Account" an</li><li>Fitnessuser gibt die Werte birthDate, height und weight ein</li><li>Fitnessuser klickt auf Button "Submit"</li></ol>|
|Eintrittsbedingung|Der Fitnessuser hat die Werte noch nicht eingetragen|
|Austrittsbedingung|-|
|Ausnahmen|-|
|Besondere Anforderungen|-|

| Use Case Description UC3 ||
| -------- | ------- |
|Id|UC3|
|Name|Fitnesscenter eingeben|
|Akteure|Fitnesscoach|
|Sequenz| <ol><li>Fitnesscoach klickt auf den "Account" Button</li><li>Fitnessuser wählt "Fullfill Account" an</li><li>Fitnesscoach gibt sein Fitnesscenter ein</li><li>Fitnesscoach klickt auf Button "Submit"</li></ol>|
|Eintrittsbedingung|Der Fitnesscoach hat die Werte noch nicht eingetragen|
|Austrittsbedingung|-|
|Ausnahmen|-|
|Besondere Anforderungen|Fitnesscoach muss sein Fitnesscenter eintragen, da ansonsten der Fitnesscoach keine Challenge erstellen kann.|

| Use Case Description UC3 ||
| -------- | ------- |
|Id|UC3|
|Name|Challenge erstellen|
|Akteure|Fitnesscoach|
|Sequenz| <ol><li>Fitnesscoach klickt auf den "Create Challenge" Button</li><li>Fitnesscoach wählt Name, Start-/Enddatum und Wager aus.</li><li>Fitnesscoach klickt auf "Create Challenge"</li><li>Erstellte Challenge ist dann bei "My Challenges" ersichtlich</li></ol>|
|Eintrittsbedingung|Fitnesscoach hat sein Fitnesscenter angegeben|
|Austrittsbedingung|-|
|Ausnahmen|-|
|Besondere Anforderungen|Bei jeder erstellen Challenge wird eine Beschreibung + Ziele von ChatGPT generiert|

| Use Case Description UC4 ||
| -------- | ------- |
|Id|UC4|
|Name|Challenge teilnehmen|
|Akteure|Fitnessuser|
|Sequenz| <ol><li>Fitnessuser klickt auf den "Challenges" Button</li><li>Fitnessuser wählt eine Challenge für sich aus</li><li>Fitnessuser trettet der Challenge bei mit einem Klick auf "Compete to me"</li><li>Challenge ist dann bei "My Challenges" ersichtlich</li><li>Der Fitnessuser erhält eine Bestätigungsmail</li></ol>|
|Eintrittsbedingung|Der Fitnessuser hat genug Balance auf seinem Account. Eine Challenge wurde erstellt|
|Austrittsbedingung|-|
|Ausnahmen|-|
|Besondere Anforderungen|Nur zwei Fitnessuser können einer Challenge beitretten|

| Use Case Description UC5 ||
| -------- | ------- |
|Id|UC5|
|Name|Challenge beenden|
|Akteure|Fitnesscoach|
|Sequenz| <ol><li>Fitnesscoach klickt auf den "My Challenges" Button</li><li>Fitnesscoach wählt die E-Mail für den Gewinner aus</li><li>Fitnesscoach beendet die Challenge</li></ol>|
|Eintrittsbedingung|Fitnesscoach kann nur seine eigenen erstellen Challenges beenden und nur wenn die Challenge den Stats "RUNNING" hat.|
|Austrittsbedingung|Der faire Gewinner wurde bei einem Treffen zu Dritt ausgesucht|
|Ausnahmen|-|
|Besondere Anforderungen|Balance Account wird für den Fitnessoach und Gewinner automatisch angepasst.|

# ER-Modell

![Use case diagram](/doc/figures/er_model.drawio.svg)

## Erklärung ER-Modell
Beim ER-Modell werden die zwei Fitnessuser und Fitnesscoach mit den Attributen in der Datenbank abgespeichert. Der Fitnesscoach kann mehrere Challenges erstellen, und eine Challenge wird nur von einem Fitnesscoach erstellt. Diese (oder auch mehrere) Challenge(s) kann der Fitnessuser beitretten. Jeder User hat einen Balance Account mit einer aufladbaren Balance und einer Transaction History.

<b>Challenge:</b> Wird mit den sichtbaren Attributen erstellt. Bei der Neuerstellung erhält die Challenge als ChallengeState "OPEN". Nach ein User dieser Challenge beigetretten ist, wechselt der State zu "WAITING". Wenn der zweite User beigetretten ist gilt die Challenge als "RUNNING" und der Fitnesscoach kann diese dann beenden (nach Vereinbarung / Verabredung).

<b>Fitnesscoach:</b> Erstellt ein Account und fügt später als zusätzliches Attribut sein Fitnesscenter ein, damit die Fitnessuser wissen bei welchem Fitnesscenter diese Challenge gehört. Ohne ein Fitnesscenter kann die Challenge nicht erstellt werden.

<b>Fitnessuser:</b> Erstellt ein Account und fügt später die zusätzlichen Attribute birthDate, height und weight ein. Diese zustlzichen Parameter kann der Fitnesscoach bei der Berwertung dann mitbeeinflussen.

<b>Balance Account:</b> Jeder User besitzt ein Balance Account mit seine E-Mail. Er kann sein Balance (noch) beliebig aufstocken. Bei jeder Transaktion wird ein Eintrag in das Transaction History erstellt.

# BPMN-Diagramm

![BPMN Diagramm](/doc/figures/bpmn.drawio.svg)

## Erklärungen BPMN
Dieses BPMN Diagramm stellt den Prozess einer Challenge dar. Dabei sind zwei Lanes aus der Sicht eines Fitnessusers oder Fitnesscoaches abgebildet.

# Skizze des UIs

![Skizze](/doc/figures/mockup_01.png)


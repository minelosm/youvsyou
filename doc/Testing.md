# Testing

## Modul- und Integrationstests
Insgesammt wurden 41 Tests (+1 Test von der Base-Applikation) erfolgreich durchgeführt. Die Tests wurden dann mit der Dependency JaCoCo gemessen und ein Report wurde erstellt. Insgesammt wurde ein Test Coverage von 78% erfüllt. Die drei meist nicht betroffen Klassen bei den Tests waren:
- Challenge Klasse (wobei nur die Setter- & RequiredArgs-Methoden von Lombok, trotz lombok.config, nicht getestet wurden)
- Fitnessuser & Fitnesscoach Klasse (gleicher Fall wie oben)
- UserValidator Klasse

Das Testing wurde mit allen Endpoints durchgeführt. Da bei den meisten Tests, ein Jwt Token notwendig ist, wurde die Testklasse "SecurityConfigTest.java" erstellt und je nach Bearer token im Header, für die verschiedenen Rollen, eingesetzt. Dabei wird die Testklasse beim Test importiert und anschliessend je nach Testwunsch das dementsprechende Bearer token / token_two / token_three eingesetzt.

Zusätzlich wurde bei den Tests häufig die BeforeEach Annotation benutzt und die Repositories jeweils gelöscht und anschliessend wieder je nach Testklasse neu angelegt. So konnte man alle Test auf einmal laufen lassen und ein User oder eine Challenge wurde nicht ausversehen zweimal, zwischen dem Übergang der Testklassen, erfasst.

Beim ServiceControllerTest wurde die Lifecycle innerhalb der Klasse getestet. Hier wurde das wie ein ganzer Prozess in Betracht gezogen. Zwei User tretten einer Challenge bei, die richtige ChallengeState wurde geprüft, ein User kann die Challenge nicht als "abgeschlossen / FINISHED" markieren, nur der Fitnesscoach, der die Challege erstellt hat, kann die Challenge auch wirklich beenden und einen Sieger bestimmen und die Challenge abschliessen.

Beim ChallengeServiceTest wurden die Funktionen "CompeteInAndFinanceChallenge" und "finishChallenge" getestet. Bei diesen zwei Funktionen wird das Eintretten einer Challenge gehandhabt. Der Balance Account wird geprüft und angepasst. Die ChallengeState wird je nach Anzahl Teilnehmer angepasst. Eine Mail wird beim beitretten einer Challenge und beim beenden einer Challenge verschickt. Dabei wurde Mockito verwendet und die jeweiligen Klassen gemockt und nur die benötigten Attributen wurden bei "thenReturn" festgelegt. Mockito kann hierfür nützlich sein, da bei den anderen verfügbaren Attributen (oder falls noch weitere Attributen später hinzugefügt werden) als "gemockt" gekennzeichnet werden.
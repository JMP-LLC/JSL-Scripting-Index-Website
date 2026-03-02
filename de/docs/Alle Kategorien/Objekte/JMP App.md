# JMP App



## Elementmeldungen

### Combine Windows

**Syntax:** obj &lt;&lt; Combine Windows( {list of reports or data tables}, {...} )

**Beschreibung:** Verbinden Sie die vorgegebene Liste von Plattformberichten oder Datentabellen zu einem neuen Modul. Die Anwendung darf dabei nicht ausgeführt werden oder sich im Bearbeitungszustand befinden.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dist = Distribution(	Continuous Distribution( Column( :weight ) ),	Nominal Distribution( Column( :age ) ));biv = Bivariate( Y( :weight ), X( :height ) );app = JMP App();app << Set Name( "Instant App" );app << Combine Windows( {dist << Report, biv << Report} );(app << Get Modules)[1] << Set Window Title( "My Report" );app << Run;

```

### Debug

**Syntax:** obj &lt;&lt; Debug

**Beschreibung:** Anwendung im Debugger ausführen.

```jsl

app = JMP App();app << Open File( "$SAMPLE_APPS/Launcher with Report.jmpappsource" );app << Debug;

```

### Edit

**Syntax:** obj &lt;&lt; Edit

**Beschreibung:** Bearbeiten Sie die Anwendung oder das Dashboard in der Anwendungserstellung.

```jsl

app = JMP App();app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );app << Edit;

```

### Get Modules

**Syntax:** list = obj &lt;&lt; Get Modules

**Beschreibung:** Liste der in der Anwendung definierten Module abrufen.

```jsl

app = JMP App();app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );app << Edit Application;app << Get Modules();

```

### Get Namespace

**Syntax:** obj &lt;&lt; Get Namespace

**Beschreibung:** Namensraum der Modulinstanz abrufen.

```jsl

app = JMP App();(app << Get Namespace) << Show Contents;

```

### Get Windows

**Syntax:** obj &lt;&lt; Get Windows

**Beschreibung:** Gibt eine Liste offener Fenster zurück, die als Instanzen von Anwendungsmodulen erstellt wurden. Beachten Sie, dass andere Fenster, die von Anwendungsskripten mit Neues Fenster() oder anderen Funktionen erstellt wurden, nicht eingeschlossen werden.

**JMP Version hinzugefügt:** 14

**Beispiel 1**

```jsl

app = JMP App();Open( "$SAMPLE_DATA/Quality Control/Steam Turbine Historical.jmp" );app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );app << Run;app << Get Windows();

```

**Beispiel 2**

```jsl

app = JMP App();app << Open File( "$SAMPLE_APPS/Graph Launcher.jmpappsource" );app << Run;launcher = (app << Get Windows())[1];launcher[Button Box( 1 )] << Click;launcher[Button Box( 1 )] << Click;app << Get Windows();

```

### Open File

**Syntax:** obj &lt;&lt; Open File( &lt;path&gt; )

**Beschreibung:** Anwendung aus der angegebenen Datei laden.

```jsl

app = JMP App();app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );box = app << Edit Application;

```

### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Beschreibung:** Startet das Dashboard oder die Anwendung neu und erstellt dabei eine neue laufende Kopie der Anwendung.

```jsl

app = JMP App();app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );app << Edit;app << Relaunch Analysis;

```

### Run

**Syntax:** obj &lt;&lt; Run

**Beschreibung:** Führen Sie die Anwendung oder das Dashboard aus.

```jsl

app = JMP App();app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );app << Run;

```

### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Beschreibung:** Save a New Window() script

```jsl

app = Include( "$SAMPLE_DASHBOARDS/Six Quality Graphs Dashboard.jmpappsource" );app << Run;app << Save Script for All Objects;

```

### Save Script to Add-In

**Syntax:** obj &lt;&lt; Save Script to Add-In

**Beschreibung:** Skript (JSL) zum Erzeugen dieser Analyse erstellen und es in die Add-in-Erstellung laden.

```jsl

app = JMP App();app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );app << Edit;app << "Save Script to Add-In";

```

### Save Script to Data Table

**Syntax:** app &lt;&lt; Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

```jsl

app = JMP App();app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );app << Edit;app << Save Script to Data Table;

```

### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

app = JMP App();app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );app << Edit;app << Save Script to Journal;

```

### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

app = JMP App();app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );app << Edit;app << Save Script to Script Window;

```


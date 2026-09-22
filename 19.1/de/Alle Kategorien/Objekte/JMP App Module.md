# JMP App Module



## Elementmeldungen

### Create Instance

**Syntax:** instance = obj &lt;&lt; Create Instance( &lt;parameters&gt; )

**Beschreibung:** Eine Instanz des Moduls erstellen.  Die Parameter werden der Funktion OnModuleLoad() übergeben, die im Modulskript definiert ist.

```jsl

app = JMP App();app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );app << Run Application;modules = app << Get Modules;modules[1] << Create Instance;

```

### Get Application

**Syntax:** app = obj &lt;&lt; Get Application

**Beschreibung:** Anwendung, der das Modul gehört, abrufen.

```jsl

app = JMP App();app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );app << Run Application;modules = app << Get Modules;modules[1] << Get Application;

```


# JMP App Module



## Elementmeldungen

### Create Instance

**Syntax:** instance = obj << Create Instance( <parameters> )

**Beschreibung:** Eine Instanz des Moduls erstellen.  Die Parameter werden der Funktion OnModuleLoad() übergeben, die im Modulskript definiert ist.

```jsl

Names Default To Here( 1 );
app = JMP App();
app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );
app << Run Application;
modules = app << Get Modules;
modules[1] << Create Instance;

```

### Get Application

**Syntax:** app = obj << Get Application

**Beschreibung:** Anwendung, der das Modul gehört, abrufen.

```jsl

Names Default To Here( 1 );
app = JMP App();
app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );
app << Run Application;
modules = app << Get Modules;
modules[1] << Get Application;

```


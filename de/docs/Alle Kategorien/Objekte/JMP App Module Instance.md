# JMP App Module Instance



## Elementmeldungen

### Create Objects

**Syntax:** obj << Create Objects

**Beschreibung:** Objekte der Modulinstanz erstellen.  Kann nur im Skript für ein JMP-Anwendungsmodul aufgerufen werden.

```jsl

Names Default To Here( 1 );
// This command is only valid within a JMP App Module Script

```

### Get Box

**Syntax:** obj << Get Box

**Beschreibung:** Anzeigefeld der Modulinstanz abrufen.

```jsl

Names Default To Here( 1 );
app = JMP App();
app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );
app << Run Application;
modules = app << Get Modules;
inst = modules[1] << Create Instance;
inst << Get Box;

```

### Get Namespace

**Syntax:** obj << Get Namespace

**Beschreibung:** Namensraum der Modulinstanz abrufen.

```jsl

Names Default To Here( 1 );
app = JMP App();
(app << Get Namespace) << Show Contents;

```

### Get User Data

**Syntax:** obj << Get User Data

**Beschreibung:** Gibt die der Modulinstanz zugewiesenen Anwenderdaten zurück.

```jsl

Names Default To Here( 1 );
// This command is only valid within a JMP App Module Script

```

### Set User Data

**Syntax:** inst << Set User Data(expr)

**Beschreibung:** Speichert einen JSL-Wert in der Modulinstanz der JMP-App. Bei dem Wert kann es sich um eine Zahl, Zeichenkette, Liste, ein assoziatives Array oder einen anderen JSL-Typ handeln.

```jsl

Names Default To Here( 1 );
// This command is only valid within a JMP App Module Script

```


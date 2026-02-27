# Scheduler



## Elementmeldungen

### Clear Schedule

**Syntax:** obj &lt;&lt; Clear Schedule

**Beschreibung:** Löscht alle aktuell geplanten Ereignisse im Planer.

```jsl

s = Schedule(	10,	Beep();	Print( "Hello World!" ););s << Clear Schedule;

```

### Close

**Syntax:** obj &lt;&lt; Close

**Beschreibung:** Schließt den Planer.

```jsl

s = Schedule(	10,	Beep();	Print( "Hello World!" ););Wait( 2 );s << Close;

```

### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Beschreibung:** Gibt einen Verweis auf das Containerfeld zurück, das den Inhalt des Objekts enthält.

```jsl

s = Schedule(	10,	Beep();	Print( "Hello World!" ););t = s << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Restart

**Syntax:** obj &lt;&lt; Restart

**Beschreibung:** Startet den Planer neu, nachdem er gestoppt wurde und die aktuell geplanten Ereignisse nicht mehr ausgeführt wurden.

```jsl

s = Schedule(	10,	Beep();	Print( "Hello World!" ););s << Stop;Wait( 2 );s << Restart;

```

### Show Schedule

**Syntax:** obj &lt;&lt; Show Schedule

**Beschreibung:** Zeigt das nächste aktuell geplante Ereignis an.

```jsl

s = Schedule(	10,	Beep();	Print( "Hello World!" ););s << Show Schedule;

```

### Stop

**Syntax:** obj &lt;&lt; Stop

**Beschreibung:** Stoppt den Planer, so dass die aktuell geplanten Ereignisse nicht ausgeführt werden.

```jsl

s = Schedule(	10,	Beep();	Print( "Hello World!" ););s << Stop;

```

## Zugehörige Konstruktoren

### Schedule

**Syntax:** Schedule( sec, scpt )

**Beschreibung:** Plant ein Ereignis, das das Skriptargument scpt nach Ablauf von sec Sekunden ausführt. Hinweis: Der Planer läuft nur während Leerlaufzeiten.

```jsl

s = Schedule(	10,	Beep();	Print( "Hello World!" ););

```


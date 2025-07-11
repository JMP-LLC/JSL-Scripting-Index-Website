# Workflow



### Close

**Syntax:** workflow << Close()

**Beschreibung:** Workflow schließen.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Close();

```

### Execute Next

**Syntax:** workflow << Execute Next()

**Beschreibung:** Den aktuellen Schritt im Workflow ausführen und den Ausführungszeiger zum nächsten Schritt bewegen.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Execute Next();

```

### Get Execution Info

**Syntax:** workflow << Get Execution Info(<index>)

**Beschreibung:** Struktur mit Informationen über die ausgeführten Schritte des Workflow zurückgeben.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Resume;
wf << Get Execution Info( 1 );

```

### Get Step Count

**Syntax:** workflow << Get Step Count

**Beschreibung:** Anzahl der Schritte im Workflow zurückgeben.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Get Step Count;

```

### Get Step JSL

**Syntax:** workflow << Get Step JSL(<index>)

**Beschreibung:** JSL-Code des vorgegebenen Schritts im Workflow zurückgeben.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Get Step JSL( 1 );

```

### Get Step Name

**Syntax:** workflow << Get Step Name(<index>)

**Beschreibung:** Name des vorgegebenen Schritts im Workflow zurückgeben.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Get Step Name( 1 );

```

### Log Executed Steps

**Syntax:** obj << Log Executed Steps( state=0|1 )

**Beschreibung:** Das JSL-Skript für jeden ausgeführten Schritt ins Log schreiben.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Log Executed Steps( 1 );
wf << Resume();

```

### Presentation Mode

**Syntax:** obj << Presentation Mode( state=0|1 )

**Beschreibung:** Im Präsentationsmodus werden Bearbeitungsoptionen und unnötige Supportschnittstellen entfernt.

**JMP Version hinzugefügt:** 17

```js

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Presentation Mode( 1 );

```

### Resume

**Syntax:** workflow << Resume()

**Beschreibung:** Ausführung des Workflow ausführen oder fortsetzen.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Resume();

```

### Set Execution Callback

**Syntax:** workflow << Set Execution Callback(<callback>)

**Beschreibung:** Einen Rückruf für den Workflow festlegen, der bei jeder abgeschlossenen Ausführung eines Schritts eine Benachrichtigung mit den zugehörigen Informationen erhält.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
//The callback function receives two arguments; the Workflow scriptable and a structure containing information about what step has just been executed and the reason if stopped.
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Set Execution Callback( Function( {wfb, data}, Show( data ) ) );
wf << Resume;

```

### Set Next Step To Execute

**Syntax:** workflow << Set Next Step To Execute(<index>)

**Beschreibung:** Ausführungscursor zu einem Schritt im Workflow bewegen.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Set Next Step To Execute( 2 );

```

### Start Over

**Syntax:** workflow << Start Over()

**Beschreibung:** Workflow auf den Anfang zurücksetzen, alle Tabellen und andere vom Workflow geöffnete Fenster schließen.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Start Over();

```


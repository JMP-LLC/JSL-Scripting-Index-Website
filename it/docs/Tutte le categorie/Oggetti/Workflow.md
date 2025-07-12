# Workflow



## Messaggi degli elementi

### Close

**Sintassi:** workflow << Close()

**Descrizione:** Chiude il workflow.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Close();

```

### Execute Next

**Sintassi:** workflow << Execute Next()

**Descrizione:** Esegue il passo corrente nel workflow e sposta il puntatore di esecuzione al passo successivo.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Execute Next();

```

### Get Execution Info

**Sintassi:** workflow << Get Execution Info(<index>)

**Descrizione:** Restituisce una struttura contenente informazioni sui passi del workflow che sono stati eseguiti.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Resume;
wf << Get Execution Info( 1 );

```

### Get Step Count

**Sintassi:** workflow << Get Step Count

**Descrizione:** Restituisce il numero di passi nel workflow.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Get Step Count;

```

### Get Step JSL

**Sintassi:** workflow << Get Step JSL(<index>)

**Descrizione:** Restituisce il codice JSL del passo specificato nel workflow.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Get Step JSL( 1 );

```

### Get Step Name

**Sintassi:** workflow << Get Step Name(<index>)

**Descrizione:** Restituisce il nome del passo specificato nel workflow.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Get Step Name( 1 );

```

### Log Executed Steps

**Sintassi:** obj << Log Executed Steps( state=0|1 )

**Descrizione:** Registra lo script JSL per ogni passo che viene eseguito.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Log Executed Steps( 1 );
wf << Resume();

```

### Presentation Mode

**Sintassi:** obj << Presentation Mode( state=0|1 )

**Descrizione:** La modalità di presentazione rimuove le opzioni di modifica e le interfacce di supporto non necessarie.

**JMP Versione aggiunta:** 17

```jsl

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Presentation Mode( 1 );

```

### Resume

**Sintassi:** workflow << Resume()

**Descrizione:** Esegue o riprende l&apos;esecuzione del workflow.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Resume();

```

### Set Execution Callback

**Sintassi:** workflow << Set Execution Callback(<callback>)

**Descrizione:** Imposta un callback per il workflow che riceverà una notifica ogni volta che termina l&apos;esecuzione di un passo con le informazioni associate.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );
//The callback function receives two arguments; the Workflow scriptable and a structure containing information about what step has just been executed and the reason if stopped.
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Set Execution Callback( Function( {wfb, data}, Show( data ) ) );
wf << Resume;

```

### Set Next Step To Execute

**Sintassi:** workflow << Set Next Step To Execute(<index>)

**Descrizione:** Sposta il cursore di esecuzione su un passo del workflow.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Set Next Step To Execute( 2 );

```

### Start Over

**Sintassi:** workflow << Start Over()

**Descrizione:** Reimposta il workflow all&apos;inizio chiudendo tutte le tabelle e le altre finestre aperte dal workflow.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Start Over();

```


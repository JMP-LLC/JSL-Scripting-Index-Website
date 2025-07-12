# Workflow



## Messages d'éléments

### Close

**Syntaxe :** workflow << Close()

**Description :** Fermez le flux de travail.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Close();

```

### Execute Next

**Syntaxe :** workflow << Execute Next()

**Description :** Exécutez l&apos;étape actuelle dans le flux de travail et déplacez le pointeur d&apos;exécution à l&apos;étape suivante.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Execute Next();

```

### Get Execution Info

**Syntaxe :** workflow << Get Execution Info(<index>)

**Description :** Renvoyez une structure contenant des informations sur les étapes du flux de travail exécutées.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Resume;
wf << Get Execution Info( 1 );

```

### Get Step Count

**Syntaxe :** workflow << Get Step Count

**Description :** Renvoyez le nombre d&apos;étapes dans le flux de travail.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Get Step Count;

```

### Get Step JSL

**Syntaxe :** workflow << Get Step JSL(<index>)

**Description :** Renvoyez le code JSL de l&apos;étape donnée dans le flux de travail.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Get Step JSL( 1 );

```

### Get Step Name

**Syntaxe :** workflow << Get Step Name(<index>)

**Description :** Renvoyez le nom de l&apos;étape donnée dans le flux de travail.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Get Step Name( 1 );

```

### Log Executed Steps

**Syntaxe :** obj << Log Executed Steps( state=0|1 )

**Description :** Journaliser le script JSL pour chaque étape exécutée.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Log Executed Steps( 1 );
wf << Resume();

```

### Presentation Mode

**Syntaxe :** obj << Presentation Mode( state=0|1 )

**Description :** Le mode présentation supprime les options de modification et les interfaces d&apos;assistance non indispensables.

**JMP Version ajoutée :** 17

```jsl

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Presentation Mode( 1 );

```

### Resume

**Syntaxe :** workflow << Resume()

**Description :** Exécuter ou relancer l&apos;exécution du flux de travail.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Resume();

```

### Set Execution Callback

**Syntaxe :** workflow << Set Execution Callback(<callback>)

**Description :** Définissez un rappel sur le flux de travail qui sera notifié à chaque fois qu&apos;une étape se termine avec les informations associées.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
//The callback function receives two arguments; the Workflow scriptable and a structure containing information about what step has just been executed and the reason if stopped.
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Set Execution Callback( Function( {wfb, data}, Show( data ) ) );
wf << Resume;

```

### Set Next Step To Execute

**Syntaxe :** workflow << Set Next Step To Execute(<index>)

**Description :** Déplacez le curseur d&apos;exécution à une étape du flux de travail.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Set Next Step To Execute( 2 );

```

### Start Over

**Syntaxe :** workflow << Start Over()

**Description :** Réinitialiser le flux de travail à son début, en fermant toutes les tables de données et autres fenêtres ouvertes par le flux de travail.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Start Over();

```


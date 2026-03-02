# Workflow



## Messages d'éléments

### Close

**Syntaxe :** workflow &lt;&lt; Close()

**Description :** Fermez le flux de travail.

**JMP Version ajoutée :** 18

```jsl

wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );wf << Close();

```

### Execute Next

**Syntaxe :** workflow &lt;&lt; Execute Next()

**Description :** Exécutez l&apos;étape actuelle dans le flux de travail et déplacez le pointeur d&apos;exécution à l&apos;étape suivante.

**JMP Version ajoutée :** 18

```jsl

wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );wf << Execute Next();

```

### Get Execution Info

**Syntaxe :** workflow &lt;&lt; Get Execution Info(&lt;index&gt;)

**Description :** Renvoyez une structure contenant des informations sur les étapes du flux de travail exécutées.

**JMP Version ajoutée :** 18

```jsl

wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );wf << Resume;wf << Get Execution Info( 1 );

```

### Get Step Count

**Syntaxe :** workflow &lt;&lt; Get Step Count

**Description :** Renvoyez le nombre d&apos;étapes dans le flux de travail.

**JMP Version ajoutée :** 18

```jsl

wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );wf << Get Step Count;

```

### Get Step JSL

**Syntaxe :** workflow &lt;&lt; Get Step JSL(&lt;index&gt;)

**Description :** Renvoyez le code JSL de l&apos;étape donnée dans le flux de travail.

**JMP Version ajoutée :** 18

```jsl

wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );wf << Get Step JSL( 1 );

```

### Get Step Name

**Syntaxe :** workflow &lt;&lt; Get Step Name(&lt;index&gt;)

**Description :** Renvoyez le nom de l&apos;étape donnée dans le flux de travail.

**JMP Version ajoutée :** 18

```jsl

wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );wf << Get Step Name( 1 );

```

### Log Executed Steps

**Syntaxe :** obj &lt;&lt; Log Executed Steps( state=0|1 )

**Description :** Journaliser le script JSL pour chaque étape exécutée.

**JMP Version ajoutée :** 18

```jsl

wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );wf << Log Executed Steps( 1 );wf << Resume();

```

### Presentation Mode

**Syntaxe :** obj &lt;&lt; Presentation Mode( state=0|1 )

**Description :** Le mode présentation supprime les options de modification et les interfaces d&apos;assistance non indispensables.

**JMP Version ajoutée :** 17

```jsl

wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );wf << Presentation Mode( 1 );

```

### Resume

**Syntaxe :** workflow &lt;&lt; Resume()

**Description :** Exécuter ou relancer l&apos;exécution du flux de travail.

**JMP Version ajoutée :** 18

```jsl

wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );wf << Resume();

```

### Set Execution Callback

**Syntaxe :** workflow &lt;&lt; Set Execution Callback(&lt;callback&gt;)

**Description :** Définissez un rappel sur le flux de travail qui sera notifié à chaque fois qu&apos;une étape se termine avec les informations associées.

**JMP Version ajoutée :** 18

```jsl

//The callback function receives two arguments; the Workflow scriptable and a structure containing information about what step has just been executed and the reason if stopped.wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );wf << Set Execution Callback( Function( {wfb, data}, Show( data ) ) );wf << Resume;

```

### Set Next Step To Execute

**Syntaxe :** workflow &lt;&lt; Set Next Step To Execute(&lt;index&gt;)

**Description :** Déplacez le curseur d&apos;exécution à une étape du flux de travail.

**JMP Version ajoutée :** 18

```jsl

wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );wf << Set Next Step To Execute( 2 );

```

### Start Over

**Syntaxe :** workflow &lt;&lt; Start Over()

**Description :** Réinitialiser le flux de travail à son début, en fermant toutes les tables de données et autres fenêtres ouvertes par le flux de travail.

**JMP Version ajoutée :** 18

```jsl

wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );wf << Start Over();

```


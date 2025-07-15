# Workflow



## Mensajes del elemento

### Close

**Sintaxis:** workflow &lt;&lt; Close()

**Descripción:** Cierra el flujo de trabajo.

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Close();

```

### Execute Next

**Sintaxis:** workflow &lt;&lt; Execute Next()

**Descripción:** Ejecuta el paso actual del flujo de trabajo y mueve el puntero de ejecución al paso siguiente.

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Execute Next();

```

### Get Execution Info

**Sintaxis:** workflow &lt;&lt; Get Execution Info(&lt;index&gt;)

**Descripción:** Devuelve una estructura que contiene información sobre los pasos del flujo de trabajo que se han ejecutado.

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Resume;
wf << Get Execution Info( 1 );

```

### Get Step Count

**Sintaxis:** workflow &lt;&lt; Get Step Count

**Descripción:** Devuelve el número de pasos del flujo de trabajo.

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Get Step Count;

```

### Get Step JSL

**Sintaxis:** workflow &lt;&lt; Get Step JSL(&lt;index&gt;)

**Descripción:** Devuelve el código JSL del paso indicado en el flujo de trabajo.

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Get Step JSL( 1 );

```

### Get Step Name

**Sintaxis:** workflow &lt;&lt; Get Step Name(&lt;index&gt;)

**Descripción:** Devuelve el nombre del paso indicado en el flujo de trabajo.

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Get Step Name( 1 );

```

### Log Executed Steps

**Sintaxis:** obj &lt;&lt; Log Executed Steps( state=0|1 )

**Descripción:** Registra el script JSL para cada paso que se ejecuta.

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Log Executed Steps( 1 );
wf << Resume();

```

### Presentation Mode

**Sintaxis:** obj &lt;&lt; Presentation Mode( state=0|1 )

**Descripción:** El modo de presentación quita las opciones de edición y las interfaces de soporte innecesarias.

**JMP Versión agregada:** 17

```jsl

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Presentation Mode( 1 );

```

### Resume

**Sintaxis:** workflow &lt;&lt; Resume()

**Descripción:** Ejecuta o reanuda la ejecución del flujo de trabajo.

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Resume();

```

### Set Execution Callback

**Sintaxis:** workflow &lt;&lt; Set Execution Callback(&lt;callback&gt;)

**Descripción:** Establece una rellamada en el flujo de trabajo que recibirá una notificación cada vez que finalice la ejecución de un paso con la información asociada.

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );
//The callback function receives two arguments; the Workflow scriptable and a structure containing information about what step has just been executed and the reason if stopped.
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Set Execution Callback( Function( {wfb, data}, Show( data ) ) );
wf << Resume;

```

### Set Next Step To Execute

**Sintaxis:** workflow &lt;&lt; Set Next Step To Execute(&lt;index&gt;)

**Descripción:** Mueve el cursor de ejecución a un paso del flujo de trabajo.

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Set Next Step To Execute( 2 );

```

### Start Over

**Sintaxis:** workflow &lt;&lt; Start Over()

**Descripción:** Restablece el flujo de trabajo al principio, a la vez que cierra todas las tablas y demás ventanas que haya abierto el flujo de trabajo.

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Start Over();

```


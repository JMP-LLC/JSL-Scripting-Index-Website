# Workflow



### Close

**Syntax:** workflow << Close()

**Description:** Close the workflow.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Close();

```

### Execute Next

**Syntax:** workflow << Execute Next()

**Description:** Execute the current step in the workflow, and move the execution pointer to the following step.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Execute Next();

```

### Get Execution Info

**Syntax:** workflow << Get Execution Info(<index>)

**Description:** Return a structure containing information about the steps of the workflow that have been executed.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Resume;
wf << Get Execution Info( 1 );

```

### Get Step Count

**Syntax:** workflow << Get Step Count

**Description:** Return the number of steps in the workflow.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Get Step Count;

```

### Get Step JSL

**Syntax:** workflow << Get Step JSL(<index>)

**Description:** Return the JSL code of the given step in the workflow.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Get Step JSL( 1 );

```

### Get Step Name

**Syntax:** workflow << Get Step Name(<index>)

**Description:** Return the name of the given step in the workflow.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Get Step Name( 1 );

```

### Log Executed Steps

**Syntax:** obj << Log Executed Steps( state=0|1 )

**Description:** Log the JSL script for each step that is executed.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Log Executed Steps( 1 );
wf << Resume();

```

### Presentation Mode

**Syntax:** obj << Presentation Mode( state=0|1 )

**Description:** Presentation mode removes editing options and unnecessary support interfaces.

**JMP Version Added:** 17

```

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Presentation Mode( 1 );

```

### Resume

**Syntax:** workflow << Resume()

**Description:** Execute or resume execution of the workflow.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Resume();

```

### Set Execution Callback

**Syntax:** workflow << Set Execution Callback(<callback>)

**Description:** Set a callback on the workflow that will be notified each time a step finishes executing with associated information.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
//The callback function receives two arguments; the Workflow scriptable and a structure containing information about what step has just been executed and the reason if stopped.
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Set Execution Callback( Function( {wfb, data}, Show( data ) ) );
wf << Resume;

```

### Set Next Step To Execute

**Syntax:** workflow << Set Next Step To Execute(<index>)

**Description:** Move the execution cursor to a step in the workflow.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Set Next Step To Execute( 2 );

```

### Start Over

**Syntax:** workflow << Start Over()

**Description:** Reset the workflow back to the beginning, closing all tables and other windows opened by the workflow.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Start Over();

```


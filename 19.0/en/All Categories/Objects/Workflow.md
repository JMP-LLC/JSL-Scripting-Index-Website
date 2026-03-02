# Workflow



## Item Messages

### Close

**Syntax:** workflow &lt;&lt; Close()

**Description:** Close the workflow.

**JMP Version Added:** 18

```jsl

wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Close();

```

### Execute Next

**Syntax:** workflow &lt;&lt; Execute Next()

**Description:** Execute the current step in the workflow, and move the execution pointer to the following step.

**JMP Version Added:** 18

```jsl

wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Execute Next();

```

### Get Execution Info

**Syntax:** workflow &lt;&lt; Get Execution Info(&lt;index&gt;)

**Description:** Return a structure containing information about the steps of the workflow that have been executed.

**JMP Version Added:** 18

```jsl

wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Resume;
wf << Get Execution Info( 1 );

```

### Get Step Count

**Syntax:** workflow &lt;&lt; Get Step Count

**Description:** Return the number of steps in the workflow.

**JMP Version Added:** 18

```jsl

wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Get Step Count;

```

### Get Step JSL

**Syntax:** workflow &lt;&lt; Get Step JSL(&lt;index&gt;)

**Description:** Return the JSL code of the given step in the workflow.

**JMP Version Added:** 18

```jsl

wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Get Step JSL( 1 );

```

### Get Step Name

**Syntax:** workflow &lt;&lt; Get Step Name(&lt;index&gt;)

**Description:** Return the name of the given step in the workflow.

**JMP Version Added:** 18

```jsl

wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Get Step Name( 1 );

```

### Log Executed Steps

**Syntax:** obj &lt;&lt; Log Executed Steps( state=0|1 )

**Description:** Log the JSL script for each step that is executed.

**JMP Version Added:** 18

```jsl

wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Log Executed Steps( 1 );
wf << Resume();

```

### Presentation Mode

**Syntax:** obj &lt;&lt; Presentation Mode( state=0|1 )

**Description:** Presentation mode removes editing options and unnecessary support interfaces.

**JMP Version Added:** 17

```jsl

wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Presentation Mode( 1 );

```

### Resume

**Syntax:** workflow &lt;&lt; Resume()

**Description:** Execute or resume execution of the workflow.

**JMP Version Added:** 18

```jsl

wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Resume();

```

### Set Execution Callback

**Syntax:** workflow &lt;&lt; Set Execution Callback(&lt;callback&gt;)

**Description:** Set a callback on the workflow that will be notified each time a step finishes executing with associated information.

**JMP Version Added:** 18

```jsl

//The callback function receives two arguments; the Workflow scriptable and a structure containing information about what step has just been executed and the reason if stopped.
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Set Execution Callback( Function( {wfb, data}, Show( data ) ) );
wf << Resume;

```

### Set Next Step To Execute

**Syntax:** workflow &lt;&lt; Set Next Step To Execute(&lt;index&gt;)

**Description:** Move the execution cursor to a step in the workflow.

**JMP Version Added:** 18

```jsl

wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Set Next Step To Execute( 2 );

```

### Start Over

**Syntax:** workflow &lt;&lt; Start Over()

**Description:** Reset the workflow back to the beginning, closing all tables and other windows opened by the workflow.

**JMP Version Added:** 18

```jsl

wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Start Over();

```


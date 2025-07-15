# Workflow



## 项消息

### Close

**语法:** workflow &lt;&lt; Close()

**说明:** 关闭工作流。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Close();

```

### Execute Next

**语法:** workflow &lt;&lt; Execute Next()

**说明:** 执行工作流中的当前步骤，并将执行指针移至下一个步骤。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Execute Next();

```

### Get Execution Info

**语法:** workflow &lt;&lt; Get Execution Info(&lt;index&gt;)

**说明:** 返回包含有关已执行的工作流步骤的信息的结构。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Resume;
wf << Get Execution Info( 1 );

```

### Get Step Count

**语法:** workflow &lt;&lt; Get Step Count

**说明:** 返回工作流中的步骤数。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Get Step Count;

```

### Get Step JSL

**语法:** workflow &lt;&lt; Get Step JSL(&lt;index&gt;)

**说明:** 返回工作流中给定步骤的 JSL 代码。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Get Step JSL( 1 );

```

### Get Step Name

**语法:** workflow &lt;&lt; Get Step Name(&lt;index&gt;)

**说明:** 返回工作流中给定步骤的名称。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Get Step Name( 1 );

```

### Log Executed Steps

**语法:** obj &lt;&lt; Log Executed Steps( state=0|1 )

**说明:** 为执行的每个步骤记录 JSL 脚本。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Log Executed Steps( 1 );
wf << Resume();

```

### Presentation Mode

**语法:** obj &lt;&lt; Presentation Mode( state=0|1 )

**说明:** 演示模式会删除编辑选项和不必要的支持界面。

**JMP添加的版本:** 17

```jsl

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Presentation Mode( 1 );

```

### Resume

**语法:** workflow &lt;&lt; Resume()

**说明:** 执行或恢复工作流的执行。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Resume();

```

### Set Execution Callback

**语法:** workflow &lt;&lt; Set Execution Callback(&lt;callback&gt;)

**说明:** 为工作流设置一个回调，每当一个步骤完成带有关联信息的执行时，将收到通知。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
//The callback function receives two arguments; the Workflow scriptable and a structure containing information about what step has just been executed and the reason if stopped.
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Set Execution Callback( Function( {wfb, data}, Show( data ) ) );
wf << Resume;

```

### Set Next Step To Execute

**语法:** workflow &lt;&lt; Set Next Step To Execute(&lt;index&gt;)

**说明:** 将执行光标移至工作流中的某个步骤。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Set Next Step To Execute( 2 );

```

### Start Over

**语法:** workflow &lt;&lt; Start Over()

**说明:** 将工作流重置回开始处，关闭该工作流打开的所有表和其他窗口。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Start Over();

```


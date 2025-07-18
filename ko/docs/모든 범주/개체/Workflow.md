# Workflow



## 항목 메시지

### Close

**구문:** workflow &lt;&lt; Close()

**설명:** 워크플로우를 닫습니다.

**JMP추가된 버전:** 18

```jsl

wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Close();

```

### Execute Next

**구문:** workflow &lt;&lt; Execute Next()

**설명:** 워크플로우에서 현재 단계를 실행하고 실행 포인터를 다음 단계로 이동합니다.

**JMP추가된 버전:** 18

```jsl

wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Execute Next();

```

### Get Execution Info

**구문:** workflow &lt;&lt; Get Execution Info(&lt;index&gt;)

**설명:** 실행된 워크플로우 단계의 정보가 포함된 구조를 반환합니다.

**JMP추가된 버전:** 18

```jsl

wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Resume;
wf << Get Execution Info( 1 );

```

### Get Step Count

**구문:** workflow &lt;&lt; Get Step Count

**설명:** 워크플로우의 단계 수를 반환합니다.

**JMP추가된 버전:** 18

```jsl

wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Get Step Count;

```

### Get Step JSL

**구문:** workflow &lt;&lt; Get Step JSL(&lt;index&gt;)

**설명:** 워크플로우에서 지정된 단계의 JSL 코드를 반환합니다.

**JMP추가된 버전:** 18

```jsl

wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Get Step JSL( 1 );

```

### Get Step Name

**구문:** workflow &lt;&lt; Get Step Name(&lt;index&gt;)

**설명:** 워크플로우에서 지정된 단계의 이름을 반환합니다.

**JMP추가된 버전:** 18

```jsl

wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Get Step Name( 1 );

```

### Log Executed Steps

**구문:** obj &lt;&lt; Log Executed Steps( state=0|1 )

**설명:** 실행된 각 단계에 대한 JSL 스크립트를 기록합니다.

**JMP추가된 버전:** 18

```jsl

wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Log Executed Steps( 1 );
wf << Resume();

```

### Presentation Mode

**구문:** obj &lt;&lt; Presentation Mode( state=0|1 )

**설명:** 프레젠테이션 모드에서는 편집 옵션 및 필요 없는 지원 인터페이스를 제거합니다.

**JMP추가된 버전:** 17

```jsl

wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Presentation Mode( 1 );

```

### Resume

**구문:** workflow &lt;&lt; Resume()

**설명:** 워크플로우를 실행하거나 실행을 재개합니다.

**JMP추가된 버전:** 18

```jsl

wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Resume();

```

### Set Execution Callback

**구문:** workflow &lt;&lt; Set Execution Callback(&lt;callback&gt;)

**설명:** 관련 정보와 함께 단계 실행이 완료될 때마다 알림을 받을 워크플로우에 대한 콜백을 설정합니다.

**JMP추가된 버전:** 18

```jsl

//The callback function receives two arguments; the Workflow scriptable and a structure containing information about what step has just been executed and the reason if stopped.
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Set Execution Callback( Function( {wfb, data}, Show( data ) ) );
wf << Resume;

```

### Set Next Step To Execute

**구문:** workflow &lt;&lt; Set Next Step To Execute(&lt;index&gt;)

**설명:** 실행 커서를 워크플로우의 단계로 이동합니다.

**JMP추가된 버전:** 18

```jsl

wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Set Next Step To Execute( 2 );

```

### Start Over

**구문:** workflow &lt;&lt; Start Over()

**설명:** 워크플로우를 다시 처음으로 재설정하고 워크플로우에 열려 있는 모든 테이블과 다른 창을 닫습니다.

**JMP추가된 버전:** 18

```jsl

wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Start Over();

```


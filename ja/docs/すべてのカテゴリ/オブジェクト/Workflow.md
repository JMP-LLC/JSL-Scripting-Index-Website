# Workflow



## 項目のメッセージ

### Close

**構文:** workflow &lt;&lt; Close()

**説明:** ワークフローを閉じる。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Close();

```

### Execute Next

**構文:** workflow &lt;&lt; Execute Next()

**説明:** ワークフローの現在のステップを実行し、実行ポインタを次のステップに移動させる。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Execute Next();

```

### Get Execution Info

**構文:** workflow &lt;&lt; Get Execution Info(&lt;index&gt;)

**説明:** ワークフローの実行済みのステップに関する情報を含んだ構造体を戻す。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Resume;
wf << Get Execution Info( 1 );

```

### Get Step Count

**構文:** workflow &lt;&lt; Get Step Count

**説明:** ワークフローのステップ数を戻す。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Get Step Count;

```

### Get Step JSL

**構文:** workflow &lt;&lt; Get Step JSL(&lt;index&gt;)

**説明:** ワークフロー内の指定のステップのJSLコードを戻す。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Get Step JSL( 1 );

```

### Get Step Name

**構文:** workflow &lt;&lt; Get Step Name(&lt;index&gt;)

**説明:** ワークフロー内の指定のステップの名前を戻す。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Get Step Name( 1 );

```

### Log Executed Steps

**構文:** obj &lt;&lt; Log Executed Steps( state=0|1 )

**説明:** 実行されたステップのJSLスクリプトをログに記録する。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Log Executed Steps( 1 );
wf << Resume();

```

### Presentation Mode

**構文:** obj &lt;&lt; Presentation Mode( state=0|1 )

**説明:** プレゼンテーションモードでは、編集オプションや不要なサポートインターフェースが表示されなくなる。

**JMP追加されたバージョン:** 17

```jsl

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Presentation Mode( 1 );

```

### Resume

**構文:** workflow &lt;&lt; Resume()

**説明:** ワークフローを実行または再開する。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Resume();

```

### Set Execution Callback

**構文:** workflow &lt;&lt; Set Execution Callback(&lt;callback&gt;)

**説明:** ワークフローにコールバックを設定する。このコールバックは、ステップの実行が終了するたびに関連情報とともに通知を受ける。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
//The callback function receives two arguments; the Workflow scriptable and a structure containing information about what step has just been executed and the reason if stopped.
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Set Execution Callback( Function( {wfb, data}, Show( data ) ) );
wf << Resume;

```

### Set Next Step To Execute

**構文:** workflow &lt;&lt; Set Next Step To Execute(&lt;index&gt;)

**説明:** 実行カーソルをワークフロー内のステップに移動させる。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Set Next Step To Execute( 2 );

```

### Start Over

**構文:** workflow &lt;&lt; Start Over()

**説明:** ワークフローを最初の状態にリセットする。ワークフローで開いたすべてのテーブルとウィンドウを閉じる。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
wf = Open( "$SAMPLE_WORKFLOWS/WorkflowBuilder.jmpflow" );
wf << Start Over();

```


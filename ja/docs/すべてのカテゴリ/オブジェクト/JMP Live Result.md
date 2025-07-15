# JMP Live Result



## 項目のメッセージ

### As Scriptable

**構文:** jmplivereport = jmpliveresult &lt;&lt; As Scriptable()

**説明:** これ以降のスクリプトによる操作を行うために、JMP Live結果を生成した操作によって、JMP Liveレポート、JMP Liveフォルダ、またはJMP Live投稿を戻す。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();

jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Result Example Folder" ),
	If Exists( "use" )
);
worked = jmpliveresult << Succeeded();
If( worked == 1,
	folder = jmpliveresult << As Scriptable;
	Write( "\!nResponse Type: ", jmpliveresult << Get Response Type );
	Write( "\!nTitle: ", folder << Get Title );
);

```

### Get Error Message

**構文:** messagetext = jmpliveresult &lt;&lt; Get Error Message()

**説明:** 最後の操作で生成されたメッセージを文字列として取得する。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();
jmpliveresult = liveconnection << Get Folder( "THISISNOTAFOLDERID" );

httpstatus = jmpliveresult << Get HTTP Status();
httpmessage = jmpliveresult << Get Error Message();
Write( "\!nHTTP Status Code: ", httpstatus, " Message: ", httpmessage );

```

### Get HTTP Status

**構文:** statuscode = jmpliveresult &lt;&lt; Get HTTP Status()

**説明:** 最後の操作のHTTPステータスコードを取得する。HTTPステータスコードは、業界標準の整数コード。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();
jmpliveresult = liveconnection << Get Folder( "THISISNOTAFOLDERID" );

httpstatus = jmpliveresult << Get HTTP Status();
httpmessage = jmpliveresult << Get Error Message();
Write( "\!nHTTP Status Code: ", httpstatus, " Message: ", httpmessage );

```

### Get JMP Live

**構文:** liveconnection = jmpliveresult &lt;&lt; Get JMP Live()

**説明:** JMP Live接続オブジェクトを取得する。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();

jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Result Example Folder" ),
	If Exists( "use" )
);
secondliveconnection = jmpliveresult << Get JMP Live();

name = secondliveconnection << Get Connection Name();
Write( "\!nConnection Name: ", name );

```

### Get Response Type

**構文:** responsevalue = jmpliveresult &lt;&lt; Get Response Type()

**説明:** 最後の操作によって生成された応答の種類を文字列として取得する。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();

jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Result Example Folder" ),
	If Exists( "use" )
);
worked = jmpliveresult << Succeeded();
If( worked == 1,
	folder = jmpliveresult << As Scriptable;
	Write( "\!nResponse Type: ", jmpliveresult << Get Response Type );
	Write( "\!nTitle: ", folder << Get Title );
);

```

### Succeeded

**構文:** success = jmpliveresult &lt;&lt; Succeeded()

**説明:** 最後のアクションが正常に行われた(1)かそうでない(0)かを戻す。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();

jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Result Example Folder" ),
	If Exists( "use" )
);
worked = jmpliveresult << Succeeded();
If( worked == 1,
	folder = jmpliveresult << As Scriptable;
	Write( "\!nResponse Type: ", jmpliveresult << Get Response Type );
	Write( "\!nTitle: ", folder << Get Title );
);

```


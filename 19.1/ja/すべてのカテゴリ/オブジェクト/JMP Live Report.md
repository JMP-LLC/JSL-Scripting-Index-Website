# JMP Live Report



## 項目のメッセージ

### Get Description

**構文:** string = jmplivepost &lt;&lt; Get Description()

**説明:** JMP Liveレポート、JMP Liveフォルダ、またはJMP Live投稿の説明を文字列として取得する。

**JMP追加されたバージョン:** 16

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );liveconnection = New JMP Live();result = liveconnection << Create Folder(	Parent Folder( "~" ),	Title( "Reports and Posts - Messages" ),	If Exists( "use" ));folder = result << As Scriptable;content = New JMP Live Content(	gbsmoother,	Title( "A Very Important Report" ),	Description( "The Report That Is Published" ));jmpliveresult = folder << Publish( content );report = Empty();postList = jmpliveresult << As Scriptable;For( i = 1, i <= postlist << Get Number Of Items, i += 1,	posttype = postlist[i] << Get Type;	If( posttype == "Report",		report = postlist[i]	););Write( "\!n\!nID: ", report << Get ID );Write( "\!nDescription: ", report << Get Description );

```

### Get ID

**構文:** string = jmplivepost &lt;&lt; Get ID()

**説明:** JMP Liveレポート、JMP Liveフォルダ、またはJMP Live投稿のIDを文字列として取得する。

**JMP追加されたバージョン:** 16

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );liveconnection = New JMP Live();result = liveconnection << Create Folder(	Parent Folder( "~" ),	Title( "Reports and Posts - Messages" ),	If Exists( "use" ));folder = result << As Scriptable;content = New JMP Live Content(	gbsmoother,	Title( "A Very Important Report" ),	Description( "The Report That Is Published" ),);jmpliveresult = folder << Publish( content );report = Empty();postList = jmpliveresult << As Scriptable;For( i = 1, i <= postlist << Get Number Of Items, i += 1,	posttype = postlist[i] << Get Type;	If( posttype == "Report",		report = postlist[i]	););Write( "\!n\!nID: ", report << Get ID );

```

### Get Path

**構文:** string = jmplivepost &lt;&lt; Get Path()

**説明:** このJMP Liveレポート、フォルダ、または投稿のパスを文字列として取得する。

**JMP追加されたバージョン:** 19

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );liveconnection = New JMP Live();result = liveconnection << Create Folder(	Parent Folder( "~" ),	Title( "Reports and Posts - Messages" ),	If Exists( "use" ));folder = result << As Scriptable;content = New JMP Live Content(	gbsmoother,	Title( "A Very Important Report" ),	Description( "The Report That Is Published" ),);jmpliveresult = folder << Publish( content );report = Empty();postList = jmpliveresult << As Scriptable;For( i = 1, i <= postlist << Get Number Of Items, i += 1,	posttype = postlist[i] << Get Type;	If( posttype == "Report",		report = postlist[i]	););Write( "\!n\!nPath: ", report << Get Path );

```

### Get Title

**構文:** string = jmplivepost &lt;&lt; Get Title()

**説明:** JMP Liveレポート、JMP Liveフォルダ、またはJMP Live投稿のタイトルを文字列として取得する。

**JMP追加されたバージョン:** 16

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );liveconnection = New JMP Live();result = liveconnection << Create Folder(	Parent Folder( "~" ),	Title( "Reports and Posts - Messages" ),	If Exists( "use" ));folder = result << As Scriptable;content = New JMP Live Content(	gbsmoother,	Title( "A Very Important Report" ),	Description( "The Report That Is Published" ),);jmpliveresult = folder << Publish( content );report = Empty();postList = jmpliveresult << As Scriptable;For( i = 1, i <= postlist << Get Number Of Items, i += 1,	posttype = postlist[i] << Get Type;	If( posttype == "Report",		report = postlist[i]	););Write( "\!n\!nID: ", report << Get ID );Write( "\!nTitle: ", report << Get Title );

```

### Get Type

**構文:** string = jmplivepost &lt;&lt; Get Type()

**説明:** 特定の種類の投稿（フォルダ、データ、レポート）を取得する。

**JMP追加されたバージョン:** 17

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );liveconnection = New JMP Live();result = liveconnection << Create Folder(	Parent Folder( "~" ),	Title( "Reports and Posts - Messages" ),	If Exists( "use" ));folder = result << As Scriptable;content = New JMP Live Content(	gbsmoother,	Title( "A Very Important Report" ),	Description( "The Report That Is Published" ),);jmpliveresult = folder << Publish( content );report = Empty();postList = jmpliveresult << As Scriptable;For( i = 1, i <= postlist << Get Number Of Items, i += 1,	posttype = postlist[i] << Get Type;	If( posttype == "Report",		report = postlist[i]	););Write( "\!n\!nID: ", report << Get ID );Write( "\!nType: ", report << Get Type );

```

### Get URL

**構文:** string = jmplivepost &lt;&lt; Get URL()

**説明:** JMP Liveレポート、JMP Liveフォルダ、またはJMP Live投稿のURLを文字列として取得する。

**JMP追加されたバージョン:** 16

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );liveconnection = New JMP Live();result = liveconnection << Create Folder(	Parent Folder( "~" ),	Title( "Reports and Posts - Messages" ),	If Exists( "use" ));folder = result << As Scriptable;content = New JMP Live Content(	gbsmoother,	Title( "A Very Important Report" ),	Description( "The Report That Is Published" ),);jmpliveresult = folder << Publish( content );report = Empty();postList = jmpliveresult << As Scriptable;For( i = 1, i <= postlist << Get Number Of Items, i += 1,	posttype = postlist[i] << Get Type;	If( posttype == "Report",		report = postlist[i]	););Write( "\!n\!nID: ", report << Get ID );Write( "\!nURL: ", report << Get URL );

```

### Set Description

**構文:** success = jmplivepost &lt;&lt; Set Description("string value")

**説明:** JMP Liveレポート、JMP Liveフォルダ、またはJMP Live投稿の説明の文字列を設定する。成功か失敗かを示す真(true）または偽(false)を戻す。

**JMP追加されたバージョン:** 16

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );liveconnection = New JMP Live();result = liveconnection << Create Folder(	Parent Folder( "~" ),	Title( "Reports and Posts - Messages" ),	If Exists( "use" ));folder = result << As Scriptable;content = New JMP Live Content(	gbsmoother,	Title( "A Very Important Report" ),	Description( "The Report That Is Published" ),);jmpliveresult = folder << Publish( content );report = Empty();postList = jmpliveresult << As Scriptable;For( i = 1, i <= postlist << Get Number Of Items, i += 1,	posttype = postlist[i] << Get Type;	If( posttype == "Report",		report = postlist[i]	););Write( "\!n\!nID: ", report << Get ID );Write( "\!nDescription: ", report << Get Description );report << Set Description( "A Much Nicer Description" );jmpliveresult = liveconnection << Get Report( report << Get ID );updated = jmpliveresult << As Scriptable;Write( "\!n\!nID: ", report << Get ID );Write( "\!nDecription: ", report << Get Description );

```

### Set Title

**構文:** success = jmplivepost &lt;&lt; Set Title("New Title")

**説明:** JMP Liveレポート、JMP Liveフォルダ、またはJMP Live投稿のタイトルを設定する。成功か失敗かを示す真(true）または偽(false)を戻す。

**JMP追加されたバージョン:** 16

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );liveconnection = New JMP Live();result = liveconnection << Create Folder(	Parent Folder( "~" ),	Title( "Reports and Posts - Messages" ),	If Exists( "use" ));folder = result << As Scriptable;// Make sure the report we will create does not already exist.liveconnection << Delete Report( "~/Reports and Posts - Messages/A New Title" );content = New JMP Live Content(	gbsmoother,	Title( "A Very Important Report" ),	Description( "The Report That Is Published" ),);jmpliveresult = folder << Publish( content );report = Empty();postList = jmpliveresult << As Scriptable;For( i = 1, i <= postlist << Get Number Of Items, i += 1,	posttype = postlist[i] << Get Type;	If( posttype == "Report",		report = postlist[i]	););Write( "\!n\!nID: ", report << Get ID );Write( "\!nTitle: ", report << Get Title );report << Set Title( "A New Title" );jmpliveresult = liveconnection << Get Report( report << Get ID );updated = jmpliveresult << As Scriptable;Write( "\!n\!nID: ", report << Get ID );Write( "\!nTitle: ", report << Get Title );

```


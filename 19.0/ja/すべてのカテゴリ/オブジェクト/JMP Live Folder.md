# JMP Live Folder



## 項目のメッセージ

### Add Reports To Folder

**構文:** jmpliveresultlist = folder &lt;&lt; Add Reports To Folder(JMPLiveContent, &lt;Use Existing Data({{dt_or_name, id | relative_path | JMP Live Data}})&gt;)

**説明:** Add Reports To Folderメッセージは廃止されました。代わりにPublishを使用してください。

**JMP追加されたバージョン:** 16

### Create Folder

**構文:** liveresult = folder &lt;&lt; Create Folder(Title("Title"), &lt;Description("Description")&gt;, &lt;If Exists("use" | "fail" | "default")&gt;)

**説明:** JMP Live上にこのフォルダのサブフォルダを作成する。戻されるJMP Live結果を使って、JMP Liveフォルダオブジェクトを取得することができる。Titleは、必須のパラメータ。Descriptionはオプション。If Existsは、指定したフォルダがすでに存在する場合にどうするかをJMP Liveに指示する。"use"なら、ただ既存のフォルダを戻し、"fail"ならエラーをスローし、"default"なら、新しいフォルダを作成して"(2)"や"(3)"などを追加した一意の名前をつける。

**JMP追加されたバージョン:** 19

```jsl

liveconnection = New JMP Live();

existingFolder = (liveconnection << Get Folder( "~" )) << As Scriptable;

newFolder = (existingFolder << Create Folder(
	Title( "Important Reports" ),
	If Exists( "default" )
)) << As Scriptable;

Write( "New folder path: ", newFolder << Get Path );

```

### Get Children

**構文:** jmpliveresultlist = folder &lt;&lt; Get Children(&lt;PAGESIZE(10)&gt;)

**説明:** フォルダに含まれている子投稿をJMP Live結果リストとして取得する。オプションのpagesize引数を使うと、戻される投稿の数を制御できる。

**JMP追加されたバージョン:** 16

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
gblinebar = bc << Run Script( "Graph Builder Line and Bar Charts" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );
gbline = bc << Run Script( "Graph Builder Line Chart" );
gbheat = bc << Run Script( "Graph Builder Heatmap" );

liveconnection = New JMP Live();

jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Folder - Get Children Example" )
);
folder = jmpliveresult << As Scriptable;

contentlist = {};
Insert Into(
	contentlist,
	New JMP Live Content( gbsmoother, Title( "SearchString - Graph Builder Smoother Line" ) )
);
Insert Into(
	contentlist,
	New JMP Live Content(
		gblinebar,
		Title( "SearchString - Graph Builder Line and Bar Charts" )
	)
);
Insert Into(
	contentlist,
	New JMP Live Content( gbline, Title( "SearchString - Graph Builder Line Chart" ) )
);
Insert Into(
	contentlist,
	New JMP Live Content( gbheat, Title( "SearchString - Graph Builder Heatmap" ) )
);
jmpliveresult = folder << Publish( contentlist );

jmpliveresult = folder << Get Children;
children = jmpliveresult << As Scriptable;
For( i = 1, i <= children << Get Number Of Items, i += 1,
	Write( "\!n\!nChild ID: ", children[i] << Get ID );
	Write( "\!nChild Type: ", children[i] << Get Type );
);

```

### Get Data

**構文:** result = jmplivefolder &lt;&lt; Get Data(id | relative_path)

**説明:** フォルダからデータ投稿をJMP Live結果オブジェクトとして取得する。これを使ってその投稿のJMP Liveデータオブジェクトを取得することができる。

**JMP追加されたバージョン:** 19

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );

liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Reports and Posts - Messages" ),
	If Exists( "use" )
);
folder = jmpliveresult << As Scriptable;

content = New JMP Live Content(
	gbsmoother,
	Title( "A Very Important Report" ),
	Description( "The Report That Is Published" ),

);
jmpliveresult = folder << Publish( content );

post = (folder << Get Data( "Big Class" )) << As Scriptable;

Write( "\!n\!nTitle: ", post << Get Title );

```

### Get Description

**構文:** string = jmplivepost &lt;&lt; Get Description()

**説明:** JMP Liveレポート、JMP Liveフォルダ、またはJMP Live投稿の説明を文字列として取得する。

**JMP追加されたバージョン:** 16

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );

liveconnection = New JMP Live();
result = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Reports and Posts - Messages" ),
	If Exists( "use" )
);
folder = result << As Scriptable;

content = New JMP Live Content(
	gbsmoother,
	Title( "A Very Important Report" ),
	Description( "The Report That Is Published" )
);
jmpliveresult = folder << Publish( content );

report = Empty();
postList = jmpliveresult << As Scriptable;
For( i = 1, i <= postlist << Get Number Of Items, i += 1,
	posttype = postlist[i] << Get Type;
	If( posttype == "Report",
		report = postlist[i]
	);
);
Write( "\!n\!nID: ", report << Get ID );
Write( "\!nDescription: ", report << Get Description );

```

### Get Folder

**構文:** result = jmplivefolder &lt;&lt; Get Folder(id | relative_path)

**説明:** フォルダの子フォルダをJMP Live結果オブジェクトとして取得する。これを使ってその子フォルダのJMP Liveフォルダオブジェクトを取得することができる。

**JMP追加されたバージョン:** 19

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );

liveconnection = New JMP Live();
personalFolder = (liveConnection << Get Folder( "~" )) << As Scriptable;
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( personalFolder ),
	Title( "Reports and Posts - Messages" ),
	If Exists( "use" )
);
subfolder = jmpliveresult << As Scriptable;

content = New JMP Live Content(
	gbsmoother,
	Title( "A Very Important Report" ),
	Description( "The Report That Is Published" ),

);
jmpliveresult = subfolder << Publish( content );

folder = (personalFolder << Get Folder( "Reports and Posts - Messages" )) << As Scriptable;

Write( "\!n\!nTitle: ", folder << Get Title );

```

### Get ID

**構文:** string = jmplivepost &lt;&lt; Get ID()

**説明:** JMP Liveレポート、JMP Liveフォルダ、またはJMP Live投稿のIDを文字列として取得する。

**JMP追加されたバージョン:** 16

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );

liveconnection = New JMP Live();
result = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Reports and Posts - Messages" ),
	If Exists( "use" )
);
folder = result << As Scriptable;

content = New JMP Live Content(
	gbsmoother,
	Title( "A Very Important Report" ),
	Description( "The Report That Is Published" ),

);
jmpliveresult = folder << Publish( content );

report = Empty();
postList = jmpliveresult << As Scriptable;
For( i = 1, i <= postlist << Get Number Of Items, i += 1,
	posttype = postlist[i] << Get Type;
	If( posttype == "Report",
		report = postlist[i]
	);
);

Write( "\!n\!nID: ", report << Get ID );

```

### Get Number Of Items

**構文:** value = jmplivefolder &lt;&lt; Get Number Of Items()

**説明:** フォルダ内のアイテムの数を取得する。

**JMP追加されたバージョン:** 16

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
gblinebar = bc << Run Script( "Graph Builder Line and Bar Charts" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );
gbline = bc << Run Script( "Graph Builder Line Chart" );
gbheat = bc << Run Script( "Graph Builder Heatmap" );

liveconnection = New JMP Live();

jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Folder - Get Children Count Example" )
);
folder = jmpliveresult << As Scriptable;

contentlist = {};
Insert Into(
	contentlist,
	New JMP Live Content( gbsmoother, Title( "SearchString - Graph Builder Smoother Line" ) )
);
Insert Into(
	contentlist,
	New JMP Live Content(
		gblinebar,
		Title( "SearchString - Graph Builder Line and Bar Charts" )
	)
);
Insert Into(
	contentlist,
	New JMP Live Content( gbline, Title( "SearchString - Graph Builder Line Chart" ) )
);
Insert Into(
	contentlist,
	New JMP Live Content( gbheat, Title( "SearchString - Graph Builder Heatmap" ) )
);
jmpliveresult = folder << Publish( contentlist );

count = folder << Get Number of Items;
Write( "\!n\!nChild Count: ", count );

```

### Get Path

**構文:** string = jmplivepost &lt;&lt; Get Path()

**説明:** このJMP Liveレポート、フォルダ、または投稿のパスを文字列として取得する。

**JMP追加されたバージョン:** 19

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );

liveconnection = New JMP Live();
result = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Reports and Posts - Messages" ),
	If Exists( "use" )
);
folder = result << As Scriptable;

content = New JMP Live Content(
	gbsmoother,
	Title( "A Very Important Report" ),
	Description( "The Report That Is Published" ),

);
jmpliveresult = folder << Publish( content );

report = Empty();
postList = jmpliveresult << As Scriptable;
For( i = 1, i <= postlist << Get Number Of Items, i += 1,
	posttype = postlist[i] << Get Type;
	If( posttype == "Report",
		report = postlist[i]
	);
);

Write( "\!n\!nPath: ", report << Get Path );

```

### Get Post

**構文:** result = jmplivefolder &lt;&lt; Get Post(id | relative_path)

**説明:** フォルダから投稿をJMP Live結果オブジェクトとして取得する。これを使ってその投稿のJMP Live投稿オブジェクトを取得することができる。

**JMP追加されたバージョン:** 19

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );

liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Reports and Posts - Messages" ),
	If Exists( "use" )
);
folder = jmpliveresult << As Scriptable;

content = New JMP Live Content(
	gbsmoother,
	Title( "A Very Important Report" ),
	Description( "The Report That Is Published" ),

);
jmpliveresult = folder << Publish( content );
post = (folder << Get Post( "A Very Important Report" )) << As Scriptable;

Write( "\!n\!nTitle: ", post << Get Title );

```

### Get Report

**構文:** result = jmplivepost &lt;&lt; Get Report(id | relative_path)

**説明:** フォルダからレポート投稿をJMP Live結果オブジェクトとして取得する。これを使ってそのレポートのJMP Liveレポートオブジェクトを取得することができる。

**JMP追加されたバージョン:** 19

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );

liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Reports and Posts - Messages" ),
	If Exists( "use" )
);
folder = jmpliveresult << As Scriptable;

content = New JMP Live Content(
	gbsmoother,
	Title( "A Very Important Report" ),
	Description( "The Report That Is Published" ),

);
jmpliveresult = folder << Publish( content );

post = (folder << Get Report( "A Very Important Report" )) << As Scriptable;

Write( "\!n\!nTitle: ", post << Get Title );

```

### Get Title

**構文:** string = jmplivepost &lt;&lt; Get Title()

**説明:** JMP Liveレポート、JMP Liveフォルダ、またはJMP Live投稿のタイトルを文字列として取得する。

**JMP追加されたバージョン:** 16

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );

liveconnection = New JMP Live();
result = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Reports and Posts - Messages" ),
	If Exists( "use" )
);
folder = result << As Scriptable;

content = New JMP Live Content(
	gbsmoother,
	Title( "A Very Important Report" ),
	Description( "The Report That Is Published" ),

);
jmpliveresult = folder << Publish( content );

report = Empty();
postList = jmpliveresult << As Scriptable;
For( i = 1, i <= postlist << Get Number Of Items, i += 1,
	posttype = postlist[i] << Get Type;
	If( posttype == "Report",
		report = postlist[i]
	);
);
Write( "\!n\!nID: ", report << Get ID );
Write( "\!nTitle: ", report << Get Title );

```

### Get Type

**構文:** string = jmplivepost &lt;&lt; Get Type()

**説明:** 特定の種類の投稿（フォルダ、データ、レポート）を取得する。

**JMP追加されたバージョン:** 17

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );

liveconnection = New JMP Live();
result = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Reports and Posts - Messages" ),
	If Exists( "use" )
);
folder = result << As Scriptable;

content = New JMP Live Content(
	gbsmoother,
	Title( "A Very Important Report" ),
	Description( "The Report That Is Published" ),

);
jmpliveresult = folder << Publish( content );

report = Empty();
postList = jmpliveresult << As Scriptable;
For( i = 1, i <= postlist << Get Number Of Items, i += 1,
	posttype = postlist[i] << Get Type;
	If( posttype == "Report",
		report = postlist[i]
	);
);

Write( "\!n\!nID: ", report << Get ID );
Write( "\!nType: ", report << Get Type );

```

### Get URL

**構文:** string = jmplivepost &lt;&lt; Get URL()

**説明:** JMP Liveレポート、JMP Liveフォルダ、またはJMP Live投稿のURLを文字列として取得する。

**JMP追加されたバージョン:** 16

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );

liveconnection = New JMP Live();
result = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Reports and Posts - Messages" ),
	If Exists( "use" )
);
folder = result << As Scriptable;

content = New JMP Live Content(
	gbsmoother,
	Title( "A Very Important Report" ),
	Description( "The Report That Is Published" ),

);
jmpliveresult = folder << Publish( content );

report = Empty();
postList = jmpliveresult << As Scriptable;
For( i = 1, i <= postlist << Get Number Of Items, i += 1,
	posttype = postlist[i] << Get Type;
	If( posttype == "Report",
		report = postlist[i]
	);
);
Write( "\!n\!nID: ", report << Get ID );
Write( "\!nURL: ", report << Get URL );

```

### Publish

**構文:** jmpliveresultlist = folder &lt;&lt; Publish(JMPLiveContent, &lt;Use Existing Data({{dt_or_name, id | relative_path | JMP Live Data}})&gt;)

**説明:** JMP Liveフォルダにレポートまたは単独のデータを発行する。JMP Live結果リスト（JMP Live Result List）オブジェクトを戻す。Add Reports To Folderメッセージに代わるもの。1つのPublishコマンドにレポートと単独のデータを混在させることはできない。レポートがすでにJMP Liveにあるデータを使用する場合は、オプションのUse Existing Dataパラメータを使用してそのデータを指定する。単独のデータを発行する場合、Use Existing Dataパラメータは無効。

**JMP追加されたバージョン:** 19

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
gblinebar = bc << Run Script( "Graph Builder Line and Bar Charts" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );
gbline = bc << Run Script( "Graph Builder Line Chart" );
gbheat = bc << Run Script( "Graph Builder Heatmap" );

liveconnection = New JMP Live();

jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Folder - Publish Example" ),
	If Exists( "use" )
);
folder = jmpliveresult << As Scriptable;

contentlist = {};
Insert Into(
	contentlist,
	New JMP Live Content( gbsmoother, Title( "SearchString - Graph Builder Smoother Line" ) )
);
Insert Into(
	contentlist,
	New JMP Live Content(
		gblinebar,
		Title( "SearchString - Graph Builder Line and Bar Charts" )
	)
);
Insert Into(
	contentlist,
	New JMP Live Content( gbline, Title( "SearchString - Graph Builder Line Chart" ) )
);
Insert Into(
	contentlist,
	New JMP Live Content( gbheat, Title( "SearchString - Graph Builder Heatmap" ) )
);
jmpliveresult = folder << Publish( contentlist );
postlist = jmpliveresult << As Scriptable();
For( i = 1, i <= postlist << Get Number Of Items, i += 1,
	Write( "\!n\!nPost[", i, "]", "(ID): ", postlist[i] << Get ID );
	Write( "\!nPost[", i, "]", "(Type): ", postlist[i] << Get Type );
	Write( "\!nPost[", i, "]", "(Title): ", postlist[i] << Get Title );
);

```

### Replace

**構文:** liveresult = jmplivefolder &lt;&lt; Replace(Report(id | relative_path | JMP Live Report), JMPLiveContent, &lt;Use Existing Data({{dt_or_name, data_id | data_path | JMP Live Data}})&gt;, &lt;Update Existing Data({{dt_or_name, data_id | data_path | JMP Live Data}})&gt;, &lt;Publish New Data({dt_or_name})&gt; )

**説明:** フォルダ内にある既存のJMP Liveレポートを別のレポートで置き換える。レポートと共に提供されるデータを管理する方法を指定するためには、データオプションが必要。"Use Existing Data"は、指定されたデータに対してJMP Liveの既存のデータを使用するようサーバーに指示する。"Update Existing Data"は、サーバー上のデータをコマンドで指定されたデータに置き換えるようサーバーに指示する。"Publish New Data"は、新しいデータテーブルをサーバーに発行し、置き換えられるレポートでそのデータを使用するように指示する。"Publish New Data"はすべてのデータテーブルに対するデフォルトのデータオプションとなる。データオプションは任意の組み合わせを指定することが可能。JMP Live結果リストオブジェクトが戻される。

**JMP追加されたバージョン:** 19

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
gblinebar = bc << Run Script( "Graph Builder Line and Bar Charts" );
content1 = New JMP Live Content( gblinebar, Title( "Line Bar" ) );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );
content2 = New JMP Live Content( gbsmoother, Title( "Smoother" ) );

liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Folder - Replace Example" ),
	If Exists( "use" )
);
folder = jmpliveresult << As Scriptable;
publishList = (folder << Publish( content1 )) << As Scriptable;
publishedReport = publishList[1];

replaceResult = folder << Replace( Report( publishedReport ), content2 );

resultList = replaceResult << As Scriptable();
Write( "\!n\!nUpdated report and data: ", resultList );

```

### Set Description

**構文:** success = jmplivepost &lt;&lt; Set Description("string value")

**説明:** JMP Liveレポート、JMP Liveフォルダ、またはJMP Live投稿の説明の文字列を設定する。成功か失敗かを示す真(true）または偽(false)を戻す。

**JMP追加されたバージョン:** 16

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );

liveconnection = New JMP Live();
result = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Reports and Posts - Messages" ),
	If Exists( "use" )
);
folder = result << As Scriptable;

content = New JMP Live Content(
	gbsmoother,
	Title( "A Very Important Report" ),
	Description( "The Report That Is Published" ),

);
jmpliveresult = folder << Publish( content );

report = Empty();
postList = jmpliveresult << As Scriptable;
For( i = 1, i <= postlist << Get Number Of Items, i += 1,
	posttype = postlist[i] << Get Type;
	If( posttype == "Report",
		report = postlist[i]
	);
);
Write( "\!n\!nID: ", report << Get ID );
Write( "\!nDescription: ", report << Get Description );

report << Set Description( "A Much Nicer Description" );
jmpliveresult = liveconnection << Get Report( report << Get ID );
updated = jmpliveresult << As Scriptable;

Write( "\!n\!nID: ", report << Get ID );
Write( "\!nDecription: ", report << Get Description );

```

### Set Title

**構文:** success = jmplivepost &lt;&lt; Set Title("New Title")

**説明:** JMP Liveレポート、JMP Liveフォルダ、またはJMP Live投稿のタイトルを設定する。成功か失敗かを示す真(true）または偽(false)を戻す。

**JMP追加されたバージョン:** 16

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );

liveconnection = New JMP Live();
result = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Reports and Posts - Messages" ),
	If Exists( "use" )
);
folder = result << As Scriptable;
// Make sure the report we will create does not already exist.
liveconnection << Delete Report( "~/Reports and Posts - Messages/A New Title" );

content = New JMP Live Content(
	gbsmoother,
	Title( "A Very Important Report" ),
	Description( "The Report That Is Published" ),

);
jmpliveresult = folder << Publish( content );

report = Empty();
postList = jmpliveresult << As Scriptable;
For( i = 1, i <= postlist << Get Number Of Items, i += 1,
	posttype = postlist[i] << Get Type;
	If( posttype == "Report",
		report = postlist[i]
	);
);
Write( "\!n\!nID: ", report << Get ID );
Write( "\!nTitle: ", report << Get Title );

report << Set Title( "A New Title" );
jmpliveresult = liveconnection << Get Report( report << Get ID );
updated = jmpliveresult << As Scriptable;

Write( "\!n\!nID: ", report << Get ID );
Write( "\!nTitle: ", report << Get Title );

```

### Update Data

**構文:** result = jmplivefolder &lt;&lt; Update Data(Data(id | relative_path | JMP Live Data), dataTable | path | JMPLiveContent)

**説明:** フォルダ内のデータ投稿に使うデータテーブルまたは地図を更新する。Dataパラメータは、更新するJMP Live上のデータ。2番目のパラメータは更新に使用するコンテンツで、データテーブルオブジェクト、データテーブルへのパス、データテーブルまたは地図から作成したJMP Liveコンテンツオブジェクトを指定できる。

**JMP追加されたバージョン:** 19

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
gblinebar = bc << Run Script( "Graph Builder Line and Bar Charts" );
content = New JMP Live Content( gblinebar, Title( "Line Bar" ) );

liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Folder - Replace Example" ),
	If Exists( "use" )
);
folder = jmpliveresult << As Scriptable;
publishList = (folder << Publish( content )) << As Scriptable;
publishedData = publishList[2];

bc << Add Rows( 1 );
bc[N Rows(), 0] = {"KEIRA", 16, "F", 62, 112};
bc << Add Rows( 1 );
bc[N Rows(), 0] = {"ORLANDO", 17, "M", 66, 164};

updateResult = folder << Update Data( Data( publishedData ), bc );

updatedData = updateResult << As Scriptable;
Write( "\!n\!nUpdated data: ", updatedData );

```


# JMP Live Connection



## 項目のメッセージ

### Create Folder

**構文:** liveresult = liveconnection << Create Folder(Title(folder_title), Parent Folder(id | path | JMP Live Folder), <Description(folder_description)>, <If Exists("use" | "fail" | "default")>)

**説明:** JMP Live上に新しいフォルダを作成する。戻されるJMP Live結果を使って、新しいフォルダのJMP Liveフォルダオブジェクトを取得することができる。TitleとParent Folderは、必須のパラメータ。Parent Folderは、ParentまたはFolderと略記することもできる。Descriptionはオプション。If Existsは、指定したフォルダがすでに存在する場合にどうするかをJMP Liveに指示する。"use"なら、ただ既存のフォルダを戻し、"fail"ならエラーをスローし、"default"なら、新しいフォルダを作成して"(2)"や"(3)"などを追加した一意の名前をつける。

**JMP追加されたバージョン:** 16

**例 1**

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Create Folder Example" ),
	Description( "Folder created in the scripting index example script." )
);
folder = jmpliveresult << As Scriptable;
id = folder << Get ID;
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( id ),
	Title( "Folder created using ID for parent" )
);
subfolder = jmpliveresult << As Scriptable;
Show( subfolder );

```

**例 2**

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Create Folder Example" ),
	If Exists( "use" ),
	Description( "Folder created in the scripting index example script." )
);
folder = jmpliveresult << As Scriptable;
Write( "\!n\!nNew folder ID: ", folder << Get ID, "  Path: ", folder << Get Path );

```

**例 3**

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Create Nested Subfolder Example" ),
	If Exists( "use" ),
	Description(
		"Folder created in the scripting index example script to serve as a top level folder."
	),

);
folder = jmpliveresult << As Scriptable;
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( folder ),
	Title( "Nested Subfolder Number 1" ),
	Description( "The First Subfolder." )
);
subFolder1 = jmpliveresult << As Scriptable;
Show( subFolder1 );
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( folder ),
	Title( "Nested Subfolder Number 2" ),
	Description( "The Second Subfolder." )
);
subFolder2 = jmpliveresult << As Scriptable;
Show( subFolder2 );

```

### Delete Data

**構文:** jmpliveresult = liveconnection << Delete Data(id | path | JMP Live Data)

**説明:** 指定したデータ投稿を削除する。アクションが正常に行われた(1)かそうでない(0)かを戻す。

**JMP追加されたバージョン:** 17

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();
// Create a folder to publish a report and data to
folder = (liveconnection << Create Folder(
	Title( "Delete Data Example" ),
	Parent( "~" ),
	If Exists( "use" )
)) << As Scriptable;

// Publish a report and data to the folder
bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );
content = New JMP Live Content( gbsmoother, Title( "Smoother" ) );
publishedContent = (folder << Publish( content )) << As Scriptable;
report = publishedContent[1];
data = publishedContent[2];

// Delete the report by object
result = liveconnection << Delete Report( report );
If( result == 1,
	Write( "\!nReport was successfully deleted" ),
	Write( "\!nProblem deleting report" )
);

// Delete the data by path
result = liveconnection << Delete Data( "~/Delete Data Example/Big Class" );
If( result == 1,
	Write( "\!nData was successfully deleted" ),
	Write( "\!nProblem deleting data" )
);

// Delete the folder by ID
result = liveconnection << Delete Folder( folder << Get ID );
If( result == 1,
	Write( "\!nFolder was successfully deleted" ),
	Write( "\!nProblem deleting folder" )
);

```

### Delete Folder

**構文:** jmpliveresult = liveconnection << Delete Folder(id | path | JMP Live Folder)

**説明:** 指定したフォルダを削除する。アクションが成功したか(1)、失敗したか(0)を戻す。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();
// Create a folder to publish a report and data to
folder = (liveconnection << Create Folder(
	Title( "Delete Folder Example" ),
	Parent( "~" ),
	If Exists( "use" )
)) << As Scriptable;

// Publish a report and data to the folder
bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );
content = New JMP Live Content( gbsmoother, Title( "Smoother" ) );
publishedContent = (folder << Publish( content )) << As Scriptable;
report = publishedContent[1];
data = publishedContent[2];

// Delete the report by ID
result = liveconnection << Delete Report( report << Get ID );
If( result == 1,
	Write( "\!nReport was successfully deleted" ),
	Write( "\!nProblem deleting report" )
);

// Delete the data using the JMP Live Data object
result = liveconnection << Delete Data( data );
If( result == 1,
	Write( "\!nData was successfully deleted" ),
	Write( "\!nProblem deleting data" )
);

// Delete the folder by path
result = liveconnection << Delete Folder( "~/Delete Folder Example" );
If( result == 1,
	Write( "\!nFolder was successfully deleted" ),
	Write( "\!nProblem deleting folder" )
);

```

### Delete Report

**構文:** jmpliveresult = liveconnection << Delete Report(id | path | JMP Live Report)

**説明:** 指定したレポートを削除する。アクションが成功したか(1)、失敗したか(0)を戻す。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();
// Create a folder to publish a report and data to
folder = (liveconnection << Create Folder(
	Title( "Delete Report Example" ),
	Parent( "~" ),
	If Exists( "use" )
)) << As Scriptable;

// Publish a report and data to the folder
bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );
content = New JMP Live Content( gbsmoother, Title( "Smoother" ) );
publishedContent = (folder << Publish( content )) << As Scriptable;
report = publishedContent[1];
data = publishedContent[2];

// Delete the report by path
result = liveconnection << Delete Report( "~/Delete Report Example/Smoother" );
If( result == 1,
	Write( "\!nReport was successfully deleted" ),
	Write( "\!nProblem deleting report" )
);

// Delete the data by ID
result = liveconnection << Delete Data( data << Get ID );
If( result == 1,
	Write( "\!nData was successfully deleted" ),
	Write( "\!nProblem deleting data" )
);

// Delete the folder using the object
result = liveconnection << Delete Folder( folder );
If( result == 1,
	Write( "\!nFolder was successfully deleted" ),
	Write( "\!nProblem deleting folder" )
);

```

### Find Folders

**構文:** jmpliveresult = liveconnection << Find Folders(<Search(search_string)>, <Publisher(user_name)>, <PageSize(val)>)

**説明:** 検索文字列、発行者、または発行者と文字列の両方でフォルダを検索する。JMP Live結果リストを戻す。このリストを使って、リスト内の個々のフォルダを参照できる。結果リストに含めたいフォルダの数は、PageSize値で指定できる。デフォルトのPageSize値は10。検索パラメータはすべてオプションで、何も指定しなかった場合、すべてのフォルダが戻される。

**JMP追加されたバージョン:** 16

**例 1**

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();
user = liveconnection << Get Username;

jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Find Folders Example 1" )
);
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Find Folders Example 2" )
);

jmpliveresult = liveconnection << Find Folders( Publisher( user ), PageSize( 5 ) );
folderlist = jmpliveresult << As Scriptable();
Write( "\!nFind Folders(Count): ", folderlist << Get Number Of Items );
For( i = 1, i <= folderlist << Get Number Of Items, i += 1,
	Write( "\!nFolder[", i, "]", "(ID): ", folderlist[i] << Get ID );
	Write( "\!nFolder[", i, "]", "(Title): ", folderlist[i] << Get Title );
);

```

**例 2**

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();

jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Find Folders Example - Search String 1" )
);
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Find Folders Example X" )
);
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Find Folders Example - Search String 2" )
);
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Find Folders Example Y" )
);

jmpliveresult = liveconnection << Find Folders( Search( "Search String" ), PageSize( 5 ) );
folderlist = jmpliveresult << As Scriptable();
Write( "\!nFind Folders(Count): ", folderlist << Get Number Of Items );
For( i = 1, i <= folderlist << Get Number Of Items, i += 1,
	Write( "\!nFolder[", i, "]", "(ID): ", folderlist[i] << Get ID );
	Write( "\!nFolder[", i, "]", "(Title): ", folderlist[i] << Get Title );
);

```

### Find Posts

**構文:** jmpliveresult = liveconnection << Find Posts(<Search(search_string)>, <Publisher(user_name)>, <PageSize(val)>)

**説明:** 検索文字列、発行者、または発行者と文字列の両方で投稿(フォルダ、レポート、データを含む全項目)を検索する。JMP Live結果リストを戻す。このリストを使って、リスト内の個々の投稿を参照できる。結果リストに含めたい投稿の数は、PageSize値で指定できる。デフォルトのPageSize値は10。検索パラメータはすべてオプションで、何も指定しなかった場合、すべての投稿が戻される。

**JMP追加されたバージョン:** 16

**例 1**

```jsl

Names Default To Here( 1 );
bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
dist = bc << Run Script( "Distribution" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );
gbline = bc << Run Script( "Graph Builder Line and Bar Charts" );
gbheat = bc << Run Script( "Graph Builder Heatmap" );

liveconnection = New JMP Live();
user = liveconnection << Get Username;

jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Find Posts Example" )
);
folder = jmpliveresult << As Scriptable;

contentlist = {};
Insert Into( contentlist, New JMP Live Content( dist ) );
Insert Into( contentlist, New JMP Live Content( gbsmoother ) );
Insert Into( contentlist, New JMP Live Content( gbline ) );
Insert Into( contentlist, New JMP Live Content( gbheat ) );

jmpliveresult = liveconnection << Publish( contentlist, Folder( folder ) );
jmpliveresult = liveconnection << Find Posts( Publisher( user ), PageSize( 5 ) );
postlist = jmpliveresult << As Scriptable();
Write( "\!nFind Posts(Count): ", postlist << Get Number Of Items );
For( i = 1, i <= postlist << Get Number Of Items, i += 1,
	Write( "\!nPost[", i, "]", "(ID): ", postlist[i] << Get ID );
	Write( "\!nPost[", i, "]", "(Type): ", postlist[i] << Get Type );
	Write( "\!nPost[", i, "]", "(Title): ", postlist[i] << Get Title );
);

```

**例 2**

```jsl

Names Default To Here( 1 );
bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
dist = bc << Run Script( "Distribution" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );
gbline = bc << Run Script( "Graph Builder Line and Bar Charts" );

liveconnection = New JMP Live();

jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Find Posts Example" ),
	Description( "Has Graph Builder Reports" )
);
folder = jmpliveresult << As Scriptable;

contentlist = {};
Insert Into( contentlist, New JMP Live Content( dist ) );
Insert Into( contentlist, New JMP Live Content( gbsmoother ) );
Insert Into( contentlist, New JMP Live Content( gbline ) );

jmpliveresult = liveconnection << Publish( contentlist, Folder( folder ) );
jmpliveresult = liveconnection << Find Posts( Search( "Graph Builder" ), PageSize( 5 ) );
postlist = jmpliveresult << As Scriptable();
Write( "\!nFind Posts(Count): ", postlist << Get Number Of Items );
For( i = 1, i <= postlist << Get Number Of Items, i += 1,
	Write( "\!nPost[", i, "]", "(ID): ", postlist[i] << Get ID );
	Write( "\!nPost[", i, "]", "(Type): ", postlist[i] << Get Type );
	Write( "\!nPost[", i, "]", "(Title): ", postlist[i] << Get Title );
);

```

### Find Reports

**構文:** jmpliveresult = liveconnection << Find Reports(<Search(search_string)>, <Publisher(user_name)>, <PageSize(val)>)

**説明:** 検索文字列、発行者、または発行者と文字列の両方でレポートを検索する。JMP Live結果リストを戻す。このリストを使って、リスト内の個々のレポートを参照できる。結果リストに含めたいレポートの数は、PageSize値で指定できる。デフォルトのPageSize値は10。検索パラメータはすべてオプションで、何も指定しなかった場合、すべてのレポートが戻される。

**JMP追加されたバージョン:** 16

**例 1**

```jsl

Names Default To Here( 1 );
bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
dist = bc << Run Script( "Distribution" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );
gbline = bc << Run Script( "Graph Builder Line and Bar Charts" );
gbheat = bc << Run Script( "Graph Builder Heatmap" );

liveconnection = New JMP Live();
user = liveconnection << Get Username;

jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Find Reports Example" )
);
folder = jmpliveresult << As Scriptable;

contentlist = {};
Insert Into( contentlist, New JMP Live Content( dist ) );
Insert Into( contentlist, New JMP Live Content( gbsmoother ) );
Insert Into( contentlist, New JMP Live Content( gbline ) );
Insert Into( contentlist, New JMP Live Content( gbheat ) );

jmpliveresult = liveconnection << Publish( contentlist, Folder( folder ) );
jmpliveresult = liveconnection << Find Reports( Publisher( user ), PageSize( 5 ) );
reportlist = jmpliveresult << As Scriptable();
Write( "\!nFind Reports(Count): ", reportlist << Get Number Of Items );
For( i = 1, i <= reportlist << Get Number Of Items, i += 1,
	Write( "\!nReport[", i, "]", "(ID): ", reportlist[i] << Get ID );
	Write( "\!nReport[", i, "]", "(Title): ", reportlist[i] << Get Title );
);

```

**例 2**

```jsl

Names Default To Here( 1 );
bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
dist = bc << Run Script( "Distribution" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );
gbline = bc << Run Script( "Graph Builder Line and Bar Charts" );
gbheat = bc << Run Script( "Graph Builder Heatmap" );

liveconnection = New JMP Live();
user = liveconnection << Get Username;

jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Find Reports Example" )
);
folder = jmpliveresult << As Scriptable;

contentlist = {};
Insert Into( contentlist, New JMP Live Content( dist ) );
Insert Into( contentlist, New JMP Live Content( gbsmoother ) );
Insert Into( contentlist, New JMP Live Content( gbline ) );
Insert Into( contentlist, New JMP Live Content( gbheat ) );

jmpliveresult = liveconnection << Publish( contentlist, Folder( folder ) );
jmpliveresult = liveconnection << Find Reports( Search( "Graph Builder" ), PageSize( 5 ) );
reportlist = jmpliveresult << As Scriptable();
Write( "\!nFind Reports(Count): ", reportlist << Get Number Of Items );
For( i = 1, i <= reportlist << Get Number Of Items, i += 1,
	Write( "\!nReport[", i, "]", "(ID): ", reportlist[i] << Get ID );
	Write( "\!nReport[", i, "]", "(Title): ", reportlist[i] << Get Title );
);

```

### Find Spaces

**構文:** jmpliveresult = liveconnection << Find Spaces(<Permissions( "Contribute" )>, <Search(search_string)>, <PageSize(val)>)

**説明:** オプションの検索文字列とオプションのPermissionsパラメータでスペースを検索し、投稿を許可しているスペースだけに絞り込む。現在、権限の値としてサポートされているのは投稿の権限のみ。JMP Live結果リストを戻す。このリストを使って、リスト内の個々のスペースを参照できる。結果リストに含めたいスペース項目の数は、PageSize値で指定できる。Next()を使用すると、次ページのスペースを取得できる。

**JMP追加されたバージョン:** 18

**例 1**

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();

jmpliveresult = liveconnection << Find Spaces();
spaceList = jmpliveresult << As Scriptable;

Write( "\!n\!nSpace(Count): ", spaceList << Get Number Of Items );
For( i = 1, i <= spaceList << Get Number Of Items, i += 1,
	Write( "\!n\!nSpace[", i, "]", "(Name): ", spaceList[i] << Get Name );
	Write( "\!nSpace[", i, "]", "(Type): ", spaceList[i] << Get Type );
	Write( "\!nSpace[", i, "]", "(Key): ", spaceList[i] << Get Key );
	Write( "\!nSpace[", i, "]", "(Description): ", spaceList[i] << Get Description );
);

```

**例 2**

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();

jmpliveresult = liveconnection << Find Spaces( Permissions( "Contribute" ) );
spaceList = jmpliveresult << As Scriptable;

Write( "\!n\!nSpace(Count): ", spaceList << Get Number Of Items );
For( i = 1, i <= spaceList << Get Number Of Items, i += 1,
	Write( "\!n\!nSpace[", i, "]", "(Name): ", spaceList[i] << Get Name );
	Write( "\!nSpace[", i, "]", "(Type): ", spaceList[i] << Get Type );
	Write( "\!nSpace[", i, "]", "(Key): ", spaceList[i] << Get Key );
	Write( "\!nSpace[", i, "]", "(Description): ", spaceList[i] << Get Description );
);

```

### Get Connection Name

**構文:** string = liveconnection << Get Connection Name()

**説明:** JMP Live接続の名前を文字列として取得する。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();
connectionname = liveconnection << Get Connection Name();
Write( "Connection Name: ", connectionname );

```

### Get Data

**構文:** liveresult = liveconnection << Get Data(id | path)

**説明:** データ投稿をJMP Live結果オブジェクトとして取得する。これを使ってその投稿のJMP Liveデータオブジェクトを取得することができる。

**JMP追加されたバージョン:** 19

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Get Data Example" ),
	If Exists( "use" ),
	Description( "Folder created in the scripting index example script." )
);
folder = jmpliveresult << As Scriptable;

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );

content = New JMP Live Content( gbsmoother );
jmpliveresult = folder << Publish( content );

dataPostID = "";
postList = jmpliveresult << As Scriptable;
For( i = 1, i <= postlist << Get Number Of Items, i += 1,
	posttype = postlist[i] << Get Type;
	If( posttype == "Data",
		dataPostID = postlist[i] << Get ID
	);
);

// Get the data post by ID
dataPost = (liveconnection << Get Data( dataPostID )) << As Scriptable;
Write( "\!n\!nData post retrieved by ID: ", dataPost );

// Get the data post by path
dataPost = (liveconnection << Get Data( "~/Get Data Example/Big Class" )) << As Scriptable;
Write( "\!n\!nData post retrieved by path: ", dataPost );

```

### Get Folder

**構文:** liveresult = liveconnection << Get Folder(id | path)

**説明:** フォルダオブジェクトをJMP Live結果オブジェクトとして取得する。これを使って新しいフォルダのJMP Liveフォルダオブジェクトを取得することができる。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Get Folder Example" ),
	If Exists( "use" ),
	Description( "Folder created in the scripting index example script." )
);
folder = jmpliveresult << As Scriptable;
id = folder << Get ID;

// Get the folder using its ID
jmpliveresult = liveconnection << Get Folder( id );
retrieved = jmpliveresult << As Scriptable;
Write( "\!n\!nID of retrieved folder: ", retrieved << Get ID );

// Get the folder using its path
jmpliveresult = liveconnection << Get Folder( "~/Get Folder Example" );
retrieved = jmpliveresult << As Scriptable;
Write( "\!n\!nPath of retrieved folder: ", retrieved << Get Path );

```

### Get HTTP Request

**構文:** httprequest = liveconnection << Get HTTP Request()

**説明:** JMP LiveのREST関数を呼び出すためのHTTP Requestインスタンスを戻す。

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();
httprequest = liveconnection << Get HTTP Request();

httprequest << Method( "GET" );
httprequest << URL( "/api/webjmp" );
httprequest << Send();
httprequest << Get Status Message();

```

### Get Post

**構文:** liveresult = liveconnection << Get Post(id | path)

**説明:** 投稿をJMP Live結果オブジェクトとして取得する。これを使ってその投稿のJMP Live投稿オブジェクトを取得することができる。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Get Post Example" ),
	If Exists( "use" ),
	Description( "Folder created in the scripting index example script." )
);
folder = jmpliveresult << As Scriptable;

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );

content = New JMP Live Content( gbsmoother, Title( "Smoother" ) );
jmpliveresult = folder << Publish( content );

postList = jmpliveresult << As Scriptable;
For( i = 1, i <= postlist << Get Number Of Items, i += 1,
	result = liveconnection << Get Post( postlist[i] << Get ID );
	post = result << As Scriptable;
	Write( "\!n\!nPost ", i, ": ", post );
);

// Get a post by path
postByPath = (jmpliveresult = liveconnection << Get Post( "~/Get Post Example/Smoother" ))
 << As Scriptable;
Write( "\!n\!nPost retrieved by path: ", postByPath );

```

### Get Report

**構文:** liveresult = liveconnection << Get Report(id | path)

**説明:** レポート投稿をJMP Live結果オブジェクトとして取得する。これを使ってその投稿のJMP Liveレポートオブジェクトを取得することができる。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Get Report Example" ),
	If Exists( "use" ),
	Description( "Folder created in the scripting index example script." )
);
folder = jmpliveresult << As Scriptable;

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );

content = New JMP Live Content( gbsmoother, Title( "Smoother" ) );
jmpliveresult = folder << Publish( content );

reportPostId = "";
postList = jmpliveresult << As Scriptable;
For( i = 1, i <= postlist << Get Number Of Items, i += 1,
	posttype = postlist[i] << Get Type;
	If( posttype == "Report",
		reportPostId = postlist[i] << Get ID
	);
);

// Get the report post by ID
reportPost = (liveconnection << Get Report( reportPostId )) << As Scriptable;
Write( "\!n\!nReport post retrieved by ID: ", reportPost );

// Get the data post by path
reportPost = (liveconnection << Get Report( "~/Get Report Example/Smoother" )) <<
As Scriptable;
Write( "\!n\!nReport post retrieved by path: ", reportPost );

```

### Get URL

**構文:** string = liveconnection << Get URL()

**説明:** JMP LiveサイトのURLを取得する。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();
url = liveconnection << Get URL();
Write( "URL: ", url );

```

### Get Username

**構文:** string = liveconnection << Get Username()

**説明:** JMP Liveオブジェクトのユーザ名を取得する。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();
username = liveconnection << Get UserName();
Write( "Username: ", username );

```

### Is Logged In

**構文:** value = liveconnection << Is Logged In()

**説明:** 認証されたセッションがサーバーに対して確立されているかどうかを調べる。アクションが成功したか（1）、または失敗したか（0）を戻す。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();
isloggedin = liveconnection << Is Logged In();
Write( "Logged In: ", isloggedin );

```

### Publish

**構文:** liveresult = liveconnection << Publish(JMPLiveContent, Folder(id | path | JMP Live Folder), <Use Existing Data({{dt_or_name, data_id | data_path | JMP Live Data}})>)

**説明:** JMP Liveサイトにレポートまたは単独のデータを発行する。JMP Live結果リスト（JMP Live Result List）オブジェクトを戻す。コンテンツの発行先とするJMP Live上のフォルダを指定する必要がある。1つのPublishコマンドにレポートと単独のデータを混在させることはできない。レポートがすでにJMP Liveにあるデータを使用する場合は、オプションのUse Existing Dataパラメータを使用してそのデータを指定する。単独のデータを発行する場合、Use Existing Dataパラメータは無効。

**JMP追加されたバージョン:** 16

**例 1**

```jsl

Names Default To Here( 1 );
bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );

liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Publish Example" )
);
folder = jmpliveresult << As Scriptable;

content = New JMP Live Content( gbsmoother );
jmpliveresult = liveconnection << Publish( content, Folder( folder ) );
postlist = jmpliveresult << As Scriptable();
For( i = 1, i <= postlist << Get Number Of Items, i += 1,
	Write( "\!n\!nPost[", i, "]", "(ID): ", postlist[i] << Get ID );
	Write( "\!nPost[", i, "]", "(Type): ", postlist[i] << Get Type );
	Write( "\!nPost[", i, "]", "(Title): ", postlist[i] << Get Title );
);

```

**例 2**

```jsl

Names Default To Here( 1 );
bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );
gbline = bc << Run Script( "Graph Builder Line and Bar Charts" );

liveconnection = New JMP Live();

jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Publish with Two Reports Example" ),
	If Exists( "use" )
);
folder = jmpliveresult << As Scriptable;

content1 = New JMP Live Content( gbsmoother );
content2 = New JMP Live Content( gbline );
jmpliveresult = liveconnection << Publish( {content1, content2}, Folder( folder ) );
postlist = jmpliveresult << As Scriptable();
For( i = 1, i <= postlist << Get Number Of Items, i += 1,
	Write( "\!n\!nPost[", i, "]", "(ID): ", postlist[i] << Get ID );
	Write( "\!nPost[", i, "]", "(Type): ", postlist[i] << Get Type );
	Write( "\!nPost[", i, "]", "(Title): ", postlist[i] << Get Title );
);

```

**例 3**

```jsl

Names Default To Here( 1 );
bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );
gbline = bc << Run Script( "Graph Builder Line and Bar Charts" );
gbheat = bc << Run Script( "Graph Builder Heatmap" );

liveconnection = New JMP Live();

jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Publish with Data Options Example" ),
	If Exists( "use" )
);
folder = jmpliveresult << As Scriptable;

content1 = New JMP Live Content(
	gbsmoother,
	Title( "Smoother Graph" ),
	Description( "A Report from the Scripting Index Example" )
);
content2 = New JMP Live Content(
	gbline,
	Title( "Line Graph" ),
	Description( "A Report from the Scripting Index Example" )
);
jmpliveresult = liveconnection << Publish( {content1, content2}, Folder( folder ) );

bcDataPostID = "";
postList = jmpliveresult << As Scriptable;
For( i = 1, i <= postlist << Get Number Of Items, i += 1,
	posttype = postlist[i] << Get Type;
	If( posttype == "Data",
		bcDataPostId = postlist[i] << Get ID
	);
);

content1 = New JMP Live Content(
	gbheat,
	Title( "Heatmap" ),
	Description( "A Report from the Scripting Index Example" )
);
jmpliveresult = liveconnection << Publish(
	content1,
	Folder( Folder ),
	Use Existing Data( {{bc, bcDataPostId}} )
);
postlist = jmpliveresult << As Scriptable();
For( i = 1, i <= postlist << Get Number Of Items, i += 1,
	Write( "\!n\!nPost[", i, "]", "(ID): ", postlist[i] << Get ID );
	Write( "\!nPost[", i, "]", "(Type): ", postlist[i] << Get Type );
	Write( "\!nPost[", i, "]", "(Title): ", postlist[i] << Get Title );
);

```

**例 4**

```jsl

Names Default To Here( 1 );

liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Publish Standalone Data Example" ),
	If Exists( "use" )
);
folder = jmpliveresult << As Scriptable;

content = New JMP Live Content( Data( "$SAMPLE_DATA/Big Class.jmp" ) );
jmpliveresult = liveconnection << Publish( content, Folder( folder ) );
postlist = jmpliveresult << As Scriptable();
For( i = 1, i <= postlist << Get Number Of Items, i += 1,
	Write( "\!n\!nPost[", i, "]", "(ID): ", postlist[i] << Get ID );
	Write( "\!nPost[", i, "]", "(Type): ", postlist[i] << Get Type );
	Write( "\!nPost[", i, "]", "(Title): ", postlist[i] << Get Title );
);

```

**例 5**

```jsl

Names Default To Here( 1 );

liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Publish Standalone Data and Maps Example" ),
	If Exists( "use" )
);

folder = jmpliveresult << As Scriptable;

content1 = New JMP Live Content(
	Data( "$SAMPLE_DATA/S4 Temps.jmp" ),
	Title( "S4 Temps Data" ),
	Description( "The data table containing the actual temperature information." )
);
content2 = New JMP Live Content(
	Map( "$SAMPLE_DATA/S4-XY.jmp" ),
	Title( "S4 Coordinate Map File" )
);
content3 = New JMP Live Content(
	Map( "$SAMPLE_DATA/S4-Name.jmp" ),
	Title( "S4 Name Map File" )
);

jmpliveresult = liveconnection << Publish( {content1, content2, content3}, Folder( folder ) );
postlist = jmpliveresult << As Scriptable();
For( i = 1, i <= postlist << Get Number Of Items, i += 1,
	Write( "\!n\!nPost[", i, "]", "(ID): ", postlist[i] << Get ID );
	Write( "\!nPost[", i, "]", "(Type): ", postlist[i] << Get Type );
	Write( "\!nPost[", i, "]", "(Title): ", postlist[i] << Get Title );
);

```

### Replace

**構文:** liveresult = liveconnection << Replace(JMPLiveContent, Report(id | path | JMP Live Report), <Use Existing Data({{dt_or_name, data_id | data_path | JMP Live Data}})>, <Update Existing Data({{dt_or_name, data_id | data_path | JMP Live Data}})>, <Publish New Data({dt_or_name})> )

**説明:** 既存のJMP Liveレポートを別のレポートで置き換える。レポートと共に提供されるデータを管理する方法を指定するためには、データオプションが必要。"Use Existing Data"は、指定されたデータに対してJMP Liveの既存のデータを使用するようサーバーに指示する。"Update Existing Data"は、サーバー上のデータをコマンドで指定されたデータに置き換えるようサーバーに指示する。"Publish New Data"は、新しいデータテーブルをサーバーに発行し、置き換えられるレポートでそのデータを使用するように指示する。"Publish New Data"はすべてのデータテーブルに対するデフォルトのデータオプションとなる。データオプションは任意の組み合わせを指定することが可能。JMP Live結果リストオブジェクトが戻される。

**JMP追加されたバージョン:** 16

**例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/S4 Temps.jmp" );
tod = dt << Run Script( "by Time of Day" );
therm = dt << Run Script( "by Thermometer" );

liveconnection = New JMP Live();

jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Replace Example 1" )
);
folder = jmpliveresult << As Scriptable;
folderURL = folder << Get URL;

content = New JMP Live Content( tod );
jmpliveresult = liveconnection << Publish( content, Folder( folder ) );
postlist = jmpliveresult << As Scriptable;

xyPostId = "";
namePostId = "";
tempsPostId = "";
reportId = "";
For( i = 1, i <= postlist << Get Number Of Items, i += 1,
	title = postlist[i] << Get Title();
	type = postlist[i] << Get Type();
	If( title == "S4-Name",
		namePostId = postlist[i] << Get ID
	);
	If( title == "S4-XY",
		xyPostId = postlist[i] << Get ID
	);
	If( title == "S4 Temps",
		tempsPostId = postlist[i] << Get ID
	);
	If( type == "Report",
		reportId = postlist[i] << Get ID
	);
);

content = New JMP Live Content( therm );
jmpliveresult = liveconnection << Replace(
	content,
	Report( reportId ),
	Use Existing Data( {{"S4-Name", namePostId}, {"S4-XY", xyPostId}} ),
	Update Existing Data( {{"S4 Temps", tempsPostId}} )
);

Write( "\!n\!nOpen this URL to see results: ", folderURL );

```

**例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/S4 Temps.jmp" );
tod = dt << Run Script( "by Time of Day" );
therm = dt << Run Script( "by Thermometer" );

liveconnection = New JMP Live();

jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Replace Example 2" )
);
folder = jmpliveresult << As Scriptable;
folderURL = folder << Get URL;

content = New JMP Live Content( tod );
jmpliveresult = liveconnection << Publish( content, Folder( folder ) );
postlist = jmpliveresult << As Scriptable;

xyPostId = "";
namePostId = "";
reportId = "";
For( i = 1, i <= postlist << Get Number Of Items, i += 1,
	title = postlist[i] << Get Title();
	type = postlist[i] << Get Type();
	If( title == "S4-Name",
		namePostId = postlist[i] << Get ID
	);
	If( title == "S4-XY",
		xyPostId = postlist[i] << Get ID
	);
	If( type == "Report",
		reportId = postlist[i] << Get ID
	);
);

content = New JMP Live Content( therm );
jmpliveresult = liveconnection << Replace(
	content,
	Report( reportId ),
	Use Existing Data( {{"S4-Name", namePostId}, {"S4-XY", xyPostId}} ),
	Publish New Data( {"S4 Temps"} )
);

Write( "\!n\!nOpen this URL to see results: ", folderURL );

```

### Update Data

**構文:** jmpliveresult = liveconnection << Update Data( Data(id | path | JMP Live Data), dataTable | path | JMPLiveContent )

**説明:** データ投稿に使うデータテーブルまたは地図を、指定したコンテンツで更新する。Dataパラメータは、更新するJMP Live上のデータを指す。2番目のパラメータは更新に使用するコンテンツで、データテーブルオブジェクト、データテーブルへのパス、データテーブルまたは地図から作成したJMP Liveコンテンツオブジェクトを指定できる。

**JMP追加されたバージョン:** 16

**例 1**

```jsl

Names Default To Here( 1 );
bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
dist = bc << Run Script( "Distribution" );

liveconnection = New JMP Live();

jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Update Data Example - Using JMP Live Content" ),
	If Exists( "use" )
);
folder = jmpliveresult << As Scriptable;

content = New JMP Live Content( dist );
jmpliveresult = liveconnection << Publish( content, Folder( folder ) );
postlist = jmpliveresult << As Scriptable;

dataPost = Empty();
For( i = 1, i <= postlist << Get Number Of Items, i += 1,
	type = postlist[i] << Get Type();
	If( type == "Data",
		dataPost = postlist[i]
	);
);

content = New JMP Live Content( Data( bc ) );
liveresult = liveconnection << Update Data( Data( dataPost ), content );
updatedData = liveresult << As Scriptable;
Write( "\!n\!nUpdated data: ", updatedData );

```

**例 2**

```jsl

Names Default To Here( 1 );
bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
dist = bc << Run Script( "Distribution" );

liveconnection = New JMP Live();

jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Update Data Example - Using Data Table" ),
	If Exists( "use" )
);
folder = jmpliveresult << As Scriptable;

content = New JMP Live Content( dist );
jmpliveresult = liveconnection << Publish( content, Folder( folder ) );
postlist = jmpliveresult << As Scriptable;

dataPost = Empty();
For( i = 1, i <= postlist << Get Number Of Items, i += 1,
	type = postlist[i] << Get Type();
	If( type == "Data",
		dataPost = postlist[i]
	);
);

liveresult = liveconnection << Update Data( Data( dataPost ), bc );
updatedData = liveresult << As Scriptable;
Write( "\!n\!nUpdated data: ", updatedData );

```

**例 3**

```jsl

Names Default To Here( 1 );
bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
dist = bc << Run Script( "Distribution" );

liveconnection = New JMP Live();

jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Update Data Example - Using Path" )
);
folder = jmpliveresult << As Scriptable;

content = New JMP Live Content( dist );
jmpliveresult = liveconnection << Publish( content, Folder( folder ) );
postlist = jmpliveresult << As Scriptable;

dataPost = Empty();
For( i = 1, i <= postlist << Get Number Of Items, i += 1,
	type = postlist[i] << Get Type();
	If( type == "Data",
		dataPost = postlist[i]
	);
);

liveresult = liveconnection << Update Data( Data( dataPost ), "$SAMPLE_DATA/Big Class.jmp" );
updatedData = liveresult << As Scriptable;
Write( "\!n\!nUpdated data: ", updatedData );

```


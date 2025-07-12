# JMP Live Connection



## 항목 메시지

### Create Folder

**구문:** liveresult = liveconnection << Create Folder(Title(folder_title), Parent Folder(id | path | JMP Live Folder), <Description(folder_description)>, <If Exists("use" | "fail" | "default")>)

**설명:** JMP Live에 새 폴더를 생성합니다. 반환된 JMP Live 결과 개체를 사용하여 새 폴더에 대한 JMP Live 폴더 개체를 얻을 수 있습니다. &apos;Title&apos;과 &apos;Parent Folder&apos;는 필수 파라미터이며 &apos;Parent Folder&apos;를 &apos;Parent&apos; 또는 &apos;Folder&apos;로 줄일 수 있습니다. &apos;Description&apos;은 선택적입니다. &apos;If Exists&apos;는 지정된 폴더가 이미 있는 경우 JMP Live에서 수행할 작업을 설정합니다. "use"는 기존 폴더를 반환하고, "fail"은 오류를 발생시키고, "default"는 새 폴더를 생성한 후 "(2)", "(3)" 등을 추가하여 고유한 이름을 지정합니다.

**JMP추가된 버전:** 16

**예제 1**

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

**예제 2**

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

**예제 3**

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Create Nested Subfolder Example" ),
	If Exists( "use" ),
	Description( "Folder created in the scripting index example script to serve as a top level folder." ),

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

**구문:** jmpliveresult = liveconnection << Delete Data(id | path | JMP Live Data)

**설명:** 지정된 데이터 게시물을 삭제합니다. 작업이 성공하면 1을 반환하고 그렇지 않으면 0을 반환합니다.

**JMP추가된 버전:** 17

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

**구문:** jmpliveresult = liveconnection << Delete Folder(id | path | JMP Live Folder)

**설명:** 지정된 폴더를 삭제합니다. 작업이 성공하면 1을 반환하고 그렇지 않으면 0을 반환합니다.

**JMP추가된 버전:** 16

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

**구문:** jmpliveresult = liveconnection << Delete Report(id | path | JMP Live Report)

**설명:** 지정된 보고서를 삭제합니다. 작업이 성공하면 1을 반환하고 그렇지 않으면 0을 반환합니다.

**JMP추가된 버전:** 16

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

**구문:** jmpliveresult = liveconnection << Find Folders(<Search(search_string)>, <Publisher(user_name)>, <PageSize(val)>)

**설명:** 검색 문자열, 게시자 또는 둘 다 사용하여 폴더를 찾습니다. 개별 폴더를 참조하는 데 사용할 수 있는 JMP Live 결과 목록이 반환되며 이 목록에서 후속 Next() 호출을 실행하여 더 많은 폴더를 반환할 수 있습니다. PageSize는 반환할 폴더 수를 지정하며 기본값은 10입니다. 모든 검색 파라미터는 선택적이며 아무것도 지정하지 않으면 모든 폴더가 반환됩니다.

**JMP추가된 버전:** 16

**예제 1**

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();
user = liveconnection << Get Username;

jmpliveresult = liveconnection << Create Folder( Parent Folder( "~" ), Title( "Find Folders Example 1" ) );
jmpliveresult = liveconnection << Create Folder( Parent Folder( "~" ), Title( "Find Folders Example 2" ) );

jmpliveresult = liveconnection << Find Folders( Publisher( user ), PageSize( 5 ) );
folderlist = jmpliveresult << As Scriptable();
Write( "\!nFind Folders(Count): ", folderlist << Get Number Of Items );
For( i = 1, i <= folderlist << Get Number Of Items, i += 1,
	Write( "\!nFolder[", i, "]", "(ID): ", folderlist[i] << Get ID );
	Write( "\!nFolder[", i, "]", "(Title): ", folderlist[i] << Get Title );
);

```

**예제 2**

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();

jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Find Folders Example - Search String 1" )
);
jmpliveresult = liveconnection << Create Folder( Parent Folder( "~" ), Title( "Find Folders Example X" ) );
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Find Folders Example - Search String 2" )
);
jmpliveresult = liveconnection << Create Folder( Parent Folder( "~" ), Title( "Find Folders Example Y" ) );

jmpliveresult = liveconnection << Find Folders( Search( "Search String" ), PageSize( 5 ) );
folderlist = jmpliveresult << As Scriptable();
Write( "\!nFind Folders(Count): ", folderlist << Get Number Of Items );
For( i = 1, i <= folderlist << Get Number Of Items, i += 1,
	Write( "\!nFolder[", i, "]", "(ID): ", folderlist[i] << Get ID );
	Write( "\!nFolder[", i, "]", "(Title): ", folderlist[i] << Get Title );
);

```

### Find Posts

**구문:** jmpliveresult = liveconnection << Find Posts(<Search(search_string)>, <Publisher(user_name)>, <PageSize(val)>)

**설명:** 검색 문자열, 게시자 또는 둘 다 사용하여 게시물(폴더, 보고서, 데이터를 포함한 모든 항목)을 찾습니다. 개별 게시물을 참조하는 데 사용할 수 있는 JMP Live 결과 목록이 반환되며 이 목록에서 후속 Next() 호출을 실행하여 더 많은 게시물을 반환할 수 있습니다. PageSize는 반환할 게시물을 수를 지정하며 기본값은 10입니다. 모든 검색 파라미터는 선택적이며 아무것도 지정하지 않으면 모든 게시물이 반환됩니다.

**JMP추가된 버전:** 16

**예제 1**

```jsl

Names Default To Here( 1 );
bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
dist = bc << Run Script( "Distribution" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );
gbline = bc << Run Script( "Graph Builder Line and Bar Charts" );
gbheat = bc << Run Script( "Graph Builder Heatmap" );

liveconnection = New JMP Live();
user = liveconnection << Get Username;

jmpliveresult = liveconnection << Create Folder( Parent Folder( "~" ), Title( "Find Posts Example" ) );
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

**예제 2**

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

**구문:** jmpliveresult = liveconnection << Find Reports(<Search(search_string)>, <Publisher(user_name)>, <PageSize(val)>)

**설명:** 검색 문자열, 게시자 또는 둘 다 사용하여 보고서를 찾습니다. 개별 보고서를 참조하는 데 사용할 수 있는 JMP Live 결과 목록이 반환되며 이 목록에서 후속 Next() 호출을 실행하여 더 많은 보고서를 반환할 수 있습니다. PageSize는 반환할 보고서 수를 지정하며 기본값은 10입니다. 모든 검색 파라미터는 선택적이며 아무것도 지정하지 않으면 모든 보고서가 반환됩니다.

**JMP추가된 버전:** 16

**예제 1**

```jsl

Names Default To Here( 1 );
bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
dist = bc << Run Script( "Distribution" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );
gbline = bc << Run Script( "Graph Builder Line and Bar Charts" );
gbheat = bc << Run Script( "Graph Builder Heatmap" );

liveconnection = New JMP Live();
user = liveconnection << Get Username;

jmpliveresult = liveconnection << Create Folder( Parent Folder( "~" ), Title( "Find Reports Example" ) );
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

**예제 2**

```jsl

Names Default To Here( 1 );
bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
dist = bc << Run Script( "Distribution" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );
gbline = bc << Run Script( "Graph Builder Line and Bar Charts" );
gbheat = bc << Run Script( "Graph Builder Heatmap" );

liveconnection = New JMP Live();
user = liveconnection << Get Username;

jmpliveresult = liveconnection << Create Folder( Parent Folder( "~" ), Title( "Find Reports Example" ) );
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

**구문:** jmpliveresult = liveconnection << Find Spaces(<Permissions( "Contribute" )>, <Search(search_string)>, <PageSize(val)>)

**설명:** 선택적 검색 문자열과 선택적 &apos;권한&apos; 파라미터로 공간을 찾아서 기여를 허용하는 공간으로만 추가 필터링을 수행합니다. 현재 지원되는 권한 값은 &apos;기여&apos; 권한뿐입니다. 목록 내의 개별 공간을 참조하는 데 사용할 수 있는 JMP Live 결과 목록을 반환합니다. 결과 목록에 반환할 공간 항목 수를 나타내기 위해 페이징 값을 지정할 수 있습니다. 이 결과 목록에서 추가 Next() 호출을 실행하여 더 많은 공간을 가져올 수 있습니다.

**JMP추가된 버전:** 18

**예제 1**

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

**예제 2**

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

**구문:** string = liveconnection << Get Connection Name()

**설명:** JMP Live 연결 이름을 문자열로 가져옵니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();
connectionname = liveconnection << Get Connection Name();
Write( "Connection Name: ", connectionname );

```

### Get Data

**구문:** liveresult = liveconnection << Get Data(id | path)

**설명:** 데이터 게시물을 JMP Live 결과 개체로 가져와 해당 게시물에 대한 JMP Live 데이터 개체를 얻는 데 사용할 수 있습니다.

**JMP추가된 버전:** 19

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

**구문:** liveresult = liveconnection << Get Folder(id | path)

**설명:** 폴더 개체를 JMP Live 결과 개체로 가져와 해당 폴더에 대한 JMP Live 폴더 개체를 얻는 데 사용할 수 있습니다.

**JMP추가된 버전:** 16

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

**구문:** httprequest = liveconnection << Get HTTP Request()

**설명:** JMP Live REST 함수를 호출하는 데 사용할 수 있는 HTTP 요청 인스턴스를 반환합니다.

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

**구문:** liveresult = liveconnection << Get Post(id | path)

**설명:** 게시물을 JMP Live 결과 개체로 가져와 해당 게시물에 대한 JMP Live 게시물 개체를 얻는 데 사용할 수 있습니다.

**JMP추가된 버전:** 16

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
postByPath = (jmpliveresult = liveconnection << Get Post( "~/Get Post Example/Smoother" )) << As Scriptable;
Write( "\!n\!nPost retrieved by path: ", postByPath );

```

### Get Report

**구문:** liveresult = liveconnection << Get Report(id | path)

**설명:** 보고서 게시물을 JMP Live 결과 개체로 가져와 해당 게시물에 대한 JMP Live 보고서 개체를 얻는 데 사용할 수 있습니다.

**JMP추가된 버전:** 16

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
reportPost = (liveconnection << Get Report( "~/Get Report Example/Smoother" )) << As Scriptable;
Write( "\!n\!nReport post retrieved by path: ", reportPost );

```

### Get URL

**구문:** string = liveconnection << Get URL()

**설명:** 가능한 경우 JMP Live 사이트에 대한 URL을 가져옵니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();
url = liveconnection << Get URL();
Write( "URL: ", url );

```

### Get Username

**구문:** string = liveconnection << Get Username()

**설명:** 가능한 경우 JMP Live 개체에서 사용자 이름을 가져옵니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();
username = liveconnection << Get UserName();
Write( "Username: ", username );

```

### Is Logged In

**구문:** value = liveconnection << Is Logged In()

**설명:** 인증된 세션이 서버에 설정되었는지 여부를 나타냅니다. 작업이 성공하면 1을 반환하고 그렇지 않으면 0을 반환합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();
isloggedin = liveconnection << Is Logged In();
Write( "Logged In: ", isloggedin );

```

### Publish

**구문:** liveresult = liveconnection << Publish(JMPLiveContent, Folder(id | path | JMP Live Folder), <Use Existing Data({{dt_or_name, data_id | data_path | JMP Live Data}})>)

**설명:** 보고서 또는 독립형 데이터를 JMP Live에 게시하고 JMP Live 결과 목록 개체를 반환합니다. 콘텐츠를 게시할 JMP Live 폴더를 지정해야 합니다. 하나의 Publish 명령에 보고서와 독립형 데이터를 함께 사용할 수 없습니다. JMP Live에 이미 있는 데이터를 사용하는 보고서를 게시할 경우 선택적 &apos;Use Existing Data&apos; 파라미터로 지정할 수 있습니다. 독립형 데이터를 게시할 때는 &apos;Use Existing Data&apos; 파라미터를 사용할 수 없습니다.

**JMP추가된 버전:** 16

**예제 1**

```jsl

Names Default To Here( 1 );
bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );

liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder( Parent Folder( "~" ), Title( "Publish Example" ) );
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

**예제 2**

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

**예제 3**

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

**예제 4**

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

**예제 5**

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
content2 = New JMP Live Content( Map( "$SAMPLE_DATA/S4-XY.jmp" ), Title( "S4 Coordinate Map File" ) );
content3 = New JMP Live Content( Map( "$SAMPLE_DATA/S4-Name.jmp" ), Title( "S4 Name Map File" ) );

jmpliveresult = liveconnection << Publish( {content1, content2, content3}, Folder( folder ) );
postlist = jmpliveresult << As Scriptable();
For( i = 1, i <= postlist << Get Number Of Items, i += 1,
	Write( "\!n\!nPost[", i, "]", "(ID): ", postlist[i] << Get ID );
	Write( "\!nPost[", i, "]", "(Type): ", postlist[i] << Get Type );
	Write( "\!nPost[", i, "]", "(Title): ", postlist[i] << Get Title );
);

```

### Replace

**구문:** liveresult = liveconnection << Replace(JMPLiveContent, Report(id | path | JMP Live Report), <Use Existing Data({{dt_or_name, data_id | data_path | JMP Live Data}})>, <Update Existing Data({{dt_or_name, data_id | data_path | JMP Live Data}})>, <Publish New Data({dt_or_name})> )

**설명:** 기존 JMP Live 보고서를 다른 보고서로 바꿉니다. 보고서에 제공되는 데이터를 다루는 방법을 지정하기 위해 데이터 옵션이 필요합니다. "Use Existing Data"는 JMP Live의 기존 데이터를 지정된 데이터에 사용하도록 서버에 지시합니다. "Update Existing Data"는 서버의 데이터를 명령에 제공된 데이터로 바꾸도록 서버에 지시합니다. "Publish New Data"는 새 데이터 테이블을 게시하고 대체할 보고서에 이를 사용하도록 서버에 지시합니다. "Publish New Data"가 모든 데이터 테이블의 기본 데이터 옵션이며 데이터 옵션을 조합하여 지정할 수 있습니다. JMP Live 결과 목록 개체가 반환됩니다.

**JMP추가된 버전:** 16

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/S4 Temps.jmp" );
tod = dt << Run Script( "by Time of Day" );
therm = dt << Run Script( "by Thermometer" );

liveconnection = New JMP Live();

jmpliveresult = liveconnection << Create Folder( Parent Folder( "~" ), Title( "Replace Example 1" ) );
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

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/S4 Temps.jmp" );
tod = dt << Run Script( "by Time of Day" );
therm = dt << Run Script( "by Thermometer" );

liveconnection = New JMP Live();

jmpliveresult = liveconnection << Create Folder( Parent Folder( "~" ), Title( "Replace Example 2" ) );
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

**구문:** jmpliveresult = liveconnection << Update Data( Data(id | path | JMP Live Data), dataTable | path | JMPLiveContent )

**설명:** 데이터 게시물의 데이터 테이블이나 맵을 제공된 콘텐츠로 업데이트합니다. &apos;Data&apos; 파라미터는 업데이트할 JMP Live 데이터를 식별합니다. 두 번째 파라미터는 업데이트에 사용할 콘텐츠이며 데이터 테이블 개체, 데이터 테이블 경로 또는 데이터 테이블이나 맵에서 생성된 JMP Live 콘텐츠 개체가 될 수 있습니다.

**JMP추가된 버전:** 16

**예제 1**

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

**예제 2**

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

**예제 3**

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


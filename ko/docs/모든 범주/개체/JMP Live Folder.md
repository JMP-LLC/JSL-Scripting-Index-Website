# JMP Live Folder



## 항목 메시지

### Add Reports To Folder

**구문:** jmpliveresultlist = folder &lt;&lt; Add Reports To Folder(JMPLiveContent, &lt;Use Existing Data({{dt_or_name, id | relative_path | JMP Live Data}})&gt;)

**설명:** Add Reports To Folder 메시지는 더 이상 사용되지 않습니다. 대신 Publish를 사용하십시오.

**JMP추가된 버전:** 16

### Create Folder

**구문:** liveresult = folder &lt;&lt; Create Folder(Title("Title"), &lt;Description("Description")&gt;, &lt;If Exists("use" | "fail" | "default")&gt;)

**설명:** JMP Live에 이 폴더의 하위 폴더를 생성합니다. 반환된 JMP Live 결과 개체를 사용하여 새 폴더에 대한 JMP Live 폴더 개체를 얻을 수 있습니다. &apos;Title&apos;은 필수이고 &apos;Description&apos;은 선택적입니다. &apos;If Exists&apos;는 지정된 폴더가 이미 있는 경우 JMP Live에서 수행할 작업을 설정합니다. "use"는 기존 폴더를 반환하고, "fail"은 오류를 발생시키고, "default"는 새 폴더를 생성한 후 "(2)", "(3)" 등을 추가하여 고유한 이름을 지정합니다.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();

existingFolder = (liveconnection << Get Folder( "~" )) << As Scriptable;

newFolder = (existingFolder << Create Folder( Title( "Important Reports" ), If Exists( "default" ) )) <<
As Scriptable;

Write( "New folder path: ", newFolder << Get Path );

```

### Get Children

**구문:** jmpliveresultlist = folder &lt;&lt; Get Children(&lt;PAGESIZE(10)&gt;)

**설명:** 폴더에 포함된 하위 게시물을 JMP Live 결과 목록 개체로 가져옵니다. 선택적 pagesize 인수를 사용하여 반환되는 게시물 수를 제어할 수 있습니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
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
	New JMP Live Content( gblinebar, Title( "SearchString - Graph Builder Line and Bar Charts" ) )
);
Insert Into(
	contentlist,
	New JMP Live Content( gbline, Title( "SearchString - Graph Builder Line Chart" ) )
);
Insert Into( contentlist, New JMP Live Content( gbheat, Title( "SearchString - Graph Builder Heatmap" ) ) );
jmpliveresult = folder << Publish( contentlist );

jmpliveresult = folder << Get Children;
children = jmpliveresult << As Scriptable;
For( i = 1, i <= children << Get Number Of Items, i += 1,
	Write( "\!n\!nChild ID: ", children[i] << Get ID );
	Write( "\!nChild Type: ", children[i] << Get Type );
);

```

### Get Data

**구문:** result = jmplivefolder &lt;&lt; Get Data(id | relative_path)

**설명:** 폴더의 데이터 게시물을 JMP Live 결과 개체로 가져와 해당 게시물에 대한 JMP Live 데이터 개체를 얻는 데 사용할 수 있습니다.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
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

**구문:** string = jmplivepost &lt;&lt; Get Description()

**설명:** JMP Live 보고서, JMP Live 폴더 또는 JMP Live 게시물의 설명을 문자열로 가져옵니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
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

**구문:** result = jmplivefolder &lt;&lt; Get Folder(id | relative_path)

**설명:** 폴더의 하위 폴더를 JMP Live 결과 개체로 가져와 해당 하위 폴더에 대한 JMP Live 폴더 개체를 얻는 데 사용할 수 있습니다.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
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

**구문:** string = jmplivepost &lt;&lt; Get ID()

**설명:** 이 JMP Live 보고서, JMP Live 폴더 또는 JMP Live 게시물의 ID를 문자열로 가져옵니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
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

**구문:** value = jmplivefolder &lt;&lt; Get Number Of Items()

**설명:** 폴더의 항목 수를 가져옵니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
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
	New JMP Live Content( gblinebar, Title( "SearchString - Graph Builder Line and Bar Charts" ) )
);
Insert Into(
	contentlist,
	New JMP Live Content( gbline, Title( "SearchString - Graph Builder Line Chart" ) )
);
Insert Into( contentlist, New JMP Live Content( gbheat, Title( "SearchString - Graph Builder Heatmap" ) ) );
jmpliveresult = folder << Publish( contentlist );

count = folder << Get Number of Items;
Write( "\!n\!nChild Count: ", count );

```

### Get Path

**구문:** string = jmplivepost &lt;&lt; Get Path()

**설명:** 이 JMP Live 보고서, 폴더 또는 게시물의 경로를 문자열로 가져옵니다.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
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

**구문:** result = jmplivefolder &lt;&lt; Get Post(id | relative_path)

**설명:** 폴더의 게시물을 JMP Live 결과 개체로 가져와 해당 게시물에 대한 JMP Live 게시물 개체를 얻는 데 사용할 수 있습니다.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
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

**구문:** result = jmplivepost &lt;&lt; Get Report(id | relative_path)

**설명:** 폴더의 보고서 게시물을 JMP Live 결과 개체로 가져와 해당 보고서에 대한 JMP Live 보고서 개체를 얻는 데 사용할 수 있습니다.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
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

**구문:** string = jmplivepost &lt;&lt; Get Title()

**설명:** JMP Live 보고서, JMP Live 폴더 또는 JMP Live 게시물의 제목을 문자열로 가져옵니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
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

**구문:** string = jmplivepost &lt;&lt; Get Type()

**설명:** 특정 유형의 게시물 가져오기(폴더, 데이터 또는 보고서)

**JMP추가된 버전:** 17

```jsl

Names Default To Here( 1 );
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

**구문:** string = jmplivepost &lt;&lt; Get URL()

**설명:** 이 JMP Live 보고서, JMP Live 폴더 또는 JMP Live 게시물의 URL을 문자열로 가져옵니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
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

**구문:** jmpliveresultlist = folder &lt;&lt; Publish(JMPLiveContent, &lt;Use Existing Data({{dt_or_name, id | relative_path | JMP Live Data}})&gt;)

**설명:** 보고서 또는 독립형 데이터를 JMP Live 폴더에 게시하고 JMP Live 결과 목록 개체를 반환합니다. Add Reports To Folder 메시지를 대체합니다. 하나의 Publish 명령에 보고서와 독립형 데이터를 함께 사용할 수 없습니다. JMP Live에 이미 있는 데이터를 사용하는 보고서를 게시할 경우 선택적 &apos;Use Existing Data&apos; 파라미터로 지정할 수 있습니다. 독립형 데이터를 게시할 때는 &apos;Use Existing Data&apos; 파라미터를 사용할 수 없습니다.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
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
	New JMP Live Content( gblinebar, Title( "SearchString - Graph Builder Line and Bar Charts" ) )
);
Insert Into(
	contentlist,
	New JMP Live Content( gbline, Title( "SearchString - Graph Builder Line Chart" ) )
);
Insert Into( contentlist, New JMP Live Content( gbheat, Title( "SearchString - Graph Builder Heatmap" ) ) );
jmpliveresult = folder << Publish( contentlist );
postlist = jmpliveresult << As Scriptable();
For( i = 1, i <= postlist << Get Number Of Items, i += 1,
	Write( "\!n\!nPost[", i, "]", "(ID): ", postlist[i] << Get ID );
	Write( "\!nPost[", i, "]", "(Type): ", postlist[i] << Get Type );
	Write( "\!nPost[", i, "]", "(Title): ", postlist[i] << Get Title );
);

```

### Replace

**구문:** liveresult = jmplivefolder &lt;&lt; Replace(Report(id | relative_path | JMP Live Report), JMPLiveContent, &lt;Use Existing Data({{dt_or_name, data_id | data_path | JMP Live Data}})&gt;, &lt;Update Existing Data({{dt_or_name, data_id | data_path | JMP Live Data}})&gt;, &lt;Publish New Data({dt_or_name})&gt; )

**설명:** 폴더의 기존 JMP Live 보고서를 다른 보고서로 바꿉니다. 보고서에 제공되는 데이터를 다루는 방법을 지정하기 위해 데이터 옵션이 필요합니다. "Use Existing Data"는 JMP Live의 기존 데이터를 지정된 데이터에 사용하도록 서버에 지시합니다. "Update Existing Data"는 서버의 데이터를 명령에 제공된 데이터로 바꾸도록 서버에 지시합니다. "Publish New Data"는 새 데이터 테이블을 게시하고 대체할 보고서에 이를 사용하도록 서버에 지시합니다. "Publish New Data"가 모든 데이터 테이블의 기본 데이터 옵션이며 데이터 옵션을 조합하여 지정할 수 있습니다. JMP Live 결과 목록 개체가 반환됩니다.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
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

**구문:** success = jmplivepost &lt;&lt; Set Description("string value")

**설명:** 문자열이 주어지면 JMP Live 보고서, JMP Live 폴더 또는 JMP Live 게시물의 설명을 설정하고 성공/실패에 대해 true/false를 각각 반환합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
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

**구문:** success = jmplivepost &lt;&lt; Set Title("New Title")

**설명:** JMP Live 보고서, JMP Live 폴더 또는 JMP Live 게시물의 제목을 설정하고 성공/실패에 대해 true/false를 각각 반환합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
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

**구문:** result = jmplivefolder &lt;&lt; Update Data(Data(id | relative_path | JMP Live Data), dataTable | path | JMPLiveContent)

**설명:** 폴더에 있는 데이터 게시물의 데이터 테이블이나 맵을 업데이트합니다. &apos;Data&apos; 파라미터는 업데이트할 JMP Live 데이터를 식별합니다. 두 번째 파라미터는 업데이트에 사용할 콘텐츠이며 데이터 테이블 개체, 데이터 테이블 경로 또는 데이터 테이블이나 맵에서 생성된 JMP Live 콘텐츠 개체가 될 수 있습니다.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
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


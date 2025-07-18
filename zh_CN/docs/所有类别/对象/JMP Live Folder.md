# JMP Live Folder



## 项消息

### Add Reports To Folder

**语法:** jmpliveresultlist = folder &lt;&lt; Add Reports To Folder(JMPLiveContent, &lt;Use Existing Data({{dt_or_name, id | relative_path | JMP Live Data}})&gt;)

**说明:** “将报表添加至文件夹”消息已弃用。请改用“发布”。

**JMP添加的版本:** 16

### Create Folder

**语法:** liveresult = folder &lt;&lt; Create Folder(Title("Title"), &lt;Description("Description")&gt;, &lt;If Exists("use" | "fail" | "default")&gt;)

**说明:** 在 JMP Live 上创建该文件夹的子文件夹。返回一个 JMP Live 结果，该结果可用于为新文件夹获取 JMP Live 文件夹对象。Title 是必需的。Description 是可选的。If Exists 告知 JMP Live 若指定的文件夹已存在则如何操作:“use”表示只返回现有文件夹，“fail”表示抛出错误，“default”表示创建新文件夹并通过添加“(2)”、“(3)”等使其名称唯一。

**JMP添加的版本:** 19

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

**语法:** jmpliveresultlist = folder &lt;&lt; Get Children(&lt;PAGESIZE(10)&gt;)

**说明:** 检索作为 JMP Live 结果列表的该文件夹中包含的子帖子。可选的 pagesize 参数可用于控制返回的帖子数。

**JMP添加的版本:** 16

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

**语法:** result = jmplivefolder &lt;&lt; Get Data(id | relative_path)

**说明:** 检索作为 JMP Live 结果对象的来自该文件夹的数据帖子，该数据帖子可用于为该帖子获取 JMP Live 数据对象。

**JMP添加的版本:** 19

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

**语法:** string = jmplivepost &lt;&lt; Get Description()

**说明:** 以字符串形式获取 JMP Live 报表、JMP Live 文件夹或 JMP Live 帖子的说明。

**JMP添加的版本:** 16

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

**语法:** result = jmplivefolder &lt;&lt; Get Folder(id | relative_path)

**说明:** 检索作为 JMP Live 结果对象的来自该文件夹的子文件夹，该子文件夹可用于为该子文件夹获取 JMP Live 文件夹对象。

**JMP添加的版本:** 19

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

**语法:** string = jmplivepost &lt;&lt; Get ID()

**说明:** 以字符串形式获取该 JMP Live 报表、JMP Live 文件夹或 JMP Live 帖子的 ID。

**JMP添加的版本:** 16

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

**语法:** value = jmplivefolder &lt;&lt; Get Number Of Items()

**说明:** 获取文件夹中的项个数。

**JMP添加的版本:** 16

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

**语法:** string = jmplivepost &lt;&lt; Get Path()

**说明:** 以字符串形式获取该 JMP Live 报表、文件夹或帖子的路径。

**JMP添加的版本:** 19

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

**语法:** result = jmplivefolder &lt;&lt; Get Post(id | relative_path)

**说明:** 检索作为 JMP Live 结果对象的来自该文件夹的帖子，该帖子可用于为该帖子获取 JMP Live 帖子对象。

**JMP添加的版本:** 19

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

**语法:** result = jmplivepost &lt;&lt; Get Report(id | relative_path)

**说明:** 检索作为 JMP Live 结果对象的来自该文件夹的报表帖子，该报表帖子可用于为该报表获取 JMP Live 报表对象。

**JMP添加的版本:** 19

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

**语法:** string = jmplivepost &lt;&lt; Get Title()

**说明:** 以字符串形式获取 JMP Live 报表、JMP Live 文件夹或 JMP Live 帖子的标题。

**JMP添加的版本:** 16

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

**语法:** string = jmplivepost &lt;&lt; Get Type()

**说明:** 获取特定类型的帖子（文件夹、数据或报表）

**JMP添加的版本:** 17

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

**语法:** string = jmplivepost &lt;&lt; Get URL()

**说明:** 以字符串形式获取该 JMP Live 报表、JMP Live 文件夹或 JMP Live 帖子的 URL。

**JMP添加的版本:** 16

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

**语法:** jmpliveresultlist = folder &lt;&lt; Publish(JMPLiveContent, &lt;Use Existing Data({{dt_or_name, id | relative_path | JMP Live Data}})&gt;)

**说明:** 将报表或独立数据发布到 JMP Live 文件夹。返回一个 JMP Live 结果列表对象。替换“将报表添加至文件夹”消息。不允许在同一“发布”命令中混合使用报表和独立数据。发布报表时，若报表应使用 JMP Live 中已存在的数据，则可以使用可选的“Use Existing Data”参数来指定该数据。发布独立数据时“Use Existing Data”参数无效。

**JMP添加的版本:** 19

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

**语法:** liveresult = jmplivefolder &lt;&lt; Replace(Report(id | relative_path | JMP Live Report), JMPLiveContent, &lt;Use Existing Data({{dt_or_name, data_id | data_path | JMP Live Data}})&gt;, &lt;Update Existing Data({{dt_or_name, data_id | data_path | JMP Live Data}})&gt;, &lt;Publish New Data({dt_or_name})&gt; )

**说明:** 用另一个报表替换文件夹中的现有 JMP Live 报表。需要数据选项来指定如何管理报表中提供的数据。“Use Existing Data”指示服务器为指定的数据使用 JMP Live 中的现有数据。“Update Existing Data”指示服务器使用命令中提供的数据替换服务器上的数据。“Publish New Data”指示服务器发布新数据表并将它用于要替换的报表。“Publish New Data”是用于所有数据表的默认数据选项。可以指定数据选项的任意组合。返回一个 JMP Live 结果列表对象。

**JMP添加的版本:** 19

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

**语法:** success = jmplivepost &lt;&lt; Set Description("string value")

**说明:** 给定一个字符串，设置 JMP Live 报表、JMP Live 文件夹或 JMP Live 帖子的说明。返回 True 或 False 表示成功或失败。

**JMP添加的版本:** 16

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

**语法:** success = jmplivepost &lt;&lt; Set Title("New Title")

**说明:** 设置 JMP Live 报表、JMP Live 文件夹或 JMP Live 帖子的标题。返回 True 或 False 表示成功或失败。

**JMP添加的版本:** 16

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

**语法:** result = jmplivefolder &lt;&lt; Update Data(Data(id | relative_path | JMP Live Data), dataTable | path | JMPLiveContent)

**说明:** 更新文件夹中数据帖子的数据表或地图。Data 参数标识要更新的 JMP Live 上的数据。第二个参数是要用于更新的内容。它可以是数据表对象、数据表的路径或是从数据表或地图创建的 JMP Live 内容对象。

**JMP添加的版本:** 19

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


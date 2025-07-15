# JMP Live Result List



## 项消息

### As Scriptable

**语法:** jmplivereportlist = jmplivelist &lt;&lt; As Scriptable()

**说明:** 根据为生成 JMP Live 结果列表而执行的查找操作，返回 JMP Live 文件夹、JMP Live 报表或 JMP Live 帖子对象的可脚本化列表。

**JMP添加的版本:** 16

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
	Title( "JMP Live Result List Example" )
);
folder = jmpliveresult << As Scriptable;
jmpliveresult = folder << Create Folder( Title( "JMP Live Result List - Graph Builder" ) );
gbfolder = jmpliveresult << As Scriptable;

contentlist = {};
Insert Into(
	contentlist,
	New JMP Live Content( gblinebar, Title( "Graph Builder Line and Bar Charts" ) )
);
Insert Into(
	contentlist,
	New JMP Live Content( gbsmoother, Title( "Graph Builder Smoother Line" ) )
);
Insert Into(
	contentlist,
	New JMP Live Content( gbline, Title( "Graph Builder Line Chart" ) )
);
Insert Into( contentlist, New JMP Live Content( gbheat, Title( "Graph Builder Heatmap" ) ) );
jmpliveresult = gbfolder << Publish( contentlist );
If( jmpliveresult << Succeeded,
	postlist = jmpliveresult << As Scriptable();
	Write( "\!n\!nNew Posts(Count): ", postlist << Get Number Of Items );
);

```

### Get Current Page Number

**语法:** value = jmplivelist &lt;&lt; Get Current Page Number()

**说明:** 获取列表中项的当前页码。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
dist = bc << Run Script( "Distribution" );
bivariate = bc << Run Script( "Bivariate" );
oneway = bc << Run Script( "Oneway" );
logistic = bc << Run Script( "Logistic" );
gblinebar = bc << Run Script( "Graph Builder Line and Bar Charts" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );
gbline = bc << Run Script( "Graph Builder Line Chart" );
gbheat = bc << Run Script( "Graph Builder Heatmap" );

liveconnection = New JMP Live();

jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "JMP Live Result List Example" )
);
folder = jmpliveresult << As Scriptable;
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( folder ),
	Title( "JMP Live Result List - Graph Builder" )
);
gbfolder = jmpliveresult << As Scriptable;
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( folder ),
	Title( "JMP Live Result List - Normal" )
);
normalfolder = jmpliveresult << As Scriptable;

contentlist = {};
Insert Into(
	contentlist,
	New JMP Live Content( dist, Title( "SearchString - Distribution" ) )
);
Insert Into(
	contentlist,
	New JMP Live Content( bivariate, Title( "SearchString - Bivariate" ) )
);
Insert Into( contentlist, New JMP Live Content( oneway, Title( "SearchString - Oneway" ) ) );
Insert Into(
	contentlist,
	New JMP Live Content( logistic, Title( "SearchString - Logistic" ) )
);
gbfolder << Publish( contentlist );

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
normalfolder << Publish( contentlist );

jmpliveresult = liveconnection << Find Posts( Search( "SearchString" ), PageSize( 4 ) );

liveposts = jmpliveresult << As Scriptable;
count = liveposts << Get Number Of Items;
nextpage = liveposts << Get Page( 1 );
While( count > 0,
	Write( "\!n\!nPage: ", liveposts << Get Current Page Number );
	Write( "\!nNumber of Search Results: ", nextpage << Get Number Of Items );
 
	Try(
		nextpage = liveposts << Next;
		count = nextpage << Get Number Of Items;
	,
		count = 0
	);
);

prevpage = liveposts << Previous;
count = prevpage << Get Number Of Items;
While( count > 0,
	Write( "\!n\!nPage: ", liveposts << Get Current Page Number );
	Write( "\!nNumber of Search Results: ", prevpage << Get Number Of Items );
 
	Try(
		prevpage = liveposts << Previous;
		count = prevpage << Get Number Of Items;
	,
		count = 0
	);
);

```

### Get Number Of Items

**语法:** value = jmplivelist &lt;&lt; Get Number Of Items()

**说明:** 获取该结果集里的项数。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
dist = bc << Run Script( "Distribution" );
bivariate = bc << Run Script( "Bivariate" );
oneway = bc << Run Script( "Oneway" );
logistic = bc << Run Script( "Logistic" );
gblinebar = bc << Run Script( "Graph Builder Line and Bar Charts" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );
gbline = bc << Run Script( "Graph Builder Line Chart" );
gbheat = bc << Run Script( "Graph Builder Heatmap" );

liveconnection = New JMP Live();

jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "JMP Live Result List Example" )
);
folder = jmpliveresult << As Scriptable;
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( folder ),
	Title( "JMP Live Result List - Graph Builder" )
);
gbfolder = jmpliveresult << As Scriptable;
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( folder ),
	Title( "JMP Live Result List - Normal" )
);
normalfolder = jmpliveresult << As Scriptable;

contentlist = {};
Insert Into(
	contentlist,
	New JMP Live Content( dist, Title( "SearchString - Distribution" ) )
);
Insert Into(
	contentlist,
	New JMP Live Content( bivariate, Title( "SearchString - Bivariate" ) )
);
Insert Into( contentlist, New JMP Live Content( oneway, Title( "SearchString - Oneway" ) ) );
Insert Into(
	contentlist,
	New JMP Live Content( logistic, Title( "SearchString - Logistic" ) )
);
gbfolder << Publish( contentlist );

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
normalfolder << Publish( contentlist );

jmpliveresult = liveconnection << Find Posts( Search( "SearchString" ) );
If( jmpliveresult << Succeeded,
	postlist = jmpliveresult << As Scriptable();
	Write( "\!n\!nPosts(Count): ", postlist << Get Number Of Items );
);

```

### Get Page

**语法:** reportlist = jmplivelist &lt;&lt; Get Page(value)

**说明:** 在查找操作的整个结果列表中获取 JMP Live 文件夹、JMP Live 报表或 JMP Live 帖子对象的特定页面。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
dist = bc << Run Script( "Distribution" );
bivariate = bc << Run Script( "Bivariate" );
oneway = bc << Run Script( "Oneway" );
logistic = bc << Run Script( "Logistic" );
gblinebar = bc << Run Script( "Graph Builder Line and Bar Charts" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );
gbline = bc << Run Script( "Graph Builder Line Chart" );
gbheat = bc << Run Script( "Graph Builder Heatmap" );

liveconnection = New JMP Live();

jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "JMP Live Result List Example" )
);
folder = jmpliveresult << As Scriptable;
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( folder ),
	Title( "JMP Live Result List - Graph Builder" )
);
gbfolder = jmpliveresult << As Scriptable;
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( folder ),
	Title( "JMP Live Result List - Normal" )
);
normalfolder = jmpliveresult << As Scriptable;

contentlist = {};
Insert Into(
	contentlist,
	New JMP Live Content( dist, Title( "SearchString - Distribution" ) )
);
Insert Into(
	contentlist,
	New JMP Live Content( bivariate, Title( "SearchString - Bivariate" ) )
);
Insert Into( contentlist, New JMP Live Content( oneway, Title( "SearchString - Oneway" ) ) );
Insert Into(
	contentlist,
	New JMP Live Content( logistic, Title( "SearchString - Logistic" ) )
);
gbfolder << Publish( contentlist );

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
normalfolder << Publish( contentlist );

jmpliveresult = liveconnection << Find Posts( Search( "SearchString" ), PageSize( 4 ) );

liveposts = jmpliveresult << As Scriptable;
count = liveposts << Get Number Of Items;
nextpage = liveposts << Get Page( 1 );
While( count > 0,
	Write( "\!n\!nPage: ", liveposts << Get Current Page Number );
	Write( "\!nNumber of Search Results: ", nextpage << Get Number Of Items );
 
	Try(
		nextpage = liveposts << Next;
		count = nextpage << Get Number Of Items;
	,
		count = 0
	);
);

prevpage = liveposts << Previous;
count = prevpage << Get Number Of Items;
While( count > 0,
	Write( "\!n\!nPage: ", liveposts << Get Current Page Number );
	Write( "\!nNumber of Search Results: ", prevpage << Get Number Of Items );
 
	Try(
		prevpage = liveposts << Previous;
		count = prevpage << Get Number Of Items;
	,
		count = 0
	);
);

```

### Next

**语法:** reportlist = jmplivelist &lt;&lt; Next()

**说明:** 返回查找操作中的下一页结果。该列表可以包含 JMP Live 文件夹、JMP Live 报表或 JMP Live 帖子，具体取决于查找操作。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
dist = bc << Run Script( "Distribution" );
bivariate = bc << Run Script( "Bivariate" );
oneway = bc << Run Script( "Oneway" );
logistic = bc << Run Script( "Logistic" );
gblinebar = bc << Run Script( "Graph Builder Line and Bar Charts" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );
gbline = bc << Run Script( "Graph Builder Line Chart" );
gbheat = bc << Run Script( "Graph Builder Heatmap" );

liveconnection = New JMP Live();

jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "JMP Live Result List Example" )
);
folder = jmpliveresult << As Scriptable;
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( folder ),
	Title( "JMP Live Result List - Graph Builder" )
);
gbfolder = jmpliveresult << As Scriptable;
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( folder ),
	Title( "JMP Live Result List - Normal" )
);
normalfolder = jmpliveresult << As Scriptable;

contentlist = {};
Insert Into(
	contentlist,
	New JMP Live Content( dist, Title( "SearchString - Distribution" ) )
);
Insert Into(
	contentlist,
	New JMP Live Content( bivariate, Title( "SearchString - Bivariate" ) )
);
Insert Into( contentlist, New JMP Live Content( oneway, Title( "SearchString - Oneway" ) ) );
Insert Into(
	contentlist,
	New JMP Live Content( logistic, Title( "SearchString - Logistic" ) )
);
gbfolder << Publish( contentlist );

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
normalfolder << Publish( contentlist );

jmpliveresult = liveconnection << Find Posts( Search( "SearchString" ), PageSize( 4 ) );

liveposts = jmpliveresult << As Scriptable;
count = liveposts << Get Number Of Items;
nextpage = liveposts << Get Page( 1 );
While( count > 0,
	Write( "\!n\!nPage: ", liveposts << Get Current Page Number );
	Write( "\!nNumber of Search Results: ", nextpage << Get Number Of Items );
 
	Try(
		nextpage = liveposts << Next;
		count = nextpage << Get Number Of Items;
	,
		count = 0
	);
);

prevpage = liveposts << Previous;
count = prevpage << Get Number Of Items;
While( count > 0,
	Write( "\!n\!nPage: ", liveposts << Get Current Page Number );
	Write( "\!nNumber of Search Results: ", prevpage << Get Number Of Items );
 
	Try(
		prevpage = liveposts << Previous;
		count = prevpage << Get Number Of Items;
	,
		count = 0
	);
);

```

### Previous

**语法:** reportlist = jmplivelist &lt;&lt; Previous()

**说明:** 返回查找操作中的上一页结果。该列表可以包含 JMP Live 文件夹、JMP Live 报表或 JMP Live 帖子，具体取决于查找操作。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
dist = bc << Run Script( "Distribution" );
bivariate = bc << Run Script( "Bivariate" );
oneway = bc << Run Script( "Oneway" );
logistic = bc << Run Script( "Logistic" );
gblinebar = bc << Run Script( "Graph Builder Line and Bar Charts" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );
gbline = bc << Run Script( "Graph Builder Line Chart" );
gbheat = bc << Run Script( "Graph Builder Heatmap" );

liveconnection = New JMP Live();

jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "JMP Live Result List Example" )
);
folder = jmpliveresult << As Scriptable;
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( folder ),
	Title( "JMP Live Result List - Graph Builder" )
);
gbfolder = jmpliveresult << As Scriptable;
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( folder ),
	Title( "JMP Live Result List - Normal" )
);
normalfolder = jmpliveresult << As Scriptable;

contentlist = {};
Insert Into(
	contentlist,
	New JMP Live Content( dist, Title( "SearchString - Distribution" ) )
);
Insert Into(
	contentlist,
	New JMP Live Content( bivariate, Title( "SearchString - Bivariate" ) )
);
Insert Into( contentlist, New JMP Live Content( oneway, Title( "SearchString - Oneway" ) ) );
Insert Into(
	contentlist,
	New JMP Live Content( logistic, Title( "SearchString - Logistic" ) )
);
gbfolder << Publish( contentlist );

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
normalfolder << Publish( contentlist );

jmpliveresult = liveconnection << Find Posts( Search( "SearchString" ), PageSize( 4 ) );

liveposts = jmpliveresult << As Scriptable;
count = liveposts << Get Number Of Items;
nextpage = liveposts << Get Page( 1 );
While( count > 0,
	Write( "\!n\!nPage: ", liveposts << Get Current Page Number );
	Write( "\!nNumber of Search Results: ", nextpage << Get Number Of Items );
 
	Try(
		nextpage = liveposts << Next;
		count = nextpage << Get Number Of Items;
	,
		count = 0
	);
);

prevpage = liveposts << Previous;
count = prevpage << Get Number Of Items;
While( count > 0,
	Write( "\!n\!nPage: ", liveposts << Get Current Page Number );
	Write( "\!nNumber of Search Results: ", prevpage << Get Number Of Items );
 
	Try(
		prevpage = liveposts << Previous;
		count = prevpage << Get Number Of Items;
	,
		count = 0
	);
);

```


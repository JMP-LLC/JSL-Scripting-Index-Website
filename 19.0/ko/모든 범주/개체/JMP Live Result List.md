# JMP Live Result List



## 항목 메시지

### As Scriptable

**구문:** jmplivereportlist = jmplivelist &lt;&lt; As Scriptable()

**설명:** JMP Live 결과 목록을 생성하기 위해 수행한 찾기 작업에 따라 JMP Live 폴더, JMP Live 보고서 또는 JMP Live 게시물 개체의 스크립트 가능 목록을 반환합니다.

**JMP추가된 버전:** 16

```jsl

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
Insert Into( contentlist, New JMP Live Content( gblinebar, Title( "Graph Builder Line and Bar Charts" ) ) );
Insert Into( contentlist, New JMP Live Content( gbsmoother, Title( "Graph Builder Smoother Line" ) ) );
Insert Into( contentlist, New JMP Live Content( gbline, Title( "Graph Builder Line Chart" ) ) );
Insert Into( contentlist, New JMP Live Content( gbheat, Title( "Graph Builder Heatmap" ) ) );
jmpliveresult = gbfolder << Publish( contentlist );
If( jmpliveresult << Succeeded,
	postlist = jmpliveresult << As Scriptable();
	Write( "\!n\!nNew Posts(Count): ", postlist << Get Number Of Items );
);

```

### Get Current Page Number

**구문:** value = jmplivelist &lt;&lt; Get Current Page Number()

**설명:** 목록에 있는 항목의 현재 페이지 번호를 가져옵니다.

**JMP추가된 버전:** 16

```jsl

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
Insert Into( contentlist, New JMP Live Content( dist, Title( "SearchString - Distribution" ) ) );
Insert Into( contentlist, New JMP Live Content( bivariate, Title( "SearchString - Bivariate" ) ) );
Insert Into( contentlist, New JMP Live Content( oneway, Title( "SearchString - Oneway" ) ) );
Insert Into( contentlist, New JMP Live Content( logistic, Title( "SearchString - Logistic" ) ) );
gbfolder << Publish( contentlist );

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

**구문:** value = jmplivelist &lt;&lt; Get Number Of Items()

**설명:** 이 결과 집합의 항목 수를 가져옵니다.

**JMP추가된 버전:** 16

```jsl

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
Insert Into( contentlist, New JMP Live Content( dist, Title( "SearchString - Distribution" ) ) );
Insert Into( contentlist, New JMP Live Content( bivariate, Title( "SearchString - Bivariate" ) ) );
Insert Into( contentlist, New JMP Live Content( oneway, Title( "SearchString - Oneway" ) ) );
Insert Into( contentlist, New JMP Live Content( logistic, Title( "SearchString - Logistic" ) ) );
gbfolder << Publish( contentlist );

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
normalfolder << Publish( contentlist );

jmpliveresult = liveconnection << Find Posts( Search( "SearchString" ) );
If( jmpliveresult << Succeeded,
	postlist = jmpliveresult << As Scriptable();
	Write( "\!n\!nPosts(Count): ", postlist << Get Number Of Items );
);

```

### Get Page

**구문:** reportlist = jmplivelist &lt;&lt; Get Page(value)

**설명:** 찾기 작업의 전체 결과 목록에서 JMP Live 폴더, JMP Live 보고서 또는 JMP Live 게시물 개체의 특정 페이지를 가져옵니다.

**JMP추가된 버전:** 16

```jsl

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
Insert Into( contentlist, New JMP Live Content( dist, Title( "SearchString - Distribution" ) ) );
Insert Into( contentlist, New JMP Live Content( bivariate, Title( "SearchString - Bivariate" ) ) );
Insert Into( contentlist, New JMP Live Content( oneway, Title( "SearchString - Oneway" ) ) );
Insert Into( contentlist, New JMP Live Content( logistic, Title( "SearchString - Logistic" ) ) );
gbfolder << Publish( contentlist );

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

**구문:** reportlist = jmplivelist &lt;&lt; Next()

**설명:** 찾기 작업 결과의 다음 페이지를 반환합니다. 이 목록에는 찾기 작업에 따라 JMP Live 폴더, JMP Live 보고서 또는 JMP Live 게시물이 포함될 수 있습니다.

**JMP추가된 버전:** 16

```jsl

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
Insert Into( contentlist, New JMP Live Content( dist, Title( "SearchString - Distribution" ) ) );
Insert Into( contentlist, New JMP Live Content( bivariate, Title( "SearchString - Bivariate" ) ) );
Insert Into( contentlist, New JMP Live Content( oneway, Title( "SearchString - Oneway" ) ) );
Insert Into( contentlist, New JMP Live Content( logistic, Title( "SearchString - Logistic" ) ) );
gbfolder << Publish( contentlist );

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

**구문:** reportlist = jmplivelist &lt;&lt; Previous()

**설명:** 찾기 작업 결과의 이전 페이지를 반환합니다. 이 목록에는 찾기 작업에 따라 JMP Live 폴더, JMP Live 보고서 또는 JMP Live 게시물이 포함될 수 있습니다.

**JMP추가된 버전:** 16

```jsl

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
Insert Into( contentlist, New JMP Live Content( dist, Title( "SearchString - Distribution" ) ) );
Insert Into( contentlist, New JMP Live Content( bivariate, Title( "SearchString - Bivariate" ) ) );
Insert Into( contentlist, New JMP Live Content( oneway, Title( "SearchString - Oneway" ) ) );
Insert Into( contentlist, New JMP Live Content( logistic, Title( "SearchString - Logistic" ) ) );
gbfolder << Publish( contentlist );

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


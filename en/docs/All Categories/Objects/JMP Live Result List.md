# JMP Live Result List



## Item Messages

### As Scriptable

**Syntax:** jmplivereportlist = jmplivelist << As Scriptable()

**Description:** Returns a scriptable list of JMP Live Folder, JMP Live Report, or JMP Live Post objects depending on the Find operation that was performed to produce the JMP Live Result List.

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

**Syntax:** value = jmplivelist << Get Current Page Number()

**Description:** Gets the current page number of items within the list.

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

**Syntax:** value = jmplivelist << Get Number Of Items()

**Description:** Get the number of items in this result set.

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

**Syntax:** reportlist = jmplivelist << Get Page(value)

**Description:** Gets the specific page of JMP Live Folder, JMP Live Report, or JMP Live Post objects within the entire result list of a find operation.

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

**Syntax:** reportlist = jmplivelist << Next()

**Description:** Returns the next page of results in a find operation. This list can contain JMP Live Folders, JMP Live Reports, or JMP Live Posts depending on the find operation.

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

**Syntax:** reportlist = jmplivelist << Previous()

**Description:** Returns the previous page of results in a find operation. This list can contain JMP Live Folders, JMP Live Reports, or JMP Live Posts depending on the find operation.

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


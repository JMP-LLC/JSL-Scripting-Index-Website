# JMP Live Result List



### As Scriptable

**Sintassi:** jmplivereportlist = jmplivelist << As Scriptable()

**Descrizione:** Restituisce un elenco che supporta script degli oggetti Cartella di JMP Live, Report di JMP Live o Post di JMP Live in base all&apos;operazione di ricerca che è stata eseguita per produrre l&apos;elenco dei risultati di JMP Live.

**JMP Versione aggiunta:** 16

```js

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

**Sintassi:** value = jmplivelist << Get Current Page Number()

**Descrizione:** Ottiene il numero di pagina corrente degli elementi all&apos;interno dell&apos;elenco.

**JMP Versione aggiunta:** 16

```js

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

**Sintassi:** value = jmplivelist << Get Number Of Items()

**Descrizione:** Ottiene il numero di elementi in questo set di risultati.

**JMP Versione aggiunta:** 16

```js

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

**Sintassi:** reportlist = jmplivelist << Get Page(value)

**Descrizione:** Ottiene la specifica pagina degli oggetti Cartella di JMP Live, Report di JMP Live o Post di JMP Live in tutto l&apos;elenco dei risultati di un&apos;operazione di ricerca.

**JMP Versione aggiunta:** 16

```js

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

**Sintassi:** reportlist = jmplivelist << Next()

**Descrizione:** Restituisce la pagina successiva dei risultati in un&apos;operazione di ricerca. Questo elenco può contenere cartelle di JMP Live, report di JMP Live o post di JMP Live in base all&apos;operazione di ricerca.

**JMP Versione aggiunta:** 16

```js

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

**Sintassi:** reportlist = jmplivelist << Previous()

**Descrizione:** Restituisce la pagina precedente dei risultati in un&apos;operazione di ricerca. Questo elenco può contenere cartelle di JMP Live, report di JMP Live o post di JMP Live in base all&apos;operazione di ricerca.

**JMP Versione aggiunta:** 16

```js

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


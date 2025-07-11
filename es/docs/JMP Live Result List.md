# JMP Live Result List



### As Scriptable

**Sintaxis:** jmplivereportlist = jmplivelist << As Scriptable()

**Descripción:** Devuelve una lista que admite scripts de los objetos de la carpeta de JMP Live, el informe de JMP Live o la publicación de JMP Live dependiendo de la operación de búsqueda que se llevó a cabo para generar la lista de resultados de JMP Live.

**JMP Versión agregada:** 16

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

**Sintaxis:** value = jmplivelist << Get Current Page Number()

**Descripción:** Obtiene el número de página actual de los elementos de la lista.

**JMP Versión agregada:** 16

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

**Sintaxis:** value = jmplivelist << Get Number Of Items()

**Descripción:** Obtiene el número de elementos en este conjunto de resultados.

**JMP Versión agregada:** 16

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

**Sintaxis:** reportlist = jmplivelist << Get Page(value)

**Descripción:** Obtiene la página específica de los objetos de la carpeta de JMP Live, el informe de JMP Live o la publicación de JMP Live dentro de toda la lista de resultados de una operación de búsqueda.

**JMP Versión agregada:** 16

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

**Sintaxis:** reportlist = jmplivelist << Next()

**Descripción:** Devuelve la siguiente página de resultados en una operación de búsqueda. Esta lista puede contener carpetas de JMP Live, informes de JMP Live o publicaciones de JMP Live dependiendo de la operación de búsqueda.

**JMP Versión agregada:** 16

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

**Sintaxis:** reportlist = jmplivelist << Previous()

**Descripción:** Devuelve la página anterior de resultados en una operación de búsqueda. Esta lista puede contener carpetas de JMP Live, informes de JMP Live o publicaciones de JMP Live dependiendo de la operación de búsqueda.

**JMP Versión agregada:** 16

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


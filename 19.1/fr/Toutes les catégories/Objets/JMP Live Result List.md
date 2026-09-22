# JMP Live Result List



## Messages d'éléments

### As Scriptable

**Syntaxe :** jmplivereportlist = jmplivelist &lt;&lt; As Scriptable()

**Description :** Renvoie une liste scriptable d&apos;objets Dossier JMP Live, Rapport JMP Live ou Post JMP Live selon l&apos;opération de recherche réalisée pour produire la Liste de résultats JMP Live.

**JMP Version ajoutée :** 16

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );gblinebar = bc << Run Script( "Graph Builder Line and Bar Charts" );gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );gbline = bc << Run Script( "Graph Builder Line Chart" );gbheat = bc << Run Script( "Graph Builder Heatmap" );liveconnection = New JMP Live();jmpliveresult = liveconnection << Create Folder(	Parent Folder( "~" ),	Title( "JMP Live Result List Example" ));folder = jmpliveresult << As Scriptable;jmpliveresult = folder << Create Folder( Title( "JMP Live Result List - Graph Builder" ) );gbfolder = jmpliveresult << As Scriptable;contentlist = {};Insert Into(	contentlist,	New JMP Live Content( gblinebar, Title( "Graph Builder Line and Bar Charts" ) ));Insert Into(	contentlist,	New JMP Live Content( gbsmoother, Title( "Graph Builder Smoother Line" ) ));Insert Into(	contentlist,	New JMP Live Content( gbline, Title( "Graph Builder Line Chart" ) ));Insert Into( contentlist, New JMP Live Content( gbheat, Title( "Graph Builder Heatmap" ) ) );jmpliveresult = gbfolder << Publish( contentlist );If( jmpliveresult << Succeeded,	postlist = jmpliveresult << As Scriptable();	Write( "\!n\!nNew Posts(Count): ", postlist << Get Number Of Items ););

```

### Get Current Page Number

**Syntaxe :** value = jmplivelist &lt;&lt; Get Current Page Number()

**Description :** Obtenez le numéro de page actuel des éléments dans la liste.

**JMP Version ajoutée :** 16

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );dist = bc << Run Script( "Distribution" );bivariate = bc << Run Script( "Bivariate" );oneway = bc << Run Script( "Oneway" );logistic = bc << Run Script( "Logistic" );gblinebar = bc << Run Script( "Graph Builder Line and Bar Charts" );gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );gbline = bc << Run Script( "Graph Builder Line Chart" );gbheat = bc << Run Script( "Graph Builder Heatmap" );liveconnection = New JMP Live();jmpliveresult = liveconnection << Create Folder(	Parent Folder( "~" ),	Title( "JMP Live Result List Example" ));folder = jmpliveresult << As Scriptable;jmpliveresult = liveconnection << Create Folder(	Parent Folder( folder ),	Title( "JMP Live Result List - Graph Builder" ));gbfolder = jmpliveresult << As Scriptable;jmpliveresult = liveconnection << Create Folder(	Parent Folder( folder ),	Title( "JMP Live Result List - Normal" ));normalfolder = jmpliveresult << As Scriptable;contentlist = {};Insert Into(	contentlist,	New JMP Live Content( dist, Title( "SearchString - Distribution" ) ));Insert Into(	contentlist,	New JMP Live Content( bivariate, Title( "SearchString - Bivariate" ) ));Insert Into( contentlist, New JMP Live Content( oneway, Title( "SearchString - Oneway" ) ) );Insert Into(	contentlist,	New JMP Live Content( logistic, Title( "SearchString - Logistic" ) ));gbfolder << Publish( contentlist );contentlist = {};Insert Into(	contentlist,	New JMP Live Content( gbsmoother, Title( "SearchString - Graph Builder Smoother Line" ) ));Insert Into(	contentlist,	New JMP Live Content(		gblinebar,		Title( "SearchString - Graph Builder Line and Bar Charts" )	));Insert Into(	contentlist,	New JMP Live Content( gbline, Title( "SearchString - Graph Builder Line Chart" ) ));Insert Into(	contentlist,	New JMP Live Content( gbheat, Title( "SearchString - Graph Builder Heatmap" ) ));normalfolder << Publish( contentlist );jmpliveresult = liveconnection << Find Posts( Search( "SearchString" ), PageSize( 4 ) );liveposts = jmpliveresult << As Scriptable;count = liveposts << Get Number Of Items;nextpage = liveposts << Get Page( 1 );While( count > 0,	Write( "\!n\!nPage: ", liveposts << Get Current Page Number );	Write( "\!nNumber of Search Results: ", nextpage << Get Number Of Items ); 	Try(		nextpage = liveposts << Next;		count = nextpage << Get Number Of Items;	,		count = 0	););prevpage = liveposts << Previous;count = prevpage << Get Number Of Items;While( count > 0,	Write( "\!n\!nPage: ", liveposts << Get Current Page Number );	Write( "\!nNumber of Search Results: ", prevpage << Get Number Of Items ); 	Try(		prevpage = liveposts << Previous;		count = prevpage << Get Number Of Items;	,		count = 0	););

```

### Get Number Of Items

**Syntaxe :** value = jmplivelist &lt;&lt; Get Number Of Items()

**Description :** Obtenez le nombre d&apos;éléments de cet ensemble de résultats.

**JMP Version ajoutée :** 16

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );dist = bc << Run Script( "Distribution" );bivariate = bc << Run Script( "Bivariate" );oneway = bc << Run Script( "Oneway" );logistic = bc << Run Script( "Logistic" );gblinebar = bc << Run Script( "Graph Builder Line and Bar Charts" );gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );gbline = bc << Run Script( "Graph Builder Line Chart" );gbheat = bc << Run Script( "Graph Builder Heatmap" );liveconnection = New JMP Live();jmpliveresult = liveconnection << Create Folder(	Parent Folder( "~" ),	Title( "JMP Live Result List Example" ));folder = jmpliveresult << As Scriptable;jmpliveresult = liveconnection << Create Folder(	Parent Folder( folder ),	Title( "JMP Live Result List - Graph Builder" ));gbfolder = jmpliveresult << As Scriptable;jmpliveresult = liveconnection << Create Folder(	Parent Folder( folder ),	Title( "JMP Live Result List - Normal" ));normalfolder = jmpliveresult << As Scriptable;contentlist = {};Insert Into(	contentlist,	New JMP Live Content( dist, Title( "SearchString - Distribution" ) ));Insert Into(	contentlist,	New JMP Live Content( bivariate, Title( "SearchString - Bivariate" ) ));Insert Into( contentlist, New JMP Live Content( oneway, Title( "SearchString - Oneway" ) ) );Insert Into(	contentlist,	New JMP Live Content( logistic, Title( "SearchString - Logistic" ) ));gbfolder << Publish( contentlist );contentlist = {};Insert Into(	contentlist,	New JMP Live Content( gbsmoother, Title( "SearchString - Graph Builder Smoother Line" ) ));Insert Into(	contentlist,	New JMP Live Content(		gblinebar,		Title( "SearchString - Graph Builder Line and Bar Charts" )	));Insert Into(	contentlist,	New JMP Live Content( gbline, Title( "SearchString - Graph Builder Line Chart" ) ));Insert Into(	contentlist,	New JMP Live Content( gbheat, Title( "SearchString - Graph Builder Heatmap" ) ));normalfolder << Publish( contentlist );jmpliveresult = liveconnection << Find Posts( Search( "SearchString" ) );If( jmpliveresult << Succeeded,	postlist = jmpliveresult << As Scriptable();	Write( "\!n\!nPosts(Count): ", postlist << Get Number Of Items ););

```

### Get Page

**Syntaxe :** reportlist = jmplivelist &lt;&lt; Get Page(value)

**Description :** Récupère la page spécifique du Dossier JMP Live, du Rapport JMP Live ou du Post JMP Live dans l&apos;ensemble de la liste de résultats d&apos;une opération de recherche.

**JMP Version ajoutée :** 16

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );dist = bc << Run Script( "Distribution" );bivariate = bc << Run Script( "Bivariate" );oneway = bc << Run Script( "Oneway" );logistic = bc << Run Script( "Logistic" );gblinebar = bc << Run Script( "Graph Builder Line and Bar Charts" );gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );gbline = bc << Run Script( "Graph Builder Line Chart" );gbheat = bc << Run Script( "Graph Builder Heatmap" );liveconnection = New JMP Live();jmpliveresult = liveconnection << Create Folder(	Parent Folder( "~" ),	Title( "JMP Live Result List Example" ));folder = jmpliveresult << As Scriptable;jmpliveresult = liveconnection << Create Folder(	Parent Folder( folder ),	Title( "JMP Live Result List - Graph Builder" ));gbfolder = jmpliveresult << As Scriptable;jmpliveresult = liveconnection << Create Folder(	Parent Folder( folder ),	Title( "JMP Live Result List - Normal" ));normalfolder = jmpliveresult << As Scriptable;contentlist = {};Insert Into(	contentlist,	New JMP Live Content( dist, Title( "SearchString - Distribution" ) ));Insert Into(	contentlist,	New JMP Live Content( bivariate, Title( "SearchString - Bivariate" ) ));Insert Into( contentlist, New JMP Live Content( oneway, Title( "SearchString - Oneway" ) ) );Insert Into(	contentlist,	New JMP Live Content( logistic, Title( "SearchString - Logistic" ) ));gbfolder << Publish( contentlist );contentlist = {};Insert Into(	contentlist,	New JMP Live Content( gbsmoother, Title( "SearchString - Graph Builder Smoother Line" ) ));Insert Into(	contentlist,	New JMP Live Content(		gblinebar,		Title( "SearchString - Graph Builder Line and Bar Charts" )	));Insert Into(	contentlist,	New JMP Live Content( gbline, Title( "SearchString - Graph Builder Line Chart" ) ));Insert Into(	contentlist,	New JMP Live Content( gbheat, Title( "SearchString - Graph Builder Heatmap" ) ));normalfolder << Publish( contentlist );jmpliveresult = liveconnection << Find Posts( Search( "SearchString" ), PageSize( 4 ) );liveposts = jmpliveresult << As Scriptable;count = liveposts << Get Number Of Items;nextpage = liveposts << Get Page( 1 );While( count > 0,	Write( "\!n\!nPage: ", liveposts << Get Current Page Number );	Write( "\!nNumber of Search Results: ", nextpage << Get Number Of Items ); 	Try(		nextpage = liveposts << Next;		count = nextpage << Get Number Of Items;	,		count = 0	););prevpage = liveposts << Previous;count = prevpage << Get Number Of Items;While( count > 0,	Write( "\!n\!nPage: ", liveposts << Get Current Page Number );	Write( "\!nNumber of Search Results: ", prevpage << Get Number Of Items ); 	Try(		prevpage = liveposts << Previous;		count = prevpage << Get Number Of Items;	,		count = 0	););

```

### Next

**Syntaxe :** reportlist = jmplivelist &lt;&lt; Next()

**Description :** Renvoie la page suivante de résultats dans une opération de recherche. Cette liste peut contenir des Dossiers JMP Live, des Rapports JMP Live ou des Posts JMP Live en fonction de l&apos;opération de recherche.

**JMP Version ajoutée :** 16

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );dist = bc << Run Script( "Distribution" );bivariate = bc << Run Script( "Bivariate" );oneway = bc << Run Script( "Oneway" );logistic = bc << Run Script( "Logistic" );gblinebar = bc << Run Script( "Graph Builder Line and Bar Charts" );gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );gbline = bc << Run Script( "Graph Builder Line Chart" );gbheat = bc << Run Script( "Graph Builder Heatmap" );liveconnection = New JMP Live();jmpliveresult = liveconnection << Create Folder(	Parent Folder( "~" ),	Title( "JMP Live Result List Example" ));folder = jmpliveresult << As Scriptable;jmpliveresult = liveconnection << Create Folder(	Parent Folder( folder ),	Title( "JMP Live Result List - Graph Builder" ));gbfolder = jmpliveresult << As Scriptable;jmpliveresult = liveconnection << Create Folder(	Parent Folder( folder ),	Title( "JMP Live Result List - Normal" ));normalfolder = jmpliveresult << As Scriptable;contentlist = {};Insert Into(	contentlist,	New JMP Live Content( dist, Title( "SearchString - Distribution" ) ));Insert Into(	contentlist,	New JMP Live Content( bivariate, Title( "SearchString - Bivariate" ) ));Insert Into( contentlist, New JMP Live Content( oneway, Title( "SearchString - Oneway" ) ) );Insert Into(	contentlist,	New JMP Live Content( logistic, Title( "SearchString - Logistic" ) ));gbfolder << Publish( contentlist );contentlist = {};Insert Into(	contentlist,	New JMP Live Content( gbsmoother, Title( "SearchString - Graph Builder Smoother Line" ) ));Insert Into(	contentlist,	New JMP Live Content(		gblinebar,		Title( "SearchString - Graph Builder Line and Bar Charts" )	));Insert Into(	contentlist,	New JMP Live Content( gbline, Title( "SearchString - Graph Builder Line Chart" ) ));Insert Into(	contentlist,	New JMP Live Content( gbheat, Title( "SearchString - Graph Builder Heatmap" ) ));normalfolder << Publish( contentlist );jmpliveresult = liveconnection << Find Posts( Search( "SearchString" ), PageSize( 4 ) );liveposts = jmpliveresult << As Scriptable;count = liveposts << Get Number Of Items;nextpage = liveposts << Get Page( 1 );While( count > 0,	Write( "\!n\!nPage: ", liveposts << Get Current Page Number );	Write( "\!nNumber of Search Results: ", nextpage << Get Number Of Items ); 	Try(		nextpage = liveposts << Next;		count = nextpage << Get Number Of Items;	,		count = 0	););prevpage = liveposts << Previous;count = prevpage << Get Number Of Items;While( count > 0,	Write( "\!n\!nPage: ", liveposts << Get Current Page Number );	Write( "\!nNumber of Search Results: ", prevpage << Get Number Of Items ); 	Try(		prevpage = liveposts << Previous;		count = prevpage << Get Number Of Items;	,		count = 0	););

```

### Previous

**Syntaxe :** reportlist = jmplivelist &lt;&lt; Previous()

**Description :** Renvoie la page précédente de résultats dans une opération de recherche. Cette liste peut contenir des Dossiers JMP Live, des Rapports JMP Live ou des Posts JMP Live en fonction de l&apos;opération de recherche.

**JMP Version ajoutée :** 16

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );dist = bc << Run Script( "Distribution" );bivariate = bc << Run Script( "Bivariate" );oneway = bc << Run Script( "Oneway" );logistic = bc << Run Script( "Logistic" );gblinebar = bc << Run Script( "Graph Builder Line and Bar Charts" );gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );gbline = bc << Run Script( "Graph Builder Line Chart" );gbheat = bc << Run Script( "Graph Builder Heatmap" );liveconnection = New JMP Live();jmpliveresult = liveconnection << Create Folder(	Parent Folder( "~" ),	Title( "JMP Live Result List Example" ));folder = jmpliveresult << As Scriptable;jmpliveresult = liveconnection << Create Folder(	Parent Folder( folder ),	Title( "JMP Live Result List - Graph Builder" ));gbfolder = jmpliveresult << As Scriptable;jmpliveresult = liveconnection << Create Folder(	Parent Folder( folder ),	Title( "JMP Live Result List - Normal" ));normalfolder = jmpliveresult << As Scriptable;contentlist = {};Insert Into(	contentlist,	New JMP Live Content( dist, Title( "SearchString - Distribution" ) ));Insert Into(	contentlist,	New JMP Live Content( bivariate, Title( "SearchString - Bivariate" ) ));Insert Into( contentlist, New JMP Live Content( oneway, Title( "SearchString - Oneway" ) ) );Insert Into(	contentlist,	New JMP Live Content( logistic, Title( "SearchString - Logistic" ) ));gbfolder << Publish( contentlist );contentlist = {};Insert Into(	contentlist,	New JMP Live Content( gbsmoother, Title( "SearchString - Graph Builder Smoother Line" ) ));Insert Into(	contentlist,	New JMP Live Content(		gblinebar,		Title( "SearchString - Graph Builder Line and Bar Charts" )	));Insert Into(	contentlist,	New JMP Live Content( gbline, Title( "SearchString - Graph Builder Line Chart" ) ));Insert Into(	contentlist,	New JMP Live Content( gbheat, Title( "SearchString - Graph Builder Heatmap" ) ));normalfolder << Publish( contentlist );jmpliveresult = liveconnection << Find Posts( Search( "SearchString" ), PageSize( 4 ) );liveposts = jmpliveresult << As Scriptable;count = liveposts << Get Number Of Items;nextpage = liveposts << Get Page( 1 );While( count > 0,	Write( "\!n\!nPage: ", liveposts << Get Current Page Number );	Write( "\!nNumber of Search Results: ", nextpage << Get Number Of Items ); 	Try(		nextpage = liveposts << Next;		count = nextpage << Get Number Of Items;	,		count = 0	););prevpage = liveposts << Previous;count = prevpage << Get Number Of Items;While( count > 0,	Write( "\!n\!nPage: ", liveposts << Get Current Page Number );	Write( "\!nNumber of Search Results: ", prevpage << Get Number Of Items ); 	Try(		prevpage = liveposts << Previous;		count = prevpage << Get Number Of Items;	,		count = 0	););

```


# JMP Live Result List



## 項目のメッセージ

### As Scriptable

**構文:** jmplivereportlist = jmplivelist &lt;&lt; As Scriptable()

**説明:** JMP Live結果リストを生成するために実行された検索の操作に応じて、JMP Liveフォルダ、JMP Liveレポート、またはJMP Live投稿の、スクリプト可能なオブジェクトのリストを戻す。

**JMP追加されたバージョン:** 16

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );gblinebar = bc << Run Script( "Graph Builder Line and Bar Charts" );gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );gbline = bc << Run Script( "Graph Builder Line Chart" );gbheat = bc << Run Script( "Graph Builder Heatmap" );liveconnection = New JMP Live();jmpliveresult = liveconnection << Create Folder(	Parent Folder( "~" ),	Title( "JMP Live Result List Example" ));folder = jmpliveresult << As Scriptable;jmpliveresult = folder << Create Folder( Title( "JMP Live Result List - Graph Builder" ) );gbfolder = jmpliveresult << As Scriptable;contentlist = {};Insert Into(	contentlist,	New JMP Live Content( gblinebar, Title( "Graph Builder Line and Bar Charts" ) ));Insert Into(	contentlist,	New JMP Live Content( gbsmoother, Title( "Graph Builder Smoother Line" ) ));Insert Into(	contentlist,	New JMP Live Content( gbline, Title( "Graph Builder Line Chart" ) ));Insert Into( contentlist, New JMP Live Content( gbheat, Title( "Graph Builder Heatmap" ) ) );jmpliveresult = gbfolder << Publish( contentlist );If( jmpliveresult << Succeeded,	postlist = jmpliveresult << As Scriptable();	Write( "\!n\!nNew Posts(Count): ", postlist << Get Number Of Items ););

```

### Get Current Page Number

**構文:** value = jmplivelist &lt;&lt; Get Current Page Number()

**説明:** リスト内の項目の現在のページ番号を取得する。

**JMP追加されたバージョン:** 16

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );dist = bc << Run Script( "Distribution" );bivariate = bc << Run Script( "Bivariate" );oneway = bc << Run Script( "Oneway" );logistic = bc << Run Script( "Logistic" );gblinebar = bc << Run Script( "Graph Builder Line and Bar Charts" );gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );gbline = bc << Run Script( "Graph Builder Line Chart" );gbheat = bc << Run Script( "Graph Builder Heatmap" );liveconnection = New JMP Live();jmpliveresult = liveconnection << Create Folder(	Parent Folder( "~" ),	Title( "JMP Live Result List Example" ));folder = jmpliveresult << As Scriptable;jmpliveresult = liveconnection << Create Folder(	Parent Folder( folder ),	Title( "JMP Live Result List - Graph Builder" ));gbfolder = jmpliveresult << As Scriptable;jmpliveresult = liveconnection << Create Folder(	Parent Folder( folder ),	Title( "JMP Live Result List - Normal" ));normalfolder = jmpliveresult << As Scriptable;contentlist = {};Insert Into(	contentlist,	New JMP Live Content( dist, Title( "SearchString - Distribution" ) ));Insert Into(	contentlist,	New JMP Live Content( bivariate, Title( "SearchString - Bivariate" ) ));Insert Into( contentlist, New JMP Live Content( oneway, Title( "SearchString - Oneway" ) ) );Insert Into(	contentlist,	New JMP Live Content( logistic, Title( "SearchString - Logistic" ) ));gbfolder << Publish( contentlist );contentlist = {};Insert Into(	contentlist,	New JMP Live Content( gbsmoother, Title( "SearchString - Graph Builder Smoother Line" ) ));Insert Into(	contentlist,	New JMP Live Content(		gblinebar,		Title( "SearchString - Graph Builder Line and Bar Charts" )	));Insert Into(	contentlist,	New JMP Live Content( gbline, Title( "SearchString - Graph Builder Line Chart" ) ));Insert Into(	contentlist,	New JMP Live Content( gbheat, Title( "SearchString - Graph Builder Heatmap" ) ));normalfolder << Publish( contentlist );jmpliveresult = liveconnection << Find Posts( Search( "SearchString" ), PageSize( 4 ) );liveposts = jmpliveresult << As Scriptable;count = liveposts << Get Number Of Items;nextpage = liveposts << Get Page( 1 );While( count > 0,	Write( "\!n\!nPage: ", liveposts << Get Current Page Number );	Write( "\!nNumber of Search Results: ", nextpage << Get Number Of Items ); 	Try(		nextpage = liveposts << Next;		count = nextpage << Get Number Of Items;	,		count = 0	););prevpage = liveposts << Previous;count = prevpage << Get Number Of Items;While( count > 0,	Write( "\!n\!nPage: ", liveposts << Get Current Page Number );	Write( "\!nNumber of Search Results: ", prevpage << Get Number Of Items ); 	Try(		prevpage = liveposts << Previous;		count = prevpage << Get Number Of Items;	,		count = 0	););

```

### Get Number Of Items

**構文:** value = jmplivelist &lt;&lt; Get Number Of Items()

**説明:** この結果セットの項目数を取得する。

**JMP追加されたバージョン:** 16

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );dist = bc << Run Script( "Distribution" );bivariate = bc << Run Script( "Bivariate" );oneway = bc << Run Script( "Oneway" );logistic = bc << Run Script( "Logistic" );gblinebar = bc << Run Script( "Graph Builder Line and Bar Charts" );gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );gbline = bc << Run Script( "Graph Builder Line Chart" );gbheat = bc << Run Script( "Graph Builder Heatmap" );liveconnection = New JMP Live();jmpliveresult = liveconnection << Create Folder(	Parent Folder( "~" ),	Title( "JMP Live Result List Example" ));folder = jmpliveresult << As Scriptable;jmpliveresult = liveconnection << Create Folder(	Parent Folder( folder ),	Title( "JMP Live Result List - Graph Builder" ));gbfolder = jmpliveresult << As Scriptable;jmpliveresult = liveconnection << Create Folder(	Parent Folder( folder ),	Title( "JMP Live Result List - Normal" ));normalfolder = jmpliveresult << As Scriptable;contentlist = {};Insert Into(	contentlist,	New JMP Live Content( dist, Title( "SearchString - Distribution" ) ));Insert Into(	contentlist,	New JMP Live Content( bivariate, Title( "SearchString - Bivariate" ) ));Insert Into( contentlist, New JMP Live Content( oneway, Title( "SearchString - Oneway" ) ) );Insert Into(	contentlist,	New JMP Live Content( logistic, Title( "SearchString - Logistic" ) ));gbfolder << Publish( contentlist );contentlist = {};Insert Into(	contentlist,	New JMP Live Content( gbsmoother, Title( "SearchString - Graph Builder Smoother Line" ) ));Insert Into(	contentlist,	New JMP Live Content(		gblinebar,		Title( "SearchString - Graph Builder Line and Bar Charts" )	));Insert Into(	contentlist,	New JMP Live Content( gbline, Title( "SearchString - Graph Builder Line Chart" ) ));Insert Into(	contentlist,	New JMP Live Content( gbheat, Title( "SearchString - Graph Builder Heatmap" ) ));normalfolder << Publish( contentlist );jmpliveresult = liveconnection << Find Posts( Search( "SearchString" ) );If( jmpliveresult << Succeeded,	postlist = jmpliveresult << As Scriptable();	Write( "\!n\!nPosts(Count): ", postlist << Get Number Of Items ););

```

### Get Page

**構文:** reportlist = jmplivelist &lt;&lt; Get Page(value)

**説明:** 検索操作の結果リストの中から、JMP Liveフォルダ、JMP Liveレポート、またはJMP Live投稿オブジェクトの特定のページを取得する。

**JMP追加されたバージョン:** 16

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );dist = bc << Run Script( "Distribution" );bivariate = bc << Run Script( "Bivariate" );oneway = bc << Run Script( "Oneway" );logistic = bc << Run Script( "Logistic" );gblinebar = bc << Run Script( "Graph Builder Line and Bar Charts" );gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );gbline = bc << Run Script( "Graph Builder Line Chart" );gbheat = bc << Run Script( "Graph Builder Heatmap" );liveconnection = New JMP Live();jmpliveresult = liveconnection << Create Folder(	Parent Folder( "~" ),	Title( "JMP Live Result List Example" ));folder = jmpliveresult << As Scriptable;jmpliveresult = liveconnection << Create Folder(	Parent Folder( folder ),	Title( "JMP Live Result List - Graph Builder" ));gbfolder = jmpliveresult << As Scriptable;jmpliveresult = liveconnection << Create Folder(	Parent Folder( folder ),	Title( "JMP Live Result List - Normal" ));normalfolder = jmpliveresult << As Scriptable;contentlist = {};Insert Into(	contentlist,	New JMP Live Content( dist, Title( "SearchString - Distribution" ) ));Insert Into(	contentlist,	New JMP Live Content( bivariate, Title( "SearchString - Bivariate" ) ));Insert Into( contentlist, New JMP Live Content( oneway, Title( "SearchString - Oneway" ) ) );Insert Into(	contentlist,	New JMP Live Content( logistic, Title( "SearchString - Logistic" ) ));gbfolder << Publish( contentlist );contentlist = {};Insert Into(	contentlist,	New JMP Live Content( gbsmoother, Title( "SearchString - Graph Builder Smoother Line" ) ));Insert Into(	contentlist,	New JMP Live Content(		gblinebar,		Title( "SearchString - Graph Builder Line and Bar Charts" )	));Insert Into(	contentlist,	New JMP Live Content( gbline, Title( "SearchString - Graph Builder Line Chart" ) ));Insert Into(	contentlist,	New JMP Live Content( gbheat, Title( "SearchString - Graph Builder Heatmap" ) ));normalfolder << Publish( contentlist );jmpliveresult = liveconnection << Find Posts( Search( "SearchString" ), PageSize( 4 ) );liveposts = jmpliveresult << As Scriptable;count = liveposts << Get Number Of Items;nextpage = liveposts << Get Page( 1 );While( count > 0,	Write( "\!n\!nPage: ", liveposts << Get Current Page Number );	Write( "\!nNumber of Search Results: ", nextpage << Get Number Of Items ); 	Try(		nextpage = liveposts << Next;		count = nextpage << Get Number Of Items;	,		count = 0	););prevpage = liveposts << Previous;count = prevpage << Get Number Of Items;While( count > 0,	Write( "\!n\!nPage: ", liveposts << Get Current Page Number );	Write( "\!nNumber of Search Results: ", prevpage << Get Number Of Items ); 	Try(		prevpage = liveposts << Previous;		count = prevpage << Get Number Of Items;	,		count = 0	););

```

### Next

**構文:** reportlist = jmplivelist &lt;&lt; Next()

**説明:** 検索結果の、次ページの内容を戻す。このリストには、検索操作に応じてJMP Liveフォルダ、JMP Liveレポート、またはJMP Live投稿が含まれる。

**JMP追加されたバージョン:** 16

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );dist = bc << Run Script( "Distribution" );bivariate = bc << Run Script( "Bivariate" );oneway = bc << Run Script( "Oneway" );logistic = bc << Run Script( "Logistic" );gblinebar = bc << Run Script( "Graph Builder Line and Bar Charts" );gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );gbline = bc << Run Script( "Graph Builder Line Chart" );gbheat = bc << Run Script( "Graph Builder Heatmap" );liveconnection = New JMP Live();jmpliveresult = liveconnection << Create Folder(	Parent Folder( "~" ),	Title( "JMP Live Result List Example" ));folder = jmpliveresult << As Scriptable;jmpliveresult = liveconnection << Create Folder(	Parent Folder( folder ),	Title( "JMP Live Result List - Graph Builder" ));gbfolder = jmpliveresult << As Scriptable;jmpliveresult = liveconnection << Create Folder(	Parent Folder( folder ),	Title( "JMP Live Result List - Normal" ));normalfolder = jmpliveresult << As Scriptable;contentlist = {};Insert Into(	contentlist,	New JMP Live Content( dist, Title( "SearchString - Distribution" ) ));Insert Into(	contentlist,	New JMP Live Content( bivariate, Title( "SearchString - Bivariate" ) ));Insert Into( contentlist, New JMP Live Content( oneway, Title( "SearchString - Oneway" ) ) );Insert Into(	contentlist,	New JMP Live Content( logistic, Title( "SearchString - Logistic" ) ));gbfolder << Publish( contentlist );contentlist = {};Insert Into(	contentlist,	New JMP Live Content( gbsmoother, Title( "SearchString - Graph Builder Smoother Line" ) ));Insert Into(	contentlist,	New JMP Live Content(		gblinebar,		Title( "SearchString - Graph Builder Line and Bar Charts" )	));Insert Into(	contentlist,	New JMP Live Content( gbline, Title( "SearchString - Graph Builder Line Chart" ) ));Insert Into(	contentlist,	New JMP Live Content( gbheat, Title( "SearchString - Graph Builder Heatmap" ) ));normalfolder << Publish( contentlist );jmpliveresult = liveconnection << Find Posts( Search( "SearchString" ), PageSize( 4 ) );liveposts = jmpliveresult << As Scriptable;count = liveposts << Get Number Of Items;nextpage = liveposts << Get Page( 1 );While( count > 0,	Write( "\!n\!nPage: ", liveposts << Get Current Page Number );	Write( "\!nNumber of Search Results: ", nextpage << Get Number Of Items ); 	Try(		nextpage = liveposts << Next;		count = nextpage << Get Number Of Items;	,		count = 0	););prevpage = liveposts << Previous;count = prevpage << Get Number Of Items;While( count > 0,	Write( "\!n\!nPage: ", liveposts << Get Current Page Number );	Write( "\!nNumber of Search Results: ", prevpage << Get Number Of Items ); 	Try(		prevpage = liveposts << Previous;		count = prevpage << Get Number Of Items;	,		count = 0	););

```

### Previous

**構文:** reportlist = jmplivelist &lt;&lt; Previous()

**説明:** 検索結果の、前ページの内容を戻す。このリストには、検索操作に応じてJMP Liveフォルダ、JMP Liveレポート、またはJMP Live投稿が含まれる。

**JMP追加されたバージョン:** 16

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );dist = bc << Run Script( "Distribution" );bivariate = bc << Run Script( "Bivariate" );oneway = bc << Run Script( "Oneway" );logistic = bc << Run Script( "Logistic" );gblinebar = bc << Run Script( "Graph Builder Line and Bar Charts" );gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );gbline = bc << Run Script( "Graph Builder Line Chart" );gbheat = bc << Run Script( "Graph Builder Heatmap" );liveconnection = New JMP Live();jmpliveresult = liveconnection << Create Folder(	Parent Folder( "~" ),	Title( "JMP Live Result List Example" ));folder = jmpliveresult << As Scriptable;jmpliveresult = liveconnection << Create Folder(	Parent Folder( folder ),	Title( "JMP Live Result List - Graph Builder" ));gbfolder = jmpliveresult << As Scriptable;jmpliveresult = liveconnection << Create Folder(	Parent Folder( folder ),	Title( "JMP Live Result List - Normal" ));normalfolder = jmpliveresult << As Scriptable;contentlist = {};Insert Into(	contentlist,	New JMP Live Content( dist, Title( "SearchString - Distribution" ) ));Insert Into(	contentlist,	New JMP Live Content( bivariate, Title( "SearchString - Bivariate" ) ));Insert Into( contentlist, New JMP Live Content( oneway, Title( "SearchString - Oneway" ) ) );Insert Into(	contentlist,	New JMP Live Content( logistic, Title( "SearchString - Logistic" ) ));gbfolder << Publish( contentlist );contentlist = {};Insert Into(	contentlist,	New JMP Live Content( gbsmoother, Title( "SearchString - Graph Builder Smoother Line" ) ));Insert Into(	contentlist,	New JMP Live Content(		gblinebar,		Title( "SearchString - Graph Builder Line and Bar Charts" )	));Insert Into(	contentlist,	New JMP Live Content( gbline, Title( "SearchString - Graph Builder Line Chart" ) ));Insert Into(	contentlist,	New JMP Live Content( gbheat, Title( "SearchString - Graph Builder Heatmap" ) ));normalfolder << Publish( contentlist );jmpliveresult = liveconnection << Find Posts( Search( "SearchString" ), PageSize( 4 ) );liveposts = jmpliveresult << As Scriptable;count = liveposts << Get Number Of Items;nextpage = liveposts << Get Page( 1 );While( count > 0,	Write( "\!n\!nPage: ", liveposts << Get Current Page Number );	Write( "\!nNumber of Search Results: ", nextpage << Get Number Of Items ); 	Try(		nextpage = liveposts << Next;		count = nextpage << Get Number Of Items;	,		count = 0	););prevpage = liveposts << Previous;count = prevpage << Get Number Of Items;While( count > 0,	Write( "\!n\!nPage: ", liveposts << Get Current Page Number );	Write( "\!nNumber of Search Results: ", prevpage << Get Number Of Items ); 	Try(		prevpage = liveposts << Previous;		count = prevpage << Get Number Of Items;	,		count = 0	););

```


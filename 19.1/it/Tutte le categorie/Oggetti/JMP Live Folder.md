# JMP Live Folder



## Messaggi degli elementi

### Add Reports To Folder

**Sintassi:** jmpliveresultlist = folder &lt;&lt; Add Reports To Folder(JMPLiveContent, &lt;Use Existing Data({{dt_or_name, id | relative_path | JMP Live Data}})&gt;)

**Descrizione:** Il messaggio Aggiungi report alla cartella è deprecato. Utilizzare invece Pubblica.

**JMP Versione aggiunta:** 16

### Create Folder

**Sintassi:** liveresult = folder &lt;&lt; Create Folder(Title("Title"), &lt;Description("Description")&gt;, &lt;If Exists("use" | "fail" | "default")&gt;)

**Descrizione:** Crea una sottocartella di questa cartella su JMP Live. Restituisce un risultato JMP Live, che può essere utilizzato per ottenere l&apos;oggetto cartella JMP Live per la nuova cartella. Il titolo è obbligatorio. La descrizione è facoltativa. Se esiste indica a JMP Live cosa fare se la cartella specificata esiste già: "usa" significa semplicemente restituire la cartella esistente, "guasto" significa generare un errore e "default" significa creare una nuova cartella e renderne univoco il nome aggiungendo "(2)", "(3)", ecc.

**JMP Versione aggiunta:** 19

```jsl

liveconnection = New JMP Live();existingFolder = (liveconnection << Get Folder( "~" )) << As Scriptable;newFolder = (existingFolder << Create Folder(	Title( "Important Reports" ),	If Exists( "default" ))) << As Scriptable;Write( "New folder path: ", newFolder << Get Path );

```

### Get Children

**Sintassi:** jmpliveresultlist = folder &lt;&lt; Get Children(&lt;PAGESIZE(10)&gt;)

**Descrizione:** Recupera i post di livello inferiore contenuti nella cartella come elenco di risultati JMP Live. È possibile utilizzare un argomento opzionale dimensionepagina per controllare il numero di post restituiti.

**JMP Versione aggiunta:** 16

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );gblinebar = bc << Run Script( "Graph Builder Line and Bar Charts" );gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );gbline = bc << Run Script( "Graph Builder Line Chart" );gbheat = bc << Run Script( "Graph Builder Heatmap" );liveconnection = New JMP Live();jmpliveresult = liveconnection << Create Folder(	Parent Folder( "~" ),	Title( "Folder - Get Children Example" ));folder = jmpliveresult << As Scriptable;contentlist = {};Insert Into(	contentlist,	New JMP Live Content( gbsmoother, Title( "SearchString - Graph Builder Smoother Line" ) ));Insert Into(	contentlist,	New JMP Live Content(		gblinebar,		Title( "SearchString - Graph Builder Line and Bar Charts" )	));Insert Into(	contentlist,	New JMP Live Content( gbline, Title( "SearchString - Graph Builder Line Chart" ) ));Insert Into(	contentlist,	New JMP Live Content( gbheat, Title( "SearchString - Graph Builder Heatmap" ) ));jmpliveresult = folder << Publish( contentlist );jmpliveresult = folder << Get Children;children = jmpliveresult << As Scriptable;For( i = 1, i <= children << Get Number Of Items, i += 1,	Write( "\!n\!nChild ID: ", children[i] << Get ID );	Write( "\!nChild Type: ", children[i] << Get Type ););

```

### Get Data

**Sintassi:** result = jmplivefolder &lt;&lt; Get Data(id | relative_path)

**Descrizione:** Recupera un post di dati dalla cartella come oggetto risultato di JMP Live, che può essere utilizzato per ottenere l&apos;oggetto dati JMP Live per quel post.

**JMP Versione aggiunta:** 19

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );liveconnection = New JMP Live();jmpliveresult = liveconnection << Create Folder(	Parent Folder( "~" ),	Title( "Reports and Posts - Messages" ),	If Exists( "use" ));folder = jmpliveresult << As Scriptable;content = New JMP Live Content(	gbsmoother,	Title( "A Very Important Report" ),	Description( "The Report That Is Published" ),);jmpliveresult = folder << Publish( content );post = (folder << Get Data( "Big Class" )) << As Scriptable;Write( "\!n\!nTitle: ", post << Get Title );

```

### Get Description

**Sintassi:** string = jmplivepost &lt;&lt; Get Description()

**Descrizione:** Carica la descrizione del report di JMP Live, della cartella di JMP Live o del post di JMP Live come stringa.

**JMP Versione aggiunta:** 16

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );liveconnection = New JMP Live();result = liveconnection << Create Folder(	Parent Folder( "~" ),	Title( "Reports and Posts - Messages" ),	If Exists( "use" ));folder = result << As Scriptable;content = New JMP Live Content(	gbsmoother,	Title( "A Very Important Report" ),	Description( "The Report That Is Published" ));jmpliveresult = folder << Publish( content );report = Empty();postList = jmpliveresult << As Scriptable;For( i = 1, i <= postlist << Get Number Of Items, i += 1,	posttype = postlist[i] << Get Type;	If( posttype == "Report",		report = postlist[i]	););Write( "\!n\!nID: ", report << Get ID );Write( "\!nDescription: ", report << Get Description );

```

### Get Folder

**Sintassi:** result = jmplivefolder &lt;&lt; Get Folder(id | relative_path)

**Descrizione:** Recupera una cartella di livello inferiore dalla cartella come oggetto risultato di JMP Live, che può essere utilizzata per ottenere l&apos;oggetto cartella JMP Live per quella cartella di livello inferiore.

**JMP Versione aggiunta:** 19

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );liveconnection = New JMP Live();personalFolder = (liveConnection << Get Folder( "~" )) << As Scriptable;jmpliveresult = liveconnection << Create Folder(	Parent Folder( personalFolder ),	Title( "Reports and Posts - Messages" ),	If Exists( "use" ));subfolder = jmpliveresult << As Scriptable;content = New JMP Live Content(	gbsmoother,	Title( "A Very Important Report" ),	Description( "The Report That Is Published" ),);jmpliveresult = subfolder << Publish( content );folder = (personalFolder << Get Folder( "Reports and Posts - Messages" )) << As Scriptable;Write( "\!n\!nTitle: ", folder << Get Title );

```

### Get ID

**Sintassi:** string = jmplivepost &lt;&lt; Get ID()

**Descrizione:** Ottiene l’ID per questo report di JMP Live, questa cartella di JMP Live o questo post di JMP Live come stringa.

**JMP Versione aggiunta:** 16

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );liveconnection = New JMP Live();result = liveconnection << Create Folder(	Parent Folder( "~" ),	Title( "Reports and Posts - Messages" ),	If Exists( "use" ));folder = result << As Scriptable;content = New JMP Live Content(	gbsmoother,	Title( "A Very Important Report" ),	Description( "The Report That Is Published" ),);jmpliveresult = folder << Publish( content );report = Empty();postList = jmpliveresult << As Scriptable;For( i = 1, i <= postlist << Get Number Of Items, i += 1,	posttype = postlist[i] << Get Type;	If( posttype == "Report",		report = postlist[i]	););Write( "\!n\!nID: ", report << Get ID );

```

### Get Number Of Items

**Sintassi:** value = jmplivefolder &lt;&lt; Get Number Of Items()

**Descrizione:** Ottiene il numero di elementi nella cartella.

**JMP Versione aggiunta:** 16

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );gblinebar = bc << Run Script( "Graph Builder Line and Bar Charts" );gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );gbline = bc << Run Script( "Graph Builder Line Chart" );gbheat = bc << Run Script( "Graph Builder Heatmap" );liveconnection = New JMP Live();jmpliveresult = liveconnection << Create Folder(	Parent Folder( "~" ),	Title( "Folder - Get Children Count Example" ));folder = jmpliveresult << As Scriptable;contentlist = {};Insert Into(	contentlist,	New JMP Live Content( gbsmoother, Title( "SearchString - Graph Builder Smoother Line" ) ));Insert Into(	contentlist,	New JMP Live Content(		gblinebar,		Title( "SearchString - Graph Builder Line and Bar Charts" )	));Insert Into(	contentlist,	New JMP Live Content( gbline, Title( "SearchString - Graph Builder Line Chart" ) ));Insert Into(	contentlist,	New JMP Live Content( gbheat, Title( "SearchString - Graph Builder Heatmap" ) ));jmpliveresult = folder << Publish( contentlist );count = folder << Get Number of Items;Write( "\!n\!nChild Count: ", count );

```

### Get Path

**Sintassi:** string = jmplivepost &lt;&lt; Get Path()

**Descrizione:** Ottiene il percorso di questo report, cartella, post di JMP Live come stringa.

**JMP Versione aggiunta:** 19

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );liveconnection = New JMP Live();result = liveconnection << Create Folder(	Parent Folder( "~" ),	Title( "Reports and Posts - Messages" ),	If Exists( "use" ));folder = result << As Scriptable;content = New JMP Live Content(	gbsmoother,	Title( "A Very Important Report" ),	Description( "The Report That Is Published" ),);jmpliveresult = folder << Publish( content );report = Empty();postList = jmpliveresult << As Scriptable;For( i = 1, i <= postlist << Get Number Of Items, i += 1,	posttype = postlist[i] << Get Type;	If( posttype == "Report",		report = postlist[i]	););Write( "\!n\!nPath: ", report << Get Path );

```

### Get Post

**Sintassi:** result = jmplivefolder &lt;&lt; Get Post(id | relative_path)

**Descrizione:** Recupera un post dalla cartella come oggetto risultato di JMP Live, che può essere utilizzato per ottenere l&apos;oggetto post JMP Live per quel post.

**JMP Versione aggiunta:** 19

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );liveconnection = New JMP Live();jmpliveresult = liveconnection << Create Folder(	Parent Folder( "~" ),	Title( "Reports and Posts - Messages" ),	If Exists( "use" ));folder = jmpliveresult << As Scriptable;content = New JMP Live Content(	gbsmoother,	Title( "A Very Important Report" ),	Description( "The Report That Is Published" ),);jmpliveresult = folder << Publish( content );post = (folder << Get Post( "A Very Important Report" )) << As Scriptable;Write( "\!n\!nTitle: ", post << Get Title );

```

### Get Report

**Sintassi:** result = jmplivepost &lt;&lt; Get Report(id | relative_path)

**Descrizione:** Recupera un post di report dalla cartella come oggetto risultato di JMP Live, che può essere utilizzato per ottenere l&apos;oggetto report JMP Live per quel report.

**JMP Versione aggiunta:** 19

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );liveconnection = New JMP Live();jmpliveresult = liveconnection << Create Folder(	Parent Folder( "~" ),	Title( "Reports and Posts - Messages" ),	If Exists( "use" ));folder = jmpliveresult << As Scriptable;content = New JMP Live Content(	gbsmoother,	Title( "A Very Important Report" ),	Description( "The Report That Is Published" ),);jmpliveresult = folder << Publish( content );post = (folder << Get Report( "A Very Important Report" )) << As Scriptable;Write( "\!n\!nTitle: ", post << Get Title );

```

### Get Title

**Sintassi:** string = jmplivepost &lt;&lt; Get Title()

**Descrizione:** Carica il titolo del report di JMP Live, della cartella di JMP Live o del post di JMP Live come stringa.

**JMP Versione aggiunta:** 16

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );liveconnection = New JMP Live();result = liveconnection << Create Folder(	Parent Folder( "~" ),	Title( "Reports and Posts - Messages" ),	If Exists( "use" ));folder = result << As Scriptable;content = New JMP Live Content(	gbsmoother,	Title( "A Very Important Report" ),	Description( "The Report That Is Published" ),);jmpliveresult = folder << Publish( content );report = Empty();postList = jmpliveresult << As Scriptable;For( i = 1, i <= postlist << Get Number Of Items, i += 1,	posttype = postlist[i] << Get Type;	If( posttype == "Report",		report = postlist[i]	););Write( "\!n\!nID: ", report << Get ID );Write( "\!nTitle: ", report << Get Title );

```

### Get Type

**Sintassi:** string = jmplivepost &lt;&lt; Get Type()

**Descrizione:** Ottiene il tipo specifico di post (cartella, dati o report)

**JMP Versione aggiunta:** 17

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );liveconnection = New JMP Live();result = liveconnection << Create Folder(	Parent Folder( "~" ),	Title( "Reports and Posts - Messages" ),	If Exists( "use" ));folder = result << As Scriptable;content = New JMP Live Content(	gbsmoother,	Title( "A Very Important Report" ),	Description( "The Report That Is Published" ),);jmpliveresult = folder << Publish( content );report = Empty();postList = jmpliveresult << As Scriptable;For( i = 1, i <= postlist << Get Number Of Items, i += 1,	posttype = postlist[i] << Get Type;	If( posttype == "Report",		report = postlist[i]	););Write( "\!n\!nID: ", report << Get ID );Write( "\!nType: ", report << Get Type );

```

### Get URL

**Sintassi:** string = jmplivepost &lt;&lt; Get URL()

**Descrizione:** Ottiene l&apos;URL del report di JMP Live, della cartella di JMP Live o del post di JMP Live come stringa.

**JMP Versione aggiunta:** 16

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );liveconnection = New JMP Live();result = liveconnection << Create Folder(	Parent Folder( "~" ),	Title( "Reports and Posts - Messages" ),	If Exists( "use" ));folder = result << As Scriptable;content = New JMP Live Content(	gbsmoother,	Title( "A Very Important Report" ),	Description( "The Report That Is Published" ),);jmpliveresult = folder << Publish( content );report = Empty();postList = jmpliveresult << As Scriptable;For( i = 1, i <= postlist << Get Number Of Items, i += 1,	posttype = postlist[i] << Get Type;	If( posttype == "Report",		report = postlist[i]	););Write( "\!n\!nID: ", report << Get ID );Write( "\!nURL: ", report << Get URL );

```

### Publish

**Sintassi:** jmpliveresultlist = folder &lt;&lt; Publish(JMPLiveContent, &lt;Use Existing Data({{dt_or_name, id | relative_path | JMP Live Data}})&gt;)

**Descrizione:** Pubblica report o dati standalone nella cartella di JMP Live. Restituisce un oggetto elenco di risultati di JMP Live. Sostituisce il messaggio Aggiungi report alla cartella. Non è consentito mescolare report e dati standalone nello stesso comando Pubblica. Quando si pubblicano report, se il report deve utilizzare dati già presenti in JMP Live, è possibile usare il parametro facoltativo Usa dati esistenti per specificarlo. Il parametro Usa dati esistenti non è valido quando si pubblicano dati standalone.

**JMP Versione aggiunta:** 19

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );gblinebar = bc << Run Script( "Graph Builder Line and Bar Charts" );gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );gbline = bc << Run Script( "Graph Builder Line Chart" );gbheat = bc << Run Script( "Graph Builder Heatmap" );liveconnection = New JMP Live();jmpliveresult = liveconnection << Create Folder(	Parent Folder( "~" ),	Title( "Folder - Publish Example" ),	If Exists( "use" ));folder = jmpliveresult << As Scriptable;contentlist = {};Insert Into(	contentlist,	New JMP Live Content( gbsmoother, Title( "SearchString - Graph Builder Smoother Line" ) ));Insert Into(	contentlist,	New JMP Live Content(		gblinebar,		Title( "SearchString - Graph Builder Line and Bar Charts" )	));Insert Into(	contentlist,	New JMP Live Content( gbline, Title( "SearchString - Graph Builder Line Chart" ) ));Insert Into(	contentlist,	New JMP Live Content( gbheat, Title( "SearchString - Graph Builder Heatmap" ) ));jmpliveresult = folder << Publish( contentlist );postlist = jmpliveresult << As Scriptable();For( i = 1, i <= postlist << Get Number Of Items, i += 1,	Write( "\!n\!nPost[", i, "]", "(ID): ", postlist[i] << Get ID );	Write( "\!nPost[", i, "]", "(Type): ", postlist[i] << Get Type );	Write( "\!nPost[", i, "]", "(Title): ", postlist[i] << Get Title ););

```

### Replace

**Sintassi:** liveresult = jmplivefolder &lt;&lt; Replace(Report(id | relative_path | JMP Live Report), JMPLiveContent, &lt;Use Existing Data({{dt_or_name, data_id | data_path | JMP Live Data}})&gt;, &lt;Update Existing Data({{dt_or_name, data_id | data_path | JMP Live Data}})&gt;, &lt;Publish New Data({dt_or_name})&gt; )

**Descrizione:** Sostituisce un report di JMP Live esistente nella cartella con un altro report. Le opzioni dei dati sono necessarie per specificare come gestire i dati forniti con il report. "Usa dati esistenti" indica al server di utilizzare i dati esistenti su JMP Live per i dati specificati. "Aggiorna dati esistenti" indica al server di sostituire i dati sul server con i dati forniti nel comando. "Pubblica nuovi dati" indica al server di pubblicare una nuova tabella di dati e di utilizzarla per il report da sostituire. "Pubblica nuovi dati" è l&apos;opzione di default per tutte le tabelle di dati. È possibile specificare qualsiasi combinazione delle opzioni dei dati. Restituisce un oggetto elenco di risultati di JMP Live.

**JMP Versione aggiunta:** 19

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );gblinebar = bc << Run Script( "Graph Builder Line and Bar Charts" );content1 = New JMP Live Content( gblinebar, Title( "Line Bar" ) );gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );content2 = New JMP Live Content( gbsmoother, Title( "Smoother" ) );liveconnection = New JMP Live();jmpliveresult = liveconnection << Create Folder(	Parent Folder( "~" ),	Title( "Folder - Replace Example" ),	If Exists( "use" ));folder = jmpliveresult << As Scriptable;publishList = (folder << Publish( content1 )) << As Scriptable;publishedReport = publishList[1];replaceResult = folder << Replace( Report( publishedReport ), content2 );resultList = replaceResult << As Scriptable();Write( "\!n\!nUpdated report and data: ", resultList );

```

### Set Description

**Sintassi:** success = jmplivepost &lt;&lt; Set Description("string value")

**Descrizione:** Data una stringa, imposta la descrizione del report di JMP Live, della cartella di JMP Live o del post di JMP Live.  Restituisce vero o falso, rispettivamente, per il successo o l&apos;insuccesso.

**JMP Versione aggiunta:** 16

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );liveconnection = New JMP Live();result = liveconnection << Create Folder(	Parent Folder( "~" ),	Title( "Reports and Posts - Messages" ),	If Exists( "use" ));folder = result << As Scriptable;content = New JMP Live Content(	gbsmoother,	Title( "A Very Important Report" ),	Description( "The Report That Is Published" ),);jmpliveresult = folder << Publish( content );report = Empty();postList = jmpliveresult << As Scriptable;For( i = 1, i <= postlist << Get Number Of Items, i += 1,	posttype = postlist[i] << Get Type;	If( posttype == "Report",		report = postlist[i]	););Write( "\!n\!nID: ", report << Get ID );Write( "\!nDescription: ", report << Get Description );report << Set Description( "A Much Nicer Description" );jmpliveresult = liveconnection << Get Report( report << Get ID );updated = jmpliveresult << As Scriptable;Write( "\!n\!nID: ", report << Get ID );Write( "\!nDecription: ", report << Get Description );

```

### Set Title

**Sintassi:** success = jmplivepost &lt;&lt; Set Title("New Title")

**Descrizione:** Imposta il titolo del report di JMP Live, della cartella di JMP Live o del post di JMP Live. Restituisce vero o falso, rispettivamente, per il successo o l&apos;insuccesso.

**JMP Versione aggiunta:** 16

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );liveconnection = New JMP Live();result = liveconnection << Create Folder(	Parent Folder( "~" ),	Title( "Reports and Posts - Messages" ),	If Exists( "use" ));folder = result << As Scriptable;// Make sure the report we will create does not already exist.liveconnection << Delete Report( "~/Reports and Posts - Messages/A New Title" );content = New JMP Live Content(	gbsmoother,	Title( "A Very Important Report" ),	Description( "The Report That Is Published" ),);jmpliveresult = folder << Publish( content );report = Empty();postList = jmpliveresult << As Scriptable;For( i = 1, i <= postlist << Get Number Of Items, i += 1,	posttype = postlist[i] << Get Type;	If( posttype == "Report",		report = postlist[i]	););Write( "\!n\!nID: ", report << Get ID );Write( "\!nTitle: ", report << Get Title );report << Set Title( "A New Title" );jmpliveresult = liveconnection << Get Report( report << Get ID );updated = jmpliveresult << As Scriptable;Write( "\!n\!nID: ", report << Get ID );Write( "\!nTitle: ", report << Get Title );

```

### Update Data

**Sintassi:** result = jmplivefolder &lt;&lt; Update Data(Data(id | relative_path | JMP Live Data), dataTable | path | JMPLiveContent)

**Descrizione:** Aggiorna la tabella di dati o la mappa di un post di dati nella cartella. Il parametro Dati identifica i dati da aggiornare su JMP Live. Il secondo parametro è il contenuto da utilizzare per l&apos;aggiornamento. Può essere un oggetto tabella di dati, un percorso a una tabella di dati o un oggetto contenuto JMP Live creato da una tabella di dati o mappa.

**JMP Versione aggiunta:** 19

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );gblinebar = bc << Run Script( "Graph Builder Line and Bar Charts" );content = New JMP Live Content( gblinebar, Title( "Line Bar" ) );liveconnection = New JMP Live();jmpliveresult = liveconnection << Create Folder(	Parent Folder( "~" ),	Title( "Folder - Replace Example" ),	If Exists( "use" ));folder = jmpliveresult << As Scriptable;publishList = (folder << Publish( content )) << As Scriptable;publishedData = publishList[2];bc << Add Rows( 1 );bc[N Rows(), 0] = {"KEIRA", 16, "F", 62, 112};bc << Add Rows( 1 );bc[N Rows(), 0] = {"ORLANDO", 17, "M", 66, 164};updateResult = folder << Update Data( Data( publishedData ), bc );updatedData = updateResult << As Scriptable;Write( "\!n\!nUpdated data: ", updatedData );

```


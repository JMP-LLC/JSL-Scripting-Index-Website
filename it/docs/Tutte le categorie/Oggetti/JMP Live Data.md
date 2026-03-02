# JMP Live Data



## Messaggi degli elementi

### Get Description

**Sintassi:** string = jmplivepost &lt;&lt; Get Description()

**Descrizione:** Carica la descrizione del report di JMP Live, della cartella di JMP Live o del post di JMP Live come stringa.

**JMP Versione aggiunta:** 16

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );liveconnection = New JMP Live();result = liveconnection << Create Folder(	Parent Folder( "~" ),	Title( "Reports and Posts - Messages" ),	If Exists( "use" ));folder = result << As Scriptable;content = New JMP Live Content(	gbsmoother,	Title( "A Very Important Report" ),	Description( "The Report That Is Published" ));jmpliveresult = folder << Publish( content );report = Empty();postList = jmpliveresult << As Scriptable;For( i = 1, i <= postlist << Get Number Of Items, i += 1,	posttype = postlist[i] << Get Type;	If( posttype == "Report",		report = postlist[i]	););Write( "\!n\!nID: ", report << Get ID );Write( "\!nDescription: ", report << Get Description );

```

### Get ID

**Sintassi:** string = jmplivepost &lt;&lt; Get ID()

**Descrizione:** Ottiene l’ID per questo report di JMP Live, questa cartella di JMP Live o questo post di JMP Live come stringa.

**JMP Versione aggiunta:** 16

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );liveconnection = New JMP Live();result = liveconnection << Create Folder(	Parent Folder( "~" ),	Title( "Reports and Posts - Messages" ),	If Exists( "use" ));folder = result << As Scriptable;content = New JMP Live Content(	gbsmoother,	Title( "A Very Important Report" ),	Description( "The Report That Is Published" ),);jmpliveresult = folder << Publish( content );report = Empty();postList = jmpliveresult << As Scriptable;For( i = 1, i <= postlist << Get Number Of Items, i += 1,	posttype = postlist[i] << Get Type;	If( posttype == "Report",		report = postlist[i]	););Write( "\!n\!nID: ", report << Get ID );

```

### Get Path

**Sintassi:** string = jmplivepost &lt;&lt; Get Path()

**Descrizione:** Ottiene il percorso di questo report, cartella, post di JMP Live come stringa.

**JMP Versione aggiunta:** 19

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );liveconnection = New JMP Live();result = liveconnection << Create Folder(	Parent Folder( "~" ),	Title( "Reports and Posts - Messages" ),	If Exists( "use" ));folder = result << As Scriptable;content = New JMP Live Content(	gbsmoother,	Title( "A Very Important Report" ),	Description( "The Report That Is Published" ),);jmpliveresult = folder << Publish( content );report = Empty();postList = jmpliveresult << As Scriptable;For( i = 1, i <= postlist << Get Number Of Items, i += 1,	posttype = postlist[i] << Get Type;	If( posttype == "Report",		report = postlist[i]	););Write( "\!n\!nPath: ", report << Get Path );

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


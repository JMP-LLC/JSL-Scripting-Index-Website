# JMP Live Data



## Elementmeldungen

### Get Description

**Syntax:** string = jmplivepost &lt;&lt; Get Description()

**Beschreibung:** Ruft die Beschreibung des JMP Live-Berichts, JMP Live-Ordners oder JMP Live-Beitrags als Zeichenkette ab.

**JMP Version hinzugefügt:** 16

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );liveconnection = New JMP Live();result = liveconnection << Create Folder(	Parent Folder( "~" ),	Title( "Reports and Posts - Messages" ),	If Exists( "use" ));folder = result << As Scriptable;content = New JMP Live Content(	gbsmoother,	Title( "A Very Important Report" ),	Description( "The Report That Is Published" ));jmpliveresult = folder << Publish( content );report = Empty();postList = jmpliveresult << As Scriptable;For( i = 1, i <= postlist << Get Number Of Items, i += 1,	posttype = postlist[i] << Get Type;	If( posttype == "Report",		report = postlist[i]	););Write( "\!n\!nID: ", report << Get ID );Write( "\!nDescription: ", report << Get Description );

```

### Get ID

**Syntax:** string = jmplivepost &lt;&lt; Get ID()

**Beschreibung:** Ruft die ID für diesen JMP Live-Bericht, JMP Live-Ordner oder JMP Live-Beitrag als Zeichenkette ab.

**JMP Version hinzugefügt:** 16

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );liveconnection = New JMP Live();result = liveconnection << Create Folder(	Parent Folder( "~" ),	Title( "Reports and Posts - Messages" ),	If Exists( "use" ));folder = result << As Scriptable;content = New JMP Live Content(	gbsmoother,	Title( "A Very Important Report" ),	Description( "The Report That Is Published" ),);jmpliveresult = folder << Publish( content );report = Empty();postList = jmpliveresult << As Scriptable;For( i = 1, i <= postlist << Get Number Of Items, i += 1,	posttype = postlist[i] << Get Type;	If( posttype == "Report",		report = postlist[i]	););Write( "\!n\!nID: ", report << Get ID );

```

### Get Path

**Syntax:** string = jmplivepost &lt;&lt; Get Path()

**Beschreibung:** Ruft den Pfad dieses JMP Live-Berichts, -Ordners oder -Beitrags als Zeichenkette ab.

**JMP Version hinzugefügt:** 19

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );liveconnection = New JMP Live();result = liveconnection << Create Folder(	Parent Folder( "~" ),	Title( "Reports and Posts - Messages" ),	If Exists( "use" ));folder = result << As Scriptable;content = New JMP Live Content(	gbsmoother,	Title( "A Very Important Report" ),	Description( "The Report That Is Published" ),);jmpliveresult = folder << Publish( content );report = Empty();postList = jmpliveresult << As Scriptable;For( i = 1, i <= postlist << Get Number Of Items, i += 1,	posttype = postlist[i] << Get Type;	If( posttype == "Report",		report = postlist[i]	););Write( "\!n\!nPath: ", report << Get Path );

```

### Get Title

**Syntax:** string = jmplivepost &lt;&lt; Get Title()

**Beschreibung:** Ruft den Titel des JMP Live-Berichts, JMP Live-Ordners oder JMP Live-Beitrags als Zeichenkette ab.

**JMP Version hinzugefügt:** 16

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );liveconnection = New JMP Live();result = liveconnection << Create Folder(	Parent Folder( "~" ),	Title( "Reports and Posts - Messages" ),	If Exists( "use" ));folder = result << As Scriptable;content = New JMP Live Content(	gbsmoother,	Title( "A Very Important Report" ),	Description( "The Report That Is Published" ),);jmpliveresult = folder << Publish( content );report = Empty();postList = jmpliveresult << As Scriptable;For( i = 1, i <= postlist << Get Number Of Items, i += 1,	posttype = postlist[i] << Get Type;	If( posttype == "Report",		report = postlist[i]	););Write( "\!n\!nID: ", report << Get ID );Write( "\!nTitle: ", report << Get Title );

```

### Get Type

**Syntax:** string = jmplivepost &lt;&lt; Get Type()

**Beschreibung:** Spezifischen Typ des Beitrags abrufen (Ordner, Daten oder Bericht)

**JMP Version hinzugefügt:** 17

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );liveconnection = New JMP Live();result = liveconnection << Create Folder(	Parent Folder( "~" ),	Title( "Reports and Posts - Messages" ),	If Exists( "use" ));folder = result << As Scriptable;content = New JMP Live Content(	gbsmoother,	Title( "A Very Important Report" ),	Description( "The Report That Is Published" ),);jmpliveresult = folder << Publish( content );report = Empty();postList = jmpliveresult << As Scriptable;For( i = 1, i <= postlist << Get Number Of Items, i += 1,	posttype = postlist[i] << Get Type;	If( posttype == "Report",		report = postlist[i]	););Write( "\!n\!nID: ", report << Get ID );Write( "\!nType: ", report << Get Type );

```

### Get URL

**Syntax:** string = jmplivepost &lt;&lt; Get URL()

**Beschreibung:** Ruft die URL für diesen JMP Live-Bericht, JMP Live-Ordner oder JMP Live-Beitrag als Zeichenkette ab.

**JMP Version hinzugefügt:** 16

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );liveconnection = New JMP Live();result = liveconnection << Create Folder(	Parent Folder( "~" ),	Title( "Reports and Posts - Messages" ),	If Exists( "use" ));folder = result << As Scriptable;content = New JMP Live Content(	gbsmoother,	Title( "A Very Important Report" ),	Description( "The Report That Is Published" ),);jmpliveresult = folder << Publish( content );report = Empty();postList = jmpliveresult << As Scriptable;For( i = 1, i <= postlist << Get Number Of Items, i += 1,	posttype = postlist[i] << Get Type;	If( posttype == "Report",		report = postlist[i]	););Write( "\!n\!nID: ", report << Get ID );Write( "\!nURL: ", report << Get URL );

```

### Set Description

**Syntax:** success = jmplivepost &lt;&lt; Set Description("string value")

**Beschreibung:** Legt bei vorgegebener Zeichenkette die Beschreibung des JMP Live-Berichts, JMP Live-Ordners oder JMP Live-Beitrags fest. Gibt wahr oder falsch für Erfolg oder Fehler zurück.

**JMP Version hinzugefügt:** 16

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );liveconnection = New JMP Live();result = liveconnection << Create Folder(	Parent Folder( "~" ),	Title( "Reports and Posts - Messages" ),	If Exists( "use" ));folder = result << As Scriptable;content = New JMP Live Content(	gbsmoother,	Title( "A Very Important Report" ),	Description( "The Report That Is Published" ),);jmpliveresult = folder << Publish( content );report = Empty();postList = jmpliveresult << As Scriptable;For( i = 1, i <= postlist << Get Number Of Items, i += 1,	posttype = postlist[i] << Get Type;	If( posttype == "Report",		report = postlist[i]	););Write( "\!n\!nID: ", report << Get ID );Write( "\!nDescription: ", report << Get Description );report << Set Description( "A Much Nicer Description" );jmpliveresult = liveconnection << Get Report( report << Get ID );updated = jmpliveresult << As Scriptable;Write( "\!n\!nID: ", report << Get ID );Write( "\!nDecription: ", report << Get Description );

```

### Set Title

**Syntax:** success = jmplivepost &lt;&lt; Set Title("New Title")

**Beschreibung:** Legt den Titel des JMP Live-Berichts, JMP Live-Ordners oder JMP Live-Beitrags fest. Gibt wahr oder falsch für Erfolg oder Fehler zurück.

**JMP Version hinzugefügt:** 16

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );liveconnection = New JMP Live();result = liveconnection << Create Folder(	Parent Folder( "~" ),	Title( "Reports and Posts - Messages" ),	If Exists( "use" ));folder = result << As Scriptable;// Make sure the report we will create does not already exist.liveconnection << Delete Report( "~/Reports and Posts - Messages/A New Title" );content = New JMP Live Content(	gbsmoother,	Title( "A Very Important Report" ),	Description( "The Report That Is Published" ),);jmpliveresult = folder << Publish( content );report = Empty();postList = jmpliveresult << As Scriptable;For( i = 1, i <= postlist << Get Number Of Items, i += 1,	posttype = postlist[i] << Get Type;	If( posttype == "Report",		report = postlist[i]	););Write( "\!n\!nID: ", report << Get ID );Write( "\!nTitle: ", report << Get Title );report << Set Title( "A New Title" );jmpliveresult = liveconnection << Get Report( report << Get ID );updated = jmpliveresult << As Scriptable;Write( "\!n\!nID: ", report << Get ID );Write( "\!nTitle: ", report << Get Title );

```


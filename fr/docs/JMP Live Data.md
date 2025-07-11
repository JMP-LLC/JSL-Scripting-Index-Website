# JMP Live Data



### Get Description

**Syntaxe :** string = jmplivepost << Get Description()

**Description :** Récupère la description du Rapport JMP Live, du Dossier JMP Live ou du Post JMP Live en tant que chaîne.

**JMP Version ajoutée :** 16

```js

Names Default To Here( 1 );
bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );

liveconnection = New JMP Live();
result = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Reports and Posts - Messages" ),
	If Exists( "use" )
);
folder = result << As Scriptable;

content = New JMP Live Content(
	gbsmoother,
	Title( "A Very Important Report" ),
	Description( "The Report That Is Published" )
);
jmpliveresult = folder << Publish( content );

report = Empty();
postList = jmpliveresult << As Scriptable;
For( i = 1, i <= postlist << Get Number Of Items, i += 1,
	posttype = postlist[i] << Get Type;
	If( posttype == "Report",
		report = postlist[i]
	);
);
Write( "\!n\!nID: ", report << Get ID );
Write( "\!nDescription: ", report << Get Description );

```

### Get ID

**Syntaxe :** string = jmplivepost << Get ID()

**Description :** Récupère l&apos;ID du Rapport JMP Live, du Dossier JMP Live ou du Post JMP Live en tant que chaîne.

**JMP Version ajoutée :** 16

```js

Names Default To Here( 1 );
bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );

liveconnection = New JMP Live();
result = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Reports and Posts - Messages" ),
	If Exists( "use" )
);
folder = result << As Scriptable;

content = New JMP Live Content(
	gbsmoother,
	Title( "A Very Important Report" ),
	Description( "The Report That Is Published" ),

);
jmpliveresult = folder << Publish( content );

report = Empty();
postList = jmpliveresult << As Scriptable;
For( i = 1, i <= postlist << Get Number Of Items, i += 1,
	posttype = postlist[i] << Get Type;
	If( posttype == "Report",
		report = postlist[i]
	);
);

Write( "\!n\!nID: ", report << Get ID );

```

### Get Path

**Syntaxe :** string = jmplivepost << Get Path()

**Description :** Récupère le chemin d&apos;accès à ce rapport, dossier ou post JMP Live en tant que chaîne.

**JMP Version ajoutée :** 19

```js

Names Default To Here( 1 );
bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );

liveconnection = New JMP Live();
result = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Reports and Posts - Messages" ),
	If Exists( "use" )
);
folder = result << As Scriptable;

content = New JMP Live Content(
	gbsmoother,
	Title( "A Very Important Report" ),
	Description( "The Report That Is Published" ),

);
jmpliveresult = folder << Publish( content );

report = Empty();
postList = jmpliveresult << As Scriptable;
For( i = 1, i <= postlist << Get Number Of Items, i += 1,
	posttype = postlist[i] << Get Type;
	If( posttype == "Report",
		report = postlist[i]
	);
);

Write( "\!n\!nPath: ", report << Get Path );

```

### Get Title

**Syntaxe :** string = jmplivepost << Get Title()

**Description :** Récupère le titre du Rapport JMP Live, du Dossier JMP Live ou du Post JMP Live en tant que chaîne.

**JMP Version ajoutée :** 16

```js

Names Default To Here( 1 );
bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );

liveconnection = New JMP Live();
result = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Reports and Posts - Messages" ),
	If Exists( "use" )
);
folder = result << As Scriptable;

content = New JMP Live Content(
	gbsmoother,
	Title( "A Very Important Report" ),
	Description( "The Report That Is Published" ),

);
jmpliveresult = folder << Publish( content );

report = Empty();
postList = jmpliveresult << As Scriptable;
For( i = 1, i <= postlist << Get Number Of Items, i += 1,
	posttype = postlist[i] << Get Type;
	If( posttype == "Report",
		report = postlist[i]
	);
);
Write( "\!n\!nID: ", report << Get ID );
Write( "\!nTitle: ", report << Get Title );

```

### Get Type

**Syntaxe :** string = jmplivepost << Get Type()

**Description :** Obtenir le type spécifique de post (dossier, données ou rapport)

**JMP Version ajoutée :** 17

```js

Names Default To Here( 1 );
bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );

liveconnection = New JMP Live();
result = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Reports and Posts - Messages" ),
	If Exists( "use" )
);
folder = result << As Scriptable;

content = New JMP Live Content(
	gbsmoother,
	Title( "A Very Important Report" ),
	Description( "The Report That Is Published" ),

);
jmpliveresult = folder << Publish( content );

report = Empty();
postList = jmpliveresult << As Scriptable;
For( i = 1, i <= postlist << Get Number Of Items, i += 1,
	posttype = postlist[i] << Get Type;
	If( posttype == "Report",
		report = postlist[i]
	);
);

Write( "\!n\!nID: ", report << Get ID );
Write( "\!nType: ", report << Get Type );

```

### Get URL

**Syntaxe :** string = jmplivepost << Get URL()

**Description :** Récupère l&apos;URL du Rapport JMP Live, du Dossier JMP Live ou du Post JMP Live en tant que chaîne.

**JMP Version ajoutée :** 16

```js

Names Default To Here( 1 );
bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );

liveconnection = New JMP Live();
result = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Reports and Posts - Messages" ),
	If Exists( "use" )
);
folder = result << As Scriptable;

content = New JMP Live Content(
	gbsmoother,
	Title( "A Very Important Report" ),
	Description( "The Report That Is Published" ),

);
jmpliveresult = folder << Publish( content );

report = Empty();
postList = jmpliveresult << As Scriptable;
For( i = 1, i <= postlist << Get Number Of Items, i += 1,
	posttype = postlist[i] << Get Type;
	If( posttype == "Report",
		report = postlist[i]
	);
);
Write( "\!n\!nID: ", report << Get ID );
Write( "\!nURL: ", report << Get URL );

```

### Set Description

**Syntaxe :** success = jmplivepost << Set Description("string value")

**Description :** Avec une chaîne donnée, définit la description du Rapport JMP Live, du Dossier JMP Live ou du Post JMP Live. Renvoie vrai ou faux en cas de réussite ou d&apos;échec.

**JMP Version ajoutée :** 16

```js

Names Default To Here( 1 );
bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );

liveconnection = New JMP Live();
result = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Reports and Posts - Messages" ),
	If Exists( "use" )
);
folder = result << As Scriptable;

content = New JMP Live Content(
	gbsmoother,
	Title( "A Very Important Report" ),
	Description( "The Report That Is Published" ),

);
jmpliveresult = folder << Publish( content );

report = Empty();
postList = jmpliveresult << As Scriptable;
For( i = 1, i <= postlist << Get Number Of Items, i += 1,
	posttype = postlist[i] << Get Type;
	If( posttype == "Report",
		report = postlist[i]
	);
);
Write( "\!n\!nID: ", report << Get ID );
Write( "\!nDescription: ", report << Get Description );

report << Set Description( "A Much Nicer Description" );
jmpliveresult = liveconnection << Get Report( report << Get ID );
updated = jmpliveresult << As Scriptable;

Write( "\!n\!nID: ", report << Get ID );
Write( "\!nDecription: ", report << Get Description );

```

### Set Title

**Syntaxe :** success = jmplivepost << Set Title("New Title")

**Description :** Définit le titre du Rapport JMP Live, du Dossier JMP Live ou du Post JMP Live. Renvoie vrai ou faux en cas de réussite ou d&apos;échec.

**JMP Version ajoutée :** 16

```js

Names Default To Here( 1 );
bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );

liveconnection = New JMP Live();
result = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Reports and Posts - Messages" ),
	If Exists( "use" )
);
folder = result << As Scriptable;
// Make sure the report we will create does not already exist.
liveconnection << Delete Report( "~/Reports and Posts - Messages/A New Title" );

content = New JMP Live Content(
	gbsmoother,
	Title( "A Very Important Report" ),
	Description( "The Report That Is Published" ),

);
jmpliveresult = folder << Publish( content );

report = Empty();
postList = jmpliveresult << As Scriptable;
For( i = 1, i <= postlist << Get Number Of Items, i += 1,
	posttype = postlist[i] << Get Type;
	If( posttype == "Report",
		report = postlist[i]
	);
);
Write( "\!n\!nID: ", report << Get ID );
Write( "\!nTitle: ", report << Get Title );

report << Set Title( "A New Title" );
jmpliveresult = liveconnection << Get Report( report << Get ID );
updated = jmpliveresult << As Scriptable;

Write( "\!n\!nID: ", report << Get ID );
Write( "\!nTitle: ", report << Get Title );

```


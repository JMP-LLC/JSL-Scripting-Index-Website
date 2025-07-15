# JMP Live Post



## Mensajes del elemento

### Get Description

**Sintaxis:** string = jmplivepost &lt;&lt; Get Description()

**Descripción:** Obtiene la descripción del informe de JMP Live, la carpeta de JMP Live o la publicación de JMP Live como cadena de caracteres.

**JMP Versión agregada:** 16

```jsl

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

**Sintaxis:** string = jmplivepost &lt;&lt; Get ID()

**Descripción:** Obtiene el ID de este informe de JMP Live, carpeta de JMP Live o publicación de JMP Live como cadena de caracteres.

**JMP Versión agregada:** 16

```jsl

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

**Sintaxis:** string = jmplivepost &lt;&lt; Get Path()

**Descripción:** Obtiene la ruta de este informe, carpeta o publicación de JMP Live en forma de cadena.

**JMP Versión agregada:** 19

```jsl

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

**Sintaxis:** string = jmplivepost &lt;&lt; Get Title()

**Descripción:** Obtiene el título del informe de JMP Live, la carpeta de JMP Live o la publicación de JMP Live como cadena de caracteres.

**JMP Versión agregada:** 16

```jsl

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

**Sintaxis:** string = jmplivepost &lt;&lt; Get Type()

**Descripción:** Obtiene el tipo de publicación específica (carpeta, datos o informe).

**JMP Versión agregada:** 17

```jsl

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

**Sintaxis:** string = jmplivepost &lt;&lt; Get URL()

**Descripción:** Obtiene la URL de este informe de JMP Live, carpeta de JMP Live o publicación de JMP Live como cadena de caracteres.

**JMP Versión agregada:** 16

```jsl

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

**Sintaxis:** success = jmplivepost &lt;&lt; Set Description("string value")

**Descripción:** Dada una cadena de caracteres, establece la descripción del informe de JMP Live, la carpeta de JMP Live o la publicación de JMP Live. Devuelve verdadero o falso si la operación se realiza correctamente o falla.

**JMP Versión agregada:** 16

```jsl

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

**Sintaxis:** success = jmplivepost &lt;&lt; Set Title("New Title")

**Descripción:** Establece el título del informe de JMP Live, la carpeta de JMP Live o la publicación de JMP Live. Devuelve verdadero o falso si la operación se realiza correctamente o falla.

**JMP Versión agregada:** 16

```jsl

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


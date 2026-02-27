# JMP Live Folder



## Mensajes del elemento

### Add Reports To Folder

**Sintaxis:** jmpliveresultlist = folder &lt;&lt; Add Reports To Folder(JMPLiveContent, &lt;Use Existing Data({{dt_or_name, id | relative_path | JMP Live Data}})&gt;)

**Descripción:** El mensaje Agregar informes a la carpeta está en desuso. Utilice Publicar en su lugar.

**JMP Versión agregada:** 16

### Create Folder

**Sintaxis:** liveresult = folder &lt;&lt; Create Folder(Title("Title"), &lt;Description("Description")&gt;, &lt;If Exists("use" | "fail" | "default")&gt;)

**Descripción:** Crea una nueva subcarpeta de esta carpeta en JMP Live. Devuelve un resultado de JMP Live, que se puede utilizar para obtener el objeto Carpeta de JMP Live para la nueva carpeta. Título es obligatorio. Descripción es opcional. "Si existe" indica a JMP Live qué hacer si la carpeta especificada ya existe: "Usar" significa que se devuelve simplemente la carpeta existente, "Error" significa que se lanza un error, y "Predeterminado" significa que se crea una nueva carpeta y se le añade "(2)", "(3)", etc. al nombre para que sea único.

**JMP Versión agregada:** 19

```jsl

liveconnection = New JMP Live();

existingFolder = (liveconnection << Get Folder( "~" )) << As Scriptable;

newFolder = (existingFolder << Create Folder(
	Title( "Important Reports" ),
	If Exists( "default" )
)) << As Scriptable;

Write( "New folder path: ", newFolder << Get Path );

```

### Get Children

**Sintaxis:** jmpliveresultlist = folder &lt;&lt; Get Children(&lt;PAGESIZE(10)&gt;)

**Descripción:** Recupera las publicaciones secundarias incluidas en la carpeta como una lista de resultados de JMP Live. Se puede utilizar un argumento pagesize opcional para controlar el número de mensajes devueltos.

**JMP Versión agregada:** 16

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
gblinebar = bc << Run Script( "Graph Builder Line and Bar Charts" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );
gbline = bc << Run Script( "Graph Builder Line Chart" );
gbheat = bc << Run Script( "Graph Builder Heatmap" );

liveconnection = New JMP Live();

jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Folder - Get Children Example" )
);
folder = jmpliveresult << As Scriptable;

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
jmpliveresult = folder << Publish( contentlist );

jmpliveresult = folder << Get Children;
children = jmpliveresult << As Scriptable;
For( i = 1, i <= children << Get Number Of Items, i += 1,
	Write( "\!n\!nChild ID: ", children[i] << Get ID );
	Write( "\!nChild Type: ", children[i] << Get Type );
);

```

### Get Data

**Sintaxis:** result = jmplivefolder &lt;&lt; Get Data(id | relative_path)

**Descripción:** Recupera una publicación de datos de la carpeta como objeto Resultado de JMP Live, que se puede utilizar para obtener el objeto Datos de JMP Live para esa publicación.

**JMP Versión agregada:** 19

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );

liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Reports and Posts - Messages" ),
	If Exists( "use" )
);
folder = jmpliveresult << As Scriptable;

content = New JMP Live Content(
	gbsmoother,
	Title( "A Very Important Report" ),
	Description( "The Report That Is Published" ),

);
jmpliveresult = folder << Publish( content );

post = (folder << Get Data( "Big Class" )) << As Scriptable;

Write( "\!n\!nTitle: ", post << Get Title );

```

### Get Description

**Sintaxis:** string = jmplivepost &lt;&lt; Get Description()

**Descripción:** Obtiene la descripción del informe de JMP Live, la carpeta de JMP Live o la publicación de JMP Live como cadena de caracteres.

**JMP Versión agregada:** 16

```jsl

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

### Get Folder

**Sintaxis:** result = jmplivefolder &lt;&lt; Get Folder(id | relative_path)

**Descripción:** Recupera una subcarpeta de la carpeta como objeto Resultado de JMP Live, que se puede utilizar para obtener el objeto Carpeta de JMP Live correspondiente a esa subcarpeta.

**JMP Versión agregada:** 19

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );

liveconnection = New JMP Live();
personalFolder = (liveConnection << Get Folder( "~" )) << As Scriptable;
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( personalFolder ),
	Title( "Reports and Posts - Messages" ),
	If Exists( "use" )
);
subfolder = jmpliveresult << As Scriptable;

content = New JMP Live Content(
	gbsmoother,
	Title( "A Very Important Report" ),
	Description( "The Report That Is Published" ),

);
jmpliveresult = subfolder << Publish( content );

folder = (personalFolder << Get Folder( "Reports and Posts - Messages" )) << As Scriptable;

Write( "\!n\!nTitle: ", folder << Get Title );

```

### Get ID

**Sintaxis:** string = jmplivepost &lt;&lt; Get ID()

**Descripción:** Obtiene el ID de este informe de JMP Live, carpeta de JMP Live o publicación de JMP Live como cadena de caracteres.

**JMP Versión agregada:** 16

```jsl

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

### Get Number Of Items

**Sintaxis:** value = jmplivefolder &lt;&lt; Get Number Of Items()

**Descripción:** Obtiene el número de elementos que hay en la carpeta.

**JMP Versión agregada:** 16

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
gblinebar = bc << Run Script( "Graph Builder Line and Bar Charts" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );
gbline = bc << Run Script( "Graph Builder Line Chart" );
gbheat = bc << Run Script( "Graph Builder Heatmap" );

liveconnection = New JMP Live();

jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Folder - Get Children Count Example" )
);
folder = jmpliveresult << As Scriptable;

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
jmpliveresult = folder << Publish( contentlist );

count = folder << Get Number of Items;
Write( "\!n\!nChild Count: ", count );

```

### Get Path

**Sintaxis:** string = jmplivepost &lt;&lt; Get Path()

**Descripción:** Obtiene la ruta de este informe, carpeta o publicación de JMP Live en forma de cadena.

**JMP Versión agregada:** 19

```jsl

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

### Get Post

**Sintaxis:** result = jmplivefolder &lt;&lt; Get Post(id | relative_path)

**Descripción:** Recupera una publicación de la carpeta como objeto Resultado de JMP Live, que se puede utilizar para obtener el objeto Publicación de JMP Live para esa publicación.

**JMP Versión agregada:** 19

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );

liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Reports and Posts - Messages" ),
	If Exists( "use" )
);
folder = jmpliveresult << As Scriptable;

content = New JMP Live Content(
	gbsmoother,
	Title( "A Very Important Report" ),
	Description( "The Report That Is Published" ),

);
jmpliveresult = folder << Publish( content );
post = (folder << Get Post( "A Very Important Report" )) << As Scriptable;

Write( "\!n\!nTitle: ", post << Get Title );

```

### Get Report

**Sintaxis:** result = jmplivepost &lt;&lt; Get Report(id | relative_path)

**Descripción:** Recupera una publicación de informe de la carpeta como objeto Resultado de JMP Live, que se puede utilizar para obtener el objeto Informe de JMP Live correspondiente a ese informe.

**JMP Versión agregada:** 19

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );

liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Reports and Posts - Messages" ),
	If Exists( "use" )
);
folder = jmpliveresult << As Scriptable;

content = New JMP Live Content(
	gbsmoother,
	Title( "A Very Important Report" ),
	Description( "The Report That Is Published" ),

);
jmpliveresult = folder << Publish( content );

post = (folder << Get Report( "A Very Important Report" )) << As Scriptable;

Write( "\!n\!nTitle: ", post << Get Title );

```

### Get Title

**Sintaxis:** string = jmplivepost &lt;&lt; Get Title()

**Descripción:** Obtiene el título del informe de JMP Live, la carpeta de JMP Live o la publicación de JMP Live como cadena de caracteres.

**JMP Versión agregada:** 16

```jsl

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

### Publish

**Sintaxis:** jmpliveresultlist = folder &lt;&lt; Publish(JMPLiveContent, &lt;Use Existing Data({{dt_or_name, id | relative_path | JMP Live Data}})&gt;)

**Descripción:** Publica informes o datos independientes en la carpeta de JMP Live. Devuelve un objeto Lista de resultados de JMP Live. Reemplaza el mensaje Agregar informes a la carpeta. No está permitido mezclar informes y datos independientes en el mismo comando Publicar. Al publicar informes, si el informe debe utilizar datos que ya están en JMP Live, se puede utilizar el parámetro opcional Utilizar datos existentes para especificarlo. El parámetro Utilizar datos existentes no es válido al publicar datos independientes.

**JMP Versión agregada:** 19

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
gblinebar = bc << Run Script( "Graph Builder Line and Bar Charts" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );
gbline = bc << Run Script( "Graph Builder Line Chart" );
gbheat = bc << Run Script( "Graph Builder Heatmap" );

liveconnection = New JMP Live();

jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Folder - Publish Example" ),
	If Exists( "use" )
);
folder = jmpliveresult << As Scriptable;

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
jmpliveresult = folder << Publish( contentlist );
postlist = jmpliveresult << As Scriptable();
For( i = 1, i <= postlist << Get Number Of Items, i += 1,
	Write( "\!n\!nPost[", i, "]", "(ID): ", postlist[i] << Get ID );
	Write( "\!nPost[", i, "]", "(Type): ", postlist[i] << Get Type );
	Write( "\!nPost[", i, "]", "(Title): ", postlist[i] << Get Title );
);

```

### Replace

**Sintaxis:** liveresult = jmplivefolder &lt;&lt; Replace(Report(id | relative_path | JMP Live Report), JMPLiveContent, &lt;Use Existing Data({{dt_or_name, data_id | data_path | JMP Live Data}})&gt;, &lt;Update Existing Data({{dt_or_name, data_id | data_path | JMP Live Data}})&gt;, &lt;Publish New Data({dt_or_name})&gt; )

**Descripción:** Sustituye un informe existente de JMP Live en la carpeta por otro informe. Las opciones de datos son necesarias para especificar cómo se gestionan los datos que se proporcionan con el informe. "Utilizar datos existentes" indica al servidor que debe utilizar los datos presentes en JMP Live para los datos especificados. "Actualizar datos existentes" indica al servidor que debe sustituir los datos del servidor por los datos proporcionados en el comando. "Publicar datos nuevos" indica al servidor que debe publicar una nueva tabla de datos y utilizarla para el informe que se va a sustituir. "Publicar nuevos datos" es la opción predeterminada para los datos de todas las tablas de datos. Se puede especificar cualquier combinación de opciones de datos. Devuelve un objeto Lista de resultados de JMP Live.

**JMP Versión agregada:** 19

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
gblinebar = bc << Run Script( "Graph Builder Line and Bar Charts" );
content1 = New JMP Live Content( gblinebar, Title( "Line Bar" ) );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );
content2 = New JMP Live Content( gbsmoother, Title( "Smoother" ) );

liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Folder - Replace Example" ),
	If Exists( "use" )
);
folder = jmpliveresult << As Scriptable;
publishList = (folder << Publish( content1 )) << As Scriptable;
publishedReport = publishList[1];

replaceResult = folder << Replace( Report( publishedReport ), content2 );

resultList = replaceResult << As Scriptable();
Write( "\!n\!nUpdated report and data: ", resultList );

```

### Set Description

**Sintaxis:** success = jmplivepost &lt;&lt; Set Description("string value")

**Descripción:** Dada una cadena de caracteres, establece la descripción del informe de JMP Live, la carpeta de JMP Live o la publicación de JMP Live. Devuelve verdadero o falso si la operación se realiza correctamente o falla.

**JMP Versión agregada:** 16

```jsl

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

### Update Data

**Sintaxis:** result = jmplivefolder &lt;&lt; Update Data(Data(id | relative_path | JMP Live Data), dataTable | path | JMPLiveContent)

**Descripción:** Actualiza la tabla de datos o el mapa de una publicación de datos en la carpeta. El parámetro Datos identifica los datos en JMP Live que se van a actualizar. El segundo parámetro es el contenido que se utilizará para la actualización. Puede ser un objeto de tabla de datos, una ruta a una tabla de datos o un objeto de contenido de JMP Live creado a partir de una tabla de datos o un mapa.

**JMP Versión agregada:** 19

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
gblinebar = bc << Run Script( "Graph Builder Line and Bar Charts" );
content = New JMP Live Content( gblinebar, Title( "Line Bar" ) );

liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Folder - Replace Example" ),
	If Exists( "use" )
);
folder = jmpliveresult << As Scriptable;
publishList = (folder << Publish( content )) << As Scriptable;
publishedData = publishList[2];

bc << Add Rows( 1 );
bc[N Rows(), 0] = {"KEIRA", 16, "F", 62, 112};
bc << Add Rows( 1 );
bc[N Rows(), 0] = {"ORLANDO", 17, "M", 66, 164};

updateResult = folder << Update Data( Data( publishedData ), bc );

updatedData = updateResult << As Scriptable;
Write( "\!n\!nUpdated data: ", updatedData );

```


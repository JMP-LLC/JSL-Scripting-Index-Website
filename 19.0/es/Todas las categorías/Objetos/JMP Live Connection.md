# JMP Live Connection



## Mensajes del elemento

### Create Folder

**Sintaxis:** liveresult = liveconnection &lt;&lt; Create Folder(Title(folder_title), Parent Folder(id | path | JMP Live Folder), &lt;Description(folder_description)&gt;, &lt;If Exists("use" | "fail" | "default")&gt;)

**Descripción:** Crea una nueva carpeta en JMP Live. Devuelve un resultado de JMP Live, que se puede utilizar para obtener el objeto Carpeta de JMP Live para la nueva carpeta. Título y Carpeta principal son parámetros obligatorios. Carpeta principal se puede abreviar como Principal o Carpeta. Descripción es opcional. "Si existe" indica a JMP Live qué hacer si la carpeta especificada ya existe: "Usar" significa que se devuelve simplemente la carpeta existente, "Error" significa que se lanza un error, y "Predeterminado" significa que se crea una nueva carpeta y se le añade "(2)", "(3)", etc. al nombre para que sea único.

**JMP Versión agregada:** 16

#### Ejemplo 1

```jsl

liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Create Folder Example" ),
	Description( "Folder created in the scripting index example script." )
);
folder = jmpliveresult << As Scriptable;
id = folder << Get ID;
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( id ),
	Title( "Folder created using ID for parent" )
);
subfolder = jmpliveresult << As Scriptable;
Show( subfolder );

```

#### Ejemplo 2

```jsl

liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Create Folder Example" ),
	If Exists( "use" ),
	Description( "Folder created in the scripting index example script." )
);
folder = jmpliveresult << As Scriptable;
Write( "\!n\!nNew folder ID: ", folder << Get ID, "  Path: ", folder << Get Path );

```

#### Ejemplo 3

```jsl

liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Create Nested Subfolder Example" ),
	If Exists( "use" ),
	Description(
		"Folder created in the scripting index example script to serve as a top level folder."
	),

);
folder = jmpliveresult << As Scriptable;
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( folder ),
	Title( "Nested Subfolder Number 1" ),
	Description( "The First Subfolder." )
);
subFolder1 = jmpliveresult << As Scriptable;
Show( subFolder1 );
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( folder ),
	Title( "Nested Subfolder Number 2" ),
	Description( "The Second Subfolder." )
);
subFolder2 = jmpliveresult << As Scriptable;
Show( subFolder2 );

```

### Delete Data

**Sintaxis:** jmpliveresult = liveconnection &lt;&lt; Delete Data(id | path | JMP Live Data)

**Descripción:** Elimina la publicación de datos especificada. Devuelve si la acción se ha realizado correctamente (1) o no (0).

**JMP Versión agregada:** 17

```jsl

liveconnection = New JMP Live();
// Create a folder to publish a report and data to
folder = (liveconnection << Create Folder(
	Title( "Delete Data Example" ),
	Parent( "~" ),
	If Exists( "use" )
)) << As Scriptable;

// Publish a report and data to the folder
bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );
content = New JMP Live Content( gbsmoother, Title( "Smoother" ) );
publishedContent = (folder << Publish( content )) << As Scriptable;
report = publishedContent[1];
data = publishedContent[2];

// Delete the report by object
result = liveconnection << Delete Report( report );
If( result == 1,
	Write( "\!nReport was successfully deleted" ),
	Write( "\!nProblem deleting report" )
);

// Delete the data by path
result = liveconnection << Delete Data( "~/Delete Data Example/Big Class" );
If( result == 1,
	Write( "\!nData was successfully deleted" ),
	Write( "\!nProblem deleting data" )
);

// Delete the folder by ID
result = liveconnection << Delete Folder( folder << Get ID );
If( result == 1,
	Write( "\!nFolder was successfully deleted" ),
	Write( "\!nProblem deleting folder" )
);

```

### Delete Folder

**Sintaxis:** jmpliveresult = liveconnection &lt;&lt; Delete Folder(id | path | JMP Live Folder)

**Descripción:** Elimina la carpeta especificada. Devuelve si la acción se ha realizado correctamente (1) o no (0).

**JMP Versión agregada:** 16

```jsl

liveconnection = New JMP Live();
// Create a folder to publish a report and data to
folder = (liveconnection << Create Folder(
	Title( "Delete Folder Example" ),
	Parent( "~" ),
	If Exists( "use" )
)) << As Scriptable;

// Publish a report and data to the folder
bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );
content = New JMP Live Content( gbsmoother, Title( "Smoother" ) );
publishedContent = (folder << Publish( content )) << As Scriptable;
report = publishedContent[1];
data = publishedContent[2];

// Delete the report by ID
result = liveconnection << Delete Report( report << Get ID );
If( result == 1,
	Write( "\!nReport was successfully deleted" ),
	Write( "\!nProblem deleting report" )
);

// Delete the data using the JMP Live Data object
result = liveconnection << Delete Data( data );
If( result == 1,
	Write( "\!nData was successfully deleted" ),
	Write( "\!nProblem deleting data" )
);

// Delete the folder by path
result = liveconnection << Delete Folder( "~/Delete Folder Example" );
If( result == 1,
	Write( "\!nFolder was successfully deleted" ),
	Write( "\!nProblem deleting folder" )
);

```

### Delete Report

**Sintaxis:** jmpliveresult = liveconnection &lt;&lt; Delete Report(id | path | JMP Live Report)

**Descripción:** Elimina el informe especificado. Devuelve si la acción se ha realizado correctamente (1) o no (0).

**JMP Versión agregada:** 16

```jsl

liveconnection = New JMP Live();
// Create a folder to publish a report and data to
folder = (liveconnection << Create Folder(
	Title( "Delete Report Example" ),
	Parent( "~" ),
	If Exists( "use" )
)) << As Scriptable;

// Publish a report and data to the folder
bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );
content = New JMP Live Content( gbsmoother, Title( "Smoother" ) );
publishedContent = (folder << Publish( content )) << As Scriptable;
report = publishedContent[1];
data = publishedContent[2];

// Delete the report by path
result = liveconnection << Delete Report( "~/Delete Report Example/Smoother" );
If( result == 1,
	Write( "\!nReport was successfully deleted" ),
	Write( "\!nProblem deleting report" )
);

// Delete the data by ID
result = liveconnection << Delete Data( data << Get ID );
If( result == 1,
	Write( "\!nData was successfully deleted" ),
	Write( "\!nProblem deleting data" )
);

// Delete the folder using the object
result = liveconnection << Delete Folder( folder );
If( result == 1,
	Write( "\!nFolder was successfully deleted" ),
	Write( "\!nProblem deleting folder" )
);

```

### Find Folders

**Sintaxis:** jmpliveresult = liveconnection &lt;&lt; Find Folders(&lt;Search(search_string)&gt;, &lt;Publisher(user_name)&gt;, &lt;PageSize(val)&gt;)

**Descripción:** Busca carpetas según una cadena de caracteres de búsqueda, editor o ambas cosas. Devuelve una lista de resultados de JMP Live que se puede utilizar para hacer referencia a carpetas individuales. Las siguientes llamadas a Next() en esta lista devuelven más carpetas. PageSize especifica cuántas carpetas se deben devolver y vale 10 de forma predetermianda. Todos los parámetros de búsqueda son opcionales y, si no se proporciona ninguno, se devuelven todas las carpetas.

**JMP Versión agregada:** 16

#### Ejemplo 1

```jsl

liveconnection = New JMP Live();
user = liveconnection << Get Username;

jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Find Folders Example 1" )
);
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Find Folders Example 2" )
);

jmpliveresult = liveconnection << Find Folders( Publisher( user ), PageSize( 5 ) );
folderlist = jmpliveresult << As Scriptable();
Write( "\!nFind Folders(Count): ", folderlist << Get Number Of Items );
For( i = 1, i <= folderlist << Get Number Of Items, i += 1,
	Write( "\!nFolder[", i, "]", "(ID): ", folderlist[i] << Get ID );
	Write( "\!nFolder[", i, "]", "(Title): ", folderlist[i] << Get Title );
);

```

#### Ejemplo 2

```jsl

liveconnection = New JMP Live();

jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Find Folders Example - Search String 1" )
);
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Find Folders Example X" )
);
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Find Folders Example - Search String 2" )
);
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Find Folders Example Y" )
);

jmpliveresult = liveconnection << Find Folders( Search( "Search String" ), PageSize( 5 ) );
folderlist = jmpliveresult << As Scriptable();
Write( "\!nFind Folders(Count): ", folderlist << Get Number Of Items );
For( i = 1, i <= folderlist << Get Number Of Items, i += 1,
	Write( "\!nFolder[", i, "]", "(ID): ", folderlist[i] << Get ID );
	Write( "\!nFolder[", i, "]", "(Title): ", folderlist[i] << Get Title );
);

```

### Find Posts

**Sintaxis:** jmpliveresult = liveconnection &lt;&lt; Find Posts(&lt;Search(search_string)&gt;, &lt;Publisher(user_name)&gt;, &lt;PageSize(val)&gt;)

**Descripción:** Busca publicaciones (todos los elementos, incluidas las carpetas, informes y datos) por cadena de caracteres de búsqueda, editor o ambas cosas. Devuelve una lista de resultados de JMP Live que se puede utilizar para hacer referencia a publicaciones individuales. Las siguientes llamadas a Next() en esta lista devuelven más publicaciones. PageSize especifica cuántas publicaciones devolver y vale 10 de forma predeterminada. Todos los parámetros de búsqueda son opcionales y, si no se proporciona ninguno, se devuelven todas las publicaciones.

**JMP Versión agregada:** 16

#### Ejemplo 1

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
dist = bc << Run Script( "Distribution" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );
gbline = bc << Run Script( "Graph Builder Line and Bar Charts" );
gbheat = bc << Run Script( "Graph Builder Heatmap" );

liveconnection = New JMP Live();
user = liveconnection << Get Username;

jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Find Posts Example" )
);
folder = jmpliveresult << As Scriptable;

contentlist = {};
Insert Into( contentlist, New JMP Live Content( dist ) );
Insert Into( contentlist, New JMP Live Content( gbsmoother ) );
Insert Into( contentlist, New JMP Live Content( gbline ) );
Insert Into( contentlist, New JMP Live Content( gbheat ) );

jmpliveresult = liveconnection << Publish( contentlist, Folder( folder ) );
jmpliveresult = liveconnection << Find Posts( Publisher( user ), PageSize( 5 ) );
postlist = jmpliveresult << As Scriptable();
Write( "\!nFind Posts(Count): ", postlist << Get Number Of Items );
For( i = 1, i <= postlist << Get Number Of Items, i += 1,
	Write( "\!nPost[", i, "]", "(ID): ", postlist[i] << Get ID );
	Write( "\!nPost[", i, "]", "(Type): ", postlist[i] << Get Type );
	Write( "\!nPost[", i, "]", "(Title): ", postlist[i] << Get Title );
);

```

#### Ejemplo 2

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
dist = bc << Run Script( "Distribution" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );
gbline = bc << Run Script( "Graph Builder Line and Bar Charts" );

liveconnection = New JMP Live();

jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Find Posts Example" ),
	Description( "Has Graph Builder Reports" )
);
folder = jmpliveresult << As Scriptable;

contentlist = {};
Insert Into( contentlist, New JMP Live Content( dist ) );
Insert Into( contentlist, New JMP Live Content( gbsmoother ) );
Insert Into( contentlist, New JMP Live Content( gbline ) );

jmpliveresult = liveconnection << Publish( contentlist, Folder( folder ) );
jmpliveresult = liveconnection << Find Posts( Search( "Graph Builder" ), PageSize( 5 ) );
postlist = jmpliveresult << As Scriptable();
Write( "\!nFind Posts(Count): ", postlist << Get Number Of Items );
For( i = 1, i <= postlist << Get Number Of Items, i += 1,
	Write( "\!nPost[", i, "]", "(ID): ", postlist[i] << Get ID );
	Write( "\!nPost[", i, "]", "(Type): ", postlist[i] << Get Type );
	Write( "\!nPost[", i, "]", "(Title): ", postlist[i] << Get Title );
);

```

### Find Reports

**Sintaxis:** jmpliveresult = liveconnection &lt;&lt; Find Reports(&lt;Search(search_string)&gt;, &lt;Publisher(user_name)&gt;, &lt;PageSize(val)&gt;)

**Descripción:** Busca informes por cadena de caracteres de búsqueda, editor o ambos. Devuelve una lista de resultados de JMP Live que se puede utilizar para hacer referencia a informes individuales. Las siguientes llamadas a Next() en esta lista devuelven más informes. PageSize especifica cuántos informes se deben devolver y vale 10 de forma predeterminada. Todos los parámetros de búsqueda son opcionales y, si no se proporciona ninguno, se devuelven todos los informes.

**JMP Versión agregada:** 16

#### Ejemplo 1

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
dist = bc << Run Script( "Distribution" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );
gbline = bc << Run Script( "Graph Builder Line and Bar Charts" );
gbheat = bc << Run Script( "Graph Builder Heatmap" );

liveconnection = New JMP Live();
user = liveconnection << Get Username;

jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Find Reports Example" )
);
folder = jmpliveresult << As Scriptable;

contentlist = {};
Insert Into( contentlist, New JMP Live Content( dist ) );
Insert Into( contentlist, New JMP Live Content( gbsmoother ) );
Insert Into( contentlist, New JMP Live Content( gbline ) );
Insert Into( contentlist, New JMP Live Content( gbheat ) );

jmpliveresult = liveconnection << Publish( contentlist, Folder( folder ) );
jmpliveresult = liveconnection << Find Reports( Publisher( user ), PageSize( 5 ) );
reportlist = jmpliveresult << As Scriptable();
Write( "\!nFind Reports(Count): ", reportlist << Get Number Of Items );
For( i = 1, i <= reportlist << Get Number Of Items, i += 1,
	Write( "\!nReport[", i, "]", "(ID): ", reportlist[i] << Get ID );
	Write( "\!nReport[", i, "]", "(Title): ", reportlist[i] << Get Title );
);

```

#### Ejemplo 2

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
dist = bc << Run Script( "Distribution" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );
gbline = bc << Run Script( "Graph Builder Line and Bar Charts" );
gbheat = bc << Run Script( "Graph Builder Heatmap" );

liveconnection = New JMP Live();
user = liveconnection << Get Username;

jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Find Reports Example" )
);
folder = jmpliveresult << As Scriptable;

contentlist = {};
Insert Into( contentlist, New JMP Live Content( dist ) );
Insert Into( contentlist, New JMP Live Content( gbsmoother ) );
Insert Into( contentlist, New JMP Live Content( gbline ) );
Insert Into( contentlist, New JMP Live Content( gbheat ) );

jmpliveresult = liveconnection << Publish( contentlist, Folder( folder ) );
jmpliveresult = liveconnection << Find Reports( Search( "Graph Builder" ), PageSize( 5 ) );
reportlist = jmpliveresult << As Scriptable();
Write( "\!nFind Reports(Count): ", reportlist << Get Number Of Items );
For( i = 1, i <= reportlist << Get Number Of Items, i += 1,
	Write( "\!nReport[", i, "]", "(ID): ", reportlist[i] << Get ID );
	Write( "\!nReport[", i, "]", "(Title): ", reportlist[i] << Get Title );
);

```

### Find Spaces

**Sintaxis:** jmpliveresult = liveconnection &lt;&lt; Find Spaces(&lt;Permissions( "Contribute" )&gt;, &lt;Search(search_string)&gt;, &lt;PageSize(val)&gt;)

**Descripción:** Busca espacios por cadena de búsqueda opcional y un parámetro opcional de permisos para filtrar aún más los espacios hasta quedar solo los que permiten contribuciones. Actualmente el permiso Contribuir es el único valor de permiso compatible. Devuelve una lista de resultados de JMP Live que se puede utilizar para hacer referencia a espacios específicos de la lista. Se puede especificar un valor de paginación para indicar cuántos elementos de espacio se deben devolver en la lista de resultados. Se pueden realizar llamadas Next() adicionales en esta lista de resultados para obtener más espacios.

**JMP Versión agregada:** 18

#### Ejemplo 1

```jsl

liveconnection = New JMP Live();

jmpliveresult = liveconnection << Find Spaces();
spaceList = jmpliveresult << As Scriptable;

Write( "\!n\!nSpace(Count): ", spaceList << Get Number Of Items );
For( i = 1, i <= spaceList << Get Number Of Items, i += 1,
	Write( "\!n\!nSpace[", i, "]", "(Name): ", spaceList[i] << Get Name );
	Write( "\!nSpace[", i, "]", "(Type): ", spaceList[i] << Get Type );
	Write( "\!nSpace[", i, "]", "(Key): ", spaceList[i] << Get Key );
	Write( "\!nSpace[", i, "]", "(Description): ", spaceList[i] << Get Description );
);

```

#### Ejemplo 2

```jsl

liveconnection = New JMP Live();

jmpliveresult = liveconnection << Find Spaces( Permissions( "Contribute" ) );
spaceList = jmpliveresult << As Scriptable;

Write( "\!n\!nSpace(Count): ", spaceList << Get Number Of Items );
For( i = 1, i <= spaceList << Get Number Of Items, i += 1,
	Write( "\!n\!nSpace[", i, "]", "(Name): ", spaceList[i] << Get Name );
	Write( "\!nSpace[", i, "]", "(Type): ", spaceList[i] << Get Type );
	Write( "\!nSpace[", i, "]", "(Key): ", spaceList[i] << Get Key );
	Write( "\!nSpace[", i, "]", "(Description): ", spaceList[i] << Get Description );
);

```

### Get Connection Name

**Sintaxis:** string = liveconnection &lt;&lt; Get Connection Name()

**Descripción:** Recupera el nombre de la conexión de JMP Live como cadena de caracteres.

**JMP Versión agregada:** 16

```jsl

liveconnection = New JMP Live();
connectionname = liveconnection << Get Connection Name();
Write( "Connection Name: ", connectionname );

```

### Get Data

**Sintaxis:** liveresult = liveconnection &lt;&lt; Get Data(id | path)

**Descripción:** Recupera una publicación de datos como objeto Resultado de JMP Live, que se puede utilizar para obtener el objeto Datos de JMP Live para esa publicación.

**JMP Versión agregada:** 19

```jsl

liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Get Data Example" ),
	If Exists( "use" ),
	Description( "Folder created in the scripting index example script." )
);
folder = jmpliveresult << As Scriptable;

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );

content = New JMP Live Content( gbsmoother );
jmpliveresult = folder << Publish( content );

dataPostID = "";
postList = jmpliveresult << As Scriptable;
For( i = 1, i <= postlist << Get Number Of Items, i += 1,
	posttype = postlist[i] << Get Type;
	If( posttype == "Data",
		dataPostID = postlist[i] << Get ID
	);
);

// Get the data post by ID
dataPost = (liveconnection << Get Data( dataPostID )) << As Scriptable;
Write( "\!n\!nData post retrieved by ID: ", dataPost );

// Get the data post by path
dataPost = (liveconnection << Get Data( "~/Get Data Example/Big Class" )) << As Scriptable;
Write( "\!n\!nData post retrieved by path: ", dataPost );

```

### Get Folder

**Sintaxis:** liveresult = liveconnection &lt;&lt; Get Folder(id | path)

**Descripción:** Recupera un objeto de carpeta como objeto Resultado de JMP Live, que se puede utilizar para obtener el objeto Carpeta de JMP Live para la carpeta.

**JMP Versión agregada:** 16

```jsl

liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Get Folder Example" ),
	If Exists( "use" ),
	Description( "Folder created in the scripting index example script." )
);
folder = jmpliveresult << As Scriptable;
id = folder << Get ID;

// Get the folder using its ID
jmpliveresult = liveconnection << Get Folder( id );
retrieved = jmpliveresult << As Scriptable;
Write( "\!n\!nID of retrieved folder: ", retrieved << Get ID );

// Get the folder using its path
jmpliveresult = liveconnection << Get Folder( "~/Get Folder Example" );
retrieved = jmpliveresult << As Scriptable;
Write( "\!n\!nPath of retrieved folder: ", retrieved << Get Path );

```

### Get HTTP Request

**Sintaxis:** httprequest = liveconnection &lt;&lt; Get HTTP Request()

**Descripción:** Devuelve una instancia de solicitud HTTP que puede utilizarse para llamar a las funciones REST de JMP Live.

```jsl

liveconnection = New JMP Live();
httprequest = liveconnection << Get HTTP Request();

httprequest << Method( "GET" );
httprequest << URL( "/api/webjmp" );
httprequest << Send();
httprequest << Get Status Message();

```

### Get Post

**Sintaxis:** liveresult = liveconnection &lt;&lt; Get Post(id | path)

**Descripción:** Recupera una publicación como objeto Resultado de JMP Live, que se puede utilizar para obtener el objeto Publicación de JMP Live para esa publicación.

**JMP Versión agregada:** 16

```jsl

liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Get Post Example" ),
	If Exists( "use" ),
	Description( "Folder created in the scripting index example script." )
);
folder = jmpliveresult << As Scriptable;

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );

content = New JMP Live Content( gbsmoother, Title( "Smoother" ) );
jmpliveresult = folder << Publish( content );

postList = jmpliveresult << As Scriptable;
For( i = 1, i <= postlist << Get Number Of Items, i += 1,
	result = liveconnection << Get Post( postlist[i] << Get ID );
	post = result << As Scriptable;
	Write( "\!n\!nPost ", i, ": ", post );
);

// Get a post by path
postByPath = (jmpliveresult = liveconnection << Get Post( "~/Get Post Example/Smoother" ))
 << As Scriptable;
Write( "\!n\!nPost retrieved by path: ", postByPath );

```

### Get Report

**Sintaxis:** liveresult = liveconnection &lt;&lt; Get Report(id | path)

**Descripción:** Recupera una publicación de informe como objeto Resultado de JMP Live, que se puede utilizar para obtener el objeto Informe de JMP Live para esa publicación.

**JMP Versión agregada:** 16

```jsl

liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Get Report Example" ),
	If Exists( "use" ),
	Description( "Folder created in the scripting index example script." )
);
folder = jmpliveresult << As Scriptable;

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );

content = New JMP Live Content( gbsmoother, Title( "Smoother" ) );
jmpliveresult = folder << Publish( content );

reportPostId = "";
postList = jmpliveresult << As Scriptable;
For( i = 1, i <= postlist << Get Number Of Items, i += 1,
	posttype = postlist[i] << Get Type;
	If( posttype == "Report",
		reportPostId = postlist[i] << Get ID
	);
);

// Get the report post by ID
reportPost = (liveconnection << Get Report( reportPostId )) << As Scriptable;
Write( "\!n\!nReport post retrieved by ID: ", reportPost );

// Get the data post by path
reportPost = (liveconnection << Get Report( "~/Get Report Example/Smoother" )) <<
As Scriptable;
Write( "\!n\!nReport post retrieved by path: ", reportPost );

```

### Get URL

**Sintaxis:** string = liveconnection &lt;&lt; Get URL()

**Descripción:** Recupera la URL al sitio de JMP Live si está disponible.

**JMP Versión agregada:** 16

```jsl

liveconnection = New JMP Live();
url = liveconnection << Get URL();
Write( "URL: ", url );

```

### Get Username

**Sintaxis:** string = liveconnection &lt;&lt; Get Username()

**Descripción:** Recupera el nombre de usuario del objeto de JMP Live si está disponible.

**JMP Versión agregada:** 16

```jsl

liveconnection = New JMP Live();
username = liveconnection << Get UserName();
Write( "Username: ", username );

```

### Is Logged In

**Sintaxis:** value = liveconnection &lt;&lt; Is Logged In()

**Descripción:** Indica si hay establecida una sesión autenticada en el servidor. Devuelve si la acción se ha realizado correctamente (1) o no (0).

**JMP Versión agregada:** 16

```jsl

liveconnection = New JMP Live();
isloggedin = liveconnection << Is Logged In();
Write( "Logged In: ", isloggedin );

```

### Publish

**Sintaxis:** liveresult = liveconnection &lt;&lt; Publish(JMPLiveContent, Folder(id | path | JMP Live Folder), &lt;Use Existing Data({{dt_or_name, data_id | data_path | JMP Live Data}})&gt;)

**Descripción:** Publica informes o datos independientes en JMP Live. Devuelve un objeto Lista de resultados de JMP Live. Debe especificar la carpeta de Debe especificar la carpeta de JMP Live en la que se debe publicar el contenido. No está permitido mezclar informes y datos independientes en el mismo comando Publicar. Al publicar informes, si el informe debe utilizar datos que ya están en JMP Live, se puede utilizar el parámetro opcional Utilizar datos existentes para especificarlo. El parámetro Utilizar datos existentes no es válido al publicar datos independientes.

**JMP Versión agregada:** 16

#### Ejemplo 1

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );

liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Publish Example" )
);
folder = jmpliveresult << As Scriptable;

content = New JMP Live Content( gbsmoother );
jmpliveresult = liveconnection << Publish( content, Folder( folder ) );
postlist = jmpliveresult << As Scriptable();
For( i = 1, i <= postlist << Get Number Of Items, i += 1,
	Write( "\!n\!nPost[", i, "]", "(ID): ", postlist[i] << Get ID );
	Write( "\!nPost[", i, "]", "(Type): ", postlist[i] << Get Type );
	Write( "\!nPost[", i, "]", "(Title): ", postlist[i] << Get Title );
);

```

#### Ejemplo 2

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );
gbline = bc << Run Script( "Graph Builder Line and Bar Charts" );

liveconnection = New JMP Live();

jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Publish with Two Reports Example" ),
	If Exists( "use" )
);
folder = jmpliveresult << As Scriptable;

content1 = New JMP Live Content( gbsmoother );
content2 = New JMP Live Content( gbline );
jmpliveresult = liveconnection << Publish( {content1, content2}, Folder( folder ) );
postlist = jmpliveresult << As Scriptable();
For( i = 1, i <= postlist << Get Number Of Items, i += 1,
	Write( "\!n\!nPost[", i, "]", "(ID): ", postlist[i] << Get ID );
	Write( "\!nPost[", i, "]", "(Type): ", postlist[i] << Get Type );
	Write( "\!nPost[", i, "]", "(Title): ", postlist[i] << Get Title );
);

```

#### Ejemplo 3

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );
gbline = bc << Run Script( "Graph Builder Line and Bar Charts" );
gbheat = bc << Run Script( "Graph Builder Heatmap" );

liveconnection = New JMP Live();

jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Publish with Data Options Example" ),
	If Exists( "use" )
);
folder = jmpliveresult << As Scriptable;

content1 = New JMP Live Content(
	gbsmoother,
	Title( "Smoother Graph" ),
	Description( "A Report from the Scripting Index Example" )
);
content2 = New JMP Live Content(
	gbline,
	Title( "Line Graph" ),
	Description( "A Report from the Scripting Index Example" )
);
jmpliveresult = liveconnection << Publish( {content1, content2}, Folder( folder ) );

bcDataPostID = "";
postList = jmpliveresult << As Scriptable;
For( i = 1, i <= postlist << Get Number Of Items, i += 1,
	posttype = postlist[i] << Get Type;
	If( posttype == "Data",
		bcDataPostId = postlist[i] << Get ID
	);
);

content1 = New JMP Live Content(
	gbheat,
	Title( "Heatmap" ),
	Description( "A Report from the Scripting Index Example" )
);
jmpliveresult = liveconnection << Publish(
	content1,
	Folder( Folder ),
	Use Existing Data( {{bc, bcDataPostId}} )
);
postlist = jmpliveresult << As Scriptable();
For( i = 1, i <= postlist << Get Number Of Items, i += 1,
	Write( "\!n\!nPost[", i, "]", "(ID): ", postlist[i] << Get ID );
	Write( "\!nPost[", i, "]", "(Type): ", postlist[i] << Get Type );
	Write( "\!nPost[", i, "]", "(Title): ", postlist[i] << Get Title );
);

```

#### Ejemplo 4

```jsl


liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Publish Standalone Data Example" ),
	If Exists( "use" )
);
folder = jmpliveresult << As Scriptable;

content = New JMP Live Content( Data( "$SAMPLE_DATA/Big Class.jmp" ) );
jmpliveresult = liveconnection << Publish( content, Folder( folder ) );
postlist = jmpliveresult << As Scriptable();
For( i = 1, i <= postlist << Get Number Of Items, i += 1,
	Write( "\!n\!nPost[", i, "]", "(ID): ", postlist[i] << Get ID );
	Write( "\!nPost[", i, "]", "(Type): ", postlist[i] << Get Type );
	Write( "\!nPost[", i, "]", "(Title): ", postlist[i] << Get Title );
);

```

#### Ejemplo 5

```jsl


liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Publish Standalone Data and Maps Example" ),
	If Exists( "use" )
);

folder = jmpliveresult << As Scriptable;

content1 = New JMP Live Content(
	Data( "$SAMPLE_DATA/S4 Temps.jmp" ),
	Title( "S4 Temps Data" ),
	Description( "The data table containing the actual temperature information." )
);
content2 = New JMP Live Content(
	Map( "$SAMPLE_DATA/S4-XY.jmp" ),
	Title( "S4 Coordinate Map File" )
);
content3 = New JMP Live Content(
	Map( "$SAMPLE_DATA/S4-Name.jmp" ),
	Title( "S4 Name Map File" )
);

jmpliveresult = liveconnection << Publish( {content1, content2, content3}, Folder( folder ) );
postlist = jmpliveresult << As Scriptable();
For( i = 1, i <= postlist << Get Number Of Items, i += 1,
	Write( "\!n\!nPost[", i, "]", "(ID): ", postlist[i] << Get ID );
	Write( "\!nPost[", i, "]", "(Type): ", postlist[i] << Get Type );
	Write( "\!nPost[", i, "]", "(Title): ", postlist[i] << Get Title );
);

```

### Replace

**Sintaxis:** liveresult = liveconnection &lt;&lt; Replace(JMPLiveContent, Report(id | path | JMP Live Report), &lt;Use Existing Data({{dt_or_name, data_id | data_path | JMP Live Data}})&gt;, &lt;Update Existing Data({{dt_or_name, data_id | data_path | JMP Live Data}})&gt;, &lt;Publish New Data({dt_or_name})&gt; )

**Descripción:** Sustituye un informe existente de JMP Live por otro informe. Las opciones de datos son necesarias para especificar cómo se gestionan los datos que se proporcionan con el informe. "Utilizar datos existentes" indica al servidor que debe utilizar los datos presentes en JMP Live para los datos especificados. "Actualizar datos existentes" indica al servidor que debe sustituir los datos del servidor por los datos proporcionados en el comando. "Publicar datos nuevos" indica al servidor que debe publicar una nueva tabla de datos y utilizarla para el informe que se va a sustituir. "Publicar nuevos datos" es la opción predeterminada para los datos de todas las tablas de datos. Se puede especificar cualquier combinación de opciones de datos. Devuelve un objeto Lista de resultados de JMP Live.

**JMP Versión agregada:** 16

#### Ejemplo 1

```jsl

dt = Open( "$SAMPLE_DATA/S4 Temps.jmp" );
tod = dt << Run Script( "by Time of Day" );
therm = dt << Run Script( "by Thermometer" );

liveconnection = New JMP Live();

jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Replace Example 1" )
);
folder = jmpliveresult << As Scriptable;
folderURL = folder << Get URL;

content = New JMP Live Content( tod );
jmpliveresult = liveconnection << Publish( content, Folder( folder ) );
postlist = jmpliveresult << As Scriptable;

xyPostId = "";
namePostId = "";
tempsPostId = "";
reportId = "";
For( i = 1, i <= postlist << Get Number Of Items, i += 1,
	title = postlist[i] << Get Title();
	type = postlist[i] << Get Type();
	If( title == "S4-Name",
		namePostId = postlist[i] << Get ID
	);
	If( title == "S4-XY",
		xyPostId = postlist[i] << Get ID
	);
	If( title == "S4 Temps",
		tempsPostId = postlist[i] << Get ID
	);
	If( type == "Report",
		reportId = postlist[i] << Get ID
	);
);

content = New JMP Live Content( therm );
jmpliveresult = liveconnection << Replace(
	content,
	Report( reportId ),
	Use Existing Data( {{"S4-Name", namePostId}, {"S4-XY", xyPostId}} ),
	Update Existing Data( {{"S4 Temps", tempsPostId}} )
);

Write( "\!n\!nOpen this URL to see results: ", folderURL );

```

#### Ejemplo 2

```jsl

dt = Open( "$SAMPLE_DATA/S4 Temps.jmp" );
tod = dt << Run Script( "by Time of Day" );
therm = dt << Run Script( "by Thermometer" );

liveconnection = New JMP Live();

jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Replace Example 2" )
);
folder = jmpliveresult << As Scriptable;
folderURL = folder << Get URL;

content = New JMP Live Content( tod );
jmpliveresult = liveconnection << Publish( content, Folder( folder ) );
postlist = jmpliveresult << As Scriptable;

xyPostId = "";
namePostId = "";
reportId = "";
For( i = 1, i <= postlist << Get Number Of Items, i += 1,
	title = postlist[i] << Get Title();
	type = postlist[i] << Get Type();
	If( title == "S4-Name",
		namePostId = postlist[i] << Get ID
	);
	If( title == "S4-XY",
		xyPostId = postlist[i] << Get ID
	);
	If( type == "Report",
		reportId = postlist[i] << Get ID
	);
);

content = New JMP Live Content( therm );
jmpliveresult = liveconnection << Replace(
	content,
	Report( reportId ),
	Use Existing Data( {{"S4-Name", namePostId}, {"S4-XY", xyPostId}} ),
	Publish New Data( {"S4 Temps"} )
);

Write( "\!n\!nOpen this URL to see results: ", folderURL );

```

### Update Data

**Sintaxis:** jmpliveresult = liveconnection &lt;&lt; Update Data( Data(id | path | JMP Live Data), dataTable | path | JMPLiveContent )

**Descripción:** Actualiza la tabla de datos o el mapa de una publicación de datos con el contenido proporcionado. El parámetro Datos identifica los datos en JMP Live que se van a actualizar. El segundo parámetro es el contenido que se utilizará para la actualización. Puede ser un objeto de tabla de datos, una ruta a una tabla de datos o un objeto de contenido de JMP Live creado a partir de una tabla de datos o un mapa.

**JMP Versión agregada:** 16

#### Ejemplo 1

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
dist = bc << Run Script( "Distribution" );

liveconnection = New JMP Live();

jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Update Data Example - Using JMP Live Content" ),
	If Exists( "use" )
);
folder = jmpliveresult << As Scriptable;

content = New JMP Live Content( dist );
jmpliveresult = liveconnection << Publish( content, Folder( folder ) );
postlist = jmpliveresult << As Scriptable;

dataPost = Empty();
For( i = 1, i <= postlist << Get Number Of Items, i += 1,
	type = postlist[i] << Get Type();
	If( type == "Data",
		dataPost = postlist[i]
	);
);

content = New JMP Live Content( Data( bc ) );
liveresult = liveconnection << Update Data( Data( dataPost ), content );
updatedData = liveresult << As Scriptable;
Write( "\!n\!nUpdated data: ", updatedData );

```

#### Ejemplo 2

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
dist = bc << Run Script( "Distribution" );

liveconnection = New JMP Live();

jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Update Data Example - Using Data Table" ),
	If Exists( "use" )
);
folder = jmpliveresult << As Scriptable;

content = New JMP Live Content( dist );
jmpliveresult = liveconnection << Publish( content, Folder( folder ) );
postlist = jmpliveresult << As Scriptable;

dataPost = Empty();
For( i = 1, i <= postlist << Get Number Of Items, i += 1,
	type = postlist[i] << Get Type();
	If( type == "Data",
		dataPost = postlist[i]
	);
);

liveresult = liveconnection << Update Data( Data( dataPost ), bc );
updatedData = liveresult << As Scriptable;
Write( "\!n\!nUpdated data: ", updatedData );

```

#### Ejemplo 3

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
dist = bc << Run Script( "Distribution" );

liveconnection = New JMP Live();

jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Update Data Example - Using Path" )
);
folder = jmpliveresult << As Scriptable;

content = New JMP Live Content( dist );
jmpliveresult = liveconnection << Publish( content, Folder( folder ) );
postlist = jmpliveresult << As Scriptable;

dataPost = Empty();
For( i = 1, i <= postlist << Get Number Of Items, i += 1,
	type = postlist[i] << Get Type();
	If( type == "Data",
		dataPost = postlist[i]
	);
);

liveresult = liveconnection << Update Data( Data( dataPost ), "$SAMPLE_DATA/Big Class.jmp" );
updatedData = liveresult << As Scriptable;
Write( "\!n\!nUpdated data: ", updatedData );

```


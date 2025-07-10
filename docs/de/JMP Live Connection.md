# JMP Live Connection



### Create Folder

**Syntax:** liveresult = liveconnection << Create Folder(Title(folder_title), Parent Folder(id | path | JMP Live Folder), <Description(folder_description)>, <If Exists("use" | "fail" | "default")>)

**Beschreibung:** Erstellt einen neuen Ordner in JMP Live. Gibt ein JMP Live-Ergebnis zurück, das verwendet werden kann, um das JMP Live-Ordnerobjekt für den neuen Ordner abzurufen. Title und Parent Folder sind erforderliche Parameter. Parent Folder kann zu Parent oder Folder abgekürzt werden. Beschreibung ist optional. „If Exists“ teilt JMP Live mit, was zu tun ist, wenn der angegebene Ordner bereits existiert: „use“ bedeutet, dass nur der vorhandene Ordner zurückgegeben wird, „fail“ bedeutet, dass ein Fehler ausgegeben wird, und „default“ bedeutet, dass ein neuer Ordner erstellt wird und sein Name durch Hinzufügen von „(2)“, „(3)“ usw. eindeutig gemacht wird.

**JMP Version hinzugefügt:** 16

**Beispiel 1**

```js

Names Default To Here( 1 );
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

**Beispiel 2**

```js

Names Default To Here( 1 );
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

**Beispiel 3**

```js

Names Default To Here( 1 );
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

**Syntax:** jmpliveresult = liveconnection << Delete Data(id | path | JMP Live Data)

**Beschreibung:** Löscht den angegebenen Datenbeitrag. Gibt zurück, ob die Aktion erfolgreich war (1) oder nicht (0).

**JMP Version hinzugefügt:** 17

```js

Names Default To Here( 1 );
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

**Syntax:** jmpliveresult = liveconnection << Delete Folder(id | path | JMP Live Folder)

**Beschreibung:** Löscht den angegebenen Ordner. Gibt zurück, ob die Aktion erfolgreich war (1) oder nicht (0).

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
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

**Syntax:** jmpliveresult = liveconnection << Delete Report(id | path | JMP Live Report)

**Beschreibung:** Löscht den angegebenen Bericht. Gibt zurück, ob die Aktion erfolgreich war (1) oder nicht (0).

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
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

**Syntax:** jmpliveresult = liveconnection << Find Folders(<Search(search_string)>, <Publisher(user_name)>, <PageSize(val)>)

**Beschreibung:** Findet Ordner nach Suchzeichenkette, Herausgeber oder beidem. Gibt eine JMP Live-Ergebnisliste zurück, die für den Verweis auf einzelne Ordner verwendet werden kann. Nachfolgende Next()-Aufrufe in dieser Liste geben weitere Ordner zurück. PageSize gibt an, wie viele Ordner zurückgegeben werden sollen, der Standardwert ist 10. Alle Suchparameter sind optional, und wenn keine angegeben werden, werden alle Ordner zurückgegeben.

**JMP Version hinzugefügt:** 16

**Beispiel 1**

```js

Names Default To Here( 1 );
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

**Beispiel 2**

```js

Names Default To Here( 1 );
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

**Syntax:** jmpliveresult = liveconnection << Find Posts(<Search(search_string)>, <Publisher(user_name)>, <PageSize(val)>)

**Beschreibung:** Findet Beiträge (alle Elemente einschließlich Ordner, Berichte und Daten) nach Suchzeichenkette, Herausgeber oder beidem. Gibt eine JMP Live-Ergebnisliste zurück, die für den Verweis auf einzelne Beiträge verwendet werden kann. Nachfolgende Next()-Aufrufe in dieser Liste geben weitere Beiträge zurück. PageSize gibt an, wie viele Beiträge zurückgegeben werden sollen, der Standardwert ist 10. Alle Suchparameter sind optional, und wenn keine angegeben werden, werden alle Beiträge zurückgegeben.

**JMP Version hinzugefügt:** 16

**Beispiel 1**

```js

Names Default To Here( 1 );
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

**Beispiel 2**

```js

Names Default To Here( 1 );
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

**Syntax:** jmpliveresult = liveconnection << Find Reports(<Search(search_string)>, <Publisher(user_name)>, <PageSize(val)>)

**Beschreibung:** Findet Berichte nach Suchzeichenkette, Herausgeber oder beidem. Gibt eine JMP Live-Ergebnisliste zurück, die für den Verweis auf einzelne Berichte verwendet werden kann. Nachfolgende Next()-Aufrufe in dieser Liste geben weitere Berichte zurück. PageSize gibt an, wie viele Berichte zurückgegeben werden sollen, der Standardwert ist 10. Alle Suchparameter sind optional, und wenn keine angegeben werden, werden alle Berichte zurückgegeben.

**JMP Version hinzugefügt:** 16

**Beispiel 1**

```js

Names Default To Here( 1 );
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

**Beispiel 2**

```js

Names Default To Here( 1 );
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

**Syntax:** jmpliveresult = liveconnection << Find Spaces(<Permissions( "Contribute" )>, <Search(search_string)>, <PageSize(val)>)

**Beschreibung:** Findet Arbeitsbereiche anhand einer optionalen Suchzeichenkette und eines optionalen Berechtigungsparameters, um die Arbeitsbereiche weiter zu filtern und nur diejenigen zu finden, die Beiträge zulassen. Derzeit wird nur die Berechtigung „Beitragen“ unterstützt. Gibt eine JMP-Live-Ergebnisliste zurück, die verwendet werden kann, um einzelne Arbeitsbereiche innerhalb der Liste zu referenzieren. Es kann ein Seitenwert angegeben werden, der angibt, wie viele Arbeitsbereichselemente in der Ergebnisliste zurückgegeben werden sollen. Zusätzliche Next()-Aufrufe können auf diese Ergebnisliste angewandt werden, um weitere Arbeitsbereiche abzurufen.

**JMP Version hinzugefügt:** 18

**Beispiel 1**

```js

Names Default To Here( 1 );
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

**Beispiel 2**

```js

Names Default To Here( 1 );
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

**Syntax:** string = liveconnection << Get Connection Name()

**Beschreibung:** Ruft den Namen der JMP Live-Verbindung als Zeichenkette ab.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
liveconnection = New JMP Live();
connectionname = liveconnection << Get Connection Name();
Write( "Connection Name: ", connectionname );

```

### Get Data

**Syntax:** liveresult = liveconnection << Get Data(id | path)

**Beschreibung:** Ruft einen Datenbeitrag als JMP Live-Ergebnisobjekt ab, das verwendet werden kann, um das JMP Live-Datenobjekt für diesen Beitrag abzurufen.

**JMP Version hinzugefügt:** 19

```js

Names Default To Here( 1 );
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

**Syntax:** liveresult = liveconnection << Get Folder(id | path)

**Beschreibung:** Ruft ein Ordnerobjekt als JMP Live-Ergebnisobjekt ab, das verwendet werden kann, um das JMP Live-Ordnerobjekt für den Ordner abzurufen.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
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

**Syntax:** httprequest = liveconnection << Get HTTP Request()

**Beschreibung:** Gibt eine HTTP-Request-Instanz aus, mit der JMP Live REST-Funktionen aufgerufen werden können.

```js

Names Default To Here( 1 );
liveconnection = New JMP Live();
httprequest = liveconnection << Get HTTP Request();

httprequest << Method( "GET" );
httprequest << URL( "/api/webjmp" );
httprequest << Send();
httprequest << Get Status Message();

```

### Get Post

**Syntax:** liveresult = liveconnection << Get Post(id | path)

**Beschreibung:** Ruft einen Beitrag als JMP Live-Ergebnisobjekt ab, das verwendet werden kann, um das JMP Live-Beitragsobjekt für diesen Beitrag abzurufen.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
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

**Syntax:** liveresult = liveconnection << Get Report(id | path)

**Beschreibung:** Ruft einen Berichtsbeitrag als JMP Live-Ergebnisobjekt ab, das verwendet werden kann, um das JMP Live-Berichtsobjekt für diesen Beitrag abzurufen.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
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

**Syntax:** string = liveconnection << Get URL()

**Beschreibung:** Ruft die URL der JMP Live-Website ab, sofern verfügbar.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
liveconnection = New JMP Live();
url = liveconnection << Get URL();
Write( "URL: ", url );

```

### Get Username

**Syntax:** string = liveconnection << Get Username()

**Beschreibung:** Ruft den Benutzernamen vom JMP Live-Objekt ab, sofern verfügbar.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
liveconnection = New JMP Live();
username = liveconnection << Get UserName();
Write( "Username: ", username );

```

### Is Logged In

**Syntax:** value = liveconnection << Is Logged In()

**Beschreibung:** Zeigt an, ob eine authentifizierte Sitzung auf dem Server eingerichtet wurde. Gibt zurück, ob die Aktion erfolgreich war (1) oder nicht (0).

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
liveconnection = New JMP Live();
isloggedin = liveconnection << Is Logged In();
Write( "Logged In: ", isloggedin );

```

### Publish

**Syntax:** liveresult = liveconnection << Publish(JMPLiveContent, Folder(id | path | JMP Live Folder), <Use Existing Data({{dt_or_name, data_id | data_path | JMP Live Data}})>)

**Beschreibung:** Berichte oder eigenständige Daten in JMP Live veröffentlichen. Gibt ein JMP Live-Ergebnislistenobjekt zurück. Sie müssen den Ordner in JMP Live angeben, in dem der Inhalt veröffentlicht werden soll. Das Mischen von Berichten und eigenständigen Daten in einem einzigen Veröffentlichungsbefehl ist nicht zulässig. Wenn der Bericht beim Veröffentlichen von Berichten Daten verwenden soll, die bereits in JMP Live vorhanden sind, kann der optionale Parameter „Use Existing Data“ verwendet werden, um dies anzugeben. Der Parameter „Use Existing Data“ ist beim Veröffentlichen eigenständiger Daten nicht gültig.

**JMP Version hinzugefügt:** 16

**Beispiel 1**

```js

Names Default To Here( 1 );
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

**Beispiel 2**

```js

Names Default To Here( 1 );
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

**Beispiel 3**

```js

Names Default To Here( 1 );
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

**Beispiel 4**

```js

Names Default To Here( 1 );

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

**Beispiel 5**

```js

Names Default To Here( 1 );

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

**Syntax:** liveresult = liveconnection << Replace(JMPLiveContent, Report(id | path | JMP Live Report), <Use Existing Data({{dt_or_name, data_id | data_path | JMP Live Data}})>, <Update Existing Data({{dt_or_name, data_id | data_path | JMP Live Data}})>, <Publish New Data({dt_or_name})> )

**Beschreibung:** Ersetzt einen vorhandenen JMP Live-Bericht mit einem anderen Bericht. Die Datenoptionen sind erforderlich, um anzugeben, wie die im Bericht gelieferten Daten verwaltet werden sollen. „Use Existing Data“ weist den Server an, die vorhandenen Daten in JMP Live für die angegebenen Daten zu verwenden. „Update Existing Data“ weist den Server an, die Daten auf dem Server mit den im Befehl angegebenen Daten zu ersetzen. „Publish New Data“ weist den Server an, eine neue Datentabelle zu veröffentlichen und sie für den zu ersetzenden Bericht zu verwenden. „Neue Daten veröffentlichen“ ist die Standard-Datenoption für alle Datentabellen. Jede Kombination der Datenoptionen kann angegeben werden. Gibt eine JMP Live-Ergebnisliste zurück.

**JMP Version hinzugefügt:** 16

**Beispiel 1**

```js

Names Default To Here( 1 );
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

**Beispiel 2**

```js

Names Default To Here( 1 );
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

**Syntax:** jmpliveresult = liveconnection << Update Data( Data(id | path | JMP Live Data), dataTable | path | JMPLiveContent )

**Beschreibung:** Aktualisiert die Datentabelle oder Karte für einen Datenbeitrag mit den angegebenen Inhalten. Der Parameter Data identifiziert die in JMP Live zu aktualisierenden Daten. Der zweite Parameter ist der für die Aktualisierung zu verwendende Inhalt. Es kann ein Datentabellenobjekt, ein Pfad zu einer Datentabelle oder ein JMP Live Content-Objekt sein, das aus einer Datentabelle oder Karte erstellt wurde.

**JMP Version hinzugefügt:** 16

**Beispiel 1**

```js

Names Default To Here( 1 );
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

**Beispiel 2**

```js

Names Default To Here( 1 );
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

**Beispiel 3**

```js

Names Default To Here( 1 );
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


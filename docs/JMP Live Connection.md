# JMP Live Connection



### Create Folder

**Syntax:** liveresult = liveconnection << Create Folder(Title(folder_title), Parent Folder(id | path | JMP Live Folder), <Description(folder_description)>, <If Exists("use" | "fail" | "default")>)

**Description:** Creates a new folder on JMP Live. Returns a JMP Live Result, which can be used to obtain the JMP Live Folder object for the new folder. Title and Parent Folder are required parameters. Parent Folder can be shortened to Parent or Folder. Description is optional. If Exists tells JMP Live what to do if the specified folder already exists: "use" means to just return the existing folder, "fail" means to throw an error, and "default" means to create a new folder and make its name unique by adding "(2)", "(3)", etc.

**JMP Version Added:** 16

**Example 1**

```

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

**Example 2**

```

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

**Example 3**

```

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

**Description:** Deletes the specified data post. Returns whether action was successful (1) or not (0).

**JMP Version Added:** 17

```

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

**Description:** Deletes the specified folder. Returns whether action was successful (1) or not (0).

**JMP Version Added:** 16

```

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

**Description:** Deletes the specified report. Returns whether action was successful (1) or not (0).

**JMP Version Added:** 16

```

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

**Description:** Finds folders by search string, publisher, or both. Returns a JMP Live Result List that can be used to reference individual folders. Subsequent Next() calls on this list return more folders. PageSize specifies how many folders to return, and defaults to 10. All search parameters are optional, and if none are provided, all folders are returned.

**JMP Version Added:** 16

**Example 1**

```

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

**Example 2**

```

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

**Description:** Finds posts (all items including folders, reports and data) by search string, publisher, or both. Returns a JMP Live Result List that can be used to reference individual posts. Subsequent Next() calls on this list return more posts. PageSize specifies how many posts to return, and defaults to 10. All search parameters are optional, and if none are provided, all posts are returned.

**JMP Version Added:** 16

**Example 1**

```

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

**Example 2**

```

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

**Description:** Finds reports by search string, publisher, or both. Returns a JMP Live Result List that can be used to reference individual reports. Subsequent Next() calls on this list return more reports. PageSize specifies how many reports to return, and defaults to 10. All search parameters are optional, and if none are provided, all reports are returned.

**JMP Version Added:** 16

**Example 1**

```

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

**Example 2**

```

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

**Description:** Finds spaces by an optional search string and an optional Permissions parameter to further filter the spaces to only those that allow contributions. Currently the Contribute permission is the only permission value supported. Returns a JMP Live Result List that can be used to reference individual spaces within the list. A paging value can be specified to say how many space items you want returned in the result list. Additional Next() calls can be made on this result list to get more spaces back.

**JMP Version Added:** 18

**Example 1**

```

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

**Example 2**

```

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

**Description:** Retrieves the name of the JMP Live connection as a string.

**JMP Version Added:** 16

```

Names Default To Here( 1 );
liveconnection = New JMP Live();
connectionname = liveconnection << Get Connection Name();
Write( "Connection Name: ", connectionname );

```

### Get Data

**Syntax:** liveresult = liveconnection << Get Data(id | path)

**Description:** Retrieves a data post as a JMP Live Result object, which can be used to obtain the JMP Live Data object for that post.

**JMP Version Added:** 19

```

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

**Description:** Retrieves a folder object as a JMP Live Result object, which can be used to obtain the JMP Live Folder object for the folder.

**JMP Version Added:** 16

```

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

**Description:** Returns an HTTP Request instance that can be used to call JMP Live REST functions.

```

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

**Description:** Retrieves a post as a JMP Live Result object, which can be used to obtain the JMP Live Post object for that post.

**JMP Version Added:** 16

```

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

**Description:** Retrieves a report post as a JMP Live Result object, which can be used to obtain the JMP Live Report object for that post.

**JMP Version Added:** 16

```

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

**Description:** Retrieves the URL to the JMP Live site if it is available.

**JMP Version Added:** 16

```

Names Default To Here( 1 );
liveconnection = New JMP Live();
url = liveconnection << Get URL();
Write( "URL: ", url );

```

### Get Username

**Syntax:** string = liveconnection << Get Username()

**Description:** Retrieves the Username from the JMP Live object if it is available.

**JMP Version Added:** 16

```

Names Default To Here( 1 );
liveconnection = New JMP Live();
username = liveconnection << Get UserName();
Write( "Username: ", username );

```

### Is Logged In

**Syntax:** value = liveconnection << Is Logged In()

**Description:** Indicates whether an authenticated session is established to the server. Returns whether action was successful (1) or not (0).

**JMP Version Added:** 16

```

Names Default To Here( 1 );
liveconnection = New JMP Live();
isloggedin = liveconnection << Is Logged In();
Write( "Logged In: ", isloggedin );

```

### Publish

**Syntax:** liveresult = liveconnection << Publish(JMPLiveContent, Folder(id | path | JMP Live Folder), <Use Existing Data({{dt_or_name, data_id | data_path | JMP Live Data}})>)

**Description:** Publish reports or standalone data to JMP Live. Returns a JMP Live Result List object. You must specify the folder on JMP Live to which the content should be published. Mixing reports and standalone data in the same Publish command is not allowed. When publishing reports, if the report should use data that is already on JMP Live, the optional Use Existing Data parameter can be used to specify that. The Use Existing Data parameter is not valid when publishing standalone data.

**JMP Version Added:** 16

**Example 1**

```

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

**Example 2**

```

Names Default To Here( 1 );
bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
gbsmoother = bc << Run Script( "Graph Builder Smoother Line" );
gbline = bc << Run Script( "Graph Builder Line and Bar Charts" );

liveconnection = New JMP Live();

jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Publish Example" ),
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

**Example 3**

```

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

**Example 4**

```

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

**Example 5**

```

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

jmpliveresult = liveconnection << Publish(
	{content1, content2, content3},
	Folder( folder )
);
postlist = jmpliveresult << As Scriptable();
For( i = 1, i <= postlist << Get Number Of Items, i += 1,
	Write( "\!n\!nPost[", i, "]", "(ID): ", postlist[i] << Get ID );
	Write( "\!nPost[", i, "]", "(Type): ", postlist[i] << Get Type );
	Write( "\!nPost[", i, "]", "(Title): ", postlist[i] << Get Title );
);

```

### Replace

**Syntax:** liveresult = liveconnection << Replace(JMPLiveContent, Report(id | path | JMP Live Report), <Use Existing Data({{dt_or_name, data_id | data_path | JMP Live Data}})>, <Update Existing Data({{dt_or_name, data_id | data_path | JMP Live Data}})>, <Publish New Data({dt_or_name})> )

**Description:** Replaces an existing JMP Live report with another report. The data options are required to specify how to manage the data being provided with the report. "Use Existing Data" instructs the server to use the existing data on JMP Live for the data specified. "Update Existing Data" instructs the server to replace the data on the server with the data provided in the command. "Publish New Data" instructs the server to publish a new data table and use it for the report being replaced. "Publish New Data" is the default data option for all data tables. Any combination of the data options can be specified. Returns a JMP Live Result List object.

**JMP Version Added:** 16

**Example 1**

```

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

**Example 2**

```

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

**Description:** Updates the data table or map for a data post with the content provided. The Data parameter identifies the data on JMP Live to be updated. The second parameter is the content to use for the update. It can be a data table object, a path to a data table, or a JMP Live Content object created from a data table or map.

**JMP Version Added:** 16

**Example 1**

```

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

**Example 2**

```

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

**Example 3**

```

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

liveresult = liveconnection << Update Data(
	Data( dataPost ),
	"$SAMPLE_DATA/Big Class.jmp"
);
updatedData = liveresult << As Scriptable;
Write( "\!n\!nUpdated data: ", updatedData );

```


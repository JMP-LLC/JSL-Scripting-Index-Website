# JMP Live Folder



### Add Reports To Folder

**Syntax:** jmpliveresultlist = folder << Add Reports To Folder(JMPLiveContent, <Use Existing Data({{dt_or_name, id | relative_path | JMP Live Data}})>)

**Description:** The Add Reports To Folder message is deprecated. Use Publish instead.

**JMP Version Added:** 16

### Create Folder

**Syntax:** liveresult = folder << Create Folder(Title("Title"), <Description("Description")>, <If Exists("use" | "fail" | "default")>)

**Description:** Creates a subfolder of this folder on JMP Live. Returns a JMP Live Result, which can be used to obtain the JMP Live Folder object for the new folder. Title is required. Description is optional. If Exists tells JMP Live what to do if the specified folder already exists: "use" means to just return the existing folder, "fail" means to throw an error, and "default" means to create a new folder and make its name unique by adding "(2)", "(3)", etc.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
liveconnection = New JMP Live();

existingFolder = (liveconnection << Get Folder( "~" )) << As Scriptable;

newFolder = (existingFolder << Create Folder(
	Title( "Important Reports" ),
	If Exists( "default" )
)) << As Scriptable;

Write( "New folder path: ", newFolder << Get Path );

```

### Get Children

**Syntax:** jmpliveresultlist = folder << Get Children(<PAGESIZE(10)>)

**Description:** Retrieves the child posts contained in the folder as a JMP Live Result List. An optional pagesize argument can be used to control the number of posts returned.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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
	New JMP Live Content(
		gbsmoother,
		Title( "SearchString - Graph Builder Smoother Line" )
	)
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

**Syntax:** result = jmplivefolder << Get Data(id | relative_path)

**Description:** Retrieves a data post from the folder as a JMP Live Result object, which can be used to obtain the JMP Live Data object for that post.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
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

**Syntax:** string = jmplivepost << Get Description()

**Description:** Gets the description of the JMP Live Report, JMP Live Folder, or JMP Live Post as a string.

**JMP Version Added:** 16

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

### Get Folder

**Syntax:** result = jmplivefolder << Get Folder(id | relative_path)

**Description:** Retrieves a child folder from the folder as a JMP Live Result object, which can be used to obtain the JMP Live Folder object for that child folder.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
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

**Syntax:** string = jmplivepost << Get ID()

**Description:** Gets the ID for this JMP Live Report, JMP Live Folder, or JMP Live Post as a string.

**JMP Version Added:** 16

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

### Get Number Of Items

**Syntax:** value = jmplivefolder << Get Number Of Items()

**Description:** Gets the number of items in the folder.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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
	New JMP Live Content(
		gbsmoother,
		Title( "SearchString - Graph Builder Smoother Line" )
	)
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

**Syntax:** string = jmplivepost << Get Path()

**Description:** Gets the path of this JMP Live Report, Folder or Post as a string.

**JMP Version Added:** 19

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

### Get Post

**Syntax:** result = jmplivefolder << Get Post(id | relative_path)

**Description:** Retrieves a post from the folder as a JMP Live Result object, which can be used to obtain the JMP Live Post object for that post.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
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

**Syntax:** result = jmplivepost << Get Report(id | relative_path)

**Description:** Retrieves a report post from the folder as a JMP Live Result object, which can be used to obtain the JMP Live Report object for that report.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
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

**Syntax:** string = jmplivepost << Get Title()

**Description:** Gets the title of the JMP Live Report, JMP Live Folder, or JMP Live Post as a string.

**JMP Version Added:** 16

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

**Syntax:** string = jmplivepost << Get Type()

**Description:** Get the specific type of Post (Folder, Data or Report)

**JMP Version Added:** 17

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

**Syntax:** string = jmplivepost << Get URL()

**Description:** Gets the URL for this JMP Live Report, JMP Live Folder, or JMP Live Post as a string.

**JMP Version Added:** 16

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

### Publish

**Syntax:** jmpliveresultlist = folder << Publish(JMPLiveContent, <Use Existing Data({{dt_or_name, id | relative_path | JMP Live Data}})>)

**Description:** Publish reports or standalone data to the JMP Live folder. Returns a JMP Live Result List object. Replaces the Add Reports To Folder message. Mixing reports and standalone data in the same Publish command is not allowed. When publishing reports, if the report should use data that is already on JMP Live, the optional Use Existing Data parameter can be used to specify that. The Use Existing Data parameter is not valid when publishing standalone data.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
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
	New JMP Live Content(
		gbsmoother,
		Title( "SearchString - Graph Builder Smoother Line" )
	)
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

**Syntax:** liveresult = jmplivefolder << Replace(Report(id | relative_path | JMP Live Report), JMPLiveContent, <Use Existing Data({{dt_or_name, data_id | data_path | JMP Live Data}})>, <Update Existing Data({{dt_or_name, data_id | data_path | JMP Live Data}})>, <Publish New Data({dt_or_name})> )

**Description:** Replaces an existing JMP Live report in the folder with another report. The data options are required to specify how to manage the data being provided with the report. "Use Existing Data" instructs the server to use the existing data on JMP Live for the data specified. "Update Existing Data" instructs the server to replace the data on the server with the data provided in the command. "Publish New Data" instructs the server to publish a new data table and use it for the report being replaced. "Publish New Data" is the default data option for all data tables. Any combination of the data options can be specified. Returns a JMP Live Result List object.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
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

**Syntax:** success = jmplivepost << Set Description("string value")

**Description:** Given a string, sets the description of the JMP Live Report, JMP Live Folder, or JMP Live Post.  Returns true or false for success or failure.

**JMP Version Added:** 16

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

**Syntax:** success = jmplivepost << Set Title("New Title")

**Description:** Sets the title of the JMP Live Report, JMP Live Folder, or JMP Live Post. Returns a true or false for success or failure.

**JMP Version Added:** 16

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

### Update Data

**Syntax:** result = jmplivefolder << Update Data(Data(id | relative_path | JMP Live Data), dataTable | path | JMPLiveContent)

**Description:** Updates the data table or map for a data post in the folder. The Data parameter identifies the data on JMP Live to be updated. The second parameter is the content to use for the update. It can be a data table object, a path to a data table, or a JMP Live Content object created from a data table or map.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
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


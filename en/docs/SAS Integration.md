# SAS Integration



## SAS Results

### Get Log

**Syntax:** obj << Get Log

**Description:** Returns a string containing the Log Window contents of the active SAS server connection.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
sas = Current SAS Connection();
sas << Submit(
	"proc print data=sashelp.class; run;",
	NoOutputWindow( True ),
	GetSASLog( False )
);
result = sas << Get Results;
log = result << Get Log();
Show( log );

```

### Get Output

**Syntax:** obj << Get Output

**Description:** Returns a string containing the Log Window contents of the active SAS server connection.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
sas = Current SAS Connection();
sas << Submit( "proc print data=sashelp.class; run;", NoOutputWindow( True ) );
result = sas << Get Results;
out = result << Get Output();
Show( out );

```

### Get Output Datasets

**Syntax:** obj << Get Output Datasets

**Description:** Returns a string containing the Log Window contents of the active SAS server connection.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
sas = Current SAS Connection();
sas << Submit(
	"proc corr data=sashelp.class
    outp=pearson outs=spearman;
    var height weight;
    run;",
	NoOutputWindow( True )
);
result = sas << Get Results;
data = result << Get Output Datasets;
Show( data );

```

## SAS Server

### Connect

**Syntax:** sas << Connect( <( data_connector_or_id )>, <Prompt( Always|Never|IfNeeded )>)

**Description:** Attempt to reconnect a SAS server connection object that has become disconnected.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
SAS Connect( "my sas connection" );
sas = Current SAS Connection();
sas << Disconnect();
sas << Connect();

```

### Current CAS Connection

**Syntax:** result = sas << Current CAS Connection()

**Description:** Obtains the connection to the current CAS Server.

**JMP Version Added:** 19

**Example 1**

```js

Names Default To Here( 1 );
sas = Current SAS Connection();
cas = sas << Current CAS Connection;
Show( cas );

```

**Example 2**

```js

Names Default To Here( 1 );
sas = Current SAS Connection();
cas = sas << Current CAS Connection;
connected = cas << Is Connected();
Show( connected );

```

### Data Set Exists

**Syntax:** result = sas << Data Set Exists( libref, dsname )

**Description:** Returns 1 if a SAS data set exists.

**JMP Version Added:** 19

**Example 1**

```js

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Data Set Exists( "SASHELP", "AIRLINE" );
Show( result );

```

**Example 2**

```js

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Data Set Exists( "SASHELP.AIRLINE" );
Show( result );

```

### Disconnect

**Syntax:** obj << Disconnect

**Description:** Disconnect this SAS server connection.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
SAS Connect( "my sas connection" );
sas = Current SAS Connection();
sas << Disconnect();

```

### Export Data

**Syntax:** y = sas << Export Data( dt, libref, dataset, <named_arguments> );

y = sas << SAS Export Data( dt, libref.dataset, <named_arguments> )

**Description:** Exports a JMP data table as a SAS dataset onto the active SAS server connection. Named optional arguments include Columns(list|col1,col2,...,coln), string-valued arguments Password, AlterPassword, ReadPassword, and WritePassword, as well as Boolean-valued arguments HonorExcludedRows, PreserveSASColumnNames, PreserveSASFormats, ReplaceExisting, ExistingAlterPassword, and SaveJMPMetadata. Returns 1 if the export was successful, 0 otherwise.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
sas = Current SAS Connection();
sas << Export Data( Open( "$SAMPLE_DATA/Big Class.jmp" ), "WORK", "BIGCLASS" );

```

### Get Data Sets

**Syntax:** result = sas << Get Data Sets( libref )

**Description:** Returns a list of the data sets defined in a SAS library.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Get Data Sets( "SASHELP" );
Show( result );

```

### Get Host Name

**Syntax:** var = sas << Get Host Name( )

**Description:** Get the host name of the SAS server

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Get Host Name();
Show( result );

```

### Get Lib Refs

**Syntax:** result = sas << Get Lib Refs()

**Description:** Returns a list of the currently defined SAS librefs from the active SAS server connection.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Get Lib Refs();
Show( result );

```

### Get Log

**Syntax:** result = sas << Get Log()

**Description:** Returns a string containing the Log Window contents of the active SAS server connection.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
sas = Current SAS Connection();
sas << Submit(
	"proc print data=sashelp.class; run;",
	NoOutputWindow( True ),
	GetSASLog( False )
);
result = sas << Get Log();
Show( result );

```

### Get Macro Var

**Syntax:** var = sas << GetMacroVar( "name" )

**Description:** Get the value of a SAS Macro Variable

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Get Macro Var( "SYSVLONG" );
Show( result );

```

### Get Macro Var Names

**Syntax:** var = sas << GetMacroVarNames( )

**Description:** Get a list of SAS Macro Variables

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Get Macro Var Names();
Show( result );

```

### Get Option Names

**Syntax:** var = sas << GetOptionNames( )

**Description:** Get a list of SAS Options

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Get Option Names();
Show( result );

```

### Get Option Value

**Syntax:** var = sas << Get Option Value( "name" )

**Description:** Get the value of a SAS Option

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Get Option Value( "MEMLIB" );
Show( result );

```

### Get Output

**Syntax:** result = sas << Get Output()

**Description:** Returns a string containing the listing output from the last submission of SAS code to the active SAS server connection.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
sas = Current SAS Connection();
sas << Submit( "proc print data=sashelp.class; run;", NoOutputWindow( True ) );
result = sas << Get Output();
Show( result );

```

### Get Results

**Syntax:** result = sas << Get Results()

**Description:** Get the results of the last submit for this server

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
sas = Current SAS Connection();
sas << Submit( "proc print data=sashelp.class; run;" );
result = sas << Get Results();
Show( result );

```

### Get Submit Status

**Syntax:** result = sas << Get Submit Status()

**Description:** Get the status of the last submit for this server

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
sas = Current SAS Connection();
sas << Submit( "proc print data=sashelp.class; run;" );
result = sas << Get Submit Status;
Show( result );

```

### Get Var Info

**Syntax:** result = sas << Get Var Info( libref, dataset );

result = sas << Get Var Info( libref.dataset )

**Description:** Get information about the variables in a SAS data set

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Get Var Info( "SASHELP", "CLASS" );
Show( result );

```

### Get Var Names

**Syntax:** result = sas << Get Var Names( libref, dataset );

result = sas << SAS Get Var Names( libref.dataset )

**Description:** Retrieves the variable names contained in the specified data set from the active SAS server connection.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Get Var Names( "SASHELP", "CLASS" );
Show( result );

```

### Get Version

**Syntax:** ver = sas << GetVersion( < Long > )

**Description:** Get the version of SAS

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Get Version;
Show( result );

```

### Get Work Folder

**Syntax:** obj << Get Work Folder

**Description:** Get the server&apos;s WORK library folder

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Get Work Folder;
Show( result );

```

### Import Data

**Syntax:** dt = sas << Import Data( libref, dataset, <named_arguments> );

dt = sas << Import Data( libref.dataset|path, <named_arguments> )

**Description:** Imports a SAS data set from the active SAS server connection into a JMP data table. Named optional arguments include Sample(<named_arguments>), Columns(list|col1,col2,...,coln), string-valued arguments Where, as well as Boolean-valued arguments ConvertCustomFormats, Invisible, UseLabelsForVarNames, SQLTableVariable. Returns a JMP data table object.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
sas = Current SAS Connection();
dt = sas << Import Data( "SASHELP.CLASS" );

```

### List Output Data Sets

**Syntax:** sas << List Output Data Sets(sas code)

**Description:** Lists output datasets for the specified SAS code

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
sas = Current SAS Connection();
datasets = sas << List Output Datasets(
	"\[
proc means data=sashelp.class;
    var age height weight;
run;
]\"
);
Show( datasets );

```

### Name

**Syntax:** serverName = sas << Name

**Description:** Returns the name of the server.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
sas = Current SAS Connection();
serverName = sas << Name;
Show( serverName );

```

### Submit

**Syntax:** result = sas << Submit( <GetSASLog(<True|False|OnError>, <OnSubmitComplete(script)>, <OpenOutputDatasets(<All|None, UseLabelsForVarNames(1|0),dataset1,dataset2,...,datasetN>)>, <ODSFormat>, <Title>, <OpenODSResults>, <NoOutputWindow>

**Description:** Submits SAS code to the active SAS server connection. Returns 1 if successful, 0 otherwise.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
sas = Current SAS Connection();
sas << Submit(
	"proc reg data=sashelp.class; model height=weight; output out=result_height_weight residual=res; run; quit;",
	OpenODSResults( true ),
	OpenOutputDatasets( All )
);

```

### Submit File

**Syntax:** result = sas << Submit File( "filename.sas" )

**Description:** Submits a file containing SAS code to the active SAS server connection. Named optional arguments are the same as those for SAS Submit. Returns 1 if successful, 0 otherwise.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
sas = Current SAS Connection();
sas << Submit File( "MySASProgram.sas" );

```

### Check SAS Dependencies

**Syntax:** Check SAS Dependencies()

**Description:** Checks the status of the SAS Integration dependencies. Returns 1 for success.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );

If( !Check SAS Dependencies(),
	Install SAS Dependencies();
	Print( "Dependencies are installed" );
,
	Print( "Dependencies are installed" )
);

```

### Current SAS Connection

**Syntax:** sas = Current SAS Connection()

**Description:** Returns the active SAS server connection, if any, as a scriptable object.

```js

Names Default To Here( 1 );
SAS Connect( "my sas connection" );
sas = Current SAS Connection();
sas << Submit( "proc print data=sashelp.class; run;" );

```

### Current SAS Connections

**Syntax:** array = Current SAS Connections()

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
array = Current SAS Connections();
array["my connection"] << Submit( "proc print data=sashelp.class; run;" );

```

### Install SAS Dependencies

**Syntax:** Install SAS Dependencies()

**Description:** Installs the required dependencies for SAS Integration. Returns 1 for success.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );

If( !Check SAS Dependencies(),
	Install SAS Dependencies(),
	Print( "Dependencies are installed" )
);

```

### SAS Connect

**Syntax:** SAS Connect(<( data_connector_or_id )>, <Prompt( Always|Never|IfNeeded )>)

**Description:** Opens a SAS connection.

**JMP Version Added:** 19

**Example 1**

```js

Names Default To Here( 1 );
SAS Connect( "my sas connection" );

```

**Example 2**

```js

Names Default To Here( 1 );

iom_win = New Data Connector( Type( "SAS Local" ) );
SAS Connect( iom_win );
sas = Current SAS Connection();
librefs = sas << Get Librefs();
For( i = 1, i <= N Items( librefs ), i++,
	tables = sas << Get Data Sets( librefs[i] );
	Write( "\!n\!nLibref:" || librefs[i] );
	Write( "\!nTables:" || Char( tables ) );
);
sas << Disconnect();

```

**Example 3**

```js

Names Default To Here( 1 );
SAS Connect(
	New Data Connector(
		ID( "com.jmp.sas_remote" ),
		Port( 8591 ),
		User( "jmpuser" ),
		Host Name( "sashost.com" )
	),
	Prompt( If Needed )
);

```

**Example 4**

```js

Names Default To Here( 1 );
SAS Connect( "sashost.com", 8591, Username( "jmpuser" ), Prompt( "Always" ) );

```

### Update SAS Dependencies

**Syntax:** Update SAS Dependencies()

**Description:** Updates the required dependencies for SAS Integration. Returns 1 for success.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );

If( Check SAS Dependencies(),
	Update SAS Dependencies(),
	Print( "Dependencies are not installed" )
);

```


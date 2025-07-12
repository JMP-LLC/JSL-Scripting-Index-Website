# File



## Functions

### Close

**Syntax:** Close( <dataTableRef|name>, <NoSave|Save( "path" )> )

**Description:** Closes the data table referenced by the first argument, which defaults to the current data table in the current project (or no project if not running the script in a project).



To specify a project, use the optional Project() argument with a title, index, display box, or window object. Use Project(0) to specify no project when running the script in a project.



The second argument is used to save the data table. Use an appropriate file extension in the path to save the data table as a non-JMP format. Specifying NoSave bypasses the prompt to save or disregard changes.

```jsl

Names Default To Here( 1 );
exdt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 3 );
Close( exdt, NoSave );

```

### Close All

**Syntax:** Close All( <Project(title|index|box|window)>, Data Tables | Reports | Journals, <invisible | private>, <NoSave|Save> )

**Description:** Closes all open resources of a specific type: data tables, journals, or reports.



Only windows in the current project (or no project if not running the script in a project) will be closed. To specify a project, use the optional Project() argument with a title, index, display box, or window object. Use Project(0) to specify no project when running the script in a project.

```jsl

Names Default To Here( 1 );
exdt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );
exdt2 = Open( "$SAMPLE_DATA/Animals.jmp" );
Wait( 3 );
Close All( Data Tables, NoSave );

```

### Convert File Path

**Syntax:** path = Convert File Path( path, <absolute|relative>, <posix|windows>, <base( path )>, <search> )

**Description:** Returns the converted path.

```jsl

Names Default To Here( 1 );
For Each( {pv},
	{"HOME", "DOCUMENTS", "SAMPLE_DATA", "SAMPLE_IMPORT_DATA", "SAMPLE_SCRIPTS",
	"SAMPLE_IMAGES", "USER_APPDATA", "USER_JMPDATA", "MAPS", "USER_JMPDATA_ALL", "TEMP"},
	Write(
		pv || Repeat( " ", 20 - Length( pv ) ) || " => " || Convert File Path( "$" || pv )
		 || "\!N"
	)
);

```

### Copy Directory

**Syntax:** rc = Copy Directory( from, to, <recursive(0|1)> )

**Description:** Copies files from one directory to another, optionally copying subdirectories. The directory name will be created at the to-path and should not be part of the to-path. Returns 1 if the directory was copied or 0 if the directory was unable to be copied. Throws an error if the path is invalid or does not exist.

```jsl

Names Default To Here( 1 );
rc0 = Copy Directory( "$SAMPLE_DATA/Loss Function Templates", "$TEMP" );/* creates $TEMP/Loss Function Templates */ 
rc1 = File Exists( "$TEMP/Loss Function Templates/Normal.jmp" );
rc2 = Delete File( "$TEMP/Loss Function Templates/Normal.jmp" );
rc3 = File Exists( "$TEMP/Loss Function Templates/Normal.jmp" );
rc4 = Delete Directory( "$TEMP/Loss Function Templates" );
rc5 = Directory Exists( "$TEMP/Loss Function Templates" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) || " " ||
Char( rc4 ) || " " || Char( rc5 );/* 1 1 1 0 1 0 */

```

### Copy File

**Syntax:** rc = Copy File( from, to )

**Description:** Copies a file from the original file to a new file with the same or a different name. Specify a complete path and file name for the destination. Returns 1 if the file was copied or 0 if the file was unable to be copied. Throws an error if the path is invalid or does not exist. A file cannot be copied when either the from or to path is invalid, or if the to file already exists.

```jsl

Names Default To Here( 1 );
rc0 = File Exists( "$TEMP/x.jmp" );
rc1 = Copy File( "$SAMPLE_DATA/Loss Function Templates/Normal.jmp", "$TEMP/x.jmp" );
rc2 = File Exists( "$TEMP/x.jmp" );
rc3 = Delete File( "$TEMP/x.jmp" );
rc4 = File Exists( "$TEMP/x.jmp" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) || " " ||
Char( rc4 );/* 0 1 1 1 0 */

```

### Create Directory

**Syntax:** rc = Create Directory( path )

**Description:** Creates a directory. Returns 1 if directory was created. Returns 0 if the directory already exists or if JMP was unable to create the directory.

```jsl

Names Default To Here( 1 );
Delete Directory( "$TEMP/sub1" );
rc0 = Create Directory( "$TEMP/sub1/sub2/sub3" );
Save Text File( "$TEMP/sub1/sub2/sub3/temp.txt", "example text" );
date = Last Modification Date( "$TEMP/sub1/sub2/sub3/temp.txt" );
rc1 = Delete Directory( "$TEMP/sub1" );
rc2 = File Exists( "$TEMP/sub1/sub2/sub3/temp.txt" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " ||
Format( date, "ddmonyyyy:h:m:s" );/* 1 1 0 date:time */

```

### Create Excel Workbook

**Syntax:** Create Excel Workbook(<Workbook Name>, <{List of open tables}>, <Optional list of worksheet names> )

**Description:** Generate an Excel Workbook from open JMP Data Tables

**Example 1**

```jsl

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt2 = Open( "$SAMPLE_DATA/Abrasion.jmp" );
Create Excel Workbook( "$TEMP/MyWorkbook.xlsx", {dt1, dt2}, {"Big", "Abrasive"} );

```

**Example 2**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Open( "$SAMPLE_DATA/Abrasion.jmp" );
Create Excel Workbook(
	"$TEMP/MyWorkbook.xlsx",
	{"Big Class", "Abrasion"},
	{"Big", "Abrasive"}
);

```

### Creation Date

**Syntax:** date = Creation Date( path )

**Description:** Returns the creation date of a file or directory. Throws an error when path is invalid or does not exist.

```jsl

Names Default To Here( 1 );
Format( Creation Date( "$SAMPLE_DATA/Big Class.jmp" ), "ddmonyyyy:h:m:s" );

```

### Delete Directory

**Syntax:** rc = Delete Directory( path, <Allow Undo( boolean )> )

**Description:** Deletes a directory and its files and subdirectories. Returns 1 if the directory was deleted. Returns 0 if directory was unable to be deleted or the path is invalid.

```jsl

Names Default To Here( 1 );
Delete Directory( "$TEMP/sub1" );
rc0 = Create Directory( "$TEMP/sub1/sub2/sub3" );
Save Text File( "$TEMP/sub1/sub2/sub3/temp.txt", "example text" );
date = Last Modification Date( "$TEMP/sub1/sub2/sub3/temp.txt" );
rc1 = Delete Directory( "$TEMP/sub1" );
rc2 = File Exists( "$TEMP/sub1/sub2/sub3/temp.txt" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " ||
Format( date, "ddmonyyyy:h:m:s" );/* 1 1 0 date:time */

```

### Delete File

**Syntax:** rc = Delete File( path, <Allow Undo( boolean )> )

**Description:** Deletes a file. Returns 1 if the file was deleted. Returns 0 if file was unable to be deleted. Throws an error when path is invalid or does not exist.

```jsl

Names Default To Here( 1 );
rc0 = Copy File( "$SAMPLE_DATA/Loss Function Templates/Normal.jmp", "$TEMP/x.jmp" );
rc1 = File Exists( "$TEMP/x.jmp" );
rc2 = Delete File( "$TEMP/x.jmp" );
rc3 = File Exists( "$TEMP/x.jmp" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) /* 1 1 1 0 */;

```

### Directory Exists

**Syntax:** rc = Directory Exists( path )

**Description:** Determine whether the directory exists. Returns 1 if the path exists. Returns 0 if the path is invalid or does not exist.

```jsl

Names Default To Here( 1 );
If( Directory Exists( "$SAMPLE_DATA/Loss Function Templates" ),
	"ok",
	"missing!"
);

```

### File Exists

**Syntax:** rc = File Exists( path )

**Description:** Determine whether the file exists. Returns 1 if the file path exists. Returns 0 if the path is invalid or does not exist.

```jsl

Names Default To Here( 1 );
If( File Exists( "$SAMPLE_DATA/Big Class.jmp" ),
	"ok",
	"missing!"
);

```

### File Size

**Syntax:** size = File Size( path )

**Description:** Returns the size of the file at the given path. Returns missing when file path is invalid or does not exist.

```jsl

Names Default To Here( 1 );
File Size( "$SAMPLE_DATA/Big Class.jmp" );

```

### Files In Directory

**Syntax:** y = Files In Directory( "path", <recursive(0|1)>, <include hidden(0|1)> )

**Description:** Returns the list of file names in a directory that is specified by path. If the Recursive argument is not specified, directory names are included in the list.

**Example 1**

```jsl

Names Default To Here( 1 );
Files In Directory( "$HOME" );

```

**Example 2**

```jsl

Names Default To Here( 1 );
Filter Each( {fn}, Files In Directory( "$SAMPLE_DATA", recursive( 1 ) ),
	Contains( Lowercase( fn ), "stacked" )
);

```

### Find All

**Syntax:** Find All( <Project(title|index|box|window)>, Data Tables | Reports | Journals, <invisible | private> )

**Description:** Finds all open resources of a specific type: data tables, journals, or reports.



Only windows in the current project (or no project if not running the script in a project) will be included. To specify a project, use the optional Project() argument with a title, index, display box, or window object. Use Project(0) to specify no project when running the script in a project.

```jsl

Names Default To Here( 1 );

exdt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );
exdt2 = Open( "$SAMPLE_DATA/Animals.jmp" );
windows = Find All( Data Tables );
For( i = 1, i <= N Items( windows ), i++,
	Write( Char( windows[i] << Get Window Title ) || "\!N" )
);

```

### Get Default Directory

**Syntax:** y = Get Default Directory()

**Description:** Returns the JMP default directory, which is used as a base for subsequent relative paths. This path is the directory containing the currently executing script if the script is saved.

```jsl

Names Default To Here( 1 );
Show( Get Default Directory() );
Set Default Directory( "$SAMPLE_DATA" );
Show( Get Default Directory() );

```

### Get Excel Worksheets

**Syntax:** list = Get Excel Worksheets("filepath")

**Description:** Returns a list of worksheets within an Excel Workbook

```jsl

Names Default To Here( 1 );
sheetList = Get Excel Worksheets( "$SAMPLE_IMPORT_DATA\Team Results.xlsx" );
Show( sheetList );

```

### Get File Search Path

**Syntax:** y = Get File Search Path()

**Description:** Returns the current list of directories to search for opening files.

```jsl

Names Default To Here( 1 );
Get File Search Path();

```

### Get Path Variable

**Syntax:** value = Get Path Variable( name )

**Description:** Returns the value of a path variable, which is a name like SAMPLE_DATA that is substituted for when found in pathnames.

**Example 1**

```jsl

Names Default To Here( 1 );
Get Path Variable( "SAMPLE_DATA" );
/* try: SAMPLE_DATA, SAMPLE_IMPORT_DATA, SAMPLE_SCRIPTS
See full listing of Path Variables in the other example
See also Convert File Path() and Set Path Variable() */

```

**Listing**

```jsl

Names Default To Here( 1 );
// Run for a Path Variable listing
path vars = {"SAMPLE_DATA", "DESKTOP", "DOCUMENTS", "DOWNLOADS", "TEMP", "HOME",
"USER_APPDATA", "ALL_HOME", "BUILTIN_SCRIPTS", "SAMPLE_APPS", "SAMPLE_DASHBOARDS",
"SAMPLE_IMAGES", "SAMPLE_IMPORT_DATA", "SAMPLE_PROJECTS", "SAMPLE_SCRIPTS"};
path vars ||= Transform Each( {id}, Get Addins() << ID, Eval Insert( "ADDIN_HOME(^id^)" ) );
path vars = Filter Each( {var}, path vars, Directory Exists( Get Path Variable( var ) ) );

New Window( "Path Variables",
	<<Type( "Dialog" ),
	Outline Box( "Path Variables",
		H List Box(
			Button Box( "Open Paths",
				For Each( {row}, tbl << Get Selected Rows, {path},
					path = tbl[String Col Box( 2 )] << Get( row );
					Open( path );
				)
			),
			Button Box( "Copy Paths",
				If( N Items( tbl << Get Selected Rows ),
					Set Clipboard(
						Concat Items(
							Transform Each( {row}, tbl << Get Selected Rows, Output( "List" ),
								tbl[String Col Box( 2 )] << Get( row )
							),
							"\!N"
						)
					)
				)
			)
		),
		window:tbl = Table Box(
			String Col Box( "Variable", path vars ),
			String Col Box( "Path",
				Transform Each( {var}, path vars, Get Path Variable( var ) )
			),
			<<Set Selectable Rows
		)
	)
);

```

### Google Sheet Export

**Syntax:** Google Sheet Export(dt, Email(address), Spreadsheet(url|id) | New Spreadsheet(name), Sheet Name(name))

**Description:** Exports a Data Table to a new Google Spreadsheet or a new Sheet within an existing Google Spreadsheet.

```jsl

Names Default To Here( 1 );
email = "youremail@gmail.com"; //Replace this with your email
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Google Sheet Export(
	dt,
	Email( email ),
	New Spreadsheet( "JSL Example" ),
	Sheet Name( "Example 1" )
);

```

### Google Sheet Import

**Syntax:** Google Sheet Import(Email(address), Spreadsheet(url|id), <Sheets("sheetName1", ... "sheetNameN")>, <Sheet Settings( Has Column Headers(Boolean), Data Starts on Row(n), Cell Range(range), Import Cell Colors(Boolean), Supress Empty Columns(Boolean))>)

**Description:** Opens a Google Sheet file.

```jsl

Names Default To Here( 1 );
email = "youremail@gmail.com"; //Replace this with your email
spreadsheet =
"https://docs.google.com/spreadsheets/d/1AqV2ZkzzMtFrk-devlFdQW2Sb09ipOQaCQ1p0iho-iE/"; 
                                        
Google Sheet Import(
	Email( email ),
	Spreadsheet( spreadsheet ),
	Sheets( "Sheet1", "Sheet2" ),
	Sheet Settings(
		Has Column Headers( 0 ),
		Data Starts on Row( 1 ),
		Cell Range( "A1:C2" ),
		Import Cell Colors( 0 ),
		Suppress Empty Columns( 1 )
	)
);

```

### Is Directory

**Syntax:** rc = Is Directory( path )

**Description:** Determine if the given path is a directory. Returns 0 when path is invalid or does not exist.

```jsl

Names Default To Here( 1 );
rc0 = Is Directory( "$SAMPLE_DATA" );
rc1 = Is Directory( "$SAMPLE_DATA/Big Class.jmp" );
Char( rc0 ) || " " || Char( rc1 );/* 1 0 */

```

### Is Directory Writable

**Syntax:** rc = Is Directory Writable( path )

**Description:** Determine if the given directory path is writable. Returns 0 when path is invalid or does not exist.

```jsl

Names Default To Here( 1 );
Is Directory Writable( "$SAMPLE_DATA" );

```

### Is File

**Syntax:** rc = Is File( path )

**Description:** Determine if the given path is a file. Returns 0 when path is invalid or does not exist.

```jsl

Names Default To Here( 1 );
rc0 = Is File( "$SAMPLE_DATA" );
rc1 = Is File( "$SAMPLE_DATA/Big Class.jmp" );
Char( rc0 ) || " " || Char( rc1 );/* 0 1 */

```

### Is File Writable

**Syntax:** rc = Is File Writable( path )

**Description:** Determine if the given file path is writable. Returns 0 when path is invalid or does not exist.

```jsl

Names Default To Here( 1 );
Is File Writable( "$SAMPLE_DATA/Big Class.jmp" );

```

### JSON Literal

**Syntax:** l = JSON Literal( string )

**Description:** Returns a valid JSON Boolean or null constant value depending on the specification of the parameter.

```jsl

Names Default To Here( 1 );

myJSON =
"{ \!"myChar\!": \!"Character Value\!", \!"myNum\!": 12345, \!"myBool\!": true, \!"myOtherChar\!": \!"Another char value\!", \!"myNull\!": null, \!"x\!": 54321, \!"myOtherBool\!": false, \!"y\!": \!"Hello\!" }";
parsed = Parse JSON( myJSON );
x = parsed["myBool"];
Show( x );
If( x == JSON Literal( true ),
	Show( "Worked" ),
	Show( "Didn't work" )
);

```

### JSON To Data Table

**Syntax:** dt = JSON To Data Table( jsonstring, <Invisible( boolean ) | Private( boolean )>, <Guess(Stack(Boolean)|"Tall"|"Wide")>, <JSON Settings(...)> )

**Description:** Convert JSON text to a JMP data table

```jsl

Names Default To Here( 1 );
dt = JSON To Data Table(
	"[ { \!"name\!": \!"KATIE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 59, \!"weight\!": 95 }, { \!"name\!": \!"LOUISE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 61, \!"weight\!": 123 }, { \!"name\!": \!"JANE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 55, \!"weight\!": 74 } ]"
);

```

### JSON To List

**Syntax:** l = JSON To List( jsonstring )

**Description:** Convert JSON text to a JSL list representing the structure specified by the JSON data.

```jsl

Names Default To Here( 1 );
l = JSON To List(
	"[ { \!"name\!": \!"KATIE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 59, \!"weight\!": 95 }, { \!"name\!": \!"LOUISE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 61, \!"weight\!": 123 }, { \!"name\!": \!"JANE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 55, \!"weight\!": 74 } ]"
);
Show( l );

```

### Last Modification Date

**Syntax:** date = Last Modification Date( path )

**Description:** Returns the last modification date of a file or directory. Throws an error when path is invalid or does not exist.

```jsl

Names Default To Here( 1 );
Format( Last Modification Date( "$SAMPLE_DATA/Big Class.jmp" ), "ddmonyyyy:h:m:s" );

```

### Load Text File

**Syntax:** text = Load Text File( path, <Charset("best guess", <force("throw" | "alert" | "silent")>)>, <LineSeparator("\!N")>, <XMLParse>|<SASODSXML>|<JSON>|<BLOB( <readOffsetFromBegin(0)>|<readOffsetFromEnd(42)>, <readLength(2147483647)>, <base64Compressed( 1 /* 0: ascii~hex */)> )> )

**Description:** Reads a whole text file into a JSL variable. Load Text File() prompts for a file name. Load Text File( path ) returns a string. The XMLParse option converts XML into an expression tree. The SASODSXML parses as SAS ODS default XML. The [{JSON}] option converts JSON into an expression tree. The BLOB argument returns binary data in a JSL Blob variable; optional named parameters to BLOB enable reading a substring from the file.

```jsl

Names Default To Here( 1 );
ex = Load Text File(
	Get Path Variable( "sample_import_data" ) || "/animals.txt"
/*, Charset("ascii")*/
/*, LineSeparator("\!r\!n")*/
/*, BLOB*/
);
Word( 4, ex, " \!t\!n\!r" );

```

### Move Directory

**Syntax:** rc = Move Directory( from, to )

**Description:** Moves a directory from one place to another. Returns 1 if the directory was moved. Returns 0 if the directory was unable to be moved. Throws an error if the path is invalid or does not exist.

```jsl

Names Default To Here( 1 );
Delete Directory( "$TEMP/subB" );
Delete Directory( "$TEMP/Loss Function Templates" );
rc0 = Copy Directory( "$SAMPLE_DATA/Loss Function Templates", "$TEMP" );
Create Directory( "$TEMP/subB" );
rc1 = Move Directory( "$TEMP/Loss Function Templates", "$TEMP/subB" );
rc2 = Directory Exists( "$TEMP/Loss Function Templates" );
rc3 = Directory Exists( "$TEMP/subB" );
rc4 = Delete Directory( "$TEMP/subB" );
rc5 = Directory Exists( "$TEMP/subB" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) || " " ||
Char( rc4 ) || " " || Char( rc5 );/* 1 1 0 1 1 0 */

```

### Move File

**Syntax:** rc = Move File( from, to )

**Description:** Moves a file from one place to another. Returns 1 if the file was moved. Returns 0 if the file was unable to be moved. Throws an error when the path is invalid or does not exist.

```jsl

Names Default To Here( 1 );
If( File Exists( "$TEMP/y.jmp" ),
	Delete File( "$TEMP/y.jmp" )
);
rc0 = Copy File( "$SAMPLE_DATA/Loss Function Templates/Normal.jmp", "$TEMP/x.jmp" );
rc1 = Move File( "$TEMP/x.jmp", "$TEMP/y.jmp" );
rc2 = File Exists( "$TEMP/x.jmp" );
rc3 = File Exists( "$TEMP/y.jmp" );
rc4 = Delete File( "$TEMP/y.jmp" );
rc5 = File Exists( "$TEMP/y.jmp" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) || " " ||
Char( rc4 ) || " " || Char( rc5 );/* 1 1 0 1 1 0 */

```

### Open

**Syntax:** Open( filePath, <data table options | Excel import options | text import options | SAS import options | HTML import options | esriShapeFile import options | PDF import options | other file options > )

**Description:** Returns a reference to a data table or other JMP file or object created from a file. If no path is specified, the Open dialog appears. If a folder path is specified, the system file browser is opened and no object is returned. Refer to the Syntax Reference for a complete description of available options.

**Add-In**

```jsl

Names Default To Here( 1 );
/* Installing Add-In:
Open( Add-In to open,
    <Check For Updates( "never" | "startup" | "always")>, // "always" will check for updates at startup and while jmp is running
    <Update Prompt(0|1)>) // whether or not the add-in will silently update or prompt first */
Open( "$downloads\test.jmpaddin", Check For Updates( "always" ), Update Prompt( 1 ) );

```

**Data Table**

```jsl

Names Default To Here( 1 );
/* Data tables, other JMP files, external files:
   Open( filePath,
     <Invisible | Private>,
     <Select Columns( "col", ... )>,
     <Ignore Columns( "col", ... )>,
     <Add to Recent Files(bool)>,
     <Quarantine Action("Allow Scripts"|"Block Scripts"|"Do Not Open"|"Show Dialog")>
     <Force Refresh>,
     <Enable Filter Views(bool)>,
     <"file type">
   )
*/
//Basic data table open
dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );
//Data table open with some options
dt2 = Open( "$SAMPLE_DATA/Fitness.jmp", Select Columns( "Name", "Sex", "Age", "Weight" ) );

```

**Excel**

```jsl

Names Default To Here( 1 );
/* Excel files imported into a data table:
   Open( excelFilePath,
     <Worksheets( "sheet name" | {"sheet name", "sheet name", ...} | "n" )>,
     <Use for all sheets(0|1)>,
     <Concatenate Worksheets(0|1)>,
     <Create Concatenation Column(0|1)>,
     <Worksheet Settings( 0|1,
       Has Column Headers(0|1),
       Number of Rows in Headers(n),
       Headers Start on Row(n),
       Data Starts on Row(n),
       Data Starts on Column(n),
       Data Ends on Row(n),
       Data Ends on Column(n),
       Replicated Spanned Rows(0|1),
       Suppress Hidden Rows(0|1),
       Suppress Hidden Columns(0|1),
       Treat as Hierarchy(0|1)
     )>,
     <Invisible | Private>
   )
*/

/* Using the Excel Wizard dialog:
   Open("$SAMPLE_IMPORT_DATA/Bigclass.xlsx", "Excel Wizard");  
*/

dt = Open(
	"$SAMPLE_IMPORT_DATA/Team Results.xlsx",
	Worksheets( "Ungrouped Team Results" ),
	Worksheet Settings( Headers Start on Row( 3 ), Data Starts on Row( 4 ) )
);

```

**Folder**

```jsl

Names Default To Here( 1 );
/* Open of folder launches file browser */
Open( "$SAMPLE_DATA" );

```

**Other**

```jsl

Names Default To Here( 1 );
/* Other options:
   SAS File imported as a data table:
   Open( sasFilePath,
     <Invisible | Private>,
     <Use Labels for Var Names(0|1)>,
     <Password( "password" )>
   )
   
   SAS Transport File imported as a data table, members are separate tables within the larger file:
   Open( sasTransportFilePath,
     <Use Labels for Var Names(0|1)>,
     <Members({"Table1", "Table2"})>
   )
   
   HTML file imported as a data table:
   Open( htmlFilePath,
     <Invisible | Private>,
     <HTML Table(n, <ColumnNames(n)>, DataStarts(n)>)>
   )
   
   Get column names as a list for a JMP Data Table without opening the table:
   Open( jmpDataTableFilePath, 
     "Column Names Only"
   )
   
   esriShapeFile opened for use as a map shape data table:
   Open( esriShapeFilePath,
     <Invisible | Private>,
     Columns( Shape=numeric(n),
     Part=numeric(n),
     X=numeric(n),
     Y=numeric(n) ),
              Polygon Import Options(Simplification Factor(f), Geodesic(g))
   )
*/
//SAS Example:
dt1 = Open( "$SAMPLE_IMPORT_DATA/Bigclass.sas7bdat", Use Labels for Var Names( 1 ) );

// HTML Example:
dt2 = Open(
	"https://en.wikipedia.org/wiki/Black_Mountains_(North_Carolina)",
	HTML Table( 3, Column Names( 1 ), Data Starts( 2 ) )
);

// Column Names Only Example: 
colNames = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp", "Column Names Only" );

// SHP Shapefile Example with polygon simplification: 
Open(
	"$SAMPLE_IMPORT_DATA/parishes.shp",
	Polygon Import Options( Simplification Factor( 200 ), Geodesic( 1 ) )
);

```

**PDF**

```jsl

Names Default To Here( 1 );
/* PDF file imported as one or multiple data tables
open(pdfFilePath,
    PDF Tables(Table(<Name(name)>, Add Rows(Page(n | {page list}), <Header Rows(n)>, Rect(top, left, right, bottom), <RowBorders(n, ...)>, <Column Borders(n, ....)>), ...)) |
    PDF All Tables(< Combine(All | Matching Headers | None)>, <Minimum Rows(n)>, <Minimum Columns(n)>) |
    PDF Text(<Pages(n, ...)>, <sort>) |
    PDF Wizard
);*/
dt = Open( "$SAMPLE_DATA\big class.jmp" );
w = New Window( "test", Data Table Box( dt ) );
w << save picture( "$DOCUMENTS\test.pdf", pdf );
pdftable = Open( "$DOCUMENTS\test.pdf", PDF All Tables( Combine( all ) ) ); // just some of the rows
pdftable2 = Open(
	"$DOCUMENTS\test.pdf",
	PDF Tables( Table( Table Name( "test" ), Add Rows( Page( 1 ), Rect( 0, 0, 5, 3 ) ) ) )
);

```

**Picture**

```jsl

Names Default To Here( 1 );
/* Picture file imported as a picture object */
pic = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
New Window( "Picture", Outline Box( "Picture", Picture Box( pic ) ) );

```

**Text**

```jsl

Names Default To Here( 1 );
/* Text files imported into a data table:
   Open( textFilePath,
     <Invisible | Private>,
     CharSet("option") // "Best Guess", "utf-8", "utf-16", "us-ascii", "windows-1252", "x-max-roman", "x-mac-japanese", "shift-jis", "euc-jp", "utf-16be", "gb2312"
     <Number of Columns(n)>,
     <Columns(colName=colType(colWidth),... )>,// colType is Character|Numeric and colWidth is an integer specifying the width of the column
     <End Of Field (Tab|Space|Comma|Semicolon|Other|None)>,
     <EOF Other ("char")>,
     <End Of Line (CRLF|CR|LF|Semicolon|Other)>,
     <EOL Other ("char")>,
     <Strip Quotes|Strip Enclosing Quotes (0|1)>,
     <Labels|Table Contains Column Headers (0|1)>,
     <Year Rule|Two digit year rule ("decade start")>, // For example, if the earliest date is 1979, use "1970". If the earliest date is 2001, use "20xx".
     Treat Empty Columns as Numeric(0|1)
     Scan Whole File(0|1) // 1 means scan the whole file and 0 means scan for 5 seconds.
     <Column Names Start|Column Names are on line (n)>,
     <Data Starts|Data starts on line (n)>,
     <Lines to Read>, // a number
     <Use Apostrophe as Quotation Mark>,
     <CompressNumericColumns(0|1)>,
     <CompressCharacterColumns(0|1)>,
     <CompressAllowListCheck(0|1)>
   )
*/
dt = Open( "$SAMPLE_IMPORT_DATA/EOF_comma.txt", Table Contains Column Headers( 0 ) );

```

### Parse JSON

**Syntax:** l = Parse JSON( jsonstring )

**Description:** Convert JSON text to a JSL list or associative array representing the structure specified by the JSON data.

```jsl

Names Default To Here( 1 );
l = Parse JSON(
	"[ { \!"name\!": \!"KATIE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 59, \!"weight\!": 95 }, { \!"name\!": \!"LOUISE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 61, \!"weight\!": 123 }, { \!"name\!": \!"JANE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 55, \!"weight\!": 74 } ]"
);
Show( l );

```

### Pick Directory

**Syntax:** path = Pick Directory( <prompt>, <path>, <Show Files( boolean )> )

**Description:** Prompts the user with an Open Directory window, returning the pathname of the chosen directory. The optional prompt string is shown at the top of the window. Show Files can be any of the three arguments, and takes a Boolean argument. 1 shows files in the Pick Directory window, 0 does not. The default value is 0. The path string specifies the directory that the Pick Directory window initially displays. If you use the path string, it must follow the prompt string, but Show Files can be between them.

**Show Files**

```jsl

Names Default To Here( 1 );
Pick Directory( "Select a directory", "$DOCUMENTS", Show Files( 1 ) );

```

**Simple**

```jsl

Names Default To Here( 1 );
Pick Directory( "Select a directory" );

```

### Pick File

**Syntax:** path = Pick File( <prompt>, <initial directory>, <filterList>, <first filter>, <saveFlag=0|1>, <default file>, <multiple> )

**Description:** Prompts the user with an Open window, returning the pathname of the chosen file. The filterList argument is a list of strings of the form: "Label|suffix1;suffix2;...". The first filter argument specifies which filter is initially shown. The fifth argument indicates whether the window should function as a save (saveFlag = 1) or open (saveFlag = 0) window. The default file argument specifies the file that is initially selected. The multiple argument allows multiple files to be selected if saveFlag is 0.

**Example 1**

```jsl

Names Default To Here( 1 );
Pick File(
	"Select JMP File",
	"$DOCUMENTS",
	{"JMP Files|jmp;jsl;jrn", "All Files|*"},
	1,
	0,
	"newJmpFile.jmp"
);

```

**Example 2**

```jsl

Names Default To Here( 1 );
Files = Pick File(
	"Select JMP File",
	"$SAMPLE_DATA",
	{"JMP Files|jmp;jsl;jrn", "All Files|*"},
	1,
	0,
	"",
	"multiple"
);
For( i = 1, i <= N Items( Files ), i++,
	Try( Open( Files[i] ) )
);

```

**Example 3**

```jsl

Names Default To Here( 1 );
filename = Pick File(
	"Save As Text",
	"$DOCUMENTS",
	{"Text File|txt"},
	1,
	1, // Save Flag
	"export.txt"
);
If( Is Missing( filename ),
	Print( "Canceled" ),
	Save Text File( filename, "The quick brown fox" )
);

```

### Rename Directory

**Syntax:** rc = Rename Directory( old, new )

**Description:** Renames a directory without moving or copying it; the new name does NOT include a path. Returns 1 if the directory was renamed. Returns 0 if the directory was unable to be renamed or the path is invalid.

```jsl

Names Default To Here( 1 );
Delete Directory( "$TEMP/subD" );
Delete Directory( "$TEMP/Loss Function Templates" );
rc0 = Copy Directory( "$SAMPLE_DATA/Loss Function Templates", "$TEMP" );
rc1 = Rename Directory( "$TEMP/Loss Function Templates", "subD" /* NO PATH */ );
rc2 = Directory Exists( "$TEMP/Loss Function Templates" );
rc3 = Directory Exists( "$TEMP/subD" );
rc4 = Delete Directory( "$TEMP/subD" );
rc5 = Directory Exists( "$TEMP/subD" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) || " " ||
Char( rc4 ) || " " || Char( rc5 );/* 1 1 0 1 1 0 */

```

### Rename File

**Syntax:** rc = Rename File( old, new )

**Description:** Renames a file without moving or copying it; the new name does NOT include a path. Returns 1 if the file was renamed. Returns 0 if the file was unable to be renamed. Throws an error when path is invalid or does not exist.

```jsl

Names Default To Here( 1 );
rc0 = Copy File( "$SAMPLE_DATA/Loss Function Templates/Normal.jmp", "$TEMP/x.jmp" );
rc1 = Rename File( "$TEMP/x.jmp", "y.jmp" /* NO PATH */ );
rc2 = File Exists( "$TEMP/x.jmp" );
rc3 = File Exists( "$TEMP/y.jmp" );
rc4 = Delete File( "$TEMP/y.jmp" );
rc5 = File Exists( "$TEMP/y.jmp" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) || " " ||
Char( rc4 ) || " " || Char( rc5 );/* 1 1 0 1 1 0 */

```

### Save Text File

**Syntax:** f = Save Text File( path, text|blob, <mode("replace"|"append")> )

**Description:** Creates a text file with the file name that is specified by the path argument and contents specified by the text string argument. If the save is successful, the Save Text File() function returns the pathname of the created file.

```jsl

Names Default To Here( 1 );
Save Text File( "$TEMP/DeleteMe.txt", "The quick brown fox" );
Load Text File( "$TEMP/DeleteMe.txt" );

```

### Set Default Directory

**Syntax:** Set Default Directory( path )

**Description:** Sets the JMP default directory, which is used as a base for subsequent relative paths.

```jsl

Names Default To Here( 1 );
Set Default Directory( "$SAMPLE_DATA" );
Open( "Big Class.jmp" );

```

### Set File Search Path

**Syntax:** Set File Search Path(path | {list of paths})

**Description:** Sets the current list of directories to search for opening files. "." means the current directory.

```jsl

Names Default To Here( 1 );
Set File Search Path(
	{Convert File Path( "$SAMPLE_DATA/" ), Convert File Path( "$SAMPLE_DATA/Time Series/" )}
);
Show( Get File Search Path() );
Show( Convert File Path( "Air.jmp", search ) );
Show( Convert File Path( "Full of Air.jmp", search ) );
Show( Convert File Path( "Iris.jmp", search ) );

```

### Set Path Variable

**Syntax:** Set Path Variable( name, <value> )

**Description:** Sets a path variable, which is a name like SAMPLE_DATA that is substituted for when found in pathnames.

```jsl

Names Default To Here( 1 );
Set Path Variable( "SAMPLE_DATA", Get Path Variable( "SAMPLE_DATA" ) );

```

### TripleS Import

**Syntax:** TripleSImport( <path to xml file> )

**Description:** Opens Triple-S files. The Triple-S format comprises an xml or sss file and either a csv file or a dat/asc file. Both files must have the same name with the appropriate extension and must be in the same directory. Specify the xml or sss filepath to import the data.

```jsl

Names Default To Here( 1 );
TripleS Import(); //To get a file dialog to select the XML file
TripleS Import( "c:/MyFile.xml" ); //To open the Triple-S MyFile

```


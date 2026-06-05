# Associative Array

## Associative Array using New Namespace
> **Summary**: Processes retrieving and displaying earthquake data from the USGS website, utilizing HTTP requests and JSON parsing to generate a data table.

<!-- Keywords: #JMPScriptingLanguage, #HTTPRequest, #JSONParsing, #DataTable, #WebScraping -->

**Code**:
```jsl
// 
//https://earthquake.usgs.gov/fdsnws/event/1/
Names Default To Here( 1 );
New Namespace(
	"earthquake"
);
earthquake:request = New HTTP Request();
request_headers = Associative Array();
earthquake:request <<
Reset(
	Headers( request_headers ),
	Url(
		"https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-02-01&endtime=2019-03-04&minmagnitude=2"
	),
	Method( "Get" )
);
data = earthquake:request << Send();
dt = JSON To Data Table( data );
dt << show window();
```

**Code Explanation**:

1. Set default names.
2. Create new namespace.
3. Initialize HTTP request.
4. Create associative array for headers.
5. Reset HTTP request with headers and URL.
6. Set method to GET.
7. Send HTTP request.
8. Convert JSON response to data table.
9. Display data table window.



## Associative Array using Function
> **Summary**: Retrieve and filter enabled platforms for scriptable commands, excluding specific platforms and generating a list of platform samples.

<!-- Keywords: #JSLScriptingLanguage, #ScriptableCommands, #Filtering, #PresetSamples, #JMPScripting -->

**Code**:
```jsl
excluded_platforms = {"Tabulate", "DOE", "Model Dialog", "Formula Depot", "Diagram", "Fit Group", "Functional Data Explorer Group",
"Model Screening", "Data Feed", "Scheduler"};
get_preset_enabled_platforms = Function( {excluded_platforms},
	{Default Local},
	dt = Show Commands( "Scriptables" );
	r = (dt << Get Rows Where( :Command == "New Preset" ));
	platforms = dt:Component[r];
	Close( dt, NoSave );
	platforms = Associative Array( platforms );
	platforms << Remove( Associative Array( excluded_platforms ) );
	platforms << Get Keys;
);
get_preset_samples = Function( {platforms},
	{Default Local},
	plat_sample_file_list = Words( Load Text File( "$SAMPLE_DATA/../ Presets/Presets-en.jmppresets" ), "\!N," );
	plat_samples = [=> {}];
	current_plat = "";
	For Each( {line, l}, plat_sample_file_list,
		If( Starts With( Trim Whitespace( line ), "Label(" ),
			Try( Log Capture( label_arg = Arg( Parse( line ), 1 ) ), Continue() );
			If(
				Contains( platforms, label_arg ),
					current_plat = label_arg;
					plat_samples[current_plat] = {};
					Continue();,
				Starts With( Trim Whitespace( plat_sample_file_list[l + 1] ), "JSL" ),
					plat_samples[current_plat] ||= Eval List( {label_arg} )
			);
	
		)
	);
	plat_samples;
);
preset_enabled_platforms = get_preset_enabled_platforms( excluded_platforms );
plat_samples = get_preset_samples( preset_enabled_platforms );
```

**Code Explanation**:

1. Define excluded platforms.
2. Define function `get_preset_enabled_platforms`.
3. Retrieve scriptable commands.
4. Filter rows for new presets.
5. Extract component names.
6. Close scriptable commands window.
7. Convert components to associative array.
8. Remove excluded platforms.
9. Retrieve keys from filtered platforms.
10. Define function `get_preset_samples`.
11. Load platform preset file.
12. Initialize platform samples dictionary.
13. Iterate through preset file lines.
14. Check for label line.
15. Capture label argument.
16. Check if platform is enabled.
17. Set current platform.
18. Add platform to samples.
19. Check for JSL line.
20. Add sample to current platform.
21. Return platform samples.



### Example 1
> **Summary**: Calculates and stores mean and standard deviation values for specified columns in a data table, allowing for easy retrieval and analysis.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #ColumnCalculations, #AssociativeArrays, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
colNames = {"height", "weight"};
aa = Associative Array();
colAA = dt << New Column( "AA Expression", Expression );
For( i = 1, i <= N Items( colNames ), i++,
	aa[colNames[i]] = Eval List( {Col Mean( Column( colNames[i] ) ), Col Std Dev( Column( colNames[i] ) )} )
);
colAA << Set Each Value( aa );
colAA << Get contents;
```

**Code Explanation**:

1. Open data table.
2. Define column names.
3. Initialize associative array.
4. Create new column for expressions.
5. Loop through each column name.
6. Calculate mean and standard deviation.
7. Store results in associative array.
8. Assign associative array to column.
9. Retrieve column contents.
10. End script.



### Example 2
> **Summary**: Opens a data table and creation of an associative array to store window title information.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #AssociativeArrays, #WindowTitleHandling, #ScriptAutomation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
befAA = Associative Array( Window() << get window title );
```

**Code Explanation**:

1. Open data table.
2. Create associative array.
3. Store window title.



### Example 3
> **Summary**: Process of summarizing data by age, height, sex, and weight, generating a list of unique keys and filtering data tables based on 'PValues' for Windows hosts.

<!-- Keywords: #JSLScripting, #DataSummary, #AssociativeArrays, #Windows, #DataTableOperations -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bef aa = Associative Array( Window() << get window title );
obj = Summarize YByX( X( :age, :height ), Y( :sex, :weight ) );
aft aa = Associative Array( Window() << get window title );
aft aa << Remove( bef aa );
aftlst = aftaa << get keys;
For( i = 1, i <= N Items( aftlst ), i++,
	If( Host is( Windows ),
		If( Contains( aftlst[i], "PValues" ),
			dt1 = Data Table( aftlst[i] )
		),
		If( Contains( aftlst[i], "PValues" ),
			dt1 = Data Table( aftlst[i] )
		)
	)
);
mat1 = dt1 << get as matrix;
Close( dt1, no save );
Close( dt, no save );
ut relative epsilon = 1e-10;
```

**Code Explanation**:

1. Open data table.
2. Create associative array before summary.
3. Perform summary analysis.
4. Create associative array after summary.
5. Remove common elements from associative arrays.
6. Get unique keys from associative array.
7. Loop through unique keys.
8. Check if host is Windows.
9. Check if key contains "PValues".
10. Assign matching data table to dt1.



### Example 4
> **Summary**: Process of summarizing data by age, height, sex, and weight, generating a matrix with PValues for Windows hosts.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #AssociativeArrays, #SummaryYByXAnalysis, #WindowsHost -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bef aa = Associative Array( Window() << get window title );
obj = Summarize YByX( X( :age, :height ), Y( :sex, :weight ) );
aft aa = Associative Array( Window() << get window title );
aft aa << Remove( bef aa );
aftlst = aftaa << get keys;
For( i = 1, i <= N Items( aftlst ), i++,
	If( Host is( Windows ),
		If( Contains( aftlst[i], "PValues" ),
			dt1 = Data Table( aftlst[i] )
		),
		If( Contains( aftlst[i], "PValues" ),
			dt1 = Data Table( aftlst[i] )
		)
	)
);
mat1 = dt1 << get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Create associative array before analysis.
3. Perform summary Y by X analysis.
4. Create associative array after analysis.
5. Remove unchanged windows from associative array.
6. Get keys from associative array.
7. Loop through each key.
8. Check if host is Windows.
9. Check if key contains "PValues".
10. Assign data table to dt1 if condition met.



### Example 5
> **Summary**: Creates and manipulates various data structures, including associative arrays, matrices, lists, and dates, in JMP.

<!-- Keywords: #JMPScriptingLanguage, #DataStructures, #Automation, #PythonIntegration, #LogCapture -->

**Code**:
```jsl
PyGet_dt = Open("data_table.jmp");
PyGet_A = Associative Array( {"red", "blue"}, {1, 2} );
PyGet_X = 3.1415927;
PyGet_S = "Report Title";
PyGet_M = [1 2 3, 4 5 6, 7 8 9];
PyGet_L = {1.2, -2, 3, 124};
PyGet_L2 = {1, 2 + 3, [11 22]};
d1 = Open("data_table.jmp");
d2 = Open("data_table.jmp");
PyGet_L3 = {d1, d2};
PyGet_date = Informat( "07/15/2000 22:01:31", "Format Pattern", "<MM>/<DD>/<YYYY> <hh24>:<mm>:<ss>" );
s = Log Capture(
	Python Submit(
		"\[
import jmp
print( f"PyGet_B: {jmp.globals['PyGet_B']} ")
print( f"PyGet_dt: {jmp.globals['PyGet_dt']} ")
print( f"PyGet_A: {jmp.globals['PyGet_A']} ")
print( f"PyGet_X: {jmp.globals['PyGet_X']} ")
print( f"PyGet_S: {jmp.globals['PyGet_S']} ")
print( f"PyGet_M: {jmp.globals['PyGet_M']} ")
print( f"PyGet_L: {jmp.globals['PyGet_L']} ")
print( f"PyGet_L2: {jmp.globals['PyGet_L2']} ")
print( f"d1: {jmp.globals['d1']} ")
print( f"d2: {jmp.globals['d2']} ")
print( f"PyGet_L3: {jmp.globals['PyGet_L3']} ")
print( f"PyGet_date: {jmp.globals['PyGet_date']} ")
]\"
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create associative array PyGet_A.
3. Assign value to PyGet_X.
4. Assign string to PyGet_S.
5. Create matrix PyGet_M.
6. Create list PyGet_L.
7. Create nested list PyGet_L2.
8. Open data table;
9. Open data table;
10. Create list PyGet_L3 with data tables.
11. Convert string to date.
12. Capture log of Python script execution.



### Example 6
> **Summary**: Runs the creation and assignment of various data structures, including an associative array, matrix, list, and date format conversion.

<!-- Keywords: #JSLScripting, #DataStructures, #DateConversion, #AssociativeArrays, #MatrixOperations -->

**Code**:
```jsl
PyGet_dt = Open("data_table.jmp");
PyGet_A = Associative Array( {"red", "blue"}, {1, 2} );
PyGet_X = 3.1415927;
PyGet_S = "Report Title";
PyGet_M = [1 2 3, 4 5 6, 7 8 9];
PyGet_L = {1.2, -2, 3, 124};
PyGet_L2 = {1, 2 + 3, [11 22]};
d1 = Open("data_table.jmp");
d2 = Open("data_table.jmp");
PyGet_L3 = {d1, d2};
PyGet_date = Informat( "07/15/2000 22:01:31", "Format Pattern", "<MM>/<DD>/<YYYY> <hh24>:<mm>:<ss>" );
Names Default To Here( 0 );
s = Log Capture(
	Python Submit(
		"\[
import jmp
print( f"PyGet_B: {jmp.here['PyGet_B']} ")
print( f"PyGet_dt: {jmp.here['PyGet_dt']} ")
print( f"PyGet_A: {jmp.here['PyGet_A']} ")
print( f"PyGet_X: {jmp.here['PyGet_X']} ")
print( f"PyGet_S: {jmp.here['PyGet_S']} ")
print( f"PyGet_M: {jmp.here['PyGet_M']} ")
print( f"PyGet_L: {jmp.here['PyGet_L']} ")
print( f"PyGet_L2: {jmp.here['PyGet_L2']} ")
print( f"d1: {jmp.here['d1']} ")
print( f"d2: {jmp.here['d2']} ")
print( f"PyGet_L3: {jmp.here['PyGet_L3']} ")
print( f"PyGet_date: {jmp.here['PyGet_date']} ")
]\"
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create associative array PyGet_A.
3. Assign value to PyGet_X.
4. Assign string to PyGet_S.
5. Define matrix PyGet_M.
6. Define list PyGet_L.
7. Define complex list PyGet_L2.
8. Open data table;
9. Open data table;
10. Define list PyGet_L3 with datasets.
11. Convert date string to PyGet_date.
12. Disable name conflict warnings.
13. Capture log from Python script.
14. Execute Python script to print variables.



### Example 7
> **Summary**: Runs data table operations, including opening and closing a file, creating an associative array, assigning values to variables, and capturing Python log output.

<!-- Keywords: #JMPScriptingLanguage, #DataTableOperations, #AssociativeArrays, #VariableAssignment, #PythonLogCapture -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Close( dt );
A = Associative Array( {"red", "blue"}, {1, 2} );
X = 1;
S = "Report Title";
jmp var name = 25;
jmp var name b = 28;
Here:x = 1;
lx = Eval( Here:x );
::y = 2;
z = 3;
s = Log Capture( Python Submit( "print(jmp_var_name)" ) );
s = Log Capture( Python Submit( "print(jmp_var_name_b)" ) );
s = Log Capture( Python Submit( "print(localx)" ) );
s = Log Capture( Python Submit( "print(y)" ) );
```

**Code Explanation**:

1. Open data table.
2. Close the table.
3. Create associative array.
4. Assign value to X.
5. Assign string to S.
6. Define global variable.
7. Define another global variable.
8. Assign value to local variable.
9. Evaluate local variable.
10. Define global variable y.
11. Assign value to z.
12. Capture Python log output.
13. Capture Python log output again.
14. Capture Python log output for local variable.
15. Capture Python log output for global variable.



### Example 8
> **Summary**: Searches for Google News articles related to selected companies in a JMP data table, prompting users to confirm before proceeding with searches exceeding 10 items.

<!-- Keywords: #JSLScriptingLanguage, #GoogleNewsSearch, #DataTableOperations, #InteractiveFiltering, #WebAutomation -->

**Code**:
```jsl
Names Default To Here( 1 );
//search google news for selected items in a JMP table
//get list of selected companies into lstTerms for searching
dt = Current Data Table();
col = dt << Get Selected Columns;
col = col[1];
rows = dt << Get Selected Rows;
lstTerms = Associative Array( col[rows] ) << Get Keys;
//check if > 10 items are selected, prompt if so
If( N Items( lstTerms ) <= 10,
	proceed = 1,
	nw = New Window( "Confirm", <<Modal, Text Box( "> 10 items selected. Are you sure you want to proceed?" ) );
	If( nw == {Button( -1 )},
		proceed = 0,
		proceed = 1
	);
);
//loop through each search term and pull up google news
prtA = "https://www.google.com/search?q=";
prtC = "&tbm=nws";
If( proceed == 1,
	For Each( {i}, lstTerms,
		prtB = Char( Substitute( i, " ", "+" ) );
		Web( prtA || prtB || prtC );
	)
);
```

**Code Explanation**:

1. Open data table.
2. Get selected columns.
3. Select first column.
4. Get selected rows.
5. Extract selected company names.
6. Check if more than 10 items selected.
7. Prompt user if more than 10 items.
8. Confirm user's choice to proceed.
9. Define Google News search URL parts.
10. Loop through each company name.
11. Replace spaces with plus signs.
12. Construct full Google News search URL.
13. Open search URL in web browser.



## Associative Array using Python Connect
### Example 1
> **Summary**: Runs the connection to Python, sets variables, and captures logs for debugging purposes.

<!-- Keywords: #JSLScriptingLanguage, #PythonIntegration, #VariableManagement, #LogCapture, #Debugging -->

**Code**:
```jsl
Python Connect();
B = As Boolean( 1 );
dt = Open("data_table.jmp");
Close( dt );
A = Associative Array( {"red", "blue"}, {1, 2} );
X = 1;
S = "Report Title";
jmp var name = 25;
jmp var name b = 28;
Here:x = 1;
lx = Eval( Here:x );
::y = 2;
z = 3;
s = Log Capture( Python Submit( "print(jmp_var_name)" ) );
s = Log Capture( Python Submit( "print(jmp_var_name_b)" ) );
s = Log Capture( Python Submit( "print(localx)" ) );
s = Log Capture( Python Submit( "print(y)" ) );
s = Log Capture( Python Submit( "print(z)" ) );
```

**Code Explanation**:

1. Connects to Python.
2. Sets B to true.
3. Opens "data_table.jmp".
4. Closes the opened table.
5. Creates associative array A.
6. Assigns X value 1.
7. Sets S to "Report Title".
8. Defines jmp var name.
9. Defines jmp var name b.
10. Prints variables using Python.



### Example 2
> **Summary**: Runs Python connectivity and data manipulation tasks, including boolean conversion, data table opening and closing, associative array creation, and variable assignment.

<!-- Keywords: #JSLScriptingLanguage, #PythonConnectivity, #DataManipulation, #VariableAssignment, #AssociativeArrays -->

**Code**:
```jsl
pythonconn = Python Connect();
B = As Boolean( 1 );
dt = Open("data_table.jmp");
Close( dt );
A = Associative Array( {"red", "blue"}, {1, 2} );
X = 1;
S = "Report Title";
jmp var name = 25;
jmp var name b = 28;
Here:x = 1;
lx = Eval( Here:x );
::y = 2;
z = 3;
s = Log Capture( Python Submit( "print(jmp_var_name)" ) );
s = Log Capture( Python Submit( "print(jmp_var_name_b)" ) );
s = Log Capture( Python Submit( "print(localx)" ) );
s = Log Capture( Python Submit( "print(y)" ) );
s = Log Capture( Python Submit( "print(z)" ) );
```

**Code Explanation**:

1. Connect to Python.
2. Convert 1 to boolean.
3. Open data table;
4. Close the dataset.
5. Create associative array.
6. Assign integer value.
7. Assign string value.
8. Assign integer value to variable.
9. Assign another integer value to variable.
10. Assign integer value locally.



## Associative Array using Run Script
### Example 1
> **Summary**: Creates a web report by running Bivariate and Distribution scripts, adding images with varying paths, and indexing the report.

<!-- Keywords: #JSLScriptingLanguage, #WebReportGeneration, #BivariateAnalysis, #DistributionAnalysis, #ImageHandling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
biv = dt << Run Script( "Bivariate" );
webrpt = New Web Report();
webrpt << Add Report( biv );
imageInfo = Associative Array(
	["black_rhino_footprint_thumb1.png" => {"footprint", "path to image (full path)"}, "pi_thumb1.png" => {"pi",
	"path to image (relative path)"}, "tile_thumb1.png" => {"tile", "path to image (variable)"}, "progress_thumb1.png" => {"progress",
	"File argument (full path)"}, "windmap_thumb1.png" => {"windmap", "File argument (relative path)"}, "civilization_thumb1.png" =>
	{"civilization", "File argument (variable)"}]
);
webrpt << Add Image( "$SAMPLE_IMAGES/black rhino footprint.jpg", Title( "footprint" ), Description( "path to image (full path)" ) );
imagePath = "$SAMPLE_IMAGES/tile.jpg";
webrpt << Add Image( imagePath, Title( "tile" ), Description( "path to image (variable)" ) );
webrpt << Add Image( File( "$SAMPLE_IMAGES/progress.gif" ), Title( "progress" ), Description( "File argument (full path)" ) );
dis = dt << Run Script( "Distribution" );
webrpt << Add Report( dis );
webrpt << Index( Title( "Report" ), Description( "New Report" ) );
Close( dt, NoSave );
```

**Code Explanation**:

1. Open data table.
2. Run Bivariate script.
3. Create new web report.
4. Add Bivariate report to web report.
5. Define associative array for images.
6. Add image with full path to web report.
7. Assign image path variable.
8. Add image with variable path to web report.
9. Add image with File argument to web report.
10. Run Distribution script.
11. Add Distribution report to web report.
12. Index web report.
13. Close data table without saving.



### Example 2
> **Summary**: Creates a web report by running Bivariate and Distribution analyses, adding images with variable paths, and configuring path styles in JMP.

<!-- Keywords: #JMPScriptingLanguage, #WebReport, #BivariateAnalysis, #DistributionAnalysis, #PathStyles -->

**Code**:
```jsl
dt = Open("data_table.jmp");
biv = dt << Run Script( "Bivariate" );
webrpt = New Web Report();
webrpt << Add Report( biv );
imageInfo = Associative Array(
	["black_rhino_footprint_thumb1.png" => {"footprint", "path to image (full path)"}, "pi_thumb1.png" => {"pi",
	"path to image (relative path)"}, "tile_thumb1.png" => {"tile", "path to image (variable)"}, "progress_thumb1.png" => {"progress",
	"File argument (full path)"}, "windmap_thumb1.png" => {"windmap", "File argument (relative path)"}, "civilization_thumb1.png" =>
	{"civilization", "File argument (variable)"}]
);
webrpt << Add Image( "$SAMPLE_IMAGES/black rhino footprint.jpg", Title( "footprint" ), Description( "path to image (full path)" ) );
imagePath = "$SAMPLE_IMAGES/tile.jpg";
webrpt << Add Image( imagePath, Title( "tile" ), Description( "path to image (variable)" ) );
webrpt << Add Image( File( "$SAMPLE_IMAGES/progress.gif" ), Title( "progress" ), Description( "File argument (full path)" ) );
dis = dt << Run Script( "Distribution" );
webrpt << Add Report( dis );
webrpt << Index( Title( "Report" ), Description( "New Report" ) );
```

**Code Explanation**:

1. Open data table;
2. Run Bivariate analysis.
3. Create new web report.
4. Add Bivariate report to web report.
5. Define image information array.
6. Add first image to web report.
7. Add second image to web report using variable path.
8. Add third image to web report using file argument.
9. Run Distribution analysis.
10. Add Distribution report to web report.



## Associative Array using If
> **Summary**: Fits life by X with censor, utilizing a window-based interface to interactively select and configure censor codes.

<!-- Keywords: #JSLScripting, #FitLifeByX, #Censoring, #WindowBasedInterface, #InteractiveConfiguration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
If( Mod( Day Of Week( Today() ), 2 ),
	dt:Censor << Delete Property( "Value Labels" )
);
fitlifebyx( Censor( :censor ) );
wn = Window( "Fit Life by X" );
actvals = {};
For( i = 1, i <= wn[Popup Box( 2 )] << get menu count, i++,
	actvals[i] = wn[Popup Box( 2 )] << get menu text( i )
);
values = Design Nom( :Censor << get values, <<Levels )[2];
labels = :Censor << get value labels;
If( !Is Empty( labels ),
	lst = Arg( labels, 1 );
	aa = Associative Array();
	For( i = 1, i <= N Items( lst ), i++,
		aa[Arg( lst[i], 1 )] = Arg( lst[i], 2 )
	);
	For( i = 1, i <= N Items( values ), i++,
		values[i] = Char( aa[values[i]] )
	);
,
	For( i = 1, i <= N Items( values ), i++,
		values[i] = Char( values[i] )
	)
);
prefcode = Arg( Arg( Arg( Get  Preferences( FitLifeByX( Censor Code ) ), 1 ), 1 ), 1 );
ccodes = values;
wn << close window;
 Preference( FitLifeByX( Censor Code( "2.205" ) ) );
fitlifebyx( Censor( :Censor ) );
wn = Window( "Fit Life by X" );
actvals = {};
For( i = 1, i <= wn[Popup Box( 2 )] << get menu count, i++,
	actvals[i] = wn[Popup Box( 2 )] << get menu text( i )
);
values = Design Nom( :Censor << get values, <<Levels )[2];
labels = :Censor << get value labels;
If( !Is Empty( labels ),
	lst = Arg( labels, 1 );
	aa = Associative Array();
	For( i = 1, i <= N Items( lst ), i++,
		aa[Arg( lst[i], 1 )] = Arg( lst[i], 2 )
	);
	For( i = 1, i <= N Items( values ), i++,
		values[i] = Char( aa[values[i]] )
	);
,
	For( i = 1, i <= N Items( values ), i++,
		values[i] = Char( values[i] )
	)
);
prefcode = Arg( Arg( Arg( Get  Preferences( FitLifeByX( Censor Code ) ), 1 ), 1 ), 1 );
ccodes = values;
wn << close window;
```

**Code Explanation**:

1. Open data table.
2. Check if today is odd day.
3. Delete property if condition met.
4. Fit life by X with censor.
5. Get window reference.
6. Initialize active values list.
7. Loop through popup box items.
8. Store menu texts in list.
9. Get design nominal values.
10. Get value labels.
11. Check if labels are empty.
12. Create associative array from labels.
13. Convert values using associative array.
14. Get platform preferences.
15. Assign censor codes.
16. Close window.
17. Set new preference for censor code.
18. Repeat fit life by X with censor.
19. Get new window reference.
20. Initialize new active values list.
21. Loop through new popup box items.
22. Store new menu texts in list.
23. Get new design nominal values.
24. Get new value labels.
25. Check if new labels are empty.
26. Create new associative array from labels.
27. Convert new values using associative array.
28. Get new platform preferences.
29. Assign new censor codes.
30. Close window.



## Associative Array using Add Rows
> **Summary**: Creates a lookup table by selecting choices from two list boxes and adding corresponding rows to the 'lookuptable'.

<!-- Keywords: #JSLScriptingLanguage, #DataManipulation, #GUIWindow, #ListBoxes, #TableCreation -->

**Code**:
```jsl
Names Default To Here( 1 );
dt1 = New Table( "Table 1",
	Add Rows( 4 ),
	New Column( "Choice1", Character, "Nominal", Set Values( {"A", "B", "C", "D"} ) )
);
dt2 = New Table( "Table 2",
	Add Rows( 5 ),
	New Column( "Choice2", Character, "Nominal", Set Values( {"L", "M", "N", "O", "P"} ) )
);
dtlookup = New Table( "lookuptable",
	Add Rows( 0 ),
	New Column( "dt1choice", Character, "Nominal" ),
	New Column( "dt2choice", Character, "Nominal" )
);
lst1 = Associative Array( dt1:Choice1 ) << get keys;
lst2 = Associative Array( dt2:Choice2 ) << get keys;
nw = New Window( "Chooser",
	H List Box(
		lb1 = List Box( lst1, max selected( 1 ) ),
		lb2 = List Box( lst2, max selected( 1 ) ), 
		
	),
	Button Box( "Make Match",
		dtlookup << add rows(
			{dt1choice = (lb1 << get selected)[1], dt2choice = (lb2 << get selected)[1]}
		)
	)
);
```

**Code Explanation**:

1. Create new table "Table 1".
2. Add 4 rows to "Table 1".
3. Add column "Choice1" with values A, B, C, D.
4. Create new table "Table 2".
5. Add 5 rows to "Table 2".
6. Add column "Choice2" with values L, M, N, O, P.
7. Create new table "lookuptable".
8. Add columns "dt1choice" and "dt2choice".
9. Create GUI window "Chooser".
10. Add list boxes for "Choice1" and "Choice2" selections.




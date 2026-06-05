# Button Box

## Button Box using New Window
> **Summary**: Creates a new window with MATLAB control interface, allowing users to initiate and terminate connections, and display the status of the connection.

<!-- Keywords: #JMPScriptingLanguage, #MATLABInterface, #NewWindow, #ButtonBox, #TextBox -->

**Code**:
```jsl
// 
nw_matlab =
New Window( "MATLAB Control Interface",
	Button Box(
		"Initiate Matlab Connection",
		matconnect = MATLAB Connect();
		MATLAB Init();
		MATLAB Control( Visible( 1 ) );
		MATLAB Submit( "close all" );
		MATLAB Submit( "clear all" );
		MATLAB Submit( "whos" );
		tb_matlab_con_status <<
		set Text( " Connected" ) <<
		font color( "Green" );
	),
	V Center Box(
		H List Box(
			Text Box( "  Status:" ),
			tb_matlab_con_status =
			Text Box(
				" Not Connected",
				<<font color( "Red" )
			), 
		)
	),
	Button Box(
		"Terminate Matlab Connection",
		MATLAB Term();
		tb_matlab_con_status <<
		set Text( " Not Connected" ) <<
		font color( "Red" );
		
			
	), 
);
```

**Code Explanation**:

1. Create new window.
2. Add initiate button.
3. Connect to MATLAB.
4. Initialize MATLAB.
5. Show MATLAB control.
6. Close all MATLAB figures.
7. Clear all MATLAB variables.
8. Display MATLAB workspace.
9. Update status text.
10. Set status color to green.
11. Add status display.
12. Add terminate button.
13. Terminate MATLAB connection.
14. Update status text.
15. Set status color to red.



## Button Box using Column
### Example 1
> **Summary**: Records state values in a data table, changing 'AL' and 'WY' to blank, and sets the combo box in the Recode window to the third option.

<!-- Keywords: #JSLScripting, #DataTableManipulation, #RecodeOperation, #ComboBoxControl, #-SpecificActions -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( "state" ) << Set Selected;
recodeObj = dt << Recode( ‚ÄúReturn‚Äù );
recodeObj << Change Value( "AL", " " );
recodeObj << Change Value( "WY", " " );
wrc = Window( "Recode - State" );
wrc[Combo Box( 1 )] << Set( 3 );
If( Host is( "windows" ),
	wrc[Button Box( 4 )] << Click(),
	wrc[Button Box( 6 )] << Click()
);
```

**Code Explanation**:

1. Open data table.
2. Select state column.
3. Initiate recode operation.
4. Change AL to blank.
5. Change WY to blank.
6. Access Recode window.
7. Set combo box to third option.
8. Check host operating system.
9. Click OK button for Windows.
10. Click OK button for non-Windows.



### Example 2
> **Summary**: Runs the recoding and window configuration process for a specific data table, replacing missing values with -25.5 and setting combo box and button values based on the host operating system.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #RecodeOperation, #WindowConfiguration, #ConditionalLogic -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, "Longitude" ) << Set Selected;
recodeObj = dt << Recode( ‚ÄúReturn‚Äù );
recodeObj << Change Value( ., -25.5 );
wrc = Window( "Recode - Longitude" );
wrc[Combo Box( 1 )] << Set( 3 );
If( Host is( "windows" ),
	wrc[Button Box( 4 )] << Click(),
	wrc[Button Box( 6 )] << Click()
);
long = Column( dt, "Longitude" )[19];
```

**Code Explanation**:

1. Open data table.
2. Select "Longitude" column.
3. Initiate recode operation.
4. Replace missing values with -25.5.
5. Access Recode window.
6. Set combo box value to 3.
7. Check host operating system.
8. Click appropriate button based on OS.
9. Retrieve value from "Longitude" column at row 19.



### Example 3
> **Summary**: Recoding process for 'Return' and sets values in number column edit boxes for 'Recode - Date' and 'Recode - Date/Time' windows.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #RecodeObject, #WindowControl, #ConditionalLogic -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, "Date" ) << Set Selected;
Column( dt, "Date/Time" ) << Set Selected;
recodeObj = dt << Recode( ‚ÄúReturn‚Äù );
recodeObj << Change Value( 2881983600, 2913606000 );
recodeObj << Change Value( 2881990800, 2913613200 );
wrc1 = Window( "Recode - Date" );
wrc1[Number Col Edit Box( 1 )] << Set Values( [2981958400, 2982044800, 2982131200, 2982217600, 2982304000] );
wrc2 = Window( "Recode - Date/Time" );
wrc2[Number Col Edit Box( 1 )] << Set Values(
	[2981983600, 2981990800, 2981998000, 2982005200, 2982012400, 2882019600, 2882026800, 2882034000, 2882070000, 2882077200, 2882084400,
	2882091600, 2882098800, 2882106000, 2882113200, 2882120400, 2882156400, 2882163600, 2882170800, 2882178000, 2882185200, 2882192400,
	2882199600, 2882206800, 2882242800, 2882250000, 2882257200, 2882264400, 2882271600, 2882278800, 2882286000, 2882293200, 2882329200,
	2882336400, 2882343600, 2882350800, 2882358000, 2882365200, 2882372400, 2882379600]
);
wrc1[Combo Box( 1 )] << Set( 3 );
If( Host is( "windows" ),
	wrc1[Button Box( 4 )] << Click(),
	wrc1[Button Box( 6 )] << Click()
);
wrc2[Combo Box( 1 )] << Set( 3 );
If( Host is( "windows" ),
	wrc2[Button Box( 4 )] << Click(),
	wrc2[Button Box( 6 )] << Click()
);
date1 = Column( dt, "Date" ) << Get Values;
date2 = Column( dt, "Date/Time" ) << Get Values;
```

**Code Explanation**:

1. Open data table.
2. Select "Date" column.
3. Select "Date/Time" column.
4. Initiate recoding for "Return".
5. Change specific value in recode object.
6. Change another specific value in recode object.
7. Access "Recode - Date" window.
8. Set values in number column edit box.
9. Access "Recode - Date/Time" window.
10. Set multiple values in number column edit box.



### Example 4
> **Summary**: Recoding process for the 'Return' column based on the selected values in the 'Sex' column, and configures a Recode window with specific settings.

<!-- Keywords: #JSLScriptingLanguage, #RecodeWindow, #ColumnSelection, #ConditionalLogic, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, "Sex" ) << Set Selected;
recodeObj = dt << Recode( ‚ÄúReturn‚Äù );
recodeObj << Change Value( "F", "B" );
wrc1 = Window( "Recode - sex" );
wrc1[String Col Edit Box( 1 )] << Set Values( {"B", "A"} );
wrc1[Combo Box( 1 )] << Set( 3 );
If( Host is( "windows" ),
	wrc1[Button Box( 4 )] << Click(),
	wrc1[Button Box( 6 )] << Click()
);
```

**Code Explanation**:

1. Open data table.
2. Select "Sex" column.
3. Initiate recode process.
4. Change "F" to "B".
5. Access Recode window.
6. Set new values for recoding.
7. Select recode method.
8. Check host operating system.
9. Click appropriate button on Windows.
10. Click appropriate button on non-Windows.



### Example 5
> **Summary**: Runs the recoding and selection of columns in a JMP data table, utilizing the Recode function to change missing values and interactively selecting columns for deletion.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #RecodeFunction, #ColumnSelection, #InteractiveFeatures -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, "Longitude" ) << Set Selected;
recodeObj = dt << Recode( ‚ÄúReturn‚Äù );
recodeObj << Change Value( ., -25.5 );
wrc = Window( "Recode - Longitude" );
wrc[Combo Box( 1 )] << Set( 3 );
dt << Select Columns( :Direction );
dt << Delete columns();
If( Host is( "windows" ),
	wrc[Button Box( 4 )] << Click(),
	wrc[Button Box( 6 )] << Click()
);
long = Column( dt, "Longitude" )[19];
```

**Code Explanation**:

1. Open data table.
2. Select "Longitude" column.
3. Initiate recode operation.
4. Change missing values to -25.5.
5. Access Recode window.
6. Set combo box to third option.
7. Select "Direction" column.
8. Delete selected column.
9. Check host operating system.
10. Click appropriate button based on OS.



## Button Box using Run Script
> **Summary**: Process of running a Bivariate script, recoding values, and configuring path diagram properties in JMP.

<!-- Keywords: #JMPScriptingLanguage, #BivariateAnalysis, #PathDiagrams, #DataRecoding, #Automation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
biv = dt << Run Script( "Bivariate" );
biv << Automatic Recalc( 1 );
Column( dt, "Height" ) << Set Selected;
recodeObj = dt << Recode( ‚ÄúReturn‚Äù );
recodeObj << Change Value( 51, 998 );
wrc = Window( "Recode - height" );
wrc[Combo Box( 1 )] << Set( 3 );
If( Host is( "windows" ),
	wrc[Button Box( 4 )] << Click(),
	wrc[Button Box( 6 )] << Click()
);
dt << Clear Column Selection;
bivMat = Report( biv )["Summary of Fit"][Table Box( 1 )] << Get as Matrix;
```

**Code Explanation**:

1. Open data table.
2. Run Bivariate script.
3. Enable automatic recalculation.
4. Select Height column.
5. Initiate Recode platform.
6. Change value 51 to 998.
7. Access Recode window.
8. Set combo box to option 3.
9. Click appropriate button based on host OS.
10. Clear column selection.
11. Extract Summary of Fit matrix.



## Button Box using Window
### Example 1
> **Summary**: Concatenates data tables using the Tables:Concatenate menu in JMP, with options to match all columns and append new data.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManipulation, #Concatenation, #WindowHandler, #InteractiveFeatures -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
Main Menu( "Tables:Concatenate" );
w = Window( "Concatenate" );
w[listboxbox( 1 )] << Set Selected( 1, 1 );
w[Button Box( 1 )] << Click;
w[checkboxbox( 1 )] << Set( 1, 1 );
w[checkboxbox( 2 )] << Set( 1, 1 );
w[checkboxbox( 3 )] << Set( 1, 1 );
w[Button Box( 3 )] << click;
```

**Code Explanation**:

1. Open data table;
2. Access Tables:Concatenate menu.
3. Open Concatenate window.
4. Select first item in listbox.
5. Click OK button.
6. Check Match All Columns option.
7. Check Append option.
8. Check Use Source Data Table Names option.
9. Click Submit button.



### Example 2
> **Summary**: Concatenates two data tables using the Concatenate option in JMP, with options to include all columns, remove duplicates, and sort by original order.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManipulation, #Concatenation, #WindowHandler, #InteractiveInterface -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
dt2 = Open("data_table.jmp");
Main Menu( "Tables:Concatenate" );
w = Window( "Concatenate" );
w[listboxbox( 1 )] << Set Selected( 1, 1 );
w[Button Box( 1 )] << Click;
w[checkboxbox( 1 )] << Set( 1, 1 );
w[checkboxbox( 2 )] << Set( 1, 1 );
w[checkboxbox( 3 )] << Set( 1, 1 );
w[Button Box( 3 )] << click;
```

**Code Explanation**:

1. Open data table;
2. Open data table;
3. Access Concatenate option.
4. Select Concatenate window.
5. Set first listbox selection.
6. Click OK button.
7. Enable Include All Columns.
8. Enable Remove Duplicates.
9. Enable Sort by Original Order.
10. Click Concatenate button.



### Example 3
> **Summary**: Concatenates two data tables and retrieves listbox items in a JMP script.

<!-- Keywords: #JMPScriptingLanguage, #DataTableConcatenation, #WindowHandler, #ListboxItems, #JSLCode -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
dt2 = Open("data_table.jmp");
Main Menu( "Tables:Concatenate" );
w = Window( "Concatenate" );
w[Button Box( 5 )] << Click;
lblist = w[listboxbox( 1 )] << Get Items;
```

**Code Explanation**:

1. Open data table;
2. Open data table;
3. Access Tables:Concatenate menu.
4. Open Concatenate window.
5. Click OK button.
6. Retrieve listbox items.



## Button Box using Collapse Whitespace
> **Summary**: Creates and modifies data table columns, including setting formulas and logging operations.

<!-- Keywords: #JSLScripting, #DataTableManipulation, #FormulaSetting, #LogCapture, #ColumnCreation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
testLog = Collapse Whitespace( Trim( Log Capture( dt << New Column( "bad formula", numeric, Formula( :weight + :height2 ) ) ) ) );
dt << New Column( "bad formula 2" );
testLog = Collapse Whitespace( Trim( Log Capture( Column( dt, "bad formula 2" ) << Set Formula( :weight2 + :height3 ) ) ) );
Close( dt, "nosave" );
Delete Symbols( foo );
log = "";
dt = New Table( "d", Add Rows( 10 ), New Column( "x", Set Values( 1 :: 10 ) ) );
log = Collapse Whitespace( Log Capture( Column( "X" ) << Set Formula( If( Mod( Row(), 2 ) != 0, Foo(), 0 ) ) ) );
Column( "X" ) << Set Selected( 1 );
Main Menu( "Cols:Column Info" );
colInfo = Window( "x" );
colInfo[Button Box( 6 )] << Click;
log = Collapse Whitespace( Log Capture( Column( "X" ) << Set Formula( 2 ) ) );
Column( "X" ) << Set Selected( 1 );
Main Menu( "Cols:Column Info" );
colInfo = Window( "x" );
colInfo[Button Box( 6 )] << Click;
Close( dt, "nosave" );
log = "";
dt = New Table( "d", Add Rows( 10 ), New Column( "x", Set Formula( 2 ) ) );
dt:x << Ignore Errors( 1 );
Column( "X" ) << Set Selected( 1 );
Main Menu( "Cols:Column Info" );
colInfo = Window( "x" );
colInfo[Button Box( 6 )] << Click;
log = Collapse Whitespace( Log Capture( Column( "X" ) << Set Formula( If( Mod( Row(), 2 ) != 0, Foo(), 0 ) ) ) );
dt:x << Ignore Errors( 0 );
Column( "X" ) << Set Selected( 1 );
Main Menu( "Cols:Column Info" );
colInfo = Window( "x" );
colInfo[Button Box( 6 )] << Click;
log = Collapse Whitespace( Log Capture( Column( "X" ) << Set Formula( If( Mod( Row(), 2 ) != 1, Foo(), 1 ) ) ) );
```

**Code Explanation**:

1. Open data table.
2. Create new column "bad formula".
3. Set formula for "bad formula".
4. Log creation and formula setting.
5. Create another new column "bad formula 2".
6. Set formula for "bad formula 2".
7. Log formula setting.
8. Close table without saving.
9. Delete symbol "foo".
10. Initialize log variable.



## Button Box using Pick Directory
> **Summary**: Filters and selects files in a directory, allowing users to search for specific file names and open or save multiple files.

<!-- Keywords: #JSLScriptingLanguage, #FileFiltering, #DirectoryNavigation, #UserInterfaceAutomation, #JMP -->

**Code**:
```jsl
Names Default To Here( 1 );
//folder = Pick Directory ("Pick a Directory", "$SAMPLE_DATA");
folder = Get Default Directory();  //search scripts in this folder
filter_items = Function( {this, searchText},
	{filtered_items, i}, 
	// only attempt to filter if there is any text
	If( searchText != "", 
		// new list for groups that match searchText
		filtered_items = {};
		// Check if each group matches the given text
		For Each( {i}, 1 :: N Items( lstFilteredFiles ), 
			// Insert to our list if it contains our search text (case insensitive)
			If( Contains( Lowercase( lstFilteredFiles[i] ), Lowercase( searchText ) ),
				Insert Into( filtered_items, lstFilteredFiles[i] )
			)
		);
	, 
	// else show all groups
		filtered_items = lstJournals
	);
	lb << Set Items( filtered_items );
);		// end filter_items function
lstFiles = Files In Directory( folder );
lstFilteredFiles = lstFiles;
/*lstExtensions = {};
For Each( {i}, lstFiles, Insert Into( lstExtensions,  Word( -1, i, "." ) ) );
lstExtensions = associative array (lstExtensions) << Get Keys;*/
nw = New Window( "Files in Folder:",
	//text box ("Demo Journals: " || char(n items (lstJournals))),
	H List Box (
		Text Box( " Filter:" ),
		teb = Text Edit Box( "", <<set width( 200 ), <<set text changed( filter_items ) ),
		Button Box( "", <<set icon( "DebuggerDeleteBreakpoint" ), <<Set Script( teb << set text( "" ); filter_items (lb, "") ) ),
		
	),
	lb = List Box( lstFilteredFiles, width( 400 ) ),
	H List Box(
		Button Box( "Open",
			lstsel = lb << Get Selected;
			For Each( {i}, lstsel, Open( "$DEMOS/Scripts/" || i ) );
		)
		
		
		
	)
);
```

**Code Explanation**:

1. Set default names location.
2. Get default directory.
3. Define filter_items function.
4. Initialize filtered_items list.
5. Loop through lstFilteredFiles.
6. Check if file contains search text.
7. Add matching files to filtered_items.
8. Set ListBox items to filtered_items.
9. Get list of files in directory.
10. Create new window with TextBox, TextEditBox, Button, ListBox, and Buttons.




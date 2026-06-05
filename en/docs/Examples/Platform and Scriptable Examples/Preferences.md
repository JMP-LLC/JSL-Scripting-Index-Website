# Preferences

> **Summary**: Sets platform preferences and defines MATLAB installation paths for a seamless integration with JMP.

<!-- Keywords: #JMPScriptingLanguage, #MATLABIntegration, #Preferences, #JSLCode, #TechnicalDocumentation -->

**Code**:
```jsl
// 
// Change me to the PATH and name of your MATLAB installation.
 Preferences(
	PathVar(
		MATLABROOT32(
			"C:\Program Files (x86)\MATLAB\R2013a"
		),
		MATLABROOT(
			"C:\Program Files\MATLAB\R2013a"
		)
	)
);
//Test out the connection, returns 0 if successful. 
/*MATLAB Init();
MATLAB Term ();*/;
```

**Code Explanation**:

1. Set platform preferences.
2. Define MATLABROOT32 path.
3. Define MATLABROOT path.
4. Assign MATLAB installation paths.



### Example 1
> **Summary**: This JSL script adds two color themes to the JMP platform, defining 'Seaborn' as a qualitative theme with 10 colors and 'Seaborn Blues' as a sequential theme with 6 colors.

<!-- Keywords: #JMPScriptingLanguage, #ColorThemes, #QualitativeColors, #SequentialColors, #JMP -->

**Code**:
```jsl
// 
Preferences(
	Add Color Theme(
		{"Seaborn", {"Qualitative"}, {{76,
		114, 176}, {221, 132, 82}, {85,
		168, 104}, {196, 78, 82}, {129,
		114, 179}, {147, 120, 96}, {218,
		139, 195}, {140, 140, 140}, {204,
		185, 116}, {100, 181, 205}}}
	),
	Add Color Theme(
		{"Seaborn Blues", {"Sequential"},
		{{218, 232, 245}, {186, 214, 234},
		{136, 190, 220}, {83, 157, 204},
		{42, 122, 185}, {11, 85, 159}}}
	)
);
```

**Code Explanation**:

1. Preferences command begins.
2. Adds "Seaborn" color theme.
3. Defines "Qualitative" color type.
4. Lists 10 color codes.
5. Adds "Seaborn Blues" color theme.
6. Defines "Sequential" color type.
7. Lists 6 color codes.
8. Preferences command ends.



### Example 2
> **Summary**: This script sets default names, enables header statistics display, forces character statistics display, and opens a data table in JMP.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #Preferences, #ExperimentalDataTableGUI, #Scripting -->

**Code**:
```jsl
Names Default To Here( 1 );
Preferences( (Header Stats( Show( 1 ), Force Char Stats( 1 ) )), Set( Enable Experimental Data Table GUI( 1 ) ) );
dat1 = Open("data_table.jmp");
```

**Code Explanation**:

1. Set default names to current script.
2. Enable header statistics display.
3. Force character statistics display.
4. Enable experimental data table GUI.
5. Open data table;



### Example 3
> **Summary**: This script sets default names scope, defines color constants, and configures summary graph preferences. It then opens a data table and selects each row in the first 49 rows.

<!-- Keywords: #JSLScriptingLanguage, #SummaryGraphs, #DataTableManipulation, #RowSelection, #Preferences -->

**Code**:
```jsl
Names Default To Here( 1 );
c = 0.9;
Preferences(
	Show Summary Graphs Below Column Names( 1 ),
	Summary Graph Continuous Color( RGB Color( c, 0, 0 ) ),
	Summary Graph Continuous Missing Color( RGB Color( 0, 0, c ) ),
	Summary Graph Size Ordered Color( RGB Color( 0, c, 0 ) ),
	Summary Graph Name Ordered Color( RGB Color( 0, c, c ) ),
	Summary Graph Other Color( RGB Color( c, c, 0 ) ), 
);
Open("data_table.jmp");
For( i = 1, i < 50, i++,
	Row State( i ) = Selected State( 1 )
);
```

**Code Explanation**:

1. Set default names scope.
2. Define color constant.
3. Set preferences for summary graphs.
4. Open data table;
5. Loop through first 49 rows.
6. Select each row.



### Example 4
> **Summary**: Sets preferences for summary graphs, defines color variables, and opens a data table. It then selects the first 49 rows.

<!-- Keywords: #JMPScriptingLanguage, #SummaryGraphs, #DataTable, #ColorVariables, #RowSelection -->

**Code**:
```jsl
Names Default To Here( 1 );
c = 0.9;
d = 0.5;
Preferences(
	Show Summary Graphs Below Column Names( 1 ),
	Summary Graph Continuous Color( RGB Color( c, 0, 0 ) ),
	Summary Graph Continuous Missing Color( RGB Color( 0, 0, c ) ),
	Summary Graph Size Ordered Color( RGB Color( 0, c, 0 ) ),
	Summary Graph Name Ordered Color( RGB Color( 0, c, c ) ),
	Summary Graph Other Color( RGB Color( c, c, 0 ) ),
	Summary Graph Continuous Highlight Color( RGB Color( d, 0, 0 ) ),
	Summary Graph Continuous Missing Highlight Color( RGB Color( 0, 0, d ) ),
	Summary Graph Size Ordered Highlight Color( RGB Color( 0, d, 0 ) ),
	Summary Graph Name Ordered Highlight Color( RGB Color( 0, d, d ) ),
	Summary Graph Other Highlight Color( RGB Color( d, d, 0 ) ), 
);
Open("data_table.jmp");
For( i = 1, i < 50, i++,
	Row State( i ) = Selected State( 1 )
);
```

**Code Explanation**:

1. Set default names.
2. Define color variable c.
3. Define color variable d.
4. Set preferences for summary graphs.
5. Set continuous color for summary graphs.
6. Set continuous missing color for summary graphs.
7. Set size ordered color for summary graphs.
8. Set name ordered color for summary graphs.
9. Set other color for summary graphs.
10. Set continuous highlight color for summary graphs.
11. Set continuous missing highlight color for summary graphs.
12. Set size ordered highlight color for summary graphs.
13. Set name ordered highlight color for summary graphs.
14. Set other highlight color for summary graphs.
15. Open data table.
16. Select first 49 rows.



### Example 5
> **Summary**: This script sets default names and configures summary graphs in JMP, specifying colors for continuous, missing, size-ordered, name-ordered, and other data points. It then opens a data table.

<!-- Keywords: #JMPScriptingLanguage, #SummaryGraphs, #DataVisualization, #Preferences, #DataTable -->

**Code**:
```jsl
Names Default To Here( 1 );
Preferences(
	Show Summary Graphs Below Column Names( 1 ),
	Summary Graph Continuous Color( 37 ),
	Summary Graph Continuous Missing Color( 41 ),
	Summary Graph Size Ordered Color( 35 ),
	Summary Graph Name Ordered Color( 36 ),
	Summary Graph Other Color( 70 ),
	Summary Graph Continuous Highlight Color( 151 ),
	Summary Graph Continuous Missing Highlight Color( 153 ),
	Summary Graph Size Ordered Highlight Color( 155 ),
	Summary Graph Name Ordered Highlight Color( 157 ),
	Summary Graph Other Highlight Color( 159 ), 
);
Open("data_table.jmp");
```

**Code Explanation**:

1. Set default names.
2. Configure summary graphs.
3. Set continuous color.
4. Set missing color.
5. Set size ordered color.
6. Set name ordered color.
7. Set other color.
8. Set continuous highlight color.
9. Set missing highlight color.
10. Set size ordered highlight color.
11. Set name ordered highlight color.
12. Set other highlight color.
13. Open data table.



### Example 6
> **Summary**: This script sets default name scope, configures summary graph preferences, and opens a data table in JMP. It enables the display of summary graphs below column names, specifies mosaic and run chart types for categorical and continuous variables respectively, and defines custom colors for these graphs.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #SummaryGraphs, #Preferences, #Scripting -->

**Code**:
```jsl
Names Default To Here( 1 );
Preferences(
	Show Summary Graphs Below Column Names( 1 ),
	Categorical graph type( "Mosaic" ),
	Continuous graph type( "Run Chart" ),
	Summary Graph Run Chart Color( "medium light orange" ),
	Summary Graph Other Color( "Medium Light Green" ), 
);
dt = Open("data_table.jmp");
```

**Code Explanation**:

1. Set default name scope.
2. Configure summary graphs preferences.
3. Open data table;



### Example 7
> **Summary**: This script sets default name scope, configures preferences for graph types and colors, opens a data table, and resizes the window to optimize visualization.

<!-- Keywords: #JSLScriptingLanguage, #DataVisualization, #Preferences, #DataTableManagement, #GraphCustomization -->

**Code**:
```jsl
Names Default To Here( 1 );
Preferences(
	Show Summary Graphs Below Column Names( 1 ),
	Categorical graph type( "Run Chart" ),
	Continuous graph type( "Heat Map" ),
	Summary Graph Run Chart Color( "medium light red" ), 
);
dt = Open("data_table.jmp");
dt << set window size( 800, 500 );
```

**Code Explanation**:

1. Set default name scope.
2. Configure preferences.
3. Open data table.
4. Resize data table window.



### Example 8
> **Summary**: Opens a data table and sets preferences to default.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #Preferences, #SemanticFormatting, #ExampleNCBFormat -->

**Code**:
```jsl
dat1 = Open("data_table.jmp");
Preferences( Factory Default );
```

**Code Explanation**:

1. Open data table.
2. Set preferences to default.



## Set Preferences 
> **Summary**: Sets preferences for JMP, customizing table and graph visualizations to enhance data exploration.

<!-- Keywords: #JMPScriptingLanguage, #TableCustomization, #GraphVisualization, #DataExploration, #JSLPreferences -->

**Code**:
```jsl
// 
Set Preferences(
	Underline Table Headings( 0 ),
	Shade Table Headings( 0 ),
	Table Heading Column Borders( 0 ),
	Table Column Borders( 0 ),
	Table Column Group Borders( 1 ),
	Table Row Borders( 0 ),
	Shade Alternate Table Rows( 0 ),
	Shade Table Cells( 0 ),
	Interactive HTML Color(
		"Light Background"
	),
	Graph Marker size( "XL" ),
	Graph Marker( "Dot" ),
	Graph Marker Theme( "Standard" ),
	Marker Selection Mode(
		"Unselected Faded"
	),
	Marker Label Color Style(
		"Marker Color"
	),
	Add Color Theme(
		{"Seaborn", 8193, {{76, 114, 176},
		{221, 132, 82}, {85, 168, 104},
		{196, 78, 82}, {129, 114, 179},
		{147, 120, 96}, {218, 139, 195},
		{140, 140, 140}, {204, 185, 116},
		{100, 181, 205}}}
	),
	Add Color Theme(
		{"Seaborn Blues", 2051, {{218,
		232, 245}, {186, 214, 234}, {136,
		190, 220}, {83, 157, 204}, {42,
		122, 185}, {11, 85, 159}}}
	),
	Continuous Color Theme(
		{"Seaborn Blues", 2051, {{218,
		232, 245}, {186, 214, 234}, {136,
		190, 220}, {83, 157, 204}, {42,
		122, 185}, {11, 85, 159}}}
	),
	Categorical Color Theme(
		{"Seaborn", 8193, {{76, 114, 176},
		{221, 132, 82}, {85, 168, 104},
		{196, 78, 82}, {129, 114, 179},
		{147, 120, 96}, {218, 139, 195},
		{140, 140, 140}, {204, 185, 116},
		{100, 181, 205}}}
	),
	Graph Height( 350 ),
	Fill Selection Mode(
		"Selected Patterned"
	),
	Fill Selection Color( 3 ),
	Graph Border( 0 ),
	Frame Border( 0 ),
	Inside Ticks( 0 ),
	Major Grid Lines( 1 ),
	Minor Grid Lines( 0 ),
	Line Width( 3 ),
	Axis Title Above( 0 ),
	Hide Overlapping Labels( 1 ),
	Major Grid Line Color( 2 ),
	Minor Grid Line Color( 32 ),
	Frame Color( 2 ),
	Background Color( -16777215 ),
	Graph Background Color( -15395570 ),
	Histogram Color( {187, 219, 251} )
);
```

**Code Explanation**:

1. Set preferences for JMP.
2. Disable table heading underline.
3. Disable table heading shading.
4. Disable table column borders.
5. Enable table column group borders.
6. Disable table row borders.
7. Disable alternate row shading.
8. Disable cell shading.
9. Set interactive HTML color.
10. Set graph marker size.



## Get Preferences 
> **Summary**: Process of opening a data table, running a logistic script, and restoring user preferences.

<!-- Keywords: #JSLScriptingLanguage, #LogisticRegression, #DataTableManagement, #UserPreferences, #ScriptAutomation -->

**Code**:
```jsl
fn = "c:\temp\test.htm";
Usr_Preference = Get Preferences();
Preferences( Axis Title Above( 1 ) );
dt under test = Open("data_table.jmp");
obj = dt under test << run script( "Logistic" );
Usr_Preference;
```

**Code Explanation**:

1. Define file path.
2. Save user preferences.
3. Set axis title above.
4. Open data table.
5. Run logistic script.
6. Restore user preferences.



## Preferences using Add Column Properties
> **Summary**: Configures data table properties, including adding Link ID and Link Reference columns, retrieving column properties, and disabling virtual join auto-open and linked column name usage.

<!-- Keywords: #JSLScriptingLanguage, #DataTableConfiguration, #LinkColumns, #ColumnProperties, #VirtualJoin -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
dt1:Person << Add Column Properties( Set Property( "Link ID", 1 ) );
dt2 = Open("data_table.jmp");
dt2:Person << Add Column Properties( Set Property( "Link Reference", Reference Table( dt1 ) ) );
prefs1 = dt1:Person << Get column properties();
Preferences( Virtual Join Auto Open Linked table( 0 ), Virtual Join Use Linked Column Name( 0 ) );
```

**Code Explanation**:

1. Open data table.
2. Add Link ID property to Person column.
3. Open data table.
4. Add Link Reference property to Person column.
5. Retrieve Person column properties.
6. Disable auto-open linked tables.
7. Disable using linked column names.



## Pref 
### Example 1
> **Summary**: Creates and formats new columns in a JMP data table, utilizing thousands separators for specific columns.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManipulation, #ColumnFormatting, #ThousandsSeparator, #JSLScript -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Pref( Use thousands separator( 0 ) );
dt << New Column( "Column 6", Numeric, continuous, Formula( :height * 10000 ) );
no_sep = Char( :Column 6 << Get Format() );
dt:Column 6 << Format( "Best", Use Thousands Separator, 10 );
yes_sep = Char( :Column 6 << Get Format() );
Pref( Use thousands separator( 1 ) );
dt << New Column( "Column 7", Numeric, continuous, Formula( :height * 10000 ) );
no12_sep = Char( :Column 7 << Get Format() );
dt:Column 7 << Format( "Best", Use Thousands Separator( 0 ), 10 );
yes0_sep = Char( :Column 7 << Get Format() );
current preferences = Get Preferences();
Close( dt, nosave );
initial preferences = Get Preferences();
initial pref = Get Preferences( Use thousands separator );
```

**Code Explanation**:

1. Open data table.
2. Disable thousands separator.
3. Create new column "Column 6".
4. Get format of "Column 6".
5. Set format for "Column 6" with separator.
6. Get format of "Column 6" again.
7. Enable thousands separator.
8. Create new column "Column 7".
9. Get format of "Column 7".
10. Set format for "Column 7" without separator.
11. Get format of "Column 7" again.
12. Save current preferences.
13. Close data table without saving.
14. Save initial preferences.
15. Get initial preference for thousands separator.



### Example 2
> **Summary**: Creates and formats new columns in a JMP data table, utilizing formulas and thousands separators.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManipulation, #ColumnFormatting, #ThousandsSeparator, #FormulaCreation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Pref( Use thousands separator( 0 ) );
dt << New Column( "Column 6", Numeric, continuous, Formula( :height * 10000 ) );
no_sep = Char( :Column 6 << Get Format() );
dt:Column 6 << Format( "Best", Use Thousands Separator, 10 );
yes_sep = Char( :Column 6 << Get Format() );
Pref( Use thousands separator( 1 ) );
dt << New Column( "Column 7", Numeric, continuous, Formula( :height * 10000 ) );
no12_sep = Char( :Column 7 << Get Format() );
dt:Column 7 << Format( "Best", Use Thousands Separator( 0 ), 10 );
yes0_sep = Char( :Column 7 << Get Format() );
current preferences = Get Preferences();
```

**Code Explanation**:

1. Open data table;
2. Disable thousands separator.
3. Create new column "Column 6".
4. Set formula for "Column 6".
5. Get format of "Column 6".
6. Format "Column 6" with thousands separator.
7. Get updated format of "Column 6".
8. Enable thousands separator.
9. Create new column "Column 7".
10. Set formula for "Column 7".
11. Get format of "Column 7".
12. Format "Column 7" without thousands separator.
13. Get updated format of "Column 7".
14. Retrieve current preferences.



## Preferences using Char
### Example 1
> **Summary**: Formats and retrieves column formats in a JMP data table, including disabling and re-enabling thousands separators.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #ColumnFormatting, #PreferencesManagement, #ScriptAutomation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
f = Char( Column( "sales($M)" ) << Get Format );
f = Char( Column( "#Employees" ) << Get Format );
Pref( Use thousands separator( 0 ) );
Column( "sales($M)" ) << Format( "use thousands separator" );
Column( "#Employees" ) << Format( "use thousands separator" );
f = Char( Column( "sales($M)" ) << Get Format );
f = Char( Column( "#Employees" ) << Get Format );
post pref = Get Preferences( Use thousands separator );
 
current preferences = Get Preferences();
Close( dt, nosave );
initial preferences = Get Preferences();
Preferences( Factory Default );
default preferences = Get Preferences();
Preferences( Data Filter Select Check( 1 ), Data Filter Show Check( 0 ), Data Filter Include Check( 0 ) );
now prefs = Get Preferences();
```

**Code Explanation**:

1. Open data table;
2. Retrieve sales($M) column format.
3. Retrieve #Employees column format.
4. Disable thousands separator preference.
5. Apply thousands separator to sales($M).
6. Apply thousands separator to #Employees.
7. Retrieve updated sales($M) format.
8. Retrieve updated #Employees format.
9. Get post-pref use thousands separator.
10. Get current preferences.
11. Close dataset without saving.
12. Get initial preferences.
13. Set factory default preferences.
14. Get default preferences.
15. Modify data filter preferences.
16. Get current preferences again.



### Example 2
> **Summary**: Formats sales and employee data in a JMP data table, utilizing thousands separators and retrieving preferences.

<!-- Keywords: #JMPScriptingLanguage, #DataTableFormatting, #ThousandsSeparator, #PreferencesManagement, #ScriptAutomation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
f = Char( Column( "sales($M)" ) << Get Format );
f = Char( Column( "#Employees" ) << Get Format );
Pref( Use thousands separator( 0 ) );
Column( "sales($M)" ) << Format( "use thousands separator" );
Column( "#Employees" ) << Format( "use thousands separator" );
f = Char( Column( "sales($M)" ) << Get Format );
f = Char( Column( "#Employees" ) << Get Format );
post pref = Get Preferences( Use thousands separator );
current preferences = Get Preferences();
```

**Code Explanation**:

1. Open data table;
2. Get sales format.
3. Get employees format.
4. Disable thousands separator.
5. Set sales format to thousands.
6. Set employees format to thousands.
7. Get updated sales format.
8. Get updated employees format.
9. Retrieve post-pref settings.
10. Get current preferences.



## Preferences using Delete Rows
> **Summary**: Prepares data by opening a data table, deleting rows and columns, and configuring export settings.

<!-- Keywords: #JSLScriptingLanguage, #DataPreparation, #ExportSettings, #DeleteRows, #DeleteColumns -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Delete Rows( 121 :: 240 );
dt << Delete Columns( "Phase" );
Preferences( Export Settings( End Of Field( Other( "/" ) ) ) );
```

**Code Explanation**:

1. Open data table;
2. Delete rows 121 to 240.
3. Remove "Phase" column.
4. Set export field delimiter to "/".




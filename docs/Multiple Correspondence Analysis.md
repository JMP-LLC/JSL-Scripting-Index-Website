# Multiple Correspondence Analysis



### 3D Correspondence Analysis

**Syntax:** obj<<"3D Correspondence Analysis"n(1)

**Description:** Displays or hides a 3D correspondence plot. 3D Correspondence Analysis requires a minimum of four levels for each of the X and Y variables.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Multiple Correspondence Analysis( Y( :country, :size, :type ) );
obj << "3D Correspondence Analysis"n( 1 );

```

### Action

**Syntax:** obj << Action

**Description:** All-purpose trapdoor within a platform to insert expressions to evaluate. Temporarily sets the DisplayBox and DataTable contexts to the Platform.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**Description:** Apply a previously created preset to the object, updating the options and customizations to match the saved settings.

**JMP Version Added:** 18

**Anonymous preset**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

**Search by name**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**Search within folder(s)**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

### Automatic Recalc

**Syntax:** obj << Automatic Recalc( state=0|1 )

**Description:** Redoes the analysis automatically for exclude and data changes. If the Automatic Recalc option is turned on, you should consider using Wait(0) commands to ensure that the exclude and data changes take effect before the recalculation.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
dt << Multiple Correspondence Analysis(
	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),
	X( :Manufacturer )
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**Syntax:** obj << Broadcast(message)

**Description:** Broadcasts a message to a platform. If return results from individual objects are tables, they are concatenated if possible, and the final format is identical to either the result from the Save Combined Table option in a Table Box or the result from the Concatenate option using a Source column. Other than those, results are stored in a list and returned.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

### By

**Syntax:** obj = Multiple Correspondence Analysis(...<By( column(s) )>...)

**Description:** Performs a separate analysis for each level of the specified column.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Multiple Correspondence Analysis(
	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),
	X( :Manufacturer ),
	By( _bycol )
);

```

### Cochran's Q Test

**Syntax:** obj<<Cochran&apos;s Q Test(1)

**Description:** Shows or hides Cochran&apos;s Q test.

```

Names Default To Here( 1 );
dt = New Table( "Drug_Qtest",
	Add Rows( 8 ),
	New Column( "Subject", Numeric, "Continuous", Set Values( [1, 2, 3, 4, 5, 6, 7, 8] ) ),
	New Column( "drug_A",
		Character,
		"Nominal",
		Set Values( {"F", "F", "F", "F", "U", "U", "U", "U"} )
	),
	New Column( "drug_B",
		Character,
		"Nominal",
		Set Values( {"F", "F", "U", "U", "F", "F", "U", "U"} )
	),
	New Column( "drug_C",
		Character,
		"Nominal",
		Set Values( {"F", "U", "F", "U", "F", "U", "F", "U"} )
	),
	New Column( "Count", Numeric, "Continuous", Set Values( [6, 16, 2, 4, 2, 4, 6, 6] ) )
);
obj = dt << Multiple Correspondence Analysis(
	Y( :drug_A, :drug_B, :drug_C ),
	X( :Subject ),
	Freq( :Count )
);
obj << Cochran's Q Test( 1 );

```

### Column Switcher

**Syntax:** obj << Column Switcher(column reference, {column reference, ...}, < Title(title) >, < Close Outline(0|1) >, < Retain Axis Settings(0|1) >, < Layout(0|1) >)

**Description:** Adds a control panel for changing the platform&apos;s variables

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

### Copy ByGroup Script

**Syntax:** obj << Copy ByGroup Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Multiple Correspondence Analysis(
	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),
	X( :Manufacturer ),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj << Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
dt << Multiple Correspondence Analysis(
	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),
	X( :Manufacturer )
);
obj << Copy Script;

```

### Cross Table

**Syntax:** obj << Cross Table( state=0|1 )

**Description:** Displays or hides a Contingency or Burt table. On by default.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Multiple Correspondence Analysis( Y( :country, :size, :type ) );
obj << Cross Table( 0 );

```

### Cross Table of Supplementary Columns

**Syntax:** obj << Cross Table of Supplementary Columns( state=0|1 )

**Description:** Displays or hides a Cross Table of Supplementary Columns.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/US Regional Population.jmp" );
obj = dt << Multiple Correspondence Analysis(
	Y( :Region ),
	X( :Year ),
	Freq( :Population ),
	Supplementary ID( :ID )
);
obj << Cross Table of Supplementary Columns( 0 );

```

### Cross Table of Supplementary Rows

**Syntax:** obj << Cross Table of Supplementary Rows( state=0|1 )

**Description:** Displays or hides a Cross Table of Supplementary Rows.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/US Regional Population.jmp" );
obj = dt << Multiple Correspondence Analysis(
	Y( :Year ),
	X( :Region ),
	Freq( :Population ),
	Supplementary ID( :ID )
);
obj << Cross Table of Supplementary Rows( 0 );

```

### Data Table Window

**Syntax:** obj << Data Table Window

**Description:** Move the data table window for this analysis to the front.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
dt << Multiple Correspondence Analysis(
	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),
	X( :Manufacturer )
);
obj << Data Table Window;

```

### Factor

**Syntax:** obj = Multiple Correspondence Analysis(...<Factor( column(s) )>...)

**Description:** Specifies one or more categorical columns to be used as factor, or explanatory, variables.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
dt << Multiple Correspondence Analysis(
	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),
	X( :Manufacturer )
);

```

### Freq

**Syntax:** obj = Multiple Correspondence Analysis(...<Freq( column )>...)

**Description:** Specifies a column whose values assign a frequency to each row for the analysis.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
dt << Multiple Correspondence Analysis(
	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),
	X( :Manufacturer ),
	Freq( _freqcol )
);

```

### Get By Levels

**Syntax:** obj << Get By Levels

**Description:** Returns an associative array mapping the by group columns to their values.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**Syntax:** obj << Get ByGroup Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Multiple Correspondence Analysis(
	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),
	X( :Manufacturer ),
	By( _bycol )
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Syntax:** obj << Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

**General**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
dt << Multiple Correspondence Analysis(
	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),
	X( :Manufacturer )
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Platform with Filter**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),
	Local Data Filter(
		Add Filter(
			columns( :age, :sex, :height ),
			Where( :age == {12, 13, 14} ),
			Where( :sex == "F" ),
			Where( :height >= 55 ),
			Display( :age, N Items( 6 ) )
		)
	)
);
New Window( "platform boxes",
	H List Box(
		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),
		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )
	)
);

```

### Get Data Table

**Syntax:** obj << Get Data Table

**Description:** Returns a reference to the data table.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
dt << Multiple Correspondence Analysis(
	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),
	X( :Manufacturer )
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**Syntax:** obj << Get Group Platform

**Description:** Return the Group Platform object if this platform is part of a Group. Otherwise, returns Empty().

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

### Get Script

**Syntax:** obj << Get Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
dt << Multiple Correspondence Analysis(
	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),
	X( :Manufacturer )
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntax:** obj << Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
dt << Multiple Correspondence Analysis(
	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),
	X( :Manufacturer )
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntax:** obj << Get Timing

**Description:** Times the platform launch.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
dt << Multiple Correspondence Analysis(
	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),
	X( :Manufacturer )
);
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**Syntax:** obj << Get Web Support

**Description:** Return a number indicating the level of Interactive HTML support for the display object. 1 means some or all elements are supported. 0 means no support.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Where Expr

**Syntax:** obj << Get Where Expr

**Description:** Returns the Where expression for the data subset, if the platform was launched with By() or Where(). Otherwise, returns Empty()

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Description:** Ignores the current settings of the platform&apos;s preferences. The message is ignored when sent to the platform after creation.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Local Data Filter

**Syntax:** obj << Local Data Filter

**Description:** To filter data to specific groups or ranges, but local to this platform

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);

```

### Mosaic Plot

**Syntax:** obj << Mosaic Plot( state=0|1 )

**Description:** Displays or hides a mosaic plot of the data.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Multiple Correspondence Analysis( Y( :country ), X( :size ) );
obj << Mosaic Plot( 1 );

```

### Multiple Correspondence Analysis

**Syntax:** Multiple Correspondence Analysis( Y( columns ), X( columns ) )

**Description:** Identifies associations between the levels of categorical variables. Multiple Correspondence Analysis is analogous to principal components analysis for categorical data.

**Example 1**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
dt << Multiple Correspondence Analysis(
	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),
	X( :Manufacturer )
);

```

**Example 2**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Multiple Correspondence Analysis( Y( :country, :size, :type ) );

```

### New JSL Preset

**Syntax:** New JSL Preset( preset )

**Description:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

### New Preset

**Syntax:** obj = New Preset()

**Description:** Create an anonymous preset representing the options and customizations applied to the object. This object can be passed to Apply Preset to copy the settings to another object of the same type.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Paste Local Data Filter

**Syntax:** obj << Paste Local Data Filter

**Description:** Apply the local data filter from the clipboard to the current report.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
filter = dist << Local Data Filter(
	Add Filter( columns( :Region ), Where( :Region == "MW" ) )
);
filter << Copy Local Data Filter;
dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );
Wait( 1 );
dist2 << Paste Local Data Filter;

```

### Proportional marker size

**Syntax:** obj<<Proportional Marker Size(1)

**Description:** Sets the size of each marker in the correspondence plot to be proportional to the frequency of the corresponding group.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Multiple Correspondence Analysis( Y( :country, :size, :type ) );
obj << Proportional Marker Size( 1 );

```

### Redo Analysis

**Syntax:** obj << Redo Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
dt << Multiple Correspondence Analysis(
	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),
	X( :Manufacturer )
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntax:** obj << Redo ByGroup Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Multiple Correspondence Analysis(
	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),
	X( :Manufacturer ),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Syntax:** obj << Relaunch Analysis

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
dt << Multiple Correspondence Analysis(
	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),
	X( :Manufacturer )
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntax:** obj << Relaunch ByGroup

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Multiple Correspondence Analysis(
	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),
	X( :Manufacturer ),
	By( _bycol )
);
obj[1] << Relaunch ByGroup;

```

### Remove Column Switcher

**Syntax:** obj << Remove Column Switcher

**Description:** Removes the most recent Column Switcher that has been added to the platform.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
Wait( 2 );
obj << Remove Column Switcher;

```

### Remove Local Data Filter

**Syntax:** obj << Remove Local Data Filter

**Description:** If a local data filter has been created, this removes it and restores the platform to use all the data in the data table directly

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dist = dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);
Wait( 2 );
dist << remove local data filter;

```

### Render Preset

**Syntax:** Render Preset( preset )

**Description:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**Syntax:** obj << Report;

Report( obj )

**Description:** Returns a reference to the report object.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
dt << Multiple Correspondence Analysis(
	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),
	X( :Manufacturer )
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntax:** obj << Report View( "Full"|"Summary" )

**Description:** The report view determines the level of detail visible in a platform report. Full shows all of the detail, while Summary shows only select content, dependent on the platform. For customized behavior, display boxes support a <<Set Summary Behavior message.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
dt << Multiple Correspondence Analysis(
	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),
	X( :Manufacturer )
);
obj << Report View( "Summary" );

```

### Response

**Syntax:** obj = Multiple Correspondence Analysis(...Response( column(s) )...)

**Description:** Specifies the categorical columns to be analyzed.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
dt << Multiple Correspondence Analysis(
	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),
	X( :Manufacturer )
);

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description:** Creates a JSL script to produce this analysis, and save it as a table property in the data table. You can specify a name for the script. The Append Suffix option appends a numeric suffix to the script name, which differentiates the script from an existing script with the same name. The Prompt option prompts the user to specify a script name. The Replace option replaces an existing script with the same name.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Multiple Correspondence Analysis(
	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),
	X( :Manufacturer ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj << Save ByGroup Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Multiple Correspondence Analysis(
	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),
	X( :Manufacturer ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj << Save ByGroup Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Multiple Correspondence Analysis(
	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),
	X( :Manufacturer ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Coordinate Formula

**Syntax:** obj<<Save Coordinates

**Description:** Saves the coordinate formula for each observation to a new column in the data table.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Multiple Correspondence Analysis( Y( :country, :size, :type ) );
obj << Save Coordinate Formula( 2 );

```

### Save Coordinates

**Syntax:** obj<<Save Coordinates

**Description:** Saves column or row coordinates.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Multiple Correspondence Analysis( Y( :country, :size, :type ) );
obj << Save Coordinates;

```

### Save Script for All Objects

**Syntax:** obj << Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
dt << Multiple Correspondence Analysis(
	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),
	X( :Manufacturer )
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj << Save Script for All Objects To Data Table( <name> )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Multiple Correspondence Analysis(
	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),
	X( :Manufacturer ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Multiple Correspondence Analysis(
	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),
	X( :Manufacturer ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
dt << Multiple Correspondence Analysis(
	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),
	X( :Manufacturer )
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj << Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
dt << Multiple Correspondence Analysis(
	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),
	X( :Manufacturer )
);
obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj << Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
dt << Multiple Correspondence Analysis(
	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),
	X( :Manufacturer )
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj << Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
dt << Multiple Correspondence Analysis(
	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),
	X( :Manufacturer )
);
obj << Save Script to Script Window;

```

### Select dimension

**Syntax:** obj << Select dimension( <specify dimension to plot> )

**Description:** Selects the dimensions that are used as axes in the correspondence plot.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Multiple Correspondence Analysis( Y( :country, :size, :type ) );
obj << Select Dimension( 1, 3 );

```

### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Description:** Sends platform commands or display customization commands to each level of a by-group.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	By( :Sex ),
	SendToByGroup(
		{:sex == "F"},
		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )
	),
	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) )
);

```

### SendToEmbeddedScriptable

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Description:** SendToEmbeddedScriptable restores settings of embedded scriptable objects.

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Censor Code( 1 ),
	<<Fit Weibull,
	SendToEmbeddedScriptable(
		Dispatch(
			{"Statistics", "Parametric Estimate - Weibull", "Profilers",
			"Density Profiler"},
			{1, Confidence Intervals( 0 ), Term Value(
				Time( 6000, Lock( 0 ), Show( 1 ) )
			)}
		)
	)
);

```

### SendToReport

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Description:** Send To Report is used in tandem with the Dispatch command to customize the appearance of a report.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport(
		Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} )
	)
);

```

### Show Adjusted Inertia

**Syntax:** obj<<Show Adjusted Inertia(1)

**Description:** Displays or hides adjusted inertia.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Multiple Correspondence Analysis( Y( :country, :size, :type ) );
obj << Show Adjusted Inertia( 1 );

```

### Show Coordinates

**Syntax:** obj<<Show Coordinates(1)

**Description:** Displays or hides row and column coordinates.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Multiple Correspondence Analysis( Y( :country, :size, :type ) );
obj << Show Coordinates( 1 );

```

### Show Detail

**Syntax:** obj<<Show Detail(0)

**Description:** Displays or hides details of inertia and chi-square decomposition. On by default.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Multiple Correspondence Analysis( Y( :country, :size, :type ) );
obj << Show Detail( 0 );

```

### Show Partial Contributions to Inertia

**Syntax:** obj<<Show Partial Contributions to Inertia(1)

**Description:** Displays or hides partial contributions to inertia.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Multiple Correspondence Analysis( Y( :country, :size, :type ) );
obj << Show Partial Contributions to Inertia( 1 );

```

### Show Plot

**Syntax:** obj<<Show Plot(0)

**Description:** Displays or hides a correspondence plot. On by default.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Multiple Correspondence Analysis( Y( :country, :size, :type ) );
obj << Show Plot( 0 );

```

### Show Squared Cosines

**Syntax:** obj<<Show Squared Cosines(1)

**Description:** Shows or hides a table that contains the squared cosines of variables.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Multiple Correspondence Analysis( Y( :country, :size, :type ) );
obj << Show Squared Cosines( 1 );

```

### Show Summary Statistics

**Syntax:** obj<<Show Summary Statistics(1)

**Description:** Displays or hides quality, mass and inertia summary statistics.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Multiple Correspondence Analysis( Y( :country, :size, :type ) );
obj << Show Summary Statistics( 1 );

```

### Supplementary ID

**Syntax:** obj = Multiple Correspondence Analysis(...<Supplementary ID( column )>...)

**Description:** Specifies a column that identifies rows to be used as supplementary.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/US Regional Population.jmp" );
obj = dt << Multiple Correspondence Analysis(
	Y( :Year ),
	X( :Region ),
	Freq( :Population ),
	Supplementary ID( :ID )
);
obj << Cross Table of Supplementary Rows( 0 );

```

### Supplementary Variable

**Syntax:** obj = Multiple Correspondence Analysis(...<Supplementary Variable( column(s) )>...)

**Description:** Specifies one or more supplementary variables. Supplementary variables are not used in any of the calculations in the platform and including them does not affect the results. These variables can improve data interpretation or be used in future analyses.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Multiple Correspondence Analysis( Y( :country ), X( :size ), Z( :sex ) );

```

### Sync to Data Table Changes

**Syntax:** obj << Sync to Data Table Changes

**Description:** Sync with the exclude and data changes that have been made.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

### Tests for Independence

**Syntax:** obj << Tests for Independence( state=0|1 )

**Description:** Displays or hides tests for independence.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Multiple Correspondence Analysis( Y( :country ), X( :size ) );
obj << Tests for Independence( 1 );

```

### Title

**Syntax:** obj << Title( "new title" )

**Description:** Sets the title of the platform.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
dt << Multiple Correspondence Analysis(
	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),
	X( :Manufacturer )
);
obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj << Top Report

**Description:** Returns a reference to the root node in the report.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
dt << Multiple Correspondence Analysis(
	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),
	X( :Manufacturer )
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transform Column

**Syntax:** obj = <Platform>(... Transform Column(<name>, Formula(<expression>), [Random Seed(<n>)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description:** Create a transform column in the local context of an object, usually a platform. The transform column is active only for the lifetime of the platform.

**JMP Version Added:** 16

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

### View Web XML

**Syntax:** obj << View Web XML

**Description:** Returns the XML code that is used to create the interactive HTML report.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Window View

**Syntax:** obj = Multiple Correspondence Analysis(...Window View( "Visible"|"Invisible"|"Private" )...)

**Description:** Set the type of the window to be created for the report. By default a Visible report window will be created. An Invisible window will not appear on screen, but is discoverable by functions such as Window(). A Private window responds to most window messages but is not discoverable and must be addressed through the report object

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

### X

**Syntax:** obj = Multiple Correspondence Analysis(...<X( column(s) )>...)

**Description:** Specifies one or more categorical columns to be used as factor, or explanatory, variables.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
dt << Multiple Correspondence Analysis(
	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),
	X( :Manufacturer )
);

```

### Y

**Syntax:** obj = Multiple Correspondence Analysis(...Y( column(s) )...)

**Description:** Specifies the categorical columns to be analyzed.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
dt << Multiple Correspondence Analysis(
	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),
	X( :Manufacturer )
);

```

### Z

**Syntax:** obj = Multiple Correspondence Analysis(...<Z( column(s) )>...)

**Description:** Specifies one or more supplementary variables. Supplementary variables are not used in any of the calculations in the platform and including them does not affect the results. These variables can improve data interpretation or be used in future analyses.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Multiple Correspondence Analysis( Y( :country ), X( :size ), Z( :sex ) );

```


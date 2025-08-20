# Attribute Chart



## Associated Constructors

### Attribute Chart

**Syntax:** Attribute Chart( Y( columns ), X( columns ) )

**Description:** Analyzes categorical measurements to show you measures of agreement across responses, such as raters.

```jsl

dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart( Y( :A, :B, :C ), X( :Part ), Standard( :Standard ) );

```

## Columns

### By

**Syntax:** obj = Attribute Chart(...&lt;By( column(s) )&gt;...)

**Description:** Performs a separate analysis for each level of the specified column.

```jsl

dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard ),
	By( _bycol )
);

```

### Freq

**Syntax:** obj = Attribute Chart(...&lt;Freq( column )&gt;...)

**Description:** Specifies a column whose values assign a frequency to each row for the analysis.

```jsl

dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard ),
	Freq( _freqcol )
);

```

### Grouping

**Syntax:** obj = Attribute Chart(...Grouping( column(s) )...)

**Description:** Specifies the classification columns that group the ratings, typically parts.

```jsl

dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart( Y( :A, :B, :C ), X( :Part ), Standard( :Standard ) );

```

### Response

**Syntax:** obj = Attribute Chart(...Response( column(s) )...)

**Description:** Specifies the columns of ratings given by each rater.

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart( Y( :A, :B, :C ), X( :Part ), Standard( :Standard ) );
obj << Effectiveness Report( 1 );

```

**Example 2**

```jsl

dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart( Response( :A, :B, :C ), X( :Part ), Standard( :Standard ) );
obj << Effectiveness Report( 1 );

```

### Standard

**Syntax:** obj = Attribute Chart(...&lt;Standard( column )&gt;...)

**Description:** Specifies a reference column that contains the known values for each grouping variable (part) level.

```jsl

dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart( Y( :A, :B, :C ), X( :Part ), Standard( :Standard ) );

```

### X

**Syntax:** obj = Attribute Chart(...X( column(s) )...)

**Description:** Specifies the classification columns that group the ratings, typically parts.

```jsl

dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart( Y( :A, :B, :C ), X( :Part ), Standard( :Standard ) );

```

### Y

**Syntax:** obj = Attribute Chart(...Y( column(s) )...)

**Description:** Specifies the columns of ratings given by each rater.

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart( Y( :A, :B, :C ), X( :Part ), Standard( :Standard ) );
obj << Effectiveness Report( 1 );

```

**Example 2**

```jsl

dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart( Response( :A, :B, :C ), X( :Part ), Standard( :Standard ) );
obj << Effectiveness Report( 1 );

```

## Item Messages

### Agreement by Rater Confid Intervals

**Syntax:** obj &lt;&lt; Agreement by Rater Confid Intervals( state=0|1 )

**Description:** Shows or hides confidence intervals about the cell agreement percents on the efficiency graph. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart( Y( :A, :B, :C ), X( :Part ), Standard( :Standard ) );
Wait( 2 );
obj << Agreement by Rater Confid Intervals( 0 );

```

### Attribute Gauge Charts

**Syntax:** obj &lt;&lt; Attribute Gauge Charts( state=0|1 )

**Description:** Show or hides the attribute gauge chart. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart( Y( :A, :B, :C ), X( :Part ), Standard( :Standard ) );
Wait( 2 );
obj << Attribute Gauge Charts( 0 );

```

### Connect Agreement Points

**Syntax:** obj &lt;&lt; Connect Agreement Points( state=0|1 )

**Description:** Shows or hides a line that connects the cell means within a group of cells on both the attribute gauge chart and the efficiency graph. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart( Y( :A, :B, :C ), X( :Part ), Standard( :Standard ) );
Wait( 2 );
obj << Connect Agreement Points( 0 );

```

### Connect Effectiveness Points

**Syntax:** obj &lt;&lt; Connect Effectiveness Points( state=0|1 )

**Description:** Shows or hides a red line that connects the values of the percent agreement between the rater and the standard on both the attribute gauge chart and the efficiency graph.

```jsl

dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart( Y( :A, :B, :C ), X( :Part ), Standard( :Standard ) );
obj << Connect Effectiveness Points( 1 );

```

### Effectiveness Report

**Syntax:** obj &lt;&lt; Effectiveness Report( state=0|1 )

**Description:** Shows or hides a report that contains the agreement counts, effectiveness, misclassifications, and conformance. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart( Y( :A, :B, :C ), X( :Part ), Standard( :Standard ) );
Wait( 2 );
obj << Effectiveness Report( 0 );

```

### Effectiveness by Rater Confid Intervals

**Syntax:** obj &lt;&lt; Effectiveness by Rater Confid Intervals( state=0|1 )

**Description:** Shows or hides the confidence intervals about the cell effectiveness percents on the efficiency graph.

```jsl

dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart( Y( :A, :B, :C ), X( :Part ), Standard( :Standard ) );
obj << Effectiveness by Rater Confid Intervals( 1 );

```

### Show Agreement Grand Mean

**Syntax:** obj &lt;&lt; Show Agreement Grand Mean( state=0|1 )

**Description:** Shows or hides a line at the value of the overall percent agreement on the attribute gauge chart. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart( Y( :A, :B, :C ), X( :Part ), Standard( :Standard ) );
Wait( 2 );
obj << Show Agreement Grand Mean( 0 );

```

### Show Agreement Group Means

**Syntax:** obj &lt;&lt; Show Agreement Group Means( state=0|1 )

**Description:** Shows or hides a line at the value of the percent agreement within groups on the attribute gauge chart. This option requires more than one grouping variable.

```jsl

dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
dt << New Column( "Group", formula( Sequence( 1, 3, 1, 50 ) ) );
obj = dt << Attribute Chart( Y( :A, :B, :C ), X( :Group, :Part ), Standard( :Standard ) );
obj << Show Agreement Group Means( 1 );

```

### Show Agreement Points

**Syntax:** obj &lt;&lt; Show Agreement Points( state=0|1 )

**Description:** Shows or hides the agreement points on both the attribute gauge chart and the efficiency graph. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart( Y( :A, :B, :C ), X( :Part ), Standard( :Standard ) );
Wait( 2 );
obj << Show Agreement Points( 0 );

```

### Show Effectiveness Points

**Syntax:** obj &lt;&lt; Show Effectiveness Points( state=0|1 )

**Description:** Shows or hides the effectiveness points on both the attribute gauge chart and the efficiency graph.

```jsl

dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart( Y( :A, :B, :C ), X( :Part ), Standard( :Standard ) );
obj << Show Effectiveness Points( 1 );

```

## Shared Item Messages

### Action

**Syntax:** obj &lt;&lt; Action

**Description:** All-purpose trapdoor within a platform to insert expressions to evaluate. Temporarily sets the DisplayBox and DataTable contexts to the Platform.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Description:** Apply a previously created preset to the object, updating the options and customizations to match the saved settings.

**JMP Version Added:** 18

#### Anonymous preset

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

#### Search by name

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Search within folder(s)

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

### Automatic Recalc

**Syntax:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Description:** Redoes the analysis automatically for exclude and data changes. If the Automatic Recalc option is turned on, you should consider using Wait(0) commands to ensure that the exclude and data changes take effect before the recalculation.

```jsl

dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart( Y( :A, :B, :C ), X( :Part ), Standard( :Standard ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**Syntax:** obj &lt;&lt; Broadcast(message)

**Description:** Broadcasts a message to a platform. If return results from individual objects are tables, they are concatenated if possible, and the final format is identical to either the result from the Save Combined Table option in a Table Box or the result from the Concatenate option using a Source column. Other than those, results are stored in a list and returned.

**JMP Version Added:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

### Column Switcher

**Syntax:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Description:** Adds a control panel for changing the platform&apos;s variables

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

### Copy ByGroup Script

**Syntax:** obj &lt;&lt; Copy ByGroup Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard ),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart( Y( :A, :B, :C ), X( :Part ), Standard( :Standard ) );
obj << Copy Script;

```

### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Description:** Move the data table window for this analysis to the front.

```jsl

dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart( Y( :A, :B, :C ), X( :Part ), Standard( :Standard ) );
obj << Data Table Window;

```

### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Description:** Returns an associative array mapping the by group columns to their values.

**JMP Version Added:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**Syntax:** obj &lt;&lt; Get ByGroup Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard ),
	By( _bycol )
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

#### General

```jsl

dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart( Y( :A, :B, :C ), X( :Part ), Standard( :Standard ) );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Platform with Filter

```jsl

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

**Syntax:** obj &lt;&lt; Get Data Table

**Description:** Returns a reference to the data table.

```jsl

dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart( Y( :A, :B, :C ), X( :Part ), Standard( :Standard ) );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**Syntax:** obj &lt;&lt; Get Group Platform

**Description:** Return the Group Platform object if this platform is part of a Group. Otherwise, returns Empty().

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart( Y( :A, :B, :C ), X( :Part ), Standard( :Standard ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```jsl

dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart( Y( :A, :B, :C ), X( :Part ), Standard( :Standard ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Description:** Times the platform launch.

```jsl

dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart( Y( :A, :B, :C ), X( :Part ), Standard( :Standard ) );
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**Syntax:** obj &lt;&lt; Get Web Support

**Description:** Return a number indicating the level of Interactive HTML support for the display object. 1 means some or all elements are supported. 0 means no support.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Where Expr

**Syntax:** obj &lt;&lt; Get Where Expr

**Description:** Returns the Where expression for the data subset, if the platform was launched with By() or Where(). Otherwise, returns Empty()

**JMP Version Added:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Description:** Ignores the current settings of the platform&apos;s preferences. The message is ignored when sent to the platform after creation.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Local Data Filter

**Syntax:** obj &lt;&lt; Local Data Filter

**Description:** To filter data to specific groups or ranges, but local to this platform

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);

```

### New Preset

**Syntax:** obj = New Preset()

**Description:** Create an anonymous preset representing the options and customizations applied to the object. This object can be passed to Apply Preset to copy the settings to another object of the same type.

**JMP Version Added:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Paste Local Data Filter

**Syntax:** obj &lt;&lt; Paste Local Data Filter

**Description:** Apply the local data filter from the clipboard to the current report.

```jsl

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

### Redo Analysis

**Syntax:** obj &lt;&lt; Redo Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart( Y( :A, :B, :C ), X( :Part ), Standard( :Standard ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntax:** obj &lt;&lt; Redo ByGroup Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard ),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart( Y( :A, :B, :C ), X( :Part ), Standard( :Standard ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntax:** obj &lt;&lt; Relaunch ByGroup

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard ),
	By( _bycol )
);
obj[1] << Relaunch ByGroup;

```

### Remove Column Switcher

**Syntax:** obj &lt;&lt; Remove Column Switcher

**Description:** Removes the most recent Column Switcher that has been added to the platform.

```jsl

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

**Syntax:** obj &lt;&lt; Remove Local Data Filter

**Description:** If a local data filter has been created, this removes it and restores the platform to use all the data in the data table directly

```jsl

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

### Report

**Syntax:** obj &lt;&lt; Report;Report( obj )

**Description:** Returns a reference to the report object.

```jsl

dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart( Y( :A, :B, :C ), X( :Part ), Standard( :Standard ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntax:** obj &lt;&lt; Report View( "Full"|"Summary" )

**Description:** The report view determines the level of detail visible in a platform report. Full shows all of the detail, while Summary shows only select content, dependent on the platform. For customized behavior, display boxes support a <<Set Summary Behavior message.

```jsl

dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart( Y( :A, :B, :C ), X( :Part ), Standard( :Standard ) );
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Creates a JSL script to produce this analysis, and save it as a table property in the data table. You can specify a name for the script. The Append Suffix option appends a numeric suffix to the script name, which differentiates the script from an existing script with the same name. The Prompt option prompts the user to specify a script name. The Replace option replaces an existing script with the same name.

```jsl

dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart( Y( :A, :B, :C ), X( :Part ), Standard( :Standard ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```jsl

dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```jsl

dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart( Y( :A, :B, :C ), X( :Part ), Standard( :Standard ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart( Y( :A, :B, :C ), X( :Part ), Standard( :Standard ) );
obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```jsl

dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart( Y( :A, :B, :C ), X( :Part ), Standard( :Standard ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart( Y( :A, :B, :C ), X( :Part ), Standard( :Standard ) );
obj << Save Script to Script Window;

```

### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Description:** Sends platform commands or display customization commands to each level of a by-group.

```jsl

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

```jsl


dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Censor Code( 1 ),
	<<Fit Weibull,
	SendToEmbeddedScriptable(
		Dispatch(
			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},
			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}
		)
	)
);

```

### SendToReport

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Description:** Send To Report is used in tandem with the Dispatch command to customize the appearance of a report.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

### Sync to Data Table Changes

**Syntax:** obj &lt;&lt; Sync to Data Table Changes

**Description:** Sync with the exclude and data changes that have been made.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

### Title

**Syntax:** obj &lt;&lt; Title( "new title" )

**Description:** Sets the title of the platform.

```jsl

dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart( Y( :A, :B, :C ), X( :Part ), Standard( :Standard ) );
obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Description:** Returns a reference to the root node in the report.

```jsl

dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart( Y( :A, :B, :C ), X( :Part ), Standard( :Standard ) );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transform Column

**Syntax:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description:** Create a transform column in the local context of an object, usually a platform. The transform column is active only for the lifetime of the platform.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Description:** Returns the XML code that is used to create the interactive HTML report.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Window View

**Syntax:** obj = Attribute Chart(...Window View( "Visible"|"Invisible"|"Private" )...)

**Description:** Set the type of the window to be created for the report. By default a Visible report window will be created. An Invisible window will not appear on screen, but is discoverable by functions such as Window(). A Private window responds to most window messages but is not discoverable and must be addressed through the report object

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

## Conformance Report

### Item Messages

#### Calculate Escape Rate

**Syntax:** obj &lt;&lt; Calculate Escape Rate( state=0|1 )

**Description:** Shows or hides a report that contains the escape rate based on the given probability of nonconformance.

```jsl

dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard ),
	Probability of Nonconformance( 0.1 )
);
obj << Calculate Escape Rate( 1 );

```

#### Change Conforming Category

**Syntax:** obj &lt;&lt; Change Conforming Category( state=0|1 )

**Description:** Specifies which category is used as the conforming identifier.

```jsl

dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart( Y( :A, :B, :C ), X( :Part ), Standard( :Standard ) );
obj << Change Conforming Category( 1 );

```

#### Probability of Nonconformance

**Syntax:** Attribute Chart( Probability of Nonconformance( probability ) )

**Description:** Sets the probability of nonconformance for subsequent use in the escape rate calculations.

```jsl

dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard ),
	Probability of Nonconformance( 0.1 )
);
obj << Calculate Escape Rate( 1 );

```


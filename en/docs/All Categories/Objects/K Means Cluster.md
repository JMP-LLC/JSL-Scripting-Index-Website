# K Means Cluster



## Associated Constructors

### K Means Cluster

**Syntax:** K Means Cluster( Y( column(s) ), Number of Clusters( number ) )

**Description:** Clusters rows based on numeric variables in data tables with up to millions of rows. You must specify the number of clusters in advance.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;

```

## Columns

### By

**Syntax:** obj = K Means Cluster(...&lt;By( column(s) )&gt;...)

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	By( _bycol )
);
obj << Go;

```

### Freq

**Syntax:** obj = K Means Cluster(...&lt;Freq( column )&gt;...)

**JMP Version Added:** 14

**K Means Example**

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure3Freq.jmp" );
obj = K Means Cluster(
	Y(
		:contamination, :corrosion, :doping, :metallization, :miscellaneous, :oxide defect,
		:silicon defect
	),
	Freq( :SampleSize ),
	Number of Clusters( 2 ),
	Go
);

```

**Normal Mixtures Example**

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure3Freq.jmp" );
obj = Normal Mixtures(
	Y(
		:contamination, :corrosion, :doping, :metallization, :miscellaneous, :oxide defect,
		:silicon defect
	),
	Freq( :SampleSize ),
	Number of Clusters( 2 ),
	Go
);

```

### Weight

**Syntax:** obj = K Means Cluster(...&lt;Weight( column )&gt;...)

**JMP Version Added:** 14

**K Means Example**

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure3Freq.jmp" );
obj = K Means Cluster(
	Y(
		:contamination, :corrosion, :doping, :metallization, :miscellaneous, :oxide defect,
		:silicon defect
	),
	Weight( :SampleSize ),
	Number of Clusters( 2 ),
	Go
);

```

**Normal Mixtures Example**

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure3Freq.jmp" );
obj = Normal Mixtures(
	Y(
		:contamination, :corrosion, :doping, :metallization, :miscellaneous, :oxide defect,
		:silicon defect
	),
	Weight( :SampleSize ),
	Number of Clusters( 2 ),
	Go
);

```

### Y

**Syntax:** obj = K Means Cluster(...Y( column(s) )...)

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Go
);

```

## Item Messages

### Columns Scaled Individually

**Syntax:** Columns Scaled Individually( state=0|1 )

**Description:** Scales each column independently of the other columns. On by default.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Columns Scaled Individually( 1 ),
	Go
);

```

### Go

**Syntax:** obj &lt;&lt; Go

**Description:** Launches the platform by completing the iterations.

**JMP Version Added:** 14

**K Means Example**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;

```

**Normal Mixtures Example**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Normal Mixtures(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;

```

### Initial Clusters

**Syntax:** obj &lt;&lt; Initial Clusters( "Default" | "Randomize" | column )

**Description:** Determines how the initial clusters are created. The initial clusters can be randomized or you can specify a categorical column to define the initial clusters, seeding by the means for each category.

**JMP Version Added:** 19

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Initial Clusters( :Species ),
	Go
);

```

**Example 2**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Initial Clusters( "Randomize" ),
	Go
);

```

### Max Iterations

**Syntax:** obj &lt;&lt; Max Iterations( number )

**Description:** Sets the maximum number of iterations.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Max Iterations( 100 );
obj << Go;

```

### Number of Clusters

**Syntax:** obj &lt;&lt; Number of Clusters( number )

**Description:** Changes the number of clusters.

**JMP Version Added:** 14

**K Means Example**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Go
);
Wait( 1 );
obj << Number of Clusters( 5 );
obj << Go;

```

**Normal Mixtures Example**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Normal Mixtures(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Go
);
Wait( 1 );
obj << Number of Clusters( 5 );
obj << Go;

```

### SOM

**Syntax:** obj &lt;&lt; SOM

**Description:** Creates clusters using self-organizing maps. The grid structure used by this method can be used to interpret the clusters in two dimensions.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << SOM;
obj << Go;

```

### SOM Bandwidth

**Syntax:** obj &lt;&lt; SOM Bandwidth( number )

**Description:** Specifies the bandwidth for the self-organizing maps.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << SOM;
obj << SOM Bandwidth( 0.5 );
obj << Go;

```

### SOM N Rows

**Syntax:** obj &lt;&lt; SOM N Rows( number )

**Description:** Sets the number of rows for the self-organizing maps.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << SOM( 1 );
obj << SOM N Rows( 3 );
obj << Go;

```

### Shift distances by rates

**Syntax:** obj &lt;&lt; Shift distances by rates( state=0|1 )

**Description:** Gives higher preference to point assignments to larger clusters.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Shift distances by rates( 1 ),
	Go
);

```

### Single Step

**Syntax:** obj &lt;&lt; Single Step( state=0|1 )

**Description:** Enables stepping through individual iterations. In the K Means outline, click the Step button for each iteration.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Single Step( 1 );
obj << Go;
obj << Step;
Wait( 1 );
obj << Step;

```

### Use within cluster std dev

**Syntax:** obj &lt;&lt; Use within cluster std dev( state=0|1 )

**Description:** Calculates distances scaled by the standard deviation estimated for each cluster.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Use within cluster std dev( 1 ),
	Go
);

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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;
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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	By( _bycol )
);
obj << Go;
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;
obj << Copy Script;

```

### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Description:** Move the data table window for this analysis to the front.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;
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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	By( _bycol )
);
obj << Go;
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

#### General

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;
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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;
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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Description:** Times the platform launch.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;
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

### New JSL Preset

**Syntax:** New JSL Preset( preset )

**Description:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Version Added:** 18

```jsl

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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntax:** obj &lt;&lt; Redo ByGroup Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	By( _bycol )
);
obj << Go;
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntax:** obj &lt;&lt; Relaunch ByGroup

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	By( _bycol )
);
obj << Go;
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

### Render Preset

**Syntax:** Render Preset( preset )

**Description:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Version Added:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**Syntax:** obj &lt;&lt; Report;Report( obj )

**Description:** Returns a reference to the report object.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntax:** obj &lt;&lt; Report View( "Full"|"Summary" )

**Description:** The report view determines the level of detail visible in a platform report. Full shows all of the detail, while Summary shows only select content, dependent on the platform. For customized behavior, display boxes support a <<Set Summary Behavior message.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Creates a JSL script to produce this analysis, and save it as a table property in the data table. You can specify a name for the script. The Append Suffix option appends a numeric suffix to the script name, which differentiates the script from an existing script with the same name. The Prompt option prompts the user to specify a script name. The Replace option replaces an existing script with the same name.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	By( _bycol )
);
obj << Go;
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	By( _bycol )
);
obj << Go;
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	By( _bycol )
);
obj << Go;
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	By( _bycol )
);
obj << Go;
obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	By( _bycol )
);
obj << Go;
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;
obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;
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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;
obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Description:** Returns a reference to the root node in the report.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;
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

**Syntax:** obj = K Means Cluster(...Window View( "Visible"|"Invisible"|"Private" )...)

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

## K Means Fit

### Item Messages

#### Biplot

**Syntax:** obj &lt;&lt; Biplot( state=0|1 )

**Description:** Shows or hides a plot of the points and clusters in the first two principal components of the data.

**JMP Version Added:** 14

**K Means Example**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Go
);
obj << Biplot( 1 );

```

**Normal Mixtures Example**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Normal Mixtures(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Go
);
obj << Biplot( 1 );

```

#### Biplot 3D

**Syntax:** obj &lt;&lt; Biplot 3D( state=0|1 )

**Description:** Shows or hides a plot of the points and clusters in the first three principal components of the data.

**JMP Version Added:** 14

**K Means Example**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Go
);
obj << Biplot 3D( 1 );

```

**Normal Mixtures Example**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Normal Mixtures(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Go
);
obj << Biplot 3D( 1 );

```

#### Biplot Contour Density

**Syntax:** obj &lt;&lt; Biplot Contour Density( density percent )

**Description:** Sets the level for the density contour.

**JMP Version Added:** 14

**K Means Example**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Go( Biplot( 1 ) )
);
obj << Biplot Contour Density( .95 );

```

**Normal Mixtures Example**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Normal Mixtures(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Go( Biplot( 1 ) )
);
obj << Biplot Contour Density( .95 );

```

#### Biplot Ray Position

**Syntax:** obj &lt;&lt; Biplot Ray Position( [X, Y, scaling] )

**Description:** Moves the biplot ray display.

**JMP Version Added:** 14

**K Means Example**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Go( Biplot( 1 ) )
);
obj << Biplot Ray Position( [-1, -1, 2] );

```

**Normal Mixtures Example**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Normal Mixtures(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Go( Biplot( 1 ) )
);
obj << Biplot Ray Position( [-1, -1, 2] );

```

#### Get Statistics

**Syntax:** obj &lt;&lt; Get Statistics

**Description:** Returns the mean and standard deviation for each variable within each cluster.

**JMP Version Added:** 14

**K Means Example**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Go
);
stats = obj << Get Statistics;
Show( stats );

```

**Normal Mixtures Example**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Normal Mixtures(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Go
);
stats = obj << Get Statistics;
Show( stats );

```

#### Mark Clusters

**Syntax:** obj &lt;&lt; Mark Clusters

**Description:** Sets the markers in the row state for each row in the data table. Each cluster is assigned a different marker. This affects plots across platforms using rowstate markers, including the Biplot in Cluster.

**JMP Version Added:** 14

**K Means Example**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Go
);
obj << Biplot( 1 );
obj << Mark Clusters;

```

**Normal Mixtures Example**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Normal Mixtures(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Go
);
obj << Biplot( 1 );
obj << Mark Clusters;

```

#### Parallel Coord Plots

**Syntax:** obj &lt;&lt; Parallel Coord Plots( state=0|1 )

**Description:** Shows or hides a plot for each cluster separately showing connected line segments that represent each row of the data table.

**JMP Version Added:** 14

**K Means Example**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Go
);
obj << Parallel Coord Plots( 1 );

```

**Normal Mixtures Example**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Normal Mixtures(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Go
);
obj << Parallel Coord Plots( 1 );

```

#### Publish Cluster Formulas

**Syntax:** obj &lt;&lt; Publish Cluster Formulas

**Description:** Builds probability formulas and publishes them as a formula column script in Formula Depot.

**JMP Version Added:** 14

**K Means Example**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Go
);
obj << Publish Cluster Formulas;

```

**Normal Mixtures Example**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Normal Mixtures(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Go
);
obj << Publish Cluster Formulas;

```

#### SOM Heat Map

**Syntax:** obj &lt;&lt; SOM Heat Map( state=0|1 )

**Description:** Shows or hides a heat map of the SOM cluster means, colored by one of the Y variables that was used in the clustering.

**JMP Version Added:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	{SOM N Rows( 2 ), SOM Bandwidth( 0.5 ), Single Step( 0 ), Number of Clusters( 4 ), SOM,
	Go}
);
obj << SOM Heat Map;

```

#### Save Cluster Distance

**Syntax:** obj &lt;&lt; Save Cluster Distance

**Description:** Saves a column to the data table that contains the distance to the assigned cluster number.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Go
);
obj << Save Cluster Distance;

```

#### Save Cluster Formula

**Syntax:** obj &lt;&lt; Save Cluster Formula

**Description:** Saves a column to the data table with a formula that determines the most likely cluster.

**JMP Version Added:** 14

**K Means Example**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Go
);
obj << Save Cluster Formula;

```

**Normal Mixtures Example**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Normal Mixtures(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Go
);
obj << Save Cluster Formula;

```

#### Save Clusters

**Syntax:** obj &lt;&lt; Save Clusters

**Description:** Saves a new column to the data table that contains the most likely cluster for each row.

**JMP Version Added:** 14

**K Means Example**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Go
);
obj << Save Clusters;

```

**Normal Mixtures Example**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Normal Mixtures(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Go
);
obj << Save Clusters;

```

#### Save Colors to Table

**Syntax:** obj &lt;&lt; Save Colors to Table

**Description:** Saves the color assigned to the row state in each row according to the cluster membership.

**JMP Version Added:** 14

**K Means Example**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;
obj << Save Colors to Table;

```

**Normal Mixtures Example**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Normal Mixtures(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;
obj << Save Colors to Table;

```

#### Save Distance Formula

**Syntax:** obj &lt;&lt; Save Distance Formula

**Description:** Saves a column to the data table that contains the distance formula to the assigned cluster number.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Go
);
obj << Save Distance Formula;

```

#### Save K Cluster Distances

**Syntax:** obj &lt;&lt; Save K Cluster Distances

**Description:** Saves the distance to each cluster center as a separate column in the data table.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Go
);
obj << Save K Cluster Distances;

```

#### Save K Distance Formulas

**Syntax:** obj &lt;&lt; Save K Distance Formulas

**Description:** Saves the distance formula to each cluster center as a separate column in the data table.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Go
);
obj << Save K Distance Formulas;

```

#### Save SOM Grid

**Syntax:** obj &lt;&lt; Save SOM Grid

**Description:** Saves new columns to the data table that contain the SOM grid row and column for the most likely cluster.

**JMP Version Added:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	{SOM N Rows( 2 ), SOM Bandwidth( 0.5 ), Single Step( 0 ), Number of Clusters( 4 ), SOM,
	Go}
);
obj << Save SOM Grid;

```

#### Scatterplot Matrix

**Syntax:** obj &lt;&lt; Scatterplot Matrix( state=0|1 )

**Description:** Creates a scatterplot matrix in a new window with confidence ellipses based on the current number of clusters.

**JMP Version Added:** 14

**K Means Example**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;
obj << Scatterplot Matrix;

```

**Normal Mixtures Example**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Normal Mixtures(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;
obj << Scatterplot Matrix;

```

#### Show Biplot Rays

**Syntax:** obj &lt;&lt; Show Biplot Rays( state=0|1 )

**Description:** Shows or hides the rays on the biplot. On by default.

**JMP Version Added:** 14

**K Means Example**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Go( Biplot( 1 ) )
);
obj << Show Biplot Rays( 1 );

```

**Normal Mixtures Example**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Normal Mixtures(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Go( Biplot( 1 ) )
);
obj << Show Biplot Rays( 1 );

```

#### Simulate Clusters

**Syntax:** obj &lt;&lt; Simulate Clusters

**Description:** Creates a new data table with simulated data using the estimated cluster mixing probabilities, means, and standard deviations for each cluster.

**JMP Version Added:** 14

**K Means Example**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Go
);
obj << Simulate Clusters( 1000 );

```

**Normal Mixtures Example**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Normal Mixtures(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Go
);
obj << Simulate Clusters( 1000 );

```

#### Step

**Syntax:** obj &lt;&lt; Step

**Description:** Takes one K-means step or iteration.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Single Step( 1 );
obj << Go;
obj << Step;
Wait( 1 );
obj << Step;

```


# Explore Outliers



## Associated Constructors

### Explore Outliers

**Syntax:** Explore Outliers( Y( columns ) )

**Description:** Identifies, explores, and manages outliers in univariate or multivariate data.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );

```

## Columns

### By

**Syntax:** obj &lt;&lt; By( column(s) )

**Description:** Performs a separate analysis for each level of the specified column.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Explore Outliers(	Y( Column Group( "Sensor Measurements" ) ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));

```

### Label

**Syntax:** obj &lt;&lt; Label( column )

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );

```

### Validation

**Syntax:** obj &lt;&lt; Validation( column )

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );

```

### Y

**Syntax:** obj &lt;&lt; Y( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );

```

## Item Messages

### K Nearest Neighbor Outliers

**Syntax:** obj &lt;&lt; K Nearest Neighbor Outliers

**Description:** For each point, finds the distance to its kth nearest neighbor.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << k Nearest Neighbor Outliers( K( 5 ) );

```

### Multivariate k Nearest Neighbor Outliers

**Syntax:** obj &lt;&lt; Multivariate k Nearest Neighbor Outliers

**JMP Version Added:** 14

### Quantile Range Outliers

**Syntax:** obj &lt;&lt; Quantile Range Outliers

**Description:** Finds values more than a scale multiple of an interquantile range beyond the quantiles.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Quantile Range Outliers;

```

### Robust Fit Outliers

**Syntax:** obj &lt;&lt; Robust Fit Outliers

**Description:** Finds values more than a multiple of the scale away from the center using robust estimates of the center and scale.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Robust Fit Outliers;

```

### Robust PCA Outliers

**Syntax:** obj &lt;&lt; Robust PCA Outliers

**Description:** Robustly decomposes data into a low-rank matrix and a sparse matrix of residuals. Outliers are detected in the residuals. It can also impute missing values.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( 2 :: 10 ) );obj << Robust PCA Outliers;

```

## Shared Item Messages

### Action

**Syntax:** obj &lt;&lt; Action

**Description:** All-purpose trapdoor within a platform to insert expressions to evaluate. Temporarily sets the DisplayBox and DataTable contexts to the Platform.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Description:** Apply a previously created preset to the object, updating the options and customizations to match the saved settings.

**JMP Version Added:** 18

#### Anonymous preset

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );Wait( 1 );obj2 << Apply Preset( preset );

```

#### Search by name

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Search within folder(s)

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

### Automatic Recalc

**Syntax:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Description:** Redoes the analysis automatically for exclude and data changes. If the Automatic Recalc option is turned on, you should consider using Wait(0) commands to ensure that the exclude and data changes take effect before the recalculation.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**Syntax:** obj &lt;&lt; Broadcast(message)

**Description:** Broadcasts a message to a platform. If return results from individual objects are tables, they are concatenated if possible, and the final format is identical to either the result from the Save Combined Table option in a Table Box or the result from the Concatenate option using a Source column. Other than those, results are stored in a list and returned.

**JMP Version Added:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

### Column Switcher

**Syntax:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Description:** Adds a control panel for changing the platform&apos;s variables

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

### Copy ByGroup Script

**Syntax:** obj &lt;&lt; Copy ByGroup Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Explore Outliers(	Y( Column Group( "Sensor Measurements" ) ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Copy Script;

```

### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Description:** Move the data table window for this analysis to the front.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Data Table Window;

```

### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Description:** Returns an associative array mapping the by group columns to their values.

**JMP Version Added:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

### Get ByGroup Script

**Syntax:** obj &lt;&lt; Get ByGroup Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Explore Outliers(	Y( Column Group( "Sensor Measurements" ) ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

```

### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

#### General

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Platform with Filter

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Description:** Returns a reference to the data table.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );t = obj << Get Datatable;Show( N Rows( t ) );

```

### Get Group Platform

**Syntax:** obj &lt;&lt; Get Group Platform

**Description:** Return the Group Platform object if this platform is part of a Group. Otherwise, returns Empty().

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Description:** Times the platform launch.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );t = obj << Get Timing;Show( t );

```

### Get Web Support

**Syntax:** obj &lt;&lt; Get Web Support

**Description:** Return a number indicating the level of Interactive HTML support for the display object. 1 means some or all elements are supported. 0 means no support.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

### Get Where Expr

**Syntax:** obj &lt;&lt; Get Where Expr

**Description:** Returns the Where expression for the data subset, if the platform was launched with By() or Where(). Otherwise, returns Empty()

**JMP Version Added:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Description:** Ignores the current settings of the platform&apos;s preferences. The message is ignored when sent to the platform after creation.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

### Local Data Filter

**Syntax:** obj &lt;&lt; Local Data Filter

**Description:** To filter data to specific groups or ranges, but local to this platform

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

### New Preset

**Syntax:** obj = New Preset()

**Description:** Create an anonymous preset representing the options and customizations applied to the object. This object can be passed to Apply Preset to copy the settings to another object of the same type.

**JMP Version Added:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

### Paste Local Data Filter

**Syntax:** obj &lt;&lt; Paste Local Data Filter

**Description:** Apply the local data filter from the clipboard to the current report.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

### Redo Analysis

**Syntax:** obj &lt;&lt; Redo Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Redo Analysis;

```

### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Relaunch Analysis;

```

### Remove Column Switcher

**Syntax:** obj &lt;&lt; Remove Column Switcher

**Description:** Removes the most recent Column Switcher that has been added to the platform.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

### Remove Local Data Filter

**Syntax:** obj &lt;&lt; Remove Local Data Filter

**Description:** If a local data filter has been created, this removes it and restores the platform to use all the data in the data table directly

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

### Report

**Syntax:** obj &lt;&lt; Report; Report( obj )

**Description:** Returns a reference to the report object.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**Syntax:** obj &lt;&lt; Report View( "Full"|"Summary" )

**Description:** The report view determines the level of detail visible in a platform report. Full shows all of the detail, while Summary shows only select content, dependent on the platform. For customized behavior, display boxes support a <<Set Summary Behavior message.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Creates a JSL script to produce this analysis, and save it as a table property in the data table. You can specify a name for the script. The Append Suffix option appends a numeric suffix to the script name, which differentiates the script from an existing script with the same name. The Prompt option prompts the user to specify a script name. The Replace option replaces an existing script with the same name.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Explore Outliers(	Y( Column Group( "Sensor Measurements" ) ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Explore Outliers(	Y( Column Group( "Sensor Measurements" ) ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Explore Outliers(	Y( Column Group( "Sensor Measurements" ) ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Explore Outliers(	Y( Column Group( "Sensor Measurements" ) ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Explore Outliers(	Y( Column Group( "Sensor Measurements" ) ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Save Script to Script Window;

```

### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Description:** Sends platform commands or display customization commands to each level of a by-group.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup(		{:sex == "F"},		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )	),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

### SendToEmbeddedScriptable

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Description:** SendToEmbeddedScriptable restores settings of embedded scriptable objects.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch(			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

### SendToReport

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Description:** Send To Report is used in tandem with the Dispatch command to customize the appearance of a report.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

### Sync to Data Table Changes

**Syntax:** obj &lt;&lt; Sync to Data Table Changes

**Description:** Sync with the exclude and data changes that have been made.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

### Title

**Syntax:** obj &lt;&lt; Title( "new title" )

**Description:** Sets the title of the platform.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Description:** Returns a reference to the root node in the report.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Transform Column

**Syntax:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description:** Create a transform column in the local context of an object, usually a platform. The transform column is active only for the lifetime of the platform.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Description:** Returns the XML code that is used to create the interactive HTML report.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

### Window View

**Syntax:** obj = Explore Outliers(...Window View( "Visible"|"Invisible"|"Private" )...)

**Description:** Set the type of the window to be created for the report. By default a Visible report window will be created. An Invisible window will not appear on screen, but is discoverable by functions such as Window(). A Private window responds to most window messages but is not discoverable and must be addressed through the report object

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## K Nearest Neighbor Outliers

### Item Messages

#### Close

**Syntax:** obj &lt;&lt; Close

**JMP Version Added:** 16

#### Exclude Selected Rows

**Syntax:** obj &lt;&lt; Exclude Selected Rows

**JMP Version Added:** 16

#### Impute Missing

**Syntax:** obj &lt;&lt; Impute Missing( state=0 )

**Description:** If there are missing values, Robust PCA is used to impute them before analyzing with K Nearest Neighbors. On by default.

**JMP Version Added:** 16

#### K

**Syntax:** obj &lt;&lt; K( number=8 )

**Description:** The number of near-neighbor rows to find for each row in the table. "8" by default.

**JMP Version Added:** 16

#### Save NN Distances

**Syntax:** obj &lt;&lt; Save NN Distances

**Description:** Saves new columns to the data table containing distances to the kth nearest neighbor.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( 2 :: 10 ) );obj << k Nearest Neighbor Outliers( K( 4 ) );obj << Save NN Distances;

```

#### Scatterplot Matrix

**Syntax:** obj &lt;&lt; Scatterplot Matrix

**Description:** Opens a window containing a scatterplot matrix for all columns.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( 2 :: 10 ) );obj << k Nearest Neighbor Outliers( K( 4 ) );obj << Scatterplot Matrix;

```

## Multivariate Robust Outliers

### Item Messages

#### Close

**Syntax:** obj &lt;&lt; Close

**JMP Version Added:** 16

#### Exclude Selected Rows

**Syntax:** obj &lt;&lt; Exclude Selected Rows

**JMP Version Added:** 16

## Quantile Range Outliers

### Item Messages

#### Add Highest Nines to Missing Value Codes

**Syntax:** obj &lt;&lt; Add Highest Nines to Missing Value Codes( ALL or column1, column2, ... )

**Description:** Selects the columns listed as arguments and finds the highest nines in each column. Creates a Missing Value Codes property for these values in each selected column.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );obj = dt << Explore Outliers(	Y( Column Group( "Responses" ) ),	Quantile Range Outliers( Show only columns with outliers( 1 ) ));obj << Add Highest Nines to Missing Value Codes( :PS_RPNBR );dt:PS_RPNBR << Get Column Properties;//See Log for Missing Value Codes column property

```

#### Add to Missing Value Codes

**Syntax:** obj &lt;&lt; Add to Missing Value Codes( ALL or column1, column2, ... )

**Description:** Selects the columns listed as arguments and adds a Missing Value Code property in those columns for outliers.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Quantile Range Outliers;obj << Add to Missing Value Codes( :"Q-E"n, :"ZN-E"n );

```

#### Change Highest Nines to Missing

**Syntax:** obj &lt;&lt; Change Highest Nines to Missing( ALL or column1, column2, ... )

**Description:** Selects the columns listed as arguments and finds the highest nines in these columns. Changes the highest nines to missing. Note that this changes the data table.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );obj = dt << Explore Outliers(	Y( Column Group( "Responses" ) ),	Quantile Range Outliers( Show only columns with outliers( 1 ) ));obj << Change Highest Nines to Missing( :PS_RPNBR );

```

#### Change to Missing

**Syntax:** obj &lt;&lt; Change to Missing( ALL or column1, column2, ... )

**Description:** Selects the columns listed as arguments. In selected columns, changes the values identified as outliers to missing values.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Quantile Range Outliers( Tail Quantile( 0.3 ) );Wait( 2 );obj << Change to Missing( :"Q-E"n, :"ZN-E"n );

```

#### Close

**Syntax:** obj &lt;&lt; Close

**Description:** Removes a section of the analysis and reopens the command outline.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Quantile Range Outliers;obj << Robust Fit Outliers;Wait( 2 );obj << Close;

```

#### Color Cells

**Syntax:** obj &lt;&lt; Color Cells( ALL or column1, column2, ... )

**Description:** Selects the columns listed as arguments. In selected columns, colors the cells that correspond to outliers.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Quantile Range Outliers( Tail Quantile( 0.3 ) );obj << Color Cells( :"Q-E"n, :"ZN-E"n );

```

#### Color Rows

**Syntax:** obj &lt;&lt; Color Rows( ALL or column1, column2, ... )

**Description:** Selects the columns listed as arguments. In selected columns, assigns the Color row state to the rows that correspond to outliers.

**JMP Version Added:** 16

#### Exclude Rows

**Syntax:** obj &lt;&lt; Exclude Rows( ALL or column1, column2, ... )

**Description:** Selects the columns listed as arguments. In selected columns, excludes the rows containing values identified as outliers.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Quantile Range Outliers( Tail Quantile( 0.3 ) );obj << Exclude Rows( :"Q-E"n, :"ZN-E"n );

```

#### Formula Columns

**Syntax:** obj &lt;&lt; Formula Columns( ALL or column1, column2, ... )

**Description:** Creates new formula columns from the selected columns by changing the outliers to missing.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Quantile Range Outliers( Tail Quantile( 0.3 ) );Wait( 2 );obj << Formula Columns( Suffix( "Culled" ) );

```

#### Formula Script

**Syntax:** obj &lt;&lt; Formula Script( ALL or column1, column2, ... )

**Description:** Creates a script to make new formula columns from the selected columns by changing the outliers to missing.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Quantile Range Outliers( Tail Quantile( 0.3 ) );Wait( 2 );obj << Formula Script( Suffix( "Culled" ) );

```

#### Get Quantile Outliers

**Syntax:** obj &lt;&lt; Get Quantile Outliers

**Description:** Returns a list containing a list of the columns that contain outliers and a list of vectors that contain outlier values in those columns.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Quantile Range Outliers;obj << Get Quantile Outliers;

```

#### Q

**Syntax:** obj &lt;&lt; Q( number=3 )

**Description:** Sets the scale multiple, Q, for the interquantile distance. Values that fall more than Q times the interquantile distance beyond the tail quantiles are considered outliers. Use Rescan to apply the setting. "3" by default.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Quantile Range Outliers( Q( 4 ) );

```

#### Rescan

**Syntax:** obj &lt;&lt; Rescan

**Description:** Use after changing settings to recompute  the criteria and rescan the data to obtain outliers.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Quantile Range Outliers;obj << Tail Quantile( 0.2 );obj << Rescan;

```

#### Restrict search to integers

**Syntax:** obj &lt;&lt; Restrict search to integers( state=0|1 )

**Description:** Restricts outlier values to only integer values. This setting limits the search for outliers in order to find industry-specific missing value codes and error codes. Available for the Quantile Range Outliers and Robust Fit Outliers methods. Off by default.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers(	Y( Column Group( "Sensor Measurements" ) ),	Quantile Range Outliers( Restrict search to integers( 1 ) ));

```

#### Save Quantile Outlier Limits

**Syntax:** obj &lt;&lt; Save Quantile Outlier Limits

**Description:** Opens a new data table containing the Quantile Range Outliers report information and a column of outlier values.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Quantile Range Outliers;obj << Save Quantile Outlier Limits;

```

#### Select Rows

**Syntax:** obj &lt;&lt; Select Rows( ALL or column1, column2, ... )

**Description:** Selects the columns listed as arguments and selects the rows that have outlying values in any of those columns.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Quantile Range Outliers( Tail Quantile( 0.3 ) );obj << Select Rows( :"Q-E"n, :"ZN-E"n );

```

#### Show only columns with outliers

**Syntax:** obj &lt;&lt; Show only columns with outliers( state=0|1 )

**Description:** Limits the list of columns in the report to those that contain outliers. Available for the Quantile Range Outliers and Robust Fit Outliers methods. Off by default.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers(	Y( Column Group( "Sensor Measurements" ) ),	Quantile Range Outliers( Show only columns with outliers( 1 ) ));

```

#### Tail Quantile

**Syntax:** obj &lt;&lt; Tail Quantile( number=.10 )

**Description:** Sets the quantile value for each tail. The quantiles are used in computing the interquantile distance. Use Rescan to apply the setting. ".10" by default.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Quantile Range Outliers( Tail Quantile( 0.2 ) );

```

## Robust Fit Outliers

### Item Messages

#### Add to Missing Value Codes

**Syntax:** obj &lt;&lt; Add to Missing Value Codes( ALL or column1, column2, ... )

**Description:** Selects the columns listed as arguments and adds a Missing Value Code property in those columns for outliers.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Robust Fit Outliers( K Sigma( 2 ) );obj << Add to Missing Value Codes( :"Q-E"n, :"ZN-E"n );

```

#### Cauchy

**Syntax:** obj &lt;&lt; Cauchy( state=0|1 )

**Description:** Uses a Cauchy distribution to estimate the robust center and scale of the values. The robust center and scale are used to determine outliers.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Robust Fit Outliers;obj << Cauchy( 1 );obj << Rescan;

```

#### Change to Missing

**Syntax:** obj &lt;&lt; Change to Missing( ALL or column1, column2, ... )

**Description:** Selects the columns listed as arguments. In selected columns, changes the values identified as outliers to missing values.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Robust Fit Outliers( K Sigma( 2 ) );Wait( 2 );obj << Change to Missing( :"Q-E"n, :"ZN-E"n );

```

#### Close

**Syntax:** obj &lt;&lt; Close

**Description:** Removes a section of the analysis and reopens the command outline.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Robust Fit Outliers;Wait( 2 );obj << Close;

```

#### Color Cells

**Syntax:** obj &lt;&lt; Color Cells( ALL or column1, column2, ... )

**Description:** Selects the columns listed as arguments. In selected columns, colors the cells that correspond to outliers.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Robust Fit Outliers( K Sigma( 2 ) );obj << Color Cells( :"Q-E"n, :"ZN-E"n );

```

#### Color Rows

**Syntax:** obj &lt;&lt; Color Rows( ALL or column1, column2, ... )

**Description:** Selects the columns listed as arguments. In selected columns, assigns the Color row state to the rows that correspond to outliers.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );dt << Clear Row States;obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Robust Fit Outliers( K Sigma( 2 ) );obj << Color Rows( :"Q-E"n, :"ZN-E"n );

```

#### Exclude Rows

**Syntax:** obj &lt;&lt; Exclude Rows( ALL or column1, column2, ... )

**Description:** Selects the columns listed as arguments. In selected columns, excludes the rows containing values identified as outliers.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Robust Fit Outliers( K Sigma( 2 ) );obj << Exclude Rows( :"Q-E"n, :"ZN-E"n );

```

#### Formula Columns

**Syntax:** obj &lt;&lt; Formula Columns( ALL or column1, column2, ... )

**Description:** Creates new formula columns from the selected columns by changing the outliers to missing.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Robust Fit Outliers( K Sigma( 2 ) );Wait( 2 );obj << Formula Columns( Suffix( "Culled" ) );

```

#### Formula Script

**Syntax:** obj &lt;&lt; Formula Script( ALL or column1, column2, ... )

**Description:** Creates a script to make new formula columns from the selected columns by changing the outliers to missing.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Robust Fit Outliers( K Sigma( 2 ) );Wait( 2 );obj << Formula Script( Suffix( "Culled" ) );

```

#### Huber

**Syntax:** obj &lt;&lt; Huber( state=0|1 )

**Description:** Uses Huber estimation to estimate the robust center and scale of the values. The robust center and scale are used to determine outliers.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Robust Fit Outliers;obj << Huber( 1 );obj << Rescan;

```

#### K Sigma

**Syntax:** obj &lt;&lt; K Sigma( number=4 )

**Description:** Sets the K Sigma value where outliers are defined to be K times the robust scale values away from the robust center. "4" by default.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Robust Fit Outliers;obj << K Sigma( 3 );obj << Rescan;

```

#### Quartile

**Syntax:** obj &lt;&lt; Quartile( state=0|1 )

**Description:** Uses the median to estimate the robust center and the interquartile range divided by 1.349 to estimate the robust scale. The robust center and scale are used to determine outliers.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Robust Fit Outliers;obj << Quartile( 1 );obj << Rescan;

```

#### Rescan

**Syntax:** obj &lt;&lt; Rescan

**Description:** Use after changing settings to recompute  the criteria and rescan the data to obtain outliers.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Robust Fit Outliers;obj << K Sigma( 2.5 );obj << Rescan;

```

#### Save Robust Outlier Limits

**Syntax:** obj &lt;&lt; Save Robust Outlier Limits

**Description:** Opens a new data table that contains information from the Robust Estimates and Outliers report.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Robust Fit Outliers;obj << Save Robust Outlier Limits;

```

#### Select Rows

**Syntax:** obj &lt;&lt; Select Rows( ALL or column1, column2, ... )

**Description:** Selects the columns listed as arguments and selects the rows that have outlying values in any of those columns.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Robust Fit Outliers( K Sigma( 2 ) );obj << Select Rows( :"Q-E"n, :"ZN-E"n );

```

## Robust PCA Outliers

### Item Messages

#### Center

**Syntax:** obj &lt;&lt; Center( state=1 )

**Description:** Specifies whether to center the data by the median before the analysis. On by default.

**JMP Version Added:** 16

#### Close

**Syntax:** obj &lt;&lt; Close

**Description:** Removes the RPCA analysis from the platform report.

**JMP Version Added:** 16

#### Lambda

**Syntax:** obj &lt;&lt; Lambda( number )

**Description:** Robust PCA tuning with lower values making it more sensitive to declaring outliers. Default Lambda=2/sqrt(max(nRow,nCol))

**JMP Version Added:** 16

#### MaxIt

**Syntax:** obj &lt;&lt; MaxIt( number )

**Description:** The maximum number of SVD iterations allowed before failing to converge.

**JMP Version Added:** 16

#### Outlier Threshold

**Syntax:** obj &lt;&lt; Outlier Threshold( number=2 )

**Description:** Specifies that any scaled residual larger in absolute value than this threshold is shown as it is shown in the outlier report. "2" by default.

**JMP Version Added:** 16

#### Randomized SVD Dim

**Syntax:** obj &lt;&lt; Randomized SVD Dim( state=0|1 )

**Description:** Specifies the number of dimensions in the randomized SVD to which to reduce the wide problem.

**JMP Version Added:** 17

#### Save Cleaned

**Syntax:** obj &lt;&lt; Save Cleaned( Trim(&lt;threshold&gt;),Impute(&lt;threshold&gt;),Make Missing(&lt;threshold&gt;),Color Impute(0|1)--if none specified it will prompt with dialog )

**Description:** Creates a new set of columns that contain missing values imputed and outliers modified. Trim(arg) finds scaled residuals greater than arg and changes the scaled residuals in the corresponding cells to the signed arg. Impute(arg) finds scaled residuals greater than arg and changes the scaled residuals in the corresponding cells to the low-rank approximation. Make Missing(value) finds any scaled residual greater than arg and changes scaled residuals in the corresponding cells to missing.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers(	Y( Column Group( "Sensor Measurements" ) ),	Robust PCA Outliers);obj << Save Cleaned( Trim( 25 ), Impute( 50 ), Make Missing( 100 ) );

```

#### Save Large Outliers

**Syntax:** obj &lt;&lt; Save Large Outliers

**Description:** Creates a new data table that contains the outliers in the report.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers(	Y( Column Group( "Sensor Measurements" ) ),	Robust PCA Outliers);obj << Save Large Outliers;

```

#### Save Low Rank Approx

**Syntax:** obj &lt;&lt; Save Low Rank Approx

**Description:** Creates a new set of columns that contain the low-rank approximation, which is obtained from the singular value decomposition.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers(	Y( Column Group( "Sensor Measurements" ) ),	Robust PCA Outliers);obj << Save Low Rank Approx;

```

#### Save Residuals

**Syntax:** obj &lt;&lt; Save Residuals

**Description:** Creates a new set of columns that contain the residuals, which are the observations minus the low-rank approximation.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers(	Y( Column Group( "Sensor Measurements" ) ),	Robust PCA Outliers);obj << Save Residuals;

```

#### Save Scaled Residuals

**Syntax:** obj &lt;&lt; Save Scaled Residuals

**Description:** Creates a new set of columns that contain the scaled residuals, which are the scaled observations minus the low-rank approximation.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers(	Y( Column Group( "Sensor Measurements" ) ),	Robust PCA Outliers);obj << Save Scaled Residuals;

```

#### Scale

**Syntax:** obj &lt;&lt; Scale( state=1 )

**Description:** Specifies whether to scale the data by an interquantile range analog to the standard deviation before the analysis. On by default.

**JMP Version Added:** 16

#### Tolerance

**Syntax:** obj &lt;&lt; Tolerance( number )

**Description:** Specifies the convergence criterion, which determines when to stop the algorithm. The default convergence criterion values are set based on the number of columns specified in the launch.

**JMP Version Added:** 16

#### Use Randomized SVD

**Syntax:** obj &lt;&lt; Use Randomized SVD( state=0|1 )

**Description:** Reduces the dimensionality using the randomized SVD. This approach can speed up computations for very wide problems.

**JMP Version Added:** 17


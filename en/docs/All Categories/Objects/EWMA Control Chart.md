# EWMA Control Chart



## Associated Constructors

### EWMA Control Chart

**Syntax:** EWMA Control Chart( Y( column ), &lt;Subgroup( column )&gt;, &lt;By( column )&gt;, &lt;Center Data( 1 )&gt; )

**Description:** Creates a chart that plots the exponentially weighted moving averages and a chart that plots either the individual observations or the subgroup means. An EWMA chart is also known as a feedback control chart.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );obj = dt << EWMA Control Chart( Y( :Gap ) );

```

## Columns

### By

**Syntax:** obj = EWMA Control Chart(...&lt;By( column(s) )&gt;...)

**Description:** Specifies the By column during launch.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << EWMA Control Chart(	Y( :Gap ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));

```

### Subgroup

**Syntax:** obj = EWMA Control Chart(...&lt;Subgroup( column )&gt;...)

**Description:** Specifies the Subgroup column during launch.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );obj = dt << EWMA Control Chart( Y( :Gap ), Subgroup( :Sample ) );

```

### Y

**Syntax:** obj = EWMA Control Chart(...Y( column(s) )...)

**Description:** Specifies the Y column during launch.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );obj = dt << EWMA Control Chart( Y( :Gap ) );

```

## Item Messages

### Alarm Script

**Syntax:** Alarm Script(Write("...")|Speak("...")|Mail(address, subject,"...") )

**Description:** Sends a message whenever a point on a control chart fails a given test. The message can be sent to the log, can be spoken, or can be emailed.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );obj = dt << EWMA Control Chart(	Alarm Script(		Write(			"Out of Control for test ",			qc_test,			" in column ",			qc_col,			" in sample ",			qc_sample,			". \!N"		)	),	Y( :Gap ),	Subgroup( :Sample ));obj << Test Beyond Limits( 1 );

```

### Center Data

**Syntax:** obj = EWMA Control Chart(...Center Data( state=0|1 )...)

**Description:** Specifies that the data are centered by subtracting the target from each observation.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );obj = dt << EWMA Control Chart( Y( :Gap ), Lambda( 0.2 ), Center Data( 1 ) );

```

### Connect Thru Missing

**Syntax:** obj &lt;&lt; Connect Thru Missing( state=0|1 )

**Description:** Connects points when some samples have missing values or excluded rows.

**JMP Version Added:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << EWMA Control Chart( Y( :Gap ) );Wait( 1 );obj << Connect Thru Missing( 1 );

```

### Constant Limits

**Syntax:** obj &lt;&lt; Constant Limits( state=0|1 )

**Description:** Uses an asymptotic expression to form constant EWMA limits.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );obj = dt << EWMA Control Chart( Y( :Gap ) );Wait();obj << Constant Limits( 1 );

```

### Control Panel

**Syntax:** obj &lt;&lt; Control Panel( state=0|1 )

**Description:** Shows or hides a report that contains the current values of the parameters and enables you to change them. On by default.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );obj = dt << EWMA Control Chart( Y( :Gap ) );obj << Control Panel( 0 );

```

### Get Limits

**Syntax:** obj &lt;&lt; Get Limits( filename )

**Description:** Imports control limits from a selected data table and replaces calculated limits on the chart.

**JMP Version Added:** 17

```jsl

dtLimits = New Table( "EWMA Limits",	New Column( "_LimitsKey",		Character,		Set Values( {"_KSigma", "_Weight", "_Mean", "_Std Dev"} )	),	New Column( "Gap", Set Values( [4, 0.3, 15, 0.2655555] ) ));dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );obj = dt << EWMA Control Chart( Y( :Gap ) );Wait( 1 );obj << Get Limits( dtLimits );

```

### K Sigma

**Syntax:** obj &lt;&lt; K Sigma( K value=3 )

**Description:** Sets the K value to be multiplied by sigma to form the control limits about the average. "3" by default.

**JMP Version Added:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );obj = dt << EWMA Control Chart( Y( :Gap ) );Wait( 1 );obj << K Sigma( 4 );

```

### Lambda

**Syntax:** obj &lt;&lt; Lambda( number=0.2 )

**Description:** Specifies the smoothing constant for weighting prior samples. "0.2" by default.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );obj = dt << EWMA Control Chart( Y( :Gap ) );obj << Lambda( 0.5 );

```

### Lambda Slider

**Syntax:** obj &lt;&lt; Lambda Slider( state=0|1 )

**Description:** Shows or hides the lambda slider on the control panel.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );obj = dt << EWMA Control Chart( Y( :Gap ) );obj << Lambda Slider( 1 );

```

### Overlay Charts

**Syntax:** obj &lt;&lt; Overlay Charts( state=0|1 )

**Description:** Overlays individual points, or XBar points if the data are summarized, on the EWMA chart.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );obj = dt << EWMA Control Chart( Y( :Gap ) );obj << Overlay Charts( 1 );

```

### Parameters Report

**Syntax:** obj &lt;&lt; Parameters Report( state=0|1 )

**Description:** Shows or hides the parameters report.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );obj = dt << EWMA Control Chart( Y( :Gap ) );obj << Parameters Report( 1 );

```

### Reset to Defaults

**Syntax:** obj &lt;&lt; Reset to Defaults

**Description:** Resets all parameters back to the default values.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );obj = dt << EWMA Control Chart( Y( :Gap ) );obj << Lambda( .9 );Wait( 1 );obj << Reset to Defaults();

```

### Restart EWMA after Empty Subgroup

**Syntax:** obj &lt;&lt; Restart EWMA after Empty Subgroup( state=0|1 )

**Description:** Restarts calculation of the EWMA statistic after each missing or excluded subgroup.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );dt << Select Rows( {31, 32, 33, 34, 35} ) << exclude << hide;Wait();obj = dt << EWMA Control Chart( Y( :Gap ), Subgroup( :Sample ) );Wait( 1 );obj << Restart EWMA after empty subgroup( 1 );

```

### Save Limits

**Syntax:** obj &lt;&lt; Save Limits( "in Column"|"in New Table" )

**Description:** Saves chart parameters to either a column property or a new data table.



If in Column is specified, the average value is saved in an EWMA Control Limits column property.



If in New Table is specified, Lambda (or weight), the standard deviation, and the mean for each chart are saved to a new data table.

**JMP Version Added:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );obj = dt << EWMA Control Chart( Y( :Gap ) );obj << Save Limits( "in Column" );obj << Save Limits( "in New Table" );

```

### Save Sigma

**Syntax:** obj &lt;&lt; Save Sigma

**Description:** Saves the sigma used in the control chart as a column property in the data table.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );obj = dt << EWMA Control Chart( Y( :Gap ) );obj << Save Sigma;

```

### Save Summaries

**Syntax:** obj &lt;&lt; Save Summaries

**Description:** Creates a new table that contains summary statistics and limits for each subgroup.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );obj = dt << EWMA Control Chart( Y( :Gap ) );obj << Save Summaries;

```

### Show ARL

**Syntax:** obj &lt;&lt; Show ARL( state=0|1 )

**Description:** Shows or hides a report with the Average Run Length computed from the associated EWMA and X charts.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );obj = dt << EWMA Control Chart( Y( :Gap ) );obj << Show ARL( 1 );

```

### Show Center Line

**Syntax:** obj &lt;&lt; Show Center Line( state=0|1 )

**Description:** Shows or hides the center line on the graph. On by default.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );obj = dt << EWMA Control Chart( Y( :Gap ) );obj << Show Center Line( 0 );

```

### Show Excluded Region

**Syntax:** obj = EWMA Control Chart(...Show Excluded Region( state=0|1 )...)

**Description:** Shows or hides the excluded region on the subgroup axis. Applies only for subgroup variables.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );dt << Select Rows( {31, 32, 33, 34, 35, 36, 37, 38, 39, 40} ) << exclude << hide;obj = dt << EWMA Control Chart( Y( :Gap ), Subgroup( :Sample ), Show Excluded Region( 0 ) );

```

### Show Limits

**Syntax:** obj &lt;&lt; Show Limits( state=0|1 )

**Description:** Shows or hides the limits. On by default.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );obj = dt << EWMA Control Chart( Y( :Gap ) );obj << Show Limits( 0 );

```

### Show Residuals Chart

**Syntax:** obj &lt;&lt; Show Residuals Chart( state=0|1 )

**Description:** Shows or hides a chart of residuals.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );obj = dt << EWMA Control Chart( Y( :Gap ) );obj << Show Residuals Chart( 0 );

```

### Show Shift Lines

**Syntax:** obj &lt;&lt; Show Shift Lines( state=0|1 )

**Description:** Shows or hides vertical lines that designate shifts in the chart. Shift lines are drawn at the start of a shift. Available only when there is a shift detected in the data. On by default.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );obj = dt << EWMA Control Chart( Y( :Gap ) );Wait( 1 );obj << Show Shift Lines( 0 );

```

### Show X Chart

**Syntax:** obj &lt;&lt; Show X Chart( state=0|1 )

**Description:** Shows or hides the Location chart below the EWMA chart. On by default.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );obj = dt << EWMA Control Chart( Y( :Gap ) );obj << Show X Chart( 0 );

```

### Show X Limits on Overlay Charts

**Syntax:** obj &lt;&lt; Show X Limits on Overlay Charts( state=0|1 )

**Description:** Overlays limits from the location chart on the EWMA chart when the Overlay Charts option is selected.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );obj = dt << EWMA Control Chart(	Y( :Gap ),	Show X Limits On Overlay Charts( 1 ),	Overlay Charts( 1 ));

```

### Sigma

**Syntax:** obj &lt;&lt; Sigma( number )

**Description:** Specifies the known value of the standard deviation. By default, this parameter is set to the average moving range of the Y column. If there is a Subgroup variable, the Sigma parameter is set to the average of the moving ranges of the subgroup means.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );obj = dt << EWMA Control Chart( Y( :Gap ) );obj << Sigma( 2 );

```

### Target

**Syntax:** obj &lt;&lt; Target( number )

**Description:** Specifies the known value of the mean. This is the value of the center line in the chart. By default, this parameter is set to the Target value in the Spec Limits column property for the Y column. If the Y column does not have a Target value in the Spec Limits column property, this parameter is set to the overall average of the Y column.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );obj = dt << EWMA Control Chart( Y( :Gap ) );obj << Target( 14.65 );

```

### Test Beyond Limits

**Syntax:** obj &lt;&lt; Test Beyond Limits( state=0|1 )

**Description:** Shows or hides a red circle around any point that is above the upper limit or below the lower limit in the EWMA and X charts.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << EWMA Control Chart( Y( :Gap ) );obj << Test Beyond Limits( 1 );

```

### Use Overall Mean for Target

**Syntax:** obj &lt;&lt; Use Overall Mean for Target( state=0|1 )

**Description:** Sets the Target at the overall mean. Note: Applicable only when the Target is set using a Spec Limits column property for Target.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << EWMA Control Chart( Y( :Gap ), Subgroup( :Date ) );Wait( 1 );obj << Use Overall Mean for Target();

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

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );obj = dt << EWMA Control Chart( Y( :Gap ) );obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**Syntax:** obj &lt;&lt; Broadcast(message)

**Description:** Broadcasts a message to a platform. If return results from individual objects are tables, they are concatenated if possible, and the final format is identical to either the result from the Save Combined Table option in a Table Box or the result from the Concatenate option using a Source column. Other than those, results are stored in a list and returned.

**JMP Version Added:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

### Copy ByGroup Script

**Syntax:** obj &lt;&lt; Copy ByGroup Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << EWMA Control Chart(	Y( :Gap ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );obj = dt << EWMA Control Chart( Y( :Gap ) );obj << Copy Script;

```

### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Description:** Move the data table window for this analysis to the front.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );obj = dt << EWMA Control Chart( Y( :Gap ) );obj << Data Table Window;

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

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << EWMA Control Chart(	Y( :Gap ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

```

### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

#### General

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );obj = dt << EWMA Control Chart( Y( :Gap ) );t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Platform with Filter

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Description:** Returns a reference to the data table.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );obj = dt << EWMA Control Chart( Y( :Gap ) );t = obj << Get Datatable;Show( N Rows( t ) );

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

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );obj = dt << EWMA Control Chart( Y( :Gap ) );t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );obj = dt << EWMA Control Chart( Y( :Gap ) );t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Description:** Times the platform launch.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );obj = dt << EWMA Control Chart( Y( :Gap ) );t = obj << Get Timing;Show( t );

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

### New Preset

**Syntax:** obj = New Preset()

**Description:** Create an anonymous preset representing the options and customizations applied to the object. This object can be passed to Apply Preset to copy the settings to another object of the same type.

**JMP Version Added:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

### Redo Analysis

**Syntax:** obj &lt;&lt; Redo Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );obj = dt << EWMA Control Chart( Y( :Gap ) );obj << Redo Analysis;

```

### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );obj = dt << EWMA Control Chart( Y( :Gap ) );obj << Relaunch Analysis;

```

### Report

**Syntax:** obj &lt;&lt; Report; Report( obj )

**Description:** Returns a reference to the report object.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );obj = dt << EWMA Control Chart( Y( :Gap ) );r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**Syntax:** obj &lt;&lt; Report View( "Full"|"Summary" )

**Description:** The report view determines the level of detail visible in a platform report. Full shows all of the detail, while Summary shows only select content, dependent on the platform. For customized behavior, display boxes support a <<Set Summary Behavior message.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );obj = dt << EWMA Control Chart( Y( :Gap ) );obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Creates a JSL script to produce this analysis, and save it as a table property in the data table. You can specify a name for the script. The Append Suffix option appends a numeric suffix to the script name, which differentiates the script from an existing script with the same name. The Prompt option prompts the user to specify a script name. The Replace option replaces an existing script with the same name.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << EWMA Control Chart(	Y( :Gap ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << EWMA Control Chart(	Y( :Gap ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << EWMA Control Chart(	Y( :Gap ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );obj = dt << EWMA Control Chart( Y( :Gap ) );obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << EWMA Control Chart(	Y( :Gap ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << EWMA Control Chart(	Y( :Gap ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );obj = dt << EWMA Control Chart( Y( :Gap ) );obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );obj = dt << EWMA Control Chart( Y( :Gap ) );obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );obj = dt << EWMA Control Chart( Y( :Gap ) );obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );obj = dt << EWMA Control Chart( Y( :Gap ) );obj << Save Script to Script Window;

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

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );obj = dt << EWMA Control Chart( Y( :Gap ) );obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Description:** Returns a reference to the root node in the report.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );obj = dt << EWMA Control Chart( Y( :Gap ) );r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

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

**Syntax:** obj = EWMA Control Chart(...Window View( "Visible"|"Invisible"|"Private" )...)

**Description:** Set the type of the window to be created for the report. By default a Visible report window will be created. An Invisible window will not appear on screen, but is discoverable by functions such as Window(). A Private window responds to most window messages but is not discoverable and must be addressed through the report object

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```


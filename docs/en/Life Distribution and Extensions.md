# Life Distribution and Extensions



## Compare Groups

### Action

**Syntax:** obj << Action

**Description:** All-purpose trapdoor within a platform to insert expressions to evaluate. Temporarily sets the DisplayBox and DataTable contexts to the Platform.

```js

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

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**Search within folder(s)**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

### Automatic Recalc

**Syntax:** obj << Automatic Recalc( state=0|1 )

**Description:** Redoes the analysis automatically for exclude and data changes. If the Automatic Recalc option is turned on, you should consider using Wait(0) commands to ensure that the exclude and data changes take effect before the recalculation.

```js

Names Default To Here( 1 );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**Syntax:** obj << Broadcast(message)

**Description:** Broadcasts a message to a platform. If return results from individual objects are tables, they are concatenated if possible, and the final format is identical to either the result from the Save Combined Table option in a Table Box or the result from the Concatenate option using a Source column. Other than those, results are stored in a list and returned.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

### Censor

**Syntax:** obj << Censor( column )

### Change Confidence Level

**Syntax:** obj << Change Confidence Level( fraction )

**Description:** Specifies the confidence level for the entire platform. All plots and reports update accordingly.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Life Distribution(
	Perspective( Compare Groups ),
	Y( :days ),
	Grouping( :Group ),
	Censor( :Censor ),
	Select Distribution( Distribution, Exponential )
);
obj << Change Confidence Level( 0.99 );

```

### Column Switcher

**Syntax:** obj << Column Switcher(column reference, {column reference, ...}, < Title(title) >, < Close Outline(0|1) >, < Retain Axis Settings(0|1) >, < Layout(0|1) >)

**Description:** Adds a control panel for changing the platform&apos;s variables

```js

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

```js

Names Default To Here( 1 );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj << Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```js

Names Default To Here( 1 );
obj << Copy Script;

```

### Data Table Window

**Syntax:** obj << Data Table Window

**Description:** Move the data table window for this analysis to the front.

```js

Names Default To Here( 1 );
obj << Data Table Window;

```

### Default Parametric Distribution

**Syntax:** obj << Default Parametric Distribution( "Lognormal"|"Weibull"|"Loglogistic"|"Frechet"|"Normal"|"SEV"|"Logistic"|"LEV"|"Exponential"|"LogGenGamma"|"GenGamma"|"TH Weibull"|"TH Lognormal"|"TH Frechet"|"TH Loglogistic"|"ZI Weibull"|"ZI Lognormal"|"ZI Frechet"|"ZI Loglogistic"|"DS Weibull"|"DS Lognormal"|"DS Frechet"|"DS Loglogistic" )

### Estimate Probability

**Syntax:** obj << Estimate Probability( state=<0|1> | <Compute( array )> )

**Description:** Shows or hides an Estimate Probability report that corresponds to the most recently selected distribution in the Compare Distribution report. Use the Compute argument to specify an array of time values for the probability estimation.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Life Distribution(
	Perspective( Compare Groups ),
	Y( :days ),
	Grouping( :Group ),
	Censor( :Censor ),
	Select Distribution( Distribution, Exponential )
);
obj << Estimate Probability( 1 );
obj << Estimate Probability( Compute( [1000] ) );

```

### Estimate Quantile

**Syntax:** obj << Estimate Quantile( state=<0|1> | <Compute( array )> )

**Description:** Shows or hides an Estimate Quantile report that corresponds to the most recently selected distribution in the Compare Quantile report. Use the Compute argument to specify an array of probability values for the quantile estimation.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Life Distribution(
	Perspective( Compare Groups ),
	Y( :days ),
	Grouping( :Group ),
	Censor( :Censor ),
	Show Quantile Functions( 1 )
);
obj << Select Distribution( Quantile, Exponential );
obj << Estimate Quantile( 1 );
obj << Estimate Quantile( Compute( [.1] ) );

```

### Fit Distribution

**Syntax:** obj << Fit Distribution( distribution )

**Description:** Fits the specified distribution.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Life Distribution(
	Perspective( Compare Groups ),
	Y( :days ),
	Grouping( :Group ),
	Censor( :Censor )
);
obj << Fit Distribution( "Loglogistic" );

```

### Freq

**Syntax:** obj << Freq( column )

### Get By Levels

**Syntax:** obj << Get By Levels

**Description:** Returns an associative array mapping the by group columns to their values.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**Syntax:** obj << Get ByGroup Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```js

Names Default To Here( 1 );
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Syntax:** obj << Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

**General**

```js

Names Default To Here( 1 );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Platform with Filter**

```js

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

```js

Names Default To Here( 1 );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**Syntax:** obj << Get Group Platform

**Description:** Return the Group Platform object if this platform is part of a Group. Otherwise, returns Empty().

```js

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

```js

Names Default To Here( 1 );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntax:** obj << Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```js

Names Default To Here( 1 );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntax:** obj << Get Timing

**Description:** Times the platform launch.

```js

Names Default To Here( 1 );
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**Syntax:** obj << Get Web Support

**Description:** Return a number indicating the level of Interactive HTML support for the display object. 1 means some or all elements are supported. 0 means no support.

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Grouping

**Syntax:** obj << Grouping( column(s) )

### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Description:** Ignores the current settings of the platform&apos;s preferences. The message is ignored when sent to the platform after creation.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Interval Type

**Syntax:** obj << Interval Type( "Simultaneous"|"Pointwise" )

**Description:** Specifies the type of confidence interval shown for the Nonparametric fit in the Compare Distributions plot. The available options are pointwise or simultaneous confidence intervals.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Life Distribution(
	Perspective( Compare Groups ),
	Y( :days ),
	Grouping( :Group ),
	Censor( :Censor )
);
Wait( 1 );
obj << Interval Type( "Pointwise" );

```

### Label

**Syntax:** obj << Label( column )

### Local Data Filter

**Syntax:** obj << Local Data Filter

**Description:** To filter data to specific groups or ranges, but local to this platform

```js

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

### New JSL Preset

**Syntax:** New JSL Preset( preset )

**Description:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Version Added:** 18

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Paste Local Data Filter

**Syntax:** obj << Paste Local Data Filter

**Description:** Apply the local data filter from the clipboard to the current report.

```js

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

### Redo Analysis

**Syntax:** obj << Redo Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```js

Names Default To Here( 1 );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntax:** obj << Redo ByGroup Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```js

Names Default To Here( 1 );
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Syntax:** obj << Relaunch Analysis

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```js

Names Default To Here( 1 );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntax:** obj << Relaunch ByGroup

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```js

Names Default To Here( 1 );
obj[1] << Relaunch ByGroup;

```

### Remove Column Switcher

**Syntax:** obj << Remove Column Switcher

**Description:** Removes the most recent Column Switcher that has been added to the platform.

```js

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

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**Syntax:** obj << Report;

Report( obj )

**Description:** Returns a reference to the report object.

```js

Names Default To Here( 1 );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntax:** obj << Report View( "Full"|"Summary" )

**Description:** The report view determines the level of detail visible in a platform report. Full shows all of the detail, while Summary shows only select content, dependent on the platform. For customized behavior, display boxes support a <<Set Summary Behavior message.

```js

Names Default To Here( 1 );
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description:** Creates a JSL script to produce this analysis, and save it as a table property in the data table. You can specify a name for the script. The Append Suffix option appends a numeric suffix to the script name, which differentiates the script from an existing script with the same name. The Prompt option prompts the user to specify a script name. The Replace option replaces an existing script with the same name.

```js

Names Default To Here( 1 );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj << Save ByGroup Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```js

Names Default To Here( 1 );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj << Save ByGroup Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```js

Names Default To Here( 1 );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntax:** obj << Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj << Save Script for All Objects To Data Table( <name> )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```js

Names Default To Here( 1 );
obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```js

Names Default To Here( 1 );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```js

Names Default To Here( 1 );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj << Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```js

Names Default To Here( 1 );
obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj << Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```js

Names Default To Here( 1 );
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj << Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```js

Names Default To Here( 1 );
obj << Save Script to Script Window;

```

### Select Distribution

**Syntax:** obj << Select Distribution( Distribution|Quantile|Hazard|Density, distribution )

**Description:** Specifies a distribution to show for each group on the specified graph. This is equivalent to selecting a distribution option in the Compare Distribution, Compare Quantile, Compare Hazard, or Compare Density reports.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Life Distribution(
	Perspective( Compare Groups ),
	Y( :days ),
	Grouping( :Group ),
	Censor( :Censor )
);
obj << Select Distribution( Distribution, Weibull );

```

### Select Scale

**Syntax:** obj << Select Scale( distribution )

**Description:** Specifies a scale for the probability axis in the Compare Distribution plot. This is equivalent to selecting an option under Scale in the Compare Distribution report.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Life Distribution(
	Perspective( Compare Groups ),
	Y( :days ),
	Grouping( :Group ),
	Censor( :Censor )
);
obj << Select Scale( Normal );

```

### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Description:** Sends platform commands or display customization commands to each level of a by-group.

```js

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

```js

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

```js

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

### Show Confidence Area

**Syntax:** obj << Show Confidence Area( state=0|1 )

**Description:** Shows or hides the shaded confidence regions in the plots. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Life Distribution(
	Perspective( Compare Groups ),
	Y( :days ),
	Grouping( :Group ),
	Censor( :Censor ),
	Select Distribution( Distribution, Exponential )
);
Wait( 1 );
obj << Show Confidence Area( 0 );

```

### Show Density Functions

**Syntax:** obj << Show Density Functions( state=0|1 )

**Description:** Shows or hides the Compare Density report, which overlays plots of the density functions for each group for the selected distribution.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Life Distribution(
	Perspective( Compare Groups ),
	Y( :days ),
	Grouping( :Group ),
	Censor( :Censor ),
	Show Density Functions( 1 )
);
obj << Select Distribution( Density, Weibull );

```

### Show Hazard Functions

**Syntax:** obj << Show Hazard Functions( state=0|1 )

**Description:** Shows or hides the Compare Hazard report, which overlays plots of the hazard functions for each group for the selected distribution.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Life Distribution(
	Perspective( Compare Groups ),
	Y( :days ),
	Grouping( :Group ),
	Censor( :Censor ),
	Show Hazard Functions( 1 )
);
obj << Select Distribution( Hazard, Weibull );

```

### Show Points

**Syntax:** obj << Show Points( state=0|1 )

**Description:** Shows or hides data points in the probability plot. The Life Distribution platform uses the midpoint estimates of the step function to construct probability plots. When you deselect the Show Points option, the midpoint estimates are replaced by Kaplan-Meier estimates. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Life Distribution(
	Perspective( Compare Groups ),
	Y( :days ),
	Grouping( :Group ),
	Censor( :Censor )
);
Wait( 1 );
obj << Show Points( 0 );

```

### Show Quantile Functions

**Syntax:** obj << Show Quantile Functions( state=0|1 )

**Description:** Shows or hides the Compare Quantile report, which overlays plots of the quantile functions for each group for the selected distribution.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Life Distribution(
	Perspective( Compare Groups ),
	Y( :days ),
	Grouping( :Group ),
	Censor( :Censor ),
	Show Quantile Functions( 1 )
);
obj << Select Distribution( Quantile, Weibull );

```

### Show Survival Curve

**Syntax:** obj << Show Survival Curve( state=0|1 )

**Description:** Switches between the failure probability and the survival curve on the Compare Distribution probability plot.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Life Distribution(
	Perspective( Compare Groups ),
	Y( :days ),
	Grouping( :Group ),
	Censor( :Censor ),
	Show Survival Curve( 1 )
);

```

### Sync to Data Table Changes

**Syntax:** obj << Sync to Data Table Changes

**Description:** Sync with the exclude and data changes that have been made.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

### Tabbed Report

**Syntax:** obj << Tabbed Report( state=0|1 )

**Description:** Shows graphs and data in individual tabs rather than in the default outline style.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Life Distribution(
	Perspective( Compare Groups ),
	Y( :days ),
	Grouping( :Group ),
	Censor( :Censor ),
	Tabbed Report( 1 )
);

```

### Time to Event

**Syntax:** obj << Time to Event( column(s) )

### Title

**Syntax:** obj << Title( "new title" )

**Description:** Sets the title of the platform.

```js

Names Default To Here( 1 );
obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj << Top Report

**Description:** Returns a reference to the root node in the report.

```js

Names Default To Here( 1 );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transform Column

**Syntax:** obj = <Platform>(... Transform Column(<name>, Formula(<expression>), [Random Seed(<n>)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description:** Create a transform column in the local context of an object, usually a platform. The transform column is active only for the lifetime of the platform.

**JMP Version Added:** 16

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Window View

**Syntax:** obj = Y(...Window View( "Visible"|"Invisible"|"Private" )...)

**Description:** Set the type of the window to be created for the report. By default a Visible report window will be created. An Invisible window will not appear on screen, but is discoverable by functions such as Window(). A Private window responds to most window messages but is not discoverable and must be addressed through the report object

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

### Y

**Syntax:** obj << Y( column(s) )

## Competing Cause > Mean Remaining Life

### Compute

**Syntax:** obj << Mean Remaining Life( Compute( array ) )

**Description:** Specifies an array of time values to be added to the Mean Remaining Life Calculator.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
obj << Mean Remaining Life( Configuration( 1, 100, 1000, 333 ), Compute( [1000 2000] ) );

```

### Configuration

**Syntax:** obj << Mean Remaining Life( Configuration( useBootstrap, BootstrapSize, SampleSize, RandomSeed ) )

**Description:** Specifies the settings for the Mean Remaining Life Calculator, which estimates the mean remaining life of a unit at a set of given survival times. The arguments specify if a bootstrap should be used, the number of bootstrap aggregated distributions, the number of simulated failure times, and a random seed. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
obj << Mean Remaining Life( Configuration( 1, 100, 1000, 333 ), Compute( [1000 2000] ) );

```

### Get Results

**Syntax:** obj << Mean Remaining Life( Get Results )

**Description:** Returns a matrix of the table in the Mean Remaining Life Calculator.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
obj << Mean Remaining Life( Configuration( 1, 100, 1000, 333 ), Compute( [1000 2000] ) );
obj << Mean Remaining Life( Get Results );

```

## Competing Cause

### Action

**Syntax:** obj << Action

**Description:** All-purpose trapdoor within a platform to insert expressions to evaluate. Temporarily sets the DisplayBox and DataTable contexts to the Platform.

```js

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

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**Search within folder(s)**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

### Automatic Recalc

**Syntax:** obj << Automatic Recalc( state=0|1 )

**Description:** Redoes the analysis automatically for exclude and data changes. If the Automatic Recalc option is turned on, you should consider using Wait(0) commands to ensure that the exclude and data changes take effect before the recalculation.

```js

Names Default To Here( 1 );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Bootstrap Sample Size

**Syntax:** obj << Bootstrap Sample Size( n )

**Description:** Specifies the number of samples to be used in the bootstrap method that is used to obtain Bayesian estimates or Weibayes results. For Bayesian and Weibayes methods, the confidence limits for the aggregated functions that appear in the Distribution Profiler must be simulated using a parametric bootstrap.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull ),
	Allow failure mode to use Bayesian models( 1 ),
	Fit Model(
		{{"0", Bayesian Lognormal, 0}, {"1", Weibull, 1}, {"10", Weibull, 0}, {"15",
		Weibull, 0}, {"2", Weibull, 0}, {"5", Weibull, 0}, {"6", Weibull, 0}, {"9",
		Weibull, 0}}
	)
);
obj << Bootstrap Sample Size( 1000 );

```

### Broadcast

**Syntax:** obj << Broadcast(message)

**Description:** Broadcasts a message to a platform. If return results from individual objects are tables, they are concatenated if possible, and the final format is identical to either the result from the Save Combined Table option in a Table Box or the result from the Concatenate option using a Source column. Other than those, results are stored in a list and returned.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

### By

**Syntax:** obj << By( column(s) )

### Censor

**Syntax:** obj << Censor( column )

### Column Switcher

**Syntax:** obj << Column Switcher(column reference, {column reference, ...}, < Title(title) >, < Close Outline(0|1) >, < Retain Axis Settings(0|1) >, < Layout(0|1) >)

**Description:** Adds a control panel for changing the platform&apos;s variables

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

### Compute Remaining Life Distribution

**Syntax:** obj << Compute Remaining Life Distribution( time0, time1 )

**Description:** Returns a list that contains the remaining life distribution value at time1, given that the unit survived through time0. The list also contains lower and upper limits for the remaining life estimate.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
obj << Show Remaining Life Distribution( 1 );
p = obj << Compute Remaining Life Distribution( 2000, 4000 );

```

### Copy ByGroup Script

**Syntax:** obj << Copy ByGroup Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```js

Names Default To Here( 1 );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj << Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```js

Names Default To Here( 1 );
obj << Copy Script;

```

### Data Table Window

**Syntax:** obj << Data Table Window

**Description:** Move the data table window for this analysis to the front.

```js

Names Default To Here( 1 );
obj << Data Table Window;

```

### Density

**Syntax:** obj << Density( t )

**Description:** Returns the density value at the specified time.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
d = obj << Density( .5 );

```

### Export Bootstrap Results

**Syntax:** obj << Export Bootstrap Results( time )

**Description:** Saves the bootstrap results to a new data table. A bootstrap method is used to obtain Bayesian estimates or Weibayes results. For Bayesian and Weibayes methods, the confidence limits for the aggregated functions that appear in the Distribution Profiler must be simulated using a parametric bootstrap.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull ),
	Allow failure mode to use Bayesian models( 1 ),
	Fit Model(
		{{"0", Bayesian Lognormal, 0}, {"1", Weibull, 1}, {"10", Weibull, 0}, {"15",
		Weibull, 0}, {"2", Weibull, 0}, {"5", Weibull, 0}, {"6", Weibull, 0}, {"9",
		Weibull, 0}}
	)
);
obj << Export Bootstrap Results( 15000 );

```

### Export Lifetime Data for Individual Causes

**Syntax:** obj << Export Lifetime Data for Individual Causes

**Description:** Export a stacked data set that consists of lifetime data for individual causes. A lifetime data for a cause is a copy of the original data while right censoring all observations other than the cause.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull ),
	Allow failure mode to use Bayesian models( 1 )
);
dt = obj << Export Lifetime Data for Individual Causes();

```

### Failure Cause

**Syntax:** obj << Failure Cause( column )

### Fit Model

**Syntax:** obj << Fit Model( specification )

**Description:** Fits a competing cause model using the given specification. The model is specified by a list of 3-item lists for each cause. Each sublist consists of a cause code, a distribution, and an indicator to omit the cause or not.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
obj << Fit Model(
	{{"0", Weibull, 1}, {"10", Weibull, 0}, {"15", Weibull, 0}, {"2", Weibull, 0}, {"5",
	Weibull, 0}, {"6", Weibull, 0}, {"9", Weibull, 0}}
);

```

### Freq

**Syntax:** obj << Freq( column )

### Get By Levels

**Syntax:** obj << Get By Levels

**Description:** Returns an associative array mapping the by group columns to their values.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**Syntax:** obj << Get ByGroup Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```js

Names Default To Here( 1 );
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Causes

**Syntax:** obj << Get Causes

**Description:** Returns a list of the cause codes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
lst = obj << Get Causes;

```

### Get Container

**Syntax:** obj << Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

**General**

```js

Names Default To Here( 1 );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Platform with Filter**

```js

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

```js

Names Default To Here( 1 );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Estimates

**Syntax:** obj << Get Estimates

**Description:** Returns a list that contains the causes, counts, distributions, and parameter estimates for the competing cause model.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
res = obj << Get Estimates;

```

### Get Group Platform

**Syntax:** obj << Get Group Platform

**Description:** Return the Group Platform object if this platform is part of a Group. Otherwise, returns Empty().

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

### Get Life Distribution

**Syntax:** obj << Get Life Distribution( i )

**Description:** Returns a reference to the specified Life Distribution report object in the Individual Causes section of the Competing Cause report. For the argument to this option, the Life Distribution reports are indexed from 0 to n-1, where n is the number of causes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
ld = (obj << Get Life Distribution( 1 ));

```

### Get Model Specification

**Syntax:** obj << Get Model Specification

**Description:** Returns a list that contains the specifications for the competing cause model. This list can be used as the argument for the Fit Model message for the Competing Cause platform.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
spec = obj << Get Model Specification;

```

### Get Script

**Syntax:** obj << Get Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```js

Names Default To Here( 1 );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntax:** obj << Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```js

Names Default To Here( 1 );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntax:** obj << Get Timing

**Description:** Times the platform launch.

```js

Names Default To Here( 1 );
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**Syntax:** obj << Get Web Support

**Description:** Return a number indicating the level of Interactive HTML support for the display object. 1 means some or all elements are supported. 0 means no support.

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Hazard

**Syntax:** obj << Hazard( t )

**Description:** Returns the value of the hazard function at the specified time.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
h = obj << Hazard( 2500 );

```

### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Description:** Ignores the current settings of the platform&apos;s preferences. The message is ignored when sent to the platform after creation.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Label

**Syntax:** obj << Label( column )

### Local Data Filter

**Syntax:** obj << Local Data Filter

**Description:** To filter data to specific groups or ranges, but local to this platform

```js

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

### Mean Remaining Life

**Syntax:** obj << Mean Remaining Life( state=0|1 )

obj << Mean Remaining Life( Configuration(), Compute(), Get Results )

**Description:** Shows or hides the Mean Remaining Life Calculator, which enables you to estimate the mean remaining life of a unit at a given survival time. You can also use this option to send messages to the Mean Remaining Life calculator object.

**Example 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
obj << Mean Remaining Life( 1 );

```

**Example 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
obj << Mean Remaining Life( Configuration( 1, 100, 1000, 333 ), Compute( [1000 2000] ) );

```

### New JSL Preset

**Syntax:** New JSL Preset( preset )

**Description:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Version Added:** 18

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Omit

**Syntax:** obj << Omit( k, 0|1 )

**Description:** Shows or hides the specified cause from the Cause Combination plot. The first argument specifies the number of the cause. If the second argument is 1, the specified cause is removed; if the second argument is 0, the specified cause is included.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
Wait( 1 );
obj << Omit( 1, 1 );

```

### Paste Local Data Filter

**Syntax:** obj << Paste Local Data Filter

**Description:** Apply the local data filter from the clipboard to the current report.

```js

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

### Probability

**Syntax:** obj << Probability( t )

**Description:** Returns the failure probability at the specified time.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
p = obj << Probability( 2500 );

```

### Quantile

**Syntax:** obj << Quantile( p )

**Description:** Returns the quantile value at the specified probability.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
q = obj << Quantile( .5 );

```

### Redo Analysis

**Syntax:** obj << Redo Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```js

Names Default To Here( 1 );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntax:** obj << Redo ByGroup Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```js

Names Default To Here( 1 );
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Syntax:** obj << Relaunch Analysis

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```js

Names Default To Here( 1 );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntax:** obj << Relaunch ByGroup

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```js

Names Default To Here( 1 );
obj[1] << Relaunch ByGroup;

```

### Remove Column Switcher

**Syntax:** obj << Remove Column Switcher

**Description:** Removes the most recent Column Switcher that has been added to the platform.

```js

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

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**Syntax:** obj << Report;

Report( obj )

**Description:** Returns a reference to the report object.

```js

Names Default To Here( 1 );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntax:** obj << Report View( "Full"|"Summary" )

**Description:** The report view determines the level of detail visible in a platform report. Full shows all of the detail, while Summary shows only select content, dependent on the platform. For customized behavior, display boxes support a <<Set Summary Behavior message.

```js

Names Default To Here( 1 );
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description:** Creates a JSL script to produce this analysis, and save it as a table property in the data table. You can specify a name for the script. The Append Suffix option appends a numeric suffix to the script name, which differentiates the script from an existing script with the same name. The Prompt option prompts the user to specify a script name. The Replace option replaces an existing script with the same name.

```js

Names Default To Here( 1 );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj << Save ByGroup Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```js

Names Default To Here( 1 );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj << Save ByGroup Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```js

Names Default To Here( 1 );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntax:** obj << Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj << Save Script for All Objects To Data Table( <name> )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```js

Names Default To Here( 1 );
obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```js

Names Default To Here( 1 );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```js

Names Default To Here( 1 );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj << Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```js

Names Default To Here( 1 );
obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj << Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```js

Names Default To Here( 1 );
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj << Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```js

Names Default To Here( 1 );
obj << Save Script to Script Window;

```

### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Description:** Sends platform commands or display customization commands to each level of a by-group.

```js

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

```js

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

```js

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

### Set Scale

**Syntax:** obj << Set Scale( name )

**Description:** Specifies the probability scale for the vertical axis of the Cause Combination plot.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
Wait( 1 );
obj << Set Scale( Weibull );

```

### Show Points

**Syntax:** obj << Show Points( <0|1> )

**Description:** Shows or hides data points in the Cause Combination plot. The Life Distribution platform uses the midpoint estimates of the step function to construct probability plots. When you deselect the Show Points option, the midpoint estimates are replaced by Kaplan-Meier estimates. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
Wait( 1 );
obj << Show Points( 0 );

```

### Show Remaining Life Distribution

**Syntax:** obj << Show Remaining Life Distribution( state=0|1 )

**Description:** Shows or hides the profiler of the remaining life distribution, which is conditional upon the unit surviving through a given time.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
obj << Show Remaining Life Distribution( 1 );

```

### Show Subdistributions

**Syntax:** obj << Show Subdistributions( state=0|1 )

**Description:** Shows or hides the profiler for each individual cause subdistribution. When you select the Show Subdistributions option, the Cause Combination plot updates to show the subdistribution functions for all causes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
obj << Show Subdistributions( 1 );

```

### Subdistribution

**Syntax:** obj << Subdistribution( Cause(i), Compute(m) )

**Description:** Specifies the cause and time values for the subdistribution calculations. The Cause argument specifies the number of the cause. The Compute argument is a column vector of time values. The Show Subdistributions option must be selected before using this message.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
obj << Show Subdistributions( 1 );
obj << Subdistribution( Cause( 2 ), Compute( [5000, 10000] ) );

```

### Sync to Data Table Changes

**Syntax:** obj << Sync to Data Table Changes

**Description:** Sync with the exclude and data changes that have been made.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

### Tabbed Report

**Syntax:** obj << Tabbed Report( state=0|1 )

**Description:** Organizes the sections of the Competing Cause report into tabs.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull ),
	Tabbed Report( 1 )
);

```

### Tabbed Report for Individual Causes

**Syntax:** obj << Tabbed Report for Individual Causes( state=0|1 )

**Description:** Organizes the Life Distribution reports in the Individual Causes section of the Competing Cause report into tabs.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull ),
	Tabbed Report for Individual Causes( 1 )
);

```

### Time to Event

**Syntax:** obj << Time to Event( column(s) )

### Title

**Syntax:** obj << Title( "new title" )

**Description:** Sets the title of the platform.

```js

Names Default To Here( 1 );
obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj << Top Report

**Description:** Returns a reference to the root node in the report.

```js

Names Default To Here( 1 );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transform Column

**Syntax:** obj = <Platform>(... Transform Column(<name>, Formula(<expression>), [Random Seed(<n>)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description:** Create a transform column in the local context of an object, usually a platform. The transform column is active only for the lifetime of the platform.

**JMP Version Added:** 16

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Window View

**Syntax:** obj = Y(...Window View( "Visible"|"Invisible"|"Private" )...)

**Description:** Set the type of the window to be created for the report. By default a Visible report window will be created. An Invisible window will not appear on screen, but is discoverable by functions such as Window(). A Private window responds to most window messages but is not discoverable and must be addressed through the report object

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

### Y

**Syntax:** obj << Y( column(s) )

## Life Distribution

### Action

**Syntax:** obj << Action

**Description:** All-purpose trapdoor within a platform to insert expressions to evaluate. Temporarily sets the DisplayBox and DataTable contexts to the Platform.

```js

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

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**Search within folder(s)**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

### Automatic Recalc

**Syntax:** obj << Automatic Recalc( state=0|1 )

**Description:** Redoes the analysis automatically for exclude and data changes. If the Automatic Recalc option is turned on, you should consider using Wait(0) commands to ensure that the exclude and data changes take effect before the recalculation.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**Syntax:** obj << Broadcast(message)

**Description:** Broadcasts a message to a platform. If return results from individual objects are tables, they are concatenated if possible, and the final format is identical to either the result from the Save Combined Table option in a Table Box or the result from the Concatenate option using a Source column. Other than those, results are stored in a list and returned.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

### By

**Syntax:** obj << By( column(s) )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), By( _bycol ) );

```

### Censor

**Syntax:** obj << Censor( column )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );

```

### Censor Code

**Syntax:** obj = Life Distribution(... Censor Code( value ) )

**Description:** Identifies the value in the Censor column that designates right-censored observations. "1" by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Life Distribution(
	Y( :Hours ),
	Censor( :Status ),
	Freq( :Weight ),
	Censor Code( "Censored" )
);
obj << Fit Lognormal;

```

### Change Confidence Level

**Syntax:** obj << Change Confidence Level( fraction )

**Description:** Specifies the confidence level for the entire platform. All plots and reports update accordingly.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), Fit Exponential );
obj << Change Confidence Level( 0.99 );

```

### Column Switcher

**Syntax:** obj << Column Switcher(column reference, {column reference, ...}, < Title(title) >, < Close Outline(0|1) >, < Retain Axis Settings(0|1) >, < Layout(0|1) >)

**Description:** Adds a control panel for changing the platform&apos;s variables

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

### Comparison Criterion

**Syntax:** obj << Comparison Criterion( <Negative Loglikelihood|AICc|BIC> )

**Description:** Specifies the criterion used to rank models in the Model Comparison report. For all three criteria, smaller values indicate better fit.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit All Distributions;
obj << Comparison Criterion( BIC );

```

### Confidence Interval Method

**Syntax:** obj = Life Distribution(... Confidence Interval Method( "Wald"|"Likelihood" ) )

**Description:** Specifies the method used for computing confidence intervals for the parameters. The default is Wald, but you can select Likelihood instead. However, all confidence intervals provided in the profilers are based on the Wald method. "Wald" by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Life Distribution(
	Y( :Hours ),
	Censor( :Status ),
	Freq( :Weight ),
	Censor Code( "Censored" ),
	Confidence Interval Method( "Likelihood" )
);
obj << Fit Lognormal;

```

### Copy ByGroup Script

**Syntax:** obj << Copy ByGroup Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj << Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Copy Script;

```

### Data Table Window

**Syntax:** obj << Data Table Window

**Description:** Move the data table window for this analysis to the front.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Data Table Window;

```

### Do Same Analyses For All Groups

**Syntax:** obj << Do Same Analyses For All Groups

**Description:** Applies all selected options from the current group to all by-group sections of the output.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Blenders.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	By( :Group ),
	Censor( :Censor ),
	Fit Exponential
);
obj[2] << Fit Weibull;
Wait( 1 );
obj[2] << Do Same Analyses For All Groups;

```

### Failure Cause

**Syntax:** obj << Failure Cause( column )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );

```

### Fit All DS Distributions

**Syntax:** obj << Fit All DS Distributions

**Description:** Fits all defective subpopulation (DS) distributions.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit All DS Distributions;

```

### Fit All Distributions

**Syntax:** obj << Fit All Distributions

**Description:** Fits all distributions except the threshold (TH) distributions.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit All Distributions;

```

### Fit All Nonnegative

**Syntax:** obj << Fit All Nonnegative

**Description:** Fits all distributions that support nonnegative observations.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit All Nonnegative;

```

### Fit Competing Risk Mixture

**Syntax:** obj << Fit Competing Risk Mixture( Mix( distribution( n ), <distribution( n ), ...>, method, <Show Profilers( 0|1 )>

**Description:** Specifies the distributions and options for a competing risk mixture model. The method argument is required and must be one of the following starting value methods: Single Cluster, Separable Clusters, or Overlapping Clusters.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Life Distribution(
	Y( :Hours ),
	Censor( :Status ),
	Censor Code( "Censored" ),
	Freq( :Weight ),
	<<Fit Lognormal
);
obj << Fit Competing Risk Mixture(
	Mix( Lognormal( 2 ), Single Cluster, Show Profilers( 0 ) )
);

```

### Fit DS Frechet

**Syntax:** obj << Fit DS Frechet

**Description:** Fits a defective subpopulation Fréchet distribution to the data. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit DS Frechet;

```

### Fit DS Loglogistic

**Syntax:** obj << Fit DS Loglogistic

**Description:** Fits a defective subpopulation loglogistic distribution to the data. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit DS Loglogistic;

```

### Fit DS Lognormal

**Syntax:** obj << Fit DS Lognormal

**Description:** Fits a defective subpopulation lognormal distribution to the data. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit DS Lognormal;

```

### Fit DS Weibull

**Syntax:** obj << Fit DS Weibull

**Description:** Fits a defective subpopulation Weibull distribution to the data. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit DS Weibull;

```

### Fit Exponential

**Syntax:** obj << Fit Exponential

**Description:** Fits an exponential distribution to the data.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit Exponential;

```

### Fit Frechet

**Syntax:** obj << Fit Frechet

**Description:** Fits a Fréchet distribution to the data.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit Frechet;

```

### Fit GenGamma

**Syntax:** obj << Fit GenGamma

**Description:** Fits a generalized gamma distribution to the data. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit GenGamma;

```

### Fit LEV

**Syntax:** obj << Fit LEV

**Description:** Fits a largest extreme value (LEV) distribution to the data.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit LEV;

```

### Fit LogGenGamma

**Syntax:** obj << Fit LogGenGamma

**Description:** Fits a log generalized gamma distribution to the data. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit LogGenGamma;

```

### Fit Logistic

**Syntax:** obj << Fit Logistic

**Description:** Fits a logistic distribution to the data.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit Logistic;

```

### Fit Loglogistic

**Syntax:** obj << Fit Loglogistic

**Description:** Fits a loglogistic distribution to the data.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit Loglogistic;

```

### Fit Lognormal

**Syntax:** obj << Fit Lognormal

**Description:** Fits a lognormal distribution to the data.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit Lognormal;

```

### Fit Mixture

**Syntax:** obj << Fit Mixture( Mix( distribution( n ), <distribution( n ), ...>, method, <Show Profilers( 0|1 )>

**Description:** Specifies the distributions and options for a mixture model. The method argument is required and must be one of the following starting value methods: Single Cluster, Separable Clusters, or Overlapping Clusters.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Life Distribution(
	Y( :Hours ),
	Censor( :Status ),
	Censor Code( "Censored" ),
	Freq( :Weight ),
	<<Fit Lognormal
);
obj << Fit Mixture( Mix( Lognormal( 2 ), Single Cluster, Show Profilers( 0 ) ) );

```

### Fit Normal

**Syntax:** obj << Fit Normal

**Description:** Fits a normal distribution to the data.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit Normal;

```

### Fit SEV

**Syntax:** obj << Fit SEV

**Description:** Fits a smallest extreme value (SEV) distribution to the data.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit SEV;

```

### Fit TH Frechet

**Syntax:** obj << Fit TH Frechet

**Description:** Fits a Fréchet with threshold distribution to the data. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit TH Frechet;

```

### Fit TH Loglogistic

**Syntax:** obj << Fit TH Loglogistic

**Description:** Fits a loglogistic with threshold distribution to the data. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit TH Loglogistic;

```

### Fit TH Lognormal

**Syntax:** obj << Fit TH Lognormal

**Description:** Fits a lognormal with threshold distribution to the data. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit TH Lognormal;

```

### Fit TH Weibull

**Syntax:** obj << Fit TH Weibull

**Description:** Fits a Weibull with threshold distribution to the data. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit TH Weibull;

```

### Fit Weibull

**Syntax:** obj << Fit Weibull

**Description:** Fits a Weibull distribution to the data.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit Weibull;

```

### Fit ZI Frechet

**Syntax:** obj << Fit ZI Frechet

**Description:** Fits a zero-inflated Fréchet distribution to the data. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Spring.jmp" );
obj = dt << Life Distribution( Y( :Precip ) );
obj << Fit ZI Frechet;

```

### Fit ZI Loglogistic

**Syntax:** obj << Fit ZI Loglogistic

**Description:** Fits a zero-inflated loglogistic distribution to the data. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Spring.jmp" );
obj = dt << Life Distribution( Y( :Precip ) );
obj << Fit ZI Loglogistic;

```

### Fit ZI Lognormal

**Syntax:** obj << Fit ZI Lognormal

**Description:** Fits a zero-inflated lognormal distribution to the data. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Spring.jmp" );
obj = dt << Life Distribution( Y( :Precip ) );
obj << Fit ZI Lognormal;

```

### Fit ZI Weibull

**Syntax:** obj << Fit ZI Weibull

**Description:** Fits a zero-inflated Weibull distribution to the data. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Spring.jmp" );
obj = dt << Life Distribution( Y( :Precip ) );
obj << Fit ZI Weibull;

```

### Freq

**Syntax:** obj << Freq( column )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), Freq( _freqcol ) );

```

### Get By Levels

**Syntax:** obj << Get By Levels

**Description:** Returns an associative array mapping the by group columns to their values.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**Syntax:** obj << Get ByGroup Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), By( _bycol ) );
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Syntax:** obj << Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

**General**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Platform with Filter**

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Estimates

**Syntax:** obj << Get Estimates

**Description:** Returns a list that contains the estimates for all fitted distributions. The list also contains the original data.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Fit Exponential,
	Set Scale( Exponential )
);
estimate = obj << Get Estimates;
Show( estimate );

```

### Get Formula

**Syntax:** obj << Get Formula

**Description:** Returns a list that contains the formulas for all fitted distributions. The list also contains the original data.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Fit Exponential,
	Set Scale( Exponential )
);
formula = obj << Get Formula;
Show( formula );

```

### Get Group Platform

**Syntax:** obj << Get Group Platform

**Description:** Return the Group Platform object if this platform is part of a Group. Otherwise, returns Empty().

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

### Get Results

**Syntax:** obj << Get Results

**Description:** Returns a list that contains the results for all fitted distributions. The list also contains the original data.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Fit Exponential,
	Set Scale( Exponential )
);
r = obj << Get Results;
Show( r );

```

### Get Script

**Syntax:** obj << Get Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntax:** obj << Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntax:** obj << Get Timing

**Description:** Times the platform launch.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**Syntax:** obj << Get Web Support

**Description:** Return a number indicating the level of Interactive HTML support for the display object. 1 means some or all elements are supported. 0 means no support.

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Description:** Ignores the current settings of the platform&apos;s preferences. The message is ignored when sent to the platform after creation.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Interval Type

**Syntax:** obj << Interval Type( "Simultaneous"|"Pointwise" )

**Description:** Specifies the type of confidence interval shown for the Nonparametric fit in the Compare Distributions plot. The available options are pointwise or simultaneous confidence intervals.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), Fit Exponential );
obj << Interval Type( "Pointwise" );

```

### Label

**Syntax:** obj << Label( column )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );

```

### Life Distribution

**Syntax:** Life Distribution( Y( column(s) ) )

**Description:** Analyzes the distribution of time-to-event data. Can be used for modeling censored data, product lifetime, reliability, and competing causes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );

```

### Local Data Filter

**Syntax:** obj << Local Data Filter

**Description:** To filter data to specific groups or ranges, but local to this platform

```js

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

### New JSL Preset

**Syntax:** New JSL Preset( preset )

**Description:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Version Added:** 18

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Nonparametric Estimate Plot Options

**Syntax:** obj << Nonparametric Estimate Plot Options( "Points"|"Step Function"|"Both"|"None" )

**Description:** Specifies how the data points in the probability plot are represented. You can choose between points, step functions, both points and step functions, or neither.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
Wait( 1 );
obj << Nonparametric Estimate Plot Options( "Step Function" );

```

### Paste Local Data Filter

**Syntax:** obj << Paste Local Data Filter

**Description:** Apply the local data filter from the clipboard to the current report.

```js

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

### Redo Analysis

**Syntax:** obj << Redo Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntax:** obj << Redo ByGroup Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

### Rejection Sampler Maximum Trials

**Syntax:** obj << Rejection Sampler Maximum Trials( number=10000 )

**Description:** "10000" by default.

**JMP Version Added:** 14

### Relaunch Analysis

**Syntax:** obj << Relaunch Analysis

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntax:** obj << Relaunch ByGroup

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), By( _bycol ) );
obj[1] << Relaunch ByGroup;

```

### Remove Column Switcher

**Syntax:** obj << Remove Column Switcher

**Description:** Removes the most recent Column Switcher that has been added to the platform.

```js

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

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**Syntax:** obj << Report;

Report( obj )

**Description:** Returns a reference to the report object.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntax:** obj << Report View( "Full"|"Summary" )

**Description:** The report view determines the level of detail visible in a platform report. Full shows all of the detail, while Summary shows only select content, dependent on the platform. For customized behavior, display boxes support a <<Set Summary Behavior message.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Report View( "Summary" );

```

### Save By Group Results

**Syntax:** obj << Save By Group Results

**Description:** Saves the resulting estimates for all by groups as a separate row in a new table.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Blenders.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	By( :Group ),
	Censor( :Censor ),
	Fit Exponential
);
obj[1] << Save By Group Results;

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description:** Creates a JSL script to produce this analysis, and save it as a table property in the data table. You can specify a name for the script. The Append Suffix option appends a numeric suffix to the script name, which differentiates the script from an existing script with the same name. The Prompt option prompts the user to specify a script name. The Replace option replaces an existing script with the same name.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj << Save ByGroup Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj << Save ByGroup Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntax:** obj << Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj << Save Script for All Objects To Data Table( <name> )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj << Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj << Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj << Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Save Script to Script Window;

```

### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Description:** Sends platform commands or display customization commands to each level of a by-group.

```js

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

```js

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

```js

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

### Set Scale

**Syntax:** obj << Set Scale( Linear|Lognormal|Weibull|Loglogistic|Frechet|Normal|SEV|Logistic|LEV|Exponential )

**Description:** Specifies a scale for the probability axis in the Compare Distributions plot.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), Fit Exponential );
obj << Set Scale( Exponential );

```

### Show Confidence Area

**Syntax:** obj << Show Confidence Area( state=0|1 )

**Description:** Shows or hides the shaded confidence regions in the plots. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), Fit Exponential );
Wait( 1 );
obj << Show Confidence Area( 0 );

```

### Show Event Plot Frequency Label

**Syntax:** obj << Show Event Plot Frequency Label( state=0|1 )

**Description:** Shows or hides the frequency labels in the Event Plot. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Microprocessor Data.jmp" );
obj = dt << Life Distribution( Y( :start time, end time ), Freq( :count ) );
Report( obj )["Event Plot"] << Close( 0 );
Wait( 1 );
obj << Show Event Plot Frequency Label( 0 );

```

### Show Hazard Functions

**Syntax:** obj << Show Hazard Functions( state=0|1 )

**Description:** Shows or hides the Hazard Profiler report, which overlays the plots of hazard functions for the selected distributions.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), Fit Exponential );
obj << Show Hazard Functions( 1 );

```

### Show Points

**Syntax:** obj << Show Points( state=0|1 )

**Description:** Shows or hides data points in the probability plot. The Life Distribution platform uses the midpoint estimates of the step function to construct probability plots. When you deselect the Show Points option, the midpoint estimates are replaced by Kaplan-Meier estimates. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
Wait( 1 );
obj << Show Points( 0 );

```

### Show Quantile Functions

**Syntax:** obj << Show Quantile Functions( state=0|1 )

**Description:** Shows or hides the Quantile Profiler report, which overlays the plots of quantile functions for the selected distributions.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), Fit Exponential );
obj << Show Quantile Functions( 1 );

```

### Show Statistics

**Syntax:** obj << Show Statistics( state=0|1 )

**Description:** Shows or hides the Statistics report, which contains model comparisons, a data summary, and nonparametric and parametric estimates. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), Fit Exponential );
Wait( 1 );
obj << Show Statistics( 0 );

```

### Show Survival Curve

**Syntax:** obj << Show Survival Curve( state=0|1 )

**Description:** Switches between the failure probability and the survival curve on the Compare Distributions probability plot and the Distribution Profiler plots.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Show Survival Curve( 1 ),
	Fit Exponential
);

```

### Suppress Plot

**Syntax:** obj << Suppress Plot( distribution name )

**Description:** Removes the specified distribution from the plots in the report. This option is equivalent to unchecking the corresponding box under Distribution in the Compare Distributions, Hazard Profiler, or Quantile Profiler reports.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution(
	Y( :Time ),
	Fit Weibull,
	Fit Lognormal,
	Set Scale( Weibull )
);
Wait( 2 );
obj << Suppress Plot( Lognormal );

```

### Sync to Data Table Changes

**Syntax:** obj << Sync to Data Table Changes

**Description:** Sync with the exclude and data changes that have been made.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

### Tabbed Report

**Syntax:** obj << Tabbed Report( state=0|1 )

**Description:** Shows graphs and data in individual tabs rather than in the default outline style.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), Fit Exponential );
obj << Tabbed Report( 1 );

```

### Time to Event

**Syntax:** obj << Time to Event( column(s) )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );

```

### Title

**Syntax:** obj << Title( "new title" )

**Description:** Sets the title of the platform.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj << Top Report

**Description:** Returns a reference to the root node in the report.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transform Column

**Syntax:** obj = <Platform>(... Transform Column(<name>, Formula(<expression>), [Random Seed(<n>)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description:** Create a transform column in the local context of an object, usually a platform. The transform column is active only for the lifetime of the platform.

**JMP Version Added:** 16

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Window View

**Syntax:** obj = Life Distribution(...Window View( "Visible"|"Invisible"|"Private" )...)

**Description:** Set the type of the window to be created for the report. By default a Visible report window will be created. An Invisible window will not appear on screen, but is discoverable by functions such as Window(). A Private window responds to most window messages but is not discoverable and must be addressed through the report object

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

### Y

**Syntax:** obj << Y( column(s) )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );

```


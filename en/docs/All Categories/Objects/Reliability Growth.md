# Reliability Growth



## Associated Constructors

### Reliability Growth

**Syntax:** obj = Reliability Growth( Input Format( Time to Event ), Time to Event( column, <column> ), <Event Count( column )>, <Phase( column )> );



obj = Reliability Growth( Input Format( Dates ), Timestamp( column, <column> ), <Event Count( column )>, <Phase( column )> );



obj = Reliability Growth( Input Format( Concurrent Systems ), Time to Event( column, column, ... ), System ID( column ), <Phase( column )> )



obj = Reliability Growth( Input Format( Parallel Systems ), Time to Event( column, column, ... ), <Event Count( column )>, System ID( column ), <Phase( column )> )

**Description:** Models the change in reliability of a single repairable system over time as improvements are incorporated into its design. The platform accepts several input formats. See each format for specification details.

**Concurrent Systems**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Concurrent Systems.jmp" );
obj = dt << Reliability Growth(
	Input Format( Concurrent Systems ),
	Time to Event( :Prototype 1, :Prototype 2 ),
	System ID( :Failed System ),

);
obj << Crow AMSAA;

```

**Dates**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/BrakeReliability.jmp" );
obj = dt << Reliability Growth(
	Input Format( Dates ),
	Timestamp( :Date ),
	Event Count( :Fixes )
);

```

**Parallel Systems**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Parallel Systems Multiple Phases.jmp" );
obj = dt << Reliability Growth(
	Input Format( Parallel Systems ),
	Time to Event( :Hours ),
	Event Count( :Fixes ),
	System ID( :System ID ),
	Phase( :Phase )
);
obj << Piecewise Weibull NHPP with Different Intercepts;

```

**Time to Event**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;

```

## Item Messages

### Crow AMSAA

**Syntax:** obj << Crow AMSAA

**Description:** Fits a Crow-AMSAA model. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;

```

### Crow AMSAA with Modified MLE

**Syntax:** obj << Crow AMSAA with Modified MLE

**Description:** Fits a Crow-AMSAA model with bias correction for beta. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA with Modified MLE;

```

### Distinct Phase Weibull NHPP

**Syntax:** obj << Distinct Phase Weibull NHPP

**Description:** Fits a Distinct Phase Weibull NHPP model, where each system in a multi-phase study follows the same Crow-AMSAA model in each phase. This model contains one beta parameter and one lambda parameter for each phase. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Parallel Systems Different Intercepts.jmp" );
obj = dt << Reliability Growth(
	Input Format( Parallel Systems ),
	Time to Event( :Hours ),
	Event Count( :Fixes ),
	System ID( :System ID ),
	Phase( :Phase )
);
obj << Distinct Phase Weibull NHPP;

```

### Distinct System Weibull NHPP

**Syntax:** obj << Distinct System Weibull NHPP

**Description:** Fits a Distinct System Weibull NHPP model, where each system in the study follows a separate Crow-AMSAA model with different parameters. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Parallel Systems One Phase.jmp" );
obj = dt << Reliability Growth(
	Input Format( Parallel Systems ),
	Time to Event( :Hours ),
	Event Count( :Repairs ),
	System ID( :System ID )
);
obj << Distinct System Weibull NHPP;

```

### Distinct Weibull NHPP

**Syntax:** obj << Distinct Weibull NHPP

**Description:** Fits a Distinct Weibull NHPP model, where each system in a multi-phase study follows a separate Crow-AMSAA model in each phase. This model contains one beta parameter and one lambda parameter for each combination of system and phase in the study. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Parallel Systems Different Intercepts.jmp" );
obj = dt << Reliability Growth(
	Input Format( Parallel Systems ),
	Time to Event( :Hours ),
	Event Count( :Fixes ),
	System ID( :System ID ),
	Phase( :Phase )
);
obj << Distinct Weibull NHPP;

```

### Fixed Parameter Crow AMSAA

**Syntax:** obj << Fixed Parameter Crow AMSAA( <lambda ( number )>, <beta ( number )> )

**Description:** Fits a Fixed Parameter Crow-AMSAA model. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Fixed Parameter Crow AMSAA( lambda( .02 ) );

```

### Get Results

**Syntax:** obj << Get Results

**Description:** Returns a named list that contains the model estimation results.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
Show( obj << Get Results );

```

### Identical System Weibull NHPP

**Syntax:** obj << Identical System Weibull NHPP

**Description:** Fits an Identical System Weibull NHPP model, where each system in the study follows a single Crow-AMSAA model. The differences among the systems are assumed to be due to the randomness of individual realizations of the same model. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Parallel Systems One Phase.jmp" );
obj = dt << Reliability Growth(
	Input Format( Parallel Systems ),
	Time to Event( :Hours ),
	Event Count( :Repairs ),
	System ID( :System ID )
);
obj << Identical System Weibull NHPP;

```

### Piecewise Weibull NHPP

**Syntax:** obj << Piecewise Weibull NHPP

**Description:** Fits a Piecewise Weibull NHPP model. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/TurbineEngineDesign1.jmp" );
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Day ),
	Event Count( :Fixes ),
	Phase( :Design Phase )
);
obj << Piecewise Weibull NHPP;

```

### Piecewise Weibull NHPP Change Point Detection

**Syntax:** obj << Piecewise Weibull NHPP Change Point Detection

**Description:** Estimates a change point in the data and fits a Piecewise Weibull NHPP model. This option is not available when a Phase variable is specified. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/BrakeReliability.jmp" );
obj = dt << Reliability Growth(
	Input Format( Dates ),
	Timestamp( :Date ),
	Event Count( :Fixes )
);
obj << Piecewise Weibull NHPP Change Point Detection;

```

### Piecewise Weibull NHPP with Different Intercepts

**Syntax:** obj << Piecewise Weibull NHPP with Different Intercepts

**Description:** Fits a Piecewise Weibull NHPP with Different Intercepts model, where each system in a multi-phase study follows a separate piecewise Weibull NHPP model. This model contains one beta parameter for each phase and one lambda parameter for each system. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Parallel Systems Multiple Phases.jmp" );
obj = dt << Reliability Growth(
	Input Format( Parallel Systems ),
	Time to Event( :Hours ),
	Event Count( :Fixes ),
	System ID( :System ID ),
	Phase( :Phase )
);
obj << Piecewise Weibull NHPP with Different Intercepts;

```

### Reinitialized Weibull NHPP

**Syntax:** obj << Reinitialized Weibull NHPP

**Description:** Fits a Reinitialized Weibull NHPP model. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/ProductionEquipment.jmp" );
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Hours of Operation ),
	Event Count( :Fixes ),
	Phase( :Design Stage )
);
obj << Reinitialized Weibull NHPP;

```

## Shared Item Messages

### Action

**Syntax:** obj << Action

**Description:** All-purpose trapdoor within a platform to insert expressions to evaluate. Temporarily sets the DisplayBox and DataTable contexts to the Platform.

```jsl

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

**Anonymous preset**

```jsl

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

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**Search within folder(s)**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

### Automatic Recalc

**Syntax:** obj << Automatic Recalc( state=0|1 )

**Description:** Redoes the analysis automatically for exclude and data changes. If the Automatic Recalc option is turned on, you should consider using Wait(0) commands to ensure that the exclude and data changes take effect before the recalculation.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Column Switcher

**Syntax:** obj << Column Switcher(column reference, {column reference, ...}, < Title(title) >, < Close Outline(0|1) >, < Retain Axis Settings(0|1) >, < Layout(0|1) >)

**Description:** Adds a control panel for changing the platform&apos;s variables

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

### Copy Script

**Syntax:** obj << Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
obj << Copy Script;

```

### Data Table Window

**Syntax:** obj << Data Table Window

**Description:** Move the data table window for this analysis to the front.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
obj << Data Table Window;

```

### Get By Levels

**Syntax:** obj << Get By Levels

**Description:** Returns an associative array mapping the by group columns to their values.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get Container

**Syntax:** obj << Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

**General**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Platform with Filter**

```jsl

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

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Script

**Syntax:** obj << Get Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntax:** obj << Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntax:** obj << Get Timing

**Description:** Times the platform launch.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**Syntax:** obj << Get Web Support

**Description:** Return a number indicating the level of Interactive HTML support for the display object. 1 means some or all elements are supported. 0 means no support.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Where Expr

**Syntax:** obj << Get Where Expr

**Description:** Returns the Where expression for the data subset, if the platform was launched with By() or Where(). Otherwise, returns Empty()

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Description:** Ignores the current settings of the platform&apos;s preferences. The message is ignored when sent to the platform after creation.

```jsl

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

```jsl

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

```jsl

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

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Paste Local Data Filter

**Syntax:** obj << Paste Local Data Filter

**Description:** Apply the local data filter from the clipboard to the current report.

```jsl

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

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
obj << Redo Analysis;

```

### Relaunch Analysis

**Syntax:** obj << Relaunch Analysis

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
obj << Relaunch Analysis;

```

### Remove Column Switcher

**Syntax:** obj << Remove Column Switcher

**Description:** Removes the most recent Column Switcher that has been added to the platform.

```jsl

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

```jsl

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

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**Syntax:** obj << Report;

Report( obj )

**Description:** Returns a reference to the report object.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntax:** obj << Report View( "Full"|"Summary" )

**Description:** The report view determines the level of detail visible in a platform report. Full shows all of the detail, while Summary shows only select content, dependent on the platform. For customized behavior, display boxes support a <<Set Summary Behavior message.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
obj << Report View( "Summary" );

```

### Save Script for All Objects

**Syntax:** obj << Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj << Save Script for All Objects To Data Table( <name> )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Hours ),
	By( _bycol )
);
obj << Crow AMSAA;
obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Hours ),
	By( _bycol )
);
obj << Crow AMSAA;
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj << Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj << Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj << Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
obj << Save Script to Script Window;

```

### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Description:** Sends platform commands or display customization commands to each level of a by-group.

```jsl

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

```jsl

Names Default To Here( 1 );

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

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

### Sync to Data Table Changes

**Syntax:** obj << Sync to Data Table Changes

**Description:** Sync with the exclude and data changes that have been made.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

### Title

**Syntax:** obj << Title( "new title" )

**Description:** Sets the title of the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj << Top Report

**Description:** Returns a reference to the root node in the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### View Web XML

**Syntax:** obj << View Web XML

**Description:** Returns the XML code that is used to create the interactive HTML report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

## Crow AMSAA

### Item Messages

#### Achieved MTBF

**Syntax:** scrobj << Achieved MTBF( state=0|1 )

**Description:** Shows or hides the Achieved MTBF report. Use the optional alpha argument to specify alpha.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
report = obj << Crow AMSAA;
report << Achieved MTBF( .01 );

```

#### Goodness of Fit

**Syntax:** scrobj << Goodness of Fit( state=0|1 )

**Description:** Shows or hides the Goodness of Fit report that contains a test of the null hypothesis that the data follow a Crow-AMSAA model.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
report = obj << Crow AMSAA;
report << Goodness of Fit( 1 );

```

#### Show Cumulative Events Plot

**Syntax:** scrobj << Show Cumulative Events Plot( state=0|1 )

**Description:** Shows or hides the Cumulative Events plot.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
report = obj << Crow AMSAA;
report << Show Cumulative Events Plot( 1 );

```

#### Show Intensity Plot

**Syntax:** scrobj << Show Intensity Plot( state=0|1 )

**Description:** Shows or hides the Intensity plot.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
report = obj << Crow AMSAA;
report << Show Intensity Plot( 1 );

```

#### Show MTBF Plot

**Syntax:** scrobj << Show MTBF Plot( state=0|1 )

**Description:** Shows or hides the mean time between failures (MTBF) plot. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
report = obj << Crow AMSAA;
report << Show MTBF Plot( 0 );

```

#### Show Profilers

**Syntax:** scrobj << Show Profilers( state=0|1 )

**Description:** Shows or hides the profilers for mean time between failures (MTBF), failure intensity, and cumulative events.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
report = obj << Crow AMSAA;
report << Show Profilers( 1 );

```

## Cumulative Events Plot

### Associated Constructors

#### Cumulative Events Plot

**Syntax:** obj << Cumulative Events Plot( ... );

scrobj = obj << Cumulative Events Plot

**Description:** Enables you to show or hide models in the Cumulative Events plot. If specified without an argument, this option returns a scriptable reference to the plot.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
plot = obj << Cumulative Events Plot;
plot << Crow AMSAA( 0 );

```

### Item Messages

#### Crow AMSAA

**Syntax:** obj << Cumulative Events Plot( Crow AMSAA( state=0|1 ) );

obj << Mean Time Between Failures Plot( Crow AMSAA( state=0|1 ) );

scrobj << Crow AMSAA( state=0|1 ) )

**Description:** Shows or hides the Crow-AMSAA model in the Cumulative Events or Mean Time Between Failures plot. On by default.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Crow AMSAA;
Wait( 1 );
obj << Cumulative Events Plot( Crow AMSAA( 0 ) );
obj << Mean Time Between Failures Plot( Crow AMSAA( 0 ) );

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Crow AMSAA;
Wait( 1 );
cep = obj << Cumulative Events Plot;
cep << Crow AMSAA( 0 );
mtbf = obj << Mean Time Between Failures Plot;
mtbf << Crow AMSAA( 0 );

```

#### Crow AMSAA with Modified MLE

**Syntax:** obj << Cumulative Events Plot( Crow AMSAA with Modified MLE( state=0|1 ) );

obj << Mean Time Between Failures Plot( Crow AMSAA with Modified MLE( state=0|1 ) );

scrobj << Crow AMSAA with Modified MLE( state=0|1 ) )

**Description:** Shows or hides the Crow-AMSAA model with bias correction for beta in the Cumulative Events or Mean Time Between Failures plot. On by default.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Crow AMSAA with Modified MLE;
Wait( 1 );
obj << Cumulative Events Plot( Crow AMSAA with Modified MLE( 0 ) );
obj << Mean Time Between Failures Plot( Crow AMSAA with Modified MLE( 0 ) );

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Crow AMSAA with Modified MLE;
Wait( 1 );
cep = obj << Cumulative Events Plot;
cep << Crow AMSAA with Modified MLE( 0 );
mtbf = obj << Mean Time Between Failures Plot;
mtbf << Crow AMSAA with Modified MLE( 0 );

```

#### Fixed Parameter Crow AMSAA

**Syntax:** obj << Cumulative Events Plot( Fixed Parameter Crow AMSAA( state=0|1 ) );

obj << Mean Time Between Failures Plot( Fixed Parameter Crow AMSAA( state=0|1 ) );

scrobj << Fixed Parameter Crow AMSAA( state=0|1 ) )

**Description:** Shows or hides the Fixed Parameter Crow-AMSAA model in the Cumulative Events or Mean Time Between Failures plot. On by default.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Fixed Parameter Crow AMSAA;
Wait( 1 );
obj << Cumulative Events Plot( Fixed Parameter Crow AMSAA( 0 ) );
obj << Mean Time Between Failures Plot( Fixed Parameter Crow AMSAA( 0 ) );

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Fixed Parameter Crow AMSAA;
Wait( 1 );
cep = obj << Cumulative Events Plot;
cep << Fixed Parameter Crow AMSAA( 0 );
mtbf = obj << Mean Time Between Failures Plot;
mtbf << Fixed Parameter Crow AMSAA( 0 );

```

#### Piecewise Weibull NHPP

**Syntax:** obj << Cumulative Events Plot( Piecewise Weibull NHPP( state=0|1 ) );

obj << Mean Time Between Failures Plot( Piecewise Weibull NHPP( state=0|1 ) );

scrobj << Piecewise Weibull NHPP( state=0|1 ) )

**Description:** Shows or hides the Piecewise Weibull NHPP model in the Cumulative Events or Mean Time Between Failures plot. On by default.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/TurbineEngineDesign1.jmp" );
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Day ),
	Event Count( :Fixes ),
	Phase( :Design Phase )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Piecewise Weibull NHPP;
Wait( 1 );
obj << Cumulative Events Plot( Piecewise Weibull NHPP( 0 ) );
obj << Mean Time Between Failures Plot( Piecewise Weibull NHPP( 0 ) );

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/TurbineEngineDesign1.jmp" );
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Day ),
	Event Count( :Fixes ),
	Phase( :Design Phase )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Piecewise Weibull NHPP;
Wait( 1 );
cep = obj << Cumulative Events Plot;
cep << Piecewise Weibull NHPP( 0 );
mtbf = obj << Mean Time Between Failures Plot;
mtbf << Piecewise Weibull NHPP( 0 );

```

#### Piecewise Weibull NHPP Change Point Detection

**Syntax:** obj << Cumulative Events Plot( Piecewise Weibull NHPP Change Point Detection( state=0|1 ) );

obj << Mean Time Between Failures Plot( Piecewise Weibull NHPP Change Point Detection( state=0|1 ) );

scrobj << Piecewise Weibull NHPP Change Point Detection( state=0|1 ) )

**Description:** Shows or hides the Reinitialized Weibull NHPP model in the Cumulative Events or Mean Time Between Failures plot. On by default.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/BrakeReliability.jmp" );
obj = dt << Reliability Growth(
	Input Format( Dates ),
	Timestamp( :Date ),
	Event Count( :Fixes )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Piecewise Weibull NHPP Change Point Detection;
Wait( 1 );
obj << Cumulative Events Plot( Piecewise Weibull NHPP Change Point Detection( 0 ) );
obj << Mean Time Between Failures Plot( Piecewise Weibull NHPP Change Point Detection( 0 ) );

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/BrakeReliability.jmp" );
obj = dt << Reliability Growth(
	Input Format( Dates ),
	Timestamp( :Date ),
	Event Count( :Fixes )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Piecewise Weibull NHPP Change Point Detection;
Wait( 1 );
cep = obj << Cumulative Events Plot;
cep << Piecewise Weibull NHPP Change Point Detection( 0 );
mtbf = obj << Mean Time Between Failures Plot;
mtbf << Piecewise Weibull NHPP Change Point Detection( 0 );

```

#### Reinitialized Weibull NHPP

**Syntax:** obj << Cumulative Events Plot( Reinitialized Weibull NHPP( state=0|1 ) );

obj << Mean Time Between Failures Plot( Reinitialized Weibull NHPP( state=0|1 ) );

scrobj << Reinitialized Weibull NHPP( state=0|1 ) )

**Description:** Shows or hides the Reinitialized Weibull NHPP model in the Cumulative Events or Mean Time Between Failures plot. On by default.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/ProductionEquipment.jmp" );
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Hours of Operation ),
	Event Count( :Fixes ),
	Phase( :Design Stage )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Reinitialized Weibull NHPP;
Wait( 1 );
obj << Cumulative Events Plot( Reinitialized Weibull NHPP( 0 ) );
obj << Mean Time Between Failures Plot( Reinitialized Weibull NHPP( 0 ) );

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/ProductionEquipment.jmp" );
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Hours of Operation ),
	Event Count( :Fixes ),
	Phase( :Design Stage )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Reinitialized Weibull NHPP;
Wait( 1 );
cep = obj << Cumulative Events Plot;
cep << Reinitialized Weibull NHPP( 0 );
mtbf = obj << Mean Time Between Failures Plot;
mtbf << Reinitialized Weibull NHPP( 0 );

```

## Fixed Parameter Crow AMSAA

### Item Messages

#### Show Cumulative Events Plot

**Syntax:** scrobj << Show Cumulative Events Plot( state=0|1 )

**Description:** Shows or hides the Cumulative Events plot.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
report = obj << Crow AMSAA;
report << Show Cumulative Events Plot( 1 );

```

#### Show Intensity Plot

**Syntax:** scrobj << Show Intensity Plot( state=0|1 )

**Description:** Shows or hides the Intensity plot.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
report = obj << Crow AMSAA;
report << Show Intensity Plot( 1 );

```

#### Show MTBF Plot

**Syntax:** scrobj << Show MTBF Plot( state=0|1 )

**Description:** Shows or hides the mean time between failures (MTBF) plot. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
report = obj << Crow AMSAA;
report << Show MTBF Plot( 0 );

```

#### Show Profilers

**Syntax:** scrobj << Show Profilers( state=0|1 )

**Description:** Shows or hides the profilers for mean time between failures (MTBF), failure intensity, and cumulative events.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
report = obj << Crow AMSAA;
report << Show Profilers( 1 );

```

#### beta

**Syntax:** obj << Fixed Parameter Crow AMSAA( beta( number ) )

**Description:** Specifies the value of the fixed beta parameter. If the argument is a missing value, then the parameter is not fixed.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
obj << Fixed Parameter Crow AMSAA( Beta( 0.8 ) );
Report( obj )["Crow-AMSAA"] << Close( 1 );

```

#### lambda

**Syntax:** obj << Fixed Parameter Crow AMSAA( lambda( number ) )

**Description:** Specifies the value of the fixed lambda parameter. If the argument is a missing value, then the parameter is not fixed.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
obj << Fixed Parameter Crow AMSAA( lambda( 0.02 ) );
Report( obj )["Crow-AMSAA"] << Close( 1 );

```

## Mean Time Between Failures Plot

### Associated Constructors

#### Mean Time Between Failures Plot

**Syntax:** obj << Mean Time Between Failures Plot( ... );

scrobj = obj << Mean Time Between Failures Plot

**Description:** Enables you to show or hide models in the Mean Time Between Failures plot. If specified without an argument, this option returns a scriptable reference to the plot.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
Report( obj )["Mean Time Between Failures"] << Close( 0 );
plot = obj << Mean Time Between Failures Plot;
plot << Crow AMSAA( 0 );

```

### Item Messages

#### Crow AMSAA

**Syntax:** obj << Cumulative Events Plot( Crow AMSAA( state=0|1 ) );

obj << Mean Time Between Failures Plot( Crow AMSAA( state=0|1 ) );

scrobj << Crow AMSAA( state=0|1 ) )

**Description:** Shows or hides the Crow-AMSAA model in the Cumulative Events or Mean Time Between Failures plot. On by default.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Crow AMSAA;
Wait( 1 );
obj << Cumulative Events Plot( Crow AMSAA( 0 ) );
obj << Mean Time Between Failures Plot( Crow AMSAA( 0 ) );

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Crow AMSAA;
Wait( 1 );
cep = obj << Cumulative Events Plot;
cep << Crow AMSAA( 0 );
mtbf = obj << Mean Time Between Failures Plot;
mtbf << Crow AMSAA( 0 );

```

#### Crow AMSAA with Modified MLE

**Syntax:** obj << Cumulative Events Plot( Crow AMSAA with Modified MLE( state=0|1 ) );

obj << Mean Time Between Failures Plot( Crow AMSAA with Modified MLE( state=0|1 ) );

scrobj << Crow AMSAA with Modified MLE( state=0|1 ) )

**Description:** Shows or hides the Crow-AMSAA model with bias correction for beta in the Cumulative Events or Mean Time Between Failures plot. On by default.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Crow AMSAA with Modified MLE;
Wait( 1 );
obj << Cumulative Events Plot( Crow AMSAA with Modified MLE( 0 ) );
obj << Mean Time Between Failures Plot( Crow AMSAA with Modified MLE( 0 ) );

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Crow AMSAA with Modified MLE;
Wait( 1 );
cep = obj << Cumulative Events Plot;
cep << Crow AMSAA with Modified MLE( 0 );
mtbf = obj << Mean Time Between Failures Plot;
mtbf << Crow AMSAA with Modified MLE( 0 );

```

#### Customize Average MTBF

**Syntax:** obj << Mean Time Between Failures( Options( Sample MTBF Type( "Customized Average MTBF" ), Customize Average MTBF( vector ) ) );

scrobj << Options( Sample MTBF Type( "Customized Average MTBF" ), Customize Average MTBF( vector ) )

**Description:** Specifies a set of disjoint intervals that are used to calculate mean time between failures (MTBF).

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Mean Time Between Failures Plot(
	Options(
		Sample MTBF Type( "Customized Average MTBF" ),
		Customize Average MTBF( [2500, 5000, 7500, 11000] )
	)
);
(obj << report)["Mean Time Between Failures"] << Close( 0 );

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
plot = obj << Mean Time Between Failures Plot;
plot << Options(
	Sample MTBF Type( "Customized Average MTBF" ),
	Customize Average MTBF( [2500, 5000, 7500, 11000] )
);
(obj << report)["Mean Time Between Failures"] << Close( 0 );

```

#### Fixed Parameter Crow AMSAA

**Syntax:** obj << Cumulative Events Plot( Fixed Parameter Crow AMSAA( state=0|1 ) );

obj << Mean Time Between Failures Plot( Fixed Parameter Crow AMSAA( state=0|1 ) );

scrobj << Fixed Parameter Crow AMSAA( state=0|1 ) )

**Description:** Shows or hides the Fixed Parameter Crow-AMSAA model in the Cumulative Events or Mean Time Between Failures plot. On by default.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Fixed Parameter Crow AMSAA;
Wait( 1 );
obj << Cumulative Events Plot( Fixed Parameter Crow AMSAA( 0 ) );
obj << Mean Time Between Failures Plot( Fixed Parameter Crow AMSAA( 0 ) );

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Fixed Parameter Crow AMSAA;
Wait( 1 );
cep = obj << Cumulative Events Plot;
cep << Fixed Parameter Crow AMSAA( 0 );
mtbf = obj << Mean Time Between Failures Plot;
mtbf << Fixed Parameter Crow AMSAA( 0 );

```

#### Interval Size

**Syntax:** obj << Mean Time Between Failures( Options( Sample MTBF Type( "Equal Interval Average MTBF" ), Interval Size( number ) ) );

scrobj << Options( Sample MTBF Type( "Equal Interval Average MTBF" ), Interval Size( number ) )

**Description:** Specifies the size of the interval that is used to calculate mean time between failures (MTBF).

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Mean Time Between Failures Plot(
	Options( Sample MTBF Type( "Equal Interval Average MTBF" ), Interval Size( 2500 ) )
);

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Mean Time Between Failures"] << Close( 0 );
plot = obj << Mean Time Between Failures Plot;
plot << Options( Sample MTBF Type( "Equal Interval Average MTBF" ), Interval Size( 2500 ) );

```

#### Options

**Syntax:** obj << Mean Time Between Failures( Options( ... ) );

scrobj << Options( ... )

**Description:** Enables you to configure the Mean Time Between Failures plot.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/TurbineEngineDesign1.jmp" );
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Day ),
	Event Count( :Fixes ),
	Phase( :Design Phase )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Mean Time Between Failures Plot(
	Options( Sample MTBF Type( "Equal Interval Average MTBF" ) )
);

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/TurbineEngineDesign1.jmp" );
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Day ),
	Event Count( :Fixes ),
	Phase( :Design Phase )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
mtbf = obj << Mean Time Between Failures Plot;
mtbf << Options( Sample MTBF Type( "Equal Interval Average MTBF" ) );

```

#### Piecewise Weibull NHPP

**Syntax:** obj << Cumulative Events Plot( Piecewise Weibull NHPP( state=0|1 ) );

obj << Mean Time Between Failures Plot( Piecewise Weibull NHPP( state=0|1 ) );

scrobj << Piecewise Weibull NHPP( state=0|1 ) )

**Description:** Shows or hides the Piecewise Weibull NHPP model in the Cumulative Events or Mean Time Between Failures plot. On by default.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/TurbineEngineDesign1.jmp" );
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Day ),
	Event Count( :Fixes ),
	Phase( :Design Phase )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Piecewise Weibull NHPP;
Wait( 1 );
obj << Cumulative Events Plot( Piecewise Weibull NHPP( 0 ) );
obj << Mean Time Between Failures Plot( Piecewise Weibull NHPP( 0 ) );

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/TurbineEngineDesign1.jmp" );
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Day ),
	Event Count( :Fixes ),
	Phase( :Design Phase )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Piecewise Weibull NHPP;
Wait( 1 );
cep = obj << Cumulative Events Plot;
cep << Piecewise Weibull NHPP( 0 );
mtbf = obj << Mean Time Between Failures Plot;
mtbf << Piecewise Weibull NHPP( 0 );

```

#### Piecewise Weibull NHPP Change Point Detection

**Syntax:** obj << Cumulative Events Plot( Piecewise Weibull NHPP Change Point Detection( state=0|1 ) );

obj << Mean Time Between Failures Plot( Piecewise Weibull NHPP Change Point Detection( state=0|1 ) );

scrobj << Piecewise Weibull NHPP Change Point Detection( state=0|1 ) )

**Description:** Shows or hides the Reinitialized Weibull NHPP model in the Cumulative Events or Mean Time Between Failures plot. On by default.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/BrakeReliability.jmp" );
obj = dt << Reliability Growth(
	Input Format( Dates ),
	Timestamp( :Date ),
	Event Count( :Fixes )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Piecewise Weibull NHPP Change Point Detection;
Wait( 1 );
obj << Cumulative Events Plot( Piecewise Weibull NHPP Change Point Detection( 0 ) );
obj << Mean Time Between Failures Plot( Piecewise Weibull NHPP Change Point Detection( 0 ) );

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/BrakeReliability.jmp" );
obj = dt << Reliability Growth(
	Input Format( Dates ),
	Timestamp( :Date ),
	Event Count( :Fixes )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Piecewise Weibull NHPP Change Point Detection;
Wait( 1 );
cep = obj << Cumulative Events Plot;
cep << Piecewise Weibull NHPP Change Point Detection( 0 );
mtbf = obj << Mean Time Between Failures Plot;
mtbf << Piecewise Weibull NHPP Change Point Detection( 0 );

```

#### Reinitialized Weibull NHPP

**Syntax:** obj << Cumulative Events Plot( Reinitialized Weibull NHPP( state=0|1 ) );

obj << Mean Time Between Failures Plot( Reinitialized Weibull NHPP( state=0|1 ) );

scrobj << Reinitialized Weibull NHPP( state=0|1 ) )

**Description:** Shows or hides the Reinitialized Weibull NHPP model in the Cumulative Events or Mean Time Between Failures plot. On by default.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/ProductionEquipment.jmp" );
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Hours of Operation ),
	Event Count( :Fixes ),
	Phase( :Design Stage )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Reinitialized Weibull NHPP;
Wait( 1 );
obj << Cumulative Events Plot( Reinitialized Weibull NHPP( 0 ) );
obj << Mean Time Between Failures Plot( Reinitialized Weibull NHPP( 0 ) );

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/ProductionEquipment.jmp" );
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Hours of Operation ),
	Event Count( :Fixes ),
	Phase( :Design Stage )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Reinitialized Weibull NHPP;
Wait( 1 );
cep = obj << Cumulative Events Plot;
cep << Reinitialized Weibull NHPP( 0 );
mtbf = obj << Mean Time Between Failures Plot;
mtbf << Reinitialized Weibull NHPP( 0 );

```

#### Sample MTBF Type

**Syntax:** obj << Mean Time Between Failures( Options( Sample MTBF Type( "Equal Interval Average MTBF"|"Customized Average MTBF" ) ) );

scrobj << Options( Sample MTBF Type( "Equal Interval Average MTBF"|"Customized Average MTBF" ) )

**Description:** Specifies the calculation method for the Mean Time Between Failures plot.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/TurbineEngineDesign1.jmp" );
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Day ),
	Event Count( :Fixes ),
	Phase( :Design Phase )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Mean Time Between Failures Plot(
	Options( Sample MTBF Type( "Equal Interval Average MTBF" ) )
);

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/TurbineEngineDesign1.jmp" );
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Day ),
	Event Count( :Fixes ),
	Phase( :Design Phase )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
mtbf = obj << Mean Time Between Failures Plot;
mtbf << Options( Sample MTBF Type( "Equal Interval Average MTBF" ) );

```

## Reliability Growth Report

### Item Messages

#### Show Cumulative Events Plot

**Syntax:** scrobj << Show Cumulative Events Plot( state=0|1 )

**Description:** Shows or hides the Cumulative Events plot.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
report = obj << Crow AMSAA;
report << Show Cumulative Events Plot( 1 );

```

#### Show Intensity Plot

**Syntax:** scrobj << Show Intensity Plot( state=0|1 )

**Description:** Shows or hides the Intensity plot.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
report = obj << Crow AMSAA;
report << Show Intensity Plot( 1 );

```

#### Show MTBF Plot

**Syntax:** scrobj << Show MTBF Plot( state=0|1 )

**Description:** Shows or hides the mean time between failures (MTBF) plot. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
report = obj << Crow AMSAA;
report << Show MTBF Plot( 0 );

```

#### Show Profilers

**Syntax:** scrobj << Show Profilers( state=0|1 )

**Description:** Shows or hides the profilers for mean time between failures (MTBF), failure intensity, and cumulative events.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
report = obj << Crow AMSAA;
report << Show Profilers( 1 );

```


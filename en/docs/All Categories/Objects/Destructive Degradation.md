# Destructive Degradation



## Associated Constructors

### Destructive Degradation

**Syntax:** Destructive Degradation( Y( column ), Time( column ), <X( column )>, <Freq( column )>, <Censor( column ), Censor Code( value )> )

**Description:** Models destructive degradation data over time.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Adhesive Bond.jmp" );
obj = dt << Destructive Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	X( :Degrees ),
	Censor( :Censor ),
	Censor Code( "Right" ),
	Model( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" ),
	Control( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" )
);

```

## Columns

### Censor

**Syntax:** obj << Censor( column )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Adhesive Bond.jmp" );
obj = dt << Destructive Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	X( :Degrees ),
	Censor( :Censor ),
	Censor Code( "Right" ),
	Model( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" ),
	Control( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" )
);

```

### Freq

**Syntax:** obj << Freq( column )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Adhesive Bond.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Destructive Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	X( :Degrees ),
	Censor( :Censor ),
	Censor Code( "Right" ),
	Model( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" ),
	Control( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" ),
	Freq( _freqcol )
);

```

### Response

**Syntax:** obj << Response( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Adhesive Bond.jmp" );
obj = dt << Destructive Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	X( :Degrees ),
	Censor( :Censor ),
	Censor Code( "Right" ),
	Model( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" ),
	Control( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" )
);

```

### Time

**Syntax:** obj << Time( column )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Adhesive Bond.jmp" );
obj = dt << Destructive Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	X( :Degrees ),
	Censor( :Censor ),
	Censor Code( "Right" ),
	Model( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" ),
	Control( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" )
);

```

### X

**Syntax:** obj << X( column )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Adhesive Bond.jmp" );
obj = dt << Destructive Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	X( :Degrees ),
	Censor( :Censor ),
	Censor Code( "Right" ),
	Model( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" ),
	Control( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" )
);

```

### Y

**Syntax:** obj << Y( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Adhesive Bond.jmp" );
obj = dt << Destructive Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	X( :Degrees ),
	Censor( :Censor ),
	Censor Code( "Right" ),
	Model( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" ),
	Control( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" )
);

```

## Item Messages

### Control

**Syntax:** obj << Control( yTrans, timeTrans, distribution, path definition )

**Description:** Selects a model in the Path Definition panel of the report. The selected model is also displayed in the degradation plot.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Adhesive Bond.jmp" );
obj = dt << Destructive Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	X( :Degrees ),
	Censor( :Censor ),
	Censor Code( "Right" ),
	Model( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" ),
	Control( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" )
);

```

### Model

**Syntax:** obj << Model( yTrans, timeTrans, distribution, path definition )

**Description:** Specifies a model fit and shows a report for the fitted model.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Adhesive Bond.jmp" );
obj = dt << Destructive Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	X( :Degrees ),
	Censor( :Censor ),
	Censor Code( "Right" ),
	Model( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" ),
	Control( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" )
);

```

### Shade

**Syntax:** obj << Shade( state=0|1 )

**Description:** Shows or hides the upper and lower bounds for the displayed model. This option also shows or hides the shading between the bounds. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Adhesive Bond.jmp" );
obj = dt << Destructive Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	X( :Degrees ),
	Censor( :Censor ),
	Censor Code( "Right" ),
	Model( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" ),
	Control( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" )
);
Wait( 3 );
obj << Shade( 0 );

```

### Shade Coverage

**Syntax:** obj << Shade Coverage( proportion )

**Description:** Specifies a proportion to increase or decrease the amount of shading coverage.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Adhesive Bond.jmp" );
obj = dt << Destructive Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	X( :Degrees ),
	Censor( :Censor ),
	Censor Code( "Right" ),
	Model( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" ),
	Control( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" )
);
Wait( 3 );
obj << Shade Coverage( 0.90 );

```

### Use Condition Temperature

**Syntax:** obj << Use Condition Temperature( "Celsius"|"Fahrenheit"|"Kelvin", temperature )

**Description:** Specifies the scale and temperature for the use condition (X0) in first-order kinetics models.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Adhesive Bond.jmp" );
obj = dt << Destructive Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	X( :Degrees ),
	Censor( :Censor ),
	Censor Code( "Right" )
);
obj << Use Condition Temperature( "Celsius", 35 );
obj << Control( "Log", "Sqrt", "Normal", "First Order Kinetics Type3" );
obj << Model( "Log", "Sqrt", "Normal", "First Order Kinetics Type3" );

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
dt = Open( "$SAMPLE_DATA/Reliability/Adhesive Bond.jmp" );
obj = dt << Destructive Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	X( :Degrees ),
	Censor( :Censor ),
	Censor Code( "Right" ),
	Model( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" ),
	Control( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" )
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**Syntax:** obj << Broadcast(message)

**Description:** Broadcasts a message to a platform. If return results from individual objects are tables, they are concatenated if possible, and the final format is identical to either the result from the Save Combined Table option in a Table Box or the result from the Concatenate option using a Source column. Other than those, results are stored in a list and returned.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

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

### Copy ByGroup Script

**Syntax:** obj << Copy ByGroup Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Adhesive Bond.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Destructive Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	X( :Degrees ),
	Censor( :Censor ),
	Censor Code( "Right" ),
	Model( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" ),
	Control( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" ),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj << Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Adhesive Bond.jmp" );
obj = dt << Destructive Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	X( :Degrees ),
	Censor( :Censor ),
	Censor Code( "Right" ),
	Model( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" ),
	Control( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" )
);
obj << Copy Script;

```

### Data Table Window

**Syntax:** obj << Data Table Window

**Description:** Move the data table window for this analysis to the front.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Adhesive Bond.jmp" );
obj = dt << Destructive Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	X( :Degrees ),
	Censor( :Censor ),
	Censor Code( "Right" ),
	Model( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" ),
	Control( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" )
);
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

### Get ByGroup Script

**Syntax:** obj << Get ByGroup Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Adhesive Bond.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Destructive Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	X( :Degrees ),
	Censor( :Censor ),
	Censor Code( "Right" ),
	Model( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" ),
	Control( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" ),
	By( _bycol )
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Syntax:** obj << Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

**General**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Adhesive Bond.jmp" );
obj = dt << Destructive Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	X( :Degrees ),
	Censor( :Censor ),
	Censor Code( "Right" ),
	Model( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" ),
	Control( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" )
);
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
dt = Open( "$SAMPLE_DATA/Reliability/Adhesive Bond.jmp" );
obj = dt << Destructive Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	X( :Degrees ),
	Censor( :Censor ),
	Censor Code( "Right" ),
	Model( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" ),
	Control( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" )
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**Syntax:** obj << Get Group Platform

**Description:** Return the Group Platform object if this platform is part of a Group. Otherwise, returns Empty().

```jsl

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

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Adhesive Bond.jmp" );
obj = dt << Destructive Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	X( :Degrees ),
	Censor( :Censor ),
	Censor Code( "Right" ),
	Model( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" ),
	Control( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" )
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntax:** obj << Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Adhesive Bond.jmp" );
obj = dt << Destructive Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	X( :Degrees ),
	Censor( :Censor ),
	Censor Code( "Right" ),
	Model( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" ),
	Control( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" )
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntax:** obj << Get Timing

**Description:** Times the platform launch.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Adhesive Bond.jmp" );
obj = dt << Destructive Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	X( :Degrees ),
	Censor( :Censor ),
	Censor Code( "Right" ),
	Model( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" ),
	Control( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" )
);
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
dt = Open( "$SAMPLE_DATA/Reliability/Adhesive Bond.jmp" );
obj = dt << Destructive Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	X( :Degrees ),
	Censor( :Censor ),
	Censor Code( "Right" ),
	Model( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" ),
	Control( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" )
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntax:** obj << Redo ByGroup Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Adhesive Bond.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Destructive Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	X( :Degrees ),
	Censor( :Censor ),
	Censor Code( "Right" ),
	Model( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" ),
	Control( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" ),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Syntax:** obj << Relaunch Analysis

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Adhesive Bond.jmp" );
obj = dt << Destructive Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	X( :Degrees ),
	Censor( :Censor ),
	Censor Code( "Right" ),
	Model( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" ),
	Control( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" )
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntax:** obj << Relaunch ByGroup

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Adhesive Bond.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Destructive Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	X( :Degrees ),
	Censor( :Censor ),
	Censor Code( "Right" ),
	Model( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" ),
	Control( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" ),
	By( _bycol )
);
obj[1] << Relaunch ByGroup;

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
dt = Open( "$SAMPLE_DATA/Reliability/Adhesive Bond.jmp" );
obj = dt << Destructive Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	X( :Degrees ),
	Censor( :Censor ),
	Censor Code( "Right" ),
	Model( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" ),
	Control( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" )
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntax:** obj << Report View( "Full"|"Summary" )

**Description:** The report view determines the level of detail visible in a platform report. Full shows all of the detail, while Summary shows only select content, dependent on the platform. For customized behavior, display boxes support a <<Set Summary Behavior message.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Adhesive Bond.jmp" );
obj = dt << Destructive Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	X( :Degrees ),
	Censor( :Censor ),
	Censor Code( "Right" ),
	Model( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" ),
	Control( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" )
);
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description:** Creates a JSL script to produce this analysis, and save it as a table property in the data table. You can specify a name for the script. The Append Suffix option appends a numeric suffix to the script name, which differentiates the script from an existing script with the same name. The Prompt option prompts the user to specify a script name. The Replace option replaces an existing script with the same name.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Adhesive Bond.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Destructive Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	X( :Degrees ),
	Censor( :Censor ),
	Censor Code( "Right" ),
	Model( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" ),
	Control( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj << Save ByGroup Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Adhesive Bond.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Destructive Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	X( :Degrees ),
	Censor( :Censor ),
	Censor Code( "Right" ),
	Model( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" ),
	Control( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj << Save ByGroup Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Adhesive Bond.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Destructive Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	X( :Degrees ),
	Censor( :Censor ),
	Censor Code( "Right" ),
	Model( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" ),
	Control( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntax:** obj << Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Adhesive Bond.jmp" );
obj = dt << Destructive Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	X( :Degrees ),
	Censor( :Censor ),
	Censor Code( "Right" ),
	Model( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" ),
	Control( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" )
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj << Save Script for All Objects To Data Table( <name> )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Adhesive Bond.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Destructive Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	X( :Degrees ),
	Censor( :Censor ),
	Censor Code( "Right" ),
	Model( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" ),
	Control( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Adhesive Bond.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Destructive Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	X( :Degrees ),
	Censor( :Censor ),
	Censor Code( "Right" ),
	Model( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" ),
	Control( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Adhesive Bond.jmp" );
obj = dt << Destructive Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	X( :Degrees ),
	Censor( :Censor ),
	Censor Code( "Right" ),
	Model( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" ),
	Control( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" )
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj << Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Adhesive Bond.jmp" );
obj = dt << Destructive Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	X( :Degrees ),
	Censor( :Censor ),
	Censor Code( "Right" ),
	Model( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" ),
	Control( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" )
);
obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj << Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Adhesive Bond.jmp" );
obj = dt << Destructive Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	X( :Degrees ),
	Censor( :Censor ),
	Censor Code( "Right" ),
	Model( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" ),
	Control( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" )
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj << Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Adhesive Bond.jmp" );
obj = dt << Destructive Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	X( :Degrees ),
	Censor( :Censor ),
	Censor Code( "Right" ),
	Model( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" ),
	Control( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" )
);
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
dt = Open( "$SAMPLE_DATA/Reliability/Adhesive Bond.jmp" );
obj = dt << Destructive Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	X( :Degrees ),
	Censor( :Censor ),
	Censor Code( "Right" ),
	Model( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" ),
	Control( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" )
);
obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj << Top Report

**Description:** Returns a reference to the root node in the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Adhesive Bond.jmp" );
obj = dt << Destructive Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	X( :Degrees ),
	Censor( :Censor ),
	Censor Code( "Right" ),
	Model( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" ),
	Control( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" )
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transform Column

**Syntax:** obj = <Platform>(... Transform Column(<name>, Formula(<expression>), [Random Seed(<n>)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description:** Create a transform column in the local context of an object, usually a platform. The transform column is active only for the lifetime of the platform.

```jsl

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

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Window View

**Syntax:** obj = Destructive Degradation(...Window View( "Visible"|"Invisible"|"Private" )...)

**Description:** Set the type of the window to be created for the report. By default a Visible report window will be created. An Invisible window will not appear on screen, but is discoverable by functions such as Window(). A Private window responds to most window messages but is not discoverable and must be addressed through the report object

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```


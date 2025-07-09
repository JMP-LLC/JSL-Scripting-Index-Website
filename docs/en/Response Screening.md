# Response Screening



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
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);
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

**Syntax:** obj = Response Screening(...<By( column(s) )>...)

**Description:** Performs a separate analysis for each level of the specified column.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process ),
	By( _bycol )
);

```

### Cauchy

**Syntax:** obj = Response Screening(...Cauchy( state=0|1 )...)

**Description:** Estimates parameters using maximum likelihood and a Cauchy link function. This estimation method assumes that the errors have a Cauchy distribution, which has fatter tails than the normal distribution. This method reduces the emphasis on outliers.

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Probe.jmp" );
dt << Response Screening( X( :Process ), Y( Eval( 8 :: 48 ) ), Cauchy( 1 ) );

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

### Common X Scale

**Syntax:** obj = Response Screening(...Common X Scale( state=0|1 )...)

**Description:** Notifies the platform that all continuous X variables are on the same scale. This is necessary to compare the slopes of different X variables.

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Iris.jmp" );
dt << Response Screening(
	Y( :Sepal length, :Sepal width ),
	X( :Petal length, :Petal width ),
	Common X Scale
);

```

### Common Y Scale

**Syntax:** obj = Response Screening(...Common Y Scale( state=0|1 )...)

**Description:** Notifies the platform that all continuous responses are on the same scale. This is necessary to compare the means differences or slopes.

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Iris.jmp" );
dt << Response Screening(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Common Y Scale
);

```

### Copy ByGroup Script

**Syntax:** obj << Copy ByGroup Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process ),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj << Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);
obj << Copy Script;

```

### Corr

**Syntax:** obj = Response Screening(...Corr( state=0|1 )...)

**Description:** Computes the Pearson product-moment correlation in terms of the indices that are defined by the value ordering.

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Consumer Preferences.jmp" );
dt << Response Screening(
	X( :Employee Tenure, :Position Tenure, :Age Group ),
	Y( :Job Satisfaction ),
	Corr( 1 )
);

```

### Data Table Window

**Syntax:** obj << Data Table Window

**Description:** Move the data table window for this analysis to the front.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);
obj << Data Table Window;

```

### Empirical Bayes Shrinkage

**Syntax:** obj = Response Screening(...Empirical Bayes Shrinkage( state=0|1 )...)

**Description:** Shrinks residual variance estimates toward an estimated prior mode, borrowing strength across all estimates. This is useful when screening many continuous Y variables on a common scale.

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Probe.jmp" );
dt << Response Screening(
	X( :Process ),
	Y( Eval( 8 :: 88 ) ),
	Common Y Scale,
	Empirical Bayes Shrinkage( 1 )
);

```

### Fit Selected Items

**Syntax:** obj << Fit Selected Items

**Description:** Adds Fit Y by X reports to the Response Screening report. The added reports correspond to selected points in the plots or selected rows in the Result Table.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = Response Screening( X( :Process ), Y( Column Group( "Responses" ) ) );
obj << Select Where( FDR Logworth > 200 );
obj << Fit Selected Items;

```

### Force X Categorical

**Syntax:** obj = Response Screening(...Force X Categorical( state=0|1 )...)

**Description:** Ignores the modeling type and treats all X columns as categorical.

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Big Class.jmp" );
dt << Response Screening(
	X( :height, :sex ),
	Y( :age, :weight ),
	Force X Categorical( 1 )
);

```

### Force X Continuous

**Syntax:** obj = Response Screening(...Force X Continuous( state=0|1 )...)

**Description:** Ignores the modeling type and treats all X columns as continuous.

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Consumer Preferences.jmp" );
dt << Response Screening(
	X( :Age Group, :Job Satisfaction ),
	Y( :Gender, :Single Status ),
	Force X Continuous( 1 )
);

```

### Force Y Categorical

**Syntax:** obj = Response Screening(...Force Y Categorical( state=0|1 )...)

**Description:** Ignores the modeling type and treats all Y columns as categorical.

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Big Class.jmp" );
dt << Response Screening(
	Y( :height, :sex ),
	X( :age, :weight ),
	Force Y Categorical( 1 )
);

```

### Force Y Continuous

**Syntax:** obj = Response Screening(...Force Y Continuous( state=0|1 )...)

**Description:** Ignores the modeling type and treats all Y columns as continuous.

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Big Class.jmp" );
dt << Response Screening( Y( :age ), X( :height, :weight ), Force Y Continuous( 1 ) );

```

### Freq

**Syntax:** obj = Response Screening(...<Freq( column )>...)

**Description:** Specifies a column whose values assign a frequency to each row for the analysis.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process ),
	Freq( _freqcol )
);

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
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process ),
	By( _bycol )
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Syntax:** obj << Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

**General**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);
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

### Get Crosstab RTF

**Syntax:** obj << Get Crosstab RTF( state=0|1 )

**Description:** Get an RTF source for a crosstab table.

**JMP Version Added:** 19

### Get Crosstab Script

**Syntax:** obj << Get Crosstab Script( state=0|1 )

**Description:** Get a JSL display script for a crosstab table.

**JMP Version Added:** 19

### Get Data Table

**Syntax:** obj << Get Data Table

**Description:** Returns a reference to the data table.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);
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

### Get PValues

**Syntax:** obj << Get PValues

**Description:** Returns a reference to the PValues table.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	X( :Process ),
	Y( Column Group( "Responses" ) ),
	Save Outlier Indicator
);
pvals = obj << Get PValues;
Show( pvals );

```

### Get Script

**Syntax:** obj << Get Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntax:** obj << Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntax:** obj << Get Timing

**Description:** Times the platform launch.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);
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

**Syntax:** obj = Response Screening(...<Grouping( column(s) )>...)

**Description:** Specifies categorical columns as grouping variables. The rows assigned to each level of the specified column are analyzed separately.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	X( :Process ),
	Y( Column Group( "Responses" ) ),
	Grouping( :Site )
);

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

### Kappa

**Syntax:** obj = Response Screening(...Kappa( state=0|1 )...)

**Description:** Adds a new column called Kappa to the Result Table. Kappa is a measure of agreement between Y and X.

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Mail Messages.jmp" );
dt << Response Screening( X( :From ), Y( :To ), Kappa( 1 ) );

```

### Kruskal Wallis Test

**Syntax:** obj = Response Screening(...Kruskal Wallis Test( state=0|1 )...)

**Description:** Computes the Kruskal-Wallis test, a nonparametric (Wilcoxon) rank-based test for continuous Y by categorical X.

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Big Class.jmp" );
dt << Response Screening( X( :sex ), Y( :height, :weight ), Kruskal Wallis Test( 1 ) );

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

### Max Comparison Levels

**Syntax:** obj = Response Screening(...Max Comparison Levels( number=100 )...)

**Description:** Specifies the number of levels that are supported in comparisons. "100" by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << Response Screening(
	X( :Wafer Number ),
	Y( Column Group( "Responses" ) ),
	Max Comparison Levels( 24 )
);

```

### Max Logworth

**Syntax:** obj = Response Screening(...Max Logworth( number )...)

**Description:** Controls the scale of plots involving logworth values. Logworth values that exceed the specified value are plotted as the specified value to prevent extreme scales in logworth plots.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << Response Screening(
	X( :Process ),
	Y( Column Group( "Responses" ) ),
	Max Logworth( 1000 )
);

```

### Means Comparisons

**Syntax:** obj = Response Screening(...Means Comparisons( "Each with Control"|"All Combinations" )...)

**Description:** When means are compared, compare each level with a control group level, or do all possible level combinations.

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Response Screening(
	X( :Age Group ),
	Y( :Single Status, :Gender, :I am working on my career ),
	Means Comparisons( "All combinations" ),
	Name( "2 by M Table" )(1)
);

```

### Missing is Category

**Syntax:** obj = Response Screening(...Missing is Category( state=0|1 )...)

**Description:** Treats the missing values of a categorical variable as a separate category.

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Big Class.jmp" );
Row() = 1;
:age = .;
Row() = 8;
:age = .;
dt << Response Screening( X( :age ), Y( :sex ), Missing is Category( 1 ) );

```

### Negative Binomial Y

**Syntax:** obj = Response Screening(...Negative Binomial Y( state=0|1 )...)

**Description:** Fits each Y response as a count having a Negative Binomial distribution.

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Failure2.jmp" );
dt << Response Screening(
	X( :clean ),
	Grouping( :failure ),
	Y( :N ),
	Negative Binomial Y( 1 )
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

### No Report

**Syntax:** obj = Response Screening(...No Report( state=0|1 )...)

**Description:** Suppresses the report window. Use this option to run Save commands to obtain results without the report window appearing.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << Response Screening(
	X( :Process ),
	Y( Column Group( "Responses" ) ),
	Save PValues,
	No Report( 1 )
);

```

### PValues Table on Launch

**Syntax:** obj = Response Screening(...PValues Table on Launch( state=0|1 )...)

**Description:** Creates a data table for the p-values and individual model fit statistics. "0" by default.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Probe.jmp" );
dt << Response Screening(
	X( :Process ),
	Y( Eval( 8 :: 88 ) ),
	Robust,
	PValues Table on Launch( 1 )
);

```

### Paired X and Y

**Syntax:** obj = Response Screening(...Paired X and Y( state=0|1 )...)

**Description:** Performs tests only for Y columns paired with X columns according to their order in the launch window. For example, Y1 is paired with X1 and Y2 is paired with X2.

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Big Class.jmp" );
dt << Response Screening( X( :age, :sex ), Y( :height, :weight ), Paired X and Y( 1 ) );

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

### Poisson Y

**Syntax:** obj = Response Screening(...Poisson Y( state=0|1 )...)

**Description:** Fits each Y response as a count having a Poisson distribution.

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Failure2.jmp" );
dt << Response Screening( X( :clean ), Grouping( :failure ), Y( :N ), Poisson Y( 1 ) );

```

### Practical Difference Portion

**Syntax:** obj << Practical Difference Portion( number=0.10 )

**Description:** Specifies the fraction of the specification range that represents a difference that you consider practically meaningful. "0.10" by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << Response Screening(
	X( :Process ),
	Y( Eval( 8 :: 48 ) ),
	Practical Difference Portion( .2 ),
	Save Compare Means
);

```

### Practical Differences and Equivalences

**Syntax:** obj << Practical Differences and Equivalences( Practical Portion(fraction) | Specific Difference(number) )

**Description:** Given a difference to detect, tests if the actual difference is significantly greater than or significantly less than that difference to detect in absolute value.

### Quartiles per Group

**Syntax:** obj = Response Screening(...Quartiles per Group( state=0|1 )...)

**Description:** Computes the quartiles and range for each group for continuous Y by categorical X.

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Big Class.jmp" );
dt << Response Screening( X( :sex ), Y( :height, :weight ), Quartiles per Group( 1 ) );

```

### Ratio Adjustment

**Syntax:** obj = Response Screening(...Ratio Adjustment( "No Adjustment"|"Add 0.5 when any zero"|"Add 0.5 always" )...)

**Description:** Provides options to add 0.5 to cell counts when calculating risk ratios, odds ratios, and risk differences. This adjustment avoids problems that arise from dividing by zero.

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Response Screening(
	X( :Age Group ),
	Y( :Single Status, :Gender, :I am working on my career ),
	Ratio Adjustment( "Add 0.5 Always" ),
	Name( "2 by M Table" )(1)
);

```

### Redo Analysis

**Syntax:** obj << Redo Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntax:** obj << Redo ByGroup Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process ),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Syntax:** obj << Relaunch Analysis

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntax:** obj << Relaunch ByGroup

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process ),
	By( _bycol )
);
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
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntax:** obj << Report View( "Full"|"Summary" )

**Description:** The report view determines the level of detail visible in a platform report. Full shows all of the detail, while Summary shows only select content, dependent on the platform. For customized behavior, display boxes support a <<Set Summary Behavior message.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);
obj << Report View( "Summary" );

```

### Response

**Syntax:** obj = Response Screening(...Response( column(s) )...)

**Description:** Specifies the response variables that contain the measurements to be analyzed.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);

```

### Response Screening

**Syntax:** Response Screening( Y( columns ), X( columns ) )

**Description:** Automates the process of conducting tests for linear model effects across a large number of responses. Test results and summary statistics are presented in data tables and plots. The false discovery rate (FDR) guards against incorrect declarations of significance. A robust estimation method reduces the sensitivity of tests to outliers.

**Example 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);

```

**Example 2**

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Probe.jmp" );
obj = dt << Response Screening( X( :Process ), Y( Eval( 8 :: 108 ) ) );

```

### Robust

**Syntax:** obj = Response Screening(...Robust( state=0|1 )...)

**Description:** Fits regression and ANOVA models using the Huber M-estimation method, which is resistant to outliers.

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Probe.jmp" );
dt << Response Screening( X( :Process ), Y( Eval( 8 :: 88 ) ), Robust( 1 ) );

```

### Save 2 by M

**Syntax:** obj << Name( "Save 2 by M table" )

**Description:** Saves the information in the 2 by M Results report, as well as other test statistics, to a new data table.

**Example 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Response Screening(
	X( :Age Group ),
	Y( :Single Status, :Gender, :I am working on my career )
);
obj << Name( "2 by M Table" )(1);
obj << Name( "Save 2 by M Table" );

```

**Example 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Response Screening(
	X( :Age Group ),
	Y( :Single Status, :Gender, :I am working on my career )
);
obj << "2 by M Table"n( 1 );
obj << "Save 2 by M Table"n;

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description:** Creates a JSL script to produce this analysis, and save it as a table property in the data table. You can specify a name for the script. The Append Suffix option appends a numeric suffix to the script name, which differentiates the script from an existing script with the same name. The Prompt option prompts the user to specify a script name. The Replace option replaces an existing script with the same name.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj << Save ByGroup Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj << Save ByGroup Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Compare Means

**Syntax:** obj << Save Compare Means

**Description:** Creates a data table that contains the results from testing all pairwise comparisons across the levels of the categorical variable.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << Response Screening(
	X( :Process ),
	Y( Column Group( "Responses" ) ),
	Save Compare Means
);

```

### Save Means

**Syntax:** obj << Save Means

**Description:** Creates a data table that contains the counts, means, and standard deviations for each level of the categorical variable.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << Response Screening( X( :Process ), Y( Column Group( "Responses" ) ), Save Means );

```

### Save Means Differences

**Syntax:** obj << Save Means Differences

**Description:** Creates a data table that contains the results from testing all pairwise comparisons across the levels of the categorical variable.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << Response Screening(
	X( :Process ),
	Y( Column Group( "Responses" ) ),
	Save Means Differences
);

```

### Save Outlier Indicator

**Syntax:** obj << Save Outlier Indicator

**Description:** Saves a group of indicator columns to the original data table to indicate outliers.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << Response Screening(
	X( :Process ),
	Y( Column Group( "Responses" ) ),
	Save Outlier Indicator
);

```

### Save PValues

**Syntax:** obj << Save PValues

**Description:** Creates a data table that contains the information in the Result Table.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << Response Screening( X( :Process ), Y( Column Group( "Responses" ) ), Save PValues );

```

### Save Script for All Objects

**Syntax:** obj << Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj << Save Script for All Objects To Data Table( <name> )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj << Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);
obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj << Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj << Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);
obj << Save Script to Script Window;

```

### Save Std Residuals

**Syntax:** obj << Save Std Residuals

**Description:** For each fit, adds a column to the original data table that contains the residuals divided by their estimated standard deviation.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << Response Screening(
	X( :Process ),
	Y( Column Group( "Responses" ) ),
	Save Std Residuals
);

```

### Select Columns

**Syntax:** obj << Select Columns( condition )

**Description:** Selects columns in the original data table that correspond to selected rows in the Result Table.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = Response Screening( X( :Process ), Y( Column Group( "Responses" ) ) );
obj << Select Where( FDR Logworth > 200 );
obj << Select Columns;

```

### Select Where

**Syntax:** obj << Select Where

**Description:** Selects items in the report table that correspond to a particular condition.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = Response Screening( X( :Process ), Y( Column Group( "Responses" ) ) );
obj << Select Where( FDR Logworth > 200 );

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

### Show Crosstab Report

**Syntax:** obj << Show Crosstab Report( state=0|1 )

**Description:** Experimental Hidden Feature: Show the details for each X and Y combination in a crosstab cell

**JMP Version Added:** 19

### Show Means Differences

**Syntax:** obj << Show Means Differences

**Description:** Shows the Logworth by Difference plot and the Means Differences report in the Response Screening report window. This option assumes that the Y variables are on a common scale.

```js

Names Default To Here( 1 );

Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );
Response Screening(
	Y( Column Group( "Markers" ) ),
	X( :Sex, :Disease Status ),
	Common Y Scale( 1 ),
	Show Means Differences( 1 ),
	SendToReport(
		Dispatch( {}, "", TabListBox, {Set Selected( 4 )} ),
		Dispatch( {}, "", TabListBox( 2 ), {Set Selected( 2 )} )
	)
);

```

### Show Plots

**Syntax:** obj << Show Plots( state=0|1 )

**Description:** Shows or hides the plots in the report window. On by default.

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = Response Screening( X( :Process ), Y( Column Group( "Responses" ) ) );
obj << Show Result Tables( 0 );

```

### Show Report Tables

**Syntax:** obj << Show Report Tables( state=0|1 )

**Description:** Shows or hides the result tables in the report window. On by default.

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = Response Screening( X( :Process ), Y( Column Group( "Responses" ) ) );
obj << Show Result Tables( 0 );

```

### Show Slopes

**Syntax:** obj << Show Slopes

**Description:** Shows the Logworth by Slope plot in the Response Screening report window. This option assumes that the Y variables are on a common scale and the X variables are on a common scale.

```js

Names Default To Here( 1 );

Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );
Response Screening(
	Y( :Trait1, :Trait2, :Trait3, :Trait4 ),
	X( Column Group( "Markers" ) ),
	Show Slopes( 1 ),
	SendToReport( Dispatch( {}, "", TabListBox, {Set Selected( 4 )} ) )
);

```

### Specific Difference to Detect

**Syntax:** obj << Specific Difference to Detect( number )

**Description:** Specifies a difference to detect rather than a portion of a specification range or sigma. This option assumes that all Y variables are on the same scale.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << Response Screening(
	X( :Process ),
	Y( Eval( 8 :: 48 ) ),
	Practical Difference Portion( .2 ),
	Save Compare Means
);

```

### Subgroup

**Syntax:** obj = Response Screening(...<Subgroup( column(s) )>...)

**Description:** Specifies one or more subgroup variables. When a subgroup variable is defined, additional fits are performed for each category of the subgroup variable.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	X( :Process ),
	Y( Column Group( "Responses" ) ),
	Subgroup( :Site )
);

```

### Subgroup Twoway

**Syntax:** obj = Response Screening(...Subgroup Twoway( state=0|1 )...)

**Description:** Fits all of the two-way subgroup combinations. This option is available only when at least one Subgroup variable is defined.

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Big Class.jmp" );
dt << Response Screening(
	X( :height ),
	Y( :weight ),
	Subgroup( :age, :sex ),
	Subgroup Twoway( 1 )
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

### Tabbed Report Layout

**Syntax:** obj << Tabbed Report Layout( state=0|1 )

**Description:** On by default.

**JMP Version Added:** 17

### Title

**Syntax:** obj << Title( "new title" )

**Description:** Sets the title of the platform.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);
obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj << Top Report

**Description:** Returns a reference to the root node in the report.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);
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

### Unthreaded

**Syntax:** obj = Response Screening(...Unthreaded( state=0|1 )...)

**Description:** Suppresses multithreading.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process ),
	Unthreaded( 1 )
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

### Volcano Plots Use FDR Axis

**Syntax:** obj = Response Screening(...Volcano Plots Use FDR Axis( state=0 )...)

**Description:** Use FDR-adjusted Logworth instead of unadjusted Logworth on vertical axis for volcano plots. "0" by default.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );

Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );
Response Screening(
	Y( :Trait1, :Trait2, :Trait3, :Trait4 ),
	X( Column Group( "Markers" ) ),
	Common Y Scale( 1 ),
	Common X Scale( 1 ),
	Volcano Plots Use FDR Axis( 1 ),
	SendToReport( Dispatch( {}, "", TabListBox, {Set Selected( 4 )} ) )
);

```

### Weight

**Syntax:** obj = Response Screening(...<Weight( column )>...)

**Description:** Specifies a column whose values assign a weight to each row for the analysis.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process ),
	Weight( _weightcol )
);

```

### Window View

**Syntax:** obj = Response Screening(...Window View( "Visible"|"Invisible"|"Private" )...)

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

### X

**Syntax:** obj = Response Screening(...X( column(s) )...)

**Description:** Specifies the predictor variables.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);

```

### Y

**Syntax:** obj = Response Screening(...Y( column(s) )...)

**Description:** Specifies the response variables that contain the measurements to be analyzed.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);

```


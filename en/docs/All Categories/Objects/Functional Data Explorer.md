# Functional Data Explorer



## Associated Constructors

### Functional Data Explorer

**Syntax:** Functional Data Explorer( Y(column), X(column), ID(column) )

**Description:** Fits functional models using a B-Spline, P-Spline, Fourier, or Wavelets basis model. A functional principal components analysis can be performed on the functional model to extract important features from the data. There is also an option to perform functional principal components analysis directly on the data, without fitting a basis function model first.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );

```

## Columns

### By

**Syntax:** obj = Functional Data Explorer(...&lt;By( column(s) )&gt;...)

**Description:** Performs a separate analysis for each level of the specified column.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	By( _bycol )
);

```

### Freq

**Syntax:** obj = Functional Data Explorer(...&lt;Freq( column )&gt;...)

**Description:** Specifies a column whose values assign a frequency to each row for the analysis.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Freq( _freqcol )
);

```

### Function

**Syntax:** obj = Functional Data Explorer(...&lt;Function( column )&gt;...)

**Description:** Specifies the ID variable, which identifies each individual function.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );

```

### ID

**Syntax:** obj = Functional Data Explorer(...&lt;ID( column )&gt;...)

**Description:** Specifies the ID variable, which identifies each individual function.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );

```

### Input

**Syntax:** obj = Functional Data Explorer(...&lt;Input( column )&gt;...)

**Description:** Specifies the input variable.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );

```

### Output

**Syntax:** obj = Functional Data Explorer(...Output( column(s) )...)

**Description:** Specifies the functional process variable. There must be at least two observed output values for each level of the ID variable.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );

```

### Supplementary

**Syntax:** obj = Functional Data Explorer(...&lt;Supplementary( column(s) )&gt;...)

**Description:** Specifies one or more supplementary variables. Supplementary variables are not used in any of the calculations in the platform and including them does not affect the results. These variables can improve data interpretation or be used in future analyses.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Formulation for Homogeneity DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :Homogeneity Grade ),
	X( :T ),
	ID( :Formulation ),
	Z( :Solvent, :Active, :Water ),
	Direct Functional PCA
);

```

### Validation

**Syntax:** obj = Functional Data Explorer(...&lt;Validation( column )&gt;...)

**Description:** Specifies a numeric column that defines the validation sets. This column should contain at most three distinct values.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );
obj = dt << Functional Data Explorer(
	Y( :pH ),
	X( :Time ),
	ID( :BatchID ),
	Validation( :Validation ),
	B Splines
);

```

### X

**Syntax:** obj = Functional Data Explorer(...&lt;X( column )&gt;...)

**Description:** Specifies the input variable.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );

```

### Y

**Syntax:** obj = Functional Data Explorer(...Y( column(s) )...)

**Description:** Specifies the functional process variable. There must be at least two observed output values for each level of the ID variable.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );

```

### Z

**Syntax:** obj = Functional Data Explorer(...&lt;Z( column(s) )&gt;...)

**Description:** Specifies one or more supplementary variables. Supplementary variables are not used in any of the calculations in the platform and including them does not affect the results. These variables can improve data interpretation or be used in future analyses.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Formulation for Homogeneity DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :Homogeneity Grade ),
	X( :T ),
	ID( :Formulation ),
	Z( :Solvent, :Active, :Water ),
	Direct Functional PCA
);

```

## Item Messages

### B Splines

**Syntax:** obj &lt;&lt; B Splines

**Description:** Fits a B-spline model to the data.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	B Splines
);

```

### B Splines Model Controls

**Syntax:** obj &lt;&lt; B Splines Model Controls

**Description:** Opens the Model Controls panel prior to fitting a B-Spline model. You can specify the number of knots and the spline degree.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	B Splines Model Controls
);

```

### Baseline Correction

**Syntax:** obj &lt;&lt; Baseline Correction

**Description:** Subtracts a baseline function from each individual function. You can perform automated baseline correction using either the statistics-sensitive nonlinear iterative peak-clipping (SNIP) or the alternating reweighted least squares solution technique. There is also an option to load a known baseline function from a data table.

### Data Processing

**Syntax:** obj &lt;&lt; Data Processing( &lt;options&gt; )

**Description:** Specifies Data Processing options that enable you to perform pre-processing steps on the data. The options include cleanup, transformation, alignment, spectral, and target function operations.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );
obj = dt << Functional Data Explorer(
	Y( :pH ),
	X( :Time ),
	ID( :BatchID ),
	Data Processing( Square Root )
);

```

### Direct Functional PCA

**Syntax:** obj &lt;&lt; Direct Functional PCA

**Description:** Performs Functional PCA directly without fitting a basis function model. This option requires that the input data be on an evenly spaced grid.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Formulation for Homogeneity DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :Homogeneity Grade ),
	X( :T ),
	ID( :Formulation ),
	Z( :Solvent, :Active, :Water ),
	Direct Functional PCA
);

```

### Fourier Basis

**Syntax:** obj &lt;&lt; Fourier Basis

**Description:** Fits a penalized B-spline model to the data.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Fourier Basis
);

```

### Fourier Basis Model Controls

**Syntax:** obj &lt;&lt; Fourier Basis Model Controls

**Description:** Opens the Model Controls panel prior to fitting a Fourier basis model. You can specify the number of Fourier pairs and the period.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Fourier Basis Model Controls
);

```

### Multivariate Curve Resolution

**Syntax:** obj &lt;&lt; Multivariate Curve Resolution

**Description:** Performs multivariate curve resolution (MCR). This option requires that the input data be on an evenly spaced grid.

### Nonnegative SVD

**Syntax:** obj &lt;&lt; Nonnegative SVD

**Description:** Performs a nonnegative singular value decomposition (SVD) on the stacked matrix of functions. A nonnegative SVD constrains the matrix decomposition so that the scores and loadings are greater than or equal to zero.

### P Splines

**Syntax:** obj &lt;&lt; P Splines

**Description:** Fits a penalized B-spline model to the data.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	P Splines
);

```

### P Splines Model Controls

**Syntax:** obj &lt;&lt; P Splines Model Controls

**Description:** Opens the Model Controls panel prior to fitting a P-Spline model. You can specify the number of knots and the spline degree.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	P Splines Model Controls
);

```

### Peak Finding

**Syntax:** obj &lt;&lt; Peak Finding

**Description:** Finds and summarizes peaks either directly or with a specified parametric model.

### Penalized Nonnegative SVD

**Syntax:** obj &lt;&lt; Penalized Nonnegative SVD

**Description:** Performs penalized nonnegative SVD to construct functional PCA. This option requires that the input data be on an evenly spaced grid.

### Penalized SVD

**Syntax:** obj &lt;&lt; Penalized SVD

**Description:** Performs Penalized SVD to construct functional PCA. This option requires that the input data be on an evenly spaced grid.

### Plot Mean Function

**Syntax:** obj &lt;&lt; Plot Mean Function( state=0|1 )

**Description:** Shows or hides the Mean Function plot in the Summaries report. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Raleigh Temps.jmp" );
obj = dt << Functional Data Explorer( Y( :Temperature ), X( :Month ), ID( :Year ) );
Wait( 1 );
obj << Plot Mean Function( 0 );

```

### Plot Median Function

**Syntax:** obj &lt;&lt; Plot Median Function( state=0|1 )

**Description:** Shows or hides the Median Function plot in the Summaries report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Raleigh Temps.jmp" );
obj = dt << Functional Data Explorer(
	Y( :Temperature ),
	X( :Month ),
	ID( :Year ),
	Plot Median Function( 1 )
);

```

### Plot Standard Deviation Function

**Syntax:** obj &lt;&lt; Plot Standard Deviation Function( state=0|1 )

**Description:** Shows or hides the Standard Deviation Function plot in the Summaries report. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Raleigh Temps.jmp" );
obj = dt << Functional Data Explorer( Y( :Temperature ), X( :Month ), ID( :Year ) );
Wait( 1 );
obj << Plot Standard Deviation Function( 0 );

```

### Save Data

**Syntax:** obj &lt;&lt; Save Data

**Description:** Saves the processed data to a separate data table, in the Stacked format.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process Row Functions.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( dt << Get Column Group( "Ethanol" ) )
);
obj << Save Data;

```

### Unconstrained MCR

**Syntax:** obj &lt;&lt; Unconstrained MCR

**Description:** Performs unconstrained multivariate curve resolution (MCR). This option requires that the input data be on an evenly spaced grid.

### Wavelets

**Syntax:** obj &lt;&lt; Wavelets

**Description:** Fits several wavelets models to the data. This option requires that the input data be on an evenly spaced grid. If data are not evenly spaced, a grid is automatically created before the wavelet routine begins.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ), Wavelets );

```

## Shared Item Messages

### Action

**Syntax:** obj &lt;&lt; Action

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

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

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

**Syntax:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Description:** Redoes the analysis automatically for exclude and data changes. If the Automatic Recalc option is turned on, you should consider using Wait(0) commands to ensure that the exclude and data changes take effect before the recalculation.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**Syntax:** obj &lt;&lt; Broadcast(message)

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

**Syntax:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

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

**Syntax:** obj &lt;&lt; Copy ByGroup Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Copy Script;

```

### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Description:** Move the data table window for this analysis to the front.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Data Table Window;

```

### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Description:** Returns an associative array mapping the by group columns to their values.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**Syntax:** obj &lt;&lt; Get ByGroup Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	By( _bycol )
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

**General**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
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

**Syntax:** obj &lt;&lt; Get Data Table

**Description:** Returns a reference to the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**Syntax:** obj &lt;&lt; Get Group Platform

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

**Syntax:** obj &lt;&lt; Get Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Description:** Times the platform launch.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**Syntax:** obj &lt;&lt; Get Web Support

**Description:** Return a number indicating the level of Interactive HTML support for the display object. 1 means some or all elements are supported. 0 means no support.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Where Expr

**Syntax:** obj &lt;&lt; Get Where Expr

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

**Syntax:** obj &lt;&lt; Local Data Filter

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

**Syntax:** obj &lt;&lt; Paste Local Data Filter

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

**Syntax:** obj &lt;&lt; Redo Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntax:** obj &lt;&lt; Redo ByGroup Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntax:** obj &lt;&lt; Relaunch ByGroup

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	By( _bycol )
);
obj[1] << Relaunch ByGroup;

```

### Remove Column Switcher

**Syntax:** obj &lt;&lt; Remove Column Switcher

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

**Syntax:** obj &lt;&lt; Remove Local Data Filter

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

**Syntax:** obj &lt;&lt; Report;Report( obj )

**Description:** Returns a reference to the report object.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntax:** obj &lt;&lt; Report View( "Full"|"Summary" )

**Description:** The report view determines the level of detail visible in a platform report. Full shows all of the detail, while Summary shows only select content, dependent on the platform. For customized behavior, display boxes support a <<Set Summary Behavior message.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Creates a JSL script to produce this analysis, and save it as a table property in the data table. You can specify a name for the script. The Append Suffix option appends a numeric suffix to the script name, which differentiates the script from an existing script with the same name. The Prompt option prompts the user to specify a script name. The Replace option replaces an existing script with the same name.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
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

**Syntax:** obj &lt;&lt; Sync to Data Table Changes

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

**Syntax:** obj &lt;&lt; Title( "new title" )

**Description:** Sets the title of the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Description:** Returns a reference to the root node in the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transform Column

**Syntax:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

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

**Syntax:** obj &lt;&lt; View Web XML

**Description:** Returns the XML code that is used to create the interactive HTML report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Window View

**Syntax:** obj = Functional Data Explorer(...Window View( "Visible"|"Invisible"|"Private" )...)

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

## Functional Data Explorer Data Processing

### Item Messages

#### Align 0 to 1

**Syntax:** obj &lt;&lt; Data Processing( Align 0 to 1 )

**Description:** Aligns the output functions (Y) over the range of the input (X) to be in 0 to 1.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Align 0 to 1 )
);

```

#### Align Maximum

**Syntax:** obj &lt;&lt; Data Processing( Align Maximum )

**Description:** Aligns the output functions (Y) using the observed maximum input value (X).

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Align Maximum )
);

```

#### Align Minimum

**Syntax:** obj &lt;&lt; Data Processing( Align Minimum )

**Description:** Aligns the output functions (Y) using the observed minimum input value (X).

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Align Minimum )
);

```

#### Align by Function

**Syntax:** obj &lt;&lt; Data Processing( Align by Function )

**Description:** Aligns the output functions (Y) so that the range of each function is over the range of the input (X).

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Align by Function )
);

```

#### Baseline Correction

**Syntax:** obj &lt;&lt; Data Processing( Baseline Correction( Model( Linear|Quadratic|Cubic|Fit Exponential 2P|Fit Exponential 3P ), Correction Region( ), Baseline Regions( vector ), Anchor Points( vector ) ) )

**Description:** Fits and removes a baseline model from each function. You can specify the baseline model, correction region, baseline regions, and the anchor points.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Baseline Correction )
);

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Baseline Correction( Model( Quadratic ) ) )
);

```

#### Center

**Syntax:** obj &lt;&lt; Data Processing( Center )

**Description:** Centers the output.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Center )
);

```

#### Dynamic Time Warping

**Syntax:** obj &lt;&lt; Data Processing( Dynamic Time Warping( Reference( number ) ) )

**Description:** Aligns the output functions using dynamic time warping (DTW). DTW is a function alignment technique that finds an optimal warping to align two or more functions together.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );
obj = dt << Functional Data Explorer(
	Y( :Ethanol ),
	X( :Time ),
	ID( :BatchID ),
	Data Processing( Dynamic Time Warping( Reference( 1 ) ) )
);

```

#### Exp

**Syntax:** obj &lt;&lt; Data Processing( Exp )

**Description:** Transforms the data by computing the exponential function of the output.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );
obj = dt << Functional Data Explorer(
	Y( :pH ),
	X( :Time ),
	ID( :BatchID ),
	Data Processing( Exp )
);

```

#### Filter X

**Syntax:** obj &lt;&lt; Data Processing( Filter X( [lower, upper] ) )

**Description:** Removes input (X) values that are outside of the specified interval.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Data Processing( Filter X( [5, 50] ) );

```

#### Filter Y

**Syntax:** obj &lt;&lt; Data Processing( Filter Y( [lower, upper] ) )

**Description:** Removes output (Y) values outside of the specified interval.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Data Processing( Filter Y( [., 100] ) );

```

#### Load Targets

**Syntax:** obj &lt;&lt; Data Processing( Load Targets( "level" ) )

**Description:** Specifies a target function.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :ID ),
	Data Processing( Load Targets( "Bristol, TN" ) )
);

```

#### Log

**Syntax:** obj &lt;&lt; Data Processing( Log )

**Description:** Transforms the data by computing the natural logarithm of the output.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );
obj = dt << Functional Data Explorer(
	Y( :Air ),
	X( :Time ),
	ID( :BatchID ),
	Data Processing( Log )
);

```

#### Log X

**Syntax:** obj &lt;&lt; Data Processing( Log X )

**Description:** Transforms the data by computing the natural logarithm of the input.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );
obj = dt << Functional Data Explorer(
	Y( :Air ),
	X( :Time ),
	ID( :BatchID ),
	Data Processing( Log X )
);

```

#### Logit

**Syntax:** obj &lt;&lt; Data Processing( Logit )

**Description:** Transforms the data by computing the logit function of the output. The output values must be between 0 and 1.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Range 0 to 1 ),
	Data Processing( Logit )
);

```

#### MSC

**Syntax:** obj &lt;&lt; Data Processing( MSC )

**Description:** Applies the Multiplicative Scatter Correction method to the data. This method fits a simple linear regression for each individual function (level of the ID variable) where the response is the output values for the function and the regressor is the output values for the mean function.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Data Processing( MSC )
);

```

#### Negation

**Syntax:** obj &lt;&lt; Data Processing( Negation )

**Description:** Transforms the data by negating the output.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Negation )
);

```

#### Range 0 to 1

**Syntax:** obj &lt;&lt; Data Processing( Range 0 to 1 )

**Description:** Scales the output to lie within the range 0 to 1.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Range 0 to 1 )
);

```

#### Reduce

**Syntax:** obj &lt;&lt; Data Processing( Reduce( Grid( number ) ) ); obj &lt;&lt; Data Processing( Reduce( Bin( number ) ) ); obj &lt;&lt; Data Processing( Reduce( Thin( number ) ) )

**Description:** Reduces the data over the input (X) with one of a variety of techniques.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Data Processing( Reduce( Thin( 2 ) ) );

```

#### Remove Selected

**Syntax:** obj &lt;&lt; Data Processing( Remove Selected )

**Description:** Removes the selected values.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
dt << Select Where( :STATION == "USW00024024" );
Wait( 1 );
obj << Data Processing( Remove Selected );

```

#### Remove Unselected

**Syntax:** obj &lt;&lt; Data Processing( Remove Unselected )

**Description:** Removes the unselected values.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
dt << Select Where( :STATION != "USW00024024" );
Wait( 1 );
obj << Data Processing( Remove Unselected );

```

#### Remove Value

**Syntax:** obj &lt;&lt; Data Processing( Remove Value( number ) )

**Description:** Removes observations that have the specified response value.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
Wait( 1 );
obj << Data Processing( Remove Value( 30 ) );

```

#### Remove Zeros

**Syntax:** obj &lt;&lt; Data Processing( Remove Zeros )

**Description:** Removes observations that have a response value of zero.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );
obj = dt << Functional Data Explorer(
	Y( :Ethanol ),
	X( :Time ),
	ID( :BatchID ),
	Data Processing( Remove Zeros )
);

```

#### Row Alignment

**Syntax:** obj &lt;&lt; Data Processing( Row Alignment )

**Description:** Replaces the input values with the row number.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Row Alignment )
);

```

#### SNV

**Syntax:** obj &lt;&lt; Data Processing( SNV )

**Description:** Applies the Standard Normal Variate method to the data. This method standardizes the output by centering and scaling each individual function (level of the ID variable) to have a mean of 0 and a standard deviation of 1.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Data Processing( SNV )
);

```

#### Savitzky-Golay Filter

**Syntax:** obj &lt;&lt; Data Processing( "Savitzky-Golay Filter"n )

**Description:** Applies the Savitzky-Golay filter to each function. This option requires that the input data be on an evenly spaced grid.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Data Processing( "Savitzky-Golay Filter"n )
);

```

#### Savitzky-Golay First Derivative

**Syntax:** obj &lt;&lt; Data Processing( "Savitzky-Golay First Derivative"n )

**Description:** Returns the first derivative from the Savitzky-Golay filter. This option requires that the input data be on an evenly spaced grid.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Data Processing( "Savitzky-Golay First Derivative"n )
);

```

#### Savitzky-Golay Second Derivative

**Syntax:** obj &lt;&lt; Data Processing( "Savitzky-Golay Second Derivative"n )

**Description:** Returns the second derivative from the Savitzky-Golay filter. This option requires that the input data be on an evenly spaced grid.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Data Processing( "Savitzky-Golay Second Derivative"n )
);

```

#### Square

**Syntax:** obj &lt;&lt; Data Processing( Square )

**Description:** Transforms the data by computing the square of the output.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );
obj = dt << Functional Data Explorer(
	Y( :pH ),
	X( :Time ),
	ID( :BatchID ),
	Data Processing( Square )
);

```

#### Square Root

**Syntax:** obj &lt;&lt; Data Processing( Square Root )

**Description:** Transforms the data by computing the square root of the output. The output values must be nonnegative.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );
obj = dt << Functional Data Explorer(
	Y( :pH ),
	X( :Time ),
	ID( :BatchID ),
	Data Processing( Square Root )
);

```

#### Standardize

**Syntax:** obj &lt;&lt; Data Processing( Standardize )

**Description:** Standardizes the output by centering and scaling.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Standardize )
);

```

## Functional Data Explorer FDOE

### Item Messages

#### Diagnostic Plots

**Syntax:** obj&lt;&lt; Model Name( Functional DOE Analysis( Diagnostic Plots( state=0|1 ) ) ); scrobj &lt;&lt; Diagnostic Plots( state=0|1 )

**Description:** Shows or hides actual by predicted and residual plots in the Functional DOE Analysis report. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :"Size/nm"n ),
	X( :Time ),
	ID( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	B Splines( Functional DOE Analysis, Diagnostic Plots( 0 ) )
);
Wait( 2 );
scrobj = Report( obj )["Functional DOE Analysis"] << get scriptable object;
scrobj << Diagnostic Plots( 1 );
Report( obj )["FDOE Diagnostic Plots"] << Close( 0 );

```

#### FDOE Profiler

**Syntax:** obj &lt;&lt; Model Name( Functional DOE Analysis( FDOE Profiler( state=0|1 ) ) ); scrobj &lt;&lt; FDOE Profiler( state=0|1 )

**Description:** Shows or hides the FDOE Profiler, which enables you to explore how the response changes based on the values of the supplementary variables. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :"Size/nm"n ),
	X( :Time ),
	ID( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	B Splines( Functional DOE Analysis( FDOE Profiler( 0 ) ) )
);
Report( obj )["Functional PCA"] << Close( 1 );
Report( obj )["Model Selection"] << Close( 1 );
Wait( 2 );
scrobj = Report( obj )["Functional DOE Analysis"] << get scriptable object;
scrobj << FDOE Profiler( 1 );

```

#### Generalized Regression FPC Model

**Syntax:** obj &lt;&lt; Model Name( Functional DOE Analysis( Generalized Regression FPC Model( FPC Number( number ), commands )))

**Description:** Specifies the settings for the generalized regression model that is created with the Functional DOE Analysis option. Use this command to specify settings that differ from the default settings.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Formulation for Homogeneity DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :Homogeneity Grade ),
	X( :T ),
	ID( :Formulation ),
	Z( :Solvent, :Active, :Water ),
	P Splines(
		Functional DOE Analysis(
			Generalized Regression FPC Model(
				FPC Number( 1 ),
				Estimation Method( "Best Subset" ),
				Validation Method( "BIC" )
			),
			Generalized Regression FPC Model(
				FPC Number( 2 ),
				Estimation Method( "Elastic Net" ),
				Validation Method( "AICc" )
			)
		),
		Customize Function Summaries( Number of FPCs( 2 ) )
	)
);
Report( obj )["Generalized Regression for FPC Scores"] << Close( 0 );

```

#### Generalized Regression for FPC Scores

**Syntax:** obj &lt;&lt; Model Name( Functional DOE Analysis( Generalized Regression for FPC Scores( state=0|1 ) ) ); scrobj &lt;&lt; Generalized Regression for FPC Scores( state=0|1 )

**Description:** Shows or hides the Generalized Regression reports for each FPC score. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :"Size/nm"n ),
	X( :Time ),
	ID( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	B Splines( Functional DOE Analysis )
);
Report( obj )["Generalized Regression for FPC Scores"] << Close( 0 );
Wait( 2 );
scrobj = Report( obj )["Functional DOE Analysis"] << get scriptable object;
scrobj << Generalized Regression for FPC Scores( 0 );

```

#### Save Prediction Formula

**Syntax:** obj &lt;&lt; Model Name( Functional DOE Analysis( Save Prediction Formula ) ); obj &lt;&lt; Wavelets( Wavelets DOE Analysis( 1, Save Prediction Formula ) ); scrobj &lt;&lt; Save Prediction Formula

**Description:** Saves the Prediction Formula to a new column in the current data table. If the original data format is Rows as Functions or Columns as Functions, this option creates a new data table that contains the original data in stacked format and a column for the Prediction Formula.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :"Size/nm"n ),
	X( :Time ),
	ID( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	B Splines( Functional DOE Analysis( Save Prediction Formula ) )
);

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Z( :Propanol, :Butanol, :Pentanol ),
	Wavelets( Wavelets DOE Analysis( 1, Save Prediction Formula ) )
);

```

**Example 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Z( :Propanol, :Butanol, :Pentanol ),
	Wavelets( Wavelets DOE Analysis( 1 ) )
);
scrobj = Report( obj )["Wavelets DOE Analysis"] << get scriptable object;
scrobj << Save Prediction Formula;

```

#### Save Residual Formula

**Syntax:** obj &lt;&lt; Model Name( Functional DOE Analysis( Save Residual Formula ) ); obj &lt;&lt; Wavelets( Wavelets DOE Analysis( 1, Save Residual Formula ) ); scrobj &lt;&lt; Save Residual Formula

**Description:** Saves the Residual Formula to a new column in the current data table. If the original data format is Rows as Functions or Columns as Functions, this option creates a new data table that contains the original data in stacked format and a column for the Residual Formula.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :"Size/nm"n ),
	X( :Time ),
	ID( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	B Splines( Functional DOE Analysis( Save Residual Formula ) )
);

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Z( :Propanol, :Butanol, :Pentanol ),
	Wavelets( Wavelets DOE Analysis( 1, Save Residual Formula ) )
);

```

**Example 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :"Size/nm"n ),
	X( :Time ),
	ID( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	B Splines( Functional DOE Analysis )
);
scrobj = Report( obj )["Functional DOE Analysis"] << get scriptable object;
scrobj << Save Residual Formula;

```

## Functional Data Explorer FPCA

### Item Messages

#### Customize Number of FPCs

**Syntax:** obj &lt;&lt; Model Name( Functional PCA( 1, Customize Number of FPCs( number ) ) ); scrobj &lt;&lt; Customize Number of FPCs( number )

**Description:** Specifies the number of FPC scores to show in the Functional PCA. Specifying the number of FPC scores also updates the Function Summaries report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Fourier Basis( Functional PCA( 1, Customize Number of FPCs( 3 ) ) ),
	Send to Report(
		Dispatch( {"Fourier Basis on Initial data"}, "Model Selection", OutlineBox,
			{Close( 1 )}
		)
	)
);
Wait( 1 );
scrobj = (Report( obj )["Functional PCA"] << get scriptable object);
scrobj << Customize Number of FPCs( 2 );

```

#### Diagnostic Plots

**Syntax:** obj &lt;&lt; Model Name( Functional PCA( 1, Diagnostic Plots( state=0|1 ) ); scrobj &lt;&lt; Diagnostic Plots( state=0|1 )

**Description:** Shows or hides the FPCA Diagnostic Plots in the Functional PCA report. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Fourier Basis( Functional PCA( 1, Diagnostic Plots( 0 ) ) ),
	Send to Report(
		Dispatch( {"Fourier Basis on Initial data"}, "Model Selection", OutlineBox,
			{Close( 1 )}
		)
	)
);
Wait( 1 );
scrobj = (Report( obj )["Functional PCA"] << get scriptable object);
scrobj << Diagnostic Plots( 1 );
Report( obj )["FPCA Diagnostic Plots"] << Close( 0 );

```

#### FPC Profiler

**Syntax:** obj &lt;&lt; Model Name( Functional PCA( 1, FPC Profiler( state=0|1 ) ) ); scrobj &lt;&lt; FPC Profiler( state=0|1 )

**Description:** Shows or hides a profiler of the FPC scores. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Fourier Basis( Functional PCA( 1, FPC Profiler( 0 ) ) ),
	Send to Report(
		Dispatch( {"Fourier Basis on Initial data"}, "Model Selection", OutlineBox,
			{Close( 1 )}
		)
	)
);
Wait( 1 );
scrobj = (Report( obj )["Functional PCA"] << get scriptable object);
scrobj << FPC Profiler( 1 );

```

#### Score Plot

**Syntax:** obj &lt;&lt; Model Name( Functional PCA( 1, Score Plot( state=0|1 ) ) ); scrobj &lt;&lt; Score Plot( state=0|1 )

**Description:** Shows or hides a plot of the FPC scores. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Fourier Basis( Functional PCA( 1, Score Plot( 0 ) ) ),
	Send to Report(
		Dispatch( {"Fourier Basis on Initial data"}, "Model Selection", OutlineBox,
			{Close( 1 )}
		)
	)
);
Wait( 1 );
scrobj = (Report( obj )["Functional PCA"] << get scriptable object);
scrobj << Score Plot( 1 );

```

## Functional Data Explorer Model

### Item Messages

#### AICc

**Syntax:** obj &lt;&lt; Model Name( AICc ); scrobj &lt;&lt; AICc

**Description:** Specifies the AICc as the model selection criterion for B-Spline, P-Spline, and Fourier Basis models.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	B Splines( AICc )
);

```

#### BIC

**Syntax:** obj &lt;&lt; Model Name( BIC ); scrobj &lt;&lt; BIC

**Description:** Specifies the BIC as the model selection criterion for B-Spline, P-Spline, and Fourier Basis models.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	P Splines( BIC )
);

```

#### Basis Function Coefficients

**Syntax:** obj &lt;&lt; Model Name( Basis Function Coefficients( state=0|1 ) ); scrobj &lt;&lt; Basis Function Coefficients( state=0|1 )

**Description:** Shows or hides the Basis Function Coefficients report for the corresponding model fit. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Fourier Basis( Basis Function Coefficients( 0 ) )
);
Wait( 1 );
scrobj = (Report( obj )["Fourier Basis on Initial data"] << get scriptable object);
scrobj << Basis Function Coefficients( 1 );
Report( obj )["Basis Function Coefficients"] << Close( 0 );

```

#### Diagnostic Plots

**Syntax:** obj &lt;&lt; Model Name( Diagnostic Plots( state=0|1 ) ); scrobj &lt;&lt; Diagnostic Plots( state=0|1 )

**Description:** Shows or hides the Diagnostic Plots report. This option is not available for Wavelets or Direction Functional PCA models. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );
obj = dt << Functional Data Explorer(
	Y( :pH ),
	X( :Time ),
	ID( :BatchID ),
	B Splines( Diagnostic Plots( 0 ) )
);
Wait( 1 );
scrobj = (Report( obj )["B-Spline on Initial data"] << get scriptable object);
scrobj << Diagnostic Plots( 1 );
Report( obj )["B-Spline Diagnostic Plots"] << Close( 0 );

```

#### Function Summaries

**Syntax:** obj &lt;&lt; Model Name( Function Summaries( state=0|1 ) ); scrobj &lt;&lt; Function Summaries( state=0|1 )

**Description:** Shows or hides the Function Summaries report. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Fourier Basis( Function Summaries( 0 ) )
);
Wait( 1 );
scrobj = (Report( obj )["Fourier Basis on Initial data"] << get scriptable object);
scrobj << Function Summaries( 1 );
Report( obj )["Function Summaries"] << Close( 0 );

```

#### Functional DOE Analysis

**Syntax:** obj &lt;&lt; Model Name( Functional DOE Analysis( ... ) ); scrobj &lt;&lt; Functional DOE Analysis( ... )

**Description:** Launches a Generalized Regression report within the FDE platform. A generalized regression model is fit to each of the FPC score functions using the supplementary variables as model effects.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Formulation for Homogeneity DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :Homogeneity Grade ),
	X( :T ),
	ID( :Formulation ),
	Z( :Solvent, :Active, :Water ),
	P Splines( Functional DOE Analysis )
);

```

#### Functional PCA

**Syntax:** obj &lt;&lt; Model Name( Functional PCA( state= 0|1 ) ); scrobj &lt;&lt; Functional PCA( state=0|1 )

**Description:** Shows or hides the Functional PCA report. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Fourier Basis( Functional PCA( 0 ) );
obj << Send to Report(
	Dispatch( {"Fourier Basis on Initial data"}, "Model Selection", OutlineBox,
		{Close( 1 )}
	)
);
Wait( 1 );
scrobj = (Report( obj )["Fourier Basis on Initial data"] << get scriptable object);
scrobj << Functional PCA( 1 );

```

#### GCV

**Syntax:** obj &lt;&lt; Model Name( GCV ); scrobj &lt;&lt; GCV

**Description:** Specifies the generalized cross validation (GCV) as the model selection criterion for B-Spline, P-Spline, and Fourier Basis models.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Fourier Basis( GCV )
);

```

#### Plot Basis

**Syntax:** obj &lt;&lt; Model Name( Plot Basis( state=0|1 ) ); scrobj &lt;&lt; Plot Basis( state=0|1 )

**Description:** Shows or hides a plot of all the basis functions on one graph. This option is not available for Wavelets or Direct Functional PCA models.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Fourier Basis( Plot Basis( 1 ) )
);

```

#### Random Coefficients

**Syntax:** obj &lt;&lt; Model Name( Random Coefficients( state=0|1 ) ); scrobj &lt;&lt; Random Coefficients( state=0|1 )

**Description:** Shows or hides the Random Coefficients by Function report. The report contains a table of the estimated random coefficients for each basis function and functional process combination. This option is not available for Wavelets or Direction Functional PCA models. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Fourier Basis( Random Coefficients( 1 ) )
);
Report( obj )["Random Coefficients by Function"] << Close( 0 );

```

#### Remove Fit

**Syntax:** obj &lt;&lt; (Model["B Splines" | "P Splines" | "Fourier Basis" | "Wavelets" | "Direct Functional PCA"] &lt;&lt; Remove Fit)

**Description:** Removes the specified fit from the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Fourier Basis,
	B Splines
);
Wait( 2 );
obj << (Model["Fourier Basis"] << Remove Fit);

```

#### Save Data

**Syntax:** obj &lt;&lt; Model Name( Save Data ); scrobj &lt;&lt; Save Data

**Description:** Saves the processed data to a new data table. The processed data are saved in the stacked data format.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process Row Functions.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( dt << Get Column Group( "Ethanol" ) ),
	B Splines( Save Data )
);

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Z( :Propanol, :Butanol, :Pentanol ),
	Wavelets
);
scrobj = (Report( obj )["Wavelets on Initial data"] << get scriptable object);
scrobj << Save Data;

```

#### Save Script Options

**Syntax:** obj &lt;&lt; Save Script Options( "Save Script Saves Steps"|"Save Script Saves State"="Save Script Saves Steps" )

**Description:** Specifies the type of script that is saved for reproducing the peak finding results. "Save Script Saves Steps" by default.

#### Wavelets DOE Analysis

**Syntax:** obj &lt;&lt; Wavelets( Wavelets DOE Analysis( state=0|1 ) ); scrobj &lt;&lt; Wavelets DOE Analysis( state=0|1 )

**Description:** Launches a Generalized Regression report within the FDE platform. Generalized regression models are fit to the wavelet coefficients using the supplementary variables as model effects.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Z( :Propanol, :Butanol, :Pentanol ),
	Wavelets( Functional PCA( 0 ), Wavelets DOE Analysis( 1 ) )
);

```

## Functional Data Explorer Peak Summaries

### Item Messages

#### Customize Peak Summaries

**Syntax:** obj &lt;&lt; Peak Finding( Customize Peak Summaries(stat1(0|1), ..., statN(0|1)) )

**Description:** Customizes the summary statistics displayed in the Function Summaries report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Peak Finding( Customize Peak Summaries() )
);

```

#### Save Summaries

**Syntax:** obj &lt;&lt; Peak Finding( Save Summaries )

**Description:** Saves the model summary statistics for each function, including the functional principal component scores.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Peak Finding( Save Summaries )
);

```

## Functional Data Explorer Summaries

### Item Messages

#### Control Chart Builder

**Syntax:** obj &lt;&lt; B Splines( Control Chart Builder )obj &lt;&lt; P Splines( Control Chart Builder )obj &lt;&lt; Fourier Basis( Control Chart Builder )

**Description:** Analyzes the functional principal components using the Control Chart Builder.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	B Splines( Control Chart Builder )
);

```

#### Customize Function Summaries

**Syntax:** obj &lt;&lt; B Splines( Customize Function Summaries(stat1(0|1), ..., statN(0|1)) )obj &lt;&lt; P Splines( Customize Function Summaries(stat1(0|1), ..., statN(0|1)) )obj &lt;&lt; Fourier Basis( Customize Function Summaries(stat1(0|1), ..., statN(0|1)) )

**Description:** Customizes the summary statistics displayed in the Function Summaries report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	B Splines(
		Customize Function Summaries(
			Number of FPCs( 2 ),
			Mean( 0 ),
			Std Dev( 1 ),
			Integrated Difference( 0 ),
			Median( 1 ),
			Minimum( 1 ),
			Maximum( 1 )
		)
	)
);

```

#### Save Summaries

**Syntax:** obj &lt;&lt; B Splines( Save Summaries )obj &lt;&lt; P Splines( Save Summaries )obj &lt;&lt; Fourier Basis( Save Summaries )

**Description:** Saves the model summary statistics for each function, including the functional principal component scores.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	B Splines( Save Summaries )
);

```

## Functional Data Explorer WDOE

### Item Messages

#### Diagnostic Plots

**Syntax:** obj &lt;&lt; Wavelets( Wavelets DOE Analysis( 1, Diagnostic Plots( state=0|1 ) ) ); scrobj &lt;&lt; Diagnostic Plots( state=0|1 )

**Description:** Shows or hides actual by predicted and residual plots in the Wavelets DOE Analysis report. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Z( :Propanol, :Butanol, :Pentanol ),
	Wavelets( Functional PCA( 0 ), Wavelets DOE Analysis( 1, Diagnostic Plots( 0 ) ) )
);
Wait( 1 );
scrobj = (Report( obj )["Wavelets DOE Analysis"] << get scriptable object);
scrobj << Diagnostic Plots( 1 );
Report( obj )["FDOE Diagnostic Plots"] << Close( 0 );

```

#### FDOE Profiler

**Syntax:** obj &lt;&lt; Wavelets( Wavelets DOE Analysis( 1, FDOE Profiler( state=0|1 ) ) ); scrobj &lt;&lt; FDOE Profiler( state=0|1 )

**Description:** Shows or hides the FDOE Profiler, which enables you to explore how the response changes based on the values of the supplementary variables. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Z( :Propanol, :Butanol, :Pentanol ),
	Wavelets( Functional PCA( 0 ), Wavelets DOE Analysis( 1, FDOE Profiler( 0 ) ) )
);
Wait( 1 );
scrobj = (Report( obj )["Wavelets DOE Analysis"] << get scriptable object);
scrobj << FDOE Profiler( 1 );

```

#### Generalized Regression for Wavelets Coefficients

**Syntax:** obj &lt;&lt; Wavelets( Wavelets DOE Analysis( 1, Generalized Regression for Wavelets Coefficients( state=0|1 ) ) ); scrobj &lt;&lt; Generalized Regression for Wavelets Coefficients( state=0|1 )

**Description:** Shows or hides the Generalized Regression reports for each wavelet coefficient. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Z( :Propanol, :Butanol, :Pentanol ),
	Wavelets(
		Functional PCA( 0 ),
		Wavelets DOE Analysis( 1, Generalized Regression for Wavelets Coefficients( 0 ) )
	)
);
Wait( 1 );
scrobj = (Report( obj )["Wavelets DOE Analysis"] << get scriptable object);
scrobj << Generalized Regression for Wavelets Coefficients( 1 );
Report( obj )["Generalized Regression for Wavelets Coefficients"] << Close( 0 );

```

#### Save Prediction Formula

**Syntax:** obj &lt;&lt; Model Name( Functional DOE Analysis( Save Prediction Formula ) ); obj &lt;&lt; Wavelets( Wavelets DOE Analysis( 1, Save Prediction Formula ) ); scrobj &lt;&lt; Save Prediction Formula

**Description:** Saves the Prediction Formula to a new column in the current data table. If the original data format is Rows as Functions or Columns as Functions, this option creates a new data table that contains the original data in stacked format and a column for the Prediction Formula.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :"Size/nm"n ),
	X( :Time ),
	ID( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	B Splines( Functional DOE Analysis( Save Prediction Formula ) )
);

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Z( :Propanol, :Butanol, :Pentanol ),
	Wavelets( Wavelets DOE Analysis( 1, Save Prediction Formula ) )
);

```

**Example 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Z( :Propanol, :Butanol, :Pentanol ),
	Wavelets( Wavelets DOE Analysis( 1 ) )
);
scrobj = Report( obj )["Wavelets DOE Analysis"] << get scriptable object;
scrobj << Save Prediction Formula;

```

#### Save Residual Formula

**Syntax:** obj &lt;&lt; Model Name( Functional DOE Analysis( Save Residual Formula ) ); obj &lt;&lt; Wavelets( Wavelets DOE Analysis( 1, Save Residual Formula ) ); scrobj &lt;&lt; Save Residual Formula

**Description:** Saves the Residual Formula to a new column in the current data table. If the original data format is Rows as Functions or Columns as Functions, this option creates a new data table that contains the original data in stacked format and a column for the Residual Formula.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :"Size/nm"n ),
	X( :Time ),
	ID( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	B Splines( Functional DOE Analysis( Save Residual Formula ) )
);

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Z( :Propanol, :Butanol, :Pentanol ),
	Wavelets( Wavelets DOE Analysis( 1, Save Residual Formula ) )
);

```

**Example 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :"Size/nm"n ),
	X( :Time ),
	ID( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	B Splines( Functional DOE Analysis )
);
scrobj = Report( obj )["Functional DOE Analysis"] << get scriptable object;
scrobj << Save Residual Formula;

```


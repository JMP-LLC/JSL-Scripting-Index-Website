# Functional Data Explorer Group



## Associated Constructors

### Functional Data Explorer Group

**Syntax:** Functional Data Explorer Group( model1, model2, ... )

Functional Data Explorer Group( model1; model2; ... )

**Description:** Groups Functional Data Explorer models for multiple Y in the Stacked data format.

## Item Messages

### AICc

**Syntax:** obj << Model Name( AICc ); 

scrobj << AICc

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

### Align 0 to 1

**Syntax:** obj << Data Processing( Align 0 to 1 )

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

### Align Maximum

**Syntax:** obj << Data Processing( Align Maximum )

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

### Align Minimum

**Syntax:** obj << Data Processing( Align Minimum )

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

### Align by Function

**Syntax:** obj << Data Processing( Align by Function )

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

### B Splines

**Syntax:** obj << B Splines

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

**Syntax:** obj << B Splines Model Controls

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

### BIC

**Syntax:** obj << Model Name( BIC ); 

scrobj << BIC

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

### Baseline Correction

**Syntax:** obj << Data Processing( Baseline Correction( Model( Linear|Quadratic|Cubic|Fit Exponential 2P|Fit Exponential 3P ), Correction Region( ), Baseline Regions( vector ), Anchor Points( vector ) ) )

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

### Center

**Syntax:** obj << Data Processing( Center )

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

### Direct Functional PCA

**Syntax:** obj << Direct Functional PCA

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

### Dynamic Time Warping

**Syntax:** obj << Data Processing( Dynamic Time Warping( Reference( number ) ) )

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

### Exp

**Syntax:** obj << Data Processing( Exp )

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

### Filter X

**Syntax:** obj << Data Processing( Filter X( [lower, upper] ) )

**Description:** Removes input (X) values that are outside of the specified interval.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Data Processing( Filter X( [5, 50] ) );

```

### Filter Y

**Syntax:** obj << Data Processing( Filter Y( [lower, upper] ) )

**Description:** Removes output (Y) values outside of the specified interval.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Data Processing( Filter Y( [., 100] ) );

```

### Fourier Basis

**Syntax:** obj << Fourier Basis

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

**Syntax:** obj << Fourier Basis Model Controls

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

### GCV

**Syntax:** obj << Model Name( GCV ); 

scrobj << GCV

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

### Load Targets

**Syntax:** obj << Data Processing( Load Targets( "level" ) )

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

### Log

**Syntax:** obj << Data Processing( Log )

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

### Log X

**Syntax:** obj << Data Processing( Log X )

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

### Logit

**Syntax:** obj << Data Processing( Logit )

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

### MSC

**Syntax:** obj << Data Processing( MSC )

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

### Multivariate Curve Resolution

**Syntax:** obj << Multivariate Curve Resolution

**Description:** Performs multivariate curve resolution (MCR). This option requires that the input data be on an evenly spaced grid.

### Negation

**Syntax:** obj << Data Processing( Negation )

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

### Nonnegative SVD

**Syntax:** obj << Nonnegative SVD

**Description:** Performs a nonnegative singular value decomposition (SVD) on the stacked matrix of functions. A nonnegative SVD constrains the matrix decomposition so that the scores and loadings are greater than or equal to zero.

### P Splines

**Syntax:** obj << P Splines

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

**Syntax:** obj << P Splines Model Controls

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

**Syntax:** obj << Peak Finding

**Description:** Finds and summarizes peaks either directly or with a specified parametric model.

### Penalized Nonnegative SVD

**Syntax:** obj << Penalized Nonnegative SVD

**Description:** Performs penalized nonnegative SVD to construct functional PCA. This option requires that the input data be on an evenly spaced grid.

### Penalized SVD

**Syntax:** obj << Penalized SVD

**Description:** Performs Penalized SVD to construct functional PCA. This option requires that the input data be on an evenly spaced grid.

### Plot Mean Function

**Syntax:** obj << Plot Mean Function( state=0|1 )

**Description:** Shows or hides the Mean Function plot in the Summaries report. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Raleigh Temps.jmp" );
obj = dt << Functional Data Explorer( Y( :Temperature ), X( :Month ), ID( :Year ) );
Wait( 1 );
obj << Plot Mean Function( 0 );

```

### Plot Median Function

**Syntax:** obj << Plot Median Function( state=0|1 )

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

**Syntax:** obj << Plot Standard Deviation Function( state=0|1 )

**Description:** Shows or hides the Standard Deviation Function plot in the Summaries report. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Raleigh Temps.jmp" );
obj = dt << Functional Data Explorer( Y( :Temperature ), X( :Month ), ID( :Year ) );
Wait( 1 );
obj << Plot Standard Deviation Function( 0 );

```

### Range 0 to 1

**Syntax:** obj << Data Processing( Range 0 to 1 )

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

### Reduce

**Syntax:** obj << Data Processing( Reduce( Grid( number ) ) ); 

obj << Data Processing( Reduce( Bin( number ) ) ); 

obj << Data Processing( Reduce( Thin( number ) ) )

**Description:** Reduces the data over the input (X) with one of a variety of techniques.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Data Processing( Reduce( Thin( 2 ) ) );

```

### Remove Last Step

**Syntax:** obj << Remove Last Step

### Remove Selected

**Syntax:** obj << Data Processing( Remove Selected )

**Description:** Removes the selected values.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
dt << Select Where( :STATION == "USW00024024" );
Wait( 1 );
obj << Data Processing( Remove Selected );

```

### Remove Unselected

**Syntax:** obj << Data Processing( Remove Unselected )

**Description:** Removes the unselected values.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
dt << Select Where( :STATION != "USW00024024" );
Wait( 1 );
obj << Data Processing( Remove Unselected );

```

### Remove Value

**Syntax:** obj << Data Processing( Remove Value( number ) )

**Description:** Removes observations that have the specified response value.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
Wait( 1 );
obj << Data Processing( Remove Value( 30 ) );

```

### Remove Zeros

**Syntax:** obj << Data Processing( Remove Zeros )

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

### Row Alignment

**Syntax:** obj << Data Processing( Row Alignment )

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

### SNV

**Syntax:** obj << Data Processing( SNV )

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

### Save Data

**Syntax:** obj << Save Data

**Description:** Saves the processed data to a separate data table, in the Stacked format.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );
obj = dt << Functional Data Explorer(
	Y( :Ethanol, :Temp, :Molasses Feed ),
	X( :Time ),
	ID( :BatchID ),
	B Splines
);
obj << Save Data;

```

### Save Summaries

**Syntax:** obj << Save Summaries

**Description:** Saves the model summary statistics of each function (ID) for each output (Y).

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );
obj = dt << Functional Data Explorer(
	Y( :Ethanol, :Temp, :Molasses Feed ),
	X( :Time ),
	ID( :BatchID ),
	B Splines
);
obj << Save Summaries;

```

### Savitzky-Golay Filter

**Syntax:** obj << Data Processing( "Savitzky-Golay Filter"n )

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

### Savitzky-Golay First Derivative

**Syntax:** obj << Data Processing( "Savitzky-Golay First Derivative"n )

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

### Savitzky-Golay Second Derivative

**Syntax:** obj << Data Processing( "Savitzky-Golay Second Derivative"n )

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

### Square

**Syntax:** obj << Data Processing( Square )

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

### Square Root

**Syntax:** obj << Data Processing( Square Root )

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

### Standardize

**Syntax:** obj << Data Processing( Standardize )

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

### Unconstrained MCR

**Syntax:** obj << Unconstrained MCR

**Description:** Performs unconstrained multivariate curve resolution (MCR). This option requires that the input data be on an evenly spaced grid.

### Wavelets

**Syntax:** obj << Wavelets

**Description:** Fits several wavelets models to the data. This option requires that the input data be on an evenly spaced grid. If data are not evenly spaced, a grid is automatically created before the wavelet routine begins.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ), Wavelets );

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
obj << Copy Script;

```

### Data Table Window

**Syntax:** obj << Data Table Window

**Description:** Move the data table window for this analysis to the front.

```jsl

Names Default To Here( 1 );
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
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Script

**Syntax:** obj << Get Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

Names Default To Here( 1 );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntax:** obj << Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```jsl

Names Default To Here( 1 );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntax:** obj << Get Timing

**Description:** Times the platform launch.

```jsl

Names Default To Here( 1 );
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
obj << Redo Analysis;

```

### Relaunch Analysis

**Syntax:** obj << Relaunch Analysis

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

Names Default To Here( 1 );
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
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntax:** obj << Report View( "Full"|"Summary" )

**Description:** The report view determines the level of detail visible in a platform report. Full shows all of the detail, while Summary shows only select content, dependent on the platform. For customized behavior, display boxes support a <<Set Summary Behavior message.

```jsl

Names Default To Here( 1 );
obj << Report View( "Summary" );

```

### Save Script for All Objects

**Syntax:** obj << Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj << Save Script for All Objects To Data Table( <name> )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```jsl

Names Default To Here( 1 );
obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```jsl

Names Default To Here( 1 );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```jsl

Names Default To Here( 1 );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj << Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

Names Default To Here( 1 );
obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj << Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```jsl

Names Default To Here( 1 );
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj << Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

Names Default To Here( 1 );
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
obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj << Top Report

**Description:** Returns a reference to the root node in the report.

```jsl

Names Default To Here( 1 );
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


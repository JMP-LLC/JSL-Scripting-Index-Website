# Functional Data Explorer Group



## Associated Constructors

### Functional Data Explorer Group

**Syntax:** Functional Data Explorer Group( model1, model2, ... ) Functional Data Explorer Group( model1; model2; ... )

**Description:** Groups Functional Data Explorer models for multiple Y in the Stacked data format.

## Item Messages

### AICc

**Syntax:** obj &lt;&lt; Model Name( AICc ); scrobj &lt;&lt; AICc

**Description:** Specifies the AICc as the model selection criterion for B-Spline, P-Spline, and Fourier Basis models.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	B Splines( AICc ));

```

### ARWLS Save Baselines

**Syntax:** obj &lt;&lt; ARWLS Save Baselines

**JMP Version Added:** 19

### ARWLS Save Corrected

**Syntax:** obj &lt;&lt; ARWLS Save Corrected

**JMP Version Added:** 19

### Align 0 to 1

**Syntax:** obj &lt;&lt; Data Processing( Align 0 to 1 )

**Description:** Aligns the output functions (Y) over the range of the input (X) to be in 0 to 1.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	Data Processing( Align 0 to 1 ));

```

### Align Maximum

**Syntax:** obj &lt;&lt; Data Processing( Align Maximum )

**Description:** Aligns the output functions (Y) using the observed maximum input value (X).

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	Data Processing( Align Maximum ));

```

### Align Minimum

**Syntax:** obj &lt;&lt; Data Processing( Align Minimum )

**Description:** Aligns the output functions (Y) using the observed minimum input value (X).

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	Data Processing( Align Minimum ));

```

### Align by Function

**Syntax:** obj &lt;&lt; Data Processing( Align by Function )

**Description:** Aligns the output functions (Y) so that the range of each function is over the range of the input (X).

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	Data Processing( Align by Function ));

```

### B Splines

**Syntax:** obj &lt;&lt; B Splines

**Description:** Fits a B-spline model to the data.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	B Splines);

```

### B Splines Model Controls

**Syntax:** obj &lt;&lt; B Splines Model Controls

**Description:** Opens the Model Controls panel prior to fitting a B-Spline model. You can specify the number of knots and the spline degree.

**JMP Version Added:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	B Splines Model Controls);

```

### BIC

**Syntax:** obj &lt;&lt; Model Name( BIC ); scrobj &lt;&lt; BIC

**Description:** Specifies the BIC as the model selection criterion for B-Spline, P-Spline, and Fourier Basis models.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	P Splines( BIC ));

```

### Baseline Correction

**Syntax:** obj &lt;&lt; Baseline Correction

**JMP Version Added:** 19

### Center

**Syntax:** obj &lt;&lt; Data Processing( Center )

**Description:** Centers the output.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	Data Processing( Center ));

```

### Custom Save Corrected

**Syntax:** obj &lt;&lt; Custom Save Corrected

**JMP Version Added:** 19

### Direct Functional PCA

**Syntax:** obj &lt;&lt; Direct Functional PCA

**Description:** Performs Functional PCA directly without fitting a basis function model. This option requires that the input data be on an evenly spaced grid.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Formulation for Homogeneity DOE.jmp" );obj = dt << Functional Data Explorer(	Y( :Homogeneity Grade ),	X( :T ),	ID( :Formulation ),	Z( :Solvent, :Active, :Water ),	Direct Functional PCA);

```

### Dynamic Time Warping

**Syntax:** obj &lt;&lt; Data Processing( Dynamic Time Warping( Reference( number ) ) )

**Description:** Aligns the output functions using dynamic time warping (DTW). DTW is a function alignment technique that finds an optimal warping to align two or more functions together.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );obj = dt << Functional Data Explorer(	Y( :Ethanol ),	X( :Time ),	ID( :BatchID ),	Data Processing( Dynamic Time Warping( Reference( 1 ) ) ));

```

### Exp

**Syntax:** obj &lt;&lt; Data Processing( Exp )

**Description:** Transforms the data by computing the exponential function of the output.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );obj = dt << Functional Data Explorer(	Y( :pH ),	X( :Time ),	ID( :BatchID ),	Data Processing( Exp ));

```

### Filter X

**Syntax:** obj &lt;&lt; Data Processing( Filter X( [lower, upper] ) )

**Description:** Removes input (X) values that are outside of the specified interval.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );obj << Data Processing( Filter X( [5, 50] ) );

```

### Filter Y

**Syntax:** obj &lt;&lt; Data Processing( Filter Y( [lower, upper] ) )

**Description:** Removes output (Y) values outside of the specified interval.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );obj << Data Processing( Filter Y( [., 100] ) );

```

### Fourier Basis

**Syntax:** obj &lt;&lt; Fourier Basis

**Description:** Fits a penalized B-spline model to the data.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	Fourier Basis);

```

### Fourier Basis Model Controls

**Syntax:** obj &lt;&lt; Fourier Basis Model Controls

**Description:** Opens the Model Controls panel prior to fitting a Fourier basis model. You can specify the number of Fourier pairs and the period.

**JMP Version Added:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	Fourier Basis Model Controls);

```

### GCV

**Syntax:** obj &lt;&lt; Model Name( GCV ); scrobj &lt;&lt; GCV

**Description:** Specifies the generalized cross validation (GCV) as the model selection criterion for B-Spline, P-Spline, and Fourier Basis models.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	Fourier Basis( GCV ));

```

### Load Targets

**Syntax:** obj &lt;&lt; Data Processing( Load Targets( "level" ) )

**Description:** Specifies a target function.

**JMP Version Added:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :ID ),	Data Processing( Load Targets( "Bristol, TN" ) ));

```

### Log

**Syntax:** obj &lt;&lt; Data Processing( Log )

**Description:** Transforms the data by computing the natural logarithm of the output.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );obj = dt << Functional Data Explorer(	Y( :Air ),	X( :Time ),	ID( :BatchID ),	Data Processing( Log ));

```

### Log X

**Syntax:** obj &lt;&lt; Data Processing( Log X )

**Description:** Transforms the data by computing the natural logarithm of the input.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );obj = dt << Functional Data Explorer(	Y( :Air ),	X( :Time ),	ID( :BatchID ),	Data Processing( Log X ));

```

### Logit

**Syntax:** obj &lt;&lt; Data Processing( Logit )

**Description:** Transforms the data by computing the logit function of the output. The output values must be between 0 and 1.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	Data Processing( Range 0 to 1 ),	Data Processing( Logit ));

```

### MSC

**Syntax:** obj &lt;&lt; Data Processing( MSC )

**Description:** Applies the Multiplicative Scatter Correction method to the data. This method fits a simple linear regression for each individual function (level of the ID variable) where the response is the output values for the function and the regressor is the output values for the mean function.

**JMP Version Added:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );obj = dt << Functional Data Explorer(	Data Format( Row ),	Y( Column Group( "NMR Spectra" ) ),	ID( :NMR ID ),	Data Processing( MSC ));

```

### Multivariate Curve Resolution

**Syntax:** obj &lt;&lt; Multivariate Curve Resolution

**Description:** Performs multivariate curve resolution (MCR). This option requires that the input data be on an evenly spaced grid.

**JMP Version Added:** 18

### Negation

**Syntax:** obj &lt;&lt; Data Processing( Negation )

**Description:** Transforms the data by negating the output.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	Data Processing( Negation ));

```

### Nonnegative SVD

**Syntax:** obj &lt;&lt; Nonnegative SVD

**Description:** Performs a nonnegative singular value decomposition (SVD) on the stacked matrix of functions. A nonnegative SVD constrains the matrix decomposition so that the scores and loadings are greater than or equal to zero.

**JMP Version Added:** 18

### P Splines

**Syntax:** obj &lt;&lt; P Splines

**Description:** Fits a penalized B-spline model to the data.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	P Splines);

```

### P Splines Model Controls

**Syntax:** obj &lt;&lt; P Splines Model Controls

**Description:** Opens the Model Controls panel prior to fitting a P-Spline model. You can specify the number of knots and the spline degree.

**JMP Version Added:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	P Splines Model Controls);

```

### Parametric Save Baselines

**Syntax:** obj &lt;&lt; Parametric Save Baselines

**JMP Version Added:** 19

### Parametric Save Corrected

**Syntax:** obj &lt;&lt; Parametric Save Corrected

**JMP Version Added:** 19

### Peak Finding

**Syntax:** obj &lt;&lt; Peak Finding

**Description:** Finds and summarizes peaks either directly or with a specified parametric model.

**JMP Version Added:** 17

### Penalized Nonnegative SVD

**Syntax:** obj &lt;&lt; Penalized Nonnegative SVD

**Description:** Performs penalized nonnegative SVD to construct functional PCA. This option requires that the input data be on an evenly spaced grid.

**JMP Version Added:** 18

### Penalized SVD

**Syntax:** obj &lt;&lt; Penalized SVD

**Description:** Performs Penalized SVD to construct functional PCA. This option requires that the input data be on an evenly spaced grid.

**JMP Version Added:** 18

### Plot Mean Function

**Syntax:** obj &lt;&lt; Plot Mean Function( state=0|1 )

**Description:** Shows or hides the Mean Function plot in the Summaries report. On by default.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Raleigh Temps.jmp" );obj = dt << Functional Data Explorer( Y( :Temperature ), X( :Month ), ID( :Year ) );Wait( 1 );obj << Plot Mean Function( 0 );

```

### Plot Median Function

**Syntax:** obj &lt;&lt; Plot Median Function( state=0|1 )

**Description:** Shows or hides the Median Function plot in the Summaries report.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Raleigh Temps.jmp" );obj = dt << Functional Data Explorer(	Y( :Temperature ),	X( :Month ),	ID( :Year ),	Plot Median Function( 1 ));

```

### Plot Standard Deviation Function

**Syntax:** obj &lt;&lt; Plot Standard Deviation Function( state=0|1 )

**Description:** Shows or hides the Standard Deviation Function plot in the Summaries report. On by default.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Raleigh Temps.jmp" );obj = dt << Functional Data Explorer( Y( :Temperature ), X( :Month ), ID( :Year ) );Wait( 1 );obj << Plot Standard Deviation Function( 0 );

```

### Range 0 to 1

**Syntax:** obj &lt;&lt; Data Processing( Range 0 to 1 )

**Description:** Scales the output to lie within the range 0 to 1.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	Data Processing( Range 0 to 1 ));

```

### Reduce

**Syntax:** obj &lt;&lt; Data Processing( Reduce( Grid( number ) ) ); obj &lt;&lt; Data Processing( Reduce( Bin( number ) ) ); obj &lt;&lt; Data Processing( Reduce( Thin( number ) ) )

**Description:** Reduces the data over the input (X) with one of a variety of techniques.

**JMP Version Added:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );obj << Data Processing( Reduce( Thin( 2 ) ) );

```

### Remove Last Step

**Syntax:** obj &lt;&lt; Remove Last Step

**JMP Version Added:** 14

### Remove Selected

**Syntax:** obj &lt;&lt; Data Processing( Remove Selected )

**Description:** Removes the selected values.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );dt << Select Where( :STATION == "USW00024024" );Wait( 1 );obj << Data Processing( Remove Selected );

```

### Remove Unselected

**Syntax:** obj &lt;&lt; Data Processing( Remove Unselected )

**Description:** Removes the unselected values.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );dt << Select Where( :STATION != "USW00024024" );Wait( 1 );obj << Data Processing( Remove Unselected );

```

### Remove Value

**Syntax:** obj &lt;&lt; Data Processing( Remove Value( number ) )

**Description:** Removes observations that have the specified response value.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );Wait( 1 );obj << Data Processing( Remove Value( 30 ) );

```

### Remove Zeros

**Syntax:** obj &lt;&lt; Data Processing( Remove Zeros )

**Description:** Removes observations that have a response value of zero.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );obj = dt << Functional Data Explorer(	Y( :Ethanol ),	X( :Time ),	ID( :BatchID ),	Data Processing( Remove Zeros ));

```

### Row Alignment

**Syntax:** obj &lt;&lt; Data Processing( Row Alignment )

**Description:** Replaces the input values with the row number.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	Data Processing( Row Alignment ));

```

### SNIP Save Baselines

**Syntax:** obj &lt;&lt; SNIP Save Baselines

**JMP Version Added:** 19

### SNIP Save Corrected

**Syntax:** obj &lt;&lt; SNIP Save Corrected

**JMP Version Added:** 19

### SNV

**Syntax:** obj &lt;&lt; Data Processing( SNV )

**Description:** Applies the Standard Normal Variate method to the data. This method standardizes the output by centering and scaling each individual function (level of the ID variable) to have a mean of 0 and a standard deviation of 1.

**JMP Version Added:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );obj = dt << Functional Data Explorer(	Data Format( Row ),	Y( Column Group( "NMR Spectra" ) ),	ID( :NMR ID ),	Data Processing( SNV ));

```

### Save Data

**Syntax:** obj &lt;&lt; Save Data

**Description:** Saves the processed data to a separate data table, in the Stacked format.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );obj = dt << Functional Data Explorer(	Y( :Ethanol, :Temp, :Molasses Feed ),	X( :Time ),	ID( :BatchID ),	B Splines);obj << Save Data;

```

### Save Summaries

**Syntax:** obj &lt;&lt; Save Summaries

**Description:** Saves the model summary statistics of each function (ID) for each output (Y).

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );obj = dt << Functional Data Explorer(	Y( :Ethanol, :Temp, :Molasses Feed ),	X( :Time ),	ID( :BatchID ),	B Splines);obj << Save Summaries;

```

### Savitzky-Golay Filter

**Syntax:** obj &lt;&lt; Data Processing( "Savitzky-Golay Filter"n )

**Description:** Applies the Savitzky-Golay filter to each function. This option requires that the input data be on an evenly spaced grid.

**JMP Version Added:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );obj = dt << Functional Data Explorer(	Data Format( Row ),	Y( Column Group( "NMR Spectra" ) ),	ID( :NMR ID ),	Data Processing( "Savitzky-Golay Filter"n ));

```

### Savitzky-Golay First Derivative

**Syntax:** obj &lt;&lt; Data Processing( "Savitzky-Golay First Derivative"n )

**Description:** Returns the first derivative from the Savitzky-Golay filter. This option requires that the input data be on an evenly spaced grid.

**JMP Version Added:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );obj = dt << Functional Data Explorer(	Data Format( Row ),	Y( Column Group( "NMR Spectra" ) ),	ID( :NMR ID ),	Data Processing( "Savitzky-Golay First Derivative"n ));

```

### Savitzky-Golay Second Derivative

**Syntax:** obj &lt;&lt; Data Processing( "Savitzky-Golay Second Derivative"n )

**Description:** Returns the second derivative from the Savitzky-Golay filter. This option requires that the input data be on an evenly spaced grid.

**JMP Version Added:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );obj = dt << Functional Data Explorer(	Data Format( Row ),	Y( Column Group( "NMR Spectra" ) ),	ID( :NMR ID ),	Data Processing( "Savitzky-Golay Second Derivative"n ));

```

### Square

**Syntax:** obj &lt;&lt; Data Processing( Square )

**Description:** Transforms the data by computing the square of the output.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );obj = dt << Functional Data Explorer(	Y( :pH ),	X( :Time ),	ID( :BatchID ),	Data Processing( Square ));

```

### Square Root

**Syntax:** obj &lt;&lt; Data Processing( Square Root )

**Description:** Transforms the data by computing the square root of the output. The output values must be nonnegative.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );obj = dt << Functional Data Explorer(	Y( :pH ),	X( :Time ),	ID( :BatchID ),	Data Processing( Square Root ));

```

### Standardize

**Syntax:** obj &lt;&lt; Data Processing( Standardize )

**Description:** Standardizes the output by centering and scaling.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	Data Processing( Standardize ));

```

### Unconstrained MCR

**Syntax:** obj &lt;&lt; Unconstrained MCR

**Description:** Performs unconstrained multivariate curve resolution (MCR). This option requires that the input data be on an evenly spaced grid.

**JMP Version Added:** 18

### Wavelets

**Syntax:** obj &lt;&lt; Wavelets

**Description:** Fits several wavelets models to the data. This option requires that the input data be on an evenly spaced grid. If data are not evenly spaced, a grid is automatically created before the wavelet routine begins.

**JMP Version Added:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ), Wavelets );

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

obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

### Column Switcher

**Syntax:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Description:** Adds a control panel for changing the platform&apos;s variables

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

obj << Copy Script;

```

### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Description:** Move the data table window for this analysis to the front.

```jsl

obj << Data Table Window;

```

### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Description:** Returns an associative array mapping the by group columns to their values.

**JMP Version Added:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

#### General

```jsl

t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Platform with Filter

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Description:** Returns a reference to the data table.

```jsl

t = obj << Get Datatable;Show( N Rows( t ) );

```

### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```jsl

t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Description:** Times the platform launch.

```jsl

t = obj << Get Timing;Show( t );

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

obj << Redo Analysis;

```

### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

obj << Relaunch Analysis;

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

r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**Syntax:** obj &lt;&lt; Report View( "Full"|"Summary" )

**Description:** The report view determines the level of detail visible in a platform report. Full shows all of the detail, while Summary shows only select content, dependent on the platform. For customized behavior, display boxes support a <<Set Summary Behavior message.

```jsl

obj << Report View( "Summary" );

```

### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```jsl

obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```jsl

obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```jsl

obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```jsl

obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

obj << Save Script to Script Window;

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

obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Description:** Returns a reference to the root node in the report.

```jsl

r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Description:** Returns the XML code that is used to create the interactive HTML report.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```


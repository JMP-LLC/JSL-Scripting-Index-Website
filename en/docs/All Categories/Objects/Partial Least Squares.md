# Partial Least Squares



## Associated Constructors

### Partial Least Squares

**Syntax:** Partial Least Squares( Y( columns ), X( columns ) )

**Description:** Fits a model to one or more response variables using latent factors. This permits models to be fit when explanatory variables are highly correlated, or when there are more explanatory variables than there are observations.

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);

```

**Example 2**

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Go);

```

## Columns

### By

**Syntax:** obj &lt;&lt; By( column(s) )

**Description:** Performs a separate analysis for each level of the specified column.

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);

```

### Factor

**Syntax:** obj &lt;&lt; Factor( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);

```

### Freq

**Syntax:** obj &lt;&lt; Freq( column )

**Description:** Specifies a column whose values assign a frequency to each row for the analysis.

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );dt << New Column( "_freqcol", Numeric, Continuous, Set Each Value( Random Integer( 1, 5 ) ) );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Freq( :_freqcol ),	Go);

```

### Response

**Syntax:** obj &lt;&lt; Response( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);

```

### Validation

**Syntax:** obj &lt;&lt; Validation( column )

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);

```

### X

**Syntax:** obj &lt;&lt; X( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);

```

### Y

**Syntax:** obj &lt;&lt; Y( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);

```

## Item Messages

### Centering

**Syntax:** obj = Partial Least Squares(...Centering( state=0|1)...)

**Description:** Centers all Y variables and model effects by subtracting the mean from each column. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Centering( 0 ),	Validation Method( KFold( 7 ) ),	Go);

```

### Fit

**Syntax:** obj &lt;&lt; Fit( SVD( Fast|Classical ), Method( NIPALS|SIMPLS ), Number of Factors( number ) )

**Description:** Fits a partial least squares model with a specified method and number of factors.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Method( NIPALS ), Number of Factors( 7 ) ),	Go);

```

### Go

**Syntax:** obj &lt;&lt; Go

**Description:** Launches the partial least squares model fit.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	));obj << Go;

```

### Imputation Method

**Syntax:** obj = Partial Least Squares(...Imputation Method( "Mean"|"EM" )...)

**Description:** Specifies the imputation method. The Mean method replaces missing values with the mean of the nonmissing values in the same column. The EM method uses an iterative Expectation-Maximization (EM) approach to impute missing values.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Partial Least Squares(	Y( :Y ),	X( :OZONE, :CO, :SO2, :NO, :PM10, :Lead ),	Impute Missing Data( 1 ),	Imputation Method( "EM" ),	Max Iterations( 2 ),	Validation Method( None, Initial Number of Factors( 6 ) ),	Fit( Method( NIPALS ), Number of Factors( 6 ) ));

```

### Impute Missing Data

**Syntax:** obj = Partial Least Squares(...Impute Missing Data( state=0|1 )...)

**Description:** Replaces missing data values in the responses and regressors with nonmissing values. Otherwise, rows with missing values are excluded from the analysis.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Partial Least Squares(	Y( :Y ),	X( :OZONE, :CO, :SO2, :NO, :PM10, :Lead ),	Impute Missing Data( 1 ),	Validation Method( None, Initial Number of Factors( 6 ) ),	Go);

```

### Initial Number of Factors

**Syntax:** obj &lt;&lt; Partial Least Squares( Validation Method(...Initial Number of Factors( number )...) )

**Description:** Specifies the initial number of factors for cross validation.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Validation Method( KFold( 7 ), Initial Number of Factors( 10 ) ), );obj << Go;

```

### Max Iterations

**Syntax:** obj = Partial Least Squares(...Max Iterations( number=1 )...)

**Description:** Specifies the maximum number of iterations to perform in the EM imputation loop. "1" by default.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Partial Least Squares(	Y( :Y ),	X( :OZONE, :CO, :SO2, :NO, :PM10, :Lead ),	Impute Missing Data( 1 ),	Imputation Method( "EM" ),	Max Iterations( 2 ),	Validation Method( None, Initial Number of Factors( 6 ) ),	Fit( Method( NIPALS ), Number of Factors( 6 ) ));

```

### Method

**Syntax:** obj = Partial Least Squares(...Fit( Method( NIPALS|SIMPLS)... )

**Description:** Specifies the method used to fit the partial least squares model.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Method( NIPALS ), Number of Factors( 11 ) ),	Go);

```

### Model Dialog

**Syntax:** obj &lt;&lt; Model Dialog

**Description:** Opens the Fit Model launch window. You can fit a Partial Least Squares model from this launch window by selecting the Partial Least Squares personality.

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);obj << Model Dialog;

```

### SVD

**Syntax:** obj &lt;&lt; SVD( Fast|Classical )

**Description:** Sets the implementation of the SVD algorithm for computing the partial least squares model to Fast or Classical. The Fast option implements the Lanczos SVD routine and the Classical option implements the Golub-Kahan routine.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Validation Method( KFold( 7 ) ),	Go);obj << Fit( SVD( Classical ), Method( SIMPLS ) );

```

### Scaling

**Syntax:** obj = Partial Least Squares(...Scaling( state=0|1)...)

**Description:** Scales all Y variables and model effects by dividing each column by its standard deviation. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Scaling( 0 ),	Validation Method( KFold( 7 ) ),	Go);

```

### Set Random Seed

**Syntax:** obj &lt;&lt; Set Random Seed( number )

**Description:** Specifies the random seed for running a partial least squares model with cross validation.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Set Random Seed( 12345 ),	Validation Method( KFold( 7 ) ),	Go);

```

### Validation Method

**Syntax:** obj &lt;&lt; Validation Method( KFold( number )|Holdback( fraction )|"Leave-One-Out"|None, Initial Number of Factors( number ) )

**Description:** Sets the method used for model validation.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Validation Method( KFold( 7 ), Initial Number of Factors( 15 ) ),	Go);

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

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);obj << Copy Script;

```

### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Description:** Move the data table window for this analysis to the front.

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);obj << Data Table Window;

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

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);t = obj[1] << Get ByGroup Script;Show( t );

```

### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

#### General

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Platform with Filter

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Description:** Returns a reference to the data table.

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);t = obj << Get Datatable;Show( N Rows( t ) );

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

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Description:** Times the platform launch.

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);t = obj << Get Timing;Show( t );

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

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);obj << Redo Analysis;

```

### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);obj << Relaunch Analysis;

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

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**Syntax:** obj &lt;&lt; Report View( "Full"|"Summary" )

**Description:** The report view determines the level of detail visible in a platform report. Full shows all of the detail, while Summary shows only select content, dependent on the platform. For customized behavior, display boxes support a <<Set Summary Behavior message.

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Creates a JSL script to produce this analysis, and save it as a table property in the data table. You can specify a name for the script. The Append Suffix option appends a numeric suffix to the script name, which differentiates the script from an existing script with the same name. The Prompt option prompts the user to specify a script name. The Replace option replaces an existing script with the same name.

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);obj << Save Script to Script Window;

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

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Description:** Returns a reference to the root node in the report.

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

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

**Syntax:** obj = Partial Least Squares(...Window View( "Visible"|"Invisible"|"Private" )...)

**Description:** Set the type of the window to be created for the report. By default a Visible report window will be created. An Invisible window will not appear on screen, but is discoverable by functions such as Window(). A Private window responds to most window messages but is not discoverable and must be addressed through the report object

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## Partial Least Squares Fit

### Item Messages

#### Coefficient Plots

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Coefficient Plots( state=0|1 ))

**Description:** Shows or hides plots of the model coefficients for each response across the X variables. There is a plot for the centered and scaled data and a plot for the original data.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Coefficient Plots( 1 ));

```

#### Correlation Loading Plot

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Correlation Loading Plot( state=0|1 ))

**Description:** Shows or hides either a single scatterplot or a scatterplot matrix of the X and Y loadings overlaid on the same plot. The scatterplot matrix is shown if the specified number of factors is greater than 2.

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Correlation Loading Plot( 2 ));

```

**Example 2**

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Correlation Loading Plot( 4 ));

```

#### Diagnostics Plots

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Diagnostics Plots( state=0|1 ))

**Description:** Shows or hides diagnostic plots.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Diagnostics Plots( 1 ));

```

#### Distance Plots

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Distance Plots( state=0|1 ))

**Description:** Shows or hides the distance plots. There is a plot of the distance from each observation to the X model, a plot of the distance from each observation to the Y model, and a scatterplot of distances to both the X and Y models.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Distance Plots( 1 ));

```

#### Fit Line

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Fit Line( state=0|1 ))

**Description:** Shows or hides a fitted line through the points on the X-Y Scores Plots. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));Wait( 2 );obj << (Fit[1] << Fit Line( 0 ));

```

#### Get Measures

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Get Measures)

**Description:** Returns summary measures of fit from the model.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Get Measures);

```

#### Loading Plots

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Loading Plots( state=0|1 ))

**Description:** Shows or hides plots of the X and Y loadings for each extracted factor. There are separate plots for the X and Y variables.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Loading Plots( 1 ));

```

#### Loading Scatterplot Matrices

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Loading Scatterplot Matrices( state=0|1 ))

**Description:** Shows or hides scatterplot matrices of the X and Y loadings. There are separate scatterplot matrices for the X and Y variables.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Loading Scatterplot Matrices( 1 ));

```

#### Make Model Using VIP

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Make Model Using VIP)

**Description:** Opens and populates a launch window with the appropriate responses entered as Ys and the variables whose VIPs exceed the specified threshold entered as Xs.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Make Model Using VIP);

```

#### Model Driven Multivariate Control Chart for Saved X Scores

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Model Driven Multivariate Control Chart for Saved X Scores)

**Description:** Saves the formulas for each X Score and launches the Model Driven Multivariate Control Chart (MDMCC) launch window.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Model Driven Multivariate Control Chart for Saved X Scores);

```

#### Percent Variation Plots

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Percent Variation Plots( state=0|1 ))

**Description:** Shows or hides plots of the percent of variation explained for X Effects and for Y Responses.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Percent variation plots( 1 ));

```

#### Profiler

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Profiler( state=0|1 ))

**Description:** Shows or hides a profiler for each response.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Profiler( 1 ));

```

#### Profiler for Predicteds

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Model Driven Multivariate Control Chart for Saved X Scores)

**Description:** Saves the formulas for each Y as a function of the X Score and launches the Profiler launch window.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Profiler for Predicteds);

```

#### Publish Prediction Formula

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Publish Prediction Formula)

**Description:** Creates a prediction formula and publishes it as a formula column script in the Formula Depot platform.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Publish Prediction Formula);

```

#### Publish Score Formula

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Publish Score Formula)

**Description:** Creates X and Y score formulas and saves them as formula column scripts in the Formula Depot platform.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Publish Score Formula);

```

#### Remove Fit

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Remove Fit)

**Description:** Removes the model report from the main platform report.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));Wait( 3 );obj << (Fit[1] << Remove Fit);

```

#### Save Distance

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Save Distance)

**Description:** Saves new columns to the original data table. The new columns contain the Distance to X Model (DModX) and Distance to Y Model (DModY) values.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save Distance);

```

#### Save Distance as X Score Formula

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Save Distance as X Score Formula)

**Description:** Saves new formula columns to the original data table. The new columns contain the Distance to X Model (DModX) and Distance to Y Model (DModY) formulas that are functions of the X Score formulas.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save Distance as X Score Formula);

```

#### Save Imputation

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Save Imputation)

**Description:** Saves columns to a new data table. For each X and Y variable, there is a column that contains the original data column with missing values replaced by their imputed values.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Partial Least Squares(	Y( :Y ),	X( :OZONE, :CO, :SO2, :NO, :PM10, :Lead ),	Impute Missing Data( 1 ),	Imputation Method( "EM" ),	Max Iterations( 2 ),	Validation Method( None, Initial Number of Factors( 6 ) ),	Fit( Method( NIPALS ), Number of Factors( 6 ) ));obj << (Fit[1] << Save Imputation);

```

#### Save Indiv Confidence Limit Formula

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Save Indiv Confidence Limit Formula)

**Description:** Saves new formula columns to the original data table. For each Y variable, there are columns for the lower and upper confidence limits for an individual prediction that are functions of the X Score formulas. The default level for alpha is 0.05, which creates 95% confidence limits.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save Indiv Confidence Limit Formula);

```

#### Save Loadings

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Save Loadings)

**Description:** Saves columns to two new data tables. There is a data table that contains the loadings for the X variables and a data table that contains the loadings for the Y variables.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save Loadings);

```

#### Save Mean Confidence Limit Formula

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Save Mean Confidence Limit Formula( &lt;alpha=0.05&gt; ))

**Description:** Saves new formula columns to the original data table. For each Y variable, there are columns for the lower and upper confidence limits for the mean response that are functions of the X Score formulas. The default level for alpha is 0.05, which creates 95% confidence limits.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save Mean Confidence Limit Formula);

```

#### Save Percent Variation Explained For X Effects

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Save Percent Variation Explained For X Effects)

**Description:** Saves columns to a new data table. For each X variable, there is a column that contains the percent of variation explained across all extracted factors.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save Percent Variation Explained For X Effects);

```

#### Save Percent Variation Explained For Y Responses

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Save Percent Variation Explained For Y Responses)

**Description:** Saves columns to a new data table. For each Y variable, there is a column that contains the percent of variation explained across all extracted factors.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save Percent Variation Explained For Y Responses);

```

#### Save Prediction As X Score Formula

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Save Prediction as X Score Formula)

**Description:** Saves new formula columns to the original data table. For each Y variable, there is a column that contains a prediction formula that is a function of the X Score formulas.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save Prediction as X Score Formula);

```

#### Save Prediction Formula

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Save Prediction Formula)

**Description:** Saves new formula columns to the original data table. For each Y variable, there is a column that contains a prediction formula that is a function of the X variables.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save Prediction Formula);

```

#### Save Score Formula

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Save Score Formula)

**Description:** Saves new formula columns to the original data table. For each extracted factor, there is a column that contains an X Score formula and a column that contains a Y Score formula. The X Score formulas are functions of the X variables and the Y Score formulas are functions of the X Score formulas.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save Score Formula);

```

#### Save Scores

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Save Scores)

**Description:** Saves new columns to the original data table. For each extracted factor, there is a column that contains the X scores and a column that contains the Y scores.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save Scores);

```

#### Save Standard Errors of Prediction Formula

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Save Standard Errors of Prediction Formula)

**Description:** Saves new formula columns to the original data table. For each Y variable, there is a column that contains the formula for the standard error of the predicted mean that is a function of the X variables.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save Standard Errors of Prediction Formula);

```

#### Save Standardized Loadings

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Save Standardized Loadings)

**Description:** Saves columns to two new data tables. There is a data table that contains the standardized loadings for the X variables and a data table that contains the standardized loadings for the Y variables.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save Standardized Loadings);

```

#### Save Standardized Scores

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Save Standardized Scores)

**Description:** Saves new columns to the original data table. The new columns contain the X and Y standardized scores for each extracted factor.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save Standardized Scores);

```

#### Save T Square

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Save T Square)

**Description:** Saves a new formula column to the original data table. The new column contains the T squared formula as a function of the X variables.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save T Square);

```

#### Save T Square as X Score Formula

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Save T Square as X Score Formula)

**Description:** Saves a new formula column to the original data table. The new column contains the T squared formula as a function of the X Score formulas.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save T Square as X Score Formula);

```

#### Save Validation

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Save Validation)

**Description:** Saves a new column to the original data table. The new column contains numbers that indicate how each observation was used in validation.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save Validation);

```

#### Save X Predicted Values

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Save X Predicted Values)

**Description:** Saves new columns to the original data table. For each X variable, there is a column that contains the predicted X values.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save X Predicted Values);

```

#### Save X Prediction as X Score Formula

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Save X Prediction as X Score Formula)

**Description:** Saves new formula columns to the original data table. For each X variable, there is a column that contains a prediction formula that is a function of the X Score formulas.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save X Prediction as X Score Formula);

```

#### Save X Residuals

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Save X Residuals)

**Description:** Saves new columns to the original data table. For each X variable, there is a column that contains the X residual values.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save X Residuals);

```

#### Save X Score Formula

**Syntax:** obj &lt;&lt; Save X Score Formula

#### Save X Weights

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Save X Weights)

**Description:** Saves columns to a new data table. For each extracted factor, there is a column that contains the weights for the X variables.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save X Weights);

```

#### Save Y Predicted Values

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Save Y Predicted Values)

**Description:** Saves new columns to the original data table. For each Y variable, there is a column that contains the predicted Y values.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save Y Predicted Values);

```

#### Save Y Residuals

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Save Y Residuals)

**Description:** Saves new columns to the original data table. For each Y variable, there is a column that contains the Y residual values.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save Y Residuals);

```

#### Score Scatterplot Matrices

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Score Scatterplot Matrices( state=0|1 ))

**Description:** Shows or hides a scatterplot matrix of the X scores and a scatterplot matrix of the Y scores.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Score Scatterplot Matrices( 1 ));

```

#### Set VIP Threshold

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Set VIP Threshold( number=0.8 ))

**Description:** Sets the threshold level for the Variable Importance Plot, Variance Importance Table, and the VIP vs Coefficients Plots. "0.8" by default.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Variable Importance Plot( 1 ));Wait( 3 );obj << (Fit[1] << Set VIP Threshold( 0.5 ));

```

#### Show Confidence Band

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Show Confidence Band( state=0|1 ))

**Description:** Shows or hides 95% confidence bands for the fitted lines on the X-Y Scores Plots.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Show Confidence Band( 1 ));

```

#### Spectral Profiler

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Spectral Profiler( state=0|1 ))

**Description:** Shows or hides a single profiler where all of the response variables appear in the first cell of the plot.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Spectral Profiler( 1 ));

```

#### T Square Plot

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; T Square Plot( state=0|1 ))

**Description:** Shows or hides a plot of T square statistics for each observation, along with a control limit.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << T Square Plot( 1 ));

```

#### VIP vs Coefficients Plots

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; VIP vs Coefficients Plots( state=0|1 ))

**Description:** Shows or hides a plot of the VIP statistics against the model coefficients.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << VIP vs Coefficients Plots( 1 ));

```

#### Variable Importance Plot

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Variable Importance Plot( state=0|1 ))

**Description:** Shows or hides a plot that summarizes the contribution each variable makes to the model.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Variable Importance Plot( 1 ));

```


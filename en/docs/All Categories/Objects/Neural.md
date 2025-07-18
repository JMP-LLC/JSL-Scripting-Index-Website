# Neural



## Associated Constructors

### Neural

**Syntax:** Neural( Y( column ), X( columns ), &lt;Validation( column )&gt; )

**Description:** Predicts one or more response variables using a flexible function of the input variables. The flexible framework incorporates layering and s-shaped functions.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);

```

## Columns

### By

**Syntax:** obj = Neural(...&lt;By( column(s) )&gt;...)

**Description:** Performs a separate analysis for each level of the specified column.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol ),
	Go
);

```

### Factor

**Syntax:** obj = Neural(...Factor( column(s) )...)

**Description:** Specifies the predictor variables.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);

```

### Freq

**Syntax:** obj = Neural(...&lt;Freq( column )&gt;...)

**Description:** Specifies a column whose values assign a frequency to each row for the analysis.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Freq( _freqcol ),
	Go
);

```

### Response

**Syntax:** obj = Neural(...Response( column(s) )...)

**Description:** Specifies the response variable or variables that you want to analyze.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);

```

### Validation

**Syntax:** obj = Neural(...&lt;Validation( column )&gt;...)

**Description:** Specifies a numeric column that defines the validation sets. This column should contain at most three distinct values.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation )
);
obj << Go;

```

### X

**Syntax:** obj = Neural(...X( column(s) )...)

**Description:** Specifies the predictor variables.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);

```

### Y

**Syntax:** obj = Neural(...Y( column(s) )...)

**Description:** Specifies the response variable or variables that you want to analyze.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);

```

## Item Messages

### Fit

**Syntax:** obj &lt;&lt; Fit( NTanH|NLinear|NTanH2|NLinear2|NGaussian|NGaussian2( number ) )

**Description:** Specifies and fits the hidden layer structure of the neural network to the data. Multiple layers and non-TanH activation functions are only available in JMP Pro. To specify multiple layers and activation functions, separate the arguments with commas.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
obj << Fit( NTanH( 4 ) );

```

### Go

**Syntax:** obj &lt;&lt; Go

**Description:** Starts solving the neural net model.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
Wait( 1 );
obj << Go;

```

### Informative Missing

**Syntax:** obj = Neural(...Informative Missing( state=0|1 )...)

**Description:** Enables missing value imputation and coding. When this option is not selected, rows with missing values are ignored.



For continuous variables, missing values are replaced by the mean of the variable. Also, a missingness indicator variable is created and included in the model.



For categorical variables, the missing values are not imputed, but are treated as another level of the variable in the model. This option is available only in JMP Pro.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:age[3] = .;
obj = dt << Neural( Y( :weight ), X( :height, :age ), Informative Missing( 1 ), Go );

```

### Learning Rate

**Syntax:** obj &lt;&lt; Learning Rate( fraction )

**Description:** Specifies the scaling factor for boosting. A learning rate close to 1 results in faster convergence on a final model, but also has a higher tendency to overfit data. This option is available only in JMP Pro.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	N Boost( 2 )
);
obj << Learning Rate( 0.2 );
obj << Go;
obj << SendToReport( Dispatch( {}, "Model Launch", OutlineBox, {Close( 0 )} ) );

```

### Multithreading

**Syntax:** obj = Neural(...Multithreading( state=0|1 )...)

**Description:** Divides up the calculations among the available threads on the machine. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Multithreading( 0 )
);
obj << Go;

```

### N Boost

**Syntax:** obj &lt;&lt; N Boost( number )

**Description:** Specifies the maximum number of models that are used for boosting. This option is available only in JMP Pro.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
obj << N Boost( 2 );
obj << Go;
obj << SendToReport( Dispatch( {}, "Model Launch", OutlineBox, {Close( 0 )} ) );

```

### Penalty Method

**Syntax:** obj &lt;&lt; Penalty Method( "Squared"|"Absolute"|"Weight Decay"|"NoPenalty" )

**Description:** Specifies a penalty method to impose a penalty on the likelihood during the fitting process. A penalty parameter mitigates the tendency in neural networks to overfit the data. The Squared option works well if you think most of your X variables are contributing to the predictive ability of the model. The Absolute option and the Weight Decay option work well if you have a large number of X variables and you think that a few contribute more than others.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
obj << Penalty Method( "Absolute" );
obj << Go;
obj << SendToReport( Dispatch( {}, "Model Launch", OutlineBox, {Close( 0 )} ) );

```

### Robust Fit

**Syntax:** obj &lt;&lt; Robust Fit( state=0|1 )

**Description:** Trains the model using least absolute deviations instead of least squares. This option is useful if you want to minimize the impact of response outliers. This option is available only for continuous responses in JMP Pro.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
obj << Robust Fit( 1 );
obj << Go;
obj << SendToReport( Dispatch( {}, "Model Launch", OutlineBox, {Close( 0 )} ) );

```

### Set Random Seed

**Syntax:** obj = Neural(...Set Random Seed( number )...)

**Description:** Specifies a random seed that is used to reproduce starting values and validation assignment.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Set Random Seed( 1234 )
);
Wait( 1 );
obj << Go;

```

### Transform Covariates

**Syntax:** obj &lt;&lt; Transform Covariates( state=0|1 )

**Description:** Transforms all continuous variables to near normality using either the Johnson Su or Johnson Sb distribution. Transforming the continuous variables helps to mitigate the negative effects of outliers or heavily skewed distributions. This option is available only in JMP Pro.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
obj << Transform Covariates( 1 );
obj << Go;
obj << SendToReport( Dispatch( {}, "Model Launch", OutlineBox, {Close( 0 )} ) );

```

### Validation Method

**Syntax:** obj = Neural(...Validation Method( "Excluded Rows Holdback"|"Holdback", &lt;fraction = 0.3333&gt;|"KFold", &lt;number = 5&gt; )...);

**Description:** Specifies the method used for model validation.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Method( "Holdback", 0.4 ),
	Go
);

```

## Shared Item Messages

### Action

**Syntax:** obj &lt;&lt; Action

**Description:** All-purpose trapdoor within a platform to insert expressions to evaluate. Temporarily sets the DisplayBox and DataTable contexts to the Platform.

```jsl

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

**JMP Version Added:** 18

#### Anonymous preset

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

#### Search by name

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Search within folder(s)

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

### Broadcast

**Syntax:** obj &lt;&lt; Broadcast(message)

**Description:** Broadcasts a message to a platform. If return results from individual objects are tables, they are concatenated if possible, and the final format is identical to either the result from the Save Combined Table option in a Table Box or the result from the Concatenate option using a Source column. Other than those, results are stored in a list and returned.

**JMP Version Added:** 18

```jsl

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

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol ),
	Go
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
obj << Copy Script;

```

### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Description:** Move the data table window for this analysis to the front.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
obj << Data Table Window;

```

### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Description:** Returns an associative array mapping the by group columns to their values.

**JMP Version Added:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**Syntax:** obj &lt;&lt; Get ByGroup Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol ),
	Go
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

#### General

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Platform with Filter

```jsl

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

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**Syntax:** obj &lt;&lt; Get Group Platform

**Description:** Return the Group Platform object if this platform is part of a Group. Otherwise, returns Empty().

```jsl

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

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Description:** Times the platform launch.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**Syntax:** obj &lt;&lt; Get Web Support

**Description:** Return a number indicating the level of Interactive HTML support for the display object. 1 means some or all elements are supported. 0 means no support.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Where Expr

**Syntax:** obj &lt;&lt; Get Where Expr

**Description:** Returns the Where expression for the data subset, if the platform was launched with By() or Where(). Otherwise, returns Empty()

**JMP Version Added:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Description:** Ignores the current settings of the platform&apos;s preferences. The message is ignored when sent to the platform after creation.

```jsl

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

```jsl

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

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Paste Local Data Filter

**Syntax:** obj &lt;&lt; Paste Local Data Filter

**Description:** Apply the local data filter from the clipboard to the current report.

```jsl

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

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntax:** obj &lt;&lt; Redo ByGroup Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol ),
	Go
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntax:** obj &lt;&lt; Relaunch ByGroup

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol ),
	Go
);
obj[1] << Relaunch ByGroup;

```

### Remove Column Switcher

**Syntax:** obj &lt;&lt; Remove Column Switcher

**Description:** Removes the most recent Column Switcher that has been added to the platform.

```jsl

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

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**Syntax:** obj &lt;&lt; Report;Report( obj )

**Description:** Returns a reference to the report object.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntax:** obj &lt;&lt; Report View( "Full"|"Summary" )

**Description:** The report view determines the level of detail visible in a platform report. Full shows all of the detail, while Summary shows only select content, dependent on the platform. For customized behavior, display boxes support a <<Set Summary Behavior message.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Creates a JSL script to produce this analysis, and save it as a table property in the data table. You can specify a name for the script. The Append Suffix option appends a numeric suffix to the script name, which differentiates the script from an existing script with the same name. The Prompt option prompts the user to specify a script name. The Replace option replaces an existing script with the same name.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol ),
	Go
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol ),
	Go
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol ),
	Go
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol ),
	Go
);
obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol ),
	Go
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
obj << Save Script to Script Window;

```

### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Description:** Sends platform commands or display customization commands to each level of a by-group.

```jsl

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

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Description:** Returns a reference to the root node in the report.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transform Column

**Syntax:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description:** Create a transform column in the local context of an object, usually a platform. The transform column is active only for the lifetime of the platform.

**JMP Version Added:** 16

```jsl

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Window View

**Syntax:** obj = Neural(...Window View( "Visible"|"Invisible"|"Private" )...)

**Description:** Set the type of the window to be created for the report. By default a Visible report window will be created. An Invisible window will not appear on screen, but is discoverable by functions such as Window(). A Private window responds to most window messages but is not discoverable and must be addressed through the report object

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

## Neural Fit

### Item Messages

#### Categorical Profiler

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Categorical Profiler( state=0|1 ))

**Description:** Shows or hides a prediction profiler with all categorical responses combined into a single profiler row.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Categorical Profiler( 1 ));

```

#### Contour Profiler

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Contour Profiler( state=0|1 ))

**Description:** Shows or hides the contour profiler, which shows the contours of the response graphically for two factors at a time. Available only when the model contains more than one continuous factor.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Contour Profiler( 1 ));

```

#### Decision Threshold

**Syntax:** obj &lt;&lt; fit([number] &lt;&lt; Decision Threshold( state = 0|1, Set Probability Threshold( number ) ))

**Description:** Shows or hides the distribution of fitted probabilities and actual versus predicted tables for each model. You can change the probability threshold to explore how different thresholds affect the classification results.

**JMP Version Added:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
Wait( 0 );
obj << (Fit[1] << Decision Threshold( 1 ));
Wait( 1 );
obj << (Fit[1] << Decision Threshold( 1, Set Probability Threshold( .7 ) ));

```

#### Diagram

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Diagram( state=0|1 ))

**Description:** Shows or hides a diagram that represents the hidden layer structure.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Diagram( 1 ));

```

#### Get Average Absolute Error Test

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Get Average Absolute Error Test)

**Description:** Returns the Mean Abs Dev statistic for the test set. This option is available only when using a validation set in JMP Pro.

```jsl

dt = Open( "$SAMPLE_DATA/Equity.jmp" );
obj = dt << Neural(
	Y( :BAD ),
	X(
		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,
		:DEBTINC
	),
	Validation( :Validation ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
ae = obj << (Fit[1] << Get Average Absolute Error Test);
Show( ae );

```

#### Get Average Absolute Error Training

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Get Average Absolute Error Training)

**Description:** Returns the Mean Abs Dev statistic for the training set.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
ae = obj << (Fit[1] << Get Average Absolute Error Training);
Show( ae );

```

#### Get Average Absolute Error Validation

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Get Average Absolute Error Validation)

**Description:** Returns the Mean Abs Dev statistic for the validation set. This option is available only when using a validation set.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
ae = obj << (Fit[1] << Get Average Absolute Error Validation);
Show( ae );

```

#### Get Average Log Error Test

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Get Average Log Error Test)

**Description:** Returns the average of -log(p), where p equals the probability of response attributed by the model that the response actually occurred, for the test set. This option is available only when using a validation set in JMP Pro.

```jsl

dt = Open( "$SAMPLE_DATA/Equity.jmp" );
obj = dt << Neural(
	Y( :BAD ),
	X(
		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,
		:DEBTINC
	),
	Validation( :Validation ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
avg = obj << (Fit[1] << Get Average Log Error Test);
Show( avg );

```

#### Get Average Log Error Training

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Get Average Log Error Training)

**Description:** Returns the average of -log(p), where p equals the probability of response attributed by the model that the response actually occurred, for the training set.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
avg = obj << (Fit[1] << Get Average Log Error Training);
Show( avg );

```

#### Get Average Log Error Validation

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Get Average Log Error Validation)

**Description:** Returns the average of -log(p), where p equals the probability of response attributed by the model that the response actually occurred, for the validation set. This option is available only when using a validation set.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
avg = obj << (Fit[1] << Get Average Log Error Validation);
Show( avg );

```

#### Get Confusion Matrix Test

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Get Confusion Matrix Test)

**Description:** Returns the confusion matrix for the test set. This option is available only when using a validation set in JMP Pro.

```jsl

dt = Open( "$SAMPLE_DATA/Equity.jmp" );
obj = dt << Neural(
	Y( :BAD ),
	X(
		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,
		:DEBTINC
	),
	Validation( :Validation ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
cm = obj << (Fit[1] << Get Confusion Matrix Test);
Show( cm );

```

#### Get Confusion Matrix Training

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Get Confusion Matrix Training)

**Description:** Returns the confusion matrix for the training set.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
cm = obj << (Fit[1] << Get Confusion Matrix Training);
Show( cm );

```

#### Get Confusion Matrix Validation

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Get Confusion Matrix Validation)

**Description:** Returns the confusion matrix for the validation set. This option is available only when using a validation set.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
cm = obj << (Fit[1] << Get Confusion Matrix Validation);
Show( cm );

```

#### Get Confusion Rates Test

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Get Confusion Rates Test)

**Description:** Returns the confusion rates for the test set. This option is available only when using a validation set in JMP Pro.

```jsl

dt = Open( "$SAMPLE_DATA/Equity.jmp" );
obj = dt << Neural(
	Y( :BAD ),
	X(
		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,
		:DEBTINC
	),
	Validation( :Validation ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
cr = obj << (Fit[1] << Get Confusion Rates Test);
Show( cr );

```

#### Get Confusion Rates Training

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Get Confusion Rates Training)

**Description:** Returns the confusion rates for the training set.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
cr = obj << (Fit[1] << Get Confusion Rates Training);
Show( cr );

```

#### Get Confusion Rates Validation

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Get Confusion Rates Validation)

**Description:** Returns the confusion rates for the validation set. This option is available only when using a validation set.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
cr = obj << (Fit[1] << Get Confusion Rates Validation);
Show( cr );

```

#### Get Gen RSquare Test

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Get Gen RSquare Test)

**Description:** Returns the generalized R-square statistic for the test set. This option is available only when using a validation set in JMP Pro.

```jsl

dt = Open( "$SAMPLE_DATA/Equity.jmp" );
obj = dt << Neural(
	Y( :BAD ),
	X(
		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,
		:DEBTINC
	),
	Validation( :Validation ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
rt = obj << (Fit[1] << Get Gen RSquare Test);
Show( rt );

```

#### Get Gen RSquare Training

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Get Gen RSquare Training)

**Description:** Returns the generalized R-square statistic for the training set.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
rt = obj << (Fit[1] << Get Gen RSquare Training);
Show( rt );

```

#### Get Gen RSquare Validation

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Get Gen RSquare Validation)

**Description:** Returns the generalized R-square statistic for the validation set. This option is available only when using a validation set.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
rt = obj << (Fit[1] << Get Gen RSquare Validation);
Show( rt );

```

#### Get MM SAS DATA Step

**Syntax:** text = obj &lt;&lt; (fit[number] &lt;&lt; Get MM SAS Data Step)

**Description:** Creates SAS code that you can register in the SAS Model Manager.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
code = obj << (Fit[1] << Get MM SAS Data Step);

```

#### Get Measures

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Get Measures)

**Description:** Returns summary measures of fit from the model.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Diagram( 1 ));
obj << (Fit[1] << Get Measures);

```

#### Get Misclassification Rate Test

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Get Misclassification Rate Test)

**Description:** Returns the misclassification rate for the test set. This option is available only when using a validation set in JMP Pro.

```jsl

dt = Open( "$SAMPLE_DATA/Equity.jmp" );
obj = dt << Neural(
	Y( :BAD ),
	X(
		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,
		:DEBTINC
	),
	Validation( :Validation ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
mr = obj << (Fit[1] << Get Misclassification Rate Test);
Show( mr );

```

#### Get Misclassification Rate Training

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Get Misclassification Rate Training)

**Description:** Returns the misclassification rate for the training set.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
mrt = obj << (Fit[1] << Get Misclassification Rate Training);
Show( mrt );

```

#### Get Misclassification Rate Validation

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Get Misclassification Rate Validation)

**Description:** Returns the misclassification rate for the validation set. This option is available only when using a validation set.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
mrt = obj << (Fit[1] << Get Misclassification Rate Validation);
Show( mrt );

```

#### Get NBoost

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Get NBoost)

**Description:** Returns the number of models that were used for boosting.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	N Boost( 2 ),
	Go
);
n = obj << (fit[1] << Get NBoost);
Show( n );

```

#### Get Precision Recall Area Test

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Get Precision Recall Area Test)

**Description:** Returns the area under the precision-recall curve for the test set. The precision-recall curve must be displayed before the area is computed. This option is available only when using a validation set in JMP Pro.

```jsl

dt = Open( "$SAMPLE_DATA/Equity.jmp" );
obj = dt << Neural(
	Y( :BAD ),
	X(
		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,
		:DEBTINC
	),
	Validation( :Validation ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Precision Recall Curve( 1 ));
ra = obj << (Fit[1] << Get Precision Recall Area Test);
Show( ra );

```

#### Get Precision Recall Area Training

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Get Precision Recall Area Training)

**Description:** Returns the area under the precision-recall curve for the training set. The precision-recall curve must be displayed before the area is computed.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Precision Recall Curve( 1 ));
ra = obj << (Fit[1] << Get Precision Recall Area Training);
Show( ra );

```

#### Get Precision Recall Area Validation

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Get Precision Recall Area Validation)

**Description:** Returns the area under the precision-recall curve for the validation set. The precision-recall curve must be displayed before the area is computed. This option is available only when using a validation set.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Precision Recall Curve( 1 ));
ra = obj << (Fit[1] << Get Precision Recall Area Validation);
Show( ra );

```

#### Get Prediction Formula

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Get Prediction Formula)

**Description:** Constructs a script to create a prediction formula column and returns it.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Get Prediction Formula);

```

#### Get RMS Error Test

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Get RMS Error Test)

**Description:** Returns the square root of the mean square of the test errors. This option is available only when using a validation set in JMP Pro.

```jsl

dt = Open( "$SAMPLE_DATA/Equity.jmp" );
obj = dt << Neural(
	Y( :BAD ),
	X(
		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,
		:DEBTINC
	),
	Validation( :Validation ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
re = obj << (Fit[1] << Get RMS Error Test);
Show( re );

```

#### Get RMS Error Training

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Get RMS Error Training)

**Description:** Returns the square root of the mean square of the training errors.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
re = obj << (Fit[1] << Get RMS Error Training);
Show( re );

```

#### Get RMS Error Validation

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Get RMS Error Validation)

**Description:** Returns the square root of the mean square of the validation errors. This option is available only when using a validation set.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
re = obj << (Fit[1] << Get RMS Error Validation);
Show( re );

```

#### Get ROC Area Test

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Get ROC Area Test)

**Description:** Returns the area under the Receiver Operator Characteristic (ROC) curve for the test data. The ROC curve needs to be displayed before the area is computed. This option is available only when using a validation set in JMP Pro.

```jsl

dt = Open( "$SAMPLE_DATA/Equity.jmp" );
obj = dt << Neural(
	Y( :BAD ),
	X(
		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,
		:DEBTINC
	),
	Validation( :Validation ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << ROC Curve( 1 ));
ra = obj << (Fit[1] << Get ROC Area Test);
Show( ra );

```

#### Get ROC Area Training

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Get ROC Area Training)

**Description:** Returns the area under the Receiver Operator Characteristic (ROC) curve for the training data set. The ROC curve needs to be displayed before the area is computed.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << ROC Curve( 1 ));
ra = obj << (Fit[1] << Get ROC Area Training);
Show( ra );

```

#### Get ROC Area Validation

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Get ROC Area Validation)

**Description:** Returns the area under the Receiver Operator Characteristic (ROC) curve for the validation data set. The ROC curve needs to be displayed before the area is computed. This option is available only when using a validation set.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << ROC Curve( 1 ));
ra = obj << (Fit[1] << Get ROC Area Validation);
Show( ra );

```

#### Get RSquare Test

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Get RSquare Test)

**Description:** Returns the entropy R-square statistic for the test set. This option is available only when using a validation set in JMP Pro.

```jsl

dt = Open( "$SAMPLE_DATA/Equity.jmp" );
obj = dt << Neural(
	Y( :BAD ),
	X(
		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,
		:DEBTINC
	),
	Validation( :Validation ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
rt = obj << (Fit[1] << Get RSquare Test);
Show( rt );

```

#### Get RSquare Training

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Get RSquare Training)

**Description:** Returns the entropy R-square statistic for the training set.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
rt = obj << (Fit[1] << Get RSquare Training);
Show( rt );

```

#### Get RSquare Validation

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Get RSquare Validation)

**Description:** Returns the entropy R-square statistic for the validation set. This option is available only when using a validation set.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
rt = obj << (Fit[1] << Get RSquare Validation);
Show( rt );

```

#### Get SAS DATA Step

**Syntax:** text = obj &lt;&lt; (fit[number] &lt;&lt; Get SAS Data Step)

**Description:** Creates SAS code that you can use to score a new data set.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
code = obj << (Fit[1] << Get SAS Data Step);

```

#### Get Seconds

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Get Seconds)

**Description:** Returns the number of seconds used to complete the analysis.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
s = obj << (Fit[1] << Get Seconds);
Show( s );

```

#### Lift Curve

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Lift Curve( state=0|1 ))

**Description:** Shows or hides the Lift Curve plot. A lift curve plots the lift versus the portion of the observations and provides another view of the predictive ability of a model. If you used validation, a plot is shown for each of the training, validation, and test sets.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Lift Curve( 1 ));

```

#### Make SAS DATA Step

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Make SAS Data Step)

**Description:** Creates SAS code that you can use to score a new data set.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Make SAS Data Step);

```

#### Plot Actual by Predicted

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Plot Actual by Predicted( state=0|1 ))

**Description:** Shows or hides a plot with the actual values on the vertical axis and the predicted values on the horizontal axis. This option is available only for continuous responses. If you used validation, a plot is shown for each of the training, validation, and test sets.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Plot Actual By Predicted( 1 ));

```

#### Plot Residual by Predicted

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Plot Residual by Predicted( state= 0|1 ))

**Description:** Shows or hides a plot with the residuals on the vertical axis and the predicted values on the horizontal axis. This option is available only for continuous responses. If you used validation, a plot is shown for each of the training, validation, and test sets.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Plot Residual By Predicted( 1 ));

```

#### Precision Recall Curve

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Precision Recall Curve( state=0|1 ))

**Description:** Shows or hides the Precision-Recall Curve plot that contains a curve for each level of the response variable. A precision-recall curve plots the precision values against the recall values at a variety of thresholds. If you used validation, a plot is shown for each of the training, validation, and test sets.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Precision Recall Curve( 1 ));

```

#### Profiler

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Profiler( state=0|1 ))

**Description:** Shows or hides the prediction profiler, which is used to graphically explore the prediction equation by slicing it one factor at a time. The prediction profiler contains features for optimization.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Profiler( 1 ));

```

#### Publish Prediction Formula

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Publish Prediction Formula)

**Description:** Creates prediction formulas and saves them as formula column scripts in the Formula Depot platform.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Publish Prediction Formula);

```

#### ROC Curve

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; ROC Curve( state=0|1 ))

**Description:** Shows or hides the Receiver Operating Characteristic (ROC) curve for each level of the response variable. The ROC curve is a plot of sensitivity versus (1 - specificity). If you used validation, a plot is shown for each of the training, validation, and test sets.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << ROC Curve( 1 ));

```

#### Remove Fit

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Remove Fit)

**Description:** Removes the entire model report.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
Wait( 2 );
obj << (Fit[1] << Remove Fit);

```

#### Save Fast Formulas

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Save Fast Formulas)

**Description:** Saves a new formula column to the data table. The column contains a formula for the predicted response that includes embedded formulas for the hidden layer nodes. This option produces formulas that evaluate quickly, but cannot be used by the interactive version of the profiler.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Save Fast Formulas);

```

#### Save Formulas

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Save Formulas)

**Description:** Saves new formula columns to the data table. There are separate formula columns for the predicted response and the hidden layer nodes.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Save Formulas);

```

#### Save Profile Formulas

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Save Profile Formulas)

**Description:** Saves a new formula column to the data table. The column contains a formula for the predicted response that includes embedded formulas for the hidden layer nodes. This option produces formulas that can be used by the interactive version of the profiler.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Save Profile Formulas);

```

#### Save Transformed Covariates

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Save Transformed Covariates)

**Description:** Saves new formula columns to the data table. The new columns contain the formulas that are used to transform the covariates. This option is available only in JMP Pro and when the Transform Covariates option is specified in the launch.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Transform Covariates( 1 ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Save Transformed Covariates);

```

#### Save Validation

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Save Validation)

**Description:** Saves a new column to the data table. The column identifies which rows were used in the training and validation sets.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Save Validation);

```

#### Show Estimates

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Show Estimates( state=0|1 ))

**Description:** Shows or hides a report of the parameter estimates.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Show Estimates( 1 ));

```

#### Surface Profiler

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Surface Profiler( state=0|1 ))

**Description:** Shows or hides a three-dimensional surface plot. This option is available only for models with two or more X variables.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Surface Profiler( 1 ));

```


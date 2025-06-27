# Support Vector Machines



## SVM Fit

### Confusion Matrix

**Syntax:** obj << (fit[number] << Confusion Matrix( state=0|1 ))

**Description:** Shows or hides a crosstabulation matrix of actual and predicted responses. On by default.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.25 ), Cost( 1 ) )
);
obj << (fit[1] << Confusion Matrix( 0 ));

```

### Contour Profiler

**Syntax:** obj << (fit[number] << Contour Profiler( state=0|1 ))

**Description:** Displays or hides the contour  profiler.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.25 ), Cost( 1 ) )
);
obj << (Fit[1] << Contour Profiler( 1 ));

```

### Get Measures

**Syntax:** obj << (fit[number] << Get Measures)

**Description:** Returns summary measures of fit from the model.

**JMP Version Added:** 16

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.25 ), Cost( 1 ) )
);
obj << (Fit[1] << Response Profile Plot( 0 ));
obj << (Fit[1] << Get Measures);

```

### Get Prediction Formula

**Syntax:** obj << (fit[number] << Get Prediction Formula)

**Description:** Constructs a script to create a prediction formula column and returns it.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.25 ), Cost( 1 ) )
);
obj << (fit[1] << Get Prediction Formula);

```

### Lift Curve

**Syntax:** obj << (fit[number] << Lift Curve( state=0|1 ))

**Description:** Shows or hides the Lift Curve plot. A lift curve plots the lift versus the portion of the observations and provides another view of the predictive ability of a model. If you used validation, a plot is shown for each of the training, validation, and test sets.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.25 ), Cost( 1 ) )
);
Wait( 0 );
obj << (fit[1] << Lift Curve( 1 ));

```

### Plot Actual by Predicted

**Syntax:** obj << (fit[number] << Plot Actual By Predicted( state=0|1 ))

**Description:** For the specified fit, shows or hides a plot for the training set with actual values on the Y axis and predicted values on the X axis. If you are using validation or test sets, plots are shown for these as well. On by default.

**JMP Version Added:** 16

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Support Vector Machines(
	Y( :Y ),
	X( :Age, :BMI, :Total Cholesterol, :Glucose ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.25 ), Cost( 1 ) )
);
obj << (fit[1] << Plot Actual By Predicted( 0 ));

```

### Plot Residual by Predicted

**Syntax:** obj << (fit[number] << Plot Residual By Predicted( state=0|1 ))

**Description:** For the specified fit, shows or hides a plot for the training set with residual values on the Y axis and predicted values on the X axis. If you are using validation or test sets, plots are shown for these as well.

**JMP Version Added:** 16

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Support Vector Machines(
	Y( :Y ),
	X( :Age, :BMI, :Total Cholesterol, :Glucose ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.25 ), Cost( 1 ) )
);
obj << (fit[1] << Plot Residual By Predicted( 1 ));

```

### Precision Recall Curve

**Syntax:** obj << (fit[number] << Precision Recall Curve( state=0|1 ))

**Description:** Shows or hides the Precision-Recall Curve plot that contains a curve for each level of the response variable. A precision-recall curve plots the precision values against the recall values at a variety of thresholds. If you used validation, a plot is shown for each of the training, validation, and test sets.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.25 ), Cost( 1 ) )
);
Wait( 0 );
obj << (fit[1] << Precision Recall Curve( 1 ));

```

### Profiler

**Syntax:** obj << (fit[number] << Profiler( state=0|1 ))

**Description:** Shows a Prediction Profiler plot for the specified fit.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.25 ), Cost( 1 ) )
);
obj << (fit[1] << Profiler( 1 ));

```

### Publish Prediction Formula

**Syntax:** obj << (fit[number] << Publish Prediction Formula)

**Description:** Creates prediction formulas and saves them as formula column scripts in the Formula Depot platform.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.25 ), Cost( 1 ) )
);
obj << (fit[1] << Publish Prediction Formula);

```

### Publish Probability Formula

**Syntax:** obj << (fit[number] << Publish Probability Formula)

**Description:** Saves the probability of each response level as a separate column in the data table.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Support Vector Machines(
	Y( :Y Binary ),
	X( :Age, :BMI, :Total Cholesterol, :Glucose ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.25 ), Cost( 1 ) )
);
obj << (fit[1] << Publish Probability Formula);

```

### ROC Curve

**Syntax:** obj << (fit[number] << ROC Curve( state=0|1 ))

**Description:** Shows or hides the Receiver Operating Characteristic (ROC) curve for each level of the response variable. The ROC curve is a plot of sensitivity versus (1 - specificity). If you used validation, a plot is shown for each of the training, validation, and test sets.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.25 ), Cost( 1 ) )
);
Wait( 0 );
obj << (fit[1] << ROC Curve( 1 ));

```

### Remove Fit

**Syntax:** obj << (fit[number] << Remove Fit)

**Description:** Removes the entire model report.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.25 ), Cost( 1 ) ),
	Fit( Kernel Function( "Linear" ), Cost( 1 ), Validation Method( "None" ) )
);
Wait( 2 );
obj << (Fit[1] << Remove Fit);

```

### Response Profile Plot

**Syntax:** obj << (fit[number] << Response Profile Plot( state=0|1 ))

**Description:** Displays or hides the Response Profile plot. On by default.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.25 ), Cost( 1 ) )
);
obj << (Fit[1] << Response Profile Plot( 0 ));

```

### Save Predicteds

**Syntax:** obj << (fit[number] << Save Predicteds)

**Description:** Saves the predicted values in a new column in the data table.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.25 ), Cost( 1 ) )
);
obj << (fit[1] << Save Predicteds);

```

### Save Prediction Formula

**Syntax:** obj << (fit[number] << Save Prediction Formula)

**Description:** Creates new columns in the data table that contain the prediction formulas.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.25 ), Cost( 1 ) )
);
obj << (fit[1] << Save Prediction Formula);

```

### Save Probabilities

**Syntax:** obj << (fit[number] << Save Probabilities)

**Description:** Saves the probability of each response level as a separate column in the data table.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.25 ), Cost( 1 ) )
);
obj << (fit[1] << Save Probabilities);

```

### Save Probability Formula

**Syntax:** obj << (fit[number] << Save Probability Formula)

**Description:** Saves the probability of each response level as a separate column in the data table.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Support Vector Machines(
	Y( :Y Binary ),
	X( :Age, :BMI, :Total Cholesterol, :Glucose ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.25 ), Cost( 1 ) )
);
obj << (fit[1] << Save Probability Formula);

```

### Save Validation

**Syntax:** obj << (fit[number] << Save Validation)

**Description:** Creates a new column in the data table that identifies which rows were used in the training, validation and test data sets.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit(
		Kernel Function( "Radial Basis Function" ),
		Gamma( 0.25 ),
		Cost( 1 ),
		Validation Method( "Holdback", 0.3333 ), 

	)
);
obj << (Fit[1] << Save Validation);

```

### Support Vector Coefficients

**Syntax:** obj << (fit[number] << Support Vector Coefficients( state=0|1 ))

**Description:** Displays or hides the table of support vector coefficients.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.25 ), Cost( 1 ) )
);
obj << (Fit[1] << Support Vector Coefficients( 1 ));

```

### Surface Profiler

**Syntax:** obj << (fit[number] << Surface Profiler( state=0|1 ))

**Description:** Displays or hides the surface profiler.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.25 ), Cost( 1 ) )
);
obj << (Fit[1] << Surface Profiler( 1 ));

```

### Action

**Syntax:** obj << Action

**Description:** All-purpose trapdoor within a platform to insert expressions to evaluate. Temporarily sets the DisplayBox and DataTable contexts to the Platform.

```

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

```

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

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**Search within folder(s)**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

### Automatic Recalc

**Syntax:** obj << Automatic Recalc( state=0|1 )

**Description:** Redoes the analysis automatically for exclude and data changes. If the Automatic Recalc option is turned on, you should consider using Wait(0) commands to ensure that the exclude and data changes take effect before the recalculation.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**Syntax:** obj << Broadcast(message)

**Description:** Broadcasts a message to a platform. If return results from individual objects are tables, they are concatenated if possible, and the final format is identical to either the result from the Save Combined Table option in a Table Box or the result from the Concatenate option using a Source column. Other than those, results are stored in a list and returned.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

### By

**Syntax:** obj = Support Vector Machines(...<By( column(s) )>...)

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);

```

### Column Switcher

**Syntax:** obj << Column Switcher(column reference, {column reference, ...}, < Title(title) >, < Close Outline(0|1) >, < Retain Axis Settings(0|1) >, < Layout(0|1) >)

**Description:** Adds a control panel for changing the platform&apos;s variables

```

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

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj << Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Copy Script;

```

### Cost

**Syntax:** obj << Cost( number )

**Description:** Sets the cost parameter for the SVM fit.

**JMP Version Added:** 16

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit(
		Kernel Function( "Radial Basis Function" ),
		Gamma( 0.25 ),
		Cost( 1 ),
		Validation Method( "None" )
	)
);

```

### Cost Max

**Syntax:** obj << Cost Max( number )

**Description:** Sets the maximum Cost for a tuning design.

**JMP Version Added:** 16

```

Names Default To Here( 1 );
Random Reset( 1234 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Tuning Design( 1 ),
	Cost Min( .1 ),
	Cost Max( 4 ),
	Gamma Min( 0.01 ),
	Gamma Max( 0.4 ),
	Fit( Kernel Function( "Radial Basis Function" ), Validation Method( "None" ) )
);

```

### Cost Min

**Syntax:** obj << Cost Min( number )

**Description:** Sets the minimum Cost for a tuning design.

**JMP Version Added:** 16

```

Names Default To Here( 1 );
Random Reset( 1234 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Tuning Design( 1 ),
	Cost Min( .1 ),
	Cost Max( 4 ),
	Gamma Min( 0.01 ),
	Gamma Max( 0.4 ),
	Fit( Kernel Function( "Radial Basis Function" ), Validation Method( "None" ) )
);

```

### Data Table Window

**Syntax:** obj << Data Table Window

**Description:** Move the data table window for this analysis to the front.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Data Table Window;

```

### Factor

**Syntax:** obj = Support Vector Machines(...Factor( column(s) )...)

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);

```

### Fit

**Syntax:** obj << Fit

**Description:** Specifies and fits the kernel structure for the support vector machine to the data.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.25 ), Cost( 1 ) )
);

```

### Freq

**Syntax:** obj = Support Vector Machines(...<Freq( column )>...)

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure3Freq.jmp" );
obj = Support Vector Machines(
	Y( :clean ),
	X(
		:contamination, :corrosion, :doping, :metallization, :miscellaneous, :oxide defect,
		:silicon defect
	),
	Freq( :SampleSize )
);

```

### Gamma

**Syntax:** obj << Gamma( number )

**Description:** Sets the gamma parameter for the Radial Basis kernel.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit(
		Kernel Function( "Radial Basis Function" ),
		Gamma( 0.25 ),
		Cost( 1 ),
		Validation Method( "None" )
	)
);

```

### Gamma Max

**Syntax:** obj << Gamma Max( number )

**Description:** Sets the maximum Gamma for a tuning design.

**JMP Version Added:** 16

```

Names Default To Here( 1 );
Random Reset( 1234 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Tuning Design( 1 ),
	Cost Min( .1 ),
	Cost Max( 4 ),
	Gamma Min( 0.01 ),
	Gamma Max( 0.4 ),
	Fit( Kernel Function( "Radial Basis Function" ), Validation Method( "None" ) )
);

```

### Gamma Min

**Syntax:** obj << Gamma Min( number )

**Description:** Sets the minimum Gamma for a tuning design.

**JMP Version Added:** 16

```

Names Default To Here( 1 );
Random Reset( 1234 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Tuning Design( 1 ),
	Cost Min( .1 ),
	Cost Max( 4 ),
	Gamma Min( 0.01 ),
	Gamma Max( 0.4 ),
	Fit( Kernel Function( "Radial Basis Function" ), Validation Method( "None" ) )
);

```

### Get By Levels

**Syntax:** obj << Get By Levels

**Description:** Returns an associative array mapping the by group columns to their values.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**Syntax:** obj << Get ByGroup Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Syntax:** obj << Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

**General**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Platform with Filter**

```

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

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**Syntax:** obj << Get Group Platform

**Description:** Return the Group Platform object if this platform is part of a Group. Otherwise, returns Empty().

```

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

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntax:** obj << Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntax:** obj << Get Timing

**Description:** Times the platform launch.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**Syntax:** obj << Get Web Support

**Description:** Return a number indicating the level of Interactive HTML support for the display object. 1 means some or all elements are supported. 0 means no support.

```

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

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Go

**Syntax:** obj << Go

**Description:** Starts solving the support vector machine.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Go;

```

### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Description:** Ignores the current settings of the platform&apos;s preferences. The message is ignored when sent to the platform after creation.

```

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

```

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

```

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

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Number of Runs

**Syntax:** obj << Number of Runs( number )

**Description:** Sets the number of runs for a tuning design.

**JMP Version Added:** 16

```

Names Default To Here( 1 );
Random Reset( 1234 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Tuning Design( 1 ),
	Cost Min( .1 ),
	Cost Max( 4 ),
	Gamma Min( 0.01 ),
	Gamma Max( 0.4 ),
	Number of Runs( 15 ),
	Fit( Kernel Function( "Radial Basis Function" ), Validation Method( "None" ) )
);

```

### Paste Local Data Filter

**Syntax:** obj << Paste Local Data Filter

**Description:** Apply the local data filter from the clipboard to the current report.

```

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

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntax:** obj << Redo ByGroup Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Syntax:** obj << Relaunch Analysis

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntax:** obj << Relaunch ByGroup

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Relaunch ByGroup;

```

### Remove Column Switcher

**Syntax:** obj << Remove Column Switcher

**Description:** Removes the most recent Column Switcher that has been added to the platform.

```

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

```

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

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**Syntax:** obj << Report;

Report( obj )

**Description:** Returns a reference to the report object.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntax:** obj << Report View( "Full"|"Summary" )

**Description:** The report view determines the level of detail visible in a platform report. Full shows all of the detail, while Summary shows only select content, dependent on the platform. For customized behavior, display boxes support a <<Set Summary Behavior message.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Report View( "Summary" );

```

### Response

**Syntax:** obj = Support Vector Machines(...Response( column )...)

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description:** Creates a JSL script to produce this analysis, and save it as a table property in the data table. You can specify a name for the script. The Append Suffix option appends a numeric suffix to the script name, which differentiates the script from an existing script with the same name. The Prompt option prompts the user to specify a script name. The Replace option replaces an existing script with the same name.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj << Save ByGroup Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj << Save ByGroup Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntax:** obj << Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj << Save Script for All Objects To Data Table( <name> )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj << Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj << Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj << Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Save Script to Script Window;

```

### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Description:** Sends platform commands or display customization commands to each level of a by-group.

```

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

```

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

```

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

### Set Random Seed

**Syntax:** Set Random Seed( number )

**Description:** Sets the random seed for the randomization process used for KFold and Holdback validation. This is useful if you want to reproduce an analysis.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit(
		Set Random Seed( 1234 ),
		Kernel Function( "Radial Basis Function" ),
		Gamma( 0.25 ),
		Cost( 1 ),
		Validation Method( "Holdback", 0.3333 )
	)
);

```

### Support Vector Machines

**Syntax:** Support Vector Machines(Y( column ), X( columns ))

**Description:** Predicts a response based on the support vectors in the space of the X variables. One of the goals of the Support Vector Machines algorithm is to use training data to learn how to classify new data.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);

```

### Sync to Data Table Changes

**Syntax:** obj << Sync to Data Table Changes

**Description:** Sync with the exclude and data changes that have been made.

```

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

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj << Top Report

**Description:** Returns a reference to the root node in the report.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transform Column

**Syntax:** obj = <Platform>(... Transform Column(<name>, Formula(<expression>), [Random Seed(<n>)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description:** Create a transform column in the local context of an object, usually a platform. The transform column is active only for the lifetime of the platform.

**JMP Version Added:** 16

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

### Tuning Design

**Syntax:** obj << Tuning Design( state=0|1 )

**JMP Version Added:** 16

```

Names Default To Here( 1 );
Random Reset( 1234 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Tuning Design( 1 ),
	Fit( Kernel Function( "Radial Basis Function" ), Validation Method( "None" ) )
);

```

### Validation

**Syntax:** obj = Support Vector Machines(...<Validation( column )>...)

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = Support Vector Machines(
	Y( :Y Binary ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation )
);

```

### View Web XML

**Syntax:** obj << View Web XML

**Description:** Returns the XML code that is used to create the interactive HTML report.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Window View

**Syntax:** obj = Support Vector Machines(...Window View( "Visible"|"Invisible"|"Private" )...)

**Description:** Set the type of the window to be created for the report. By default a Visible report window will be created. An Invisible window will not appear on screen, but is discoverable by functions such as Window(). A Private window responds to most window messages but is not discoverable and must be addressed through the report object

```

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

**Syntax:** obj = Support Vector Machines(...X( column(s) )...)

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);

```

### Y

**Syntax:** obj = Support Vector Machines(...Y( column )...)

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);

```


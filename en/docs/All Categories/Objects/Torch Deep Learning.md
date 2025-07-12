# Torch Deep Learning



## Associated Constructors

### Torch Deep Learning

**Syntax:** Torch Deep Learning(Y( columns ), X( columns ))

**Description:** Interface to predictive modeling via the Torch Deep Learning add-in

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

## Columns

### Censor

**Syntax:** obj << Censor( column )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### Freq

**Syntax:** obj << Freq( column )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### Inputs

**Syntax:** obj << Inputs( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### Responses

**Syntax:** obj << Responses( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### Subject

**Syntax:** obj << Subject( column )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### Validation

**Syntax:** obj << Validation( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### Weight

**Syntax:** obj << Weight( column )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### X

**Syntax:** obj << X( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### Y

**Syntax:** obj << Y( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

## Item Messages

### Change Variables

**Syntax:** obj << Change Variables

**Description:** Changes X, Y, and other variables for subsequent models.

### Compare

**Syntax:** obj << Compare

**Description:** Updates the Torch Deep Learning comparison metrics.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj << Compare( AUC( 1 ) );

```

### Fit

**Syntax:** obj << Fit

**Description:** Fits a Torch Deep Learning model. You can specify parameters and fitting specifications within this command.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### Get Measures

**Syntax:** obj << Get Measures

### Redo Analysis

**Syntax:** obj << Redo Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj << Redo Analysis;

```

### Relaunch Analysis

**Syntax:** obj << Relaunch Analysis

**Description:** Return to the launcher for this analysis.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj << Relaunch Analysis;

```

### Set

**Syntax:** obj << Set

**Description:** Specifies parameters for a Torch Deep Learning model.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Set( Epochs( 5 ) ) );

```

### Show Details

**Syntax:** obj << Show Details( state=0|1 )

**Description:** Shows more details.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Show Details( 1 ) );

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

### Copy ByGroup Script

**Syntax:** obj << Copy ByGroup Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj << Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj << Copy Script;

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
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Syntax:** obj << Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

**General**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
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
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Script

**Syntax:** obj << Get Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntax:** obj << Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntax:** obj << Get Timing

**Description:** Times the platform launch.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
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
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description:** Creates a JSL script to produce this analysis, and save it as a table property in the data table. You can specify a name for the script. The Append Suffix option appends a numeric suffix to the script name, which differentiates the script from an existing script with the same name. The Prompt option prompts the user to specify a script name. The Replace option replaces an existing script with the same name.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj << Save ByGroup Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj << Save ByGroup Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntax:** obj << Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj << Save Script for All Objects To Data Table( <name> )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj << Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj << Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj << Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
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

### Title

**Syntax:** obj << Title( "new title" )

**Description:** Sets the title of the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj << Top Report

**Description:** Returns a reference to the root node in the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
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

## Torch Deep Learning Compare

### Associated Constructors

#### Torch Deep Learning Compare

**Syntax:** Torch Deep Learning Compare

### Item Messages

#### AUC

**Syntax:** obj << AUC( state=0|1 )

**Description:** Shows or hides the AUROC, which is the area under the receiver operating characteristic curve. On by default.

#### Accuracy

**Syntax:** obj << Accuracy( state=0|1 )

**Description:** Shows or hides the accuracy, which is the proportion of correct classifications. On by default.

#### Censor

**Syntax:** obj << Censor( state=0|1 )

**Description:** Shows or hides the Censor command On by default.

#### Concordance

**Syntax:** obj << Concordance( state=0|1 )

**Description:** Shows or hides the concordance, which is the Harrell C-Index and measures strength of sorting efficiency On by default.

#### Correlation

**Syntax:** obj << Correlation( state=0|1 )

**Description:** Shows or hides the Pearson correlation, which is a measure of the strength of the linear relationship. On by default.

#### F1

**Syntax:** obj << F1( state=0|1 )

**Description:** Shows or hides the F1 Score, which is the harmonic average of precision and recall. On by default.

#### Freq

**Syntax:** obj << Freq( state=0|1 )

**Description:** Shows or hides the Freq column. On by default.

#### H Measure

**Syntax:** obj << H Measure( state=0|1 )

**Description:** Shows or hides the H Measure, which measures proportion improvement over baseline. On by default.

#### Hide All Models

**Syntax:** obj << Hide All Models

**Description:** Hides all models.

#### LogLoss

**Syntax:** obj << LogLoss( state=0|1 )

**Description:** Shows or hides the logarithm of the likelihood-based loss function. On by default.

#### MAE

**Syntax:** obj << MAE( state=0|1 )

**Description:** Shows or hides the MAE, which is the mean absolute error. On by default.

#### MCC

**Syntax:** obj << MCC( state=0|1 )

**Description:** Shows or hides the Matthews correlation coefficient, which is the Pearson correlation for binary variables. On by default.

#### Misclass

**Syntax:** obj << Misclass( state=0|1 )

**Description:** Shows or hides the misclassification rate, which is the proportion of incorrect classifications. On by default.

#### Precision Recall AUC

**Syntax:** obj << Precision Recall AUC( state=0|1 )

**Description:** Shows or hides the Precision Recall AUC, which is the area under the precision-recall curve. On by default.

#### Predictors

**Syntax:** obj << Predictors( state=0|1 )

**Description:** Shows or hides the Predictors column. On by default.

#### Profit

**Syntax:** obj << Profit( state=0|1 )

**Description:** Shows or hides the expected profit. On by default.

#### RMSE

**Syntax:** obj << RMSE( state=0|1 )

**Description:** Shows or hides the RMSE, which is the root mean square error. On by default.

#### RSquare

**Syntax:** obj << RSquare( state=0|1 )

**Description:** Shows or hides RSquare value, which is the proportion of variability explained. On by default.

#### Remove Hidden Models

**Syntax:** obj << Remove Hidden Models

**Description:** Removes all models for which the Show box is not checked.

#### Remove Shown Models

**Syntax:** obj << Remove Shown Models

**Description:** Removes all models for which the Show check box is checked and shows the remaining models.

#### Response

**Syntax:** obj << Response( state=0|1 )

**Description:** Shows or hides the Response column. On by default.

#### Show All Models

**Syntax:** obj << Show All Models

**Description:** Shows all models.

#### Subject

**Syntax:** obj << Subject( state=0|1 )

**Description:** Shows or hides the Subject column On by default.

#### Training Metrics

**Syntax:** obj << Training Metrics( state=0|1 )

**Description:** Shows or hides all training metrics. On by default.

#### Validation

**Syntax:** obj << Validation( state=0|1 )

**Description:** Shows or hides the Validation column. On by default.

#### Validation Metrics

**Syntax:** obj << Validation Metrics( state=0|1 )

**Description:** Shows or hides all validation metrics. On by default.

#### Weight

**Syntax:** obj << Weight( state=0|1 )

**Description:** Shows or hides the Weight column. On by default.

## Torch Deep Learning Fit > Post

### Item Messages

#### Actual by Predicted Plots

**Syntax:** obj << Actual by Predicted Plots( state=0|1 )

**Description:** Shows or hides a plot using the training data with the predicted values on the X axis and actual values on the Y axis. On by default.

#### Confusion Matrices

**Syntax:** obj << ( fit[number] << Confusion Matrices( state=0|1 ) )

**Description:** Shows or hides a crosstabulation matrix of actual and predicted levels. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Torch Deep Learning(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit
);
obj << (fit[1] << Confusion Matrices( 1 ));

```

#### Contour Profiler.

**Syntax:** obj << Contour Profiler.

**Description:** Shows or hides interactive graphs of cross-sections of the prediction function.

#### Decision Thresholds

**Syntax:** obj << Decision Thresholds( state=0|1 )

**Description:** Shows or hides decision threshold graphs and tables. On by default.

#### Fit Details

**Syntax:** obj << Fit Details( state=0|1 )

**Description:** Shows or hides the statistics for the fitted model. On by default.

#### Lift Curves

**Syntax:** obj << Lift Curves( state=0|1 )

**Description:** Plots how much more saturated the top x-percent of predicted values are compared to the whole population.

#### Model Details

**Syntax:** obj << Model Details( state=0|1 )

**Description:** Shows or hides model details On by default.

#### Precision Recall Curves

**Syntax:** obj << Precision Recall Curves( state=0|1 )

**Description:** Plots the trade-off between precision and recall for different classification thresholds. It is preferred in scenarios where class imbalances exist.

#### Profiler

**Syntax:** obj << Profiler

**Description:** Shows or hides the Prediction Profiler.

#### ROC Curves

**Syntax:** obj << ROC Curves( state=0|1 )

**Description:** Plots the response-category sorting efficiency of the model predictions.

#### Surface Profiler

**Syntax:** obj << Surface Profiler

**Description:** Shows or hides interactive graphs of cross-sections of the prediction function.

## Torch Deep Learning Fit

### Associated Constructors

#### Post

**Syntax:** Post

#### Torch Deep Learning Fit

**Syntax:** Torch Deep Learning Fit

### Item Messages

#### Activation

**Syntax:** obj << Activation( "CELU"|"ELU"|"GELU"|"Hardshrink"|"Hardtanh"|"LeakyReLU"|"LogSigmoid"|"Mish"|"PReLU"|"ReLU"|"ReLU6"|"RReLU"|"SELU"|"Sigmoid"|"SiLU"|"Softplus"|"Softshrink"|"Softsign"|"Tanh"|"Tanhshrink"|"None"="ReLU" )

**Description:** Specifies the activation function to use after each layer. "ReLU" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Activation( "ReLU" ) ) );

```

#### Activations

**Syntax:** obj << Activations( text )

**Description:** Specifies a space-delimited list of activation functions to use in sequential layers.  This parameter overrides Activation when it is specified, and the last value carries forward.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Activations( "ReLU" ) ) );

```

#### Anchor Scale

**Syntax:** obj << Anchor Scale( number=16 )

**Description:** Specifies a multiplier applied to an internal range of anchor sizes.  Larger values tend to work better for larger boxes. "16" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Anchor Scale( "16" ) ) );

```

#### Aspect Sigma

**Syntax:** obj << Aspect Sigma( number=0 )

**Description:** Standard deviation of Gaussian aspect ratio deformation "0" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Aspect Sigma( 0.0 ) ) );

```

#### Attention Heads

**Syntax:** obj << Attention Heads( text=4 )

**Description:** For transformer models, specifies the number of attention heads as a space delimited list of positive integers, each of which must evenly divide its corresponding layer size. Last value carries forward if necessary. "4" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Attention Heads( 1 ) ) );

```

#### Base Activation

**Syntax:** obj << Base Activation( "CELU"|"ELU"|"GELU"|"Hardshrink"|"Hardtanh"|"LeakyReLU"|"LogSigmoid"|"Mish"|"PReLU"|"ReLU"|"ReLU6"|"RReLU"|"SELU"|"Sigmoid"|"SiLU"|"Softplus"|"Softshrink"|"Softsign"|"Tanh"|"Tanhshrink"|"None"="GELU" )

**Description:** Specifies the base activation function for Kolmogorov Arnold B Splines. "GELU" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Base Activation( "GELU" ) ) );

```

#### Basis Function

**Syntax:** obj << Basis Function( "Gaussian"|"Linear"|"Quadradic"|"InverseQuadradic"|"MultiQuadric"|"InverseMultiQuadric"|"Spline"|"Poisson1"|"Poisson2"|"Matern32"|"Matern52"="Gaussian" )

**Description:** For Radial Basis Machine models, specify the basis function. "Gaussian" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning(
	Y( :sex ),
	X( :height, :weight ),
	Fit( Tabular Model( "RadialBasisMachine" ), Basis Function( "Gaussian" ) )
);

```

#### Batch Size

**Syntax:** obj << Batch Size( number=128 )

**Description:** Specifies the number of rows to randomly sample for each training batch and optimization update. Decrease it to save memory and update gradients more frequently; increase it to pass through the data faster and regularize the model more. "128" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Batch Size( 128 ) ) );

```

#### Binary Loss

**Syntax:** obj << Binary Loss( "BCE"|"SM"="BCE" )

**Description:** Specifies the loss function for binary responses. Choose from Binary Cross Entropy (BCE) or Soft Margin (SM). "BCE" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Binary Loss( "BCE" ) ) );

```

#### Blur Max Sigma

**Syntax:** obj << Blur Max Sigma( number=0 )

**Description:** Maximum standard deviation of Gaussian blur "0" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Blur Max Sigma( 1 ) ) );

```

#### Class Loss Weight

**Syntax:** obj << Class Loss Weight( number=4.0 )

**Description:** Specifies the multiplier for class loss. "4.0" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Class Loss Weight( 4.0 ) ) );

```

#### Confidence Threshold

**Syntax:** obj << Confidence Threshold( number=0.05 )

**Description:** Specifies the confidence score threshold for predicted boxes.  Boxes with probability score less than this threshold are dropped. "0.05" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Confidence Threshold( 0.05 ) ) );

```

#### Continuous Loss

**Syntax:** obj << Continuous Loss( "MSE"|"L1"|"SmoothL1"|"Huber"|"Poisson"|"Quantile"|"CoxPH"="MSE" )

**Description:** Specifies the loss function for continuous responses. Choose from Mean Squared Error (MSE), Mean Absolute Error (L1), Smoothed L1 (with margin), Huber (with margin), or Poisson (for count responses). "MSE" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :weight ), X( :picture ), Fit( Continuous Loss( "MSE" ) ) );

```

#### Copy Parameters to Launch

**Syntax:** obj << Copy Parameters to Launch

**Description:** Copies the parameter values from this model to the model launch section.

#### Covariance Structure

**Syntax:** obj << Covariance Structure( "DotProduct"|"Gaussian"="DotProduct" )

**Description:** For mixed models, specify the covariance structure. "DotProduct" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning(
	Y( :sex ),
	X( :height, :weight ),
	Fit( Tabular Model( "MixedModel" ), Covariance Structure( "DotProduct" ) )
);

```

#### Data Threads

**Syntax:** obj << Data Threads( number=4 )

**Description:** Specifies the number of threads to use to load data into memory. A number near half the number of actual cores is usually near optimal. "4" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Data Threads( 0 ) ) );

```

#### Device

**Syntax:** obj << Device( "auto"|"cpu"|"cuda:0"|"cuda:1"|"cuda:2"|"cuda:3"="auto" )

**Description:** Specifies the computational device that Torch uses. "auto" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Device( "cpu" ) ) );

```

#### Dilations

**Syntax:** obj << Dilations( text=1 )

**Description:** For custom convolutional models, specifies the dilations as a space-delimited list of positive integers. Last value carries forward if necessary. "1" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Dilations( "1" ) ) );

```

#### Dropout Probs

**Syntax:** obj << Dropout Probs( text=0.0 )

**Description:** Specifies the probabilities of dropout to use after each layer as a space-delimited list of decimals between 0 and 1. Last value carries forward if necessary. "0.0" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Dropout Probs( "0.1" ) ) );

```

#### Epochs

**Syntax:** obj << Epochs( number=20 )

**Description:** Specifies the number of iterations through the training data to optimize the loss function for each batch and train the model. "20" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Epochs( 100 ) ) );

```

#### Factorization Machine Layers

**Syntax:** obj << Factorization Machine Layers( text=0 )

**Description:** Specify a space-separated list of 0s and 1s indicating if factorization machine interactions should be added to each linear layer.  Last value carries forward. "0" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning(
	Y( :sex ),
	X( :height, :weight ),
	Fit( Factorization Machine Layers( "1" ) )
);

```

#### Fit Ys Separately

**Syntax:** obj << Fit Ys Separately( state=0 )

**Description:** Check to fit a distinct model for each Y variable, and uncheck to model them jointly. "0" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex, :height ), X( :picture ), Fit( Model Ys Separately( 1 ) ) );

```

#### Fixed Effects

**Syntax:** obj << Fixed Effects( number=0 )

**Description:** Specify the number of fixed effects, all of which must be at the beginning of the X variable list "0" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Fixed Effects( 0 ) ) );

```

#### Folder

**Syntax:** obj << Folder( text )

**Description:** Select a folder in which to save modeling results. A subfolder for each model is created in this folder.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Folder( "" ) ) );

```

#### Frozen Epochs

**Syntax:** obj << Frozen Epochs( number=0 )

**Description:** Specifies the number of epochs for which pretrained model bodies remain frozen.  After this number there is full training gradients for all parameters. "0" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Frozen Epochs( 3 ) ) );

```

#### Generate Python Code

**Syntax:** obj << Generate Python Code

**Description:** Creates Python code for model deployment.

#### Grid Size

**Syntax:** obj << Grid Size( number=5 )

**Description:** For Kolmogorov Arnold B Spline networks, specifies the number of points in the grid for the spline interpolation. "5" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Grid Size( 5 ) ) );

```

#### HFlip Prob

**Syntax:** obj << HFlip Prob( number=0 )

**Description:** Probability of horizontal flip "0" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( HFlip Prob( 0.3 ) ) );

```

#### Highway Layers

**Syntax:** obj << Highway Layers( text=0 )

**Description:** Specify a space-separated list of nonnegative integers specifying the number of highway layers to insert in the network.  Last value carries forward. "0" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Highway Layers( "1" ) ) );

```

#### Image Model

**Syntax:** obj << Image Model( ="LeNet5" )

**Description:** Specifies the image network architecture to use. Models are ordered by size. Smaller models train faster but may not perform as well as larger models. "LeNet5" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Image Model( "LeNet5" ) ) );

```

#### Image Size

**Syntax:** obj << Image Size( number=28 )

**Description:** Specifies the size of image to use while training. Input images are transformed to this size square; larger images have higher resolution but slower training times. "28" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Image Size( 28 ) ) );

```

#### Kernel Sizes

**Syntax:** obj << Kernel Sizes( text=3 )

**Description:** For custom convolutional models, specifies the kernel sizes as a space-delimited list of positive integers. Last value carries forward if necessary. "3" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Kernel Sizes( "3" ) ) );

```

#### L1 Penalty

**Syntax:** obj << L1 Penalty( number=0.0 )

**Description:** Specifies a multiplier for the sum of absolute values of weight parameters to be added to the loss and induce sparsity. "0.0" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( L1 Penalty( 0.0001 ) ) );

```

#### Layer Sizes

**Syntax:** obj << Layer Sizes( text=16 )

**Description:** Specifies output sizes of hidden layers as a space-delimited list of integers (actual sizes) or decimals (multipliers of the previous layer size). The final value is the embedding size. "16" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Layer Sizes( "16" ) ) );

```

#### Learning Rate

**Syntax:** obj << Learning Rate( number=0.001 )

**Description:** Specifies the learning rate. Smaller learning rates tend to fit better but require more iterations to converge, whereas larger learning rates fit faster. "0.001" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Learning Rate( 0.001 ) ) );

```

#### Margin

**Syntax:** obj << Margin( number=1.0 )

**Description:** Specifies the margin used in margin-based loss functions. Larger values should produce larger embedding distances between nominal responses with different levels, but may adversely affect training. "1.0" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Margin( 1.0 ) ) );

```

#### Max Boxes

**Syntax:** obj << Max Boxes( number=5 )

**Description:** Specifies the maximum number of predicted boxes per image. "5" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Max Boxes( 5 ) ) );

```

#### Max Seq Length

**Syntax:** obj << Max Seq Length( number=512 )

**Description:** For text models, specifies the maximum number of tokens to create for each text item. "512" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Chips.jmp" );
Torch Deep Learning(
	Y( :Buy again? ),
	X( :Potato Chip Product Review ),
	Fit( Max Seq Length( 512 ) )
);

```

#### Mixup Portion

**Syntax:** obj << Mixup Portion( number=0.0 )

**Description:** Specifies portion of mixup samples to add to each training batch. For example, if Batch Size is 128 and Mixup Portion is 0.5, then 64 mixup samples are added. "0.0" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Mixup Portion( 0.5 ) ) );

```

#### NMS Threshold

**Syntax:** obj << NMS Threshold( number=0.5 )

**Description:** Specifies the non-maximum suppression threshold for predicted boxes.  Overlapping boxes with IOU values above this threshold are dropped. "0.5" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( NMS Threshold( 0.5 ) ) );

```

#### Noise Max Sigma

**Syntax:** obj << Noise Max Sigma( number=0 )

**Description:** Maximum standard deviation of additive Gaussian noise "0" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Noise Max Sigma( 1 ) ) );

```

#### Nominal Image Threshold

**Syntax:** obj << Nominal Image Threshold( number=10 )

**Description:** Specifies the cutoff for determining if images in a column are nominal or continuous.  If the number of unique pixel levels is <= this number, then the images are considered to be nominal. "10" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Nominal Image Threshold( 10 ) ) );

```

#### Nominal Loss

**Syntax:** obj << Nominal Loss( "NLL"="NLL" )

**Description:** Specifies the loss function for nominal responses. Choose from Negative Loglikelihood (NLL). "NLL" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Nominal Loss( "NLL" ) ) );

```

#### Norm

**Syntax:** obj << Norm( "None"|"Batch"|"Group"|"Instance"="Batch" )

**Description:** Specifies the type of normalization to apply to each MLP layer. "Batch" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Norm( "Batch" ) ) );

```

#### Norm First

**Syntax:** obj << Norm First( "None"|"Batch"="Batch" )

**Description:** Specifies the type of normalization to apply to the input data to the tabular model. Batch norm effectively centers and scales each input. "Batch" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Norm First( "Batch" ) ) );

```

#### Num Linear

**Syntax:** obj << Num Linear( number=1 )

**Description:** For custom convolutional and message passing models, specifies the number of linear layers at the end of Layer Sizes. "1" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Num Linear( 1 ) ) );

```

#### Optimizer

**Syntax:** obj << Optimizer( "Adam"|"AdamW"|"SGD"|"SGDAGC"="AdamW" )

**Description:** Specifies the optimization method. Choose between Adaptive moment estimation (Adam), Adam weight decay (AdamW), Stochastic Gradient Descent (SGD), or SGD with Adaptive Gradient Clipping (SGDAGC). "AdamW" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Optimizer( "AdamW" ) ) );

```

#### Pitch Sigma

**Syntax:** obj << Pitch Sigma( number=0 )

**Description:** Standard deviation of Gaussian pitch "0" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Pitch Sigma( 5 ) ) );

```

#### Pooling Layers

**Syntax:** obj << Pooling Layers( text=Max )

**Description:** Specifies pooling layers as a space-delimited list of one of four keywords:  Max, Avg, Cat, or None. Last value carries forward if necessary. "Max" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Pooling Layers( "Max" ) ) );

```

#### Pretrained Tabular

**Syntax:** obj << Pretrained Tabular( ="None" )

**Description:** Specify a pretrained tabular model that is prepended to the Tabular Model. "None" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Pretrained Tabular( "None" ) ) );

```

#### Quantiles

**Syntax:** obj << Quantiles( text=0.9 )

**Description:** Specify a space-delimited list of quantiles to use for Quantile loss. "0.9" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Quantiles( "0.9" ) ) );

```

#### RPN NMS Threshold

**Syntax:** obj << RPN NMS Threshold( number=0.7 )

**Description:** Specifies the non-maximum suppression threshold for region proposals.  Overlapping boxes with IOU values above this threshold are dropped. "0.7" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( RPN NMS Threshold( 0.7 ) ) );

```

#### Remove All But This Fit

**Syntax:** obj << ( fit[number] << Remove All But This Fit )

**Description:** Removes the reports and plots for all models except this one.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Torch Deep Learning(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit
);
Wait( 2 );
obj << (Fit[1] << Remove All But This Fit);

```

#### Remove Fit

**Syntax:** obj << ( fit[number] << Remove Fit )

**Description:** Removes the entire model report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Torch Deep Learning(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit
);
Wait( 2 );
obj << (Fit[1] << Remove Fit);

```

#### Restore From

**Syntax:** obj << Restore From( " "=" " )

**Description:** Select a subfolder containing saved files from a previously fit model. Training for a new model will begin where this model finished. Model architectures and validation variables should match. Leave this field blank to train from scratch. " " by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Restore From( "" ) ) );

```

#### Roll Sigma

**Syntax:** obj << Roll Sigma( number=0 )

**Description:** Standard deviation of Gaussian roll "0" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Roll Sigma( 5 ) ) );

```

#### Save CAMs

**Syntax:** obj << Save CAMs

**Description:** Save gradient-based class activation maps (CAMs) as a new column.

#### Save Embeddings

**Syntax:** obj << Save Embeddings

**Description:** Saves model embeddings (from final hidden layer) as new columns in the data table

#### Save Model

**Syntax:** obj << Save Model

**Description:** Saves serialized modeling components to disk in a folder that you name.  You can then specify this folder in Restore From to begin training with this model.

#### Save Predicteds

**Syntax:** obj << Save Predicteds

**Description:** Saves the predicted values in a new column in the data table.

#### Screening Method

**Syntax:** obj << Screening Method( "ResponseScreening"|"BootstrapForest"="ResponseScreening" )

**Description:** Choose a method by which to screen Tabular Model predictors prior to fitting the model within each fold.  ResponseScreening is fast and BootstrapForest is more thorough. "ResponseScreening" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning(
	Y( :sex ),
	X( :picture ),
	Fit( Screening Method( "ResponseScreening" ) )
);

```

#### Screening Threshold

**Syntax:** obj << Screening Threshold( number=0 )

**Description:** If >= 1, the number of Tabular Model predictors to select by screening.  If < 1, the predictors with cumulative portion less than the threshold. "0" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Screening Threshold( 1 ) ) );

```

#### Seed

**Syntax:** obj << Seed( number=0 )

**Description:** Specifies the seed for the random number generator.  Note results may not be fully reproducible with the same seed due to the stochastic nature of certain Torch calculations. "0" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Seed( 0 ) ) );

```

#### Segmentation Model

**Syntax:** obj << Segmentation Model( "UNet"|"FPN"|"LinkNet"|"DeepLabV3"|"DeepLabV3Plus"|"PAN"|"PSPNet"="UNet" )

**Description:** Specifies the image segmentation model. "UNet" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/segmentation.jmp" );
Torch Deep Learning( Y( :Mask ), X( :Picture ), Sett( Segmentation Model( "VGG11_BN" ) ) );

```

#### Spline Order

**Syntax:** obj << Spline Order( number=3 )

**Description:** For Kolmogorov Arnold B Spline networks, specifies the order of the spline used for interpolation. "3" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Spline Order( 3 ) ) );

```

#### Strides

**Syntax:** obj << Strides( text=1 )

**Description:** For custom convolutional models, specifies the strides as a space-delimited list of positive integers. Last value carries forward if necessary. "1" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Strides( "1" ) ) );

```

#### Tabular Model

**Syntax:** obj << Tabular Model( "MultiLayerPerceptron"|"FTTransformer"|"KolmogorovArnoldBSpline"|"CustomConv1d"|"RadialBasisMachine"|"MixedModel"="MultiLayerPerceptron" )

**Description:** Specifies the tabular network architecture to use. Choose from Multilayer Perceptron (MLP), Feature Tokenized Transformer (FTTransformer), Kolmogorov Arnold Network (KolmogorovArnoldBSpline), or other options "MultiLayerPerceptron" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning(
	Y( :sex ),
	X( :picture ),
	Fit( Tabular Model( "MultiLayerPerceptron" ) )
);

```

#### Text Model

**Syntax:** obj << Text Model( ="BertTiny" )

**Description:** Specifies the text network architecture to use. Models are ordered by size. Smaller models train faster but may not perform as well as larger models. "BertTiny" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Chips.jmp" );
Torch Deep Learning(
	Y( :Buy again? ),
	X( :Potato Chip Product Review ),
	Fit( Text Model( "BERT" ) )
);

```

#### Triplet Loss Weight

**Syntax:** obj << Triplet Loss Weight( number=0.0 )

**Description:** Specifies the multiplier alpha to use in the following compound loss function: alpha * triplet_loss + (1 - alpha) * loss_function. Must be between 0 and 1. "0.0" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Triplet Loss Weight( 0.5 ) ) );

```

#### Use Data As Knots

**Syntax:** obj << Use Data As Knots( state=0 )

**Description:** For Radial Basis Machine models, check to use the training data as knots to form an interpolation-style model. "0" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning(
	Y( :sex, :height ),
	X( :picture ),
	Fit( Tabular Model( "Radial Basis Machine" ), Use Data As Knots( 1 ) )
);

```

#### VFlip Prob

**Syntax:** obj << VFlip Prob( number=0 )

**Description:** Probability of vertical flip "0" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( VFlip Prob( 0.2 ) ) );

```

#### Weight Decay

**Syntax:** obj << Weight Decay( number=0.0 )

**Description:** Specifies a penalty term multiplier of the L2 norm of the trainable parameters, which regularizes them in a way similar to ridge regression. "0.0" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Weight Decay( 0.0001 ) ) );

```

#### Worker Count

**Syntax:** obj << Worker Count( number=4 )

**Description:** Specifies the number of workers to use to load batches of data during training. A number near half the number of actual cores is usually near optimal. "4" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Worker Count( 0 ) ) );

```

#### X Slide Sigma

**Syntax:** obj << X Slide Sigma( number=0 )

**Description:** Standard deviation of Gaussian random shift along the X axis "0" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( X Slide Sigma( 5 ) ) );

```

#### Y Slide Sigma

**Syntax:** obj << Y Slide Sigma( number=0 )

**Description:** Standard deviation of Gaussian random shift along the Y axis "0" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Y Slide Sigma( 5 ) ) );

```

#### Yaw Sigma

**Syntax:** obj << Yaw Sigma( number=0 )

**Description:** Standard deviation of Gaussian yaw "0" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Yaw Sigma( 5 ) ) );

```


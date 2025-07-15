# XGBoost



## Associated Constructors

### XGBoost

**Syntax:** XGBoost(Y( columns ), X( columns ))

**Description:** Predictive modeling interface to eXtreme Gradient Boosted trees.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );

```

## Columns

### Censor

**Syntax:** obj &lt;&lt; Censor( column )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### Factor

**Syntax:** obj &lt;&lt; Factor( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### Freq

**Syntax:** obj &lt;&lt; Freq( column )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### Response

**Syntax:** obj &lt;&lt; Response( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### Validation

**Syntax:** obj &lt;&lt; Validation( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### Weight

**Syntax:** obj &lt;&lt; Weight( column )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### X

**Syntax:** obj &lt;&lt; X( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### Y

**Syntax:** obj &lt;&lt; Y( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );

```

## Item Messages

### Change Variables

**Syntax:** obj &lt;&lt; Change Variables

**Description:** Changes X, Y, and other variables for subsequent models.

### Compare

**Syntax:** obj &lt;&lt; Compare

**Description:** Updates the XGBoost comparison metrics.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit( Objective( 0 ) ) );
obj << Compare( Correlation( 1 ) );

```

### Fit

**Syntax:** obj &lt;&lt; Fit

**Description:** Fits an XGBoost model. You can specify XGBoost parameters and fitting specifications within this.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### Get Measures

**Syntax:** obj &lt;&lt; Get Measures

### Redo Analysis

**Syntax:** obj &lt;&lt; Redo Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
obj << Redo Analysis;

```

### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
obj << Relaunch Analysis;

```

### Show Details

**Syntax:** obj &lt;&lt; Show Details( state=0|1 )

**Description:** Shows more details.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Show Details( 1 ) );

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

### Copy ByGroup Script

**Syntax:** obj &lt;&lt; Copy ByGroup Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
obj << Copy Script;

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
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

**General**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
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
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Description:** Times the platform launch.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
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

**Syntax:** obj &lt;&lt; Report;Report( obj )

**Description:** Returns a reference to the report object.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Creates a JSL script to produce this analysis, and save it as a table property in the data table. You can specify a name for the script. The Append Suffix option appends a numeric suffix to the script name, which differentiates the script from an existing script with the same name. The Prompt option prompts the user to specify a script name. The Replace option replaces an existing script with the same name.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
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

**Syntax:** obj &lt;&lt; Title( "new title" )

**Description:** Sets the title of the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Description:** Returns a reference to the root node in the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

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

## XGBoost Compare

### Associated Constructors

#### XGBoost Compare

**Syntax:** XGBoost Compare

### Item Messages

#### AUC

**Syntax:** obj &lt;&lt; AUC( state=0|1 )

**Description:** Shows or hides the AUROC, which is the area under the receiver operating characteristic curve. On by default.

#### AUPRC

**Syntax:** obj &lt;&lt; AUPRC( state=0|1 )

**Description:** Area under the Precision Recall Curve On by default.

#### Accuracy

**Syntax:** obj &lt;&lt; Accuracy( state=0|1 )

**Description:** Shows or hides the accuracy, which is the proportion of correct classifications. On by default.

#### Censor

**Syntax:** obj &lt;&lt; Censor( state=0|1 )

**Description:** Shows or hides the Censor command On by default.

#### Concordance

**Syntax:** obj &lt;&lt; Concordance( state=0|1 )

**Description:** Shows or hides the concordance, which is the Harrell C-Index and measures strength of sorting efficiency On by default.

#### Correlation

**Syntax:** obj &lt;&lt; Correlation( state=0|1 )

**Description:** Shows or hides the Pearson correlation, which is a measure of the strength of the linear relationship. On by default.

#### F1

**Syntax:** obj &lt;&lt; F1( state=0|1 )

**Description:** Shows or hides the F1 Score, which is the harmonic average of precision and recall. On by default.

#### Features

**Syntax:** obj &lt;&lt; Features( state=0|1 )

**Description:** Shows or hides the Features column. On by default.

#### Freq

**Syntax:** obj &lt;&lt; Freq( state=0|1 )

**Description:** Shows or hides the Freq column. On by default.

#### H Measure

**Syntax:** obj &lt;&lt; H Measure( state=0|1 )

**Description:** Shows or hides the H Measure, which measures proportion improvement over baseline. On by default.

#### Hide All Models

**Syntax:** obj &lt;&lt; Hide All Models

**Description:** Hides all models.

#### LogLoss

**Syntax:** obj &lt;&lt; LogLoss( state=0|1 )

**Description:** Shows or hides the logarithm of the likelihood-based loss function. On by default.

#### MAE

**Syntax:** obj &lt;&lt; MAE( state=0|1 )

**Description:** Shows or hides the MAE, which is the mean absolute error. On by default.

#### MCC

**Syntax:** obj &lt;&lt; MCC( state=0|1 )

**Description:** Shows or hides the Matthews correlation coefficient, which is the Pearson correlation for binary variables. On by default.

#### Misclass

**Syntax:** obj &lt;&lt; Misclass( state=0|1 )

**Description:** Shows or hides the misclassification rate, which is the proportion of incorrect classifications. On by default.

#### Predictors

**Syntax:** obj &lt;&lt; Predictors( state=0|1 )

**Description:** Shows or hides the Predictors column. On by default.

#### Profit

**Syntax:** obj &lt;&lt; Profit( state=0|1 )

**Description:** Shows or hides the expected profit. On by default.

#### RMSE

**Syntax:** obj &lt;&lt; RMSE( state=0|1 )

**Description:** Shows or hides the RMSE, which is the root mean square error. On by default.

#### RSquare

**Syntax:** obj &lt;&lt; RSquare( state=0|1 )

**Description:** Shows or hides RSquare value, which is the proportion of variability explained. On by default.

#### Remove Hidden Models

**Syntax:** obj &lt;&lt; Remove Hidden Models

**Description:** Removes all models for which the Show box is not checked.

#### Remove Shown Models

**Syntax:** obj &lt;&lt; Remove Shown Models

**Description:** Removes all models for which the Show check box is checked and shows the remaining models.

#### Response

**Syntax:** obj &lt;&lt; Response( state=0|1 )

**Description:** Shows or hides the Response column. On by default.

#### Show All Models

**Syntax:** obj &lt;&lt; Show All Models

**Description:** Shows all models.

#### Training Metrics

**Syntax:** obj &lt;&lt; Training Metrics( state=0|1 )

**Description:** Shows or hides all training metrics. On by default.

#### Validation

**Syntax:** obj &lt;&lt; Validation( state=0|1 )

**Description:** Shows or hides the Validation column. On by default.

#### Validation Metrics

**Syntax:** obj &lt;&lt; Validation Metrics( state=0|1 )

**Description:** Shows or hides all validation metrics. On by default.

#### Weight

**Syntax:** obj &lt;&lt; Weight( state=0|1 )

**Description:** Shows or hides the Weight column. On by default.

## XGBoost Fit

### Associated Constructors

#### XGBoost Fit

**Syntax:** XGBoost Fit

### Item Messages

#### Actual by Predicted Plots

**Syntax:** obj &lt;&lt; Actual by Predicted Plots( state=0|1 )

**Description:** Shows or hides a plot using the training data with the predicted values on the X axis and actual values on the Y axis. On by default.

#### Autotune

**Syntax:** obj &lt;&lt; Autotune

**Description:** Creates a fast flexible filling design within min and max parameter settings to fit n models, where n is Number of Runs.

#### Confusion Matrices

**Syntax:** obj &lt;&lt; ( fit[number] &lt;&lt; Confusion Matrices( state=0|1 ) )

**Description:** Shows or hides a crosstabulation matrix of actual and predicted levels. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << XGBoost(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit
);
obj << (fit[1] << Confusion Matrices( 1 ));

```

#### Contour Profiler

**Syntax:** obj &lt;&lt; Contour Profiler

**Description:** Shows or hides interactive graphs of cross-sections of the prediction function.

#### Copy Parameters to Launch

**Syntax:** obj &lt;&lt; Copy Parameters to Launch

**Description:** Copies the parameters from this model to the model launch section.

#### Decision Thresholds

**Syntax:** obj &lt;&lt; Decision Thresholds( state=0|1 )

**Description:** Shows or hides decision threshold graphs and tables. On by default.

#### Fit Details

**Syntax:** obj &lt;&lt; Fit Details( state=0|1 )

**Description:** Shows or hides the statistics for the fitted model. On by default.

#### Generate Python Code

**Syntax:** obj &lt;&lt; Generate Python Code

**Description:** Creates Python code for training and scoring.

#### Importances

**Syntax:** obj &lt;&lt; Importances( state=0|1 )

**Description:** Shows or hides the importance statistics for each predictor. On by default.

#### Lift Curves

**Syntax:** obj &lt;&lt; Lift Curves( state=0|1 )

**Description:** Shows or hides the Lift Curve plot. A lift curve plots the lift versus the portion of the observations and provides another view of the predictive ability of a model.

#### Number of Design Points

**Syntax:** obj &lt;&lt; Number of Design Points( number=10 )

**Description:** Specifies the number of tuning design runs to perform. If you have a large problem, keep this value relatively small. "10" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( Number of Design Points( 10 ) ) );

```

#### Number of Inner Folds

**Syntax:** obj &lt;&lt; Number of Inner Folds( number=2 )

**Description:** Specifies the number of nested inner folds used during the autotune process. "2" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( Number of Inner Folds( 2 ) ) );

```

#### Objective

**Syntax:** obj &lt;&lt; Objective( "reg:squarederror"|"binary:logistic"|"binary:hinge"|"count:poisson"|"multi:softprob"|"rank:pairwise"|"rank:ndcg"|"rank:map"|"reg:gamma"|"reg:logistic"|"reg:pseudohubererror"|"reg:squaredlogerror"|"reg:tweedie"|"survival:cox"="reg:squarederror" )

**Description:** Specifies the function to be optimized for model fitting. The function must be consistent with the modeling type of the response. "reg:squarederror" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), objective( "reg:squarederror" ) );

```

#### Precision Recall Curves

**Syntax:** obj &lt;&lt; Precision Recall Curves( state=0|1 )

**Description:** Plots the trade-off between precision and recall for different classification thresholds. It is preferred in scenarios where class imbalances exist.

#### Profiler

**Syntax:** obj &lt;&lt; Profiler

**Description:** Shows or hides the prediction profiler, which is used to graphically explore the prediction equation by slicing it one factor at a time. The prediction profiler contains features for optimization.

#### Publish Prediction Formula

**Syntax:** obj &lt;&lt; Publish Prediction Formula

**Description:** Creates prediction formulas and saves them as formula column scripts in the Formula Depot platform.

#### ROC Curves

**Syntax:** obj &lt;&lt; ROC Curves( state=0|1 )

**Description:** Shows or hides the Receiver Operating Characteristic (ROC) curve for each level of the response variable. The ROC curve is a plot of sensitivity versus (1 - specificity).

#### Remove All But This Fit

**Syntax:** obj &lt;&lt; ( fit[number] &lt;&lt; Remove All But This Fit )

**Description:** Removes the reports and plots for all models except this one.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << XGBoost(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit
);
Wait( 2 );
obj << (Fit[1] << Remove All But This Fit);

```

#### Remove Fit

**Syntax:** obj &lt;&lt; ( fit[number] &lt;&lt; Remove Fit )

**Description:** Removes the entire model report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << XGBoost(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit
);
Wait( 2 );
obj << (Fit[1] << Remove Fit);

```

#### Save Predicteds

**Syntax:** obj &lt;&lt; Save Predicteds

**Description:** Saves the predicted values in a new column in the data table.

#### Save Prediction Formula

**Syntax:** obj &lt;&lt; Save Prediction Formula

**Description:** Saves the prediction formula in a new column in the data table. Calculations can be slow for large models.

#### Save SHAPs

**Syntax:** obj &lt;&lt; Save SHAPs

**Description:** Saves Shapley values to the data table. These values break down predictions into components for each predictor.

#### Surface Profiler

**Syntax:** obj &lt;&lt; Surface Profiler

**Description:** Shows or hides interactive graphs of cross-sections of the prediction function.

#### Tree Details

**Syntax:** obj &lt;&lt; Tree Details( state=0|1 )

**Description:** Shows or hides the breakdown of each tree split.

#### Tuning Design Table

**Syntax:** Tuning Design Table( "table name" )

**Description:** Specifies the name of an open JMP data table of parameter settings used to fit a series of models. The columns of this table must exactly match parameter names, and each row must contain values of these parameters to use for that model fit. Parameters that are not specified are set to their values from this dialog.

#### alpha

**Syntax:** obj &lt;&lt; alpha( number=0.0 )

**Description:** Specifies the L1 regularization term on weights. Increasing this value makes the model more conservative. This value must be nonnegative. "0.0" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( alpha( 0.0 ) ) );

```

#### alpha_max

**Syntax:** obj &lt;&lt; alpha_max( number=0.5 )

**Description:** Specifies the maximum L1 regularization term on weights. Increasing this value makes the model more conservative. This value must be nonnegative. "0.5" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( alpha_max( 2.0 ) ) );

```

#### alpha_min

**Syntax:** obj &lt;&lt; alpha_min( number=0.0 )

**Description:** Specifies the minimum L1 regularization term on weights. Increasing this value makes the model more conservative. This value must be nonnegative. "0.0" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( alpha_min( 0.0 ) ) );

```

#### base_score

**Syntax:** obj &lt;&lt; base_score( number=0.5 )

**Description:** Specifies the initial prediction score of all instances, which is the global bias. The mean of y is typically a good choice. "0.5" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( base_score( 0.5 ) ) );

```

#### booster

**Syntax:** obj &lt;&lt; booster( "gbtree"|"gblinear"|"dart"="gbtree" )

**Description:** Specifies which booster to use. "gbtree" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( booster( "gbtree" ) ) );

```

#### colsample_bylevel

**Syntax:** obj &lt;&lt; colsample_bylevel( number=1.0 )

**Description:** Specifies the proportion of columns to sample for each level. Sampling occurs once for every new depth level reached in a tree. "1.0" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( colsample_bylevel( 1.0 ) ) );

```

#### colsample_bynode

**Syntax:** obj &lt;&lt; colsample_bynode( number=1.0 )

**Description:** Specifies the proportion of columns to sample for each node (split). Sampling occurs once every time a new split is evaluated. "1.0" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( colsample_bynode( 1.0 ) ) );

```

#### colsample_bytree

**Syntax:** obj &lt;&lt; colsample_bytree( number=1.0 )

**Description:** Specifies the proportion of columns to sample when constructing each tree. Sampling occurs once for each tree. This value must be between 0 and 1. "1.0" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( colsample_bytree( 1.0 ) ) );

```

#### colsample_bytree_max

**Syntax:** obj &lt;&lt; colsample_bytree_max( number=1.0 )

**Description:** Specifies the maximum proportion of columns to sample when constructing each tree. Sampling occurs once for each tree. This value must be between 0 and 1. "1.0" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( colsample_bytree_max( 1.0 ) ) );

```

#### colsample_bytree_min

**Syntax:** obj &lt;&lt; colsample_bytree_min( number=0.5 )

**Description:** Specifies the minimum proportion of columns to sample when constructing each tree. Sampling occurs once for each tree. This value must be between 0 and 1. "0.5" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( colsample_bytree_min( 0.3 ) ) );

```

#### eval_metric

**Syntax:** obj &lt;&lt; eval_metric( text )

**Description:** Specifies the metric shown in the iteration history plot but does not affect the actual model fit. Leave this value blank for the default metric corresponding to the objective function, or specify one of the following: rmse, rmsle, mae, logloss, error, error@t, merror, auc, aucpr, ndcg, map, ndcg@n, map@n, ndcg-, map-, ndcg@n-, map@n-, poisson-nloglik, gamma-nloglik, cox-nloglik, gamma-deviance, tweedie-nloglik.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( eval_metric( rmse ) ) );

```

#### feature_selector

**Syntax:** obj &lt;&lt; feature_selector( "cyclic"|"shuffle"|"greedy"|"thrifty"="cyclic" )

**Description:** Specifies the feature selection and ordering method for the linear booster. "cyclic" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost(
	Y( :Weight ),
	X( :Height ),
	Booster( "gblinear" ),
	Fit( feature_selector( "cyclic" ) )
);

```

#### gamma

**Syntax:** obj &lt;&lt; gamma( number=0.0 )

**Description:** Specifies the minimum loss reduction required to make a further partition on a leaf node of the tree. "0.0" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( Gamma( 0.0 ) ) );

```

#### grow_policy

**Syntax:** obj &lt;&lt; grow_policy( "depthwise"|"lossguide"="depthwise" )

**Description:** Specifies the method used to add new nodes to trees. Currently, this option applies only when tree_method=hist. "depthwise" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( grow_policy( "depthwise" ) ) );

```

#### interaction_constraints

**Syntax:** obj &lt;&lt; interaction_constraints( text )

**Description:** Specifies feature interaction constraints as a nested list of feature indices using brackets. Features grouped together can interact only with each other.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Age << Set Modeling Type( "Continuous" );
XGBoost( Y( :Weight ), X( :Age, :Height ), Fit( interaction_constraints( "[[0,1]]" ) ) );

```

#### iterations

**Syntax:** obj &lt;&lt; iterations( number=30 )

**Description:** Specifies the number of boosting iterations. "30" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( iterations( 100 ) ) );

```

#### iterations_max

**Syntax:** obj &lt;&lt; iterations_max( number=100 )

**Description:** Specifies the maximum number of boosting iterations. "100" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( iterations_max( 300 ) ) );

```

#### iterations_min

**Syntax:** obj &lt;&lt; iterations_min( number=20 )

**Description:** Specifies the minimum number of boosting iterations. "20" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( iterations_min( 20 ) ) );

```

#### lambda

**Syntax:** obj &lt;&lt; lambda( number=1.0 )

**Description:** Specifies the L2 regularization term on weights. Increasing this value makes the model more conservative. This value must be nonnegative. "1.0" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( lambda( 1.0 ) ) );

```

#### lambda_max

**Syntax:** obj &lt;&lt; lambda_max( number=2.0 )

**Description:** Specifies the maximum L2 regularization term on weights. Increasing this value makes the model more conservative. This value must be nonnegative. "2.0" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( lambda_max( 2.0 ) ) );

```

#### lambda_min

**Syntax:** obj &lt;&lt; lambda_min( number=0.0 )

**Description:** Specifies the minimum L2 regularization term on weights. Increasing this value makes the model more conservative. This value must be nonnegative. "0.0" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( lambda_min( 0.0 ) ) );

```

#### learning_rate

**Syntax:** obj &lt;&lt; learning_rate( number=0.3 )

**Description:** Specifies the learning rate. Smaller learning rates tend to fit better but require more iterations to converge, whereas larger learning rates fit faster. "0.3" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( learning_rate( 0.3 ) ) );

```

#### learning_rate_max

**Syntax:** obj &lt;&lt; learning_rate_max( number=0.4 )

**Description:** Specifies the maximum learning rate. Smaller learning rates tend to fit better but require more iterations to converge, whereas larger learning rates fit faster. "0.4" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( learning_rate_max( 0.4 ) ) );

```

#### learning_rate_min

**Syntax:** obj &lt;&lt; learning_rate_min( number=0.05 )

**Description:** Specifies the minimum learning rate. Smaller learning rates tend to fit better but require more iterations to converge, whereas larger learning rates fit faster. "0.05" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( learning_rate_min( 0.05 ) ) );

```

#### max_bin

**Syntax:** obj &lt;&lt; max_bin( number=256 )

**Description:** Specifies the maximum number of discrete bins into which to bucket continuous features. This option applies only for tree_method=hist. "256" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( max_bin( 256 ) ) );

```

#### max_delta_step

**Syntax:** obj &lt;&lt; max_delta_step( number=0.0 )

**Description:** Specifies the maximum delta step that each leaf output can take. "0.0" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( max_delta_step( 0.0 ) ) );

```

#### max_depth

**Syntax:** obj &lt;&lt; max_depth( number=6 )

**Description:** Specifies the maximum depth of the tree. This value must be an integer. Complexity increases as depth increases. Models with larger max_depth have a higher risk of overfitting. "6" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( max_depth( 6 ) ) );

```

#### max_depth_max

**Syntax:** obj &lt;&lt; max_depth_max( number=8 )

**Description:** Specifies the maximum depth of tree maximum. This value must be an integer. Complexity increases as depth increases. Models with depths of 2^depth and larger have higher risk of overfitting. "8" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( max_depth_max( 9 ) ) );

```

#### max_depth_min

**Syntax:** obj &lt;&lt; max_depth_min( number=1 )

**Description:** Specifies the maximum depth of tree minimum. This value must be an integer. Complexity increases as depth increases. Models with depths of 2^depth and larger have higher risk of overfitting. "1" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( max_depth_min( 3 ) ) );

```

#### max_leaves

**Syntax:** obj &lt;&lt; max_leaves( number=0 )

**Description:** Specifies the maximum number of nodes to be added. This option applies only for grow_policy=lossguide. "0" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( max_leaves( 0 ) ) );

```

#### min_child_weight

**Syntax:** obj &lt;&lt; min_child_weight( number=1.0 )

**Description:** Specifies the minimum sum of instance weight (Hessian) needed in a child. This value is the minimum size of each leaf. "1.0" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( min_child_weight( 1.0 ) ) );

```

#### min_child_weight_max

**Syntax:** obj &lt;&lt; min_child_weight_max( number=3.0 )

**Description:** Specifies the maximum sum of instance weight (Hessian) needed in a child. This value is the maximum size of each leaf. "3.0" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( min_child_weight_max( 10.0 ) ) );

```

#### min_child_weight_min

**Syntax:** obj &lt;&lt; min_child_weight_min( number=1.0 )

**Description:** Specifies the minimum sum of instance weight (Hessian) needed in a child. This value is the minimum size of each leaf. "1.0" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( min_child_weight_min( 1.0 ) ) );

```

#### monotone_constraints

**Syntax:** obj &lt;&lt; monotone_constraints( text )

**Description:** Specifies monotonicity constraints for each feature. The constraints must be specified using a comma-separated list of values within parentheses, where -1 indicates negative, 1 indicates positive, and 0 indicates no constraint.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Age << Set Modeling Type( "Continuous" );
XGBoost( Y( :Weight ), X( :Age, :Height ), Fit( monotone_constraints( "(1,1)" ) ) );

```

#### normalize_type

**Syntax:** obj &lt;&lt; normalize_type( "tree"|"forest"="tree" )

**Description:** Specifies the type of normalization algorithm for the DART booster. "tree" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Booster( "dart" ), Fit( normalize_type( "tree" ) ) );

```

#### nthread

**Syntax:** obj &lt;&lt; nthread( number=0 )

**Description:** Specifies the number of parallel threads used to run XGBoost. By default, all available threads are used. "0" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( nthread( 8 ) ) );

```

#### num_parallel_tree

**Syntax:** obj &lt;&lt; num_parallel_tree( number=1 )

**Description:** Specifies the number of boosted trees to grow in parallel. Then the results are averaged. "1" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( num_parallel_tree( 1 ) ) );

```

#### one_drop

**Syntax:** obj &lt;&lt; one_drop( number=0 )

**Description:** When this flag is enabled in the DART booster, at least one tree is always dropped during the dropout. "0" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( booster( "dart" ), one_drop( 0 ) ) );

```

#### predictor

**Syntax:** obj &lt;&lt; predictor( "auto"|"cpu_predictor"|"gpu_predictor"="auto" )

**Description:** Specifies the type of predictor algorithm. "auto" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( predictor( "cpu_predictor" ) ) );

```

#### process_type

**Syntax:** obj &lt;&lt; process_type( "default"|"update"="default" )

**Description:** Specifies the type of boosting process to run. "default" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( process_type( "default" ) ) );

```

#### rate_drop

**Syntax:** obj &lt;&lt; rate_drop( number=0.0 )

**Description:** Specifies the dropout rate for the DART booster. "0.0" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( booster( "dart" ), rate_drop( 0.0 ) ) );

```

#### refresh_leaf

**Syntax:** obj &lt;&lt; refresh_leaf( number=1 )

**Description:** Specifies the parameter of the refresh updater. If set to 1, leaves and nodes updated. If set to 0, only nodes are updated. "1" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( refresh_leaf( 1 ) ) );

```

#### sample_type

**Syntax:** obj &lt;&lt; sample_type( "uniform"|"weighted"="uniform" )

**Description:** Specifies the type of sampling algorithm for the DART booster. "uniform" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Booster( "dart" ), Fit( sample_type( "uniform" ) ) );

```

#### scale_pos_weight

**Syntax:** obj &lt;&lt; scale_pos_weight( number=1.0 )

**Description:** Specifies the balance of positive and negative weights, which are useful for unbalanced classes. A typical value to consider is sum(negative instances) / sum(positive instances). "1.0" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( scale_posweight( 1.0 ) ) );

```

#### seed

**Syntax:** obj &lt;&lt; seed( number=0 )

**Description:** Specifies the seed for the random number generator. Set this value for reproducibility of the results. "0" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( seed( 0 ) ) );

```

#### sketch_eps

**Syntax:** obj &lt;&lt; sketch_eps( number=0.03 )

**Description:** Used only for tree_method=approx, this value approximately translates into (1 / sketch_eps) = number of bins. "0.03" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( sketch_eps( 0.03 ) ) );

```

#### skip_drop

**Syntax:** obj &lt;&lt; skip_drop( number=0.0 )

**Description:** Specifies the probability of skipping the dropout procedure during a DART boosting iteration. "0.0" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( booster( "dart" ), skip_drop( 0.0 ) ) );

```

#### subsample

**Syntax:** obj &lt;&lt; subsample( number=1.0 )

**Description:** Specifies the proportion of rows to sample during each iteration. This value must be between 0 and 1. This is a type of bagging. "1.0" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( subsample( 1.0 ) ) );

```

#### subsample_max

**Syntax:** obj &lt;&lt; subsample_max( number=1.0 )

**Description:** Specifies the maximum proportion of rows to sample during each iteration. This value must be between 0 and 1. This is a type of bagging. "1.0" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( subsample_max( 1.0 ) ) );

```

#### subsample_min

**Syntax:** obj &lt;&lt; subsample_min( number=0.5 )

**Description:** Specifies the minimum proportion of rows to sample during each iteration. This value must be between 0 and 1. This is a type of bagging. "0.5" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( subsample_min( 0.3 ) ) );

```

#### top_k

**Syntax:** obj &lt;&lt; top_k( number=256 )

**Description:** Specifies the number of top features to select in greedy and thrifty feature selector. This option applies only for the gblinear booster. "256" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( booster( "gblinear" ), top_k( 0 ) ) );

```

#### tree_method

**Syntax:** obj &lt;&lt; tree_method( "auto"|"exact"|"approx"|"hist"|"gpu_exact"|"gpu_hist"="auto" )

**Description:** Specifies the tree construction algorithm used in XGBoost. "auto" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( tree_method( "auto" ) ) );

```

#### tweedie_variance_power

**Syntax:** obj &lt;&lt; tweedie_variance_power( number=1.5 )

**Description:** Specifies the power of the Tweedie distribution. This value must be between 1 and 2. This option applies only for objective=reg:tweedie. "1.5" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost(
	Y( :Weight ),
	X( :Height ),
	Fit( objective( "reg:tweedie" ), tweedie_variance_power( 1.5 ) )
);

```

#### updater

**Syntax:** obj &lt;&lt; updater( text )

**Description:** Specifies the tree updater to run for the gbtree booster. Specify one of the following: grow_colmaker, distcol, grow_histmaker, grow_local_histmaker, grow_skmaker, sync, refresh, prune. For the gblinear booster, specify either shotgun or coord_descent.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( updater( "grow_colmaker" ) ) );

```


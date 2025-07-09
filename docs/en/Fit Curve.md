# Fit Curve



## ANOM for Estimates

### Point Options

**Syntax:** obj << ANOM( 1, Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" ) );

scrobj << Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" )

**Description:** Specifies the drawing style of the points in the chart. You can choose between vertical needles, connected points, and points only. By default, the chart is drawn with needles that connect the points to the horizontal line that is drawn at the average.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM( 1, Point Options( "Show Only Points" ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;
scrobj << Point Options( "Show Connected Points" );

```

### Set Alpha Level

**Syntax:** obj << ANOM( 1, Set Alpha Level( alpha ) );

scrobj << Set Alpha Level( alpha )

**Description:** Changes the alpha level used to compute the decision limits.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = Oneway( Y( :y ), X( :Drug ) );
obj << ANOM( 1, Set Alpha Level( 0.1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;
scrobj << Set Alpha Level( 0.05 );

```

### Show Center Line

**Syntax:** obj << ANOM( 1, Show Center Line( state=0|1 ) );

scrobj << Show Center Line( state=0|1 )

**Description:** Shows or hides the center line (overall mean) on the ANOM chart. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM( 1, Show Center Line( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;
scrobj << Show Center Line( 1 );

```

### Show Decision Limit Shading

**Syntax:** obj << ANOM( 1, Show Decision Limit Shading( state=0|1 ) );

scrobj << Show Decision Limit Shading( state=0|1 )

**Description:** Shows or hides the decision limit shading for the ANOM chart. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM( 1, Show Decision Limit Shading( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;
scrobj << Show Decision Limit Shading( 1 );

```

### Show Decision Limits

**Syntax:** obj << ANOM( 1, Show Decision Limits( state=0|1 ) );

scrobj << Show Decision Limits( state=0|1 )

**Description:** Shows or hides the decision limit lines for the ANOM chart. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM( 1, Show Decision Limits( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;
scrobj << Show Decision Limits( 1 );

```

### Show Summary Report

**Syntax:** obj << ANOM( 1, Show Summary Report( state=0|1 ) );

scrobj << Show Summary Report( state=0|1 )

**Description:** Shows or hides a report that contains the group means and the decision limits.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM( 1, Show Summary Report( 1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;
scrobj << Show Summary Report( 0 );

```

## Equivalence with Ratios

### Set Alpha Level

**Syntax:** obj << Fit Command( Equivalence Test(..., Equivalence with Ratios( 1, Set Alpha Level( number )))); 

obj << (Fit[name|number] << Equivalence Test(..., Equivalence with Ratios( 1, Set Alpha Level( number ))))

**Description:** Sets the alpha level that is used to compute the confidence intervals on the equivalence chart.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P(
	Equivalence Test(
		Reference Group( "Standard" ),
		Equivalence with Ratios( 1, Set Alpha Level( 0.1 ) ),
		Equivalence with Ratios( 1, Set Alpha Level( 0.1 ) ),
		Equivalence with Ratios( 1, Set Alpha Level( 0.1 ) )
	)
);

```

### Set Decision Lines

**Syntax:** obj << Fit Command( Equivalence Test(..., Equivalence with Ratios( 1, Set Decision Lines( lower, upper )))); 

obj << (Fit[name|number] << Equivalence Test(..., Equivalence with Ratios( 1, Set Decision Lines( lower, upper ))))

**Description:** Sets the lower and upper decision lines on the equivalence chart.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P(
	Equivalence Test(
		Reference Group( "Standard" ),
		Equivalence with Ratios( 1, Set Decision Lines( 0.9, 1.1 ) ),
		Equivalence with Ratios( 1, Set Decision Lines( 0.9, 1.1 ) ),
		Equivalence with Ratios( 1, Set Decision Lines( 0.9, 1.1 ) )
	)
);

```

### Show Center Line

**Syntax:** obj << Fit Command( Equivalence Test(..., Equivalence with Ratios( 1, Show Center Line( state=0|1 )))); 

obj << (Fit[name|number] << Equivalence Test(..., Equivalence with Ratios( 1, Show Center Line( state=0|1 ))))

**Description:** Shows or hides the center line on the equivalence chart. On by default.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P(
	Equivalence Test(
		Reference Group( "Standard" ),
		Equivalence with Ratios( 1, Show Center Line( 0 ) ),
		Equivalence with Ratios( 1, Show Center Line( 1 ) ),
		Equivalence with Ratios( 1, Show Center Line( 0 ) )
	)
);

```

### Show Decision Limit Shading

**Syntax:** obj << Fit Command( Equivalence Test(..., Equivalence with Ratios( 1, Show Decision Limit Shading( state=0|1 )))); 

obj << (Fit[name|number] << Equivalence Test(..., Equivalence with Ratios( 1, Show Decision Limit Shading( state=0|1 ))))

**Description:** Shows or hides the decision limit shading on the equivalence chart. On by default.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P(
	Equivalence Test(
		Reference Group( "Standard" ),
		Equivalence with Ratios( 1, Show Decision Limit Shading( 0 ) ),
		Equivalence with Ratios( 1, Show Decision Limit Shading( 1 ) ),
		Equivalence with Ratios( 1, Show Decision Limit Shading( 0 ) )
	)
);

```

### Show Decision Limits

**Syntax:** obj << Fit Command( Equivalence Test(..., Equivalence with Ratios( 1, Show Decision Limits( state=0|1 )))); 

obj << (Fit[name|number] << Equivalence Test(..., Equivalence with Ratios(1, Show Decision Limits( state=0|1 ))))

**Description:** Shows or hides the decision limit lines on the equivalence chart. On by default.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P(
	Equivalence Test(
		Reference Group( "Standard" ),
		Equivalence with Ratios( 1, Show Decision Limits( 0 ) ),
		Equivalence with Ratios( 1, Show Decision Limits( 1 ) ),
		Equivalence with Ratios( 1, Show Decision Limits( 0 ) )
	)
);

```

### Show Summary Report

**Syntax:** obj << Fit Command( Equivalence Test(..., Equivalence with Ratios( 1, Show Summary Report( state=0|1 )))); 

obj << (Fit[name|number] << Equivalence Test(..., Equivalence with Ratios( 1, Show Summary Report( state=0|1 ))))

**Description:** Shows or hides the Equivalence Summary report that contains the parameter estimates, the decision limits, and whether the parameter exceeded the limits.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P(
	Equivalence Test(
		Reference Group( "Standard" ),
		Equivalence with Ratios( 1, Show Summary Report( 1 ) ),
		Equivalence with Ratios( 1, Show Summary Report( 1 ) ),
		Equivalence with Ratios( 1, Show Summary Report( 1 ) )
	)
);

```

## Fit Curve CDOE

### CDOE Fit Plot

**Syntax:** scrobj << CDOE Fit Plot( state=0|1 )

**Description:** Shows or hides a plot of the fitted values. If a Group variable is specified, there is also a grid of plots of the fitted values for each level of the Group variable. On by default.

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = Fit Curve(
	Y( :"Size/nm"n ),
	X( :Time ),
	Group( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	Fit Biexponential 5P,
	SendToReport(
		Dispatch( {"Fit Curve"}, "Model Comparison", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve"}, "Plot", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Group Summary", OutlineBox,
			{Close( 1 )}
		),
		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Plot", OutlineBox, {Close( 1 )} )
	)
);
obj << (Fit["Biexponential 5P"] << Curve DOE Analysis( 1 ));
Report( obj )["CDOE Fit"] << Close( 0 );
Wait( 2 );
scrobj = (Report( obj )["Curve DOE Analysis"] << get scriptable object);
scrobj << CDOE Fit Plot( 0 );

```

### CDOE Profiler

**Syntax:** scrobj << CDOE Profiler( state=0|1 )

**Description:** Shows or hides the CDOE Profiler, which enables you to explore how the response changes based on the supplementary variables. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = Fit Curve(
	Y( :"Size/nm"n ),
	X( :Time ),
	Group( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	Fit Biexponential 5P,
	SendToReport(
		Dispatch( {"Fit Curve"}, "Model Comparison", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve"}, "Plot", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Group Summary", OutlineBox,
			{Close( 1 )}
		),
		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Plot", OutlineBox, {Close( 1 )} )
	)
);
obj << (Fit["Biexponential 5P"] << Curve DOE Analysis( 1 ));
Wait( 2 );
scrobj = (Report( obj )["Curve DOE Analysis"] << get scriptable object);
scrobj << CDOE Profiler( 0 );

```

### Diagnostic Plots

**Syntax:** scrobj << Diagnostic Plots( state=0|1 )

**Description:** Shows or hides actual by predicted and residual plots for the response variable. On by default.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = Fit Curve(
	Y( :"Size/nm"n ),
	X( :Time ),
	Group( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	Fit Biexponential 5P,
	SendToReport(
		Dispatch( {"Fit Curve"}, "Model Comparison", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve"}, "Plot", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Group Summary", OutlineBox,
			{Close( 1 )}
		),
		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Plot", OutlineBox, {Close( 1 )} )
	)
);
obj << (Fit["Biexponential 5P"] << Curve DOE Analysis( 1 ));
Report( obj )["Diagnostic Plots"] << Close( 0 );
Wait( 2 );
scrobj = (Report( obj )["Curve DOE Analysis"] << get scriptable object);
scrobj << Diagnostic Plots( 0 );

```

### Generalized Regression for Model Parameters

**Syntax:** scrobj << Generalized Regression for Model Parameters( state=0|1 )

**Description:** Shows or hides the Generalized Regression reports for each model parameter. On by default.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = Fit Curve(
	Y( :"Size/nm"n ),
	X( :Time ),
	Group( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	Fit Biexponential 5P,
	SendToReport(
		Dispatch( {"Fit Curve"}, "Model Comparison", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve"}, "Plot", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Group Summary", OutlineBox,
			{Close( 1 )}
		),
		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Plot", OutlineBox, {Close( 1 )} )
	)
);
obj << (Fit["Biexponential 5P"] << Curve DOE Analysis( 1 ));
Report( obj )["Generalized Regression for Model Parameters"] << Close( 0 );
Wait( 2 );
scrobj = (Report( obj )["Curve DOE Analysis"] << get scriptable object);
scrobj << Generalized Regression for Model Parameters( 0 );

```

### Save Prediction Formula

**Syntax:** scrobj << Save Prediction Formula

**Description:** Saves a new formula column to the original data table. The new column contains the prediction formula for the response.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = Fit Curve(
	Y( :"Size/nm"n ),
	X( :Time ),
	Group( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	Fit Biexponential 5P,
	SendToReport(
		Dispatch( {"Fit Curve"}, "Model Comparison", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve"}, "Plot", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Group Summary", OutlineBox,
			{Close( 1 )}
		),
		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Plot", OutlineBox, {Close( 1 )} )
	)
);
obj << (Fit["Biexponential 5P"] << Curve DOE Analysis( 1 ));
scrobj = (Report( obj )["Curve DOE Analysis"] << get scriptable object);
scrobj << Save Prediction Formula;

```

## Fit

### Area Under Curve

**Syntax:** obj << Fit Command( Area Under Curve( state=0|1 )); 

obj << (Fit[number|name] << Area Under Curve( state=0|1 ))

**Description:** Calculates the area under the fitted prediction function.

```js

Names Default To Here( 1 );
Random Reset( 7483 );
xd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
yd = J( 12, 1, . );
For( i = 1, i <= 12, i++,
	yd[i] = 10 * Normal Density( (xd[i] - 6) / 2 ) + Random Normal() * .1
);
dt = As Table( xd || yd );
Column( dt, 1 ) << set name( "x" );
Column( dt, 2 ) << set name( "y" );
obj = dt << Fit Curve( Y( :Y ), X( :X ) );
obj << Fit Gaussian Peak( Area Under Curve( 1 ) );

```

### Compare Parameter Estimates

**Syntax:** obj << Fit Command( Compare Parameter Estimates( state=0|1 )); 

obj << (Fit[number|name] << Compare Parameter Estimates( state=0|1 ))

**Description:** Compares the parameter estimate from each group to the overall mean. This comparison is done for each parameter.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P( Compare Parameter Estimates( 1 ) );

```

### Curve DOE Analysis

**Syntax:** obj << (Fit[number|name] << Curve DOE Analysis( state=0|1 ))

**Description:** Launches a Generalized Regression report within the Fit Curve platform. A generalized regression model is fit to each parameter of the model using the supplementary variables as model effects.

**JMP Version Added:** 16

**Example 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, Dissolution 360 ),
	Group( :Batch ),
	Z( :Polymer A, :Polymer B, :Total Polymer, :Compression Force ),
	Multivariate Distance( Alpha( 0.1 ), Reference Level( "R01" ) ),
	SendToReport(
		Dispatch( {"Fit Curve"}, "Plot", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve", "Multivariate Distance"}, "Comparisons", OutlineBox,
			{Close( 1 )}
		)
	)
);
obj << (fit[1] << Curve DOE Analysis( 1 ));

```

**Example 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = Fit Curve(
	Y( :"Size/nm"n ),
	X( :Time ),
	Group( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	Fit Biexponential 5P,
	SendToReport(
		Dispatch( {"Fit Curve"}, "Model Comparison", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve"}, "Plot", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Group Summary", OutlineBox,
			{Close( 1 )}
		),
		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Plot", OutlineBox, {Close( 1 )} )
	)
);
obj << (Fit["Biexponential 5P"] << Curve DOE Analysis( 1 ));

```

### Custom Inverse Prediction

**Syntax:** obj << Fit Command( Custom Inverse Prediction( Response( value ))); 

obj << (Fit[number|name] << Custom Inverse Prediction( Response( value )))

**Description:** Predicts an X value for the specified response value.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P( Custom Inverse Prediction( Response( 0.9 ) ) );

```

### Equivalence Test

**Syntax:** obj << Fit Command( Equivalence Test( Reference Group( column ))); 

obj << (Fit[number|name] << Equivalence Test( Reference Group( column )))

**Description:** Tests whether the fitted curve for each group is practically equivalent to the fitted curve from a reference group.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P( Equivalence Test( Reference Group( "Standard" ) ) );

```

### Inflection Point

**Syntax:** obj << Fit Command( Inflection Point( state=0|1 )); 

obj << (Fit[number|name] << Inflection Point( state=0|1 ))

**Description:** Shows or hides a report of the inflection point estimates for the model. This option is available only for Weibull Growth, Logistic 4P Rodbard, and Logistic 5P models.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 5P( Inflection Point( 1 ) );

```

### Make Parameter Table

**Syntax:** obj << Fit Command( Make Parameter Table ); 

obj << (Fit[number|name] << Make Parameter Table)

**Description:** Creates a summary table of parameter estimates.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P( Make Parameter Table );

```

### Peak Response

**Syntax:** obj << Fit Command( Peak Response( state=0|1 ); 

obj << (Fit[number|name] << Peak Response( state=0|1 ))

**Description:** Calculates the estimate of the Y variable at the peak of the fitted curve. This option is available for Cell Growth 4P and One Compartment models.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );
dat = [0 0, .27 1.72, .52 7.91, 1 8.31, 1.92 8.33, 3.5 6.85, 5.02 6.08, 7.03 5.4, 9 4.55,
12 3.01, 24.3 .9];
dt = As Table( dat );
Column( dt, 1 ) << set name( "time" );
Column( dt, 2 ) << set name( "concentration" );
obj = dt << Fit Curve( Y( :concentration ), X( :time ) );
obj << Fit One Compartment Oral Dose( Peak Response( 1 ) );

```

### Plot Actual by Predicted

**Syntax:** obj << Fit Command( Plot Actual by Predicted( state=0|1 ); 

obj << (Fit[number|name] << Plot Actual by Predicted( state=0|1 ))

**Description:** Shows or hides a plot with the actual response values on the vertical axis and the predicted values on the horizontal axis. In good fits, points are near the diagonal. You can see which points are far from the diagonal, look for patterns, and visualize the test.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
fc = Fit Curve( Y( :weight ), X( :height ), Fit Linear() );
fc << (fit[1] << Plot Actual by Predicted( 1 ));

```

### Plot Residual by Predicted

**Syntax:** obj << Fit Command( Plot Residual by Predicted( state=0|1 ); 

obj << (Fit[number|name] << Plot Residual by Predicted( state=0|1 ))

**Description:** Shows or hides a plot with the residuals on the vertical axis and the row number of the horizontal axis.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
fc = Fit Curve( Y( :weight ), X( :height ), Fit Linear() );
fc << (fit[1] << Plot Residual by Predicted( 1 ));

```

### Profiler

**Syntax:** obj << Fit Command( Profiler( state=0|1 )); 

obj << (Fit[number|name] << Profiler( state=0|1 ))

**Description:** Shows or hides a profiler of the fitted prediction function and its first and second derivatives.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve(
	Y( :Toxicity ),
	X( :log Conc ),
	Group( :formulation ),
	Fit Logistic 4P
);
obj << (Fit["Logistic 4P"] << Profiler( 1 ));

```

### Remove Fit

**Syntax:** obj << (Fit[number|name]<<Remove Fit)

**Description:** Removes the specified fit from the report.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
Wait( 2 );
obj << (Fit[1] << Remove Fit);

```

### Save Bootstrap Results

**Syntax:** obj << Fit Command( Save Bootstrap Results ); 

obj << (Fit[number] << Save Bootstrap Results)

**Description:** Saves columns to a new data table. The data table contains the bootstrap results from either an F1 or an F2 analysis.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, Dissolution 360 ),
	Group( :Batch ),
	Z( :Polymer A, :Polymer B, :Total Polymer, :Compression Force ),
	F2 Analysis(
		Alpha( 0.1 ),
		Reference Level( "R01" ),
		Bootstrap Samples( 2500 ),
		Random Seed( 1234 )
	),
	SendToReport(
		Dispatch( {"Fit Curve"}, "Plot", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve", "F2 Analysis"}, "Comparisons", OutlineBox, {Close( 1 )} )
	)
);
obj << (fit[1] << Save Bootstrap Results);

```

### Save First Derivative

**Syntax:** obj << Fit Command( Save First Derivative ); 

obj << (Fit[number|name] << Save First Derivative)

**Description:** Saves a new formula column to the original data table. The new column contains the formula for the first derivative of the prediction.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P( Save First Derivative );

```

### Save Inverse Prediction Formula

**Syntax:** obj << Fit Command( Save Inverse Prediction Formula ); 

obj << (Fit[number|name] << Save Inverse Prediction Formula)

**Description:** Saves a new formula column to the original data table. The new column contains the formula for the inverse function of the fitted model.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P( Save Inverse Prediction Formula );

```

### Save Parametric Prediction Formula

**Syntax:** obj << Fit Command( Save Parametric Prediction Formula ); 

obj << (Fit[number|name] << Save Parametric Prediction Formula)

**Description:** Saves a new formula column to the original data table. The new column contains the prediction formula expressed in a way that can be used by the Nonlinear platform.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve(
	Y( :Toxicity ),
	X( :log Conc ),
	Group( :formulation ),
	Fit Logistic 4P
);
obj << (Fit["Logistic 4P"] << Save Parametric Prediction Formula);

```

### Save Prediction Formula

**Syntax:** obj << Fit Command( Save Prediction Formula ); 

obj << (Fit[number|name] << Save Prediction Formula)

**Description:** Saves a new formula column to the original data table. The new column contains the prediction formula for the current parameter estimates.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve(
	Y( :Toxicity ),
	X( :log Conc ),
	Group( :formulation ),
	Fit Logistic 4P
);
obj << (Fit[1] << Save Prediction Formula);

```

### Save Residual Formula

**Syntax:** obj << Fit Command( Save Residual Formula ); 

obj << (Fit[number|name] << Save Residual Formula)

**Description:** Saves a new formula column to the original data table. The new column contains a formula for the residuals.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P( Save Residual Formula );

```

### Save Stacked Data

**Syntax:** obj << Fit Command( Save Stacked Data ); 

obj << (Fit[number|name] << Save Stacked Data)

**Description:** Saves columns to a new data table. The data table contains the original data in the stacked format as well as a column for the predicted values of the response and a column for the residuals.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = dt << Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, :Dissolution 360 ),
	Group( :Batch )
);
obj << Fit Higuchi( Save Stacked Data );

```

### Save Std Error of First Derivative

**Syntax:** obj << Fit Command( Save Std Error of First Derivative ); 

obj << (Fit[number|name] << Save Std Error of First Derivative)

**Description:** Saves a new column to the original data table. The new column contains the formula for the standard error of the first derivative of the prediction.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P( Save First Derivative, Save Std Error of First Derivative );

```

### Save Std Error of Predicted

**Syntax:** obj << Fit Command( Save Std Error of Predicted ); 

obj << (Fit[number|name] << Save Std Error of Predicted)

**Description:** Saves a new formula column to the original data table. The new column contains the formula to calculate the standard errors of the predictions.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P( Save Prediction Formula, Save Std Error of Predicted );

```

### Save Studentized Residual Formula

**Syntax:** obj << Fit Command( Save Studentized Residual Formula ); 

obj << (Fit[number|name] << Save Studentized Residual Formula)

**Description:** Saves a new formula column to the original data table. The new column contains the formula for the Studentized residuals, which are standard residuals divided by their estimated standard deviations.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P( Save Studentized Residual Formula );

```

### Test Parallelism

**Syntax:** obj << Fit Command( Test Parallelism( state=0|1 )); 

obj << (Fit[number|name] << Test Parallelism( state=0|1 ))

**Description:** Tests whether the fitted curves have a similar shape across groups.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P( Test Parallelism( 1 ) );

```

### Time to Peak Response

**Syntax:** obj << Fit Command( Time to Peak Response( state=0|1 )); 

obj << (Fit[number|name] << Time to Peak Response( state=0|1 ))

**Description:** Calculates the estimate of the X variable at the peak of the fitted curve. This option is available only for Cell Growth 4P and One Compartment models.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );
dat = [0 0, .27 1.72, .52 7.91, 1 8.31, 1.92 8.33, 3.5 6.85, 5.02 6.08, 7.03 5.4, 9 4.55,
12 3.01, 24.3 .9];
dt = As Table( dat );
Column( dt, 1 ) << set name( "time" );
Column( dt, 2 ) << set name( "concentration" );
obj = dt << Fit Curve( Y( :concentration ), X( :time ) );
obj << Fit One Compartment Oral Dose( Time to Peak Response( 1 ) );

```

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

**Syntax:** obj = Fit Curve(...<By( column(s) )>...)

**Description:** Performs a separate analysis for each level of the specified column.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Curve(
	Y( :Toxicity ),
	X( :log Conc ),
	Group( :formulation ),
	By( _bycol )
);
obj << Fit Logistic 4P;

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

### Copy ByGroup Script

**Syntax:** obj << Copy ByGroup Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Curve(
	Y( :Toxicity ),
	X( :log Conc ),
	Group( :formulation ),
	By( _bycol )
);
obj << Fit Logistic 4P;
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj << Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
obj << Copy Script;

```

### Data Table Window

**Syntax:** obj << Data Table Window

**Description:** Move the data table window for this analysis to the front.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
obj << Data Table Window;

```

### F1 Analysis

**Syntax:** obj << F1 Analysis( Alpha( number ), Reference Level( level ), Bootstrap Samples( number ), Random Seed( number ))

**Description:** Performs a dissolution curve analysis using the F1 difference factor, which measures the percent difference between the curves of the reference tablet and the curves of the test tablet at each time point.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, Dissolution 360 ),
	Group( :Batch ),
	Z( :Polymer A, :Polymer B, :Total Polymer, :Compression Force )
);
obj << F1 Analysis(
	Alpha( 0.05 ),
	Reference Level( "R01" ),
	Bootstrap Samples( 2000 ),
	Random Seed( 1234 )
);

```

### F2 Analysis

**Syntax:** obj << F2 Analysis( Alpha( number ), Reference Level( level ), Bootstrap Samples( number ), Random Seed( number ))

**Description:** Performs a dissolution curve analysis using the F2 similarity factor, which measures the similarity of percent dissolution between the curves of the reference tablet and the curves of the test tablet.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, Dissolution 360 ),
	Group( :Batch ),
	Z( :Polymer A, :Polymer B, :Total Polymer, :Compression Force )
);
obj << F2 Analysis(
	Alpha( 0.1 ),
	Reference Level( "R01" ),
	Bootstrap Samples( 3000 ),
	Random Seed( 4321 )
);

```

### Fit Antoine Equation

**Syntax:** obj << Fit Antoine Equation

**Description:** Fits the Antoine model to the data. This model is often used to model vapor pressure as a function of temperature.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Algae Mitscherlich.jmp" );
obj = dt << Fit Curve( Y( :Algae Density ), X( :Days ), Group( :Treatment ) );
obj << Fit Antoine Equation;

```

### Fit Asymmetric Gaussian Peak

**Syntax:** obj << Fit Asymmetric Gaussian Peak

### Fit Biexponential 4P

**Syntax:** obj << Fit Biexponential 4P

**Description:** Fits a four-parameter biexponential model to the data.

```js

Names Default To Here( 1 );
Random Reset( 7483 );
xd = [.25, .5, .75, 1, 1.5, 2, 3, 4, 6, 12, 24];
yd = J( 11, 1, . );
For( i = 1, i <= 11, i++,
	yd[i] = 170 * Exp( -.15 * xd[i] ) + 80 * Exp( -1.4 * xd[i] ) + .1 * Random Normal()
);
dt = As Table( xd || yd );
Column( dt, 1 ) << set name( "time" );
Column( dt, 2 ) << set name( "concentration" );
obj = dt << Fit Curve( Y( :concentration ), X( :time ) );
obj << Fit Biexponential 4P;

```

### Fit Biexponential 5P

**Syntax:** obj << Fit Biexponential 5P

**Description:** Fits a five-parameter biexponential model to the data.

```js

Names Default To Here( 1 );
Random Reset( 7483 );
xd = [.25, .5, .75, 1, 1.5, 2, 3, 4, 6, 12, 24];
yd = J( 11, 1, . );
For( i = 1, i <= 11, i++,
	yd[i] = 170 * Exp( -.15 * xd[i] ) + 80 * Exp( -1.4 * xd[i] ) + .1 * Random Normal()
);
dt = As Table( xd || yd );
Column( dt, 1 ) << set name( "time" );
Column( dt, 2 ) << set name( "concentration" );
obj = dt << Fit Curve( Y( :concentration ), X( :time ) );
obj << Fit Biexponential 5P;

```

### Fit Cell Growth 4P

**Syntax:** obj << Fit Cell Growth 4P

**Description:** Fits a four-parameter growth and decay model to the data.

```js

Names Default To Here( 1 );
Random Reset( 7483 );
xd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
yd = J( 12, 1, . );
For( i = 1, i <= 12, i++,
	yd[i] = 10 * Normal Density( (xd[i] - 6) / 2 ) + Random Normal() * .1
);
dt = As Table( xd || yd );
Column( dt, 1 ) << set name( "x" );
Column( dt, 2 ) << set name( "y" );
obj = dt << Fit Curve( Y( :Y ), X( :X ) );
obj << Fit Cell Growth 4P;

```

### Fit Cubic

**Syntax:** obj << Fit Cubic

**Description:** Fits a cubic model to the data.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Fit Curve( Y( :height ), X( :weight ) );
obj << Fit Cubic;

```

### Fit Curve

**Syntax:** Fit Curve( Y( column ), X( column ) )

**Description:** Fits a variety of built-in nonlinear models.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;

```

### Fit ExGaussian Peak

**Syntax:** obj << Fit ExGaussian Peak

**Description:** Fits an exponentially modified Gaussian peak model to the data.

```js

Names Default To Here( 1 );
Random Reset( 7483 );
xd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
yd = J( 12, 1, . );
For( i = 1, i <= 12, i++,
	yd[i] = 10 * Normal Density( (xd[i] - 6) / 2 ) + Random Normal() * .1
);
dt = As Table( xd || yd );
Column( dt, 1 ) << set name( "x" );
Column( dt, 2 ) << set name( "y" );
obj = dt << Fit Curve( Y( :Y ), X( :X ) );
obj << Fit ExGaussian Peak;

```

### Fit Exponential 2P

**Syntax:** obj << Fit Exponential 2P

**Description:** Fits a two-parameter exponential model to the data. The fitted response has an asymptote at zero.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Fit Curve( Y( :pop ), X( :year ) );
obj << Fit Exponential 2P;

```

### Fit Exponential 3P

**Syntax:** obj << Fit Exponential 3P

**Description:** Fits a three-parameter exponential model to the data. The fitted response is bounded by an estimated asymptote.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Fit Curve( Y( :pop ), X( :year ) );
obj << Fit Exponential 3P;

```

### Fit First Order Rate

**Syntax:** obj << Fit First Order Rate

**Description:** Fits a first order rate model to the data. This is useful in modeling chemical reactions and is available only when the X values are nonnegative.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Chemical Kinetics.jmp" );
obj = dt << Fit Curve( Y( :"Velocity (y)"n ), X( :Concentration ) );
obj << Fit First Order Rate;

```

### Fit First Order with Equilibrium

**Syntax:** obj << Fit First Order with Equilibrium

**Description:** Fits a first order rate model with equilibrium to the data. This is useful in modeling chemical reactions and is available only when the X values are nonnegative.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Chemical Kinetics.jmp" );
obj = dt << Fit Curve( Y( :"Velocity (y)"n ), X( :Concentration ) );
obj << Fit First Order with Equilibrium;

```

### Fit First Order with Limits

**Syntax:** obj << Fit First Order with Limits

**Description:** Fits a first order rate model with limits to the data. This is useful in modeling chemical reactions and is available only when the X values are nonnegative.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Chemical Kinetics.jmp" );
obj = dt << Fit Curve( Y( :"Velocity (y)"n ), X( :Concentration ) );
obj << Fit First Order with Limits;

```

### Fit Gaussian Peak

**Syntax:** obj << Fit Gaussian Peak

**Description:** Fits a Gaussian peak model to the data.

```js

Names Default To Here( 1 );
Random Reset( 7483 );
xd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
yd = J( 12, 1, . );
For( i = 1, i <= 12, i++,
	yd[i] = 10 * Normal Density( (xd[i] - 6) / 2 ) + Random Normal() * .1
);
dt = As Table( xd || yd );
Column( dt, 1 ) << set name( "x" );
Column( dt, 2 ) << set name( "y" );
obj = dt << Fit Curve( Y( :Y ), X( :X ) );
obj << Fit Gaussian Peak;

```

### Fit Gompertz 3P

**Syntax:** obj << Fit Gompertz 3P

**Description:** Fits a three-parameter Gompertz curve to the data. The fitted response is bounded between zero and an estimated asymptote.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dat = dt << get as matrix;
maxy = Max( dat[0, 3] );
newy = dat[0, 3] / maxy;
form = Column( 3 ) << get values;
Close( dt, no save );
newtab = As Table( dat[0, 2] || newy );
Column( 1 ) << set name( "log conc" );
Column( 2 ) << set name( "toxicity" );
New Column( "formulation", character, nominal );
Column( 3 ) << set values( form );
obj = Fit Curve( Y( :toxicity ), X( :log conc ), Group( :formulation ) );
obj << Fit Gompertz 3P;

```

### Fit Gompertz 4P

**Syntax:** obj << Fit Gompertz 4P

**Description:** Fits a four-parameter Gompertz curve to the data. The fitted response is bounded between two estimated asymptotes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Gompertz 4P;

```

### Fit Higuchi

**Syntax:** obj << Fit Higuchi

**Description:** Fits a Higuchi model to the data. This is a parametric technique to compare dissolution curves.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = dt << Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, :Dissolution 360 ),
	Group( :Batch )
);
obj << Fit Higuchi;

```

### Fit Higuchi with Burst

**Syntax:** obj << Fit Higuchi with Burst

**Description:** Fits a Higuchi model with a burst component to the data. This is a parametric technique to compare dissolution curves.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = dt << Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, :Dissolution 360 ),
	Group( :Batch )
);
obj << Fit Higuchi with Burst;

```

### Fit Higuchi with Lag

**Syntax:** obj << Fit Higuchi with Lag

**Description:** Fits a Higuchi model with a lag component to the data. This is a parametric technique to compare dissolution curves.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = dt << Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, :Dissolution 360 ),
	Group( :Batch )
);
obj << Fit Higuchi with Lag;

```

### Fit Hixson-Crowell

**Syntax:** obj << "Fit Hixson-Crowell"n

**Description:** Fits a Hixson-Crowell model to the data. This is a parametric technique to compare dissolution curves.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = dt << Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, :Dissolution 360 ),
	Group( :Batch )
);
obj << "Fit Hixson-Crowell"n;

```

### Fit Hixson-Crowell with Lag

**Syntax:** obj << "Fit Hixson-Crowell with Lag"n

**Description:** Fits a Hixson-Crowell model with a lag component to the data. This is a parametric technique to compare dissolution curves.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = dt << Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, :Dissolution 360 ),
	Group( :Batch )
);
obj << "Fit Hixson-Crowell with Lag"n;

```

### Fit Hybrid Exponential

**Syntax:** obj << Fit Hybrid Exponential

**Description:** Fits a Hybrid Exponential model to the data.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Negative Exponential.jmp" );
obj = dt << Fit Curve( Y( :Y ), X( :X ) );
obj << Fit Hybrid Exponential;

```

### Fit Inverse Michaelis-Menten

**Syntax:** obj << Fit Inverse Michaelis Menten; 

obj << "Fit Inverse Michaelis-Menten"n

**Description:** Fits the inverse Michaelis-Menten enzyme kinetics model to the data.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Chemical Kinetics.jmp" );
obj = dt << Fit Curve( Y( :"Velocity (y)"n ), X( :Concentration ) );
obj << Fit Inverse Michaelis Menten;

```

### Fit Korsmeyer-Peppas

**Syntax:** obj << "Fit Korsmeyer-Peppas"n

**Description:** Fits a Korsmeyer-Peppas model to the data. This is a parametric technique to compare dissolution curves.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = dt << Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, :Dissolution 360 ),
	Group( :Batch )
);
obj << "Fit Korsmeyer-Peppas"n;

```

### Fit Korsmeyer-Peppas with Burst

**Syntax:** obj << "Fit Korsmeyer-Peppas with Burst"n

**Description:** Fits a Korsmeyer-Peppas model with a burst component to the data. This is a parametric technique to compare dissolution curves.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = dt << Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, :Dissolution 360 ),
	Group( :Batch )
);
obj << "Fit Korsmeyer-Peppas with Burst"n;

```

### Fit Korsmeyer-Peppas with Lag

**Syntax:** obj << "Fit Korsmeyer-Peppas with Lag"n

**Description:** Fits a Korsmeyer-Peppas model with a lag component to the data. This is a parametric technique to compare dissolution curves.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = dt << Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, :Dissolution 360 ),
	Group( :Batch )
);
obj << "Fit Korsmeyer-Peppas with Lag"n;

```

### Fit Linear

**Syntax:** obj << Fit Linear

**Description:** Fits a least squares regression model to the data. The fit line is shown on the plot and a fit report is provided.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Fit Curve( Y( :height ), X( :weight ) );
obj << Fit Linear;

```

### Fit Logistic 2P

**Syntax:** obj << Fit Logistic 2P

**Description:** Fits a two-parameter logistic curve to the data. The fitted response is bounded between asymptotes zero and one.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dat = dt << get as matrix;
miny = Min( dat[0, 3] );
maxy = Max( dat[0, 3] );
newy = (dat[0, 3] - miny) / (maxy - miny);
form = Column( 3 ) << get values;
Close( dt, no save );
newtab = As Table( dat[0, 2] || newy );
Column( 1 ) << set name( "log conc" );
Column( 2 ) << set name( "toxicity" );
New Column( "formulation", character, nominal );
Column( 3 ) << set values( form );
obj = Fit Curve( Y( :toxicity ), X( :log conc ), Group( :formulation ) );
obj << Fit Logistic 2P;

```

### Fit Logistic 3P

**Syntax:** obj << Fit Logistic 3P

**Description:** Fits a three-parameter logistic curve to the data. The fitted response is bounded between zero and an estimated asymptote.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dat = dt << get as matrix;
maxy = Max( dat[0, 3] );
newy = dat[0, 3] / maxy;
form = Column( 3 ) << get values;
Close( dt, no save );
newtab = As Table( dat[0, 2] || newy );
Column( 1 ) << set name( "log conc" );
Column( 2 ) << set name( "toxicity" );
New Column( "formulation", character, nominal );
Column( 3 ) << set values( form );
obj = Fit Curve( Y( :toxicity ), X( :log conc ), Group( :formulation ) );
obj << Fit Logistic 3P;

```

### Fit Logistic 4P

**Syntax:** obj << Fit Logistic 4P

**Description:** Fits a four-parameter logistic model to the data. The fitted response is bounded between two estimated asymptotes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;

```

### Fit Logistic 4P Hill

**Syntax:** obj << Fit Logistic 4P Hill

**Description:** Fits a four-parameter logistic model to the data. The fitted response is bounded between two estimated asymptotes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P Hill;

```

### Fit Logistic 4P Rodbard

**Syntax:** obj << Fit Logistic 4P Rodbard

**Description:** Fits a four-parameter logistic model to the data. The fitted response is bounded between two estimated asymptotes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :Concentration ), Group( :formulation ) );
obj << Fit Logistic 4P Rodbard;

```

### Fit Logistic 5P

**Syntax:** obj << Fit Logistic 5P

**Description:** Fits a five-parameter logistic model to the data. The fitted response is bounded between two estimated asymptotes. Unlike the other logistic curves, the five-parameter logistic is not symmetric.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 5P;

```

### Fit Lorentzian Peak

**Syntax:** obj << Fit Lorentzian Peak

**Description:** Fits a Lorentzian peak model to the data.

```js

Names Default To Here( 1 );
Random Reset( 7483 );
xd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
yd = J( 12, 1, . );
For( i = 1, i <= 12, i++,
	yd[i] = 10 * (5 / ((xd[i] - 6) ^ 2 + 25)) + Random Normal() * .1
);
dt = As Table( xd || yd );
Column( dt, 1 ) << set name( "x" );
Column( dt, 2 ) << set name( "y" );
obj = dt << Fit Curve( Y( :Y ), X( :X ) );
obj << Fit Lorentzian Peak;

```

### Fit Mechanistic Growth

**Syntax:** obj << Fit Mechanistic Growth

**Description:** Fits the mechanistic growth model to the data. This is a reparameterization of the Exponential 3P model.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Corn.jmp" );
obj = dt << Fit Curve( Y( :yield ), X( :nitrate ) );
obj << Fit Mechanistic Growth;

```

### Fit Michaelis-Menten

**Syntax:** obj << Fit Michaelis Menten; 

obj << "Fit Michaelis-Menten"n

**Description:** Fits the Michaelis-Menten enzyme kinetics model to the data.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Chemical Kinetics.jmp" );
obj = dt << Fit Curve( Y( :"Velocity (y)"n ), X( :Concentration ) );
obj << Fit Michaelis Menten;

```

### Fit One Compartment Oral Dose

**Syntax:** obj << Fit One Compartment Oral Dose

**Description:** Fits a One Compartment Oral Dose model to the data. This model is appropriate for modeling the concentration of drug in the body after an oral dose.

```js

Names Default To Here( 1 );
dat = [0 0, .27 1.72, .52 7.91, 1 8.31, 1.92 8.33, 3.5 6.85, 5.02 6.08, 7.03 5.4, 9 4.55,
12 3.01, 24.3 .9];
dt = As Table( dat );
Column( dt, 1 ) << set name( "time" );
Column( dt, 2 ) << set name( "concentration" );
obj = dt << Fit Curve( Y( :concentration ), X( :time ) );
obj << Fit One Compartment Oral Dose;

```

### Fit Pearson VII Peak

**Syntax:** obj << Fit Pearson VII Peak

### Fit Power Model

**Syntax:** obj << Fit Power Model

**Description:** Fits a power model to the data.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Fit Curve( Y( :height ), X( :weight ) );
obj << Fit Power Model;

```

### Fit Probit 2P

**Syntax:** obj << Fit Probit 2P

**Description:** Fits a two-parameter probit curve to the data. The fitted response is bounded between asymptotes zero and one.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dat = dt << get as matrix;
miny = Min( dat[0, 3] );
maxy = Max( dat[0, 3] );
newy = (dat[0, 3] - miny) / (maxy - miny);
form = Column( 3 ) << get values;
Close( dt, no save );
newtab = As Table( dat[0, 2] || newy );
Column( 1 ) << set name( "log conc" );
Column( 2 ) << set name( "toxicity" );
New Column( "formulation", character, nominal );
Column( 3 ) << set values( form );
obj = Fit Curve( Y( :toxicity ), X( :log conc ), Group( :formulation ) );
obj << Fit Probit 2P;

```

### Fit Probit 3P

**Syntax:** obj << Fit Probit 3P

**Description:** Fits a three-parameter probit curve to the data. The fitted response is bounded between zero and an estimated asymptote.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dat = dt << get as matrix;
maxy = Max( dat[0, 3] );
newy = dat[0, 3] / maxy;
form = Column( 3 ) << get values;
Close( dt, no save );
newtab = As Table( dat[0, 2] || newy );
Column( 1 ) << set name( "log conc" );
Column( 2 ) << set name( "toxicity" );
New Column( "formulation", character, nominal );
Column( 3 ) << set values( form );
obj = Fit Curve( Y( :toxicity ), X( :log conc ), Group( :formulation ) );
obj << Fit Probit 3P;

```

### Fit Probit 4P

**Syntax:** obj << Fit Probit 4P

**Description:** Fits a four-parameter probit model to the data. The fitted response is bounded between two estimated asymptotes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = Fit Curve( Y( :toxicity ), X( :log conc ), Group( :formulation ) );
obj << Fit Probit 4P;

```

### Fit Pseudo-Voigt

**Syntax:** obj << Fit Pseudo-Voigt

### Fit Quadratic

**Syntax:** obj << Fit Quadratic

**Description:** Fits a quadratic model to the data.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Fit Curve( Y( :height ), X( :weight ) );
obj << Fit Quadratic;

```

### Fit Quartic

**Syntax:** obj << Fit Quartic

**Description:** Fits a fourth-order polynomial to the data.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Fit Curve( Y( :height ), X( :weight ) );
obj << Fit Quartic;

```

### Fit Quintic

**Syntax:** obj << Fit Quintic

**Description:** Fits a fifth-order polynomial to the data.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Fit Curve( Y( :height ), X( :weight ) );
obj << Fit Quintic;

```

### Fit Second Order

**Syntax:** obj << Fit Second Order

**Description:** Fits a second order rate model to the data. This is useful in modeling chemical reactions and is available only when the X values are nonnegative.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Chemical Kinetics.jmp" );
obj = dt << Fit Curve( Y( :"Velocity (y)"n ), X( :Concentration ) );
obj << Fit Second Order;

```

### Fit Second Order with Two Components

**Syntax:** obj << Fit Second Order with Two Components

**Description:** Fits a second order rate model with two components to the data. This is useful in modeling chemical reactions and is available only when the X values are nonnegative.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Chemical Kinetics.jmp" );
obj = dt << Fit Curve( Y( :"Velocity (y)"n ), X( :Concentration ) );
obj << Fit Second Order with Two Components;

```

### Fit Skew Normal Peak

**Syntax:** obj << Fit Skew Normal Peak

### Fit Two Compartment IV Bolus Dose

**Syntax:** obj << Fit Two Compartment IV Bolus Dose

**Description:** Fits a Two Compartment IV Bolus Dose model to the data. This model is appropriate for modeling the concentration of drug in the body after an intravenous bolus dose.

```js

Names Default To Here( 1 );
Random Reset( 7483 );
xd = [.25, .5, .75, 1, 1.5, 2, 3, 4, 6, 12, 24];
yd = J( 11, 1, . );
For( i = 1, i <= 11, i++,
	yd[i] = 170 * Exp( -.15 * xd[i] ) + 80 * Exp( -1.4 * xd[i] ) + .1 * Random Normal()
);
dt = As Table( xd || yd );
Column( dt, 1 ) << set name( "time" );
Column( dt, 2 ) << set name( "concentration" );
obj = dt << Fit Curve( Y( :concentration ), X( :time ) );
obj << Fit Two Compartment IV Bolus Dose;

```

### Fit Weibull Growth

**Syntax:** obj << Fit Weibull Growth

**Description:** Fits a three-parameter Weibull Growth model to the data.

**JMP Version Added:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :Concentration ), Group( :formulation ) );
obj << Fit Weibull Growth;

```

### Freq

**Syntax:** obj = Fit Curve(...<Freq( column )>...)

**Description:** Specifies a column whose values assign a frequency to each row for the analysis.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Fit Curve(
	Y( :Toxicity ),
	X( :log Conc ),
	Group( :formulation ),
	Freq( _freqcol )
);
obj << Fit Logistic 4P;

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
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Curve(
	Y( :Toxicity ),
	X( :log Conc ),
	Group( :formulation ),
	By( _bycol )
);
obj << Fit Logistic 4P;
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Syntax:** obj << Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

**General**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
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

### Get Data Table

**Syntax:** obj << Get Data Table

**Description:** Returns a reference to the data table.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
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

### Get Script

**Syntax:** obj << Get Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntax:** obj << Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntax:** obj << Get Timing

**Description:** Times the platform launch.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
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

### Group

**Syntax:** obj = Fit Curve(...<Group( column )>...)

**Description:** Specifies a grouping variable. The fitted model has separate parameters for each level of the grouping variable.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;

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

### Multivariate Distance

**Syntax:** obj << Multivariate Distance( Alpha( number ), Reference Level( level ))

**Description:** Performs a dissolution curve analysis using the Mahalanobis distance M, which measures the multivariate distance between the curves of the reference tablet and the curves of the test tablet.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, Dissolution 360 ),
	Group( :Batch ),
	Z( :Polymer A, :Polymer B, :Total Polymer, :Compression Force )
);
obj << Multivariate Distance( Alpha( 0.1 ), Reference Level( "R01" ) );

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

### Redo Analysis

**Syntax:** obj << Redo Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntax:** obj << Redo ByGroup Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Curve(
	Y( :Toxicity ),
	X( :log Conc ),
	Group( :formulation ),
	By( _bycol )
);
obj << Fit Logistic 4P;
obj[1] << Redo ByGroup Analysis;

```

### Regressor

**Syntax:** obj = Fit Curve(...<Regressor( column )>...)

**Description:** Specifies the predictor variables.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;

```

### Relaunch Analysis

**Syntax:** obj << Relaunch Analysis

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntax:** obj << Relaunch ByGroup

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Curve(
	Y( :Toxicity ),
	X( :log Conc ),
	Group( :formulation ),
	By( _bycol )
);
obj << Fit Logistic 4P;
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
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntax:** obj << Report View( "Full"|"Summary" )

**Description:** The report view determines the level of detail visible in a platform report. Full shows all of the detail, while Summary shows only select content, dependent on the platform. For customized behavior, display boxes support a <<Set Summary Behavior message.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
obj << Report View( "Summary" );

```

### Response

**Syntax:** obj = Fit Curve(...Response( column(s) )...)

**Description:** Specifies the response variables.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description:** Creates a JSL script to produce this analysis, and save it as a table property in the data table. You can specify a name for the script. The Append Suffix option appends a numeric suffix to the script name, which differentiates the script from an existing script with the same name. The Prompt option prompts the user to specify a script name. The Replace option replaces an existing script with the same name.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Curve(
	Y( :Toxicity ),
	X( :log Conc ),
	Group( :formulation ),
	By( _bycol )
);
obj << Fit Logistic 4P;
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj << Save ByGroup Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Curve(
	Y( :Toxicity ),
	X( :log Conc ),
	Group( :formulation ),
	By( _bycol )
);
obj << Fit Logistic 4P;
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj << Save ByGroup Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Curve(
	Y( :Toxicity ),
	X( :log Conc ),
	Group( :formulation ),
	By( _bycol )
);
obj << Fit Logistic 4P;
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntax:** obj << Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj << Save Script for All Objects To Data Table( <name> )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Curve(
	Y( :Toxicity ),
	X( :log Conc ),
	Group( :formulation ),
	By( _bycol )
);
obj << Fit Logistic 4P;
obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Curve(
	Y( :Toxicity ),
	X( :log Conc ),
	Group( :formulation ),
	By( _bycol )
);
obj << Fit Logistic 4P;
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj << Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj << Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj << Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
obj << Save Script to Script Window;

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

### Supplementary

**Syntax:** obj = Fit Curve(...<Supplementary( column(s) )>...)

**Description:** Specifies one or more supplementary variables. Supplementary variables are not used in any of the calculations in the platform and including them does not affect the results. These variables can improve data interpretation or be used in future analyses.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Fit Curve( Y( :height ), X( :weight ), Z( :sex ) );
obj << Fit Cubic;

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

### T2EQ

**Syntax:** obj << T2EQ( Alpha( number ), Reference Level( level ))

**Description:** Performs a dissolution curve analysis using the T2EQ equivalence test, which measures the multivariate distance between the curves of the reference tablet and the curves of the test tablet.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, Dissolution 360 ),
	Group( :Batch ),
	Z( :Polymer A, :Polymer B, :Total Polymer, :Compression Force )
);
obj << T2EQ( Alpha( 0.05 ), Reference Level( "R01" ) );

```

### Title

**Syntax:** obj << Title( "new title" )

**Description:** Sets the title of the platform.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj << Top Report

**Description:** Returns a reference to the root node in the report.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
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

### View Web XML

**Syntax:** obj << View Web XML

**Description:** Returns the XML code that is used to create the interactive HTML report.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Weight

**Syntax:** obj = Fit Curve(...<Weight( column )>...)

**Description:** Specifies a column whose values assign a weight to each row for the analysis.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Fit Curve(
	Y( :Toxicity ),
	X( :log Conc ),
	Group( :formulation ),
	Weight( _weightcol )
);
obj << Fit Logistic 4P;

```

### Window View

**Syntax:** obj = Fit Curve(...Window View( "Visible"|"Invisible"|"Private" )...)

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

**Syntax:** obj = Fit Curve(...<X( column )>...)

**Description:** Specifies the predictor variables.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;

```

### Y

**Syntax:** obj = Fit Curve(...Y( column(s) )...)

**Description:** Specifies the response variables.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;

```

### Z

**Syntax:** obj = Fit Curve(...<Z( column(s) )>...)

**Description:** Specifies one or more supplementary variables. Supplementary variables are not used in any of the calculations in the platform and including them does not affect the results. These variables can improve data interpretation or be used in future analyses.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Fit Curve( Y( :height ), X( :weight ), Z( :sex ) );
obj << Fit Cubic;

```


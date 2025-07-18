# Degradation



## Associated Constructors

### Degradation

**Syntax:** Degradation( Y( column ), Time( column ), Application( "Repeated Measures Degradation"|"Destructive Degradation"|"Stability Test" ), &lt;X( column )&gt;, &lt;Label( column )&gt;, &lt;Freq( column )&gt;, &lt;Censor( column )&gt;, &lt;Censor Code( value )&gt;, &lt;Upper Spec Limit( value )&gt;, &lt;Lower Spec Limit( value )&gt;, &lt;Censoring Time( value )&gt; )

**Description:** Models degradation over time using linear and nonlinear curves. Analysis options include stability analysis and generation of pseudo-failure data.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
);

```

## Columns

### Censor

**Syntax:** obj &lt;&lt; Censor( column )

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Adhesive Bond.jmp" );
obj = dt << Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	Censor( :Censor ),
	X( :Degrees ),
	Application( Destructive Degradation )
);

```

### Freq

**Syntax:** obj &lt;&lt; Freq( column )

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	),
	Freq( _freqcol )
);

```

### Label

**Syntax:** obj &lt;&lt; Label( column )

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	X( :Batch ),
	Application( "Repeated Measures Degradation" )
);

```

### Response

**Syntax:** obj &lt;&lt; Response( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	X( :Batch ),
	Application( "Repeated Measures Degradation" )
);

```

### System ID

**Syntax:** obj &lt;&lt; System ID( column )

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	X( :Batch ),
	Application( "Repeated Measures Degradation" )
);

```

### Time

**Syntax:** obj &lt;&lt; Time( column )

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	X( :Batch ),
	Application( "Repeated Measures Degradation" )
);

```

### X

**Syntax:** obj &lt;&lt; X( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	X( :Batch ),
	Application( "Repeated Measures Degradation" )
);

```

### Y

**Syntax:** obj &lt;&lt; Y( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	X( :Batch ),
	Application( "Repeated Measures Degradation" )
);

```

## Item Messages

### Censor Code

**Syntax:** obj = Degradation(...Censor Code( value=1 )...)

**Description:** Identifies the value in the Censor column that designates right-censored observations. "1" by default.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Adhesive Bond.jmp" );
obj = dt << Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	X( :Degrees ),
	Censor( :Censor ),
	Censor Code( "Right" ),
	Application( "Destructive Degradation" )
);

```

### Connect Data Markers

**Syntax:** obj &lt;&lt; Connect Data Markers( state=0|1 )

**Description:** Shows or hides lines that connect the points on the Overlay plot. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Connect Data Markers( 0 )
);
Wait( 1 );
obj << Connect Data Markers( 1 );

```

### Curve Interval Alpha

**Syntax:** obj &lt;&lt; Curve Interval Alpha( fraction )

**Description:** Specifies the alpha level that is used for the confidence interval curves in the Overlay plot.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
obj << Show Curve Interval( "Prediction Interval" );
Wait( 1 );
obj << Curve Interval Alpha( .01 );

```

### Generate Pseudo Failure Data

**Syntax:** Generate Pseudo Failure Data(interval_censor, &lt;alpha&gt;)

**Description:** Saves the predicted time that each unit crosses the specification limit to a new data table. The new data table contains a Life Distribution or Fit Life by X script that can be used to fit a distribution to the pseudo failure times.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
obj << Set Lower Spec Limit( 0 );
obj << Set Upper Spec Limit( 6 );
obj << Set Censoring Time( 6 );
dt1 = obj << Generate Pseudo Failure Data( 1, .05 );

```

### Generate Report for Current Model

**Syntax:** obj &lt;&lt; Generate Report for Current Model

**Description:** Creates a report for the current model settings. This includes a Model Summary report and an Estimates report that contains the parameter estimates.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
Wait( 1 );
obj << Generate Report for Current Model;

```

### Get Inverse Prediction Results

**Syntax:** obj &lt;&lt; Get Inverse Prediction Results

**Description:** Returns a named list that contains the results from the Inverse Prediction plot.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
obj << Set Upper Spec Limit( 10 );
obj << Get Inverse Prediction Results;

```

### Get Prediction Results

**Syntax:** obj &lt;&lt; Get Prediction Results

**Description:** Returns a named list that contains the results from the Prediction Plot.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
obj << Longitudinal Prediction Time( 4500 );
obj << Get Prediction Results;

```

### Get Residuals

**Syntax:** obj &lt;&lt; Get Residuals

**Description:** Returns a named list that contains the results from the Residual Plot.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
obj << Get Residuals;

```

### Get Results

**Syntax:** obj &lt;&lt; Get Results

**Description:** Returns a named list that contains the results for all fitted models.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
obj << Generate Report for Current Model;
obj << Get Results;

```

### Inverse Prediction Alpha

**Syntax:** obj &lt;&lt; Inverse Prediction Alpha( fraction )

**Description:** Specifies the alpha level that is used for the intervals in the Inverse Prediction plot.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
obj << Set Upper Spec Limit( 6 );
obj << Show Curve Interval( "Prediction Interval" );
obj << Show Residual Plot( 0 );
obj << No Tab List( 1 );
obj << Inverse Prediction Interval( "Prediction Interval" );
Wait( 1 );
obj << Inverse Prediction Alpha( .01 );

```

### Inverse Prediction Interval

**Syntax:** obj &lt;&lt; Inverse Prediction Interval( "No Interval"|"Confidence Interval"|"Prediction Interval" )

**Description:** Shows or hides confidence or prediction intervals for the pseudo failure times that are shown on the Inverse Prediction plot. When intervals are enabled, the intervals are also included in the data table that is created when using the Save Crossing Time option.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
obj << Set Upper Spec Limit( 6 );
obj << Show Curve Interval( "Prediction Interval" );
obj << Show Residual Plot( 0 );
obj << No Tab List( 1 );
Wait( 1 );
obj << Inverse Prediction Interval( "Prediction Interval" );

```

### Inverse Prediction Side

**Syntax:** obj &lt;&lt; Inverse Prediction Side( "Two sided"|"Lower One Sided"|"Upper One sided" )

**Description:** Specifies whether one-sided or two-sided intervals are shown in the Inverse Prediction plot.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
obj << Set Upper Spec Limit( 6 );
obj << Show Curve Interval( "Prediction Interval" );
obj << No Tab List( 1 );
obj << Show Residual Plot( 0 );
obj << Inverse Prediction Interval( "Prediction Interval" );
Wait( 1 );
obj << Inverse Prediction Side( "Lower One Sided" );

```

### Longitudinal Prediction Alpha

**Syntax:** obj &lt;&lt; Longitudinal Prediction Alpha( fraction )

**Description:** Specifies the alpha level that is used for the intervals in the Prediction Plot.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
obj << Set Upper Spec Limit( 6 );
obj << Show Curve Interval( "Prediction Interval" );
obj << No Tab List( 1 );
obj << Show Residual Plot( 0 );
obj << Show Inverse Prediction Plot( 0 );
obj << Longitudinal Prediction Interval( "Prediction Interval" );
obj << Longitudinal Prediction Time( 4500 );
Wait( 1 );
obj << Longitudinal Prediction Alpha( .01 );

```

### Longitudinal Prediction Interval

**Syntax:** obj &lt;&lt; Longitudinal Prediction Interval( "No Interval"|"Confidence Interval"|"Prediction Interval" )

**Description:** Shows or hides confidence or prediction intervals for the estimated responses that are shown on the Prediction Plot. When intervals are enabled, the intervals are also included in the data table that is created when using the Save Predictions option.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
obj << Set Upper Spec Limit( 6 );
obj << Show Curve Interval( "Prediction Interval" );
obj << No Tab List( 1 );
obj << Show Residual Plot( 0 );
obj << Show Inverse Prediction Plot( 0 );
obj << Longitudinal Prediction Time( 4500 );
Wait( 1 );
obj << Longitudinal Prediction Interval( "Prediction Interval" );

```

### Longitudinal Prediction Time

**Syntax:** obj &lt;&lt; Longitudinal Prediction Time( number )

**Description:** Specifies the time value for which you want to predict the response.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
obj << Set Upper Spec Limit( 6 );
obj << Show Curve Interval( "Prediction Interval" );
obj << No Tab List( 1 );
obj << Show Residual Plot( 0 );
obj << Show Inverse Prediction Plot( 0 );
obj << Longitudinal Prediction Interval( "Prediction Interval" );
Wait( 1 );
obj << Longitudinal Prediction Time( 3000 );

```

### No Tab List

**Syntax:** obj &lt;&lt; No Tab List( state=0|1 )

**Description:** Arranges the Residual Plot, Inverse Prediction, and Prediction Graph tabs as a stacked report.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
Wait( 1 );
obj << No Tab List( 1 );

```

### Nonlinear Path

**Syntax:** obj &lt;&lt; Nonlinear Path

**Description:** Sets the degradation path style to Nonlinear Path.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
Wait( 1 );
obj << Nonlinear Path;

```

### Prediction Settings

**Syntax:** obj &lt;&lt; Prediction Settings

**Description:** Opens a window that contains options to modify the settings that are used in the model predictions.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
Wait( 0 );
obj << Prediction Settings;

```

### Residual Plot

**Syntax:** obj &lt;&lt; Residual Plot( &lt;Jittering( state=0|1 )&gt;, &lt;Jittering Scale( number )&gt;, &lt;Separate Groups( state=0|1 )&gt; )

**Description:** Enables you to specify options for the Residual Plot.

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
obj << Residual Plot( Jittering( 1 ), Jittering Scale( 0.5 ) );
Wait( 1 );
obj << Residual Plot( Jittering Scale( 1.5 ) );

```

**Example 2**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Device B.jmp" );
obj = dt << Degradation(
	Y( :Power Drop ),
	Time( :Hours ),
	Label( :Device ),
	X( :Degrees C ),
	Application( "Repeated Measures Degradation" )
);
Wait( 1 );
obj << Residual Plot( Jittering( 1 ), Separate Groups( 1 ) );

```

### Save Crossing Time

**Syntax:** obj &lt;&lt; Save Crossing Time

**Description:** Saves the pseudo failure times for the current model to a new data table. The new data table contains a Life Distribution or Fit Life by X script that can be used to fit a distribution to the pseudo failure times. When one of the Inverse Prediction Interval options is enabled, the table also includes the intervals.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
);
obj << Save Crossing Time;

```

### Save Predictions

**Syntax:** obj &lt;&lt; Save Predictions

**Description:** Saves the predicted response values for the current model to a new data table. The table also includes columns for lower and upper bounds based on the setting of the Longitudinal Prediction Interval option.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
);
obj << Longitudinal Prediction Time( 4500 );
obj << Save Predictions;

```

### Save Residuals

**Syntax:** obj &lt;&lt; Save Residuals

**Description:** Saves the residuals for the current model to a new data table.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
);
obj << Save Residuals;

```

### Set Baseline

**Syntax:** obj &lt;&lt; Set Baseline( number )

**Description:** Specifies the normal use conditions for the explanatory variable in nonlinear degradation paths. The baseline value appears on the Overlay plot as a black line.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Device B.jmp" );
obj = dt << Degradation(
	Y( :Power Drop ),
	Time( :Hours ),
	Label( :Device ),
	X( :Degrees C ),
	Application( "Repeated Measures Degradation" ),
	Show Fitted Lines( 1 ),
	Path Specifications(
		Nonlinear Path(
			Add Formula(
				Formula Name( "Reaction Rate 1" ),
				Formula(
					Parameter(
						{DInf = -1.4423, Ru = 0.000526206474198, Ea = 0.816981438481622},
						DInf * (1 - Exp(
							-Ru * Exp(
								Ea * (11604.5181215503 / (193.5 + 273.15) - 11604.5181215503
								 / (Degrees C + 273.15))
							) * Hours
						))
					)
				),
				Initial Values( [-1.4423, 0.000526206474198, 0.816981438481622] ),
				Lower( [-1.58653, 0.0004735858267782, 0.73528329463346] ),
				Upper( [-1.29807, 0.0005788271216178, 0.898679582329784] ),
				Fitting Method( Newton ),
				Fixed( [0, 0, 0] )
			),
			Select Formula( "Reaction Rate 1" )
		)
	),
	Nonlinear Path( 1 )
);
Wait( 1 );
obj << Set Baseline( 130 );

```

### Set Censoring Time

**Syntax:** obj &lt;&lt; Set Censoring Time( number )

**Description:** Specifies the censoring time, which appears on the Overlay and Inverse Prediction plots as a dotted vertical line. When No Interval is selected for the Inverse Prediction Interval option, observations that exceed the Censoring Time are displayed on horizontal lines starting at the Censoring Time. If Confidence Interval or Prediction Interval is selected for the Inverse Prediction Interval option, horizontal lines extend indefinitely to the right of observations whose upper limits exceed the Censoring Time. The Censoring Time is reflected in data tables that are created using the Save Crossing Time and Generate Pseudo Failure Data options.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
obj << Show Fitted Lines( 1 );
Wait( 1 );
obj << Set Censoring Time( 3800 );

```

### Set Lower Spec Limit

**Syntax:** obj &lt;&lt; Set Lower Spec Limit( number )

**Description:** Specifies the lower specification limit. Specification limits appear on the Overlay plot.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Device B.jmp" );
obj = dt << Degradation(
	Y( :Power Drop ),
	Time( :Hours ),
	Label( :Device ),
	X( :Degrees C ),
	Application( "Repeated Measures Degradation" )
);
obj << Show Fitted Lines( 1 );
Wait( 1 );
obj << Set Lower Spec Limit( -1.5 );

```

### Set Upper Spec Limit

**Syntax:** obj &lt;&lt; Set Upper Spec Limit( number )

**Description:** Specifies the upper specification limit. Specification limits appear on the Overlay plot.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
obj << Show Fitted Lines( 1 );
Wait( 1 );
obj << Set Upper Spec Limit( 6 );

```

### Show Curve Interval

**Syntax:** obj &lt;&lt; Show Curve Interval( "No Interval"|"Confidence Interval"|"Prediction Interval" )

**Description:** Shows or hides the confidence or prediction intervals for the fitted lines that are shown on the Overlay plot.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
Wait( 1 );
obj << Show Curve Interval( "Prediction Interval" );

```

### Show Fitted Lines

**Syntax:** obj &lt;&lt; Show Fitted Lines( state=0|1 )

**Description:** Shows or hides the fitted lines on the Overlay plot.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Show Fitted Lines( 0 )
);
Wait( 1 );
obj << Show Fitted Lines( 1 );

```

### Show Inverse Prediction Plot

**Syntax:** obj &lt;&lt; Show Inverse Prediction Plot( state=0|1 )

**Description:** Shows or hides the Inverse Prediction plot. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Show Residual Plot( 0 ),
	Show Inverse Prediction Plot( 0 )
);
obj << Set Upper Spec Limit( 6 );
obj << No Tab List( 1 );
Wait( 1 );
obj << Show Inverse Prediction Plot( 1 );

```

### Show Legend

**Syntax:** obj &lt;&lt; Show Legend( state=0|1 )

**Description:** Shows or hides a legend for the markers used on the Overlay plot.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
obj << Show Legend( 1 );

```

### Show Residual Plot

**Syntax:** obj &lt;&lt; Show Residual Plot( state=0|1 )

**Description:** Shows or hides the Residual Plot. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Show Residual Plot( 0 )
);
Wait( 1 );
obj << Show Residual Plot( 1 );

```

### Show Spec Limits

**Syntax:** obj &lt;&lt; Show Spec Limits( state=0|1 )

**Description:** Shows or hides the specification limits on the Overlay plot.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Set Upper Spec Limit( 7.5 ),
	Application( "Repeated Measures Degradation" )
);
Wait( 1 );
obj << Show Spec Limits( 0 );

```

### Simple Linear Path

**Syntax:** obj &lt;&lt; Simple Linear Path

**Description:** Sets the degradation path style to Simple Linear Path.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
obj << Nonlinear Path;
Wait( 1 );
obj << Simple Linear Path;

```

### Specify and Fit Path

**Syntax:** obj &lt;&lt; Specify and Fit Path( Formula Name( string ), Formula( Model Type( string ), Parameter(...)|specification ), fitting command )

**Description:** Enables you to specify and fit a path model directly in a script. The Degradation platform identifies initial values and fits the model automatically without further intervention from user. Each model is specified with a model name, a model definition, and a fitting command. The model type within the Formula argument must be one of the following: Custom Linear, Reaction Rate, Reaction Rate Type I, or Constant Rate. For a custom linear model, use the Parameter() function to define the formula, similar to specifying models in the Nonlinear platform. For other model types, the specification information differs by model type; see the examples for details. The fitting command can be either Fit Model or Fit by System ID.

**Fit by System ID Example**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
obj << Specify and Fit Path(
	Formula Name( "custom linear model 1" ),
	Formula(
		Model Type( "Custom Linear" ),
		Parameter( {b0 = 0, b1 = 0, b2 = 0}, b0 + b1 * Hours + b2 * Hours ^ 2 )
	),
	Fit by System ID() //Illustration of using Fit by System ID in script for custom linear models.
);

```

**Fit Model Example**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
obj << Specify and Fit Path(
	Formula Name( "custom linear model 1" ),
	Formula(
		Model Type( "Custom Linear" ),
		Parameter( {b0 = 0, b1 = 0, b2 = 0}, b0 + b1 * Hours + b2 * Hours ^ 2 )
	),
	Fit Model() //Illustration of using Fit Model in script for custom linear models
);

```

**Other Examples**

```jsl

dt = Open( "$sample_data/reliability/Device B.jmp" );
obj = dt << Degradation(
	Y( :Power Drop ),
	Time( :Hours ),
	Label( :Device ),
	X( :Degrees C ),
	Nonlinear Path( 1 ),
	Mean Path( 1 ),
	Application( "Repeated Measures Degradation" )
);
obj << Specify and Fit Path(
	Formula Name( "Reaction Rate 1" ),
	Formula(
		Model Type( "Reaction Rate" ),
		Temperature Unit( "Celsius" ),
		Baseline Temperature( . )
	), //Illustration of using builtin models in script without going through UI interaction to setup.
	Fit by System ID()
);
obj << Generate Report for Current Model();
obj << Specify and Fit Path(
	Formula Name( "Reaction Rate 2" ),
	Formula(
		Model Type( "Reaction Rate" ),
		Temperature Unit( "Celsius" ),
		Baseline Temperature( 100 )
	), //Illustration of using builtin models in script without going through UI interaction to setup.
	Fit by System ID()
);
obj << Generate Report for Current Model();
obj << Specify and Fit Path(
	Formula Name( "Reaction Rate Type I 1" ),
	Formula(
		Model Type( "Reaction Rate Type I" ),
		Temperature Unit( "Celsius" ),
		Baseline Temperature( . )
	), //Illustration of using builtin models in script without going through UI interaction to setup. This is not a proper model for the data. For illustration purpose only.
	Fit by System ID()
);
obj << Generate Report for Current Model();
obj << Specify and Fit Path(
	Formula Name( "Constant Rate 1" ),
	Formula(
		Model Type( "Constant Rate" ),
		Path Transformation( "No Transformation" ),
		Rate Transformation( "Arrhenius Celsius" ),
		Time Transformation( Custom( "Function({x}, x^(1/3))" ) )
	), //Illustration of using builtin models in script without going through UI interaction to setup. This is not a proper model for the data. For illustration purpose only.
	Fit Model()
);
obj << Generate Report for Current Model();

```

### Test Stability

**Syntax:** obj &lt;&lt; Test Stability

**Description:** Runs a stability analysis for determining estimated expiration dates.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Stability.jmp" );
obj = dt << Degradation(
	Y( :"Concentration (mg/Kg)"n ),
	Time( :Time ),
	Label( :Batch Number ),
	Set Lower Spec Limit( 99 )
);
obj << Test Stability;

```

### Use Interpolation through Data

**Syntax:** obj &lt;&lt; Use Interpolation through Data( state=0|1 )

**Description:** Specifies the use of linear interpolation between points (instead of the fitted model) to predict when a unit crosses the specification limit. The behavior depends on whether a unit has observations that exceed the specification limit. If a unit has observations exceeding the specification limit, the inverse prediction is the linear interpolation between the observations that surround the specification limit. If a unit does not have observations exceeding the specification limit, the inverse prediction is censored and has a value equal to the maximum observed time for that unit.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
obj << Set Upper Spec Limit( 6 );
obj << Show Curve Interval( "Prediction Interval" );
obj << Show Residual Plot( 0 );
obj << No Tab List( 1 );
Wait( 1 );
obj << Use Interpolation through Data( 1 );

```

### Use Pooled MSE for Nonpoolable Model

**Syntax:** obj = Degradation(...Use Pooled MSE for Nonpoolable Model( state=0 )...)

**Description:** Specifies that the first model in the stability analysis uses a model with a pooled mean square error (MSE) to compute the earliest crossing time. "0" by default.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Stability.jmp" );
obj = dt << Degradation(
	Y( :"Concentration (mg/Kg)"n ),
	Time( :Time ),
	Label( :Batch Number ),
	Application( "Stability Test" ),
	Set Lower Spec Limit( 99 ),
	Use Pooled MSE for Nonpoolable Model( 1 )
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

### Automatic Recalc

**Syntax:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Description:** Redoes the analysis automatically for exclude and data changes. If the Automatic Recalc option is turned on, you should consider using Wait(0) commands to ensure that the exclude and data changes take effect before the recalculation.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

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

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
);
obj << Copy Script;

```

### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Description:** Move the data table window for this analysis to the front.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
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

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	),
	By( _bycol )
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

#### General

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
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

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
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

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Description:** Times the platform launch.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
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

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntax:** obj &lt;&lt; Redo ByGroup Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntax:** obj &lt;&lt; Relaunch ByGroup

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	),
	By( _bycol )
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

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntax:** obj &lt;&lt; Report View( "Full"|"Summary" )

**Description:** The report view determines the level of detail visible in a platform report. Full shows all of the detail, while Summary shows only select content, dependent on the platform. For customized behavior, display boxes support a <<Set Summary Behavior message.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
);
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Creates a JSL script to produce this analysis, and save it as a table property in the data table. You can specify a name for the script. The Append Suffix option appends a numeric suffix to the script name, which differentiates the script from an existing script with the same name. The Prompt option prompts the user to specify a script name. The Replace option replaces an existing script with the same name.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
);
obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
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

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
);
obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Description:** Returns a reference to the root node in the report.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
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

**Syntax:** obj = Degradation(...Window View( "Visible"|"Invisible"|"Private" )...)

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


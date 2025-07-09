# Time Series



## ARIMA

### Actual

**Syntax:** obj << Actual( state=0|1 )

**Description:** Selects the Actual data column for saving with the Save Columns command. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

### Autocorrelations

**Syntax:** obj << Autocorrelations( state=0|1 )

**Description:** Displays or hides the autocorrelations plot. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

### Confidence Intervals

**Syntax:** obj << Confidence Intervals( number )

### Create SAS Job

**Syntax:** obj << Create SAS Job

**Description:** Creates a SAS Job to launch SAS and run the analysis in PROC ARIMA.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Create SAS Job;

```

### Innovations

**Syntax:** obj << Innovations( state=0|1 )

**Description:** On by default.

**JMP Version Added:** 16

### Lower Confidence Limit

**Syntax:** obj << Lower Confidence Limit( state=0|1 )

**Description:** Selects the Lower 95% Confidence Limit values column for saving with the Save Columns command. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

### No Constrain

**Syntax:** obj << No Constrain( state=0|1 )

**Description:** Lifts the constraint on the autoregressive parameters to always remain within the stable region and the moving average parameters within the invertible region when launching an ARIMA model.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

### No Intercept

**Syntax:** obj << No Intercept( state=0|1 )

**Description:** Sets the intercept to zero when launching an ARIMA model.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

### Partial Autocorrelations

**Syntax:** obj << Partial Autocorrelations( state=0|1 )

**Description:** Displays or hides the partial autocorrelations plot. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Partial Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

### Plot

**Syntax:** obj << Plot( state=0|1 )

**Description:** Displays or hides the residual statistics plot. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Plot( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

### Predicted

**Syntax:** obj << Predicted( state=0|1 )

**Description:** Selects the Predicted values data column for saving with the Save Columns command. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

### Prediction Interval

**Syntax:** obj << Prediction Interval( level )

**Description:** Sets the size of the confidence interval about the prediction for the ARIMA model. The default size is 0.95.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

### Remove Fit

**Syntax:** obj << Remove Fit

**JMP Version Added:** 16

### Residuals

**Syntax:** obj << Residuals( state=0|1 )

**Description:** Selects the Residuals values data column for saving with the Save Columns command. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

### Save Columns

**Syntax:** obj << Save Columns

**Description:** Creates a new data table containing the actual and predicted values together with standard errors, residuals and 95% prediction intervals about the response. This option is available for all ARIMA, Smoothing, and Transfer Function models.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Columns;

```

### Save Prediction Formula

**Syntax:** obj << Save Prediction Formula

**Description:** Saves the Prediction Formula to a new column in the data table. This option is available for all ARIMA and Smoothing models.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Prediction Formula;

```

### Show Confidence Interval

**Syntax:** obj << Show Confidence Interval( state=0|1 )

**Description:** Shows or hides prediction intervals on the Time Series Forecast Plot. This option is available for all ARIMA and Smoothing models. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Confidence Interval( 0 );

```

### Show Points

**Syntax:** obj << Show Points( state=0|1 )

**Description:** Shows or hides points on the Time Series Forecast Plot. This option is available for all ARIMA and Smoothing models. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Show Points( 1 ) );

(obj << report)["Model Comparison"] << Close( 1 );

```

### Show Prediction Interval

**Syntax:** obj << Show Prediction Interval( state=0|1 )

**Description:** Shows or hides prediction intervals on the Time Series Forecast Plot. This option is available for all ARIMA and Smoothing models. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Prediction Interval( 0 );

```

### Std Error of Predicted

**Syntax:** obj << Std Error of Predicted( state=0|1 )

**Description:** Selects the Standard Error of Predicted values data column for saving with the Save Columns command. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

### Time

**Syntax:** obj << Time( state=0|1 )

**Description:** Selects the Time data column for saving with the Save Columns command. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );
obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

### Upper Confidence Limit

**Syntax:** obj << Upper Confidence Limit( state=0|1 )

**Description:** Selects the Upper 95% Confidence Limit values column for saving with the Save Columns command. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

### Variogram

**Syntax:** obj << Variogram( state=0|1 )

**Description:** Displays or hides the Variogram.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Variogram( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

## Damped-Trend Linear Exponential Smoothing

### Actual

**Syntax:** obj << Actual( state=0|1 )

**Description:** Selects the Actual data column for saving with the Save Columns command. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

### Autocorrelations

**Syntax:** obj << Autocorrelations( state=0|1 )

**Description:** Displays or hides the autocorrelations plot. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

### Confidence Intervals

**Syntax:** obj << Confidence Intervals( number )

### Create SAS Job

**Syntax:** obj << Create SAS Job

**Description:** Creates a SAS Job to launch SAS and run the analysis in PROC ARIMA.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Create SAS Job;

```

### Innovations

**Syntax:** obj << Innovations( state=0|1 )

**Description:** On by default.

**JMP Version Added:** 16

### Lower Confidence Limit

**Syntax:** obj << Lower Confidence Limit( state=0|1 )

**Description:** Selects the Lower 95% Confidence Limit values column for saving with the Save Columns command. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

### No Constrain

**Syntax:** obj << No Constrain( state=0|1 )

**Description:** Lifts the constraint on the autoregressive parameters to always remain within the stable region and the moving average parameters within the invertible region when launching an ARIMA model.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

### No Intercept

**Syntax:** obj << No Intercept( state=0|1 )

**Description:** Sets the intercept to zero when launching an ARIMA model.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

### Partial Autocorrelations

**Syntax:** obj << Partial Autocorrelations( state=0|1 )

**Description:** Displays or hides the partial autocorrelations plot. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Partial Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

### Plot

**Syntax:** obj << Plot( state=0|1 )

**Description:** Displays or hides the residual statistics plot. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Plot( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

### Predicted

**Syntax:** obj << Predicted( state=0|1 )

**Description:** Selects the Predicted values data column for saving with the Save Columns command. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

### Prediction Interval

**Syntax:** obj << Prediction Interval( level )

**Description:** Sets the size of the confidence interval about the prediction for the ARIMA model. The default size is 0.95.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

### Remove Fit

**Syntax:** obj << Remove Fit

**JMP Version Added:** 16

### Residuals

**Syntax:** obj << Residuals( state=0|1 )

**Description:** Selects the Residuals values data column for saving with the Save Columns command. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

### Save Columns

**Syntax:** obj << Save Columns

**Description:** Creates a new data table containing the actual and predicted values together with standard errors, residuals and 95% prediction intervals about the response. This option is available for all ARIMA, Smoothing, and Transfer Function models.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Columns;

```

### Save Prediction Formula

**Syntax:** obj << Save Prediction Formula

**Description:** Saves the Prediction Formula to a new column in the data table. This option is available for all ARIMA and Smoothing models.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Prediction Formula;

```

### Show Confidence Interval

**Syntax:** obj << Show Confidence Interval( state=0|1 )

**Description:** Shows or hides prediction intervals on the Time Series Forecast Plot. This option is available for all ARIMA and Smoothing models. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Confidence Interval( 0 );

```

### Show Points

**Syntax:** obj << Show Points( state=0|1 )

**Description:** Shows or hides points on the Time Series Forecast Plot. This option is available for all ARIMA and Smoothing models. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Show Points( 1 ) );

(obj << report)["Model Comparison"] << Close( 1 );

```

### Show Prediction Interval

**Syntax:** obj << Show Prediction Interval( state=0|1 )

**Description:** Shows or hides prediction intervals on the Time Series Forecast Plot. This option is available for all ARIMA and Smoothing models. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Prediction Interval( 0 );

```

### Std Error of Predicted

**Syntax:** obj << Std Error of Predicted( state=0|1 )

**Description:** Selects the Standard Error of Predicted values data column for saving with the Save Columns command. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

### Time

**Syntax:** obj << Time( state=0|1 )

**Description:** Selects the Time data column for saving with the Save Columns command. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );
obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

### Upper Confidence Limit

**Syntax:** obj << Upper Confidence Limit( state=0|1 )

**Description:** Selects the Upper 95% Confidence Limit values column for saving with the Save Columns command. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

### Variogram

**Syntax:** obj << Variogram( state=0|1 )

**Description:** Displays or hides the Variogram.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Variogram( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

## Difference

### Autocorrelation

**Syntax:** obj << Autocorrelation( state=0|1 )

**Description:** Displays or hides the Autocorrelation in the Difference report. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Difference( 1, 0, 0, Autocorrelation( 1 ) );

```

### Connecting Lines

**Syntax:** obj << Connecting Lines( state=0|1 )

**Description:** Displays or hides the lines connecting the points on the Difference Graph. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Difference( 1, 0, 0, Connecting Lines( 1 ) );

```

### Difference Graph

**Syntax:** obj << Difference Graph( state=0|1 )

**Description:** Displays or hides the Difference Graph. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Difference( 1, 0, 0, Difference Graph( 1 ) );

```

### Mean Line

**Syntax:** obj << Mean Line( state=0|1 )

**Description:** Displays or hides the mean line on the Difference Graph.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Difference( 1, 0, 0, Mean Line( 1 ) );

```

### Partial Autocorrelation

**Syntax:** obj << Partial Autocorrelation( state=0|1 )

**Description:** Displays or hides the Partial Autocorrelation in the Difference report. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Difference( 1, 0, 0, Partial Autocorrelation( 1 ) );

```

### Remove Fit

**Syntax:** obj << Remove Fit

**JMP Version Added:** 16

### Save

**Syntax:** obj << Save

**Description:** Saves the Difference values in a new column in the data table.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Difference( 1, 0, 0, Save );

```

### Show Points

**Syntax:** obj << Show Points( state=0|1 )

**Description:** Displays or hides the points on the Difference Graph. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Difference( 1, 0, 0, Show Points( 1 ) );

```

### Variogram

**Syntax:** obj << Variogram( state=0|1 )

**Description:** Displays or hides the Variogram in the Difference report.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Difference( 1, 0, 0, Variogram( 1 ) );

```

## Double (Brown) Exponential Smoothing

### Actual

**Syntax:** obj << Actual( state=0|1 )

**Description:** Selects the Actual data column for saving with the Save Columns command. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

### Autocorrelations

**Syntax:** obj << Autocorrelations( state=0|1 )

**Description:** Displays or hides the autocorrelations plot. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

### Confidence Intervals

**Syntax:** obj << Confidence Intervals( number )

### Create SAS Job

**Syntax:** obj << Create SAS Job

**Description:** Creates a SAS Job to launch SAS and run the analysis in PROC ARIMA.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Create SAS Job;

```

### Innovations

**Syntax:** obj << Innovations( state=0|1 )

**Description:** On by default.

**JMP Version Added:** 16

### Lower Confidence Limit

**Syntax:** obj << Lower Confidence Limit( state=0|1 )

**Description:** Selects the Lower 95% Confidence Limit values column for saving with the Save Columns command. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

### No Constrain

**Syntax:** obj << No Constrain( state=0|1 )

**Description:** Lifts the constraint on the autoregressive parameters to always remain within the stable region and the moving average parameters within the invertible region when launching an ARIMA model.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

### No Intercept

**Syntax:** obj << No Intercept( state=0|1 )

**Description:** Sets the intercept to zero when launching an ARIMA model.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

### Partial Autocorrelations

**Syntax:** obj << Partial Autocorrelations( state=0|1 )

**Description:** Displays or hides the partial autocorrelations plot. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Partial Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

### Plot

**Syntax:** obj << Plot( state=0|1 )

**Description:** Displays or hides the residual statistics plot. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Plot( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

### Predicted

**Syntax:** obj << Predicted( state=0|1 )

**Description:** Selects the Predicted values data column for saving with the Save Columns command. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

### Prediction Interval

**Syntax:** obj << Prediction Interval( level )

**Description:** Sets the size of the confidence interval about the prediction for the ARIMA model. The default size is 0.95.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

### Remove Fit

**Syntax:** obj << Remove Fit

**JMP Version Added:** 16

### Residuals

**Syntax:** obj << Residuals( state=0|1 )

**Description:** Selects the Residuals values data column for saving with the Save Columns command. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

### Save Columns

**Syntax:** obj << Save Columns

**Description:** Creates a new data table containing the actual and predicted values together with standard errors, residuals and 95% prediction intervals about the response. This option is available for all ARIMA, Smoothing, and Transfer Function models.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Columns;

```

### Save Prediction Formula

**Syntax:** obj << Save Prediction Formula

**Description:** Saves the Prediction Formula to a new column in the data table. This option is available for all ARIMA and Smoothing models.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Prediction Formula;

```

### Show Confidence Interval

**Syntax:** obj << Show Confidence Interval( state=0|1 )

**Description:** Shows or hides prediction intervals on the Time Series Forecast Plot. This option is available for all ARIMA and Smoothing models. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Confidence Interval( 0 );

```

### Show Points

**Syntax:** obj << Show Points( state=0|1 )

**Description:** Shows or hides points on the Time Series Forecast Plot. This option is available for all ARIMA and Smoothing models. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Show Points( 1 ) );

(obj << report)["Model Comparison"] << Close( 1 );

```

### Show Prediction Interval

**Syntax:** obj << Show Prediction Interval( state=0|1 )

**Description:** Shows or hides prediction intervals on the Time Series Forecast Plot. This option is available for all ARIMA and Smoothing models. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Prediction Interval( 0 );

```

### Std Error of Predicted

**Syntax:** obj << Std Error of Predicted( state=0|1 )

**Description:** Selects the Standard Error of Predicted values data column for saving with the Save Columns command. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

### Time

**Syntax:** obj << Time( state=0|1 )

**Description:** Selects the Time data column for saving with the Save Columns command. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );
obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

### Upper Confidence Limit

**Syntax:** obj << Upper Confidence Limit( state=0|1 )

**Description:** Selects the Upper 95% Confidence Limit values column for saving with the Save Columns command. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

### Variogram

**Syntax:** obj << Variogram( state=0|1 )

**Description:** Displays or hides the Variogram.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Variogram( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

## Linear (Holt) Exponential Smoothing

### Actual

**Syntax:** obj << Actual( state=0|1 )

**Description:** Selects the Actual data column for saving with the Save Columns command. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

### Autocorrelations

**Syntax:** obj << Autocorrelations( state=0|1 )

**Description:** Displays or hides the autocorrelations plot. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

### Confidence Intervals

**Syntax:** obj << Confidence Intervals( number )

### Create SAS Job

**Syntax:** obj << Create SAS Job

**Description:** Creates a SAS Job to launch SAS and run the analysis in PROC ARIMA.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Create SAS Job;

```

### Innovations

**Syntax:** obj << Innovations( state=0|1 )

**Description:** On by default.

**JMP Version Added:** 16

### Lower Confidence Limit

**Syntax:** obj << Lower Confidence Limit( state=0|1 )

**Description:** Selects the Lower 95% Confidence Limit values column for saving with the Save Columns command. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

### No Constrain

**Syntax:** obj << No Constrain( state=0|1 )

**Description:** Lifts the constraint on the autoregressive parameters to always remain within the stable region and the moving average parameters within the invertible region when launching an ARIMA model.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

### No Intercept

**Syntax:** obj << No Intercept( state=0|1 )

**Description:** Sets the intercept to zero when launching an ARIMA model.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

### Partial Autocorrelations

**Syntax:** obj << Partial Autocorrelations( state=0|1 )

**Description:** Displays or hides the partial autocorrelations plot. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Partial Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

### Plot

**Syntax:** obj << Plot( state=0|1 )

**Description:** Displays or hides the residual statistics plot. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Plot( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

### Predicted

**Syntax:** obj << Predicted( state=0|1 )

**Description:** Selects the Predicted values data column for saving with the Save Columns command. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

### Prediction Interval

**Syntax:** obj << Prediction Interval( level )

**Description:** Sets the size of the confidence interval about the prediction for the ARIMA model. The default size is 0.95.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

### Remove Fit

**Syntax:** obj << Remove Fit

**JMP Version Added:** 16

### Residuals

**Syntax:** obj << Residuals( state=0|1 )

**Description:** Selects the Residuals values data column for saving with the Save Columns command. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

### Save Columns

**Syntax:** obj << Save Columns

**Description:** Creates a new data table containing the actual and predicted values together with standard errors, residuals and 95% prediction intervals about the response. This option is available for all ARIMA, Smoothing, and Transfer Function models.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Columns;

```

### Save Prediction Formula

**Syntax:** obj << Save Prediction Formula

**Description:** Saves the Prediction Formula to a new column in the data table. This option is available for all ARIMA and Smoothing models.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Prediction Formula;

```

### Show Confidence Interval

**Syntax:** obj << Show Confidence Interval( state=0|1 )

**Description:** Shows or hides prediction intervals on the Time Series Forecast Plot. This option is available for all ARIMA and Smoothing models. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Confidence Interval( 0 );

```

### Show Points

**Syntax:** obj << Show Points( state=0|1 )

**Description:** Shows or hides points on the Time Series Forecast Plot. This option is available for all ARIMA and Smoothing models. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Show Points( 1 ) );

(obj << report)["Model Comparison"] << Close( 1 );

```

### Show Prediction Interval

**Syntax:** obj << Show Prediction Interval( state=0|1 )

**Description:** Shows or hides prediction intervals on the Time Series Forecast Plot. This option is available for all ARIMA and Smoothing models. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Prediction Interval( 0 );

```

### Std Error of Predicted

**Syntax:** obj << Std Error of Predicted( state=0|1 )

**Description:** Selects the Standard Error of Predicted values data column for saving with the Save Columns command. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

### Time

**Syntax:** obj << Time( state=0|1 )

**Description:** Selects the Time data column for saving with the Save Columns command. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );
obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

### Upper Confidence Limit

**Syntax:** obj << Upper Confidence Limit( state=0|1 )

**Description:** Selects the Upper 95% Confidence Limit values column for saving with the Save Columns command. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

### Variogram

**Syntax:** obj << Variogram( state=0|1 )

**Description:** Displays or hides the Variogram.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Variogram( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

## Seasonal ARIMA

### Actual

**Syntax:** obj << Actual( state=0|1 )

**Description:** Selects the Actual data column for saving with the Save Columns command. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

### Autocorrelations

**Syntax:** obj << Autocorrelations( state=0|1 )

**Description:** Displays or hides the autocorrelations plot. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

### Confidence Intervals

**Syntax:** obj << Confidence Intervals( number )

### Create SAS Job

**Syntax:** obj << Create SAS Job

**Description:** Creates a SAS Job to launch SAS and run the analysis in PROC ARIMA.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Create SAS Job;

```

### Innovations

**Syntax:** obj << Innovations( state=0|1 )

**Description:** On by default.

**JMP Version Added:** 16

### Lower Confidence Limit

**Syntax:** obj << Lower Confidence Limit( state=0|1 )

**Description:** Selects the Lower 95% Confidence Limit values column for saving with the Save Columns command. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

### No Constrain

**Syntax:** obj << No Constrain( state=0|1 )

**Description:** Lifts the constraint on the autoregressive parameters to always remain within the stable region and the moving average parameters within the invertible region when launching an ARIMA model.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

### No Intercept

**Syntax:** obj << No Intercept( state=0|1 )

**Description:** Sets the intercept to zero when launching an ARIMA model.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

### Partial Autocorrelations

**Syntax:** obj << Partial Autocorrelations( state=0|1 )

**Description:** Displays or hides the partial autocorrelations plot. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Partial Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

### Plot

**Syntax:** obj << Plot( state=0|1 )

**Description:** Displays or hides the residual statistics plot. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Plot( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

### Predicted

**Syntax:** obj << Predicted( state=0|1 )

**Description:** Selects the Predicted values data column for saving with the Save Columns command. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

### Prediction Interval

**Syntax:** obj << Prediction Interval( level )

**Description:** Sets the size of the confidence interval about the prediction for the ARIMA model. The default size is 0.95.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

### Remove Fit

**Syntax:** obj << Remove Fit

**JMP Version Added:** 16

### Residuals

**Syntax:** obj << Residuals( state=0|1 )

**Description:** Selects the Residuals values data column for saving with the Save Columns command. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

### Save Columns

**Syntax:** obj << Save Columns

**Description:** Creates a new data table containing the actual and predicted values together with standard errors, residuals and 95% prediction intervals about the response. This option is available for all ARIMA, Smoothing, and Transfer Function models.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Columns;

```

### Save Prediction Formula

**Syntax:** obj << Save Prediction Formula

**Description:** Saves the Prediction Formula to a new column in the data table. This option is available for all ARIMA and Smoothing models.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Prediction Formula;

```

### Show Confidence Interval

**Syntax:** obj << Show Confidence Interval( state=0|1 )

**Description:** Shows or hides prediction intervals on the Time Series Forecast Plot. This option is available for all ARIMA and Smoothing models. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Confidence Interval( 0 );

```

### Show Points

**Syntax:** obj << Show Points( state=0|1 )

**Description:** Shows or hides points on the Time Series Forecast Plot. This option is available for all ARIMA and Smoothing models. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Show Points( 1 ) );

(obj << report)["Model Comparison"] << Close( 1 );

```

### Show Prediction Interval

**Syntax:** obj << Show Prediction Interval( state=0|1 )

**Description:** Shows or hides prediction intervals on the Time Series Forecast Plot. This option is available for all ARIMA and Smoothing models. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Prediction Interval( 0 );

```

### Std Error of Predicted

**Syntax:** obj << Std Error of Predicted( state=0|1 )

**Description:** Selects the Standard Error of Predicted values data column for saving with the Save Columns command. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

### Time

**Syntax:** obj << Time( state=0|1 )

**Description:** Selects the Time data column for saving with the Save Columns command. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );
obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

### Upper Confidence Limit

**Syntax:** obj << Upper Confidence Limit( state=0|1 )

**Description:** Selects the Upper 95% Confidence Limit values column for saving with the Save Columns command. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

### Variogram

**Syntax:** obj << Variogram( state=0|1 )

**Description:** Displays or hides the Variogram.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Variogram( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

## Seasonal Exponential Smoothing

### Actual

**Syntax:** obj << Actual( state=0|1 )

**Description:** Selects the Actual data column for saving with the Save Columns command. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

### Autocorrelations

**Syntax:** obj << Autocorrelations( state=0|1 )

**Description:** Displays or hides the autocorrelations plot. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

### Confidence Intervals

**Syntax:** obj << Confidence Intervals( number )

### Create SAS Job

**Syntax:** obj << Create SAS Job

**Description:** Creates a SAS Job to launch SAS and run the analysis in PROC ARIMA.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Create SAS Job;

```

### Innovations

**Syntax:** obj << Innovations( state=0|1 )

**Description:** On by default.

**JMP Version Added:** 16

### Lower Confidence Limit

**Syntax:** obj << Lower Confidence Limit( state=0|1 )

**Description:** Selects the Lower 95% Confidence Limit values column for saving with the Save Columns command. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

### No Constrain

**Syntax:** obj << No Constrain( state=0|1 )

**Description:** Lifts the constraint on the autoregressive parameters to always remain within the stable region and the moving average parameters within the invertible region when launching an ARIMA model.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

### No Intercept

**Syntax:** obj << No Intercept( state=0|1 )

**Description:** Sets the intercept to zero when launching an ARIMA model.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

### Partial Autocorrelations

**Syntax:** obj << Partial Autocorrelations( state=0|1 )

**Description:** Displays or hides the partial autocorrelations plot. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Partial Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

### Plot

**Syntax:** obj << Plot( state=0|1 )

**Description:** Displays or hides the residual statistics plot. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Plot( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

### Predicted

**Syntax:** obj << Predicted( state=0|1 )

**Description:** Selects the Predicted values data column for saving with the Save Columns command. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

### Prediction Interval

**Syntax:** obj << Prediction Interval( level )

**Description:** Sets the size of the confidence interval about the prediction for the ARIMA model. The default size is 0.95.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

### Remove Fit

**Syntax:** obj << Remove Fit

**JMP Version Added:** 16

### Residuals

**Syntax:** obj << Residuals( state=0|1 )

**Description:** Selects the Residuals values data column for saving with the Save Columns command. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

### Save Columns

**Syntax:** obj << Save Columns

**Description:** Creates a new data table containing the actual and predicted values together with standard errors, residuals and 95% prediction intervals about the response. This option is available for all ARIMA, Smoothing, and Transfer Function models.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Columns;

```

### Save Prediction Formula

**Syntax:** obj << Save Prediction Formula

**Description:** Saves the Prediction Formula to a new column in the data table. This option is available for all ARIMA and Smoothing models.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Prediction Formula;

```

### Show Confidence Interval

**Syntax:** obj << Show Confidence Interval( state=0|1 )

**Description:** Shows or hides prediction intervals on the Time Series Forecast Plot. This option is available for all ARIMA and Smoothing models. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Confidence Interval( 0 );

```

### Show Points

**Syntax:** obj << Show Points( state=0|1 )

**Description:** Shows or hides points on the Time Series Forecast Plot. This option is available for all ARIMA and Smoothing models. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Show Points( 1 ) );

(obj << report)["Model Comparison"] << Close( 1 );

```

### Show Prediction Interval

**Syntax:** obj << Show Prediction Interval( state=0|1 )

**Description:** Shows or hides prediction intervals on the Time Series Forecast Plot. This option is available for all ARIMA and Smoothing models. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Prediction Interval( 0 );

```

### Std Error of Predicted

**Syntax:** obj << Std Error of Predicted( state=0|1 )

**Description:** Selects the Standard Error of Predicted values data column for saving with the Save Columns command. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

### Time

**Syntax:** obj << Time( state=0|1 )

**Description:** Selects the Time data column for saving with the Save Columns command. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );
obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

### Upper Confidence Limit

**Syntax:** obj << Upper Confidence Limit( state=0|1 )

**Description:** Selects the Upper 95% Confidence Limit values column for saving with the Save Columns command. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

### Variogram

**Syntax:** obj << Variogram( state=0|1 )

**Description:** Displays or hides the Variogram.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Variogram( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

## Simple Exponential Smoothing

### Actual

**Syntax:** obj << Actual( state=0|1 )

**Description:** Selects the Actual data column for saving with the Save Columns command. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

### Autocorrelations

**Syntax:** obj << Autocorrelations( state=0|1 )

**Description:** Displays or hides the autocorrelations plot. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

### Confidence Intervals

**Syntax:** obj << Confidence Intervals( number )

### Create SAS Job

**Syntax:** obj << Create SAS Job

**Description:** Creates a SAS Job to launch SAS and run the analysis in PROC ARIMA.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Create SAS Job;

```

### Innovations

**Syntax:** obj << Innovations( state=0|1 )

**Description:** On by default.

**JMP Version Added:** 16

### Lower Confidence Limit

**Syntax:** obj << Lower Confidence Limit( state=0|1 )

**Description:** Selects the Lower 95% Confidence Limit values column for saving with the Save Columns command. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

### No Constrain

**Syntax:** obj << No Constrain( state=0|1 )

**Description:** Lifts the constraint on the autoregressive parameters to always remain within the stable region and the moving average parameters within the invertible region when launching an ARIMA model.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

### No Intercept

**Syntax:** obj << No Intercept( state=0|1 )

**Description:** Sets the intercept to zero when launching an ARIMA model.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

### Partial Autocorrelations

**Syntax:** obj << Partial Autocorrelations( state=0|1 )

**Description:** Displays or hides the partial autocorrelations plot. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Partial Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

### Plot

**Syntax:** obj << Plot( state=0|1 )

**Description:** Displays or hides the residual statistics plot. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Plot( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

### Predicted

**Syntax:** obj << Predicted( state=0|1 )

**Description:** Selects the Predicted values data column for saving with the Save Columns command. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

### Prediction Interval

**Syntax:** obj << Prediction Interval( level )

**Description:** Sets the size of the confidence interval about the prediction for the ARIMA model. The default size is 0.95.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

### Remove Fit

**Syntax:** obj << Remove Fit

**JMP Version Added:** 16

### Residuals

**Syntax:** obj << Residuals( state=0|1 )

**Description:** Selects the Residuals values data column for saving with the Save Columns command. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

### Save Columns

**Syntax:** obj << Save Columns

**Description:** Creates a new data table containing the actual and predicted values together with standard errors, residuals and 95% prediction intervals about the response. This option is available for all ARIMA, Smoothing, and Transfer Function models.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Columns;

```

### Save Prediction Formula

**Syntax:** obj << Save Prediction Formula

**Description:** Saves the Prediction Formula to a new column in the data table. This option is available for all ARIMA and Smoothing models.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Prediction Formula;

```

### Show Confidence Interval

**Syntax:** obj << Show Confidence Interval( state=0|1 )

**Description:** Shows or hides prediction intervals on the Time Series Forecast Plot. This option is available for all ARIMA and Smoothing models. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Confidence Interval( 0 );

```

### Show Points

**Syntax:** obj << Show Points( state=0|1 )

**Description:** Shows or hides points on the Time Series Forecast Plot. This option is available for all ARIMA and Smoothing models. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Show Points( 1 ) );

(obj << report)["Model Comparison"] << Close( 1 );

```

### Show Prediction Interval

**Syntax:** obj << Show Prediction Interval( state=0|1 )

**Description:** Shows or hides prediction intervals on the Time Series Forecast Plot. This option is available for all ARIMA and Smoothing models. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Prediction Interval( 0 );

```

### Std Error of Predicted

**Syntax:** obj << Std Error of Predicted( state=0|1 )

**Description:** Selects the Standard Error of Predicted values data column for saving with the Save Columns command. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

### Time

**Syntax:** obj << Time( state=0|1 )

**Description:** Selects the Time data column for saving with the Save Columns command. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );
obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

### Upper Confidence Limit

**Syntax:** obj << Upper Confidence Limit( state=0|1 )

**Description:** Selects the Upper 95% Confidence Limit values column for saving with the Save Columns command. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

### Variogram

**Syntax:** obj << Variogram( state=0|1 )

**Description:** Displays or hides the Variogram.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Variogram( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

## Simple Moving Average

### Add Model

**Syntax:** obj << Add Model( Window Width, <Centered> )

**Description:** Add a simple moving average model. Model is identified by moving window width. The optional argument indicates whether the average is centered.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
obj = Time Series( Y( :Close ), Simple Moving Average( Add Model( 5 ) ) );
sma = obj << Simple Moving Average( Add Model( 10 ) );
sma << Add Model( 15, Centered );

```

### Connecting Lines

**Syntax:** obj << Connecting Lines( <1|0> )

**Description:** Graph option for displaying connected lines.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
obj = Time Series( Y( :Close ), Simple Moving Average( Add Model( 5 ) ) );
sma = obj << Simple Moving Average( Connecting Lines );

```

### Get Results

**Syntax:** obj << Get Results

**Description:** Return all simple moving average models as a JSL object.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
obj = Time Series( Y( :Close ), Simple Moving Average( Add Model( 5 ) ) );
resultobj = obj << Simple Moving Average( Get Result );

```

### Remove Model

**Syntax:** obj << Remove Model( Window Width, <Centered> )

**Description:** Remove a simple moving average model. Model is identified by moving window width.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
obj = Time Series( Y( :Close ), Simple Moving Average( Add Model( 5 ) ) );
obj << Simple Moving Average( Remove Model( 5 ) );

```

### Remove Report

**Syntax:** obj << Remove Report

**JMP Version Added:** 16

### Save to Data Table

**Syntax:** obj << Save to Data Table

**Description:** Save all simple moving average models to a data table, and return the data table handle

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
obj = Time Series( Y( :Close ), Simple Moving Average( Add Model( 5 ) ) );
resultdt = obj << Simple Moving Average( Save to Data Table );

```

### Show Points

**Syntax:** obj << Show Points( <1|0> )

**Description:** Graph option for displaying points.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
obj = Time Series( Y( :Close ), Simple Moving Average( Add Model( 5 ) ) );
sma = obj << Simple Moving Average( Show Points( 0 ) );

```

## Transfer Function Model

### Alternative Parameterization

**Syntax:** obj << Alternative Parameterization( state=0|1 )

**Description:** Specifies whether the general regression coefficient is factored out of the numerator polynomials.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) )
);
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	Alternative Parameterization( 1 )
);

```

### Autocorrelations

**Syntax:** obj << Autocorrelations( state=0|1 )

**Description:** Displays or hides the autocorrelations plot. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	Autocorrelations( 1 )
);
(obj << report)["Residuals"] << Close( 0 );

```

### Compute Objective

**Syntax:** obj << Compute Objective

### Create SAS Job

**Syntax:** obj << Create SAS Job

**Description:** Creates a SAS Job to launch SAS and run the analysis in PROC ARIMA.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	Create SAS Job
);

```

### Import New Inputs

**Syntax:** obj << Import New Inputs

**JMP Version Added:** 16

### Maximum Iterations

**Syntax:** obj << Maximum Iterations( number )

**Description:** Specifies the maximum number of iterations.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) )
);
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	Maximum Iterations( 10 )
);

```

### No Constrain

**Syntax:** obj << No Constrain( state=0|1 )

**Description:** Removes the constraints on the AR and MA coefficients.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) )
);
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	No Constrain( 1 )
);

```

### No Intercept

**Syntax:** obj << No Intercept( state=0|1 )

**Description:** Sets the Intercept to zero.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) )
);
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	No Intercept( 1 )
);

```

### Number of Forecast Periods

**Syntax:** obj << Number of Forecast Periods( number )

**Description:** Specifies the number of periods for forecasting.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) )
);
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	Number of Forecast Periods( 10 )
);

```

### Partial Autocorrelations

**Syntax:** obj << Partial Autocorrelations( state=0|1 )

**Description:** Displays or hides the partial autocorrelations plot. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	Partial Autocorrelations( 1 )
);
(obj << report)["Residuals"] << Close( 0 );

```

### Plot

**Syntax:** obj << Plot( state=0|1 )

**Description:** Displays or hides the residual statistics plot. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	Plot( 1 )
);
(obj << report)["Residuals"] << Close( 0 );

```

### Prediction Interval

**Syntax:** obj << Prediction Interval( number )

**Description:** Sets the level of the confidence intervals displayed.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) )
);
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	Confidence Intervals( 0.99 )
);

```

### Remove Fit

**Syntax:** obj << Remove Fit

**JMP Version Added:** 16

### Save Columns

**Syntax:** obj << Save Columns

**Description:** Creates a new data table containing the actual and predicted values together with standard errors, residuals and 95% prediction intervals about the response. This option is available for all ARIMA, Smoothing, and Transfer Function models.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	Save Columns
);

```

### Variogram

**Syntax:** obj << Variogram( state=0|1 )

**Description:** Displays or hides the Variogram.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	Variogram( 1 )
);
(obj << report)["Residuals"] << Close( 0 );

```

## Winters Method (Additive)

### Actual

**Syntax:** obj << Actual( state=0|1 )

**Description:** Selects the Actual data column for saving with the Save Columns command. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

### Autocorrelations

**Syntax:** obj << Autocorrelations( state=0|1 )

**Description:** Displays or hides the autocorrelations plot. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

### Confidence Intervals

**Syntax:** obj << Confidence Intervals( number )

### Create SAS Job

**Syntax:** obj << Create SAS Job

**Description:** Creates a SAS Job to launch SAS and run the analysis in PROC ARIMA.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Create SAS Job;

```

### Innovations

**Syntax:** obj << Innovations( state=0|1 )

**Description:** On by default.

**JMP Version Added:** 16

### Lower Confidence Limit

**Syntax:** obj << Lower Confidence Limit( state=0|1 )

**Description:** Selects the Lower 95% Confidence Limit values column for saving with the Save Columns command. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

### No Constrain

**Syntax:** obj << No Constrain( state=0|1 )

**Description:** Lifts the constraint on the autoregressive parameters to always remain within the stable region and the moving average parameters within the invertible region when launching an ARIMA model.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

### No Intercept

**Syntax:** obj << No Intercept( state=0|1 )

**Description:** Sets the intercept to zero when launching an ARIMA model.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

### Partial Autocorrelations

**Syntax:** obj << Partial Autocorrelations( state=0|1 )

**Description:** Displays or hides the partial autocorrelations plot. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Partial Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

### Plot

**Syntax:** obj << Plot( state=0|1 )

**Description:** Displays or hides the residual statistics plot. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Plot( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

### Predicted

**Syntax:** obj << Predicted( state=0|1 )

**Description:** Selects the Predicted values data column for saving with the Save Columns command. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

### Prediction Interval

**Syntax:** obj << Prediction Interval( level )

**Description:** Sets the size of the confidence interval about the prediction for the ARIMA model. The default size is 0.95.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

### Remove Fit

**Syntax:** obj << Remove Fit

**JMP Version Added:** 16

### Residuals

**Syntax:** obj << Residuals( state=0|1 )

**Description:** Selects the Residuals values data column for saving with the Save Columns command. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

### Save Columns

**Syntax:** obj << Save Columns

**Description:** Creates a new data table containing the actual and predicted values together with standard errors, residuals and 95% prediction intervals about the response. This option is available for all ARIMA, Smoothing, and Transfer Function models.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Columns;

```

### Save Prediction Formula

**Syntax:** obj << Save Prediction Formula

**Description:** Saves the Prediction Formula to a new column in the data table. This option is available for all ARIMA and Smoothing models.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Prediction Formula;

```

### Show Confidence Interval

**Syntax:** obj << Show Confidence Interval( state=0|1 )

**Description:** Shows or hides prediction intervals on the Time Series Forecast Plot. This option is available for all ARIMA and Smoothing models. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Confidence Interval( 0 );

```

### Show Points

**Syntax:** obj << Show Points( state=0|1 )

**Description:** Shows or hides points on the Time Series Forecast Plot. This option is available for all ARIMA and Smoothing models. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Show Points( 1 ) );

(obj << report)["Model Comparison"] << Close( 1 );

```

### Show Prediction Interval

**Syntax:** obj << Show Prediction Interval( state=0|1 )

**Description:** Shows or hides prediction intervals on the Time Series Forecast Plot. This option is available for all ARIMA and Smoothing models. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Prediction Interval( 0 );

```

### Std Error of Predicted

**Syntax:** obj << Std Error of Predicted( state=0|1 )

**Description:** Selects the Standard Error of Predicted values data column for saving with the Save Columns command. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

### Time

**Syntax:** obj << Time( state=0|1 )

**Description:** Selects the Time data column for saving with the Save Columns command. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );
obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

### Upper Confidence Limit

**Syntax:** obj << Upper Confidence Limit( state=0|1 )

**Description:** Selects the Upper 95% Confidence Limit values column for saving with the Save Columns command. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

### Variogram

**Syntax:** obj << Variogram( state=0|1 )

**Description:** Displays or hides the Variogram.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Variogram( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

### AR Coefficients

**Syntax:** obj << AR Coefficients( state=0|1 )

**Description:** Displays or hides the autocorrelation coefficient plot.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << AR Coefficients( 1 );

```

### ARIMA

**Syntax:** obj << ARIMA( p, d, q, <No Intercept( 0|1 )>, <No Constrain( 0|1 )>, <Confidence Intervals( level )> )

**Description:** Fits an ARIMA model. Set order p,d, and q for an ARIMA(p,d,q) model. Set level for values other than 0.95.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << arima( 1, 0, 0 );
obj << arima(
	1,
	0,
	0,
	No Intercept( 1 ),
	No Constrain( 1 ),
	Confidence Intervals( 0.99 )
);

```

### ARIMA Model Group

**Syntax:** obj << ARIMA Model Group( AR(p0,p1),Diff(d0,d1),MA(q0,q1),Seasonal AR(P0,P1),Seasonal Diff(D0,D1),Seasonal MA(Q0,Q1),Seasonal Period(S0,S1),Confidence Intervals(C),Intercept(1),Constrain fit(1) )

**Description:** Fit a set of ARIMA models whose orders are in specified ranges.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << ARIMA Model Group( AR( 0, 2 ), MA( 0, 2 ) );

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

### Autocorrelation

**Syntax:** obj << Autocorrelation( state=0|1 )

**Description:** Displays or hides the autocorrelation plot. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Autocorrelation( 1 );

```

### Autocorrelation Lags

**Syntax:** obj = Time Series(...Autocorrelation Lags( number=25 )...)

**Description:** Set launch option for the maximum number of periods between points used in computing autocorrelations. "25" by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ), Autocorrelation Lags( 10 ) );

```

### Automatic Recalc

**Syntax:** obj << Automatic Recalc( state=0|1 )

**Description:** Redoes the analysis automatically for exclude and data changes. If the Automatic Recalc option is turned on, you should consider using Wait(0) commands to ensure that the exclude and data changes take effect before the recalculation.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

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

**Syntax:** obj << By( column(s) )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Time Series( Y( :steel shipments ), By( _bycol ) );

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

### Combine and Save Forecasts from Models

**Syntax:** obj << Combine and Save Forecasts from Models

**Description:** Creates a new data table with the combined results from all model fits in the report.

**JMP Version Added:** 16

### Connecting Lines

**Syntax:** obj << Connecting Lines( state=0|1 )

**Description:** Displays or hides connected lines in the basic time series plot. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Connecting Lines( 1 );

```

### Copy ByGroup Script

**Syntax:** obj << Copy ByGroup Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Time Series( Y( :steel shipments ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj << Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Copy Script;

```

### Cross Correlation

**Syntax:** obj << Cross Correlation( state=0|1 )

**Description:** Displays or hides the cross correlation plot.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = dt << Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Cross Correlation( 1 );

```

### Damped-Trend Linear Exponential Smoothing

**Syntax:** obj << Damped-Trend Linear Exponential Smoothing( Zero to One|Unconstrained|Stable Invertible|Custom( (Damping|Level)( Unconstrained| Bounded( lower, upper )| Fixed( value ) )), <Confidence Intervals(level)> )

**Description:** Fits a damped trend smoothing model.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
Time Series(
	Y( :Steel Shipments ),
	"Damped-Trend Linear Exponential Smoothing"n( Zero to One )
);

```

### Data Table Window

**Syntax:** obj << Data Table Window

**Description:** Move the data table window for this analysis to the front.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Data Table Window;

```

### Difference

**Syntax:** obj << Difference( d, <D>, <S> )

**Description:** Computes the differenced series and produces graphs of the autocorrelations and partial autocorrelations of the differenced series. The differenced series is given by  (1-B)^d * (1-B^S)^D * y_t , where y_t is the time series, B is the backshift operator defined by B * y_t = y_(t-1), d is the nonseasonal differencing order, D is the seasonal differencing order, and S is the number of observations per period.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Difference( 1 );
obj << Difference( 1, 1, 12 );

```

### Double Exponential Smoothing

**Syntax:** obj << Double Exponential Smoothing( Zero to One|Unconstrained|Stable Invertible|Custom( Level( Unconstrained| Bounded( lower, upper )| Fixed( value ) )), <Confidence Intervals(level)> )

**Description:** Invoke fitting a double exponential smoothing model.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
Time Series(
	Y( :Steel Shipments ),
	Double Exponential Smoothing( Zero to One ),
	Double Exponential Smoothing( Unconstrained ),
	Double Exponential Smoothing( Stable Invertible ),
	Double Exponential Smoothing( Custom( Level( Bounded( 0.8, 1 ) ) ) ),
	Double Exponential Smoothing( Custom( Level( Fixed( 0 ) ) ) ),
	Double Exponential Smoothing( Custom( Level( Unconstrained ) ) )
);

```

### Fit Recommended ETS

**Syntax:** obj << Fit Recommended ETS( Period( m ),Constrained( "Yes"|"No" ) )

**Description:** Fits all recommended state space smoothing models.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Seriesg.jmp" );
obj = dt << Time Series( Y( :Passengers ) );
obj << Fit Recommended ETS( Period( 12 ), Constrained( "Yes" ) );

```

### Forecast Periods

**Syntax:** obj = Time Series(...Forecast Periods( number=25 )...)

**Description:** Set launch option for the number of steps ahead in forecasting report. "25" by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ), Forecast Periods( 10 ) );
obj << ARIMA( 1, 0, 0 );

```

### Forecast on Holdback

**Syntax:** obj = Time Series(...Forecast on Holdback( state=0|1 )...)

**Description:** Determines whether the forecasts are made on future observations or on the holdback observations. If this option is selected, the forecasts are made on the holdback set that is determined by the number specified in the Forecast Periods option.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ), Forecast on Holdback( 1 ) );
obj << arima( 1, 0, 0 );
obj << Number of Forecast Periods( 100 );

```

### Generate Simulation

**Syntax:** obj << Generate Simulation( id, seed, length, n )

**Description:** Generates a data table of multiple future trajectories of a fitted model. Returns the table reference.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << arima( 1, 0, 0 );
dt = obj << Generate Simulation( 1, 11111, 100, 5 );

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
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Time Series( Y( :steel shipments ), By( _bycol ) );
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Syntax:** obj << Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

**General**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
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
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
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

### Get Model Specs

**Syntax:** obj << Get Model Specs

**Description:** Returns a named list of model results, each of which is named by model specification. Included in the output are estimates and standard errors. Available for ARIMA, Seasonal ARIMA, all smoothing models and Transfer Function Models.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Seriesg.jmp" );
obj = dt << Time Series( Y( :Log Passengers ) );
obj << Seasonal ARIMA( 0, 1, 1, 0, 1, 1, 12, No Intercept( 1 ) );
l = obj << Get Model Specs;
Show( l );

```

### Get Models

**Syntax:** obj << Get Models

**Description:** Returns a named list of model results, each of which is named by model descriptions. Included in the output are estimates and standard errors. Available for ARIMA, Seasonal ARIMA, all smoothing models and Transfer Function Models.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Seriesg.jmp" );
obj = dt << Time Series( Y( :Log Passengers ) );
obj << Seasonal ARIMA( 0, 1, 1, 0, 1, 1, 12, No Intercept( 1 ) );
l = obj << Get Models;
Show( l );

```

### Get Script

**Syntax:** obj << Get Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntax:** obj << Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntax:** obj << Get Timing

**Description:** Times the platform launch.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
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

### Hide All Reports

**Syntax:** obj << Hide All Reports

**Description:** Hides all of the models that are listed in the Model Comparison table from the report window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Seriesg.jmp" );
obj = dt << Time Series( Y( :Passengers ) );
obj << Fit Recommended ETS( Period( 12 ), Constrained( "Yes" ) );
obj << Hide All Model Reports;

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

### Input List

**Syntax:** obj << Input List( column(s) )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );

```

### Input Series

**Syntax:** obj << Input Series( Column, <ARIMA( )>| <Prewhitening( )> ... )

**Description:** Groups messages sent to the input series. Note: requires an Input List variable be specified.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = dt << Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Input Series( :Input Gas Rate, ARIMA( 1, 0, 0 ) );

```

### Keep Best Models

**Syntax:** obj << Keep Best Models( "AIC"|"SBC" )

**Description:** Retains the best models among individual model classes and removes the remaining models.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Seriesg.jmp" );
obj = dt << Time Series( Y( :Passengers ) );
obj << Fit Recommended ETS( Period( 12 ), Constrained( "Yes" ) );
Wait( 1 );
obj << Keep Best Models( "AIC" );

```

### Lambda for Box-Cox

**Syntax:** obj = Time Series(...Lambda for Box-Cox( number=0 )...)

**Description:** Specifies the lambda parameter used for the Box-Cox transformation of the original data. "0" by default.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series(
	Y( :Steel Shipments ),
	Name( "Use Box-Cox Transformation" )(1),
	Name( "Lambda for Box-Cox" )(0)
);
obj << arima( 1, 0, 0 );
obj << Number of Forecast Periods( 100 );

```

### Linear Exponential Smoothing

**Syntax:** obj << Linear Exponential Smoothing( Zero to One|Unconstrained|Stable Invertible|Custom( (Trend|Level)( Unconstrained| Bounded( lower, upper )| Fixed( value ) )), <Confidence Intervals(level)> )

**Description:** Fits a linear exponential smoothing model.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
Time Series(
	Y( :Steel Shipments ),
	Linear Exponential Smoothing( Zero to One ),
	Linear Exponential Smoothing( Unconstrained ),
	Linear Exponential Smoothing( Stable Invertible ),
	Linear Exponential Smoothing(
		Custom( Level( Bounded( 0.8, 1 ) ), Trend( Bounded( 0.7, 0.9 ) ) )
	),
	Linear Exponential Smoothing( Custom( Level( Fixed( 0 ) ), Trend( Fixed( .3 ) ) ) ),
	Linear Exponential Smoothing( Custom( Level( Unconstrained ), Trend( Fixed( .4 ) ) ) )
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

### Maximum Iterations

**Syntax:** obj << Maximum Iterations( maxIter=250 )

**Description:** Reset the maximum number of iterations for future optimizations used in ARIMA model fitting. "250" by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Maximum Iterations( 2 );
obj << ARIMA( 1, 0, 0 );

```

### Mean Line

**Syntax:** obj << Mean Line( state=0|1 )

**Description:** Displays or hides the mean line in the basic time series plot. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Mean Line( 1 );

```

### Model Comparison Report

**Syntax:** obj << Model Comparison Report

**Description:** Configures the Model Comparison report settings.

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

### Number of Forecast Periods

**Syntax:** obj << Number of Forecast Periods( number )

**Description:** Resets the number of forecast periods and updates the forecasting report.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << arima( 1, 0, 0 );
obj << Number of Forecast Periods( 100 );

```

### Partial Autocorrelation

**Syntax:** obj << Partial Autocorrelation( state=0|1 )

**Description:** Displays or hides the partial autocorrelation plot. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Partial Autocorrelation( 1 );

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

### Prewhitening

**Syntax:** obj << Prewhitening( Order(p, d, q), Seasonal(P, D, Q, S) )

**Description:** Sets the prewhitening order.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = dt << Time Series(
	Y( :Output CO2 ),
	Input List( :Input Gas Rate ),
	Input Series(
		:Input Gas Rate,
		Prewhitening( Order( 1, 0, 0 ), Seasonal( 0, 0, 0, 12 ) )
	)
);

```

### Redo Analysis

**Syntax:** obj << Redo Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntax:** obj << Redo ByGroup Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Time Series( Y( :steel shipments ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Syntax:** obj << Relaunch Analysis

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntax:** obj << Relaunch ByGroup

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Time Series( Y( :steel shipments ), By( _bycol ) );
obj[1] << Relaunch ByGroup;

```

### Remove All Simulation

**Syntax:** obj << Remove All Simulation

**Description:** Removes all simulated future trajectories.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << arima( 1, 0, 0 );
obj << arima( 2, 0, 0 );
obj << Simulate More( 1, 2 );
obj << Simulate More( 2, 3 );
obj << Remove All Simulation;

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

### Remove Cycle

**Syntax:** obj << Remove Cycle( Units per Cycle( number ), Has Constant( 0|1 ) )

**Description:** Estimates the cyclic component using a cosine function and then removes it from the data.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Monthly Sales.jmp" );
obj = dt << Time Series( Y( :Sales ) );
obj << Remove Cycle( Units per Cycle( 12 ), Has Constant( 1 ) );

```

### Remove Fit

**Syntax:** obj << Remove Fit

**JMP Version Added:** 16

### Remove Linear Trend

**Syntax:** obj << Remove Linear Trend

**Description:** Estimates the linear trend and then removes it from the data.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Monthly Sales.jmp" );
obj = dt << Time Series( Y( :Sales ) );
obj << Remove Linear Trend;

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

### Remove Model Simulation

**Syntax:** obj << Remove Model Simulation( id )

**Description:** Removes simulated future trajectories of a fitted model.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << arima( 1, 0, 0 );
obj << arima( 2, 0, 0 );
obj << Simulate More( 1, 2 );
obj << Simulate More( 2, 3 );
obj << Remove Model Simulation( 1 );

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
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntax:** obj << Report View( "Full"|"Summary" )

**Description:** The report view determines the level of detail visible in a platform report. Full shows all of the detail, while Summary shows only select content, dependent on the platform. For customized behavior, display boxes support a <<Set Summary Behavior message.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description:** Creates a JSL script to produce this analysis, and save it as a table property in the data table. You can specify a name for the script. The Append Suffix option appends a numeric suffix to the script name, which differentiates the script from an existing script with the same name. The Prompt option prompts the user to specify a script name. The Replace option replaces an existing script with the same name.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Time Series( Y( :steel shipments ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj << Save ByGroup Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Time Series( Y( :steel shipments ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj << Save ByGroup Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Time Series( Y( :steel shipments ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntax:** obj << Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj << Save Script for All Objects To Data Table( <name> )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Time Series( Y( :steel shipments ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Time Series( Y( :steel shipments ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj << Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj << Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj << Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Save Script to Script Window;

```

### Save Spectral Density

**Syntax:** obj << Save Spectral Density

**Description:** Save spectral density to a table.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Save Spectral Density;

```

### Seasonal ARIMA

**Syntax:** obj << Seasonal ARIMA( p, d, q, P, D, Q, S, <No Intercept( 0|1 )>, <No Constrain( 0|1 )>, <Confidence Intervals( level )> )

**Description:** Fits a seasonal ARIMA model. Set order p,d,q,P,D,Q,and S for an ARIMA(p,d,q)(P,D,Q)S model.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << seasonal arima( 1, 0, 0, 1, 0, 0, 12 );
obj << seasonal arima(
	1,
	0,
	0,
	1,
	0,
	0,
	12,
	No Intercept( 1 ),
	No Constrain( 1 ),
	Confidence Intervals( 0.99 )
);

```

### Seasonal Exponential Smoothing

**Syntax:** obj << Seasonal Exponential Smoothing( Zero to One|Unconstrained|Custom( (Level| Seasonal)( Unconstrained| Bounded( lower, upper )| Fixed( value ) )), <Confidence Intervals(level)> )

**Description:** Fits a seasonal exponential smoothing model.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
Time Series(
	Y( :Steel Shipments ),
	Seasonal Exponential Smoothing(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Seasonal( Bounded( 0, 1 ) ) )
	)
);

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

### Set Seed

**Syntax:** obj << Set Seed( seed )

**Description:** Sets random seed.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << arima( 1, 0, 0 );
obj << Set Seed( 1111 );
obj << Simulate Once( 1 );
obj << Set Seed( 1111 );
obj << Simulate Once( 1 );

```

### Show Box-Cox Transformation Plot

**Syntax:** obj << Show Box-Cox Transformation Plot( state=0|1 )

**JMP Version Added:** 16

### Show Lag Plot

**Syntax:** obj << Show Lag Plot( state=0|1 )

### Show Points

**Syntax:** obj << Show Points( state=0|1 )

**Description:** Displays or hides points in the basic time series plot. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Show Points( 1 );

```

### Simple Exponential Smoothing

**Syntax:** obj << Simple Exponential Smoothing( Zero to One|Unconstrained|Stable Invertible|Custom( Level( Unconstrained| Bounded( lower, upper )| Fixed( value ) )), <Confidence Intervals(level)> )

**Description:** Fits a simple exponential smoothing model.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
Time Series(
	Y( :Steel Shipments ),
	Simple Exponential Smoothing( Zero to One ),
	Simple Exponential Smoothing( Unconstrained ),
	Simple Exponential Smoothing( Stable Invertible ),
	Simple Exponential Smoothing( Custom( Level( Bounded( 0.8, 1 ) ) ) ),
	Simple Exponential Smoothing( Custom( Level( Fixed( 0 ) ) ) ),
	Simple Exponential Smoothing( Custom( Level( Unconstrained ) ) )
);

```

### Simple Moving Average

**Syntax:** obj << Simple Moving Average

**Description:** Invoke a simple moving average specification dialog and fit a model, if there are no additional arguments. Pass arguments to the simple moving average model scriptable. Return value is the simple moving average model scriptable handle. See Simple Moving Average scriptable for arguments details.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
obj = dt << Time Series( Y( :Close ) );
sma = obj << Simple Moving Average;
sma << Add Model( 10 );

```

### Simple Moving Average Centering Method

**Syntax:** obj << Simple Moving Average Centering Method( "No Centering"|"Centered"|"Centered and Double Smoothed for Even Number of Terms" )

### Simulate More

**Syntax:** obj << Simulate More( id, n )

**Description:** Simulates multiple future trajectories of a fitted model.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << arima( 1, 0, 0 );
obj << arima( 2, 0, 0 );
obj << Simulate More( 1, 2 );
obj << Simulate More( 2, 3 );

```

### Simulate Once

**Syntax:** obj << Simulate Once( id )

**Description:** Simulates one future trajectory of a fitted model.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << arima( 1, 0, 0 );
obj << arima( 2, 0, 0 );
obj << Simulate Once( 1 );
obj << Simulate Once( 2 );

```

### Spectral Density

**Syntax:** obj << Spectral Density( state=0|1 )

**Description:** Displays or hides the spectral density graphs.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Spectral Density( 1 );

```

### State Space Smoothing

**Syntax:** obj << State Space Smoothing( Error Type( "Additive"|"Multiplicative" ),Trend Type( "None"|"Additive"|"Multiplicative" ),Seasonal Type( "None"|"Additive"|"Multiplicative" ),Damped( "Yes"|"No" ),Period( m ),Constrained( "Yes"|"No" ) )

**Description:** Fits a state space smoothing model.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Seriesg.jmp" );
obj = dt << Time Series( Y( :Passengers ) );
obj << State Space Smoothing(
	Error Type( "Multiplicative" ),
	Trend Type( "Additive" ),
	Seasonal Type( "Multiplicative" ),
	Damped( "No" ),
	Period( 12 ),
	Constrained( "Yes" )
);

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

### Time ID

**Syntax:** obj << Time ID( column )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );

```

### Time Series

**Syntax:** Time Series( Y( column ) )

**Description:** Models a series of observations over equally spaced time points. Includes a time series plot, autocorrelations, variogram, spectral density, ARIMA, seasonal ARIMA, smoothing models, and forecasts.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );

```

### Time Series Graph

**Syntax:** obj << Time Series Graph( state=0|1 )

**Description:** Turn on or off the basic time series plot. On by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Time Series Graph( 1 );

```

### Title

**Syntax:** obj << Title( "new title" )

**Description:** Sets the title of the platform.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj << Top Report

**Description:** Returns a reference to the root node in the report.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transfer Function

**Syntax:** obj << Transfer Function( Order(p, d, q), Seasonal(P, D, Q, S), input1(Order(p, d, q), Seasonal(P, D, Q, S), Lag(lag)), <input2(Order(p, d, q), Seasonal(P, D, Q, S), Lag(lag))>, ..., <No Intercept(flag1)>, <No Constrain(flag2)>, <Alternative Parameterization( flag3 )>, <Confidence Intervals( level )>, <Number of Forecast Periods( nAhead )> )

**Description:** Fits a Transfer Function model.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = dt << Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) )
);
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	No Intercept( 1 ),
	Alternative Parameterization( 1 ),
	Confidence Intervals( 0.99 ),
	Number of Forecast Periods( 10 )
);

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

### Use Box-Cox Transformation

**Syntax:** obj = Time Series(...Use Box-Cox Transformation( state=0|1 )...)

**Description:** Transforms the original data using a Box-Cox transformation with the lambda that is specified in the Lambda for Box-Cox option. If this option is selected, all analyses in the Time Series report are performed on the transformed data.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ), Name( "Use Box-Cox Transformation" )(1) );
obj << arima( 1, 0, 0 );
obj << Number of Forecast Periods( 100 );

```

### Variogram

**Syntax:** obj << Variogram( state=0|1 )

**Description:** Displays or hides the variogram plot in the Time Series Basic Diagnostics report.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Variogram( 1 );

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

### Window View

**Syntax:** obj = Time Series(...Window View( "Visible"|"Invisible"|"Private" )...)

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

### Winters Method

**Syntax:** obj << Winters Method( Zero to One|Unconstrained|Custom( (Level|Seasonal|Trend)( Unconstrained| Seasonal| Bounded( lower, upper )| Fixed( value ) )), <Confidence Intervals(level)> )

**Description:** Fits a smoothing model using Winter&apos;s method.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom(
			Level( Bounded( 0, 1 ) ),
			Trend( Bounded( 0, 1 ) ),
			Seasonal( Bounded( 0, 1 ) )
		)
	)
);

```

### X

**Syntax:** obj << X( column )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );

```

### X11

**Syntax:** obj << X11( Additive|Multiplicative )

**Description:** Removes trend and seasonal effects using  the X-11 method developed by the US Bureau of the Census.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Monthly Sales.jmp" );
obj = dt << Time Series( X( :Date ), Y( :Sales ) );
obj << X11( Additive );

```

### Y

**Syntax:** obj << Y( column(s) )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );

```


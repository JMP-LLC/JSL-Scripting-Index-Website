# Time Series



## ARIMA

### Item Messages

#### Actual

**Syntax:** obj &lt;&lt; Actual( state=0|1 )

**Description:** Selects the Actual data column for saving with the Save Columns command. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

#### Autocorrelations

**Syntax:** obj &lt;&lt; Autocorrelations( state=0|1 )

**Description:** Displays or hides the autocorrelations plot. On by default.

```jsl

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

#### Confidence Intervals

**Syntax:** obj &lt;&lt; Confidence Intervals( number )

#### Create SAS Job

**Syntax:** obj &lt;&lt; Create SAS Job

**Description:** Creates a SAS Job to launch SAS and run the analysis in PROC ARIMA.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Create SAS Job;

```

#### Innovations

**Syntax:** obj &lt;&lt; Innovations( state=0|1 )

**Description:** On by default.

**JMP Version Added:** 16

#### Lower Confidence Limit

**Syntax:** obj &lt;&lt; Lower Confidence Limit( state=0|1 )

**Description:** Selects the Lower 95% Confidence Limit values column for saving with the Save Columns command. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

#### No Constrain

**Syntax:** obj &lt;&lt; No Constrain( state=0|1 )

**Description:** Lifts the constraint on the autoregressive parameters to always remain within the stable region and the moving average parameters within the invertible region when launching an ARIMA model.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

#### No Intercept

**Syntax:** obj &lt;&lt; No Intercept( state=0|1 )

**Description:** Sets the intercept to zero when launching an ARIMA model.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

#### Partial Autocorrelations

**Syntax:** obj &lt;&lt; Partial Autocorrelations( state=0|1 )

**Description:** Displays or hides the partial autocorrelations plot. On by default.

```jsl

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

#### Plot

**Syntax:** obj &lt;&lt; Plot( state=0|1 )

**Description:** Displays or hides the residual statistics plot. On by default.

```jsl

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

#### Predicted

**Syntax:** obj &lt;&lt; Predicted( state=0|1 )

**Description:** Selects the Predicted values data column for saving with the Save Columns command. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

#### Prediction Interval

**Syntax:** obj &lt;&lt; Prediction Interval( level )

**Description:** Sets the size of the confidence interval about the prediction for the ARIMA model. The default size is 0.95.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

#### Remove Fit

**Syntax:** obj &lt;&lt; Remove Fit

**JMP Version Added:** 16

#### Residuals

**Syntax:** obj &lt;&lt; Residuals( state=0|1 )

**Description:** Selects the Residuals values data column for saving with the Save Columns command. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

#### Save Columns

**Syntax:** obj &lt;&lt; Save Columns

**Description:** Creates a new data table containing the actual and predicted values together with standard errors, residuals and 95% prediction intervals about the response. This option is available for all ARIMA, Smoothing, and Transfer Function models.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Columns;

```

#### Save Prediction Formula

**Syntax:** obj &lt;&lt; Save Prediction Formula

**Description:** Saves the Prediction Formula to a new column in the data table. This option is available for all ARIMA and Smoothing models.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Prediction Formula;

```

#### Show Confidence Interval

**Syntax:** obj &lt;&lt; Show Confidence Interval( state=0|1 )

**Description:** Shows or hides prediction intervals on the Time Series Forecast Plot. This option is available for all ARIMA and Smoothing models. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Confidence Interval( 0 );

```

#### Show Points

**Syntax:** obj &lt;&lt; Show Points( state=0|1 )

**Description:** Shows or hides points on the Time Series Forecast Plot. This option is available for all ARIMA and Smoothing models. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Show Points( 1 ) );

(obj << report)["Model Comparison"] << Close( 1 );

```

#### Show Prediction Interval

**Syntax:** obj &lt;&lt; Show Prediction Interval( state=0|1 )

**Description:** Shows or hides prediction intervals on the Time Series Forecast Plot. This option is available for all ARIMA and Smoothing models. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Prediction Interval( 0 );

```

#### Std Error of Predicted

**Syntax:** obj &lt;&lt; Std Error of Predicted( state=0|1 )

**Description:** Selects the Standard Error of Predicted values data column for saving with the Save Columns command. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

#### Time

**Syntax:** obj &lt;&lt; Time( state=0|1 )

**Description:** Selects the Time data column for saving with the Save Columns command. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );
obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

#### Upper Confidence Limit

**Syntax:** obj &lt;&lt; Upper Confidence Limit( state=0|1 )

**Description:** Selects the Upper 95% Confidence Limit values column for saving with the Save Columns command. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

#### Variogram

**Syntax:** obj &lt;&lt; Variogram( state=0|1 )

**Description:** Displays or hides the Variogram.

```jsl

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

## Associated Constructors

### Time Series

**Syntax:** Time Series( Y( column ) )

**Description:** Models a series of observations over equally spaced time points. Includes a time series plot, autocorrelations, variogram, spectral density, ARIMA, seasonal ARIMA, smoothing models, and forecasts.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );

```

## Columns

### By

**Syntax:** obj &lt;&lt; By( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Time Series( Y( :steel shipments ), By( _bycol ) );

```

### Input List

**Syntax:** obj &lt;&lt; Input List( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );

```

### Time ID

**Syntax:** obj &lt;&lt; Time ID( column )

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );

```

### X

**Syntax:** obj &lt;&lt; X( column )

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );

```

### Y

**Syntax:** obj &lt;&lt; Y( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );

```

## Item Messages

### AR Coefficients

**Syntax:** obj &lt;&lt; AR Coefficients( state=0|1 )

**Description:** Displays or hides the autocorrelation coefficient plot.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << AR Coefficients( 1 );

```

### ARIMA

**Syntax:** obj &lt;&lt; ARIMA( p, d, q, &lt;No Intercept( 0|1 )&gt;, &lt;No Constrain( 0|1 )&gt;, &lt;Confidence Intervals( level )&gt; )

**Description:** Fits an ARIMA model. Set order p,d, and q for an ARIMA(p,d,q) model. Set level for values other than 0.95.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << arima( 1, 0, 0 );
obj << arima( 1, 0, 0, No Intercept( 1 ), No Constrain( 1 ), Confidence Intervals( 0.99 ) );

```

### ARIMA Model Group

**Syntax:** obj &lt;&lt; ARIMA Model Group( AR(p0,p1),Diff(d0,d1),MA(q0,q1),Seasonal AR(P0,P1),Seasonal Diff(D0,D1),Seasonal MA(Q0,Q1),Seasonal Period(S0,S1),Confidence Intervals(C),Intercept(1),Constrain fit(1) )

**Description:** Fit a set of ARIMA models whose orders are in specified ranges.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << ARIMA Model Group( AR( 0, 2 ), MA( 0, 2 ) );

```

### Autocorrelation

**Syntax:** obj &lt;&lt; Autocorrelation( state=0|1 )

**Description:** Displays or hides the autocorrelation plot. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Autocorrelation( 1 );

```

### Autocorrelation Lags

**Syntax:** obj = Time Series(...Autocorrelation Lags( number=25 )...)

**Description:** Set launch option for the maximum number of periods between points used in computing autocorrelations. "25" by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ), Autocorrelation Lags( 10 ) );

```

### Combine and Save Forecasts from Models

**Syntax:** obj &lt;&lt; Combine and Save Forecasts from Models

**Description:** Creates a new data table with the combined results from all model fits in the report.

**JMP Version Added:** 16

### Connecting Lines

**Syntax:** obj &lt;&lt; Connecting Lines( state=0|1 )

**Description:** Displays or hides connected lines in the basic time series plot. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Connecting Lines( 1 );

```

### Cross Correlation

**Syntax:** obj &lt;&lt; Cross Correlation( state=0|1 )

**Description:** Displays or hides the cross correlation plot.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = dt << Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Cross Correlation( 1 );

```

### Damped-Trend Linear Exponential Smoothing

**Syntax:** obj &lt;&lt; Damped-Trend Linear Exponential Smoothing( Zero to One|Unconstrained|Stable Invertible|Custom( (Damping|Level)( Unconstrained| Bounded( lower, upper )| Fixed( value ) )), &lt;Confidence Intervals(level)&gt; )

**Description:** Fits a damped trend smoothing model.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
Time Series(
	Y( :Steel Shipments ),
	"Damped-Trend Linear Exponential Smoothing"n( Zero to One )
);

```

### Difference

**Syntax:** obj &lt;&lt; Difference( d, &lt;D&gt;, &lt;S&gt; )

**Description:** Computes the differenced series and produces graphs of the autocorrelations and partial autocorrelations of the differenced series. The differenced series is given by  (1-B)^d * (1-B^S)^D * y_t , where y_t is the time series, B is the backshift operator defined by B * y_t = y_(t-1), d is the nonseasonal differencing order, D is the seasonal differencing order, and S is the number of observations per period.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Difference( 1 );
obj << Difference( 1, 1, 12 );

```

### Double Exponential Smoothing

**Syntax:** obj &lt;&lt; Double Exponential Smoothing( Zero to One|Unconstrained|Stable Invertible|Custom( Level( Unconstrained| Bounded( lower, upper )| Fixed( value ) )), &lt;Confidence Intervals(level)&gt; )

**Description:** Invoke fitting a double exponential smoothing model.

```jsl

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

**Syntax:** obj &lt;&lt; Fit Recommended ETS( Period( m ),Constrained( "Yes"|"No" ) )

**Description:** Fits all recommended state space smoothing models.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Seriesg.jmp" );
obj = dt << Time Series( Y( :Passengers ) );
obj << Fit Recommended ETS( Period( 12 ), Constrained( "Yes" ) );

```

### Forecast Periods

**Syntax:** obj = Time Series(...Forecast Periods( number=25 )...)

**Description:** Set launch option for the number of steps ahead in forecasting report. "25" by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ), Forecast Periods( 10 ) );
obj << ARIMA( 1, 0, 0 );

```

### Forecast on Holdback

**Syntax:** obj = Time Series(...Forecast on Holdback( state=0|1 )...)

**Description:** Determines whether the forecasts are made on future observations or on the holdback observations. If this option is selected, the forecasts are made on the holdback set that is determined by the number specified in the Forecast Periods option.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ), Forecast on Holdback( 1 ) );
obj << arima( 1, 0, 0 );
obj << Number of Forecast Periods( 100 );

```

### Generate Simulation

**Syntax:** obj &lt;&lt; Generate Simulation( id, seed, length, n )

**Description:** Generates a data table of multiple future trajectories of a fitted model. Returns the table reference.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << arima( 1, 0, 0 );
dt = obj << Generate Simulation( 1, 11111, 100, 5 );

```

### Get Model Specs

**Syntax:** obj &lt;&lt; Get Model Specs

**Description:** Returns a named list of model results, each of which is named by model specification. Included in the output are estimates and standard errors. Available for ARIMA, Seasonal ARIMA, all smoothing models and Transfer Function Models.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Seriesg.jmp" );
obj = dt << Time Series( Y( :Log Passengers ) );
obj << Seasonal ARIMA( 0, 1, 1, 0, 1, 1, 12, No Intercept( 1 ) );
l = obj << Get Model Specs;
Show( l );

```

### Get Models

**Syntax:** obj &lt;&lt; Get Models

**Description:** Returns a named list of model results, each of which is named by model descriptions. Included in the output are estimates and standard errors. Available for ARIMA, Seasonal ARIMA, all smoothing models and Transfer Function Models.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Seriesg.jmp" );
obj = dt << Time Series( Y( :Log Passengers ) );
obj << Seasonal ARIMA( 0, 1, 1, 0, 1, 1, 12, No Intercept( 1 ) );
l = obj << Get Models;
Show( l );

```

### Hide All Reports

**Syntax:** obj &lt;&lt; Hide All Reports

**Description:** Hides all of the models that are listed in the Model Comparison table from the report window.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Seriesg.jmp" );
obj = dt << Time Series( Y( :Passengers ) );
obj << Fit Recommended ETS( Period( 12 ), Constrained( "Yes" ) );
obj << Hide All Model Reports;

```

### Input Series

**Syntax:** obj &lt;&lt; Input Series( Column, &lt;ARIMA( )&gt;| &lt;Prewhitening( )&gt; ... )

**Description:** Groups messages sent to the input series. Note: requires an Input List variable be specified.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = dt << Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Input Series( :Input Gas Rate, ARIMA( 1, 0, 0 ) );

```

### Keep Best Models

**Syntax:** obj &lt;&lt; Keep Best Models( "AIC"|"SBC" )

**Description:** Retains the best models among individual model classes and removes the remaining models.

```jsl

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

```jsl

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

**Syntax:** obj &lt;&lt; Linear Exponential Smoothing( Zero to One|Unconstrained|Stable Invertible|Custom( (Trend|Level)( Unconstrained| Bounded( lower, upper )| Fixed( value ) )), &lt;Confidence Intervals(level)&gt; )

**Description:** Fits a linear exponential smoothing model.

```jsl

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

### Maximum Iterations

**Syntax:** obj &lt;&lt; Maximum Iterations( maxIter=250 )

**Description:** Reset the maximum number of iterations for future optimizations used in ARIMA model fitting. "250" by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Maximum Iterations( 2 );
obj << ARIMA( 1, 0, 0 );

```

### Mean Line

**Syntax:** obj &lt;&lt; Mean Line( state=0|1 )

**Description:** Displays or hides the mean line in the basic time series plot. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Mean Line( 1 );

```

### Model Comparison Report

**Syntax:** obj &lt;&lt; Model Comparison Report

**Description:** Configures the Model Comparison report settings.

### Number of Forecast Periods

**Syntax:** obj &lt;&lt; Number of Forecast Periods( number )

**Description:** Resets the number of forecast periods and updates the forecasting report.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << arima( 1, 0, 0 );
obj << Number of Forecast Periods( 100 );

```

### Partial Autocorrelation

**Syntax:** obj &lt;&lt; Partial Autocorrelation( state=0|1 )

**Description:** Displays or hides the partial autocorrelation plot. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Partial Autocorrelation( 1 );

```

### Prewhitening

**Syntax:** obj &lt;&lt; Prewhitening( Order(p, d, q), Seasonal(P, D, Q, S) )

**Description:** Sets the prewhitening order.

```jsl

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

### Remove All Simulation

**Syntax:** obj &lt;&lt; Remove All Simulation

**Description:** Removes all simulated future trajectories.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << arima( 1, 0, 0 );
obj << arima( 2, 0, 0 );
obj << Simulate More( 1, 2 );
obj << Simulate More( 2, 3 );
obj << Remove All Simulation;

```

### Remove Cycle

**Syntax:** obj &lt;&lt; Remove Cycle( Units per Cycle( number ), Has Constant( 0|1 ) )

**Description:** Estimates the cyclic component using a cosine function and then removes it from the data.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Monthly Sales.jmp" );
obj = dt << Time Series( Y( :Sales ) );
obj << Remove Cycle( Units per Cycle( 12 ), Has Constant( 1 ) );

```

### Remove Fit

**Syntax:** obj &lt;&lt; Remove Fit

**JMP Version Added:** 16

### Remove Linear Trend

**Syntax:** obj &lt;&lt; Remove Linear Trend

**Description:** Estimates the linear trend and then removes it from the data.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Monthly Sales.jmp" );
obj = dt << Time Series( Y( :Sales ) );
obj << Remove Linear Trend;

```

### Remove Model Simulation

**Syntax:** obj &lt;&lt; Remove Model Simulation( id )

**Description:** Removes simulated future trajectories of a fitted model.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << arima( 1, 0, 0 );
obj << arima( 2, 0, 0 );
obj << Simulate More( 1, 2 );
obj << Simulate More( 2, 3 );
obj << Remove Model Simulation( 1 );

```

### Save Spectral Density

**Syntax:** obj &lt;&lt; Save Spectral Density

**Description:** Save spectral density to a table.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Save Spectral Density;

```

### Seasonal ARIMA

**Syntax:** obj &lt;&lt; Seasonal ARIMA( p, d, q, P, D, Q, S, &lt;No Intercept( 0|1 )&gt;, &lt;No Constrain( 0|1 )&gt;, &lt;Confidence Intervals( level )&gt; )

**Description:** Fits a seasonal ARIMA model. Set order p,d,q,P,D,Q,and S for an ARIMA(p,d,q)(P,D,Q)S model.

```jsl

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

**Syntax:** obj &lt;&lt; Seasonal Exponential Smoothing( Zero to One|Unconstrained|Custom( (Level| Seasonal)( Unconstrained| Bounded( lower, upper )| Fixed( value ) )), &lt;Confidence Intervals(level)&gt; )

**Description:** Fits a seasonal exponential smoothing model.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
Time Series(
	Y( :Steel Shipments ),
	Seasonal Exponential Smoothing(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Seasonal( Bounded( 0, 1 ) ) )
	)
);

```

### Set Seed

**Syntax:** obj &lt;&lt; Set Seed( seed )

**Description:** Sets random seed.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << arima( 1, 0, 0 );
obj << Set Seed( 1111 );
obj << Simulate Once( 1 );
obj << Set Seed( 1111 );
obj << Simulate Once( 1 );

```

### Show Box-Cox Transformation Plot

**Syntax:** obj &lt;&lt; Show Box-Cox Transformation Plot( state=0|1 )

**JMP Version Added:** 16

### Show Lag Plot

**Syntax:** obj &lt;&lt; Show Lag Plot( state=0|1 )

### Show Points

**Syntax:** obj &lt;&lt; Show Points( state=0|1 )

**Description:** Displays or hides points in the basic time series plot. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Show Points( 1 );

```

### Simple Exponential Smoothing

**Syntax:** obj &lt;&lt; Simple Exponential Smoothing( Zero to One|Unconstrained|Stable Invertible|Custom( Level( Unconstrained| Bounded( lower, upper )| Fixed( value ) )), &lt;Confidence Intervals(level)&gt; )

**Description:** Fits a simple exponential smoothing model.

```jsl

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

**Syntax:** obj &lt;&lt; Simple Moving Average

**Description:** Invoke a simple moving average specification dialog and fit a model, if there are no additional arguments. Pass arguments to the simple moving average model scriptable. Return value is the simple moving average model scriptable handle. See Simple Moving Average scriptable for arguments details.

```jsl

dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
obj = dt << Time Series( Y( :Close ) );
sma = obj << Simple Moving Average;
sma << Add Model( 10 );

```

### Simple Moving Average Centering Method

**Syntax:** obj &lt;&lt; Simple Moving Average Centering Method( "No Centering"|"Centered"|"Centered and Double Smoothed for Even Number of Terms" )

### Simulate More

**Syntax:** obj &lt;&lt; Simulate More( id, n )

**Description:** Simulates multiple future trajectories of a fitted model.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << arima( 1, 0, 0 );
obj << arima( 2, 0, 0 );
obj << Simulate More( 1, 2 );
obj << Simulate More( 2, 3 );

```

### Simulate Once

**Syntax:** obj &lt;&lt; Simulate Once( id )

**Description:** Simulates one future trajectory of a fitted model.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << arima( 1, 0, 0 );
obj << arima( 2, 0, 0 );
obj << Simulate Once( 1 );
obj << Simulate Once( 2 );

```

### Spectral Density

**Syntax:** obj &lt;&lt; Spectral Density( state=0|1 )

**Description:** Displays or hides the spectral density graphs.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Spectral Density( 1 );

```

### State Space Smoothing

**Syntax:** obj &lt;&lt; State Space Smoothing( Error Type( "Additive"|"Multiplicative" ),Trend Type( "None"|"Additive"|"Multiplicative" ),Seasonal Type( "None"|"Additive"|"Multiplicative" ),Damped( "Yes"|"No" ),Period( m ),Constrained( "Yes"|"No" ) )

**Description:** Fits a state space smoothing model.

**JMP Version Added:** 16

```jsl

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

### Time Series Graph

**Syntax:** obj &lt;&lt; Time Series Graph( state=0|1 )

**Description:** Turn on or off the basic time series plot. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Time Series Graph( 1 );

```

### Transfer Function

**Syntax:** obj &lt;&lt; Transfer Function( Order(p, d, q), Seasonal(P, D, Q, S), input1(Order(p, d, q), Seasonal(P, D, Q, S), Lag(lag)), &lt;input2(Order(p, d, q), Seasonal(P, D, Q, S), Lag(lag))&gt;, ..., &lt;No Intercept(flag1)&gt;, &lt;No Constrain(flag2)&gt;, &lt;Alternative Parameterization( flag3 )&gt;, &lt;Confidence Intervals( level )&gt;, &lt;Number of Forecast Periods( nAhead )&gt; )

**Description:** Fits a Transfer Function model.

```jsl

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

### Use Box-Cox Transformation

**Syntax:** obj = Time Series(...Use Box-Cox Transformation( state=0|1 )...)

**Description:** Transforms the original data using a Box-Cox transformation with the lambda that is specified in the Lambda for Box-Cox option. If this option is selected, all analyses in the Time Series report are performed on the transformed data.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ), Name( "Use Box-Cox Transformation" )(1) );
obj << arima( 1, 0, 0 );
obj << Number of Forecast Periods( 100 );

```

### Variogram

**Syntax:** obj &lt;&lt; Variogram( state=0|1 )

**Description:** Displays or hides the variogram plot in the Time Series Basic Diagnostics report.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Variogram( 1 );

```

### Winters Method

**Syntax:** obj &lt;&lt; Winters Method( Zero to One|Unconstrained|Custom( (Level|Seasonal|Trend)( Unconstrained| Seasonal| Bounded( lower, upper )| Fixed( value ) )), &lt;Confidence Intervals(level)&gt; )

**Description:** Fits a smoothing model using Winter&apos;s method.

```jsl

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

### X11

**Syntax:** obj &lt;&lt; X11( Additive|Multiplicative )

**Description:** Removes trend and seasonal effects using  the X-11 method developed by the US Bureau of the Census.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Monthly Sales.jmp" );
obj = dt << Time Series( X( :Date ), Y( :Sales ) );
obj << X11( Additive );

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

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
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

**Syntax:** obj &lt;&lt; Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Copy Script;

```

### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Description:** Move the data table window for this analysis to the front.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
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

**Syntax:** obj &lt;&lt; Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

#### General

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
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

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
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

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Description:** Times the platform launch.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
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

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntax:** obj &lt;&lt; Redo ByGroup Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

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

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntax:** obj &lt;&lt; Relaunch ByGroup

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Time Series( Y( :steel shipments ), By( _bycol ) );
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

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntax:** obj &lt;&lt; Report View( "Full"|"Summary" )

**Description:** The report view determines the level of detail visible in a platform report. Full shows all of the detail, while Summary shows only select content, dependent on the platform. For customized behavior, display boxes support a <<Set Summary Behavior message.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Creates a JSL script to produce this analysis, and save it as a table property in the data table. You can specify a name for the script. The Append Suffix option appends a numeric suffix to the script name, which differentiates the script from an existing script with the same name. The Prompt option prompts the user to specify a script name. The Replace option replaces an existing script with the same name.

```jsl

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

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

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

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

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

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```jsl

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

```jsl

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

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
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

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Description:** Returns a reference to the root node in the report.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
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

**Syntax:** obj = Time Series(...Window View( "Visible"|"Invisible"|"Private" )...)

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

## Damped-Trend Linear Exponential Smoothing

### Item Messages

#### Actual

**Syntax:** obj &lt;&lt; Actual( state=0|1 )

**Description:** Selects the Actual data column for saving with the Save Columns command. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

#### Autocorrelations

**Syntax:** obj &lt;&lt; Autocorrelations( state=0|1 )

**Description:** Displays or hides the autocorrelations plot. On by default.

```jsl

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

#### Confidence Intervals

**Syntax:** obj &lt;&lt; Confidence Intervals( number )

#### Create SAS Job

**Syntax:** obj &lt;&lt; Create SAS Job

**Description:** Creates a SAS Job to launch SAS and run the analysis in PROC ARIMA.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Create SAS Job;

```

#### Innovations

**Syntax:** obj &lt;&lt; Innovations( state=0|1 )

**Description:** On by default.

**JMP Version Added:** 16

#### Lower Confidence Limit

**Syntax:** obj &lt;&lt; Lower Confidence Limit( state=0|1 )

**Description:** Selects the Lower 95% Confidence Limit values column for saving with the Save Columns command. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

#### No Constrain

**Syntax:** obj &lt;&lt; No Constrain( state=0|1 )

**Description:** Lifts the constraint on the autoregressive parameters to always remain within the stable region and the moving average parameters within the invertible region when launching an ARIMA model.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

#### No Intercept

**Syntax:** obj &lt;&lt; No Intercept( state=0|1 )

**Description:** Sets the intercept to zero when launching an ARIMA model.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

#### Partial Autocorrelations

**Syntax:** obj &lt;&lt; Partial Autocorrelations( state=0|1 )

**Description:** Displays or hides the partial autocorrelations plot. On by default.

```jsl

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

#### Plot

**Syntax:** obj &lt;&lt; Plot( state=0|1 )

**Description:** Displays or hides the residual statistics plot. On by default.

```jsl

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

#### Predicted

**Syntax:** obj &lt;&lt; Predicted( state=0|1 )

**Description:** Selects the Predicted values data column for saving with the Save Columns command. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

#### Prediction Interval

**Syntax:** obj &lt;&lt; Prediction Interval( level )

**Description:** Sets the size of the confidence interval about the prediction for the ARIMA model. The default size is 0.95.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

#### Remove Fit

**Syntax:** obj &lt;&lt; Remove Fit

**JMP Version Added:** 16

#### Residuals

**Syntax:** obj &lt;&lt; Residuals( state=0|1 )

**Description:** Selects the Residuals values data column for saving with the Save Columns command. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

#### Save Columns

**Syntax:** obj &lt;&lt; Save Columns

**Description:** Creates a new data table containing the actual and predicted values together with standard errors, residuals and 95% prediction intervals about the response. This option is available for all ARIMA, Smoothing, and Transfer Function models.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Columns;

```

#### Save Prediction Formula

**Syntax:** obj &lt;&lt; Save Prediction Formula

**Description:** Saves the Prediction Formula to a new column in the data table. This option is available for all ARIMA and Smoothing models.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Prediction Formula;

```

#### Show Confidence Interval

**Syntax:** obj &lt;&lt; Show Confidence Interval( state=0|1 )

**Description:** Shows or hides prediction intervals on the Time Series Forecast Plot. This option is available for all ARIMA and Smoothing models. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Confidence Interval( 0 );

```

#### Show Points

**Syntax:** obj &lt;&lt; Show Points( state=0|1 )

**Description:** Shows or hides points on the Time Series Forecast Plot. This option is available for all ARIMA and Smoothing models. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Show Points( 1 ) );

(obj << report)["Model Comparison"] << Close( 1 );

```

#### Show Prediction Interval

**Syntax:** obj &lt;&lt; Show Prediction Interval( state=0|1 )

**Description:** Shows or hides prediction intervals on the Time Series Forecast Plot. This option is available for all ARIMA and Smoothing models. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Prediction Interval( 0 );

```

#### Std Error of Predicted

**Syntax:** obj &lt;&lt; Std Error of Predicted( state=0|1 )

**Description:** Selects the Standard Error of Predicted values data column for saving with the Save Columns command. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

#### Time

**Syntax:** obj &lt;&lt; Time( state=0|1 )

**Description:** Selects the Time data column for saving with the Save Columns command. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );
obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

#### Upper Confidence Limit

**Syntax:** obj &lt;&lt; Upper Confidence Limit( state=0|1 )

**Description:** Selects the Upper 95% Confidence Limit values column for saving with the Save Columns command. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

#### Variogram

**Syntax:** obj &lt;&lt; Variogram( state=0|1 )

**Description:** Displays or hides the Variogram.

```jsl

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

### Item Messages

#### Autocorrelation

**Syntax:** obj &lt;&lt; Autocorrelation( state=0|1 )

**Description:** Displays or hides the Autocorrelation in the Difference report. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Difference( 1, 0, 0, Autocorrelation( 1 ) );

```

#### Connecting Lines

**Syntax:** obj &lt;&lt; Connecting Lines( state=0|1 )

**Description:** Displays or hides the lines connecting the points on the Difference Graph. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Difference( 1, 0, 0, Connecting Lines( 1 ) );

```

#### Difference Graph

**Syntax:** obj &lt;&lt; Difference Graph( state=0|1 )

**Description:** Displays or hides the Difference Graph. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Difference( 1, 0, 0, Difference Graph( 1 ) );

```

#### Mean Line

**Syntax:** obj &lt;&lt; Mean Line( state=0|1 )

**Description:** Displays or hides the mean line on the Difference Graph.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Difference( 1, 0, 0, Mean Line( 1 ) );

```

#### Partial Autocorrelation

**Syntax:** obj &lt;&lt; Partial Autocorrelation( state=0|1 )

**Description:** Displays or hides the Partial Autocorrelation in the Difference report. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Difference( 1, 0, 0, Partial Autocorrelation( 1 ) );

```

#### Remove Fit

**Syntax:** obj &lt;&lt; Remove Fit

**JMP Version Added:** 16

#### Save

**Syntax:** obj &lt;&lt; Save

**Description:** Saves the Difference values in a new column in the data table.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Difference( 1, 0, 0, Save );

```

#### Show Points

**Syntax:** obj &lt;&lt; Show Points( state=0|1 )

**Description:** Displays or hides the points on the Difference Graph. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Difference( 1, 0, 0, Show Points( 1 ) );

```

#### Variogram

**Syntax:** obj &lt;&lt; Variogram( state=0|1 )

**Description:** Displays or hides the Variogram in the Difference report.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Difference( 1, 0, 0, Variogram( 1 ) );

```

## Double (Brown) Exponential Smoothing

### Item Messages

#### Actual

**Syntax:** obj &lt;&lt; Actual( state=0|1 )

**Description:** Selects the Actual data column for saving with the Save Columns command. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

#### Autocorrelations

**Syntax:** obj &lt;&lt; Autocorrelations( state=0|1 )

**Description:** Displays or hides the autocorrelations plot. On by default.

```jsl

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

#### Confidence Intervals

**Syntax:** obj &lt;&lt; Confidence Intervals( number )

#### Create SAS Job

**Syntax:** obj &lt;&lt; Create SAS Job

**Description:** Creates a SAS Job to launch SAS and run the analysis in PROC ARIMA.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Create SAS Job;

```

#### Innovations

**Syntax:** obj &lt;&lt; Innovations( state=0|1 )

**Description:** On by default.

**JMP Version Added:** 16

#### Lower Confidence Limit

**Syntax:** obj &lt;&lt; Lower Confidence Limit( state=0|1 )

**Description:** Selects the Lower 95% Confidence Limit values column for saving with the Save Columns command. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

#### No Constrain

**Syntax:** obj &lt;&lt; No Constrain( state=0|1 )

**Description:** Lifts the constraint on the autoregressive parameters to always remain within the stable region and the moving average parameters within the invertible region when launching an ARIMA model.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

#### No Intercept

**Syntax:** obj &lt;&lt; No Intercept( state=0|1 )

**Description:** Sets the intercept to zero when launching an ARIMA model.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

#### Partial Autocorrelations

**Syntax:** obj &lt;&lt; Partial Autocorrelations( state=0|1 )

**Description:** Displays or hides the partial autocorrelations plot. On by default.

```jsl

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

#### Plot

**Syntax:** obj &lt;&lt; Plot( state=0|1 )

**Description:** Displays or hides the residual statistics plot. On by default.

```jsl

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

#### Predicted

**Syntax:** obj &lt;&lt; Predicted( state=0|1 )

**Description:** Selects the Predicted values data column for saving with the Save Columns command. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

#### Prediction Interval

**Syntax:** obj &lt;&lt; Prediction Interval( level )

**Description:** Sets the size of the confidence interval about the prediction for the ARIMA model. The default size is 0.95.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

#### Remove Fit

**Syntax:** obj &lt;&lt; Remove Fit

**JMP Version Added:** 16

#### Residuals

**Syntax:** obj &lt;&lt; Residuals( state=0|1 )

**Description:** Selects the Residuals values data column for saving with the Save Columns command. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

#### Save Columns

**Syntax:** obj &lt;&lt; Save Columns

**Description:** Creates a new data table containing the actual and predicted values together with standard errors, residuals and 95% prediction intervals about the response. This option is available for all ARIMA, Smoothing, and Transfer Function models.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Columns;

```

#### Save Prediction Formula

**Syntax:** obj &lt;&lt; Save Prediction Formula

**Description:** Saves the Prediction Formula to a new column in the data table. This option is available for all ARIMA and Smoothing models.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Prediction Formula;

```

#### Show Confidence Interval

**Syntax:** obj &lt;&lt; Show Confidence Interval( state=0|1 )

**Description:** Shows or hides prediction intervals on the Time Series Forecast Plot. This option is available for all ARIMA and Smoothing models. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Confidence Interval( 0 );

```

#### Show Points

**Syntax:** obj &lt;&lt; Show Points( state=0|1 )

**Description:** Shows or hides points on the Time Series Forecast Plot. This option is available for all ARIMA and Smoothing models. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Show Points( 1 ) );

(obj << report)["Model Comparison"] << Close( 1 );

```

#### Show Prediction Interval

**Syntax:** obj &lt;&lt; Show Prediction Interval( state=0|1 )

**Description:** Shows or hides prediction intervals on the Time Series Forecast Plot. This option is available for all ARIMA and Smoothing models. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Prediction Interval( 0 );

```

#### Std Error of Predicted

**Syntax:** obj &lt;&lt; Std Error of Predicted( state=0|1 )

**Description:** Selects the Standard Error of Predicted values data column for saving with the Save Columns command. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

#### Time

**Syntax:** obj &lt;&lt; Time( state=0|1 )

**Description:** Selects the Time data column for saving with the Save Columns command. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );
obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

#### Upper Confidence Limit

**Syntax:** obj &lt;&lt; Upper Confidence Limit( state=0|1 )

**Description:** Selects the Upper 95% Confidence Limit values column for saving with the Save Columns command. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

#### Variogram

**Syntax:** obj &lt;&lt; Variogram( state=0|1 )

**Description:** Displays or hides the Variogram.

```jsl

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

### Item Messages

#### Actual

**Syntax:** obj &lt;&lt; Actual( state=0|1 )

**Description:** Selects the Actual data column for saving with the Save Columns command. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

#### Autocorrelations

**Syntax:** obj &lt;&lt; Autocorrelations( state=0|1 )

**Description:** Displays or hides the autocorrelations plot. On by default.

```jsl

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

#### Confidence Intervals

**Syntax:** obj &lt;&lt; Confidence Intervals( number )

#### Create SAS Job

**Syntax:** obj &lt;&lt; Create SAS Job

**Description:** Creates a SAS Job to launch SAS and run the analysis in PROC ARIMA.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Create SAS Job;

```

#### Innovations

**Syntax:** obj &lt;&lt; Innovations( state=0|1 )

**Description:** On by default.

**JMP Version Added:** 16

#### Lower Confidence Limit

**Syntax:** obj &lt;&lt; Lower Confidence Limit( state=0|1 )

**Description:** Selects the Lower 95% Confidence Limit values column for saving with the Save Columns command. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

#### No Constrain

**Syntax:** obj &lt;&lt; No Constrain( state=0|1 )

**Description:** Lifts the constraint on the autoregressive parameters to always remain within the stable region and the moving average parameters within the invertible region when launching an ARIMA model.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

#### No Intercept

**Syntax:** obj &lt;&lt; No Intercept( state=0|1 )

**Description:** Sets the intercept to zero when launching an ARIMA model.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

#### Partial Autocorrelations

**Syntax:** obj &lt;&lt; Partial Autocorrelations( state=0|1 )

**Description:** Displays or hides the partial autocorrelations plot. On by default.

```jsl

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

#### Plot

**Syntax:** obj &lt;&lt; Plot( state=0|1 )

**Description:** Displays or hides the residual statistics plot. On by default.

```jsl

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

#### Predicted

**Syntax:** obj &lt;&lt; Predicted( state=0|1 )

**Description:** Selects the Predicted values data column for saving with the Save Columns command. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

#### Prediction Interval

**Syntax:** obj &lt;&lt; Prediction Interval( level )

**Description:** Sets the size of the confidence interval about the prediction for the ARIMA model. The default size is 0.95.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

#### Remove Fit

**Syntax:** obj &lt;&lt; Remove Fit

**JMP Version Added:** 16

#### Residuals

**Syntax:** obj &lt;&lt; Residuals( state=0|1 )

**Description:** Selects the Residuals values data column for saving with the Save Columns command. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

#### Save Columns

**Syntax:** obj &lt;&lt; Save Columns

**Description:** Creates a new data table containing the actual and predicted values together with standard errors, residuals and 95% prediction intervals about the response. This option is available for all ARIMA, Smoothing, and Transfer Function models.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Columns;

```

#### Save Prediction Formula

**Syntax:** obj &lt;&lt; Save Prediction Formula

**Description:** Saves the Prediction Formula to a new column in the data table. This option is available for all ARIMA and Smoothing models.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Prediction Formula;

```

#### Show Confidence Interval

**Syntax:** obj &lt;&lt; Show Confidence Interval( state=0|1 )

**Description:** Shows or hides prediction intervals on the Time Series Forecast Plot. This option is available for all ARIMA and Smoothing models. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Confidence Interval( 0 );

```

#### Show Points

**Syntax:** obj &lt;&lt; Show Points( state=0|1 )

**Description:** Shows or hides points on the Time Series Forecast Plot. This option is available for all ARIMA and Smoothing models. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Show Points( 1 ) );

(obj << report)["Model Comparison"] << Close( 1 );

```

#### Show Prediction Interval

**Syntax:** obj &lt;&lt; Show Prediction Interval( state=0|1 )

**Description:** Shows or hides prediction intervals on the Time Series Forecast Plot. This option is available for all ARIMA and Smoothing models. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Prediction Interval( 0 );

```

#### Std Error of Predicted

**Syntax:** obj &lt;&lt; Std Error of Predicted( state=0|1 )

**Description:** Selects the Standard Error of Predicted values data column for saving with the Save Columns command. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

#### Time

**Syntax:** obj &lt;&lt; Time( state=0|1 )

**Description:** Selects the Time data column for saving with the Save Columns command. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );
obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

#### Upper Confidence Limit

**Syntax:** obj &lt;&lt; Upper Confidence Limit( state=0|1 )

**Description:** Selects the Upper 95% Confidence Limit values column for saving with the Save Columns command. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

#### Variogram

**Syntax:** obj &lt;&lt; Variogram( state=0|1 )

**Description:** Displays or hides the Variogram.

```jsl

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

### Item Messages

#### Actual

**Syntax:** obj &lt;&lt; Actual( state=0|1 )

**Description:** Selects the Actual data column for saving with the Save Columns command. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

#### Autocorrelations

**Syntax:** obj &lt;&lt; Autocorrelations( state=0|1 )

**Description:** Displays or hides the autocorrelations plot. On by default.

```jsl

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

#### Confidence Intervals

**Syntax:** obj &lt;&lt; Confidence Intervals( number )

#### Create SAS Job

**Syntax:** obj &lt;&lt; Create SAS Job

**Description:** Creates a SAS Job to launch SAS and run the analysis in PROC ARIMA.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Create SAS Job;

```

#### Innovations

**Syntax:** obj &lt;&lt; Innovations( state=0|1 )

**Description:** On by default.

**JMP Version Added:** 16

#### Lower Confidence Limit

**Syntax:** obj &lt;&lt; Lower Confidence Limit( state=0|1 )

**Description:** Selects the Lower 95% Confidence Limit values column for saving with the Save Columns command. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

#### No Constrain

**Syntax:** obj &lt;&lt; No Constrain( state=0|1 )

**Description:** Lifts the constraint on the autoregressive parameters to always remain within the stable region and the moving average parameters within the invertible region when launching an ARIMA model.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

#### No Intercept

**Syntax:** obj &lt;&lt; No Intercept( state=0|1 )

**Description:** Sets the intercept to zero when launching an ARIMA model.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

#### Partial Autocorrelations

**Syntax:** obj &lt;&lt; Partial Autocorrelations( state=0|1 )

**Description:** Displays or hides the partial autocorrelations plot. On by default.

```jsl

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

#### Plot

**Syntax:** obj &lt;&lt; Plot( state=0|1 )

**Description:** Displays or hides the residual statistics plot. On by default.

```jsl

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

#### Predicted

**Syntax:** obj &lt;&lt; Predicted( state=0|1 )

**Description:** Selects the Predicted values data column for saving with the Save Columns command. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

#### Prediction Interval

**Syntax:** obj &lt;&lt; Prediction Interval( level )

**Description:** Sets the size of the confidence interval about the prediction for the ARIMA model. The default size is 0.95.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

#### Remove Fit

**Syntax:** obj &lt;&lt; Remove Fit

**JMP Version Added:** 16

#### Residuals

**Syntax:** obj &lt;&lt; Residuals( state=0|1 )

**Description:** Selects the Residuals values data column for saving with the Save Columns command. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

#### Save Columns

**Syntax:** obj &lt;&lt; Save Columns

**Description:** Creates a new data table containing the actual and predicted values together with standard errors, residuals and 95% prediction intervals about the response. This option is available for all ARIMA, Smoothing, and Transfer Function models.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Columns;

```

#### Save Prediction Formula

**Syntax:** obj &lt;&lt; Save Prediction Formula

**Description:** Saves the Prediction Formula to a new column in the data table. This option is available for all ARIMA and Smoothing models.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Prediction Formula;

```

#### Show Confidence Interval

**Syntax:** obj &lt;&lt; Show Confidence Interval( state=0|1 )

**Description:** Shows or hides prediction intervals on the Time Series Forecast Plot. This option is available for all ARIMA and Smoothing models. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Confidence Interval( 0 );

```

#### Show Points

**Syntax:** obj &lt;&lt; Show Points( state=0|1 )

**Description:** Shows or hides points on the Time Series Forecast Plot. This option is available for all ARIMA and Smoothing models. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Show Points( 1 ) );

(obj << report)["Model Comparison"] << Close( 1 );

```

#### Show Prediction Interval

**Syntax:** obj &lt;&lt; Show Prediction Interval( state=0|1 )

**Description:** Shows or hides prediction intervals on the Time Series Forecast Plot. This option is available for all ARIMA and Smoothing models. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Prediction Interval( 0 );

```

#### Std Error of Predicted

**Syntax:** obj &lt;&lt; Std Error of Predicted( state=0|1 )

**Description:** Selects the Standard Error of Predicted values data column for saving with the Save Columns command. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

#### Time

**Syntax:** obj &lt;&lt; Time( state=0|1 )

**Description:** Selects the Time data column for saving with the Save Columns command. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );
obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

#### Upper Confidence Limit

**Syntax:** obj &lt;&lt; Upper Confidence Limit( state=0|1 )

**Description:** Selects the Upper 95% Confidence Limit values column for saving with the Save Columns command. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

#### Variogram

**Syntax:** obj &lt;&lt; Variogram( state=0|1 )

**Description:** Displays or hides the Variogram.

```jsl

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

### Item Messages

#### Actual

**Syntax:** obj &lt;&lt; Actual( state=0|1 )

**Description:** Selects the Actual data column for saving with the Save Columns command. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

#### Autocorrelations

**Syntax:** obj &lt;&lt; Autocorrelations( state=0|1 )

**Description:** Displays or hides the autocorrelations plot. On by default.

```jsl

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

#### Confidence Intervals

**Syntax:** obj &lt;&lt; Confidence Intervals( number )

#### Create SAS Job

**Syntax:** obj &lt;&lt; Create SAS Job

**Description:** Creates a SAS Job to launch SAS and run the analysis in PROC ARIMA.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Create SAS Job;

```

#### Innovations

**Syntax:** obj &lt;&lt; Innovations( state=0|1 )

**Description:** On by default.

**JMP Version Added:** 16

#### Lower Confidence Limit

**Syntax:** obj &lt;&lt; Lower Confidence Limit( state=0|1 )

**Description:** Selects the Lower 95% Confidence Limit values column for saving with the Save Columns command. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

#### No Constrain

**Syntax:** obj &lt;&lt; No Constrain( state=0|1 )

**Description:** Lifts the constraint on the autoregressive parameters to always remain within the stable region and the moving average parameters within the invertible region when launching an ARIMA model.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

#### No Intercept

**Syntax:** obj &lt;&lt; No Intercept( state=0|1 )

**Description:** Sets the intercept to zero when launching an ARIMA model.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

#### Partial Autocorrelations

**Syntax:** obj &lt;&lt; Partial Autocorrelations( state=0|1 )

**Description:** Displays or hides the partial autocorrelations plot. On by default.

```jsl

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

#### Plot

**Syntax:** obj &lt;&lt; Plot( state=0|1 )

**Description:** Displays or hides the residual statistics plot. On by default.

```jsl

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

#### Predicted

**Syntax:** obj &lt;&lt; Predicted( state=0|1 )

**Description:** Selects the Predicted values data column for saving with the Save Columns command. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

#### Prediction Interval

**Syntax:** obj &lt;&lt; Prediction Interval( level )

**Description:** Sets the size of the confidence interval about the prediction for the ARIMA model. The default size is 0.95.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

#### Remove Fit

**Syntax:** obj &lt;&lt; Remove Fit

**JMP Version Added:** 16

#### Residuals

**Syntax:** obj &lt;&lt; Residuals( state=0|1 )

**Description:** Selects the Residuals values data column for saving with the Save Columns command. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

#### Save Columns

**Syntax:** obj &lt;&lt; Save Columns

**Description:** Creates a new data table containing the actual and predicted values together with standard errors, residuals and 95% prediction intervals about the response. This option is available for all ARIMA, Smoothing, and Transfer Function models.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Columns;

```

#### Save Prediction Formula

**Syntax:** obj &lt;&lt; Save Prediction Formula

**Description:** Saves the Prediction Formula to a new column in the data table. This option is available for all ARIMA and Smoothing models.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Prediction Formula;

```

#### Show Confidence Interval

**Syntax:** obj &lt;&lt; Show Confidence Interval( state=0|1 )

**Description:** Shows or hides prediction intervals on the Time Series Forecast Plot. This option is available for all ARIMA and Smoothing models. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Confidence Interval( 0 );

```

#### Show Points

**Syntax:** obj &lt;&lt; Show Points( state=0|1 )

**Description:** Shows or hides points on the Time Series Forecast Plot. This option is available for all ARIMA and Smoothing models. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Show Points( 1 ) );

(obj << report)["Model Comparison"] << Close( 1 );

```

#### Show Prediction Interval

**Syntax:** obj &lt;&lt; Show Prediction Interval( state=0|1 )

**Description:** Shows or hides prediction intervals on the Time Series Forecast Plot. This option is available for all ARIMA and Smoothing models. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Prediction Interval( 0 );

```

#### Std Error of Predicted

**Syntax:** obj &lt;&lt; Std Error of Predicted( state=0|1 )

**Description:** Selects the Standard Error of Predicted values data column for saving with the Save Columns command. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

#### Time

**Syntax:** obj &lt;&lt; Time( state=0|1 )

**Description:** Selects the Time data column for saving with the Save Columns command. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );
obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

#### Upper Confidence Limit

**Syntax:** obj &lt;&lt; Upper Confidence Limit( state=0|1 )

**Description:** Selects the Upper 95% Confidence Limit values column for saving with the Save Columns command. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

#### Variogram

**Syntax:** obj &lt;&lt; Variogram( state=0|1 )

**Description:** Displays or hides the Variogram.

```jsl

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

### Item Messages

#### Actual

**Syntax:** obj &lt;&lt; Actual( state=0|1 )

**Description:** Selects the Actual data column for saving with the Save Columns command. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

#### Autocorrelations

**Syntax:** obj &lt;&lt; Autocorrelations( state=0|1 )

**Description:** Displays or hides the autocorrelations plot. On by default.

```jsl

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

#### Confidence Intervals

**Syntax:** obj &lt;&lt; Confidence Intervals( number )

#### Create SAS Job

**Syntax:** obj &lt;&lt; Create SAS Job

**Description:** Creates a SAS Job to launch SAS and run the analysis in PROC ARIMA.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Create SAS Job;

```

#### Innovations

**Syntax:** obj &lt;&lt; Innovations( state=0|1 )

**Description:** On by default.

**JMP Version Added:** 16

#### Lower Confidence Limit

**Syntax:** obj &lt;&lt; Lower Confidence Limit( state=0|1 )

**Description:** Selects the Lower 95% Confidence Limit values column for saving with the Save Columns command. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

#### No Constrain

**Syntax:** obj &lt;&lt; No Constrain( state=0|1 )

**Description:** Lifts the constraint on the autoregressive parameters to always remain within the stable region and the moving average parameters within the invertible region when launching an ARIMA model.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

#### No Intercept

**Syntax:** obj &lt;&lt; No Intercept( state=0|1 )

**Description:** Sets the intercept to zero when launching an ARIMA model.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

#### Partial Autocorrelations

**Syntax:** obj &lt;&lt; Partial Autocorrelations( state=0|1 )

**Description:** Displays or hides the partial autocorrelations plot. On by default.

```jsl

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

#### Plot

**Syntax:** obj &lt;&lt; Plot( state=0|1 )

**Description:** Displays or hides the residual statistics plot. On by default.

```jsl

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

#### Predicted

**Syntax:** obj &lt;&lt; Predicted( state=0|1 )

**Description:** Selects the Predicted values data column for saving with the Save Columns command. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

#### Prediction Interval

**Syntax:** obj &lt;&lt; Prediction Interval( level )

**Description:** Sets the size of the confidence interval about the prediction for the ARIMA model. The default size is 0.95.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

#### Remove Fit

**Syntax:** obj &lt;&lt; Remove Fit

**JMP Version Added:** 16

#### Residuals

**Syntax:** obj &lt;&lt; Residuals( state=0|1 )

**Description:** Selects the Residuals values data column for saving with the Save Columns command. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

#### Save Columns

**Syntax:** obj &lt;&lt; Save Columns

**Description:** Creates a new data table containing the actual and predicted values together with standard errors, residuals and 95% prediction intervals about the response. This option is available for all ARIMA, Smoothing, and Transfer Function models.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Columns;

```

#### Save Prediction Formula

**Syntax:** obj &lt;&lt; Save Prediction Formula

**Description:** Saves the Prediction Formula to a new column in the data table. This option is available for all ARIMA and Smoothing models.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Prediction Formula;

```

#### Show Confidence Interval

**Syntax:** obj &lt;&lt; Show Confidence Interval( state=0|1 )

**Description:** Shows or hides prediction intervals on the Time Series Forecast Plot. This option is available for all ARIMA and Smoothing models. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Confidence Interval( 0 );

```

#### Show Points

**Syntax:** obj &lt;&lt; Show Points( state=0|1 )

**Description:** Shows or hides points on the Time Series Forecast Plot. This option is available for all ARIMA and Smoothing models. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Show Points( 1 ) );

(obj << report)["Model Comparison"] << Close( 1 );

```

#### Show Prediction Interval

**Syntax:** obj &lt;&lt; Show Prediction Interval( state=0|1 )

**Description:** Shows or hides prediction intervals on the Time Series Forecast Plot. This option is available for all ARIMA and Smoothing models. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Prediction Interval( 0 );

```

#### Std Error of Predicted

**Syntax:** obj &lt;&lt; Std Error of Predicted( state=0|1 )

**Description:** Selects the Standard Error of Predicted values data column for saving with the Save Columns command. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

#### Time

**Syntax:** obj &lt;&lt; Time( state=0|1 )

**Description:** Selects the Time data column for saving with the Save Columns command. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );
obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

#### Upper Confidence Limit

**Syntax:** obj &lt;&lt; Upper Confidence Limit( state=0|1 )

**Description:** Selects the Upper 95% Confidence Limit values column for saving with the Save Columns command. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

#### Variogram

**Syntax:** obj &lt;&lt; Variogram( state=0|1 )

**Description:** Displays or hides the Variogram.

```jsl

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

### Item Messages

#### Add Model

**Syntax:** obj &lt;&lt; Add Model( Window Width, &lt;Centered&gt; )

**Description:** Add a simple moving average model. Model is identified by moving window width. The optional argument indicates whether the average is centered.

```jsl

dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
obj = Time Series( Y( :Close ), Simple Moving Average( Add Model( 5 ) ) );
sma = obj << Simple Moving Average( Add Model( 10 ) );
sma << Add Model( 15, Centered );

```

#### Connecting Lines

**Syntax:** obj &lt;&lt; Connecting Lines( &lt;1|0&gt; )

**Description:** Graph option for displaying connected lines.

```jsl

dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
obj = Time Series( Y( :Close ), Simple Moving Average( Add Model( 5 ) ) );
sma = obj << Simple Moving Average( Connecting Lines );

```

#### Get Results

**Syntax:** obj &lt;&lt; Get Results

**Description:** Return all simple moving average models as a JSL object.

```jsl

dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
obj = Time Series( Y( :Close ), Simple Moving Average( Add Model( 5 ) ) );
resultobj = obj << Simple Moving Average( Get Result );

```

#### Remove Model

**Syntax:** obj &lt;&lt; Remove Model( Window Width, &lt;Centered&gt; )

**Description:** Remove a simple moving average model. Model is identified by moving window width.

```jsl

dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
obj = Time Series( Y( :Close ), Simple Moving Average( Add Model( 5 ) ) );
obj << Simple Moving Average( Remove Model( 5 ) );

```

#### Remove Report

**Syntax:** obj &lt;&lt; Remove Report

**JMP Version Added:** 16

#### Save to Data Table

**Syntax:** obj &lt;&lt; Save to Data Table

**Description:** Save all simple moving average models to a data table, and return the data table handle

```jsl

dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
obj = Time Series( Y( :Close ), Simple Moving Average( Add Model( 5 ) ) );
resultdt = obj << Simple Moving Average( Save to Data Table );

```

#### Show Points

**Syntax:** obj &lt;&lt; Show Points( &lt;1|0&gt; )

**Description:** Graph option for displaying points.

```jsl

dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
obj = Time Series( Y( :Close ), Simple Moving Average( Add Model( 5 ) ) );
sma = obj << Simple Moving Average( Show Points( 0 ) );

```

## Transfer Function Model

### Item Messages

#### Alternative Parameterization

**Syntax:** obj &lt;&lt; Alternative Parameterization( state=0|1 )

**Description:** Specifies whether the general regression coefficient is factored out of the numerator polynomials.

```jsl

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

#### Autocorrelations

**Syntax:** obj &lt;&lt; Autocorrelations( state=0|1 )

**Description:** Displays or hides the autocorrelations plot. On by default.

```jsl

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

#### Compute Objective

**Syntax:** obj &lt;&lt; Compute Objective

#### Create SAS Job

**Syntax:** obj &lt;&lt; Create SAS Job

**Description:** Creates a SAS Job to launch SAS and run the analysis in PROC ARIMA.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	Create SAS Job
);

```

#### Import New Inputs

**Syntax:** obj &lt;&lt; Import New Inputs

**JMP Version Added:** 16

#### Maximum Iterations

**Syntax:** obj &lt;&lt; Maximum Iterations( number )

**Description:** Specifies the maximum number of iterations.

```jsl

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

#### No Constrain

**Syntax:** obj &lt;&lt; No Constrain( state=0|1 )

**Description:** Removes the constraints on the AR and MA coefficients.

```jsl

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

#### No Intercept

**Syntax:** obj &lt;&lt; No Intercept( state=0|1 )

**Description:** Sets the Intercept to zero.

```jsl

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

#### Number of Forecast Periods

**Syntax:** obj &lt;&lt; Number of Forecast Periods( number )

**Description:** Specifies the number of periods for forecasting.

```jsl

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

#### Partial Autocorrelations

**Syntax:** obj &lt;&lt; Partial Autocorrelations( state=0|1 )

**Description:** Displays or hides the partial autocorrelations plot. On by default.

```jsl

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

#### Plot

**Syntax:** obj &lt;&lt; Plot( state=0|1 )

**Description:** Displays or hides the residual statistics plot. On by default.

```jsl

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

#### Prediction Interval

**Syntax:** obj &lt;&lt; Prediction Interval( number )

**Description:** Sets the level of the confidence intervals displayed.

```jsl

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

#### Remove Fit

**Syntax:** obj &lt;&lt; Remove Fit

**JMP Version Added:** 16

#### Save Columns

**Syntax:** obj &lt;&lt; Save Columns

**Description:** Creates a new data table containing the actual and predicted values together with standard errors, residuals and 95% prediction intervals about the response. This option is available for all ARIMA, Smoothing, and Transfer Function models.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	Save Columns
);

```

#### Variogram

**Syntax:** obj &lt;&lt; Variogram( state=0|1 )

**Description:** Displays or hides the Variogram.

```jsl

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

### Item Messages

#### Actual

**Syntax:** obj &lt;&lt; Actual( state=0|1 )

**Description:** Selects the Actual data column for saving with the Save Columns command. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

#### Autocorrelations

**Syntax:** obj &lt;&lt; Autocorrelations( state=0|1 )

**Description:** Displays or hides the autocorrelations plot. On by default.

```jsl

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

#### Confidence Intervals

**Syntax:** obj &lt;&lt; Confidence Intervals( number )

#### Create SAS Job

**Syntax:** obj &lt;&lt; Create SAS Job

**Description:** Creates a SAS Job to launch SAS and run the analysis in PROC ARIMA.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Create SAS Job;

```

#### Innovations

**Syntax:** obj &lt;&lt; Innovations( state=0|1 )

**Description:** On by default.

**JMP Version Added:** 16

#### Lower Confidence Limit

**Syntax:** obj &lt;&lt; Lower Confidence Limit( state=0|1 )

**Description:** Selects the Lower 95% Confidence Limit values column for saving with the Save Columns command. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

#### No Constrain

**Syntax:** obj &lt;&lt; No Constrain( state=0|1 )

**Description:** Lifts the constraint on the autoregressive parameters to always remain within the stable region and the moving average parameters within the invertible region when launching an ARIMA model.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

#### No Intercept

**Syntax:** obj &lt;&lt; No Intercept( state=0|1 )

**Description:** Sets the intercept to zero when launching an ARIMA model.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

#### Partial Autocorrelations

**Syntax:** obj &lt;&lt; Partial Autocorrelations( state=0|1 )

**Description:** Displays or hides the partial autocorrelations plot. On by default.

```jsl

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

#### Plot

**Syntax:** obj &lt;&lt; Plot( state=0|1 )

**Description:** Displays or hides the residual statistics plot. On by default.

```jsl

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

#### Predicted

**Syntax:** obj &lt;&lt; Predicted( state=0|1 )

**Description:** Selects the Predicted values data column for saving with the Save Columns command. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

#### Prediction Interval

**Syntax:** obj &lt;&lt; Prediction Interval( level )

**Description:** Sets the size of the confidence interval about the prediction for the ARIMA model. The default size is 0.95.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

#### Remove Fit

**Syntax:** obj &lt;&lt; Remove Fit

**JMP Version Added:** 16

#### Residuals

**Syntax:** obj &lt;&lt; Residuals( state=0|1 )

**Description:** Selects the Residuals values data column for saving with the Save Columns command. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

#### Save Columns

**Syntax:** obj &lt;&lt; Save Columns

**Description:** Creates a new data table containing the actual and predicted values together with standard errors, residuals and 95% prediction intervals about the response. This option is available for all ARIMA, Smoothing, and Transfer Function models.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Columns;

```

#### Save Prediction Formula

**Syntax:** obj &lt;&lt; Save Prediction Formula

**Description:** Saves the Prediction Formula to a new column in the data table. This option is available for all ARIMA and Smoothing models.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Prediction Formula;

```

#### Show Confidence Interval

**Syntax:** obj &lt;&lt; Show Confidence Interval( state=0|1 )

**Description:** Shows or hides prediction intervals on the Time Series Forecast Plot. This option is available for all ARIMA and Smoothing models. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Confidence Interval( 0 );

```

#### Show Points

**Syntax:** obj &lt;&lt; Show Points( state=0|1 )

**Description:** Shows or hides points on the Time Series Forecast Plot. This option is available for all ARIMA and Smoothing models. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Show Points( 1 ) );

(obj << report)["Model Comparison"] << Close( 1 );

```

#### Show Prediction Interval

**Syntax:** obj &lt;&lt; Show Prediction Interval( state=0|1 )

**Description:** Shows or hides prediction intervals on the Time Series Forecast Plot. This option is available for all ARIMA and Smoothing models. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Prediction Interval( 0 );

```

#### Std Error of Predicted

**Syntax:** obj &lt;&lt; Std Error of Predicted( state=0|1 )

**Description:** Selects the Standard Error of Predicted values data column for saving with the Save Columns command. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

#### Time

**Syntax:** obj &lt;&lt; Time( state=0|1 )

**Description:** Selects the Time data column for saving with the Save Columns command. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );
obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

#### Upper Confidence Limit

**Syntax:** obj &lt;&lt; Upper Confidence Limit( state=0|1 )

**Description:** Selects the Upper 95% Confidence Limit values column for saving with the Save Columns command. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

#### Variogram

**Syntax:** obj &lt;&lt; Variogram( state=0|1 )

**Description:** Displays or hides the Variogram.

```jsl

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


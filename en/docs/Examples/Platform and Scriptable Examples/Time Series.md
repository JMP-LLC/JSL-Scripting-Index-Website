# Time Series

### Example 1
> **Summary**: Visualizes the proportion of Total Plastic defects over time using a P chart in Control Chart Builder, with subgrouping by Week and phase variable by Location.

<!-- Keywords: #TimeSeriesX11, #ControlChartBuilder, #PChart, #Subgrouping, #PhaseVariable -->

**Code**:
```jsl
// Time Series X11
// Open data table
dt = Open("data_table.jmp");
// Time Series X11
Time Series(
	X( :Date ),
	Y( :Sales ),
	X11( Additive )
);
```

**Code Explanation**:

1. Open table.
2. Analyze time series data.
3. Specify date column.
4. Specify sales column.
5. Apply X11 decomposition.
6. Use additive model.



### Example 2
> **Summary**: Generates a Time Series Detrended plot to analyze the trend and seasonality of sales data over time, removing both linear and cyclical components.

<!-- Keywords: #TimeSeriesAnalysis, #Detrending, #SeasonalAdjustment, #JMPScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
// Time Series Detrended
// Open data table
dt = Open("data_table.jmp");
// Time Series Detrended
Time Series(
	X( :Date ),
	Y( :Sales ),
	Remove Linear Trend(
		Remove Cycle(
			Units per Cycle( 12 ),
			Has Constant( 0 )
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Define time series analysis.
3. Set X variable as Date.
4. Set Y variable as Sales.
5. Remove linear trend.
6. Remove cycle component.
7. Set units per cycle to 12.
8. Assume no constant term.



### Example 3
> **Summary**: Generates a time series analysis of log passengers data, utilizing a Seasonal ARIMA model with variogram and non-seasonal parameters to forecast future trends.

<!-- Keywords: #TimeSeriesAnalysis, #SeasonalARIMA, #VariogramModeling, #JMPScriptingLanguage, #Forecasting -->

**Code**:
```jsl
// Time Series
// Open data table
dt = Open("data_table.jmp");
// Time Series
Time Series(
	Y( :Log Passengers ),
	Variogram( 1 ),
	Seasonal ARIMA(
		0,
		1,
		1,
		0,
		1,
		1,
		12,
		No Intercept( 1 )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Analyze time series data.
3. Set response variable.
4. Use variogram model.
5. Apply Seasonal ARIMA.
6. Define non-seasonal parameters.
7. Define seasonal parameters.
8. Specify season length.
9. Exclude intercept term.
10. Execute analysis.



### Example 4
> **Summary**: Generates a time series analysis of CO2 output based on input gas rate, with transfer function modeling and interactive forecasting capabilities.

<!-- Keywords: #TimeSeriesAnalysis, #TransferFunctionModeling, #InteractiveForecasting, #JMPScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
// Time Series
// Open data table
dt = Open("data_table.jmp");
// Time Series
Time Series(
	Y( :Output CO2 ),
	Input List( :Input Gas Rate ),
	Transfer Function(
		Order( 2, 0, 0 ),
		Seasonal( 0, 0, 0, 0 ),
		:
		Input Gas Rate(
			Order( 2, 0, 2 ),
			Seasonal( 0, 0, 0, 0 ),
			Lag( 3 )
		)
	),
	Input Series( :Input Gas Rate ),
	SendToReport(
		Dispatch(
			{"Time Series Output CO2"},
			"1", ScaleBox,
			{Scale( "Linear" ),
			Format( "Fixed Dec", 0 ),
			Min( 0 ), Max( 300 ),
			Inc( 50 ),
			Show Major Grid( 1 )}
		),
		Dispatch(
			{"Time Series Output CO2",
			"Transfer Function Model (1)",
			"Residuals"}, "1", ScaleBox,
			{Scale( "Linear" ),
			Format( "Fixed Dec", 0 ),
			Min( 0 ), Max( 300 ),
			Inc( 50 ),
			Show Major Grid( 1 )}
		),
		Dispatch(
			{"Time Series Output CO2",
			"Transfer Function Model (1)",
			"Interactive Forecasting"},
			"1", ScaleBox,
			{Scale( "Linear" ),
			Format( "Fixed Dec", 0 ),
			Min( 0 ), Max( 300 ),
			Inc( 50 ),
			Show Major Grid( 1 )}
		),
		Dispatch(
			{"Input Time Series Panel",
			"Input Series: Input Gas Rate"
			}, "1", ScaleBox,
			{Scale( "Linear" ),
			Format( "Fixed Dec", 0 ),
			Min( 0 ), Max( 300 ),
			Inc( 50 ),
			Show Major Grid( 1 )}
		)
	)
);
```

**Code Explanation**:

1. Open table.
2. Define time series analysis.
3. Set output variable.
4. Define input list.
5. Configure transfer function.
6. Set input series.
7. Customize report settings.
8. Set scale for main output.
9. Set scale for residuals.
10. Set scale for forecasting.



### Example 5
> **Summary**: Visualizes the spectral density of a time series using the Time Series platform in JMP, providing insights into the underlying patterns and trends.

<!-- Keywords: #TimeSeriesAnalysis, #SpectralDensity, #JMPScriptingLanguage, #DataVisualization, #QualityControl -->

**Code**:
```jsl
// Spectral Density
// Open data table
dt = Open("data_table.jmp");
// Spectral Density
Time Series(
	Y( :wolfer ),
	Spectral Density( 1 )
);
```

**Code Explanation**:

1. Open data table.
2. Time Series analysis.
3. Specify spectral density.



### Example 6
> **Summary**: Visualizes the proportion of Total Plastic defects over time using a P chart, with subgrouping by Week and phase variable by Location, in the Control Chart Builder platform.

<!-- Keywords: #ControlChartBuilder, #PChart, #TimeSeriesAnalysis, #QualityControl, #JMP -->

**Code**:
```jsl
Open("data_table.jmp");
Time Series(
	X( :Date ),
	Y( :Sales ),
	Show Lag Plot( 1 ),
	X11( Additive ),
	SendToReport( Dispatch( {}, "Time Series Basic Diagnostics", OutlineBox, {Close( 1 )} ) )
);
```

**Code Explanation**:

1. Open data table;
2. Create time series plot.
3. Set X-axis to Date.
4. Set Y-axis to Sales.
5. Enable lag plot display.
6. Apply additive X11 decomposition.
7. Close basic diagnostics outline.



### Example 7
> **Summary**: Creates an ARIMA model group for Steel Shipments time series data, specifying orders from 0 to 2 for both AR and MA components.

<!-- Keywords: #TimeSeriesAnalysis, #ARIMAModeling, #JMPScriptingLanguage, #StatisticalModeling, #DataAnalytics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << ARIMA Model Group( AR( 0, 2 ), MA( 0, 2 ) );
```

**Code Explanation**:

1. Open data table.
2. Create time series object.
3. Specify time series variable.
4. Define ARIMA model group.
5. Set AR order from 0 to 2.
6. Set MA order from 0 to 2.



### Example 8
> **Summary**: Creates an ARIMA model to forecast Steel Shipments over time, utilizing Time Series and ARIMA Model Group features in JMP.

<!-- Keywords: #JMPScriptingLanguage, #TimeSeriesAnalysis, #ARIMAModeling, #Forecasting, #StatisticalModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << ARIMA Model Group( AR( 0, 2 ), MA( 0, 2 ) );
Eval( obj << Get Script );
```

**Code Explanation**:

1. Open data table.
2. Create time series object.
3. Specify ARIMA model parameters.
4. Retrieve model script.



### Example 9
> **Summary**: Creates a P chart to monitor the proportion of Total Plastic defects over time, utilizing subgrouping by Week and phase variable by Location in the Control Chart Builder platform.

<!-- Keywords: #ControlChartBuilder, #PChart, #TimeSeries, #Subgrouping, #QualityControl -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = Time Series( Y( :steel shipments ) );
```

**Code Explanation**:

1. Set default names to current.
2. Open data table.
3. Create time series object.



### Example 10
> **Summary**: Creates a time series analysis report, including a P chart to monitor the proportion of Total Plastic defects over time, with subgrouping by Week and phase variable by Location.

<!-- Keywords: #TimeSeriesAnalysis, #ControlChartBuilder, #JMPScriptingLanguage, #DataVisualization, #QualityControl -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Time Series(
	Y( :Output CO2 ),
	Input List( :Input Gas Rate ),
	Transfer Function( Order( 2, 0, 0 ), Seasonal( 0, 0, 0, 0 ), :Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ) ),
	Input Series( :Input Gas Rate ),
	SendToReport(
		Dispatch( {"Time Series Output CO2"}, "1", ScaleBox,
			{Scale( Linear ), Format( "Fixed Dec", 0 ), Min( 0 ), Max( 300 ), Inc( 50 ), Show Major Grid( 1 )}
		),
		Dispatch( {"Time Series Output CO2", "Transfer Function Model (1)", "Residuals"}, "1", ScaleBox,
			{Scale( Linear ), Format( "Fixed Dec", 0 ), Min( 0 ), Max( 300 ), Inc( 50 ), Show Major Grid( 1 )}
		),
		Dispatch( {"Time Series Output CO2", "Transfer Function Model (1)", "Interactive Forecasting"}, "1", ScaleBox,
			{Scale( Linear ), Format( "Fixed Dec", 0 ), Min( 0 ), Max( 300 ), Inc( 50 ), Show Major Grid( 1 )}
		),
		Dispatch( {"Input Time Series Panel", "Input Series: Input Gas Rate"}, "1", ScaleBox,
			{Scale( Linear ), Format( "Fixed Dec", 0 ), Min( 0 ), Max( 300 ), Inc( 50 ), Show Major Grid( 1 )}
		),
		Dispatch( {"Time Series Output CO2"}, "Model Comparison", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Time Series Output CO2", "Transfer Function Model (1)"}, "Model Summary", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Time Series Output CO2", "Transfer Function Model (1)"}, "Parameter Estimates", OutlineBox, {Close( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Perform time series analysis.
3. Set output variable.
4. Define input list.
5. Specify transfer function.
6. Include input series.
7. Customize report settings.
8. Adjust scale for output.
9. Adjust scale for residuals.
10. Adjust scale for forecasting.



### Example 11
> **Summary**: Creates a P chart to monitor the proportion of Total Plastic defects over time, with subgrouping by Week and phase variable by Location, using the Time Series platform in JMP.

<!-- Keywords: #TimeSeries, #PChart, #ControlChartBuilder, #JMPScriptingLanguage, #QualityControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Time Series(
	Y( :Log Passengers ),
	Variogram( 1 ),
	Seasonal ARIMA( 0, 1, 1, 0, 1, 1, 12, No Intercept( 1 ) ),
	Local Data Filter(
		Add Filter( columns( :Log Passengers ), Where( :Log Passengers >= 2.1 & :Log Passengers <= 2.5 ) ),
		Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
	), 
);
obj << Automatic Recalc( 0 );
dt << Select Where( :Season == 10 );
dt << Exclude();
rpt = Report( obj );
```

**Code Explanation**:

1. Open table.
2. Create Time Series object.
3. Set Y variable.
4. Define Variogram.
5. Configure Seasonal ARIMA.
6. Add Local Data Filter.
7. Set filter conditions.
8. Configure filter mode.
9. Disable automatic recalculation.
10. Select specific season.
11. Exclude selected rows.
12. Generate report.



### Example 12
> **Summary**: Creates a time series object for analyzing log passengers data, incorporating seasonal ARIMA modeling and local data filtering to generate a report.

<!-- Keywords: #TimeSeriesAnalysis, #SeasonalARIMA, #LocalDataFiltering, #JMPScriptingLanguage, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Time Series(
	Y( :Log Passengers ),
	Variogram( 1 ),
	Seasonal ARIMA( 0, 1, 1, 0, 1, 1, 12, No Intercept( 1 ) ),
	Local Data Filter(
		Add Filter( columns( :Log Passengers ), Where( :Log Passengers >= 2.1 & :Log Passengers <= 2.5 ) ),
		Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
	), 
);
obj << Automatic Recalc( 1 );
dt << Select Where( :Season == 10 );
dt << Exclude();
rpt = Report( obj );
Close( dt, NoSave );
dt = Open("data_table.jmp");
obj = Time Series(
	Y( :Log Passengers ),
	Variogram( 1 ),
	Seasonal ARIMA( 0, 1, 1, 0, 1, 1, 12, No Intercept( 1 ) ),
	Local Data Filter(
		Add Filter( columns( :Log Passengers ), Where( :Log Passengers >= 2.1 & :Log Passengers <= 2.5 ) ),
		Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
	), 
);
obj << Automatic Recalc( 0 );
dt << Select Where( :Season == 10 );
dt << Exclude();
rpt = Report( obj );
```

**Code Explanation**:

1. Open data table.
2. Create time series object.
3. Set variogram.
4. Define seasonal ARIMA model.
5. Add local data filter.
6. Configure filter mode.
7. Enable automatic recalculation.
8. Select rows where season is 10.
9. Exclude selected rows.
10. Generate report.



### Example 13
> **Summary**: Creates a time series object for analyzing log passengers data, incorporating seasonal ARIMA modeling and local data filtering to focus on specific ranges.

<!-- Keywords: #TimeSeriesAnalysis, #SeasonalARIMA, #LocalDataFiltering, #JMPScriptingLanguage, #AutomaticRecalculation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Time Series(
	Y( :Log Passengers ),
	Variogram( 1 ),
	Seasonal ARIMA( 0, 1, 1, 0, 1, 1, 12, No Intercept( 1 ) ),
	Local Data Filter(
		Add Filter( columns( :Log Passengers ), Where( :Log Passengers >= 2.1 & :Log Passengers <= 2.5 ) ),
		Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
	), 
);
obj << Automatic Recalc( 1 );
dt << Select Where( :Season == 10 );
dt << Exclude();
```

**Code Explanation**:

1. Open data table.
2. Create time series object.
3. Set response variable.
4. Configure variogram.
5. Define seasonal ARIMA model.
6. Add local data filter.
7. Set filter criteria.
8. Enable automatic recalculation.
9. Select specific rows.
10. Exclude selected rows.



### Example 14
> **Summary**: Creates a time series analysis to model and forecast CO2 output based on input gas rate, with interactive forecasting capabilities.

<!-- Keywords: #TimeSeriesAnalysis, #TransferFunction, #InteractiveForecasting, #JMPScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Time Series(
	Y( :Output CO2 ),
	Input List( :Input Gas Rate ),
	Transfer Function( Order( 2, 0, 0 ), Seasonal( 0, 0, 0, 0 ), :Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ) ),
	Input Series( :Input Gas Rate ),
	SendToReport(
		Dispatch( {"Time Series Output CO2"}, "1", ScaleBox,
			{Scale( Linear ), Format( "Fixed Dec", 0 ), Min( 0 ), Max( 300 ), Inc( 50 ), Show Major Grid( 1 )}
		),
		Dispatch( {"Time Series Output CO2", "Transfer Function Model (1)", "Residuals"}, "1", ScaleBox,
			{Scale( Linear ), Format( "Fixed Dec", 0 ), Min( 0 ), Max( 300 ), Inc( 50 ), Show Major Grid( 1 )}
		),
		Dispatch( {"Time Series Output CO2", "Transfer Function Model (1)", "Interactive Forecasting"}, "1", ScaleBox,
			{Scale( Linear ), Format( "Fixed Dec", 0 ), Min( 0 ), Max( 300 ), Inc( 50 ), Show Major Grid( 1 )}
		),
		Dispatch( {"Input Time Series Panel", "Input Series: Input Gas Rate"}, "1", ScaleBox,
			{Scale( Linear ), Format( "Fixed Dec", 0 ), Min( 0 ), Max( 300 ), Inc( 50 ), Show Major Grid( 1 )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Define time series analysis.
3. Set output variable.
4. Specify input list.
5. Configure transfer function.
6. Define input series.
7. Adjust report settings.
8. Set scale properties.
9. Format numeric display.
10. Define axis limits.



### Example 15
> **Summary**: Creates a P chart to monitor the proportion of Total Plastic defects over time, using the Control Chart Builder platform with subgrouping by Week and phase variable by Location.

<!-- Keywords: #ControlChartBuilder, #TimeSeriesAnalysis, #QualityControl, #PlasticsIndustry, #StatisticalProcessControl -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Time Series( Y( :Log Passengers ), Variogram( 1 ), Seasonal ARIMA( 0, 1, 1, 0, 1, 1, 12, No Intercept( 1 ) ) );
```

**Code Explanation**:

1. Open data table.
2. Create time series object.
3. Specify log passengers as response.
4. Add variogram with lag 1.
5. Apply seasonal ARIMA model.
6. Set non-seasonal terms: 0, 1, 1.
7. Set seasonal terms: 0, 1, 1.
8. Define seasonal period as 12.
9. Exclude intercept from model.



### Example 16
> **Summary**: Runs the analysis and modeling of CO2 output data using ARIMA and transfer functions, generating reports and calculating innovations and residual sums of squares.

<!-- Keywords: #JSLScriptingLanguage, #TimeSeriesAnalysis, #ARIMAModeling, #TransferFunctions, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ), );
obj << Arima( 1, 0, 0, Actual( 1 ) );
obj << Transfer Function( Order( 2, 0, 0 ), Seasonal( 0, 0, 0, 0 ), :Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ) );
rpt = obj << report;
dt1 = (rpt["Model: AR(1)"] << get scriptable object) << Save Columns;
b ssi1 = Sum( (dt1:Innovations Output CO2 << get values) ^ 2 );
b sse1 = Sum( (dt1:Residual Output CO2 << get values) ^ 2 );
summary1 = rpt["Model: AR(1)"]["Model Summary"][Table Box( 1 )] << get as matrix;
dt2 = (rpt["Transfer Function Model (1)"] << get scriptable object) << Save Columns;
b ssi2 = Sum( (dt2:Innovations Output CO2 << get values) ^ 2 );
b sse2 = Sum( (dt2:Residual Output CO2 << get values) ^ 2 );
summary2 = rpt["Transfer Function Model (1)"]["Model Summary"][Table Box( 1 )] << get as matrix;
Close( dt1, no save );
```

**Code Explanation**:

1. Open data table.
2. Create time series object.
3. Fit ARIMA model.
4. Add transfer function.
5. Generate report.
6. Save AR(1) columns.
7. Calculate Innovations SS.
8. Calculate Residual SS.
9. Extract Model Summary.
10. Close temporary table.



### Example 17
> **Summary**: Creates and analyzes time series models for Log Passengers data, including ARIMA, Seasonal ARIMA, and Linear Exponential Smoothing methods.

<!-- Keywords: #TimeSeriesModeling, #ARIMA, #SeasonalARIMA, #LinearExponentialSmoothing, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Time Series( Y( :Log Passengers ) );
befAA = Associative Array( Window() << get window title );
obj << ARIMA( 0, 1, 1, Save Prediction Formula );
aftAA = Associative Array( Window() << get window title );
aftAA << Remove( befAA );
aftlst = aftAA << get keys;
dt2 = Data Table( aftlst[1] );
pred y formula1 = dt2:Log Passengers Prediction Formula << get values;
pred y1 = dt2:Predicted Log Passengers << get values;
Close( dt2, no save );
befAA = Associative Array( Window() << get window title );
obj << Seasonal ARIMA( 0, 1, 1, 1, 0, 1, 4, Save Prediction Formula );
aftAA = Associative Array( Window() << get window title );
aftAA << Remove( befAA );
aftlst = aftAA << get keys;
dt2 = Data Table( aftlst[1] );
pred y formula2 = dt2:Log Passengers Prediction Formula << get values;
pred y2 = dt2:Predicted Log Passengers << get values;
Close( dt2, no save );
befAA = Associative Array( Window() << get window title );
obj << Simple Exponential Smoothing( Zero to One, Save Prediction Formula );
aftAA = Associative Array( Window() << get window title );
aftAA << Remove( befAA );
aftlst = aftAA << get keys;
dt2 = Data Table( aftlst[1] );
pred y formula3 = dt2:Log Passengers Prediction Formula << get values;
pred y3 = dt2:Predicted Log Passengers << get values;
Close( dt2, no save );
befAA = Associative Array( Window() << get window title );
obj << Linear Exponential Smoothing( Zero to One, Confidence Intervals( 0.9 ), Save Prediction Formula );
aftAA = Associative Array( Window() << get window title );
aftAA << Remove( befAA );
aftlst = aftAA << get keys;
dt2 = Data Table( aftlst[1] );
pred y formula4 = dt2:Log Passengers Prediction Formula << get values;
pred y4 = dt2:Predicted Log Passengers << get values;
```

**Code Explanation**:

1. Open data_table data
2. Create time series object for Log Passengers.
3. Capture initial window titles.
4. Fit ARIMA model.
5. Capture new window titles.
6. Remove initial windows from new titles.
7. Get keys of new windows.
8. Open data table.
9. Extract prediction formula and predicted values.
10. Close data table without saving.



### Example 18
> **Summary**: Creates a time series model to predict CO2 output based on input gas rates, utilizing the Transfer Function platform in JMP.

<!-- Keywords: #JMP, #TransferFunction, #TimeSeriesModeling, #PredictiveAnalytics, #DataScience -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ), );
befAA = Associative Array( Window() << get window title );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	Save Columns
);
aftAA = Associative Array( Window() << get window title );
aftAA << Remove( befAA );
aftlst = aftAA << get keys;
dt2 = Data Table( aftlst[1] );
pred y6 = dt2:Predicted Output CO2 << get values;
If( Host is( Windows ), , );
pred y6 for = Char( dt2:Predicted Output CO2 << get formula );
```

**Code Explanation**:

1. Open data_table data
2. Create time series object.
3. Capture initial window titles.
4. Apply transfer function model.
5. Capture updated window titles.
6. Identify new window titles.
7. Access first new data table.
8. Retrieve predicted CO2 values.
9. Check host operating system.
10. Get prediction formula.



### Example 19
> **Summary**: Runs the prediction of temperature values using a Seasonal ARIMA model, generating predicted temperature values and saving the prediction formula.

<!-- Keywords: #JMPScriptingLanguage, #TimeSeriesAnalysis, #SeasonalARIMAModel, #PredictiveModeling, #DataScience -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
obj1 = dt1 << Time Series( Y( :Temperature ), );
obj2 = obj1 << Seasonal ARIMA( 0, 0, 0, 0, 2, 2, 12 );
dt2 = obj2 << Save Prediction Formula;
pred1 = dt2:Predicted Temperature << get values;
pred1 for = dt2:Temperature Prediction Formula << get values;
```

**Code Explanation**:

1. Open data table.
2. Create time series object.
3. Apply Seasonal ARIMA model.
4. Save prediction formula.
5. Extract predicted values.
6. Get prediction formula values.



### Example 20
> **Summary**: Calculates and visualizes MAPE (Mean Absolute Percentage Error) for a time series model, utilizing Transfer Function and Associative Array operations in JMP.

<!-- Keywords: #JSLScriptingLanguage, #TimeSeriesAnalysis, #TransferFunction, #AssociativeArray, #MAPE -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
bef aa = Associative Array( Window() << get window title );
obj << Transfer Function(
	Order( 1, 1, 1 ),
	Seasonal( 0, 1, 0, 0 ),
	:Input Gas Rate( Order( 0, 1, 0 ), Seasonal( 0, 1, 0, 0 ), Lag( 3 ) ),
	Save Columns
);
aft aa = Associative Array( Window() << get window title );
aft aa << Remove( bef aa );
aftlst = aft aa << get keys;
dt2 = Data Table( aftlst[1] );
dt2 << New Column( "temp APE", formula( Abs( (:Actual Output CO2 - :Predicted Output CO2) / :Actual Output CO2 ) ) );
b MAPE = Sum( (dt2:temp APE << get values)[5 :: 296] ) * 100 / 295;
rpt = Report( obj );
MAPE = (rpt[Outline Box( "Model Comparison" )][Table Box( 1 )] << get as matrix)[10];
```

**Code Explanation**:

1. Open data_table data
2. Create time series object.
3. Store initial window titles.
4. Apply transfer function model.
5. Store updated window titles.
6. Remove initial window titles.
7. Extract new window keys.
8. Open data table.
9. Add temporary APE column.
10. Calculate MAPE from APE.



### Example 21
> **Summary**: Time series analysis and diagnostics for CO2 output and gas rate input, extracting prewhitening ACF and PACF matrices, and visualizing cross-correlation plots.

<!-- Keywords: #TimeSeriesAnalysis, #Diagnostics, #ACFPACF, #CrossCorrelation, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Time Series(
	Y( :Output CO2 ),
	Input List( :Input Gas Rate ),
	Input Series( :Input Gas Rate, Prewhitening( Order( 0, 0, 0 ), Seasonal( 0, 0, 0, 12 ) ) )
);
rpt1 = Report( obj1 );
acf1 = rpt1[Outline Box( "Prewhitening Plot (0,0,0)(0,0,0)12 : Output - Output CO2 vs. Input - Input Gas Rate" )][Table Box( 2 )] <<
get as matrix;
pacf1 = rpt1[Outline Box( "Prewhitening Plot (0,0,0)(0,0,0)12 : Output - Output CO2 vs. Input - Input Gas Rate" )][Table Box( 3 )] <<
get as matrix;
obj2 = dt << Time Series( Y( :Input Gas Rate ), );
rpt2 = Report( obj2 );
acf2 = (rpt2[Outline Box( "Time Series Basic Diagnostics" )][Table Box( 1 )] << get as matrix) || (rpt2[
Outline Box( "Time Series Basic Diagnostics" )][Table Box( 2 )] << get as matrix);
pacf2 = (rpt2[Outline Box( "Time Series Basic Diagnostics" )][Table Box( 3 )] << get as matrix);
Close( dt, no save );
dt = New Table( "Test", New Column( "X", Values( [1, 3, 7, 9, 7, 3, 4] ) ), New Column( "Y", Values( [4, 5, 8, 1, 4, 1, 5] ) ) );
obj = dt << Time Series(
	Y( :Y ),
	Input List( :X ),
	Time Series Graph( 0 ),
	Autocorrelation( 0 ),
	Partial Autocorrelation( 0 ),
	Cross Correlation( 1 ),
	Number of Autocorrelation Lags( 3 ),
	Input Series( :X, Time Series Graph( 0 ), Autocorrelation( 0 ), Partial Autocorrelation( 0 ), Number of Autocorrelation Lags( 3 ) ), 
);
rpt = Report( obj );
nlag = Abs( rpt[Outline Box( "Cross Correlation Plots: Output Series - Y" )][Number Col Box( 1 )] << get as matrix );
se = 1 / Sqrt( J( N Rows( dt ), 1, N Rows( dt ) ) - nlag );
```

**Code Explanation**:

1. Open data_table data
2. Perform time series analysis on CO2 output.
3. Extract prewhitening ACF matrix.
4. Extract prewhitening PACF matrix.
5. Perform time series analysis on gas rate input.
6. Extract ACF matrix from diagnostics.
7. Extract PACF matrix from diagnostics.
8. Close original data table.
9. Create new test data table.
10. Perform time series analysis on test data.



### Example 22
> **Summary**: Generates simulated data for time series forecasting using a seasonal ARIMA model, with variogram modeling and random seed specification.

<!-- Keywords: #TimeSeriesForecasting, #SeasonalARIMA, #VariogramModeling, #RandomSeed, #SimulationData -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Time Series( Y( :Ozone Concentration ), Variogram( 1 ), Seasonal ARIMA( 1, 0, 1, 1, 0, 1, 12, No Intercept( 1 ) ) );
dt2 = obj << Generate Simulation( 1, 12345, 100, 10 );
```

**Code Explanation**:

1. Open data table.
2. Create time series object.
3. Define variogram model.
4. Define seasonal ARIMA model.
5. Generate simulation data.
6. Set random seed.
7. Specify number of simulations.
8. Define forecast horizon.
9. Include no intercept term.
10. Save simulated data table.



### Example 23
> **Summary**: Analyze and visualize log passengers data using Time Series, generating a report with a lag plot configured to 4 lags.

<!-- Keywords: #TimeSeriesAnalysis, #LagPlot, #SeasonalARIMA, #JMPScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Time Series(
	Y( :Log Passengers ),
	Variogram( 1 ),
	Show Lag Plot( 1 ),
	Seasonal ARIMA( 0, 1, 1, 0, 1, 1, 12, No Intercept( 1 ) )
);
rpt = obj << report;
rpt[Outline Box( "Lag Plot" )][Number Edit Box( 1 )] << Set( 4 );
```

**Code Explanation**:

1. Open data_table data
2. Launch Time Series analysis.
3. Select log passengers variable.
4. Enable variogram.
5. Show lag plot.
6. Configure Seasonal ARIMA model.
7. Generate report.
8. Access Lag Plot outline box.
9. Modify lag plot settings.
10. Set lag plot to 4 lags.



### Example 24
> **Summary**: Runs a time series analysis to model the relationship between Output CO2 and Input Gas Rate, utilizing a Transfer Function with Order, Seasonal, and Lag components.

<!-- Keywords: #TimeSeriesAnalysis, #TransferFunction, #JMPScriptingLanguage, #DataModeling, #ProcessControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Time Series(
	Y( :Output CO2 ),
	Input List( :Input Gas Rate ),
	Transfer Function( Order( 1, 0, 0 ), Seasonal( 0, 0, 0, 0 ), :Input Gas Rate( Order( 0, 0, 0 ), Seasonal( 0, 0, 0, 0 ), Lag( 0 ) ) ),
	Input Series( :Input Gas Rate )
);
Close( dt, no save );
b DF = 283;
b LL = -4.12514377097875;
```

**Code Explanation**:

1. Open data table.
2. Define time series analysis.
3. Set output variable.
4. Specify input list.
5. Configure transfer function.
6. Define input series.
7. Close data table without saving.
8. Assign degrees of freedom.
9. Assign lower limit value.



### Example 25
> **Summary**: Creates a transfer function model to analyze CO2 output based on input gas rate, utilizing Time Series and Transfer Function platforms in JMP.

<!-- Keywords: #JMP, #TimeSeries, #TransferFunction, #Modeling, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Time Series(
	Y( :Output CO2 ),
	Input List( :Input Gas Rate ),
	Transfer Function( Order( 2, 0, 0 ), Seasonal( 0, 0, 0, 0 ), :Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ) ),
	Input Series( :Input Gas Rate )
);
rpt = obj << report;
summary1 = rpt[Outline Box( "Transfer Function Model (1)" )][Outline Box( "Model Summary" )][Table Box( 1 )] << get as matrix;
Close( dt, no save );
b log1 = "Stablized parameterization returns invalid smoothing parameters. Cannot fit the model.";
```

**Code Explanation**:

1. Open table.
2. Define time series object.
3. Set output variable.
4. Set input list.
5. Define transfer function.
6. Set input series.
7. Generate report.
8. Extract model summary.
9. Close table without saving.
10. Log error message.



### Example 26
> **Summary**: Simulates a time series model to predict Total Plastic defects over time, with subgrouping by Week and phase variable by Location.

<!-- Keywords: #TimeSeriesModeling, #Simulation, #ControlChartBuilder, #JMPScriptingLanguage, #QualityControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ), Input Series( :Input Gas Rate ) );
obj << Simulate Once( 1 );
```

**Code Explanation**:

1. Open data table;
2. Define time series model.
3. Set output variable.
4. Specify input variables.
5. Run simulation once.



### Example 27
> **Summary**: Runs the simulation and reporting of a seasonal ARIMA model for CO2 output based on input gas rate, with 10 iterations and a single report generation.

<!-- Keywords: #JSLScriptingLanguage, #TimeSeriesAnalysis, #SeasonalARIMAModel, #Simulation, #Reporting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ), Difference( 0, 1, 12 ), Input Series( :Input Gas Rate ) );
obj << Seasonal ARIMA( 0, 0, 0, 0, 0, 0, 12 );
rpt = obj << report;
For( i = 1, i <= 10, i++,
	obj << Simulate Once( 1 )
);
rpt[Outline Box( "Model Comparison" )][FrameBox( 1 )] << select;
```

**Code Explanation**:

1. Open data table.
2. Create time series object.
3. Define model parameters.
4. Fit seasonal ARIMA model.
5. Generate report.
6. Loop 10 times.
7. Simulate model once per iteration.
8. Select model comparison outline.
9. Highlight first frame box.
10. Select specific content.



### Example 28
> **Summary**: Runs the removal of linear trend and cycle from a time series data set, capturing log information before deletion.

<!-- Keywords: #TimeSeriesAnalysis, #DataPreprocessing, #JMPScriptingLanguage, #ControlChartBuilder, #QualityControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Time Series( Y( :Sales ) );
dt:Sales << Set selected;
log1 = Log Capture( dt << Delete Columns() );
obj << Remove Linear Trend( 1 );
obj << Remove Cycle( Units per cycle( 12 ) );
Close( dt, no save );
rn1 = [];
```

**Code Explanation**:

1. Open data table;
2. Create Time Series object for "Sales".
3. Select all rows in "Sales".
4. Capture log before deleting columns.
5. Delete selected columns.
6. Remove linear trend from Time Series.
7. Remove 12-unit cycle from Time Series.
8. Close table without saving.
9. Initialize empty list rn1.



### Example 29
> **Summary**: Runs the simulation and analysis of steel shipments using ARIMA modeling, with random seed setting and multiple simulations.

<!-- Keywords: #JSLScriptingLanguage, #TimeSeriesAnalysis, #ARIMAModeling, #Simulation, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Time Series( Y( :Steel Shipments ) );
obj1 << arima( 1, 0, 0 );
obj1 << Set Seed( 1111 );
obj1 << Simulate Once( 1 );
rn1 = [];
For( i = 1, i <= 100, i++,
	rn1 |/= Random Uniform()
);
obj1 << close window( 1 );
For( i = 1, i <= 50, i++,
	rn2 = [];
	obj2 = dt << Time Series( Y( :Steel Shipments ) );
	obj2 << arima( 1, 0, 0 );
	obj2 << Set Seed( 1111 );
	obj2 << Simulate Once( 1 );
	For( j = 1, j <= 100, j++,
		rn2 |/= Random Uniform()
	);
	obj2 << close window( 1 );
);
```

**Code Explanation**:

1. Open data_table data
2. Create time series object.
3. Apply ARIMA model.
4. Set random seed.
5. Simulate once.
6. Initialize random number list.
7. Loop 100 times.
8. Append random numbers.
9. Close first window.
10. Loop 50 times for simulations.



### Example 30
> **Summary**: Creates a P chart to monitor the proportion of Total Plastic defects over time using the Control Chart Builder platform, with subgrouping by Week and phase variable by Location.

<!-- Keywords: #JMPScriptingLanguage, #TimeSeriesAnalysis, #ControlCharts, #QualityControl, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Time Series(
	Y( :date ),
	Input List( :Ozone Concentration ),
	Input Series(
		:Ozone Concentration,
		ARIMA( 0, 0, 0 ),
		Prewhitening( Order( 0, 0, 0 ), Seasonal( 0, 0, 0, 12 ) ),
		Seasonal ARIMA( 0, 0, 0, 0, 0, 0, 12 )
	)
);
rpt = Report( obj );
jrn1 = rpt[CheckBoxBox( 2 )] << get journal;
rpt[CheckboxBox( 2 )] << set( 2 );
rpt2 = Report( obj );
jrn2 = rpt2[CheckBoxBox( 2 )] << get journal;
```

**Code Explanation**:

1. Open data table;
2. Initiate Time Series analysis.
3. Set date column as Y variable.
4. Add Ozone Concentration to input list.
5. Configure Ozone Concentration as input series.
6. Define ARIMA model parameters.
7. Set prewhitening order and seasonal parameters.
8. Define seasonal ARIMA model parameters.
9. Generate initial report object.
10. Extract journal from checkbox box.
11. Toggle checkbox box state.
12. Generate updated report object.
13. Extract journal from updated checkbox box.



### Example 31
> **Summary**: Creates a P chart to monitor the proportion of Total Plastic defects over time, utilizing Control Chart Builder and Time Series analysis.

<!-- Keywords: #TimeSeriesAnalysis, #ControlChartBuilder, #ARIMAModeling, #PredictiveAnalytics, #QualityControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Time Series( Y( :Log Passengers ) );
befAA = Associative Array( Window() << get window title );
obj << ARIMA( 0, 1, 1, Save Prediction Formula );
aftAA = Associative Array( Window() << get window title );
aftAA << Remove( befAA );
aftlst = aftAA << get keys;
dt2 = Data Table( aftlst[1] );
pred y formula1 = dt2:Log Passengers Prediction Formula << get values;
pred y1 = dt2:Predicted Log Passengers << get values;
```

**Code Explanation**:

1. Open table.
2. Create time series object.
3. Store initial window titles.
4. Apply ARIMA model.
5. Store updated window titles.
6. Remove unchanged titles.
7. Extract new window keys.
8. Access prediction data table.
9. Retrieve prediction formula values.
10. Retrieve predicted log passengers values.



### Example 32
> **Summary**: Time series analysis and diagnostics for CO2 output and gas rate data, generating prewhitening plots and extracting ACF and PACF matrices.

<!-- Keywords: #TimeSeriesAnalysis, #JMPScriptingLanguage, #PrewhiteningPlot, #ACFMatrix, #PACFMatrix -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Time Series(
	Y( :Output CO2 ),
	Input List( :Input Gas Rate ),
	Input Series( :Input Gas Rate, Prewhitening( Order( 0, 0, 0 ), Seasonal( 0, 0, 0, 12 ) ) )
);
rpt1 = Report( obj1 );
acf1 = rpt1[Outline Box( "Prewhitening Plot (0,0,0)(0,0,0)12 : Output - Output CO2 vs. Input - Input Gas Rate" )][Table Box( 2 )] <<
get as matrix;
pacf1 = rpt1[Outline Box( "Prewhitening Plot (0,0,0)(0,0,0)12 : Output - Output CO2 vs. Input - Input Gas Rate" )][Table Box( 3 )] <<
get as matrix;
obj2 = dt << Time Series( Y( :Input Gas Rate ), );
rpt2 = Report( obj2 );
acf2 = (rpt2[Outline Box( "Time Series Basic Diagnostics" )][Table Box( 1 )] << get as matrix) || (rpt2[
Outline Box( "Time Series Basic Diagnostics" )][Table Box( 2 )] << get as matrix);
pacf2 = (rpt2[Outline Box( "Time Series Basic Diagnostics" )][Table Box( 3 )] << get as matrix);
```

**Code Explanation**:

1. Open data table.
2. Create time series object for CO2 output.
3. Define input list and series for gas rate.
4. Generate prewhitening plot report.
5. Extract ACF matrix from prewhitening plot.
6. Extract PACF matrix from prewhitening plot.
7. Create time series object for gas rate.
8. Generate basic diagnostics report.
9. Extract combined ACF matrix from diagnostics.
10. Extract PACF matrix from diagnostics.



### Example 33
> **Summary**: Runs a time series analysis to model the relationship between Output CO2 and Input Gas Rate, using a Transfer Function with specified orders and seasonal parameters.

<!-- Keywords: #TimeSeriesAnalysis, #TransferFunction, #JMPScriptingLanguage, #DataModeling, #ProcessControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Time Series(
	Y( :Output CO2 ),
	Input List( :Input Gas Rate ),
	Transfer Function( Order( 1, 0, 0 ), Seasonal( 0, 0, 0, 0 ), :Input Gas Rate( Order( 0, 0, 0 ), Seasonal( 0, 0, 0, 0 ), Lag( 0 ) ) ),
	Input Series( :Input Gas Rate )
);
```

**Code Explanation**:

1. Open data table;
2. Define time series analysis.
3. Set output variable to "Output CO2".
4. Specify input list as "Input Gas Rate".
5. Configure transfer function order.
6. Set seasonal parameters for transfer function.
7. Define input series order.
8. Set seasonal parameters for input series.
9. Set lag for input series.
10. Execute time series analysis.



### Example 34
> **Summary**: Creates a transfer function model to analyze the relationship between Output CO2 and Input Gas Rate, generating a report with summary statistics.

<!-- Keywords: #TransferFunctionModel, #TimeSeriesAnalysis, #JMPScriptingLanguage, #DataAnalytics, #ProcessControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Time Series(
	Y( :Output CO2 ),
	Input List( :Input Gas Rate ),
	Transfer Function( Order( 2, 0, 0 ), Seasonal( 0, 0, 0, 0 ), :Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ) ),
	Input Series( :Input Gas Rate )
);
rpt = obj << report;
summary1 = rpt[Outline Box( "Transfer Function Model (1)" )][Outline Box( "Model Summary" )][Table Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data table.
2. Define time series analysis.
3. Set output variable.
4. Specify input list.
5. Configure transfer function.
6. Define input series.
7. Generate report.
8. Extract model summary.
9. Convert to matrix.
10. Store in variable.



### Example 35
> **Summary**: Process of creating a P chart to monitor the proportion of Total Plastic defects over time, utilizing Control Chart Builder with subgrouping by Week and phase variable by Location.

<!-- Keywords: #ControlChartBuilder, #TimeSeriesAnalysis, #QualityControl, #JMPScriptingLanguage, #ProcessMonitoring -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Time Series( Y( :Sales ) );
dt:Sales << Set selected;
log1 = Log Capture( dt << Delete Columns() );
obj << Remove Linear Trend( 1 );
obj << Remove Cycle( Units per cycle( 12 ) );
```

**Code Explanation**:

1. Open table.
2. Create time series object.
3. Select sales column.
4. Capture log.
5. Delete columns.
6. Remove linear trend.
7. Remove cycle.



### Example 36
> **Summary**: Analyzes and creates reports for Steel Shipments time series data using ARIMA modeling, with interactive features for model comparison and automatic recalculation.

<!-- Keywords: #JSLScriptingLanguage, #TimeSeriesAnalysis, #ARIMAModeling, #ModelComparison, #AutomaticRecalculation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << arima( 1, 0, 0 );
rpt = obj << report;
max1 = rpt["Model Comparison"][AxisBox( 2 )] << get max;
obj << Automatic Recalc( 1 );
dt << Select Randomly( 0.1 ) << Hide and Exclude();
rpt = obj << report;
max2 = rpt["Model Comparison"][AxisBox( 2 )] << get max;
```

**Code Explanation**:

1. Open data table.
2. Create time series object.
3. Fit ARIMA model.
4. Generate report.
5. Get maximum value.
6. Enable automatic recalculation.
7. Randomly select rows.
8. Hide and exclude selected rows.
9. Generate updated report.
10. Get new maximum value.



### Example 37
> **Summary**: Runs the analysis and simulation of Steel Shipments time series data using ARIMA modeling, generating a report and simulating more scenarios.

<!-- Keywords: #TimeSeriesAnalysis, #ARIMAModeling, #Simulation, #JMPScriptingLanguage, #DataAnalytics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << arima( 1, 0, 0 );
rpt = obj << report;
obj << Simulate More( 1, 2 );
```

**Code Explanation**:

1. Open data table.
2. Create time series object.
3. Apply ARIMA model.
4. Generate report.
5. Simulate more scenarios.



### Example 38
> **Summary**: Creates a time series object with simple moving average model and report generation, utilizing the Time Series platform in JMP.

<!-- Keywords: #TimeSeries, #SimpleMovingAverage, #JMPScriptingLanguage, #ReportGeneration, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Time Series( X( :Date ), Y( :Sales ), Simple Moving Average( Add Model( 5 ) ), );
rpt = obj << report;
temp = rpt["Simple Moving Average"] << get scriptable object;
temp << remove report;
```

**Code Explanation**:

1. Open table "data_table".
2. Create time series object.
3. Set X variable as Date.
4. Set Y variable as Sales.
5. Add simple moving average model.
6. Get report of time series object.
7. Extract simple moving average section.
8. Remove simple moving average report.



### Example 39
> **Summary**: Creates a time series model to forecast CO2 output based on input gas rate, using Transfer Functions with Order and Seasonal components.

<!-- Keywords: #TimeSeriesModeling, #TransferFunctions, #JMPScriptingLanguage, #Forecasting, #CO2Output -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Time Series(
	Y( :Output CO2 ),
	Input List( :Input Gas Rate ),
	Transfer Function(
		Order( 2, 0, 0 ),
		Seasonal( 0, 0, 0, 0 ),
		:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
		No Intercept( 1 )
	),
	Transfer Function(
		Order( 2, 0, 0 ),
		Seasonal( 0, 0, 0, 0 ),
		:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
		No Intercept( 1 ),
		No Constrain( 1 )
	),
	Input Series( :Input Gas Rate ), 
);
rpt = obj << report;
est1 = rpt["Transfer Function Model(1)"]["Parameter Estimates"][Number Col Box( "Estimate" )] << get as matrix;
```

**Code Explanation**:

1. Open data_table data
2. Create time series object.
3. Set output variable to CO2.
4. Define input variable as gas rate.
5. Configure first transfer function.
6. Set transfer function order.
7. Disable seasonal effects.
8. Specify input gas rate parameters.
9. Exclude intercept term.
10. Extract parameter estimates into matrix.



### Example 40
> **Summary**: Analyze time series data by applying double exponential smoothing and ARIMA models to a dataset, extracting summary statistics and calculating AIC, SBC, R-squared, MAPE, and variance.

<!-- Keywords: #TimeSeriesAnalysis, #DoubleExponentialSmoothing, #ARIMA, #JMPScriptingLanguage, #StatisticalModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Time Series( y( :Log Passengers ) );
obj << Double Exponential Smoothing( unconstrained );
obj << ARIMA( 0, 2, 2, No Intercept( 1 ) );
rslt = obj << Get Models();
DF3 = rslt["Double (Brown) Exponential Smoothing"]["Summary"]["DF"];
neg2LL3 = rslt["Double (Brown) Exponential Smoothing"]["Summary"]["-2logLikelihood"];
AIC3 = rslt["Double (Brown) Exponential Smoothing"]["Summary"]["AIC"];
SBC3 = rslt["Double (Brown) Exponential Smoothing"]["Summary"]["SBC"];
RSQ3 = rslt["Double (Brown) Exponential Smoothing"]["Summary"]["RSquared"];
MAPE3 = rslt["Double (Brown) Exponential Smoothing"]["Summary"]["MAPE"];
var3 = rslt["Double (Brown) Exponential Smoothing"]["Summary"]["Variance"];
est3 = rslt["Double (Brown) Exponential Smoothing"]["Level Smoothing Weight"]["Estimate"];
stderr3 = rslt["Double (Brown) Exponential Smoothing"]["Level Smoothing Weight"]["Std Err"];
Close( dt, no save );
b DF5 = 140;
b SSE5 = 0.287516621327776;
b var5 = 0.00205369015234126;
b SD5 = 0.0453176582839544;
b AIC5 = -469.193691163933;
b SBC5 = -463.28203704873;
b RSQ5 = 0.9410032503768;
b RSQAdj5 = 0.940581845022348;
b MAPE5 = 1.6491742352283;
b MAE5 = 0.039475277482647;
b neg2LL5 = -473.193691163933;
b level est5 = 1.27914764406304;
b trend est5 = 0.00000020685495623;
b level stderr5 = 0.0946695317579881;
b trend stderr5 = 0.000003715054589111;
b DF6 = 140;
b SSE6 = 0.287516561793894;
b var6 = 0.00205368972709924;
b SD6 = 0.0453176535921626;
b AIC6 = -469.193691164066;
b SBC6 = -463.282037048863;
b RSQ6 = 0.941003250382928;
b RSQAdj6 = 0.940581845028521;
b MAPE6 = 1.6491742320009;
b MAE6 = 0.0394752774094628;
b neg2LL6 = -473.193691164066;
b est6 = [0.720852329514038, 0.279147670483537];
b stderr6 = [0.0963449439647497, 0.0947912356930383];
```

**Code Explanation**:

1. Open data table.
2. Create time series object.
3. Apply double exponential smoothing.
4. Apply ARIMA model.
5. Retrieve models from object.
6. Extract summary statistics for DES.
7. Calculate AIC for DES.
8. Calculate SBC for DES.
9. Calculate R-squared for DES.
10. Close data table without saving.



### Example 41
> **Summary**: Analyze a time series dataset using seasonal exponential smoothing, retrieving model results and extracting various statistical metrics.

<!-- Keywords: #TimeSeriesAnalysis, #SeasonalExponentialSmoothing, #JMPScriptingLanguage, #StatisticalModeling, #DataAnalytics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Time Series( y( :Log Passengers ) );
obj << Seasonal Exponential Smoothing( 12, unconstrained );
rslt = obj << Get Models();
DF9 = rslt["Seasonal Exponential Smoothing( 12, Unconstrained )"]["Summary"]["DF"];
neg2LL9 = rslt["Seasonal Exponential Smoothing( 12, Unconstrained )"]["Summary"]["-2logLikelihood"];
AIC9 = rslt["Seasonal Exponential Smoothing( 12, Unconstrained )"]["Summary"]["AIC"];
SBC9 = rslt["Seasonal Exponential Smoothing( 12, Unconstrained )"]["Summary"]["SBC"];
RSQ9 = rslt["Seasonal Exponential Smoothing( 12, Unconstrained )"]["Summary"]["RSquared"];
MAPE9 = rslt["Seasonal Exponential Smoothing( 12, Unconstrained )"]["Summary"]["MAPE"];
var9 = rslt["Seasonal Exponential Smoothing( 12, Unconstrained )"]["Summary"]["Variance"];
level est9 = rslt["Seasonal Exponential Smoothing( 12, Unconstrained )"]["Level Smoothing Weight"]["Estimate"];
level stderr9 = rslt["Seasonal Exponential Smoothing( 12, Unconstrained )"]["Level Smoothing Weight"]["Std Err"];
season est9 = rslt["Seasonal Exponential Smoothing( 12, Unconstrained )"]["Seasonal Smoothing Weight"]["Estimate"];
season stderr9 = rslt["Seasonal Exponential Smoothing( 12, Unconstrained )"]["Seasonal Smoothing Weight"]["Std Err"];
Close( dt, no save );
b DF11 = 128;
b SSE11 = 3.06458621232845e-33;
b var11 = 2.3942079783816e-35;
b SD11 = 4.89306445735349e-18;
b AIC11 = -670.119136608099;
b SBC11 = -661.493544638496;
b RSQ11 = 0.988610560515491;
b RSQAdj11 = 0.988432600523546;
b MAPE11 = 0.591555034883716;
b MAE11 = 0.0141607495444859;
b neg2LL11 = -676.119136608099;
b level est11 = -12478019.3789299;
b trend est11 = -21201937.2459429;
b season est11 = 223879056.399471;
b level stderr11 = 0.000000012621404604;
b trend stderr11 = 7027310.89747523;
b season stderr11 = 0.0000000014169191791;
```

**Code Explanation**:

1. Open data table.
2. Create time series object.
3. Apply seasonal exponential smoothing.
4. Retrieve model results.
5. Extract degrees of freedom.
6. Extract negative log-likelihood.
7. Extract Akaike information criterion.
8. Extract Schwarz Bayesian criterion.
9. Extract R-squared.
10. Extract mean absolute percentage error.



### Example 42
> **Summary**: Runs the application of Winters method to a time series object, extracting various metrics such as degrees of freedom, negative log-likelihood, and R-squared value.

<!-- Keywords: #WintersMethod, #TimeSeriesAnalysis, #JMPScriptingLanguage, #StatisticalModeling, #QualityControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Time Series( y( :Log Passengers ) );
obj << Winters Method( 12, unconstrained );
rslt = obj << Get Models();
DF11 = rslt["Winters Method (Additive)"]["Summary"]["DF"];
neg2LL11 = rslt["Winters Method (Additive)"]["Summary"]["-2logLikelihood"];
AIC11 = rslt["Winters Method (Additive)"]["Summary"]["AIC"];
SBC11 = rslt["Winters Method (Additive)"]["Summary"]["SBC"];
RSQ11 = rslt["Winters Method (Additive)"]["Summary"]["RSquared"];
MAPE11 = rslt["Winters Method (Additive)"]["Summary"]["MAPE"];
var11 = rslt["Winters Method (Additive)"]["Summary"]["Variance"];
level est11 = rslt["Winters Method (Additive)"]["Level Smoothing Weight"]["Estimate"];
level stderr11 = rslt["Winters Method (Additive)"]["Level Smoothing Weight"]["Std Err"];
trend est11 = rslt["Winters Method (Additive)"]["Trend Smoothing Weight"]["Estimate"];
trend stderr11 = rslt["Winters Method (Additive)"]["Trend Smoothing Weight"]["Std Err"];
season est11 = rslt["Winters Method (Additive)"]["Seasonal Smoothing Weight"]["Estimate"];
season stderr11 = rslt["Winters Method (Additive)"]["Seasonal Smoothing Weight"]["Std Err"];
```

**Code Explanation**:

1. Open data table.
2. Create time series object.
3. Apply Winters method.
4. Retrieve models from object.
5. Extract degrees of freedom.
6. Extract negative log-likelihood.
7. Extract Akaike information criterion.
8. Extract Schwarz Bayesian criterion.
9. Extract R-squared value.
10. Extract mean absolute percentage error.



### Example 43
> **Summary**: Analyze time series data by applying double exponential smoothing and ARIMA models to a dataset, extracting various statistical metrics.

<!-- Keywords: #TimeSeriesAnalysis, #DoubleExponentialSmoothing, #ARIMA, #StatisticalModeling, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Time Series( y( :Log Passengers ) );
obj << Double Exponential Smoothing( unconstrained );
obj << ARIMA( 0, 2, 2, No Intercept( 1 ) );
rslt = obj << Get Models();
DF3 = rslt["Double (Brown) Exponential Smoothing"]["Summary"]["DF"];
neg2LL3 = rslt["Double (Brown) Exponential Smoothing"]["Summary"]["-2logLikelihood"];
AIC3 = rslt["Double (Brown) Exponential Smoothing"]["Summary"]["AIC"];
SBC3 = rslt["Double (Brown) Exponential Smoothing"]["Summary"]["SBC"];
RSQ3 = rslt["Double (Brown) Exponential Smoothing"]["Summary"]["RSquared"];
MAPE3 = rslt["Double (Brown) Exponential Smoothing"]["Summary"]["MAPE"];
var3 = rslt["Double (Brown) Exponential Smoothing"]["Summary"]["Variance"];
est3 = rslt["Double (Brown) Exponential Smoothing"]["Level Smoothing Weight"]["Estimate"];
stderr3 = rslt["Double (Brown) Exponential Smoothing"]["Level Smoothing Weight"]["Std Err"];
```

**Code Explanation**:

1. Open data_table data
2. Create time series object.
3. Apply double exponential smoothing.
4. Apply ARIMA model.
5. Retrieve models from object.
6. Extract degrees of freedom.
7. Extract negative log-likelihood.
8. Extract Akaike Information Criterion.
9. Extract Schwarz Bayesian Criterion.
10. Extract R-squared value.



### Example 44
> **Summary**: Analyze a time series dataset using linear exponential smoothing and ARIMA models, extracting summary statistics and model estimates.

<!-- Keywords: #TimeSeriesAnalysis, #LinearExponentialSmoothing, #ARIMA, #JMPScriptingLanguage, #StatisticalModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Time Series( y( :Log Passengers ) );
obj << Linear Exponential Smoothing( unconstrained );
obj << ARIMA( 0, 2, 2, No Intercept( 1 ) );
rslt = obj << Get Models();
DF5 = rslt["Linear (Holt) Exponential Smoothing"]["Summary"]["DF"];
neg2LL5 = rslt["Linear (Holt) Exponential Smoothing"]["Summary"]["-2logLikelihood"];
AIC5 = rslt["Linear (Holt) Exponential Smoothing"]["Summary"]["AIC"];
SBC5 = rslt["Linear (Holt) Exponential Smoothing"]["Summary"]["SBC"];
RSQ5 = rslt["Linear (Holt) Exponential Smoothing"]["Summary"]["RSquared"];
MAPE5 = rslt["Linear (Holt) Exponential Smoothing"]["Summary"]["MAPE"];
var5 = rslt["Linear (Holt) Exponential Smoothing"]["Summary"]["Variance"];
level est5 = rslt["Linear (Holt) Exponential Smoothing"]["Level Smoothing Weight"]["Estimate"];
level stderr5 = rslt["Linear (Holt) Exponential Smoothing"]["Level Smoothing Weight"]["Std Err"];
trend est5 = rslt["Linear (Holt) Exponential Smoothing"]["Trend Smoothing Weight"]["Estimate"];
trend stderr5 = rslt["Linear (Holt) Exponential Smoothing"]["Trend Smoothing Weight"]["Std Err"];
DF6 = rslt["IMA(2, 2) No Intercept"]["Summary"]["DF"];
neg2LL6 = rslt["IMA(2, 2) No Intercept"]["Summary"]["-2logLikelihood"];
AIC6 = rslt["IMA(2, 2) No Intercept"]["Summary"]["AIC"];
SBC6 = rslt["IMA(2, 2) No Intercept"]["Summary"]["SBC"];
RSQ6 = rslt["IMA(2, 2) No Intercept"]["Summary"]["RSquared"];
MAPE6 = rslt["IMA(2, 2) No Intercept"]["Summary"]["MAPE"];
var6 = rslt["IMA(2, 2) No Intercept"]["Summary"]["Variance"];
est6 = rslt["IMA(2, 2) No Intercept"]["MA Coefficients"];
stderr6 = rslt["IMA(2, 2) No Intercept"]["MA Coefficient Std Errors"];
```

**Code Explanation**:

1. Open table.
2. Create time series object.
3. Apply linear exponential smoothing.
4. Apply ARIMA model.
5. Retrieve models.
6. Extract Linear (Holt) Exponential Smoothing summary statistics.
7. Extract IMA(2, 2) No Intercept summary statistics.
8. Store results in variables.
9. Save estimates and standard errors.
10. Save MA coefficients and standard errors.



## Time Series using Set Values
### Example 1
> **Summary**: Creates a time series object from a data table, setting X to year and Y to Wolfer, and calculating spectral density.

<!-- Keywords: #JSLScriptingLanguage, #TimeSeriesAnalysis, #SpectralDensity, #DataTableOperations, #JMP -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
dt under test:year << Set Values( Date MDY( 1, 1, dt under test:year << Get As Matrix ) );
dt under test:year << Format( "m/y" );
obj = Time Series( X( :year ), Y( :wolfer ), Spectral Density( 1 ) );
```

**Code Explanation**:

1. Open data table.
2. Convert year values to dates.
3. Format year column as month/year.
4. Create time series object.
5. Set X variable to year.
6. Set Y variable to Wolfer.
7. Calculate spectral density.
8. Analyze time series data.



### Example 2
> **Summary**: Creates a time series object from a data table, setting X to year and Y to Wolfer, with spectral density calculation.

<!-- Keywords: #JSLScriptingLanguage, #TimeSeriesAnalysis, #DataTableOperations, #SpectralDensity, #DateHandling -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
dt under test:year << Set Values(Date MDY(1,1,dt under test:year << Get As Matrix));
dt under test:year << Format("m/y");
obj = Time Series( X( :year ), Y( :wolfer ), Spectral Density( 1 ) );
```

**Code Explanation**:

1. Open data table;
2. Convert year values to dates.
3. Format year column as month/year.
4. Create time series object.
5. Set X variable to year.
6. Set Y variable to Wolfer.
7. Calculate spectral density.



## Time Series using Log Capture
### Example 1
> **Summary**: Time series analysis and report generation, capturing spectral density and redoing the analysis with a specific missing value code.

<!-- Keywords: #JSLScripting, #TimeSeriesAnalysis, #SpectralDensity, #ReportGeneration, #MissingValueHandling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Log Capture( obj = Time Series( X( :year ), Y( :wolfer ), Spectral Density( 1 ) ) );
:wolfer << Set Property( "Missing Value Codes", 1544 );
Log Capture( obj2 = obj << Redo Analysis );
rpt = obj2 << Report;
actN = (rpt[Number Col Box( 1 )] << Get( 3 ));
```

**Code Explanation**:

1. Open data table.
2. Create time series object.
3. Log time series analysis.
4. Set missing value code.
5. Redo time series analysis.
6. Capture analysis report.
7. Extract numerical column box.
8. Retrieve third element.
9. Assign to variable actN.



### Example 2
> **Summary**: Analyze Steel Shipments data using Linear Exponential Smoothing with Stable Invertible model, generating a log capture object for further exploration.

<!-- Keywords: #JMPScriptingLanguage, #LinearExponentialSmoothing, #StableInvertibleModel, #TimeSeriesAnalysis, #LogCapture -->

**Code**:
```jsl
dt = Open("data_table.jmp");
log1 = Log Capture( obj = dt << Time Series( Y( :Steel Shipments ), Linear Exponential Smoothing( Stable Invertible ) ) );
```

**Code Explanation**:

1. Open data table.
2. Create log capture object.
3. Launch Time Series analysis.
4. Set Y variable to Steel Shipments.
5. Apply Linear Exponential Smoothing.
6. Ensure model is Stable Invertible.



### Example 3
> **Summary**: Runs state space smoothing and model comparison for a time series data set, utilizing error types, trend types, seasonal types, and constraints.

<!-- Keywords: #JSLScriptingLanguage, #TimeSeriesAnalysis, #StateSpaceSmoothing, #ModelComparison, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Log Capture( obj = Time Series( Y( :Y ), X( :Time ), Where( :Series == "N 646" ), ) );
obj << State Space Smoothing(
	Error Type( "Multiplicative" ),
	Trend Type( "Additive" ),
	Seasonal Type( "Multiplicative" ),
	Damped( "No" ),
	Period( 12 ),
	Constrained( "Yes" )
);
obj << State Space Smoothing(
	Error Type( "Additive" ),
	Trend Type( "None" ),
	Seasonal Type( "None" ),
	Damped( "No" ),
	Constrained( "Yes" )
);
rpt = obj << report;
rpt["Model Comparison"][CheckBoxBox( 2 )] << set all( 1 );
rpt["Model Comparison"][CheckBoxBox( 2 )] << set( 1, 0 );
```

**Code Explanation**:

1. Open table.
2. Create time series object.
3. Apply state space smoothing.
4. Configure error type.
5. Set trend type.
6. Define seasonal type.
7. Disable damping.
8. Set period.
9. Enable constraints.
10. Compare models.



## Time Series using New Column
### Example 1
> **Summary**: Creates a time series plot and diagnostic report for 'Steel Shipments' data, with adjustments made to values after May.

<!-- Keywords: #JSLScriptingLanguage, #TimeSeriesAnalysis, #DataManipulation, #Plotting, #DiagnosticReport -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Steel Shipments2", numeric, formula( If( Month( :Date ) > 5, 2 * :Steel Shipments, :Steel Shipments ) ) );
obj1 = dt << Time Series( Y( :steel shipments2 ) );
rpt1 = obj1 << report;
test1 = (rpt1["Time Series Basic Diagnostics"][Table Box( 1 )] << get as matrix);
obj2 = dt << Time Series( Y( :steel shipments ), Automatic Recalc( 1 ) );
:Steel Shipments[Where( Month( :Date ) > 5 )] *= 2;
rpt2 = obj2 << report;
test2 = (rpt2["Time Series Basic Diagnostics"][Table Box( 1 )] << get as matrix);
```

**Code Explanation**:

1. Open data_table data
2. Create new column "Steel Shipments2".
3. Apply formula to new column.
4. Generate time series plot for "Steel Shipments2".
5. Extract diagnostics from first plot.
6. Generate time series plot for "Steel Shipments".
7. Double values for "Steel Shipments" after May.
8. Extract diagnostics from second plot.



### Example 2
> **Summary**: Fits a standard least squares model with multiple effects and generates a profiler plot for data analysis.

<!-- Keywords: #JSLScriptingLanguage, #TimeSeriesAnalysis, #ARIMAModel, #ModelComparisonReport, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "YearMonth", Numeric, Continuous, Formula( Date MDY( :Month, 1, :Year ) ), Format( "m/y" ) );
dt:Name( "YearMonth" ) << Set Property( "Time Frequency", {"Numeric"} );
obj = dt << Time Series( Y( :CO2 ), X( :Name( "YearMonth" ) ), ARIMA( 1, 0, 1 ) );
rpt = obj << report;
Try(
	rpt[Outline Box( "Model Comparison" )][CheckBoxBox( 2 )] << set;
	rpt[Outline Box( "Model Comparison" )][CheckBoxBox( 2 )] << set;
	rpt[Outline Box( "Model Comparison" )][CheckBoxBox( 2 )] << set;
);
```

**Code Explanation**:

1. Open data table.
2. Create YearMonth column.
3. Set YearMonth as numeric time frequency.
4. Perform ARIMA(1,0,1) time series analysis.
5. Retrieve model comparison report.
6. Attempt to set checkbox twice.



### Example 3
> **Summary**: Fits a standard least squares model with multiple effects and generating a profiler plot using JMP's Time Series analysis feature.

<!-- Keywords: #JMPScriptingLanguage, #TimeSeriesAnalysis, #SpectralDensity, #LeastSquaresModel, #ProfilerPlot -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "year2",
	numeric,
	Format( "yyyyQq", 9 ),
	formula( Informat( Char( :year ) || "Q1", "yyyyQq" ) ),
	Set Property( "Time Frequency", Time Frequency( Annual ) )
);
obj = dt << Time Series( X( :year2 ), Y( :wolfer ), Spectral Density( 1 ) );
befAA = Associative Array( Window() << get window title );
obj << Save Spectral Density( 1 );
rpt = Report( obj );
aftAA = Associative Array( Window() << get window title );
aftAA << Remove( befAA );
dt2 = Data Table( (aftlst = aftAA << get keys)[1] );
p1 = dt2:Period << get values;
f1 = dt2:Angular Frequency << get values;
f2 = dt2:Frequency << get values;
den1 = dt2:Spectral Density << get values;
kappa = (rpt[Outline Box( "White Noise test" )][Table Box( 1 )] << get as matrix)[1];
pkappa = (rpt[Outline Box( "White Noise test" )][Table Box( 1 )] << get as matrix)[2];
bartlett ks = (rpt[Outline Box( "White Noise test" )][Table Box( 1 )] << get as matrix)[3];
```

**Code Explanation**:

1. Open data table.
2. Create new column "year2".
3. Set column format and formula.
4. Define time frequency as annual.
5. Run Time Series analysis.
6. Store initial window titles.
7. Save spectral density plot.
8. Retrieve report object.
9. Store updated window titles.
10. Compare and remove unchanged titles.



## Time Series using Set Property
### Example 1
> **Summary**: Runs the processing and smoothing of a time series dataset, generating a table with smoothed columns.

<!-- Keywords: #JSL, #TimeSeriesAnalysis, #SimpleExponentialSmoothing, #DataProcessing, #TableManipulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:DATE << Set Property( "Time Frequency", {"Numeric"} );
ts = dt << Time Series( X( :DATE ), Y( :LEADPROD ), );
m1 = ts << Simple Exponential Smoothing( Zero to One );
saved dt = m1 << Save Columns;
```

**Code Explanation**:

1. Open data table.
2. Set DATE column as numeric.
3. Create time series plot.
4. Apply simple exponential smoothing.
5. Save smoothed columns to table.



### Example 2
> **Summary**: Analyze and visualize mean profit by product line and quarter from the Profit by Product dataset using Graph Builder.

<!-- Keywords: #GraphBuilder, #TimeSeriesAnalysis, #ARIMA, #JMPScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:Year << Set Property( "Time Frequency", Time Frequency( Annual ) );
Log Capture( obj = dt << Time Series( X( :Year ), Y( :Sales ), ARIMA( 1, 0, 0 ) ) );
Report( obj )[Outline Box( "Model Comparison" )][CheckBoxBox( 2 )] << Set( 1 );
Close( dt, no save );
b log1 = "Deleting columns is canceled. Column Sales is used by a report.";
```

**Code Explanation**:

1. Open data table.
2. Set Year as annual time frequency.
3. Perform ARIMA analysis on Sales.
4. Log capture of time series analysis.
5. Enable model comparison checkbox.
6. Close data table without saving.
7. Define log message for column deletion cancellation.



### Example 3
> **Summary**: Process of applying seasonal exponential smoothing to a time series dataset, extracting new window keys and retrieving prediction formulas.

<!-- Keywords: #JSLScripting, #TimeSeriesAnalysis, #SeasonalExponentialSmoothing, #DataManipulation, #PredictiveModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:DATE << Set Property( "Time Frequency", {"Numeric"} );
obj = dt << Time Series( X( :date ), Y( :Ozone Concentration ) );
befAA = Associative Array( Window() << get window title );
obj << Seasonal Exponential Smoothing( 12, Zero to One, Save Prediction Formula );
aftAA = Associative Array( Window() << get window title );
aftAA << Remove( befAA );
aftlst = aftAA << get keys;
dt2 = Data Table( aftlst[1] );
pred y formula5 = dt2:Ozone Concentration Prediction Formula << get values;
pred y5 = dt2:Predicted Ozone Concentration << get values;
```

**Code Explanation**:

1. Open data table.
2. Set date property.
3. Create time series object.
4. Capture initial window titles.
5. Apply seasonal exponential smoothing.
6. Capture updated window titles.
7. Remove unchanged titles.
8. Extract new window keys.
9. Access prediction data table.
10. Retrieve prediction formulas.



### Example 4
> **Summary**: Time series analysis and model comparison for the specified data table, setting the year's time frequency to annual and fitting an ARIMA(1, 0, 0) model.

<!-- Keywords: #TimeSeriesAnalysis, #ARIMAModeling, #ModelComparison, #JMPScriptingLanguage, #DataTableOperations -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:Year << Set Property( "Time Frequency", Time Frequency( Annual ) );
Log Capture( obj = dt << Time Series( X( :Year ), Y( :Sales ), ARIMA( 1, 0, 0 ) ) );
Report( obj )[Outline Box( "Model Comparison" )][CheckBoxBox( 2 )] << Set( 1 );
```

**Code Explanation**:

1. Open data table;
2. Set Year's time frequency to Annual.
3. Log capture Time Series analysis.
4. Fit ARIMA(1, 0, 0) model.
5. Access Model Comparison outline box.
6. Select second checkbox.
7. Set selected checkbox to 1.



## Time Series using Column
> **Summary**: Creates ARIMA(1,1,1) model predictions for a specified column in a JMP data table.

<!-- Keywords: #JMPScriptingLanguage, #TimeSeriesAnalysis, #ARIMAModeling, #Forecasting, #DataTableManipulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
yColN = "Steel Shipments";
yCol = Column( dt, "Steel Shipments" );
ts = dt << Time Series( Y( Eval( yCol ) ), Number of Forecast Periods( 1 ), Save Prediction Formula( 1 ) );
tsmodel = "ARIMA(1,1,1)";
Eval( Parse( "model1 = ts <<" || tsmodel ) );
dt2 = model1 << Save Prediction Formula( 1 );
pred2 = dt2:Steel Shipments Prediction Formula << get values;
modspec = ts << Get Model Specs;
fVals = Eval(
	Substitute(
			Expr(
				ARIMA Forecast( dtcol, length, _model, _estimates, from, to )
			),
		Expr( dtcol ), Eval( yCol ),
		Expr( length ), Parse( Char( N Row( dt ) ) ),
		Expr( from ), Parse( Char( -1 * N Row( dt ) + 1 ) ),
		Expr( to ), 0,
		Expr( _model ), Parse( tsmodel ),
		Expr( _estimates ), Arg( modspec[1], 2 )
	)
);
	
dt << New Column( "Predictions for " || yColN || " from " || tsmodel, Numeric, Continuous, Values( fVals ) );
pred1 = dt:Name( "Predictions for Steel Shipments from ARIMA(1,1,1)" ) << get values;
```

**Code Explanation**:

1. Open table.
2. Set column name.
3. Create time series object.
4. Define ARIMA model.
5. Fit ARIMA model.
6. Save prediction formula.
7. Extract prediction values.
8. Get model specifications.
9. Generate forecast values.
10. Add predictions to table.




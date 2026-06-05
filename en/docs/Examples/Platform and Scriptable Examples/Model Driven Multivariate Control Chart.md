# Model Driven Multivariate Control Chart

### Example 1
> **Summary**: Generates a Model Driven Multivariate Control Chart to monitor the process of four factors, using historical data up to row 100 and dispatching report settings for monitoring the process.

<!-- Keywords: #ModelDrivenMultivariateControlChart, #ProcessMonitoring, #JMPScriptingLanguage, #QualityControl, #Thickness -->

**Code**:
```jsl
// Model Driven Multivariate Control Chart
// Open data table
dt = Open("data_table.jmp");
// Model Driven Multivariate Control Chart
Model Driven Multivariate Control Chart(
	Process(
		:X Score 1 Formula,
		:X Score 2 Formula,
		:X Score 3 Formula,
		:X Score 4 Formula
	),
	Set Component( 4 ),
	"Historical Data End at Row"(100),
	SendToReport(
		Dispatch(
			{"Monitor the Process",
			"T¬≤ for 4 Factors"},
			"Monitor the process",
			FrameBox( 3 ),
			{Grid Line Order( 1 ),
			Reference Line Order( 2 )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create multivariate control chart.
3. Define process variables.
4. Set component count.
5. Specify historical data end row.
6. Send report settings.
7. Dispatch monitor process.
8. Set frame box.
9. Adjust grid line order.
10. Adjust reference line order.



### Example 2
> **Summary**: Generates a Model Driven Multivariate Control Chart (MDMCC PLS) to monitor and diagnose the process, featuring T¬≤ plots, Squared Prediction Error (SPE) plots, and Score plots with interactive report settings.

<!-- Keywords: #JMP, #MDMCCPLS, #MultivariateControlChart, #ProcessMonitoring, #QualityControl -->

**Code**:
```jsl
// MDMCC PLS
// Open data table
dt = Open("data_table.jmp");
// MDMCC PLS
Model Driven Multivariate Control Chart(
	Process(
		:X Score 1 Formula,
		:X Score 2 Formula,
		:X Score 3 Formula,
		:X Score 4 Formula,
		:X Score 5 Formula,
		:X Score 6 Formula
	),
	Set Component( 6 ),
	"Historical Data End at Row"(860),
	Set Œ± Level( 0.05 / 860 ),
	T¬≤ Plot(
		Contribution Proportion Heat Map(
			1
		)
	),
	Squared Prediction Error Plot(
		Contribution Proportion Heat Map(
			1
		)
	),
	Score Plot(
		Score Ellipse Coverage(
			1 - 0.05 / 860
		)
	),
	Automatic Recalc( 1 ),
	SendToReport(
		Dispatch(
			{"Monitor the Process",
			"T¬≤ for 6 Factors"},
			"T¬≤ Limit Summaries",
			OutlineBox,
			{Close( 1 )}
		),
		Dispatch(
			{"Monitor the Process",
			"Squared Prediction Error (SPE) Plot with 6 Factors"
			}, "SPE Limit Summaries",
			OutlineBox,
			{Close( 1 )}
		),
		Dispatch(
			{"Monitor the Process",
			"Score Plot"},
			"Monitor the process",
			FrameBox,
			{Frame Size( 317, 120 ),
			Grid Line Order( 1 ),
			Reference Line Order( 2 )}
		),
		Dispatch(
			{"Diagnose the Process",
			"T¬≤ Contribution Proportion Heat Map"
			}, "1", ScaleBox,
			{
			Label Row(
				Label Orientation(
					"Angled"
				)
			)}
		),
		Dispatch(
			{"Diagnose the Process",
			"T¬≤ Contribution Proportion Heat Map"
			}, "PCA Outlier Analysis",
			FrameBox,
			{Frame Size( 585, 234 )}
		),
		Dispatch(
			{"Diagnose the Process",
			"SPE Contribution Proportion Heat Map"
			}, "1", ScaleBox,
			{
			Label Row(
				Label Orientation(
					"Angled"
				)
			)}
		),
		Dispatch(
			{"Diagnose the Process",
			"SPE Contribution Proportion Heat Map"
			}, "PCA Outlier Analysis",
			FrameBox,
			{Frame Size( 585, 234 )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create MDMCC PLS model.
3. Define process variables.
4. Set number of components.
5. Specify historical data end.
6. Set alpha level.
7. Generate T¬≤ plot.
8. Generate SPE plot.
9. Generate score plot.
10. Configure report settings.



### Example 3
> **Summary**: Generates a Model Driven Multivariate Control Chart (MDMCC) for process monitoring and diagnosis, utilizing historical data to identify anomalies and predict future performance.

<!-- Keywords: #JMPScriptingLanguage, #MultivariateAnalysis, #ProcessMonitoring, #ControlCharts, #DataVisualization -->

**Code**:
```jsl
// MDMCC PLS Diagnosis 2
// Open data table
dt = Open("data_table.jmp");
// MDMCC PLS Diagnosis 2
Model Driven Multivariate Control Chart(
	Process(
		:X Score 1 Formula,
		:X Score 2 Formula,
		:X Score 3 Formula,
		:X Score 4 Formula,
		:X Score 5 Formula,
		:X Score 6 Formula
	),
	Set Component( 6 ),
	Set Œ± Level( 0.00006 ),
	"Historical Data End at Row"(860),
	Squared Prediction Error Plot,
	Score Plot(
		Select component( 5, 6 ),
		Score Ellipse Coverage(
			1 - 0.05 / 860
		),
		Normalized Score Plot for Selected Samples(
			{1769},
			Sort Bars( 1 )
		)
	),
	Automatic Recalc( 1 ),
	SendToReport(
		Dispatch(
			{"Monitor the Process",
			"T¬≤ for 6 Factors"}, "2",
			ScaleBox,
			{Min( -35.0876838076797 ),
			Max( 707.713075685992 ),
			Inc( 100 ), Minor Ticks( 4 )}
		),
		Dispatch(
			{"Monitor the Process",
			"T¬≤ for 6 Factors"},
			"T¬≤ Limit Summaries",
			OutlineBox,
			{Close( 1 )}
		),
		Dispatch(
			{"Monitor the Process",
			"Squared Prediction Error (SPE) Plot with 6 Factors"
			}, "2", ScaleBox,
			{Min( -59.9465240641712 ),
			Max( 1954.05347593583 ),
			Inc( 500 ), Minor Ticks( 4 )}
		),
		Dispatch(
			{"Monitor the Process",
			"Squared Prediction Error (SPE) Plot with 6 Factors"
			}, "SPE Limit Summaries",
			OutlineBox,
			{Close( 1 )}
		),
		Dispatch(
			{"Monitor the Process",
			"Score Plot"},
			"Monitor the process",
			FrameBox,
			{Reference Line Order( 2 ),
			Grid Line Order( 1 )}
		),
		Dispatch(
			{"Diagnose the Process",
			"Normalized Score Plot for Selected Samples"
			}, "MDMCC Plot Options",
			FrameBox,
			{Frame Size( 530, 225 ),
			Reference Line Order( 2 ),
			Grid Line Order( 1 )}
		),
		Dispatch(
			{"Diagnose the Process",
			"Normalized Score Plot for Selected Samples"
			}, "MDMCC Plot Options",
			FrameBox,
			{Frame Size( 530, 335 ),
			Reference Line Order( 2 ),
			Grid Line Order( 1 )}
		)
	)
);
```

**Code Explanation**:

1. Open table.
2. Create MDMCC PLS model.
3. Define process variables.
4. Set components to 6.
5. Set alpha level to 0.00006.
6. Specify historical data end.
7. Generate squared prediction error plot.
8. Create score plot.
9. Select specific components.
10. Configure report settings.



### Example 4
> **Summary**: Opens a data table, defines process variables for MDMCC analysis, sets the time ID as 'Flight date', and enables statistical prediction error plot and normalized DModX plot.

<!-- Keywords: #JMPScriptingLanguage, #MultivariateControlChart, #StatisticalPredictionErrorPlot, #NormalizedDModXPlot, #DataAnalysis -->

**Code**:
```jsl
// MDMCC with entire data
// Open data table
dt = Open("data_table.jmp");
// MDMCC with entire data
Model Driven Multivariate Control Chart(
	Process(
		:AA, :CO, :DL, :F9, :FL, :NW, :UA,
		:US, :WN
	),
	Time ID( :Flight date ),
	Statistical Prediction Error Plot,
	Normalized DModX Plot
);
```

**Code Explanation**:

1. Open table.
2. Define process variables.
3. Set time ID.
4. Create MDMCC.
5. Enable statistical prediction error plot.
6. Enable normalized DModX plot.



### Example 5
> **Summary**: Opens a data table, creates a Model Driven Multivariate Control Chart with historical data, and includes various plots to visualize the process variables.

<!-- Keywords: #JMPScriptingLanguage, #ModelDrivenMultivariateControlChart, #MultivariateAnalysis, #ProcessVariables, #DataVisualization -->

**Code**:
```jsl
// PCA score with historical
// Open data table
dt = Open("data_table.jmp");
// PCA score with historical
Model Driven Multivariate Control Chart(
	Process( :Prin1, :Prin2, :Prin3 ),
	Historical Data End at Row( 16 ),
	T2 Plot,
	Statistical Prediction Error Plot,
	Normalized DModX Plot
);
```

**Code Explanation**:

1. Open table.
2. Define data table variable.
3. Create PCA score chart.
4. Specify process variables.
5. Set historical data end.
6. Include T2 plot.
7. Include prediction error plot.
8. Include normalized DModX plot.



### Example 6
> **Summary**: Opens a data table, creates a Model Driven Multivariate Control Chart with specified process variables and historical data end, and adds a score plot with 95% score ellipse coverage.

<!-- Keywords: #MultivariateControlChart, #JMPScriptingLanguage, #DataAnalysis, #ProcessVariables, #ScorePlot -->

**Code**:
```jsl
// Original data with historical
// Open data table
dt = Open("data_table.jmp");
// Original data with historical
Model Driven Multivariate Control Chart(
	Process(
		:AA, :CO, :DL, :F9, :FL, :NW, :UA,
		:US, :WN
	),
	Time ID( :Flight date ),
	Historical Data End at Row( 16 ),
	Score Plot(
		Score Ellipse Coverage( 0.95 )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create Model Driven Multivariate Control Chart.
3. Specify process variables.
4. Set time ID variable.
5. Define historical data end.
6. Add score plot.
7. Set score ellipse coverage.



### Example 7
> **Summary**: Creates a multivariate control chart with T Square plot, contribution heat maps, and local data filtering for monitoring process quality.

<!-- Keywords: #MultivariateControlChart, #TSquarePlot, #ContributionHeatMap, #LocalDataFiltering, #JMPScriptingLanguage -->

**Code**:
```jsl
Open("data_table.jmp");
Model Driven Multivariate Control Chart(
	Process( :Subject, :Measurement ),
	Set Component( 2 ),
	T Square Plot(
		Contribution Heat Map( 1 ),
		Contribution Proportion Heat Map( 1 ),
		Contribution Plot for Selected Samples( {12} ),
		Contribution Proportion Plot for Selected Samples( {12} )
	),
	Local Data Filter( Add Filter( columns( :Subject ) ) ),
	SendToReport(
		Dispatch( {"Monitor the Process", "T¬≤ for 2 Principal Components"}, "Monitor the process", FrameBox,
			{Reference Line Order( 2 ), Grid Line Order( 1 ), Add Pin Annotation(
				Seg( Marker Seg( 1 ) ),
				Index( 1 ),
				Index Row( 1 ),
				UniqueID( 1 ),
				FoundPt( {316, 141} ),
				Origin( {2.03915492957746, 5.13635598139757} ),
				RightOfCenter( 0 ),
				Tag Line( 1 )
			)}
		)
	)
);
Model Driven Multivariate Control Chart(
	Process( :Subject, :Measurement ),
	Set Component( 2 ),
	T Square Plot(
		Contribution Heat Map( 1 ),
		Contribution Proportion Heat Map( 1 ),
		Contribution Plot for Selected Samples( {12} ),
		Contribution Proportion Plot for Selected Samples( {12} )
	),
	Local Data Filter(
		Add Filter( columns( :Subject, :Drug Type ), Where( :Drug Type == {"a", "b", "c"} ), Display( :Subject, N Items( 12 ) ) )
	),
	SendToReport(
		Dispatch( {"Monitor the Process", "T¬≤ for 2 Principal Components"}, "Monitor the process", FrameBox,
			{Reference Line Order( 2 ), Grid Line Order( 1 ), Add Pin Annotation(
				Seg( Marker Seg( 1 ) ),
				Index( 1 ),
				Index Row( 1 ),
				UniqueID( 1 ),
				FoundPt( {316, 141} ),
				Origin( {2.03915492957746, 5.13635598139757} ),
				RightOfCenter( 0 ),
				Tag Line( 1 )
			)}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create multivariate control chart.
3. Set process variables.
4. Select second component.
5. Configure T Square plot.
6. Add contribution heat map.
7. Add contribution proportion heat map.
8. Highlight selected samples.
9. Add local data filter.
10. Customize report with annotations.



### Example 8
> **Summary**: Creates a Model Driven Multivariate Control Chart, configuring T¬≤ and Score plots with specific settings for process monitoring.

<!-- Keywords: #ModelDrivenMultivariateControlChart, #T2Plot, #ScorePlot, #ProcessMonitoring, #JMPScriptingLanguage -->

**Code**:
```jsl
Open("data_table.jmp");
Model Driven Multivariate Control Chart(
	Process( :Process 1, :Process 2, :Process 3, :Process 4, :Process 5, :Process 6, :Process 7 ),
	Set Component( 6 ),
	T¬≤ Plot( Show Limit Summaries( 0 ) ),
	Score Plot( Score Ellipse Coverage( 0.99 ) ),
	SendToReport(
		Dispatch( {"Monitor the Process", "T¬≤ for 6 Principal Components"}, "Monitor the process", FrameBox,
			{Grid Line Order( 1 ), Reference Line Order( 2 ), Add Pin Annotation(
				Seg( Marker Seg( 1 ) ),
				Index( 25 ),
				Index Row( 25 ),
				UniqueID( 643993561 ),
				FoundPt( {192, 134} ),
				Origin( {26.056338028169, 22.34375} ),
				Offset( {101, 68} ),
				Tag Line( 1 )
			)}
		),
		Dispatch( {"Monitor the Process", "Score Plot"}, "Monitor the process", FrameBox,
			{Grid Line Order( 1 ), Reference Line Order( 2 ), Add Pin Annotation(
				Seg( Marker Seg( 1 ) ),
				Index( 25 ),
				Index Row( 25 ),
				UniqueID( 648835641 ),
				FoundPt( {301, 260} ),
				Origin( {1.76744186046512, 3.61946902654867} ),
				Offset( {70, 155} ),
				Tag Line( 1 )
			)}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Initiate Model Driven Multivariate Control Chart.
3. Define processes for analysis.
4. Set number of components.
5. Configure T¬≤ plot without limit summaries.
6. Configure Score plot with 99% ellipse coverage.
7. Send report to interface.
8. Dispatch T¬≤ plot settings.
9. Add pin annotation to T¬≤ plot.
10. Dispatch Score plot settings.
11. Add pin annotation to Score plot.



### Example 9
> **Summary**: Creates a Model Driven Multivariate Control Chart (MDMCC) for monitoring and diagnosing process quality, with specific focus on component 2 and sample 119.

<!-- Keywords: #JMPScriptingLanguage, #ModelDrivenMultivariateControlChart, #ProcessMonitoring, #QualityControl, #MultivariateAnalysis -->

**Code**:
```jsl
Open("data_table.jmp");
Model Driven Multivariate Control Chart(
	Process( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Set Component( 2 ),
	T¬≤ Plot( Contribution Proportion Plot for Selected Samples( {119} ) ),
	Show Excluded Rows( 0 ),
	SendToReport(
		Dispatch( {"Monitor the Process", "T¬≤ for 2 Principal Components"}, "Monitor the process", FrameBox,
			{Reference Line Order( 2 ), Grid Line Order( 1 )}
		),
		Dispatch( {"Diagnose the Process", "T¬≤ Contribution Proportion Plot for Selected Samples"}, "MDMCC Plot Options", FrameBox,
			{Reference Line Order( 2 ), Grid Line Order( 1 )}
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create MDMVCC process.
3. Set component to 2.
4. Generate T¬≤ plot.
5. Highlight sample 119.
6. Hide excluded rows.
7. Adjust T¬≤ plot reference lines.
8. Adjust T¬≤ contribution plot reference lines.



### Example 10
> **Summary**: Creates a multivariate control chart with change point detection and generates a report, extracting the detected change point text.

<!-- Keywords: #MultivariateControlChart, #ChangePointDetection, #JMPScriptingLanguage, #DataAnalysis, #QualityControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Model Driven Multivariate Control Chart( Process( :Fuel, :Steam Flow, :Steam Temp, :MW, :Cool Temp, :Pressure ) );
obj << Change Point Detection( 1 );
rpt = Report( obj );
ChangePointAct = rpt["Change Point Detection", Text Box( 3 )] << Get Text;
ChangePointExp = "The change point appears at row 6.";
```

**Code Explanation**:

1. Open data table.
2. Create multivariate control chart.
3. Enable change point detection.
4. Generate report object.
5. Extract change point text.
6. Define expected change point.



### Example 11
> **Summary**: Creates a Model Driven Multivariate Control Chart to monitor and analyze process variables, with interactive plots for T square, Normalized DModX, and Squared Prediction Error.

<!-- Keywords: #JMPScriptingLanguage, #MultivariateAnalysis, #ControlCharts, #ProcessMonitoring, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Model Driven Multivariate Control Chart(
	Process( :AA, :CO, :DL, :F9, :FL, :NW, :UA, :US, :WN ),
	Set Component( 4 ),
	T square Plot( "Save out of control points" ),
	Normalized DModX Plot( "Save out of control points" ),
	Squared Prediction Error Plot( "Save out of control points" ), 
);
OOCT2 = dt[0, 14];
locOOCT2_Act = Loc( OOCT2, "Outlier" );
locOOCT2_Exp = [13, 14, 15, 24, 25];
OOCDModX = dt[0, 15];
locOOCDModX_Act = Loc( OOCDModX, "Outlier" );
locOOCDModX_Exp = [];
OOCSPE = dt[0, 16];
locOOCSPE_Act = Loc( OOCSPE, "Outlier" );
locOOCSPE_Exp = [12];
```

**Code Explanation**:

1. Open data table.
2. Run Model Driven Multivariate Control Chart.
3. Set process variables.
4. Configure T square plot.
5. Enable saving out-of-control points.
6. Configure Normalized DModX plot.
7. Enable saving out-of-control points.
8. Configure Squared Prediction Error plot.
9. Enable saving out-of-control points.
10. Retrieve and compare outlier locations.



### Example 12
> **Summary**: Creates a model-driven multivariate control chart using row-wise estimation method and generates a scatterplot matrix with density ellipses color coded.

<!-- Keywords: #MultivariateControlChart, #ModelDriven, #RowWiseEstimation, #ScatterPlotMatrix, #DensityEllipses -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Model Driven Multivariate Control Chart( Process( :Y, :X1 ) );
```

**Code Explanation**:

1. Open data table.
2. Create model-driven multivariate control chart.



### Example 13
> **Summary**: Creates a multivariate control chart using row-wise estimation and generates a scatterplot matrix with density ellipses color coded, leveraging JMP's Model Driven Multivariate Control Chart feature.

<!-- Keywords: #JMP, #MultivariateAnalysis, #ControlChart, #ScatterplotMatrix, #RowWiseEstimation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Model Driven Multivariate Control Chart( Process( :Sepal length, :Sepal length ) );
```

**Code Explanation**:

1. Open data table;
2. Create MDMCC object.
3. Set process variables.
4. Execute control chart.



### Example 14
> **Summary**: Creates a model-driven multivariate control chart using row-wise estimation method and generates a scatterplot matrix with density ellipses color coded.

<!-- Keywords: #MultivariateControlChart, #ModelDriven, #RowWiseEstimation, #ScatterPlotMatrix, #DensityEllipses -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Model Driven Multivariate Control Chart( Process( :Y, :X1, :X2 ) );
```

**Code Explanation**:

1. Open table.
2. Create model-driven multivariate control chart.



### Example 15
> **Summary**: Creates a multivariate control chart using row-wise estimation and generates a T Square plot with saved values.

<!-- Keywords: #MultivariateControlChart, #TSquarePlot, #LogCapture, #LocalDataFilter, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Model Driven Multivariate Control Chart( Process( :Subject, :Measurement ), "Historical data ends at row"(5) );
myLog = Log Capture( ldf = obj << Local Data Filter( Add Filter( columns( :Subject ), Where( :Subject >= 4.781 & :Subject <= 6.637 ) ) ) );
obj << T Square Plot( Save Values );
```

**Code Explanation**:

1. Open data table;
2. Create MDMCC object.
3. Set process variables.
4. Define historical data end.
5. Capture log output.
6. Add local data filter.
7. Filter by subject range.
8. Generate T Square plot.
9. Save plot values.



### Example 16
> **Summary**: Creates a multivariate control chart with T¬≤ plot, contribution heat map, and contribution proportion heat map using the Model Driven Multivariate Control Chart platform in JMP.

<!-- Keywords: #JMP, #MultivariateControlChart, #T2Plot, #ContributionHeatMap, #ModelDriven -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Model Driven Multivariate Control Chart(
	Process( :Run, :AF, :EGR, :SA ),
	Set Component( 3 ),
	T¬≤ Plot( Contribution Heat Map( 1 ), Contribution Proportion Heat Map( 1 ) )
);
obj2 = obj << Redo Analysis;
rpt = obj2 << report;
```

**Code Explanation**:

1. Open data table.
2. Create multivariate control chart.
3. Define process variables.
4. Set component count.
5. Add T¬≤ plot.
6. Include contribution heat map.
7. Include contribution proportion heat map.
8. Redo analysis.
9. Generate report.



### Example 17
> **Summary**: Creates a Model Driven Multivariate Control Chart with Normalized DModX Plot and report generation, using historical data up to row 10.

<!-- Keywords: #JMPScriptingLanguage, #MultivariateAnalysis, #ControlCharts, #DataVisualization, #ProcessMonitoring -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Model Driven Multivariate Control Chart(
	Process( :Run, :AF, :EGR, :SA ),
	"Historical data ends at row"(10),
	Normalized DModX Plot( Save Values )
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create Model Driven Multivariate Control Chart.
3. Set process variables: Run, AF, EGR, SA.
4. Define historical data end at row 10.
5. Enable Normalized DModX Plot and save values.
6. Generate report from the control chart.



### Example 18
> **Summary**: Creates a Model Driven Multivariate Control Chart with local data filtering and score plotting, using a specific subject range.

<!-- Keywords: #ModelDrivenMultivariateControlChart, #LocalDataFiltering, #ScorePlotting, #JMPScriptingLanguage, #QualityControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Model Driven Multivariate Control Chart(
	Process( :Subject, :Measurement ),
	Set Component( 2 ),
	Score Plot,
	Show Excluded Rows( 0 ),
	Local Data Filter( Add Filter( columns( :Subject ), Where( :Subject >= 2 & :Subject <= 2.5 ) ) )
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create Model Driven Multivariate Control Chart.
3. Set process variables.
4. Define 2 components.
5. Enable score plot.
6. Hide excluded rows.
7. Add local data filter.
8. Filter subjects 2 to 2.5.
9. Generate report object.
10. Assign report to variable.



## Model Driven Multivariate Control Chart using Log Capture
### Example 1
> **Summary**: Creates a Model Driven Multivariate Control Chart (MDMCC) analysis for data table 'data_table.jmp', filtering by group 'X3 == 

<!-- Keywords: None -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Log Capture(
	obj = dt << Model Driven Multivariate Control Chart( SendToByGroup( {:X3 == "A"} ), Process( :Y ), X( :X1 ), By( :X3 ), Score Plot )
);
```

**Code Explanation**:

1. Open data table.
2. Assign table to variable `dt`.
3. Start log capture.
4. Create object `obj` with MDMCC analysis.
5. Filter by group `X3 == "A"`.
6. Set process variable to `Y`.
7. Add predictor variable `X1`.
8. Group by `X3`.
9. Include score plot.
10. End log capture.



### Example 2
> **Summary**: Creates a Model Driven Multivariate Control Chart with Normalized DModX Plot, including Contribution Heat Map, Contribution Proportion Heat Map, and plots for selected samples.

<!-- Keywords: #JMPScriptingLanguage, #ModelDrivenMultivariateControlChart, #NormalizedDModXPlot, #ContributionAnalysis, #MultivariateControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Log Capture(
	obj = dt << Model Driven Multivariate Control Chart(
		Process( :Group Means, :Relative Sizes, :Grand Mean, :Contributions to Delta Squared ),
		Time ID( :Delta ),
		Normalized DModX Plot(
			Contribution Heat Map( 1 ),
			Contribution Proportion Heat Map( 1 ),
			Contribution Plot for Selected Samples( {1, 2, 3}, Show Legend( 0 ) ),
			Contribution Proportion Plot for Selected Samples( {1, 2, 3}, Show Legend( 0 ) ),
			Mean Contribution Proportion Plot for Selected Samples( {1, 2, 3}, Show Legend( 0 ) )
		)
	)
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Create Model Driven Multivariate Control Chart.
3. Set process variables: Group Means, Relative Sizes, Grand Mean, Contributions to Delta Squared.
4. Use Delta as Time ID.
5. Generate Normalized DModX Plot.
6. Include Contribution Heat Map.
7. Include Contribution Proportion Heat Map.
8. Plot Contribution for samples 1, 2, 3 without legend.
9. Plot Contribution Proportion for samples 1, 2, 3 without legend.
10. Plot Mean Contribution Proportion for samples 1, 2, 3 without legend.



## Model Driven Multivariate Control Chart using Principal Components
> **Summary**: Performs a life distribution analysis using principal components and model-driven multivariate control charts to analyze appliance reliability data.

<!-- Keywords: #JMPScriptingLanguage, #PrincipalComponentsAnalysis, #ModelDrivenMultivariateControlChart, #ReliabilityEngineering, #WeibullDistribution -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Principal Components(
	Y( :Al, :Mn, :Na, :Br, :Ce, :Co, :Cr, :Cs, :Eu, :Fe, :Hf, :La, :Sc, :Sm, :U ),
	Estimation Method( "Row-wise" ),
	"on Correlations",
	Save DModX( 15 ),
	Save Principal Components( 15 )
);
obj2 = Model Driven Multivariate Control Chart(
	Process( :Prin1, :Prin2, :Prin3, :Prin4, :Prin5, :Prin6, :Prin7, :Prin8, :Prin9, :Prin10, :Prin11, :Prin12, :Prin13, :Prin14, :Prin15 ),
	Normalized DModX Plot( Save DModx ), 
);
dt << delete columns( DModX );
```

**Code Explanation**:

1. Open data table;
2. Perform principal components analysis.
3. Specify variables for analysis.
4. Use row-wise estimation method.
5. Analyze correlations.
6. Save DModX values.
7. Save principal components.
8. Create model-driven multivariate control chart.
9. Define process variables.
10. Include normalized DModX plot.
11. Delete DModX column from table.



## Model Driven Multivariate Control Chart using Partial Least Squares
> **Summary**: Performs a Partial Least Squares analysis and Model Driven Multivariate Control Chart configuration to analyze the relationship between 'Fixes' and 'Day', with validation using KFold and initial number of factors set to 1, followed by generation of a score plot for selected samples.

<!-- Keywords: #PartialLeastSquares, #ModelDrivenMultivariateControlChart, #KFoldValidation, #ScorePlot, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Partial Least Squares(
	Y( :Fixes ),
	X( :Day ),
	Validation Method( KFold( 7 ), Initial Number of Factors( 1 ) ),
	Fit( Method( NIPALS ), Number of Factors( 1 ), Save Score Formula )
);
obj2 = dt << Model Driven Multivariate Control Chart(
	Process( :X Score 1 Formula, :Y Score 1 Formula ),
	Set Component( 2 ),
	Score Plot( Normalized Score Plot for Selected Samples( {33, 38}, Show Legend( 0 ) ) )
);
rpt = obj2 << report;
```

**Code Explanation**:

1. Open data table.
2. Run Partial Least Squares analysis.
3. Specify response variable.
4. Specify predictor variable.
5. Set validation method.
6. Choose fitting method.
7. Save score formula.
8. Create Model Driven Multivariate Control Chart.
9. Define process variables.
10. Set component number.
11. Generate score plot.
12. Extract report.




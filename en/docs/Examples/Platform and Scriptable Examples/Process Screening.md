# Process Screening

### Example 1
> **Summary**: Screens and analyzes price data by series, using process screening to identify trends and patterns in the data.

<!-- Keywords: #ProcessScreening, #DataAnalysis, #JMPScriptingLanguage, #StatisticalModeling, #BusinessIntelligence -->

**Code**:
```jsl
// Process Screening of Price by Series
// Open data table
dt = Open("data_table.jmp");
// Process Screening of Price by Series
Process Screening(
	Y( :Price ),
	Grouping( :Series ),
	Time( :Date ),
	Subgroup Sample Size( 3 ),
	Recent Shift Up( 1 ),
	Recent Shift Down( 1 ),
	Shift Graph( 1 )
);
```

**Code Explanation**:

1. Open data table.
2. Perform process screening.
3. Set response variable.
4. Define grouping variable.
5. Specify time variable.
6. Set subgroup sample size.
7. Enable recent shift up.
8. Enable recent shift down.
9. Display shift graph.



### Example 2
> **Summary**: Visualizes process screening data by applying the Process Screening platform in JMP to identify patterns and relationships among various variables.

<!-- Keywords: #ProcessScreening, #JMPScriptingLanguage, #DataVisualization, #PatternRecognition, #RelationshipAnalysis -->

**Code**:
```jsl
// Process Screening
// Open data table
dt = Open("data_table.jmp");
// Process Screening
Process Screening(
	Y(
		:NPN1, :PNP1, :PNP2, :NPN2, :PNP3,
		:IVP1, :PNP4, :NPN3, :IVP2, :NPN4,
		:SIT1, :INM1, :INM2, :VPM3, :SPM1,
		:NPN5, :EP2, :ZD6, :PBA, :PLG,
		:CAP, :PBA3, :PLG2, :PNP5, :NPN6,
		:PNP7, :NPN7, :PNP8, :IVP3, :IVP4,
		:IVP5, :IVP6, :PNP9, :NPN8, :NPN9,
		:IVP7, :NPN10, :N_1, :PBA1, :WPR1,
		:B10, :PLY10, :VBE210, :VTN210,
		:VTP210, :SIT2, :SIT3, :INV2,
		:INV3, :INV4, :INV5, :FST1, :FST2,
		:RES1, :RES2, :PNM1, :PPM1, :FNM1,
		:FPM1, :FST3, :FST4, :RES3, :RES4,
		:A1, :B1, :A2N, :A2P, :A2P1,
		:IVP8, :IVP9, :DE_H1, :NF_H1,
		:ESM1, :ESM2, :ESP1, :YFU1, :PBA3,
		:PBB1, :LYA1, :LYB1, :DEM1, :DEP1,
		:NFM1, :PLY1, :VDP1, :VDP2, :SNW1,
		:RSP2, :PLY2, :RSP1, :VDP3, :PBL1,
		:PLG1, :VDP4, :SPW1, :VIA1, :INM3,
		:VPM5, :INM4, :VPM7, :M1_M1,
		:M2_M2, :P1_P1, :E2A1, :E2B1,
		:NPN11, :IVP10, :PNP10, :INM5,
		:VPM8, :INM6, :VPM10, :N2A1,
		:N2B1, :NM_L1, :P2A1, :P2B1,
		:PM_L1
	)
);
```

**Code Explanation**:

1. Open table.
2. Run Process Screening.
3. Set response variables.



### Example 3
> **Summary**: Performs process screening for quality control by filtering data based on machine and phase, and generating an XBar and R chart.

<!-- Keywords: #ProcessScreening, #XBarAndRChart, #QualityControl, #DataFiltering, #JMPScripting -->

**Code**:
```jsl
Open("data_table.jmp");
Process Screening(
	Process Variables( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Control Chart Type( "XBar and R" ),
	Where( :MACHINE == "A386" )
);
```

**Code Explanation**:

1. Open data table.
2. Initiate Process Screening.
3. Select DIAMETER as process variable.
4. Group by MACHINE and Phase.
5. Choose XBar and R chart type.
6. Filter for MACHINE "A386".



### Example 4
> **Summary**: Performs process screening analysis by selecting process variables, sorting table by column 16, and filtering lowercase 'b' using Process Screening in JMP.

<!-- Keywords: #JMP, #ProcessScreening, #DataFiltering, #Sorting, #NominalLogisticRegression -->

**Code**:
```jsl
Open("data_table.jmp");
Process Screening(
	Process Variables( Eval( 5 :: 132 ) ),
	SendToReport( Dispatch( {}, "", TableBox, {Sort By Column( 16 ), Filter Where( Contains( Lowercase( Column ), Lowercase( "B" ) ) )} ) )
);
```

**Code Explanation**:

1. Open data table;
2. Initiate Process Screening analysis.
3. Select process variables 5 to 132.
4. Send report to display box.
5. Sort table by column 16.
6. Apply filter to lowercase "b".



### Example 5
> **Summary**: Performs process screening for multiple Y variables, enabling the analysis of complex relationships between variables and identifying potential issues in a data table.

<!-- Keywords: #ProcessScreening, #JMPScriptingLanguage, #DataAnalysis, #YVariables, #NominalLogisticRegression -->

**Code**:
```jsl
Open("data_table.jmp");
Process Screening(
	Y(
		:NPN1, :PNP1, :PNP2, :NPN2, :PNP3, :IVP1, :PNP4, :NPN3, :IVP2, :NPN4, :SIT1, :INM1, :INM2, :VPM3, :SPM1, :NPN5, :EP2, :ZD6, :PBA,
		:PLG, :CAP, :PBA3, :PLG2, :PNP5, :NPN6, :PNP7, :NPN7, :PNP8, :IVP3, :IVP4, :IVP5, :IVP6, :PNP9, :NPN8, :NPN9, :IVP7, :NPN10, :N_1,
		:PBA1, :WPR1, :B10, :PLY10, :VBE210, :VTN210, :VTP210, :SIT2, :SIT3, :INV2, :INV3, :INV4, :INV5, :FST1, :FST2, :RES1, :RES2, :PNM1,
		:PPM1, :FNM1, :FPM1, :FST3, :FST4, :RES3, :RES4, :A1, :B1, :A2N, :A2P, :A2P1, :IVP8, :IVP9, :DE_H1, :NF_H1, :ESM1, :ESM2, :ESP1,
		:YFU1, :PBA3, :PBB1, :LYA1, :LYB1, :DEM1, :DEP1, :NFM1, :PLY1, :VDP1, :VDP2, :SNW1, :RSP2, :PLY2, :RSP1, :VDP3, :PBL1, :PLG1, :VDP4,
		:SPW1, :VIA1, :INM3, :VPM5, :INM4, :VPM7, :M1_M1, :M2_M2, :P1_P1, :E2A1, :E2B1, :NPN11, :IVP10, :PNP10, :INM5, :VPM8, :INM6, :VPM10,
		:N2A1, :N2B1, :NM_L1, :P2A1, :P2B1, :PM_L1
	),
	Control Chart Type( "Indiv and MR" ),
	Summary( 0 ),
	Process Performance Graph( 1 ),
	SendToReport(
		Dispatch( {"Process Performance Graph"}, "ProcessScreening Graph", FrameBox,
			{Add Pin Annotation(
				Seg( Marker Seg( 1 ) ),
				Index( 64 ),
				Index Row( 64 ),
				UniqueID( 835408128 ),
				FoundPt( {326, 347} ),
				Origin( {1.05833333333333, 0.176388888888889} ),
				Offset( {65, 34} ),
				Tag Line( 1 )
			), Add Pin Annotation(
				Seg( Marker Seg( 1 ) ),
				Index( 62 ),
				Index Row( 62 ),
				UniqueID( 835408126 ),
				FoundPt( {303, 242} ),
				Origin( {0.9625, 1.78055555555556} ),
				Offset( {-291, -107} ),
				Tag Line( 1 )
			)}
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Launch Process Screening platform.
3. Set multiple Y variables.
4. Choose Indiv and MR control chart type.
5. Disable summary report.
6. Enable process performance graph.
7. Add pin annotation to graph.
8. Specify segment and index for first annotation.
9. Define found point and origin for first annotation.
10. Set offset and tag line for first annotation.



### Example 6
> **Summary**: Performs process screening to monitor and control quality using a control chart with individual and moving range methods, grouping by series, and displaying charts as selected.

<!-- Keywords: #ProcessScreening, #ControlChart, #QualityControl, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
Open("data_table.jmp");
Process Screening(
	Process Variables( :Price ),
	Grouping( :Series ),
	Control Chart Type( "Indiv and MR" ),
	Time( :Date ),
	Subgroup Sample Size( 3 ),
	Show Charts as Selected( 1 ),
	RowStates( [5 1] )
);
```

**Code Explanation**:

1. Open data_table data
2. Launch Process Screening platform.
3. Set Price as process variable.
4. Use Series for grouping.
5. Choose Indiv and MR control chart.
6. Specify Date as time variable.
7. Set subgroup sample size to 3.
8. Display charts as selected.
9. Apply row states [5 1].



### Example 7
> **Summary**: Performs process screening to monitor and analyze the price of crops over time, grouping by series and displaying individual and moving range charts with shift graphs.

<!-- Keywords: #ProcessScreening, #JMPScriptingLanguage, #TimeSeriesAnalysis, #QualityControl, #StatisticalProcessControl -->

**Code**:
```jsl
Open("data_table.jmp");
  
Process Screening(
	Process Variables( :Price ),
	Grouping( :Series ),
	Control Chart Type( "Indiv and MR" ),
	Time( :Date ),
	Subgroup Sample Size( 3 ),
	Summary( 0 ),
	Show Tests( 0 ),
	Shift Graph( 1 )
);
```

**Code Explanation**:

1. Open data table;
2. Run Process Screening.
3. Select Price as process variable.
4. Group by Series.
5. Use Indiv and MR chart type.
6. Set Date as time variable.
7. Define subgroup size as 3.
8. Disable summary statistics.
9. Hide test results.
10. Enable shift graph display.



### Example 8
> **Summary**: Performs process screening analysis to identify patterns in diameter measurements across machines and phases, utilizing XBar and R control charts with row states for reporting.

<!-- Keywords: #ProcessScreening, #XBarRControlChart, #RowStates, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
Open("data_table.jmp");
Process Screening(
	Process Variables( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Control Chart Type( "XBar and R" ),
	RowStates( [0 1, 1 768] )
);
```

**Code Explanation**:

1. Open data table;
2. Run Process Screening analysis.
3. Specify DIAMETER as process variable.
4. Group by MACHINE and Phase.
5. Choose XBar and R control chart.
6. Set row states for report.



### Example 9
> **Summary**: Performs process screening analysis to identify key processes and extract relevant data, utilizing the Process Screening platform in JMP.

<!-- Keywords: #ProcessScreening, #JMPScriptingLanguage, #DataAnalysis, #Automation, #Reporting -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
ProScObj = dt2 << Process Screening( Y( Column Group( "Processes" ) ) );
newtable2 = Report( ProScObj )[Outline Box( "Process Screening" )][Table Box( 1 )] << Make Into Data Table;
Report( ProScObj ) << Close Window;
matVals2 = newtable2:Column << get as matrix();
```

**Code Explanation**:

1. Open data table.
2. Perform process screening analysis.
3. Extract process screening report.
4. Convert report to data table.
5. Close process screening window.
6. Retrieve column values as matrix.



### Example 10
> **Summary**: Performs process screening analysis to identify trends and anomalies in a dataset, utilizing control charts and special tests.

<!-- Keywords: #ProcessScreening, #ControlCharts, #SpecialTests, #DataAnalysis, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Process Screening(
	Y( :NPN1, :PNP1, :PNP2 ),
	Grouping( :wafer, :lot_id ),
	Control Chart Type( "Indiv and MR" ),
	Subgroup( :SITE ),
	Test 2( 1 ),
	Test 3( 1 ),
	Test 4( 1 ),
	Test 5( 1 ),
	Test 6( 1 ),
	Test 7( 1 ),
	Test 8( 1 ),
	Range Limit Exceeded( 1 ),
	SendToReport( Dispatch( {}, "", TableBox, {Sort By Column( 1, 0 )} ) )
);
rpt = obj << report;
dt2 = rpt[Table Box( 1 )] << Make Into Data Table;
obj << close window;
```

**Code Explanation**:

1. Open data_table data
2. Initiate process screening analysis.
3. Set response variables: NPN1, PNP1, PNP2.
4. Define grouping variables: wafer, lot_id.
5. Choose control chart type: Indiv and MR.
6. Specify subgroup variable: SITE.
7. Enable all special tests (2-8).
8. Enable range limit exceeded test.
9. Sort report by first column.
10. Extract first table box into new data table.
11. Close original analysis window.



### Example 11
> **Summary**: Performs process screening analysis to identify trends and anomalies in a dataset, utilizing the Process Screening platform in JMP.

<!-- Keywords: #JMP, #ProcessScreening, #ControlChart, #DataAnalysis, #StatisticalModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Process Screening(
	Y( :NPN1, :PNP1, :PNP2 ),
	Grouping( :wafer, :lot_id ),
	Control Chart Type( "Indiv and MR" ),
	Subgroup( :SITE ),
	Test 2( 1 ),
	Test 3( 1 ),
	Test 4( 1 ),
	Test 5( 1 ),
	Test 6( 1 ),
	Test 7( 1 ),
	Test 8( 1 ),
	Range Limit Exceeded( 1 ),
	SendToReport( Dispatch( {}, "", TableBox, {Sort By Column( 11, 0 )} ) )
);
obj << Find and Select( "PNP1" );
timebefore = Today();
obj << Control Chart Builder;
timeafter = Today();
Close( dt, no save );
before = Today();
```

**Code Explanation**:

1. Open data table;
2. Perform process screening analysis.
3. Set response variables.
4. Define grouping variables.
5. Choose control chart type.
6. Specify subgroup variable.
7. Enable multiple tests.
8. Sort report by column.
9. Select specific item.
10. Run control chart builder.



### Example 12
> **Summary**: Runs the process screening and control chart builder for a specific data table, selecting 'PNP1' as the response variable and sorting the report by column 11.

<!-- Keywords: #ProcessScreening, #ControlChartBuilder, #JMPScriptingLanguage, #DataAnalysis, #QualityControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Process Screening(
	Y( :NPN1, :PNP1, :PNP2 ),
	Grouping( :wafer, :lot_id ),
	Control Chart Type( "Indiv and MR" ),
	Subgroup( :SITE ),
	Test 2( 1 ),
	Test 3( 1 ),
	Test 4( 1 ),
	Test 5( 1 ),
	Test 6( 1 ),
	Test 7( 1 ),
	Test 8( 1 ),
	Range Limit Exceeded( 1 ),
	SendToReport( Dispatch( {}, "", TableBox, {Sort By Column( 11, 0 )} ) )
);
obj << Find and Select( "PNP1" );
timebefore = Today();
obj << Control Chart Builder;
timeafter = Today();
```

**Code Explanation**:

1. Open data table.
2. Create process screening object.
3. Set response variables.
4. Define grouping variables.
5. Choose control chart type.
6. Specify subgroup variable.
7. Enable multiple tests.
8. Sort report by column.
9. Select specific process.
10. Run control chart builder.



### Example 13
> **Summary**: Performs process screening and capability analysis for a data table, utilizing the Process Screening platform to transform columns, set control chart types, and generate reports.

<!-- Keywords: #ProcessScreening, #CapabilityAnalysis, #DataTransformation, #ControlCharts, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Process Screening(
	Process Variables( Transform Column( "Square Root[height]", Format( "Fixed Dec", 5, 0 ), Formula( Sqrt( :height ) ) ) ),
	Control Chart Type( "Indiv and MR" ),
	RowStates( [0 1] )
);
beforeTitles = Window() << get window title;
obj << Process Capability for Selected Items;
afterTitles = Window() << get window title;
```

**Code Explanation**:

1. Open data table;
2. Create square root transformation.
3. Perform process screening.
4. Set control chart type.
5. Define row states.
6. Get initial window title.
7. Generate process capability report.
8. Get updated window title.



### Example 14
> **Summary**: Process of generating control charts for a subset of data filtered by site, using Process Screening and Control Charts for Selected Items in JMP.

<!-- Keywords: #JMP, #ProcessScreening, #ControlCharts, #DataFiltering, #Scripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Process Screening(
	Y( :PNP2 ),
	Control Chart Type( "XBar and R" ),
	Subgroup Sample Size( 10 ),
	K for K Sigma( 3 ),
	Local Data Filter( Add Filter( columns( :SITE ), Where( :SITE == 3 ) ) )
);
obj << Select All;
obj2 = obj << Control Charts for Selected Items;
If( Host is( Windows ),
	obj2 = Window( "data_table, where -SITE == 3 - Control Chart Builder" ),
	obj2 = Window( "data_table.jmp, where -SITE == 3 - Control Chart Builder" )
);
```

**Code Explanation**:

1. Open data table.
2. Launch Process Screening platform.
3. Set response variable.
4. Choose XBar and R chart.
5. Define subgroup size.
6. Set K Sigma value.
7. Apply local data filter.
8. Select all items in report.
9. Generate control charts.
10. Adjust window title based on OS.



### Example 15
> **Summary**: Performs process screening and graphing for selected items, deleting unnecessary columns and creating a new table with limits.

<!-- Keywords: #ProcessScreening, #Graphing, #DataCleaning, #JMPScriptingLanguage, #LimitsTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Process Screening( Process Variables( :Weight, :Weight 2 ), Grouping( :Sample ), Control Chart Type( "Indiv and MR" ) );
dt << Delete Columns( :Markers, :Weight 2, :Weight, :Sample );
obj << Select All;
obj << Quick Graph for Selected Items;
obj << Drift Graph Selected;
obj << Remove Selected Items;
Close( dt, no save );
dtLimits = New Table( "Limits",
	Add Rows( 1 ),
	New Column( "Process", Character( 6 ), "Nominal", Set Values( {"height"} ) ),
	New Column( "_Std Dev", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [3.72556712398186] ) ),
	New Column( "_Sample Size", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [.] ) ),
	New Column( "_Mean", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [62.55] ) ),
	New Column( "_LCL", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [57] ) ),
	New Column( "_UCL", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [65] ) ),
	New Column( "_AvgR", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [.] ) ),
	New Column( "_LCLR", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [.] ) ),
	New Column( "_UCLR", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [.] ) ),
	Set Label Columns( :Process )
);
```

**Code Explanation**:

1. Open data table;
2. Perform Process Screening.
3. Delete unnecessary columns.
4. Select all items in Process Screening.
5. Create quick graph for selected items.
6. Generate drift graph for selected items.
7. Remove selected items from Process Screening.
8. Close dataset without saving.
9. Create new table named Limits.
10. Add columns and set values for limits.



### Example 16
> **Summary**: Runs the process screening analysis to identify trends and anomalies in a data table, utilizing Process Variables, Grouping, and Control Chart Type features.

<!-- Keywords: #ProcessScreening, #JMPScriptingLanguage, #DataAnalysis, #QualityControl, #StatisticalProcessControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Process Screening( Process Variables( :Weight, :Weight 2 ), Grouping( :Sample ), Control Chart Type( "Indiv and MR" ) );
dt << Delete Columns( :Markers, :Weight 2, :Weight, :Sample );
obj << Select All;
obj << Quick Graph for Selected Items;
obj << Drift Graph Selected;
obj << Remove Selected Items;
```

**Code Explanation**:

1. Open data table.
2. Launch Process Screening analysis.
3. Specify process variables.
4. Define grouping variable.
5. Set control chart type.
6. Delete unnecessary columns.
7. Select all items in analysis.
8. Generate quick graph for selected items.
9. Create drift graph for selected items.
10. Remove selected items from analysis.



### Example 17
> **Summary**: Performs process screening and drift graph analysis for a data table, selecting items with a count of 7 and capturing the log.

<!-- Keywords: #ProcessScreening, #DriftGraph, #JMPScriptingLanguage, #DataAnalysis, #QualityControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Process Screening( Y( :height, :weight ), Grouping( :age ), Control Chart Type( "XBar and R" ) );
obj << select where( Count == 7 );
myLog = Log Capture( obj << Drift Graph Selected );
```

**Code Explanation**:

1. Open data table.
2. Perform process screening.
3. Specify response variables.
4. Define grouping variable.
5. Choose control chart type.
6. Select items with count 7.
7. Capture drift graph log.



### Example 18
> **Summary**: Performs process screening to identify patterns in data, utilizing Process Variables, Grouping, and Control Chart Type features to generate a report sorted by column.

<!-- Keywords: #ProcessScreening, #JMPScriptingLanguage, #DataAnalysis, #ReportGeneration, #ControlCharts -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Process Screening(
	Process Variables( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Control Chart Type( "Indiv and MR" ),
	SendToReport( Dispatch( {}, "", TableBox, {Sort By Column( 8, 0 )} ) )
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Run Process Screening.
3. Set process variables.
4. Define grouping variables.
5. Choose control chart type.
6. Sort report by column.
7. Retrieve report object.



### Example 19
> **Summary**: Runs the Process Screening analysis to visualize control charts and process performance graphs, with interactive pin annotations for marker coordinates.

<!-- Keywords: #ProcessScreening, #ControlCharts, #ProcessPerformanceGraphs, #PinAnnotations, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Process Screening(
	Y( :NPN1, :PNP1, :PNP2, :NPN2 ),
	Control Chart Type( "XBar and R" ),
	Process Performance Graph( 1 ),
	SendToReport(
		Dispatch( {"Process Performance Graph"}, "ProcessScreening Graph", FrameBox,
			{Add Pin Annotation(
				Seg( Marker Seg( 1 ) ),
				Index( 2 ),
				Index Row( 2 ),
				UniqueID( 677261314 ),
				FoundPt( {317, 283} ),
				Origin( {1.00416666666667, 2.5} ),
				Tag Line( 1 )
			), Add Pin Annotation(
				Seg( Marker Seg( 1 ) ),
				Index( 1 ),
				Index Row( 1 ),
				UniqueID( 677261313 ),
				FoundPt( {317, 504} ),
				Origin( {1.00416666666667, 0.658333333333333} ),
				Tag Line( 1 )
			), Add Pin Annotation(
				Seg( Marker Seg( 1 ) ),
				Index( 0 ),
				Index Row( 0 ),
				UniqueID( 677261312 ),
				FoundPt( {320, 427} ),
				Origin( {1.01666666666667, 1.3} ),
				Offset( {-306, 7} ),
				Tag Line( 1 )
			)}
		)
	)
);
obj << Move Window( 100, 100 );
marker_coords = {456, 283};
obj << Mouse Click( marker_coords );
marker_coords = {451, 503};
obj << Mouse Click( marker_coords );
marker_coords = {155, 433};
obj << Mouse Click( marker_coords );
```

**Code Explanation**:

1. Open data_table data
2. Launch Process Screening analysis.
3. Set response variables.
4. Choose XBar and R control chart.
5. Enable process performance graph.
6. Add pin annotations to report.
7. Move window to position.
8. Click on first marker coordinate.
9. Click on second marker coordinate.
10. Click on third marker coordinate.



### Example 20
> **Summary**: Performs process screening analysis to identify trends and anomalies in a dataset, utilizing control charts for selected items and saving summaries and details.

<!-- Keywords: #ProcessScreening, #ControlCharts, #DataAnalysis, #JMPScriptingLanguage, #QualityControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Process Screening(
	Process Variables( :NPN1, :PNP1, :PNP2 ),
	Grouping( :wafer, :lot_id ),
	Control Chart Type( "Indiv and MR" ),
	Subgroup( :SITE ),
	KSigma( 5 ),
	RowStates( [851 1] )
);
obj2 = obj << Control Charts for Selected Items;
dtSumCC = obj2 << Save Summaries;
dtSumPS = obj << Save Selected Details;
Close( dt, no save );
```

**Code Explanation**:

1. Open data table.
2. Perform process screening analysis.
3. Set process variables.
4. Define grouping variables.
5. Choose control chart type.
6. Specify subgroup variable.
7. Set KSigma value.
8. Apply row states.
9. Generate control charts.
10. Save summaries and details.
11. Close original data table.



### Example 21
> **Summary**: Performs process screening and control chart generation for selected items in a data table, utilizing the Process Screening platform to enable statistical tests and K-Sigma value selection.

<!-- Keywords: #ProcessScreening, #ControlCharts, #JMPScriptingLanguage, #DataAnalysis, #StatisticalTesting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Process Screening(
	Y( :Toxicity ),
	Control Chart Type( "XBar MR and R" ),
	Subgroup( :Formulation ),
	Enable All Tests( 1 ),
	KSigma( 1 )
);
obj << Select All;
obj2 = obj << Control Charts for Selected Items;
dtSumCC = obj2 << Save Summaries;
dtSumPS = obj << Save Selected Details;
Close( dt, no save );
```

**Code Explanation**:

1. Open data table;
2. Initiate Process Screening.
3. Set response variable.
4. Choose control chart type.
5. Define subgroup column.
6. Enable all statistical tests.
7. Set K-Sigma value.
8. Select all items.
9. Generate control charts.
10. Save summaries and details.



### Example 22
> **Summary**: Performs process screening and control chart creation for selected items, utilizing Process Screening and Control Charts for Selected Items features in JMP.

<!-- Keywords: #JMPScriptingLanguage, #ProcessScreening, #ControlCharts, #DataAnalysis, #QualityControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Process Screening(
	Process Variables( :NPN1, :PNP1, :PNP2 ),
	Grouping( :wafer, :lot_id ),
	Control Chart Type( "Indiv and MR" ),
	Subgroup( :SITE ),
	KSigma( 5 ),
	RowStates( [851 1] )
);
obj2 = obj << Control Charts for Selected Items;
dtSumCC = obj2 << Save Summaries;
dtSumPS = obj << Save Selected Details;
```

**Code Explanation**:

1. Open data table.
2. Launch Process Screening.
3. Specify process variables.
4. Define grouping variables.
5. Set control chart type.
6. Define subgroup variable.
7. Set KSigma value.
8. Apply row states.
9. Create control charts.
10. Save summary data.
11. Save selected details.



### Example 23
> **Summary**: Performs process screening and control chart creation for selected items in a data table, utilizing the Process Screening platform to enable all tests and configure subgrouping.

<!-- Keywords: #ProcessScreening, #ControlCharts, #Subgrouping, #DataAnalysis, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Process Screening(
	Y( :Toxicity ),
	Control Chart Type( "XBar MR and R" ),
	Subgroup( :Formulation ),
	Enable All Tests( 1 ),
	KSigma( 1 )
);
obj << Select All;
obj2 = obj << Control Charts for Selected Items;
dtSumCC = obj2 << Save Summaries;
dtSumPS = obj << Save Selected Details;
```

**Code Explanation**:

1. Open table.
2. Run Process Screening.
3. Set Y variable.
4. Choose control chart type.
5. Define subgroups.
6. Enable all tests.
7. Set KSigma value.
8. Select all items.
9. Create control charts.
10. Save summaries.
11. Save selected details.



### Example 24
> **Summary**: Runs the process screening and report generation for a data table, utilizing Process Screening to select items and create quick graphs with varying numbers of plots across.

<!-- Keywords: #JMPScriptingLanguage, #ProcessScreening, #QuickGraphs, #ReportGeneration, #DataTableAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Process Screening( Y( 10 :: 25 ) );
obj << Select All;
obj << Quick Graph for Selected Items( Number of Plots Across( 6 ) );
rpt = obj << report;
obj << Quick Graph for Selected Items( Number of Plots Across( 3 ) );
rpt = obj << report;
obj << Quick Graph for Selected Items( Number of Plots Across( 1 ) );
rpt = obj << report;
```

**Code Explanation**:

1. Open table.
2. Run Process Screening.
3. Select all items.
4. Create quick graph with 6 plots across.
5. Save report.
6. Create quick graph with 3 plots across.
7. Save report.
8. Create quick graph with 1 plot across.
9. Save report.



### Example 25
> **Summary**: Performs process screening analysis on a data table, utilizing the Process Screening platform to generate summary tables and graphs.

<!-- Keywords: #ProcessScreening, #JMPScriptingLanguage, #DataAnalysis, #QualityControl, #StatisticalProcessControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Process Screening(
	Y( :NPN1, :PNP1, :PNP2, :NPN2 ),
	Control Chart Type( "XBar and R" ),
	Test 2( 1 ),
	Test 3( 1 ),
	Test 4( 1 ),
	Test 5( 1 ),
	Test 6( 1 ),
	Test 7( 1 ),
	Test 8( 1 ),
	Range Limit Exceeded( 1 )
);
dtSum = obj << Save Summary Table;
dtSumGraph = obj << Save Summary Table with Graphs;
Close( dt, No save );
```

**Code Explanation**:

1. Open data table.
2. Launch Process Screening platform.
3. Set response variables.
4. Select XBar and R chart.
5. Enable Test 2.
6. Enable Test 3.
7. Enable Test 4.
8. Enable Test 5.
9. Enable Test 6.
10. Enable Test 7.
11. Enable Test 8.
12. Enable Range Limit Exceeded.
13. Save summary table.
14. Save summary table with graphs.
15. Close original data table without saving.



### Example 26
> **Summary**: Runs the process screening analysis to identify significant variables in a dataset, utilizing Process Screening and selecting columns 8-394 as Y variables.

<!-- Keywords: #ProcessScreening, #JMPScriptingLanguage, #DataAnalysis, #VariableSelection, #MaxLogWorth -->

**Code**:
```jsl
dt = Open("data_table.jmp");
ps = dt << Process Screening( Y( 8 :: 394 ), X( :Process ), MaxLogWorth( 100 ) );
del_name = Column( dt, 12 ) << Get Name;
Column( dt, 12 ) << Set Selected( 1 );
dt << Delete Columns;
```

**Code Explanation**:

1. Open data table.
2. Run Process Screening analysis.
3. Select columns 8 to 394 as Y variables.
4. Use "Process" column as X variable.
5. Set MaxLogWorth to 100.
6. Retrieve name of column 12.
7. Select column 12.
8. Delete selected columns.



## Process Screening using New Column
> **Summary**: Process of creating a Process Screening analysis with specified limits for height, grouped by age and sex.

<!-- Keywords: #ProcessScreening, #LimitsTable, #Grouping, #JSLScripting, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Lower SL", formula( If( :sex == "M", 14, 28 ) ) );
dt << New Column( "Upper SL", formula( If( :sex == "M", 28, 56 ) ) );
obj = dt << Process Screening(
	Y( :height ),
	Grouping( :age, :sex ),
	Use Limits Table( 1, Data Table("data_table"), LSL( :Lower SL ), USL( :Upper SL ), Go )
);
dtsum = obj << Save Summary Table;
```

**Code Explanation**:

1. Open data table;
2. Create Lower SL column.
3. Create Upper SL column.
4. Run Process Screening analysis.
5. Set response variable as height.
6. Group by age and sex.
7. Use limits table for specifications.
8. Specify Lower SL as LSL.
9. Specify Upper SL as USL.
10. Save summary table results.



## Process Screening using Add Rows
### Example 1
> **Summary**: Creates and analyzes control charts for a process, including calculating limits and extracting actual LCL and UCL values.

<!-- Keywords: #JSL, #ControlCharts, #ProcessScreening, #DataAnalysis, #JMP -->

**Code**:
```jsl
dtLimits = New Table( "Limits",
	Add Rows( 1 ),
	New Column( "Process", Character( 6 ), "Nominal", Set Values( {"height"} ) ),
	New Column( "_Std Dev", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [3.72556712398186] ) ),
	New Column( "_Sample Size", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [.] ) ),
	New Column( "_Mean", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [62.55] ) ),
	New Column( "_LCL", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [57] ) ),
	New Column( "_UCL", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [65] ) ),
	New Column( "_AvgR", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [.] ) ),
	New Column( "_LCLR", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [.] ) ),
	New Column( "_UCLR", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [.] ) ),
	Set Label Columns( :Process )
);
dt = Open("data_table.jmp");
obj = dt << Process Screening(
	Y( :height ),
	Control Chart Type( "XBar and R" ),
	Subgroup( :age ),
	Use Limits Table(
		1,
		Data Table("data_table"),
		Process Variables( :Process ),
		LCL( :_LCL ),
		UCL( :_UCL ),
		Subgroup Size( :_Sample Size ),
		Go
	)
);
obj << Select All;
dtDetails = obj << Save Selected Details;
actLCL = Column( dtDetails, "LCL" ) << get as matrix;
actUCl = Column( dtDetails, "UCL" ) << get as matrix;
obj2 = obj << Control Charts for Selected Items;
dtSummary = obj2[1] << Save Summaries;
actLCL2 = Column( dtSummary, "LCL height" ) << get as matrix;
actUCL2 = Column( dtSummary, "UCL height" ) << get as matrix;
```

**Code Explanation**:

1. Create new table "Limits".
2. Add one row to table.
3. Define "Process" column.
4. Define "_Std Dev" column.
5. Define "_Sample Size" column.
6. Define "_Mean" column.
7. Define "_LCL" column.
8. Define "_UCL" column.
9. Define "_AvgR" column.
10. Define "_LCLR" column.
11. Define "_UCLR" column.
12. Set label for "Process" column.
13. Open data table;
14. Run Process Screening analysis.
15. Select all items in analysis.
16. Save selected details.
17. Extract actual LCL values.
18. Extract actual UCL values.
19. Generate control charts for selected items.
20. Save summaries from control charts.
21. Extract actual LCL values again.
22. Extract actual UCL values again.



### Example 2
> **Summary**: Performs process screening analysis to identify trends and anomalies in a dataset, utilizing control charts and limits tables for specification.

<!-- Keywords: #JMPScriptingLanguage, #ProcessScreening, #ControlCharts, #LimitsTables, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dtLimits = New Table( "Limits",
	Add Rows( 1 ),
	New Column( "Y", Character, "Nominal", Set Values( {"INM1"} ) ),
	New Column( "LSL", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [1] ) ),
	New Column( "Target", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [2] ) ),
	New Column( "USL", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [3] ) )
);
obj = dt << Process Screening(
	Y( :INM1 ),
	Control Chart Type( "XBar MR and S" ),
	Subgroup( :Wafer ID in lot ID ),
	Use Limits Table( 1, dtLimits, Process Variables( :Y ), LSL( :LSL ), USL( :USL ), Target( :Target ), Go )
);
obj << select All;
obj << Control Charts for Selected Items;
rpt = obj << report;
obj2 = Window( "data_table - Control Chart Builder" );
```

**Code Explanation**:

1. Open data table.
2. Create new limits table.
3. Define process screening analysis.
4. Specify Y variable.
5. Choose control chart type.
6. Define subgrouping.
7. Use limits table for specifications.
8. Select all items in analysis.
9. Generate control charts for selected items.
10. Retrieve report from analysis.



### Example 3
> **Summary**: Runs the creation and use of a control chart for process screening, utilizing the XBar MR and S method with limits defined in a separate table.

<!-- Keywords: #JMPScriptingLanguage, #ControlChart, #ProcessScreening, #XBarMRandS, #DataAnalysis -->

**Code**:
```jsl
dtLimits = New Table( "Untitled 36",
	Add Rows( 12 ),
	New Column( "_LimitsKey",
		Character,
		"Nominal",
		Set Values(
			{"_Std Dev", "_Sample Size", "_Sigma", "_Avg_PreMeans", "_LCL_PreMeans", "_UCL_PreMeans", "_AvgR_PreMeans", "_LCLR_PreMeans",
			"_UCLR_PreMeans", "_AvgS", "_LCLS", "_UCLS"}
		)
	),
	New Column( "INM1",
		Numeric,
		"Continuous",
		Format( "Best", 12 ),
		Set Values( [1.66666666666667, 5, 3.35410196624968, 82, 78, 87, 2, 0, 5, 4, 0, 7] )
	)
);
dt = Open("data_table.jmp");
obj = dt << Process Screening(
	Y( :INM1 ),
	Control Chart Type( "XBar MR and S" ),
	Subgroup( :Wafer ID in lot ID ),
	Use Limits Table( 1, dtLimits )
);
obj << select All;
obj << Control Charts for Selected Items;
rpt = obj << report;
obj2 = Window( "data_table - Control Chart Builder" );
```

**Code Explanation**:

1. Create new table "Untitled 36".
2. Add 12 rows to the table.
3. Define column "_LimitsKey" with character values.
4. Define column "INM1" with numeric values.
5. Open data table.
6. Run Process Screening on "INM1".
7. Set control chart type to "XBar MR and S".
8. Define subgroup by "Wafer ID in lot ID".
9. Use limits from "dtLimits" table.
10. Select all items in the process screening object.




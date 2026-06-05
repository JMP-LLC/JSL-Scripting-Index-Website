# Capability

## Process Capability 
### Example 1
> **Summary**: Visualizes process capability analysis for a cheese production process, using the Moving Range method and displaying goal plots and capability index plots.

<!-- Keywords: #ProcessCapability, #MovingRangeMethod, #GoalPlot, #CapabilityIndexPlot, #JMPScriptingLanguage -->

**Code**:
```jsl
// Process Capability
// Open data table
dt = Open("data_table.jmp");
// Process Capability
Process Capability(
	Process Variables(
		:pH, :Salt Concentration,
		:Moisture Content
	),
	Grouping( :Cheese Type ),
	Moving Range Method(
		Average of Moving Ranges
	),
	Goal Plot( 1 ),
	Capability Index Plot( 1 ),
	Process Performance Plot( 0 )
);
```

**Code Explanation**:

1. Open table.
2. Set process variables.
3. Define grouping variable.
4. Use moving range method.
5. Enable goal plot.
6. Enable capability index plot.
7. Disable process performance plot.



### Example 2
> **Summary**: Visualizes process capability analysis for OZONE, CO, SO2, and NO variables by defining spec limits and generating a goal plot with shade levels.

<!-- Keywords: #ProcessCapability, #GoalPlot, #SpecLimits, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
// Process Capability
// Open data table
dt = Open("data_table.jmp");
// Process Capability
Process Capability(
	Process Variables(
		:OZONE, :CO, :SO2, :NO
	),
	Spec Limits(
		OZONE(
			LSL( 0 ),
			Target( 0.05 ),
			USL( 0.1 )
		),
		CO(
			LSL( 5 ),
			Target( 10 ),
			USL( 20 )
		),
		SO2(
			LSL( 0 ),
			Target( 0.03 ),
			USL( 0.08 )
		),
		NO(
			LSL( 0 ),
			Target( 0.025 ),
			USL( 0.6 )
		)
	),
	Goal Plot( 1, Shade Levels( 1 ) )
);
```

**Code Explanation**:

1. Open table.
2. Set process variables.
3. Define OZONE specs.
4. Define CO specs.
5. Define SO2 specs.
6. Define NO specs.
7. Generate goal plot.
8. Shade goal plot levels.



### Example 3
> **Summary**: Performs a Process Capability analysis on multiple processes, generating goal plots and capability index plots to evaluate the performance of each process. It also compares distributions for Process 7.

<!-- Keywords: #ProcessCapability, #GoalPlot, #CapabilityIndex, #DistributionComparison, #JMPScriptingLanguage -->

**Code**:
```jsl
// Process Capability
// Open data table
dt = Open("data_table.jmp");
// Process Capability
Process Capability(
	Process Variables(
		:Process 1 & Dist( Lognormal ),
		:Process 2 & Dist( Lognormal ),
		:Process 3 & Dist( Weibull ),
		:Process 4 & Dist( Lognormal ),
		:Process 5 & Dist( Weibull ),
		:Process 6 & Dist( Johnson ),
		:Process 7
	),
	Spec Limits(
		Process 1(
			LSL( 3 ),
			Target( 10 ),
			USL( 25 )
		),
		Process 2(
			LSL( 5 ),
			Target( 10 ),
			USL( 17 )
		),
		Process 3(
			LSL( 3 ),
			Target( 10 ),
			USL( 25 )
		),
		Process 4(
			LSL( 3 ),
			Target( 10 ),
			USL( 25 )
		),
		Process 5(
			LSL( 3 ),
			Target( 10 ),
			USL( 25 )
		),
		Process 6(
			LSL( 3 ),
			Target( 10 ),
			USL( 25 )
		),
		Process 7(
			LSL( 3 ),
			Target( 10 ),
			USL( 25 )
		)
	),
	Goal Plot(
		1,
		Label Overall Sigma Points( 1 )
	),
	Capability Index Plot( 1 ),
	{:Process 7 <<
	Process Capability Analysis(
		Compare Distributions(
			1, <<Fit Normal, <<Fit Gamma,
			<<Fit Johnson,
			<<Fit Lognormal,
			<<Fit Weibull
		)
	)},
	SendToReport(
		Dispatch( {"Goal Plot"},
			"Process Capability Goal Plot",
			FrameBox,
			{Frame Size( 353, 208 )}
		),
		Dispatch(
			{"Capability Box Plots"},
			"Capability Box Plots Graph",
			FrameBox,
			{Frame Size( 407, 53 )}
		),
		Dispatch(
			{"Capability Index Plot"},
			"Process Capability Index Plot",
			FrameBox,
			{Frame Size( 365, 284 )}
		)
	)
);
```

**Code Explanation**:

1. Open table.
2. Define process variables.
3. Set spec limits.
4. Create goal plot.
5. Generate capability index plot.
6. Analyze Process 7.
7. Compare distributions.
8. Adjust goal plot size.
9. Resize capability box plots.
10. Modify capability index plot size.



### Example 4
> **Summary**: Opens a data table, sets process variables for Process Capability analysis, configures spec limits, and generates capability box plots to visualize the performance of multiple variables.

<!-- Keywords: #ProcessCapability, #JMPScriptingLanguage, #DataAnalysis, #StatisticalProcessControl, #BoxPlots -->

**Code**:
```jsl
// Process Capability
// Open data table
dt = Open("data_table.jmp");
// Process Capability
Process Capability(
	Process Variables(
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
	),
	Spec Limits Dialog(
		"No (skip columns with no spec limits)"
	),
	Capability Box Plots( 1 )
);
```

**Code Explanation**:

1. Open table.
2. Set process variables.
3. Configure spec limits.
4. Generate capability box plots.



### Example 5
> **Summary**: Performs a Process Capability analysis on three variables (Weight, Thickness, and Purity) with different distributions (Lognormal, Johnson, Weibull), generating individual detail reports, capability index plots, and comparing distribution fits.

<!-- Keywords: #ProcessCapability, #JMPScriptingLanguage, #DistributionAnalysis, #CapabilityIndexPlot, #IndividualDetailReports -->

**Code**:
```jsl
// Process Capability
// Open data table
dt = Open("data_table.jmp");
// Process Capability
Process Capability(
	Process Variables(
		:Weight & Dist( Best Fit ),
		:Thickness & Dist( Best Fit ),
		:Purity & Dist( Best Fit )
	),
	Spec Limits(
		Weight(
			LSL( 148 ),
			Target( 150 ),
			USL( 152 )
		),
		Thickness(
			LSL( 4.8 ),
			Target( 5 ),
			USL( 5.2 )
		),
		Purity(
			LSL( 99.5 ),
			Target( . ),
			USL( . )
		)
	),
	Individual Detail Reports( 1 ),
	Capability Index Plot( 1 ),
	{(:Weight & Dist( Lognormal )) <<
	Process Capability Analysis(
		Compare Distributions(
			1, <<Fit Normal, <<Fit Gamma,
			<<Fit Johnson,
			<<Fit Lognormal,
			<<Fit Weibull
		)
	), (:Thickness & Dist( Johnson )) <<
	Process Capability Analysis(
		Compare Distributions(
			1, <<Fit Normal, <<Fit Gamma,
			<<Fit Johnson,
			<<Fit Lognormal,
			<<Fit Weibull
		)
	), (:Purity & Dist( Weibull )) <<
	Process Capability Analysis(
		Compare Distributions(
			1, <<Fit Normal, <<Fit Gamma,
			<<Fit Johnson,
			<<Fit Lognormal,
			<<Fit Weibull
		)
	)}
);
```

**Code Explanation**:

1. Open table.
2. Define process variables.
3. Set specification limits.
4. Generate individual detail reports.
5. Create capability index plot.
6. Analyze weight distribution.
7. Compare weight distributions.
8. Analyze thickness distribution.
9. Compare thickness distributions.
10. Analyze purity distribution.
11. Compare purity distributions.



### Example 6
> **Summary**: Performs a Process Capability analysis on variables M1 to M7, utilizing Johnson distributions and specifying LSL, Target, and USL limits for each variable. The script generates a Capability Index Plot.

<!-- Keywords: #ProcessCapability, #JohnsonDistribution, #JMPScriptingLanguage, #CapabilityIndexPlot, #QualityControl -->

**Code**:
```jsl
// Process Capability - All Johnson
Process Capability(
	Process Variables(
		:M1 & Dist( Johnson ),
		:M2 & Dist( Johnson ),
		:M3 & Dist( Johnson ),
		:M4 & Dist( Johnson ),
		:M5 & Dist( Johnson ),
		:M6 & Dist( Johnson ),
		:M7 & Dist( Johnson )
	),
	Spec Limits(
		M1(
			LSL( 3 ),
			Target( 10 ),
			USL( 25 )
		),
		M2(
			LSL( 13.4 ),
			Target( 13.8 ),
			USL( 14.3 )
		),
		M3(
			LSL( 0.05 ),
			Target( 1 ),
			USL( 2.6 )
		),
		M4(
			LSL( . ),
			Target( 2 ),
			USL( 25 )
		),
		M5(
			LSL( . ),
			Target( 1 ),
			USL( 8 )
		),
		M6(
			LSL( 0.5 ),
			Target( 0.7 ),
			USL( 1.35 )
		),
		M7(
			LSL( 5 ),
			Target( 10 ),
			USL( 15 )
		)
	),
	Capability Index Plot( 1 )
);
```

**Code Explanation**:

1. Run Process Capability analysis.
2. Analyze variables M1 to M7.
3. Use Johnson distribution for each variable.
4. Set LSL, Target, and USL for M1.
5. Set LSL, Target, and USL for M2.
6. Set LSL, Target, and USL for M3.
7. Set LSL, Target, and USL for M4.
8. Set LSL, Target, and USL for M5.
9. Set LSL, Target, and USL for M6.
10. Set LSL, Target, and USL for M7.
11. Generate Capability Index Plot.



### Example 7
> **Summary**: Generates a Process Capability analysis for the M1 process variable, comparing its distribution to Gamma and Johnson fits, and producing individual detail reports with histogram scales and frame sizes adjusted.

<!-- Keywords: #ProcessCapability, #GammaDistribution, #JohnsonFit, #HistogramReports, #JMPScriptingLanguage -->

**Code**:
```jsl
// Process Capability - M1 Compare Distributions
Process Capability(
	Process Variables(
		:M1 & Dist( Gamma )
	),
	Spec Limits(
		M1(
			LSL( 3 ),
			Target( 10 ),
			USL( 25 )
		)
	),
	Individual Detail Reports( 1 ),
	Capability Box Plots( 0 ),
	Goal Plot( 0 ),
	Capability Index Plot( 0 ),
	{(:M1 & Dist( Gamma )) <<
	Process Capability Analysis(
		Compare Distributions(
			1,
			Fit Gamma( 1 ),
			Fit Johnson( 1 )
		)
	)},
	SendToReport(
		Dispatch(
			{"Individual Detail Reports",
			"M1(Gamma Distribution) Capability",
			"Compare Distributions",
			"Histogram"}, "2", ScaleBox,
			{Max( 37.7023750488451 )}
		),
		Dispatch(
			{"Individual Detail Reports",
			"M1(Gamma Distribution) Capability",
			"Compare Distributions",
			"Histogram"}, "3", ScaleBox,
			{Max( 0.15080950019538 )}
		),
		Dispatch(
			{"Individual Detail Reports",
			"M1(Gamma Distribution) Capability",
			"Compare Distributions",
			"Histogram"},
			"Process Capability Analysis Histogram",
			FrameBox,
			{Frame Size( 320, 19 )}
		)
	)
);
```

**Code Explanation**:

1. Open Process Capability dialog.
2. Set process variable M1.
3. Define LSL, Target, USL for M1.
4. Enable individual detail reports.
5. Disable capability box plots.
6. Disable goal plot.
7. Disable capability index plot.
8. Perform process capability analysis on M1.
9. Compare M1 distribution with Gamma and Johnson fits.
10. Adjust histogram scales and frame size in reports.



### Example 8
> **Summary**: This JSL script launches Process Capability analysis to evaluate the performance of two process variables, P1 and P2, with respective specification limits. The script generates a Goal Plot and Capability Index Plot for visual inspection.

<!-- Keywords: #ProcessCapability, #GoalPlot, #CapabilityIndex, #JMPScriptingLanguage, #QualityControl -->

**Code**:
```jsl
// Process Capability
Process Capability(
	Process Variables( :P1, :P2 ),
	Spec Limits(
		P1(
			LSL( -0.0000137 ),
			Target( -0.00001 ),
			USL( -0.0000075 )
		),
		P2(
			LSL( 79 ),
			Target( 103 ),
			USL( 128 )
		)
	),
	Goal Plot( 1 ),
	Capability Index Plot( 1 )
);
```

**Code Explanation**:

1. Launch Process Capability.
2. Define process variables: P1, P2.
3. Set LSL for P1: -0.0000137.
4. Set target for P1: -0.00001.
5. Set USL for P1: -0.0000075.
6. Set LSL for P2: 79.
7. Set target for P2: 103.
8. Set USL for P2: 128.
9. Generate Goal Plot.
10. Generate Capability Index Plot.



### Example 9
> **Summary**: Performs a categorical analysis with crosstab transposed and tests for response homogeneity using the Process Capability platform in JMP.

<!-- Keywords: #ProcessCapability, #CategoricalAnalysis, #JMPScriptingLanguage, #DataAnalysis, #HomogeneityTest -->

**Code**:
```jsl
// Process Capability
Process Capability(
	Process Variables(
		:NPN1, :PNP1, :PNP2, :NPN2, :PNP3,
		:IVP1, :PNP4, :NPN3, :IVP2, :NPN4,
		:SIT1, :INM1, :INM2, :VPM3, :SPM1,
		:NPN5, :EP2, :ZD6, :PBA, :PLG,
		:CAP, :PBA 2, :PLG 2, :PNP5,
		:NPN6, :PNP7, :NPN7, :PNP8, :IVP3,
		:IVP4, :IVP5, :IVP6, :PNP9, :NPN8,
		:NPN9, :IVP7, :NPN10, :N_1, :PBA1,
		:WPR1, :B10, :PLY10, :VBE210,
		:VTN210, :VTP210, :SIT2, :SIT3,
		:INV2, :INV3, :INV4, :INV5, :FST1,
		:FST2, :RES1, :RES2, :PNM1, :PPM1,
		:FNM1, :FPM1, :FST3, :FST4, :RES3,
		:RES4, :A1, :B1, :A2N, :A2P,
		:A2P1, :IVP8, :IVP9, :DE_H1,
		:NF_H1, :ESM1, :ESM2, :ESP1,
		:YFU1, :PBA2, :PBB1, :LYA1, :LYB1,
		:DEM1, :DEP1, :NFM1, :PLY1, :VDP1,
		:VDP2, :SNW1, :RSP2, :PLY2, :RSP1,
		:VDP3, :PBL1, :PLG1, :VDP4, :SPW1,
		:VIA1, :INM3, :VPM5, :INM4, :VPM7,
		:M1_M1, :M2_M2, :P1_P1, :E2A1,
		:E2B1, :NPN11, :IVP10, :PNP10,
		:INM5, :VPM8, :INM6, :VPM10,
		:N2A1, :N2B1, :NM_L1, :P2A1,
		:P2B1, :PM_L1
	),
	Spec Limits Dialog(
		"No (skip columns with no spec limits)"
	),
	Capability Box Plots( 1 )
);
```

**Code Explanation**:

1. Launch Process Capability.
2. Define process variables.
3. Skip columns without specs.
4. Enable capability box plots.



### Example 10
> **Summary**: Generates a Process Capability report for a manufacturing process, analyzing variables such as Thickness, Roughness, Current, Time, Flow Rate 1, Flow Rate 2, Temp, and Flow Rate 3. The script defines spec limits, creates individual detail reports, and includes AIAG (Ppk) labeling.

<!-- Keywords: #ProcessCapability, #JSLScriptingLanguage, #ManufacturingAnalytics, #QualityControl, #StatisticalAnalysis -->

**Code**:
```jsl
// Process Capability
Process Capability(
	Process Variables(
		:Thickness, :Roughness, :Current,
		:Time, :Flow Rate 3, :Flow Rate 2,
		:Temp, :Flow Rate 1
	),
	Spec Limits(
		Thickness(
			LSL( 190 ),
			Target( 196 ),
			USL( 202 )
		),
		Roughness(
			LSL( 80 ),
			Target( 84 ),
			USL( 90 )
		),
		Current(
			LSL( 50 ),
			Target( 65 ),
			USL( 80 )
		),
		Time(
			LSL( 0 ),
			Target( 1 ),
			USL( 3 )
		),
		Flow Rate 1(
			LSL( 13 ),
			Target( 16 ),
			USL( 19 )
		),
		Flow Rate 2(
			LSL( 2 ),
			Target( 4 ),
			USL( 6 )
		),
		Temp(
			LSL( 5 ),
			Target( 11 ),
			USL( 17 )
		),
		Flow Rate 3(
			LSL( 5 ),
			Target( 11 ),
			USL( 17 )
		)
	),
	Individual Detail Reports( 1 ),
	"AIAG (Ppk) Labeling"n( 0 ),
	Goal Plot(
		1,
		Shade Levels( 1 ),
		Label Overall Sigma Points( 1 )
	),
	SendToReport(
		Dispatch( {},
			"Individual Detail Reports",
			OutlineBox,
			{Close( 1 )}
		)
	)
);
```

**Code Explanation**:

1. Open Process Capability dialog.
2. Set process variables.
3. Define spec limits for Thickness.
4. Define spec limits for Roughness.
5. Define spec limits for Current.
6. Define spec limits for Time.
7. Define spec limits for Flow Rate 1.
8. Define spec limits for Flow Rate 2.
9. Define spec limits for Temp.
10. Define spec limits for Flow Rate 3.



### Example 11
> **Summary**: Performs process capability analysis for multiple variables, including OZONE, CO, SO2, and NO, with goal plot shading and pin annotations.

<!-- Keywords: #ProcessCapability, #GoalPlot, #PinAnnotation, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
obj = dt1 << Process Capability(
	Process Variables( :OZONE, :CO, :SO2, :NO ),
	Spec Limits( Import Spec Limits( dt2 ) ),
	Goal Plot( 1, Shade Levels( 1 ) ),
	Process Performance Plot( 0 ),
	SendToReport(
		Dispatch( {"Goal Plot"}, "Process Capability Goal Plot", FrameBox,
			Add Pin Annotation(
				Seg( Marker Seg( 1 ) ),
				Index( 6 ),
				Index Row( 6 ),
				UniqueID( 835403958 ),
				FoundPt( {379, 192} ),
				Origin( {0.1272, 0.42} ),
				Tag Line( 1 )
			)
		),
		Dispatch( {}, "Capability Box Plots", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Capability Index Plot"}, "Process Capability Index Plot", FrameBox,
			Add Pin Annotation(
				Seg( Marker Seg( 1 ) ),
				Index( 6 ),
				Index Row( 6 ),
				UniqueID( 835461526 ),
				FoundPt( {242, 458} ),
				Origin( {2.02, 0.465} ),
				Tag Line( 1 )
			)
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create process capability object.
3. Set process variables: OZONE, CO, SO2, NO.
4. Import spec limits from another dataset.
5. Enable goal plot with shading.
6. Disable process performance plot.
7. Add pin annotation to goal plot.
8. Close capability box plots.
9. Add pin annotation to capability index plot.



### Example 12
> **Summary**: Performs process capability analysis with customized spec limits and plots, generating a new window for visualizing the results.

<!-- Keywords: #ProcessCapability, #SpecLimits, #GoalPlot, #CapabilityIndexPlot, #JMPScriptingLanguage -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
dt2 = Open("data_table.jmp");
obj = dt1 << Process Capability(
	Process Variables( :OZONE, :CO, :SO2, :NO ),
	Spec Limits( Import Spec Limits( dt2 ) ),
	Goal Plot( 1, Shade Levels( 1 ) ),
	Process Performance Plot( 0 ),
	SendToReport(
		Dispatch( {"Goal Plot"}, "Process Capability Goal Plot", FrameBox,
			Add Pin Annotation(
				Seg( Marker Seg( 1 ) ),
				Index( 6 ),
				Index Row( 6 ),
				UniqueID( 835403958 ),
				FoundPt( {379, 192} ),
				Origin( {0.1272, 0.42} ),
				Tag Line( 1 )
			)
		),
		Dispatch( {}, "Capability Box Plots", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Capability Index Plot"}, "Process Capability Index Plot", FrameBox,
			Add Pin Annotation(
				Seg( Marker Seg( 1 ) ),
				Index( 6 ),
				Index Row( 6 ),
				UniqueID( 835461526 ),
				FoundPt( {242, 458} ),
				Origin( {2.02, 0.465} ),
				Tag Line( 1 )
			)
		)
	)
);
New Window( "pictures", H List Box( Tab Page Box( "Picture", obj << Get Picture() ) ) );
```

**Code Explanation**:

1. Open data table.
2. Open data table.
3. Create process capability analysis.
4. Set process variables: OZONE, CO, SO2, NO.
5. Import spec limits from CitySpecLimits.jmp.
6. Enable goal plot with shading.
7. Disable process performance plot.
8. Add pin annotation to goal plot.
9. Close capability box plots.
10. Add pin annotation to capability index plot.
11. Create new window for pictures.
12. Add tab page with picture of analysis.



### Example 13
> **Summary**: Performs process capability analysis for multiple variables, including OZONE, CO, SO2, and NO, by importing spec limits from CitySpecLimits.jmp and generating goal plots with shading.

<!-- Keywords: #ProcessCapabilityAnalysis, #GoalPlot, #ShadeLevels, #ImportSpecLimits, #JMPScriptingLanguage -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
dt2 = Open("data_table.jmp");
dt1 << Process Capability(
	Process Variables( :OZONE, :CO, :SO2, :NO ),
	Spec Limits( Import Spec Limits( dt2 ) ),
	Goal Plot( 1, Shade Levels( 1 ) ),
	Process Performance Plot( 0 ),
	SendToReport(
		Dispatch( {"Goal Plot"}, "Process Capability Goal Plot", FrameBox,
			Add Pin Annotation(
				Seg( Marker Seg( 1 ) ),
				Index( 6 ),
				Index Row( 6 ),
				UniqueID( 835403958 ),
				FoundPt( {379, 192} ),
				Origin( {0.1272, 0.42} ),
				Tag Line( 1 )
			)
		),
		Dispatch( {}, "Capability Box Plots", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Capability Index Plot"}, "Process Capability Index Plot", FrameBox,
			Add Pin Annotation(
				Seg( Marker Seg( 1 ) ),
				Index( 6 ),
				Index Row( 6 ),
				UniqueID( 835461526 ),
				FoundPt( {242, 458} ),
				Origin( {2.02, 0.465} ),
				Tag Line( 1 )
			)
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Open data table;
3. Perform process capability analysis.
4. Set process variables: OZONE, CO, SO2, NO.
5. Import spec limits from CitySpecLimits.jmp.
6. Enable goal plot with shading.
7. Disable process performance plot.
8. Send report updates.
9. Add pin annotation to goal plot.
10. Close capability box plots.



### Example 14
> **Summary**: Performs process capability analysis for multiple variables, skipping columns without spec limits and displaying box plots.

<!-- Keywords: #ProcessCapability, #BoxPlot, #JMPScriptingLanguage, #DataAnalysis, #QualityControl -->

**Code**:
```jsl
Open("data_table.jmp");
Process Capability(
	Process Variables(
		:NPN1, :PNP1, :PNP2, :NPN2, :PNP3, :IVP1, :PNP4, :NPN3, :IVP2, :NPN4, :SIT1, :INM1, :INM2, :VPM3, :SPM1, :NPN5, :EP2, :ZD6, :PBA,
		:PLG, :CAP, :PBA 2, :PLG 2, :PNP5, :NPN6, :PNP7, :NPN7, :PNP8, :IVP3, :IVP4, :IVP5, :IVP6, :PNP9, :NPN8, :NPN9, :IVP7, :NPN10, :N_1,
		:PBA1, :WPR1, :B10, :PLY10, :VBE210, :VTN210, :VTP210, :SIT2, :SIT3, :INV2, :INV3, :INV4, :INV5, :FST1, :FST2, :RES1, :RES2, :PNM1,
		:PPM1, :FNM1, :FPM1, :FST3, :FST4, :RES3, :RES4, :A1, :B1, :A2N, :A2P, :A2P1, :IVP8, :IVP9, :DE_H1, :NF_H1, :ESM1, :ESM2, :ESP1,
		:YFU1, :PBA2, :PBB1, :LYA1, :LYB1, :DEM1, :DEP1, :NFM1, :PLY1, :VDP1, :VDP2, :SNW1, :RSP2, :PLY2, :RSP1, :VDP3, :PBL1, :PLG1, :VDP4,
		:SPW1, :VIA1, :INM3, :VPM5, :INM4, :VPM7, :M1_M1, :M2_M2, :P1_P1, :E2A1, :E2B1, :NPN11, :IVP10, :PNP10, :INM5, :VPM8, :INM6, :VPM10,
		:N2A1, :N2B1, :NM_L1, :P2A1, :P2B1, :PM_L1
	),
	Spec Limits Dialog( "No (skip columns with no spec limits)" ),
	Capability Box Plots( 1 )
);
```

**Code Explanation**:

1. Open data table;
2. Launch Process Capability platform.
3. Select process variables.
4. Skip columns without spec limits.
5. Display capability box plots.



### Example 15
> **Summary**: Performs process capability analysis for OZONE, CO, SO2, and NO variables by importing spec limits from a secondary data table and generating a goal plot with shade levels.

<!-- Keywords: #ProcessCapability, #GoalPlot, #SpecLimits, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
dt2 = Open("data_table.jmp");
dt1 << Process Capability(
	Process Variables( :OZONE, :CO, :SO2, :NO ),
	Spec Limits( Import Spec Limits( dt2 ) ),
	Goal Plot( 1, Shade Levels( 1 ) )
);
```

**Code Explanation**:

1. Open data table;
2. Open data table;
3. Launch Process Capability.
4. Select OZONE, CO, SO2, NO.
5. Import spec limits from dt2.
6. Enable Goal Plot.
7. Set Goal Plot shade levels to 1.



### Example 16
> **Summary**: Runs the process capability analysis for a specific result variable, with sub-lot categorization and within subgroup variation calculation.

<!-- Keywords: #ProcessCapability, #JSLScriptingLanguage, #DataAnalysis, #QualityControl, #StatisticalProcessControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Process Capability(
	Process Variables( :N ),
	Spec Limits( :N( LSL( 5 ), Target( 10 ), USL( 15 ) ) ),
	Moving Range Method( Average of Moving Ranges ),
	Capability Box Plots( 1 ),
	Individual Detail Reports( 0 ),
	Goal Plot( 1 ),
	Capability Index Plot( 1 ),
	Process Performance Plot( 0 )
);
dt << select all rows << exclude << hide;
obj << Within Sigma Normalized Box Plots( 1 );
obj << Overall Sigma Normalized Box Plots( 1 );
Close( dt, no save );
dt = New Table( "control_chart_part2 (5)",
	Add Rows( 18 ),
	New Column( "Sub-lot",
		Character( 1 ),
		"Nominal",
		Set Values( {"A", "A", "A", "B", "B", "B", "C", "C", "C", "D", "D", "D", "E", "E", "E", "F", "F", "F"} ),
		Set Display Width( 51 )
	),
	New Column( "Result",
		Numeric,
		"Continuous",
		Format( "Best", 12 ),
		Set Property( "Spec Limits", {LSL( 0.5 ), USL( 1.1 ), Target( 1 ), Show Limits( 0 )} ),
		Set Selected,
		Set Values( [0.9, 1.1, 1, 1.2, 1, 0.7, 1, 0.8, 1.1, ., ., ., ., ., ., ., ., .] ),
		Set Display Width( 48 )
	)
);
obj = dt << Process Capability(
	Process Variables( :Result[:"Sub-lot"n] ),
	Within Subgroup Variation( Average of Ranges ),
	Individual Detail Reports( 1 ),
	Capability Box Plots( 1 ),
	Goal Plot( 1 ),
	Capability Index Plot( 1 ),
	Process Performance Plot( 0 )
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create process capability object.
3. Select all rows, exclude, and hide.
4. Add Within Sigma Normalized Box Plots.
5. Add Overall Sigma Normalized Box Plots.
6. Close table without saving.
7. Create new table "control_chart_part2 (5)".
8. Add columns "Sub-lot" and "Result".
9. Create process capability object for new table.
10. Generate report from process capability object.



### Example 17
> **Summary**: Performs process capability analysis for variable N, utilizing the Moving Range Method and generating box plots to evaluate performance.

<!-- Keywords: #ProcessCapability, #MovingRangeMethod, #BoxPlots, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Process Capability(
	Process Variables( :N ),
	Spec Limits( :N( LSL( 5 ), Target( 10 ), USL( 15 ) ) ),
	Moving Range Method( Average of Moving Ranges ),
	Capability Box Plots( 1 ),
	Individual Detail Reports( 0 ),
	Goal Plot( 1 ),
	Capability Index Plot( 1 ),
	Process Performance Plot( 0 )
);
dt << select all rows << exclude << hide;
obj << Within Sigma Normalized Box Plots( 1 );
obj << Overall Sigma Normalized Box Plots( 1 );
```

**Code Explanation**:

1. Open data table;
2. Perform process capability analysis.
3. Set process variable to "N".
4. Define LSL, target, and USL for "N".
5. Use average of moving ranges method.
6. Enable capability box plots.
7. Disable individual detail reports.
8. Enable goal plot.
9. Enable capability index plot.
10. Hide excluded rows.



### Example 18
> **Summary**: Runs a Process Capability analysis for the 'Receive Application' process variable, generating an Interactive Capability Plot with specified LSL, Target, and USL values.

<!-- Keywords: #ProcessCapability, #InteractivePlot, #JMPScriptingLanguage, #MovingRangeMethod, #IndividualDetailReports -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Process Capability(
	Process Variables( :Receive Application ),
	Spec Limits( :Receive Application( LSL( 9 ), Target( 11 ), USL( 13 ) ) ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Receive Application << Process Capability Analysis(
		Interactive Capability Plot(
			1,
			New Values( LSL( 9 ), Target( 11 ), USL( 13 ), Mean( 13.0169243708232 ), Overall Sigma( 0.885132272382785 ) )
		)
	)}
);
rpt = obj << report;
actAxis = rpt["Interactive Capability Plot", AxisBox( 2 )];
actAxisMin = actAxis << get min;
actAxisMax = actAxis << get max;
```

**Code Explanation**:

1. Open data table;
2. Perform Process Capability analysis.
3. Set process variable to "Receive Application".
4. Define LSL, Target, and USL for "Receive Application".
5. Use Average of Moving Ranges method.
6. Enable Individual Detail Reports.
7. Generate Interactive Capability Plot.
8. Set new values for plot.
9. Retrieve report object.
10. Get minimum and maximum values of AxisBox(2).



### Example 19
> **Summary**: Runs a Process Capability analysis to evaluate the quality of 'skull length' data across different species, generating individual detail reports and capability box plots, while also running a Process Screening analysis with XBar and R charts.

<!-- Keywords: #ProcessCapability, #JMPScriptingLanguage, #DataAnalysis, #QualityControl, #StatisticalProcessControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Process Capability(
	Process Variables( :skull length[:species] ),
	Spec Limits( skull length( LSL( 355 ), Target( 370 ), USL( 400 ) ) ),
	Within Subgroup Variation( "Average of Ranges" ),
	Individual Detail Reports( 1 ),
	Capability Box Plots( 1 ),
	Goal Plot( 1 )
);
dtnew = obj << Save Spec Limits to New Table;
dtGoalSum = obj << Make Goal Plot Summary Table;
obj2 = dt << Process Screening(
	Y( :skull length ),
	Control Chart Type( "XBar and R" ),
	Subgroup( :species ),
	Goal Plot( 1 ),
	Use Limits Table( 1, Data Table( dtnew ), Process Variables( :Process ), LSL( :LSL ), USL( :USL ), Target( :Target ), Go )
);
dtsum = obj2 << Save Summary Table;
Close( dtnew, No save );
Close( dtGoalSum, No save );
```

**Code Explanation**:

1. Open data table;
2. Run Process Capability analysis.
3. Set process variables.
4. Define spec limits.
5. Use average of ranges.
6. Generate individual detail reports.
7. Create capability box plots.
8. Produce goal plot.
9. Save spec limits to new table.
10. Create goal plot summary table.
11. Run Process Screening analysis.
12. Set response variable.
13. Choose XBar and R chart.
14. Define subgroups.
15. Generate goal plot.
16. Use limits from new table.
17. Save summary table.
18. Close new table without saving.
19. Close goal plot summary table without saving.



### Example 20
> **Summary**: Performs process capability analysis to evaluate the quality of skull length measurements across different species, generating individual detail reports and capability box plots.

<!-- Keywords: #ProcessCapabilityAnalysis, #JMPScriptingLanguage, #DataTableManipulation, #GoalPlotSummary, #ProcessScreening -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Process Capability(
	Process Variables( :skull length[:species] ),
	Spec Limits( skull length( LSL( 355 ), Target( 370 ), USL( 400 ) ) ),
	Within Subgroup Variation( "Average of Ranges" ),
	Individual Detail Reports( 1 ),
	Capability Box Plots( 1 ),
	Goal Plot( 1 )
);
dtnew = obj << Save Spec Limits to New Table;
dtGoalSum = obj << Make Goal Plot Summary Table;
obj2 = dt << Process Screening(
	Y( :skull length ),
	Control Chart Type( "XBar and R" ),
	Subgroup( :species ),
	Goal Plot( 1 ),
	Use Limits Table( 1, Data Table( dtnew ), Process Variables( :Process ), LSL( :LSL ), USL( :USL ), Target( :Target ), Go )
);
dtsum = obj2 << Save Summary Table;
```

**Code Explanation**:

1. Open data table;
2. Perform process capability analysis.
3. Set process variables.
4. Define specification limits.
5. Use average of ranges.
6. Generate individual detail reports.
7. Create capability box plots.
8. Generate goal plot.
9. Save spec limits to new table.
10. Create goal plot summary table.
11. Perform process screening.
12. Set Y variable.
13. Choose XBar and R chart.
14. Set subgroup variable.
15. Generate goal plot.
16. Use limits from saved table.
17. Save summary table.



## Capability using Distribution
### Example 1
> **Summary**: Generates a distribution analysis with histograms for various columns in the data table, arranging them in 5 rows and displaying only histograms.

<!-- Keywords: #JMPScriptingLanguage, #DistributionAnalysis, #Histograms, #DataTable, #Visualization -->

**Code**:
```jsl
// Distributions histogram only
// Open data table
dt = Open("data_table.jmp");
// Distributions histogram only
Distribution(
	Arrange in Rows( 5 ),
	Nominal Distribution(
		Column( :unit ID ),
		Count Axis( 1 )
	),
	Nominal Distribution(
		Column( :Lot ),
		Count Axis( 1 )
	),
	Nominal Distribution(
		Column( :Part ),
		Count Axis( 1 )
	),
	Nominal Distribution(
		Column( :Ship event ),
		Count Axis( 1 )
	),
	Nominal Distribution(
		Column( :surface quality ),
		Count Axis( 1 )
	),
	Nominal Distribution(
		Column( :color ),
		Count Axis( 1 )
	),
	Continuous Distribution(
		Column( :X ),
		Count Axis( 1 ),
		Process Capability( 0 )
	),
	Continuous Distribution(
		Column( :Y ),
		Count Axis( 1 ),
		Process Capability( 0 )
	),
	Continuous Distribution(
		Column( :Z ),
		Count Axis( 1 ),
		Process Capability( 0 )
	),
	Continuous Distribution(
		Column( :Radius ),
		Count Axis( 1 ),
		Process Capability( 0 )
	),
	Continuous Distribution(
		Column( :Center ),
		Count Axis( 1 ),
		Process Capability( 0 )
	),
	Continuous Distribution(
		Column( :Gap ),
		Count Axis( 1 ),
		Process Capability( 0 )
	),
	Continuous Distribution(
		Column( :Slot Width ),
		Count Axis( 1 ),
		Process Capability( 0 )
	),
	Continuous Distribution(
		Column( :Slot Length ),
		Count Axis( 1 )
	),
	Continuous Distribution(
		Column( :Slot Depth ),
		Count Axis( 1 )
	),
	Histograms Only,
	SendToReport(
		Dispatch( {}, "unit ID",
			OutlineBox,
			{Close( 1 )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create distribution analysis.
3. Arrange in 5 rows.
4. Analyze unit ID distribution.
5. Analyze Lot distribution.
6. Analyze Part distribution.
7. Analyze Ship event distribution.
8. Analyze surface quality distribution.
9. Analyze color distribution.
10. Analyze X distribution.
11. Analyze Y distribution.
12. Analyze Z distribution.
13. Analyze Radius distribution.
14. Analyze Center distribution.
15. Analyze Gap distribution.
16. Analyze Slot Width distribution.
17. Analyze Slot Length distribution.
18. Analyze Slot Depth distribution.
19. Display histograms only.
20. Close unit ID outline.



### Example 2
> **Summary**: Visualizes the distribution of Actual Impurity values using a Lognormal capability analysis, with process capability metrics and column switcher for limited impurity levels.

<!-- Keywords: #LognormalDistribution, #ProcessCapability, #ColumnSwitcher, #JSLScripting, #JMP -->

**Code**:
```jsl
// Distribution Lognormal Capability
// Open data table
dt = Open("data_table.jmp");
// Distribution Lognormal Capability
Distribution(
	Continuous Distribution(
		Column( :Actual Impurity ),
		Quantiles( 0 ),
		Summary Statistics( 0 ),
		Always use column properties( 1 ),
		Histogram( 0 ),
		Vertical( 0 ),
		Outlier Box Plot( 0 ),
		Fit Lognormal(
			Process Capability(
				LSL( . ),
				Target( . ),
				USL( 2.5 ),
				Show as Graph Reference Lines
			)
		),
		Process Capability( 0 )
	),
	Column Switcher(
		:Actual Impurity,
		{:Actual Impurity,
		:"1.0 Limited Impurity"n,
		:"1.5 Limited Impurity"n,
		:"2.0 Limited Impurity"n,
		:"2.5 Limited Impurity"n}
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create distribution analysis.
3. Select continuous distribution.
4. Choose "Actual Impurity" column.
5. Disable quantiles display.
6. Disable summary statistics.
7. Use column properties.
8. Disable histogram display.
9. Disable vertical orientation.
10. Disable outlier box plot display.



### Example 3
> **Summary**: Opens a data table, fits a linear model using the EMS method with interactions and random effects to analyze the 'Lot Acceptance' column (nominal distribution) and 'Dissolution' column (continuous distribution).

<!-- Keywords: #JSLScripting, #DistributionAnalysis, #LinearModel, #EMSMethod, #RandomEffects -->

**Code**:
```jsl
// Distribution Y's
Distribution(
	Stack( 1 ),
	Nominal Distribution(
		Column( :Lot Acceptance ),
		Horizontal Layout( 1 ),
		Vertical( 0 )
	),
	Continuous Distribution(
		Column( :Dissolution ),
		Horizontal Layout( 1 ),
		Vertical( 0 ),
		Process Capability( 0 )
	)
);
```

**Code Explanation**:

1. Open distribution analysis.
2. Stack data vertically.
3. Analyze nominal distribution.
4. Select "Lot Acceptance" column.
5. Use horizontal layout.
6. Disable vertical layout.
7. Analyze continuous distribution.
8. Select "Dissolution" column.
9. Use horizontal layout.
10. Disable vertical layout.



### Example 4
> **Summary**: Creates a distribution analysis with specified settings, saving the journal file and closing the data table.

<!-- Keywords: #JSLScripting, #DistributionAnalysis, #JournalFile, #DataTableManagement, #EMSMethod -->

**Code**:
```jsl
dt = Open("data_table.jmp");
d = Distribution( Continuous Distribution( Column( :height ), Vertical( 0 ), Outlier Box Plot( 0 ), Process Capability( 0 ) ) );
d << save journal( "$temp\test.jrn" );
dt << close window( "NoSave" );
```

**Code Explanation**:

1. Open table.
2. Create distribution analysis.
3. Disable vertical display.
4. Disable outlier box plot.
5. Disable process capability.
6. Save journal file.
7. Close data table.



### Example 5
> **Summary**: Process of creating a distribution analysis with custom settings, saving the journal to a temporary location and closing the original data table.

<!-- Keywords: #JSLScriptingLanguage, #DistributionAnalysis, #JournalFile, #DataTableManagement, #Customization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
d = Distribution( Continuous Distribution( Column( :height ), Vertical( 0 ), Outlier Box Plot( 0 ), Process Capability( 0 ) ) );
d << save journal( "$temp\test.jrn" );
dt << close window( "NoSave" );
j = Open( "$temp\test.jrn" );
```

**Code Explanation**:

1. Open data table.
2. Create distribution analysis.
3. Disable vertical axis.
4. Disable outlier box plot.
5. Disable process capability.
6. Save journal to temp.
7. Close original data table.
8. Open saved journal.



### Example 6
> **Summary**: Fits a linear model using the EMS method with interactions and random effects in JMP, utilizing the Distribution platform to analyze continuous data.

<!-- Keywords: #JMPScriptingLanguage, #Distribution, #LinearModel, #EMSMethod, #RandomEffects -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Distribution( Continuous Distribution( Column( :height ), Process Capability( 0 ), Test Mean( 60 ) ) );
```

**Code Explanation**:

1. Open data table.
2. Launch Distribution platform.
3. Analyze continuous column.
4. Specify column "height".
5. Enable process capability analysis.
6. Set target mean to 60.
7. Perform test for mean.



### Example 7
> **Summary**: Runs the process capability analysis for the 'weight' column using a Cauchy distribution and displays confidence intervals with term value settings.

<!-- Keywords: #JMPScriptingLanguage, #Distribution, #ProcessCapabilityAnalysis, #CauchyDistribution, #ConfidenceIntervals -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Distribution(
	Continuous Distribution(
		Column( :weight ),
		Process Capability( 0 ),
		Fit Cauchy(
			Distribution Profiler( 1, Confidence Intervals( 1 ), Term Value( :weight( 118, N Levels( 200 ), Lock( 0 ), Show( 1 ) ) ) )
		)
	),
	Histograms Only
);
rpt = Current Report();
```

**Code Explanation**:

1. Open data table;
2. Launch Distribution platform.
3. Select continuous distribution analysis.
4. Analyze "weight" column.
5. Enable process capability analysis.
6. Fit Cauchy distribution.
7. Enable distribution profiler.
8. Show confidence intervals.
9. Set term value for weight.
10. Store current report.



### Example 8
> **Summary**: Analyzes and creates reports for two continuous distributions: one for 'POP' column with process capability evaluation, and another for 'Max deg. F Jan' column with normal distribution fitting.

<!-- Keywords: #JSLScripting, #ProcessCapability, #NormalDistribution, #ContinuousDistribution, #JMPReporting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Distribution(
	Continuous Distribution(
		Column( :POP ),
		Process Capability( LSL( 2000 ), Target( 4000 ), USL( 7000 ), Show as Graph Reference Lines, Show Within Capability( 0 ) )
	),
	Continuous Distribution(
		Column( :Max deg. F Jan ),
		Fit Normal( Process Capability( LSL( 20 ), Target( 40 ), USL( 60 ), Show Within Capability( 0 ) ) )
	)
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create Distribution object.
3. Analyze "POP" column.
4. Set LSL to 2000.
5. Set target to 4000.
6. Set USL to 7000.
7. Show reference lines graphically.
8. Disable within capability display.
9. Analyze "Max deg. F Jan" column.
10. Fit normal distribution.
11. Set LSL to 20.
12. Set target to 40.
13. Set USL to 60.
14. Disable within capability display.
15. Generate report.



### Example 9
> **Summary**: Analyzes and creates reports for PM10 column distribution using a continuous distribution model with process capability limits, enabling automatic recalculation.

<!-- Keywords: #JMPScriptingLanguage, #ContinuousDistribution, #ProcessCapability, #AutomaticRecalculation, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Distribution(
	Continuous Distribution( Column( :PM10 ), PpK Capability Labeling( 0 ), Process Capability( LSL( 5 ), Target( 40 ), USL( 75 ) ) )
);
obj << Automatic recalc( 1 );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Create distribution analysis.
3. Analyze PM10 column.
4. Set PpK labeling off.
5. Define process capability limits.
6. Enable automatic recalculation.
7. Generate analysis report.



### Example 10
> **Summary**: Fits a lognormal distribution to the OZONE column in a data table, with process capability probabilities set for quantile specification limits.

<!-- Keywords: #LognormalDistribution, #ProcessCapability, #QuantileSpecificationLimits, #JSLScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Distribution( Column( :OZONE ) );
obj << Fit Lognormal(
	Process Capability( Set Probabilities for Quantile Spec Limits( LSL Prob( 0.0001 ), Target Prob( 0.5 ), USL Prob( 0.9999 ) ) )
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create distribution object for OZONE.
3. Fit lognormal distribution.
4. Set process capability probabilities.
5. Define LSL probability as 0.0001.
6. Define target probability as 0.5.
7. Define USL probability as 0.9999.
8. Generate report object.



### Example 11
> **Summary**: Runs a comprehensive analysis for continuous data, including distribution visualization, process capability assessment, tolerance interval calculation, and statistical testing.

<!-- Keywords: #JSLScripting, #ContinuousDataAnalysis, #ProcessCapability, #ToleranceInterval, #StatisticalTesting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Distribution( Continuous Distribution( Column( :height ), Confidence Interval( 0.95 ) ) );
obj << Stem and Leaf( 1 );
obj << Process Capability( LSL( 50 ), Target( 60 ), USL( 80 ) );
obj << CDF Plot( 1 );
obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.9 ), Both, Parametric Normal );
obj << Test Std Dev( 1 );
obj << Fit Poisson;
obj << Test Mean( 0 );
obj << Fit Cauchy;
obj << Test Equivalence( Target( 3 ), Practical Difference( 0.2 ), Confidence( 0.95 ) );
obj << Prediction Interval( 0.95, 1 );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create distribution analysis for height.
3. Add stem and leaf plot.
4. Perform process capability analysis.
5. Generate CDF plot.
6. Calculate tolerance interval.
7. Test standard deviation.
8. Fit Poisson distribution.
9. Test mean value.
10. Fit Cauchy distribution.
11. Test equivalence.
12. Create prediction interval.
13. Save report object.



### Example 12
> **Summary**: Analyze continuous distribution for :height with process capability limits, generating a report on the results.

<!-- Keywords: #JSLScriptingLanguage, #ProcessCapability, #ContinuousDistribution, #ReportGeneration, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Distribution(
	Freq( :age ),
	Continuous Distribution( Column( :height ), Process Capability( LSL( . ), Target( . ), USL( 80 ) ) )
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Create Distribution object.
3. Set frequency column to :age.
4. Analyze continuous distribution of :height.
5. Define process capability limits.
6. Set Lower Specification Limit (LSL) to minimum.
7. Set Target to average.
8. Set Upper Specification Limit (USL) to 80.
9. Generate report from object.
10. Assign report to rpt variable.



### Example 13
> **Summary**: Analyze a continuous distribution with ZI Negative Binomial and retrieves fitted measures, while also creating a new table and analyzing nominal distribution with local data filtering.

<!-- Keywords: #JSLScriptingLanguage, #ContinuousDistribution, #NegativeBinomial, #LocalDataFilter, #NominalDistribution -->

**Code**:
```jsl
Open("data_table.jmp");
Distribution( Continuous Distribution( Column( :miles ), Process Capability( 0 ), Fit ZI Negative Binomial ) );
rpt = Current Report();
measures = rpt["miles", "Fitted ZI Negative Binomial Distribution", Number Col Box( 5 )] << get as matrix();
measures_bm = [108.760558363782, 115.960558363782, 118.294719854826];
dt = New Table( "test",
	Add Rows( 7 ),
	New Column( "a", Character, Nominal, Set Values( {"a", "a", "a", "b", "b", "a", "a"} ) ),
	New Column( "nominal", Continuous, Set Values( [1, 0, 1, ., ., 1, 1] ) )
);
obj = dt << Distribution(
	Stack( 1 ),
	Nominal Distribution(
		Column( :Nominal ),
		Horizontal Layout( 1 ),
		Vertical( 0 ),
		Count Axis( 1 ),
		Show Counts( 1 ),
		Axes on Left( 1 ),
		Confidence Interval( 0.95 )
	)
);
ldf = obj << Local Data Filter( Add Filter( columns( :a ), Where( :a == "a" ) ) );
ldf << (Filter Column( :a ) << invert selection);
ldf << (Filter Column( :a ) << invert selection);
rpt = Current Report();
ci_table = rpt["nominal", "Confidence Intervals", Table Box( 1 )] << get as matrix();
ci_table_bm = [1 0.2 0.0362241086324302 0.624465370237475 0.95, 4 0.8 0.375534629762525 0.96377589136757 0.95, 5 . . . .];
```

**Code Explanation**:

1. Open data_table data
2. Analyze miles with ZI Neg Binomial.
3. Retrieve fitted measures.
4. Define benchmark measures.
5. Create new table "test".
6. Add rows and columns to table.
7. Analyze nominal distribution.
8. Add local data filter for column "a".
9. Invert filter selection twice.
10. Retrieve confidence intervals.



### Example 14
> **Summary**: Analyze and visualize a continuous distribution using the Negative Binomial model, extracting measures and confidence intervals from the fitted distribution.

<!-- Keywords: #JSLScripting, #NegativeBinomialModel, #ContinuousDistribution, #DataAnalysis, #Visualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Distribution( Continuous Distribution( Column( :miles ), Process Capability( 0 ), Fit ZI Negative Binomial ) );
rpt = Current Report();
measures = rpt["miles", "Fitted ZI Negative Binomial Distribution", Number Col Box( 5 )] << get as matrix();
measures_bm = [108.760558363782, 115.960558363782, 118.294719854826];
Close( dt, no save );
dt = New Table( "test",
	Add Rows( 7 ),
	New Column( "a", Character, Nominal, Set Values( {"a", "a", "a", "b", "b", "a", "a"} ) ),
	New Column( "nominal", Continuous, Set Values( [1, 0, 1, ., ., 1, 1] ) )
);
obj = dt << Distribution(
	Stack( 1 ),
	Nominal Distribution(
		Column( :Nominal ),
		Horizontal Layout( 1 ),
		Vertical( 0 ),
		Count Axis( 1 ),
		Show Counts( 1 ),
		Axes on Left( 1 ),
		Confidence Interval( 0.95 )
	)
);
ldf = obj << Local Data Filter( Add Filter( columns( :a ), Where( :a == "a" ) ) );
ldf << (Filter Column( :a ) << invert selection);
ldf << (Filter Column( :a ) << invert selection);
rpt = Current Report();
ci_table = rpt["nominal", "Confidence Intervals", Table Box( 1 )] << get as matrix();
ci_table_bm = [1 0.2 0.0362241086324302 0.624465370237475 0.95, 4 0.8 0.375534629762525 0.96377589136757 0.95, 5 . . . .];
```

**Code Explanation**:

1. Open data table.
2. Perform distribution analysis on miles column.
3. Retrieve current report.
4. Extract measures from fitted ZI Negative Binomial Distribution.
5. Define benchmark measures.
6. Close data table without saving.
7. Create new test data table.
8. Add rows and columns to test table.
9. Perform distribution analysis on nominal column.
10. Apply local data filter and retrieve confidence intervals.



### Example 15
> **Summary**: Analyze and visualize miles column distribution using a ZI Negative Binomial distribution, retrieving fitted measures and comparing them to benchmark values.

<!-- Keywords: #JSLScriptingLanguage, #DistributionAnalysis, #NegativeBinomial, #Benchmarking, #DataVisualization -->

**Code**:
```jsl
Open("data_table.jmp");
Distribution( Continuous Distribution( Column( :miles ), Process Capability( 0 ), Fit ZI Negative Binomial ) );
rpt = Current Report();
measures = rpt["miles", "Fitted ZI Negative Binomial Distribution", Number Col Box( 5 )] << get as matrix();
measures_bm = [108.760558363782, 115.960558363782, 118.294719854826];
```

**Code Explanation**:

1. Open data table;
2. Analyze miles column distribution.
3. Fit ZI Negative Binomial distribution.
4. Retrieve current report.
5. Extract fitted measures.
6. Store extracted measures in matrix.
7. Define benchmark measures.
8. Compare extracted measures with benchmarks.



### Example 16
> **Summary**: Process of extracting and retrieving the Stability Index from a distribution analysis in JMP, utilizing Report() and Associative Array() functions.

<!-- Keywords: #JMPScriptingLanguage, #DistributionAnalysis, #StabilityIndex, #AssociativeArrays, #ReportFunction -->

**Code**:
```jsl
//Scripting the Report Layer Example
//Opens data table, runs distribution, shows 2 separate ways to get Stability Index from data
//Intended to be run in blocks rather than all at once
names default to here(1);
dt = Open("data_table.jmp");
dist = Distribution(
	Continuous Distribution(
		Column( :NPN1 ),
		Process Capability( Use Column Property Specs )
	),
	SendToReport(
		Dispatch(
			{"NPN1", "Process Capability", "NPN1 Capability", "Histogram"},
			"Process Capability Analysis Histogram",
			FrameBox,
			{Frame Size( 320, 20 )}
		)
	)
);
//run to this point, then manually show properties (Ctrl+Shift+i)
//Method 1: 
//	get list of all process summary strings
//	find where 'Stability Index' is
//	get list of all process summary numbers
//	lookup stability index location
lsta = Report(dist)["NPN1","Process Capability","NPN1 Capability","Process Summary",StringColBox(1)] << Get;
x = contains (lsta, "Stability Index");
lstb = Report(dist)["NPN1","Process Capability","NPN1 Capability","Process Summary",NumberColBox(1)] << Get;
stabilityindex = lstb[x];
//Method 2:
//	get lists of process summary strings and values
//	create associative array
//	lookup 'Stability Index' in associative array
//	This is better because other values are easy to look up later
lsta = Report(dist)["NPN1","Process Capability","NPN1 Capability","Process Summary",StringColBox(1)] << Get;
lstb = Report(dist)["NPN1","Process Capability","NPN1 Capability","Process Summary",NumberColBox(1)] << Get;
aa = Associative Array (eval list (lsta), eval list(lstb));
stabilityindex = aa["Stability Index"];
```

**Code Explanation**:

1. Set names default to here.
2. Open data table.
3. Run distribution analysis.
4. Adjust histogram frame size.
5. Get process summary strings.
6. Find 'Stability Index' position.
7. Get process summary numbers.
8. Retrieve stability index value.
9. Create associative array.
10. Lookup stability index in array.



## Capability using Control Chart
### Example 1
> **Summary**: Generates a control chart with capability analysis for the X column, including histogram customization and normal quantile plot. It also sends the report to a dispatch table.

<!-- Keywords: #JMPScriptingLanguage, #ControlChart, #CapabilityAnalysis, #HistogramCustomization, #NormalQuantilePlot -->

**Code**:
```jsl
// Control Chart
// Open data table
dt = Open("data_table.jmp");
// Control Chart
Control Chart(
	Sample Label( :Lot ),
	KSigma( 3 ),
	Chart Col(
		:X,
		XBar,
		R,
		Capability(
			Distribution(
				Continuous Distribution(
					Column( :X ),
					Quantiles( 0 ),
					Summary Statistics(
						0
					),
					Count Axis( 1 ),
					Outlier Box Plot( 0 ),
					Normal Quantile Plot(
						1
					),
					Capability Analysis(
						LSL( 107 ),
						USL( 147 ),
						Target( 127 ),
						Sigma(
							40.1484175601687
						)
					)
				)
			)
		)
	),
	SendToReport(
		Dispatch( {"Distributions", "X"},
			"Distrib Histogram", FrameBox,
			{
			DispatchSeg(
				Hist Seg( 1 ),
				Histogram Color( 42 )
			)}
		)
	)
);
```

**Code Explanation**:

1. Open table.
2. Create control chart.
3. Set sample label.
4. Define K Sigma.
5. Add chart column.
6. Specify XBar.
7. Specify R.
8. Add capability analysis.
9. Define distribution.
10. Customize histogram color.



### Example 2
> **Summary**: Generates a control chart and distribution for a given dataset, enabling capability analysis with LSL and USL values, while also visualizing individual measurements and outliers.

<!-- Keywords: #JMPScriptingLanguage, #ControlChart, #CapabilityAnalysis, #IndividualMeasurement, #OutlierDetection -->

**Code**:
```jsl
// Control Chart and Distribution
// Open data table
dt = Open("data_table.jmp");
// Control Chart and Distribution
Control Chart(
	Sample Label( :API Lot No ),
	Group Size( 1 ),
	KSigma( 3 ),
	Chart Col(
		:Disso,
		Individual Measurement(
			Test 1( 1 )
		),
		Capability(
			LSL( 70 ),
			USL( . ),
			Target( . )
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create control chart.
3. Set sample label.
4. Define group size.
5. Set KSigma value.
6. Add chart column.
7. Select Disso variable.
8. Apply individual measurement test.
9. Enable capability analysis.
10. Set LSL value.



### Example 3
> **Summary**: Creates a control chart with CUSUM method for monitoring weight distribution, utilizing Control Chart and Capability Analysis features in JMP.

<!-- Keywords: #JMPScriptingLanguage, #ControlChart, #CUSUMMethod, #CapabilityAnalysis, #DataVisualization -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Control Chart(
	Sample Label( :hour ),
	H( 2 ),
	Show Limits Legend( 0 ),
	Chart Col(
		:weight,
		CUSUM( Show Parameters( 1 ), Show ARL( 1 ), Two Sided( 1 ), Target( 8.1 ), Delta( 1 ), Sigma( 0.05 ), Head Start( 0.05 ) ),
		Capability(
			Distribution(
				Continuous Distribution(
					Column( :weight ),
					Quantiles( 0 ),
					Summary Statistics( 0 ),
					Outlier Box Plot( 0 ),
					Normal Quantile Plot( 1 ),
					Capability Analysis( LSL( -1 ), USL( 0.5 ), Target( -0.3 ), Sigma( 0.05 ) )
				)
			)
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create control chart object.
3. Set sample label column.
4. Configure control chart parameters.
5. Hide limits legend.
6. Add chart column for weight.
7. Apply CUSUM method.
8. Display CUSUM parameters.
9. Display ARL values.
10. Enable two-sided CUSUM.



### Example 4
> **Summary**: Creates a control chart for weight data, utilizing CUSUM and capability analysis to visualize process stability and performance.

<!-- Keywords: #JMPScriptingLanguage, #ControlChart, #CUSUMAnalysis, #CapabilityAnalysis, #DataVisualization -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Control Chart(
	Sample Label( :hour ),
	H( 2 ),
	Show Limits Legend( 0 ),
	Chart Col(
		:weight,
		CUSUM( Show Parameters( 1 ), Show ARL( 1 ), Two Sided( 1 ), Target( 8.1 ), Delta( 1 ), Sigma( 0.05 ), Head Start( 0.05 ) ),
		Capability(
			Distribution(
				Continuous Distribution(
					Column( :weight ),
					Quantiles( 0 ),
					Summary Statistics( 0 ),
					Outlier Box Plot( 0 ),
					Normal Quantile Plot( 1 ),
					Capability Analysis( LSL( -1 ), USL( 0.5 ), Target( -0.3 ), Sigma( 0.05 ) )
				)
			)
		)
	),
	SendToReport(
		Dispatch( {}, "Distributions", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Distributions", "weight"}, "5", ScaleBox, {Show Major Grid( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create control chart object.
3. Set sample label to hour.
4. Set horizontal limit to 2.
5. Hide limits legend.
6. Add weight column to chart.
7. Configure CUSUM settings.
8. Enable parameter and ARL display.
9. Set CUSUM to two-sided.
10. Define target, delta, sigma, and head start values.



### Example 5
> **Summary**: Creates a control chart with individual measurements and moving ranges, utilizing K-Sigma and capability analysis to evaluate data quality.

<!-- Keywords: #JMPScriptingLanguage, #ControlChart, #KSigma, #CapabilityAnalysis, #DataQuality -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart(
	Group Size( 1 ),
	KSigma( 3 ),
	Chart Col( Transform Column( "Exp[height]", Formula( Exp( :height ) ) ), Individual Measurement, Moving Range )
);
rpt = obj << report;
dtsum = obj << in new table;
Log Capture( dtsum2 = obj << in column );
dtsum3 = obj << save summaries;
dtsum4 = obj << save sigma;
obj << Capability( LSL( 0 ), USL( 10 ), Target( 5 ) );
Close( dt, no save );
```

**Code Explanation**:

1. Open data table.
2. Create control chart object.
3. Set group size to 1.
4. Set K Sigma to 3.
5. Add transformed height column.
6. Plot individual measurement and moving range.
7. Generate control chart report.
8. Save summary data in new table.
9. Log captured data.
10. Save additional summaries and sigmas.
11. Add capability analysis with limits.
12. Close original data table without saving.



### Example 6
> **Summary**: Create and execute a control chart for quality monitoring, utilizing JMP's Control Chart platform to analyze the Weight column with sample labels and capability analysis.

<!-- Keywords: #JMPControlChart, #CapabilityAnalysis, #QualityMonitoring, #StatisticalProcessControl, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart(
	Sample Label( :Sample ),
	KSigma( 3 ),
	Chart Col(
		:Weight,
		XBar,
		R,
		Capability(
			Distribution(
				Continuous Distribution(
					Column( :Weight ),
					Quantiles( 0 ),
					Summary Statistics( 0 ),
					Outlier Box Plot( 0 ),
					Normal Quantile Plot( 1 ),
					Capability Analysis( LSL( 16.5 ), USL( 23 ), Target( 21.5 ), Sigma( 1.07468084919883 ), Shewhart )
				)
			)
		)
	)
);
obj << Save script to data table;
obj2 = dt << Run Script( "Control chart by Sample" );
rpt = obj2 << report;
```

**Code Explanation**:

1. Open data table.
2. Create control chart object.
3. Set sample label to :Sample.
4. Set KSigma to 3.
5. Add Weight column to chart.
6. Use XBar chart type.
7. Use R chart type.
8. Perform capability analysis on Weight.
9. Set distribution to continuous.
10. Enable normal quantile plot.
11. Define LSL, USL, Target, and Sigma.
12. Use Shewhart method for capability.
13. Save script to data table.
14. Run saved script "Control chart by Sample".
15. Generate report from run script.



### Example 7
> **Summary**: Creates a control chart with individual measurement and moving range, utilizing transformed height data to analyze capability.

<!-- Keywords: #ControlChart, #CapabilityAnalysis, #IndividualMeasurement, #MovingRange, #TransformedData -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart(
	Group Size( 1 ),
	KSigma( 3 ),
	Chart Col( Transform Column( "Exp[height]", Formula( Exp( :height ) ) ), Individual Measurement, Moving Range )
);
rpt = obj << report;
dtsum = obj << in new table;
Log Capture( dtsum2 = obj << in column );
dtsum3 = obj << save summaries;
dtsum4 = obj << save sigma;
obj << Capability( LSL( 0 ), USL( 10 ), Target( 5 ) );
```

**Code Explanation**:

1. Open data table.
2. Create control chart object.
3. Set group size to 1.
4. Set KSigma to 3.
5. Add transformed height column.
6. Use individual measurement and moving range.
7. Generate report from chart.
8. Create new table from summary.
9. Capture log into new table.
10. Save summaries to table.
11. Save sigma to table.
12. Perform capability analysis.



### Example 8
> **Summary**: Creates a control chart for DIAMETER, including individual measurements and moving ranges, with capability analysis and report generation.

<!-- Keywords: #ControlChart, #JMPScriptingLanguage, #CapabilityAnalysis, #DataVisualization, #ProcessControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Control Chart(
	Use Excluded Points on MR,
	Group Size( 1 ),
	KSigma( 3 ),
	Chart Col(
		:DIAMETER,
		Individual Measurement,
		Moving Range,
		Capability(
			Distribution(
				Continuous Distribution(
					Column( :DIAMETER ),
					Quantiles( 0 ),
					Moments( 0 ),
					Outlier Box Plot( 0 ),
					Normal Quantile Plot( 1 ),
					Capability Analysis( LSL( 3 ), USL( 5 ), Target( 4 ) )
				)
			)
		)
	)
);
obj << Save Script to Data Table;
obj2 = dt << Run Script( "Control Chart" );
rpt = obj << report;
rpt2 = obj2 << report;
```

**Code Explanation**:

1. Open data table;
2. Create control chart object.
3. Use excluded points in MR.
4. Set group size to 1.
5. Set KSigma to 3.
6. Add DIAMETER to chart.
7. Include individual measurement.
8. Include moving range.
9. Perform capability analysis.
10. Save script to data table.



### Example 9
> **Summary**: Creates and configures a control chart for diameter measurements, including capability analysis and moving range calculation.

<!-- Keywords: #ControlChart, #CapabilityAnalysis, #MovingRange, #JSLScripting, #DataVisualization -->

**Code**:
```jsl
ut relative epsilon = 1e-10;
dt = Open("data_table.jmp");
obj = Control Chart(
	Use Excluded Points on MR,
	Group Size( 1 ),
	KSigma( 3 ),
	Chart Col(
		:DIAMETER,
		Individual Measurement,
		Moving Range,
		Capability(
			Distribution(
				Continuous Distribution(
					Column( :DIAMETER ),
					Quantiles( 0 ),
					Moments( 0 ),
					Outlier Box Plot( 0 ),
					Normal Quantile Plot( 1 ),
					Capability Analysis( LSL( 3 ), USL( 5 ), Target( 4 ) )
				)
			)
		)
	)
);
obj << Save Script to Data Table;
obj2 = dt << Run Script( "Control Chart" );
rpt = obj << report;
rpt2 = obj2 << report;
```

**Code Explanation**:

1. Define relative epsilon.
2. Open data table.
3. Create control chart object.
4. Configure control chart settings.
5. Add diameter column analysis.
6. Enable moving range.
7. Set control limits to 3 sigma.
8. Include capability analysis.
9. Save script to data table.
10. Run saved script on data table.



## Capability using Control Chart Builder
### Example 1
> **Summary**: Visualizes a control chart for surface quality using the Control Chart Builder, with points calculated as counts and limits set to Poisson sigma.

<!-- Keywords: #ControlChartBuilder, #PoissonSigma, #ShewhartAttribute, #JSLScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
// Control Chart Builder 3
// Open data table
dt = Open("data_table.jmp");
// Control Chart Builder 3
Control Chart Builder(
	Size( 524, 450 ),
	Show Control Panel( 0 ),
	Show Capability( 0 ),
	Class( Shewhart Attribute ),
	Variables( Y( :surface quality ) ),
	Chart(
		Points( Statistic( "Count" ) ),
		Limits( Sigma( "Poisson" ) )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create control chart builder.
3. Set size to 524x450.
4. Hide control panel.
5. Hide capability.
6. Set class to Shewhart Attribute.
7. Set Y variable to surface quality.
8. Add points with count statistic.
9. Set limits to Poisson sigma.



### Example 2
> **Summary**: Creates a control chart builder in JMP, specifying subgroup and response variables, and adding two charts for analysis.

<!-- Keywords: #JMPScriptingLanguage, #ControlChartBuilder, #DataAnalysis, #StatisticalProcessControl, #QualityImprovement -->

**Code**:
```jsl
// Control Chart Builder
// Open data table
dt = Open("data_table.jmp");
// Control Chart Builder
Control Chart Builder(
	Show Capability( 0 ),
	Variables(
		Subgroup( :Run ),
		Y( :Length )
	),
	Chart( Position( 1 ) ),
	Chart( Position( 2 ) )
);
```

**Code Explanation**:

1. Open data table.
2. Create control chart builder.
3. Disable capability analysis.
4. Define subgroup variable.
5. Define response variable.
6. Add first chart.
7. Add second chart.



### Example 3
> **Summary**: Visualizes an IMR Chart using Control Chart Builder, displaying two charts with moving range limits and enabling all warnings.

<!-- Keywords: #ControlChartBuilder, #IMRChart, #MovingRangeLimits, #Warnings, #JMPScriptingLanguage -->

**Code**:
```jsl
// IMR Chart
// Open data table
dt = Open("data_table.jmp");
// IMR Chart
Control Chart Builder(
	Show Capability( 0 ),
	Variables( Y( :Y ) ),
	Chart(
		Position( 1 ),
		Limits( Sigma( Moving Range ) ),
		Warnings(
			Test 1( 1 ),
			Test 2( 1 ),
			Test 3( 1 ),
			Test 4( 1 ),
			Test 5( 1 ),
			Test 6( 1 ),
			Test 7( 1 ),
			Test 8( 1 )
		)
	),
	Chart(
		Position( 2 ),
		Limits( Sigma( Moving Range ) )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create IMR Chart.
3. Hide capability report.
4. Set Y variable.
5. Add first chart.
6. Position first chart.
7. Set moving range limits.
8. Enable all warnings.
9. Add second chart.
10. Position second chart.



### Example 4
> **Summary**: This JSL script initializes the Control Chart Builder, defines subgroup and Y variables, enables all warning tests, and adds two chart positions to visualize data from a table.

<!-- Keywords: #ControlChartBuilder, #JMPScriptingLanguage, #DataVisualization, #QualityControl, #StatisticalProcessControl -->

**Code**:
```jsl
// Control Chart Builder
// Open data table
dt = Open("data_table.jmp");
// Control Chart Builder
Control Chart Builder(
	Show Capability( 0 ),
	Variables(
		Subgroup( :Run ),
		Y( :Length )
	),
	Chart(
		Position( 1 ),
		Warnings(
			Test 1( 1 ),
			Test 2( 1 ),
			Test 3( 1 ),
			Test 4( 1 ),
			Test 5( 1 ),
			Test 6( 1 ),
			Test 7( 1 ),
			Test 8( 1 )
		)
	),
	Chart( Position( 2 ) )
);
```

**Code Explanation**:

1. Open table.
2. Initialize Control Chart Builder.
3. Disable capability display.
4. Define subgroup variable.
5. Define Y variable.
6. Add first chart position.
7. Enable all warning tests.
8. Add second chart position.



### Example 5
> **Summary**: Opens a data table, initializes the Control Chart Builder, and creates two Shewhart charts with customized control limits.

<!-- Keywords: #ControlChartBuilder, #ShewhartCharts, #CustomLimits, #DataVisualization, #JMPScripting -->

**Code**:
```jsl
// Control Chart Builder
// Open data table
dt = Open("data_table.jmp");
// Control Chart Builder
Control Chart Builder(
	Show Capability( 0 ),
	Variables(
		Subgroup( :Run ),
		Y( :Length )
	),
	Chart(
		Position( 1 ),
		Set Control Limits(
			{LCL( 15.90519 ),
			UCL( 16.09131 ),
			Avg( 15.99825 )}
		)
	),
	Chart(
		Position( 2 ),
		Set Control Limits(
			{LCL( 0 ), UCL( 0.161693 ),
			Avg( 0.0495 )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Initialize Control Chart Builder.
3. Hide capability report.
4. Define subgroup variable.
5. Define response variable.
6. Create first chart.
7. Set control limits for first chart.
8. Create second chart.
9. Set control limits for second chart.



### Example 6
> **Summary**: Opens a data table, creates a Control Chart Builder with two charts and customizes the report appearance.

<!-- Keywords: #ControlChartBuilder, #JMPScriptingLanguage, #DataVisualization, #QualityControl, #StatisticalProcessControl -->

**Code**:
```jsl
// Control Chart Builder
// Open data table
dt = Open("data_table.jmp");
// Control Chart Builder
Control Chart Builder(
	Show Capability( 0 ),
	Variables(
		Subgroup( :Run ),
		Y( :Force ),
		Phase( :Site )
	),
	Chart(
		Position( 1 ),
		Limits( Sigma( "Moving Range" ) )
	),
	Chart(
		Position( 2 ),
		Limits( Sigma( "Moving Range" ) )
	),
	SendToReport(
		Dispatch( {},
			"Control Chart Builder",
			FrameBox,
			{
			DispatchSeg(
				Text Seg( 4 ),
				{Line Color( "None" ),
				Fill Color( "None" )}
			),
			DispatchSeg(
				Text Seg( 5 ),
				{Line Color( "None" ),
				Fill Color( "None" )}
			),
			DispatchSeg(
				Text Seg( 6 ),
				{Line Color( "None" ),
				Fill Color( "None" )}
			)}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create control chart builder.
3. Hide capability report.
4. Set subgroup variable.
5. Set Y variable.
6. Set phase variable.
7. Add first chart.
8. Set limits to moving range.
9. Add second chart.
10. Customize report appearance.



### Example 7
> **Summary**: Visualizes a three-way control chart of fill weight using Control Chart Builder, with charts for average points, moving range on means, and range limits.

<!-- Keywords: #ControlChartBuilder, #JSLScriptingLanguage, #FillWeight, #QualityControl, #StatisticalProcessControl -->

**Code**:
```jsl
// Three-Way Chart of Fill Weight
// Open data table
dt = Open("data_table.jmp");
// Three-Way Chart of Fill Weight
Control Chart Builder(
	Size( 526, 451 ),
	Show Control Panel( 0 ),
	Show Capability( 0 ),
	Variables(
		Subgroup( :Sample ),
		Y( :Fill Weight )
	),
	Chart(
		Position( 1 ),
		Points( Statistic( "Average" ) ),
		Limits( Sigma )
	),
	Chart(
		Position( 2 ),
		Points(
			Statistic(
				"Moving Range on Means"
			)
		),
		Limits( Sigma )
	),
	Chart(
		Position( 3 ),
		Points( Statistic( "Range" ) ),
		Limits( Sigma )
	)
);
```

**Code Explanation**:

1. Open table.
2. Create control chart builder.
3. Set size.
4. Hide control panel.
5. Hide capability.
6. Define variables.
7. Add first chart.
8. Set position.
9. Plot average points.
10. Add sigma limits.



### Example 8
> **Summary**: Creates a Control Chart Builder in JMP, specifying window size, hiding control panel and limit summaries, defining subgroup variables, and building a chart with height as the Y variable.

<!-- Keywords: #ControlChartBuilder, #JMPScriptingLanguage, #DataVisualization, #StatisticalProcessControl, #QualityControl -->

**Code**:
```jsl
Open("data_table.jmp");
Control Chart Builder(
	Size( 639, 514 ),
	Show Control Panel( 0 ),
	Show Limit Summaries( 0 ),
	Show Capability( 0 ),
	Variables( Subgroup( :weight ), Subgroup( :age, Position( 1 ) ), Y( :height ) )
);
```

**Code Explanation**:

1. Open data table;
2. Launch Control Chart Builder.
3. Set window size.
4. Hide control panel.
5. Hide limit summaries.
6. Hide capability.
7. Define subgroup variables.
8. Define Y variable.
9. Build chart.



### Example 9
> **Summary**: Opens a data table and generates a Control Chart using the weight, age, and height variables to visualize subgroup performance.

<!-- Keywords: #ControlChartBuilder, #JSLScriptingLanguage, #DataVisualization, #StatisticalProcessControl, #QualityControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Control Chart Builder(
	Size( 639, 514 ),
	Show Control Panel( 0 ),
	Show Limit Summaries( 0 ),
	Show Capability( 0 ),
	Variables( Subgroup( :weight ), Subgroup( :age, Position( 1 ) ), Y( :height ) )
);
```

**Code Explanation**:

1. Open data_table data
2. Launch Control Chart Builder.
3. Set window size.
4. Hide control panel.
5. Hide limit summaries.
6. Hide capability report.
7. Define weight as subgroup.
8. Define age as subgroup variable.
9. Position age at first position.
10. Define height as Y variable.



### Example 10
> **Summary**: Visualizes process capability analysis using Control Chart Builder, generating three charts to evaluate the performance of a manufacturing process. The script sets limits, enables warning tests, and sends reports to outline boxes.

<!-- Keywords: #ControlChartBuilder, #ProcessCapabilityAnalysis, #JMPScriptingLanguage, #ManufacturingProcess, #QualityControl -->

**Code**:
```jsl
Open("data_table.jmp");
Control Chart Builder(
	Size( 534, 448 ),
	Show Control Panel( 0 ),
	Variables( Subgroup( :wafer ), Y( :NPN2 ) ),
	Chart(
		Position( 1 ),
		Points( Statistic( "Average" ), Box Plots( 1 ), Show Points( 0 ), Show Connect Line( 0 ) ),
		Limits( Sigma( "Moving Range" ) ),
		Warnings(
			Test 1( 1 ),
			Test 2( 1 ),
			Test 3( 1 ),
			Test 4( 1 ),
			Test 5( 1 ),
			Test 6( 1 ),
			Test 7( 1 ),
			Test 8( 1 ),
			Test Beyond Limits( 1 )
		),
		Process Capability Analysis(
			Within Sigma Capability( 0 ),
			Histogram( 1, Show Spec Limits( 0 ), Show Target( 0 ), Show Count Axis( 1 ), Show Density Axis( 1 ) )
		)
	),
	Chart(
		Position( 2 ),
		Points( Statistic( "Moving Range on Means" ) ),
		Limits( Sigma( "Median Moving Range" ) ),
		Warnings( Test Beyond Limits( 1 ) )
	),
	Chart(
		Position( 3 ),
		Points( Statistic( "Moving Range on Std Dev" ) ),
		Limits( Sigma( "Median Moving Range" ) ),
		Warnings( Test Beyond Limits( 1 ) )
	),
	SendToReport(
		Dispatch( {"NPN2 Limit Summaries", "Process Capability
Analysis"}, "Process Summary", OutlineBox, {Close( 1 )} ),
		Dispatch( {"NPN2 Limit Summaries", "Process Capability
Analysis"}, "Overall Sigma Capability", OutlineBox, {Close( 1 )} ),
		Dispatch( {"NPN2 Limit Summaries", "Process Capability
Analysis"}, "Nonconformance", OutlineBox, {Close( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Launch Control Chart Builder.
3. Set chart size.
4. Hide control panel.
5. Define subgroup and Y variables.
6. Create first chart: average points, box plots.
7. Set limits using moving range.
8. Enable all warning tests.
9. Add process capability analysis: histogram, count, density axes.
10. Create second chart: moving range on means.
11. Set limits using median moving range.
12. Enable beyond limits test.
13. Create third chart: moving range on std dev.
14. Set limits using median moving range.
15. Enable beyond limits test.
16. Close specific report sections.



### Example 11
> **Summary**: Creates a Control Chart Builder with customized settings for visualizing Diameter data, utilizing Size and SendToReport features.

<!-- Keywords: #ControlChartBuilder, #JSLScriptingLanguage, #DataVisualization, #Customization, #SendToReport -->

**Code**:
```jsl
Open("data_table.jmp");
C1 = Control Chart Builder(
	Size( 1200, 550 ),
	Show Two Shewhart Charts( 0 ),
	Show Control Panel( 0 ),
	Show Capability( 0 ),
	Variables( Y( :Diameter ), Phase( :Phase ) ),
	Chart( Points( Statistic( "Individual" ) ), Limits( Sigma, Show Center Line( 0 ), Show Limits( 0 ) ) ),
	SendToReport(
		Dispatch( {}, "Control Chart Builder", OutlineBox, {Set Title( "IR Control  Chart" )} ),
		Dispatch( {}, "Diameter", ScaleBox,
			{Min( 3.0 ), Max( 5.5 ), Inc( 0.5 ), Minor Ticks( 0 ), Add Ref Line( 4.0, "Dashed", "Purple", "125000", 1 ),
			Add Ref Line( 4.5, "DashDotDot", "Cyan", "352000", 1 )}
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create Control Chart Builder.
3. Set window size to 1200x550.
4. Hide Two Shewhart Charts.
5. Hide Control Panel.
6. Hide Capability.
7. Set variables: Diameter for Y, Phase for X.
8. Plot Individual statistic points.
9. Hide center and limit lines.
10. Set title to "IR Control Chart".
11. Set Diameter axis min to 3.0.
12. Set Diameter axis max to 5.5.
13. Set Diameter axis increment to 0.5.
14. Hide minor ticks on Diameter axis.
15. Add reference line at 4.0 with dashed purple line.
16. Add reference line at 4.5 with dash-dot-dot cyan line.



### Example 12
> **Summary**: Creates a control chart builder to visualize diameter data, utilizing a customized chart size and axis settings.

<!-- Keywords: #ControlChartBuilder, #JSLScriptingLanguage, #DataVisualization, #StatisticalAnalysis, #Customization -->

**Code**:
```jsl
Open("data_table.jmp");
C1 = Control Chart Builder(
	Size( 1200, 550 ),
	Show Two Shewhart Charts( 0 ),
	Show Control Panel( 0 ),
	Show Capability( 0 ),
	Variables( Y( :Diameter ), Phase( :Phase ) ),
	Chart( Points( Statistic( "Individual" ) ), Limits( Sigma, Show Center Line( 0 ), Show Limits( 0 ) ) ),
	SendToReport(
		Dispatch( {}, "Control Chart Builder", OutlineBox, {Set Title( "IR Control  Chart" )} ),
		Dispatch( {}, "Diameter", ScaleBox,
			{Min( 3.0 ), Max( 5.5 ), Inc( 0.5 ), Minor Ticks( 0 ), Add Ref Line( 4.0, "Dashed", "Purple", "125000", 1 ),
			Add Ref Line( 4.5, "DashDotDot", "Cyan", "352000", 1 )}
		)
	)
);
Report( C1 )[AxisBox( 1 )] << Axis Settings( {Show Labels( 0 ), Show Major Ticks( 0 ), Show Minor Ticks( 0 )} );
```

**Code Explanation**:

1. Open data table.
2. Create control chart builder.
3. Set chart size to 1200x550.
4. Hide two Shewhart charts.
5. Hide control panel.
6. Hide capability analysis.
7. Define variables for diameter and phase.
8. Plot individual points with sigma limits.
9. Set chart title to "IR Control Chart".
10. Configure axis settings for diameter.



### Example 13
> **Summary**: Creates a control chart builder with three charts: average points, moving range points, and standard deviation points, using custom limits for each.

<!-- Keywords: #ControlChartBuilder, #JSLScriptingLanguage, #StatisticalProcessControl, #QualityControl, #DataAnalysis -->

**Code**:
```jsl
Open("data_table.jmp") << Control Chart Builder(
	Size( 534, 464 ),
	Show Control Panel( 0 ),
	Show Capability( 0 ),
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	Chart(
		Position( 1 ),
		Points( Statistic( "Average" ) ),
		Limits( Sigma( "Moving Range" ) ),
		Add Limits( {LCL( 4.1 ), UCL( 4.8 ), Avg( 4.2 )} )
	),
	Chart(
		Position( 2 ),
		Points( Statistic( "Moving Range on Means" ) ),
		Limits( Sigma( "Moving Range" ) ),
		Add Limits( {LCL( 0 ), UCL( 1.1 ), Avg( 0.5 )} )
	),
	Chart(
		Position( 3 ),
		Points( Statistic( "Standard Deviation" ) ),
		Limits( Sigma( "Standard Deviation" ) ),
		Add Limits( {LCL( 0 ), UCL( 0.5 ), Avg( 0.3 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create control chart builder.
3. Set window size.
4. Hide control panel.
5. Hide capability report.
6. Define subgroup and Y variables.
7. Add first chart: average points.
8. Set limits using moving range.
9. Add custom limits for average.
10. Add second chart: moving range points.
11. Set limits using moving range.
12. Add custom limits for moving range.
13. Add third chart: standard deviation points.
14. Set limits using standard deviation.
15. Add custom limits for standard deviation.



### Example 14
> **Summary**: Creates a control chart builder object with specific variables and settings, excluding and hiding selected rows.

<!-- Keywords: #ControlChartBuilder, #JSLScriptingLanguage, #DataExclusion, #HideRows, #Customization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder(
	Show Capability( 0 ),
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	Chart( Position( 1 ), Points( Box Plots( 1 ) ) ),
	Chart( Position( 2 ) )
);
dt << select rows( {235, 236, 237, 238, 239, 240} ) << exclude;
dt << select rows( {127, 128, 129, 130, 131, 132} ) << exclude << hide;
dt << select rows( {1} ) << exclude;
```

**Code Explanation**:

1. Open data table.
2. Create control chart builder object.
3. Hide capability report.
4. Set subgroup variable.
5. Set Y variable.
6. Add box plot to chart.
7. Select specific rows.
8. Exclude selected rows.
9. Select other rows.
10. Exclude and hide selected rows.



### Example 15
> **Summary**: Creates a control chart builder object with specific settings and row exclusions, enabling interactive exploration of data.

<!-- Keywords: #ControlChartBuilder, #DataExclusion, #InteractiveAnalysis, #JMPScriptingLanguage, #StatisticalVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder(
	Show Capability( 0 ),
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	Chart( Position( 1 ), Points( Box Plots( 1 ) ) ),
	Chart( Position( 2 ) )
);
dt << select rows( {235, 236, 237, 238, 239, 240} ) << exclude;
dt << select rows( {127, 128, 129, 130, 131, 132} ) << exclude << hide;
dt << select rows( {1} ) << exclude;
dt << select rows( {7} ) << hide;
```

**Code Explanation**:

1. Open data table.
2. Create control chart builder object.
3. Disable capability display.
4. Set subgroup and Y variables.
5. Add box plot to first position.
6. Add second chart position.
7. Exclude specific rows.
8. Exclude and hide additional rows.
9. Exclude first row.
10. Hide seventh row.



### Example 16
> **Summary**: Creates a control chart builder to monitor defects in a manufacturing process, utilizing median moving range limits and shaded zones.

<!-- Keywords: #ControlChartBuilder, #JMPScriptingLanguage, #QualityControl, #ManufacturingProcess, #StatisticalProcessControl -->

**Code**:
```jsl
Open("data_table.jmp") << Control Chart Builder(
	Show Control Panel( 0 ),
	Show Capability( 0 ),
	Variables( Subgroup( :Lot ), Y( :Name( "# defective" ) ) ),
	Chart(
		Position( 1 ),
		Points( Show Connect Line( 0 ) ),
		Limits( Sigma( "Median Moving Range" ), Shade Zones( 1 ) ),
		Warnings(
			Test 1( 1 ),
			Test 2( 1 ),
			Test 3( 1 ),
			Test 4( 1 ),
			Test 5( 1 ),
			Test 6( 1 ),
			Test 7( 1 ),
			Test 8( 1 ),
			Rule 2 2S( 1 ),
			Rule 10 X( 1 ),
			Test Beyond Limits( 1 )
		)
	),
	Chart( Position( 2 ), Points( Show Points( 0 ) ), Limits( Show Center Line( 0 ) ) )
);
```

**Code Explanation**:

1. Open data table;
2. Create control chart builder.
3. Hide control panel.
4. Hide capability report.
5. Define subgroup and Y variables.
6. Set chart position to 1.
7. Disable connect line for points.
8. Use median moving range for limits.
9. Enable shaded zones.
10. Apply multiple control chart tests.



### Example 17
> **Summary**: Creates a Control Chart Builder with filtered data, hiding control panel and capability analysis, and setting subgroup and Y variables.

<!-- Keywords: #ControlChartBuilder, #DataFiltering, #JSLScripting, #StatisticalAnalysis, #Visualization -->

**Code**:
```jsl
Open("data_table.jmp") << Control Chart Builder(
	Show Control Panel( 0 ),
	Show Capability( 0 ),
	Variables( Subgroup( :Day ), Y( :Delay ) ),
	Local Data Filter(
		Add Filter( columns( :Reason ), Where( :Reason == {"Fog", "Late", "Mechanical"} ), Display( :Reason, Size( 160, 119 ) ) )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Launch Control Chart Builder.
3. Hide control panel.
4. Hide capability analysis.
5. Set subgroup variable.
6. Set Y variable.
7. Add local data filter.
8. Filter by specific reasons.
9. Display filter settings.



### Example 18
> **Summary**: Creates a Control Chart Builder in JMP, filtering data by specific reasons and hiding unnecessary panels.

<!-- Keywords: #JMPScriptingLanguage, #ControlChartBuilder, #DataFiltering, #LocalDataFilter, #JSLScript -->

**Code**:
```jsl
Open("data_table.jmp") << Control Chart Builder(
	Show Control Panel( 0 ),
	Show Excluded Region( 0 ),
	Show Capability( 0 ),
	Variables( Subgroup( :Day ), Y( :Delay ) ),
	Chart( Position( 1 ), Points( Show Points( 0 ) ) ),
	Local Data Filter(
		Width( 160 ),
		Add Filter( columns( :Reason ), Where( :Reason == {"Fog", "Late", "Mechanical"} ), Display( :Reason, Height( 119 ) ) )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create Control Chart Builder.
3. Hide control panel.
4. Hide excluded region.
5. Hide capability analysis.
6. Set subgroup variable.
7. Set response variable.
8. Position chart.
9. Hide data points.
10. Add local data filter.



### Example 19
> **Summary**: Creates a control chart builder for analyzing defect proportion in a manufacturing process, utilizing Shewhart Attribute charts and local data filtering.

<!-- Keywords: #ControlChartBuilder, #ShewhartAttribute, #LocalDataFiltering, #DefectAnalysis, #ManufacturingProcess -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Control Chart Builder(
	Size( 553, 402 ),
	Show Control Panel( 0 ),
	Show Alarm Report( 1 ),
	Show Capability( 0 ),
	Class( Shewhart Attribute ),
	Variables( Subgroup( :Lot ), Y( :Name( "# defective" ) ), n Trials( :Lot Size ) ),
	Chart( Points( Statistic( "Proportion" ) ), Limits( Sigma( "Binomial" ) ) ),
	Local Data Filter( Add Filter( columns( :Lot Size 2 ), Where( :Lot Size 2 >= 373 & :Lot Size 2 <= 415 ) ) ),
	SendToReport(
		Dispatch( {}, "Control Chart Builder", FrameBox,
			Add Pin Annotation(
				Seg( Marker Seg( 1 ) ),
				Index( 6 ),
				Index Row( 9 ),
				UniqueID( -1121052642 ),
				FoundPt( {579, 179} ),
				Origin( {9.92505118141551, 0.0125415726920956} ),
				RightOfCenter( 1 ),
				Tag Line( 1 )
			)
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create control chart builder.
3. Set chart size.
4. Hide control panel.
5. Show alarm report.
6. Hide capability report.
7. Set chart type to Shewhart Attribute.
8. Define variables: subgroup, Y, n Trials.
9. Configure chart for proportion statistic.
10. Apply local data filter on Lot Size 2.



### Example 20
> **Summary**: Creates a control chart builder with moving range limits for subgroup analysis, filtering sites 1 and 3.

<!-- Keywords: #ControlChartBuilder, #MovingRangeLimits, #SubgroupAnalysis, #DataFiltering, #JMPScriptingLanguage -->

**Code**:
```jsl
Open("data_table.jmp");
Control Chart Builder(
	Size( 534, 464 ),
	Show Control Panel( 0 ),
	Show Capability( 0 ),
	Variables( Subgroup( :Run ), Y( :Force ), Phase( :Site ) ),
	Chart( Position( 1 ), Limits( Sigma( "Moving Range" ) ) ),
	Chart( Position( 2 ), Limits( Sigma( "Moving Range" ) ) ),
	Local Data Filter( Add Filter( columns( :Site ), Where( :Site == {1, 3} ) ) ), 
);
```

**Code Explanation**:

1. Open data table;
2. Create control chart builder.
3. Set window size.
4. Hide control panel.
5. Hide capability report.
6. Define variables: subgroup, Y, phase.
7. Add first chart with moving range limits.
8. Add second chart with moving range limits.
9. Apply local data filter.
10. Filter sites 1 and 3.



### Example 21
> **Summary**: Creates a control chart builder in JMP, specifying window size, hiding control panel and capability report, defining variables, and plotting individual points.

<!-- Keywords: #JMPScriptingLanguage, #ControlChartBuilder, #DataVisualization, #StatisticalAnalysis, #JSLScript -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder(
	Size( 531, 464 ),
	Show Control Panel( 0 ),
	Show Capability( 0 ),
	Variables( Subgroup( :Sports ), Y( :Grade ), Phase( :Grades ) ),
	Chart( Position( 1 ), Points( Individual Points( 1 ) ) )
);
```

**Code Explanation**:

1. Open data table.
2. Create control chart builder.
3. Set window size.
4. Hide control panel.
5. Hide capability report.
6. Define variables: subgroup, Y, phase.
7. Add chart position.
8. Plot individual points.
9. Assign chart to object.
10. End script.



### Example 22
> **Summary**: Creates a Control Chart Builder with specific settings to visualize height data, excluding rows 4-7 and hiding control panel, excluded region, limit summaries, and capability analysis.

<!-- Keywords: #ControlChartBuilder, #JSLScriptingLanguage, #DataVisualization, #StatisticalAnalysis, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << select rows( {4, 5, 6, 7} ) << Hide << Exclude;
Control Chart Builder(
	Size( 500, 400 ),
	Show Control Panel( 0 ),
	Show Excluded Region( 0 ),
	Show Limit Summaries( 0 ),
	Show Capability( 0 ),
	Variables( Y( :height ) ),
	Chart( Position( 1 ), Points( Show Points( 0 ) ) ),
	Chart( Position( 2 ), Points( Show Points( 0 ) ) )
);
```

**Code Explanation**:

1. Open data table.
2. Select rows 4-7.
3. Hide selected rows.
4. Exclude selected rows.
5. Create Control Chart Builder.
6. Set window size to 500x400.
7. Hide control panel.
8. Hide excluded region.
9. Hide limit summaries.
10. Hide capability analysis.



### Example 23
> **Summary**: Creates a control chart builder to visualize and analyze data from a specified data table, with customizable window size, hidden control panel, and defined subgroup and response variables.

<!-- Keywords: #ControlChartBuilder, #DataVisualization, #JMPScriptingLanguage, #StatisticalAnalysis, #DataExploration -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
Control Chart Builder( Size( 400, 300 ), Show Control Panel( 0 ), Show Capability( 0 ), Variables( Subgroup( :Temp ), Y( :Hours ) ) );
```

**Code Explanation**:

1. Open data table;
2. Create control chart builder.
3. Set window size.
4. Hide control panel.
5. Hide capability report.
6. Define subgroup variable.
7. Define response variable.



### Example 24
> **Summary**: Creates a control chart builder with moving range limits and subgroup size set to 5, utilizing the Control Chart Builder platform in JMP.

<!-- Keywords: #ControlChartBuilder, #MovingRangeLimits, #SubgroupSize, #JMPScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << set row states(
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11520, 11520, 11520, 11520, 11520, 176, 176, 176, 176, 176, 6, 6, 6, 6, 6, 2, 2, 2, 2, 2,
	4, 4, 4, 4, 4]
);
Control Chart Builder(
	Size( 540, 464 ),
	Show Control Panel( 0 ),
	Show Capability( 0 ),
	Variables( Y( :height ) ),
	Set Subgroup Size( 5 ),
	Chart( Position( 2 ), Points( Statistic( "Moving Range on Means" ) ), Limits( Sigma( "Moving Range" ) ) )
);
```

**Code Explanation**:

1. Open data table.
2. Set row states in data table.
3. Create control chart builder.
4. Set size of control chart.
5. Hide control panel.
6. Hide capability analysis.
7. Add height variable to Y-axis.
8. Set subgroup size to 5.
9. Add moving range on means plot.
10. Add moving range limits.



### Example 25
> **Summary**: Creates a Control Chart Builder with two charts, configuring subgroup and Y variables, and setting window size.

<!-- Keywords: #ControlChartBuilder, #JSLScriptingLanguage, #DataVisualization, #StatisticalProcessControl, #QualityControl -->

**Code**:
```jsl
Open("data_table.jmp") << Control Chart Builder(
	Size( 534, 448 ),
	Show Control Panel( 0 ),
	Show Capability( 0 ),
	Variables( Subgroup( :Date ), Y( :Abrasion ) ),
	Chart( Position( 1 ), Points( Statistic( "Standard Deviation" ), Show Points( 0 ) ), Limits( Sigma( "Standard Deviation" ) ) ),
	Chart( Position( 2 ), Points( Statistic( "Moving Range on Means" ), Show Points( 0 ) ), Limits( Sigma( "Moving Range" ) ) )
);
```

**Code Explanation**:

1. Open data table;
2. Create Control Chart Builder.
3. Set window size.
4. Hide control panel.
5. Hide capability analysis.
6. Define subgroup variable.
7. Define Y variable.
8. Add first chart.
9. Set chart position.
10. Configure points and limits.



### Example 26
> **Summary**: Creates a Shewhart Attribute control chart to analyze Sugars data for Manufacturer and Calories equal 190, utilizing Control Chart Builder.

<!-- Keywords: #ControlChartBuilder, #ShewhartAttribute, #JSLScriptingLanguage, #DataVisualization, #QualityControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << select where( :Calories == 190 );
Control Chart Builder(
	Size( 700, 488 ),
	Show Control Panel( 0 ),
	Show Limit Summaries( 0 ),
	Show Capability( 0 ),
	Class( Shewhart Attribute ),
	Variables( Subgroup( :Manufacturer ), Y( :Sugars ), Phase( :Calories ) ),
	Chart( Points( Statistic( "Count" ) ), Limits( Sigma( "Poisson" ) ) )
);
```

**Code Explanation**:

1. Open data table;
2. Select rows where Calories equal 190.
3. Create control chart builder.
4. Set chart size.
5. Hide control panel.
6. Hide limit summaries.
7. Hide capability.
8. Set chart type to Shewhart Attribute.
9. Define variables: Manufacturer, Sugars, Calories.
10. Plot points with Poisson limits.



### Example 27
> **Summary**: Creates a Control Chart Builder window with customized settings, including subgroups and Y variable configuration.

<!-- Keywords: #ControlChartBuilder, #JSLScriptingLanguage, #DataVisualization, #StatisticalAnalysis, #JMP -->

**Code**:
```jsl
Open("data_table.jmp");
Control Chart Builder(
	Size( 528, 464 ),
	Show Control Panel( 0 ),
	Show Capability( 0 ),
	Variables( Subgroup( :Gender ), Subgroup( :Age, Position( 1 ) ), Subgroup( :BP, Position( 1 ) ), Y( :BMI ) ),
	Chart( Position( 1 ), Points( Individual Points( 1 ), Show Points( 0 ), Show Connect Line( 0 ) ), Limits( Show Limits( 0 ) ) ),
	Chart( Position( 2 ), Limits( Show Limits( 0 ) ) )
);
```

**Code Explanation**:

1. Open data table;
2. Create Control Chart Builder window.
3. Set window size 528x464.
4. Hide control panel.
5. Hide capability report.
6. Define subgroups: Gender, Age, BP.
7. Set BMI as Y variable.
8. Configure first chart for individual points.
9. Disable point display.
10. Disable connect line.



### Example 28
> **Summary**: Creates a control chart for a subgrouped response variable, utilizing the Control Chart Builder platform in JMP.

<!-- Keywords: #ControlChartBuilder, #JMPScriptingLanguage, #DataVisualization, #StatisticalAnalysis, #QualityControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << select rows( {38} ) << Hide << exclude;
dt << Control Chart Builder(
	Size( 479, 376 ),
	Show Control Panel( 0 ),
	Show Capability( 0 ),
	Variables( Subgroup( :age ), Y( :height ) ),
	SendToReport( Dispatch( {}, "height Limit Summaries", OutlineBox, {Close( 1 )} ) )
);
```

**Code Explanation**:

1. Open data table;
2. Select row 38.
3. Hide selected row.
4. Exclude selected row.
5. Create control chart.
6. Set chart size.
7. Hide control panel.
8. Hide capability report.
9. Define subgroup variable.
10. Define response variable.



### Example 29
> **Summary**: Creates a Control Chart Builder with specific settings, selecting rows 4-7 and excluding them from the analysis.

<!-- Keywords: #ControlChartBuilder, #JSLScriptingLanguage, #DataSelection, #Exclusion, #Visualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << select rows( {4, 5, 6, 7} ) << Hide << Exclude;
obj = dt << Control Chart Builder(
	Size( 500, 400 ),
	Show Control Panel( 0 ),
	Show Excluded Region( 0 ),
	Show Capability( 0 ),
	Variables( Y( :height ) )
);
```

**Code Explanation**:

1. Open data table;
2. Select rows 4-7.
3. Hide selected rows.
4. Exclude selected rows.
5. Create Control Chart Builder.
6. Set size to 500x400.
7. Hide control panel.
8. Hide excluded region.
9. Hide capability.
10. Add height variable to Y.



### Example 30
> **Summary**: Creates a control chart builder object with specific settings for size, variables, and tests.

<!-- Keywords: #ControlChartBuilder, #JSLScriptingLanguage, #DataVisualization, #QualityControl, #StatisticalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder(
	Size( 440, 340 ),
	Show Control Panel( 0 ),
	Show Capability( 0 ),
	Variables( Subgroup( :Day ), Y( :Delay ) ),
	Chart(
		Position( 1 ),
		Warnings( Test 1( 1 ), Test 2( 1 ), Test 3( 1 ), Test 4( 1 ), Test 5( 1 ), Test 6( 1 ), Test 7( 1 ), Test 8( 1 ) )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create control chart builder object.
3. Set window size to 440x340.
4. Hide control panel.
5. Hide capability analysis.
6. Define subgroup variable as Day.
7. Define response variable as Delay.
8. Add chart to control chart builder.
9. Position chart at 1.
10. Enable all eight control chart tests.



### Example 31
> **Summary**: Creates a control chart builder with individual points and box plots, enabling 2S and beyond limits warnings, and adding a local data filter to bias criteria.

<!-- Keywords: #ControlChartBuilder, #JSLScriptingLanguage, #DataFiltering, #WarningRules, #StatisticalAnalysis -->

**Code**:
```jsl
Open("data_table.jmp");
Control Chart Builder(
	Size( 534, 456 ),
	Show Control Panel( 0 ),
	Show Capability( 0 ),
	Variables( Subgroup( :Part ), Y( :Response ) ),
	Chart( Position( 1 ), Points( Individual Points( 1 ), Box Plots( 1 ) ), Warnings( Rule 1 2S( 1 ), Test Beyond Limits( 1 ) ) ),
	Chart( Position( 2 ), Limits( Sigma( "Standard Deviation" ) ), Warnings( Test Beyond Limits( 1 ) ) ),
	Local Data Filter( Add Filter( columns( :Bias ), Where( :Bias >= -0.2333 & :Bias <= 1.1 ) ) )
);
```

**Code Explanation**:

1. Open data table.
2. Create control chart builder.
3. Set window size.
4. Hide control panel.
5. Hide capability analysis.
6. Define subgroup and response variables.
7. Add individual points and box plots.
8. Enable 2S and beyond limits warnings.
9. Add limits chart.
10. Set sigma limits type.
11. Enable beyond limits test.
12. Add local data filter.
13. Set bias filter criteria.



### Example 32
> **Summary**: Creates a Control Chart Builder with two charts, hiding control panel and capability analysis, and setting Y variable to 'pop-m'.

<!-- Keywords: #ControlChartBuilder, #JSLScriptingLanguage, #DataVisualization, #StatisticalAnalysis, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Control Chart Builder(
	Size( 534, 464 ),
	Show Control Panel( 0 ),
	Show Capability( 0 ),
	Variables( Y( :Name( "pop- m" ) ) ),
	Chart( Position( 1 ), Points( Show Points( 0 ) ), Warnings( Test 1( 1 ), ) ),
	Chart( Position( 2 ), Points( Show Points( 0 ) ) )
);
```

**Code Explanation**:

1. Open data table;
2. Create Control Chart Builder.
3. Set window size 534x464.
4. Hide control panel.
5. Hide capability analysis.
6. Set Y variable to "pop- m".
7. Add first chart.
8. Position first chart at 1.
9. Hide points in first chart.
10. Enable Test 1 warning in first chart.



### Example 33
> **Summary**: Creates a Control Chart Builder with specified variables and settings, enabling users to visualize and analyze data.

<!-- Keywords: #ControlChartBuilder, #JMPScriptingLanguage, #DataVisualization, #StatisticalProcessControl, #QualityControl -->

**Code**:
```jsl
Open("data_table.jmp") << Control Chart Builder(
	Size( 531, 464 ),
	Show Control Panel( 0 ),
	Show Capability( 0 ),
	Variables( Y( :Weight, :Weight 2 ) )
);
```

**Code Explanation**:

1. Open data table;
2. Launch Control Chart Builder.
3. Set window size.
4. Hide control panel.
5. Hide capability report.
6. Add variables to chart.



### Example 34
> **Summary**: Creates a control chart builder with a local data filter to analyze weight data from a specific sample range.

<!-- Keywords: #ControlChartBuilder, #LocalDataFilter, #JSLScriptingLanguage, #WeightDataAnalysis, #SampleRangeFilter -->

**Code**:
```jsl
Open("data_table.jmp") << Control Chart Builder(
	Size( 531, 464 ),
	Show Control Panel( 0 ),
	Show Capability( 0 ),
	Variables( Y( :Weight 2 ) ),
	Local Data Filter( Mode( Include( 0 ) ), Inverse( 1 ), Add Filter( columns( :Sample ), Where( :Sample >= 4.8 & :Sample <= 6 ) ) )
);
```

**Code Explanation**:

1. Open data table.
2. Launch Control Chart Builder.
3. Set window size.
4. Hide control panel.
5. Hide capability analysis.
6. Select variable for chart.
7. Add local data filter.
8. Set filter mode to exclude.
9. Define filter condition.
10. Apply filter to chart.



### Example 35
> **Summary**: Creates a Control Chart Builder to analyze lead data by region and state, with standard deviation points and limits based on standard deviation.

<!-- Keywords: #ControlChartBuilder, #JSLScriptingLanguage, #DataAnalysis, #StatisticalProcessControl, #QualityControl -->

**Code**:
```jsl
Open("data_table.jmp") << Control Chart Builder(
	Size( 534, 464 ),
	Show Control Panel( 0 ),
	Show Capability( 0 ),
	Variables( Subgroup( :Region ), Subgroup( :State, Position( 1 ) ), Y( :Lead ) ),
	Chart( Position( 2 ), Points( Statistic( "Standard Deviation" ) ), Limits( Sigma( "Standard Deviation" ) ) )
);
```

**Code Explanation**:

1. Open data_table data
2. Initiate Control Chart Builder.
3. Set window size to 534x464.
4. Hide control panel.
5. Hide capability report.
6. Define Region as subgroup variable.
7. Define State as subgroup variable.
8. Set Lead as Y variable.
9. Position chart at 2.
10. Plot standard deviation points.
11. Set limits based on standard deviation.



### Example 36
> **Summary**: Creates a Control Chart Builder with binomial limits, filtering data by Lot Size 2, and displaying alarm reports.

<!-- Keywords: #ControlChartBuilder, #BinomialLimits, #DataFiltering, #AlarmReports, #JMPScriptingLanguage -->

**Code**:
```jsl
Open("data_table.jmp") << Control Chart Builder(
	Size( 553, 402 ),
	Show Control Panel( 0 ),
	Show Alarm Report( 1 ),
	Show Capability( 0 ),
	Class( Shewhart Attribute ),
	Variables( Subgroup( :Lot ), Y( :Name( "# defective" ) ), n Trials( :Lot Size ) ),
	Chart( Points( Statistic( "Proportion" ) ), Limits( Sigma( "Binomial" ) ) ),
	Local Data Filter( Add Filter( columns( :Lot Size 2 ), Where( :Lot Size 2 >= 373 & :Lot Size 2 <= 415 ) ) )
);
```

**Code Explanation**:

1. Open data table;
2. Launch Control Chart Builder.
3. Set window size.
4. Hide control panel.
5. Show alarm report.
6. Hide capability report.
7. Use Shewhart attribute class.
8. Define variables: subgroup, Y, and n Trials.
9. Plot proportion points with binomial limits.
10. Add local data filter for Lot Size 2.



### Example 37
> **Summary**: Creates a control chart builder object with specified window size, variables, and chart positions.

<!-- Keywords: #ControlChartBuilder, #JSLScriptingLanguage, #DataVisualization, #StatisticalAnalysis, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << select rows( {1} ) << hide;
obj = dt << Control Chart Builder(
	Size( 534, 450 ),
	Show Control Panel( 0 ),
	Show Capability( 0 ),
	Variables( Subgroup( :age ), Y( :height ) ),
	Chart( Position( 1 ) ),
	Chart( Position( 2 ) )
);
```

**Code Explanation**:

1. Open data table.
2. Select first row.
3. Hide selected row.
4. Create control chart builder object.
5. Set window size.
6. Hide control panel.
7. Hide capability report.
8. Define subgroup variable.
9. Define response variable.
10. Add first chart position.
11. Add second chart position.



### Example 38
> **Summary**: Creates a control chart builder with customized settings and text segments appearance, utilizing the Control Chart Builder platform in JMP.

<!-- Keywords: #JMP, #ControlChartBuilder, #Customization, #TextSegments, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << select rows( [27] );
dt << Control Chart Builder(
	Size( 534, 464 ),
	Show Control Panel( 0 ),
	Show Limit Summaries( 0 ),
	Show Capability( 0 ),
	Variables( Subgroup( :Run ), Y( :Force ), Phase( :Site ) ),
	Chart( Position( 1 ), Points( Show Points( 0 ) ), Limits( Zones( 1 ) ) ),
	SendToReport(
		Dispatch( {}, "Control Chart Builder", FrameBox,
			{DispatchSeg( Text Seg( 4 ), {Line Color( "None" ), Fill Color( "None" )} ), DispatchSeg(
				Text Seg( 5 ),
				{Line Color( "None" ), Fill Color( "None" )}
			), DispatchSeg( Text Seg( 6 ), {Line Color( "None" ), Fill Color( "None" )} ), DispatchSeg(
				Text Seg( 7 ),
				{Line Color( "None" ), Fill Color( "None" )}
			), DispatchSeg( Text Seg( 8 ), {Line Color( "None" ), Fill Color( "None" )} ), DispatchSeg(
				Text Seg( 9 ),
				{Line Color( "None" ), Fill Color( "None" )}
			), DispatchSeg( Text Seg( 10 ), {Line Color( "None" ), Fill Color( "None" )} ), DispatchSeg(
				Text Seg( 11 ),
				{Line Color( "None" ), Fill Color( "None" )}
			), DispatchSeg( Text Seg( 12 ), {Line Color( "None" ), Fill Color( "None" )} ), DispatchSeg(
				Text Seg( 13 ),
				{Line Color( "None" ), Fill Color( "None" )}
			), DispatchSeg( Text Seg( 14 ), {Line Color( "None" ), Fill Color( "None" )} ), DispatchSeg(
				Text Seg( 15 ),
				{Line Color( "None" ), Fill Color( "None" )}
			), DispatchSeg( Text Seg( 16 ), {Line Color( "None" ), Fill Color( "None" )} ), DispatchSeg(
				Text Seg( 17 ),
				{Line Color( "None" ), Fill Color( "None" )}
			), DispatchSeg( Text Seg( 18 ), {Line Color( "None" ), Fill Color( "None" )} )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Select specific row.
3. Create control chart builder.
4. Set chart size.
5. Hide control panel.
6. Hide limit summaries.
7. Hide capability report.
8. Define variables for chart.
9. Configure chart settings.
10. Customize text segments appearance.



### Example 39
> **Summary**: Creates a Control Chart Builder with box plots, sigma limits, shaded zones, and warnings for quality control analysis.

<!-- Keywords: #ControlChartBuilder, #BoxPlots, #SigmaLimits, #ShadedZones, #Warnings -->

**Code**:
```jsl
Open("data_table.jmp") << Control Chart Builder(
	Size( 534, 448 ),
	Show Control Panel( 0 ),
	Show Limit Summaries( 0 ),
	Show Capability( 0 ),
	Variables( Subgroup( :wafer ), Y( :NPN1 ) ),
	Chart(
		Position( 1 ),
		Points( Box Plots( 1 ) ),
		Limits( Sigma( "Median Moving Range" ), Zones( 1 ), Shade Zones( 1 ) ),
		Warnings( Test Beyond Limits( 1 ) )
	),
	Chart( Position( 2 ), Warnings( Test Beyond Limits( 1 ) ) ),
	SendToReport(
		Dispatch( {}, "Control Chart Builder", FrameBox,
			Add Pin Annotation(
				Seg( Box Plot Seg( 12 ) ),
				Index( {1, 1} ),
				Index Row( {1, 1} ),
				UniqueID( -829695975 ),
				FoundPt( {295, 188} ),
				Origin( {11.0537190082645, 115.574343121707} ),
				Offset( {17, -45} ),
				RightOfCenter( 1 ),
				Tag Line( 1 )
			)
		),
		Dispatch( {}, "Control Chart Builder", FrameBox( 2 ),
			Add Pin Annotation(
				Seg( Marker Seg( 1 ) ),
				Index( 11 ),
				Index Row( 1154 ),
				UniqueID( -863146973 ),
				FoundPt( {292, 328} ),
				Origin( {10.9049586776859, 17.0648788101501} ),
				Offset( {-231, 78} ),
				RightOfCenter( 1 ),
				Tag Line( 1 )
			)
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Launch Control Chart Builder.
3. Set window size.
4. Hide control panel.
5. Hide limit summaries.
6. Hide capability report.
7. Define subgroup and Y variables.
8. Configure first chart: box plots, sigma limits, shaded zones, warnings.
9. Configure second chart: warnings.
10. Add pin annotations to both charts.



### Example 40
> **Summary**: Creates a control chart builder with box plots, sigma limits, and shaded zones for analyzing NPN1 data by wafer subgroup.

<!-- Keywords: #ControlChartBuilder, #BoxPlots, #SigmaLimits, #ShadedZones, #WaferSubgroup -->

**Code**:
```jsl
Open("data_table.jmp") << Control Chart Builder(
	Size( 534, 448 ),
	Show Control Panel( 0 ),
	Show Limit Summaries( 0 ),
	Show Capability( 0 ),
	Variables( Subgroup( :wafer ), Y( :NPN1 ) ),
	Chart(
		Position( 1 ),
		Points( Box Plots( 1 ) ),
		Limits( Sigma( "Median Moving Range" ), Zones( 1 ), Shade Zones( 1 ) ),
		Warnings( Test Beyond Limits( 1 ) )
	),
	Chart( Position( 2 ), Warnings( Test Beyond Limits( 1 ) ) )
);
```

**Code Explanation**:

1. Open data table;
2. Create control chart builder.
3. Set window size.
4. Hide control panel.
5. Hide limit summaries.
6. Hide capability report.
7. Define variables: subgroup, Y.
8. Add first chart: box plots, sigma limits, shaded zones.
9. Enable test beyond limits for first chart.
10. Add second chart: enable test beyond limits.



### Example 41
> **Summary**: Creates a control chart builder with customized settings, including window size, variable definitions, and text segment customization.

<!-- Keywords: #ControlChartBuilder, #JSLScriptingLanguage, #CustomizationOptions, #DataVisualization, #StatisticalAnalysis -->

**Code**:
```jsl
Open("data_table.jmp");
Control Chart Builder(
	Size( 534, 464 ),
	Show Control Panel( 0 ),
	Show Limit Summaries( 0 ),
	Show Capability( 0 ),
	Variables( Subgroup( :Run ), Y( :Force ), Phase( :Site ) ),
	Chart( Position( 1 ), Limits( Zones( 1 ), Shade Zones( 1 ) ) ),
	SendToReport(
		Dispatch( {}, "Control Chart Builder", FrameBox,
			{DispatchSeg( Text Seg( 4 ), {Line Color( "None" ), Fill Color( "None" )} ), DispatchSeg(
				Text Seg( 5 ),
				{Line Color( "None" ), Fill Color( "None" )}
			), DispatchSeg( Text Seg( 6 ), {Line Color( "None" ), Fill Color( "None" )} ), DispatchSeg(
				Text Seg( 7 ),
				{Line Color( "None" ), Fill Color( "None" )}
			), DispatchSeg( Text Seg( 8 ), {Line Color( "None" ), Fill Color( "None" )} ), DispatchSeg(
				Text Seg( 9 ),
				{Line Color( "None" ), Fill Color( "None" )}
			), DispatchSeg( Text Seg( 10 ), {Line Color( "None" ), Fill Color( "None" )} ), DispatchSeg(
				Text Seg( 11 ),
				{Line Color( "None" ), Fill Color( "None" )}
			), DispatchSeg( Text Seg( 12 ), {Line Color( "None" ), Fill Color( "None" )} ), DispatchSeg(
				Text Seg( 13 ),
				{Line Color( "None" ), Fill Color( "None" )}
			), DispatchSeg( Text Seg( 14 ), {Line Color( "None" ), Fill Color( "None" )} ), DispatchSeg(
				Text Seg( 15 ),
				{Line Color( "None" ), Fill Color( "None" )}
			), DispatchSeg( Text Seg( 16 ), {Line Color( "None" ), Fill Color( "None" )} ), DispatchSeg(
				Text Seg( 17 ),
				{Line Color( "None" ), Fill Color( "None" )}
			), DispatchSeg( Text Seg( 18 ), {Line Color( "None" ), Fill Color( "None" )} )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create control chart builder.
3. Set window size.
4. Hide control panel.
5. Hide limit summaries.
6. Hide capability report.
7. Define variables for chart.
8. Add chart position.
9. Set limits and zones.
10. Customize text segments.



### Example 42
> **Summary**: Creates a Control Chart Builder with individual points, limits set using moving range, and all warning tests enabled.

<!-- Keywords: #ControlChartBuilder, #JMPScriptingLanguage, #MovingRange, #WarningTests, #IndividualPoints -->

**Code**:
```jsl
Open("data_table.jmp") << Control Chart Builder(
	Show Control Panel( 0 ),
	Show Limit Summaries( 0 ),
	Show Capability( 0 ),
	Variables( Subgroup( :Date ), Y( :Moving Average ) ),
	Chart(
		Position( 1 ),
		Points( Statistic( "Individual" ) ),
		Limits( Sigma( "Moving Range" ) ),
		Warnings( Test 1( 1 ), Test 2( 1 ), Test 3( 1 ), Test 4( 1 ), Test 5( 1 ), Test 6( 1 ), Test 7( 1 ), Test 8( 1 ) )
	),
	Chart( Position( 2 ), Points( Statistic( "Moving Range" ) ), Limits( Sigma( "Moving Range" ) ) ),
	Chart( Position( 3 ), Points( Statistic( "Moving Range" ) ), Limits( Sigma( "Moving Range" ) ) )
);
```

**Code Explanation**:

1. Open data table.
2. Launch Control Chart Builder.
3. Hide control panel.
4. Hide limit summaries.
5. Hide capability analysis.
6. Define subgroup variable.
7. Define response variable.
8. Add individual points chart.
9. Set limits using moving range.
10. Enable all warning tests.



### Example 43
> **Summary**: Creates a Control Chart Builder object to analyze data from a specific region, filtering by 'MW' and enabling animation for the Region column.

<!-- Keywords: #ControlChartBuilder, #DataFiltering, #Animation, #JSLScripting, #StatisticalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder(
	Show Capability( 0 ),
	Variables( Y( :Name( "pop- m" ) ) ),
	Chart(
		Position( 1 ),
		Limits( Zones( 1 ) ),
		Warnings(
			Test 1( 1 ),
			Test 2( 1 ),
			Test 3( 1 ),
			Test 4( 1 ),
			Test 5( 1 ),
			Test 6( 1 ),
			Test 7( 1 ),
			Test 8( 1 ),
			Rule 1 2S( 1 ),
			Rule 1 3S( 1 ),
			Rule 2 2S( 1 ),
			Rule R 4S( 1 ),
			Rule 4 1S( 1 ),
			Rule 10 X( 1 ),
			Test Beyond Limits( 1 )
		)
	),
	Chart( Position( 2 ) ),
	Local Data Filter( Mode, Add Filter( columns( :Region ), Where( :Region == "MW" ) ), Animation( Animate Column( :Region ) ) )
);
```

**Code Explanation**:

1. Open data table;
2. Create Control Chart Builder object.
3. Hide capability analysis.
4. Set Y variable to "pop- m".
5. Add first chart.
6. Position chart at 1.
7. Enable zone limits.
8. Configure multiple warning tests.
9. Add second chart.
10. Position chart at 2.
11. Apply local data filter.
12. Filter by Region "MW".
13. Enable animation for Region column.



### Example 44
> **Summary**: Creates a Shewhart Attribute control chart for PM10 data, using Poisson sigma limits and applying specific warning rules.

<!-- Keywords: #JSLScriptingLanguage, #ControlChartBuilder, #ShewhartAttribute, #PoissonSigmaLimits, #WarningRules -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder(
	Show Control Panel( 0 ),
	Show Alarm Report( 1 ),
	Show Capability( 0 ),
	Class( Shewhart Attribute ),
	Variables( Subgroup( :Region ), Y( :PM10 ) ),
	Chart(
		Points( Statistic( "Count" ) ),
		Limits( Sigma( "Poisson" ) ),
		Warnings( Rule 1 2S( 1 ), Rule 1 3S( 1 ), Rule 2 2S( 1 ), Rule R 4S( 1 ), Rule 4 1S( 1 ), Rule 10 X( 1 ) )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create control chart builder object.
3. Hide control panel.
4. Show alarm report.
5. Hide capability analysis.
6. Set chart type to Shewhart Attribute.
7. Define subgroup and Y variables.
8. Plot count points.
9. Use Poisson sigma limits.
10. Apply specified warning rules.



### Example 45
> **Summary**: Creates a Shewhart Attribute control chart for PM10 data, filtered by specific states and displaying count statistics with Poisson distribution limits.

<!-- Keywords: #JSL, #ControlChart, #ShewhartAttribute, #PoissonDistribution, #LocalDataFilter -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder(
	Show Control Panel( 0 ),
	Show Alarm Report( 1 ),
	Show Capability( 0 ),
	Class( Shewhart Attribute ),
	Variables( Subgroup( :Region ), Y( :PM10 ) ),
	Chart(
		Points( Statistic( "Count" ) ),
		Limits( Sigma( "Poisson" ) ),
		Warnings( Rule 1 2S( 1 ), Rule 1 3S( 1 ), Rule 2 2S( 1 ), Rule R 4S( 1 ), Rule 4 1S( 1 ), Rule 10 X( 1 ) )
	)
);
dtFilter = obj << Local Data Filter(
	Add Filter(
		columns( :State ),
		Where( :State == {"AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "IA", "IL", "IN", "KS"} ),
		Display( :State, Size( 160, 225 ), List Display )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create control chart builder object.
3. Hide control panel.
4. Show alarm report.
5. Hide capability report.
6. Set chart type to Shewhart Attribute.
7. Define subgroup variable as "Region".
8. Define Y variable as "PM10".
9. Plot points with count statistic.
10. Set limits using Poisson distribution.
11. Add specific warning rules.
12. Create local data filter for "State".
13. Filter states: AZ, CA, CO, CT, DC, DE, FL, GA, IA, IL, IN, KS.
14. Display filter with specified size and list display.



### Example 46
> **Summary**: Creates a control chart builder with specific settings, including subgroup and Y variables, to visualize data from an open JMP data table.

<!-- Keywords: #ControlChartBuilder, #JMPScriptingLanguage, #DataVisualization, #StatisticalProcessControl, #QualityControl -->

**Code**:
```jsl
Open("data_table.jmp");
Control Chart Builder(
	Size( 522, 448 ),
	Show Control Panel( 0 ),
	Show Capability( 0 ),
	Variables( Subgroup( :Hour ), Y( :Thickness ) ),
	Chart( Position( 1 ), Points( Show Points( 0 ) ), Limits( Zones( 1 ) ), Warnings( Test 6( 1 ) ) ),
	SendToReport( Dispatch( {}, "Thickness Limit Summaries", OutlineBox, {Close( 1 )} ) )
);
```

**Code Explanation**:

1. Open data table.
2. Create control chart builder.
3. Set window size.
4. Hide control panel.
5. Hide capability report.
6. Define subgroup and Y variables.
7. Add chart with specific settings.
8. Disable point display.
9. Enable zone limits.
10. Apply test 6 warning.



### Example 47
> **Summary**: Creates a control chart builder object with specific settings, including hiding capability analysis and filtering data by Cavity column value.

<!-- Keywords: #ControlChartBuilder, #JSLScriptingLanguage, #DataFiltering, #StatisticalAnalysis, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder(
	Show Capability( 0 ),
	Variables( Subgroup( :Hour ), Y( :Thickness ) ),
	Chart( Position( 1 ), Points( Box Plots( 1 ) ), ),
	Chart( Position( 2 ) ),
	Local Data Filter( Add Filter( columns( :Cavity ), Where( :Cavity == "4" ), Display( :Cavity, Size( 160, 68 ) ) ) )
);
```

**Code Explanation**:

1. Open data table.
2. Create control chart builder object.
3. Hide capability analysis.
4. Set subgroup variable to Hour.
5. Set Y variable to Thickness.
6. Add first chart position.
7. Plot box plots for first chart.
8. Add second chart position.
9. Add local data filter.
10. Filter Cavity column for value "4".



### Example 48
> **Summary**: Creates a control chart with box plots and moving range limits, filtering out specific samples and hiding capability statistics.

<!-- Keywords: #ControlChart, #BoxPlot, #MovingRange, #Filtering, #JSLScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder(
	Show Excluded Region( 0 ),
	Show Capability( 0 ),
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart( Position( 1 ), Points( Box Plots( 1 ) ), Limits( Sigma( "Median Moving Range" ) ) ),
	Chart( Position( 2 ), Points( Statistic( "Moving Range on Std Dev" ) ), Limits( Sigma( "Median Moving Range" ) ) )
);
dt << select where( :Sample == 3 ) << exclude;
dt << select where( :Sample == 4 ) << hide;
dt << select where( :Sample == 5 ) << hide;
dt << select where( :Sample == 5 ) << exclude;
```

**Code Explanation**:

1. Open data table.
2. Create control chart object.
3. Hide excluded region.
4. Hide capability statistics.
5. Set subgroup variable.
6. Set response variable.
7. Add box plot chart.
8. Set limits using median moving range.
9. Add moving range chart.
10. Exclude specific samples.



### Example 49
> **Summary**: Creates a control chart builder with customized settings, including box plots and moving range charts, to analyze data from multiple samples.

<!-- Keywords: #JSLScriptingLanguage, #ControlChartBuilder, #BoxPlots, #MovingRangeCharts, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder(
	Show Excluded Region( 0 ),
	Show Capability( 0 ),
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart( Position( 1 ), Points( Box Plots( 1 ) ), Limits( Sigma( "Median Moving Range" ) ) ),
	Chart( Position( 2 ), Points( Statistic( "Moving Range on Std Dev" ) ), Limits( Sigma( "Median Moving Range" ) ) )
);
dt << select where( :Sample == 3 ) << exclude;
dt << select where( :Sample == 4 ) << hide;
dt << select where( :Sample == 5 ) << hide;
dt << select where( :Sample == 5 ) << exclude;
dt << clear select;
```

**Code Explanation**:

1. Open data table.
2. Create control chart builder.
3. Hide excluded region.
4. Hide capability report.
5. Set subgroup variable.
6. Set Y variable.
7. Add box plot chart.
8. Set sigma limits.
9. Add moving range chart.
10. Set sigma limits.



### Example 50
> **Summary**: Creates a control chart builder with box plots and warning tests, filtered by race 'Other', using JMP's Control Chart Builder platform.

<!-- Keywords: #JMP, #ControlChartBuilder, #BoxPlots, #WarningTests, #DataFilter -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder(
	Show Capability( 0 ),
	Variables( Y( :Grade ), Phase( :Grades ) ),
	Set Subgroup Size( 5 ),
	Chart(
		Position( 1 ),
		Points( Box Plots( 1 ) ),
		Warnings(
			Test 1( 1 ),
			Test 2( 1 ),
			Test 3( 1 ),
			Test 4( 1 ),
			Test 5( 1 ),
			Test 6( 1 ),
			Test 7( 1 ),
			Test 8( 1 ),
			Test Beyond Limits( 1 )
		)
	),
	Chart( Position( 2 ) ),
	Local Data Filter( Add Filter( columns( :Race ), Where( :Race == "Other" ) ) )
);
```

**Code Explanation**:

1. Open table.
2. Create control chart builder.
3. Hide capability report.
4. Set variables for analysis.
5. Define subgroup size.
6. Add box plot chart.
7. Enable all warning tests.
8. Add second chart.
9. Apply local data filter.
10. Filter by race "Other".



### Example 51
> **Summary**: Creates a control chart builder with box plots and moving range charts to analyze subgroup data, excluding specific rows and hiding unnecessary panels.

<!-- Keywords: #ControlChartBuilder, #BoxPlots, #MovingRangeCharts, #SubgroupAnalysis, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
myrs = dt << select where( :Sample == 3 );
dt << exclude;
dt << Control Chart Builder(
	Size( 534, 456 ),
	Show Control Panel( 0 ),
	Show Excluded Region( 0 ),
	Show Capability( 0 ),
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart( Position( 1 ), Points( Box Plots( 1 ) ), Limits( Sigma( "Median Moving Range" ) ) ),
	Chart( Position( 2 ), Points( Statistic( "Moving Range on Std Dev" ) ), Limits( Sigma( "Median Moving Range" ) ) )
);
```

**Code Explanation**:

1. Open data table.
2. Select specific rows.
3. Exclude selected rows.
4. Create control chart builder.
5. Set chart size.
6. Hide control panel.
7. Hide excluded region.
8. Hide capability.
9. Define subgroup and Y variables.
10. Add box plot and moving range charts.



### Example 52
> **Summary**: Creates a control chart with two charts, configuring sample size and marker sizes for each chart.

<!-- Keywords: #ControlChart, #JMPScriptingLanguage, #DataVisualization, #StatisticalAnalysis, #QualityControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder(
	Show Capability( 0 ),
	Variables( Y( :Diameter1 ) ),
	Set Sample Size( 5 ),
	Chart( Position( 1 ), Points( Show Points( 0 ), Show Connect Line( 0 ) ) ),
	Chart( Position( 2 ) ),
	SendToReport(
		Dispatch( {}, "Control Chart Builder", FrameBox, {Marker Size( 2 )} ),
		Dispatch( {}, "Control Chart Builder", FrameBox( 2 ), {Marker Size( 2 )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create control chart object.
3. Disable capability display.
4. Set variable for diameter.
5. Define sample size.
6. Configure first chart settings.
7. Add second chart.
8. Adjust marker size for first chart.
9. Adjust marker size for second chart.
10. Save control chart object.



### Example 53
> **Summary**: Creates Control Chart Builders for two data tables, configuring variables and chart settings to visualize RstPulse, Oxy, Age and DIAMETER metrics.

<!-- Keywords: #ControlChartBuilder, #JSLScriptingLanguage, #DataVisualization, #StatisticalAnalysis, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder(
	Variables( Y( :RstPulse, :Oxy, :Age ) ),
	Chart( Position( 1 ) ),
	Chart( Position( 2 ) ),
	SendToReport(
		Dispatch( {}, "", ScaleBox, {Add Ref Line( 21, Solid, "Black", "", 2 )} ),
		Dispatch( {}, "", ScaleBox( 5 ), {Add Ref Line( 21, Solid, "Black", "", 2 )} ),
		Dispatch( {}, "", ScaleBox( 9 ), {Add Ref Line( 21, Solid, "Black", "", 2 )} )
	)
);
dt2 = Open("data_table.jmp");
obj = dt2 << Control Chart Builder(
	Show Capability( 0 ),
	Variables( Y( :DIAMETER ) ),
	Chart( Position( 1 ), Points( Show Connect Line( 0 ) ), Limits( Sigma( "Moving Range" ) ) ),
	Chart( Position( 2 ), Limits( Sigma( "Moving Range" ) ) )
);
```

**Code Explanation**:

1. Open data table.
2. Create Control Chart Builder object.
3. Add RstPulse, Oxy, Age variables.
4. Position charts.
5. Add reference line to first scale box.
6. Add reference line to fifth scale box.
7. Add reference line to ninth scale box.
8. Open data table.
9. Create Control Chart Builder object.
10. Configure chart settings for DIAMETER variable.



### Example 54
> **Summary**: Creates a control chart builder object with specific settings, including disabling capability display, setting Y and phase variables, adding limits to the first chart, enabling warning tests, and filtering data for a specific day.

<!-- Keywords: #ControlChartBuilder, #JSLScriptingLanguage, #DataFiltering, #WarningTests, #LimitSummaries -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder(
	Show Capability( 0 ),
	Variables( Y( :Delay ), Phase( :Reason ) ),
	Chart(
		Position( 1 ),
		Limits,
		Warnings( Test 1( 1 ), Test 2( 1 ), Test 3( 1 ), Test 4( 1 ), Test 5( 1 ), Test 6( 1 ), Test 7( 1 ), Test 8( 1 ) )
	),
	Chart( Position( 2 ) ),
	Local Data Filter( Add Filter( columns( :Day ), Where( :Day == "24DEC88" ), Display( :Day, Size( 204, 191 ), List Display ) ) )
);
```

**Code Explanation**:

1. Open data table.
2. Create control chart builder object.
3. Disable capability display.
4. Set Y variable to Delay.
5. Set phase variable to Reason.
6. Add limits to first chart.
7. Enable all warning tests.
8. Add second chart.
9. Add local data filter.
10. Filter data for specific day.



### Example 55
> **Summary**: Creates two control charts from a data table, with customization options for variables and limits.

<!-- Keywords: #ControlChart, #JSLScriptingLanguage, #DataVisualization, #StatisticalAnalysis, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder(
	Show Capability( 0 ),
	Variables( Y( :Delay ), Phase( :Reason ) ),
	Chart(
		Position( 1 ),
		Limits,
		Warnings( Test 1( 1 ), Test 2( 1 ), Test 3( 1 ), Test 4( 1 ), Test 5( 1 ), Test 6( 1 ), Test 7( 1 ), Test 8( 1 ) )
	),
	Chart( Position( 2 ) ),
	Local Data Filter( Add Filter( columns( :Day ), Where( :Day == "24DEC88" ), Display( :Day, Size( 204, 191 ), List Display ) ) )
);
dt2 = Open("data_table.jmp");
obj2 = dt2 << Control Chart Builder( Variables( Subgroup( :Y ), Y( :Name( "pop- m" ), :Max deg. F Jan ) ) );
```

**Code Explanation**:

1. Open data table;
2. Create control chart.
3. Hide capability report.
4. Set Y variable to "Delay".
5. Set phase variable to "Reason".
6. Add limits chart.
7. Enable all warning tests.
8. Add second chart.
9. Add local data filter.
10. Filter for "24DEC88".
11. Open data table;
12. Create control chart.
13. Set subgroup variable to "Y".
14. Set Y variables to "pop- m" and "Max deg. F Jan".



### Example 56
> **Summary**: Creates a control chart builder object with specific variables and settings, including limits and warning tests.

<!-- Keywords: #ControlChartBuilder, #JSLScriptingLanguage, #DataFiltering, #WarningTests, #LimitSummaries -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder(
	Show Capability( 0 ),
	Variables( Y( :Delay ), Phase( :Reason ) ),
	Chart(
		Position( 1 ),
		Limits,
		Warnings( Test 1( 1 ), Test 2( 1 ), Test 3( 1 ), Test 4( 1 ), Test 5( 1 ), Test 6( 1 ), Test 7( 1 ), Test 8( 1 ) )
	),
	Chart( Position( 2 ) ),
	Local Data Filter( Add Filter( columns( :Day ), Where( :Day == "24DEC88" ), Display( :Day, Size( 204, 191 ), List Display ) ) )
);
dt2 = Open("data_table.jmp");
```

**Code Explanation**:

1. Open data table.
2. Create control chart builder object.
3. Hide capability report.
4. Set variables for delay and reason.
5. Configure first chart position.
6. Add limits to chart.
7. Enable all warning tests.
8. Configure second chart position.
9. Add local data filter.
10. Filter data for specific day.
11. Open data table.



### Example 57
> **Summary**: Creates control charts for quality monitoring, filtering data by region and specific conditions, and sorting results by row order.

<!-- Keywords: #ControlChart, #DataFiltering, #LocalDataFilters, #JMPScriptingLanguage, #QualityMonitoring -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder(
	Variables( Subgroup( :State ), Y( :NO ) ),
	Show Excluded Region( 0 ),
	Local Data Filter( Add Filter( columns( :X ), Where( :X >= 0.1075 & :X <= 0.2 ) ) ),
	Where( :Region == "MW" )
);
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder(
	Sort by Row Order( 1 ),
	Show Capability( 0 ),
	Variables( Subgroup( :Weight 2 ), Y( :Weight ), Phase( :Sample ) )
);
```

**Code Explanation**:

1. Open data table.
2. Create control chart for NO by State.
3. Hide excluded region.
4. Add local data filter for X.
5. Filter where X is between 0.1075 and 0.2.
6. Apply filter for Region == "MW".
7. Open data table.
8. Create control chart for Weight by Weight 2 and Sample.
9. Sort by row order.
10. Hide capability report.



### Example 58
> **Summary**: Creates a Control Chart Builder with customized settings, including hiding control panels and limit summaries, defining subgroup and response variables, and adding a text annotation.

<!-- Keywords: #ControlChartBuilder, #JSLScriptingLanguage, #DataVisualization, #Customization, #Annotation -->

**Code**:
```jsl
Open("data_table.jmp");
Control Chart Builder(
	Size( 522, 448 ),
	Show Control Panel( 0 ),
	Show Limit Summaries( 0 ),
	Show Capability( 0 ),
	Variables( Subgroup( :age ), Y( :height ) ),
	SendToReport(
		Dispatch( {}, "", GraphBuilderTitleBox( 3 ),
			Add Text Annotation(
				Text( "Here is an annotation with a yellow background
" ),
				Fixed Size( 0 ),
				Text Box( {33, -373, 264, -249} ),
				Background Color( "Medium Light Yellow" )
			)
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Launch Control Chart Builder.
3. Set window size.
4. Hide control panel.
5. Hide limit summaries.
6. Hide capability analysis.
7. Define subgroup variable.
8. Define response variable.
9. Add text annotation.
10. Set annotation properties.



### Example 59
> **Summary**: Creates a control chart builder with customized settings, extracting and scaling a picture from the report as a bitmap.

<!-- Keywords: #ControlChartBuilder, #JSLScriptingLanguage, #DataVisualization, #PictureBox, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
ccb = dt << Control Chart Builder(
	Show Control Panel( 0 ),
	Include Missing Categories( 0 ),
	Show Limit Summaries( 0 ),
	Show Capability( 0 ),
	Variables( Y( :IVP2 ) ),
	Fit To Window( "On" )
);
p = Report( ccb )[Picture Box( 1 )] << Get Picture( Scale( 0.2 ), Type( "Bitmap" ) );
ccb << Close Window;
```

**Code Explanation**:

1. Open data_table data
2. Create control chart builder.
3. Hide control panel.
4. Exclude missing categories.
5. Hide limit summaries.
6. Hide capability analysis.
7. Set Y variable.
8. Fit to window.
9. Extract picture from report.
10. Scale picture to 20%.
11. Save picture as bitmap.
12. Close control chart window.



### Example 60
> **Summary**: Creates a control chart for IVP2, hiding the control panel and excluding missing categories, while extracting a thumbnail picture from the chart.

<!-- Keywords: #ControlChartBuilder, #JMPScriptingLanguage, #DataVisualization, #StatisticalAnalysis, #PictureBox -->

**Code**:
```jsl
dt = Open("data_table.jmp");
ccb = dt << Control Chart Builder(
	Show Control Panel( 0 ),
	Include Missing Categories( 0 ),
	Show Limit Summaries( 0 ),
	Show Capability( 0 ),
	Variables( Y( :IVP2 ) ),
	Fit To Window( "On" )
);
p = Report( ccb )[Picture Box( 1 )] << Get Picture( Scale( 0.2 ), Type( "Bitmap" ) );
ccb << Close Window;
New Window( "thumbnail", Picture Box( p ) );
```

**Code Explanation**:

1. Open data_table data
2. Build control chart for IVP2.
3. Hide control panel.
4. Exclude missing categories.
5. Hide limit summaries.
6. Hide capability report.
7. Fit chart to window.
8. Extract picture from chart.
9. Scale picture to 0.2.
10. Create new window with thumbnail.



### Example 61
> **Summary**: Creates a control chart builder with specific settings and adds a text annotation to the report.

<!-- Keywords: #ControlChartBuilder, #JSLScriptingLanguage, #DataVisualization, #TextAnnotation, #ReportCustomization -->

**Code**:
```jsl
Open("data_table.jmp");
Control Chart Builder(
	Size( 522, 448 ),
	Show Control Panel( 0 ),
	Show Limit Summaries( 0 ),
	Show Capability( 0 ),
	Variables( Subgroup( :age ), Y( :height ) ),
	SendToReport(
		Dispatch( {}, "Control Chart Builder", FrameBox,
			Add Text Annotation(
				Text( "Here is an annotation
" ),
				Fixed Size( 0 ),
				Text Box( {19, 22, 216, 85} ),
				Background Color( "Light YellowGreen" )
			)
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create control chart builder.
3. Set window size.
4. Hide control panel.
5. Hide limit summaries.
6. Hide capability report.
7. Define subgroup and Y variables.
8. Send report to control chart.
9. Add text annotation.
10. Set annotation properties.



### Example 62
> **Summary**: Creates a Control Chart Builder with sigma limits for Acid data, customizing report formatting and hiding control panel and capability reports.

<!-- Keywords: #ControlChartBuilder, #SigmaLimits, #CustomReportFormatting, #JSLScripting, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Control Chart Builder(
	Show Control Panel( 0 ),
	Show Capability( 0 ),
	Variables( Y( :Acid ) ),
	Chart( Position( 1 ), Limits( Sigma ) ),
	Chart( Position( 2 ), Limits( Sigma ) ),
	SendToReport(
		Dispatch( {}, "Acid", ScaleBox,
			{Format( "Custom", Formula( If( Modulo( value, 2 ) == 0, Trim( "  is even " ), Collapse Whitespace( " is   odd" ) ) ), 10 ),
			Min( 7 ), Max( 17 ), Inc( 1 ), Minor Ticks( 1 )}
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create Control Chart Builder.
3. Hide control panel.
4. Hide capability report.
5. Set Y variable to Acid.
6. Add chart with sigma limits.
7. Add another chart with sigma limits.
8. Customize report.
9. Format Acid scale.
10. Apply custom formatting rules.



### Example 63
> **Summary**: Creates a control chart builder with customized settings, including size, variables, and limits, to visualize data from a specific data table.

<!-- Keywords: #ControlChartBuilder, #DataVisualization, #JMPScriptingLanguage, #CustomizationOptions, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder(
	Size( 528, 450 ),
	Show Control Panel( 0 ),
	Show Capability( 0 ),
	Variables( Subgroup( :Hour ), Y( :Thickness ) ),
	Chart( Position( 1 ), Limits( Zones( 1 ) ), Warnings( Rule R 4S( 1 ) ) ),
	SendToReport(
		Dispatch( {}, "Control Chart Builder", FrameBox,
			Add Pin Annotation(
				Seg( Marker Seg( 1 ) ),
				Index( 4 ),
				Index Row( 80 ),
				UniqueID( 614619044 ),
				FoundPt( {166, 277} ),
				Origin( {4.04545454545455, 7.40522938156976} ),
				Tag Line( 1 )
			)
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create control chart builder.
3. Set chart size.
4. Hide control panel.
5. Hide capability report.
6. Define variables: subgroup and response.
7. Configure chart position.
8. Set limits and warnings.
9. Add pin annotation.
10. Customize annotation properties.



### Example 64
> **Summary**: Creates two control charts with customized settings, including subgrouping by age and filtering local data for a specific value.

<!-- Keywords: #ControlChartBuilder, #JSLScriptingLanguage, #DataFiltering, #Subgrouping, #Customization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Control Chart Builder(
	Size( 534, 450 ),
	Show Control Panel( 0 ),
	Show Capability( 0 ),
	Show Limit Summaries( 0 ),
	Variables( Subgroup( :age ), Y( :height ) )
);
dt << Control Chart Builder(
	Size( 522, 452 ),
	Show Two Shewhart Charts( 0 ),
	Show Control Panel( 0 ),
	Show Limit Summaries( 0 ),
	Variables( Y( :height ) ),
	Set Subgroup Size( 5 ),
	Chart(
		Points( Statistic( "Average" ) ),
		Limits( Sigma( "Range" ) ),
		Warnings( Test 1( 1 ), Test 2( 1 ), Test 3( 1 ), Test 4( 1 ), Test 5( 1 ), Test 6( 1 ), Test 7( 1 ), Test 8( 1 ) )
	),
	Local Data Filter( Add Filter( columns( :age ), Where( :age == 15 ), Display( :age, N Items( 6 ) ) ) )
);
```

**Code Explanation**:

1. Open data table;
2. Create control chart.
3. Hide control panel.
4. Hide capability report.
5. Hide limit summaries.
6. Use age as subgroup.
7. Use height as Y variable.
8. Create another control chart.
9. Disable two Shewhart charts.
10. Apply local data filter for age 15.



### Example 65
> **Summary**: Creates a Control Chart Builder with customized reference lines and frame box text segments, utilizing the provided data table.

<!-- Keywords: #ControlChartBuilder, #Customization, #DataVisualization, #JMPScriptingLanguage, #ReferenceLines -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Control Chart Builder(
	Size( 534, 464 ),
	Show Control Panel( 0 ),
	Show Capability( 0 ),
	Variables( Subgroup( :DAY ), Y( :DIAMETER ), Phase( :Phase ) ),
	Chart( Position( 1 ), Warnings( Test Beyond Limits( 1 ) ) ),
	Chart( Position( 2 ) ),
	SendToReport(
		Dispatch( {}, "@Subgroup_number", ScaleBox,
			{Add Ref Line( {-0.5, 19.5}, "Solid", "Light Yellow", "", 1 ), Add Ref Line(
				{19.5, 39.5},
				"Solid",
				"Light BlueCyan",
				"",
				1,
				0.4
			)}
		),
		Dispatch( {}, "Control Chart Builder", FrameBox,
			{DispatchSeg( Text Seg( 3 ), {Line Color( "None" ), Fill Color( "None" )} ), DispatchSeg(
				Text Seg( 4 ),
				{Line Color( "None" ), Fill Color( "None" )}
			), DispatchSeg( Text Seg( 5 ), {Line Color( "None" ), Fill Color( "None" )} ), DispatchSeg(
				Text Seg( 6 ),
				{Line Color( "None" ), Fill Color( "None" )}
			), DispatchSeg( Text Seg( 7 ), {Line Color( "None" ), Fill Color( "None" )} ), DispatchSeg(
				Text Seg( 8 ),
				{Line Color( "None" ), Fill Color( "None" )}
			)}
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create Control Chart Builder.
3. Set window size to 534x464.
4. Hide control panel.
5. Hide capability report.
6. Define subgroup, Y variable, and phase.
7. Add first chart with warnings.
8. Add second chart.
9. Add reference lines to scale box.
10. Customize frame box text segments.



### Example 66
> **Summary**: Creates a Shewhart Attribute control chart to monitor the proportion of defective items in a production process, utilizing local data filtering and binomial limits.

<!-- Keywords: #JSLScriptingLanguage, #ControlChartBuilder, #ShewhartAttribute, #BinomialLimits, #LocalDataFilter -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Control Chart Builder(
	Show Control Panel( 0 ),
	Show Capability( 0 ),
	Class( Shewhart Attribute ),
	Variables( Subgroup( :Lot ), Y( :Name( "# defective" ) ), n Trials( :Lot Size ) ),
	Chart( Points( Statistic( "Proportion" ) ), Limits( Sigma( "Binomial" ) ) ),
	Local Data Filter(
		Auto clear( 1 ),
		Mode( Include( 0 ) ),
		Add Filter( columns( :Lot Size 2 ), Where( :Lot Size 2 >= 370.19 & :Lot Size 2 <= 415 ), Display( :Lot Size 2, Size( 106, 50 ) ) )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create control chart builder.
3. Hide control panel.
4. Hide capability report.
5. Set chart type to Shewhart Attribute.
6. Define subgroup and variables.
7. Plot proportion points.
8. Use binomial limits.
9. Enable local data filter.
10. Configure filter settings.



### Example 67
> **Summary**: Creates a Control Chart Builder with two charts, defining subgroup and response variables, and hiding control panel and capability reports.

<!-- Keywords: #ControlChartBuilder, #JSLScriptingLanguage, #DataVisualization, #StatisticalProcessControl, #JMP -->

**Code**:
```jsl
Open("data_table.jmp");
Control Chart Builder(
	Show Control Panel( 0 ),
	Show Capability( 0 ),
	Variables( Subgroup( :Day ), Y( :Delay ) ),
	Chart( Position( 1 ) ),
	Chart( Position( 2 ) )
);
```

**Code Explanation**:

1. Open data table;
2. Launch Control Chart Builder.
3. Hide control panel.
4. Hide capability report.
5. Define subgroup variable.
6. Define response variable.
7. Add first chart.
8. Add second chart.



### Example 68
> **Summary**: Creates and analyzes a control chart for Acid data, hiding control panel and capability analysis, setting missing value codes, and generating a report with average Acid values.

<!-- Keywords: #ControlChart, #JMPScriptingLanguage, #DataAnalysis, #ReportGeneration, #MissingValueHandling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Control Chart Builder(
	Show Control Panel( 0 ),
	Show Capability( 0 ),
	Variables( Y( :Acid ) ),
	Chart( Position( 1 ) ),
	Chart( Position( 2 ) )
);
:Acid << Set Property( "Missing Value Codes", 16.2 );
obj2 = obj << Redo Analysis;
rpt = obj2 << Report;
avgAcid = (rpt[Number Col Box( 2 )] << Get( 1 ));
```

**Code Explanation**:

1. Open data table;
2. Create control chart object.
3. Hide control panel.
4. Hide capability analysis.
5. Set Y variable to Acid.
6. Add first chart.
7. Add second chart.
8. Set missing value code for Acid.
9. Redo analysis on object.
10. Generate report from object.
11. Extract average Acid value.



### Example 69
> **Summary**: Creates two control charts from a subsetted table, utilizing local data filters and box plot charts to visualize subgroup and Y variable relationships.

<!-- Keywords: #ControlChartBuilder, #JSLScriptingLanguage, #DataSubset, #LocalDataFilter, #BoxPlot -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder(
	Show Capability( 0 ),
	Variables( Subgroup( :Hour ), Y( :Thickness ) ),
	Chart( Position( 1 ), Points( Box Plots( 1 ) ), ),
	Chart( Position( 2 ) ),
	Local Data Filter( Add Filter( columns( :Cavity ), Where( :Cavity == "1" ), Display( :Cavity, Size( 160, 68 ) ) ) )
);
rpt = obj << report;
dtSub = dt << Subset(
	Selected Rows( 0 ),
	Rows(
		[1, 2, 3, 4, 5, 21, 22, 23, 24, 25, 41, 42, 43, 44, 45, 61, 62, 63, 64, 65, 81, 82, 83, 84, 85, 101, 102, 103, 104, 105, 121, 122,
		123, 124, 125, 141, 142, 143, 144, 145, 161, 162, 163, 164, 165, 181, 182, 183, 184, 185, 201, 202, 203, 204, 205, 221, 222, 223,
		224, 225, 241, 242, 243, 244, 245, 261, 262, 263, 264, 265, 281, 282, 283, 284, 285, 301, 302, 303, 304, 305, 321, 322, 323, 324,
		325, 341, 342, 343, 344, 345, 361, 362, 363, 364, 365, 381, 382, 383, 384, 385]
	),
	Selected columns only( 0 )
);
obj2 = dtSub << Control Chart Builder(
	Show Capability( 0 ),
	Variables( Subgroup( :Hour ), Y( :Thickness ) ),
	Chart( Position( 1 ), Points( Box Plots( 1 ) ), ),
	Chart( Position( 2 ) )
);
rpt2 = obj2 << report;
```

**Code Explanation**:

1. Open table.
2. Create control chart.
3. Hide capability report.
4. Set subgroup and Y variables.
5. Add box plot chart.
6. Add another chart.
7. Add local data filter.
8. Generate report.
9. Subset table.
10. Create second control chart.



### Example 70
> **Summary**: Creates a Shewhart attribute control chart with count statistic and sigma limits, while adding a new row to the data table.

<!-- Keywords: #JSLScriptingLanguage, #ControlChartBuilder, #ShewhartAttribute, #SigmaLimits, #DataTableManipulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder(
	Show Capability( 0 ),
	Class( Shewhart Attribute ),
	Variables( Y( :HBars ) ),
	Chart( Points( Statistic( "Count" ) ), Limits( Sigma ) )
);
dt << add rows( 1 );
Column( dt, "HBars" )[9] = "off";
```

**Code Explanation**:

1. Open data table.
2. Create control chart builder object.
3. Hide capability report.
4. Set chart type to Shewhart attribute.
5. Define Y variable as HBars.
6. Plot points with count statistic.
7. Add limits based on sigma.
8. Add new row to data table.
9. Set HBars value for ninth row to "off".



### Example 71
> **Summary**: Creates a Control Chart Builder object to visualize and analyze diameter data by day, with multiple charts displaying average, individual points, box plots, range, and standard deviation statistics.

<!-- Keywords: #ControlChartBuilder, #JSLScriptingLanguage, #DataVisualization, #StatisticalAnalysis, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder(
	Show Capability( 0 ),
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	Chart( Position( 1 ), Points( Statistic( "Average" ), Individual Points( 1 ), Box Plots( 1 ) ), Limits( Sigma( "Range" ) ) ),
	Chart(
		Position( 2 ),
		Points( Statistic( "Average" ), Individual Points( 1 ), Box Plots( 1 ) ),
		Limits( Sigma( "Standard Deviation" ) )
	),
	Chart( Position( 3 ), Points( Statistic( "Range" ) ), Limits( Sigma( "Range" ), Show Center Line( 0 ) ) ),
	Chart( Position( 4 ), Points( Statistic( "Standard Deviation" ) ), Limits( Sigma( "Standard Deviation" ) ) )
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create Control Chart Builder object.
3. Hide capability report.
4. Set subgroup variable as :DAY.
5. Set Y variable as :DIAMETER.
6. Add first chart with average, individual points, and box plots.
7. Use range for limits.
8. Add second chart with average, individual points, and box plots.
9. Use standard deviation for limits.
10. Add third chart with range statistic.
11. Use range for limits.
12. Hide center line.
13. Add fourth chart with standard deviation statistic.
14. Use standard deviation for limits.
15. Generate report from object.



### Example 72
> **Summary**: Creates a Shewhart Attribute control chart to monitor flight counts by day, utilizing binomial limits and hiding capability reports.

<!-- Keywords: #JSLScriptingLanguage, #ControlChartBuilder, #ShewhartAttribute, #BinomialLimits, #DataTableManipulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder(
	Show Capability( 0 ),
	Class( Shewhart Attribute ),
	Variables( Subgroup( :Day ), Y( :Flight ) ),
	Chart( Points( Statistic( "Count" ) ), Limits( Sigma( "Binomial" ) ) )
);
dt << select all rows << delete rows;
```

**Code Explanation**:

1. Open data table.
2. Create Control Chart Builder object.
3. Hide capability report.
4. Set chart type to Shewhart Attribute.
5. Define Day as subgroup variable.
6. Define Flight as Y variable.
7. Plot count statistic points.
8. Use binomial limits.
9. Select all rows in data table.
10. Delete selected rows.



### Example 73
> **Summary**: Creates a Shewhart attribute control chart with count statistic and Poisson limits for sigma, using the Control Chart Builder platform in JMP.

<!-- Keywords: #JMP, #ControlChart, #ShewhartAttribute, #PoissonLimits, #CountStatistic -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder(
	Show Capability( 0 ),
	Class( Shewhart Attribute ),
	Variables( Y( :label ) ),
	Chart( Points( Statistic( "Count" ) ), Limits( Sigma( "Poisson" ) ) )
);
ccbb = Report( obj )[Graph Builder Box( 1 )];
ccbb << Add Variable( {:Mean, Role( "Subgroup" )} );
```

**Code Explanation**:

1. Open data table;
2. Create control chart builder object.
3. Disable capability display.
4. Set chart type to Shewhart attribute.
5. Assign variable for analysis.
6. Configure chart with count statistic.
7. Use Poisson limits for sigma.
8. Retrieve graph builder box from report.
9. Add mean variable to chart.
10. Assign role as subgroup for mean.



### Example 74
> **Summary**: Creates a control chart for height, hiding capability reports and storing the object for further analysis.

<!-- Keywords: #ControlChart, #JMPScriptingLanguage, #DataAnalysis, #StatisticalProcessControl, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder( Show Capability( 0 ), Variables( Y( :height ) ) );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create control chart for height.
3. Hide capability report.
4. Store control chart object.
5. Generate report from object.
6. Store report object.



### Example 75
> **Summary**: Creates a control chart builder object to visualize and analyze data, hiding control panels and capability reports while adding custom annotations.

<!-- Keywords: #ControlChartBuilder, #JSLScriptingLanguage, #DataVisualization, #StatisticalAnalysis, #CustomAnnotations -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder(
	Show Control Panel( 0 ),
	Show Capability( 0 ),
	Class( Shewhart Attribute ),
	Variables( Subgroup( :Lot ), Y( :Name( "# defective" ) ), n Trials( :Lot Size ) ),
	Chart( Points( Statistic( "Proportion" ) ), Limits( Sigma( "Binomial" ) ) ),
	SendToReport(
		Dispatch( {}, "Control Chart Builder", FrameBox, {Add Simple Shape Annotation( Oval( {409, 270, 450, 300} ), Color( "Blue" ) )} )
	)
);
obj << SendToReport(
	Dispatch( {}, "Control Chart Builder", FrameBox,
		{Add Line Annotation( Line( {364, 37}, {428, 112} ), Color( "Blue" ) ), Add Text Annotation(
			Text( "tt" ),
			Fixed Size( 1 ),
			Text Box( {397, 144, 447, 189} ),
			Filled( 0 )
		), Add Polygon Annotation(
			Points( {445, 28}, {449, 102}, {438, 160}, {393, 189}, {413, 218}, {460, 225}, {469, 209}, {442, 174} ),
			Color( "Blue" )
		), Add Simple Shape Annotation( Oval( {409, 270, 450, 300} ), Color( "Blue" ) )}
	)
);
obj << redo analysis;
```

**Code Explanation**:

1. Open data table.
2. Create control chart builder object.
3. Hide control panel.
4. Hide capability report.
5. Set chart type to Shewhart attribute.
6. Define subgroup, Y variable, and trials.
7. Plot proportion points and binomial limits.
8. Add oval annotation.
9. Add line annotation.
10. Add text annotation.
11. Add polygon annotation.
12. Redo analysis.



### Example 76
> **Summary**: Creates a control chart builder object to visualize time data by flight number, with average points displayed and individual points enabled.

<!-- Keywords: #ControlChartBuilder, #TimeSeriesAnalysis, #JMPScriptingLanguage, #DataVisualization, #StatisticalProcessControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder(
	Show Two Shewhart Charts( 0 ),
	Show Capability( 0 ),
	Variables( Subgroup( :Flight Number ), Y( :Time ) ),
	Chart( Points( Statistic( "Average" ), Individual Points( 1 ), Show Connect Line( 0 ) ), Limits( Sigma( "Moving Range" ) ) ),
	SendToReport( Dispatch( {}, "Time", ScaleBox, {Min( 0 ), Max( 180000 ), Interval( "Hour" ), Inc( 5 ), Minor Ticks( 1 )} ) )
);
after = Today();
```

**Code Explanation**:

1. Open data table;
2. Create control chart builder object.
3. Hide two Shewhart charts.
4. Hide capability analysis.
5. Set subgroup variable to Flight Number.
6. Set Y variable to Time.
7. Display average points.
8. Enable individual points display.
9. Disable connect lines.
10. Use moving range for limits.



### Example 77
> **Summary**: Creates a control chart for height data, hiding capability reports and adding two charts with specific settings.

<!-- Keywords: #ControlChartBuilder, #JSLScriptingLanguage, #DataVisualization, #StatisticalAnalysis, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder( Show Capability( 0 ), Variables( Y( :height ) ), Chart( Position( 1 ) ), Chart( Position( 2 ) ) );
```

**Code Explanation**:

1. Open data table;
2. Create control chart object.
3. Hide capability report.
4. Set Y variable to height.
5. Add first chart.
6. Add second chart.



### Example 78
> **Summary**: Creates a control chart and process capability report for skull length data, utilizing Control Chart Builder and Process Capability platforms in JMP.

<!-- Keywords: #JMPScriptingLanguage, #ControlChartBuilder, #ProcessCapability, #DataAnalysis, #StatisticalProcessControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder(
	Include Missing Categories( 0 ),
	Variables( Subgroup( :species ), Y( :skull length ) ),
	Chart(
		Position( 1 ),
		Warnings( Test 1( 1 ), Test 2( 1 ), Test 3( 1 ), Test 4( 1 ), Test 5( 1 ), Test 6( 1 ), Test 7( 1 ), Test 8( 1 ) ),
		Add Spec Limits( {LSL( 355 ), USL( 400 ), Target( 370 )} )
	),
	Chart( Position( 2 ) ),
	Sort by subgroup
);
obj2 = dt << Process Capability(
	Process Variables( :skull length[:species] ),
	Spec Limits( skull length( LSL( 355 ), Target( 370 ), USL( 400 ) ) ),
	Within Subgroup Variation( "Average of Ranges" ),
	Individual Detail Reports( 1 ),
	Capability Box Plots( 1 ),
	Goal Plot( 1 )
);
rpt = obj << repot;
rpt2 = obj2 << report;
```

**Code Explanation**:

1. Open data table;
2. Create control chart builder.
3. Exclude missing categories.
4. Set subgroup variable.
5. Set Y variable.
6. Position first chart.
7. Enable all warning tests.
8. Add specification limits.
9. Position second chart.
10. Sort by subgroup.
11. Generate process capability report.
12. Set process variables.
13. Define specification limits.
14. Use average of ranges.
15. Enable individual detail reports.
16. Enable capability box plots.
17. Enable goal plot.
18. Retrieve control chart report.
19. Retrieve process capability report.



## Capability using Column
### Example 1
> **Summary**: Opens a data table, sets spec limits for the 'height' column, creates a distribution analysis, and adds process capability analysis with reference lines.

<!-- Keywords: #JMPScriptingLanguage, #DataTableOperations, #ProcessCapabilityAnalysis, #DistributionAnalysis, #SpecLimits -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, "height" ) << Set Property( "Spec Limits", {LSL( 50 ), USL( 65 ), Target( 57 )} );
dist = dt << Distribution( Continuous Distribution( Column( :height ) ) );
dist << Process Capability( "Use Column Property Specs", "Show as Graph
Reference Lines" );
```

**Code Explanation**:

1. Open data table.
2. Set spec limits for height.
3. Create distribution analysis for height.
4. Add process capability analysis.
5. Use column property specs.
6. Show graph with reference lines.



### Example 2
> **Summary**: Calculates process capability analysis for the 'height' column in a data table, utilizing spec limits and displaying reference lines on a graph.

<!-- Keywords: #ProcessCapabilityAnalysis, #SpecLimits, #GraphReferenceLines, #JSLScriptingLanguage, #DataTableOperations -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
Column( dt, "height" ) << Set Property( "Spec Limits", {LSL( 50 ), USL( 65 ), Target( 57 )} );
dist = dt << Distribution( Continuous Distribution( Column( :height ) ) );
dist << Process Capability( "Use Column Property Specs", "Show as Graph
Reference Lines" );
Report( dist )["Process Capability"] << Close( 1 );
```

**Code Explanation**:

1. Set default names scope.
2. Open data table.
3. Set spec limits for "height" column.
4. Create distribution analysis for "height".
5. Add process capability analysis.
6. Use column property specs.
7. Show as graph and reference lines.
8. Close process capability report.



### Example 3
> **Summary**: Creates a control chart builder object with box plots to visualize and analyze data, utilizing variables for subgrouping, Y-axis values, and phase.

<!-- Keywords: #ControlChartBuilder, #BoxPlots, #DataAnalysis, #JMPScriptingLanguage, #MultivariateAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, "Phase" ) << Delete property( "Value Order" );
obj = dt << Control Chart Builder(
	Show Capability( 0 ),
	Show Control Panel( 0 ),
	Variables( Subgroup( :DAY ), Y( :DIAMETER ), Phase( :Phase ) ),
	Chart( Position( 1 ), Points( Box Plots( 1 ) ) ),
	Chart( Position( 2 ) )
);
```

**Code Explanation**:

1. Open data table.
2. Delete "Value Order" property.
3. Create control chart builder object.
4. Hide capability report.
5. Hide control panel.
6. Define variables: subgroup, Y, phase.
7. Add first chart: box plots.
8. Add second chart placeholder.
9. Build control chart.
10. Display control chart.



### Example 4
> **Summary**: Creates a control chart builder with box plots for multivariate analysis, hiding selected rows and panels.

<!-- Keywords: #ControlChartBuilder, #BoxPlots, #MultivariateAnalysis, #JSLScripting, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, "Phase" ) << Delete property( "Value Order" );
obj = dt << Control Chart Builder(
	Show Capability( 0 ),
	Show Control Panel( 0 ),
	Variables( Subgroup( :DAY ), Y( :DIAMETER ), Phase( :Phase ) ),
	Chart( Position( 1 ), Points( Box Plots( 1 ) ) ),
	Chart( Position( 2 ) )
);
dt << select rows( {235, 236, 237, 238, 239, 240} ) << hide;
```

**Code Explanation**:

1. Open data table;
2. Delete "Value Order" property from Phase column.
3. Create Control Chart Builder object.
4. Hide Capability panel.
5. Hide Control Panel.
6. Set Subgroup variable to DAY.
7. Set Y variable to DIAMETER.
8. Set Phase variable to Phase.
9. Add Box Plot chart at position 1.
10. Hide selected rows 235-240.



### Example 5
> **Summary**: Creates a control chart builder with local data filtering and reporting for ordinal data, utilizing Control Chart Builder and Local Data Filter platforms.

<!-- Keywords: #JMPScriptingLanguage, #ControlChartBuilder, #LocalDataFilter, #OrdinalData, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, "Sample" ) << set modeling type( "ordinal" );
obj = dt << Control Chart Builder(
	Show Excluded Region( 0 ),
	Use Event Chooser( 1 ),
	Show Capability( 0 ),
	Class( Shewhart Attribute ),
	Variables( Y( :Sample ), Phase( :Phase ) ),
	Chart( Points( Statistic( "Count" ) ), Limits( Sigma( "Poisson" ) ) )
);
ldf = obj << Local Data Filter(
	Add Filter( columns( :Sample ), Where( :Sample == {2, 3, 4, 5, 6, 7} ), Display( :Sample, Size( 143, 255 ), "List Display" ) )
);
rpt = obj << report;
ldf << (Filter Column( :Sample ) << Where( :Sample == {10, 11, 12, 13, 14, 15, 16} ));
rpt = obj << report;
```

**Code Explanation**:

1. Open table.
2. Set "Sample" as ordinal.
3. Create control chart builder.
4. Configure chart settings.
5. Add local data filter.
6. Set initial filter criteria.
7. Generate report.
8. Update filter criteria.
9. Regenerate report.



### Example 6
> **Summary**: Analyzes and creates reports for distribution properties for a continuous column, including generating reports for weight and Weibull quantiles.

<!-- Keywords: #JSLScriptingLanguage, #DistributionAnalysis, #ContinuousData, #WeibullDistribution, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, "weight" ) << Set Property( "Spec Limits", {LSL( 130 )} );
obj = dt << Distribution(
	Stack( 1 ),
	Continuous Distribution( Column( :weight ), Horizontal Layout( 1 ), Vertical( 0 ), Process Capability( 1, Use Column Property Specs ) )
);
rpt = obj << report;
Close( dt, No Save );
Random Reset( 12345 );
dt7 = New Table( "Test", AddRows( 1000 ), New Column( "U", Formula( Random Uniform() ) ) );
dt7 = (dt7 << Sort( By( :U ), Replace Table ));
dt7 << New Column( "Y beta", Formula( Weibull Quantile( :U, 5 ) ) );
obj = dt7 << Distribution(
	Stack( 1 ),
	Continuous Distribution( Column( Column( dt7, 2 ) ) ),
	Quantiles( 0 ),
	Moments( 0 ),
	Horizontal Layout( 1 ),
	Vertical( 0 ),
	Fit Distribution( Weibull with threshold )
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Set lower spec limit for weight.
3. Generate distribution report for weight.
4. Close table without saving.
5. Reset random seed.
6. Create new table with 1000 rows.
7. Add column U with uniform random values.
8. Sort table by column U.
9. Add column Y beta with Weibull quantiles.
10. Generate distribution report for Y beta.



### Example 7
> **Summary**: Creates a continuous distribution object for process capability analysis, utilizing the 'weight' column and specifying lower spec limits.

<!-- Keywords: #ProcessCapabilityAnalysis, #ContinuousDistribution, #JSLScripting, #DataTableOperations, #SpecLimits -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, "weight" ) << Set Property( "Spec Limits", {LSL( 130 )} );
obj = dt << Distribution(
	Stack( 1 ),
	Continuous Distribution( Column( :weight ), Horizontal Layout( 1 ), Vertical( 0 ), Process Capability( 1, Use Column Property Specs ) )
);
rpt = obj << report;
```

**Code Explanation**:

1. Open table.
2. Set lower spec limit.
3. Create distribution object.
4. Configure stack option.
5. Add continuous distribution.
6. Specify weight column.
7. Set horizontal layout.
8. Disable vertical layout.
9. Enable process capability.
10. Use column property specs.



## Capability using For
> **Summary**: Creates a Control Chart with moving range limits for continuous variables in a specified data table, utilizing the Control Chart Builder platform.

<!-- Keywords: #ControlChartBuilder, #MovingRangeLimits, #ContinuousVariables, #DataTable, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
For( i = 1, i <= 8, i++, :sex[i] = "" );
Control Chart Builder(
	Show Capability( 0 ),
	Variables( Subgroup( :sex ), Subgroup( :name, Position( 1 ) ), Y( :height ), Phase( :age ) ),
	Chart( Position( 1 ), Limits( Sigma( "Moving Range" ) ) ),
	Chart( Position( 2 ), Limits( Sigma( "Moving Range" ) ) )
);
```

**Code Explanation**:

1. Open data table;
2. Loop through first 8 rows.
3. Set sex column values to empty.
4. Launch Control Chart Builder.
5. Hide capability analysis.
6. Define subgroup variables.
7. Define Y variable: height.
8. Define phase variable: age.
9. Create first chart with moving range limits.
10. Create second chart with moving range limits.



## Capability using Select Rows
### Example 1
> **Summary**: Creates a control chart builder object with customized settings, including size, variables, and local data filtering.

<!-- Keywords: #JMPScriptingLanguage, #ControlChartBuilder, #DataFiltering, #Customization, #Visualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Rows( {12} ) << exclude;
obj = dt << Control Chart Builder(
	Size( 534, 464 ),
	Show Control Panel( 0 ),
	Show Excluded Region( 0 ),
	Show Capability( 0 ),
	Variables( Subgroup( :Run ), Y( :Force ), Phase( :Site ) ),
	Chart( Position( 1 ), Points( Show Points( 0 ) ) ),
	Local Data Filter( Add Filter( columns( :Site ), Where( :Site == {1, 3} ) ) ),
	SendToReport(
		Dispatch( {}, "Control Chart Builder", FrameBox,
			{DispatchSeg( Text Seg( 3 ), {Line Color( "None" ), Fill Color( "None" )} ), DispatchSeg(
				Text Seg( 4 ),
				{Line Color( "None" ), Fill Color( "None" )}
			), DispatchSeg( Text Seg( 5 ), {Line Color( "None" ), Fill Color( "None" )} ), DispatchSeg(
				Text Seg( 6 ),
				{Line Color( "None" ), Fill Color( "None" )}
			), DispatchSeg( Text Seg( 7 ), {Line Color( "None" ), Fill Color( "None" )} ), DispatchSeg(
				Text Seg( 8 ),
				{Line Color( "None" ), Fill Color( "None" )}
			)}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Exclude row 12.
3. Create control chart builder object.
4. Set chart size.
5. Hide control panel.
6. Hide excluded region.
7. Hide capability report.
8. Define variables for subgroup, Y, and phase.
9. Configure chart position and points visibility.
10. Add local data filter for Site.



### Example 2
> **Summary**: Creates a control chart builder with specific settings, excluding the first 20 rows and selecting the 36th row.

<!-- Keywords: #JSLScripting, #ControlChartBuilder, #DataExclusion, #RowSelection, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Rows( {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20} ) << exclude;
dt << Clear Select();
obj = dt << Control Chart Builder(
	Show Capability( 0 ),
	Class( Rare Event ),
	Variables( Y( :height ) ),
	Chart( Points( Statistic( "Count" ) ), Limits( Sigma( "Weibull" ) ), Warnings( Test Beyond Limits( 1 ) ) )
);
dt << select rows( {36} );
```

**Code Explanation**:

1. Open data table;
2. Exclude first 20 rows.
3. Clear row selection.
4. Create control chart builder.
5. Disable capability display.
6. Set rare event class.
7. Add height variable.
8. Configure chart settings.
9. Select 36th row.



### Example 3
> **Summary**: Creates a control chart builder object with specific configuration settings, including rare event classification and Weibull limits.

<!-- Keywords: #JMPScriptingLanguage, #ControlChartBuilder, #RareEventClassification, #WeibullLimits, #DataTableOperations -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Rows( {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20} ) << exclude;
dt << Clear Select();
obj = dt << Control Chart Builder(
	Show Capability( 0 ),
	Class( Rare Event ),
	Variables( Y( :height ) ),
	Chart( Points( Statistic( "Count" ) ), Limits( Sigma( "Weibull" ) ), Warnings( Test Beyond Limits( 1 ) ) )
);
dt << select rows( {36} );
obj << Show Excluded Region( 0 );
```

**Code Explanation**:

1. Open data table.
2. Select first 20 rows.
3. Exclude selected rows.
4. Clear row selection.
5. Create control chart builder object.
6. Configure chart settings.
7. Select row 36.
8. Hide excluded region.



### Example 4
> **Summary**: Creates a control chart builder to analyze rare events, utilizing specific row selection and hiding/excluding techniques.

<!-- Keywords: #JMPScriptingLanguage, #ControlChartBuilder, #RareEventsAnalysis, #DataTableManipulation, #StatisticalVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Rows( [7 8 9] );
dt << Hide and Exclude;
Control Chart Builder(
	Show Control Panel( 0 ),
	Show Limit Summaries( 0 ),
	Show Capability( 0 ),
	Class( Rare Event ),
	Variables( Subgroup( :Date of ADE ), Y( :Doses since Last ADE ) ),
	Chart( Points( Statistic( "Count" ) ), Limits( Sigma( "Negative Binomial" ) ), Warnings( Test Beyond Limits( 1 ) ) )
);
```

**Code Explanation**:

1. Open data table.
2. Select specific rows.
3. Hide and exclude selected rows.
4. Create control chart builder.
5. Disable control panel.
6. Disable limit summaries.
7. Disable capability display.
8. Set chart type to rare event.
9. Define subgroup and Y variables.
10. Configure chart settings.



### Example 5
> **Summary**: Creates a Shewhart Attribute control chart for the 'sex' variable, utilizing JMP's Control Chart Builder platform.

<!-- Keywords: #JMPControlChartBuilder, #ShewhartAttribute, #PoissonLimits, #StatisticalProcessControl, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Rows( {5, 6, 7, 8, 9, 10} ) << exclude;
dt << Clear select;
obj = dt << Control Chart Builder(
	Show Excluded Region( 1 ),
	Show Capability( 0 ),
	Class( "Shewhart Attribute" ),
	Variables( Y( :sex ) ),
	Chart( Points( Statistic( "Count" ) ), Limits( Sigma( "Poisson" ) ) )
);
```

**Code Explanation**:

1. Open data table;
2. Select rows 5-10.
3. Exclude selected rows.
4. Clear row selection.
5. Create control chart builder.
6. Show excluded region.
7. Hide capability analysis.
8. Set chart class to Shewhart Attribute.
9. Add variable "sex".
10. Configure chart with count statistic and Poisson limits.



### Example 6
> **Summary**: Creates a Shewhart attribute control chart for sex variable, utilizing Control Chart Builder and configuring chart with count points and Poisson limits.

<!-- Keywords: #JMPScriptingLanguage, #ControlChartBuilder, #ShewhartAttribute, #PoissonLimits, #DataTableOperations -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Rows( {5, 6, 7, 8, 9, 10} ) << exclude;
dt << Clear select;
obj = dt << Control Chart Builder(
	Show Excluded Region( 1 ),
	Show Capability( 0 ),
	Class( "Shewhart Attribute" ),
	Variables( Y( :sex ) ),
	Chart( Points( Statistic( "Count" ) ), Limits( Sigma( "Poisson" ) ) )
);
obj << Show Excluded Region( 0 );
```

**Code Explanation**:

1. Open data table.
2. Select specific rows.
3. Exclude selected rows.
4. Clear row selection.
5. Create control chart builder object.
6. Show excluded region initially.
7. Hide capability analysis.
8. Set Shewhart attribute class.
9. Add sex variable to Y axis.
10. Configure chart with count points and Poisson limits.



### Example 7
> **Summary**: Creates a Control Chart Builder with specified subgroup variables and charts, excluding certain rows from analysis.

<!-- Keywords: #JSLScripting, #ControlChartBuilder, #DataExclusion, #SubgroupVariables, #ChartConfiguration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Rows( {16, 17, 18, 19, 20, 28, 29, 35, 36} ) << exclude;
obj = dt << Control Chart Builder(
	Show Excluded Region( 1 ),
	Show Capability( 0 ),
	Variables( Subgroup( :sex ), Subgroup( :age, Position( 1 ) ), Y( :height ) ),
	Chart( Position( 1 ) ),
	Chart( Position( 2 ) )
);
obj << Show Excluded Region( 0 );
dtsum = obj << Save summaries;
mymat = dtsum << get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Exclude specified rows.
3. Create Control Chart Builder.
4. Show excluded region.
5. Hide capability analysis.
6. Set subgroup variables.
7. Add first chart.
8. Add second chart.
9. Hide excluded region.
10. Save summaries.



### Example 8
> **Summary**: Creates a control chart builder object with specific settings, excluding certain rows and saving summaries to a new table.

<!-- Keywords: #JSLScripting, #ControlChartBuilder, #DataExclusion, #SummarySaving, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Rows( {16, 17, 18, 19, 20, 28, 29, 35, 36} ) << exclude;
obj = dt << Control Chart Builder(
	Show Excluded Region( 1 ),
	Show Capability( 0 ),
	Variables( Subgroup( :sex ), Subgroup( :age, Position( 1 ) ), Y( :height ) ),
	Chart( Position( 1 ) ),
	Chart( Position( 2 ) )
);
obj << Show Excluded Region( 0 );
dtsum = obj << Save summaries;
mymat = dtsum << get as matrix;
For( i = 1, i <= N Rows( mymat ), i++,
	j = i;
	If( i >= 3, j = j + 3 );
);
```

**Code Explanation**:

1. Open data table;
2. Exclude specific rows.
3. Create control chart builder object.
4. Enable excluded region display.
5. Disable capability display.
6. Set subgroup and Y variables.
7. Add first chart.
8. Add second chart.
9. Disable excluded region display.
10. Save summaries to new table.



### Example 1
> **Summary**: Creates a capability object from a data table, utilizing default names for variables.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #CapabilityObjectCreation, #DefaultNames, #JMPScripting -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = Capability( Y( NPN1, PNP1, PNP2, NPN2, PNP3, NPN3 ) );
```

**Code Explanation**:

1. Set default names.
2. Open data table.
3. Create capability object.



### Example 2
> **Summary**: Analyze and visualize data table variables, generating normalized box plots ordered by CPK ascending and sending the results to a report.

<!-- Keywords: #JMPScriptingLanguage, #CapabilityAnalysis, #BoxPlots, #CPKOrdering, #ReportGeneration -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Capability(
	Y( :PNP1, :PNP2, :NPN2, :PNP3, :IVP1, :PNP4, :NPN3, :IVP2 ),
	Spec Limits(
		PNP1( LSL( 164.389518443879 ), Target( 297.017932186294 ), USL( 429.64634592871 ) ),
		PNP2( LSL( -136.122122529984 ), Target( 465.441998810449 ), USL( 1067.00612015088 ) ),
		NPN2( LSL( 96.5938056459265 ), Target( 113.749001693573 ), USL( 130.90419774122 ) ),
		PNP3( LSL( 118.677820430348 ), Target( 130.289793286446 ), USL( 141.901766142544 ) ),
		IVP1( LSL( 59.6200689219354 ), Target( 63.4101104259706 ), USL( 67.2001519300058 ) ),
		PNP4( LSL( -54.4319216800649 ), Target( 238.738593912193 ), USL( 531.90910950445 ) ),
		NPN3( LSL( 97.317681821994 ), Target( 120.804672949535 ), USL( 144.291664077077 ) ),
		IVP2( LSL( 139.200434284046 ), Target( 142.305190917181 ), USL( 145.409947550315 ) )
	),
	Normalized Box Plots( 1 ),
	Capability Box Plots( 0 ),
	Goal Plot( 0 ),
	Order By( "CPK Ascending" ),
	SendToReport( Dispatch( {}, "Capability", OutlineBox, {Set Title( "Normalized box Plots, Order By CPK Ascending" )} ) )
);
```

**Code Explanation**:

1. Open data_table data
2. Define variables for analysis.
3. Set specification limits for each variable.
4. Enable normalized box plots.
5. Disable capability box plots.
6. Disable goal plot.
7. Order results by CPK ascending.
8. Generate report.
9. Set title for the report.
10. Display report.



### Example 3
> **Summary**: Runs a capability analysis by opening a table, defining Y variables and spec limits, and generating reports with capability indices and individual detail reports.

<!-- Keywords: #JSLScriptingLanguage, #CapabilityAnalysis, #StatisticalProcessControl, #QualityControl, #DataAnalysis -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Capability(
	Y( :PNP1, :PNP2, :NPN2, :PNP3, :IVP1, :PNP4, :NPN3, :IVP2 ),
	Spec Limits(
		PNP1( LSL( 164.389518443879 ), Target( 297.017932186294 ), USL( 429.64634592871 ) ),
		PNP2( LSL( -136.122122529984 ), Target( 465.441998810449 ), USL( 1067.00612015088 ) ),
		NPN2( LSL( 96.5938056459265 ), Target( 113.749001693573 ), USL( 130.90419774122 ) ),
		PNP3( LSL( 118.677820430348 ), Target( 130.289793286446 ), USL( 141.901766142544 ) ),
		IVP1( LSL( 59.6200689219354 ), Target( 63.4101104259706 ), USL( 67.2001519300058 ) ),
		PNP4( LSL( -54.4319216800649 ), Target( 238.738593912193 ), USL( 531.90910950445 ) ),
		NPN3( LSL( 97.317681821994 ), Target( 120.804672949535 ), USL( 144.291664077077 ) ),
		IVP2( LSL( 139.200434284046 ), Target( 142.305190917181 ), USL( 145.409947550315 ) )
	),
	Capability Indices Report( 1 ),
	Individual Detail Reports( 1 ),
	Capability Box Plots( 0 ),
	Goal Plot( 0 ),
	SendToReport( Dispatch( {}, "Capability", OutlineBox, {Set Title( "Capability Indices Report, Individual Detail Reports" )} ) )
);
```

**Code Explanation**:

1. Open table.
2. Define capability analysis.
3. Set Y variables.
4. Define spec limits.
5. Enable capability indices report.
6. Enable individual detail reports.
7. Disable capability box plots.
8. Disable goal plot.
9. Rename report title.
10. Execute capability analysis.



### Example 4
> **Summary**: Runs the capability analysis process by opening a data table, defining variables, setting specification limits, and executing the analysis on specified columns.

<!-- Keywords: #JSLScripting, #CapabilityAnalysis, #SpecificationLimits, #DataTableOperations, #JMPScriptingLanguage -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Capability(
	Y( :PNP1, :PNP2, :NPN2, :PNP3, :IVP1, :PNP4, :NPN3, :IVP2 ),
	Spec Limits(
		PNP1( LSL( 164.389518443879 ), Target( 297.017932186294 ), USL( 429.64634592871 ) ),
		PNP2( LSL( -136.122122529984 ), Target( 465.441998810449 ), USL( 1067.00612015088 ) ),
		NPN2( LSL( 96.5938056459265 ), Target( 113.749001693573 ), USL( 130.90419774122 ) ),
		PNP3( LSL( 118.677820430348 ), Target( 130.289793286446 ), USL( 141.901766142544 ) ),
		IVP1( LSL( 59.6200689219354 ), Target( 63.4101104259706 ), USL( 67.2001519300058 ) ),
		PNP4( LSL( -54.4319216800649 ), Target( 238.738593912193 ), USL( 531.90910950445 ) ),
		NPN3( LSL( 97.317681821994 ), Target( 120.804672949535 ), USL( 144.291664077077 ) ),
		IVP2( LSL( 139.200434284046 ), Target( 142.305190917181 ), USL( 145.409947550315 ) )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Define variables for capability analysis.
3. Set specification limits for each variable.
4. Execute capability analysis on specified columns.



### Example 5
> **Summary**: Runs the capability analysis for multiple variables, specifying limits and targets for each variable, and disables box plots.

<!-- Keywords: #JSLScripting, #CapabilityAnalysis, #SpecLimits, #BoxPlots, #DataTable -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Capability(
	Y( :PNP1, :PNP2, :NPN2, :PNP3, :IVP1, :PNP4, :NPN3, :IVP2 ),
	Spec Limits(
		PNP1( LSL( 164.389518443879 ), Target( 297.017932186294 ), USL( 429.64634592871 ) ),
		PNP2( LSL( -136.122122529984 ), Target( 465.441998810449 ), USL( 1067.00612015088 ) ),
		NPN2( LSL( 96.5938056459265 ), Target( 113.749001693573 ), USL( 130.90419774122 ) ),
		PNP3( LSL( 118.677820430348 ), Target( 130.289793286446 ), USL( 141.901766142544 ) ),
		IVP1( LSL( 59.6200689219354 ), Target( 63.4101104259706 ), USL( 67.2001519300058 ) ),
		PNP4( LSL( -54.4319216800649 ), Target( 238.738593912193 ), USL( 531.90910950445 ) ),
		NPN3( LSL( 97.317681821994 ), Target( 120.804672949535 ), USL( 144.291664077077 ) ),
		IVP2( LSL( 139.200434284046 ), Target( 142.305190917181 ), USL( 145.409947550315 ) )
	),
	Capability Box Plots( 0 )
);
```

**Code Explanation**:

1. Open data table;
2. Assign dataset to variable.
3. Perform capability analysis.
4. Specify Y variables.
5. Define PNP1 spec limits.
6. Define PNP2 spec limits.
7. Define NPN2 spec limits.
8. Define PNP3 spec limits.
9. Define IVP1 spec limits.
10. Define PNP4 spec limits.
11. Define NPN3 spec limits.
12. Define IVP2 spec limits.
13. Disable capability box plots.



### Example 6
> **Summary**: Runs the capability analysis for a data table, defining LSL and USL limits for OZONE, CO, SO2, PM10, and NO variables.

<!-- Keywords: #JMPScriptingLanguage, #CapabilityAnalysis, #DataTable, #SpecLimits, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
LSL = [., 4.5, 0.0014, 20.2, 0.015];
Target = [0.14, ., 0.05, 38.5, .];
USL = [0.33, 22.5, ., 57.1, 0.043];
obj = dt << Capability(
	Y( :OZONE, :CO, :SO2, :PM10, :NO ),
	Spec Limits(
		OZONE( Target( Target[1] ), USL( USL[1] ) ),
		CO( LSL( LSL[2] ), USL( USL[2] ) ),
		SO2( LSL( LSL[3] ), Target( Target[3] ) ),
		PM10( LSL( LSL[4] ), Target( Target[4] ), USL( USL[4] ) ),
		NO( LSL( LSL[5] ), USL( USL[5] ) )
	)
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Define LSL array.
3. Define Target array.
4. Define USL array.
5. Run Capability analysis.
6. Set Y variables.
7. Specify OZONE limits.
8. Specify CO limits.
9. Specify SO2 limits.
10. Specify PM10 limits.
11. Specify NO limits.
12. Retrieve report object.



## Capability using Set Property
> **Summary**: Filters and visualizes customer data from the Movie Customers dataset, displaying a distribution plot for Order Year and a filtered list of rentals.

<!-- Keywords: #JSLScriptingLanguage, #DataFilter, #DistributionPlot, #FilterChangeHandler, #GraphBuilder -->

**Code**:
```jsl
rentals = Open("data_table.jmp");
cust = Open("data_table.jmp");
inv = Open("data_table.jmp");
rentals:Customer ID << Set Property(
	"Link Reference",
	{Reference Table( "Movie Customers.jmp" ), Options(
		Row States Synchronization with Referenced Table( Accept( 1 ), Row States( Select, Exclude, Hide ) )
	)}
);
gdf = cust << Data Filter( Mode( Show( 1 ), Include( 1 ) ), Add Filter( columns( :Customer ID ), ) );
w = New Window( "test",
	dfcb = Data Filter Context Box(
		H List Box(
			df = rentals << Data Filter(
				Count Excluded Rows( 0 ),
				Local,
				Add Filter(
					columns(
						:Item Number,
						:Order Year,
						Referenced Column( "Rating[Item Number]", Reference( Column( :Item Number ), Reference( Column( :Rating ) ) ) )
					),
					Where( :Item Number >= 1070 ),
					Where( :Order Year <= 2008.3333 ),
					Where(
						Referenced Column( "Rating[Item Number]", Reference( Column( :Item Number ), Reference( Column( :Rating ) ) ) ) ==
						"PG"
					),
					Display(
						Referenced Column( "Rating[Item Number]", Reference( Column( :Item Number ), Reference( Column( :Rating ) ) ) ),
						N Items( 5 )
					)
				)
			),
			rentals << Distribution( Continuous Distribution( Column( :Order Year ), Outlier Box Plot( 0 ), Process Capability( 0 ) ) )
		)
	)
);
rs = df << Make Filter Change Handler(
	Function( {a},
		("Filter Change " || Char( a ));
		dfcb << DeleteBox;
	)
);
```

**Code Explanation**:

1. Open data table;
2. Open data table;
3. Open data table;
4. Link Customer ID to Movie Customers.jmp.
5. Create data filter for customers.
6. Create new window named "test".
7. Add data filter context box to window.
8. Add data filter for rentals.
9. Add distribution plot for Order Year.
10. Set up filter change handler.



## Capability using Set Values
> **Summary**: Creates and compares control charts with capability analysis, utilizing a custom data table and report generation.

<!-- Keywords: #JMPScriptingLanguage, #ControlCharts, #CapabilityAnalysis, #DataTables, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
:Disso << Set Values( {99, 99, 99} );
obj = Control Chart(
	Sample Label( :API Lot No ),
	Group Size( 1 ),
	KSigma( 3 ),
	Chart Col(
		:Disso,
		Individual Measurement( Test 1( 1 ) ),
		Capability(
			Distribution(
				Continuous Distribution(
					Column( :Disso ),
					Quantiles( 0 ),
					Summary Statistics( 0 ),
					Outlier Box Plot( 0 ),
					Normal Quantile Plot( 1 ),
					Capability Analysis( LSL( 70 ), Sigma( 3.49860483434369 ) )
				)
			)
		)
	)
);
rpt1 = obj << Report;
:Disso << Set Property( "Missing Value Codes", 99 );
obj2 = obj << Redo Analysis;
rpt = obj2 << Report;
a = rpt << get text;
b = rpt1 << get text;
ans = Equal( a, b );
```

**Code Explanation**:

1. Open data table.
2. Set values to 99.
3. Create control chart.
4. Set sample label.
5. Define group size.
6. Set KSigma to 3.
7. Add chart column.
8. Perform individual measurement.
9. Enable capability analysis.
10. Compare reports for equality.



## Capability using New Window
### Example 1
> **Summary**: Creates a capability analysis for OZONE, CO, and SO2 variables in a data table, generating box plots and specification limits.

<!-- Keywords: #JMPScriptingLanguage, #CapabilityAnalysis, #BoxPlots, #SpecificationLimits, #DataTable -->

**Code**:
```jsl
Open("data_table.jmp");
myCap = New Window( "Capability",
	V List Box(
		Capab = Capability(
			Y( :OZONE, :CO, :SO2 ),
			Capability Box Plots( 1 ),
			Spec Limits( OZONE( LSL( 0 ), Target( 0.1 ), USL( 0.3 ) ), CO( Target( 7 ), USL( 20 ) ), SO2( LSL( 0 ), Target( 0.05 ) ) )
		)
	)
);
Capab << Make Summary Table( ara );
Close( Data Table( 1 ), No Save );
a = 1;
```

**Code Explanation**:

1. Open data table.
2. Create new window named "Capability".
3. Add vertical list box to window.
4. Generate capability analysis for OZONE, CO, SO2.
5. Include capability box plots.
6. Set specification limits for each variable.
7. Make summary table from capability analysis.
8. Close original data table without saving.
9. Assign value 1 to variable a.



### Example 2
> **Summary**: Creates a capability analysis with box plots and specification limits for ozone, CO, and SO2 variables.

<!-- Keywords: #JSLScriptingLanguage, #CapabilityAnalysis, #BoxPlots, #SpecificationLimits, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
myCap = New Window( "Capability",
	V List Box(
		Capab = Capability(
			Y( :OZONE, :CO, :SO2 ),
			Capability Box Plots( 1 ),
			Spec Limits( OZONE( LSL( 0 ), Target( 0.1 ), USL( 0.3 ) ), CO( Target( 7 ), USL( 20 ) ), SO2( LSL( 0 ), Target( 0.05 ) ) )
		)
	)
);
Capab << Make Summary Table( ara );
Close( Data Table( 1 ), No Save );
a = 1;
```

**Code Explanation**:

1. Open table.
2. Create new window.
3. Add vertical list box.
4. Generate capability analysis.
5. Set Y variables.
6. Include capability box plots.
7. Define spec limits.
8. Create summary table.
9. Close data table.
10. Assign variable value.



### Example 3
> **Summary**: Runs the capability analysis for OZONE, CO, and SO2 variables in a data table, generating a summary table with box plots and specification limits.

<!-- Keywords: #JMPScriptingLanguage, #CapabilityAnalysis, #BoxPlots, #SpecificationLimits, #SummaryTable -->

**Code**:
```jsl
Open("data_table.jmp");
myCap = New Window( "Capability",
	V List Box(
		Capab = Capability(
			Y( :OZONE, :CO, :SO2 ),
			Capability Box Plots( 1 ),
			Spec Limits( OZONE( LSL( 0 ), Target( 0.1 ), USL( 0.3 ) ), CO( Target( 7 ), USL( 20 ) ), SO2( LSL( 0 ), Target( 0.05 ) ) )
		)
	)
);
Capab << Make Summary Table( ara );
```

**Code Explanation**:

1. Open data table;
2. Create new window named "Capability".
3. Add vertical list box to window.
4. Perform capability analysis on selected variables.
5. Enable capability box plots.
6. Set specification limits for OZONE.
7. Set specification limits for CO.
8. Set specification limits for SO2.
9. Generate summary table from analysis.
10. Store summary table in variable "ara".



## Capability using Delete Property
> **Summary**: Runs the analysis and reporting process for a continuous distribution of NPN1 data, utilizing Column Switcher to navigate through PNP1 and PNP2 columns.

<!-- Keywords: #JSLScriptingLanguage, #ContinuousDistribution, #ColumnSwitcher, #DataAnalysis, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:PNP1 << Delete Property( "Spec Limits" );
obj = dt << Distribution( Continuous Distribution( Column( :NPN1 ), Always use column properties( 0 ), Process Capability( 0 ) ) );
cs = obj << Column Switcher( :NPN1, {:NPN1, :PNP1, :PNP2} );
cs << next;
cs << next;
cs << next;
rpt = obj << report;
```

**Code Explanation**:

1. Open data_table data
2. Delete PNP1 spec limits.
3. Create distribution object for NPN1.
4. Configure continuous distribution settings.
5. Initialize column switcher with three columns.
6. Switch to next column (NPN1).
7. Switch to next column (PNP1).
8. Switch to next column (PNP2).
9. Generate report from distribution object.




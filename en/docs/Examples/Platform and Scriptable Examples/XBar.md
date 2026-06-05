# XBar

## XBar using Control Chart
### Example 1
> **Summary**: Creates a control chart with XBar plot and box plots for height, using a sample size of 5 and K-Sigma level of 3.

<!-- Keywords: #ControlChart, #XBarPlot, #BoxPlots, #KSigma, #JMPScriptingLanguage -->

**Code**:
```jsl
Open("data_table.jmp");
Control Chart( Sample Size( 5 ), KSigma( 3 ), Chart Col( :height, XBar( Box Plots( 1 ), Connect Points( 0 ) ) ), );
```

**Code Explanation**:

1. Open data table.
2. Create control chart.
3. Set sample size to 5.
4. Define K-Sigma level as 3.
5. Add height column to chart.
6. Use XBar plot for height.
7. Enable box plots for XBar.
8. Disable point connections in XBar.



### Example 2
> **Summary**: Creates a control chart for DIAMETER data, with XBar and S charts applied to Phase 1 and Phase 2, using JMP's Control Chart platform.

<!-- Keywords: #JMPControlChart, #XBar, #SChart, #PhaseAnalysis, #QualityControl -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Control Chart(
	Phase( :Phase ),
	Sample Label( :DAY ),
	KSigma( 3 ),
	Chart Col( :DIAMETER, XBar( Phase Level( "1" ), Phase Level( "2" ) ), S( Phase Level( "1" ), Phase Level( "2" ) ) )
);
```

**Code Explanation**:

1. Open data_table data
2. Create control chart object.
3. Set phase variable.
4. Define sample label.
5. Set KSigma to 3.
6. Add DIAMETER column.
7. Apply XBar chart for Phase 1.
8. Apply XBar chart for Phase 2.
9. Apply S chart for Phase 1.
10. Apply S chart for Phase 2.



### Example 3
> **Summary**: Creates a control chart object with customized settings, including sample label column, K-Sigma limits, and report appearance.

<!-- Keywords: #JSLScriptingLanguage, #ControlChart, #Customization, #ReportGeneration, #DataAnalysis -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Control Chart(
	Sample Label( :Sample ),
	KSigma( 3 ),
	Chart Col( :Weight, XBar( Show Zones( 1 ), Limits Precision( -1 ) ), R ),
	SendToReport(
		Dispatch( {"XBar of Weight"}, "Variables Control Chart of XBar", FrameBox,
			{Grid Line Order( 4 ), Reference Line Order( 5 ), DispatchSeg( CustomStreamSeg( 2 ), {Line Width( 3 )} ),
			DispatchSeg( CustomStreamSeg( 3 ), {Line Width( 3 )} )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create control chart object.
3. Set sample label column.
4. Define control limits.
5. Add XBar and R charts.
6. Customize report appearance.
7. Adjust grid line order.
8. Adjust reference line order.
9. Set custom line width for segments.
10. Apply custom settings.



### Example 4
> **Summary**: Creates a control chart for :Weight, with XBar and R charts, and customizes the appearance with needle display, zone shading, and frame adjustments.

<!-- Keywords: #ControlChart, #JSLScriptingLanguage, #XBarChart, #RChart, #Customization -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Control Chart(
	Sample Label( :Sample ),
	KSigma( 3 ),
	Chart Col( :Weight, XBar( Needle( 1 ), Connect Points( 0 ), Shade Zones( 1 ), Limits Precision( -1 ) ), R ),
	SendToReport(
		Dispatch( {}, "Variables Control Chart", OutlineBox,
			{Set Title( "Needle, Show Points, Show Center Line, Show Control Limits, Shade Zones" )}
		),
		Dispatch( {"XBar of Weight"}, "Variables Control Chart of XBar", FrameBox,
			{DispatchSeg( CustomStreamSeg( 2 ), {Line Width( 3 )} ), DispatchSeg( CustomStreamSeg( 3 ), {Line Width( 3 )} )}
		),
		Dispatch( {"XBar of Weight"}, FrameBox( 2 ), {Frame Size( 53, 208 )} ),
		Dispatch( {"R of Weight"}, FrameBox( 2 ), {Frame Size( 53, 208 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create control chart object.
3. Set sample label to :Sample.
4. Define KSigma value as 3.
5. Add XBar chart for :Weight.
6. Enable needle display.
7. Disable point connection.
8. Enable zone shading.
9. Set limits precision to -1.
10. Add R chart for :Weight.
11. Set chart title.
12. Adjust XBar frame line width.
13. Adjust R frame size.



### Example 5
> **Summary**: Creates a control chart to monitor and analyze diameter data, utilizing phase levels and sample labels.

<!-- Keywords: #ControlChart, #JMPScriptingLanguage, #DataAnalysis, #ProcessMonitoring, #StatisticalProcessControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << select rows( [1] );
dt << delete rows;
obj = dt << Control Chart(
	Phase( :Phase ),
	Sample Label( Column( dt, "DAY" ) ),
	KSigma( 3 ),
	Chart Col(
		:DIAMETER,
		XBar( Point Marker( 11 ), Phase Level( "1" ), Phase Level( "2" ) ),
		R( Point Marker( 11 ), Phase Level( "1" ), Phase Level( "2" ) )
	)
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Select first row.
3. Delete selected row.
4. Create control chart object.
5. Set phase variable.
6. Set sample label column.
7. Define KSigma value.
8. Add diameter column to chart.
9. Configure XBar plot settings.
10. Configure R plot settings.



## XBar using Add Column Properties
### Example 1
> **Summary**: Adds control limits to a height column in a JMP data table, setting average to 60, lower control limit to 50, and upper control limit to 70.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #ControlLimits, #ColumnProperties, #JSLAutomation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
:height << Add Column Properties( Set Property( "Control Limits", {XBar( Avg( 60 ), LCL( 50 ), UCL( 70 ) )} ) );
prpties = :height << Get Column Properties;
```

**Code Explanation**:

1. Open data table.
2. Access height column.
3. Add control limits properties.
4. Set average to 60.
5. Set lower control limit to 50.
6. Set upper control limit to 70.
7. Retrieve column properties.



### Example 2
> **Summary**: Adds control limits to a height column in a data table, setting XBar average to 60, LCL to 50, and UCL to 70.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #ControlLimits, #ColumnProperties, #JMPScripting -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
:height << Add Column Properties( Set Property( "Control Limits", {XBar( Avg( 60 ), LCL( 50 ), UCL( 70 ) )} ) );
prop = :height << get column properties();
```

**Code Explanation**:

1. Open data table;
2. Access height column.
3. Add control limits property.
4. Set XBar average to 60.
5. Set LCL to 50.
6. Set UCL to 70.
7. Retrieve column properties.




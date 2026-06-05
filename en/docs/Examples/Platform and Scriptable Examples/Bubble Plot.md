# Bubble Plot

### Example 1
> **Summary**: Generates a bubble plot with a map, visualizing the relationship between longitude, latitude, and time for different airlines, while customizing the map and axes.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #MapVisualization, #Customization, #DataVisualization -->

**Code**:
```jsl
// Bubble Plot with Map
// Open data table
dt = Open("data_table.jmp");
// Bubble Plot with Map
Bubble Plot(
	X( :Longitude ),
	Y( :Latitude ),
	Time( :Time ),
	Coloring( :Airline ),
	ID( :Tail Number ),
	Speed( 85.7075471698113 ),
	Trail Lines( "None" ),
	Show Time Annotation( 0 ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox,
			{Scale( "Geodesic" ),
			Min( -156.538045829491 ),
			Max( -63.2277528312555 ),
			Inc( 20 ), Minor Ticks( 0 ),
			Rotated Labels(
				"Horizontal"
			)}
		),
		Dispatch( {}, "2", ScaleBox,
			{Scale( "Geodesic" ),
			Min( 15.7179336335078 ),
			Max( 77.1916732325061 ),
			Inc( 10 ), Minor Ticks( 0 ),
			Rotated Labels(
				"Horizontal"
			)}
		),
		Dispatch( {}, "Bubble Plot",
			FrameBox,
			{
			Background Map(
				Images(
					"Simple Earth",
					Transparency( 0.7 )
				),
				Boundaries( "World" )
			), Grid Line Order( 3 ),
			Reference Line Order( 4 )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot.
3. Set X-axis to Longitude.
4. Set Y-axis to Latitude.
5. Set time variable to Time.
6. Color bubbles by Airline.
7. Identify bubbles by Tail Number.
8. Set speed for bubble movement.
9. Disable trail lines.
10. Customize map and axes.



### Example 2
> **Summary**: Creates a bubble plot to visualize the relationship between Birth and Death over time, with Country as an identifier, using data from a specified JMP data table.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #DataVisualization, #TimeSeriesAnalysis, #GeographicIdentification -->

**Code**:
```jsl
// Bubble Plot
// Open data table
dt = Open("data_table.jmp");
// Bubble Plot
Bubble Plot(
	X( :Birth ),
	Y( :Death ),
	Time( :Year ),
	ID( :Country ),
	Circle Size( 0.339622641509434 ),
	Time Index( 4.1 )
);
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot.
3. Set X axis to Birth.
4. Set Y axis to Death.
5. Set time variable to Year.
6. Use Country for ID.
7. Define circle size.
8. Set time index.



### Example 3
> **Summary**: Creates a bubble plot with needle plots for the high, close, and low stock prices of DJI over time, utilizing an overlay plot to visualize the data.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #NeedlePlot, #OverlayPlot, #FinancialDataVisualization -->

**Code**:
```jsl
// Bubble Plot
// Open data table
dt = Open("data_table.jmp");
// Bubble Plot
Bubble Plot(
	X( :"Price/Price2000"n ),
	Y( :Series ),
	Time( :date ),
	ID( :Series ),
	SendToReport(
		Dispatch( {}, "2", ScaleBox,
			{Scale( "Linear" ),
			Format( "Best" ), Min( -0.5 ),
			Max( 16.5 ), Inc( 1 ),
			Minor Ticks( 0 )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot.
3. Set X axis variable.
4. Set Y axis variable.
5. Set time variable.
6. Set ID variable.
7. Send report settings.
8. Configure scale box.
9. Set scale type.
10. Set format.



### Example 4
> **Summary**: Generates a bubble plot to visualize the relationship between time and heart rate, with coloring based on drink type and ID variables for testers. The plot includes trail bubbles and lines.

<!-- Keywords: #BubblePlot, #JMPScriptingLanguage, #Visualization, #DataAnalysis, #GraphicalRepresentation -->

**Code**:
```jsl
// Bubble Plot
// Open data table
dt = Open("data_table.jmp");
// Bubble Plot
Bubble Plot(
	X( :"Time (Numeric)"n ),
	Y( :Heart Rate ),
	Time( :"Time (Numeric)"n ),
	Coloring( :Drink ),
	ID( :Drink, :Testers ),
	Time Index( 4.6 ),
	Trail Bubbles( 1 ),
	Trail Lines( 1 ),
	All Labels( 0 ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox,
			{Min( 4.86973947895792 ),
			Max( 36.3958779282011 )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot.
3. Set X axis variable.
4. Set Y axis variable.
5. Define time variable.
6. Set coloring variable.
7. Define ID variables.
8. Set time index.
9. Enable trail bubbles.
10. Enable trail lines.



### Example 5
> **Summary**: Generates a bubble plot with needle plots to visualize the high, close, and low stock prices of DJI over time, using data from XYZ Stock Averages (plots).jmp.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #NeedlePlot, #StockPrices, #TimeSeriesAnalysis -->

**Code**:
```jsl
// Bubble Plot 2
// Open data table
dt = Open("data_table.jmp");
// Bubble Plot 2
Bubble Plot(
	X( :"Time (Numeric)"n ),
	Y( :Heart Rate ),
	Time( :"Time (Numeric)"n ),
	Coloring( :Type ),
	ID( :Brand, :Type ),
	Trail Lines( 1 ),
	All Labels( 0 ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox,
			{Min( 4.54909819639279 ),
			Max( 35.4064039903454 )}
		),
		Dispatch( {}, "2", ScaleBox,
			{Min( 62.5 ), Max( 94.3 ),
			Inc( 5 ), Minor Ticks( 1 )}
		)
	)
);
```

**Code Explanation**:

1. Open table.
2. Create bubble plot.
3. Set X axis variable.
4. Set Y axis variable.
5. Use time variable.
6. Apply coloring based on Type.
7. Identify using Brand and Type.
8. Enable trail lines.
9. Disable all labels.
10. Customize X scale.
11. Customize Y scale.



### Example 6
> **Summary**: Visualizes a bubble plot with needle plots for the high, close, and low stock prices of DJI over time, using an overlay plot to display these values.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #NeedlePlot, #OverlayPlot, #TimeSeriesAnalysis -->

**Code**:
```jsl
// Bubble Plot 3
// Open data table
dt = Open("data_table.jmp");
// Bubble Plot 3
Bubble Plot(
	X( :"Time (Numeric)"n ),
	Y( :"Rate/Baseline"n ),
	Time( :"Time (Numeric)"n ),
	Coloring( :Gender ),
	ID( :Gender ),
	Trail Bubbles( 1 ),
	Trail Lines( 1 ),
	All Labels( 0 ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox,
			{Min( 8.35671342685371 ),
			Max( 31.3445729133618 )}
		),
		Dispatch( {}, "2", ScaleBox,
			{Min( 0.959042666666667 ),
			Max( 1.2742 ), Inc( 0.05 ),
			Minor Ticks( 1 )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot.
3. Set X axis variable.
4. Set Y axis variable.
5. Use time for animation.
6. Color bubbles by gender.
7. Identify bubbles by gender.
8. Enable trail bubbles.
9. Enable trail lines.
10. Disable all labels.



### Example 7
> **Summary**: Generates a bubble plot to visualize the relationship between domestic gross, theaters opening weekend, and profitability of movies, with color coding based on Rotten Tomatoes scores.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #DataVisualization, #MovieIndustryAnalysis, #RottenTomatoes -->

**Code**:
```jsl
// Bubble Plot: Theaters Open Week by Domestic Gross
// Open data table
dt = Open("data_table.jmp");
// Bubble Plot: Theaters Open Week by Domestic Gross
Bubble Plot(
	X( :Domestic Gross ),
	Y( :Theaters Opening Wknd ),
	Sizes( :Profitability ),
	Coloring( :Rotten Tomatoes Score ),
	Trail Lines( "None" ),
	Color Levels(
		[4 27.25 50.5 73.75 97]
	),
	Title Position( 0, 0 ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox,
			{Min( -24.5501285347044 ),
			Max( 425.449871465296 ),
			Inc( 50 ), Minor Ticks( 0 ),
			Rotated Labels(
				"Horizontal"
			)}
		),
		Dispatch( {}, "2", ScaleBox,
			{Min( -259.328101335536 ),
			Max( 4740.67189866446 ),
			Inc( 1000 ), Minor Ticks( 1 ),
			Rotated Labels(
				"Horizontal"
			)}
		),
		Dispatch( {}, "Bubble Plot",
			FrameBox,
			{Frame Size( 389, 269 )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot.
3. Set X-axis variable.
4. Set Y-axis variable.
5. Define bubble sizes.
6. Apply color coding.
7. Remove trail lines.
8. Specify color levels.
9. Set title position.
10. Customize axis scales and labels.



### Example 8
> **Summary**: Visualizes a bubble plot to compare lead studios by budget, utilizing the Bubble Plot platform in JMP and customizing scale settings for X and Y axes.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #CustomScaleSettings, #DataVisualization, #LeadStudioAnalysis -->

**Code**:
```jsl
// Bubble Plot: Lead Studio by Budget
// Open data table
dt = Open("data_table.jmp");
// Bubble Plot: Lead Studio by Budget
Bubble Plot(
	X( :Production Budget ),
	Y( :Lead Studio Name ),
	Coloring( :Genre ),
	Trail Lines( "None" ),
	Title Position( 0, 0 ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox,
			{Min( -25 ), Max( 275 ),
			Inc( 50 ), Minor Ticks( 1 ),
			Rotated Labels(
				"Horizontal"
			)}
		),
		Dispatch( {}, "2", ScaleBox,
			{Min( -0.5 ), Max( 32.5 ),
			Inc( 1 ), Minor Ticks( 0 ),
			Rotated Labels(
				"Horizontal"
			)}
		),
		Dispatch( {}, "Bubble Plot",
			FrameBox,
			{Frame Size( 529, 625 )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot.
3. Set X axis to Production Budget.
4. Set Y axis to Lead Studio Name.
5. Color bubbles by Genre.
6. Remove trail lines.
7. Set title position.
8. Adjust X scale settings.
9. Adjust Y scale settings.
10. Set frame size.



### Example 9
> **Summary**: Visualizes wind speeds and landfall locations in the United States using a bubble plot, with customization options for scale settings and labeling.

<!-- Keywords: #JSLScriptingLanguage, #BubblePlot, #CustomizationOptions, #ScaleSettings, #Labeling -->

**Code**:
```jsl
// Bubble Plot
// Open data table
dt = Open("data_table.jmp");
// Bubble Plot
Bubble Plot(
	X( :Longitude ),
	Y( :Latitude ),
	Sizes( :"Wind (Knots)"n ),
	Time( :Date ),
	Coloring( :Landfall in USA ),
	ID( :Name and ID ),
	Speed( 220 ),
	Size as Sum( 0 ),
	All Labels( 0 ),
	No Labels( 0 ),
	Title Position( -88.679, 59.73 ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox,
			{Max( 10 ), Minor Ticks( 0 )}
		),
		Dispatch( {}, "2", ScaleBox,
			{Min( 0 ), Minor Ticks( 0 )}
		)
	)
);
```

**Code Explanation**:

1. Open table.
2. Create bubble plot.
3. Set X-axis to Longitude.
4. Set Y-axis to Latitude.
5. Define sizes by Wind (Knots).
6. Use Date for time.
7. Color by Landfall in USA.
8. Use Name and ID for labels.
9. Set speed to 220.
10. Configure scale settings.



### Example 10
> **Summary**: Generates a bubble plot with a map, visualizing wind speeds (in knots) across the globe over time, colored by landfall in the USA. The plot includes trail bubbles and size adjustments.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #MapVisualization, #WindSpeedAnalysis, #TimeSeries -->

**Code**:
```jsl
// Bubble Plot with Map
// Open data table
dt = Open("data_table.jmp");
// Bubble Plot with Map
Bubble Plot(
	X( :Longitude ),
	Y( :Latitude ),
	Sizes( :"Wind (Knots)"n ),
	Time( :Date ),
	Coloring( :Landfall in USA ),
	ID( :Name and ID ),
	Size as Sum( 0 ),
	Speed( 60.44 ),
	Trail Bubbles( 1 ),
	Color Levels( [0 0.25 0.5 0.75 1] ),
	Title Position( -88.679, 59.73 ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox,
			{Min( -110 ), Max( 10 ),
			Inc( 20 ), Minor Ticks( 0 ),
			Rotated Labels(
				"Horizontal"
			)}
		),
		Dispatch( {}, "2", ScaleBox,
			{Min( 0 ), Max( 70 ),
			Inc( 10 ), Minor Ticks( 0 ),
			Rotated Labels(
				"Horizontal"
			)}
		),
		Dispatch( {}, "Bubble Plot",
			FrameBox,
			{Frame Size( 465, 348 ),
			Background Map(
				Images( "Simple Earth" )
			), Grid Line Order( 3 ),
			Reference Line Order( 2 )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot.
3. Set X axis to Longitude.
4. Set Y axis to Latitude.
5. Use Wind (Knots) for sizes.
6. Set time to Date.
7. Color by Landfall in USA.
8. Use Name and ID for IDs.
9. Configure size as sum.
10. Adjust speed and trail bubbles.



### Example 11
> **Summary**: Visualizes geographic data by creating a bubble plot with wind speed, latitude, and longitude, colored by statistical values, and customized with trail bubbles, labels, and send-to-report features.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #GeographicDataVisualization, #CustomizationOptions, #Send-To-Report -->

**Code**:
```jsl
// Bubble Plot Example
// Open data table
dt = Open("data_table.jmp");
// Bubble Plot Example
Current Data Table() << select all rows;
bp =
Bubble Plot(
	X( :LON ),
	Y( :LAT ),
	Sizes( :WIND ),
	Time( :Date ),
	Coloring( :STAT ),
	Speed( 82.28 ),
	Bubble Size( 94.85 ),
	Time Index( 29.892 ),
	Trail Bubbles( 1 ),
	Trail Lines( 1 ),
	All Labels( 0 ),
	No Labels( 0 ),
	Selectable Across Gaps( 1 ),
	Title Position( -82.409, 32.329 ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox,
			{Min( -92.6584615384615 ),
			Max( -74 ), Inc( 2 ),
			Minor Ticks( 0 )}
		),
		Dispatch( {}, "Bubble Plot",
			FrameBox,
			{Frame Size( 531, 545 ),
			Background Map(
				Images(
					"Detailed Earth"
				)
			), Grid Line Order( 2 ),
			Reference Line Order( 3 )}
		)
	)
);
bp << go;
```

**Code Explanation**:

1. Open table.
2. Select all rows.
3. Create bubble plot.
4. Set X-axis to LON.
5. Set Y-axis to LAT.
6. Set bubble sizes to WIND.
7. Set time axis to Date.
8. Color bubbles by STAT.
9. Configure bubble plot settings.
10. Display bubble plot.



### Example 12
> **Summary**: Visualizes a bubble plot street map using Longitude and Latitude coordinates, with bubble sizes defined by POP values, and applies a color theme.

<!-- Keywords: #JSLScriptingLanguage, #BubblePlot, #StreetMap, #GeographicVisualization, #DataVisualization -->

**Code**:
```jsl
// Bubble Plot Street Map
// Open data table
dt = Open("data_table.jmp");
// Bubble Plot Street Map
Bubble Plot(
	X( :Longitude ),
	Y( :Latitude ),
	Sizes( :POP ),
	ID( :Lead ),
	Bubble Size( 18.1 ),
	Label( "None" ),
	Trail Lines( "None" ),
	Color Theme(
		"Green to Black to Red"
	),
	Title Position( 0, 0 ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox,
			{Min( -125.667129872271 ),
			Max( -69.8506306784654 ),
			Inc( 10 ), Minor Ticks( 1 ),
			Rotated Labels(
				"Horizontal"
			)}
		),
		Dispatch( {}, "2", ScaleBox,
			{Min( 21.9791666666667 ),
			Max( 53.1081814236111 ),
			Inc( 5 ), Minor Ticks( 1 ),
			Rotated Labels(
				"Horizontal"
			)}
		),
		Dispatch( {}, "Bubble Plot",
			FrameBox,
			{Frame Size( 598, 343 ),
			Background Map(
				Images(
					"Street Map Service"
				)
			), Grid Line Order( 3 ),
			Reference Line Order( 4 )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot.
3. Set X axis to Longitude.
4. Set Y axis to Latitude.
5. Define bubble sizes by POP.
6. Use Lead for bubble IDs.
7. Set bubble size to 18.1.
8. Disable labels.
9. Disable trail lines.
10. Apply color theme.



### Example 13
> **Summary**: Generates a dynamic bubble plot from an open data table, visualizing the relationship between 'Portion 0-19', 'Portion60+', and 'Pop' over time for each country.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #DynamicVisualization, #DataTable, #TimeSeriesAnalysis -->

**Code**:
```jsl
// Bubble Plot Dynamic
// Open data table
dt = Open("data_table.jmp");
// Bubble Plot Dynamic
Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	Time( :Year ),
	ID( :Country )
);
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot.
3. Set X axis variable.
4. Set Y axis variable.
5. Define sizes variable.
6. Specify time variable.
7. Identify country variable.



### Example 14
> **Summary**: Visualizes the relationship between 'Portion 0-19' and 'Portion60+' using a bubble plot, with the size of each bubble representing the 'Pop' value.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #DataVisualization, #StatisticalAnalysis, #DataTable -->

**Code**:
```jsl
// Bubble Plot Static
// Open data table
dt = Open("data_table.jmp");
// Bubble Plot Static
Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop )
);
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot.
3. Set X axis variable.
4. Set Y axis variable.
5. Define bubble sizes.



### Example 15
> **Summary**: Generates a bubble plot with sizes representing population and colors indicating region and country, using data from the 'data_table.jmp' file.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #DataVisualization, #GeographicAnalysis, #PopulationData -->

**Code**:
```jsl
// Bubble Plot Region
// Open data table
dt = Open("data_table.jmp");
// Bubble Plot Region
Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	Time( :Year ),
	ID( :Region, :Country )
);
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot.
3. Set X axis variable.
4. Set Y axis variable.
5. Define sizes variable.
6. Set time variable.
7. Assign ID variables.



### Example 16
> **Summary**: Visualizes a bubble plot to compare country performance by year, with coloring based on the portion 0-19 and adjustable frame size.

<!-- Keywords: #JSLScriptingLanguage, #BubblePlot, #DataVisualization, #InteractiveReporting, #JMP -->

**Code**:
```jsl
// Bubble Country by Year
// Open data table
dt = Open("data_table.jmp");
// Bubble Country by Year
Bubble Plot(
	X( :Year ),
	Y( :Country ),
	Coloring( :"Portion 0-19"n ),
	All Labels( 0 ),
	SendToReport(
		Dispatch( {}, "Bubble Plot",
			FrameBox,
			Frame Size( 475, 326 )
		)
	)
);
```

**Code Explanation**:

1. Open table.
2. Create bubble plot.
3. Set X-axis to Year.
4. Set Y-axis to Country.
5. Color by Portion 0-19.
6. Disable all labels.
7. Adjust frame size.
8. Report sent to output.



### Example 17
> **Summary**: Generates a bubble plot with country-specific data, featuring X-axis variable 'Portion 0-19', Y-axis variable 'Portion60+', and sizes defined by the 'Pop' column. The plot is customized with specific circle size, animation speed, and all labels.

<!-- Keywords: #JMP, #BubblePlot, #DataVisualization, #Customization, #Scripting -->

**Code**:
```jsl
// Bubble By Country
// Open data table
dt = Open("data_table.jmp");
// Bubble By Country
Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	Time( :Year ),
	ID( :Country ),
	Speed( 69.1792452830189 ),
	Circle Size( 0.00742924528301887 ),
	All Labels( 1 ),
	SendToReport(
		Dispatch( {}, "Bubble Plot",
			FrameBox,
			Frame Size( 495, 338 )
		)
	)
);
```

**Code Explanation**:

1. Open table.
2. Create bubble plot.
3. Set X-axis variable.
4. Set Y-axis variable.
5. Define bubble sizes.
6. Add time variable.
7. Identify countries.
8. Set animation speed.
9. Adjust circle size.
10. Show all labels.



### Example 18
> **Summary**: Visualizes the relationship between portion sizes and population by region, using a bubble plot to display data from a table.

<!-- Keywords: #JSLScriptingLanguage, #BubblePlot, #DataVisualization, #RegionAnalysis, #PopulationStudy -->

**Code**:
```jsl
// Bubble by Region
// Open data table
dt = Open("data_table.jmp");
// Bubble by Region
Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	Time( :Year ),
	ID( :Region, :Country )
);
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot.
3. Set X-axis variable.
4. Set Y-axis variable.
5. Define bubble sizes.
6. Add time dimension.
7. Identify regions and countries.



### Example 19
> **Summary**: Visualizes SAT Math and Verbal scores by state using a bubble plot, with size proportional to the percentage of students taking the test in 2004.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #DataVisualization, #State-LevelAnalysis, #Education -->

**Code**:
```jsl
// Bubble Plot by State
// Open data table
dt = Open("data_table.jmp");
// Bubble Plot by State
Bubble Plot(
	X( :SAT Math ),
	Y( :SAT Verbal ),
	Sizes( :"% Taking (2004)"n ),
	Time( :Year ),
	ID( :State ),
	All Labels( 1 ),
	SendToReport(
		Dispatch( {}, "Bubble Plot",
			FrameBox,
			Frame Size( 539, 329 )
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot.
3. Set X axis to SAT Math.
4. Set Y axis to SAT Verbal.
5. Define bubble sizes.
6. Use Year for time dimension.
7. Identify bubbles by State.
8. Enable all labels.
9. Adjust report size.
10. Display bubble plot.



### Example 20
> **Summary**: Generates a bubble plot by region, visualizing SAT Math and Verbal scores over time, with the size of each bubble representing the percentage of students taking the test in 2004.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #DataVisualization, #TimeSeriesAnalysis, #RegionalAnalysis -->

**Code**:
```jsl
// Bubble Plot by Region
// Open data table
dt = Open("data_table.jmp");
// Bubble Plot by Region
Bubble Plot(
	X( :SAT Math ),
	Y( :SAT Verbal ),
	Sizes( :"% Taking (2004)"n ),
	Time( :Year ),
	ID( :Region, :State ),
	All Labels( 1 ),
	SendToReport(
		Dispatch( {}, "Bubble Plot",
			FrameBox,
			Frame Size( 550, 336 )
		)
	)
);
```

**Code Explanation**:

1. Open table.
2. Create bubble plot.
3. Set X axis variable.
4. Set Y axis variable.
5. Define bubble sizes.
6. Set time variable.
7. Identify regions and states.
8. Display all labels.
9. Adjust frame size.
10. Finalize report.



### Example 21
> **Summary**: Generates a bubble plot to visualize CO2 emissions from liquid and solid fuel consumption, with population as the size variable and year as the time variable.

<!-- Keywords: #BubblePlot, #JMPScriptingLanguage, #DataVisualization, #EnvironmentalDataAnalysis, #TimeSeriesPlot -->

**Code**:
```jsl
// Bubble Plot
// Open data table
dt = Open("data_table.jmp");
// Bubble Plot
Bubble Plot(
	X(
		:
		CO2 emissions from liquid fuel consumption
	),
	Y(
		:
		CO2 emissions from solid fuel consumption
	),
	Sizes( :Population ),
	Time( :Year ),
	ID( :Nation )
);
```

**Code Explanation**:

1. Open table.
2. Create bubble plot.
3. Set X axis variable.
4. Set Y axis variable.
5. Define size variable.
6. Set time variable.
7. Set ID variable.



### Example 22
> **Summary**: Generates a bubble plot to visualize the mean values of X and Y, with electors as the size of each bubble, colored by winner, and labeled by state. The plot is customized with specific title position, scale boxes for longitude and latitude, and frame box settings.

<!-- Keywords: #JMP, #BubblePlot, #DataVisualization, #ScriptingLanguage, #Customization -->

**Code**:
```jsl
// Bubble Plot
// Open data table
dt = Open("data_table.jmp");
// Bubble Plot
Bubble Plot(
	X( :"Mean(X)"n ),
	Y( :"Mean(Y)"n ),
	Sizes( :Electors ),
	Coloring( :Winner ),
	ID( :State ),
	All Labels( 0 ),
	No Labels( 0 ),
	Title Position(
		-82.1216666666667,
		21.0925925925926
	),
	SendToReport(
		Dispatch( {}, "1", ScaleBox,
			{Scale( "Geodesic US" ),
			Format(
				"Longitude DDD"("PUNDIR"),
				16,
				0
			), Min( -121.322753863196 ),
			Max( -75.9486913631956 ),
			Inc( 10 ), Minor Ticks( 0 )}
		),
		Dispatch( {}, "2", ScaleBox,
			{Scale( "Geodesic US" ),
			Format(
				"Latitude DDD"("PUNDIR"),
				16,
				0
			), Min( 21.0925925925926 ),
			Max( 52.5592592592593 ),
			Inc( 5 ), Minor Ticks( 0 )}
		),
		Dispatch( {}, "Bubble Plot",
			FrameBox,
			{Frame Size( 623, 432 ),
			Background Map(
				Boundaries( "US States" )
			), Grid Line Order( 2 ),
			Reference Line Order( 3 ),
			DispatchSeg(
				Shape Seg( 1 ),
				{
				Line Color(
					{204, 204, 204}
				), Fill Color( "None" ),
				Missing shape fill(
					2147483647
				),
				Missing value fill(
					-14540253
				)}
			)}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot.
3. Set X axis.
4. Set Y axis.
5. Define bubble sizes.
6. Set bubble colors.
7. Identify data points.
8. Disable all labels.
9. Disable no labels.
10. Configure title position.



### Example 23
> **Summary**: Generates a bubble plot with needle plots for the high, close, and low stock prices of DJI over time, utilizing an overlay plot to visualize the data.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #NeedlePlot, #OverlayPlot, #FinancialDataVisualization -->

**Code**:
```jsl
// Bubble Plot
// Open data table
dt = Open("data_table.jmp");
// Bubble Plot
Bubble Plot(
	X( :part ),
	Y( :cycle ),
	Sizes( :wolfer ),
	Coloring( :wolfer ),
	Circle Size( 5.9433962264151 ),
	SendToReport(
		Dispatch( {}, "2", ScaleBox,
			{Scale( "Linear" ),
			Format( "Best" ), Min( 1740 ),
			Max( 1920 ), Inc( 10 )}
		),
		Dispatch( {}, "Bubble Plot",
			FrameBox,
			Frame Size( 482, 353 )
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot.
3. Set X axis variable.
4. Set Y axis variable.
5. Define bubble sizes.
6. Color bubbles based on variable.
7. Set circle size.
8. Adjust X scale settings.
9. Set X axis range.
10. Configure frame size.



### Example 24
> **Summary**: Generates a bubble plot with needle plots for the high, close, and low stock prices of DJI over time, utilizing the Open data table function and Bubble Plot syntax.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #NeedlePlot, #StockPrices, #TimeSeries -->

**Code**:
```jsl
// Bubble Plot 2
// Open data table
dt = Open("data_table.jmp");
// Bubble Plot 2
Bubble Plot(
	X( :part ),
	Y( :wolfer ),
	Sizes( :wolfer ),
	Time( :cycle ),
	ID( :part ),
	Coloring( :wolfer ),
	Time Index( 7.89999999999999 )
);
```

**Code Explanation**:

1. Open table.
2. Create bubble plot.
3. Set X-axis variable.
4. Set Y-axis variable.
5. Define bubble sizes.
6. Add time variable.
7. Assign ID variable.
8. Apply coloring.
9. Set time index.
10. Display plot.



### Example 25
> **Summary**: Generates a bubble plot with needle plots for the high, close, and low stock prices of DJI over time, using data from XYZ Stock Averages (plots).jmp.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #NeedlePlot, #StockPrices, #TimeSeriesAnalysis -->

**Code**:
```jsl
// Bubble Plot 3
// Open data table
dt = Open("data_table.jmp");
// Bubble Plot 3
Bubble Plot(
	X( :year ),
	Y( :wolfer ),
	Sizes( :wolfer ),
	Time( :year ),
	Coloring( :wolfer ),
	Speed( 180.745283018868 ),
	Time Index( 49.3493632075472 ),
	Trails( 1 ),
	All Labels( 1 ),
	Drop Zones( 1 ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox,
			{Scale( "Linear" ),
			Format( "Best" ), Min( 1740 ),
			Max( 1940 ), Inc( 11 ),
			Show Major Grid( 1 )}
		),
		Dispatch( {}, "Bubble Plot",
			FrameBox,
			Frame Size( 679, 185 )
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot.
3. Set X axis to year.
4. Set Y axis to wolfer.
5. Set sizes to wolfer.
6. Set time to year.
7. Set coloring to wolfer.
8. Configure speed and time index.
9. Enable trails and labels.
10. Adjust report settings.



### Example 26
> **Summary**: Generates a bubble plot with needle plots for the high, close, and low stock prices of DJI over time, utilizing the SendToReport function to customize scales and frame sizes.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #NeedlePlot, #StockPrices, #TimeSeries -->

**Code**:
```jsl
Open("data_table.jmp");
Bubble Plot(
	X( :Name( "Portion 0-19" ) ),
	Y( :Name( "Portion60+" ) ),
	Sizes( :Pop ),
	Time( :Year ),
	ID( :Region, :Country ),
	Title Position( 0.7305, 0.088 ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox, {Format( "Best", 10 ), Min( 0.62 ), Max( 0.75 ), Inc( 0.02 ), Minor Ticks( 1 )} ),
		Dispatch( {}, "2", ScaleBox,
			{Scale( "Log" ), Format( "Best", 10 ), Min( 0.0291496571111285 ), Max( 0.0988440936582523 ), Inc( 1 ), Minor Ticks( 1 )}
		),
		Dispatch( {}, "Bubble Plot", FrameBox, {Frame Size( 510, 360 )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot.
3. Set X-axis variable.
4. Set Y-axis variable.
5. Define bubble sizes.
6. Add time variable.
7. Assign ID variables.
8. Position title.
9. Customize X-axis scale.
10. Customize Y-axis scale.



### Example 27
> **Summary**: Generates a bubble plot to visualize SAT Math scores across states, utilizing the Population as X-axis and applying logarithmic scale to Y-axis. Additionally, creates a scatterplot matrix with lower triangular format.

<!-- Keywords: #JSL, #BubblePlot, #ScatterplotMatrix, #LogScale, #DataVisualization -->

**Code**:
```jsl
Open("data_table.jmp");
bp = Bubble Plot( X( :Population ), Y( :SAT Math ), Time( :Year ), ID( :State ), All Labels( 0 ) );
Report( bp )[AxisBox( 2 )] << Scale( Log );
sm = Scatterplot Matrix( Y( :SAT Math ), X( :Population ), Matrix Format( "Lower Triangular" ), Ellipse Color( 3 ), Fit Line( 0 ) );
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot.
3. Set X axis to Population.
4. Set Y axis to SAT Math.
5. Set time axis to Year.
6. Use State for identification.
7. Hide all labels.
8. Apply logarithmic scale to Y axis.
9. Create scatterplot matrix.
10. Set Y variables to SAT Math.
11. Set X variables to Population.
12. Use lower triangular format.
13. Color ellipses.
14. Disable fit lines.



### Example 28
> **Summary**: Generates a bubble plot and scatterplot matrix to visualize the relationship between population and SAT Math scores across states, with log-scaled X-axes.

<!-- Keywords: #JSLScriptingLanguage, #BubblePlot, #ScatterplotMatrix, #LogScale, #DataVisualization -->

**Code**:
```jsl
Open("data_table.jmp");
bp = Bubble Plot( X( :Population ), Y( :SAT Math ), Time( :Year ), ID( :State ), All Labels( 0 ) );
Report( bp )[AxisBox( 2 )] << Scale( Log );
sm = Scatterplot Matrix( Y( :SAT Math ), X( :Population ), Matrix Format( "Lower Triangular" ), Ellipse Color( 3 ), Fit Line( 0 ) );
Report( sm )[AxisBox( 2 )] << Scale( Log );
```

**Code Explanation**:

1. Open data table;
2. Create bubble plot.
3. Set bubble plot X-axis to log scale.
4. Create scatterplot matrix.
5. Set scatterplot matrix X-axis to log scale.



### Example 29
> **Summary**: Generates a bubble plot with needle plots for the high, close, and low stock prices of DJI over time, using data from XYZ Stock Averages (plots).

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #NeedlePlot, #StockPrices, #TimeSeries -->

**Code**:
```jsl
Open("data_table.jmp");
Bubble Plot(
	X( :Longitude ),
	Y( :Latitude ),
	Sizes( :Name( "Wind (Knots)" ) ),
	Time( :Date ),
	Coloring( :Landfall in USA ),
	ID( :Name and ID ),
	Speed( 60.44 ),
	Trail Bubbles( "Selected" ),
	Color Levels( [0 0.25 0.5 0.75 1] ),
	Title Position( -88.679, 59.73 ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox, {Scale( "Geodesic" ), Min( -110 ), Max( 10 ), Inc( 20 ), Minor Ticks( 0 )} ),
		Dispatch( {}, "2", ScaleBox,
			{Scale( "Geodesic" ), Min( -9.90322580645161 ), Max( 79.9032258064516 ), Inc( 10 ), Minor Ticks( 0 ),
			Add Ref Line( {25, 50}, "Solid", "Orange", "Continental US", 1, 0.25 )}
		),
		Dispatch( {}, "Bubble Plot", FrameBox,
			{Frame Size( 465, 348 ), Background Map( Images( "Simple Earth" ) ), Grid Line Order( 3 ), Reference Line Order( 2 )}
		)
	)
);
```

**Code Explanation**:

1. Open data_table data
2. Create bubble plot.
3. Set X axis to Longitude.
4. Set Y axis to Latitude.
5. Use Wind (Knots) for sizes.
6. Use Date for time.
7. Color by Landfall in USA.
8. Use Name and ID for IDs.
9. Set speed to 60.44.
10. Display selected trail bubbles.



### Example 30
> **Summary**: Creates a bubble plot with ozone concentration on the y-axis, date on the x-axis, and sizes based on ozone concentration, while formatting the x-axis for month/year display.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #DateAxis, #OzoneConcentration, #SizeScaling -->

**Code**:
```jsl
Open("data_table.jmp");
Bubble Plot(
	X( :date ),
	Y( :Ozone Concentration ),
	Sizes( :Ozone Concentration ),
	Title Position( 0, 0 ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox,
			{Format( "m/y", 7 ), Min( 1609459200 ), Max( 2209075200 ), Interval( "Year" ), Inc( 5 ), Minor Ticks( 3 ),
			Label Row Nesting( 2 ), Label Row( 1, Show Minor Labels( 1 ) ), Label Row( 2, Show Minor Labels( 1 ) )}
		),
		Dispatch( {}, "2", ScaleBox, {Format( "Best", 9 ), Min( 1 ), Max( 9 ), Inc( 1 ), Minor Ticks( 1 )} ),
		Dispatch( {}, "Bubble Plot", FrameBox, {Frame Size( 492, 360 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create bubble plot.
3. Set X-axis to date.
4. Set Y-axis to ozone concentration.
5. Use ozone concentration for sizes.
6. Position title at origin.
7. Format X-axis with month/year.
8. Set X-axis min and max dates.
9. Set X-axis interval to years.
10. Configure X-axis labels and minor ticks.



### Example 31
> **Summary**: Creates two bubble plots with customized scales and trail lines, using data from a specified JMP data table.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #Customization, #DataVisualization, #ScaleConfiguration -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
Bubble Plot(
	X( :name ),
	Y( :height ),
	Trail Lines( "None" ),
	Title Position( 0, 0 ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox, {Min( -0.5 ), Max( 38.5 ), Inc( 1 ), Minor Ticks( 0 ), Rotated Labels( "Vertical" )} ),
		Dispatch( {}, "2", ScaleBox, {Min( 50 ), Max( 72.5 ), Inc( 5 ), Minor Ticks( 1 ), Rotated Labels( "Horizontal" )} )
	)
);
Bubble Plot(
	X( :height ),
	Y( :name ),
	Trail Lines( "None" ),
	Title Position( 0, 0 ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox, {Min( 50 ), Max( 72.5 ), Inc( 5 ), Minor Ticks( 1 ), Rotated Labels( "Horizontal" )} ),
		Dispatch( {}, "2", ScaleBox, {Min( -0.5 ), Max( 38.5 ), Inc( 1 ), Minor Ticks( 0 ), Rotated Labels( "Horizontal" )} )
	)
);
```

**Code Explanation**:

1. Set default names scope.
2. Open data table;
3. Create first bubble plot.
4. Set X-axis variable.
5. Set Y-axis variable.
6. Disable trail lines.
7. Set title position.
8. Configure X-axis scale.
9. Configure Y-axis scale.
10. Create second bubble plot.



### Example 32
> **Summary**: Creates a bubble plot with adjustable scales and frame size, using sex as an ID variable.

<!-- Keywords: #JSLScriptingLanguage, #BubblePlot, #DataVisualization, #InteractivePlotting, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bp = dt << Bubble Plot(
	X( :height ),
	Y( :weight ),
	ID( :sex ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox, {Min( 1050 ), Max( 1450 ), Inc( 50 ), Minor Ticks( 0 )} ),
		Dispatch( {}, "2", ScaleBox, {Min( 100 ), Max( 109 ), Inc( 1 ), Minor Ticks( 0 )} ),
		Dispatch( {}, "Bubble Plot", FrameBox, {Frame Size( 270, 212 )} )
	)
);
dt << Add Rows( 10 );
```

**Code Explanation**:

1. Open data table;
2. Create bubble plot.
3. Set X-axis to height.
4. Set Y-axis to weight.
5. Use sex for IDs.
6. Adjust X-axis scale.
7. Adjust Y-axis scale.
8. Set frame size.
9. Add 10 rows to dataset.



### Example 33
> **Summary**: Creates a bubble plot with adjustable X-axis and Y-axis scales, using sex as IDs, and sets frame size for visualizing height and weight data.

<!-- Keywords: #JSLScriptingLanguage, #BubblePlot, #DataVisualization, #JMP, #GraphicalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bp = dt << Bubble Plot(
	X( :height ),
	Y( :weight ),
	ID( :sex ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox, {Min( 1050 ), Max( 1450 ), Inc( 50 ), Minor Ticks( 0 )} ),
		Dispatch( {}, "2", ScaleBox, {Min( 100 ), Max( 109 ), Inc( 1 ), Minor Ticks( 0 )} ),
		Dispatch( {}, "Bubble Plot", FrameBox, {Frame Size( 270, 212 )} )
	)
);
dt << Add Rows( 10 );
bp << X as Sum( 1 );
```

**Code Explanation**:

1. Open data table;
2. Create bubble plot.
3. Set X-axis to height.
4. Set Y-axis to weight.
5. Use sex for IDs.
6. Adjust X-axis scale.
7. Adjust Y-axis scale.
8. Set frame size.
9. Add 10 rows to data table.
10. Update X-axis to sum.



### Example 34
> **Summary**: Creates a bubble plot with customized scales and frame size, using the Open() function to load data from a JMP data table.

<!-- Keywords: #JSLScriptingLanguage, #BubblePlot, #Customization, #DataVisualization, #JMP -->

**Code**:
```jsl
Open("data_table.jmp");
Bubble Plot(
	X( :month ),
	Y( :Ozone Concentration ),
	Time( :month ),
	ID( :Winter Months Intervention ),
	Speed( 36.04 ),
	Time Index( 3.9 ),
	Show Roles( 1 ),
	Title Position( 6.6188, 2.08159015873016 ),
	SendToReport(
		Dispatch( {}, "month", ScaleBox, {Format( "Best", 9 ), Min( -1.2 ), Max( 14.2 ), Inc( 5 ), Minor Ticks( 1 )} ),
		Dispatch( {}, "Ozone Concentration", ScaleBox, {Format( "Best", 9 ), Min( -0.3 ), Max( 10.2 ), Inc( 2 ), Minor Ticks( 1 )} ),
		Dispatch( {}, "Bubble Plot", FrameBox, {Frame Size( 756, 360 )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot.
3. Set X-axis to month.
4. Set Y-axis to Ozone Concentration.
5. Define time variable as month.
6. Use Winter Months Intervention for ID.
7. Set animation speed.
8. Adjust time index.
9. Show roles in plot.
10. Customize title position and axis scales.



### Example 35
> **Summary**: Creates a bubble plot to visualize CO2 emissions from liquid and solid fuel consumption, with population sizes and year as variables, and customizes report scale.

<!-- Keywords: #JSLScriptingLanguage, #BubblePlot, #CustomReportScale, #DataVisualization, #EnvironmentalMonitoring -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bp = Bubble Plot(
	X( :CO2 emissions from liquid fuel consumption ),
	Y( :CO2 emissions from solid fuel consumption ),
	Sizes( :Population ),
	Time( :Year ),
	ID( :Nation ),
	Circle Size( 20047.1698113208 ),
	Time Index( 2 ),
	All Labels( 0 ),
	SendToReport(
		Dispatch( {}, "2", ScaleBox, {Scale( "Log" ), Format( "Best" ), Min( 0.0001 ), Max( 238471 ), Inc( 1 ), Minor Ticks( 8 )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot.
3. Set X axis variable.
4. Set Y axis variable.
5. Define bubble sizes.
6. Set time variable.
7. Identify data points.
8. Set circle size.
9. Select time index.
10. Configure report scale.



### Example 36
> **Summary**: Creates a bubble plot to visualize stock prices over time, with needle plots for high, close, and low prices.

<!-- Keywords: #JSLScriptingLanguage, #BubblePlot, #NeedlePlot, #TimeSeriesAnalysis, #FinancialDataVisualization -->

**Code**:
```jsl
Open("data_table.jmp");
Bubble Plot(
	X( :Name( "Portion 0-19" ) ),
	Y( :Name( "Portion60+" ) ),
	Sizes( :Pop ),
	Time( :Year ),
	Coloring( :Region ),
	ID( :Country ),
	Set Shape( "Triangle" ),
	Title Position( 0.71525, 0.136 ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox, {Min( 0.575 ), Max( 0.85 ), Inc( 0.05 ), Minor Ticks( 1 )} ),
		Dispatch( {}, "2", ScaleBox, {Min( 0 ), Max( 0.16 ), Inc( 0.02 ), Minor Ticks( 0 )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot.
3. Set X axis variable.
4. Set Y axis variable.
5. Define bubble sizes.
6. Add time dimension.
7. Apply color coding.
8. Identify countries.
9. Set bubble shape.
10. Adjust title position.



### Example 37
> **Summary**: Creates a bubble plot to visualize weight and height data for males, with customized X-axis and Y-axis scales.

<!-- Keywords: #JSLScripting, #BubblePlot, #Customization, #DataVisualization, #InteractiveAnalytics -->

**Code**:
```jsl
Open("data_table.jmp");
Bubble Plot(
	X( :weight ),
	Y( :height ),
	ID( :age ),
	Draw( "Filled and Outlined" ),
	Title Position( 0, 0 ),
	Where( :sex == "M" ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox, {Format( "Fixed Dec", 12, 0 ), Min( 90 ), Max( 155 ), Inc( 10 ), Minor Ticks( 1 )} ),
		Dispatch( {}, "2", ScaleBox, {Format( "Fixed Dec", 12, 0 ), Min( 57 ), Max( 69 ), Inc( 2 ), Minor Ticks( 1 )} ),
		Dispatch( {}, "Bubble Plot", FrameBox,
			{Frame Size( 339, 207 ), Add Pin Annotation(
				Seg( CustomStreamSeg( 1 ) ),
				Index( 1 ),
				Index Row( 1 ),
				UniqueID( 1160031521 ),
				FoundPt( {79, 719} ),
				Origin( {94.3333333333333, 61.2} )
			)}
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create bubble plot.
3. Set X axis to weight.
4. Set Y axis to height.
5. Use age for ID.
6. Draw filled and outlined bubbles.
7. Set title position.
8. Filter data for males.
9. Customize X axis scale.
10. Customize Y axis scale.



### Example 38
> **Summary**: Creates a bubble plot with needle plots for high, close, and low stock prices of DJI over time.

<!-- Keywords: #JSLScriptingLanguage, #BubblePlot, #NeedlePlot, #StockPrices, #TimeSeries -->

**Code**:
```jsl
Open("data_table.jmp");
bp = Bubble Plot( X( :Name( "Portion 0-19" ) ), Y( :Name( "Portion60+" ) ), Coloring( :Pop ), ID( :Country ) );
```

**Code Explanation**:

1. Open data table;
2. Create bubble plot object.
3. Set X-axis variable.
4. Set Y-axis variable.
5. Define coloring variable.
6. Assign ID variable.



### Example 39
> **Summary**: Creates a bubble plot with coloring based on population, using data from a specified table.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #DataVisualization, #Coloring, #TableManipulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bp = Bubble Plot( X( :Name( "Portion 0-19" ) ), Y( :Name( "Portion60+" ) ), Coloring( :Pop ), ID( :Country ) );
bp << Color as Sum( 1 );
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot.
3. Set X axis variable.
4. Set Y axis variable.
5. Assign color variable.
6. Use country for identification.
7. Apply color as sum option.



### Example 40
> **Summary**: Creates a bubble plot with coloring based on population, using data from an open JMP data table.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #DataVisualization, #Coloring, #Population -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bp = Bubble Plot( X( :Name( "Portion 0-19" ) ), Y( :Name( "Portion60+" ) ), Coloring( :Pop ), ID( :Country ) );
bp << Color as Sum( 0 );
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot.
3. Set X axis variable.
4. Set Y axis variable.
5. Set coloring variable.
6. Set ID variable.
7. Apply color as sum option.



### Example 41
> **Summary**: Creates a bubble plot with needle plots for high, close, and low stock prices of DJI over time, using the Open function to load data from a JMP data table.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #NeedlePlots, #DataVisualization, #FinancialAnalysis -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bubble Plot(
	X( :Date ),
	Y( :Flu Cases ),
	Sizes( :Name( "Population (July 2009)" ) ),
	Time( :Date ),
	Coloring( :Region ),
	ID( :State ),
	Speed( 54.09 ),
	Time Index( 32.7005249999998 ),
	Trail Lines( 1 ),
	All Labels( 0 ),
	Show Roles( 1 ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox,
			{Min( 3125000000 ), Max( 3350000000 ), Interval( "Month" ), Inc( 19.0128526884174 ), Minor Ticks( 1 )}
		),
		Dispatch( {}, "2", ScaleBox, {Max( 20000 ), Inc( 5000 )} ),
		Dispatch( {}, "Bubble Plot", FrameBox, Frame Size( 480, 317 ) )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create Bubble Plot.
3. Set X axis to Date.
4. Set Y axis to Flu Cases.
5. Define bubble sizes by Population.
6. Use Date for time animation.
7. Color bubbles by Region.
8. Identify bubbles by State.
9. Set animation speed.
10. Configure report settings.



### Example 42
> **Summary**: Creates a bubble plot with log-scaled axes and local data filtering for European regions, utilizing JMP's Bubble Plot platform.

<!-- Keywords: #JMPBubblePlot, #LogScaling, #LocalDataFiltering, #EuropeanRegions, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bp = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	Title Position( 0, 0 ),
	Lock Scales( 0 ),
	Local Data Filter( Add Filter( columns( :Region ), Where( :Region == "Europe" ), Display( :Region, N Items( 11 ) ) ) )
);
(bp << Report)[AxisBox( 2 )] << Scale( "Log" ) << Min( 0.575 ) << Max( 0.75 ) << Inc( 1 );
(bp << Report)[AxisBox( 1 )] << Scale( "Log" ) << Min( 0.035 ) << Max( 0.175 ) << Inc( 1 );
bp << Redo Analysis;
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot.
3. Set X-axis variable.
4. Set Y-axis variable.
5. Define bubble sizes.
6. Set title position.
7. Unlock axis scales.
8. Add local data filter.
9. Set X-axis to log scale.
10. Set Y-axis to log scale.



### Example 43
> **Summary**: Creates a bubble plot with local data filtering and customized axis scales, visualizing Portion 0-19 on the X-axis, Portion60+ on the Y-axis, and Pop as bubble sizes.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #LocalDataFilter, #CustomAxisScales, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bp = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	Title Position( 0, 0 ),
	Lock Scales( 0 ),
	Local Data Filter( Add Filter( columns( :Region ), Where( :Region == "Europe" ), Display( :Region, N Items( 11 ) ) ) )
);
(bp << Report)[AxisBox( 2 )] << Scale( "Log" ) << Min( 0.575 ) << Max( 0.75 ) << Inc( 1 );
(bp << Report)[AxisBox( 1 )] << Scale( "Log" ) << Min( 0.035 ) << Max( 0.175 ) << Inc( 1 );
bp << Redo Analysis;
bp << Close Window;
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot.
3. Set X axis variable.
4. Set Y axis variable.
5. Set bubble sizes.
6. Position title.
7. Unlock scales.
8. Add local data filter.
9. Set X axis scale.
10. Set Y axis scale.



### Example 44
> **Summary**: Creates a bubble plot with specified X, Y, and size variables from an open data table.

<!-- Keywords: #JSLScriptingLanguage, #BubblePlot, #DataVisualization, #JMP, #GraphicalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
myBP = Bubble Plot( X( :Date ), Y( :Name( "# defects" ) ), Sizes( :Unit size ), Circle Size( 4.5 ), Filled( 0 ), All Labels( 1 ) );
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot object.
3. Set X axis to Date.
4. Set Y axis to # defects.
5. Use Unit size for bubble sizes.
6. Set circle size to 4.5.
7. Disable bubble fill.
8. Enable all labels.



### Example 45
> **Summary**: Creates a bubble plot with sizes defined by Unit size, circle size set to 4.5, and all labels enabled.

<!-- Keywords: #BubblePlot, #JSLScriptingLanguage, #DataVisualization, #InteractiveGraphics, #JMP -->

**Code**:
```jsl
Open("data_table.jmp");
myBP = Bubble Plot( X( :Date ), Y( :Name( "# defects" ) ), Sizes( :Unit size ), Circle Size( 4.5 ), Filled( 0 ), All Labels( 1 ) );
```

**Code Explanation**:

1. Open data table;
2. Create bubble plot object.
3. Set X-axis to Date.
4. Set Y-axis to # defects.
5. Define sizes by Unit size.
6. Set circle size to 4.5.
7. Disable filled circles.
8. Enable all labels.



### Example 46
> **Summary**: Creates a bubble plot with specified X-axis, Y-axis, and size settings to visualize data from an open JMP data table.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #DataVisualization, #Scripting, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
myBP = Bubble Plot( X( :Date ), Y( :Name( "# defects" ) ), Sizes( :Unit size ), Circle Size( 4.5 ), Filled( 0 ), All Labels( 1 ) );
myBP << Filled( 1 ) << All Labels( 0 );
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot object.
3. Set X-axis to Date.
4. Set Y-axis to # defects.
5. Set sizes by Unit size.
6. Set circle size to 4.5.
7. Disable fill color.
8. Enable all labels.
9. Enable fill color.
10. Disable all labels.



### Example 47
> **Summary**: Creates a bubble plot with specified X-axis, Y-axis, and size attributes to visualize data from a JMP data table.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #DataVisualization, #InteractiveAnalysis, #JSL -->

**Code**:
```jsl
Open("data_table.jmp");
myBP = Bubble Plot( X( :Date ), Y( :Name( "# defects" ) ), Sizes( :Unit size ), Circle Size( 4.5 ), Filled( 0 ), All Labels( 1 ) );
myBP << Filled( 1 ) << All Labels( 0 );
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot.
3. Set X-axis to Date.
4. Set Y-axis to # defects.
5. Use Unit size for sizes.
6. Set circle size to 4.5.
7. Disable filling.
8. Enable all labels.
9. Enable filling.
10. Disable all labels.



### Example 48
> **Summary**: Creates a bubble plot with specified X-axis, Y-axis, and size variables from a data table, while enabling/disabling fill and labels.

<!-- Keywords: #JSLScriptingLanguage, #BubblePlot, #DataVisualization, #JMP, #InteractiveChart -->

**Code**:
```jsl
dt = Open("data_table.jmp");
myBP = Bubble Plot( X( :Date ), Y( :Name( "# defects" ) ), Sizes( :Unit size ), Circle Size( 4.5 ), Filled( 0 ), All Labels( 1 ) );
myBP << Filled( 1 ) << All Labels( 0 );
dt << Select Rows( 21 );
```

**Code Explanation**:

1. Open table.
2. Create bubble plot.
3. Set X-axis.
4. Set Y-axis.
5. Define sizes.
6. Set circle size.
7. Disable fill.
8. Enable labels.
9. Enable fill.
10. Disable labels.
11. Select specific rows.



### Example 49
> **Summary**: Creates a bubble plot with specified X-axis, Y-axis, and size variables, while disabling fill and enabling all labels.

<!-- Keywords: #JSLScriptingLanguage, #BubblePlot, #DataVisualization, #JMP, #InteractiveAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
myBP = Bubble Plot( X( :Date ), Y( :Name( "# defects" ) ), Sizes( :Unit size ), Circle Size( 4.5 ), Filled( 0 ), All Labels( 1 ) );
myBP << Filled( 1 ) << All Labels( 0 );
dt << Select Rows( 21 );
myBP << Filled( 0 );
```

**Code Explanation**:

1. Open data table;
2. Create bubble plot.
3. Set X-axis to "Date".
4. Set Y-axis to "# defects".
5. Set sizes to "Unit size".
6. Set circle size to 4.5.
7. Disable fill.
8. Enable all labels.
9. Select row 21.
10. Disable fill again.



### Example 50
> **Summary**: Creates a bubble plot with customized frame box and dispatch segment for visualization, utilizing JMP's Bubble Plot platform.

<!-- Keywords: #JMPBubblePlot, #CustomFrameBox, #DispatchSegment, #Visualization, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
myBP = Bubble Plot(
	X( :Date ),
	Y( :Name( "# defects" ) ),
	Sizes( :Unit size ),
	SendToReport(
		Dispatch( {}, "Bubble Plot", FrameBox,
			DispatchSeg( CustomStreamSeg( 1 ), {Fill Color( {128, 128, 0} ), Text Color( {253, 250, 204} ), Font( {"", 16, 3} )} )
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot.
3. Set X axis to Date.
4. Set Y axis to # defects.
5. Set sizes to Unit size.
6. Send report to display.
7. Customize frame box.
8. Dispatch segment for customization.
9. Set fill color to yellow.
10. Set text color to light yellow.



### Example 51
> **Summary**: Creates a bubble plot with needle plots for high, close, and low stock prices of DJI over time, utilizing the Bubble Plot platform in JMP.

<!-- Keywords: #JMPBubblePlot, #NeedlePlot, #StockMarketAnalysis, #FinancialDataVisualization, #JSLScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
myBP = Bubble Plot(
	X( :OZONE ),
	Y( :city ),
	Sizes( :POP ),
	Coloring( :Region ),
	ID( :State ),
	Circle Size( 2.2 ),
	All Labels( 1 ),
	SendToReport( Dispatch( {}, "Bubble Plot", FrameBox, Frame Size( 360, 774 ) ) )
);
```

**Code Explanation**:

1. Open table.
2. Create bubble plot.
3. Set X axis variable.
4. Set Y axis variable.
5. Define sizes variable.
6. Set coloring variable.
7. Assign ID variable.
8. Adjust circle size.
9. Enable all labels.
10. Resize frame.



### Example 52
> **Summary**: Creates a bubble plot with needle plots for high, close, and low stock prices of DJI over time.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #NeedlePlot, #StockPrices, #TimeSeriesAnalysis -->

**Code**:
```jsl
Open("data_table.jmp");
myBP = Bubble Plot(
	X( :OZONE ),
	Y( :city ),
	Sizes( :POP ),
	Coloring( :Region ),
	ID( :State ),
	Circle Size( 2.2 ),
	All Labels( 1 ),
	SendToReport( Dispatch( {}, "Bubble Plot", FrameBox, Frame Size( 360, 774 ) ) )
);
```

**Code Explanation**:

1. Open data table;
2. Create bubble plot object.
3. Set X-axis to OZONE.
4. Set Y-axis to city.
5. Use POP for bubble sizes.
6. Color bubbles by Region.
7. Identify bubbles by State.
8. Set circle size to 2.2.
9. Display all labels.
10. Adjust frame size.



### Example 53
> **Summary**: Creates a bubble plot with specified attributes, including X-axis ozone levels, Y-axis city names, and circle sizes based on population data.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #DataVisualization, #InteractiveGraphics, #Customization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
myBP = Bubble Plot(
	X( :OZONE ),
	Y( :city ),
	Sizes( :POP ),
	Coloring( :Region ),
	ID( :State ),
	Circle Size( 2.2 ),
	All Labels( 1 ),
	SendToReport( Dispatch( {}, "Bubble Plot", FrameBox, Frame Size( 360, 774 ) ) )
);
	
myBP << Filled( 0 );
```

**Code Explanation**:

1. Open data table;
2. Create Bubble Plot.
3. Set X axis to OZONE.
4. Set Y axis to city.
5. Set bubble sizes by POP.
6. Color bubbles by Region.
7. Identify bubbles by State.
8. Set circle size to 2.2.
9. Enable all labels.
10. Adjust frame size to 360x774.
11. Disable filled option.



### Example 54
> **Summary**: Creates a bubble plot with needle plots for high, close, and low stock prices of DJI over time.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #NeedlePlot, #DataVisualization, #FinancialAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
myBP = Bubble Plot(
	X( :Region ),
	Y( :NO ),
	ID( :city ),
	Circle Size( 0.001 ),
	Filled( 0 ),
	All Labels( 1 ),
	SendToReport( Dispatch( {}, "Bubble Plot", FrameBox, Frame Size( 585, 550 ) ) )
);
```

**Code Explanation**:

1. Open data table;
2. Create bubble plot object.
3. Set X-axis to Region.
4. Set Y-axis to NO.
5. Use city for labels.
6. Set circle size.
7. Disable filled circles.
8. Enable all labels.
9. Adjust frame size.
10. Display report.



### Example 55
> **Summary**: Creates a bubble plot with X-axis as DAY, Y-axis as DIAMETER, and coloring by Phase using JMP's Bubble Plot function.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #DataVisualization, #InteractiveAnalytics, #JSL -->

**Code**:
```jsl
dt = Open("data_table.jmp");
myBP = Bubble Plot( X( :DAY ), Y( :DIAMETER ), Coloring( :Phase ) );
```

**Code Explanation**:

1. Open data table;
2. Create Bubble Plot.
3. Set X-axis to DAY.
4. Set Y-axis to DIAMETER.
5. Color bubbles by Phase.



### Example 56
> **Summary**: Creates a bubble plot with sizes based on Phase, using data from an open JMP data table.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #DataVisualization, #InteractiveAnalysis, #JSLScript -->

**Code**:
```jsl
dt = Open("data_table.jmp");
myBP = Bubble Plot( X( :DAY ), Y( :DIAMETER ), Sizes( :Phase ) );
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot object.
3. Set X-axis to DAY.
4. Set Y-axis to DIAMETER.
5. Use Phase for sizes.



### Example 57
> **Summary**: Creates a bubble plot with circle size defined, using JMP's Bubble Plot platform.

<!-- Keywords: #JMPBubblePlot, #CircleSize, #DataVisualization, #ScriptingLanguage, #JSL -->

**Code**:
```jsl
dt = Open("data_table.jmp");
myBP = Bubble Plot( X( :DAY ), Y( :DIAMETER ), Circle Size( 0.0375 ) );
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot.
3. Set X-axis variable.
4. Set Y-axis variable.
5. Define circle size.



### Example 58
> **Summary**: Creates a bubble plot with sizes based on :Max deg. F Jan, colored by :Region, and labeled with :State and :City.

<!-- Keywords: #JSLScriptingLanguage, #BubblePlot, #DataVisualization, #InteractiveAnalysis, #JMP -->

**Code**:
```jsl
dt4 = Open("data_table.jmp");
myBP = Bubble Plot(
	X( :X ),
	Y( :Y ),
	Sizes( :Max deg. F Jan ),
	Coloring( :Region ),
	ID( :State, :City ),
	All Labels( 0 ),
	Size as Sum( 0 )
);
```

**Code Explanation**:

1. Open data table;
2. Create Bubble Plot.
3. Set X axis to :X.
4. Set Y axis to :Y.
5. Set sizes to :Max deg. F Jan.
6. Color by :Region.
7. Use :State, :City for ID.
8. Disable all labels.
9. Disable size as sum.



### Example 59
> **Summary**: Creates a bubble plot with sizes based on :Max deg. F Jan and coloring by :Region, using data from the 'data_table.jmp' file.

<!-- Keywords: #JSLScriptingLanguage, #BubblePlot, #DataVisualization, #JMP, #InteractiveVisualizations -->

**Code**:
```jsl
Open("data_table.jmp");
myBP = Bubble Plot(
	X( :X ),
	Y( :Y ),
	Sizes( :Max deg. F Jan ),
	Coloring( :Region ),
	ID( :State, :city ),
	All Labels( 0 ),
	Size as Sum( 0 )
);
```

**Code Explanation**:

1. Open data table;
2. Create Bubble Plot object.
3. Set X axis to :X column.
4. Set Y axis to :Y column.
5. Use :Max deg. F Jan for sizes.
6. Color bubbles by :Region.
7. Identify bubbles by :State and :city.
8. Disable all labels.
9. Do not sum bubble sizes.
10. Display Bubble Plot.



### Example 60
> **Summary**: Creates a bubble plot with sizes defined by 'Max deg. F Jan' and colored by 'Region', featuring IDs for 'State' and 'city', without summing sizes, and splitting all bubbles.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #DataVisualization, #InteractiveGraphics, #PlotCustomization -->

**Code**:
```jsl
dt4 = Open("data_table.jmp");
myBP = Bubble Plot(
	X( :X ),
	Y( :Y ),
	Sizes( :Max deg. F Jan ),
	Coloring( :Region ),
	ID( :State, :city ),
	All Labels( 0 ),
	Size as Sum( 0 )
);
myBP << Split All;
```

**Code Explanation**:

1. Open data table;
2. Create Bubble Plot object.
3. Set X-axis to "X".
4. Set Y-axis to "Y".
5. Define bubble sizes by "Max deg. F Jan".
6. Color bubbles by "Region".
7. Use "State" and "city" for IDs.
8. Disable all labels.
9. Do not sum sizes.
10. Split all bubbles.



### Example 61
> **Summary**: Creates a bubble plot with combined bubbles for California, adding annotations to highlight specific information.

<!-- Keywords: #JSLScriptingLanguage, #BubblePlot, #DataVisualization, #JMP, #Annotation -->

**Code**:
```jsl
dt4 = Open("data_table.jmp");
myBP = Bubble Plot(
	X( :X ),
	Y( :Y ),
	Sizes( :Max deg. F Jan ),
	Coloring( :Region ),
	ID( :State, :city ),
	All Labels( 0 ),
	Size as Sum( 0 )
);
dt4 << select where( :State == "CA" );
myBP << Combine;
myBP << SendToReport(
	Dispatch( {}, "Bubble Plot", FrameBox,
		{Add Text Annotation( Text( "CA bubbles should be combined" ), Text Box( {10, 204, 159, 227} ) ),
		Add Line Annotation( Line( {75, 41}, {30, 129} ), Color( "Yellow" ) )}
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create Bubble Plot.
3. Set X axis to :X.
4. Set Y axis to :Y.
5. Set bubble sizes to :Max deg. F Jan.
6. Set coloring to :Region.
7. Set ID to :State and :city.
8. Disable all labels.
9. Disable size as sum.
10. Select rows where State is "CA".
11. Combine selected bubbles.
12. Add text annotation.
13. Add yellow line annotation.



### Example 62
> **Summary**: Creates a bubble plot with needle plots for high, close, and low stock prices of DJI over time, utilizing Open() to load data from a JMP data table.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #NeedlePlots, #DataVisualization, #FinancialAnalysis -->

**Code**:
```jsl
Open("data_table.jmp");
Bubble Plot(
	X( :Salary ),
	Y( :Age in Years ),
	Sizes( :Years in Current Position ),
	Coloring( :Gender ),
	Title Position( 0, 0 ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox, {Min( 20000 ), Max( 210000 ), Inc( 20000 ), Minor Ticks( 1 )} ),
		Dispatch( {}, "2", ScaleBox, {Min( 22.5 ), Max( 75 ), Inc( 5 ), Minor Ticks( 1 )} ),
		Dispatch( {}, "Bubble Plot", FrameBox,
			Add Pin Annotation(
				Seg( CustomStreamSeg( 1 ) ),
				Index( 36 ),
				Index Row( 36 ),
				UniqueID( 596041396 ),
				FoundPt( {389, 157} ),
				Origin( {149833.333333333, 57.7916666666667} )
			)
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create bubble plot.
3. Set X-axis variable.
4. Set Y-axis variable.
5. Define bubble sizes.
6. Assign coloring variable.
7. Position title.
8. Configure X-axis scale.
9. Configure Y-axis scale.
10. Add pin annotation.



### Example 63
> **Summary**: Creates a bubble plot to visualize female records based on height and weight, using sex as an ID variable.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #DataVisualization, #InteractiveAnalysis, #GraphicalUserInterface -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << select where( :sex == "F" );
bp_id = Bubble Plot( X( :height ), Y( :weight ), ID( :sex ), Filled( 0 ), );
```

**Code Explanation**:

1. Open data table;
2. Select female records.
3. Create bubble plot.
4. Set X axis to height.
5. Set Y axis to weight.
6. Use sex for IDs.
7. Disable filled bubbles.



### Example 64
> **Summary**: Creates a bubble plot with X-axis set to height and Y-axis set to weight, filtering female records from the data table.

<!-- Keywords: #JSLScriptingLanguage, #BubblePlot, #DataFiltering, #InteractiveVisualization, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << select where( :sex == "F" );
bp_no_id = Bubble Plot( X( :height ), Y( :weight ), Filled( 0 ), );
```

**Code Explanation**:

1. Open data table;
2. Select female records.
3. Create bubble plot.
4. Set X-axis to height.
5. Set Y-axis to weight.
6. Disable filled bubbles.



### Example 65
> **Summary**: Generates a bubble plot to visualize the relationship between production budget and lead studio name, with coloring by genre, and interactive filtering by lead studio name values.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #DataVisualization, #InteractiveFiltering, #LocalDataFilter -->

**Code**:
```jsl
Open("data_table.jmp");
Bubble Plot(
	X( :Production Budget ),
	Y( :Lead Studio Name ),
	Coloring( :Genre ),
	Title Position( 0, 0 ),
	Local Data Filter(
		Add Filter(
			columns( :Lead Studio Name ),
			Where(
				:Lead Studio Name == {"CBS Films", "Columbia", "Disney", "DreamWorks", "DreamWorks Animation", "DreamWorks Pictures",
				"Happy Madison", "Happy Madison Productions", "Independent"}
			),
			Display( :Lead Studio Name, Size( 160, 225 ), List Display )
		)
	),
	SendToReport(
		Dispatch( {}, "1", ScaleBox, {Format( "Best", 10 ), Min( -25 ), Max( 275 ), Inc( 50 ), Minor Ticks( 1 )} ),
		Dispatch( {}, "2", ScaleBox, {Min( -0.5 ), Max( 32.5 ), Inc( 1 ), Minor Ticks( 0 )} ),
		Dispatch( {}, "Bubble Plot", FrameBox, {Frame Size( 529, 625 )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot.
3. Set X-axis to Production Budget.
4. Set Y-axis to Lead Studio Name.
5. Color bubbles by Genre.
6. Set title position.
7. Add local data filter.
8. Filter Lead Studio Name values.
9. Configure filter display.
10. Adjust axis scales and frame size.



### Example 66
> **Summary**: Creates a bubble plot with interactive features, including X-axis Longitude, Y-axis Latitude, and coloring by Landfall status in the USA.

<!-- Keywords: #JSLScriptingLanguage, #BubblePlot, #InteractiveVisualization, #GeographicMap, #JMP -->

**Code**:
```jsl
Open("data_table.jmp");
Bubble Plot(
	X( :Longitude ),
	Y( :Latitude ),
	Sizes( :Name( "Wind (Knots)" ) ),
	Time( :Date ),
	Coloring( :Landfall in USA ),
	ID( :Name and ID ),
	Speed( 220 ),
	Title Position( -88.679, 59.73 ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox, {Format( "Longitude DDD", "PUNDIR", 20, 0 ), Min( -110 ), Max( 10 ), Inc( 10 ), Minor Ticks( 0 )} ),
		Dispatch( {}, "2", ScaleBox,
			{Format( "Latitude DDD", "PUNDIR", 20, 0 ), Min( -9.99999999999999 ), Max( 80 ), Inc( 10 ), Minor Ticks( 0 )}
		),
		Dispatch( {}, "Bubble Plot", FrameBox,
			{Background Map( Images( "NASA server" ) ), Grid Line Order( 2 ), Reference Line Order( 3 )}
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create bubble plot.
3. Set X-axis to Longitude.
4. Set Y-axis to Latitude.
5. Define sizes by Wind speed.
6. Add time series by Date.
7. Color bubbles by Landfall status.
8. Use Name and ID for identification.
9. Set animation speed to 220.
10. Configure title position and background map.



### Example 67
> **Summary**: Generates a bubble plot to visualize the relationship between weight and height, colored by age and identified by name, grouped by sex.

<!-- Keywords: #JSLScriptingLanguage, #BubblePlot, #DataVisualization, #InteractiveAnalysis, #JMP -->

**Code**:
```jsl
Open("data_table.jmp");
Bubble Plot( X( :weight ), Y( :height ), Coloring( :age ), ID( :name ), Title Position( 0, 0 ), By( :sex ) );
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot.
3. Set X-axis to weight.
4. Set Y-axis to height.
5. Color bubbles by age.
6. Identify bubbles by name.
7. Set title position.
8. Group plots by sex.



### Example 68
> **Summary**: Creates a bubble plot to visualize relationships between weight, height, and age, while also performing an one-way analysis of height by sex with means displayed.

<!-- Keywords: #JSLScriptingLanguage, #BubblePlot, #OneWayAnalysis, #MeansDisplay, #DataVisualization -->

**Code**:
```jsl
Open("data_table.jmp");
Bubble Plot( X( :weight ), Y( :height ), Coloring( :age ), ID( :name ), Title Position( 0, 0 ), By( :sex ) );
Oneway( Y( :height ), X( :sex ), By( :age ), Means( 1 ), Mean Diamonds( 1 ) );
```

**Code Explanation**:

1. Open data_table data
2. Create bubble plot.
3. Set X to weight.
4. Set Y to height.
5. Color by age.
6. Use name for ID.
7. Position title at origin.
8. Group by sex.
9. Perform one-way analysis.
10. Analyze height by sex.
11. Group by age.
12. Show means.
13. Display mean diamonds.



### Example 69
> **Summary**: Creates a bubble plot with sizes variable 'Pop' and coloring by 'Region', using data from an open JMP data table.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #DataVisualization, #InteractiveAnalytics, #JSL -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Bubble Plot(
	X( :Name( "Portion 0-19" ) ),
	Y( :Name( "Portion60+" ) ),
	Sizes( :Pop ),
	ID( :Country ),
	Time( :Year ),
	Coloring( :Region )
);
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot object.
3. Set X-axis variable.
4. Set Y-axis variable.
5. Define sizes variable.
6. Assign ID variable.
7. Specify time variable.
8. Apply coloring variable.
9. Display bubble plot.



### Example 70
> **Summary**: Creates a bubble plot with interactive roles, displaying portion distribution across countries over time.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #InteractiveRoles, #DataVisualization, #TimeSeriesAnalysis -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = Bubble Plot(
	X( :Name( "Portion 0-19" ) ),
	Y( :Name( "Portion60+" ) ),
	Sizes( :Pop ),
	ID( :Country ),
	Time( :Year ),
	Coloring( :Region )
);
obj << Show Roles( 1 );
```

**Code Explanation**:

1. Set default names.
2. Open data table.
3. Create bubble plot object.
4. Set X-axis variable.
5. Set Y-axis variable.
6. Set size variable.
7. Set ID variable.
8. Set time variable.
9. Set coloring variable.
10. Show roles in plot.



### Example 71
> **Summary**: Creates three bubble plots with varying time annotation settings, using 'weight' as the X-axis, 'height' as the Y-axis, and 'weight' for bubble sizes. The plots also include customized scales for 'weight' and 'height'.

<!-- Keywords: #JSL, #BubblePlot, #TimeAnnotation, #CustomScale, #DataVisualization -->

**Code**:
```jsl
Open("data_table.jmp");
Bubble Plot(
	X( :weight ),
	Y( :height ),
	Sizes( :weight ),
	Time( :age ),
	ID( :sex, :name ),
	Title Position( 149.5, 58.38 ),
	SendToReport(
		Dispatch( {}, "weight", ScaleBox, {Format( "Fixed Dec", 12, 0 ), Min( 90 ), Max( 160 ), Inc( 10 ), Minor Ticks( 0 )} ),
		Dispatch( {}, "height", ScaleBox, {Format( "Fixed Dec", 12, 0 ), Min( 56 ), Max( 70 ), Inc( 2 ), Minor Ticks( 0 )} ),
		Dispatch( {}, "Bubble Plot", FrameBox, {Frame Size( 564, 360 )} )
	)
);
Bubble Plot(
	X( :weight ),
	Y( :height ),
	Sizes( :weight ),
	Time( :age ),
	ID( :sex, :name ),
	Show Time Annotation( 0 ),
	Title Position( 149.5, 58.38 ),
	SendToReport(
		Dispatch( {}, "weight", ScaleBox, {Format( "Fixed Dec", 12, 0 ), Min( 90 ), Max( 160 ), Inc( 10 ), Minor Ticks( 0 )} ),
		Dispatch( {}, "height", ScaleBox, {Format( "Fixed Dec", 12, 0 ), Min( 56 ), Max( 70 ), Inc( 2 ), Minor Ticks( 0 )} ),
		Dispatch( {}, "Bubble Plot", FrameBox, {Frame Size( 564, 360 )} )
	)
);
Bubble Plot(
	X( :weight ),
	Y( :height ),
	Sizes( :weight ),
	Time( :age ),
	ID( :sex, :name ),
	Show Time Annotation( 1 ),
	Title Position( 149.5, 58.38 ),
	SendToReport(
		Dispatch( {}, "weight", ScaleBox, {Format( "Fixed Dec", 12, 0 ), Min( 90 ), Max( 160 ), Inc( 10 ), Minor Ticks( 0 )} ),
		Dispatch( {}, "height", ScaleBox, {Format( "Fixed Dec", 12, 0 ), Min( 56 ), Max( 70 ), Inc( 2 ), Minor Ticks( 0 )} ),
		Dispatch( {}, "Bubble Plot", FrameBox, {Frame Size( 564, 360 )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot.
3. Set X axis to weight.
4. Set Y axis to height.
5. Set bubble sizes to weight.
6. Add time variable age.
7. Use sex and name for ID.
8. Position title.
9. Format weight scale.
10. Format height scale.
11. Set frame size.
12. Repeat steps 2-11.
13. Disable time annotation.
14. Repeat steps 2-11.
15. Enable time annotation.



### Example 72
> **Summary**: Creates a bubble plot with needle plots for high, close, and low stock prices of DJI over time, utilizing the Bubble Plot platform in JMP.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #NeedlePlot, #StockPrices, #TimeSeries -->

**Code**:
```jsl
Open("data_table.jmp");
bp = Bubble Plot(
	X( :CO2 emissions from liquid fuel consumption ),
	Y( :CO2 emissions from solid fuel consumption ),
	Sizes( :Population ),
	Time( :Year ),
	ID( :Nation ),
	Circle Size( 20047.1698113208 ),
	Time Index( 2 ),
	All Labels( 0 ),
	SendToReport(
		Dispatch( {}, "2", ScaleBox, {Scale( "Log" ), Format( "Best" ), Min( 0.0001 ), Max( 238471 ), Inc( 1 ), Minor Ticks( 8 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create bubble plot object.
3. Set X axis variable.
4. Set Y axis variable.
5. Define bubble sizes.
6. Add time variable.
7. Assign nation IDs.
8. Set circle size constant.
9. Select time index.
10. Disable all labels.
11. Adjust X scale to log.
12. Set X axis format.
13. Define X axis min value.
14. Define X axis max value.
15. Set X axis increment.
16. Set X axis minor ticks.



### Example 73
> **Summary**: Creates a bubble plot to visualize CO2 emissions from liquid and solid fuel consumption by nation over time, with custom circle size and scale settings.

<!-- Keywords: #JSLScriptingLanguage, #BubblePlot, #CO2Emissions, #TimeSeriesAnalysis, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bp = Bubble Plot(
	X( :CO2 emissions from liquid fuel consumption ),
	Y( :CO2 emissions from solid fuel consumption ),
	Sizes( :Population ),
	Time( :Year ),
	ID( :Nation ),
	Circle Size( 20047.1698113208 ),
	Time Index( 2 ),
	All Labels( 0 ),
	SendToReport(
		Dispatch( {}, "2", ScaleBox, {Scale( "Log" ), Format( "Best" ), Min( 0.0001 ), Max( 238471 ), Inc( 1 ), Minor Ticks( 8 )} )
	)
);
bp << Title Position( 50000, 10 );
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot.
3. Set X-axis variable.
4. Set Y-axis variable.
5. Define bubble sizes.
6. Add time variable.
7. Identify nations.
8. Set initial circle size.
9. Set time index.
10. Disable all labels.



### Example 74
> **Summary**: Creates a bubble plot to visualize SAT Math and Verbal scores by Region and State, with filtering applied to only include Northeast regions.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #DataFiltering, #Visualization, #GeographicAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bp = Bubble Plot( X( :SAT Math ), Y( :SAT Verbal ), ID( :Region, :State ), All Labels( 0 ) );
dt << Select Where( :Region == "Northeast" );
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot.
3. Set X axis variable.
4. Set Y axis variable.
5. Use Region and State for IDs.
6. Disable all labels.
7. Select rows where Region is Northeast.



### Example 75
> **Summary**: Creates a bubble plot to visualize SAT Math and Verbal scores by Region, with interactive filtering capabilities.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #DataVisualization, #InteractiveFiltering, #RegionAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bp = Bubble Plot( X( :SAT Math ), Y( :SAT Verbal ), ID( :Region, :State ), All Labels( 0 ) );
dt << Select Where( :Region == "Northeast" );
bp << Split;
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot.
3. Set X-axis variable.
4. Set Y-axis variable.
5. Define ID variables.
6. Hide all labels.
7. Select Northeast region.
8. Split bubble plot.



### Example 76
> **Summary**: Creates a bubble plot with coloring based on region, using data from 'data_table.jmp'.

<!-- Keywords: #JMPScriptingLanguage(JSL), #BubblePlot, #DataVisualization, #RegionColoring, #InteractiveDataExploration -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bubble Plot( X( :Name( "Portion 0-19" ) ), Y( :Name( "Portion60+" ) ), Coloring( :Region ), ID( :Region, :Country ), );
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot.
3. Set X axis variable.
4. Set Y axis variable.
5. Apply coloring variable.
6. Assign ID variables.



### Example 77
> **Summary**: Creates a bubble plot to visualize SAT Math and Verbal scores by region and state, with sizes defined by percentage taking in 2004.

<!-- Keywords: #JSLScriptingLanguage, #BubblePlot, #DataVisualization, #JMP, #Plotting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bp = dt << Bubble Plot(
	X( :SAT Math ),
	Y( :SAT Verbal ),
	Sizes( :Name( "% Taking (2004)" ) ),
	Time( :Year ),
	ID( :Region, :State ),
	All Labels( 1 ),
	SendToReport( Dispatch( {}, "Bubble Plot", FrameBox, Frame Size( 550, 336 ) ) )
);
bp << Split( "Midwest" );
bp << Split( "South" );
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot.
3. Set X axis to SAT Math.
4. Set Y axis to SAT Verbal.
5. Define sizes by % Taking (2004).
6. Use Year for time series.
7. Identify by Region and State.
8. Enable all labels.
9. Adjust frame size.
10. Split plot by Midwest.
11. Split plot by South.



### Example 78
> **Summary**: Creates a bubble plot with sizes based on a specific condition, utilizing the Bubble Plot platform in JMP.

<!-- Keywords: #JMPBubblePlot, #ConditionalSizes, #DataVisualization, #ScriptingLanguage, #JSL -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bp = dt << Bubble Plot(
	X( :SAT Math ),
	Y( :SAT Verbal ),
	Sizes( :Name( "% Taking (2004)" ) ),
	Time( :Year ),
	ID( :Region, :State ),
	All Labels( 1 ),
	SendToReport( Dispatch( {}, "Bubble Plot", FrameBox, Frame Size( 550, 336 ) ) )
);
bp << Split( "Midwest" );
bp << Split( "South" );
bp << Combine( "Midwest" );
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot.
3. Set X axis variable.
4. Set Y axis variable.
5. Define bubble sizes.
6. Add time variable.
7. Assign ID variables.
8. Display all labels.
9. Adjust report size.
10. Split plot by "Midwest".
11. Split plot by "South".
12. Combine plot for "Midwest".



### Example 79
> **Summary**: Creates a bubble plot with geographic coordinates, population sizes, and household income coloring, utilizing the SendToReport feature to customize the plot's appearance.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #GeographicMap, #SendToReport, #Customization -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bubble Plot(
	X( :Longitude ),
	Y( :Latitude ),
	Sizes( :Population ),
	Coloring( :Household Income ),
	ID( :Region, :State ),
	Color Levels( [34343 42445.25 50547.5 58649.75 66752] ),
	Title Position( 0, 0 ),
	Split( "S" ),
	Split( "W" ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox, {Min( -123.898831018519 ), Max( -76.2327199074075 ), Inc( 10 ), Minor Ticks( 0 )} ),
		Dispatch( {}, "2", ScaleBox,
			{Scale( "Geodesic US" ), Min( 20.1752083333333 ), Max( 55.9247916666667 ), Inc( 10 ), Minor Ticks( 0 )}
		),
		Dispatch( {}, "Bubble Plot", FrameBox,
			{Background Map( Boundaries( "US States" ) ), Grid Line Order( 2 ), Reference Line Order( 3 )}
		)
	)
);
```

**Code Explanation**:

1. Open data_table data
2. Create Bubble Plot object.
3. Set X axis to Longitude.
4. Set Y axis to Latitude.
5. Use Population for bubble sizes.
6. Color bubbles by Household Income.
7. Identify bubbles by Region and State.
8. Define color levels for income.
9. Set title position.
10. Split plot by "S" and "W".



### Example 80
> **Summary**: Creates a bubble plot with geographic mapping, using Longitude and Latitude as axes, Population for bubble sizes, and NO variable for coloring, while identifying by Region and State.

<!-- Keywords: #JSLScriptingLanguage, #BubblePlot, #GeographicMapping, #DataVisualization, #JMP -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bubble Plot(
	X( :Longitude ),
	Y( :Latitude ),
	Sizes( :POP ),
	Coloring( :NO ),
	ID( :Region, :State ),
	Color Levels( [0.012 0.02425 0.0365 0.04875 0.061] ),
	Title Position( 0, 0 ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox, {Scale( "Geodesic US" ), Min( -125 ), Max( -70 ), Inc( 10 ), Minor Ticks( 1 )} ),
		Dispatch( {}, "2", ScaleBox, {Scale( "Geodesic US" ), Min( 14.875 ), Max( 56.125 ), Inc( 2 ), Minor Ticks( 1 )} ),
		Dispatch( {}, "Bubble Plot", FrameBox,
			{Background Map( Images( "Detailed Earth" ), Boundaries( "US States" ) ), Grid Line Order( 3 ), Reference Line Order( 4 )}
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create Bubble Plot object.
3. Set Longitude as X-axis.
4. Set Latitude as Y-axis.
5. Use Population for bubble sizes.
6. Color by NO variable.
7. Identify by Region and State.
8. Define color levels.
9. Set title position.
10. Configure report settings.



### Example 81
> **Summary**: Creates a bubble plot with needle plots for high, close, and low stock prices of DJI over time, utilizing the Bubble Plot object in JMP.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #NeedlePlots, #FinancialAnalysis, #TimeSeriesVisualization -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bubble Plot(
	X( :Birth ),
	Y( :Death ),
	Time( :Year ),
	ID( :Country ),
	Bubble Size( 13.5849056603774 ),
	Time Index( 4.1 ),
	Show Roles( 1 ),
	Title Position( 26.625, 11.8 ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox, {Min( 7.5 ), Max( 30 ), Inc( 5 ), Minor Ticks( 1 )} ),
		Dispatch( {}, "2", ScaleBox, {Min( 5 ), Max( 13 ), Inc( 1 ), Minor Ticks( 0 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create Bubble Plot object.
3. Set X axis to Birth.
4. Set Y axis to Death.
5. Set Time axis to Year.
6. Set ID to Country.
7. Set Bubble Size.
8. Set Time Index.
9. Show Roles.
10. Set Title Position.
11. Customize X axis scale.
12. Customize Y axis scale.



### Example 82
> **Summary**: Creates a bubble plot with X-axis set to weight, Y-axis set to height, time variable set to age, and identification using name.

<!-- Keywords: #JSLScriptingLanguage, #BubblePlot, #DataVisualization, #TimeSeriesAnalysis, #InteractivePlotting -->

**Code**:
```jsl
Open("data_table.jmp");
Bubble Plot( X( :weight ), Y( :height ), Time( :age ), ID( :name ) );
```

**Code Explanation**:

1. Open data table;
2. Create bubble plot.
3. Set X-axis to weight.
4. Set Y-axis to height.
5. Set time variable to age.
6. Use name for identification.



### Example 83
> **Summary**: Creates a bubble plot with sizes defined by a specific condition, utilizing the Bubble Plot platform in JMP.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #DataVisualization, #ConditionalSizes, #TimeSeriesAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bp = Bubble Plot(
	X( :SAT Math ),
	Y( :SAT Verbal ),
	Sizes( :Name( "% Taking (2004)" ) ),
	Time( :Year ),
	ID( :State ),
	All Labels( 1 ),
	No Labels( 0 ),
	Title Position( 540, 500 ), 
);
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot.
3. Set X axis variable.
4. Set Y axis variable.
5. Define bubble sizes.
6. Add time variable.
7. Use state as ID.
8. Show all labels.
9. Disable no labels.
10. Set title position.



### Example 84
> **Summary**: Creates a bubble plot with trail lines and bubbles to visualize population against SAT Math scores, identifying states by color.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #TrailLines, #TrailBubbles, #DataVisualization -->

**Code**:
```jsl
Open("data_table.jmp");
bp = Bubble Plot( X( :Population ), Y( :SAT Math ), ID( :State ), All Labels( 0 ) );
bp << Trail Lines( 1 );
bp << Trail Bubbles( 1 );
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot object.
3. Set X-axis variable.
4. Set Y-axis variable.
5. Identify by state.
6. Hide all labels.
7. Enable trail lines.
8. Enable trail bubbles.



### Example 85
> **Summary**: Creates a bubble plot with trail lines and bubbles, selecting specific rows from a data table.

<!-- Keywords: #JSLScriptingLanguage, #BubblePlot, #TrailLines, #DataTable, #SelectRows -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bp = Bubble Plot( X( :Population ), Y( :SAT Math ), ID( :State ), All Labels( 0 ) );
bp << Trail Lines( 1 );
bp << Trail Bubbles( 1 );
dt << Select Rows( 33 :: 40 );
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot.
3. Set X-axis variable.
4. Set Y-axis variable.
5. Identify data points.
6. Disable all labels.
7. Add trail lines.
8. Add trail bubbles.
9. Select specific rows.



### Example 86
> **Summary**: Creates a bubble plot with trail lines, using the 'Portion 0-19' variable as the X-axis and 'Portion60+' as the Y-axis, while also displaying sizes based on 'Pop', time index at 30, and ID variables 'Region' and 'Country'.

<!-- Keywords: #BubblePlot, #TrailLines, #JSLScripting, #DataVisualization, #InteractiveCharts -->

**Code**:
```jsl
Open("data_table.jmp");
bp = Bubble Plot( X( :Name( "Portion 0-19" ) ), Y( :Name( "Portion60+" ) ), Sizes( :Pop ), Time( :Year ), ID( :Region, :Country ) );
bp << time index( 30 );
bp << Trail Lines( "All" );
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot.
3. Set X axis variable.
4. Set Y axis variable.
5. Define bubble sizes.
6. Add time variable.
7. Assign ID variables.
8. Set time index.
9. Enable trail lines.
10. Display all trail lines.



### Example 87
> **Summary**: Creates a bubble plot with trail lines and bubbles to visualize data from 'data_table.jmp', using X-axis variable 'Portion 0-19', Y-axis variable 'Portion60+', and bubble sizes based on 'Pop'.

<!-- Keywords: #JSL, #BubblePlot, #TrailLines, #TrailBubbles, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bp = Bubble Plot( X( :Name( "Portion 0-19" ) ), Y( :Name( "Portion60+" ) ), Sizes( :Pop ), Time( :Year ), ID( :Region, :Country ) );
bp << time index( 30 );
bp << Trail Lines( "All" );
bp << Trail Bubbles( "All" );
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot.
3. Set X axis variable.
4. Set Y axis variable.
5. Define bubble sizes.
6. Add time variable.
7. Assign ID variables.
8. Set time index.
9. Enable trail lines.
10. Enable trail bubbles.



### Example 88
> **Summary**: Creates a bubble plot with interactive steps, allowing users to explore relationships between age, height, and sex.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #InteractiveVisualization, #DataManipulation, #Plotting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bp = Bubble Plot( X( :age ), Y( :height ), Time( :age ), Coloring( :sex ), ID( :sex ), );
dt << Add Rows( 10 );
bp << Step;
bp << Step;
bp << Step;
bp << Step;
bp << Step;
dt << Select Rows( 41 :: 50 );
```

**Code Explanation**:

1. Open data table;
2. Create Bubble Plot.
3. Set X axis to age.
4. Set Y axis to height.
5. Use age for time.
6. Color by sex.
7. Identify by sex.
8. Add 10 rows to dataset.
9. Step forward in plot.
10. Select rows 41 to 50.



### Example 89
> **Summary**: Generates a bubble plot with interactive steps to visualize age, height, and sex data, adding new rows and deleting selected ones.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #DataVisualization, #InteractiveSteps, #DataManipulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bp = Bubble Plot( X( :age ), Y( :height ), Time( :age ), Coloring( :sex ), ID( :sex ), );
dt << Add Rows( 10 );
bp << Step;
bp << Step;
bp << Step;
bp << Step;
bp << Step;
dt << Select Rows( 41 :: 50 );
dt << Delete Rows;
```

**Code Explanation**:

1. Open data table;
2. Create bubble plot.
3. Set X-axis to age.
4. Set Y-axis to height.
5. Set time variable to age.
6. Color bubbles by sex.
7. Identify bubbles by sex.
8. Add 10 new rows.
9. Advance plot animation step.
10. Advance plot animation step.
11. Advance plot animation step.
12. Advance plot animation step.
13. Advance plot animation step.
14. Select last 10 rows.
15. Delete selected rows.



### Example 90
> **Summary**: Creates a bubble plot with needle plots for high, close, and low stock prices of DJI over time, using the Open() function to load data from a JMP data table.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #NeedlePlot, #DataVisualization, #FinancialAnalysis -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bubble Plot(
	X( :Date ),
	Y( :Close ),
	Sizes( :Moving Average ),
	Time( :Date ),
	Time Index( 22.3 ),
	Trail Lines( "All" ),
	Title Position( 3401483328, 24.595 )
);
```

**Code Explanation**:

1. Open data table;
2. Create bubble plot object.
3. Set X-axis to Date.
4. Set Y-axis to Close.
5. Define bubble sizes.
6. Set time axis to Date.
7. Set time index value.
8. Enable trail lines for all points.
9. Set title position.



### Example 91
> **Summary**: Creates a bubble plot with coloring based on transformed height data, utilizing the Bubble Plot platform in JMP.

<!-- Keywords: #JMPBubblePlot, #DataVisualization, #TransformedData, #ColoringOptions, #CustomizedPlotting -->

**Code**:
```jsl
Open("data_table.jmp");
Bubble Plot(
	X( :weight ),
	Y( :height ),
	Coloring( Transform Column( "Log[height]", Formula( Log( :height ) ) ) ),
	Color Levels( [3.93182563272433 4.01099303505558 4.09016043738684 4.1693278397181 4.24849524204936] )
);
```

**Code Explanation**:

1. Open data table;
2. Create bubble plot.
3. Set X axis to weight.
4. Set Y axis to height.
5. Define coloring using transformed column.
6. Transform column name is "Log[height]".
7. Apply log transformation formula.
8. Set color levels manually.
9. Specify four color levels.
10. Add fifth color level.



### Example 92
> **Summary**: Creates a bubble plot with log-transformed height coloring and customized scales for weight and height, utilizing JMP's Bubble Plot platform.

<!-- Keywords: #JMPBubblePlot, #LogTransformation, #CustomizedScales, #DataVisualization, #Scripting -->

**Code**:
```jsl
Open("data_table.jmp");
Bubble Plot(
	X( :weight ),
	Y( :height ),
	Coloring( Transform Column( "Log[height]", Formula( Log( :height ) ) ) ),
	Color Levels( [3.93182563272433 4.01099303505558 4.09016043738684 4.1693278397181 4.24849524204936] ),
	Title Position( 0, 0 ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox, {Format( "Fixed Dec", 12, 0 ), Min( 60 ), Max( 180 ), Inc( 20 ), Minor Ticks( 0 )} ),
		Dispatch( {}, "2", ScaleBox, {Format( "Fixed Dec", 12, 0 ), Min( 50 ), Max( 72.5 ), Inc( 5 ), Minor Ticks( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create Bubble Plot.
3. Set X axis to weight.
4. Set Y axis to height.
5. Add log-transformed height for coloring.
6. Define color levels.
7. Set title position.
8. Format X scale.
9. Format Y scale.
10. Adjust minor ticks on Y axis.



### Example 93
> **Summary**: Creates a bubble plot with needle plots for high, close, and low stock prices of DJI over time, utilizing SendToReport dispatches to customize axis scales and frame sizes.

<!-- Keywords: #JSL, #BubblePlot, #SendToReport, #Dispatch, #AxisCustomization -->

**Code**:
```jsl
Open("data_table.jmp");
Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Coloring( :Region ),
	ID( :Region ),
	Title Position( 0, 0 ),
	SendToReport(
		Dispatch( {}, "Portion 0-19", ScaleBox,
			{Format( "Best", 10 ), Min( 0.647773805855306 ), Max( 0.78 ), Inc( 0.02 ), Minor Ticks( 0 )}
		),
		Dispatch( {}, "Portion60+", ScaleBox, {Format( "Best", 9 ), Min( 0.02 ), Max( 0.086056070820709 ), Inc( 0.01 ), Minor Ticks( 0 )} ),
		Dispatch( {}, "Bubble Plot", FrameBox,
			Add Pin Annotation(
				Seg( CustomStreamSeg( 1 ) ),
				Index( 7 ),
				Index Row( -1 ),
				UniqueID( 7 ),
				FoundPt( {263, 196} ),
				Origin( {0.695705801232757, 0.0585327079787469} ),
				Offset( {21, -82} ),
				RightOfCenter( 0 ),
				Tag Line( 1 ),
				Text Color( "Black" ),
				Background Color( {230, 230, 230} )
			)
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot.
3. Set X axis variable.
4. Set Y axis variable.
5. Apply coloring by region.
6. Use region for ID.
7. Position title.
8. Format X axis scale.
9. Format Y axis scale.
10. Add pin annotation.



### Example 94
> **Summary**: Creates two bubble plots with customized scales and pin annotations to visualize height and weight data, while also setting ID variables for age and name.

<!-- Keywords: #JSLScriptingLanguage, #BubblePlot, #CustomizedScales, #PinAnnotation, #DataVisualization -->

**Code**:
```jsl
Open("data_table.jmp");
Bubble Plot(
	X( :height ),
	Y( :weight ),
	Title Position( 0, 0 ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox, {Min( 50 ), Max( 72.5 ), Inc( 5 ), Minor Ticks( 1 )} ),
		Dispatch( {}, "2", ScaleBox, {Min( 60 ), Max( 180 ), Inc( 20 ), Minor Ticks( 0 )} ),
		Dispatch( {}, "Bubble Plot", FrameBox,
			Add Pin Annotation(
				Seg( CustomStreamSeg( 1 ) ),
				Index( 22 ),
				Index Row( 22 ),
				UniqueID( 584397510 ),
				FoundPt( {385, 222} ),
				Origin( {64.859375, 118.333333333333} ),
				Offset( {32, 78} )
			)
		)
	)
);
Bubble Plot(
	X( :height ),
	Y( :weight ),
	ID( :age, :name ),
	Title Position( 0, 0 ),
	Split( 14 ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox, {Min( 58 ), Max( 69 ), Inc( 2 ), Minor Ticks( 1 )} ),
		Dispatch( {}, "2", ScaleBox, {Min( 80 ), Max( 150 ), Inc( 10 ), Minor Ticks( 0 )} ),
		Dispatch( {}, "Bubble Plot", FrameBox,
			Add Pin Annotation(
				Seg( CustomStreamSeg( 1 ) ),
				Index( 127 ),
				Index Row( 127 ),
				UniqueID( 751832335 ),
				FoundPt( {324, 335} ),
				Origin( {63.8666666666667, 92.0555555555556} )
			)
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create first bubble plot.
3. Set X-axis to height.
4. Set Y-axis to weight.
5. Position title at origin.
6. Customize X-axis scale.
7. Customize Y-axis scale.
8. Add pin annotation to plot.
9. Create second bubble plot.
10. Set ID variables to age and name.



### Example 95
> **Summary**: Creates a bubble plot with selection for specific regions, utilizing the Bubble Plot platform in JMP.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #DataSelection, #RegionFiltering, #InteractiveVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Bubble Plot( X( :"Portion 0-19"n ), Y( :"Portion60+"n ), Sizes( :Pop ), ID( :Region, :Country ), Time( :Year ) );
dt << Select Where( :Region == "Europe" | :Region == "North America" );
obj = dt << Bubble Plot( X( :"Portion 0-19"n ), Y( :"Portion60+"n ), Sizes( :Pop ), ID( :Region, :Country ), Time( :Year ) );
```

**Code Explanation**:

1. Open data table.
2. Create initial bubble plot.
3. Select specific regions.
4. Update bubble plot with selection.



### Example 96
> **Summary**: Creates a bubble plot with filtered data, using JMP's Bubble Plot platform to visualize population distribution across regions and countries over time.

<!-- Keywords: #JMPBubblePlot, #DataFiltering, #InteractiveVisualization, #TimeSeriesAnalysis, #GeographicVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Bubble Plot( X( :"Portion 0-19"n ), Y( :"Portion60+"n ), Sizes( :Pop ), ID( :Region, :Country ), Time( :Year ) );
dt << Select Where( :Region == "Europe" | :Region == "North America" );
obj = dt << Bubble Plot( X( :"Portion 0-19"n ), Y( :"Portion60+"n ), Sizes( :Pop ), ID( :Region, :Country ), Time( :Year ) );
  
obj << Label Offset( {4, -75, -43}, {7, 80, -34} );
```

**Code Explanation**:

1. Open data table;
2. Create bubble plot with specified variables.
3. Select rows where Region is Europe or North America.
4. Create bubble plot again with filtered data.
5. Set label offset for the plot.



### Example 97
> **Summary**: Creates a bubble plot with log-scaled axes, sizes based on 'Pop', and a local data filter for 'Region' equal to 'Europe'.

<!-- Keywords: #JSLScriptingLanguage, #BubblePlot, #LogScale, #LocalDataFilter, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bp = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	Title Position( 0, 0 ),
	Lock Scales( 0 ),
	Local Data Filter( Add Filter( columns( :Region ), Where( :Region == "Europe" ), Display( :Region, N Items( 11 ) ) ) )
);
(bp << Report)[AxisBox( 2 )] << Scale( "Log" ) << Min( 0.575 ) << Max( 0.75 ) << Inc( 1 );
(bp << Report)[AxisBox( 1 )] << Scale( "Log" ) << Min( 0.035 ) << Max( 0.175 ) << Inc( 1 );
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot.
3. Set X axis variable.
4. Set Y axis variable.
5. Define bubble sizes.
6. Position title.
7. Unlock scales.
8. Add local data filter.
9. Set Y axis scale to log.
10. Set X axis scale to log.



### Example 98
> **Summary**: Creates a bubble plot with interactive roles display, utilizing X-axis variable 'Rotten Tomatoes Score', Y-axis variable 'Movie Name', sizes variable 'Audience Score', time variable 'Genre', and coloring variable 'BOA Opening Wknd'.

<!-- Keywords: #BubblePlot, #InteractiveRoles, #JMPScriptingLanguage, #DataVisualization, #Customization -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bubble Plot(
	X( :Rotten Tomatoes Score ),
	Y( :Movie Name ),
	Sizes( :Audience Score ),
	Time( :Genre ),
	Coloring( :BOA Opening Wknd ),
	Show Roles( 1 ),
	X as Sum( 1 ),
	Size as Sum( 0 ), 
);
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot object.
3. Set X axis variable.
4. Set Y axis variable.
5. Define sizes variable.
6. Set time variable.
7. Define coloring variable.
8. Enable roles display.
9. Aggregate X values.
10. Do not aggregate sizes.



### Example 99
> **Summary**: Generates a bubble plot to visualize the relationship between Movie Name, Rotten Tomatoes Score, and Audience Score, with Genre as the time axis and BOA Opening Wknd coloring.

<!-- Keywords: #BubblePlot, #JMPScriptingLanguage, #DataVisualization, #InteractivePlotting, #Customization -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bubble Plot(
	X( :Movie Name ),
	Y( :Rotten Tomatoes Score ),
	Sizes( :Audience Score ),
	Time( :Genre ),
	Coloring( :BOA Opening Wknd ),
	Show Roles( 1 ),
	Y as Sum( 1 ),
	Size as Sum( 0 ), 
);
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot object.
3. Set X-axis to Movie Name.
4. Set Y-axis to Rotten Tomatoes Score.
5. Set sizes to Audience Score.
6. Set time axis to Genre.
7. Set coloring to BOA Opening Wknd.
8. Enable roles display.
9. Aggregate Y values by sum.
10. Do not aggregate size values.



### Example 100
> **Summary**: Creates a bubble plot with interactive features, displaying movie names on the X-axis, Rotten Tomatoes scores on the Y-axis, and audience scores as bubble sizes, while coloring bubbles by BOA opening weekend.

<!-- Keywords: #JSL, #BubblePlot, #InteractiveVisualization, #DataViz, #MovieAnalysis -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bubble Plot(
	X( :Movie Name ),
	Y( :Rotten Tomatoes Score ),
	Sizes( :Audience Score ),
	Time( :Genre ),
	Coloring( :BOA Opening Wknd ),
	Show Roles( 1 ), 
);
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot object.
3. Set X-axis to movie names.
4. Set Y-axis to Rotten Tomatoes scores.
5. Define bubble sizes by audience scores.
6. Use genre for time axis.
7. Color bubbles by BOA opening weekend.
8. Display roles in plot.



### Example 101
> **Summary**: Generates a bubble plot to visualize movie data, with X-axis representing Movie Name, Y-axis representing Rotten Tomatoes Score, and sizes determined by Audience Score. The plot also includes coloring based on BOA Opening Wknd.

<!-- Keywords: #BubblePlot, #JMPScriptingLanguage, #DataVisualization, #MovieData, #CustomPlotting -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bubble Plot(
	X( :Movie Name ),
	Y( :Rotten Tomatoes Score ),
	Sizes( :Audience Score ),
	Time( :Genre ),
	Coloring( :BOA Opening Wknd ),
	Show Roles( 1 ),
	Size as Sum( 0 ),
	Color as Sum( 1 ), 
);
```

**Code Explanation**:

1. Open data table;
2. Create Bubble Plot object.
3. Set X axis: Movie Name.
4. Set Y axis: Rotten Tomatoes Score.
5. Set bubble sizes: Audience Score.
6. Set time axis: Genre.
7. Set coloring: BOA Opening Wknd.
8. Enable roles display.
9. Disable size summation.
10. Enable color summation.



### Example 102
> **Summary**: Generates a bubble plot to visualize the relationship between Rotten Tomatoes Score, Theme, and Production Budget, with additional dimensions of Genre and BOA Opening Wknd.

<!-- Keywords: #JSLScriptingLanguage, #BubblePlot, #DataVisualization, #JMP, #Customization -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bubble Plot(
	X( :Rotten Tomatoes Score ),
	Y( :Theme ),
	Sizes( :Production Budget ),
	Time( :Genre ),
	Coloring( :BOA Opening Wknd ),
	Time Index( 6 ),
	Show Roles( 1 ),
	X as Sum( 1 ),
	Color as Sum( 1 ), 
);
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot object.
3. Set X axis to Rotten Tomatoes Score.
4. Set Y axis to Theme.
5. Define sizes by Production Budget.
6. Use Genre for time dimension.
7. Color bubbles by BOA Opening Wknd.
8. Set time index to 6.
9. Show roles in plot.
10. Aggregate X values as sum.
11. Aggregate color values as sum.



### Example 103
> **Summary**: Creates a bubble plot with sizes defined by Genre, coloring by Theme, and identification of Genre and Lead Studio Name.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #DataVisualization, #InteractiveAnalytics, #Customization -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bubble Plot(
	X( :Movie Name ),
	Y( :Theme ),
	Sizes( :Genre ),
	Time( :Theme ),
	Coloring( :Theme ),
	ID( :Genre, :Lead Studio Name ),
	Show Roles( 1 ), 
);
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot object.
3. Set X-axis to Movie Name.
4. Set Y-axis to Theme.
5. Define sizes by Genre.
6. Use Theme for time dimension.
7. Color bubbles by Theme.
8. Identify Genre and Lead Studio Name.
9. Display roles in bubble plot.
10. Show bubble plot.



### Example 104
> **Summary**: Creates a bubble plot with sizes and coloring defined, utilizing the Bubble Plot platform in JMP.

<!-- Keywords: #JMPBubblePlot, #DataVisualization, #ScriptingLanguage, #JSL, #InteractiveGraphics -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bubble Plot( X( :Movie Name ), Y( :Theme ), Sizes( :Genre ), Coloring( :Lead Studio Name ), Show Roles( 1 ), );
```

**Code Explanation**:

1. Open table.
2. Create bubble plot.
3. Set X axis.
4. Set Y axis.
5. Define sizes.
6. Define colors.
7. Show roles.



### Example 105
> **Summary**: Creates a bubble plot with Movie Name on the X-axis, Genre on the Y-axis, and Theme as IDs, displaying roles.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #DataVisualization, #Plotting, #DataAnalysis -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bubble Plot( X( :Movie Name ), Y( :Genre ), ID( :Theme ), Show Roles( 1 ), );
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot.
3. Set X axis: Movie Name.
4. Set Y axis: Genre.
5. Use Theme for IDs.
6. Display roles.



### Example 106
> **Summary**: Creates a bubble plot with ID roles, using 'Movie Name' as the X-axis, 'Theme' as the Y-axis, and 'Lead Studio Name' and 'Genre' for secondary IDs.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #IDRoles, #DataVisualization, #PlotCustomization -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bubble Plot( X( :Movie Name ), Y( :Theme ), ID( :Lead Studio Name, :Genre ), Show Roles( 1 ), );
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot object.
3. Set X-axis to Movie Name.
4. Set Y-axis to Theme.
5. Use Lead Studio Name for ID.
6. Use Genre for secondary ID.
7. Display roles in plot.



### Example 107
> **Summary**: Creates a bubble plot with sizes based on Genre, showcasing Movie Name and Theme, using Open() to load data from 'data_table.jmp'.

<!-- Keywords: #JSLScriptingLanguage, #BubblePlot, #DataVisualization, #JMP, #InteractivePlotting -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bubble Plot( X( :Movie Name ), Y( :Theme ), Sizes( :Genre ), Show Roles( 1 ), );
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot object.
3. Set X-axis to Movie Name.
4. Set Y-axis to Theme.
5. Use Genre for bubble sizes.
6. Show roles in plot.



### Example 108
> **Summary**: Creates a bubble plot with X-axis variable 'Movie Name', Y-axis variable 'Genre', and time variable 'Lead Studio Name' from an open data table.

<!-- Keywords: #JSLScriptingLanguage, #BubblePlot, #DataVisualization, #JMP, #GraphicalAnalytics -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bubble Plot( X( :Movie Name ), Y( :Genre ), Time( :Lead Studio Name ), Show Roles( 1 ), );
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot object.
3. Set X-axis variable.
4. Set Y-axis variable.
5. Set time variable.
6. Show roles in plot.



### Example 109
> **Summary**: Creates a bubble plot with sizes defined by theme, colored by genre, and displaying roles in JMP.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #DataVisualization, #InteractiveAnalysis, #Scripting -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bubble Plot( X( :Movie Name ), Y( :Lead Studio Name ), Sizes( :Theme ), Time( :Genre ), Coloring( :Genre ), Show Roles( 1 ), );
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot object.
3. Set X-axis to Movie Name.
4. Set Y-axis to Lead Studio Name.
5. Define sizes by Theme.
6. Use Genre for time dimension.
7. Color bubbles by Genre.
8. Display roles in plot.



### Example 110
> **Summary**: Generates a bubble plot to visualize the relationship between Production Budget and Profitability, with additional dimensions of Size, Audience Score, and Rotten Tomatoes Score.

<!-- Keywords: #BubblePlot, #JMPScriptingLanguage, #DataVisualization, #InteractivePlotting, #Customization -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bubble Plot(
	X( :Production Budget ),
	Y( :Profitability ),
	Sizes( :Size ),
	Time( :Audience Score ),
	Coloring( :Rotten Tomatoes Score ),
	ID( :Domestic Gross, :World Gross ),
	By( :Genre ),
	Show Roles( 1 ), 
);
```

**Code Explanation**:

1. Open data table;
2. Create Bubble Plot object.
3. Set X axis to Production Budget.
4. Set Y axis to Profitability.
5. Define bubble sizes by Size.
6. Use Audience Score for time dimension.
7. Color bubbles by Rotten Tomatoes Score.
8. Identify Domestic Gross and World Gross.
9. Group data by Genre.
10. Show all roles in plot.



### Example 111
> **Summary**: Creates a bubble plot with sizes defined by World Gross and colored by Rotten Tomatoes Score, using the Open data table function to load the 'data_table.jmp' file.

<!-- Keywords: #JSL, #BubblePlot, #DataVisualization, #InteractiveGraphics, #JMPScriptingLanguage -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bubble Plot( X( :Audience Score ), Y( :Profitability ), Sizes( :World Gross ), Coloring( :Rotten Tomatoes Score ), );
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot object.
3. Set X-axis to Audience Score.
4. Set Y-axis to Profitability.
5. Define sizes by World Gross.
6. Color bubbles by Rotten Tomatoes Score.



### Example 112
> **Summary**: Creates a bubble plot with X-axis set to Production Budget, Y-axis set to Profitability, and IDs based on Rotten Tomatoes Score.

<!-- Keywords: #JSLScriptingLanguage, #BubblePlot, #DataVisualization, #JMP, #InteractiveAnalysis -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bubble Plot( X( :Production Budget ), Y( :Profitability ), ID( :Rotten Tomatoes Score ), );
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot object.
3. Set X axis to Production Budget.
4. Set Y axis to Profitability.
5. Use Rotten Tomatoes Score for IDs.



### Example 113
> **Summary**: Creates a bubble plot with two IDs, displaying production budget on the x-axis and profitability on the y-axis.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #DataVisualization, #IDVariables, #ShowRoles -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bubble Plot( X( :Production Budget ), Y( :Profitability ), ID( :Domestic Gross, :World Gross ), Show Roles( 1 ), );
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot object.
3. Set X-axis to Production Budget.
4. Set Y-axis to Profitability.
5. Use Domestic Gross for ID.
6. Use World Gross for ID2.
7. Display roles in plot.
8. End script.



### Example 114
> **Summary**: Creates a bubble plot with X-axis set to Domestic Gross, Y-axis set to Theaters Opening Wknd, and bubble sizes set to Profitability.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #DataVisualization, #Plotting, #Scripting -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bubble Plot( X( :Domestic Gross ), Y( :Theaters Opening Wknd ), Sizes( :Profitability ), );
```

**Code Explanation**:

1. Open data table;
2. Create bubble plot object.
3. Set X-axis to Domestic Gross.
4. Set Y-axis to Theaters Opening Wknd.
5. Set bubble sizes to Profitability.



### Example 115
> **Summary**: Creates a bubble plot with X-axis set to Audience Score, Y-axis set to World Gross, and Time axis set to Profitability, using data from an open JMP data table.

<!-- Keywords: #JMP, #BubblePlot, #DataVisualization, #Scripting, #JSL -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bubble Plot( X( :Audience Score ), Y( :World Gross ), Time( :Profitability ), );
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot.
3. Set X axis: Audience Score.
4. Set Y axis: World Gross.
5. Set Time axis: Profitability.



### Example 116
> **Summary**: Creates a bubble plot with interactive features, displaying Production Budget on the X-axis, Profitability on the Y-axis, and World Gross as size markers, colored by Rotten Tomatoes Score.

<!-- Keywords: #JSL, #BubblePlot, #InteractiveVisualization, #DataViz, #JMPScripting -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bubble Plot(
	X( :Production Budget ),
	Y( :Profitability ),
	Sizes( :World Gross ),
	Time( :Audience Score ),
	Coloring( :Rotten Tomatoes Score ), 
);
```

**Code Explanation**:

1. Open data table;
2. Create Bubble Plot object.
3. Set X-axis to "Production Budget".
4. Set Y-axis to "Profitability".
5. Set sizes to "World Gross".
6. Set time to "Audience Score".
7. Set coloring to "Rotten Tomatoes Score".



### Example 117
> **Summary**: Creates a bubble plot with coloring, sizing, and show roles from a data table, utilizing the Bubble Plot platform in JMP.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #DataVisualization, #Automation, #JSLScript -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bubble Plot( X( :Rotten Tomatoes Score ), Y( :Audience Score ), Coloring( :Genre ), Sizes( :World Gross ), Show Roles( 1 ), );
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot.
3. Set X axis variable.
4. Set Y axis variable.
5. Apply coloring variable.
6. Apply size variable.
7. Show roles.



### Example 118
> **Summary**: Creates a bubble plot with X-axis set to Genre, Y-axis set to Audience Score, and Time axis set to World Gross, utilizing Show Roles set to 1.

<!-- Keywords: #JSLScripting, #BubblePlot, #DataVisualization, #TimeSeriesAnalysis, #ShowRoles -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bubble Plot( X( :Genre ), Y( :Audience Score ), Time( :World Gross ), Show Roles( 1 ), );
```

**Code Explanation**:

1. Open data table;
2. Create Bubble Plot object.
3. Set X-axis to Genre.
4. Set Y-axis to Audience Score.
5. Set Time axis to World Gross.
6. Show Roles set to 1.



### Example 119
> **Summary**: Creates a bubble plot with interactive features, displaying Rotten Tomatoes Score on the X-axis, Audience Score on the Y-axis, and coloring bubbles by Genre, sizing them by World Gross, and using Theaters Opening Wknd for time.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #InteractiveVisualization, #DataAnalysis, #MovieIndustry -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bubble Plot(
	X( :Rotten Tomatoes Score ),
	Y( :Audience Score ),
	Coloring( :Genre ),
	Sizes( :World Gross ),
	Time( :Theaters Opening Wknd ),
	Show Roles( 1 ), 
);
```

**Code Explanation**:

1. Open data table;
2. Create Bubble Plot object.
3. Set X-axis to "Rotten Tomatoes Score".
4. Set Y-axis to "Audience Score".
5. Color bubbles by "Genre".
6. Size bubbles by "World Gross".
7. Use "Theaters Opening Wknd" for time.
8. Display roles.



### Example 120
> **Summary**: Creates a bubble plot with X-axis set to Audience Score, Y-axis set to Genre, and time dimension set to Profitability, displaying roles in the plot.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #DataVisualization, #TimeSeriesAnalysis, #Plotting -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bubble Plot( X( :Audience Score ), Y( :Genre ), Time( :Profitability ), Show Roles( 1 ), );
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot object.
3. Set X-axis to Audience Score.
4. Set Y-axis to Genre.
5. Use Profitability for time dimension.
6. Display roles in plot.



### Example 121
> **Summary**: Creates a bubble plot with interactive features, displaying Rotten Tomatoes Score on the X-axis, Movie Name on the Y-axis, and sizes defined by Genre, colored by Theme, animated over Audience Score, and identified with Domestic Gross and World Gross.

<!-- Keywords: #JSL, #BubblePlot, #InteractiveVisualization, #DataViz, #JMP -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bubble Plot(
	X( :Rotten Tomatoes Score ),
	Y( :Movie Name ),
	Sizes( :Genre ),
	Coloring( :Theme ),
	Time( :Audience Score ),
	ID( :Domestic Gross, :World Gross ),
	Show Roles( 1 ), 
);
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot object.
3. Set X axis to Rotten Tomatoes Score.
4. Set Y axis to Movie Name.
5. Define sizes by Genre.
6. Color bubbles by Theme.
7. Animate over Audience Score.
8. Identify with Domestic Gross, World Gross.
9. Display roles.
10. Show bubble plot.



### Example 122
> **Summary**: Creates a bubble plot with interactive features, displaying Rotten Tomatoes scores against movie names, colored by genre and sized by audience score.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #InteractiveVisualization, #DataAnalysis, #MovieData -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bubble Plot(
	X( :Rotten Tomatoes Score ),
	Y( :Movie Name ),
	Sizes( :Movie Name ),
	Coloring( :Genre ),
	Time( :Audience Score ),
	ID( :Movie Name, :Theme ),
	Show Roles( 1 ), 
);
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot object.
3. Set X axis variable.
4. Set Y axis variable.
5. Define bubble sizes.
6. Apply coloring by genre.
7. Use audience score for time.
8. Identify movies by name and theme.
9. Display roles.
10. Finalize bubble plot creation.



### Example 123
> **Summary**: Creates a Bubble Plot with interactive features, displaying Rotten Tomatoes Score on the X-axis, Genre on the Y-axis, and Audience Score as bubble sizes, while coloring by Theme and animating over Profitability.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #InteractiveVisualization, #DataAnalysis, #FilmIndustry -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bubble Plot(
	X( :Rotten Tomatoes Score ),
	Y( :Genre ),
	Sizes( :Audience Score ),
	Coloring( :Theme ),
	Time( :Profitability ),
	ID( :Domestic Gross, :World Gross ),
	Show Roles( 1 ), 
);
```

**Code Explanation**:

1. Open data table;
2. Create Bubble Plot object.
3. Set X-axis: Rotten Tomatoes Score.
4. Set Y-axis: Genre.
5. Define bubble sizes: Audience Score.
6. Color bubbles by Theme.
7. Animate over Profitability.
8. Display Domestic Gross, World Gross.
9. Show roles in plot.
10. Execute Bubble Plot creation.



### Example 124
> **Summary**: Creates a bubble plot with various visualizations, including X-axis variable 'Rotten Tomatoes Score', Y-axis variable 'Genre', and coloring based on 'BOA Opening Wknd'.

<!-- Keywords: #JSL, #BubblePlot, #Visualization, #DataAnalysis, #JMP -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bubble Plot(
	X( :Rotten Tomatoes Score ),
	Y( :Genre ),
	Sizes( :Audience Score ),
	Coloring( :BOA Opening Wknd ),
	Time( :Genre ),
	ID( :Domestic Gross, :Lead Studio Name ),
	Show Roles( 1 ), 
);
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot object.
3. Set X-axis variable.
4. Set Y-axis variable.
5. Define bubble sizes.
6. Assign coloring variable.
7. Use time variable.
8. Specify ID variables.
9. Show roles in plot.
10. Display bubble plot.



### Example 125
> **Summary**: Creates a bubble plot with X-axis set to Rotten Tomatoes Score, Y-axis set to Audience Score, and identification by Genre.

<!-- Keywords: #BubblePlot, #JSLScriptingLanguage, #DataVisualization, #RottenTomatoes, #AudienceScore -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bubble Plot( X( :Rotten Tomatoes Score ), Y( :Audience Score ), ID( :Genre ), );
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot object.
3. Set X axis to Rotten Tomatoes Score.
4. Set Y axis to Audience Score.
5. Use Genre for identification.



### Example 126
> **Summary**: Creates a bubble plot to visualize movie data, with X-axis set to Movie Name, Y-axis to Rotten Tomatoes Score, and sizes determined by Genre. The plot is colored by Theme and animated over Audience Score.

<!-- Keywords: #BubblePlot, #JMPScriptingLanguage, #DataVisualization, #MovieData, #InteractivePlot -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bubble Plot(
	X( :Movie Name ),
	Y( :Rotten Tomatoes Score ),
	Sizes( :Genre ),
	Coloring( :Theme ),
	Time( :Audience Score ),
	ID( :Domestic Gross, :World Gross ),
	Show Roles( 1 ), 
);
```

**Code Explanation**:

1. Open data table;
2. Create Bubble Plot object.
3. Set X axis to Movie Name.
4. Set Y axis to Rotten Tomatoes Score.
5. Use Genre for bubble sizes.
6. Color bubbles by Theme.
7. Animate over Audience Score.
8. Identify Domestic Gross, World Gross.
9. Display roles in plot.
10. Show bubble plot.



### Example 127
> **Summary**: Creates a bubble plot with various visualizations, including X-axis variable, Y-axis variable, sizes, coloring, and time dimension, from a data table.

<!-- Keywords: #JSLScriptingLanguage, #BubblePlot, #DataVisualization, #JMP, #InteractivePlotting -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bubble Plot(
	X( :Genre ),
	Y( :Rotten Tomatoes Score ),
	Sizes( :Movie Name ),
	Coloring( :Genre ),
	Time( :Audience Score ),
	ID( :Movie Name, :Theme ),
	Show Roles( 1 ), 
);
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot object.
3. Set X-axis variable.
4. Set Y-axis variable.
5. Define bubble sizes.
6. Set coloring variable.
7. Add time dimension.
8. Assign ID variables.
9. Show roles option.
10. Display plot.



### Example 128
> **Summary**: Creates a bubble plot with interactive features, including X-axis variable, Y-axis variable, bubble sizes, color categories, and time animation.

<!-- Keywords: #JSLScriptingLanguage, #BubblePlot, #InteractiveVisualization, #TimeSeriesAnalysis, #DataVisualization -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bubble Plot(
	X( :Genre ),
	Y( :Rotten Tomatoes Score ),
	Sizes( :Audience Score ),
	Coloring( :Theme ),
	Time( :Profitability ),
	ID( :Domestic Gross, :World Gross ),
	Show Roles( 1 ), 
);
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot.
3. Set X-axis variable.
4. Set Y-axis variable.
5. Define bubble sizes.
6. Assign color categories.
7. Enable time animation.
8. Identify bubble IDs.
9. Display roles legend.
10. Configure bubble plot settings.



### Example 129
> **Summary**: Creates a bubble plot with interactive features, displaying Genre on the X-axis, Rotten Tomatoes Score on the Y-axis, and Audience Score as bubble sizes, while coloring by BOA Opening Wknd and providing additional information through ID roles.

<!-- Keywords: #JSL, #BubblePlot, #InteractiveVisualization, #DataAnalysis, #MovieGenre -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bubble Plot(
	X( :Genre ),
	Y( :Rotten Tomatoes Score ),
	Sizes( :Audience Score ),
	Coloring( :BOA Opening Wknd ),
	Time( :Genre ),
	ID( :Domestic Gross, :Lead Studio Name ),
	Show Roles( 1 ), 
);
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot object.
3. Set X-axis variable.
4. Set Y-axis variable.
5. Define bubble sizes.
6. Assign coloring variable.
7. Set time variable.
8. Identify with domestic gross.
9. Identify with lead studio name.
10. Display roles.



### Example 130
> **Summary**: Creates a bubble plot to visualize personal consumption expenditures by gross national product ($billions) across years, with sizes based on population and ID variables for region and country.

<!-- Keywords: #JSLScriptingLanguage, #BubblePlot, #DataVisualization, #JMP, #InteractivePlotting -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bubble Plot(
	X( :Name( "Portion 0-19" ) ),
	Y( :Name( "Portion60+" ) ),
	Sizes( :Pop ),
	Time( :Year ),
	ID( :Region, :Country ),
	Title Position( 0.77, 0.0865 ),
	SendToReport(
		Dispatch( {}, "Bubble Plot of Portion60+ by Portion 0-19 Sized by Pop Across Year ID Region", OutlineBox,
			{Set Title(
				"Bubble Plot of personal consumption expenditures by gross national product ($billions) Sized by net exports of goods and services Across DATE"
			)}
		),
		Dispatch( {}, "Portion60+", TextEditBox, {Set Text( "personal consumption expenditures" )} ),
		Dispatch( {}, "Bubble Plot", FrameBox, {Frame Size( 503, 360 )} ),
		Dispatch( {}, "Portion 0-19", TextEditBox, {Set Text( "gross national product ($billions)" )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot object.
3. Set X-axis variable.
4. Set Y-axis variable.
5. Define bubble sizes.
6. Add time dimension.
7. Identify regions and countries.
8. Position title on plot.
9. Set overall plot title.
10. Label Y-axis.
11. Resize plot frame.
12. Label X-axis.



### Example 131
> **Summary**: Creates a bubble plot with needle plots for high, close, and low stock prices of DJI over time, utilizing JMP's Bubble Plot platform.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #NeedlePlot, #StockPrices, #TimeSeries -->

**Code**:
```jsl
Open("data_table.jmp");
bp = Bubble Plot(
	X( :Name( "Portion 0-19" ) ),
	Y( :Name( "Portion60+" ) ),
	Sizes( :Pop ),
	ID( :Country ),
	SendToReport(
		Dispatch( {}, "Bubble Plot", FrameBox,
			{Add Image(
				Set Blob(
					Char To Blob(
						"1iVBORw0KGgoAAAANSUhEUgAAAA0AAAALCAYAAACksgdhAAAAAXNSR0IArs4c6QAAAARnQU1B
AACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAA+SURBVChTY2DAAf4zMAARCQCkAYaJ0oasgSiN
2DTg1YhPA1aNxGggWyPWQCHZTzBTSA49bBqJiidkjbg0AABqcnmHm4QAiAAAAABJRU5ErkJggg==",
						"base64compressed"
					),
					"png"
				),
				Bounds( Left( 0.6675 ), Right( 0.675625 ), Top( 0.115777777777778 ), Bottom( 0.110888888888889 ) ), 
			), Grid Line Order( 2 ), Reference Line Order( 3 )}
		)
	)
);
ps = Report( bp )[framebox( 1 )] << Find Seg( PictSeg );
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot.
3. Set X-axis variable.
4. Set Y-axis variable.
5. Define bubble sizes.
6. Assign country identifiers.
7. Send report settings.
8. Add image to plot.
9. Set image properties.
10. Find and return segment.



### Example 132
> **Summary**: Creates a bubble plot with needle plots for high, close, and low stock prices of DJI over time, utilizing the Bubble Plot platform in JMP.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #NeedlePlots, #StockPrices, #TimeSeries -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bp = Bubble Plot(
	X( :Name( "Portion 0-19" ) ),
	Y( :Name( "Portion60+" ) ),
	Sizes( :Pop ),
	ID( :Country ),
	SendToReport(
		Dispatch( {}, "Bubble Plot", FrameBox,
			{Add Image(
				Set Blob(
					Char To Blob(
						"1iVBORw0KGgoAAAANSUhEUgAAAA0AAAALCAYAAACksgdhAAAAAXNSR0IArs4c6QAAAARnQU1B
AACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAA+SURBVChTY2DAAf4zMAARCQCkAYaJ0oasgSiN
2DTg1YhPA1aNxGggWyPWQCHZTzBTSA49bBqJiidkjbg0AABqcnmHm4QAiAAAAABJRU5ErkJggg==",
						"base64compressed"
					),
					"png"
				),
				Bounds( Left( 0.6675 ), Right( 0.675625 ), Top( 0.115777777777778 ), Bottom( 0.110888888888889 ) ), 
			), Grid Line Order( 2 ), Reference Line Order( 3 )}
		)
	)
);
ps = Report( bp )[framebox( 1 )] << Find Seg( PictSeg );
ps << Fillgraph;
```

**Code Explanation**:

1. Open table.
2. Create bubble plot.
3. Set X-axis variable.
4. Set Y-axis variable.
5. Set size variable.
6. Set ID variable.
7. Send report settings.
8. Add image to plot.
9. Set image bounds.
10. Fill graph with image.



### Example 133
> **Summary**: Creates a bubble plot to visualize CO2 emissions from liquid and solid fuel consumption, with sizes based on population and time indexed by year, utilizing SendToReport dispatch for customized axis formats.

<!-- Keywords: #JSL, #BubblePlot, #SendToReport, #CustomAxisFormat, #TimeSeries -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Bubble Plot(
	X( :CO2 emissions from liquid fuel consumption ),
	Y( :CO2 emissions from solid fuel consumption ),
	Sizes( :Population ),
	Time( :Year ),
	ID( :Nation ),
	Time Index( 26.6000000000001 ),
	Title Position( 13250, 208750 ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox,
			{Format( "Custom", Formula( Round( ArcCosine( Cosine( value ) ), 2 ) ), 12 ), Min( -25000 ), Max( 200000 ), Inc( 50000 ),
			Minor Ticks( 1 )}
		),
		Dispatch( {}, "2", ScaleBox,
			{Format( "Custom", Formula( Round( ArcSine( Sine( value ) ), 2 ) ), 12 ), Min( -25000 ), Max( 250000 ), Inc( 50000 ),
			Minor Ticks( 1 )}
		),
		Dispatch( {}, "Bubble Plot", FrameBox, {Frame Size( 483, 360 )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot.
3. Set X axis variable.
4. Set Y axis variable.
5. Define bubble sizes.
6. Add time variable.
7. Identify nations.
8. Set time index.
9. Position title.
10. Customize axis formats.



### Example 134
> **Summary**: Creates a bubble plot with needle plots for high, close, and low stock prices of DJI over time, utilizing the SendToReport function to dispatch scale boxes and frame boxes.

<!-- Keywords: #JSL, #BubblePlot, #SendToReport, #ScaleBox, #FrameBox -->

**Code**:
```jsl
Open("data_table.jmp");
Bubble Plot(
	X( :Longitude ),
	Y( :Latitude ),
	Time( :Time ),
	Coloring( :Airline ),
	ID( :Tail Number ),
	Speed( 85.7075471698113 ),
	Title Position( -33.8159722222222, 70.8551493046094 ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox,
			{Scale( "Geodesic" ), Min( -158.494441105581 ), Max( -61.2713575551654 ), Inc( 20 ), Minor Ticks( 0 )}
		),
		Dispatch( {}, "2", ScaleBox, {Scale( "Geodesic" ), Min( 16.0016585855032 ), Max( 76.9079482805108 ), Inc( 10 ), Minor Ticks( 0 )} ),
		Dispatch( {}, "Bubble Plot", FrameBox,
			{Frame Size( 514, 322 ), Background Map( Images( "Simple Earth", Transparency( 0.7 ) ), Boundaries( "World" ) ),
			Grid Line Order( 3 ), Reference Line Order( 4 ), {Add Pin Annotation(
				Seg( CustomStreamSeg( 1 ) ),
				Index( 2008 ),
				Index Row( 2008 ),
				UniqueID( -1729408776 ),
				FoundPt( {240, 92} ),
				Origin( {-149.648607462572, 62.0290512992411} ),
				Tag Line( 1 )
			), Add Pin Annotation(
				Seg( CustomStreamSeg( 1 ) ),
				Index( 3830 ),
				Index Row( 3830 ),
				UniqueID( -1729406954 ),
				FoundPt( {394, 228} ),
				Origin( {-94.7657523417862, 40.3256920602609} ),
				Tag Line( 1 )
			), Add Pin Annotation(
				Seg( CustomStreamSeg( 1 ) ),
				Index( 30 ),
				Index Row( 30 ),
				UniqueID( -1729410754 ),
				FoundPt( {476, 284} ),
				Origin( {-80.2091557061591, 25.9605593284194} ),
				Offset( {-46, -51} ),
				Tag Line( 1 )
			)}}
		)
	)
);
```

**Code Explanation**:

1. Open data_table data
2. Create bubble plot.
3. Set X axis to Longitude.
4. Set Y axis to Latitude.
5. Set time variable.
6. Color by Airline.
7. Use Tail Number for ID.
8. Set speed value.
9. Position title.
10. Configure scale and map settings.



### Example 135
> **Summary**: Creates a bubble plot with needle plots for high, close, and low stock prices of DJI over time, utilizing JMP's Bubble Plot platform.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #NeedlePlots, #StockPrices, #TimeSeries -->

**Code**:
```jsl
Open("data_table.jmp") << Bubble Plot(
	X( :weight ),
	Y( :height ),
	Coloring( :age ),
	Title Position( 1.36625688434918e-311, 1.36625688438475e-311 ),
	SendToReport(
		Dispatch( {}, "Bubble Plot", FrameBox,
			Add Pin Annotation(
				Seg( CustomStreamSeg( 1 ) ),
				Index( 3 ),
				Index Row( -1 ),
				UniqueID( 3 ),
				FoundPt( {388, 156} ),
				Origin( {144.775, 66.1194444444445} ),
				RightOfCenter( 1 ),
				Tag Line( 1 )
			)
		)
	)
);
```

**Code Explanation**:

1. Open data_table data
2. Create Bubble Plot.
3. Set X-axis to weight.
4. Set Y-axis to height.
5. Color by age.
6. Adjust title position.
7. Send report to JMP.
8. Dispatch to Bubble Plot frame.
9. Add pin annotation.
10. Customize annotation properties.



### Example 136
> **Summary**: Creates a bubble plot with interactive features, including X-axis labeling by 'Movie Name', Y-axis labeling by 'Rotten Tomatoes Score', and coloring by 'BOA Opening Wknd'.

<!-- Keywords: #JSL, #BubblePlot, #InteractiveVisualization, #DataTable, #JMP -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bubble Plot(
	X( :Movie Name ),
	Y( :Rotten Tomatoes Score ),
	Sizes( :Audience Score ),
	Time( :Genre ),
	Coloring( :BOA Opening Wknd ),
	Show Roles( 1 ), 
);
```

**Code Explanation**:

1. Open table "data_table".
2. Create bubble plot.
3. Set X-axis to "Movie Name".
4. Set Y-axis to "Rotten Tomatoes Score".
5. Set bubble sizes to "Audience Score".
6. Use "Genre" for time axis.
7. Color bubbles by "BOA Opening Wknd".
8. Show roles in plot.
9. Execute bubble plot creation.
10. Display resulting plot.



### Example 137
> **Summary**: Generates a bubble plot with interactive features to visualize the relationship between Production Budget, Profitability, and other variables in a data table.

<!-- Keywords: #JSLScriptingLanguage, #BubblePlot, #InteractiveVisualization, #DataAnalysis, #JMP -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = dt under test << Bubble Plot(
	X( :Production Budget ),
	Y( :Profitability ),
	Sizes( :Size ),
	Time( :Audience Score ),
	Coloring( :Rotten Tomatoes Score ),
	ID( :Domestic Gross, :World Gross ),
	By( :Theaters Opening Wknd ),
	Show Roles( 1 ), 
);
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot object.
3. Set X axis to Production Budget.
4. Set Y axis to Profitability.
5. Define sizes by Size variable.
6. Use Audience Score for time dimension.
7. Color bubbles by Rotten Tomatoes Score.
8. Identify bubbles by Domestic and World Gross.
9. Group plots by Theaters Opening Wknd.
10. Display all roles.



### Example 138
> **Summary**: Creates a bubble plot with interactive features, including coloring and sizing based on specific variables, to visualize relationships between Production Budget, Profitability, Size, Audience Score, Rotten Tomatoes Score, Domestic Gross, World Gross, and Theaters Opening Wknd.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #InteractiveVisualization, #DataAnalysis, #BusinessIntelligence -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bubble Plot(
	X( :Production Budget ),
	Y( :Profitability ),
	Sizes( :Size ),
	Time( :Audience Score ),
	Coloring( :Rotten Tomatoes Score ),
	ID( :Domestic Gross, :World Gross ),
	By( :Theaters Opening Wknd ),
	Show Roles( 1 ), 
);
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot object.
3. Set X-axis variable.
4. Set Y-axis variable.
5. Define bubble sizes.
6. Set time variable.
7. Assign coloring variable.
8. Identify bubble IDs.
9. Group by theaters.
10. Display all roles.



### Example 139
> **Summary**: Creates a bubble plot with needle plots for high, close, and low stock prices of DJI over time, utilizing SendToReport dispatches to customize scale properties.

<!-- Keywords: #JSLScriptingLanguage, #BubblePlot, #SendToReport, #Dispatch, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Bubble Plot(
	X( :CO2 emissions from liquid fuel consumption ),
	Y( :CO2 emissions from solid fuel consumption ),
	Sizes( :Population ),
	Time( :Year ),
	ID( :Nation ),
	Time Index( 26.6000000000001 ),
	Title Position( 13250, 208750 ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox, {Min( -25000 ), Max( 200000 ), Inc( 50000 ), Minor Ticks( 1 )} ),
		Dispatch( {}, "2", ScaleBox, {Min( -25000 ), Max( 250000 ), Inc( 50000 ), Minor Ticks( 1 )} )
	)
);
rpt1 = obj << Report;
expr1 = rpt1[FrameBox( 1 )] << Get Journal;
:Nation << Set Property( "Missing Value Codes", "India" );
obj2 = obj << Redo Analysis;
rpt = obj2 << Report;
expr = rpt[FrameBox( 1 )] << Get Journal;
ans = Equal( expr, expr1 );
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot object.
3. Set X axis variable.
4. Set Y axis variable.
5. Set sizes variable.
6. Set time variable.
7. Set ID variable.
8. Set time index.
9. Set title position.
10. Adjust X scale properties.
11. Adjust Y scale properties.
12. Generate initial report.
13. Extract first frame journal.
14. Set missing value code for Nation.
15. Redo analysis with updated settings.
16. Generate updated report.
17. Extract updated frame journal.
18. Compare initial and updated journals.



### Example 140
> **Summary**: Creates a bubble plot to visualize CO2 emissions from liquid and solid fuel consumption by nation, with population sizes and time-based filtering.

<!-- Keywords: #JSLScriptingLanguage, #BubblePlot, #DataVisualization, #TimeSeriesAnalysis, #EnvironmentalMonitoring -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bp = Bubble Plot(
	X( :CO2 emissions from liquid fuel consumption ),
	Y( :CO2 emissions from solid fuel consumption ),
	Sizes( :Population ),
	Time( :Year ),
	ID( :Nation ),
	Circle Size( 20047.1698113208 ),
	Time Index( 2 ),
	All Labels( 0 ),
	SendToReport(
		Dispatch( {}, "2", ScaleBox, {Scale( Log ), Format( "Best" ), Min( 0.0001 ), Max( 238471 ), Inc( 1 ), Minor Ticks( 8 )} )
	)
);
rpt = bp << report;
```

**Code Explanation**:

1. Open table.
2. Create bubble plot.
3. Set X-axis variable.
4. Set Y-axis variable.
5. Define sizes by population.
6. Use time variable.
7. Identify by nation.
8. Set circle size.
9. Set time index.
10. Disable all labels.



### Example 141
> **Summary**: Creates a bubble plot with coloring based on sum, utilizing the Bubble Plot platform in JMP.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #Coloring, #Sum, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bp = Bubble Plot( X( :Name( "Portion 0-19" ) ), Y( :Name( "Portion60+" ) ), Coloring( :Pop ), ID( :Country ) );
bp << Color as Sum( 1 );
bp << Color as Sum( 0 );
bp << Close Window();
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot.
3. Set X axis variable.
4. Set Y axis variable.
5. Define coloring variable.
6. Assign ID variable.
7. Color bubbles by sum.
8. Color bubbles by sum.
9. Close bubble plot window.



### Example 142
> **Summary**: Creates a bubble plot with interactive steps and report generation from a data table, featuring coloring by sex and dynamic updates.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #InteractiveSteps, #ReportGeneration, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bp = Bubble Plot( X( :age ), Y( :height ), Time( :age ), Coloring( :sex ), ID( :sex ), );
dt << Add Rows( 10 );
bp << Step;
bp << Step;
bp << Step;
bp << Step;
bp << Step;
dt << Select Rows( 41 :: 50 );
dt << Delete Rows;
rpt = Report( bp );
```

**Code Explanation**:

1. Open data table;
2. Create bubble plot.
3. Add 10 rows to data table.
4. Move bubble plot forward.
5. Move bubble plot forward.
6. Move bubble plot forward.
7. Move bubble plot forward.
8. Move bubble plot forward.
9. Select last 10 rows.
10. Delete selected rows.
11. Generate report from bubble plot.



### Example 143
> **Summary**: Creates a bubble plot with sizes based on % Taking, utilizing the Bubble Plot platform in JMP.

<!-- Keywords: #JMP, #BubblePlot, #DataVisualization, #Scripting, #JSL -->

**Code**:
```jsl
Open("data_table.jmp");
bp = Bubble Plot(
	X( :SAT Math ),
	Y( :SAT Verbal ),
	Sizes( :Name( "% Taking (2004)" ) ),
	Time( :Year ),
	ID( :State ),
	All Labels( 1 ),
	No Labels( 0 ),
	Title Position( 540, 500 ), 
);
bp << Close Window();
dt = New Table( "TEST",
	Add Rows( 4 ),
	New Property( "Bubble Plot", Bubble Plot( X( :X ), Y( :Y ), Sizes( :size ) ) ),
	New Column( "size", Numeric, Continuous, Set Values( [3338, 4944, 969153332, 986476563] ) ),
	New Column( "X", Numeric, Continuous, Set Values( [14, 13, 290412, 301294] ) ),
	New Column( "Y", Numeric, Continuous, Set Values( [0, 0, 195109, 206434] ) )
);
bp = dt << Run Script( "Bubble Plot" );
bp << Close Window();
```

**Code Explanation**:

1. Open data table;
2. Create bubble plot.
3. Set X axis to SAT Math.
4. Set Y axis to SAT Verbal.
5. Set sizes based on % Taking.
6. Set time variable to Year.
7. Set ID variable to State.
8. Enable all labels.
9. Disable no labels.
10. Set title position.
11. Close bubble plot window.
12. Create new table named TEST.
13. Add four rows to table.
14. Add Bubble Plot property to table.
15. Create size column with values.
16. Create X column with values.
17. Create Y column with values.
18. Run Bubble Plot script from table.
19. Close bubble plot window.



### Example 144
> **Summary**: Creates a bubble plot to visualize CO2 emissions from liquid and solid fuel consumption, with population sizes and year as interactive features.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #InteractiveVisualization, #CO2Emissions, #EnergyConsumption -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bp = Bubble Plot(
	X( :CO2 emissions from liquid fuel consumption ),
	Y( :CO2 emissions from solid fuel consumption ),
	Sizes( :Population ),
	Time( :Year ),
	ID( :Nation ),
	Circle Size( 20047.1698113208 ),
	Time Index( 2 ),
	All Labels( 0 ),
	SendToReport(
		Dispatch( {}, "2", ScaleBox, {Scale( "Log" ), Format( "Best" ), Min( 0.0001 ), Max( 238471 ), Inc( 1 ), Minor Ticks( 8 )} )
	)
);
bp << Title Position( 50000, 10 );
bp << Close Window();
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot.
3. Set X-axis variable.
4. Set Y-axis variable.
5. Define bubble sizes.
6. Add time variable.
7. Identify nations.
8. Set circle size.
9. Configure time index.
10. Disable all labels.



### Example 145
> **Summary**: Creates a bubble plot with trail lines and bubbles, selecting specific rows from a data table and closing the window.

<!-- Keywords: #JSLScriptingLanguage, #BubblePlot, #DataVisualization, #TrailLines, #InteractivePlot -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bp = Bubble Plot( X( :Population ), Y( :SAT Math ), ID( :State ), All Labels( 0 ) );
bp << Trail Lines( 1 );
bp << Trail Bubbles( 1 );
dt << Select Rows( 33 :: 40 );
r = dt << Get Selected Rows;
bp << Close Window();
```

**Code Explanation**:

1. Open data table;
2. Create bubble plot.
3. Set X-axis variable.
4. Set Y-axis variable.
5. Use state as identifier.
6. Disable all labels.
7. Enable trail lines.
8. Enable trail bubbles.
9. Select specific rows.
10. Retrieve selected row numbers.
11. Close bubble plot window.



### Example 146
> **Summary**: Creates a bubble plot with customized scales and frame size, using data from an open JMP table.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #Customization, #DataVisualization, #InteractiveAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bp = dt << Bubble Plot(
	X( :height ),
	Y( :weight ),
	ID( :sex ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox, {Min( 1050 ), Max( 1450 ), Inc( 50 ), Minor Ticks( 0 )} ),
		Dispatch( {}, "2", ScaleBox, {Min( 100 ), Max( 109 ), Inc( 1 ), Minor Ticks( 0 )} ),
		Dispatch( {}, "Bubble Plot", FrameBox, {Frame Size( 270, 212 )} )
	)
);
dt << Add Rows( 10 );
bp << X as Sum( 1 );
bp << Close Window();
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot.
3. Set X axis: height.
4. Set Y axis: weight.
5. Set ID: sex.
6. Customize X scale.
7. Customize Y scale.
8. Set frame size.
9. Add 10 rows to table.
10. Close bubble plot window.



### Example 147
> **Summary**: Creates a bubble plot to visualize SAT Math and Verbal scores for states over time, with size proportional to the percentage of students taking the test in 2004.

<!-- Keywords: #JSLScriptingLanguage, #BubblePlot, #DataVisualization, #TimeSeriesAnalysis, #State-LevelData -->

**Code**:
```jsl
Open("data_table.jmp");
bp = Bubble Plot(
	X( :SAT Math ),
	Y( :SAT Verbal ),
	Sizes( :Name( "% Taking (2004)" ) ),
	Time( :Year ),
	ID( :State ),
	All Labels( 1 ),
	No Labels( 0 ),
	Title Position( 540, 500 ), 
);
bp << Close Window();
```

**Code Explanation**:

1. Open data table;
2. Create bubble plot.
3. Set X-axis variable.
4. Set Y-axis variable.
5. Define bubble sizes.
6. Add time variable.
7. Identify states.
8. Show all labels.
9. Enable labels.
10. Set title position.



### Example 148
> **Summary**: Creates a bubble plot to visualize SAT Math and Verbal scores by Region, with interactive filtering capabilities.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #DataFiltering, #InteractiveVisualization, #RegionalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bp = Bubble Plot( X( :SAT Math ), Y( :SAT Verbal ), ID( :Region, :State ), All Labels( 0 ) );
dt << Select Where( :Region == "Northeast" );
bp << Split;
bp << Close Window();
```

**Code Explanation**:

1. Open table.
2. Create bubble plot.
3. Set X-axis variable.
4. Set Y-axis variable.
5. Set ID variables.
6. Hide all labels.
7. Select rows where Region is Northeast.
8. Split bubble plot.
9. Close bubble plot window.



### Example 149
> **Summary**: Creates and manipulates a bubble plot with coloring, followed by the recreation of the plot without coloring, using JMP's Bubble Plot platform.

<!-- Keywords: #JMPBubblePlot, #DataVisualization, #Scripting, #JSL, #InteractivePlotting -->

**Code**:
```jsl
Open("data_table.jmp");
myBP = Bubble Plot( X( :DAY ), Y( :DIAMETER ), Coloring( :Phase ) );
myBP << Close Window;
Row State( 139 ) = Combine States( Color State( 4 ) );
Row State( 140 ) = Combine States( Color State( 4 ) );
Row State( 141 ) = Combine States( Color State( 4 ) );
Row State( 142 ) = Combine States( Color State( 4 ) );
Row State( 143 ) = Combine States( Color State( 4 ) );
Row State( 144 ) = Combine States( Color State( 4 ) );
Row State( 145 ) = Combine States( Color State( 4 ) );
Row State( 146 ) = Combine States( Color State( 4 ) );
Row State( 147 ) = Combine States( Color State( 4 ) );
Row State( 148 ) = Combine States( Color State( 4 ) );
Row State( 149 ) = Combine States( Color State( 4 ) );
Row State( 150 ) = Combine States( Color State( 4 ) );
myBP = Bubble Plot( X( :DAY ), Y( :DIAMETER ) );
myBP << Close Window;
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot.
3. Close bubble plot window.
4. Set row state for row 139.
5. Set row state for row 140.
6. Set row state for row 141.
7. Set row state for row 142.
8. Set row state for row 143.
9. Set row state for row 144.
10. Set row state for row 145.
11. Set row state for row 146.
12. Set row state for row 147.
13. Set row state for row 148.
14. Set row state for row 149.
15. Set row state for row 150.
16. Create bubble plot without coloring.
17. Close bubble plot window.



### Example 150
> **Summary**: Creates and customizes bubble plots with needle plots for high, close, and low stock prices over time.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #NeedlePlot, #DataVisualization, #FinancialAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
myBP = Bubble Plot( X( :Date ), Y( :Name( "# defects" ) ), Sizes( :Unit size ), Circle Size( 4.5 ), Filled( 0 ), All Labels( 1 ) );
myBP << Filled( 1 ) << All Labels( 0 );
dt << Select Rows( 21 );
myBP << Filled( 0 );
myBP << Close Window;
myBP = Bubble Plot(
	X( :Date ),
	Y( :Name( "# defects" ) ),
	Sizes( :Unit size ),
	SendToReport(
		Dispatch( {}, "Bubble Plot", FrameBox,
			DispatchSeg( CustomStreamSeg( 1 ), {Fill Color( {128, 128, 0} ), Text Color( {253, 250, 204} ), Font( {"", 16, 3} )} )
		)
	)
);
myBP << Close Window();
Close( dt, nosave );
dt2 = New Table( "Test",
	New Column( "Y", Values( [1, 1, 1, 2, 2, 2, 3, 3, 3] ) ),
	New Column( "X", Values( [1, 2, 3, 1, 2, 3, 1, 2, 3] ) ),
	New Column( "Z", Values( {1, 2, 3, 2, 3, 1, , 3, 1, 2} ) )
);
myBP = Bubble Plot(
	X( :X ),
	Y( :Y ),
	Sizes( :Z ),
	All Labels( 1 ),
	SendToReport( Dispatch( {}, "Bubble Plot", FrameBox, DispatchSeg( CustomStreamSeg( 1 ), {Text Color( {255, 0, 0} )} ) ) )
);
myBP << Close Window();
myBP = Bubble Plot(
	X( :X ),
	Y( :Y ),
	Sizes( :Z ),
	All Labels( 1 ),
	SendToReport(
		Dispatch( {}, "2", ScaleBox, {Scale( Linear ), Format( "Best" ), Min( 3.25 ), Max( 0.75 ), Inc( 0.5 )} ),
		Dispatch( {}, "Bubble Plot", FrameBox, DispatchSeg( CustomStreamSeg( 1 ), {Text Color( {255, 255, 0} )} ) )
	)
);
myBP << Close Window();
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot.
3. Set plot properties.
4. Toggle fill and labels.
5. Select specific rows.
6. Toggle fill again.
7. Close first bubble plot.
8. Create second bubble plot.
9. Customize appearance.
10. Close second bubble plot.
11. Close original data table.
12. Create new data table.
13. Create third bubble plot.
14. Customize text color.
15. Close third bubble plot.
16. Create fourth bubble plot.
17. Customize axes and text color.
18. Close fourth bubble plot.



### Example 151
> **Summary**: Creates and customizes bubble plots to visualize data from a sample dataset, utilizing various features such as X-axis, Y-axis, sizes, coloring, and circle size.

<!-- Keywords: #JSLScriptingLanguage, #BubblePlot, #DataVisualization, #Customization, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
myBP = Bubble Plot(
	X( :OZONE ),
	Y( :city ),
	Sizes( :POP ),
	Coloring( :Region ),
	ID( :State ),
	Circle Size( 2.2 ),
	All Labels( 1 ),
	SendToReport( Dispatch( {}, "Bubble Plot", FrameBox, Frame Size( 360, 774 ) ) )
);
myBP << Filled( 0 );
myBP << Close Window();
myBP = Bubble Plot(
	X( :Region ),
	Y( :NO ),
	ID( :city ),
	Circle Size( 0.001 ),
	Filled( 0 ),
	All Labels( 1 ),
	SendToReport( Dispatch( {}, "Bubble Plot", FrameBox, Frame Size( 585, 550 ) ) )
);
myBP << Close Window();
Close( dt, nosave );
dt2 = New Table( "bubble",
	New Column( "name", character, values( {"Robert", "Robert"} ) ),
	New Column( "dollars", values( [73273, 53273] ) )
);
myBP = bubble plot( Y( :dollars ), X( :name ), Circle Size( 2175 ), All Labels( 1 ) );
myBP << Close Window();
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot with OZONE.
3. Set Y axis to city.
4. Use POP for sizes.
5. Color by Region.
6. Identify by State.
7. Set circle size.
8. Show all labels.
9. Resize frame.
10. Disable fill.
11. Close bubble plot window.
12. Create another bubble plot with Region.
13. Set Y axis to NO.
14. Identify by city.
15. Set small circle size.
16. Disable fill.
17. Show all labels.
18. Resize frame.
19. Close bubble plot window.
20. Close original data table without saving.
21. Create new table named bubble.
22. Add name column with values.
23. Add dollars column with values.
24. Create bubble plot with dollars.
25. Set X axis to name.
26. Set circle size.
27. Show all labels.
28. Close bubble plot window.



### Example 152
> **Summary**: Creates a bubble plot with combined California bubbles, adding text and line annotations to highlight specific details.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #DataVisualization, #Annotation, #InteractiveReporting -->

**Code**:
```jsl
dt4 = Open("data_table.jmp");
myBP = Bubble Plot(
	X( :X ),
	Y( :Y ),
	Sizes( :Max deg. F Jan ),
	Coloring( :Region ),
	ID( :State, :city ),
	All Labels( 0 ),
	Size as Sum( 0 )
);
myBP << Split All;
dt4 << select where( :State == "CA" );
myBP << Combine;
myBP << SendToReport(
	Dispatch( {}, "Bubble Plot", FrameBox,
		{Add Text Annotation( Text( "CA bubbles should be combined" ), Text Box( {10, 204, 159, 227} ) ),
		Add Line Annotation( Line( {75, 41}, {30, 129} ), Color( "Yellow" ) )}
	)
);
myBP << Close Window();
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot.
3. Set X axis variable.
4. Set Y axis variable.
5. Define bubble sizes.
6. Color bubbles by region.
7. Use state and city for IDs.
8. Disable all labels.
9. Sum bubble sizes.
10. Split all bubbles.
11. Select California states.
12. Combine selected bubbles.
13. Add text annotation.
14. Add line annotation.
15. Close bubble plot window.



### Example 153
> **Summary**: Creates and customizes bubble plots with varying sizes, circle sizes, and labels in JMP.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #DataVisualization, #Customization, #InteractiveGraphics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
myBP = Bubble Plot( X( :DAY ), Y( :DIAMETER ), Sizes( :Phase ) );
myBP << Close Window();
myBP = Bubble Plot( X( :DAY ), Y( :DIAMETER ), Circle Size( 0.0375 ) );
myBP << Close Window();
Close( dt, nosave );
dt2 = New Table( "Test",
	New Column( "X", Values( [1, 2, 3] ) ),
	New Column( "Y", Values( [1, 2, 3] ) ),
	New Column( "Size", Values( [-1, 0, 1] ) )
);
myBP = Bubble Plot( X( :X ), Y( :Y ), Sizes( :Size ), Circle Size( 0.8 ), All Labels( 1 ) );
myBP << Close Window();
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot with sizes.
3. Close bubble plot window.
4. Create bubble plot with fixed size.
5. Close bubble plot window.
6. Close data table without saving.
7. Create new table with columns.
8. Create bubble plot with all labels.
9. Close bubble plot window.



### Example 154
> **Summary**: Creates and customizes a bubble plot with needle plots for high, close, and low stock prices of DJI over time.

<!-- Keywords: #JSLScriptingLanguage, #BubblePlot, #NeedlePlot, #DataVisualization, #FinancialAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
myBP = Bubble Plot( X( :Date ), Y( :Name( "# defects" ) ), Sizes( :Unit size ), Circle Size( 4.5 ), Filled( 0 ), All Labels( 1 ) );
myBP << Filled( 1 ) << All Labels( 0 );
dt << Select Rows( 21 );
myBP << Filled( 0 );
myBP << Close Window;
myBP = Bubble Plot(
	X( :Date ),
	Y( :Name( "# defects" ) ),
	Sizes( :Unit size ),
	SendToReport(
		Dispatch( {}, "Bubble Plot", FrameBox,
			DispatchSeg( CustomStreamSeg( 1 ), {Fill Color( {128, 128, 0} ), Text Color( {253, 250, 204} ), Font( {"", 16, 3} )} )
		)
	)
);
myBP << Close Window();
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot.
3. Customize bubble plot appearance.
4. Select specific rows.
5. Toggle fill setting.
6. Close first bubble plot.
7. Create second bubble plot.
8. Customize appearance further.
9. Close second bubble plot.



### Example 155
> **Summary**: Creates two bubble plots to visualize ozone levels, city populations, and regional information, with adjustable circle sizes and labels.

<!-- Keywords: #JSLScriptingLanguage, #BubblePlot, #DataVisualization, #InteractiveGraphics, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
myBP = Bubble Plot(
	X( :OZONE ),
	Y( :city ),
	Sizes( :POP ),
	Coloring( :Region ),
	ID( :State ),
	Circle Size( 2.2 ),
	All Labels( 1 ),
	SendToReport( Dispatch( {}, "Bubble Plot", FrameBox, Frame Size( 360, 774 ) ) )
);
myBP << Filled( 0 );
myBP << Close Window();
myBP = Bubble Plot(
	X( :Region ),
	Y( :NO ),
	ID( :city ),
	Circle Size( 0.001 ),
	Filled( 0 ),
	All Labels( 1 ),
	SendToReport( Dispatch( {}, "Bubble Plot", FrameBox, Frame Size( 585, 550 ) ) )
);
myBP << Close Window();
```

**Code Explanation**:

1. Open data table;
2. Create bubble plot.
3. Set X-axis to OZONE.
4. Set Y-axis to city.
5. Set bubble sizes to POP.
6. Color bubbles by Region.
7. Identify bubbles by State.
8. Adjust circle size.
9. Display all labels.
10. Resize frame.
11. Disable filling.
12. Close window.
13. Create second bubble plot.
14. Set X-axis to Region.
15. Set Y-axis to NO.
16. Identify bubbles by city.
17. Adjust circle size.
18. Disable filling.
19. Display all labels.
20. Resize frame.
21. Close window.



### Example 156
> **Summary**: Creates and displays two bubble plots with varying size specifications, showcasing data visualization capabilities in JMP.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #DataVisualization, #SizeSpecifications, #InteractiveGraphics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
myBP = Bubble Plot( X( :DAY ), Y( :DIAMETER ), Sizes( :Phase ) );
myBP << Close Window();
myBP = Bubble Plot( X( :DAY ), Y( :DIAMETER ), Circle Size( 0.0375 ) );
myBP << Close Window();
```

**Code Explanation**:

1. Open data table;
2. Create bubble plot with sizes.
3. Close first bubble plot window.
4. Create second bubble plot without sizes.
5. Close second bubble plot window.



### Example 157
> **Summary**: Creates a bubble plot with needle plots for high, close, and low stock prices of DJI over time, utilizing the SendToReport function to customize report settings.

<!-- Keywords: #JSLScriptingLanguage, #BubblePlot, #NeedlePlots, #StockPrices, #DataVisualization -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Bubble Plot(
	X( :Longitude ),
	Y( :Latitude ),
	Sizes( :Name( "Wind (Knots)" ) ),
	Time( :Date ),
	Coloring( :Landfall in USA ),
	ID( :Name and ID ),
	Speed( 220 ),
	All Labels( 0 ),
	No Labels( 0 ),
	Title Position( -88.679, 59.73 ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox, {Min( -110 ), Max( 10 ), Inc( 10 ), Minor Ticks( 0 )} ),
		Dispatch( {}, "2", ScaleBox, {Min( 0 ), Max( 70 ), Inc( 10 ), Minor Ticks( 0 )} ),
		Dispatch( {}, "Bubble Plot", FrameBox,
			{Background Map( Images( "NASA server" ) ), Grid Line Order( 2 ), Reference Line Order( 3 )}
		)
	)
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data_table data
2. Create Bubble Plot object.
3. Set X-axis to Longitude.
4. Set Y-axis to Latitude.
5. Define bubble sizes by Wind (Knots).
6. Add Time variable for animation.
7. Color bubbles by Landfall in USA.
8. Use Name and ID for labels.
9. Set animation speed to 220.
10. Configure report settings.



### Example 158
> **Summary**: Creates a bubble plot with needle plots for high, close, and low stock prices of DJI over time, using Longitude as X-axis, Latitude as Y-axis, and Wind (Knots) as bubble sizes.

<!-- Keywords: #JSL, #BubblePlot, #NeedlePlot, #StockPrices, #TimeSeries -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Bubble Plot(
	X( :Longitude ),
	Y( :Latitude ),
	Sizes( :Name( "Wind (Knots)" ) ),
	Time( :Date ),
	Coloring( :Landfall in USA ),
	ID( :Name and ID ),
	Speed( 220 ),
	All Labels( 0 ),
	No Labels( 0 ),
	Title Position( -88.679, 59.73 ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox, {Min( -110 ), Max( 10 ), Inc( 10 ), Minor Ticks( 0 )} ),
		Dispatch( {}, "2", ScaleBox, {Min( 0 ), Max( 70 ), Inc( 10 ), Minor Ticks( 0 )} ),
		Dispatch( {}, "Bubble Plot", FrameBox,
			{Background Map( Images( "Simple Earth" ), Boundaries( "World Countries" ) ), Grid Line Order( 3 ), Reference Line Order( 4 ),
			DispatchSeg(
				Shape Seg( 1 ),
				{Line Color( {204, 204, 204} ), Fill Color( "None" ), Missing shape fill( 2147483647 ), Missing value fill( -14540253 )}
			)}
		)
	)
);
rpt = obj << report;
```

**Code Explanation**:

1. Open table.
2. Create Bubble Plot.
3. Set X-axis to Longitude.
4. Set Y-axis to Latitude.
5. Set bubble sizes to Wind (Knots).
6. Set time variable to Date.
7. Color bubbles by Landfall in USA.
8. Use Name and ID for labels.
9. Set speed to 220.
10. Configure report settings.



### Example 159
> **Summary**: Creates a bubble plot with needle plots for high, close, and low stock prices of DJI over time, using Longitude as X-axis, Latitude as Y-axis, and Wind speed to size bubbles.

<!-- Keywords: #JMP, #BubblePlot, #NeedlePlot, #StockPrices, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Bubble Plot(
	X( :Longitude ),
	Y( :Latitude ),
	Sizes( :Name( "Wind (Knots)" ) ),
	Time( :Date ),
	Coloring( :Landfall in USA ),
	ID( :Name and ID ),
	Speed( 220 ),
	All Labels( 0 ),
	No Labels( 0 ),
	Title Position( -88.679, 59.73 ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox, {Min( -110 ), Max( 10 ), Inc( 10 ), Minor Ticks( 0 )} ),
		Dispatch( {}, "2", ScaleBox, {Min( 0 ), Max( 70 ), Inc( 10 ), Minor Ticks( 0 )} ),
		Dispatch( {}, "Bubble Plot", FrameBox,
			{Background Map( Images( "Detailed Earth" ), Boundaries( "US States" ) ), Grid Line Order( 3 ), Reference Line Order( 4 ),
			DispatchSeg(
				Shape Seg( 1 ),
				{Line Color( {204, 204, 204} ), Fill Color( "None" ), Missing shape fill( 2147483647 ), Missing value fill( -14540253 )}
			)}
		)
	)
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create Bubble Plot object.
3. Set X axis to Longitude.
4. Set Y axis to Latitude.
5. Define bubble sizes by Wind speed.
6. Use Date for animation.
7. Color bubbles by Landfall status.
8. Identify bubbles by Name and ID.
9. Set animation speed to 220.
10. Customize report appearance.



### Example 160
> **Summary**: Creates a bubble plot with background map, utilizing the Open function to load data and the Bubble Plot function to generate the visualization.

<!-- Keywords: #JSLScriptingLanguage, #BubblePlot, #BackgroundMap, #DataVisualization, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Bubble Plot( Y( :height ), X( :weight ), coloring( :sex ), Bubble Size( 30 ) );
rpt = obj << report;
Report( obj )[FrameBox( 1 )] << Background Map( Images( "Simple Earth" ) );
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot object.
3. Assign plot to variable.
4. Generate report object.
5. Access first frame box.
6. Add background map.
7. Use "Simple Earth" image.



## Bubble Plot using New Window
### Example 1
> **Summary**: Visualizes flu cases by region using a bubble plot with filtering capabilities, allowing for interactive exploration of the data.

<!-- Keywords: #JSLScriptingLanguage, #BubblePlot, #DataFiltering, #InteractiveVisualization, #JMP -->

**Code**:
```jsl
// Region Bubble with Filter
// Open data table
dt = Open("data_table.jmp");
// Region Bubble with Filter
New Window( "SAT Bubble Plot with Filter",
	H List Box(
		Current Data Table() <<
		Data Filter(
			Add Filter(
				columns( :Region ),
				Display(
					:Region,
					Size( 204, 148 ),
					List Display
				)
			),
			Mode(
				Show( 1 ),
				Include( 1 )
			)
		),
		Bubble Plot(
			X( :Date ),
			Y( :Flu Cases ),
			Sizes(
				:
				"Population (July 2009)"n
			),
			Time( :Date ),
			Coloring( :Region ),
			ID( :Region, :State ),
			Speed( 33.08 ),
			Time Index(
				208.199999999992
			),
			Trail Lines( 1 ),
			All Labels( 0 ),
			Show Roles( 1 ),
			SendToReport(
				Dispatch( {}, "1",
					ScaleBox,
					{Min( 3125000000 ),
					Max( 3350000000 ),
					Interval( "Month" ),
					Inc(
						19.0128526884174
					), Minor Ticks( 1 )}
				),
				Dispatch( {}, "2",
					ScaleBox,
					{Max( 11000 ),
					Minor Ticks( 0 )}
				),
				Dispatch( {},
					"Bubble Plot",
					FrameBox,
					Frame Size(
						480, 302
					)
				)
			)
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create new window titled "SAT Bubble Plot with Filter".
3. Add horizontal list box.
4. Apply data filter on Region column.
5. Set filter display size and mode.
6. Create bubble plot.
7. Set X axis to Date.
8. Set Y axis to Flu Cases.
9. Define bubble sizes based on Population.
10. Configure plot settings including time, coloring, ID, speed, and labels.



### Example 2
> **Summary**: Visualizes flu cases by state over time, utilizing a bubble plot with interactive filtering and coloring by region.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #DataFiltering, #InteractiveVisualization, #GeographicAnalysis -->

**Code**:
```jsl
// State Bubble with Filter
// Open data table
dt = Open("data_table.jmp");
// State Bubble with Filter
New Window( "SAT Bubble Plot with Filter",
	H List Box(
		Current Data Table() <<
		Data Filter(
			Add Filter(
				columns( :State ),
				Display(
					:State,
					Size( 221, 274 ),
					List Display
				)
			),
			Mode(
				Show( 1 ),
				Include( 1 )
			)
		),
		Bubble Plot(
			X( :Date ),
			Y( :Flu Cases ),
			Sizes(
				:
				"Population (July 2009)"n
			),
			Time( :Date ),
			Coloring( :Region ),
			ID( :State ),
			Speed( 54.09 ),
			Time Index(
				32.7005249999998
			),
			Trail Lines( 1 ),
			All Labels( 0 ),
			Show Roles( 1 ),
			SendToReport(
				Dispatch( {}, "1",
					ScaleBox,
					{Min( 3125000000 ),
					Max( 3350000000 ),
					Interval( "Month" ),
					Inc(
						19.0128526884174
					), Minor Ticks( 1 )}
				),
				Dispatch( {}, "2",
					ScaleBox,
					{Max( 20000 ),
					Inc( 5000 )}
				),
				Dispatch( {},
					"Bubble Plot",
					FrameBox,
					Frame Size(
						480, 317
					)
				)
			)
		)
	)
);
```

**Code Explanation**:

1. Open table.
2. Create new window.
3. Add horizontal list box.
4. Add data filter.
5. Set filter for State column.
6. Configure filter display.
7. Create bubble plot.
8. Set X axis to Date.
9. Set Y axis to Flu Cases.
10. Set bubble sizes.



### Example 3
> **Summary**: Creates a new window with a data filter context box, graph builder, and bubble plot platform to visualize relationships between age, weight, and height.

<!-- Keywords: #JMPScriptingLanguage, #DataFilter, #GraphBuilder, #BubblePlot, #Visualization -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
New Window( "Selection Filter",
	Data Filter Context Box(
		H List Box(
			Data Filter Source Box(
				Graph Builder(
					Size( 208, 207 ),
					Show Control Panel( 0 ),
					Show Legend( 0 ),
					Variables( X( :age ) ),
					Elements( Bar( X, Legend( 3 ) ) ),
					SendToReport( Dispatch( {}, "Graph Builder", OutlineBox, {Set Title( "Filter" )} ) )
				)
			),
			( Current Data Table(), Bubble Plot( X( :weight ), Y( :height ), Sizes( :age ), Title Position( 0, 0 ) ) )
		)
	)
);
```

**Code Explanation**:

1. Set default names scope.
2. Open data table.
3. Create new window.
4. Add data filter context box.
5. Create horizontal list box.
6. Add data filter source box.
7. Create graph builder.
8. Set graph size.
9. Hide control panel.
10. Hide legend.
11. Set X variable.
12. Add bar element.
13. Set graph title.
14. Add bubble plot platform.
15. Set X, Y, and size variables.
16. Set title position.



### Example 4
> **Summary**: Creates a shared filter window with two local data filters, displaying a bubble plot and tabulate for analyzing salary and taking percentage data.

<!-- Keywords: #JMPScriptingLanguage, #DataFilter, #BubblePlot, #Tabulate, #LocalDataFilter -->

**Code**:
```jsl
dt = Open("data_table.jmp");
New Window( "shared filter",
	Data Filter Context Box(
		H List Box(
			dt << Data Filter(
				Local,
				Add Filter( columns( :"Salary (1997)"n ), Where( :"Salary (1997)"n >= 25.994 & :"Salary (1997)"n <= 38.449 ) )
			),
			Data Filter Context Box(
				H List Box(
					dt << Data Filter(
						Local,
						Add Filter( columns( :"% Taking (1997)"n ), Where( :"% Taking (1997)"n >= 0.4525 & :"% Taking (1997)"n <= 0.81 ) )
					),
					Bubble Plot(
						X( :SAT Math ),
						Y( :SAT Verbal ),
						Sizes( :"% Taking (2004)"n ),
						Time( :Year ),
						ID( :Region, :State ),
						Label( "All" )
					),
					Tabulate(
						Show Control Panel( 0 ),
						Add Table( Row Table( Analysis Columns( :"% Taking (2004)"n, :"% Taking (1997)"n ), Grouping Columns( :Region ) ) )
					)
				)
			)
		)
	)
);
```

**Code Explanation**:

1. Open table.
2. Create new window.
3. Add data filter context box.
4. Create horizontal list box.
5. Add local data filter.
6. Set salary filter.
7. Create another horizontal list box.
8. Add local data filter.
9. Set taking percentage filter.
10. Display bubble plot and tabulate.



### Example 5
> **Summary**: Creates a new window with data filter context box, bubble plots for weight vs height and age, and retrieves row states from an open data table.

<!-- Keywords: #JSLScriptingLanguage, #DataFilterContextBox, #BubblePlot, #RowStates, #NewWindow -->

**Code**:
```jsl
dt = Open("data_table.jmp");
nw = New Window( "Shared Local Filter",
	Data Filter Context Box(
		H List Box(
			Current Data Table() << Data Filter( Local, Add Filter( columns( :sex ), Where( :sex == "F" ) ) ),
			( Current Data Table(), Bubble Plot( X( :weight ), Y( :height ), Sizes( :age ), Title Position( 0, 0 ) ) ),
			( Current Data Table(), Bubble Plot( X( :weight ), Y( :age ), Sizes( :height ), Title Position( 0, 0 ) ) )
		)
	)
);
rs = dt << get row states;
nw << close window;
```

**Code Explanation**:

1. Open data table.
2. Create new window.
3. Add data filter context box.
4. Define horizontal list box.
5. Apply local filter on sex.
6. Create bubble plot for weight vs height.
7. Create bubble plot for weight vs age.
8. Retrieve row states.
9. Close the new window.



### Example 6
> **Summary**: Creates a new window with a data filter context box, applying local filters and displaying a bubble plot platform to visualize age distribution by sex.

<!-- Keywords: #JMPScriptingLanguage, #DataFilterContextBox, #BubblePlot, #LocalDataFilter, #ByGroup -->

**Code**:
```jsl
dt = Open("data_table.jmp");
win = New Window( "Shared Local Filter",
	Data Filter Context Box(
		H List Box(
			dt << Data Filter( Local, <<Conditional( 1 ), Add Filter( Columns( :Age ), Where( :Age == 12 ) ) ),
			( dt, Bubble Plot( X( :weight ), Y( :height ), Sizes( :age ), By( :sex ), Title Position( 0, 0 ) ) )
		)
	)
);
text1 = win[Box( 1 )][Text Box( 1 )] << Get Text;
```

**Code Explanation**:

1. Open table.
2. Create new window.
3. Add data filter context box.
4. Define horizontal list box.
5. Apply local data filter.
6. Set filter condition.
7. Add age filter.
8. Create bubble plot platform.
9. Set X axis.
10. Set Y axis.
11. Set sizes.
12. Group by sex.
13. Set title position.
14. Retrieve text from text box.



### Example 7
> **Summary**: Creates filter windows for data tables, updating excluded row counts and displaying them in text boxes.

<!-- Keywords: #JSLScriptingLanguage, #DataFiltering, #RowStateHandler, #TextDisplay, #JMPScript -->

**Code**:
```jsl
dt = Open("data_table.jmp");
New Window( "filter test",
	Data Filter Context Box(
		V List Box(
			t = Text Box( "0 Rows Excluded" ),
			Distribution( Continuous Distribution( Column( :weight ) ), Nominal Distribution( Column( :age ) ) )
		)
	)
);
updatetext = Function( {},
	rs = t << Get Row States( dt );
	n = 0;
	For( ii = 1, ii <= N Rows( rs ), ii++,
		If( Excluded( As Row State( rs[ii] ) ),
			n
			++)
	);
	t << Set Text( Char( n ) || " Rows Excluded" );
);
rsupdate = Function( {a},
	If( Is Matrix( a ),
		updatetext()
	)
);
rsh = t << Make Row State Handler( dt, rsupdate );
updatetext();
dt2 = Open("data_table.jmp");
New Window( "filter test",
	Data Filter Context Box(
		V List Box(
			t2 = Text Box( "0 Rows Excluded" ),
			Bubble Plot( X( :Name( "Portion 0-19" ) ), Y( :Name( "Portion60+" ) ), Sizes( :Pop ), Time( :Year ), ID( :Region, :Country ) )
		)
	)
);
updatetext2 = Function( {},
	rs = t2 << Get Row States( dt2 );
	n = 0;
	For( ii = 1, ii <= N Rows( rs ), ii++,
		If( Excluded( As Row State( rs[ii] ) ),
			n
			++)
	);
	t2 << Set Text( Char( n ) || " Rows Excluded" );
);
rsupdate2 = Function( {a},
	If( Is Matrix( a ),
		updatetext2()
	)
);
rsh2 = t2 << Make Row State Handler( dt2, rsupdate2 );
updatetext2();
dt << Select Rows( [1, 2, 3, 4] );
dt << Exclude;
rows = dt << Get as Matrix( {1, 2} );
dt2 << Select Rows( [1, 2] );
dt2 << Exclude;
rows2 = dt2 << data view;
newtable = rows2 << Get as matrix( {2} );
```

**Code Explanation**:

1. Open data table;
2. Create filter window for data_table.
3. Initialize excluded row count display.
4. Define update function for excluded rows.
5. Attach update function to row state changes.
6. Update excluded row count display.
7. Open data table;
8. Create filter window for PopAgeGroup.
9. Initialize excluded row count display.
10. Define update function for excluded rows.



### Example 8
> **Summary**: Creates a bubble plot with multiple variables, including X-axis as negative weight, Y-axis as absolute height, and sizes as sum of age, while also configuring color levels, axis scales, and frame size.

<!-- Keywords: #JSL, #BubblePlot, #DataVisualization, #JMPScriptingLanguage, #Customization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
New Window( "data_table - Bubble Plot of Abs[height] by -weight",
	Bubble Plot(
		X( Transform Column( "-weight", Formula( -:weight ) ) ),
		Y( Transform Column( "Abs[height]", Formula( Abs( :height ) ) ) ),
		Sizes( Transform Column( "Sum[age]", Formula( Col Sum( :age ) ) ) ),
		Coloring( Transform Column( "Row", Formula( Row() ) ) ),
		ID( Transform Column( "First[name]", Character, Formula( Word( 1, :name ) ) ) ),
		Legend( 0 ),
		Color Levels( [1 10.75 20.5 30.25 40] ),
		Title Position( 0, 0 ),
		SendToReport(
			Dispatch( {}, "1", ScaleBox, {Min( -180 ), Max( -60 ), Inc( 20 ), Minor Ticks( 1 )} ),
			Dispatch( {}, "2", ScaleBox, {Min( 50 ), Max( 70 ), Inc( 5 ), Minor Ticks( 1 )} ),
			Dispatch( {}, "Bubble Plot", FrameBox, {Frame Size( 482, 360 )} )
		)
	)
) << Move Window( 152, 91 ) << Set Window Icon( "BubblePlot" );
New Window( "data_table - Bubble Plot of Abs[height] by -weight 2",
	Bubble Plot(
		X( Transform Column( "-weight", Formula( -:weight ) ) ),
		Y( Transform Column( "Abs[height]", Formula( Abs( :height ) ) ) ),
		Sizes( Transform Column( "Sum[age]", Formula( Col Sum( :age ) ) ) ),
		Coloring( Transform Column( "Row", Formula( Row() ) ) ),
		ID( Transform Column( "First[name]", Character, Formula( Word( 1, :name ) ) ) ),
		Legend( 0 ),
		Color Levels( [1 10.75 20.5 30.25 40] ),
		Title Position( 0, 0 ),
		SendToReport(
			Dispatch( {}, "1", ScaleBox, {Min( -180 ), Max( -60 ), Inc( 20 ), Minor Ticks( 1 )} ),
			Dispatch( {}, "2", ScaleBox, {Min( 50 ), Max( 70 ), Inc( 5 ), Minor Ticks( 1 )} )
		)
	)
) << Move Window( 58, 58 ) << Set Window Icon( "BubblePlot" );
```

**Code Explanation**:

1. Open data table.
2. Create new window for bubble plot.
3. Define X-axis as negative weight.
4. Define Y-axis as absolute height.
5. Define sizes as sum of age.
6. Define coloring by row number.
7. Define ID as first name.
8. Hide legend.
9. Set color levels.
10. Adjust title position.
11. Set axis scales and frame size.
12. Move window to position (152, 91).
13. Set window icon.
14. Repeat steps 2-13 for second bubble plot.
15. Move second window to position (58, 58).
16. Set second window icon.



## Bubble Plot using Column
> **Summary**: Creates a bubble plot to visualize relationships between weight, height, and sex in a dataset, utilizing value labels for categorical data.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #ValueLabels, #DataVisualization, #GraphBuilder -->

**Code**:
```jsl
Open("data_table.jmp");
Column( "sex" ) << ValueLabels( {"M", "F"}, {"Male", "Female"} );
Column( "sex" ) << UseValueLabels;
Bubble Plot( X( :weight ), Y( :height ), ID( :sex ), Label( "All" ), Title Position( 0, 0 ), Label Offset( {0, 23, -81}, {1, -89, 70} ) );
```

**Code Explanation**:

1. Open data table;
2. Set value labels for "sex".
3. Enable value labels for "sex".
4. Create bubble plot.
5. Set X axis to "weight".
6. Set Y axis to "height".
7. Use "sex" for IDs.
8. Label all points.
9. Set title position.
10. Set label offsets.



## Bubble Plot using Row State
> **Summary**: Creates a bubble plot from a data table, setting row states for specific rows and assigning color states to selected rows.

<!-- Keywords: #JSLScriptingLanguage, #BubblePlot, #DataVisualization, #RowState, #ColorState -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Row State( 139 ) = Combine States( Color State( 4 ) );
Row State( 140 ) = Combine States( Color State( 4 ) );
Row State( 141 ) = Combine States( Color State( 4 ) );
Row State( 142 ) = Combine States( Color State( 4 ) );
Row State( 143 ) = Combine States( Color State( 4 ) );
Row State( 144 ) = Combine States( Color State( 4 ) );
Row State( 145 ) = Combine States( Color State( 4 ) );
Row State( 146 ) = Combine States( Color State( 4 ) );
Row State( 147 ) = Combine States( Color State( 4 ) );
Row State( 148 ) = Combine States( Color State( 4 ) );
Row State( 149 ) = Combine States( Color State( 4 ) );
Row State( 150 ) = Combine States( Color State( 4 ) );
myBP = Bubble Plot( X( :DAY ), Y( :DIAMETER ) );
```

**Code Explanation**:

1. Open data table.
2. Set row state for specific rows.
3. Assign color state to selected rows.
4. Create bubble plot.
5. Set X-axis variable.
6. Set Y-axis variable.



## Bubble Plot using Select Where
### Example 1
> **Summary**: Creates a bubble plot to visualize data for 1962, hiding selected rows and setting X-axis, Y-axis, and bubble sizes.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #DataVisualization, #Filtering, #InteractiveAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Where( :year == 1962 );
dt << Hide( 1 );
bp = Bubble Plot( X( :Name( "Portion 0-19" ) ), Y( :Name( "Portion60+" ) ), Sizes( :Pop ), Time( :Year ), ID( :Region, :Country ) );
```

**Code Explanation**:

1. Open data table.
2. Select rows where year is 1962.
3. Hide selected rows.
4. Create bubble plot.
5. Set X-axis variable.
6. Set Y-axis variable.
7. Define bubble sizes.
8. Add time variable.
9. Include ID variables.



### Example 2
> **Summary**: Creates a bubble plot to visualize data from 1962, hiding selected rows and setting various variables for X-axis, Y-axis, sizes, time, and ID.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #DataVisualization, #TimeSeriesAnalysis, #InteractiveGraphics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Where( :year == 1962 );
dt << Hide( 1 );
bp = Bubble Plot( X( :Name( "Portion 0-19" ) ), Y( :Name( "Portion60+" ) ), Sizes( :Pop ), Time( :Year ), ID( :Region, :Country ) );
bp << time index( 3 );
```

**Code Explanation**:

1. Open data table.
2. Select rows where year is 1962.
3. Hide selected rows.
4. Create bubble plot.
5. Set X-axis variable.
6. Set Y-axis variable.
7. Set sizes variable.
8. Set time variable.
9. Set ID variables.
10. Set time index to 3.



### Example 3
> **Summary**: Creates a bubble plot to visualize data from 1962, with interactive features for filtering and grouping by region and country.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #DataVisualization, #InteractiveAnalysis, #TimeSeries -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Where( :year == 1962 );
dt << Hide( 1 );
bp = Bubble Plot( X( :Name( "Portion 0-19" ) ), Y( :Name( "Portion60+" ) ), Sizes( :Pop ), Time( :Year ), ID( :Region, :Country ) );
bp << time index( 3 );
dt << Hide( 0 );
```

**Code Explanation**:

1. Open data table.
2. Select rows where year is 1962.
3. Hide selected rows.
4. Create bubble plot.
5. Set X axis variable.
6. Set Y axis variable.
7. Set size variable.
8. Set time variable.
9. Set ID variables.
10. Show all hidden rows.



### Example 4
> **Summary**: Creates a bubble plot from a data table, filtering rows by year and excluding specific values.

<!-- Keywords: #JSLScriptingLanguage, #BubblePlot, #DataFiltering, #InteractiveVisualization, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Where( :year == 1962 );
dt << Exclude( 1 );
bp = Bubble Plot( X( :Name( "Portion 0-19" ) ), Y( :Name( "Portion60+" ) ), Sizes( :Pop ), Time( :Year ), ID( :Region, :Country ) );
```

**Code Explanation**:

1. Open data table.
2. Select rows where year is 1962.
3. Exclude selected rows.
4. Create bubble plot.
5. Set X-axis variable.
6. Set Y-axis variable.
7. Set sizes variable.
8. Set time variable.
9. Set ID variables.
10. Display bubble plot.



### Example 5
> **Summary**: Creates a bubble plot to visualize data from 1962, utilizing the Bubble Plot platform in JMP.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #DataVisualization, #TimeSeriesAnalysis, #InteractiveGraphics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Where( :year == 1962 );
dt << Exclude( 1 );
bp = Bubble Plot( X( :Name( "Portion 0-19" ) ), Y( :Name( "Portion60+" ) ), Sizes( :Pop ), Time( :Year ), ID( :Region, :Country ) );
bp << time index( 3 );
```

**Code Explanation**:

1. Open data table.
2. Select rows where year is 1962.
3. Exclude selected rows.
4. Create bubble plot.
5. Set X axis variable.
6. Set Y axis variable.
7. Set sizes variable.
8. Set time variable.
9. Set ID variables.
10. Set time index to 3.



### Example 6
> **Summary**: Creates a bubble plot to visualize population data for specific countries, with adjustable label offsets.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #DataVisualization, #CountryAnalysis, #LabelOffset -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Where( :Country == 1125 | :Country == 4120 );
bp = Bubble Plot(
	X( :Name( "Portion 0-19" ) ),
	Y( :Name( "Portion60+" ) ),
	Sizes( :Pop ),
	ID( :Country ),
	Label Offset( {0, -16, -207}, {76, 110, 16}, {2222, 25, 25} )
);
```

**Code Explanation**:

1. Open data table.
2. Select specific countries.
3. Create bubble plot.
4. Set X-axis variable.
5. Set Y-axis variable.
6. Define bubble sizes.
7. Identify country bubbles.
8. Adjust label offsets.



### Example 7
> **Summary**: Creates a bubble plot to visualize population data for specific countries, with adjustable label offsets.

<!-- Keywords: #JSLScriptingLanguage, #BubblePlot, #DataVisualization, #CountrySelection, #LabelOffset -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Where( :Country == 1125 | :Country == 4120 );
bp = Bubble Plot(
	X( :Name( "Portion 0-19" ) ),
	Y( :Name( "Portion60+" ) ),
	Sizes( :Pop ),
	ID( :Country ),
	Label Offset( {0}, {76, 110, 16}, {2222, 25, 25} )
);
```

**Code Explanation**:

1. Open data table.
2. Select specific countries.
3. Create bubble plot.
4. Set X-axis variable.
5. Set Y-axis variable.
6. Define bubble sizes.
7. Assign country IDs.
8. Adjust label offsets.



### Example 8
> **Summary**: Creates a bubble plot to visualize male records from a data table, with height on the X-axis and weight on the Y-axis.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #DataVisualization, #SelectWhere, #BubbleChart -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Where( :sex == "M" );
bp_id = Bubble Plot(
	X( :height ),
	Y( :weight ),
	Time( :age ),
	Coloring( :sex ),
	ID( :sex ),
	Time Index( 6 ),
	Filled( 0 ),
	Trail Bubbles( 1 ),
	Trail Lines( 1 )
);
```

**Code Explanation**:

1. Open data table.
2. Select male records.
3. Create bubble plot.
4. Set X axis to height.
5. Set Y axis to weight.
6. Set time variable to age.
7. Color bubbles by sex.
8. Use sex for bubble IDs.
9. Set time index to 6.
10. Disable filled bubbles.



### Example 9
> **Summary**: Creates a bubble plot to visualize male records from a data table, with height on the X-axis, weight on the Y-axis, and age as the time variable, colored by sex.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #DataVisualization, #Filtering, #GraphicalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Where( :sex == "M" );
bp_no_id = Bubble Plot( X( :height ), Y( :weight ), Time( :age ), Coloring( :sex ), Time Index( 6 ), Filled( 0 ), );
```

**Code Explanation**:

1. Open data table.
2. Select male records.
3. Create bubble plot.
4. Set X-axis to height.
5. Set Y-axis to weight.
6. Set time variable to age.
7. Color by sex.
8. Set time index to 6.
9. Disable filled bubbles.



### Example 10
> **Summary**: Creates a bubble plot to visualize population data by region and country, with X-axis set to Portion 0-19 and Y-axis to Portion60+, using JMP's Graph Builder platform.

<!-- Keywords: #JMP, #GraphBuilder, #BubblePlot, #DataVisualization, #PopulationAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Where( :Region == "Europe" );
bp = Bubble Plot(
	X( :Name( "Portion 0-19" ) ),
	Y( :Name( "Portion60+" ) ),
	Sizes( :Pop ),
	Time( :Year ),
	ID( :Region, :Country ),
	All Labels( 0 ),
	No Labels( 0 ),
	Title Position( 0.77, 0.0865 ),
	Split( "Asia" ),
	Split( "Europe" ), 
);
```

**Code Explanation**:

1. Open data table.
2. Select rows where Region is Europe.
3. Create bubble plot.
4. Set X axis to Portion 0-19.
5. Set Y axis to Portion60+.
6. Set sizes by population.
7. Set time variable to Year.
8. Use Region and Country for IDs.
9. Disable all labels.
10. Disable no labels.
11. Set title position.
12. Split plot by Asia.
13. Split plot by Europe.



### Example 11
> **Summary**: Creates a bubble plot to visualize population data across regions, with X-axis variable 'Portion 0-19', Y-axis variable 'Portion60+', and sizes variable 'Pop'.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #DataVisualization, #RegionAnalysis, #PopulationStudy -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Where( :Region == "Europe" );
bp = Bubble Plot(
	X( :Name( "Portion 0-19" ) ),
	Y( :Name( "Portion60+" ) ),
	Sizes( :Pop ),
	Time( :Year ),
	ID( :Region, :Country ),
	All Labels( 0 ),
	No Labels( 0 ),
	Title Position( 0.77, 0.0865 ),
	Split( "Asia" ),
	Split( "Europe" ), 
);
bp << Close Window;
```

**Code Explanation**:

1. Open table.
2. Select where region is Europe.
3. Create bubble plot.
4. Set X-axis variable.
5. Set Y-axis variable.
6. Set sizes variable.
7. Set time variable.
8. Set ID variables.
9. Disable all labels.
10. Disable no labels.



## Bubble Plot using Select Rows
### Example 1
> **Summary**: Creates a bubble plot to visualize height and weight data, colored by sex, using specific rows from a data table.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #DataVisualization, #SexBasedColoring, #RowSelection -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Rows( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] );
bp_id = Bubble Plot( X( :height ), Y( :weight ), Coloring( :sex ), ID( :sex ), Filled( 0 ), );
```

**Code Explanation**:

1. Open data table.
2. Select specific rows.
3. Create bubble plot.
4. Set X-axis to height.
5. Set Y-axis to weight.
6. Color by sex.
7. Use sex for ID.
8. Disable filled bubbles.



### Example 2
> **Summary**: Creates a bubble plot to visualize height and weight data, colored by sex, for the first 15 rows of a data table.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #DataVisualization, #GraphBuilder, #JSL -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Rows( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] );
bp_no_id = Bubble Plot( X( :height ), Y( :weight ), Coloring( :sex ), Filled( 0 ), );
```

**Code Explanation**:

1. Open data table.
2. Select first 15 rows.
3. Create bubble plot.
4. Set X-axis to height.
5. Set Y-axis to weight.
6. Color bubbles by sex.
7. Disable bubble filling.



### Example 3
> **Summary**: Creates a bubble plot to visualize height and weight data, colored by sex, from a specific set of rows in a data table.

<!-- Keywords: #JSLScriptingLanguage, #BubblePlot, #DataVisualization, #JMP, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Rows( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] );
bp_id = Bubble Plot( X( :height ), Y( :weight ), Coloring( :sex ), ID( :sex ), Filled( 1 ), );
```

**Code Explanation**:

1. Open data table.
2. Select specific rows.
3. Create bubble plot.
4. Set X-axis variable.
5. Set Y-axis variable.
6. Apply coloring based on sex.
7. Use sex for ID.
8. Fill bubbles.



### Example 4
> **Summary**: Creates a bubble plot to visualize height and weight data, colored by sex, for the first 15 rows of a data table.

<!-- Keywords: #JSLScriptingLanguage, #BubblePlot, #DataVisualization, #JMP, #GraphicalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Rows( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] );
bp_no_id = Bubble Plot( X( :height ), Y( :weight ), Coloring( :sex ), Filled( 1 ), );
```

**Code Explanation**:

1. Open data table;
2. Select first 15 rows.
3. Create bubble plot.
4. Set X-axis to height.
5. Set Y-axis to weight.
6. Color bubbles by sex.
7. Fill bubbles.



### Example 5
> **Summary**: Creates a bubble plot to visualize height and weight data, with sex as the ID variable.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #DataVisualization, #InteractiveAnalysis, #GraphBuilder -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Rows( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] );
bp_id = Bubble Plot( X( :height ), Y( :weight ), ID( :sex ), Filled( 1 ), );
```

**Code Explanation**:

1. Open data table.
2. Select first 15 rows.
3. Create bubble plot.
4. Set X-axis to height.
5. Set Y-axis to weight.
6. Use sex for ID.
7. Enable filled bubbles.



### Example 6
> **Summary**: Creates a bubble plot with filled bubbles, using height as the X-axis and weight as the Y-axis, from the first 15 rows of a data table.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #DataTable, #FilledBubbles, #GraphBuilder -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Rows( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] );
bp_no_id = Bubble Plot( X( :height ), Y( :weight ), Filled( 1 ), );
```

**Code Explanation**:

1. Open data table;
2. Select first 15 rows.
3. Create bubble plot.
4. Set X-axis to height.
5. Set Y-axis to weight.
6. Enable filled bubbles.



## Bubble Plot using Try
### Example 1
> **Summary**: Creates a bubble plot to visualize age, height, and weight data, with customizable color theme and title position.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #DataVisualization, #CustomizationOptions, #ErrorHandling -->

**Code**:
```jsl
Open("data_table.jmp");
Try(
	Bubble Plot(
		X( :age ),
		Y( :height ),
		Sizes( :weight ),
		Coloring( :age ),
		Bubble Size( 26 ),
		Color Theme( "foofoo" ),
		Title Position( 0, 0 ), 
	)
);
```

**Code Explanation**:

1. Open data table;
2. Attempt to create Bubble Plot.
3. Set X-axis to age.
4. Set Y-axis to height.
5. Use weight for bubble sizes.
6. Color bubbles by age.
7. Set bubble size to 26.
8. Apply color theme "foofoo".
9. Position title at origin.
10. Handle errors gracefully.



### Example 2
> **Summary**: Creates a bubble plot from a data table, with X-axis set to age, Y-axis set to height, and bubble sizes determined by weight, colored by age, and sized at 26 pixels.

<!-- Keywords: #JSL, #BubblePlot, #DataVisualization, #JMPScriptingLanguage, #GraphicalUserInterface -->

**Code**:
```jsl
Open("data_table.jmp");
Try(
	Bubble Plot(
		X( :age ),
		Y( :height ),
		Sizes( :weight ),
		Coloring( :age ),
		Bubble Size( 26 ),
		Color Theme( "foofoo" ),
		Title Position( 0, 0 ), 
	)
);
bp = Bubble Plot( X( :age ), Y( :height ), Sizes( :weight ), Coloring( :age ), Bubble Size( 26 ), Title Position( 0, 0 ), );
```

**Code Explanation**:

1. Open data table.
2. Attempt to create bubble plot.
3. Set X-axis to age.
4. Set Y-axis to height.
5. Use weight for bubble sizes.
6. Color bubbles by age.
7. Set bubble size to 26.
8. Apply color theme "foofoo".
9. Position title at (0,0).
10. Create bubble plot again.



## Bubble Plot using Char
> **Summary**: Creates and manipulates bubble plots to visualize data table rows based on sex, with interactive features for filtering and selecting specific groups.

<!-- Keywords: #JSLScriptingLanguage, #BubblePlot, #DataVisualization, #InteractiveFeatures, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Print( "current data table should be data_table, actually is: " || Char( Current Data Table() << get name ) );
dt << Select Where( :sex == "M" );
bp_id = Bubble Plot(
	X( :height ),
	Y( :weight ),
	Time( :age ),
	Coloring( :sex ),
	ID( :sex ),
	Time Index( 6 ),
	Filled( 0 ),
	Trail Bubbles( 1 ),
	Trail Lines( 1 )
);
Print( "current data table should be data_table, actually is: " || Char( Current Data Table() << get name ) );
bp_id << Close Window;
Print( "current data table should be data_table, actually is: " || Char( Current Data Table() << get name ) );
bp_no_id = Bubble Plot( X( :height ), Y( :weight ), Time( :age ), Coloring( :sex ), Time Index( 6 ), Filled( 0 ), );
Print( "current data table should be data_table, actually is: " || Char( Current Data Table() << get name ) );
bp_no_id << Close Window;
Print( "current data table should be data_table, actually is: " || Char( Current Data Table() << get name ) );
dt << Clear Select;
dt << Select Rows( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] );
bp_id = Bubble Plot( X( :height ), Y( :weight ), Coloring( :sex ), ID( :sex ), Filled( 0 ), );
bp_id << Close Window;
bp_no_id = Bubble Plot( X( :height ), Y( :weight ), Coloring( :sex ), Filled( 0 ), );
bp_no_id << Close Window;
bp_id = Bubble Plot( X( :height ), Y( :weight ), Coloring( :sex ), ID( :sex ), Filled( 1 ), );
bp_id << Close Window;
bp_no_id = Bubble Plot( X( :height ), Y( :weight ), Coloring( :sex ), Filled( 1 ), );
bp_no_id << Close Window;
bp_id = Bubble Plot( X( :height ), Y( :weight ), ID( :sex ), Filled( 1 ), );
bp_id << Close Window;
bp_no_id = Bubble Plot( X( :height ), Y( :weight ), Filled( 1 ), );
bp_no_id << Close Window;
dt << clear select;
dt << select where( :sex == "F" );
bp_id = Bubble Plot( X( :height ), Y( :weight ), ID( :sex ), Filled( 0 ), );
bp_id << Close Window;
bp_no_id = Bubble Plot( X( :height ), Y( :weight ), Filled( 0 ), );
bp_no_id << Close Window;
```

**Code Explanation**:

1. Open data table.
2. Print current data table name.
3. Select male rows.
4. Create bubble plot with time.
5. Print current data table name.
6. Close bubble plot window.
7. Print current data table name.
8. Create bubble plot without time.
9. Print current data table name.
10. Close bubble plot window.
11. Print current data table name.
12. Clear row selection.
13. Select first 15 rows.
14. Create bubble plot with ID and filled.
15. Close bubble plot window.
16. Create bubble plot without ID and filled.
17. Close bubble plot window.
18. Create bubble plot with ID and filled.
19. Close bubble plot window.
20. Create bubble plot without ID and filled.
21. Close bubble plot window.
22. Create bubble plot with ID and filled.
23. Close bubble plot window.
24. Create bubble plot without ID and filled.
25. Close bubble plot window.
26. Clear row selection.
27. Select female rows.
28. Create bubble plot with ID and filled.
29. Close bubble plot window.
30. Create bubble plot without ID and filled.
31. Close bubble plot window.



## Bubble Plot using Run Script
> **Summary**: Creates and configures a bubble plot to visualize data relationships, utilizing JMP's scripting language.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #DataVisualization, #PathDiagram, #SEMAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bp = dt << Run Script( "Bubble Plot by Region" );
bp << Step();
bp << Step();
bp << Step();
bp << Close Window();
Close( dt, No Save );
dt = New Table( "TempBubblePlot- (Group = 1)",
	Add Rows( 4 ),
	New Property( "Source",
		Data Table("data_table") << Subset( Output Table( "TempBubblePlot: (Group = 1)" ), Linked, Rows( [1, 2, 3, 4] ) )
	),
	New Column( "[Organic]", Numeric, Continuous, Format( "Best", 11 ), Set Values( [0.2498697, 0.213315393, 0.253421974, 0.215915522] ) ),
	New Column( "[Mexocel]",
		Numeric,
		Continuous,
		Format( "Best", 11 ),
		Set Values( [0.022988012, 0.023034056, 0.020273758, 0.020273758] )
	),
	New Column( "0=Fail", Numeric, Continuous, Format( "Best", 10 ), Set Values( [1, 1, 1, 1] ) ),
	New Column( "d(0.5) day 0", Numeric, Continuous, Format( "Best", 10 ), Set Values( [6.3, 7.061, 6.344, 6.477] ) ),
	Set Row States( [13312, 13312, 13312, 13312] )
);
bp = Bubble Plot(
	X( :Name( "[Mexocel]" ) ),
	Y( :Name( "[Organic]" ) ),
	Sizes( :Name( "d(0.5) day 0" ) ),
	Coloring( :Name( "0=Fail" ) ),
	Legend( 1 )
);
bp << Close Window();
Close( dt, No Save );
cert r = [33, 34, 35, 36, 37, 38, 39, 40];
```

**Code Explanation**:

1. Open data table.
2. Run bubble plot script.
3. Advance bubble plot step.
4. Advance bubble plot step.
5. Advance bubble plot step.
6. Close bubble plot window.
7. Close original data table.
8. Create new temporary table.
9. Define columns and values.
10. Set row states.



## Bubble Plot using Bubble Size
> **Summary**: Creates and creates a report for a bubble plot with geographic boundaries, utilizing JMP's graphing capabilities.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #GeographicMap, #DataVisualization, #Reporting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = bubble plot( Y( :height ), X( :weight ), coloring( :sex ), Bubble Size( 30 ) );
rpt = obj << report;
Report( obj )[FrameBox( 1 )] << Background Map( Boundaries( "World Countries" ) );
```

**Code Explanation**:

1. Open data table.
2. Create bubble plot object.
3. Assign plot to variable.
4. Generate report object.
5. Access first frame box.
6. Add background map.
7. Set map boundaries.



## Bubble Plot using Set Property
> **Summary**: Creates and customizes bubble plots with color annotations in JMP, utilizing Set Property and SendToReport functions.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #ColorAnnotation, #DataVisualization, #Customization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:sex << Set Property( "Value Colors", {"F" = -2762201, "M" = -11671595} );
dt:height << Set Property( "Color Gradient", {"White to Green"} );
bp = Bubble Plot(
	X( :age ),
	Y( :weight ),
	Coloring( :sex ),
	SendToReport(
		Dispatch( {}, "Bubble Plot", FrameBox,
			Add Text Annotation(
				Text( "Colors should be SAS Default (dark blue/red),
not Pastel (purple, light green)" ),
				Text Box( {2, 19, 400, 65} ),
				Filled( 0 ),
				Font( "Arial", 12, "Bold Italic" )
			)
		)
	)
);
rpt = bp << report;
bp << Close Window;
bp = Bubble Plot(
	X( :age ),
	Y( :weight ),
	Coloring( :height ),
	SendToReport(
		Dispatch( {}, "Bubble Plot", FrameBox,
			Add Text Annotation(
				Text( "Colors should be White to Green, not White to Black" ),
				Text Box( {2, 19, 313, 65} ),
				Filled( 0 ),
				Font( "Arial", 12, "Bold Italic" )
			)
		)
	)
);
rpt = bp << report;
bp << Close Window;
bp = Bubble Plot(
	X( :age ),
	Y( :weight ),
	Coloring( :weight ),
	SendToReport(
		Dispatch( {}, "Bubble Plot", FrameBox,
			Add Text Annotation(
				Text( "Colors should be White to Black" ),
				Text Box( {2, 19, 313, 65} ),
				Filled( 0 ),
				Font( "Arial", 12, "Bold Italic" )
			)
		)
	)
);
rpt = bp << report;
bp << Close Window;
bp = Bubble Plot(
	X( :age ),
	Y( :weight ),
	Coloring( :age ),
	SendToReport(
		Dispatch( {}, "Bubble Plot", FrameBox,
			Add Text Annotation(
				Text( "Colors should be Pastel (purple, light green)" ),
				Text Box( {2, 19, 400, 65} ),
				Filled( 0 ),
				Font( "Arial", 12, "Bold Italic" )
			)
		)
	)
);
rpt = bp << report;
bp << Close Window;
```

**Code Explanation**:

1. Open data table.
2. Set sex color properties.
3. Set height color gradient.
4. Create bubble plot with sex coloring.
5. Add text annotation for sex colors.
6. Retrieve report.
7. Close bubble plot window.
8. Create bubble plot with height coloring.
9. Add text annotation for height colors.
10. Retrieve report.




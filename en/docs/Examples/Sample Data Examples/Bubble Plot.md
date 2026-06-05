# Bubble Plot

## Example 1
> **Summary**: Generate a bubble plot with a background map

<!-- Keywords: #BubblePlot, #BackgroundMap, #Coloring, #ID, #Max -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Air Traffic.jmp");
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

## Example 2
> **Summary**: Generate a bubble plot with automation by year

<!-- Keywords: #BubblePlot, #CircleSize, #ID, #Index, #Plot -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/BirthDeathYear.jmp");
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

## Example 3
> **Summary**: Generate a bubble plot with automation by date

<!-- Keywords: #BubblePlot, #Format, #ID, #Max, #Min -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/blsPriceData.jmp");
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

## Example 4
> **Summary**: Generate a bubble plot with automation on time

<!-- Keywords: #BubblePlot, #AllLabels, #Coloring, #ID, #Index -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Cola Heart Rate.jmp");
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

## Example 5
> **Summary**: Generate a bubble plot with automation on time and trail lines on selected

<!-- Keywords: #BubblePlot, #AllLabels, #Coloring, #ID, #Max -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Cola Heart Rate.jmp");
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

## Example 6
> **Summary**: Generate a bubble plot with automation on time and trail lines on selected

<!-- Keywords: #BubblePlot, #AllLabels, #Coloring, #ID, #Max -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Cola Heart Rate.jmp");
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

## Example 7
> **Summary**: Create a Bubble Plot visualizing the relationship between Domestic Gross and Theaters Opening Week, with bubble sizes representing Profitability and colors indicating Rotten Tomatoes Score.

<!-- Keywords: #BubblePlot, #ColorLevels, #Coloring, #FrameSize, #Max -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Hollywood Movies.jmp");
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

## Example 8
> **Summary**: Create a Bubble Plot to Visualize Production Budget by Lead Studio, Colored by Genre

<!-- Keywords: #BubblePlot, #Coloring, #FrameSize, #Max, #Min -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Hollywood Movies.jmp");
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

## Example 9
> **Summary**: Create a Bubble Plot with temporal animation to visualize hurricane data, including longitude, latitude, wind speeds, landfall status in the USA, names, and IDs of hurricanes.

<!-- Keywords: #BubblePlot, #AllLabels, #Coloring, #ID, #Max -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Hurricanes.jmp");
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

## Example 10
> **Summary**: Create a bubble plot with a map display using the Bubble Plot function , incorporating geographical coordinates from the Hurricanes data table and customizing the visualization with wind speed, date, and landfall indicator.

<!-- Keywords: #BubblePlot, #BackgroundMap, #ColorLevels, #Coloring, #FrameSize -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Hurricanes.jmp");
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

## Example 11
> **Summary**: Create a Bubble Plot with customizable time, color, and size scales.

<!-- Keywords: #BubblePlot, #DataTable, #AllLabels, #BackgroundMap, #BubbleSize -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Katrina Data.jmp");
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

## Example 12
> **Summary**: Create a Bubble Plot Street Map visualization using longitude and latitude data to represent population sizes, with colors indicating lead levels. Use the Background Map function to display a street map service and set axis scales and settings for the X and Y coordinates. Incorporate custom title and frame adjustments.

<!-- Keywords: #BubblePlot, #BackgroundMap, #BubbleSize, #ColorTheme, #FrameSize -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Pollutants Map.jmp");
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

## Example 13
> **Summary**: Create a dynamic bubble plot to visualize the relationship between population proportions of age groups and total population size over time by country.

<!-- Keywords: #BubblePlot, #ID, #Plot, #Sizes, #Time -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/PopAgeGroup.jmp");
// Bubble Plot Dynamic
Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	Time( :Year ),
	ID( :Country )
);
```

## Example 14
> **Summary**: Create a bubble plot with Portion 0-19 on the X-axis, Portion60+ on the Y-axis, and varying bubble sizes based on population size using the Bubble Plot function.

<!-- Keywords: #BubblePlot, #Plot, #Sizes -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/PopAgeGroup.jmp");
// Bubble Plot Static
Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop )
);
```

## Example 15
> **Summary**: Create a bubble plot to visualize the relationship between the proportions of age groups 0-19 and 60+ across different regions and countries, with population sizes indicated by bubble sizes and time periods marked by different colors.

<!-- Keywords: #BubblePlot, #ID, #Plot, #Sizes, #Time -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/PopAgeGroup.jmp");
// Bubble Plot Region
Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	Time( :Year ),
	ID( :Region, :Country )
);
```

## Example 16
> **Summary**: Create a Bubble Plot to visualize the Portion 0-19 by Country over different Years, adjusting the frame size to 475x326.

<!-- Keywords: #BubblePlot, #AllLabels, #Coloring, #FrameSize, #Plot -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/PopAgeGroupSubset.jmp");
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

## Example 17
> **Summary**: Create a bubble plot using the variables Portion 0-19 and Portion60+ as the X and Y coordinates, respectively, with Pop as the size of the bubbles. This analysis demonstrates the changes over time by plotting data points for different countries.

<!-- Keywords: #BubblePlot, #AllLabels, #CircleSize, #FrameSize, #ID -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/PopAgeGroupSubset.jmp");
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

## Example 18
> **Summary**: Create a bubble plot visualizing population distribution by analyzing the portion of the population aged 0-19, 60+, and overall population size, aggregated over time and identified by different regions and countries using the Bubble Plot function.

<!-- Keywords: #BubblePlot, #ID, #Plot, #Sizes, #Time -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/PopAgeGroupSubset.jmp");
// Bubble by Region
Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	Time( :Year ),
	ID( :Region, :Country )
);
```

## Example 19
> **Summary**: Create a bubble plot by state using state data from the SATByYear dataset, plotting SAT Math scores on the x-axis and SAT Verbal scores on the y-axis, with bubble sizes representing the percentage of students taking the test in 2004, and colored bubbles representing different years.

<!-- Keywords: #BubblePlot, #AllLabels, #FrameSize, #ID, #Plot -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/SATByYear.jmp");
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

## Example 20
> **Summary**: Create a Bubble Plot with SAT Math on the X-axis and SAT Verbal on the Y-axis, using the percentage taking the test in 2004 as bubble sizes, display Time as the Year, ID by Region and State, show all labels, and finalize the report by setting the frame size to 550 by 336.

<!-- Keywords: #BubblePlot, #AllLabels, #FrameSize, #ID, #Plot -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/SATByYear.jmp");
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

## Example 21
> **Summary**: Create an animated bubble plot to visualize CO2 emissions from liquid and solid fuels across different nations over time, with bubble sizes representing population.

<!-- Keywords: #BubblePlot, #ID, #Plot, #Sizes, #Time -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/SmogNBabies.jmp");
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

## Example 22
> **Summary**: Create a bubble plot with scaling for sizes and coloring based on the wolfer variable using Bubble Plot function.

<!-- Keywords: #BubblePlot, #CircleSize, #Coloring, #Format, #FrameSize -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Wolfer Sunspot.jmp");
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

## Example 23
> **Summary**: Create a bubble plot with time series functionality , using the X and Y variables, sizes scaled by the Wolfer index, time indexed by cycle, and colorcoding based on the Wolfer index.

<!-- Keywords: #BubblePlot, #Coloring, #ID, #Index, #Plot -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Wolfer Sunspot.jmp");
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

## Example 24
> **Summary**: Create a bubble plot with time-series data, customizing size, time, and color based on the Wolfer Sunspot dataset.

<!-- Keywords: #BubblePlot, #AllLabels, #Coloring, #Format, #FrameSize -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Wolfer Sunspot.jmp");
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


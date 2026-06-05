# Graph Builder

## Example 1
> **Summary**: Build a graph builder chart with a simple earth background map

<!-- Keywords: #GraphBuilder, #BackgroundMap, #ControlPanel, #Elements, #Format -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Aircraft Incidents.jmp");
// Graph Builder Map
Graph Builder(
	Size( 528, 453 ),
	Show Control Panel( 0 ),
	Variables(
		X( :Longitude ),
		Y( :Latitude )
	),
	Elements(
		Points( X, Y, Legend( 8 ) )
	),
	SendToReport(
		Dispatch( {}, "Longitude",
			ScaleBox,
			{Scale( "Geodesic US" ),
			Format( "Best", 10 ),
			Min( -130.465133704084 ),
			Max( -65.2794320942478 ),
			Inc( 5 ), Minor Ticks( 1 )}
		),
		Dispatch( {}, "Latitude",
			ScaleBox,
			{Scale( "Geodesic US" ),
			Format( "Best", 10 ),
			Min( 15.9446169772257 ),
			Max( 68.7396480331263 ),
			Inc( 5 ), Minor Ticks( 1 )}
		),
		Dispatch( {}, "Graph Builder",
			FrameBox,
			{
			Background Map(
				Images( "Simple Earth" )
			), Grid Line Order( 2 ),
			Reference Line Order( 3 )}
		)
	)
);
```

## Example 2
> **Summary**: Build a graph builder chart with a background map showing street map details

<!-- Keywords: #GraphBuilder, #BackgroundMap, #ControlPanel, #Elements, #Format -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Aircraft Incidents.jmp");
// Street Map of Fatal Accidents
Graph Builder(
	Size( 534, 454 ),
	Show Control Panel( 0 ),
	Variables(
		X( :Longitude ),
		Y( :Latitude ),
		Color( :Fatal )
	),
	Elements(
		Points( X, Y, Legend( 3 ) )
	),
	SendToReport(
		Dispatch( {}, "Longitude",
			ScaleBox,
			{
			Format(
				"Longitude DDD",
				"PUNDIR",
				16,
				2
			), Min( -80.47 ),
			Max( -79.8904647541929 ),
			Inc( 0.1 ), Minor Ticks( 1 )}
		),
		Dispatch( {}, "Latitude",
			ScaleBox,
			{
			Format(
				"Latitude DDD",
				"PUNDIR",
				16,
				2
			), Min( 25.9668812835944 ),
			Max( 26.4639881027549 ),
			Inc( 0.1 ), Minor Ticks( 1 )}
		),
		Dispatch( {}, "Graph Builder",
			FrameBox,
			{
			Background Map(
				Images(
					"Street Map Service"
				)
			), Grid Line Order( 2 ),
			Reference Line Order( 3 )}
		)
	)
);
```

## Example 3
> **Summary**: Build a bar chart using graph builder

<!-- Keywords: #GraphBuilder, #BarStyle, #ControlPanel, #Elements, #Legend -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Airline Delays.jmp");
// Graph Builder Bar
Graph Builder(
	Show Control Panel( 0 ),
	Variables(
		X( :Day of Week ),
		Overlay( :Airline )
	),
	Elements(
		Bar(
			X,
			Legend( 2 ),
			Bar Style( "Side by side" ),
			Summary Statistic( "Mean" )
		)
	),
	SendToReport(
		Dispatch( {}, "graph title",
			TextEditBox,
			{
			Set Text(
				"Flights by Airline and Day of Week"
			)}
		)
	)
);
```

## Example 4
> **Summary**: Build a histogram using graph builder

<!-- Keywords: #GraphBuilder, #ControlPanel, #Elements, #Histogram, #Legend -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Airline Delays.jmp");
// Graph Builder Histogram
gb =
Graph Builder(
	Show Control Panel( 0 ),
	Variables(
		X( :Distance ),
		Wrap( :Airline )
	),
	Elements(
		Histogram( X, Legend( 9 ) )
	),
	SendToReport(
		Dispatch( {}, "Distance",
			ScaleBox,
			{Min( -6.07535604831441 ),
			Max( 2900 ), Inc( 500 ),
			Minor Ticks( 0 )}
		),
		Dispatch( {}, "graph title",
			TextEditBox,
			{
			Set Text(
				"Flight Distance by Airline"
			)}
		)
	)
);
rotate = gb << report;
axisbox = rotate[axis box( 1 )];
axisbox << Rotated Labels( "Angled" );
```

## Example 5
> **Summary**: Build a contour plot using graph builder

<!-- Keywords: #GraphBuilder, #ControlPanel, #Elements, #Legend, #NumberofLevels -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Airline Delays.jmp");
// Graph Builder Contour Plot
Graph Builder(
	Show Control Panel( 0 ),
	Variables(
		X( :Distance ),
		Y( :Arrival Delay ),
		Wrap( :Airline )
	),
	Elements(
		Contour(
			X,
			Y,
			Legend( 6 ),
			Number of Levels( 6 )
		)
	)
);
```

## Example 6
> **Summary**: Build a treemap using graph builder

<!-- Keywords: #GraphBuilder, #Treemap, #ControlPanel, #Elements, #FrameSize -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Airline Delays.jmp");
// Graph Builder Treemap
Graph Builder(
	Show Control Panel( 0 ),
	Variables(
		X( :Airline ),
		Color( :Arrival Delay )
	),
	Elements(
		Treemap(
			X,
			Color,
			Legend( 5 ),
			Summary Statistic(
				"Sum Wgt"
			)
		)
	),
	SendToReport(
		Dispatch( {}, "graph title",
			TextEditBox,
			{
			Set Text(
				"Airline Flight Count colored by Average Delay"
			)}
		),
		Dispatch( {}, "Graph Builder",
			FrameBox,
			{
			DispatchSeg(
				TreemapSeg( 1 ),
				Frame Size( 559, 452 )
			)}
		)
	)
);
```

## Example 7
> **Summary**: Build a graph builder chart with a wrap variable

<!-- Keywords: #GraphBuilder, #ControlPanel, #Elements, #Legend, #Min -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Arrhythmia.jmp");
// Graph Builder: QRS duration by Age
Graph Builder(
	Show Control Panel( 0 ),
	Variables(
		X( :Age ),
		Y( :QRS duration ),
		Wrap( :Sex )
	),
	Elements(
		Smoother( X, Y, Legend( 34 ) ),
		Points( X, Y, Legend( 35 ) )
	),
	SendToReport(
		Dispatch( {}, "Age", ScaleBox,
			{Min( -16 )}
		),
		Dispatch( {}, "", ScaleBox,
			{
			Label Row(
				{Automatic Font Size( 1 ),
				Label Orientation(
					"Automatic"
				),
				Automatic Tick Marks( 1 )
				}
			)}
		),
		Dispatch( {}, "", ScaleBox( 2 ),
			{
			Label Row(
				{Automatic Font Size( 1 ),
				Label Orientation(
					"Automatic"
				),
				Automatic Tick Marks( 1 )
				}
			)}
		)
	)
);
```

## Example 8
> **Summary**: Build a graph builder chart with smoother curves

<!-- Keywords: #GraphBuilder, #ControlPanel, #Elements, #Format, #Legend -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Australian Tourism.jmp");
// Graph Builder Smoother 1
Graph Builder(
	Show Control Panel( 0 ),
	Show Legend( 0 ),
	Variables(
		X( :Date ),
		Y( :"Revenue ($'000)"n ),
		Y( :"Bed occupancy rate (%)"n ),
		Y(
			:
			"Average length of stay (days)"n
		)
	),
	Elements(
		Position( 1, 1 ),
		Points( X, Y, Legend( 4 ) ),
		Smoother( X, Y, Legend( 3 ) )
	),
	Elements(
		Position( 1, 2 ),
		Points( X, Y, Legend( 1 ) ),
		Smoother( X, Y, Legend( 2 ) )
	),
	Elements(
		Position( 1, 3 ),
		Points( X, Y, Legend( 6 ) ),
		Smoother( X, Y, Legend( 5 ) )
	),
	SendToReport(
		Dispatch( {}, "Date", ScaleBox,
			{Format( "yyyyQq", 6 ),
			Min( 2953282344.82759 ),
			Max( 3408220800 ),
			Interval( "Year" ), Inc( 2 ),
			Minor Ticks( 0 )}
		),
		Dispatch( {}, "graph title",
			TextEditBox,
			{Set Text( "Tourism Trends" )
			}
		)
	)
);
```

## Example 9
> **Summary**: Build a graph builder chart with smoother curves

<!-- Keywords: #GraphBuilder, #ControlPanel, #Elements, #Legend, #Other -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Australian Tourism.jmp");
// Graph Builder Smoother 2
Graph Builder(
	Show Control Panel( 0 ),
	Variables(
		X( :Date ),
		Y( :"Revenue ($'000)"n ),
		Y(
			:Persons Employed,
			Position( 1 ),
			Side( "Right" )
		)
	),
	Elements(
		Points( X, Y( 1 ), Legend( 1 ) ),
		Smoother(
			X,
			Y( 1 ),
			Legend( 4 )
		),
		Points( X, Y( 2 ), Legend( 5 ) ),
		Smoother(
			X,
			Y( 2 ),
			Legend( 6 )
		)
	)
);
```

## Example 10
> **Summary**: Build a graph builder chart with points and a smoother line

<!-- Keywords: #GraphBuilder, #ControlPanel, #Elements, #Legend, #Other -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Big Class.jmp");
// Graph Builder Smoother Line
Graph Builder(
	Show Control Panel( 0 ),
	Variables(
		X( :height ),
		Y( :weight ),
		Overlay( :sex )
	),
	Elements(
		Points( X, Y, Legend( 1 ) ),
		Smoother( X, Y, Legend( 2 ) )
	)
);
```

## Example 11
> **Summary**: Build a graph builder chart with line and bar charts

<!-- Keywords: #GraphBuilder, #BarStyle, #ControlPanel, #Elements, #Legend -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Big Class.jmp");
// Graph Builder Line and Bar Charts
Graph Builder(
	Show Control Panel( 0 ),
	Variables(
		X( :age, Size( 15, 20 ) ),
		Y( :height, Size( 38, 36 ) ),
		Y( :weight )
	),
	Elements(
		Position( 1, 1 ),
		Line(
			X,
			Y,
			Legend( 1 ),
			Row order( 0 ),
			Summary Statistic( "Mean" )
		)
	),
	Elements(
		Position( 1, 2 ),
		Bar(
			X,
			Y,
			Legend( 2 ),
			Bar Style( "Side by side" ),
			Summary Statistic( "Mean" )
		)
	)
);
```

## Example 12
> **Summary**: Build a graph builder chart with lines, points and markers

<!-- Keywords: #GraphBuilder, #LegendModel, #Base, #ControlPanel, #Elements -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Big Class.jmp");
// Graph Builder Line Chart
Graph Builder(
	Show Control Panel( 0 ),
	Variables(
		X( :age ),
		Y( :height ),
		Overlay( :sex )
	),
	Elements(
		Line(
			X,
			Y,
			Legend( 3 ),
			Row order( 0 ),
			Summary Statistic( "Mean" )
		),
		Points(
			X,
			Y,
			Legend( 4 ),
			Jitter( 1 )
		)
	),
	SendToReport(
		Dispatch( {}, "400", ScaleBox,
			{
			Legend Model(
				4,
				Base( 0, 0, 0 ),
				Base( 1, 0, 1 ),
				Properties(
					0,
					{Marker( "Plus" )}
				),
				Properties(
					1,
					{Marker( "Square" )}
				)
			)}
		)
	)
);
```

## Example 13
> **Summary**: Build a heatmap in graph builder

<!-- Keywords: #GraphBuilder, #ControlPanel, #Elements, #Legend, #ShowControlPanel -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Big Class.jmp");
// Graph Builder Heatmap
Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :age ), Y( :sex ) ),
	Elements(
		Heatmap( X, Y, Legend( 2 ) )
	)
);
```

## Example 14
> **Summary**: Generate a box plot using graph builder

<!-- Keywords: #GraphBuilder, #BoxStyle, #ControlPanel, #Elements, #Jitter -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Car Physical Data.jmp");
// Graph Builder Box Plot
Graph Builder(
	Show Control Panel( 0 ),
	Variables(
		X( :Gas Tank Size ),
		Y( :Type )
	),
	Elements(
		Box Plot(
			X,
			Y,
			Legend( 8 ),
			Jitter( 1 ),
			Outliers( 1 ),
			Box Style( "Outlier" )
		)
	)
);
```

## Example 15
> **Summary**: Generate a mosaic plot in graph builder

<!-- Keywords: #GraphBuilder, #ControlPanel, #Elements, #Legend, #ShowControlPanel -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Children's Popularity.jmp");
// Graph Builder Mosaic Plot
Graph Builder(
	Show Control Panel( 0 ),
	Variables(
		X( :"Urban/Rural"n ),
		Y( :Goals )
	),
	Elements(
		Mosaic(
			X,
			Y,
			Legend( 6 ),
			Vertical( 1 )
		)
	)
);
```

## Example 16
> **Summary**: Generate a bar chart using graph builder

<!-- Keywords: #GraphBuilder, #BarStyle, #Close, #ControlPanel, #Elements -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Children's Popularity.jmp");
// Graph Builder Bar Chart
:Grade << Set Modeling Type( "Nominal" );
gb =
Graph Builder(
	Show Control Panel( 0 ),
	Variables(
		X( :Grade ),
		X( :Goals, Position( 1 ) ),
		Group Y( :Gender ),
		Overlay( :Goals )
	),
	Elements(
		Bar(
			X( 1 ),
			X( 2 ),
			Legend( 2 ),
			Bar Style( "Side by side" ),
			Summary Statistic( "Mean" )
		)
	)
);
gb <<
On Close(
	:Grade <<
	Set Modeling Type( "Continuous" )
);
```

## Example 17
> **Summary**: Generate a graph builder chart with a us states background map

<!-- Keywords: #GraphBuilder, #BackgroundMap, #ControlPanel, #Elements, #Legend -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Cities.jmp");
// Graph Builder Map Lead Levels
Graph Builder(
	Size( 733, 396 ),
	Show Control Panel( 0 ),
	Variables(
		X( :Longitude ),
		Y( :Latitude ),
		Color( :Max deg. F Jan ),
		Size( :Lead )
	),
	Elements(
		Points( X, Y, Legend( 1 ) )
	),
	SendToReport(
		Dispatch( {}, "graph title",
			TextEditBox,
			{
			Set Text(
				"US Cities Colored by Max deg. F Jan, Sized by Lead Levels"
			)}
		),
		Dispatch( {}, "Graph Builder",
			FrameBox,
			{
			Background Map(
				Boundaries( "US States" )
			), Grid Line Order( 2 ),
			Reference Line Order( 3 )}
		)
	)
);
```

## Example 18
> **Summary**: Generate a tree map using graph builder

<!-- Keywords: #GraphBuilder, #Treemap, #ControlPanel, #Elements, #Legend -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Cities.jmp");
// Graph Builder Treemap
Graph Builder(
	Show Control Panel( 0 ),
	Variables(
		X( :city ),
		Color( :OZONE ),
		Size( :POP )
	),
	Elements(
		Treemap(
			X,
			Legend( 4 ),
			Summary Statistic( "Sum" )
		)
	),
	SendToReport(
		Dispatch( {}, "graph title",
			TextEditBox,
			{
			Set Text(
				"US Cities Colored by Max deg. F Jan, Sized by Lead Levels"
			)}
		)
	)
);
```

## Example 19
> **Summary**: Generate an example stock price chart with moving average using graph builder

<!-- Keywords: #GraphBuilder, #ControlPanel, #Elements, #Grid, #ID -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Current Stock Averages.jmp");
// Graph Builder
Graph Builder(
	Size( 660, 500 ),
	Show Control Panel( 0 ),
	Variables(
		X( :Date ),
		Y( :Moving Average ),
		Y( :Close, Position( 1 ) )
	),
	Elements(
		Line(
			X,
			Y( 1 ),
			Y( 2 ),
			Legend( 5 ),
			Row order( 0 ),
			Summary Statistic( "Mean" )
		),
		Points(
			X,
			Y( 1 ),
			Y( 2 ),
			Legend( 6 )
		)
	),
	SendToReport(
		Dispatch( {}, "Date", ScaleBox,
			{Min( 3400710353.09561 ),
			Max( 3408540290.55472 ),
			Interval( "Week" ),
			Inc( 1.65343915343915 ),
			Minor Ticks( 0 ),
			Show Minor Grid( 1 ),
			Show Minor Ticks( 0 ),
			Rotated Labels( "Angled" )}
		)
	)
);
```

## Example 20
> **Summary**: Generate a graph builder chart with points and lines and grouping on x

<!-- Keywords: #GraphBuilder, #ControlPanel, #Elements, #Legend, #Line -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Cola Heart Rate.jmp");
// Graph Builder
Graph Builder(
	Show Control Panel( 0 ),
	Variables(
		X(
			:"Time (Numeric)"n,
			Size( 0, 22 )
		),
		Y( :Heart Rate, Size( 0, 23 ) ),
		Group X( :Drink ),
		Overlay( :Testers )
	),
	Elements(
		Points( X, Y, Legend( 88 ) ),
		Line(
			X,
			Y,
			Legend( 90 ),
			Row order( 0 ),
			Summary Statistic( "Mean" )
		)
	)
);
```

## Example 21
> **Summary**: Generate a graph builder chart with points and lines and two levels of grouping on x

<!-- Keywords: #GraphBuilder, #ControlPanel, #Elements, #Legend, #Line -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Cola Heart Rate.jmp");
// Graph Builder 2
Graph Builder(
	Show Control Panel( 0 ),
	Variables(
		X(
			:"Time (Numeric)"n,
			Size( 0, 22 )
		),
		Y( :Heart Rate, Size( 0, 23 ) ),
		Group X( :Brand ),
		Group X( :Type ),
		Overlay( :Testers )
	),
	Elements(
		Points( X, Y, Legend( 88 ) ),
		Line(
			X,
			Y,
			Legend( 90 ),
			Row order( 0 ),
			Summary Statistic( "Mean" )
		)
	)
);
```

## Example 22
> **Summary**: Generate a graph builder chart with points and lines and group on x, group on y and overlay

<!-- Keywords: #GraphBuilder, #ControlPanel, #Elements, #Legend, #Line -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Cola Heart Rate.jmp");
// Graph Builder 3
Graph Builder(
	Show Control Panel( 0 ),
	Variables(
		X(
			:"Time (Numeric)"n,
			Size( 0, 22 )
		),
		Y( :Heart Rate, Size( 0, 23 ) ),
		Group X( :Brand ),
		Group Y( :Type ),
		Overlay( :Testers )
	),
	Elements(
		Points( X, Y, Legend( 88 ) ),
		Line(
			X,
			Y,
			Legend( 90 ),
			Row order( 0 ),
			Summary Statistic( "Mean" )
		)
	)
);
```

## Example 23
> **Summary**: Generate a graph builder chart with points and lines and two levels of group on x, group on y and overlay

<!-- Keywords: #GraphBuilder, #Elements, #Legend, #Line, #Order -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Cola Heart Rate.jmp");
// Graph Builder 4
Graph Builder(
	Size( 686, 540 ),
	Variables(
		X(
			:"Time (Numeric)"n,
			Size( 0, 25 )
		),
		Y(
			:"Rate/Baseline"n,
			Size( 0, 26 )
		),
		Group X( :Type ),
		Group X( :Brand ),
		Group Y( :Gender ),
		Overlay( :Testers )
	),
	Elements(
		Points( X, Y, Legend( 18 ) ),
		Line(
			X,
			Y,
			Legend( 20 ),
			Row order( 0 ),
			Summary Statistic( "Mean" )
		)
	)
);
```

## Example 24
> **Summary**: Generate a graph builder chart with a geographic background map

<!-- Keywords: #GraphBuilder, #LegendModel, #ColorTheme, #ControlPanel, #Elements -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Corn Wheat Soybean Production.jmp");
// State Colored by Median Commodity Acres Planted
Graph Builder(
	Size( 466, 445 ),
	Show Control Panel( 0 ),
	Fit to Window( "Off" ),
	Variables(
		Color( :Commodity Acres Planted ),
		Shape( :State )
	),
	Elements(
		Map Shapes(
			Legend( 5 ),
			Summary Statistic( "Median" )
		)
	),
	SendToReport(
		Dispatch( {}, "400", ScaleBox,
			{
			Legend Model(
				5,
				Properties(
					0,
					{
					gradient(
						{
						Color Theme(
							"White to Blue"
						), Width( 12 ),
						Scale Type(
							"Quantile"
						)}
					)},
					Item ID(
						"Commodity Acres Planted",
						1
					)
				)
			)}
		),
		Dispatch( {}, "graph title",
			TextEditBox,
			{
			Set Text(
				"State Colored by Median Commodity Acres Planted"
			)}
		)
	)
);
```

## Example 25
> **Summary**: Create a Graph Builder plot with colored points, a line of fit, and the specified variables: Specific Gravity, Tensile Strength, and Supplier.

<!-- Keywords: #Fit, #GraphBuilder, #ControlPanel, #Elements, #Legend -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Thermoplastic.jmp");
// Graph Builder
Graph Builder(
	Show Control Panel( 0 ),
	Variables(
		X( :Specific Gravity ),
		Y( :Tensile Strength ),
		Color( :Supplier )
	),
	Elements(
		Points( X, Y, Legend( 2 ) ),
		Line Of Fit( X, Y, Legend( 4 ) )
	)
);
```

## Example 26
> **Summary**: Analyze the relationship between Analysis and Discoveries using a mosaic plot in Graph Builder.

<!-- Keywords: #GraphBuilder, #CellLabeling, #ControlPanel, #Elements, #Legend -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Discovery US 2018 Survey.jmp");
// Analysis vs. Discoveries
Graph Builder(
	Size( 534, 450 ),
	Show Control Panel( 0 ),
	Variables(
		X( :Discoveries ),
		Y( :Analysis )
	),
	Elements(
		Mosaic(
			X,
			Y,
			Legend( 18 ),
			Cell Labeling(
				"Label by Percent"
			)
		)
	)
);
```

## Example 27
> **Summary**: Create a Graph Builder visualization depicting the distribution of calories by meal using the Food Journal dataset.

<!-- Keywords: #GraphBuilder, #Treemap, #ControlPanel, #Elements, #FrameSize -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Food Journal.jmp");
// Graph Builder: Calories by Meal
Graph Builder(
	Show Control Panel( 0 ),
	Variables(
		X( :Meal ),
		Y( :Calories )
	),
	Elements(
		Treemap( X, Y, Legend( 10 ) )
	),
	SendToReport(
		Dispatch( {}, "", ScaleBox,
			{
			Label Row(
				{Automatic Font Size( 1 ),
				Label Orientation(
					"Automatic"
				),
				Automatic Tick Marks( 1 )
				}
			)}
		),
		Dispatch( {}, "", ScaleBox( 2 ),
			{
			Label Row(
				{Automatic Font Size( 1 ),
				Label Orientation(
					"Automatic"
				),
				Automatic Tick Marks( 1 )
				}
			)}
		),
		Dispatch( {}, "Graph Builder",
			FrameBox,
			{
			DispatchSeg(
				TreeMapSeg( 1 ),
				Frame Size( 536, 452 )
			)}
		)
	)
);
```

## Example 28
> **Summary**: Create a treemap visualization in Graph Builder to explore the relationship between meal categories and item names, color-coded by meal type, while incorporating a local data filter for calorie and meal category selections.

<!-- Keywords: #DataFilter, #GraphBuilder, #Treemap, #AddFilter, #columns -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Food Journal.jmp");
// Graph Builder: Item Name and Meal Category
Graph Builder(
	Size( 1001, 702 ),
	Show Control Panel( 0 ),
	Variables(
		X( :Meal ),
		X( :Item Name, Position( 1 ) ),
		Color( :Meal )
	),
	Elements(
		Treemap(
			X( 1 ),
			X( 2 ),
			Legend( 3 ),
			Layout( "Squarify" )
		)
	),
	Local Data Filter(
		Add Filter(
			columns( :Calories, :Meal ),
			Display(
				:Meal,
				N Items( 6 )
			)
		)
	)
);
```

## Example 29
> **Summary**: Create a Graph Builder visualization to explore relationships between lots, parts, and shipping events.

<!-- Keywords: #GraphBuilder, #ControlPanel, #Elements, #Legend, #Points -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Hardware Surface Unit Data.jmp");
// lots, parts, and shipping
Graph Builder(
	Size( 515, 491 ),
	Show Control Panel( 0 ),
	Variables(
		X( :Part ),
		Y( :Lot ),
		Group X( :Ship event )
	),
	Elements(
		Points( X, Y, Legend( 8 ) )
	)
);
```

## Example 30
> **Summary**: Generate a Graph Builder visualization with Points, Ellipse, and Line of Fit elements, overlaid by surface quality categories.

<!-- Keywords: #Fit, #GraphBuilder, #LegendModel, #Base, #ConfidenceofFit -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Hardware Surface Unit Data.jmp");
// Graph Builder 4
Graph Builder(
	Variables(
		X( :X ),
		Y( :Y ),
		Overlay( :surface quality )
	),
	Elements(
		Points(
			X,
			Y,
			Legend( 1 ),
			Jitter( 1 )
		),
		Ellipse(
			X,
			Y,
			Legend( 3 ),
			Coverage( "90%" )
		),
		Line Of Fit(
			X,
			Y,
			Legend( 4 ),
			Confidence of Fit( 1 ),
			Confidence of Prediction( 0 ),
			Degree( "Linear" ),
			Equation( 0 ),
			Root Mean Square Error( 0 ),
			R²( 0 )
		)
	),
	SendToReport(
		Dispatch( {}, "400", ScaleBox,
			{
			Legend Model(
				1,
				Base( 0, 4, 0 ),
				Base( 1, 4, 1 ),
				Base( 2, 4, 2 ),
				Base( 3, 4, 3 )
			)}
		)
	)
);
```

## Example 31
> **Summary**: Build a Graph Builder plot displaying a box plot and mean line with jittered and outlier markers for surface quality versus Y.

<!-- Keywords: #GraphBuilder, #BoxStyle, #Elements, #Jitter, #Legend -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Hardware Surface Unit Data.jmp");
// Graph Builder 5
Graph Builder(
	Variables(
		X( :surface quality ),
		Y( :Y )
	),
	Elements(
		Box Plot(
			X,
			Y,
			Legend( 2 ),
			Jitter( 1 ),
			Outliers( 1 ),
			Box Style( "Outlier" )
		),
		Line(
			X,
			Y,
			Legend( 3 ),
			Row order( 0 ),
			Summary Statistic( "Mean" )
		)
	)
);
```

## Example 32
> **Summary**: Create a Graph Builder visualization with Mosaic plot elements and apply local data filters for the variables color, surface quality, Lot, and Y.

<!-- Keywords: #DataFilter, #GraphBuilder, #AddFilter, #columns, #Display -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Hardware Surface Unit Data.jmp");
// Graph Builder with filters
Graph Builder(
	Size( 570, 910 ),
	Variables(
		X( :color ),
		Y( :surface quality ),
		Wrap( :Lot ),
		Overlay( :Y )
	),
	Elements(
		Mosaic(
			X,
			Y,
			Legend( 4 ),
			Vertical( 1 )
		)
	),
	Local Data Filter(
		Location( {297, 118} ),
		Mode(
			Select( 0 ),
			Show( 1 ),
			Include( 1 )
		),
		Add Filter(
			columns( :Lot, :Part ),
			Where( :Lot == 3 ),
			Display(
				:Lot,
				Size( 182, 160 ),
				List Display
			),
			Display(
				:Part,
				Size( 70, 609 ),
				Check Box Display
			)
		)
	)
);
```

## Example 33
> **Summary**: Create a Graph Builder visualization with Points elements for Surface Quality vs. Part.

<!-- Keywords: #GraphBuilder, #ControlPanel, #Elements, #Legend, #Points -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Hardware Surface Unit Data.jmp");
// Graph Builder 2
Graph Builder(
	Size( 507, 444 ),
	Show Control Panel( 0 ),
	Variables(
		X( :surface quality ),
		Y( :Part )
	),
	Elements(
		Points( X, Y, Legend( 7 ) )
	)
);
```

## Example 34
> **Summary**: Open a data table and configure the Graph Builder to visualize surface quality, part, and ship event using a wrap layout with point elements.

<!-- Keywords: #GraphBuilder, #Elements, #Legend, #Points, #Size -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Hardware Surface Unit Data.jmp");
// Graph Builder 3
Graph Builder(
	Size( 569, 500 ),
	Variables(
		X( :surface quality ),
		Y( :Part ),
		Wrap( :Ship event )
	),
	Elements(
		Points( X, Y, Legend( 7 ) )
	)
);
```

## Example 35
> **Summary**: Use Graph Builder to visualize the relationship between Audience Score and Rotten Tomatoes Score, colored by the number of theaters opening in the weekend.

<!-- Keywords: #GraphBuilder, #ControlPanel, #Elements, #Legend, #Other -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Hollywood Movies.jmp");
// Graph Builder: Scores by Opening Weekend
Graph Builder(
	Size( 534, 453 ),
	Show Control Panel( 0 ),
	Variables(
		X( :Audience Score ),
		Y( :Rotten Tomatoes Score ),
		Color( :Theaters Opening Wknd )
	),
	Elements(
		Points( X, Y, Legend( 11 ) ),
		Smoother( X, Y, Legend( 12 ) )
	)
);
```

## Example 36
> **Summary**: Create a bar chart in Graph Builder to compare the mean world and domestic gross by movie genre using the HollyWood Movies dataset.

<!-- Keywords: #GraphBuilder, #BarStyle, #ControlPanel, #Elements, #Legend -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Hollywood Movies.jmp");
// Graph Builder: World and Domestic Gross by Genre
Graph Builder(
	Variables(
		X( :Genre ),
		Y( :Domestic Gross ),
		Y(
			:Foreign Gross,
			Position( 1 )
		)
	),
	Show control panel( 0 ),
	Elements(
		Bar(
			X,
			Y( 1 ),
			Y( 2 ),
			Legend( 2 ),
			Bar Style( "Side by side" ),
			Summary Statistic( "Mean" )
		)
	)
);
```

## Example 37
> **Summary**: Create a Graph Builder visualization with a Column Switcher to compare different financial metrics by genre in the Hollywood Movies dataset.

<!-- Keywords: #ColumnSwitcher, #GraphBuilder, #BarStyle, #ControlPanel, #Elements -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Hollywood Movies.jmp");
// Graph Builder and Column Switcher
Graph Builder(
	Size( 686, 572 ),
	Variables(
		X( :Genre ),
		Y( :Opening Wknd Gross )
	),
	Show Control Panel( 0 ),
	Elements(
		Bar(
			X,
			Y,
			Legend( 7 ),
			Bar Style( "Side by side" ),
			Summary Statistic( "Mean" )
		)
	),
	Column Switcher(
		Opening Wknd Gross,
		{Rotten Tomatoes Score,
		Audience Score, Domestic Gross,
		Foreign Gross, World Gross,
		Production Budget, Profitability,
		Opening Wknd Gross}
	)
);
```

## Example 38
> **Summary**: Create a line of fit using the Graph Builder platform, displaying the relationship between highway MPG and city MPG, with engine type as an overlay variable.

<!-- Keywords: #Fit, #GraphBuilder, #ConfidenceofFit, #ConfidenceofPrediction, #ControlPanel -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Hybrid Fuel Economy.jmp");
// Graph Builder Line of Fit
Graph Builder(
	Show Control Panel( 0 ),
	Variables(
		X( :Hwy MPG ),
		Y( :City MPG ),
		Overlay( :Engine )
	),
	Elements(
		Points( X, Y, Legend( 1 ) ),
		Line Of Fit(
			X,
			Y,
			Legend( 3 ),
			Confidence of Fit( 1 ),
			Confidence of Prediction( 0 ),
			Degree( "Linear" ),
			Root Mean Square Error( 0 )
		)
	),
	SendToReport(
		Dispatch( {}, "Hwy MPG", ScaleBox,
			{Min( 15.6907762658174 ),
			Max( 45.7444636285837 ),
			Inc( 10 ), Minor Ticks( 0 )}
		),
		Dispatch( {}, "City MPG",
			ScaleBox,
			{Min( 10 ),
			Max( 51.865695479371 ),
			Inc( 10 ), Minor Ticks( 0 )}
		),
		Dispatch( {}, "graph title",
			TextEditBox,
			{
			Set Text(
				"City vs. Hwy MPG for Cars with Hybrid Versions"
			)}
		)
	)
);
```

## Example 39
> **Summary**: Create a Line Chart using Graph Builder with X-axis as Hwy MPG, Y-axis as City MPG, and Overlay by Base and include mean summary statistics for the line.

<!-- Keywords: #GraphBuilder, #ControlPanel, #Elements, #Legend, #Line -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Hybrid Fuel Economy.jmp");
// Graph Builder Line Chart
Graph Builder(
	Show Control Panel( 0 ),
	Variables(
		X( :Hwy MPG ),
		Y( :City MPG ),
		Overlay( :Base )
	),
	Elements(
		Points( X, Y, Legend( 1 ) ),
		Line(
			X,
			Y,
			Legend( 3 ),
			Row order( 0 ),
			Summary Statistic( "Mean" )
		)
	),
	SendToReport(
		Dispatch( {}, "Graph Builder",
			FrameBox,
			{Marker Size( 3 )}
		)
	)
);
```

## Example 40
> **Summary**: Create a Graph Builder contour plot with a specified overlay of species data.

<!-- Keywords: #GraphBuilder, #ControlPanel, #Elements, #Legend, #LegendPosition -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Iris.jmp");
// Graph Builder Contour Plot
Graph Builder(
	Show Control Panel( 0 ),
	Variables(
		X( :Sepal length ),
		Y( :Sepal width ),
		Overlay( :Species )
	),
	Elements(
		Contour(
			X,
			Y,
			Legend( 3 ),
			Number of Levels( 3 )
		),
		Points( X, Y, Legend( 4 ) )
	),
	SendToReport(
		Dispatch( {}, "Sepal length",
			ScaleBox,
			{Min( 4.02451368343195 ),
			Max( 8.24903846153846 ),
			Inc( 1 ), Minor Ticks( 0 )}
		),
		Dispatch( {}, "Sepal width",
			ScaleBox,
			{Min( 1.75 ),
			Max( 5.00400457665904 ),
			Inc( 1 ), Minor Ticks( 0 )}
		),
		Dispatch( {}, "400", LegendBox,
			{
			Legend Position(
				{0, 1, 2, -1, -1, -1}
			)}
		)
	)
);
```

## Example 41
> **Summary**: Create a violin plot using Graph Builder with x-axis as Sepal length and y-axis as Species.

<!-- Keywords: #GraphBuilder, #ControlPanel, #Elements, #Legend, #NumberofLevels -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Iris.jmp");
// Graph Builder Violin Plot
Graph Builder(
	Show Control Panel( 0 ),
	Show Legend( 0 ),
	Variables(
		X( :Sepal length ),
		Y( :Species )
	),
	Elements(
		Contour(
			X,
			Y,
			Legend( 2 ),
			Number of Levels( 0 )
		)
	),
	SendToReport(
		Dispatch( {}, "graph title",
			TextEditBox,
			{
			Set Text(
				"Sepal length vs. Species"
			)}
		)
	)
);
```

## Example 42
> **Summary**: Create a box plot using the Graph Builder platform to visualize the distribution of sepal lengths across different species.

<!-- Keywords: #GraphBuilder, #BoxStyle, #ControlPanel, #Elements, #Jitter -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Iris.jmp");
// Graph Builder Box Plot
Graph Builder(
	Show Control Panel( 0 ),
	Show Legend( 0 ),
	Variables(
		X( :Sepal length ),
		Y( :Species )
	),
	Elements(
		Box Plot(
			X,
			Y,
			Legend( 4 ),
			Jitter( 1 ),
			Outliers( 1 ),
			Box Style( "Outlier" )
		)
	),
	SendToReport(
		Dispatch( {}, "graph title",
			TextEditBox,
			{
			Set Text(
				"Sepal length vs. Species"
			)}
		)
	)
);
```

## Example 43
> **Summary**: Generate a Graph Builder visualization with a stacked bar chart, containing a Dictionary-Derived Term on the X-axis, grouped by the Description of Planned Arm, and overlaid by the Serious Event.

<!-- Keywords: #GraphBuilder, #BarStyle, #Column, #ControlPanel, #Elements -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Nic Adverse Events.jmp");
// Dictionary-Derived Term
Graph Builder(
	Size( 694, 642 ),
	Show Control Panel( 0 ),
	Variables(
		X(
			:"Dictionary-Derived Term"n,
			Order By(
				:Total Count,
				Descending,
				Order Statistic( "Mean" )
			)
		),
		Group Y(
			Referenced Column(
				:
				Description of Planned Arm,
				Reference(
					Column(
						:
						Unique Subject Identifier
					),
					Reference(
						Column(
							:
							Description of Planned Arm
						)
					)
				)
			)
		),
		Overlay( :Serious Event )
	),
	Elements(
		Bar(
			X,
			Legend( 43 ),
			Bar Style( "Stacked" )
		)
	)
);
```

## Example 44
> **Summary**: Display Lab Results at Each Study Visit using a Graph Builder with stacked bar charts, ordered by Visit Number, wrapping Lab Test or Examination Names, and overlaying Reference Range Indicators.

<!-- Keywords: #GraphBuilder, #BarStyle, #ControlPanel, #Elements, #Legend -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Nic Labs.jmp");
// Lab Results at Each Study Visit
Graph Builder(
	Size( 724, 534 ),
	Show Control Panel( 0 ),
	Variables(
		X(
			:Visit,
			Order By(
				:Visit Number,
				Ascending,
				Order Statistic( "Mean" )
			)
		),
		Wrap(
			:Lab Test or Examination Name
		),
		Overlay(
			:Reference Range Indicator
		)
	),
	Elements(
		Bar(
			X,
			Legend( 25 ),
			Bar Style( "Stacked" )
		)
	)
);
```

## Example 45
> **Summary**: Create a treemap visualization in Graph Builder to display adverse events by treatment group, categorized by body system or organ class.

<!-- Keywords: #GraphBuilder, #Treemap, #ControlPanel, #Elements, #FittoWindow -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Nicardipine.jmp");
// Graph Builder: Adverse Event by Treatment
Graph Builder(
	Show Control Panel( 0 ),
	Show Legend( 0 ),
	Fit to Window( "Off" ),
	Variables(
		X(
			:
			Reported Term for the Adverse Event,
			Order By(
				Empty(),
				Descending,
				Order Statistic( "Mean" )
			)
		),
		Group X(
			:
			Planned Treatment for Period 01
		),
		Color(
			:Body System or Organ Class
		)
	),
	Elements(
		Treemap(
			X,
			Legend( 1 ),
			Layout( "Squarify" )
		)
	)
);
```

## Example 46
> **Summary**: Create a variable width bar chart using the Graph Builder platform to visualize sales data by outlets and pie types, with sales values in thousands.

<!-- Keywords: #GraphBuilder, #AreaStyle, #ControlPanel, #Elements, #FittoWindow -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Pie Sales.jmp");
// Variable Width Bar Chart
Graph Builder(
	Size( 514, 444 ),
	Show Control Panel( 0 ),
	Fit to Window( "Off" ),
	Variables(
		X( :Outlets ),
		Y( :"Sales (K)"n ),
		Overlay( :Pie Type )
	),
	Elements(
		Area(
			X,
			Y,
			Legend( 7 ),
			Area Style( "Overlaid" )
		)
	)
);
```

## Example 47
> **Summary**: Create box plots for yield by popcorn and batch using the Graph Builder platform .

<!-- Keywords: #GraphBuilder, #BoxStyle, #ControlPanel, #Elements, #Jitter -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Popcorn.jmp");
// Graph Builder Box Plots
Graph Builder(
	Show Control Panel( 0 ),
	Variables(
		X( :popcorn ),
		X( :batch, Position( 1 ) ),
		Y( :yield )
	),
	Elements(
		Box Plot(
			X( 1 ),
			X( 2 ),
			Y,
			Legend( 2 ),
			Jitter( 1 ),
			Outliers( 1 ),
			Box Style( "Outlier" )
		)
	)
);
```

## Example 48
> **Summary**: Generate a graph using the Graph Builder with color-coded map shapes representing the Change in Population and shaped differently based on the Metropolitan Statistical Area.

<!-- Keywords: #GraphBuilder, #ControlPanel, #Elements, #Legend, #Max -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/PopulationByMSA.jmp");
// Graph Builder
Graph Builder(
	Show Control Panel( 0 ),
	Variables(
		Color( :Change in Population ),
		Shape(
			:
			Metropolitan Statistical Area
		)
	),
	Elements(
		Map Shapes(
			Legend( 2 ),
			Summary Statistic( "Mean" ),
			Show Missing Shapes( 0 )
		)
	),
	SendToReport(
		Dispatch( {}, "", ScaleBox,
			{Min( -124.862821911553 ),
			Max( -67.2295339264016 ),
			Inc( 10 ), Minor Ticks( 0 )}
		),
		Dispatch( {}, "", ScaleBox( 2 ),
			{Min( 14.572885454726 ),
			Max( 62.7291891822812 ),
			Inc( 10 ), Minor Ticks( 0 )}
		)
	)
);
:Metropolitan Statistical Area <<
Set Property(
	"Map Role",
	{
	Shape Name Use(
		"$SAMPLE_DATA/US-MSA-Name.jmp",
		"MSA_Name"
	)}
);
```

## Example 49
> **Summary**: Create a Graph Builder map with a column switcher to visualize election data from multiple years.

<!-- Keywords: #ColumnSwitcher, #GraphBuilder, #AutoStretching, #ControlPanel, #Elements -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Presidential Elections.jmp");
// Graph Builder Map and Column Switcher 2
Graph Builder(
	Show Control Panel( 0 ),
	Auto Stretching( 0 ),
	Variables(
		Color( :"2012 Winner"n ),
		Shape( :State )
	),
	Elements(
		Map Shapes(
			Legend( 2 ),
			Summary Statistic( "Mean" ),
			Show Missing Shapes( 0 )
		)
	),
	Column Switcher(
		"2012 Winner"n,
		{"1980 Winner"n, "1984 Winner"n,
		"1988 Winner"n, "1992 Winner"n,
		"1996 Winner"n, "2000 Winner"n,
		"2004 Winner"n, "2008 Winner"n,
		"2012 Winner"n}
	)
);
```

## Example 50
> **Summary**: Create a side-by-side bar chart in Graph Builder to visualize the mean profit by product line and quarter from the Profit by Product dataset.

<!-- Keywords: #GraphBuilder, #BarStyle, #ControlPanel, #Elements, #Legend -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Profit by Product.jmp");
// Graph Builder Bar Chart
Graph Builder(
	Size( 570, 481 ),
	Show Control Panel( 0 ),
	Variables(
		X( :Product Line ),
		Y( :Profit ),
		Group X( :Quarter )
	),
	Elements(
		Bar(
			X,
			Y,
			Legend( 17 ),
			Bar Style( "Side by side" ),
			Summary Statistic( "Mean" )
		)
	),
	SendToReport(
		Dispatch( {}, "Product Line",
			ScaleBox,
			{Show Major Ticks( 0 ),
			Show Minor Ticks( 0 ),
			Rotated Labels( "Automatic" )
			}
		)
	)
);
```

## Example 51
> **Summary**: Create a line chart using the Graph Builder platform, including a smoother element to visualize the trend between Product Cost and Profit, with customized axis scales and grid lines.

<!-- Keywords: #GraphBuilder, #ControlPanel, #Elements, #Grid, #ID -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Profit by Product.jmp");
// Graph Builder Line Chart
Graph Builder(
	Size( 519, 500 ),
	Variables(
		X( :Product Cost ),
		Y( :Profit )
	),
	Elements(
		Smoother( X, Y, Legend( 16 ) )
	),
	show control panel( 0 ),
	SendToReport(
		Dispatch( {}, "Product Cost",
			ScaleBox,
			{Min( -250 ), Max( 9500 ),
			Inc( 1000 ), Minor Ticks( 0 ),
			Show Major Grid( 1 ),
			Show Minor Ticks( 0 )}
		),
		Dispatch( {}, "Profit", ScaleBox,
			{Min( -4500 ), Max( 4000 ),
			Inc( 1000 ), Minor Ticks( 0 ),
			Show Minor Ticks( 0 )}
		),
		Dispatch( {}, "Graph Builder",
			FrameBox,
			{Line Width Scale( 2 )}
		)
	)
);
```

## Example 52
> **Summary**: Create a Graph Builder line chart to visualize the average revenue, product cost, and profit by quarter, wrapped by product line.

<!-- Keywords: #GraphBuilder, #ControlPanel, #Elements, #Legend, #Line -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Profit by Product.jmp");
// Graph Builder Line Chart by Quarter
Graph Builder(
	Show Control Panel( 0 ),
	Variables(
		X( :Quarter ),
		Y( :Revenue ),
		Y( :Product Cost, Position( 1 ) ),
		Y( :Profit, Position( 1 ) ),
		Wrap( :Product Line )
	),
	Elements(
		Line(
			X,
			Y( 1 ),
			Y( 2 ),
			Y( 3 ),
			Legend( 6 ),
			Row order( 0 ),
			Summary Statistic( "Mean" )
		)
	)
);
```

## Example 53
> **Summary**: Build a Graph Builder visualization displaying the relationship between Pred Formula Proportion and Dose, with overlay by Treatment, including points and smoother elements.

<!-- Keywords: #GraphBuilder, #ControlPanel, #Elements, #Legend, #Other -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Rates.jmp");
// Graph Builder - Pred Formula Proportion vs. Dose
Graph Builder(
	Size( 531, 456 ),
	Show Control Panel( 0 ),
	Variables(
		X( :Dose ),
		Y( :Pred Formula Proportion ),
		Overlay( :Treatment )
	),
	Elements(
		Points( X, Y, Legend( 12 ) ),
		Smoother( X, Y, Legend( 13 ) )
	)
);
```

## Example 54
> **Summary**: Plot a Graph Builder bar chart showing the mean expenditures for different age cohorts, filtered for Hispanic and White non-Hispanic ethnicities.

<!-- Keywords: #DataFilter, #GraphBuilder, #AddFilter, #CloseOutline, #columns -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Simpsons Paradox.jmp");
// Graph Builder: Mean (Expenditures) vs. Age Cohort
Graph Builder(
	Size( 534, 450 ),
	Show Control Panel( 0 ),
	Variables(
		X( :Age Cohort ),
		Y( :Expenditures ),
		Overlay( :Ethnicity )
	),
	Elements( Bar( X, Y, Legend( 5 ) ) ),
	Local Data Filter(
		Close Outline( 1 ),
		Add Filter(
			columns( :Ethnicity ),
			Where(
				:Ethnicity == {"Hispanic",
				"White not Hispanic"}
			),
			Display(
				:Ethnicity,
				N Items( 8 )
			)
		)
	)
);
```

## Example 55
> **Summary**: Create an interactive graph using the Graph Builder Map function to visualize and analyze geographical data based on the % Taking (2004) and State variables.

<!-- Keywords: #GraphBuilder, #ControlPanel, #Elements, #Legend, #Max -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/SAT.jmp");
// Graph Builder Map
Graph Builder(
	Show Control Panel( 0 ),
	Variables(
		Color( :"% Taking (2004)"n ),
		Shape( :State )
	),
	Elements(
		Map Shapes(
			Legend( 2 ),
			Summary Statistic( "Mean" ),
			Show Missing Shapes( 0 )
		)
	),
	SendToReport(
		Dispatch( {}, "", ScaleBox,
			{Scale( "Geodesic" ),
			Min( -137.654643872302 ),
			Max( -63.2427990180921 ),
			Inc( 10 ), Minor Ticks( 0 )}
		),
		Dispatch( {}, "", ScaleBox( 2 ),
			{Scale( "Geodesic" ),
			Min( 16.7170042692343 ),
			Max( 80.0833409028976 ),
			Inc( 10 ), Minor Ticks( 0 )}
		)
	)
);
```

## Example 56
> **Summary**: Generate a map visualization in Graph Builder with a column switcher to toggle between different math test scores by state, using 1992 Math as the default color variable and scaling the axes geodesically.

<!-- Keywords: #ColumnSwitcher, #GraphBuilder, #ControlPanel, #Elements, #Legend -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/SAT.jmp");
// Graph Builder Map and Column Switcher
Graph Builder(
	Show Control Panel( 0 ),
	Variables(
		Color( :"1992 Math"n ),
		Shape( :State )
	),
	Elements(
		Map Shapes(
			Legend( 2 ),
			Summary Statistic( "Mean" ),
			Show Missing Shapes( 0 )
		)
	),
	Column Switcher(
		"1992 Math"n,
		{"2004 Math"n, "2003 Math"n,
		"2002 Math"n, "2001 Math"n,
		"1999 Math"n, "1994 Math"n,
		"1997 Math"n}
	),
	SendToReport(
		Dispatch( {}, "", ScaleBox,
			{Scale( "Geodesic" ),
			Min( -138 ), Max( -63 ),
			Inc( 10 ), Minor Ticks( 0 )}
		),
		Dispatch( {}, "", ScaleBox( 2 ),
			{Scale( "Geodesic" ),
			Min( 16.56640625 ),
			Max( 80.43359375 ), Inc( 10 ),
			Minor Ticks( 0 )}
		)
	)
);
```

## Example 57
> **Summary**: Create a Graph Builder Map displaying Expenditure by State with gradient color theme and mean summary statistic.

<!-- Keywords: #GraphBuilder, #LegendModel, #ColorTheme, #ControlPanel, #Elements -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/SATByYear.jmp");
// Graph Builder Map
Graph Builder(
	Size( 570, 534 ),
	Variables(
		Color( :"Expenditure (1997)"n ),
		Shape( :State )
	),
	Show Control Panel( 0 ),
	Elements(
		Map Shapes(
			Legend( 2 ),
			Summary Statistic( "Mean" ),
			Show Missing Shapes( 0 )
		)
	),
	SendToReport(
		Dispatch( {}, "", ScaleBox( 2 ),
			{Min( 17.1625267665953 ),
			Max( 57.8374732334047 ),
			Inc( 10 ), Minor Ticks( 1 )}
		),
		Dispatch( {}, "400", ScaleBox,
			{
			Legend Model(
				2,
				Properties(
					0,
					{
					gradient(
						{
						Color Theme(
							"White to Green"
						),
						Label Levels(
							[3.5 4.8 6.1
							7.4 8.7 10]
						),
						Label Format(
							"Fixed Dec",
							15, 0
						)}
					)}
				)
			)}
		)
	)
);
```

## Example 58
> **Summary**: Create a scatterplot showing the relationship between Belonging and Interest, grouped by Autonomy, with a line of fit and points, and customize the graph title and legend.

<!-- Keywords: #Fit, #GraphBuilder, #ControlPanel, #Elements, #Legend -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Secondary Students.jmp");
// Scatterplot, Belonging vs Interest grouped by Autonomy
Graph Builder(
	Size( 1478, 838 ),
	Show Control Panel( 0 ),
	Variables(
		X( :Belonging ),
		Y( :Interest ),
		Group X( :Autonomy )
	),
	Elements(
		Line Of Fit( X, Y, Legend( 16 ) ),
		Points( X, Y, Legend( 15 ) )
	),
	SendToReport(
		Dispatch( {}, "graph title",
			TextEditBox,
			{
			Set Text(
				"Interest vs. Belonging Grouped by Autonomy"
			)}
		),
		Dispatch( {}, "400", LegendBox,
			{
			Legend Position(
				{16, [1, -3], 15, [0]}
			)}
		)
	)
);
```

## Example 59
> **Summary**: Create a bar chart using Graph Builder to visualize the mean expenditures across different ethnicities, specifically focusing on Hispanic and White non-Hispanic groups. Apply a local data filter to include only these two ethnicities in the analysis.

<!-- Keywords: #DataFilter, #GraphBuilder, #AddFilter, #CloseOutline, #columns -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Simpsons Paradox.jmp");
// Graph Builder: Mean (Expenditures) vs. Ethnicity
Graph Builder(
	Size( 534, 450 ),
	Show Control Panel( 0 ),
	Variables(
		X( :Ethnicity ),
		Y( :Expenditures )
	),
	Elements( Bar( X, Y, Legend( 4 ) ) ),
	Local Data Filter(
		Close Outline( 1 ),
		Add Filter(
			columns( :Ethnicity ),
			Where(
				:Ethnicity == {"Hispanic",
				"White not Hispanic"}
			),
			Display(
				:Ethnicity,
				N Items( 8 )
			)
		)
	)
);
```

## Example 60
> **Summary**: Graph Builder: Visualize Age Cohort Counts by Ethnicity Using Local Data Filter

<!-- Keywords: #DataFilter, #GraphBuilder, #AddFilter, #CloseOutline, #columns -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Simpsons Paradox.jmp");
// Graph Builder: Age Cohort Counts by Ethnicity
Graph Builder(
	Size( 534, 450 ),
	Show Control Panel( 0 ),
	Variables(
		X( :Age Cohort ),
		Overlay( :Ethnicity )
	),
	Elements( Bar( X, Legend( 5 ) ) ),
	Local Data Filter(
		Close Outline( 1 ),
		Add Filter(
			columns( :Ethnicity ),
			Where(
				:Ethnicity == {"Hispanic",
				"White not Hispanic"}
			),
			Display(
				:Ethnicity,
				N Items( 8 )
			)
		)
	)
);
```

## Example 61
> **Summary**: Create an area chart using the Graph Builder platform to visualize the market share of different smartphone operating systems over the years, with stacked areas and summarized mean values.

<!-- Keywords: #GraphBuilder, #AreaStyle, #ControlPanel, #Elements, #Format -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Smartphone OS.jmp");
// Graph Builder Area Chart
Graph Builder(
	Show Control Panel( 0 ),
	Variables(
		X( :Year ),
		Y( :Market Share ),
		Overlay( :Operating System )
	),
	Elements(
		Area(
			X,
			Y,
			Legend( 4 ),
			Area Style( "Stacked" ),
			Summary Statistic( "Mean" )
		)
	),
	SendToReport(
		Dispatch( {}, "Market Share",
			ScaleBox,
			{Format( "Percent", 12, 0 )}
		),
		Dispatch( {}, "graph title",
			TextEditBox,
			{
			Set Text(
				"SmartPhone OS Market Share"
			)}
		)
	)
);
```

## Example 62
> **Summary**: Create a stacked bar chart using Graph Builder with mean market share by operating system and year from the Smartphone OS data table.

<!-- Keywords: #GraphBuilder, #BarStyle, #ControlPanel, #Elements, #Legend -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Smartphone OS.jmp");
// Graph Builder Bar Chart
Graph Builder(
	Show Control Panel( 0 ),
	Variables(
		X( :Year ),
		Y( :Market Share ),
		Overlay( :Operating System )
	),
	Elements(
		Bar(
			X,
			Y,
			Legend( 8 ),
			Bar Style( "Stacked" ),
			Summary Statistic( "Mean" )
		)
	),
	SendToReport(
		Dispatch( {}, "graph title",
			TextEditBox,
			{
			Set Text(
				"SmartPhone OS Market Share"
			)}
		)
	)
);
```

## Example 63
> **Summary**: Create a Graph Builder Pie Chart to visualize smartphone OS market share by operating system and year.

<!-- Keywords: #GraphBuilder, #Column, #Elements, #Footer, #Format -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Smartphone OS.jmp");
// Graph Builder Pie Chart
Graph Builder(
	Transform Column(
		"Market Share freq",
		Format( "Percent", 12, 0 ),
		Formula(
			Round( :Market Share * 1000 )
		)
	),
	Size( 645, 524 ),
	Show Footer( 0 ),
	Variables(
		X( :Operating System ),
		Wrap( :Year ),
		Frequency( :Market Share freq )
	),
	Elements( Pie( X, Legend( 6 ) ) ),
	SendToReport(
		Dispatch( {}, "graph title",
			TextEditBox,
			{
			Set Text(
				"SmartPhone OS Market Share"
			)}
		)
	)
);
```

## Example 64
> **Summary**: Create a Graph Builder Line Chart displaying the mean market share for different smartphone operating systems over the years.

<!-- Keywords: #GraphBuilder, #ControlPanel, #Elements, #Legend, #Line -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Smartphone OS.jmp");
// Graph Builder Line Chart 1
Graph Builder(
	Show Control Panel( 0 ),
	Variables(
		X( :Year ),
		Y( :Market Share ),
		Overlay( :Operating System )
	),
	Elements(
		Line(
			X,
			Y,
			Legend( 5 ),
			Row order( 0 ),
			Summary Statistic( "Mean" )
		)
	),
	SendToReport(
		Dispatch( {}, "graph title",
			TextEditBox,
			{
			Set Text(
				"Smartphone OS Market Share"
			)}
		)
	)
);
```

## Example 65
> **Summary**: Create a line chart with smoothed lines and data points, grouped by operating system, and display market share by year in Graph Builder.

<!-- Keywords: #GraphBuilder, #ControlPanel, #Elements, #Legend, #Other -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Smartphone OS.jmp");
// Graph Builder Line Chart 2
Graph Builder(
	Show Control Panel( 0 ),
	Variables(
		X( :Year ),
		Y( :Market Share ),
		Group X( :Operating System ),
		Color( :Operating System )
	),
	Elements(
		Smoother(
			X,
			Y,
			Color,
			Legend( 13 )
		),
		Points(
			X,
			Y,
			Color,
			Legend( 14 )
		)
	),
	SendToReport(
		Dispatch( {}, "graph title",
			TextEditBox,
			{
			Set Text(
				"Smartphone OS Market Share"
			)}
		)
	)
);
```

## Example 66
> **Summary**: Create a Graph Builder Bar Chart with two Y variables from a data table.

<!-- Keywords: #GraphBuilder, #ControlPanel, #Elements, #Legend, #ShowControlPanel -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Spring.jmp");
// Graph Builder Bar Chart
Graph Builder(
	Show Control Panel( 0 ),
	Variables(
		X( :date ),
		Y( :"Humid1:PM"n ),
		Y( :"Humid4:PM"n, Position( 1 ) )
	),
	Elements(
		Bar(
			X,
			Y( 1 ),
			Y( 2 ),
			Legend( 1 )
		)
	)
);
```

## Example 67
> **Summary**: Create an overlay plot with two Y variables using Graph Builder .

<!-- Keywords: #GraphBuilder, #ControlPanel, #Elements, #Legend, #LegendPosition -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Spring.jmp");
// Graph Builder Overlay Plot
Graph Builder(
	Show Control Panel( 0 ),
	Legend Position( "Bottom" ),
	Variables(
		X( :April ),
		Y( :"Humid1:PM"n ),
		Y( :"Humid4:PM"n, Position( 1 ) )
	),
	Elements(
		Points(
			X,
			Y( 1 ),
			Y( 2 ),
			Legend( 1 )
		)
	)
);
```

## Example 68
> **Summary**: Create a Graph Builder bar chart with percent vs. degree, overlaying job type and coloring by degree type, while applying a local data filter for STEM job types.

<!-- Keywords: #DataFilter, #GraphBuilder, #LegendModel, #AddFilter, #columns -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/STEM Jobs.jmp");
// Graph Builder Bars
Graph Builder(
	Size( 570, 502 ),
	Show Control Panel( 0 ),
	Variables(
		X(
			:Degree,
			Order By(
				:Percent,
				Descending,
				Order Statistic( "Mean" )
			)
		),
		Y( :Percent ),
		Overlay( :Job Type ),
		Color( :Degree Type )
	),
	Elements( Bar( X, Y, Legend( 2 ) ) ),
	Local Data Filter(
		Add Filter(
			columns( :Job Type ),
			Where( :Job Type == "STEM" )
		)
	),
	SendToReport(
		Dispatch( {}, "Percent", ScaleBox,
			{Min( 0 ), Max( 1 ),
			Inc( 0.2 ), Minor Ticks( 0 )}
		),
		Dispatch( {}, "400", ScaleBox,
			{
			Legend Model(
				2,
				Properties(
					0,
					{Fill Color( 40 )},
					Item ID( "STEM", 1 )
				),
				Properties(
					1,
					{Fill Color( 9 )},
					Item ID(
						"Non-STEM", 1
					)
				)
			)}
		)
	)
);
```

## Example 69
> **Summary**: Create a bar chart using the Graph Builder  to display the range of stock prices (Low and High) over time, with a weekly interval for the X-axis.

<!-- Keywords: #GraphBuilder, #BarStyle, #ControlPanel, #Elements, #Legend -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Stock Averages.jmp");
// Graph Builder Bar Chart 2
Graph Builder(
	Show Control Panel( 0 ),
	Variables(
		X( :Date ),
		Y( :Low ),
		Y( :High, Position( 1 ) )
	),
	Elements(
		Bar(
			X,
			Y( 1 ),
			Y( 2 ),
			Legend( 3 ),
			Bar Style( "Range" ),
			Summary Statistic( "Mean" )
		)
	),
	SendToReport(
		Dispatch( {}, "Date", ScaleBox,
			{Min( 3400704000 ),
			Max( 3408134400 ),
			Interval( "Week" ), Inc( 1 ),
			Minor Ticks( 0 ),
			Rotated Labels( "Automatic" )
			}
		),
		Dispatch( {}, "graph title",
			TextEditBox,
			{
			Set Text(
				"Stock Price Range"
			)}
		),
		Dispatch( {}, "Y title",
			TextEditBox,
			{Set Text( "Price" )}
		)
	)
);
```

## Example 70
> **Summary**: Create a multi-series bar chart in Graph Builder to visualize stock price data (Open, High, Low, Close) over time with weekly intervals.

<!-- Keywords: #GraphBuilder, #BarStyle, #ControlPanel, #Elements, #Legend -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Stock Averages.jmp");
// Graph Builder Bar Chart 1
Graph Builder(
	Show Control Panel( 0 ),
	Variables(
		X( :Date ),
		Y( :Close ),
		Y( :Low, Position( 1 ) ),
		Y( :High, Position( 1 ) ),
		Y( :Open, Position( 1 ) )
	),
	Elements(
		Bar(
			X,
			Y( 1 ),
			Y( 2 ),
			Y( 3 ),
			Y( 4 ),
			Legend( 3 ),
			Bar Style( "Stock" ),
			Summary Statistic( "Mean" )
		)
	),
	SendToReport(
		Dispatch( {}, "Date", ScaleBox,
			{Min( 3400704000 ),
			Max( 3408134400 ),
			Interval( "Week" ), Inc( 1 ),
			Minor Ticks( 0 ),
			Rotated Labels( "Automatic" )
			}
		),
		Dispatch( {}, "graph title",
			TextEditBox,
			{
			Set Text(
				"Stock Price (Open/High/Low/Close)"
			)}
		),
		Dispatch( {}, "Y title",
			TextEditBox,
			{Set Text( "Price" )}
		)
	)
);
```

## Example 71
> **Summary**: Create a Graph Builder overlay plot displaying high and low stock prices over time with major grid lines on the x-axis and horizontally oriented, left-aligned legend.

<!-- Keywords: #GraphBuilder, #ControlPanel, #Elements, #Grid, #ID -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Stock Averages.jmp");
// Graph Builder Overlay Plot
Graph Builder(
	Size( 568, 407 ),
	Show Control Panel( 0 ),
	Legend Position( "Bottom" ),
	Variables(
		X( :Date ),
		Y( :High ),
		Y( :Low, Position( 1 ) )
	),
	Elements(
		Points(
			X,
			Y( 1 ),
			Y( 2 ),
			Legend( 1 )
		)
	),
	SendToReport(
		Dispatch( {}, "Date", ScaleBox,
			{
			Label Row(
				Show Major Grid( 1 )
			)}
		),
		Dispatch( {}, "Graph Builder",
			FrameBox,
			{Marker Size( 2 )}
		),
		Dispatch( {}, "400", LegendBox,
			{Orientation( "Horizontal" ),
			Sides( "Left" )}
		)
	)
);
```

## Example 72
> **Summary**: Generate a Graph Builder overlay plot with high, low, close prices, and volume from stock price data, customizing axis scales and legend properties.

<!-- Keywords: #GraphBuilder, #ControlPanel, #Elements, #Format, #Legend -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Stock Prices.jmp");
// Graph Builder Overlay Plot
Graph Builder(
	Show Control Panel( 0 ),
	Legend Position( "Bottom" ),
	Variables(
		X( :Date ),
		Y( :High ),
		Y( :Low, Position( 1 ) ),
		Y( :Close, Position( 1 ) ),
		Y(
			:Volume,
			Position( 1 ),
			Side( "Right" )
		)
	),
	Elements(
		Points(
			X,
			Y( 1 ),
			Y( 2 ),
			Y( 3 ),
			Legend( 1 )
		),
		Points( X, Y( 4 ), Legend( 5 ) )
	),
	SendToReport(
		Dispatch( {}, "High", ScaleBox,
			{Format( "Best", 15 ),
			Min( 0 ), Max( 60 ),
			Inc( 10 ), Minor Ticks( 0 )}
		),
		Dispatch( {}, "Volume", ScaleBox,
			{Format( "Best", 15 ),
			Min( 0 ), Max( 800000000 ),
			Inc( 100000000 ),
			Minor Ticks( 0 )}
		),
		Dispatch( {}, "400", LegendBox,
			{Orientation( "Horizontal" ),
			Sides( "Left" )}
		)
	)
);
```

## Example 73
> **Summary**: Create a bar chart with interval style and summary statistic set to Max in Graph Builder for visualize high, low, and close stock prices over time using YearWeek as the X-axis variable.

<!-- Keywords: #GraphBuilder, #BarStyle, #ControlPanel, #Elements, #Legend -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Stock Prices.jmp");
// Graph Builder Bar Chart
Graph Builder(
	Show Control Panel( 0 ),
	Variables(
		X( :YearWeek ),
		Y( :High ),
		Y( :Low, Position( 1 ) ),
		Y( :Close, Position( 1 ) )
	),
	Elements(
		Bar(
			X,
			Y( 1 ),
			Y( 2 ),
			Y( 3 ),
			Legend( 1 ),
			Bar Style( "Interval" ),
			Summary Statistic( "Max" )
		)
	)
);
```

## Example 74
> **Summary**: Create a multi-vari plot in Graph Builder with Date as the X-axis, High, Low, and Close as the Y-axes, and Volume as a secondary Y-axis on the right side.

<!-- Keywords: #GraphBuilder, #ControlPanel, #Elements, #Format, #Legend -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/TechStock.jmp");
// Graph Builder
Graph Builder(
	Show Control Panel( 0 ),
	Legend Position( "Bottom" ),
	Variables(
		X( :Date ),
		Y( :High ),
		Y( :Low, Position( 1 ) ),
		Y( :Close, Position( 1 ) ),
		Y(
			:Volume,
			Position( 1 ),
			Side( "Right" )
		)
	),
	Elements(
		Points(
			X,
			Y( 1 ),
			Y( 2 ),
			Y( 3 ),
			Legend( 1 )
		),
		Points( X, Y( 4 ), Legend( 5 ) )
	),
	SendToReport(
		Dispatch( {}, "High", ScaleBox,
			{Format( "Best", 15 ),
			Min( 0 ), Max( 60 ),
			Inc( 10 ), Minor Ticks( 0 )}
		),
		Dispatch( {}, "Volume", ScaleBox,
			{Format( "Best", 15 ),
			Min( 0 ), Max( 800000000 ),
			Inc( 100000000 ),
			Minor Ticks( 0 )}
		),
		Dispatch( {}, "400", LegendBox,
			{Orientation( "Horizontal" ),
			Sides( "Left" )}
		)
	)
);
```

## Example 75
> **Summary**: Create a bar chart using Graph Builder with three Y-axes (High, Low, and Close) over the X-axis (YearWeek) from the TechStock dataset.

<!-- Keywords: #GraphBuilder, #BarStyle, #ControlPanel, #Elements, #Legend -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/TechStock.jmp");
// Graph Builder 3
Graph Builder(
	Show Control Panel( 0 ),
	Variables(
		X( :YearWeek ),
		Y( :High ),
		Y( :Low, Position( 1 ) ),
		Y( :Close, Position( 1 ) )
	),
	Elements(
		Bar(
			X,
			Y( 1 ),
			Y( 2 ),
			Y( 3 ),
			Legend( 1 ),
			Bar Style( "Interval" )
		)
	)
);
```

## Example 76
> **Summary**: Create a Mosaic Plot in Graph Builder using categorical variables (Passenger Class and Sex) and display survival outcomes by adjusting the color scheme for clarity.

<!-- Keywords: #GraphBuilder, #LegendModel, #ControlPanel, #Elements, #Legend -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Titanic Passengers.jmp");
// Graph Builder Mosaic Plot
Graph Builder(
	Show Control Panel( 0 ),
	Variables(
		X( :Passenger Class ),
		Y( :Survived ),
		Group X( :Sex )
	),
	Elements(
		Mosaic(
			X,
			Y,
			Legend( 4 ),
			Vertical
		)
	),
	SendToReport(
		Dispatch( {}, "400", ScaleBox,
			{
			Legend Model(
				4,
				Properties(
					0,
					{Fill Color( 72 )}
				),
				Properties(
					1,
					{Fill Color( 69 )}
				)
			)}
		),
		Dispatch( {}, "graph title",
			TextEditBox,
			{
			Set Text(
				"Survived vs. Passenger Class and Sex"
			)}
		)
	)
);
```

## Example 77
> **Summary**: Create a scatter plot of Net Costs using the Graph Builder function .

<!-- Keywords: #GraphBuilder, #Elements, #Jitter, #Legend, #Points -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Travel Costs.jmp");
// Graph Builder - Net Costs
Graph Builder(
	Variables( X( :Net Cost ) ),
	Elements(
		Points(
			X,
			Legend( 3 ),
			Jitter( 1 )
		)
	)
);
```

## Example 78
> **Summary**: Create a Graph Builder plot with departure day of week as a categorical variable, net cost as the response variable, grouped by class of service, and overlaid by airline, using points with jitter.

<!-- Keywords: #GraphBuilder, #Elements, #Jitter, #Legend, #Overlay -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Travel Costs.jmp");
// Graph Builder - Root Cause
Graph Builder(
	Variables(
		X( :Net Cost ),
		Y(
			:Departure Day of Week,
			Size( 74 )
		),
		Group Y( :Class of Service ),
		Overlay( :Airline )
	),
	Elements(
		Points(
			X,
			Y,
			Legend( 6 ),
			Jitter( 1 )
		)
	)
);
```

## Example 79
> **Summary**: Create a Graph Builder Bar Chart to Compare 95% Confidence Intervals for Different Treatments and Sexes.

<!-- Keywords: #GraphBuilder, #BarStyle, #ControlPanel, #Elements, #Legend -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Treatment.jmp");
// Graph Builder Bar Chart 1
Graph Builder(
	Show Control Panel( 0 ),
	Variables(
		X( :Treatment ),
		Y( :Lower 95% ),
		Y( :Upper 95%, Position( 1 ) ),
		Y( :Mean, Position( 1 ) ),
		Overlay( :Sex )
	),
	Elements(
		Bar(
			X,
			Y( 1 ),
			Y( 2 ),
			Y( 3 ),
			Legend( 3 ),
			Bar Style( "Interval" ),
			Summary Statistic( "Mean" )
		)
	),
	SendToReport(
		Dispatch( {}, "graph title",
			TextEditBox,
			{
			Set Text(
				"Comparing 95% Confidence Intervals"
			)}
		),
		Dispatch( {}, "Y title",
			TextEditBox,
			{Set Text( "Measure" )}
		)
	)
);
```

## Example 80
> **Summary**: Create an interactive choropleth map and column switcher for exploring different demographic variables in the US Demographics data using Graph Builder .

<!-- Keywords: #ColumnSwitcher, #GraphBuilder, #BackgroundMap, #ControlPanel, #Elements -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/US Demographics.jmp");
// Graph Builder Map and Column Switcher
Graph Builder(
	Show Control Panel( 0 ),
	Variables(
		Color( :Physical Activity ),
		Shape( :State )
	),
	Elements(
		Map Shapes(
			Legend( 2 ),
			Summary Statistic( "Mean" ),
			Show Missing Shapes( 0 )
		)
	),
	Column Switcher(
		Physical Activity,
		{Vegetable Consumption, Smokers,
		Obese, Alcohol Consumption}
	),
	SendToReport(
		Dispatch( {}, "Graph Builder",
			FrameBox,
			{
			Background Map(
				Boundaries( "US States" )
			), Grid Line Order( 2 ),
			Reference Line Order( 3 )}
		)
	)
);
```

## Example 81
> **Summary**: Perform exploratory data analysis using Graph Builder with multiple Y variables and interactive Column Switcher to explore relationships between Household Income and various demographic factors like Obese, Smokers, Vegetable Consumption, and Alcohol Consumption.

<!-- Keywords: #ColumnSwitcher, #GraphBuilder, #ControlPanel, #Legend, #ShowControlPanel -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/US Demographics.jmp");
// Graph Builder Smoother and Column Switcher
Graph Builder(
	Show Control Panel( 0 ),
	Show Legend( 0 ),
	Variables(
		X( :Household Income ),
		Y( :Obese ),
		Y( :Smokers ),
		Y( :Vegetable Consumption ),
		Y( :Alcohol Consumption )
	),
	Column Switcher(
		Household Income,
		{Household Income,
		High School Graduates,
		Gross State Product,
		College Degrees}
	)
);
```

## Example 82
> **Summary**: Create a Graph Builder Map displaying 2008 Election State Winners, where map shapes are sized based on the number of electors using the Color, Size, and Shape variables, and adjust the legend and graph title accordingly.

<!-- Keywords: #GraphBuilder, #LegendModel, #ControlPanel, #Elements, #Legend -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/US Election 2008.jmp");
// Graph Builder Map Sized by Number of Electors
Graph Builder(
	Show Control Panel( 0 ),
	Variables(
		Color( :Winner ),
		Size( :Electors ),
		Shape( :State )
	),
	Elements(
		Map Shapes(
			Legend( 2 ),
			Summary Statistic( "Mean" ),
			Show Missing Shapes( 0 )
		)
	),
	SendToReport(
		Dispatch( {}, "400", ScaleBox,
			{
			Legend Model(
				2,
				Properties(
					0,
					{Line Color( 1 )}
				)
			)}
		),
		Dispatch( {}, "graph title",
			TextEditBox,
			{
			Set Text(
				"2008 Election State Winners sized by Number of Electors"
			)}
		)
	)
);
```

## Example 83
> **Summary**: Create a Graph Builder visualization with multiple X-axes, color-coding, and points to analyze the relationship between various factors using the Variability Data.

<!-- Keywords: #GraphBuilder, #ControlPanel, #Elements, #Legend, #Points -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Variability Data/3 Factors Crossed.jmp");
// Graph Builder
Graph Builder(
	Size( 542, 485 ),
	Show Control Panel( 0 ),
	Variables(
		X( :Instrument ),
		X( :Operator, Position( 1 ) ),
		X( :Part, Position( 1 ) ),
		Y( :new Y ),
		Color( :Instrument )
	),
	Elements(
		Points(
			X( 1 ),
			X( 2 ),
			X( 3 ),
			Y,
			Legend( 21 )
		)
	)
);
```

## Example 84
> **Summary**: Generate a graph comparing vertical and horizontal measurements using the Graph Builder platform.

<!-- Keywords: #GraphBuilder, #ControlPanel, #Elements, #Legend, #Points -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Wafer Quadrants.jmp");
// Vertical vs. Horizontal
Graph Builder(
	Size( 532, 482 ),
	Show Control Panel( 0 ),
	Variables(
		X( :Horizontal ),
		Y( :Vertical ),
		Wrap( :Layout ),
		Color( :Y )
	),
	Elements(
		Points( X, Y, Legend( 34 ) )
	)
);
```

## Example 85
> **Summary**: Generate a Graph Builder visualization displaying the relationship between Moisture and Yield, grouped by Variety, with jittering and smoothing effects.

<!-- Keywords: #GraphBuilder, #ControlPanel, #Elements, #Jitter, #Legend -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Wheat.jmp");
// Graph Builder
Graph Builder(
	Size( 825, 460 ),
	Show Control Panel( 0 ),
	Show Legend( 0 ),
	Variables(
		X( :Moisture ),
		Y( :Yield ),
		Group X( :Variety )
	),
	Elements(
		Points(
			X,
			Y,
			Legend( 1 ),
			Jitter( 1 )
		),
		Smoother( X, Y, Legend( 3 ) )
	)
);
```

## Example 86
> **Summary**: Create a Graph Builder plot with smoother line elements overlaid according to the sex variable from the World Class dataset.

<!-- Keywords: #GraphBuilder, #ControlPanel, #Elements, #Legend, #Other -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/World Class.jmp");
// Graph Builder Smoother Line
Graph Builder(
	Show Control Panel( 0 ),
	Variables(
		X( :"height (in.)"n ),
		Y( :"weight (lb.)"n ),
		Overlay( :sex )
	),
	Elements(
		Points( X, Y, Legend( 1 ) ),
		Smoother( X, Y, Legend( 2 ) )
	)
);
```

## Example 87
> **Summary**: Create line and bar charts using the Graph Builder platform .

<!-- Keywords: #GraphBuilder, #BarStyle, #ControlPanel, #Elements, #Legend -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/World Class.jmp");
// Graph Builder Line and Bar Charts
Graph Builder(
	Show Control Panel( 0 ),
	Variables(
		X( :age, Size( 15, 20 ) ),
		Y(
			:"height (in.)"n,
			Size( 38, 36 )
		),
		Y( :"weight (lb.)"n )
	),
	Elements(
		Position( 1, 1 ),
		Line(
			X,
			Y,
			Legend( 1 ),
			Row order( 0 ),
			Summary Statistic( "Mean" )
		)
	),
	Elements(
		Position( 1, 2 ),
		Bar(
			X,
			Y,
			Legend( 2 ),
			Bar Style( "Side by side" ),
			Summary Statistic( "Mean" )
		)
	)
);
```

## Example 88
> **Summary**: Generate a line chart in Graph Builder, overlaying data based on age and height with different markers for each sex to visualize mean trends and individual data points.

<!-- Keywords: #GraphBuilder, #LegendModel, #Base, #ControlPanel, #Elements -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/World Class.jmp");
// Graph Builder Line Chart
Graph Builder(
	Show Control Panel( 0 ),
	Variables(
		X( :age ),
		Y( :"height (in.)"n ),
		Overlay( :sex )
	),
	Elements(
		Line(
			X,
			Y,
			Legend( 3 ),
			Row order( 0 ),
			Summary Statistic( "Mean" )
		),
		Points(
			X,
			Y,
			Legend( 4 ),
			Jitter( 1 )
		)
	),
	SendToReport(
		Dispatch( {}, "400", ScaleBox,
			{
			Legend Model(
				4,
				Base( 0, 0, 0 ),
				Base( 1, 0, 1 ),
				Properties(
					0,
					{Marker( "Plus" )}
				),
				Properties(
					1,
					{Marker( "Square" )}
				)
			)}
		)
	)
);
```

## Example 89
> **Summary**: Create a Heatmap visualization using Graph Builder with Age on the X-axis and Sex on the Y-axis.

<!-- Keywords: #GraphBuilder, #ControlPanel, #Elements, #Legend, #ShowControlPanel -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/World Class.jmp");
// Graph Builder Heatmap
Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :age ), Y( :sex ) ),
	Elements(
		Heatmap( X, Y, Legend( 2 ) )
	)
);
```


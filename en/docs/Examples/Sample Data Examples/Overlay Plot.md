# Overlay Plot

## Example 1
> **Summary**: Generate an overlay plot

<!-- Keywords: #OverlayPlot, #Plot, #RangePlot -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Cars 1993.jmp");
// Overlay Plot
Overlay Plot(
	Y(
		:"City Mileage (MPG)"n,
		:"Highway Mileage (MPG)"n
	),
	Range Plot( 1 )
);
```

## Example 2
> **Summary**: Generate overlay plots for normal density and t with data plotted as a function

<!-- Keywords: #OverlayPlot, #FunctionPlot, #Plot, #Points, #ShowPoints -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Density Compare.jmp");
// Overlay Plot Nomal and t
Overlay Plot(
	X( :X ),
	Y( :Normal dens, :t dens5 ),
	Function Plot( 1 ),
	Show Points( 0 )
);
```

## Example 3
> **Summary**: Generate overlay plots for beta with data plotted as a function

<!-- Keywords: #OverlayPlot, #Format, #FunctionPlot, #Max, #Min -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Density Compare.jmp");
// Overlay Plot for Betas
Overlay Plot(
	X( :Xbeta ),
	Y( :beta.5.5, :beta52, :beta2.5 ),
	Overlay Axis << {{Scale( "Linear" ),
	Format( "Best" ), Min( -1 ), Max( 5 ),
	Inc( 1 ), Minor Ticks( 0 )}},
	X Axis << {{Scale( "Linear" ),
	Format( "Best" ), Min( 0.05 ),
	Max( 0.95 ), Inc( 0.1 )}},
	Function Plot( 1 ),
	Show Points( 0 ),
	SendToReport(
		Dispatch( {}, "102", ScaleBox,
			{Scale( "Linear" ),
			Format( "Best" ), Min( -1 ),
			Max( 5 ), Inc( 1 ),
			Minor Ticks( 0 )}
		),
		Dispatch( {}, "101", ScaleBox,
			{Scale( "Linear" ),
			Format( "Best" ), Min( 0.05 ),
			Max( 0.95 ), Inc( 0.1 )}
		)
	)
);
```

## Example 4
> **Summary**: Generate overlay plots for gamma with data plotted as a function

<!-- Keywords: #OverlayPlot, #FunctionPlot, #Plot, #Points, #ShowPoints -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Density Compare.jmp");
// Overlay Plot for Gammas
Overlay Plot(
	X( :Xgamma ),
	Y( :gamma1, :gamma3, :gamma5 ),
	Function Plot( 1 ),
	Show Points( 0 )
);
```

## Example 5
> **Summary**: Generate overlay plots for weibull with data plotted as a function

<!-- Keywords: #OverlayPlot, #FunctionPlot, #Plot, #Points, #ShowPoints -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Density Compare.jmp");
// Overlay Plot for Weibulls
Overlay Plot(
	X( :XWeibull ),
	Y( :Weibull11, :Weibul12, :Weibul21 ),
	Function Plot( 1 ),
	Show Points( 0 )
);
```

## Example 6
> **Summary**: Create an overlay plot comparing two Y variables against one X variable.

<!-- Keywords: #OverlayPlot, #ConnectColor, #ConnectPoints, #Plot, #Points -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Nor.jmp");
// Overlay Plot
Overlay Plot(
	X( :X ),
	Y( :Pred Y, :Y ),
	:
	Pred Y(
		Connect Points( 1 ),
		Show Points( 0 )
	),
	:Y( Connect Color( 5 ) )
);
```

## Example 7
> **Summary**: Create an overlay plot for visual comparison of multiple Y variables against a common X variable.

<!-- Keywords: #OverlayPlot, #Plot -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Normal Density Compare.jmp");
// Overlay Plot
Overlay Plot( X( :x ), Y( :y ) );
```

## Example 8
> **Summary**: Create an overlay plot displaying data from the Normal to Gamma Compare dataset.

<!-- Keywords: #OverlayPlot, #Plot -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Normal to Gamma Compare.jmp");
// Overlay Plot
Overlay Plot( X( :x ), Y( :y ) );
```

## Example 9
> **Summary**: Create an overlay plot to visualize the distribution of Portion 0-19 across different countries by year, using linear scaling on the X-axis and connect the data points.

<!-- Keywords: #OverlayPlot, #ConnectPoints, #Format, #Grid, #Grouping -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/PopAgeGroupSubset.jmp");
// Overlay Plot
Overlay Plot(
	X( :Year ),
	Y( :"Portion 0-19"n ),
	Grouping( :Country ),
	Overlay Groups,
	X Axis << {{Scale( "Linear" ),
	Format( "Best" ), Min( 1957.5 ),
	Max( 2000 ), Inc( 10 ),
	Minor Ticks( 9 ),
	Show Major Grid( 1 ),
	Show Minor Grid( 1 )}},
	Connect Points( 1 )
);
```

## Example 10
> **Summary**: Create an Overlay Plot to visualize stock prices and moving averages for XYZ stock.

<!-- Keywords: #OverlayPlot, #Plot -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/XYZ Stock Averages (plots).jmp");
// Overlay Plot: Moving Averages
Overlay Plot(
	X( :Date ),
	Y( :XYZ, :moving avg. )
);
```

## Example 11
> **Summary**: Create an overlay plot with needle plots for the high, close, and low stock prices of DJI over time.

<!-- Keywords: #OverlayPlot, #Needle, #Plot -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/XYZ Stock Averages (plots).jmp");
// Overlay Plot: Needle
Overlay Plot(
	X( :Date ),
	Y( :DJI High, :DJI Close, :DJI Low ),
	Needle( 1 )
);
```


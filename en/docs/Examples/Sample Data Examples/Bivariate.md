# Bivariate

## Example 1
> **Summary**: Perform bivariate analysis

<!-- Keywords: #Bivariate -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/AdverseR.jmp");
// Bivariate
Bivariate(
	Y( :DAY ON DRUG ),
	X( :WEIGHT )
);
```

## Example 2
> **Summary**: Build a custom 2x2 display

<!-- Keywords: #Bivariate, #Points, #ShowPoints, #Window -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Anscombe.jmp");
// The Quartet
New Window( "The Quartet",
	H List Box(
		V List Box(
			Bivariate(
				x( :x1 ),
				y( :y1 ),
				Show Points( 0 ),
				Fit Line
			),
			Bivariate(
				x( :x2 ),
				y( :y2 ),
				Show Points( 0 ),
				Fit Line
			)
		),
		V List Box(
			Bivariate(
				x( :x3 ),
				y( :y3 ),
				Show Points( 0 ),
				Fit Line
			),
			Bivariate(
				x( :x4 ),
				y( :y4 ),
				Show Points( 0 ),
				Fit Line
			)
		)
	)
);
```

## Example 3
> **Summary**: Perform a paired t-test using the bivariate platform

<!-- Keywords: #Bivariate -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/BabySleep.jmp");
// bivariate
Bivariate(
	x( Awake ),
	Y( Asleep ),
	Paired T Test
);
```

## Example 4
> **Summary**: Perform bivariate analsysis with a fit line

<!-- Keywords: #Bivariate -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Big Class.jmp");
// Bivariate
Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line
);
```

## Example 5
> **Summary**: Perform bivariate analysis with a second order polynomial fit

<!-- Keywords: #Bivariate, #FitPolynomial -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Birth Death.jmp");
// Bivariate
Bivariate(
	Y( :death ),
	X( :birth ),
	Fit Polynomial( 2 )
);
```

## Example 6
> **Summary**: Perform bivariate analysis with a t test

<!-- Keywords: #Bivariate -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Blood Pressure by Time.jmp");
// bivariate
Bivariate(
	x( BP AM ),
	Y( BP PM ),
	Paired T Test
);
```

## Example 7
> **Summary**: Builld a custom display window with four analysis placed horizontally

<!-- Keywords: #Bivariate, #Oneway, #BoxPlots, #MeanDiamonds, #Report -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Cola Heart Rate.jmp");
// Fit Y by X Group
New Window(
	"Cola Heart Rate- Fit Y by X of Heart Rate",
	H List Box(
		Oneway(
			Y( :Heart Rate ),
			X( :Drink ),
			Box Plots( 0 ),
			Mean Diamonds( 0 ),
			SendToReport(
				Dispatch( {}, "",
					NomAxisBox,
					Rotated Tick Labels(
						1
					)
				)
			)
		),
		Oneway(
			Y( :Heart Rate ),
			X( :Testers ),
			Box Plots( 0 ),
			Mean Diamonds( 0 )
		),
		Oneway(
			Y( :Heart Rate ),
			X( :"Time (Raw)"n ),
			Box Plots( 0 ),
			Mean Diamonds( 0 )
		),
		Bivariate(
			Y( :Heart Rate ),
			X( :"Time (Numeric)"n )
		)
	)
);
```

## Example 8
> **Summary**: Generate a bivariate analsys with discrete values of hue and shade

<!-- Keywords: #Bivariate -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Color Palette.jmp");
// Bivariate
Bivariate( Y( :hue axis ), X( :shade ) );
```

## Example 9
> **Summary**: Perform bivariate analysis with nonparametric density contours

<!-- Keywords: #Bivariate -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Cytometry.jmp");
// Quantile Density Contours
Bivariate(
	Y( :CD8 ),
	X( :CD3 ),
	Nonpar Density
);
```

## Example 10
> **Summary**: Perform a Bivariate Analysis to Examine the Relationship Between Difference and Mean.

<!-- Keywords: #Bivariate -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Dogs.jmp");
// Fit diff by mean
Bivariate( Y( :diff ), X( :mean ) );
```

## Example 11
> **Summary**: Perform a bivariate analysis fitting LogHist1 as the response variable and LogHist0 as the explanatory variable using the Bivariate platform.

<!-- Keywords: #Bivariate -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Dogs.jmp");
// Fit LogHist1 By LogHist0
Bivariate(
	Y( :LogHist1 ),
	X( :LogHist0 )
);
```

## Example 12
> **Summary**: Generate a bivariate analysis of speed and weight for different football positions, overlaying 50% density ellipses.

<!-- Keywords: #Bivariate, #DensityEllipse, #GroupBy -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Football.jmp");
// Bivariate by Position
Bivariate(
	Y( :Speed2 ),
	X( :Weight ),
	Group By( "Position2" ),
	Density Ellipse( 0.5 )
);
```

## Example 13
> **Summary**: Create a bivariate analysis with a fit line, quadratic fit, cubic fit, and cubic spline in the Bivariate platform.

<!-- Keywords: #Bivariate, #FitPolynomial, #FitSpline, #Line -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Growth.jmp");
// Bivariate
Bivariate(
	Y( :ratio ),
	X( :age ),
	Fit Line,
	Fit Polynomial( 2 ),
	Fit Polynomial( 3 ),
	Fit Spline( 1000 )
);
```

## Example 14
> **Summary**: Generate Passing Bablok regression plots for multiple methods comparing them to a standard measurement.

<!-- Keywords: #Bivariate, #FitGroup, #ArrangeinRows, #Group -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Method Comparison.jmp");
// Passing Bablok
Fit Group(
	Bivariate(
		Y( :Method 1 ),
		X( :Standard ),
		Fit Passing Bablok
	),
	Bivariate(
		Y( :Method 2 ),
		X( :Standard ),
		Fit Passing Bablok
	),
	Bivariate(
		Y( :Method 3 ),
		X( :Standard ),
		Fit Passing Bablok
	),
	Bivariate(
		Y( :Method 4 ),
		X( :Standard ),
		Fit Passing Bablok
	),
	<<{Arrange in Rows( 1 )}
);
```

## Example 15
> **Summary**: Imperative sentence: Create a bivariate plot of the edge variable against the nub variable using the Bivariate platform.

<!-- Keywords: #Bivariate -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Pollen.jmp");
// Bivariate
Bivariate( Y( :edge ), X( :nub ) );
```

## Example 16
> **Summary**: Create a bivariate plot to visualize the relationship between F Rate 60+ and F Rate 0-19 from the PopAgeGroup data table.

<!-- Keywords: #Bivariate, #FrameSize, #Mode, #Report, #SendToReport -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/PopAgeGroup.jmp");
// Gender Portion
Bivariate(
	Y( :"F Rate 60+"n ),
	X( :"F Rate 0-19"n ),
	SendToReport(
		Dispatch( {}, "Bivar Plot",
			FrameBox,
			{Frame Size( 706, 434 ),
			Marker Drawing Mode( "Fast" )
			}
		)
	)
);
```

## Example 17
> **Summary**: Perform a bivariate analysis with jittering and label offset settings for maximum January temperature points.

<!-- Keywords: #Bivariate, #FrameSize, #LabelOffset, #Offset, #Report -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Pollutants Map.jmp");
// Bivariate
Bivariate(
	Y( :Y ),
	X( :X ),
	SendToReport(
		Dispatch( {},
			"Bivariate Fit of Y By X",
			OutlineBox,
			{
			Set Title(
				"Highlight Maximum January Temperature Points and Label Them"
			)}
		),
		Dispatch( {}, "Bivar Plot",
			FrameBox,
			{Frame Size( 476, 313 ),
			DispatchSeg(
				Marker Seg( 1 ),
				label offset(
					{503, 25, 5},
					{566, -15, 29}
				)
			)}
		)
	)
);
```

## Example 18
> **Summary**: Create a Bivariate plot with a Linear Fit to examine the relationship between OZONE and POP.

<!-- Keywords: #Bivariate, #FitLine, #Line, #LineColor -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Polycity.jmp");
// Bivariate with Linear Fit
Bivariate(
	Y( :OZONE ),
	X( :POP ),
	Fit Line(
		{Line Color( {213, 72, 87} )}
	)
);
```

## Example 19
> **Summary**: Create a bivariate plot to visualize the relationship between the portion of the population aged 60 and above and the portion aged 0-19, adjusting the frame size and marker drawing mode.

<!-- Keywords: #Bivariate, #FrameSize, #Mode, #Report, #SendToReport -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/PopAgeGroup.jmp");
// Age Portion
Bivariate(
	Y( :"Portion60+"n ),
	X( :"Portion 0-19"n ),
	SendToReport(
		Dispatch( {}, "Bivar Plot",
			FrameBox,
			{Frame Size( 532, 339 ),
			Marker Drawing Mode( "Fast" )
			}
		)
	)
);
```

## Example 20
> **Summary**: Perform a bivariate analysis on the Hours and Temp variables using the Bivariate platform.

<!-- Keywords: #Bivariate -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Reliability/Devalt.jmp");
// Bivariate
Bivariate( Y( :Hours ), X( :Temp ) );
```

## Example 21
> **Summary**: Generate and customize a bivariate plot of weight vs. height, fitting a linear regression line.

<!-- Keywords: #Bivariate -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/World Class.jmp");
// Bivariate
Bivariate(
	Y( :"weight (lb.)"n ),
	X( :"height (in.)"n ),
	Fit Line
);
```

## Example 22
> **Summary**: Perform Bivariate Analysis on Weight and Height Data with Fit Line and Fit Robust Models

<!-- Keywords: #Bivariate, #FitLine, #FitRobust, #Line, #LineColor -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Weight Measurements.jmp");
// Bivariate
Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line(
		{Line Color( {213, 72, 87} )}
	),
	Fit Robust(
		{Line Color( {57, 177, 67} )}
	)
);
```

## Example 23
> **Summary**: Perform a bivariate analysis on infant mortality rate against crude birth rate using the World Demographics dataset.

<!-- Keywords: #Bivariate, #FrameSize, #LabelOffset, #Offset, #Report -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/World Demographics.jmp");
// Bivariate: Infant Mortality by Birth Rate
Bivariate(
	Y( :Infant Mortality Rate ),
	X( :"Crude Birth Rate (1000)"n ),
	SendToReport(
		Dispatch( {}, "Bivar Plot",
			FrameBox,
			{Frame Size( 264, 205 ),
			Marker Size( 2 ),
			DispatchSeg(
				Marker Seg( 1 ),
				label offset(
					{1, -104, 22},
					{7, 8, -4},
					{126, -2, 13},
					{160, -15, -26},
					{198, -103, -15}
				)
			)}
		)
	)
);
```


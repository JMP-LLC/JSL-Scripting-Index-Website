# Oneway

## Example 1
> **Summary**: Perform oneway analysis with means and mean diamonds

<!-- Keywords: #Oneway, #MeanDiamonds, #Means -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Big Class.jmp");
// Oneway
Oneway(
	Y( :height ),
	X( :sex ),
	Means( 1 ),
	Mean Diamonds( 1 )
);
```

## Example 2
> **Summary**: Perform oneway analysis with anova on means

<!-- Keywords: #Oneway, #MeanDiamonds -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Circuit Board Production.jmp");
// Oneway
Oneway(
	Y( :Time ),
	X( :Cost of Production ),
	"Means/Anova"n( 1 ),
	Mean Diamonds( 1 )
);
```

## Example 3
> **Summary**: Analyze and compare specific gravity and tensile strength data across different suppliers using one-way ANOVA and visualizing the results with box plots and error bars.

<!-- Keywords: #FitGroup, #Oneway, #ArrangeinRows, #BoxPlots, #ErrorBars -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Thermoplastic.jmp");
// Oneway
Fit Group(
	Oneway(
		Y( :Specific Gravity ),
		X( :Supplier ),
		Means and Std Dev( 1 ),
		Box Plots( 1 ),
		Mean Error Bars( 1 ),
		Std Dev Lines( 1 )
	),
	Oneway(
		Y( :Tensile Strength ),
		X( :Supplier ),
		Means and Std Dev( 1 ),
		Box Plots( 1 ),
		Mean Error Bars( 1 ),
		Std Dev Lines( 1 )
	),
	<<{Arrange in Rows( 1 )}
);
```

## Example 4
> **Summary**: Fit Y by X Equivalence Tests using One-Way ANOVA with pooled variance method.

<!-- Keywords: #EquivalenceTests, #Oneway, #Tests -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Drug Measurements.jmp");
// Fit Y by X Equivalence Tests
Oneway(
	Y( :Measurement ),
	X( :Drug Type ),
	Equivalence Tests(
		3, 0.05, "Pooled Variance",
		"Equivalence Trial"
	)
);
```

## Example 5
> **Summary**: Perform a one-way analysis of variance (ANOVA) to compare the means of the Toxicity response variable across different levels of the Formulation factor, visualize the results with mean diamonds and robust means lines.

<!-- Keywords: #Oneway, #MeanDiamonds, #RobustMeansLines -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Drug Toxicity.jmp");
// Oneway
Oneway(
	Y( :Toxicity ),
	X( :Formulation ),
	"Means/Anova"n( 1 ),
	Mean Diamonds( 1 ),
	Robust Means Lines( 1 )
);
```

## Example 6
> **Summary**: Analyze durability data using a oneway ANOVA to compare means across brands in the Golf Balls dataset.

<!-- Keywords: #Oneway, #ConnectMeans, #GrandMean, #Mean, #MeanLines -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Golf Balls.jmp");
// Oneway: Durability by Brand
Oneway(
	Y( :Durability ),
	X( :Brand ),
	Mean Lines( 1 ),
	Connect Means( 1 ),
	Grand Mean( 0 )
);
```

## Example 7
> **Summary**: Generate a one-way analysis of variance (ANOVA) plot for the response variable Y divided by the categorical variable surface quality, and customize the plot with box plots, mean diamonds, and colored line segments for each surface quality category.

<!-- Keywords: #Oneway, #AllPairs, #BoxPlots, #ConfidenceDiamond, #LineColor -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Hardware Surface Unit Data.jmp");
// Oneway of Y by surface quality
Oneway(
	Y( :Y ),
	X( :surface quality ),
	All Pairs( 1 ),
	Means( 1 ),
	Plot Actual by Quantile( 1 ),
	Box Plots( 1 ),
	Mean Diamonds( 1 ),
	X Axis Proportional( 0 ),
	SendToReport(
		Dispatch( {}, "Oneway Plot",
			FrameBox,
			{
			DispatchSeg(
				Box Plot Seg( 1 ),
				{Confidence Diamond( 0 ),
				Line Color( "Red" )}
			),
			DispatchSeg(
				Box Plot Seg( 2 ),
				{Confidence Diamond( 0 ),
				Line Color( "Red" )}
			),
			DispatchSeg(
				Box Plot Seg( 3 ),
				{Confidence Diamond( 0 ),
				Line Color( "Red" )}
			),
			DispatchSeg(
				Box Plot Seg( 4 ),
				{Confidence Diamond( 0 ),
				Line Color( "Red" )}
			)}
		)
	)
);
```

## Example 8
> **Summary**: Perform an Oneway analysis with Height as the response variable and Gender as the factor, displaying the means and mean diamonds on the plot.

<!-- Keywords: #Oneway, #BoxPlots, #MeanDiamonds, #Means -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Htwt12.jmp");
// Oneway
Oneway(
	Y( :Height ),
	X( :Gender ),
	Means( 1 ),
	Box Plots( 0 ),
	Mean Diamonds( 1 )
);
```

## Example 9
> **Summary**: Perform a one-way analysis of a dataset with Height as the dependent variable and Gender as the independent variable, including mean calculations and mean diamond plots.

<!-- Keywords: #Oneway, #BoxPlots, #MeanDiamonds, #Means -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Htwt15.jmp");
// Oneway
Oneway(
	Y( :Height ),
	X( :Gender ),
	Means( 1 ),
	Box Plots( 0 ),
	Mean Diamonds( 1 )
);
```

## Example 10
> **Summary**: Create a one-way chart to visualize the fuel economy (Comb MPG) by car manufacturer (Mfr Name) for gas-engine vehicles in the Hybrid Fuel Economy dataset.

<!-- Keywords: #Oneway, #FrameSize, #Report, #SendToReport, #Size -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Hybrid Fuel Economy.jmp");
// Oneway Chart
Oneway(
	Y( :Comb MPG ),
	X( :Mfr Name ),
	Where( :Engine == "Gas" ),
	SendToReport(
		Dispatch( {}, "Oneway Plot",
			FrameBox,
			{Frame Size( 412, 244 )}
		),
		Dispatch( {}, "", NomAxisBox,
			{Rotated Tick Labels( 1 )}
		)
	)
);
```

## Example 11
> **Summary**: Perform one-way analysis with matching using the Oneway function .

<!-- Keywords: #Oneway, #Column, #MatchingColumn, #MatchingLines, #XAxisProportional -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Matching.jmp");
// Oneway - Matching
Oneway(
	Y( :miles ),
	X( :season ),
	X Axis proportional( 0 ),
	Matching Lines( 1 ),
	Matching Column( subject )
);
```

## Example 12
> **Summary**: Perform a one-way ANOVA analysis on the variables Count1 and Count2 using the Brand variable as the classifier, and generate pairwise comparisons using Student's t-test and Hsu-MCB method.

<!-- Keywords: #Oneway, #Student'st -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Membrane.jmp");
// Oneway
Oneway(
	Y( :Count1, :Count2 ),
	X( :Brand ),
	Anova( 1 ),
	Student's t( 1 ),
	Hsu MCB( 1 )
);
```

## Example 13
> **Summary**: Perform a One-Way ANOVA analysis to compare the means of multiple levels of a factor.

<!-- Keywords: #Oneway -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Nonparametric.jmp");
// Oneway with Anova
Oneway(
	Y( :Gain ),
	X( :Dose ),
	Anova( 1 )
);
```

## Example 14
> **Summary**: Perform a one-way analysis of variance with nonparametric tests on the Gain variable while grouping data by the Dose variable using the Wilcoxon Test, Median Test, and van der Waerden Test.

<!-- Keywords: #Oneway, #MedianTest, #vanderWaerdenTest, #WilcoxonTest -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Nonparametric.jmp");
// Oneway with NP Tests
Oneway(
	Y( :Gain ),
	X( :Dose ),
	Wilcoxon Test( 1 ),
	Median Test( 1 ),
	van der Waerden Test( 1 )
);
```

## Example 15
> **Summary**: Perform a One-Way ANOVA analysis on temperature data using the Oneway platform, comparing Fahrenheit measurements across different thermometer types and generating various comparative visualizations, including ANOM charts and mean diamonds.

<!-- Keywords: #ANOM, #Oneway, #ComparisonCircles, #EachPair, #MeanDiamonds -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/S4 Temps.jmp");
// Oneway - Thermometers
Oneway(
	Y( :fahrenheit ),
	X( :thermometer ),
	Each Pair(
		1,
		Ordered Differences Report( 0 )
	),
	ANOM( 1 ),
	Mean Diamonds( 1 ),
	Comparison Circles( 1 ),
	SendToReport(
		Dispatch( {"Analysis of Means"},
			"ANOM Graph", FrameBox,
			{Marker Size( 4 )}
		)
	)
);
```

## Example 16
> **Summary**: Perform one-way analysis of variance comparing Fahrenheit temperatures across different types of spaces, featuring post-hoc comparisons, ANOM charts, box plots, and comparison circles.

<!-- Keywords: #ANOM, #Oneway, #BoxPlots, #ComparisonCircles, #EachPair -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/S4 Temps.jmp");
// Oneway - Type of Space
Oneway(
	Y( :fahrenheit ),
	X( :type of space ),
	Each Pair(
		1,
		LSD Threshold Matrix( 0 ),
		Ordered Differences Report( 0 )
	),
	ANOM( 1 ),
	Box Plots( 1 ),
	Comparison Circles( 1 )
);
```

## Example 17
> **Summary**: Perform a one-way ANOVA analysis on temperature data across different offices .

<!-- Keywords: #Oneway, #MarkerSelectionMode, #Mode, #Report, #SendToReport -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/S4 Temps.jmp");
// Oneway - Offices
Oneway(
	Y( :fahrenheit ),
	X( :"room/office"n ),
	SendToReport(
		Dispatch( {}, "Oneway Plot",
			FrameBox,
			{
			Marker Selection Mode(
				"Selected Haloed"
			)}
		)
	)
);
```

## Example 18
> **Summary**: Perform a one-way ANOVA analysis in the Oneway platform.

<!-- Keywords: #Block, #Oneway, #Lock, #MeanDiamonds -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Snapdragon.jmp");
// Oneway Anova
Oneway(
	Y( :Y ),
	X( :Soil ),
	Block( :Block ),
	Anova( 1 ),
	Mean Diamonds( 1 )
);
```

## Example 19
> **Summary**: Perform a One-Way ANOVA with ANOMV for Variances to analyze the relationship between weight and brand in the Spring Data dataset.

<!-- Keywords: #ANOMforVariances, #Oneway, #BoxPlots, #MeanDiamonds, #Report -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Spring Data.jmp");
// Oneway with ANOMV
Oneway(
	Y( :Weight ),
	X( :Brand ),
	ANOM for Variances(
		1,
		Show Summary Report( 1 )
	),
	Box Plots( 0 ),
	Mean Diamonds( 0 ),
	SendToReport(
		Dispatch(
			{
			"Analysis of Means for Variances"
			}, "ANOMV Graph", FrameBox,
			{Marker Size( 4 )}
		)
	)
);
```

## Example 20
> **Summary**: Conduct an Oneway analysis to compare the dissolution of tablets across different screen sizes, including all pairwise comparisons, quantiles, means, standard deviations, box plots, mean lines, confidence intervals, diamonds, error bars, standard deviation lines, and comparison circles.

<!-- Keywords: #Oneway, #AllPairs, #BoxPlots, #ComparisonCircles, #ErrorBars -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Tablet Production.jmp");
// Oneway
Oneway(
	Y( :Disso ),
	X( :Screen Size ),
	All Pairs( 1 ),
	Quantiles( 1 ),
	Means( 0 ),
	Means( 0 ),
	Means and Std Dev( 1 ),
	Box Plots( 1 ),
	Mean Lines( 1 ),
	Mean CI Lines( 1 ),
	Mean Diamonds( 1 ),
	Mean Error Bars( 1 ),
	Std Dev Lines( 1 ),
	Comparison Circles( 1 )
);
```

## Example 21
> **Summary**: Perform a one-way ANOVA analysis on typing speed data by brand.

<!-- Keywords: #Oneway, #AllPairs, #Means, #Pairs -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Typing Data.jmp");
// Oneway
Oneway(
	Y( :speed ),
	X( :brand ),
	Means( 1 ),
	All Pairs( 1 )
);
```

## Example 22
> **Summary**: Perform one-way analysis of variance to compare the mean heights (in inches) between different sexes from the World Class.jmp dataset.

<!-- Keywords: #Oneway, #MeanDiamonds, #Means -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/World Class.jmp");
// Oneway
Oneway(
	Y( :"height (in.)"n ),
	X( :sex ),
	Means( 1 ),
	Mean Diamonds( 1 )
);
```

## Example 23
> **Summary**: Analyze overall life expectancy by country development level using a one-way plot with customized settings.

<!-- Keywords: #Oneway, #BoxPlots, #FrameSize, #LabelOffset, #MeanDiamonds -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/World Demographics.jmp");
// Oneway: Life Expectancy by Development Level
Oneway(
	Y(
		:Overall Life Expectancy at Birth
	),
	X( :Development Level ),
	Box Plots( 0 ),
	Mean Diamonds( 0 ),
	SendToReport(
		Dispatch( {}, "Oneway Plot",
			FrameBox,
			{Frame Size( 387, 179 ),
			Marker Size( 2 ),
			DispatchSeg(
				Marker Seg( 1 ),
				label offset(
					{18, 15, 28},
					{88, 33, 11},
					{182, 51, 12},
					{212, 20, -11},
					{220, 13, -16}
				)
			)}
		),
		Dispatch( {}, "Development Level",
			TextEditBox,
			{
			Set Text(
				"Country Development Level"
			)}
		)
	)
);
```


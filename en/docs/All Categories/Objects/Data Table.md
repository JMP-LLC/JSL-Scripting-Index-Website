# Data Table



## Associated Constructors

### Association Analysis

**Syntax:** Association Analysis( Item( columns ), ID( columns ) )

**Description:** Identifies connections among groups of items in an independent event or transaction. Association analysis is frequently used to analyze transactional data (also called market baskets) to identify items that often appear together in transactions.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Grocery Purchases.jmp" );
obj = dt << Association Analysis( Item( :Product ), ID( :Customer ID ) );

```

### Attribute Chart

**Syntax:** Attribute Chart( Y( columns ), X( columns ) )

**Description:** Analyzes categorical measurements to show you measures of agreement across responses, such as raters.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart( Y( :A, :B, :C ), X( :Part ), Standard( :Standard ) );

```

### Bayesian Optimization

**Syntax:** Bayesian Optimization

**Description:** Recommends factor settings to optimize responses by augmenting the data table.

### Bivariate

**Syntax:** Bivariate( Y( columns ), X( columns ) )

**Description:** Models a continuous response with respect to another continuous variable. Analysis methods include fitting lines, polynomials, splines, and bivariate densities.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );

```

### Boosted Tree

**Syntax:** Boosted Tree (Y( column ), X( columns ))

**Description:** Constructs a predictive model by building a large, additive decision tree that is a sequence of smaller decision trees. Each of the trees is fit on the residuals of the previous tree.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation ),
	Go
);

```

### Bootstrap Forest

**Syntax:** Bootstrap Forest (Y( column ), X( columns ))

**Description:** Constructs a predictive model by averaging predicted values from many decision trees. Each decision tree is fit to a random bootstrap sample of the training data.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
);

```

### Bubble Plot

**Syntax:** Bubble Plot( X( column ), Y( column ), &lt;Sizes( column )&gt;, &lt;Time( column )&gt;, &lt;ID( column )&gt;, &lt;Coloring( column ) )

**Description:** Produces a two-dimensional scatterplot of bubbles that can be animated over a time variable. Additional variables can be used to size and color the bubbles.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country )
);

```

### CUSUM Control Chart

**Syntax:** CUSUM Control Chart( Y( column ), &lt;X( column )&gt;, &lt;By( column )&gt;, &lt;Data Units( 0|1 )&gt;, &lt;Show Excluded Region( 0|1 )&gt; )

**Description:** Creates a chart that plots the cumulative sums of deviations of subgroup means from a target. This chart is also called a tabular CUSUM chart.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);

```

### Categorical

**Syntax:** Categorical( Responses | Aligned Responses | Repeated Measures | Rater Agreement | Multiple Response | Multiple Response by ID | Multiple Delimited | Indicator Group | Response Frequencies( column ), X( column(s) ) )

**Description:** Summarizes and analyzes categorical response data. Data can be simple responses, multiple responses, repeated measures, rater agreement, aligned responses, or free text. Includes the ability to generate custom cross tabulations of responses.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );

```

### Cell Plot

**Syntax:** Cell Plot( Y( column(s) ), &lt;X( column )&gt; )

**Description:** Produces a rectangular grid of cells drawn with one-to-one correspondence to data table values. The cells in the grid are colored by the values in the cells.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/SAT.jmp" );
obj = dt << Cell Plot(
	Y(
		:"2004 Verbal"n, :"2004 Math"n, :"2003 Verbal"n, :"2003 Math"n, :"2002 Verbal"n,
		:"2002 Math"n, :"2001 Verbal"n, :"2001 Math"n, :"1999 Verbal"n, :"1999 Math"n,
		:"1994 Verbal"n, :"1994 Math"n, :"1997 Verbal"n, :"1997 Math"n, :"1992 Verbal"n,
		:"1992 Math"n
	)
);

```

### Choice

**Syntax:** Choice( Profile DataTable( data table ), Profile ID( column ), Profile Effects( column(s) ), &lt;Response Data Table( data table )&gt;, &lt;Subject Data Table( data table )&gt;, &lt;Response Profile ID Chosen( column )&gt;, &lt;Response Subject ID( column)&gt;, &lt;Response Grouping( column(s) )&gt;, &lt;Response Profile ID Choices( column(s) )&gt;, &lt;Profile Grouping( column(s) )&gt;, &lt;Subject Subject ID( column )&gt;, &lt;Subject Effects( column(s) )&gt; )

**Description:** Models data from a choice experiment that studies customer preferences. Estimates the probability that a specific configuration is preferred using a form of conditional logistic regression.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Combined.jmp" );
obj = Choice(
	One Table( 1 ),
	Profile DataTable( dt ),
	Profile ID( :Indicator ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	Profile Grouping( :Subject, :Trial )
);

```

### Close

**Syntax:** Close( &lt;dataTableRef|name&gt;, &lt;NoSave|Save( "path" )&gt; )

**Description:** Closes the data table referenced by the first argument, which defaults to the current data table. The second argument is used to save the data table. Use an appropriate file extension in the path to save the data table as a non-JMP format. Specifying NoSave bypasses the prompt to save or disregard changes.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
Close( dt );

```

### Cluster Variables

**Syntax:** Cluster Variables( Y( columns ) )

**Description:** Clusters variables (columns) into groups that can be represented by a single component or variable. Cluster variables can be used as a dimension reduction technique.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Cluster Variables( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );

```

### Contingency

**Syntax:** Contingency( Y( columns ), X( columns ) )

**Description:** Models a categorical response across a set of categorical groups. Analysis methods include chi-square tests and mosaic plots.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );

```

### Contour Plot

**Syntax:** Contour Plot( X( column, column ), Y( column ) )

**Description:** Produces a graph of three variables in a two-dimensional view, where the third variable is represented by contour curves of equal value.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );

```

### Contour Profiler

**Syntax:** Contour Profiler( Y( column1, column2, ... ) )

**Description:** Produces an interactive contour plot that enables you to explore how one or more predicted responses change across pairs of factors. The values of factors not used in the plot can be varied to further explore the impact of the factor settings on the predicted responses.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);

```

### Control Chart Builder

**Syntax:** Control Chart Builder( Class( "Shewhart Variables"|"Shewhart Attribute"|"Short Run"|"Rare Event" ), Variables( variables ), &lt;Chart( Position( number ), Points( Statistic( "statistic" ), &lt;points options&gt; ), Limits( Sigma( "sigma" ), &lt;limits options&gt; )&gt; ) ) )

**Description:** Enables you to interactively create control charts, which are used to determine whether a process is stable and predictable. The Control Chart Builder platform can be used to create the following types of control charts: IMR, XBar, Short Run, Run, P, NP, C, U, Laney P&apos;, Laney U&apos;, Levey-Jennings, IMR on Means, Three Way, and Rare Event charts.

**C Chart**

```jsl

Names Default To Here( 1 );
// Create a C chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Count, and changing the Sigma to Poisson.
dt = Open( "$SAMPLE_DATA/Quality Control/Orange Juice.jmp" );
obj = dt << Control Chart Builder(
	Class( "Shewhart Attribute" ),
	Variables( Subgroup( :Sample ), Y( :Status ), Phase( :Phase ) ),
	Chart( Points( Statistic( "Count" ) ), Limits( Sigma( "Poisson" ) ) )
);

```

**IMR Chart**

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );

```

**IMR on Group Standard Deviation Chart (Set Subgroup Size)**

```jsl

Names Default To Here( 1 );
// Create an IMR on Group Standard Deviation chart by adding a Y variable and defining a subgroup size, and changing the Statistic on the location chart to Standard Deviation, on the dispersion chart to Moving Range on Std Dev and the Sigma on both charts to Moving Range.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Y( :Weight ) ),
	Set Subgroup Size( 4 ),
	Chart(
		Position( 1 ),
		Points( Statistic( "Standard Deviation" ) ),
		Limits( Sigma( "Moving Range" ) )
	),
	Chart(
		Position( 2 ),
		Points( Statistic( "Moving Range on Std Dev" ) ),
		Limits( Sigma( "Moving Range" ) )
	)
);

```

**IMR on Group Standard Deviation Chart (Subgroup Variable)**

```jsl

Names Default To Here( 1 );
// Create an IMR on Group Standard Deviation chart by adding a Y variable and a subgroup variable, and changing the Statistic on the location chart to Standard Deviation, on the dispersion chart to Moving Range on Std Dev and the Sigma on both charts to Moving Range.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart(
		Position( 1 ),
		Points( Statistic( "Standard Deviation" ) ),
		Limits( Sigma( "Moving Range" ) )
	),
	Chart(
		Position( 2 ),
		Points( Statistic( "Moving Range on Std Dev" ) ),
		Limits( Sigma( "Moving Range" ) )
	)
);

```

**IMR on Means Chart (Set Subgroup Size)**

```jsl

Names Default To Here( 1 );
// Create an IMR on Means chart by adding a Y variable and defining a subgroup size, and changing the Statistic on the dispersion chart to Moving Range on Means and the Sigma on both charts to Moving Range.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Y( :Weight ) ),
	Set Subgroup Size( 4 ),
	Chart( Position( 1 ), Limits( Sigma( "Moving Range" ) ) ),
	Chart(
		Position( 2 ),
		Points( Statistic( "Moving Range on Means" ) ),
		Limits( Sigma( "Moving Range" ) )
	)
);

```

**IMR on Means Chart (Subgroup Variable)**

```jsl

Names Default To Here( 1 );
// Create an IMR on Means chart by adding a Y variable and a subgroup variable, and changing the Statistic on the dispersion chart to Moving Range on Means and the Sigma on both charts to Moving Range.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart( Position( 1 ), Limits( Sigma( "Moving Range" ) ) ),
	Chart(
		Position( 2 ),
		Points( Statistic( "Moving Range on Means" ) ),
		Limits( Sigma( "Moving Range" ) )
	)
);

```

**Levey-Jennings Chart**

```jsl

Names Default To Here( 1 );
// Create a Levey-Jennings chart by adding a Y variable, removing the dispersion chart, and changing the Sigma to Levey Jennings. Make sure that the Statistic is set to Individual.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Show Two Shewhart Charts( 0 ),
	Variables( Y( :Weight ) ),
	Chart( Points( Statistic( "Individual" ) ), Limits( Sigma( "Levey Jennings" ) ) )
);

```

**Median Moving Range Chart**

```jsl

Names Default To Here( 1 );
// Create a Median Moving Range chart by adding a Y variable and changing the Sigma to Median Moving Range on both the location and dispersion charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Y( :Weight ) ),
	Chart( Position( 1 ), Limits( Sigma( "Median Moving Range" ) ) ),
	Chart( Position( 2 ), Limits( Sigma( "Median Moving Range" ) ) )
);

```

**Median Moving Range on Group Means Chart (Set Subgroup Size)**

```jsl

Names Default To Here( 1 );
// Create a Median Moving Range on Group Means chart by adding a Y variable and defining a subgroup size, changing the Statistic on the dispersion chart to Moving Range on Means, and changing the Sigma to Median Moving Range on both the location and dispersion charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Y( :Weight ) ),
	Set Subgroup Size( 4 ),
	Chart( Position( 1 ), Limits( Sigma( "Median Moving Range" ) ) ),
	Chart(
		Position( 2 ),
		Points( Statistic( "Moving Range on Means" ) ),
		Limits( Sigma( "Median Moving Range" ) )
	)
);

```

**Median Moving Range on Group Means Chart (Subgroup Variable)**

```jsl

Names Default To Here( 1 );
// Create a Median Moving Range on Group Means chart by adding a Y variable and a subgroup variable, changing the Statistic on the dispersion chart to Moving Range on Means, and changing the Sigma to Median Moving Range on both the location and dispersion charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart( Position( 1 ), Limits( Sigma( "Median Moving Range" ) ) ),
	Chart(
		Position( 2 ),
		Points( Statistic( "Moving Range on Means" ) ),
		Limits( Sigma( "Median Moving Range" ) )
	)
);

```

**Median Moving Range on Group Standard Deviations Chart (Set Subgroup Size)**

```jsl

Names Default To Here( 1 );
// Create a Median Moving Range on Group Standard Deviations chart by adding a Y variable and defining a subgroup size, changing the Statistic on the location chart to Standard deviation, on the dispersion chart to Moving Range on Std Dev, and changing the Sigma to Median Moving Range on both the location and dispersion charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Y( :Weight ) ),
	Set Subgroup Size( 4 ),
	Chart(
		Position( 1 ),
		Points( Statistic( "Standard Deviation" ) ),
		Limits( Sigma( "Median Moving Range" ) )
	),
	Chart(
		Position( 2 ),
		Points( Statistic( "Moving Range on Std Dev" ) ),
		Limits( Sigma( "Median Moving Range" ) )
	)
);

```

**Median Moving Range on Group Standard Deviations Chart (Subgroup Variable)**

```jsl

Names Default To Here( 1 );
// Create a Median Moving Range on Group Standard Deviations chart by adding a Y variable and a subgroup variable, changing the Statistic on the location chart to Standard deviation, on the dispersion chart to Moving Range on Std Dev, and changing the Sigma to Median Moving Range on both the location and dispersion charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart(
		Position( 1 ),
		Points( Statistic( "Standard Deviation" ) ),
		Limits( Sigma( "Median Moving Range" ) )
	),
	Chart(
		Position( 2 ),
		Points( Statistic( "Moving Range on Std Dev" ) ),
		Limits( Sigma( "Median Moving Range" ) )
	)
);

```

**NP Chart**

```jsl

Names Default To Here( 1 );
// Create an NP chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Count, and changing the Sigma to Binomial (P, NP).
dt = Open( "$SAMPLE_DATA/Quality Control/Orange Juice.jmp" );
obj = dt << Control Chart Builder(
	Class( "Shewhart Attribute" ),
	Variables( Subgroup( :Sample ), Y( :Status ), Phase( :Phase ) ),
	Chart( Points( Statistic( "Count" ) ), Limits( Sigma( "Binomial" ) ) )
);

```

**P Chart**

```jsl

Names Default To Here( 1 );
// Create a P chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Proportion, and changing the Sigma to Binomial (P, NP).
dt = Open( "$SAMPLE_DATA/Quality Control/Orange Juice.jmp" );
obj = dt << Control Chart Builder(
	Class( "Shewhart Attribute" ),
	Variables( Subgroup( :Sample ), Y( :Status ), Phase( :Phase ) ),
	Chart( Points( Statistic( "Proportion" ) ), Limits( Sigma( "Binomial" ) ) )
);

```

**P' Chart**

```jsl

Names Default To Here( 1 );
// Create a P' chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Proportion, and changing the Sigma to Laney P'.
dt = Open( "$SAMPLE_DATA/Quality Control/Washers.jmp" );
obj = dt << Control Chart Builder(
	Class( "Shewhart Attribute" ),
	Variables( Subgroup( :Lot ), Y( :"# defective"n ), n Trials( :Lot Size ) ),
	Chart( Points( Statistic( "Proportion" ) ), Limits( Sigma( "Laney P Prime" ) ) )
);

```

**Rare Event G Chart**

```jsl

Names Default To Here( 1 );
// Create a G chart by changing the class to Rare Event and adding a nonnegative discrete Y variable. Make sure that the Sigma is set to Negative Binomial.
dt = Open( "$SAMPLE_DATA/Quality Control/Fan Burnout.jmp" );
obj = dt << Control Chart Builder(
	Class( "Rare Event" ),
	Variables( Subgroup( :Burnout ), Y( :Hours between Burnouts ) ),
	Chart( Points( Statistic( "Count" ) ), Limits( Sigma( "Negative Binomial" ) ) )
);

```

**Rare Event T Chart**

```jsl

Names Default To Here( 1 );
// Create a T chart by changing the class to Rare Event, changing the Sigma to Weibull, and adding a nonnegative discrete Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Fan Burnout.jmp" );
obj = dt << Control Chart Builder(
	Class( "Rare Event" ),
	Variables( Subgroup( :Burnout ), Y( :Hours between Burnouts ) ),
	Chart( Points( Statistic( "Count" ) ), Limits( Sigma( "Weibull" ) ) )
);

```

**Run Chart**

```jsl

Names Default To Here( 1 );
// Create a Run chart by adding a Y variable, turning off the limits, and removing the dispersion chart.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Show Two Shewhart Charts( 0 ),
	Show Limit Summaries( 0 ),
	Variables( Y( :Weight ) ),
	Chart( Limits( Show Lower Limit( 0 ), Show Upper Limit( 0 ) ) ),
	Show Control Panel( 0 )
);

```

**Short Run Difference Chart**

```jsl

Names Default To Here( 1 );
// Create a Short Run Difference chart by changing the class to Short Run and adding a Product or Part variable. Make sure that the Statistic values for the location chart and dispersion chart are set to Centered and Moving Range Centered, respectively. Centered Short Run control charts are sometimes referred to as Deviation from Nominal (DNOM) charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Class( "Short Run" ),
	Variables( Y( :Weight ), Part( :Product ) )
);

```

**Short Run Difference Chart for XBar**

```jsl

Names Default To Here( 1 );
// Create a Short Run Difference chart for summarized data by changing the class to Short Run and adding a Product or Part variable,  Short Run Standardized charts are sometimes referred to as Z-MR charts. Centered Short Run control charts are sometimes referred to as Deviation from Nominal (DNOM) charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Fancy Chocolate Factory.jmp" );
obj = dt << Control Chart Builder(
	Show Product Separators( 0 ),
	Class( "Short Run" ),
	Variables( Subgroup( :Box ), Y( :"%Cocoa"n ), Part( :Product ) )
);

```

**Short Run Standardized Chart**

```jsl

Names Default To Here( 1 );
// Create a Short Run Standardized chart by changing the class to Short Run and adding a Subgroup and a Product or Part variable, changing the Statistic for the location chart type to Standardized, and changing the Statistic for the dispersion chart to Moving Range Standardized. Short Run Standardized charts are sometimes referred to as Z-MR charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Class( "Short Run" ),
	Variables( Y( :Weight ), Part( :Product ) ),
	Chart( Position( 1 ), Points( Statistic( "Standardized" ) ) ),
	Chart( Position( 2 ), Points( Statistic( "Moving Range Standardized" ) ) )
);

```

**Short Run Standardized Chart for XBar**

```jsl

Names Default To Here( 1 );
// Create a Short Run Standardized chart for summarized data by changing the class to Short Run and adding a Subgroup and a Product or Part variable,  Short Run Standardized charts are sometimes referred to as Z-MR charts. Centered Short Run control charts are sometimes referred to as Deviation from Nominal (DNOM) charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Fancy Chocolate Factory.jmp" );
obj = dt << Control Chart Builder(
	Show Product Separators( 0 ),
	Class( "Short Run" ),
	Variables( Subgroup( :Box ), Y( :"%Cocoa"n ), Part( :Product ) ),
	Chart( Position( 1 ), Points( Statistic( "Standardized" ) ) ),
	Chart( Position( 2 ), Points( Statistic( "Range Standardized" ) ) )
);

```

**Three Way Chart (Set Subgroup Size)**

```jsl

Names Default To Here( 1 );
// Create a Three Way chart by adding a dispersion chart after adding a Y variable and setting a subgroup size.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Y( :Weight ) ),
	Set Subgroup Size( 4 ),
	Chart(
		Position( 1 ),
		Points( Statistic( "Average" ) ),
		Limits( Sigma( "Moving Range" ) )
	),
	Chart(
		Position( 2 ),
		Points( Statistic( "Moving Range on Means" ) ),
		Limits( Sigma( "Moving Range" ) )
	),
	Chart(
		Position( 3 ),
		Points( Statistic( "Standard Deviation" ) ),
		Limits( Sigma( "Standard Deviation" ) )
	)
);

```

**Three Way Chart (Subgroup Variable)**

```jsl

Names Default To Here( 1 );
// Create a Three Way chart by adding a dispersion chart after adding a Y variable and adding a subgroup variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart(
		Position( 1 ),
		Points( Statistic( "Average" ) ),
		Limits( Sigma( "Moving Range" ) )
	),
	Chart(
		Position( 2 ),
		Points( Statistic( "Moving Range on Means" ) ),
		Limits( Sigma( "Moving Range" ) )
	),
	Chart( Position( 3 ), Points( Statistic( "Range" ) ), Limits( Sigma( "Range" ) ) )
);

```

**U Chart**

```jsl

Names Default To Here( 1 );
// Create a U chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Proportion, and changing the Sigma to Poisson.
dt = Open( "$SAMPLE_DATA/Quality Control/Orange Juice.jmp" );
obj = dt << Control Chart Builder(
	Class( "Shewhart Attribute" ),
	Variables( Subgroup( :Sample ), Y( :Status ), Phase( :Phase ) ),
	Chart( Points( Statistic( "Proportion" ) ), Limits( Sigma( "Poisson" ) ) )
);

```

**U' Chart**

```jsl

Names Default To Here( 1 );
// Create a U' chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Proportion, and changing the Sigma to Laney U'.
dt = Open( "$SAMPLE_DATA/Quality Control/Washers.jmp" );
obj = dt << Control Chart Builder(
	Class( "Shewhart Attribute" ),
	Variables( Subgroup( :Lot ), Y( :"# defective"n ), n Trials( :Lot Size ) ),
	Chart( Points( Statistic( "Proportion" ) ), Limits( Sigma( "Laney U Prime" ) ) )
);

```

**XBar/R Chart**

```jsl

Names Default To Here( 1 );
// Create an XBar/R chart by adding a subgroup or setting a subgroup size after adding a Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ), Set Subgroup Size( 4 ) );

```

**XBar/S Chart (Set Subgroup Size)**

```jsl

Names Default To Here( 1 );
// Create an XBar/S chart by adding a Y variable and defining a subgroup size, changing the Statistic for the dispersion chart to Standard Deviation, and changing the Sigma for the location chart to Standard Deviation.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Y( :Weight ) ),
	Set Subgroup Size( 4 ),
	Chart( Position( 1 ), Limits( Sigma( "Standard Deviation" ) ) ),
	Chart(
		Position( 2 ),
		Points( Statistic( "Standard Deviation" ) ),
		Limits( Sigma( "Standard Deviation" ) )
	)
);

```

**XBar/S Chart (Subgroup Variable)**

```jsl

Names Default To Here( 1 );
// Create an XBar/S chart by adding a Y variable and a subgroup variable, changing the Statistic for the dispersion chart to Standard Deviation, and changing the Sigma for the location chart to Standard Deviation.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart( Position( 1 ), Limits( Sigma( "Standard Deviation" ) ) ),
	Chart(
		Position( 2 ),
		Points( Statistic( "Standard Deviation" ) ),
		Limits( Sigma( "Standard Deviation" ) )
	)
);

```

### Cumulative Damage

**Syntax:** Cumulative Damage

**Description:** Analyzes varying-stress and step-stress models.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );
Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );
obj = Cumulative Damage(
	Model Type( "Step Stress" ),
	Time to Event Data Table(
		Data Table( "CD Step Stress" ),
		Time to Event( :Time ),
		Censor( :Censor ),
		Pattern ID( :Pattern ID ),
		Censor Code( 1 )
	),
	Step Stress Pattern Data Table(
		Data Table( "CD Step Stress Pattern" ),
		Stress Duration( :Duration ),
		Stress( :Stress ),
		Pattern ID( :Pattern ID )
	),
	Relationship( "Inverse Power" ),
	Distribution( "Lognormal" ),
	Pattern Continuation( "Terminate" )
);

```

### Custom Profiler

**Syntax:** Custom Profiler( Y( column1, column2, ... ) )

**Description:** Provides an interface that enables you to optimize responses without a graphical output. This profiler is useful for larger problems.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Custom Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);

```

### Degradation

**Syntax:** Degradation( Y( column ), Time( column ), Application( "Repeated Measures Degradation"|"Destructive Degradation"|"Stability Test" ), &lt;X( column )&gt;, &lt;Label( column )&gt;, &lt;Freq( column )&gt;, &lt;Censor( column )&gt;, &lt;Censor Code( value )&gt;, &lt;Upper Spec Limit( value )&gt;, &lt;Lower Spec Limit( value )&gt;, &lt;Censoring Time( value )&gt; )

**Description:** Models degradation over time using linear and nonlinear curves. Analysis options include stability analysis and generation of pseudo-failure data.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
);

```

### Destructive Degradation

**Syntax:** Destructive Degradation( Y( column ), Time( column ), &lt;X( column )&gt;, &lt;Freq( column )&gt;, &lt;Censor( column ), Censor Code( value )&gt; )

**Description:** Models destructive degradation data over time.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Adhesive Bond.jmp" );
obj = dt << Destructive Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	X( :Degrees ),
	Censor( :Censor ),
	Censor Code( "Right" ),
	Model( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" ),
	Control( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" )
);

```

### Diagram

**Syntax:** Diagram( Y( column ), X( column ) )

**Description:** Creates a cause and effect diagram. Also called Ishikawa or fishbone diagrams. These are hierarchical diagrams that enable you to explore root causes.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Ishikawa.jmp" );
obj = dt << Diagram( Y( :Child ), X( :Parent ) );

```

### Discriminant

**Syntax:** Discriminant( Y( columns ), X( columns ) )

**Description:** Estimates the distance from each observation to each group&apos;s multivariate mean (centroid) using Mahalanobis distance. The observations are then classified into the group that they are closest to.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);

```

### Distance Matrix

**Syntax:** Distance Matrix( Y( columns ) )

**Description:** Computes distances between rows using a variety of methods.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Distance Matrix( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );

```

### Distribution

**Syntax:** Distribution( Column() )

**Description:** Shows the distribution and univariate summary statistics for each variable. Results and options depend on the modeling type of each variable. Some options include histograms, box plots, quantile plots, fitting distributions, and capability analysis.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
colref = Column( "age" );
// Correct way to use the colref
Distribution( Column( colref ) );
// This will not work
Distribution( colref );

```

### EMP Measurement Systems Analysis

**Syntax:** EMP Measurement Systems Analysis( Y( column ), X( columns ), Part(column), Model(Main|Crossed|Crossed with Two Factor Interactions|Nested|Crossed then Nested|Nested then Crossed), Dispersion Chart Type(Range|Standard Deviation) )

**Description:** Launches the EMP (Evaluating the Measurement Process) method for Measurement Systems Analysis. The average and dispersion (range or standard deviation) charts are displayed by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);

```

### EWMA Control Chart

**Syntax:** EWMA Control Chart( Y( column ), &lt;Subgroup( column )&gt;, &lt;By( column )&gt;, &lt;Center Data( 1 )&gt; )

**Description:** Creates a chart that plots the exponentially weighted moving averages and a chart that plots either the individual observations or the subgroup means. An EWMA chart is also known as a feedback control chart.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );

```

### Explore Missing Values

**Syntax:** Explore Missing Values( Y( columns ) )

**Description:** Find patterns of missing values and conduct imputation.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );

```

### Explore Outliers

**Syntax:** Explore Outliers( Y( columns ) )

**Description:** Identifies, explores, and manages outliers in univariate or multivariate data.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );

```

### Explore Patterns

**Syntax:** Explore Patterns( Y( columns ) )

**Description:** Searches for unusual features in the data, including long runs, duplicate long sequences, unusual formatted values, and runs of linear relationships.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
obj = dt << Explore Patterns( Y( Column Group( "Laboratory Results" ) ) );

```

### Factor Analysis

**Syntax:** Factor Analysis( Y( columns ) )

**Description:** Uncovers the underlying structure of data by extracting unobserved variables, or factors, that represent the common variability across observed variables. Factor rotation is used to increase their interpretability.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);

```

### Fatigue Model

**Syntax:** Fatigue Model( N( column ), X( column ), &lt;Freq( column )&gt;, &lt;Censor( column ), Censor Code( value )&gt; )

**Description:** Analyzes fatigue data, also known as S-N curve modeling.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Reliability/Metal Wire Z.jmp" );
obj = dt << Fatigue Model(
	N( :Cycles ),
	S( :Stress ),
	Censor( :Censoring Indicator ),
	Censor Code( "Runout" )
);

```

### Fit Curve

**Syntax:** Fit Curve( Y( column ), X( column ) )

**Description:** Fits a variety of built-in nonlinear models.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;

```

### Fit Life by X

**Syntax:** Fit Life by X( Y( column ), X( column ), Relationship( string ), Distribution( string ), &lt;Censor( column )&gt; )

**Description:** Analyzes the distribution of time-to-event data parameterized by a single regression factor. Analysis options include accelerated failure models, life distributions across groups, and transformations of regression factors.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius )
);

```

### Fit Parametric Survival

**Syntax:** Fit Model( Y( columns ), Effects( columns ), Personality( "Parametric Survival" ), Censor( columns ) )

**Description:** Fits a general linear regression model to survival times. These models can be used for survival times that can be expressed as a function of one or more explanatory variables. Takes into account various survival distributions and censoring.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);

```

### Fit Proportional Hazards

**Syntax:** Fit Model( Y( columns ), Effects( columns ), Personality( "Proportional Hazard" ), Censor( columns ) )

**Description:** Fits a semiparametric regression model (the Cox proportional hazards model) to assess the effect of explanatory variables on survival times while taking censoring into account.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);

```

### Formula Depot

**Syntax:** Formula Depot

**Description:** A container for prediction models that supports model comparison, profiling, and scoring code generation. The Formula Depot is launched through the analyze menu, Publish commands in modeling platforms, Recode, and the Formula Editor.

```jsl

Names Default To Here( 1 );

fd1 = Formula Depot();
dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
model << Publish Probability Formulas;
fd_script = fd1 << Get Script;
Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );
fd1 << Close Window;
Open( "$TEMP\fd.jrp" );
fd2 = Formula Depot[1];

```

### Functional Data Explorer

**Syntax:** Functional Data Explorer( Y(column), X(column), ID(column) )

**Description:** Fits functional models using a B-Spline, P-Spline, Fourier, or Wavelets basis model. A functional principal components analysis can be performed on the functional model to extract important features from the data. There is also an option to perform functional principal components analysis directly on the data, without fitting a basis function model first.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );

```

### Gaussian Process

**Syntax:** Gaussian Process( Y( column ), X( columns ) )

**Description:** Models the relationship between a continuous response and one or more continuous predictors as a spline with interpolation.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/2D Gaussian Process Example.jmp" );
obj = dt << Gaussian Process( Y( :Y ), X( :X1, :X2 ) );

```

### Graph Builder

**Syntax:** Graph Builder( Variables( X(column ), Y( column ), &lt;Group X( column )&gt;, &lt;Group Y( column )&gt;, &lt;Shape( column )&gt;, &lt;Color( column )&gt;, &lt;Overlay( column )&gt;, &lt;Freq( column )&gt; ), &lt;Elements(...)&gt; ) )

**Description:** Provides an interactive graphical interface that enables you to explore your data. You can drag columns into graph zones to create a variety of graphs including scatterplots, contour plots, bar charts, area charts, box plots, histograms, heat maps, pie charts, treemaps, mosaic plots, and maps.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);

```

### Hierarchical Cluster

**Syntax:** Hierarchical Cluster( Y( columns ) )

**Description:** Clusters rows based on continuous or categorical variables. Hierarchical clustering begins by treating each row as its own cluster, then successively combining two clusters at a time.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster( Y( :birth, :death ), Label( :country ) );

```

### Item Analysis

**Syntax:** Item Analysis( Y( columns ) )

**Description:** Relates a trait or ability to an individual&apos;s probability of endorsing or correctly responding to an item.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/MathScienceTest.jmp" );
obj = Item Analysis( Y( :Q1, :Q2, :Q3, :Q4, :Q5, :Q6, :Q7, :Q8, :Q9 ) );

```

### K Means Cluster

**Syntax:** K Means Cluster( Y( column(s) ), Number of Clusters( number ) )

**Description:** Clusters rows based on numeric variables in data tables with up to millions of rows. You must specify the number of clusters in advance.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;

```

### K Nearest Neighbors

**Syntax:** K Nearest Neighbors(Y( column ), X( columns ))

**Description:** Predicts a continuous or categorical response based on the responses of the k nearest neighbors in the space of the X variables.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Nearest Neighbors(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	K( 10 )
);

```

### Latent Class Analysis

**Syntax:** Latent Class Analysis( Y( column(s) ), Number of Clusters( number ) )

**Description:** Clusters rows based on categorical variables using multinomial mixtures.  You must specify the number of latent classes (clusters) in advance.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Latent Class Analysis(
	Y( :sex, :marital status, :country, :size, :type ),
	Number of Clusters( 3 )
);

```

### Life Distribution

**Syntax:** Life Distribution( Y( column(s) ) )

**Description:** Analyzes the distribution of time-to-event data. Can be used for modeling censored data, product lifetime, reliability, and competing causes.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );

```

### Logistic

**Syntax:** Logistic( Y( columns ), X( columns ) )

**Description:** Models a categorical response with respect to a continuous variable. Analysis methods include logistic regression and ROC curves.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );

```

### Make Validation Column

**Syntax:** Make Validation Column( &lt;Stratification Columns(columns)&gt;, &lt;Grouping Columns(columns)&gt;, &lt;Cutpoint Column(column)&gt;, &lt;Cutpoint Batch ID(column)&gt; )

**Description:** Makes a column used to divide the data into training, validation, and test sets.

**Cutpoint Example**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << Make Validation Column(
	Cutpoint Column( :Week of Year ),
	Cutpoint Batch ID( :ID ),
	Training Set( 0.60 ),
	Validation Set( 0.25 ),
	Test Set( 0.15 ),
	New Column Name( "Cutpoint Batch Validation" ),
	Go
);

```

**Stratification Example**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lipid Data.jmp" );
dt << Make Validation Column(
	Stratification Columns( :Gender ),
	Training Set( 0.50 ),
	Validation Set( 0.25 ),
	Test Set( 0.25 ),
	New Column Name( "Valid1" ),
	Random Seed( 1234 ),
	Go
);

```

### Manage Limits

**Syntax:** Manage Limits( Process Variables( columns ) )

**Description:** Launches utility for managing quality limits for multiple columns at once. You can add, edit, and save limits to column properties.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Manage Limits( Process Variables( dt << Get Column Group( "Processes" ) ) );

```

### Marker Admixture

**Syntax:** Marker Admixture( Marker( columns ) )

**Description:** Estimates population admixture for individuals based on marker genotypes.

**Example 1**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );

```

**Example 2**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture(
	Marker( Column Group( "Markers" ) ),
	Set(
		Missing Marker Imputation Method( "Specified" ),
		Estimation Method( "Fixed Parameter" ),
		Unthreaded( 1 ),
		Imputation Value( 1 ),
		Number of Ancestral Populations( 3 )
	),
	Fit(
		Missing Marker Imputation Method( "Specified" ),
		Estimation Method( "Fixed Parameter" ),
		Unthreaded( 1 ),
		Imputation Value( 1 ),
		Number of Ancestral Populations( 3 )
	)
);

```

### Marker Imputation

**Syntax:** Marker Imputation( Marker( columns ) )

**Description:** Imputes numeric missing marker genotypes.

**Example 1**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Set missing values for some markers
dt = Current Data Table();
nMarkers = 60; //number of markers in the data table
Random Reset( 0 ); //set seed for reproducibility
SelectedMarkers = As List( Random Index( nMarkers, 15 ) + 10 ); //random select 15 markers and return their column indexes
dt << Clear Select; //clear row selection
dt << Clear Column Selection; //clear column selection
For( i = 1, i <= N Items( SelectedMarkers ), i++, //loop over selected markers
	dt << Select Columns( SelectedMarkers[i] ); //select column in the data table
	Random Reset( i ); //set seed for reproducibility
	dt << Select Randomly( 20 ); //random select 20 rows
	sRows = dt << Get Selected Rows; //get indexes of selected rows
	Column( SelectedMarkers[i] )[sRows] = .;//set selected rows to missing values
	dt << Clear Select; //clear row selection
	dt << Clear Column Selection; //clear column selection
);

//Run platform
dt << Marker Imputation(
	Marker( Column Group( "Markers" ) ),
	Ploidy( 2 ),
	Missing Marker Imputation Method( "LD-kNN" )
);

```

**Example 2**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Set missing values for some markers
dt = Current Data Table();
nMarkers = 60; //number of markers in the data table
Random Reset( 0 ); //set seed for reproducibility
SelectedMarkers = As List( Random Index( nMarkers, 15 ) + 10 ); //random select 15 markers and return their column indexes
dt << Clear Select; //clear row selection
dt << Clear Column Selection; //clear column selection
For( i = 1, i <= N Items( SelectedMarkers ), i++, //loop over selected markers
	dt << Select Columns( SelectedMarkers[i] ); //select column in the data table
	Random Reset( i ); //set seed for reproducibility
	dt << Select Randomly( 20 ); //random select 20 rows
	sRows = dt << Get Selected Rows; //get indexes of selected rows
	Column( SelectedMarkers[i] )[sRows] = .;//set selected rows to missing values
	dt << Clear Select; //clear row selection
	dt << Clear Column Selection; //clear column selection
);

//Run platform
obj = dt << Marker Imputation(
	Marker( Column Group( "Markers" ) ),
	Ploidy( 2 ),
	Missing Marker Imputation Method( "LD-kNN" )
);

```

### Marker Relatedness

**Syntax:** Marker Relatedness( Marker( columns ) )

**Description:** Estimates several types of genomic relationship measures between pairs of individuals based genetic markers in both diploid and polyploid organisms.

**Example 1**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Run platform
dt << Marker Relatedness(
	Marker( Column Group( "Markers" ) ),
	Ploidy( 2 ),
	Set Random Seed( 12345 ),
	Missing Marker Imputation Method( "HWE Off" ),
	Kinship Type( "Identical by State" )
);

```

**Example 2**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Run platform
obj = dt << Marker Relatedness(
	Marker( Column Group( "Markers" ) ),
	Ploidy( 2 ),
	Set Random Seed( 12345 ),
	Missing Marker Imputation Method( "HWE On" ),
	Kinship Type( "Identical by State" )
);

```

### Marker Simulation

**Syntax:** Marker Simulation( Marker( columns ), Predictor Formula( columns ) )

**Description:** Simulates marker genotypes from parental crosses and computes related measures of breeding performance.

**Example 1**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

//Run platform
dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 1000 )
);

```

**Example 2**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

//Run platform
obj = dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Unthreaded( 1 ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 1000 )
);

```

### Marker Statistics

**Syntax:** Marker Statistics( Marker( columns ), With Marker( columns ) )

**Description:** Performs analysis on genetic marker data to compute measures such as minor allele frequency, Hardy-Weinberg equilibrium, and linkage disequilibrium.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
obj = dt << Marker Statistics(
	Marker( Column Group( "Markers" ) ),
	With Marker( Column Group( "Markers" ) ),
	Ploidy( 2 )
);

```

### Matched Pairs

**Syntax:** Matched Pairs( Y( columns ), X( column ) )

**Description:** Compares the means of matched sets of variables using paired t tests or simple repeated measures analysis to account for correlation between responses.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
obj = dt << Matched Pairs( X( :Dose ), Y( :BP 8M, :BP 8W ) );

```

### MaxDiff

**Syntax:** MaxDiff( Profile DataTable( data table ), Profile ID( column ), Profile Effects( column(s) ), &lt;Response Data Table( data table )&gt;, &lt;Subject Data Table( data table )&gt;, &lt;Response Profile ID Chosen( column )&gt;, &lt;Response Subject ID( column)&gt;, &lt;Response Grouping( column(s) )&gt;, &lt;Response Profile ID Choices( column(s) )&gt;, &lt;Profile Grouping( column(s) )&gt;, &lt;Subject Subject ID( column )&gt;, &lt;Subject Effects( column(s) )&gt; )

**Description:** Creates a design to find the combination of product attributes that customers most prefer and least prefer.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Potato Chip Combined.jmp" );
obj = dt << MaxDiff(
	One Table( 1 ),
	Subject ID( :Respondent ),
	Choice Set ID( :Choice Set ID ),
	Profile ID( :Response ),
	Profile Grouping( :Survey ID ),
	Profile Effects( :Profile ID ),
	Response Value Indicates Best( 1 ),
	Response Value Indicates Worst( -1 )
);

```

### Mixture Profiler

**Syntax:** Mixture Profiler( Y( column1, column2, ... ) )

**Description:** Produces an interactive ternary plot that enables you to explore the contours of the saved prediction formulas for mixture models with three or more factors.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );
obj = dt << Mixture Profiler( Y( :Pred Formula Y ) );

```

### Model Comparison

**Syntax:** Model Comparison( Predictors( columns ), Group( column ) )

**Description:** Compares performance across models using prediction formula columns.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Big Class.jmp" );
dt << Fit Model(
	Y( :weight ),
	Effects( :height ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
dt << Fit Model(
	Y( :weight ),
	Effects( :age ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
obj = Model Comparison();

```

### Model Driven Multivariate Control Chart

**Syntax:** Model Driven Multivariate Control Chart( Process( columns ) )

**Description:** Creates multivariate control charts based on principal components or partial least squares methods.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Flight Delays.jmp" );
obj = dt << Model Driven Multivariate Control Chart(
	Process( :AA, :CO, :DL, :F9, :FL, :NW, :UA, :US, :WN )
);

```

### Model Screening

**Syntax:** Model Screening( Y( column ), X( columns ) )

**Description:** Fits many different predictive models, so that you can select the best.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);

```

### Multidimensional Scaling

**Syntax:** Multidimensional Scaling( Y( columns ) )

**Description:** Creates a visual representation of the pattern of proximities among a set of objects.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Flight Distances.jmp" );
obj = dt << Multidimensional Scaling(
	Y(
		:Birmingham, :Boston, :Buffalo, :Chicago, :Cleveland, :Dallas, :Denver, :Detroit,
		:El Paso, :Houston, :Indianapolis, :Kansas City, :Los Angeles, :Louisville, :Memphis,
		:Miami, :Minneapolis, :New Orleans, :New York, :Omaha, :Philadelphia, :Phoenix,
		:Pittsburgh, :St. Louis, :Salt Lake City, :San Francisco, :Seattle, :Washington DC
	)
);

```

### Multiple Correspondence Analysis

**Syntax:** Multiple Correspondence Analysis( Y( columns ), X( columns ) )

**Description:** Identifies associations between the levels of categorical variables. Multiple Correspondence Analysis is analogous to principal components analysis for categorical data.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
dt << Multiple Correspondence Analysis(
	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),
	X( :Manufacturer )
);

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Multiple Correspondence Analysis( Y( :country, :size, :type ) );

```

### Multiple Factor Analysis

**Syntax:** Multiple Factor Analysis( MFABLocks({"Block 1", columns},{"Block 2", columns}) )

**Description:** Analyzes agreement among panelists in sensory data analysis.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,
		:Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness
		},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,
		:Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,
		:Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,
		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}
	)
);

```

### Multivariate

**Syntax:** Multivariate( Y( columns ) )

**Description:** Explores correlation and associations among numeric variables using a variety of multivariate analysis techniques. These techniques include both parametric and nonparametric measures of association, scatterplot matrices, principal components analysis, outlier analysis, and item reliability.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );

```

### Multivariate Embedding

**Syntax:** Multivariate Embedding( Y( columns ) )

**Description:** Maps data from very high-dimensional spaces to a low-dimensional space, using the Uniform Manifold Approximation and Projection (UMAP) method or the t-Distributed Stochastic Neighbor Embedding (t-SNE) method. Many times, you want to map the data to either two or three dimensions so that the low-dimensional space can be easily visualized. Both methods try to preserve the local structure of the data, but UMAP is generally faster than t-SNE for large data sets.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
/* Parameters can be changed according to data features */
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Method( "t-SNE" ),
	Maximum Iterations( 1500 ),
	Perplexity( 15 ),
	Initial Principal Component Dimensions( 55 ),
	Random Seed( 2022 ),
	Output Dimensions( 3 )
);

```

**Example 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
/* by group example */
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);

```

### Naive Bayes

**Syntax:** Naive Bayes( Y( column ), X( columns ), Method( "Naive Bayes" ) )

**Description:** Predicts group membership for a categorical variable based on the closeness of its predictor values to the predictor values for each group.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Naive Bayes(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);

```

### Neural

**Syntax:** Neural( Y( column ), X( columns ), &lt;Validation( column )&gt; )

**Description:** Predicts one or more response variables using a flexible function of the input variables. The flexible framework incorporates layering and s-shaped functions.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);

```

### New Table

**Syntax:** dt = New Table( name, &lt;visibility("private"|"invisible"|"visible")&gt;, &lt;Enable Filter Views(bool)&gt;, &lt;actions&gt; )

**Description:** Creates a new data table. "Invisible" hides the data table from view but lists it in the JMP Home Window. "Private" hides the table completely. "Visible" is the default, and creates a normal table that is visible and listed in the JMP Home Window. The optional actions arguments are any messages that data tables support.

```jsl

Names Default To Here( 1 );
dt = New Table( "Little Class",
	Add Rows( 3 ),
	New Column( "name", Character, Nominal, Set Values( {"KATIE", "LOUISE", "JANE"} ) ),
	New Column( "height", Continuous, Set Values( [59, 61, 55] ) )
);

```

### Nonlinear

**Syntax:** Nonlinear( Y( column ), X( column with predictor formula ) )

**Description:** Fits nonlinear models using least squares or a custom loss function.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );

```

### Normal Mixtures

**Syntax:** Normal Mixtures( Y( column(s) ), Number of Clusters( number ) )

**Description:** Clusters rows based on numeric variables when your data come from a mixture of overlapping multivariate normal distributions. You must specify the number of clusters in advance.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Normal Mixtures(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;

```

### Normalization

**Syntax:** Normalization( Y( columns ) )

**Description:** Adjusts for technical biases and improves suitability for subsequent analysis

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Normalization( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );

```

### Notebook

**Syntax:** nb = Notebook( name|number )

**Description:** Creates a new notebook, or returns the notebook with the provided name or index.

```jsl

Names Default To Here( 1 );

nb = Notebook();

```

### Oneway

**Syntax:** Oneway( Y( columns ), X( columns ) )

**Description:** Models a continuous response across a set of categorical groups. Analysis methods include ANOVA, means comparisons, analysis of means, and quantile plots.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );

```

### Open

**Syntax:** Open( filePath, &lt;data table options | Excel import options | text import options | SAS import options | HTML import options | esriShapeFile import options | PDF import options | other file options &gt; )

**Description:** Opens a JMP file or imports another supported file type. The open data table option &apos;Invisible&apos; hides the file from view but lists it in the JMP Home Window, &apos;Private&apos; hides the file completely. The file option &apos;Select Columns&apos; reads in only the specified columns, &apos;Ignore Columns&apos; is the inverse of &apos;Select Columns&apos;, it does not read in the specified columns. The JMP file options &apos;Column Names Only&apos; and &apos;Table Info&apos; do not read in the data, nor create a data table. &apos;Column Names Only&apos; returns the list of the data table&apos;s columns names, &apos;Table Info&apos; returns the number of columns and rows in the data table. The options &apos;FIRST(n)&apos;/&apos;LAST(n)&apos;/&apos;RANDOM(n)&apos; read in only n rows of the data table. If n is a number between 0 and 1, n is a fraction of the total number of rows in the data table.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp", ignore columns( "age" ) );

```

**Example 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp", "Column Names Only" );

```

**Example 4**

```jsl

Names Default To Here( 1 );
info = Open( "$SAMPLE_DATA/probe.jmp", "Table Info" );
Print( info );

```

**Example 5**

```jsl

Names Default To Here( 1 );
info = Open( "$SAMPLE_DATA/SATByYear.jmp", random( 10 ) );
Print( info );

```

**Example 6**

```jsl

Names Default To Here( 1 );
info = Open( "$SAMPLE_DATA/SATByYear.jmp", First( 10 ) );
Print( info );

```

### Parallel Plot

**Syntax:** Parallel Plot( Y( columns ), &lt;X( column )&gt; )

**Description:** Produces a plot of two or more variables with connecting line segments for each row.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/SAT.jmp" );
dt << Parallel Plot(
	Y(
		:"2004 Verbal"n, :"2004 Math"n, :"2003 Verbal"n, :"2003 Math"n, :"2002 Verbal"n,
		:"2002 Math"n, :"2001 Verbal"n, :"2001 Math"n, :"1999 Verbal"n, :"1999 Math"n,
		:"1994 Verbal"n, :"1994 Math"n, :"1997 Verbal"n, :"1997 Math"n, :"1992 Verbal"n,
		:"1992 Math"n
	)
);

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Parallel Plot( Y( :hist0, :hist1, :hist3, :hist5 ) );

```

### Pareto Plot

**Syntax:** Pareto Plot( Cause( column ), &lt;X( column )&gt;, &lt;Subcategory( column )&gt;, &lt;Freq( column )&gt;, &lt;Weight( column )&gt; )

**Description:** Displays the relative frequency of items in a quality-related process in decreasing order. You can define one or more classification variables to create a comparative Pareto plot.

**Group**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ) );

```

**Simple**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure Raw Data.jmp" );
obj = dt << Pareto Plot( Cause( :failure ) );

```

**Subcategory**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	Subcategory( :clean ),
	Freq( :N ),
	Subcategory Bar Style( Stacked )
);

```

### Partial Least Squares

**Syntax:** Partial Least Squares( Y( columns ), X( columns ) )

**Description:** Fits a model to one or more response variables using latent factors. This permits models to be fit when explanatory variables are highly correlated, or when there are more explanatory variables than there are observations.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	Go
);

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,
		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Go
);

```

### Predictor Screening

**Syntax:** Predictor Screening( Y( columns ), X( columns ) )

**Description:** Identifies significant predictors from a large number of candidates by using bootstrap forest partitioning to evaluate the contribution of the predictors on the response.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Bands Data.jmp" );
obj = dt << Predictor Screening( Y( :Banding? ), X( Column Group( "Predictors" ) ) );

```

### Principal Components

**Syntax:** Principal Components( Y( columns ) )

**Description:** Models the variation in a set of variables in terms of a smaller number of independent linear combinations (principal components) of those variables.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);

```

### Process Capability

**Syntax:** Process Capability( Process Variables (columns), &lt; Spec Limits() &gt; )

**Description:** Computes a process capability analysis for each process and creates graphs useful for analyzing the capability of multiple processes at one time. Specification limits can also be defined.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);

```

### Process History Explorer

**Syntax:** Process History Explorer( Y( columns ),ID( columns), X( columns ), Step( columns ), Timestamp( columns ) )

**Description:** Identifies process steps associated with poor yield.

```jsl

Names Default To Here( 1 );
dt = Open( "$sample_data\Quality Control\Lot Wafer History.jmp" );
dt2 = Open( "$sample_data\Quality Control\Lot Wafer Yield.jmp" );
obj = dt << Process History Explorer(
	ID( :Lot, :Wafer ),
	X( :Tool, :Route ),
	Step( :Layer, :Operation ),
	Timestamp( :TimeIn, :TimeOut ),
	Yield Table( "Lot Wafer Yield" ),
	Yield Columns( "Yield" )
);

```

### Process Screening

**Syntax:** Process Screening( Process Variables( columns ) )

**Description:** Examines many processes from several perspectives, including stability, capability, control chart tests, and shift (drift). Assists with the ability to focus on which processes need attention.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );

```

### Profiler

**Syntax:** Profiler( Y( column1, &lt;column2&gt;, ..., &lt;PredSE column1, PredSE column2&gt;, ... ), &lt;Expand&gt; )

**Description:** Produces an interactive graph that enables you to explore how a predicted response changes as you change factor settings. For each factor, the profiler shows prediction traces that are based on saved predictions formulas and linear constraints and illustrate how the response changes with respect to that factor. The Expand argument corresponds to the Expand Intermediate Formulas option in the launch window.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
colNum = N Items( dt << Get Column Names );
obj = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Screening" ),
	Run()
);
obj << Save Columns( Prediction Formula( 1 ), StdErr Pred Formula( 1 ) );
obj << Close Window( 1 );
predCol = Column( dt, colNum + 1 );
stderrCol = Column( dt, colNum + 2 );
dt << Profiler(
	Y( predCol, stderrCol ),
	Profiler( 1, Confidence Intervals( 1 ), ),
	Use SE Formula( 1 )
);

```

**Example 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Stochastic Optimization.jmp" );
dt << Profiler( Y( :Yield ), Profiler( 1, Desirability Functions( 1 ), ), Expand );

```

### Recurrence Analysis

**Syntax:** Recurrence Analysis( Y( column ), Cost( column ), Label( column ), &lt;Grouping( column )&gt; )

**Description:** Analyzes how a recurring event is distributed over time, per system, or until the system goes out of service.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Bladder Cancer.jmp" );
obj = dt << Recurrence Analysis(
	Y( :Age ),
	Cost( :Cost ),
	Grouping( :Treatment Group ),
	Label( :Patient Number )
);

```

### Reliability Forecast

**Syntax:** Reliability Forecast

**Description:** Predicts future failures based on observed data and future units at risk. The platform accepts several input formats. See each format for specification details.

**Dates Format**

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Reliability/Small Production part1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Reliability/Small Production part2.jmp" );

obj = dt1 << Reliability Forecast(
	Input Format( Dates ),
	Production Data Table(
		dt1,
		Production Count( :Sold Quantity ),
		Timestamp( :Sold Month )
	),
	Failure Data Table(
		dt2,
		Failure Time( :Return Month ),
		Timestamp( :Sold Month ),
		Failure Count( :Return Quantity )
	),
	Life Time Unit( Month ),
	Show Legend( 1 ),
	Show Graph Filter( 0 ),
	Forecast(
		Group( "" ),
		Risk Set( [2550, 2600, 2650, 2700, 2750, 2800, 2850] ),
		Future Risk Set(
			[3082.5, 3052.5, 3367.5, 3952.5, 3667, 3667],
			[3347740800, 3350160000, 3352579200, 3355257600, 3357849600, 3360528000]
		),
		Forecast To( "02/2011" ),
		Distribution( Weibull ),
		Contract( 6, Month ),
		Forecast Type( Sequential ),
		Interval Type( Prediction Interval ),
		Set Interval Level( 0.9 )
	),
	Forecast Options(
		Animation( 1 ),
		Interactive Configuration of Risk Sets( 1 ),
		Spreadsheet Configuration of Risk Sets( 0 ),
		Show Interval( 1 ),
		Forecasting Interval Type( Prediction Interval ),
		Use Contract Length( 1 ),
		Use Failure Cost( 0 ),
		Set Failure Cost( . ),
		Monte Carlo Sample Size( 10000 ),
		Random Seed( -1 ),
		Use Approximate Distribution( 1 )
	)
);

```

**Nevada Format**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
collist = Transform Each( {i}, 3 :: 38, Output( "List" ), Column( dt, i ) );
obj = dt << Reliability Forecast(
	Input Format( Nevada ),
	Production Count( :Volume ),
	Timestamp( :Time ),
	Failure Count( Eval List( collist ) ),
	Life Time Unit( Month ),
	Interval Censored Failure( 1 ),
	Show Legend( 0 ),
	Show Graph Filter( 0 ),
	Forecast(
		Group(),
		Risk Set(
			[1991, 2000, 1999, 2024, 1959, 1958, 2000, 2001, 1986, 1966, 1983, 2011, 2026,
			1950, 1989, 1963, 1954, 2030, 1981, 2006, 1991, 1950, 2025, 1996, 1987, 1957,
			1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045, 2018, 2036]
		),
		Forecast To( "01/2004" ),
		Distribution( Weibull ),
		Contract( 5, Month ),
		Forecast Type( Incremental ),
		Interval Type( No Interval ),
		Set Interval Level( 0.9 )
	),
	Forecast Options(
		Animation( 1 ),
		Interactive Configuration of Risk Sets( 1 ),
		Spreadsheet Configuration of Risk Sets( 0 ),
		Show Interval( 0 ),
		Forecasting Interval Type( Prediction Interval ),
		Use Contract Length( 1 ),
		Use Failure Cost( 0 ),
		Set Failure Cost( . ),
		Monte Carlo Sample Size( 10000 ),
		Random Seed( -1 ),
		Use Approximate Distribution( 1 )
	)
);

```

**Time to Event Format**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Reliability/Small Production Time to Event.jmp" );
obj = dt << Reliability Forecast(
	Input Format( Time to Event ),
	Time to Event( :"Time (Month)"n, :Time Right ),
	Freq( :Freq ),
	Life Time Unit( Month ),
	Forecast Start( Informat( "03/01/2010", "Locale Date" ) ),
	Forecast(
		Group( "" ),
		Future Risk Set( [33, 33, 33], [3352924800, 3355516800, 3358195200] ),
		Forecast To( "09/01/2010" ),
		Distribution( Weibull ),
		Contract( 5, Month ),
		Forecast Type( Incremental ),
		Interval Type( No Interval ),
		Set Interval Level( 0.9 )
	),
	Forecast Options(
		Animation( 1 ),
		Interactive Configuration of Risk Sets( 1 ),
		Spreadsheet Configuration of Risk Sets( 0 ),
		Show Interval( 0 ),
		Forecasting Interval Type( Prediction Interval ),
		Use Contract Length( 1 ),
		Use Failure Cost( 0 ),
		Set Failure Cost( [1] ),
		Monte Carlo Sample Size( 10000 ),
		Random Seed( 0 ),
		Use Approximate Distribution( 1 )
	)
);

```

### Reliability Growth

**Syntax:** obj = Reliability Growth( Input Format( Time to Event ), Time to Event( column, &lt;column&gt; ), &lt;Event Count( column )&gt;, &lt;Phase( column )&gt; );obj = Reliability Growth( Input Format( Dates ), Timestamp( column, &lt;column&gt; ), &lt;Event Count( column )&gt;, &lt;Phase( column )&gt; );obj = Reliability Growth( Input Format( Concurrent Systems ), Time to Event( column, column, ... ), System ID( column ), &lt;Phase( column )&gt; )obj = Reliability Growth( Input Format( Parallel Systems ), Time to Event( column, column, ... ), &lt;Event Count( column )&gt;, System ID( column ), &lt;Phase( column )&gt; )

**Description:** Models the change in reliability of a single repairable system over time as improvements are incorporated into its design. The platform accepts several input formats. See each format for specification details.

**Concurrent Systems**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Concurrent Systems.jmp" );
obj = dt << Reliability Growth(
	Input Format( Concurrent Systems ),
	Time to Event( :Prototype 1, :Prototype 2 ),
	System ID( :Failed System ),

);
obj << Crow AMSAA;

```

**Dates**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/BrakeReliability.jmp" );
obj = dt << Reliability Growth(
	Input Format( Dates ),
	Timestamp( :Date ),
	Event Count( :Fixes )
);

```

**Parallel Systems**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Parallel Systems Multiple Phases.jmp" );
obj = dt << Reliability Growth(
	Input Format( Parallel Systems ),
	Time to Event( :Hours ),
	Event Count( :Fixes ),
	System ID( :System ID ),
	Phase( :Phase )
);
obj << Piecewise Weibull NHPP with Different Intercepts;

```

**Time to Event**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;

```

### Repeated Measures Degradation

**Syntax:** Repeated Measures Degradation( Y( column ), Time( column ), &lt;X( column )&gt;, &lt;Freq( column )&gt;, &lt;Censor( column ), Censor Code( value )&gt; )

**Description:** Models repeated measures degradation data over time with random parameters.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Reliability/Device B.jmp" );
obj = dt << Repeated Measures Degradation(
	Y( :Power Drop ),
	Time( :Hours ),
	Label( :Device ),
	X( :Degrees C ),
	Reference Temperature( "Celsius", 195 ),
	Control( "Linear", "Linear", "First Order Kinetics Type 2" )
);

```

### Response Screening

**Syntax:** Response Screening( Y( columns ), X( columns ) )

**Description:** Automates the process of conducting tests for linear model effects across a large number of responses. Test results and summary statistics are presented in data tables and plots. The false discovery rate (FDR) guards against incorrect declarations of significance. A robust estimation method reduces the sensitivity of tests to outliers.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Probe.jmp" );
obj = dt << Response Screening( X( :Process ), Y( Eval( 8 :: 108 ) ) );

```

### Scatterplot 3D

**Syntax:** Scatterplot 3D( Y( columns ) )

**Description:** Produces a rotating three-dimensional scatterplot for three or more variables. If you specify more than three variables, you can cycle through which variables are shown in the scatterplot.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );

```

### Scatterplot Matrix

**Syntax:** Scatterplot Matrix( Y( columns ), &lt;X( columns )&gt;, &lt;Group( column )&gt;, &lt;By( column )&gt; )

**Description:** Produces a grid of scatterplots that enables you to explore bivariate relationships. If no X variables are specified, the scatterplots are for all pairs of the Y variables. If one or more X variables are specified, the scatterplots are for the Y variables plotted against the X variables.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot Matrix(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);

```

### Structural Equation Models

**Syntax:** Structural Equation Models( Model Variables ( columns ) )

**Description:** Provides a framework to fit a variety of models, including confirmatory factor analysis, path models with or without latent variables, measurement error models, and latent growth curve models.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);

```

### Support Vector Machines

**Syntax:** Support Vector Machines(Y( column ), X( columns ))

**Description:** Predicts a response based on the support vectors in the space of the X variables. One of the goals of the Support Vector Machines algorithm is to use training data to learn how to classify new data.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);

```

### Surface Plot

**Syntax:** Surface Plot( Columns() )

**Description:** Produces a rotating three-dimensional plot of points or a surface defined by a saved formula.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);

```

### Survival

**Syntax:** Survival( Y( columns ), Censor( column ), &lt;Grouping( column )&gt; )

**Description:** Calculates estimates of survival functions using the product-limit (Kaplan-Meier) method for one or more groups.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );

```

### Tabulate

**Syntax:** Tabulate( Add Table( Column Table( Analysis Columns( column(s) )|Grouping Columns( column(s))|Statistics( )), Row Table( Analysis Columns( column(s) )|Grouping Columns( column(s))|Statistics( )) )

**Description:** Creates a custom table of summary statistics of one or more variables. The variables can be grouped by one or more classification columns. Enables you to build the summary table using drag and drop operations.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);

```

### Ternary Plot

**Syntax:** Ternary Plot( Y( columns ) )

**Description:** Produces a two-dimensional plot of three mixture components that sum to a constant.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );
obj = dt << Ternary Plot( Y( :p1, :p2, :p3 ) );

```

### Text Explorer

**Syntax:** Text Explorer( Text Columns( columns ) )

**Description:** Parses words from text in a column, counts them, associates them with other columns, saves indicators, and graphs relationships.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );

```

### Time Series

**Syntax:** Time Series( Y( column ) )

**Description:** Models a series of observations over equally spaced time points. Includes a time series plot, autocorrelations, variogram, spectral density, ARIMA, seasonal ARIMA, smoothing models, and forecasts.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );

```

### Time Series Forecast

**Syntax:** Time Series Forecast( Y( column ) )

**Description:** Fits and forecasts multiple time series using specified methods.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/M3C Quarterly.jmp" );
obj = dt << Time Series Forecast( Y( :Y ), Grouping( :Series ), Time( :Time ) );

```

### Uplift

**Syntax:** Uplift( Y( column ), X( columns ), Treatment( column ) )

**Description:** Fits a recursive partition tree that selects splits to maximize treatment differences. The models identify groups of individuals who are most likely to respond to a treatment.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	New Column Name( "Valid1" ),
	Go
);
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation( :Valid1 ),
	Split Best( 3 )
);

```

### Variability Chart

**Syntax:** Variability Chart( Y( column ), X( columns ) )

**Description:** Analyzes continuous measurements to determine how your measurement system is performing. You can also perform a gauge study to see measures of variation in your data.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );

```

### Virtual Join

**Syntax:** Virtual Join

**Description:** Links a main data table to an auxiliary data table through an ID column.

Enables the main table to access columns from the auxiliary table without physically joining the tables.



The Link ID column property marks a column in the auxiliary table as the ID column.



The Link Reference column property maps a column in the main table to the ID column in the auxiliary table.

Link Reference Property lets you set data table reference or the path of the data table that you want to link.

The option &apos;Use Linked Column Name&apos; will build the linked columns with the source column name instead of the fully qualified unique name.

**Example 1**

```jsl

Names Default To Here( 1 );
cID = New Table( "Color IDs",
	Add Rows( 2 ),
	New Column( "ID", Numeric, Set Property( "Link ID", 1 ), Set Values( [1, 2] ) ),
	New Column( "color", Character, Set Values( {"magenta", "cyan"} ) )
);
cID << Save( "$temp\cID.jmp" );

Favs = New Table( "Favorite Colors",
	Add Rows( 4 ),
	New Column( "colorID",
		Numeric,
		Set Property( "Link Reference", Reference Table( "$temp\cID.jmp" ) ),
		Set Values( [1, 2, 1, 2] )
	),
	New Column( "person", Character, Set Values( {"fred", "ralph", "artemus", "neil"} ) )
);

Favs:"color[colorID]"n << hide( 0 ); // show the color column in the table, it is hidden by default

Write( "\!n", Favs:person[2], " likes ", Favs:"color[colorID]"n[2] );

Favs:colorID[2] = 1; // change ralph's color by changing his color id
Write( "\!n", Favs:person[2], " likes ", Favs:"color[colorID]"n[2] );
Favs:"color[colorID]"n << hide( 1 ) << hide( 0 );

Write( "\!nRalph's color changed." );

```

**Example 2**

```jsl

Names Default To Here( 1 );
cID = New Table( "Color IDs",
	Add Rows( 2 ),
	New Column( "ID", Numeric, Set Values( [1, 2] ) ),
	New Column( "color", Character, Set Values( {"magenta", "cyan"} ) )
);

Favs = New Table( "Favorite Colors",
	Add Rows( 4 ),
	New Column( "colorID", Numeric, Set Values( [1, 2, 1, 2] ) ),
	New Column( "person", Character, Set Values( {"fred", "ralph", "artemus", "neil"} ) )
);
cID:ID << Set Property( "Link ID", 1 );
Favs:colorID << Set Property(
	"Link Reference",
	{Reference Table( cID ), options( "use linked column name" )}
);


Favs:color << hide( 0 ); // show the color column in the table, it is hidden by default

Write( "\!n", Favs:person[2], " likes ", Favs:color[2] ); // not Favs:"color[colorID]"n

Favs:colorID[2] = 1;    // change ralph's color by changing his color id
Write( "\!n", Favs:person[2], " likes ", Favs:color[2] );

Write( "\!nRalph's color changed." );

```

**Example 3**

```jsl

Names Default To Here( 1 );

cID = New Table( "Color IDs",
	Add Rows( 2 ),
	New Column( "ID", Numeric, Set Values( [1, 2] ) ),
	New Column( "color", Character, Set Values( {"magenta", "cyan"} ) )
);

Favs = New Table( "Favorite Colors",
	Add Rows( 4 ),
	New Column( "colorID", Numeric, Set Values( [1, 2, 1, 2] ) ),
	New Column( "person", Character, Set Values( {"fred", "ralph", "artemus", "neil"} ) )
);
cID:ID << Set Property( "Link ID", 1 );
Favs:colorID << Set Property(
	"Link Reference",
	{Reference Table( cID ), options( "use linked column name"(1), "auto open" )}
);

Favs2 = New Table( "More Favorites",
	Add Rows( 4 ),
	New Column( "ID", Numeric, Set Values( [1, 2, 3, 4] ) ),
	New Column( " person", Character, Set Values( {"susie", "james", "mark", "ami"} ) )
);

// A link ID and link reference can be assigned to the same column.  The option "Auto open" will  
// automatically open the linked tables for you when you open the main referencing table.
Favs2:ID << Set Property( "Link ID", 1 );
cID:ID << Set Property(
	"Link Reference",
	{Reference Table( Favs2 ), Options( "Use Linked Column Name"(1) )}
);

Favs:color << hide( 0 ); // Show the color column in the table, it is hidden by default
Favs:ID << hide( 0 );  // Show the ID column in the table, from More Favorites table
Write( "\!n", Favs:person[2], " likes ", Favs:color[2] ); // Not Favs:"color[colorID]"n

Favs:colorID[2] = 1;    // Change ralph's color by changing his color id
Write( "\!n", Favs:person[2], " likes ", Favs:color[2] );

Write( "\!nRalph's color changed." );
cid:person << hide( 0 );

Write( "\!n", cID:person[2], " likes ", Favs:color[4] );

```

## Item Messages

### Add Properties to Table

**Syntax:** obj &lt;&lt; Add Properties to Table

**Description:** Add the properties to the table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Properties( {2, 4} );
proplist = dt << Get Selected Properties();
dt2 = New Table( "Little Class" );
dt2 << Add Properties to Table( proplist );

```

### Add Scripts to Table

**Syntax:** obj &lt;&lt; Add Scripts to Table

**Description:** This command is an alias of &apos;Add properties to table&apos;.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Properties( {2, 4} );
proplist = dt << Get Selected Properties();
dt2 = New Table( "Little Class" );
dt2 << Add scripts to table( proplist );

```

### Anonymize

**Syntax:** obj &lt;&lt; Anonymize( columns( columns ), &lt;Output Table( name )&gt; )

**Description:** Creates a new data table with unique identifiers removed.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << anonymize( columns( :name, :age ), output table name( "anonymized" ) );

```

### Apply Columns List Filter To Data Grid

**Syntax:** obj &lt;&lt; Apply Columns List Filter To Data Grid( state=0|1 )

**Description:** Turn on to apply filters in the data table Columns list to the data grid.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << Column Filter( Column Name( "tude" ) );
Wait( 1 );
dt << Apply Columns List Filter To Data Grid( 0 );
Wait( 1 );
dt << Apply Columns List Filter To Data Grid( 1 );

```

### Apply Formula

**Syntax:** dt &lt;&lt; Apply Formula([Columns(&lt;col|{cols}|Group(col, count)|&lt;group name&gt;, [Ref(&lt;name&gt;)], [List Ref(&lt;name&gt;)]]+, [Output(In Place|In Place Formula|New Formula(&lt;prefix&gt;|New Static(&lt;prefix&gt;)], [Group(&lt;name&gt;)])

**Description:** Use a formula to transform one or more columns and place the results (either as formulas or data) into new or existing columns.

At least one column group must be defined (a single column, an explicit list of columns, a run of columns, or an existing column group name).

The first group defined serves as the target if the output is &apos;in place&apos;. If needed, you can specify a name in the formula that refers to the columns taken one at a time (Ref) or as a list of columns (ListRef).

Lastly, the output type can be specified, optionally with a name and group name for new columns.

**New Data Columns/ListRef**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Data Table( "Big Class" ) << Apply Formula(
	Columns(
		Group( :height, 2 ),
		Ref( "_relative_from_height" ),
		ListRef( "height_to_weight" )
	),
	Formula( _relative_from_height / Sum( height_to_weight ) ),
	Output( New Static )
);

```

**New Formula Columns/Grouping**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Apply Formula(
	Columns( Group( :height, 2 ), Ref( "_relative_from_height" ) ),
	Formula( _relative_from_height * 2 ),
	Output( New Formula( "result", Group( "output group" ) ) )
);

```

**Simple New Formula Column**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Data Table( "Big Class" ) << Apply Formula(
	Columns( :height ),
	Formula( :height / 5 ),
	Output( New Formula )
);

```

### Begin Data Update

**Syntax:** obj &lt;&lt; Begin Data Update

**Description:** Holds all Update messages until the End Data Update command is reached. This is useful for updating many cells without interruption. This applies only to changes in data cells.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Central Limit Theorem.jmp" );
dt << Add Rows( 2000 );
dt << Distribution( Column( :"N=1"n, :"N=5"n, :"N=10"n ) );
Wait();
dt << Begin Data Update;
dt << Add Rows( 2000 );
dt << End Data Update;

```

### Checksum

**Syntax:** obj &lt;&lt; Checksum( &lt; Version(version) &gt;, &lt; Include(flags) &gt;, &lt; Exclude(flags) &gt; )

**Description:** Compute the table&apos;s checksum. Available flags include: "ColData", "ColName", "ColDataType", "ColModelingType", "ColFormat", "ColInFormat", "ColFormatWidth", "ColAttributes", "ColProperties", "ColListCheck", "ColRangeCheck", "ColCompact", "ColLabel", "ColHidden", "ColExclude", "ColSelection", "ColState", "ColDisplayWidth", "TableVariables", "TableScripts", "RowExclude", "RowHidden", "RowLabel", "RowColor", "RowMarker", "RowSelection", "RowState"

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Checksum();

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Checksum( Exclude( "ColData" ) );

```

**Example 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Checksum( Include( "ColData", "ColAttributes" ) );

```

**Example 4**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
flags = {"ColData", "ColAttributes"};
dt << Checksum( Include( flags ) );

```

### Clear Cell Colors

**Syntax:** obj &lt;&lt; Clear Cell Colors

**Description:** Clear the cell color of the selected columns. If no columns are selected, cell colors of all columns are cleared.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:age << Color Cells( "Red" );
a = {1, 3, 5};
b = {2, 4, 6};
:height << color cells( {{"Red", a}, {"blue", b}} );
:weight << color cells( {{"blue", a}} );
Wait( 2 );
dt << Clear cell colors( {:height, :age} );

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:age << Color Cells( "Red" );
a = {1, 3, 5};
b = {2, 4, 6};
:height << color cells( {{"Red", a}, {"blue", b}} );
:weight << color cells( {{"blue", a}} );
Wait( 2 );
dt << Clear cell colors();

```

### Clear Column Selection

**Syntax:** obj &lt;&lt; Clear Column Selection

**Description:** Clears the column selection in the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Go To( :BP 12F );
Wait( 2 );
dt << Clear Column Selection();

```

### Clear Edit Lock

**Syntax:** obj &lt;&lt; Clear Edit Lock( [ &lt;"Modify Cells"&gt;, &lt;"Add rows"&gt;, &lt;"Add Columns"&gt;, &lt;"Delete Rows"&gt;, &lt;"Delete Columns"&gt;] )

**Description:** Allow specified operations on the data table which were previously disallowed.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Edit Lock( "Modify Cells", "Add Rows", "Delete Columns" );
:age << set selected( 1 );
:height << set selected( 1 );
Wait( 2 );
dt << Clear Edit Lock( "Delete Columns" );

```

### Clear Properties Selection

**Syntax:** obj &lt;&lt; Clear Properties Selection( { property1, property2, ... )

**Description:** Deselect the specified table properties, where the list can be a list of property name or indices to the properties. If no list is given, deselect all the selected properties.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
list = {"Bivariate", "Logistic"};
proplist = dt << Select Properties();
Wait( 1 );
dt << clear properties selection( list );

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
list = {"Bivariate", "Logistic"};
proplist = dt << Select Properties();
Wait( 1 );
dt << clear properties selecction();

```

### Clone

**Syntax:** dt &lt;&lt; Clone( &lt; Table Name(name) &gt;, &lt; Copy Formulas(1|0) &gt;, &lt; Eval Formulas(1|0) &gt; )

**Description:** Create a copy of the data table

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dtClone = dt << Clone;

```

### Close Data Grid

**Syntax:** obj &lt;&lt; Close Data Grid

**Description:** Close or open the data grid.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Close Data Grid( 1 );

```

### Close Side Panels

**Syntax:** obj &lt;&lt; Close Side Panels

**Description:** Close or open the data table&apos;s side panels.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Close Side Panels( 1 );

```

### Close summary panels

**Syntax:** obj &lt;&lt; Close summary panels

**Description:** Close or open the data table&apos;s summary panels.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Close Summary Panels( 1 );

```

### Cluster

**Syntax:** obj &lt;&lt; Cluster

### Collapse All Column Groups

**Syntax:** obj &lt;&lt; Collapse All Column Groups

**Description:** Collapses all column groups

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Group Columns( "Monday", BP 8M, 3 );
dt << Group Columns( "Wednesday", BP 8W, 3 );
dt << Group Columns( "Friday", BP 8F, 3 );
dt << Expand All Column Groups;
Wait( 2 );
dt << Collapse All Column Groups;

```

### Column Filter

**Syntax:** obj &lt;&lt; Column Filter

**Description:** Retrieves object to manipulate active column filter for the table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lipid Data.jmp" );
dt << Expand All Column Groups;
dt:sex << Hide( 1 );

// Use immediately
dt << Column Filter( Column Name( "Weight|Wt", Regular Expression( 1 ) ) );
dt << Column Filter( Tags( {"Blood Measurements", "Good Measure"} ) );
dt << Column Filter( Tags( {"Blood Measurements", "Good Measure"}, Intersection( 1 ) ) );
dt << Column Filter( Column Name( "3" ), Tags( {"Blood Measurements"} ) );
dt << Column Filter( Clear );

// Return an object and send messages later
cf = dt << Column Filter;
cf << Column Name( "3yr" );
cf << Get Script;

// Related to (can also send to object)
dt << Show Hidden Columns in Columns List( 0 );
dt << Apply Columns List Filter to Data Grid( 0 );

```

### Column Switcher

**Syntax:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Description:** Creates a standalone column switcher

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
dt << Column Switcher(
	:Process 1,
	{:Process 1, :Process 3, :Process 4, :Process 5, :Process 6, :Process 7}
);

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Bivariate",
	H List Box(
		cs = dt << Column Switcher( :age, {:age, :weight} ),
		V List Box(
			female = Bivariate( Y( :age ), X( :height ), Where( :sex == "F" ) ),
			male = Bivariate( Y( :age ), X( :height ), Where( :sex == "M" ) )
		)
	)
);
cs << Link Platform( female );
cs << Link Platform( male );

```

**Example 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Bivariate",
	H List Box(
		cs = dt << Column Switcher( :age, {:age, :weight} ),
		b = Bivariate( Y( :age ), X( :height ), by( :sex ) )
	)
);
cs << Link Platform( b[1] );
cs << Link Platform( b[2] );

```

### Combine Columns

**Syntax:** obj &lt;&lt; Combine Columns

**Description:** Combine several columns into a single column, with each source column&apos;s values separated by the given delimiter.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << Combine Columns(
	delimiter( "," ),
	Columns(
		:Brush After Waking Up, :Brush After Meal, :Brush Before Sleep, :Brush Another Time
	),
	Selected Columns are Indicator Columns( 1 ),
	Column Name( "When to Brush" )
);

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << Combine Columns(
	delimiter( "," ),
	Columns(
		:Brush After Waking Up, :Brush After Meal, :Brush Before Sleep, :Brush Another Time
	),
	Column Name( "When to Brush" )
);

```

### Compare Data Tables

**Syntax:** obj &lt;&lt; Compare Data Tables( Compare with( Data Table( name )), &lt;Compare table variables and scripts( 0|1)&gt;, &lt;show window&gt;,&lt;Compare columns attributes and properties( 0|1)&gt;, &lt;Compare data( 0|1 )&gt;, &lt;Show difference summary(0|1)&gt;, &lt;Show difference plot(0|1)&gt; )

**Description:** Compares two open data tables and reports differences between data, as well as metadata.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
dt << compare data tables( compare With( Data Table( "Students2" ) ) );

```

### Compress File When Saved

**Syntax:** obj &lt;&lt; Compress File When Saved( state=0|1 )

**Description:** Compress the file when saving the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Compress File When Saved( 1 );

```

### Compress Selected Columns

**Syntax:** obj &lt;&lt; Compress Selected Columns( { column1, column2, ...} )

**Description:** Compresses each column into the most compact form.

Character data will be 1-byte if there are fewer than 255 levels.

Numeric data will be 1-byte if the data is between -127 and 127.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Compress Selected Columns( {:Age, :sex, :Height, :Weight} );

```

### Concatenate

**Syntax:** obj &lt;&lt; Concatenate( &lt;Private&gt;, &lt;Invisible&gt;, Data Table( name ), &lt;Data Table(name), ...&gt; &lt;Label( column )&gt;, &lt;Output Table( name ) | Append to first table&gt;, &lt;Keep Formulas&gt;, &lt;Create Source Column&gt; )

**Description:** Combines rows from several data tables and creates a new data table or appends the rows to the first data table.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Trial1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Trial2.jmp" );
dt << Concatenate( Data Table( "Trial2" ) );

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students.jmp" );
dt1 = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
dt << Concatenate(
	Data Table( dt1 ),
	Data Table( dt2 ),
	"Append to first table",
	"Create source column"
);

```

### Copy Column Properties

**Syntax:** obj &lt;&lt; Copy Column Properties( &lt;column 1 column 2, ...&gt; )

**Description:** Copies to the clipboard the column properties of selected columns into a list of separate lists of properties. Optionally, you can specify a list of source columns instead of pre-selecting them in the data table.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << Select Columns( :MODULUS, :ELONG );
dt << Copy Column Properties;
New Window( "Script", Script Box( "//Try Paste here
                     " ) );

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << Copy Column Properties( {:MODULUS, :ELONG} );
New Window( "Script", Script Box( "//Try Paste here
                     " ) );

```

### Copy Selected Properties

**Syntax:** obj &lt;&lt; Copy Selected Properties

**Description:** Copy the selected table properties to the clipboard.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << select properties( {"Distribution", "Oneway"} );
proplist = dt << Copy Selected Properties();
New Window( "Script", Script Box( "//Try Paste here
                     " ) );

```

### Copy Table Script

**Syntax:** obj &lt;&lt; Copy Table Script( &lt;"No data"&gt; )

**Description:** Copies a script to re-create the data table. The resultant script includes all the table scripts stored in the data table. Optionally, add the keyword "No Data" to omit data from the script.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Copy Table Script();
New Window( "Script", Script Box( "//Try Paste here
                     " ) );

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Copy Table Script( "No Data" );
New Window( "Script", Script Box( "//Try Paste here
                     " ) );

```

### Debug Script

**Syntax:** obj &lt;&lt; Debug Script( name )

**Description:** Debugs a named script stored as a property in the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Debug Script( "Distribution" );

```

### Decision Tree

**Syntax:** obj &lt;&lt; Decision Tree

### Define Tag

**Syntax:** Define Tag(&lt;name&gt;, [Color(&lt;color&gt;)], [Symbol(&lt;symbol char&gt;)], [Description(&lt;text&gt;)], [Replace(&lt;existing tag name&gt;)])

**Description:** Create or update a column tag definition on the table. If the tag doesn&apos;t exist, create it. Optionally assign color, symbol, and other attributes.

**Color, Symbol, or None**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Define Tag( "ID1", Color( Red ) );
dt << Define Tag( "ID2", Symbol( "\!UD83D\!UDCCB" ) );
dt << Define Tag( "ID3" );

```

**New Tag**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Define Tag( "ID", Color( Blue ) );

```

**Replace**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Define Tag( "ID", Color( Red ) );
:height << Set Property( "Tags", {"ID"} );
dt << Define Tag( "Identifier", Replace( "ID" ), Color( Blue ) );
:height << Get Property( "Tags" );

```

### Delete Columns

**Syntax:** obj &lt;&lt; Delete Columns( &lt;column&gt;, &lt;column&gt;, ... )

**Description:** Deletes the specified column(s). If no argument is specified, deletes selected columns in the data table.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:height << Set Selected;
Wait( 2 );
dt << Delete Columns();

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
dt << Delete Columns( :Height );

```

**Example 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
cols = {"height", "weight"};
Wait( 2 );
dt << Delete Columns( cols );

```

### Delete Filter View

**Syntax:** obj &lt;&lt; Delete Filter View( name | obj )

**Description:** Delete the given filter view.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv dream = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
fv male = dt << New Filter View(
	"Male",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Sex ), Where( :Sex == "MALE" ) ) )
);
Wait( 1 );
dt << Delete Filter View( fv dream );
dt << Delete Filter View( "Male" );

```

### Delete Scripts

**Syntax:** obj &lt;&lt; Delete Scripts( &lt;script| {script 1, script 2, script 3, ...} &gt; )

**Description:** Deletes the specified scripts from the data table.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Table Script(
	"New Script",
	Distribution( Column( :Height, :Weight ), By( :sex ) )
);
Wait( 2 );
dt << Delete Scripts( "New Script" );

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
list = {"Bivariate", "Logistic"};
Wait( 2 );
dt << Delete Scripts( list );

```

### Delete Table Property

**Syntax:** obj &lt;&lt; Delete Table Property

**Description:** Alias for Delete Scripts.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Table Script(
	"New Script",
	Distribution( Column( :Height, :Weight ), By( :sex ) )
);
Wait( 2 );
dt << Delete Table Property( "New Script" );

```

### Delete Table Variable

**Syntax:** obj &lt;&lt; Delete Table Variable( name )

**Description:** Deletes a table variable stored in the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Table Variable( "Days", 42 );
Wait( 2 );
dt << Delete Table Variable( "Days" );

```

### Delete Tag

**Syntax:** Delete Tag(&lt;tag&gt;|{&lt;tag&gt;, &lt;tag&gt;, ...}, [force(0|1)

**Description:** Delete a tag from the table. Tags will not be deleted if any columns still use them, unless the Force(1) flag is provided.

**Delete tag**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Define Tag( "ID" );
Wait( 3 );
dt << Delete Tag( "ID" );

```

**Force delete**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Define Tag( "ID" );
:height << Set Property( "Tags", {"ID"} );
Wait( 3 );
dt << Delete Tag( "ID", Force( 1 ) );

```

### Deselect Column Group

**Syntax:** obj &lt;&lt; Deselect Column Group( name of group | list of names )

**Description:** Deselect the column groups. If the column group is omitted, all column groups will be deselected.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << group columns( "xy", {:X, :y} );
dt << group columns( "pollutants", :Ozone :: :Lead );
dt << select column group();
Wait( 2 );
dt << deselect column group( "pollutants" );

```

### Disable Undo

**Syntax:** obj &lt;&lt; Disable Undo( state=0|1 )

**Description:** When the option is set, any operation on the data table cannot be undone.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << disable undo( 1 );

```

### End Data Update

**Syntax:** obj &lt;&lt; End Data Update

**Description:** Sends all Update messages held since the Begin Data Update command was issued. This is useful for updating many cells without interruption. This applies only to changes in data cells.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Central Limit Theorem.jmp" );
dt << Add Rows( 2000 );
dt << Distribution( Column( :"N=1"n, :"N=5"n, :"N=10"n ) );
Wait();
dt << Begin Data Update;
dt << Add Rows( 2000 );
dt << End Data Update;

```

### Exclude Columns

**Syntax:** obj &lt;&lt; Exclude Columns( &lt; 0|1 &gt; | &lt; { column1, column2, ... } &gt; )

**Description:** Excludes the columns from any analysis run

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Exclude Columns( 1, {:Age, :Name} );

```

### Exit Filter View

**Syntax:** obj &lt;&lt; Exit Filter View

**Description:** Return to the unfiltered view. If already in the unfiltered view, this has no effect.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
dt << New Filter View(
	"Dream",
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
Wait( 1 );
dt << Exit Filter View;

```

### Expand All Column Groups

**Syntax:** obj &lt;&lt; Expand All Column Groups

**Description:** Expands all column groups

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Group Columns( "Monday", BP 8M, 3 );
dt << Group Columns( "Wednesday", BP 8W, 3 );
dt << Group Columns( "Friday", BP 8F, 3 );
dt << Collapse All Column Groups;
Wait( 2 );
dt << Expand All Column Groups;

```

### Fit Model

**Syntax:** Fit Model( Y( columns ), Effects( columns ), Personality( "Standard Least Squares" ) )

**Description:** Fits linear regression models, including analysis of variance, logistic regression, variance components, penalized regression, stepwise regression, MANOVA, and survival models.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run Model()
);

```

### Get Active Filter View

**Syntax:** fv = obj &lt;&lt; Get Active Filter View

**Description:** Get the active filter view. Returns a FilterView object.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
dt << New Filter View(
	"Dream",
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
fv active = dt << Get Active Filter View;
Show( fv active << Get Name );

```

### Get All Columns As Matrix

**Syntax:** obj &lt;&lt; Get All Columns As Matrix

**Description:** Returns the data table as a matrix. Character columns are numbered according to the sorted levels, starting at 1.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
m = dt << Get All Columns As Matrix();
Show( m );

```

### Get As Report

**Syntax:** obj &lt;&lt; Get As Report

**Description:** Returns a report of the data table.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
jmp_report = New Window( "Big Class",
	Text Box( "Big Class" ),
	H List Box( Outline Box( "Big Class", dt << Get As Report ) ), 

);

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Where( :Age < 14 );
dt << Select Columns( :name, :age, :height );
jmp_report = New Window( "Big Class",
	Text Box( "Big Class" ),
	H List Box( Outline Box( "Big Class", dt << Get As Report ) ), 

);

```

### Get Cell Height

**Syntax:** obj &lt;&lt; Get Cell Height

**Description:** Get a row&apos;s display height.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
ht = dt << Get Cell Height;

```

### Get Column Group

**Syntax:** obj &lt;&lt; Get Column Group( name of column group | list of names )

**Description:** Returns the list of the columns in the column group.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << group columns( "xy", {:X, :y} );
dt << group columns( "pollutants", :Ozone :: :Lead );
dt << get column group( "xy" );

```

### Get Column Groups Names

**Syntax:** obj &lt;&lt; Get Column Groups Names

**Description:** Returns the names of the columns groups.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << group columns( "xy", {:X, :y} );
dt << group columns( "pollutants", :Ozone :: :Lead );
dt << get column groups names;

```

### Get Column Names

**Syntax:** obj &lt;&lt; Get Column Names( &lt;Numeric|Character|RowState&gt;, &lt;Continuous|Ordinal|Nominal&gt;,&lt;String&gt; )

**Description:** Returns the column names in the data table. If the string keyword is used, strings are returned.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
n = dt << Get Column Names();
Show( n );
CNames = dt << Get Column Names( Continuous );
Show( CNames );
SNames = dt << Get Column Names( String );
Show( SNames );

```

### Get Column Reference

**Syntax:** obj &lt;&lt; Get Column Reference( list of column names )

**Description:** Returns the column reference of the strings in the list

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
refList = dt << Get Column Reference( {"sex", "age"} );
Show( refList );

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
a = {1, 3, 4};
refList = dt << Get Column Reference( a );
Show( refList );

```

### Get Edit Lock

**Syntax:** obj &lt;&lt; Get Edit Lock

**Description:** Get the list of disallowed operations on the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Edit Lock( "Add Rows", "Delete Columns" );
Wait( 2 );
dt << Get Edit Lock();

```

### Get Excluded Columns

**Syntax:** obj &lt;&lt; Get Excluded Columns

**Description:** Returns the currently excluded columns in the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:Name << Exclude;
exCols = dt << Get Excluded Columns;
Show( exCols );

```

### Get Excluded Rows

**Syntax:** obj &lt;&lt; Get Excluded Rows

**Description:** Returns the currently excluded rows in the data table. Prefer Where.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( 1 );
dt << Select Rows( 5 );
dt << Exclude();
r1 = dt << Get Excluded Rows();
r2 = Where( Excluded() );
Show( r1, r2 );

```

### Get Filter View

**Syntax:** fv = obj &lt;&lt; Get Filter View( name | &lt;&lt;Temporary | &lt;&lt;Unfiltered )

**Description:** Get a filter view by name, or get one of the special filter views by using <<Temporary or <<Unfiltered. If a filter view by the given name does not exist, returns Empty().

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
fv dream = dt << Get Filter View( "Dream" );
Show( fv dream << Get Name );
Show( (dt << Get Filter View( <<Unfiltered )) << Get Name );

```

### Get Filter Views

**Syntax:** { fv, ... } = obj &lt;&lt; Get Filter Views( &lt; Temporary(0|1) &gt;, &lt; Unfiltered(0|1) &gt; )

**Description:** Get a list of all filter views. By default, the temporary and unfiltered views are not included.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv dream = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
fvs = dt << Get Filter Views( Unfiltered( 1 ), Temporary( 1 ) );
Show( fvs << Get Name );

```

### Get Header Height

**Syntax:** obj &lt;&lt; Get Header Height

**Description:** Get column header&apos;s display height

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
ht = dt << Get Header Height;

```

### Get Hidden Columns

**Syntax:** obj &lt;&lt; Get Hidden Columns

**Description:** Returns the columns currently hidden in the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:Weight << Hide;
hidCols = dt << Get Hidden Columns;
Show( hidCols );

```

### Get Hidden Rows

**Syntax:** obj &lt;&lt; Get Hidden Rows

**Description:** Returns the currently hidden rows in the data table. Prefer Where.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( 1 );
dt << Select Rows( 5 );
dt << Hide();
r1 = dt << Get Hidden Rows();
r2 = Where( Hidden() );
Show( r1, r2 );

```

### Get Label Columns

**Syntax:** obj &lt;&lt; Get Label Columns

**Description:** Returns the columns used to label rows.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
labelCols = dt << Get Label Columns;
Show( labelCols );

```

### Get Labeled Rows

**Syntax:** obj &lt;&lt; Get Labeled Rows

**Description:** Returns the currently labeled rows in the data table. Prefer Where.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( 1 );
dt << Select Rows( 5 );
dt << Label();
r1 = dt << Get Labeled Rows();
r2 = Where( Labeled() );
Show( r1, r2 );

```

### Get Lock

**Syntax:** obj &lt;&lt; Get Lock( state=0|1 )

**Description:** Checks whether the data table is locked.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
a = dt << get lock();
Show( a );
Wait( 1 );
dt << Lock Data Table( 1 );
a = dt << get lock();
Show( a );

```

### Get MM SAS DATA Step for Formula Columns

**Syntax:** obj &lt;&lt; Get MM SAS DATA Step for Formula Columns

**Description:** Creates Model Manager SAS DATA step code corresponding to formula columns in a JMP data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Ratio", Formula( :height / :weight ) );
dt << Get MM SAS Data Step for Formula Columns;

```

### Get Name

**Syntax:** obj &lt;&lt; Get Name( &lt;"Ignore Extension"&gt; )

**Description:** Returns the display name of the data table. With the optional argument &apos;Ignore Extension&apos;, the command returns the name of the data table without the extension

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
n = dt << Get Name();
Show( n );

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
n = dt << Get Name( "Ignore Extension" );
Show( n );

```

### Get Path

**Syntax:** obj &lt;&lt; Get Path

**Description:** Returns the complete path of the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
path = dt << Get Path();
Show( path );

```

### Get Property

**Syntax:** obj &lt;&lt; Get Property( name )

**Description:** Returns the named property in the data table as a script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = dt << Get Property( "Distribution" );
Show( s );

```

### Get Row ID Width

**Syntax:** obj &lt;&lt; Get Row ID Width

**Description:** Get row ID area&apos;s display width

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
ht = dt << Get Row ID Width;

```

### Get Row States

**Syntax:** obj &lt;&lt; Get Row States

**Description:** Returns a vector containing encoded row state values for every row in the data table. Note that encoded row state values cannot be used as a row state structure in row state functions like Color Of. See Example 2 for a way you can use the vector directly.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
rs = dt << Get Row States;
Show( rs );

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
rs = dt << GetRowStates;
w = Marker Of( As Row State( rs[3] ) );
dt2 = Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( dt2, 5 ) = Marker State( w );

```

### Get Rows Where

**Syntax:** obj &lt;&lt; Get Rows Where

**Description:** Returns the rows in the data table matching the where criteria. Prefer Where instead.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r1 = dt << Get Rows Where( :sex == "M" );
r2 = Where( :sex == "M" );
Show( r1, r2 );

```

### Get SAS DATA Step for Formula Columns

**Syntax:** obj &lt;&lt; Get SAS DATA Step for Formula Columns

**Description:** Creates SAS DATA step code corresponding to formula columns in a JMP data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Ratio", Formula( :height / :weight ) );
dt << Get SAS Data Step for Formula Columns;

```

### Get Script

**Syntax:** obj &lt;&lt; Get Script( &lt;script name&gt; )

**Description:** Returns the requested script. If the script name is omitted, returns a text representation of the data table together with all scripts stored in the data.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = dt << Get Script;
New Window( "Script", Script Box( Char( Name Expr( s ) ) ) );

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = dt << Get Script( "Distribution" );

```

### Get Script Group

**Syntax:** obj &lt;&lt; Get Script Group( name of script group )

**Description:** Returns the list of scripts in the group.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << group scripts( "VL", {"Set Sex Value Labels", "Set Age Value Labels"} );
gb = dt << get script group( "GB" );
Wait( 1 );
dt << run script( gb[2] );

```

### Get Script Groups Names

**Syntax:** obj &lt;&lt; Get Script Groups Names

**Description:** Returns the list of names of script groups.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << group scripts( "VL", {"Set Sex Value Labels", "Set Age Value Labels"} );
gb = dt << get script groups names;

```

### Get Scroll Locked Columns

**Syntax:** obj &lt;&lt; Get Scroll Locked Columns

**Description:** Returns the columns currently locked from scrolling in the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:Name << Scroll Lock;
lockCols = dt << Get Scroll Locked Columns;
Show( lockCols );

```

### Get Selected Columns

**Syntax:** obj &lt;&lt; Get Selected Columns

**Description:** Returns the names of the selected columns in the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Go To( :weight );
names = dt << Get Selected Columns;
Show( names );

```

### Get Selected Properties

**Syntax:** obj &lt;&lt; Get Selected Properties( &lt;{list of properties}&gt; )

**Description:** Get the selected table properties (variable and scripts) into a list. Instead of selecting, you can use an optional list to specify the properties to get.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Properties( {2, 4} );
proplist = dt << Get Selected Properties();

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
proplist = dt << Get Selected Properties( {2, 4} );

```

### Get Selected Rows

**Syntax:** obj &lt;&lt; Get Selected Rows

**Description:** Returns the currently selected rows in the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( 1 );
dt << Select Rows( 5 );
r = dt << Get Selected Rows();
Show( r );

```

### Get Table Script Names

**Syntax:** obj &lt;&lt; Get Table Script Names

**Description:** Returns the names of all the properties in the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
names = dt << Get Table Script Names;
Show( names );

```

### Get Table Variable

**Syntax:** obj &lt;&lt; Get Table Variable( name )

**Description:** Returns the value of a specified table variable in the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Table Variable( "Days", 42 );
var = dt << Get Table Variable( "Days" );
Show( var );

```

### Get Table Variable Names

**Syntax:** obj &lt;&lt; Get Table Variable Names

**Description:** Returns the names of all the variables in the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
names = dt << Get Table Variable Names;
Show( names );

```

### Get Tagged Columns

**Syntax:** obj &lt;&lt; Get Tagged Columns( tag|{tag1, tag2, ...}, [Intersection] )

**Description:** Returns the list of the columns matching the supplied tags. If intersection is requested, only the columns containing all listed tags are returned.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt:Ozone << setProperty( "Tags", {"Air Pollution Levels"} );
dt:CO << setProperty( "Tags", {"Air Pollution Levels"} );
dt:SO2 << setProperty( "Tags", {"Air Pollution Levels"} );
dt:NO << setProperty( "Tags", {"Air Pollution Levels"} );
dt:PM10 << setProperty( "Tags", {"Air Pollution Levels"} );
dt:Lead << setProperty( "Tags", {"Air Pollution Levels"} );
dt << Get Tagged Columns( "Air Pollution Levels" );

```

### Get Transforms

**Syntax:** dt &lt;&lt; Get Transforms()

**Description:** Retrieve the list of transform columns associated with this data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Transform Column( "A", Formula( :B + 1 ) );
dt << Transform Column( "B", Formula( :height + 1 ) );
Show( dt << Get Transforms() );
dt << Delete Columns( {:A, :B} );

```

### Get as Matrix

**Syntax:** obj &lt;&lt; Get as Matrix( &lt;list of columns by name&gt;, &lt;list of columns by number&gt;, &lt;column range&gt; )

**Description:** Returns the specified columns in the data table as a matrix. The default is all numeric columns.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
m = dt << Get As Matrix();
Show( m );
x = dt << GetAsMatrix( {4, 5} );
Show( x );

```

### Group Columns

**Syntax:** obj &lt;&lt; Group Columns( first column, number )obj &lt;&lt; Group Columns( {column1, column2, ...})obj &lt;&lt; Group Columns(group name | Path({&lt;a&gt;, &lt;b&gt;, ...}), {column1, column2, ...})obj &lt;&lt; Group Columns( group name | Path({&lt;a&gt;, &lt;b&gt;, ...}), first column, number )

**Description:** Groups a list of columns.

**Add to group**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
Wait( 1 );
theGroup = dt << Group Columns( "BP", :BP 8M :: :BP 8W );
Wait( 2 );
// add to theGroup
theGroup = dt << Group Columns( theGroup, {:BP 12W} );

```

**Nested group**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
Wait( 1 );
dt << Group Columns( Path( {"Groups", "BP8"} ), :BP 8M :: :BP 8W );

```

**Using count**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
Wait( 1 );
group = dt << Group Columns( BP 8M, 9 );

```

### Group Scripts

**Syntax:** obj &lt;&lt; Group Scripts({ script1, script2, ...}) obj &lt;&lt; Group Scripts(group name | Path({&lt;a&gt;, &lt;b&gt;, ...}), {script1, script1, ...})

**Description:** Group a list of scripts.

**Nested group**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	Path( {"GB", "Sample Graphs"} ),
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);

```

**Simple group**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);

```

### Has Column

**Syntax:** dt &lt;&lt; Has Column( name, &lt; Exact Match(1|0) &gt; )

**Description:** Inquire whether the data table has a column with the given name.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Has Column( "weight" );

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Show(
	dt << Has Column( "Weight" ),
	dt << Has Column( "Weight", Exact Match( 1 ) ),
	dt << Has Column( "a g e" ),
	dt << Has Column( "a g e", Exact Match( 1 ) )
);

```

### Has data view

**Syntax:** obj &lt;&lt; Has data view

**Description:** Returns true if the data table has a visible window opened.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << Has Data View();

```

### Hide Columns

**Syntax:** obj &lt;&lt; Hide Columns( &lt; 0|1 &gt; | &lt; { column1, column2, ... } &gt; )

**Description:** Hides the columns in the data grid

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Hide Columns( 1, {:Age, :Name} );

```

### Is Dirty

**Syntax:** obj &lt;&lt; Is Dirty

**Description:** Inquire whether the data table has been modified.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
a = dt << is Dirty;
Show( a );
dt << add rows( 5 );
b = dt << is dirty;
Show( b );

```

### Is Linked Subset

**Syntax:** obj &lt;&lt; Is Linked Subset

**Description:** Inquire whether the data table is a linked subset

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
linkedSubset = dt << Subset( All Rows, Link To Original Data Table( 1 ) );
subset = dt << Subset( All Rows );
Show( dt << Is Linked Subset, linkedSubset << Is Linked Subset, subset << Is Linked Subset );

```

### JMP Query Builder

**Syntax:** obj &lt;&lt; JMP Query Builder

**Description:** Builds a query for one or more JMP data tables.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << JMP Query Builder();

```

### Join

**Syntax:** obj &lt;&lt; Join( &lt;Private&gt;, &lt;Invisible&gt;,With( Data Table( name )), By Matching Columns( column1 = column2, ...), Selected( columns ), SelectedWith( columns ), &lt;Drop Multiples( 0|1, 0|1 )&gt;, &lt;Include nonmatches( 0|1, 0|1 )&gt;,&lt;Copy formula( 0|1 )&gt;, &lt;Suppress Formula Evaluation&gt;, &lt;Update&gt;, &lt;Merge Same Name Columns&gt;, &lt;Preserve Main Table Order&gt; )

**Description:** Combines multiple data tables into one new data table. The data can be combined by row assignment, matching column values, or in a Cartesian fashion.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Trial1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Little.jmp" );
dt << Join(
	With( Data Table( "Little" ) ),
	Select( :popcorn, :oil amt, :batch, :yield ),
	SelectWith( :yield ),
	By Matching Columns( :popcorn = :popcorn, :batch = :batch, :oil amt = :oil )
);

```

### Journal

**Syntax:** obj &lt;&lt; Journal

**Description:** Makes a journal from the data table. Only the data grid is included, not notes, variables, or scripts.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Journal();

```

### Journal Link

**Syntax:** dt &lt;&lt; Journal Link( &lt; Save( &lt;filepath&gt; ) | Embed( ) &gt;, &lt; Button Name( "Ben") &gt; )

**Description:** Appends a data table link-button to a journal.  Use embed() or save(), but not both.  Embed() has no options.  Save() option is similar to dt<<save(). Use ButtonName() to override the button label.  Returns new link-button.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Journal Link(); // assumes the table can be saved at its current location; button gets name from table
dt << Journal Link( Embed() ); // embed JSL script to re-create table; button gets name from table
dt << Journal Link(
	Save( "$temp/DeleteMe1.jmp" ),
	ButtonName( "Fancy Name for Temporary File" )
);
// even more fancy...
button = dt << Journal Link( Save( "$temp/DeleteMe2.jmp" ), ButtonName( "" ) ); // no text name
button << UnderlineStyle( 0 ); // not using the link-style appearance
button << SetIcon( "DataTableFile" ); // add an icon
button << SibAppend( Text Box( "Pick Me!" ), "Horizontal" ); // append a label
// save it with a prompt...you can change the name in the save-as dialog...or cancel
dt << Journal Link( Save( "" ) ); // prompt for path and save table; button gets name from prompt
Close( dt, "NoSave" );

```

### Last Modified

**Syntax:** obj &lt;&lt; Last Modified

**Description:** Returns the date of the last saved modification to the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
date = dt << Last Modified();
Show( date );

```

### Lock Data Table

**Syntax:** obj &lt;&lt; Lock Data Table( state=0|1 )

**Description:** Locks the data table so values cannot be edited or added.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Lock Data Table( 1 );
// Now try changing a value in the data table.

```

### MSA Variability Chart

**Syntax:** obj &lt;&lt; MSA Variability Chart( Y( column ), X( columns ) )

**Description:** Displays a variability chart showing how a measurement varies across categories and performs analysis examining how the mean and variance change across the categories.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );

```

### Make Indicator Columns

**Syntax:** obj &lt;&lt; Make Indicator Columns

**Description:** Convert a nominal or ordinal column to as many columns as the number of categories. The column names of the resultant columns are the categories of the source column. The values of the resultant columns are zeroes or ones.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << Make Indicator Columns( columns( {:species, :season} ) );

```

### Make RowState Handler

**Syntax:** rs = dt &lt;&lt; Make RowState Handler( function(a) )

**Description:** Creates a row state handler to the data table. The argument of the function holds the rows whose row states get changed.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
f = Function( {a}, Print( a ) );
rs = dt << make row state handler( f );
dt << Select Rows( 1 );
dt << Select Rows( 5 );

```

### Make SAS DATA Step

**Syntax:** sd = dt &lt;&lt; Make SAS Data Step( )sd = dt &lt;&lt; Make SAS Data Step( SaveJMPMetadata(true) )

**Description:** Returns the data table as a SAS DATA step.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
sd = dt << Make SAS Data Step();
Show( sd );

```

### Make SAS DATA Step Window

**Syntax:** sd = dt &lt;&lt; Make SAS Data Step Window( )sd = dt &lt;&lt; Make SAS Data Step Window( SaveJMPMetadata(true) )

**Description:** Opens a new window of type sas and creates a SAS DATA step from the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
sd = dt << Make SAS Data Step Window();

```

### Merge Referenced Data

**Syntax:** obj &lt;&lt; Merge Referenced Data

**Description:** Makes the table stand-alone by merging the data from the source table to the referenced columns and unlinking them. The Link Reference property of the referencing columns is also removed.

```jsl

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA\Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA\Pizza Responses.jmp" );
dt1:ID << Set Property( "Link ID", 1 );
dt2:Choice << Set Property( "Link Reference", Reference Table( dt1 ) );
dt2:Choice1 << Set Property( "Link Reference", Reference Table( dt1 ) );
dt2:Choice2 << Set Property( "Link Reference", Reference Table( dt1 ) );
dt2 << Merge Referenced Data();

```

### Missing Data Pattern

**Syntax:** obj &lt;&lt; Missing Data Pattern( columns( columns ), &lt;Output Table( name )&gt; )

**Description:** Finds patterns of missing values in the data table and creates a table of each pattern and its frequency.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << Missing Data Pattern(
	columns( :POP, :Max deg. F Jan, :OZONE, :CO, :SO2, :NO, :PM10, :Lead )
);

```

### Move Column Group

**Syntax:** obj &lt;&lt; Move Column Group( name of group | Path({&lt;a&gt;, &lt;b&gt;, ...}), to first | to last | after(column) | after(group) | after(Path({&lt;a&gt;, &lt;b&gt;, ...})) )

**Description:** Move the column group to specified location. If the column group name is omitted, all groups are moved.

**After group**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << group columns( "xy", {:X, :y} );
dt << group columns( "pollutants", :Ozone :: :Lead );
dt << move column group( "Pollutants", after( "xy" ) );

```

**Move all**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << group columns( "xy", {:X, :y} );
dt << group columns( "pollutants", :Ozone :: :Lead );
dt << move column group( to first );

```

**To first**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << group columns( "xy", {:X, :y} );
dt << group columns( "pollutants", :Ozone :: :Lead );
dt << move column group( "xy", to first );

```

### Move Script Group

**Syntax:** obj &lt;&lt; Move Script Group( name of group | Path({&lt;a&gt;, &lt;b&gt;, ...}), to first | to last | after(script) | after(group) | after(Path({&lt;a&gt;, &lt;b&gt;, ...})) )

**Description:** Move the script group to specified location. If the script group name is omitted, all groups are moved.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << group scripts( "VL", {"Set Sex Value Labels", "Set Age Value Labels"} );
Wait( 1 );
dt << move script group( "VL", after( "Oneway" ) );
Wait( 1 );
dt << move script group( "GB", after( "VL" ) );
Wait( 1 );
dt << move script group( "VL", after( Path( {"GB"} ) ) );
Wait( 1 );
dt << move script group( to first );

```

### Move Selected Scripts

**Syntax:** obj &lt;&lt; Move Selected Scripts( script|list of scripts|group|Path({&lt;a&gt;, &lt;b&gt;, ...}), to first | to last | after(script) | after(group) | after(Path({&lt;a&gt;, &lt;b&gt;, ...})) )

**Description:** Move the scripts to specified location.

**After group**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << Move Selected scripts( {"Logistic"}, after( "GB" ) );

```

**Move Group**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	Path( {"GB", "Graphs"} ),
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << Move Selected scripts( Path( {"GB", "Graphs"} ), after( "Contingency" ) );

```

**To first**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Move Selected scripts(
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"},
	to first
);

```

### Move down

**Syntax:** obj &lt;&lt; Move down

**Description:** Replaces the values in the first row of the data table with the column names and replaces the column names with default sequencing names.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Move down;

```

### Move up

**Syntax:** obj &lt;&lt; Move up

**Description:** Replaces the column names with the values in the first row of the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Move up;

```

### Move up and append

**Syntax:** obj &lt;&lt; Move up and append

**Description:** Replaces the column names by appending the values in the first row of the data table to the corresponding column names.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Move up and append;

```

### New Data Box

**Syntax:** obj &lt;&lt; New Data Box( &lt; &lt;&lt;Enable Filter Views(0|1) &gt; )

**Description:** Makes a data table view in a display box tree. Changes the current data table to the given data table. The optional Enable Filter Views argument controls whether the view allows filter views; the default is to allow them.

```jsl

Names Default To Here( 1 );
dtA = Open( "$SAMPLE_DATA/Big Class.jmp", invisible );
New Window( "school",
	H List Box(
		dtA << New Data Box(),
		Text Box(),
		dtA << Distribution(
			ContinuousDistribution( Column( :weight ) ),
			NominalDistribution( Column( :age ) )
		)
	)
);
dtA = 0;

```

### New Data View

**Syntax:** obj &lt;&lt; New Data View

**Description:** Makes a new view of the data table. This view is linked to the original in that anything highlighted or changed will affect the original. This is useful when you need to scroll to different parts of the same table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << New Data View();

```

### New Filter View

**Syntax:** fv = dt &lt;&lt; New Filter View( &lt; name &gt;, &lt; Copy From(name|obj) &gt;, &lt; Temporary(0|1) &gt;, &lt; Active(0|1) &gt;, &lt; DataFilter(expr) &gt;)

**Description:** Create a new filter view. The created FilterView object is returned. The new filter view will be active by default. If you do not name the filter view, it is temporary, unless you set Temporary to zero.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
dt << New Filter View(
	"Dream",
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
dt << New Filter View(
	"Dream Inverse",
	Data Filter(
		Data Filter(
			Inverse( 1 ),
			Add Filter( Columns( :Island ), Where( :Island == "Dream" ) )
		)
	)
);

```

**Example 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	Data Filter( Add Filter( Columns( :Sex ), Where( Is Missing( :Sex ) ) ) )
);
dt << New Filter View( "Unknown Sex", CopyFrom( fv ), Active( 0 ) );

```

### New Script

**Syntax:** New Property( name, script ) New Script( name, script )

**Description:** Creates and sets a new property in the data table as a script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Script( "New Script", Distribution( Column( :Height, :Weight ), By( :sex ) ) );

```

### New Table Variable

**Syntax:** obj &lt;&lt; New Table Variable( name, number )

**Description:** Creates and sets a new variable in the data table as a constant value. If there is an existing variable with the same name, a number is appended to the name of the new variable to make it unique. The similar command Set Table Variable is recommended for most cases.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Table Variable( "Days", 42 );

```

### OC Curves

**Syntax:** obj &lt;&lt; OC Curves

**Description:** Creates a graph that plots the probability of not detecting a shift in process as a function of the size of the shift.

### Partition

**Syntax:** obj &lt;&lt; Partition( Y( column ), X( column(s) ) )

**Description:** Constructs a decision tree by recursively partitioning the data according to a relationship between the predictor and response values. Both the response and predictors can be either continuous or categorical.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Partition(
	Y( :Y ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Split Best( 3 )
);

```

### Paste Column Properties

**Syntax:** obj &lt;&lt; Paste Column Properties

**Description:** Pastes from the clipboard multiple lists of column properties to multiple columns. Optionally, you can specify a list of target columns instead of selecting them in the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << Copy Column Properties( {:MODULUS, :ELONG} );
dt2 = New Table( "test it",
	New Column( "T1", numeric, continuous ),
	New Column( "T2", numeric, continuous ),
	New Column( "T3", numeric, continuous ),
	Add Rows( 10 )
);
dt2 << Paste Column Properties( {:T1, :T3} );

```

### Recode

**Syntax:** obj &lt;&lt; Recode

**Description:** Recode the old values of selected columns to new values.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Go To( :weight );
dt << Recode;

```

### Recode Column

**Syntax:** obj &lt;&lt; Recode Column(&lt;source column reference&gt;, {&lt;transform&gt;, ...}, &lt;Update Properties(0|1)&gt;, &lt;By Word(Delimiters(&lt;chars&gt;)&gt;, Target Column(&lt;column reference&gt; | &lt;column name&gt;))

**Description:** Apply the listed transformations to each value from the source column and store the result in the original column or specified target column. The By Word option splits supplied character data into smaller input values. Once the input values are determined, the transformations are applied to those values separately.

Special JSL variables are populated during the execution of the command:

	_rcNow is the current value of the input after the previous transformation(s).

	_rcOrig is the original value of the input.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = New Column( :age );
col << Data Type( "Character" );
dt << Recode Column(
	:age,
	{If( _rcNow >= 17, "Older", _rcNow >= 15, "Middle", "Younger" )},
	Target Column( col )
);

```

### Rename Column Group

**Syntax:** obj &lt;&lt; Rename Column Group( oldname | Path({&lt;a&gt;, &lt;b&gt;, ...}), newname )

**Description:** Rename the column group.

**Nested Group**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << group columns( Path( {"xy", "Cols"} ), {:X, :y} );
Wait( 1 );
dt << rename column group( Path( {"xy"} ), "XY" );
dt << rename column group( Path( {"XY", "Cols"} ), "Columns" );

```

**Simple Group**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << group columns( "xy", {:X, :y} );
dt << group columns( "pollutants", :Ozone :: :Lead );
Wait( 1 );
dt << rename column group( "xy", "coordinates" );

```

### Rename Script Group

**Syntax:** obj &lt;&lt; Rename Script Group( oldname | Path({&lt;a&gt;, &lt;b&gt;, ...}), newname )

**Description:** Rename the script group

**Nested group**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	Path( {"GB", "Graphs"} ),
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << rename script group( Path( {"GB", "Graphs"} ), "My Graphs" );

```

**Simple group**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << rename script group( "GB", "GraphBuilders" );

```

### Rename Table Property

**Syntax:** obj &lt;&lt; Rename Table Property( old name, new name )

**Description:** Renames the specified Table Property.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Script( "New Script", Distribution( Column( :Height, :Weight ), By( :sex ) ) );
Wait( 1 );
dt << Rename Table Property( "New Script", "Great Script" );

```

### Rename Table Script

**Syntax:** obj &lt;&lt; Rename Table Script( old name, new name )

**Description:** Renames the specified Table Script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Script( "New Script", Distribution( Column( :Height, :Weight ), By( :sex ) ) );
Wait( 1 );
dt << Rename Table Script( "New Script", "Great Script" );

```

### Rename Table Variable

**Syntax:** obj &lt;&lt; Rename Table Variable( old name, new name )

**Description:** Renames a specified Table Variable.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Table Variable( "Days", 42 );
Wait( 2 );
dt << Rename Table Variable( "Days", "Hours" );

```

### Rerun Formulas

**Syntax:** obj &lt;&lt; Rerun Formulas

**Description:** Re-evaluates all column formulas in the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Central Limit Theorem.jmp" );
dt << Add Rows( 100 );
dt << Rerun Formulas;

```

### Reset Transforms

**Syntax:** dt &gt;&gt; Reset Transforms()

**Description:** When transform columns are accessed, they cache their data for future calls. This function removes that data. The data will be recreated if the column is accessed again.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Reset Transforms();

```

### Revert

**Syntax:** obj &lt;&lt; Revert

**Description:** Reverts any changes to the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Row States(
	[33, 33, 33, 33, 33, 97, 97, 97, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 768]
);
Wait( 2 );
dt << revert();

```

### Run Formulas

**Syntax:** obj &lt;&lt; Run Formulas

**Description:** Performs all pending formula evaluations. Not all formulas will be evaluated.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Central Limit Theorem.jmp" );
dt << Add Rows( 10000 );
dt << Run Formulas();
Distribution( Column( :"N=1"n, :"N=5"n, :"N=10"n ) );

```

### Run Script

**Syntax:** obj &lt;&lt; Run Script( name )

**Description:** Runs a named script stored as a property in the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Run Script( "Distribution" );

```

### Save

**Syntax:** obj &lt;&lt; Save( &lt;filepath&gt;, &lt;file type&gt; ) obj &lt;&lt; Save As( filepath, &lt;file type&gt; )

**Description:** Saves the data table to any supported format. Supported formats include .jmp, .xls, .xlsx, .txt, .csv, .tsv, .xpt, .v8xpt and .stx. Some formats are supported only on Windows. See Using JMP for details.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Save( "$temp\deleteme Big Class.jmp" ); // explicit location
If( dt << Save( "" ),
	Write( "\!nsaved to " || (dt << GetPath) ),
	Write( "\!nsave canceled" )
); // prompt
dt << Save( "$temp\deleteme Big Class.csv" ); // convert to CSV format
Close( dt, "NoSave" );

```

### Save As

**Syntax:** obj &lt;&lt; Save( &lt;filepath&gt;, &lt;file type&gt; ) obj &lt;&lt; Save As( filepath, &lt;file type&gt; )

**Description:** Saves the data table to any supported format. Supported formats include .jmp, .xls, .xlsx, .txt, .csv, .tsv, .xpt, .v8xpt and .stx. Some formats are supported only on Windows. See Using JMP for details.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Save( "$temp\deleteme Big Class.jmp" ); // explicit location
If( dt << Save( "" ),
	Write( "\!nsaved to " || (dt << GetPath) ),
	Write( "\!nsave canceled" )
); // prompt
dt << Save( "$temp\deleteme Big Class.csv" ); // convert to CSV format
Close( dt, "NoSave" );

```

### Save Database

**Syntax:** obj &lt;&lt; Save Database( connectInfo, TableName )

**Description:** Saves the data table back to a database.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Save Database( "Connect Dialog", "My_Class" );

```

### Screen Predictors

**Syntax:** obj &lt;&lt; Screen Predictors

**Description:** This is an alias and old name for Predictor Screening

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Bands Data.jmp" );
obj = dt << Predictor Screening( Y( :Banding? ), X( Column Group( "Predictors" ) ) );

```

### Select Column Group

**Syntax:** obj &lt;&lt; Select Column Group( name of group | list of names )

**Description:** Select the column groups.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << group columns( "xy", {:X, :y} );
dt << group columns( "pollutants", :Ozone :: :Lead );
dt << select column group( "xy", "pollutants" );

```

### Select Properties

**Syntax:** obj &lt;&lt; Select Properties( { property1, property2, ... )

**Description:** Select the specified table properties, where the list can be a list of property name or indices to the properties.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
proplist = dt << Select Properties( {2, 4} );

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
proplist = dt << Select Properties( {"Bivariate", "Logistic"} );

```

### Select Script Group

**Syntax:** obj &lt;&lt; Select Script Group( &lt;name of group | { group1, group2, ...} &gt; )

**Description:** Select the script groups. If no script group is given, all groups are selected.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << group scripts( "VL", {"Set Sex Value Labels", "Set Age Value Labels"} );
Wait( 1 );
dt << select script group( "VL" );

```

### Select Scripts

**Syntax:** obj &lt;&lt; Select Scripts( &lt;name of script | { script1, script2, ...} &gt; )

**Description:** Select the named scripts.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << group scripts( "VL", {"Set Sex Value Labels", "Set Age Value Labels"} );
Wait( 1 );
dt << select scripts( {"Distribution", "Graph Builder Heat Map"} );

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << group scripts( "VL", {"Set Sex Value Labels", "Set Age Value Labels"} );
Wait( 1 );
a = dt << get script group( "GB" );
dt << select scripts( a );

```

### Select columns

**Syntax:** obj &lt;&lt; Select columns( &lt;column&gt;, &lt;column&gt;, ... )

**Description:** Select the specified columns. To select all columns, use the keyword &apos;All&apos;.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
dt << Select Columns( :Height );

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
dt << Select Columns( "All" );

```

**Example 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
clist = {:Height, :Weight};
dt << Select Columns( clist );

```

### Sequencing Variants Toolset

**Syntax:** obj &lt;&lt; Sequencing Variants Toolset

**Description:** Interface to Sequencing Variants Toolset Add-in Platform

### Set Active Filter View

**Syntax:** obj &lt;&lt; Set Active Filter View( name | obj )

**Description:** Set the active filter view

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
Wait( 1 );
dt << Set Active Filter View( "Dream" );

```

### Set Cell Height

**Syntax:** obj &lt;&lt; Set Cell Height( number )

**Description:** Set the display height of each data table cell.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Cell Height( 20 );

```

### Set Dirty

**Syntax:** obj &lt;&lt; Set Dirty( state=0|1 )

**Description:** Marks the data table as changed, even though no change has occurred. This is helpful for causing a prompt to save on closing.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Dirty();

```

### Set Edit Lock

**Syntax:** obj &lt;&lt; Set Edit Lock( [ &lt;"Modify Cells"&gt;, &lt;"Add rows"&gt;, &lt;"Add Columns"&gt;, &lt;"Delete Rows"&gt;, &lt;"Delete Columns"&gt;] )

**Description:** Disallow specified operations on the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Edit Lock( "Add Rows", "Delete Columns" );

```

### Set Header Height

**Syntax:** obj &lt;&lt; Set Header Height( number )

**Description:** Set column header&apos;s display height

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Header Height( 20 );

```

### Set Label Columns

**Syntax:** obj &lt;&lt; Set Label Columns( column(s) )

**Description:** Assigns a label role to selected columns in the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
Wait( 1 );
dt << Set Label Columns( :City, :State );

```

### Set Matrix

**Syntax:** obj &lt;&lt; Set Matrix( [ matrix with rows separated by commas ] )

**Description:** Creates a data table from a matrix.

```jsl

Names Default To Here( 1 );
dt = New Table( "B" );
dt << Set Matrix( [12 59 95, 12 61 123, 12 55 74, 12 66 145] );

```

### Set Name

**Syntax:** obj &lt;&lt; Set Name( new TableName )

**Description:** Changes the name of the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Name( "New Class" );

```

### Set Property

**Syntax:** obj &lt;&lt; Set Property( name, script )

**Description:** Creates and sets a new property in the data table as a script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Property( "New Script", Distribution( Column( :Height, :Weight ), By( :sex ) ) );

```

### Set Row ID Width

**Syntax:** obj &lt;&lt; Set Row ID Width( number )

**Description:** Set row ID area&apos;s display width

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Row ID Width( 80 );

```

### Set Row States

**Syntax:** obj &lt;&lt; Set Row States( [state1, state2, ... stateN] )

**Description:** Sets the Row States for all rows in the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Row States(
	[33, 33, 33, 33, 33, 97, 97, 97, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 768]
);

```

### Set Scroll Lock Columns

**Syntax:** obj &lt;&lt; Set Scroll Lock Columns( column(s) )

**Description:** Locks selected columns in the data table from scrolling.  To indicate that a column is locked, the background color changes.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << Set Scroll Lock Columns( :City );

```

### Set Table Variable

**Syntax:** obj &lt;&lt; Set Table Variable( name, number )

**Description:** Creates and sets a new variable in the data table as a constant value. An existing variable with the same name will be overwritten.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Table Variable( "Days", 42 );

```

### Show Header Filter Icons

**Syntax:** obj &lt;&lt; Show Header Filter Icons( state=0|1 )

**Description:** Show or hide the filter icons on columns in the current filter view.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lipid Data.jmp" );
dt << Show Header Filter Icons( 0 );

```

### Show Header Graphs

**Syntax:** obj &lt;&lt; Show Header Graphs( state=0|1 )

**Description:** Show or hide the header graphs in the data table display.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lipid Data.jmp" );
dt << Show Header Graphs( 0 );

```

### Show Header Groups

**Syntax:** obj &lt;&lt; Show Header Groups( state=0|1 )

**Description:** Show or hide the column groups in the data table display.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lipid Data.jmp" );
dt << Show Header Groups( 0 );

```

### Show Header Statistics

**Syntax:** obj &lt;&lt; Show Header Statistics( state=0|1 )

**Description:** Show or hide the header statistics in the data table display.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lipid Data.jmp" );
dt << Show Header Statistics( 0 );

```

### Show Header Tags

**Syntax:** obj &lt;&lt; Show Header Tags( state=0|1 )

**Description:** Show or hide the column tags in the data table display.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lipid Data.jmp" );
dt << Show Header Tags( 0 );

```

### Show Hidden Columns In Columns List

**Syntax:** obj &lt;&lt; Show Hidden Columns In Columns List( state=0|1 )

**Description:** Turn off to omit Hidden columns from the data table Columns list. These columns never show in the data grid.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << Hide Columns( 1, {:"pop- m"n, :Max deg. F Jan, :X, :Y} );
Wait( 1 );
dt << Show Hidden Columns In Columns List( 0 );

```

### Show Transforms

**Syntax:** dt &lt;&lt; Show Transforms()

**Description:** Print information to the log about the transform columns associated with this data table and its platforms. This is informational and the format might change. It should not be parsed.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Transform Column( "A", Formula( :height + 1 ) );
dt << Show Transforms();
dt << Delete Columns( :A );

```

### Sort

**Syntax:** obj &lt;&lt; Sort( &lt;Private&gt;, &lt;Invisible&gt;, &lt;Replace table&gt;, By( column ), Order( ascending|descending ) )

**Description:** Creates a new data table that is sorted by specified columns in either ascending or descending order.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Sort( By( :name ), Order( Ascending ) );

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Sort( replace table, By( :name ), Order( Ascending ) );

```

### Split

**Syntax:** obj &lt;&lt; Split( Split( columns ), Split by( column ), &lt;Group(column)&gt;, &lt;Private&gt;|&lt;Invisible&gt;, &lt;Remaining Columns( Keep All | Drop All | Drop( columns ) | Keep( columns ) )&gt;, &lt;Copy formula( 0|1 )&gt;, &lt;Suppress formula evaluation( 0|1 )&gt;, &lt;Sort by Column Property&gt;, &lt;Output Table( "name" )&gt; )

**Description:** Creates a new data table that maps several rows of one column into one row in several columns.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Restaurant Tips.jmp" );
:Day of Week << set property( "Row Order Levels", 1 );
dt << Split(
	Split By( :Day of Week ),
	Split( :Bill Amount ),
	Sort by Column Property,
	remaining columns( drop all )
);

```

### Stack

**Syntax:** obj &lt;&lt; Stack( &lt;Private&gt;, &lt;Invisible&gt;, columns( columns ), &lt;Source Label Column( string )&gt;, &lt;Stacked Data Column( string )&gt;, &lt;Copy formula( 0|1 )&gt;, &lt;Number of Series(n)&gt;, &lt;Contiguous&gt;, &lt;Drop All Other Columns(1) | Name("Non-stacked columns")(Keep( col1, ... )) | Name("Non-stacked columns")(Drop( col1, ... ))&gt;, &lt;Output Table( "name" )&gt;) )

**Description:** Creates a new data table with values from multiple columns stacked into a single column.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
dt << Stack(
	columns( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Source Label Column( "Time" ),
	Stacked Data Column( "Log Hist" )
);

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Stack(
	columns( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F, :BP 6F ),
	,
	Number of Series( 3 ),
	Contiguous,
	Source Label Column( "Day" ),
	Stacked Data Column( "BP" )
);

```

**Example 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Stack(
	columns( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F, :BP 6F ),
	,
	Number of Series( 3 ),
	Source Label Column( "Time" ),
	Stacked Data Column( "BP" )
);

```

### Subscribe

**Syntax:** obj &lt;&lt; Subscribe( Key( &lt;"client"&gt; ), OnDeleteColumns| OnAddColumns| OnAddRows| OnDeleteRows| OnRenameColumn | OnClose | OnSave | OnRename (function) )

**Description:** Subscribes to get messages regarding changes in the data table. Key is the subscription name, so that it can be referenced. The optional parameter, client, will trigger a close confirmation when a close is attempted on the data table. Function can either be the name of a previously defined function, or the function itself. On Close only requires one argument to the function, the data table. The other messages require an additional argument, either a list of columns or number of rows affected. Each subscription remains in effect until you unsubscribe.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Subscribe( "name1"("client"), On Close( Print( "Closing Data Table" ) ) );
f = Function( {dtab, oldname},
	Print( "oldname", oldname );
	Print( "new name", dtab << getname() );
);
fsave = Function( {dtab, newpathname},
	Print( "new path name", newpathname );
	Print( "new name", dtab << getname() );
);
dt << Subscribe( "name1", On Rename( f ) );
dt << Subscribe( "name1", On Save( fsave ) );
fcols = Function( {dtab, b},
	n = N Items( b );
	dtname = (dtab << getname());
	Print( dtname );
	Print( n );
	For( i = 1, i <= n, i++,
		colname = (b[i] << getname());
		Print( colname );
	);
);
dt << Subscribe( "name2", On Delete Columns( fcols ) ); 
//Try deleting a column, then close the data table.

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
f = Function( {dtab, col, oldname},
	Print( dtab << getname() );
	Print( "new column name", (col << getname()) );
	Print( "old name", oldname );
);
sub = dt << Subscribe( "", OnRenameColumn( f ) );
Column( dt, 1 ) << set name( "test" );
Wait( 1 );
dt << unsubscribe( sub, on rename column );

```

**Example 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
delRowsFn = Function( {a, b, rows},
	dtname = (a << Get Name());
	Print( dtname );
	Print( b );
	Print Matrix( rows );
);
addRowsFn = Function( {a, b, insert},
	dtname = (a << Get Name());
	Print( dtname );
	Print( b );
	Print( insert );
);
dt << subscribe( "Test Delete", onDeleteRows( delRowsFn, 3 ) );
dt << subscribe( "Test Add", onAddRows( addRowsFn, 3 ) );
// Try deleting some rows and adding new ones.

```

### Subset

**Syntax:** obj &lt;&lt; Subset( &lt;Private&gt;, &lt;Invisible&gt;, &lt;Selected columns&gt;, &lt;Columns(column list)&gt;, &lt;All rows | Selected Rows | Filtered Rows(where clause) | Rows([number, number, ...])&gt;, &lt;By(column list)&gt;, &lt;Sampling Rate(fraction)&gt;, &lt;Sample Size(integer)&gt;, &lt;Stratify(column list)&gt;, &lt;Link to original data table(0|1)&gt;, &lt;Copy formula(0|1)&gt;, &lt;Suppress Formula Evaluation&gt;, &lt;Keep by columns&gt; )

**Description:** Creates a new data table from the selected rows and columns of the source data table. You can also randomly select rows to subset.

**By**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Subset( By( :sex ), Keep by columns );

```

**Filtered Rows**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Subset( Filtered Rows( :age == 14 & Contains( :name, "E" ) ) );

```

**Rows**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Subset( Rows( [28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40] ) );

```

**Stratified Sample**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Subset( Sample Size( 10 ), Stratify( :sex ) );

```

### Summary

**Syntax:** obj &lt;&lt; Summary( &lt;Private&gt;, &lt;Invisible&gt;, FREQ(column | "none"), WEIGHT(column | "none"),Group( columns ),Subgroup(columns), &lt;N (column)&gt;, &lt;Mean( column )&gt;, &lt;Std Dev( column )&gt;, &lt;Min( column )&gt;, &lt;Max( column )&gt;, &lt;Range( column )&gt;, &lt;Sum( column )&gt;, &lt;CV( column )&gt;...,Include marginal statistics, Link to original data table (0|1),statistics column name format( "stat(column)" | "column" | "stat of column" | "column stat" | "stat") )

**Description:** Creates a new data table of summary statistics. If specified, there is a row for each level of a grouping variable or each combination of levels of multiple grouping variables.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Summary(
	Group( :Age ),
	subgroup( :sex ),
	Mean( :Height ),
	Include marginal statistics
);

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Summary(
	Group( :Age ),
	Mean( :Height ),
	statistics column name format( "stat of column" )
);

```

### Suppress Formula Eval

**Syntax:** obj &lt;&lt; Suppress Formula Eval( state=0|1 )

**Description:** Suppresses or enables formula evaluation. This is useful for faster adding of rows, running multiple analyses, and sorting.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Central Limit Theorem.jmp" );
dt << Add Rows( 2000 );
dt << Suppress Formula Eval( 1 );
dt << Add Rows( 2000 );
dt << Suppress Formula Eval( 0 );

```

### Text to Columns

**Syntax:** obj &lt;&lt; Text to Columns( delimiters(&lt;"separator"&gt;, &lt;TAB&gt;, &lt;NEWLINE&gt;), columns(column1, column2, ...) )

**Description:** Convert a column of strings with embedded delimiter into separate columns. The resultant columns can be indicator columns. Delimiters can be any character, the key word TAB, or the key word NEWLINE.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << Text To Columns( delimiter( "," ), columns( :Brush Delimited ) );

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << Text To Columns(
	delimiter( "," ),
	columns( :Brush Delimited ),
	Make Indicator Columns( 1 )
);

```

### Torch Deep Learning

**Syntax:** obj &lt;&lt; Torch Deep Learning

**Description:** Interface to Torch Deep Learning Add-in Platform

### Transform Column

**Syntax:** dt &lt;&lt; Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Replace(0|1)], [Private(0|1)], [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]

**Description:** Create a transform column associated with the target table. The transform column can be accessed like a real column. 

	Name: Name of the column

	Formula: The formula that defines the data in the transform column

	Replace: With this flag, a transform defined with the same name as an existing transform will replace the existing transform. Without this flag, the existing transform will be returned if it is equivalent; otherwise the name of the new column will be changed to be distinct.

	Private: With this flag, the column will not show up in column selector lists

	Data type: Optionally specify the data type. If not specified, it will be inferred from the first row.

	Modeling type: Optionally specify the modeling type. If not specified, the default for the data type will be used

	Column Properties: These are any standard column properties you wish to set. You can also set them on the column after it is created.

**Nested**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Transform Column( "A", Formula( :B + 1 ) );
dt << Transform Column( "B", Formula( :height + 1 ) );
Show( :A[1] );
dt << Delete Columns( {:A, :B} );

```

**Random**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Transform Column( "Predictable", Formula( Random Uniform() ), Random Seed( 314 ) );
dt << Transform Column( "Random", Formula( Random Uniform() ) );
Show( :Predictable[1], :Random[1] );
dt << Delete Columns( {:Predictable, :Random} );

```

**Simple**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Transform Column( "A", Formula( :height + 1 ) );
Show( :A[1] );
dt << Delete Columns( :A );

```

### Transpose

**Syntax:** obj &lt;&lt; Transpose( &lt;Private&gt;, &lt;Invisible&gt;,columns( columns ), By( column ), &lt;Label( column )&gt;, &lt;Output Table( name )&gt; )

**Description:** Creates a new data table from the source table where the rows and columns are interchanged.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Transpose(
	columns( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F, :BP 6F ),
	By( :Dose ),
	Label( :Subject )
);

```

### Type 1 Gauge

**Syntax:** obj &lt;&lt; Type 1 Gauge( Y( column ) )

**Description:** Analyzes measurement systems on continuous data using the Type 1 Gauge method to evaluate the capability of a measurement process on one part.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Type 1 Gauge MSA.jmp" );
dt << Type 1 Gauge(
	Y( :Y1, :Y2, :Y3 ),
	Type 1 Gauge Metadata(
		:Y1( Tolerance Range( 2 ), Reference( 50.014 ), Resolution( .001 ) ),
		:Y2( Tolerance Range( 6 ), Reference( 24.9 ), Resolution( .01 ) ),
		:Y3( Tolerance Range( 5 ), Reference( 10 ), Resolution( .0005 ) )
	)
);

```

### Ungroup Columns

**Syntax:** obj &lt;&lt; Ungroup Columns( {column1, column2, ...} | Column Group( group name ) )

**Description:** Ungroups a list of columns.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Group Columns( "Monday", BP 8M, 3 );
dt << Group Columns( "Wednesday", BP 8W, 3 );
dt << Group Columns( "Friday", BP 8F, 3 );
Wait( 2 );
dt << Ungroup Columns();

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Group Columns( "Monday", BP 8M, 3 );
dt << Group Columns( "Wednesday", BP 8W, 3 );
dt << Group Columns( "Friday", BP 8F, 3 );
Wait( 2 );
dt << Ungroup Columns( Column Group( "Monday" ) );

```

### Ungroup Scripts

**Syntax:** obj &lt;&lt; Ungroup Scripts( name of script group | list of scripts )

**Description:** Ungroup a list of scripts. If scripts are not given, selected scripts will be detached from its group. All of the groups will be removed from their grouping if no script is given and no script is selected.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << group scripts( "VL", {"Set Sex Value Labels", "Set Age Value Labels"} );
Wait( 1 );
dt << ungroup scripts( "VL" );
Wait( 1 );
dt << ungroup scripts( {"Graph Builder Line and Bar Charts", "Graph Builder Heat Map"} );

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << group scripts( "VL", {"Set Sex Value Labels", "Set Age Value Labels"} );
Wait( 1 );
dt << select scripts( {"Graph Builder Smoother Line", "Graph Builder Line Chart"} );
Wait( 1 );
dt << ungroup scripts();

```

### Unsubscribe

**Syntax:** obj &lt;&lt; Unsubscribe( Key, OnDeleteColumns| OnAddColumns| OnAddRows| OnDeleteRows| OnClose | OnColRename | All )

**Description:** Cancel previous subscription to the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Subscribe( "myname", On Close( Print( "Closing Data table" ) ) );
dt << Unsubscribe( "myname", On Close );

```

### Update

**Syntax:** obj &lt;&lt; Update( With( Data Table( name )), Match Columns( column1 = column2, ...), Selected( columns ), Add columns from Update table(&lt;ALL&gt;, &lt;NONE&gt;, &lt;{column1, column2, ...}&gt;), Replace columns in main table(&lt;ALL&gt;, &lt;NONE&gt;, &lt;{column1, column2, ...}&gt;), &lt;Ignore missing&gt; )

**Description:** Merges a table of updated data into the original data table by adding or replacing selected columns.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Trial1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Little.jmp" );
dt << Update(
	With( Data Table( "Little" ) ),
	Match Columns( :popcorn = :popcorn, :batch = :batch, :oil amt = :oil )
);

```

**Example 2**

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt2 = New Table( "Little Class",
	Add Rows( 3 ),
	New Column( "name", Character, Nominal, Set Values( {"KATIE", "ALFRED", "HENRY"} ) ),
	New Column( "height", Continuous, Set Values( [999, 999, 999] ) ),
	New Column( "weight", Continuous, Set Values( [999, 999, 999] ) ),
	New Column( "RANK", Continuous, Set Values( [3, 1, 2] ) ),
	New Column( "CODE", Continuous, Set Values( [0, 1, 1] ) )
);
dt1 << Update(
	With( Data Table( "Little Class" ) ),
	Match Columns( :name = :name ),
	Add columns from Update table( {:RANK} ),
	Replace columns in Main Table( {:height} )
);

```

**Example 3**

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt2 = New Table( "Little Class",
	Add Rows( 3 ),
	New Column( "name", Character, Nominal, Set Values( {"KATIE", "ALFRED", "HENRY"} ) ),
	New Column( "height", Continuous, Set Values( [999, 999, 999] ) ),
	New Column( "weight", Continuous, Set Values( [999, 999, 999] ) ),
	New Column( "RANK", Continuous, Set Values( [3, 1, 2] ) ),
	New Column( "CODE", Continuous, Set Values( [0, 1, 1] ) )
);
dt1 << Update(
	With( Data Table( "Little Class" ) ),
	Match Columns( :name = :name ),
	Add columns from Update table( {:RANK} )
);

```

### Update From Database

**Syntax:** obj &lt;&lt; Update From Database( connectInfo )

**Description:** Updates the data in the table with data re-imported from the database.

```jsl

Names Default To Here( 1 );
dt = Open Database( "DSN=somedb; UID=userid;pwd=PW", "SELECT * FROM DB.TABLE" );
dt << Update From Database( "Connect Dialog" );

```

### XGBoost

**Syntax:** obj &lt;&lt; XGBoost

**Description:** Experimental interface to XGBoost for stochastic gradient boosting predictive modeling.

### set private

**Syntax:** obj &lt;&lt; set private( &lt;1|0&gt; )

**Description:** Make the table private. A private table is omitted from the data table list and subscriptions.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Show( Get Data Table List() );
Wait( 1 );

dt << Set Private;
Show( Get Data Table List() );
Wait( 1 );

dt << Set Private( 0 );
Show( Get Data Table List() );
Wait( 1 );

Close( dt, No Save );

```

## Column Scripting

### Item Messages

#### Add Column Properties

**Syntax:** obj &lt;&lt; Add Column Properties

**Description:** Adds properties to the selected column.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Age << Add Column Properties( List Check( {17, 16, 15, 14, 13, 12} ) );

```

#### Add From Row States

**Syntax:** obj &lt;&lt; Add From Row States

**Description:** Updates a row state column with any currently used row state changes that are not the default state.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death.jmp" );
dt << New Column( "Row State Col", Row State, Copy from Row States );
dt << Select Rows( 1 );
dt << Select Rows( 5 );
dt << Exclude();
col = Column( "Row State Col" );
col << Add From Row States();

```

#### Add To Row States

**Syntax:** obj &lt;&lt; Add To Row States

**Description:** Copies all row state values in a column that are not the default state to the currently used row state in the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Pickles.jmp" );
col = Column( "Time Marker" );
col << Copy To Row States();
col[5] = Color State( "Red" );
Wait( 2 );
col << Add To Row States();

```

#### Codes to Labels

**Syntax:** :col &lt;&lt; Codes To Labels(&lt;AssociativeArray&gt;|&lt;ListOfAssignments&gt;)

**Description:** Make a column of character values using value labels corresponding to the original codes.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Big Class.jmp" );
:age << Value Labels(
	{12 = "12!", 13 = "13!", 14 = "14!", 15 = "15!", 16 = "16!", 17 = "17!"}
);
:age << Codes to Labels;

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Big Class.jmp" );
:sex << Labels to Codes( ["F" => 1, "M" => 2] );
:sex << Codes To Labels( [1 => "Female", 2 => "Male"] );

```

**Example 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Big Class.jmp" );
:sex << Labels to Codes( ["F" => 1.5, "M" => 2.5] );
:sex << Codes To Labels( {1.5 = "Female", 2.5 = "Male"} );

```

#### Color Cell by Value

**Syntax:** obj &lt;&lt; Color Cell by Value( state=0|1 )

**Description:** Changes the display color for cells in the column.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Age << Set Property(
	"Value Colors",
	{12 = -13977430, 13 = -3780930, 14 = -4157407, 15 = -13596965, 16 = -2210961, 17 =
	-10562523}
);
Wait( 1 );
:Age << Color Cell by Value( 1 );

```

#### Color Cells

**Syntax:** obj &lt;&lt; Color Cells( color, &lt;row | { row1, row2, ...} &gt; )

**Description:** Color the cells in the column with the specified color. If rows are not given, the same color is applied to the entire column.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Age << Color Cells( "Red" );

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
a = {1, 3, 5};
:Age << Color Cells( "Red", a );

```

**Example 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
a = {1, 3, 5};
b = {2, 4, 6};
:height << color cells( {{"Red", a}, {"blue", b}} );

```

#### Compact

**Syntax:** :col &lt;&lt; Compact( &lt;1|0&gt; )

**Description:** Changes a character column&apos;s internals so it only stores one copy of each value, potentially saving memory and speeding up some operations. The optional Save Format controls the format in which the column is saved. The condensed format is smaller and faster to load, but the table cannot be opened in JMP 17 and earlier. The Default format uses the save format preference.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Air Traffic.jmp" );
:Airline << Compact();

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Air Traffic.jmp" );
:Airline << Compact();
:Airline << Get Compact;

```

#### Convert to Table Column

**Syntax:** obj &lt;&lt; Convert to Table Column

**Description:** Adds the transform column to the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Transform Column( "New Col", Formula( 1 ) );
:NewCol << Convert to Table Column();

```

#### Copy from Row States

**Syntax:** obj &lt;&lt; Copy from Row States

**Description:** Copies all row state values currently used in the data table to a column.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death.jmp" );
dt << New Column( "Row State Col", Row State, Copy from Row States );

```

#### Copy to Row States

**Syntax:** obj &lt;&lt; Copy to Row States

**Description:** Copies all row state values in a column to the currently used row state in the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Pickles.jmp" );
col = Column( "Time Marker" );
Wait( 2 );
col << Copy To Row States();

```

#### Data Type

**Syntax:** obj &lt;&lt; Data Type( "Numeric"|"Character"|"Expression"|"Row State", &lt;Format("format string")&gt;, &lt;Input Format("format string")&gt;, &lt;1|2|4&gt;, &lt; &lt;&lt;Fail On Conversion Error &gt;, &lt; &lt;&lt;Return Failed Rows &gt; )

**Description:** Sets the data type for the column. Using the optional arguments, you can also set the format, input format, and the width in bytes if the column is numeric. Fail On Conversion Error aborts the data type change if any values fail to convert. This is especially useful when converting a character column to a numeric column. Return Failed Rows returns a list containing indices of the rows that failed to convert.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Time",
	"Character",
	"Nominal",
	Set Values( {"13:32", "20:10", "20:12", "14:56"} )
);
Wait( 2 );
dt:Time << Set Data Type( "Numeric", Format( "h:m", 12 ), Input Format( "h:m" ) );
dt:Time << Set Modeling Type( "Continuous" );

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
dt:Age << Set Data Type( "Character" );
dt:Height << Set Data Type( "Numeric", 2 );

```

**Example 3**

```jsl

Names Default To Here( 1 );
dt = New Table( "My Table",
	New Column( "col1",
		Character,
		"Nominal",
		Set Values( {"123", "456", "abc", "789", "", "def"} )
	)
);
r = dt:col1 << Set Data Type( "Numeric", <<Fail On Conversion Error, <<Return Failed Rows );
Show( r );

```

**Example 4**

```jsl

Names Default To Here( 1 );
dt = New Table( "My Table",
	New Column( "col1",
		Character,
		"Nominal",
		Set Values( {"123", "456", "abc", "789", "", "def"} )
	)
);
r = dt:col1 << Set Data Type( "Numeric", <<Return Failed Rows );
Show( r );

```

#### Delete Formula

**Syntax:** obj &lt;&lt; Delete Formula

**Description:** Deletes any formula in the column.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Bank Loan.jmp" );
:Time << Delete Formula;

```

#### Delete Property

**Syntax:** obj &lt;&lt; Delete Property( property name )

**Description:** Deletes the named property from the column.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Bank Loan.jmp" );
:Time << Delete Property( "Spec Limits" );

```

#### Eval Formula

**Syntax:** obj &lt;&lt; Eval Formula

**Description:** Evaluates the formula in the column.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = New Column( "Ratio" );
col << Set Formula( :Height / :Weight );
col << Eval Formula;

```

#### Format

**Syntax:** obj &lt;&lt; Format( "Best|Fixed Dec...", &lt;width&gt;, &lt;dec&gt;, &lt;"Use Thousands Separator"&gt; )obj &lt;&lt; Format( "mdy|ddmmyy|Long Date...", width )obj &lt;&lt; Format( "Format Pattern", pattern )obj &lt;&lt; Format("Currency", &lt;Country symbol&gt;, &lt;width&gt;, &lt;"Use Thousands Separator"&gt; ) obj &lt;&lt; Format("Use Thousands Separator" )

**Description:** Sets the format used for displaying data in the column. Available formats include all items in the Column Info dialog under format.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Height << Format( "Fixed Dec", 6, 3 );

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/XYZ Stock Averages (plots).jmp" );
:Date << Format( "ddMonyyyy", 9 );
:DJI High << Format( "Currency" );
:DJI Close << Format( "best", "Use Thousands Separator", 10, 0 );
:DJI Low << Format( "Fixed Dec", "Use Thousands Separator", 10, 2 );

```

**Example 3**

```jsl

Names Default To Here( 1 );
dt = New Table( "hour24_times",
	Add Rows( 3 ),
	New Column( "time",
		Continuous,
		Format( "Format Pattern", "<hh24><:><mm><:><ss>" ),
		Set Values( {"01:23:45", "18:19:20", "23:45:01"} )
	)
);

```

#### Formula

**Syntax:** obj &lt;&lt; Set Formula( formula ) obj &lt;&lt; Formula( formula )

**Description:** Sets the formula in the column.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = New Column( "Ratio" );
col << Set Formula( :Height / :Weight );

```

#### Get Column Properties

**Syntax:** obj &lt;&lt; Get Column Properties

**Description:** Copies all properties defined in the selected columns.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
:HARDNESS << Get Column Properties();

```

#### Get Compact

**Syntax:** obj &lt;&lt; Get Compact

**Description:** Is compact set on the column

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Air Traffic.jmp" );
Show( :Airline << Get Compact );

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Air Traffic.jmp" );
:Airline << Compact();
Show( :Airline << Get Compact );

```

#### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Description:** Gets the column&apos;s data table.

```jsl

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );
c = Column( dt1, "Age" );
Show( c << Get Name, c << Get Data Table );

```

#### Get Data Type

**Syntax:** obj &lt;&lt; Get Data Type( &lt;"English"&gt; )

**Description:** Returns the data type for the column. If the keyword "English" is omitted, the data type is returned in the language that JMP is running in.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
which = dt:Age << Get Data Type;
Show( which );

```

#### Get Data Type Length

**Syntax:** obj &lt;&lt; Get Data Type Length( &lt;English&gt; )

**Description:** Returns the data type and data length of the column. Only the data type is returned if the data length is not fixed, like most character columns.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
which = dt:Age << Get Data Type Length;
Show( which );

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = New Table( "Little Class",
	Add Rows( 3 ),
	New Column( "name", Character( 8 ), Nominal, Set Values( {"KATIE", "CAROL", "MARTHA"} ) ),
	New Column( "Age", Numeric( 2 ), Set Values( [12, 14, 16] ) )
);
nameTypeLength = dt:Name << Get Data Type Length;
ageTypeLength = dt:Age << Get Data Type Length;
Show( nameTypeLength, ageTypeLength );

```

#### Get Display Width

**Syntax:** obj &lt;&lt; Get Display Width

**Description:** Get column&apos;s display width.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 0 );
w = :Height << Get Display Width;

```

#### Get Excluded

**Syntax:** obj &lt;&lt; Get Excluded

**Description:** Returns 1 if the column is excluded

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = :Weight << Get excluded;
Show( s );

```

#### Get Field Width

**Syntax:** obj &lt;&lt; Get Field Width

**Description:** Returns the field width used for displaying data in the column.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
width = :Height << Get Field Width;
Show( width );

```

#### Get Format

**Syntax:** obj &lt;&lt; Get Format

**Description:** Returns the format for the column.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
f = :Height << Get Format;
Show( f );

```

#### Get Formula

**Syntax:** obj &lt;&lt; Get Formula

**Description:** Returns the formula in the column.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = New Column( "Ratio" );
col << Set Formula( :Height / :Weight );
col << Eval Formula;
result = col << Get Formula;
Show( result );

```

#### Get Group Name

**Syntax:** obj &lt;&lt; Get Group Name

**Description:** Return the group name or path of the group containing this column, if any.

**Nested Group**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Group Columns( "XYZ", :sex, 3 );
dt << Group Columns( Path( "XYZ", "Measures" ), :height, 2 );
Show( :height << Get Group Name );

```

**Simple Group**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Group Columns( :height, 2 );
Show( :height << Get Group Name );

```

#### Get Header Background Color

**Syntax:** obj &lt;&lt; Get Header Background Color

**Description:** Get the header color

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Header Background Color( "Light Red" );
Show( :height << Get Header Background Color );

```

#### Get Header Chart Type

**Syntax:** obj &lt;&lt; Get Header Chart Type

**Description:** Gets the type of chart displayed in the data table column header.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Show( :height << Get Header Chart Type );

```

#### Get Header Text Color

**Syntax:** obj &lt;&lt; Get Header Text Color

**Description:** Get the header text color

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Header Text Color( "Dark Purple" );
Show( :height << Get Header Text Color );

```

#### Get Hidden

**Syntax:** obj &lt;&lt; Get Hidden

**Description:** Returns 1 if the column is hidden

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = :Weight << Get hidden;
Show( s );

```

#### Get Initial Data

**Syntax:** obj &lt;&lt; Get Initial Data

**Description:** Get the value or the expression used to initialize column&apos;s data.

```jsl

Names Default To Here( 1 );
dt = New Table( "MyDt" );
dt << Add Rows( 5 );
Column( dt, 1 ) << set initial data( Log( 1 ) );
Column( dt, 1 ) << get initial data;

```

#### Get Input Format

**Syntax:** obj &lt;&lt; Get Input Format

**Description:** Returns the format used for inputting and storing the data for the column.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
f = :Date << Get Input Format;
Show( f );

```

#### Get Labeled

**Syntax:** obj &lt;&lt; Get Labeled

**Description:** Returns 1 if the column is labeled

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = :Weight << Get labeled;
Show( s );

```

#### Get List Check

**Syntax:** obj &lt;&lt; Get List Check

**Description:** Returns the List Check, if defined in the column.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Movies.jmp" );
prop = :Type << Get List Check;
Show( prop );

```

#### Get Lock

**Syntax:** obj &lt;&lt; Get Lock

**Description:** Returns true if a column is locked.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );
lock = :Prin1 << Get Lock;
Show( lock );

```

#### Get Modeling Type

**Syntax:** obj &lt;&lt; Get Modeling Type( &lt;"English"&gt; )

**Description:** Returns the modeling type for the column. If the keyword "English" is omitted, the modeling type is returned in the language that JMP is running in.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
which = :Age << Get Modeling Type;
Show( which );

```

#### Get Name

**Syntax:** obj &lt;&lt; Get Name

**Description:** Returns the name of the column.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col name = Column( 4 ) << Get Name;
Show( col name );

```

#### Get Properties List

**Syntax:** obj &lt;&lt; Get Properties List

**Description:** Get the list of names of all the properties for this column

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
:HARDNESS << Get Properties List();

```

#### Get Property

**Syntax:** obj &lt;&lt; Get Property( Notes| Range Check| List Check| Missing Value Codes| Value Labels| Value Scores | Value Order | Value Colors| Color Gradient| Axis| Units| Response Limits| Design Role| Coding| Mixture| Factor Changes | Spec Limits| Control Limits| Process Screening | Sigma| Process Capability Distribution| MSA | Distribution | Time Frequency| Map Role| Super Categories | Multiple Response | Target Level | Control Level| Profit Matrix | Expression Role | Event Handler | Link ID | Link Reference | Next In Hierarchy )

**Description:** Returns specific properties, if defined in the column.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Bank Loan.jmp" );
prop = :Credit Check << Get Property( "Axis" );
Show( prop );

```

#### Get Range Check

**Syntax:** obj &lt;&lt; Get Range Check

**Description:** Returns the Range Check, if defined in the column.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Height << Range Check( LE LT( 48, 75 ) );
check = :Height << Get Range Check;
Show( check );

```

#### Get Role

**Syntax:** obj &lt;&lt; Get Role( &lt;"English"&gt; )

**Description:** Returns the role for the column. If the keyword "English" is omitted, the role is returned in the language that JMP is running in.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
which = :Count << Get Role();
Show( which );

```

#### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Description:** Returns the script to recreate the column.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = :Age << Get Script;
Show( s );

```

#### Get Scroll Locked

**Syntax:** obj &lt;&lt; Get Scroll Locked

**Description:** Returns 1 if the column is scroll locked

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = :Weight << Get Scroll locked;
Show( s );

```

#### Get Selected

**Syntax:** obj &lt;&lt; Get Selected

**Description:** Returns 1 if the column is selected.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = :Weight << Get Selected;
Show( s );

```

#### Get Stored Values

**Syntax:** obj &lt;&lt; Get Stored Values

**Description:** Returns the values in the columns without Missing Values Codes conversion

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Height << Set Property( "Missing Value Codes", 65 );
valuesMatrix = :Height << Get Stored Values;
Show( valuesMatrix );
valuesList = :Height << GetStoredValues(
	Format(/* a numeric column will be list of character items if a format is supplied, see format function */
		"Currency",
		"EUR",
		2,
		<<use locale(
			0 /* ignore locale and use period for decimal.  the default is 1: use the locale. */
		)
	)
);
Show( valuesList );

```

#### Get Use Value Labels

**Syntax:** obj &lt;&lt; Get Use Value Labels

**Description:** Returns the state of the Use Value Labels flag.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
flag = :Color << Get Use Value Labels;
Show( flag );

```

#### Get Value Labels

**Syntax:** obj &lt;&lt; Get Value Labels

**Description:** Returns the value labels, if defined in the column.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
values = :Color << Get Value Labels;
Show( values );

```

#### Get Values

**Syntax:** obj &lt;&lt; Get Values

**Description:** Returns the values in the column.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
valuesMatrix = :Height << Get Values;
Show( valuesMatrix );
valuesList = :Height << GetValues(
	Format(/* a numeric column will be list of character items if a format is supplied, see format function */
		"Currency",
		"EUR",
		2,
		<<use locale(
			0 /* ignore locale and use period for decimal.  the default is 1: use the locale. */
		)
	)
);
Show( valuesList );

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Height << Set Property( "Missing Value Codes", 65 );
valuesMatrix = :Height << Get Values;
Show( valuesMatrix );
valuesList = :Height << GetValues(
	Format(/* a numeric column will be list of character items if a format is supplied, see format function */
		"Currency",
		"EUR",
		2,
		<<use locale(
			0 /* ignore locale and use period for decimal.  the default is 1: use the locale. */
		)
	)
);
Show( valuesList );

```

#### Ignore Errors

**Syntax:** obj &lt;&lt; Ignore Errors( state=0|1 )

**Description:** Set the flag to ignore errors when a column formula is being evaluated

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = New Column( "Ratio" );
col << Set Formula( :Height / :Weight );
col << ignore errors( true );

```

#### Input Format

**Syntax:** obj &lt;&lt; Input Format( format )obj &lt;&lt; Input Format( "Format Pattern", pattern )

**Description:** Sets the format used for inputting and storing the data for the column. This is often used for date and time formats.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
:Date << Input Format( "ddmmyyyy" );

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = New Table( "duration_table",
	Add Rows( 3 ),
	New Column( "durations",
		Continuous,
		Format( "Format Pattern", "<Hour><:><mm><:><ss>" ),
		Input Format( "Format Pattern", "<Hour>h <mm>m <ss>s" ),
		Set Values( {"65h 43m 21s", "12h 34m 56s", "4h 32m 10s"} )
	)
);

```

#### Is Transform Column

**Syntax:** obj &lt;&lt; Is Transform Column

**Description:** Returns 1 if the column is a transform column, 0 otherwise.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Is Transform Column();

```

#### IsTransformedOnSASExport

**Syntax:** obj &lt;&lt; IsTransformedOnSASExport

**Description:** Returns true if the data in the resulting SAS dataset for this column will be changed upon exporting to SAS. Note: This applies only to date columns, as dates are stored differently in SAS and JMP.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
flag = :Date << Is Transformed On SAS Export;
Show( flag );

```

#### Labels to Codes

**Syntax:** :col &lt;&lt; Labels to Codes(&lt;AssociativeArray&gt;|&lt;ListOfAssignments&gt;)

**Description:** Make a column of numeric codes with value labels corresponding to the original character values.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Big Class.jmp" );
:sex << Labels to Codes;

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Big Class.jmp" );
:sex << Labels to Codes( ["F" => 10, "M" => 20] );

```

**Example 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Big Class.jmp" );
:sex << Labels to Codes( {"F" = 10, "M" = 20} );

```

#### Lock

**Syntax:** obj &lt;&lt; Lock

**Description:** Locks the column from any further changes.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Age << Lock( 1 );

```

#### Preselect Role

**Syntax:** obj &lt;&lt; Preselect Role( "No Role"|"X"|"Y"|"Weight"|"Freq"|"Validation" )

**Description:** Assigns a preselected role to the data table column.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Weight << Preselect Role( "Y" );

```

#### Remove Value Labels

**Syntax:** obj &lt;&lt; Remove Value Labels

**Description:** Removes any value labels defined in the column.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
:Color << Remove Value Labels;

```

#### Reset Transform

**Syntax:** obj &lt;&lt; Reset Transform

**Description:** Removes the cached data for the transform column. Accessing column data will rebuild the cache. Use this to reduce memory or to allow recalculation if the formula depends on external information.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
global:a = 2;
dt << Transform Column( "sqrt[height]", Formula( global:a * Sqrt( :height ) ) );
Show( :"sqrt[height]"n[1] );
global:a = 3;
:"sqrt[height]"n << Reset Transform();
Show( :"sqrt[height]"n[1] );

```

#### Set Data Type

**Syntax:** obj &lt;&lt; Set Data Type( "Numeric"|"Character"|"Expression"|"Row State", &lt;Format("format string")&gt;, &lt;Input Format("format string")&gt;, &lt;1|2|4&gt;, &lt; &lt;&lt;Fail On Conversion Error &gt;, &lt; &lt;&lt;Return Failed Rows &gt; )

**Description:** Sets the data type for the column. Using the optional arguments, you can also set the format, input format, and the width in bytes if the column is numeric. Fail On Conversion Error aborts the data type change if any values fail to convert. This is especially useful when converting a character column to a numeric column. Return Failed Rows returns a list containing indices of the rows that failed to convert.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Time",
	"Character",
	"Nominal",
	Set Values( {"13:32", "20:10", "20:12", "14:56"} )
);
Wait( 2 );
dt:Time << Set Data Type( "Numeric", Format( "h:m", 12 ), Input Format( "h:m" ) );
dt:Time << Set Modeling Type( "Continuous" );

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
dt:Age << Set Data Type( "Character" );
dt:Height << Set Data Type( "Numeric", 2 );

```

**Example 3**

```jsl

Names Default To Here( 1 );
dt = New Table( "My Table",
	New Column( "col1",
		Character,
		"Nominal",
		Set Values( {"123", "456", "abc", "789", "", "def"} )
	)
);
r = dt:col1 << Set Data Type( "Numeric", <<Fail On Conversion Error, <<Return Failed Rows );
Show( r );

```

**Example 4**

```jsl

Names Default To Here( 1 );
dt = New Table( "My Table",
	New Column( "col1",
		Character,
		"Nominal",
		Set Values( {"123", "456", "abc", "789", "", "def"} )
	)
);
r = dt:col1 << Set Data Type( "Numeric", <<Return Failed Rows );
Show( r );

```

#### Set Display Width

**Syntax:** obj &lt;&lt; Set Display Width( number )

**Description:** Change column&apos;s display width.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 0 );
w = :Height << Get Display Width;
:Height << Set Display Width( 2 * w );

```

#### Set Each Value

**Syntax:** obj &lt;&lt; Set Each Value( number )

**Description:** Sets all the values in a column to a constant.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "X" );
dt:X << Set Each Value( 5 );

```

#### Set Excluded

**Syntax:** obj &lt;&lt; Set Excluded

**Description:** Excludes the column.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Weight << Set excluded;

```

#### Set Field Width

**Syntax:** obj &lt;&lt; Set Field Width( number )

**Description:** Sets the field width used for displaying data in the column.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Height << Set Field Width( 20 );

```

#### Set Formula

**Syntax:** obj &lt;&lt; Set Formula( formula ) obj &lt;&lt; Formula( formula )

**Description:** Sets the formula in the column.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = New Column( "Ratio" );
col << Set Formula( :Height / :Weight );

```

#### Set Header Background Color

**Syntax:** obj &lt;&lt; Set Header Background Color

**Description:** Set the header color. Set to "None" to use the default color

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Header Background Color( "Light Red" );

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Header Background Color( {250, 200, 150} );

```

#### Set Header Chart Type

**Syntax:** obj &lt;&lt; Set Header Chart Type

**Description:** Sets the type of chart to display in the data table column header.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Header Chart Type( "Run Chart" );

```

#### Set Header Text Color

**Syntax:** obj &lt;&lt; Set Header Text Color

**Description:** Set the header text color. Set to "None" to use the default color

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Header Text Color( "Dark Purple" );

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Header Text Color( {100, 50, 100} );

```

#### Set Hidden

**Syntax:** obj &lt;&lt; Set Hidden

**Description:** Hides the column.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Weight << Set hidden;

```

#### Set Initial Data

**Syntax:** obj &lt;&lt; Set Initial Data

**Description:** Initialize the column&apos;s data with any constant, or a simple expression.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = New Table( "MyDt", New Column(), New Column() );
dt << Add Rows( 5 );
Column( dt, 1 ) << set initial data( Today() );
Column( dt, 2 ) << set initial data( 99 );

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = New Table( "MyDt" );
dt << Add Rows( 5 );
Column( dt, 1 ) << set initial data( Log( 1 ) );

```

#### Set Labeled

**Syntax:** obj &lt;&lt; Set Labeled

**Description:** Use the column&apos;s data value for label.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Weight << Set labeled;

```

#### Set Modeling Type

**Syntax:** obj &lt;&lt; Set Modeling Type( "None"|"Continuous"|"Ordinal"|"Nominal"|"Row State"|"Multiple Response"|"Unstructured Text"|"Vector" )

**Description:** Sets the modeling type for the data table column.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Age << Set Modeling Type( "Continuous" );

```

#### Set Name

**Syntax:** obj &lt;&lt; Set Name( name )

**Description:** Sets the column name.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Age << Set Name( "Time" );

```

#### Set Property

**Syntax:** obj &lt;&lt; Set Property( Notes | List Check | Range Check | Axis | Spec Limits | Control Limits | Sigma | Process Capability Distribution | Coding | Mixture | Design Role | Response Limits | Units | Value Order | Value Labels | Value Scores | Row Order Levels | Distribution | Time Frequency | Value Colors | Color Gradient | Missing Value Codes | Factor Change | Map Role | Supercategories | Multiple Response | Profit Matrix | Informative Missing | Expression Role | Link ID | Link Reference | Event Handler | Custom Property, {argument list} )

**Description:** Sets properties in the column.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Weight << Set Property( "Units", lbs );

```

#### Set Scroll Locked

**Syntax:** obj &lt;&lt; Set Scroll Locked

**Description:** Scroll locks the column.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Weight << Set Scroll locked;

```

#### Set Selected

**Syntax:** obj &lt;&lt; Set Selected( state=0|1 )

**Description:** Selects the column.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Height << Set Selected( 1 );

```

#### Set Use for Marker

**Syntax:** obj &lt;&lt; Set Use for Marker

**Description:** Use the values in this column as the markers in a graph.  Expression columns with pictures or character columns with IDs might work well.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Name << Set Use for Marker;

```

#### Set Values

**Syntax:** obj &lt;&lt; Set Values( [ value1, value2, value3, ... ] )

**Description:** Sets the values in a column.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "X" );
:X << Set Values(
	[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9,
	10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
);

```

#### SetLock

**Syntax:** obj &lt;&lt; SetLock

**Description:** Locks the column from any further changes.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Age << Lock( 1 );

```

#### Suppress Eval

**Syntax:** obj &lt;&lt; Suppress Eval( state=0|1 )

**Description:** Set the flag to suppress evaluation of the formula in the column.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = New Column( "Ratio" );
col << Set Formula( :Height / :Weight );
col << suppress eval( true );

```

#### Use Value Labels

**Syntax:** obj &lt;&lt; Use Value Labels( state=0|1 )

**Description:** Substitutes value labels defined in the column in all output.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
:Color << Use Value Labels( 1 );
Distribution( Column( :Color ) );

```

#### Value Labels

**Syntax:** obj &lt;&lt; Value Labels( { value1 = "label1", value2 = "label2", ... } )

**Description:** Sets the Value Labels

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:sex << Value Labels( {"F" = "Female", "M" = "Male"} );

```

## Data Table Cols

### Associated Constructors

#### Column

**Syntax:** y = Column( name|number );y = Column( dataTable, name|number, &lt;"formatted"&gt; )

**Description:** Returns a reference to the specified data table column.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = Column( "height" );

```

### Item Messages

#### Add Multiple Columns

**Syntax:** obj &lt;&lt; Add Multiple Columns( Column prefix, number of columns, &lt;before first|after last|after(column)&gt;, Character|Numeric|Row State, &lt;fieldwidth(number)&gt; )

**Description:** Creates multiple new columns in the current data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Add Multiple Columns( "Date", 5, Character );

```

#### Clear Column Selection

**Syntax:** obj &lt;&lt; Clear Column Selection

**Description:** Clears the column selection in the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Go To( :BP 12F );
Wait( 2 );
dt << Clear Column Selection();

```

#### Clone Formula Column

**Syntax:** obj &lt;&lt; Clone Formula Column( column, n, &lt;Substitute Column Reference( column1, list )&gt; )

**Description:** Creates n new formula columns based on the given column. Column references to column1 from the original formula will be replaced by each column in list for all n columns. Use multiple Substitute Column Reference arguments when replacing more than one column reference from the original formula.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << New Column( "Day 1", Formula( (:BP 8M + :BP 12M + :BP 6M) / 3 ) );
list1 = {:BP 8W, :BP 8F};
list2 = {:BP 12W, :BP 12F};
list3 = {:BP 6W, :BP 6F};
dt << Clone Formula Column(
	"Day 1",
	2,
	Substitute Column Reference( :BP 8M, list1 ),
	Substitute Column Reference( :BP 12M, list2 ),
	Substitute Column Reference( :BP 6M, list3 )
);

```

#### Columns Manager

**Syntax:** obj &lt;&lt; Columns Manager

**Description:** Invoke the Columns Manager on the current table, showing properties and statistics for the columns.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col1 = dt << Columns Manager;

```

#### Combine Columns

**Syntax:** obj &lt;&lt; Combine Columns

**Description:** Combine a set of columns into a delimited (multiple response) column.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << Combine Columns(
	delimiter( "," ),
	Columns(
		:Brush After Waking Up, :Brush After Meal, :Brush Before Sleep, :Brush Another Time
	),
	Selected Columns are Indicator Columns( 1 ),
	Column Name( "When to Brush" )
);

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << Combine Columns(
	delimiter( "," ),
	Columns(
		:Brush After Waking Up, :Brush After Meal, :Brush Before Sleep, :Brush Another Time
	),
	Column Name( "When to Brush" )
);

```

#### Compress Selected Columns

**Syntax:** obj &lt;&lt; Compress Selected Columns( { column1, column2, ... )

**Description:** Compresses each column into the most compact form.

Character data will be 1-byte if there are fewer than 255 levels.

Numeric data will be 1-byte if the data is between -127 and 127.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Compress Selected Columns( {:Age, :sex, :Height, :Weight} );

```

#### Exclude/Unexclude

**Syntax:** obj &lt;&lt; Exclude( 0|1 )

**Description:** Excludes the column from any analysis run.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:Name << Exclude( 1 );

```

#### Formula

**Syntax:** obj &lt;&lt; Formula

**Description:** Sets a formula in the column.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col1 = dt << New Column( "Ratio", Numeric, Continuous );
col1 << Formula( :height / :weight );

```

#### Freq

**Syntax:** obj &lt;&lt; Preselect Role( Freq )

**Description:** Assigns the Freq role to the data table column

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = Column( "weight" );
col << Preselect Role( "freq" );

```

#### Go to

**Syntax:** obj &lt;&lt; Go to( column name|column number )

**Description:** Selects and moves to the specified column in the current data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Go to( :BP 12F );

```

#### Hide/Unhide

**Syntax:** obj &lt;&lt; Hide( 0|1 )

**Description:** Hides the column in the data grid.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:Age << Hide( 1 );

```

#### Invert Column Selection

**Syntax:** obj &lt;&lt; Invert Column Selection( &lt;list of columns&gt; )

**Description:** Inverts the current column selection. If a list of columns is given, the columns that are not in the list will be selected.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:age << Set Selected( 1 );
dt:height << Set Selected( 1 );
Wait( 1 );
b = dt << Invert Column Selection;

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
a = {:height, :weight};
b = dt << Invert Column Selection( a );

```

#### Label/Unlabel

**Syntax:** obj &lt;&lt; Label( 0|1 )

**Description:** Sets this column as a label for identification. Values in the column will appear on a graphs when a point is selected.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:Age << Label( 1 );

```

#### Make Indicator Columns

**Syntax:** obj &lt;&lt; Make Indicator Columns

**Description:** Make a set of indicator columns from the selected column

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << Make Indicator Columns( columns( {:species, :season} ) );

```

#### Move Selected Columns

**Syntax:** obj &lt;&lt; Move Selected Columns( column|column list, To first|To last|After(column)|after(group)|after(Path({&lt;a&gt;, &lt;b&gt;, ...}) )

**Description:** Moves selected columns in the data table.

**After column**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Go To( :Age );
Wait( 2 );
dt << Move Selected Columns( After( :sex ) );

```

**After group**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group Columns( "Measures", {:height, :weight} );
dt << Go To( :Age );
Wait( 2 );
dt << Move Selected Columns( After( "Measures" ) );

```

**Input list**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Move Selected Columns( {:height, :weight}, After( :name ) );

```

**To last**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Go To( :Age );
Wait( 2 );
dt << Move Selected Columns( To last );

```

#### New Column

**Syntax:** obj &lt;&lt; New Column( &lt;name&gt;, &lt;data type&gt;, &lt;modeling type&gt;, &lt;Format()&gt;, &lt;Formula()&gt;, &lt;Set Property()&gt;, &lt;Set Values()&gt;, &lt;Like()&gt; )

**Description:** Creates a new column in the current data table.

**Like**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "like name", Like( :name ) );

```

**New Table**

```jsl

Names Default To Here( 1 );
New Table( "test",
	Add Rows( 5 ),
	New Column( "name",
		Character( 8 ),
		Nominal,
		Set Values( {"KATIE", "LOUISE", "JANE", "JACLYN", "LILLIE"} )
	),
	New Column( "age",
		Numeric,
		Ordinal,
		Format( "Fixed Dec", Use thousands separator( 0 ), 5, 0 ),
		Set Values( [12, 12, 12, 12, 12] )
	),
	New Column( "code",
		Character( 2 ),
		Nominal,
		Set Values( {"AA", "AA", "BB", "BB", "AA"} )
	)
);

```

**Simple**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "X", Formula( Random Uniform() ) );

```

#### New Formula Column

**Syntax:** dt &lt;&lt; New Formula Column(Operation(name, &lt;Category(name)&gt;), Columns(columns), &lt;Group By(columns)&gt;)

**Description:** Create a formula column in the table, using the columns specified and applying the operation and optional grouping columns. The operation category can be specified if necessary to disambiguate the operation name. Returns a list of column references to the created columns.

**Group By**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Formula Column(
	Operation( "Mean" ),
	Columns( :height, :weight ),
	Group By( :age )
);

```

**Log 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Formula Column( Operation( "Log 2" ), Columns( :height, :weight ) );

```

#### Next Selected Column

**Syntax:** obj &lt;&lt; Next Selected Column

**Description:** Go to the next selected column.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:age << Set Selected( 1 );
dt:height << Set Selected( 1 );
Wait( 1 );
dt << Next Selected Column;
Wait( 2 );
dt << Next Selected Column;

```

#### No Role

**Syntax:** obj &lt;&lt; Preselect Role( No Role )

**Description:** Removes the assigned role from the data table column.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Weight << Preselect Role( "No Role" );

```

#### Original Order

**Syntax:** obj &lt;&lt; Original Order

**Description:** Moves columns back to their original order in the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Go To( :Age );
dt << Move Selected Columns( To last );
Wait( 2 );
dt << Original Order();

```

#### Paste Column Properties

**Syntax:** obj &lt;&lt; Paste Column Properties

**Description:** Pastes from the clipboard multiple lists of column properties to multiple columns. Optionally, you can specify a list of target columns instead of selecting them in the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << Copy Column Properties( {:MODULUS, :ELONG} );
dt2 = New Table( "test it",
	New Column( "T1", numeric, continuous ),
	New Column( "T2", numeric, continuous ),
	New Column( "T3", numeric, continuous ),
	Add Rows( 10 )
);
dt2 << Paste Column Properties( {:T1, :T3} );

```

#### Previous Selected Column

**Syntax:** obj &lt;&lt; Previous Selected Column

**Description:** Go to the previously selected column.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:age << Set Selected( 1 );
dt:height << Set Selected( 1 );
Wait( 1 );
dt << Next Selected Column;
dt << Next Selected Column;
Wait( 2 );
dt << Previous Selected Column;

```

#### Reorder by Data Type

**Syntax:** obj &lt;&lt; Reorder by Data Type

**Description:** Reorders columns in the data table sorting by data type.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
Wait( 1 );
dt << Reorder By Data Type();

```

#### Reorder by Modeling Type

**Syntax:** obj &lt;&lt; Reorder by Modeling Type

**Description:** Reorders columns in the data table sorting by modeling type.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
Wait( 1 );
dt << Reorder By Modeling Type();

```

#### Reorder by Name

**Syntax:** obj &lt;&lt; Reorder by Name

**Description:** Reorders columns in the data table sorting by column name.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
Wait( 1 );
dt << Reorder By Name();

```

#### Reverse Order

**Syntax:** obj &lt;&lt; Reverse Order

**Description:** Reverses the order of columns in the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
Wait( 1 );
dt << Reverse Order();

```

#### Set Label Columns

**Syntax:** obj &lt;&lt; Set Label Columns( column(s) )

**Description:** Assigns a label role to selected columns in the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
Wait( 1 );
dt << Set Label Columns( :City, :State );

```

#### Set Scroll Lock Columns

**Syntax:** obj &lt;&lt; Set Scroll Lock Columns( column(s) )

**Description:** Locks selected columns in the data table from scrolling.  To indicate that a column is locked, the background color changes.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << Set Scroll Lock Columns( :City );

```

#### Text to Columns

**Syntax:** obj &lt;&lt; Text to Columns

**Description:** Make a set of text columns or indicator columns from a delimited text column

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << Text To Columns( delimiter( "," ), columns( :Brush Delimited ) );

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << Text To Columns(
	delimiter( "," ),
	columns( :Brush Delimited ),
	Make Indicator Columns( 1 )
);

```

#### Use for Marker

**Syntax:** obj &lt;&lt; UseForMarker( 0|1 )

**Description:** Use the values in this column as the markers in a graph.  Expression columns with pictures or character columns with IDs might work well.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:Name << UseForMarker( 1 );

```

#### Validation

**Syntax:** obj &lt;&lt; Preselect Role( Validation)

**Description:** Assigns the Validation role to the data table column

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = Column( "age" );
col << Preselect Role( "Validation" );

```

#### Weight

**Syntax:** obj &lt;&lt; Preselect Role( Weight )

**Description:** Assigns the Weight role to the data table column

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:Weight << Preselect Role( "weight" );

```

#### X

**Syntax:** obj &lt;&lt; Preselect Role( X )

**Description:** Assigns the X role to the data table column

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = Column( "weight" );
col << Preselect Role( "X" );

```

#### Y

**Syntax:** obj &lt;&lt; Preselect Role( Y )

**Description:** Assigns the Y role to the data table column

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Weight << Preselect Role( "Y" );

```

## Data Table Rows

### Item Messages

#### Add Rows

**Syntax:** obj &lt;&lt; Add Rows( &lt;n&gt;, &lt;At Start|At End|After(m)&gt; | {list of (column name = value) pairs}) )

**Description:** Adds n rows, at start, at end, or after row m to the data table.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Add Rows( 3, after( 5 ) );

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Add Rows( {name = "David", age = 15} );

```

#### Clear Row States

**Syntax:** obj &lt;&lt; Clear Row States

**Description:** Clears from all rows the states, including selected, excluded, hidden, markers, labels, and colors.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [5, 7, 8, 10, 12, 15] );
Wait( 2 );
dt << Clear Row States;

```

#### Clear Select

**Syntax:** obj &lt;&lt; Clear Select

**Description:** Clears or deselects the selected rows.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [5, 7, 8, 10] );
Wait( 2 );
dt << Clear Select();

```

#### Clear Selected Row States

**Syntax:** obj &lt;&lt; Clear Selected Row States

**Description:** Clears from the selected rows the states, including selected, excluded, hidden, markers, labels, and colors.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Select Rows( [5, 6, 7, 8, 9, 10] );
r << Exclude;
r << clear select;
r << Select Rows( [5, 6] );
Wait( 1 );
dt << Clear Selected Row States;

```

#### Color Rows by Row State

**Syntax:** obj &lt;&lt; Color Rows by Row State

**Description:** Displays or hides in the cells of the data table, the color assigned in the row state.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Color by Column( :Age );
Wait( 2 );
dt << Color Rows by Row State;

```

#### Color by Column

**Syntax:** obj &lt;&lt; Color by Column( column, &lt;Color( number )&gt;, &lt;Color Theme( color theme )&gt;, &lt; Continuous scale(0|1)&gt;, &lt;Reverse scale(0|1)&gt;, &lt;Excluded Row( 0|1 ), &lt;Make window with legend&gt; )

**Description:** Assigns a color for each row in the data table based on the value of the column specified.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Color by Column( :Age );

```

#### Color or Mark by Column

**Syntax:** obj &lt;&lt; Color or Mark by Column( column, &lt;Color( number )&gt;, &lt;Color Theme( color theme )&gt;, &lt;Marker Theme( standard|hollow|solid|paired|classic|alphanumeric )&gt; )

**Description:** Associate colors or markers with the values of a specified column

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Color or Mark by Column( :Age );

```

#### Colors

**Syntax:** obj &lt;&lt; Colors( color )

**Description:** Colors the selected rows in all graphical output containing markers.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Run Script( "Bivariate" );
Wait( 1 );
dt << Select Where( :sex == "F" );
Wait( 1 );
dt << Colors( "Red" );

```

#### Data Filter

**Syntax:** obj &lt;&lt; Data Filter( &lt;Location(x,y)&gt;, &lt;"Close Outline"&gt;, &lt;"Local"&gt;, &lt;Inverse(0|1)&gt;, &lt;Show Columns Selector(0|1)&gt;, &lt;Title(string)&gt;, &lt;Save And Restore Current Row States(0|1)&gt;, &lt;Conditional(0|1)&gt;, &lt;Auto Clear(0|1)&gt;, &lt;Group By AND(0|1)&gt;, &lt;Show Histograms And Bars(0|1)&gt;, &lt;Count Excluded Rows(0|1)&gt;, &lt;Mode(...)&gt;, &lt;Add Filter(Columns(...), Where(...), Display(...), &lt;Select Missing(cols)&gt;, &lt;Order By Count(cols)&gt;)&gt;, &lt;Favorites(...)&gt;, &lt;Animation(...)&gt; )

**Description:** Creates or shows a Data Filter, where you interactively select complex subsets of data. The Mode option determines which row states are affected by selection in the filter. The Add Filter command will add a filter group with the given Columns and Where clauses. When multiple filter groups are present, the combined behavior is determined by the Group By AND option. If the Local keyword is given, the filter can be embedded in a report to filter one or more platforms without affecting other reports.

**Global Data Filter**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Data Filter(
	Location( {218, 114} ),
	Mode( Select( 0 ), Show( 1 ), Include( 1 ) ),
	Add Filter(
		columns( :age, :height ),
		Where( :age == {13, 14, 15} ),
		Where( :height >= 65 & :height <= 70 )
	),
	Add Filter( columns( :weight ), Where( :weight >= 64 & :weight <= 100 ) )
);

```

**Local Data Filter**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Local Data Filter",
	Data Filter Context Box(
		H List Box(
			dt << Data Filter(
				Local,
				Mode( Show( 1 ), Include( 1 ) ),
				Add Filter(
					columns( :age, :height ),
					Where( :age == {13, 14, 15} ),
					Where( :height >= 65 & :height <= 70 )
				),
				Add Filter( columns( :weight ), Where( :weight >= 64 & :weight <= 100 ) )
			),
			dt << Run Script( "Bivariate" ),
			dt << Run Script( "Distribution" )
		)
	)
);

```

#### Data View

**Syntax:** obj &lt;&lt; Data View

**Description:** Makes a new data view of the currently selected rows.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Where( :age < 14 );
dt << Data View;

```

#### Delete Rows

**Syntax:** obj &lt;&lt; Delete Rows

**Description:** Deletes the selected row(s).

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [5, 7, 8, 10] );
Wait( 2 );
r = dt << Delete Rows;
Show( r );

```

#### Exclude/Unexclude

**Syntax:** obj &lt;&lt; Exclude/Unexclude

**Description:** Excludes the selected rows from contributing to calculations.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Select Rows( [5, 7, 8, 10] );
r << Exclude;

```

#### Get Rows

**Syntax:** obj &lt;&lt; Get Rows( number )

**Description:** returns a list of column values for the specified rows

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Get Rows( 3 );
dt << Get Rows( {1, 2, 3} );

```

#### Go to Row

**Syntax:** obj &lt;&lt; Go to Row( row number )

**Description:** Returns a row object, moves to the specified row, selects the row and highlights it.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Go To Row( 5 );

```

#### Hide and Exclude

**Syntax:** obj &lt;&lt; Hide and Exclude

**Description:** Hides the selected rows from appearing on graphs and excludes them from contributing to calculations.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Select Rows( [5, 7, 8, 10] );
r << Hide and Exclude;

```

#### Hide/Unhide

**Syntax:** obj &lt;&lt; Hide/Unhide

**Description:** Hides the selected rows from appearing on graphs.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Go To Row( 12 );
r << Hide;

```

#### Insert Rows

**Syntax:** obj &lt;&lt; Insert Rows

**Description:** Inserts rows before selected rows. Has no effect if no rows are selected.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [3, 4, 5] );
dt << Insert Rows;

```

#### Invert Row Selection

**Syntax:** obj &lt;&lt; Invert Row Selection

**Description:** Inverts the current row selection.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Select Where( :Age < 14 );
Wait( 2 );
r << Invert Row Selection;

```

#### Label/Unlabel

**Syntax:** obj &lt;&lt; Label/Unlabel

**Description:** Labels the selected rows in all graphical output containing markers.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Go To Row( 5 );
r << Label;

```

#### Marker by Column

**Syntax:** obj &lt;&lt; Marker by Column( column, &lt;Marker( number )&gt;, &lt;Marker Theme( standard | hollow | solid | paired | classic | alphanumeric )&gt;, &lt;Color theme( string )&gt;, &lt; Continuous scale(0|1)&gt;, &lt;Reverse scale(0|1)&gt;, &lt;Excluded Row( 0|1 ), &lt;Make window with legend&gt; )

**Description:** Assigns a marker for each row in the data table based on the value of the column specified.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Marker by Column( :sex );

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/big class.jmp" );
dt << Marker By Column(
	:age,
	Marker( 1 ),
	Color theme( "White to Red" ),
	Marker Theme( "alphanumeric" ),
	Reverse Scale( 1 ),
	Make Window With Legend
);

```

#### Markers

**Syntax:** obj &lt;&lt; Markers( marker )

**Description:** Changes the markers for the selected rows in all graphical output containing markers.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Select Where( :sex == "M" );
r << Markers( "+" );

```

#### Move Rows

**Syntax:** obj &lt;&lt; Move Rows( At Start|At End|After(n) )

**Description:** Moves the selected rows up or down in the data table to the specified new location.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Select Rows( [5, 7, 8, 10] );
Wait( 2 );
r << Move Rows( At Start );

```

#### Name Selection in Column

**Syntax:** obj &lt;&lt; Name Selection in Column( Column Name( name ), Selected( string ), Unselected( string ) )

**Description:** Creates a new categorical column with two values, one each for the selected and nonselected rows.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Where( :Age < 14 );
dt << Name Selection in Column(
	Column Name( "Younger" ),
	Selected( "Yes" ),
	Unselected( "No" )
);

```

#### Next Selected

**Syntax:** obj &lt;&lt; Next Selected

**Description:** Highlights the next row in the group of selected rows.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Select Rows( [5, 7, 8, 10] );
Wait( 2 );
r << Next Selected;

```

#### Previous Selected

**Syntax:** obj &lt;&lt; Previous Selected

**Description:** Highlights the previous row in the group of selected rows.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Select Rows( [5, 7, 8, 10] );
Wait( 2 );
r << Previous Selected;

```

#### Row Editor

**Syntax:** obj &lt;&lt; Row Editor

**Description:** Opens the Row Editor dialog for the selected row(s).

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Select Rows( [5, 7, 8, 10] );
r << Row Editor();

```

#### Row Selection

**Syntax:** obj &lt;&lt; Row Selection( Select Where(condition), &lt; current selection("extend" | "restrict" | "clear")&gt;, &lt;Dialog("Keep Dialog Open")&gt;, &lt;Match Case(0|1)&gt; )

**Description:** Selects all rows that meet the defined condition, with option to extend or restrict existing selections, option to execute the selection or just show the dialog. When Match Case is omitted, the default is a case-sensitive match.

**Example 1**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Row Selection( Select where( :age < 15 ) );

```

**Example 2**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Row Selection( Select where( :age < 15 ) );
Wait( 2 );
dt << Row Selection( Select where( :age == 15 ), current selection( "extend" ) );

```

**Example 3**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Row Selection( Select where( :age < 15 ) );
dt << Row Selection(
	Select where( :sex == "M" ),
	current selection( "restrict" ),
	Dialog( "keep dialog open" )
);

```

**Example 4**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Row Selection( Select where( :name == "jane" ), Match Case( 0 ) );

```

#### Select All Matching Cells

**Syntax:** obj &lt;&lt; Select All Matching Cells

**Description:** Selects in all open data tables, all rows where the values in the column selected match one of the values for the rows selected in that column.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students.jmp" );
dt << Select Rows( [1, 2, 3, 4] );
dt << Go To( :Height );
Wait( 2 );
dt << Select All Matching Cells();

```

#### Select All Rows

**Syntax:** obj &lt;&lt; Select All Rows

**Description:** Selects all the rows in the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select All Rows;

```

#### Select Dominant

**Syntax:** obj &lt;&lt; Select Dominant( {column1, column2, ...},{0|1, 0|1, ...} )

**Description:** Selects all rows based on the high (1) or low (0) values of the Pareto Frontier.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Go To( :height );
dt << Select Dominant( {:height, :weight}, {0, 0} );

```

#### Select Duplicate Rows

**Syntax:** obj &lt;&lt; Select Duplicate Rows( &lt;match(column1, column2, ...)&gt; )

**Description:** Selects duplicate rows and matches on the selected columns. If no match columns are given, rows are matched on all columns of the table. Returns the number of duplicate rows.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select duplicate rows( Match( :age, :height ) );

```

#### Select Excluded

**Syntax:** obj &lt;&lt; Select Excluded

**Description:** Selects all excluded rows in the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [5, 7, 8, 10, 15] );
dt << Exclude( 1 );
dt << Clear Select;
Wait( 2 );
dt << Select Excluded;

```

#### Select Hidden

**Syntax:** obj &lt;&lt; Select Hidden

**Description:** Selects all hidden rows in the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [5, 7, 8, 10, 15] );
dt << Hide( 1 );
dt << Clear Select;
Wait( 2 );
dt << Select Hidden;

```

#### Select Labeled

**Syntax:** obj &lt;&lt; Select Labeled

**Description:** Selects all labeled rows in the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [5, 7, 8, 10, 15] );
dt << Label( 1 );
dt << Clear Select;
Wait( 2 );
dt << Select Labeled;

```

#### Select Matching Cells

**Syntax:** obj &lt;&lt; Select Matching Cells

**Description:** Selects all rows where the values in the column selected match one of the values for the rows selected in that column.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [1, 2, 3, 4] );
dt << Go To( :Height );
Wait( 2 );
dt << Select Matching Cells();

```

#### Select Randomly

**Syntax:** obj &lt;&lt; Select Randomly( number | probability | Sample Size( number ) | Sampling Rate( probability ) )

**Description:** Selects a specified fraction of rows randomly.

**Probability**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Randomly( 0.3 );

```

**Sample Size**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Randomly( Sample Size( 12 ) );

```

**Sampling Rate**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Randomly( Sampling Rate( 0.3 ) );

```

#### Select Rows

**Syntax:** obj &lt;&lt; Select Rows( [row1, row2, ...] )

**Description:** Selects the specified rows.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [5, 7, 8, 10] );

```

#### Select Where

**Syntax:** obj &lt;&lt; Select Where( condition, &lt; current selection("extend" | "restrict" | "clear")&gt; )

**Description:** The options are extending or restricting selections, executing the selection, or showing only the dialog.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Where( :Age < 14 );

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Where( :Age == 14 );
Wait( 0 );
dt << Select Where( :sex == "M", current selection( "extend" ) );

```

**Example 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Where( Contains( :name, "AR" ) );

```

## Filter Views

### Item Messages

#### Get Data Filter

**Syntax:** expr = obj &lt;&lt; Get Data Filter

**Description:** Returns the filter view&apos;s filter definition

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
Show( fv << Get Data Filter );

```

#### Get Data Table

**Syntax:** data table = obj &lt;&lt; Get Data Table

**Description:** Returns the table that owns the filter view

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
Show( fv << Get Data Table );

```

#### Get Name

**Syntax:** string = obj &lt;&lt; Get Name

**Description:** Get the name of the filter view

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
Show( fv << Get Name );

```

#### Get Show Hidden Rows

**Syntax:** 0|1 = obj &lt;&lt; Get Show Hidden Rows

**Description:** Returns the show hidden rows setting for this filter view

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Show Hidden Rows( 1 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
Show( fv << Get Show Hidden Rows );

```

#### Get Type

**Syntax:** obj &lt;&lt; Get Type

**Description:** Get the type of the filter view; one of: "Unfiltered", "Filtered", or "TemporaryFiltered".

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
Show( fv << Get Type, fv << Is Temporary, fv << Is Unfiltered );

```

#### Is Locked

**Syntax:** 0|1 = obj &lt;&lt; Is Locked

**Description:** Returns the lock setting for this filter view

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Lock( 1 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
Show( fv << Is Locked );

```

#### Is Temporary

**Syntax:** 0|1 = obj &lt;&lt; Is Temporary

**Description:** Returns 1 if the filtered view is a temporary filter view

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
Show( fv << Get Type, fv << Is Temporary, fv << Is Unfiltered );

```

#### Is Unfiltered

**Syntax:** 0|1 = obj &lt;&lt; Is Unfiltered

**Description:** Returns 1 if the filtered view is the unfiltered filter view

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
Show( fv << Get Type, fv << Is Temporary, fv << Is Unfiltered );

```

#### Lock

**Syntax:** obj &lt;&lt; Lock( 0|1 )

**Description:** Prevent editing this filter view.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
fv << Lock( 1 );
Show( fv << Is Locked );

```

#### Set Data Filter

**Syntax:** obj &lt;&lt; Set Data Filter( expr )

**Description:** Changes the filter definition of the filter view. The filter definition of the unfiltered view cannot be changed

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View( "Dream", Active( 0 ) );
fv << Set Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) );
Show( fv << Get Data Filter );

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View( "Dream", Active( 0 ) );
fv << Set Data Filter(
	Data Filter(
		Inverse( 1 ),
		Add Filter( Columns( :Island ), Where( :Island == "Dream" ) )
	)
);
Show( fv << Get Data Filter );

```

#### Set Name

**Syntax:** string = obj &lt;&lt; Set Name( name )

**Description:** Changes the name of the filter view. The names of the unfiltered view and the temporary filtered view cannot be changed.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
Show( fv << Set Name( "Dream Penguins" ) );
Show( fv << Get Name );

```

#### Show Hidden Rows

**Syntax:** obj &lt;&lt; Show Hidden Rows( 0|1 )

**Description:** Changes the show hidden rows setting for this filter view.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Show Hidden Rows( 1 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
fv << Show Hidden Rows( 0 );
Show( fv << Get Show Hidden Rows );

```


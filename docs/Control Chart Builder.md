# Control Chart Builder



### Action

**Syntax:** obj << Action

**Description:** All-purpose trapdoor within a platform to insert expressions to evaluate. Temporarily sets the DisplayBox and DataTable contexts to the Platform.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Add Limits

**Syntax:** obj << Chart( Position( number ), Add Limits( {LCL( number ), Avg( number ), UCL( number )} ) )

**Description:** Adds an additional set of limits for the specified chart. The added limits appear as dashed lines.

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Subgroup( :Sample ), Y( :Weight ) ), );
obj << Chart( Position( 1 ), Add Limits( {LCL( 17.5 ), Avg( 20.25 ), UCL( 23 )} ) );

```

### Add Spec Limits

**Syntax:** obj << Chart( Position( number ), Add Spec Limits( {LSL( number ), Target( number ), USL( number )} ) )

**Description:** Sets the specification limits for each Y variable.

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Subgroup( :Sample ), Y( :Weight ) ), );
obj << Chart( Position( 1 ), Add Spec Limits( {LSL( 18 ), Target( 20.1 ), USL( 22.2 )} ) );

```

### Alarm Script

**Syntax:** obj << Alarm Script( Write( "..." )|Speak( "..." )|Mail( address, subject,"..." ) )

**Description:** Sends a message whenever a point on a control chart fails a given test. The message can be sent to the log, can be spoken, or can be emailed.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart( Position( 1 ), Warnings( Test 1( 1 ) ) )
);
obj << Alarm Script(
	Write(
		"Out of Control for test ",
		qc_test,
		" in column ",
		qc_col,
		" in sample ",
		qc_sample,
		" in phase ",
		qc_phase
	)
);

```

### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**Description:** Apply a previously created preset to the object, updating the options and customizations to match the saved settings.

**JMP Version Added:** 18

**Anonymous preset**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

**Search by name**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**Search within folder(s)**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

### Automatic Recalc

**Syntax:** obj << Automatic Recalc( state=0|1 )

**Description:** Redoes the analysis automatically for exclude and data changes. If the Automatic Recalc option is turned on, you should consider using Wait(0) commands to ensure that the exclude and data changes take effect before the recalculation.

```

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Chart

**Syntax:** obj << Chart( Position( number ), <Points( Statistic(),... )>, <Set Control Limits( { LCL(), UCL(), Avg() } )>, <Add Limits( { LCL(), UCL(), Avg() } )>, <Add Spec Limits( { LSL(), USL(), Target() } )>, <Limits( Sigma(), ... )>, <Warnings( Test number( state=0|1 ) )> )

**Description:** Sets the warning, limit, and point attributes for the chart that is specified by the Position argument.

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart(
		Position( 1 ),
		Warnings( Test 1( 1 ) ),
		Add Limits( {LCL( 18 ), UCL( 22.4 ), Avg( 20.2 )} )
	),
	Chart(
		Position( 2 ),
		Points( Statistic( "Standard Deviation" ) ),
		Limits( Sigma( "Standard Deviation" ) )
	)
);

```

### Class

**Syntax:** obj << Class( "Shewhart Variables"|"Shewhart Attribute"|"Short Run"|"Rare Event" )

**Description:** Specifies the class or family of point and sigma statistic combinations.

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Orange Juice.jmp" );
obj = dt << Control Chart Builder(
	Class( "Shewhart Attribute" ),
	Variables( Subgroup( :Sample ), Y( :Status ), Phase( :Phase ) ),
	Chart( Points( Statistic( "Proportion" ) ), Limits( Sigma ) )
);

```

### Color By Product

**Syntax:** obj << Color By Product( state=0|1 )

**Description:** Colors the points plotted by the level of the product variable. On by default.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Class( "Short Run" ),
	Variables( Y( :Weight ), Part( :Product ) )
);
Wait( 1 );
obj << Color By Product( 1 );

```

### Column Switcher

**Syntax:** obj << Column Switcher(column reference, {column reference, ...}, < Title(title) >, < Close Outline(0|1) >, < Retain Axis Settings(0|1) >, < Layout(0|1) >)

**Description:** Adds a control panel for changing the platform&apos;s variables

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

### Connect Thru Missing

**Syntax:** obj << Connect Thru Missing( state=0|1 )

**Description:** Determines whether points and lines are connected when some samples have missing values or excluded rows.

**JMP Version Added:** 17

```

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = Control Chart Builder( Variables( Y( :Gap ) ) );
Wait( 1 );
obj << Connect Thru Missing( 1 );

```

### Control Chart Builder

**Syntax:** Control Chart Builder( Class( "Shewhart Variables"|"Shewhart Attribute"|"Short Run"|"Rare Event" ), Variables( variables ), <Chart( Position( number ), Points( Statistic( "statistic" ), <points options> ), Limits( Sigma( "sigma" ), <limits options> )> ) ) )

**Description:** Enables you to interactively create control charts, which are used to determine whether a process is stable and predictable. The Control Chart Builder platform can be used to create the following types of control charts: IMR, XBar, Short Run, Run, P, NP, C, U, Laney P&apos;, Laney U&apos;, Levey-Jennings, IMR on Means, Three Way, and Rare Event charts.

**C Chart**

```

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

```

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );

```

**IMR on Group Standard Deviation Chart (Set Subgroup Size)**

```

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

```

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

```

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

```

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

```

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

```

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

```

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

```

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

```

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

```

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

```

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

```

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

```

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

```

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

```

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

```

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

```

Names Default To Here( 1 );
// Create a Short Run Difference chart by changing the class to Short Run and adding a Product or Part variable. Make sure that the Statistic values for the location chart and dispersion chart are set to Centered and Moving Range Centered, respectively. Centered Short Run control charts are sometimes referred to as Deviation from Nominal (DNOM) charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Class( "Short Run" ),
	Variables( Y( :Weight ), Part( :Product ) )
);

```

**Short Run Difference Chart for XBar**

```

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

```

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

```

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

```

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

```

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

```

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

```

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

```

Names Default To Here( 1 );
// Create an XBar/R chart by adding a subgroup or setting a subgroup size after adding a Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ), Set Subgroup Size( 4 ) );

```

**XBar/S Chart (Set Subgroup Size)**

```

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

```

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

### Copy Script

**Syntax:** obj << Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Copy Script;

```

### Customize Tests

**Syntax:** obj << Customize Tests( Test 1 | Test 2 | Test 3 | Test 4 | Test 5 | Test 6 | Test 7 | Test 8 (n, label) )

**Description:** Enables you to select, customize labels, and set the sigma-based distance parameters for Western Electric tests.

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Customize Tests( Test 1( 2, "A" ) ),
	Chart( Position( 1 ), Warnings( Test 1( 1 ) ) )
);

```

### Data Table Window

**Syntax:** obj << Data Table Window

**Description:** Move the data table window for this analysis to the front.

```

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Data Table Window;

```

### Fit to Window

**Syntax:** obj << Fit to Window( "Auto"|"On"|"Off"|"Maintain Aspect Ratio"="Off" )

**Description:** Sets the auto stretching behavior of the report. "Off" by default.

```

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Fit to Window( "On" );

```

### Get By Levels

**Syntax:** obj << Get By Levels

**Description:** Returns an associative array mapping the by group columns to their values.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get Container

**Syntax:** obj << Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

**General**

```

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Platform with Filter**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),
	Local Data Filter(
		Add Filter(
			columns( :age, :sex, :height ),
			Where( :age == {12, 13, 14} ),
			Where( :sex == "F" ),
			Where( :height >= 55 ),
			Display( :age, N Items( 6 ) )
		)
	)
);
New Window( "platform boxes",
	H List Box(
		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),
		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )
	)
);

```

### Get Control Limits

**Syntax:** obj << Get Control Limits( filename )

**Description:** Imports control limits from a selected data table and replaces calculated limits on the chart.

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart( Position( 1 ), Points( Statistic( "Average" ) ), Limits( Sigma( "Range" ) ) ),
	Chart( Position( 2 ), Points( Statistic( "Range" ) ), Limits( Sigma( "Range" ) ) ),

);
obj << Get Control Limits( "$SAMPLE_DATA/Quality Control/CoatingLimits.jmp" );

```

### Get Data Table

**Syntax:** obj << Get Data Table

**Description:** Returns a reference to the data table.

```

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Product Statistics

**Syntax:** obj << Get Product Statistics( filename )

**Description:** Imports values for the Short Run Product Target and Sigma from a specified data table.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Class( "Short Run" ),
	Variables( Y( :Weight ), Part( :Product ) )
);
Wait( 1 );
obj << Get Product Statistics( "$SAMPLE_DATA/Quality Control/CoatingProductInfo.jmp" );

```

### Get Script

**Syntax:** obj << Get Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntax:** obj << Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Spec Limits

**Syntax:** obj << Get Spec Limits( filename )

**Description:** Imports specification limits from a file.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :OZONE, :CO ) ), Set Subgroup Size( 5 ) );
obj << Get Spec Limits( "$SAMPLE_DATA/CitySpecLimits.jmp" );

```

### Get Timing

**Syntax:** obj << Get Timing

**Description:** Times the platform launch.

```

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**Syntax:** obj << Get Web Support

**Description:** Return a number indicating the level of Interactive HTML support for the display object. 1 means some or all elements are supported. 0 means no support.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Where Expr

**Syntax:** obj << Get Where Expr

**Description:** Returns the Where expression for the data subset, if the platform was launched with By() or Where(). Otherwise, returns Empty()

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Graph Borders

**Syntax:** obj << Graph Borders( state=0|1 )

**Description:** Shows or hides the internal graph panel borders.

**JMP Version Added:** 17

```

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
Wait( 0.5 );
obj << Graph Spacing( 5 );
obj << Graph Transparency( 0 );
obj << Graph Borders( 1 );

```

### Graph Spacing

**Syntax:** obj << Graph Spacing( gap=2 )

**Description:** Specifies the amount of space between the graph panels. "2" by default.

**JMP Version Added:** 16

```

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
Wait( 1 );
obj << Graph Spacing( 5 );

```

### Graph Spacing Color

**Syntax:** obj << Graph Spacing Color( color )

**Description:** Specifies the color of the space between the graph panels.

**JMP Version Added:** 17

```

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
Wait( 0.5 );
obj << Graph Spacing Color( "Red" );

```

### Graph Spacing Transparency

**Syntax:** obj << Graph Spacing Transparency( number )

**Description:** Specifies the transparency level of the space between the graph panels. Must be between 0 and 1.

**JMP Version Added:** 17

```

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
Wait( 0.5 );
obj << Graph Spacing Transparency( 0.3 );

```

### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Description:** Ignores the current settings of the platform&apos;s preferences. The message is ignored when sent to the platform after creation.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Include Missing Categories

**Syntax:** obj << Include Missing Categories( state=0|1 )

**Description:** Includes an extra level for nominal and ordinal variables when the data contain missing values. On by default.

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Diameter ), Subgroup( :Day ) ) );
:Day[{8, 9, 10, 11, 12}] = .;
Wait( 1 );
obj << Include Missing Categories( 0 );

```

### K Sigma

**Syntax:** obj << K Sigma( value=3 )

**Description:** Sets the K value to be multiplied by sigma to form the control limits about the average. "3" by default.

**JMP Version Added:** 16

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	K Sigma( 2.5 ),
	Variables( Subgroup( :Sample ), Y( :Weight ) )
);
Wait( 1 );
obj << K Sigma( 3 );

```

### Limits

**Syntax:** obj << Chart( Position( number ), Limits( Sigma( "sigma" ), <Zones( state=0|1 )>, <Shade Zones( state=0|1 )>, <Set Control Limits( state=0|1 )>, <Show Upper Limit( state=0|1 )>, <Show Lower Limit( state=0|1 )>, <Show Center Line( state=0|1 )> ) )

**Description:** Provides options for changing the limit characteristics of the chart. Depending on the type of chart, you can assign one of the following values as the sigma argument: Range, Standard Deviation, Moving Range, Median Moving Range, Levey-Jennings, Poisson, Binomial, Negative Binomial, Weibull, Laney P Prime, or Laney U Prime.

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart( Position( 1 ), Limits( Sigma( "Standard Deviation" ), Shade Zones( 1 ) ) )
);
obj << Chart(
	Position( 2 ),
	Points( Statistic( "Standard Deviation" ) ),
	Limits( Sigma( "Standard Deviation" ) )
);

```

### Limits Label Precision

**Syntax:** obj << Limits Label Precision( number )

**Description:** Specifies the precision that is displayed in the limits relative to the data.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Show Limit Labels( 1 );
Wait( 1 );
obj << Limits Label Precision( 5 );

```

### Local Data Filter

**Syntax:** obj << Local Data Filter

**Description:** To filter data to specific groups or ranges, but local to this platform

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);

```

### New JSL Preset

**Syntax:** New JSL Preset( preset )

**Description:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

### New Preset

**Syntax:** obj = New Preset()

**Description:** Create an anonymous preset representing the options and customizations applied to the object. This object can be passed to Apply Preset to copy the settings to another object of the same type.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### OC Curve

**Syntax:** obj << OC Curve

**Description:** Shows in a new window, an Operator Characteristic Curve using the control limits and sigma from the control chart.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Subgroup( :Sample ), Y( :Weight ) ) );
Wait( 1 );
obj << OC Curve;

```

### Paste Local Data Filter

**Syntax:** obj << Paste Local Data Filter

**Description:** Apply the local data filter from the clipboard to the current report.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
filter = dist << Local Data Filter(
	Add Filter( columns( :Region ), Where( :Region == "MW" ) )
);
filter << Copy Local Data Filter;
dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );
Wait( 1 );
dist2 << Paste Local Data Filter;

```

### Points

**Syntax:** obj << Chart( Position( number ), Points( Statistic( "statistic" ), <Individual Points( state=0|1 )>, <Box Plots( state=0|1 )>, <Show Connect Line( state=0|1 )>, <Show Points( state=0|1 )> ) )

**Description:** Provides options for changing the point characteristics of the chart. Depending on the type of chart, you can assign one of the following values for the statistic argument: Average, Range, Standard Deviation, Moving Range on Means, Moving Range on Standard Deviation, Individual, Moving Range, Count, Proportion, Centered, Standardized, Range Centered, or Range Standardized.

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart( Position( 1 ), Points( Box Plots( 1 ) ) ),

);
Wait( 1 );
obj << Chart( Position( 2 ), Points( Statistic( "Standard Deviation" ) ) );

```

### Product Statistics

**Syntax:** obj << Product Statistics( ( column ) ( Product Level( l1 ( Target( number ), Sigma ( number ) ), <l2 ( Target( number ), Sigma ( number ) )) ), < (column ( Product Level( ... ) ) ) > )

**Description:** Sets the values for the Short Run Product Target and Sigma.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Class( "Short Run" ),
	Variables( Y( :Weight ), Part( :Product ) )
);
Wait( 1 );
obj << Product Statistics(
	:Weight(
		ProductLevel( A( Target( 20 ), Sigma( 1 ) ), B( Target( 22 ), Sigma( .7 ) ) )
	)
);

```

### Range Span

**Syntax:** obj << Range Span( value=2 )

**Description:** Sets the value of the Range Span option that is used in the Moving Range charts. "2" by default.

**JMP Version Added:** 19

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( K Sigma( 2.5 ), Variables( Y( :Weight ) ) );
Wait( 1 );
obj << Range Span( 3 );

```

### Redo Analysis

**Syntax:** obj << Redo Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Redo Analysis;

```

### Relaunch Analysis

**Syntax:** obj << Relaunch Analysis

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Relaunch Analysis;

```

### Remove Column Switcher

**Syntax:** obj << Remove Column Switcher

**Description:** Removes the most recent Column Switcher that has been added to the platform.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
Wait( 2 );
obj << Remove Column Switcher;

```

### Remove Local Data Filter

**Syntax:** obj << Remove Local Data Filter

**Description:** If a local data filter has been created, this removes it and restores the platform to use all the data in the data table directly

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dist = dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);
Wait( 2 );
dist << remove local data filter;

```

### Render Preset

**Syntax:** Render Preset( preset )

**Description:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**Syntax:** obj << Report;

Report( obj )

**Description:** Returns a reference to the report object.

```

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntax:** obj << Report View( "Full"|"Summary" )

**Description:** The report view determines the level of detail visible in a platform report. Full shows all of the detail, while Summary shows only select content, dependent on the platform. For customized behavior, display boxes support a <<Set Summary Behavior message.

```

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Report View( "Summary" );

```

### Rerun All Tests

**Syntax:** obj << Rerun All Tests

**Description:** Reruns all the currently selected tests and any associated alarm script.

**JMP Version Added:** 16

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Alarm Script(
		Write(
			"Out of Control for test ",
			qc_test,
			" in column ",
			qc_col,
			" in sample ",
			qc_sample,
			" in phase ",
			qc_phase
		)
	),
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart( Position( 1 ), Warnings( Test 1( 1 ) ) )
);
Wait( 1 );
obj << K Sigma( 2.5 );
obj << Rerun All Tests;

```

### Save Control Limits

**Syntax:** obj << Save Control Limits( "in Column"|"in New Table"|"in New Tall Table" )

**Description:** Saves control limits to either a column property or a new data table.



If in Column is specified and the limits are constant, LCL, Avg, and UCL values for each chart type in the report are saved in a Control Limits column property. If the limits are not constant, no column property is saved.



If in New Table is specified, the standard deviation and mean for each chart are saved to a new data table. If the limits are constant, the LCL, Avg, and UCL for each chart are saved as well. If there are phases, a new set of values is saved for each phase.

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Save Control Limits( "in Column" );
obj << Save Control Limits( "in New Table" );

```

### Save Product Statistics

**Syntax:** obj << Save Product Statistics

**Description:** Saves columns to a new data table. The new data table contains the product statistics (target and sigma) for each level of the Part / Product variable.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Class( "Short Run" ),
	Variables( Y( :Weight ), Part( :Product ) )
);
Wait( 1 );
obj << Save Product Statistics;

```

### Save Script for All Objects

**Syntax:** obj << Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj << Save Script for All Objects To Data Table( <name> )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj << Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj << Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj << Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Save Script to Script Window;

```

### Save Spec Limits

**Syntax:** obj << Save Spec Limits

**Description:** Saves the specification limits to a new data table. This option is available only if specification limits have been set, with a Spec Limits column property, via JSL, Get Spec Limits file import or the Set Spec Limits option.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Subgroup( :Sample ), Y( :Weight ) ), );
obj << Chart( Position( 1 ), Add Spec Limits( {LSL( 18 ), Target( 20.1 ), USL( 22.2 )} ) );
obj << Save Spec Limits;

```

### Save Summaries

**Syntax:** obj << Save Summaries

**Description:** Saves a new data table for each chart. The data table includes a row for each sample and columns for the sample label, sample size, and product level, if a Product/Part variable is specified. For each chart, there are also columns for the individual point plotted, the chart type, UCL, Avg, LCL, and any selected tests that are failing.

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Save Summaries;

```

### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Description:** Sends platform commands or display customization commands to each level of a by-group.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	By( :Sex ),
	SendToByGroup(
		{:sex == "F"},
		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )
	),
	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) )
);

```

### SendToEmbeddedScriptable

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Description:** SendToEmbeddedScriptable restores settings of embedded scriptable objects.

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Censor Code( 1 ),
	<<Fit Weibull,
	SendToEmbeddedScriptable(
		Dispatch(
			{"Statistics", "Parametric Estimate - Weibull", "Profilers",
			"Density Profiler"},
			{1, Confidence Intervals( 0 ), Term Value(
				Time( 6000, Lock( 0 ), Show( 1 ) )
			)}
		)
	)
);

```

### SendToReport

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Description:** Send To Report is used in tandem with the Dispatch command to customize the appearance of a report.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport(
		Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} )
	)
);

```

### Set Control Limits

**Syntax:** obj << Chart( Position( number ), Set Control Limits( {LCL( number ), Avg( number ), UCL( number )} ) )

**Description:** Sets the control limits for the specified chart.

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Subgroup( :Sample ), Y( :Weight ) ) );
obj << Chart( Position( 1 ), Set Control Limits( {LCL( 19 ), Avg( 20 ), UCL( 21 )} ) );

```

### Set Last N Subgroups

**Syntax:** obj << Set Last N Subgroups( number )

**Description:** Changes the horizontal axis to show only the last N subgroups on the graph. The number of specified subgroups does not take into account excluded or hidden observations. This option is not available when there is a Phase variable with more than one level.

**JMP Version Added:** 19

```

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Set Last n Subgroups( 5 );

```

### Set Sigma

**Syntax:** obj << Set Sigma( value )

**Description:** Sets the sigma value used in the Control Chart.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
Wait( 1 );
obj << Set Sigma( 1.8 );

```

### Set Subgroup Size

**Syntax:** obj << Set Subgroup Size(  integer  )

**Description:** Specifies the number of rows per subgroup.

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Set Subgroup Size( 4 );

```

### Show Alarm Report

**Syntax:** obj << Show Alarm Report( state=0|1 )

**Description:** Shows or hides the table of alarm rates and out of control samples.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Show Alarm Report( 1 );

```

### Show Capability

**Syntax:** obj << Show Capability( state=0|1 )

**Description:** Shows or hides the Process Capability Analysis report. On by default.

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Y( :Weight ) ),
	Chart(
		Position( 1 ),
		Limits( Sigma( "Moving Range" ) ),
		Add Spec Limits( {LSL( 17 ), USL( 23 ), Target( 20 )} )
	)
);
Wait( 1 );
obj << Show Capability( 0 );

```

### Show Center Line

**Syntax:** obj << Chart( Position( number ),  Limits( Show Center Line( state=0|1 ) ) )

**Description:** Shows or hides the center line. On by default.

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Subgroup( :Sample ), Y( :Weight ) ), );
obj << Chart( Position( 1 ), Limits( Show Center Line( 0 ) ) );

```

### Show Control Panel

**Syntax:** obj << Show Control Panel( state=0|1 )

**Description:** Shows or hides the control panel. On by default.

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
Wait( 1 );
obj << Show Control Panel( 0 );

```

### Show Excluded Region

**Syntax:** obj << Show Excluded Region( state=0|1 )

**Description:** Shows or hides the regions of the chart where samples have been excluded. On by default.

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
r = dt << Select Where( :Sample < 4 );
r << Exclude;
Wait( 1 );
obj << Show Excluded Region( 0 );

```

### Show Limit Labels

**Syntax:** obj << Show Limit Labels( state=0|1 )

**Description:** Shows or hides the limit labels on the graph.

**JMP Version Added:** 16

```

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Show Limit Labels( 1 );

```

### Show Limit Summaries

**Syntax:** obj << Show Limit Summaries( state=0|1 )

**Description:** Shows or hides the Limit Summaries report. This report contains the control limits (LCL and UCL), the center line (Avg), the Points and Limits plotted, and the Sample Size for the chart. On by default.

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
Wait( 1 );
obj << Show Limit Summaries( 0 );

```

### Show Lower Limit

**Syntax:** obj << Chart( Position( number ),  Limits( Show Lower Limit( state=0|1 ) ) )

**Description:** Shows or hides the lower control limit. On by default.

**JMP Version Added:** 16

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart( Position( 1 ), Limits( Show Lower Limit( 0 ) ) )
);

```

### Show Product Separators

**Syntax:** obj << Show Product Separators( state=0|1 )

**Description:** Shows or hides dashed vertical lines on the graph indicating the product changed. On by default.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Class( "Short Run" ),
	Variables( Y( :Weight ), Part( :Product ) )
);
Wait( 1 );
obj << Show Product Separators( 0 );

```

### Show Sigma Report

**Syntax:** obj << Show Sigma Report( state=0|1 )

**Description:** Shows or hides the table of Overall Sigma, Within Sigma, Stability Index, and Mean. For Three Way charts, the Between Sigma and Between-and-Within Sigma are also shown.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Show Sigma Report( 1 );

```

### Show Two Shewhart or Short Run Charts

**Syntax:** obj << Show Two Shewhart or Short Run Charts( state=0|1 )

**Description:** Shows both the location and the dispersion chart. When the value of this option is 0, the dispersion chart is not shown. On by default.

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Control Chart Builder(
	Show Two Shewhart Charts( 0 ),
	Variables( Y( :Diameter ), Subgroup( :Day ) )
);

```

### Show Upper Limit

**Syntax:** obj << Chart( Position( number ),  Limits( Show Upper Limit( state=0|1 ) ) )

**Description:** Shows or hides the upper control limit. On by default.

**JMP Version Added:** 16

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart( Position( 1 ), Limits( Show Upper Limit( 0 ) ) )
);

```

### Size

**Syntax:** obj << Size( width, height )

**Description:** Sets the size of the graph.

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Size( 808, 586 );

```

### Sort by Subgroup

**Syntax:** obj << Sort by Subgroup( state=0|1 )

**Description:** Sorts the process data by the subgroup variable, or combination of nested subgroup variables, before calculations are performed. This option is available only if a Subgroup variable is specified.

**JMP Version Added:** 19

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Airline Delays.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Day of Week ), Y( :Arrival Delay ) )
);
Wait( 1 );
obj << Sort by Subgroup( 1 );

```

### Sync to Data Table Changes

**Syntax:** obj << Sync to Data Table Changes

**Description:** Sync with the exclude and data changes that have been made.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

### Test Excluded Subgroups

**Syntax:** obj << Test Excluded Subgroups( state=0|1 )

**Description:** Includes or excludes entirely excluded subgroups in the computation of tests. This option is available only when the Show Excluded Region option is selected. On by default.

**JMP Version Added:** 16

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Test Excluded Subgroups( 0 ),
	Show Control Panel( 0 ),
	Show Alarm Report( 1 ),
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart( Position( 1 ), Warnings( Test 1( 1 ) ) )
);
Wait( 1 );
dt << Select Rows( Index( 21, 24 ) ) << Exclude;

```

### Title

**Syntax:** obj << Title( "new title" )

**Description:** Sets the title of the platform.

```

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj << Top Report

**Description:** Returns a reference to the root node in the report.

```

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Use Event Chooser

**Syntax:** obj << Use Event Chooser( state=0|1 )

**Description:** Categorizes ordinal numeric data and offers individual numeric-level modeling selections. The Use Event Chooser option is available only for Attribute Charts that include numeric, non-continuous Y variables.

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Control Chart Builder( Class( "Shewhart Attribute" ), Variables( Y( :Age ) ) );
obj << Use Event Chooser( 1 );

```

### Use Excluded Points on MR

**Syntax:** Platform preferences( Control Chart Builder (Use Excluded Points on MR(1)) )

**Description:** Preference for including points which are excluded in the moving range calculations.

**JMP Version Added:** 19

```

Names Default To Here( 1 );
Platform Preferences( Control Chart Builder( Use Excluded Points on MR( 1 ) ) );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
dt << Select Rows( 4 :: 6 ) << Exclude( 1 );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );

```

### Variables

**Syntax:** obj << Variables( Y( column ), <Subgroup( column)>, <Phase( column )>, <Part( column )> )

**Description:** Assigns the indicated variables to roles.

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );

```

### View Web XML

**Syntax:** obj << View Web XML

**Description:** Returns the XML code that is used to create the interactive HTML report.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### n Trials

**Syntax:** obj << n Trials( column | integer )

**Description:** Assigns a lot size for an attribute control chart.

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Washers.jmp" );
obj = dt << Control Chart Builder(
	Class( "Shewhart Attribute" ),
	Variables( Subgroup( :Lot ), Y( :"# defective"n ), nTrials( :Lot Size ) ),
	Chart( Points( Statistic( "Proportion" ) ), Limits( Sigma( "Binomial" ) ) )
);

```


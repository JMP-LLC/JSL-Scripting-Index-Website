# Profiler



## Design Space Profiler

### Connect Hide Mode

**Syntax:** obj << Connect Hide Mode( state=0|1 )

**Description:** For the connected table, instead of selecting points that fall within the limits, this option hides points that fall outside of the limits.

```js

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 *
		:Propanol - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol
		 + 0.111 * :Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Connect Hide Mode( 1 );
dt2 = obj2 << Make and Connect Random Table( 10000, Add Random Noise );
dt2 << Run Script( (dt2 << Get Table Script Names)[1] );
obj2 << Set Limits( Ethanol( 1.9, 10 ), Methanol( 4.5, 10 ), Time( 1.2, 2 ) );

```

### Connect to Table

**Syntax:** obj << Connect to Table( data table )

**Description:** Connects the Design Space Profiler report to the specified data table. The rows that contain factors that are within the current lower and upper limits are selected in the connected table.

```js

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 *
		:Propanol - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol
		 + 0.111 * :Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
dt2 = obj << Output Random Table( 10000, Add Random Noise );
dt2 << Run Script( (dt2 << Get Table Script Names)[1] );
obj2 << Connect to Table( dt2 );
obj2 << Set Limits( Ethanol( 1.9, 10 ), Methanol( 4.5, 10 ), Time( 1.2, 2 ) );

```

### Design Space Profiler

**Syntax:** Design Space Profiler

**Description:** Launches the Design Space Profiler, which helps map specification limits on the Y variables to specification limits on the X variables.

```js

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 *
		:Propanol - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol
		 + 0.111 * :Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );

```

### Get Midpoints from Profiler

**Syntax:** obj << Get Midpoints from Profiler( fraction )

**Description:** Obtains the current factor settings from the Prediction Profiler and sets the midpoints for each factor in the Design Space Profiler to those values. Limits are constructed around each midpoint value using a specified fraction of the factor range.

```js

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 *
		:Propanol - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol
		 + 0.111 * :Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Get Midpoints from Profiler( 0.5 );

```

### Make and Connect Random Table

**Syntax:** obj << Make and Connect Random Table( number, <Add Random Noise( state=0|1 )>, <Embed Factor Space Scatterplots>, <Embed Response Space Scatterplots> )

**Description:** Creates a new data table that contains uniformly distributed factor settings and their corresponding simulated responses. There are options to specify how the responses are simulated and whether to embed response and factor scatterplots in the report. The selection of rows in the data table is connected to the profilers in the report.

```js

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 *
		:Propanol - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol
		 + 0.111 * :Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
dt2 = obj2 << Make and Connect Random Table(
	10000,
	Add Random Noise( 1 ),
	Embed Factor Space Scatterplots
);
Wait( 1 );
obj2 << Set Limits( Ethanol( 1.9, 10 ), Methanol( 4.5, 10 ), Time( 1.2, 2 ) );

```

### Move Corner Inward

**Syntax:** obj << Move Corner Inward

### Move Corner Outward

**Syntax:** obj << Move Corner Outward

### Move Inward

**Syntax:** obj << Move Inward( <number=1> )

**Description:** Finds the specification limit with the steepest upward path and moves that specification limit inward. Use the optional number argument to specify how many times this process is performed.

```js

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 *
		:Propanol - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol
		 + 0.111 * :Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Move Inward( 4 );
Wait( 2 );
obj2 << Move Outward;

```

### Move Outward

**Syntax:** obj << Move Outward( <number=1> )

**Description:** Finds the specification limit with the least steep downward path and moves that specification limit outward. Use the optional number argument to specify how many times this process is performed.

```js

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 *
		:Propanol - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol
		 + 0.111 * :Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Set Limits( Ethanol( 1.9, 10 ), Methanol( 4.5, 10 ), Time( 1.2, 2 ) );
obj2 << Move Outward( 2 );
Wait( 2 );
obj2 << Move Outward;

```

### Reset Factor Space

**Syntax:** obj << Reset Factor Space( factor1( lower, upper ), factor2( lower, upper ), ... )

**Description:** Changes the factor space to narrow, widen, or shift the range of one or more factors. If the intervals of the limits are too narrow, this can result in a small limits volume and create inaccurate simulation-based estimates.

```js

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 *
		:Propanol - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol
		 + 0.111 * :Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
Wait( 1 );
obj2 << Reset Factor Space(
	Butanol( -0.275, 11 ),
	Ethanol( -0.25, 10.25 ),
	Methanol( -0.25, 10.25 ),
	Propanol( -0.25, 10.25 ),
	Time( 0.95, 3 )
);

```

### Save Simulation Table

**Syntax:** obj << Save Simulation Table( state=0|1 )

### Save X Spec Limits

**Syntax:** obj << Save X Spec Limits

**Description:** Saves the current X specification limits as column properties.

```js

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 *
		:Propanol - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol
		 + 0.111 * :Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Set Limits( Ethanol( 1.9, 10 ), Methanol( 4.5, 10 ), Time( 1.2, 2 ) );
obj2 << Save X Spec Limits;

```

### Send Limits to Profiler as Constraints

**Syntax:** obj << Send Limits to Profiler as Constraints

**Description:** Sends the current X limits to the Profiler as bound constraints.

```js

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 *
		:Propanol - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol
		 + 0.111 * :Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Set Limits( Ethanol( 1.9, 10 ), Methanol( 4.5, 10 ), Time( 1.2, 2 ) );
obj2 << Send Limits to Profiler as Constraints;

```

### Send Limits to Simulator

**Syntax:** obj << Send Limits to Simulator( "Uniform" | "Normal with limits at 2 sigma" | "Normal with limits at 3 sigma" | "Normal weighted with limits at 2 sigma" | "Normal weighted with limits at 3 sigma" )

**Description:** Sends the current X limits to the Simulator as parameters to a specified distribution. Also sends the Error StdDev values for each response as the standard deviation for added random noise.

```js

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 *
		:Propanol - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol
		 + 0.111 * :Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Set Limits( Ethanol( 1.9, 10 ), Methanol( 4.5, 10 ), Time( 1.2, 2 ) );
obj2 << Send Limits to Simulator( "Normal with Limits at 3 Sigma" );

```

### Send Midpoints to Profiler

**Syntax:** obj << Send Midpoints to Profiler

**Description:** Sends the midpoints for the current X limits to the Profiler.

```js

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 *
		:Propanol - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol
		 + 0.111 * :Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Set Limits( Ethanol( 1.9, 10 ), Methanol( 4.5, 10 ), Time( 1.2, 2 ) );
obj2 << Send Midpoints to Profiler;

```

### Set Limits

**Syntax:** obj << Set Limits( Set Limits(colume name(lower limit,upper limit),...) )

**Description:** Sets the factor limits using a script.

```js

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 *
		:Propanol - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol
		 + 0.111 * :Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Set Limits( Ethanol( 1.9, 10 ), Methanol( 4.5, 10 ), Time( 1.2, 2 ) );

```

### Show Corners

**Syntax:** obj << Show Corners( state=0|1 )

**Description:** Shows or hides the Corners report. This report contains a table of the in-specification probabilities at the extremes of the factor space. The probabilities are calculated using a normal distribution centered at the predicted values and cut at the specification limits.

```js

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 *
		:Propanol - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol
		 + 0.111 * :Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Show All Corners;

```

### Show Current Profiler Values

**Syntax:** obj << Show Current Profiler Values( state=0|1 )

**Description:** Shows the current value from the profiler as a vertical gray sparse-dotted line.

```js

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 *
		:Propanol - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol
		 + 0.111 * :Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Show Current Profiler Values( 1 );

```

### Show Portion for Each Response

**Syntax:** obj << Show Portion for Each Response( state=0|1 )

**Description:** Adds a column that contains the in-specification portion for each response at the current X limits.

```js

Names Default To Here( 1 );

Names Default To Here( 1 );
Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 *
		:Propanol - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol
		 + 0.111 * :Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 26 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.1 )} )
);
New Column( "Pred Formula Impurities",
	Numeric,
	Continuous,
	Formula(
		0.3 + -0.08 * :Ethanol + 0.06 * :Propanol + 0.12 * :Time + 0.06 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {USL( 1 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 24642 ), Std Dev( 0.2 )} )
);
obj = Profiler( Y( :Pred Formula Yield, :Pred Formula Impurities ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Show Portion for Each Response( 1 );
obj2 << Set Limits( Methanol( 5, 10 ), Propanol( 0, 5 ) );

```

## Simulator

### Automatic Histogram Update

**Syntax:** simuobj << Automatic Historgram Update( state=0|1 )

**Description:** Updates the histogram with new simulated values when the distributions of the factors change.

**Example 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Simulator(
	1,
	Factors(
		SILICA << Random( Normal( 1.25, 0.3266 ) ),
		SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )
	),
	Responses(
		Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,
		Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise
	),
	Simulate
);
simobj = obj << Get Simulator;
simobj << Automatic Histogram Update( 1 );
Wait( 1 );
obj << Term Value( SILANE( 60, Lock( 1 ) ) );

```

**Example 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Simulator(
	1,
	Factors(
		SILICA << Random( Normal( 1.25, 0.3266 ) ),
		SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )
	),
	Responses(
		Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,
		Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise
	),
	Automatic Histogram Update( 1 ),
	Simulate
);
Wait( 1 );
obj << Term Value( SILANE( 60, Lock( 1 ) ) );

```

### Defect Parametric Profile

**Syntax:** simobj << Defect Parametric Profile( state=0|1 )

**Description:** Graphs the mean defect rate by distributional parameters. This option is available only after the Defect Profiler is selected.

**Example 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
:Pred Formula ABRASION << Set Property( "Spec Limits", {LSL( 110 )} );
:Pred Formula MODULUS << Set Property( "Spec Limits", {LSL( 750 ), USL( 1700 )} );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Simulator(
		1,
		Factors(
			SILICA << Random( Normal( 1.25, 0.3266 ) ),
			SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )
		),
		Responses(
			Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,
			Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise
		),
		Defect Profiler( 1 ),
		Simulate
	)
);

simobj = obj << Get Simulator;
simobj << Defect Parametric Profile( 1 );

```

**Example 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
:Pred Formula ABRASION << Set Property( "Spec Limits", {LSL( 110 )} );
:Pred Formula MODULUS << Set Property( "Spec Limits", {LSL( 750 ), USL( 1700 )} );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Simulator(
		1,
		Factors(
			SILICA << Random( Normal( 1.25, 0.3266 ) ),
			SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )
		),
		Responses(
			Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,
			Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise
		),
		Defect Profiler( 1 ),
		Defect Parametric Profile( 1 ),
		Simulate
	)
);

```

### Defect Profiler

**Syntax:** simobj << Defect Profiler( state=0|1 )

**Description:** Shows the defect rate as an isolated function of each factor. This option is available only if specification limits are defined.

**Example 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
:Pred Formula ABRASION << Set Property( "Spec Limits", {LSL( 110 )} );
:Pred Formula MODULUS << Set Property( "Spec Limits", {LSL( 750 ), USL( 1700 )} );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Simulator(
		1,
		Factors(
			SILICA << Random( Normal( 1.25, 0.3266 ) ),
			SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )
		),
		Responses(
			Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,
			Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise
		),
		Simulate
	)
);
simobj = obj << Get Simulator;
simobj << Defect Profiler( 1 );

```

**Example 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
:Pred Formula ABRASION << Set Property( "Spec Limits", {LSL( 110 )} );
:Pred Formula MODULUS << Set Property( "Spec Limits", {LSL( 750 ), USL( 1700 )} );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Simulator(
		1,
		Factors(
			SILICA << Random( Normal( 1.25, 0.3266 ) ),
			SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )
		),
		Responses(
			Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,
			Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise
		),
		Defect Profiler( 1 ),
		Simulate
	)
);

```

### N Runs

**Syntax:** obj << Simulator( N Runs(number=1000) )

**Description:** Sets the number of runs for the simulation. "10000" by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Simulator(
	1,
	Factors(
		SILICA << Random( Normal( 1.25, 0.3266 ) ),
		SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )
	),
	Responses(
		Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,
		Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise
	),

);
obj << Simulator( N Runs( 2500 ), Simulate );

```

### Resimulate

**Syntax:** simobj << Resimulate

**Description:** Reruns the simulation. This option is useful after any changes to the distributions of the factors have been made.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Simulator(
	1,
	Factors(
		SILICA << Random( Normal( 1.25, 0.3266 ) ),
		SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )
	),
	Simulate
);
Wait( 1 );
obj << Term Value( SILANE( 60, Lock( 1 ) ) );
simobj = obj << Get Simulator;
simobj << Resimulate;

```

### Set Random Seed

**Syntax:** obj << Simulator( Set Random Seed( number ) )

**Description:** Sets the random seed to a specific value assuring that all subsequent runs using the same seed are reproducible.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Simulator(
	1,
	Factors(
		SILICA << Random( Normal( 1.25, 0.3266 ) ),
		SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )
	),
	Responses(
		Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,
		Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise
	),

);
obj << Simulator( Set Random Seed( 1234 ), Simulate );

```

### Simulate to table

**Syntax:** simobj << Simulate To Table(N Runs(n),factorName<<Sequence Location(low,high,nSteps),factorName2<<Sequence Spread(low,high,nSteps),factorName3<<Not Sequenced)

**Description:** Creates a table of simulation results, sequenced across different means or spreads.

**Example 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Simulator(
	1,
	Factors(
		SILICA << Random( Normal( 1.25, 0.3266 ) ),
		SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )
	)
);
simobj = obj << Get Simulator;
simobj << Simulate to table(
	N Runs( 20 ),
	SILICA << Sequence Location( .5, 2, 4 ),
	SILANE << Sequence Location( 35, 65, 4 ),
	SULFUR << Sequence Location( 1.5, 3, 4 )
);

```

**Example 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Simulator(
	1,
	Factors(
		SILICA << Random( Normal( 1.25, 0.3266 ) ),
		SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )
	)
);
obj << Simulator(
	Simulate to table(
		N Runs( 20 ),
		SILICA << Sequence Location( .5, 2, 4 ),
		SILANE << Sequence Location( 35, 65, 4 ),
		SULFUR << Sequence Location( 1.5, 3, 4 )
	)
);

```

### Simulation Experiment

**Syntax:** simobj << Simulation Experiment( NRun(number of experimental runs=128), Portion(factor space portion=1),NSim(number of simulations per experimental run=10000),<Run>,<Selected Factors(factor1,..)> )

**Description:** Runs a designed simulation experiment based on the locations of the factor distributions within the model.

**Example 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Simulator(
	1,
	Factors(
		SILICA << Random( Normal( 1.25, 0.3266 ) ),
		SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )
	),
	Responses(
		Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,
		Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise
	)
);
simobj = obj << Get Simulator;
simobj << Simulation Experiment( NRun( 100 ), Portion( 0.6 ) );

```

**Example 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Simulator(
	1,
	Factors(
		SILICA << Random( Normal( 1.25, 0.3266 ) ),
		SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )
	),
	Responses(
		Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,
		Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise
	)
);
obj << Simulator(
	Simulation Experiment( NRun( 128 ), NSim( 20000 ), Portion( 1.0 ), Run )
);

```

### Simulator

**Syntax:** obj << Simulator( state=0|1, <Factors( column << Random( )|Fixed( constant )| Expression( )| Multivariate( ) )>, <Responses( column << No Noise| Add Random Noise| Add Random Weighted Noise| Add Multivariate Noise ) )>

**Description:** Launches the Simulator.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Simulator(
	1,
	Factors(
		SILICA << Random( Normal( 1.25, 0.3266 ) ),
		SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )
	),
	Responses(
		Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,
		Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise
	)
);

```

### X Correlations

**Syntax:** obj << Simulator( X Correlations( state=0|1, {factor1, factor2, ..., factorN}, [NxN correlations] ) )

**Description:** Sets the correlations on the X factors when the simulation setting for the factors is set to Multivariate.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Simulator(
	1,
	Factors(
		SILICA << Multivariate( 1.2, 0.3266 ), SILANE << Multivariate( 50, 6.532 ),
		SULFUR << Fixed( 2.25 )
	),
	Responses(
		Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,
		Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise
	),
	Automatic Histogram Update( 1 ),
	X Correlations( 1, {SILICA, SILANE, SULFUR}, [1 0.3 0, 0.3 1 0, 0 0 1] ),
	Simulate
);

```

### Y Correlations

**Syntax:** obj << Simulator( Y Correlations( state=0|1, {response1, response2, ..., responseN}, [NxN correlations] ) )

**Description:** Sets the correlations on the Y responses when multivariate noise is added to the responses.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Simulator(
	1,
	Factors(
		SILICA << Random( Normal( 1.25, 0.3266 ) ),
		SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )
	),
	Responses(
		Pred Formula ABRASION << Add Multivariate Noise( 1 ),
		Pred Formula MODULUS << No Noise,
		Pred Formula ELONG << Add Multivariate Noise( 1 ),
		Pred Formula HARDNESS << No Noise
	),
	Y Correlations(
		1,
		{Pred Formula ABRASION, Pred Formula MODULUS, Pred Formula ELONG,
		Pred Formula HARDNESS},
		[1 0.15 0.27 0, 0.15 1 0 0, 0.27 0 1 0, 0 0 0 1]
	),
	Simulate
);

```

### Action

**Syntax:** obj << Action

**Description:** All-purpose trapdoor within a platform to insert expressions to evaluate. Temporarily sets the DisplayBox and DataTable contexts to the Platform.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Adapt Y Axis

**Syntax:** obj << Adapt Y Axis( state=0|1 )

**Description:** Rescales the vertical axis if the response is outside the axis range, so that the range of the response is included.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Desirability Functions( 1 );
obj << Maximize Desirability;
Wait( 1 );
obj << Adapt Y Axis;

```

### Add Shapley graph scripts to data table

**Syntax:** obj << Add Shapley graph scripts to data table( state=0|1 )

**Description:** Adds JSL Graph Builder bar chart scripts of the Shapley values by rows for each response in the model.

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Body Fat.jmp" );
obj = dt << Neural(
	Y( :Percent Body Fat ),
	X(
		:"Age (years)"n, :"Weight (lbs)"n, :"Height (inches)"n,
		:"Neck circumference (cm)"n, :"Chest circumference (cm)"n,
		:"Abdomen circumference (cm)"n, :"Hip circumference (cm)"n,
		:"Thigh circumference (cm)"n, :"Knee circumference (cm)"n,
		:"Ankle circumference (cm)"n, :"Biceps (extended) circumference (cm)"n,
		:"Forearm circumference (cm)"n, :"Wrist circumference (cm)"n
	),
	Validation Method( :Validation ),
	Set Random Seed( 123 ),
	Fit( NTanH( 3 ) )
);
obj << (Fit[1] << Profiler(
	1,
	Add Shapley graph scripts to data table( 1 ),
	Save Shapley Values
));

```

### Alter Linear Constraints

**Syntax:** obj << Alter Linear Constraints

### Animation

**Syntax:** obj << Animation( <Tour Type( "Sequential"|("Single Factor",factorname)|"Random"|"Data Sequential"|"Data Random" )>, <Speed(ticks)>, <Go>, <Stop> )

**Description:** Starts or stops the animation of the profiler. You can also specify how the animation cycles through factor combinations.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Animation( Tour Type( "Sequential" ), Go );
Wait( 3 );
obj << Animation( "Stop" );

```

### Append Settings to Table

**Syntax:** obj << Append Settings to Table

**Description:** Saves the settings of the current profiler as a new row at the end of the data table.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Append Settings to Table;

```

### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**Description:** Apply a previously created preset to the object, updating the options and customizations to match the saved settings.

**JMP Version Added:** 18

**Anonymous preset**

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**Search within folder(s)**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

### Arrange in Rows

**Syntax:** obj << Arrange in Rows( number )

**Description:** Specifies the number of plots that appear in a row.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
Wait( 2 );
obj << Arrange in Rows( 2 );

```

### Broadcast Factor Settings

**Syntax:** obj << Broadcast Factor Settings

**Description:** Sends the factor settings for the current profiler to all other profilers. This option does not link the profilers.

**JMP Version Added:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 ),
	Term Value(
		SILICA( 1.75, Lock( 0 ), Show( 1 ) ),
		SILANE( 45.2, Lock( 0 ), Show( 1 ) ),
		SULFUR( 2.45, Lock( 0 ), Show( 1 ) )
	)
);
obj << Contour Profiler( 1 );
Wait( 1 );
obj << Broadcast Factor Settings;

```

### Colorize

**Syntax:** obj << Colorize( matrix )

**Description:** Specifies a matrix of proportions between 0 for uncolored and 1 for dark red. The rows and columns of the matrix correspond to the Y and X variables in the Profiler.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Colorize( [.0 .4 .5, .1 .2 .3, .4 .5 .3, .5 .1 .1] );

```

### Colorize Profiler

**Syntax:** subobj << Colorize Profiler

**Description:** Colors cells in the profiler by Total Effect importance indices using a red to white intensity scale.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fit = Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
fit << Save Formulas;
obj = Profiler( Y( :Predicted Y ), Expand );
obj << Independent Uniform Inputs( 1 );
Wait( 1 );
subobj = (Report( obj )["Variable Importance: Independent Uniform Inputs"] <<
get scriptable object);
subobj << Colorize Profiler;

```

### Column Switcher

**Syntax:** obj << Column Switcher(column reference, {column reference, ...}, < Title(title) >, < Close Outline(0|1) >, < Retain Axis Settings(0|1) >, < Layout(0|1) >)

**Description:** Adds a control panel for changing the platform&apos;s variables

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

### Combinations

**Syntax:** obj << Combinations( "Mixed"|"Two-Way"|"Many-Way" )

**Description:** Specifies the types of interactions that are shown as overlaid interaction curves in the profiler.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Overlaid Interactions( 1 );
Wait( 1 );
obj << Combinations( "Many-Way" );

```

### Compute Shapley values for all rows

**Syntax:** obj << Compute Shapley values for all rows( state=0|1 )

**Description:** Computes the Shapley values for all rows in the data table, excluded and not excluded.

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Body Fat.jmp" );
r = dt << Select Rows( [5, 7, 8, 10] );
r << Exclude;
obj = dt << Neural(
	Y( :Percent Body Fat ),
	X(
		:"Age (years)"n, :"Weight (lbs)"n, :"Height (inches)"n,
		:"Neck circumference (cm)"n, :"Chest circumference (cm)"n,
		:"Abdomen circumference (cm)"n, :"Hip circumference (cm)"n,
		:"Thigh circumference (cm)"n, :"Knee circumference (cm)"n,
		:"Ankle circumference (cm)"n, :"Biceps (extended) circumference (cm)"n,
		:"Forearm circumference (cm)"n, :"Wrist circumference (cm)"n
	),
	Validation Method( :Validation ),
	Set Random Seed( 123 ),
	Fit( NTanH( 3 ) )
);
obj << (Fit[1] << Profiler(
	1,
	Compute Shapley values for all rows( 1 ),
	Save Shapley Values
));

```

### Conditional Predictions

**Syntax:** obj << Conditional Predictions( state=0|1 )

**Description:** Includes random effects when formulating the predicted value and profiles. This option is available only in the Fit Mixed personality of the Fit Model platform when random effects are included in the model.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj1 = dt << Run Script( "Repeated Measures Model" );
obj1 << Profiler( Conditional Predictions( 1 ) );

```

### Confidence Intervals

**Syntax:** obj << Confidence Intervals( state=0|1 )

**Description:** Shows or hides 95% confidence intervals for the simulated means on the curves of the profiler graph. Available only if a Std Error formula is specified in the launch window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj1 = dt << Run Script( "RSM for 4 Responses" );
obj1 << Prediction Formula;
obj1 << StdErr Pred Formula;
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION 2, :Pred Formula MODULUS 2, :Pred SE ABRASION,
		:Pred SE MODULUS
	)
);
Wait( 1 );
obj << Confidence Intervals( 0 );

```

### Contour Profiler

**Syntax:** obj << Contour Profiler( state=0|1 )

**Description:** Shows or hides the Contour Profiler.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Contour Profiler( 1 );

```

### Converge Limit

**Syntax:** obj << Converge Limit( number )

**Description:** Specifies the criterion for convergence for the optimization algorithm. If the convergence criterion is less than this value for two consecutive iterations, the algorithm stops.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Converge limit( 0.0001 );
obj << Optimize;

```

### Copy Script

**Syntax:** obj << Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Copy Script;

```

### Copy Settings Script

**Syntax:** obj << Copy Settings Script

**Description:** Copies the current factor settings to the clipboard. The settings can then be pasted into another profiler.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Set to Data in Row( 4 );
obj << Copy Settings Script;
obj2 = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj2 << Paste Settings Script;

```

### Custom Profiler

**Syntax:** obj << Custom Profiler( state=0|1 )

**Description:** Shows or hides the Custom Profiler.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Custom Profiler( 1 );

```

### Data Points

**Syntax:** obj << Data Points( state=0|1 )

**Description:** Shows or hides the individual data points in the Prediction Profiler plot. The data points fade according to how far away they are from the plane of each profiler.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Data Points( 1 );

```

### Data Table Window

**Syntax:** obj << Data Table Window

**Description:** Move the data table window for this analysis to the front.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Data Table Window;

```

### Default N Grid Points

**Syntax:** obj << Default N Grid Points( number )

**Description:** Sets the number of levels for each continuous factor.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Default N Grid Points( 5 );

```

### Default N Levels

**Syntax:** obj << Default N Levels( number )

### Dependent Resampled Inputs

**Syntax:** obj << Dependent Resampled Inputs( state=0|1 )

**Description:** Calculates the indices that are used in the Assess Variable Importance option by resampling the data table assuming that the inputs are dependent.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fit = Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
fit << Save Formulas;
obj = Profiler( Y( :Predicted Y ), Expand );
obj << Dependent Resampled Inputs( 1 );

```

### Design Space

**Syntax:** obj << Design Space( state=0|1 )

### Design Space Profiler

**Syntax:** obj << Design Space Profiler( state=0|1 )

**Description:** Launches the Design Space Profiler, which helps map specification limits on the Y variables to specification limits on the X variables.

```js

Names Default To Here( 1 );

dt = Open( "$Sample_Data/Tiretread.jmp" );
dt:Pred Formula ABRASION << Set Property( "Spec Limits", {LSL( 120 ), Show Limits( 1 )} );
dt:Pred Formula MODULUS << Set Property( "Spec Limits", {LSL( 1200 ), Show Limits( 1 )} );
dt:Pred Formula ELONG << Set Property(
	"Spec Limits",
	{LSL( 350 ), USL( 500 ), Show Limits( 1 )}
);
dt:Pred Formula HARDNESS << Set Property(
	"Spec Limits",
	{LSL( 65 ), USL( 75 ), Show Limits( 1 )}
);
dt:Pred Formula ABRASION << Set Property(
	"Predicting",
	{:ABRASION, Creator( "Fit Least Squares" ), RMSE( 3 )}
);
dt:Pred Formula MODULUS << Set Property(
	"Predicting",
	{:MODULUS, Creator( "Fit Least Squares" ), RMSE( 100 )}
);
dt:Pred Formula ELONG << Set Property(
	"Predicting",
	{:ELONG, Creator( "Fit Least Squares" ), RMSE( 10 )}
);
dt:Pred Formula HARDNESS << Set Property(
	"Predicting",
	{:HARDNESS, Creator( "Fit Least Squares" ), RMSE( .6 )}
);
Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Profiler( 1, Desirability Functions( 0 ), Design Space Profiler( 1 ) )
);

```

### Desirability Functions

**Syntax:** obj << Desirability Functions( state=0|1 )

**Description:** Shows or hides the desirability functions, which are useful when optimizing across several responses.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Desirability Functions( 1 );

```

### Extrapolation Control Option

**Syntax:** obj << Extrapolation Control Option( "Off"|"On"|"Warning On" )

**Description:** Specifies if extrapolation control is turned on or off, or if only extrapolation control warnings are turned on.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Age, :Weight, :Runtime, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Profiler( Extrapolation Control Option( "On" ) );

```

### Extrapolation Details

**Syntax:** obj << Extrapolation Details( state=0|1 )

**Description:** Shows or hides the extrapolation control details that give the extrapolation metric of the current point and the extrapolation threshold.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Age, :Weight, :Runtime, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Profiler( Extrapolation Control Option( "On" ), Extrapolation Details( 1 ) );

```

### Extrapolation Type Option

**Syntax:** obj << Extrapolation Type Option( "Regularized T2"|"K Nearest Neighbors" )

**JMP Version Added:** 18

### Formulas for OPTMODEL

**Syntax:** obj << Formulas for OPTMODEL

**Description:** Saves the prediction formulas from the model in a new file as SAS statements for PROC OPTMODEL.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Formulas for OPTMODEL;

```

### Get By Levels

**Syntax:** obj << Get By Levels

**Description:** Returns an associative array mapping the by group columns to their values.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get Constraints

**Syntax:** obj << Get Constraints

**Description:** Returns a list of factor constraints.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula Y ),
	Profiler( 1, Profile at Boundary( "Stop at Boundaries" ), )
);
obj << Get Constraints;

```

### Get Container

**Syntax:** obj << Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

**General**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Platform with Filter**

```js

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

### Get Data Table

**Syntax:** obj << Get Data Table

**Description:** Returns a reference to the data table.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Desirability

**Syntax:** obj << Get Desirability

**Description:** Returns the current desirability settings.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Desirability Functions( 1 );
d = obj << Get Desirability;
Show( d );

```

### Get Factor Settings

**Syntax:** obj << Get Factor Settings

**Description:** Returns the current factor settings as a list.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Get Factor Settings;

```

### Get Factor Settings Script

**Syntax:** obj << Get Factor Settings Script

**Description:** Returns the current factor settings as an expression that can be used in a script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Get Factor Settings Script;

```

### Get Main Indices

**Syntax:** obj << Get Main Indices

**Description:** Saves the main indices from the Assess Variable Importance analysis to a new file as SAS statements for PROC OPTMODEL.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fit = Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
fit << Save Formulas;
obj = Profiler( Y( :Predicted Y ), Expand );
obj << Independent Resampled Inputs( 1 );
obj << Get Main Indices;

```

### Get Script

**Syntax:** obj << Get Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntax:** obj << Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Simulator

**Syntax:** obj << Get Simulator

**Description:** Returns a reference to the Simulator.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Simulator(
	1,
	Factors(
		SILICA << Random( Normal( 1.25, 0.3266 ) ), SILANE << Fixed( 50 ),
		SULFUR << Fixed( 2.25 )
	),
	Responses(
		Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,
		Pred Formula ELONG << Add Random Noise( 1 ),
		Pred Formula HARDNESS << Add Random Weighted Noise( 1 )
	)
);
obj2 = obj << Get Simulator;
obj2 << Simulation Experiment;

```

### Get Timing

**Syntax:** obj << Get Timing

**Description:** Times the platform launch.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
t = obj << Get Timing;
Show( t );

```

### Get Total Indices

**Syntax:** obj << Get Total Indices

**Description:** Saves the total indices from the Assess Variable Importance analysis to a new file as SAS statements for PROC OPTMODEL.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fit = Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
fit << Save Formulas;
obj = Profiler( Y( :Predicted Y ), Expand );
obj << Independent Resampled Inputs( 1 );
obj << Get Total Indices;

```

### Get Web Support

**Syntax:** obj << Get Web Support

**Description:** Return a number indicating the level of Interactive HTML support for the display object. 1 means some or all elements are supported. 0 means no support.

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Graph Spacing

**Syntax:** obj << Graph Spacing( number )

**Description:** Sets the amount of horizontal space between graph panels.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
Wait( 2 );
obj << Graph Spacing( 20 );

```

### Hide Y Variables

**Syntax:** obj << Hide Y Variables( Y columns )

**Description:** Specifies the response variables that you would like to show or hide in the profiler.

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 0.5 );
obj << Hide Y Variables( :Pred Formula MODULUS );

```

### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Description:** Ignores the current settings of the platform&apos;s preferences. The message is ignored when sent to the platform after creation.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Independent Resampled Inputs

**Syntax:** obj << Independent Resampled Inputs( state=0|1 )

**Description:** Calculates the indices that are used in the Assess Variable Importance option by resampling the data table assuming that the inputs are independent.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fit = Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
fit << Save Formulas;
obj = Profiler( Y( :Predicted Y ), Expand );
obj << Independent Resampled Inputs( 1 );

```

### Independent Uniform Inputs

**Syntax:** obj << Independent Uniform Inputs( state=0|1 )

**Description:** Calculates the indices that are used in the Assess Variable Importance option by resampling the data table assuming that the inputs have independent uniform distributions.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fit = Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
fit << Save Formulas;
obj = Profiler( Y( :Predicted Y ), Expand );
obj << Independent Uniform Inputs( 1 );

```

### Interaction Profiler

**Syntax:** obj << Interaction Profiler( state=0|1 )

**Description:** Shows or hides an interaction profiler for each response.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Interaction Profiler( 1 );

```

### Linear Constraints

**Syntax:** obj << Linear Constraints

**Description:** Adds, changes, or deletes linear constraints.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Alter Linear Constraints;

```

### Linearly Constrained Inputs

**Syntax:** obj << Linearly Constrained Inputs( state=0|1 )

**Description:** Calculates the indices that are used in the Assess Variable Importance option by resampling the data table over a uniform distribution defined by the linear constraints.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Script( "Constraint", {1 * :LDL + 1 * :HDL <= 250} );
fit = Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
fit << Save Formulas;
obj = Profiler( Y( :Predicted Y ), Expand );
obj << Linearly Constrained Inputs( 1 );

```

### Link Profilers

**Syntax:** obj << Link Profilers( state=0|1 )

**Description:** Links all the profilers in a single report together, so that a change in a factor in one profiler causes that factor to change to that value in all other profilers.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Prediction Profiler( 1 );
obj << Contour Profiler( 1 );
obj << Link Profilers( 1 );
Wait( 1 );
obj << Term Value( :Silica( 1.78 ), :Sulfur( 2.34 ) );

```

### Local Data Filter

**Syntax:** obj << Local Data Filter

**Description:** To filter data to specific groups or ranges, but local to this platform

```js

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

### Max Cycles

**Syntax:** obj << Max Cycles( number )

**Description:** Specifies the maximum number of cycles within each trip in the optimization algorithm.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Max Cycles( 5 );
obj << Optimize;

```

### MaxIter

**Syntax:** obj << MaxIter( number )

**Description:** Specifies the maximum number of iterations within each trip in the optimization algorithm.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << MaxIter( 10 );
obj << Optimize;

```

### Maximize Desirability

**Syntax:** obj << Maximize Desirability

**Description:** Sets the current factor values to maximize the desirability functions.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Desirability Functions( 1 );
Wait( 2 );
obj << Maximize Desirability;

```

### Maximize and Remember

**Syntax:** obj << Maximize and Remember

**Description:** Maximizes the desirability functions and remembers the associated settings.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Desirability Functions( 1 );
obj << Maximize and Remember;

```

### Maximize for Each Grid Point

**Syntax:** obj << Maximize for Each Grid Point

**Description:** Maximizes the desirability functions for each grid point, holding one or more factors constant. This option requires locking at least one factor.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Desirability Functions( 1 );
obj << Term Value( SILANE( 60, Lock( 1 ) ) );
obj << Maximize For Each Grid Point;

```

### Maximum Number of Curves

**Syntax:** obj << Maximum Number of Curves( number=500 )

**Description:** Specifies the maximum number of curves to show when the Overlaid Interactions option is selected. If the total possible number of curves is greater than the specified maximum number of curves, an arbitrary sample is drawn. "500" by default.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Overlaid Interactions( 1 );
Wait( 1 );
obj << Maximum Number of Curves( 100 );

```

### New JSL Preset

**Syntax:** New JSL Preset( preset )

**Description:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Version Added:** 18

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Noise Factors

**Syntax:** obj = Profiler(...<Noise Factors( column(s) )>...)

**Description:** Specifies noise factors, which must be columns that are ingredients to the formula columns. Noise factors are used to study robustness (or flatness) with respect to transmitted variation from these factors. The resulting profiler includes derivatives of the formulas with respect to the noise factors.

**Contour Profiler Example**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Noise Factors( :SILANE )
);

```

**Custom Profiler Example**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Custom Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Noise Factors( :SILANE )
);

```

**Mixture Profiler Example**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );
obj = dt << Mixture Profiler( Y( :Pred Formula Y ), Noise Factors( :p1 ) );

```

**Profiler Example**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Noise Factors( :SILANE )
);

```

### Optimization Control Panel

**Syntax:** obj << Optimization Control Panel( state=0|1 )

### Output Grid Table

**Syntax:** obj << Output Grid Table

**Description:** Creates a new data table that contains columns for the factors that contain grid values, columns for each of the responses with computed values at each grid point, and the desirability computation at each grid point.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Output Grid Table;

```

### Output Random Table

**Syntax:** obj << Output Random Table( number of runs,<Add Random Noise> )

**Description:** Creates a new data table of random factor settings and predicted values over those factor settings for the specified number of runs. There is also an option to add random noise to the responses.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Output Random Table( 1000 );

```

### Overlaid Interactions

**Syntax:** obj << Overlaid Interactions( state=0|1 )

**Description:** Shows or hides faded curves in the Prediction Profiler plots. The faded curves represent the profilers for different types of interactions among the ranges of the factors.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Overlaid Interactions( 1 );

```

### Paste Local Data Filter

**Syntax:** obj << Paste Local Data Filter

**Description:** Apply the local data filter from the clipboard to the current report.

```js

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

### Paste Settings Script

**Syntax:** obj << Paste Settings Script

**Description:** Pastes the profiler settings from the clipboard to a profiler in another report.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Set to Data in Row( 4 );
obj << Copy Settings Script;
obj2 = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj2 << Paste Settings Script;

```

### Predict for Another Table

**Syntax:** obj << Predict for Another Table( <data table> )

**Description:** Adds prediction columns to a specified data table, using the factors in that table. This option is available only for continuous responses.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
dt2 = dt << Subset(
	All rows,
	columns( :SILICA, :SILANE, :SULFUR ),
	Output Table( "Subset" )
);
obj << Predict For Another Table( dt2 );

```

### Prediction Formula

**Syntax:** obj = Profiler(...Prediction Formula( column(s) )...)

**Description:** Specifies the response columns that contain formulas.

```js

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

### Prediction Intervals

**Syntax:** obj << Prediction Intervals( state=0|1 )

**Description:** Shows or hides the 95% prediction intervals that include both the variation in estimating the model and the variation in the residual error.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << Fit Model(
	Y( :ELONG ),
	Effects( :SILICA, :SILANE, :SULFUR, :SILANE * :SILANE ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run(
		Profiler(
			1,
			Confidence Intervals( 1 ),
			Prediction Intervals( 1 ),
			Desirability Functions( 0 )
		),
		:ELONG << {Summary of Fit( 0 ), Analysis of Variance( 0 ),
		Parameter Estimates( 1 ), Effect Tests( 0 ), Effect Details( 0 ), Lack of Fit( 0 ),
		Plot Actual by Predicted( 0 ), Plot Regression( 0 ),
		Plot Residual by Predicted( 0 ), Effect Summary( 0 )}
	)
);

```

### Prediction Profiler

**Syntax:** obj << Prediction Profiler( state=0|1 )

**Description:** Shows or hides the Prediction Profiler.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Prediction Profiler( 1 );

```

### Profile at Boundary

**Syntax:** obj << Profile at Boundary( "Turn at Boundaries"|"Stop at Boundaries" )

**Description:** Identifies the boundary handling method for factors that have constraints. This option is available only for prediction models containing mixture variables, when there is a linear constraint, or when the Alter Linear Constraints option is specified.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Donev Mixture Data.jmp" );
obj1 = Fit Model(
	Y( :Damping ),
	Effects( :CuSO4 & RS & Mixture, :Na2S2O3 & RS & Mixture, :Glyoxal & RS & Mixture ),
	Personality( "Standard Least Squares" ),
	Run Model( 1 )
);
obj1 << Prediction Formula;
obj2 = Profiler( Y( :Pred Formula Damping ) );
Wait( 1 );
obj2 << Profile at Boundary( "Stop at Boundaries" );

```

### Profiler

**Syntax:** Profiler( Y( column1, <column2>, ..., <PredSE column1, PredSE column2>, ... ), <Expand> )

**Description:** Produces an interactive graph that enables you to explore how a predicted response changes as you change factor settings. For each factor, the profiler shows prediction traces that are based on saved predictions formulas and linear constraints and illustrate how the response changes with respect to that factor. The Expand argument corresponds to the Expand Intermediate Formulas option in the launch window.

**Example 1**

```js

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

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Stochastic Optimization.jmp" );
dt << Profiler( Y( :Yield ), Profiler( 1, Desirability Functions( 1 ), ), Expand );

```

### Prop of Error Bars

**Syntax:** obj << Prop of Error Bars( state=0|1 )

**Description:** Shows or hides error bars on the profiler graph. This option is available only when the column contains a Sigma column property.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
:Pred Formula ABRASION << Set Property( Sigma, 5 );
:Pred Formula MODULUS << Set Property( Sigma, 100 );
obj = dt << Profiler( Y( :Pred Formula ABRASION, :Pred Formula MODULUS ) );
obj << Prop of Error Bars( 1 );

```

### Redo Analysis

**Syntax:** obj << Redo Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Redo Analysis;

```

### Relaunch Analysis

**Syntax:** obj << Relaunch Analysis

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Relaunch Analysis;

```

### Remember Settings

**Syntax:** obj << Remember Settings

**Description:** Adds an outline node to the report with the values of the factor settings.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Remember Settings;

```

### Remove Column Switcher

**Syntax:** obj << Remove Column Switcher

**Description:** Removes the most recent Column Switcher that has been added to the platform.

```js

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

```js

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

### Remove Profiler

**Syntax:** scobj << Remove Profiler

**Description:** Removes the profiler from the platform report. This option is available only in a limited number of platforms.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Run Script( "SEM: Path Analysis w / Latent" );
rpt = obj << Report();
rpt["Model Specification"] << Close( 1 );
obj << Prediction Profiler(
	1,
	Confidence Intervals( 1 ),
	Term Value(
		Leadership( 0, Lock( 0 ), Show( 1 ) ),
		Conflict( 0, Lock( 0 ), Show( 1 ) )
	),
	Y Terms( Conflict, Satisfaction )
);
scobj = rpt[Outline Box( "Prediction Profiler" )] << Get Scriptable Object();
scobj << Remove Profiler;

```

### Render Preset

**Syntax:** Render Preset( preset )

**Description:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Reorder X Variables

**Syntax:** obj << Reorder X Variables( columns )

**Description:** Reorders the model main effects in the profiler.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 2 );
obj << Reorder X Variables( :SULFUR, :SILANE, :SILICA );

```

### Reorder Y Variables

**Syntax:** obj << Reorder Y Variables( columns )

**Description:** Reorders the response variables.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 2 );
obj << Reorder Y Variables(
	:Pred Formula HARDNESS, :Pred Formula MODULUS, :Pred Formula ELONG
);

```

### Reorder factors by main effect importance

**Syntax:** subobj << Reorder factors by main effect importance

**Description:** Reorders the cells in the Prediction Profiler in accordance with the importance indices for the main effects.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fit = Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
fit << Save Formulas;
obj = Profiler( Y( :Predicted Y ), Expand );
obj << Independent Uniform Inputs( 1 );
Wait( 1 );
subobj = (Report( obj )["Variable Importance: Independent Uniform Inputs"] <<
get scriptable object);
subobj << Reorder factors by main effect importance;

```

### Reorder factors by total importance

**Syntax:** subobj << Reorder factors by total importance

**Description:** Reorders the cells in the Prediction Profiler in accordance with the total importance indices for the factors.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fit = Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
fit << Save Formulas;
obj = Profiler( Y( :Predicted Y ), Expand );
obj << Independent Uniform Inputs( 1 );
subobj = (Report( obj )["Variable Importance: Independent Uniform Inputs"] <<
get scriptable object);
subobj << Reorder factors by main effect importance;
Wait( 1 );
subobj << Reorder factors by total importance;

```

### Report

**Syntax:** obj << Report;

Report( obj )

**Description:** Returns a reference to the report object.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntax:** obj << Report View( "Full"|"Summary" )

**Description:** The report view determines the level of detail visible in a platform report. Full shows all of the detail, while Summary shows only select content, dependent on the platform. For customized behavior, display boxes support a <<Set Summary Behavior message.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Report View( "Summary" );

```

### Reset

**Syntax:** obj << Reset

**Description:** Resets the desirability functions.

### Reset Factor Grid

**Syntax:** obj << Reset Factor Grid

### Reset Factors

**Syntax:** obj << Reset Factors

**Description:** Opens a window for changing the factor grid.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Reset Factor Grid;

```

### Response Limits

**Syntax:** Pred Y << Response Limits( {Lower( value, fraction ), Middle( value, fraction ), Upper( value, fraction ), Goal( Minimize|Maximize|Target ), Importance( number )} )

**Description:** Sets the desirability function settings for an individual response as well as the associated desirability values.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Pred Formula ABRASION << Response Limits(
		{Lower( 90, 0.9819 ), Middle( 145, 0.5 ), Upper( 200, 0.066 ), Goal( Minimize ),
		Importance( 1 )}
	)
);
obj << Desirability Functions( 1 );

```

### Samples per Factor

**Syntax:** obj << Samples per Factor( number=6 )

**Description:** Specifies the number of sample values taken for each continuous factor for two-way interactions. This value is reduced for many-way interactions and is conditional on the maximum number of curves. "6" by default.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Overlaid Interactions( 1 );
Wait( 1 );
obj << Samples per Factor( 10 );

```

### Save Bagged Predictions

**Syntax:** obj << Save Bagged Predictions( nsample, Random Seed(number), Fractional Weights(0|1), Save Prediction Formulas(0|1) )

**Description:** Uses bootstrap aggregating (bagging) to make predictions and saves the bagged prediction means and standard errors to the data table.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Neural(
	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),
	X( :SILICA, :SILANE, :SULFUR ),
	Crossvalidation( No Crossvalidation ),
	Go
);
obj << Profiler( Save Bagged Predictions( 10 ) );

```

### Save Desirabilities

**Syntax:** obj << Save Desirabilities

**Description:** Saves the three desirability function settings for each response, as well as the associated desirability values, as a Response Limits column property in the data table.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Desirability Functions( 1 );
obj << Save Desirabilities;

```

### Save Desirability Formula

**Syntax:** obj << Save Desirability Formula

**Description:** Saves a new formula column in the data table. The new column contains a formula for the combined desirability across the responses.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Desirability Functions( 1 );
obj << Save Desirability Formula;

```

### Save Expanded Formulas

**Syntax:** obj << Save Expanded Formulas

**Description:** Saves a new formula column to the data table. The new column contains resolved formula references within the formulas used as Y variables to see the underlying variables. This is available only after the Expand Intermediate Formulas option is selected in the launch window or the Expand message is specified in the Profiler script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Profiler( Y( :GP Fit, :NL Fit, :Difference ), Expand, Contour Profiler( 1 ) );
obj << Save Expanded Formulas;

```

### Save Linear Constraints

**Syntax:** obj << Save Linear Constraints

**Description:** Saves existing linear constraints to a table script called Constraint.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Save Linear Constraints;

```

### Save Script for All Objects

**Syntax:** obj << Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj << Save Script for All Objects To Data Table( <name> )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj << Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj << Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj << Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Save Script to Script Window;

```

### Save Shapley Values

**Syntax:** obj << Save Shapley Values

**Description:** Calculates Shapley values for each row in the data table that is not excluded.

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Body Fat.jmp" );
obj = dt << Neural(
	Y( :Percent Body Fat ),
	X(
		:"Age (years)"n, :"Weight (lbs)"n, :"Height (inches)"n,
		:"Neck circumference (cm)"n, :"Chest circumference (cm)"n,
		:"Abdomen circumference (cm)"n, :"Hip circumference (cm)"n,
		:"Thigh circumference (cm)"n, :"Knee circumference (cm)"n,
		:"Ankle circumference (cm)"n, :"Biceps (extended) circumference (cm)"n,
		:"Forearm circumference (cm)"n, :"Wrist circumference (cm)"n
	),
	Validation Method( :Validation ),
	Set Random Seed( 123 ),
	Fit( NTanH( 3 ) )
);
obj << (Fit[1] << Profiler( 1, Save Shapley Values ));

```

### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Description:** Sends platform commands or display customization commands to each level of a by-group.

```js

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

```js

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

```js

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

### Sensitivity Indicator

**Syntax:** obj << Sensitivity Indicator( state=0|1 )

**Description:** Shows or hides a purple triangle that can help quickly spot sensitive cells in large profiles. The triangle&apos;s height and direction correspond to the value of the partial derivative of the profile function at its current value.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Sensitivity Indicator( 1 );

```

### Set Desirabilities

**Syntax:** obj << Set Desirabilities

**Description:** Opens the Response Goal window where you can set specific desirability values.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Desirability Functions( 1 );
obj << Set Desirabilities;

```

### Set Script

**Syntax:** obj << Set Script( Function( {arguments}, <{locals}>, expr ) )

**Description:** Sets a script that is run each time a factor changes.

```js

Names Default To Here( 1 );
ProfileCallbackLog = Function( {arg}, Show( arg ) );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Set Script( ProfileCallbackLog );
obj << Term Value( :Silica( 1 ) );

```

### Set Threshold Criterion

**Syntax:** obj << Set Threshold Criterion( Extrapolation Control Criterion( "Num Model Terms / Num Observations " | "Maximum Leverage" ), <multiplier> )

**Description:** Can be used to specify the general extrapolation threshold multiplier. Alternatively, you can use this function to open a window that enables you to adjust the extrapolation threshold multiplier.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Informative Missing( 0 ),
	Validation Method( "Holdback", 0.3333 ),
	Set Random Seed( 123 ),
	Fit( NTanH( 3 ) )
);
obj << (Fit[1] << Profiler(
	1,
	Desirability Functions( 1 ),
	Extrapolation Details( 1 ),
	Extrapolation Control Option( "Warning On" ),
	Set Threshold Criterion( General Extrapolation Control Multiplier( 4 ) )
));

```

### Set to Data in Row

**Syntax:** obj << Set to Data in Row( row number )

**Description:** Assigns the values of a data table row to the X variables in the profiler.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
Wait( 2 );
obj << Set to Data in Row( 4 );

```

### Shapley Background Data Choice

**Syntax:** obj << Shapley Background Data Choice( "Percent training data set"|"Number of rows of training data set" )

**Description:** Specifies the background data in the Shapley computations as either a percentage of the training data or a number of rows of the training data.

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Body Fat.jmp" );
obj = dt << Neural(
	Y( :Percent Body Fat ),
	X(
		:"Age (years)"n, :"Weight (lbs)"n, :"Height (inches)"n,
		:"Neck circumference (cm)"n, :"Chest circumference (cm)"n,
		:"Abdomen circumference (cm)"n, :"Hip circumference (cm)"n,
		:"Thigh circumference (cm)"n, :"Knee circumference (cm)"n,
		:"Ankle circumference (cm)"n, :"Biceps (extended) circumference (cm)"n,
		:"Forearm circumference (cm)"n, :"Wrist circumference (cm)"n
	),
	Validation Method( :Validation ),
	Set Random Seed( 123 ),
	Fit( NTanH( 3 ) )
);
obj << (Fit[1] << Profiler(
	1,
	Shapley Background Data Choice( Number of rows of training data set ),
	Shapley Number of Rows of Training Data( 150 ),
	Save Shapley Values
));

```

### Shapley Number of Permutations

**Syntax:** obj << Shapley Number of Permutations( number=10 )

**Description:** Sets the number of permutations to be used for calculating the Shapley values. "10" by default.

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Body Fat.jmp" );
obj = dt << Neural(
	Y( :Percent Body Fat ),
	X(
		:"Age (years)"n, :"Weight (lbs)"n, :"Height (inches)"n,
		:"Neck circumference (cm)"n, :"Chest circumference (cm)"n,
		:"Abdomen circumference (cm)"n, :"Hip circumference (cm)"n,
		:"Thigh circumference (cm)"n, :"Knee circumference (cm)"n,
		:"Ankle circumference (cm)"n, :"Biceps (extended) circumference (cm)"n,
		:"Forearm circumference (cm)"n, :"Wrist circumference (cm)"n
	),
	Validation Method( :Validation ),
	Set Random Seed( 123 ),
	Fit( NTanH( 3 ) )
);
obj << (Fit[1] << Profiler( 1, Shapley Number of Permutations( 15 ), Save Shapley Values )
);

```

### Shapley Number of Rows of Training Data

**Syntax:** obj << Shapley Number of Rows of Training Data( number=100 )

**Description:** Sets the number of rows of the training data that was used to fit the model for use as the background data in the Shapley computations. "100" by default.

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Body Fat.jmp" );
obj = dt << Neural(
	Y( :Percent Body Fat ),
	X(
		:"Age (years)"n, :"Weight (lbs)"n, :"Height (inches)"n,
		:"Neck circumference (cm)"n, :"Chest circumference (cm)"n,
		:"Abdomen circumference (cm)"n, :"Hip circumference (cm)"n,
		:"Thigh circumference (cm)"n, :"Knee circumference (cm)"n,
		:"Ankle circumference (cm)"n, :"Biceps (extended) circumference (cm)"n,
		:"Forearm circumference (cm)"n, :"Wrist circumference (cm)"n
	),
	Validation Method( :Validation ),
	Set Random Seed( 123 ),
	Fit( NTanH( 3 ) )
);
obj << (Fit[1] << Profiler(
	1,
	Shapley Background Data Choice( Number of rows of training data set ),
	Shapley Number of Rows of Training Data( 125 ),
	Save Shapley Values
));

```

### Shapley Percent Training Data

**Syntax:** obj << Shapley Percent Training Data( number=100 )

**Description:** Sets the percentage of the training data that was used to fit the model for use as the background data in the Shapley computations. "100" by default.

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Body Fat.jmp" );
obj = dt << Neural(
	Y( :Percent Body Fat ),
	X(
		:"Age (years)"n, :"Weight (lbs)"n, :"Height (inches)"n,
		:"Neck circumference (cm)"n, :"Chest circumference (cm)"n,
		:"Abdomen circumference (cm)"n, :"Hip circumference (cm)"n,
		:"Thigh circumference (cm)"n, :"Knee circumference (cm)"n,
		:"Ankle circumference (cm)"n, :"Biceps (extended) circumference (cm)"n,
		:"Forearm circumference (cm)"n, :"Wrist circumference (cm)"n
	),
	Validation Method( :Validation ),
	Set Random Seed( 123 ),
	Fit( NTanH( 3 ) )
);
obj << (Fit[1] << Profiler(
	1,
	Shapley Background Data Choice( Percent training data set ),
	Shapley Percent Training Data( 50 ),
	Save Shapley Values
));

```

### Shapley Set Random Seed

**Syntax:** obj << Shapley Set Random Seed( number )

**Description:** Sets a random seed for calculating the Shapley values.

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Body Fat.jmp" );
obj = dt << Neural(
	Y( :Percent Body Fat ),
	X(
		:"Age (years)"n, :"Weight (lbs)"n, :"Height (inches)"n,
		:"Neck circumference (cm)"n, :"Chest circumference (cm)"n,
		:"Abdomen circumference (cm)"n, :"Hip circumference (cm)"n,
		:"Thigh circumference (cm)"n, :"Knee circumference (cm)"n,
		:"Ankle circumference (cm)"n, :"Biceps (extended) circumference (cm)"n,
		:"Forearm circumference (cm)"n, :"Wrist circumference (cm)"n
	),
	Validation Method( :Validation ),
	Set Random Seed( 123 ),
	Fit( NTanH( 3 ) )
);
obj << (Fit[1] << Profiler( 1, Shapley Set Random Seed( 12345 ), Save Shapley Values ));

```

### Show Creator

**Syntax:** obj << Show Creator( state=0|1 )

**Description:** Shows or hides the name of the platform that created the formula in the response column. The platform name appears on the vertical axis. Available only if the response column contains a Creator named argument in the Predicting column property.

**JMP Version Added:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
fm = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x, :Drug * :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run(
		:y << {Summary of Fit( 0 ), Analysis of Variance( 0 ), Parameter Estimates( 1 ),
		Effect Tests( 0 ), Effect Details( 0 ), Lack of Fit( 0 ), Scaled Estimates( 0 ),
		Plot Actual by Predicted( 0 ), Plot Regression( 0 ),
		Plot Residual by Predicted( 0 ), Plot Studentized Residuals( 0 ),
		Plot Effect Leverage( 0 ), Plot Residual by Normal Quantiles( 0 ),
		Box Cox Y Transformation( 0 )},
		Effect Summary( 0 )
	)
);

predForm = fm << Save Columns( "Prediction Formula" );

Profiler( Y( predForm ), Show Creator( 1 ) );

```

### Show Formulas

**Syntax:** obj << Show Formulas

**Description:** Opens a script window that contains JSL for all formulas that are being profiled.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Show Formulas;

```

### Simulator

**Syntax:** obj << Simulator( state=0|1 )

**Description:** Shows or hides the Simulator.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Simulator( 1 );

```

### Spanning Range

**Syntax:** obj << Spanning Range( "Inner Axis Range"|"Full Axis Range"|"One Standard Deviation"|"Two Standard Deviations"|"Data Range" )

**Description:** Specifies how the sampling range of each continuous factor is determined. The sampling range for each factor defines the lowest and highest values for which the interaction curves are created.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Overlaid Interactions( 1 );
Wait( 1 );
obj << Spanning Range( "Two Standard Deviations" );

```

### Surface Profiler

**Syntax:** obj << Surface Profiler( state=0|1 )

**Description:** Shows or hides the Surface Profiler.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Surface Profiler( 1 );

```

### Sync to Data Table Changes

**Syntax:** obj << Sync to Data Table Changes

**Description:** Sync with the exclude and data changes that have been made.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

### Term Value

**Syntax:** obj << Term Value( factor( current value, <Lock( 0|1 )>, <Min( number )>, <Max( number)> ) )

**Description:** Specifies settings for individual factors, including the current value, lock status, and range.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Desirability Functions( 1 );
Wait( 2 );
obj << Term Value( SILANE( 60, Lock( 1 ) ) );

```

### Title

**Syntax:** obj << Title( "new title" )

**Description:** Sets the title of the platform.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj << Top Report

**Description:** Returns a reference to the root node in the report.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Trips

**Syntax:** obj << Trips( number )

**Description:** Specifies the number of random starts in the optimization algorithm. Each trip restarts the algorithm at a different starting point.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Trips( 10 );
obj << Optimize;

```

### Unthreaded

**Syntax:** obj << Unthreaded( state=0|1 )

**Description:** Changes to an unthreaded analysis if multithreading does not work.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Desirability Functions( 1 );
obj << Unthreaded( 1 );
obj << Maximize Desirability;

```

### View Web XML

**Syntax:** obj << View Web XML

**Description:** Returns the XML code that is used to create the interactive HTML report.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Y

**Syntax:** obj = Profiler(...Y( column(s) )...)

**Description:** Specifies the response columns that contain formulas.

```js

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


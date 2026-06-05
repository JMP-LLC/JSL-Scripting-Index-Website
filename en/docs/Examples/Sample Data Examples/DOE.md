# DOE

## Example 1
> **Summary**: Use evaluate design on a 2x3x4 factorial design

<!-- Keywords: #DOE -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/2x3x4 Factorial.jmp");
// Evaluate Design
DOE(
	Evaluate Design,
	X( :X1, :X2, :X3 )
);
```

## Example 2
> **Summary**: Make a full factorial design with a continuous factor, a 3-level categorical factor and a 4 level categorical factor

<!-- Keywords: #DOE, #Response, #AddFactor, #AddResponse, #Factor -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/2x3x4 Factorial.jmp");
// DOE Dialog
DOE(
	Full Factorial Design,
	{
	Add Response(
		Maximize, "Y", ., ., .
	),
	Add Factor(
		Continuous,
		{-1, 1},
		"X1",
		0
	),
	Add Factor(
		Categorical,
		{"x", "y", "z"},
		"X2",
		0
	),
	Add Factor(
		Categorical,
		{"A", "B", "C", "D"},
		"X3",
		0
	), Set Random Seed( 151647685 ),
	Make Design, Simulate Responses( 0 ),
	Set Run Order( Sort Left to Right ),
	Make Table}
);
```

## Example 3
> **Summary**: Generate a 50 trial space filling design with 3 continuous factors and 2 categorical factors

<!-- Keywords: #DOE, #Response, #AddFactor, #AddResponse, #ChangeFactorSettings -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Algorithm Data.jmp");
// DOE Dialog
DOE(
	Space Filling Design,
	{
	Add Response(
		Maximize, "CPU Time", ., ., .
	),
	Change Factor Settings(
		1, -1, 1, "Alpha"
	),
	Change Factor Settings(
		2, -1, 1, "Beta"
	),
	Add Factor(
		Continuous, -1, 1, "Gamma", 0
	),
	Add Factor(
		Categorical,
		{"Dynamic", "Greedy", "Transform"
		},
		"Algorithm",
		0
	),
	Add Factor(
		Categorical,
		{"A", "B"},
		"Compiler",
		0
	), Set Random Seed( 12345 ),
	FFF Optimality Criterion( "MaxPro" ),
	Space Filling Design Type(
		Fast Flexible Filling, 50
	), Make Table}
);
```

## Example 4
> **Summary**: Generate a space filling design by loading factors from a table

<!-- Keywords: #DataTable, #DOE, #Factors, #LoadFactors -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Algorithm Factors.jmp");
// Load and Edit in Space Filling Design
DOE(
	Space Filling Design,
	Load Factors( Current Data Table() )
);
```

## Example 5
> **Summary**: Generate a custom design by loading factors from a table

<!-- Keywords: #DataTable, #DOE, #Factors, #LoadFactors -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Algorithm Factors.jmp");
// Load and Edit in Custom Design
DOE(
	Custom Design,
	Load Factors( Current Data Table() )
);
```

## Example 6
> **Summary**: Use evaluate design on a mixed model design

<!-- Keywords: #DOE -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Battery Data.jmp");
// Evaluate Design
DOE(
	Evaluate Design,
	X(
		:Whole Plots, :Subplots, :A1, :A2,
		:A3, :A4, :C1, :C2
	)
);
```

## Example 7
> **Summary**: Open and Load Battery Factors Data Table into Custom Design for DOE Analysis

<!-- Keywords: #DataTable, #DOE, #Factors, #LoadFactors -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Battery Factors.jmp");
// Load and Edit in Custom Design
DOE(
	Custom Design,
	Load Factors( Current Data Table() )
);
```

## Example 8
> **Summary**: Evaluate the Design of a Binomial Experiment Using the DOE Platform.

<!-- Keywords: #DOE -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Binomial Experiment.jmp");
// Evaluate Design
DOE(
	Evaluate Design,
	X( :X1, :X2, :X3, :X4, :X5, :X6 )
);
```

## Example 9
> **Summary**: Open and edit an existing data table in a space-filling design using the DOE function .

<!-- Keywords: #DataTable, #DOE, #Factors, #LoadFactors -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Borehole Factors.jmp");
// Load and Edit in Space Filling Design
DOE(
	Space Filling Design,
	Load Factors( Current Data Table() )
);
```

## Example 10
> **Summary**: Open and edit the current data table in the Custom Design platform.

<!-- Keywords: #DataTable, #DOE, #Factors, #LoadFactors -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Borehole Factors.jmp");
// Load and Edit in Custom Design
DOE(
	Custom Design,
	Load Factors( Current Data Table() )
);
```

## Example 11
> **Summary**: Evaluate the design using the DOE platform, focusing on the factors Silica, Sulfur, and Silane.

<!-- Keywords: #DOE -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Bounce Data.jmp");
// Evaluate Design
DOE(
	Evaluate Design,
	X( :Silica, :Sulfur, :Silane )
);
```

## Example 12
> **Summary**: Generate a response surface design with three response targets and four factors, including center points, in the DOE platform.

<!-- Keywords: #DOE, #Response, #AddFactor, #AddResponse, #CenterPoints -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Bounce Data.jmp");
// DOE Dialog
DOE(
	Response Surface Design,
	{
	Add Response(
		Match Target, "Stretch", 350, 550,
		1
	),
	Change Factor Settings(
		1, 0.7, 1.7, "Silica"
	),
	Change Factor Settings(
		2, 1.8, 2.8, "Sulfur"
	),
	Add Factor(
		Continuous, 40, 60, "Silane", 0
	), Set Random Seed( 12345 ),
	Make Design( 1 ), Center Points( 3 ),
	Make Table}
);
```

## Example 13
> **Summary**: Load existing data from a Response Surface Design experiment  and edit its factors.

<!-- Keywords: #DataTable, #DOE, #Factors, #LoadFactors -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Bounce Factors.jmp");
// Load and Edit in Response Surface Design
DOE(
	Response Surface Design,
	Load Factors( Current Data Table() )
);
```

## Example 14
> **Summary**: Load an existing data table and modify it in a custom design experiment.

<!-- Keywords: #DataTable, #DOE, #Factors, #LoadFactors -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Bounce Factors.jmp");
// Load and Edit in Custom Design
DOE(
	Custom Design,
	Load Factors( Current Data Table() )
);
```

## Example 15
> **Summary**: Load and Edit in Response Surface Design using DOE and Load Responses functions.

<!-- Keywords: #DataTable, #DOE, #LoadResponses, #Responses -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Bounce Response.jmp");
// Load and Edit in Response Surface Design
DOE(
	Response Surface Design,
	Load Responses(
		Current Data Table()
	)
);
```

## Example 16
> **Summary**: Open the Bounce Response data table and load it into the Custom Design platform for response editing.

<!-- Keywords: #DataTable, #DOE, #LoadResponses, #Responses -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Bounce Response.jmp");
// Load and Edit in Custom Design
DOE(
	Custom Design,
	Load Responses(
		Current Data Table()
	)
);
```

## Example 17
> **Summary**: Evaluate the design of a Box Corrosion Split-Plot experiment using the DOE platform, focusing on the factors: Whole Plots, Furnace Temp, and Coating.

<!-- Keywords: #DOE -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Box Corrosion Split-Plot.jmp");
// Evaluate Design
DOE(
	Evaluate Design,
	X(
		:Whole Plots, :Furnace Temp,
		:Coating
	)
);
```

## Example 18
> **Summary**: Generate a custom design experiment using the DOE platform with categorical factors for furnace temperature and coating, and maximize the response for corrosion resistance.

<!-- Keywords: #DOE, #Response, #AddFactor, #AddResponse, #AddTerm -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Box Corrosion Split-Plot.jmp");
// DOE Dialog
DOE(
	Custom Design,
	{
	Add Response(
		Maximize, "Corrosion Resistance",
		., ., .
	),
	Add Factor(
		Categorical,
		{"360", "370", "380"},
		"Furnace Temp",
		1
	),
	Add Factor(
		Categorical,
		{"C1", "C2", "C3", "C4"},
		"Coating",
		0
	), Set Random Seed( 15973514 ),
	Number of Starts( 3 ),
	Add Term( {1, 0} ),
	Add Term( {1, 1} ),
	Add Term( {2, 1} ),
	Add Term( {1, 1}, {2, 1} ),
	Set Sample Size( 24 ),
	Set N Whole Plots( 6 ), Make Design}
);
```

## Example 19
> **Summary**: Load a Taguchi experimental design from a sample data table and import it into a Taguchi Arrays analysis.

<!-- Keywords: #DataTable, #DOE, #Factors, #LoadFactors -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Byrne Taguchi Factors.jmp");
// Load and Edit in Taguchi Arrays
DOE(
	Taguchi Arrays,
	Load Factors( Current Data Table() )
);
```

## Example 20
> **Summary**: Evaluate the design of a cake experiment using the specified factors: Cocoa, Sugar, Flour, Butter, Milk, and Eggs.

<!-- Keywords: #DOE -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Cake Data.jmp");
// Evaluate Design
DOE(
	Evaluate Design,
	X(
		:Cocoa, :Sugar, :Flour, :Butter,
		:Milk, :Eggs
	)
);
```

## Example 21
> **Summary**: Load data from an experiment file and edit it using the Custom Design platform .

<!-- Keywords: #DataTable, #DOE, #Factors, #LoadFactors -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Cake Factors.jmp");
// Load and Edit in Custom Design
DOE(
	Custom Design,
	Load Factors( Current Data Table() )
);
```

## Example 22
> **Summary**: Generate a MaxDiff Design for a Candy Survey using the DOE Dialog function.

<!-- Keywords: #DOE, #Files, #Responses, #SetNumberofChoiceSets, #SetNumberofProfiles -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Candy Survey.jmp");
// DOE Dialog
DOE(
	MaxDiff Design,
	X( :Candy ),
	{Set Number of Profiles( 4 ),
	Set Number of Choice Sets( 7 ),
	Make Design, Simulate Responses( 0 )}
);
```

## Example 23
> **Summary**: Evaluate the design of an experiment involving temperature, time, and catalyst in a DOE platform using Whole Plots and Subplots.

<!-- Keywords: #DOE -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Catalyst Design.jmp");
// Evaluate Design
DOE(
	Evaluate Design,
	X(
		Whole Plots, Subplots,
		:Temperature, :Time, :Catalyst
	)
);
```

## Example 24
> **Summary**: Design a custom experimental design with response maximization and multiple continuous factors.

<!-- Keywords: #DOE, #Response, #AddFactor, #AddResponse, #AddTerm -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Catalyst Design.jmp");
// DOE Dialog
DOE(
	Custom Design,
	{
	Add Response(
		Maximize, "Y", ., ., .
	),
	Add Factor(
		Continuous, -1, 1, "Temperature",
		2
	),
	Add Factor(
		Continuous, -1, 1, "Time", 1
	),
	Add Factor(
		Continuous, -1, 1, "Catalyst", 0
	), Set Random Seed( 12345 ),
	Number of Starts( 1000 ),
	Add Term( {1, 0} ),
	Add Term( {1, 1} ),
	Add Term( {2, 1} ),
	Add Term( {3, 1} ),
	Add Term( {1, 1}, {2, 1} ),
	Add Term( {1, 1}, {3, 1} ),
	Add Term( {2, 1}, {3, 1} ),
	Set N Whole Plots( 4 ),
	Set N Subplots( 8 ),
	Set Sample Size( 24 ),
	Simulate Responses, Make Design}
);
```

## Example 25
> **Summary**: Perform data loading and editing operations within the Custom Design platform.

<!-- Keywords: #DataTable, #DOE, #Factors, #LoadFactors -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Cheese Factors.jmp");
// Load and Edit in Custom Design
DOE(
	Custom Design,
	Load Factors( Current Data Table() )
);
```

## Example 26
> **Summary**: Load and edit design factors in the Choice Design platform.

<!-- Keywords: #DataTable, #DOE, #Factors, #LoadFactors -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Coffee Choice Factors.jmp");
// Load and Edit in Choice Design
DOE(
	Choice Design,
	Load Factors( Current Data Table() )
);
```

## Example 27
> **Summary**: Load and edit an existing dataset in the Custom Design platform.

<!-- Keywords: #DataTable, #DOE, #Factors, #LoadFactors -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Coffee Choice Factors.jmp");
// Load and Edit in Custom Design
DOE(
	Custom Design,
	Load Factors( Current Data Table() )
);
```

## Example 28
> **Summary**: Analyze design experiment by evaluating factor effects for grind, temperature, time, charge, and station using the Evaluate Design function in the DOE platform.

<!-- Keywords: #DOE -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Coffee Data.jmp");
// Evaluate Design
DOE(
	Evaluate Design,
	X(
		:Grind, :Temperature, :Time,
		:Charge, :Station
	)
);
```

## Example 29
> **Summary**: Create a custom design of experiments dialog for optimizing coffee brewing conditions, including categorical and continuous factors, responses, and alias terms.

<!-- Keywords: #DOE, #Response, #AddAliasTerm, #AddFactor, #AddResponse -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Coffee Data.jmp");
// DOE Dialog
DOE(
	Custom Design,
	{
	Add Response(
		Match Target, "Strength", 1.2,
		1.4, .
	),
	Add Factor(
		Categorical,
		{"Coarse", "Medium"},
		"Grind",
		0
	),
	Add Factor(
		Continuous, 195, 205,
		"Temperature", 0
	),
	Add Factor(
		Continuous, 3, 4, "Time", 0
	),
	Add Factor(
		Continuous, 1.6, 2.4, "Charge", 0
	),
	Add Factor( Blocking, 4, "Station" ),
	Set Random Seed( 569534903 ),
	Number of Starts( 100 ),
	Add Term( {1, 0} ),
	Add Term( {1, 1} ),
	Add Term( {2, 1} ),
	Add Term( {3, 1} ),
	Add Term( {4, 1} ),
	Add Term( {5, 1} ),
	Add Alias Term( {1, 1}, {2, 1} ),
	Add Alias Term( {1, 1}, {3, 1} ),
	Add Alias Term( {1, 1}, {4, 1} ),
	Add Alias Term( {2, 1}, {3, 1} ),
	Add Alias Term( {2, 1}, {4, 1} ),
	Add Alias Term( {3, 1}, {4, 1} ),
	Set Sample Size( 12 ), Make Design}
);
```

## Example 30
> **Summary**: Load data table Coffee Factors and open Custom Design window pre-populated with factors from the current data table.

<!-- Keywords: #DataTable, #DOE, #Factors, #LoadFactors -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Coffee Factors.jmp");
// Load and Edit in Custom Design
DOE(
	Custom Design,
	Load Factors( Current Data Table() )
);
```

## Example 31
> **Summary**: Evaluate the design of an experiment using the specified factors in DOE platform.

<!-- Keywords: #DOE -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Custom RSM.jmp");
// Evaluate Design
DOE(
	Evaluate Design,
	X( :X1, :X2, :X3 )
);
```

## Example 32
> **Summary**: Generate a custom response surface method (RSM) design using the DOE platform with specified factors, responses, and optimality criteria. The code opens a sample data table, configures the DOE dialog to include three continuous factors, sets the random seed and number of starts for optimization, specifies the model terms, and finalizes the design with a specified sample size and optimality criterion.

<!-- Keywords: #DOE, #Response, #AddFactor, #AddResponse, #AddTerm -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Custom RSM.jmp");
// DOE Dialog
DOE(
	Custom Design,
	{
	Add Response(
		Match Target, "Y", 54, 56, .
	),
	Add Factor(
		Continuous, -1, 1, "X1", 0
	),
	Add Factor(
		Continuous, -1, 1, "X2", 0
	),
	Add Factor(
		Continuous, -1, 1, "X3", 0
	), Set Random Seed( 929281409 ),
	Number of Starts( 40 ),
	Add Term( {1, 0} ),
	Add Term( {1, 1} ),
	Add Term( {2, 1} ),
	Add Term( {3, 1} ),
	Add Term( {1, 2} ),
	Add Term( {1, 1}, {2, 1} ),
	Add Term( {2, 2} ),
	Add Term( {1, 1}, {3, 1} ),
	Add Term( {2, 1}, {3, 1} ),
	Add Term( {3, 2} ),
	Set Sample Size( 16 ),
	Optimality Criterion( 2 ),
	Make Design}
);
```

## Example 33
> **Summary**: Evaluate the design of an experiment using the DOE platform with the specified factors.

<!-- Keywords: #DOE -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/DOE Example 1.jmp");
// Evaluate Design
DOE(
	Evaluate Design,
	X( :Operator, :Speed, :Current )
);
```

## Example 34
> **Summary**: Construct a full factorial design with categorical and continuous factors using the DOE platform

<!-- Keywords: #DOE, #Response, #AddFactor, #AddResponse, #Factor -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/DOE Example 1.jmp");
// DOE Dialog
DOE(
	Full Factorial Design,
	{
	Add Response(
		Match Target, "Depth", 0.12, 0.22,
		.
	),
	Add Factor(
		Categorical,
		{"John", "Mary"},
		"Operator",
		0
	),
	Add Factor(
		Continuous,
		{3, 5},
		"Speed",
		0
	),
	Add Factor(
		Continuous,
		{150, 165},
		"Current",
		0
	), Set Random Seed( 1344277810 ),
	Make Design}
);
```

## Example 35
> **Summary**: Load data from the specified file and edit it using the Custom Design platform .

<!-- Keywords: #DataTable, #DOE, #Factors, #LoadFactors -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Donev Mixture Factors.jmp");
// Load and Edit in Custom Design
DOE(
	Custom Design,
	Load Factors( Current Data Table() )
);
```

## Example 36
> **Summary**: Evaluate the design of an experiment focusing on the response variables associated with Methanol, Ethanol, Propanol, Butanol, pH, and Time.

<!-- Keywords: #DOE -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Extraction Data.jmp");
// Evaluate Design
DOE(
	Evaluate Design,
	X(
		:Methanol, :Ethanol, :Propanol,
		:Butanol, :pH, :Time
	)
);
```

## Example 37
> **Summary**: Generate a Definitive Screening Design for optimizing yield based on continuous factors.

<!-- Keywords: #DOE, #Response, #AddFactor, #AddResponse, #Factor -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Extraction Data.jmp");
// DOE Dialog
DOE(
	Definitive Screening Design,
	{
	Add Response(
		Maximize, "Yield", ., ., .
	),
	Add Factor(
		Continuous, 0, 10, "Methanol", 0
	),
	Add Factor(
		Continuous, 0, 10, "Ethanol", 0
	),
	Add Factor(
		Continuous, 0, 10, "Propanol", 0
	),
	Add Factor(
		Continuous, 0, 10, "Butanol", 0
	),
	Add Factor(
		Continuous, 6, 9, "pH", 0
	),
	Add Factor(
		Continuous, 1, 2, "Time", 0
	), Number of Extra Runs( 0 ),
	Set Random Seed( 123 ), Make Design}
);
```

## Example 38
> **Summary**: Load and edit data in the Definitive Screening Design platform using the current data table.

<!-- Keywords: #DataTable, #DOE, #Factors, #LoadFactors -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Extraction Factors.jmp");
// Load and Edit in Definitive Screening Design
DOE(
	Definitive Screening Design,
	Load Factors( Current Data Table() )
);
```

## Example 39
> **Summary**: Load an existing data table from the sample data folder into the Custom Design platform for further experimentation and analysis using DOE and Load Factors functions.

<!-- Keywords: #DataTable, #DOE, #Factors, #LoadFactors -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Extraction Factors.jmp");
// Load and Edit in Custom Design
DOE(
	Custom Design,
	Load Factors( Current Data Table() )
);
```

## Example 40
> **Summary**: Evaluate the experimental design by assessing the selected factors for optimization.

<!-- Keywords: #DOE -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Extraction2 Data.jmp");
// Evaluate Design
DOE(
	Evaluate Design,
	X(
		:Lot, :Methanol, :Ethanol,
		:Propanol, :Butanol, :pH, :Time
	)
);
```

## Example 41
> **Summary**: Create a definitive screening design with multiple continuous factors and response optimization using the DOE (Design of Experiments) platform.

<!-- Keywords: #DOE, #Response, #AddFactor, #AddResponse, #Factor -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Extraction2 Data.jmp");
// DOE Dialog
DOE(
	Definitive Screening Design,
	{
	Add Response(
		Maximize, "Y", ., ., .
	),
	Add Factor(
		Continuous, 0, 10, "Methanol", 0
	),
	Add Factor(
		Continuous, 0, 10, "Ethanol", 0
	),
	Add Factor(
		Continuous, 0, 10, "Propanol", 0
	),
	Add Factor(
		Continuous, 0, 10, "Butanol", 0
	),
	Add Factor(
		Continuous, 6, 9, "pH", 0
	),
	Add Factor(
		Continuous, 1, 2, "Time", 0
	), Number of Extra Runs( 0 ),
	Show Blocking Options( 1, 2 ),
	Make Design}
);
```

## Example 42
> **Summary**: Evaluate the experimental design for the Extraction3 Data using the Design of Experiments (DOE) platform with the specified factors.

<!-- Keywords: #DOE -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Extraction3 Data.jmp");
// Evaluate Design
DOE(
	Evaluate Design,
	X(
		:Lot, :Methanol, :Ethanol,
		:Propanol, :Butanol, :pH, :Time
	)
);
```

## Example 43
> **Summary**: Create a definitive screening design with multiple continuous factors and an extra set of runs for the DOE platform.

<!-- Keywords: #DOE, #Response, #AddFactor, #AddResponse, #Factor -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Extraction3 Data.jmp");
// DOE Dialog
DOE(
	Definitive Screening Design,
	{
	Add Response(
		Maximize, "Yield", ., ., .
	),
	Add Factor(
		Continuous, 0, 10, "Methanol", 0
	),
	Add Factor(
		Continuous, 0, 10, "Ethanol", 0
	),
	Add Factor(
		Continuous, 0, 10, "Propanol", 0
	),
	Add Factor(
		Continuous, 0, 10, "Butanol", 0
	),
	Add Factor(
		Continuous, 6, 9, "pH", 0
	),
	Add Factor(
		Continuous, 1, 2, "Time", 0
	), Show Blocking Options( 1, 2 ),
	Number of Extra Runs( 4 ),
	Set Random Seed( 123 ), Make Design}
);
```

## Example 44
> **Summary**: Load data from a specified file and open it in the Choice Design platform.

<!-- Keywords: #DataTable, #DOE, #Factors, #LoadFactors -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Laptop Factors.jmp");
// Load and Edit in Choice Design
DOE(
	Choice Design,
	Load Factors( Current Data Table() )
);
```

## Example 45
> **Summary**: Load data from the specified path and open Custom Design editor with the loaded factors from the current data table.

<!-- Keywords: #DataTable, #DOE, #Factors, #LoadFactors -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Laptop Factors.jmp");
// Load and Edit in Custom Design
DOE(
	Custom Design,
	Load Factors( Current Data Table() )
);
```

## Example 46
> **Summary**: Evaluate the design of the experiment using the Dichloromethane, Methanol, and Sample Volume factors in the DOE platform.

<!-- Keywords: #DOE -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Metacrate Limit Of Detection DOE.jmp");
// Evaluate Design
DOE(
	Evaluate Design,
	X(
		:Dichloromethane, :Methanol,
		:Sample Volume
	)
);
```

## Example 47
> **Summary**: Create a custom design of experiments (DOE) with a generalized linear model response function.

<!-- Keywords: #DOE, #Response, #AddFactor, #AddResponse, #AddTerm -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Metacrate Limit Of Detection DOE.jmp");
// DOE Dialog
DOE(
	Custom Design,
	{
	Add Response(
		Maximize, "Metacrate", ., ., ., 1,
		99
	),
	Add Factor(
		Continuous, 110, 150,
		"Dichloromethane", 0
	),
	Add Factor(
		Continuous, 400, 600, "Methanol",
		0
	),
	Add Factor(
		Continuous, 3, 7, "Sample Volume",
		0
	), Set Random Seed( 981216 ),
	Number of Starts( 6776 ),
	Add Term( {1, 0} ),
	Add Term( {1, 1} ),
	Add Term( {2, 1} ),
	Add Term( {3, 1} ),
	Add Term( {1, 2} ),
	Add Term( {1, 1}, {2, 1} ),
	Add Term( {2, 2} ),
	Add Term( {1, 1}, {3, 1} ),
	Add Term( {2, 1}, {3, 1} ),
	Add Term( {3, 2} ),
	Set Sample Size( 32 ),
	Optimality Criterion(
		"Make I-Optimal Design"
	), Simulate Responses( 0 ),
	Save X Matrix( 0 ), Make Design}
);
```

## Example 48
> **Summary**: Evaluate the design using the variables pH, Water Temp, Extraction Time, Ratio, Agitation Speed, Hydrolyze, and Pre-Soak.

<!-- Keywords: #DOE -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Peanut Data.jmp");
// Evaluate Design
DOE(
	Evaluate Design,
	X(
		:pH, :Water Temp,
		:Extraction TIme, :Ratio,
		:Agitation Speed, :Hydrolyze,
		:"Pre-Soak"n
	)
);
```

## Example 49
> **Summary**: Generate a Definitive Screening Design for optimizing the Solids response in a peanut processing experiment using continuous and categorical factors.

<!-- Keywords: #DOE, #Response, #AddFactor, #AddResponse, #Factor -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Peanut Data.jmp");
// DOE Dialog
DOE(
	Definitive Screening Design,
	{
	Add Response(
		Maximize, "Solids", ., ., .
	),
	Add Factor(
		Continuous, -1, 1, "pH", 0
	),
	Add Factor(
		Continuous, -1, 1, "Water Temp",
		0
	),
	Add Factor(
		Continuous, -1, 1,
		"Extraction TIme", 0
	),
	Add Factor(
		Continuous, -1, 1, "Ratio", 0
	),
	Add Factor(
		Continuous, -1, 1,
		"Agitation Speed", 0
	),
	Add Factor(
		Categorical,
		{"L1", "L2"},
		"Hydrolyze",
		0
	),
	Add Factor(
		Categorical,
		{"L1", "L2"},
		"Pre-Soak",
		0
	), Show Blocking Options( 0, 0 ),
	Number of Extra Runs( 4 ),
	Set Random Seed( 12345 ), Make Design,
	Simulate Responses( 0 ),
	Save X Matrix( 0 )}
);
```

## Example 50
> **Summary**: Load and edit a Definitive Screening Design from an existing data table.

<!-- Keywords: #DataTable, #DOE, #Factors, #LoadFactors -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Peanut Factors.jmp");
// Load and Edit in Definitive Screening Design
DOE(
	Definitive Screening Design,
	Load Factors( Current Data Table() )
);
```

## Example 51
> **Summary**: Load a data table and edit it using the Custom Design platform .

<!-- Keywords: #DataTable, #DOE, #Factors, #LoadFactors -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Peanut Factors.jmp");
// Load and Edit in Custom Design
DOE(
	Custom Design,
	Load Factors( Current Data Table() )
);
```

## Example 52
> **Summary**: Construct a covering array using the DOE platform with specified categorical factors and constraints.

<!-- Keywords: #DOE, #AddFactor, #Combinations, #DisallowedCombinations, #Factor -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Phone Data.jmp");
// DOE Dialog
DOE(
	Covering Array,
	{
	Add Factor(
		Categorical,
		{"USA", "UK", "Canada", "France",
		"Mexico"},
		"Market",
		0
	),
	Add Factor(
		Categorical,
		{"ISDN", "Bus", "Coin", "Res"},
		"Near Phone",
		0
	),
	Add Factor(
		Categorical,
		{"A", "B"},
		"Near Interface",
		0
	),
	Add Factor(
		Categorical,
		{"ISDN", "Bus", "Coin", "Res"},
		"Far Phone",
		0
	),
	Add Factor(
		Categorical,
		{"A", "B"},
		"Far Interface",
		0
	), Set Strength( 2 ),
	Disallowed Combinations(
		Near Phone == "ISDN" &
		Near Interface == "A" | Far Phone
		 == "ISDN" & Far Interface == "A"
		 | Near Phone == "Bus" &
		Near Interface == "B" |
		Near Phone == "Res" &
		Near Interface == "B"
	), Set Random Seed( 632 )}
);
```

## Example 53
> **Summary**: Load and edit experimental factors in a Covering Array design.

<!-- Keywords: #DataTable, #DOE, #Factors, #LoadFactors -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Phone Factors.jmp");
// Load and Edit in Covering Array
DOE(
	Covering Array,
	Load Factors( Current Data Table() )
);
```

## Example 54
> **Summary**: Load a factor experiment data table and edit it in the Custom Design platform.

<!-- Keywords: #DataTable, #DOE, #Factors, #LoadFactors -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Phone Factors.jmp");
// Load and Edit in Custom Design
DOE(
	Custom Design,
	Load Factors( Current Data Table() )
);
```

## Example 55
> **Summary**: Generate a Mixture Design using the DOE Dialog with specified constraints and settings.

<!-- Keywords: #DOE, #Response, #AddConstraint, #AddResponse, #ChangeFactorSettings -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Piepel.jmp");
// DOE Dialog
DOE(
	Mixture Design,
	{
	Add Response(
		Maximize, "Y", ., ., .
	),
	Change Factor Settings(
		1, 0.1, 0.5, "X1"
	),
	Change Factor Settings(
		2, 0.1, 0.7, "X2"
	),
	Change Factor Settings(
		3, 0, 0.7, "X3"
	), Set Random Seed( 205900700 ),
	Add Constraint(
		[-85 -90 -100 -90,
		85 90 100 95,
		-0.7 0 -1 -0.4]
	),
	Mixture Design Type(
		Extreme Vertices, 2
	)}
);
```

## Example 56
> **Summary**: Evaluate Design: Assess experimental factors in a Plackett-Burman design using the DOE platform.

<!-- Keywords: #DOE -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Plackett-Burman.jmp");
// Evaluate Design
DOE(
	Evaluate Design,
	X(
		:Feed Rate, :Catalyst, :Stir Rate,
		:Temperature, :Concentration
	)
);
```

## Example 57
> **Summary**: Perform custom design of experiments with categorical and continuous factors, and add various terms and constraints to optimize the response Number Popped.

<!-- Keywords: #DOE, #Response, #AddConstraint, #AddFactor, #AddResponse -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Popcorn DOE Results.jmp");
// DOE Dialog
DOE(
	Custom Design,
	{
	Add Response(
		"Maximize", "Number Popped", ., .,
		.
	),
	Add Response(
		"None", "Total Kernals", ., ., .
	),
	Add Factor(
		Categorical,
		{"Top Secret", "Wilbur"},
		"Brand",
		0
	),
	Add Factor(
		Continuous, 3, 5, "Time", 0
	),
	Add Factor(
		Continuous, 5, 10, "Power", 0
	), Set Random Seed( 151747005 ),
	Number of Starts( 40 ),
	Add Term( {1, 0} ),
	Add Term( {1, 1} ),
	Add Term( {2, 1} ),
	Add Term( {3, 1} ),
	Add Term( {1, 1}, {2, 1} ),
	Add Term( {1, 1}, {3, 1} ),
	Add Term( {2, 1}, {3, 1} ),
	Add Term( {2, 2} ),
	Add Term( {3, 2} ),
	Set Sample Size( 16 ),
	Add Constraint( [1 1 13, -1 -1 -10] ),
	Make Design}
);
```

## Example 58
> **Summary**: Create a screening design with Plackett-Burman DOE platform and incorporate multiple continuous factors and response settings.

<!-- Keywords: #DOE, #Response, #AddFactor, #AddResponse, #Factor -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Plackett-Burman.jmp");
// DOE Dialog
DOE(
	Screening Design,
	{
	Add Response(
		Maximize, "Percent Reacted", 90,
		100, 1
	),
	Add Factor(
		Continuous, 10, 15, "Feed Rate",
		0
	),
	Add Factor(
		Continuous, 1, 2, "Catalyst", 0
	),
	Add Factor(
		Continuous, 100, 120, "Stir Rate",
		0
	),
	Add Factor(
		Continuous, 140, 180,
		"Temperature", 0
	),
	Add Factor(
		Continuous, 3, 6, "Concentration",
		0
	), Set Random Seed( 34567 ),
	Make Design( 3 )}
);
```

## Example 59
> **Summary**: Load sample data from the Plastifactors dataset and apply the mixture design to the current data table using the DOE platform.

<!-- Keywords: #DataTable, #DOE, #Factors, #LoadFactors -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Plastifactors.jmp");
// Load and Edit in Mixture Design
DOE(
	Mixture Design,
	Load Factors( Current Data Table() )
);
```

## Example 60
> **Summary**: Load an existing data table and edit it within the Custom Design platform .

<!-- Keywords: #DataTable, #DOE, #Factors, #LoadFactors -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Plastifactors.jmp");
// Load and Edit in Custom Design
DOE(
	Custom Design,
	Load Factors( Current Data Table() )
);
```

## Example 61
> **Summary**: Create a custom design experiment using the DOE platform with multiple continuous factors and optimization of a response variable.

<!-- Keywords: #DOE, #Response, #AddFactor, #AddResponse, #AddTerm -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Reactor 20 Custom.jmp");
// DOE Dialog
DOE(
	Custom Design,
	{
	Add Response(
		Maximize, "Percent Reacted", 90,
		99, 1
	),
	Add Factor(
		Continuous, 10, 15, "Feed Rate",
		0
	),
	Add Factor(
		Continuous, 1, 2, "Catalyst", 0
	),
	Add Factor(
		Continuous, 100, 120, "Stir Rate",
		0
	),
	Add Factor(
		Continuous, 140, 180,
		"Temperature", 0
	),
	Add Factor(
		Continuous, 3, 6, "Concentration",
		0
	), Set Random Seed( 2024677686 ),
	Number of Starts( 200 ),
	Add Term( {1, 0} ),
	Add Term( {1, 1} ),
	Add Term( {2, 1} ),
	Add Term( {3, 1} ),
	Add Term( {4, 1} ),
	Add Term( {5, 1} ),
	Add Term( {1, 1}, {2, 1} ),
	Add Term( {1, 1}, {3, 1} ),
	Add Term( {1, 1}, {4, 1} ),
	Add Term( {1, 1}, {5, 1} ),
	Add Term( {2, 1}, {3, 1} ),
	Add Term( {2, 1}, {4, 1} ),
	Add Term( {2, 1}, {5, 1} ),
	Add Term( {3, 1}, {4, 1} ),
	Add Term( {3, 1}, {5, 1} ),
	Add Term( {4, 1}, {5, 1} ),
	Set Sample Size( 20 ), Make Design}
);
```

## Example 62
> **Summary**: Evaluate the Design of a Reactor Experiment Using DOE Function

<!-- Keywords: #DOE -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Reactor 32 Runs.jmp");
// Evaluate Design
DOE(
	Evaluate Design,
	X(
		:Feed Rate, :Catalyst, :Stir Rate,
		:Temperature, :Concentration
	)
);
```

## Example 63
> **Summary**: Create a full factorial design of experiments for optimizing reactor conditions.

<!-- Keywords: #DOE, #Response, #AddFactor, #AddResponse, #Factor -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Reactor 32 Runs.jmp");
// DOE Dialog
DOE(
	Full Factorial Design,
	{
	Add Response(
		Maximize, "Percent Reacted", 90,
		100, 1
	),
	Add Factor(
		Continuous,
		{10, 15},
		"Feed Rate",
		0
	),
	Add Factor(
		Continuous,
		{1, 2},
		"Catalyst",
		0
	),
	Add Factor(
		Continuous,
		{100, 120},
		"Stir Rate",
		0
	),
	Add Factor(
		Continuous,
		{140, 180},
		"Temperature",
		0
	),
	Add Factor(
		Continuous,
		{3, 6},
		"Concentration",
		0
	), Set Random Seed( 12345 ),
	Make Design, Make Table}
);
```

## Example 64
> **Summary**: Evaluate the statistical properties of a designed experiment using the Evaluate Design function in the DOE platform.

<!-- Keywords: #DOE -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Reactor 8 Runs.jmp");
// Evaluate Design
DOE(
	Evaluate Design,
	X(
		:Feed Rate, :Catalyst, :Stir Rate,
		:Temperature, :Concentration
	)
);
```

## Example 65
> **Summary**: Create a screening design of experiment using the DOE platform to optimize the reactor process with specific factor ranges and response constraints.

<!-- Keywords: #DOE, #Response, #AddFactor, #AddResponse, #Factor -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Reactor 8 Runs.jmp");
// DOE Dialog
DOE(
	Screening Design,
	{
	Add Response(
		Maximize, "Percent Reacted", 90,
		100, 1
	),
	Add Factor(
		Continuous, 10, 15, "Feed Rate",
		0
	),
	Add Factor(
		Continuous, 1, 2, "Catalyst", 0
	),
	Add Factor(
		Continuous, 100, 120, "Stir Rate",
		0
	),
	Add Factor(
		Continuous, 140, 180,
		"Temperature", 0
	),
	Add Factor(
		Continuous, 3, 6, "Concentration",
		0
	), Set Random Seed( 23456 ),
	Make Design( 1 ),
	Simulate Responses( 0 ),
	Save X Matrix( 0 )}
);
```

## Example 66
> **Summary**: Evaluate the design of an experiment with multiple factors in DOE (Design of Experiments) platform.

<!-- Keywords: #DOE -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Reactor Augment Data.jmp");
// Evaluate Design
DOE(
	Evaluate Design,
	X(
		:Feed Rate, :Catalyst, :Stir Rate,
		:Temperature, :Concentration
	)
);
```

## Example 67
> **Summary**: Generate an augmented design using the DOE platform with specified factors and response variable.

<!-- Keywords: #DataTable, #DOE, #AddTerm, #AugmentMethod, #Criterion -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Reactor Augment Data.jmp");
// DOE Dialog
dt = Current Data Table();
dt2 = dt <<
run script( "Original Data Table" );
Current Data Table( dt2 );
DOE(
	Augment Design,
	X(
		:Feed Rate, :Catalyst, :Stir Rate,
		:Temperature, :Concentration
	),
	Y( :Percent Reacted ),
	{Augment Method( Augment ),
	Set Random Seed( 456 ),
	Number of Starts( 10 ),
	Add Term( {1, 0} ),
	Add Term( {1, 1} ),
	Add Term( {2, 1} ),
	Add Term( {3, 1} ),
	Add Term( {4, 1} ),
	Add Term( {5, 1} ),
	Add Term( {1, 1}, {2, 1} ),
	Add Term( {1, 1}, {3, 1} ),
	Add Term( {1, 1}, {4, 1} ),
	Add Term( {1, 1}, {5, 1} ),
	Add Term( {2, 1}, {3, 1} ),
	Add Term( {2, 1}, {4, 1} ),
	Add Term( {2, 1}, {5, 1} ),
	Add Term( {3, 1}, {4, 1} ),
	Add Term( {3, 1}, {5, 1} ),
	Add Term( {4, 1}, {5, 1} ),
	Set Sample Size( 16 ),
	Optimality Criterion( 1 ),
	Make Design, Save X Matrix( 0 ),
	Simulate Responses( 0 ), Make Table}
);
```

## Example 68
> **Summary**: Load and Edit a Screening Design using current data table.

<!-- Keywords: #DataTable, #DOE, #Factors, #LoadFactors -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Reactor Factors.jmp");
// Load and Edit in Screening Design
DOE(
	Screening Design,
	Load Factors( Current Data Table() )
);
```

## Example 69
> **Summary**: Open and edit the existing factors in a custom design from the specified data table.

<!-- Keywords: #DataTable, #DOE, #Factors, #LoadFactors -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Reactor Factors.jmp");
// Load and Edit in Custom Design
DOE(
	Custom Design,
	Load Factors( Current Data Table() )
);
```

## Example 70
> **Summary**: Load and edit data in a screening design using DOE and Load Responses functions.

<!-- Keywords: #DataTable, #DOE, #LoadResponses, #Responses -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Reactor Response.jmp");
// Load and Edit in Screening Design
DOE(
	Screening Design,
	Load Responses(
		Current Data Table()
	)
);
```

## Example 71
> **Summary**: Load and Edit Responses in a Custom Design Experiment

<!-- Keywords: #DataTable, #DOE, #LoadResponses, #Responses -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Reactor Response.jmp");
// Load and Edit in Custom Design
DOE(
	Custom Design,
	Load Responses(
		Current Data Table()
	)
);
```

## Example 72
> **Summary**: Load data table and modify factors in Custom Design.

<!-- Keywords: #DataTable, #DOE, #Factors, #LoadFactors -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Runners Factors.jmp");
// Load and Edit in Custom Design
DOE(
	Custom Design,
	Load Factors( Current Data Table() )
);
```

## Example 73
> **Summary**: Title: Create a Covering Array Design of Experiments (DOE) with Four Categorical Factors: Web Browser, Operating System, RAM, and Connection Speed.

<!-- Keywords: #DOE, #AddFactor, #Factor, #SetStrength -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Software Data.jmp");
// DOE Dialog
DOE(
	Covering Array,
	{
	Add Factor(
		Categorical,
		{"Safari", "IE", "Firefox",
		"Chrome", "Other"},
		"Web Browser",
		0
	),
	Add Factor(
		Categorical,
		{"Macintosh", "Windows"},
		"Operating System",
		0
	),
	Add Factor(
		Categorical,
		{"16 MB", "4 MB", "8 MB"},
		"RAM",
		0
	),
	Add Factor(
		Categorical,
		{"0-1 Mbps", "1-5 Mbps",
		">5 Mbps"},
		"Connection Speed",
		0
	), Set Strength( 3 )}
);
```

## Example 74
> **Summary**: Load factors from an existing data table and edit them in the Covering Array platform.

<!-- Keywords: #DataTable, #DOE, #Factors, #LoadFactors -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Software Factors.jmp");
// Load and Edit in Covering Array
DOE(
	Covering Array,
	Load Factors( Current Data Table() )
);
```

## Example 75
> **Summary**: Load an existing data table and open it in the Custom Design platform for editing.

<!-- Keywords: #DataTable, #DOE, #Factors, #LoadFactors -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Software Factors.jmp");
// Load and Edit in Custom Design
DOE(
	Custom Design,
	Load Factors( Current Data Table() )
);
```

## Example 76
> **Summary**: Load data from the Vinyl Factors file and edit it in the Custom Design platform.

<!-- Keywords: #DataTable, #DOE, #Factors, #LoadFactors -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Vinyl Factors.jmp");
// Load and Edit in Custom Design
DOE(
	Custom Design,
	Load Factors( Current Data Table() )
);
```

## Example 77
> **Summary**: Load and edit an existing response data table in the Custom Design platform.

<!-- Keywords: #DataTable, #DOE, #LoadResponses, #Responses -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Vinyl Responses.jmp");
// Load and Edit in Custom Design
DOE(
	Custom Design,
	Load Responses(
		Current Data Table()
	)
);
```

## Example 78
> **Summary**:  Load data table and Edit in Screening Design using Load Factors function.

<!-- Keywords: #DataTable, #DOE, #Factors, #LoadFactors -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Weld Factors.jmp");
// Load and Edit in Screening Design
DOE(
	Screening Design,
	Load Factors( Current Data Table() )
);
```

## Example 79
> **Summary**: Load data from the Weld Factors sample dataset and edit the design experiment using the Custom Design platform.

<!-- Keywords: #DataTable, #DOE, #Factors, #LoadFactors -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Weld Factors.jmp");
// Load and Edit in Custom Design
DOE(
	Custom Design,
	Load Factors( Current Data Table() )
);
```

## Example 80
> **Summary**: Evaluate design by analyzing factors such as Rater, Variety, Field, De-Stem, Yeast, Temperature, Press, Barrel Age, Barrel Seasoning, and Filtering in the SEM platform.

<!-- Keywords: #DOE -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Wine Data.jmp");
// Evaluate Design
DOE(
	Evaluate Design,
	X(
		:Rater, :Variety, :Field,
		:"De-Stem"n, :Yeast, :Temperature,
		:Press, :Barrel Age,
		:Barrel Seasoning, :Filtering
	)
);
```

## Example 81
> **Summary**: Load factors from a specified data table and edit them in the Custom Design platform.

<!-- Keywords: #DataTable, #DOE, #Factors, #LoadFactors -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Wine Factors.jmp");
// Load and Edit in Custom Design
DOE(
	Custom Design,
	Load Factors( Current Data Table() )
);
```

## Example 82
> **Summary**: Evaluate the experimental design with the variables Solvent, Active, and Water.

<!-- Keywords: #DOE -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Functional Data/Formulation For Homogeneity DOE.jmp");
// Evaluate Design
DOE(
	Evaluate Design,
	X( :Solvent, :Active, :Water )
);
```

## Example 83
> **Summary**: Create a custom experimental design using the MIDI DOE platform, including mixture components and specified constraints.

<!-- Keywords: #DOE, #Response, #AddConstraint, #AddFactor, #AddResponse -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Functional Data/Formulation For Homogeneity DOE.jmp");
// DOE Dialog
DOE(
	Custom Design,
	{
	Add Response(
		Maximize, "Y", ., ., .
	),
	Add Factor(
		Mixture, 0.26, 0.8, "Solvent", 0
	),
	Add Factor(
		Mixture, 0.18, 0.4, "Active", 0
	),
	Add Factor(
		Mixture, 0.02, 0.56, "Water", 0
	), Set Random Seed( 625641159 ),
	Number of Starts( 6371 ),
	Add Constraint(
		[-1 1.4 0 0, 0 0.1 -1 0]
	), Add Term( {1, 1} ),
	Add Term( {2, 1} ),
	Add Term( {3, 1} ),
	Add Term( {1, 1}, {2, 1} ),
	Add Term( {1, 1}, {3, 1} ),
	Add Term( {2, 1}, {3, 1} ),
	Add Term( {1, 1}, {2, 1}, {3, 1} ),
	Add Term( {1, 1}, {2, 1} ),
	Add Term( {1, 1}, {3, 1} ),
	Add Term( {2, 1}, {3, 1} ),
	Set Sample Size( 16 ),
	Simulate Responses( 0 ),
	Save X Matrix( 0 ), Make Design}
);
```

## Example 84
> **Summary**: Evaluates the design of an experiment using the variables %Beads, %Strength, Flow(g/min), and T(ºC) employing the DOE platform .

<!-- Keywords: #DOE -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Functional Data/Mill DOE.jmp");
// Evaluate Design
DOE(
	Evaluate Design,
	X(
		:"%Beads"n, :"%Strength"n,
		:"Flow(g/min)"n, :"T(ºC)"n
	)
);
```

## Example 85
> **Summary**: Evaluate the design of a study using the DOE platform with variables X1, X2, and X3.

<!-- Keywords: #DOE -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Functional Data/Simple Linear Functional Data.jmp");
// Evaluate Design
DOE(
	Evaluate Design,
	X( :X1, :X2, :X3 )
);
```

## Example 86
> **Summary**: Create a custom experimental design using the DOE platform with a specified set of factors and terms to maximize the response variable Y.

<!-- Keywords: #DOE, #Response, #AddFactor, #AddResponse, #AddTerm -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Functional Data/Simple Linear Functional Data.jmp");
// DOE Dialog
DOE(
	Custom Design,
	{
	Add Response(
		Maximize, "Y", ., ., .
	),
	Add Factor(
		Continuous, -1, 1, "X1", 0
	),
	Add Factor(
		Continuous, -1, 1, "X2", 0
	),
	Add Factor(
		Continuous, -1, 1, "X3", 0
	), Set Random Seed( 78379455 ),
	Number of Starts( 1 ),
	Add Term( {1, 0} ),
	Add Term( {1, 1} ),
	Add Term( {2, 1} ),
	Add Term( {3, 1} ),
	Add Term( {1, 1}, {2, 1} ),
	Add Term( {1, 1}, {3, 1} ),
	Add Term( {2, 1}, {3, 1} ),
	Set Sample Size( 24 ),
	Simulate Responses( 0 ),
	Save X Matrix( 0 ), Make Design}
);
```

## Example 87
> **Summary**: Generate a custom DOE using the Custom Design function to minimize the Odor response with continuous factors temp, gl ratio, and ht, and include specific polynomial terms and interaction terms.

<!-- Keywords: #DOE, #Response, #AddFactor, #AddResponse, #AddTerm -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Odor JSS.jmp");
// DOE Dialog
DOE(
	Custom Design,
	{
	Add Response(
		Minimize, "Odor", ., ., .
	),
	Add Factor(
		Continuous, -1, 1, "temp", 0
	),
	Add Factor(
		Continuous, -1, 1, "gl ratio", 0
	),
	Add Factor(
		Continuous, -1, 1, "ht", 0
	), Set Random Seed( 904322795 ),
	Number of Starts( 21 ),
	Add Term( {1, 0} ),
	Add Term( {1, 1} ),
	Add Term( {2, 1} ),
	Add Term( {3, 1} ),
	Add Term( {1, 2} ),
	Add Term( {1, 1}, {2, 1} ),
	Add Term( {2, 2} ),
	Add Term( {1, 1}, {3, 1} ),
	Add Term( {2, 1}, {3, 1} ),
	Add Term( {3, 2} ),
	Set Sample Size( 16 ),
	Optimality Criterion( 2 ),
	Make Design, Make Table}
);
```

## Example 88
> **Summary**: Construct a custom experimental design using the DOE platform with specified factors, responses, and aliasing terms.

<!-- Keywords: #DOE, #Response, #AddAliasTerm, #AddFactor, #AddResponse -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Potato Chip Combined.jmp");
// Basis for Design
DOE(
	Custom Design,
	{
	Add Response(
		Maximize, "Y", ., ., .
	),
	Add Factor(
		Continuous, -1, 1, "X1", 2
	),
	Add Factor(
		Continuous, -1, 1, "X2", 1
	),
	Add Factor(
		Categorical,
		{"L1", "L2", "L3", "L4", "L5",
		"L6", "L7", "L8", "L9", "L10"},
		"X3",
		0
	), Set Random Seed( 117724710 ),
	Number of Starts( 253 ),
	Add Term( {1, 0} ),
	Add Term( {3, 1} ),
	Add Alias Term( {1, 1}, {2, 1} ),
	Add Alias Term( {1, 1}, {3, 1} ),
	Add Alias Term( {2, 1}, {3, 1} ),
	Set N Whole Plots( 4 ),
	Set N Subplots( 16 ),
	Set Sample Size( 48 ), Make Design,
	Make Table}
);
```

## Example 89
> **Summary**: Design an experiment using a custom mixture design with specified factors, responses, and constraints.

<!-- Keywords: #DOE, #Response, #AddAliasTerm, #AddFactor, #AddResponse -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Potato Chip Responses.jmp");
// Basis for Design
DOE(
	Custom Design,
	{
	Add Response(
		Maximize, "Y", ., ., .
	),
	Add Factor(
		Continuous, -1, 1, "X1", 2
	),
	Add Factor(
		Continuous, -1, 1, "X2", 1
	),
	Add Factor(
		Categorical,
		{"L1", "L2", "L3", "L4", "L5",
		"L6", "L7", "L8", "L9", "L10"},
		"X3",
		0
	), Set Random Seed( 117724710 ),
	Number of Starts( 253 ),
	Add Term( {1, 0} ),
	Add Term( {3, 1} ),
	Add Alias Term( {1, 1}, {2, 1} ),
	Add Alias Term( {1, 1}, {3, 1} ),
	Add Alias Term( {2, 1}, {3, 1} ),
	Set N Whole Plots( 4 ),
	Set N Subplots( 16 ),
	Set Sample Size( 48 ), Make Design,
	Make Table}
);
```


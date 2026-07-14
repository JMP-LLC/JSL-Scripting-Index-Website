# DOE

### Example 1
> **Summary**: Automates the evaluation of a design with specified factors, utilizing the DOE function to open and analyze data from a table.

<!-- Keywords: #JSLScriptingLanguage, #DOEFunction, #DesignOfExperiments, #FactorAnalysis, #DataAnalysis -->

**Code**:
```jsl
// Evaluate Design
// Open data table
dt = Open("data_table.jmp");
// Evaluate Design
DOE(
	Evaluate Design,
	X( :X1, :X2, :X3 )
);
```

**Code Explanation**:

1. Open table.
2. Evaluate design.
3. Specify factors.



### Example 2
> **Summary**: Automates the creation of a full factorial design with continuous and categorical factors, simulating responses, and generating a table.

<!-- Keywords: #JMPDOE, #FullFactorialDesign, #ContinuousFactors, #CategoricalFactors, #Simulation -->

**Code**:
```jsl
// DOE Dialog
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open data table.
2. Start DOE dialog.
3. Define full factorial design.
4. Add maximize response "Y".
5. Add continuous factor X1 with levels -1, 1.
6. Add categorical factor X2 with levels x, y, z.
7. Add categorical factor X3 with levels A, B, C, D.
8. Set random seed for reproducibility.
9. Generate design and simulate responses.
10. Set run order and make table.



### Example 3
> **Summary**: Automates the design and generation of a space-filling design table in JMP, utilizing the DOE dialog to specify response variables, factor settings, and optimality criteria.

<!-- Keywords: #JMPScriptingLanguage, #DOEDialog, #SpaceFillingDesign, #OptimalityCriteria, #FactorSettings -->

**Code**:
```jsl
// DOE Dialog
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open data table.
2. Start DOE dialog.
3. Add maximize response.
4. Set Alpha factor settings.
5. Set Beta factor settings.
6. Add Gamma continuous factor.
7. Add Algorithm categorical factor.
8. Add Compiler categorical factor.
9. Set random seed.
10. Configure FFF optimality.
11. Select space filling design type.
12. Generate and make table.



### Example 4
> **Summary**: Automates the creation of a space filling design from a data table, utilizing load factors to optimize experimental runs.

<!-- Keywords: #JSLScriptingLanguage, #SpaceFillingDesign, #DOE, #ExperimentalDesign, #DataTableManipulation -->

**Code**:
```jsl
// Load and Edit in Space Filling Design
// Open data table
dt = Open("data_table.jmp");
// Load and Edit in Space Filling Design
DOE(
	Space Filling Design,
	Load Factors( Current Data Table() )
);
```

**Code Explanation**:

1. Open data table.
2. Load factors from table.
3. Create space filling design.



### Example 5
> **Summary**: Automates the process of loading and editing a custom design in JMP, utilizing the Load Factors feature to populate the design.

<!-- Keywords: #JMPScriptingLanguage, #CustomDesign, #LoadFactors, #DOE, #DataTable -->

**Code**:
```jsl
// Load and Edit in Custom Design
// Open data table
dt = Open("data_table.jmp");
// Load and Edit in Custom Design
DOE(
	Custom Design,
	Load Factors( Current Data Table() )
);
```

**Code Explanation**:

1. Open data table.
2. Load factors from table.
3. Start Custom Design.
4. Edit design using loaded factors.



### Example 6
> **Summary**: Automates the evaluation design experiment for a data table, specifying factors such as Whole Plots, Subplots, A1, A2, A3, A4, C1, and C2.

<!-- Keywords: #JSLScripting, #DesignOfExperiments, #DOE, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
// Evaluate Design
// Open data table
dt = Open("data_table.jmp");
// Evaluate Design
DOE(
	Evaluate Design,
	X(
		:Whole Plots, :Subplots, :A1, :A2,
		:A3, :A4, :C1, :C2
	)
);
```

**Code Explanation**:

1. Open data table.
2. Evaluate design experiment.
3. Specify factors: Whole Plots.
4. Specify factors: Subplots.
5. Specify factors: A1.
6. Specify factors: A2.
7. Specify factors: A3.
8. Specify factors: A4.
9. Specify factors: C1.
10. Specify factors: C2.



### Example 7
> **Summary**: Automates the generation of a custom design for optimization using DOE in JMP, minimizing OCV and incorporating continuous factors A1-A4 and C1-C2.

<!-- Keywords: #JMPDOE, #CustomDesign, #Optimization, #ContinuousFactors, #ExperimentalDesign -->

**Code**:
```jsl
// DOE Dialog
// Open data table
dt = Open("data_table.jmp");
// DOE Dialog
DOE(
	Custom Design,
	{
	Add Response(
		Minimize, "OCV", ., ., .
	),
	Add Factor(
		Continuous, -1, 1, "A1", 2
	),
	Add Factor(
		Continuous, -1, 1, "A2", 2
	),
	Add Factor(
		Continuous, -1, 1, "A3", 2
	),
	Add Factor(
		Continuous, -1, 1, "A4", 2
	),
	Add Factor(
		Continuous, -1, 1, "C1", 1
	),
	Add Factor(
		Continuous, -1, 1, "C2", 1
	), Set Random Seed( 1866762673 ),
	Number of Starts( 21 ),
	Add Term( {1, 0} ),
	Add Term( {1, 1} ),
	Add Term( {2, 1} ),
	Add Term( {3, 1} ),
	Add Term( {4, 1} ),
	Add Term( {5, 1} ),
	Add Term( {6, 1} ),
	Add Term( {1, 1}, {2, 1} ),
	Add Term( {1, 1}, {3, 1} ),
	Add Term( {1, 1}, {4, 1} ),
	Add Term( {1, 1}, {5, 1} ),
	Add Term( {1, 1}, {6, 1} ),
	Add Term( {2, 1}, {3, 1} ),
	Add Term( {2, 1}, {4, 1} ),
	Add Term( {2, 1}, {5, 1} ),
	Add Term( {2, 1}, {6, 1} ),
	Add Term( {3, 1}, {4, 1} ),
	Add Term( {3, 1}, {5, 1} ),
	Add Term( {3, 1}, {6, 1} ),
	Add Term( {4, 1}, {5, 1} ),
	Add Term( {4, 1}, {6, 1} ),
	Add Term( {5, 1}, {6, 1} ),
	Set N Whole Plots( 16 ),
	Make Strip Plot Design,
	Set N Subplots( 6 ),
	Set Sample Size( 48 ),
	Optimality Criterion(
		"Make D-Optimal Design"
	), Make Design}
);
```

**Code Explanation**:

1. Open data table.
2. Start DOE Custom Design.
3. Add response "OCV" to minimize.
4. Add factor "A1" as continuous.
5. Add factor "A2" as continuous.
6. Add factor "A3" as continuous.
7. Add factor "A4" as continuous.
8. Add factor "C1" as continuous.
9. Add factor "C2" as continuous.
10. Configure design settings and generate.



### Example 8
> **Summary**: Automates the evaluation design process by opening a data table and specifying factors for analysis.

<!-- Keywords: #JSLScriptingLanguage, #DesignOfExperiments, #DataAnalysis, #FactorSpecification, #JMPPlatform -->

**Code**:
```jsl
// Evaluate Design
// Open data table
dt = Open("data_table.jmp");
// Evaluate Design
DOE(
	Evaluate Design,
	X( :X1, :X2, :X3, :X4, :X5, :X6 )
);
```

**Code Explanation**:

1. Open table.
2. Evaluate design.
3. Specify factors.



### Example 9
> **Summary**: Automates a custom design of experiments (DOE) process in JMP, defining response and factor variables, setting random seed, and simulating responses.

<!-- Keywords: #JMPScriptingLanguage, #DesignofExperiments, #CustomDesign, #Simulation, #StatisticalAnalysis -->

**Code**:
```jsl
// DOE Dialog
// Open data table
dt = Open("data_table.jmp");
// DOE Dialog
d = DOE(
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
	),
	Add Factor(
		Continuous, -1, 1, "X4", 0
	),
	Add Factor(
		Continuous, -1, 1, "X5", 0
	),
	Add Factor(
		Continuous, -1, 1, "X6", 0
	), Set Random Seed( 12345 ),
	Number of Starts( 1 ),
	Add Term( {1, 0} ),
	Add Term( {1, 1} ),
	Add Term( {2, 1} ),
	Add Term( {3, 1} ),
	Add Term( {4, 1} ),
	Add Term( {5, 1} ),
	Add Term( {6, 1} ),
	Add Alias Term( {1, 1}, {2, 1} ),
	Add Alias Term( {1, 1}, {3, 1} ),
	Add Alias Term( {1, 1}, {4, 1} ),
	Add Alias Term( {1, 1}, {5, 1} ),
	Add Alias Term( {1, 1}, {6, 1} ),
	Add Alias Term( {2, 1}, {3, 1} ),
	Add Alias Term( {2, 1}, {4, 1} ),
	Add Alias Term( {2, 1}, {5, 1} ),
	Add Alias Term( {2, 1}, {6, 1} ),
	Add Alias Term( {3, 1}, {4, 1} ),
	Add Alias Term( {3, 1}, {5, 1} ),
	Add Alias Term( {3, 1}, {6, 1} ),
	Add Alias Term( {4, 1}, {5, 1} ),
	Add Alias Term( {4, 1}, {6, 1} ),
	Add Alias Term( {5, 1}, {6, 1} ),
	Set Sample Size( 60 ),
	Simulate Responses, Make Design}
);
rep = d << Report;
rep["Design"] << Close( 1 );
```

**Code Explanation**:

1. Open data table.
2. Define DOE parameters.
3. Add response variable.
4. Add continuous factors.
5. Set random seed.
6. Specify number of starts.
7. Add main effects.
8. Add alias terms.
9. Set sample size.
10. Simulate responses.
11. Make design.
12. Generate report.
13. Close "Design" section.



### Example 10
> **Summary**: Automates the evaluation design experiment for factors Silica, Sulfur, and Silane by opening a data table.

<!-- Keywords: #JMPScriptingLanguage, #DesignofExperiments, #DataTableOperations, #FactorEvaluation, #DOE -->

**Code**:
```jsl
// Evaluate Design
// Open data table
dt = Open("data_table.jmp");
// Evaluate Design
DOE(
	Evaluate Design,
	X( :Silica, :Sulfur, :Silane )
);
```

**Code Explanation**:

1. Open data table.
2. Evaluate design experiment.
3. Specify factors: Silica, Sulfur, Silane.



### Example 11
> **Summary**: Automates the creation of a response surface design in JMP, defining a target range for stretch and configuring factor settings for silica and sulfur.

<!-- Keywords: #JMPScriptingLanguage, #ResponseSurfaceDesign, #DOEDialog, #FactorSettings, #RandomSeed -->

**Code**:
```jsl
// DOE Dialog
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open table.
2. Start DOE dialog.
3. Define response surface design.
4. Add response variable.
5. Set target range for stretch.
6. Configure silica factor settings.
7. Configure sulfur factor settings.
8. Add continuous factor Silane.
9. Set random seed.
10. Generate and make table.



### Example 12
> **Summary**: Automates the loading and editing process in Response Surface Design, utilizing the current data table to load factors.

<!-- Keywords: #JMPScriptingLanguage, #ResponseSurfaceDesign, #DataTable, #LoadFactors, #DOE -->

**Code**:
```jsl
// Load and Edit in Response Surface Design
// Open data table
dt = Open("data_table.jmp");
// Load and Edit in Response Surface Design
DOE(
	Response Surface Design,
	Load Factors( Current Data Table() )
);
```

**Code Explanation**:

1. Open data table.
2. Load Response Surface Design.
3. Load factors from current table.



### Example 13
> **Summary**: Automates the process of loading and editing a data table in Response Surface Design, defining a DOE object, and specifying the response surface design.

<!-- Keywords: #JSLScriptingLanguage, #ResponseSurfaceDesign, #DOEObject, #DataTableManagement, #DesignofExperiments -->

**Code**:
```jsl
// Load and Edit in Response Surface Design
// Open data table
dt = Open("data_table.jmp");
// Load and Edit in Response Surface Design
DOE(
	Response Surface Design,
	Load Responses(
		Current Data Table()
	)
);
```

**Code Explanation**:

1. Open data table.
2. Define DOE object.
3. Specify Response Surface Design.
4. Load responses from current table.



### Example 14
> **Summary**: Automates the loading and editing process of a custom design in JMP, utilizing the `DOE` function to load responses from an open data table.

<!-- Keywords: #JMPScriptingLanguage, #CustomDesign, #DataTable, #DOEFunction, #LoadResponses -->

**Code**:
```jsl
// Load and Edit in Custom Design
// Open data table
dt = Open("data_table.jmp");
// Load and Edit in Custom Design
DOE(
	Custom Design,
	Load Responses(
		Current Data Table()
	)
);
```

**Code Explanation**:

1. Open table.
2. Load Custom Design.
3. Load responses from table.



### Example 15
> **Summary**: Automates the evaluation design process by opening a data table and specifying factors for analysis.

<!-- Keywords: #JSLScriptingLanguage, #DesignofExperiments, #DataTableManagement, #FactorSpecification, #DOE -->

**Code**:
```jsl
// Evaluate Design
// Open data table
dt = Open("data_table.jmp");
// Evaluate Design
DOE(
	Evaluate Design,
	X(
		:Whole Plots, :Furnace Temp,
		:Coating
	)
);
```

**Code Explanation**:

1. Open table.
2. Evaluate design.
3. Specify factors.



### Example 16
> **Summary**: Automates the design of experiments (DOE) for a corrosion resistance study, utilizing custom design parameters and categorical factors.

<!-- Keywords: #JSLScriptingLanguage, #DesignOfExperiments, #CustomDesign, #CategoricalFactors, #DOEDesign -->

**Code**:
```jsl
// DOE Dialog
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open table.
2. Define DOE parameters.
3. Add response variable.
4. Add categorical factor.
5. Add another categorical factor.
6. Set random seed.
7. Specify number of starts.
8. Add main effect term.
9. Add interaction term.
10. Add second interaction term.
11. Set sample size.
12. Set number of whole plots.
13. Generate design.



### Example 17
> **Summary**: Automates the loading and editing process for Taguchi Arrays in JMP, utilizing the Current Data Table to load factors.

<!-- Keywords: #JMPScriptingLanguage, #TaguchiArrays, #DataLoading, #Editing, #CurrentDataTable -->

**Code**:
```jsl
// Load and Edit in Taguchi Arrays
// Open data table
dt = Open("data_table.jmp");
// Load and Edit in Taguchi Arrays
DOE(
	Taguchi Arrays,
	Load Factors( Current Data Table() )
);
```

**Code Explanation**:

1. Open data table.
2. Load Taguchi Arrays.
3. Load factors from current table.



### Example 18
> **Summary**: Automates the evaluation design process by opening a data table and specifying factors for analysis.

<!-- Keywords: #JSLScriptingLanguage, #DesignOfExperiments, #FactorAnalysis, #DataTableManagement, #JMPPlatform -->

**Code**:
```jsl
// Evaluate Design
// Open data table
dt = Open("data_table.jmp");
// Evaluate Design
DOE(
	Evaluate Design,
	X(
		:Cocoa, :Sugar, :Flour, :Butter,
		:Milk, :Eggs
	)
);
```

**Code Explanation**:

1. Open table.
2. Evaluate design.
3. Specify factors: Cocoa, Sugar, Flour, Butter, Milk, Eggs.



### Example 19
> **Summary**: Automates the design of experiments (DOE) for a mixture problem, defining response and factor variables, and configuring design settings.

<!-- Keywords: #JSLScripting, #DOEDesign, #MixtureExperiment, #FactorialDesign, #JMPScriptingLanguage -->

**Code**:
```jsl
// DOE Dialog
// Open data table
dt = Open("data_table.jmp");
// DOE Dialog
DOE(
	Custom Design,
	{
	Add Response(
		Maximize, "Taste", 1, 10, .
	),
	Add Factor(
		Mixture, 0.1, 0.2, "Cocoa", 0
	),
	Add Factor(
		Mixture, 0, 0.15, "Sugar", 0
	),
	Add Factor(
		Mixture, 0.2, 0.3, "Flour", 0
	),
	Add Factor(
		Mixture, 0.1, 0.2, "Butter", 0
	),
	Add Factor(
		Mixture, 0.25, 0.35, "Milk", 0
	),
	Add Factor(
		Mixture, 0.05, 0.2, "Eggs", 0
	), Set Random Seed( 12345 ),
	Number of Starts( 40 ),
	Add Constraint(
		[1 1 1 0 0 0 0.45,
		-1 -1 -1 0 0 0 -0.45]
	), Add Term( {1, 1} ),
	Add Term( {2, 1} ),
	Add Term( {3, 1} ),
	Add Term( {4, 1} ),
	Add Term( {5, 1} ),
	Add Alias Term( {1, 1}, {2, 1} ),
	Add Alias Term( {1, 1}, {3, 1} ),
	Add Alias Term( {1, 1}, {4, 1} ),
	Add Alias Term( {1, 1}, {5, 1} ),
	Add Alias Term( {1, 1}, {6, 1} ),
	Add Alias Term( {2, 1}, {3, 1} ),
	Add Alias Term( {2, 1}, {4, 1} ),
	Add Alias Term( {2, 1}, {5, 1} ),
	Add Alias Term( {2, 1}, {6, 1} ),
	Add Alias Term( {3, 1}, {4, 1} ),
	Add Alias Term( {3, 1}, {5, 1} ),
	Add Alias Term( {3, 1}, {6, 1} ),
	Add Alias Term( {4, 1}, {5, 1} ),
	Add Alias Term( {4, 1}, {6, 1} ),
	Add Alias Term( {5, 1}, {6, 1} ),
	Set Sample Size( 10 )}
);
```

**Code Explanation**:

1. Open data table.
2. Start DOE dialog.
3. Define response variable.
4. Add mixture factor: Cocoa.
5. Add mixture factor: Sugar.
6. Add mixture factor: Flour.
7. Add mixture factor: Butter.
8. Add mixture factor: Milk.
9. Add mixture factor: Eggs.
10. Configure design settings.



### Example 20
> **Summary**: Automates the creation of a MaxDiff Design in JMP, configuring variables and generating a design with simulated responses.

<!-- Keywords: #JMPScriptingLanguage, #MaxDiffDesign, #DOEDialog, #Simulation, #ExperimentalDesign -->

**Code**:
```jsl
// DOE Dialog
// Open data table
dt = Open("data_table.jmp");
// DOE Dialog
DOE(
	MaxDiff Design,
	X( :Candy ),
	{Set Number of Profiles( 4 ),
	Set Number of Choice Sets( 7 ),
	Make Design, Simulate Responses( 0 )}
);
```

**Code Explanation**:

1. Open table.
2. Start DOE dialog.
3. Select MaxDiff Design.
4. Set X variable.
5. Configure number of profiles.
6. Configure number of choice sets.
7. Generate design.
8. Simulate responses off.



### Example 21
> **Summary**: Automates the evaluation design process by opening a data table and specifying factors for temperature, time, and catalyst.

<!-- Keywords: #JSLScriptingLanguage, #DesignOfExperiments, #FactorSpecification, #WholePlots, #Subplots -->

**Code**:
```jsl
// Evaluate Design
// Open data table
dt = Open("data_table.jmp");
// Evaluate Design
DOE(
	Evaluate Design,
	X(
		Whole Plots, Subplots,
		:Temperature, :Time, :Catalyst
	)
);
```

**Code Explanation**:

1. Open table.
2. Evaluate design.
3. Specify factors.
4. Include whole plots.
5. Include subplots.
6. Add temperature factor.
7. Add time factor.
8. Add catalyst factor.



### Example 22
> **Summary**: Automates the design and simulation of a custom experiment with continuous factors, utilizing JMP's DOE dialog to generate a comprehensive design.

<!-- Keywords: #JMPDOE, #CustomExperimentDesign, #ContinuousFactors, #Simulation, #ExperimentalDesign -->

**Code**:
```jsl
// DOE Dialog
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open data table.
2. Start DOE dialog.
3. Add response variable.
4. Add continuous factor: Temperature.
5. Add continuous factor: Time.
6. Add continuous factor: Catalyst.
7. Set random seed.
8. Define number of starts.
9. Add main effects.
10. Add interaction terms.
11. Set whole plots.
12. Set subplots.
13. Set sample size.
14. Simulate responses.
15. Create design.



### Example 23
> **Summary**: Automates the loading and editing process in Choice Design, utilizing the Current Data Table to load factors.

<!-- Keywords: #JSLScriptingLanguage, #ChoiceDesign, #DataLoading, #Editing, #DOE -->

**Code**:
```jsl
// Load and Edit in Choice Design
// Open data table
dt = Open("data_table.jmp");
// Load and Edit in Choice Design
DOE(
	Choice Design,
	Load Factors( Current Data Table() )
);
```

**Code Explanation**:

1. Open data table.
2. Launch Choice Design.
3. Load factors from table.



### Example 24
> **Summary**: Automates the evaluation design experiment by opening a data table and specifying variables for Grind, Temperature, Time, Charge, and Station.

<!-- Keywords: #JSLScripting, #DesignOfExperiments, #DataTableManipulation, #VariableSpecification, #DOE -->

**Code**:
```jsl
// Evaluate Design
// Open data table
dt = Open("data_table.jmp");
// Evaluate Design
DOE(
	Evaluate Design,
	X(
		:Grind, :Temperature, :Time,
		:Charge, :Station
	)
);
```

**Code Explanation**:

1. Open data table.
2. Evaluate design experiment.
3. Specify variables: Grind, Temperature, Time.
4. Specify variables: Charge, Station.



### Example 25
> **Summary**: Automates the generation of a custom design of experiments (DOE) using JMP's DOE dialog, incorporating multiple factors and terms to optimize an experimental process.

<!-- Keywords: #JMPScriptingLanguage, #DOEDesign, #CustomDesign, #ExperimentalDesign, #Optimization -->

**Code**:
```jsl
// DOE Dialog
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open data table.
2. Start DOE dialog.
3. Add response variable.
4. Add categorical factor.
5. Add continuous factor.
6. Add continuous factor.
7. Add continuous factor.
8. Add blocking factor.
9. Set random seed.
10. Set number of starts.
11. Add intercept term.
12. Add main effects terms.
13. Add alias terms.
14. Set sample size.
15. Generate design.



### Example 26
> **Summary**: Automates the generation of a custom design of experiments (DOE) using JMP, incorporating continuous factors X1, X2, and X3, with a specified random seed and optimality criterion.

<!-- Keywords: #JMPScriptingLanguage, #DesignOfExperiments, #CustomDesign, #ContinuousFactors, #OptimalityCriterion -->

**Code**:
```jsl
// DOE Dialog
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open table.
2. Define DOE dialog.
3. Add response variable.
4. Add continuous factor X1.
5. Add continuous factor X2.
6. Add continuous factor X3.
7. Set random seed.
8. Set number of starts.
9. Add polynomial terms.
10. Set sample size.
11. Set optimality criterion.
12. Generate design.



### Example 27
> **Summary**: Automates the evaluation design experiment by opening a data table and specifying the factors to be evaluated.

<!-- Keywords: #JSLScriptingLanguage, #DesignOfExperiments, #DataTableManagement, #FactorEvaluation, #DOE -->

**Code**:
```jsl
// Evaluate Design
// Open data table
dt = Open("data_table.jmp");
// Evaluate Design
DOE(
	Evaluate Design,
	X( :Operator, :Speed, :Current )
);
```

**Code Explanation**:

1. Open data table.
2. Evaluate design experiment.



### Example 28
> **Summary**: Automates the creation of a full factorial design in JMP, incorporating categorical and continuous factors, with a specified response variable.

<!-- Keywords: #JMPScriptingLanguage, #FullFactorialDesign, #CategoricalFactors, #ContinuousFactors, #DOEDialog -->

**Code**:
```jsl
// DOE Dialog
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open table.
2. Start DOE dialog.
3. Define response variable.
4. Add categorical factor.
5. Add continuous factor.
6. Add continuous factor.
7. Set random seed.
8. Generate design.



### Example 29
> **Summary**: Automates the evaluation design experiment by opening a data table and specifying the factors to be evaluated.

<!-- Keywords: #JSLScriptingLanguage, #DOE, #DesignOfExperiments, #DataTable, #JMPPlatform -->

**Code**:
```jsl
// Evaluate Design
// Open data table
dt = Open("data_table.jmp");
// Evaluate Design
DOE(
	Evaluate Design,
	X(
		:Methanol, :Ethanol, :Propanol,
		:Butanol, :pH, :Time
	)
);
```

**Code Explanation**:

1. Open data table.
2. Evaluate design experiment.



### Example 30
> **Summary**: Automates the creation of a Definitive Screening Design (DSD) in JMP, adding response and factor variables to optimize experimental design.

<!-- Keywords: #JMPScriptingLanguage, #DOEDesign, #DefinitiveScreeningDesign, #ExperimentalDesign, #Optimization -->

**Code**:
```jsl
// DOE Dialog
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open data table.
2. Initiate DOE dialog.
3. Define Definitive Screening Design.
4. Add response variable "Yield".
5. Add factor "Methanol".
6. Add factor "Ethanol".
7. Add factor "Propanol".
8. Add factor "Butanol".
9. Add factor "pH".
10. Add factor "Time".



### Example 31
> **Summary**: Automates the loading and editing process for a Definitive Screening Design in JMP, utilizing the Current Data Table to load factors.

<!-- Keywords: #JMPScriptingLanguage, #DefinitiveScreeningDesign, #DOEPlatform, #DataLoading, #JSLAutomation -->

**Code**:
```jsl
// Load and Edit in Definitive Screening Design
// Open data table
dt = Open("data_table.jmp");
// Load and Edit in Definitive Screening Design
DOE(
	Definitive Screening Design,
	Load Factors( Current Data Table() )
);
```

**Code Explanation**:

1. Open table.
2. Load DOE platform.
3. Select Definitive Screening Design.
4. Load factors from current table.



### Example 32
> **Summary**: Automates the evaluation design experiment by opening a data table and specifying the factors to be evaluated.

<!-- Keywords: #JSLScriptingLanguage, #DesignofExperiments, #DataTableManagement, #EvaluationDesign, #DOE -->

**Code**:
```jsl
// Evaluate Design
// Open data table
dt = Open("data_table.jmp");
// Evaluate Design
DOE(
	Evaluate Design,
	X(
		:Lot, :Methanol, :Ethanol,
		:Propanol, :Butanol, :pH, :Time
	)
);
```

**Code Explanation**:

1. Open data table.
2. Evaluate design experiment.



### Example 33
> **Summary**: Automates the generation of a Definitive Screening Design (DSD) in JMP, optimizing for a response variable and incorporating multiple continuous factors.

<!-- Keywords: #JMPScriptingLanguage, #DOEDesign, #DefinitiveScreeningDesign, #ContinuousFactors, #Optimization -->

**Code**:
```jsl
// DOE Dialog
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open table.
2. Define DOE.
3. Set response to maximize.
4. Add continuous factor: Methanol.
5. Add continuous factor: Ethanol.
6. Add continuous factor: Propanol.
7. Add continuous factor: Butanol.
8. Add continuous factor: pH.
9. Add continuous factor: Time.
10. Generate design.



### Example 34
> **Summary**: Automates the creation of a Definitive Screening Design in JMP, defining factors and response variables to optimize experimental conditions.

<!-- Keywords: #JMPScriptingLanguage, #DOEDesign, #DefinitiveScreeningDesign, #ExperimentalDesign, #Optimization -->

**Code**:
```jsl
// DOE Dialog
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open data table.
2. Initiate DOE dialog.
3. Define Definitive Screening Design.
4. Add response variable "Yield".
5. Add continuous factor "Methanol".
6. Add continuous factor "Ethanol".
7. Add continuous factor "Propanol".
8. Add continuous factor "Butanol".
9. Add continuous factor "pH".
10. Add continuous factor "Time".



### Example 35
> **Summary**: Automates the evaluation design experiment by opening a data table and specifying variables for Dichloromethane, Methanol, and Sample Volume.

<!-- Keywords: #JMPScriptingLanguage, #DOE, #DesignOfExperiments, #DataTable, #Evaluation -->

**Code**:
```jsl
// Evaluate Design
// Open data table
dt = Open("data_table.jmp");
// Evaluate Design
DOE(
	Evaluate Design,
	X(
		:Dichloromethane, :Methanol,
		:Sample Volume
	)
);
```

**Code Explanation**:

1. Open data table.
2. Evaluate design experiment.
3. Specify variables: Dichloromethane, Methanol, Sample Volume.



### Example 36
> **Summary**: Automates the creation of a custom design for a DOE (Design of Experiments) analysis, incorporating multiple factors and response variables.

<!-- Keywords: #JMPScriptingLanguage, #DOEAnalysis, #CustomDesign, #FactorSelection, #ResponseVariable -->

**Code**:
```jsl
// DOE Dialog
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open data table.
2. Start DOE dialog.
3. Add response variable.
4. Add factor: Dichloromethane.
5. Add factor: Methanol.
6. Add factor: Sample Volume.
7. Set random seed.
8. Define number of starts.
9. Add polynomial terms.
10. Set sample size.
11. Choose optimality criterion.
12. Generate design.



### Example 37
> **Summary**: Automates the evaluation design process by opening a data table and defining variables for analysis, utilizing the DOE function to optimize experimental conditions.

<!-- Keywords: #JSLScriptingLanguage, #DOEFunction, #ExperimentalDesign, #DataAnalysis, #JMPPlatform -->

**Code**:
```jsl
// Evaluate Design
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open data table.
2. Define variables for evaluation.
3. Evaluate design using DOE function.



### Example 38
> **Summary**: Automates a Definitive Screening Design (DSD) experiment using JMP, defining response and factor variables, and configuring simulation settings.

<!-- Keywords: #JMPScriptingLanguage, #DOE, #DefinitiveScreeningDesign, #FactorialExperiment, #Simulation -->

**Code**:
```jsl
// DOE Dialog
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open table.
2. Define DOE parameters.
3. Add response variable.
4. Add continuous factor: pH.
5. Add continuous factor: Water Temp.
6. Add continuous factor: Extraction Time.
7. Add continuous factor: Ratio.
8. Add continuous factor: Agitation Speed.
9. Add categorical factor: Hydrolyze.
10. Add categorical factor: Pre-Soak.



### Example 39
> **Summary**: Automates a custom Design of Experiments (DOE) configuration using JMP's DOE dialog, incorporating categorical factors and disallowed combinations.

<!-- Keywords: #JMPScriptingLanguage, #DesignOfExperiments, #CategoricalFactors, #DisallowedCombinations, #CustomConfiguration -->

**Code**:
```jsl
// DOE Dialog
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open table.
2. Start DOE dialog.
3. Add categorical factor "Market".
4. Add categorical factor "Near Phone".
5. Add categorical factor "Near Interface".
6. Add categorical factor "Far Phone".
7. Add categorical factor "Far Interface".
8. Set strength to 2.
9. Define disallowed combinations.
10. Set random seed to 632.



### Example 40
> **Summary**: Automates the process of loading and editing a data table in JMP, utilizing the Covering Array design to optimize experimental factors.

<!-- Keywords: #JMPScriptingLanguage, #CoveringArray, #DOEPlatform, #ExperimentalDesign, #DataTable -->

**Code**:
```jsl
// Load and Edit in Covering Array
// Open data table
dt = Open("data_table.jmp");
// Load and Edit in Covering Array
DOE(
	Covering Array,
	Load Factors( Current Data Table() )
);
```

**Code Explanation**:

1. Open table.
2. Load DOE platform.
3. Use Covering Array design.
4. Load factors from table.



### Example 41
> **Summary**: Automates the design of a mixture experiment using JMP's DOE dialog, specifying response maximization, factor ranges, and constraints.

<!-- Keywords: #JMPScriptingLanguage, #MixtureDesign, #DOEDialog, #ExperimentalDesign, #Optimization -->

**Code**:
```jsl
// DOE Dialog
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open data table.
2. Initiate DOE dialog.
3. Select Mixture Design.
4. Add response: Maximize Y.
5. Set factor X1 range.
6. Set factor X2 range.
7. Set factor X3 range.
8. Set random seed.
9. Add design constraints.
10. Choose Extreme Vertices design.



### Example 42
> **Summary**: Automates the evaluation design process by opening a data table and specifying factors for analysis.

<!-- Keywords: #JSLScriptingLanguage, #DesignOfExperiments, #DataAnalysis, #FactorSelection, #JMPPlatform -->

**Code**:
```jsl
// Evaluate Design
// Open data table
dt = Open("data_table.jmp");
// Evaluate Design
DOE(
	Evaluate Design,
	X(
		:Feed Rate, :Catalyst, :Stir Rate,
		:Temperature, :Concentration
	)
);
```

**Code Explanation**:

1. Open table.
2. Evaluate design.
3. Specify factors: Feed Rate, Catalyst, Stir Rate, Temperature, Concentration.



### Example 43
> **Summary**: Automates the creation of a Screening Design in JMP, defining response and factor variables, setting a random seed, and generating a design.

<!-- Keywords: #JMPScriptingLanguage, #DOEDesign, #ScreeningDesign, #FactorVariables, #RandomSeed -->

**Code**:
```jsl
// DOE Dialog
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open table.
2. Define DOE parameters.
3. Add response variable.
4. Add factor: Feed Rate.
5. Add factor: Catalyst.
6. Add factor: Stir Rate.
7. Add factor: Temperature.
8. Add factor: Concentration.
9. Set random seed.
10. Generate design.



### Example 44
> **Summary**: Automates the creation of a mixture design by loading factors from a data table, utilizing JMP's Mixture Design platform.

<!-- Keywords: #JMPScriptingLanguage, #MixtureDesign, #DataTable, #DOE, #JSL -->

**Code**:
```jsl
// Load and Edit in Mixture Design
// Open data table
dt = Open("data_table.jmp");
// Load and Edit in Mixture Design
DOE(
	Mixture Design,
	Load Factors( Current Data Table() )
);
```

**Code Explanation**:

1. Open table.
2. Create mixture design.
3. Load factors from table.



### Example 45
> **Summary**: Automates the design of experiments (DOE) for a custom study, incorporating categorical and continuous factors, random seed, and constraints to generate an optimal design.

<!-- Keywords: #JSLScripting, #DOEDesign, #CustomDesign, #FactorialExperiment, #Optimization -->

**Code**:
```jsl
// DOE Dialog
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open data table.
2. Initiate DOE dialog.
3. Add maximize response.
4. Add none response.
5. Add categorical factor.
6. Add continuous factor.
7. Add continuous factor.
8. Set random seed.
9. Define number of starts.
10. Add polynomial terms.
11. Set sample size.
12. Add constraint.
13. Generate design.



### Example 46
> **Summary**: Automates the generation of a custom Design of Experiments (DOE) using JMP's DOE Dialog, specifying response variables and continuous factors.

<!-- Keywords: #JMPScriptingLanguage, #DOEDesign, #CustomDesign, #ContinuousFactors, #ExperimentalDesign -->

**Code**:
```jsl
// DOE Dialog
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open table.
2. Define DOE parameters.
3. Add response variable.
4. Add continuous factors.
5. Set random seed.
6. Specify number of starts.
7. Add main effects.
8. Add interaction terms.
9. Set sample size.
10. Generate design.



### Example 47
> **Summary**: Automates the creation of a full factorial design experiment in JMP, defining response and continuous factors, and generating a design table.

<!-- Keywords: #JMPScriptingLanguage, #DOE, #FullFactorialDesign, #ContinuousFactors, #ExperimentalDesign -->

**Code**:
```jsl
// DOE Dialog
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open data table.
2. Define DOE parameters.
3. Add response variable.
4. Add continuous factor: Feed Rate.
5. Add continuous factor: Catalyst.
6. Add continuous factor: Stir Rate.
7. Add continuous factor: Temperature.
8. Add continuous factor: Concentration.
9. Set random seed.
10. Create design and table.



### Example 48
> **Summary**: Automates the creation of a Screening Design in JMP, utilizing the DOE dialog to define response and factor settings.

<!-- Keywords: #JMPScriptingLanguage, #DOEDialog, #ScreeningDesign, #ContinuousFactors, #RandomSeed -->

**Code**:
```jsl
// DOE Dialog
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open data table.
2. Initiate DOE dialog.
3. Set response type.
4. Define response name.
5. Set response target.
6. Set response lower limit.
7. Set response upper limit.
8. Set response standard deviation.
9. Add continuous factor.
10. Define factor name.
11. Set factor minimum value.
12. Set factor maximum value.
13. Add continuous factor.
14. Define factor name.
15. Set factor minimum value.
16. Set factor maximum value.
17. Add continuous factor.
18. Define factor name.
19. Set factor minimum value.
20. Set factor maximum value.
21. Add continuous factor.
22. Define factor name.
23. Set factor minimum value.
24. Set factor maximum value.
25. Add continuous factor.
26. Define factor name.
27. Set factor minimum value.
28. Set factor maximum value.
29. Set random seed.
30. Generate design.
31. Disable response simulation.
32. Disable saving X matrix.



### Example 49
> **Summary**: Automates the design of experiments (DOE) for a data table, specifying factors and response variables, and generating an optimized design.

<!-- Keywords: #JSLScripting, #DOEDesign, #ExperimentalDesign, #JMPPlatform, #DataAnalysis -->

**Code**:
```jsl
// DOE Dialog
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open data table.
2. Set current data table.
3. Run script on data table.
4. Set new current data table.
5. Start DOE dialog.
6. Specify factors: Feed Rate, Catalyst, Stir Rate, Temperature, Concentration.
7. Specify response: Percent Reacted.
8. Configure augment method.
9. Set random seed.
10. Define design terms and criteria.
11. Generate and save design.



### Example 50
> **Summary**: Automates the loading and editing process for a Screening Design in JMP, utilizing the current data table.

<!-- Keywords: #JMPScriptingLanguage, #ScreeningDesign, #DOE, #DataTable, #JSLAutomation -->

**Code**:
```jsl
// Load and Edit in Screening Design
// Open data table
dt = Open("data_table.jmp");
// Load and Edit in Screening Design
DOE(
	Screening Design,
	Load Factors( Current Data Table() )
);
```

**Code Explanation**:

1. Open data table.
2. Load Screening Design.
3. Use current data table.



### Example 51
> **Summary**: Automates the loading and editing process for a data table in Screening Design, utilizing the DOE function to load responses from the current data table.

<!-- Keywords: #JSLScriptingLanguage, #ScreeningDesign, #DataTableLoading, #DOEFunction, #JMPPlatform -->

**Code**:
```jsl
// Load and Edit in Screening Design
// Open data table
dt = Open("data_table.jmp");
// Load and Edit in Screening Design
DOE(
	Screening Design,
	Load Responses(
		Current Data Table()
	)
);
```

**Code Explanation**:

1. Open data table.
2. Load Screening Design.
3. Load responses from current data table.



### Example 52
> **Summary**: Automates the creation of a DOE (Design of Experiments) dialog in JMP, adding categorical factors with defined levels and naming them for analysis.

<!-- Keywords: #JMPScriptingLanguage, #DOE, #CategoricalFactors, #FactorLevels, #ExperimentalDesign -->

**Code**:
```jsl
// DOE Dialog
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open table.
2. Initiate DOE dialog.
3. Add categorical factor.
4. Define factor levels.
5. Name factor "Web Browser".
6. Add categorical factor.
7. Define factor levels.
8. Name factor "Operating System".
9. Add categorical factor.
10. Define factor levels.
11. Name factor "RAM".
12. Add categorical factor.
13. Define factor levels.
14. Name factor "Connection Speed".
15. Set strength to 3.



### Example 53
> **Summary**: Automates the evaluation design process by opening a data table and specifying factors for analysis.

<!-- Keywords: #JSLScriptingLanguage, #DesignOfExperiments, #DataAnalysis, #FactorSpecification, #JMPPlatform -->

**Code**:
```jsl
// Evaluate Design
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open table.
2. Evaluate design.
3. Specify factors.



### Example 54
> **Summary**: Automates the evaluation of a design of experiments (DOE) to identify main effects and interactions among factors, utilizing JMP's DOE function.

<!-- Keywords: #JMPScriptingLanguage, #DesignOfExperiments, #FactorialAnalysis, #MainEffects, #InteractionTerms -->

**Code**:
```jsl
// Evaluate Design
// Open data table
dt = Open("data_table.jmp");
// Evaluate Design
DOE(
	Evaluate Design,
	X(
		:Liquid, :Sugar, :Flour, :Sifted,
		:Type, :Temp, :Salt, :Clamp,
		:Coat
	),
	{Add Term( {1, 0} ),
	Add Term( {1, 1} ),
	Add Term( {2, 1} ),
	Add Term( {3, 1} ),
	Add Term( {4, 1} ),
	Add Term( {5, 1} ),
	Add Term( {6, 1} ),
	Add Term( {7, 1} ),
	Add Term( {8, 1} ),
	Add Term( {9, 1} ),
	Add Alias Term( {1, 1}, {2, 1} ),
	Add Alias Term( {1, 1}, {3, 1} ),
	Add Alias Term( {1, 1}, {4, 1} ),
	Add Alias Term( {1, 1}, {5, 1} ),
	Add Alias Term( {1, 1}, {6, 1} ),
	Add Alias Term( {1, 1}, {7, 1} ),
	Add Alias Term( {1, 1}, {8, 1} ),
	Add Alias Term( {1, 1}, {9, 1} ),
	Add Alias Term( {2, 1}, {3, 1} ),
	Add Alias Term( {2, 1}, {4, 1} ),
	Add Alias Term( {2, 1}, {5, 1} ),
	Add Alias Term( {2, 1}, {6, 1} ),
	Add Alias Term( {2, 1}, {7, 1} ),
	Add Alias Term( {2, 1}, {8, 1} ),
	Add Alias Term( {2, 1}, {9, 1} ),
	Add Alias Term( {3, 1}, {4, 1} ),
	Add Alias Term( {3, 1}, {5, 1} ),
	Add Alias Term( {3, 1}, {6, 1} ),
	Add Alias Term( {3, 1}, {7, 1} ),
	Add Alias Term( {3, 1}, {8, 1} ),
	Add Alias Term( {3, 1}, {9, 1} ),
	Add Alias Term( {4, 1}, {5, 1} ),
	Add Alias Term( {4, 1}, {6, 1} ),
	Add Alias Term( {4, 1}, {7, 1} ),
	Add Alias Term( {4, 1}, {8, 1} ),
	Add Alias Term( {4, 1}, {9, 1} ),
	Add Alias Term( {5, 1}, {6, 1} ),
	Add Alias Term( {5, 1}, {7, 1} ),
	Add Alias Term( {5, 1}, {8, 1} ),
	Add Alias Term( {5, 1}, {9, 1} ),
	Add Alias Term( {6, 1}, {7, 1} ),
	Add Alias Term( {6, 1}, {8, 1} ),
	Add Alias Term( {6, 1}, {9, 1} ),
	Add Alias Term( {7, 1}, {8, 1} ),
	Add Alias Term( {7, 1}, {9, 1} ),
	Add Alias Term( {8, 1}, {9, 1} )}
);
```

**Code Explanation**:

1. Open data table;
2. Start DOE evaluation.
3. Set factors: Liquid, Sugar, Flour, Sifted, Type, Temp, Salt, Clamp, Coat.
4. Add main effects for all factors.
5. Add interaction terms for all factors.
6. Define alias terms for all factor pairs.
7. Complete DOE evaluation.



### Example 55
> **Summary**: Automates the evaluation design for a DOE (Design of Experiments) analysis, specifying factors Solvent, Active, and Water.

<!-- Keywords: #JSLScriptingLanguage, #DOEAnalysis, #ExperimentalDesign, #FactorSelection, #JMPPlatform -->

**Code**:
```jsl
// Evaluate Design
// Open data table
dt = Open("data_table.jmp");
// Evaluate Design
DOE(
	Evaluate Design,
	X( :Solvent, :Active, :Water )
);
```

**Code Explanation**:

1. Open data table.
2. Evaluate design for DOE.
3. Specify factors: Solvent, Active, Water.



### Example 56
> **Summary**: Automates the design of experiments (DOE) for a mixture problem, defining response variables and adding mixture factors 'Solvent', 'Active', and 'Water' using JMP's DOE dialog.

<!-- Keywords: #JMPScriptingLanguage, #DesignOfExperiments, #MixtureProblem, #CustomDesign, #DOEDialog -->

**Code**:
```jsl
// DOE Dialog
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open table.
2. Start DOE dialog.
3. Define response variable.
4. Add mixture factor "Solvent".
5. Add mixture factor "Active".
6. Add mixture factor "Water".
7. Set random seed.
8. Specify number of starts.
9. Add constraints.
10. Define terms for model.



### Example 57
> **Summary**: Automates the evaluation design process by opening a data table and specifying factors, including %Beads, %Strength, Flow(g/min), and T(¬∫C).

<!-- Keywords: #JSLScriptingLanguage, #DesignOfExperiments, #DOE, #JMPPlatform, #DataAnalysis -->

**Code**:
```jsl
// Evaluate Design
// Open data table
dt = Open("data_table.jmp");
// Evaluate Design
DOE(
	Evaluate Design,
	X(
		:"%Beads"n, :"%Strength"n,
		:"Flow(g/min)"n, :"T(¬∫C)"n
	)
);
```

**Code Explanation**:

1. Open table.
2. Evaluate design.
3. Specify factors.
4. Include "%Beads".
5. Include "%Strength".
6. Include "Flow(g/min)".
7. Include "T(¬∫C)".



### Example 58
> **Summary**: Automates a Design of Experiments (DOE) analysis to optimize the relationship between %Beads, %Strength, Flow(g/min), and T(¬∫C) factors on Size/nm response, utilizing various configuration options.

<!-- Keywords: #JMPScriptingLanguage, #DOEAnalysis, #FactorialDesign, #ResponseSurfaceMethodology, #ExperimentalDesign -->

**Code**:
```jsl
// DOE Dialog
// Open data table
dt = Open("data_table.jmp");
// DOE Dialog
dt = Current Data Table();
dt2 = dt <<
run script( "Original Data Table" );
Current Data Table( dt2 );
DOE(
	Augment Design,
	X(
		:"%Beads"n, :"%Strength"n,
		:"Flow(g/min)"n, :"T(¬∫C)"n
	),
	Y( :"Size/nm"n ),
	{Augment Method( Augment ),
	Set Random Seed( 2137584708 ),
	Number of Starts( 25507 ),
	Add Term( {1, 0} ),
	Add Term( {1, 1} ),
	Add Term( {2, 1} ),
	Add Term( {3, 1} ),
	Add Term( {4, 1} ),
	Add Potential Term( {1, 1}, {2, 1} ),
	Add Potential Term( {1, 1}, {3, 1} ),
	Add Potential Term( {1, 1}, {4, 1} ),
	Add Potential Term( {2, 1}, {3, 1} ),
	Add Potential Term( {2, 1}, {4, 1} ),
	Add Potential Term( {3, 1}, {4, 1} ),
	Add Potential Term( {1, 2} ),
	Add Potential Term( {2, 2} ),
	Add Potential Term( {3, 2} ),
	Add Potential Term( {4, 2} ),
	Add Term( {1, 3} ),
	Add Term( {2, 3} ),
	Add Term( {3, 3} ),
	Add Term( {4, 3} ),
	Set Sample Size( 22 ),
	D Efficiency Weight( 0 ), Make Design,
	Save X Matrix( 0 ),
	Simulate Responses( 0 ), Make Table}
);
```

**Code Explanation**:

1. Open data table.
2. Set current data table.
3. Run script "Original Data Table".
4. Set new current data table.
5. Start DOE dialog.
6. Define factors: %Beads, %Strength, Flow(g/min), T(¬∫C).
7. Define response: Size/nm.
8. Set augment method.
9. Configure random seed.
10. Set number of starts.
11. Add main effects.
12. Add two-way interactions.
13. Add three-way interactions.
14. Set sample size.
15. Disable efficiency weight.
16. Create design.
17. Disable X matrix save.
18. Disable response simulation.
19. Generate final table.



### Example 59
> **Summary**: Automates the creation of a custom design of experiments (DOE) in JMP, specifying factors X1, X2, and X3, and response variable Y.

<!-- Keywords: #JSLScriptingLanguage, #DesignOfExperiments, #CustomDOE, #JMPPlatform, #StatisticalAnalysis -->

**Code**:
```jsl
// DOE Dialog
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open table.
2. Create DOE dialog.
3. Add response variable Y.
4. Add factor X1.
5. Add factor X2.
6. Add factor X3.
7. Set random seed.
8. Define number of starts.
9. Add main effects.
10. Add interaction terms.
11. Set sample size.
12. Disable response simulation.
13. Disable X matrix saving.
14. Generate design.



### Example 60
> **Summary**: Automates the generation of a custom design of experiments (DOE) for optimizing odor, utilizing JMP's DOE dialog to add response and continuous factors, set random seed, specify number of starts, and generate a design table.

<!-- Keywords: #JMP, #DOE, #CustomDesign, #Optimization, #ExperimentalDesign -->

**Code**:
```jsl
// DOE Dialog
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open data table.
2. Define DOE dialog.
3. Add response variable.
4. Add continuous factor: temp.
5. Add continuous factor: gl ratio.
6. Add continuous factor: ht.
7. Set random seed.
8. Specify number of starts.
9. Add main effects.
10. Add interaction terms.
11. Set sample size.
12. Choose optimality criterion.
13. Generate design.
14. Create design table.



### Example 61
> **Summary**: Automates the creation of a custom design of experiments (DOE) table in JMP, specifying response variables, continuous and categorical factors, random seed, number of starts, main effects, interaction terms, whole plots, subplots, and sample size.

<!-- Keywords: #JSLScripting, #DOEtable, #CustomDesign, #JMPPlatform, #ExperimentalDesign -->

**Code**:
```jsl
// Basis for Design
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open table.
2. Define DOE parameters.
3. Add response variable.
4. Add continuous factor X1.
5. Add continuous factor X2.
6. Add categorical factor X3.
7. Set random seed.
8. Specify number of starts.
9. Add main effects.
10. Add interaction terms.
11. Set whole plots.
12. Set subplots.
13. Set sample size.
14. Generate design.
15. Create design table.



### Example 62
> **Summary**: Automates a Space Filling Design process to optimize the response variable Y, incorporating multiple continuous factors and optimizing with MaxPro criterion.

<!-- Keywords: #JMPScriptingLanguage, #SpaceFillingDesign, #Maximization, #ContinuousFactors, #Optimization -->

**Code**:
```jsl
// DOE Dialog
DOE(
	Space Filling Design,
	{
	Add Response(
		Maximize, "Y", ., ., .
	),
	Change Factor Settings(
		1, 3, 1000,
		"Number of Trees in the Forest"
	),
	Change Factor Settings(
		2, 1, 15,
		"Number of Terms Sampled per Split"
	),
	Add Factor(
		Continuous, 0.1, 1,
		"Bootstrap Sample Rate", 0
	),
	Add Factor(
		Continuous, 1, 10,
		"Minimum Splits per Tree",
		0
	),
	Add Factor(
		Continuous, 3, 1000,
		"Maximum Splits per Tree",
		0
	),
	Add Factor(
		Continuous, 1, 25,
		"Minimum Split Size", 0
	),
	Set Random Seed( 503612986 ),
	FFF Optimality Criterion(
		MaxPro
	),
	Space Filling Design Type(
		Fast Flexible Filling, 60
	), Set Run Order( Randomize ),
	Make Table}
);
```

**Code Explanation**:

1. Start DOE process.
2. Select Space Filling Design.
3. Add response variable Y for maximization.
4. Set factor 1: Number of Trees in the Forest, range 1-1000.
5. Set factor 2: Number of Terms Sampled per Split, range 1-15.
6. Add continuous factor: Bootstrap Sample Rate, range 0.1-1.
7. Add continuous factor: Minimum Splits per Tree, range 1-10.
8. Add continuous factor: Maximum Splits per Tree, range 3-1000.
9. Add continuous factor: Minimum Split Size, range 1-25.
10. Set random seed to 503612986.
11. Use MaxPro optimality criterion.
12. Choose Fast Flexible Filling design type with 60 iterations.
13. Randomize run order.
14. Generate and make design table.



### Example 63
> **Summary**: Automates the design of a custom experiment using JMP's DOE function, specifying response variables and continuous factors to optimize yield, match target MFI, and maximize CI.

<!-- Keywords: #JMPScriptingLanguage, #DOE, #CustomDesign, #ContinuousFactors, #ResponseVariables -->

**Code**:
```jsl
// V19: Custom DOE Settings
DOE(
	Custom Design,
	{
	Add Response(
		Maximize, "Yield", ., ., .
	),
	Add Response(
		Match Target, "MFI", ., 198, .
	),
	Add Response(
		Maximize, "CI", 80, ., .
	),
	Add Factor(
		Continuous, 55, 65, "SA", 0
	),
	Add Factor(
		Continuous, 0.3, 1.3, "M%", 0
	),
	Add Factor(
		Continuous, 14, 17, "Xf", 0
	),
	Add Factor(
		Continuous, 0.02, 1.4,
		"Ambient Temp", 0
	),
	Add Factor(
		Continuous, 3.5, 4.5, "pH", 0
	),
	Add Factor(
		Continuous, 8, 10, "Viscosity", 0
	), Set Random Seed( 103517925 )}
);
```

**Code Explanation**:

1. Start DOE process.
2. Select Custom Design.
3. Define response "Yield" to maximize.
4. Define response "MFI" to match target 198.
5. Define response "CI" to maximize, lower bound 80.
6. Add continuous factor "SA" from 55 to 65.
7. Add continuous factor "M%" from 0.3 to 1.3.
8. Add continuous factor "Xf" from 14 to 17.
9. Add continuous factor "Ambient Temp" from 0.02 to 1.4.
10. Add continuous factor "pH" from 3.5 to 4.5.
11. Add continuous factor "Viscosity" from 8 to 10.
12. Set random seed to 103517925.



### Example 64
> **Summary**: Automates a custom design of experiments (DOE) to optimize yield, match target MFI, and maximize CI, incorporating four continuous factors: SA, M%, Xf, and Ambient Temp.

<!-- Keywords: #JSLScripting, #DOE, #CustomDesign, #ContinuousFactors, #Simulation -->

**Code**:
```jsl
// DOE Dialog
DOE(
	Custom Design,
	{
	Add Response(
		Maximize, "Yield", 93, ., .
	),
	Add Response(
		Match Target, "MFI", ., 198, .
	),
	Add Response(
		Maximize, "CI", 80, ., .
	),
	Add Factor(
		Continuous, 55, 65, "SA", 0
	),
	Add Factor(
		Continuous, 0.3, 1.3, "M%", 0
	),
	Add Factor(
		Continuous, 14, 17, "Xf", 0
	),
	Add Factor(
		Continuous, 0.02, 1.4,
		"Ambient Temp", 0
	), Set Random Seed( 103517925 ),
	Number of Starts( 800 ),
	Add Term( {1, 0} ),
	Add Term( {1, 1} ),
	Add Term( {2, 1} ),
	Add Term( {3, 1} ),
	Add Term( {4, 1} ),
	Add Term( {1, 1}, {2, 1} ),
	Add Term( {1, 1}, {3, 1} ),
	Add Term( {1, 1}, {4, 1} ),
	Add Term( {2, 1}, {3, 1} ),
	Add Term( {2, 1}, {4, 1} ),
	Add Term( {3, 1}, {4, 1} ),
	Set Sample Size( 16 ), Make Design,
	Simulate Responses}
);
```

**Code Explanation**:

1. Define DOE parameters.
2. Add response: Maximize Yield.
3. Add response: Match Target MFI.
4. Add response: Maximize CI.
5. Add factor SA.
6. Add factor M%.
7. Add factor Xf.
8. Add factor Ambient Temp.
9. Set random seed.
10. Configure design and simulate responses.



### Example 65
> **Summary**: Automates the creation of a custom design for optimization using DOE, maximizing 'Yield', matching target 'MFI', and simulating responses.

<!-- Keywords: #JMPScriptingLanguage, #DOE, #Optimization, #CustomDesign, #Simulation -->

**Code**:
```jsl
// DOE Dialog
DOE(
	Custom Design,
	{
	Add Response(
		Maximize, "Yield", 93, ., .
	),
	Add Response(
		Match Target, "MFI", ., 198, .
	),
	Add Response(
		Maximize, "CI", 80, ., .
	),
	Add Factor(
		Continuous, 55, 65, "SA", 0
	),
	Add Factor(
		Continuous, 0.3, 1.3, "M%", 0
	),
	Add Factor(
		Continuous, 14, 17, "Xf", 0
	),
	Add Factor(
		Continuous, 0.02, 1.4,
		"Ambient Temp", 0
	), Set Random Seed( 103517925 ),
	Number of Starts( 6 ),
	Add Term( {1, 0} ),
	Add Term( {1, 1} ),
	Add Term( {2, 1} ),
	Add Term( {3, 1} ),
	Add Term( {4, 1} ),
	Add Term( {1, 2} ),
	Add Term( {1, 1}, {2, 1} ),
	Add Term( {2, 2} ),
	Add Term( {1, 1}, {3, 1} ),
	Add Term( {2, 1}, {3, 1} ),
	Add Term( {3, 2} ),
	Add Term( {1, 1}, {4, 1} ),
	Add Term( {2, 1}, {4, 1} ),
	Add Term( {3, 1}, {4, 1} ),
	Add Term( {4, 2} ),
	Set Sample Size( 21 ),
	Optimality Criterion( 2 ),
	Make Design, Simulate Responses}
);
```

**Code Explanation**:

1. Start DOE Custom Design.
2. Add response "Yield" to maximize.
3. Set "Yield" target to 93.
4. Add response "MFI" to match target.
5. Set "MFI" target to 198.
6. Add response "CI" to maximize.
7. Set "CI" target to 80.
8. Add continuous factor "SA" from 55 to 65.
9. Add continuous factor "M%" from 0.3 to 1.3.
10. Add continuous factor "Xf" from 14 to 17.
11. Add continuous factor "Ambient Temp" from 0.02 to 1.4.
12. Set random seed to 103517925.
13. Set number of starts to 6.
14. Add main effect for all factors.
15. Add interaction terms between factors.
16. Set sample size to 21.
17. Use D-optimality criterion.
18. Generate design and simulate responses.



### Example 66
> **Summary**: Automates the creation and simulation of a custom design of experiments (DOE) to optimize multiple responses, including 'Yield', 'MFI', and 'CI', using JMP's DOE dialog.

<!-- Keywords: #JMP, #DOE, #CustomDesign, #Optimization, #Simulation -->

**Code**:
```jsl
// DOE Dialog
DOE(
	Custom Design,
	{
	Add Response(
		Maximize, "Yield", ., ., .
	),
	Add Response(
		Match Target, "MFI", ., 198, .
	),
	Add Response(
		Maximize, "CI", 80, ., .
	),
	Add Factor(
		Continuous, 55, 65, "SA", 0
	),
	Add Factor(
		Continuous, 0.3, 1.3, "M%", 0
	),
	Add Factor(
		Continuous, 14, 17, "Xf", 0
	),
	Add Factor(
		Continuous, 0.02, 1.4,
		"Ambient Temp", 0
	),
	Add Factor(
		Continuous, 3.5, 4.5, "pH", 0
	),
	Add Factor(
		Continuous, 8, 10, "Viscosity", 0
	), Set Random Seed( 103517925 ),
	Number of Starts( 2 ),
	Add Term( {1, 0} ),
	Add Term( {1, 1} ),
	Add Term( {2, 1} ),
	Add Term( {3, 1} ),
	Add Term( {4, 1} ),
	Add Term( {5, 1} ),
	Add Term( {6, 1} ),
	Add Term( {1, 2} ),
	Add Term( {1, 1}, {2, 1} ),
	Add Term( {2, 2} ),
	Add Term( {1, 1}, {3, 1} ),
	Add Term( {2, 1}, {3, 1} ),
	Add Term( {3, 2} ),
	Add Term( {1, 1}, {4, 1} ),
	Add Term( {2, 1}, {4, 1} ),
	Add Term( {3, 1}, {4, 1} ),
	Add Term( {4, 2} ),
	Add Term( {1, 1}, {5, 1} ),
	Add Term( {2, 1}, {5, 1} ),
	Add Term( {3, 1}, {5, 1} ),
	Add Term( {4, 1}, {5, 1} ),
	Add Term( {5, 2} ),
	Add Term( {1, 1}, {6, 1} ),
	Add Term( {2, 1}, {6, 1} ),
	Add Term( {3, 1}, {6, 1} ),
	Add Term( {4, 1}, {6, 1} ),
	Add Term( {5, 1}, {6, 1} ),
	Add Term( {6, 2} ),
	Set Sample Size( 34 ),
	Optimality Criterion( 2 ),
	Make Design, Simulate Responses}
);
```

**Code Explanation**:

1. Open DOE dialog.
2. Select Custom Design.
3. Add response "Yield" to maximize.
4. Add response "MFI" to match target 198.
5. Add response "CI" to maximize with lower bound 80.
6. Add factor "SA" as continuous with range 55-65.
7. Add factor "M%" as continuous with range 0.3-1.3.
8. Add factor "Xf" as continuous with range 14-17.
9. Add factor "Ambient Temp" as continuous with range 0.02-1.4.
10. Add factor "pH" as continuous with range 3.5-4.5.
11. Add factor "Viscosity" as continuous with range 8-10.
12. Set random seed to 103517925.
13. Set number of starts to 2.
14. Add main effects for all factors.
15. Add interaction terms between factors.
16. Set sample size to 34.
17. Set optimality criterion to 2.
18. Make design.
19. Simulate responses.



### Example 67
> **Summary**: Automates the creation of a Definitive Screening Design in JMP, optimizing for Yield, matching target MFI, and maximizing CI.

<!-- Keywords: #JMPScriptingLanguage, #DefinitiveScreeningDesign, #Optimization, #FactorialDesign, #ExperimentalDesign -->

**Code**:
```jsl
// DOE Dialog
DOE(
	Definitive Screening Design,
	{
	Add Response(
		Maximize, "Yield", 93, ., .
	),
	Add Response(
		Match Target, "MFI", ., 198, .
	),
	Add Response(
		Maximize, "CI", 80, ., .
	),
	Add Factor(
		Continuous, 55, 65, "SA", 0
	),
	Add Factor(
		Continuous, 0.3, 1.3, "M%", 0
	),
	Add Factor(
		Continuous, 14, 17, "Xf", 0
	),
	Add Factor(
		Categorical,
		{"A", "B"},
		"Quarry",
		0
	),
	Add Factor(
		Continuous, 2.5, 7, "pH", 0
	),
	Add Factor(
		Continuous, 1000, 3000,
		"Vessel Size", 0
	), Make Design}
);
```

**Code Explanation**:

1. Open DOE dialog.
2. Select Definitive Screening Design.
3. Add response "Yield" to maximize.
4. Set "Yield" target to 93.
5. Add response "MFI" to match target.
6. Set "MFI" target to 198.
7. Add response "CI" to maximize.
8. Set "CI" target to 80.
9. Add continuous factor "SA" range 55-65.
10. Add continuous factor "M%" range 0.3-1.3.
11. Add continuous factor "Xf" range 14-17.
12. Add categorical factor "Quarry" levels A, B.
13. Add continuous factor "pH" range 2.5-7.
14. Add continuous factor "Vessel Size" range 1000-3000.
15. Generate design.



### Example 68
> **Summary**: Automates a Definitive Screening Design to optimize three responses: Yield, MFI, and CI, by adding continuous factors SA, M%, Xf, and Ambient Temp.

<!-- Keywords: #DefinitiveScreeningDesign, #JMPScriptingLanguage, #DOE, #Optimization, #ContinuousFactors -->

**Code**:
```jsl
// DOE Dialog
DOE(
	Definitive Screening Design,
	{
	Add Response(
		Maximize, "Yield", 93, ., .
	),
	Add Response(
		Match Target, "MFI", ., 198, .
	),
	Add Response(
		Maximize, "CI", 80, ., .
	),
	Add Factor(
		Continuous, 55, 65, "SA", 0
	),
	Add Factor(
		Continuous, 0.3, 1.3, "M%", 0
	),
	Add Factor(
		Continuous, 14, 17, "Xf", 0
	),
	Add Factor(
		Continuous, 0.02, 1.4,
		"Ambient Temp", 0
	), Make Design, Simulate Responses}
);
```

**Code Explanation**:

1. Define DOE dialog.
2. Use Definitive Screening Design.
3. Add response "Yield" to maximize.
4. Set "Yield" target to 93.
5. Add response "MFI" to match target.
6. Set "MFI" target to 198.
7. Add response "CI" to maximize.
8. Set "CI" target to 80.
9. Add continuous factor "SA" from 55 to 65.
10. Add continuous factor "M%" from 0.3 to 1.3.
11. Add continuous factor "Xf" from 14 to 17.
12. Add continuous factor "Ambient Temp" from 0.02 to 1.4.
13. Generate design.
14. Simulate responses.



### Example 69
> **Summary**: Automates the creation of a Definitive Screening Design in JMP, optimizing Yield, matching Target MFI, and maximizing CI through the addition of continuous factors.

<!-- Keywords: #JMPScriptingLanguage, #DefinitiveScreeningDesign, #Optimization, #ContinuousFactors, #DesignofExperiments -->

**Code**:
```jsl
// DOE Dialog
DOE(
	Definitive Screening Design,
	{
	Add Response(
		Maximize, "Yield", ., ., .
	),
	Add Response(
		Match Target, "MFI", ., 198, .
	),
	Add Response(
		Maximize, "CI", 80, ., .
	),
	Add Factor(
		Continuous, 55, 65, "SA", 0
	),
	Add Factor(
		Continuous, 0.3, 1.3, "M%", 0
	),
	Add Factor(
		Continuous, 14, 17, "Xf", 0
	),
	Add Factor(
		Continuous, 0.02, 1.4,
		"Ambient Temp", 0
	),
	Add Factor(
		Continuous, 3.5, 4.5, "pH", 0
	),
	Add Factor(
		Continuous, 8, 10, "Viscosity", 0
	), Make Design}
);
```

**Code Explanation**:

1. Open DOE dialog.
2. Select Definitive Screening Design.
3. Add response: Maximize Yield.
4. Add response: Match Target MFI.
5. Add response: Maximize CI.
6. Add continuous factor SA (55-65).
7. Add continuous factor M% (0.3-1.3).
8. Add continuous factor Xf (14-17).
9. Add continuous factor Ambient Temp (0.02-1.4).
10. Add continuous factor pH (3.5-4.5).
11. Add continuous factor Viscosity (8-10).
12. Generate design.



### Example 70
> **Summary**: Automates the design and setup of a Definitive Screening Design (DSD) experiment in JMP, defining response variables for maximization and target matching, as well as continuous and categorical factors.

<!-- Keywords: #JSLScripting, #DOE, #DefinitiveScreeningDesign, #ContinuousFactors, #CategoricalFactor -->

**Code**:
```jsl
// DOE: DSD for Follow-up Experiment
DOE(
	Definitive Screening Design,
	{
	Add Response(
		Maximize, "Yield", 93, ., .
	),
	Add Response(
		Match Target, "MFI", 192, 198, .
	),
	Add Response(
		Maximize, "CI", 80, ., .
	),
	Add Factor(
		Continuous, 55, 65, "SA", 0
	),
	Add Factor(
		Continuous, 0.3, 1.3, "M%", 0
	),
	Add Factor(
		Continuous, 14, 17, "Xf", 0
	),
	Add Factor(
		Categorical,
		{"A", "B"},
		"Quarry",
		0
	),
	Add Factor(
		Continuous, 2.5, 7, "pH", 0
	),
	Add Factor(
		Continuous, 1000, 3000,
		"Vessel Size", 0
	), Show Blocking Options( 0, 0 )}
);
```

**Code Explanation**:

1. Define DOE experiment.
2. Set design type to DSD.
3. Add response variable "Yield" for maximization.
4. Add response variable "MFI" for target matching.
5. Add response variable "CI" for maximization.
6. Add continuous factor "SA" with range 55-65.
7. Add continuous factor "M%" with range 0.3-1.3.
8. Add continuous factor "Xf" with range 14-17.
9. Add categorical factor "Quarry" with levels A, B.
10. Add continuous factor "pH" with range 2.5-7.



### Example 71
> **Summary**: Automates the creation of a Definitive Screening Design in JMP, optimizing for Yield, MFI, and CI while incorporating continuous and categorical factors.

<!-- Keywords: #JMPScriptingLanguage, #DefinitiveScreeningDesign, #Optimization, #DesignofExperiments, #DOE -->

**Code**:
```jsl
// DOE Dialog
DOE(
	Definitive Screening Design,
	{
	Add Response(
		Maximize, "Yield", 93, ., .
	),
	Add Response(
		Match Target, "MFI", 192, 198, .
	),
	Add Response(
		Maximize, "CI", 80, ., .
	),
	Add Factor(
		Continuous, 55, 65, "SA", 0
	),
	Add Factor(
		Continuous, 0.3, 1.3, "M%", 0
	),
	Add Factor(
		Continuous, 14, 17, "Xf", 0
	),
	Add Factor(
		Categorical,
		{"A", "B"},
		"Quarry",
		0
	),
	Add Factor(
		Continuous, 2.5, 7, "pH", 0
	),
	Add Factor(
		Continuous, 1000, 3000,
		"Vessel Size", 0
	), Make Design}
);
```

**Code Explanation**:

1. Open DOE dialog.
2. Select Definitive Screening Design.
3. Add response: Maximize Yield.
4. Set Yield target to 93.
5. Add response: Match Target MFI.
6. Set MFI target range 192 to 198.
7. Add response: Maximize CI.
8. Set CI target to 80.
9. Add continuous factor SA, range 55 to 65.
10. Add continuous factor M%, range 0.3 to 1.3.
11. Add continuous factor Xf, range 14 to 17.
12. Add categorical factor Quarry, levels A and B.
13. Add continuous factor pH, range 2.5 to 7.
14. Add continuous factor Vessel Size, range 1000 to 3000.
15. Generate design.



### Example 72
> **Summary**: Automates the creation of a custom Design of Experiments (DOE) to optimize Yield and Assay while minimizing Haze and Cost, utilizing continuous factors for Base, Carbamate, Toluene, Temperature, and Time.

<!-- Keywords: #JSL, #DOE, #CustomDesign, #Optimization, #ExperimentalDesign -->

**Code**:
```jsl
// DOE Dialog
DOE(
	Custom Design,
	{
	Add Response(
		Maximize, "Yield", 80, ., 1
	),
	Add Response(
		Maximize, "Assay", 98, ., 1
	),
	Add Response(
		Minimize, "Haze", ., 10, 1
	),
	Add Response(
		Minimize, "Cost", ., ., 1
	),
	Add Factor(
		Continuous, -1, 1, "Base", 0
	),
	Add Factor(
		Continuous, -1, 1, "Carbamate", 0
	),
	Add Factor(
		Continuous, -1, 1, "Toluene", 0
	),
	Add Factor(
		Continuous, -1, 1, "Temperature",
		0
	),
	Add Factor(
		Continuous, -1, 1, "Time", 0
	), Set Random Seed( 13174183 ),
	Number of Starts( 40 ),
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
	Add Alias Term( {1, 1}, {2, 1} ),
	Add Alias Term( {1, 1}, {3, 1} ),
	Add Alias Term( {1, 1}, {4, 1} ),
	Add Alias Term( {1, 1}, {5, 1} ),
	Add Alias Term( {2, 1}, {3, 1} ),
	Add Alias Term( {2, 1}, {4, 1} ),
	Add Alias Term( {2, 1}, {5, 1} ),
	Add Alias Term( {3, 1}, {4, 1} ),
	Add Alias Term( {3, 1}, {5, 1} ),
	Add Alias Term( {4, 1}, {5, 1} ),
	Set Sample Size( 16 ), Make Design,
	Center Points( 3 )}
);
```

**Code Explanation**:

1. Start DOE Custom Design.
2. Add response "Yield" to maximize.
3. Set "Yield" lower bound to 80.
4. Add response "Assay" to maximize.
5. Set "Assay" upper bound to 98.
6. Add response "Haze" to minimize.
7. Set "Haze" upper bound to 10.
8. Add response "Cost" to minimize.
9. Add continuous factor "Base".
10. Add continuous factor "Carbamate".
11. Add continuous factor "Toluene".
12. Add continuous factor "Temperature".
13. Add continuous factor "Time".
14. Set random seed to 13174183.
15. Set number of starts to 40.
16. Add main effect for each factor.
17. Add interaction terms between factors.
18. Add alias terms between factors.
19. Set sample size to 16.
20. Generate design.
21. Add 3 center points.



### Example 73
> **Summary**: Automates the creation of a custom design for DOE (Design of Experiments) analysis, incorporating categorical and continuous factors, with options to minimize responses and simulate responses.

<!-- Keywords: #JMPScriptingLanguage, #DOE, #CustomDesign, #FactorAnalysis, #Simulation -->

**Code**:
```jsl
// DOE Dialog
DOE(
	Custom Design,
	{
	Add Response(
		Minimize, "Bin 10", ., ., .
	),
	Add Factor(
		Categorical,
		{"L1", "L2", "L3", "L4"},
		"Split",
		0
	),
	Add Factor(
		Continuous, -1, 1,
		"451 Param Avg.", 0
	),
	Add Factor(
		Continuous, -1, 1,
		"164 Param Avg.", 0
	), Set Random Seed( 20699087 ),
	Number of Starts( 7393 ),
	Add Term( {1, 0} ),
	Add Term( {1, 1} ),
	Add Term( {2, 1} ),
	Add Term( {3, 1} ),
	Add Term( {1, 1}, {2, 1} ),
	Add Term( {2, 2} ),
	Add Term( {1, 1}, {3, 1} ),
	Add Term( {2, 1}, {3, 1} ),
	Add Term( {3, 2} ),
	Set Sample Size( 16 ),
	Optimality Criterion( 2 ),
	Simulate Responses, Make Design}
);
```

**Code Explanation**:

1. Open DOE dialog.
2. Select Custom Design.
3. Add response for minimization.
4. Add categorical factor with levels.
5. Add continuous factor "451 Param Avg."
6. Add continuous factor "164 Param Avg."
7. Set random seed for reproducibility.
8. Specify number of starts.
9. Add intercept term.
10. Add main effects terms.
11. Add interaction terms.
12. Set sample size.
13. Choose optimality criterion.
14. Simulate responses.
15. Generate design.



### Example 74
> **Summary**: Automates the creation of a custom design for a DOE experiment, specifying factors and terms to optimize response Y.

<!-- Keywords: #JMPScriptingLanguage, #DOEExperiment, #CustomDesign, #FactorDefinition, #TermSpecification -->

**Code**:
```jsl
// DOE Dialog
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

**Code Explanation**:

1. Initiate DOE dialog.
2. Select Custom Design.
3. Define response Y for maximization.
4. Add continuous factor X1 with range -1 to 1.
5. Add continuous factor X2 with range -1 to 1.
6. Add categorical factor X3 with 10 levels.
7. Set random seed for reproducibility.
8. Specify number of design starts.
9. Include intercept term in model.
10. Include interaction term between X3 and response.
11. Define alias terms for model terms.
12. Set whole plots and subplots.
13. Set sample size for design.
14. Generate design.
15. Create design table.



### Example 75
> **Summary**: Automates the creation of a custom design experiment with multiple responses, factors, and constraints using JMP's DOE dialog.

<!-- Keywords: #JMPDOE, #CustomDesign, #ResponseSurfaceMethodology, #ExperimentalDesign, #StatisticalModeling -->

**Code**:
```jsl
// DOE Dialog
DOE(
	Custom Design,
	{
	Add Response(
		"Maximize", "Yield", 90, ., 1
	),
	Add Response(
		"Maximize", "Assay", 98, ., 2
	),
	Add Response(
		"Minimize", "Impurity", ., 1, 3
	),
	Add Factor(
		Continuous, 0, 20, "Temperature",
		0
	),
	Add Factor(
		Continuous, 1, 2, "Time", 0
	),
	Add Factor(
		Continuous, 1, 2, "Amount", 0
	),
	Add Factor(
		Categorical,
		{"No", "Yes"},
		"Seed",
		0
	),
	Add Factor(
		Mixture, 0.2, 1, "Water", 0
	),
	Add Factor(
		Mixture, 0.15, 1, "Alcohol", 0
	),
	Add Factor(
		Mixture, 0.2, 0.6, "Ether", 0
	), Add Factor( Blocking, 6, "Day" ),
	Set Random Seed( 3833733 ),
	Number of Starts( 40 ),
	Add Term( {1, 1} ),
	Add Term( {2, 1} ),
	Add Term( {3, 1} ),
	Add Term( {4, 1} ),
	Add Term( {5, 1} ),
	Add Term( {6, 1} ),
	Add Term( {7, 1} ),
	Add Term( {8, 1} ),
	Set Sample Size( 12 ),
	Add Constraint(
		[0 0 0 0 -1 -1 -0.7]
	), Make Design}
);
```

**Code Explanation**:

1. Open DOE dialog.
2. Select Custom Design.
3. Add Yield response for maximization.
4. Add Assay response for maximization.
5. Add Impurity response for minimization.
6. Add Temperature continuous factor.
7. Add Time continuous factor.
8. Add Amount continuous factor.
9. Add Seed categorical factor.
10. Add Water mixture factor.
11. Add Alcohol mixture factor.
12. Add Ether mixture factor.
13. Add Day blocking factor.
14. Set random seed.
15. Set number of starts.
16. Add main effects for all factors.
17. Set sample size.
18. Add constraint.
19. Make design.



### Example 76
> **Summary**: Automates the creation of a space filling design in JMP, optimizing for maximum response 'Y' and configuring factor settings for continuous variables.

<!-- Keywords: #JMPScriptingLanguage, #SpaceFillingDesign, #DOEDialog, #FactorSettings, #Optimization -->

**Code**:
```jsl
// DOE Dialog
DOE(
	Space Filling Design,
	{
	Add Response(
		Maximize, "Y", ., ., .
	),
	Change Factor Settings(
		1, 1, 10, "Number Terms"
	),
	Change Factor Settings(
		2, 5, 15,
		"Minimum Split Per Tree"
	),
	Add Factor(
		Continuous, 100, 2000,
		"Maximum Split Per Tree", 0
	),
	Add Factor(
		Continuous, 0.4, 1,
		"Row Sampling Rate", 0
	),
	Add Factor(
		Continuous, 0.4, 1,
		"Column Sampling Rate", 0
	),
	Add Factor(
		Continuous, 100, 1000,
		"Number Trees", 0
	), Set Random Seed( 548678189 ),
	FFF Optimality Criterion( MaxPro ),
	Space Filling Design Type(
		Fast Flexible Filling, 60
	), Make Table}
);
```

**Code Explanation**:

1. Create DOE dialog.
2. Define space filling design.
3. Add maximize response "Y".
4. Set factor 1 range 1-10, name "Number Terms".
5. Set factor 2 range 5-15, name "Minimum Split Per Tree".
6. Add continuous factor, range 100-2000, name "Maximum Split Per Tree".
7. Add continuous factor, range 0.4-1, name "Row Sampling Rate".
8. Add continuous factor, range 0.4-1, name "Column Sampling Rate".
9. Add continuous factor, range 100-1000, name "Number Trees".
10. Set random seed 548678189.



### Example 77
> **Summary**: Automates a Space Filling Design process to optimize response 'Y' by maximizing it, with specified factor settings and continuous factors added.

<!-- Keywords: #JSLScripting, #SpaceFillingDesign, #DOE, #Optimization, #JMPScriptingLanguage -->

**Code**:
```jsl
// DOE Dialog
DOE(
	Space Filling Design,
	{
	Add Response(
		Maximize, "Y", ., ., .
	),
	Change Factor Settings(
		1, 1, 10, "Number Terms"
	),
	Change Factor Settings(
		2, 5, 15,
		"Minimum Split Per Tree"
	),
	Add Factor(
		Continuous, 100, 2000,
		"Maximum Split Per Tree", 0
	),
	Add Factor(
		Continuous, 0.4, 1,
		"Row Sampling Rate", 0
	),
	Add Factor(
		Continuous, 0.4, 1,
		"Column Sampling Rate", 0
	),
	Add Factor(
		Continuous, 100, 1000,
		"Number Trees", 0
	), Set Random Seed( 588569099 ),
	FFF Optimality Criterion( MaxPro ),
	Space Filling Design Type(
		Fast Flexible Filling, 10
	), Set Run Order( Randomize ),
	Make Table}
);
```

**Code Explanation**:

1. Start DOE process.
2. Use Space Filling Design.
3. Add response for maximization.
4. Set factor 1 settings.
5. Set factor 2 settings.
6. Add continuous factor "Maximum Split Per Tree".
7. Add continuous factor "Row Sampling Rate".
8. Add continuous factor "Column Sampling Rate".
9. Add continuous factor "Number Trees".
10. Generate and display design table.



### Example 78
> **Summary**: Automates the creation of a custom design experiment with four continuous factors, utilizing the DOE dialog in JMP.

<!-- Keywords: #JMPDOE, #CustomDesign, #ContinuousFactors, #ExperimentalDesign, #Simulation -->

**Code**:
```jsl
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
	),
	Add Factor(
		Continuous, -1, 1, "X4", 0
	), Set Random Seed( 3803118 ),
	Number of Starts( 1 ),
	Add Term( {1, 0} ),
	Add Term( {1, 1} ),
	Add Term( {2, 1} ),
	Add Term( {3, 1} ),
	Add Term( {4, 1} ),
	Add Alias Term( {1, 1}, {2, 1} ),
	Add Alias Term( {1, 1}, {3, 1} ),
	Add Alias Term( {1, 1}, {4, 1} ),
	Add Alias Term( {2, 1}, {3, 1} ),
	Add Alias Term( {2, 1}, {4, 1} ),
	Add Alias Term( {3, 1}, {4, 1} ),
	Set Sample Size( 12 ),
	Simulate Responses( 0 ),
	Save X Matrix( 0 ), Make Design}
);
```

**Code Explanation**:

1. Open DOE dialog.
2. Select Custom Design.
3. Add response: Maximize Y.
4. Add factor X1, continuous, range -1 to 1.
5. Add factor X2, continuous, range -1 to 1.
6. Add factor X3, continuous, range -1 to 1.
7. Add factor X4, continuous, range -1 to 1.
8. Set random seed 3803118.
9. Set number of starts to 1.
10. Define design terms and aliases, set sample size 12.



### Example 79
> **Summary**: Automates the design of experiments (DOE) process using a Custom Design method, maximizing response 'Y' and incorporating continuous factors X1 to X4.

<!-- Keywords: #JSLScriptingLanguage, #DesignOfExperiments, #CustomDesign, #ContinuousFactors, #RandomizedRunOrder -->

**Code**:
```jsl
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
	),
	Add Factor(
		Continuous, -1, 1, "X4", 0
	), Set Random Seed( 1533566117 ),
	Number of Starts( 141 ),
	Add Term( {1, 0} ),
	Add Term( {1, 1} ),
	Add Term( {2, 1} ),
	Add Term( {3, 1} ),
	Add Term( {4, 1} ),
	Add Alias Term( {1, 1}, {2, 1} ),
	Add Alias Term( {1, 1}, {3, 1} ),
	Add Alias Term( {1, 1}, {4, 1} ),
	Add Alias Term( {2, 1}, {3, 1} ),
	Add Alias Term( {2, 1}, {4, 1} ),
	Add Alias Term( {3, 1}, {4, 1} ),
	Set Sample Size( 14 ),
	Simulate Responses( 0 ),
	Save X Matrix( 0 ), Make Design,
	Set Run Order( Randomize ),
	Make Table}
);
```

**Code Explanation**:

1. Initiate DOE process.
2. Use Custom Design method.
3. Define response to maximize ("Y").
4. Add continuous factor "X1".
5. Add continuous factor "X2".
6. Add continuous factor "X3".
7. Add continuous factor "X4".
8. Set random seed for reproducibility.
9. Specify number of design starts.
10. Include main effects for all factors.
11. Include alias terms for interactions.
12. Set sample size.
13. Disable response simulation.
14. Disable saving X matrix.
15. Generate design.
16. Randomize run order.
17. Create final design table.



### Example 80
> **Summary**: Automates the creation of a custom design in JMP, incorporating continuous factors and alias terms to optimize response maximization.

<!-- Keywords: #JMPScriptingLanguage, #CustomDesign, #ContinuousFactors, #AliasTerms, #ResponseMaximization -->

**Code**:
```jsl
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
	),
	Add Factor(
		Continuous, -1, 1, "X4", 0
	), Set Random Seed( 1906185792 ),
	Number of Starts( 1 ),
	Add Term( {1, 0} ),
	Add Term( {1, 1} ),
	Add Term( {2, 1} ),
	Add Term( {3, 1} ),
	Add Term( {4, 1} ),
	Add Alias Term( {1, 1}, {2, 1} ),
	Add Alias Term( {1, 1}, {3, 1} ),
	Add Alias Term( {1, 1}, {4, 1} ),
	Add Alias Term( {2, 1}, {3, 1} ),
	Add Alias Term( {2, 1}, {4, 1} ),
	Add Alias Term( {3, 1}, {4, 1} ),
	Set Sample Size( 16 ),
	Simulate Responses( 0 ),
	Save X Matrix( 0 ), Make Design,
	Set Run Order( Randomize ),
	Make Table}
);
```

**Code Explanation**:

1. Start DOE dialog.
2. Select Custom Design.
3. Add response to maximize.
4. Add continuous factor X1.
5. Add continuous factor X2.
6. Add continuous factor X3.
7. Add continuous factor X4.
8. Set random seed.
9. Set number of starts.
10. Add main effects and interactions.
11. Add alias terms.
12. Set sample size.
13. Disable response simulation.
14. Disable saving X matrix.
15. Generate design.
16. Randomize run order.
17. Create data table.



### Example 81
> **Summary**: Automates the design of a custom experiment with four continuous factors, maximizing a response variable and generating a randomized run order.

<!-- Keywords: #JSLScripting, #DOEDesign, #CustomExperiment, #ContinuousFactors, #RandomizedRunOrder -->

**Code**:
```jsl
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
	),
	Add Factor(
		Continuous, -1, 1, "X4", 0
	), Set Random Seed( 2076006612 ),
	Number of Starts( 91 ),
	Add Term( {1, 0} ),
	Add Term( {1, 1} ),
	Add Term( {2, 1} ),
	Add Term( {3, 1} ),
	Add Term( {4, 1} ),
	Add Alias Term( {1, 1}, {2, 1} ),
	Add Alias Term( {1, 1}, {3, 1} ),
	Add Alias Term( {1, 1}, {4, 1} ),
	Add Alias Term( {2, 1}, {3, 1} ),
	Add Alias Term( {2, 1}, {4, 1} ),
	Add Alias Term( {3, 1}, {4, 1} ),
	Set Sample Size( 18 ),
	Simulate Responses( 0 ),
	Save X Matrix( 0 ), Make Design,
	Set Run Order( Randomize ),
	Make Table}
);
```

**Code Explanation**:

1. Start DOE process.
2. Select Custom Design.
3. Define response to maximize.
4. Add continuous factor X1.
5. Add continuous factor X2.
6. Add continuous factor X3.
7. Add continuous factor X4.
8. Set random seed for reproducibility.
9. Specify number of design starts.
10. Add main effects for all factors.
11. Add alias terms for interaction effects.
12. Set sample size.
13. Disable response simulation.
14. Disable X matrix saving.
15. Generate the design.
16. Randomize run order.
17. Create the design table.



### Example 82
> **Summary**: Automates the creation of a Definitive Screening Design (DSD) for optimizing response Y, incorporating five continuous factors X1 to X5, and specifying additional design parameters.

<!-- Keywords: #JSLScriptingLanguage, #DOEDesign, #DefinitiveScreeningDesign, #ContinuousFactors, #ExperimentalDesign -->

**Code**:
```jsl
// DOE Dialog
DOE(
	Definitive Screening Design,
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
	),
	Add Factor(
		Continuous, -1, 1, "X4", 0
	),
	Add Factor(
		Continuous, -1, 1, "X5", 0
	), Show Blocking Options( 0, 0 ),
	Number of Extra Runs( 4 ),
	Set Random Seed( 131982 ),
	Make Design,
	Simulate Responses(
		1,
		Random Seed( -1 )
	), Save X Matrix( 0 )}
);
```

**Code Explanation**:

1. Define DOE parameters.
2. Set response type to maximize.
3. Add continuous factor X1.
4. Add continuous factor X2.
5. Add continuous factor X3.
6. Add continuous factor X4.
7. Add continuous factor X5.
8. Disable blocking options.
9. Specify 4 extra runs.
10. Set random seed to 131982.



### Example 83
> **Summary**: Automates a custom design of experiments (DOE) process in JMP, defining response variable NOx and adding multiple continuous factors for simulation.

<!-- Keywords: #JMPScriptingLanguage, #CustomDesignofExperiments, #Simulation, #Optimization, #ExperimentalDesign -->

**Code**:
```jsl
// DOE Dialog
DOE(
	Custom Design,
	{
	Add Response(
		Maximize, "NOx", ., ., .
	),
	Add Factor(
		Continuous, 0, 6,
		"Hydrogen Fraction", 0
	),
	Add Factor(
		Continuous, 1.05, 1.3,
		"Air/Fuel Ratio", 0
	),
	Add Factor(
		Continuous, 21, 25,
		"Lance Position X", 0
	),
	Add Factor(
		Continuous, 5, 10,
		"Lance Position Y", 0
	),
	Add Factor(
		Continuous, 0, 6,
		"Secondary Fuel Fraction", 0
	),
	Add Factor(
		Continuous, 0.5, 1.5,
		"Dispersant", 0
	),
	Add Factor(
		Continuous, 0, 10, "Ethanol", 0
	), Set Random Seed( 338785861 ),
	Number of Starts( 1468 ),
	Add Potential Term( {1, 0} ),
	Add Term( {1, 1} ),
	Add Term( {2, 1} ),
	Add Term( {3, 1} ),
	Add Term( {4, 1} ),
	Add Term( {5, 1} ),
	Add Term( {6, 1} ),
	Add Term( {7, 1} ),
	Add Term( {1, 2} ),
	Add Potential Term( {1, 1}, {2, 1} ),
	Add Term( {2, 2} ),
	Add Potential Term( {1, 1}, {3, 1} ),
	Add Potential Term( {2, 1}, {3, 1} ),
	Add Term( {3, 2} ),
	Add Potential Term( {1, 1}, {4, 1} ),
	Add Potential Term( {2, 1}, {4, 1} ),
	Add Potential Term( {3, 1}, {4, 1} ),
	Add Term( {4, 2} ),
	Add Potential Term( {1, 1}, {5, 1} ),
	Add Potential Term( {2, 1}, {5, 1} ),
	Add Potential Term( {3, 1}, {5, 1} ),
	Add Potential Term( {4, 1}, {5, 1} ),
	Add Potential Term( {5, 2} ),
	Add Potential Term( {1, 1}, {6, 1} ),
	Add Potential Term( {2, 1}, {6, 1} ),
	Add Potential Term( {3, 1}, {6, 1} ),
	Add Potential Term( {4, 1}, {6, 1} ),
	Add Potential Term( {5, 1}, {6, 1} ),
	Add Potential Term( {6, 2} ),
	Add Potential Term( {1, 1}, {7, 1} ),
	Add Potential Term( {2, 1}, {7, 1} ),
	Add Potential Term( {3, 1}, {7, 1} ),
	Add Potential Term( {4, 1}, {7, 1} ),
	Add Potential Term( {5, 1}, {7, 1} ),
	Add Potential Term( {6, 1}, {7, 1} ),
	Add Potential Term( {7, 2} ),
	Center Points( 2 ),
	Set Sample Size( 32 ),
	Optimality Criterion( 2 ),
	Simulate Responses}
);
```

**Code Explanation**:

1. Start DOE process.
2. Select Custom Design.
3. Define response variable NOx.
4. Add Hydrogen Fraction factor.
5. Add Air/Fuel Ratio factor.
6. Add Lance Position X factor.
7. Add Lance Position Y factor.
8. Add Secondary Fuel Fraction factor.
9. Add Dispersant factor.
10. Add Ethanol factor.
11. Set random seed.
12. Specify number of starts.
13. Add potential interaction terms.
14. Add main effect terms.
15. Add squared terms.
16. Add two center points.
17. Set sample size.
18. Choose optimality criterion.
19. Simulate responses.



### Example 84
> **Summary**: Automates the design and generation of a custom experiment with 32 runs, optimizing for maximum response Y, incorporating factors Dichloromethane, Methanol, and Sample Volume, and utilizing randomization for reproducibility.

<!-- Keywords: #JSL, #DOE, #CustomDesign, #Optimization, #ExperimentDesign -->

**Code**:
```jsl
// DOE Dialog
DOE(
	Custom Design,
	{
	Add Response(
		Maximize, "Y", ., ., .
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
	), Set Random Seed( 1145917887 ),
	Number of Starts( 13717 ),
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
	Optimality Criterion( 2 ),
	Make Design,
	Set Run Order( Randomize ),
	Make Table}
);
```

**Code Explanation**:

1. Initiate DOE process.
2. Select Custom Design.
3. Define response: Maximize Y.
4. Add factor: Dichloromethane, range 110-150.
5. Add factor: Methanol, range 400-600.
6. Add factor: Sample Volume, range 3-7.
7. Set random seed for reproducibility.
8. Specify number of starts for optimization.
9. Add main effects terms.
10. Add interaction and quadratic terms.
11. Set sample size to 32.
12. Choose optimality criterion.
13. Generate design.
14. Randomize run order.
15. Create data table.



### Example 85
> **Summary**: Automates the creation of a full factorial design with multiple continuous factors and a response variable, utilizing JMP's DOE dialog to generate a data table.

<!-- Keywords: #JMPScriptingLanguage, #FullFactorialDesign, #ContinuousFactors, #ResponseVariable, #DOEDialog -->

**Code**:
```jsl
// DOE Dialog
DOE(
	Full Factorial Design,
	{
	Add Response(
		Maximize, "Proportion Reacted",
		90, 100, 1
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

**Code Explanation**:

1. Open DOE dialog.
2. Choose Full Factorial Design.
3. Add response variable.
4. Set response goal to maximize.
5. Name response "Proportion Reacted".
6. Define response limits 90 to 100.
7. Set response standard deviation to 1.
8. Add continuous factor "Feed Rate".
9. Define "Feed Rate" range 10 to 15.
10. Add continuous factor "Catalyst".
11. Define "Catalyst" range 1 to 2.
12. Add continuous factor "Stir Rate".
13. Define "Stir Rate" range 100 to 120.
14. Add continuous factor "Temperature".
15. Define "Temperature" range 140 to 180.
16. Add continuous factor "Concentration".
17. Define "Concentration" range 3 to 6.
18. Set random seed to 12345.
19. Generate design.
20. Create data table.



### Example 86
> **Summary**: Automates the creation of a custom design for a DOE experiment with four continuous factors, utilizing the JMP DOE dialog to define model terms and optimize the design.

<!-- Keywords: #JMPDOE, #CustomDesign, #ContinuousFactors, #ModelTerms, #Optimization -->

**Code**:
```jsl
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
	),
	Add Factor(
		Continuous, -1, 1, "X4", 0
	), Set Random Seed( 308514798 ),
	Number of Starts( 31958 ),
	Add Term( {1, 0} ),
	Add Term( {1, 1} ),
	Add Term( {2, 1} ),
	Add Term( {3, 1} ),
	Add Term( {4, 1} ),
	Add Term( {1, 2} ),
	Add Term( {1, 1}, {2, 1} ),
	Add Term( {2, 2} ),
	Add Term( {1, 1}, {3, 1} ),
	Add Term( {2, 1}, {3, 1} ),
	Add Term( {3, 2} ),
	Add Term( {1, 1}, {4, 1} ),
	Add Term( {2, 1}, {4, 1} ),
	Add Term( {3, 1}, {4, 1} ),
	Add Term( {4, 2} ),
	Set Sample Size( 16 ),
	Optimality Criterion( 2 ),
	Simulate Responses( 0 ),
	Save X Matrix( 0 ), Make Design}
);
```

**Code Explanation**:

1. Open DOE dialog.
2. Select Custom Design.
3. Add response to maximize.
4. Add continuous factor X1.
5. Add continuous factor X2.
6. Add continuous factor X3.
7. Add continuous factor X4.
8. Set random seed.
9. Set number of starts.
10. Define model terms.
11. Set sample size.
12. Set optimality criterion.
13. Disable response simulation.
14. Disable X matrix saving.
15. Create design.



### Example 87
> **Summary**: Automates the creation of a custom design experiment in JMP, defining factors for Solvent, Active, and Water, and configuring simulation settings.

<!-- Keywords: #JMPScriptingLanguage, #CustomDesignExperiment, #FactorDefinition, #SimulationSettings, #DesignGeneration -->

**Code**:
```jsl
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
	), Set Random Seed( 1544088351 ),
	Number of Starts( 2072 ),
	Add Term( {1, 1} ),
	Add Term( {2, 1} ),
	Add Term( {3, 1} ),
	Add Term( {1, 1}, {2, 1}, {3, 1} ),
	Add Term( {1, 1}, {2, 1} ),
	Add Term( {1, 1}, {3, 1} ),
	Add Term( {2, 1}, {3, 1} ),
	Set Sample Size( 32 ),
	Simulate Responses( 0 ),
	Save X Matrix( 0 ), Make Design,
	Set Run Order( Randomize ),
	Make Table}
);
```

**Code Explanation**:

1. Open DOE dialog.
2. Select Custom Design.
3. Add response variable "Y".
4. Define "Solvent" factor.
5. Define "Active" factor.
6. Define "Water" factor.
7. Set random seed.
8. Set number of starts.
9. Add main effects terms.
10. Add interaction terms.
11. Set sample size.
12. Disable response simulation.
13. Disable X matrix saving.
14. Generate design.
15. Randomize run order.
16. Create design table.



### Example 88
> **Summary**: Automates the design of a custom mixture experiment using JMP's DOE Dialog, optimizing for I-optimality and generating a randomized run order.

<!-- Keywords: #JMPDOE, #CustomDesign, #MixtureExperiment, #Optimization, #ExperimentalDesign -->

**Code**:
```jsl
// DOE Dialog
DOE(
	Custom Design,
	{
	Add Response(
		Maximize, "Y", ., ., .
	),
	Add Factor( Mixture, 0, 1, "A", 0 ),
	Add Factor( Mixture, 0, 1, "B", 0 ),
	Add Factor( Mixture, 0, 1, "C", 0 ),
	Set Random Seed( 802670610 ),
	Number of Starts( 3198 ),
	Add Term( {1, 1} ),
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
	Optimality Criterion(
		"Make I-Optimal Design"n
	), Simulate Responses( 0 ),
	Save X Matrix( 0 ), Make Design,
	Set Run Order( Randomize ),
	Make Table}
);
```

**Code Explanation**:

1. Start DOE process.
2. Use Custom Design.
3. Add response to maximize.
4. Define factor A as mixture.
5. Define factor B as mixture.
6. Define factor C as mixture.
7. Set random seed for reproducibility.
8. Specify number of starts.
9. Add main effect terms.
10. Add interaction terms.
11. Set sample size.
12. Optimize design for I-optimality.
13. Do not simulate responses.
14. Do not save X matrix.
15. Generate design.
16. Randomize run order.
17. Create data table.



### Example 89
> **Summary**: Automates the design of experiments (DOE) process for a custom mixture problem, defining factors and constraints to optimize response variables.

<!-- Keywords: #JSLScripting, #DOE, #MixtureDesign, #CustomDesign, #ExperimentalDesign -->

**Code**:
```jsl
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

**Code Explanation**:

1. Initiate DOE process.
2. Select Custom Design.
3. Define response to maximize.
4. Add mixture factor "Solvent".
5. Add mixture factor "Active".
6. Add mixture factor "Water".
7. Set random seed for reproducibility.
8. Specify number of design starts.
9. Add design constraints.
10. Include all main effects and interactions.



### Example 90
> **Summary**: Automates the creation of a custom design for DOE analysis, adding response 'Y' to maximize and incorporating continuous factors 'X1', 'X2', and 'X3'.

<!-- Keywords: #JMPScriptingLanguage, #DOEAnalysis, #CustomDesign, #ContinuousFactors, #RandomSeed -->

**Code**:
```jsl
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

**Code Explanation**:

1. Start DOE dialog.
2. Select Custom Design.
3. Add response "Y" to maximize.
4. Add continuous factor "X1".
5. Add continuous factor "X2".
6. Add continuous factor "X3".
7. Set random seed.
8. Specify number of starts.
9. Add main effect terms.
10. Add interaction terms.
11. Set sample size.
12. Disable response simulation.
13. Disable X matrix saving.
14. Generate design.



### Example 91
> **Summary**: Automates the creation of a Definitive Screening Design in JMP, adding continuous factors X1 to X6 and maximizing response Y.

<!-- Keywords: #JMPScriptingLanguage, #DefinitiveScreeningDesign, #ContinuousFactors, #DesignofExperiments, #DOE -->

**Code**:
```jsl
// DOE Dialog
DOE(
	Definitive Screening Design,
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
	),
	Add Factor(
		Continuous, -1, 1, "X4", 0
	),
	Add Factor(
		Continuous, -1, 1, "X5", 0
	),
	Add Factor(
		Continuous, -1, 1, "X6", 0
	), Show Blocking Options( 0, 0 ),
	Number of Extra Runs( 0 ),
	Set Random Seed( 524050865 ),
	Make Design, Make Table}
);
```

**Code Explanation**:

1. Open DOE dialog.
2. Select Definitive Screening Design.
3. Add response "Y" to maximize.
4. Add continuous factor "X1".
5. Add continuous factor "X2".
6. Add continuous factor "X3".
7. Add continuous factor "X4".
8. Add continuous factor "X5".
9. Add continuous factor "X6".
10. Generate and display design table.



### Example 92
> **Summary**: Automates the creation of a Definitive Screening Design with six continuous factors and one response variable, utilizing JMP's DOE dialog.

<!-- Keywords: #JMPScriptingLanguage, #DOEDesign, #DefinitiveScreeningDesign, #ContinuousFactors, #ResponseVariable -->

**Code**:
```jsl
// DOE Dialog
DOE(
	Definitive Screening Design,
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
	),
	Add Factor(
		Continuous, -1, 1, "X4", 0
	),
	Add Factor(
		Continuous, -1, 1, "X5", 0
	),
	Add Factor(
		Continuous, -1, 1, "X6", 0
	), Show Blocking Options( 0, 0 ),
	Number of Extra Runs( 4 ),
	Set Random Seed( 1217955066 ),
	Make Design}
);
```

**Code Explanation**:

1. Open DOE dialog.
2. Select Definitive Screening Design.
3. Add response variable Y.
4. Add continuous factor X1.
5. Add continuous factor X2.
6. Add continuous factor X3.
7. Add continuous factor X4.
8. Add continuous factor X5.
9. Add continuous factor X6.
10. Generate design with settings.



### Example 93
> **Summary**: Automates the creation of a custom design for a continuous response variable Y, incorporating two continuous factors: Number Trees and Number Terms, with optimized sample size and optimality criterion.

<!-- Keywords: #JSLScriptingLanguage, #CustomDesign, #ContinuousResponseVariable, #OptimizationCriteria, #SampleSize -->

**Code**:
```jsl
// DOE Dialog
DOE(
	Custom Design,
	{
	Add Response(
		Maximize, "Y", ., ., .
	),
	Add Factor(
		Continuous, 100, 1000,
		"Number Trees", 0
	),
	Add Factor(
		Continuous, 2, 5, "Number Terms",
		0
	), Set Random Seed( 1335293222 ),
	Number of Starts( 34388 ),
	Add Term( {1, 0} ),
	Add Term( {1, 1} ),
	Add Term( {2, 1} ),
	Add Term( {1, 2} ),
	Add Term( {1, 1}, {2, 1} ),
	Add Term( {2, 2} ),
	Set Sample Size( 12 ),
	Optimality Criterion( 2 ),
	Make Design}
);
```

**Code Explanation**:

1. Open DOE dialog.
2. Select Custom Design.
3. Add response variable Y.
4. Add continuous factor Number Trees.
5. Add continuous factor Number Terms.
6. Set random seed.
7. Define number of starts.
8. Add linear term for Number Trees.
9. Add quadratic term for Number Trees.
10. Add interaction term between factors.
11. Set sample size.
12. Set optimality criterion.
13. Generate design.



### Example 94
> **Summary**: Automates a custom design of experiments (DOE) process to optimize multiple responses, including yield, MFI, and CI, while controlling various continuous and categorical factors.

<!-- Keywords: #JSLScriptingLanguage, #CustomDesignOfExperiments, #DOE, #JMPPlatform, #ExperimentalDesign -->

**Code**:
```jsl
// Custom Design
DOE(
	Custom Design,
	{
	Add Response(
		Maximize, "Yield", ., ., .
	),
	Add Response(
		Match Target, "MFI", ., 198, .
	),
	Add Response(
		Maximize, "CI", 80, ., .
	),
	Add Factor(
		Continuous, 50, 80, "SA", 0
	),
	Add Factor(
		Continuous, 0, 3.7, "M%", 0
	),
	Add Factor(
		Continuous, 13, 19, "Xf", 0
	),
	Add Factor(
		Categorical,
		{"Umbogo A", "Kuanga B",
		"Kuanga A"},
		"Quarry",
		0
	),
	Add Factor(
		Continuous, 2, 6.5, "pH", 0
	),
	Add Factor(
		Continuous, 6.5, 7.5, "Viscosity",
		0
	),
	Add Factor(
		Continuous, 5, 25, "Ambient Temp",
		0
	),
	Add Factor(
		Categorical,
		{"A", "B", "C", "D"},
		"Shift",
		0
	), Set Random Seed( 103517925 )}
);
```

**Code Explanation**:

1. Initiate DOE process.
2. Define Custom Design.
3. Add response: Maximize Yield.
4. Add response: Match Target MFI.
5. Add response: Maximize CI.
6. Add continuous factor SA.
7. Add continuous factor M%.
8. Add continuous factor Xf.
9. Add categorical factor Quarry.
10. Add continuous factor pH.
11. Add continuous factor Viscosity.
12. Add continuous factor Ambient Temp.
13. Add categorical factor Shift.
14. Set random seed 103517925.



### Example 95
> **Summary**: Automates the creation of a Definitive Screening Design (DSD) in JMP, defining multiple responses and factors to optimize experimental design.

<!-- Keywords: #JMPScriptingLanguage, #DefinitiveScreeningDesign, #ExperimentalDesign, #Optimization, #DOE -->

**Code**:
```jsl
// DSD
DOE(
	Definitive Screening Design,
	{
	Add Response(
		Maximize, "Yield", ., ., .
	),
	Add Response(
		Match Target, "MFI", ., 198, .
	),
	Add Response(
		Maximize, "CI", 80, ., .
	),
	Add Factor(
		Continuous, 50, 80, "SA", 0
	),
	Add Factor(
		Continuous, 0, 3.7, "M%", 0
	),
	Add Factor(
		Continuous, 13, 19, "Xf", 0
	),
	Add Factor(
		Categorical,
		{"Umbogo A", "Kuanga B",
		"Kuanga A"},
		"Quarry",
		0
	),
	Add Factor(
		Continuous, 2, 6.5, "pH", 0
	),
	Add Factor(
		Continuous, 6.5, 7.5, "Viscosity",
		0
	),
	Add Factor(
		Continuous, 5, 25, "Ambient Temp",
		0
	),
	Add Factor(
		Categorical,
		{"A", "B", "C", "D"},
		"Shift",
		0
	), Set Random Seed( 103517925 )}
);
```

**Code Explanation**:

1. Create a new DOE.
2. Define a Definitive Screening Design.
3. Add response "Yield" to maximize.
4. Add response "MFI" to match target 198.
5. Add response "CI" to maximize, lower bound 80.
6. Add continuous factor "SA" range 50-80.
7. Add continuous factor "M%" range 0-3.7.
8. Add continuous factor "Xf" range 13-19.
9. Add categorical factor "Quarry" with levels.
10. Add continuous factor "pH" range 2-6.5.
11. Add continuous factor "Viscosity" range 6.5-7.5.
12. Add continuous factor "Ambient Temp" range 5-25.
13. Add categorical factor "Shift" with levels.
14. Set random seed to 103517925.



### Example 96
> **Summary**: Automates a custom design of experiments (DOE) to optimize two responses: 'Number Popped' and 'Total Kernels', considering three factors: categorical 'Brand', continuous 'Time', and continuous 'Power'.

<!-- Keywords: #JSLScripting, #CustomDOE, #Optimization, #FactorialDesign, #Experimentation -->

**Code**:
```jsl
// 
DOE(
	Custom Design,
	{
	Add Response(
		Maximize, "Number Popped", ., .,
		.
	),
	Add Response(
		Maximize, "Total Kernels", ., .,
		.
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
	), Set Random Seed( 1117081326 ),
	Add Constraint( [1 1 13, -1 -1 -10] ),
	Add Term( {1, 0} ),
	Add Term( {1, 1} ),
	Add Term( {2, 1} ),
	Add Term( {3, 1} ),
	Add Term( {1, 1}, {2, 1} ),
	Add Term( {2, 2} ),
	Add Term( {1, 1}, {3, 1} ),
	Add Term( {2, 1}, {3, 1} ),
	Add Term( {3, 2} ),
	Set Sample Size( 16 ),
	Optimality Criterion( 2 ),
	Simulate Responses( 0 ),
	Save X Matrix( 0 )}
);
```

**Code Explanation**:

1. Define DOE with Custom Design.
2. Add response "Number Popped" to maximize.
3. Add response "Total Kernels" to maximize.
4. Add categorical factor "Brand" with levels "Top Secret", "Wilbur".
5. Add continuous factor "Time" from 3 to 5.
6. Add continuous factor "Power" from 5 to 10.
7. Set random seed for reproducibility.
8. Add constraint on factors.
9. Add main effects for all factors.
10. Add interaction terms between factors.



### Example 97
> **Summary**: Automates the design of experiments (DOE) process using a custom design to maximize conversion, incorporating continuous and categorical factors, and configuring model terms for interactions.

<!-- Keywords: #JSLScriptingLanguage, #DesignOfExperiments, #CustomDesign, #ContinuousFactor, #CategoricalFactor -->

**Code**:
```jsl
// DOE Dialog
DOE(
	Custom Design,
	{
	Add Response(
		Maximize, "Conversion", ., ., .
	),
	Add Factor(
		Continuous, 40, 60, "Temp", 0
	),
	Add Factor(
		Continuous, 2, 20, "Pd (eq)", 0
	),
	Add Factor(
		Continuous, 100, 1500,
		"Base (eq)", 0
	),
	Add Factor(
		Categorical,
		{"pyrimidyl", "pyridyl"},
		"Boronic Acid Type",
		0
	), Set Random Seed( 346162045 ),
	Number of Starts( 10000 ),
	Add Term( {1, 0} ),
	Add Term( {1, 1} ),
	Add Term( {2, 1} ),
	Add Term( {3, 1} ),
	Add Term( {4, 1} ),
	Add Term( {1, 2} ),
	Add Term( {1, 1}, {2, 1} ),
	Add Term( {2, 2} ),
	Add Term( {1, 1}, {3, 1} ),
	Add Term( {2, 1}, {3, 1} ),
	Add Term( {3, 2} ),
	Add Term( {1, 1}, {4, 1} ),
	Add Term( {2, 1}, {4, 1} ),
	Add Term( {3, 1}, {4, 1} ),
	Set Sample Size( 20 ),
	Optimality Criterion( 2 ),
	Simulate Responses( 0 ),
	Save X Matrix( 0 ), Make Design}
);
```

**Code Explanation**:

1. Initiate DOE process.
2. Select Custom Design.
3. Define response: Maximize Conversion.
4. Add continuous factor Temp (40-60).
5. Add continuous factor Pd (eq) (2-20).
6. Add continuous factor Base (eq) (100-1500).
7. Add categorical factor Boronic Acid Type.
8. Set random seed for reproducibility.
9. Specify number of design starts.
10. Configure model terms for interactions.
11. Set sample size.
12. Choose optimality criterion.
13. Disable response simulation.
14. Disable X matrix saving.
15. Generate and save design.



### Example 98
> **Summary**: Automates the creation of a full factorial design with continuous factors for Discharge, Gradient, and Clutter, and simulates responses to maximize the Y response.

<!-- Keywords: #FullFactorialDesign, #ContinuousFactors, #Simulation, #JMPScriptingLanguage, #DOE -->

**Code**:
```jsl
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
		"Discharge",
		0
	),
	Add Factor(
		Continuous,
		{-1, 1},
		"Gradient",
		0
	),
	Add Factor(
		Continuous,
		{-1, 1},
		"Clutter",
		0
	), Set Random Seed( 782 ),
	Make Design, Replicates( 1 ),
	Simulate Responses( 0 ),
	Set Run Order( Sort Left to Right ),
	Make Table}
);
```

**Code Explanation**:

1. Start DOE process.
2. Choose Full Factorial Design.
3. Add response "Y" for maximization.
4. Add continuous factor "Discharge".
5. Set "Discharge" range -1 to 1.
6. Add continuous factor "Gradient".
7. Set "Gradient" range -1 to 1.
8. Add continuous factor "Clutter".
9. Set "Clutter" range -1 to 1.
10. Generate design with specified settings.



### Example 99
> **Summary**: Automates the creation of a custom design for a DOE experiment, specifying response minimization, categorical factors, and interaction terms.

<!-- Keywords: #JMPScriptingLanguage, #DesignofExperiments, #CustomDesign, #CategoricalFactors, #InteractionTerms -->

**Code**:
```jsl
// DOE Dialog
DOE(
	Custom Design,
	{
	Add Response(
		Minimize, "Y", ., ., .
	),
	Add Factor(
		Categorical,
		{"Low", "High"},
		"X1",
		1
	),
	Add Factor(
		Categorical,
		{"Low", "Medium", "High"},
		"X2",
		0
	), Set Random Seed( 1590851790 ),
	Number of Starts( 16493 ),
	Add Term( {1, 0} ),
	Add Term( {1, 1} ),
	Add Term( {2, 1} ),
	Add Term( {1, 1}, {2, 1} ),
	Set N Whole Plots( 10 ),
	Set Sample Size( 30 ),
	Simulate Responses( 1 ),
	Save X Matrix( 0 ), Make Design}
);
```

**Code Explanation**:

1. Open DOE dialog.
2. Select Custom Design.
3. Add response: Minimize Y.
4. Add factor X1: Categorical, levels Low, High.
5. Add factor X2: Categorical, levels Low, Medium, High.
6. Set random seed.
7. Set number of starts.
8. Add intercept term.
9. Add main effect X1.
10. Add main effect X2.
11. Add interaction X1*X2.
12. Set whole plots to 10.
13. Set sample size to 30.
14. Simulate responses.
15. Do not save X matrix.
16. Make design.



### Example 100
> **Summary**: Automates the creation of a DOE object by opening a data table in JMP.

<!-- Keywords: #JMPScriptingLanguage, #DesignofExperiments, #DataTable, #DOEObject, #Automation -->

**Code**:
```jsl
Open("data_table.jmp");
doe = DOE();
```

**Code Explanation**:

1. Open data table;
2. Create DOE object.



### Example 101
> **Summary**: Automates the loading of responses into a DOE object, allowing for further analysis and exploration.

<!-- Keywords: #JSLScriptingLanguage, #DOEObject, #ResponseLoading, #DataAnalysis, #JMPPlatform -->

**Code**:
```jsl
dt = Open("data_table.jmp");
doe = DOE();
doe << Load Responses;
```

**Code Explanation**:

1. Open data table.
2. Create new DOE object.
3. Load responses into DOE.



### Example 102
> **Summary**: Automates the design and analysis of a DOE experiment, incorporating main effects, interaction terms, and alias terms, with adjustable anticipated coefficients and root mean square error.

<!-- Keywords: #JSLScriptingLanguage, #DesignOfExperiments, #DOEAnalysis, #AnticipatedCoefficients, #RMSE -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
d = DOE(
	Evaluate Design,
	X( :Feed Rate, :Catalyst, :Stir Rate, :Temperature, :Concentration ),
	{Add Term( {1, 0} ), Add Term( {1, 1} ), Add Term( {2, 1} ), Add Term( {3, 1} ), Add Term( {4, 1} ), Add Term( {5, 1} ),
	Add Term( {1, 1}, {2, 1} ), Add Term( {1, 1}, {3, 1} ), Add Alias Term( {1, 1}, {4, 1} ), Add Alias Term( {1, 1}, {5, 1} ),
	Add Alias Term( {2, 1}, {3, 1} ), Add Alias Term( {2, 1}, {4, 1} ), Add Alias Term( {2, 1}, {5, 1} ), Add Alias Term( {3, 1}, {4, 1} ),
	Add Alias Term( {3, 1}, {5, 1} ), Add Alias Term( {4, 1}, {5, 1} )}
);
d << Change Anticipated Coefficients( [1 2 3 4 1 2 3 4] );
d << Set RMSE( 1.5 );
Close( dt1, no save );
rpt = d << report;
```

**Code Explanation**:

1. Open data table.
2. Define DOE parameters.
3. Add main effects.
4. Add interaction terms.
5. Add alias terms.
6. Change anticipated coefficients.
7. Set root mean square error.
8. Close original data table.
9. Generate DOE report.



### Example 103
> **Summary**: Automates the design and analysis of a DOE experiment, specifying factors, main effects, interactions, and alias terms, while setting an RMSE value.

<!-- Keywords: #JSLScriptingLanguage, #DesignOfExperiments, #FactorialDesign, #AliasTerms, #RMSE -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
d = DOE(
	Evaluate Design,
	X( :Feed Rate, :Catalyst, :Stir Rate, :Temperature, :Concentration ),
	{Add Term( {1, 0} ), Add Term( {1, 1} ), Add Term( {2, 1} ), Add Term( {3, 1} ), Add Term( {4, 1} ), Add Term( {5, 1} ),
	Add Term( {1, 1}, {2, 1} ), Add Term( {1, 1}, {3, 1} ), Add Alias Term( {1, 1}, {4, 1} ), Add Alias Term( {1, 1}, {5, 1} ),
	Add Alias Term( {2, 1}, {3, 1} ), Add Alias Term( {2, 1}, {4, 1} ), Add Alias Term( {2, 1}, {5, 1} ), Add Alias Term( {3, 1}, {4, 1} ),
	Add Alias Term( {3, 1}, {5, 1} ), Add Alias Term( {4, 1}, {5, 1} )}
);
d << Change Anticipated Coefficients( [1 2 3 4 1 2 3 4] );
d << Set RMSE( 1.5 );
```

**Code Explanation**:

1. Open data table.
2. Define DOE settings.
3. Specify factors: Feed Rate, Catalyst, Stir Rate, Temperature, Concentration.
4. Add main effects for all factors.
5. Add two-way interactions for all factor pairs.
6. Add alias terms for selected interactions.
7. Change anticipated coefficients.
8. Set RMSE value.



### Example 104
> **Summary**: Automates the process of opening a data table, setting it as current, launching the Compare Designs platform, and generating a report window.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #CompareDesignsPlatform, #PlatformAutomation, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Current Data Table( dt );
cd = DOE( Compare Designs );
d4 = Window( "Report: Compare Designs Platform" );
cd << close window;
```

**Code Explanation**:

1. Open data table.
2. Set current data table.
3. Launch Compare Designs platform.
4. Get Compare Designs report window.
5. Close Compare Designs window.



### Example 105
> **Summary**: Automates the creation of a MaxDiff design with 3 profiles and 7 choice sets, making it suitable for table analysis in JMP.

<!-- Keywords: #MaxDiffDesign, #JMPScriptingLanguage, #DOE, #TableAnalysis, #ExperimentalDesign -->

**Code**:
```jsl
dtProf = Open("data_table.jmp");
d = DOE( MaxDiff Design, X( :Candy ), {Set Number of Profiles( 3 ), Set Number of Choice Sets( 7 )} );
dt = d << Make Table;
d << close window;
```

**Code Explanation**:

1. Open data table;
2. Create MaxDiff design.
3. Set number of profiles to 3.
4. Set number of choice sets to 7.
5. Make table from design.
6. Close design window.



### Example 106
> **Summary**: Automates the comparison of two designs in a DOE analysis, specifying reference and additional design factors.

<!-- Keywords: #DOE, #DesignOfExperiments, #JMPScriptingLanguage, #ComparisonAnalysis, #FactorialDesign -->

**Code**:
```jsl
dt_1 = Open("data_table.jmp");
dt_2 = Open("data_table.jmp");
DOE(
	Compare Designs,
	Reference Design( "data_table1", X( :Feed Rate, :Catalyst, :Stir Rate, :Temperature, :Concentration ) ),
	Additional Designs( "data_table2", X( :Feed Rate, :Catalyst, :Stir Rate, :Temperature, :Concentration ) )
);
Window( "Report: Compare Designs Platform" ) << close window;
```

**Code Explanation**:

1. Open data table;
2. Open data table;
3. Initiate DOE analysis.
4. Select Compare Designs option.
5. Set reference design.
6. Specify reference design factors.
7. Add additional design.
8. Specify additional design factors.
9. Close report window.



### Example 107
> **Summary**: Automates the comparison of two data tables by setting the current data table to dt1 and initiating DOE analysis.

<!-- Keywords: #JSLScriptingLanguage, #DOEAnalysis, #DataTableManagement, #JMPScripting, #DesignofExperiments -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
dt2 = Open("data_table.jmp");
Current Data Table( dt1 );
DOE( Compare Designs );
```

**Code Explanation**:

1. Open data table;
2. Open data table;
3. Set current data table to dt1.
4. Initiate DOE analysis.
5. Compare designs from both tables.



### Example 108
> **Summary**: Automates the opening of a data table, creation of a DOE object, and closing of the DOE window.

<!-- Keywords: #JMPScriptingLanguage, #DOEObject, #DataTableManagement, #WindowControl, #ScriptAutomation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
d = DOE( Compare Designs );
d << close window;
```

**Code Explanation**:

1. Open table.
2. Create DOE object.
3. Close DOE window.



### Example 109
> **Summary**: Automates the creation of a custom design experiment in JMP, defining response variables, continuous factors, and covariate factors to simulate responses.

<!-- Keywords: #JSLScriptingLanguage, #CustomDesignExperiment, #DOE, #Covariates, #Simulation -->

**Code**:
```jsl
dtCov = Open("data_table.jmp");
d = DOE(
	Custom Design,
	{Add Response( Maximize, "Y", ., ., . ), Add Factor( Continuous, -1, 1, "X1", 0 ), Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Covariate, sex, 0 ), Add Factor( Covariate, weight, 0 ), Add Factor( Covariate, age, 0 ), Set Random Seed( 1475678972 ),
	Number of Starts( 10791 ), Add Term( {1, 0} ), Add Term( {1, 1} ), Add Term( {2, 1} ), Add Term( {3, 1} ), Add Term( {4, 1} ),
	Add Term( {5, 1} ), Add Alias Term( {1, 1}, {2, 1} ), Add Alias Term( {1, 1}, {3, 1} ), Add Alias Term( {1, 1}, {4, 1} ),
	Add Alias Term( {1, 1}, {5, 1} ), Add Alias Term( {2, 1}, {3, 1} ), Add Alias Term( {2, 1}, {4, 1} ), Add Alias Term( {2, 1}, {5, 1} ),
	Add Alias Term( {3, 1}, {4, 1} ), Add Alias Term( {3, 1}, {5, 1} ), Add Alias Term( {4, 1}, {5, 1} ), Set Sample Size( 10 ),
	Simulate Responses( 0 ), Save X Matrix( 0 )}
);
rpt = d << report;
```

**Code Explanation**:

1. Open data table.
2. Create custom design experiment.
3. Define response variable to maximize.
4. Add continuous factor X1.
5. Add continuous factor X2.
6. Add covariate factor sex.
7. Add covariate factor weight.
8. Add covariate factor age.
9. Set random seed for reproducibility.
10. Configure design settings and terms.



### Example 110
> **Summary**: Automates the creation of a new Design of Experiments (DOE) design, starting with an open data table.

<!-- Keywords: #JSLScriptingLanguage, #DesignOfExperiments, #DataTable, #EasyDOE, #JMP -->

**Code**:
```jsl
dtResponses = Open("data_table.jmp");
d = DOE( Easy DOE );
```

**Code Explanation**:

1. Open data table.
2. Create new DOE design.



### Example 111
> **Summary**: Automates the creation and configuration of custom design experiments in JMP, including adding response variables, covariates, and interaction terms.

<!-- Keywords: #JMPScriptingLanguage, #CustomDesignExperiment, #DOE, #RandomSeed, #InteractionTerms -->

**Code**:
```jsl
dtCov = Open("data_table.jmp");
d = DOE(
	Custom Design,
	{Add Response( Maximize, "Y", ., ., . ), Add Factor( Covariate, height, 0 ), Add Factor( Covariate, weight, 0 ),
	Set Random Seed( 11055475 ), Add Term( {1, 0} ), Add Term( {1, 1} ), Add Term( {2, 1} )}
);
d << Add Factor( Covariate, sex, 0 );
d << Add Term( {1, 1}, {2, 1} );
d << close window;
Close( dtCov, nosave );
d = DOE(
	Custom Design,
	{Add Response( Maximize, "Y", ., ., . ), Add Factor( Mixture, 0, 1, "X1", 0 ), Add Factor( Mixture, 0, 1, "X2", 0 ),
	Set Random Seed( 11055475 ), Add Term( {1, 1} ), Add Term( {2, 1} )}
);
d << Add Factor( Mixture, 0, 1, "X3", 0 );
d << Add Term( {1, 1}, {2, 1} );
d << close window;
d = DOE(
	Custom Design,
	{Add Response( Maximize, "Y", ., ., . ), Add Factor( Constant, 0, "X1" ), Add Factor( Constant, 0, "X2" ), Set Random Seed( 11055475 ),
	Add Term( {1, 0} )}
);
d << Add Factor( Constant, 0, "X3" );
d << Add Term( {1, 1}, {2, 1} );
d << close window;
factorTypes = {"Continuous", "Categorical", "Discrete Numeric", "Blocking", "Covariate", "Mixture", "Constant"};
makeLevels = Function( {nLevels, type = "Character"},
	{mylist, i},
	If( type == "Character",
		mylist = {};
		For( i = 1, i <= nLevels, i++,
			Insert Into( mylist, "L" || Char( i ) )
		);
		Return( mylist );
	);
	If( type == "Discrete Numeric",
		mylist = {};
		For( i = 1, i <= nLevels, i++,
			Insert Into( mylist, Random Integer( 1, 100 ) )
		);
		Return( Sort Ascending( mylist ) );
	);
);
Random Reset( 123456789 );
```

**Code Explanation**:

1. Open data table.
2. Create custom design experiment.
3. Add response variable Y.
4. Add covariates height and weight.
5. Set random seed.
6. Add intercept term.
7. Add interaction terms.
8. Add covariate sex.
9. Add interaction terms.
10. Close experiment window.



### Example 112
> **Summary**: Automates the creation of a custom DOE design with covariates and interaction terms, utilizing JMP's DOE platform.

<!-- Keywords: #JMPDOE, #CustomDesign, #Covariates, #InteractionTerms, #RandomSeed -->

**Code**:
```jsl
dtCov = Open("data_table.jmp");
d = DOE(
	Custom Design,
	{Add Response( Maximize, "Y", ., ., . ), Add Factor( Covariate, height, 0 ), Add Factor( Covariate, weight, 0 ),
	Set Random Seed( 11055475 ), Add Term( {1, 0} ), Add Term( {1, 1} ), Add Term( {2, 1} )}
);
d << Add Factor( Covariate, sex, 0 );
d << Add Term( {1, 1}, {2, 1} );
d << close window;
```

**Code Explanation**:

1. Open data table;
2. Create custom DOE design.
3. Add response variable Y.
4. Add covariate height.
5. Add covariate weight.
6. Set random seed.
7. Add intercept term.
8. Add height term.
9. Add weight term.
10. Add sex covariate.
11. Add interaction terms.
12. Close DOE window.



### Example 113
> **Summary**: Automates the creation and manipulation of a custom Design of Experiments (DOE) design in JMP, utilizing various technical features to optimize the design.

<!-- Keywords: #JSLScriptingLanguage, #DesignOfExperiments, #CustomDOE, #JMPPlatform, #ExperimentalDesign -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt[10, "height"] = .;
dt[5, "weight"] = .;
d = DOE(
	Custom Design,
	{Add Response( Maximize, "Y", ., ., . ), Add Factor( Continuous, -1, 1, "X1", 0 ), Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Continuous, -1, 1, "X3", 0 ), Add Factor( Covariate, height, 0 ), Add Factor( Covariate, weight, 0 ),
	Set Random Seed( 2616 ), Number of Starts( 80 ), Add Term( {1, 0} ), Add Term( {1, 1} ), Add Term( {2, 1} ), Add Term( {3, 1} ),
	Add Term( {4, 1} ), Add Term( {5, 1} ), Add Alias Term( {1, 1}, {2, 1} ), Add Alias Term( {1, 1}, {3, 1} ),
	Add Alias Term( {1, 1}, {4, 1} ), Add Alias Term( {1, 1}, {5, 1} ), Add Alias Term( {2, 1}, {3, 1} ), Add Alias Term( {2, 1}, {4, 1} ),
	Add Alias Term( {2, 1}, {5, 1} ), Add Alias Term( {3, 1}, {4, 1} ), Add Alias Term( {3, 1}, {5, 1} ), Add Alias Term( {4, 1}, {5, 1} ),
	Set Sample Size( 40 ), Simulate Responses( 0 ), Save X Matrix( 0 )}
);
lc = Collapse Whitespace( Log Capture( d << Make Design ) );
d << Allow covariate rows to be repeated( 1 );
lc = Collapse Whitespace( Log Capture( d << Make Design ) );
d << Back up Design;
d << Allow covariate rows to be repeated( 0 );
d << Set Sample Size( 38 );
lc = Collapse Whitespace( Log Capture( d << Make Design ) );
d << close window;
Close( dt, nosave );
Random Reset( 123 );
```

**Code Explanation**:

1. Open data table.
2. Set height of row 10 to missing.
3. Set weight of row 5 to missing.
4. Define custom DOE design.
5. Add response variable Y to maximize.
6. Add three continuous factors X1, X2, X3.
7. Add height and weight as covariates.
8. Set random seed and number of starts.
9. Add main effects and interaction terms.
10. Set sample size to 40, simulate responses, save X matrix.
11. Capture log and collapse whitespace.
12. Allow covariate rows to be repeated.
13. Recapture log and collapse whitespace.
14. Backup design.
15. Disallow covariate rows to be repeated.
16. Set sample size to 38.
17. Recapture log and collapse whitespace.
18. Close design window.
19. Close data table without saving.
20. Reset random seed.



### Example 114
> **Summary**: Automates the creation of a custom design for a response variable and covariates, utilizing DOE parameters to optimize the design.

<!-- Keywords: #JSLScripting, #DOE, #CustomDesign, #Optimization, #JMP -->

**Code**:
```jsl
dtCov = Open("data_table.jmp");
Current Data Table( dtCov );
d = DOE(
	Custom Design,
	{Add Response( Maximize, "Y", ., ., . ), Add Factor( Covariate, Silica, 0 ), Add Factor( Covariate, Sulfur, 0 ),
	Add Factor( Covariate, Silane, 0 ), Set Random Seed( 50087686 ), Number of Starts( 10 ), Add Term( {1, 0} ), Add Term( {1, 1} ),
	Add Term( {2, 1} ), Add Term( {3, 1} ), Add Term( {1, 2} ), Add Term( {1, 1}, {2, 1} ), Add Term( {2, 2} ), Add Term( {1, 1}, {3, 1} ),
	Add Term( {2, 1}, {3, 1} ), Add Term( {3, 2} ), Enforce Use of Selected Covariate Rows( 1 ),
	Select Covariate Rows( [1 2 3 4 5 6 7 8 9 10 11 12 13 14 15] ), Allow covariate rows to be repeated( 1 ), Set Sample Size( 20 ),
	Optimality Criterion( "Make I-Optimal Design" ), Simulate Responses( 0 ), Save X Matrix( 0 ), Make Design}
);
dtCov2 = dtCov << Subset( All Rows( 1 ), All Columns( 1 ), Output Table Name( "data_table Reordered" ) );
dtCov2 << New Column( "Random Uniform", Numeric, "Continuous", Set Values( J( N Row( dtCov ), 1, Random Uniform() ) ) );
dtCov2 << Sort( By( :Random Uniform ), Order( Ascending ), Replace Table );
```

**Code Explanation**:

1. Open data table.
2. Set current data table.
3. Define DOE parameters.
4. Create custom design.
5. Add response variable.
6. Add covariates.
7. Set random seed.
8. Specify number of starts.
9. Add polynomial terms.
10. Select covariate rows.
11. Set sample size.
12. Choose optimality criterion.
13. Generate design.
14. Create subset table.
15. Add random uniform column.
16. Sort table randomly.



### Example 115
> **Summary**: Automates the creation and manipulation of a custom Design of Experiments (DOE) in JMP, including setting missing values, defining factors, and adjusting sample size.

<!-- Keywords: #JMPScriptingLanguage, #DesignOfExperiments, #CustomDOE, #SampleSizeAdjustment, #LogCapture -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt[10, "height"] = .;
dt[5, "weight"] = .;
d = DOE(
	Custom Design,
	{Add Response( Maximize, "Y", ., ., . ), Add Factor( Continuous, -1, 1, "X1", 0 ), Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Continuous, -1, 1, "X3", 0 ), Add Factor( Covariate, height, 0 ), Add Factor( Covariate, weight, 0 ),
	Set Random Seed( 2616 ), Number of Starts( 80 ), Add Term( {1, 0} ), Add Term( {1, 1} ), Add Term( {2, 1} ), Add Term( {3, 1} ),
	Add Term( {4, 1} ), Add Term( {5, 1} ), Add Alias Term( {1, 1}, {2, 1} ), Add Alias Term( {1, 1}, {3, 1} ),
	Add Alias Term( {1, 1}, {4, 1} ), Add Alias Term( {1, 1}, {5, 1} ), Add Alias Term( {2, 1}, {3, 1} ), Add Alias Term( {2, 1}, {4, 1} ),
	Add Alias Term( {2, 1}, {5, 1} ), Add Alias Term( {3, 1}, {4, 1} ), Add Alias Term( {3, 1}, {5, 1} ), Add Alias Term( {4, 1}, {5, 1} ),
	Set Sample Size( 40 ), Simulate Responses( 0 ), Save X Matrix( 0 )}
);
lc = Collapse Whitespace( Log Capture( d << Make Design ) );
d << Allow covariate rows to be repeated( 1 );
lc = Collapse Whitespace( Log Capture( d << Make Design ) );
d << Back up Design;
d << Allow covariate rows to be repeated( 0 );
d << Set Sample Size( 38 );
lc = Collapse Whitespace( Log Capture( d << Make Design ) );
d << close window;
```

**Code Explanation**:

1. Open data table;
2. Set height missing for row 10.
3. Set weight missing for row 5.
4. Define custom DOE with response and factors.
5. Set random seed and number of starts.
6. Add terms and alias terms to design.
7. Set sample size to 40.
8. Log capture and collapse whitespace.
9. Allow covariate rows repetition.
10. Log capture, backup design, set sample size to 38, close window.



### Example 116
> **Summary**: Automates the design and simulation of a custom experiment using JMP's DOE function, incorporating continuous factors, covariates, and alias terms.

<!-- Keywords: #JMPScriptingLanguage, #DesignOfExperiments, #CustomDOE, #Simulation, #ExperimentalDesign -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt[10, "height"] = .;
dt[5, "weight"] = .;
d = DOE(
	Custom Design,
	{Add Response( Maximize, "Y", ., ., . ), Add Factor( Continuous, -1, 1, "X1", 0 ), Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Continuous, -1, 1, "X3", 0 ), Add Factor( Covariate, height, 0 ), Add Factor( Covariate, weight, 0 ),
	Set Random Seed( 2616 ), Number of Starts( 80 ), Add Term( {1, 0} ), Add Term( {1, 1} ), Add Term( {2, 1} ), Add Term( {3, 1} ),
	Add Term( {4, 1} ), Add Term( {5, 1} ), Add Alias Term( {1, 1}, {2, 1} ), Add Alias Term( {1, 1}, {3, 1} ),
	Add Alias Term( {1, 1}, {4, 1} ), Add Alias Term( {1, 1}, {5, 1} ), Add Alias Term( {2, 1}, {3, 1} ), Add Alias Term( {2, 1}, {4, 1} ),
	Add Alias Term( {2, 1}, {5, 1} ), Add Alias Term( {3, 1}, {4, 1} ), Add Alias Term( {3, 1}, {5, 1} ), Add Alias Term( {4, 1}, {5, 1} ),
	Set Sample Size( 20 ), Simulate Responses( 0 ), Save X Matrix( 0 )}
);
```

**Code Explanation**:

1. Open data table;
2. Set height missing for row 10.
3. Set weight missing for row 5.
4. Define custom DOE.
5. Add response variable Y.
6. Add continuous factors X1, X2, X3.
7. Add covariates height, weight.
8. Set random seed to 2616.
9. Set number of starts to 80.
10. Specify model terms and alias terms.



### Example 117
> **Summary**: Automates the creation of a D-optimal design for a response variable, utilizing DOE settings and specifying X variables.

<!-- Keywords: #JMPScriptingLanguage, #DOE, #DesignOfExperiments, #Optimization, #StatisticalAnalysis -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
d = DOE(
	Augment Design,
	X( :Feed Rate, :Catalyst, :Stir Rate, :Temperature, :Concentration ),
	Y( :Percent Reacted ),
	{Augment Method( Augment ), Set Random Seed( 282322901 ), Number of Starts( 800 ), Add Term( {1, 0} ), Add Term( {1, 1} ),
	Add Term( {2, 1} ), Add Term( {3, 1} ), Add Term( {4, 1} ), Add Term( {5, 1} ), Add Term( {1, 1}, {2, 1} ), Add Term( {1, 1}, {3, 1} ),
	Add Term( {1, 1}, {4, 1} ), Add Term( {1, 1}, {5, 1} ), Add Term( {2, 1}, {3, 1} ), Add Term( {2, 1}, {4, 1} ),
	Add Term( {2, 1}, {5, 1} ), Add Term( {3, 1}, {4, 1} ), Add Term( {3, 1}, {5, 1} ), Add Term( {4, 1}, {5, 1} ), Set Sample Size( 16 ),
	Optimality Criterion( "Make D-Optimal Design" ), Make Design, Save X Matrix( 0 ), Simulate Responses( 0 )}
);
```

**Code Explanation**:

1. Open data table.
2. Define DOE settings.
3. Specify X variables.
4. Specify Y variable.
5. Set augment method.
6. Initialize random seed.
7. Define number of starts.
8. Add linear terms.
9. Add interaction terms.
10. Set sample size.
11. Optimize design for D-optimality.
12. Create design.
13. Do not save X matrix.
14. Do not simulate responses.



### Example 118
> **Summary**: Automates the design and generation of a data table for an experiment with specified input factors, response variable, and design options.

<!-- Keywords: #JSLScripting, #DOE, #DesignOfExperiments, #DataTableGeneration, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
d = DOE(
	Augment Design,
	X( :Feed Rate, :Catalyst, :Stir Rate, :Temperature, :Concentration ),
	Y( :Percent Reacted ),
	{Group new runs into separate block, Augment Method( Replicate, 2 ), Save X Matrix( 0 ), Simulate Responses( 0 )}
);
dt2 = d << Make Table;
d << close window;
```

**Code Explanation**:

1. Open data table.
2. Define design experiment.
3. Specify input factors.
4. Specify response variable.
5. Configure design options.
6. Generate experimental design.
7. Create data table from design.
8. Close original design window.



### Example 119
> **Summary**: Automates the design of experiments (DOE) for a custom response and multiple factors, utilizing JMP's DOE platform to generate an optimized experimental design.

<!-- Keywords: #JMP_DOE, #Experimental_Design, #Custom_Response, #Factorial_Design, #Optimization -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
d = DOE(
	Custom Design,
	{Add Response( Minimize, "Shrinkage", ., ., . ), Add Factor( Covariate, Specific Gravity, 0 ),
	Add Factor( Covariate, Tensile Strength, 0 ), Add Factor( Covariate, Supplier, 0 ), Add Factor( Continuous, -1, 1, "Temperature", 0 ),
	Add Factor( Continuous, -1, 1, "Speed", 0 ), Add Factor( Continuous, -1, 1, "Time", 0 ), Set Random Seed( 84951 ),
	Number of Starts( 40 ), Add Term( {1, 0} ), Add Term( {1, 1} ), Add Term( {2, 1} ), Add Term( {3, 1} ), Add Term( {4, 1} ),
	Add Term( {5, 1} ), Add Term( {6, 1} ), Add Alias Term( {1, 1}, {2, 1} ), Add Alias Term( {1, 1}, {3, 1} ),
	Add Alias Term( {1, 1}, {4, 1} ), Add Alias Term( {1, 1}, {5, 1} ), Add Alias Term( {1, 1}, {6, 1} ), Add Alias Term( {2, 1}, {3, 1} ),
	Add Alias Term( {2, 1}, {4, 1} ), Add Alias Term( {2, 1}, {5, 1} ), Add Alias Term( {2, 1}, {6, 1} ), Add Alias Term( {3, 1}, {4, 1} ),
	Add Alias Term( {3, 1}, {5, 1} ), Add Alias Term( {3, 1}, {6, 1} ), Add Alias Term( {4, 1}, {5, 1} ), Add Alias Term( {4, 1}, {6, 1} ),
	Add Alias Term( {5, 1}, {6, 1} ), Set Sample Size( 12 ), Make Design}
);
```

**Code Explanation**:

1. Open table.
2. Define DOE.
3. Add response.
4. Add factors.
5. Set random seed.
6. Configure design settings.
7. Add main effects.
8. Add interaction terms.
9. Define alias terms.
10. Set sample size.
11. Generate design.



### Example 120
> **Summary**: Automates the design and generation of a DOE (Design of Experiment) for a data table, specifying factors, response, and augmentation settings.

<!-- Keywords: #JMPScriptingLanguage, #DOE, #ExperimentalDesign, #DataAnalysis, #StatisticalModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
d = DOE(
	Augment Design,
	X( :Feed Rate, :Catalyst, :Stir Rate, :Temperature, :Concentration ),
	Y( :Percent Reacted ),
	{Group new runs into separate block, Augment Method( Centerpoints, 2 ), Save X Matrix( 0 ), Simulate Responses( 0 )}
);
dt2 = d << Make Table;
d << close window;
```

**Code Explanation**:

1. Open data table.
2. Define design of experiment.
3. Specify factors and response.
4. Configure augmentation settings.
5. Generate DOE design.
6. Create new data table.
7. Close original DOE window.



### Example 121
> **Summary**: Automates the creation of a response surface design by loading factors from a data table, utilizing JMP's DOE (Design of Experiments) functionality.

<!-- Keywords: #JMPScriptingLanguage, #DOE, #ResponseSurfaceDesign, #DataTable, #LogCapture -->

**Code**:
```jsl
dtFactors = Open("data_table.jmp");
d = DOE( Response Surface Design );
Log Capture( d << Load Factors );
```

**Code Explanation**:

1. Open data table.
2. Create response surface design.
3. Load factors into design.



### Example 122
> **Summary**: Automates the creation and manipulation of a custom design experiment in JMP, including adding continuous factors and generating a report.

<!-- Keywords: #JMPScriptingLanguage, #CustomDesignExperiment, #ContinuousFactors, #DOE, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
d = DOE(
	Custom Design,
	Load Responses,
	Add Factor( Continuous, 0.7, 1.7, "Silica", 0 ),
	Add Factor( Continuous, 1.8, 2.8, "Sulfur", 0 ),
	Add Factor( Continuous, 40, 60, "Silane", 0 ),
	Make Design
);
rpt = d << Report;
d << Close Window;
Close( dt, no save );
d = DOE(
	Custom Design,
	Add Response( Match Target, "Stretch", 350, 550, 1 ),
	Add Factor( Continuous, 0.7, 1.7, "Silica", 0 ),
	Add Factor( Continuous, 1.8, 2.8, "Sulfur", 0 ),
	Add Factor( Continuous, 40, 60, "Silane", 0 ),
	Save Factors
);
dt = Current Data Table() << Get as Matrix;
d << Close Window;
```

**Code Explanation**:

1. Open data table.
2. Create custom design experiment.
3. Load responses into design.
4. Add continuous factor "Silica".
5. Add continuous factor "Sulfur".
6. Add continuous factor "Silane".
7. Generate the design.
8. Retrieve report from design.
9. Close the design window.
10. Close the original data table without saving.
11. Create another custom design experiment.
12. Add response "Stretch" with target.
13. Add continuous factor "Silica".
14. Add continuous factor "Sulfur".
15. Add continuous factor "Silane".
16. Save the factors.
17. Convert current data table to matrix.
18. Close the design window.



### Example 123
> **Summary**: Automates the creation and configuration of a custom design with response variable 'Y', continuous factors X1, X2, and X3, and constraint matrix for DOE analysis.

<!-- Keywords: #JSLScripting, #DOEAnalysis, #CustomDesign, #ContinuousFactors, #ConstraintMatrix -->

**Code**:
```jsl
dt = Open("data_table.jmp");
d = DOE( Custom Design, Load Factors );
d << make Design;
rpt = d << report;
d << close window;
Close( dt, no save );
d = DOE(
	Custom Design,
	Add Response( Maximize, "Y", ., ., . ),
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Continuous, -1, 1, "X3", 0 ),
	Add Constraint( [1 1 0 1, 1 0 1 1] ),
	Add Term( {1, 0} ),
	Save Constraints
);
dt = Current Data Table();
d << close window;
```

**Code Explanation**:

1. Open data table;
2. Create custom design.
3. Make design.
4. Generate report.
5. Close design window.
6. Close original data table without saving.
7. Create new custom design.
8. Add response variable "Y".
9. Add continuous factors X1, X2, X3.
10. Add constraint matrix and terms.



### Example 124
> **Summary**: Automates the process of defining an experimental design, evaluating its power, and retrieving results in JMP.

<!-- Keywords: #JMPScriptingLanguage, #ExperimentalDesign, #PowerAnalysis, #DataTableManagement, #DesignEvaluation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
X = d << Get Power;
Close( dt, no save );
d << close window;
```

**Code Explanation**:

1. Open data table.
2. Define experimental design.
3. Set factors and response.
4. Evaluate design power.
5. Retrieve power results.
6. Close data table.
7. Discard unsaved changes.
8. Close experimental design window.



### Example 125
> **Summary**: Automates the process of defining a Design of Experiments (DOE) and evaluating its effect power, utilizing JMP's built-in DOE functionality.

<!-- Keywords: #JMPScriptingLanguage, #DesignOfExperiments, #EffectPower, #DataAnalysis, #StatisticalModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
d = DOE( Evaluate Design, X( :X1, :X2, :X3 ), Y( :Y ) );
X = d << Get Effect Power;
Close( dt, no save );
d << close window;
```

**Code Explanation**:

1. Open data table.
2. Define DOE experiment.
3. Specify factors and response.
4. Evaluate design effect power.
5. Close data table without saving.
6. Close DOE window.



### Example 126
> **Summary**: Automates the process of defining a design experiment, evaluating its efficiency, and retrieving estimation efficiencies in JMP.

<!-- Keywords: #JMPScriptingLanguage, #DesignOfExperiments, #EstimationEfficiencies, #DataManagement, #JMPPlatform -->

**Code**:
```jsl
dt = Open("data_table.jmp");
d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
X = d << Get Estimation Efficiencies;
Close( dt, no save );
d << close window;
```

**Code Explanation**:

1. Open data table.
2. Define design experiment.
3. Specify factors and response.
4. Evaluate design efficiency.
5. Retrieve estimation efficiencies.
6. Close data table without saving.
7. Close design window.



### Example 127
> **Summary**: Automates the process of creating a DOE design, setting factors and response, getting design diagnostics, modifying diagnostics data, and closing the data table and DOE window.

<!-- Keywords: #JMPScriptingLanguage, #DesignofExperiments, #DOEDesign, #DataTableManagement, #ScriptAutomation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
X = d << Get Design Diagnostics;
X[2] = .;
Close( dt, no save );
d << close window;
```

**Code Explanation**:

1. Open data table.
2. Create DOE design.
3. Set factors and response.
4. Get design diagnostics.
5. Modify diagnostics data.
6. Close data table.
7. Close DOE window.



### Example 128
> **Summary**: Automates the creation and analysis of a Design of Experiments (DOE) report, extracting design matrix data from the output.

<!-- Keywords: #JMPScriptingLanguage, #DesignofExperiments, #DOEReportGeneration, #DataExtraction, #StatisticalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Set Significance Level( 0.10 );
rpt = d << report;
X = rpt[Number Col Edit Box( 1 )] << get as matrix;
Close( dt, no save );
d << close window;
```

**Code Explanation**:

1. Open data table;
2. Create DOE with specified factors.
3. Set significance level to 0.10.
4. Generate DOE report.
5. Extract design matrix from report.
6. Close original data table without saving.
7. Close DOE window.



### Example 129
> **Summary**: Automates the creation and analysis of a design experiment, generating a report with extracted matrix data.

<!-- Keywords: #JMPScripting, #DesignOfExperiments, #RootMeanSquareError, #DataAnalysis, #MatrixOperations -->

**Code**:
```jsl
dt = Open("data_table.jmp");
d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Set RMSE( 1.5 );
rpt = d << report;
X = rpt[Number Col Edit Box( 2 )] << get as matrix;
Close( dt, no save );
d << close window;
```

**Code Explanation**:

1. Open data table.
2. Create experimental design.
3. Set root mean square error.
4. Generate report.
5. Extract matrix from report.
6. Close data table without saving.
7. Close design experiment window.



### Example 130
> **Summary**: Automates the creation and configuration of a Design of Experiments (DOE) design, including augmentation, sample size definition, and table generation.

<!-- Keywords: #JSLScripting, #DOEDesign, #Augmentation, #SampleSize, #DesignTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
d = DOE( Augment Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Augment Method( Augment );
d << Set Sample Size( 24 );
d << Make Design;
d << make table;
Close( dt, no save );
Close( Current Data Table(), no save );
d << close window;
```

**Code Explanation**:

1. Open data table.
2. Create DOE design.
3. Set augment method.
4. Define sample size.
5. Generate design.
6. Make design table.
7. Close original table.
8. Close generated table.
9. Close design window.



### Example 131
> **Summary**: Automates the creation of an augmented design table using the Augment Design method with replicate augmentation, from a specified data table.

<!-- Keywords: #JSLScripting, #DOE, #AugmentDesign, #ReplicateAugmentation, #DataManipulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
d = DOE( Augment Design, X( :X1, :X2, :X3 ), Y( :Y ) );
d << Augment Method( Replicate, 2 );
d << make table;
Close( dt, no save );
Close( Current Data Table(), no save );
d << close window;
```

**Code Explanation**:

1. Open data table.
2. Create DOE object.
3. Define factors X1, X2, X3.
4. Set response variable Y.
5. Use Augment Design method.
6. Specify replicate augmentation method.
7. Generate augmented design table.
8. Close original data table.
9. Close generated data table.
10. Close DOE window.



### Example 132
> **Summary**: Automates the creation of a Design of Experiments (DOE) design table with centerpoints, utilizing the Augment Method and specifying factors and response variables.

<!-- Keywords: #JMPScriptingLanguage, #DOEDesign, #Centerpoints, #DesignOfExperiments, #AugmentMethod -->

**Code**:
```jsl
dt = Open("data_table.jmp");
d = DOE( Augment Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Augment Method( Centerpoints, 3 );
d << make table;
Close( dt, no save );
Close( Current Data Table(), no save );
d << close window;
```

**Code Explanation**:

1. Open data table.
2. Create DOE design.
3. Specify factors and response.
4. Add centerpoints.
5. Generate design table.
6. Close original data table.
7. Close generated data table.
8. Close DOE window.



### Example 133
> **Summary**: Automates the creation and augmentation of a design experiment in JMP, utilizing the Augment Design platform to generate an augmented table.

<!-- Keywords: #JMPScriptingLanguage, #DesignExperiment, #AugmentDesign, #FoldOver, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
d = DOE( Augment Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Augment Method( Fold Over, [1 2] );
d << make table;
Close( dt, no save );
Close( Current Data Table(), no save );
d << close window;
```

**Code Explanation**:

1. Open data table.
2. Create design experiment.
3. Set factors and response.
4. Augment design using fold over.
5. Specify fold over columns.
6. Make augmented table.
7. Close original data table.
8. Close new data table.
9. Close design window.



### Example 134
> **Summary**: Automates the creation and manipulation of design tables in JMP, including augmented designs, mixture designs, and custom designs.

<!-- Keywords: #JMPScriptingLanguage, #DesignOfExperiments, #MixtureDesign, #CustomDesign, #DataManipulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
d = DOE( Augment Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Augment Method( Add Axial, 1, 2 );
d << make table;
Close( dt, no save );
Close( Current Data Table(), no save );
d << close window;
d = DOE( Mixture Design, Add Factor( Mixture, 0.1, 1, "X4", 0 ) );
d << Mixture Design Type( Extreme Vertices, 3 );
d << Find Subset( 10 );
d << make table;
Log Capture( Close( Current Data Table() ) );
d << close window;
d = DOE( Custom Design );
r = d << report;
t = r[Outline Box( 1 )] << Get Title;
d << close window;
d = DOE(
	Custom Design,
	{Add Response( Maximize, "Y", ., ., . ), Add Factor( Continuous, -1, 1, "X1", 0 ), Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Continuous, -1, 1, "X3", 0 ), Add Factor( Continuous, -1, 1, "X4", 0 ), Add Factor( Continuous, -1, 1, "X5", 0 ),
	Add Factor( Continuous, -1, 1, "X6", 0 ), Add Factor( Continuous, -1, 1, "X7", 0 ), Add Factor( Continuous, -1, 1, "X8", 0 ),
	Add Factor( Continuous, -1, 1, "X9", 0 ), Add Factor( Continuous, -1, 1, "X10", 0 ), Add Factor( Continuous, -1, 1, "X11", 0 ),
	Add Factor( Continuous, -1, 1, "X12", 0 ), Set Random Seed( 219343887 ), Design Search Time( 15 ), Add Term( {1, 0} ),
	Add Term( {1, 1} ), Add Term( {2, 1} ), Add Term( {3, 1} ), Add Term( {4, 1} ), Add Term( {5, 1} ), Set Sample Size( 13 ), Make Design}
);
time = d << get timing;
d << close window;
isPro = 1;
If( isPro,
	d = DOE(
		Custom Design,
		Add Response( Maximize, "Y", ., ., . ),
		Add Functional Response( "Y", 5, {10, 20, 30, 40, 50} ),
		Set Random Seed( 46055034 ),
		Simulate Responses( 0 ),
		Save X Matrix( 0 )
	);
	d << Make Design;
	dt = d << Make Table;
	colNames = dt << Get Column Names( string );
	Close( dt, nosave );
	d << close window;
);
```

**Code Explanation**:

1. Open data table.
2. Create augmented design.
3. Add axial points.
4. Make augmented design table.
5. Close original data table.
6. Close augmented design table.
7. Create mixture design.
8. Add new mixture factor.
9. Set mixture design type.
10. Find subset designs.



### Example 135
> **Summary**: Automates the design of experiments (DOE) process, generating a custom design with continuous factors and loading responses.

<!-- Keywords: #JSLScriptingLanguage, #DesignOfExperiments, #ContinuousFactors, #CustomDesign, #JMPPlatform -->

**Code**:
```jsl
dt = Open("data_table.jmp");
d = DOE(
	Custom Design,
	Load Responses,
	Add Factor( Continuous, 0.7, 1.7, "Silica", 0 ),
	Add Factor( Continuous, 1.8, 2.8, "Sulfur", 0 ),
	Add Factor( Continuous, 40, 60, "Silane", 0 ),
	Make Design
);
rpt = d << Report;
d << Close Window;
```

**Code Explanation**:

1. Open table.
2. Start DOE process.
3. Load responses.
4. Add Silica factor.
5. Add Sulfur factor.
6. Add Silane factor.
7. Generate design.
8. Create report.
9. Close design window.



### Example 136
> **Summary**: Automates the creation and reporting of a custom design experiment, loading factors and generating the design.

<!-- Keywords: #JSLScriptingLanguage, #CustomDesignExperiment, #DesignofExperiments, #DataTable, #JMPPlatform -->

**Code**:
```jsl
dt = Open("data_table.jmp");
d = DOE( Custom Design, Load Factors );
d << make Design;
rpt = d << report;
d << close window;
```

**Code Explanation**:

1. Open data table.
2. Create custom design experiment.
3. Load factors into design.
4. Generate the design.
5. Retrieve design report.
6. Close design window.



### Example 137
> **Summary**: Automates the design of experiments (DOE) for a custom design with continuous factors X1 and X2, including an intercept term, and loads constraints.

<!-- Keywords: #JSLScriptingLanguage, #DesignOfExperiments, #CustomDesign, #ContinuousFactors, #Constraints -->

**Code**:
```jsl
dt = Open("data_table.jmp");
d = DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Term( {1, 0} ),
	Load Constraints
);
```

**Code Explanation**:

1. Open data table.
2. Define DOE object.
3. Add continuous factor X1.
4. Add continuous factor X2.
5. Add intercept term.
6. Load design constraints.



### Example 138
> **Summary**: Automates the design and analysis of a DOE experiment to evaluate the relationship between Silica, Sulfur, and Silane factors on the Stretch response.

<!-- Keywords: #JMPScriptingLanguage, #DesignofExperiments, #FactorialDesign, #ResponseSurfaceMethodology, #ExperimentalDesign -->

**Code**:
```jsl
dt = Open("data_table.jmp");
d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Remove Term( {1, 1}, {3, 1} );
d << Remove Term( {3, 2} );
```

**Code Explanation**:

1. Open data table.
2. Define DOE experiment.
3. Specify factors: Silica, Sulfur, Silane.
4. Specify response: Stretch.
5. Evaluate design.
6. Remove interaction term.
7. Remove quadratic term.



### Example 139
> **Summary**: Automates the design experiment process by opening a data table, defining factors and response variables, evaluating the design, and retrieving the X matrix.

<!-- Keywords: #JSLScriptingLanguage, #DesignOfExperiments, #DOE, #XMatrix, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
X = d << Get X Matrix;
```

**Code Explanation**:

1. Open data table.
2. Define design experiment.
3. Specify factors and response.
4. Evaluate design.
5. Retrieve X matrix.



### Example 140
> **Summary**: Automates the creation and evaluation of a design of experiments (DOE) to analyze the relationship between Silica, Sulfur, and Silane factors on the Stretch response.

<!-- Keywords: #JSLScripting, #DOE, #DesignOfExperiments, #FactorAnalysis, #ResponseVariable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
X = d << Get Power;
```

**Code Explanation**:

1. Open data table.
2. Create DOE object.
3. Define factors: Silica, Sulfur, Silane.
4. Define response: Stretch.
5. Evaluate design.
6. Retrieve power values.
7. Assign to variable X.



### Example 141
> **Summary**: Automates the design experiment process by opening a data table, specifying factors and response variables, evaluating the design, and retrieving effect power for factors.

<!-- Keywords: #JSLScripting, #DesignExperiment, #EffectPower, #DOE, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
d = DOE( Evaluate Design, X( :X1, :X2, :X3 ), Y( :Y ) );
X = d << Get Effect Power;
```

**Code Explanation**:

1. Open data table.
2. Create design experiment.
3. Specify factors X1, X2, X3.
4. Specify response variable Y.
5. Evaluate design experiment.
6. Retrieve effect power for factors.



### Example 142
> **Summary**: Automates the process of defining a DOE experiment, specifying factors and response, and evaluating design efficiencies in JMP.

<!-- Keywords: #JMPScriptingLanguage, #DesignofExperiments, #DOE, #FactorialDesign, #EfficiencyEvaluation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
X = d << Get Estimation Efficiencies;
```

**Code Explanation**:

1. Open data table.
2. Define DOE experiment.
3. Specify factors and response.
4. Evaluate design efficiencies.



### Example 143
> **Summary**: Automates the creation and analysis of a design of experiments (DOE) to evaluate the relationship between Silica, Sulfur, and Silane factors on Stretch response.

<!-- Keywords: #JMPScriptingLanguage, #DesignofExperiments, #FactorAnalysis, #ResponseModeling, #DataTableOperations -->

**Code**:
```jsl
dt = Open("data_table.jmp");
d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
X = d << Get Design Diagnostics;
X[2] = .;
```

**Code Explanation**:

1. Open data table.
2. Create DOE design.
3. Specify factors.
4. Specify response.
5. Evaluate design diagnostics.
6. Assign diagnostics to variable.
7. Modify second element.



### Example 144
> **Summary**: Automates the creation and reporting of a Design of Experiments (DOE) design, setting significance level to 0.10 and extracting report data.

<!-- Keywords: #JMPScriptingLanguage, #DOE, #DesignOfExperiments, #SignificanceLevel, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Set Significance Level( 0.10 );
rpt = d << report;
X = rpt[Number Col Edit Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data table.
2. Create DOE design.
3. Set X factors: Silica, Sulfur, Silane.
4. Set Y factor: Stretch.
5. Set significance level to 0.10.
6. Generate DOE report.
7. Extract report object.
8. Access first number column edit box.
9. Convert to matrix.
10. Assign to variable X.



### Example 145
> **Summary**: Automates the process of designing and evaluating a response surface methodology (RSM) experiment, generating a report with RMSE value and extracting a matrix from an edit box.

<!-- Keywords: #JMPScriptingLanguage, #DOEDesign, #ResponseSurfaceMethodology, #RMSEValue, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Set RMSE( 1.5 );
rpt = d << report;
X = rpt[Number Col Edit Box( 2 )] << get as matrix;
```

**Code Explanation**:

1. Open data table.
2. Define DOE experiment.
3. Set X factors.
4. Set Y response.
5. Evaluate design.
6. Set RMSE value.
7. Generate report.
8. Extract report element.
9. Get matrix from edit box.
10. Assign matrix to variable X.



### Example 146
> **Summary**: Automates the design and analysis of a DOE experiment, generating a report with power analysis section extracted as a matrix.

<!-- Keywords: #JMPScripting, #DOEExperiment, #PowerAnalysis, #DesignOfExperiments, #JSLScript -->

**Code**:
```jsl
dt = Open("data_table.jmp");
d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Change Anticipated Coefficients( [1 2 3 4 2 2 2 3 3 3] );
rpt = d << report;
X = rpt["Design Evaluation"]["Power Analysis"][2][2] << get as matrix;
```

**Code Explanation**:

1. Open table.
2. Define DOE experiment.
3. Set design factors.
4. Set response variable.
5. Evaluate design.
6. Change anticipated coefficients.
7. Generate report.
8. Extract power analysis section.
9. Convert to matrix.



### Example 147
> **Summary**: Automates the process of designing and generating a DOE experiment, grouping new runs into blocks, setting augmentation method, and creating a design table.

<!-- Keywords: #JMPScriptingLanguage, #DesignofExperiments, #AugmentationMethod, #BlockDesign, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
d = DOE( Augment Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Group New Runs Into Separate Block;
d << augment method( augment );
d << make design;
d << make table;
x = Column( Current Data Table(), "Block" ) << get as matrix;
```

**Code Explanation**:

1. Open data table.
2. Define DOE experiment.
3. Specify factors and response.
4. Group new runs into blocks.
5. Set augmentation method.
6. Generate design.
7. Create design table.
8. Extract block column.
9. Convert to matrix.



### Example 148
> **Summary**: Automates the creation of a Design of Experiments (DOE) design with specified factors and response, utilizing the Augment Method and setting a sample size.

<!-- Keywords: #JSLScriptingLanguage, #DOEDesign, #AugmentMethod, #SampleSize, #DesignOfExperiments -->

**Code**:
```jsl
dt = Open("data_table.jmp");
d = DOE( Augment Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Augment Method( Augment );
d << Set Sample Size( 24 );
d << Make Design;
d << make table;
```

**Code Explanation**:

1. Open data table.
2. Create DOE design.
3. Specify factors and response.
4. Choose augmentation method.
5. Set sample size.
6. Generate design.
7. Create data table.



### Example 149
> **Summary**: Automates the creation of a Design of Experiments (DOE) table with specified factors and response variable, utilizing the Augment Method to replicate the design.

<!-- Keywords: #JSLScriptingLanguage, #DesignOfExperiments, #AugmentMethod, #Replication, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
d = DOE( Augment Design, X( :X1, :X2, :X3 ), Y( :Y ) );
d << Augment Method( Replicate, 2 );
d << make table;
```

**Code Explanation**:

1. Open data table.
2. Create DOE design.
3. Specify factors X1, X2, X3.
4. Specify response variable Y.
5. Set augment method to replicate.
6. Set number of replicates to 2.
7. Generate DOE table.



### Example 150
> **Summary**: Automates the creation of a Design of Experiments (DOE) table with centerpoints, utilizing the Augment Method and specifying factors Silica, Sulfur, and Silane, as well as response Stretch.

<!-- Keywords: #JMPScriptingLanguage, #DesignOfExperiments, #Centerpoints, #AugmentMethod, #DOETable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
d = DOE( Augment Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Augment Method( Centerpoints, 3 );
d << make table;
```

**Code Explanation**:

1. Open data table.
2. Create DOE design.
3. Define factors: Silica, Sulfur, Silane.
4. Define response: Stretch.
5. Set augmentation method.
6. Add centerpoints.
7. Specify 3 centerpoints.
8. Generate DOE table.



### Example 151
> **Summary**: Automates the creation of an augmented design table by defining a DOE experiment, specifying factors and response variables, applying the fold-over augment method, and generating the resulting table.

<!-- Keywords: #JSLScriptingLanguage, #DOEExperimentDesign, #AugmentMethod, #FoldOver, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
d = DOE( Augment Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Augment Method( Fold Over, [1 2] );
d << make table;
```

**Code Explanation**:

1. Open data table.
2. Define DOE experiment design.
3. Specify factors and response variable.
4. Apply augment method: fold over.
5. Generate augmented design table.



### Example 152
> **Summary**: Automates the creation of an augmented design experiment from a data table, defining factors and response variables, and generating a table for analysis.

<!-- Keywords: #JSLScriptingLanguage, #DesignOfExperiments, #AugmentedDesign, #DataTableManipulation, #JMPPlatform -->

**Code**:
```jsl
dt = Open("data_table.jmp");
d = DOE( Augment Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Augment Method( Add Axial, 1, 2 );
d << make table;
```

**Code Explanation**:

1. Open data table.
2. Create design experiment object.
3. Define factors and response.
4. Set augment method.
5. Generate augmented design.
6. Make table from design.



### Example 153
> **Summary**: Automates the creation of a custom design in JMP, incorporating various factors and settings to optimize the analysis process.

<!-- Keywords: #JMPScriptingLanguage, #CustomDesign, #DOE, #FactorManagement, #RandomSeed -->

**Code**:
```jsl
dt = Open("data_table.jmp");
d = DOE(
	Custom Design,
	{Add Response( Maximize, "Y", ., ., . ), Add Factor( Blocking, 2, "X1" ), Add Factor( Categorical, {"L1", "L2", "L3", "L4"}, "X2", 0 ),
	Add Factor( Continuous, 893.874196335673, 2077.16088831704, "X3", 0 ), Add Factor( Covariate, height, 0 ),
	Add Factor( Discrete Numeric, {2, 4, 6}, "X5", 0 ), Add Factor( Discrete Numeric, {2, 4, 6}, "X6", 0 ),
	Add Factor( Continuous, 276.440784335136, 2200.65610105684, "X7", 0 ), Add Factor( Discrete Numeric, {3, 6, 9, 12}, "X8", 0 ),
	Add Factor( Categorical, {"L1", "L2", "L3", "L4"}, "X9", 0 ), Add Factor( Mixture, 0, 1, "X10", 0 ),
	Add Factor( Mixture, 0, 1, "X11", 0 ), Add Factor( Mixture, 0, 1, "X12", 0 ), Set Random Seed( 27882917 )}
);
```

**Code Explanation**:

1. Open table.
2. Create custom design.
3. Add response variable.
4. Add blocking factor.
5. Add categorical factor.
6. Add continuous factor.
7. Add covariate factor.
8. Add discrete numeric factor.
9. Add discrete numeric factor.
10. Add continuous factor.
11. Add discrete numeric factor.
12. Add categorical factor.
13. Add mixture factors.
14. Set random seed.



### Example 154
> **Summary**: Automates the creation of a custom design with multiple factors and terms, utilizing the DOE function in JMP Scripting Language (JSL).

<!-- Keywords: #JMPScriptingLanguage, #DOE, #CustomDesign, #FactorAddition, #TermAddition -->

**Code**:
```jsl
Names Default To Here( 1 );
//create basic design
design = DOE(
	Custom Design,
	{Add Response( Maximize, "Y", ., ., . ), Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ), Add Factor( Continuous, -1, 1, "X3", 0 ),
	Add Factor( Categorical, {"L1", "L2"}, "X4", 0 ), Add Factor(
		Categorical,
		{"L1", "L2", "L3"},
		"X5",
		0
	), Set Random Seed( 1854224195 ), Add Term( {1, 0} ), Add Term( {1, 1} ), Add Term( {2, 1} ),
	Add Term( {3, 1} ), Add Term( {4, 1} ), Add Term( {5, 1} ), Add Term( {1, 2} ),
	Add Term( {1, 1}, {2, 1} ), Add Term( {2, 2} ), Add Term( {1, 1}, {3, 1} ),
	Add Term( {2, 1}, {3, 1} ), Add Term( {3, 2} ), Add Term( {1, 1}, {4, 1} ),
	Add Term( {2, 1}, {4, 1} ), Add Term( {3, 1}, {4, 1} ), Add Term( {1, 1}, {5, 1} ),
	Add Term( {2, 1}, {5, 1} ), Add Term( {3, 1}, {5, 1} ), Add Term( {4, 1}, {5, 1} ),
	Set Sample Size( 30 ), Optimality Criterion( "Make I-Optimal Design" ),
	Simulate Responses( 0 ), Save X Matrix( 0 )}
);
//lauch design explorer (is there a better way? Design explorer doesn't appear to be scriptable)
rdesign = report (design);
rdesign[OutlineBox("Design Explorer")][Button Box(1)]<< click;
```

**Code Explanation**:

1. Set default names.
2. Create custom design.
3. Add response variable.
4. Add continuous factor X1.
5. Add continuous factor X2.
6. Add continuous factor X3.
7. Add categorical factor X4.
8. Add categorical factor X5.
9. Set random seed.
10. Add terms to model.
11. Set sample size.
12. Optimize design criterion.
13. Disable response simulation.
14. Disable saving X matrix.
15. Launch design explorer.
16. Click button in report.



## DOE using Column
### Example 1
> **Summary**: Automates the creation of a design of experiments (DOE) with a covariate, simulates responses, and saves the X matrix for further analysis.

<!-- Keywords: #JSLScriptingLanguage, #DesignOfExperiments, #Covariate, #Simulation, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
cov = Column( dt, "height" );
d = doe();
d << add factor << add factor << add factor( covariate, cov );
d << simulate responses;
d << save x matrix;
d << make design;
```

**Code Explanation**:

1. Open data table.
2. Assign height column to cov.
3. Create new DOE design.
4. Add first factor to design.
5. Add second factor to design.
6. Add third factor (covariate).
7. Simulate responses for design.
8. Save X matrix of design.
9. Make design executable.
10. Design saved to file.



### Example 2
> **Summary**: Automates the creation of a design of experiments (DOE) for a continuous response variable, utilizing factors and interaction terms to optimize the experimental design.

<!-- Keywords: #JSLScriptingLanguage, #DesignOfExperiments, #ContinuousResponseVariable, #FactorialDesign, #ExperimentalDesign -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
Column( dt1, "age" ) << Set Modeling Type( "Continuous" );
d = DOE(
	Augment Design,
	X( :age, :sex ),
	Y( :height ),
	{Augment Method( Augment ), Set Random Seed( 1280909573 ), Number of Starts( 49249 ), Add Term( {1, 0} ), Add Term( {1, 1} ),
	Add Term( {2, 1} ), Add Alias Term( {1, 1}, {2, 1} ), Set Sample Size( 48 ), D Efficiency Weight( 0 ), Make Design}
);
dt = d << make table;
```

**Code Explanation**:

1. Open data table;
2. Set age column as continuous.
3. Create DOE design.
4. Specify age and sex as factors.
5. Set height as response.
6. Use augment design method.
7. Set random seed for reproducibility.
8. Define number of starts.
9. Add intercept term.
10. Add main effects.
11. Add interaction term.
12. Set alias terms.
13. Define sample size.
14. Disable D Efficiency Weight.
15. Generate design.
16. Convert design to data table.



### Example 3
> **Summary**: Automates the creation and analysis of a custom design of experiments (DOE) with categorical factors, covariates, and polynomial terms, generating a report and comparing values to oracle lists.

<!-- Keywords: #JSLScripting, #DOEDesign, #CategoricalFactors, #PolynomialTerms, #ReportGeneration -->

**Code**:
```jsl
dta = Open("data_table.jmp");
cov = Column( dta, "height" );
d = DOE(
	Custom Design,
	{Add Response( Maximize, "Y", ., ., . ), Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ), Add Factor(
		Categorical,
		{"L1", "L2"},
		"X2",
		0
	)}
);
d << Add Factor( Covariate, cov );
d << Disallowed Combinations( X1 == 1 & X2 == 1 );
d << Add Term( {1, 0} ) << Add Term( {1, 1} ) << Add Term( {2, 1} ) << Add Term( {3, 1} ) << Add Term( {1, 1}, {3, 1} ) <<
Add Term( {2, 1}, {3, 1} );
d << set random seed( 12345 );
d << Make Design;
rpt = d << report;
tcp7 = rpt[CellPlotBox( 1 )] << get journal;
tct7 = Substr( tcp7, Contains( tcp7, "colorTheme" ) );
cp7 = Parse( Substr( tct7, 1, Contains( tct7, ")" ) ) );
colstr = Arg( Extract Expr( cp7, colorTheme( Wild List() ) ) );
timg7 = Substr( tcp7, Contains( tcp7, "values" ) );
timg7 = Parse( Substr( timg7, 1, Contains( timg7, ")" ) ) );
imglst = Round( Substitute( Extract Expr( timg7, values( Wild List() ) ), Expr( values() ), {} ), 5 );
oraclelst1 = {1, 0.48148, 0.00191, 0.41622, 0.19783, 0.50918, 0.48148, 1, 0.00191, 0.19783, 0.41622, 0.50918, 0.00191, 0.00191, 1, 0.30579,
0.30061, 0.00375, 0.41622, 0.19783, 0.30579, 1, 0.35811, 0.21446, 0.19783, 0.41622, 0.30061, 0.35811, 1, 0.21446, 0.50918, 0.50918, 0.00375,
0.21446, 0.21446, 1};
oraclelst2 = {1, 0.48148, 0.00191, 0.41622, 0.19783, 0.50918, 0.48148, 1, 0.00191, 0.19783, 0.41622, 0.50918, 0.00191, 0.00191, 1, 0.30061,
0.30579, 0.00375, 0.41622, 0.19783, 0.30061, 1, 0.35811, 0.21446, 0.19783, 0.41622, 0.30579, 0.35811, 1, 0.21446, 0.50918, 0.50918, 0.00375,
0.21446, 0.21446, 1};
diff1 = Max( Abs( imglst - oraclelst1 ) );
diff2 = Max( Abs( imglst - oraclelst2 ) );
If( diff1 < diff2,
	oraclelst = oraclelst1,
	oraclelst = oraclelst2
);
d << Close Window;
```

**Code Explanation**:

1. Open data table;
2. Define height column as covariate.
3. Create custom DOE design.
4. Add categorical factors X1 and X2.
5. Set disallowed combinations for factors.
6. Add polynomial terms to model.
7. Set random seed for reproducibility.
8. Generate DOE design.
9. Extract report from design.
10. Compare generated values with oracle lists.



### Example 4
> **Summary**: Automates the creation of a design of experiments (DOE) with continuous and categorical covariates, generating a data table for further analysis.

<!-- Keywords: #JSLScriptingLanguage, #DesignOfExperiments, #Covariates, #DataTable, #JMP -->

**Code**:
```jsl
dtcov = Open("data_table.jmp");
cov1 = Column( dtcov, "sex" );
cov2 = Column( dtcov, "height" );
cov3 = Column( dtcov, "weight" );
d = doe();
d << Add Factor( Continuous, -1, 1, "shoe", 0 );
d << Add Factor( Covariate, cov1 ) << Add Factor( Covariate, cov2 ) << Add Factor( Covariate, cov3 );
d << Make Design;
dt = d << Make Table;
```

**Code Explanation**:

1. Open data table;
2. Assign "sex" column to cov1.
3. Assign "height" column to cov2.
4. Assign "weight" column to cov3.
5. Create new DOE.
6. Add continuous factor "shoe".
7. Add covariates "sex", "height", "weight".
8. Generate DOE design.
9. Create data table from design.
10. Save data table.



### Example 5
> **Summary**: Automates the creation of a DOE design with continuous, mixture, and categorical factors, as well as covariates from an open data table.

<!-- Keywords: #JSLScriptingLanguage, #DOEDesign, #CategoricalFactors, #MixtureFactors, #ContinuousFactor -->

**Code**:
```jsl
dtcov = Open("data_table.jmp");
cov1 = Column( dtcov, "sex" );
cov2 = Column( dtcov, "height" );
cov3 = Column( dtcov, "weight" );
d = doe();
d << Add Factor( Continuous, -1, 1, "shoe", 0 );
d << Add Factor( Mixture, 0, 1, "mix1", 0 );
d << Add Factor( Mixture, 0, 1, "mix2", 0 );
d << Add Factor( Mixture, 0, 1, "mix3", 0 );
d << Add Factor( Categorical, {"L1", "L2"}, "cat1", 0 );
d << Add Factor( Categorical, {"L1", "L2", "L3"}, "cat2", 0 );
d << Add Factor( Covariate, cov1 ) << Add Factor( Covariate, cov2 ) << Add Factor( Covariate, cov3 );
```

**Code Explanation**:

1. Open data table;
2. Assign sex column to cov1.
3. Assign height column to cov2.
4. Assign weight column to cov3.
5. Create new DOE design.
6. Add continuous factor shoe.
7. Add mixture factor mix1.
8. Add mixture factor mix2.
9. Add mixture factor mix3.
10. Add categorical factor cat1.
11. Add categorical factor cat2.
12. Add covariate factors sex, height, weight.



### Example 6
> **Summary**: Automates the creation of a custom design of experiments (DOE) with continuous factors, covariates, and constraints to generate a new data table.

<!-- Keywords: #JSLScriptingLanguage, #DesignOfExperiments, #CustomDOE, #ContinuousFactors, #Covariates -->

**Code**:
```jsl
dt = Open("data_table.jmp");
cov = Column( dt, "sex" );
d = DOE(
	Custom Design,
	{Add Response( "Maximize", "Y", ., ., . ), Add Factor( Continuous, -1, 1, "X1", 0 ), Add Factor( Continuous, -1, 1, "X2", 0 ),
	Number of Starts( 1000 )}
);
d << Add Factor( Covariate, cov );
d << Add Constraint( [1 1 1.5] );
dtnew = d << Make Table;         
  
d << Close Window;
```

**Code Explanation**:

1. Open data table;
2. Assign "sex" column to `cov`.
3. Create custom DOE design.
4. Add response variable "Y".
5. Add continuous factor "X1".
6. Add continuous factor "X2".
7. Set number of starts to 1000.
8. Add "sex" as covariate.
9. Add constraint [1 1 1.5].
10. Generate new data table from design.



## DOE using New Script
> **Summary**: Automates the process of designing and running an experiment using Easy DOE, capturing log output, and loading design into a table.

<!-- Keywords: #JMPScripting, #DesignofExperiments, #EasyDOE, #LogCapture, #TableOperations -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Script( "Design Columns", {{"Interfer", "Wall", "Depth", "Adhesive", "Time", "Temperature", "Humidity"}} );
d = DOE( Easy DOE );
lc = Collapse Whitespace( Log Capture( d << Load Design( dt ) ) );
d << close window;
```

**Code Explanation**:

1. Open data table.
2. Create new script for design columns.
3. Define design factors.
4. Run Easy DOE.
5. Capture log output.
6. Collapse whitespace in log.
7. Load design into table.
8. Close DOE window.



## DOE using Select Where
> **Summary**: Automates a custom design of experiments (DOE) to optimize the 'Rating' response variable, incorporating categorical and continuous factors, covariates, and interaction terms.

<!-- Keywords: #JSLScriptingLanguage, #CustomDOE, #Optimization, #FactorialDesign, #CovariateAnalysis -->

**Code**:
```jsl
dtCov = Open("data_table.jmp");
dtCov << Select Where( :age == 12 ) << Delete Rows();
dtCov << Clear Select;
d = DOE(
	Custom Design,
	{Add Response( Maximize, "Rating", ., ., . ), Add Factor( Categorical, {"Action", "Comedy", "Drama", "Horror"}, "Genre", 0 ),
	Add Factor( Continuous, 90, 180, "Length", 0 ), Add Factor( Continuous, 0, 100, "RT Score", 0 ),
	Add Factor( Categorical, {"Candy", "Popcorn", "None"}, "Snack", 0 ), Add Factor( Categorical, {"Yes", "None"}, "Soda", 0 ),
	Add Factor( Covariate, age, 0 ), Add Factor( Covariate, sex, 0 ), Set Random Seed( 1679279337 ), Number of Starts( 2526 ),
	Add Term( {1, 0} ), Add Term( {1, 1} ), Add Term( {2, 1} ), Add Term( {3, 1} ), Add Term( {4, 1} ), Add Term( {5, 1} ),
	Add Term( {6, 1} ), Add Term( {7, 1} ), Add Potential Term( {1, 1}, {2, 1} ), Add Potential Term( {1, 1}, {3, 1} ),
	Add Potential Term( {1, 1}, {4, 1} ), Add Potential Term( {1, 1}, {5, 1} ), Add Potential Term( {1, 1}, {6, 1} ),
	Add Potential Term( {1, 1}, {7, 1} ), Add Potential Term( {2, 1}, {3, 1} ), Add Potential Term( {2, 1}, {4, 1} ),
	Add Potential Term( {2, 1}, {5, 1} ), Add Potential Term( {2, 1}, {6, 1} ), Add Potential Term( {2, 1}, {7, 1} ),
	Add Potential Term( {3, 1}, {4, 1} ), Add Potential Term( {3, 1}, {5, 1} ), Add Potential Term( {3, 1}, {6, 1} ),
	Add Potential Term( {3, 1}, {7, 1} ), Add Potential Term( {4, 1}, {5, 1} ), Add Potential Term( {4, 1}, {6, 1} ),
	Add Potential Term( {4, 1}, {7, 1} ), Add Potential Term( {5, 1}, {6, 1} ), Add Potential Term( {5, 1}, {7, 1} ),
	Add Potential Term( {6, 1}, {7, 1} ), Enforce Use of Selected Covariate Rows( 1 ), Select Covariate Rows(
		[1 2 3 5 6 7 8 9 10 14 15 16 17 18 23 24 25 28 29 32]
	), Set Sample Size( 24 ), Simulate Responses( 1 ), Save X Matrix( 0 ), Make Design, Set Run Order( Keep the Same )}
);
dt = d << Make Table;
dt << Sort( By( :Covariate Row Index ), Order( Ascending ), Replace Table );
```

**Code Explanation**:

1. Open data table;
2. Delete rows where age is 12.
3. Clear row selection.
4. Start DOE with Custom Design.
5. Add response "Rating" to maximize.
6. Add categorical factor "Genre" with levels.
7. Add continuous factor "Length" from 90 to 180.
8. Add continuous factor "RT Score" from 0 to 100.
9. Add categorical factor "Snack" with levels.
10. Add categorical factor "Soda" with levels.
11. Add covariates "age" and "sex".
12. Set random seed for reproducibility.
13. Define number of starts for optimization.
14. Add main effects for all factors.
15. Add interaction terms between factors.
16. Enforce use of selected covariate rows.
17. Select specific covariate rows.
18. Set sample size to 24.
19. Simulate responses for design.
20. Do not save X matrix.
21. Create design table.
22. Sort table by covariate row index.



## DOE using Log Capture
> **Summary**: Automates the creation of a design experiment with specified factors and response variable, utilizing Augment Design method and disallowed combinations.

<!-- Keywords: #JSLScripting, #DesignExperiment, #AugmentDesign, #DisallowedCombinations, #DOE -->

**Code**:
```jsl
dt = Open("data_table.jmp");
mylog = Log Capture(
	d = DOE(
		Augment Design,
		X( :Feed Rate, :Catalyst, :Stir Rate, :Temperature, :Concentration ),
		Y( :Percent Reacted ),
		{Augment Method( Augment ), Set Random Seed( 1225039653 ), Add Term( {1, 0} ), Add Term( {1, 1} ), Add Term( {2, 1} ),
		Add Term( {3, 1} ), Add Term( {4, 1} ), Add Term( {5, 1} ), Add Term( {1, 2} ), Add Term( {1, 1}, {2, 1} ), Add Term( {2, 2} ),
		Add Term( {1, 1}, {3, 1} ), Add Term( {2, 1}, {3, 1} ), Add Term( {3, 2} ), Add Term( {1, 1}, {4, 1} ), Add Term( {2, 1}, {4, 1} ),
		Add Term( {3, 1}, {4, 1} ), Add Term( {4, 2} ), Add Term( {1, 1}, {5, 1} ), Add Term( {2, 1}, {5, 1} ), Add Term( {3, 1}, {5, 1} ),
		Add Term( {4, 1}, {5, 1} ), Add Term( {5, 2} ), Set Sample Size( 21 ), Disallowed Combinations( Feed > 0 ),
		D Efficiency Weight( 0 )}
	);
	d << Make Design;
);
d << Close Window();
new_message = Regex( mylog, "Invalid disallowed combinations script. See Log for details." );
```

**Code Explanation**:

1. Open data table.
2. Start log capture.
3. Create design experiment.
4. Define factors.
5. Define response variable.
6. Specify augment design method.
7. Set random seed.
8. Add polynomial terms.
9. Set sample size.
10. Define disallowed combinations.
11. Disable D-efficiency weighting.
12. Generate design.
13. Close design window.
14. Check log for errors.



## DOE using N Row
> **Summary**: Automates the creation of a custom Design of Experiments (DOE) design with mixture sum constraint and optimality criterion, utilizing JMP's DOE platform.

<!-- Keywords: #JMPDOE, #MixtureDesign, #OptimalityCriterion, #CustomDOE, #Scripting -->

**Code**:
```jsl
dtc = Open("data_table.jmp");
mixsum = 1;
n = N Row( dtc );
dt = Current Data Table();
acol = Column( "age" );
col = Column( "height" );
scol = Column( "sex" );
wcol = Column( "weight" );
d = DOE(
	Custom Design,
	{Add Response( Maximize, "Y", ., ., . ), Add Factor( Mixture, 0, 1, "X1", 0 ), Add Factor( Mixture, 0, 1, "X2", 0 ),
	Add Factor( Mixture, 0, 1, "X3", 0 ), Set Random Seed( 15322911 ), Simulate Responses( 0 ), Save X Matrix( 1 )}
);
d << add factor( covariate, acol );
d << mixture sum( mixsum );
d << optimality criterion( 1 );
d << make model;
d << make design;
dt = d << make table;
dt << run script( "Model Matrix" );
dt << New Column( "Mixture Sum", formula( Round( dt:X1 + dt:X2 + dt:X3, 8 ) ) );
c = 1;
Try( invxtx = Inverse( X` * X ), c = 2 );
d << optimality criterion( 2 );
d << make design;
```

**Code Explanation**:

1. Open data table.
2. Define mixture sum.
3. Count rows in data table.
4. Set current data table.
5. Assign columns to variables.
6. Create custom DOE design.
7. Add covariate factor.
8. Set mixture sum constraint.
9. Set optimality criterion.
10. Generate model and design.



## DOE using Select Rows
> **Summary**: Automates the creation of a custom Design of Experiments (DOE) design in JMP, selecting specific rows from a data table and defining response variables, covariates, and terms.

<!-- Keywords: #JMPScriptingLanguage, #DesignOfExperiments, #CustomDOE, #CovariateSelection, #ResponseVariable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Rows( [1, 5, 10, 15] );
d = DOE(
	Custom Design,
	{Add Response( Maximize, "Y", ., ., . ), Add Factor( Covariate, height, 0 ), Add Factor( Covariate, weight, 0 ),
	Set Random Seed( 1748952220 ), Add Term( {1, 0} ), Add Term( {1, 1} ), Add Term( {2, 1} ), Add Alias Term( {1, 1}, {2, 1} ),
	Select Covariate Rows( [](1, 0) ), Set Sample Size( 40 ), Simulate Responses( 0 ), Save X Matrix( 0 )}
);
d << Enforce Use of Selected Covariate Rows( 1 );
d << Enforce Use of Selected Covariate Rows( 0 );
d << Allow covariate Rows to be repeated( 1 );
d << Allow covariate Rows to be repeated( 0 );
d << close window;
```

**Code Explanation**:

1. Open data table;
2. Select specific rows.
3. Create custom DOE design.
4. Define response variable.
5. Add height covariate.
6. Add weight covariate.
7. Set random seed.
8. Include intercept term.
9. Include height term.
10. Include weight term.



## DOE using Expr
### Example 1
> **Summary**: Automates the design of experiments (DOE) analysis to optimize a chemical reaction process, utilizing an augment expression with specified factors and response variables.

<!-- Keywords: #JSLScriptingLanguage, #DesignOfExperiments, #ChemicalReactionOptimization, #AugmentExpression, #JMPPlatform -->

**Code**:
```jsl
dt = Open("data_table.jmp");
augmentExpr = Expr(
	DOE(
		Augment Design,
		X( :Feed Rate, :Catalyst, :Stir Rate, :Temperature, :Concentration ),
		Y( :Percent Reacted ),
		{Augment Method( Augment ), Set Random Seed( 21606762 ), Number of Starts( 1 ), Add Term( {1, 0} ), Add Term( {1, 1} ),
		Add Term( {2, 1} ), Add Term( {3, 1} ), Add Term( {4, 1} ), Add Term( {5, 1} ), Add Term( {1, 1}, {2, 1} ),
		Add Term( {1, 1}, {3, 1} ), Add Alias Term( {1, 1}, {4, 1} ), Add Alias Term( {1, 1}, {5, 1} ), Add Alias Term( {2, 1}, {3, 1} ),
		Add Alias Term( {2, 1}, {4, 1} ), Add Alias Term( {2, 1}, {5, 1} ), Add Alias Term( {3, 1}, {4, 1} ),
		Add Alias Term( {3, 1}, {5, 1} ), Add Alias Term( {4, 1}, {5, 1} ), Set Sample Size( 16 ), Optimality Criterion( 3 ), Make Design,
		Save X Matrix( 0 ), Simulate Responses( 0 )}
	)
);
augmentExpr;
```

**Code Explanation**:

1. Open data table.
2. Define augment expression.
3. Start DOE analysis.
4. Specify factors.
5. Specify response.
6. Set augment method.
7. Set random seed.
8. Set number of starts.
9. Add polynomial terms.
10. Add alias terms.
11. Set sample size.
12. Set optimality criterion.
13. Generate design.
14. Do not save X matrix.
15. Do not simulate responses.
16. Execute augment expression.



### Example 2
> **Summary**: Automates a Design of Experiments (DOE) evaluation to analyze the effects of Feed Rate, Catalyst, Stir Rate, Temperature, and Concentration on an outcome variable.

<!-- Keywords: #JSLScriptingLanguage, #DesignOfExperiments, #FactorialDesign, #AliasTerms, #EvaluateExpression -->

**Code**:
```jsl
dt = Open("data_table.jmp");
evaluateExpr = Expr(
	DOE(
		Evaluate Design,
		X( :Feed Rate, :Catalyst, :Stir Rate, :Temperature, :Concentration ),
		{Add Term( {1, 0} ), Add Term( {1, 1} ), Add Term( {2, 1} ), Add Term( {3, 1} ), Add Term( {4, 1} ), Add Term( {5, 1} ),
		Add Term( {1, 1}, {2, 1} ), Add Term( {1, 1}, {3, 1} ), Add Alias Term( {1, 1}, {4, 1} ), Add Alias Term( {1, 1}, {5, 1} ),
		Add Alias Term( {2, 1}, {3, 1} ), Add Alias Term( {2, 1}, {4, 1} ), Add Alias Term( {2, 1}, {5, 1} ),
		Add Alias Term( {3, 1}, {4, 1} ), Add Alias Term( {3, 1}, {5, 1} ), Add Alias Term( {4, 1}, {5, 1} )}
	)
);
evaluateExpr;
```

**Code Explanation**:

1. Open data table.
2. Define evaluate expression.
3. Start DOE evaluation.
4. Set factors: Feed Rate, Catalyst, Stir Rate, Temperature, Concentration.
5. Add main effects terms.
6. Add interaction terms.
7. Add alias terms for interactions.
8. Execute evaluate expression.



### Example 3
> **Summary**: Automates the creation and execution of a MaxDiff design expression to analyze data, utilizing the DOE function with specified parameters.

<!-- Keywords: #MaxDiffDesign, #DOEFunction, #JSLScripting, #DataAnalysis, #ExperimentalDesign -->

**Code**:
```jsl
dt = Open("data_table.jmp");
maxDiffExpr = Expr(
	DOE(
		MaxDiff Design,
		X( :Flavor ),
		{Set Number of Profiles( 4 ), Set Number of Choice Sets( 15 ), Make Design, Simulate Responses( 0 )}
	)
);
maxDiffExpr;
```

**Code Explanation**:

1. Open data table.
2. Define MaxDiff design expression.
3. Set number of profiles to 4.
4. Set number of choice sets to 15.
5. Create design without simulation.
6. Execute MaxDiff design expression.




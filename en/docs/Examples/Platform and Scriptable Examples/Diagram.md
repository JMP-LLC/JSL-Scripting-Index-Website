# Diagram

## Diagram using Neural
### Example 1
> **Summary**: Uses the Neural platform to build a neural network model that predicts percent body fat based on various anthropometric measurements, with validation and robust fit options enabled.

<!-- Keywords: #Neural, #PredictiveModeling, #MachineLearning, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
// Neural (3,0,0): 1 layer
// Open data table
dt = Open("data_table.jmp");
// Neural (3,0,0): 1 layer
Neural(
	Y( :Percent body fat ),
	X(
		:"Age (years)"n, :"Weight (lbs)"n,
		:"Height (inches)"n,
		:"Neck circumference (cm)"n,
		:"Chest circumference (cm)"n,
		:"Abdomen circumference (cm)"n,
		:"Hip circumference (cm)"n,
		:"Thigh circumference (cm)"n,
		:"Knee circumference (cm)"n,
		:"Ankle circumference (cm)"n,
		:
		"Biceps (extended) circumference (cm)"n,
		:"Forearm circumference (cm)"n,
		:"Wrist circumference (cm)"n
	),
	Validation( :Validation ),
	Missing Value Coding( 1 ),
	Transform Covariates( 1 ),
	Fit(
		NTanH( 3 ),
		Transform Covariates( 1 ),
		Robust Fit( 1 ),
		Diagram( 1 )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Define neural network model.
3. Set response variable.
4. List predictor variables.
5. Specify validation column.
6. Enable missing value coding.
7. Transform covariates.
8. Begin fitting process.
9. Use TanH activation function.
10. Generate neural network diagram.



### Example 2
> **Summary**: Uses the Neural platform to model the relationship between various anthropometric measurements and percent body fat, utilizing a 2-layer neural network with robust fitting and diagram generation.

<!-- Keywords: #Neural, #JMPScriptingLanguage, #MachineLearning, #RegressionAnalysis, #DataModeling -->

**Code**:
```jsl
// Neural (4,0,0), (8,0,0): 2 layers
// Open data table
dt = Open("data_table.jmp");
// Neural (4,0,0), (8,0,0): 2 layers
Neural(
	Y( :Percent body fat ),
	X(
		:"Age (years)"n, :"Weight (lbs)"n,
		:"Height (inches)"n,
		:"Neck circumference (cm)"n,
		:"Chest circumference (cm)"n,
		:"Abdomen circumference (cm)"n,
		:"Hip circumference (cm)"n,
		:"Thigh circumference (cm)"n,
		:"Knee circumference (cm)"n,
		:"Ankle circumference (cm)"n,
		:
		"Biceps (extended) circumference (cm)"n,
		:"Forearm circumference (cm)"n,
		:"Wrist circumference (cm)"n
	),
	Validation( :Validation ),
	Missing Value Coding( 1 ),
	Transform Covariates( 1 ),
	Fit(
		NTanH( 4 ),
		NTanH2( 8 ),
		Transform Covariates( 1 ),
		Robust Fit( 1 ),
		Diagram( 1 )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Define neural network model.
3. Set response variable.
4. List predictor variables.
5. Specify validation method.
6. Handle missing values.
7. Transform covariates.
8. Begin fit configuration.
9. Define first hidden layer.
10. Define second hidden layer.
11. Transform covariates again.
12. Enable robust fitting.
13. Generate diagram.



### Example 3
> **Summary**: Performs a neural network analysis to predict percent body fat using various anthropometric measurements, with validation and robust fit options enabled.

<!-- Keywords: #NeuralNetwork, #PredictiveModeling, #Anthropometry, #Validation, #RobustFit -->

**Code**:
```jsl
// Neural Boosted
// Open data table
dt = Open("data_table.jmp");
// Neural Boosted
Neural(
	Y( :Percent body fat ),
	X(
		:"Age (years)"n, :"Weight (lbs)"n,
		:"Height (inches)"n,
		:"Neck circumference (cm)"n,
		:"Chest circumference (cm)"n,
		:"Abdomen circumference (cm)"n,
		:"Hip circumference (cm)"n,
		:"Thigh circumference (cm)"n,
		:"Knee circumference (cm)"n,
		:"Ankle circumference (cm)"n,
		:
		"Biceps (extended) circumference (cm)"n,
		:"Forearm circumference (cm)"n,
		:"Wrist circumference (cm)"n
	),
	Validation( :Validation ),
	Missing Value Coding( 0 ),
	Transform Covariates( 1 ),
	Fit(
		NTanH( 1 ),
		Transform Covariates( 1 ),
		Robust Fit( 1 ),
		N Boost( 100 ),
		Diagram( 1 )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Define neural network model.
3. Set response variable.
4. Specify predictor variables.
5. Use validation column.
6. Code missing values as zero.
7. Transform covariates.
8. Begin fitting process.
9. Apply TanH activation function.
10. Perform robust fit.



### Example 4
> **Summary**: Generates a neural network analysis to identify significant factors affecting Y, utilizing the Neural platform with holdback validation and informative missing handling disabled.

<!-- Keywords: #JMP_Neural, #NeuralNetworkAnalysis, #HoldbackValidation, #InformativeMissingHandling, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
n = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Informative Missing( 0 ),
	Validation Method( "Holdback", 0.3333 ),
	Fit( NTanH( 3 ), Show Estimates( 1 ), Diagram( 1 ) )
);
Report( n )[Node Graph Box( 1 )] << Background Color( "Light Yellow" );
```

**Code Explanation**:

1. Open data table;
2. Perform neural network analysis.
3. Set Y variable.
4. Select X variables.
5. Disable informative missing handling.
6. Use holdback validation method.
7. Set holdback percentage to 33.33%.
8. Fit model with 3 layers.
9. Show parameter estimates.
10. Display node diagram.
11. Change background color to light yellow.



### Example 5
> **Summary**: Generates a neural network analysis to identify significant factors affecting the Y variable, utilizing holdback validation and displaying node graph estimates.

<!-- Keywords: #NeuralNetwork, #HoldbackValidation, #NodeGraph, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
n = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Informative Missing( 0 ),
	Validation Method( "Holdback", 0.3333 ),
	Fit( NTanH( 3 ), Show Estimates( 1 ), Diagram( 1 ) )
);
Report( n )[Node Graph Box( 1 )] << Background Color( "Light Yellow" );
n << Journal;
```

**Code Explanation**:

1. Open data table;
2. Create neural network model.
3. Set Y variable.
4. Define X variables.
5. Disable informative missing.
6. Use holdback validation.
7. Set holdback ratio.
8. Fit NTanh model.
9. Show parameter estimates.
10. Display node diagram.
11. Change background color.
12. Save report to journal.



### Example 6
> **Summary**: Generates a neural network analysis to predict percent body fat using multiple anthropometric measurements, utilizing the Neural platform in JMP.

<!-- Keywords: #NeuralNetwork, #PredictiveModeling, #Anthropometry, #JMPScriptingLanguage, #MachineLearning -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Neural(
	Y( :Percent body fat ),
	X(
		:Name( "Age (years)" ), :Name( "Weight (lbs)" ), :Name( "Height (inches)" ), :Name( "Neck circumference (cm)" ),
		:Name( "Chest circumference (cm)" ), :Name( "Abdomen circumference (cm)" ), :Name( "Hip circumference (cm)" ),
		:Name( "Thigh circumference (cm)" ), :Name( "Knee circumference (cm)" ), :Name( "Ankle circumference (cm)" ),
		:Name( "Biceps (extended) circumference (cm)" ), :Name( "Forearm circumference (cm)" ), :Name( "Wrist circumference (cm)" )
	),
	Validation( :Validation ),
	Missing Value Coding( 1 ),
	Transform Covariates( 1 ),
	Fit( NTanH( 4 ), NTanH2( 8 ), Transform Covariates( 1 ), Robust Fit( 1 ), Diagram( 1 ) )
);
```

**Code Explanation**:

1. Open data table;
2. Define neural network model.
3. Set response variable.
4. Specify predictor variables.
5. Use validation column.
6. Handle missing values.
7. Transform covariates.
8. Fit neural network.
9. Use TanH activation.
10. Display diagram.



## Diagram using Ensemble Model
> **Summary**: Opens a data table, defines a neural model with multiple algorithms, and fits the non-linear model using KFold validation. The script also enables profiling and shows confidence intervals for each term.

<!-- Keywords: #JMPScriptingLanguage, #NeuralModel, #KFoldValidation, #ConfidenceIntervals, #NonLinearRegression -->

**Code**:
```jsl
// Ensemble Model (Neural weighted)
// Open data table
dt = Open("data_table.jmp");
// Ensemble Model (Neural weighted)
Neural(
	Y( :Percent body fat ),
	X(
		:
		"Pred Body Fat - Variable Reduction PCA"n,
		:"Pred Body Fat - Stepwise"n,
		:"Pred Body Fat - Partition"n,
		:"Pred Body Fat - PLS"n,
		:
		"Pred Body Fat - Bootstrap Forest"n,
		:"Pred Body Fat - Boosted Tree"n,
		:
		"Pred Body Fat - Neural (3,0,0)"n,
		:
		"Pred Body Fat - Neural (4,0,0),(8,0,0)"n,
		:
		"Pred Body Fat - Boosted Neural"n
	),
	Missing Value Coding( 0 ),
	Validation Method( "KFold", 10 ),
	Fit(
		NLinear( 1 ),
		Profiler(
			1,
			Confidence Intervals( 1 ),
			Term Value(
				"Pred Body Fat - Variable Reduction PCA"n(
					8.69998731198556,
					Lock( 0 ),
					Show( 1 )
				),
				"Pred Body Fat - Stepwise"n(
					19.151,
					Lock( 0 ),
					Show( 1 )
				),
				"Pred Body Fat - Partition"n(
					18.852,
					Lock( 0 ),
					Show( 1 )
				),
				"Pred Body Fat - PLS"n(
					18.859,
					Lock( 0 ),
					Show( 1 )
				),
				"Pred Body Fat - Bootstrap Forest"n(
					18.796,
					Lock( 0 ),
					Show( 1 )
				),
				"Pred Body Fat - Boosted Tree"n(
					18.821,
					Lock( 0 ),
					Show( 1 )
				),
				"Pred Body Fat - Neural (3,0,0)"n(
					18.091,
					Lock( 0 ),
					Show( 1 )
				),
				"Pred Body Fat - Neural (4,0,0),(8,0,0)"n(
					18.627,
					Lock( 0 ),
					Show( 1 )
				),
				"Pred Body Fat - Boosted Neural"n(
					18.604,
					Lock( 0 ),
					Show( 1 )
				)
			)
		),
		Diagram( 1 )
	)
);
```

**Code Explanation**:

1. Open table.
2. Define neural model.
3. Set response variable.
4. Specify predictor variables.
5. Configure missing value coding.
6. Select validation method.
7. Fit non-linear model.
8. Enable profiler.
9. Show confidence intervals.
10. Set term values and lock.



### Example 1
> **Summary**: Opens a data table and creates a diagram based on the relationship between 'Child' and 'Parent' variables.

<!-- Keywords: #JMPScriptingLanguage, #DataTable, #Diagram, #RelationshipAnalysis, #Visualization -->

**Code**:
```jsl
// Diagram
// Open data table
dt = Open("data_table.jmp");
// Diagram
Diagram( Y( :Child ), X( :Parent ) );
```

**Code Explanation**:

1. Open data table.
2. Create diagram.



### Example 2
> **Summary**: Creates and saves a diagram from a data table, with Y-axis set to Child and X-axis set to Parent.

<!-- Keywords: #JMPScriptingLanguage, #DataTable, #Diagram, #Report, #Visualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Diagram( Y( :Child ), X( :Parent ) );
Report( obj ) << Save Window Report( "$TEMP/nodt_diagram.jrp", embed data( 0 ) );
Report( obj ) << Close Window;
```

**Code Explanation**:

1. Open data table;
2. Create diagram object.
3. Set Y variable to Child.
4. Set X variable to Parent.
5. Save window report to .jrp file.
6. Embed data set to 0.
7. Close the window.



### Example 3
> **Summary**: Creates and saves a diagram from a data table, utilizing Y and X variables to define the plot.

<!-- Keywords: #JSLScriptingLanguage, #DataVisualization, #Diagramming, #ReportSaving, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Diagram( Y( :Child ), X( :Parent ) );
Report( obj ) << Save Window Report( "$TEMP/nodt_diagram.jrp", embed data( 0 ) );
Report( obj ) << Close Window;
Open( "$TEMP/nodt_diagram.jrp" );
```

**Code Explanation**:

1. Open data table;
2. Create diagram object.
3. Set Y variable.
4. Set X variable.
5. Save report window.
6. Embed data off.
7. Close report window.
8. Open saved report.



### Example 4
> **Summary**: Creates a diagram object with Y-axis variable set to 'Child' and X-axis variable set to 'Parent', utilizing data from an open JMP data table.

<!-- Keywords: #JMPScriptingLanguage, #DataTable, #DiagramObject, #Y-Axis, #X-Axis -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Diagram( Y( :Child ), X( :Parent ) );
```

**Code Explanation**:

1. Open data table;
2. Create diagram object.
3. Set Y variable to Child.
4. Set X variable to Parent.



## Diagram using Run Script
### Example 1
> **Summary**: Creates and displays a path diagram for SEM analysis, utilizing the Bollen (1989) method.

<!-- Keywords: #JMPScriptingLanguage, #SEMAnalysis, #PathDiagram, #BollenMethod, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Show Path Diagram( 0 );
```

**Code Explanation**:

1. Open data table.
2. Run SEM script.
3. Hide path diagram.



### Example 2
> **Summary**: Creates and displays a path diagram for structural equation modeling (SEM) analysis, utilizing the SEM: Bollen (1989) script in JMP.

<!-- Keywords: #JMPScriptingLanguage, #StructuralEquationModeling, #PathDiagram, #DataAnalysis, #Statistics -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Show Path Diagram( 0 );
```

**Code Explanation**:

1. Set default names.
2. Open data table.
3. Run SEM script.
4. Hide path diagram.



### Example 3
> **Summary**: Creates and customizes a path diagram for SEM analysis, utilizing the 'Run Script' function to execute the Bollen (1989) algorithm.

<!-- Keywords: #JMPScriptingLanguage, #SEMAnalysis, #PathDiagram, #DataVisualization, #StatisticalModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Color Path Diagram( 1 );
```

**Code Explanation**:

1. Open data table.
2. Run SEM script.
3. Color path diagram.



### Example 4
> **Summary**: Generates a path diagram for SEM Path Analysis with latent groups, allowing users to rotate and lock the diagram, as well as show means and intercepts.

<!-- Keywords: #JMPScriptingLanguage, #SEMPathAnalysis, #PathDiagram, #LatentGroups, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Run Script( "SEM: Path Analysis w/ Latent" );
rpt = obj << Report();
scrobj = rpt[Node Graph Box( 1 )];
scrobj << Rotate Latent Groups();
scrobj << Copy Diagram();
scrobj << Lock Diagram();
scrobj << "Show Means/Intercepts"();
```

**Code Explanation**:

1. Open data_table data
2. Run SEM Path Analysis script.
3. Extract report object.
4. Access Node Graph Box.
5. Rotate latent groups.
6. Copy diagram.
7. Lock diagram.
8. Show means/intercepts.



## Reliability Block Diagram 
> **Summary**: Creates a Reliability Block Diagram (RBD) with multiple devices, defining device blocks and connections between them.

<!-- Keywords: #JSLScripting, #ReliabilityBlockDiagram, #DeviceManagement, #JMP, #Automation -->

**Code**:
```jsl
Names Default To Here( 1 );
ndevices = 200;
stra =
"\[//!
//!STANDALONEPLATFORM
//WARNING: DO NOT CHANGE THE FIRST TWO LINES OF THIS FILE.
Reliability Block Diagram(
	System Item(
		"Basic Computer",
		Reliability Block( "Start", Position( 0.036, 5.345 ) ),
		Reliability Block( "End", Position( 6.516, 5.345 ) ),]\";
strb = "";
For Each( {i}, 1 :: ndevices,
	name = "Generic Component" || Char( i );
	strb = strb || "Reliability Block(\!"" || name || "\!",
			Position( " ||
	Char( i * .01 ) || ", " || Char( i * .01 ) ||
	" ),
			Configuration( Basic( Exponential( 1 ) ) )
		), ";
);
strc = "Block Connections(
			{";
			
strd = "{\!"Start\!", \!"Generic Component1\!"}, ";
For Each( {i}, 2 :: ndevices-1,
	strd = strd || "{\!"Generic Component" || Char( i - 1 ) || "\!", \!"Generic Component" ||
	Char( i ) || "\!"}, "
);
strd = strd || "{\!"Generic Component"||char(ndevices-1)||"\!", \!"End\!"}";
stre = "}
		)
	),
	Open System Item( \!"Basic Computer\!" )
)";
strtotal = stra || strb || strc || strd || stre;
New Window( "test", <<Type( "Script" ), strtotal );
```

**Code Explanation**:

1. Initialize device count.
2. Define initial RBD structure.
3. Loop through each device.
4. Append device block details.
5. Initialize connections string.
6. Start connection from "Start".
7. Loop through devices for connections.
8. Append connection between devices.
9. End connection to "End".
10. Combine all parts into final script.
11. Create new window with script.




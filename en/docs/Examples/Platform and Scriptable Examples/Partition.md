# Partition

### Example 1
> **Summary**: Opens a data table, partitions the data based on claim status and various categorical variables, and generates two reports: a partition graph and a report with customized frame sizes.

<!-- Keywords: #JMPScriptingLanguage, #PartitionAnalysis, #DataTableManagement, #ReportGeneration, #Customization -->

**Code**:
```jsl
// Partition (Claim Y/N)
// Open data table
dt = Open("data_table.jmp");
// Partition (Claim Y/N)
Partition(
	Y( :"Claim(Y/N)"n ),
	X(
		:AgeClass, :Gender, :Car Power,
		:Rating Class, :"City(Y/N)"n
	),
	Minimum Size Split( 20 ),
	Show Split Prob( 1 ),
	Small Tree View( 1 ),
	Criterion( "Maximize Significance" ),
	Initial Splits(
		:AgeClass == {"Young"},
		{:"City(Y/N)"n == {"Y"},
		{:Rating Class == {"D", "C"}}}
	),
	SendToReport(
		Dispatch( {}, "Partition Graph",
			FrameBox,
			{Frame Size( 400, 195 ),
			Marker Drawing Mode( "Fast" )
			}
		),
		Dispatch( {}, "Partition Report",
			FrameBox,
			{Frame Size( 400, 74 )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Define partition variables.
3. Set minimum split size.
4. Display split probabilities.
5. Enable small tree view.
6. Choose criterion for significance.
7. Define initial splits.
8. Customize partition graph size.
9. Customize partition report size.
10. Execute partition analysis.



### Example 2
> **Summary**: Opens a data table, partitions the data based on Claim USD, and generates a report with formatted currency display and marker drawing mode. The script uses initial splits to filter the data and optimize the partitioning process.

<!-- Keywords: #JMP, #Partition, #Report, #CurrencyFormat, #MarkerDrawingMode -->

**Code**:
```jsl
// Partition (Claim USD)
// Open data table
dt = Open("data_table.jmp");
// Partition (Claim USD)
Partition(
	Y( :Claim USD ),
	X(
		:AgeClass, :Gender, :Car Power,
		:Rating Class, :"City(Y/N)"n
	),
	Minimum Size Split( 20 ),
	Small Tree View( 1 ),
	Criterion( "Maximize Significance" ),
	Initial Splits(
		:Rating Class == {"A", "B"},
		{},
		{:AgeClass == {"Elder"}, {},
		{:"City(Y/N)"n == {"N"}}}
	),
	SendToReport(
		Dispatch( {}, "2", ScaleBox,
			{
			Format(
				"Currency",
				"USD",
				15,
				0
			)}
		),
		Dispatch( {}, "Partition Report",
			FrameBox,
			{
			Marker Drawing Mode( "Fast" )
			}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Define partition variables.
3. Set minimum split size.
4. Enable small tree view.
5. Select criterion for significance.
6. Define initial splits.
7. Format currency display.
8. Adjust marker drawing mode.



### Example 3
> **Summary**: Opens a data table, partitions the data using the Partition platform, and specifies predictor variables for analysis. The script defines validation portion and handles missing values.

<!-- Keywords: #JMPScriptingLanguage, #Partition, #DataTable, #PredictorVariables, #ValidationPortion -->

**Code**:
```jsl
// Partition (starting)
// Open data table
dt = Open("data_table.jmp");
// Partition (starting)
Partition(
	Y( :Banding? ),
	X(
		:grain screened,
		:proof on ctd ink, :blade mfg,
		:paper type, :ink type,
		:direct steam, :solvent type,
		:type on cylinder, :press type,
		:unit number, :cylinder size,
		:paper mill location,
		:plating tank, :proof cut,
		:viscosity, :caliper,
		:ink temperature, :humidity,
		:roughness, :blade pressure,
		:varnish pct, :press speed,
		:ink pct, :solvent pct,
		:ESA Voltage, :ESA Amperage, :wax,
		:hardener, :roller durometer,
		:current density,
		:anode space ratio,
		:chrome content
	),
	Validation Portion( 0.2 ),
	Informative Missing( 1 )
);
```

**Code Explanation**:

1. Open data table.
2. Start partition process.
3. Set response variable.
4. Specify predictor variables.
5. Define validation portion.
6. Handle missing values.
7. Complete partition process.



### Example 4
> **Summary**: Opens a data table, partitions the data using a random seed and specified variables, and enables split history, informative missing values, and validation portion. It then executes the partition.

<!-- Keywords: #JMPScriptingLanguage, #DataPartitioning, #RandomSeed, #SplitHistory, #ValidationPortion -->

**Code**:
```jsl
// Partition (final)
// Open data table
dt = Open("data_table.jmp");
// Partition (final)
Random Reset( 234 );
Partition(
	Y( :Banding? ),
	X(
		:grain screened,
		:proof on ctd ink, :blade mfg,
		:paper type, :ink type,
		:direct steam, :solvent type,
		:type on cylinder, :press type,
		:unit number, :cylinder size,
		:paper mill location,
		:plating tank, :proof cut,
		:viscosity, :caliper,
		:ink temperature, :humidity,
		:roughness, :blade pressure,
		:varnish pct, :press speed,
		:ink pct, :solvent pct,
		:ESA Voltage, :ESA Amperage, :wax,
		:hardener, :roller durometer,
		:current density,
		:anode space ratio,
		:chrome content
	),
	Validation Portion( 0.2 ),
	Split History( 1 ),
	Informative Missing( 1 ),
	Go
);
```

**Code Explanation**:

1. Open data table.
2. Set random seed.
3. Define partition.
4. Specify response variable.
5. List predictor variables.
6. Set validation portion.
7. Enable split history.
8. Handle missing values.
9. Execute partition.



### Example 5
> **Summary**: Opens a data table, partitions the data using the Partition platform with specified criteria and initial splits, and validates the partitioning process.

<!-- Keywords: #JMPScriptingLanguage, #Partition, #DataTable, #Validation, #InitialSplits -->

**Code**:
```jsl
// Partition: Validated
// Open data table
dt = Open("data_table.jmp");
// Partition: Validated
Partition(
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
	Split History( 1 ),
	Column Contributions( 1 ),
	Criterion( "Maximize Significance" ),
	Initial Splits(
		:"Abdomen circumference (cm)"n <
		92.3,
		{:"Abdomen circumference (cm)"n
		 < 85.6, {}, {:"Weight (lbs)"n
		 >= 174.5, {:"Height (inches)"n
		 >= 72.25}}},
		{:"Abdomen circumference (cm)"n
		 < 103.1, {},
		{:"Abdomen circumference (cm)"n
		 < 113.4, {:"Height (inches)"n
		 >= 72.25}}}
	)
);
```

**Code Explanation**:

1. Open table.
2. Define response variable.
3. Define predictor variables.
4. Specify validation column.
5. Set split history.
6. Enable column contributions.
7. Choose criterion for partitioning.
8. Define initial splits.
9. Apply first condition on abdomen circumference.
10. Apply nested conditions on weight and height.



### Example 6
> **Summary**: Opens a data table, partitions the data by country, and selects predictors for sex, marital status, age, type, and size.

<!-- Keywords: #JMPScriptingLanguage, #Partition, #DataTable, #PredictorSelection, #Country -->

**Code**:
```jsl
// Partition
// Open data table
dt = Open("data_table.jmp");
// Partition
Partition(
	Y( :country ),
	X(
		:sex, :marital status, :age,
		:type, :size
	)
);
```

**Code Explanation**:

1. Open data table;
2. Partition data.
3. Set response variable to "country".
4. Select predictors: "sex", "marital status", "age", "type", "size".



### Example 7
> **Summary**: Generates a decision tree model to predict the response variable Y using multiple predictor variables, including Age, Gender, BMI, BP, Total Cholesterol, LDL, HDL, TCH, LTG, and Glucose. The script uses validation, split history, informative missing values, and initial splits to optimize the model.

<!-- Keywords: #DecisionTree, #PredictiveModeling, #JMPScriptingLanguage, #DataAnalysis, #MachineLearning -->

**Code**:
```jsl
// Decision Tree of Y
// Open data table
dt = Open("data_table.jmp");
// Decision Tree of Y
Partition(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP,
		:Total Cholesterol, :LDL, :HDL,
		:TCH, :LTG, :Glucose
	),
	Validation( :Validation ),
	Split History( 1 ),
	Informative Missing( 1 ),
	Initial Splits(
		:LTG < 4.6444,
		{:BMI < 27.3},
		{:BMI < 31.6, {:BMI < 24.4}}
	)
);
```

**Code Explanation**:

1. Open data table.
2. Fit decision tree model.
3. Set response variable Y.
4. Include multiple predictor variables.
5. Use validation column.
6. Enable split history.
7. Handle informative missing values.
8. Define initial splits.
9. Specify first split condition.
10. Specify second split condition.



### Example 8
> **Summary**: Generates a decision tree model to predict the Y Binary variable based on various X variables, including Age, Gender, BMI, BP, and others, using the Partition platform in JMP.

<!-- Keywords: #DecisionTree, #Partition, #JMPScriptingLanguage, #PredictiveModeling, #DataAnalysis -->

**Code**:
```jsl
// Decision Tree of Y Binary
// Open data table
dt = Open("data_table.jmp");
// Decision Tree of Y Binary
Partition(
	Y( :Y Binary ),
	X(
		:Age, :Gender, :BMI, :BP,
		:Total Cholesterol, :LDL, :HDL,
		:TCH, :LTG, :Glucose
	),
	Validation( :Validation ),
	Split History( 1 ),
	Informative Missing( 1 ),
	Initial Splits(
		:LTG >= 4.6444,
		{:BMI >= 32.3, {}, {:LTG >=
		5.3423}},
		{:BP >= 102}
	)
);
```

**Code Explanation**:

1. Open data table.
2. Define decision tree model.
3. Set Y variable.
4. Specify X variables.
5. Use validation column.
6. Enable split history.
7. Handle informative missing values.
8. Define initial splits.
9. First split condition.
10. Second split conditions.



### Example 9
> **Summary**: Generates a Decision Tree of Y Ordinal for predicting categorical outcomes using the Partition platform, with specified predictor variables and initial splits.

<!-- Keywords: #DecisionTree, #Partition, #JMPScriptingLanguage, #PredictiveModeling, #CategoricalOutcome -->

**Code**:
```jsl
// Decision Tree of Y Ordinal
// Open data table
dt = Open("data_table.jmp");
// Decision Tree of Y Ordinal
Partition(
	Y( :Y Ordinal ),
	X(
		:Age, :Gender, :BMI, :BP,
		:Total Cholesterol, :LDL, :HDL,
		:TCH, :LTG, :Glucose
	),
	Validation( :Validation ),
	Split History( 1 ),
	Informative Missing( 1 ),
	Initial Splits(
		:LTG < 4.6444,
		{:BMI < 24.6},
		{:BMI < 30.8, {}, {:BMI < 32.3}}
	)
);
```

**Code Explanation**:

1. Open table.
2. Define partition model.
3. Set response variable.
4. Specify predictor variables.
5. Use validation column.
6. Enable split history.
7. Handle informative missing.
8. Define initial splits.
9. Apply first split condition.
10. Apply second split condition.



### Example 10
> **Summary**: This JSL script partitions a data table based on the 'Price' variable, utilizing multiple predictor variables and initial splits to identify significant relationships.

<!-- Keywords: #Partitioning, #PredictiveModeling, #DataAnalysis, #JMPScriptingLanguage, #MachineLearning -->

**Code**:
```jsl
// Partition
// Open data table
dt = Open("data_table.jmp");
// Partition
Partition(
	Y( :Price ),
	X(
		:Carat Weight, :Color, :Clarity,
		:Depth, :Table, :Cut, :Report
	),
	Minimum Size Split( 5 ),
	Show Split Prob( 1 ),
	Criterion( "Maximize Significance" ),
	Initial Splits(
		:Color == {"E", "D", "F"},
		{:Clarity == {"VVS1", "IF",
		"VVS2"}},
		{:Cut == {"Good", "Very Good"}}
	)
);
```

**Code Explanation**:

1. Open data table.
2. Partition data.
3. Set response variable.
4. Specify predictor variables.
5. Define minimum split size.
6. Enable split probability display.
7. Choose criterion for significance.
8. Define initial splits for Color.
9. Define initial splits for Clarity.
10. Define initial splits for Cut.



### Example 11
> **Summary**: This JSL script partitions a data table to identify key terms related to intracranial pressure, hepatic function, and urinary tract infection using the Text Explorer platform.

<!-- Keywords: #TextExplorer, #Partitioning, #DataAnalysis, #JMPScriptingLanguage, #AdverseEvent -->

**Code**:
```jsl
// Partition
// Open data table
dt = Open("data_table.jmp");
// Partition
Partition(
	Y( :BAD ),
	X(
		:LOAN, :MORTDUE, :VALUE, :REASON,
		:JOB, :YOJ, :DEROG, :DELINQ,
		:CLAGE, :NINQ, :CLNO, :DEBTINC
	),
	Show Split Prob( 1 ),
	Criterion( "Maximize Significance" ),
	Initial Splits(
		:DELINQ >= 1,
		{:DEBTINC >= 43.8475437170116},
		{:DEBTINC >= 45.7439490589145}
	)
);
```

**Code Explanation**:

1. Open table.
2. Partition data.
3. Set response variable.
4. Define predictor variables.
5. Display split probabilities.
6. Use maximum significance criterion.
7. Specify initial splits.
8. Apply DELINQ condition.
9. Apply first DEBTINC condition.
10. Apply second DEBTINC condition.



### Example 12
> **Summary**: Opens a data table, applies Naive Bayes method to partition the data based on the response variable BAD, and includes multiple predictor variables for analysis.

<!-- Keywords: #NaiveBayes, #Partitioning, #PredictorVariables, #DataAnalysis, #JMPScriptingLanguage -->

**Code**:
```jsl
// Naive Bayes of BAD
// Open data table
dt = Open("data_table.jmp");
// Naive Bayes of BAD
Partition(
	Method( "Naive Bayes" ),
	Y( :BAD ),
	X(
		:LOAN, :MORTDUE, :VALUE, :REASON,
		:JOB, :YOJ, :DEROG, :DELINQ,
		:CLAGE, :NINQ, :CLNO
	),
	Validation( :Validation )
);
```

**Code Explanation**:

1. Open table.
2. Partition data.
3. Use Naive Bayes method.
4. Set response variable BAD.
5. Include multiple predictor variables.
6. Specify validation column.



### Example 13
> **Summary**: Performs the K Nearest Neighbors (KNN) algorithm to predict the BAD target variable using a combination of predictors, including LOAN, MORTDUE, VALUE, REASON, JOB, YOJ, DEROG, DELINQ, CLAGE, NINQ, and CLNO.

<!-- Keywords: #KNearestNeighbors, #PredictiveModeling, #DataPartitioning, #MachineLearning, #JMPScripting -->

**Code**:
```jsl
// K Nearest Neighbors of BAD
// Open data table
dt = Open("data_table.jmp");
// K Nearest Neighbors of BAD
Partition(
	Method( "K Nearest Neighbors"
	),
	Y( :BAD ),
	X(
		:LOAN, :MORTDUE, :VALUE, :REASON,
		:JOB, :YOJ, :DEROG, :DELINQ,
		:CLAGE, :NINQ, :CLNO
	),
	Validation( :Validation ),
	K( 10 )
);
```

**Code Explanation**:

1. Open data table.
2. Partition data.
3. Use K Nearest Neighbors.
4. Set target variable BAD.
5. Include multiple predictors.
6. Specify validation column.
7. Set K value to 10.



### Example 14
> **Summary**: Opens a data table, defines partition variables, sets validation portion, and performs partition analysis to identify key terms related to intracranial pressure, hepatic function, and urinary tract infection using the Text Explorer platform.

<!-- Keywords: #TextExplorer, #PartitionAnalysis, #DataMining, #NaturalLanguageProcessing, #JMPScripting -->

**Code**:
```jsl
// Partition 3
// Open data table
dt = Open("data_table.jmp");
// Partition 3
Partition(
	Y( :surface quality ),
	X(
		:Part, :Lot, :X, :Y, :Z, :Radius,
		:Center, :Gap, :Slot Width,
		:Slot Length, :Slot Depth, :color
	),
	Validation Portion( 0.5 ),
	Show Split Prob( 1 ),
	Show Split Count( 1 ),
	Split History( 1 ),
	Informative Missing( 1 ),
	Column Contributions( 1 ),
	Initial Splits(
		:Y < 248.8,
		{:Part == {32}, {}, {:Radius <
		10.6}}
	)
);
```

**Code Explanation**:

1. Open data table.
2. Define partition variables.
3. Set validation portion.
4. Enable split probability display.
5. Enable split count display.
6. Enable split history display.
7. Enable informative missing values.
8. Enable column contributions.
9. Define initial splits.
10. Perform partition analysis.



### Example 15
> **Summary**: This JSL script partitions a data table to analyze the relationship between severity and various predictor variables, including BMI, Age, Time, Markers, Hepatitis, and Jaundice, using a profit matrix and initial splits.

<!-- Keywords: #Partition, #ProfitMatrix, #InitialSplits, #DataAnalysis, #JMP -->

**Code**:
```jsl
// Partition
// Open data table
dt = Open("data_table.jmp");
// Partition
Partition(
	Y( :Severity ),
	X(
		:BMI, :Age, :Time, :Markers,
		:Hepatitis, :Jaundice
	),
	Specify Profit Matrix(
		[1 -3, -5 1, . .],
		"High",
		"Low",
		"Undecided"
	),
	Show Fit Details( 1 ),
	Informative Missing( 1 ),
	Initial Splits(
		:Time >= 2.571,
		{:Time < 12.714, {:Time < 2.857,
		{}, {:Markers == {1}, {}, {:Age
		 >= 62.8603}}}, {:Markers == {0},
		{}, {:Jaundice == {0}}}},
		{:Age >= 66.7315, {}, {:Markers
		 == {1}, {:BMI >= 20.679}}}
	)
);
```

**Code Explanation**:

1. Open table.
2. Partition data.
3. Set response variable.
4. Define predictor variables.
5. Specify profit matrix.
6. Show fit details.
7. Handle missing values.
8. Set initial splits.
9. Apply first split condition.
10. Apply remaining split conditions.



### Example 16
> **Summary**: Opens a data table, partitions the data based on the Edibility variable, and includes 18 predictor variables while applying minimum split size and random missing value rules.

<!-- Keywords: #JMPScriptingLanguage, #DataPartitioning, #PredictorVariables, #MissingValueRules, #Edibility -->

**Code**:
```jsl
// Partition
// Open data table
dt = Open("data_table.jmp");
// Partition
Partition(
	Y( :Edibility ),
	X(
		:cap shape, :cap surface,
		:cap color, :bruises, :odor,
		:gill attachment, :gill spacing,
		:gill size, :gill color,
		:stalk shape, :stalk root,
		:stalk surface above ring,
		:stalk surface below ring,
		:stalk color above ring,
		:stalk color below ring,
		:veil type, :veil color,
		:ring number, :ring type,
		:spore print color, :population,
		:habitat
	),
	Minimum Size Split( 8.124 ),
	Missing Value Rule( "Random" )
);
```

**Code Explanation**:

1. Open data table;
2. Partition data.
3. Set Edibility as target.
4. Include 18 predictor variables.
5. Apply minimum split size rule.
6. Use random rule for missing values.



### Example 17
> **Summary**: Opens a data table, partitions the data based on Lot Acceptance, and specifies various predictor variables for analysis. It sets minimum split size, shows split probabilities, disables candidate sorting, and chooses the criterion for splitting.

<!-- Keywords: #JMPScriptingLanguage, #Partitioning, #DataAnalysis, #PredictorVariables, #SplittingCriterion -->

**Code**:
```jsl
// Partition
// Open data table
dt = Open("data_table.jmp");
// Partition
Partition(
	Y( :Lot Acceptance ),
	X(
		:API Particle Size, :Mill Time,
		:Screen Size,
		:Mag. Stearate Supplier,
		:Lactose Supplier,
		:Sugar Supplier, :Talc Supplier,
		:Blend Time, :Blend Speed,
		:Compressor, :Force,
		:Coating Supplier,
		:Coating Viscosity, :Inlet Temp,
		:Exhaust Temp, :Spray Rate,
		:Atomizer Pressure
	),
	Minimum Size Split( 5 ),
	Show Split Prob( 1 ),
	Sort Split Candidates( 0 ),
	Criterion( "Maximize Significance" )
);
```

**Code Explanation**:

1. Open data table.
2. Partition data.
3. Specify response variable.
4. List predictor variables.
5. Set minimum split size.
6. Show split probabilities.
7. Disable candidate sorting.
8. Choose criterion for splitting.



### Example 18
> **Summary**: Opens a data table, partitions the data based on survival status and various categorical variables, and sets minimum split size and significance criterion for optimal partitioning.

<!-- Keywords: #JMPScriptingLanguage, #DataPartitioning, #SurvivalAnalysis, #CategoricalVariables, #Optimization -->

**Code**:
```jsl
// Partition
// Open data table
dt = Open("data_table.jmp");
// Partition
Partition(
	Y( :Survived ),
	X(
		:Passenger Class, :Sex, :Age,
		:Siblings and Spouses,
		:Parents and Children, :Fare
	),
	Minimum Size Split( 5 ),
	Criterion( "Maximize Significance" )
);
```

**Code Explanation**:

1. Open table.
2. Define partition variables.
3. Set minimum split size.
4. Choose significance criterion.
5. Execute partition.



### Example 19
> **Summary**: Analyze body fat percentage data by partitioning it based on various anthropometric measurements, with interactive features for exploring split history and column contributions.

<!-- Keywords: #JSLScriptingLanguage, #PartitionAnalysis, #DataVisualization, #InteractiveFeatures, #BodyFatPercentage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Partition(
	Y( :Percent body fat ),
	X(
		:Name( "Age (years)" ), :Name( "Weight (lbs)" ), :Name( "Height (inches)" ), :Name( "Neck circumference (cm)" ),
		:Name( "Chest circumference (cm)" ), :Name( "Abdomen circumference (cm)" ), :Name( "Hip circumference (cm)" ),
		:Name( "Thigh circumference (cm)" ), :Name( "Knee circumference (cm)" ), :Name( "Ankle circumference (cm)" ),
		:Name( "Biceps (extended) circumference (cm)" ), :Name( "Forearm circumference (cm)" ), :Name( "Wrist circumference (cm)" )
	),
	Split History( 1 ),
	Informative Missing( 1 ),
	Column Contributions( 1 ),
	Initial Splits(
		:Name( "Abdomen circumference (cm)" ) < 92.3,
		{:Name( "Abdomen circumference (cm)" ) < 85.6, {}, {:Name( "Weight (lbs)" ) >= 174.5, {:Name( "Height (inches)" ) >= 72.25}}},
		{:Name( "Abdomen circumference (cm)" ) < 103.1, {}, {:Name( "Abdomen circumference (cm)" ) < 113.4, {:Name( "Height (inches)" ) >=
		72.25}}}
	),
	SendToReport(
		Dispatch( {}, "2", ScaleBox,
			{Scale( "Log" ), Format( "Custom", Formula( (Char( value ) || "%") ), 10 ), Min( 0.6 ), Max( 80 ), Inc( 1 ), Minor Ticks( 1 )}
		),
		Dispatch( {}, "Partition Graph", FrameBox, {Frame Size( 500, 240 )} ),
		Dispatch( {}, "Partition Report", FrameBox, {Frame Size( 500, 240 )} )
	)
);
```

**Code Explanation**:

1. Open table.
2. Define partition analysis.
3. Set response variable.
4. Specify predictor variables.
5. Enable split history.
6. Enable informative missing.
7. Enable column contributions.
8. Define initial splits.
9. Customize scale settings.
10. Set frame sizes.



### Example 20
> **Summary**: Performs partition analysis on 'Survived' vs 'Passenger Class' with informative missing values and local data filters for 'Sex' and 'Body', generating a partition graph with pin annotations.

<!-- Keywords: #JMPScriptingLanguage, #PartitionAnalysis, #DataFiltering, #GraphicalOutput, #InteractiveVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Partition(
	Y( :Survived ),
	X( :Passenger Class ),
	Informative Missing( 1 ),
	Local Data Filter( Add Filter( columns( :Sex, :Body ), Display( :Body, N Items( 15 ), Find( Set Text( "" ) ) ) ) ),
	,
	SendToReport(
		Dispatch( {}, "Partition Graph", FrameBox,
			Add Pin Annotation(
				Seg( Marker Seg( 1 ) ),
				Index( 496 ),
				Index Row( 496 ),
				UniqueID( 496 ),
				FoundPt( {299, 222} ),
				Origin( {55.0416666666667, 0.245833333333333} ),
				RightOfCenter( 0 ),
				Tag Line( 1 )
			)
		)
	)
);
dt << Partition(
	Y( :Survived ),
	X( :Passenger Class ),
	Informative Missing( 1 ),
	Local Data Filter(
		Add Filter( columns( :Sex, :Body ), Where( :Sex == "male" ), Display( :Body, N Items( 15 ), Find( Set Text( "" ) ) ) )
	),
	,
	SendToReport(
		Dispatch( {}, "Partition Graph", FrameBox,
			Add Pin Annotation(
				Seg( Marker Seg( 1 ) ),
				Index( 496 ),
				Index Row( 496 ),
				UniqueID( 496 ),
				FoundPt( {299, 222} ),
				Origin( {55.0416666666667, 0.245833333333333} ),
				RightOfCenter( 0 ),
				Tag Line( 1 )
			)
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Perform partition analysis on 'Survived' vs 'Passenger Class'.
3. Enable informative missing values.
4. Add local data filter for 'Sex' and 'Body'.
5. Display 15 items in 'Body' filter.
6. Add pin annotation to partition graph.
7. Repeat partition analysis with 'Sex' filter set to "male".
8. Add pin annotation to partition graph again.



### Example 21
> **Summary**: Runs the partitioning process to analyze the relationship between country, sex, marital status, age, type, and size using a custom-defined object.

<!-- Keywords: #Partitioning, #DataAnalysis, #JMPScriptingLanguage, #CustomObject, #DataVisualization -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Split History( 1 ),
	Informative Missing( 1 ),
	SendToReport( Dispatch( {"Split History"}, "1", ScaleBox, {Add Ref Line( 3, "Solid", "Black", "", 2 )} ) )
);
```

**Code Explanation**:

1. Open data table;
2. Create partition object.
3. Set response variable to "country".
4. Include predictors: "sex", "marital status", "age", "type", "size".
5. Enable split history.
6. Handle informative missing values.
7. Send report settings.
8. Add reference line at value 3.
9. Set reference line style to solid.
10. Set reference line color to black.



### Example 22
> **Summary**: Runs the partitioning process to analyze the relationship between country and various demographic variables, generating a small tree view, leaf report, and ROC curve.

<!-- Keywords: #Partitioning, #DataAnalysis, #ROCCurve, #SmallTreeView, #LeafReport -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Small Tree View( 1 ),
	Leaf Report( 1 ),
	Informative Missing( 1 ),
	ROC Curve( 1 ),
	Initial Splits( :size == {"Large"} ),
	SendToReport( Dispatch( {}, "Partition for country", OutlineBox, {Set Title( "Small Tree View, Leaf Report, ROC Curve" )} ) )
);
```

**Code Explanation**:

1. Open data table;
2. Define partition object.
3. Set response variable to "country".
4. Specify predictor variables.
5. Enable small tree view.
6. Enable leaf report.
7. Handle informative missing values.
8. Generate ROC curve.
9. Set initial split condition.
10. Customize report title.



### Example 23
> **Summary**: Runs the partitioning process for a data table, utilizing initial splits based on specific conditions and sending the results to a report with customized title and frame size.

<!-- Keywords: #PartitionModel, #InitialSplits, #ColumnContributions, #SplitHistory, #ReportOutput -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Split History( 1 ),
	Informative Missing( 1 ),
	Column Contributions( 1 ),
	Initial Splits( :size == {"Large"}, {}, {:size == {"Medium"}} ),
	SendToReport(
		Dispatch( {}, "Partition for country", OutlineBox, {Set Title( "column Contributions, Split History" )} ),
		Dispatch( {}, FrameBox( 2 ), {Frame Size( 480, 59 )} )
	)
);
```

**Code Explanation**:

1. Open table.
2. Fit partition model.
3. Set response variable.
4. Define predictor variables.
5. Enable split history.
6. Enable informative missing.
7. Enable column contributions.
8. Specify initial splits.
9. Set report title.
10. Adjust frame size.



### Example 24
> **Summary**: Partitions data based on country, sex, marital status, age, type, and size to identify significant relationships.

<!-- Keywords: #Partitioning, #DataAnalysis, #JMPScriptingLanguage, #DataModeling, #PredictiveAnalytics -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Partition( Y( :country ), X( :sex, :marital status, :age, :type, :size ) );
```

**Code Explanation**:

1. Open data table;
2. Create partition model object.
3. Set response variable to "country".
4. Include predictors: "sex", "marital status", "age", "type", "size".



### Example 25
> **Summary**: Creates three partition models based on the 'weight' variable, with different predictor variables and by groups in each model.

<!-- Keywords: #PartitionModel, #JSLScripting, #DataAnalysis, #ByGroups, #PredictorVariables -->

**Code**:
```jsl
Open("data_table.jmp");
obj1 = Partition( Y( :weight ), X( :sex ), By( :age ) );
obj2 = Partition( Y( :weight ), X( :sex ), By( :age ) );
obj3 = Partition( Y( :weight ), X( :height, :sex ), By( :age ) );
```

**Code Explanation**:

1. Open data table.
2. Create first partition model.
3. Create second partition model.
4. Create third partition model.



### Example 26
> **Summary**: Creates three partition objects based on different combinations of variables, and adds a new column to the data table with repeated values.

<!-- Keywords: #JSLScriptingLanguage, #PartitionObjects, #DataTableManipulation, #VariableCombinations, #ColumnCreation -->

**Code**:
```jsl
Open("data_table.jmp");
obj1 = Partition( Y( :weight ), X( :sex ), By( :age ) );
obj2 = Partition( Y( :weight ), X( :sex ), By( :age ) );
obj3 = Partition( Y( :weight ), X( :height, :sex ), By( :age ) );
dt = Open("data_table.jmp");
dt << New Column( "_bycol", Character, Nominal, set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ) );
```

**Code Explanation**:

1. Open data table;
2. Create first partition object.
3. Create second partition object.
4. Create third partition object.
5. Open data table;
6. Add new column _bycol.
7. Set column data to "A", "B".



### Example 27
> **Summary**: Performs a partition analysis to identify informative splits in a data table, utilizing age, sex, and height as predictors, with initial split conditions defined.

<!-- Keywords: #PartitionAnalysis, #DataTable, #PredictiveModeling, #JMPScriptingLanguage, #InformativeMissing -->

**Code**:
```jsl
Open("data_table.jmp");
Partition( Y( :weight ), X( :age, :sex, :height ), Informative Missing( 1 ), Initial Splits( :height < 65 ) );
```

**Code Explanation**:

1. Open data table;
2. Run Partition analysis.
3. Set weight as response variable.
4. Include age, sex, height as predictors.
5. Enable informative missing handling.
6. Define initial split condition.



### Example 28
> **Summary**: Runs data partitioning by creating a partition object with the country as the response variable and sex, marital status, age, type, and size as predictor variables.

<!-- Keywords: #DataPartitioning, #JMPScriptingLanguage, #PartitionObject, #PredictorVariables, #ResponseVariable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Partition( Y( :country ), X( :sex, :marital status, :age, :type, :size ) );
```

**Code Explanation**:

1. Open data table.
2. Create partition object.
3. Set response variable.
4. Specify predictor variables.



### Example 29
> **Summary**: Partitions a data table based on categorical and continuous variables, using the Split Best operation to optimize the split.

<!-- Keywords: #JSLScriptingLanguage, #Partitioning, #SplitBest, #DataTableManipulation, #PredictorVariables -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = Partition( Y( :country ), X( :sex, :marital status, :age, :type, :size ) );
obj << SplitBest( 2 );
```

**Code Explanation**:

1. Set default names.
2. Open data table.
3. Create partition object.
4. Specify response variable.
5. Specify predictor variables.
6. Perform split best operation.
7. Split into 2 groups.



### Example 30
> **Summary**: Analyze flight data by partitioning it based on purpose and initial splits, while profiling term values for total fatal injuries, serious injuries, minor injuries, and uninjured passengers.

<!-- Keywords: #JSLScripting, #PartitionAnalysis, #Profiler, #TermValues, #FlightData -->

**Code**:
```jsl
Open("data_table.jmp");
Partition(
	Y( :Number of Engines ),
	X( :Purpose of Flight, :Total Fatal Injuries, :Total Serious Injuries, :Total Minor Injuries, :Total Uninjured ),
	Informative Missing( 1 ),
	Initial Splits(
		:Purpose of Flight == {"Aerial Application", "Aerial Observation", "Air Race/Show", "Flight Test", "Instructional",
		"Other Work Use", "Personal", "Skydiving", "Unknown"}
	),
	Profiler(
		1,
		Term Value(
			Purpose of Flight( "Ferry", Lock( 0 ), Show( 1 ) ),
			Total Fatal Injuries( 3.26, Lock( 0 ), Show( 1 ) ),
			Total Serious Injuries( 1.2954, Lock( 0 ), Show( 1 ) ),
			Total Minor Injuries( 1.692, Lock( 0 ), Show( 1 ) ),
			Total Uninjured( 5.75, Lock( 0 ), Show( 1 ) )
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Start partition analysis.
3. Set response variable.
4. Define predictor variables.
5. Handle missing data informatively.
6. Specify initial splits.
7. Enable profiler.
8. Set term values for profiling.
9. Lock certain term values.
10. Display all terms in profiler.



### Example 31
> **Summary**: Analyze a data table by applying square root transformation to the 'Y' column, selecting predictor variables, and configuring the Partition platform with Profiler settings.

<!-- Keywords: #JSLScriptingLanguage, #Partition, #ProfilerSettings, #DataTransformation, #PredictorVariables -->

**Code**:
```jsl
Open("data_table.jmp");
Partition(
	Transform Column( "Square Root[Y]", Formula( Sqrt( :Y ) ) ),
	Y( :"Square Root[Y]"n ),
	X( :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :LTG, :Glucose ),
	Informative Missing( 1 ),
	Profiler(
		1,
		Confidence Intervals( 1 ),
		Arrange in Rows( 4 ),
		Term Value(
			BMI( 26.376, Lock( 0 ), Show( 1 ) ),
			BP( 94.647, Lock( 0 ), Show( 1 ) ),
			Total Cholesterol( 189.14, Lock( 0 ), Show( 1 ) ),
			LDL( 115.44, Lock( 0 ), Show( 1 ) ),
			HDL( 49.788, Lock( 0 ), Show( 1 ) ),
			LTG( 4.6414, Lock( 0 ), Show( 1 ) ),
			Glucose( 91.26, Lock( 0 ), Show( 1 ) )
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create new column "Square Root[Y]".
3. Apply square root transformation to "Y".
4. Set "Square Root[Y]" as response variable.
5. Select predictor variables.
6. Enable informative missing data handling.
7. Launch Partition platform.
8. Configure Profiler settings.
9. Display confidence intervals.
10. Arrange profiler in 4 rows.



### Example 32
> **Summary**: Runs the partition analysis process to identify key terms related to intracranial pressure, hepatic function, and urinary tract infection using Text Explorer platform.

<!-- Keywords: #TextExplorer, #PartitionAnalysis, #LatentSemanticAnalysis, #AdverseEvent, #JMP -->

**Code**:
```jsl
Open("data_table.jmp") << Partition(
	Y( :Fiber Gr ),
	X( :"Hot/Cold"n, :Calories, :Protein, :Fat, :Sugars, :Enriched ),
	Informative Missing( 1 ),
	Initial Splits( :Protein >= 3 ),
	Profiler(
		1,
		Term Value(
			"Hot/Cold"n( "C", Lock( 0 ), Show( 1 ) ),
			Calories( 140.53, Lock( 0 ), Show( 1 ) ),
			Protein( 3.25, Lock( 0 ), Show( 1 ) ),
			Fat( 1.4474, Lock( 0 ), Show( 1 ) ),
			Sugars( 9.145, Lock( 0 ), Show( 1 ) ),
			Enriched( 0, Lock( 0 ), Show( 1 ) )
		)
	),
	SendToReport( Dispatch( {}, "Partition Report", FrameBox, {Frame Size( 480, 56 )} ) )
);
```

**Code Explanation**:

1. Open data table.
2. Initiate partition analysis.
3. Set fiber as response variable.
4. Include categorical and numeric predictors.
5. Handle missing values informatively.
6. Define initial split condition.
7. Enable profiler feature.
8. Set term values and properties.
9. Adjust report frame size.
10. Execute partition analysis.



### Example 33
> **Summary**: Performs a partition analysis to identify key terms related to intracranial pressure, hepatic function, and urinary tract infection in the Adverse Event column using Text Explorer.

<!-- Keywords: #TextExplorer, #PartitionAnalysis, #LatentSemanticAnalysis, #AdverseEvent, #TermIdentification -->

**Code**:
```jsl
Open("data_table.jmp") << Partition(
	Y( :Grades ),
	X( :Gender, :Age, :"Urban/Rural"n, :Sports, :Looks ),
	Informative Missing( 1 ),
	Initial Splits( :Looks == {1, 2}, {:Sports == {1, 2}, {}, {:Looks == {1}, {:Sports == {3}}}}, {:Sports == {1}, {}, {:Sports == {2}}} ),
	Profiler(
		1,
		Term Value(
			Gender( "", Lock( 0 ), Show( 1 ) ),
			Age( 10.4226, Lock( 0 ), Show( 1 ) ),
			"Urban/Rural"n( "", Lock( 0 ), Show( 1 ) ),
			Sports( ., Lock( 0 ), Show( 1 ) ),
			Looks( 2, Lock( 0 ), Show( 1 ) )
		)
	),
	SendToReport( Dispatch( {}, "Partition Report", FrameBox, {Frame Size( 480, 92 )} ) )
);
```

**Code Explanation**:

1. Open data table;
2. Initiate partition analysis.
3. Set Grades as outcome variable.
4. Include Gender, Age, Urban/Rural, Sports, Looks as predictors.
5. Handle missing data informatively.
6. Define initial splits for Looks and Sports.
7. Launch profiler for analysis.
8. Configure term values for each predictor.
9. Display all terms in profiler.
10. Adjust partition report size.



### Example 34
> **Summary**: Runs a Partition analysis to identify key factors affecting Thread Wear, utilizing multiple predictor variables and initial splits based on conditions.

<!-- Keywords: #PartitionAnalysis, #PredictorVariables, #InitialSplits, #ThreadWear, #JMPScriptingLanguage -->

**Code**:
```jsl
Open("data_table.jmp");
Partition(
	Y( :Thread Wear ),
	X( :Method, :"Size of Load (lbs)"n, :Sand blasted?, :Thread Wear Measured, :"Starch Content (%)"n ),
	Validation Portion( 0.33 ),
	Split History( 1 ),
	Informative Missing( 1 ),
	Initial Splits( :Thread Wear Measured >= 5, {:Thread Wear Measured < 10} ),
	Profiler(
		1,
		Term Value(
			Method( "Caustic Soda",
				Lock( 0 ),
				Show( 1 )
			),
			"Size of Load (lbs)"n( 267, Lock( 0 ), Show( 1 ) ),
			Sand blasted?( "yes", Lock( 0 ), Show( 1 ) ),
			Thread Wear Measured( 6.49, Lock( 0 ), Show( 1 ) ),
			"Starch Content (%)"n( 25.517, Lock( 0 ), Show( 1 ) )
		)
	),
	SendToReport( Dispatch( {}, "Partition Report", FrameBox, {Frame Size( 480, 56 )} ) )
);
```

**Code Explanation**:

1. Open data table;
2. Initiate Partition analysis.
3. Set Thread Wear as response variable.
4. Include multiple predictor variables.
5. Allocate 33% data for validation.
6. Enable split history tracking.
7. Handle informative missing values.
8. Define initial splits based on conditions.
9. Launch Profiler for analysis.
10. Set initial term values and properties.
11. Adjust report frame size.



### Example 35
> **Summary**: Runs the partitioning process for a data table, defining response and predictor variables, validating data, and generating a report with profiler settings.

<!-- Keywords: #JSLScriptingLanguage, #PartitionModel, #DataTable, #ProfilerSettings, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Partition(
	Y( :Y Binary ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation ),
	Split History( 1 ),
	Informative Missing( 1 ),
	Initial Splits( :LTG >= 4.6444, {:BMI >= 32.3, {}, {:LTG >= 5.3423}}, {:BP >= 102} ),
	Profiler(
		1,
		Arrange in Rows( 6 ),
		Term Value(
			Age( 48.518, Lock( 0 ), Show( 1 ) ),
			Gender( 1, Lock( 0 ), Show( 1 ) ),
			BMI( 26.376, Lock( 0 ), Show( 1 ) ),
			BP( 94.647, Lock( 0 ), Show( 1 ) ),
			Total Cholesterol( 189.14, Lock( 0 ), Show( 1 ) ),
			LDL( 115.44, Lock( 0 ), Show( 1 ) ),
			HDL( 49.788, Lock( 0 ), Show( 1 ) ),
			TCH( 4.0702, Lock( 0 ), Show( 1 ) ),
			LTG( 4.7, Lock( 0 ), Show( 1 ) ),
			Glucose( 91.26, Lock( 0 ), Show( 1 ) )
		)
	),
	SendToReport( Dispatch( {}, "Partition Report", FrameBox, {Frame Size( 480, 110 )} ) )
);
```

**Code Explanation**:

1. Open data table;
2. Define partition model.
3. Set response variable.
4. Specify predictor variables.
5. Use validation column.
6. Enable split history.
7. Handle informative missing values.
8. Define initial splits.
9. Configure profiler settings.
10. Adjust report size.



### Example 36
> **Summary**: Performs partition analysis to identify key factors affecting patient outcomes, utilizing a combination of initial splits and profiler settings.

<!-- Keywords: #JSLScriptingLanguage, #PartitionAnalysis, #DataVisualization, #PredictiveModeling, #HealthcareAnalytics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Partition(
	Y( :Y Binary ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation ),
	Split History( 1 ),
	Informative Missing( 1 ),
	Initial Splits( :LTG >= 4.6444, {:BMI >= 32.3, {}, {:LTG >= 5.3423, {:LTG < 5.5255}}}, {:BP >= 102, {:HDL < 58}, {:LTG >= 4.382}} ),
	Profiler(
		1,
		Arrange in Rows( 6 ),
		Term Value(
			Age( 48.518, Lock( 0 ), Show( 1 ) ),
			Gender( 1, Lock( 0 ), Show( 1 ) ),
			BMI( 27.75, Lock( 0 ), Show( 1 ) ),
			BP( 94.647, Lock( 0 ), Show( 1 ) ),
			Total Cholesterol( 189.14, Lock( 0 ), Show( 1 ) ),
			LDL( 115.44, Lock( 0 ), Show( 1 ) ),
			HDL( 49.788, Lock( 0 ), Show( 1 ) ),
			TCH( 4.0702, Lock( 0 ), Show( 1 ) ),
			LTG( 4.7, Lock( 0 ), Show( 1 ) ),
			Glucose( 91.26, Lock( 0 ), Show( 1 ) )
		)
	),
	SendToReport(
		Dispatch( {}, "Partition Report", FrameBox, {Frame Size( 480, 110 )} ),
		Dispatch( {}, "Split History", OutlineBox, {Close( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Initiate partition analysis.
3. Set Y variable: Y Binary.
4. Define X variables: Age, Gender, BMI, BP, Total Cholesterol, LDL, HDL, TCH, LTG, Glucose.
5. Use Validation column.
6. Set split history.
7. Handle informative missing values.
8. Define initial splits based on conditions.
9. Generate profiler with specific settings.
10. Adjust report size and close split history.



### Example 37
> **Summary**: Performs partition analysis on a data table, utilizing multiple X variables and initial splits to optimize model performance, with the option to send the results to a report.

<!-- Keywords: #PartitionAnalysis, #DataTable, #JSLScriptingLanguage, #ModelOptimization, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Partition(
	Y( :Y Ordinal ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Portion( 0.33 ),
	Split History( 1 ),
	Informative Missing( 1 ),
	Initial Splits( :LTG >= 4.8283, {:BP >= 112}, {:LTG >= 4.3175} ),
	Profiler(
		1,
		Arrange in Rows( 6 ),
		Term Value(
			Age( 48.518, Lock( 0 ), Show( 1 ) ),
			Gender( 1, Lock( 0 ), Show( 1 ) ),
			BMI( 26.376, Lock( 0 ), Show( 1 ) ),
			BP( 94.647, Lock( 0 ), Show( 1 ) ),
			Total Cholesterol( 189.14, Lock( 0 ), Show( 1 ) ),
			LDL( 115.44, Lock( 0 ), Show( 1 ) ),
			HDL( 49.788, Lock( 0 ), Show( 1 ) ),
			TCH( 4.0702, Lock( 0 ), Show( 1 ) ),
			LTG( 4.97, Lock( 0 ), Show( 1 ) ),
			Glucose( 91.26, Lock( 0 ), Show( 1 ) )
		)
	),
	SendToReport( Dispatch( {}, "Partition Report", FrameBox, {Frame Size( 480, 128 )} ) )
);
```

**Code Explanation**:

1. Open data table;
2. Perform partition analysis.
3. Set Y variable as Ordinal.
4. Include multiple X variables.
5. Allocate 33% for validation.
6. Use split history.
7. Handle informative missing values.
8. Define initial splits.
9. Generate profiler report.
10. Arrange profiler in rows.
11. Set term values for each variable.
12. Adjust frame size for report.



### Example 38
> **Summary**: Runs the partition analysis process to identify key terms related to intracranial pressure, hepatic function, and urinary tract infection in the Adverse Event column using Text Explorer.

<!-- Keywords: #TextExplorer, #PartitionAnalysis, #AdverseEvent, #LatentSemanticAnalysis, #JMP -->

**Code**:
```jsl
Open("data_table.jmp");
Partition(
	Y( :Clarity ),
	X( :Table, :Cut, :Report ),
	Weight( :Depth ),
	Validation Portion( 0.33 ),
	Split History( 1 ),
	Informative Missing( 1 ),
	Initial Splits( :Cut == {"Good", "Very Good"} ),
	Profiler(
		1,
		Term Value( Table( 60.6, Lock( 0 ), Show( 1 ) ), Cut( "Excellent", Lock( 0 ), Show( 1 ) ), Report( "GIA", Lock( 0 ), Show( 1 ) ) )
	),
	SendToReport( Dispatch( {}, "Partition Report", FrameBox, {Frame Size( 480, 110 )} ) )
);
```

**Code Explanation**:

1. Open data_table data
2. Start partition analysis.
3. Set Clarity as response variable.
4. Use Table, Cut, Report as predictors.
5. Weight by Depth.
6. Allocate 33% for validation.
7. Allow informative missing values.
8. Initially split on Cut: Good, Very Good.
9. Launch Profiler with specified settings.
10. Adjust report frame size.



### Example 39
> **Summary**: Runs the partitioning process to identify key variables for predicting loan defaults, utilizing the Partition platform and specifying initial splits based on DELINQ and DEBTINC.

<!-- Keywords: #Partition, #LoanDefaultPrediction, #InitialSplits, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
Open("data_table.jmp") << Partition(
	Y( :BAD ),
	X( :LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO, :DEBTINC ),
	Missing Value Order( Low( :DELINQ ), High( :DEBTINC ) ),
	Show Split Prob( 1 ),
	Informative Missing( 1 ),
	Initial Splits( :DELINQ >= 1, {:DEBTINC >= 43.8475437170116}, {:DEBTINC >= 45.7439490589145} ),
	Profiler(
		1,
		Arrange in Rows( 7 ),
		Term Value(
			LOAN( 18608, Lock( 0 ), Show( 1 ) ),
			MORTDUE( 73760, Lock( 0 ), Show( 1 ) ),
			VALUE( 101780, Lock( 0 ), Show( 1 ) ),
			REASON( "", Lock( 0 ), Show( 1 ) ),
			JOB( "", Lock( 0 ), Show( 1 ) ),
			YOJ( 8.922, Lock( 0 ), Show( 1 ) ),
			DEROG( 0.255, Lock( 0 ), Show( 1 ) ),
			DELINQ( 0.449, Lock( 0 ), Show( 1 ) ),
			CLAGE( 179.8, Lock( 0 ), Show( 1 ) ),
			NINQ( 1.186, Lock( 0 ), Show( 1 ) ),
			CLNO( 21.296, Lock( 0 ), Show( 1 ) ),
			DEBTINC( 33.78, Lock( 0 ), Show( 1 ) )
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Launch Partition platform.
3. Set response variable.
4. Define predictor variables.
5. Specify missing value order.
6. Enable split probability display.
7. Use informative missing values.
8. Set initial splits for DELINQ and DEBTINC.
9. Launch Profiler.
10. Arrange profiler in rows.



### Example 40
> **Summary**: Performs a partition analysis to identify key terms related to intracranial pressure, hepatic function, and urinary tract infection in the Adverse Event column using Text Explorer.

<!-- Keywords: #TextExplorer, #PartitionAnalysis, #AdverseEvent, #LatentSemanticAnalysis, #JMP -->

**Code**:
```jsl
Open("data_table.jmp") << Partition(
	Y( :Age ),
	X( :Subject, :Gender, :Growth ),
	Informative Missing( 1 ),
	Initial Splits( :Growth >= 25, {:Gender == {"F"}, {}, {:Growth >= 28.5}}, {:Gender == {"F"}, {}, {:Growth >= 23.5}} ),
	Profiler(
		1,
		Term Value( Subject( "1", Lock( 0 ), Show( 1 ) ), Gender( "F", Lock( 0 ), Show( 1 ) ), Growth( 24.023, Lock( 0 ), Show( 1 ) ) )
	),
	SendToReport( Dispatch( {}, "Partition Report", FrameBox, {Frame Size( 480, 92 )} ) )
);
```

**Code Explanation**:

1. Open data table;
2. Initiate partition analysis.
3. Set Age as response variable.
4. Include Subject, Gender, Growth as predictors.
5. Handle informative missing values.
6. Define initial splits for Growth.
7. Configure profiler settings.
8. Set term values for Subject, Gender, Growth.
9. Lock and show terms in profiler.
10. Adjust report frame size.



### Example 41
> **Summary**: Runs the partition analysis for predicting adverse events in a clinical trial, utilizing the Profiler platform to configure term values and settings.

<!-- Keywords: #PartitionAnalysis, #Profiler, #ClinicalTrial, #AdverseEvents, #TermValueConfiguration -->

**Code**:
```jsl
Open("data_table.jmp") << Partition(
	Y( :Severity ),
	X( :BMI, :Age, :Time, :Markers, :Hepatitis, :Jaundice ),
	Specify Profit Matrix( [1 -3, -5 1, . .], "Low", "High", "Undecided" ),
	Show Fit Details( 1 ),
	Informative Missing( 1 ),
	Initial Splits(
		:Time >= 2.571,
		{:Time < 12.714, {:Time < 2.857, {}, {:Markers == {1}, {}, {:Age >= 62.8603}}}, {:Markers == {0}, {}, {:Jaundice == {0}}}},
		{:Age >= 66.7315, {}, {:Markers == {1}, {:BMI >= 20.679}}}
	),
	Profiler(
		1,
		Term Value(
			BMI( 23.174, Lock( 0 ), Show( 1 ) ),
			Age( 56.399, Lock( 0 ), Show( 1 ) ),
			Time( 9.01, Lock( 0 ), Show( 1 ) ),
			Markers( 0, Lock( 0 ), Show( 1 ) ),
			Hepatitis( 0, Lock( 0 ), Show( 1 ) ),
			Jaundice( 0, Lock( 0 ), Show( 1 ) )
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Initiate Partition analysis.
3. Set Severity as response variable.
4. Include BMI, Age, Time, Markers, Hepatitis, Jaundice as predictors.
5. Define profit matrix for categories.
6. Display fit details.
7. Handle informative missing data.
8. Set initial splits based on conditions.
9. Enable Profiler.
10. Configure term values and settings in Profiler.



### Example 42
> **Summary**: Performs a partition analysis to identify key factors affecting edibility, utilizing the Partition platform in JMP and specifying initial splits for certain variables.

<!-- Keywords: #JMPPartition, #EdibilityAnalysis, #DataMining, #PredictiveModeling, #JSLScripting -->

**Code**:
```jsl
Open("data_table.jmp") << Partition(
	Y( :Edibility ),
	X(
		:cap shape, :cap surface, :cap color, :bruises, :odor, :gill attachment, :gill spacing, :gill size, :gill color, :stalk shape,
		:stalk root, :stalk surface above ring, :stalk surface below ring, :stalk color above ring, :stalk color below ring, :veil type,
		:veil color, :ring number, :ring type, :spore print color, :population, :habitat
	),
	Minimum Size Split( 8.124 ),
	Informative Missing( 1 ),
	Initial Splits( :odor == {"c", "f", "m", "p", "s", "y"}, {}, {:spore print color == {"r"}} ),
	Profiler(
		1,
		Arrange in Rows( 12 ),
		Term Value(
			cap shape( "b", Lock( 0 ), Show( 1 ) ),
			cap surface( "f", Lock( 0 ), Show( 1 ) ),
			cap color( "b", Lock( 0 ), Show( 1 ) ),
			bruises( "f", Lock( 0 ), Show( 1 ) ),
			odor( "a", Lock( 0 ), Show( 1 ) ),
			gill attachment( "a", Lock( 0 ), Show( 1 ) ),
			gill spacing( "c", Lock( 0 ), Show( 1 ) ),
			gill size( "b", Lock( 0 ), Show( 1 ) ),
			gill color( "b", Lock( 0 ), Show( 1 ) ),
			stalk shape( "e", Lock( 0 ), Show( 1 ) ),
			stalk root( "?", Lock( 0 ), Show( 1 ) ),
			stalk surface above ring( "f", Lock( 0 ), Show( 1 ) ),
			stalk surface below ring( "f", Lock( 0 ), Show( 1 ) ),
			stalk color above ring( "b", Lock( 0 ), Show( 1 ) ),
			stalk color below ring( "b", Lock( 0 ), Show( 1 ) ),
			veil type( "p", Lock( 0 ), Show( 1 ) ),
			veil color( "n", Lock( 0 ), Show( 1 ) ),
			ring number( "n", Lock( 0 ), Show( 1 ) ),
			ring type( "e", Lock( 0 ), Show( 1 ) ),
			spore print color( "b", Lock( 0 ), Show( 1 ) ),
			population( "a", Lock( 0 ), Show( 1 ) ),
			habitat( "d", Lock( 0 ), Show( 1 ) )
		)
	),
	SendToReport( Dispatch( {}, "Partition Report", FrameBox, {Frame Size( 480, 56 )} ) )
);
```

**Code Explanation**:

1. Open data table;
2. Launch Partition platform.
3. Set Edibility as response.
4. Include multiple predictor variables.
5. Define minimum split size.
6. Handle missing values informatively.
7. Specify initial splits for some variables.
8. Enable Profiler.
9. Arrange profiler terms in rows.
10. Set initial term values and lock settings.



### Example 43
> **Summary**: Performs a partition analysis to predict survival based on passenger class, sex, age, siblings and spouses, parents and children, and fare, using informative missing values and initial splits by sex and class.

<!-- Keywords: #PartitionAnalysis, #PredictiveModeling, #JMPScriptingLanguage, #DataScience, #SurvivalAnalysis -->

**Code**:
```jsl
Open("data_table.jmp") << Partition(
	Y( :Survived ),
	X( :Passenger Class, :Sex, :Age, :Siblings and Spouses, :Parents and Children, :Fare ),
	Informative Missing( 1 ),
	Initial Splits( :Sex == {"female"}, {:Passenger Class == {1, 2}} ),
	Profiler(
		1,
		Term Value(
			Passenger Class( 1, Lock( 0 ), Show( 1 ) ),
			Sex( "female", Lock( 0 ), Show( 1 ) ),
			Age( 29.881, Lock( 0 ), Show( 1 ) ),
			Siblings and Spouses( 0.4989, Lock( 0 ), Show( 1 ) ),
			Parents and Children( 0.385, Lock( 0 ), Show( 1 ) ),
			Fare( 33.3, Lock( 0 ), Show( 1 ) )
		)
	),
	SendToReport( Dispatch( {}, "Partition Report", FrameBox, {Frame Size( 480, 56 )} ) )
);
```

**Code Explanation**:

1. Open data table;
2. Perform partition analysis.
3. Set Survival as response variable.
4. Include multiple predictors.
5. Handle missing values informatively.
6. Define initial splits by sex and class.
7. Generate profiler for results.
8. Configure term values for each predictor.
9. Adjust display settings for profiler terms.
10. Resize partition report frame.



### Example 44
> **Summary**: Performs a partition analysis to identify key variables and relationships in the data table, utilizing initial splits based on conditions and informative missing values handling.

<!-- Keywords: #PartitionAnalysis, #InitialSplits, #InformativeMissingValues, #Profiler, #SendToReport -->

**Code**:
```jsl
Open("data_table.jmp") << Partition(
	Y( :Region ),
	X( :Household Income, :IQ, :Population, :High School Graduates, :Physical Activity, :Obese ),
	Informative Missing( 1 ),
	Initial Splits(
		:Obese < 23.7,
		{:IQ < 99.5, {}, {:Physical Activity < 81.1}},
		{:High School Graduates < 86.5, {:Physical Activity >= 72.2}, {:Physical Activity >= 79.4, {}, {:Household Income >= 48148}}}
	),
	Profiler(
		1,
		Term Value(
			Household Income( 48051, Lock( 0 ), Show( 1 ) ),
			IQ( 100.344, Lock( 0 ), Show( 1 ) ),
			Population( 5.862, Lock( 0 ), Show( 1 ) ),
			High School Graduates( 86.2, Lock( 0 ), Show( 1 ) ),
			Physical Activity( 71.7, Lock( 0 ), Show( 1 ) ),
			Obese( 25.45, Lock( 0 ), Show( 1 ) )
		)
	),
	SendToReport( Dispatch( {}, "Partition Report", FrameBox, {Frame Size( 480, 92 )} ) )
);
```

**Code Explanation**:

1. Open data table;
2. Initiate Partition analysis.
3. Set Region as output variable.
4. Include selected variables for input.
5. Handle missing data informatively.
6. Define initial splits based on conditions.
7. Enable Profiler for analysis.
8. Set term values for each variable.
9. Configure Profiler display settings.
10. Adjust report frame size.



### Example 45
> **Summary**: Analyze a data table by partitioning it based on specific variables, handling missing values, and configuring initial splits for further exploration.

<!-- Keywords: #JSLScriptingLanguage, #DataPartitioning, #MissingValueHandling, #InitialSplits, #Profiler -->

**Code**:
```jsl
Open("data_table.jmp");
Partition(
	Y( :Y ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Split History( 1 ),
	Informative Missing( 1 ),
	Initial Splits( :LTG < 4.6444, {:BMI < 27.3}, {:BMI < 31.6, {:BMI < 24.4}} ),
	Profiler(
		1,
		Arrange in Rows( 6 ),
		Term Value(
			Age( 48.518, Lock( 0 ), Show( 1 ) ),
			Gender( 1, Lock( 0 ), Show( 1 ) ),
			BMI( 26.376, Lock( 0 ), Show( 1 ) ),
			BP( 94.647, Lock( 0 ), Show( 1 ) ),
			Total Cholesterol( 189.14, Lock( 0 ), Show( 1 ) ),
			LDL( 115.44, Lock( 0 ), Show( 1 ) ),
			HDL( 49.788, Lock( 0 ), Show( 1 ) ),
			TCH( 4.0702, Lock( 0 ), Show( 1 ) ),
			LTG( 4.6414, Lock( 0 ), Show( 1 ) ),
			Glucose( 91.26, Lock( 0 ), Show( 1 ) )
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Partition data.
3. Set response variable.
4. Define predictor variables.
5. Configure split history.
6. Handle missing values.
7. Specify initial splits.
8. Launch Profiler.
9. Arrange plots in rows.
10. Set term values.



### Example 46
> **Summary**: Runs the partitioning process for a data table based on country, utilizing various X variables and initial splits to generate a report.

<!-- Keywords: #JSLScripting, #Partitioning, #DataVisualization, #ReportGeneration, #JMP -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Show Tree( 0 ),
	Show Split Bar( 0 ),
	Show Split Stats( 0 ),
	Show Split Candidates( 0 ),
	Informative Missing( 1 ),
	Initial Splits( :size == {"Large"}, {}, {:size == {"Medium"}} ),
	SendToReport(
		Dispatch( {}, "Partition for country", OutlineBox, {Set Title( "Partition for country - look for Large/Medium/Small labels" )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create partition object.
3. Set Y variable: country.
4. Set X variables: sex, marital status, age, type, size.
5. Hide tree view.
6. Hide split bar.
7. Hide split statistics.
8. Hide split candidates.
9. Enable informative missing values.
10. Set initial splits: size == "Large", size == "Medium".



### Example 47
> **Summary**: Creates a decision tree model to partition data based on country, sex, marital status, age, type, and size using the Partition platform in JMP.

<!-- Keywords: #JMP, #Partition, #DecisionTree, #DataScience, #MachineLearning -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Initial Splits( :size == {"Large"}, {}, {:size == {"Medium"}} )
);
```

**Code Explanation**:

1. Set default names.
2. Open data table.
3. Create partition object.
4. Specify response variable.
5. Define predictor variables.
6. Choose decision tree method.
7. Set initial splits conditionally.



### Example 48
> **Summary**: Runs the partition analysis of a data table to identify key terms related to intracranial pressure, hepatic function, and urinary tract infection using Text Explorer

<!-- Keywords: #TextAnalysis, #PartitionAnalysis, #DataFiltering, #JMPScriptingLanguage, #TextExplorer -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
PartitionLDF2 = dt2 << Partition(
	Y( :Edibility ),
	X(
		:cap shape, :cap surface, :cap color, :bruises, :odor, :gill attachment, :gill spacing, :gill size, :gill color, :stalk shape,
		:stalk root, :stalk surface above ring, :stalk surface below ring, :stalk color above ring, :stalk color below ring, :veil type,
		:veil color, :ring number, :ring type, :spore print color, :population, :habitat
	),
	Minimum Size Split( 8.124 ),
	Informative Missing( 1 )
);
PartitionLDF2 << Local Data Filter(
	Add Filter(
		columns( :gill color, :population ),
		Where( :gill color == "h" ),
		Where( :population == "s" ),
		Display( :gill color, N Items( 12 ) ),
		Display( :population, N Items( 6 ) ),
		Order By Count( :gill color, :population )
	)
);
text2 = (Report( PartitionLDF2 ) << Parent)[Outline Box( 1 )][Text Box( 1 )] << Get Text;
```

**Code Explanation**:

1. Open data table;
2. Perform partition analysis.
3. Set response variable Edibility.
4. Define predictor variables.
5. Specify minimum split size.
6. Enable informative missing values.
7. Add local data filter.
8. Filter gill color "h".
9. Filter population "s".
10. Display filter results.



### Example 49
> **Summary**: Runs the partition analysis of a dataset to identify key terms related to intracranial pressure, hepatic function, and urinary tract infection using Text Explorer platform.

<!-- Keywords: #JSLScriptingLanguage, #PartitionAnalysis, #TextExplorer, #DataFiltering, #InformativeMissing -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
PartitionLDF1 = dt1 << Partition(
	Y( :Edibility ),
	X(
		:cap shape, :cap surface, :cap color, :bruises, :odor, :gill attachment, :gill spacing, :gill size, :gill color, :stalk shape,
		:stalk root, :stalk surface above ring, :stalk surface below ring, :stalk color above ring, :stalk color below ring, :veil type,
		:veil color, :ring number, :ring type, :spore print color, :population, :habitat
	),
	Minimum Size Split( 8.124 ),
	Informative Missing( 1 )
);
PartitionLDF1 << Local Data Filter(
	Add Filter(
		columns( :cap color, :habitat ),
		Where( :cap color == "n" ),
		Where( :habitat == "g" ),
		Display( :cap color, N Items( 10 ) ),
		Display( :habitat, N Items( 7 ) ),
		Order By Count( :cap color, :habitat )
	)
);
text1 = (Report( PartitionLDF1 ) << Parent)[Outline Box( 1 )][Text Box( 1 )] << Get Text;
Close( dt1, nosave );
dt2 = Open("data_table.jmp");
PartitionLDF2 = dt2 << Partition(
	Y( :Edibility ),
	X(
		:cap shape, :cap surface, :cap color, :bruises, :odor, :gill attachment, :gill spacing, :gill size, :gill color, :stalk shape,
		:stalk root, :stalk surface above ring, :stalk surface below ring, :stalk color above ring, :stalk color below ring, :veil type,
		:veil color, :ring number, :ring type, :spore print color, :population, :habitat
	),
	Minimum Size Split( 8.124 ),
	Informative Missing( 1 )
);
PartitionLDF2 << Local Data Filter(
	Add Filter(
		columns( :gill color, :population ),
		Where( :gill color == "h" ),
		Where( :population == "s" ),
		Display( :gill color, N Items( 12 ) ),
		Display( :population, N Items( 6 ) ),
		Order By Count( :gill color, :population )
	)
);
text2 = (Report( PartitionLDF2 ) << Parent)[Outline Box( 1 )][Text Box( 1 )] << Get Text;
```

**Code Explanation**:

1. Open data table;
2. Perform partition analysis.
3. Set response variable: Edibility.
4. Include multiple predictor variables.
5. Define minimum split size.
6. Enable informative missing values.
7. Add local data filter.
8. Filter by cap color and habitat.
9. Display filtered results.
10. Close dataset without saving.
11. Reopen data_table dataset
12. Perform another partition analysis.
13. Set response variable: Edibility.
14. Include multiple predictor variables.
15. Define minimum split size.
16. Enable informative missing values.
17. Add local data filter.
18. Filter by gill color and population.
19. Display filtered results.



### Example 50
> **Summary**: Runs the partitioning process for a data table, utilizing the Partition platform to split data by country and generate a report with column contributions and split history.

<!-- Keywords: #Partition, #DataSplitting, #ColumnContributions, #SplitHistory, #JMPScripting -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Split History( 1 ),
	Informative Missing( 1 ),
	Column Contributions( 1 ),
	Initial Splits( :size == {"Large"}, {}, {:size == {"Medium"}} ),
	SendToReport(
		Dispatch( {}, "Partition for country", OutlineBox, {Set Title( "column Contributions, Split History" )} ),
		Dispatch( {}, FrameBox( 2 ), {Frame Size( 480, 59 )} )
	)
);
```

**Code Explanation**:

1. Open table.
2. Define partition object.
3. Set response variable.
4. Define predictor variables.
5. Enable split history.
6. Enable informative missing.
7. Enable column contributions.
8. Set initial splits.
9. Customize report title.
10. Adjust frame size.



### Example 51
> **Summary**: Runs data partitioning using K-Nearest Neighbors method to predict species based on sepal and petal dimensions, publishing the prediction formula in a Formula Depot window.

<!-- Keywords: #JSLScriptingLanguage, #DataPartitioning, #KNNMethod, #FormulaDepot, #PredictiveModel -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Partition(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Method( "K Nearest Neighbors"
	),
	K( 6 )
);
obj << Publish Prediction Formula( 2 );
cw = Window( "Formula Depot" );
cw << Close Window;
```

**Code Explanation**:

1. Open data table;
2. Partition data using KNN.
3. Set target variable to Species.
4. Use Sepal and Petal dimensions.
5. Specify K Nearest Neighbors method.
6. Set K value to 6.
7. Publish prediction formula.
8. Create Formula Depot window.
9. Close Formula Depot window.



### Example 52
> **Summary**: Creates a decision tree model to predict survival based on passenger characteristics, using the Partition platform in JMP.

<!-- Keywords: #JMP, #Partition, #DecisionTree, #PredictiveModeling, #SurvivalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Partition(
	Y( :Survived ),
	X( :Passenger Class, :Sex, :Age, :Siblings and Spouses, :Parents and Children, :Fare, :Port, :Lifeboat ),
	Method( "Decision Tree" ), 
);
obj << Publish Prediction Formula( 1 );
cw = Window( "Formula Depot" );
cw << Close Window;
```

**Code Explanation**:

1. Open data table;
2. Create partition object.
3. Set response variable: Survived.
4. Set predictor variables.
5. Use Decision Tree method.
6. Publish prediction formula.
7. Open Formula Depot window.
8. Close Formula Depot window.



### Example 53
> **Summary**: Analyzes and creates reports for body fat percentage data, utilizing a Partition object to split the data based on initial conditions and enabling informative missing values.

<!-- Keywords: #JSLScriptingLanguage, #PartitionObject, #MissingValueCodes, #DataAnalysis, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Partition(
	Y( :Percent body fat ),
	X(
		:Name( "Age (years)" ), :Name( "Weight (lbs)" ), :Name( "Height (inches)" ), :Name( "Neck circumference (cm)" ),
		:Name( "Chest circumference (cm)" ), :Name( "Abdomen circumference (cm)" ), :Name( "Hip circumference (cm)" ),
		:Name( "Thigh circumference (cm)" ), :Name( "Knee circumference (cm)" ), :Name( "Ankle circumference (cm)" ),
		:Name( "Biceps (extended) circumference (cm)" ), :Name( "Forearm circumference (cm)" ), :Name( "Wrist circumference (cm)" )
	),
	Split History( 1 ),
	Informative Missing( 1 ),
	Column Contributions( 1 ),
	Initial Splits(
		:Name( "Abdomen circumference (cm)" ) < 92.3,
		{:Name( "Abdomen circumference (cm)" ) < 85.6, {}, {:Name( "Weight (lbs)" ) >= 174.5, {:Name( "Height (inches)" ) >= 72.25}}},
		{:Name( "Abdomen circumference (cm)" ) < 103.1, {}, {:Name( "Abdomen circumference (cm)" ) < 113.4, {:Name( "Height (inches)" ) >=
		72.25}}}
	)
);
:Percent body fat << Set Property( "Missing Value Codes", 0 );
obj2 = obj << Redo Analysis;
rpt = obj2 << Report;
actN = (rpt[Number Col Box( 3 )] << Get( 1 ));
```

**Code Explanation**:

1. Open data table;
2. Create partition object.
3. Set response variable.
4. Define predictor variables.
5. Enable split history.
6. Enable informative missing.
7. Enable column contributions.
8. Set initial splits.
9. Set missing value code for "Percent body fat".
10. Redo analysis.
11. Generate report.
12. Extract number from report.



### Example 54
> **Summary**: Partitions a data table to identify significant relationships between country, sex, marital status, age, type, and size using the Partition platform.

<!-- Keywords: #Partition, #DataTableAnalysis, #JMPScriptingLanguage, #MaximizeSignificance, #LeafReport -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Leaf Report( 1 ),
	Criterion( "Maximize Significance" ),
	Split Best( 1 )
);
rpt = obj << report;
leaf = rpt[Outline Box( "Leaf Report" )][Table Box( 2 )] << get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Launch Partition platform.
3. Set country as response variable.
4. Include sex, marital status, age, type, size as predictors.
5. Enable leaf report.
6. Use Maximize Significance criterion.
7. Perform best split once.
8. Retrieve partition report.
9. Access Leaf Report outline box.
10. Extract second table box as matrix.



### Example 55
> **Summary**: Runs the partitioning process for a data table based on loan information, utilizing the Partition platform to identify key variables and generate a report.

<!-- Keywords: #JMPScriptingLanguage, #Partition, #DataTableAnalysis, #LoanInformation, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Partition(
	Y( :LOAN ),
	X( :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO, :DEBTINC ),
	Informative Missing( 1 ),
	Split Best( 3 )
);
obj1 << Save Script to Report;
rpt1 = Report( obj1 );
saved1 = rpt1[Outline Box( "Partition for LOAN" )][Text Box( 1 )] << get text;
```

**Code Explanation**:

1. Open data table.
2. Define partition model.
3. Set response variable.
4. Select predictor variables.
5. Handle missing values.
6. Use best split method.
7. Save script to report.
8. Generate report object.
9. Extract outline box content.
10. Retrieve text from text box.



### Example 56
> **Summary**: Performs partition analysis to optimize split criteria and retrieve report objects, extracting text from specific boxes.

<!-- Keywords: #PartitionAnalysis, #ReportObjects, #TextExtraction, #JSLScripting, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Partition( Y( :weight ), X( :age, :sex, :height ), Informative Missing( 1 ), Split Best( 1 ) );
rpt1 = Report( obj1 );
text1 = rpt1[Text Box( 3 )] << get text;
text2 = rpt1[Text Box( 4 )] << get text;
```

**Code Explanation**:

1. Open data table;
2. Perform partition analysis.
3. Set response variable to weight.
4. Use age, sex, height as predictors.
5. Enable informative missing handling.
6. Optimize split criteria.
7. Retrieve report object.
8. Extract text from third text box.
9. Extract text from fourth text box.



### Example 57
> **Summary**: Partitions a data table using the Bootstrap Forest method, generating predicted values and column group names.

<!-- Keywords: #JSLScripting, #BootstrapForest, #Partitioning, #DataAnalysis, #PredictiveModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = Partition( Y( :country ), X( :sex, :marital status, :age, :size, :type ), Method( "Bootstrap Forest" ), Go );
obj1 << Save Predicteds( 1 );
obj1 << Save Predicteds( 1 );
group1 = dt << Get Column Groups Names;
For( i = 1, i <= N Items( group1 ), i++,
	colname = dt << Get Column Group( group1[i] );
	If( i == 1, , );
);
```

**Code Explanation**:

1. Open data table.
2. Define prediction model.
3. Fit Bootstrap Forest model.
4. Save predictions.
5. Save predictions again.
6. Retrieve column group names.
7. Loop through column groups.
8. Get current column group.
9. Skip first iteration.
10. End loop.



### Example 58
> **Summary**: Performs a partition analysis to predict loan outcomes based on various predictor variables, grouping by reason and using the best split method.

<!-- Keywords: #JMPScriptingLanguage, #PartitionAnalysis, #PredictiveModeling, #DataScience, #FinancialAnalytics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Partition(
	Y( :LOAN, VALUE, :YOJ ),
	X( :BAD, :MORTDUE, :JOB, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO ),
	By( :REASON ),
	Split Best( 5 )
);
obj << Save Prediction Formula( 1 );
```

**Code Explanation**:

1. Open data table;
2. Run Partition analysis.
3. Set response variables: LOAN, VALUE, YOJ.
4. Set predictor variables: BAD, MORTDUE, JOB, DEROG, DELINQ, CLAGE, NINQ, CLNO.
5. Group by REASON variable.
6. Use best split method, max 5 splits.
7. Save prediction formula for first model.



### Example 59
> **Summary**: Runs the partitioning process to optimize the split of data based on the height response variable, utilizing predictor variables weight, sex, and age, while locking the weight column.

<!-- Keywords: #PartitionModel, #DataSplitting, #PredictorVariables, #ResponseVariable, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Partition( Y( :height ), X( :weight, :sex, :age ), Lock Columns( 1, :weight ) );
obj << Split Best( 1 );
rpt = obj << report;
split var1 = rpt[Text Box( 3 )] << get text;
obj << Prune Worst( 1 );
obj << Split Best( 1 );
split var2 = rpt[Text Box( 3 )] << get text;
```

**Code Explanation**:

1. Open data table.
2. Launch Partition model.
3. Set response variable: height.
4. Set predictor variables: weight, sex, age.
5. Lock weight column.
6. Perform best split.
7. Retrieve report object.
8. Extract text from third Text Box.
9. Prune worst split.
10. Perform another best split.



### Example 60
> **Summary**: Performs a partition analysis to predict loan outcomes using a boosted tree method, grouping by reason and utilizing predictor variables.

<!-- Keywords: #PartitionAnalysis, #BoostedTree, #PredictiveModeling, #LoanOutcomes, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Partition(
	Y( :LOAN, VALUE, :YOJ ),
	X( :BAD, :MORTDUE, :JOB, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO ),
	By( :REASON ),
	Method( "Boosted Tree" ),
	Number of Layers( 3 ),
	Go
);
obj << Save Prediction Formula( 1 );
```

**Code Explanation**:

1. Open table.
2. Set response variables.
3. Set predictor variables.
4. Group by REASON.
5. Choose Boosted Tree method.
6. Set number of layers.
7. Run partition analysis.
8. Save prediction formula.



### Example 61
> **Summary**: Runs a partition model to analyze the relationship between brand, softness, previous use, and temperature, generating a report with a confusion matrix and decision matrix.

<!-- Keywords: #PartitionModel, #ConfusionMatrix, #DecisionMatrix, #JSLScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Partition(
	Y( :brand ),
	X( :softness, :previous use, :temperature ),
	Freq( :count ),
	Split Best( 3 ),
	Specify Profit Matrix( [1 -1, -1 1, . .], "m", "x", "Undecided" ),
	Show Fit Details( 1 ), 
);
rpt = obj << report;
confmtrx1 = rpt[Outline Box( "Confusion Matrix" )][Table Box( 1 )] << get as matrix;
decmtrx1 = rpt[Outline Box( "Decision Matrix" )][Table Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Define partition model.
3. Set response variable.
4. Specify predictor variables.
5. Use frequency column.
6. Split best with depth 3.
7. Define profit matrix.
8. Show fit details.
9. Retrieve report object.
10. Extract confusion matrix.
11. Extract decision matrix.



### Example 62
> **Summary**: Runs the partitioning process to optimize data splits and generate decision matrices, utilizing the Partition platform in JMP.

<!-- Keywords: #Partition, #DecisionMatrix, #DataSplitting, #JMPScriptingLanguage, #AutomatedAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Partition(
	Y( :brand ),
	X( :softness, :previous use, :temperature ),
	Freq( :count ),
	Split Best( 3 ),
	Specify Profit Matrix( [1 -1, -1 1, . .], "m", "x", "Undecided" ),
	Show Fit Details( 1 ), 
);
rpt = obj << report;
confmtrx1 = rpt[Outline Box( "Confusion Matrix" )][Table Box( 1 )] << get as matrix;
decmtrx1 = rpt[Outline Box( "Decision Matrix" )][Table Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Create partition model.
3. Set response variable brand.
4. Include predictors softness, previous use, temperature.
5. Use count as frequency.
6. Split data optimally 3 times.
7. Define profit matrix.
8. Show fit details.
9. Retrieve report object.
10. Extract confusion matrix as matrix.
11. Extract decision matrix as matrix.



### Example 63
> **Summary**: Process of partitioning data for best fit, utilizing sex, age, and weight as predictors, and saving residuals, prediction formulas, and predicted values.

<!-- Keywords: #Partitioning, #Regression, #DataAnalysis, #JMPScriptingLanguage, #PredictiveModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = Partition( Y( Transform Column( "Log height", Formula( Log( :height ) ) ), ), X( :sex, :age, :weight ), Split Best( 3 ) );
obj1 << Save Residuals( 1 );
obj1 << Save Prediction Formula( 1 );
obj1 << Save Predicteds( 1 );
dt << New Column( "height mod", numeric, Formula( Log( :height ) ) );
obj2 = Partition( Y( :height mod ), X( :sex, :age, :weight ), Split Best( 3 ) );
obj2 << Save Residuals( 1 );
obj2 << Save Prediction Formula( 1 );
obj2 << Save Predicteds( 1 );
```

**Code Explanation**:

1. Open data table;
2. Create Partition object.
3. Transform height to log scale.
4. Fit model with sex, age, weight.
5. Split data for best fit.
6. Save residuals.
7. Save prediction formula.
8. Save predicted values.
9. Add new column for log height.
10. Create second Partition object.
11. Use log height as response variable.
12. Fit model with sex, age, weight.
13. Split data for best fit.
14. Save residuals.
15. Save prediction formula.
16. Save predicted values.



### Example 64
> **Summary**: Partitions a data table based on response variable BAD, using predictor variables LOAN, MORTDUE, VALUE, REASON, and JOB, and saves the script to a report.

<!-- Keywords: #JSL, #PartitionModel, #DataTable, #PredictorVariables, #Report -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Partition( Y( :BAD ), X( :LOAN, :MORTDUE, :VALUE, :REASON, :JOB ), );
obj1 << Save script to report;
rpt1 = obj1 << report;
save1 = rpt1[Text Box( 1 )] << get text;
test1 = Contains( save1, "Missing value categories( 0 )" );
```

**Code Explanation**:

1. Open data table.
2. Launch partition model.
3. Set response variable BAD.
4. Include predictor variables.
5. Save script to report.
6. Retrieve report object.
7. Extract text from first text box.
8. Check for missing value message.
9. Store result in test1 variable.



### Example 65
> **Summary**: Performs a partition analysis to predict good and bad risks using the provided data table, incorporating various technical features such as random seed, informative missing values, minimum size split, and bootstrap forest method.

<!-- Keywords: #PartitionAnalysis, #RiskPrediction, #DataScience, #JMPScriptingLanguage, #MachineLearning -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Partition(
	Y( :BAD ),
	X( :LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO, :DEBTINC ),
	Set Random Seed( 12345 ),
	Informative Missing( 1 ),
	Minimum Size Split( 30 ),
	Number Trees( 10 ),
	Method( Bootstrap Forest ),
	Go
);
obj1 << Save Predicteds;
obj1 << Save Prediction Formula;
pred1 = pred2 = [];
pred1 = Concat( (dt:Prob Good Risk << get values), (dt:Prob Bad Risk << get values) );
pred2 = Concat( (dt:Name( "Prob(BAD==Good Risk)" ) << get values), (dt:Name( "Prob(BAD==Bad Risk)" ) << get values) );
```

**Code Explanation**:

1. Open data table.
2. Launch partition model.
3. Set response variable.
4. Select predictor variables.
5. Set random seed.
6. Handle missing data.
7. Define minimum split size.
8. Specify number of trees.
9. Choose bootstrap forest method.
10. Run partition analysis.
11. Save predicted values.
12. Save prediction formula.
13. Initialize prediction arrays.
14. Concatenate good risk probabilities.
15. Concatenate bad risk probabilities.



### Example 66
> **Summary**: Performs a partition analysis to predict good and bad risks using the Bootstrap Forest method, incorporating various technical features such as informative missing handling, minimum size split, and number of trees.

<!-- Keywords: #PartitionAnalysis, #BootstrapForest, #PredictiveModeling, #JMPScriptingLanguage, #DataScience -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Partition(
	Y( :BAD ),
	X( :LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO, :DEBTINC ),
	Set Random Seed( 12345 ),
	Informative Missing( 1 ),
	Minimum Size Split( 25 ),
	Number Trees( 5 ),
	Method( Bootstrap Forest ),
	Go
);
obj1 << Save Predicteds;
obj1 << Save Prediction Formula;
pred1 = pred2 = [];
pred1 = Concat( (dt:Prob Good Risk << get values), (dt:Prob Bad Risk << get values) );
pred2 = Concat( (dt:Name( "Prob(BAD==Good Risk)" ) << get values), (dt:Name( "Prob(BAD==Bad Risk)" ) << get values) );
```

**Code Explanation**:

1. Open data table;
2. Launch Partition platform.
3. Set target variable to :BAD.
4. Select predictor variables.
5. Set random seed for reproducibility.
6. Enable informative missing handling.
7. Define minimum split size.
8. Specify number of trees.
9. Choose Bootstrap Forest method.
10. Run the partition analysis.
11. Save predicted probabilities.
12. Save prediction formula.
13. Initialize prediction arrays.
14. Extract "Prob Good Risk" values.
15. Extract "Prob Bad Risk" values.
16. Concatenate probability arrays.
17. Extract "Prob(BAD==Good Risk)" values.
18. Extract "Prob(BAD==Bad Risk)" values.
19. Concatenate second set of probability arrays.



### Example 67
> **Summary**: Runs a partition model to predict loan outcomes using a Bootstrap Forest method, incorporating various predictor variables and handling informative missing values.

<!-- Keywords: #JMPScriptingLanguage, #PartitionModel, #BootstrapForestMethod, #PredictiveModeling, #DataScience -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Partition(
	Y( :LOAN ),
	X( :BAD, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO, :DEBTINC ),
	Set Random Seed( 12345 ),
	Informative Missing( 1 ),
	Minimum Size Split( 30 ),
	Number Trees( 40 ),
	Method( Bootstrap Forest ),
	Go
);
obj1 << Save Predicteds;
obj1 << Save Prediction Formula;
pred1 = dt:LOAN Predicted << get values;
pred2 = dt:LOAN Predictor << get values;
```

**Code Explanation**:

1. Open data table;
2. Create partition model.
3. Set response variable "LOAN".
4. Add predictor variables.
5. Set random seed.
6. Enable informative missing.
7. Set minimum split size.
8. Specify number of trees.
9. Choose Bootstrap Forest method.
10. Run the model.
11. Save predicted values.
12. Save prediction formula.
13. Retrieve predicted loan values.
14. Retrieve prediction formula values.



### Example 68
> **Summary**: Performs a partition analysis to predict loan outcomes, utilizing the Bootstrap Forest method and informative missing data handling.

<!-- Keywords: #JMPScriptingLanguage, #PartitionAnalysis, #BootstrapForest, #PredictiveModeling, #DataScience -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Partition(
	Y( :LOAN ),
	X( :BAD, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO, :DEBTINC ),
	Set Random Seed( 12345 ),
	Informative Missing( 1 ),
	Minimum Size Split( 2 ),
	Number Trees( 5 ),
	Method( Bootstrap Forest ),
	Go
);
obj1 << Save Predicteds;
obj1 << Save Prediction Formula;
pred1 = dt:LOAN Predicted << get values;
pred2 = dt:LOAN Predictor << get values;
```

**Code Explanation**:

1. Open data table;
2. Create partition object.
3. Set response variable to LOAN.
4. Define predictor variables.
5. Set random seed for reproducibility.
6. Enable informative missing data handling.
7. Set minimum split size.
8. Specify number of trees.
9. Choose Bootstrap Forest method.
10. Execute partition analysis.
11. Save predicted values.
12. Save prediction formula.
13. Retrieve predicted loan values.
14. Retrieve prediction formula values.



### Example 69
> **Summary**: Runs a Boosted Tree partition analysis to predict the probability of 'BAD' outcomes, utilizing predictor variables and informative missing handling.

<!-- Keywords: #BoostedTree, #PartitionAnalysis, #PredictiveModeling, #JMPScriptingLanguage, #DataScience -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = Partition(
	Y( :BAD ),
	X( :LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO, :DEBTINC ),
	Method( Boosted Tree ),
	Informative Missing( 1 ),
	Go
);
obj1 << Save Predicteds;
obj1 << Save Prediction Formula;
pred1 = pred2 = [];
pred1 = dt:Fitted Probability << get values;
pred2 = dt:Name( "Prob(BAD==Bad Risk)" ) << get values;
```

**Code Explanation**:

1. Open data table;
2. Create partition object.
3. Set response variable :BAD.
4. Set predictor variables.
5. Use Boosted Tree method.
6. Enable informative missing handling.
7. Execute partition analysis.
8. Save predicted values.
9. Save prediction formula.
10. Retrieve fitted probabilities.



### Example 70
> **Summary**: Runs a Boosted Tree partition analysis to predict loan outcomes, utilizing informative missing handling and 100 layers.

<!-- Keywords: #BoostedTree, #PartitionAnalysis, #LoanPrediction, #InformativeMissingHandling, #JSLScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = Partition(
	Y( :LOAN ),
	X( :BAD, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO, :DEBTINC ),
	Method( Boosted Tree ),
	Informative Missing( 1 ),
	Number of Layers( 100 ),
	Go
);
obj1 << Save Predicteds;
obj1 << Save Prediction Formula;
pred1 = dt:LOAN Predicted << get values;
pred2 = dt:LOAN Predictor << get values;
```

**Code Explanation**:

1. Open data table;
2. Create partition object.
3. Set response variable: LOAN.
4. Define predictor variables.
5. Choose Boosted Tree method.
6. Enable informative missing handling.
7. Set number of layers to 100.
8. Execute partition analysis.
9. Save predicted values.
10. Save prediction formula.



### Example 71
> **Summary**: Partitions a data table based on country, sex, marital status, age, type, and size variables, using the Partition platform in JMP.

<!-- Keywords: #JMPPartition, #DataTableAnalysis, #VariableSelection, #Automation, #Scripting -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
obj2 = dt2 << Partition( Y( :country ), X( :sex, :marital status, :age, :type, :size ), Split Best( 2 ), Informative Missing( 0 ) );
code3 = Substitute( obj2 << Get MM SAS Data Step, " ", "", "\!N", "", "\!n", "", "\!r", "" );
If( Host is( Windows ), , );
code4 = Substitute( obj2 << Get MM Tolerant SAS Data Step, " ", "", "\!N", "", "\!n", "", "\!r", "" );
If( Host is( Windows ), , );
```

**Code Explanation**:

1. Open data table;
2. Perform partition analysis.
3. Set Y variable to "country".
4. Set X variables to "sex", "marital status", "age", "type", "size".
5. Use best split method.
6. Disable informative missing handling.
7. Get MM SAS data step code.
8. Remove spaces from code.
9. Remove newline characters from code.
10. Remove carriage return characters from code.



### Example 72
> **Summary**: Runs the partitioning process for two data tables, generating SAS data steps and tolerant SAS data steps based on specified criteria.

<!-- Keywords: #JSLScripting, #PartitionModel, #SASDataStep, #TolerantSASDataStep, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Partition(
	Y( :ABRASION ),
	X( :SILICA, :SILANE, :SULFUR ),
	Criterion( "Maximize Significance" ),
	Informative Missing( 0 ),
	Split Best( 1 )
);
code1 = Substitute( obj << Get MM SAS Data Step, " ", "", "\!N", "", "\!n", "", "\!r", "" );
If( Host is( Windows ), , );
code2 = Substitute( obj << Get MM Tolerant SAS Data Step, " ", "", "\!N", "", "\!n", "", "\!r", "" );
If( Host is( Windows ), , );
Close( dt, no save );
dt2 = Open("data_table.jmp");
obj2 = dt2 << Partition( Y( :country ), X( :sex, :marital status, :age, :type, :size ), Split Best( 2 ), Informative Missing( 0 ) );
code3 = Substitute( obj2 << Get MM SAS Data Step, " ", "", "\!N", "", "\!n", "", "\!r", "" );
If( Host is( Windows ), , );
code4 = Substitute( obj2 << Get MM Tolerant SAS Data Step, " ", "", "\!N", "", "\!n", "", "\!r", "" );
If( Host is( Windows ), , );
```

**Code Explanation**:

1. Open data table;
2. Fit partition model on ABRASION.
3. Extract MM SAS data step.
4. Check if host is Windows.
5. Extract MM tolerant SAS data step.
6. Check if host is Windows.
7. Close data_table dataset without saving.
8. Open data table;
9. Fit partition model on country.
10. Extract MM SAS data step.



### Example 73
> **Summary**: Creates partition models for predicting BAD and LOAN outcomes using a set of predictors, including MORTDUE, VALUE, REASON, JOB, YOJ, DEROG, DELINQ, CLAGE, NINQ, CLNO, and DEBTINC.

<!-- Keywords: #PartitionModel, #PredictiveAnalytics, #DataMining, #MachineLearning, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj0 = dt << Partition(
	Y( :BAD, :LOAN ),
	X( :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO, :DEBTINC ),
	Split Best( 3 ),
	Save Predicteds( 1 )
);
obj1 = dt << Partition(
	Y( :BAD ),
	X( :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO, :DEBTINC ),
	Split Best( 3 ),
	Save Predicteds( 1 )
);
obj2 = dt << Partition(
	Y( :LOAN ),
	X( :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO, :DEBTINC ),
	Split Best( 3 ),
	Save Predicteds( 1 )
);
saved1 = (dt << get as matrix)[1, 13 :: 16];
saved2 = (dt << get as matrix)[1, 17 :: 20];
```

**Code Explanation**:

1. Open data table.
2. Create partition model for BAD, LOAN.
3. Set predictors: MORTDUE, VALUE, REASON, JOB, YOJ, DEROG, DELINQ, CLAGE, NINQ, CLNO, DEBTINC.
4. Split best 3 times.
5. Save predictions for first model.
6. Create partition model for BAD.
7. Set same predictors.
8. Split best 3 times.
9. Save predictions for second model.
10. Create partition model for LOAN.
11. Set same predictors.
12. Split best 3 times.
13. Save predictions for third model.
14. Extract saved predictions from matrix.



### Example 74
> **Summary**: Creates and creates a report for two partition models using different methods, with the first model predicting country based on sex, marital status, age, size, and type, and the second model predicting sex based on marital status, age, size, type, and country.

<!-- Keywords: #JSL, #PartitionModel, #BootstrapForest, #BoostedTree, #DataAnalysis -->

**Code**:
```jsl
Open("data_table.jmp");
obj1 = Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :size, :type ),
	Minimum Size Split( 5 ),
	Method( Bootstrap Forest ),
	Portion Bootstrap( 1 ),
	Number Terms( 2 ),
	Number Trees( 20 ),
	Go
);
obj2 = Partition(
	Y( :sex ),
	X( :marital status, :age, :size, :type, :country ),
	Minimum Size Split( 5 ),
	Method( Boosted Tree ),
	Splits Per Tree( 3 ),
	Number of Layers( 50 ),
	Learning Rate( 0.1 ),
	Early Stopping( 1 ),
	Go
);
If( Contains( Build Information(), "JMP Pro" ) != 0,
	rpt1 = Report( obj1 );
	rpt2 = Report( obj2 );
);
```

**Code Explanation**:

1. Open data table;
2. Create first partition model.
3. Set response variable to country.
4. Define predictor variables.
5. Set minimum split size.
6. Choose Bootstrap Forest method.
7. Specify portion bootstrap.
8. Set number of terms.
9. Define number of trees.
10. Execute first model.
11. Create second partition model.
12. Set response variable to sex.
13. Define predictor variables.
14. Set minimum split size.
15. Choose Boosted Tree method.
16. Set splits per tree.
17. Define number of layers.
18. Set learning rate.
19. Enable early stopping.
20. Execute second model.
21. Check for JMP Pro version.
22. Generate report for first model.
23. Generate report for second model.



### Example 75
> **Summary**: Runs the partitioning process for two models, using Bootstrap Forest and Boosted Tree methods to analyze the relationship between country, sex, marital status, age, size, type, and other variables.

<!-- Keywords: #Partitioning, #BootstrapForest, #BoostedTree, #JMPPro, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :size, :type ),
	Minimum Size Split( 5 ),
	Method( Bootstrap Forest ),
	Portion Bootstrap( 1 ),
	Number Terms( 2 ),
	Number Trees( 20 ),
	Go
);
obj2 = Partition(
	Y( :sex ),
	X( :marital status, :age, :size, :type, :country ),
	Minimum Size Split( 5 ),
	Method( Boosted Tree ),
	Splits Per Tree( 3 ),
	Number of Layers( 50 ),
	Learning Rate( 0.1 ),
	Early Stopping( 1 ),
	Go
);
If( Contains( Build Information(), "JMP Pro" ) != 0,
	rpt1 = Report( obj1 );
	rpt2 = Report( obj2 );
);
```

**Code Explanation**:

1. Open data table;
2. Create first partition model.
3. Set response variable to country.
4. Include sex, marital status, age, size, type as predictors.
5. Set minimum split size to 5.
6. Use Bootstrap Forest method.
7. Set portion bootstrap to 1.
8. Limit number of terms to 2.
9. Use 20 trees.
10. If JMP Pro, generate reports for both models.



### Example 76
> **Summary**: Runs the partitioning and profiling of data to predict loan outcomes based on job and reason, generating a report with key terms and values.

<!-- Keywords: #JSLScriptingLanguage, #DataPartitioning, #PredictiveModeling, #LoanAnalysis, #TextAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Partition(
	Y( :LOAN ),
	X( :REASON, :JOB ),
	Informative Missing( 1 ),
	Initial Splits( :JOB == {"Sales", "Self", "Mgr", "Other"}, {:REASON == {"", "HomeImp"}} )
);
obj << Save Prediction Formula;
colPropLst = Column( dt, "LOAN Predictor" ) << Get Properties List;
colProp = Column( dt, "LOAN Predictor" ) << Get Column Properties;
colForm = Column( dt, "LOAN Predictor" ) << Get Formula;
obj1 = dt << Profiler( Y( :LOAN Predictor ) );
rpt1 = obj1 << report;
predProfScptObj = rpt1[Outline Box( "Prediction Profiler" )] << get scriptable object;
obj1 << Term Value( :JOB( "" ), :REASON( "" ) );
jobval = rpt1[Outline Box( "Prediction Profiler" )][Text Box( 3 )] << get text;
reasonval = rpt1[Outline Box( "Prediction Profiler" )][Text Box( 5 )] << get text;
predProfLoanPred = Num( rpt1[Outline Box( "Prediction Profiler" )][Text Box( 2 )] << get text );
loanPredCol = Column( dt, "LOAN Predictor" )[(dt << Select Where( :JOB == "" & :REASON == "" )) << get selected rows];
```

**Code Explanation**:

1. Open data table;
2. Partition data on LOAN.
3. Use REASON and JOB as predictors.
4. Set initial splits for JOB and REASON.
5. Save prediction formula.
6. Get properties of LOAN Predictor column.
7. Retrieve column properties.
8. Fetch formula for LOAN Predictor.
9. Create Profiler for LOAN Predictor.
10. Extract Prediction Profiler report.



### Example 77
> **Summary**: Performs partition analysis on a data table, utilizing Shapley values to predict outcomes and calculate absolute deviations from the predicted values.

<!-- Keywords: #JSLScripting, #PartitionAnalysis, #ShapleyValues, #PredictiveModeling, #DataVisualization -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
obj2 = dt2 << Partition(
	Y( :Y ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Informative Missing( 1 ),
	Initial Splits( :LTG < 4.6052, {:BMI < 27}, {:BMI < 27.8} ),
	Profiler( 1, Arrange in Rows( 7 ), Shapley Set Random Seed( 1000 ), Save Shapley Values )
);
dt2:SHAP Intercept << Exclude( 0 );
dt2 << New Column( "Sum of SHAP",
	Formula(
		Sum(
			:SHAP Intercept,
			SHAP Age,
			:SHAP Gender,
			:SHAP BMI,
			:SHAP BP,
			:SHAP Total Cholesterol,
			:SHAP LDL,
			:SHAP HDL,
			:SHAP TCH,
			:SHAP LTG,
			:SHAP Glucose
		)
	)
);
obj2 << Save Predicteds;
dt2 << New Column( "Absolute Deviation", Formula( Abs( :Sum of SHAP - :Y Predicted ) ) );
dt2 << New Column( "Max Deviation", Formula( Col Max( :Absolute Deviation ) ), hide );
Window( "data_table - Partition of Y" ) << close window;
```

**Code Explanation**:

1. Open data table;
2. Perform partition analysis.
3. Set response variable Y.
4. Define predictor variables.
5. Handle informative missing values.
6. Specify initial splits.
7. Enable profiler with Shapley values.
8. Exclude SHAP Intercept from exclusion.
9. Create "Sum of SHAP" column.
10. Save predicted values.
11. Create "Absolute Deviation" column.
12. Create "Max Deviation" column, hide it.
13. Close "data_table - Partition of Y" window.



## Partition using Set Name
### Example 1
> **Summary**: Prepares data and partition analysis for a sample dataset, renaming columns, setting the sex variable as the response, and configuring initial splits and missing values.

<!-- Keywords: #JMPScriptingLanguage, #DataPreparation, #PartitionAnalysis, #ColumnRenaming, #MissingValues -->

**Code**:
```jsl
dt = Open("data_table.jmp");
:name[1] = "KA\!"TIE";
:name[2] = "LOU'ISE";
:name[3] = "JA\NE";
:name[4] = "LIL&LIE";
:age << Set Name( "a\!"g\&\e" );
Partition(
	Y( :sex ),
	X( :"a\!"g\&\e"n, :height, :weight ),
	Informative Missing( 1 ),
	Initial Splits( :height >= 63, {:height >= 67, {}, {:weight < 112}}, {:"a\!"g\&\e"n == {12, 13}} ),
	SendToReport( Dispatch( {}, "Partition Report", FrameBox, {Frame Size( 480, 74 )} ) )
);
```

**Code Explanation**:

1. Open data table;
2. Rename first column.
3. Rename second column.
4. Rename third column.
5. Rename fourth column.
6. Rename age column.
7. Perform partition analysis.
8. Set sex as response variable.
9. Include age, height, weight as predictors.
10. Configure initial splits and missing values.



### Example 2
> **Summary**: Creates partition models for exploratory data analysis, applying preset settings and setting report titles for each sample.

<!-- Keywords: #JMPScriptingLanguage, #PartitionModeling, #DataExploration, #PresetSettings, #ReportCustomization -->

**Code**:
```jsl
plat_samples = ["Partition" => {"Explore Column Contributions"}, => {}];
dt = Open("data_table.jmp");
dt:Y << Set Name( "Y Var" );
For Each( {sample}, plat_samples["Partition"],
	obj = dt << Partition( Y( :Y Var ), X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ) );
	Eval( Eval Expr( obj << Apply Preset( "Sample Presets", Expr( sample ) ) ) );
	obj << Set Report Title( sample );
);
```

**Code Explanation**:

1. Define partition samples.
2. Open data table;
3. Rename Y column.
4. Iterate over partition samples.
5. Create partition model.
6. Apply preset settings.
7. Set report title.
8. Repeat for each sample.



## Partition using Set Modeling Type
### Example 1
> **Summary**: Runs a partition model to identify relationships between variables in the data table, utilizing nominal modeling types for 'DEROG' and 'DELINQ', and generating a report with customized settings.

<!-- Keywords: #PartitionModel, #NominalModelingType, #DataTable, #ReportGeneration, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:DEROG << Set Modeling Type( "nominal" );
dt:DELINQ << Set Modeling Type( "nominal" );
rpt = Partition(
	Y( :BAD ),
	X( :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE ),
	Validation( :Validation ),
	Missing Value Order( Low( :VALUE ), High( :MORTDUE, :YOJ, :CLAGE ) ),
	Show Tree( 0 ),
	Show Split Bar( 0 ),
	Show Split Stats( 0 ),
	Show Split Candidates( 0 ),
	Informative Missing( 1 ),
	Initial Splits(
		:DELINQ == {6, 7, 8, 10, 11, 12, 13, 15, 5, 3, 4, 2, 1},
		{:VALUE < 29375, {}, {:DEROG == {4, 6, 7, 8, 10, 3, 2, 1}, {:VALUE >= 121543, {}, {:CLAGE < 92.5835570004761, {}, {:VALUE < 70535}}
		}, {:DELINQ == {6, 7, 10, 11, 13}, {}, {:DEROG == {0}, {:YOJ < 28, {:REASON == {""}}, {:MORTDUE >= 53951}}}}}},
		{:DEROG == {7, 9, 10, 4, 3, 6, 2, 1}, {:CLAGE < 184.990324385145, {:VALUE < 26140}}, {:CLAGE < 175.200960237201, {:JOB == {"Self",
		"Sales", "Other", "Mgr"}, {:VALUE < 23636, {}, {:YOJ < 22, {:CLAGE >= 174.591170802145, {}, {:DELINQ == {0}}}}}, {:MORTDUE >= 39000,
		{}, {:VALUE < 71449, {Is Missing( :YOJ )}}}}}}
	),
	SendToReport( Dispatch( {}, "Partition Report", FrameBox, {Frame Size( 480, 266 )} ) )
);
```

**Code Explanation**:

1. Open data table;
2. Set "DEROG" modeling type to nominal.
3. Set "DELINQ" modeling type to nominal.
4. Create partition model.
5. Set response variable "BAD".
6. Set predictor variables.
7. Use validation column.
8. Define missing value order.
9. Hide tree display.
10. Adjust report size.



### Example 2
> **Summary**: Performs a partition analysis to identify relationships between variables in the data table, utilizing multiple predictors and validation column.

<!-- Keywords: #PartitionAnalysis, #MultiplePredictors, #ValidationColumn, #JSLScriptingLanguage, #DataScience -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:DEROG << Set Modeling Type( "nominal" );
dt:DELINQ << Set Modeling Type( "nominal" );
rpt = Partition(
	Y( :BAD ),
	X( :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE ),
	Validation( :Validation ),
	Missing Value Order( Low( :VALUE ), High( :MORTDUE, :YOJ, :CLAGE ) ),
	Show Tree( 0 ),
	Show Split Bar( 0 ),
	Show Split Stats( 0 ),
	Show Split Candidates( 0 ),
	Informative Missing( 1 ),
	Initial Splits(
		:DELINQ == {6, 7, 8, 10, 11, 12, 13, 15, 5, 3, 4, 2, 1},
		{:VALUE < 29375, {}, {:DEROG == {4, 6, 7, 8, 10, 3, 2, 1}, {:VALUE >= 121543, {}, {:CLAGE < 92.5835570004761, {}, {:VALUE < 70535}}
		}, {:DELINQ == {6, 7, 10, 11, 13}, {}, {:DEROG == {0}, {:YOJ < 28, {:REASON == {""}}, {:MORTDUE >= 53951}}}}}},
		{:DEROG == {7, 9, 10, 4, 3, 6, 2, 1}, {:CLAGE < 184.990324385145, {:VALUE < 26140}}, {:CLAGE < 175.200960237201, {:JOB == {"Self",
		"Sales", "Other", "Mgr"}, {:VALUE < 23636, {}, {:YOJ < 22, {:CLAGE >= 174.591170802145, {}, {:DELINQ == {0}}}}}, {:MORTDUE >= 39000,
		{}, {:VALUE < 71449, {Is Missing( :YOJ )}}}}}}
	),
	SendToReport( Dispatch( {}, "Partition Report", FrameBox, {Frame Size( 480, 266 )} ) )
);
rpt << Redo Analysis;
```

**Code Explanation**:

1. Open data table;
2. Set DEROG modeling type to nominal.
3. Set DELINQ modeling type to nominal.
4. Perform partition analysis.
5. Specify BAD as response variable.
6. Include multiple predictors.
7. Use validation column.
8. Set missing value order.
9. Hide tree display.
10. Redo analysis.



### Example 3
> **Summary**: Performs a partition analysis to identify relationships between variables in the data table, utilizing initial splits and informative missing handling.

<!-- Keywords: #PartitionAnalysis, #JMPScriptingLanguage, #DataMining, #PredictiveModeling, #DecisionTree -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:DEROG << Set Modeling Type( "nominal" );
dt:DELINQ << Set Modeling Type( "nominal" );
Partition(
	Y( :BAD ),
	X( :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE ),
	Validation( :Validation ),
	Missing Value Order( Low( :VALUE ), High( :MORTDUE, :YOJ, :CLAGE ) ),
	Show Tree( 0 ),
	Show Split Bar( 0 ),
	Show Split Stats( 0 ),
	Show Split Candidates( 0 ),
	Informative Missing( 1 ),
	Initial Splits(
		:DELINQ == {6, 7, 8, 10, 11, 12, 13, 15, 5, 3, 4, 2, 1},
		{:VALUE < 29375, {}, {:DEROG == {4, 6, 7, 8, 10, 3, 2, 1}, {:VALUE >= 121543, {}, {:CLAGE < 92.5835570004761, {}, {:VALUE < 70535}}
		}, {:DELINQ == {6, 7, 10, 11, 13}, {}, {:DEROG == {0}, {:YOJ < 28, {:REASON == {""}}, {:MORTDUE >= 53951}}}}}},
		{:DEROG == {7, 9, 10, 4, 3, 6, 2, 1}, {:CLAGE < 184.990324385145, {:VALUE < 26140}}, {:CLAGE < 175.200960237201, {:JOB == {"Self",
		"Sales", "Other", "Mgr"}, {:VALUE < 23636, {}, {:YOJ < 22, {:CLAGE >= 174.591170802145, {}, {:DELINQ == {0}}}}}, {:MORTDUE >= 39000,
		{}, {:VALUE < 71449, {Is Missing( :YOJ )}}}}}}
	),
	SendToReport(
		Dispatch( {}, "Partition Graph", FrameBox, {Frame Size( 631, 240 )} ),
		Dispatch( {}, "Partition Report", FrameBox,
			{Frame Size( 631, 266 ), DispatchSeg( CustomStreamSeg( 1 ), {Text Color( "Dark Green" )} )}
		)
	)
);
```

**Code Explanation**:

1. Open table.
2. Set modeling type.
3. Set modeling type.
4. Start partition analysis.
5. Specify response variable.
6. Specify predictor variables.
7. Use validation column.
8. Define missing value order.
9. Configure tree display options.
10. Set informative missing handling.
11. Define initial splits.
12. Customize report appearance.



### Example 4
> **Summary**: Performs a partition analysis to examine the relationship between difference and mean, utilizing multiple predictors and validation for a nominal response variable.

<!-- Keywords: #PartitionAnalysis, #NominalResponseVariable, #MultiplePredictors, #Validation, #JSLScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:DEROG << Set Modeling Type( "nominal" );
dt:DELINQ << Set Modeling Type( "nominal" );
Partition(
	Y( :BAD ),
	X( :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, CLAGE ),
	Validation( :Validation ),
	Informative Missing( 1 ),
	Go,
	Profiler(
		1,
		Arrange in Rows( 5 ),
		Term Value(
			MORTDUE( 73760, Lock( 0 ), Show( 1 ) ),
			VALUE( 101780, Lock( 0 ), Show( 1 ) ),
			REASON( "", Lock( 0 ), Show( 1 ) ),
			JOB( "", Lock( 0 ), Show( 1 ) ),
			YOJ( 8.922, Lock( 0 ), Show( 1 ) ),
			DEROG( ., Lock( 0 ), Show( 1 ) ),
			DELINQ( ., Lock( 0 ), Show( 1 ) ),
			CLAGE( 179.8, Lock( 0 ), Show( 1 ) )
		)
	), 
);
```

**Code Explanation**:

1. Open data table.
2. Set DEROG modeling type to nominal.
3. Set DELINQ modeling type to nominal.
4. Perform partition analysis.
5. Specify BAD as response variable.
6. Include multiple predictors in model.
7. Use Validation column for validation.
8. Enable informative missing values.
9. Run the partition analysis.
10. Generate profiler with specified settings.



### Example 5
> **Summary**: Performs a partitioning analysis to examine the relationship between difference and mean, utilizing Set Modeling Type for nominal variables and including multiple predictors in the model.

<!-- Keywords: #JMPScriptingLanguage, #PartitioningAnalysis, #NominalVariables, #PredictorVariables, #DataModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:DEROG << Set Modeling Type( "nominal" );
dt:DELINQ << Set Modeling Type( "nominal" );
Partition(
	Y( :REASON ),
	X( :MORTDUE, :VALUE, :JOB, :YOJ, :DEROG, :DELINQ, CLAGE ),
	Validation( :Validation ),
	Informative Missing( 1 ),
	Go,
	Profiler(
		1,
		Arrange in Rows( 4 ),
		Term Value(
			MORTDUE( 73760, Lock( 0 ), Show( 1 ) ),
			VALUE( 101780, Lock( 0 ), Show( 1 ) ),
			JOB( "", Lock( 0 ), Show( 1 ) ),
			YOJ( 8.922, Lock( 0 ), Show( 1 ) ),
			DEROG( ., Lock( 0 ), Show( 1 ) ),
			DELINQ( ., Lock( 0 ), Show( 1 ) ),
			CLAGE( 179.8, Lock( 0 ), Show( 1 ) )
		)
	), 
);
```

**Code Explanation**:

1. Open data table;
2. Set DEROG as nominal.
3. Set DELINQ as nominal.
4. Partition data for REASON.
5. Include MORTDUE, VALUE, JOB, YOJ, DEROG, DELINQ, CLAGE as predictors.
6. Use Validation column for validation.
7. Enable informative missing values.
8. Execute partitioning.
9. Launch profiler.
10. Arrange profiler in 4 rows.



## Partition using Transform Column
> **Summary**: Runs data transformation and partitioning to analyze the relationship between 'height' and 'Transform' by 'sex', utilizing a formula-based column transformation and informative missing values.

<!-- Keywords: #JMPScriptingLanguage, #DataTransformation, #PartitionAnalysis, #InformativeMissingValues, #ByGroups -->

**Code**:
```jsl
Open("data_table.jmp");
dt = Current Data Table() << Transform Column( "Transform", Formula( :name || " transformed" ) );
par = Partition(
	Transform Column( "Transform", Formula( :name || " transformed" ) ),
	Y( :height ),
	X( :Transform ),
	Informative Missing( 1 ),
	By( :sex )
);
```

**Code Explanation**:

1. Open data table;
2. Assign current data table to `dt`.
3. Create new column "Transform".
4. Apply transformation formula to "Transform".
5. Partition data by "sex".
6. Set "height" as response variable.
7. Set "Transform" as predictor variable.
8. Enable informative missing values.
9. Perform partition analysis.
10. Analyze results by sex.



## Partition using If
### Example 1
> **Summary**: Executes a Bootstrap Forest partitioning analysis with validation on a data table, generating overall statistics and confusion matrices.

<!-- Keywords: #JMPScriptingLanguage, #BootstrapForestPartitioning, #DataValidation, #ConfusionMatrix, #PartitionAnalysis -->

**Code**:
```jsl
If( Contains( Build Information(), "JMP Pro" ) != 0,
	dt = Open("data_table.jmp");
	dt << New Column( "Validation1", nominal, Formula( If( :country == "European", 2, 1 ) ) );
	r = dt << Select Where( :country == "European" );
	r << Exclude( 1 );
	obj1 = Partition(
		Y( :country ),
		X( :sex, :marital status, :age, :size, :type ),
		Method( "Bootstrap Forest" ),
		Use Excluded Rows for Validation( 1 ),
		Set Random Seed( 12345 ),
		Portion Bootstrap( 1 ),
		Number Trees( 100 ),
		Number Terms( 4 ),
		Go
	);
	rpt1 = obj1 << report;
	stat1 = (rpt1[Outline Box( "Overall Statistics" )][Table Box( 1 )] << get as matrix);
	confmat1 = (rpt1[Outline Box( "Confusion Matrix" )][Table Box( 1 )] << get as matrix) | (rpt1[Outline Box( "Confusion Matrix" )][
	Table Box( 2 )] << get as matrix);
	dt << Clear Row States( 1 );
	obj2 = dt << Partition(
		Y( :country ),
		X( :sex, :marital status, :age, :size, :type ),
		Method( "Bootstrap Forest" ),
		Validation( :Validation1 ),
		Set Random Seed( 12345 ),
		Portion Bootstrap( 1 ),
		Number Trees( 100 ),
		Number Terms( 4 ),
		Go
	);
	rpt2 = obj2 << report;
	stat2 = rpt2[Outline Box( "Overall Statistics" )][Table Box( 1 )] << get as matrix;
	confmat2 = (rpt2[Outline Box( "Confusion Matrix" )][Table Box( 1 )] << get as matrix) | (rpt2[Outline Box( "Confusion Matrix" )][
	Table Box( 2 )] << get as matrix);
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check if JMP Pro is installed.
2. Open data table;
3. Add a new column "Validation1".
4. Select rows where country is "European".
5. Exclude selected rows.
6. Run Bootstrap Forest partition.
7. Retrieve overall statistics.
8. Retrieve confusion matrix.
9. Clear row states.
10. Run Bootstrap Forest partition with validation.
11. Retrieve overall statistics.
12. Retrieve confusion matrix.
13. Close the dataset without saving.



### Example 2
> **Summary**: Runs a decision tree analysis to predict survival chances based on passenger data, utilizing partitioning and prediction formula saving.

<!-- Keywords: #JMPScriptingLanguage, #DecisionTreeAnalysis, #Partitioning, #PredictionFormula, #DataTableManipulation -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	n1 = N Items( dt << get column names( string ) );
	obj = dt << Partition(
		Y( :Survived ),
		X( :Passenger Class, :Sex, :Age, :Siblings and Spouses, :Parents and Children, :Fare, :Port, :Lifeboat ),
		Method( "Decision Tree" ),
		Split Best( 5 )
	);
	obj << Save Prediction Formula( 1 );
	prob1 = (dt:Name( "Prob(Survived==No)" ) << get values) || (dt:Name( "Prob(Survived==Yes)" ) << get values);
	pred1 = dt:Most Likely Survived << get values( 1 );
	dt << Delete Columns( n1 + 1 :: N Cols( dt ) );
	depot1 = obj << Publish Prediction Formula( 1 );
	depot1 << Run Script( 1 );
	prob2 = (dt:Name( "Prob(Survived==No)" ) << get values) || (dt:Name( "Prob(Survived==Yes)" ) << get values);
	pred2 = dt:Most Likely Survived << get values( 1 );
	Close( dt, no save );
	Window( "Formula Depot" ) << close window( 1 );
);
```

**Code Explanation**:

1. Check for JMP Pro version.
2. Open data table;
3. Count initial columns.
4. Perform partition analysis.
5. Save prediction formula.
6. Retrieve probability values.
7. Retrieve predicted survival values.
8. Delete added columns.
9. Publish prediction formula.
10. Run published script.
11. Retrieve updated probability values.
12. Retrieve updated predicted survival values.
13. Close dataset without saving.
14. Close Formula Depot window.



### Example 3
> **Summary**: Runs a survival prediction analysis using Bootstrap Forest method in JMP Pro, generating predicted probabilities and most likely survival outcomes.

<!-- Keywords: #JMPPro, #BootstrapForest, #SurvivalAnalysis, #PredictiveModeling, #DataPartition -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	n1 = N Items( dt << get column names( string ) );
	obj = dt << Partition(
		Y( :Survived ),
		X( :Passenger Class, :Sex, :Age, :Siblings and Spouses, :Parents and Children, :Fare, :Port, :Lifeboat ),
		Method( "Bootstrap Forest" ),
		Go
	);
	obj << Save Prediction Formula( 1 );
	prob1 = (dt:Name( "Prob(Survived==No)" ) << get values) || (dt:Name( "Prob(Survived==Yes)" ) << get values);
	pred1 = dt:Most Likely Survived << get values( 1 );
	dt << Delete Columns( n1 + 1 :: N Cols( dt ) );
	depot1 = obj << Publish Prediction Formula( 1 );
	depot1 << Run Script( 1 );
	prob2 = (dt:Name( "Prob(Survived==No)" ) << get values) || (dt:Name( "Prob(Survived==Yes)" ) << get values);
	pred2 = dt:Most Likely Survived << get values( 1 );
	Close( dt, no save );
	Window( "Formula Depot" ) << close window( 1 );
);
```

**Code Explanation**:

1. Check for JMP Pro version.
2. Open data table;
3. Count initial columns.
4. Partition data using Bootstrap Forest.
5. Save prediction formula.
6. Retrieve survival probabilities.
7. Retrieve predicted survival.
8. Delete added columns.
9. Publish prediction formula.
10. Run published script.
11. Retrieve updated probabilities.
12. Retrieve updated predictions.
13. Close dataset without saving.
14. Close Formula Depot window.



### Example 4
> **Summary**: Creates and configures a partition object in JMP Pro, utilizing the Bootstrap Forest method to analyze data.

<!-- Keywords: #JMPPro, #PartitionObject, #BootstrapForest, #DataAnalysis, #Scripting -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ) > 0,
	dt = Open("data_table.jmp");
	dt << add rows( 2 );
	obj = Partition( Y( :height ), X( :weight, :age ), By( :sex ), Method( "Bootstrap Forest" ), Go );
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check for JMP Pro.
2. Open data table;
3. Add 2 rows to table.
4. Create partition object.
5. Set Y variable: height.
6. Set X variables: weight, age.
7. Use sex as By variable.
8. Choose Bootstrap Forest method.
9. Execute the model.
10. Close table without saving.



### Example 5
> **Summary**: Runs a K-Nearest Neighbors (KNN) analysis with frequency and weight columns, capturing logs for each partitioning method in JMP Pro.

<!-- Keywords: #JMPPro, #KNN, #FrequencyColumn, #WeightColumn, #LogCapture -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	b log = "K-Nearest Neighbors does not support Weight or Freq columns. These columns are ignored in the analysis.";
	dt = Open("data_table.jmp");
	dt << New Column( "freq1", values( [0, 0, 0] |/ J( 37, 1, 1 ) ) );
	dt << New Column( "freq2", values( [0, 2] |/ J( 38, 1, 1 ) ) );
	dt << New Column( "freq3", values( [3, 2] |/ J( 38, 1, 1 ) ) );
	log1 = Log Capture(
		obj1 = dt << Partition( Y( :sex ), X( :weight, :height ), Freq( :freq1 ), Method( "K Nearest Neighbors" ), K( 3 ), Nonrandom )
	);
	log2 = Log Capture(
		obj2 = dt << Partition( Y( :sex ), X( :weight, :height ), Weight( :freq2 ), Method( "K Nearest Neighbors" ), K( 3 ), Nonrandom )
	);
	log3 = Log Capture(
		obj3 = dt << Partition( Y( :weight ), X( :sex, :height ), Freq( :freq3 ), Method( "K Nearest Neighbors" ), K( 3 ), Nonrandom )
	);
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check for JMP Pro version.
2. Log warning about unsupported features.
3. Open data table;
4. Add "freq1" column with values.
5. Add "freq2" column with values.
6. Add "freq3" column with values.
7. Capture log for KNN partition with Freq.
8. Capture log for KNN partition with Weight.
9. Capture log for KNN partition predicting weight.
10. Close dataset without saving.



### Example 6
> **Summary**: Process of performing K-Nearest Neighbors (KNN) partitioning and prediction on a data table, utilizing JMP Pro features.

<!-- Keywords: #JMPPro, #KNNPartitioning, #PredictiveModeling, #DataScience, #Scripting -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ) > 0,
	dt = Open("data_table.jmp");
	dt:Species << Set Modeling Type( Ordinal );
	n1 = N Items( dt << get column names( string ) );
	obj = dt << Partition(
		Y( :Species ),
		X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
		Method( "K Nearest Neighbors"
		),
		K( 6 )
	);
	obj << Save Prediction Formula( 2 );
	pred1 = dt:Predicted Formula Species 2 << get values( 1 );
	dt << Delete Columns( n1 + 1 :: N Cols( dt ) );
	depot1 = obj << Publish Prediction Formula( 2 );
	depot1 << Run Script( 1 );
	pred2 = dt:Predicted Formula Species 2 << get values( 1 );
	Close( dt, no save );
	Window( "Formula Depot" ) << close window( 1 );
);
```

**Code Explanation**:

1. Check for JMP Pro.
2. Open data table;
3. Set Species as Ordinal.
4. Count initial columns.
5. Perform KNN partition.
6. Save prediction formula.
7. Retrieve predicted values.
8. Remove added columns.
9. Publish prediction formula.
10. Run published script.
11. Retrieve updated predictions.
12. Close dataset without saving.
13. Close Formula Depot window.



### Example 7
> **Summary**: Runs a K-Nearest Neighbors partitioning analysis on the Iris dataset, generating training and validation results matrices, confusion matrices, and saving near neighbor rows, predicted values, and prediction formulas.

<!-- Keywords: #JSL, #KNN, #IrisDataset, #Partitioning, #MachineLearning -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	b rslt train = [1 124 0.699485751601417 0.0403225806451613 5,
	2 124 0.795504877589416 0.0483870967741935 6,
	3 124 0.841074356648853 0.0403225806451613 5];
	b rslt valid = [1 26 0.555096798723092 0.115384615384615 3,
	2 26 0.637206249989699 0.115384615384615 3,
	3 26 0.653715201877712 0.0769230769230769 2];
	b confmtrx train1 = [44 0 0, 0 37 2, 0 3 38];
	b confmtrx valid1 = [6 0 0, 0 10 1, 0 1 8];
	dt = Open("data_table.jmp");
	Random Reset( 12345 );
	obj1 = dt << Partition(
		Y( :Species ),
		X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
		Method( "K Nearest Neighbors"
		),
		Validation Portion( 0.2 ),
		K( 3 ),
		Nonrandom
	);
	rpt1 = obj1 << report;
	obj1 << Save Near Neighbor Rows( 1 );
	obj1 << Save Predicteds;
	obj1 << Save Prediction Formula( 1 );
	obj1 << Save Prediction Formula( 2 );
	obj1 << Save Prediction Formula( 3 );
	rslt train = rpt1[Outline Box( "Training" )][Table Box( 1 )] << get as matrix;
	rslt valid = rpt1[Outline Box( "Validation" )][Table Box( 1 )] << get as matrix;
	confmtrx train1 = rpt1[Outline Box( "K Nearest Neighbors" )][Table Box( 3 )] << get as matrix;
	confmtrx train2 = rpt1[Outline Box( "K Nearest Neighbors" )][Table Box( 4 )] << get as matrix;
	confmtrx valid1 = rpt1[Outline Box( "K Nearest Neighbors" )][Table Box( 5 )] << get as matrix;
	confmtrx valid2 = rpt1[Outline Box( "K Nearest Neighbors" )][Table Box( 6 )] << get as matrix;
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check for JMP Pro.
2. Define training results matrix.
3. Define validation results matrix.
4. Define training confusion matrix.
5. Define validation confusion matrix.
6. Open data table;
7. Set random seed.
8. Perform K-Nearest Neighbors partition.
9. Generate report.
10. Save near neighbor rows.
11. Save predicted values.
12. Save prediction formulas.
13. Extract training results matrix.
14. Extract validation results matrix.
15. Extract training confusion matrix.
16. Extract another training confusion matrix.
17. Extract validation confusion matrix.
18. Extract another validation confusion matrix.
19. Close dataset without saving.



### Example 8
> **Summary**: Runs a boosted tree partition analysis to predict bad loan risks, utilizing informative missing handling and saving predicted values and formulas.

<!-- Keywords: #JMPScriptingLanguage, #BoostedTree, #PartitionAnalysis, #PredictiveModeling, #DataScience -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	dt << New Column( "VCol", formula( Random Integer( 1, 3 ) ) );
	obj1 = Partition(
		Y( :BAD ),
		X( :LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO, :DEBTINC ),
		Validation( :Vcol ),
		Method( Boosted Tree ),
		Informative Missing( 1 ),
		Go
	);
	obj1 << Save Predicteds;
	obj1 << Save Prediction Formula;
	pred1 = pred2 = [];
	pred1 = dt:Fitted Probability << get values;
	pred2 = dt:Name( "Prob(BAD==Bad Risk)" ) << get values;
	Close( dt, no save );
	dt = Open("data_table.jmp");
	obj1 = Partition(
		Y( :BAD ),
		X( :LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO, :DEBTINC ),
		Method( Boosted Tree ),
		Informative Missing( 1 ),
		Go
	);
	obj1 << Save Predicteds;
	obj1 << Save Prediction Formula;
	pred1 = pred2 = [];
	pred1 = dt:Fitted Probability << get values;
	pred2 = dt:Name( "Prob(BAD==Bad Risk)" ) << get values;
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check for JMP Pro.
2. Open data table;
3. Add new column VCol.
4. Create partition object.
5. Set target variable BAD.
6. Set predictor variables.
7. Use validation column VCol.
8. Apply Boosted Tree method.
9. Enable informative missing handling.
10. Run partition analysis.
11. Save predicted values.
12. Save prediction formula.
13. Initialize prediction lists.
14. Retrieve fitted probabilities.
15. Retrieve probability values.
16. Close table without saving.
17. Reopen data_table.jmp.
18. Create partition object again.
19. Set target variable BAD.
20. Set predictor variables.
21. Apply Boosted Tree method.
22. Enable informative missing handling.
23. Run partition analysis.
24. Save predicted values.
25. Save prediction formula.
26. Initialize prediction lists.
27. Retrieve fitted probabilities.
28. Retrieve probability values.
29. Close table without saving.



### Example 9
> **Summary**: Runs the creation and validation of a boosted tree model to predict bad risk in a loan dataset, utilizing informative missing values and random integer validation.

<!-- Keywords: #JMPPro, #BoostedTree, #PartitionModel, #InformativeMissing, #Validation -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	obj1 = Partition(
		Y( :BAD ),
		X( :LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO, :DEBTINC ),
		Method( Boosted Tree ),
		Informative Missing( 1 ),
		Go
	);
	obj1 << Save Predicteds;
	obj1 << Save Prediction Formula;
	pred1 = pred2 = [];
	pred1 = dt:Fitted Probability << get values;
	pred2 = dt:Name( "Prob(BAD==Bad Risk)" ) << get values;
	Close( dt, no save );
	dt = Open("data_table.jmp");
	dt << New Column( "VCol", formula( Random Integer( 1, 3 ) ) );
	obj1 = Partition(
		Y( :BAD ),
		X( :LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO, :DEBTINC ),
		Validation( :Vcol ),
		Method( Boosted Tree ),
		Informative Missing( 1 ),
		Go
	);
	obj1 << Save Predicteds;
	obj1 << Save Prediction Formula;
	pred1 = pred2 = [];
	pred1 = dt:Fitted Probability << get values;
	pred2 = dt:Name( "Prob(BAD==Bad Risk)" ) << get values;
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check for JMP Pro.
2. Open data table.
3. Create partition model.
4. Use Boosted Tree method.
5. Enable informative missing.
6. Run the model.
7. Save predicted values.
8. Save prediction formula.
9. Initialize prediction lists.
10. Retrieve fitted probabilities.
11. Retrieve probability of bad risk.
12. Close data table without saving.
13. Reopen data table.
14. Add new column VCol with random integers.
15. Create partition model again.
16. Use Boosted Tree method.
17. Enable informative missing.
18. Specify validation column.
19. Run the model.
20. Save predicted values.
21. Save prediction formula.
22. Initialize prediction lists.
23. Retrieve fitted probabilities.
24. Retrieve probability of bad risk.
25. Close data table without saving.



### Example 10
> **Summary**: Runs a boosted tree partition analysis to predict loan outcomes, utilizing informative missing handling and saving predicted values and formulas.

<!-- Keywords: #JMPScriptingLanguage, #BoostedTreePartitionAnalysis, #PredictiveModeling, #DataTableOperations, #MachineLearning -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	dt << New Column( "VCol", formula( Random Integer( 1, 3 ) ) );
	obj1 = Partition(
		Y( :LOAN ),
		X( :BAD, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO, :DEBTINC ),
		Validation( :VCol ),
		Method( Boosted Tree ),
		Informative Missing( 1 ),
		Number of Layers( 100 ),
		Go
	);
	obj1 << Save Predicteds;
	obj1 << Save Prediction Formula;
	pred1 = dt:LOAN Predicted << get values;
	pred2 = dt:LOAN Predictor << get values;
	Close( dt, no save );
	dt = Open("data_table.jmp");
	obj1 = Partition(
		Y( :LOAN ),
		X( :BAD, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO, :DEBTINC ),
		Method( Boosted Tree ),
		Informative Missing( 1 ),
		Number of Layers( 100 ),
		Go
	);
	obj1 << Save Predicteds;
	obj1 << Save Prediction Formula;
	pred1 = dt:LOAN Predicted << get values;
	pred2 = dt:LOAN Predictor << get values;
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check if JMP Pro is installed.
2. Open data table;
3. Create new column VCol with random integers.
4. Partition data for prediction.
5. Use Boosted Tree method.
6. Enable informative missing handling.
7. Set number of layers to 100.
8. Run partition analysis.
9. Save predicted values.
10. Save prediction formula.
11. Retrieve predicted loan values.
12. Retrieve predictor values.
13. Close dataset without saving.
14. Reopen data_table dataset
15. Repeat partition analysis.
16. Save predicted values.
17. Save prediction formula.
18. Retrieve predicted loan values.
19. Retrieve predictor values.
20. Close dataset without saving.



## Partition using Associative Array
> **Summary**: Fits a boosted tree model, checking for specific exceptions, and closing data tables in JMP.

<!-- Keywords: #JMPScriptingLanguage, #BoostedTrees, #DataTableManagement, #ExceptionHandling, #AssociativeArrays -->

**Code**:
```jsl
befAA = Associative Array( Window() << get window title );
dt = Open("data_table.jmp");
obj = Try( Partition( Y( :country ), X( :sex, :marital status, :age, :type, :size ), Method( Boosted Tree ), Go ) );
counter = 0;
For( i = 1, i <= N Items( exception_msg ), i++,
	If( Contains( exception_msg[i], "Boosted Trees only supports 2-level responses." ) > 0,
		counter = counter + 1
	)
);
Close( dt, no save );
aftAA = Associative Array( Window() << get window title );
aftAA << Remove( befAA );
aftlst = aftAA << get keys;
test = Contains( aftlst, "Report: Partition" );
If( test > 0,
	Window( aftlst[1] ) << Close Window
);
```

**Code Explanation**:

1. Create associative array.
2. Open data table.
3. Fit boosted tree model.
4. Initialize counter.
5. Loop through exceptions.
6. Check for specific error.
7. Increment counter if error found.
8. Close data table.
9. Update associative array.
10. Check for report window.



## Partition using New Column
### Example 1
> **Summary**: Fits a standard least squares model with multiple effects and generating a profiler plot for data analysis.

<!-- Keywords: #JSLScriptingLanguage, #LeastSquaresModel, #ProfilerPlot, #DataAnalysis, #StatisticalModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
spID = dt << New Column( "Species_Code", numeric );
spID << set each value( Match( :Species, "setosa", 1, "versicolor", 2, "virginica", 3, Empty() ) );
x = Column( dt, "Petal Length" ) << get values;
y = Column( dt, "Species_Code" ) << get values;
pp = Best Partition( x, y, <<ContinuousX, <<ContinuousY );
obj = Partition( Y( :Name( "Species_Code" ) ), X( :Petal Length ), Split Best( 1 ) );
rmse = obj << Get RMS Error Training;
F stat = pp[3] / (rmse ^ 2 * N Rows( dt ) / (N Rows( dt ) - 2));
Close( dt, no save );
b test2 =
"If(Is Missing(:test missing) | :test missing < 17.5, If(!Is Missing(:test missing) & :test missing >= 12.5, 19.3, 20.7807228915663), 34.5432835820896)";
b test3 =
"If(!Is Missing(:test missing) & :test missing < 17.5 | Is Missing(:test missing) & Random Uniform() < 0.867588932806324, If(!Is Missing(:test missing) & :test missing >= 12.5 | Is Missing(:test missing) & Random Uniform() < 0.0546697038724374, 19.3, 20.7807228915663), 34.5432835820896)";
```

**Code Explanation**:

1. Open data table;
2. Create Species_Code column.
3. Assign numeric codes to species.
4. Extract Petal Length values.
5. Extract Species_Code values.
6. Perform best partition on data.
7. Create partition model with Petal Length.
8. Calculate RMSE for training data.
9. Compute F statistic.
10. Close dataset without saving.



### Example 2
> **Summary**: Creates three frequency columns and captures logs for K-Nearest Neighbors (KNN) partitioning on sex, weight, and height in a JMP data table.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManipulation, #K-NearestNeighborsPartitioning, #LogCapture, #FrequencyColumns -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "freq1", values( [0, 0, 0] |/ J( 37, 1, 1 ) ) );
dt << New Column( "freq2", values( [0, 2] |/ J( 38, 1, 1 ) ) );
dt << New Column( "freq3", values( [3, 2] |/ J( 38, 1, 1 ) ) );
log1 = Log Capture(
	obj1 = dt << Partition( Y( :sex ), X( :weight, :height ), Freq( :freq1 ), Method( "K Nearest Neighbors" ), K( 3 ), Nonrandom )
);
log2 = Log Capture(
	obj2 = dt << Partition( Y( :sex ), X( :weight, :height ), Weight( :freq2 ), Method( "K Nearest Neighbors" ), K( 3 ), Nonrandom )
);
log3 = Log Capture(
	obj3 = dt << Partition( Y( :weight ), X( :sex, :height ), Freq( :freq3 ), Method( "K Nearest Neighbors" ), K( 3 ), Nonrandom )
);
```

**Code Explanation**:

1. Open data table;
2. Create "freq1" column.
3. Create "freq2" column.
4. Create "freq3" column.
5. Capture log for KNN partition on sex.
6. Capture log for KNN partition on sex.
7. Capture log for KNN partition on weight.
8. Use weight column for freq.
9. Set K value to 3.
10. Ensure nonrandom partition.



### Example 3
> **Summary**: Partitions data and generates a profiler plot using a bootstrap forest method, with informative missing values and random seed set.

<!-- Keywords: #JSLScripting, #PartitioningData, #BootstrapForestMethod, #InformativeMissingValues, #RandomSeed -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "VCol", formula( Random Integer( 1, 3 ) ) );
obj1 = dt << Partition(
	Y( :BAD ),
	X( :LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO, :DEBTINC ),
	Validation( :VCol ),
	Set Random Seed( 12345 ),
	Informative Missing( 1 ),
	Minimum Size Split( 30 ),
	Number Trees( 5 ),
	Method( Bootstrap Forest ),
	Go
);
obj1 << Save Predicteds;
obj1 << Save Prediction Formula;
pred1 = pred2 = [];
pred1 = Concat( (dt:Prob Good Risk << get values), (dt:Prob Bad Risk << get values) );
pred2 = Concat( (dt:Name( "Prob(BAD==Good Risk)" ) << get values), (dt:Name( "Prob(BAD==Bad Risk)" ) << get values) );
```

**Code Explanation**:

1. Open table.
2. Add new column.
3. Partition data.
4. Set validation column.
5. Set random seed.
6. Enable informative missing.
7. Set minimum split size.
8. Specify number of trees.
9. Use bootstrap forest method.
10. Save predictions and formulas.



### Example 4
> **Summary**: Runs the partition analysis process to predict loan outcomes, utilizing a random seed for reproducibility and informative missing handling.

<!-- Keywords: #JMPScriptingLanguage, #PartitionAnalysis, #PredictiveModeling, #BootstrapForestMethod, #DataTableManipulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "VCol", formula( Random Integer( 1, 3 ) ) );
obj1 = dt << Partition(
	Y( :LOAN ),
	X( :BAD, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO, :DEBTINC ),
	Validation( :VCol ),
	Set Random Seed( 12345 ),
	Informative Missing( 1 ),
	Minimum Size Split( 30 ),
	Number Trees( 5 ),
	Method( Bootstrap Forest ),
	Go
);
obj1 << Save Predicteds;
obj1 << Save Prediction Formula;
pred1a = dt:LOAN Predicted << get values;
pred2a = dt:LOAN Predictor << get values;
```

**Code Explanation**:

1. Open data table;
2. Create new column "VCol".
3. Apply random integers to "VCol".
4. Initiate partition analysis.
5. Set target variable to "LOAN".
6. Specify predictor variables.
7. Use "VCol" for validation.
8. Set random seed to 12345.
9. Enable informative missing handling.
10. Set minimum split size to 30.
11. Define number of trees as 5.
12. Choose Bootstrap Forest method.
13. Execute partition.
14. Save predicted values.
15. Save prediction formula.
16. Retrieve predicted loan values.
17. Retrieve predictor values.



### Example 5
> **Summary**: Creates and analyzes a partition object using Boosted Trees to predict the probability of bad credit risk, incorporating multiple predictors and validation.

<!-- Keywords: #JSLScriptingLanguage, #PartitionObject, #BoostedTree, #PredictiveModeling, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "VCol", formula( Random Integer( 1, 3 ) ) );
obj1 = Partition(
	Y( :BAD ),
	X( :LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO, :DEBTINC ),
	Validation( :Vcol ),
	Method( Boosted Tree ),
	Informative Missing( 1 ),
	Go
);
obj1 << Save Predicteds;
obj1 << Save Prediction Formula;
pred1 = pred2 = [];
pred1 = dt:Fitted Probability << get values;
pred2 = dt:Name( "Prob(BAD==Bad Risk)" ) << get values;
```

**Code Explanation**:

1. Open data table;
2. Add new column "VCol".
3. Generate random integers for "VCol".
4. Create partition object.
5. Set response variable as :BAD.
6. Include predictors: :LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO, :DEBTINC.
7. Use "VCol" for validation.
8. Apply Boosted Tree method.
9. Enable informative missing handling.
10. Execute partition analysis.
11. Save predicted values.
12. Save prediction formula.
13. Initialize empty lists pred1 and pred2.
14. Retrieve fitted probabilities into pred1.
15. Retrieve "Prob(BAD==Bad Risk)" into pred2.



## Partition using Lock Data Table
### Example 1
> **Summary**: Performs partition analysis and prediction on a data table, generating a report with split information.

<!-- Keywords: #JSLScripting, #PartitionAnalysis, #PredictionModel, #DataScience, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Lock Data Table( 1 );
obj = dt << Partition( Y( :weight ), X( :height, :age, :sex ), Method( Bootstrap Forest ), Go );
Log Capture( obj << Save Predicteds );
Close( dt, no save );
Random Reset( 247 );
dt = As Table( J( 10000, 51, Random Normal() ) );
obj = dt << Partition(
	Y( :Col1 ),
	X(
		:Col2, :Col3, :Col4, :Col5, :Col6, :Col7, :Col8, :Col9, :Col10, :Col11, :Col12, :Col13, :Col14, :Col15, :Col16, :Col17, :Col18,
		:Col19, :Col20, :Col21, :Col22, :Col23, :Col24, :Col25, :Col26, :Col27, :Col28, :Col29, :Col30, :Col31, :Col32, :Col33, :Col34,
		:Col35, :Col36, :Col37, :Col38, :Col39, :Col40, :Col41, :Col42, :Col43, :Col44, :Col45, :Col46, :Col47, :Col48, :Col49, :Col50,
		:Col51
	),
	Validation Portion( 0.8 ),
	Show Tree( 0 ),
	Split History( 1 ),
	Informative Missing( 1 ),
	Go
);
rpt = Report( obj );
nsplits = (rpt[Table Box( 1 )] << get as matrix)[1, 4];
```

**Code Explanation**:

1. Open data table;
2. Lock data table.
3. Perform partition analysis.
4. Save predictions to log.
5. Close data table without saving.
6. Set random seed to 247.
7. Create new data table with random values.
8. Perform partition analysis on new data.
9. Generate report from partition object.
10. Extract number of splits from report.



### Example 2
> **Summary**: Runs the partition analysis of a data table to predict 'weight' using 'height', 'age', and 'sex' as predictors, utilizing the Bootstrap Forest method.

<!-- Keywords: #JMPScriptingLanguage, #PartitionAnalysis, #BootstrapForest, #PredictiveModeling, #DataTableOperations -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Lock Data Table( 1 );
obj = dt << Partition( Y( :weight ), X( :height, :age, :sex ), Method( Bootstrap Forest ), Go );
Log Capture( obj << Save Predicteds );
```

**Code Explanation**:

1. Open data table;
2. Lock the data table.
3. Perform partition analysis.
4. Set target variable to "weight".
5. Use "height", "age", "sex" as predictors.
6. Choose Bootstrap Forest method.
7. Execute the analysis.
8. Capture log output.
9. Save predicted values from model.



## Partition using Log Capture
> **Summary**: Runs a K-Nearest Neighbors (KNN) partitioning analysis on a data table, capturing log results and generating a report if running in JMP Pro.

<!-- Keywords: #JMPScriptingLanguage, #KNearestNeighbors, #DataPartitioning, #LogCapture, #JMPPro -->

**Code**:
```jsl
dt = Open("data_table.jmp");
log_jmpstd = Log Capture(
	obj3 = Partition( Y( :sex ), X( :marital status, :age, :size, :type, :country ), Method( "K Nearest Neighbors" ), K( 10 ) )
);
If( Contains( JMP Product Name(), "Pro" ),
	rpt3 = Report( obj3 );
	n3 = N Rows( rpt3[Outline Box( "Training" )][Number Col Box( 1 )] << get as matrix );
, 
);
```

**Code Explanation**:

1. Open data table;
2. Perform KNN partition.
3. Log capture results.
4. Check if JMP Pro.
5. Generate report if Pro.
6. Extract training outline box.
7. Retrieve number column box.
8. Convert to matrix.
9. End If statement.
10. End script.



## Partition using Random Reset
> **Summary**: Runs a K-Nearest Neighbors partitioning analysis on a data table, generating reports and saving predicted values, near neighbor rows, and prediction formulas.

<!-- Keywords: #JMPScriptingLanguage, #KNNPartitioning, #DataTableAnalysis, #PredictiveModeling, #MachineLearning -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Random Reset( 12345 );
obj1 = dt << Partition(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Method( "K Nearest Neighbors"
	),
	Validation Portion( 0.2 ),
	K( 3 ),
	Nonrandom
);
rpt1 = obj1 << report;
obj1 << Save Near Neighbor Rows( 1 );
obj1 << Save Predicteds;
obj1 << Save Prediction Formula( 1 );
obj1 << Save Prediction Formula( 2 );
obj1 << Save Prediction Formula( 3 );
rslt train = rpt1[Outline Box( "Training" )][Table Box( 1 )] << get as matrix;
rslt valid = rpt1[Outline Box( "Validation" )][Table Box( 1 )] << get as matrix;
confmtrx train1 = rpt1[Outline Box( "K Nearest Neighbors" )][Table Box( 3 )] << get as matrix;
confmtrx train2 = rpt1[Outline Box( "K Nearest Neighbors" )][Table Box( 4 )] << get as matrix;
confmtrx valid1 = rpt1[Outline Box( "K Nearest Neighbors" )][Table Box( 5 )] << get as matrix;
confmtrx valid2 = rpt1[Outline Box( "K Nearest Neighbors" )][Table Box( 6 )] << get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Set random seed.
3. Perform K-Nearest Neighbors partition.
4. Retrieve model report.
5. Save near neighbor rows.
6. Save predicted values.
7. Save prediction formula 1.
8. Save prediction formula 2.
9. Save prediction formula 3.
10. Extract training results matrix.
11. Extract validation results matrix.
12. Extract training confusion matrix 1.
13. Extract training confusion matrix 2.
14. Extract validation confusion matrix 1.
15. Extract validation confusion matrix 2.



## Partition using Char
> **Summary**: Process of retrieving partition preference, opening a data table, launching a partition model, and extracting text from a report to check for missing value categories.

<!-- Keywords: #JMPScriptingLanguage, #PartitionModel, #DataTable, #ReportGeneration, #MissingValueCategories -->

**Code**:
```jsl
pref1 = Char( Get  Preference( Partition( Informative Missing ) ) );
dt = Open("data_table.jmp");
obj1 = dt << Partition( Y( :BAD ), X( :LOAN, :MORTDUE, :VALUE, :REASON, :JOB ), );
obj1 << Save script to report;
rpt1 = obj1 << report;
save1 = rpt1[Text Box( 1 )] << get text;
test1 = Contains( save1, "Missing value categories( 0 )" );
```

**Code Explanation**:

1. Get partition preference.
2. Open data table.
3. Launch partition model.
4. Set response variable BAD.
5. Set predictor variables.
6. Save script to report.
7. Retrieve report object.
8. Extract text from first text box.
9. Check for missing value category.
10. Store result in test1.




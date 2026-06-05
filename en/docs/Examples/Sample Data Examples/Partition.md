# Partition

## Example 1
> **Summary**: Build a partition model

<!-- Keywords: #Partition, #Criterion, #FrameSize, #InitialSplits, #MinimumSizeSplit -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Auto Raw Data.jmp");
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

## Example 2
> **Summary**: Build a partition model

<!-- Keywords: #Partition, #Criterion, #Format, #InitialSplits, #MinimumSizeSplit -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Auto Raw Data.jmp");
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

## Example 3
> **Summary**: Build a decision tree model using partition

<!-- Keywords: #Partition, #InformativeMissing, #ValidationPortion -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Bands Data.jmp");
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

## Example 4
> **Summary**: Build a decision tree model using partition

<!-- Keywords: #Partition, #History, #InformativeMissing, #Reset, #Set -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Bands Data.jmp");
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

## Example 5
> **Summary**: Generate a partition tree model with validation

<!-- Keywords: #Partition, #ColumnContributions, #Criterion, #History, #InitialSplits -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Body Fat.jmp");
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

## Example 6
> **Summary**: Generate decision tree model using partition

<!-- Keywords: #Partition -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Car Poll.jmp");
// Partition
Partition(
	Y( :country ),
	X(
		:sex, :marital status, :age,
		:type, :size
	)
);
```

## Example 7
> **Summary**: Construct a decision tree model for the response variable Y using the Partition platform, with the specified input variables and validation column, and incorporating initial splits to improve model accuracy.

<!-- Keywords: #Partition, #History, #InformativeMissing, #InitialSplits, #SplitHistory -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Diabetes.jmp");
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

## Example 8
> **Summary**: Build a decision tree to predict a binary outcome using specified independent variables, including initial splits and validation settings.

<!-- Keywords: #Partition, #History, #InformativeMissing, #InitialSplits, #SplitHistory -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Diabetes.jmp");
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

## Example 9
> **Summary**: Build a decision tree model for ordinal response variable using the Partition platform with specified initial splits and informative missing values.

<!-- Keywords: #Partition, #History, #InformativeMissing, #InitialSplits, #SplitHistory -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Diabetes.jmp");
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

## Example 10
> **Summary**: Partition the Diamonds Data using the Partition platform, specifying Price as the response variable, and include Carat Weight, Color, Clarity, Depth, Table, Cut, and Report as predictors. Set the Minimum Size Split to 5, display split probabilities, and use the Maximize Significance criterion. Define initial splits for Color, Clarity, and Cut based on specified categorical values.

<!-- Keywords: #Partition, #Criterion, #InitialSplits, #MinimumSizeSplit, #ShowSplitProb -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Diamonds Data.jmp");
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

## Example 11
> **Summary**: Perform a partition analysis on a dataset using various predictor variables and initial splits criteria to maximize significance.

<!-- Keywords: #Partition, #Criterion, #InitialSplits, #ShowSplitProb -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Equity.jmp");
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

## Example 12
> **Summary**: Build a Naive Bayes model for predicting the BAD variable using selected financial predictors.

<!-- Keywords: #Partition, #Method, #Validation -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Equity.jmp");
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

## Example 13
> **Summary**: Perform K-Nearest Neighbors classification on the BAD variable using specified predictors in the Equity dataset.

<!-- Keywords: #Partition, #Method, #Validation -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Equity.jmp");
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

## Example 14
> **Summary**: Partition a dataset into clusters using the initial splits and set validation portion.

<!-- Keywords: #Partition, #ColumnContributions, #Count, #History, #InformativeMissing -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Hardware Surface Unit Data.jmp");
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

## Example 15
> **Summary**: Partition a dataset into clusters based on multiple predictor variables using the Partition platform.

<!-- Keywords: #Partition, #FitDetails, #InformativeMissing, #InitialSplits, #ShowFitDetails -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Liver Cancer.jmp");
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

## Example 16
> **Summary**: Partition a dataset using the Partition platform with specified predictor and response variables.

<!-- Keywords: #Partition, #MinimumSizeSplit, #MissingValueRule, #Split -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Mushroom.jmp");
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

## Example 17
> **Summary**: Perform a partition analysis on the Tablet Production data table, focusing on the Lot Acceptance variable as the Y variable and including multiple X variables, and use the Maximize Significance criterion.

<!-- Keywords: #Partition, #Criterion, #MinimumSizeSplit, #ShowSplitProb, #SortSplitCandidates -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Tablet Production.jmp");
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

## Example 18
> **Summary**: Partition the Titanic Passengers dataset into subsets based on the Survived outcome using multiple predictors, including Passenger Class, Sex, Age, Siblings and Spouses, Parents and Children, and Fare, with a minimum split size of 5 and a criterion to maximize significance.

<!-- Keywords: #Partition, #Criterion, #MinimumSizeSplit, #Split -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Titanic Passengers.jmp");
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


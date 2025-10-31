# Multivariate Analysis

More examples for this topic using the sample data files provided with JMP

### Set multiple response modeling type column property

```jsl

// Open data table
dt = Open("$Sample_Data/Big Class Families.jmp");
// Set Multiple Response
:sibling ages <<
Set Modeling Type( "Multiple Response" );
:sports <<
Set Modeling Type( "Multiple Response" );
:countries visited <<
Set Modeling Type( "Multiple Response" );
:family cars <<
Set Modeling Type( "Multiple Response" );

```

### Perform a Bivariate Analysis to Examine the Relationship Between Difference and Mean.

```jsl

// Open data table
dt = Open("$Sample_Data/Dogs.jmp");
// Fit diff by mean
Bivariate( Y( :diff ), X( :mean ) );

```

### Perform Multiple Correspondence Analysis (MCA) on categorical variables TV, Film, Art, and Restaurant, and display the total cross table.

```jsl

// Open data table
dt = Open("$Sample_Data/Employee Taste.jmp");
// MCA-level
Multiple Correspondence Analysis(
	Y( :TV, :Film, :Art, :Restaurant ),
	Cross Table( Show Total( 1 ) )
);

```

### Perform Multiple Correspondence Analysis (MCA) on categorical data variables with Subject as the supplementary variable, and generate a cross table with total values shown.

```jsl

// Open data table
dt = Open("$Sample_Data/Employee Taste.jmp");
// MCA-subject
Multiple Correspondence Analysis(
	Y( :TV, :Film, :Art, :Restaurant ),
	X( :Subject ),
	Cross Table( Show Total( 1 ) )
);

```

### Save T Square statistics and configuration for a multivariate control chart involving six variables.

```jsl

// Open data table
dt = Open("$Sample_Data/Quality Control/Aluminum Pins Historical.jmp");
// Save T Square
dt = Current Data Table();
MyTchart =
Multivariate Control Chart(
	Y(
		:Diameter1, :Diameter2,
		:Diameter3, :Diameter4, :Length1,
		:Length2
	),
	Subgroup( :subgroup )
);
MyTchart << Save T Square;

```

### Generate a Model Driven Multivariate Control Chart (MDMCC) for the entire dataset, incorporating all identified process variables and including statistical prediction error and normalized DModX plots for comprehensive analysis.

```jsl

// Open data table
dt = Open("$Sample_Data/Quality Control/Flight Delays.jmp");
// MDMCC with entire data
Model Driven Multivariate Control Chart(
	Process(
		:AA, :CO, :DL, :F9, :FL, :NW, :UA,
		:US, :WN
	),
	Time ID( :Flight date ),
	Statistical Prediction Error Plot,
	Normalized DModX Plot
);

```

### Perform multivariate analysis using Row-wise estimation method and create a scatterplot matrix with density ellipses color coded.

```jsl

// Open data table
dt = Open("$Sample_Data/Quality Control/Thickness.jmp");
// Multivariate
Multivariate(
	Y(
		:Thickness 01, :Thickness 02,
		:Thickness 03, :Thickness 04,
		:Thickness 05, :Thickness 06,
		:Thickness 07, :Thickness 08,
		:Thickness 09, :Thickness 10,
		:Thickness 11, :Thickness 12
	),
	Estimation Method( "Row-wise" ),
	Scatterplot Matrix(
		Density Ellipses( 1 ),
		Shaded Ellipses( 0 ),
		Ellipse Color( 3 )
	)
);

```

### Builld a custom display window with four analysis placed horizontally

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

### Perform Multiple Correspondence Analysis with supplementary rows for subject and gender, and generate detailed coordinates and scaling for the first three dimensions.

```jsl

// Open data table
dt = Open("$Sample_Data/Employee Taste.jmp");
// MCA-subject-supp-gender
Multiple Correspondence Analysis(
	Y( :TV, :Film, :Art, :Restaurant ),
	X( :Subject ),
	Z( :Gender ),
	Cross Table( Show Total( 1 ) ),
	Cross Table of Supplementary Rows(
		Show Total( 1 )
	),
	Show Coordinates( 1 ),
	Select dimension( 1, 3 ),
	SendToReport(
		Dispatch( {}, "Variable Summary",
			OutlineBox,
			{Close( 1 )}
		),
		Dispatch(
			{"Correspondence Analysis"},
			"2", ScaleBox,
			{Format( "Fixed Dec", 12, 0 ),
			Min( -2 ), Max( 3.5 ),
			Inc( 1 ), Minor Ticks( 1 )}
		),
		Dispatch(
			{"Correspondence Analysis"},
			"Details", OutlineBox,
			{Close( 1 )}
		),
		Dispatch(
			{"Correspondence Analysis"},
			"Row and Column Coordinates",
			OutlineBox,
			{Close( 1 )}
		)
	)
);

```

### Perform confirmatory factor analysis (CFA) with a single-factor conflict model using the SEM platform.

```jsl

// Open data table
dt = Open("$Sample_Data/Job Satisfaction.jmp");
// SEM: CFA 1Factor Conflict UI
Structural Equation Models(
	Model Variables(
		:Person_C, :Intra_C, :Inter_C
	),
	Model Specification(
		New Latent( "Conflict" ),
		Means(
			{"Constant", {:Person_C,
			:Intra_C, :Inter_C}}
		),
		Loadings(
			{"Conflict", {:Person_C,
			:Intra_C, :Inter_C}, {1}}
		),
		Variances(
			{:Person_C, {:Person_C}},
			{:Intra_C, {:Intra_C}},
			{:Inter_C, {:Inter_C}},
			{"Conflict", {"Conflict"}}
		)
	)
);

```


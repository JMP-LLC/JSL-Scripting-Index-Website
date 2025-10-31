# Mixed Model

More examples for this topic using the sample data files provided with JMP

### Fit a model using the Standard Least Squares personality with specified mixture effects and interactions.

```jsl

// Open data table
dt = Open("$Sample_Data/Design Experiment/Piepel.jmp");
// Model
Fit Model(
	Effects(
		:X1 & Mixture, :X2 & Mixture,
		:X3 & Mixture, :X1 * :X2,
		:X1 * :X3, :X2 * :X3
	),
	Y( :Y ),
	No Intercept,
	PERSONALITY(
		"Standard Least Squares"
	)
);

```

### Load an existing data table and open it in the Custom Design platform for editing.

```jsl

// Open data table
dt = Open("$Sample_Data/Design Experiment/Software Factors.jmp");
// Load and Edit in Custom Design
DOE(
	Custom Design,
	Load Factors( Current Data Table() )
);

```

### Perform a variance component analysis using the REML method and fit a model for shrinkage with random effects in the Standard Least Squares personality.

```jsl

// Open data table
dt = Open("$Sample_Data/Investment Castings.jmp");
// Model: REML
Fit Model(
	Censor Code( "" ),
	Y( :Shrinkage ),
	Effects(
		:Casting[:Temperature] & Random,
		:Temperature
	),
	Personality(
		"Standard Least Squares"
	),
	Method( "REML" ),
	Set Alpha Level( 0.05 )
);

```

### Fit a standard least squares model with mean as the response variable, grp as the effect, and N as the frequency variable.

```jsl

// Open data table
dt = Open("$Sample_Data/Noah Decay.jmp");
// Fit Model
Fit Model(
	Freq( :N ),
	Y( :mean ),
	Effects( :grp ),
	Personality(
		"Standard Least Squares"
	),
	Run( :mean << {{:grp << {}}} )
);

```

### Create a Pareto Plot for cause analysis using failure data and frequency counts.

```jsl

// Open data table
dt = Open("$Sample_Data/Quality Control/Failure.jmp");
// Pareto Plot
Pareto Plot(
	Cause( :failure ),
	Freq( :N )
);

```

### Fit a Weibull-distributed parametric survival model with the Load effect.

```jsl

// Open data table
dt = Open("$Sample_Data/Reliability/Comptime.jmp");
// Parametric Survival Model
Fit Model(
	Y( :ExecTime ),
	Effects( :Load ),
	Personality( "Parametric Survival" ),
	Distribution( Weibull )
);

```

### Build a multivariate scatterplot matrix with pairwise estimation method for household income, IQ, eighth-grade math, high school graduates, gross state product, vegetable consumption, smokers, physical activity, obese, college degrees, and alcohol consumption.

```jsl

// Open data table
dt = Open("$Sample_Data/US Demographics.jmp");
// Multivariate
Multivariate(
	Y(
		:Household Income, :IQ,
		:Eighth Grade Math,
		:High School Graduates,
		:Gross State Product,
		:Vegetable Consumption, :Smokers,
		:Physical Activity, :Obese,
		:College Degrees,
		:Alcohol Consumption
	),
	Estimation Method( "Pairwise" ),
	Scatterplot Matrix(
		Density Ellipses( 1 ),
		Shaded Ellipses( 0 ),
		Ellipse Color( 3 )
	)
);

```

### Perform choice analysis with gender effects using the Choice function.

```jsl

// Open data table
dt = Open("$Sample_Data/Laptop Runs.jmp");
// Choice with Gender
Open( "$Sample_Data/Laptop Profile.jmp" );
Open(
	"$Sample_Data/Laptop Subjects.jmp"
);
Choice(
	Response Data Table(
		Data Table( "Laptop Runs" )
	),
	Profile DataTable( Laptop Profile ),
	Subject DataTable(
		Data Table( "Laptop Subjects" )
	),
	Response Subject ID( :Person ),
	Response Grouping(
		:Survey, :Choice Set
	),
	Response Profile ID Choices(
		:Choice1, :Choice2
	),
	Profile ID( :Choice ID ),
	Profile Grouping(
		:Survey, :Choice Set
	),
	Profile Effects(
		:Hard Disk, :Speed, :Battery Life,
		:Price
	),
	Subject Subject ID( :Person ),
	Subject Effects( :Gender ),
	"Firth Bias-Adjusted Estimates"n( 1 ),
	Response Profile ID Chosen(
		:Response
	),
	Likelihood Ratio Tests( 1 )
);

```

### Partition a dataset into clusters based on multiple predictor variables using the Partition platform.

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


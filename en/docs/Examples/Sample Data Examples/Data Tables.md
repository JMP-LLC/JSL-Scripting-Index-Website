# Data Tables

More examples for this topic using the sample data files provided with JMP

### Stack data in a data table

```jsl

// Open data table
dt = Open( "$Sample_Data/Antibiotic MICs.jmp" );
// Stack MICs
dt << Stack(
	Columns( :penicillin, :streptomycin, :neomycin ),
	Source Label Column( :Stack Source Label ),
	Stacked Data Column( :Stack Data Column ),
	Output Table( :Stack Output Table )
);

```

### Perfrom distribution analysis with continuous and nominal data

```jsl

// Open data table
dt = Open("$Sample_Data/Birth Death.jmp");
// Distribution
Distribution(
	Continuous Distribution(
		Column( :birth )
	),
	Continuous Distribution(
		Column( :death )
	),
	Nominal Distribution(
		Column( :Region )
	)
);

```

### Open the manage limits utility

```jsl

// Open data table
dt = Open("$Sample_Data/Cheese Manufacturing Data.jmp");
// Manage Limits
Manage Limits(
	Process Variables(
		:pH, :Salt Concentration,
		:Moisture Content
	),
	Grouping( :Cheese Type )
);

```

### Genearate a tabulated report with grouping columns

```jsl

// Open data table
dt = Open("$Sample_Data/Cola Heart Rate.jmp");
// Tabulate
Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table(
			Analysis Columns( :Baseline ),
			Statistics( Mean )
		),
		Row Table(
			Grouping Columns( :Testers )
		)
	)
);

```

### Cluster variables using the K-means clustering algorithm with the specified numerical columns.

```jsl

// Open data table
dt = Open("$Sample_Data/Diabetes.jmp");
// Cluster Variables
Cluster Variables(
	Y(
		:Age, :BMI, :BP,
		:Total Cholesterol, :LDL, :HDL,
		:TCH, :LTG, :Glucose
	)
);

```

### Create multiple rows in the data table to simulate rolling a dice many times.

```jsl

// Open data table
dt = Open("$Sample_Data/DiceRolls.jmp");
// Roll Many
Current Data Table() <<
Add Rows( :Num Rolls );

```

### Create a tabulation with mean and standard deviation statistics for columns X and Y, grouped by Ship event and Lot.

```jsl

// Open data table
dt = Open("$Sample_Data/Hardware Surface Unit Data.jmp");
// Tabulate
Tabulate(
	Add Table(
		Column Table(
			Analysis Columns( :X, :Y ),
			Statistics( Mean, Std Dev )
		),
		Row Table(
			Grouping Columns(
				:Ship event, :Lot
			)
		)
	)
);

```

### Generate a tabular summary with double row groupings on surface quality and color.

```jsl

// Open data table
dt = Open("$Sample_Data/Hardware Surface Unit Data.jmp");
// Tabulate 2
Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Row Table(
			Grouping Columns(
				:surface quality
			)
		),
		Row Table(
			Grouping Columns( :color )
		)
	)
);

```

### Open Profile and Subjects Tables from Sample Data Directory.

```jsl

// Open data table
dt = Open("$Sample_Data/Laptop Runs.jmp");
// Open Profile and Subjects Tables
Open( "$Sample_Data/Laptop Profile.jmp" );
Open(
	"$Sample_Data/Laptop Subjects.jmp"
);

```

### Create a loss function template for the LogLogistic distribution. Define a new table with columns for Time, Censor, Model, and LogLogistic Loss. Implement the LogLogistic model formula with parameters b0 and b1. Define the LogLogistic Loss formula with parameter sigma and incorporate conditional logic based on the Censor variable using IfMZ function.

```jsl

// LogLogistic.jsl
///////////////////////////////////////////////////////////////////////////////////////////////////////////
// JSL to create a loss function template of LogLogistic                 //
///////////////////////////////////////////////////////////////////////////////////////////////////////////

dt= new table ("LogLogistic");
dt<<New Column("Time", Numeric,continuous);   
dt<<New Column("Censor", Numeric,continuous);
dt<<New Column("Model", Numeric,continuous);
dt<<New Column("LogLogistic Loss", Numeric,continuous);

column( "Model") << formula( Parameter({b0=-11.8912196204114, b1=9.03834026782309}, Log( :Time)-(b0+b1*Empty())) );

column( "LogLogistic Loss") << formula( Parameter({sigma=0.5}, -IfMZ( :censor==0,  :Model/sigma-2*Log(1+Exp( :Model/sigma))-Log(sigma), -Log(1+Exp( :Model/sigma))))  );

```

### Transpose specific columns with a label in the current data table.

```jsl

// Open data table
dt = Open("$Sample_Data/Materials2.jmp");
// Transpose with label
Current Data Table() <<
Transpose(
	Columns( :plastic, :tin, :gold ),
	Label( :item )
);

```

### Generate and visualize the missing data pattern for a specified set of columns.

```jsl

// Open data table
dt = Open("$Sample_Data/Missing Data Pattern.jmp");
// Missing Data Pattern
Current Data Table() <<
Missing Data Pattern(
	Columns(
		:Trial 1, :Trial 2, :Trial 3,
		:Trial 4
	)
);

```

### Open a data table and open a web page displaying the Palmer Penguins dataset.

```jsl

// Open data table
dt = Open("$Sample_Data/Penguins.jmp");
// Web page
Web(
	"https://allisonhorst.github.io/palmerpenguins/"
);

```

### Join two data tables based on their unequal numbers of rows using the Join function.

```jsl

// Open data table
dt = Open("$Sample_Data/Species2.jmp");
// Joining unequal rows
Open( "$SAMPLE_DATA/Species1.jmp" ) <<
Join(
	With( Data Table( "Species2" ) ),
	By Row Number
);

```

### Open the data tables for Potato Chip Responses, Potato Chip Subjects, and Potato Chip Profiles using the Open function.

```jsl

// Open data table
dt = Open("$Sample_Data/Potato Chip Responses.jmp");
// Open Profile and Subject Tables
Open(
	"$Sample_Data/Potato Chip Subjects.jmp"
);
Open(
	"$Sample_Data/Potato Chip Profiles.jmp"
);

```

### Calculate and display contingency statistics for a 2x2 table using the Agreement Statistic.

```jsl

// Open data table
dt = Open("$Sample_Data/Prime Minister Ratings.jmp");
// Contingency
Contingency(
	Y( 2 ),
	X( 1 ),
	Freq( 3 ),
	Agreement Statistic( 1 )
);

```

### Create a categorical analysis for variables and generate a frequency chart in the Categorical platform.

```jsl

// Open data table
dt = Open("$Sample_Data/Quality Control/Failure3MultipleField.jmp");
// Categorical
Categorical(
	X( :clean, :date ),
	Multiple Response(
		:Failure1, :Failure2, :Failure3
	),
	Frequency Chart( 0 )
);

```

### Run Categorical Delimited analysis using the Categorical function with specified variables from the Failures3Delimited data table.

```jsl

// Open data table
dt = Open("$Sample_Data/Quality Control/Failures3Delimited.jmp");
// Categorical Delimited
Categorical(
	ID( :ID ),
	X( :clean, :date ),
	Multiple Delimited( :failureS )
);

```

### Filter the dataset to include only rows where the space type is exterior using the Data Filter platform.

```jsl

// Open data table
dt = Open("$Sample_Data/S4 Temps.jmp");
// Data Filter - Exterior Offices
Current Data Table() <<
Data Filter(
	Location( {376, 286} ),
	Add Filter(
		columns( :type of space ),
		Where(
			:type of space == "exterior"
		),
		Display(
			:type of space,
			Size( 204, 123 ),
			List Display
		)
	),
	Mode( Select( 0 ), Include( 1 ) )
);

```

### Perform a Cartesian join between two data tables using the Join() function.

```jsl

// Open data table
dt = Open("$Sample_Data/Species1.jmp");
// Cartesian join
Data Table( "Species1" ) <<
Join(
	With(
		Open(
			"$SAMPLE_DATA/Species2.jmp"
		)
	),
	Cartesian Join
);

```

### Create a variability chart using the Variability Chart function to analyze the Measurement response variable by Operator and part factors, automatically selecting the best analysis type based on EMS, REML, or Bayesian methods, including a standard deviation chart.

```jsl

// Open data table
dt = Open("$Sample_Data/Variability Data/2 Factors Crossed.jmp");
// Variability Chart
Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Analysis Type(
		"Choose best analysis (EMS REML Bayesian)"n
	),
	Standard( :Standard ),
	Process Variation( 0 ),
	Std Dev Chart( 1 )
);

```

### Perform EMP Measurement Systems Analysis using Nested Model, including Dispersion Chart, Variance Components, Average Chart, and Dispersion Chart.

```jsl

// Open data table
dt = Open("$Sample_Data/Variability Data/2 Factors Nested.jmp");
// EMP Measurement Systems Analysis
EMP Measurement Systems Analysis(
	Y( :" Y"n ),
	X( :Operator ),
	Part( :Part ),
	Model( Nested ),
	Dispersion Chart Type( "Range" ),
	Variance Components( 1 ),
	Average Chart( 1 ),
	Dispersion Chart( 1 )
);

```

### Perform an EMP Measurement Systems Analysis using nested and crossed factors, generate a dispersion chart using the range method for variability data.

```jsl

// Open data table
dt = Open("$Sample_Data/Variability Data/3 Factors Nested & Crossed.jmp");
// EMP Measurement Systems Analysis
EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator, :Instrument ),
	Part( :Part ),
	Model(
		"Nested then Crossed (3 Factors Only)"n
	),
	Dispersion Chart Type( "Range" )
);

```

### Set value labels for the sex column to Male and Female in the World Class data table.

```jsl

// Open data table
dt = Open("$Sample_Data/World Class.jmp");
// Set Sex Value Labels
Column( "sex" ) <<
ValueLabels(
	{"M", "F"},
	{"Male", "Female"}
);
Column( "sex" ) << UseValueLabels;

```

### Set Value Labels for Age Column with Function ValueLabels and UseValueLabels.

```jsl

// Open data table
dt = Open("$Sample_Data/World Class.jmp");
// Set Age Value Labels
Column( "age" ) <<
ValueLabels(
	{12, 13, 14, 15, 16, 17},
	{"Twelve", "Thirteen", "Fourteen",
	"Fifteen", "Sixteen", "Seventeen"}
);
Column( "age" ) << UseValueLabels;

```

### Perform multivariate correlations analysis with mahalanobis distances

```jsl

// Open data table
dt = Open("$Sample_Data/Body Fat.jmp");
// Multivariate Correlations
Multivariate(
	Y(
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
	Estimation Method( "Row-wise" ),
	Scatterplot Matrix(
		Density Ellipses( 1 ),
		Shaded Ellipses( 0 ),
		Ellipse Color( 3 )
	),
	Mahalanobis Distances( 1 )
);

```

### Stack columns of a table and perform contingency analysis on the stacked data

```jsl

// Open data table
dt = Open("$Sample_Data/Children's Popularity.jmp");
// Stack Columns and Analyze
Data Table( "Children's Popularity.jmp" )
 << Stack(
	columns(
		:Grades, :Sports, :Looks, :Money
	),
	Source Label Column(
		"Characteristic"
	),
	Stacked Data Column( "Importance" ),
	Output Table( "Stacked Importance" )
);
Contingency(
	Y( :Characteristic ),
	X( :Importance ),
	Contingency Table(
		Count( 1 ),
		Total %( 0 ),
		Col %( 0 ),
		Row %( 0 ),
		Expected( 0 ),
		Deviation( 0 ),
		Cell Chi Square( 0 ),
		Col Cum( 0 ),
		Col Cum %( 0 ),
		Row Cum( 0 ),
		Row Cum %( 0 )
	)
);

```

### Generate a 3d surface plot

```jsl

// Open data table
dt = Open("$Sample_Data/Cowboy Hat Template.jmp");
// Surface Plot
Surface Plot(
	Columns( :x, :y, :z ),
	Control Panel( 0 ),
	Lock Z Scale( 1 ),
	Hide Lights Border( 1 ),
	Shine Choice( "Off" ),
	Datapoints Choice( "Points" ),
	Datapoints Choice2( "Points" ),
	Datapoints Choice3( "Points" ),
	XRotate( -77.6289809380828 ),
	YRotate( -2.91022337856568 ),
	ZRotate( 30.2534324018626 ),
	Z Grid Position( 0.523583333333333 ),
	Formula( "x", "y", "z" ),
	Response( "z", "z", :z ),
	Equation( "", "", "", "" ),
	SetVariableAxis(
		z,
		Current Value( 0.283 ),
		Axis Data(
			{Scale( "Linear" ),
			Format( "Best" ), Min( -1 ),
			Max( 1 ), Inc( 0.25 )}
		)
	),
	SetZAxis(
		z#4,
		Current Value(
			0.283000000000001
		)
	),
	Graph Size( 334, 334 )
);

```

### Analyze the distribution of height and weight using the Distribution platform .

```jsl

// Open data table
dt = Open("$Sample_Data/Students.jmp");
// Distribution: Height and Weight
Distribution(
	Continuous Distribution(
		Column( :height ),
		Axis Settings(
			Min( 50 ),
			Max( 72.5 ),
			Scale( Linear ),
			Inc( 5 ),
			Minor Ticks( 1 )
		)
	),
	Continuous Distribution(
		Column( :weight ),
		Axis Settings(
			Min( 50 ),
			Max( 200 ),
			Scale( Linear ),
			Inc( 10 )
		)
	)
);

```

### Perform a Variability Chart analysis with a crossed model for the new Y variable, using Instrument, Operator, and Part as factors, with options to choose the best analysis using EMS, REML, and Bayesian methods.

```jsl

// Open data table
dt = Open("$Sample_Data/Variability Data/3 Factors Crossed.jmp");
// Variability Chart of new Y
Variability Chart(
	Y( :new Y ),
	X( :Instrument, :Operator, :Part ),
	Model( "Crossed" ),
	Max Iter( 100 ),
	Conv Limit( 0.00000001 ),
	Number Integration Abscissas( 128 ),
	Number Function Evals( 65536 ),
	Analysis Type(
		"Choose best analysis (EMS REML Bayesian)"
	),
	Connect Cell Means( 1 ),
	Show Group Means( 1 ),
	Std Dev Chart( 1 ),
	SendToReport(
		Dispatch(
			{
			"Variability Chart for new Y"
			}, "Variability Chart",
			FrameBox,
			{Grid Line Order( 6 ),
			Reference Line Order( 7 )}
		)
	)
);

```


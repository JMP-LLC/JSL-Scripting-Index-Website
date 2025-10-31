# Bivariate Analysis

More examples for this topic using the sample data files provided with JMP

### Perform bivariate analysis

```jsl

// Open data table
dt = Open("$Sample_Data/AdverseR.jmp");
// Bivariate
Bivariate(
	Y( :DAY ON DRUG ),
	X( :WEIGHT )
);

```

### Example jsl to transpose at table

```jsl

// Open data table
dt = Open("$Sample_Data/Animals Subset.jmp");
// Transpose by
Current Data Table() <<
Transpose(
	columns( :subject, :miles ),
	By( :species ),
	Label( :season )
);

```

### Jsl code to join two tables using a cartesian join

```jsl

// Open data table
dt = Open("$Sample_Data/Batch.jmp");
// Join
Open( "$SAMPLE_DATA/Oil Amount.jmp" ) <<
Join(
	With( Data Table( "Batch" ) ),
	Cartesian Join
);

```

### Generate a standard least squares model

```jsl

// Open data table
dt = Open("$Sample_Data/Big Class Families.jmp");
// Fit weight to age vector and height
Fit Model(
	Y( :weight ),
	Effects( :age vector, :height ),
	Personality(
		"Standard Least Squares"
	),
	Emphasis( "Minimal Report" ),
	Run(
		:weight << {Lack of Fit( 0 ),
		Plot Actual by Predicted( 0 ),
		Plot Regression( 0 ),
		Plot Residual by Predicted( 0 ),
		Plot Effect Leverage( 0 )}
	)
);

```

### Perform a contingency analysis with crosstabs

```jsl

// Open data table
dt = Open("$Sample_Data/Big Class.jmp");
// Contingency
Contingency(
	Y( :age ),
	X( :sex ),
	Crosstabs(
		Count( 1 ),
		Total %( 1 ),
		Col %( 1 ),
		Row %( 1 ),
		Expected( 0 ),
		Deviation( 0 ),
		"Cell Chi^2"n( 0 )
	)
);

```

### Set value labels column property

```jsl

// Open data table
dt = Open("$Sample_Data/Big Class.jmp");
// Set Sex Value Labels
Column( "sex" ) <<
ValueLabels(
	{"M", "F"},
	{"Male", "Female"}
);
Column( "sex" ) << UseValueLabels;

```

### Perform hierarchical cluster analysis

```jsl

// Open data table
dt = Open("$Sample_Data/Birth Death.jmp");
// Hierarchical Cluster
Hierarchical Cluster(
	Columns( :birth, :death ),
	Color Clusters( 1 ),
	Mark Clusters( 1 ),
	Number of Clusters( 14 )
);

```

### Perform a paired t-test

```jsl

// Open data table
dt = Open("$Sample_Data/Blood Pressure by Time.jmp");
// paired t-test
(
Matched Pairs(
	y( BP AM, BP PM ),
	Reference Frame( 1 )
) << report)[AxisBox( 1 )] << Revert Axis;

```

### Perform contingency analysis

```jsl

// Open data table
dt = Open("$Sample_Data/Car Physical Data.jmp");
// Contingency
Contingency(
	Y( :Country ),
	X( :Type ),
	Contingency Table(
		Count( 1 ),
		Total %( 1 ),
		Col %( 1 ),
		Row %( 1 ),
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

### Generate contingency analysis

```jsl

// Open data table
dt = Open("$Sample_Data/Car Poll.jmp");
// Contingency
Contingency(
	Y( :type ),
	X( :marital status )
);

```

### Generate multiple correspondence analysis

```jsl

// Open data table
dt = Open("$Sample_Data/Car Poll.jmp");
// Multiple Correspondence Analysis
Multiple Correspondence Analysis(
	Y(
		:sex, :marital status, :country,
		:size
	),
	Cross Table(
		Cell Chi Square( 0 ),
		Show Total( 1 )
	)
);

```

### Generate multiple correspondence analysis with a supplementary variable

```jsl

// Open data table
dt = Open("$Sample_Data/Car Poll.jmp");
// Multiple Correspondence Analysis - with Supplementary Variable
Multiple Correspondence Analysis(
	Y( :country, :size ),
	Z( :sex ),
	Cross Table(
		Cell Chi Square( 0 ),
		Show Total( 1 )
	),
	Cross Table of Supplementary Columns(
		Cell Chi Square( 0 ),
		Show Total( 1 )
	)
);

```

### Generate a bivariate analsys with discrete values of hue and shade

```jsl

// Open data table
dt = Open("$Sample_Data/Color Palette.jmp");
// Bivariate
Bivariate( Y( :hue axis ), X( :shade ) );

```

### Perform process screening analysis with grouping variable

```jsl

// Open data table
dt = Open("$Sample_Data/Consumer Prices.jmp");
// Process Screening of Price by Series
Process Screening(
	Y( :Price ),
	Grouping( :Series ),
	Time( :Date ),
	Subgroup Sample Size( 3 ),
	Recent Shift Up( 1 ),
	Recent Shift Down( 1 ),
	Shift Graph( 1 )
);

```

### Build a nominal logistic regression model

```jsl

// Open data table
dt = Open("$Sample_Data/Crops.jmp");
// Nominal Logistic Regression
Fit Model(
	Y( :CROP ),
	Effects( :S1, :S3 ),
	Personality( "Nominal Logistic" ),
	Run
);

```

### Generate a hierarchical cluster

```jsl

// Open data table
dt = Open("$Sample_Data/Crops.jmp");
// Hierarchical Cluster
Hierarchical Cluster(
	Columns( :S1, :S3 ),
	Color Clusters( 1 ),
	Mark Clusters( 1 ),
	Number of Clusters( 7 )
);

```

### Fit a standard least squares model with REML method, including random effects and interactions.

```jsl

// Open data table
dt = Open("$Sample_Data/Design Experiment/Battery Data.jmp");
// Reduced Model 1
Fit Model(
	Y( :OCV ),
	Effects(
		:Whole Plots & Random,
		:Subplots & Random, :A1, :A2, :A3,
		:A4, :C1, :C2, :A1 * C1, :A1 * C2,
		:A2 * C1, :A4 * C2
	),
	Keep dialog open( 1 ),
	Personality(
		"Standard Least Squares"
	),
	Method( "REML" )
);

```

### Fit a linear mixed-effects model with random effects for whole plots and subplots, and include fixed effects for temperature, time, catalyst, and their interactions.

```jsl

// Open data table
dt = Open("$Sample_Data/Design Experiment/Catalyst Design.jmp");
// Model
Fit Model(
	Effects(
		:Whole Plots & Random,
		:Subplots & Random, :Temperature,
		:Time, :Catalyst,
		:Temperature * :Time,
		:Temperature * :Catalyst,
		:Time * :Catalyst
	),
	Y( :Y )
);

```

### Fit a standard least squares model with random effects to simulate the response variable Y using specified effects and experimental design factors.

```jsl

// Open data table
dt = Open("$Sample_Data/Design Experiment/Catalyst Design.jmp");
// Model for Y Simulated
Fit Model(
	Y( :Y Simulated ),
	Effects(
		:Temperature, :Time, :Catalyst,
		:Temperature * :Time,
		:Temperature * :Catalyst,
		:Time * :Catalyst
	),
	Random Effects(
		:Whole Plots, :Subplots
	),
	Personality(
		"Standard Least Squares"
	),
	Emphasis( "Minimal Report" ),
	Method( "REML" )
);

```

### Load data from the specified file and edit it using the Custom Design platform .

```jsl

// Open data table
dt = Open("$Sample_Data/Design Experiment/Donev Mixture Factors.jmp");
// Load and Edit in Custom Design
DOE(
	Custom Design,
	Load Factors( Current Data Table() )
);

```

### Fit a Definitive Screening design to analyze the effects of various factors on the solids content in a peanut processing experiment.

```jsl

// Open data table
dt = Open("$Sample_Data/Design Experiment/Peanut Data.jmp");
// Fit Definitive Screening
Fit Definitive Screening(
	X(
		:pH, :Water Temp,
		:Extraction TIme, :Ratio,
		:Agitation Speed, :Hydrolyze,
		:"Pre-Soak"n
	),
	Y( :Solids )
);

```

### Develop a reduced multiple regression model using the Percent Reacted as the dependent variable, with Catalyst, Temperature, and Concentration as independent variables, and including interaction effects between Catalyst and Temperature, and Temperature and Concentration.

```jsl

// Open data table
dt = Open("$Sample_Data/Design Experiment/Reactor 32 Runs.jmp");
// Reduced Model
Fit Model(
	Y( :Percent Reacted ),
	Effects(
		:Catalyst, :Temperature,
		:Concentration,
		:Catalyst * :Temperature,
		:Temperature * :Concentration
	),
	Keep dialog open( 1 ),
	Personality(
		"Standard Least Squares"
	)
);

```

### Fit a regression model with interaction effects to predict percent reacted using feed rate, catalyst, stir rate, temperature, and concentration from the Reactor Augment Data dataset.

```jsl

// Open data table
dt = Open("$Sample_Data/Design Experiment/Reactor Augment Data.jmp");
// Model
Fit Model(
	Effects(
		:Feed Rate, :Catalyst, :Stir Rate,
		:Temperature, :Concentration,
		:Feed Rate * :Catalyst,
		:Feed Rate * :Stir Rate,
		:Feed Rate * :Temperature,
		:Feed Rate * :Concentration,
		:Catalyst * :Stir Rate,
		:Catalyst * :Temperature,
		:Catalyst * :Concentration,
		:Stir Rate * :Temperature,
		:Stir Rate * :Concentration,
		:Temperature * :Concentration
	),
	Y( :Percent Reacted )
);

```

### Fit a standard least squares model to analyze the effects of various factors on wine ratings using Fit Model function.

```jsl

// Open data table
dt = Open("$Sample_Data/Design Experiment/Wine Data.jmp");
// Reduced Model
Fit Model(
	Y( :Rating ),
	Effects(
		:Rater, :Variety, :"De-Stem"n,
		:Yeast, :Press, :Barrel Seasoning,
		:Filtering
	),
	Personality(
		"Standard Least Squares"
	),
	Emphasis( "Effect Screening" )
);

```

### Create a categorical analysis comparing various responses across different age groups using the Categorical function.

```jsl

// Open data table
dt = Open("$Sample_Data/Discovery US 2018 Survey.jmp");
// Categorical by Age
Categorical(
	X( :Age ),
	Responses( :Handedness ),
	Responses( :Analysis ),
	Responses( :BBQ ),
	Responses( :Pie ),
	Responses( :Discoveries ),
	Responses( :OS ),
	Responses( :Usage ),
	Responses( :Boy Band ),
	Responses( :DGA ),
	Responses( :Type ),
	Legend( 0 )
);

```

### Perform a standard least squares regression analysis to model the relationship between the response variable and the specified effects.

```jsl

// Open data table
dt = Open("$Sample_Data/Drug.jmp");
// Fit Model
Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality(
		"Standard Least Squares"
	),
	Run
);

```

### Perform a conditional logistic regression analysis using the Choice platform to adjust for confounding variables.

```jsl

// Open data table
dt = Open("$Sample_Data/Endometrial Cancer.jmp");
// Conditional Logistic Regression
Choice(
	Profile DataTable(
		Current Data Table()
	),
	Profile ID( :Outcome ),
	Profile Grouping( :Pair ),
	Profile Effects(
		:Gallbladder, :Hypertension
	),
	"Firth Bias-adjusted Estimates"n( 0 ),
	Likelihood Ratio Tests( 1 )
);

```

### Fit a nonlinear mixed-effects model with Scheffe cubic interactions for a mixture design experiment.

```jsl

// Open data table
dt = Open("$Sample_Data/Functional Data/Formulation For Homogeneity DOE.jmp");
// Model
Fit Model(
	Effects(
		:Solvent & Mixture,
		:Active & Mixture,
		:Water & Mixture,
		:Solvent * :Active,
		:Solvent * :Water,
		:Active * :Water,
		:Solvent * :Active * :Water,
		Scheffe Cubic( Solvent, Active ),
		Scheffe Cubic( Solvent, Water ),
		Scheffe Cubic( Active, Water )
	),
	Y( :T ),
	No Intercept( 1 )
);

```

### Build a loglinear variance model with interaction terms for shrinkage in the Injection Molding dataset.

```jsl

// Open data table
dt = Open("$Sample_Data/InjectionMolding.jmp");
// Model
Fit Model(
	Y( :Shrinkage ),
	Effects(
		:MoldTemp, :Screw Speed,
		:MoldTemp * :Screw Speed
	),
	LogVariance Effects(
		:Hold Time & LogVariance
	),
	Personality( "Loglinear Variance" ),
	Run
);

```

### Create a JSL script to define and parameterize an exponential loss function template.

```jsl

// Exponential.jsl
///////////////////////////////////////////////////////////////////////////////////////////////////////////
// JSL to create a loss function template of Exponenential             //
///////////////////////////////////////////////////////////////////////////////////////////////////////////

dt= new table ("Exponential");
dt<<New Column("Time", Numeric,continuous);   
dt<<New Column("Censor", Numeric,continuous);
dt<<New Column("Exponential", Numeric,continuous);
col=column( "Exponential");
col<<formula( Parameter({sigma=28703.3328183542}, -IfMZ( :Censor==0, (-Log(sigma))- :Time/sigma, -( :Time/sigma)))  );

```

### Perform one-way analysis with matching using the Oneway function .

```jsl

// Open data table
dt = Open("$Sample_Data/Matching.jmp");
// Oneway - Matching
Oneway(
	Y( :miles ),
	X( :season ),
	X Axis proportional( 0 ),
	Matching Lines( 1 ),
	Matching Column( subject )
);

```

### Explore patterns in a dataset containing various laboratory test results using the function `Explore Patterns`.

```jsl

// Open data table
dt = Open("$Sample_Data/Nicardipine Lab Patterns.jmp");
// Explore Patterns
Explore Patterns(
	Y(
		:Activated PTT, :ALT, :ALP, :AST,
		:Bilirubin, :BUN, :Calcium, :CO2,
		:Chloride, :Creatine Kinase,
		:Creatinine, :Erythrocytes,
		:Glucose, :Hematocrit,
		:Hemoglobin, :LDH, :Leukocytes,
		:PCO2, :Partial Pressure Oxygen,
		:pH, :Phosphate, :Platelet,
		:Potassium, :Protein,
		:Prothrombin Time, :Sodium,
		:Urate
	)
);

```

### Fit a statistical model using the Fit Model platform with specified effects and response variable.

```jsl

// Open data table
dt = Open("$Sample_Data/Odor JSS.jmp");
// Model
Fit Model(
	Effects(
		:temp & RS, :gl ratio & RS,
		:ht & RS, :temp * :temp,
		:temp * :gl ratio,
		:gl ratio * :gl ratio,
		:temp * :ht, :gl ratio * :ht,
		:ht * :ht
	),
	Y( :Odor )
);

```

### Fit a statistical model using a knotted spline effect to analyze the relationship between ozone levels and population.

```jsl

// Open data table
dt = Open("$Sample_Data/Polycity.jmp");
// Fit Model with Knotted Spline Effect
Fit Model(
	Y( :OZONE ),
	Effects( :POP & Knotted( 5 ) ),
	Personality(
		"Standard Least Squares"
	),
	Emphasis( "Effect Leverage" ),
	Run(
		:OZONE << {Lack of Fit( 0 ),
		Plot Actual by Predicted( 1 ),
		Plot Residual by Predicted( 1 ),
		Plot Effect Leverage( 1 )}
	)
);

```

### Create a bivariate plot to visualize the relationship between the portion of the population aged 60 and above and the portion aged 0-19, adjusting the frame size and marker drawing mode.

```jsl

// Open data table
dt = Open("$Sample_Data/PopAgeGroup.jmp");
// Age Portion
Bivariate(
	Y( :"Portion60+"n ),
	X( :"Portion 0-19"n ),
	SendToReport(
		Dispatch( {}, "Bivar Plot",
			FrameBox,
			{Frame Size( 532, 339 ),
			Marker Drawing Mode( "Fast" )
			}
		)
	)
);

```

### Perform a logistic regression analysis with age as the dependent variable and weight in pounds as the independent variable.

```jsl

// Open data table
dt = Open("$Sample_Data/World Class.jmp");
// Logistic
Logistic(
	Y( :age ),
	X( :"weight (lb.)"n )
);

```

### Generate an Exponentially Weighted Moving Average (EWMA) control chart for monitoring quality control metrics.

```jsl

// Open data table
dt = Open("$Sample_Data/Quality Control/Clips1.jmp");
// EWMA Chart
EWMA Control Chart(
	Y( :Gap ),
	Subgroup( :Sample )
);

```

### Perform a bivariate analysis on the Hours and Temp variables using the Bivariate platform.

```jsl

// Open data table
dt = Open("$Sample_Data/Reliability/Devalt.jmp");
// Bivariate
Bivariate( Y( :Hours ), X( :Temp ) );

```

### Generate a model-driven multivariate control chart with principal component scores using historical data.

```jsl

// Open data table
dt = Open("$Sample_Data/Quality Control/Flight Delays.jmp");
// PCA score with historical
Model Driven Multivariate Control Chart(
	Process( :Prin1, :Prin2, :Prin3 ),
	Historical Data End at Row( 16 ),
	T2 Plot,
	Statistical Prediction Error Plot,
	Normalized DModX Plot
);

```

### Build a Multivariate Control Chart using the Principal Components method and Phase Detection.

```jsl

// Open data table
dt = Open("$Sample_Data/Quality Control/Gravel.jmp");
// Multivariate Control Chart
Multivariate Control Chart(
	Y( :Large, :Medium ),
	Principal Components( 1 ),
	Phase Detection( 1 )
);

```

### Fit a parametric survival model using the LogNormal distribution in the Fit Model platform, incorporating frequency weights and a censoring variable.

```jsl

// Open data table
dt = Open("$Sample_Data/Reliability/Devalt.jmp");
// Fit Parametric Survival
Fit Model(
	Freq( :Weight ),
	Y( :Hours ),
	Effects( :x ),
	Personality( "Parametric Survival" ),
	Distribution( LogNormal ),
	Censor( :Censor ),
	Censor Code( 1 ),
	Run(
		Likelihood Ratio Tests( 1 ),
		{
		Estimate Survival Probability(
			x = 40.9853,
			[30000, 10000],
			Alpha( 0.05 )
		)}
	)
);

```

### Perform repeated measures degradation analysis using the Degradation function.

```jsl

// Open data table
dt = Open("$Sample_Data/Reliability/Device B.jmp");
// Degradation
Degradation(
	Y( :Power Drop ),
	Time( :Hours ),
	Label( :Device ),
	X( :Degrees C ),
	Application(
		Repeated Measures Degradation
	)
);

```

### Perform a One-Way ANOVA analysis on temperature data using the Oneway platform, comparing Fahrenheit measurements across different thermometer types and generating various comparative visualizations, including ANOM charts and mean diamonds.

```jsl

// Open data table
dt = Open("$Sample_Data/S4 Temps.jmp");
// Oneway - Thermometers
Oneway(
	Y( :fahrenheit ),
	X( :thermometer ),
	Each Pair(
		1,
		Ordered Differences Report( 0 )
	),
	ANOM( 1 ),
	Mean Diamonds( 1 ),
	Comparison Circles( 1 ),
	SendToReport(
		Dispatch( {"Analysis of Means"},
			"ANOM Graph", FrameBox,
			{Marker Size( 4 )}
		)
	)
);

```

### Perform an ordinal logistic regression analysis to model the Taste Test outcome based on Salt & RS and Salt squared effects.

```jsl

// Open data table
dt = Open("$Sample_Data/Salt in Popcorn.jmp");
// Ordinal Fit
Fit Model(
	Y( :Taste Test ),
	Effects( :Salt & RS, :Salt * :Salt ),
	Personality( "Ordinal Logistic" ),
	Run
);

```

### Join two data tables containing unequal numbers of rows using the By Row Number method.

```jsl

// Open data table
dt = Open("$Sample_Data/Species1.jmp");
// Joining unequal rows
Data Table( "Species1" ) <<
Join(
	With(
		Open(
			"$SAMPLE_DATA/Species2.jmp"
		)
	),
	By Row Number
);

```

### Perform a one-way ANOVA analysis in the Oneway platform.

```jsl

// Open data table
dt = Open("$Sample_Data/Snapdragon.jmp");
// Oneway Anova
Oneway(
	Y( :Y ),
	X( :Soil ),
	Block( :Block ),
	Anova( 1 ),
	Mean Diamonds( 1 )
);

```

### Perform a One-Way ANOVA with ANOMV for Variances to analyze the relationship between weight and brand in the Spring Data dataset.

```jsl

// Open data table
dt = Open("$Sample_Data/Spring Data.jmp");
// Oneway with ANOMV
Oneway(
	Y( :Weight ),
	X( :Brand ),
	ANOM for Variances(
		1,
		Show Summary Report( 1 )
	),
	Box Plots( 0 ),
	Mean Diamonds( 0 ),
	SendToReport(
		Dispatch(
			{
			"Analysis of Means for Variances"
			}, "ANOMV Graph", FrameBox,
			{Marker Size( 4 )}
		)
	)
);

```

### Fit a Nominal Logistic Regression Model using selected variables to predict the Survival status.

```jsl

// Open data table
dt = Open("$Sample_Data/Titanic Passengers.jmp");
// Fit Model
Fit Model(
	Y( :Survived ),
	Effects(
		:Passenger Class, :Sex, :Age,
		:Siblings and Spouses,
		:Parents and Children, :Fare
	),
	Personality( "Nominal Logistic" ),
	Run(
		Likelihood Ratio Tests( 1 ),
		Wald Tests( 0 )
	)
);

```

### Create a Variability Chart with Standard Deviation and Bias Reports to assess linearity and process variation.

```jsl

// Open data table
dt = Open("$Sample_Data/Variability Data/MSALinearity.jmp");
// Variability Chart
Variability Chart(
	Y( :Response ),
	X( :Part ),
	Standard( :Standard ),
	Process Variation( 14.9286 ),
	Std Dev Chart( 1 ),
	Bias Report( 1 ),
	Linearity Study( 0.05 )
);

```

### Perform Bivariate Analysis on Weight and Height Data with Fit Line and Fit Robust Models

```jsl

// Open data table
dt = Open("$Sample_Data/Weight Measurements.jmp");
// Bivariate
Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line(
		{Line Color( {213, 72, 87} )}
	),
	Fit Robust(
		{Line Color( {57, 177, 67} )}
	)
);

```

### Perform a contingency analysis on categorical variables age and sex, displaying counts, percentages, and expected frequencies.

```jsl

// Open data table
dt = Open("$Sample_Data/World Class.jmp");
// Contingency
Contingency(
	Y( :age ),
	X( :sex ),
	Crosstabs(
		Count( 1 ),
		Total %( 1 ),
		Col %( 1 ),
		Row %( 1 ),
		Expected( 0 ),
		Deviation( 0 ),
		"Cell Chi^2"n( 0 )
	)
);

```

### Example jsl code to join 2 tables by matching columns

```jsl

// Open data table
dt = Open("$Sample_Data/Coffee Shop Purchases.jmp");
// Join
Data Table( "Coffee Shop Purchases" ) <<
Join(
	With(
		Data Table(
			"Coffee Shop Purchases"
		)
	),
	By Matching Columns(
		:Date = :Date,
		:Customer = :Customer,
		:Beverage = :Beverage
	),
	Drop multiples( 1, 1 ),
	"Include non-matches"n( 0, 0 ),
	Preserve main table order( 1 ),
	Output Table(
		"Coffee Shop Purchases Final"
	)
);

```

### Fit a Standard Least Squares Model with Effect Screening to Predict Price Using Carat Weight, Color, Clarity, Depth, Table, Cut, and Report as Effects.

```jsl

// Open data table
dt = Open("$Sample_Data/Diamonds Data.jmp");
// Fit Model
Fit Model(
	Y( :Price ),
	Effects(
		:Carat Weight, :Color, :Clarity,
		:Depth, :Table, :Cut, :Report
	),
	Personality(
		"Standard Least Squares"
	),
	Emphasis( "Effect Screening" ),
	Run(
		Profiler(
			1,
			Confidence Intervals( 1 ),
			Desirability Functions( 1 ),
			Price <<
			Response Limits(
				{Lower( 2000, 0.01 ),
				Middle( 3000, 1 ),
				Upper( 4000, 0.01 ),
				Goal( Match Target ),
				Importance( 1 )}
			),
			Term Value(
				Carat Size(
					0.631909406669322
				),
				Color( "E" ),
				Clarity( "VS2" ),
				Depth( 58.015177401438 ),
				Table( 62.4632071198035 ),
				Cut( "Ideal" ),
				Report( "GIA" )
			)
		),
		:Price << {Sorted Estimates( 0 ),
		Scaled Estimates( 1 ),
		Plot Actual by Predicted( 1 ),
		Plot Regression( 0 ),
		Plot Residual by Predicted( 0 ),
		Plot Effect Leverage( 0 )}
	)
);

```

### Perform Multiple Correspondence Analysis (MCA) with 'TV', 'Film', 'Art', and 'Restaurant' as categorical response variables, 'Subject' as a supplementary row variable, and 'Age' as a supplementary column variable, and visualize the results in a 2D plot.

```jsl

// Open data table
dt = Open("$Sample_Data/Employee Taste.jmp");
// MCA-subject-supp-age
Multiple Correspondence Analysis(
	Y( :TV, :Film, :Art, :Restaurant ),
	X( :Subject ),
	Z( :Age ),
	Cross Table( Show Total( 1 ) ),
	Cross Table of Supplementary Rows(
		Show Total( 1 )
	),
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
		)
	)
);

```

### Fit a quadratic regression model by including polynomial terms of reaction time and reaction temperature, as well as their interactions and higher-order interactions, using the Fit Model function.

```jsl

// Open data table
dt = Open("$Sample_Data/First-Order Kinetics.jmp");
// Model quadratic
Fit Model(
	Effects(
		:Reaction Time & RS,
		:Reaction Temperature & RS,
		:Reaction Time * :Reaction Time,
		:Reaction Time *
		:Reaction Temperature,
		:Reaction Temperature *
		:Reaction Temperature,
		:Reaction Time * :Reaction Time
		 * :Reaction Time,
		:Reaction Time * :Reaction Time
		 * :Reaction Temperature,
		:Reaction Time * (
		Reaction Temperature *
		:Reaction Temperature),
		:Reaction Temperature *
		:Reaction Temperature *
		:Reaction Temperature
	),
	Y( :Yield )
);

```

### Perform a choice model analysis using the Choice function .

```jsl

// Open data table
dt = Open("$Sample_Data/Lung Cancer Choice.jmp");
// Choice
Open(
	"$SAMPLE_DATA/Lung Cancer Responses.jmp"
);
Choice(
	Response DataTable(
		Lung Cancer Choice
	),
	Profile DataTable(
		Lung Cancer Responses
	),
	Subject DataTable(
		Lung Cancer Choice
	),
	Response Profile ID Chosen(
		:Lung Cancer
	),
	Response Freq( :Count ),
	Response Profile ID Choices(
		:Choice1, :Choice2
	),
	Profile ID( :Lung Cancer ),
	Profile Effects( :Lung Cancer ),
	Subject Effects( :Smoker ),
	"Firth Bias-adjusted Estimates"n( 0 ),
	Likelihood Ratio Tests( 1 )
);

```

### Construct a response surface model  using the Standard Least Squares personality to analyze the effects of multiple variables and their interactions on the odor response.

```jsl

// Open data table
dt = Open("$Sample_Data/Odor Control Original.jmp");
// Response Surface
Fit Model(
	Y( :odor ),
	Effects(
		:temp & RS, :gl ratio & RS,
		:ht & RS, :temp * :temp,
		:gl ratio * :temp,
		:gl ratio * :gl ratio,
		:ht * :temp, :ht * :gl ratio,
		:ht * :ht
	),
	Personality(
		"Standard Least Squares"
	),
	Run(
		Profiler( 1 ),
		:odor << {Scaled Estimates( 1 ),
		Plot Actual by Predicted( 1 )}
	)
);

```

### Create a Bubble Plot Street Map visualization using longitude and latitude data to represent population sizes, with colors indicating lead levels. Use the Background Map function to display a street map service and set axis scales and settings for the X and Y coordinates. Incorporate custom title and frame adjustments.

```jsl

// Open data table
dt = Open("$Sample_Data/Pollutants Map.jmp");
// Bubble Plot Street Map
Bubble Plot(
	X( :Longitude ),
	Y( :Latitude ),
	Sizes( :POP ),
	ID( :Lead ),
	Bubble Size( 18.1 ),
	Label( "None" ),
	Trail Lines( "None" ),
	Color Theme(
		"Green to Black to Red"
	),
	Title Position( 0, 0 ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox,
			{Min( -125.667129872271 ),
			Max( -69.8506306784654 ),
			Inc( 10 ), Minor Ticks( 1 ),
			Rotated Labels(
				"Horizontal"
			)}
		),
		Dispatch( {}, "2", ScaleBox,
			{Min( 21.9791666666667 ),
			Max( 53.1081814236111 ),
			Inc( 5 ), Minor Ticks( 1 ),
			Rotated Labels(
				"Horizontal"
			)}
		),
		Dispatch( {}, "Bubble Plot",
			FrameBox,
			{Frame Size( 598, 343 ),
			Background Map(
				Images(
					"Street Map Service"
				)
			), Grid Line Order( 3 ),
			Reference Line Order( 4 )}
		)
	)
);

```

### Analyze customer preference data for potato chips using Max Diff with a focus on product of value.

```jsl

// Open data table
dt = Open("$Sample_Data/Potato Chip Responses.jmp");
// Max Diff for Product Of
Open(
	"$Sample_Data/Potato Chip Subjects.jmp"
);
Open(
	"$Sample_Data/Potato Chip Profiles.jmp"
);
MaxDiff(
	Response Data Table(
		Data Table(
			"Potato Chip Responses"
		)
	),
	Profile DataTable(
		Potato Chip Profiles
	),
	Subject DataTable(
		Data Table(
			"Potato Chip Subjects"
		)
	),
	Response Subject ID( :Respondent ),
	Response Profile ID Choices(
		:Choice 1, :Choice 2, :Choice 3
	),
	Profile ID( :Profile ID ),
	Profile Effects( :Product Of ),
	Subject Subject ID( :Respondent ),
	Subject Effects(
		:Citizenship, :Gender
	),
	"Firth Bias-adjusted Estimates"n( 1 ),
	Response Best Option( :Best Profile ),
	Response Worst Option(
		:Worst Profile
	)
);

```

### Fit a generalized linear model with a Poisson distribution and log link function to the Ship Damage data table.

```jsl

// Open data table
dt = Open("$Sample_Data/Ship Damage.jmp");
// Fit Model
Fit Model(
	Offset( :Service ),
	Y( :N ),
	Effects(
		:Type B, :Type C, :Type D,
		:Type E, :Yr 65, :Yr 70, :Yr 75,
		:Op 75
	),
	Personality(
		"Generalized Linear Model"
	),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Overdispersion Tests and Intervals(
		0
	),
	"Firth Bias-adjusted Estimates"n( 0 ),
	Run
);

```

### Perform a multiple linear regression analysis with length, basilar, zygomat, and postorb as response variables, and sex as a categorical predictor utilizing the Standard Least Squares personality in the Fit Model platform, and generate diagnostic plots including Actual by Predicted, Residual by Predicted, and Effect Leverage plots for each response variable.

```jsl

// Open data table
dt = Open("$Sample_Data/Skull.jmp");
// Fit Model 2
Fit Model(
	Y(
		:length, :basilar, :zygomat,
		:postorb
	),
	Effects( :sex ),
	Personality(
		"Standard Least Squares"
	),
	Run(
		:length <<
		{Plot Actual by Predicted( 1 ),
		Plot Residual by Predicted( 1 ),
		Plot Effect Leverage( 1 )},
		:basilar <<
		{Plot Actual by Predicted( 1 ),
		Plot Residual by Predicted( 1 ),
		Plot Effect Leverage( 1 )},
		:zygomat <<
		{Plot Actual by Predicted( 1 ),
		Plot Residual by Predicted( 1 ),
		Plot Effect Leverage( 1 )},
		:postorb <<
		{Plot Actual by Predicted( 1 ),
		Plot Residual by Predicted( 1 ),
		Plot Effect Leverage( 1 )}
	)
);

```

### Perform a bivariate analysis on infant mortality rate against crude birth rate using the World Demographics dataset.

```jsl

// Open data table
dt = Open("$Sample_Data/World Demographics.jmp");
// Bivariate: Infant Mortality by Birth Rate
Bivariate(
	Y( :Infant Mortality Rate ),
	X( :"Crude Birth Rate (1000)"n ),
	SendToReport(
		Dispatch( {}, "Bivar Plot",
			FrameBox,
			{Frame Size( 264, 205 ),
			Marker Size( 2 ),
			DispatchSeg(
				Marker Seg( 1 ),
				label offset(
					{1, -104, 22},
					{7, 8, -4},
					{126, -2, 13},
					{160, -15, -26},
					{198, -103, -15}
				)
			)}
		)
	)
);

```


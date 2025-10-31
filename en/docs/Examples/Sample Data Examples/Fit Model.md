# Fit Model

More examples for this topic using the sample data files provided with JMP

### Build a gaussian process model

```jsl

// Open data table
dt = Open("$Sample_Data/2D Gaussian Process Example.jmp");
// Model
Gaussian Process(
	Y( :Y ),
	X( :X1, :X2 )
);

```

### Fit a standard least squares model using frequency

```jsl

// Open data table
dt = Open("$Sample_Data/Bacteria.jmp");
// Fit Model Report
Fit Model(
	Freq( :Relative Sizes ),
	Y( :Group Means ),
	Effects( :Group ),
	Personality(
		"Standard Least Squares"
	),
	Emphasis( "Minimal Report" ),
	Run(
		:Group Means << {{:Group << {}}}
	)
);

```

### Generate a standard least squares model with a prediction profiler, a normal plot and a pareto plot of estimates

```jsl

// Open data table
dt = Open("$Sample_Data/Bicycle.jmp");
// Fit Model
Fit Model(
	Y( :Y ),
	Effects(
		:HBars, :Dynamo, :Seat, :Tires,
		:Gear, :Raincoat, :Brkfast
	),
	Personality(
		"Standard Least Squares"
	),
	Run(
		Profiler( 1 ),
		Y << {Normal Plot( 1 ),
		Pareto Plot( 1 )}
	)
);

```

### Fit a logistic regression model

```jsl

// Open data table
dt = Open("$Sample_Data/Big Class.jmp");
// Logistic
Logistic( Y( :age ), X( :weight ) );

```

### Generate a standard least squares model

```jsl

// Open data table
dt = Open("$Sample_Data/Big Class.jmp");
// Fit Model
Fit Model(
	Y( :weight ),
	Effects( :age, :sex, :height ),
	Personality(
		"Standard Least Squares"
	),
	Run(
		:weight <<
		{Plot Actual by Predicted( 1 ),
		Plot Residual by Predicted( 1 ),
		Plot Effect Leverage( 1 )}
	)
);

```

### Fit a manova model

```jsl

// Open data table
dt = Open("$Sample_Data/Blood Pressure.jmp");
// Fit Model
Fit Model(
	Y(
		:BP 8M, :BP 12M, :BP 6M, :BP 8W,
		:BP 12W, :BP 6W, :BP 8F, :BP 12F,
		:BP 6F
	),
	Effects( :Subject, :Dose ),
	Personality( "Manova" ),
	Run
);

```

### Fit a standard least squares model with a box cox transformation

```jsl

// Open data table
dt = Open("$Sample_Data/BoxCox.jmp");
// Fit Model
Fit Model(
	Y( :y ),
	Effects(
		:load, :flow, :load * :flow,
		:speed, :load * :speed,
		:flow * :speed, :mud,
		:load * :mud, :flow * :mud,
		:speed * :mud
	),
	Personality(
		"Standard Least Squares"
	),
	Run( Box Cox Y Transformation( 1 ) )
);

```

### Generate an ordinal logistic model

```jsl

// Open data table
dt = Open("$Sample_Data/Cheese.jmp");
// Fit Model
Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :Cheese ),
	Personality( "Ordinal Logistic" ),
	Run
);

```

### Generate discriminant analysis

```jsl

// Open data table
dt = Open("$Sample_Data/Cherts.jmp");
// Discriminant
Discriminant(
	X( :location name ),
	Y(
		:Al, :Mn, :Na, :Br, :Ce, :Co, :Cr,
		:Cs, :Eu, :Fe, :Hf, :La, :Sc, :Sm,
		:U
	),
	Show Classification Counts( 1 )
);

```

### Fit a manova model

```jsl

// Open data table
dt = Open("$Sample_Data/Cholesterol.jmp");
// Fit Model
Fit Model(
	Y(
		:April AM, :April PM, :May AM,
		:May PM, :June AM, :June PM
	),
	Effects( :treatment ),
	Personality( "Manova" ),
	Run
);

```

### Generate a generalized linear model with a poisson distribution and log link function

```jsl

// Open data table
dt = Open("$Sample_Data/CrabSatellites.jmp");
// Model
Fit Model(
	Y( :satell ),
	Effects(
		:color, :spine, :width, :weight
	),
	Center Polynomials( 0 ),
	Personality(
		"Generalized Linear Model"
	),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" )
);

```

### Build a manova model

```jsl

// Open data table
dt = Open("$Sample_Data/Crops.jmp");
// Manova
Fit Model(
	Y( :S1, :S3 ),
	Effects( :CROP ),
	Personality( "Manova" ),
	Run
);

```

### Fit a standard least squares model with interaction terms

```jsl

// Open data table
dt = Open("$Sample_Data/Design Experiment/2x3x4 Factorial.jmp");
// Model
Fit Model(
	Effects(
		:X1, :X2, :X3, :X1 * :X2,
		:X1 * :X3, :X2 * :X3
	),
	Y( :Y ),
	PERSONALITY( Standard Least Squares )
);

```

### Fit a mixed model with whole plots and subplots

```jsl

// Open data table
dt = Open("$Sample_Data/Design Experiment/Battery Data.jmp");
// Model
Fit Model(
	Effects(
		:Whole Plots & Random,
		:Subplots & Random, :A1, :A2, :A3,
		:A4, :C1, :C2, :A1 * :A2,
		:A1 * :A3, :A1 * :A4, :A1 * :C1,
		:A1 * :C2, :A2 * :A3, :A2 * :A4,
		:A2 * :C1, :A2 * :C2, :A3 * :A4,
		:A3 * :C1, :A3 * :C2, :A4 * :C1,
		:A4 * :C2, :C1 * :C2
	),
	Y( :OCV )
);

```

### Fit a standard least squares model with REML estimation using specified random effects and interactions for OCV in the Battery Data dataset.

```jsl

// Open data table
dt = Open("$Sample_Data/Design Experiment/Battery Data.jmp");
// Reduced Model 2
Fit Model(
	Y( :OCV ),
	Effects(
		:Whole Plots & Random,
		:Subplots & Random, :A1, :A2, :A4,
		:C1, :C2, :A1 * C1, :A1 * C2,
		:A2 * C1, :A4 * C2
	),
	Keep dialog open( 1 ),
	Personality(
		"Standard Least Squares"
	),
	Method( "REML" )
);

```

### Fit a Gaussian Process model to predict the response variable using several predictor variables in a Design of Experiments (DOE) context.

```jsl

// Open data table
dt = Open("$Sample_Data/Design Experiment/Borehole Sphere Packing.jmp");
// Model (GP from DOE)
Gaussian Process(
	Y( :Y ),
	X(
		:log10 Rw, :log10 R, :Tu, :Tl,
		:Hu, :Hl, :L, :Kw
	)
);

```

### Fit a standard least squares linear regression model with multiple interaction terms between silica, sulfur, and silane, using stretch as the response variable.

```jsl

// Open data table
dt = Open("$Sample_Data/Design Experiment/Bounce Data.jmp");
// Model
Fit Model(
	Effects(
		:Silica & RS, :Sulfur & RS,
		:Silane & RS, :Silica * :Sulfur,
		:Silica * :Silane,
		:Sulfur * :Silane,
		:Silica * :Silica,
		:Sulfur * :Sulfur,
		:Silane * :Silane
	),
	Y( :Stretch ),
	PERSONALITY(
		"Standard Least Squares"
	)
);

```

### Analyze design experiment by evaluating factor effects for grind, temperature, time, charge, and station using the Evaluate Design function in the DOE platform.

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

### Fit a standard least squares regression model using the Strength variable as the response and Time, Charge, and Station as the predictors.

```jsl

// Open data table
dt = Open("$Sample_Data/Design Experiment/Coffee Data.jmp");
// Reduced Model
Fit Model(
	Y( :Strength ),
	Effects( :Time, :Charge, :Station ),
	Keep dialog open( 1 ),
	Personality(
		"Standard Least Squares"
	),
	Emphasis( "Effect Screening" )
);

```

### Fit a standard least squares regression model with multiple effects and interactions.

```jsl

// Open data table
dt = Open("$Sample_Data/Design Experiment/DOE Example 1.jmp");
// Model
Fit Model(
	Effects(
		:Operator, :Speed, :Current,
		:Operator * :Speed,
		:Operator * :Current,
		:Speed * :Current
	),
	Y( :Depth ),
	PERSONALITY(
		"Standard Least Squares"
	)
);

```

### Generate a full factorial mixture experiment model  using the Fit Model function with specified effects.

```jsl

// Open data table
dt = Open("$Sample_Data/Design Experiment/Donev Mixture Data.jmp");
// Model
Fit Model(
	Effects(
		:CuSO4 & RS & Mixture,
		:Na2S2O3 & RS & Mixture,
		:Glyoxal & RS & Mixture,
		:CuSO4 * :Na2S2O3,
		:CuSO4 * :Glyoxal,
		:CuSO4 * :Wavelength,
		:Na2S2O3 * :Glyoxal,
		:Na2S2O3 * :Wavelength,
		:Glyoxal * :Wavelength
	),
	Y( :Damping ),
	No Intercept( 1 )
);

```

### Perform Definitive Screening Analysis with Response Variable Yield and Eight Predictor Variables.

```jsl

// Open data table
dt = Open("$Sample_Data/Design Experiment/Extraction2 Data.jmp");
// Fit Definitive Screening
Fit Definitive Screening(
	Y( :Yield ),
	X(
		:Lot, :Methanol, :Ethanol,
		:Propanol, :Butanol, :pH, :Time
	)
);

```

### Generate a Definitive Screening Design to identify significant factors affecting yield in an extraction process.

```jsl

// Open data table
dt = Open("$Sample_Data/Design Experiment/Extraction3 Data.jmp");
// Fit Definitive Screening
Fit Definitive Screening(
	X(
		:Lot, :Methanol, :Ethanol,
		:Propanol, :Butanol, :pH, :Time
	),
	Y( :Yield )
);

```

### Fit a multiple regression model using the Fit Model platform .

```jsl

// Open data table
dt = Open("$Sample_Data/Design Experiment/Metacrate Limit Of Detection DOE.jmp");
// Model
Fit Model(
	Effects(
		:Dichloromethane & RS,
		:Methanol & RS,
		:Sample Volume & RS,
		:Dichloromethane *
		:Dichloromethane,
		:Dichloromethane * :Methanol,
		:Methanol * :Methanol,
		:Dichloromethane * :Sample Volume,
		:Methanol * :Sample Volume,
		:Sample Volume * :Sample Volume
	),
	Y( :Metacrate )
);

```

### Fit a two-part mixed effect model using the Fit Model function to analyze the effects of brand, time, and power on the number of popped and total kernels in popcorn.

```jsl

// Open data table
dt = Open("$Sample_Data/Design Experiment/Popcorn DOE Results.jmp");
// Model
Fit Model(
	Effects(
		:Brand, :Time, :Power,
		:Brand * :Time, :Brand * :Power,
		:Time * :Power, :Time * :Time,
		:Power * :Power
	),
	Y( :Number Popped ),
	Y( :Total Kernels )
);

```

### Perform a nonlinear regression model using the `Nonlinear` function.

```jsl

// Open data table
dt = Open("$Sample_Data/Design Experiment/Reaction Kinetics.jmp");
// Model
Nonlinear(
	Y( :Observed Yield ),
	X( :Yield Model )
);

```

### Fit a complex linear model with multiple effects and interactions to predict the chemical reaction yield.

```jsl

// Open data table
dt = Open("$Sample_Data/Design Experiment/Reactor 20 Custom.jmp");
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

### Fit a reduced general linear model with interactions between catalyst, temperature, and concentration to predict percent reacted.

```jsl

// Open data table
dt = Open("$Sample_Data/Design Experiment/Reactor 20 Custom.jmp");
// Reduced Model
Fit Model(
	Y( :Percent Reacted ),
	Effects(
		:Catalyst, :Temperature,
		:Concentration,
		:Catalyst * :Temperature,
		:Temperature * :Concentration
	),
	Personality(
		"Standard Least Squares"
	)
);

```

### Fit a standard least squares multiple regression model with interactions between feed rate, catalyst, stir rate, temperature, and concentration to predict percent reacted.

```jsl

// Open data table
dt = Open("$Sample_Data/Design Experiment/Reactor 8 Runs.jmp");
// Model
Fit Model(
	Effects(
		:Feed Rate, :Catalyst, :Stir Rate,
		:Temperature, :Concentration,
		:Feed Rate * :Catalyst,
		:Feed Rate * :Stir Rate
	),
	Y( :Percent Reacted ),
	PERSONALITY(
		"Standard Least Squares"
	)
);

```

### Build a decision tree to predict a binary outcome using specified independent variables, including initial splits and validation settings.

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

###  Fit a neural network model for binary classification using specified input variables and a tanh activation function.

```jsl

// Open data table
dt = Open("$Sample_Data/Diabetes.jmp");
// Neural of Y Binary
Neural(
	Y( :Y Binary ),
	X(
		:Age, :Gender, :BMI, :BP,
		:Total Cholesterol, :LDL, :HDL,
		:TCH, :LTG, :Glucose
	),
	Validation( :Validation ),
	Informative Missing( 0 ),
	Set Random Seed( 1234 ),
	Fit( NTanH( 3 ) )
);

```

### Analyze and Fit a Curve of Dissolution with Respect to Time, Including a Grouping by Batch and Utilizing F2 Analysis with Bootstrapping.

```jsl

// Open data table
dt = Open("$Sample_Data/Dissolution DoE Verification Runs.jmp");
// Fit Curve of Dissolution by Time
Fit Curve(
	Y( :Dissolution ),
	X( :Time ),
	Group( :Batch ),
	F2 Analysis(
		Unit ID( :Tablet in Batch ),
		Alpha( 0.1 ),
		Reference Level( "Reference" ),
		Bootstrap Samples( 2500 )
	)
);

```

### Fit a generalized linear model using the Fit Model platform with specified effects and without an intercept term.

```jsl

// Open data table
dt = Open("$Sample_Data/Dissolution DoE.jmp");
// Model
Fit Model(
	Effects(
		:Polymer A & Mixture,
		:Polymer B & Mixture,
		:Polymer A * :Total Polymer,
		:Polymer A * :Compression Force,
		:Polymer B * :Total Polymer,
		:Polymer B * :Compression Force,
		:Total Polymer *
		:Compression Force
	),
	Y( :Dissolution 60 ),
	No Intercept( 1 )
);

```

### Perform a bivariate analysis fitting LogHist1 as the response variable and LogHist0 as the explanatory variable using the Bivariate platform.

```jsl

// Open data table
dt = Open("$Sample_Data/Dogs.jmp");
// Fit LogHist1 By LogHist0
Bivariate(
	Y( :LogHist1 ),
	X( :LogHist0 )
);

```

### Fit a generalized linear model with separate slopes for different levels of a categorical variable using the standard least squares personality in the Fit Model platform.

```jsl

// Open data table
dt = Open("$Sample_Data/Drug.jmp");
// Fit Model-separate slopes
Fit Model(
	Y( :y ),
	Effects( :Drug, :x, :Drug * :x ),
	Personality(
		"Standard Least Squares"
	),
	Run
);

```

### Fit a linear mixed model with multiple fixed effects and interactions using the Fit Model platform.

```jsl

// Open data table
dt = Open("$Sample_Data/Functional Data/Mill DOE.jmp");
// Model
Fit Model(
	Effects(
		:"%Beads"n, :"%Strength"n,
		:"Flow(g/min)"n, :"T(ºC)"n,
		:"%Beads"n * :"%Strength"n,
		:"%Beads"n * :"Flow(g/min)"n,
		:"%Beads"n * :"T(ºC)"n,
		:"%Strength"n * :"Flow(g/min)"n,
		:"%Strength"n * :"T(ºC)"n,
		:"Flow(g/min)"n * :"T(ºC)"n,
		:"%Beads"n * :"%Beads"n,
		:"%Strength"n * :"%Strength"n,
		:"Flow(g/min)"n * :"Flow(g/min)"n,
		:"T(ºC)"n * :"T(ºC)"n
	),
	Y( :"Size/nm"n )
);

```

### Analyze durability data using a oneway ANOVA to compare means across brands in the Golf Balls dataset.

```jsl

// Open data table
dt = Open("$Sample_Data/Golf Balls.jmp");
// Oneway: Durability by Brand
Oneway(
	Y( :Durability ),
	X( :Brand ),
	Mean Lines( 1 ),
	Connect Means( 1 ),
	Grand Mean( 0 )
);

```

### Fit a Stepwise Regression Model with Interaction Terms

```jsl

// Open data table
dt = Open("$Sample_Data/Hot Dogs2.jmp");
// Fit Model
Fit Model(
	Y( :"$/oz"n ),
	Effects(
		:Type, :Size, :Type * :Size
	),
	Personality( "Stepwise" ),
	Run
);

```

### Perform an Oneway analysis with Height as the response variable and Gender as the factor, displaying the means and mean diamonds on the plot.

```jsl

// Open data table
dt = Open("$Sample_Data/Htwt12.jmp");
// Oneway
Oneway(
	Y( :Height ),
	X( :Gender ),
	Means( 1 ),
	Box Plots( 0 ),
	Mean Diamonds( 1 )
);

```

### Perform discriminant analysis to classify species based on sepal and petal measurements using the Iris dataset.

```jsl

// Open data table
dt = Open("$Sample_Data/Iris.jmp");
// Discriminant
Discriminant(
	X( :Species ),
	Y(
		:Sepal length, :Sepal width,
		:Petal length, :Petal width
	)
);

```

### Perform a multiple linear regression analysis using the Standard Least Squares personality.

```jsl

// Open data table
dt = Open("$Sample_Data/Longley.jmp");
// Fit Model
Fit Model(
	Y( :y ),
	Effects(
		:x1, :x2, :x3, :x4, :x5, :x6
	),
	Personality(
		"Standard Least Squares"
	),
	Emphasis( "Effect Leverage" ),
	Run
);

```

### Create a loss function template for a Tobit model with a single predictor and standard error parameter.

```jsl

// Tobit1.jsl
///////////////////////////////////////////////////////////////////////////////////////////////////////////
// JSL to create a loss function template of Tobit1                          //
///////////////////////////////////////////////////////////////////////////////////////////////////////////

dt= new table ("Tobit1");
dt<<New Column("Y", Numeric,continuous);   
dt<<New Column("Model", Numeric,continuous);
dt<<New Column("Tobit Loss", Numeric,continuous);

column( "Model") << formula( Parameter({b0=0, b1=0, b2=0},  :y-(b0+b1*Empty()+b2*Empty()))  );
column( "Tobit Loss") << formula( Parameter({Sigma=1}, -IfMZ( :y==0, Log(1-Normal Distribution(- :Model/Sigma)), (-Log(Sigma))-0.5*( :Model/Sigma)^2-0.5*Log(2*Pi()))) );

```

### Create a loss function template for a Weibull distribution with one parameter.

```jsl

// Weibull, 1 Parm.jsl
///////////////////////////////////////////////////////////////////////////////////////////////////////////
// JSL to create a loss function template of Weibull, 1 Parm          //
///////////////////////////////////////////////////////////////////////////////////////////////////////////

dt= new table ("Weibull, 1 Parm");
dt<<New Column("Censor", Numeric,continuous);   
dt<<New Column("Model", Numeric,continuous);
dt<<New Column("Weibull", Numeric,continuous);

column( "Model") << formula( Parameter({b0=3.93988152926993, b1=0.004505313558698, b2=-0.01244813868867}, Log(Empty())-(b0+b1*Empty()+b2*Empty()))  );
column( "Weibull") << formula( Parameter({sigma=0.928115276636918}, -IfMZ( :Censor==0,  :Model/sigma-Exp( :Model/sigma)-Log(sigma), -Exp( :Model/sigma)))  );

```

### Perform a one-way ANOVA analysis on the variables Count1 and Count2 using the Brand variable as the classifier, and generate pairwise comparisons using Student's t-test and Hsu-MCB method.

```jsl

// Open data table
dt = Open("$Sample_Data/Membrane.jmp");
// Oneway
Oneway(
	Y( :Count1, :Count2 ),
	X( :Brand ),
	Anova( 1 ),
	Student's t( 1 ),
	Hsu MCB( 1 )
);

```

### Fit a reduced nonlinear model with equal alphas for algae density.

```jsl

// Open data table
dt = Open("$Sample_Data/Nonlinear Examples/Algae Mitscherlich.jmp");
// Reduced nonlinear model-with equal alphas
Nonlinear(
	Y( :Algae density ),
	X( :equal alphas ),
	Finish
);

```

### Create a nonlinear regression model to analyze algae density using the Algae Mitscherlich dataset with equal betas.

```jsl

// Open data table
dt = Open("$Sample_Data/Nonlinear Examples/Algae Mitscherlich.jmp");
// Reduced nonlinear model-with equal betas
Nonlinear(
	Y( :Algae density ),
	X( :equal betas ),
	Finish
);

```

### Fit a nonlinear Meyers Model to the given dataset using the Newton method.

```jsl

// Open data table
dt = Open("$Sample_Data/Nonlinear Examples/Chemical Kinetics.jmp");
// Meyers Model Fit
Nonlinear(
	Y( :"Velocity (y)"n ),
	X( :"Model (x)"n ),
	Newton,
	Finish
);

```

### Perform a nonlinear analysis with the response variable designated as Model2 Y and the loss function specified as Loss2, utilizing gradient-based optimization techniques and Newton's method.

```jsl

// Open data table
dt = Open("$Sample_Data/Nonlinear Examples/Logistic w Loss.jmp");
// Nonlinear with Model2 Y and Loss2
Nonlinear(
	X( :Model2 Y ),
	Loss( :Loss2 ),
	Relative Gradient( 0.000000001 ),
	Gradient Limit( 0.000000001 ),
	CL Limit( 0.00000001 ),
	Numeric Derivatives Only( 1 ),
	Loss is Neg LogLikelihood( 1 ),
	Newton,
	Finish,
	Plot( 0 )
);

```

### Perform a one-way analysis of variance with nonparametric tests on the Gain variable while grouping data by the Dose variable using the Wilcoxon Test, Median Test, and van der Waerden Test.

```jsl

// Open data table
dt = Open("$Sample_Data/Nonparametric.jmp");
// Oneway with NP Tests
Oneway(
	Y( :Gain ),
	X( :Dose ),
	Wilcoxon Test( 1 ),
	Median Test( 1 ),
	van der Waerden Test( 1 )
);

```

### Fit a generalized linear model using the Normal distribution and Log link function.

```jsl

// Open data table
dt = Open("$Sample_Data/Nor.jmp");
// Model
Fit Model(
	Y( :Y ),
	Effects( :X ),
	Personality(
		"Generalized Linear Model"
	),
	GLM Distribution( "Normal" ),
	Link Function( "Log" ),
	Overdispersion Tests and Intervals(
		1
	)
);

```

### Fit a multiple regression model using standard least squares personality to predict odor based on temperature, glucose ratio, and height, including their interactions.

```jsl

// Open data table
dt = Open("$Sample_Data/Odor.jmp");
// Model
Fit Model(
	Effects(
		temp & RS, gl ratio & RS, ht & RS,
		temp * gl ratio, temp * ht,
		gl ratio * ht, temp * temp,
		gl ratio * gl ratio, ht * ht
	),
	Y( :odor ),
	Personality(
		"Standard Least Squares"
	)
);

```

### Fit a linear regression model using the Fit Model platform .

```jsl

// Open data table
dt = Open("$Sample_Data/Polycity.jmp");
// Fit Model with Linear Fit
Fit Model(
	Y( :OZONE ),
	Effects( :POP ),
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

### Fit a full factorial model with interaction effects for popcorn yield, popcorn type, oil amount, batch, and their interactions.

```jsl

// Open data table
dt = Open("$Sample_Data/Popcorn.jmp");
// Full Factorial Model
Fit Model(
	Y( :yield ),
	Effects(
		:popcorn, :oil amt,
		:popcorn * :oil amt, :batch,
		:popcorn * :batch,
		:oil amt * :batch,
		:popcorn * :oil amt * :batch
	),
	Personality(
		"Standard Least Squares"
	),
	Run
);

```

### Perform a destructive degradation analysis using the Destructive Degradation() function with multiple models and control methods.

```jsl

// Open data table
dt = Open("$Sample_Data/Reliability/Adhesive Bond.jmp");
// Destructive Degradation Fit
Destructive Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	Censor( :Censor ),
	X( :Degrees ),
	Censor Code( "Right" ),
	Model(
		"Log10", "Sqrt", "Normal",
		"Individual Path with Intercept"
	),
	Control(
		"Log10", "Sqrt", "Normal",
		"Individual Path with Intercept"
	)
);

```

### Fit a proportional hazards model to analyze device lifetimes, including effects of average load, average moisture, average vibration, average solar exposure, and location coordinates, while accounting for censoring.

```jsl

// Open data table
dt = Open("$Sample_Data/Reliability/Device X Lifetimes.jmp");
// Fit Proportional Hazards
Fit Model(
	Y( :Usage Hours ),
	Effects(
		:Avg Load, :Avg Moisture,
		:Avg Vibration,
		:Avg Solar Exposure, :Location X,
		:Location Y
	),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Censor Code( "1" ),
	Run( Likelihood Ratio Tests( 1 ) )
);

```

### Fit a parametric survival model with a LogNormal distribution for two continuous response variables YLow and YHigh, considering age and liquidity as predictors using the Fit Model platform .

```jsl

// Open data table
dt = Open("$Sample_Data/Reliability/Tobit2.jmp");
// Model
Fit Model(
	Y( :YLow, :YHigh ),
	Effects( :age, :liquidity ),
	Personality( "Parametric Survival" ),
	Distribution( LogNormal )
);

```

### Fit a parametric survival model using the LogNormal distribution and include effects for 'age' and 'liquidity'.

```jsl

// Open data table
dt = Open("$Sample_Data/Reliability/Tobit2.jmp");
// Fit Parametric Survival
Fit Model(
	Y( :YLow, :YHigh ),
	Effects( :age, :liquidity ),
	Personality( "Parametric Survival" ),
	Distribution( LogNormal ),
	Run( Likelihood Ratio Tests( 1 ) )
);

```

### Fit a standard least squares regression model with aperture, ranging, and cadence as predictors for yield.

```jsl

// Open data table
dt = Open("$Sample_Data/Ro.jmp");
// Regression Model
Fit Model(
	Y( :Yield ),
	Effects(
		:Aperture, :Ranging, :Cadence
	),
	Personality(
		"Standard Least Squares"
	),
	Run
);

```

### Fit a main effects model with interaction terms using the Fit Model function and specify the dependent variable and effects in the script.

```jsl

// Open data table
dt = Open("$Sample_Data/S4 Temps.jmp");
// Main Effects Model
Fit Model(
	Effects(
		:day & Random, :time of day,
		:thermometer, :outside temp,
		:type of space, :east or west,
		:sector, :wing, :volunteer,
		:outside conditions
	),
	Y( :fahrenheit )
);

```

### Perform a one-way ANOVA analysis on temperature data across different offices .

```jsl

// Open data table
dt = Open("$Sample_Data/S4 Temps.jmp");
// Oneway - Offices
Oneway(
	Y( :fahrenheit ),
	X( :"room/office"n ),
	SendToReport(
		Dispatch( {}, "Oneway Plot",
			FrameBox,
			{
			Marker Selection Mode(
				"Selected Haloed"
			)}
		)
	)
);

```

### Fit nonlinear Poisson regression using the Newton-Raphson method.

```jsl

// Open data table
dt = Open("$Sample_Data/Ship Damage.jmp");
// Nonlinear
Nonlinear(
	X( :model ),
	Loss( :Poisson ),
	Loss is Neg LogLikelihood( 1 ),
	Newton,
	Finish,
	Plot( 0 )
);

```

### Fit a Nominal Logistic regression model with multiple predictors.

```jsl

// Open data table
dt = Open("$Sample_Data/Skull.jmp");
// Fit Model
Fit Model(
	Y( :sex ),
	Effects(
		:length, :basilar, :zygomat,
		:postorb
	),
	Personality( "Nominal Logistic" ),
	Run
);

```

### Fit a full factorial generalized linear model to predict tool wear.

```jsl

// Open data table
dt = Open("$Sample_Data/Tool Wear.jmp");
// Fit Model: Full Factorial Specification
Fit Model(
	Y( :Wear ),
	Effects(
		:Speed, :Angle, :Speed * :Angle,
		:Material, :Speed * :Material,
		:Angle * :Material,
		:Speed * :Angle * :Material
	),
	Personality(
		"Standard Least Squares"
	)
);

```

### Fit a proportional hazards model with specified categorical and continuous covariates, including risk ratios for interpretation.

```jsl

// Open data table
dt = Open("$Sample_Data/VA Lung Cancer.jmp");
// Fit Proportional Hazards
Fit Model(
	Y( :Time ),
	Effects(
		:Cell Type, :Treatment, :Prior,
		:Age, :Diag Time, :KPS
	),
	Personality( "Proportional Hazard" ),
	Censor( :censor ),
	Run( Risk Ratios( 1 ) )
);

```

### Perform one-way analysis of variance to compare the mean heights (in inches) between different sexes from the World Class.jmp dataset.

```jsl

// Open data table
dt = Open("$Sample_Data/World Class.jmp");
// Oneway
Oneway(
	Y( :"height (in.)"n ),
	X( :sex ),
	Means( 1 ),
	Mean Diamonds( 1 )
);

```

### Fit a multiple linear regression model using the Standard Least Squares personality and display plots of actual vs. predicted, residual vs. predicted, and effect leverage.

```jsl

// Open data table
dt = Open("$Sample_Data/World Class.jmp");
// Fit Model
Fit Model(
	Y( :"weight (lb.)"n ),
	Effects(
		:age, :sex, :"height (in.)"n
	),
	Personality(
		"Standard Least Squares"
	),
	Run(
		:"weight (lb.)"n <<
		{Plot Actual by Predicted( 1 ),
		Plot Residual by Predicted( 1 ),
		Plot Effect Leverage( 1 )}
	)
);

```

### Build a boosted tree model

```jsl

// Open data table
dt = Open("$Sample_Data/Bands Data.jmp");
// Boosted Tree of Banding?
Random Reset( 123 );
Boosted Tree(
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
	Method( "Boosted Tree" ),
	Splits per Tree( 3 ),
	Number of Layers( 41 ),
	Learning Rate( 0.1 ),
	Go
);

```

### Generate a boosted tree model with validation

```jsl

// Open data table
dt = Open("$Sample_Data/Body Fat.jmp");
// Boosted Tree
Boosted Tree(
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
	Method( "Boosted Tree" ),
	Splits per Tree( 3 ),
	Number of Layers( 30 ),
	Learning Rate( 0.1 ),
	Go
);

```

### Fit a neural model boosted 100x

```jsl

// Open data table
dt = Open("$Sample_Data/Body Fat.jmp");
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

### Use model comparison to compare several types of models

```jsl

// Open data table
dt = Open("$Sample_Data/Body Fat.jmp");
// Model Comparison
Model Comparison(
	Y(
		:
		"Pred Body Fat - 2nd Order Stepwise"n,
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
		"Pred Body Fat - Boosted Neural"n,
		:
		"Pred Body Fat - Ensemble Model"n
	),
	Where(
		Format( :Validation ) ==
		"Validation"
	)
);

```

### Fit a model with the prediction profiler with desirability functions

```jsl

// Open data table
dt = Open("$Sample_Data/Chips R Us.jmp");
// Fit Model
Fit Model(
	Y(
		:MN ckt wx, :MN ckt yz,
		:SD ckt wx, :SD ckt yz
	),
	Effects(
		:Thickness, :PEB, :PUDDLE, :time,
		:focus
	),
	Personality(
		"Standard Least Squares"
	),
	Run(
		Profiler(
			Confidence Intervals( 1 ),
			Desirability Functions( 1 )
		),
		:MN ckt wx <<
		{Scaled Estimates( 1 ),
		Plot Actual by Predicted( 1 )},
		:MN ckt yz <<
		{Scaled Estimates( 1 ),
		Plot Actual by Predicted( 1 )},
		:SD ckt wx <<
		{Scaled Estimates( 1 ),
		Plot Actual by Predicted( 1 )},
		:SD ckt yz <<
		{Scaled Estimates( 1 ),
		Plot Actual by Predicted( 1 )}
	)
);

```

### Fit a standard least squares linear model to the data in the Borehole Latin Hypercube dataset, with log y as the response variable, and include specified effects and their interactions. Enhance the model with a profiler that includes confidence intervals and term value settings for effective effect screening. Plot the scaled estimates and actual by predicted values for visual analysis.

```jsl

// Open data table
dt = Open("$Sample_Data/Design Experiment/Borehole Latin Hypercube.jmp");
// Fit Model
Fit Model(
	Y( :log y ),
	Effects(
		:log10 Rw, :log10 R, :Tu, :Tl,
		:Hu, :Hl, :L, :Kw, :Hu * :Hu,
		:L * :L, :Hl * :Hl, :Kw * :Kw,
		:Hl * :Hu
	),
	Personality(
		"Standard Least Squares"
	),
	Emphasis( "Effect Screening" ),
	Run(
		Profiler(
			1,
			Confidence Intervals( 1 ),
			Term Value(
				log10 Rw(
					-1.06,
					Max( -0.82 )
				),
				log10 R( 3.35 ),
				Tu( 89335 ),
				Tl( 89.55, Min( 63.1 ) ),
				Hu( 1050 ),
				Hl( 760 ),
				L( 1400 ),
				Kw( 10950 )
			)
		),
		:Y << {Scaled Estimates( 1 ),
		Plot Actual by Predicted( 1 )}
	)
);

```

### Fit a linear regression model using the Least Squares method with multiple effects, including interactions and polynomial terms.

```jsl

// Open data table
dt = Open("$Sample_Data/Design Experiment/Borehole Sphere Packing.jmp");
// Fit Model (Least Squares)
Fit Model(
	Y( :log y ),
	Effects(
		:log10 Rw, :log10 R, :Tu, :Tl,
		:Hu, :Hl, :L, :Kw, :Hu * :Hu,
		:L * :L, :Hl * :Hl, :Kw * :Kw,
		:Hl * :Hu
	),
	Personality(
		"Standard Least Squares"
	),
	Emphasis( "Effect Screening" ),
	Run(
		Profiler(
			1,
			Confidence Intervals( 1 ),
			Term Value(
				log10 Rw(
					-1.06,
					Max( -0.82 )
				),
				log10 R( 3.35 ),
				Tu( 89335 ),
				Tl( 89.55, Min( 63.1 ) ),
				Hu( 1050 ),
				Hl( 760 ),
				L( 1400 ),
				Kw( 10950 )
			)
		),
		:Y << {Scaled Estimates( 1 ),
		Plot Actual by Predicted( 1 )}
	)
);

```

### Fit a standard least squares model to the borehole uniform dataset, focusing on effect screening with various model effects, including interactions.

```jsl

// Open data table
dt = Open("$Sample_Data/Design Experiment/Borehole Uniform.jmp");
// Fit Model
Fit Model(
	Y( :log y ),
	Effects(
		:log10 Rw, :log10 R, :Tu, :Tl,
		:Hu, :Hl, :L, :Kw, :Hu * :Hu,
		:L * :L, :Hl * :Hl, :Kw * :Kw,
		:Hl * :Hu
	),
	Personality(
		"Standard Least Squares"
	),
	Emphasis( "Effect Screening" ),
	Run(
		Profiler(
			1,
			Confidence Intervals( 1 ),
			Term Value(
				log10 Rw(
					-1.06,
					Max( -0.82 )
				),
				log10 R( 3.35 ),
				Tu( 89335 ),
				Tl( 89.55, Min( 63.1 ) ),
				Hu( 1050 ),
				Hl( 760 ),
				L( 1400 ),
				Kw( 10950 )
			)
		),
		:Y << {Scaled Estimates( 1 ),
		Plot Actual by Predicted( 1 )}
	)
);

```

### Perform stepwise regression analysis to identify significant effects on yield in the design experiment data.

```jsl

// Open data table
dt = Open("$Sample_Data/Design Experiment/Extraction Data.jmp");
// Model for Stepwise
Fit Model(
	Y( :Yield ),
	Effects(
		:Methanol & RS, :Ethanol & RS,
		:Propanol & RS, :Butanol & RS,
		:pH & RS, :Time & RS,
		:Methanol * :Methanol,
		:Methanol * :Ethanol,
		:Ethanol * :Ethanol,
		:Methanol * :Propanol,
		:Ethanol * :Propanol,
		:Propanol * :Propanol,
		:Methanol * :Butanol,
		:Ethanol * :Butanol,
		:Propanol * :Butanol,
		:Butanol * :Butanol,
		:Methanol * :pH, :Ethanol * :pH,
		:Propanol * :pH, :Butanol * :pH,
		:pH * :pH, :Methanol * :Time,
		:Ethanol * :Time,
		:Propanol * :Time,
		:Butanol * :Time, :pH * :Time,
		:Time * :Time
	),
	Personality( "Stepwise" )
);

```

### Fit a standard least squares linear model with multiple main effects and interaction terms to analyze the relationship between reactor conditions and percent reacted.

```jsl

// Open data table
dt = Open("$Sample_Data/Design Experiment/Reactor 32 Runs.jmp");
// Model
Fit Model(
	Effects(
		:Feed Rate, :Catalyst, :Stir Rate,
		:Temperature, :Concentration,
		:Feed Rate * :Catalyst,
		:Feed Rate * :Stir Rate,
		:Catalyst * :Stir Rate,
		:Feed Rate * :Temperature,
		:Catalyst * :Temperature,
		:Stir Rate * :Temperature,
		:Feed Rate * :Concentration,
		:Catalyst * :Concentration,
		:Stir Rate * :Concentration,
		:Temperature * :Concentration
	),
	Y( :Percent Reacted ),
	PERSONALITY(
		"Standard Least Squares"
	)
);

```

### Perform equivalence tests for the effects of different drug types on measurements using the Fit Model personality.

```jsl

// Open data table
dt = Open("$Sample_Data/Drug Measurements.jmp");
// Fit Model Equivalence Tests
Fit Model(
	Y( :Measurement ),
	Effects( :Drug Type ),
	Personality(
		"Standard Least Squares"
	),
	Emphasis( "Effect Leverage" ),
	Run(
		:Measurement <<
		{Summary of Fit( 0 ),
		Analysis of Variance( 0 ),
		Parameter Estimates( 0 ),
		Lack of Fit( 0 ),
		Scaled Estimates( 0 ),
		Plot Actual by Predicted( 0 ),
		Plot Regression( 0 ),
		Plot Residual by Predicted( 1 ),
		Plot Studentized Residuals( 0 ),
		Plot Effect Leverage( 0 ),
		Plot Residual by Normal Quantiles(
			0
		), Box Cox Y Transformation( 0 ),
		Effect Tests( 0 ),
		Multiple Comparisons(
			Effect( :Drug Type ),
			Student's t(
				1,
				All Pairwise Comparisons Scatterplot(
					0
				),
				Equivalence Tests( 3 )
			)
		)}
	)
);

```

### Create a comprehensive linear model with multiple interaction terms to predict Rating based on various fishing parameters.

```jsl

// Open data table
dt = Open("$Sample_Data/Fish Patty.jmp");
// Model
Fit Model(
	Effects(
		:Mullet & RS & Mixture,
		:Sheepshead & RS & Mixture,
		:Croaker & RS & Mixture,
		:Mullet * :Sheepshead,
		:Mullet * :Croaker,
		:Mullet * :Temperature,
		:Sheepshead * :Croaker,
		:Sheepshead * :Temperature,
		:Croaker * :Temperature,
		:Mullet * :Sheepshead * :Croaker,
		:Mullet * :Sheepshead *
		:Temperature,
		:Mullet * :Croaker * :Temperature,
		:Sheepshead * :Croaker *
		:Temperature,
		:Mullet * :Sheepshead * :Croaker
		 * :Temperature
	),
	Y( :Rating ),
	No Intercept( 1 )
);

```

### Create a control chart for the sample label Lot with XBar and R charts, including capability analysis and histogram customization.

```jsl

// Open data table
dt = Open("$Sample_Data/Hardware Surface Unit Data.jmp");
// Control Chart
Control Chart(
	Sample Label( :Lot ),
	KSigma( 3 ),
	Chart Col(
		:X,
		XBar,
		R,
		Capability(
			Distribution(
				Continuous Distribution(
					Column( :X ),
					Quantiles( 0 ),
					Summary Statistics(
						0
					),
					Count Axis( 1 ),
					Outlier Box Plot( 0 ),
					Normal Quantile Plot(
						1
					),
					Capability Analysis(
						LSL( 107 ),
						USL( 147 ),
						Target( 127 ),
						Sigma(
							40.1484175601687
						)
					)
				)
			)
		)
	),
	SendToReport(
		Dispatch( {"Distributions", "X"},
			"Distrib Histogram", FrameBox,
			{
			DispatchSeg(
				Hist Seg( 1 ),
				Histogram Color( 42 )
			)}
		)
	)
);

```

### Generate a Profiler report for three response variables (GP Fit, NL Fit, and Difference) with confidence intervals and specific term values using the Nonlinear Examples/CES Production Function.jmp data table.

```jsl

// Open data table
dt = Open("$Sample_Data/Nonlinear Examples/CES Production Function.jmp");
// Profiler
Profiler(
	Y( :GP Fit, :NL Fit, :Difference ),
	Profiler(
		1,
		Confidence Intervals( 1 ),
		Term Value(
			l( 0.5 ),
			k( 0.3966 )
		)
	),
	Expand,
	SendToReport(
		Dispatch( {"Prediction Profiler"},
			"Profiler", FrameBox,
			Frame Size( 174, 87 )
		),
		Dispatch( {"Prediction Profiler"},
			"Profiler", FrameBox( 2 ),
			Frame Size( 174, 87 )
		),
		Dispatch( {"Prediction Profiler"},
			"Profiler", FrameBox( 3 ),
			Frame Size( 174, 87 )
		),
		Dispatch( {"Prediction Profiler"},
			"Profiler", FrameBox( 5 ),
			Frame Size( 174, 87 )
		),
		Dispatch( {"Prediction Profiler"},
			"Profiler", FrameBox( 6 ),
			Frame Size( 174, 87 )
		),
		Dispatch( {"Prediction Profiler"},
			"Profiler", FrameBox( 7 ),
			Frame Size( 174, 87 )
		)
	)
);

```

### Construct a choice model using the Profiles, Responses, and Subjects data tables, and specify the response, profile, and subject effects. Adjust for Firth bias and include likelihood ratio tests.

```jsl

// Open data table
dt = Open("$Sample_Data/Pizza Responses.jmp");
// Choice
Open( "$Sample_Data/Pizza Profiles.jmp" );
Open( "$Sample_Data/Pizza Subjects.jmp" );
Choice(
	Response Data Table(
		Data Table( "Pizza Responses" )
	),
	Profile DataTable( Pizza Profiles ),
	Subject DataTable(
		Data Table( "Pizza Subjects" )
	),
	Response Subject ID( :Subject ),
	Response Profile ID Choices(
		:Choice1, :Choice2
	),
	Profile ID( :ID ),
	Profile Effects(
		:Crust, :Cheese, :Topping
	),
	Subject Subject ID( :Subject ),
	Subject Effects( :Gender ),
	"Firth Bias-Adjusted Estimates"n( 1 ),
	Response Profile ID Chosen( :Choice ),
	Likelihood Ratio Tests( 1 )
);

```

### Fit a standard least squares regression model to the data with specified effects after stepwise selection, emphasizing effect leverage and generating diagnostic plots.

```jsl

// Open data table
dt = Open("$Sample_Data/S4 Temps.jmp");
// Final Model, after Stepwise
Fit Model(
	Y( :fahrenheit ),
	Effects(
		:time of day, :east or west,
		:time of day * :east or west,
		:thermometer, :type of space,
		:sector, :volunteer
	),
	Personality(
		"Standard Least Squares"
	),
	Emphasis( "Effect Leverage" ),
	Run(
		:fahrenheit <<
		{Parameter Estimates( 0 ),
		Plot Actual by Predicted( 1 ),
		Plot Regression( 0 ),
		Plot Residual by Predicted( 1 ),
		Plot Effect Leverage( 1 )}
	)
);

```

### Generate a standard least squares regression model with minimal diagnostic plots and analyze effect tests.

```jsl

// Open data table
dt = Open("$Sample_Data/Singularity.jmp");
// Fit Model Report
Fit Model(
	Y( :Y ),
	Effects( :X1, :A ),
	Personality(
		"Standard Least Squares"
	),
	Emphasis( "Minimal Report" ),
	Run(
		:Y << {Analysis of Variance( 1 ),
		Lack of Fit( 0 ),
		Plot Actual by Predicted( 0 ),
		Plot Residual by Predicted( 0 ),
		Plot Effect Leverage( 0 )}
	),
	SendToReport(
		Dispatch( {"Response Y"},
			"Effect Tests", OutlineBox,
			{Close( 0 )}
		)
	)
);

```

### Fit a quadratic model with multiple interaction effects using the Fit Model function.

```jsl

// Open data table
dt = Open("$Sample_Data/Stochastic Optimization.jmp");
// Quadratic Model
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

### Perform a partition analysis on the Tablet Production data table, focusing on the Lot Acceptance variable as the Y variable and including multiple X variables, and use the Maximize Significance criterion.

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


# Distribution

## Example 1
> **Summary**: Generate distributions of nominal variables

<!-- Keywords: #Distribution, #NominalDistribution, #Column, #Histogram, #MosaicPlot -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/AdverseR.jmp");
// Distribution
Distribution(
	Nominal Distribution(
		Column( :TREATMENT GROUP ),
		Mosaic Plot( 1 ),
		Histogram( 1 )
	),
	Nominal Distribution(
		Column( :ADVERSE REACTION ),
		Mosaic Plot( 1 ),
		Histogram( 1 )
	),
	Nominal Distribution(
		Column( :ADR SEVERITY ),
		Mosaic Plot( 1 ),
		Histogram( 1 )
	)
);
```

## Example 2
> **Summary**: Generate distributions of nominal variables

<!-- Keywords: #Distribution, #NominalDistribution, #Column, #Histogram, #MosaicPlot -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/AdverseR.jmp");
// Distribution
Distribution(
	Nominal Distribution(
		Column( :TREATMENT GROUP ),
		Mosaic Plot( 1 ),
		Histogram( 1 )
	),
	Nominal Distribution(
		Column( :ADVERSE REACTION ),
		Mosaic Plot( 1 ),
		Histogram( 1 )
	),
	Nominal Distribution(
		Column( :ADR SEVERITY ),
		Mosaic Plot( 1 ),
		Histogram( 1 )
	)
);
```

## Example 3
> **Summary**: Perform distribution analysis

<!-- Keywords: #Distribution, #Quantiles -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/BabySleep.jmp");
// side by side
Distribution(
	y( Awake, Asleep ),
	quantiles( 0 )
);
```

## Example 4
> **Summary**: Perform distribution analysis

<!-- Keywords: #Distribution, #TestMean, #Mean, #Quantiles -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/BabySleep.jmp");
// univ. test Dif
Distribution(
	y( Dif ),
	quantiles( 0 ),
	test mean( 0 )
);
```

## Example 5
> **Summary**: Perform distribution analysis on nominal data

<!-- Keywords: #Distribution, #NominalDistribution, #Column -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Bands Data.jmp");
// Distribution (Band Type)
Distribution(
	Nominal Distribution(
		Column( :Banding? )
	)
);
```

## Example 6
> **Summary**: Perform distribution analysis on columns with multiple response data

<!-- Keywords: #Distribution -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Big Class Families.jmp");
// Distribution
Distribution(
	Y(
		:sibling ages, :sports,
		:countries visited, :family cars
	)
);
```

## Example 7
> **Summary**: Generate distribution analysis with a continuous and nominal data columns

<!-- Keywords: #ContinuousDistribution, #Distribution, #NominalDistribution, #Column -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Big Class.jmp");
// Distribution
Distribution(
	Continuous Distribution(
		Column( :weight )
	),
	Nominal Distribution(
		Column( :age )
	)
);
```

## Example 8
> **Summary**: Perfrom distribution analysis with continuous and nominal data

<!-- Keywords: #ContinuousDistribution, #Distribution, #NominalDistribution, #Column -->

**Code:**
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

## Example 9
> **Summary**: Generate distribution analysis

<!-- Keywords: #Distribution, #Quantiles -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Blood Pressure by Time.jmp");
// side by side
Distribution(
	y( BP AM, BP PM ),
	quantiles( 0 )
);
```

## Example 10
> **Summary**: Perform distribution analysis with a t test for the mean

<!-- Keywords: #Distribution, #TestMean, #Mean, #Quantiles -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Blood Pressure by Time.jmp");
// univ. test Dif
Distribution(
	y( Dif ),
	quantiles( 0 ),
	test mean( 0 )
);
```

## Example 11
> **Summary**: Generate distribution analysis

<!-- Keywords: #ContinuousDistribution, #Distribution, #Column -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Car Poll.jmp");
// Distribution
Distribution(
	Continuous Distribution(
		Column( :age )
	)
);
```

## Example 12
> **Summary**: Perform distribution analysis

<!-- Keywords: #ContinuousDistribution, #Distribution, #BackgroundColor, #Column, #NormalQuantilePlot -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Cars 1993.jmp");
// Distribution
Distribution(
	Continuous Distribution(
		Column( :"City Mileage (MPG)"n ),
		Normal Quantile Plot( 1 ),
		Stem and Leaf( 1 )
	),
	Continuous Distribution(
		Column(
			:"Highway Mileage (MPG)"n
		),
		Normal Quantile Plot( 1 ),
		Stem and Leaf( 1 )
	),
	SendToReport(
		Dispatch( {"City Mileage (MPG)"},
			"Distrib Histogram", FrameBox,
			Background Color( 2 )
		),
		Dispatch(
			{"Highway Mileage (MPG)"},
			"Distrib Histogram", FrameBox,
			Background Color( 2 )
		)
	)
);
```

## Example 13
> **Summary**: Generate life distribution analysis

<!-- Keywords: #Distribution, #LifeDistribution, #Close, #ConfidenceIntervalMethod, #FrameSize -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Censor Labels.jmp");
// Life Distribution
Life Distribution(
	Y( :Start Time, :End Time ),
	Freq( :Count ),
	Confidence Interval Method( Wald ),
	<<Set Scale( Nonparametric ),
	Interval Type( Simultaneous ),
	<<Set Scriptables( {} ),
	SendToReport(
		Dispatch( {}, "Event Plot",
			OutlineBox,
			{Close( 0 )}
		),
		Dispatch( {"Event Plot"},
			"Life Distribution", FrameBox,
			{Frame Size( 401, 285 )}
		),
		Dispatch( {},
			"Compare Distributions",
			OutlineBox,
			{Close( 1 )}
		)
	)
);
```

## Example 14
> **Summary**: Generate distribution analysis with normal quantile plot

<!-- Keywords: #ContinuousDistribution, #Distribution, #NominalDistribution, #AutomaticRecalc, #Close -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Circuit Board Production.jmp");
// Distribution
Distribution(
	Automatic Recalc( 1 ),
	Nominal Distribution(
		Column( :Day of Week )
	),
	Continuous Distribution(
		Column( :Time ),
		Normal Quantile Plot( 1 )
	),
	SendToReport(
		Dispatch( {}, "Distrib Nom Hist",
			FrameBox,
			{DispatchSeg( Hist Seg( 1 ) )
			}
		),
		Dispatch( {}, "Distrib Histogram",
			FrameBox,
			{DispatchSeg( Hist Seg( 1 ) )
			}
		),
		Dispatch( {}, "5", ScaleBox,
			{Scale( "Linear" ),
			Min( 0.0533333333333334 ),
			Max( 0.946666666666666 ),
			Inc( 0.08 ), Minor Ticks( 0 ),
			Show Major Grid( 1 ),
			Rotated Labels(
				"Horizontal"
			)}
		),
		Dispatch( {}, "Quantiles",
			OutlineBox,
			{Close( 1 )}
		)
	)
);
```

## Example 15
> **Summary**: Generate distribution analysis

<!-- Keywords: #ContinuousDistribution, #Distribution, #NominalDistribution, #Column -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Cleansing.jmp");
// Distribution
Distribution(
	Continuous Distribution(
		Column( :Coal particles )
	),
	Continuous Distribution(
		Column( :pH )
	),
	Nominal Distribution(
		Column( :Polymer )
	)
);
```

## Example 16
> **Summary**: Generate distribution analysis

<!-- Keywords: #Distribution, #NominalDistribution, #Column -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Coffee Shop Purchases.jmp");
// Distribution
Distribution(
	Nominal Distribution(
		Column( :Customer )
	),
	Nominal Distribution(
		Column( :Beverage )
	)
);
```

## Example 17
> **Summary**: Generate distribution analysis with fitted normal distribution

<!-- Keywords: #ContinuousDistribution, #Distribution, #FitDistribution, #Column, #HorizontalLayout -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Cola Heart Rate.jmp");
// Distribution 2
Distribution(
	Stack( 1 ),
	Continuous Distribution(
		Column( :Heart Rate ),
		Horizontal Layout( 1 ),
		Vertical( 0 ),
		Fit Distribution( Normal ),
		Fit Distribution( Smooth Curve )
	),
	By( :"Time (Raw)"n )
);
```

## Example 18
> **Summary**: Generate a generalized linear model with a poisson distribution and log link function

<!-- Keywords: #Distribution, #FitModel, #CenterPolynomials, #Effects, #GLMDistribution -->

**Code:**
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

## Example 19
> **Summary**: Fit a generalized linear model with a binomial distribution and logit link function for the simulated Y variable.

<!-- Keywords: #Distribution, #FitModel, #Effects, #GLMDistribution, #LinkFunction -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Binomial Experiment.jmp");
// GLM for Y Simulated
Fit Model(
	Y( :Y Simulated ),
	Effects(
		:X1, :X2, :X3, :X4, :X5, :X6
	),
	Personality(
		"Generalized Linear Model"
	),
	GLM Distribution( "Binomial" ),
	Link Function( "Logit" ),
	Run Model
);
```

## Example 20
> **Summary**: Analyze distributions for Miles, Weight, and Strike Point using the Distribution platform, focusing on continuous and nominal variables.

<!-- Keywords: #ContinuousDistribution, #Distribution, #NominalDistribution, #Column -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Runners Covariates.jmp");
// Distribution
Distribution(
	Continuous Distribution(
		Column( :Miles )
	),
	Continuous Distribution(
		Column( :Weight )
	),
	Nominal Distribution(
		Column( :Strike Point )
	),
	Histograms Only
);
```

## Example 21
> **Summary**: Analyze the distribution of Quack's Weight Change and Quick's Weight Change columns in the Diet.jmp data table, performing a test of mean for each column.

<!-- Keywords: #ContinuousDistribution, #Distribution, #TestMean, #Column, #Mean -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Diet.jmp");
// Distribution
Distribution(
	Continuous Distribution(
		Column( :Quack's Weight Change ),
		Test Mean( 0 )
	),
	Continuous Distribution(
		Column( :Quick's Weight Change ),
		Test Mean( 0 )
	)
);
```

## Example 22
> **Summary**: Analyze the distribution of continuous data in the Drug Toxicity dataset using the Distribution platform.

<!-- Keywords: #ContinuousDistribution, #Distribution, #Column -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Drug Toxicity.jmp");
// Distribution
Distribution(
	Continuous Distribution(
		Column( :Toxicity )
	)
);
```

## Example 23
> **Summary**: Analyze the distribution of categorical variables using the Distribution platform.

<!-- Keywords: #Distribution, #NominalDistribution, #Column -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Employee Taste.jmp");
// Distribution
Distribution(
	Nominal Distribution( Column( :TV ) ),
	Nominal Distribution(
		Column( :Film )
	),
	Nominal Distribution(
		Column( :Art )
	),
	Nominal Distribution(
		Column( :Restaurant )
	)
);
```

## Example 24
> **Summary**: Analyze nutritional data by generating continuous distribution summaries for calories, fat, carbohydrates, and protein using the Distribution function.

<!-- Keywords: #ContinuousDistribution, #Distribution, #Column -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Food Journal.jmp");
// Distribution: Nutritional Data
Distribution(
	Continuous Distribution(
		Column( :Calories )
	),
	Continuous Distribution(
		Column( :Fat )
	),
	Continuous Distribution(
		Column( :Carbohydrates )
	),
	Continuous Distribution(
		Column( :Protein )
	)
);
```

## Example 25
> **Summary**: Analyze the distribution of surface quality and color using the Distribution function .

<!-- Keywords: #Distribution, #NominalDistribution, #Column, #CountAxis, #Report -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Hardware Surface Unit Data.jmp");
// Distribution of surface quality and color
Distribution(
	Nominal Distribution(
		Column( :surface quality ),
		Count Axis( 1 )
	),
	Nominal Distribution(
		Column( :color ),
		Count Axis( 1 )
	),
	SendToReport(
		Dispatch( {}, "Distributions",
			OutlineBox,
			{
			Set Title(
				"Surface Quality and Color"
			)}
		)
	)
);
```

## Example 26
> **Summary**: Generate a distribution analysis of profitability by lead studio and genre, visualized with histograms and ordered by count ascending.

<!-- Keywords: #Distribution, #NominalDistribution, #Column, #FrameSize, #Height -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Hollywood Movies.jmp");
// Distribution: Profitability by Lead Studio and Genre
Distribution(
	Weight( :Profitability ),
	Nominal Distribution(
		Column( :Lead Studio Name ),
		Order By( "Count Ascending" )
	),
	Nominal Distribution(
		Column( :Genre ),
		Order By( "Count Ascending" )
	),
	Histograms Only,
	SendToReport(
		Dispatch( {}, "", NomAxisBox,
			{Set Width( 155 ),
			Set Height( 517 )}
		),
		Dispatch( {}, "Distrib Nom Hist",
			FrameBox,
			{Frame Size( 82, 527 )}
		),
		Dispatch( {}, "Distributions",
			OutlineBox,
			{
			Set Title(
				"Profitability by Lead Studio Name and Genre"
			)}
		)
	)
);
```

## Example 27
> **Summary**: Perform univariate distribution analysis on nominal and continuous variables.

<!-- Keywords: #ContinuousDistribution, #Distribution, #NominalDistribution, #Column -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Htwt12.jmp");
// Distribution
Distribution(
	Nominal Distribution(
		Column( :Gender )
	),
	Continuous Distribution(
		Column( :Height )
	)
);
```

## Example 28
> **Summary**: Fit Johnson Su distribution to continuous data.

<!-- Keywords: #ContinuousDistribution, #Distribution, #FitDistribution, #Column -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/JohnsonSuExample.jmp");
// Distribution
Distribution(
	Continuous Distribution(
		Column( :x ),
		Fit Distribution( Johnson Su )
	)
);
```

## Example 29
> **Summary**: Create a LogNormal loss function template for survival analysis using the LogNormal distribution with parameters Mu and sigma.

<!-- Keywords: #Distribution, #Column, #Formula, #Log, #NewColumn -->

**Code:**
```jsl
// LogNormal.jsl
///////////////////////////////////////////////////////////////////////////////////////////////////////////
// JSL to create a loss function template of LogNormal                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////

dt= new table ("LogNormal");
dt<<New Column("Time", Numeric,continuous);   
dt<<New Column("Censor", Numeric,continuous);
dt<<New Column("LogNormal", Numeric,continuous);

column( "LogNormal") << formula( Parameter({Mu=2.2222521390893, sigma=0.306392085240603}, IfMZ( :Censor!=0, -Log(1-Normal Distribution((Log( :Time, 10)-Mu)/sigma)), (Log( :Time*sigma)+0.5*Log(2*Pi())+0.5*((Log( :Time, 10)-Mu)/sigma)^2)-Log(0.4343)))  );
```

## Example 30
> **Summary**: Create a loss function template for a normal distribution using the Normal Distribution formula.

<!-- Keywords: #Distribution, #Column, #Formula, #Log, #NewColumn -->

**Code:**
```jsl
// Normal.jsl
///////////////////////////////////////////////////////////////////////////////////////////////////////////
// JSL to create a loss function template of Normal                        //
///////////////////////////////////////////////////////////////////////////////////////////////////////////

dt= new table ("Normal");
dt<<New Column("Time", Numeric,continuous);   
dt<<New Column("Censor", Numeric,continuous);
dt<<New Column("Normal", Numeric,continuous);

column( "Normal") << formula(  Parameter({Mu=2.22225216957577, sigma=0.306392163933592}, IfMZ( :Censor!=0, -Log(1-Normal Distribution(( :Time-Mu)/sigma)), Log(sigma)+(0.5*Log(2*Pi())+0.5*(( :Time-Mu)/sigma)^2))) );
```

## Example 31
> **Summary**: Create a loss function template for a Tobit model with a single predictor and standard error parameter.

<!-- Keywords: #Distribution, #Column, #Formula, #Log, #NewColumn -->

**Code:**
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

## Example 32
> **Summary**: Calculate distribution statistics for nominal variables with frequencies.

<!-- Keywords: #Distribution, #NominalDistribution, #Column, #Freq -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Mb-dist.jmp");
// Distribution
Distribution(
	Freq( :Count ),
	Nominal Distribution(
		Column( :TYPE )
	)
);
```

## Example 33
> **Summary**: Perform statistical distribution analysis with a virtual join on Age and Rating columns using the Distribution platform.

<!-- Keywords: #ContinuousDistribution, #Distribution, #NominalDistribution, #Column, #OutlierBoxPlot -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Movie Rentals.jmp");
// Distribution: Virtual Join - Age and Rating
Distribution(
	Continuous Distribution(
		Column(
			Referenced Column(
				"Age[Customer ID]",
				Reference(
					Column(
						:Customer ID
					),
					Reference(
						Column( :Age )
					)
				)
			)
		),
		Outlier Box Plot( 0 )
	),
	Nominal Distribution(
		Column(
			Referenced Column(
				"Rating[Item Number]",
				Reference(
					Column(
						:Item Number
					),
					Reference(
						Column( :Rating )
					)
				)
			)
		)
	)
);
```

## Example 34
> **Summary**: Analyze the distributions of categorical and continuous variables in the Nicardipine dataset using the Distribution() function .

<!-- Keywords: #ContinuousDistribution, #Distribution, #NominalDistribution, #Column, #OrderBy -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Nicardipine.jmp");
// Distributions
Distribution(
	Nominal Distribution(
		Column(
			:Body System or Organ Class
		),
		Order By( "Count Ascending" )
	),
	Nominal Distribution(
		Column( :"Severity/Intensity"n )
	),
	Nominal Distribution(
		Column( :Serious Event )
	),
	Continuous Distribution(
		Column( :Age )
	),
	Nominal Distribution(
		Column( :Sex )
	),
	Nominal Distribution(
		Column( :Race )
	),
	Nominal Distribution(
		Column( :Death Description ),
		Order By( "Count Ascending" )
	)
);
```

## Example 35
> **Summary**: Fit a generalized linear model using the Normal distribution and Log link function.

<!-- Keywords: #Distribution, #FitModel, #Effects, #GLMDistribution, #LinkFunction -->

**Code:**
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

## Example 36
> **Summary**: Analyze and visualize the distribution of multiple continuous columns related to olive oil components and the subregion category in the Distribution platform.

<!-- Keywords: #ContinuousDistribution, #Distribution, #NominalDistribution, #Column, #MosaicPlot -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Olive Oil.jmp");
// Distribution
Distribution(
	Uniform Scaling( 1 ),
	Continuous Distribution(
		Column( :palmitic )
	),
	Continuous Distribution(
		Column( :palmitoleic )
	),
	Continuous Distribution(
		Column( :stearic )
	),
	Continuous Distribution(
		Column( :oleic )
	),
	Continuous Distribution(
		Column( :linoleic )
	),
	Continuous Distribution(
		Column( :linolenic )
	),
	Continuous Distribution(
		Column( :arachidic )
	),
	Continuous Distribution(
		Column( :eicosenoic )
	),
	Nominal Distribution(
		Column( :Subregion ),
		Show Percents( 1 ),
		Mosaic Plot( 1 )
	)
);
```

## Example 37
> **Summary**: Perform distribution analysis on specified columns in the Presidential Elections data table with uniform scaling and custom axis settings for continuous distributions.

<!-- Keywords: #ContinuousDistribution, #Distribution, #Column, #Format, #Max -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Presidential Elections.jmp");
// Distribution
Distribution(
	Uniform Scaling( 1 ),
	Continuous Distribution(
		Column( :"1980"n ),
		Axis Settings(
			Scale( Linear ),
			Format( Best ),
			Min( 20 ),
			Max( 65 ),
			Inc( 5 )
		)
	),
	Continuous Distribution(
		Column( :"1984"n ),
		Axis Settings(
			Scale( Linear ),
			Format( Best ),
			Min( 20 ),
			Max( 65 ),
			Inc( 5 )
		)
	),
	Continuous Distribution(
		Column( :"1996"n ),
		Axis Settings(
			Scale( Linear ),
			Format( Best ),
			Min( 20 ),
			Max( 65 ),
			Inc( 5 )
		)
	)
);
```

## Example 38
> **Summary**: Generate distribution analysis for continuous variables in the specified data table using the Distribution platform.

<!-- Keywords: #ContinuousDistribution, #Distribution, #Column -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Primes.jmp");
// Distribution
Distribution(
	Continuous Distribution(
		Column( :Prime )
	),
	Continuous Distribution(
		Column( :Delta )
	),
	Continuous Distribution(
		Column( :DeltaDelta )
	)
);
```

## Example 39
> **Summary**: Generate a normal quantile plot for a continuous distribution analysis of the Hours between Burnouts column in the Fan Burnout data table using the Distribution platform .

<!-- Keywords: #ContinuousDistribution, #Distribution, #Column, #NormalQuantilePlot, #Plot -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Fan Burnout.jmp");
// Distribution
Distribution(
	Continuous Distribution(
		Column( :Hours between Burnouts ),
		Normal Quantile Plot( 1 )
	)
);
```

## Example 40
> **Summary**: Analyze data from an appliance using a Weibull distribution to perform a life distribution analysis.

<!-- Keywords: #Distribution, #LifeDistribution, #AllowfailuremodetouseBayesianmodels, #AllowfailuremodetouseDSdistributions, #Allowfailuremodetousefixedparametermodels -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Reliability/Appliance.jmp");
// Life Distribution
Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause(
		Weibull
	),
	Comparison Criterion( AICc ),
	Allow failure mode to use ZI distributions(
		0
	),
	Allow failure mode to use TH distributions(
		0
	),
	Allow failure mode to use DS distributions(
		0
	),
	Allow failure mode to use fixed parameter models(
		0
	),
	Allow failure mode to use Bayesian models(
		0
	)
);
```

## Example 41
> **Summary**: Fit a life distribution model using the Lognormal distribution and perform nested model tests for location and scale effects, with time cycles as the response variable, group as the predictor, and censoring indicated by a censor code of 1.

<!-- Keywords: #Distribution, #FitLifebyX, #Censor, #CensorCode, #Code -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Reliability/Blenders.jmp");
// Fit Life by X
Fit Life by X(
	Distribution( Lognormal ),
	Nested Model Tests(
		Location and Scale
	),
	Y( :Time Cycles ),
	X( :Group ),
	Censor( :Censor ),
	Censor Code( 1 )
);
```

## Example 42
> **Summary**: Fit a Parametric Survival Model using the LogNormal distribution with the Personality set to Parametric Survival and include the effect of variable x.

<!-- Keywords: #Distribution, #FitModel, #Censor, #CensorCode, #Code -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Reliability/Devalt.jmp");
// Parametric Survival Model
Fit Model(
	Weight( :Censor ),
	Freq( :Weight ),
	Y( :Hours ),
	Censor( :Censor ),
	Censor Code( 1 ),
	Effects( :x ),
	Personality( "Parametric Survival" ),
	Distribution( LogNormal )
);
```

## Example 43
> **Summary**: Fit a Weibull-distributed parametric survival model with the Load effect.

<!-- Keywords: #Distribution, #FitModel, #Effects, #Model, #Personality -->

**Code:**
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

## Example 44
> **Summary**: Fit Parametric Survival model using LogNormal distribution and perform Likelihood Ratio Tests and Estimate Time Quantile analysis.

<!-- Keywords: #Distribution, #FitModel, #alpha, #Effects, #EstimateTimeQuantile -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Reliability/Comptime.jmp");
// Fit Parametric Survival
obj =
Fit Model(
	Y( :ExecTime ),
	Effects( :Load ),
	Personality( "Parametric Survival" ),
	Distribution( LogNormal ),
	Run
);
obj << Likelihood Ratio Tests( 1 );
obj <<
Estimate Time Quantile(
	:Load = 5,
	[0.1],
	Alpha( 0.05 )
);
```

## Example 45
> **Summary**: Fit a parametric survival model using the LogNormal distribution in the Fit Model platform, incorporating frequency weights and a censoring variable.

<!-- Keywords: #Distribution, #FitModel, #alpha, #Censor, #CensorCode -->

**Code:**
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

## Example 46
> **Summary**: Analyze lifetime data using an exponential distribution with a nonparametric scale in the Life Distribution platform.

<!-- Keywords: #Distribution, #LifeDistribution, #Censor, #Scale, #SetScale -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Reliability/Fan.jmp");
// Life Distribution - Exponential
Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	<<Fit Exponential,
	<<Set Scale( Nonparametric )
);
```

## Example 47
> **Summary**: Fit a Weibull distribution in the Life Distribution platform.

<!-- Keywords: #Distribution, #LifeDistribution, #Censor, #Scale, #SetScale -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Reliability/Fan.jmp");
// Life Distribution - Weibull
Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	<<Fit Weibull,
	<<Set Scale( Weibull )
);
```

## Example 48
> **Summary**: Fit a parametric survival model using the LogNormal distribution in the Fit Model platform.

<!-- Keywords: #Distribution, #FitModel, #Effects, #Freq, #Model -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Reliability/ICdevice02.jmp");
// Fit Parametric Survival
Fit Model(
	Freq( :Count ),
	Y( :HoursL, :HoursU ),
	Effects( :x ),
	Personality( "Parametric Survival" ),
	Distribution( LogNormal ),
	Run
);
```

## Example 49
> **Summary**: Did you successfully conduct a life distribution analysis using the Weibull distribution in the specified data table?

<!-- Keywords: #Distribution, #LifeDistribution, #Freq, #Scale, #SetScale -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Reliability/Microprocessor Data.jmp");
// Life Distribution - Weibull
Life Distribution(
	Y( :start time, :end time ),
	Freq( :count ),
	<<Fit Weibull,
	<<Set Scale( Nonparametric )
);
```

## Example 50
> **Summary**: Perform a mixture distribution analysis on variable Y1 using a Weibull and Lognormal distribution model with separable clusters, and generate simultaneous confidence intervals and profilers.

<!-- Keywords: #Distribution, #LifeDistribution, #ConfidenceIntervalMethod, #FitMixture, #IntervalType -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Reliability/Mixture Demo.jmp");
// Mixture - Y1
Life Distribution(
	Y( :Y1 ),
	Confidence Interval Method(
		Likelihood
	),
	<<Set Scale( Nonparametric ),
	Interval Type( Simultaneous ),
	Show Event Plot Frequency Label( 0 ),
	<<Set Scriptables( {} ),
	Fit Mixture(
		Mix(
			Weibull( 2 ),
			Separable Clusters,
			Show Profilers( 1 )
		),
		Mix(
			Lognormal( 1 ),
			Weibull( 1 ),
			Separable Clusters,
			Show Profilers( 1 )
		)
	)
);
```

## Example 51
> **Summary**: Fit a competing risk mixture model with a Weibull distribution to the second dependent variable using the Life Distribution platform.

<!-- Keywords: #Distribution, #LifeDistribution, #ConfidenceIntervalMethod, #FitCompetingRiskMixture, #IntervalType -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Reliability/Mixture Demo.jmp");
// Competing Risk Mixture - Y2
Life Distribution(
	Y( :Y2 ),
	Confidence Interval Method(
		Likelihood
	),
	<<Set Scale( Nonparametric ),
	Interval Type( Simultaneous ),
	Show Event Plot Frequency Label( 0 ),
	<<Set Scriptables( {} ),
	Fit Competing Risk Mixture(
		Mix(
			Weibull( 2 ),
			Single Cluster,
			Show Profilers( 0 )
		)
	)
);
```

## Example 52
> **Summary**: Fit a parametric survival model with a LogNormal distribution for two continuous response variables YLow and YHigh, considering age and liquidity as predictors using the Fit Model platform .

<!-- Keywords: #Distribution, #FitModel, #Effects, #Model, #Personality -->

**Code:**
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

## Example 53
> **Summary**: Fit a parametric survival model using the LogNormal distribution and include effects for 'age' and 'liquidity'.

<!-- Keywords: #Distribution, #FitModel, #Effects, #LikelihoodRatioTests, #Model -->

**Code:**
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

## Example 54
> **Summary**: Analyze and model the life distribution of a sample dataset using the Weibull distribution with a fixed location parameter and custom scale parameter estimation in the Life Distribution platform.

<!-- Keywords: #Distribution, #LifeDistribution, #Censor, #CensorCode, #Code -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Reliability/Weibayes No Failures.jmp");
// Life Distribution
Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Censor Code( 1 ),
	Freq( :Freq ),
	Confidence Interval Method(
		Likelihood
	),
	Interval Type( Simultaneous ),
	Show Statistics( 0 ),
	<<
	Set Scriptables(
		{
		Fix Parameter(
			{location, 1, 0},
			{scale, 1.5, 1},
			Set Scriptables(
				Custom Estimation(
					Weibull, 0
				)
			)
		)}
	)
);
```

## Example 55
> **Summary**: Analyze and visualize the distribution of tip percentages by server in the Restaurant Tips dataset using the Distribution platform.

<!-- Keywords: #ContinuousDistribution, #Distribution, #Column, #HorizontalLayout, #Layout -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Restaurant Tips.jmp");
// Distribution: Tip % by Server
Distribution(
	Stack( 1 ),
	Continuous Distribution(
		Column( :Tip Percentage ),
		Horizontal Layout( 1 ),
		Vertical( 0 )
	),
	By( :Server )
);
```

## Example 56
> **Summary**: Fit a generalized linear model with a Poisson distribution and log link function to the Ship Damage data table.

<!-- Keywords: #Distribution, #FitModel, #Effects, #GLMDistribution, #LinkFunction -->

**Code:**
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

## Example 57
> **Summary**: Generate a distribution analysis for multiple chemical solubility variables.

<!-- Keywords: #Distribution -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Solubility.jmp");
// Distribution
Distribution(
	Y(
		:Ether, :"1-Octanol"n,
		:Carbon Tetrachloride, :Benzene,
		:Hexane, :Chloroform
	)
);
```

## Example 58
> **Summary**: Analyze the distribution of age and sex using mosaic plots and histograms.

<!-- Keywords: #Distribution, #NominalDistribution, #Column, #Histogram, #MosaicPlot -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Students.jmp");
// Distribution: Age and Sex
Distribution(
	Nominal Distribution(
		Column( :age ),
		Mosaic Plot( 1 ),
		Histogram( 1 )
	),
	Nominal Distribution(
		Column( :sex ),
		Mosaic Plot( 1 ),
		Histogram( 1 )
	)
);
```

## Example 59
> **Summary**: Analyze the distribution of height and weight using the Distribution platform .

<!-- Keywords: #ContinuousDistribution, #Distribution, #Column, #Max, #Min -->

**Code:**
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

## Example 60
> **Summary**: Generate a distribution analysis report, including nominal distribution analysis for the 'Year' column with horizontal layout, and by group for the 'Region' column.

<!-- Keywords: #Distribution, #NominalDistribution, #Column, #HorizontalLayout, #Layout -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/US Regional Population.jmp");
// Distribution
Distribution(
	Stack( 1 ),
	Weight( :Population ),
	Nominal Distribution(
		Column( :Year ),
		Horizontal Layout( 1 ),
		Vertical( 0 )
	),
	By( :Region )
);
```

## Example 61
> **Summary**: Fit a parametric survival model using the Weibull distribution.

<!-- Keywords: #Distribution, #FitModel, #Censor, #Effects, #LikelihoodRatioTests -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/VA Lung Cancer.jmp");
// Fit Parametric Survival
Fit Model(
	Y( :Time ),
	Effects(
		:Cell Type, :Treatment, :Prior,
		:Age, :Diag Time, :KPS
	),
	Censor( :censor ),
	Personality( "Parametric Survival" ),
	Distribution( Weibull ),
	Run( Likelihood Ratio Tests( 1 ) )
);
```

## Example 62
> **Summary**: Analyze continuous data by performing a distribution analysis on the weight column in the Weight Measurements data table.

<!-- Keywords: #ContinuousDistribution, #Distribution, #Column -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Weight Measurements.jmp");
// Distribution
Distribution(
	Continuous Distribution(
		Column( :weight )
	)
);
```

## Example 63
> **Summary**: Analyze continuous and nominal distributions for weight and age using Distribution platform.

<!-- Keywords: #ContinuousDistribution, #Distribution, #NominalDistribution, #Column -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/World Class.jmp");
// Distribution
Distribution(
	Continuous Distribution(
		Column( :"weight (lb.)"n )
	),
	Nominal Distribution(
		Column( :age )
	)
);
```

## Example 64
> **Summary**: Analyze the distribution of GDP per Capita for multiple countries using continuous and histogram distribution plots.

<!-- Keywords: #ContinuousDistribution, #Distribution, #Column, #FrameSize, #LabelOffset -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/World Demographics.jmp");
// Distribution: GDP per Capita
Distribution(
	Continuous Distribution(
		Column( :GDP per Capita ),
		Vertical( 0 )
	),
	SendToReport(
		Dispatch( {"GDP per Capita"},
			"Distrib Outlier Box",
			FrameBox,
			{Frame Size( 208, 76 ),
			Marker Size( 2 ),
			DispatchSeg(
				Marker Seg( 1 ),
				label offset(
					{5, -68, -27},
					{6, -29, 38},
					{7, 17, 29},
					{8, -72, -26}
				)
			)}
		),
		Dispatch( {"GDP per Capita"},
			"Distrib Histogram", FrameBox,
			{Frame Size( 208, 82 )}
		)
	)
);
```


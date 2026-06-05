# Fit Model

## Example 1
> **Summary**: Fit a standard least squares model

<!-- Keywords: #FitModel, #Effects, #Model, #Personality, #PlotActualbyPredicted -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Analgesics.jmp");
// Fit Model
Fit Model(
	Y( :pain ),
	Effects(
		:gender, :drug, :gender * :drug
	),
	Personality(
		"Standard Least Squares"
	),
	Run(
		:pain <<
		{Plot Actual by Predicted( 1 ),
		Plot Residual by Predicted( 1 ),
		Plot Effect Leverage( 1 )}
	)
);
```

## Example 2
> **Summary**: Build a repeated measures model

<!-- Keywords: #FitModel, #Effects, #Model, #Personality -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Animals.jmp");
// Repeated Measures Model
Fit Model(
	Y( :miles ),
	Effects(
		:species,
		:subject[:species] & Random,
		:season, :species * :season
	),
	Personality(
		"Standard Least Squares"
	),
	Run
);
```

## Example 3
> **Summary**: Fit a nominal logistic model

<!-- Keywords: #Class, #FitModel, #Profiler, #Effects, #LikelihoodRatioTests -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Auto Raw Data.jmp");
// Fit Model (Claim Y/N)
Fit Model(
	Y( :"Claim(Y/N)"n ),
	Effects(
		:AgeClass, :"City(Y/N)"n,
		:Rating Class
	),
	Personality( "Nominal Logistic" ),
	Run(
		Likelihood Ratio Tests( 1 ),
		Wald Tests( 0 ),
		Profiler(
			1,
			Term Value(
				AgeClass( "Elder" ),
				"City(Y/N)"n( "N" ),
				Rating Class( "A" )
			)
		)
	)
);
```

## Example 4
> **Summary**: Fit a standard least squares model with a prediction profiler

<!-- Keywords: #Class, #FitModel, #Profiler, #ConfidenceIntervals, #Effects -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Auto Raw Data.jmp");
// Fit Model (Claim USD)
Fit Model(
	Y( :Claim USD ),
	Effects(
		:AgeClass, :"City(Y/N)"n,
		:Rating Class
	),
	Personality(
		"Standard Least Squares"
	),
	Emphasis( "Minimal Report" ),
	Run(
		Profiler(
			1,
			Confidence Intervals( 1 ),
			Term Value(
				AgeClass( "Elder" ),
				"City(Y/N)"n( "N" ),
				Rating Class( "A" )
			)
		),
		:Claim USD <<
		{Plot Actual by Predicted( 0 ),
		Plot Regression( 0 ),
		Plot Residual by Predicted( 0 ),
		Plot Effect Leverage( 0 )},
		SendToReport(
			Dispatch(
				{"Response Claim USD",
				"Prediction Profiler"},
				"10000", ScaleBox,
				{
				Format(
					"Currency",
					"USD",
					15,
					0
				), Max( 8000 ),
				Inc( 1000 )}
			)
		)
	)
);
```

## Example 5
> **Summary**: Fit a standard least squares model using frequency

<!-- Keywords: #FitModel, #Effects, #Emphasis, #Freq, #Model -->

**Code:**
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

## Example 6
> **Summary**: Generate a standard least squares model with a prediction profiler, a normal plot and a pareto plot of estimates

<!-- Keywords: #FitModel, #ParetoPlot, #Profiler, #Effects, #Model -->

**Code:**
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

## Example 7
> **Summary**: Change column modeling type from ordinal to nominal and build a standard least squares model

<!-- Keywords: #Fit, #FitModel, #Column, #EffectSummary, #Effects -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Big Class Families.jmp");
// Fit weight to age and height
Column( "age" ) <<
Set Modeling Type( "Nominal" );
Fit Model(
	Y( :weight ),
	Effects( :age, :height ),
	Personality(
		"Standard Least Squares"
	),
	Emphasis( "Minimal Report" ),
	Run(
		:weight << {Lack of Fit( 0 ),
		Plot Actual by Predicted( 0 ),
		Plot Residual by Predicted( 0 ),
		Plot Effect Leverage( 0 )},
		Effect Summary( 0 )
	)
);
```

## Example 8
> **Summary**: Generate a standard least squares model

<!-- Keywords: #Fit, #FitModel, #Effects, #Emphasis, #LackofFit -->

**Code:**
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

## Example 9
> **Summary**: Generate a standard least squares model

<!-- Keywords: #FitModel, #Effects, #Model, #Personality, #PlotActualbyPredicted -->

**Code:**
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

## Example 10
> **Summary**: Fit a manova model

<!-- Keywords: #FitModel, #Effects, #Model, #Personality -->

**Code:**
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

## Example 11
> **Summary**: Fit a standard least squares model with a box cox transformation

<!-- Keywords: #FitModel, #BoxCoxYTransformation, #Effects, #Model, #Personality -->

**Code:**
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

## Example 12
> **Summary**: Generate an ordinal logistic model

<!-- Keywords: #FitModel, #Effects, #Freq, #Model, #Personality -->

**Code:**
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

## Example 13
> **Summary**: Fit a model with the prediction profiler with desirability functions

<!-- Keywords: #FitModel, #Profiler, #ConfidenceIntervals, #DesirabilityFunctions, #Effects -->

**Code:**
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

## Example 14
> **Summary**: Fit a manova model

<!-- Keywords: #FitModel, #Effects, #Model, #Personality -->

**Code:**
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

## Example 15
> **Summary**: Fit a standard least squares model with 2 way interaction term

<!-- Keywords: #FitModel, #Effects, #Model, #Personality -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Cleansing.jmp");
// Model Specification
Fit Model(
	Y( :Coal particles ),
	Effects(
		:pH, :Polymer, :pH * :Polymer
	),
	Personality(
		"Standard Least Squares"
	)
);
```

## Example 16
> **Summary**: Fit a standard least squares model with 2 way interaction term

<!-- Keywords: #Fit, #FitModel, #Effects, #Emphasis, #LackofFit -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Cleansing.jmp");
// Fit ANCOVA Model
Fit Model(
	Y( :Coal particles ),
	Effects(
		:pH, :Polymer, :pH * :Polymer
	),
	Personality(
		"Standard Least Squares"
	),
	Emphasis( "Effect Leverage" ),
	Run(
		:Coal particles <<
		{Lack of Fit( 0 ),
		Plot Actual by Predicted( 1 ),
		Plot Residual by Predicted( 1 ),
		Plot Effect Leverage( 1 )}
	)
);
```

## Example 17
> **Summary**: Build a manova model

<!-- Keywords: #FitModel, #Effects, #Model, #Personality -->

**Code:**
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

## Example 18
> **Summary**: Build a nominal logistic regression model

<!-- Keywords: #FitModel, #Effects, #Model, #Personality -->

**Code:**
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

## Example 19
> **Summary**: Fit a standard least squares model with interaction terms

<!-- Keywords: #FitModel, #Effects, #Model, #Personality -->

**Code:**
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

## Example 20
> **Summary**: Fit a mixed model with whole plots and subplots

<!-- Keywords: #FitModel, #Effects, #Model -->

**Code:**
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

## Example 21
> **Summary**: Fit a standard least squares model with REML method, including random effects and interactions.

<!-- Keywords: #FitModel, #Effects, #Keepdialogopen, #Method, #Model -->

**Code:**
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

## Example 22
> **Summary**: Fit a standard least squares model with REML estimation using specified random effects and interactions for OCV in the Battery Data dataset.

<!-- Keywords: #FitModel, #Effects, #Keepdialogopen, #Method, #Model -->

**Code:**
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

## Example 23
> **Summary**: Fit a logistic regression model to the binomial experiment dataset.

<!-- Keywords: #FitModel, #Effects, #Model -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Binomial Experiment.jmp");
// Model
Fit Model(
	Effects(
		:X1, :X2, :X3, :X4, :X5, :X6
	),
	Y( :Y )
);
```

## Example 24
> **Summary**: Fit a standard least squares linear model to the data in the Borehole Latin Hypercube dataset, with log y as the response variable, and include specified effects and their interactions. Enhance the model with a profiler that includes confidence intervals and term value settings for effective effect screening. Plot the scaled estimates and actual by predicted values for visual analysis.

<!-- Keywords: #FitModel, #Profiler, #ConfidenceIntervals, #Effects, #Emphasis -->

**Code:**
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

## Example 25
> **Summary**: Fit a linear regression model using the Least Squares method with multiple effects, including interactions and polynomial terms.

<!-- Keywords: #FitModel, #Profiler, #ConfidenceIntervals, #Effects, #Emphasis -->

**Code:**
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

## Example 26
> **Summary**: Fit a standard least squares model to the borehole uniform dataset, focusing on effect screening with various model effects, including interactions.

<!-- Keywords: #FitModel, #Profiler, #ConfidenceIntervals, #Effects, #Emphasis -->

**Code:**
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

## Example 27
> **Summary**: Fit a standard least squares linear regression model with multiple interaction terms between silica, sulfur, and silane, using stretch as the response variable.

<!-- Keywords: #FitModel, #Effects, #Model, #Personality -->

**Code:**
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

## Example 28
> **Summary**: Build and fit a mixed-effects model including fixed effects for Furnace Temp and Coating, their interaction, and a random effect for Whole Plots in the Box Corrosion Split-Plot experiment.

<!-- Keywords: #FitModel, #Effects, #Model -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Box Corrosion Split-Plot.jmp");
// Model
Fit Model(
	Effects(
		:Whole Plots & Random,
		:Furnace Temp, :Coating,
		:Furnace Temp * :Coating
	),
	Y( :Corrosion Resistance )
);
```

## Example 29
> **Summary**: Fit a generalized linear model using the Fit Model platform with the specified effects and two response variables.

<!-- Keywords: #FitModel, #Effects, #Model -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Byrne Taguchi Data.jmp");
// Model
Fit Model(
	Effects(
		:Interfer, :Wall, :Depth,
		:Adhesive
	),
	Y( :Mean Y ),
	Y( :SN Ratio Y )
);
```

## Example 30
> **Summary**: Build a predictive model to analyze the impact of ingredient combinations on cake taste using the Fit Model platform.

<!-- Keywords: #FitModel, #Effects, #Intercept, #Model, #NoIntercept -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Cake Data.jmp");
// Model
Fit Model(
	Effects(
		:Cocoa & RS & Mixture,
		:Sugar & RS & Mixture,
		:Flour & RS & Mixture,
		:Butter & RS & Mixture,
		:Milk & RS & Mixture
	),
	Y( :Taste ),
	No Intercept( 1 )
);
```

## Example 31
> **Summary**: Fit a linear mixed-effects model with random effects for whole plots and subplots, and include fixed effects for temperature, time, catalyst, and their interactions.

<!-- Keywords: #FitModel, #Effects, #Model -->

**Code:**
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

## Example 32
> **Summary**: Fit a standard least squares model with random effects to simulate the response variable Y using specified effects and experimental design factors.

<!-- Keywords: #FitModel, #Effects, #Emphasis, #Method, #Model -->

**Code:**
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

## Example 33
> **Summary**: Build a statistical model using the Fit Model function with specified effects and response variable.

<!-- Keywords: #FitModel, #Effects, #Model -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Coffee Data.jmp");
// Model
Fit Model(
	Effects(
		:Grind, :Temperature, :Time,
		:Charge, :Station
	),
	Y( :Strength )
);
```

## Example 34
> **Summary**: Fit a standard least squares regression model with multiple polynomial and interaction effects.

<!-- Keywords: #FitModel, #Effects, #Model, #Personality -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Custom RSM.jmp");
// Model
Fit Model(
	Y( :Y ),
	Effects(
		:X1 & RS, :X2 & RS, :X3 & RS,
		:X1 * :X1, :X1 * :X2, :X2 * :X2,
		:X1 * :X3, :X2 * :X3, :X3 * :X3
	),
	Personality(
		"Standard Least Squares"
	)
);
```

## Example 35
> **Summary**: Fit a standard least squares regression model using the Strength variable as the response and Time, Charge, and Station as the predictors.

<!-- Keywords: #FitModel, #Effects, #Emphasis, #Keepdialogopen, #Model -->

**Code:**
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

## Example 36
> **Summary**: Fit a standard least squares regression model with multiple effects and interactions.

<!-- Keywords: #FitModel, #Effects, #Model, #Personality -->

**Code:**
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

## Example 37
> **Summary**: Generate a full factorial mixture experiment model  using the Fit Model function with specified effects.

<!-- Keywords: #FitModel, #Effects, #Intercept, #Model, #NoIntercept -->

**Code:**
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

## Example 38
> **Summary**: Perform stepwise regression analysis to identify significant effects on yield in the design experiment data.

<!-- Keywords: #FitModel, #Effects, #Model, #Personality -->

**Code:**
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

## Example 39
> **Summary**: Fit a multiple regression model using the Fit Model platform .

<!-- Keywords: #FitModel, #Effects, #Model -->

**Code:**
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

## Example 40
> **Summary**: Fit a model using the Standard Least Squares personality with specified mixture effects and interactions.

<!-- Keywords: #FitModel, #Effects, #Model, #Personality -->

**Code:**
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

## Example 41
> **Summary**: Fit a standard least squares model using variables such as Feed Rate, Catalyst, Stir Rate, Temperature, and Concentration to predict Percent Reacted.

<!-- Keywords: #FitModel, #Effects, #Model, #Personality -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Plackett-Burman.jmp");
// Model
Fit Model(
	Effects(
		:Feed Rate, :Catalyst, :Stir Rate,
		:Temperature, :Concentration
	),
	Y( :Percent Reacted ),
	PERSONALITY(
		"Standard Least Squares"
	)
);
```

## Example 42
> **Summary**: Fit a two-part mixed effect model using the Fit Model function to analyze the effects of brand, time, and power on the number of popped and total kernels in popcorn.

<!-- Keywords: #FitModel, #Effects, #Model -->

**Code:**
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

## Example 43
> **Summary**: Fit a complex linear model with multiple effects and interactions to predict the chemical reaction yield.

<!-- Keywords: #FitModel, #Effects, #Model -->

**Code:**
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

## Example 44
> **Summary**: Fit a reduced general linear model with interactions between catalyst, temperature, and concentration to predict percent reacted.

<!-- Keywords: #FitModel, #Effects, #Model, #Personality -->

**Code:**
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

## Example 45
> **Summary**: Fit a standard least squares linear model with multiple main effects and interaction terms to analyze the relationship between reactor conditions and percent reacted.

<!-- Keywords: #FitModel, #Effects, #Model, #Personality -->

**Code:**
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

## Example 46
> **Summary**: Develop a reduced multiple regression model using the Percent Reacted as the dependent variable, with Catalyst, Temperature, and Concentration as independent variables, and including interaction effects between Catalyst and Temperature, and Temperature and Concentration.

<!-- Keywords: #FitModel, #Effects, #Keepdialogopen, #Model, #Personality -->

**Code:**
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

## Example 47
> **Summary**: Fit a standard least squares multiple regression model with interactions between feed rate, catalyst, stir rate, temperature, and concentration to predict percent reacted.

<!-- Keywords: #FitModel, #Effects, #Model, #Personality -->

**Code:**
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

## Example 48
> **Summary**: Fit a regression model with interaction effects to predict percent reacted using feed rate, catalyst, stir rate, temperature, and concentration from the Reactor Augment Data dataset.

<!-- Keywords: #FitModel, #Effects, #Model -->

**Code:**
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

## Example 49
> **Summary**: Fit a linear mixed-effects model to analyze the effect of experimental factors on the thickness of vinyl products.

<!-- Keywords: #FitModel, #Effects, #Intercept, #Model, #NoIntercept -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Vinyl Data.jmp");
// Model
Fit Model(
	Effects(
		:Whole Plots & Random,
		:m1 & RS & Mixture,
		:m2 & RS & Mixture,
		:m3 & RS & Mixture,
		:extrusion rate * :temperature,
		:extrusion rate * :m1,
		:extrusion rate * :m2,
		:extrusion rate * :m3,
		:temperature * :m1,
		:temperature * :m2,
		:temperature * :m3, :m1 * :m2,
		:m1 * :m3, :m2 * :m3
	),
	Y( :thickness ),
	No Intercept( 1 )
);
```

## Example 50
> **Summary**: Fit a linear regression model with multiple factors and categorical effects using the Fit Model platform.

<!-- Keywords: #FitModel, #Effects, #Model -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Wine Data.jmp");
// Model
Fit Model(
	Effects(
		:Rater, :Variety, :Field,
		:"De-Stem"n, :Yeast, :Temperature,
		:Press, :Barrel Age,
		:Barrel Seasoning, :Filtering
	),
	Y( :Rating )
);
```

## Example 51
> **Summary**: Fit a standard least squares model to analyze the effects of various factors on wine ratings using Fit Model function.

<!-- Keywords: #FitModel, #Effects, #Emphasis, #Model, #Personality -->

**Code:**
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

## Example 52
> **Summary**: Perform a nominal logistic regression analysis using the Fit Model platform.

<!-- Keywords: #FitModel, #Effects, #Freq, #Model, #Personality -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Detergent.jmp");
// Nominal Logistic Regression
Fit Model(
	Freq( :count ),
	Y( :brand ),
	Effects(
		:softness, :previous use,
		:softness * :previous use,
		:temperature,
		:softness * :temperature,
		:previous use * :temperature,
		:softness * :previous use *
		:temperature
	),
	Personality( "Nominal Logistic" ),
	Run
);
```

## Example 53
> **Summary**: Fit an ordinal logistic regression model to predict an ordinal response variable using multiple predictor effects in the Fit Model platform.

<!-- Keywords: #FitModel, #Effects, #LikelihoodRatioTests, #Model, #Personality -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Diabetes.jmp");
// Logistic for Y Ordinal
Fit Model(
	Y( :Y Ordinal ),
	Effects(
		:Age, :Gender, :BMI, :BP,
		:Total Cholesterol, :LDL, :HDL,
		:TCH, :LTG, :Glucose
	),
	Personality( "Ordinal Logistic" ),
	Run( Likelihood Ratio Tests( 1 ) )
);
```

## Example 54
> **Summary**: Fit a standard least squares regression model with Price as the dependent variable and Carat Weight, Color, Clarity, Depth, Table, Cut, and Report as effects using the Fit Model function.

<!-- Keywords: #FitModel, #Effects, #Emphasis, #Model, #Personality -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Diamonds Data.jmp");
// Model
Fit Model(
	Y( :Price ),
	Effects(
		:Carat Weight, :Color, :Clarity,
		:Depth, :Table, :Cut, :Report
	),
	Personality(
		"Standard Least Squares"
	),
	Emphasis( "Effect Screening" )
);
```

## Example 55
> **Summary**: Fit a Standard Least Squares Model with Effect Screening to Predict Price Using Carat Weight, Color, Clarity, Depth, Table, Cut, and Report as Effects.

<!-- Keywords: #FitModel, #Profiler, #ConfidenceIntervals, #DesirabilityFunctions, #Effects -->

**Code:**
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

## Example 56
> **Summary**: Fit a generalized linear model using the Fit Model platform with specified effects and without an intercept term.

<!-- Keywords: #FitModel, #Effects, #Intercept, #Model, #NoIntercept -->

**Code:**
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

## Example 57
> **Summary**: Perform a MANOVA analysis to evaluate the effects of drug and dep1 on multiple dependent variables (LogHist0, LogHist1, LogHist3, and LogHist5) using contrasts and sum response functions.

<!-- Keywords: #FitModel, #Effects, #Model, #Personality, #ResponseFunction -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Dogs.jmp");
// Manova
Fit Model(
	Y(
		:LogHist0, :LogHist1, :LogHist3,
		:LogHist5
	),
	Effects(
		:drug, :dep1, :drug * :dep1
	),
	Personality( "Manova" ),
	Run(
		Response Function( "Contrast" ),
		Response Function( "Sum" )
	)
);
```

## Example 58
> **Summary**: Perform equivalence tests for the effects of different drug types on measurements using the Fit Model personality.

<!-- Keywords: #Effect, #EquivalenceTests, #Fit, #FitModel, #MultipleComparisons -->

**Code:**
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

## Example 59
> **Summary**: Fit a generalized linear model with separate slopes for different levels of a categorical variable using the standard least squares personality in the Fit Model platform.

<!-- Keywords: #FitModel, #Effects, #Model, #Personality -->

**Code:**
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

## Example 60
> **Summary**: Perform a standard least squares regression analysis to model the relationship between the response variable and the specified effects.

<!-- Keywords: #FitModel, #Effects, #Model, #Personality -->

**Code:**
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

## Example 61
> **Summary**: Fit a standard linear regression model to predict Annual Salary Z, incorporating Gender, Length Of Service, and Performance as effects, and suppress detailed diagnostic plots.

<!-- Keywords: #Fit, #FitModel, #AnalysisofVariance, #BoxCoxYTransformation, #Close -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Employee Master.jmp");
// Fit Model - Annual Salary Z
Fit Model(
	Y( :Annual Salary Z ),
	Effects(
		:Gender, :Length Of Service,
		:Performance
	),
	Personality(
		"Standard Least Squares"
	),
	Emphasis( "Minimal Report" ),
	Run(
		:Annual Salary Z <<
		{Summary of Fit( 1 ),
		Analysis of Variance( 1 ),
		Parameter Estimates( 1 ),
		Scaled Estimates( 0 ),
		Plot Actual by Predicted( 0 ),
		Plot Regression( 0 ),
		Plot Residual by Predicted( 0 ),
		Plot Studentized Residuals( 0 ),
		Plot Effect Leverage( 0 ),
		Plot Residual by Normal Quantiles(
			0
		), Box Cox Y Transformation( 0 )}
	),
	SendToReport(
		Dispatch(
			{"Response Annual Salary Z"},
			"Effect Tests", OutlineBox,
			{Close( 0 )}
		)
	)
);
```

## Example 62
> **Summary**: Perform multivariate analysis of variance (MANOVA) to model the relationship between two dependent variables and multiple independent variables.

<!-- Keywords: #FitModel, #Effects, #Model, #Personality -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Exercise.jmp");
// Fit Model
Fit Model(
	Y( :chins, :situps, :jumps ),
	Effects( :weight, :waist, :pulse ),
	Personality( "Manova" ),
	Run
);
```

## Example 63
> **Summary**: Fit a quadratic regression model by including polynomial terms of reaction time and reaction temperature, as well as their interactions and higher-order interactions, using the Fit Model function.

<!-- Keywords: #FitModel, #Effects, #Model -->

**Code:**
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

## Example 64
> **Summary**: Create a comprehensive linear model with multiple interaction terms to predict Rating based on various fishing parameters.

<!-- Keywords: #FitModel, #Effects, #Intercept, #Model, #NoIntercept -->

**Code:**
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

## Example 65
> **Summary**: Uses the Fit Model platform to perform standard least squares regression with Oxy as the dependent variable and Runtime, Weight, RunPulse, RstPulse, and MaxPulse as independent variables.

<!-- Keywords: #FitModel, #Effects, #Model, #Personality -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Fitness.jmp");
// Fit Model
Fit Model(
	Y( :Oxy ),
	Effects(
		:Runtime, :Weight, :RunPulse,
		:RstPulse, :MaxPulse
	),
	Personality(
		"Standard Least Squares"
	),
	Run
);
```

## Example 66
> **Summary**: Perform stepwise linear regression analysis on the Fitness data table to identify significant predictors of Oxygen consumption.

<!-- Keywords: #FitModel, #Effects, #Model, #Personality -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Fitness.jmp");
// Stepwise Fit
Fit Model(
	Y( :Oxy ),
	Effects(
		:Runtime, :Weight, :RunPulse,
		:RstPulse, :MaxPulse
	),
	Personality( "Stepwise" ),
	Run
);
```

## Example 67
> **Summary**: Fit a linear regression model to analyze the effect of various ingredients and conditions on the strength of bread dough.

<!-- Keywords: #FitModel, #Effects, #Model -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Flrpaste.jmp");
// Model
Fit Model(
	Effects(
		:Liquid, :Sugar, :Flour, :Sifted,
		:Type, :Temp, :Salt, :Clamp,
		:Coat
	),
	Y( :Strength )
);
```

## Example 68
> **Summary**: Fit a nonlinear mixed-effects model with Scheffe cubic interactions for a mixture design experiment.

<!-- Keywords: #FitModel, #BIC, #Cubic, #Effects, #Intercept -->

**Code:**
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

## Example 69
> **Summary**: Fit a linear mixed model with multiple fixed effects and interactions using the Fit Model platform.

<!-- Keywords: #FitModel, #Effects, #Model -->

**Code:**
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

## Example 70
> **Summary**: Fit a generalized linear model with various interaction and Scheffe cubic effects in the Fit Model platform.

<!-- Keywords: #FitModel, #BIC, #Cubic, #Effects, #Intercept -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Functional Data/NMR DoE.jmp");
// Model
Fit Model(
	Effects(
		:Propanol & Mixture,
		:Butanol & Mixture,
		:Pentanol & Mixture,
		:Propanol * :Butanol,
		:Propanol * :Pentanol,
		:Butanol * :Pentanol,
		:Propanol * :Butanol * :Pentanol,
		Scheffe Cubic(
			Propanol,
			Butanol
		),
		Scheffe Cubic(
			Propanol,
			Pentanol
		),
		Scheffe Cubic(
			Butanol,
			Pentanol
		)
	),
	No Intercept( 1 )
);
```

## Example 71
> **Summary**: Fit a multiple regression model with interactions between predictors using the Fit Model platform.

<!-- Keywords: #FitModel, #Effects, #Model -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Functional Data/Simple Linear Functional Data.jmp");
// Model
Fit Model(
	Effects(
		:X1, :X2, :X3, :X1 * :X2,
		:X1 * :X3, :X2 * :X3
	),
	Y( :Y )
);
```

## Example 72
> **Summary**: Perform multivariate analysis of variance (MANOVA) using the Fit Model platform with Distance and Durability as response variables and Brand as a fixed effect.

<!-- Keywords: #FitModel, #Effects, #Model, #Personality -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Golf Balls.jmp");
// MANOVA
Fit Model(
	Y( :Distance, :Durability ),
	Effects( :Brand ),
	Personality( "Manova" ),
	Run
);
```

## Example 73
> **Summary**:  fit a linear regression model with Price as the response variable and Age and Bidders as predictors using the Standard Least Squares personality.

<!-- Keywords: #Fit, #FitModel, #Effects, #Emphasis, #LackofFit -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Grandfather Clocks.jmp");
// Fit Model
Fit Model(
	Y( :Price ),
	Effects( :Age, :Bidders ),
	Personality(
		"Standard Least Squares"
	),
	Emphasis( "Effect Leverage" ),
	Run(
		:Price << {Lack of Fit( 0 ),
		Plot Actual by Predicted( 1 ),
		Plot Regression( 0 ),
		Plot Residual by Predicted( 1 ),
		Plot Effect Leverage( 1 )}
	)
);
```

## Example 74
> **Summary**: Fit a multiple regression model with interaction effects, using the EMS personality in the Fit Model platform.

<!-- Keywords: #FitModel, #Effects, #Method, #Model, #Personality -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Machine.jmp");
// Fit Model EMS
Fit Model(
	Y( :rating ),
	Effects(
		:machine, :person & Random,
		:machine * :person & Random
	),
	Personality(
		"Standard Least Squares"
	),
	Method( "EMS" ),
	Run
);
```

## Example 75
> **Summary**: Fit a Stepwise Regression Model with Interaction Terms

<!-- Keywords: #FitModel, #Effects, #Model, #Personality -->

**Code:**
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

## Example 76
> **Summary**: Perform an Analysis of Variance (ANOVA) using the Error Mean Square (EMS) methodology to assess the effects of casting temperature and random effects on shrinkage in investment castings.

<!-- Keywords: #FitModel, #CensorCode, #Code, #Effects, #Method -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Investment Castings.jmp");
// Model: EMS
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
	Method( "EMS" ),
	Set Alpha Level( 0.05 )
);
```

## Example 77
> **Summary**: Build a logistic regression model using the nominal logistic personality in the Fit Model platform with frequency weights.

<!-- Keywords: #FitModel, #Effects, #Freq, #Model, #Personality -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Ingots.jmp");
// Logistic Regression
Fit Model(
	Freq( :count ),
	Y( :ready ),
	Effects( :heat, :soak ),
	Personality( "Nominal Logistic" ),
	Run
);
```

## Example 78
> **Summary**: Build a loglinear variance model with interaction terms for shrinkage in the Injection Molding dataset.

<!-- Keywords: #FitModel, #Effects, #LogVarianceEffects, #Model, #Personality -->

**Code:**
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

## Example 79
> **Summary**: Perform a variance component analysis using the REML method and fit a model for shrinkage with random effects in the Standard Least Squares personality.

<!-- Keywords: #FitModel, #CensorCode, #Code, #Effects, #Method -->

**Code:**
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

## Example 80
> **Summary**: Construct a Nominal Logistic Regression Model to Analyze Species Classification Using Sepal and Petal Measurements.

<!-- Keywords: #FitModel, #Effects, #Model, #Personality -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Iris.jmp");
// Nominal Logistic
Fit Model(
	Y( :Species ),
	Effects(
		:Sepal length, :Sepal width,
		:Petal length, :Petal width
	),
	Personality( "Nominal Logistic" ),
	Run
);
```

## Example 81
> **Summary**: Perform a multiple linear regression analysis using the Standard Least Squares personality.

<!-- Keywords: #FitModel, #Effects, #Emphasis, #Model, #Personality -->

**Code:**
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

## Example 82
> **Summary**: Fit a nominal logistic regression model to analyze the effect of smoking on lung cancer.

<!-- Keywords: #FitModel, #Effects, #Freq, #Model, #Personality -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Lung Cancer Choice.jmp");
// Model
Fit Model(
	Freq( :Count ),
	Y( :Lung Cancer ),
	Effects( :Smoker ),
	Personality( "Nominal Logistic" )
);
```

## Example 83
> **Summary**: Fit a nominal logistic regression model using the occurrence of lung cancer as the response variable, with smoking as the predictor, and incorporating observation frequencies.

<!-- Keywords: #FitModel, #Effects, #Freq, #Model, #Personality -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Lung Cancer.jmp");
// Model
Fit Model(
	Freq( :Count ),
	Y( :Lung Cancer ),
	Effects( :Smoker ),
	Personality( "Nominal Logistic" )
);
```

## Example 84
> **Summary**: Fit a linear model using REML with a random effects structure involving both machine and person variables.

<!-- Keywords: #FitModel, #Effects, #Model, #Personality -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Machine.jmp");
// Fit Model REML
Fit Model(
	Y( :rating ),
	Effects(
		:machine, :person & Random,
		:machine * :person & Random
	),
	Personality(
		"Standard Least Squares"
	),
	Run
);
```

## Example 85
> **Summary**: Fit a standard least squares model with mean as the response variable, grp as the effect, and N as the frequency variable.

<!-- Keywords: #FitModel, #Effects, #Freq, #Model, #Personality -->

**Code:**
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

## Example 86
> **Summary**: Fit a Nominal Logistic Regression Model

<!-- Keywords: #FitModel, #Effects, #LikelihoodRatioTests, #LogisticPlot, #Model -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Nonlinear Examples/Logistic w Loss.jmp");
// Fit Model
Fit Model(
	Y( :Y ),
	Effects( :X ),
	Personality( "Nominal Logistic" ),
	Run(
		Likelihood Ratio Tests( 1 ),
		Wald Tests( 0 ),
		Logistic Plot( 1 )
	)
);
```

## Example 87
> **Summary**: Construct a response surface model  using the Standard Least Squares personality to analyze the effects of multiple variables and their interactions on the odor response.

<!-- Keywords: #FitModel, #Profiler, #Effects, #Estimates, #Model -->

**Code:**
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

## Example 88
> **Summary**: Fit a statistical model using the Fit Model platform with specified effects and response variable.

<!-- Keywords: #FitModel, #Effects, #Model -->

**Code:**
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

## Example 89
> **Summary**: Fit a multiple regression model using standard least squares personality to predict odor based on temperature, glucose ratio, and height, including their interactions.

<!-- Keywords: #FitModel, #Effects, #Model, #Personality -->

**Code:**
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

## Example 90
> **Summary**: Develop a standard least squares regression model with mixture effects.

<!-- Keywords: #FitModel, #Effects, #Model, #Personality -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Plasticizer.jmp");
// Model
Fit Model(
	Effects(
		:p1 & RS & Mixture,
		:p2 & RS & Mixture,
		:p3 & RS & Mixture, :p1 * :p2,
		:p1 * :p3, :p2 * :p3
	),
	Y( :Y ),
	No Intercept,
	PERSONALITY(
		"Standard Least Squares"
	)
);
```

## Example 91
> **Summary**: Fit a linear regression model using the Fit Model platform .

<!-- Keywords: #Fit, #FitModel, #Effects, #Emphasis, #LackofFit -->

**Code:**
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

## Example 92
> **Summary**: Fit a statistical model using a knotted spline effect to analyze the relationship between ozone levels and population.

<!-- Keywords: #Fit, #FitModel, #Effects, #Emphasis, #LackofFit -->

**Code:**
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

## Example 93
> **Summary**: Fit a full factorial model with interaction effects for popcorn yield, popcorn type, oil amount, batch, and their interactions.

<!-- Keywords: #FitModel, #Effects, #Model, #Personality -->

**Code:**
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

## Example 94
> **Summary**: Fit a Proportional Hazards Model with Group as the Predictor Variable.

<!-- Keywords: #FitModel, #Censor, #Effects, #Model, #Personality -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Rats.jmp");
// Proportional Hazards
Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run
);
```

## Example 95
> **Summary**: Fit a standard least squares model with multiple effects and generate a profiler plot.

<!-- Keywords: #FitModel, #Effects, #Model, #Personality, #PlotActualbyPredicted -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Reactor.jmp");
// Fit Model
Fit Model(
	Y( :Y ),
	Effects( :F, :Ct, :A, :T, :Cn ),
	Personality(
		"Standard Least Squares"
	),
	Run(
		Profiler,
		:Y <<
		{Plot Actual by Predicted( 1 ),
		Plot Residual by Predicted( 0 ),
		Plot Effect Leverage( 1 )}
	)
);
```

## Example 96
> **Summary**: Fit a proportional hazards model to analyze device lifetimes, including effects of average load, average moisture, average vibration, average solar exposure, and location coordinates, while accounting for censoring.

<!-- Keywords: #FitModel, #Censor, #CensorCode, #Code, #Effects -->

**Code:**
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

## Example 97
> **Summary**: Fit a proportional intensity Poisson process model in the Recurrence Analysis platform to analyze system reliability data.

<!-- Keywords: #DataTable, #FitModel, #RecurrenceAnalysis, #Cost, #Effects -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Reliability/Diesel Ship Engines.jmp");
// Proportional Intensity Model
dt = Current Data Table();
dt << Clear Select;
dt << Select Excluded << Exclude;
dt << Clear Select;
obj =
Recurrence Analysis(
	Y( :kHours ),
	Cost( :Cost ),
	Grouping( :System ID ),
	Label( :System ID ),
	Fit Model(
		Scale Effects( :System ID ),
		Run Model,
		Model Type(
			"Proportional Intensity Poisson Process"
		)
	)
);
```

## Example 98
> **Summary**: Fit a standard least squares regression model with aperture, ranging, and cadence as predictors for yield.

<!-- Keywords: #FitModel, #Effects, #Model, #Personality -->

**Code:**
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

## Example 99
> **Summary**: Fit a main effects model with interaction terms using the Fit Model function and specify the dependent variable and effects in the script.

<!-- Keywords: #FitModel, #Effects, #Model -->

**Code:**
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

## Example 100
> **Summary**: Fit a standard least squares regression model to the data with specified effects after stepwise selection, emphasizing effect leverage and generating diagnostic plots.

<!-- Keywords: #FitModel, #Effects, #Emphasis, #Estimates, #Model -->

**Code:**
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

## Example 101
> **Summary**: Perform an ordinal logistic regression analysis to model the Taste Test outcome based on Salt & RS and Salt squared effects.

<!-- Keywords: #FitModel, #Effects, #Model, #Personality -->

**Code:**
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

## Example 102
> **Summary**: Perform a multiple linear regression analysis with length, basilar, zygomat, and postorb as response variables, and sex as a categorical predictor utilizing the Standard Least Squares personality in the Fit Model platform, and generate diagnostic plots including Actual by Predicted, Residual by Predicted, and Effect Leverage plots for each response variable.

<!-- Keywords: #FitModel, #Effects, #Model, #Personality, #PlotActualbyPredicted -->

**Code:**
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

## Example 103
> **Summary**: Fit a standard least squares model with minimal report and significance level set to 0.05 using the variables X1, X2, and X3 to predict Y.

<!-- Keywords: #FitModel, #CensorCode, #Code, #Effects, #Emphasis -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Singularity.jmp");
// Model 1
Fit Model(
	Censor Code( "" ),
	Y( :Y ),
	Effects( :X1, :X2, :X3 ),
	Personality(
		"Standard Least Squares"
	),
	Emphasis( "Minimal Report" ),
	Set Alpha Level( 0.05 )
);
```

## Example 104
> **Summary**: Perform standard least squares regression analysis with minimal report emphasis and an alpha level of 0.05.

<!-- Keywords: #FitModel, #CensorCode, #Code, #Effects, #Emphasis -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Singularity.jmp");
// Model 2
Fit Model(
	Censor Code( "" ),
	Y( :Y ),
	Effects( :X1, :X3, :X2 ),
	Personality(
		"Standard Least Squares"
	),
	Emphasis( "Minimal Report" ),
	Set Alpha Level( 0.05 )
);
```

## Example 105
> **Summary**: Generate a standard least squares regression model with minimal diagnostic plots and analyze effect tests.

<!-- Keywords: #Fit, #FitModel, #AnalysisofVariance, #Close, #Effects -->

**Code:**
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

## Example 106
> **Summary**: Fit a Nominal Logistic regression model with multiple predictors.

<!-- Keywords: #FitModel, #Effects, #Model, #Personality -->

**Code:**
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

## Example 107
> **Summary**: Fit a linear model using the EMS method with interactions and random effects.

<!-- Keywords: #FitModel, #Effects, #Method, #Model, #Personality -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Split Plot.jmp");
// Fit Model - EMS Method
Fit Model(
	Y( :Y ),
	Effects(
		:Tenderizer, :Carcass,
		:Tenderizer * :Carcass & Random,
		:Roasting Time,
		:Roasting Time * :Tenderizer
	),
	Personality(
		"Standard Least Squares"
	),
	Method( "EMS" ),
	Run
);
```

## Example 108
> **Summary**: Fit a quadratic model with multiple interaction effects using the Fit Model function.

<!-- Keywords: #FitModel, #Effects, #Model -->

**Code:**
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

## Example 109
> **Summary**: Build a linear regression model using the Fit Model function with multiple predictors.

<!-- Keywords: #FitModel, #Effects, #Emphasis, #Model, #Personality -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Supersaturated.jmp");
// Model
Fit Model(
	Effects(
		:X1, :X2, :X3, :X4, :X5, :X6, :X7,
		:X8, :X9, :X10, :X11, :X12, :X13,
		:X14, :X15, :X16, :X17, :X18
	),
	Y( :Y ),
	Personality(
		"Standard Least Squares"
	),
	Emphasis( "Minimal Report" )
);
```

## Example 110
> **Summary**: Generate a Time Series Forecast for grouped quarterly data using the Time Series Forecast function with a 4-period ahead prediction and constrained parameters.

<!-- Keywords: #FitModel, #TimeSeriesForecast, #ConstrainParameters, #Forecast, #Grouping -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Time Series/M3C Quarterly.jmp");
// Time Series Forecast of Data 2
Time Series Forecast(
	Y( :Y ),
	Grouping( :Series ),
	Time( :Time ),
	Fit Model(
		NAhead( 4 ),
		Period( 4 ),
		Constrain Parameters( 1 )
	)
);
```

## Example 111
> **Summary**: Perform Response Surface Methodology (RSM) analysis for four responses using the Fit Model platform with specified effects, Standard Least Squares personality, and Profiler for scaled estimates and actual by predicted plots.

<!-- Keywords: #FitModel, #Profiler, #ConfidenceIntervals, #Effects, #Estimates -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Tiretread.jmp");
// RSM for 4 Responses
Fit Model(
	Y(
		:ABRASION, :MODULUS, :ELONG,
		:HARDNESS
	),
	Effects(
		:SILICA & RS, :SILANE & RS,
		:SULFUR & RS, :SILICA * :SILICA,
		:SILANE * :SILICA,
		:SILANE * :SILANE,
		:SULFUR * :SILICA,
		:SULFUR * :SILANE,
		:SULFUR * :SULFUR
	),
	Personality(
		"Standard Least Squares"
	),
	Run(
		Profiler(
			Confidence Intervals( 1 )
		),
		:ABRASION <<
		{Scaled Estimates( 1 ),
		Plot Actual by Predicted( 1 )},
		:MODULUS <<
		{Scaled Estimates( 1 ),
		Plot Actual by Predicted( 1 )},
		:ELONG << {Scaled Estimates( 1 ),
		Plot Actual by Predicted( 1 )},
		:HARDNESS <<
		{Scaled Estimates( 1 ),
		Plot Actual by Predicted( 1 )}
	)
);
```

## Example 112
> **Summary**: Fit a Nominal Logistic Regression Model using selected variables to predict the Survival status.

<!-- Keywords: #FitModel, #Effects, #LikelihoodRatioTests, #Model, #Personality -->

**Code:**
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

## Example 113
> **Summary**: Fit a full factorial generalized linear model to predict tool wear.

<!-- Keywords: #FitModel, #Effects, #Model, #Personality -->

**Code:**
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

## Example 114
> **Summary**: Fit a multivariable linear regression model to predict wear based on speed, angle, material, and their interactions using the Standard Least Squares personality. Perform effect screening, generate a profiler with confidence intervals and term values, and plot actual by predicted values.

<!-- Keywords: #Fit, #FitModel, #Profiler, #ConfidenceIntervals, #Effects -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Tool Wear.jmp");
// Fit Model
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
	),
	Emphasis( "Effect Screening" ),
	Run(
		Profiler(
			1,
			Confidence Intervals( 1 ),
			Term Value(
				Speed(
					0,
					Lock( 0 ),
					Show( 1 )
				),
				Angle(
					0,
					Lock( 0 ),
					Show( 1 )
				),
				Material(
					"A",
					Lock( 0 ),
					Show( 1 )
				)
			)
		),
		:Wear << {Lack of Fit( 0 ),
		Sorted Estimates( 1 ),
		Plot Actual by Predicted( 1 ),
		Plot Regression( 0 ),
		Plot Residual by Predicted( 0 ),
		Plot Effect Leverage( 0 )}
	)
);
```

## Example 115
> **Summary**: Fit a proportional hazards model with specified categorical and continuous covariates, including risk ratios for interpretation.

<!-- Keywords: #FitModel, #Censor, #Effects, #Model, #Personality -->

**Code:**
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

## Example 116
> **Summary**: Split the Y variable by Quadrant in the Wafer Quadrants data set and fit a Standard Least Squares regression model to the resulting subsets, adjusting for the Layout effect.

<!-- Keywords: #FitModel, #columns, #Effects, #Emphasis, #Keepdialogopen -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Wafer Quadrants.jmp");
// Split Y by Quadrant
dt = Split(
	Split By( :Quadrant ),
	Split( :Y ),
	Remaining Columns(
		Keep( :Wafer ID, :Layout )
	),
	Sort by Column Property
);
dt <<
New Script(
	"Model",
	Fit Model(
		Y(
			:"High, High"n, :"High, Low"n,
			:"Low, High"n, :"Low, Low"n
		),
		Effects( :Layout ),
		Keep dialog open( 1 ),
		Personality(
			"Standard Least Squares"
		),
		Emphasis( "Minimal Report" )
	)
);
```

## Example 117
> **Summary**: Fit a multiple linear regression model using the Standard Least Squares personality and display plots of actual vs. predicted, residual vs. predicted, and effect leverage.

<!-- Keywords: #FitModel, #Effects, #Model, #Personality, #PlotActualbyPredicted -->

**Code:**
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


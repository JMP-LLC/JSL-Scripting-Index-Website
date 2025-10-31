# Clustering

More examples for this topic using the sample data files provided with JMP

### Build a partition model

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

### Build a partition model

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

### Fit a nominal logistic model

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

### Build a decision tree model using partition

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

### Perform Multiple Correspondence Analysis (MCA) on the given data table, fitting supplementary variables by age.

```jsl

// Open data table
dt = Open("$Sample_Data/Employee Taste.jmp");
// MCA-level-supp-age
Multiple Correspondence Analysis(
	Y( :TV, :Film, :Art, :Restaurant ),
	Z( :Age ),
	Cross Table( Show Total( 1 ) ),
	Cross Table of Supplementary Columns(
		Show Total( 1 )
	),
	SendToReport(
		Dispatch( {}, "Variable Summary",
			OutlineBox,
			{Close( 1 )}
		),
		Dispatch(
			{"Correspondence Analysis"},
			"Details", OutlineBox,
			{Close( 1 )}
		)
	)
);

```

### Perform hierarchical clustering on flight distances using the Ward method with standardized data, and display the dendrogram with 10 clusters colored for easy identification.

```jsl

// Open data table
dt = Open("$Sample_Data/Flight Distances.jmp");
// Hierarchical Cluster
Hierarchical Cluster(
	Y(
		:Birmingham, :Boston, :Buffalo,
		:Chicago, :Cleveland, :Dallas,
		:Denver, :Detroit, :El Paso,
		:Houston, :Indianapolis,
		:Kansas City, :Los Angeles,
		:Louisville, :Memphis, :Miami,
		:Minneapolis, :New Orleans,
		:New York, :Omaha, :Philadelphia,
		:Phoenix, :Pittsburgh, :St. Louis,
		:Salt Lake City, :San Francisco,
		:Seattle, :Washington DC
	),
	Label( :Cities ),
	Method( "Ward" ),
	Standardize Data( 1 ),
	Distance Matrix( 1 ),
	Dendrogram Scale( "Distance Scale" ),
	Number of Clusters( 10 ),
	Color Clusters( 1 ),
	SendToReport(
		Dispatch( {}, "Dendrogram",
			OutlineBox,
			{SetHorizontal( 1 )}
		)
	)
);

```

### Fit a generalized linear model with various interaction and Scheffe cubic effects in the Fit Model platform.

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

### Analyze a multivariate dataset using the Multivariate platform, generating a scatterplot matrix with density ellipses and customizing axis scales.

```jsl

// Open data table
dt = Open("$Sample_Data/Polyethylene Process.jmp");
// Multivariate
Multivariate(
	Y( :Tmax2, :z2, :Fi2 ),
	Estimation Method( "Row-wise" ),
	Scatterplot Matrix(
		Density Ellipses( 1 ),
		Shaded Ellipses( 0 )
	),
	SendToReport(
		Dispatch( {"Scatterplot Matrix"},
			"102", ScaleBox,
			{Min( 0.385563909774436 ),
			Max( 0.576842105263158 ),
			Inc( 0.025 ),
			Minor Ticks( 0 )}
		),
		Dispatch( {"Scatterplot Matrix"},
			"101", ScaleBox,
			{Min( 0.5675 ),
			Max( 0.636453182118107 ),
			Inc( 0.01 ), Minor Ticks( 0 )
			}
		),
		Dispatch( {"Scatterplot Matrix"},
			"100", ScaleBox,
			{Min( 272.586320371566 ),
			Max( 292.665882156916 ),
			Inc( 5 ), Minor Ticks( 1 )}
		)
	)
);

```

### Perform hierarchical spatial clustering on defects using the Ward method .

```jsl

// Open data table
dt = Open("$Sample_Data/Wafer Stacked.jmp");
// Spatial Cluster of Defects
Hierarchical Cluster(
	Y( :Defects ),
	Object ID( :Lot, :Wafer ),
	Attribute ID( :X_Die, :Y_Die ),
	Method( "Ward" ),
	Standardize Data( 0 ),
	Cluster Summary( 1 ),
	Dendrogram Scale( "Distance Scale" ),
	Number of Clusters( 7 ),
	Add Spatial Measures(
		Attributes( 1 ),
		Angle( 1 ),
		Radius( 1 ),
		Streak Angle( 1 ),
		Streak Distance( 1 )
	),
	SendToReport(
		Dispatch( {}, "Dendrogram",
			OutlineBox,
			{Close( 1 ),
			SetHorizontal( 1 )}
		),
		Dispatch( {"Dendrogram"},
			"Clust Dendro", FrameBox,
			{Frame Size( 35, 700 )}
		)
	)
);

```

### Change column modeling type from ordinal to nominal and build a standard least squares model

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

### Perform bivariate analysis with a t test

```jsl

// Open data table
dt = Open("$Sample_Data/Blood Pressure by Time.jmp");
// bivariate
Bivariate(
	x( BP AM ),
	Y( BP PM ),
	Paired T Test
);

```

### Generate decision tree model using partition

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

### Perform a k means cluster analysis with normal mixtures

```jsl

// Open data table
dt = Open("$Sample_Data/Cytometry.jmp");
// Normal Mixtures
K Means Cluster(
	Y( :CD3, :CD8, :CD4, :MCB ),
	{Mixtures Tolerance( 0.00000001 ),
	Mixtures MaxIter( 200 ),
	Mixtures N Starts( 20 ),
	Outlier Cluster( 0 ),
	Diagonal Variance( 0 ),
	Number of Clusters( 6 ),
	Normal Mixtures, Go( Biplot 3D( 1 ) )
	},
	SendToReport(
		Dispatch( {}, "Control Panel",
			OutlineBox,
			{Close( 1 )}
		)
	)
);

```

### Load data from an experiment file and edit it using the Custom Design platform .

```jsl

// Open data table
dt = Open("$Sample_Data/Design Experiment/Cake Factors.jmp");
// Load and Edit in Custom Design
DOE(
	Custom Design,
	Load Factors( Current Data Table() )
);

```

### Load data table and modify factors in Custom Design.

```jsl

// Open data table
dt = Open("$Sample_Data/Design Experiment/Runners Factors.jmp");
// Load and Edit in Custom Design
DOE(
	Custom Design,
	Load Factors( Current Data Table() )
);

```

### Fit a linear mixed-effects model to analyze the effect of experimental factors on the thickness of vinyl products.

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

### Construct a decision tree model for the response variable Y using the Partition platform, with the specified input variables and validation column, and incorporating initial splits to improve model accuracy.

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

### Build a decision tree model for ordinal response variable using the Partition platform with specified initial splits and informative missing values.

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

### Partition the Diamonds Data using the Partition platform, specifying Price as the response variable, and include Carat Weight, Color, Clarity, Depth, Table, Cut, and Report as predictors. Set the Minimum Size Split to 5, display split probabilities, and use the Maximize Significance criterion. Define initial splits for Color, Clarity, and Cut based on specified categorical values.

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

### Perform a MANOVA analysis to evaluate the effects of drug and dep1 on multiple dependent variables (LogHist0, LogHist1, LogHist3, and LogHist5) using contrasts and sum response functions.

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

### Build a Naive Bayes model for predicting the BAD variable using selected financial predictors.

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

### Perform K-Nearest Neighbors classification on the BAD variable using specified predictors in the Equity dataset.

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

### Perform multivariate analysis of variance (MANOVA) to model the relationship between two dependent variables and multiple independent variables.

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

### Analyze uplift effects using the Uplift function, with Purchase as the outcome and Gender, Age, Hair Color, U.S. Region, and Residence as predictors, incorporating a validation column, specifying a minimum split size of 63, considering Promotion as the treatment, utilizing split history, handling informative missing values, generating an uplift graph, and limiting the number of splits to 4.

```jsl

// Open data table
dt = Open("$Sample_Data/Hair Care Product.jmp");
// Uplift
Uplift(
	Y( :Purchase ),
	X(
		:Gender, :Age, :Hair Color,
		:U.S. Region, :Residence
	),
	Validation( :Validation ),
	Minimum Size Split( 63 ),
	Treatment( :Promotion ),
	Split History( 1 ),
	Informative Missing( 1 ),
	Uplift Graph( 1 ),
	Split Best( 4 )
);

```

### Fit a Nominal Logistic Regression Model

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

### Fit a nonlinear model to the data using the Model Y variable, with the loss function specified as negative log-likelihood, using the Newton method for optimization and omitting the final plot.

```jsl

// Open data table
dt = Open("$Sample_Data/Nonlinear Examples/Logistic w Loss.jmp");
// Nonlinear with ModelY and Loss
Nonlinear(
	X( :Model Y ),
	Loss( :Loss ),
	Second Deriv Method( 1 ),
	Loss is Neg LogLikelihood( 1 ),
	Newton,
	Finish,
	Plot( 0 )
);

```

### Perform hierarchical cluster analysis on factor scores using the Ward method with standardized data and generate cluster summary and two-way clustering with a specified number of clusters and dendrogram scale.

```jsl

// Open data table
dt = Open("$Sample_Data/Online Consumer Data.jmp");
// Hierarchical Cluster on Factor Scores
Hierarchical Cluster(
	Y(
		:Privacy, :Security, :Reputation,
		:Trust, :Purchase Int
	),
	Method( "Ward" ),
	Standardize Data( 1 ),
	Cluster Summary( 1 ),
	Two Way Clustering,
	Number of Clusters( 4 ),
	Dendrogram Scale( "Distance Scale" ),
	More Color Map Columns(
		:Internet Use
	)
);

```

### Perform hierarchical clustering on the Penguin dataset using centroid linkage and standardize the data. Generate a constellation plot.

```jsl

// Open data table
dt = Open("$Sample_Data/Penguins.jmp");
// Hierarchical Clustering
Hierarchical Cluster(
	Y(
		:Culmen Length, :Culmen Depth,
		:Flipper Length, :Body Mass,
		:Delta 15 N, :Delta 13 C
	),
	Label( :Species ),
	Method( "Centroid" ),
	Standardize Data( 1 ),
	Color Clusters( 1 ),
	Dendrogram Scale( "Distance Scale" ),
	Number of Clusters( 4 ),
	Constellation Plot( 1 )
);

```

### Analyze a dataset containing failure frequencies using categorical analysis with sample size, date, and multiple response variables.

```jsl

// Open data table
dt = Open("$Sample_Data/Quality Control/Failure3Freq.jmp");
// Categorical
Categorical(
	Sample Size( :SampleSize ),
	X( :clean, :date ),
	Response Frequencies(
		:contamination, :corrosion,
		:doping, :metallization,
		:miscellaneous, :oxide defect,
		:silicon defect
	)
);

```

### Apply categorical multivariate ID analysis using the Categorical platform with frequency, ID, X, multiple response by ID, and sample size configurations.

```jsl

// Open data table
dt = Open("$Sample_Data/Quality Control/Failure3ID.jmp");
// Cat MultID2
Categorical(
	Freq( :N ),
	ID( :ID ),
	X( :clean, :date ),
	Multiple Response by ID( :failure ),
	Sample Size( :SampleSize )
);

```

### Perform Principal Component Analysis to identify underlying factors influencing multiple quality control metrics in Steam Turbine Historical data.

```jsl

// Open data table
dt = Open("$Sample_Data/Quality Control/Steam Turbine Historical.jmp");
// Principal Component Analysis
Multivariate Control Chart(
	Y(
		:Fuel, :Steam Flow, :Steam Temp,
		:MW, :Cool Temp, :Pressure
	)
) << Save T Square <<
Save Principal Components;
Current Data Table() <<
New Column( :PCA Column,
	Continuous,
	Formula(
		:Prin1 ^ 2 + :Prin2 ^ 2 + :Prin3
		 ^ 2 + :Prin4 ^ 2 + :Prin5 ^ 2
		+:Prin6 ^ 2
	)
);

```

### Fit a standard least squares model with multiple effects and generate a profiler plot.

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

### Perform standard least squares regression analysis with minimal report emphasis and an alpha level of 0.05.

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

### Create a scatterplot matrix with density ellipses and color map on correlations for multiple variables in a multivariate analysis.

```jsl

// Open data table
dt = Open("$Sample_Data/Tablet Production.jmp");
// Multivariate
Multivariate(
	Y(
		:Disso, :Mill Time, :Blend Time,
		:Blend Speed, :Force,
		:Coating Viscosity, :Inlet Temp,
		:Exhaust Temp, :Spray Rate,
		:Atomizer Pressure
	),
	Estimation Method( "Row-wise" ),
	Scatterplot Matrix(
		Density Ellipses( 1 ),
		Shaded Ellipses( 0 ),
		Vertical( 1 ),
		Ellipse Color( 3 )
	),
	Color Map On Correlations( 1 )
);

```

### Perform hierarchical cluster analysis on crude death rate and crude birth rate using Ward's method and geometric spacing scaling with 14 clusters.

```jsl

// Open data table
dt = Open("$Sample_Data/World Demographics.jmp");
// Hierarchical Cluster: Crude Death Rate and Crude Birth Rate
Hierarchical Cluster(
	Y(
		:"Crude Death Rate (1000)"n,
		:"Crude Birth Rate (1000)"n
	),
	Method( "Ward" ),
	Standardize( 1 ),
	Color Clusters( 1 ),
	Mark Clusters( 1 ),
	Dendrogram Scale(
		"Geometric Spacing"
	),
	Number of Clusters( 14 )
);

```


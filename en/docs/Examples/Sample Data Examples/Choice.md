# Choice

## Example 1
> **Summary**: Text explorer with term selection

<!-- Keywords: #Choice, #TermSelection, #TextExplorer, #Column, #columns -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Chips.jmp");
// Text Explorer - Term Selection
Text Explorer(
	Text Columns(
		:Potato Chip Product Review
	),
	Term Selection(
		Show Term Cloud( 1 ),
		Models(
			Model(
				Response Column(
					:Buy again?
				),
				DTM Size( 20 ),
				Target Levels(
					Target String(
						"Yes"
					)
				)
			),
			Current Model Settings(
				Response Column(
					:Buy again?
				),
				DTM Size( 20 ),
				Target Levels(
					Target String(
						"Yes"
					)
				)
			)
		),
		Model Choice( 1 )
	),
	Tokenizing( "Basic Words" ),
	Treat Numbers as Words( 1 ),
	Language( "English" )
);
```

## Example 2
> **Summary**: Generate a 3d surface plot

<!-- Keywords: #Choice, #Response, #SurfacePlot, #columns, #ControlPanel -->

**Code:**
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

## Example 3
> **Summary**: Perform choice modeling with profile effects including Disk Size, Speed, Battery Life, and Price.

<!-- Keywords: #Choice, #Effects, #Grouping, #ID, #ProfileDataTable -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Laptop Design.jmp");
// Choice
Choice(
	Profile DataTable( "Laptop Design" ),
	Profile Grouping( :Choice Set ),
	Profile ID( :Response Indicator ),
	Profile Effects(
		:Disk Size, :Speed, :Battery Life,
		:Price
	),
	Launch Dialog
);
```

## Example 4
> **Summary**: Perform a choice analysis on a laptop survey dataset using the Choice function, including profile grouping, profile ID, and profile effects.

<!-- Keywords: #Choice, #Effects, #Grouping, #ID, #ProfileDataTable -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Laptop Results.jmp");
// Choice
Choice(
	Profile DataTable( "Laptop Results" ),
	Profile Grouping(
		:Respondent, :Survey, :Choice Set
	),
	Profile ID( :Response Indicator ),
	Profile Effects(
		:Disk Size, :Speed, :Battery Life,
		:Price
	),
	Launch Dialog
);
```

## Example 5
> **Summary**: Perform a conditional logistic regression analysis using the Choice platform to adjust for confounding variables.

<!-- Keywords: #Choice, #DataTable, #Effects, #Grouping, #ID -->

**Code:**
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

## Example 6
> **Summary**: Create a 3D surface plot to visualize the relationship between Yield, Reaction Temperature, and Reaction Time using the First-Order Kinetics dataset.

<!-- Keywords: #Choice, #Frame3D, #SurfacePlot, #columns, #ControlPanel -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/First-Order Kinetics.jmp");
// Surface Plot
Surface Plot(
	Columns( :Yield ),
	Control Panel( 0 ),
	Datapoints Choice( "Points" ),
	Formula( "Yield" ),
	Surface Color Method(
		"Solid", "Solid", "Solid",
		"Solid"
	),
	SetVariableAxis(
		Reaction Temperature,
		Axis Data(
			{Scale( "Linear" ),
			Format( "Best" ),
			Min( 517.5 ), Max( 542.5 ),
			Inc( 5 )}
		)
	),
	SetVariableAxis(
		Reaction Time,
		Axis Data(
			{Scale( "Linear" ),
			Format( "Best" ),
			Min( 0.075 ), Max( 0.325 ),
			Inc( 0.05 )}
		)
	),
	SetZAxis(
		Yield,
		Current Value( 0.425 ),
		Axis Data(
			{Scale( "Linear" ),
			Format( "Best" ), Min( 0.15 ),
			Max( 0.7 ), Inc( 0.1 )}
		)
	),
	Frame3D(
		Set Hide Lights Border( 1 ),
		Set Rotation( -54, 0, 38 )
	)
);
```

## Example 7
> **Summary**: Perform choice modeling with Firth bias-adjusted estimates and likelihood ratio tests using the Choice platform.

<!-- Keywords: #Choice, #Profiler, #Effects, #Goal, #Grouping -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Laptop Profile.jmp");
// Choice
Open( "$SAMPLE_DATA/Laptop Runs.jmp" );
Choice(
	Response DataTable( Laptop Runs ),
	Profile DataTable( Laptop Profile ),
	Response Profile ID Chosen(
		:Response
	),
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
	"Firth Bias-adjusted Estimates"n( 1 ),
	Likelihood Ratio Tests( 1 ),
	Profiler(
		1,
		Utility <<
		Response Limits(
			{Lower( -2, 0.066 ),
			Middle( 0, 0.5 ),
			Upper( 2, 0.9819 ),
			Goal( Maximize ),
			Importance( 1 )}
		),
		Term Value(
			hard disk( "80 GB" ),
			speed( "2.0 GHz" ),
			battery life( "6 hours" ),
			price( "$1,200" )
		)
	)
);
```

## Example 8
> **Summary**: Perform choice analysis with gender effects using the Choice function.

<!-- Keywords: #Choice, #DataTable, #Effects, #Grouping, #ID -->

**Code:**
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

## Example 9
> **Summary**: Build a choice reduced model using the Choice platform with response data from the Laptop Runs table, profile data from the Laptop Profile table, and subject data from the Laptop Subjects table, including response subject ID, response grouping, response profile ID choices, profile ID, profile grouping, profile effects, subject subject ID, subject effects, and removing a specific interaction effect using Firth bias-adjusted estimates and likelihood ratio tests.

<!-- Keywords: #Choice, #DataTable, #Effects, #Grouping, #History -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Laptop Runs.jmp");
// Choice Reduced Model
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
	Remove Subject Effects(
		Speed * Gender
	),
	History( Remove Subject Effects ),
	"Firth Bias-Adjusted Estimates"n( 1 ),
	Response Profile ID Chosen(
		:Response
	),
	Likelihood Ratio Tests( 1 )
);
```

## Example 10
> **Summary**: Perform Hierarchical Bayesian Analysis for Choice Modeling with Firth Bias-Adjusted Estimates.

<!-- Keywords: #Choice, #DataTable, #Effects, #Grouping, #HierarchicalBayes -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Laptop Runs.jmp");
// Choice with Hierarchical Bayes
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
	Hierarchical Bayes( 1 ),
	Hierarchical Bayes( 1 ),
	"Firth Bias-Adjusted Estimates"n( 1 ),
	Response Profile ID Chosen(
		:Response
	)
);
```

## Example 11
> **Summary**: Perform a choice model analysis using the Choice function .

<!-- Keywords: #Choice, #Effects, #Freq, #ID, #LikelihoodRatioTests -->

**Code:**
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

## Example 12
> **Summary**: Analyze consumer choice behavior using the Choice platform, incorporating profile and subject effects and accommodating unselected options, with Firth bias-adjustment and likelihood ratio tests.

<!-- Keywords: #Choice, #Effects, #Grouping, #ID, #LikelihoodRatioTests -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Pizza Combined No Choice.jmp");
// Choice
Choice(
	One Table( 1 ),
	Response Subject ID( :Subject ),
	Profile ID( :Indicator ),
	Profile Grouping( :Subject, :Trial ),
	Profile Effects(
		:Crust, :Cheese, :Topping
	),
	Subject Effects( :Gender ),
	"Firth Bias-adjusted Estimates"n( 1 ),
	Respondents Are Allowed to Choose None(
		1
	),
	Likelihood Ratio Tests( 1 )
);
```

## Example 13
> **Summary**: Construct a choice model using the One Table option, Subject ID, Choice Set ID, Profile ID, and Profile Effects for Crust, Cheese, and Topping from the Pizza Combined.jmp dataset. Additionally, enable Firth Bias-Adjusted Estimates and Likelihood Ratio Tests.

<!-- Keywords: #Choice, #ChoiceSetID, #Effects, #ID, #LikelihoodRatioTests -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Pizza Combined.jmp");
// Choice
Choice(
	One Table( 1 ),
	Subject ID( :Subject ),
	Choice Set ID( :Trial ),
	Profile ID( :Indicator ),
	Profile Effects(
		:Crust, :Cheese, :Topping
	),
	"Firth Bias-Adjusted Estimates"n( 1 ),
	Likelihood Ratio Tests( 1 )
);
```

## Example 14
> **Summary**: Open and configure choice models using the Choice platform  with specified response, profile, and subject data tables, including response and subject IDs, profile effects, and subject effects.

<!-- Keywords: #Choice, #Effects, #ID, #ProfileDataTable, #ProfileEffects -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Pizza Profiles.jmp");
// Choice
Open(
	"$SAMPLE_DATA/Pizza Responses.jmp"
);
Open( "$SAMPLE_DATA/Pizza Subjects.jmp" );
Choice(
	Response DataTable( Pizza Responses ),
	Profile DataTable( Pizza Profiles ),
	Subject DataTable( Pizza Subjects ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices(
		:Choice1, :Choice2
	),
	Profile ID( :ID ),
	Profile Effects(
		:Crust, :Cheese, :Topping
	),
	Subject Subject ID( :Subject ),
	Subject Effects( :Gender )
);
```

## Example 15
> **Summary**: Construct a choice model using the Profiles, Responses, and Subjects data tables, and specify the response, profile, and subject effects. Adjust for Firth bias and include likelihood ratio tests.

<!-- Keywords: #Choice, #DataTable, #Effects, #ID, #LikelihoodRatioTests -->

**Code:**
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

## Example 16
> **Summary**: Create a surface plot visualizing the relationship between reaction temperature, reaction time, and yield.

<!-- Keywords: #Choice, #Response, #SurfacePlot, #BackgroundColor, #columns -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Stochastic Optimization.jmp");
// Surface Plot
Surface Plot(
	Columns( :Yield ),
	Control Panel( 0 ),
	Hide Lights Border( 1 ),
	Scale response axes independently(
		1
	),
	Datapoints Choice( "Points" ),
	XRotate( -67.3776687507792 ),
	YRotate( -5.03482899952444 ),
	ZRotate( 52.4071239021159 ),
	Formula( "Yield" ),
	Response( :Yield ),
	SetXVariable( Reaction Temperature ),
	SetYVariable( Reaction Time ),
	Graph( Background Color( 0, 0, 0 ) ),
	Graph Size( 443, 443 )
);
```


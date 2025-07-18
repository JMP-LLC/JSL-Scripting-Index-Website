# DOE



## Associated Constructors

### DOE

**Syntax:** DOE

## Columns

### Factor

**Syntax:** obj &lt;&lt; Factor( column(s) )

### Response

**Syntax:** obj &lt;&lt; Response( column(s) )

### X

**Syntax:** obj &lt;&lt; X( column(s) )

### Y

**Syntax:** obj &lt;&lt; Y( column(s) )

## Item Messages

### A-Optimality Parameter Weights

**Syntax:** obj &lt;&lt; A-Optimality Parameter Weights

**Description:** Sets the weights to be used for creating an A-optimal design.

**JMP Version Added:** 14

```jsl

DOE(
	Custom Design,
	{Add Factor( Continuous, -1, 1, "X1", 0 ), Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Continuous, -1, 1, "X3", 0 ), Add Term( {1, 0} ), Add Term( {1, 1} ),
	Add Term( {2, 1} ), Add Term( {3, 1} ), Add Term( {1, 1}, {2, 1} ),
	Add Term( {1, 1}, {3, 1} ), Add Term( {2, 1}, {3, 1} ), Set Sample Size( 14 ),
	Optimality Criterion( "Make A-Optimal Design"n ),
	"A-Optimality Parameter Weights"n( [1 1 1 1 0.1 0.1 0.1] )}
);

```

### ALT Factor Settings

**Syntax:** obj &lt;&lt; ALT Factor Settings

**Description:** For the given factor number in an accelerated life test plan, allows specification of factor name, number of levels, factor transformation, usage conditions and test conditions.

```jsl

DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),
	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Number of Units( 150 )}
);

```

### ALT Plan Setup

**Syntax:** obj &lt;&lt; ALT Plan Setup( 1|2|3 )

**Description:** Specifies the initial choice of model for an accelerated life test plan.

```jsl

DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),
	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Number of Units( 150 )}
);

```

### Add Alias Term

**Syntax:** obj &lt;&lt; Add Alias Term

**Description:** Adds an alias term to the list of alias terms. Specify the factor number and power for each effect in a list. Create interactions by separating effects with commas.

```jsl

d = DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 )
);
d << Add Alias Term( {1, 1}, {2, 1} );
d << Add Alias Term( {1, 2} );

```

### Add Constraint

**Syntax:** obj &lt;&lt; Add Constraint

**Description:** Adds linear constraints through a matrix. Each row represents a constraint. The last column is for values on the right side of the inequality constraints. In JSL, the inequality constraints must be less than or equal to the values on the right.

```jsl

DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Continuous, -1, 1, "X3", 0 ),
	Add Constraint( [1 1 0 1, 1 0 1 1] ),
	Add Term( {1, 0} )
);

```

### Add Factor

**Syntax:** obj &lt;&lt; Add Factor( Continuous|Discrete Numeric|Blocking|Constant|Categorical|Mixture )

**Description:** Adds a factor of the specified type and optional arguments. If nothing is specified, this command adds a continuous factor.

```jsl

d = DOE( Custom Design );
d << Add Factor( Continuous, -1, 1, "X1", 0 );
d << Add Factor( Discrete Numeric, {1, 2, 3}, "X2", 0 );
d << Add Factor( Categorical, {"L1", "L2"}, "X3", 0 );
d << Add Factor( Blocking, 8, "X4" );
d << Add Factor( Constant, 3, "X5" );

```

### Add Functional Response

**Syntax:** obj &lt;&lt; Add Functional Response

**Description:** Adds a functional response with the specified name, number of measurements per run, and values.

**JMP Version Added:** 15

```jsl

DOE(
	Custom Design,
	Add Response( Maximize, "Y", ., ., . ),
	Add Functional Response( "Y", 5, {1, 2, 3, 4, 5} ),
	Set Random Seed( 46055034 ),
	Simulate Responses( 0 ),
	Save X Matrix( 0 )
);

```

### Add Potential Term

**Syntax:** obj &lt;&lt; Add Potential Term

**Description:** Adds an If Possible term to the list of model terms. Specify the factor number and power for each effect in a list. Create interactions by separating effects with commas.

```jsl

d = DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 )
);
d << Add Potential Term( {1, 1}, {2, 1} );
d << Add Potential Term( {1, 2} );

```

### Add Response

**Syntax:** obj &lt;&lt; Add Response( goal, name, lower limit, upper limit, importance, lower detection limit, upper detection limit )

**Description:** Adds a response with the specified goal, name, lower limit, upper limit, and importance.

**Example 1**

```jsl

DOE( Custom Design, Add Response( Match Target, "Y", 10, 30, 1 ) );

```

**Example 2**

```jsl

DOE( Custom Design, Add Response( Match Target, "Y", ., ., 1, 10, 30 ) );

```

### Add Term

**Syntax:** obj &lt;&lt; Add Term

**Description:** Adds a "Necessary" term to list of the model terms. Effects are specified by {factor number, power}. Interactions can be created by separating effects by commas.

```jsl

d = DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 )
);
d << Add Term( {1, 1}, {2, 1} );
d << Add Term( {1, 2} );

```

### Additional Designs

**Syntax:** obj &lt;&lt; Additional Designs

**Description:** Specify up to nine additional designs to be compared to the reference design.

**JMP Version Added:** 14

```jsl

DOE(
	Custom Design,
	Add Factor,
	Add Factor,
	Add Factor,
	Set Sample Size( 12 ),
	Make Design,
	Make Table
);
DOE( Custom Design, Add Factor, Add Factor, Add Factor, Make Design, Make Table );
DOE(
	Custom Design,
	Add Factor,
	Add Factor,
	Add Factor,
	Set Sample Size( 4 ),
	Make Design,
	Make Table
);
DOE(
	Compare Designs,
	Reference Design( "Custom Design", X( :X1, :X2, :X3 ) ),
	Additional Designs(
		"Custom Design 2",
		X( :X1, :X2, :X3 ),
		"Custom Design 3",
		X( :X1, :X2, :X3 )
	)
);

```

### Allow covariate rows to be repeated

**Syntax:** obj &lt;&lt; Allow covariate rows to be repeated( state=0|1 )

**Description:** Specifies if covariate rows are allowed to be repeated in the design.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
DOE(
	Custom Design,
	Add Response( Maximize, "Y", ., ., . ),
	Add Factor( Covariate, :sex, 0 ),
	Add Factor( Covariate, :height, 0 ),
	Add Factor( Covariate, :weight, 0 ),
	Add Term( {1, 0} ),
	Add Term( {1, 1} ),
	Add Term( {2, 1} ),
	Add Term( {3, 1} ),
	Enforce Use of Selected Covariate Rows( 1 ),
	Allow covariate rows to be repeated( 1 ),
	Select Covariate Rows( [1 2 3 4] ),
	Set Sample Size( 24 )
);

```

### Augment Method

**Syntax:** obj &lt;&lt; Augment Method( Replicate|Centerpoints|Fold Over|Add Axial|Augment )

**Description:** Specifies the type of augment method and its parameters.

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Augment Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Augment Method( Augment );
d << Set Sample Size( 24 );
d << Make Design;

```

**Example 2**

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/2x3x4 Factorial.jmp" );
d = DOE( Augment Design, X( :X1, :X2, :X3 ), Y( :Y ) );
d << Augment Method( Replicate, 2 );

```

**Example 3**

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Augment Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Augment Method( Centerpoints, 3 );

```

**Example 4**

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Augment Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Augment Method( Fold Over, [1 2] );

```

**Example 5**

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Augment Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Augment Method( Add Axial, 1, 2 );

```

### Blocks

**Syntax:** obj &lt;&lt; Blocks

**Description:** Specifies the block size for a balanced incomplete block design (BIBD).

**JMP Version Added:** 14

```jsl

d = DOE( Balanced Incomplete Block Design, Treatments( 3, {"L1", "L2", "L3"} ) );
d << Blocks( 2 );
d << Make Design;

```

### Center Points

**Syntax:** obj &lt;&lt; Center Points

**Description:** Specifies the number of center points.

**Example 1**

```jsl

d = DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 )
);
d << Make Model( Linear );
d << Center Points( 2 );

```

**Example 2**

```jsl

DOE(
	Definitive Screening Design,
	Add Factor,
	Add Factor,
	Add Factor,
	Add Factor,
	Add Factor,
	Add Factor,
	Show Blocking Options( 1, 2 ),
	Number of Extra Runs( 4 ),
	Center Points( 1 )
);

```

### Change Anticipated Coefficients

**Syntax:** obj &lt;&lt; Change Anticipated Coefficients

**Description:** Change the Anticipated Coefficients in Power Analysis.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Change Anticipated Coefficients( [1 2 3 4 2 2 2 3 3 3] );

```

### Change Factor Settings

**Syntax:** obj &lt;&lt; Change Factor Settings

**Description:** Specifies the minimum, maximum, and name of the continuous or mixture factor that you included in the first argument. Most useful for platforms that initially have predefined factors.

**Example 1**

```jsl

d = DOE( Response Surface Design );
d << Change Factor Settings( 1, 2, 3, "A" );
d << Change Factor Settings( 2, 0, 4 );

```

**Example 2**

```jsl

d = DOE( Mixture Design );
d << Change Factor Settings( 1, 0.1, 0.4, "A" );
d << Change Factor Settings( 3, 0, 0.8, "C" );

```

### Check Inscribe

**Syntax:** obj &lt;&lt; Check Inscribe

**Description:** Rescales the design so that axial points are at the low and high ends of the range.

```jsl

d = DOE( Response Surface Design, Make Design( 2 ) );
d << Set Axial Choice( 2 );
d << Check Inscribe;

```

### Choice Design Table Output

**Syntax:** obj &lt;&lt; Choice Design Table Output( "Separate"|"Combined" )

**Description:** Specifies how to create a data table for a choice design.

```jsl

DOE(
	Choice Design,
	{Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ),
	Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ), Add Term( {1, 1} ), Add Term( {2, 1} ),
	Set Prior Mean Choice( [0 0] ), Set Prior Variance Matrix( [1 0, 0 1] ),
	Set Number of Attributes( 2 ), Set Number of Profiles( 2 ),
	Set Number of Choice Sets( 8 ), Set Number of Surveys( 1 ),
	Set Expected Number of Respondents( 1 ), Make Design,
	Choice Design Table Output( Combined )}
);

```

### D Efficiency Weight

**Syntax:** obj &lt;&lt; D Efficiency Weight

**Description:** Use this option to control the relative importance of D-efficiency and reduction of aliasing. Supply a number between zero and one.

```jsl

DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	D Efficiency Weight( 0.5 ),
	Make Design
);

```

### Design Search Time

**Syntax:** obj &lt;&lt; Design Search Time( number )

**Description:** Specifies the number of seconds to search for a design.

```jsl

DOE(
	Custom Design,
	{Add Factor( Continuous, -1, 1, "X1", 0 ), Add Factor( Continuous, -1, 1, "X2", 0 ),
	Set Sample Size( 7 ), Design Search Time( 8 ), Make Design}
);

```

### Disallowed Combinations

**Syntax:** obj &lt;&lt; Disallowed Combinations

**Description:** Enables you to supply a script that returns true for any factor combinations that should be excluded from your design.

```jsl

DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ),
	Number of Starts( 100 ),
	Disallowed Combinations( X1 > 0.5 & X2 == 2 ),
	Make Design
);

```

### Discrete Numeric Powers Set to Necessary

**Syntax:** obj &lt;&lt; Discrete Numeric Powers Set to Necessary( state=0|1 )

**Description:** Specifies if powers in discrete numeric factors should be necessary model terms.

```jsl

DOE(
	Custom Design,
	Add Factor( Discrete Numeric, {1, 2, 3}, "X1", 0 ),
	Add Factor( Discrete Numeric, {1, 2, 3}, "X2", 0 ),
	Discrete Numeric Powers Set to Necessary( 1 ),
	Make Model( Linear )
);

```

### Distribution Choice

**Syntax:** obj &lt;&lt; Distribution Choice

**Description:** Specifies the distribution for an accelerated life test plan.

```jsl

DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),
	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Number of Units( 150 )}
);

```

### Enforce Use of Selected Covariate Rows

**Syntax:** obj &lt;&lt; Enforce Use of Selected Covariate Rows( state=0|1 )

**Description:** Specifies if all selected covariate rows should be included in the design.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
DOE(
	Custom Design,
	Add Response( Maximize, "Y", ., ., . ),
	Add Factor( Covariate, :sex, 0 ),
	Add Factor( Covariate, :height, 0 ),
	Add Factor( Covariate, :weight, 0 ),
	Add Term( {1, 0} ),
	Add Term( {1, 1} ),
	Add Term( {2, 1} ),
	Add Term( {3, 1} ),
	Enforce Use of Selected Covariate Rows( 1 ),
	Allow covariate rows to be repeated( 1 ),
	Select Covariate Rows( [1 2 3 4] ),
	Set Sample Size( 24 )
);

```

### FFF Optimality Criterion

**Syntax:** obj &lt;&lt; FFF Optimality Criterion( "MaxPro"|"Centroid" )

**Description:** Specifies the criterion used in the design. Recommended is the default value.

**Example 1**

```jsl

DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Continuous, -1, 1, "X3", 0 ),
	Optimality Criterion( "Make I-optimal Design" ),
	Make Design
);

```

**Example 2**

```jsl

DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Continuous, -1, 1, "X3", 0 ),
	Optimality Criterion( 2 ),
	Make Design
);

```

### Find Subset

**Syntax:** obj &lt;&lt; Find Subset

**Description:** Finds the D-optimal subset of an Extreme Vertices design.

```jsl

d = DOE( Mixture Design, Add Factor( Mixture, 0.1, 1, "X4", 0 ) );
d << Mixture Design Type( Extreme Vertices, 3 );
d << Find Subset( 10 );

```

### GOSSDDetails

**Syntax:** obj &lt;&lt; GOSSDDetails

**Description:** Returns the current factor settings as a list.

**JMP Version Added:** 15

```jsl

d = DOE( Group Orthogonal Supersaturated Design );
Show( d << GOSSDDetails );

```

### GOSSDStructure

**Syntax:** obj &lt;&lt; GOSSDStructure

**Description:** Specifies the structure of a GOSSD

**JMP Version Added:** 15

```jsl

d = DOE( Group Orthogonal Supersaturated Design );
d << GOSSDStructure( 6, 8 );

```

### Get Alias Matrix

**Syntax:** obj &lt;&lt; Get Alias Matrix

**Description:** Returns the alias matrix from design evaluation.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Get Alias Matrix;

```

### Get Design Diagnostics

**Syntax:** obj &lt;&lt; Get Design Diagnostics

**Description:** Return D-Efficiency, G-Efficiency, A-Efficiency and Average Variance of Prediction.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Get Design Diagnostics;

```

### Get Effect Power

**Syntax:** obj &lt;&lt; Get Effect Power

**Description:** Return vector of powers for effect estimates.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/2x3x4 Factorial.jmp" );
d = DOE( Evaluate Design, X( :X1, :X2, :X3 ), Y( :Y ) );
d << Get Effect Power;

```

### Get Estimation Efficiencies

**Syntax:** obj &lt;&lt; Get Estimation Efficiencies

**Description:** Returns a vector for the increased width of each parameter estimate compared to an ideal design.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Get Estimation Efficiencies;

```

### Get MaxPro Values

**Syntax:** obj &lt;&lt; Get MaxPro Values

**Description:** Returns the MaxPro values for a fast-flexible design, including any subdesigns based on levels of a categorical factor.

**JMP Version Added:** 14

```jsl

d = DOE(
	Space Filling Design,
	{Add Factor( Continuous, -1, 1, "X1", 0 ), Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Categorical, {"L1", "L2", "L3", "L4"}, "X3", 0 ),
	FFF Optimality Criterion( MaxPro ), MaxPro Categorical Weight( 4 ),
	Space Filling Design Type( Fast Flexible Filling, 100 )}
);
d << Get MaxPro Values;

```

### Get Number of Random Starts

**Syntax:** obj &lt;&lt; Get Number of Random Starts

**Description:** Returns the number of random starts used in design generation.

**JMP Version Added:** 15

### Get Power

**Syntax:** obj &lt;&lt; Get Power

**Description:** Return vector of powers for parameter estimates.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Get Power;

```

### Get Prediction Variances

**Syntax:** obj &lt;&lt; Get Prediction Variances

**Description:** Returns the vector of prediction variances from the Fraction of Design Space Plot.

**JMP Version Added:** 14

```jsl

d = DOE(
	Custom Design,
	{Add Factor( Continuous, -1, 1, "X1", 0 ), Add Factor( Continuous, -1, 1, "X2", 0 ),
	Set Sample Size( 7 ), Design Search Time( 8 ), Set Number of FDS points( 20000 ),
	Make Design}
);
d << Get Prediction Variances;

```

### Get X Matrix

**Syntax:** obj &lt;&lt; Get X Matrix

**Description:** Returns the design matrix (also called the X matrix).

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Get X Matrix;

```

### Group New Runs Into Separate Block

**Syntax:** obj &lt;&lt; Group New Runs Into Separate Block

**Description:** Adds a blocking factor, which groups new runs into separate blocks when augmenting a design.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Augment Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Group New Runs Into Separate Block;

```

### Load Constraints

**Syntax:** obj &lt;&lt; Load Constraints

**Description:** Load a previously saved factor constraints table for use in this experiment.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Diamond Constraints.jmp" );
d = DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Term( {1, 0} ),
	Load Constraints
);

```

### Load Design

**Syntax:** obj &lt;&lt; Load Design

**Description:** Load Design

```jsl

d = DOE( Custom Design );
d << Load Design();

```

### Load Factors

**Syntax:** obj &lt;&lt; Load Factors

**Description:** Load a previously saved factors table for use in this experiment.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Factors.jmp" );
DOE( Custom Design, Load Factors );

```

### Load Responses

**Syntax:** obj &lt;&lt; Load Responses

**Description:** Loads a previously saved data table of responses.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Response.jmp" );
DOE( Custom Design, Load Responses );

```

### Local Design

**Syntax:** obj &lt;&lt; Local Design( state=0|1 )

**Description:** Specifies if local design for the prior mean should be created.

```jsl

DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( 2, {5, 200, 200} ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Local Design( 0 ),
	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Inspection Times( [200 400 600 800 1000] ),
	Set Number of Units( 150 ), Set Candidate Runs( [90 0 150, 100 0 150, 110 0 150] )}
);

```

### Make Design

**Syntax:** obj &lt;&lt; Make Design

**Description:** Creates the design that you specified in the script.

```jsl

d = DOE( Custom Design, Add factor, Add factor, Add factor );
d << Make Model( RSM );
d << Make Design;

```

### Make Model

**Syntax:** obj &lt;&lt; Make Model( Linear|Interactions|RSM )

**Description:** Adds terms to the list of model terms for the specified model.

**Example 1**

```jsl

d = DOE( Custom Design, Add Factor, Add Factor, Add Factor );
d << Make Model( RSM );

```

**Example 2**

```jsl

d = DOE( Custom Design, Add Factor, Add Factor, Add Factor );
d << Make Model( Interactions );

```

### Make Strip Plot Design

**Syntax:** obj &lt;&lt; Make Strip Plot Design

**Description:** Specifies a strip plot design when hard-to-change factors vary independently from very hard-to-change factors.

```jsl

d = DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 2 ),
	Add Factor( Continuous, -1, 1, "X2", 1 ),
	Add Factor( Continuous, -1, 1, "X3", 0 )
);
d << Set N Whole Plots( 4 );
d << Make Strip Plot Design;

```

### Make Table

**Syntax:** obj &lt;&lt; Make Table

**Description:** Creates a data table from the current design.

```jsl

d = DOE( Custom Design, Add factor, Add factor, Add factor );
d << Make Design;
d << Make Table;

```

### Make Test Plan

**Syntax:** obj &lt;&lt; Make Test Plan

**Description:** Creates the test plan for an accelerated life test plan.

```jsl

DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Monitoring at Intervals", {5, 200, 200} ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),
	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Inspection Times( [200 400 600 800 1000] ),
	Set Number of Units( 150 ), Set Candidate Runs( [90 0 150, 100 0 150, 110 0 150] ),
	Make Design, Make Test Plan}
);

```

### MaxPro Categorical Weight

**Syntax:** obj &lt;&lt; MaxPro Categorical Weight

**Description:** Specifies MaxPro weight. Values larger than 1 increase the separation of points that have the same categorical level.

**JMP Version Added:** 14

```jsl

DOE(
	Space Filling Design,
	{Add Factor( Continuous, -1, 1, "X1", 0 ), Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Categorical, {"L1", "L2", "L3", "L4"}, "X3", 0 ),
	FFF Optimality Criterion( MaxPro ), MaxPro Categorical Weight( 4 ),
	Space Filling Design Type( Fast Flexible Filling, 100 )}
);

```

### Mixture Design Type

**Syntax:** obj &lt;&lt; Mixture Design Type( Simplex Centroid|Simplex Lattice|ABCD|Extreme Vertices|Space Filling )

**Description:** Specifies the type of mixture design. The default parameters are used unless you specify the parameter as the second argument.

**Example 1**

```jsl

d = doe( Mixture Design );
d << Mixture Design Type( Simplex Centroid, 2 );

```

**Example 2**

```jsl

d = doe( Mixture Design );
d << Mixture Design Type( Simplex Lattice, 4 );

```

**Example 3**

```jsl

d = doe( Mixture Design );
d << Mixture Design Type( ABCD );

```

**Example 4**

```jsl

d = doe( Mixture Design );
d << Change Factor Settings( 1, .05, .25 );
d << Mixture Design Type( Extreme Vertices, 3 );

```

**Example 5**

```jsl

d = doe( Mixture Design );
d << Mixture Design Type( Space Filling, 25 );

```

### Mixture Sum

**Syntax:** obj &lt;&lt; Mixture Sum

**Description:** Use this option when you want to express the sum of all the ingredients to be other than 1. The mixture total is the sum of all the ingredient amounts.

```jsl

DOE(
	Custom Design,
	Mixture Sum( 50 ),
	Add Factor( Mixture, 10, 25, "X1", 0 ),
	Add Factor( Mixture, 0, 15, "X2", 0 ),
	Add Factor( Mixture, 25, 40, "X3", 0 ),
	Make Design
);

```

### Nesting Structure

**Syntax:** obj &lt;&lt; Nesting Structure

**Description:** Specifies the nesting structure of the design. Use a bracketed list to indicate nesting (first element is nesting factor, second element is bracketed list of nested factors or structures). Use horizontal concatenation (&apos;||&apos;) to indicate crossed factors or structures.

```jsl

DOE(
	MSA Design,
	Add Factor( Categorical, {"L1", "L2"}, "X1", MSA( 4, 1, 1 ) ),
	Add Factor( Categorical, {"L1", "L2"}, "X2", MSA( 4, 1, 1 ) ),
	Add Factor( Categorical, {"L1", "L2"}, "X3", MSA( 4, 1, 1 ) ),
	Nesting Structure( {"X1", {"X2"}} || "X3" )
);

```

### Number of Column Starts

**Syntax:** obj &lt;&lt; Number of Column Starts

**Description:** Specifies the number of times that random columns are optimized for each factor of a main effects screening design.

```jsl

DOE(
	Screening Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Continuous, -1, 1, "X3", 0 ),
	Screening Type( 1 ),
	Number of Column Starts( 100 ),
	Set Sample Size( 12 ),
	Make Design
);

```

### Number of Extra Runs

**Syntax:** obj &lt;&lt; Number of Extra Runs

**Description:** Specifies the number of extra runs to include in a definitive screening design.

```jsl

DOE(
	Definitive Screening Design,
	Add Factor,
	Add Factor,
	Add Factor,
	Add Factor,
	Add Factor,
	Add Factor,
	Show Blocking Options( 1, 2 ),
	Number of Extra Runs( 4 )
);

```

### Number of Starts

**Syntax:** obj &lt;&lt; Number of Starts

**Description:** Specifies the number of times the design is regenerated to optimize the overall design.

```jsl

DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Continuous, -1, 1, "X3", 0 ),
	Number of Starts( 1000 ),
	Make Design
);

```

### Optimality Criterion

**Syntax:** obj &lt;&lt; Optimality Criterion( "Recommended"|"Make D-Optimal Design"|"Make I-Optimal Design"|"Make A-Optimal Design"|"Make Alias Optimal Design" )

**Description:** Specifies the criterion used in the design. Recommended is the default value.

**Example 1**

```jsl

DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Continuous, -1, 1, "X3", 0 ),
	Optimality Criterion( "Make I-optimal Design" ),
	Make Design
);

```

**Example 2**

```jsl

DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Continuous, -1, 1, "X3", 0 ),
	Optimality Criterion( 2 ),
	Make Design
);

```

### Order Column

**Syntax:** obj &lt;&lt; Order Column

**Description:** Requests an order column when the data table is created.

**JMP Version Added:** 14

```jsl

d = DOE( Balanced Incomplete Block Design );
d << Treatments( 3, {"L1", "L2", "L3"} );
d << Make Design;
d << OrderColumn( 1 );

```

### Prior Parameter Variance

**Syntax:** obj &lt;&lt; Prior Parameter Variance

**Description:** Use this option to control the weight used for If Possible terms in a model. Higher values mean more prior information and smaller variance. The variances are the reciprocals of the entered values.

```jsl

DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Potential Term( {1, 1} ),
	Add Potential Term( {2, 1} ),
	Add Potential Term( {1, 1}, {2, 1} ),
	Prior Parameter Variance( [0, 1, 2, 6] ),
	Make Design
);

```

### Prior Specification Choice

**Syntax:** obj &lt;&lt; Prior Specification Choice

**Description:** Sets the option for specifying prior parameters, where 1 indicates Specify Intercept and 2 indicates Specify Quantile.

```jsl

DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Prior Specification Choice( 1 ), Set Prior Mean ALT( [-40 1.5 2] ),
	Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),
	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Number of Units( 150 )}
);

```

### Reference Design

**Syntax:** obj &lt;&lt; Reference Design

**Description:** Specify the reference design for design comparison.

**JMP Version Added:** 14

```jsl

DOE(
	Custom Design,
	Add Factor,
	Add Factor,
	Add Factor,
	Set Sample Size( 12 ),
	Make Design,
	Make Table
);
DOE( Custom Design, Add Factor, Add Factor, Add Factor, Make Design, Make Table );
DOE(
	Custom Design,
	Add Factor,
	Add Factor,
	Add Factor,
	Set Sample Size( 4 ),
	Make Design,
	Make Table
);
DOE(
	Compare Designs,
	Reference Design( "Custom Design", X( :X1, :X2, :X3 ) ),
	Additional Designs(
		"Custom Design 2",
		X( :X1, :X2, :X3 ),
		"Custom Design 3",
		X( :X1, :X2, :X3 )
	)
);

```

### Remove Alias Term

**Syntax:** obj &lt;&lt; Remove Alias Term

**Description:** Removes a term from the list of alias terms. Specify the factor number and power for each effect in a list. Create interactions by separating effects with commas.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Remove Alias Term( {1, 1}, {3, 1} );

```

### Remove All Alias Terms

**Syntax:** obj &lt;&lt; Remove All Alias Terms

**Description:** Removes all Alias Terms from the list of alias terms

```jsl

d = DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 )
);
d << Make Model( Linear );
d << Remove All Alias Terms;

```

### Remove Term

**Syntax:** obj &lt;&lt; Remove Term

**Description:** Removes a term from the list of model terms. Specify the factor number and power for each effect in a list. Create interactions by separating effects with commas.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Remove Term( {1, 1}, {3, 1} );
d << Remove Term( {3, 2} );

```

### Replicates

**Syntax:** obj &lt;&lt; Replicates

**Description:** Specifies the number of replicate runs. For MSA Designs, a second argument specifies the replicate structure: 0=Completely Randomized, 1=Batch Repeat, 2=Fast Repeat.

**Example 1**

```jsl

d = DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 )
);
d << Make Model( Linear );
d << Replicates( 2 );

```

**Example 2**

```jsl

d = DOE(
	MSA Design,
	{Add Response( None, "Y", ., ., . ), Add Factor(
		Categorical,
		{"L1", "L2"},
		"X1",
		MSA( 4, 1 )
	), Add Factor( Categorical, {"L1", "L2"}, "X2", MSA( 4, 1 ) ),
	Add Factor( Categorical, {"L1", "L2"}, "X3", MSA( 4, 1 ) ), Set Random Seed( 3983347 ),
	Replicates( 2, 0 ), Simulate Responses( 0 )}
);

```

### Report

**Syntax:** obj &lt;&lt; Report

**Description:** Returns a reference to the report object.

```jsl

d = DOE( Custom Design );
r = d << report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Save Constraints

**Syntax:** obj &lt;&lt; Save Constraints

**Description:** Save the factor constraints of the current experiment to a JMP table for use in another experiment

```jsl

DOE(
	Custom Design,
	Add Response( Maximize, "Y", ., ., . ),
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Continuous, -1, 1, "X3", 0 ),
	Add Constraint( [1 1 0 1, 1 0 1 1] ),
	Add Term( {1, 0} ),
	Save Constraints
);

```

### Save Factors

**Syntax:** obj &lt;&lt; Save Factors

**Description:** Save the factors you just created to a JMP table so you can use these factors for another experiment.

```jsl

DOE(
	Custom Design,
	Add Response( Match Target, "Stretch", 350, 550, 1 ),
	Add Factor( Continuous, 0.7, 1.7, "Silica", 0 ),
	Add Factor( Continuous, 1.8, 2.8, "Sulfur", 0 ),
	Add Factor( Continuous, 40, 60, "Silane", 0 ),
	Save Factors
);

```

### Save Responses

**Syntax:** obj &lt;&lt; Save Responses

**Description:** Saves the responses that you created as a JMP data table. You can load these responses in other experiments.

```jsl

DOE(
	Custom Design,
	Add Response( Match Target, "Stretch", 350, 550, 1 ),
	Add Factor( Continuous, 0.7, 1.7, "Silica", 0 ),
	Add Factor( Continuous, 1.8, 2.8, "Sulfur", 0 ),
	Add Factor( Continuous, 40, 60, "Silane", 0 ),
	Save Responses
);

```

### Save Script to Data Table

**Syntax:** obj &lt;&lt; Save Script to Data Table

**Description:** Create a Script that will reproduce this design.

### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Description:** Create a Script that will reproduce this design.

```jsl

DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Make Design,
	Save Script to Script Window
);

```

### Save X Matrix

**Syntax:** obj &lt;&lt; Save X Matrix( state=0|1 )

**Description:** Saves the design matrix (also called the X matrix) as a table property in the JMP data table that contains the design.

```jsl

DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Save X Matrix,
	Make Design,
	Make Table
);

```

### Screening Type

**Syntax:** obj &lt;&lt; Screening Type

**Description:** Specifies a main effects screening design, which is orthogonal or near orthogonal.

```jsl

d = DOE(
	Screening Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Continuous, -1, 1, "X3", 0 )
);
d << Screening Type( 1 );
d << Set Sample Size( 12 );
d << Make Design;

```

### Select Covariate Rows

**Syntax:** obj &lt;&lt; Select Covariate Rows

**Description:** Specifies the rows from the covariate table to be selected in DOE.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
DOE(
	Custom Design,
	Add Response( Maximize, "Y", ., ., . ),
	Add Factor( Covariate, :sex, 0 ),
	Add Factor( Covariate, :height, 0 ),
	Add Factor( Covariate, :weight, 0 ),
	Add Term( {1, 0} ),
	Add Term( {1, 1} ),
	Add Term( {2, 1} ),
	Add Term( {3, 1} ),
	Enforce Use of Selected Covariate Rows( 1 ),
	Allow covariate rows to be repeated( 1 ),
	Select Covariate Rows( [1 2 3 4] ),
	Set Sample Size( 24 )
);

```

### Set ALT Probability of Interest

**Syntax:** obj &lt;&lt; Set ALT Probability of Interest

**Description:** Sets the probability of interest for an accelerated life test plan.

```jsl

DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),
	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Number of Units( 150 )}
);

```

### Set ALT Time Range

**Syntax:** obj &lt;&lt; Set ALT Time Range

**Description:** Sets the time range of interest for an accelerated life test plan.

```jsl

DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Failure Probability Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),
	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Number of Units( 150 )}
);

```

### Set Average Cluster Size

**Syntax:** obj &lt;&lt; Set Average Cluster Size

**Description:** Controls number of random points for clustering a Fast Flexible Filling Design.

```jsl

DOE(
	Space Filling Design,
	Change Factor Settings( 1, -1, 1, "X1" ),
	Change Factor Settings( 2, -1, 1, "X2" ),
	Set Average Cluster Size( 100 ),
	Space Filling Design Type( Fast Flexible Filling, 50 )
);

```

### Set Axial Choice

**Syntax:** obj &lt;&lt; Set Axial Choice( 1|2|3|4 )

**Description:** Specifies the axial value settings. Use 1 for Rotatable, 2 for Orthogonal, 3 for On Face, and 4 User Specified.

```jsl

d = DOE( Response Surface Design, Make Design( 2 ) );
d << Set Axial Choice( 2 );

```

### Set Axial Value

**Syntax:** obj &lt;&lt; Set Axial Value

**Description:** Specifies the User Specified axial value.

```jsl

d = DOE( Response Surface Design, Make Design( 2 ) );
d << Set Axial Value( 2 );

```

### Set Candidate Runs

**Syntax:** obj &lt;&lt; Set Candidate Runs

**Description:** Sets the candidate runs for an accelerated life test plan.

```jsl

DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Monitoring at Intervals", {5, 200, 200} ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),
	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Inspection Times( [200 400 600 800 1000] ),
	Set Number of Units( 150 ), Set Candidate Runs( [90 0 150, 100 0 150, 110 0 150] )}
);

```

### Set Delta For Power

**Syntax:** obj &lt;&lt; Set Delta For Power

**Description:** Specifies the values of the anticipated coefficients in Power Analysis. Anticipated coefficients will be one half of the specified value.

```jsl

DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Set Delta For Power( 3 ),
	Make Design
);

```

### Set Expected Number of Respondents

**Syntax:** obj &lt;&lt; Set Expected Number of Respondents

**Description:** Sets the expected number of respondents per survey.

```jsl

DOE(
	Choice Design,
	{Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ),
	Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ), Set Random Seed( 1245253625 ),
	Add Term( {1, 1} ), Add Term( {2, 1} ), Set Prior Mean Choice( [0 0] ),
	Set Prior Variance Matrix( [1 0, 0 1] ), Set Number of Attributes( 2 ),
	Set Number of Profiles( 2 ), Set Number of Choice Sets( 8 ), Set Number of Surveys( 1 ),
	Set Expected Number of Respondents( 1 )}
);

```

### Set Generators

**Syntax:** obj &lt;&lt; Set Generators

**Description:** Specifies the generators to be used in a screening design.

```jsl

DOE(
	Screening Design,
	{Add Factor, Add Factor, Add Factor, Make Design( 1 ), Set Generators( [1, 1, 0] )}
);

```

### Set Inspection Times

**Syntax:** obj &lt;&lt; Set Inspection Times

**Description:** Sets the inspection times for an accelerated life test plan.

```jsl

DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Monitoring at Intervals", {5, 200, 200} ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),
	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Inspection Times( [200 400 600 800 1000] ),
	Set Number of Units( 150 ), Set Candidate Runs( [90 0 150, 100 0 150, 110 0 150] )}
);

```

### Set Length of Test

**Syntax:** obj &lt;&lt; Set Length of Test

**Description:** Sets the length of test for an accelerated life test plan.

```jsl

DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),
	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Number of Units( 150 )}
);

```

### Set Level Values

**Syntax:** obj &lt;&lt; Set Level Values

**Description:** Sets the level values for the accelerating factor(s) in an accelerated life test plan.

```jsl

DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Monitoring at Intervals", {5, 200, 200} ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),
	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Inspection Times( [200 400 600 800 1000] ),
	Set Number of Units( 150 ), Set Candidate Runs( [90 0 150, 100 0 150, 110 0 150] )}
);

```

### Set Monitoring Choice

**Syntax:** obj &lt;&lt; Set Monitoring Choice

**Description:** Specifies the type of monitoring for an accelerated life test plan.

```jsl

DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),
	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Number of Units( 150 )}
);

```

### Set N Subplots

**Syntax:** obj &lt;&lt; Set N Subplots

**Description:** Specifies the number of subplots when there are both hard-to-change and very hard-to-change factors.

```jsl

d = DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 2 ),
	Add Factor( Continuous, -1, 1, "X2", 1 ),
	Add Factor( Continuous, -1, 1, "X3", 0 )
);
d << Set N Whole Plots( 4 );
d << Set N Subplots( 8 );

```

### Set N Whole Plots

**Syntax:** obj &lt;&lt; Set N Whole Plots

**Description:** Specifies the number of whole plots when there are hard-to-change or very hard-to-change factors.

```jsl

d = DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 1 ),
	Add Factor( Continuous, -1, 1, "X2", 0 )
);
d << Set N Whole Plots( 6 );

```

### Set Number of Attributes

**Syntax:** obj &lt;&lt; Set Number of Attributes

**Description:** Sets the number of attributes that can change within a choice set.

```jsl

DOE(
	Choice Design,
	{Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ),
	Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ), Set Random Seed( 1245253625 ),
	Add Term( {1, 1} ), Add Term( {2, 1} ), Set Prior Mean Choice( [0 0] ),
	Set Prior Variance Matrix( [1 0, 0 1] ), Set Number of Attributes( 2 ),
	Set Number of Profiles( 2 ), Set Number of Choice Sets( 8 ), Set Number of Surveys( 1 ),
	Set Expected Number of Respondents( 1 )}
);

```

### Set Number of Choice Sets

**Syntax:** obj &lt;&lt; Set Number of Choice Sets

**Description:** Sets the number of choice sets per survey.

```jsl

DOE(
	Choice Design,
	{Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ),
	Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ), Set Random Seed( 1245253625 ),
	Add Term( {1, 1} ), Add Term( {2, 1} ), Set Prior Mean Choice( [0 0] ),
	Set Prior Variance Matrix( [1 0, 0 1] ), Set Number of Attributes( 2 ),
	Set Number of Profiles( 2 ), Set Number of Choice Sets( 8 ), Set Number of Surveys( 1 ),
	Set Expected Number of Respondents( 1 )}
);

```

### Set Number of FDS points

**Syntax:** obj &lt;&lt; Set Number of FDS points

**Description:** Sets the number of points used to generate the Fraction of Design Space Plot.

**JMP Version Added:** 14

```jsl

DOE(
	Custom Design,
	{Add Factor( Continuous, -1, 1, "X1", 0 ), Add Factor( Continuous, -1, 1, "X2", 0 ),
	Set Sample Size( 7 ), Design Search Time( 8 ), Set Number of FDS points( 20000 ),
	Make Design}
);

```

### Set Number of Profiles

**Syntax:** obj &lt;&lt; Set Number of Profiles

**Description:** Sets the number of profiles per choice set.

```jsl

DOE(
	Choice Design,
	{Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ),
	Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ), Set Random Seed( 1245253625 ),
	Add Term( {1, 1} ), Add Term( {2, 1} ), Set Prior Mean Choice( [0 0] ),
	Set Prior Variance Matrix( [1 0, 0 1] ), Set Number of Attributes( 2 ),
	Set Number of Profiles( 2 ), Set Number of Choice Sets( 8 ), Set Number of Surveys( 1 ),
	Set Expected Number of Respondents( 1 )}
);

```

### Set Number of Surveys

**Syntax:** obj &lt;&lt; Set Number of Surveys

**Description:** Sets the number of surveys for a choice design.

```jsl

DOE(
	Choice Design,
	{Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ),
	Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ), Set Random Seed( 1245253625 ),
	Add Term( {1, 1} ), Add Term( {2, 1} ), Set Prior Mean Choice( [0 0] ),
	Set Prior Variance Matrix( [1 0, 0 1] ), Set Number of Attributes( 2 ),
	Set Number of Profiles( 2 ), Set Number of Choice Sets( 8 ), Set Number of Surveys( 1 ),
	Set Expected Number of Respondents( 1 )}
);

```

### Set Number of Units

**Syntax:** obj &lt;&lt; Set Number of Units

**Description:** Sets the number of units under test for an accelerated life test plan.

```jsl

DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),
	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Number of Units( 150 )}
);

```

### Set Prior Correlation ALT

**Syntax:** obj &lt;&lt; Set Prior Correlation ALT

**Description:** Sets the prior correlations for an accelerated life test plan.

**JMP Version Added:** 16

```jsl

DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),
	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Number of Units( 150 )}
);

```

### Set Prior Mean ALT

**Syntax:** obj &lt;&lt; Set Prior Mean ALT

**Description:** Sets the prior mean for an accelerated life test plan.

```jsl

DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),
	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Number of Units( 150 )}
);

```

### Set Prior Mean Choice

**Syntax:** obj &lt;&lt; Set Prior Mean Choice

**Description:** Sets the Prior Mean for a choice design.

```jsl

DOE(
	Choice Design,
	{Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ),
	Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ), Set Random Seed( 1245253625 ),
	Add Term( {1, 1} ), Add Term( {2, 1} ), Set Prior Mean Choice( [0 0] ),
	Set Prior Variance Matrix( [1 0, 0 1] ), Set Number of Attributes( 2 ),
	Set Number of Profiles( 2 ), Set Number of Choice Sets( 8 ), Set Number of Surveys( 1 ),
	Set Expected Number of Respondents( 1 )}
);

```

### Set Prior Quantile ALT

**Syntax:** obj &lt;&lt; Set Prior Quantile ALT

**Description:** Sets the information for specifying the prior intercept based on a quantile.

```jsl

DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Prior Specification Choice( 2 ), Set Prior Quantile ALT( {[1.5 2], 0.065, 2642, 45} ),
	Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),
	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Number of Units( 150 )}
);

```

### Set Prior Std Error ALT

**Syntax:** obj &lt;&lt; Set Prior Std Error ALT

**Description:** Sets the prior standard error for an accelerated life test plan.

**JMP Version Added:** 16

```jsl

DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),
	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Number of Units( 150 )}
);

```

### Set Prior Variance ALT

**Syntax:** obj &lt;&lt; Set Prior Variance ALT

**Description:** Sets the prior variance for an accelerated life test plan.

```jsl

DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Variance ALT( [0.1 0 0, 0 0.1 0, 0 0 0.1] ),
	Use Prior Uncertainty( 1 ), Set ALT Time Range( 10000, 20000 ),
	Set ALT Probability of Interest( 0.1 ), Set Length of Test( 1000 ),
	Set Number of Units( 150 )}
);

```

### Set Prior Variance Matrix

**Syntax:** obj &lt;&lt; Set Prior Variance Matrix

**Description:** Sets the Prior Variance Matrix for a choice design.

```jsl

DOE(
	Choice Design,
	{Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ),
	Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ), Set Random Seed( 1245253625 ),
	Add Term( {1, 1} ), Add Term( {2, 1} ), Set Prior Mean Choice( [0 0] ),
	Set Prior Variance Matrix( [1 0, 0 1] ), Set Number of Attributes( 2 ),
	Set Number of Profiles( 2 ), Set Number of Choice Sets( 8 ), Set Number of Surveys( 1 ),
	Set Expected Number of Respondents( 1 )}
);

```

### Set RMSE

**Syntax:** obj &lt;&lt; Set RMSE

**Description:** Specifies the anticipated root mean square error (RMSE) in Power Analysis.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Set RMSE( 1.5 );

```

### Set Random Seed

**Syntax:** obj &lt;&lt; Set Random Seed

**Description:** Useful for teaching. Setting the random seed to a specific value assures that all class members get the same design.

```jsl

DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Set Random Seed( 34067086 ),
	Make Design
);

```

### Set Run Order

**Syntax:** obj &lt;&lt; Set Run Order

**Description:** Specifies how the run order should be set when making a data table from a design.

```jsl

d = DOE( Custom Design, Add factor, Add factor, Add factor );
d << Make Design;
d << Set Run Order( Sort Left to Right );
d << Make Table;

```

### Set Runs Per Random Block

**Syntax:** obj &lt;&lt; Set Runs Per Random Block

**Description:** Specifies the size of random blocks in the design.

```jsl

d = DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Make Model( Linear )
);
d << Set Runs Per Random Block( 4 );

```

### Set Sample Size

**Syntax:** obj &lt;&lt; Set Sample Size

**Description:** Specifies the sample size before the design is created. If the specified number is less than the minimum value shown in the designer, the sample size is set to the minimum value.

```jsl

d = DOE( Custom Design, Add factor, Add factor, Add factor );
d << Make Model( Linear );
d << Set Sample Size( 12 );

```

### Set Significance Level

**Syntax:** obj &lt;&lt; Set Significance Level

**Description:** Change the significance level in Power Analysis.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Set Significance Level( 0.10 );

```

### Set Strength

**Syntax:** obj &lt;&lt; Set Strength

**Description:** Sets the strength for Covering Arrays

```jsl

d = DOE(
	Covering Array,
	Add factor( Categorical ),
	Add factor( Categorical ),
	Add factor( Categorical )
);
d << Set Strength( 3 );
d << Make Table;

```

### Show Blocking Options

**Syntax:** obj &lt;&lt; Show Blocking Options

**Description:** Specifies the blocking choice and number of blocks for a definitive screening design. Specifying a value of 0 indicates no blocks.

**Example 1**

```jsl

DOE(
	Definitive Screening Design,
	Add Factor,
	Add Factor,
	Add Factor,
	Add Factor,
	Add Factor,
	Add Factor,
	Show Blocking Options( 0, 0 ),
	Number of Extra Runs( 4 )
);

```

**Example 2**

```jsl

DOE(
	Definitive Screening Design,
	Add Factor,
	Add Factor,
	Add Factor,
	Add Factor,
	Add Factor,
	Add Factor,
	Show Blocking Options( 1, 2 ),
	Number of Extra Runs( 4 )
);

```

### Simulate Responses

**Syntax:** obj &lt;&lt; Simulate Responses( state=0|1 )

**Description:** Add data for the responses to the JMP design table. For use in teaching DOE.

```jsl

DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Make Design,
	Simulate Responses,
	Make Table
);

```

### Solve for Power

**Syntax:** obj &lt;&lt; Solve for Power

**Description:** Sets the anticipated coefficients in Power Analysis so that the power is near the specified value.

**JMP Version Added:** 16

```jsl

DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Make Design,
	Solve for Power( 0.8 )
);

```

### Space Filling Design Type

**Syntax:** obj &lt;&lt; Space Filling Design Type( Sphere Packing|Latin Hypercube|Uniform|Minimum Potential|Maximum Entropy|IMSE Optimal|Fast Flexible Filling )

**Description:** Specifies the type of space filling design and the number of runs.

**Example 1**

```jsl

d = DOE( Space Filling Design );
d << Space Filling Design Type( Sphere Packing, 30 );

```

**Example 2**

```jsl

d = DOE( Space Filling Design );
d << Space Filling Design Type( Latin Hypercube, 100 );

```

**Example 3**

```jsl

d = DOE( Space Filling Design );
d << Space Filling Design Type( Uniform, 20 );

```

**Example 4**

```jsl

d = DOE( Space Filling Design );
d << Space Filling Design Type( Fast Flexible Filling, 100 );

```

**Example 5**

```jsl

d = DOE( Space Filling Design, Space Filling Design Type( IMSE Optimal, 20 ) );
d << Theta( [2, 3] );
d << Make Design;

```

### Sphere Radius

**Syntax:** obj &lt;&lt; Sphere Radius

**Description:** Specifies a spherical design region and enables you to set the radius of the region.

```jsl

DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Sphere Radius( 1 ),
	Make Design
);

```

### Split Plot Variance Ratio

**Syntax:** obj &lt;&lt; Split Plot Variance Ratio( Whole Plot Ratio | [Whole Plot Ratio, Subplot Ratio] )

**Description:** For hard-to-change factors, specify the ratio of the whole-plot error variance to the run-to-run error. For hard-to-change and very hard-to-change factors, specify the ratio of the whole plot and subplot error to the run-to-run error.

**Example 1**

```jsl

DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 1 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Set N Whole Plots( 4 ),
	Split Plot Variance Ratio( 2 ),
	Make Design
);

```

**Example 2**

```jsl

d = DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 2 ),
	Add Factor( Continuous, -1, 1, "X2", 1 ),
	Add Factor( Continuous, -1, 1, "X3", 0 ),
	Set N Whole Plots( 4 )
);
d << Split Plot Variance Ratio( [3, 2] );
d << Make Design;

```

### Suppress Cotter Designs

**Syntax:** obj &lt;&lt; Suppress Cotter Designs( state=0|1 )

**Description:** Shows or hides Cotter designs in the list of screening designs. This option is selected by default, which means that Cotters designs are initially not in the screening design list. On by default.

```jsl

DOE(
	Screening Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Continuous, -1, 1, "X3", 0 ),
	Suppress Cotter Designs,
	Make Design( 5 )
);

```

### Table of Correlations

**Syntax:** obj &lt;&lt; Table of Correlations

**Description:** Create a data table with the Table of Correlations from Design Diagnostics.

**JMP Version Added:** 15

```jsl

DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Make Design,
	Table of Correlations
);

```

### Theta

**Syntax:** obj &lt;&lt; Theta

**Description:** Specifies the Covariance Parameter Vector for Space Filling designs.

```jsl

d = DOE( Space Filling Design, Space Filling Design Type( IMSE Optimal, 20 ) );
d << Theta( [2, 3] );

```

### Treatments

**Syntax:** obj &lt;&lt; Treatments

**Description:** Specifies the number of treatments for a balanced incomplete block design (BIBD).

**JMP Version Added:** 14

```jsl

d = DOE( Balanced Incomplete Block Design );
d << Treatments( 3, {"L1", "L2", "L3"} );
d << Make Design;

```

### Use Bayesian information

**Syntax:** obj &lt;&lt; Use Bayesian information( state=0|1 )

**Description:** Uses prior information in the Bayesian setting for the design diagnostics.

**JMP Version Added:** 15

```jsl

DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Term( {1, 1} ),
	Add Term( {2, 1} ),
	Add Potential Term( {1, 1}, {2, 1} ),
	Number of Starts( 10 ),
	Make Design,
	Use Bayesian Information( 1 )
);

```

### Use Blue to Red color theme for color map

**Syntax:** obj &lt;&lt; Use Blue to Red color theme for color map( state=0|1 )

**Description:** Uses blue to red color theme for color map on correlations.

**JMP Version Added:** 15

### Use Prior Uncertainty

**Syntax:** obj &lt;&lt; Use Prior Uncertainty( state=0|1 )

**Description:** Specifies if the prior uncertainty should be used to construct the optimal design.

**JMP Version Added:** 16

```jsl

DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( 2, {5, 200, 200} ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),
	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Inspection Times( [200 400 600 800 1000] ),
	Set Number of Units( 150 ), Set Candidate Runs( [90 0 150, 100 0 150, 110 0 150] )}
);

```

### Utility Neutral Design

**Syntax:** obj &lt;&lt; Utility Neutral Design( state=0|1 )

**Description:** Specifies if Utility Neutral Choice Design should be created.

```jsl

DOE(
	Choice Design,
	{Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ),
	Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ), Set Random Seed( 1245253625 ),
	Add Term( {1, 1} ), Add Term( {2, 1} ), Set Prior Mean Choice( [0 0] ),
	Set Prior Variance Matrix( [1 0, 0 1] ), Set Number of Attributes( 2 ),
	Set Number of Profiles( 2 ), Set Number of Choice Sets( 8 ), Set Number of Surveys( 1 ),
	Set Expected Number of Respondents( 1 ), Utility Neutral Design( 1 )}
);

```


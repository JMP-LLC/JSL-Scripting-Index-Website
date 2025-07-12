# Choice



## Associated Constructors

### Choice

**Syntax:** Choice( Profile DataTable( data table ), Profile ID( column ), Profile Effects( column(s) ), <Response Data Table( data table )>, <Subject Data Table( data table )>, <Response Profile ID Chosen( column )>, <Response Subject ID( column)>, <Response Grouping( column(s) )>, <Response Profile ID Choices( column(s) )>, <Profile Grouping( column(s) )>, <Subject Subject ID( column )>, <Subject Effects( column(s) )> )

**Description:** Models data from a choice experiment that studies customer preferences. Estimates the probability that a specific configuration is preferred using a form of conditional logistic regression.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Combined.jmp" );
obj = Choice(
	One Table( 1 ),
	Profile DataTable( dt ),
	Profile ID( :Indicator ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	Profile Grouping( :Subject, :Trial )
);

```

## Columns

### Choice Set ID

**Syntax:** Choice( Choice Set ID( column ), ... )

**Description:** A column that identifies the choice set that was presented to the subject for a given preference determination in the one data table situation.

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = Choice(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);

```

### Profile Effects

**Syntax:** obj = Choice(...<Profile Effects( column )>...)

**Description:** One or more columns that contain the effect or factor values in the profile data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);

```

### Profile Grouping

**Syntax:** Choice( Profile Grouping( column(s) ), ... )

**Description:** A column which, when used with the Profile ID column, uniquely designates each choice set.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);

```

### Profile ID

**Syntax:** Choice( Profile ID( column ), ... )

**Description:** A column that contains the ID in the profile data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);

```

### Response Freq

**Syntax:** Choice( Response Freq( column ), ... )

**Description:** Specifies a column whose values assign a frequency to each row for the analysis.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);

```

### Response Grouping

**Syntax:** Choice( Response Grouping( column(s) ), ... )

**Description:** A column which, when used with the Profile ID Chosen column, uniquely designates each choice set.

```jsl

Names Default To Here( 1 );
Open( "$Sample_Data/Laptop Profile.jmp" );
Open( "$Sample_Data/Laptop Runs.jmp" );
Choice(
	Response Data Table( Data Table( "Laptop Runs" ) ),
	Profile DataTable( Data Table( "Laptop Profile" ) ),
	Response Grouping( :Survey, :Choice Set ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :Choice ID ),
	Profile Grouping( :Survey, :Choice Set ),
	Profile Effects( :Hard Disk, :Speed, :Battery Life, :Price ),
	"Firth Bias-Adjusted Estimates"n( 1 ),
	Response Profile ID Chosen( :Response ),
	Likelihood Ratio Tests( 1 ),
	Willingness to Pay(
		Hard Disk( Feature Factor, "40 GB" ),
		Speed( Feature Factor, "1.5 GHz" ),
		Battery Life( Feature Factor, "4 hours" ),
		Price( Price Factor, 1000 )
	)
);

```

### Response Profile ID Choices

**Syntax:** Choice( Response Profile ID Choice( columns ), ... )

**Description:** At least two columns that contain the possible choices available as responses.

**Choice Example**

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
dt3 = Open( "$SAMPLE_DATA/Pizza Subjects.jmp" );
obj = Choice(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Subject DataTable( dt3 ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	Subject Subject ID( :Subject ),
	Subject Effects( :Gender )
);

```

**MaxDiff Example**

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Potato Chip Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Potato Chip Responses.jmp" );
dt3 = Open( "$SAMPLE_DATA/Potato Chip Subjects.jmp" );
obj = MaxDiff(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Subject DataTable( dt3 ),
	Response Subject ID( :Respondent ),
	Response Profile ID Choices( :Choice 1, :Choice 2, :Choice 3 ),
	Profile ID( :Profile ID ),
	Profile Effects( :Flavor ),
	Subject Subject ID( :Respondent ),
	Subject Effects( :Citizenship, :Gender ),
	Response Best Option( :Best Profile ),
	Response Worst Option( :Worst Profile )
);

```

### Response Profile ID Chosen

**Syntax:** Choice( Response Profile ID Chosen( column ), ... )

**Description:** A column that contains the profile ID that represents the subject&apos;s selected profile.

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
dt3 = Open( "$SAMPLE_DATA/Pizza Subjects.jmp" );
obj = Choice(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Subject DataTable( dt3 ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	Subject Subject ID( :Subject ),
	Subject Effects( :Gender )
);

```

### Response Subject ID

**Syntax:** Choice( Response Subject ID( column ), ... )

**Description:** A column that identifies the study participant in the response data table.

**Choice Example**

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
dt3 = Open( "$SAMPLE_DATA/Pizza Subjects.jmp" );
obj = Choice(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Subject DataTable( dt3 ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	Subject Subject ID( :Subject ),
	Subject Effects( :Gender )
);

```

**MaxDiff Example**

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Potato Chip Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Potato Chip Responses.jmp" );
dt3 = Open( "$SAMPLE_DATA/Potato Chip Subjects.jmp" );
obj = MaxDiff(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Subject DataTable( dt3 ),
	Response Subject ID( :Respondent ),
	Response Profile ID Choices( :Choice 1, :Choice 2, :Choice 3 ),
	Profile ID( :Profile ID ),
	Profile Effects( :Flavor ),
	Subject Subject ID( :Respondent ),
	Subject Effects( :Citizenship, :Gender ),
	Response Best Option( :Best Profile ),
	Response Worst Option( :Worst Profile )
);

```

### Response Weight

**Syntax:** Choice( Response Weight( column ), ... )

**Description:** Specifies a column whose values assign a weight to each row for the analysis.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);

```

### Subject Effects

**Syntax:** obj = Choice(...<Subject Effects( column )>...)

**Description:** One or more columns that contain the effect or factor values in the subject data table.

**Choice Example**

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
dt3 = Open( "$SAMPLE_DATA/Pizza Subjects.jmp" );
obj = Choice(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Subject DataTable( dt3 ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	Subject Subject ID( :Subject ),
	Subject Effects( :Gender )
);

```

**MaxDiff Example**

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Potato Chip Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Potato Chip Responses.jmp" );
dt3 = Open( "$SAMPLE_DATA/Potato Chip Subjects.jmp" );
obj = MaxDiff(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Subject DataTable( dt3 ),
	Response Subject ID( :Respondent ),
	Response Profile ID Choices( :Choice 1, :Choice 2, :Choice 3 ),
	Profile ID( :Profile ID ),
	Profile Effects( :Flavor ),
	Subject Subject ID( :Respondent ),
	Subject Effects( :Citizenship, :Gender ),
	Response Best Option( :Best Profile ),
	Response Worst Option( :Worst Profile )
);

```

### Subject ID

**Syntax:** Choice( Subject ID( column ), ... )

**Description:** A column that identifies the study participant in the subject data table or in the one data table situation.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Combined.jmp" );
obj = Choice(
	One Table( 1 ),
	Subject ID( :Subject ),
	Choice Set ID( :Trial ),
	Profile ID( :Indicator ),
	Profile Effects( :Crust, :Cheese, :Topping )
);

```

### Subject Subject ID

**Syntax:** Choice( Subject Subject ID( column ), ... )

**Description:** A column that identifies the study participant in the subject data table.

**Choice Example**

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
dt3 = Open( "$SAMPLE_DATA/Pizza Subjects.jmp" );
obj = Choice(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Subject DataTable( dt3 ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	Subject Subject ID( :Subject ),
	Subject Effects( :Gender )
);

```

**MaxDiff Example**

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Potato Chip Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Potato Chip Responses.jmp" );
dt3 = Open( "$SAMPLE_DATA/Potato Chip Subjects.jmp" );
obj = MaxDiff(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Subject DataTable( dt3 ),
	Response Subject ID( :Respondent ),
	Response Profile ID Choices( :Choice 1, :Choice 2, :Choice 3 ),
	Profile ID( :Profile ID ),
	Profile Effects( :Flavor ),
	Subject Subject ID( :Respondent ),
	Subject Effects( :Citizenship, :Gender ),
	Response Best Option( :Best Profile ),
	Response Worst Option( :Worst Profile )
);

```

## Item Messages

### Comparisons

**Syntax:** obj << Comparisons( {term1(value1a),term2(value2a),...},{term1(value1b),term2(value2b),...} )

**Description:** Performs comparisons between specific alternative choice profiles. Enables you to specify the factors and the values that you want to compare.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
obj << Comparisons(
	{Crust( "Thick" ), Cheese( "Jack" ), Topping( "Pepperoni" )},
	{Crust( "Thin" ), Cheese( "Mozzarella" ), Topping( "None" )}
);

```

### Confidence Intervals

**Syntax:** obj << Confidence Intervals( state=0|1, <alpha> )

**Description:** Shows or hides (1-alpha)% confidence intervals for each parameter in the Parameter Estimates report.

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = Choice(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
obj << Confidence Intervals( 1, 0.01 );

```

### Confidence Limits

**Syntax:** obj << Confidence Limits( state=0|1, <alpha> )

**Description:** Shows or hides confidence limits for each parameter in the Bayesian Parameter Estimates report. The limits are constructed based on the 2.5 and 97.5 quantiles of the posterior distribution.

### Convergence Criterion

**Syntax:** obj = Choice(...Convergence Criterion( number )...)

**Description:** Sets the acceptable criterion for convergence when estimating the parameters.

### Correlation of Estimates

**Syntax:** obj << Correlation of Estimates( state=0|1 )

**Description:** Shows or hides the correlation matrix for the parameter estimates.

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = Choice(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
obj << Correlation of Estimates( 1 );

```

### Effect Marginals

**Syntax:** obj << Effect Marginals( state=0|1 )

**Description:** Shows or hides marginal probabilities and marginal utilities for each main effect in the model. The marginal probability is the probability that an individual selects attribute A over B with all other attributes set to their mean or default levels.

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = Choice(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
obj << Effect Marginals( 1 );

```

### Firth Bias-Adjusted Estimates

**Syntax:** obj = Choice(...Firth Bias-Adjusted Estimates( state=0|1 )...)

**Description:** Computes bias-corrected maximum likelihood estimates (MLEs) that produce better estimates and tests than MLEs without bias correction. These estimates also improve separation problems that tend to occur in logistic models. On by default.

**Choice Example**

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = Choice(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);

```

**MaxDiff Example**

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Potato Chip Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Potato Chip Responses.jmp" );
obj = MaxDiff(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Response Subject ID( :Respondent ),
	Response Profile ID Choices( :Choice 1, :Choice 2, :Choice 3 ),
	Profile ID( :Profile ID ),
	Profile Effects( :Flavor ),
	Response Best Option( :Best Profile ),
	Response Worst Option( :Worst Profile )
);
Report( obj )["Parameter Estimates"] << Close( 0 );

```

### Hierarchical Bayes

**Syntax:** obj = Choice(...Hierarchical Bayes( state=0|1 )...)

**Description:** Uses a Bayesian approach to estimate subject-specific parameters.

### Joint Factor Tests

**Syntax:** obj << Joint Factor Tests( state=0|1 )

**Description:** Tests each factor in the model by constructing a likelihood ratio test for all the effects involving that factor. Subject Data Table is required for this option when an interaction is not present in the model.

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
dt3 = Open( "$SAMPLE_DATA/Pizza Subjects.jmp" );
obj = Choice(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Subject DataTable( dt3 ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	Subject Subject ID( :Subject ),
	Subject Effects( :Gender )
);
obj << Joint Factor Tests( 1 );

```

### Likelihood Ratio Tests

**Syntax:** obj << Likelihood Ratio Tests( state=0|1 )

**Description:** Performs likelihood ratio tests for each effect in the model. On by default for models that converge in less than five seconds.

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = Choice(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
obj << Likelihood Ratio Tests( 1 );

```

### Model Dialog

**Syntax:** obj << Model Dialog

**Description:** Opens the Model Dialog window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
obj << Model Dialog;

```

### Multiple Choice Profiler

**Syntax:** obj << Multiple Choice Profiler( state=0|1, N Choices( number ) )

**Description:** Shows or hides a specified number of prediction profilers. This enables you to compare the prediction probabilities across alternative sets of choices.

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = Choice(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
obj << Multiple Choice Profiler( 1, N Choices( 3 ) );

```

### Number of Bayesian Iterations

**Syntax:** obj = Choice(...Number of Bayesian Iterations( number )...)

### Number of Burn In Iterations

**Syntax:** obj << Number of Burn In Iterations( number )

### One Table

**Syntax:** obj = Choice(...One Table...)

**Description:** Specifies that the data are in stacked format in one data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);

```

### Probability Profiler

**Syntax:** obj << Probability Profiler( state=0|1 )

**Description:** Shows or hides a prediction profiler of the probability of the current choice compared to a reference set.

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = Choice(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
obj << Probability Profiler( 1 );

```

### Profile DataTable

**Syntax:** Choice( Profile Data Table( table ), ... )

**Description:** Identifies the profile data table.

**Choice Example**

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = Choice(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);

```

**MaxDiff Example**

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Potato Chip Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Potato Chip Responses.jmp" );
obj = MaxDiff(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Response Subject ID( :Respondent ),
	Response Profile ID Choices( :Choice 1, :Choice 2, :Choice 3 ),
	Profile ID( :Profile ID ),
	Profile Effects( :Flavor ),
	Response Best Option( :Best Profile ),
	Response Worst Option( :Worst Profile )
);

```

### Remove Subject Effects

**Syntax:** obj = Choice(...Remove Subject Effects...)

### Respondents Are Allowed to Choose None

**Syntax:** Choice( Respondents Are Allowed to Choose None( state=0|1 ), ... )

**Description:** Specifies that a No Choice Indicator be included in the model for response rows that contain missing values.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Combined No Choice.jmp" );
obj = Choice(
	One Table( 1 ),
	Response Subject ID( :Subject ),
	Profile ID( :Indicator ),
	Profile Grouping( :Subject, :Trial ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	"Firth Bias-adjusted Estimates"n( 1 ),
	Respondents Are Allowed to Choose None( 1 ),
	Likelihood Ratio Tests( 1 )
);

```

### Response Data Table

**Syntax:** Choice( Response Data Table( table ), ... )

**Description:** Identifies the response data table.

**Choice Example**

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = Choice(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);

```

**MaxDiff Example**

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Potato Chip Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Potato Chip Responses.jmp" );
obj = MaxDiff(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Response Subject ID( :Respondent ),
	Response Profile ID Choices( :Choice 1, :Choice 2, :Choice 3 ),
	Profile ID( :Profile ID ),
	Profile Effects( :Flavor ),
	Response Best Option( :Best Profile ),
	Response Worst Option( :Worst Profile )
);

```

### Save Bayes Chain

**Syntax:** obj << Save Bayes Chain

### Save Gradients by Subject

**Syntax:** obj << Save Gradients by Subject

**Description:** Creates a new table with a row for each subject containing the average steps on each parameter.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
obj << Save Gradients by Subject;

```

### Save Subject Estimates

**Syntax:** obj << Save Subject Estimates

### Save Utility Formula

**Syntax:** obj << Save Utility Formula

**Description:** Creates a new column in the profile data table with a formula for the linear model that is estimated.

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = Choice(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
obj << Save Utility Formula;

```

### Show MLE Parameter Estimates

**Syntax:** obj << Show MLE Parameter Estimates( state=0|1 )

**Description:** Shows maximum likelihood estimates with Bayes parameter estimates.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	Hierarchical Bayes( 1 )
);
obj << Show MLE Parameter Estimates( 1 );

```

### Subject DataTable

**Syntax:** Choice( Subject Data Table( table ), ... )

**Description:** Identifies the subject data table.

**Choice Example**

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
dt3 = Open( "$SAMPLE_DATA/Pizza Subjects.jmp" );
obj = Choice(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Subject DataTable( dt3 ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	Subject Subject ID( :Subject ),
	Subject Effects( :Gender )
);

```

**MaxDiff Example**

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Potato Chip Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Potato Chip Responses.jmp" );
dt3 = Open( "$SAMPLE_DATA/Potato Chip Subjects.jmp" );
obj = MaxDiff(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Subject DataTable( dt3 ),
	Response Subject ID( :Respondent ),
	Response Profile ID Choices( :Choice 1, :Choice 2, :Choice 3 ),
	Profile ID( :Profile ID ),
	Profile Effects( :Flavor ),
	Subject Subject ID( :Respondent ),
	Subject Effects( :Citizenship, :Gender ),
	Response Best Option( :Best Profile ),
	Response Worst Option( :Worst Profile )
);

```

### Use Adaptive Bayes

**Syntax:** obj << Use Adaptive Bayes( state=0|1 )

### Utility Profiler

**Syntax:** obj << Utility Profiler( state=0|1 )

**Description:** Shows or hides the predicted utility for different factor settings. The utility is the value predicted by the linear model.

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = Choice(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
obj << Utility Profiler( 1 );

```

### Willingness to Pay

**Syntax:** obj << Willingness to Pay

**Description:** Requires that your model includes a continuous price column. Calculates the maximum price increase (decrease) that a customer is willing to pay for a new feature over the baseline feature cost. The result is calculated using the Baseline settings for each background setting.

```jsl

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Laptop Profile.jmp" );
dt2 = Open( "$SAMPLE_DATA/Laptop Runs.jmp" );
Choice(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Response Grouping( :Survey, :Choice Set ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :Choice ID ),
	Profile Grouping( :Survey, :Choice Set ),
	Profile Effects( :Hard Disk, :Speed, :Battery Life, :Price ),
	"Firth Bias-Adjusted Estimates"n( 1 ),
	Response Profile ID Chosen( :Response ),
	Likelihood Ratio Tests( 1 ),
	Willingness to Pay(
		Hard Disk( Feature Factor, "40 GB" ),
		Speed( Feature Factor, "1.5 GHz" ),
		Battery Life( Feature Factor, "4 hours" ),
		Price( Price Factor, 1000 )
	)
);

```

## Shared Item Messages

### Action

**Syntax:** obj << Action

**Description:** All-purpose trapdoor within a platform to insert expressions to evaluate. Temporarily sets the DisplayBox and DataTable contexts to the Platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**Description:** Apply a previously created preset to the object, updating the options and customizations to match the saved settings.

**Anonymous preset**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

**Search by name**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**Search within folder(s)**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

### Broadcast

**Syntax:** obj << Broadcast(message)

**Description:** Broadcasts a message to a platform. If return results from individual objects are tables, they are concatenated if possible, and the final format is identical to either the result from the Save Combined Table option in a Table Box or the result from the Concatenate option using a Source column. Other than those, results are stored in a list and returned.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

### Column Switcher

**Syntax:** obj << Column Switcher(column reference, {column reference, ...}, < Title(title) >, < Close Outline(0|1) >, < Retain Axis Settings(0|1) >, < Layout(0|1) >)

**Description:** Adds a control panel for changing the platform&apos;s variables

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

### Copy ByGroup Script

**Syntax:** obj << Copy ByGroup Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj << Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
obj << Copy Script;

```

### Data Table Window

**Syntax:** obj << Data Table Window

**Description:** Move the data table window for this analysis to the front.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
obj << Data Table Window;

```

### Get By Levels

**Syntax:** obj << Get By Levels

**Description:** Returns an associative array mapping the by group columns to their values.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**Syntax:** obj << Get ByGroup Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	By( _bycol )
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Syntax:** obj << Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

**General**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Platform with Filter**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),
	Local Data Filter(
		Add Filter(
			columns( :age, :sex, :height ),
			Where( :age == {12, 13, 14} ),
			Where( :sex == "F" ),
			Where( :height >= 55 ),
			Display( :age, N Items( 6 ) )
		)
	)
);
New Window( "platform boxes",
	H List Box(
		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),
		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )
	)
);

```

### Get Data Table

**Syntax:** obj << Get Data Table

**Description:** Returns a reference to the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**Syntax:** obj << Get Group Platform

**Description:** Return the Group Platform object if this platform is part of a Group. Otherwise, returns Empty().

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

### Get Script

**Syntax:** obj << Get Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntax:** obj << Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntax:** obj << Get Timing

**Description:** Times the platform launch.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**Syntax:** obj << Get Web Support

**Description:** Return a number indicating the level of Interactive HTML support for the display object. 1 means some or all elements are supported. 0 means no support.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Where Expr

**Syntax:** obj << Get Where Expr

**Description:** Returns the Where expression for the data subset, if the platform was launched with By() or Where(). Otherwise, returns Empty()

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Description:** Ignores the current settings of the platform&apos;s preferences. The message is ignored when sent to the platform after creation.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Local Data Filter

**Syntax:** obj << Local Data Filter

**Description:** To filter data to specific groups or ranges, but local to this platform

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);

```

### New JSL Preset

**Syntax:** New JSL Preset( preset )

**Description:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

### New Preset

**Syntax:** obj = New Preset()

**Description:** Create an anonymous preset representing the options and customizations applied to the object. This object can be passed to Apply Preset to copy the settings to another object of the same type.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Paste Local Data Filter

**Syntax:** obj << Paste Local Data Filter

**Description:** Apply the local data filter from the clipboard to the current report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
filter = dist << Local Data Filter(
	Add Filter( columns( :Region ), Where( :Region == "MW" ) )
);
filter << Copy Local Data Filter;
dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );
Wait( 1 );
dist2 << Paste Local Data Filter;

```

### Redo Analysis

**Syntax:** obj << Redo Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntax:** obj << Redo ByGroup Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Syntax:** obj << Relaunch Analysis

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntax:** obj << Relaunch ByGroup

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	By( _bycol )
);
obj[1] << Relaunch ByGroup;

```

### Remove Column Switcher

**Syntax:** obj << Remove Column Switcher

**Description:** Removes the most recent Column Switcher that has been added to the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
Wait( 2 );
obj << Remove Column Switcher;

```

### Remove Local Data Filter

**Syntax:** obj << Remove Local Data Filter

**Description:** If a local data filter has been created, this removes it and restores the platform to use all the data in the data table directly

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dist = dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);
Wait( 2 );
dist << remove local data filter;

```

### Render Preset

**Syntax:** Render Preset( preset )

**Description:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**Syntax:** obj << Report;

Report( obj )

**Description:** Returns a reference to the report object.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntax:** obj << Report View( "Full"|"Summary" )

**Description:** The report view determines the level of detail visible in a platform report. Full shows all of the detail, while Summary shows only select content, dependent on the platform. For customized behavior, display boxes support a <<Set Summary Behavior message.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description:** Creates a JSL script to produce this analysis, and save it as a table property in the data table. You can specify a name for the script. The Append Suffix option appends a numeric suffix to the script name, which differentiates the script from an existing script with the same name. The Prompt option prompts the user to specify a script name. The Replace option replaces an existing script with the same name.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj << Save ByGroup Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj << Save ByGroup Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntax:** obj << Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj << Save Script for All Objects To Data Table( <name> )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj << Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj << Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj << Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
obj << Save Script to Script Window;

```

### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Description:** Sends platform commands or display customization commands to each level of a by-group.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	By( :Sex ),
	SendToByGroup(
		{:sex == "F"},
		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )
	),
	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) )
);

```

### SendToEmbeddedScriptable

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Description:** SendToEmbeddedScriptable restores settings of embedded scriptable objects.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Censor Code( 1 ),
	<<Fit Weibull,
	SendToEmbeddedScriptable(
		Dispatch(
			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},
			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}
		)
	)
);

```

### SendToReport

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Description:** Send To Report is used in tandem with the Dispatch command to customize the appearance of a report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

### Sync to Data Table Changes

**Syntax:** obj << Sync to Data Table Changes

**Description:** Sync with the exclude and data changes that have been made.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

### Title

**Syntax:** obj << Title( "new title" )

**Description:** Sets the title of the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj << Top Report

**Description:** Returns a reference to the root node in the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transform Column

**Syntax:** obj = <Platform>(... Transform Column(<name>, Formula(<expression>), [Random Seed(<n>)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description:** Create a transform column in the local context of an object, usually a platform. The transform column is active only for the lifetime of the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

### View Web XML

**Syntax:** obj << View Web XML

**Description:** Returns the XML code that is used to create the interactive HTML report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Window View

**Syntax:** obj = Choice(...Window View( "Visible"|"Invisible"|"Private" )...)

**Description:** Set the type of the window to be created for the report. By default a Visible report window will be created. An Invisible window will not appear on screen, but is discoverable by functions such as Window(). A Private window responds to most window messages but is not discoverable and must be addressed through the report object

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```


# Structural Equation Models



## Structural Equation Models Fit

### All Modification Indices

**Syntax:** obj << All Modification Indices( state=0|1 )

**Description:** Shows or hides a report that contains the estimates of model modification indices. These values can be used to determine which parameters might be added to the model to improve model fit.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Modification Indices( 1 );

```

### Assess Measurement Model

**Syntax:** obj << Assess Measurement Model( state=0|1 )

**Description:** Shows or hides a variety of statistics for quantifying the reliability and validity of tests and measures, including indicator reliability, coefficients omega and H, and a construct validity matrix.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Run Script( "SEM: Measurement Models" );
obj << Assess Measurement Model( 1 );

```

### Confidence Intervals

**Syntax:** obj << Confidence Intervals( state=0|1 )

**Description:** Shows or hides 95% confidence intervals for all parameter estimates.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Confidence Intervals( 1 );

```

### Copy Diagram Properties

**Syntax:** obj << Copy Diagram Properties

**Description:** Copies the current path diagram properties to the clipboard. You can then paste the properties into another SEM path diagram.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt2 = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt2 << Run Script( "SEM: Compare Growth Trajectories" );
obj << Copy Diagram Properties();
obj2 = dt << Structural Equation Models( Model Variables( 2 :: 12 ) );
obj2 << Paste Diagram Properties();

```

### Copy Model Specification

**Syntax:** obj << Copy Model Specification

**Description:** Copies the current structural equation model specifications to the clipboard. You can then paste the model specifications into another SEM platform report.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Run Script( "SEM: Path Analysis w/ Latent" );
obj << (Fit[1] << Copy Model Specification());
obj2 = dt << Structural Equation Models( Model Variables( 2 :: 12 ) );
obj2 << Paste Model Specification();

```

### Correlation of Estimates

**Syntax:** obj << Correlation of Estimates( state=0|1 )

**Description:** Shows or hides a report that contains the correlation matrix of the parameter estimates for the model.

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Correlation of Estimates( 1 );

```

### Correlation of Estimates Heat Map

**Syntax:** obj << Correlation of Estimates Heat Map( state=0|1 )

**Description:** Shows or hides a report that contains a heat map of the correlations among the estimates of the model.

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Correlation of Estimates Heat Map( 1 );

```

### Covariance of Estimates

**Syntax:** obj << Covariance of Estimates( state=0|1 )

**Description:** Shows or hides a report that contains the covariance matrix of the parameter estimates for the model.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Covariance of Estimates( 1 );

```

### Covariance of Estimates Heat Map

**Syntax:** obj << Covariance of Estimates Heat Map( state=0|1 )

**Description:** Shows or hides a report that contains a heat map of the covariances among the estimates of the model.

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Covariance of Estimates Heat Map( 1 );

```

### Covariances

**Syntax:** obj << Covariances

**Description:** Adds covariances between variables in the model.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Leadership_Avg, :Conflict_Avg ),
	Model Specification(
		Means( {"Constant", {:Leadership_Avg, :Conflict_Avg}} ),
		Covariances( {:Leadership_Avg, {:Conflict_Avg}} ),
		Variances(
			{:Leadership_Avg, {:Leadership_Avg}},
			{:Conflict_Avg, {:Conflict_Avg}}
		)
	)
);

```

### Define Time Values

**Syntax:** obj << Define Time Values

**Description:** Defines the occasions of measurement for the repeated observations. These values are used for specifying longitudinal models.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt << Structural Equation Models(
	Model Variables(
		:Multiple Choice Year1, :Multiple Choice Year3, :Multiple Choice Year4
	),
	Fit(
		Model Name( "Linear Growth Model" ),
		Define Time Values( {0, 2, 3} ),
		New Latent( "Intercept", "Slope" ),
		Means( {"Constant", {"Intercept", "Slope"}} ),
		Loadings(
			{"Intercept", {:Multiple Choice Year1, :Multiple Choice Year3,
			:Multiple Choice Year4}, {1, 1, 1}},
			{"Slope", {:Multiple Choice Year1, :Multiple Choice Year3,
			:Multiple Choice Year4}, {0, 2, 3}}
		),
		Variances(
			{:Multiple Choice Year1, {:Multiple Choice Year1}, {"b1"}},
			{:Multiple Choice Year3, {:Multiple Choice Year3}, {"b1"}},
			{:Multiple Choice Year4, {:Multiple Choice Year4}, {"b1"}},
			{"Intercept", {"Intercept"}},
			{"Slope", {"Slope"}}
		),
		Covariances( {"Intercept", {"Slope"}} ),
		Path Diagram Properties( Show Means( 1 ) ),
		Predicted Values Plot( 1, 1 )
	)
);

```

### Equation Details

**Syntax:** obj << Equation Details( state=0|1 )

**Description:** Shows or hides a report that contains details of each equation in the model.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Estimation Method( "MIIV Two-Stage Least Squares" ),
	Fit(
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		)
	)
);
obj << Equation Details( 0 );

```

### Fit Indices

**Syntax:** obj << Fit Indices( state=0|1 )

**Description:** Shows or hides a report that contains fit indices for the model.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Fit Indices( 1 );

```

### Indirect Effects

**Syntax:** obj << Indirect Effects( state=0|1 )

**Description:** Shows or hides all available indirect effects in the model.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Indirect Effects( 1 );

```

### Loadings

**Syntax:** obj << Loadings

**Description:** Adds loadings to latent variables in the model.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		)
	)
);

```

### Means/Intercepts

**Syntax:** obj << Means/Intercepts

**Description:** Adds means or intercepts to the variables in the model.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Model Specification(
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}}
		)
	)
);

```

### Model Implied Correlations

**Syntax:** obj << Model Implied Correlations( state=0|1 )

**Description:** Shows or hides a report that contains the correlation matrix that is implied by the model.

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Model Implied Correlations( 1 );

```

### Model Implied Correlations Heat Map

**Syntax:** obj << Model Implied Correlations Heat Map( state=0|1 )

**Description:** Shows or hides a report that contains a heat map of the correlations implied by the model.

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Model Implied Correlations Heat Map( 1 );

```

### Model Implied Covariances

**Syntax:** obj << Model Implied Covariances( state=0|1 )

**Description:** Shows or hides a report that contains the covariance matrix that is implied by the model.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Model Implied Covariances( 1 );

```

### Model Implied Covariances Heat Map

**Syntax:** obj << Model Implied Covariances Heat Map( state=0|1 )

**Description:** Shows or hides a report that contains a heat map of the covariances implied by the model.

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Model Implied Covariances Heat Map( 1 );

```

### Model Implied Means

**Syntax:** obj << Model Implied Means( state=0|1 )

**Description:** Shows or hides a report that contains the means for each variable that are implied by the model.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Model Implied Means( 1 );

```

### Model Name

**Syntax:** obj << Model Name

**Description:** Sets a model name.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Leadership_Avg, :Conflict_Avg ),
	Model Specification(
		Model Name( "Means and Variances Model" ),
		Means( {"Constant", {:Leadership_Avg, :Conflict_Avg}} ),
		Variances(
			{:Leadership_Avg, {:Leadership_Avg}},
			{:Conflict_Avg, {:Conflict_Avg}}
		)
	)
);

```

### Modification Indices

**Syntax:** obj << Modification Indices( state=0|1 )

**Description:** Shows or hides a report that contains the estimates of model modification indices. These values can be used to determine which parameters might be added to the model to improve model fit.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Modification Indices( 1 );

```

### Modification Indices for Covariances

**Syntax:** obj << Modification Indices for Covariances( state=0|1 )

**Description:** Shows or hides a report that contains the estimates of model modification indices. These values can be used to determine which parameters might be added to the model to improve model fit.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Modification Indices for Covariances( 1 );

```

### Modification Indices for Loadings

**Syntax:** obj << Modification Indices for Loadings( state=0|1 )

**Description:** Shows or hides a report that contains the estimates of model modification indices. These values can be used to determine which parameters might be added to the model to improve model fit.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Modification Indices for Loadings( 1 );

```

### Modification Indices for Means

**Syntax:** obj << Modification Indices for Means( state=0|1 )

**Description:** Shows or hides a report that contains the estimates of model modification indices. These values can be used to determine which parameters might be added to the model to improve model fit.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt << Structural Equation Models(
	Model Variables(
		:Multiple Choice Year1, :Multiple Choice Year2, :Multiple Choice Year3,
		:Multiple Choice Year4
	),
	Fit(
		Model Name( "Linear Growth Model" ),
		New Latent( "Intercept", "Slope" ),
		Means( {"Constant", {"Intercept", "Slope"}} ),
		Loadings(
			{"Intercept", {:Multiple Choice Year1, :Multiple Choice Year2,
			:Multiple Choice Year3, :Multiple Choice Year4}, {1, 1, 1, 1}},
			{"Slope", {:Multiple Choice Year1, :Multiple Choice Year2,
			:Multiple Choice Year3, :Multiple Choice Year4}, {0, 1, 2, 3}}
		),
		Variances(
			{:Multiple Choice Year1, {:Multiple Choice Year1}, {"b1"}},
			{:Multiple Choice Year2, {:Multiple Choice Year2}, {"b1"}},
			{:Multiple Choice Year3, {:Multiple Choice Year3}, {"b1"}},
			{:Multiple Choice Year4, {:Multiple Choice Year4}, {"b1"}},
			{"Intercept", {"Intercept"}},
			{"Slope", {"Slope"}}
		),
		Covariances( {"Intercept", {"Slope"}} ),
		Path Diagram Properties( Show Means( 1 ) )
	)
);
obj << Modification Indices for Means( 1 );

```

### Modification Indices for Regressions

**Syntax:** obj << Modification Indices for Regressions( state=0|1 )

**Description:** Shows or hides a report that contains the estimates of model modification indices. These values can be used to determine which parameters might be added to the model to improve model fit.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Modification Indices for Regressions( 1 );

```

### Modification Indices for Variances

**Syntax:** obj << Modification Indices for Variances( state=0|1 )

**Description:** Shows or hides a report that contains the estimates of model modification indices. These values can be used to determine which parameters might be added to the model to improve model fit.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt << Structural Equation Models(
	Model Variables(
		:Multiple Choice Year1, :Multiple Choice Year2, :Multiple Choice Year3,
		:Multiple Choice Year4
	),
	Fit(
		Model Name( "Linear Growth Model" ),
		New Latent( "Intercept", "Slope" ),
		Means( {"Constant", {"Intercept", "Slope"}} ),
		Loadings(
			{"Intercept", {:Multiple Choice Year1, :Multiple Choice Year2,
			:Multiple Choice Year3, :Multiple Choice Year4}, {1, 1, 1, 1}},
			{"Slope", {:Multiple Choice Year1, :Multiple Choice Year2,
			:Multiple Choice Year3, :Multiple Choice Year4}, {0, 1, 2, 3}}
		),
		Variances(
			{:Multiple Choice Year1, {:Multiple Choice Year1}, {.25}},
			{:Multiple Choice Year2, {:Multiple Choice Year2}, {.25}},
			{:Multiple Choice Year3, {:Multiple Choice Year3}, {.25}},
			{:Multiple Choice Year4, {:Multiple Choice Year4}, {.25}},
			{"Intercept", {"Intercept"}},
			{"Slope", {"Slope"}}
		),
		Covariances( {"Intercept", {"Slope"}} ),
		Path Diagram Properties( Show Means( 1 ) )
	)
);
obj << Modification Indices for Variances( 1 );

```

### New Latent

**Syntax:** obj << New Latent

**Description:** Adds a new latent variable in the model.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Model Specification(
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		)
	)
);

```

### Normalized Residuals

**Syntax:** obj << Normalized Residuals( state=0|1 )

**Description:** Shows or hides a report that contains a matrix of the normalized residuals for the model.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Normalized Residuals( 1 );

```

### Normalized Residuals Heat Map

**Syntax:** obj << Normalized Residuals Heat Map( state=0|1 )

**Description:** Shows or hides a report that contains a heat map of the normalized residuals for the model.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Normalized Residuals Heat Map( 1 );

```

### Parameter Estimates

**Syntax:** obj << Parameter Estimates( state=0|1 )

**Description:** Shows or hides a report that contains the unstandardized parameter estimates for the model. On by default.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Parameter Estimates( 0 );

```

### Paste Diagram Properties

**Syntax:** obj << Paste Diagram Properties

**Description:** Pastes the path diagram properties from the clipboard into the current SEM path diagram.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt2 = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt2 << Run Script( "SEM: Compare Growth Trajectories" );
obj << Copy Diagram Properties();
obj2 = dt << Structural Equation Models( Model Variables( 2 :: 12 ) );
obj2 << Paste Diagram Properties();

```

### Path Diagram Properties

**Syntax:** obj << Path Diagram Properties

**JMP Version Added:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt << Structural Equation Models(
	Model Variables(
		:Multiple Choice Year1, :Multiple Choice Year2, :Multiple Choice Year3,
		:Multiple Choice Year4
	),
	Fit(
		Model Name( "Linear Growth Model" ),
		New Latent( "Intercept", "Slope" ),
		Means( {"Constant", {"Intercept", "Slope"}} ),
		Loadings(
			{"Intercept", {:Multiple Choice Year1, :Multiple Choice Year2,
			:Multiple Choice Year3, :Multiple Choice Year4}, {1, 1, 1, 1}},
			{"Slope", {:Multiple Choice Year1, :Multiple Choice Year2,
			:Multiple Choice Year3, :Multiple Choice Year4}, {0, 1, 2, 3}}
		),
		Variances(
			{:Multiple Choice Year1, {:Multiple Choice Year1}, {"b1"}},
			{:Multiple Choice Year2, {:Multiple Choice Year2}, {"b1"}},
			{:Multiple Choice Year3, {:Multiple Choice Year3}, {"b1"}},
			{:Multiple Choice Year4, {:Multiple Choice Year4}, {"b1"}},
			{"Intercept", {"Intercept"}},
			{"Slope", {"Slope"}}
		),
		Covariances( {"Intercept", {"Slope"}} ),
		Path Diagram Properties( Show Means( 1 ) )
	)
);

```

### Predicted Values Plot

**Syntax:** obj << Predicted Values Plot( state=0|1 )

**Description:** Shows or hides a plot of predicted values for endogenous variables in the model.

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt << Run Script( "SEM: LGC with LDF" );
obj << Predicted Values Plot( 1, 1 );

```

### Prediction Profiler

**Syntax:** obj << Prediction Profiler

**Description:** Shows or hides a prediction profiler for the selected outcomes given the selected predictors and the specified model.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Run Script( "SEM: Path Analysis w / Latent" );
obj << Prediction Profiler(
	1,
	Confidence Intervals( 1 ),
	Term Value(
		Leadership( 0, Lock( 0 ), Show( 1 ) ),
		Conflict( 0, Lock( 0 ), Show( 1 ) )
	),
	Y Terms( Conflict, Satisfaction )
);

```

### R Square for Endogenous Variables

**Syntax:** obj << R Square for Endogenous Variables( state=0|1 )

**Description:** Shows or hides a report with RSquare values for all endogenous variables in the model.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << R Square for Endogenous Variables( 1 );

```

### RAM Matrices

**Syntax:** obj << RAM Matrices( state=0|1 )

**Description:** Shows or hides a report that contains the model matrices used in reticular action model (RAM) notation.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << RAM Matrices( 1 );

```

### Recall in Model Specification

**Syntax:** obj << Recall in Model Specification

**Description:** Sets the model in the Model Specification report to the specified model.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Recall in Model Specification( 1 );

```

### Regressions

**Syntax:** obj << Regressions

**Description:** Adds regression paths to the model.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Leadership_Avg, :Conflict_Avg ),
	Model Specification(
		Means( {"Constant", {:Leadership_Avg, :Conflict_Avg}} ),
		Regressions( {:Leadership_Avg, {:Conflict_Avg}} ),
		Variances(
			{:Leadership_Avg, {:Leadership_Avg}},
			{:Conflict_Avg, {:Conflict_Avg}}
		)
	)
);

```

### Remove Fit

**Syntax:** obj << Remove Fit

**Description:** Removes the specified model report from the report window.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Remove Fit( 1 );

```

### Residuals

**Syntax:** obj << Residuals( state=0|1 )

**Description:** Shows or hides a report that contains a matrix of the residuals for the model. This matrix is the difference between the model implied covariance matrix and the sample covariance matrix.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Residuals( 1 );

```

### Save Bartlett Factor Scores

**Syntax:** obj << Save Bartlett Factor Scores

**Description:** Saves a column with the factor score for each variable to columns in the data table. The factor scores are calculated in a hidden column that is also added to the data table. Bartlett&apos;s method is used to estimate these scores.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Save Bartlett Factor Scores();

```

### Save Factor Scores

**Syntax:** obj << Save Factor Scores

**Description:** Saves a column with the factor score for each variable to columns in the data table. The factor scores are calculated in a hidden column that is also added to the data table. The regression method is used to estimate these scores.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Save Factor Scores();

```

### Save Observational Residuals

**Syntax:** obj << Save Observational Residuals

**Description:** Saves columns to the data table that contain residual values of the observed outcomes in the model.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Save Observational Residuals();

```

### Save Prediction Formulas

**Syntax:** obj << Save Prediction Formulas

**Description:** Saves columns to the data table that contain formulas for predicted values of the observed outcomes in the model.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Save Prediction Formulas();

```

### Show Path Diagram

**Syntax:** obj << Show Path Diagram( state=0|1 )

**Description:** Shows or hides the SEM path diagram. On by default.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Show Path Diagram( 0 );

```

### Specific Indirect Effects

**Syntax:** obj << Specific Indirect Effects

**Description:** Enables you to indicate the specific indirect effects to estimate from the model.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Specific Indirect Effects( {"Ind60", "Dem65"} );

```

### Standardized Parameter Estimates

**Syntax:** obj << Standardized Parameter Estimates( state=0|1 )

**Description:** Shows or hides a report that contains the standardized parameter estimates for the model.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Standardized Parameter Estimates( 1 );

```

### Summary of Fit

**Syntax:** obj << Summary of Fit( state=0|1 )

**Description:** Shows or hides a report that contains details of the model fit. On by default.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Summary of Fit( 0 );

```

### Total Effects

**Syntax:** obj << Total Effects( state=0|1 )

**Description:** Shows or hides all available total effects in the model.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Total Effects( 1 );

```

### Variances

**Syntax:** obj << Variances

**Description:** Adds variances to the variables in the model.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Model Specification(
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}}
		)
	)
);

```

## Structural Equation Models Path Diagram

### Constant Border Color

**Syntax:** obj << Path Diagram Properties( Constant Border Color ( color ) );

**Description:** Modifies the border color of Constant variables in the path diagram.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Means( 1 ), Constant Border Color( "Blue" ) );

```

### Constant Fill Color

**Syntax:** obj << Path Diagram Properties( Constant Fill Color ( color ) );

**Description:** Modifies the fill color of Constant variables in the path diagram.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Means( 1 ), Constant Fill Color( "Blue" ) );

```

### Constant Font

**Syntax:** obj << Path Diagram Properties( Constant Font ( font ) );

**Description:** Modifies the font of Manifest variables in the path diagram.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Means( 1 ), Constant Font( "Sitka Small" ) );

```

### Constant Height

**Syntax:** obj << Path Diagram Properties( Constant Height ( number ) );

**Description:** Modifies the height (pixels) of Constant variables in the path diagram.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Means( 1 ), Constant Height( 20 ) );

```

### Constant Shape

**Syntax:** obj << Constant Shape

**Description:** Modifies the default appearance of the Constant in the path diagram, which is used to represent variables&apos; means and intercepts.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties(
	Show Means( 1 ),
	Constant Shape( {Fill Color( "Medium Light BlueCyan" ), Width( 80 ), Height( 40 )} )
);

```

### Constant Size Option

**Syntax:** obj << Path Diagram Properties( Constant Size Option ( <Default | Scale To Text | Custom> ) );

**Description:** Changes the size mode for the Constant in the path diagram.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Constant Size Option( "Scale To Text" ) );

```

### Constant Text Color

**Syntax:** obj << Path Diagram Properties( Constant Text Color ( color ) );

**Description:** Modifies the text color of Constant variables in the path diagram.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Means( 1 ), Constant Text Color( "Blue" ) );

```

### Constant Width

**Syntax:** obj << Path Diagram Properties( Constant Width ( number ) );

**Description:** Modifies the width (pixels) of Constant variables in the path diagram.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Means( 1 ), Constant Width( 71 ) );

```

### Copy Diagram

**Syntax:** obj << Copy Diagram

**Description:** Saves a picture of the diagram window to the clipboard.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
rpt = obj << Report();
rpt[Node Graph Box( 1 )] << Copy Diagram;

```

### Copy Diagram Properties

**Syntax:** obj << Copy Diagram Properties

**Description:** Saves a copy of the diagram-specific script settings to the clipboard. These settings can then be applied to other diagrams.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
rpt = obj << Report();
diagram = rpt[Node Graph Box( 1 )];
diagram << Latent Fill Color( "Blue" );
diagram << Paths Color( "Green" );
diagram << Copy Diagram Properties;
obj = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" ) <<
Run Script( "SEM: Path Analysis w/ Latent" );
rpt = obj << Report();
other_diagram = rpt[Node Graph Box( 1 )];
other_diagram << Paste Diagram Properties;

```

### Dashed Lines for Nonsignificant p-values

**Syntax:** obj << Path Diagram Properties ("Dashed Lines for Nonsignificant p - values"n( 0 | 1 ) )

**Description:** Shows or hides dashed lines for paths with non-significant p-values. On by default.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( "Dashed Lines for Nonsignificant p - values"n( 0 ) );

```

### Diagram Size

**Syntax:** obj << Path Diagram Properties( Diagram Size ( {x, y} ) )

**Description:** Changes the size of the path diagram.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties(
	Place Nodes(
		{{"Energy60", 88, 184}, {"Fair60", 374, 94}, {"Fair65", 660, 184}, {"FrOpp60", 301,
		94}, {"FrOpp65", 587, 184}, {"FrPress60", 229, 94}, {"FrPress65", 515, 184},
		{"Labor60", 161, 184}, {"Legis60", 447, 94}, {"Legis65", 732, 184}, {"Prod60", 16,
		184}}
	),
	Rotate Loops(
		{{"Dem60", 1.571}, {"Dem65", 1.571}, {"Energy60", 4.712}, {"Fair60", 4.712},
		{"Fair65", 4.712}, {"FrOpp60", 4.712}, {"FrOpp65", 4.712}, {"FrPress60", 4.712},
		{"FrPress65", 4.712}, {"Ind60", 1.571}, {"Labor60", 4.712}, {"Legis60", 4.712},
		{"Legis65", 4.712}, {"Prod60", 4.712}}
	)
);

```

### Enable Grid

**Syntax:** obj << Path Diagram Properties ( Enable Grid( 0|1) )

**Description:** Enables a visual grid in the Path Diagram.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Enable Grid( 1 ) );

```

### Fill Nodes With R Squared

**Syntax:** obj << Path Diagram Properties ( Fill Nodes With R Squared ( 0|1) )

**Description:** Specifies that nodes in the fitted model be partially filled based on their estimated coefficient of determination. On by default.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Fill Nodes With R Squared( 1 ) );

```

### Latent Border Color

**Syntax:** obj << Path Diagram Properties( Latent Border Color ( color ) );

**Description:** Modifies the border color of Latent variables in the path diagram.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Latent Border Color( "Blue" ) );

```

### Latent Fill Color

**Syntax:** obj << Path Diagram Properties( Latent Fill Color ( color ) );

**Description:** Modifies the fill color of Latent variables in the path diagram.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Latent Fill Color( "Blue" ) );

```

### Latent Font

**Syntax:** obj << Path Diagram Properties( Manifest Font ( font ) );

**Description:** Modifies the font of Latent variables in the path diagram.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Latent Font( "Sitka Small" ) );

```

### Latent Height

**Syntax:** obj << Path Diagram Properties( Latent Height ( number ) );

**Description:** Modifies the height (pixels) of Latent variables in the path diagram.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Latent Height( 30 ) );

```

### Latent Shape

**Syntax:** obj << Latent Shape

**Description:** Modifies the default appearance of Latent Variables in the path diagram.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties(
	Latent Shape( {Fill Color( "Medium Light BlueCyan" ), Width( 80 ), Height( 40 )} )
);

```

### Latent Size Option

**Syntax:** obj << Path Diagram Properties( Latent Size Option ( <Default | Scale To Text | Custom> ) );

**Description:** Changes the size mode for Latent nodes in the path diagram.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Latent Size Option( "Scale To Text" ) );

```

### Latent Text Color

**Syntax:** obj << Path Diagram Properties( Latent Text Color ( color ) );

**Description:** Modifies the text color of Latent variables in the path diagram.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Latent Text Color( "Blue" ) );

```

### Latent Width

**Syntax:** obj << Path Diagram Properties( Latent Width ( number ) );

**Description:** Modifies the width (pixels) of Latent variables in the path diagram.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Latent Width( 71 ) );

```

### Layout

**Syntax:** obj << Path Diagram Properties ( Layout("Left To Right"|"Top To Bottom") )

**Description:** Sets the initial layout of the path diagram.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Layout( "Top To Bottom" ) );

```

### Lock Diagram

**Syntax:** obj << Path Diagram Properties ( Lock Diagram( 0|1) )

**Description:** Locks the Path Diagram so that modifications to the model do not cause the layout to change.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Lock Diagram( 1 ) );

```

### Manifest Border Color

**Syntax:** obj << Path Diagram Properties( Manifest Border Color ( color ) );

**Description:** Modifies the border color of Manifest variables in the path diagram.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Manifest Border Color( "Blue" ) );

```

### Manifest Fill Color

**Syntax:** obj << Path Diagram Properties( Manifest Fill Color ( color ) );

**Description:** Modifies the fill color of Manifest variables in the path diagram.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Manifest Fill Color( "Blue" ) );

```

### Manifest Font

**Syntax:** obj << Path Diagram Properties( Manifest Font ( font ) );

**Description:** Modifies the font of Manifest variables in the path diagram.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Manifest Font( "Sitka Small" ) );

```

### Manifest Height

**Syntax:** obj << Path Diagram Properties( Manifest Height ( number ) );

**Description:** Modifies the height (pixels) of Manifest variables in the path diagram.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Manifest Height( 30 ) );

```

### Manifest Shape

**Syntax:** obj << Manifest Shape

**Description:** Modifies the default appearance of Manifest Variables in the path diagram.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Manifest Shape( {Fill Color( "Green" )} ) );

```

### Manifest Size Option

**Syntax:** obj << Path Diagram Properties( Manifest Size Option ( <Default | Scale To Text | Custom> ) );

**Description:** Changes the size mode for Manifest Nodes in the path diagram.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Manifest Size Option( "Scale To Text" ) );

```

### Manifest Text Color

**Syntax:** obj << Path Diagram Properties( Manifest Text Color ( color ) );

**Description:** Modifies the text color of Manifest variables in the path diagram.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Manifest Text Color( "Blue" ) );

```

### Manifest Width

**Syntax:** obj << Path Diagram Properties( Manifest Width ( number ) );

**Description:** Modifies the width (pixels) of Manifest variables in the path diagram.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Manifest Width( 67 ) );

```

### Paste Diagram Properties

**Syntax:** obj << Paste Diagram Properties

**Description:** Pastes a copy of the diagram-specific script settings from the clipboard.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
rpt = obj << Report();
diagram = rpt[Node Graph Box( 1 )];
diagram << Latent Fill Color( "Blue" );
diagram << Paths Color( "Green" );
diagram << Copy Diagram Properties;
obj = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" ) <<
Run Script( "SEM: Path Analysis w/ Latent" );
rpt = obj << Report();
other_diagram = rpt[Node Graph Box( 1 )];
other_diagram << Paste Diagram Properties;

```

### Path Styles

**Syntax:** obj << Path Styles

**Description:** Modifies the default appearance of paths in the path diagram.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Path Styles( {Color( "Green" )} ) );

```

### Path Thickness

**Syntax:** obj << Path Diagram Properties (Path Thickness( "Fixed"|"Map to Stdz. Estimates" ) )

**Description:** Toggles whether the thickness of paths in the diagram is kept at a fixed value or is tied to the strength of its standardized estimate. "Fixed" by default.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Path Thickness( "Map to Stdz. Estimates" ) );

```

### Path Transparency

**Syntax:** obj << Path Diagram Properties (Path Transparency( "Fixed"|"Map to Stdz. Estimates" ) )

**Description:** Toggles whether the transparency of paths in the diagram is kept at a fixed value or is tied to the strength of its standardized estimate.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Path Transparency( "Fixed" ) );

```

### Paths Alpha Level

**Syntax:** obj << Path Diagram Properties( Paths Alpha Level ( number) );

**Description:** Modifies the minimum p-value threshold for using dashed-lines in the path diagram.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Paths Alpha Level( 0.01 ) );

```

### Paths Color

**Syntax:** obj << Path Diagram Properties( Paths Color ( color) );

**Description:** Modifies the color of paths in the path diagram.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Paths Color( "Green" ) );

```

### Paths Font

**Syntax:** obj << Path Diagram Properties( Paths Font ( font ) );

**Description:** Modifies the font used for labeling the paths in the path diagram.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Paths Font( "Segoe Script", 12, "Bold" ) );

```

### Paths Opacity

**Syntax:** obj << Path Diagram Properties( Paths Opacity ( number) );

**Description:** Modifies the opacity of paths in the path diagram.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Paths Opacity( 0.5 ), Path Transparency( "Fixed" ) );

```

### Paths Thickness

**Syntax:** obj << Path Diagram Properties( Paths Thickness ( number) );

**Description:** Modifies the thickness of paths in the path diagram.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Paths Thickness( 2.7103 ) );

```

### Place Nodes

**Syntax:** obj << Path Diagram Properties( Place Nodes ( { {name1, x1, y1}, {name2, x2, y2}, ...} ) )

**Description:** Controls the placement of individual nodes in the path diagram.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties(
	Place Nodes(
		{{"Energy60", 88, 184}, {"Fair60", 374, 94}, {"Fair65", 660, 184}, {"FrOpp60", 301,
		94}, {"FrOpp65", 587, 184}, {"FrPress60", 229, 94}, {"FrPress65", 515, 184},
		{"Labor60", 161, 184}, {"Legis60", 447, 94}, {"Legis65", 732, 184}, {"Prod60", 16,
		184}}
	),
	Rotate Loops(
		{{"Dem60", 1.571}, {"Dem65", 1.571}, {"Energy60", 4.712}, {"Fair60", 4.712},
		{"Fair65", 4.712}, {"FrOpp60", 4.712}, {"FrOpp65", 4.712}, {"FrPress60", 4.712},
		{"FrPress65", 4.712}, {"Ind60", 1.571}, {"Labor60", 4.712}, {"Legis60", 4.712},
		{"Legis65", 4.712}, {"Prod60", 4.712}}
	)
);

```

### R2 Fill Color

**Syntax:** obj << Path Diagram Properties ( R2 Fill Color ( Color ) )

**Description:** Specifies the color for the partial fill that represents a variable&apos;s estimated R-square value.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( R2 Fill Color( Cyan ) );

```

### Rotate Latent Groups

**Syntax:** obj << Rotate Latent Groups

**Description:** Rotates the orientation of all latent indicators in the diagram. If any latent groups are selected, this option rotates the orientation of only the selected latent groups.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
rpt = obj << Report();
diagram = rpt[Node Graph Box( 1 )];
diagram << Rotate Latent Groups;

```

### Rotate Loops

**Syntax:** obj << Path Diagram Properties( Rotate Loops ( { {name1, angle1}, {name2, angle2}, ...} ) )

**Description:** Controls the rotation of variance loops within the path diagram. Angles are measured clockwise in radians.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties(
	Place Nodes(
		{{"Energy60", 88, 184}, {"Fair60", 374, 94}, {"Fair65", 660, 184}, {"FrOpp60", 301,
		94}, {"FrOpp65", 587, 184}, {"FrPress60", 229, 94}, {"FrPress65", 515, 184},
		{"Labor60", 161, 184}, {"Legis60", 447, 94}, {"Legis65", 732, 184}, {"Prod60", 16,
		184}}
	),
	Rotate Loops(
		{{"Dem60", 1.571}, {"Dem65", 1.571}, {"Energy60", 4.712}, {"Fair60", 4.712},
		{"Fair65", 4.712}, {"FrOpp60", 4.712}, {"FrOpp65", 4.712}, {"FrPress60", 4.712},
		{"FrPress65", 4.712}, {"Ind60", 1.571}, {"Labor60", 4.712}, {"Legis60", 4.712},
		{"Legis65", 4.712}, {"Prod60", 4.712}}
	)
);

```

### SEM Node Graph Display

**Syntax:** SEM Node Graph Display

### Show Constant Mean Square

**Syntax:** obj << Show Constant Mean Square( state=0|1 )

**Description:** Shows or hides the edge associated with the constant in the path diagram.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Constant Mean Square( 1 ) );

```

### Show Covariances

**Syntax:** obj << Show Covariances( state=0|1 )

**Description:** Shows or hides the bidirectional arrows that represent covariances in the path diagram. On by default.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Covariances( 0 ) );

```

### Show Equality Constraints

**Syntax:** obj << Show Equality Constraints( state=0|1 )

**Description:** Shows or hides the equality constraints (Fixed Values or Labels) on edges in the path diagram. On by default.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Equality Constraints( 0 ) );

```

### Show Estimates

**Syntax:** obj << Show Estimates( "Unstandardized"|"Standardized"|"None" )

**Description:** Shows or hides the unstandardized parameter estimates in the path diagram.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Estimates( "None" ) );

```

### Show Loadings

**Syntax:** obj << Show Loadings( state=0|1 )

**Description:** Shows or hides the latent variable indicators in the path diagram. On by default.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Loadings( 0 ) );

```

### Show Means/Intercepts

**Syntax:** obj << Show Means/Intercepts( state=0|1 )

**Description:** Shows or hides the  means in the SEM Platform.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Means( 1 ) );

```

### Show R Squared Values

**Syntax:** obj << Show R Squared Values( state=0|1 )

**Description:** Shows or hides the R-square values inside the nodes in the path diagram.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show R Squared Values( 1 ) );

```

### Show Regressions

**Syntax:** obj << Show Regressions( state=0|1 )

**Description:** Shows or hides regressions in the SEM Platform. On by default.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Regressions( 0 ) );

```

### Show Variances

**Syntax:** obj << Show Variances( state=0|1 )

**Description:** Shows or hides the bidirectional arrows that represent variances in the path diagram. On by default.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Variances( 0 ) );

```

## Structural Equation Models Specification

### Covariances

**Syntax:** obj << Covariances

**Description:** Adds covariances between variables in the model.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Leadership_Avg, :Conflict_Avg ),
	Model Specification(
		Means( {"Constant", {:Leadership_Avg, :Conflict_Avg}} ),
		Covariances( {:Leadership_Avg, {:Conflict_Avg}} ),
		Variances(
			{:Leadership_Avg, {:Leadership_Avg}},
			{:Conflict_Avg, {:Conflict_Avg}}
		)
	)
);

```

### Define Time Values

**Syntax:** obj << Define Time Values

**Description:** Defines the occasions of measurement for the repeated observations. These values are used for specifying longitudinal models.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt << Structural Equation Models(
	Model Variables(
		:Multiple Choice Year1, :Multiple Choice Year3, :Multiple Choice Year4
	),
	Model Specification(
		Model Name( "Longitudinal Model" ),
		Define Time Values( {0, 2, 3} )
	)
);

```

### Loadings

**Syntax:** obj << Loadings

**Description:** Adds loadings to latent variables in the model.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		)
	)
);

```

### Max Iterations

**Syntax:** Structural Equation Models(..., Max Iterations( 3 )

**Description:** Sets the maximum number of iterations for convergence. "1000" by default.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Leadership_Avg, :Conflict_Avg ),
	Model Specification(
		Means( {"Constant", {:Leadership_Avg, :Conflict_Avg}} ),
		Covariances( {:Leadership_Avg, {:Conflict_Avg}} ),
		Variances(
			{:Leadership_Avg, {:Leadership_Avg}},
			{:Conflict_Avg, {:Conflict_Avg}}
		),
		Max Iterations( 3 )
	)
);

```

### Means/Intercepts

**Syntax:** obj << Means/Intercepts

**Description:** Adds means or intercepts to the variables in the model.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Model Specification(
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}}
		)
	)
);

```

### Model Name

**Syntax:** obj << Model Name

**Description:** Specifies a name for the model.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Leadership_Avg, :Conflict_Avg ),
	Model Specification(
		Model Name( "Means and Variances Model" ),
		Means( {"Constant", {:Leadership_Avg, :Conflict_Avg}} ),
		Variances(
			{:Leadership_Avg, {:Leadership_Avg}},
			{:Conflict_Avg, {:Conflict_Avg}}
		)
	)
);

```

### Model Notes

**Syntax:** obj << Model Notes

**Description:** Specifies notes for the model.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Leadership_Avg, :Conflict_Avg ),
	Model Specification(
		Model Name( "Means and Variances Model" ),
		Model Notes(
			"This is a simple model with only means and variances for each variable"
		),
		Means( {"Constant", {:Leadership_Avg, :Conflict_Avg}} ),
		Variances(
			{:Leadership_Avg, {:Leadership_Avg}},
			{:Conflict_Avg, {:Conflict_Avg}}
		)
	)
);

```

### New Latent

**Syntax:** obj << New Latent

**Description:** Adds a new latent variable in the model.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Model Specification(
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		)
	)
);

```

### Regressions

**Syntax:** obj << Regressions

**Description:** Adds regression paths to the model.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Leadership_Avg, :Conflict_Avg ),
	Model Specification(
		Means( {"Constant", {:Leadership_Avg, :Conflict_Avg}} ),
		Regressions( {:Leadership_Avg, {:Conflict_Avg}} ),
		Variances(
			{:Leadership_Avg, {:Leadership_Avg}},
			{:Conflict_Avg, {:Conflict_Avg}}
		)
	)
);

```

### Variances

**Syntax:** obj << Variances

**Description:** Adds variances to the variables in the model.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Model Specification(
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}}
		)
	)
);

```

### Action

**Syntax:** obj << Action

**Description:** All-purpose trapdoor within a platform to insert expressions to evaluate. Temporarily sets the DisplayBox and DataTable contexts to the Platform.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Add Manifest Variables

**Syntax:** obj << Add Manifest Variables

**Description:** Relaunches the platform using the existing model specification and including the newly added manifest variables.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Run Script( "SEM: CFA 1Factor Conflict UI" );
obj << Add Manifest Variables();

```

### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**Description:** Apply a previously created preset to the object, updating the options and customizations to match the saved settings.

**JMP Version Added:** 18

**Anonymous preset**

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**Search within folder(s)**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

### Automatic Recalc

**Syntax:** obj << Automatic Recalc( state=0|1 )

**Description:** Redoes the analysis automatically for exclude and data changes. If the Automatic Recalc option is turned on, you should consider using Wait(0) commands to ensure that the exclude and data changes take effect before the recalculation.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Bootstrap Inference

**Syntax:** obj << Bootstrap Inference

**Description:** Performs bootstrapping for a user-specified selection of estimates in available fitted models of the SEM report.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Bootstrap Inference( Parameter Estimates( 1 ), Indirect Effects( 1 ) );

```

### Broadcast

**Syntax:** obj << Broadcast(message)

**Description:** Broadcasts a message to a platform. If return results from individual objects are tables, they are concatenated if possible, and the final format is identical to either the result from the Save Combined Table option in a Table Box or the result from the Concatenate option using a Source column. Other than those, results are stored in a list and returned.

**JMP Version Added:** 18

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

### Compare Selected Models

**Syntax:** obj << Compare Selected Models

**Description:** Compares models selected in the Model Comparison table.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Run Script( "SEM: Measurement Models" );
obj << Compare Selected Models( {"Orthogonal 3-Factor CFA", "3-Factor CFA"} );

```

### Copy ByGroup Script

**Syntax:** obj << Copy ByGroup Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Diagram Properties

**Syntax:** obj << Copy Diagram Properties

**Description:** Copies the current path diagram properties to the clipboard. You can then paste the properties into another SEM path diagram.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt2 = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt2 << Run Script( "SEM: Compare Growth Trajectories" );
obj << Copy Diagram Properties();
obj2 = dt << Structural Equation Models( Model Variables( 2 :: 12 ) );
obj2 << Paste Diagram Properties();

```

### Copy Model Specification

**Syntax:** obj << Copy Model Specification

**Description:** Copies the current structural equation model specifications to the clipboard. You can then paste the model specifications into another SEM platform report.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Run Script( "SEM: Path Analysis no Latent" );
obj << Copy Model Specification();
obj2 = dt << Structural Equation Models(
	Model Variables( :Leadership_Avg, :Conflict_Avg, :Satisfaction_Avg )
);
obj2 << Paste Model Specification();

```

### Copy Script

**Syntax:** obj << Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
obj << Copy Script;

```

### Data Table Window

**Syntax:** obj << Data Table Window

**Description:** Move the data table window for this analysis to the front.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
obj << Data Table Window;

```

### Estimation Method

**Syntax:** obj = Structural Equation Models(...Estimation Method( "Maximum Likelihood (ML and FIML)"|"Maximum Likelihood with Robust Inference"|"MIIV Two-Stage Least Squares" )...)

**Description:** Enables using different estimators for analysis.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Estimation Method( "MIIV Two-Stage Least Squares" ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Goal_L, :Work_L, :Interact_L, "Leader"}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 ),
		Assess Measurement Model( 1 )
	)
);

```

### Fit

**Syntax:** obj << Fit

**Description:** Determines the structural equation model to be fit.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		)
	)
);

```

### Fit Independence Model

**Syntax:** obj = Structural Equation Models(...Fit Independence Model( state=0|1 )...)

**Description:** Disables fitting the independence model upon launching the platform. On by default.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit Independence Model( 0 )
);

```

### Fit Unrestricted Model

**Syntax:** obj << Fit Unrestricted Model( state=0|1 )

**Description:** Disables fitting the unrestricted, also known as saturated, model upon launching the platform.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit Unrestricted Model( 0 )
);

```

### Freq

**Syntax:** obj << Freq( column )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	),
	Freq( _freqcol )
);

```

### Full Information Multivariate Statistics

**Syntax:** obj << Full Information Multivariate Statistics( state=0|1 )

**Description:** Shows or hides a multivariate simple statistics report, where the statistics are estimated with full information maximum likelihood to account for missing data.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L )
);
obj << Full Information Multivariate Statistics( 1 );

```

### Generate R Code

**Syntax:** obj << Generate R Code

**Description:** Generates R code for the currently specified model. The code is written to a script editor window.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Run Script( "SEM: Path Analysis no Latent" );
obj << Generate R Code();

```

### Get By Levels

**Syntax:** obj << Get By Levels

**Description:** Returns an associative array mapping the by group columns to their values.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**Syntax:** obj << Get ByGroup Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	),
	By( _bycol )
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Syntax:** obj << Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

**General**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Platform with Filter**

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**Syntax:** obj << Get Group Platform

**Description:** Return the Group Platform object if this platform is part of a Group. Otherwise, returns Empty().

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntax:** obj << Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntax:** obj << Get Timing

**Description:** Times the platform launch.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**Syntax:** obj << Get Web Support

**Description:** Return a number indicating the level of Interactive HTML support for the display object. 1 means some or all elements are supported. 0 means no support.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Where Expr

**Syntax:** obj << Get Where Expr

**Description:** Returns the Where expression for the data subset, if the platform was launched with By() or Where(). Otherwise, returns Empty()

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Groups

**Syntax:** obj << Groups( column )

**Description:** Specifies the grouping variable for performing multiple group analysis.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
dt << Structural Equation Models( Model Variables( 4 :: 7 ), Groups( :Sex ) );

```

### Hide Model

**Syntax:** obj << Hide Model

**Description:** Hides models according to selections in the model comparison table.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		)
	),
	Hide Model( {3} )
);

```

### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Description:** Ignores the current settings of the platform&apos;s preferences. The message is ignored when sent to the platform after creation.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Launch Explore Missing Values

**Syntax:** obj << Launch Explore Missing Values

**Description:** Launches the Explore Missing Values platform.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L )
);
obj << Launch Explore Missing Values( 1 );

```

### Launch Explore Outliers

**Syntax:** obj << Launch Explore Outliers

**Description:** Launches the Explore Outliers platform.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L )
);
obj << Launch Explore Outliers( 1 );

```

### Local Data Filter

**Syntax:** obj << Local Data Filter

**Description:** To filter data to specific groups or ranges, but local to this platform

```js

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

### Mean

**Syntax:** obj = Structural Equation Models(...<Mean( column )>...)

**Description:** Specifies means for each manifest variable in a correlation or covariance matrix.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
mat = dt[0, 2 :: 5];
mat_cor = Correlation( mat );
mat_means = V Mean( mat );
mat_sds = V Std( mat );
As Table( mat_cor || mat_means` || mat_sds` ) << Set Name( "Correlation" );
Data Table( "Correlation" ) << Structural Equation Models(
	Data Format( "Matrix" ),
	Model Variables( 1 :: 4 ),
	Mean( :Col5 ),
	Std Dev( :Col6 ),
	Sample Size( 200 )
);

```

### Model Specification

**Syntax:** obj << Model Specification

**Description:** Enables specification of a structural equation model.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Leadership_Avg, :Conflict_Avg ),
	Model Specification(
		Model Name( "Means and Variances Model" ),
		Means( {"Constant", {:Leadership_Avg, :Conflict_Avg}} ),
		Variances(
			{:Leadership_Avg, {:Leadership_Avg}},
			{:Conflict_Avg, {:Conflict_Avg}}
		)
	)
);

```

### Model Variables

**Syntax:** obj << Model Variables( column(s) )

**Description:** Specifies the variables that will be submitted for analysis.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L )
);

```

### New JSL Preset

**Syntax:** New JSL Preset( preset )

**Description:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Version Added:** 18

```js

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

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Paste Diagram Properties

**Syntax:** obj << Paste Diagram Properties

**Description:** Pastes the path diagram properties from the clipboard into the current SEM path diagram.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt2 = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt2 << Run Script( "SEM: Compare Growth Trajectories" );
obj << Copy Diagram Properties();
obj2 = dt << Structural Equation Models( Model Variables( 2 :: 12 ) );
obj2 << Paste Diagram Properties();

```

### Paste Local Data Filter

**Syntax:** obj << Paste Local Data Filter

**Description:** Apply the local data filter from the clipboard to the current report.

```js

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

### Paste Model Specification

**Syntax:** obj << Paste Model Specification

**Description:** Pastes the model specifications from the clipboard into the current model specifications.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Run Script( "SEM: Path Analysis no Latent" );
obj << Copy Model Specification();
obj2 = dt << Structural Equation Models(
	Model Variables( :Leadership_Avg, :Conflict_Avg, :Satisfaction_Avg )
);
obj2 << Paste Model Specification();

```

### Path Diagram Properties

**Syntax:** obj << Path Diagram Properties

**JMP Version Added:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt << Structural Equation Models(
	Model Variables(
		:Multiple Choice Year1, :Multiple Choice Year2, :Multiple Choice Year3,
		:Multiple Choice Year4
	),
	Fit(
		Model Name( "Linear Growth Model" ),
		New Latent( "Intercept", "Slope" ),
		Means( {"Constant", {"Intercept", "Slope"}} ),
		Loadings(
			{"Intercept", {:Multiple Choice Year1, :Multiple Choice Year2,
			:Multiple Choice Year3, :Multiple Choice Year4}, {1, 1, 1, 1}},
			{"Slope", {:Multiple Choice Year1, :Multiple Choice Year2,
			:Multiple Choice Year3, :Multiple Choice Year4}, {0, 1, 2, 3}}
		),
		Variances(
			{:Multiple Choice Year1, {:Multiple Choice Year1}, {"b1"}},
			{:Multiple Choice Year2, {:Multiple Choice Year2}, {"b1"}},
			{:Multiple Choice Year3, {:Multiple Choice Year3}, {"b1"}},
			{:Multiple Choice Year4, {:Multiple Choice Year4}, {"b1"}},
			{"Intercept", {"Intercept"}},
			{"Slope", {"Slope"}}
		),
		Covariances( {"Intercept", {"Slope"}} ),
		Path Diagram Properties( Show Means( 1 ) )
	)
);

```

### Redo Analysis

**Syntax:** obj << Redo Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntax:** obj << Redo ByGroup Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Syntax:** obj << Relaunch Analysis

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntax:** obj << Relaunch ByGroup

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	),
	By( _bycol )
);
obj[1] << Relaunch ByGroup;

```

### Remove Column Switcher

**Syntax:** obj << Remove Column Switcher

**Description:** Removes the most recent Column Switcher that has been added to the platform.

```js

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

```js

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

### Remove Manifest Variables

**Syntax:** obj << Remove Manifest Variables

**Description:** Relaunches the platform using the existing model specification but without the removed manifest variables.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Run Script( "SEM: CFA 1Factor Conflict UI" );
obj << Remove Manifest Variables();

```

### Render Preset

**Syntax:** Render Preset( preset )

**Description:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**Syntax:** obj << Report;

Report( obj )

**Description:** Returns a reference to the report object.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntax:** obj << Report View( "Full"|"Summary" )

**Description:** The report view determines the level of detail visible in a platform report. Full shows all of the detail, while Summary shows only select content, dependent on the platform. For customized behavior, display boxes support a <<Set Summary Behavior message.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
obj << Report View( "Summary" );

```

### Reset Independence Model

**Syntax:** obj << Reset Independence Model

**Description:** Replaces a user-specified independence model with the default one.

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt << Run Script( "SEM: Compare Growth Trajectories" );
obj << Set as Independence Model( 2 );
obj << Reset Independence Model();

```

### Robust Inference

**Syntax:** obj << Robust Inference( state=0|1 )

**Description:** Computes sandwich standard errors for the ML or FIML parameter estimates and the robust fit statistics. This option is used for non-normally distributed outcomes where a continuous underlying distribution is assumed.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Robust Inference( 1 );

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description:** Creates a JSL script to produce this analysis, and save it as a table property in the data table. You can specify a name for the script. The Append Suffix option appends a numeric suffix to the script name, which differentiates the script from an existing script with the same name. The Prompt option prompts the user to specify a script name. The Replace option replaces an existing script with the same name.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj << Save ByGroup Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj << Save ByGroup Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntax:** obj << Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj << Save Script for All Objects To Data Table( <name> )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj << Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj << Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj << Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
obj << Save Script to Script Window;

```

### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Description:** Sends platform commands or display customization commands to each level of a by-group.

```js

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

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Censor Code( 1 ),
	<<Fit Weibull,
	SendToEmbeddedScriptable(
		Dispatch(
			{"Statistics", "Parametric Estimate - Weibull", "Profilers",
			"Density Profiler"},
			{1, Confidence Intervals( 0 ), Term Value(
				Time( 6000, Lock( 0 ), Show( 1 ) )
			)}
		)
	)
);

```

### SendToReport

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Description:** Send To Report is used in tandem with the Dispatch command to customize the appearance of a report.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport(
		Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} )
	)
);

```

### Set as Independence Model

**Syntax:** obj << Set as Independence Model( number )

**Description:** Replaces the default independence model with a user-specified one.

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt << Run Script( "SEM: Compare Growth Trajectories" );
obj << Set as Independence Model( 2 );

```

### Standardize Latent Variables

**Syntax:** obj = Structural Equation Models(...Standardize Latent Variables( state=0|1 )...)

**Description:** Sets the variance of latent variables to unity upon specification.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Standardize Latent Variables( 1 )
);

```

### Std Dev

**Syntax:** obj = Structural Equation Models(...<Std Dev( column )>...)

**Description:** Specifies standard deviations for each manifest variable in a correlation matrix.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
mat = dt[0, 2 :: 5];
mat_cor = Correlation( mat );
mat_means = V Mean( mat );
mat_sds = V Std( mat );
As Table( mat_cor || mat_means` || mat_sds` ) << Set Name( "Correlation" );
Data Table( "Correlation" ) << Structural Equation Models(
	Data Format( "Matrix" ),
	Model Variables( 1 :: 4 ),
	Mean( :Col5 ),
	Std Dev( :Col6 ),
	Sample Size( 200 )
);

```

### Structural Equation Models

**Syntax:** Structural Equation Models( Model Variables ( columns ) )

**Description:** Provides a framework to fit a variety of models, including confirmatory factor analysis, path models with or without latent variables, measurement error models, and latent growth curve models.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);

```

### Sync to Data Table Changes

**Syntax:** obj << Sync to Data Table Changes

**Description:** Sync with the exclude and data changes that have been made.

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj << Top Report

**Description:** Returns a reference to the root node in the report.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transform Column

**Syntax:** obj = <Platform>(... Transform Column(<name>, Formula(<expression>), [Random Seed(<n>)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description:** Create a transform column in the local context of an object, usually a platform. The transform column is active only for the lifetime of the platform.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

### Univariate Simple Statistics

**Syntax:** obj << Univariate Simple Statistics( state=0|1 )

**Description:** Shows or hides a univariate simple statistics report, where the statistics are calculated for each column independently from other columns that might have missing data.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L )
);
obj << Univariate Simple Statistics( 1 );

```

### View Web XML

**Syntax:** obj << View Web XML

**Description:** Returns the XML code that is used to create the interactive HTML report.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Weight

**Syntax:** obj << Weight( column )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	),
	Weight( _weightcol )
);

```

### Window View

**Syntax:** obj = Structural Equation Models(...Window View( "Visible"|"Invisible"|"Private" )...)

**Description:** Set the type of the window to be created for the report. By default a Visible report window will be created. An Invisible window will not appear on screen, but is discoverable by functions such as Window(). A Private window responds to most window messages but is not discoverable and must be addressed through the report object

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```


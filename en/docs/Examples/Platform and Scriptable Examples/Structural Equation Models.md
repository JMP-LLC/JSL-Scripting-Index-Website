# Structural Equation Models

## Structural Equation Models using If
> **Summary**: Opens a data table, checks for JMP Pro, and fits a structural equation model to analyze the relationship between annual salary, gender, length of service, and performance. It then displays a normalized residuals heatmap.

<!-- Keywords: #JMPPro, #StructuralEquationModeling, #DataAnalysis, #RegressionAnalysis, #HeatmapVisualization -->

**Code**:
```jsl
// Structural Equation Models - Annual Salary Z
// Open data table
dt = Open("data_table.jmp");
// Structural Equation Models - Annual Salary Z
If( JMP Product Name() == "Pro",
	Structural Equation Models(
		Model Variables(
			:Annual Salary Z, :Gender,
			:Length Of Service,
			:Performance
		),
		Model Specification(
			Means(
				{"Constant",
				{:Annual Salary Z,
				:Gender,
				:Length Of Service,
				:Performance}}
			),
			Regressions(
				{:Gender,
				{:Annual Salary Z}},
				{:Length Of Service,
				{:Annual Salary Z}},
				{:Performance,
				{:Annual Salary Z}}
			),
			Variances(
				{:Annual Salary Z,
				{:Annual Salary Z}},
				{:Gender, {:Gender}},
				{:Length Of Service,
				{:Length Of Service}},
				{:Performance,
				{:Performance}}
			),
			Covariances(
				{:Gender,
				{:Length Of Service,
				:Performance}},
				{:Length Of Service,
				{:Performance}}
			)
		),
		Fit(
			Model Name(
				"Structural Equation Model - Annual Salary Z"
			),
			Means(
				{"Constant",
				{:Annual Salary Z,
				:Gender,
				:Length Of Service,
				:Performance}}
			),
			Regressions(
				{:Gender,
				{:Annual Salary Z}},
				{:Length Of Service,
				{:Annual Salary Z}},
				{:Performance,
				{:Annual Salary Z}}
			),
			Variances(
				{:Annual Salary Z,
				{:Annual Salary Z}},
				{:Gender, {:Gender}},
				{:Length Of Service,
				{:Length Of Service}},
				{:Performance,
				{:Performance}}
			),
			Covariances(
				{:Gender,
				{:Length Of Service,
				:Performance}},
				{:Length Of Service,
				{:Performance}}
			),
			Normalized Residuals Heatmap(
				1
			)
		)
	),
	Print(
		"This script requires JMP Pro to execute successfully."
	);
	New Window( "JMP Pro Required",
		<<Modal,
		Text Box(
			"This script requires JMP Pro to execute successfully."
		)
	);
);
```

**Code Explanation**:

1. Open table.
2. Check for JMP Pro.
3. Define model variables.
4. Specify means.
5. Specify regressions.
6. Specify variances.
7. Specify covariances.
8. Fit structural equation model.
9. Name model.
10. Display normalized residuals heatmap.



### Example 1
> **Summary**: Performs a path analysis without latent variables, specifying means and regressions between Leadership_Avg, Conflict_Avg, and Satisfaction_Avg, and then fits the model with standardized parameter estimates and a normalized residuals heat map.

<!-- Keywords: #JMP, #StructuralEquationModeling, #PathAnalysis, #MeansRegressionsVariances, #StandardizedParameterEstimates -->

**Code**:
```jsl
// SEM: Path Analysis no Latent
// Open data table
dt = Open("data_table.jmp");
// SEM: Path Analysis no Latent
Structural Equation Models(
	Model Variables(
		:Leadership_Avg, :Conflict_Avg,
		:Satisfaction_Avg
	),
	Model Specification(
		Means(
			{"Constant", {:Leadership_Avg,
			:Conflict_Avg,
			:Satisfaction_Avg}}
		),
		Regressions(
			{:Leadership_Avg,
			{:Conflict_Avg,
			:Satisfaction_Avg}},
			{:Conflict_Avg,
			{:Satisfaction_Avg}}
		),
		Variances(
			{:Leadership_Avg,
			{:Leadership_Avg}},
			{:Conflict_Avg,
			{:Conflict_Avg}},
			{:Satisfaction_Avg,
			{:Satisfaction_Avg}}
		)
	),
	Fit(
		Model Name(
			"Path Analysis without Latent Variables"
		),
		Means(
			{"Constant", {:Leadership_Avg,
			:Conflict_Avg,
			:Satisfaction_Avg}}
		),
		Regressions(
			{:Leadership_Avg,
			{:Conflict_Avg,
			:Satisfaction_Avg}},
			{:Conflict_Avg,
			{:Satisfaction_Avg}}
		),
		Variances(
			{:Leadership_Avg,
			{:Leadership_Avg}},
			{:Conflict_Avg,
			{:Conflict_Avg}},
			{:Satisfaction_Avg,
			{:Satisfaction_Avg}}
		),
		Standardized Parameter Estimates(
			1
		),
		Normalized Residuals Heat Map(
			1
		)
	)
);
```

**Code Explanation**:

1. Open table.
2. Define model variables.
3. Specify means for variables.
4. Define regressions between variables.
5. Specify variances for variables.
6. Fit the model.
7. Name the model.
8. Include means in fit.
9. Include regressions in fit.
10. Include variances in fit.
11. Request standardized parameter estimates.
12. Request normalized residuals heat map.



### Example 2
> **Summary**: This JSL script defines a structural equation model (SEM) to analyze the relationship between 'Person_C', 'Intra_C', and 'Inter_C' variables, creating a new latent variable 'Conflict' with specified means, loadings, and variances.

<!-- Keywords: #StructuralEquationModel, #JMPScriptingLanguage, #LatentVariable, #MeansLoadingVariances, #SEMAnalysis -->

**Code**:
```jsl
// SEM: CFA 1Factor Conflict UI
// Open data table
dt = Open("data_table.jmp");
// SEM: CFA 1Factor Conflict UI
Structural Equation Models(
	Model Variables(
		:Person_C, :Intra_C, :Inter_C
	),
	Model Specification(
		New Latent( "Conflict" ),
		Means(
			{"Constant", {:Person_C,
			:Intra_C, :Inter_C}}
		),
		Loadings(
			{"Conflict", {:Person_C,
			:Intra_C, :Inter_C}, {1}}
		),
		Variances(
			{:Person_C, {:Person_C}},
			{:Intra_C, {:Intra_C}},
			{:Inter_C, {:Inter_C}},
			{"Conflict", {"Conflict"}}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Define structural equation model.
3. Specify model variables.
4. Create new latent variable "Conflict".
5. Set means for observed variables.
6. Assign loadings to latent variable.
7. Define variances for observed variables.
8. Define variance for latent variable.
9. End model specification.
10. Execute SEM analysis.



### Example 3
> **Summary**: This JSL script defines a path analysis model to analyze the relationship between leadership, conflict, and satisfaction without latent variables. The model is specified using means, regressions, and variances, and then fit to the data.

<!-- Keywords: #PathAnalysis, #StructuralEquations, #JMPScriptingLanguage, #MeansRegressionsVariances, #ModelSpecification -->

**Code**:
```jsl
// SEM: Path Analysis no Latent
Structural Equation Models(
	:Leadership_Avg + :Conflict_Avg +
	:Satisfaction_Avg,
	Model Specification(
		Mean(
			{"Constant",
			{"Leadership_Avg",
			"Conflict_Avg",
			"Satisfaction_Avg"}}
		),
		Regressions(
			{"Leadership_Avg",
			{"Conflict_Avg",
			"Satisfaction_Avg"}},
			{"Conflict_Avg",
			{"Satisfaction_Avg"}}
		),
		Variances(
			{"Leadership_Avg",
			{"Leadership_Avg"}},
			{"Conflict_Avg",
			{"Conflict_Avg"}},
			{"Satisfaction_Avg",
			{"Satisfaction_Avg"}}
		)
	),
	Fit(
		Model Name(
			"Path Analysis without Latent Variables"
		),
		Mean(
			{"Constant",
			{"Leadership_Avg",
			"Conflict_Avg",
			"Satisfaction_Avg"}}
		),
		Regressions(
			{"Leadership_Avg",
			{"Conflict_Avg",
			"Satisfaction_Avg"}},
			{"Conflict_Avg",
			{"Satisfaction_Avg"}}
		),
		Variances(
			{"Leadership_Avg",
			{"Leadership_Avg"}},
			{"Conflict_Avg",
			{"Conflict_Avg"}},
			{"Satisfaction_Avg",
			{"Satisfaction_Avg"}}
		),
		Standardized Parameter Estimates(
			1
		),
		Normalized Residuals Heatmap( 1 )
	)
);
```

**Code Explanation**:

1. Define path analysis model.
2. Specify mean structure.
3. Define leadership regression.
4. Define conflict regression.
5. Define variance for leadership.
6. Define variance for conflict.
7. Define variance for satisfaction.
8. Fit the model.
9. Name the model.
10. Display standardized estimates and residuals heatmap.



### Example 4
> **Summary**: This JSL script defines a structural equation model (SEM) to analyze the relationship between Person_C, Intra_C, and Inter_C variables, introducing a new latent variable 'Conflict' with specified mean and loadings.

<!-- Keywords: #StructuralEquationModel, #JMPScriptingLanguage, #LatentVariable, #MeanAndLoadings, #Variance -->

**Code**:
```jsl
// SEM: CFA 1Factor Conflict UI
Structural Equation Models(
	:Person_C + :Intra_C + :Inter_C,
	Model Specification(
		New Latent( "Conflict" ),
		Mean(
			{"Constant", {"Person_C",
			"Intra_C", "Inter_C"}}
		),
		Loadings(
			{"Conflict", {"Person_C",
			"Intra_C", "Inter_C"}, {1}}
		),
		Variances(
			{"Person_C", {"Person_C"}},
			{"Intra_C", {"Intra_C"}},
			{"Inter_C", {"Inter_C"}},
			{"Conflict", {"Conflict"}}
		)
	)
);
```

**Code Explanation**:

1. Open Structural Equation Models.
2. Define variables: Person_C, Intra_C, Inter_C.
3. Specify new latent variable "Conflict".
4. Set mean for all variables.
5. Assign loadings for Conflict.
6. Define variance for Person_C.
7. Define variance for Intra_C.
8. Define variance for Inter_C.
9. Define variance for Conflict.
10. Close model specification.



### Example 5
> **Summary**: Visualizes a structural equation model (SEM) using the PolDem_noCnst_UI data, defining latent variables Ind60, Dem60, and Dem65, specifying mean and variance for observed variables, and estimating relationships between latent variables.

<!-- Keywords: #StructuralEquationModeling, #JMPScriptingLanguage, #LatentVariables, #SEM, #DataAnalysis -->

**Code**:
```jsl
// PolDem_noCnst_UI
Structural Equation Models(
	:GNPC60 + :ENPC60 + :INDLGF60 +
	:Press60 + :Freop60 + :Fair60 +
	:Legis60 + :Press65 + :Freop65 +
	:Fair65 + :Legis65,
	Model Specification(
		New Latent(
			"Ind60", "Dem60", "Dem65"
		),
		Mean(
			{"Constant", {"GNPC60",
			"ENPC60", "INDLGF60",
			"Press60", "Freop60",
			"Fair60", "Legis60",
			"Press65", "Freop65",
			"Fair65", "Legis65"}}
		),
		Loadings(
			{"Ind60", {"GNPC60", "ENPC60",
			"INDLGF60"}, {1}},
			{"Dem60", {"Press60",
			"Freop60", "Fair60",
			"Legis60"}, {1}},
			{"Dem65", {"Press65",
			"Freop65", "Fair65",
			"Legis65"}, {1}}
		),
		Regressions(
			{"Ind60", {"Dem60", "Dem65"}},
			{"Dem60", {"Dem65"}}
		),
		Variances(
			{"GNPC60", {"GNPC60"}},
			{"ENPC60", {"ENPC60"}},
			{"INDLGF60", {"INDLGF60"}},
			{"Press60", {"Press60"}},
			{"Freop60", {"Freop60"}},
			{"Fair60", {"Fair60"}},
			{"Legis60", {"Legis60"}},
			{"Press65", {"Press65"}},
			{"Freop65", {"Freop65"}},
			{"Fair65", {"Fair65"}},
			{"Legis65", {"Legis65"}},
			{"Ind60", {"Ind60"}},
			{"Dem60", {"Dem60"}},
			{"Dem65", {"Dem65"}}
		),
		Covariances(
			{"Press60", {"Press65"}},
			{"Freop60", {"Legis60",
			"Freop65"}},
			{"Fair60", {"Fair65"}},
			{"Legis60", {"Legis65"}},
			{"Freop65", {"Legis65"}}
		)
	)
);
```

**Code Explanation**:

1. Open Structural Equation Models.
2. Define variables for analysis.
3. Create latent variables: Ind60, Dem60, Dem65.
4. Set mean for all variables.
5. Assign loadings for latent variables.
6. Define regressions between latent variables.
7. Specify variances for observed variables.
8. Specify variances for latent variables.
9. Define covariances between observed variables.
10. Run the model.



### Example 6
> **Summary**: This JSL script defines a Structural Equation Model (SEM) to analyze the relationships between various variables, including latent variables and observed variables. It specifies mean parameters, loadings, regression relationships, variances, and covariances.

<!-- Keywords: #StructuralEquationModel, #JMPScriptingLanguage, #LatentVariables, #ObservedVariables, #SEM -->

**Code**:
```jsl
// PolDem_Cnst_UI
Structural Equation Models(
	:GNPC60 + :ENPC60 + :INDLGF60 +
	:Press60 + :Freop60 + :Fair60 +
	:Legis60 + :Press65 + :Freop65 +
	:Fair65 + :Legis65,
	Model Specification(
		New Latent(
			"Ind60", "Dem60", "Dem65"
		),
		Mean(
			{"Constant", {"GNPC60",
			"ENPC60", "INDLGF60",
			"Press60", "Freop60",
			"Fair60", "Legis60",
			"Press65", "Freop65",
			"Fair65", "Legis65"}}
		),
		Loadings(
			{"Ind60", {"GNPC60", "ENPC60",
			"INDLGF60"}, {1}},
			{"Dem60", {"Press60",
			"Freop60", "Fair60",
			"Legis60"}, {1, "c1", "c2",
			"c3"}},
			{"Dem65", {"Press65",
			"Freop65", "Fair65",
			"Legis65"}, {1, "c1", "c2",
			"c3"}}
		),
		Regressions(
			{"Ind60", {"Dem60", "Dem65"}},
			{"Dem60", {"Dem65"}}
		),
		Variances(
			{"GNPC60", {"GNPC60"}},
			{"ENPC60", {"ENPC60"}},
			{"INDLGF60", {"INDLGF60"}},
			{"Press60", {"Press60"}},
			{"Freop60", {"Freop60"}},
			{"Fair60", {"Fair60"}},
			{"Legis60", {"Legis60"}},
			{"Press65", {"Press65"}},
			{"Freop65", {"Freop65"}},
			{"Fair65", {"Fair65"}},
			{"Legis65", {"Legis65"}},
			{"Ind60", {"Ind60"}},
			{"Dem60", {"Dem60"}},
			{"Dem65", {"Dem65"}}
		),
		Covariances(
			{"Press60", {"Press65"}},
			{"Freop60", {"Legis60",
			"Freop65"}},
			{"Fair60", {"Fair65"}},
			{"Legis60", {"Legis65"}},
			{"Freop65", {"Legis65"}}
		)
	)
);
```

**Code Explanation**:

1. Open Structural Equation Models.
2. Define variables for analysis.
3. Create new latent variables.
4. Set mean parameters.
5. Assign loadings for latent variables.
6. Define regression relationships.
7. Specify variances for observed variables.
8. Define covariances between variables.



### Example 7
> **Summary**: Visualizes a structural equation model (SEM) to analyze the relationships between various variables, including latent variables Dem60 and Dem65, using the Structural Equation Models platform in JMP.

<!-- Keywords: #JMP, #StructuralEquationModeling, #LatentVariables, #RegressionAnalysis, #DataVisualization -->

**Code**:
```jsl
// PolDem_2Factor_CFA
Structural Equation Models(
	:Press60 + :Freop60 + :Fair60 +
	:Legis60 + :Press65 + :Freop65 +
	:Fair65 + :Legis65,
	Model Specification(
		New Latent( "Dem60", "Dem65" ),
		Mean(
			{"Constant", {"Press60",
			"Freop60", "Fair60",
			"Legis60", "Press65",
			"Freop65", "Fair65",
			"Legis65"}}
		),
		Loadings(
			{"Dem60", {"Press60",
			"Freop60", "Fair60",
			"Legis60"}, {1}},
			{"Dem65", {"Press65",
			"Freop65", "Fair65",
			"Legis65"}, {1}}
		),
		Variances(
			{"Press60", {"Press60"}},
			{"Freop60", {"Freop60"}},
			{"Fair60", {"Fair60"}},
			{"Legis60", {"Legis60"}},
			{"Press65", {"Press65"}},
			{"Freop65", {"Freop65"}},
			{"Fair65", {"Fair65"}},
			{"Legis65", {"Legis65"}},
			{"Dem60", {"Dem60"}},
			{"Dem65", {"Dem65"}}
		),
		Covariances(
			{"Dem60", {"Dem65"}}
		)
	)
);
```

**Code Explanation**:

1. Open Structural Equation Models platform.
2. Define variables: Press60, Freop60, Fair60, Legis60, Press65, Freop65, Fair65, Legis65.
3. Create latent variables: Dem60, Dem65.
4. Set mean for all variables.
5. Assign loadings for Dem60: Press60, Freop60, Fair60, Legis60.
6. Assign loadings for Dem65: Press65, Freop65, Fair65, Legis65.
7. Set variance for Press60.
8. Set variance for Freop60.
9. Set variance for Fair60.
10. Set covariance between Dem60 and Dem65.



### Example 8
> **Summary**: This JSL script defines a Structural Equation Model (SEM) to analyze the relationships between Press60, Freop60, Fair60, Legis60, Press65, Freop65, Fair65, and Legis65. The model specifies latent variables Dem60 and Dem65, sets means for all variables, and defines loadings and variances for each variable.

<!-- Keywords: #StructuralEquationModel, #JSLScriptingLanguage, #LatentVariables, #MeansAndLoadings, #VariancesAndCovariances -->

**Code**:
```jsl
// PolDem_2Factor_CFA_Constraints
Structural Equation Models(
	:Press60 + :Freop60 + :Fair60 +
	:Legis60 + :Press65 + :Freop65 +
	:Fair65 + :Legis65,
	Model Specification(
		New Latent( "Dem60", "Dem65" ),
		Mean(
			{"Constant", {"Press60",
			"Freop60", "Fair60",
			"Legis60", "Press65",
			"Freop65", "Fair65",
			"Legis65"}}
		),
		Loadings(
			{"Dem60", {"Press60",
			"Freop60", "Fair60",
			"Legis60"}, {1, "c1", "c2",
			"c3"}},
			{"Dem65", {"Press65",
			"Freop65", "Fair65",
			"Legis65"}, {1, "c1", "c2",
			"c3"}}
		),
		Variances(
			{"Press60", {"Press60"}},
			{"Freop60", {"Freop60"}},
			{"Fair60", {"Fair60"}},
			{"Legis60", {"Legis60"}},
			{"Press65", {"Press65"}},
			{"Freop65", {"Freop65"}},
			{"Fair65", {"Fair65"}},
			{"Legis65", {"Legis65"}},
			{"Dem60", {"Dem60"}},
			{"Dem65", {"Dem65"}}
		),
		Covariances(
			{"Dem60", {"Dem65"}},
			{"Press60", {"Press65"}},
			{"Freop60", {"Freop65"}},
			{"Fair60", {"Fair65"}},
			{"Legis60", {"Legis65"}}
		)
	)
);
```

**Code Explanation**:

1. Define Structural Equation Models.
2. Specify variables: Press60, Freop60, Fair60, Legis60, Press65, Freop65, Fair65, Legis65.
3. Create latent variables: Dem60, Dem65.
4. Set mean for all variables.
5. Define loadings for Dem60: Press60, Freop60, Fair60, Legis60.
6. Define loadings for Dem65: Press65, Freop65, Fair65, Legis65.
7. Set variances for each variable individually.
8. Set covariance between Dem60 and Dem65.
9. Set covariance between Press60 and Press65.
10. Set covariance between Freop60 and Freop65.
11. Set covariance between Fair60 and Fair65.
12. Set covariance between Legis60 and Legis65.



### Example 9
> **Summary**: Opens a data table, adds variables to a Structural Equation Models platform, specifies means and regression relationships, sets variances, and fits two mediation models with normalized residuals heatmap.

<!-- Keywords: #StructuralEquationModels, #JMPScriptingLanguage, #MediationModel, #RegressionAnalysis, #DataVisualization -->

**Code**:
```jsl
// 
Open("data_table.jmp");
Structural Equation Models(
	Add(
		:Leadership_Avg,
		:Conflict_Avg,
		:Satisfaction_Avg
	),
	Model Specification(
		Mean(
			{"Constant",
			{"Leadership_Avg",
			"Conflict_Avg",
			"Satisfaction_Avg"}}
		),
		Regressions(
			{"Leadership_Avg",
			{"Conflict_Avg"}},
			{"Conflict_Avg",
			{"Satisfaction_Avg"}}
		),
		Variances(
			{"Leadership_Avg",
			{"Leadership_Avg"}},
			{"Conflict_Avg",
			{"Conflict_Avg"}},
			{"Satisfaction_Avg",
			{"Satisfaction_Avg"}}
		)
	),
	Fit(
		Model Name( "Mediation Model" ),
		Mean(
			{"Constant",
			{"Leadership_Avg",
			"Conflict_Avg",
			"Satisfaction_Avg"}}
		),
		Regressions(
			{"Leadership_Avg",
			{"Conflict_Avg",
			"Satisfaction_Avg"}},
			{"Conflict_Avg",
			{"Satisfaction_Avg"}}
		),
		Variances(
			{"Leadership_Avg",
			{"Leadership_Avg"}},
			{"Conflict_Avg",
			{"Conflict_Avg"}},
			{"Satisfaction_Avg",
			{"Satisfaction_Avg"}}
		),
		Normalized Residuals Heatmap( 1 )
	),
	Fit(
		Model Name(
			"Full Mediation Model"
		),
		Mean(
			{"Constant",
			{"Leadership_Avg",
			"Conflict_Avg",
			"Satisfaction_Avg"}}
		),
		Regressions(
			{"Leadership_Avg",
			{"Conflict_Avg"}},
			{"Conflict_Avg",
			{"Satisfaction_Avg"}}
		),
		Variances(
			{"Leadership_Avg",
			{"Leadership_Avg"}},
			{"Conflict_Avg",
			{"Conflict_Avg"}},
			{"Satisfaction_Avg",
			{"Satisfaction_Avg"}}
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Start Structural Equation Models platform.
3. Add variables to model.
4. Specify mean for all variables.
5. Define regression from Leadership_Avg to Conflict_Avg.
6. Define regression from Conflict_Avg to Satisfaction_Avg.
7. Set variance for Leadership_Avg.
8. Set variance for Conflict_Avg.
9. Set variance for Satisfaction_Avg.
10. Fit "Mediation Model" with heatmap.
11. Fit "Full Mediation Model".



### Example 10
> **Summary**: Creates and fits a structural equation model with specified variables, means, variances, and diagram properties.

<!-- Keywords: #StructuralEquationModel, #JMPScriptingLanguage, #DataAnalysis, #StatisticalModeling, #PathDiagram -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Model Specification(
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Variances( {:Support_L, {:Support_L}}, {:Goal_L, {:Goal_L}}, {:Work_L, {:Work_L}}, {:Interact_L, {:Interact_L}} ),
		Max Iterations( 1 )
	),
	Path Diagram Properties( Diagram Size( 759, 719 ) ),
	Fit(
		Model Name( "Model 2" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Variances( {:Support_L, {:Support_L}}, {:Goal_L, {:Goal_L}}, {:Work_L, {:Work_L}}, {:Interact_L, {:Interact_L}} ),
		Max Iterations( 1 ),
		Path Diagram Properties( Diagram Size( 1000, 800 ) )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create Structural Equation Model.
3. Define model variables.
4. Specify means for all variables.
5. Specify variances for all variables.
6. Set max iterations to 1.
7. Set initial diagram size to 759x719.
8. Fit model named "Model 2".
9. Specify means for all variables again.
10. Specify variances for all variables again.
11. Set max iterations to 1 again.
12. Set final diagram size to 1000x800.



### Example 11
> **Summary**: Creates and fits a structural equation model (SEM) with specified variables, means, variances, and path diagram properties.

<!-- Keywords: #JSL, #StructuralEquationModeling, #PathDiagramming, #DataAnalysis, #JMP -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Model Specification(
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Variances( {:Support_L, {:Support_L}}, {:Goal_L, {:Goal_L}}, {:Work_L, {:Work_L}}, {:Interact_L, {:Interact_L}} ),
		Max Iterations( 1 )
	),
	Path Diagram Properties( Diagram Size( 759, 719 ) ),
	Fit(
		Model Name( "Model 2" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Variances( {:Support_L, {:Support_L}}, {:Goal_L, {:Goal_L}}, {:Work_L, {:Work_L}}, {:Interact_L, {:Interact_L}} ),
		Max Iterations( 1 ),
		Path Diagram Properties( Diagram Size( 1000, 800 ) )
	)
);
```

**Code Explanation**:

1. Set default names.
2. Open data table.
3. Create SEM object.
4. Define model variables.
5. Specify model means.
6. Specify model variances.
7. Set max iterations.
8. Set initial diagram size.
9. Fit model named "Model 2".
10. Adjust path diagram size.



### Example 12
> **Summary**: Fits a structural equation model (SEM) to analyze relationships between Support_L, Goal_L, and Work_L variables.

<!-- Keywords: #JMP, #StructuralEquationModeling, #SEM, #RegressionAnalysis, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L ),
	Model Specification(
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L}} ),
		Regressions( {:Support_L, {:Goal_L}}, {:Goal_L, {:Work_L}}, {:Work_L, {:Support_L}} ),
		Variances( {:Support_L, {:Support_L}}, {:Goal_L, {:Goal_L}}, {:Work_L, {:Work_L}} ),
		Max Iterations( 1 )
	),
	Fit(
		Model Name( "Model 1" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L}} ),
		Regressions( {:Support_L, {:Goal_L}}, {:Goal_L, {:Work_L}}, {:Work_L, {:Support_L}} ),
		Variances( {:Support_L, {:Support_L}}, {:Goal_L, {:Goal_L}}, {:Work_L, {:Work_L}} ),
		Max Iterations( 1 )
	), 
);
```

**Code Explanation**:

1. Open data table.
2. Initiate Structural Equation Models.
3. Define model variables.
4. Specify model means.
5. Define regressions.
6. Specify variances.
7. Set max iterations.
8. Fit model named "Model 1".
9. Define fit means.
10. Define fit regressions.



### Example 13
> **Summary**: Estimates a structural equation model using MIIV Two-Stage Least Squares, specifying means, regressions, variances, and covariances for variables Support_L, Goal_L, Work_L, and Interact_L.

<!-- Keywords: #StructuralEquationModel, #MIIVTwoStageLeastSquares, #JMPScriptingLanguage, #DataAnalysis, #StatisticalModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
sem = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Estimation Method( "MIIV Two-Stage Least Squares" ),
	Model Specification(
		Model Name( "Model 1" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Regressions( {:Goal_L, {:Support_L}}, {:Work_L, {:Support_L}}, {:Interact_L, {:Support_L}} ),
		Variances( {:Support_L, {:Support_L}}, {:Goal_L, {:Goal_L}, {-1}}, {:Work_L, {:Work_L}, {-1}}, {:Interact_L, {:Interact_L}} ),
		Covariances( {:Goal_L, {:Work_L, :Interact_L}}, {:Work_L, {:Interact_L}} )
	),
	Fit(
		Model Name( "Model 1" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Regressions( {:Goal_L, {:Support_L}}, {:Work_L, {:Support_L}}, {:Interact_L, {:Support_L}} ),
		Variances( {:Support_L, {:Support_L}}, {:Goal_L, {:Goal_L}, {-1}}, {:Work_L, {:Work_L}, {-1}}, {:Interact_L, {:Interact_L}} ),
		Covariances( {:Goal_L, {:Work_L, :Interact_L}}, {:Work_L, {:Interact_L}} )
	)
);
rpt = Current Report();
modelCompOpen = rpt["Model Diagnostics"] << set open;
```

**Code Explanation**:

1. Open data table;
2. Launch Structural Equation Models platform.
3. Define model variables.
4. Set estimation method to MIIV Two-Stage Least Squares.
5. Specify model name as "Model 1".
6. Include means for all variables.
7. Define regressions between variables.
8. Specify variances for each variable.
9. Include covariances between Goal_L, Work_L, and Interact_L.
10. Fit the specified model and open model diagnostics.



### Example 14
> **Summary**: Creates a structural equation model with Energy60 as the model variable, utilizing JMP's Structural Equation Models platform.

<!-- Keywords: #JMP, #StructuralEquationModels, #ModelVariables, #Energy60, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Structural Equation Models( Model Variables( :Energy60 ) );
```

**Code Explanation**:

1. Open data table.
2. Create Structural Equation Model.
3. Set model variable to Energy60.



### Example 15
> **Summary**: Analyze structural equation models for height and weight, grouped by sex, using JMP's Structural Equation Models platform.

<!-- Keywords: #JMP, #StructuralEquationModels, #ModelVariables, #MeansAndVariances, #ByGroups -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Structural Equation Models(
	Model Variables( :height, :weight ),
	Model Specification( Means( {"Constant", {:height, :weight}} ), Variances( {:height, {:height}}, {:weight, {:weight}} ) ),
	By( :sex )
);
```

**Code Explanation**:

1. Open table.
2. Run Structural Equation Models.
3. Specify model variables.
4. Define means for constants and variables.
5. Define variances for height and weight.
6. Group analysis by sex.



### Example 16
> **Summary**: Runs the Structural Equation Models analysis to define model variables, standardize latent variables, and run the analysis on a specified data table.

<!-- Keywords: #StructuralEquationModels, #JMPScriptingLanguage, #DataAnalysis, #LatentVariables, #ModelSpecification -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Structural Equation Models( Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ), Standardize Latent Variables( 1 ) );
```

**Code Explanation**:

1. Open data table;
2. Define model variables.
3. Standardize latent variables.
4. Run Structural Equation Models analysis.



### Example 17
> **Summary**: Creates a Structural Equation Model (SEM) to analyze relationships between Support_L, Goal_L, Work_L, and Interact_L variables, utilizing means, loadings, and variances.

<!-- Keywords: #StructuralEquationModel, #JMPScriptingLanguage, #DataAnalysis, #LatentVariables, #PathDiagram -->

**Code**:
```jsl
dt = Open("data_table.jmp");
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
	),
	Path Diagram Properties( Diagram Size( {1007, 554} ) )
);
```

**Code Explanation**:

1. Open data table;
2. Create Structural Equation Model object.
3. Define model variables.
4. Specify new latent variable "Leader".
5. Set means for all variables.
6. Assign loadings for latent variable.
7. Define variances for observed variables.
8. Define variance for latent variable.
9. Set path diagram size.



### Example 18
> **Summary**: Fits a structural equation model to analyze relationships between Support_L, Goal_L, Work_L, and Interact_L variables, generating a path diagram with specified properties.

<!-- Keywords: #StructuralEquationModeling, #PathDiagramming, #JSLScripting, #DataAnalysis, #LatentVariable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
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
		Path Diagram Properties( Diagram Size( {1007, 554} ) )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Define model variables.
3. Fit structural equation model.
4. Specify model name.
5. Create new latent variable.
6. Set means for variables.
7. Define loadings for variables.
8. Set variances for observed variables.
9. Set variance for latent variable.
10. Configure path diagram properties.



### Example 19
> **Summary**: Creates a Structural Equation Model (SEM) to analyze relationships between Leadership_Avg and Conflict_Avg, specifying model means, covariances, and variances.

<!-- Keywords: #StructuralEquationModel, #JMPScriptingLanguage, #DataAnalysis, #StatisticalModeling, #Regression -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Structural Equation Models(
	Model Variables( :Leadership_Avg, :Conflict_Avg ),
	Model Specification(
		Means( {"Constant", {:Leadership_Avg, :Conflict_Avg}} ),
		Covariances( {:Leadership_Avg, {:Conflict_Avg}} ),
		Variances( {:Leadership_Avg, {:Leadership_Avg}}, {:Conflict_Avg, {:Conflict_Avg}} ),
		Max Iterations( 3 )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create Structural Equation Model object.
3. Define model variables: Leadership_Avg, Conflict_Avg.
4. Specify model means for constant and variables.
5. Specify covariances between Leadership_Avg and Conflict_Avg.
6. Specify variances for Leadership_Avg and Conflict_Avg.
7. Set maximum iterations to 3.
8. Execute the SEM analysis.



### Example 20
> **Summary**: Runs the creation and assessment of a structural equation model using JMP's Structural Equation Models platform, specifying variables, latent variables, means, loadings, variances, and path diagram properties.

<!-- Keywords: #JMP, #StructuralEquationModeling, #LatentVariables, #PathDiagramming, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Structural Equation Models(
	Model Variables( :Person_C, :Intra_C, :Inter_C ),
	Model Specification(
		Model Name( "Model 2" ),
		New Latent( "Latent1" ),
		Means( {"Constant", {:Person_C, :Intra_C, :Inter_C}} ),
		Loadings( {"Latent1", {:Person_C, :Intra_C, :Inter_C}, {1}} ),
		Variances( {:Person_C, {:Person_C}}, {:Intra_C, {:Intra_C}}, {:Inter_C, {:Inter_C}}, {"Latent1", {"Latent1"}} )
	),
	Full Information Multivariate Statistics( 1 ),
	Fit(
		Model Name( "Model 1" ),
		New Latent( "Latent1" ),
		Means( {"Constant", {:Person_C, :Intra_C, :Inter_C}} ),
		Loadings( {"Latent1", {:Person_C, :Intra_C, :Inter_C}, {1}} ),
		Variances( {:Person_C, {:Person_C}}, {:Intra_C, {:Intra_C}}, {:Inter_C, {:Inter_C}}, {"Latent1", {"Latent1"}} ),
		Assess Measurement Model( 1 ),
		Standardized Parameter Estimates( 1 ),
		Path Diagram Properties(
			Place Nodes(
				{{"Constant", 298, 427}, {"Inter_C", 369, 352}, {"Intra_C", 298, 352}, {"Latent1", 286, 211}, {"Person_C", 227, 352}}
			)
		)
	), 
);
rpt = obj << Report();
box = rpt[Outline Box( "Assess Measurement Model" )];
```

**Code Explanation**:

1. Open data table;
2. Define Structural Equation Models object.
3. Specify model variables: Person_C, Intra_C, Inter_C.
4. Create model specification named "Model 2".
5. Add latent variable "Latent1".
6. Set means for constants and variables.
7. Assign loadings for latent variable.
8. Define variances for variables and latent variable.
9. Enable full information multivariate statistics.
10. Fit model named "Model 1" with similar specifications.
11. Assess measurement model.
12. Display standardized parameter estimates.
13. Configure path diagram properties.
14. Retrieve report from object.
15. Extract "Assess Measurement Model" outline box.



### Example 21
> **Summary**: Fits a Structural Equation Models (SEM) path analysis model to explore relationships between Leadership, Conflict, and Satisfaction variables in a data table.

<!-- Keywords: #StructuralEquationModels, #PathAnalysis, #JMPScriptingLanguage, #DataVisualization, #ModelFit -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Structural Equation Models(
	Model Variables( 2 :: 12 ),
	Model Specification(
		New Latent( "Leadership", "Conflict", "Satisfaction" ),
		Means( {"Constant", {2 :: 12}} ),
		Loadings( {"Leadership", {2 :: 5}, {1, "", "c1", "c1"}}, {"Conflict", {6 :: 8}, {1}}, {"Satisfaction", {9 :: 12}, {1, 1, "", 1}} ),
		Regressions( {"Leadership", {"Conflict", "Satisfaction"}}, {"Conflict", {"Satisfaction"}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{:Person_C, {:Person_C}},
			{:Intra_C, {:Intra_C}},
			{:Inter_C, {:Inter_C}},
			{:General_S, {:General_S}},
			{:Growth_S, {:Growth_S}},
			{:Coworker_S, {:Coworker_S}},
			{:Supervisor_S, {:Supervisor_S}},
			{"Leadership", {"Leadership"}},
			{"Conflict", {"Conflict"}},
			{"Satisfaction", {"Satisfaction"}}
		)
	),
	Fit(
		Model Name( "Path Analysis with Latent Variables" ),
		New Latent( "Leadership", "Conflict", "Satisfaction" ),
		Means( {"Constant", {2 :: 12}} ),
		Loadings( {"Leadership", {2 :: 5}, {1}}, {"Conflict", {6 :: 8}, {1}}, {"Satisfaction", {9 :: 12}, {1}} ),
		Regressions( {"Leadership", {"Conflict", "Satisfaction"}}, {"Conflict", {"Satisfaction"}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{:Person_C, {:Person_C}},
			{:Intra_C, {:Intra_C}},
			{:Inter_C, {:Inter_C}},
			{:General_S, {:General_S}},
			{:Growth_S, {:Growth_S}},
			{:Coworker_S, {:Coworker_S}},
			{:Supervisor_S, {:Supervisor_S}},
			{"Leadership", {"Leadership"}},
			{"Conflict", {"Conflict"}},
			{"Satisfaction", {"Satisfaction"}}
		),
		Normalized Residuals Heat Map( 1 )
	)
);
rpt = Current Report();
model_comp_box = (rpt[Outline Box( "Model Comparison" )]);
```

**Code Explanation**:

1. Open data table;
2. Launch Structural Equation Models platform.
3. Define model variables 2-12.
4. Specify new latent variables: Leadership, Conflict, Satisfaction.
5. Set means for all variables.
6. Define loadings for Leadership, Conflict, Satisfaction.
7. Define regressions between Leadership, Conflict, Satisfaction.
8. Set variances for observed and latent variables.
9. Fit path analysis model with latent variables.
10. Display normalized residuals heat map.



### Example 22
> **Summary**: Creates and creates a report for a structural equation model using JMP's Structural Equation Models platform, specifying means, regressions, and variances for multiple variables.

<!-- Keywords: #JMP, #StructuralEquationModels, #ModelSpecification, #MeansRegressionsVariance, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Structural Equation Models(
	Model Variables( :Open Ended Year1, :Open Ended Year2, :Open Ended Year3, :Open Ended Year4 ),
	Model Specification(
		Model Name( "Model 1" ),
		Means( {"Constant", {:Open Ended Year1, :Open Ended Year2, :Open Ended Year3, :Open Ended Year4}} ),
		Regressions(
			{:Open Ended Year1, {:Open Ended Year3, :Open Ended Year4}},
			{:Open Ended Year2, {:Open Ended Year3, :Open Ended Year4}}
		),
		Variances(
			{:Open Ended Year1, {:Open Ended Year1}},
			{:Open Ended Year2, {:Open Ended Year2}},
			{:Open Ended Year3, {:Open Ended Year3}},
			{:Open Ended Year4, {:Open Ended Year4}}
		)
	)
);
rpt = obj << Report();
rpt[ListBoxBox( 1 )] << Set Selected( 3 );
rpt[ListBoxBox( 2 )] << Set Selected( 2 );
rpt[Button Box( 2 )] << Click();
covariance_list_actual = rpt["Model Specification", Tab Page Box( 2 ), "Covariances", ListBoxBox( 1 )] << get items();
covariance_list_bm = {"Open Ended Year1 ‚Üî Open Ended Year2"};
```

**Code Explanation**:

1. Open data table;
2. Define model variables.
3. Create Structural Equation Model.
4. Specify model name "Model 1".
5. Include means for all variables.
6. Define regressions between variables.
7. Set variances for each variable.
8. Generate model report.
9. Select specific items in report.
10. Click button in report.



### Example 23
> **Summary**: Creates and configures a Structural Equation Models (SEM) report in JMP, specifying model variables, means, regressions, and variances.

<!-- Keywords: #JMP, #StructuralEquationModels, #ModelSpecification, #ReportAutomation, #Scripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Structural Equation Models( ModelVariables( 4 :: 5 ) );
rpt = obj << Report();
rpt["Model Specification", ListBoxBox( 1 )] << setSelected( 2 );
rpt["Model Specification", ListBoxBox( 2 )] << setSelected( 3 );
rpt["Model Specification", Button Box( 1 )] << Click();
obj << Save Script to Report;
script_actual = rpt[Text Box( 1 )] << get text();
script_expected =
"Structural Equation Models(
Model Variables( :Multiple Choice Year1, :Multiple Choice Year2 ),
Model Specification(
Model Name( \!"Model 1\!" ),
Means( {\!"Constant\!", {:Multiple Choice Year1, :Multiple Choice Year2}} ),
Regressions( {:Multiple Choice Year1, {:Multiple Choice Year2}} ),
Variances(
	{:Multiple Choice Year1, {:Multiple Choice Year1}},
	{:Multiple Choice Year2, {:Multiple Choice Year2}}
)
)
)";
```

**Code Explanation**:

1. Open data table;
2. Create Structural Equation Models object.
3. Access model specification report.
4. Set first list box selection to 2.
5. Set second list box selection to 3.
6. Click the button box.
7. Save script to report.
8. Extract actual script text.
9. Define expected script text.
10. Compare actual and expected scripts.



### Example 24
> **Summary**: Creates and configures a Structural Equation Models (SEM) report with specified model variables, groups, and specifications.

<!-- Keywords: #JSLScriptingLanguage, #StructuralEquationModels, #ReportGeneration, #ModelSpecification, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Structural Equation Models( ModelVariables( 4 :: 5 ), Groups( :Sex ) );
rpt = obj << Report();
rpt["Model Specification", TabListBox( 1 )] << setSelected( 3 );
rpt["Model Specification", ListBoxBox( 1 )] << setSelected( 2 );
rpt["Model Specification", ListBoxBox( 2 )] << setSelected( 3 );
rpt["Model Specification", Button Box( 1 )] << Click();
obj << Save Script to Report;
script_actual = rpt[Text Box( 1 )] << get text();
script_expected =
"Structural Equation Models(
Model Variables( :Multiple Choice Year1, :Multiple Choice Year2 ),
Groups( :Sex ),
Model Specification(
Model Name( \!"Model 1\!" ),
Means( {\!"Constant\!", {:Multiple Choice Year1, :Multiple Choice Year2}} ),
Regressions(
	{:Multiple Choice Year1, {:Multiple Choice Year2}, {{0}, {\!"\!"}}}
),
Variances(
	{:Multiple Choice Year1, {:Multiple Choice Year1}},
	{:Multiple Choice Year2, {:Multiple Choice Year2}}
)
),
SendToReport(
Dispatch( {\!"Model Specification\!"}, \!"\!", TabListBox, {Set Selected( 3 )} )
)
)";
```

**Code Explanation**:

1. Open data table;
2. Create SEM object.
3. Generate report.
4. Set tab selection.
5. Select first list item.
6. Select second list item.
7. Select third list item.
8. Click button.
9. Save script to report.
10. Retrieve script text.



### Example 25
> **Summary**: Creates and fits a structural equation model (SEM) using JMP's SEM platform, generating a report with summary statistics.

<!-- Keywords: #JMP, #StructuralEquationModeling, #SEM, #DataAnalysis, #StatisticalModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L ),
	Model Specification(
		Model Name( "Model 2" ),
		Means( {"Constant", {:Support_L, :Goal_L}} ),
		Variances( {:Support_L, {:Support_L}}, {:Goal_L, {:Goal_L}} )
	),
	Fit(
		Model Name( "Model 1" ),
		Means( {"Constant", {:Support_L, :Goal_L}} ),
		Variances( {:Support_L, {:Support_L}}, {:Goal_L, {:Goal_L}} )
	)
);
rpt = Report( obj );
estimator = rpt[Tab Page Box( 4 ), "Structural Equation Model: Model 1", "Summary of Fit", Text Box( 1 )] << get text();
```

**Code Explanation**:

1. Open data table.
2. Create SEM object.
3. Define model variables.
4. Specify model name.
5. Include means in model.
6. Include variances in model.
7. Fit first model.
8. Generate report.
9. Navigate to summary tab.
10. Extract estimator text.



### Example 26
> **Summary**: Estimates and reports a structural equation model using JMP's Structural Equation Models platform, specifying variables, means, variances, and fitting models to generate a summary report.

<!-- Keywords: #JMP, #StructuralEquationModeling, #DataAnalysis, #RegressionAnalysis, #StatisticalModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L ),
	Estimation Method( "Maximum Likelihood with Robust Inference" ),
	Model Specification(
		Model Name( "Model 2" ),
		Means( {"Constant", {:Support_L, :Goal_L}} ),
		Variances( {:Support_L, {:Support_L}}, {:Goal_L, {:Goal_L}} )
	),
	Fit(
		Model Name( "Model 1" ),
		Means( {"Constant", {:Support_L, :Goal_L}} ),
		Variances( {:Support_L, {:Support_L}}, {:Goal_L, {:Goal_L}} )
	)
);
rpt = Report( obj );
estimator = rpt[Tab Page Box( 4 ), "Structural Equation Model: Model 1", "Summary of Fit", Text Box( 3 )] << get text();
```

**Code Explanation**:

1. Open data_table data
2. Launch Structural Equation Models.
3. Specify model variables.
4. Set estimation method.
5. Define model name "Model 2".
6. Include means for variables.
7. Include variances for variables.
8. Fit model named "Model 1".
9. Generate report from object.
10. Extract summary fit estimator text.



### Example 27
> **Summary**: Estimates and reports a structural equation model using MIIV Two-Stage Least Squares estimation method, with means and variances specified for Support_L and Goal_L.

<!-- Keywords: #StructuralEquationModeling, #MIIVTwoStageLeastSquares, #JMPScriptingLanguage, #DataAnalysis, #StatisticalModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L ),
	Estimation Method( "MIIV Two-Stage Least Squares" ),
	Model Specification(
		Model Name( "Model 2" ),
		Means( {"Constant", {:Support_L, :Goal_L}} ),
		Variances( {:Support_L, {:Support_L}}, {:Goal_L, {:Goal_L}} )
	),
	Fit(
		Model Name( "Model 1" ),
		Means( {"Constant", {:Support_L, :Goal_L}} ),
		Variances( {:Support_L, {:Support_L}}, {:Goal_L, {:Goal_L}} )
	)
);
rpt = Report( obj );
estimator = rpt[Tab Page Box( 4 ), "Structural Equation Model: Model 1", "Summary of Fit", Text Box( 1 )] << get text();
```

**Code Explanation**:

1. Open table.
2. Define model variables.
3. Set estimation method.
4. Specify model name.
5. Define means for model.
6. Define variances for model.
7. Fit model.
8. Create report object.
9. Extract summary fit tab.
10. Retrieve estimator text.



### Example 28
> **Summary**: Creates and configures a structural equation model with latent growth curves, utilizing popup boxes to interact with the model variables.

<!-- Keywords: #JSLScripting, #StructuralEquationModel, #LatentGrowthCurve, #PopupBox, #InteractiveAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Structural Equation Models( Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ) );
root = Report( obj );
(root[Popup Box( 1 )] << Get Scriptable Object) << Quadratic Latent Growth Curve;
root[List Box Box( 2 )] << Set Selected( 8, 1 );
(root[Popup Box( 1 )] << Get Scriptable Object) << "Intercept-only Latent Growth Curve"n;
```

**Code Explanation**:

1. Open data table;
2. Create structural equation model.
3. Assign model variables.
4. Generate report object.
5. Access popup box.
6. Apply quadratic latent growth curve.
7. Select items in list box.
8. Access popup box again.
9. Apply intercept-only latent growth curve.



### Example 29
> **Summary**: Fits a structural equation model (SEM) to analyze relationships between Support_L, Goal_L, Work_L, and Interact_L variables, generating standardized parameter estimates and a normalized residuals heat map.

<!-- Keywords: #StructuralEquationModel, #JMPScriptingLanguage, #DataAnalysis, #LatentVariables, #Regression -->

**Code**:
```jsl
dt = Open("data_table.jmp");
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
obj << journal;
obj << close window();
```

**Code Explanation**:

1. Open data table.
2. Define model variables.
3. Fit structural equation model.
4. Specify model name.
5. Create new latent variable.
6. Set means for variables.
7. Assign loadings to latent variable.
8. Define variances for variables.
9. Enable standardized parameter estimates.
10. Generate normalized residuals heat map.



### Example 30
> **Summary**: Creates and fits a structural equation model with latent variable 'Conflict' using data from an open JMP data table, specifying means, loadings, and variances for variables.

<!-- Keywords: #StructuralEquationModel, #JMPScriptingLanguage, #LatentVariable, #MeansLoadingsVariances, #PathDiagram -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Structural Equation Models(
	Model Variables( :Person_C, :Intra_C, :Inter_C ),
	Model Specification(
		Model Name( "Model 2" ),
		New Latent( "Conflict" ),
		Means( {"Constant", {:Person_C, :Intra_C, :Inter_C}} ),
		Loadings( {"Conflict", {:Person_C, :Intra_C, :Inter_C}, {2}} ),
		Variances( {:Person_C, {:Person_C}}, {:Intra_C, {:Intra_C}}, {:Inter_C, {:Inter_C}} )
	),
	Fit(
		Model Name( "Model 1" ),
		New Latent( "Conflict" ),
		Means( {"Constant", {:Person_C, :Intra_C, :Inter_C}} ),
		Loadings( {"Conflict", {:Person_C, :Intra_C, :Inter_C}, {2}} ),
		Variances( {:Person_C, {:Person_C}}, {:Intra_C, {:Intra_C}}, {:Inter_C, {:Inter_C}} ),
		Path Diagram Properties(
			Place Nodes(
				{{"Conflict", 286, 192}, {"Constant", 298, 407}, {"Inter_C", 369, 332}, {"Intra_C", 298, 332}, {"Person_C", 227, 332}}
			)
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Define model variables.
3. Create model specification for Model 2.
4. Add latent variable "Conflict".
5. Set means for variables.
6. Define loadings for variables.
7. Specify variances for variables.
8. Fit Model 1.
9. Add latent variable "Conflict".
10. Set means for variables.
11. Define loadings for variables.
12. Specify variances for variables.
13. Configure path diagram properties.
14. Place nodes on diagram.



### Example 31
> **Summary**: Creates a Structural Equation Model (SEM) with specified model variables, retrieving and accessing the Model Specification section in JMP.

<!-- Keywords: #JMP, #StructuralEquationModeling, #ScriptingLanguage, #DataAnalysis, #ModelSpecification -->

**Code**:
```jsl
dt = Open("data_table.jmp");
sem = dt << Structural Equation Models( Model Variables( :Multiple Choice Year1, :Multiple Choice Year2, :Open Ended Year1 ) );
rpt = Current Report();
scrObj = rpt["Model Specification", Popup Box( 1 )] << get scriptable object();
```

**Code Explanation**:

1. Open data table;
2. Create Structural Equation Model.
3. Specify model variables.
4. Retrieve current report.
5. Access Model Specification section.
6. Select first Popup Box.
7. Get scriptable object.



### Example 32
> **Summary**: Estimates a structural equation model using MIIV Two-Stage Least Squares with robust inference, specifying means and variances for Support_L, Goal_L, and Work_L.

<!-- Keywords: #StructuralEquationModel, #MIIVTwoStageLeastSquares, #RobustInference, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L ),
	Estimation Method( "MIIV Two-Stage Least Squares" ),
	Model Specification(
		Model Name( "Model 1" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L}} ),
		Variances( {:Support_L, {:Support_L}}, {:Goal_L, {:Goal_L}}, {:Work_L, {:Work_L}} )
	),
	Robust Inference( 1 )
);
rpt = Current Report();
rpt[Button Box( 11 )] << click;
```

**Code Explanation**:

1. Open data table;
2. Launch Structural Equation Models.
3. Set model variables: Support_L, Goal_L, Work_L.
4. Choose MIIV Two-Stage Least Squares.
5. Specify Model 1.
6. Include constant means for variables.
7. Define variances for each variable.
8. Enable robust inference.
9. Retrieve current report.
10. Click on button box 11.



### Example 33
> **Summary**: Estimates a structural equation model using MIIV Two-Stage Least Squares method, specifying means and variances for Labor60, FrPress60, Prod60, Energy60 variables, and displaying equation details in a report.

<!-- Keywords: #StructuralEquationModel, #MIIVTwoStageLeastSquares, #JSLScriptingLanguage, #PathDiagramProperties, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Structural Equation Models(
	Model Variables( 1 :: 4 ),
	Estimation Method( "MIIV Two-Stage Least Squares" ),
	Model Specification(
		Means( {"Constant", {:Labor60, :FrPress60}} ),
		Regressions( {:Prod60, {:Energy60}}, {:Energy60, {:Labor60, :FrPress60}} ),
		Variances( {:Prod60, {:Prod60}}, {:Energy60, {:Energy60}}, {:Labor60, {:Labor60}}, {:FrPress60, {:FrPress60}} )
	),
	Path Diagram Properties( Show Means( 1 ) )
);
(obj << Report())[Button Box( 11 )] << Click();
rpt = Current Report();
EqDetailsBox = rpt[Tab Page Box( 4 ), "Structural Equation Model: Model 1", "Equation Details"];
```

**Code Explanation**:

1. Open table.
2. Define model variables.
3. Set estimation method.
4. Specify means.
5. Define regressions.
6. Specify variances.
7. Configure path diagram.
8. Click button box.
9. Get current report.
10. Locate equation details.



### Example 34
> **Summary**: Estimates a structural equation model using MIIV Two-Stage Least Squares method to analyze the relationships between Support_L, Goal_L, Work_L, Interact_L, Conflict_Avg, and Satisfaction_Avg.

<!-- Keywords: #StructuralEquationModel, #MIIVTwoStageLeastSquares, #JMPScriptingLanguage, #DataAnalysis, #Regression -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L, :Conflict_Avg, :Satisfaction_Avg ),
	Estimation Method( "MIIV Two-Stage Least Squares" ),
	Model Specification(
		Model Name( "Model 1" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L, :Conflict_Avg, :Satisfaction_Avg}} ),
		Regressions(
			{:Support_L, {:Conflict_Avg}, {-0.2}},
			{:Goal_L, {:Conflict_Avg}, {"d1"}},
			{:Work_L, {:Conflict_Avg}, {"d1"}},
			{:Interact_L, {:Conflict_Avg, :Satisfaction_Avg}, {"d2", "d2"}}
		),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{:Conflict_Avg, {:Conflict_Avg}},
			{:Satisfaction_Avg, {:Satisfaction_Avg}}
		),
		Covariances(
			{:Support_L, {:Goal_L, :Work_L, :Interact_L}},
			{:Goal_L, {:Work_L, :Interact_L}},
			{:Work_L, {:Interact_L}},
			{:Conflict_Avg, {:Satisfaction_Avg}}
		)
	)
);
rpt = Current Report();
lg = Log Capture( rpt[Button Box( 11 )] << click() );
```

**Code Explanation**:

1. Open data table.
2. Launch Structural Equation Models platform.
3. Specify model variables.
4. Set estimation method.
5. Define model name.
6. Include means for all variables.
7. Add regression equations.
8. Specify variances for each variable.
9. Define covariances between variables.
10. Capture log report.



### Example 35
> **Summary**: Estimates a structural equation model using MIIV Two-Stage Least Squares method to analyze relationships between Support_L, Goal_L, Work_L, and Interact_L variables in a data table.

<!-- Keywords: #StructuralEquationModel, #MIIVTwoStageLeastSquares, #JMPScriptingLanguage, #DataAnalysis, #Regression -->

**Code**:
```jsl
dt = Open("data_table.jmp");
sem = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Estimation Method( "MIIV Two-Stage Least Squares" ),
	Model Specification(
		Model Name( "Model 1" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Regressions( {:Goal_L, {:Support_L}}, {:Work_L, {:Support_L}}, {:Interact_L, {:Support_L}} ),
		Variances( {:Support_L, {:Support_L}}, {:Goal_L, {:Goal_L}, {-1}}, {:Work_L, {:Work_L}, {-1}}, {:Interact_L, {:Interact_L}} ),
		Covariances( {:Goal_L, {:Work_L, :Interact_L}}, {:Work_L, {:Interact_L}} )
	),
	Fit(
		Model Name( "Model 1" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Regressions( {:Goal_L, {:Support_L}}, {:Work_L, {:Support_L}}, {:Interact_L, {:Support_L}} ),
		Variances( {:Support_L, {:Support_L}}, {:Goal_L, {:Goal_L}, {-1}}, {:Work_L, {:Work_L}, {-1}}, {:Interact_L, {:Interact_L}} ),
		Covariances( {:Goal_L, {:Work_L, :Interact_L}}, {:Work_L, {:Interact_L}} )
	)
);
rpt = Current Report();
```

**Code Explanation**:

1. Open data_table data
2. Launch Structural Equation Models.
3. Define model variables.
4. Set estimation method.
5. Specify model name.
6. Include means in model.
7. Define regressions.
8. Specify variances.
9. Include covariances.
10. Fit the model.



### Example 36
> **Summary**: Estimates a structural equation model using MIIV Two-Stage Least Squares method, specifying means and variances for variables, and defining regressions between latent and observed variables.

<!-- Keywords: #StructuralEquationModel, #MIIVTwoStageLeastSquares, #JSLScriptingLanguage, #DataAnalysis, #LatentVariables -->

**Code**:
```jsl
dt = Open("data_table.jmp");
sem = Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L, :Person_C, :Intra_C, :Inter_C, :General_S ),
	Estimation Method( "MIIV Two-Stage Least Squares" ),
	Model Specification(
		Model Name( "Model 1" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L, :Person_C, :Intra_C, :Inter_C, :General_S}} ),
		Regressions(
			{:Support_L, {:General_S}},
			{:Goal_L, {:General_S}},
			{:Work_L, {:General_S}},
			{:Interact_L, {:General_S}},
			{:Person_C, {:General_S}},
			{:Intra_C, {:General_S}},
			{:Inter_C, {:General_S}}
		),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{:Person_C, {:Person_C}},
			{:Intra_C, {:Intra_C}},
			{:Inter_C, {:Inter_C}},
			{:General_S, {:General_S}}
		)
	),
	Fit(
		Model Name( "Model 1" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L, :Person_C, :Intra_C, :Inter_C, :General_S}} ),
		Regressions(
			{:Support_L, {:General_S}},
			{:Goal_L, {:General_S}},
			{:Work_L, {:General_S}},
			{:Interact_L, {:General_S}},
			{:Person_C, {:General_S}},
			{:Intra_C, {:General_S}},
			{:Inter_C, {:General_S}}
		),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{:Person_C, {:Person_C}},
			{:Intra_C, {:Intra_C}},
			{:Inter_C, {:Inter_C}},
			{:General_S, {:General_S}}
		)
	)
);
rpt = Current Report();
latent_list = {};
group_list = {};
```

**Code Explanation**:

1. Open data table.
2. Define SEM model.
3. Specify estimation method.
4. Define model name.
5. Set means for variables.
6. Define regressions.
7. Define variances.
8. Fit the model.
9. Retrieve current report.
10. Initialize latent list.



### Example 37
> **Summary**: Creates and configures a Structural Equation Model (SEM) with latent variables, loadings, and variances for specified model variables.

<!-- Keywords: #JSL, #StructuralEquationModeling, #LatentVariables, #Loadings, #Variances -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L ),
	Model Specification(
		Model Name( "Model 1" ),
		New Latent( "Latent1" ),
		Means( {"Constant", {:Support_L, :Goal_L}} ),
		Loadings( {"Latent1", {:Support_L, :Goal_L}, {1}} ),
		Variances( {:Support_L, {:Support_L}}, {:Goal_L, {:Goal_L}}, {"Latent1", {"Latent1"}} )
	),
	SendToReport( Dispatch( {"Model Specification"}, "", TabListBox, {Set Selected( 3 )} ) )
);
rpt = Current Report();
objscr = rpt["Model Specification", Popup Box( 1 )] << get scriptable object();
objscr << switch latent variable scale();
variance_list = rpt["Model Specification", Tab Page Box( 2 ), "Variances", ListBoxBox( 1 )] << get items();
loadings_list = rpt["Model Specification", Tab Page Box( 2 ), "Loadings", ListBoxBox( 1 )] << get items();
latent_list = ("latent1");
group_list = ("none");
variance_list_bm = {"Constant ‚Üî Constant(1)", "Support_L ‚Üî Support_L", "Goal_L ‚Üî Goal_L", "Latent1 ‚Üî Latent1(1)"};
loadings_list_bm = {"Latent1 ‚Üí Support_L", "Latent1 ‚Üí Goal_L"};
```

**Code Explanation**:

1. Open data table;
2. Create Structural Equation Model object.
3. Define model variables: Support_L, Goal_L.
4. Specify model name: Model 1.
5. Add latent variable: Latent1.
6. Set means for constants and variables.
7. Define loadings for Latent1.
8. Set variances for variables and latent variable.
9. Select third tab in report.
10. Get scriptable object for model specification.



### Example 38
> **Summary**: Creates and creates a report for a structural equation model with multiple choice variables, groups, and path diagram properties.

<!-- Keywords: #StructuralEquationModel, #MultipleChoiceVariables, #PathDiagram, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Structural Equation Models(
	Model Variables( :Multiple Choice Year1, :Multiple Choice Year2, :Multiple Choice Year3, :Multiple Choice Year4 ),
	Groups( :Sex ),
	Model Specification(
		Model Name( "Model 1" ),
		New Latent( "Latent1", "Latent2" ),
		Means( {"Constant", {:Multiple Choice Year1, :Multiple Choice Year2, :Multiple Choice Year3, :Multiple Choice Year4}} ),
		Loadings(
			{"Latent1", {:Multiple Choice Year1, :Multiple Choice Year2}, {{1, ""}, {1, ""}}},
			{"Latent2", {:Multiple Choice Year3, :Multiple Choice Year4}, {{"", ""}, {"", 1}}}
		),
		Variances(
			{:Multiple Choice Year1, {:Multiple Choice Year1}},
			{:Multiple Choice Year2, {:Multiple Choice Year2}},
			{:Multiple Choice Year3, {:Multiple Choice Year3}},
			{:Multiple Choice Year4, {:Multiple Choice Year4}},
			{"Latent1", {"Latent1"}},
			{"Latent2", {"Latent2"}, {{"b1"}, {"b1"}}}
		)
	),
	Path Diagram Properties( Rotate Loops( {{"Latent1", 4.712}, {"Latent2", 4.714}} ), Show Means( 1 ) )
);
rpt = obj << Report();
model_status_box = rpt[Outline Box( "Model Specification" )];
```

**Code Explanation**:

1. Open data table.
2. Launch Structural Equation Models platform.
3. Specify model variables.
4. Define groups.
5. Create new latent variables.
6. Set means for observed variables.
7. Assign loadings to latent variables.
8. Define variances for observed and latent variables.
9. Rotate loops in path diagram.
10. Show means in path diagram.



### Example 39
> **Summary**: Creates and creates a report for a structural equation model with multiple choice variables, groups by sex, and path diagram properties.

<!-- Keywords: #StructuralEquationModel, #JMPScriptingLanguage, #MultipleChoiceVariables, #PathDiagramProperties, #GroupAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Structural Equation Models(
	Model Variables( :Multiple Choice Year1, :Multiple Choice Year2, :Multiple Choice Year3, :Multiple Choice Year4 ),
	Groups( :Sex ),
	Model Specification(
		Model Name( "Model 1" ),
		New Latent( "Latent1", "Latent2" ),
		Means( {"Constant", {:Multiple Choice Year1, :Multiple Choice Year2, :Multiple Choice Year3, :Multiple Choice Year4}} ),
		Loadings(
			{"Latent1", {:Multiple Choice Year1, :Multiple Choice Year2}, {{1, ""}, {1, ""}}},
			{"Latent2", {:Multiple Choice Year3, :Multiple Choice Year4}}
		),
		Variances(
			{:Multiple Choice Year1, {:Multiple Choice Year1}},
			{:Multiple Choice Year2, {:Multiple Choice Year2}},
			{:Multiple Choice Year3, {:Multiple Choice Year3}},
			{:Multiple Choice Year4, {:Multiple Choice Year4}},
			{"Latent1", {"Latent1"}, {{"b1"}, {"b1"}}},
			{"Latent2", {"Latent2"}, {{"b1"}, {"b1"}}}
		)
	),
	Path Diagram Properties( Rotate Loops( {{"Latent1", 4.691}, {"Latent2", 4.708}} ), Show Means( 1 ) )
);
rpt = obj << Report();
model_status_box = rpt[Outline Box( "Model Specification" )];
```

**Code Explanation**:

1. Open data table;
2. Launch Structural Equation Models.
3. Define model variables.
4. Specify groups by sex.
5. Create new latent variables.
6. Set means for observed variables.
7. Assign loadings for latent variables.
8. Define variances for observed variables.
9. Define variances for latent variables.
10. Configure path diagram properties.



## Structural Equation Models using New Column
### Example 1
> **Summary**: Fits a structural equation model with multiple effects and generates a profiler plot for data analysis, utilizing JMP's Structural Equation Models platform.

<!-- Keywords: #JMP-SEM, #StructuralEquationModeling, #DataAnalysis, #MultipleEffects, #ProfilerPlot -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Support_L_Colinear", Formula( :Support_L * 0.95 ) );
sem = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L, :Support_L_Colinear ),
	Estimation Method( "MIIV Two-Stage Least Squares" ),
	Model Specification(
		Model Name( "Model 1" ),
		New Latent( "Latent1" ),
		Means( {"Constant", {:Work_L, :Interact_L, :Support_L_Colinear, "Latent1", :Support_L}} ),
		Loadings( {"Latent1", {:Support_L, :Goal_L, :Work_L, :Interact_L, :Support_L_Colinear}, {"", 1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{:Support_L_Colinear, {:Support_L_Colinear}},
			{"Latent1", {"Latent1"}}
		)
	),
	Path Diagram Properties( Show Means( 1 ) ),
	Fit(
		Model Name( "Model 1" ),
		New Latent( "Latent1" ),
		Means( {"Constant", {:Work_L, :Interact_L, :Support_L_Colinear, "Latent1", :Support_L}} ),
		Loadings( {"Latent1", {:Support_L, :Goal_L, :Work_L, :Interact_L, :Support_L_Colinear}, {"", 1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{:Support_L_Colinear, {:Support_L_Colinear}},
			{"Latent1", {"Latent1"}}
		),
		Equation Details( Show All Equations( 1 ), Variance of the Error( 1 ), Composite Error( 1 ) ),
		Path Diagram Properties(
			Place Nodes(
				{{"Constant", 319, 129}, {"Goal_L", 181, 389}, {"Interact_L", 384, 389}, {"Latent1", 287, 252}, {"Support_L", 80, 389},
				{"Support_L_Colinear", 485, 389}, {"Work_L", 282, 389}}
			),
			Show Means( 1 )
		)
	)
);
rpt = Current Report();
modelCompOpen = rpt["Model Diagnostics"] << set open;
```

**Code Explanation**:

1. Open table "data_table".
2. Create new column "Support_L_Colinear".
3. Define Structural Equation Model.
4. Specify model variables.
5. Set estimation method.
6. Define model specification.
7. Add latent variable "Latent1".
8. Specify means for variables.
9. Define loadings for variables.
10. Set variances for variables.



### Example 2
> **Summary**: Creates a structural equation model with multiple effects and generates a profiler plot for data analysis, utilizing the JMP scripting language.

<!-- Keywords: #JMPScriptingLanguage, #StructuralEquationModeling, #ProfilerPlot, #DataAnalysis, #Modeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
col = dt << New Column( "Test+/-456" );
col << Set Formula( Random Normal( 10 ) );
obj = dt << Structural Equation Models( Model Variables( :Work_L, :"Test+/-456"n ) );
```

**Code Explanation**:

1. Open data table;
2. Create new column.
3. Set column formula.
4. Run structural equation model.



### Example 3
> **Summary**: Fits a structural equation model with multiple effects and generates a profiler plot using JMP's Structural Equation Models platform.

<!-- Keywords: #JMP, #StructuralEquationModeling, #MultipleEffects, #ProfilerPlot, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Support_L_Large", Formula( :Support_L * 10000000 ) );
dt << Structural Equation Models(
	Model Variables( :Goal_L, :Work_L, :Interact_L, :Support_L_Large ),
	Estimation Method( "MIIV Two-Stage Least Squares" ),
	Model Specification(
		Model Name( "Model 1" ),
		New Latent( "Latent1" ),
		Means( {"Constant", {:Work_L, :Interact_L, :Support_L_Large, "Latent1"}} ),
		Loadings( {"Latent1", {:Goal_L, :Work_L, :Interact_L, :Support_L_Large}, {1}} ),
		Variances(
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{:Support_L_Large, {:Support_L_Large}},
			{"Latent1", {"Latent1"}}
		)
	),
	Fit(
		Model Name( "Model 1" ),
		New Latent( "Latent1" ),
		Means( {"Constant", {:Work_L, :Interact_L, :Support_L_Large, "Latent1"}} ),
		Loadings( {"Latent1", {:Goal_L, :Work_L, :Interact_L, :Support_L_Large}, {1}} ),
		Variances(
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{:Support_L_Large, {:Support_L_Large}},
			{"Latent1", {"Latent1"}}
		)
	),
	SendToReport( Dispatch( {"Model Specification"}, "", TabListBox, {Set Selected( 1 )} ) )
);
rpt = Current Report();
```

**Code Explanation**:

1. Open data table;
2. Create new column "Support_L_Large".
3. Start Structural Equation Models.
4. Define model variables.
5. Set estimation method.
6. Specify model name.
7. Add new latent variable "Latent1".
8. Define means for variables.
9. Define loadings for variables.
10. Define variances for variables.



## Structural Equation Models using Run Script
> **Summary**: Process of running a SEM path analysis with latent variables, extracting report objects, and copying properties scripts in JMP.

<!-- Keywords: #JMPScriptingLanguage, #SEMPathAnalysis, #LatentVariables, #ReportObjects, #ScriptableObjects -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Run Script( "SEM: Path Analysis w/ Latent" );
rpt = obj << Report();
scrObj = rpt[Outline Box( "?Latent Variables" )] << Get Scriptable Object();
scrObj << Copy Properties Script();
obj2 = dt << Structural Equation Models( Model Variables( 2 :: 12 ) );
obj2 << Paste Properties Script();
```

**Code Explanation**:

1. Open data table;
2. Run SEM path analysis script.
3. Extract report object.
4. Access latent variables outline box.
5. Get scriptable object.
6. Copy properties script.
7. Create new SEM model with variables.
8. Paste copied properties into new model.



## Structural Equation Models using Log Capture
### Example 1
> **Summary**: Creates and configures two Structural Equation Models (SEMs) with different model variables, using the JMP Log Capture platform.

<!-- Keywords: #JMPLogCapture, #StructuralEquationModel, #SEM, #DataTable, #JSLScripting -->

**Code**:
```jsl
lg1 = Log Capture(
	dt = Open("data_table.jmp");
	obj = dt << Structural Equation Models( Model variables( [4, 5, 6, 2] ) );
	obj << Model Specification( Define Time Values( {1, 2, 3} ) );
	obj << Copy Model  Specification();
	obj2 = dt << Structural Equation Models( Model variables( [2, 4, 5, 6] ) );
	obj2 << Paste Model Specification();
);
```

**Code Explanation**:

1. Open data table.
2. Create SEM object.
3. Specify model variables.
4. Define time values.
5. Copy model specification.
6. Create second SEM object.
7. Specify different model variables.
8. Paste model specification.
9. Capture log output.
10. Save log file.



### Example 2
> **Summary**: Creates and manipulates Structural Equation Models (SEMs) in JMP, defining model variables, time values, and copying/pasting model specifications.

<!-- Keywords: #JMPScriptingLanguage, #StructuralEquationModeling, #DataTableOperations, #ModelSpecification, #LogCapture -->

**Code**:
```jsl
lg2 = Log Capture(
	dt = Open("data_table.jmp");
	obj = dt << Structural Equation Models( Model variables( [4, 5, 6] ) );
	obj << Model Specification( Define Time Values( {1, 2, 3} ) );
	obj << Copy Model  Specification();
	obj2 = dt << Structural Equation Models( Model variables( [6, 5, 4] ) );
	obj2 << Paste Model Specification();
);
```

**Code Explanation**:

1. Open data table;
2. Create Structural Equation Models.
3. Set model variables [4, 5, 6].
4. Define time values {1, 2, 3}.
5. Copy model specification.
6. Create second SEM object.
7. Set model variables [6, 5, 4].
8. Paste model specification.
9. Capture log output.
10. Assign to lg2 variable.



### Example 3
> **Summary**: Runs a path analysis with latent variables using JMP's Structural Equation Models (SEM) to analyze the relationships between various variables, including support, goal, work, and satisfaction.

<!-- Keywords: #JMPSEM, #PathAnalysis, #LatentVariables, #StructuralEquationModeling, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
lg = Log Capture(
	sem = dt << Structural Equation Models(
		Model Variables(
			:Support_L, :Goal_L, :Work_L, :Interact_L, :Person_C, :Intra_C, :Inter_C, :General_S, :Growth_S, :Coworker_S, :Supervisor_S
		),
		Estimation Method( "MIIV Two-Stage Least Squares" ),
		Fit(
			Model Name( "Path Analysis with Latent Variables" ),
			New Latent( "Leadership", "Conflict", "Satisfaction" ),
			Means(
				{"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L, :Person_C, :Intra_C, :Inter_C, :General_S, :Growth_S, :Coworker_S,
				:Supervisor_S}}
			),
			Loadings(
				{"Leadership", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}},
				{"Conflict", {:Person_C, :Intra_C, :Inter_C}, {1}},
				{"Satisfaction", {:General_S, :Growth_S, :Coworker_S, :Supervisor_S}, {1}}
			),
			Regressions( {"Leadership", {"Conflict", "Satisfaction"}}, {"Conflict", {"Satisfaction"}} ),
			Variances(
				{:Support_L, {:Support_L}},
				{:Goal_L, {:Goal_L}},
				{:Work_L, {:Work_L}},
				{:Interact_L, {:Interact_L}},
				{:Person_C, {:Person_C}},
				{:Intra_C, {:Intra_C}},
				{:Inter_C, {:Inter_C}},
				{:General_S, {:General_S}},
				{:Growth_S, {:Growth_S}},
				{:Coworker_S, {:Coworker_S}},
				{:Supervisor_S, {:Supervisor_S}},
				{"Leadership", {"Leadership"}},
				{"Conflict", {"Conflict"}},
				{"Satisfaction", {"Satisfaction"}}
			),
			Normalized Residuals Heat Map( 1 )
		)
	)
);
```

**Code Explanation**:

1. Open data_table data
2. Start log capture.
3. Create SEM model.
4. Define model variables.
5. Set estimation method.
6. Begin fit process.
7. Name model.
8. Create latent variables.
9. Specify means.
10. Define loadings.



### Example 4
> **Summary**: Fits and analyzes a structural equation model, generating standardized parameter estimates, residual heat maps, and other diagnostic plots.

<!-- Keywords: #JSLScripting, #StructuralEquationModel, #LogCapture, #JMPReporting, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Log Capture(
	dt << Structural Equation Models(
		Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
		Fit Unrestricted Model( 0 ),
		Model Specification(
			Model Name( "Model 0" ),
			Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
			Variances( {:Support_L, {:Support_L}}, {:Goal_L, {:Goal_L}}, {:Work_L, {:Work_L}}, {:Interact_L, {:Interact_L}} )
		),
		Fit(
			Model Name( "Model 1" ),
			Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
			Variances( {:Support_L, {:Support_L}}, {:Goal_L, {:Goal_L}}, {:Work_L, {:Work_L}}, {:Interact_L, {:Interact_L}} )
		)
	);
	rpt = Current Report();
	scrObj = rpt[Outline Box( "?Model 1" )] << Get Scriptable Object();
	scrObj << Standardized Parameter Estimates( 1 );
	scrObj << Confidence Intervals( 1 );
	scrObj << Fit Indices( 1 );
	scrObj << Total Effects( 1 );
	scrObj << Model Implied Covariances( 1 );
	scrObj << Model Implied Correlations( 1 );
	scrObj << Model Implied Means( 1 );
	scrObj << Residuals( 1 );
	scrObj << Normalized Residuals( 1 );
	scrObj << RAM Matrices( 1 );
	scrObj << Covariance of Estimates( 1 );
	scrObj << Correlation of Estimates( 1 );
	scrObj << RSquare for Endogenous Variables( 1 );
	scrObj << Normalized Residuals Heat Map( 1 );
	scrObj << Model Implied Covariances Heat Map( 1 );
	scrObj << Covariance of Estimates Heat Map( 1 );
	scrObj << Correlation of Estimates Heat Map( 1 );
	scrObj << All Modification Indices( 1 );
	scrObj << Save Factor Scores( 1 );
	scrObj << Save Prediction Formulas( 1 );
	scrObj << Save Observational Residuals( 1 );
);
```

**Code Explanation**:

1. Open data_table data
2. Start log capture.
3. Fit unrestricted structural equation model.
4. Specify model variables.
5. Define model name "Model 0".
6. Set means for all variables.
7. Set variances for all variables.
8. Fit model named "Model 1".
9. Retrieve current report.
10. Get scriptable object for "Model 1".



### Example 5
> **Summary**: Creates and fits a structural equation model (SEM) using JMP's Log Capture feature, specifying variables, means, loadings, variances, and covariances.

<!-- Keywords: #JMP, #StructuralEquationModeling, #LogCapture, #SEM, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
model_log = Log Capture(
	sem = dt << Structural Equation Models(
		Model Variables( :FrPress60, :FrOpp60, :Fair60, :Legis60, :FrPress65, :FrOpp65, :Fair65, :Legis65 ),
		Fit(
			Model Name( "Model 1" ),
			New Latent( "Latent1", "Latent2" ),
			Means( {"Constant", {:FrPress60, :FrOpp60, :Fair60, :Legis60, :FrPress65, :FrOpp65, :Fair65, :Legis65}} ),
			Loadings(
				{"Latent1", {:FrPress60, :FrOpp60, :Fair60, :Legis60}, {1}},
				{"Latent2", {:FrPress65, :FrOpp65, :Fair65, :Legis65}, {1}}
			),
			Variances(
				{:FrPress60, {:FrPress60}},
				{:FrOpp60, {:FrOpp60}},
				{:Fair60, {:Fair60}},
				{:Legis60, {:Legis60}},
				{:FrPress65, {:FrPress65}},
				{:FrOpp65, {:FrOpp65}},
				{:Fair65, {:Fair65}},
				{:Legis65, {:Legis65}},
				{"Latent1", {"Latent1"}},
				{"Latent2", {"Latent2"}}
			),
			Covariances( {"Latent1", {"Latent2"}} ),
			Modification Indices( 1 )
		)
	);
	rpt = Current Report();
);
mod_ind_box = rpt[Outline Box( "Modification Indices" )];
```

**Code Explanation**:

1. Open table.
2. Create SEM model.
3. Define model variables.
4. Fit model named "Model 1".
5. Add two latent variables.
6. Set means for all variables.
7. Assign loadings for latent variables.
8. Set variances for observed variables.
9. Set variances for latent variables.
10. Include covariance between latent variables.



## Structural Equation Models using Random Reset
> **Summary**: Creates and configures a Structural Equation Models platform with random weight column, model specification, and robust inference.

<!-- Keywords: #JSLScripting, #StructuralEquationModels, #RandomWeightColumn, #ModelSpecification, #RobustInference -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Random Reset( 123 );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L ),
	Weight( :_weightcol ),
	Estimation Method( "MIIV Two-Stage Least Squares" ),
	Model Specification(
		Model Name( "Model 1" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L}} ),
		Variances( {:Support_L, {:Support_L}}, {:Goal_L, {:Goal_L}}, {:Work_L, {:Work_L}} )
	),
	Robust Inference( 1 )
);
rpt = Current Report();
rpt[Button Box( 11 )] << click;
```

**Code Explanation**:

1. Open data table;
2. Set random seed to 123.
3. Add new column "_weightcol".
4. Populate "_weightcol" with random beta values.
5. Launch Structural Equation Models platform.
6. Specify model variables: Support_L, Goal_L, Work_L.
7. Use "_weightcol" as weight.
8. Choose MIIV Two-Stage Least Squares method.
9. Define model "Model 1".
10. Include means for all variables.
11. Include variances for all variables.
12. Enable robust inference.
13. Get current report.
14. Click button box 11 in report.




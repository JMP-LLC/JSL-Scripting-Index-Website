# Cumulative Damage

### Example 1
> **Summary**: Performs cumulative damage analysis on a data table, using a piecewise ramp stress model with inverse power relationship and Weibull distribution, adjusting for censoring and pattern continuation.

<!-- Keywords: #CumulativeDamage, #PiecewiseRampStress, #WeibullDistribution, #InversePowerRelationship, #Censoring -->

**Code**:
```jsl
// Cumulative Damage
// Open data table
dt = Open("data_table.jmp");
// Cumulative Damage
Open("data_table.jmp");
Cumulative Damage(
	Model Type( "Piecewise Ramp Stress" ),
	Time to Event Data Table(
		"CD Piecewise Ramp Stress",
		Time to Event( :Time ),
		Censor( :Censor ),
		Pattern ID( :Pattern ID )
	),
	Piecewise Ramp Stress Pattern Data Table(
		"CD Piecewise Ramp Stress Pattern",
		Stress Duration( :Duration ),
		Stress Ramp(
			:Stress Start, :Stress End
		),
		Pattern ID( :Pattern ID )
	),
	Relationship( "Inverse Power" ),
	Distribution( "Weibull" ),
	Pattern Continuation( "Terminate" )
);
```

**Code Explanation**:

1. Open data table.
2. Open data table.
3. Perform cumulative damage analysis.
4. Specify model type.
5. Set time to event data table.
6. Define time to event column.
7. Define censor column.
8. Define pattern ID column.
9. Set piecewise ramp stress pattern data table.
10. Define stress duration column.



### Example 2
> **Summary**: Performs cumulative damage analysis using a ramp stress model, adjusting for the Layout effect and splitting the Y variable by Quadrant in the Wafer Quadrants data set.

<!-- Keywords: #CumulativeDamage, #RampStressModel, #LayoutEffect, #DataSplitting, #JMPScriptingLanguage -->

**Code**:
```jsl
// Cumulative Damage
// Open data table
dt = Open("data_table.jmp");
// Cumulative Damage
Open("data_table.jmp");
Cumulative Damage(
	Model Type( "Ramp Stress" ),
	Time to Event Data Table(
		"CD Ramp Stress",
		Time to Event( :Time ),
		Censor( :Censor ),
		Pattern ID( :Pattern ID )
	),
	Ramp Stress Pattern Data Table(
		"CD Ramp Stress Pattern",
		Intercept( :intercept ),
		Slope( :slope ),
		Pattern ID( :Pattern ID )
	),
	Relationship( "Inverse Power" ),
	Distribution( "Weibull" )
);
```

**Code Explanation**:

1. Open data table.
2. Open data table.
3. Perform cumulative damage analysis.
4. Specify ramp stress model.
5. Define time-to-event data table.
6. Set time to event column.
7. Identify censor column.
8. Specify pattern ID column.
9. Define ramp stress pattern data table.
10. Set intercept column.
11. Set slope column.
12. Confirm pattern ID column.
13. Choose inverse power relationship.
14. Select Weibull distribution.



### Example 3
> **Summary**: Opens a data table, splits the Y variable by quadrant in the Wafer Quadrants dataset, and fits a Standard Least Squares regression model to the resulting subsets while adjusting for the Layout effect.

<!-- Keywords: #JMPScriptingLanguage, #DataTableOperations, #RegressionAnalysis, #LayoutEffectAdjustment, #QuadrantSplit -->

**Code**:
```jsl
// Cumulative Damage
// Open data table
dt = Open("data_table.jmp");
// Cumulative Damage
Open("data_table.jmp");
Cumulative Damage(
	Model Type( "Sinusoid Stress" ),
	Time to Event Data Table(
		"CD Sinusoid Stress",
		Time to Event( :Time ),
		Censor( :Censor ),
		Pattern ID( :Pattern ID )
	),
	Sinusoid Stress Pattern Data Table(
		"CD Sinusoid Stress Pattern",
		Level( :level ),
		Amplitude( :amplitude ),
		Period( :period ),
		Phase( :phase ),
		Pattern ID( :Pattern ID )
	),
	Relationship( "Inverse Power" ),
	Distribution( "Weibull" )
);
```

**Code Explanation**:

1. Open data table.
2. Open data table.
3. Perform Cumulative Damage analysis.
4. Set model type to Sinusoid Stress.
5. Specify time to event data table.
6. Define time to event column.
7. Define censor column.
8. Define pattern ID column.
9. Specify sinusoid stress pattern data table.
10. Define level column.
11. Define amplitude column.
12. Define period column.
13. Define phase column.
14. Define pattern ID column.
15. Set relationship to Inverse Power.
16. Set distribution to Weibull.



### Example 4
> **Summary**: Opens a data table, splits the Y variable by quadrant in the Wafer Quadrants data set, and fits a Standard Least Squares regression model to the resulting subsets while adjusting for the Layout effect.

<!-- Keywords: #CumulativeDamage, #RegressionAnalysis, #DataSplitting, #LayoutEffect, #JMPScriptingLanguage -->

**Code**:
```jsl
// Cumulative Damage
// Open data table
dt = Open("data_table.jmp");
// Cumulative Damage
Open("data_table.jmp");
Cumulative Damage(
	Model Type( "Step Stress" ),
	Time to Event Data Table(
		"CD Step Stress",
		Time to Event( :Time ),
		Censor( :Censor ),
		Pattern ID( :Pattern ID )
	),
	Step Stress Pattern Data Table(
		"CD Step Stress Pattern",
		Stress Duration( :Duration ),
		Stress( :Stress ),
		Pattern ID( :Pattern ID )
	),
	Relationship( "Inverse Power" ),
	Distribution( "Weibull" ),
	Pattern Continuation( "Terminate" )
);
```

**Code Explanation**:

1. Open data table.
2. Open data table.
3. Run Cumulative Damage analysis.
4. Specify model type.
5. Define time to event data table.
6. Identify time to event column.
7. Identify censor column.
8. Identify pattern ID column.
9. Define step stress pattern data table.
10. Identify stress duration column.



### Example 5
> **Summary**: Creates a Cumulative Damage object with Step Stress model, utilizing time to event data and step stress pattern tables.

<!-- Keywords: #CumulativeDamage, #StepStressModel, #TimeToEventData, #StepStressPatternTable, #JMPScriptingLanguage -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
dt2 = Open("data_table.jmp");
obj = Cumulative Damage(
	Model Type( "Step Stress" ),
	Time to Event Data Table( "CD Step Stress", Time to Event( :Time ), Censor( :Censor ), Pattern ID( :Pattern ID ), Censor Code( 1 ) ),
	Step Stress Pattern Data Table( "CD Step Stress Pattern", Stress Duration( :Duration ), Stress( :Stress ), Pattern ID( :Pattern ID ) ),
	Relationship( "Inverse Power" ),
	Distribution( "Weibull" ),
	Pattern Continuation( "Terminate" )
);
```

**Code Explanation**:

1. Open CD Step Stress table.
2. Open CD Step Stress Pattern table.
3. Create Cumulative Damage object.
4. Set model type to Step Stress.
5. Define time to event data table.
6. Specify time to event column.
7. Identify censor column.
8. Assign pattern ID column.
9. Set censor code to 1.
10. Define step stress pattern data table.




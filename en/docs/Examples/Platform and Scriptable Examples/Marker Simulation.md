# Marker Simulation

### Example 1
> **Summary**: Runs the marker simulation process by opening a data table and running the simulation.

<!-- Keywords: #JSLScriptingLanguage, #MarkerSimulation, #DataTable, #SimulationProcess, #Automation -->

**Code**:
```jsl
Open("data_table.jmp");
Marker Simulation();
```

**Code Explanation**:

1. Open data table;
2. Run marker simulation.



### Example 2
> **Summary**: Opens a data table and runs a marker simulation.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #MarkerSimulation, #ScriptAutomation, #JSLScript -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Marker Simulation();
```

**Code Explanation**:

1. Open data table;
2. Run Marker Simulation.



### Example 3
> **Summary**: Runs the simulation and re-opening of a data table in JMP, utilizing the Marker Simulation feature.

<!-- Keywords: #JMPScriptingLanguage, #MarkerSimulation, #DataTableManagement, #ScriptAutomation, #JSLScripting -->

**Code**:
```jsl
Open("data_table.jmp");
Marker Simulation();
dt = Open("data_table.jmp");
dt << Marker Simulation();
dt = Open("data_table.jmp");
```

**Code Explanation**:

1. Open data table;
2. Run Marker Simulation.
3. Open data table;
4. Run Marker Simulation on dataset.
5. Open data table;



## Marker Simulation using Select Where
### Example 1
> **Summary**: Runs a marker simulation analysis to predict disease status, utilizing predictor formulas and simulation parameters to generate a diversity plot.

<!-- Keywords: #MarkerSimulation, #PredictiveModeling, #DiversityPlot, #JMPScriptingLanguage, #GeneticsAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;
obj = dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3, :Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Unthreaded( 1 ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 2000 ),
	Estimate Diversity( 1 ),
	Show Diversity Plot( 0 )
);
obj << Show Diversity Plot( 1 );
obj << Redo Analysis;
```

**Code Explanation**:

1. Open data table.
2. Clear all selections.
3. Select rows where Father and Mother are 0.
4. Invert row selection.
5. Exclude selected rows.
6. Clear all selections.
7. Run Marker Simulation.
8. Define marker column group.
9. Specify predictor formulas.
10. Set simulation parameters.
11. Show diversity plot.
12. Redo analysis.



### Example 2
> **Summary**: Simulates marker data using JMP's Marker Simulation feature, configuring various parameters to generate a simulated table.

<!-- Keywords: #JMPScriptingLanguage, #MarkerSimulation, #DataTableManipulation, #PredictorFormulas, #SimulationParameters -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;
test = Is Scriptable(
	obj = dt << Marker Simulation(
		Marker( Column Group( "Markers" ) ),
		Predictor Formula(
			:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3, :Pred Formula Trait4, :"Probability( Disease Status=1 )"n
		),
		Cross( :Sex ),
		Unthreaded( 1 ),
		Ploidy( 2 ),
		Number of Generations( 2 ),
		Number of Individuals per Cross( 10 ),
		Select Best Individuals( 1 ),
		Number of Selected Individuals( 2 ),
		Number of Selected Crosses( 5 ),
		Set Random Seed( 12345 ),
		Threshold to Make Line Plots( 1000 ),
		Estimate Diversity( 1 ),
		Show Diversity Plot( 1 ),
		Show Evaluation Plot( 1 ), 
	);
	Close( Data Table("data_table"), NoSave );
	obj << Save Simulated Table;
);
```

**Code Explanation**:

1. Open data table.
2. Clear row selection and states.
3. Select rows where Father and Mother are 0.
4. Invert row selection and exclude.
5. Clear row selection again.
6. Check if scriptable.
7. Run Marker Simulation.
8. Define marker column group.
9. Set predictor formulas.
10. Configure simulation parameters.
11. Close simulated table without saving.
12. Save simulated table.



### Example 3
> **Summary**: Simulates marker data using a custom script, generating a dataset with predicted traits and disease status.

<!-- Keywords: #JMPScriptingLanguage, #MarkerSimulation, #PredictiveModeling, #DataGeneration, #Genomics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dtAnno = Open("data_table.jmp");
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;
test = Is Scriptable(
	dt << Marker Simulation(
		Marker( Column Group( "Markers" ) ),
		Predictor Formula(
			:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3, :Pred Formula Trait4,
			:"Probability( Disease Status=1 )"n
		),
		Cross( :Sex ),
		Use Only Markers Found in Predictor Formula( 1 ),
		Ploidy( 2 ),
		Number of Generations( 2 ),
		Number of Individuals per Cross( 10 ),
		Set Random Seed( 12345 ),
		Threshold to Make Line Plots( 1000 ),
		Use Annotation Table(
			1,
			dtAnno,
			Marker Variables( :Marker ),
			Annotation Group( :Gene ),
			Annotation Position( :Linkage Position ),
			Go
		)
	)
);
```

**Code Explanation**:

1. Open data_table data
2. Open data_table data
3. Clear selection and row states.
4. Select rows where father and mother are zero.
5. Invert row selection and exclude.
6. Clear selection.
7. Check if scriptable.
8. Run marker simulation.
9. Define marker column group.
10. Set predictor formulas.
11. Include sex cross.
12. Use markers from predictor formula.
13. Set ploidy to 2.
14. Set number of generations to 2.
15. Set number of individuals per cross to 10.
16. Set random seed to 12345.
17. Set threshold for line plots to 1000.
18. Use annotation table.
19. Specify annotation group and position.
20. Execute annotation.



### Example 4
> **Summary**: Simulates marker inheritance in a pedigree data set, utilizing predictor formulas and annotation tables to generate a simulated dataset.

<!-- Keywords: #JMPScriptingLanguage, #MarkerSimulation, #PedigreeAnalysis, #PredictorFormulas, #AnnotationTables -->

**Code**:
```jsl
dtAnno = Open("data_table.jmp");
dt = Open("data_table.jmp");
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;
test = Is Scriptable(
	dt << Marker Simulation(
		Marker( Column Group( "Markers" ) ),
		Predictor Formula(
			:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3, :Pred Formula Trait4, :"Probability( Disease Status=1 )"n
		),
		Cross( :Sex ),
		Use Only Markers Found in Predictor Formula( 1 ),
		Ploidy( 2 ),
		Number of Generations( 2 ),
		Number of Individuals per Cross( 10 ),
		Set Random Seed( 12345 ),
		Threshold to Make Line Plots( 1000 ),
		Use Annotation Table(
			1,
			dtAnno,
			Marker Variables( :Marker ),
			Annotation Group( :Gene ),
			Annotation Position( :Linkage Position ),
			Go
		)
	)
);
```

**Code Explanation**:

1. Open data_table data
2. Open data_table data
3. Clear selection and row states.
4. Select individuals without parents.
5. Invert row selection and exclude.
6. Clear selection again.
7. Check if scriptable.
8. Run marker simulation.
9. Define marker column group.
10. Set predictor formulas.



## Marker Simulation using Select Rows
### Example 1
> **Summary**: Runs a Marker Simulation to predict disease status, utilizing 'Markers' column group and predictor formulas with 'Sex' as a cross factor.

<!-- Keywords: #MarkerSimulation, #PredictiveModeling, #JMPScriptingLanguage, #DataAnalysis, #Biostatistics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Clear Select << Clear Row States;
dt << Select Rows( Index( 21, 1000 ) ) << Exclude;
test = Is Scriptable(
	dt << Marker Simulation(
		Marker( Column Group( "Markers" ) ),
		Predictor Formula(
			:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3, :Pred Formula Trait4, :"Probability( Disease Status=1 )"n
		),
		Cross( :Sex ),
		Unthreaded( 1 ),
		Ploidy( 2 ),
		Number of Generations( 2 ),
		Number of Individuals per Cross( 10 ),
		Set Random Seed( 12345 )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Clear selection and row states.
3. Exclude rows 21 to 1000.
4. Check if scriptable.
5. Run Marker Simulation.
6. Use "Markers" column group.
7. Define predictor formulas.
8. Include "Sex" as cross factor.
9. Set unthreaded to 1.
10. Set ploidy to 2.



### Example 2
> **Summary**: Runs the preparation and simulation of a marker-based genetic analysis, including data filtering, column creation, and random seed setting.

<!-- Keywords: #JMPScriptingLanguage, #MarkerSimulation, #GeneticAnalysis, #DataPreparation, #Scriptability -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Clear Select << Clear Row States;
dt << Select Rows( Index( 21, 1000 ) ) << Exclude;
dt << New Column( "SampleID", Character, "Nominal", Formula( Char( :Pedigree ) || Char( :Sample ) ) );
test = Is Scriptable(
	dt << Marker Simulation(
		Marker( Column Group( "Markers" ) ),
		Predictor Formula(
			:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3, :Pred Formula Trait4, :"Probability( Disease Status=1 )"n
		),
		Sample ID( :SampleID ),
		Cross( :Sex ),
		Unthreaded( 1 ),
		Ploidy( 2 ),
		Number of Generations( 2 ),
		Number of Individuals per Cross( 10 ),
		Set Random Seed( 12345 )
	)
);
```

**Code Explanation**:

1. Open table.
2. Clear selection.
3. Clear row states.
4. Select rows 21-1000.
5. Exclude selected rows.
6. Create new column "SampleID".
7. Combine pedigree and sample into "SampleID".
8. Check scriptability of Marker Simulation.
9. Run Marker Simulation with specified parameters.
10. Set random seed for reproducibility.



## Marker Simulation using Name
### Example 1
> **Summary**: Runs marker simulation with specified parameters to analyze genetic data, utilizing JMP's built-in functionality for marker simulation and data manipulation.

<!-- Keywords: #JMPScriptingLanguage, #MarkerSimulation, #DataManipulation, #GeneticAnalysis, #Simulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:Name( "Pred Formula Trait1" ) << Set Property( "Spec Limits", {LSL( 22.5 )} );
dt:Name( "Pred Formula Trait2" ) << Set Property( "Spec Limits", {USL( 25.5 )} );
dt:Name( "Probability( Disease Status=1 )" ) << Set Property( "Spec Limits", {USL( 0.3 )} );
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;
test = Is Scriptable(
	dt << Marker Simulation(
		Marker( Column Group( "Markers" ) ),
		Predictor Formula(
			:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3, :Pred Formula Trait4, :"Probability( Disease Status=1 )"n
		),
		Cross( :Sex ),
		Unthreaded( 1 ),
		Ploidy( 2 ),
		Estimate Diversity( 1 ),
		Number of Generations( 2 ),
		Number of Individuals per Cross( 10 ),
		Set Random Seed( 12345 ),
		Threshold to Make Line Plots( 1000 ), 
	)
);
```

**Code Explanation**:

1. Open data_table data
2. Set LSL for Pred Formula Trait1.
3. Set USL for Pred Formula Trait2.
4. Set USL for Probability(Disease Status=1).
5. Clear selection and row states.
6. Select first 100 rows with no parents.
7. Invert and exclude selected rows.
8. Clear selection.
9. Check if scriptable.
10. Run marker simulation with specified parameters.



### Example 2
> **Summary**: Sets up and simulates a marker-based genetic analysis, configuring specific trait limits and selecting relevant rows from a data table.

<!-- Keywords: #JMPScriptingLanguage, #MarkerSimulation, #GeneticAnalysis, #DataTableManagement, #ScriptabilityCheck -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:Name( "Pred Formula Trait1" ) << Set Property( "Spec Limits", {LSL( 22.5 )} );
dt:Name( "Pred Formula Trait2" ) << Set Property( "Spec Limits", {USL( 25.5 )} );
dt:Name( "Probability( Disease Status=1 )" ) << Set Property( "Spec Limits", {USL( 0.3 )} );
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;
test = Is Scriptable(
	dt << Marker Simulation(
		Marker( Column Group( "Markers" ) ),
		Predictor Formula(
			:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3, :Pred Formula Trait4, :"Probability( Disease Status=1 )"n
		),
		Cross( :Sex ),
		Unthreaded( 1 ),
		Ploidy( 2 ),
		Number of Generations( 1 ),
		Number of Individuals per Cross( 10 ),
		Set Random Seed( 12345 ),
		Threshold to Make Line Plots( 1000 ),
		Missing Marker Imputation Method( "Specified" ),
		Imputation Value( 0 )
	)
);
```

**Code Explanation**:

1. Open data_table data
2. Set LSL for Trait1.
3. Set USL for Trait2.
4. Set USL for Disease Status.
5. Clear all selections and row states.
6. Select rows with no parents and limit to 100.
7. Invert and exclude selected rows.
8. Clear all selections.
9. Check scriptability for marker simulation.
10. Run marker simulation with specified parameters.




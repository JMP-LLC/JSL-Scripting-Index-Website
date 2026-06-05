# Make Validation Column

### Example 1
> **Summary**: Creates a validation column in JMP, specifying training and validation set sizes, test set size, and validation column type.

<!-- Keywords: #JMPScriptingLanguage, #ValidationColumn, #DataTable, #MachineLearning, #DataScience -->

**Code**:
```jsl
dt = Open("data_table.jmp");
mvc = dt << Make Validation Column( Training Set( 0.75 ), Validation Set( 0.25 ), Test Set( 0 ), Validation Column Type( "Formula" ), Go );
oracle_validation = [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1
];
```

**Code Explanation**:

1. Open data table;
2. Create validation column.
3. Define training set size.
4. Define validation set size.
5. Set test set size.
6. Specify validation column type.
7. Execute validation creation.
8. Define oracle validation array.



### Example 2
> **Summary**: Creates a validation column in JMP, grouping data by gender and setting training, validation, and test sets to specific proportions.

<!-- Keywords: #JMPScriptingLanguage, #MakeValidationColumn, #DataTable, #GroupingColumns, #RandomSeed -->

**Code**:
```jsl
dt = Open("data_table.jmp");
mvc = dt << Make Validation Column(
	Grouping Columns( :Gender ),
	Training Set( 0.75 ),
	Validation Set( 0.15 ),
	Test Set( 0.10 ),
	Random Seed( 65498712 ),
	Go
);
oracle_validation = [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0,
0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1,
0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0,
0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1,
1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0,
0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1,
0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1,
0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1,
0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0,
0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0];
Close( dt, nosave );
Random Reset( 5648941253 );
```

**Code Explanation**:

1. Open table.
2. Create validation column.
3. Group by gender.
4. Set training set to 75%.
5. Set validation set to 15%.
6. Set test set to 10%.
7. Use random seed 65498712.
8. Execute validation creation.
9. Close table without saving.
10. Reset random seed.



### Example 3
> **Summary**: Creates a validation column in JMP, stratifying by height and grouping by age, with specified training, validation, and test set sizes.

<!-- Keywords: #JSLScriptingLanguage, #MakeValidationColumn, #StratificationColumns, #GroupingColumns, #RandomSeed -->

**Code**:
```jsl
dt = Open("data_table.jmp");
mvc = dt << Make Validation Column(
	Stratification Columns( :height ),
	Grouping Columns( :age ),
	Training Set( 0.75 ),
	Validation Set( 0.15 ),
	Test Set( 0.10 ),
	Random Seed( 65498712 ),
	Go
);
oracle_validation = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0
];
Close( dt, nosave );
Random Reset( 5648941253 );
```

**Code Explanation**:

1. Open data table;
2. Create validation column.
3. Stratify by height.
4. Group by age.
5. Set training size to 75%.
6. Set validation size to 15%.
7. Set test size to 10%.
8. Use random seed 65498712.
9. Close file without saving.
10. Reset random seed to 5648941253.



### Example 4
> **Summary**: Creates a validation column in JMP, grouping data by gender and allocating 75% for training, 15% for validation, and 10% for testing.

<!-- Keywords: #JMPScriptingLanguage, #ValidationColumn, #DataPreprocessing, #MachineLearning, #RandomSeed -->

**Code**:
```jsl
dt = Open("data_table.jmp");
mvc = dt << Make Validation Column(
	Grouping Columns( :Gender ),
	Training Set( 0.75 ),
	Validation Set( 0.15 ),
	Test Set( 0.10 ),
	Random Seed( 65498712 ),
	Go
);
oracle_validation = [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0,
0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1,
0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0,
0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1,
1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0,
0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1,
0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1,
0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1,
0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0,
0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0];
```

**Code Explanation**:

1. Open data table.
2. Create validation column.
3. Group by gender.
4. Allocate 75% training set.
5. Allocate 15% validation set.
6. Allocate 10% test set.
7. Set random seed.
8. Execute validation creation.
9. Define oracle validation array.
10. End script.



### Example 5
> **Summary**: Creates a validation column in JMP, stratified by height and grouped by age, with 75% training data, 15% validation data, and 10% test data.

<!-- Keywords: #JMPScriptingLanguage, #ValidationColumn, #Stratification, #Grouping, #DataPartitioning -->

**Code**:
```jsl
dt = Open("data_table.jmp");
mvc = dt << Make Validation Column(
	Stratification Columns( :height ),
	Grouping Columns( :age ),
	Training Set( 0.75 ),
	Validation Set( 0.15 ),
	Test Set( 0.10 ),
	Random Seed( 65498712 ),
	Go
);
oracle_validation = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0
];
```

**Code Explanation**:

1. Open data table;
2. Create validation column.
3. Stratify by height.
4. Group by age.
5. Allocate 75% training data.
6. Allocate 15% validation data.
7. Allocate 10% test data.
8. Set random seed 65498712.
9. Execute validation creation.
10. Define oracle validation array.



### Example 6
> **Summary**: Creates two validation columns in a JMP data table, utilizing cutpoints and batch IDs to allocate training, validation, and testing sets.

<!-- Keywords: #JMPScriptingLanguage, #ValidationColumns, #DataTableManagement, #MachineLearning, #StatisticalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Make Validation Column(
	Cutpoint Column( :weight ),
	Cutpoint Batch ID( :sex ),
	Training Set( 0.6 ),
	Validation Set( 0.2 ),
	Test Set( 0.2 ),
	Go
);
dt << New Column( "Batch 2", Numeric, "Nominal", Formula( If( :sex == "F", 1, 2 ) ) );
dt << Make Validation Column(
	Cutpoint Column( :weight ),
	Cutpoint Batch ID( :Batch 2 ),
	Training Set( 0.6 ),
	Validation Set( 0.2 ),
	Test Set( 0.2 ),
	Go
);
oracleVal = dt[0, "Validation 2"];
Close( dt, nosave );
	
Preferences( Enable Advanced Linear Algebra Routines( 0 ) );
```

**Code Explanation**:

1. Open data table.
2. Create first validation column.
3. Use weight for cutpoints.
4. Use sex for batch ID.
5. Allocate 60% for training.
6. Allocate 20% for validation.
7. Allocate 20% for testing.
8. Create new column "Batch 2".
9. Define formula for "Batch 2".
10. Create second validation column.
11. Use weight for cutpoints.
12. Use "Batch 2" for batch ID.
13. Allocate 60% for training.
14. Allocate 20% for validation.
15. Allocate 20% for testing.
16. Retrieve validation set.
17. Close data table without saving.
18. Disable advanced linear algebra routines.



### Example 7
> **Summary**: Creates a validation column for stratification by weight, utilizing the Make Validation Column and Column Switcher features in JMP.

<!-- Keywords: #JMPScriptingLanguage, #MakeValidationColumn, #ColumnSwitcher, #DataTable, #WeightStratification -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Make Validation Column( Stratification Columns( :weight ) );
ColumnSwitcherObject = obj << Column Switcher( :weight, {:height, :weight} );
obj = Window( "data_table - Make Validation Column by weight" );
```

**Code Explanation**:

1. Open table.
2. Create validation column.
3. Set stratification columns.
4. Initialize column switcher object.
5. Switch columns for analysis.
6. Access window title.



### Example 8
> **Summary**: Creates multiple validation columns in a JMP data table, allowing for various training and testing scenarios to be explored.

<!-- Keywords: #JSLScriptingLanguage, #DataTableValidation, #TrainingAndTesting, #CutpointColumn, #MakeValidationColumn -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Make Validation Column(
	Cutpoint Column( :height ),
	Training Set( 0.75 ),
	Validation Set( 0 ),
	Test Set( 0.25 ),
	New Column Name( "Validation - Only Training+Test" ),
	Go
);
dt << Make Validation Column(
	Cutpoint Column( :height ),
	Training Set( 0.75 ),
	Validation Set( 0.25 ),
	Test Set( 0 ),
	New Column Name( "Validation - Only Training+Validation" ),
	Go
);
dt << Make Validation Column(
	Cutpoint Column( :height ),
	Training Set( 0 ),
	Validation Set( 0.75 ),
	Test Set( 0.25 ),
	New Column Name( "Validation - Only Validation+Test" ),
	Go
);
dt << Make Validation Column(
	Cutpoint Column( :height ),
	Training Set( 1 ),
	Validation Set( 0 ),
	Test Set( 0 ),
	New Column Name( "Validation - Only Training" ),
	Go
);
dt << Make Validation Column(
	Cutpoint Column( :height ),
	Training Set( 0 ),
	Validation Set( 1 ),
	Test Set( 0 ),
	New Column Name( "Validation - Only Validation" ),
	Go
);
dt << Make Validation Column(
	Cutpoint Column( :height ),
	Training Set( 0 ),
	Validation Set( 0 ),
	Test Set( 1 ),
	New Column Name( "Validation - Only Test" ),
	Go
);
dt << Make Validation Column(
	Cutpoint Column( :height ),
	Training Set( 0.2 ),
	Validation Set( 0.3 ),
	Test Set( 0.5 ),
	New Column Name( "Validation - All" ),
	Go
);
```

**Code Explanation**:

1. Open data table;
2. Create validation column.
3. Set height as cutpoint.
4. Allocate 75% for training.
5. Allocate 0% for validation.
6. Allocate 25% for testing.
7. Name column "Validation - Only Training+Test".
8. Create another validation column.
9. Allocate 75% for training.
10. Allocate 25% for validation.
11. Allocate 0% for testing.
12. Name column "Validation - Only Training+Validation".
13. Create another validation column.
14. Allocate 0% for training.
15. Allocate 75% for validation.
16. Allocate 25% for testing.
17. Name column "Validation - Only Validation+Test".
18. Create another validation column.
19. Allocate 100% for training.
20. Allocate 0% for validation.
21. Allocate 0% for testing.
22. Name column "Validation - Only Training".
23. Create another validation column.
24. Allocate 0% for training.
25. Allocate 100% for validation.
26. Allocate 0% for testing.
27. Name column "Validation - Only Validation".
28. Create another validation column.
29. Allocate 0% for training.
30. Allocate 0% for validation.
31. Allocate 100% for testing.
32. Name column "Validation - Only Test".
33. Create another validation column.
34. Allocate 20% for training.
35. Allocate 30% for validation.
36. Allocate 50% for testing.
37. Name column "Validation - All".



### Example 9
> **Summary**: Creates validation columns with varying training, validation, and test set allocations for a data table.

<!-- Keywords: #JMPScriptingLanguage, #DataValidation, #MachineLearning, #DataPreprocessing, #JSL -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Make Validation Column(
	Cutpoint Column( :height ),
	Cutpoint Batch ID( :age ),
	Training Set( 0.75 ),
	Validation Set( 0 ),
	Test Set( 0.25 ),
	New Column Name( "Validation - Only Training+Test" ),
	Go
);
dt << Make Validation Column(
	Cutpoint Column( :height ),
	Cutpoint Batch ID( :age ),
	Training Set( 0.75 ),
	Validation Set( 0.25 ),
	Test Set( 0 ),
	New Column Name( "Validation - Only Training+Validation" ),
	Go
);
dt << Make Validation Column(
	Cutpoint Column( :height ),
	Cutpoint Batch ID( :age ),
	Training Set( 0 ),
	Validation Set( 0.75 ),
	Test Set( 0.25 ),
	New Column Name( "Validation - Only Validation+Test" ),
	Go
);
dt << Make Validation Column(
	Cutpoint Column( :height ),
	Cutpoint Batch ID( :age ),
	Training Set( 1 ),
	Validation Set( 0 ),
	Test Set( 0 ),
	New Column Name( "Validation - Only Training" ),
	Go
);
dt << Make Validation Column(
	Cutpoint Column( :height ),
	Cutpoint Batch ID( :age ),
	Training Set( 0 ),
	Validation Set( 1 ),
	Test Set( 0 ),
	New Column Name( "Validation - Only Validation" ),
	Go
);
dt << Make Validation Column(
	Cutpoint Column( :height ),
	Cutpoint Batch ID( :age ),
	Training Set( 0 ),
	Validation Set( 0 ),
	Test Set( 1 ),
	New Column Name( "Validation - Only Test" ),
	Go
);
dt << Make Validation Column(
	Cutpoint Column( :height ),
	Cutpoint Batch ID( :age ),
	Training Set( 0.2 ),
	Validation Set( 0.3 ),
	Test Set( 0.5 ),
	New Column Name( "Validation - All" ),
	Go
);
```

**Code Explanation**:

1. Open data table;
2. Create validation column with height cutpoint.
3. Use age for batch ID.
4. Allocate 75% for training.
5. Allocate 0% for validation.
6. Allocate 25% for testing.
7. Name new column "Validation - Only Training+Test".
8. Repeat steps 2-7 for different allocations.
9. Allocate 75% for training.
10. Allocate 25% for validation.
11. Allocate 0% for testing.
12. Name new column "Validation - Only Training+Validation".
13. Allocate 0% for training.
14. Allocate 75% for validation.
15. Allocate 25% for testing.
16. Name new column "Validation - Only Validation+Test".
17. Allocate 100% for training.
18. Allocate 0% for validation.
19. Allocate 0% for testing.
20. Name new column "Validation - Only Training".
21. Allocate 0% for training.
22. Allocate 100% for validation.
23. Allocate 0% for testing.
24. Name new column "Validation - Only Validation".
25. Allocate 0% for training.
26. Allocate 0% for validation.
27. Allocate 100% for testing.
28. Name new column "Validation - Only Test".
29. Allocate 20% for training.
30. Allocate 30% for validation.
31. Allocate 50% for testing.
32. Name new column "Validation - All".



### Example 10
> **Summary**: Creates multiple validation columns in a JMP data table, allowing for various training and test set combinations to be evaluated.

<!-- Keywords: #JMPScriptingLanguage, #ValidationColumn, #DataTable, #TrainingSet, #TestSet -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Make Validation Column(
	Cutpoint Column( :height ),
	Training Set( 0.75 ),
	Validation Set( 0 ),
	Test Set( 0.25 ),
	New Column Name( "Validation - Only Training+Test" ),
	Validation Column Type( "Formula" ),
	Go
);
dt << Make Validation Column(
	Cutpoint Column( :height ),
	Training Set( 0.75 ),
	Validation Set( 0.25 ),
	Test Set( 0 ),
	New Column Name( "Validation - Only Training+Validation" ),
	Validation Column Type( "Formula" ),
	Go
);
dt << Make Validation Column(
	Cutpoint Column( :height ),
	Training Set( 0 ),
	Validation Set( 0.75 ),
	Test Set( 0.25 ),
	New Column Name( "Validation - Only Validation+Test" ),
	Validation Column Type( "Formula" ),
	Go
);
dt << Make Validation Column(
	Cutpoint Column( :height ),
	Training Set( 1 ),
	Validation Set( 0 ),
	Test Set( 0 ),
	New Column Name( "Validation - Only Training" ),
	Validation Column Type( "Formula" ),
	Go
);
dt << Make Validation Column(
	Cutpoint Column( :height ),
	Training Set( 0 ),
	Validation Set( 1 ),
	Test Set( 0 ),
	New Column Name( "Validation - Only Validation" ),
	Validation Column Type( "Formula" ),
	Go
);
dt << Make Validation Column(
	Cutpoint Column( :height ),
	Training Set( 0 ),
	Validation Set( 0 ),
	Test Set( 1 ),
	New Column Name( "Validation - Only Test" ),
	Validation Column Type( "Formula" ),
	Go
);
dt << Make Validation Column(
	Cutpoint Column( :height ),
	Training Set( 0.2 ),
	Validation Set( 0.3 ),
	Test Set( 0.5 ),
	New Column Name( "Validation - All" ),
	Validation Column Type( "Formula" ),
	Go
);
```

**Code Explanation**:

1. Open data table;
2. Create validation column.
3. Set training set to 75%.
4. Set test set to 25%.
5. Name column "Validation - Only Training+Test".
6. Create another validation column.
7. Set training set to 75%.
8. Set validation set to 25%.
9. Name column "Validation - Only Training+Validation".
10. Create additional validation columns for different splits and names.



### Example 11
> **Summary**: Creates multiple validation columns in a JMP data table, utilizing cutpoints and batch IDs to define training, validation, and test sets.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManipulation, #ValidationColumns, #CutpointColumn, #BatchID -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Make Validation Column(
	Cutpoint Column( :height ),
	Cutpoint Batch ID( :age ),
	Training Set( 0.75 ),
	Validation Set( 0 ),
	Test Set( 0.25 ),
	New Column Name( "Validation - Only Training+Test" ),
	Validation Column Type( "Formula" ),
	Go
);
dt << Make Validation Column(
	Cutpoint Column( :height ),
	Cutpoint Batch ID( :age ),
	Training Set( 0.75 ),
	Validation Set( 0.25 ),
	Test Set( 0 ),
	New Column Name( "Validation - Only Training+Validation" ),
	Validation Column Type( "Formula" ),
	Go
);
dt << Make Validation Column(
	Cutpoint Column( :height ),
	Cutpoint Batch ID( :age ),
	Training Set( 0 ),
	Validation Set( 0.75 ),
	Test Set( 0.25 ),
	New Column Name( "Validation - Only Validation+Test" ),
	Validation Column Type( "Formula" ),
	Go
);
dt << Make Validation Column(
	Cutpoint Column( :height ),
	Cutpoint Batch ID( :age ),
	Training Set( 1 ),
	Validation Set( 0 ),
	Test Set( 0 ),
	New Column Name( "Validation - Only Training" ),
	Validation Column Type( "Formula" ),
	Go
);
dt << Make Validation Column(
	Cutpoint Column( :height ),
	Cutpoint Batch ID( :age ),
	Training Set( 0 ),
	Validation Set( 1 ),
	Test Set( 0 ),
	New Column Name( "Validation - Only Validation" ),
	Validation Column Type( "Formula" ),
	Go
);
dt << Make Validation Column(
	Cutpoint Column( :height ),
	Cutpoint Batch ID( :age ),
	Training Set( 0 ),
	Validation Set( 0 ),
	Test Set( 1 ),
	New Column Name( "Validation - Only Test" ),
	Validation Column Type( "Formula" ),
	Go
);
dt << Make Validation Column(
	Cutpoint Column( :height ),
	Cutpoint Batch ID( :age ),
	Training Set( 0.2 ),
	Validation Set( 0.3 ),
	Test Set( 0.5 ),
	New Column Name( "Validation - All" ),
	Validation Column Type( "Formula" ),
	Go
);
```

**Code Explanation**:

1. Open data table;
2. Create validation column.
3. Use height for cutpoints.
4. Use age for batch ID.
5. Set training set to 75%.
6. Set test set to 25%.
7. Name column "Validation - Only Training+Test".
8. Repeat steps 2-7 for other validation scenarios.
9. Create all specified validation columns.
10. Save changes.



### Example 12
> **Summary**: Creates validation columns in a JMP data table, utilizing various cutpoints and training sets to determine optimal values.

<!-- Keywords: #JMPScriptingLanguage, #DataTableValidation, #CutpointAnalysis, #TrainingSets, #ValidationColumns -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt[1 :: 40, "weight"] = .;
dt << Make Validation Column( Cutpoint Column( :weight ), Go );
dt << Make Validation Column( Cutpoint Column( :weight ), Cutpoint Batch ID( :age ), New Column Name( "Validation by Batch" ), Go );
dt << Make Validation Column(
	Cutpoint Column( :weight ),
	Training Set( 18 ),
	Validation Set( 7 ),
	Test Set( 4 ),
	New Column Name( "Number of Rows" ),
	Determine cutpoints using( "Numbers of Rows" ),
	Go
);
dt << Make Validation Column(
	Cutpoint Column( :weight ),
	Training Set( 64 ),
	Validation Set( 119 ),
	Test Set( 142.65 ),
	Determine cutpoints using( "Fixed Time or Date" ),
	New Column Name( "Fixed Time or Date" ),
	Go
);
dt << Make Validation Column(
	Cutpoint Column( :weight ),
	Training Set( 41.09 ),
	Validation Set( 39.91 ),
	Test Set( 27 ),
	Determine cutpoints using( "Elapsed Time" ),
	New Column Name( "Elapsed Time" ),
	Go
);
```

**Code Explanation**:

1. Open data table;
2. Set first 40 rows' weight to missing.
3. Create validation column using weight.
4. Create "Validation by Batch" column.
5. Create "Number of Rows" validation column.
6. Create "Fixed Time or Date" validation column.
7. Create "Elapsed Time" validation column.



### Example 13
> **Summary**: Creates a validation column in a JMP data table, defining cutpoints for time and batch ID, and assigning extra rows to validation.

<!-- Keywords: #JMPScriptingLanguage, #ValidationColumn, #CutpointDefinition, #DataTableManagement, #Automation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Make Validation Column(
	Cutpoint Column( :Time ),
	Cutpoint Batch ID( :Series ),
	Training Set( 26 ),
	Validation Set( 3 ),
	Test Set( 7 ),
	Validation Column Type( "Formula" ),
	Determine cutpoints using( "Numbers of Rows" ),
	Assign Extra Rows( "To Validation" ),
	Go
);
dtSummary = dt << Summary( Group( :Series, :Validation ), Freq( "None" ), Weight( "None" ) );
```

**Code Explanation**:

1. Open data table.
2. Create validation column.
3. Define cutpoint column.
4. Define cutpoint batch ID.
5. Set training size.
6. Set validation size.
7. Set test size.
8. Use formula for validation.
9. Determine cutpoints by rows.
10. Assign extra rows to validation.



### Example 14
> **Summary**: Creates a validation column in a JMP data table, defining cutpoints for time and batch ID, and specifying training, validation, and test set sizes.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #ValidationColumn, #CutpointDefinition, #SetSizeConfiguration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Make Validation Column(
	Cutpoint Column( :Time ),
	Cutpoint Batch ID( :Series ),
	Training Set( 20 ),
	Validation Set( 10 ),
	Test Set( 6 ),
	Validation Column Type( "Formula" ),
	Determine cutpoints using( "Numbers of Rows" ),
	Assign Extra Rows( "To Training" ),
	Go
);
dtSummary = dt << Summary( Group( :Series, :Validation ), Freq( "None" ), Weight( "None" ) );
```

**Code Explanation**:

1. Open data table.
2. Create validation column.
3. Set cutpoint column.
4. Set cutpoint batch ID.
5. Define training set size.
6. Define validation set size.
7. Define test set size.
8. Set validation column type.
9. Use row numbers for cutpoints.
10. Assign extra rows to training.



### Example 15
> **Summary**: Creates a validation column object with specified cutpoints, training and test sets, and validation column type, facilitating data analysis in JMP.

<!-- Keywords: #JMPScriptingLanguage, #ValidationColumn, #DataAnalysis, #CutpointDefinition, #TrainingandTestSets -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Make Validation Column(
	Cutpoint Column( :Time ),
	Cutpoint Batch ID( :Series ),
	Training Set( 18 ),
	Validation Set( 9 ),
	Test Set( 9 ),
	Validation Column Type( "Formula" ),
	Determine cutpoints using( "Numbers of Rows" ),
	Assign Extra Rows( "To Test" ),
	Go
);
dtSummary = dt << Summary( Group( :Series, :Validation ), Freq( "None" ), Weight( "None" ) );
```

**Code Explanation**:

1. Open data table.
2. Create validation column object.
3. Define cutpoint column.
4. Define cutpoint batch ID.
5. Set training set size.
6. Set validation set size.
7. Set test set size.
8. Specify validation column type.
9. Use numbers of rows for cutpoints.
10. Assign extra rows to test set.



### Example 16
> **Summary**: Creates a validation column in a JMP data table, defining cutpoints for time and batch ID, and assigning extra rows to validation.

<!-- Keywords: #JMPScriptingLanguage, #ValidationColumn, #DataTable, #CutpointDefinition, #Automation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Make Validation Column(
	Cutpoint Column( :Time ),
	Cutpoint Batch ID( :Series ),
	Training Set( 26 ),
	Validation Set( 3 ),
	Test Set( 7 ),
	Validation Column Type( "Fixed" ),
	Determine cutpoints using( "Numbers of Rows" ),
	Assign Extra Rows( "To Validation" ),
	Go
);
dtSummary = dt << Summary( Group( :Series, :Validation ), Freq( "None" ), Weight( "None" ) );
```

**Code Explanation**:

1. Open data table.
2. Create validation column.
3. Define cutpoint column.
4. Define cutpoint batch ID.
5. Set training size.
6. Set validation size.
7. Set test size.
8. Fix validation column type.
9. Use row numbers for cutpoints.
10. Assign extra rows to validation.



### Example 17
> **Summary**: Creates a validation column in a JMP data table, defining cutpoints for Time and Series, and assigning extra rows to training.

<!-- Keywords: #JMPScriptingLanguage, #ValidationColumn, #DataTableManipulation, #CutpointDefinition, #MachineLearning -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Make Validation Column(
	Cutpoint Column( :Time ),
	Cutpoint Batch ID( :Series ),
	Training Set( 20 ),
	Validation Set( 10 ),
	Test Set( 6 ),
	Validation Column Type( "Fixed" ),
	Determine cutpoints using( "Numbers of Rows" ),
	Assign Extra Rows( "To Training" ),
	Go
);
dtSummary = dt << Summary( Group( :Series, :Validation ), Freq( "None" ), Weight( "None" ) );
```

**Code Explanation**:

1. Open data table;
2. Create validation column.
3. Define cutpoint column.
4. Define cutpoint batch ID.
5. Set training size.
6. Set validation size.
7. Set test size.
8. Fix validation column type.
9. Use row numbers for cutpoints.
10. Assign extra rows to training.



### Example 18
> **Summary**: Creates a validation column in a JMP data table, defining cutpoints for time and batch ID, and assigning extra rows to the test set.

<!-- Keywords: #JMPScriptingLanguage, #ValidationColumn, #DataTable, #CutpointDefinition, #TestSetAssignment -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Make Validation Column(
	Cutpoint Column( :Time ),
	Cutpoint Batch ID( :Series ),
	Training Set( 18 ),
	Validation Set( 9 ),
	Test Set( 9 ),
	Validation Column Type( "Fixed" ),
	Determine cutpoints using( "Numbers of Rows" ),
	Assign Extra Rows( "To Test" ),
	Go
);
dtSummary = dt << Summary( Group( :Series, :Validation ), Freq( "None" ), Weight( "None" ) );
```

**Code Explanation**:

1. Open data table.
2. Create validation column.
3. Define time cutpoint column.
4. Define series batch ID.
5. Set training set size.
6. Set validation set size.
7. Set test set size.
8. Fix validation column type.
9. Use row numbers for cutpoints.
10. Assign extra rows to test set.



### Example 19
> **Summary**: Creates and configures validation columns in a JMP data table, including proportion, NRows, and fixed time/date validation, as well as elapsed time calculation.

<!-- Keywords: #JMPScriptingLanguage, #ValidationColumns, #DataTableManagement, #ElapsedTimeCalculation, #Automation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Make Validation Column(
	Cutpoint Column( :Date ),
	Training Set( 0.5 ),
	Validation Set( 0.25 ),
	Test Set( 0.25 ),
	New Column Name( "Proportion Validation" ),
	Validation Column Type( "Formula" ),
	Go
);
dt << Make Validation Column(
	Cutpoint Column( :Date ),
	Training Set( 48 ),
	Validation Set( 24 ),
	Test Set( 24 ),
	New Column Name( "NRows Validation" ),
	Validation Column Type( "Formula" ),
	Determine cutpoints using( "Numbers of Rows" ),
	Go
);
obj = dt << Make Validation Column(
	Cutpoint Column( :Date ),
	Training Set( 2524608000 ),
	Validation Set( 2644070000 ),
	Test Set( 2714660000 ),
	New Column Name( "Fixed Time/Date Validation" ),
	Validation Column Type( "Formula" ),
	Determine cutpoints using( "Fixed Time or Date" ),
	Go
);
obj = dt << Make Validation Column(
	Cutpoint Column( :Date ),
	Training Set( 97740000 ),
	Validation Set( 70590000 ),
	Test Set( 81452400 ),
	New Column Name( "Elapsed Time Validation" ),
	Validation Column Type( "Formula" ),
	Determine cutpoints using( "Elapsed Time" ),
	Go
);
dt << New Column( "Elapsed Since Time 1", Numeric, "Continuous", Formula( :Date - :Date[1] ) );
trainingCutoffRow = Loc( dt[0, "Elapsed Since Time 1"] < 97740000 );
maxTrainCut = Max( trainingCutoffRow );
Eval(
	Substitute(
			Expr(
				dt << New Column( "Elapsed Since Time 2", Numeric, "Continuous", Formula( If( Row() > _a, :Date - :Date[_b] ) ) )
			),
		Expr( _a ), maxTrainCut,
		Expr( _b ), maxTrainCut + 1
	)
);
validationCutoffRow = Loc( dt[0, "Elapsed Since Time 2"] < 70590000 );
```

**Code Explanation**:

1. Open data table;
2. Create proportion validation column.
3. Create NRows validation column.
4. Create fixed time/date validation column.
5. Create elapsed time validation column.
6. Add elapsed since time 1 column.
7. Identify training cutoff row.
8. Find maximum training cutoff.
9. Add elapsed since time 2 column.
10. Identify validation cutoff row.



### Example 20
> **Summary**: Creates a validation column in a JMP data table, specifying cutpoint columns and batch IDs for efficient model screening.

<!-- Keywords: #JMPScriptingLanguage, #DataTableOperations, #ModelScreening, #CutpointColumn, #BatchID -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Make Validation Column( Cutpoint Column( :Time ), Cutpoint Batch ID( :Series ) );
```

**Code Explanation**:

1. Open data table.
2. Create validation column.
3. Set cutpoint column.
4. Set cutpoint batch ID.



### Example 21
> **Summary**: Creates a validation column in a JMP data table, stratified by height and grouped by age, with 5 folds for fixed validation type.

<!-- Keywords: #JMPValidationColumn, #DataTableOperations, #Stratification, #Grouping, #FixedValidation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Make Validation Column(
	Y( :weight ),
	Stratification Columns( :height ),
	Grouping Columns( :age ),
	Number of Folds( 5 ),
	Validation Column Type( "Fixed" ),
	Random Seed( 123 ),
	Go
);
```

**Code Explanation**:

1. Open data table;
2. Create validation column.
3. Set response variable to weight.
4. Use height for stratification.
5. Group by age.
6. Define 5 folds.
7. Use fixed validation type.
8. Set random seed to 123.
9. Execute validation creation.



### Example 22
> **Summary**: Creates a validation column for data table analysis, utilizing stratification by height and grouping by age and sex.

<!-- Keywords: #JSLScriptingLanguage, #DataTableAnalysis, #ValidationColumn, #Stratification, #Grouping -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Make Validation Column(
	Y( :weight ),
	Stratification Columns( :height ),
	Grouping Columns( :age, :sex ),
	Number of Folds( 5 ),
	Validation Column Type( "Formula" ),
	Random Seed( 123 ),
	Go
);
```

**Code Explanation**:

1. Open data table;
2. Create validation column.
3. Set response variable to weight.
4. Use height for stratification.
5. Group by age and sex.
6. Specify 5 folds.
7. Use formula for validation type.
8. Set random seed to 123.
9. Execute validation column creation.



### Example 23
> **Summary**: Creates a validation column with cutpoints based on weight and batch ID, allocating 60% to training set, 20% to validation set, and 20% to test set.

<!-- Keywords: #JSL, #ValidationColumn, #DataTable, #Cutpoint, #BatchID -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Make Validation Column(
	Cutpoint Column( :weight ),
	Cutpoint Batch ID( :sex ),
	Training Set( 0.6 ),
	Validation Set( 0.2 ),
	Test Set( 0.2 ),
	Go
);
dt << New Column( "Batch 2", Numeric, "Nominal", Formula( If( :sex == "F", 1, 2 ) ) );
dt << Make Validation Column(
	Cutpoint Column( :weight ),
	Cutpoint Batch ID( :Batch 2 ),
	Training Set( 0.6 ),
	Validation Set( 0.2 ),
	Test Set( 0.2 ),
	Go
);
oracleVal = dt[0, "Validation 2"];
```

**Code Explanation**:

1. Open data table.
2. Create first validation column.
3. Use weight for cutpoint.
4. Use sex for batch ID.
5. Allocate 60% to training set.
6. Allocate 20% to validation set.
7. Allocate 20% to test set.
8. Generate validation column.
9. Add new "Batch 2" column.
10. Define formula for "Batch 2".



### Example 24
> **Summary**: Process of creating a validation column with stratification and grouping, selecting rows with missing values, and identifying non-missing value rows in a JMP data table.

<!-- Keywords: #JMPScriptingLanguage, #ValidationColumn, #Stratification, #Grouping, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Make Validation Column( Y( :X, :Y ), Stratification Columns( :OZONE, :CO, :SO2, :NO, :PM10 ), Number of Folds( 6 ), Go );
missingLoc = dt << Clear Select << Select Where(
	Is Missing( :OZONE ) | Is Missing( :CO ) | Is Missing( :SO2 ) | Is Missing( :NO ) | Is Missing( :PM10 )
) << Get Selected Rows;
nonMissingLoc = dt << Invert Row Selection << Get Selected Rows;
dt[Random Index( 52, 10 ), "Region"] = "";
obj = dt << Make Validation Column( Y( :X, :Y ), Grouping Columns( :Region ), Number of Folds( 5 ), Go );
missingLoc = dt << Clear Select << Select Where( Is Missing( :Region ) ) << Get Selected Rows;
nonMissingLoc = dt << Invert Row Selection << Get Selected Rows;
```

**Code Explanation**:

1. Open data table;
2. Create validation column with stratification.
3. Select rows with missing values.
4. Identify non-missing value rows.
5. Randomly select 10 rows for Region.
6. Set selected Region values to empty.
7. Create validation column with Region grouping.
8. Select rows with missing Region.
9. Identify non-missing Region rows.



## Make Validation Column using Collapse Whitespace
### Example 1
> **Summary**: Creates a validation column in a data table, grouping by height and allocating training, validation, and testing sets with specified proportions, while capturing log output.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #ValidationColumn, #RandomSeed, #LogCapture -->

**Code**:
```jsl
dt = Open("data_table.jmp");
lc = Collapse Whitespace(
	Log Capture(
		mvc = dt << Make Validation Column(
			Grouping Columns( :height ),
			Training Set( 0.75 ),
			Validation Set( 0.15 ),
			Test Set( 0.10 ),
			Random Seed( 65498712 )
		)
	)
);
Close( dt, nosave );
Random Reset( 123456789 );
```

**Code Explanation**:

1. Open data table;
2. Create validation column.
3. Group by height.
4. Allocate 75% for training.
5. Allocate 15% for validation.
6. Allocate 10% for testing.
7. Set random seed 65498712.
8. Capture log output.
9. Close dataset without saving.
10. Reset random seed to 123456789.



### Example 2
> **Summary**: Creates a validation column, grouping data by height, and allocating training, validation, and test sets with a specified random seed, while capturing log output and collapsing whitespace.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #ValidationColumn, #RandomSeed, #LogCapture -->

**Code**:
```jsl
dt = Open("data_table.jmp");
lc = Collapse Whitespace(
	Log Capture(
		mvc = dt << Make Validation Column(
			Grouping Columns( :height ),
			Training Set( 0.75 ),
			Validation Set( 0.15 ),
			Test Set( 0.10 ),
			Random Seed( 65498712 )
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create validation column.
3. Group by height.
4. Allocate 75% training set.
5. Allocate 15% validation set.
6. Allocate 10% test set.
7. Set random seed to 65498712.
8. Capture log output.
9. Collapse whitespace in log.
10. Assign result to lc variable.



### Example 3
> **Summary**: Process of opening a data table, retrieving all columns as matrices, capturing log output, creating a validation column with sex as the cutpoint, and collapsing whitespace in the log.

<!-- Keywords: #JSLScripting, #DataTableOperations, #ValidationColumnCreation, #LogOutputManagement, #MatrixRetrieval -->

**Code**:
```jsl
dt = Open("data_table.jmp");
x = dt << Get all Columns as Matrix;
lc = Collapse Whitespace( Log Capture( obj = dt << Make Validation Column( Cutpoint Column( :sex ), Go ) ) );
x2 = dt << Get all Columns as Matrix;
```

**Code Explanation**:

1. Open data table;
2. Retrieve all columns as matrix.
3. Capture log output.
4. Create validation column.
5. Use sex column as cutpoint.
6. Execute validation creation.
7. Collapse whitespace in log.
8. Retrieve all columns again as matrix.



### Example 4
> **Summary**: Runs data table processing by opening a file, retrieving columns as matrices, creating a validation column with cutpoints and batch IDs, and collapsing whitespace in log capture.

<!-- Keywords: #JSLScriptingLanguage, #DataTableProcessing, #ValidationColumn, #CutpointColumn, #BatchID -->

**Code**:
```jsl
dt = Open("data_table.jmp");
x = dt << Get all Columns as Matrix;
lc = Collapse Whitespace( Log Capture( obj = dt << Make Validation Column( Cutpoint Column( :sex ), Cutpoint Batch ID( :age ), Go ) ) );
x2 = dt << Get all Columns as Matrix;
```

**Code Explanation**:

1. Open data table.
2. Retrieve all columns as matrix.
3. Log capture starts.
4. Create validation column.
5. Use sex for cutpoints.
6. Use age for batch IDs.
7. Log capture ends.
8. Collapse whitespace in log.
9. Retrieve all columns as matrix again.
10. Store result in lc.



### Example 5
> **Summary**: Creates a validation column in a data table, utilizing Log Capture and Cutpoint Column to partition the data based on the sex variable.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #ValidationColumn, #LogCapture, #CutpointColumn -->

**Code**:
```jsl
dt = Open("data_table.jmp");
lc = Collapse Whitespace(
	Log Capture(
		dt << Make Validation Column(
			Cutpoint Column( :sex ),
			Training Set( 0.34 ),
			Validation Set( 0.33 ),
			Test Set( 0.33 ),
			Validation Column Type( "Fixed" ),
			Random Seed( 1234 ),
			Go
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Log capture begins.
3. Create validation column.
4. Use sex column for cutpoints.
5. Set training set to 34%.
6. Set validation set to 33%.
7. Set test set to 33%.
8. Fix validation column type.
9. Set random seed to 1234.
10. Execute validation creation.



## Make Validation Column using Log Capture
### Example 1
> **Summary**: Creates a validation column in JMP, utilizing Make Validation Column and Log Capture to set training, validation, and test sets, while grouping randomly by height and setting a random seed.

<!-- Keywords: #JMPScriptingLanguage, #MakeValidationColumn, #LogCapture, #RandomGrouping, #DataPreprocessing -->

**Code**:
```jsl
dt = Open("data_table.jmp");
lc = Log Capture(
	mvc = dt << Make Validation Column(
		Training Set( 0.75 ),
		Validation Set( 0.15 ),
		Test Set( 0.10 ),
		Grouped Random( :height ),
		Random Seed( 65498712 )
	)
);
oracle_validation = [0, 0, 0, 2, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 2, 0, 2, 0, 1, 0, 0, 0, 0
];
```

**Code Explanation**:

1. Open data table;
2. Start log capture.
3. Create validation column.
4. Set training set to 75%.
5. Set validation set to 15%.
6. Set test set to 10%.
7. Group randomly by height.
8. Set random seed to 65498712.
9. End log capture.
10. Define oracle validation array.



### Example 2
> **Summary**: Creates a validation column in a data table, setting training, validation, and test set sizes, and using the sex column as a cutpoint.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #ValidationColumn, #SetSizeConfiguration, #CutpointSelection -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Log Capture( dt << Make Validation Column( Training Set( 0.34 ), Validation Set( 0.33 ), Test Set( 0.33 ), Cutpoint( :sex ) ) );
```

**Code Explanation**:

1. Open data table.
2. Create validation column.
3. Set training set size.
4. Set validation set size.
5. Set test set size.
6. Use sex column for cutpoint.



### Example 3
> **Summary**: Creates a validation column in a data table, defining training, validation, and test sets with specific proportions and using height as the cutpoint.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #ValidationColumn, #TrainingSet, #Cutpoint -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Log Capture( dt << Make Validation Column( Training Set( 0.34 ), Validation Set( 0.33 ), Test Set( 0.33 ), Cutpoint( :height ) ) );
```

**Code Explanation**:

1. Open data table;
2. Create validation column.
3. Define training set as 34%.
4. Define validation set as 33%.
5. Define test set as 33%.
6. Use height for cutpoint.



### Example 4
> **Summary**: Creates a validation column in JMP, utilizing cutpoints from the 'height' variable and allocating specific proportions for training, validation, and testing sets.

<!-- Keywords: #JMPScriptingLanguage, #ValidationColumn, #DataPreprocessing, #RandomSeed, #LogCapture -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Log Capture(
	dt << Make Validation Column(
		Cutpoint Column( :height ),
		Training Set( 0.34 ),
		Validation Set( 0.33 ),
		Test Set( 0.33 ),
		Validation Column Type( "Fixed" ),
		Random Seed( 1234 ),
		Go
	)
);
```

**Code Explanation**:

1. Open data table;
2. Start log capture.
3. Create validation column.
4. Use "height" for cutpoints.
5. Allocate 34% for training.
6. Allocate 33% for validation.
7. Allocate 33% for testing.
8. Set validation type to fixed.
9. Use seed 1234 for randomness.
10. Execute validation creation.



## Column 
### Example 1
> **Summary**: Runs the setup for a multivariate correlations analysis with mahalanobis distances by opening a data table, setting column modeling type, capturing log output, and defining training, validation, and test sets.

<!-- Keywords: #JSL, #MultivariateCorrelations, #MahalanobisDistance, #DataPreprocessing, #Modeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, "sex" ) << Set Modeling Type( "Multiple Response" );
Log Capture( dt << Make Validation Column( Training Set( 0.34 ), Validation Set( 0.33 ), Test Set( 0.33 ), Cutpoint( :sex ) ) );
```

**Code Explanation**:

1. Open data table.
2. Set column modeling type.
3. Capture log output.
4. Create validation column.
5. Define training set size.
6. Define validation set size.
7. Define test set size.
8. Specify cutpoint column.



### Example 2
> **Summary**: Creates a validation column for multivariate correlations analysis with mahalanobis distances, utilizing the 'sex' column as a cutpoint.

<!-- Keywords: #JSLScriptingLanguage, #MultivariateCorrelations, #ValidationColumn, #MahalanobisDistance, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, "sex" ) << Set Modeling Type( "Unstructured Text" );
Log Capture( dt << Make Validation Column( Training Set( 0.34 ), Validation Set( 0.33 ), Test Set( 0.33 ), Cutpoint( :sex ) ) );
```

**Code Explanation**:

1. Open data table;
2. Set "sex" column as unstructured text.
3. Create validation column.
4. Allocate 34% data for training.
5. Allocate 33% data for validation.
6. Allocate 33% data for testing.
7. Use "sex" column as cutpoint.



### Example 3
> **Summary**: Creates a validation column for data table 'Body Fat.jmp' based on sex, utilizing Log Capture and Make Validation Column

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #LogCapture, #ValidationColumn, #SexModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, "sex" ) << Set Modeling Type( "None" );
Log Capture( dt << Make Validation Column( Training Set( 0.34 ), Validation Set( 0.33 ), Test Set( 0.33 ), Cutpoint( :sex ) ) );
```

**Code Explanation**:

1. Open data table.
2. Set sex column modeling type.
3. Capture log output.
4. Create validation column.



### Example 4
> **Summary**: Formats a column and creation of a validation column with a specified cutpoint, utilizing Log Capture for data analysis.

<!-- Keywords: #JSLScripting, #DataAnalysis, #ValidationColumn, #LogCapture, #Cutpoint -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, "height" ) << Format( "Best", 12 );
Log Capture( dt << Make Validation Column( Training Set( 0.34 ), Validation Set( 0.33 ), Test Set( 0.33 ), Cutpoint( :height ) ) );
```

**Code Explanation**:

1. Open data table.
2. Format height column.
3. Log validation column creation.
4. Create validation column.
5. Define training set size.
6. Define validation set size.
7. Define test set size.
8. Set cutpoint using height.



### Example 5
> **Summary**: Creates a validation column for ordinal data, utilizing Log Capture to generate training, validation, and test sets with specified proportions.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #ValidationColumnCreation, #LogCapture, #OrdinalData -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, "height" ) << Set Modeling Type( "Ordinal" );
Log Capture( dt << Make Validation Column( Training Set( 0.34 ), Validation Set( 0.33 ), Test Set( 0.33 ), Cutpoint( :height ) ) );
```

**Code Explanation**:

1. Open data table;
2. Set height column as Ordinal.
3. Log validation column creation.
4. Create training set (34%).
5. Create validation set (33%).
6. Create test set (33%).
7. Use height for cutpoint.



### Example 6
> **Summary**: Process of setting an ordinal modeling type and formatting a column, while also creating a validation column with specified training, validation, and test set sizes.

<!-- Keywords: #JSLScriptingLanguage, #DataTable, #OrdinalModelingType, #ColumnFormatting, #ValidationColumn -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, "height" ) << Set Modeling Type( "Ordinal" );
Column( dt, "height" ) << Format( "Best", 12 );
Log Capture( dt << Make Validation Column( Training Set( 0.34 ), Validation Set( 0.33 ), Test Set( 0.33 ), Cutpoint( :height ) ) );
```

**Code Explanation**:

1. Open data table.
2. Set height column as ordinal.
3. Format height column.
4. Log capture output.
5. Create validation column.
6. Define training set size.
7. Define validation set size.
8. Define test set size.
9. Use height column cutpoint.



### Example 7
> **Summary**: Creates a validation column for multivariate correlations analysis with mahalanobis distances, utilizing the Open() function to load data and setting the 'height' column as nominal.

<!-- Keywords: #JSLScripting, #MultivariateCorrelations, #ValidationColumn, #MahalanobisDistance, #DataPreprocessing -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, "height" ) << Set Modeling Type( "Nominal" );
Log Capture( dt << Make Validation Column( Training Set( 0.34 ), Validation Set( 0.33 ), Test Set( 0.33 ), Cutpoint( :height ) ) );
```

**Code Explanation**:

1. Open data table;
2. Set height column as nominal.
3. Capture log output.
4. Create validation column.
5. Define training set size.
6. Define validation set size.
7. Define test set size.
8. Use height for cutpoint.



### Example 8
> **Summary**: Creates a validation column with training, validation, and test sets for the 'height' column in a JMP data table.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #ValidationColumn, #TrainingSet, #TestSet -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, "height" ) << Set Modeling Type( "Nominal" );
Column( dt, "height" ) << Format( "Best", 12 );
Log Capture( dt << Make Validation Column( Training Set( 0.34 ), Validation Set( 0.33 ), Test Set( 0.33 ), Cutpoint( :height ) ) );
```

**Code Explanation**:

1. Open data table;
2. Set "height" modeling type to nominal.
3. Format "height" column.
4. Log capture output.
5. Create validation column.
6. Define training set as 34%.
7. Define validation set as 33%.
8. Define test set as 33%.
9. Use "height" as cutpoint.



### Example 9
> **Summary**: Creates a validation column with specified proportions and logs capture output for further analysis.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #ValidationColumn, #LogCapture, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, "height" ) << Set Modeling Type( "None" );
Log Capture( dt << Make Validation Column( Training Set( 0.34 ), Validation Set( 0.33 ), Test Set( 0.33 ), Cutpoint( :height ) ) );
```

**Code Explanation**:

1. Open data table;
2. Set height column modeling type to None.
3. Create validation column with specified proportions.
4. Log capture output.



### Example 10
> **Summary**: Prepares a data table for modeling by setting the height column's modeling type, formatting its values, and creating a validation column with specified training, validation, and test set sizes.

<!-- Keywords: #JSLScripting, #DataPreparation, #Modeling, #ValidationColumn, #LogCapture -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, "height" ) << Set Modeling Type( "None" );
Column( dt, "height" ) << Format( "Best", 12 );
Log Capture( dt << Make Validation Column( Training Set( 0.34 ), Validation Set( 0.33 ), Test Set( 0.33 ), Cutpoint( :height ) ) );
```

**Code Explanation**:

1. Open table.
2. Set height modeling type.
3. Format height column.
4. Capture log output.
5. Create validation column.
6. Define training set size.
7. Define validation set size.
8. Define test set size.
9. Use height for cutpoint.



### Example 11
> **Summary**: Creates a validation column with multiple response modeling for categorical data, utilizing log capture and random seed control.

<!-- Keywords: #JSLScripting, #MultipleResponseModeling, #ValidationColumn, #LogCapture, #RandomSeedControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, "sex" ) << Set Modeling Type( "Multiple Response" );
lc = Collapse Whitespace(
	Log Capture(
		dt << Make Validation Column(
			Cutpoint Column( :sex ),
			Training Set( 0.34 ),
			Validation Set( 0.33 ),
			Test Set( 0.33 ),
			Validation Column Type( "Fixed" ),
			Random Seed( 1234 ),
			Go
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Set modeling type for "sex".
3. Log capture begins.
4. Create validation column.
5. Specify cutpoint column.
6. Define training set size.
7. Define validation set size.
8. Define test set size.
9. Set validation column type.
10. Set random seed.



### Example 12
> **Summary**: Creates a validation column with cutpoints and training, validation, and test sets for text data analysis.

<!-- Keywords: #JSLScripting, #TextDataAnalysis, #ValidationColumn, #CutpointColumn, #RandomSeed -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, "sex" ) << Set Modeling Type( "Unstructured Text" );
lc = Collapse Whitespace(
	Log Capture(
		dt << Make Validation Column(
			Cutpoint Column( :sex ),
			Training Set( 0.34 ),
			Validation Set( 0.33 ),
			Test Set( 0.33 ),
			Validation Column Type( "Fixed" ),
			Random Seed( 1234 ),
			Go
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Set modeling type for column.
3. Capture log output.
4. Create validation column.
5. Define cutpoint column.
6. Set training set proportion.
7. Set validation set proportion.
8. Set test set proportion.
9. Fix validation column type.
10. Set random seed.



### Example 13
> **Summary**: Creates a validation column using Log Capture and Cutpoint Column, with specific allocation to training, validation, and test sets.

<!-- Keywords: #JSLScriptingLanguage, #DataTable, #ValidationColumn, #LogCapture, #CutpointColumn -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, "sex" ) << Set Modeling Type( "None" );
lc = Collapse Whitespace(
	Log Capture(
		dt << Make Validation Column(
			Cutpoint Column( :sex ),
			Training Set( 0.34 ),
			Validation Set( 0.33 ),
			Test Set( 0.33 ),
			Validation Column Type( "Fixed" ),
			Random Seed( 1234 ),
			Go
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Set sex column modeling type to None.
3. Collapse whitespace.
4. Log capture start.
5. Create validation column.
6. Use sex column for cutpoints.
7. Allocate 34% to training set.
8. Allocate 33% to validation set.
9. Allocate 33% to test set.
10. Set validation type to Fixed.
11. Use seed 1234 for randomness.
12. Execute validation column creation.



### Example 14
> **Summary**: Creates a validation column for data table 'data_table.jmp' with specified cutpoints, training, validation, and test set sizes, and random seed.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #ValidationColumn, #CutpointAnalysis, #RandomSeed -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, "height" ) << Format( "Best", 12 );
Log Capture(
	dt << Make Validation Column(
		Cutpoint Column( :height ),
		Training Set( 0.34 ),
		Validation Set( 0.33 ),
		Test Set( 0.33 ),
		Validation Column Type( "Fixed" ),
		Random Seed( 1234 ),
		Go
	)
);
```

**Code Explanation**:

1. Open data table.
2. Format height column.
3. Capture log output.
4. Create validation column.
5. Define cutpoint column.
6. Set training set size.
7. Set validation set size.
8. Set test set size.
9. Fix validation column type.
10. Set random seed.



### Example 15
> **Summary**: Creates a validation column for an ordinal 'height' variable in a JMP data table, using log capture and specifying cutpoints, training, validation, and test sets.

<!-- Keywords: #JSLScriptingLanguage, #ValidationColumn, #OrdinalVariable, #LogCapture, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, "height" ) << Set Modeling Type( "Ordinal" );
Log Capture(
	dt << Make Validation Column(
		Cutpoint Column( :height ),
		Training Set( 0.34 ),
		Validation Set( 0.33 ),
		Test Set( 0.33 ),
		Validation Column Type( "Fixed" ),
		Random Seed( 1234 ),
		Go
	)
);
```

**Code Explanation**:

1. Open data table;
2. Set height column type to ordinal.
3. Begin log capture.
4. Create validation column.
5. Specify height as cutpoint column.
6. Allocate 34% to training set.
7. Allocate 33% to validation set.
8. Allocate 33% to test set.
9. Fix validation column type.
10. Set random seed to 1234.
11. Execute validation column creation.



### Example 16
> **Summary**: Creates a validation column for the 'height' column in a data table, using cutpoints and allocating data to training, validation, and test sets.

<!-- Keywords: #JSLScriptingLanguage, #DataValidation, #OrdinalColumn, #LogCapture, #RandomSeed -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, "height" ) << Set Modeling Type( "Ordinal" );
Column( dt, "height" ) << Format( "Best", 12 );
Log Capture(
	dt << Make Validation Column(
		Cutpoint Column( :height ),
		Training Set( 0.34 ),
		Validation Set( 0.33 ),
		Test Set( 0.33 ),
		Validation Column Type( "Fixed" ),
		Random Seed( 1234 ),
		Go
	)
);
```

**Code Explanation**:

1. Open data table;
2. Set "height" column as Ordinal.
3. Format "height" column as Best, width 12.
4. Begin log capture.
5. Create validation column for "height".
6. Use "height" as cutpoint column.
7. Allocate 34% data to training set.
8. Allocate 33% data to validation set.
9. Allocate 33% data to test set.
10. Fix validation column type.
11. Set random seed to 1234.
12. Execute validation column creation.



### Example 17
> **Summary**: Creates a validation column with cutpoints based on the 'height' column, allocating 34% for training, 33% for validation, and 33% for testing, while fixing the validation column type and setting a random seed.

<!-- Keywords: #JSL, #ValidationColumn, #Cutpoint, #RandomSeed, #DataPreprocessing -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, "height" ) << Set Modeling Type( "Nominal" );
Log Capture(
	dt << Make Validation Column(
		Cutpoint Column( :height ),
		Training Set( 0.34 ),
		Validation Set( 0.33 ),
		Test Set( 0.33 ),
		Validation Column Type( "Fixed" ),
		Random Seed( 1234 ),
		Go
	)
);
```

**Code Explanation**:

1. Open data table;
2. Set height column to Nominal.
3. Capture log output.
4. Create validation column.
5. Use height for cutpoints.
6. Allocate 34% for training.
7. Allocate 33% for validation.
8. Allocate 33% for testing.
9. Fix validation column type.
10. Set random seed to 1234.



### Example 18
> **Summary**: Creates a validation column with cutpoints for the 'height' column in a data table, utilizing log capture and random seed.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #ValidationColumn, #LogCapture, #RandomSeed -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, "height" ) << Set Modeling Type( "Nominal" );
Column( dt, "height" ) << Format( "Best", 12 );
Log Capture(
	dt << Make Validation Column(
		Cutpoint Column( :height ),
		Training Set( 0.34 ),
		Validation Set( 0.33 ),
		Test Set( 0.33 ),
		Validation Column Type( "Fixed" ),
		Random Seed( 1234 ),
		Go
	)
);
```

**Code Explanation**:

1. Open data table.
2. Set height column to nominal.
3. Format height column.
4. Start log capture.
5. Create validation column.
6. Define cutpoint column.
7. Set training set proportion.
8. Set validation set proportion.
9. Set test set proportion.
10. Fix validation column type.



### Example 19
> **Summary**: Creates a validation column for multivariate correlations analysis with mahalanobis distances, using the 'height' column as cutpoints and allocating specific proportions for training, validation, and testing.

<!-- Keywords: #JSL, #ValidationColumn, #MultivariateCorrelations, #MahalanobisDistance, #DataPreprocessing -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, "height" ) << Set Modeling Type( "None" );
Log Capture(
	dt << Make Validation Column(
		Cutpoint Column( :height ),
		Training Set( 0.34 ),
		Validation Set( 0.33 ),
		Test Set( 0.33 ),
		Validation Column Type( "Fixed" ),
		Random Seed( 1234 ),
		Go
	)
);
```

**Code Explanation**:

1. Open data table;
2. Set "height" column modeling type to "None".
3. Start log capture.
4. Create validation column.
5. Use "height" for cutpoints.
6. Allocate 34% for training.
7. Allocate 33% for validation.
8. Allocate 33% for testing.
9. Set validation type to "Fixed".
10. Use random seed 1234.



### Example 20
> **Summary**: Creates a validation column in a data table, using the height column as a cutpoint and allocating specific percentages for training, validation, and test sets.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #ValidationColumn, #Cutpoint, #LogCapture -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, "height" ) << Set Modeling Type( "None" );
Column( dt, "height" ) << Format( "Best", 12 );
Log Capture(
	dt << Make Validation Column(
		Cutpoint Column( :height ),
		Training Set( 0.34 ),
		Validation Set( 0.33 ),
		Test Set( 0.33 ),
		Validation Column Type( "Fixed" ),
		Random Seed( 1234 ),
		Go
	)
);
```

**Code Explanation**:

1. Open data table;
2. Set height column modeling type to None.
3. Format height column as Best with width 12.
4. Start log capture.
5. Create validation column in data table.
6. Use height column as cutpoint.
7. Allocate 34% for training set.
8. Allocate 33% for validation set.
9. Allocate 33% for test set.
10. Fix validation column type.



### Example 21
> **Summary**: Runs the creation and validation of a data table, including setting modeling types, making validation columns, relaunching analysis, and generating reports.

<!-- Keywords: #JSLScriptingLanguage, #DataTableValidation, #MakeValidationColumn, #RelaunchAnalysis, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, "age" ) << Set Modeling Type( "Continuous" );
obj = dt << Make Validation Column( Cutpoint Column( :height ), Cutpoint Batch ID( :age ) );
rpt = Report( obj );
obj2 = dt << Make Validation Column;
wind = obj2 << Relaunch Analysis;
obj2 << close window;
wind = Window( "Make Validation Column" );
```

**Code Explanation**:

1. Open data table;
2. Set age column to continuous.
3. Create validation column using height.
4. Assign cutpoint batch ID by age.
5. Generate report from validation object.
6. Create another validation column.
7. Relaunch analysis for new object.
8. Close the new validation window.
9. Open Make Validation Column window.



## N Col 
### Example 1
> **Summary**: Runs data validation and grouping operations by creating two validation columns with formula and fixed types, utilizing the Log Capture and Collapse Whitespace functions.

<!-- Keywords: #JSLScriptingLanguage, #DataValidation, #GroupingColumns, #LogCapture, #CollapseWhitespace -->

**Code**:
```jsl
dt = Open("data_table.jmp");
p = N Col( dt );
lc = Collapse Whitespace(
	Log Capture( dt << Make Validation Column( Grouping Columns( :height, :weight ), Validation Column Type( "Formula" ), Go ) )
);
lc2 = Collapse Whitespace(
	Log Capture( dt << Make Validation Column( Grouping Columns( :height, :weight ), Validation Column Type( "Fixed" ), Go ) )
);
```

**Code Explanation**:

1. Open data table;
2. Count number of columns.
3. Capture log for formula validation.
4. Collapse whitespace in log.
5. Capture log for fixed validation.
6. Collapse whitespace in log.



### Example 2
> **Summary**: Creates log captures for formula and fixed validation in a data table, utilizing N Col and Collapse Whitespace functions.

<!-- Keywords: #JSLScriptingLanguage, #DataValidation, #LogCapture, #NColFunction, #CollapseWhitespace -->

**Code**:
```jsl
dt = Open("data_table.jmp");
p = N Col( dt );
lc = Collapse Whitespace(
	Log Capture( dt << Make Validation Column( Grouped Random( :height, :weight ), Validation Column Type( "Formula" ), Go ) )
);
lc2 = Collapse Whitespace(
	Log Capture( dt << Make Validation Column( Grouped Random( :height, :weight ), Validation Column Type( "Fixed" ), Go ) )
);
```

**Code Explanation**:

1. Open data table;
2. Count columns in dataset.
3. Create log capture for formula validation.
4. Generate grouped random validation column.
5. Set validation column type to formula.
6. Execute validation column creation.
7. Collapse whitespace in log capture.
8. Create log capture for fixed validation.
9. Generate grouped random validation column.
10. Set validation column type to fixed.



## Make Validation Column using New Column
### Example 1
> **Summary**: Creates a validation column in JMP, using a formula to identify batches and generate cutpoints based on the Date column.

<!-- Keywords: #JMPScriptingLanguage, #DataTable, #ValidationColumn, #BatchIdentification, #Cutpoints -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Batch", Character, "Nominal", Formula( Char( Mod( Row(), 3 ) + 1 ) ) );
obj = dt << Make Validation Column( Cutpoint Column( :Date ), Cutpoint Batch ID( :Batch ) );
```

**Code Explanation**:

1. Open data table.
2. Create new column "Batch".
3. Set column type to Character.
4. Define column modeling as Nominal.
5. Assign formula for batch identification.
6. Generate validation column.
7. Use Date column for cutpoints.
8. Apply Batch column for batch IDs.



### Example 2
> **Summary**: Creates validation columns with grouping and random category assignments, utilizing JMP's data manipulation capabilities.

<!-- Keywords: #JMPScriptingLanguage, #DataManipulation, #ValidationColumns, #Grouping, #RandomCategory -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "One Group", Character, "Nominal", Formula( Random Category( 0.5, "A", "A" ) ) );
dt << New Column( "Two Groups", Character, "Nominal", Formula( Random Category( 0.5, "A", "B" ) ) );
dt << New Column( "Three Groups", Character, "Nominal", Formula( Random Category( 0.3333, "A", 0.3333, "B", "C" ) ) );
dt << New Column( "Four Groups", Character, "Nominal", Formula( Random Category( 0.25, "A", 0.25, "B", 0.25, "C", "D" ) ) );
dt << New Column( "Missing", Character, "Nominal" );
lc = Collapse Whitespace( Log Capture( dt << Make Validation Column( Y( :weight ), Grouping Columns( :One Group ) ) ) );
lc2 = Collapse Whitespace( Log Capture( dt << Make Validation Column( Y( :weight ), Grouping Columns( :Two Groups ) ) ) );
lc3 = Collapse Whitespace( Log Capture( dt << Make Validation Column( Y( :weight ), Grouping Columns( :Three Groups ) ) ) );
lc4 = Collapse Whitespace( Log Capture( dt << Make Validation Column( Y( :weight ), Grouping Columns( :Missing ) ) ) );
 	
dt << Make Validation Column( Y( :weight ), Grouping Columns( :Four Groups ), Go );
Close( dt, nosave );
Random Reset( 123456789 );
```

**Code Explanation**:

1. Open data table.
2. Add "One Group" column.
3. Add "Two Groups" column.
4. Add "Three Groups" column.
5. Add "Four Groups" column.
6. Add "Missing" column.
7. Create validation column for "One Group".
8. Create validation column for "Two Groups".
9. Create validation column for "Three Groups".
10. Create validation column for "Four Groups".



## Make Validation Column using For
### Example 1
> **Summary**: Creates validation columns for a specified data table, utilizing random sampling and cutpoint determination using row numbers.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #ValidationColumnGeneration, #RandomSampling, #CutpointDetermination -->

**Code**:
```jsl
dt = Open("data_table.jmp");
n = 46;
For( i = 1, i <= 5, i++,
	randTraining = Random Integer( 0, n );
	randValidation = Random Integer( 0, n - randTraining );
	randTest = n - randTraining - randValidation;
	obj = dt << Make Validation Column(
		Cutpoint Column( :Time ),
		Training Set( Eval( randTraining ) ),
		Validation Set( Eval( randValidation ) ),
		Test Set( Eval( randTest ) ),
		Determine cutpoints using( "Numbers of Rows" )
	);
	rpt = Report( obj );
	obj << close window;
);
```

**Code Explanation**:

1. Open data table.
2. Set variable `n` to 46.
3. Loop 5 times.
4. Generate random training size.
5. Generate random validation size.
6. Calculate test size.
7. Create validation column.
8. Define cutpoint column.
9. Set training set size.
10. Set validation set size.
11. Set test set size.
12. Use row numbers for cutpoints.
13. Generate report from object.
14. Close object window.



### Example 2
> **Summary**: Creates validation columns with random training, validation, and test set sizes for 5 iterations in a specified data table.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #ValidationColumnCreation, #RandomSampling, #IterationControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
n = 96;
For( i = 1, i <= 5, i++,
	randTraining = Random Integer( 0, n );
	randValidation = Random Integer( 0, n - randTraining );
	randTest = n - randTraining - randValidation;
	obj = dt << Make Validation Column(
		Cutpoint Column( :Date ),
		Training Set( Eval( randTraining ) ),
		Validation Set( Eval( randValidation ) ),
		Test Set( Eval( randTest ) ),
		Determine cutpoints using( "Numbers of Rows" )
	);
	rpt = Report( obj );
	obj << close window;
);
```

**Code Explanation**:

1. Open data table.
2. Define sample size.
3. Start loop for 5 iterations.
4. Generate random training set size.
5. Generate random validation set size.
6. Calculate test set size.
7. Create validation column.
8. Specify cutpoint column.
9. Define training set size.
10. Define validation set size.
11. Define test set size.
12. Use row numbers for cutpoints.
13. Generate report.
14. Close window.



### Example 3
> **Summary**: Creates validation columns for a specified data table, utilizing random sampling and cutpoints to define training, validation, and test sets.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #ValidationColumnCreation, #RandomSampling, #CutpointDetermination -->

**Code**:
```jsl
dt = Open("data_table.jmp");
n = 36;
For( i = 1, i <= 5, i++,
	randTraining = Random Integer( 0, n );
	randValidation = Random Integer( 0, n - randTraining );
	randTest = n - randTraining - randValidation;
	obj = dt << Make Validation Column(
		Cutpoint Column( :Time ),
		Cutpoint Batch ID( :Series ),
		Training Set( Eval( randTraining ) ),
		Validation Set( Eval( randValidation ) ),
		Test Set( Eval( randTest ) ),
		Determine cutpoints using( "Numbers of Rows" )
	);
	rpt = Report( obj );
	obj << close window;
);
Close( dt, nosave );
				
Random Reset( 123 );
countFailures = 0;
```

**Code Explanation**:

1. Open data table.
2. Define variable `n`.
3. Loop 5 times.
4. Generate random training size.
5. Generate random validation size.
6. Calculate test size.
7. Create validation column.
8. Get report object.
9. Close validation window.
10. Close data table without saving.



### Example 4
> **Summary**: Generates a validation column for a specified data table, utilizing random sampling to determine training, validation, and test set sizes based on elapsed time.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #ValidationColumnGeneration, #RandomSampling, #ElapsedTime -->

**Code**:
```jsl
For( sim = 1, sim <= 3, sim++,
	dt = Open("data_table.jmp");
	elapsedMax = 249782400;
	val1 = Random Uniform( 0, elapsedMax );
	val2 = Random Uniform( 0, elapsedMax - val1 );
	val3 = elapsedMax - val1 - val2;
	obj = dt << Make Validation Column(
		Cutpoint Column( :Date ),
		Training Set( val1 ),
		Validation Set( val2 ),
		Test Set( val3 ),
		Determine cutpoints using( "Elapsed Time" )
	);
	rpt = Report( obj );
	valUsed1 = rpt[Number Edit Box( 1 )] << Get;
	valUsed2 = rpt[Number Edit Box( 2 )] << Get;
	valUsed3 = rpt[Number Edit Box( 3 )] << Get;
	obj << close window;
	Close( dt, nosave );
);
```

**Code Explanation**:

1. Loop 3 times.
2. Open data_table data
3. Define maximum elapsed time.
4. Generate random validation set size.
5. Generate random test set size.
6. Calculate training set size.
7. Create validation column.
8. Use elapsed time for cutpoints.
9. Retrieve validation set size.
10. Retrieve test set size.
11. Retrieve training set size.
12. Close validation report window.
13. Close data table without saving.



### Example 5
> **Summary**: Generates a distribution analysis for continuous variables in a specified data table using the Distribution platform, with random training, validation, and test sets.

<!-- Keywords: #JSLScriptingLanguage, #Distribution, #DataTableAnalysis, #RandomSampling, #ValidationColumn -->

**Code**:
```jsl
dt = Open("data_table.jmp");
For( i = 1, i <= 5, i++,
	randTraining = Min( dt[0, "Time"] );
	randValidation = Random Integer( Min( dt[0, "Time"] ), Max( dt[0, "Time"] ) );
	randTest = Random Integer( randValidation, Max( dt[0, "Time"] ) );
	valColType = {"Fixed", "Formula"}[Random Integer( 1, 2 )];
	Eval(
		Substitute(
				Expr(
					obj = Make Validation Column(
						Cutpoint Column( :Time ),
						Training Set( _randTraining ),
						Validation Set( _randValidation ),
						Test Set( _randTest ),
						Validation Column Type( _valColType ),
						Determine cutpoints using( "Fixed Time or Date" )
					)
				),
			Expr( _randTraining ), randTraining,
			Expr( _randValidation ), randValidation,
			Expr( _randTest ), randTest,
			Expr( _valColType ), valColType
		)
	);
	rpt = Report( obj );
	obj << close window;
);
```

**Code Explanation**:

1. Open data table.
2. Loop 5 times.
3. Generate random training start.
4. Generate random validation end.
5. Generate random test end.
6. Select random validation column type.
7. Create validation column.
8. Assign generated values to parameters.
9. Generate report from object.
10. Close report window.



### Example 6
> **Summary**: Generates a distribution analysis for continuous variables in a specified data table using the Distribution platform, with random training, validation, and test dates, and randomly selected validation column types.

<!-- Keywords: #JSLScriptingLanguage, #Distribution, #DataTableAnalysis, #RandomSampling, #ValidationColumn -->

**Code**:
```jsl
dt = Open("data_table.jmp");
For( i = 1, i <= 5, i++,
	randTraining = Min( dt[0, "Date"] );
	randValidation = Random Integer( Min( dt[0, "Date"] ), Max( dt[0, "Date"] ) );
	randTest = Random Integer( randValidation, Max( dt[0, "Date"] ) );
	valColType = {"Fixed", "Formula"}[Random Integer( 1, 2 )];
	Eval(
		Substitute(
				Expr(
					obj = Make Validation Column(
						Cutpoint Column( :Date ),
						Training Set( _randTraining ),
						Validation Set( _randValidation ),
						Test Set( _randTest ),
						Validation Column Type( _valColType ),
						Determine cutpoints using( "Fixed Time or Date" )
					)
				),
			Expr( _randTraining ), randTraining,
			Expr( _randValidation ), randValidation,
			Expr( _randTest ), randTest,
			Expr( _valColType ), valColType
		)
	);
	rpt = Report( obj );
	obj << close window;
);
```

**Code Explanation**:

1. Open data table.
2. Loop 5 times.
3. Set random training date.
4. Set random validation date.
5. Set random test date.
6. Choose validation column type randomly.
7. Create validation column.
8. Generate report.
9. Close report window.
10. Repeat loop.



### Example 7
> **Summary**: Generates a distribution analysis for continuous variables in a specified data table using the Distribution platform, with options to customize validation column type and dates.

<!-- Keywords: #JSLScriptingLanguage, #Distribution, #DataTableAnalysis, #ValidationColumn, #RandomDateGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
For( i = 1, i <= 5, i++,
	randTraining = Min( dt[0, "DATE"] );
	randValidation = Random Integer( Min( dt[0, "DATE"] ), Max( dt[0, "DATE"] ) );
	randTest = Random Integer( randValidation, Max( dt[0, "DATE"] ) );
	valColType = {"Fixed", "Formula"}[Random Integer( 1, 2 )];
	Eval(
		Substitute(
				Expr(
					obj = Make Validation Column(
						Cutpoint Column( :Date ),
						Training Set( _randTraining ),
						Validation Set( _randValidation ),
						Test Set( _randTest ),
						Validation Column Type( _valColType ),
						Determine cutpoints using( "Fixed Time or Date" )
					)
				),
			Expr( _randTraining ), randTraining,
			Expr( _randValidation ), randValidation,
			Expr( _randTest ), randTest,
			Expr( _valColType ), valColType
		)
	);
	rpt = Report( obj );
	obj << close window;
);
```

**Code Explanation**:

1. Open data_table data
2. Loop 5 times.
3. Set minimum date for training.
4. Generate random validation date.
5. Generate random test date.
6. Choose random validation column type.
7. Create validation column object.
8. Substitute variables in expression.
9. Generate report from object.
10. Close validation column window.



### Example 8
> **Summary**: Creates a validation column in a data table, stratified by height, with random seed generation and training/validation/test set ratios.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #ValidationColumnCreation, #RandomSeedGeneration, #Stratification -->

**Code**:
```jsl
dt = Open("data_table.jmp");
For( i = 1, i <= 10, i++,
	myseed = Random Integer( 9876543621, 9876543621 + 1e9 );
	dt << Make Validation Column(
		Stratification Columns( :height ),
		Training Set( 0.75 ),
		Validation Set( 0.25 ),
		Test Set( 0 ),
		Random Seed( myseed ),
		Go
	);
);
x = dt[0, 6 :: 15];
Close( dt, nosave );
Random Reset( 123456789 );
```

**Code Explanation**:

1. Open data table.
2. Loop 10 times.
3. Generate random seed.
4. Create validation column.
5. Stratify by height.
6. Set training ratio to 0.75.
7. Set validation ratio to 0.25.
8. Set test ratio to 0.
9. Use random seed.
10. Execute validation creation.
11. Extract columns 6 to 15.
12. Close table without saving.
13. Reset random seed.



### Example 9
> **Summary**: Creates a validation column with stratification by height, training set ratio of 75%, and test set ratio of 0% in a specified data table.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #ValidationColumnCreation, #Stratification, #RandomSeedGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
For( i = 1, i <= 10, i++,
	myseed = Random Integer( -123456789, -1 );
	dt << Make Validation Column(
		Stratification Columns( :height ),
		Training Set( 0.75 ),
		Validation Set( 0.25 ),
		Test Set( 0 ),
		Random Seed( myseed ),
		Go
	);
);
x = dt[0, 6 :: 15];
```

**Code Explanation**:

1. Open data table.
2. Loop 10 times.
3. Generate random seed.
4. Create validation column.
5. Stratify by height.
6. Set training ratio to 75%.
7. Set validation ratio to 25%.
8. Set test set to 0%.
9. Use random seed.
10. Execute validation creation.



### Example 10
> **Summary**: Creates a validation column in a data table, stratifying by sensor measurements and setting training and validation ratios.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #ValidationColumn, #Stratification, #RandomSeed -->

**Code**:
```jsl
dt = Open("data_table.jmp");
For( i = 1, i <= 10, i++,
	dt << Make Validation Column(
		Stratification Columns( Column Group( "Sensor Measurements" ) ),
		Training Set( 0.75 ),
		Validation Set( 0.25 ),
		Test Set( 0 ),
		Random Seed( . ),
		Go
	)
);
x = dt[0, 40 :: 49];
```

**Code Explanation**:

1. Open data table;
2. Loop 10 times.
3. Create validation column.
4. Stratify by sensor measurements.
5. Set training ratio to 75%.
6. Set validation ratio to 25%.
7. No test set.
8. Use random seed.
9. Execute validation creation.
10. Assign columns 40-49 to x.



### Example 11
> **Summary**: Creates a validation column with stratification by sensor measurements, utilizing 75% training and 25% validation sets.

<!-- Keywords: #JSLScriptingLanguage, #DataValidation, #Stratification, #RandomSeed, #ColumnGroup -->

**Code**:
```jsl
dt = Open("data_table.jmp");
For( i = 1, i <= 10, i++,
	dt << Make Validation Column(
		Stratification Columns( Column Group( "Sensor Measurements" ) ),
		Training Set( 0.75 ),
		Validation Set( 0.25 ),
		Test Set( 0 ),
		Random Seed( 0 ),
		Go
	)
);
x = dt[0, 40 :: 49];
```

**Code Explanation**:

1. Open data table;
2. Loop 10 times.
3. Create validation column.
4. Stratify by sensor measurements.
5. Set training ratio to 75%.
6. Set validation ratio to 25%.
7. No test set.
8. Use random seed 0.
9. Execute validation creation.
10. Assign columns 40-49 to x.



### Example 12
> **Summary**: Creates validation columns for a specified data table, utilizing random training and test set sizes to determine cutpoints.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #ValidationColumnCreation, #RandomSampling, #CutpointDetermination -->

**Code**:
```jsl
dt = Open("data_table.jmp");
n = 36;
For( i = 1, i <= 5, i++,
	randTraining = Random Integer( 0, n );
	randValidation = Random Integer( 0, n - randTraining );
	randTest = n - randTraining - randValidation;
	obj = dt << Make Validation Column(
		Cutpoint Column( :Time ),
		Cutpoint Batch ID( :Series ),
		Training Set( Eval( randTraining ) ),
		Validation Set( Eval( randValidation ) ),
		Test Set( Eval( randTest ) ),
		Determine cutpoints using( "Numbers of Rows" )
	);
	rpt = Report( obj );
	obj << close window;
);
```

**Code Explanation**:

1. Open data table;
2. Set n to 36.
3. Loop 5 times.
4. Generate random training size.
5. Generate random validation size.
6. Calculate test size.
7. Create validation column.
8. Define cutpoint column.
9. Define cutpoint batch ID.
10. Set training set size.
11. Set validation set size.
12. Set test set size.
13. Use row numbers for cutpoints.
14. Generate report.
15. Close window.



### Example 13
> **Summary**: Creates a validation column in a data table, stratified by height and with random seed generation.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #ValidationColumnCreation, #Stratification, #RandomSeedGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
For( i = 1, i <= 10, i++,
	myseed = Random Integer( 9876543621, 9876543621 + 1e9 );
	dt << Make Validation Column(
		Stratification Columns( :height ),
		Training Set( 0.75 ),
		Validation Set( 0.25 ),
		Test Set( 0 ),
		Random Seed( myseed ),
		Go
	);
);
x = dt[0, 6 :: 15];
```

**Code Explanation**:

1. Open data table;
2. Loop 10 times.
3. Generate random seed.
4. Create validation column.
5. Stratify by height.
6. Set training set to 75%.
7. Set validation set to 25%.
8. Set test set to 0%.
9. Use generated seed.
10. Execute validation creation.



### Example 14
> **Summary**: Creates validation columns for a specified data table, utilizing random row selection and exclusion to generate distinct groups.

<!-- Keywords: #JSLScripting, #DataTableManipulation, #ValidationColumnCreation, #RandomRowSelection, #Exclusion -->

**Code**:
```jsl
For( sim = 1, sim <= 5, sim++,
	dt = Open("data_table.jmp");
	dt << Select Randomly( 0.2 ) << Exclude( 1 );
	dt << Make Validation Column(
		Grouping Columns( :SITEID ),
		Training Set( 3 ),
		Validation Set( 1 ),
		Test Set( 0 ),
		New Column Name( "Group Valid" ),
		Validation Column Type( "Formula" ),
		Go
	);
	excludedRows = dt << Get Excluded Rows;
	nonExcludedRows = dt << Select Excluded << Invert Row Selection << Get Selected Rows;
						
	myGroups = Associative Array( dt[0, "SITEID"] ) << Get Keys;
	For( j = 1, j <= Length( myGroups ), j++,
		validVals = dt[nonExcludedRows[Loc( dt[nonExcludedRows, "SITEID"], myGroups[j] )], "Group Valid"]
	);
	Close( dt, nosave );
);
```

**Code Explanation**:

1. Loop 5 times.
2. Open data table;
3. Randomly select 20% rows.
4. Exclude selected rows.
5. Create validation column.
6. Get excluded rows.
7. Get non-excluded rows.
8. Get unique SITEID values.
9. Loop through each SITEID.
10. Retrieve validation values for non-excluded rows.
11. Close dataset without saving.



### Example 15
> **Summary**: Creates a validation column for a specified data table, utilizing random selection and exclusion to generate training, validation, and test sets.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #ValidationColumnCreation, #RandomSelection, #Exclusion -->

**Code**:
```jsl
For( sim = 1, sim <= 5, sim++,
	dt = Open("data_table.jmp");
	dt << Select Randomly( 0.2 ) << Exclude( 1 );
	dt << Make Validation Column(
		Grouping Columns( :SITEID ),
		Training Set( 3 ),
		Validation Set( 1 ),
		Test Set( 0 ),
		New Column Name( "Group Valid" ),
		Validation Column Type( "Fixed" ),
		Go
	);
	excludedRows = dt << Get Excluded Rows;
	nonExcludedRows = dt << Select Excluded << Invert Row Selection << Get Selected Rows;
						
	myGroups = Associative Array( dt[0, "SITEID"] ) << Get Keys;
	For( j = 1, j <= Length( myGroups ), j++,
		validVals = dt[nonExcludedRows[Loc( dt[nonExcludedRows, "SITEID"], myGroups[j] )], "Group Valid"]
	);
	Close( dt, nosave );
);
```

**Code Explanation**:

1. Loop 5 times.
2. Open data table.
3. Select rows randomly.
4. Exclude selected rows.
5. Create validation column.
6. Get excluded rows.
7. Get non-excluded rows.
8. Get unique site IDs.
9. Loop through each site ID.
10. Retrieve validation values for non-excluded rows.



### Example 16
> **Summary**: Process of creating a stratified validation column for a specified data table, utilizing random sampling and exclusion techniques.

<!-- Keywords: #JSLScripting, #DataManipulation, #ValidationColumn, #Stratification, #RandomSampling -->

**Code**:
```jsl
For( sim = 1, sim <= 5, sim++,
	dt = Open("data_table.jmp");
	dt << Select Randomly( 0.25 ) << Exclude( 1 );
	dt << Make Validation Column(
		Stratification Columns( :Sex ),
		Training Set( 0.75 ),
		Validation Set( 0.25 ),
		Test Set( 0 ),
		New Column Name( "Strat Valid" ),
		Validation Column Type( "Fixed" ),
		Go
	);
	excludedRows = dt << Get Excluded Rows;
	nonExcludedRows = dt << Select Excluded << Invert Row Selection << Get Selected Rows;
		
	myGroups = Associative Array( dt[nonExcludedRows, "Sex"] ) << Get Keys;
	trainVals = validationVals = testVals = [];
	For( j = 1, j <= Length( myGroups ), j++,
		validVals = dt[nonExcludedRows[Loc( dt[nonExcludedRows, "Sex"], myGroups[j] )], "Strat Valid"];
		trainVals ||= N Row( Loc( validVals, 0 ) );
		validationVals ||= N Row( Loc( validVals, 1 ) );
		testVals ||= N Row( Loc( testVals, 2 ) );
	);
	Close( dt, nosave );
);
Random Reset( 123456789 );
```

**Code Explanation**:

1. Loop 5 times.
2. Open data table;
3. Select 25% rows randomly.
4. Exclude selected rows.
5. Create validation column.
6. Get excluded rows.
7. Get non-excluded rows.
8. Get unique sex groups.
9. Initialize row count variables.
10. Loop through each group.
11. Count training, validation, test rows.
12. Close data table without saving.
13. Reset random seed.



### Example 17
> **Summary**: Generates a distribution analysis for continuous variables in a specified data table using the Distribution platform, with features including random sampling, row exclusion, and validation column creation.

<!-- Keywords: #JSLScriptingLanguage, #Distribution, #DataTableManipulation, #RandomSampling, #ValidationColumn -->

**Code**:
```jsl
For( sim = 1, sim <= 3, sim++,
	dt = Open("data_table.jmp");
	dt << Select Randomly( 0.8 ) << Exclude( 1 );
	excludedRows = dt << Get Excluded Rows;
	nonExcludedRows = dt << Select Excluded << Invert Row Selection << Get Selected Rows;
	missingRows = nonExcludedRows[Random Index( N Row( nonExcludedRows ), 0.05 * N Row( nonExcludedRows ) )];
	dt[missingRows, "DATE"] = .;
	For( j = 1, j <= N Row( missingRows ), j++,
		Remove From( nonExcludedRows, Loc( nonExcludedRows, missingRows[j] )[1] )
	);
	dt << Make Validation Column(
		Cutpoint Column( :Week of Year ),
		Training Set( 0.70 ),
		Validation Set( 0.20 ),
		Test Set( 0.10 ),
		New Column Name( "Cutpoint Valid" ),
		Validation Column Type( "Fixed" ),
		Go
	);
	CutpointVals = Associative Array( dt[nonExcludedRows, "Week of Year"] ) << Get Keys;
	trainingCut = Quantile( 0.7, CutpointVals );
	validCut = Quantile( 0.9, CutpointVals );
	TrainingRows = nonExcludedRows[Loc( dt[nonExcludedRows, "Cutpoint Valid"], 0 )];
	TrainingRowsOracle = nonExcludedRows[Loc( dt[nonExcludedRows, "Week of Year"] < trainingCut )];
	ValidationRows = nonExcludedRows[Loc( dt[nonExcludedRows, "Cutpoint Valid"], 1 )];
	ValidationRowsOracle = nonExcludedRows[Loc(
		dt[nonExcludedRows, "Week of Year"] < validCut & dt[nonExcludedRows, "Week of Year"] >= trainingCut
	)];
	TestRows = nonExcludedRows[Loc( dt[nonExcludedRows, "Cutpoint Valid"], 2 )];
	TestRowsOracle = nonExcludedRows[Loc( dt[nonExcludedRows, "Week of Year"] >= validCut )];
	Close( dt, nosave );
);
Random Reset( 123456789 );
```

**Code Explanation**:

1. Loop 3 times.
2. Open data table.
3. Randomly select 80% rows, exclude.
4. Get excluded rows.
5. Get non-excluded rows.
6. Randomly select 5% rows from non-excluded, mark as missing.
7. Remove marked rows from non-excluded.
8. Create validation column.
9. Get unique week values from non-excluded.
10. Calculate training, validation, test cutpoints.
11. Identify training, validation, test rows.
12. Close table without saving.
13. Reset random seed.



### Example 18
> **Summary**: Generates a validation column using cutpoints for continuous variables in a specified data table, incorporating random row exclusion and missing value introduction.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #ValidationColumnGeneration, #CutpointAnalysis, #ContinuousVariables -->

**Code**:
```jsl
For( sim = 1, sim <= 3, sim++,
	dt = Open("data_table.jmp");
	dt << Select Randomly( 0.8 ) << Exclude( 1 );
	excludedRows = dt << Get Excluded Rows;
	nonExcludedRows = dt << Select Excluded << Invert Row Selection << Get Selected Rows;
	missingRows = nonExcludedRows[Random Index( N Row( nonExcludedRows ), 0.05 * N Row( nonExcludedRows ) )];
	dt[missingRows, "DATE"] = .;
	For( j = 1, j <= N Row( missingRows ), j++,
		Remove From( nonExcludedRows, Loc( nonExcludedRows, missingRows[j] )[1] )
	);
	dt << Make Validation Column(
		Cutpoint Column( :Week of Year ),
		Training Set( 0.70 ),
		Validation Set( 0.20 ),
		Test Set( 0.10 ),
		New Column Name( "Cutpoint Valid" ),
		Validation Column Type( "Formula" ),
		Go
	);
	CutpointVals = Associative Array( dt[nonExcludedRows, "Week of Year"] ) << Get Keys;
	trainingCut = Quantile( 0.7, CutpointVals );
	validCut = Quantile( 0.9, CutpointVals );
	TrainingRows = nonExcludedRows[Loc( dt[nonExcludedRows, "Cutpoint Valid"], 0 )];
	TrainingRowsOracle = nonExcludedRows[Loc( dt[nonExcludedRows, "Week of Year"] < trainingCut )];
	ValidationRows = nonExcludedRows[Loc( dt[nonExcludedRows, "Cutpoint Valid"], 1 )];
	ValidationRowsOracle = nonExcludedRows[Loc(
		dt[nonExcludedRows, "Week of Year"] < validCut & dt[nonExcludedRows, "Week of Year"] >= trainingCut
	)];
	TestRows = nonExcludedRows[Loc( dt[nonExcludedRows, "Cutpoint Valid"], 2 )];
	TestRowsOracle = nonExcludedRows[Loc( dt[nonExcludedRows, "Week of Year"] >= validCut )];
	Close( dt, nosave );
);
Random Reset( 123456789 );
```

**Code Explanation**:

1. Open data_table data
2. Randomly exclude 20% of rows.
3. Identify excluded rows.
4. Select non-excluded rows.
5. Introduce missing values in 5% of non-excluded rows.
6. Remove affected rows from non-excluded list.
7. Create validation column using cutpoints.
8. Extract unique week values from non-excluded rows.
9. Determine training and validation cutpoints.
10. Assign rows to training, validation, and test sets.



### Example 19
> **Summary**: Process of generating distribution analysis for continuous variables in a specified data table using the Distribution platform, with features such as random row selection, exclusion, and validation column creation.

<!-- Keywords: #JSLScriptingLanguage, #Distribution, #DataTableManipulation, #ValidationColumnCreation, #RandomRowSelection -->

**Code**:
```jsl
For( sim = 1, sim <= 5, sim++,
	dt = Open("data_table.jmp");
	dt << Select Randomly( 0.5 ) << Exclude( 1 );
	excludedRows = dt << Get Excluded Rows;
	nonExcludedRows = dt << Select Excluded << Invert Row Selection << Get Selected Rows;
	missingRows = nonExcludedRows[Random Index( N Row( nonExcludedRows ), 0.20 * N Row( nonExcludedRows ) )];
	dt[missingRows, "DATE"] = .;
	For( j = 1, j <= N Row( missingRows ), j++,
		Remove From( nonExcludedRows, Loc( nonExcludedRows, missingRows[j] )[1] )
	);
	dt << Make Validation Column(
		Cutpoint Column( :Week of Year ),
		Cutpoint Batch ID( :ID ),
		Training Set( 0.75 ),
		Validation Set( 0.15 ),
		Test Set( 0.10 ),
		New Column Name( "Cutpoint Valid " ),
		Validation Column Type( "Fixed" ),
		Go
	);
		
	dt << New Column( "Row", Numeric, "Continuous", Formula( Row() ) );
	Column( dt, "Row" ) << Suppress Eval( 1 );
	dt2 = dt << Subset( Output table name( "Non-Excluded Rows" ), Selected Rows( 1 ), All Columns( 1 ) );
	dt2 << Delete Columns( {"Cutpoint Valid"} );
	dt2 << Make Validation Column(
		Cutpoint Column( :Week of Year ),
		Cutpoint Batch ID( :ID ),
		Training Set( 0.75 ),
		Validation Set( 0.15 ),
		Test Set( 0.10 ),
		New Column Name( "Cutpoint Valid " ),
		Validation Column Type( "Fixed" ),
		Go
	);
	Close( dt, nosave );
	Close( dt2, nosave );
);
Random Reset( 123456789 );
```

**Code Explanation**:

1. Loop 5 times.
2. Open data table.
3. Select randomly 50% rows.
4. Exclude selected rows.
5. Get excluded rows.
6. Invert row selection.
7. Get non-excluded rows.
8. Randomly select 20% non-excluded rows.
9. Set DATE column to missing for selected rows.
10. Remove missing rows from non-excluded rows list.
11. Create validation column with fixed type.
12. Add "Row" column.
13. Suppress "Row" column evaluation.
14. Subset non-excluded rows.
15. Delete "Cutpoint Valid" column.
16. Create validation column again.
17. Close original table without saving.
18. Close subset table without saving.
19. Reset random seed.



### Example 20
> **Summary**: Generates a validation column for continuous variables in a specified data table, utilizing random sampling and exclusion techniques.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #ValidationColumnCreation, #RandomSampling, #ExclusionTechniques -->

**Code**:
```jsl
For( sim = 1, sim <= 5, sim++,
	dt = Open("data_table.jmp");
	dt << Select Randomly( 0.5 ) << Exclude( 1 );
	excludedRows = dt << Get Excluded Rows;
	nonExcludedRows = dt << Select Excluded << Invert Row Selection << Get Selected Rows;
	missingRows = nonExcludedRows[Random Index( N Row( nonExcludedRows ), 0.20 * N Row( nonExcludedRows ) )];
	dt[missingRows, "DATE"] = .;
	For( j = 1, j <= N Row( missingRows ), j++,
		Remove From( nonExcludedRows, Loc( nonExcludedRows, missingRows[j] )[1] )
	);
	dt << Make Validation Column(
		Cutpoint Column( :Week of Year ),
		Cutpoint Batch ID( :ID ),
		Training Set( 0.75 ),
		Validation Set( 0.15 ),
		Test Set( 0.10 ),
		New Column Name( "Cutpoint Valid " ),
		Validation Column Type( "Formula" ),
		Go
	);
		
	dt << New Column( "Row", Numeric, "Continuous", Formula( Row() ) );
	Column( dt, "Row" ) << Suppress Eval( 1 );
	dt2 = dt << Subset( Output table name( "Non-Excluded Rows" ), Selected Rows( 1 ), All Columns( 1 ) );
	dt2 << Delete Columns( {"Cutpoint Valid"} );
	dt2 << Make Validation Column(
		Cutpoint Column( :Week of Year ),
		Cutpoint Batch ID( :ID ),
		Training Set( 0.75 ),
		Validation Set( 0.15 ),
		Test Set( 0.10 ),
		New Column Name( "Cutpoint Valid " ),
		Validation Column Type( "Formula" ),
		Go
	);
	Close( dt, nosave );
	Close( dt2, nosave );
);
Random Reset( 123456789 );
```

**Code Explanation**:

1. Loop 5 times.
2. Open data table.
3. Randomly select 50% rows.
4. Exclude selected rows.
5. Get excluded rows.
6. Get non-excluded rows.
7. Randomly select 20% non-excluded rows.
8. Set DATE to missing for selected rows.
9. Remove missing rows from non-excluded list.
10. Create validation column.
11. Add Row column.
12. Suppress Row column evaluation.
13. Subset non-excluded rows.
14. Delete Cutpoint Valid column.
15. Create validation column in subset.
16. Close original table.
17. Close subset table.
18. Reset random seed.



### Example 21
> **Summary**: Process of generating a random validation column and calculating proportions for training, validation, and test sets in a specified data table.

<!-- Keywords: #JSLScripting, #DataManipulation, #RandomSampling, #ValidationSets, #ProportionCalculation -->

**Code**:
```jsl
For( sim = 1, sim <= 5, sim++,
	dt = Open("data_table.jmp");
	dt << Select Randomly( 0.45 ) << Exclude( 1 );
	excludedRows = dt << Get Excluded Rows;
	nonExcludedRows = dt << Select Excluded << Invert Row Selection << Get Selected Rows;
	dt << Make Validation Column(
		Training Set( 0.6 ),
		Validation Set( 0.2 ),
		Test Set( 0.2 ),
		New Column Name( "Random Valid " ),
		Validation Column Type( "Fixed" ),
		Go
	);
		
	n = N Row( nonExcludedRows );
	propTraining = N Row( Loc( dt[nonExcludedRows, "Random Valid"], 0 ) ) / n;
	propValid = N Row( Loc( dt[nonExcludedRows, "Random Valid"], 1 ) ) / n;
	propTest = N Row( Loc( dt[nonExcludedRows, "Random Valid"], 2 ) ) / n;
	Close( dt, nosave );
);
Random Reset( 123456789 );
```

**Code Explanation**:

1. Loop through simulations.
2. Open data table.
3. Select rows randomly.
4. Exclude selected rows.
5. Get excluded rows.
6. Get non-excluded rows.
7. Create validation column.
8. Count non-excluded rows.
9. Calculate training set proportion.
10. Calculate validation set proportion.
11. Calculate test set proportion.
12. Close data table without saving.
13. Reset random seed.



### Example 22
> **Summary**: Process of generating a random validation column in a data table, splitting rows into training, validation, and test sets.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #RandomSampling, #ValidationColumn, #Simulation -->

**Code**:
```jsl
For( sim = 1, sim <= 5, sim++,
	dt = Open("data_table.jmp");
	dt << Select Randomly( 0.6 ) << Exclude( 1 );
	excludedRows = dt << Get Excluded Rows;
	nonExcludedRows = dt << Select Excluded << Invert Row Selection << Get Selected Rows;
	dt << Make Validation Column(
		Training Set( 0.7 ),
		Validation Set( 0.2 ),
		Test Set( 0.1 ),
		New Column Name( "Random Valid " ),
		Validation Column Type( "Formula" ),
		Go
	);
		
	n = N Row( nonExcludedRows );
	propTraining = N Row( Loc( dt[nonExcludedRows, "Random Valid"], 0 ) ) / n;
	propValid = N Row( Loc( dt[nonExcludedRows, "Random Valid"], 1 ) ) / n;
	propTest = N Row( Loc( dt[nonExcludedRows, "Random Valid"], 2 ) ) / n;
	Close( dt, nosave );
);
```

**Code Explanation**:

1. Loop through simulations.
2. Open data table.
3. Select rows randomly.
4. Exclude selected rows.
5. Get excluded row indices.
6. Get non-excluded row indices.
7. Create validation column.
8. Calculate number of non-excluded rows.
9. Calculate training set proportion.
10. Calculate validation set proportion.
11. Calculate test set proportion.
12. Close table without saving.



## Make Validation Column using Select Randomly
### Example 1
> **Summary**: Process of creating fixed and formula validation columns in a JMP data table, utilizing random sampling and row exclusion techniques.

<!-- Keywords: #JMPScriptingLanguage, #DataPreprocessing, #ValidationColumns, #RandomSampling, #RowExclusion -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Randomly( 0.5 ) << Exclude( 1 );
excludedRows = dt << Get Excluded Rows;
nonExcludedRows = dt << Select Excluded << Invert Row Selection << Get Selected Rows;
missingRows = nonExcludedRows[Random Index( N Row( nonExcludedRows ), 0.20 * N Row( nonExcludedRows ) )];
dt[missingRows, "DATE"] = .;
For( j = 1, j <= N Row( missingRows ), j++,
	Remove From( nonExcludedRows, Loc( nonExcludedRows, missingRows[j] )[1] )
);
randTraining = Round( Random Uniform( 0.2, 0.9 ), 2 );
randValidation = Round( Random Uniform( 0, 1 - randTraining ), 2 );
randTest = 1 - randTraining - randValidation;
dt << Make Validation Column(
	Cutpoint Column( :Week of Year ),
	Cutpoint Batch ID( :ID ),
	Training Set( Eval( randTraining ) ),
	Validation Set( Eval( randValidation ) ),
	Test Set( Eval( randTest ) ),
	New Column Name( "Fixed Validation " ),
	Validation Column Type( "Fixed" ),
	Go
);
dt << Make Validation Column(
	Cutpoint Column( :Week of Year ),
	Cutpoint Batch ID( :ID ),
	Training Set( Eval( randTraining ) ),
	Validation Set( Eval( randValidation ) ),
	Test Set( Eval( randTest ) ),
	New Column Name( "Formula Validation" ),
	Validation Column Type( "Formula" ),
	Go
);
```

**Code Explanation**:

1. Open data table.
2. Randomly select half rows.
3. Exclude selected rows.
4. Get excluded rows.
5. Invert row selection.
6. Get non-excluded rows.
7. Randomly select 20% rows.
8. Set DATE to missing for selected rows.
9. Remove missing rows from non-excluded.
10. Create fixed validation column.
11. Create formula validation column.



### Example 2
> **Summary**: Process of selecting and summarizing data, introducing missing values, and creating validation columns in JMP.

<!-- Keywords: #JMPScriptingLanguage, #DataSelection, #MissingValues, #ValidationColumns, #SummaryStatistics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Randomly( Round( Random Uniform( 0, 0.75 ), 2 ) ) << Exclude( 1 );
excludedRows = dt << Get Excluded Rows;
nonExcludedRows = dt << Select Excluded << Invert Row Selection << Get Selected Rows;
missingRows = nonExcludedRows[Random Index( N Row( nonExcludedRows ), 0.20 * N Row( nonExcludedRows ) )];
dt[missingRows, "DATE"] = .;
For( j = 1, j <= N Row( missingRows ), j++,
	Remove From( nonExcludedRows, Loc( nonExcludedRows, missingRows[j] )[1] )
);
dt2 = dt << Subset( Selected Rows( 1 ), All Columns( 1 ), Invisible( 1 ) );
dtSub = dt2 << Summary( Group( :ID ), N Missing( :Week of Year ), Freq( "None" ), Weight( "None" ), Invisible( 1 ) );
dtSub << New Column( "Batch Size", Numeric, "Continuous", Formula( :N Rows - :"N Missing(Week of Year)"n ) );
nRowsBatch = Min( dtSub[0, "Batch Size"] );
randTraining = Random Integer( 1, nRowsBatch );
If( randTraining < nRowsBatch,
	randValidation = Random Integer( 1, nRowsBatch - randTraining ),
	randValidation = 0
);
randTest = nRowsBatch - randTraining - randValidation;
dt << Make Validation Column(
	Cutpoint Column( :Week of Year ),
	Cutpoint Batch ID( :ID ),
	Training Set( Eval( randTraining ) ),
	Validation Set( Eval( randValidation ) ),
	Test Set( Eval( randTest ) ),
	New Column Name( "Fixed Validation " ),
	Validation Column Type( "Fixed" ),
	Determine Cutpoints Using( "Numbers of Rows" ),
	Go
);
dt << Make Validation Column(
	Cutpoint Column( :Week of Year ),
	Cutpoint Batch ID( :ID ),
	Training Set( Eval( randTraining ) ),
	Validation Set( Eval( randValidation ) ),
	Test Set( Eval( randTest ) ),
	New Column Name( "Formula Validation" ),
	Validation Column Type( "Formula" ),
	Determine Cutpoints Using( "Numbers of Rows" ),
	Go
);
Close( dt, nosave );
```

**Code Explanation**:

1. Open data table.
2. Randomly select rows.
3. Exclude selected rows.
4. Get excluded rows.
5. Select non-excluded rows.
6. Introduce missing values.
7. Update row selection.
8. Create subset table.
9. Summarize data by ID.
10. Add batch size column.
11. Determine batch sizes.
12. Assign random training, validation, test sets.
13. Create fixed validation column.
14. Create formula validation column.
15. Close table without saving.



### Example 3
> **Summary**: Creates a data table with new columns for 'Min Week', 'Max Week', and 'Elapsed Time' by selecting random rows, excluding selected rows, and calculating elapsed time.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManipulation, #ColumnCreation, #RandomSelection, #TimeSeriesAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Randomly( Round( Random Uniform( 0, 0.75 ), 2 ) ) << Exclude( 1 );
dt2 = dt << Clear Select << Select Excluded << Invert Row Selection << Subset( Selected Rows( 1 ), All Columns( 1 ), Invisible( 1 ) );
dt2 << New Column( "Min Week", Numeric, "Continuous", Formula( Col Min( :Week of Year, :ID ) ) );
dt2 << New Column( "Max Week", Numeric, "Continuous", Formula( Col Max( :Week of Year, :ID ) ) );
dt2 << New Column( "Elapsed Time", Numeric, "Continuous", Formula( :Max Week - :Min Week ) );
minElapsed = Min( dt2[0, "Elapsed Time"] );
randTraining = Random Integer( 0, minElapsed );
randValidation = Random Integer( 0, minElapsed - randTraining );
randTest = minElapsed - randTraining - randValidation;
dt << Make Validation Column(
	Cutpoint Column( :Week of Year ),
	Cutpoint Batch ID( :ID ),
	Training Set( Eval( randTraining ) ),
	Validation Set( Eval( randValidation ) ),
	Test Set( Eval( randTest ) ),
	New Column Name( "Fixed Validation " ),
	Validation Column Type( "Fixed" ),
	Determine Cutpoints Using( "Elapsed Time" ),
	Go
);
dt << Make Validation Column(
	Cutpoint Column( :Week of Year ),
	Cutpoint Batch ID( :ID ),
	Training Set( Eval( randTraining ) ),
	Validation Set( Eval( randValidation ) ),
	Test Set( Eval( randTest ) ),
	New Column Name( "Formula Validation" ),
	Validation Column Type( "Formula" ),
	Determine Cutpoints Using( "Elapsed Time" ),
	Go
);
```

**Code Explanation**:

1. Open data table.
2. Randomly select rows.
3. Exclude selected rows.
4. Create new table with excluded rows.
5. Add "Min Week" column.
6. Add "Max Week" column.
7. Add "Elapsed Time" column.
8. Calculate minimum elapsed time.
9. Generate random training size.
10. Generate random validation size.
11. Generate random test size.
12. Create fixed validation column.
13. Create formula validation column.



### Example 4
> **Summary**: Process of selecting random rows, excluding and removing missing values, creating subsets, summarizing data by ID, and generating validation columns in JMP.

<!-- Keywords: #JMPScriptingLanguage, #DataPreprocessing, #ValidationColumns, #SubsetCreation, #SummaryStatistics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Randomly( Round( Random Uniform( 0, 0.75 ), 2 ) ) << Exclude( 1 );
excludedRows = dt << Get Excluded Rows;
nonExcludedRows = dt << Select Excluded << Invert Row Selection << Get Selected Rows;
missingRows = nonExcludedRows[Random Index( N Row( nonExcludedRows ), 0.20 * N Row( nonExcludedRows ) )];
dt[missingRows, "DATE"] = .;
For( j = 1, j <= N Row( missingRows ), j++,
	Remove From( nonExcludedRows, Loc( nonExcludedRows, missingRows[j] )[1] )
);
dt2 = dt << Subset( Selected Rows( 1 ), All Columns( 1 ), Invisible( 1 ) );
dtSub = dt2 << Summary( Group( :ID ), N Missing( :Week of Year ), Freq( "None" ), Weight( "None" ), Invisible( 1 ) );
dtSub << New Column( "Batch Size", Numeric, "Continuous", Formula( :N Rows - :"N Missing(Week of Year)"n ) );
nRowsBatch = Min( dtSub[0, "Batch Size"] );
randTraining = Random Integer( 1, nRowsBatch );
If( randTraining < nRowsBatch,
	randValidation = Random Integer( 1, nRowsBatch - randTraining ),
	randValidation = 0
);
randTest = nRowsBatch - randTraining - randValidation;
dt << Make Validation Column(
	Cutpoint Column( :Week of Year ),
	Cutpoint Batch ID( :ID ),
	Training Set( Eval( randTraining ) ),
	Validation Set( Eval( randValidation ) ),
	Test Set( Eval( randTest ) ),
	New Column Name( "Fixed Validation " ),
	Validation Column Type( "Fixed" ),
	Determine Cutpoints Using( "Numbers of Rows" ),
	Go
);
dt << Make Validation Column(
	Cutpoint Column( :Week of Year ),
	Cutpoint Batch ID( :ID ),
	Training Set( Eval( randTraining ) ),
	Validation Set( Eval( randValidation ) ),
	Test Set( Eval( randTest ) ),
	New Column Name( "Formula Validation" ),
	Validation Column Type( "Formula" ),
	Determine Cutpoints Using( "Numbers of Rows" ),
	Go
);
```

**Code Explanation**:

1. Open data table.
2. Select rows randomly.
3. Exclude selected rows.
4. Get excluded rows.
5. Invert row selection.
6. Select non-excluded rows.
7. Randomly select missing rows.
8. Set DATE to missing for selected rows.
9. Remove missing rows from non-excluded.
10. Create subset of data.
11. Summarize data by ID.
12. Add batch size column.
13. Calculate minimum batch size.
14. Generate random training size.
15. Generate random validation size.
16. Calculate test size.
17. Create fixed validation column.
18. Create formula validation column.



## Make Validation Column using Random Integer
### Example 1
> **Summary**: Creates a validation column in JMP, using stratification and grouping columns to partition data for model evaluation.

<!-- Keywords: #JMPValidation, #Stratification, #GroupingColumns, #RandomFolding, #DataPreprocessing -->

**Code**:
```jsl
dt = Open("data_table.jmp");
nFolds = Random Integer( 4, 16 );
dt << Make Validation Column(
	Y( :TAVG ),
	Stratification Columns( :Latitude ),
	Grouping Columns( :NAME ),
	Number of Folds( nFolds ),
	Validation Column Type( "Fixed" ),
	Random Seed( 123 ),
	Go
);
```

**Code Explanation**:

1. Open data table;
2. Generate random number for folds.
3. Create validation column.
4. Set response variable.
5. Define stratification columns.
6. Define grouping columns.
7. Specify number of folds.
8. Set validation type to fixed.
9. Set random seed.
10. Execute validation creation.



### Example 2
> **Summary**: Creates a validation column in JMP, using random stratification and fixed validation type.

<!-- Keywords: #JMPScriptingLanguage, #DataValidation, #Stratification, #RandomSeed, #FixedValidation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
nFolds = Random Integer( 4, 16 );
dt << Make Validation Column(
	Y( :Steel Shipments ),
	Stratification Columns( :Date ),
	Number of Folds( nFolds ),
	Validation Column Type( "Fixed" ),
	Random Seed( 456 ),
	Go
);
```

**Code Explanation**:

1. Open data table.
2. Generate random integer.
3. Define validation column.
4. Set response variable.
5. Specify stratification columns.
6. Set number of folds.
7. Choose fixed validation type.
8. Set random seed.
9. Execute validation creation.



## Make Validation Column using Associative Array
### Example 1
> **Summary**: Creates and manipulates a validation column in JMP, using cutpoints based on elapsed time and batch ID, while selecting specific series rows and deleting unnecessary data.

<!-- Keywords: #JMPScriptingLanguage, #ValidationColumn, #CutpointAnalysis, #DataManipulation, #SeriesSelection -->

**Code**:
```jsl
dt = Open("data_table.jmp");
allSeries = Associative Array( dt[0, 1] ) << Get Keys;
obj = Make Validation Column(
	Cutpoint Column( :Time ),
	Cutpoint Batch ID( :Series ),
	Training Set( 268185600 ),
	Validation Set( 0 ),
	Test Set( 7948800 ),
	Determine cutpoints using( "Elapsed Time" ),
	Go
);
dt << Select Where( :Series == "N 646" | :Series == "N 647" ) << Invert Row Selection << Delete Rows();
obj = Make Validation Column(
	Cutpoint Column( :Time ),
	Cutpoint Batch ID( :Series ),
	Training Set( 331257600 ),
	Validation Set( 0 ),
	Test Set( 7948800 ),
	Determine cutpoints using( "Elapsed Time" ),
	Go
);
Close( dt, nosave );
Random Reset( 123 );
```

**Code Explanation**:

1. Open data_table data
2. Get all series keys.
3. Create validation column.
4. Set cutpoint column to Time.
5. Set cutpoint batch ID to Series.
6. Define training set start.
7. Define validation set size.
8. Define test set size.
9. Use elapsed time for cutpoints.
10. Execute validation column creation.
11. Select specific series rows.
12. Invert row selection.
13. Delete selected rows.
14. Create new validation column.
15. Set new training set start.
16. Close data table without saving.
17. Reset random seed.



### Example 2
> **Summary**: Creates and configures validation columns in JMP, utilizing cutpoints based on elapsed time.

<!-- Keywords: #JMPScriptingLanguage, #ValidationColumn, #CutpointAnalysis, #DataSelection, #TimeSeriesAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
allSeries = Associative Array( dt[0, 1] ) << Get Keys;
obj = Make Validation Column(
	Cutpoint Column( :Time ),
	Cutpoint Batch ID( :Series ),
	Training Set( 268185600 ),
	Validation Set( 0 ),
	Test Set( 7948800 ),
	Determine cutpoints using( "Elapsed Time" ),
	Go
);
dt << Select Where( :Series == "N 646" | :Series == "N 647" ) << Invert Row Selection << Delete Rows();
obj = Make Validation Column(
	Cutpoint Column( :Time ),
	Cutpoint Batch ID( :Series ),
	Training Set( 331257600 ),
	Validation Set( 0 ),
	Test Set( 7948800 ),
	Determine cutpoints using( "Elapsed Time" ),
	Go
);
```

**Code Explanation**:

1. Open data table;
2. Retrieve all series keys.
3. Create validation column.
4. Define cutpoint column.
5. Define cutpoint batch ID.
6. Set training period.
7. Set validation period.
8. Set test period.
9. Use elapsed time for cutpoints.
10. Execute validation creation.
11. Select specific rows.
12. Invert row selection.
13. Delete selected rows.
14. Create another validation column.
15. Define new cutpoint column.
16. Define new cutpoint batch ID.
17. Set new training period.
18. Set new validation period.
19. Set new test period.
20. Use elapsed time for new cutpoints.
21. Execute new validation creation.



### Example 3
> **Summary**: Creates a validation column in JMP, grouping data by age and excluding random rows for training, validation, and testing sets.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManipulation, #ValidationColumn, #Grouping, #RandomSampling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
myGroups = Associative Array( dt[0, "age"] ) << Get Keys;
For( i = 1, i <= 5, i++,
	toExclude = Random Index( Length( myGroups ), Random Integer( 0, Length( myGroups ) ) );
	excludedRows = [];
	For( j = 1, j <= N Row( toExclude ), j++,
		excludedRows |/= (dt << Select Where( :age == myGroups[toExclude[j]] ) << Get Selected Rows)
	);
	dt << Select Rows( excludedRows ) << Exclude( 1 );
	obj = dt << Make Validation Column(
		Grouping Columns( :age ),
		Training Set( 0.7 ),
		Validation Set( 0.2 ),
		Test Set( 0.1 ),
		New Column Name( "Grouped Valid" ),
		Validation Column Type( "Formula" )
	);
	obj << close window;
	dt << Clear Row States;
);
```

**Code Explanation**:

1. Open data table.
2. Retrieve unique ages.
3. Loop 5 times.
4. Randomly select age groups to exclude.
5. Initialize empty list for excluded rows.
6. Loop through selected age groups.
7. Find rows matching selected age group.
8. Add selected rows to excluded list.
9. Exclude selected rows from data table.
10. Create validation column with specified sets.
11. Close validation column window.
12. Clear row states in data table.



## Make Validation Column using Round
> **Summary**: Creates a validation column in a JMP data table, stratified by 'Fat' and grouped by 'Manufacturer', with random training and validation sets.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #ValidationColumn, #Stratification, #RandomSeed -->

**Code**:
```jsl
dt = Open("data_table.jmp");
ts = Round( Random Uniform( 0.5, 0.75 ), 2 );
vs = 1 - ts;
seed = Random Integer( 123456789 );
dt << Make Validation Column(
	Stratification Columns( :Fat ),
	Grouping Columns( :Manufacturer ),
	Training Set( ts ),
	Validation Set( vs ),
	Random Seed( seed )
);
```

**Code Explanation**:

1. Open data table;
2. Generate random training proportion.
3. Calculate validation proportion.
4. Set random seed.
5. Create validation column.
6. Stratify by Fat.
7. Group by Manufacturer.
8. Define training set size.
9. Define validation set size.
10. Apply random seed.



## Make Validation Column using N Row
> **Summary**: Creates and processes validation columns for a data table, utilizing random seed generation and grouping by age.

<!-- Keywords: #JSLScriptingLanguage, #ValidationColumn, #DataTableProcessing, #RandomSeedGeneration, #Grouping -->

**Code**:
```jsl
dt = Open("data_table.jmp");
n = N Row( dt );
groupVals = Associative Array( dt[0, "age"] ) << Get Keys;
nGroups = Length( groupVals );
For( i = 4, i <= nGroups, i++,
	randSeed = Random Integer( 11111, 123456789 );
	Random Reset( randSeed );
	obj = dt << Make Validation Column(
		Y( :weight ),
		Grouping Columns( :age ),
		Number of Folds( Eval( i ) ),
		Validation Column Type( "Formula" )
	);
	obj << Go;
	myFolds = Associative Array( dt[0, Char( i ) || " Fold Column"] ) << Get Keys;
	colFormula = Collapse Whitespace( Char( Column( dt, Char( i ) || " Fold Column" ) << Get Formula ) );
	For( j = 1, j <= nGroups, j++,
		foldVals = dt[Loc( dt[0, "age"], groupVals[j] ), Char( i ) || " Fold Column"]
	);
);
```

**Code Explanation**:

1. Open data table;
2. Count rows in dataset.
3. Extract unique age values.
4. Determine number of groups.
5. Loop through group count starting from 4.
6. Generate random seed.
7. Reset random seed.
8. Create validation column.
9. Set formula for validation column.
10. Extract and process fold column data.



## Make Validation Column using Select Rows
> **Summary**: Creates fixed validation columns for weight, stratified by height and grouped by age in a JMP data table.

<!-- Keywords: #JMPValidation, #DataTableManagement, #FixedValidationColumn, #Stratification, #Grouping -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Rows( 1 :: 40 ) << Exclude( 1 );
dt << Make Validation Column( Y( :weight ), Number of Folds( 4 ), Validation Column Type( "Fixed" ), Random Seed( 12345 ), Go );
dt << Make Validation Column(
	Y( :weight ),
	Stratification Columns( :height ),
	Number of Folds( 4 ),
	Validation Column Type( "Fixed" ),
	Random Seed( 12345 ),
	Go
);
Log Capture(
	obj = dt << Make Validation Column(
		Y( :weight ),
		Grouping Columns( :age ),
		Number of Folds( 4 ),
		Validation Column Type( "Fixed" ),
		Random Seed( 12345 ),
		Go
	)
);
Log Capture(
	obj = dt << Make Validation Column(
		Y( :weight ),
		Stratification Columns( :height ),
		Grouping Columns( :age ),
		Number of Folds( 4 ),
		Validation Column Type( "Fixed" ),
		Random Seed( 12345 ),
		Go
	)
);
```

**Code Explanation**:

1. Open data table.
2. Select rows 1 to 40.
3. Exclude selected rows.
4. Create fixed validation column for weight.
5. Set number of folds to 4.
6. Use random seed 12345.
7. Create another fixed validation column for weight.
8. Stratify by height.
9. Create third fixed validation column for weight.
10. Group by age.
11. Stratify by height.
12. Group by age.



## Make Validation Column using Random Reset
### Example 1
> **Summary**: Creates a validation column in JMP, utilizing random sampling and formula-based validation with 4 folds.

<!-- Keywords: #JMPScripting, #ValidationColumn, #RandomSampling, #FormulaValidation, #DataPreprocessing -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Random Reset( 123 );
dt[Random Index( 40, 10 ), "weight"] = .;
obj = dt << Make Validation Column( Y( :weight ), Number of Folds( 4 ), Validation Column Type( "Formula" ), Go );
```

**Code Explanation**:

1. Open data table.
2. Reset random seed.
3. Randomly select rows.
4. Set selected weights to missing.
5. Create validation column.
6. Specify weight as response.
7. Set number of folds to 4.
8. Use formula for validation.
9. Execute validation creation.



### Example 2
> **Summary**: Creates a validation column in JMP, using random sampling and stratification to validate weight data based on height.

<!-- Keywords: #JMPScriptingLanguage, #ValidationColumn, #RandomSampling, #Stratification, #DataValidation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Random Reset( 123 );
dt[Random Index( 40, 10 ), "height"] = .;
obj = dt << Make Validation Column( Y( :weight ), Stratification Columns( :height ), Validation Column Type( "Formula" ), Go );
```

**Code Explanation**:

1. Open data table.
2. Set random seed.
3. Replace 40 height values randomly.
4. Create validation column.
5. Specify weight as outcome.
6. Use height for stratification.
7. Set validation type to formula.
8. Execute validation column creation.



### Example 3
> **Summary**: Creates a validation column in JMP, utilizing random sampling and grouping by age to validate weight data.

<!-- Keywords: #JMPScriptingLanguage, #ValidationColumn, #RandomSampling, #Grouping, #DataValidation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Random Reset( 123 );
dt[Random Index( 40, 10 ), "age"] = .;
obj = dt << Make Validation Column(
	Y( :weight ),
	Grouping Columns( :age ),
	Validation Column Type( "Fixed" ),
	Random Seed( 123456789 ),
	Go
);
```

**Code Explanation**:

1. Open data table;
2. Set random seed for reproducibility.
3. Remove 10 random age values.
4. Create validation column.
5. Set response variable to weight.
6. Use age for grouping.
7. Specify fixed validation type.
8. Set random seed for validation.
9. Execute validation creation.



### Example 4
> **Summary**: Creates a validation column in JMP, utilizing random sampling and grouping by age and sex to validate weight data.

<!-- Keywords: #JMPScriptingLanguage, #ValidationColumn, #RandomSampling, #DataPreprocessing, #StatisticalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Random Reset( 123 );
dt[Random Index( 40, 10 ), "age"] = .;
dt[Random Index( 40, 10 ), "sex"] = "";
obj = dt << Make Validation Column(
	Y( :weight ),
	Grouping Columns( :age, :sex ),
	Validation Column Type( "Fixed" ),
	Random Seed( 123456789 ),
	Go
);
expectedMissing = Matrix( Associative Array( Loc( dt[0, "sex"], "" ) |/ Loc( Is Missing( dt[0, "age"] ) ) ) << Get Keys );
```

**Code Explanation**:

1. Open data table.
2. Set random seed.
3. Randomly remove age values.
4. Randomly remove sex values.
5. Create validation column.
6. Specify weight as outcome.
7. Use age and sex for grouping.
8. Set validation type to fixed.
9. Set random seed for validation.
10. Execute validation creation.



### Example 5
> **Summary**: Creates a validation column for weight data, stratified by height and grouped by age and sex, with random missing values introduced in height, age, and sex.

<!-- Keywords: #JSLScriptingLanguage, #ValidationColumn, #Stratification, #Grouping, #RandomMissingValues -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Random Reset( 123 );
dt[Random Index( 40, 10 ), "height"] = .;
dt[Random Index( 40, 10 ), "age"] = .;
dt[Random Index( 40, 10 ), "sex"] = "";
obj = dt << Make Validation Column(
	Y( :weight ),
	Stratification Columns( :height ),
	Grouping Columns( :age, :sex ),
	Validation Column Type( "Fixed" ),
	Random Seed( 123456789 ),
	Go
);
expectedMissing = Matrix(
	Associative Array( Loc( dt[0, "sex"], "" ) |/ Loc( Is Missing( dt[0, "age"] ) ) |/ Loc( Is Missing( dt[0, "height"] ) ) ) << Get Keys
);
```

**Code Explanation**:

1. Open data table.
2. Set random seed for reproducibility.
3. Introduce missing values randomly in height.
4. Introduce missing values randomly in age.
5. Introduce empty strings randomly in sex.
6. Create validation column for weight.
7. Stratify by height.
8. Group by age and sex.
9. Use fixed validation type.
10. Set random seed for validation.



### Example 6
> **Summary**: Prepares data by opening a JMP data table, randomly removing values, creating a validation column, and identifying missing locations.

<!-- Keywords: #JMPScriptingLanguage, #DataPreparation, #ValidationColumn, #RandomSampling, #MissingValues -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Random Reset( 123 );
dt[Random Index( 40, 5 ), "height"] = .;
dt[Random Index( 40, 10 ), "weight"] = .;
obj = dt << Make Validation Column( Y( :weight ), Number of Folds( 4 ), Validation Column Type( "Formula" ), Go );
missingLoc = Loc( Is Missing( dt[0, "weight"] ) );
nonMissingLoc = Loc( !Is Missing( dt[0, "weight"] ) );
Close( dt, nosave );
Random Reset( 123 );
```

**Code Explanation**:

1. Open data table;
2. Set random seed to 123.
3. Randomly remove 40% of heights.
4. Randomly remove 10% of weights.
5. Create validation column for weight.
6. Identify missing weight locations.
7. Identify non-missing weight locations.
8. Close dataset without saving.
9. Reset random seed to 123.



### Example 7
> **Summary**: Creates a validation column in JMP, utilizing random sampling and stratification to validate model performance.

<!-- Keywords: #JMPScriptingLanguage, #ValidationColumn, #RandomSampling, #Stratification, #DataPreprocessing -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Random Reset( 123 );
dt[Random Index( 40, 10 ), "height"] = .;
dt[Random Index( 40, 10 ), "age"] = .;
obj = dt << Make Validation Column(
	Y( :weight ),
	Stratification Columns( :height ),
	Grouping Columns( :age ),
	Number of Folds( 4 ),
	Validation Column Type( "Fixed" ),
	Random Seed( 123456789 ),
	Go
);
missingLoc = dt << Clear Select << Select Where( Is Missing( :height ) | Is Missing( :age ) ) << Get Selected Rows;
nonMissingLoc = dt << Invert Row Selection << Get Selected Rows;
```

**Code Explanation**:

1. Open data table.
2. Reset random seed.
3. Set random height values to missing.
4. Set random age values to missing.
5. Create validation column.
6. Specify weight as response variable.
7. Use height for stratification.
8. Use age for grouping.
9. Define 4 folds.
10. Set validation type to fixed.
11. Set random seed for validation.
12. Execute validation creation.
13. Clear previous selections.
14. Select rows with missing height or age.
15. Retrieve selected rows with missing values.
16. Invert row selection.
17. Retrieve non-missing rows.



### Example 8
> **Summary**: Creates a validation column with stratification and random sampling, utilizing Make Validation Column in JMP.

<!-- Keywords: #JMPScriptingLanguage, #MakeValidationColumn, #Stratification, #RandomSampling, #DataPreparation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Random Reset( 123 );
dt[Random Index( 40, 10 ), "height"] = .;
dt[Random Index( 40, 10 ), "age"] = .;
obj = dt << Make Validation Column(
	Y( :weight ),
	Stratification Columns( :height, :age ),
	Number of Folds( 4 ),
	Validation Column Type( "Fixed" ),
	Random Seed( 123456789 ),
	Go
);
```

**Code Explanation**:

1. Open data table;
2. Set random seed.
3. Randomly select 40 rows for height.
4. Set selected height values to missing.
5. Randomly select 40 rows for age.
6. Set selected age values to missing.
7. Create validation column.
8. Specify weight as response variable.
9. Use height and age for stratification.
10. Set number of folds to 4.



### Example 9
> **Summary**: Creates a validation column in JMP, utilizing stratification columns and random seed for consistency.

<!-- Keywords: #JMPScriptingLanguage, #ValidationColumn, #StratificationColumns, #RandomSeed, #DataTableManipulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Random Reset( 123 );
dt[Random Index( 40, 20 ), "height"] = .;
dt[Random Index( 40, 20 ), "age"] = .;
obj = dt << Make Validation Column(
	Y( :weight ),
	Stratification Columns( :height, :age ),
	Number of Folds( 4 ),
	Validation Column Type( "Fixed" ),
	Random Seed( 123456789 ),
	Go
);
```

**Code Explanation**:

1. Open data table.
2. Reset random seed.
3. Delete random height values.
4. Delete random age values.
5. Create validation column.
6. Set response variable to weight.
7. Use height and age for stratification.
8. Define number of folds as 4.
9. Set validation type to fixed.
10. Apply random seed for consistency.



### Example 10
> **Summary**: Creates a validation column in JMP, utilizing random sampling and stratification for data analysis.

<!-- Keywords: #JMPScriptingLanguage, #ValidationColumn, #RandomSampling, #Stratification, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Random Reset( 123 );
dt[Random Index( 40, 20 ), "height"] = .;
dt[Random Index( 40, 20 ), "weight"] = .;
dt[Random Index( 40, 20 ), "age"] = .;
lc = Collapse Whitespace(
	Log Capture(
		obj = dt << Make Validation Column(
			Y( :weight ),
			Stratification Columns( :height, :weight ),
			Grouping Columns( :age ),
			Number of Folds( 6 ),
			Validation Column Type( "Fixed" ),
			Random Seed( 123456789 ),
			Go
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Set random seed to 123.
3. Randomly select 40 rows for height.
4. Randomly select 40 rows for weight.
5. Randomly select 40 rows for age.
6. Remove selected rows' data.
7. Collapse whitespace.
8. Log capture.
9. Create validation column.
10. Specify weight as response.
11. Use height and weight for stratification.
12. Use age for grouping.
13. Set number of folds to 6.
14. Set validation type to fixed.
15. Set random seed to 123456789.
16. Execute validation column creation.



### Example 11
> **Summary**: Creates a validation column for weight data, utilizing random sampling and cross-validation with 4 folds.

<!-- Keywords: #JSLScriptingLanguage, #DataManipulation, #ValidationColumn, #Cross-Validation, #RandomSampling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Random Reset( 123 );
dt[Random Index( 40, 5 ), "height"] = .;
dt[Random Index( 40, 10 ), "weight"] = .;
obj = dt << Make Validation Column( Y( :weight ), Number of Folds( 4 ), Validation Column Type( "Formula" ), Go );
missingLoc = Loc( Is Missing( dt[0, "weight"] ) );
nonMissingLoc = Loc( !Is Missing( dt[0, "weight"] ) );
```

**Code Explanation**:

1. Open data table;
2. Set random seed to 123.
3. Randomly remove 40 height values.
4. Randomly remove 40 weight values.
5. Create validation column for weight.
6. Use 4 folds for cross-validation.
7. Use formula for validation column type.
8. Execute the validation column creation.
9. Locate missing weight values.
10. Locate non-missing weight values.



## Make Validation Column using Random Index
### Example 1
> **Summary**: Creates a validation column and identification of missing values in a data table, utilizing Random Index to introduce random missingness.

<!-- Keywords: #JSLScriptingLanguage, #DataValidation, #MissingValues, #RandomSampling, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt[Random Index( 40, 20 ), "height"] = .;
dt[Random Index( 40, 20 ), "weight"] = .;
obj = dt << Make Validation Column( Y( :weight, :height ), Number of Folds( 5 ), Validation Column Type( "Fixed" ), Go );
missingLoc = dt << Clear Select << Select Where( Is Missing( :height ) & Is Missing( :weight ) ) << Get Selected Rows;
nonMissingLoc = dt << Invert Row Selection << Get Selected Rows;
```

**Code Explanation**:

1. Open data table.
2. Introduce missing values randomly.
3. Create validation column.
4. Identify rows with missing values.
5. Identify rows without missing values.



### Example 2
> **Summary**: Process of setting missing values, creating a validation column, and selecting non-missing rows in a JMP table.

<!-- Keywords: #JMPScriptingLanguage, #DataTableOperations, #ValidationColumn, #RowSelection, #MissingValues -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt[Random Index( N Row( dt ), 10 ), {"OZONE", "CO", "SO2", "NO", "PM10"}] = .;
obj = dt << Make Validation Column( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), Number of Folds( 6 ), Go );
missingLoc = dt << Clear Select << Select Where(
	Is Missing( :OZONE ) & Is Missing( :CO ) & Is Missing( :SO2 ) & Is Missing( :NO ) & Is Missing( :PM10 )
) << Get Selected Rows;
nonMissingLoc = dt << Invert Row Selection << Get Selected Rows;
```

**Code Explanation**:

1. Open table.
2. Set missing values.
3. Create validation column.
4. Clear selection.
5. Select missing rows.
6. Get selected rows.
7. Invert row selection.
8. Get selected rows.



### Example 3
> **Summary**: Modifies a data table by randomly setting 5% of values in columns 2 to 39 to missing, and then creates a validation column with stratification and response variable.

<!-- Keywords: #JSLScripting, #DataModification, #ValidationColumn, #Stratification, #RandomSampling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
x = dt[0, 2 :: 39];
x[Random Index( 527 * 38, .05 * 527 * 38 )] = .;
dt[0, 2 :: 39] = x;
dt << Make Validation Column(
	Y( :Date ),
	Stratification Columns(
		:"Q-E"n, :"ZN-E"n, :"PH-E"n, :"DBO-E"n, :"DQO-E"n, :"SS-E"n, :"SSV-E"n, :"SED-E"n, :"COND-E"n, :"PH-P"n, :"DBO-P"n, :"SS-P"n,
		:"SSV-P"n, :"SED-P"n, :"COND-P"n, :"PH-D"n, :"DBO-D"n, :"DQO-D"n, :"SS-D"n, :"SSV-D"n, :"SED-D"n, :"COND-D"n, :"PH-S"n, :"DBO-S"n,
		:"DQO-S"n, :"SS-S"n, :"SSV-S"n, :"SED-S"n, :"COND-S"n, :"RD-DBO-P"n, :"RD-SS-P"n, :"RD-SED-P"n, :"RD-DBO-S"n, :"RD-DQO-S"n,
		:"RD-DBO-G"n, :"RD-DQO-G"n, :"RD-SS-G"n, :"RD-SED-G"n
	),
	Number of Folds( 4 ),
	Go
);
```

**Code Explanation**:

1. Open data table;
2. Assign columns 2 to 39 to variable `x`.
3. Randomly set 5% of `x` values to missing.
4. Replace columns 2 to 39 in the data table with modified `x`.
5. Create validation column.
6. Set response variable as `:Date`.
7. Specify stratification columns.
8. Define number of folds as 4.
9. Execute validation column creation.




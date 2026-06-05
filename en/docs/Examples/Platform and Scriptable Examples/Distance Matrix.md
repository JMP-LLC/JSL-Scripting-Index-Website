# Distance Matrix

### Example 1
> **Summary**: Creates a distance matrix from an open data table in JMP.

<!-- Keywords: #JMPScriptingLanguage, #DistanceMatrix, #DataTable, #MatrixCalculation, #Automation -->

**Code**:
```jsl
Open("data_table.jmp");
Distance Matrix();
```

**Code Explanation**:

1. Open data table;
2. Create distance matrix.



### Example 2
> **Summary**: Creates a distance matrix from an open data table.

<!-- Keywords: #JSLScriptingLanguage, #DistanceMatrix, #DataTable, #JMPScripting, #MatrixOperations -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Distance Matrix();
```

**Code Explanation**:

1. Open data table;
2. Create distance matrix.



### Example 3
> **Summary**: Creates a distance matrix from a data table, allowing for interactive exploration and analysis.

<!-- Keywords: #JSLScriptingLanguage, #DistanceMatrix, #DataTable, #InteractiveAnalysis, #JMPScripting -->

**Code**:
```jsl
Open("data_table.jmp");
Distance Matrix();
dt = Open("data_table.jmp");
dt << Distance Matrix();
dt = Open("data_table.jmp");
```

**Code Explanation**:

1. Open data table;
2. Create distance matrix.
3. Open data table;
4. Create distance matrix on dataset.
5. Open data table;



### Example 4
> **Summary**: Creates a distance matrix using height and weight columns, replacing missing values with zero and applying a local data filter by weight.

<!-- Keywords: #JSLScriptingLanguage, #DistanceMatrix, #LocalDataFilter, #MissingValueImputation, #DataTable -->

**Code**:
```jsl
Open("data_table.jmp");
Distance Matrix( Y( :height, :weight ), Missing Value Imputation( 0 ), Local Data Filter( Add Filter( columns( :weight ) ) ) );
```

**Code Explanation**:

1. Open data table;
2. Create distance matrix.
3. Use height and weight columns.
4. Replace missing values with zero.
5. Add local data filter.
6. Filter by weight column.



### Example 5
> **Summary**: Creates a distance matrix for height and weight, with missing values imputed to 0, and filters data by height range using Local Data Filter, ultimately generating a report.

<!-- Keywords: #JSLScripting, #DistanceMatrix, #LocalDataFilter, #MissingValueImputation, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Distance Matrix( Y( :height, :weight ), Missing Value Imputation( 0 ), );
ldf = obj << Local Data Filter( Add Filter( columns( :height ), Where( :height >= 56.1 & :height <= 58.2 ) ) );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create distance matrix for height and weight.
3. Set missing values to 0.
4. Add local data filter.
5. Filter height between 56.1 and 58.2.
6. Generate report from distance matrix.



### Example 6
> **Summary**: Creates a distance matrix with missing value imputation and local data filtering for both height and weight columns, generating a report.

<!-- Keywords: #JMPScriptingLanguage, #DistanceMatrix, #LocalDataFilter, #MissingValueImputation, #ReportGeneration -->

**Code**:
```jsl
Open("data_table.jmp");
Distance Matrix( Y( :height, :weight ), Missing Value Imputation( 0 ), Local Data Filter( Add Filter( columns( :weight ) ) ) );
dt = Open("data_table.jmp");
obj = dt << Distance Matrix( Y( :height, :weight ), Missing Value Imputation( 0 ), );
ldf = obj << Local Data Filter( Add Filter( columns( :height ), Where( :height >= 56.1 & :height <= 58.2 ) ) );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create distance matrix.
3. Impute missing values with 0.
4. Add local data filter for weight.
5. Open data table;
6. Create distance matrix.
7. Impute missing values with 0.
8. Add local data filter for height.
9. Set filter criteria for height.
10. Generate report.



### Example 7
> **Summary**: Creates a distance matrix from a data table, selecting specific columns and filtering by species 'setosa'.

<!-- Keywords: #JMPScriptingLanguage, #DistanceMatrix, #DataTableFiltering, #ColumnSelection, #JSLScript -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Distance Matrix( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ), Where( :species == "setosa" ) );
```

**Code Explanation**:

1. Open data table;
2. Create distance matrix.
3. Select Sepal length.
4. Select Sepal width.
5. Select Petal length.
6. Select Petal width.
7. Filter species: setosa.



### Example 8
> **Summary**: Creates a distance matrix using Sepal length, Sepal width, Petal length, and Petal width variables from an open data table.

<!-- Keywords: #JSLScriptingLanguage, #DistanceMatrix, #DataTable, #JMP, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Distance Matrix( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ), Create New Tables for Results( 1 ) );
```

**Code Explanation**:

1. Open data table;
2. Create distance matrix.
3. Use Sepal length.
4. Use Sepal width.
5. Use Petal length.
6. Use Petal width.
7. Generate new tables.



### Example 9
> **Summary**: Creates a distance matrix object using the Bray-Curtis method, selecting variables from an open data table.

<!-- Keywords: #JMPScriptingLanguage, #DistanceMatrix, #BrayCurtisMethod, #DataTableOperations, #JSLScript -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Distance Matrix( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ), Method( "Bray-Curtis" ), );
```

**Code Explanation**:

1. Open data table;
2. Create distance matrix object.
3. Select variables for analysis.
4. Use Bray-Curtis method.



### Example 10
> **Summary**: Creates a distance matrix object from a data table, utilizing missing value imputation and incorporating Sepal length, Sepal width, Petal length, and Petal width variables.

<!-- Keywords: #JMPScriptingLanguage, #DistanceMatrix, #MissingValueImputation, #DataTableOperations, #Scripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Distance Matrix( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ), Missing Value Imputation( 1 ) );
```

**Code Explanation**:

1. Open data table;
2. Create distance matrix object.
3. Use Sepal length variable.
4. Use Sepal width variable.
5. Use Petal length variable.
6. Use Petal width variable.
7. Enable missing value imputation.



### Example 11
> **Summary**: Creates a distance matrix using height and weight variables, with sex as the categorical predictor, and imputes missing values with 0, while filtering data by the weight column.

<!-- Keywords: #JSLScriptingLanguage, #DistanceMatrix, #MissingValueImputation, #LocalDataFilter, #DataFiltering -->

**Code**:
```jsl
Open("data_table.jmp");
Distance Matrix( Y( :height, :weight ), X( :sex ), Missing Value Imputation( 0 ), Local Data Filter( Add Filter( columns( :weight ) ) ) );
```

**Code Explanation**:

1. Open data table;
2. Create Distance Matrix.
3. Use height and weight for Y.
4. Use sex for X.
5. Impute missing values with 0.
6. Add local data filter.
7. Filter by weight column.



### Example 12
> **Summary**: Creates a distance matrix from a data table, filtering by height range and generating a report.

<!-- Keywords: #JSLScriptingLanguage, #DistanceMatrix, #LocalDataFilter, #ReportGeneration, #DataTableManipulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Distance Matrix( Y( :height, :weight ), X( :sex ), Missing Value Imputation( 0 ), Number of Permutations( 5000 ) );
ldf = obj << Local Data Filter( Add Filter( columns( :height ), Where( :height >= 56.1 & :height <= 58.2 ) ) );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create distance matrix.
3. Set Y variables: height, weight.
4. Set X variable: sex.
5. Impute missing values as 0.
6. Set number of permutations to 5000.
7. Add local data filter.
8. Filter height between 56.1 and 58.2.
9. Generate report.



### Example 13
> **Summary**: Creates a distance matrix with height and weight variables, grouped by sex, and imputes missing values using 0. It also adds a local filter for height within a specific range.

<!-- Keywords: #DistanceMatrix, #LocalDataFilter, #MissingValueImputation, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
Open("data_table.jmp");
Distance Matrix( Y( :height, :weight ), X( :sex ), Missing Value Imputation( 0 ), Local Data Filter( Add Filter( columns( :weight ) ) ) );
dt = Open("data_table.jmp");
obj = dt << Distance Matrix( Y( :height, :weight ), X( :sex ), Missing Value Imputation( 0 ), Number of Permutations( 5000 ) );
ldf = obj << Local Data Filter( Add Filter( columns( :height ), Where( :height >= 56.1 & :height <= 58.2 ) ) );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create distance matrix with height, weight.
3. Set sex as grouping variable.
4. Impute missing values with 0.
5. Add local filter for weight.
6. Reopen sample data file.
7. Create distance matrix with height, weight.
8. Set sex as grouping variable.
9. Impute missing values with 0.
10. Perform 5000 permutations.



## Distance Matrix using If
### Example 1
> **Summary**: Creates distance matrices for multiple methods and imputation choices in JMP Pro, utilizing a nested loop structure to iterate through combinations.

<!-- Keywords: #JMPPro, #DistanceMatrix, #Imputation, #MethodChoice, #Scripting -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	MethodChoice = {"Euclidian", "Manhattan", "Gower", "Bray-Curtis", "Jaccard", "Binary", "Hamming"};
	ImputChoice = {1};
	nMethod = If( Contains( JMP Product Name(), "Pro" ),
		N Items( MethodChoice ),
		N Items( MethodChoice ) - 1
	);
	nChoice = N Items( ImputChoice );
	For( i = 1, i <= nMethod, i++,
		For( j = 1, j <= nChoice, j++,
			dt = Open("data_table.jmp");
			dt[[1 3 5 6], [2 3]] = dt[[2 4 7 8 9 10], [1 4]] = .;
			pca = dt << Distance Matrix(
				Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
				Method( MethodChoice[i] ),
				Missing Value Imputation( ImputChoice[j] ), 
				
			);
			Close( dt, nosave );
		)
	);
);
```

**Code Explanation**:

1. Check if JMP Pro.
2. Define method choices.
3. Define imputation choices.
4. Set number of methods.
5. Set number of imputations.
6. Loop through each method.
7. Loop through each imputation.
8. Open data table;
9. Introduce missing values.
10. Create distance matrix.
11. Close dataset without saving.



### Example 2
> **Summary**: Creates a distance matrix and report in JMP Pro, utilizing Local Data Filter for filtering by height range.

<!-- Keywords: #JMPPro, #DistanceMatrix, #LocalDataFilter, #ReportGeneration, #Scripting -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	Open("data_table.jmp");
	Distance Matrix( Y( :height, :weight ), Missing Value Imputation( 0 ), Local Data Filter( Add Filter( columns( :weight ) ) ) );
	dt = Open("data_table.jmp");
	obj = dt << Distance Matrix( Y( :height, :weight ), Missing Value Imputation( 0 ), );
	ldf = obj << Local Data Filter( Add Filter( columns( :height ), Where( :height >= 56.1 & :height <= 58.2 ) ) );
	rpt = obj << report;
	Close( dt, nosave );
);
```

**Code Explanation**:

1. Check if JMP is Pro.
2. Open data table;
3. Create Distance Matrix.
4. Open data table;
5. Create Distance Matrix object.
6. Add Local Data Filter for weight.
7. Generate report.
8. Close "data_table.jmp" without saving.



### Example 3
> **Summary**: Runs data table operations to create a distance matrix and capture log output, utilizing the Log Capture function in JMP Pro.

<!-- Keywords: #JMPPro, #DataTableOperations, #DistanceMatrix, #LogCapture, #ScriptingLanguage -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	dt << Lock Data Table;
	LC = Log Capture( obj = dt << Distance Matrix( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) ) );
);
```

**Code Explanation**:

1. Check if JMP is Pro.
2. Open data table;
3. Lock the data table.
4. Create distance matrix.
5. Capture log output.



### Example 4
> **Summary**: Creates and customizes a distance matrix in JMP, utilizing various options such as species selection, method choice, and missing value imputation.

<!-- Keywords: #JMPScriptingLanguage, #DistanceMatrix, #DataTable, #MissingValueImputation, #Bray-CurtisMethod -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	test = Is Scriptable( obj = dt << Distance Matrix( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) ) );
	dt = Open("data_table.jmp");
	obj = dt << Distance Matrix( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ), Where( :species == "setosa" ) );
	dt = Open("data_table.jmp");
	obj = dt << Distance Matrix( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ), Create New Tables for Results( 1 ) );
	dt = Open("data_table.jmp");
	obj = dt << Distance Matrix( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ), Method( "Bray-Curtis" ), );
	dt = Open("data_table.jmp");
	obj = dt << Distance Matrix( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ), Missing Value Imputation( 1 ) );
);
```

**Code Explanation**:

1. Check if JMP Pro is installed.
2. Open data table;
3. Check scriptability of Distance Matrix.
4. Reopen data_table dataset
5. Create Distance Matrix for setosa species.
6. Reopen data_table dataset
7. Create new tables for results.
8. Reopen data_table dataset
9. Use Bray-Curtis method.
10. Handle missing values with imputation.



### Example 5
> **Summary**: Creates and filters a distance matrix in JMP Pro, utilizing local data filters to refine results.

<!-- Keywords: #JMPPro, #DistanceMatrix, #LocalDataFilter, #MissingValueImputation, #Permutation -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	Open("data_table.jmp");
	Distance Matrix(
		Y( :height, :weight ),
		X( :sex ),
		Missing Value Imputation( 0 ),
		Local Data Filter( Add Filter( columns( :weight ) ) )
	);
	dt = Open("data_table.jmp");
	obj = dt << Distance Matrix( Y( :height, :weight ), X( :sex ), Missing Value Imputation( 0 ), Number of Permutations( 5000 ) );
	ldf = obj << Local Data Filter( Add Filter( columns( :height ), Where( :height >= 56.1 & :height <= 58.2 ) ) );
	rpt = obj << report;
);
```

**Code Explanation**:

1. Check if JMP Pro.
2. Open data_table data
3. Create distance matrix.
4. Set Y variables.
5. Set X variable.
6. Impute missing values.
7. Add local filter.
8. Open data_table data again.
9. Create distance matrix with permutations.
10. Set Y variable for filter.
11. Apply height filter.
12. Generate report.




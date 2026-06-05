# Marker Imputation

### Example 1
> **Summary**: Runs marker imputation for a data table, utilizing the Marker Imputation function in JMP.

<!-- Keywords: #JMPScriptingLanguage, #MarkerImputation, #DataTableProcessing, #ImputationTechniques, #JSLScripting -->

**Code**:
```jsl
Open("data_table.jmp");
Marker Imputation();
```

**Code Explanation**:

1. Open data table.
2. Perform marker imputation.



### Example 2
> **Summary**: Runs marker imputation analysis by opening a data table and performing marker imputation using JMP's built-in functionality.

<!-- Keywords: #JMPScriptingLanguage, #MarkerImputation, #DataTableOperations, #ImputationAnalysis, #JSLScript -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Marker Imputation();
```

**Code Explanation**:

1. Open data table;
2. Perform marker imputation analysis.



### Example 3
> **Summary**: Runs marker imputation on the data_table.jmp dataset, reopening and re-imputing markers in a loop.

<!-- Keywords: #MarkerImputation, #DataReopening, #JSLScripting, #DataManipulation, #Looping -->

**Code**:
```jsl
Open("data_table.jmp");
Marker Imputation();
dt = Open("data_table.jmp");
dt << Marker Imputation();
dt = Open("data_table.jmp");
```

**Code Explanation**:

1. Open data_table data
2. Perform marker imputation.
3. Reopen data_table data.
4. Perform marker imputation again.
5. Reopen data_table data.



## Marker Imputation using Subset
> **Summary**: Process of imputing missing marker values in a dataset, utilizing random sampling and LD-kNN method for reproducibility.

<!-- Keywords: #JMPScriptingLanguage, #MarkerImputation, #RandomSampling, #LD-kNNMethod, #DataPreprocessing -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
dt = dt1 << Subset(All Rows, Columns(1::N Cols(dt1)), Link to Original Data Table( 0 ));
Random Reset( 1234 );
markers = dt << Get Column Group( "Markers" );
markers = markers[Random Index( N Items( markers ), 60 )];
For Each( {col}, markers, col[Random Index( N Rows( dt ), 200 )] = . );
dt << Marker Imputation(
	Marker( Column Group( "Markers" ) ),
	Ploidy( 2 ),
	Missing Marker Imputation Method( "LD-kNN" )
);
```

**Code Explanation**:

1. Open data table.
2. Create subset of all rows and columns.
3. Reset random seed for reproducibility.
4. Retrieve column group "Markers".
5. Randomly select 60 markers.
6. For each selected marker, randomly set 200 values to missing.
7. Perform marker imputation on the dataset.
8. Specify marker column group.
9. Set ploidy level to 2.
10. Use LD-kNN method for imputation.



## Marker Imputation using If
> **Summary**: Runs marker imputation using LD-kNN method in JMP Pro, with random sampling and locking of data table.

<!-- Keywords: #JMPPro, #MarkerImputation, #LDkNN, #DataTableManagement, #RandomSampling -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	dt << Lock Data Table;
	LC = Log Capture(
		dt = Open("data_table.jmp");
		Random Reset( 1234 );
		markers = dt << Get Column Group( "Markers" );
		markers = markers[Random Index( N Items( markers ), 60 )];
		For Each( {col}, markers, col[Random Index( N Rows( dt ), 200 )] = . );
		For Each( {col}, markers, col << Lock( 1 ) );
		dt << Marker Imputation( Marker( Column Group( "Markers" ) ), Ploidy( 2 ), Missing Marker Imputation Method( "LD-kNN" ) );
		dt = Open("data_table.jmp");
		Random Reset( 1234 );
		markers = dt << Get Column Group( "Markers" );
		markers = markers[Random Index( N Items( markers ), 60 )];
		For Each( {col}, markers, col[Random Index( N Rows( dt ), 200 )] = . );
		dt << Lock Data Table;
		dt << Marker Imputation( Marker( Column Group( "Markers" ) ), Ploidy( 2 ), Missing Marker Imputation Method( "LD-kNN" ) );
	);
);
```

**Code Explanation**:

1. Check if JMP version is Pro.
2. Open data table;
3. Lock data_table data table.
4. Start log capture.
5. Open data table;
6. Set random seed to 1234.
7. Get Markers column group.
8. Select 60 random markers.
9. Set 200 random rows to missing for each marker.
10. Lock selected markers.
11. Perform marker imputation using LD-kNN method.
12. Reopen data_table dataset
13. Set random seed to 1234.
14. Get Markers column group.
15. Select 60 random markers.
16. Set 200 random rows to missing for each marker.
17. Lock Genotypes Pedigree data table.
18. Perform marker imputation using LD-kNN method.



## Marker Imputation using Is Scriptable
### Example 1
> **Summary**: Runs marker imputation in a data table by randomly selecting markers, replacing values with missing, and using the LD-kNN method to fill gaps.

<!-- Keywords: #MarkerImputation, #LDkNN, #DataTable, #JSLScripting, #MissingValueHandling -->

**Code**:
```jsl
Open("data_table.jmp");
test = Is Scriptable(
	dt = Current Data Table();
	Random Reset( 1234 );
	markers = dt << Get Column Group( "Markers" );
	markers = markers[Random Index( N Items( markers ), 15 )];
	For Each( {col}, markers, col[Random Index( N Rows( dt ), 20 )] = . );
	obj = dt << Marker Imputation(
		Marker( Column Group( "Markers" ) ),
		Ploidy( 2 ),
		Missing Marker Imputation Method( "LD-kNN" )
	);
);
```

**Code Explanation**:

1. Open data table.
2. Check scriptability.
3. Assign current data table.
4. Reset random seed.
5. Retrieve "Markers" column group.
6. Select 15 random markers.
7. For each marker, replace 20 random values with missing.
8. Perform marker imputation.
9. Specify marker column group.
10. Set ploidy to 2.
11. Use "LD-kNN" method for imputation.



### Example 2
> **Summary**: Runs marker imputation using the LD-kNN method in a data table, selecting 15 random markers and setting 20 random rows to missing.

<!-- Keywords: #MarkerImputation, #LDkNN, #DataTable, #JSLScripting, #MissingValueHandling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
test = Is Scriptable(
	dt = Current Data Table();
	Random Reset( 1234 );
	markers = dt << Get Column Group( "Markers" );
	markers = markers[Random Index( N Items( markers ), 15 )];
	For Each( {col}, markers, col[Random Index( N Rows( dt ), 20 )] = . );
	obj = dt << Marker Imputation(
		Marker( Column Group( "Markers" ) ),
		Ploidy( 2 ),
		Missing Marker Imputation Method( "LD-kNN" )
	);
);
```

**Code Explanation**:

1. Open data table.
2. Check if scriptable.
3. Set current data table.
4. Reset random seed.
5. Get marker column group.
6. Select random 15 markers.
7. For each selected marker.
8. Set 20 random rows to missing.
9. Perform marker imputation.
10. Use LD-kNN method.



### Example 3
> **Summary**: Runs marker imputation in a data table by randomly selecting markers, setting cells to missing, and applying the LD-kNN method.

<!-- Keywords: #MarkerImputation, #DataTable, #JSLScripting, #RandomSelection, #MissingValueHandling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
test = Is Scriptable(
	dt = Current Data Table();
	Random Reset( 1234 );
	markers = dt << Get Column Group( "Markers" );
	markers = markers[Random Index( N Items( markers ), 15 )];
	For Each( {col}, markers, col[Random Index( N Rows( dt ), 20 )] = . );
	dt << Marker Imputation(
		Marker( Column Group( "Markers" ) ),
		By( :Sex ),
		Ploidy( 2 ),
		Unthreaded( 0 ),
		Missing Marker Imputation Method( "LD-kNN" )
	);
);
```

**Code Explanation**:

1. Open data table.
2. Check scriptability.
3. Set current data table.
4. Reset random seed.
5. Get marker column group.
6. Select random 15 markers.
7. For each selected marker.
8. Randomly select 20 rows.
9. Set selected cells to missing.
10. Perform marker imputation.



### Example 4
> **Summary**: Process of selecting markers, imputing missing values, and configuring marker imputation settings in a data table.

<!-- Keywords: #MarkerImputation, #DataTableManagement, #RandomSampling, #Scripting, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
test = Is Scriptable(
	dt = Current Data Table();
	Random Reset( 1234 );
	markers = dt << Get Column Group( "Markers" );
	markers = markers[Random Index( N Items( markers ), 15 )];
	For Each( {col}, markers, col[Random Index( N Rows( dt ), 20 )] = . );
	dt << Marker Imputation(
		Marker( Column Group( "Markers" ) ),
		Ploidy( 2 ),
		Missing Marker Imputation Method( "Specified" ),
		Imputation Value( 0 )
	);
);
```

**Code Explanation**:

1. Open data table.
2. Check if scriptable.
3. Set current data table.
4. Reset random seed.
5. Get column group "Markers".
6. Randomly select 15 markers.
7. For each selected marker, randomly select 20 rows.
8. Set selected cells to missing.
9. Perform marker imputation.
10. Specify marker group.
11. Set ploidy to 2.
12. Use specified method for imputation.
13. Set imputation value to 0.



### Example 5
> **Summary**: Runs marker imputation and selection for data tables, utilizing the 'LD-kNN' method to handle missing values.

<!-- Keywords: #MarkerImputation, #DataTable, #JMPScriptingLanguage, #MissingValueHandling, #Genomics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
test = Is Scriptable(
	dt = Current Data Table();
	Random Reset( 1234 );
	markers = dt << Get Column Group( "Markers" );
	markers = markers[Random Index( N Items( markers ), 15 )];
	For Each( {col}, markers, col[Random Index( N Rows( dt ), 20 )] = . );
	obj = dt << Marker Imputation(
		Marker( Column Group( "Markers" ) ),
		Ploidy( 2 ),
		Unthreaded( 1 ),
		Missing Marker Imputation Method( "LD-kNN" )
	);
	obj << Select Where( Percent of Missing >= 85 );
);
```

**Code Explanation**:

1. Open data table.
2. Check scriptability.
3. Set current data table.
4. Reset random seed.
5. Retrieve "Markers" column group.
6. Randomly select 15 markers.
7. For each selected marker, randomly set 20 values to missing.
8. Perform marker imputation.
9. Specify marker group.
10. Set ploidy to 2.
11. Enable unthreaded processing.
12. Use "LD-kNN" imputation method.
13. Select imputed markers with 85% or more missing values.



### Example 6
> **Summary**: Process of marker imputation in a data table, utilizing random sampling and HWE Off method to handle missing values.

<!-- Keywords: #MarkerImputation, #DataTableManipulation, #RandomSampling, #HWEOffMethod, #JSLScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
test = Is Scriptable(
	dt = Current Data Table();
	Random Reset( 1234 );
	markers = dt << Get Column Group( "Markers" );
	markers = markers[Random Index( N Items( markers ), 15 )];
	For Each( {col}, markers, col[Random Index( N Rows( dt ), 20 )] = . );
	dt << Marker Imputation(
		Marker( Column Group( "Markers" ) ),
		Ploidy( 2 ),
		Set Random Seed( 12345 ),
		Missing Marker Imputation Method( "HWE Off" )
	);
);
```

**Code Explanation**:

1. Open data table.
2. Check if scriptable.
3. Set current data table.
4. Reset random seed.
5. Get marker column group.
6. Select random markers.
7. Replace values with missing.
8. Perform marker imputation.
9. Set marker group.
10. Specify ploidy.



### Example 7
> **Summary**: Runs marker imputation in a data table using the LD-kNN method, selecting 15 random markers and setting 20 random rows to missing.

<!-- Keywords: #MarkerImputation, #LDkNN, #DataTable, #JSLScripting, #MissingValueHandling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
test = Is Scriptable(
	dt = Current Data Table();
	Random Reset( 1234 );
	markers = dt << Get Column Group( "Markers" );
	markers = markers[Random Index( N Items( markers ), 15 )];
	For Each( {col}, markers, col[Random Index( N Rows( dt ), 20 )] = . );
	dt << Marker Imputation(
		Marker( Column Group( "Markers" ) ),
		Ploidy( 2 ),
		Unthreaded( 1 ),
		Missing Marker Imputation Method( "LD-kNN" )
	);
);
```

**Code Explanation**:

1. Open data table.
2. Check if scriptable.
3. Set current data table.
4. Reset random seed.
5. Get markers column group.
6. Select random 15 markers.
7. Iterate over selected markers.
8. Set 20 random rows to missing.
9. Perform marker imputation.
10. Use LD-kNN method.



### Example 8
> **Summary**: Process of marker imputation in a data table, introducing missing values and applying LD-kNN imputation method.

<!-- Keywords: #MarkerImputation, #DataTable, #LDkNN, #MissingValueHandling, #Scripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
test = Is Scriptable(
	dt = Current Data Table();
	Random Reset( 1234 );
	markers = dt << Get Column Group( "Markers" );
	markers = markers[Random Index( N Items( markers ), 15 )];
	For Each( {col}, markers, col[Random Index( N Rows( dt ), 20 )] = . );
	dt << Marker Imputation(
		Marker( Column Group( "Markers" ) ),
		Ploidy( 2 ),
		Missing Marker Imputation Method( "LD-kNN" ),
		Nearest Samples( 20 ),
		Nearest Markers( 20 )
	);
);
```

**Code Explanation**:

1. Open data table.
2. Check scriptability.
3. Set current data table.
4. Reset random seed.
5. Get marker columns.
6. Select random markers.
7. Introduce missing values.
8. Perform marker imputation.
9. Specify marker group.
10. Set ploidy level.




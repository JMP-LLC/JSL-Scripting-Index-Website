# Marker Relatedness

## Marker Relatedness using Select Rows
> **Summary**: Runs the Marker Relatedness analysis for a specified data table, configuring various settings such as marker column group, principal components, clustering, and kinship type.

<!-- Keywords: #MarkerRelatedness, #DataAnalysis, #JMPScriptingLanguage, #Genomics, #Bioinformatics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Clear Select << Select Rows( Index( 11, 1000 ) ) << Delete Rows;
obj = dt << Marker Relatedness(
	Marker( Column Group( "Markers" ) ),
	Principal Components( 1 ),
	Clustering( 1 ),
	Ploidy( 2 ),
	Set Random Seed( 0 ),
	Missing Marker Imputation Method( "NONEHWE" ),
	Kinship Type( "Identical by State" ),
	SendToReport(
		Dispatch( {"Marker Relatedness", "Hierarchical Clustering", "Dendrogram"}, "Clust Dendro", FrameBox, {Frame Size( 35, 700 )} )
	)
);
obj << Merge Kinship Table;
```

**Code Explanation**:

1. Open data table.
2. Clear existing selections.
3. Select rows 11 to 1000.
4. Delete selected rows.
5. Run Marker Relatedness analysis.
6. Specify markers column group.
7. Use 1 principal component.
8. Enable clustering.
9. Set ploidy to 2.
10. Set random seed to 0.
11. Use NONEHWE imputation method.
12. Set kinship type to IBS.
13. Adjust dendrogram frame size.
14. Merge kinship table.



### Example 1
> **Summary**: Runs marker relatedness analysis by opening a data table and executing the Marker Relatedness() function.

<!-- Keywords: #JMPScriptingLanguage, #MarkerRelatednessAnalysis, #DataTableOperations, #ScriptingAutomation, #JSLCode -->

**Code**:
```jsl
Open("data_table.jmp");
Marker Relatedness();
```

**Code Explanation**:

1. Open data table;
2. Perform marker relatedness analysis.



### Example 2
> **Summary**: Executes Marker Relatedness analysis on a data table, opening and assigning it to a variable dt.

<!-- Keywords: #JMPScriptingLanguage, #MarkerRelatedness, #DataTableOperations, #Automation, #Scripting -->

**Code**:
```jsl
Open("data_table.jmp");
Marker Relatedness();
dt = Open("data_table.jmp");
dt << Marker  Relatedness();
dt = Open("data_table.jmp");
```

**Code Explanation**:

1. Open data table;
2. Run Marker Relatedness analysis.
3. Open data table;
4. Assign data table to dt.
5. Run Marker Relatedness on dt.
6. Open data table;



### Example 3
> **Summary**: Runs the Marker Relatedness analysis in JMP, specifying marker column group, ploidy, and kinship type, then merges the kinship table and re-runs the analysis.

<!-- Keywords: #MarkerRelatedness, #JMPScriptingLanguage, #KinshipAnalysis, #DataTableOperations, #Genomics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Marker Relatedness(
	Marker( Column Group( "Markers" ) ),
	Ploidy( 2 ),
	Unthreaded( 0 ),
	Set Random Seed( 12345 ),
	Missing Marker Imputation Method( "HWE OFF" ),
	Kinship Type( "Identical by State" )
);
obj << Merge Kinship Table;
obj << Redo Analysis;
```

**Code Explanation**:

1. Open data table.
2. Run Marker Relatedness analysis.
3. Specify marker column group.
4. Set ploidy to 2.
5. Disable threading.
6. Set random seed.
7. Disable missing marker imputation.
8. Use Identical by State kinship type.
9. Merge kinship table.
10. Redo analysis.



## Marker Relatedness using Is Scriptable
### Example 1
> **Summary**: Executes a Marker Relatedness analysis on a data table, specifying marker column group, ploidy level, random seed, imputation method, and kinship type.

<!-- Keywords: #MarkerRelatedness, #Scriptability, #DataAnalysis, #Genomics, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
test = Is Scriptable(
	obj = dt << Marker Relatedness(
		Marker( Column Group( "Markers" ) ),
		Ploidy( 2 ),
		Set Random Seed( 0 ),
		Missing Marker Imputation Method( "HWE OFF" ),
		Kinship Type( "Additive" ),
		Additive Type( "Diploid Method 2" )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Check scriptability.
3. Run Marker Relatedness analysis.
4. Specify Marker column group.
5. Set ploidy level to 2.
6. Set random seed to 0.
7. Disable HWE for imputation.
8. Select additive kinship type.
9. Use Diploid Method 2.



### Example 2
> **Summary**: Executes a Marker Relatedness analysis on a data table, grouping by Sex and setting specific parameters for ploidy, imputation method, and kinship type.

<!-- Keywords: #MarkerRelatedness, #DataTable, #Scripting, #JMP, #Genetics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
test = Is Scriptable(
	obj = dt << Marker Relatedness(
		Marker( Column Group( "Markers" ) ),
		By( :Sex ),
		Ploidy( 2 ),
		Unthreaded( 0 ),
		Set Random Seed( 12345 ),
		Missing Marker Imputation Method( "HWE OFF" ),
		Kinship Type( "Identical by State" )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Check scriptability.
3. Launch Marker Relatedness analysis.
4. Specify Markers column group.
5. Group by Sex.
6. Set Ploidy to 2.
7. Enable threading.
8. Set random seed to 12345.
9. Use HWE OFF for imputation.
10. Select Identical by State kinship.



### Example 3
> **Summary**: Runs marker relatedness analysis on a data table, utilizing principal components, clustering, and ploidy adjustment to identify genetic relationships.

<!-- Keywords: #MarkerRelatedness, #PrincipalComponents, #Clustering, #PloidyAdjustment, #Scripting -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
test = Is Scriptable(
	dt1 << Marker Relatedness(
		Marker( Column Group( "Markers" ) ),
		Principal Components( 1 ),
		Clustering( 1 ),
		Ploidy( 2 ),
		Unthreaded( 1 ),
		Set Random Seed( 12345 ),
		Missing Marker Imputation Method( "HWE OFF" ),
		Kinship Type( "Identical by State" )
	)
);
```

**Code Explanation**:

1. Open data_table data
2. Check if scriptable.
3. Run marker relatedness analysis.
4. Use markers column group.
5. Apply principal components.
6. Enable clustering.
7. Set ploidy to 2.
8. Disable threading.
9. Set random seed to 12345.
10. Use HWE OFF imputation.



### Example 4
> **Summary**: Executes a Marker Relatedness analysis on a data table, configuring specific parameters such as ploidy, random seed, and imputation method.

<!-- Keywords: #MarkerRelatedness, #DataTable, #Scripting, #JMP, #Genomics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
test = Is Scriptable(
	obj = dt << Marker Relatedness(
		Marker( Column Group( "Markers" ) ),
		Ploidy( 2 ),
		Set Random Seed( 12345 ),
		Missing Marker Imputation Method( "HWE OFF" ),
		Kinship Type( "Dominance" ),
		Dominance Type( "Diploid Method 2" )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Check if scriptable.
3. Run Marker Relatedness analysis.
4. Select Markers column group.
5. Set ploidy to 2.
6. Set random seed to 12345.
7. Use HWE OFF imputation method.
8. Choose Dominance kinship type.
9. Select Diploid Method 2 dominance type.



### Example 5
> **Summary**: Executes a Marker Relatedness analysis on a data table, specifying marker column group, ploidy, random seed, missing marker imputation method, kinship type, additive type, and dominance type.

<!-- Keywords: #MarkerRelatedness, #Scripting, #DataAnalysis, #Genetics, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
test = Is Scriptable(
	obj = dt << Marker Relatedness(
		Marker( Column Group( "Markers" ) ),
		Ploidy( 2 ),
		Set Random Seed( 12345 ),
		Missing Marker Imputation Method( "HWE OFF" ),
		Kinship Type( "Epistasis" ),
		Additive Type( "Diploid Method 1" ),
		Dominance Type( "Diploid Method 2" ),
		Epistasis Type( "Additive by Dominance" )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Check scriptability.
3. Run Marker Relatedness analysis.
4. Specify marker column group.
5. Set ploidy to 2.
6. Set random seed.
7. Disable missing marker imputation.
8. Choose kinship type.
9. Select additive type.
10. Select dominance type.
11. Select epistasis type.



### Example 6
> **Summary**: Executes a Marker Relatedness analysis on a data table, specifying marker column group, ploidy, random seed, imputation method, and kinship type.

<!-- Keywords: #MarkerRelatedness, #ScriptingLanguage, #JMP, #DataAnalysis, #Genomics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
test = Is Scriptable(
	obj = dt << Marker Relatedness(
		Marker( Column Group( "Markers" ) ),
		Ploidy( 2 ),
		Set Random Seed( 0 ),
		Missing Marker Imputation Method( "Specified" ),
		Imputation Value( 0 ),
		Kinship Type( "Additive" ),
		Additive Type( "Diploid Method 1" )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Check if scriptable.
3. Run Marker Relatedness analysis.
4. Specify marker column group.
5. Set ploidy to 2.
6. Set random seed to 0.
7. Use specified imputation method.
8. Set imputation value to 0.
9. Select additive kinship type.
10. Use diploid method 1.



### Example 7
> **Summary**: Executes a Marker Relatedness analysis, configuring specific parameters such as marker column group, ploidy level, and kinship type.

<!-- Keywords: #MarkerRelatedness, #Scripting, #JMP, #Genomics, #Bioinformatics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
test = Is Scriptable(
	obj = dt << Marker Relatedness(
		Marker( Column Group( "Markers" ) ),
		Ploidy( 2 ),
		Unthreaded( 0 ),
		Set Random Seed( 12345 ),
		Missing Marker Imputation Method( "HWE OFF" ),
		Kinship Type( "Identical by State" )
	);
	obj << Merge Kinship Table;
);
```

**Code Explanation**:

1. Open data table.
2. Check if scriptable.
3. Run Marker Relatedness analysis.
4. Specify marker column group.
5. Set ploidy level.
6. Disable threading.
7. Set random seed.
8. Disable missing marker imputation.
9. Select kinship type.
10. Merge kinship table.



### Example 8
> **Summary**: Executes a Marker Relatedness analysis on a specified data table, setting various parameters such as ploidy, imputation method, and kinship type.

<!-- Keywords: #MarkerRelatedness, #DataTable, #Scripting, #JMP, #Genomics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
test = Is Scriptable(
	obj = dt << Marker Relatedness(
		Marker( Column Group( "Markers" ) ),
		Ploidy( 2 ),
		Set Random Seed( 12345 ),
		Missing Marker Imputation Method( "Specified" ),
		Imputation Value( 0 ),
		Kinship Type( "Additive" ),
		Additive Type( "Diploid Method 1" )
	);
	obj << Merge Kinship Table;
);
```

**Code Explanation**:

1. Open data_table data
2. Check if scriptable.
3. Run Marker Relatedness analysis.
4. Specify Marker column group.
5. Set ploidy to 2.
6. Set random seed to 12345.
7. Use specified imputation method.
8. Set imputation value to 0.
9. Choose additive kinship type.
10. Use Diploid Method 1 for additive type.
11. Merge kinship table.



### Example 9
> **Summary**: Executes a Marker Relatedness analysis on a data table, utilizing specific settings for marker group, ploidy, random seed, and kinship type.

<!-- Keywords: #MarkerRelatedness, #ScriptingLanguage, #JSL, #DataAnalysis, #Genomics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
test = Is Scriptable(
	obj = dt << Marker Relatedness(
		Marker( Column Group( "Markers" ) ),
		Ploidy( 2 ),
		Set Random Seed( 12345 ),
		Missing Marker Imputation Method( "HWE OFF" ),
		Kinship Type( "Identical by State" )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Assign data table to `dt`.
3. Check if scriptable.
4. Run Marker Relatedness analysis.
5. Use "Markers" column group.
6. Set ploidy to 2.
7. Set random seed to 12345.
8. Disable HWE for missing marker imputation.
9. Use Identical by State kinship type.
10. Store result in `test`.



### Example 10
> **Summary**: Executes a Marker Relatedness analysis on a data table, specifying markers column group, principal components, clustering, ploidy, and imputation method.

<!-- Keywords: #MarkerRelatedness, #Scriptability, #DataAnalysis, #JMPScriptingLanguage, #Genomics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
test = Is Scriptable(
	obj = dt << Marker Relatedness(
		Marker( Column Group( "Markers" ) ),
		Principal Components( 1 ),
		Clustering( 1 ),
		Ploidy( 2 ),
		Unthreaded( 1 ),
		Set Random Seed( 12345 ),
		Missing Marker Imputation Method( "HWE OFF" ),
		Kinship Type( "Identical by State" )
	)
);
```

**Code Explanation**:

1. Open data_table data
2. Check scriptability.
3. Run Marker Relatedness analysis.
4. Specify markers column group.
5. Use 1 principal component.
6. Enable clustering.
7. Set ploidy to 2.
8. Disable threading.
9. Set random seed to 12345.
10. Use HWE OFF imputation.



### Example 11
> **Summary**: Launches Marker Relatedness analysis on a data table, specifying marker columns, sample IDs, ploidy level, and kinship type.

<!-- Keywords: #MarkerRelatedness, #DataAnalysis, #Scripting, #JMP, #Genomics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
test = Is Scriptable(
	obj = dt << Marker Relatedness(
		Marker( Column Group( "Markers" ) ),
		Sample ID( :SampleID ),
		Ploidy( 2 ),
		Unthreaded( 0 ),
		Set Random Seed( 12345 ),
		Missing Marker Imputation Method( "HWE OFF" ),
		Kinship Type( "Identical by State" )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Check scriptability.
3. Launch Marker Relatedness.
4. Define marker columns.
5. Specify sample IDs.
6. Set ploidy level.
7. Disable threading.
8. Initialize random seed.
9. Configure imputation method.
10. Select kinship type.



### Example 12
> **Summary**: Runs the Marker Relatedness analysis in JMP, configuring parameters such as ploidy, threading, and imputation method to generate square and stacked kinship tables.

<!-- Keywords: #MarkerRelatedness, #JMPScriptingLanguage, #GeneticsAnalysis, #KinshipTables, #DataPreprocessing -->

**Code**:
```jsl
dt = Open("data_table.jmp");
test = Is Scriptable(
	obj = dt << Marker Relatedness(
		Marker( Column Group( "Markers" ) ),
		Ploidy( 2 ),
		Unthreaded( 0 ),
		Set Random Seed( 12345 ),
		Missing Marker Imputation Method( "HWE OFF" ),
		Kinship Type( "Identical by State" )
	);
	obj << Save Square Kinship Table;
	obj << Save Stacked Kinship Table;
);
```

**Code Explanation**:

1. Open data_table data
2. Check scriptability of Marker Relatedness.
3. Launch Marker Relatedness analysis.
4. Select markers from column group.
5. Set ploidy to 2.
6. Disable threading.
7. Set random seed to 12345.
8. Use HWE OFF for imputation.
9. Select Identical by State kinship type.
10. Save square kinship table.
11. Save stacked kinship table.




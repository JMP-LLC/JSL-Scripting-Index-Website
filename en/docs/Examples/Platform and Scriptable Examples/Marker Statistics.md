# Marker Statistics

### Example 1
> **Summary**: Analyze a data table by performing Marker Statistics, opening the 'data_table.jmp' file.

<!-- Keywords: #JSLScriptingLanguage, #MarkerStatistics, #DataTableAnalysis, #JMPScripting, #Automation -->

**Code**:
```jsl
Open("data_table.jmp");
Marker Statistics();
```

**Code Explanation**:

1. Open data_table data
2. Perform Marker Statistics analysis.



### Example 2
> **Summary**: Runs the application of Marker Statistics to a data table, allowing for interactive exploration and analysis.

<!-- Keywords: #MarkerStatistics, #DataTable, #JSLScriptingLanguage, #InteractiveAnalysis, #DataExploration -->

**Code**:
```jsl
Open("data_table.jmp");
Marker Statistics();
dt = Open("data_table.jmp");
dt << Marker  Statistics();
dt = Open("data_table.jmp");
```

**Code Explanation**:

1. Open data table;
2. Run Marker Statistics.
3. Open data table;
4. Apply Marker Statistics to dataset.
5. Open data table;



### Example 3
> **Summary**: Creates and analyzes marker statistics for a data table, grouping by sex and setting ploidy to 2.

<!-- Keywords: #MarkerStatistics, #DataTableAnalysis, #Ploidy, #Grouping, #JMPScript -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ), Grouping( :Sex ) );
obj << Redo Analysis;
```

**Code Explanation**:

1. Open data table.
2. Create Marker Statistics object.
3. Specify Markers column group.
4. Set ploidy to 2.
5. Group by Sex.
6. Redo analysis.



## Marker Statistics using Is Scriptable
### Example 1
> **Summary**: Creates and configures a Marker Statistics object with specific settings, including column groups, ploidy, and levels table.

<!-- Keywords: #MarkerStatistics, #Scripting, #JMP, #DataAnalysis, #Genomics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
test = Is Scriptable(
	obj = Marker Statistics(
		Marker( Column Group( "Markers" ) ),
		With Marker( Column Group( "Markers" ) ),
		Ploidy( 2 ),
		Levels Table( 1 )
	);
	obj << Levels Table( 0 );
	obj << LD Decay Plot( 0 );
);
```

**Code Explanation**:

1. Open data table;
2. Check if scriptable.
3. Create Marker Statistics object.
4. Set Marker column group.
5. Set With Marker column group.
6. Set Ploidy to 2.
7. Set Levels Table to 1.
8. Modify Levels Table to 0.
9. Disable LD Decay Plot.
10. End script execution.



### Example 2
> **Summary**: Creates a Marker Statistics object with specified column group, ploidy level, and unthreaded option, returning a scriptable result.

<!-- Keywords: #MarkerStatistics, #Ploidy, #UnthreadedOption, #Scriptability, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
test = Is Scriptable( obj = dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ), Unthreaded( 1 ) ) );
```

**Code Explanation**:

1. Open data table;
2. Assign dataset to variable `dt`.
3. Create Marker Statistics object.
4. Set marker column group.
5. Define ploidy level as 2.
6. Enable unthreaded option.
7. Check if scriptable.
8. Assign result to variable `test`.



### Example 3
> **Summary**: Create and evaluate marker statistics for a data table, grouping by sex and setting ploidy level to 2.

<!-- Keywords: #MarkerStatistics, #Ploidy, #Grouping, #Scriptable, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
test = Is Scriptable( obj = dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ), Grouping( :Sex ) ) );
```

**Code Explanation**:

1. Open data table;
2. Assign data table to variable `dt`.
3. Create marker statistics object.
4. Specify marker column group.
5. Set ploidy level to 2.
6. Group by sex.
7. Check if scriptable.
8. Assign result to variable `test`.



### Example 4
> **Summary**: Calculates marker statistics for a data table, grouping markers by column group and ploidy level, with optional sex-based grouping.

<!-- Keywords: #JSLScriptingLanguage, #MarkerStatistics, #DataTableOperations, #PloidyLevel, #ByGroup -->

**Code**:
```jsl
test = Is Scriptable(
	dt = Open("data_table.jmp");
	obj = dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ), By( :Sex ) );
);
```

**Code Explanation**:

1. Check if scriptable.
2. Open data table.
3. Assign data table to variable.
4. Perform marker statistics.
5. Specify marker column group.
6. Set ploidy level to 2.
7. Group by sex.




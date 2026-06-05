# As Column

## As Column using Function
> **Summary**: Calculates and visualizes mean, standard deviation, and median for Cholesterol and Triglycerides columns in a data table.

<!-- Keywords: #JSLScriptingLanguage, #DataVisualization, #StatisticalAnalysis, #JMP, #ColumnStatistics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Func_C = Function( {col_C},
	{windowRef},
	windowRef = New Window( "Func_C - ",
		Number Col Box( col_C,
			{Col Mean( As Column( col_C ) ), Col Std Dev( As Column( col_C ) ), Col Quantile( As Column( col_C ), 0.5 )}
		)
	);
	Return( windowRef );
);
winChol = Func_C( "Cholesterol" );
winTri = Func_C( "Triglycerides" );
Func_C_2 = Function( {col_C},
	Show( col_C, Col Mean( As Column( col_C ) ), Col Std Dev( As Column( col_C ) ), Col Quantile( As Column( col_C ), 0.5 ) );
	Write( "\!N" );
);
logChol = Log Capture( Func_C_2( "Cholesterol" ) );
logTri = Log Capture( Func_C_2( "Triglycerides" ) );
```

**Code Explanation**:

1. Open data table.
2. Define function Func_C.
3. Create new window for Func_C.
4. Add number column box to window.
5. Calculate mean, standard deviation, and median.
6. Return window reference.
7. Call Func_C for Cholesterol.
8. Call Func_C for Triglycerides.
9. Define function Func_C_2.
10. Display column name and statistics.




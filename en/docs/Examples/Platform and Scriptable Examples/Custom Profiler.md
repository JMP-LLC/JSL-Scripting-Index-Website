# Custom Profiler

### Example 1
> **Summary**: Creates a Custom Profiler object with response variables ABRASION, MODULUS, ELONG, and HARDNESS from the data_table.jmp dataset.

<!-- Keywords: #JSLScriptingLanguage, #CustomProfiler, #DataTable, #PredictiveModeling, #JMPScript -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Custom Profiler( Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ) );
```

**Code Explanation**:

1. Open data_table data
2. Create Custom Profiler object.
3. Set response variables: ABRASION.
4. Add MODULUS to responses.
5. Include ELONG in responses.
6. Add HARDNESS to responses.



### Example 2
> **Summary**: Creates a Custom Profiler object with prediction profiler, utilizing data from an open JMP data table.

<!-- Keywords: #JMPScriptingLanguage, #CustomProfiler, #PredictionProfiler, #DataTable, #JSL -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = Custom Profiler( Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ) );
obj << Prediction Profiler( 1 );
```

**Code Explanation**:

1. Set default names.
2. Open data table.
3. Create Custom Profiler object.
4. Add prediction profiler.



### Example 3
> **Summary**: Creates a Custom Profiler object with specified settings and objective formula, utilizing data from an opened JMP data table.

<!-- Keywords: #CustomProfiler, #JMPDataTable, #PredictiveModeling, #Scripting, #JSL -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Custom Profiler(
	Y( :Pred Formula ABRASION ),
	Custom Profiler(
		1,
		Term Value( SILICA( 1.25, Lock( 0 ), Show( 1 ) ), SILANE( 50, Lock( 0 ), Show( 1 ) ), SULFUR( 2.25, Lock( 0 ), Show( 1 ) ) ),
		Objective Formula( Pred Formula ABRASION )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create Custom Profiler object.
3. Set response variable to "ABRASION".
4. Configure Custom Profiler settings.
5. Set initial values for SILICA, SILANE, SULFUR.
6. Lock initial values for variables.
7. Display initial values for variables.
8. Set objective formula to "ABRASION".
9. Assign Custom Profiler to obj variable.
10. End script execution.



## Custom Profiler using Column
> **Summary**: Configures response limits for multiple columns in a data table, and generates a custom profiler report with specified Y variables.

<!-- Keywords: #JSLScriptingLanguage, #CustomProfiler, #ResponseLimits, #DataTableConfiguration, #MultivariateAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, 8 ) << Set Property(
	"Response Limits",
	{Lower( 100, 0.066 ), Middle( 150, 0.5 ), Upper( 200, 0.9819 ), Goal( Maximize ), Importance( 0.2 )}
);
Column( dt, 9 ) << Set Property(
	"Response Limits",
	{Lower( 1000, 0.066 ), Middle( 1500, 0.5 ), Upper( 2000, 0.9819 ), Goal( Maximize ), Importance( 0.2 )}
);
Column( dt, 10 ) << Set Property(
	"Response Limits",
	{Lower( 450, 0.0183 ), Middle( 500, 1 ), Upper( 550, 0.0183 ), Goal( Match Target ), Importance( 0.2 )}
);
Column( dt, 11 ) << Set Property(
	"Response Limits",
	{Lower( 65, 0.0183 ), Middle( 67.5, 1 ), Upper( 70, 0.0183 ), Goal( Match Target ), Importance( 0.4 )}
);
obj = dt << Custom Profiler( Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ) );
rpt = obj << report;
formuTxt = rpt[Outline Box( "Formula" )][Text Edit Box( 1 )] << Get Text;
formuLst = Words( formuTxt, "*" );
tmp = J( Length( formuLst ) - 1, 1, 0 );
For( i = 1, i <= N Rows( tmp ), i++,
	tmp[i] = Num( Right( Trim( formuLst[i] ), 3 ) )
);
```

**Code Explanation**:

1. Open data table;
2. Set properties for column 8.
3. Set properties for column 9.
4. Set properties for column 10.
5. Set properties for column 11.
6. Create Custom Profiler with specified Y variables.
7. Retrieve report from Custom Profiler.
8. Extract formula text from report.
9. Split formula text into words.
10. Convert extracted numbers to numeric values.




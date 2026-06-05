# Arg

## Arg using Try
### Example 1
> **Summary**: Adds value labels to a data table column, with error handling and retrieval of value labels.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #ValueLabels, #ErrorHandling, #ColumnProperties -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", invisible );
Try(
	Column( "Age" ) << Add Column Properties(
		Value Labels( {12 = "Twelve", 13 = "Thirteen", 14 = "Fourteen", 15 = "Fifteen", 16 = "Sixteen", 17 = "Seventeen"} )
	),
	Show( "throw" )
);
valLabels = Arg( Column( "age" ) << Get Property( "Value Labels" ), 1 );
```

**Code Explanation**:

1. Open data table.
2. Try adding value labels.
3. Catch and show error.
4. Retrieve value labels.



### Example 2
> **Summary**: Adds List Check property to a column in JMP, with error handling and value retrieval.

<!-- Keywords: #JSLScriptingLanguage, #JMPDataTables, #ListCheckProperty, #ErrorHandling, #ColumnProperties -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", invisible );
Try( Column( "Age" ) << Add Column Properties( List Check( {17, 16, 15, 14, 13, 12} ) ), Show( "throw" ) );
valLabels = Arg( Column( "age" ) << Get Property( "List Check" ), 1 );
```

**Code Explanation**:

1. Open data table;
2. Attempt to add List Check property.
3. If error, show "throw".
4. Retrieve List Check values.



### Example 3
> **Summary**: Process of setting value labels for a column in a JMP data table, while also handling potential errors and retrieving the updated value labels.

<!-- Keywords: #JSLScriptingLanguage, #ValueLabels, #DataTableManagement, #ErrorHandling, #ColumnProperties -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", invisible );
Try( Column( "sex" ) << Set Property( "Value Labels", {"F" = "female", "M" = "male"} ), Show( "throw" ) );
valLabels = Arg( Column( "sex" ) << Get Property( "Value Labels" ), 1 );
```

**Code Explanation**:

1. Open data table.
2. Make table invisible.
3. Try setting value labels.
4. If error, show "throw".
5. Retrieve value labels for "sex".



### Example 4
> **Summary**: Adds value labels to a column and retrieves existing value labels from another column in a JMP data table.

<!-- Keywords: #JSLScriptingLanguage, #ValueLabels, #DataTableOperations, #ColumnProperties, #JMPScripting -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", invisible );
Try( Column( "xyz" ) << Add Column Properties( Value Labels( {"F" = "female", "M" = "male"} ) ) );
valLabels = Arg( Column( "sex" ) << Get Property( "Value Labels" ), 1 );
```

**Code Explanation**:

1. Open data table;
2. Attempt to add value labels to "xyz" column.
3. Retrieve value labels from "sex" column.



## Arg using Range
> **Summary**: Configures a color gradient for the 'age' column in a JMP data table, utilizing multiple data updates and script retrieval.

<!-- Keywords: #JMPScriptingLanguage, #DataUpdate, #ColumnProperties, #GradientColor, #ScriptRetrieval -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << BeginDataUpdate;
:age << set property( "Color Gradient", {"Blue to Gray to Red", Range( {12, 17, 13.975} )} );
dt << EndDataUpdate;
dt << BeginDataUpdate;
:age << Set Property( "Color Gradient", {"Blue to Gray to Red", Range( {12, 17, 13.975} )} );
dt << EndDataUpdate;
colScript = Char( Arg( :age << get script, 7 ) );
```

**Code Explanation**:

1. Open data table.
2. Start data update.
3. Set age color gradient.
4. End data update.
5. Start data update again.
6. Set age color gradient again.
7. End data update again.
8. Get age column script.
9. Convert script to character.
10. Store character script.



## Arg using For
> **Summary**: Generates a distribution analysis for continuous variables in a specified data table, utilizing the Distribution platform to select female students aged 15 and perform random statistical calculations.

<!-- Keywords: #Distribution, #JSLScriptingLanguage, #DataAnalysis, #ContinuousVariables, #RandomStatistics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
myRows = dt << get rows where( :age == 15 & :sex == "F" );
For( i = 1, i <= N Items( myRows ), i++,
	:age[myRows[i]] = .
);
dt << New Column( "freq", formula( Random Integer( Row() ) ) );
sumStalst = {"N", "Mean", "Median", "Geometric Mean", "Min", "Max", "Range", "Sum", "% of Total", "Std Dev", "Variance", "Std Err",
"Interquartile Range"};
N Arg( sumStalst );
myStatistic = sumStalst[Random Integer( N Arg( sumStalst ) )];
lblLst = {"No Labels", "Label by Value", "Label by Percent of Total Values", "Label by Row"};
myLabel = lblLst[Random Integer( N Arg( lblLst ) )];
ErrBarlst = {"Auto", "None", "Range", "Interquartile Range", "Standard Error", "Standard Deviation", "Confidence Interval",
"Custom Interval", "Two-way Interval"};
myErrBar = ErrBarlst[Random Integer( N Arg( ErrBarlst ) )];
```

**Code Explanation**:

1. Open data table;
2. Select female students aged 15.
3. Replace age values with missing for selected rows.
4. Add new column "freq" with random integer formulas.
5. Define summary statistics list.
6. Randomly select a summary statistic.
7. Define label options list.
8. Randomly select a label option.
9. Define error bar types list.
10. Randomly select an error bar type.




# Set Property

### Example 1
> **Summary**: Sets up a data table by opening it and setting missing value codes for height, preparing the data for analysis.

<!-- Keywords: #JSLScriptingLanguage, #DataTableSetup, #MissingValueCodes, #GraphBuilder, #BarChart -->

**Code**:
```jsl
Open("data_table.jmp");
:height << Set Property( "Missing Value Codes", 999 );
:height << Set Values( [999] );
```

**Code Explanation**:

1. Open data table;
2. Set missing value code for height.
3. Assign missing value to height.



### Example 2
> **Summary**: Vizualizes mean profit by product line and quarter using Graph Builder in JMP.

<!-- Keywords: #GraphBuilder, #JMPScriptingLanguage, #DataVisualization, #ProfitAnalysis, #ProductLine -->

**Code**:
```jsl
Open("data_table.jmp");
:Squat << set property( "missing value codes", {330} );
```

**Code Explanation**:

1. Open data_table data
2. Set missing value code for Squat column.



### Example 3
> **Summary**: Sets up a data table with forced values for Species and Sex, facilitating further analysis.

<!-- Keywords: #JSLScriptingLanguage, #DataTableSetup, #ForcedValues, #GraphBuilder, #Visualization -->

**Code**:
```jsl
Open("data_table.jmp");
:Species << Set Property(
	"Forced Values",
	{"Adelie Penguin (Pygoscelis adeliae)", "Chinstrap penguin (Pygoscelis antarctica)", "Emperor penguin (Aptenodytes forsteri)",
	"Gentoo penguin (Pygoscelis papua)"}
);
:Sex << Set Property( "Forced Values", {"MALE", "FEMALE"} );
```

**Code Explanation**:

1. Open data table;
2. Set Species forced values.
3. Set Sex forced values.



### Example 4
> **Summary**: Sets forced values for the 'age' variable in a data table, utilizing the Set Property function.

<!-- Keywords: #JSLScripting, #DataTableManagement, #VariableSetting, #ForcedValues, #JMPScriptingLanguage -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
dt2:age << Set Property( "Forced Values", {12, 13, 14, 15, 16, 17} );
```

**Code Explanation**:

1. Open data table;
2. Set age forced values.



### Example 5
> **Summary**: Vizualizes mean profit by product line and quarter using Graph Builder in JMP.

<!-- Keywords: #GraphBuilder, #BarChart, #ProfitAnalysis, #ProductLine, #QuarterlyData -->

**Code**:
```jsl
Open("data_table.jmp");
:Product Line << Set Property( "Row Order Levels" );
```

**Code Explanation**:

1. Open data table.
2. Set row order levels for product line.



### Example 6
> **Summary**: Sets up a data table by opening 'data_table.jmp', setting the first sex value to empty, and marking the sex column as informative missing.

<!-- Keywords: #JSLScriptingLanguage, #DataTableSetup, #InformativeMissing, #GraphBuilder, #JMP -->

**Code**:
```jsl
Open("data_table.jmp");
:sex[1] = "";
:sex << set property( "Informative Missing", 1 );
```

**Code Explanation**:

1. Open data table.
2. Set first sex value to empty.
3. Mark sex column as informative missing.



### Example 7
> **Summary**: Vizualizes mean profit by product line and quarter using Graph Builder in JMP, setting missing value codes for Position 2.

<!-- Keywords: #JMPScriptingLanguage, #GraphBuilder, #DataVisualization, #MissingValueCodes, #ProfitAnalysis -->

**Code**:
```jsl
Open("data_table.jmp");
:Position2 << set property( "missing value codes", {"o"} );
```

**Code Explanation**:

1. Open data_table data
2. Set missing value code.



### Example 8
> **Summary**: Prepares data by setting value ordering for age and sex variables in a JMP data table.

<!-- Keywords: #JMPScriptingLanguage, #DataPreparation, #ValueOrdering, #DataTable, #JSLScript -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:age << Set Property( "Value Ordering", {15, 14, 12, 13, 16, 17} );
dt:sex << Set Property( "Value Ordering", {"M", "F"} );
```

**Code Explanation**:

1. Open data table.
2. Set age value ordering.
3. Set sex value ordering.



### Example 9
> **Summary**: Vizualizes mean profit by product line and quarter using Graph Builder in JMP.

<!-- Keywords: #GraphBuilder, #JMPScriptingLanguage, #DataVisualization, #ProfitAnalysis, #ProductLine -->

**Code**:
```jsl
Open("data_table.jmp");
:height << set property( "Value Labels", {65 <= "top quartile" <= 70} );
```

**Code Explanation**:

1. Open data table;
2. Set value labels for height.



### Example 10
> **Summary**: Vizualizes mean profit by product line and quarter using Graph Builder in JMP, with customized age value colors.

<!-- Keywords: #GraphBuilder, #JMPScriptingLanguage, #DataVisualization, #ProfitAnalysis, #Customization -->

**Code**:
```jsl
Open("data_table.jmp");
:age << set property( "Value Colors", {12 = -13977687, 13 = -3780931, 14 = -4222943, 15 = -13596966, 16 = -2211217, 17 = -10562780} );
```

**Code Explanation**:

1. Open data table;
2. Set age value colors.



### Example 11
> **Summary**: Sets up a Graph Builder bar chart to visualize mean profit by product line and quarter from the Profit by Product dataset.

<!-- Keywords: #GraphBuilder, #BarChart, #ProfitAnalysis, #ProductLine, #QuarterlyData -->

**Code**:
```jsl
dt = Open( "data_table.jmp", invisible );
dt:Model << Set Property( "Link ID", 1 );
```

**Code Explanation**:

1. Open table.
2. Set property on model.



### Example 12
> **Summary**: Sets up a data table by opening the 'data_table.jmp' file and setting the link ID property.

<!-- Keywords: #JSLScriptingLanguage, #DataTableSetup, #LinkIDProperty, #GraphBuilder, #JMPScripting -->

**Code**:
```jsl
dt2 = Open( "data_table.jmp", invisible );
dt2:Person << Set Property( "Link ID", 1 );
```

**Code Explanation**:

1. Open data table.
2. Set link ID property.



### Example 13
> **Summary**: Vizualizes mean profit by product line and quarter using Graph Builder in JMP.

<!-- Keywords: #GraphBuilder, #BarChart, #ProfitAnalysis, #ProductLine, #QuarterlyData -->

**Code**:
```jsl
dt = Open("data_table.jmp");
:JOB << Set Property( "Missing Value Codes", {"Other"} );
```

**Code Explanation**:

1. Open data table.
2. Set missing value codes.



### Example 14
> **Summary**: Sets up a data table by opening a file and setting properties for the Person column.

<!-- Keywords: #JSLScriptingLanguage, #DataTableSetup, #PropertySetting, #GraphBuilder, #DataVisualization -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
dt2:Person << Set Property( "Link ID", 1 );
```

**Code Explanation**:

1. Open data table;
2. Assign table to dt2 variable.
3. Set property for Person column.



### Example 15
> **Summary**: Configures a side-by-side bar chart in Graph Builder to visualize mean profit by product line and quarter from the Profit by Product dataset.

<!-- Keywords: #GraphBuilder, #BarChart, #ProfitAnalysis, #ProductLine, #QuarterlyData -->

**Code**:
```jsl
dt fam = Open("data_table.jmp");
dt fam:sports << Set Property( "Notes", "Played regularly" );
```

**Code Explanation**:

1. Open data table.
2. Set notes property for sports column.



## Set Property using Value Labels
> **Summary**: Configures a data table by setting value labels, enabling value labels, and specifying missing value codes for the sex variable.

<!-- Keywords: #JSLScriptingLanguage, #DataTableConfiguration, #ValueLabels, #MissingValueCodes, #JMP -->

**Code**:
```jsl
Open("data_table.jmp");
:sex << Value Labels( {"F" = "Female", "M" = "Male"} );
:sex << use Value Labels( 1 );
:sex << set property( "missing value codes", {"F"} );
```

**Code Explanation**:

1. Open data table;
2. Set value labels for sex.
3. Enable value labels for sex.
4. Set missing value codes for sex.




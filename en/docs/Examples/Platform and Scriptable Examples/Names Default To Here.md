# Names Default To Here

## Names Default To Here using New Project
### Example 1
> **Summary**: Create and execute a new JMP project, running a Bivariate analysis script on an open data table, and saving the project to a temporary location.

<!-- Keywords: #JMPScriptingLanguage, #BivariateAnalysis, #DataTableManagement, #ProjectAutomation, #ScriptExecution -->

**Code**:
```jsl
Names Default To Here( 1 );
project = New Project();
project << Run Script(
	dt = Open("data_table.jmp");
	dt << Run Script( "Bivariate" );
);
project << save( "$TEMP/project.jmpprj" );
project << close window();
Open( "$TEMP/project.jmpprj" );
```

**Code Explanation**:

1. Set default names.
2. Create new project.
3. Run script on project.
4. Open data table.
5. Run Bivariate analysis script.
6. Save project to temp.
7. Close project window.
8. Open saved project.



### Example 2
> **Summary**: Create and execute a new JMP project, running a Contingency script on an open data table and saving the project to a temporary file.

<!-- Keywords: #JMPScriptingLanguage, #ContingencyAnalysis, #DataTableManagement, #ProjectAutomation, #ScriptExecution -->

**Code**:
```jsl
Names Default To Here( 1 );
project = New Project();
project << Run Script(
	dt = Open("data_table.jmp");
	dt << Run Script( "Contingency" );
);
project << save( "$TEMP/project.jmpprj" );
project << close window();
Open( "$TEMP/project.jmpprj" );
```

**Code Explanation**:

1. Set default names.
2. Create new project.
3. Run script on project.
4. Open data table.
5. Run Contingency script on table.
6. Save project to temporary file.
7. Close project window.
8. Open saved project file.



### Example 3
> **Summary**: Create and execute a new JMP project, including running a Distribution analysis script on a data table, saving the project to a temporary location, and reopening it.

<!-- Keywords: #JMPScriptingLanguage, #DataAnalysisAutomation, #ProjectManagement, #DistributionAnalysis, #Scripting -->

**Code**:
```jsl
Names Default To Here( 1 );
project = New Project();
project << Run Script(
	dt = Open("data_table.jmp");
	dt << Run Script( "Distribution" );
);
project << save( "$TEMP/project.jmpprj" );
project << close window();
Open( "$TEMP/project.jmpprj" );
```

**Code Explanation**:

1. Set default names.
2. Create new project.
3. Run script on project.
4. Open data table.
5. Run Distribution analysis script.
6. Save project to temp.
7. Close project window.
8. Open saved project.



### Example 4
> **Summary**: Create and execute a new JMP project, fitting a model to a data table, saving the project to a temporary file, and then reopening it.

<!-- Keywords: #JMPScriptingLanguage, #DataTable, #FitModel, #ProjectAutomation, #ScriptExecution -->

**Code**:
```jsl
Names Default To Here( 1 );
project = New Project();
project << Run Script(
	dt = Open("data_table.jmp");
	dt << Run Script( "Fit Model" );
);
project << save( "$TEMP/project.jmpprj" );
project << close window();
Open( "$TEMP/project.jmpprj" );
```

**Code Explanation**:

1. Set default names.
2. Create new project.
3. Run script on project.
4. Open data table.
5. Run Fit Model script on data table.
6. Save project to temp file.
7. Close project window.
8. Open saved project file.



### Example 5
> **Summary**: Create and execute a script in JMP, including opening a data table, running a 'Graph Builder Heat Map' script, and saving the project to a temporary location.

<!-- Keywords: #JMPScriptingLanguage, #GraphBuilder, #HeatMap, #DataTableManagement, #ScriptAutomation -->

**Code**:
```jsl
Names Default To Here( 1 );
project = New Project();
project << Run Script(
	dt = Open("data_table.jmp");
	dt << Run Script( "Graph Builder Heat Map" );
);
project << save( "$TEMP/project.jmpprj" );
project << close window();
Open( "$TEMP/project.jmpprj" );
```

**Code Explanation**:

1. Set default names.
2. Create new project.
3. Run script in project.
4. Open data table.
5. Run "Graph Builder Heat Map" script.
6. Save project to temp.
7. Close project window.
8. Open saved project.



### Example 6
> **Summary**: Creates a new project, runs a graph builder script on a data table, and saves the project to a temporary location.

<!-- Keywords: #JMPScriptingLanguage, #GraphBuilder, #DataTable, #ProjectManagement, #ScriptAutomation -->

**Code**:
```jsl
Names Default To Here( 1 );
project = New Project();
project << Run Script(
	dt = Open("data_table.jmp");
	dt << Run Script( "Graph Builder Line and Bar Charts" );
);
project << save( "$TEMP/project.jmpprj" );
project << close window();
Open( "$TEMP/project.jmpprj" );
```

**Code Explanation**:

1. Set default names scope.
2. Create new project.
3. Run script on project.
4. Open data table.
5. Run graph builder script.
6. Save project to temp.
7. Close project window.
8. Open saved project.



### Example 7
> **Summary**: Creates a new JMP project, runs a script on the data table, and saves the project to a temporary location.

<!-- Keywords: #JMPScripting, #DataTableManipulation, #ProjectManagement, #ScriptExecution, #TemporaryFileHandling -->

**Code**:
```jsl
Names Default To Here( 1 );
project = New Project();
project << Run Script(
	dt = Open("data_table.jmp");
	dt << Run Script( "Graph Builder Line Chart" );
);
project << save( "$TEMP/project.jmpprj" );
project << close window();
Open( "$TEMP/project.jmpprj" );
```

**Code Explanation**:

1. Set default names.
2. Create new project.
3. Run script on project.
4. Open data table.
5. Run named script on data.
6. Save project to temp.
7. Close project window.
8. Open saved project.



### Example 8
> **Summary**: Create and execute a new JMP project, opening a data table, running a graph builder smoother line script, saving the project to a temporary location, closing the window, and then reopening the saved project.

<!-- Keywords: #JMPScriptingLanguage, #GraphBuilder, #DataTable, #ProjectAutomation, #ScriptExecution -->

**Code**:
```jsl
Names Default To Here( 1 );
project = New Project();
project << Run Script(
	dt = Open("data_table.jmp");
	dt << Run Script( "Graph Builder Smoother Line" );
);
project << save( "$TEMP/project.jmpprj" );
project << close window();
Open( "$TEMP/project.jmpprj" );
```

**Code Explanation**:

1. Set default names.
2. Create new project.
3. Run script in project.
4. Open data table.
5. Run graph builder smoother line script.
6. Save project to temp.
7. Close project window.
8. Open saved project.



### Example 9
> **Summary**: Creates a new JMP project, runs the 'Six Quality Graphs' script, and saves the project to a temporary location.

<!-- Keywords: #JMPScripting, #NewProject, #DataTable, #GraphBuilder, #ScriptExecution -->

**Code**:
```jsl
Names Default To Here( 1 );
project = New Project();
project << Run Script(
	dt = Open("data_table.jmp");
	dt << Run Script( "JMP Application: Six Quality Graphs" );
);
project << save( "$TEMP/project.jmpprj" );
project << close window();
Open( "$TEMP/project.jmpprj" );
```

**Code Explanation**:

1. Set default names.
2. Create new project.
3. Run script in project.
4. Open data table.
5. Run "Six Quality Graphs" script.
6. Save project to temp.
7. Close project window.
8. Open saved project.



### Example 10
> **Summary**: Creates a new JMP project, runs a 'Logistic' script on a data table, saves the project to a temporary file, and then opens the saved project file.

<!-- Keywords: #JMPScriptingLanguage, #LogisticRegression, #DataTableOperations, #ProjectManagement, #ScriptExecution -->

**Code**:
```jsl
Names Default To Here( 1 );
project = New Project();
project << Run Script(
	dt = Open("data_table.jmp");
	dt << Run Script( "Logistic" );
);
project << save( "$TEMP/project.jmpprj" );
project << close window();
Open( "$TEMP/project.jmpprj" );
```

**Code Explanation**:

1. Set default names.
2. Create new project.
3. Run script in project.
4. Open data table.
5. Run "Logistic" script on data table.
6. Save project to temporary file.
7. Close project window.
8. Open saved project file.



### Example 11
> **Summary**: Create and execute a new JMP project, opening a data table, running an Oneway analysis, saving the project, and reopening it.

<!-- Keywords: #JMPScriptingLanguage, #NewProject, #DataTable, #OnewayAnalysis, #ProjectManagement -->

**Code**:
```jsl
Names Default To Here( 1 );
project = New Project();
project << Run Script(
	dt = Open("data_table.jmp");
	dt << Run Script( "Oneway" );
);
project << save( "$TEMP/project.jmpprj" );
project << close window();
Open( "$TEMP/project.jmpprj" );
```

**Code Explanation**:

1. Set default names.
2. Create new project.
3. Run script in project.
4. Open data table;
5. Run Oneway analysis.
6. Save project.
7. Close project window.
8. Open saved project.



## Names Default To Here using Enable Experimental Data Table GUI
> **Summary**: This script sets the default name scope, enables the experimental data table GUI, and opens a JMP data table named 'data_table.jmp'.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #ExperimentalDataTableGUI, #JMP, #Scripting -->

**Code**:
```jsl
Names Default To Here( 1 );
Preferences[1] << Set( Enable Experimental Data Table GUI( 1 ) );
Open("data_table.jmp");
```

**Code Explanation**:

1. Set default names scope.
2. Enable experimental data table GUI.
3. Open data_table data



## Names Default To Here using Chart
### Example 1
> **Summary**: Creates a chart object with X-axis set to 'Age' and Y-axis set to count, using data from an open JMP data table.

<!-- Keywords: #JMPScriptingLanguage, #DataTable, #ChartObject, #X-Axis, #Y-Axis -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = Chart( X( :Age ), Y( N ) );
```

**Code Explanation**:

1. Set default names.
2. Open data table;
3. Create chart object.
4. Set X-axis to "Age".
5. Set Y-axis to count.



### Example 2
> **Summary**: Creates a horizontal chart with X-axis set to Age and Y-axis set to N from an open data table.

<!-- Keywords: #JSLScriptingLanguage, #DataVisualization, #Charting, #JMP, #DataAnalysis -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = Chart( X( :Age ), Y( N ) );
obj << Horizontal Chart( 1 );
```

**Code Explanation**:

1. Set default names scope.
2. Open data table;
3. Create chart object.
4. Set X axis to Age.
5. Set Y axis to N.
6. Convert chart to horizontal.



### Example 3
> **Summary**: Creates a line chart with X-axis set to Age and Y-axis set to N from an open data table.

<!-- Keywords: #JSLScriptingLanguage, #LineChart, #DataTable, #ChartObject, #JMP -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = Chart( X( :Age ), Y( N ) );
obj << Line Chart( 1 );
```

**Code Explanation**:

1. Set default names scope.
2. Open data table;
3. Create chart object.
4. Set X-axis to Age.
5. Set Y-axis to N.
6. Convert chart to line chart.



### Example 4
> **Summary**: Creates a pie chart from a data table, with X-axis set to Age and Y-axis set to count.

<!-- Keywords: #JMPScriptingLanguage, #PieChart, #DataTable, #ChartObject, #Visualization -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = Chart( X( :Age ), Y( N ) );
obj << Pie Chart( 1 );
```

**Code Explanation**:

1. Set default names.
2. Open data table;
3. Create chart object.
4. Set X axis to Age.
5. Set Y axis to count.
6. Convert chart to pie chart.



### Example 5
> **Summary**: Creates a chart object with grouped data by sex, using Age as the X-axis and count as the Y-axis, and then ungroups the charts.

<!-- Keywords: #JSLScriptingLanguage, #ChartObject, #DataGrouping, #UngroupCharts, #JMPScripting -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = Chart( Grouping( :sex ), X( :Age ), Y( N ) );
obj << Ungroup Charts( 1 );
```

**Code Explanation**:

1. Set default names.
2. Open data table.
3. Create chart object.
4. Group by sex.
5. Set X axis to Age.
6. Set Y axis to count.
7. Ungroup charts option.
8. Apply ungroup charts setting.



### Example 6
> **Summary**: Creates a vertical chart with 'Age' on the X-axis and 'N' on the Y-axis from the data_table.jmp file.

<!-- Keywords: #JSLScriptingLanguage, #VerticalChart, #DataTable, #ChartObject, #JMP -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = Chart( X( :Age ), Y( N ) );
obj << Vertical Chart( 1 );
```

**Code Explanation**:

1. Set default names.
2. Open data_table data
3. Create chart object.
4. Set X axis to "Age".
5. Set Y axis to "N".
6. Apply vertical chart style.



> **Summary**: Opens a data table and sets default names scope.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #NamesScope, #ScriptingAutomation, #JSLBasics -->

**Code**:
```jsl
Open("data_table.jmp");
Names Default To Here( 1 );
```

**Code Explanation**:

1. Open data table;
2. Set default names scope.



## Names Default To Here using Run Script
> **Summary**: Configures a SEM path diagram to show means, hide covariances and other details, and customize appearance.

<!-- Keywords: #JSL, #SEM, #PathDiagram, #DataVisualization, #JMP -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Covariances( 0 ) );
obj << Path Diagram Properties( Show Equality Constraints( 0 ) );
obj << Path Diagram Properties( Show Estimates( "None" ) );
obj << Path Diagram Properties( Show Loadings( 0 ) );
obj << Path Diagram Properties( Show Means( 1 ) );
obj << Path Diagram Properties( Show Regressions( 0 ) );
obj << Path Diagram Properties( Show Variances( 0 ) );
```

**Code Explanation**:

1. Set default names.
2. Open data table.
3. Run SEM script.
4. Hide covariances.
5. Hide equality constraints.
6. Hide estimates.
7. Hide loadings.
8. Show means.
9. Hide regressions.
10. Hide variances.




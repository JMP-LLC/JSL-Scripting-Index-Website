# Run Script

### Example 1
> **Summary**: Opens a data table, runs a distribution script, and modifies the path diagram properties to customize the appearance of paths in the SEM model.

<!-- Keywords: #JSLScriptingLanguage, #SEMPathAnalysis, #PathDiagramProperties, #DataTableManagement, #ScriptingforJMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dist = dt << Run Script( "Distribution" );
```

**Code Explanation**:

1. Open data table.
2. Run distribution script.



### Example 2
> **Summary**: Opens a data table, runs the Distribution script, and shows its properties. It then uses the Path Diagram Properties to customize the appearance of paths in the diagram.

<!-- Keywords: #JMPScriptingLanguage, #PathDiagram, #DataVisualization, #SEMAnalysis, #JMP16 -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dist = dt << Run Script( "Distribution" );
dist << Show Properties;
```

**Code Explanation**:

1. Open data table.
2. Run Distribution script on data table.
3. Show properties of Distribution output.



### Example 3
> **Summary**: Creates a path diagram with customized appearance and thickness settings, utilizing the Run Script function to execute the 'Bubble Country by Year' script.

<!-- Keywords: #JMPScriptingLanguage, #PathDiagram, #Customization, #RunScript, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Run Script( "Bubble Country by Year" );
```

**Code Explanation**:

1. Open data table.
2. Run script named "Bubble Country by Year".



### Example 4
> **Summary**: Creates a bubble plot with local data filtering, utilizing the Run Script function in JMP.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #LocalDataFilter, #PathDiagramProperties, #SEMAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << run script( "Bubble Plot with Local Data Filter" );
```

**Code Explanation**:

1. Open data table;
2. Run Bubble Plot script.



### Example 5
> **Summary**: Generates a report by running a Cell Plot script on a data table and retrieving the report object.

<!-- Keywords: #JSLScriptingLanguage, #CellPlot, #ReportGeneration, #DataVisualization, #PathDiagram -->

**Code**:
```jsl
dt = Open("data_table.jmp");
rpt = (dt << run script( "Cell Plot" )) << report;
```

**Code Explanation**:

1. Open data table.
2. Run Cell Plot script.
3. Retrieve report object.



### Example 6
> **Summary**: Creates a path diagram with customizable styles, thickness, and transparency using the Run Script function in JMP.

<!-- Keywords: #JMP, #PathDiagram, #RunScript, #SEM, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << run script( "Fit Life by X" );
```

**Code Explanation**:

1. Open data table;
2. Run "Fit Life by X" script.



### Example 7
> **Summary**: Creates a path diagram for SEM analysis, utilizing Run Script and Path Diagram Properties to customize appearance and thickness.

<!-- Keywords: #JMP, #SEM, #PathDiagram, #RunScript, #PathDiagramProperties -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << run script( "Bivariate" );
```

**Code Explanation**:

1. Open table.
2. Run Bivariate script.



### Example 8
> **Summary**: Creates a path diagram for logistic regression analysis, allowing users to customize appearance and thickness settings.

<!-- Keywords: #JMPScriptingLanguage, #LogisticRegression, #PathDiagrams, #DataVisualization, #SEMAnalysis -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = dt under test << run script( "Logistic" );
```

**Code Explanation**:

1. Open table.
2. Run logistic script.



### Example 9
> **Summary**: Creates a ternary plot from a data table, utilizing the Run Script function to execute the 'Ternary Plot' script.

<!-- Keywords: #JMPScriptingLanguage, #TernaryPlot, #DataVisualization, #PathDiagram, #SEM -->

**Code**:
```jsl
dt = Open("data_table.jmp");
tern = dt << Run Script( "Ternary Plot" );
```

**Code Explanation**:

1. Open table.
2. Run ternary plot script.



### Example 10
> **Summary**: Creates a mosaic plot in Graph Builder, utilizing the Run Script function to generate a visual representation of data.

<!-- Keywords: #JMPScriptingLanguage, #GraphBuilder, #MosaicPlot, #DataVisualization, #PathDiagram -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Run Script( "Graph Builder Mosaic Plot" );
```

**Code Explanation**:

1. Open data table;
2. Run graph builder script.



### Example 11
> **Summary**: Creates a path diagram with customized styles, thickness, and transparency using Graph Builder in JMP.

<!-- Keywords: #JMP, #GraphBuilder, #PathDiagram, #SEM, #PathStyles -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Run Script( "Graph Builder with Pictures" );
```

**Code Explanation**:

1. Open data table.
2. Run named script.



### Example 12
> **Summary**: Creates a path diagram with customizable appearance and interactive features, utilizing the Graph Builder with Pictures script.

<!-- Keywords: #JMPScriptingLanguage, #PathDiagrams, #GraphBuilder, #CustomizationOptions, #InteractiveFeatures -->

**Code**:
```jsl
dt = Open("data_table.jmp");
rpt = dt << Run Script( "Graph Builder with Pictures" );
```

**Code Explanation**:

1. Open table.
2. Run script named "Graph Builder with Pictures".



### Example 13
> **Summary**: Process of setting sex value labels in a data table, utilizing the Run Script function.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #PathDiagramProperties, #SEMAnalysis, #JMP16 -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Run Script( "Set Sex Value Labels" );
```

**Code Explanation**:

1. Open data table.
2. Run script for setting labels.



### Example 14
> **Summary**: Executes a Discriminant analysis script on a data table, generating a path diagram with customizable styles and properties.

<!-- Keywords: #JMPScriptingLanguage, #PathDiagrams, #DiscriminantAnalysis, #DataTableOperations, #SEM -->

**Code**:
```jsl
dt = Open("data_table.jmp");
disc = dt << run script( "Discriminant" );
```

**Code Explanation**:

1. Open data table;
2. Run Discriminant analysis script.



### Example 15
> **Summary**: Runs the K Nearest Neighbors algorithm on a data table to identify nearest neighbors of BAD, utilizing Run Script functionality in JMP.

<!-- Keywords: #JMPScriptingLanguage, #KNearestNeighbors, #DataAnalysis, #MachineLearning, #PathDiagram -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << run script( "K Nearest Neighbors of BAD" );
```

**Code Explanation**:

1. Open data table;
2. Run K Nearest Neighbors script.



### Example 16
> **Summary**: Creates a path diagram with customized styles, thickness, and transparency using the Run Script function in JMP.

<!-- Keywords: #JMP, #PathDiagram, #RunScript, #SEM, #PathStyles -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << run script( "Life Distribution" );
```

**Code Explanation**:

1. Open data table.
2. Run Life Distribution script.



### Example 17
> **Summary**: Creates a path diagram with customized styles, thickness, and transparency using the Run Script function in JMP.

<!-- Keywords: #JMP, #SEM, #PathDiagram, #Scripting, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << run script( "Logistic" );
```

**Code Explanation**:

1. Open data table.
2. Run logistic script.



### Example 18
> **Summary**: Creates a path diagram with customized styles, thickness, and transparency using the Run Script function in JMP.

<!-- Keywords: #JMP, #PathDiagram, #RunScript, #Customization, #SEM -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << run script( "Nonlinear - disjoint linear" );
```

**Code Explanation**:

1. Open data table.
2. Run nonlinear script.



### Example 19
> **Summary**: Creates a path diagram from a data table, utilizing the Run Script function to execute a Bivariate script and configure path styles, thickness, and transparency.

<!-- Keywords: #JSLScriptingLanguage, #PathDiagram, #BivariateAnalysis, #SEM, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
biv = dt << Run Script( "Bivariate" );
```

**Code Explanation**:

1. Open data table;
2. Run Bivariate script.



### Example 20
> **Summary**: Executes a script named 'Distribution' in a JMP data table, retrieving and running all scripts from the data table.

<!-- Keywords: #JMPScriptingLanguage, #PathDiagramProperties, #SEMPathAnalysisw/Latent, #RunScript, #DataTableOperations -->

**Code**:
```jsl
dt1 = Open( "$SAMPLE_DATA/data_table.jmp", invisible );
dt1 << get script;
dt1 << run script( "Distribution" );
```

**Code Explanation**:

1. Open data table;
2. Assign data table to dt1.
3. Retrieve all scripts from dt1.
4. Run script named "Distribution".



### Example 21
> **Summary**: Creates a path diagram from a data table, utilizing the Run Script function to execute a Bivariate script and configure path styles, thickness, and transparency.

<!-- Keywords: #JMPScriptingLanguage, #PathDiagram, #BivariateAnalysis, #DataVisualization, #SEM -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", "private" );
biv = dt << Run Script( "Bivariate" );
```

**Code Explanation**:

1. Open data table.
2. Set table visibility to private.
3. Run Bivariate script on table.



### Example 22
> **Summary**: Creates a bivariate analysis and path diagram from a data table, utilizing the Run Script function to execute the Bivariate script.

<!-- Keywords: #JSLScripting, #BivariateAnalysis, #PathDiagram, #DataVisualization, #JMP -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", "invisible" );
biv = dt << Run Script( "Bivariate" );
```

**Code Explanation**:

1. Open data table;
2. Run Bivariate script on dataset.



### Example 23
> **Summary**: Creates a path diagram for SEM analysis, utilizing the Neural script and Report() function to generate a node graph box with customizable path styles, thickness, and transparency.

<!-- Keywords: #JMPScriptingLanguage, #SEMAnalysis, #PathDiagram, #NeuralNetwork, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Run Script( "Neural" );
```

**Code Explanation**:

1. Open table.
2. Run neural network script.



### Example 24
> **Summary**: Creates a path diagram with customizable styles, thickness, and transparency using the Run Script function in JMP.

<!-- Keywords: #JMPScriptingLanguage, #PathDiagram, #CustomizationOptions, #RunScriptFunction, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Run Script( "Categorical Several" );
```

**Code Explanation**:

1. Open data table.
2. Run script "Categorical Several".



### Example 25
> **Summary**: Process of running a script named 'Fit Definitive Screening' on an open data table, generating a path diagram with customizable appearance and properties.

<!-- Keywords: #JSLScriptingLanguage, #PathDiagram, #SEM, #DataAnalysis, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Run Script( "Fit Definitive Screening" );
```

**Code Explanation**:

1. Open data table.
2. Run script named "Fit Definitive Screening".



### Example 26
> **Summary**: Executes a Structural Equation Modeling (SEM) script using Bollen's 1989 method, hiding latent indicators and displaying path diagram properties.

<!-- Keywords: #JMPScriptingLanguage, #StructuralEquationModeling, #PathDiagrams, #DataAnalysis, #BollenSEM -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Show Latent Indicators( 0 );
```

**Code Explanation**:

1. Open data table;
2. Run SEM: Bollen (1989) script.
3. Hide latent indicators.



### Example 27
> **Summary**: Executes a structural equation model (SEM) using the Bollen (1989) method, and configures the path diagram to display variances.

<!-- Keywords: #JMPScriptingLanguage, #StructuralEquationModeling, #PathDiagram, #Bollen(1989), #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Show Variances( 0 );
```

**Code Explanation**:

1. Open table.
2. Run SEM script.
3. Hide variances.



### Example 28
> **Summary**: Fits a mixture model to a data table, utilizing the 'Life Distribution' script and generating a report with diagram properties.

<!-- Keywords: #JSLScriptingLanguage, #MixtureModelFitting, #DataTableAnalysis, #PathDiagramProperties, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Run Script( "Life Distribution" );
obj << Fit Mixture;
```

**Code Explanation**:

1. Open data table.
2. Run "Life Distribution" script.
3. Fit mixture model.



### Example 29
> **Summary**: Executes the Functional Data Explorer script, selecting 'B-Splines' and generating a report with data points from the Profiler object.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #PathDiagramProperties, #DataPoints, #ProfilerObject -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Run Script( "Functional Data Explorer" );
obj << "B-Splines"n;
objProfiler = Profiler[1];
objProfiler << Data Points;
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Run script "Functional Data Explorer".
3. Select "B-Splines" option.
4. Access Profiler object.
5. Show data points.
6. Generate report.



### Example 30
> **Summary**: Creates a path diagram from a data table, utilizing the Run Script function to execute the Distribution script and configure path styles, thickness, and transparency.

<!-- Keywords: #JSLScriptingLanguage, #PathDiagram, #DataVisualization, #SEMAnalysis, #JMP16 -->

**Code**:
```jsl
dt_bc = Open("data_table.jmp");
dis = dt_bc << Run Script( "Distribution" );
```

**Code Explanation**:

1. Open data table;
2. Run Distribution script.



### Example 31
> **Summary**: Creates two bubble plots with local data filters and a map, utilizing Run Script() to execute custom scripts.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #LocalDataFilter, #MapVisualization, #RunScript -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bubble1 = dt << Run Script( "Bubble Plot with Local Data Filter" );
bubble2 = dt << Run Script( "Bubble Plot with Map" );
```

**Code Explanation**:

1. Open table.
2. Run bubble plot script.
3. Run bubble map script.



### Example 32
> **Summary**: Creates a path diagram for a data table, utilizing the Run Script function to execute Distribution and Bivariate scripts.

<!-- Keywords: #JMPScriptingLanguage, #PathDiagram, #DataVisualization, #SEM, #RunScript -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
dis = dt1 << Run Script( "Distribution" );
biv = dt1 << Run Script( "Bivariate" );
```

**Code Explanation**:

1. Open data table.
2. Run Distribution script on table.
3. Run Bivariate script on table.



### Example 33
> **Summary**: Creates a path diagram for bivariate analysis, utilizing the Run Script function to execute the 'Bivariate' script and generate a report with node graph box properties.

<!-- Keywords: #JSLScriptingLanguage, #PathDiagram, #BivariateAnalysis, #JMP, #DataVisualization -->

**Code**:
```jsl
dt_bc = Open("data_table.jmp");
biv = dt_bc << Run Script( "Bivariate" );
```

**Code Explanation**:

1. Open data table.
2. Run Bivariate analysis script.



### Example 34
> **Summary**: Creates a path diagram from a data table, allowing for customization of appearance and thickness.

<!-- Keywords: #PathDiagram, #JSLScripting, #SEMAnalysis, #DataVisualization, #JMP -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
dis = dt1 << Run Script( "Distribution" );
```

**Code Explanation**:

1. Open data table.
2. Run distribution script.



### Example 35
> **Summary**: Creates a 3D scatterplot from a data table, utilizing the Run Script function.

<!-- Keywords: #JMPScriptingLanguage, #RunScript, #Scatterplot, #DataVisualization, #PathDiagramProperties -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
scat = dt2 << Run Script( "Scatterplot 3D" );
```

**Code Explanation**:

1. Open data table;
2. Run 3D Scatterplot script.



### Example 36
> **Summary**: Executes Bivariate and Oneway analysis scripts on a data table, leveraging JMP's Run Script functionality.

<!-- Keywords: #JMPScriptingLanguage, #DataAnalysis, #BivariateAnalysis, #OnewayAnalysis, #RunScript -->

**Code**:
```jsl
dt = Open("data_table.jmp");
biv = dt << Run Script( "Bivariate" );
oneway = dt << Run Script( "Oneway" );
```

**Code Explanation**:

1. Open data table;
2. Run Bivariate analysis script.
3. Run Oneway analysis script.



### Example 37
> **Summary**: Creates a bubble plot with local data filtering, utilizing Run Script and Bubble Plot functionality in JMP.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #LocalDataFilter, #RunScript, #PathDiagramProperties -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bubble1 = dt << Run Script( "Bubble Plot with Local Data Filter" );
```

**Code Explanation**:

1. Open data table;
2. Run Bubble Plot script.



## Run Script using Select Randomly
> **Summary**: Selects and visualizes a subset of data using random sampling, exclusion, and bubble plotting in JMP.

<!-- Keywords: #JMPScriptingLanguage, #DataSelection, #BubblePlot, #RandomSampling, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Randomly( 0.8 );
dt << Exclude;
dt << Clear Select;
dt << Select Excluded;
dt << Invert Row Selection;
dt << Exclude;
dt << Run Script( "Bubble Plot Region" );
```

**Code Explanation**:

1. Open data table.
2. Select rows randomly.
3. Exclude selected rows.
4. Clear row selection.
5. Select excluded rows.
6. Invert row selection.
7. Exclude newly selected rows.
8. Run Bubble Plot script.



## Run Script using CellPlotBox
> **Summary**: Generates a cell plot report from a data table, sorting labels in ascending order.

<!-- Keywords: #JMPScriptingLanguage, #CellPlot, #DataVisualization, #ReportGeneration, #Sorting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
rpt = (dt << run script( "Cell Plot" )) << report;
rpt[CellPlotBox( 1 )] << Sort Ascending;
```

**Code Explanation**:

1. Open data table.
2. Run Cell Plot script.
3. Get report object.
4. Access first CellPlotBox.
5. Sort labels ascending.




# Cell Plot

### Example 1
> **Summary**: Generates a Cell Plot to visualize the relationships and distributions of verbal scores, test-taking percentages, and geographic locations (states) based on the SAT dataset.

<!-- Keywords: #JMPScriptingLanguage, #CellPlot, #DataVisualization, #SATDataset, #GeographicAnalysis -->

**Code**:
```jsl
// Cell Plot
// Open data table
dt = Open("data_table.jmp");
// Cell Plot
Cell Plot(
	Y(
		:"2004 Verbal"n, :"2004 Math"n,
		:"2003 Verbal"n, :"2003 Math"n,
		:"2002 Verbal"n, :"2002 Math"n,
		:"2001 Verbal"n, :"2001 Math"n,
		:"1999 Verbal"n, :"1999 Math"n,
		:"1994 Verbal"n, :"1994 Math"n,
		:"1997 Verbal"n, :"1997 Math"n,
		:"1992 Verbal"n, :"1992 Math"n
	),
	Label( :State )
);
```

**Code Explanation**:

1. Open data table.
2. Create cell plot.
3. Set Y variables.
4. Include multiple years' data.
5. Add verbal and math scores.
6. Label rows by state.
7. Display cell plot.



### Example 2
> **Summary**: Creates a cell plot to visualize and filter data for specific names, utilizing Local Data Filter and Label features in JMP.

<!-- Keywords: #JMPScriptingLanguage, #CellPlot, #LocalDataFilter, #LabelFeature, #DataVisualization -->

**Code**:
```jsl
Open("data_table.jmp");
Cell Plot(
	Scale Uniformly( 0 ),
	Center at zero( 0 ),
	Y( :sex, :height, :weight ),
	Label( :name ),
	Local Data Filter(
		Add Filter(
			columns( :name ),
			Where( :name == {"ALFRED", "ALICE", "AMY", "BARBARA"} ),
			Display( :name, Size( 160, 225 ), List Display )
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create cell plot.
3. Scale uniformly.
4. Center at zero.
5. Set Y variables: sex, height, weight.
6. Label by name.
7. Add local data filter.
8. Filter by specific names.
9. Display filtered names.
10. Set filter size.



### Example 3
> **Summary**: Generates a cell plot to visualize and analyze verbal scores, test-taking percentages, and geographic locations (states) based on the SAT dataset.

<!-- Keywords: #JSLScriptingLanguage, #CellPlot, #DataVisualization, #SATdataset, #GeographicAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Cell Plot( Scale Uniformly( 0 ), Center at zero( 0 ), Y( :name, :height, :weight ), X( :age ) );
```

**Code Explanation**:

1. Open data table.
2. Create cell plot.
3. Set uniform scaling.
4. Disable center at zero.
5. Assign Y variables.
6. Assign X variable.



### Example 4
> **Summary**: Vizualizes SAT dataset to analyze verbal scores, test-taking percentages, and geographic locations (states) using a Cell Plot.

<!-- Keywords: #JMPScriptingLanguage, #CellPlot, #DataVisualization, #SATDataset, #StateAnalysis -->

**Code**:
```jsl
Open("data_table.jmp");
Cell Plot(
	Y(
		:Name( "2004 Verbal" ), :Name( "2004 Math" ), :Name( "2003 Verbal" ), :Name( "2003 Math" ), :Name( "2002 Verbal" ),
		:Name( "2002 Math" ), :Name( "2001 Verbal" ), :Name( "2001 Math" ), :Name( "1999 Verbal" ), :Name( "1999 Math" ),
		:Name( "1994 Verbal" ), :Name( "1994 Math" ), :Name( "1997 Verbal" ), :Name( "1997 Math" ), :Name( "1992 Verbal" ),
		:Name( "1992 Math" )
	),
	Label( :State )
);
```

**Code Explanation**:

1. Open data table.
2. Create cell plot.
3. Set Y variables.
4. Include multiple years' verbal scores.
5. Include multiple years' math scores.
6. Use State for labels.
7. Display cell plot.



### Example 5
> **Summary**: Vizualizes verbal scores, test-taking percentages, and geographic locations (states) using a Cell Plot in JMP.

<!-- Keywords: #JMP, #CellPlot, #Visualization, #DataAnalysis, #Statistics -->

**Code**:
```jsl
Open("data_table.jmp");
Cell Plot( Scale Uniformly( 0 ), Center at zero( 0 ), Y( :drug, :hist0, :hist1, :hist3, :hist5 ) );
```

**Code Explanation**:

1. Open data table;
2. Create cell plot.
3. Scale uniformly.
4. Center at zero.
5. Set Y variables: drug, hist0, hist1, hist3, hist5.



### Example 6
> **Summary**: Creates a Cell Plot to visualize and analyze verbal scores, test-taking percentages, and geographic locations (states) based on the SAT dataset.

<!-- Keywords: #JMPScriptingLanguage, #CellPlot, #DataVisualization, #SATDataset, #GeographicAnalysis -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = Cell Plot(
	Y(
		:Name( "2004 Verbal" ), :Name( "2004 Math" ), :Name( "2003 Verbal" ), :Name( "2003 Math" ), :Name( "2002 Verbal" ),
		:Name( "2002 Math" ), :Name( "2001 Verbal" ), :Name( "2001 Math" ), :Name( "1999 Verbal" ), :Name( "1999 Math" ),
		:Name( "1994 Verbal" ), :Name( "1994 Math" ), :Name( "1997 Verbal" ), :Name( "1997 Math" ), :Name( "1992 Verbal" ),
		:Name( "1992 Math" )
	)
);
```

**Code Explanation**:

1. Set default names.
2. Open data table;
3. Create cell plot object.
4. Specify Y variables.



### Example 7
> **Summary**: Creates a cell plot to visualize and analyze the relationships between verbal scores, test-taking percentages, and geographic locations (states) in the SAT dataset.

<!-- Keywords: #JSLScriptingLanguage, #CellPlot, #DataVisualization, #SATdataset, #GeographicAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Cell Plot( Y( :hist0, :hist1, :hist3, :hist5 ), X( :drug ) );
```

**Code Explanation**:

1. Open data table;
2. Create cell plot object.
3. Set Y variables: hist0, hist1, hist3, hist5.
4. Set X variable: drug.



### Example 8
> **Summary**: Vizualizes SAT dataset to analyze verbal scores, test-taking percentages, and geographic locations (states) using a Cell Plot.

<!-- Keywords: #JSLScriptingLanguage, #CellPlot, #DataVisualization, #SATdataset, #GeographicAnalysis -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = Cell Plot( Y( :hist0, :hist1, :hist3, :hist5 ), X( :drug ) );
obj << Arrange Plots( 1 );
```

**Code Explanation**:

1. Set default names to current.
2. Open data table;
3. Create cell plot object.
4. Assign variables to Y axis.
5. Assign "drug" to X axis.
6. Arrange plots in single row.



### Example 9
> **Summary**: Vizualizes relationships and distributions between verbal scores, test-taking percentages, and geographic locations (states) using a Cell Plot in JMP.

<!-- Keywords: #JMP, #CellPlot, #DataVisualization, #Treemap, #SATdataset -->

**Code**:
```jsl
Open("data_table.jmp");
Cell Plot(
	Scale Uniformly( 0 ),
	Center at zero( 0 ),
	Y( :sex, :height, :weight ),
	Label( :name ),
	Local Data Filter( Add Filter( columns( :name ), Display( :name, Size( 160, 225 ), List Display ) ) )
);
```

**Code Explanation**:

1. Open data table;
2. Create cell plot.
3. Set uniform scale.
4. Center at zero.
5. Set Y variables.
6. Add labels.
7. Enable local data filter.
8. Add filter for names.
9. Display name filter.
10. Set filter size.



### Example 10
> **Summary**: Vizualizes relationships and distributions between verbal scores, test-taking percentages, and geographic locations (states) using a Cell Plot in JMP.

<!-- Keywords: #JMP, #CellPlot, #Visualization, #DataAnalysis, #Treemap -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Cell Plot( Y( :hist0, :hist1, :hist3, :hist5 ), X( :drug ), Scale Uniformly, Center at zero, Label( :ID ), By( :dep1 ), );
```

**Code Explanation**:

1. Open data table;
2. Create cell plot object.
3. Set Y variables.
4. Set X variable.
5. Scale uniformly.
6. Center at zero.
7. Label with ID.
8. Group by dep1.
9. Display cell plot.



### Example 11
> **Summary**: Vizualizes SAT dataset to analyze verbal scores, test-taking percentages, and geographic locations (states) using a Cell Plot.

<!-- Keywords: #JMPScriptingLanguage, #CellPlot, #DataVisualization, #SATDataset, #StateAnalysis -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Cell Plot(
	Y(
		:Name( "2004 Verbal" ), :Name( "2004 Math" ), :Name( "2003 Verbal" ), :Name( "2003 Math" ), :Name( "2002 Verbal" ),
		:Name( "2002 Math" ), :Name( "2001 Verbal" ), :Name( "2001 Math" ), :Name( "1999 Verbal" ), :Name( "1999 Math" ),
		:Name( "1994 Verbal" ), :Name( "1994 Math" ), :Name( "1997 Verbal" ), :Name( "1997 Math" ), :Name( "1992 Verbal" ),
		:Name( "1992 Math" )
	),
	Label( :State )
);
```

**Code Explanation**:

1. Open data table.
2. Create cell plot object.
3. Set Y variables.
4. Add state labels.
5. Display cell plot.



### Example 12
> **Summary**: Creates a Cell Plot to visualize and analyze verbal scores, test-taking percentages, and geographic locations (states) from the SAT dataset.

<!-- Keywords: #JSLScriptingLanguage, #CellPlot, #DataVisualization, #SATdataset, #GeographicAnalysis -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Cell Plot(
	Scale Uniformly( 0 ),
	Center at zero( 0 ),
	Y( :hist0, :hist1, :hist3, :hist5 ),
	X( :dep1 ),
	Legend( 1 ),
	Arrange Plots( 1 )
);
```

**Code Explanation**:

1. Open data table;
2. Create Cell Plot object.
3. Set uniform scaling.
4. Do not center at zero.
5. Specify Y variables.
6. Specify X variable.
7. Add legend.
8. Arrange plots horizontally.



### Example 13
> **Summary**: Generates a Cell Plot to analyze the distribution of verbal scores, test-taking percentages, and geographic locations (states) based on the SAT dataset, utilizing uniform scaling, centering at zero, and local data filtering.

<!-- Keywords: #JSL, #CellPlot, #DataFiltering, #Visualization, #SATdataset -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Cell Plot(
	Scale Uniformly( 0 ),
	Center at zero( 0 ),
	Y( :drug, :hist0, :hist1, :hist3, :hist5 ),
	Legend( 1 ),
	Local Data Filter( Add Filter( columns( :diff ), Where( :diff >= 0 & :diff <= 3.555348 ) ) )
);
rpt = obj << Report;
expr = rpt << Get Journal;
p = "Where(:diff >= 0 & :diff <= 3.555348)";
ans = Pat Match( expr, p );
```

**Code Explanation**:

1. Open data table;
2. Create Cell Plot object.
3. Set uniform scaling.
4. Center plot at zero.
5. Define Y variables.
6. Add legend.
7. Apply local data filter.
8. Generate report from object.
9. Extract journal from report.
10. Match pattern in journal.



### Example 14
> **Summary**: Generates a cell plot to analyze the distribution of verbal scores, test-taking percentages, and geographic locations (states) based on the SAT dataset, utilizing local data filtering for specific conditions.

<!-- Keywords: #JSL, #CellPlot, #LocalDataFilter, #DataVisualization, #SATdataset -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Cell Plot(
	Scale Uniformly( 0 ),
	Center at zero( 0 ),
	Y( :drug, :hist0, :hist1, :hist3, :hist5 ),
	Legend( 1 ),
	Local Data Filter( Add Filter( columns( :diff ), Where( :diff >= 0 & :diff <= 3.555348 ) ) )
);
rpt = obj << Report;
expr = rpt << Get Journal;
p = "Where(:diff >= 0 & :diff <= 3.555348)";
ans = Pat Match( expr, p );
```

**Code Explanation**:

1. Open data table;
2. Create cell plot object.
3. Set scale uniformly.
4. Center at zero.
5. Define Y variables.
6. Add legend.
7. Apply local data filter.
8. Generate report.
9. Extract journal expression.
10. Match pattern in expression.



### Example 15
> **Summary**: Generates a treemap visualization to analyze the relationships and distributions of verbal scores, test-taking percentages, and geographic locations (states) based on the SAT dataset.

<!-- Keywords: #JSLScriptingLanguage, #TreemapVisualization, #DataAnalysis, #GeographicLocation, #SATdataset -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Cell Plot( Scale Uniformly( 0 ), Center at zero( 0 ), Y( :height ), Legend( 1 ) );
:height << Set Property( "Missing Value Codes", 999 );
:height << Set Values( [999] );
obj2 = obj << Redo Analysis;
rpt = obj2 << Report;
expr = Parse( rpt[CellPlotBox( 1 )] << Get Journal );
actN = Arg( Extract Expr( expr, values( Wild List() ) ), 1 );
```

**Code Explanation**:

1. Open data table.
2. Create cell plot object.
3. Set missing value code for height.
4. Assign missing value code to height.
5. Redo analysis on cell plot.
6. Generate report from redo analysis.
7. Parse journal from cell plot report.
8. Extract expression from parsed journal.
9. Identify first argument of expression.
10. Assign extracted argument to actN.



### Example 16
> **Summary**: Generates a Cell Plot visualization to analyze the relationships and distributions of verbal scores, test-taking percentages, and geographic locations (states) based on the SAT dataset.

<!-- Keywords: #JSLScriptingLanguage, #CellPlot, #DataVisualization, #SATdataset, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Cell Plot(
	SendToByGroup( {Transform Column( "Last[dep1]", Character, Formula( Word( -1, :dep1 ) ) ) == "n"} ),
	Scale Uniformly( 0 ),
	Center at zero( 0 ),
	Y(
		Transform Column( "Abs[hist0]", Formula( Abs( :hist0 ) ) ),
		Transform Column( "Abs[hist1]", Formula( Abs( :hist1 ) ) ),
		Transform Column( "Abs[hist3]", Formula( Abs( :hist3 ) ) ),
		Transform Column( "Abs[hist5]", Formula( Abs( :hist5 ) ) )
	),
	X( Transform Column( "First[drug]", Character, Formula( Word( 1, :drug ) ) ) ),
	Label( Transform Column( "1/ID", Formula( 1 / :ID ) ) ),
	By( Transform Column( "Last[dep1]", Character, Formula( Word( -1, :dep1 ) ) ) ),
	SendToByGroup(
		{Transform Column( "Last[dep1]", Character, Formula( Word( -1, :dep1 ) ) ) == "n"},
		SendToReport(
			Dispatch( {"Cell Plot Last[dep1]=n"}, "Cell Plot Report", FrameBox, {Frame Size( 69, 69 )} ),
			Dispatch( {"Cell Plot Last[dep1]=n"}, "Cell Plot Report", FrameBox( 3 ), {Frame Size( 69, 69 )} )
		)
	),
	SendToByGroup(
		{Transform Column( "Last[dep1]", Character, Formula( Word( -1, :dep1 ) ) ) == "y"},
		SendToReport(
			Dispatch( {"Cell Plot Last[dep1]=y"}, "Cell Plot Report", FrameBox, {Frame Size( 69, 69 )} ),
			Dispatch( {"Cell Plot Last[dep1]=y"}, "Cell Plot Report", FrameBox( 3 ), {Frame Size( 69, 69 )} )
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create Cell Plot.
3. Filter by "Last[dep1]" == "n".
4. Set uniform scale.
5. Center at zero.
6. Transform "hist0", "hist1", "hist3", "hist5" to absolute values.
7. Transform "drug" to first word.
8. Transform "ID" to reciprocal.
9. Group by "Last[dep1]".
10. Adjust report sizes for "n" and "y" groups.



### Example 17
> **Summary**: Generates a Cell Plot to visualize and analyze the relationships between verbal scores, test-taking percentages, and geographic locations (states) in the SAT dataset.

<!-- Keywords: #JMPScriptingLanguage, #CellPlot, #DataVisualization, #StatisticalAnalysis, #DataExploration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Cell Plot( Y( :hist0, :hist1, :hist3, :hist5 ), X( :drug ), Scale Uniformly, Center at zero, Label( :ID ), By( :dep1 ), );
rpt = obj << report;
rpt = rpt << parent;
```

**Code Explanation**:

1. Open data table;
2. Create Cell Plot object.
3. Set Y variables: hist0, hist1, hist3, hist5.
4. Set X variable: drug.
5. Scale plot uniformly.
6. Center plot at zero.
7. Label with ID.
8. Group by dep1.
9. Generate report object.
10. Move up in report hierarchy.



### Example 18
> **Summary**: Generates a cell plot to visualize the distribution of verbal scores, test-taking percentages, and geographic locations (states) based on the SAT dataset.

<!-- Keywords: #JSLScriptingLanguage, #CellPlot, #DataVisualization, #SatDataset, #GeographicAnalysis -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Cell Plot( Y( :drug, :hist0, :hist1, :hist3, :hist5 ) );
```

**Code Explanation**:

1. Open data table;
2. Create cell plot object.
3. Set Y variables: drug, hist0, hist1, hist3, hist5.



### Example 19
> **Summary**: Creates a dot plot to visualize the relationships and distributions of verbal scores, test-taking percentages, and geographic locations (states) based on the SAT dataset.

<!-- Keywords: #JSLScriptingLanguage, #CellPlot, #DotPlot, #DataVisualization, #SATdataset -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Cell Plot( Y( :drug, :hist0, :hist1, :hist3, :hist5 ), SendToReport( Dispatch( {}, "", CellPlotBox, Graph Type( "Dot Plot" ) ) ) );
```

**Code Explanation**:

1. Open data table;
2. Create cell plot object.
3. Set Y variables: drug, hist0, hist1, hist3, hist5.
4. Send report dispatch.
5. Set graph type to dot plot.



### Example 20
> **Summary**: Creates a VLine Plot to visualize and analyze verbal scores, test-taking percentages, and geographic locations (states) from the SAT dataset.

<!-- Keywords: #JSLScriptingLanguage, #CellPlot, #VLinePlot, #DataVisualization, #SATdataset -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Cell Plot( Y( :drug, :hist0, :hist1, :hist3, :hist5 ), SendToReport( Dispatch( {}, "", CellPlotBox, Graph Type( "VLine Plot" ) ) ) );
```

**Code Explanation**:

1. Open data table;
2. Create cell plot object.
3. Set Y variables: drug, hist0, hist1, hist3, hist5.
4. Send report settings.
5. Dispatch to CellPlotBox.
6. Set graph type to "VLine Plot".



### Example 21
> **Summary**: Creates a cell plot to visualize the distribution of verbal scores, test-taking percentages, and geographic locations (states) based on the SAT dataset.

<!-- Keywords: #JSLScriptingLanguage, #CellPlot, #HLinePlot, #DataVisualization, #SATdataset -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Cell Plot( Y( :drug, :hist0, :hist1, :hist3, :hist5 ), SendToReport( Dispatch( {}, "", CellPlotBox, Graph Type( "HLine Plot" ) ) ) );
```

**Code Explanation**:

1. Open data table;
2. Create cell plot object.
3. Set Y variables: drug, hist0, hist1, hist3, hist5.
4. Send report dispatch.
5. Set graph type to HLine Plot.



### Example 22
> **Summary**: Creates a HBar Plot to visualize and analyze the relationships between verbal scores, test-taking percentages, and geographic locations (states) in the SAT dataset.

<!-- Keywords: #JMPScriptingLanguage, #CellPlot, #HBarPlot, #DataVisualization, #SATDataset -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Cell Plot( Y( :drug, :hist0, :hist1, :hist3, :hist5 ), SendToReport( Dispatch( {}, "", CellPlotBox, Graph Type( "HBar Plot" ) ) ) );
```

**Code Explanation**:

1. Open data table;
2. Create Cell Plot object.
3. Set Y variables: drug, hist0, hist1, hist3, hist5.
4. Send report settings.
5. Dispatch to CellPlotBox.
6. Set graph type to HBar Plot.



### Example 23
> **Summary**: Creates a cell plot to visualize age distribution by sex, with legend and report generation.

<!-- Keywords: #JSLScriptingLanguage, #CellPlot, #DataVisualization, #ReportGeneration, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Cell Plot( Scale Uniformly( 0 ), Center at zero( 0 ), Y( :age ), X( :sex ), Legend( 1 ) );
rpt = obj << report;
dt << Select Where( :age == 12 ) << Exclude;
```

**Code Explanation**:

1. Open data table;
2. Create cell plot object.
3. Set scale uniformly to 0.
4. Center at zero set to 0.
5. Assign Y variable as "age".
6. Assign X variable as "sex".
7. Add legend to plot.
8. Generate report from object.
9. Select rows where age is 12.
10. Exclude selected rows.



## Cell Plot using New Column
> **Summary**: Creates a cell plot with uniform scaling and centering, using a formula to combine multiple variables in a new column.

<!-- Keywords: #JSLScriptingLanguage, #CellPlot, #UniformScaling, #Centering, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Special Name", char, formula( :sex || " \ " || :name ) );
dt << Cell Plot( Scale Uniformly( 0 ), Center at zero( 0 ), Y( :sex, :height, :weight ), Label( "Special Name" ) );
```

**Code Explanation**:

1. Open data table.
2. Create new column.
3. Assign formula to column.
4. Generate cell plot.
5. Set uniform scaling.
6. Center plot at zero.
7. Specify Y variables.
8. Use special name labels.



## Cell Plot using Select Rows
### Example 1
> **Summary**: Vizualizes a data table with two cell plots, filtered by height column, in a new JMP window.

<!-- Keywords: #JMPScriptingLanguage, #DataVisualization, #CellPlot, #LocalDataFilter, #JMPWindow -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Clear Select << Select Rows( Index( 1, 35 ) ) << Hide;
New Window( "test",
	V List Box(
		Data Table("data_table") << Cell Plot(
			Scale Uniformly( 0 ),
			Center at zero( 0 ),
			Y( :height ),
			Local Data Filter( Close Outline( 1 ), Add Filter( columns( :height ) ) ),
			SendToReport( Dispatch( {}, "Cell Plot", OutlineBox, {Close( 1 )} ) )
		),
		Data Table("data_table") << Cell Plot(
			Scale Uniformly( 0 ),
			Center at zero( 0 ),
			Y( :height ),
			Local Data Filter( Add Filter( columns( :height ), Where( :height >= 68 ) ) )
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Clear previous selections.
3. Select rows 1 to 35.
4. Hide selected rows.
5. Create new window titled "test".
6. Add vertical list box to window.
7. Add first cell plot to list box.
8. Set cell plot scale uniformly.
9. Set cell plot center at zero.
10. Set Y axis to height column.
11. Add local data filter to cell plot.
12. Close outline for local data filter.
13. Add filter for height column.
14. Add second cell plot to list box.
15. Set cell plot scale uniformly.
16. Set cell plot center at zero.
17. Set Y axis to height column.
18. Add local data filter to cell plot.
19. Add filter for height column where height >= 68.



### Example 2
> **Summary**: Runs data visualization by creating a cell plot from a selected range of rows in a JMP data table, with uniform scaling and centering at zero.

<!-- Keywords: #JMPDataVisualization, #CellPlot, #UniformScaling, #CenterAtZero, #DataTableManipulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Clear Select << Select Rows( Index( 1, 35 ) ) << Hide and Exclude;
dt << Cell Plot( Scale Uniformly( 0 ), Center at zero( 0 ), Y( :height ) );
```

**Code Explanation**:

1. Open data table.
2. Clear previous selections.
3. Select rows 1 to 35.
4. Hide and exclude selected rows.
5. Create cell plot.
6. Scale uniformly set to 0.
7. Center at zero set to 0.
8. Set Y variable to height.



### Example 3
> **Summary**: Creates multiple data visualizations and clustering expressions in JMP, including cell plots, hierarchical clustering, and variable clustering, with filtering options for specific rows.

<!-- Keywords: #JMPScriptingLanguage, #DataVisualization, #Clustering, #Filtering, #InteractiveAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Clear Select << Select Rows( Index( 1, 35 ) ) << Hide;
dt << clear select;
cellplot_df_N = Expr(
	dt << Cell Plot( Scale Uniformly( 0 ), Center at zero( 0 ), Y( :height ), Local Data Filter( Add Filter( columns( :height ) ) ) )
);
HierarchicalClustering_df_N = Expr(
	dt << Hierarchical Cluster(
		Y( :name, :age, :sex, :height, :weight ),
		Method( "Ward" ),
		Standardize By( "Columns" ),
		Dendrogram Scale( "Distance Scale" ),
		Number of Clusters( 1 ),
		Color Map( "Blue to Gray to Red" ),
		Two Way Clustering,
		Local Data Filter( Add Filter( columns( :height ) ) )
	)
);
VariableClustering_df_N = Expr(
	dt << Cluster Variables(
		Y( :age, :height, :weight ),
		Cluster Summary( 0 ),
		Cluster Members( 0 ),
		Cluster Components( 0 ),
		Local Data Filter( Add Filter( columns( :height ) ) )
	)
);
cellplot_df_Y = Expr(
	dt << Cell Plot(
		Scale Uniformly( 0 ),
		Center at zero( 0 ),
		Y( :height ),
		Local Data Filter( Add Filter( columns( :height ), Where( :height >= 68 ) ) )
	)
);
HierarchicalClustering_df_Y = Expr(
	dt << Hierarchical Cluster(
		Y( :name, :age, :sex, :height, :weight ),
		Method( "Ward" ),
		Standardize By( "Columns" ),
		Dendrogram Scale( "Distance Scale" ),
		Number of Clusters( 1 ),
		Color Map( "Blue to Gray to Red" ),
		Two Way Clustering,
		Local Data Filter( Add Filter( columns( :height ), Where( :height >= 68 ) ) )
	)
);
VariableClustering_df_Y = Expr(
	dt << Cluster Variables(
		Y( :age, :height, :weight ),
		Cluster Summary( 0 ),
		Cluster Members( 0 ),
		Cluster Components( 0 ),
		Local Data Filter( Add Filter( columns( :height ), Where( :height >= 68 ) ) )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Clear previous selections.
3. Select first 35 rows.
4. Hide selected rows.
5. Clear selection again.
6. Define cell plot expression.
7. Define hierarchical clustering expression.
8. Define variable clustering expression.
9. Define cell plot expression for height >= 68.
10. Define hierarchical clustering expression for height >= 68.
11. Define variable clustering expression for height >= 68.



### Example 4
> **Summary**: Runs the creation and visualization of hierarchical clustering, variable clustering, and cell plots for a data table, with interactive filtering options.

<!-- Keywords: #JMPScriptingLanguage, #DataVisualization, #HierarchicalClustering, #VariableClustering, #CellPlot -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Clear Select << Select Rows( Index( 1, 35 ) ) << Hide;
dt << clear select;
cellplot_df_N = Expr(
	dt << Cell Plot( Scale Uniformly( 0 ), Center at zero( 0 ), Y( :height ), Local Data Filter( Add Filter( columns( :height ) ) ) )
);
HierarchicalClustering_df_N = Expr(
	dt << Hierarchical Cluster(
		Y( :name, :age, :sex, :height, :weight ),
		Method( "Ward" ),
		Standardize By( "Columns" ),
		Dendrogram Scale( "Distance Scale" ),
		Number of Clusters( 1 ),
		Color Map( "Blue to Gray to Red" ),
		Two Way Clustering,
		Local Data Filter( Add Filter( columns( :height ) ) )
	)
);
VariableClustering_df_N = Expr(
	dt << Cluster Variables(
		Y( :age, :height, :weight ),
		Cluster Summary( 0 ),
		Cluster Members( 0 ),
		Cluster Components( 0 ),
		Local Data Filter( Add Filter( columns( :height ) ) )
	)
);
cellplot_df_Y = Expr(
	dt << Cell Plot(
		Scale Uniformly( 0 ),
		Center at zero( 0 ),
		Y( :height ),
		Local Data Filter( Add Filter( columns( :height ), Where( :height >= 68 ) ) )
	)
);
HierarchicalClustering_df_Y = Expr(
	dt << Hierarchical Cluster(
		Y( :name, :age, :sex, :height, :weight ),
		Method( "Ward" ),
		Standardize By( "Columns" ),
		Dendrogram Scale( "Distance Scale" ),
		Number of Clusters( 1 ),
		Color Map( "Blue to Gray to Red" ),
		Two Way Clustering,
		Local Data Filter( Add Filter( columns( :height ), Where( :height >= 68 ) ) )
	)
);
VariableClustering_df_Y = Expr(
	dt << Cluster Variables(
		Y( :age, :height, :weight ),
		Cluster Summary( 0 ),
		Cluster Members( 0 ),
		Cluster Components( 0 ),
		Local Data Filter( Add Filter( columns( :height ), Where( :height >= 68 ) ) )
	)
);
New Window( "test",
	V List Box(
		Eval( cellplot_df_N ),
		Eval( HierarchicalClustering_df_N ),
		Eval( VariableClustering_df_N ),
		Eval( cellplot_df_Y ),
		Eval( HierarchicalClustering_df_Y ),
		Eval( VariableClustering_df_Y )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Select rows 1 to 35.
3. Hide selected rows.
4. Clear row selection.
5. Define cell plot for all heights.
6. Define hierarchical clustering for all variables.
7. Define variable clustering for age, height, weight.
8. Define cell plot for heights >= 68.
9. Define hierarchical clustering for heights >= 68.
10. Define variable clustering for heights >= 68.



### Example 5
> **Summary**: Creates cell plots, hierarchical clustering, and variable clustering for a data table with filtered rows, utilizing Local Data Filters and Color Maps.

<!-- Keywords: #JMPScriptingLanguage, #DataVisualization, #HierarchicalClustering, #VariableClustering, #LocalDataFilter -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Clear Select << Select Rows( Index( 1, 35 ) ) << Hide and Exclude;
cellplot_df_N = Expr(
	dt << Cell Plot( Scale Uniformly( 0 ), Center at zero( 0 ), Y( :height ), Local Data Filter( Add Filter( columns( :height ) ) ) )
);
HierarchicalClustering_df_N = Expr(
	dt << Hierarchical Cluster(
		Y( :name, :age, :sex, :height, :weight ),
		Method( "Ward" ),
		Standardize By( "Columns" ),
		Dendrogram Scale( "Distance Scale" ),
		Number of Clusters( 1 ),
		Color Map( "Blue to Gray to Red" ),
		Two Way Clustering,
		Local Data Filter( Add Filter( columns( :height ) ) )
	)
);
VariableClustering_df_N = Expr(
	dt << Cluster Variables(
		Y( :age, :height, :weight ),
		Cluster Summary( 0 ),
		Cluster Members( 0 ),
		Cluster Components( 0 ),
		Local Data Filter( Add Filter( columns( :height ) ) )
	)
);
cellplot_df_Y = Expr(
	dt << Cell Plot(
		Scale Uniformly( 0 ),
		Center at zero( 0 ),
		Y( :height ),
		Local Data Filter( Add Filter( columns( :height ), Where( :height >= 68 ) ) )
	)
);
HierarchicalClustering_df_Y = Expr(
	dt << Hierarchical Cluster(
		Y( :name, :age, :sex, :height, :weight ),
		Method( "Ward" ),
		Standardize By( "Columns" ),
		Dendrogram Scale( "Distance Scale" ),
		Number of Clusters( 1 ),
		Color Map( "Blue to Gray to Red" ),
		Two Way Clustering,
		Local Data Filter( Add Filter( columns( :height ), Where( :height >= 68 ) ) )
	)
);
VariableClustering_df_Y = Expr(
	dt << Cluster Variables(
		Y( :age, :height, :weight ),
		Cluster Summary( 0 ),
		Cluster Members( 0 ),
		Cluster Components( 0 ),
		Local Data Filter( Add Filter( columns( :height ), Where( :height >= 68 ) ) )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Clear existing selections.
3. Select rows 1 to 35.
4. Hide and exclude selected rows.
5. Define cell plot expression for all data.
6. Define hierarchical clustering expression for all data.
7. Define variable clustering expression for all data.
8. Define cell plot expression for height ‚â• 68.
9. Define hierarchical clustering expression for height ‚â• 68.
10. Define variable clustering expression for height ‚â• 68.



### Example 6
> **Summary**: Creates multiple plots and clustering analyses for a data table, including cell plots, hierarchical clustering, and variable clustering, with interactive filtering options.

<!-- Keywords: #JMPScriptingLanguage, #DataVisualization, #ClusteringAnalysis, #InteractiveFiltering, #DataTableManipulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Clear Select << Select Rows( Index( 1, 35 ) ) << Hide and Exclude;
cellplot_df_N = Expr(
	dt << Cell Plot( Scale Uniformly( 0 ), Center at zero( 0 ), Y( :height ), Local Data Filter( Add Filter( columns( :height ) ) ) )
);
HierarchicalClustering_df_N = Expr(
	dt << Hierarchical Cluster(
		Y( :name, :age, :sex, :height, :weight ),
		Method( "Ward" ),
		Standardize By( "Columns" ),
		Dendrogram Scale( "Distance Scale" ),
		Number of Clusters( 1 ),
		Color Map( "Blue to Gray to Red" ),
		Two Way Clustering,
		Local Data Filter( Add Filter( columns( :height ) ) )
	)
);
VariableClustering_df_N = Expr(
	dt << Cluster Variables(
		Y( :age, :height, :weight ),
		Cluster Summary( 0 ),
		Cluster Members( 0 ),
		Cluster Components( 0 ),
		Local Data Filter( Add Filter( columns( :height ) ) )
	)
);
cellplot_df_Y = Expr(
	dt << Cell Plot(
		Scale Uniformly( 0 ),
		Center at zero( 0 ),
		Y( :height ),
		Local Data Filter( Add Filter( columns( :height ), Where( :height >= 68 ) ) )
	)
);
HierarchicalClustering_df_Y = Expr(
	dt << Hierarchical Cluster(
		Y( :name, :age, :sex, :height, :weight ),
		Method( "Ward" ),
		Standardize By( "Columns" ),
		Dendrogram Scale( "Distance Scale" ),
		Number of Clusters( 1 ),
		Color Map( "Blue to Gray to Red" ),
		Two Way Clustering,
		Local Data Filter( Add Filter( columns( :height ), Where( :height >= 68 ) ) )
	)
);
VariableClustering_df_Y = Expr(
	dt << Cluster Variables(
		Y( :age, :height, :weight ),
		Cluster Summary( 0 ),
		Cluster Members( 0 ),
		Cluster Components( 0 ),
		Local Data Filter( Add Filter( columns( :height ), Where( :height >= 68 ) ) )
	)
);
New Window( "test",
	V List Box(
		Eval( cellplot_df_N ),
		Eval( HierarchicalClustering_df_N ),
		Eval( VariableClustering_df_N ),
		Eval( cellplot_df_Y ),
		Eval( HierarchicalClustering_df_Y ),
		Eval( VariableClustering_df_Y )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Clear and select rows 1-35.
3. Hide and exclude selected rows.
4. Define cell plot for all data.
5. Define hierarchical clustering for all data.
6. Define variable clustering for all data.
7. Define cell plot for height ‚â• 68.
8. Define hierarchical clustering for height ‚â• 68.
9. Define variable clustering for height ‚â• 68.
10. Create new window with plots.



## Cell Plot using Set Property
> **Summary**: Creates a cell plot to visualize the mean profit by product line and quarter from the Profit by Product dataset, with uniform scaling and centered at zero.

<!-- Keywords: #JMPScriptingLanguage, #CellPlot, #GraphBuilder, #DataVisualization, #ProfitAnalysis -->

**Code**:
```jsl
Open("data_table.jmp");
:height << Set Property( "Missing Value Codes", 999 );
:height << Set Values( [999] );
Cell Plot( Scale Uniformly( 0 ), Center at zero( 0 ), Y( :height ), Legend( 1 ) );
```

**Code Explanation**:

1. Open data table;
2. Set missing value code for height.
3. Replace height values with missing code.
4. Create cell plot.
5. Scale plot uniformly.
6. Center plot at zero.
7. Set Y variable to height.
8. Add legend to plot.



## Cell Plot using Set Values
> **Summary**: Runs neural network analysis and report generation for a data table, with missing value coding and validation methods applied.

<!-- Keywords: #JMPScriptingLanguage, #NeuralNetworkAnalysis, #DataTableProcessing, #MissingValueCoding, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
:ABRASION << Set Values( [999] );
obj = Neural(
	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),
	X( :SILICA, :SILANE, :SULFUR ),
	Missing Value Coding( 0 ),
	Validation Method( Holdback, 0.3333 ),
	Fit( NTanH( 3 ), Plot Actual by Predicted( 1 ) )
);
rpt1 = obj << Report;
expr1 = rpt1 << Get Journal;
:ABRASION << Set Property( "Missing Value Codes", 999 );
obj2 = obj << Redo Analysis;
rpt2 = obj2 << Report;
expr2 = obj2 << get Journal;
actN = Equal( expr1, expr2 );
dt = Open("data_table.jmp");
obj = Cell Plot( Scale Uniformly( 0 ), Center at zero( 0 ), Y( :height ), Legend( 1 ) );
:height << Set Property( "Missing Value Codes", 999 );
:height << Set Values( [999] );
obj2 = obj << Redo Analysis;
rpt = obj2 << Report;
expr = Parse( rpt[CellPlotBox( 1 )] << Get Journal );
actN = Arg( Extract Expr( expr, values( Wild List() ) ), 1 );
```

**Code Explanation**:

1. Open data table;
2. Set ABRASION value to 999.
3. Run neural network analysis.
4. Retrieve report object.
5. Get journal from report.
6. Set missing value code for ABRASION.
7. Redo neural network analysis.
8. Retrieve new report object.
9. Get new journal from report.
10. Compare old and new journals.



## Cell Plot using Theme
> **Summary**: Creates a cell plot report from data in a JMP table, utilizing color themes and cert values to visualize drug-related data.

<!-- Keywords: #JMPScriptingLanguage, #CellPlot, #DataVisualization, #CertValues, #ColorThemes -->

**Code**:
```jsl
cert colortheme = {colorTheme( "Blue to Gray to Red" ), colorTheme( "Blue to Gray to Red" )};
cert values 1 = {values( 0.04, 0.2, 0.1, 0.08, 0.02, 0.06, 0.02, 0.02, 0.07, 1.4, 0.48, 0.24, 0.17, 0.57, 0.35, 0.24 ),
values( 0.03, 0.62, 0.31, 0.22, 0.03, 1.05, 0.73, 0.6, 0.07, 0.83, 1.07, 0.8, 0.09, 3.13, 2.06, 1.23 )};
cert values 2 = {values( 0.1, 0.09, 0.13, 0.14, 0.12, 0.11, 0.1, ., 0.07, 0.07, 0.06, 0.07, 0.05, 0.07, 0.06, 0.07 ),
values( 0.1, 0.09, 0.09, 0.08, 0.08, 0.09, 0.09, 0.1, 0.13, 0.1, 0.12, 0.12, 0.06, 0.05, 0.05, 0.05 )};
dt = Open("data_table.jmp");
obj = Cell Plot( Y( :hist0, :hist1, :hist3, :hist5 ), X( :drug ), Scale Uniformly, Center at zero, Label( :ID ), By( :dep1 ), );
rpt = obj << report;
rpt = rpt << parent;
```

**Code Explanation**:

1. Define color themes.
2. Define cert values 1.
3. Define cert values 2.
4. Open data table.
5. Create cell plot object.
6. Assign plot to obj variable.
7. Generate report from obj.
8. Assign report to rpt variable.
9. Move up to parent level in report.
10. Assign parent report to rpt variable.




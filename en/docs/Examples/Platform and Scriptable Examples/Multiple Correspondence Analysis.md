# Multiple Correspondence Analysis

### Example 1
> **Summary**: Performs a Multiple Correspondence Analysis (MCA) on selected columns of a data table, displaying the results in a cross-table format with total options enabled and cell chi-square calculation disabled.

<!-- Keywords: #MultipleCorrespondenceAnalysis, #JMPScriptingLanguage, #DataVisualization, #CrossTable, #StatisticalAnalysis -->

**Code**:
```jsl
// Multiple Correspondence Analysis
// Open data table
dt = Open("data_table.jmp");
// Multiple Correspondence Analysis
Multiple Correspondence Analysis(
	Y(
		:sex, :marital status, :country,
		:size
	),
	Cross Table(
		Cell Chi Square( 0 ),
		Show Total( 1 )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Perform MCA on selected columns.
3. Set Y variables for analysis.
4. Configure cross table options.
5. Disable cell chi-square calculation.
6. Enable total display option.



### Example 2
> **Summary**: Performs a Multiple Correspondence Analysis (MCA) with a supplementary variable, using the Y() and Z() functions to specify main variables and define supplementary columns. The Cross Table function is used to configure cell chi-square and display totals.

<!-- Keywords: #MultipleCorrespondenceAnalysis, #SupplementaryVariable, #CrossTable, #JSLScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
// Multiple Correspondence Analysis - with Supplementary Variable
// Open data table
dt = Open("data_table.jmp");
// Multiple Correspondence Analysis - with Supplementary Variable
Multiple Correspondence Analysis(
	Y( :country, :size ),
	Z( :sex ),
	Cross Table(
		Cell Chi Square( 0 ),
		Show Total( 1 )
	),
	Cross Table of Supplementary Columns(
		Cell Chi Square( 0 ),
		Show Total( 1 )
	)
);
```

**Code Explanation**:

1. Open table.
2. Perform MCA.
3. Specify main variables.
4. Define supplementary variable.
5. Configure cross table settings.
6. Enable cell chi-square.
7. Display totals.
8. Set supplementary column settings.
9. Enable cell chi-square for supplementary.
10. Display totals for supplementary.



### Example 3
> **Summary**: Opens a data table, performs Multiple Correspondence Analysis (MCA) with specified variables, and displays the results in a cross table.

<!-- Keywords: #MultipleCorrespondenceAnalysis, #JMPScriptingLanguage, #DataVisualization, #CrossTable, #DimensionalityReduction -->

**Code**:
```jsl
// MCA-level
// Open data table
dt = Open("data_table.jmp");
// MCA-level
Multiple Correspondence Analysis(
	Y( :TV, :Film, :Art, :Restaurant ),
	Cross Table( Show Total( 1 ) )
);
```

**Code Explanation**:

1. Open data table.
2. Assign data table to dt.
3. Perform Multiple Correspondence Analysis.
4. Set analysis variables.
5. Show total in cross table.



### Example 4
> **Summary**: Performs Multiple Correspondence Analysis (MCA) on a data table, using TV, Film, Art, and Restaurant as Y variables, Subject as the X variable, and displaying cross tables with totals.

<!-- Keywords: #MultipleCorrespondenceAnalysis, #JMPScriptingLanguage, #DataVisualization, #CrossTable, #StatisticalAnalysis -->

**Code**:
```jsl
// MCA-subject
// Open data table
dt = Open("data_table.jmp");
// MCA-subject
Multiple Correspondence Analysis(
	Y( :TV, :Film, :Art, :Restaurant ),
	X( :Subject ),
	Cross Table( Show Total( 1 ) )
);
```

**Code Explanation**:

1. Open data table.
2. Assign table to dt.
3. Perform Multiple Correspondence Analysis.
4. Set Y variables: TV, Film, Art, Restaurant.
5. Set X variable: Subject.
6. Enable cross table display.
7. Show total in cross table.



### Example 5
> **Summary**: Performs a Multiple Correspondence Analysis (MCA) on a data table, selecting the first three dimensions and sending the results to a report with variable summary, scale box, and details outline.

<!-- Keywords: #MultipleCorrespondenceAnalysis, #JMPScriptingLanguage, #DataVisualization, #DimensionalityReduction, #ReportGeneration -->

**Code**:
```jsl
// MCA-level-supp-gender
// Open data table
dt = Open("data_table.jmp");
// MCA-level-supp-gender
Multiple Correspondence Analysis(
	Y( :TV, :Film, :Art, :Restaurant ),
	Z( :Gender ),
	Cross Table( Show Total( 1 ) ),
	Cross Table of Supplementary Columns(
		Show Total( 1 )
	),
	Select dimension( 1, 3 ),
	SendToReport(
		Dispatch( {}, "Variable Summary",
			OutlineBox,
			{Close( 1 )}
		),
		Dispatch(
			{"Correspondence Analysis"},
			"2", ScaleBox,
			{Format( "Fixed Dec", 12, 0 ),
			Min( -2 ), Max( 3.5 ),
			Inc( 1 ), Minor Ticks( 1 )}
		),
		Dispatch(
			{"Correspondence Analysis"},
			"Details", OutlineBox,
			{Close( 1 )}
		)
	)
);
```

**Code Explanation**:

1. Open table.
2. Perform MCA.
3. Set Y variables.
4. Set Z variable.
5. Enable cross table totals.
6. Enable supplementary columns totals.
7. Select first three dimensions.
8. Close Variable Summary.
9. Format 2 scale box.
10. Close Details outline.



### Example 6
> **Summary**: Performs a Multiple Correspondence Analysis (MCA) on a data table, using TV, Film, Art, and Restaurant as response variables, Subject as the row variable, and Gender as the supplementary column variable. The analysis includes cross tables with totals, coordinates, and customized report layout.

<!-- Keywords: #MultipleCorrespondenceAnalysis, #JMPScriptingLanguage, #DataVisualization, #StatisticalAnalysis, #CustomizedReporting -->

**Code**:
```jsl
// MCA-subject-supp-gender
// Open data table
dt = Open("data_table.jmp");
// MCA-subject-supp-gender
Multiple Correspondence Analysis(
	Y( :TV, :Film, :Art, :Restaurant ),
	X( :Subject ),
	Z( :Gender ),
	Cross Table( Show Total( 1 ) ),
	Cross Table of Supplementary Rows(
		Show Total( 1 )
	),
	Show Coordinates( 1 ),
	Select dimension( 1, 3 ),
	SendToReport(
		Dispatch( {}, "Variable Summary",
			OutlineBox,
			{Close( 1 )}
		),
		Dispatch(
			{"Correspondence Analysis"},
			"2", ScaleBox,
			{Format( "Fixed Dec", 12, 0 ),
			Min( -2 ), Max( 3.5 ),
			Inc( 1 ), Minor Ticks( 1 )}
		),
		Dispatch(
			{"Correspondence Analysis"},
			"Details", OutlineBox,
			{Close( 1 )}
		),
		Dispatch(
			{"Correspondence Analysis"},
			"Row and Column Coordinates",
			OutlineBox,
			{Close( 1 )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Perform Multiple Correspondence Analysis.
3. Set response variables.
4. Set row variable.
5. Set supplementary column variable.
6. Show total in cross table.
7. Show total in supplementary rows cross table.
8. Display coordinates.
9. Select dimensions.
10. Customize report layout.



### Example 7
> **Summary**: Performs a Multiple Correspondence Analysis (MCA) on a data table, specifying Y variables and a Z variable, and configures cross tables with supplementary columns. The results are sent to the report.

<!-- Keywords: #JMP, #MultipleCorrespondenceAnalysis, #DataVisualization, #ScriptingLanguage, #ReportGeneration -->

**Code**:
```jsl
// MCA-level-supp-age
// Open data table
dt = Open("data_table.jmp");
// MCA-level-supp-age
Multiple Correspondence Analysis(
	Y( :TV, :Film, :Art, :Restaurant ),
	Z( :Age ),
	Cross Table( Show Total( 1 ) ),
	Cross Table of Supplementary Columns(
		Show Total( 1 )
	),
	SendToReport(
		Dispatch( {}, "Variable Summary",
			OutlineBox,
			{Close( 1 )}
		),
		Dispatch(
			{"Correspondence Analysis"},
			"Details", OutlineBox,
			{Close( 1 )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Perform MCA analysis.
3. Set Y variables.
4. Set Z variable.
5. Configure cross table.
6. Enable supplementary columns.
7. Hide Variable Summary.
8. Hide Details section.
9. Display results.
10. End script.



### Example 8
> **Summary**: Performs a Multiple Correspondence Analysis (MCA) on a data table, using TV, Film, Art, and Restaurant as Y variables, Subject as X variable, and Age as Z variable. The analysis is customized with specific formatting options for the report.

<!-- Keywords: #MultipleCorrespondenceAnalysis, #JMPScriptingLanguage, #DataVisualization, #CustomizationOptions, #ReportGeneration -->

**Code**:
```jsl
// MCA-subject-supp-age
// Open data table
dt = Open("data_table.jmp");
// MCA-subject-supp-age
Multiple Correspondence Analysis(
	Y( :TV, :Film, :Art, :Restaurant ),
	X( :Subject ),
	Z( :Age ),
	Cross Table( Show Total( 1 ) ),
	Cross Table of Supplementary Rows(
		Show Total( 1 )
	),
	Select dimension( 1, 3 ),
	SendToReport(
		Dispatch( {}, "Variable Summary",
			OutlineBox,
			{Close( 1 )}
		),
		Dispatch(
			{"Correspondence Analysis"},
			"2", ScaleBox,
			{Format( "Fixed Dec", 12, 0 ),
			Min( -2 ), Max( 3.5 ),
			Inc( 1 ), Minor Ticks( 1 )}
		),
		Dispatch(
			{"Correspondence Analysis"},
			"Details", OutlineBox,
			{Close( 1 )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Perform Multiple Correspondence Analysis.
3. Set Y variables: TV, Film, Art, Restaurant.
4. Set X variable: Subject.
5. Set Z variable: Age.
6. Show total in cross table.
7. Show total in supplementary rows' cross table.
8. Select first three dimensions.
9. Close Variable Summary outline box.
10. Format scale for 2nd axis.



### Example 9
> **Summary**: Performs multiple correspondence analysis (MCA) on a data table, using Year as the Y variable, Region as the X variable, and Population as the frequency. The script also includes ID as supplementary ID and configures cross table settings.

<!-- Keywords: #MultipleCorrespondenceAnalysis, #JMPScriptingLanguage, #DataVisualization, #StatisticalAnalysis, #CrossTable -->

**Code**:
```jsl
// Multiple Correspondence Analysis
// Open data table
dt = Open("data_table.jmp");
// Multiple Correspondence Analysis
Multiple Correspondence Analysis(
	Y( :Year ),
	X( :Region ),
	Freq( :Population ),
	Supplementary ID( :ID ),
	Cross Table(
		Cell Chi Square( 0 ),
		Show Total( 1 )
	),
	Cross Table of Supplementary Rows(
		Cell Chi Square( 0 ),
		Show Total( 1 )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Perform multiple correspondence analysis.
3. Set Year as Y variable.
4. Set Region as X variable.
5. Use Population as frequency.
6. Include ID as supplementary ID.
7. Configure cross table settings.
8. Enable cell chi square for cross table.
9. Show total for cross table.
10. Configure supplementary rows cross table settings.



### Example 10
> **Summary**: Executes Multiple Correspondence Analysis (MCA) on a data table, saving coordinates and handling dialog boxes for Windows and non-Windows hosts.

<!-- Keywords: #JSLScriptingLanguage, #MultipleCorrespondenceAnalysis, #DataVisualization, #WindowsHandling, #DialogBoxManagement -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Multiple Correspondence Analysis( Y( :country, :size, :type ) );
With Window Handler(
	mytab2 = obj << Save Coordinates,
	Function( {dlg},
		If( dlg << Is Modal Dialog,
			If( Host is( Windows ),
				dlg[Button Box( 1 )] << click,
				dlg[Button Box( 2 )] << click
			)
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Perform MCA on selected columns.
3. Save coordinates from MCA.
4. Create window handler for saving.
5. Define function for dialog handling.
6. Check if dialog is modal.
7. Determine host operating system.
8. Click appropriate button for Windows.
9. Click appropriate button for non-Windows.



### Example 11
> **Summary**: Runs multiple correspondence analysis to visualize relationships between categorical variables, utilizing the Cross Table option for chi-square tests and displaying total counts.

<!-- Keywords: #MultipleCorrespondenceAnalysis, #CrossTable, #ChiSquareTest, #JMPScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Multiple Correspondence Analysis( Y( :sex, :marital status, :country, :size ), Cross Table( Cell Chi Square( 0 ), Show Total( 1 ) ) );
```

**Code Explanation**:

1. Open data table.
2. Perform multiple correspondence analysis.
3. Specify variables for analysis.
4. Configure chi-square test options.
5. Display total in cross table.



### Example 12
> **Summary**: Performs a Multiple Correspondence Analysis (MCA) to visualize the relationship between country, size, and sex using JMP.

<!-- Keywords: #JMP, #MultipleCorrespondenceAnalysis, #DataVisualization, #StatisticalModeling, #SupplementaryColumns -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Multiple Correspondence Analysis(
	Y( :country, :size ),
	Z( :sex ),
	Cross Table( Cell Chi Square( 0 ), Show Total( 1 ) ),
	Cross Table of Supplementary Columns( Cell Chi Square( 0 ), Show Total( 1 ) )
);
```

**Code Explanation**:

1. Open data table;
2. Perform Multiple Correspondence Analysis.
3. Use columns :country and :size.
4. Include column :sex as supplementary.
5. Apply Cell Chi Square with value 0.
6. Show total in cross table.
7. Apply Cell Chi Square again with value 0.
8. Show total in supplementary cross table.



### Example 13
> **Summary**: Performs a Multiple Correspondence Analysis (MCA) to visualize the relationships between sex, marital status, country, and size using JMP.

<!-- Keywords: #JMP, #MultipleCorrespondenceAnalysis, #DataVisualization, #DimensionalityReduction, #StatisticalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Multiple Correspondence Analysis(
	Y( :sex, :marital status, :country, :size ),
	Cross Table( 0 ),
	Show Plot( 0 ),
	Show Detail( 0 ),
	Show Squared Cosines( 1 )
);
```

**Code Explanation**:

1. Open data table;
2. Launch Multiple Correspondence Analysis.
3. Select variables: sex, marital status, country, size.
4. Disable cross table.
5. Disable plot display.
6. Disable detail display.
7. Enable squared cosines display.



### Example 14
> **Summary**: Performs a Multiple Correspondence Analysis (MCA) on the Species variable, utilizing Petal width as X and Petal length as Z, with coordinates displayed.

<!-- Keywords: #MultipleCorrespondenceAnalysis, #JMPScriptingLanguage, #DataVisualization, #DimensionalityReduction, #StatisticalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Multiple Correspondence Analysis(
	Y( :Species ),
	X( :Petal width ),
	Z( :Petal length ),
	Cross Table( 0 ),
	Show Plot( 0 ),
	Show Detail( 0 ),
	Show Coordinates( 1 ),
	Show Partial Contributions to Inertia( 0 ),
	Show Squared Cosines( 0 )
);
obj << save Coordinates( 2 );
tablex = Data Table("data_table") << get as matrix;
tabley = Data Table("data_table") << get as matrix;
tablesuprow = Data Table("data_table") << get as matrix;
tablesupcol = Data Table("data_table") << get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Perform MCA on Species.
3. Use Petal width as X.
4. Use Petal length as Z.
5. Disable cross table display.
6. Disable plot display.
7. Disable detail display.
8. Enable coordinate display.
9. Disable partial contributions display.
10. Disable squared cosines display.



### Example 15
> **Summary**: Runs the Multiple Correspondence Analysis (MCA) on a dataset, using Region as the response variable, Year as the predictor variable, and Population as frequency, with supplementary ID for identification.

<!-- Keywords: #MultipleCorrespondenceAnalysis, #JMPScriptingLanguage, #DataVisualization, #StatisticalModeling, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Multiple Correspondence Analysis( Y( :Region ), X( :Year ), Freq( :Population ), Supplementary ID( :ID ) );
rpt = obj << Report;
```

**Code Explanation**:

1. Open data table.
2. Perform MCA on dataset.
3. Set Region as response variable.
4. Set Year as predictor variable.
5. Use Population as frequency.
6. Identify supplementary ID.
7. Generate MCA report.



### Example 16
> **Summary**: Creates a Multiple Correspondence Analysis (MCA) object with 3D visualization, selecting variables for analysis and enabling interactive features.

<!-- Keywords: #JMPScriptingLanguage, #MultipleCorrespondenceAnalysis, #3DCorrespondenceAnalysis, #InteractiveFeatures, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Multiple Correspondence Analysis( Y( :country, :size, :type ) );
obj << "3D Correspondence Analysis"n( 1 );
```

**Code Explanation**:

1. Open data_table data
2. Create MCA object.
3. Select variables for analysis.
4. Enable 3D Correspondence Analysis.




# Contingency

### Example 1
> **Summary**: Generates a contingency analysis to display the distribution of nominal variables, specifically 'Relapsed' and 'Alcohol Consumption', with frequency counts, total percentages, column percentages, row percentages, and hides expected values.

<!-- Keywords: #ContingencyAnalysis, #NominalVariables, #FrequencyCounts, #Percentages, #JSLScript -->

**Code**:
```jsl
// Contingency
// Open data table
dt = Open("data_table.jmp");
// Contingency
Contingency(
	Y( :Relapsed ),
	X( :Alcohol Consumption ),
	Freq( :Count ),
	Contingency Table(
		Count( 1 ),
		Total %( 1 ),
		Col %( 1 ),
		Row %( 1 ),
		Expected( 0 ),
		Deviation( 0 ),
		Cell Chi Square( 0 )
	)
);
```

**Code Explanation**:

1. Open table.
2. Create contingency analysis.
3. Set Y variable.
4. Set X variable.
5. Use frequency column.
6. Display count.
7. Display total percentage.
8. Display column percentage.
9. Display row percentage.
10. Hide expected values.



### Example 2
> **Summary**: Performs contingency analysis on three different variables (Claim Y/N, City(Y/N), and Rating Class) from a data table, generating contingency tables with various options and sending the results to a report.

<!-- Keywords: #ContingencyAnalysis, #JMPScriptingLanguage, #DataTable, #ReportGeneration, #StatisticalAnalysis -->

**Code**:
```jsl
// Contingency (Claim Y/N)
// Open data table
dt = Open("data_table.jmp");
// Contingency (Claim Y/N)
Contingency(
	Y( :"Claim(Y/N)"n ),
	X( :AgeClass ),
	Contingency Table(
		Count( 1 ),
		Total %( 1 ),
		Col %( 0 ),
		Row %( 0 ),
		Expected( 0 ),
		Deviation( 0 ),
		Cell Chi Square( 0 )
	),
	SendToReport(
		Dispatch( {}, "Contingency Table",
			OutlineBox,
			Close( 1 )
		)
	)
);
Contingency(
	Y( :"Claim(Y/N)"n ),
	X( :"City(Y/N)"n ),
	Contingency Table(
		Count( 1 ),
		Total %( 1 ),
		Col %( 0 ),
		Row %( 0 ),
		Expected( 0 ),
		Deviation( 0 ),
		Cell Chi Square( 0 )
	),
	SendToReport(
		Dispatch( {}, "Contingency Table",
			OutlineBox,
			Close( 1 )
		)
	)
);
Contingency(
	Y( :"Claim(Y/N)"n ),
	X( :Rating Class ),
	Contingency Table(
		Count( 1 ),
		Total %( 1 ),
		Col %( 0 ),
		Row %( 0 ),
		Expected( 0 ),
		Deviation( 0 ),
		Cell Chi Square( 0 )
	),
	SendToReport(
		Dispatch( {}, "Contingency Table",
			OutlineBox,
			Close( 1 )
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Perform contingency analysis.
3. Set Y variable.
4. Set X variable (AgeClass).
5. Configure contingency table options.
6. Hide contingency table outline.
7. Perform second contingency analysis.
8. Set Y variable.
9. Set X variable (City(Y/N)).
10. Configure and hide contingency table outline.



### Example 3
> **Summary**: Generates a contingency table to analyze the distribution of nominal variables, specifically examining the relationship between age and sex.

<!-- Keywords: #ContingencyTable, #NominalVariables, #DistributionAnalysis, #JSLScripting, #DataVisualization -->

**Code**:
```jsl
// Contingency
// Open data table
dt = Open("data_table.jmp");
// Contingency
Contingency(
	Y( :age ),
	X( :sex ),
	Crosstabs(
		Count( 1 ),
		Total %( 1 ),
		Col %( 1 ),
		Row %( 1 ),
		Expected( 0 ),
		Deviation( 0 ),
		"Cell Chi^2"n( 0 )
	)
);
```

**Code Explanation**:

1. Open table.
2. Create contingency analysis.
3. Set Y variable to age.
4. Set X variable to sex.
5. Enable count display.
6. Enable total percentage display.
7. Enable column percentage display.
8. Enable row percentage display.
9. Disable expected values display.
10. Disable deviation display.



### Example 4
> **Summary**: Opens a data table, performs contingency analysis with Country as the Y variable and Type as the X variable, and displays counts, total percentages, column percentages, and row percentages in a contingency table.

<!-- Keywords: #ContingencyAnalysis, #JMPScriptingLanguage, #DataVisualization, #StatisticalAnalysis, #TableManipulation -->

**Code**:
```jsl
// Contingency
// Open data table
dt = Open("data_table.jmp");
// Contingency
Contingency(
	Y( :Country ),
	X( :Type ),
	Contingency Table(
		Count( 1 ),
		Total %( 1 ),
		Col %( 1 ),
		Row %( 1 ),
		Expected( 0 ),
		Deviation( 0 ),
		Cell Chi Square( 0 ),
		Col Cum( 0 ),
		Col Cum %( 0 ),
		Row Cum( 0 ),
		Row Cum %( 0 )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Perform contingency analysis.
3. Set Y variable as Country.
4. Set X variable as Type.
5. Configure contingency table options.
6. Display counts.
7. Display total percentages.
8. Display column percentages.
9. Display row percentages.
10. Do not display expected values.



### Example 5
> **Summary**: Opens a data table, performs a contingency analysis with nominal variables, and visualizes the results.

<!-- Keywords: #JSLScriptingLanguage, #ContingencyAnalysis, #NominalVariables, #DataVisualization, #JMPScript -->

**Code**:
```jsl
// Contingency
// Open data table
dt = Open("data_table.jmp");
// Contingency
Contingency(
	Y( :type ),
	X( :marital status )
);
```

**Code Explanation**:

1. Open data table.
2. Run contingency analysis.
3. Set Y variable.
4. Set X variable.



### Example 6
> **Summary**: Generates distributions of nominal variables by performing a contingency analysis on the specified response and predictor variables, with frequency counts and correspondence analysis enabled.

<!-- Keywords: #ContingencyAnalysis, #NominalVariables, #FrequencyCounts, #CorrespondenceAnalysis, #JMPScriptingLanguage -->

**Code**:
```jsl
// Contingency
// Open data table
dt = Open("data_table.jmp");
// Contingency
Contingency(
	Y( :Response ),
	X( :Cheese ),
	Freq( :Count ),
	Crosstabs( 0 ),
	Tests( 0 ),
	Correspondence Analysis( 1 )
);
```

**Code Explanation**:

1. Open data table;
2. Create contingency analysis.
3. Set response variable.
4. Set predictor variable.
5. Specify frequency column.
6. Disable crosstabs display.
7. Disable tests display.
8. Enable correspondence analysis.



### Example 7
> **Summary**: Opens a data table, defines a contingency analysis with a nominal response variable and predictor variable, configures the contingency table display, and disables count and percentage displays.

<!-- Keywords: #JMPScriptingLanguage, #ContingencyAnalysis, #NominalVariables, #DataTableOperations, #StatisticalAnalysis -->

**Code**:
```jsl
// Contingency
// Open data table
dt = Open("data_table.jmp");
// Contingency
Contingency(
	Y( :Lung Cancer ),
	X( :Smoker ),
	Freq( :Count ),
	Contingency Table(
		Count( 1 ),
		Total %( 0 ),
		Col %( 0 ),
		Row %( 1 ),
		Expected( 0 ),
		Deviation( 0 ),
		Cell Chi Square( 0 )
	),
	Tests( 0 )
);
```

**Code Explanation**:

1. Open data table.
2. Define contingency analysis.
3. Set response variable.
4. Set predictor variable.
5. Set frequency variable.
6. Configure contingency table display.
7. Disable count display.
8. Disable total percentage display.
9. Disable column percentage display.
10. Enable row percentage display.



### Example 8
> **Summary**: Generates a contingency analysis to visualize the distribution of nominal variables in a data table, with options for crosstabs and percentages.

<!-- Keywords: #ContingencyAnalysis, #NominalVariables, #DataVisualization, #JMPScriptingLanguage, #CrosstabOptions -->

**Code**:
```jsl
// Contingency
// Open data table
dt = Open("data_table.jmp");
// Contingency
Contingency(
	Y( :To ),
	X( :From ),
	Crosstabs(
		Count( 1 ),
		Total %( 1 ),
		Col %( 1 ),
		Row %( 1 ),
		Expected( 0 ),
		Deviation( 0 ),
		"Cell Chi^2"n( 0 )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create contingency analysis.
3. Set Y variable to "To".
4. Set X variable to "From".
5. Configure crosstabs options.
6. Count occurrences.
7. Calculate total percentages.
8. Calculate column percentages.
9. Calculate row percentages.
10. Disable expected values.



### Example 9
> **Summary**: Generates a contingency analysis to examine the relationship between 'On Time' and 'Clinic', with frequency as the third dimension, displaying various statistics such as count, total percentage, column percentage, row percentage, expected values, deviation, cell chi-square, and cumulative percentages.

<!-- Keywords: #ContingencyAnalysis, #JMPScriptingLanguage, #NominalVariables, #FrequencyColumn, #StatisticalAnalysis -->

**Code**:
```jsl
// Contingency
// Open data table
dt = Open("data_table.jmp");
// Contingency
Contingency(
	Y( :On Time ),
	X( :Clinic ),
	Freq( :Frequency ),
	Contingency Table(
		Count( 1 ),
		Total %( 1 ),
		Col %( 1 ),
		Row %( 1 ),
		Expected( 0 ),
		Deviation( 0 ),
		Cell Chi Square( 0 ),
		Col Cum( 0 ),
		Col Cum %( 0 ),
		Row Cum( 0 ),
		Row Cum %( 0 )
	),
	Analysis of Means for Proportions(
		1,
		Show Summary Report( 1 ),
		Switch Response Level for Proportion(
			1
		)
	),
	Contingency(
		Y( :On Time ),
		X( :Clinic ),
		Freq( :Frequency ),
		Contingency Table(
			Count( 1 ),
			Total %( 1 ),
			Col %( 1 ),
			Row %( 1 ),
			Expected( 0 ),
			Deviation( 0 ),
			Cell Chi Square( 0 ),
			Col Cum( 0 ),
			Col Cum %( 0 ),
			Row Cum( 0 ),
			Row Cum %( 0 )
		),
		Analysis of Means for Proportions(
			1,
			Show Summary Report( 1 ),
			Switch Response Level for Proportion(
				1
			)
		)
	)
);
```

**Code Explanation**:

1. Open table.
2. Create contingency analysis.
3. Set Y variable.
4. Set X variable.
5. Use frequency column.
6. Configure contingency table.
7. Enable count display.
8. Enable total percentage display.
9. Enable column percentage display.
10. Enable row percentage display.



### Example 10
> **Summary**: Opens a data table, performs a contingency analysis with a specific agreement statistic, and generates distributions of nominal variables.

<!-- Keywords: #JMPScriptingLanguage, #ContingencyAnalysis, #NominalVariables, #DataTableOperations, #AgreementStatistic -->

**Code**:
```jsl
// Contingency
// Open data table
dt = Open("data_table.jmp");
// Contingency
Contingency(
	Y( 2 ),
	X( 1 ),
	Freq( 3 ),
	Agreement Statistic( 1 )
);
```

**Code Explanation**:

1. Open table.
2. Run contingency analysis.
3. Set response variable.
4. Set factor variable.
5. Use frequency column.
6. Calculate agreement statistic.



### Example 11
> **Summary**: Generates a mosaic plot to visualize the distribution of nominal variables, specifically 'Carrier Code' by 'Airport', using Contingency analysis and sending it to a report.

<!-- Keywords: #JMPScriptingLanguage, #ContingencyAnalysis, #MosaicPlot, #NominalVariables, #DataVisualization -->

**Code**:
```jsl
Open("data_table.jmp");
Contingency( Y( :Carrier Code ), X( :Airport ), Contingency Table( 0 ), Tests( 0 ) );
Contingency(
	Y( :Carrier Code ),
	X( :Airport ),
	Contingency Table( 0 ),
	Tests( 0 ),
	SendToReport( Dispatch( {"Mosaic Plot"}, "1", ScaleBox, {Label Row( {Set Font Size( 18 ), Set Font Style( "Plain" )} )} ) )
);
```

**Code Explanation**:

1. Open data table;
2. Create contingency table.
3. Redraw contingency table.
4. Set font size to 18.
5. Set font style to plain.



### Example 12
> **Summary**: Creates a contingency table for nominal variables, utilizing a Column Switcher to dynamically switch between columns.

<!-- Keywords: #JMPScriptingLanguage, #ContingencyTable, #ColumnSwitcher, #NominalVariables, #DataAnalysis -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );
```

**Code Explanation**:

1. Open data table;
2. Create contingency object.
3. Add column switcher.



### Example 13
> **Summary**: Creates a contingency analysis object to generate distributions of nominal variables, utilizing Column Switcher for interactive filtering and setting size.

<!-- Keywords: #JSLScriptingLanguage, #ContingencyAnalysis, #ColumnSwitcher, #NominalVariables, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );
ColumnSwitcherObject << Set Size( 200 );
```

**Code Explanation**:

1. Open data table;
2. Create contingency analysis object.
3. Initialize Column Switcher.
4. Set size of Column Switcher.



### Example 14
> **Summary**: Generates a contingency table, correspondence analysis, and horizontal mosaic plot to analyze the relationship between sex and age in a data set, while also conducting Cochran-Armitage trend tests.

<!-- Keywords: #ContingencyTable, #CorrespondenceAnalysis, #MosaicPlot, #CochranArmitageTrendTest, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Contingency(
	Y( :sex ),
	X( :age ),
	Contingency Table,
	Correspondence Analysis( 1 ),
	Horizontal Mosaic( 1 ),
	Cochran Armitage Trend Test( 1 ),
	SendToReport(
		Dispatch( {"Mosaic Plot"}, "", NomAxisBox( 2 ), {Set Width( 20 ), Set Height( 320 )} ),
		Dispatch( {"Correspondence Analysis"}, "1", ScaleBox, {Format( "Custom", Formula( Round( Cauchy Density( value ), 2 ) ), 12 )} ),
		Dispatch( {"Correspondence Analysis"}, "2", ScaleBox, {Format( "Custom", Formula( Round( Gamma Density( value ), 2 ) ), 12 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create contingency analysis.
3. Set Y variable as "sex".
4. Set X variable as "age".
5. Generate contingency table.
6. Perform correspondence analysis.
7. Create horizontal mosaic plot.
8. Conduct Cochran-Armitage trend test.
9. Adjust mosaic plot size.
10. Customize correspondence analysis formats.



### Example 15
> **Summary**: Generates a contingency table to analyze the distribution of nominal variables, specifically 'name' and 'sex', filtered by age 12.

<!-- Keywords: #ContingencyTable, #NominalVariables, #DataFiltering, #JSLScripting, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Contingency( Y( :name ), X( :sex ), Contingency Table, Where( :age == 12 ) );
```

**Code Explanation**:

1. Open data table;
2. Create contingency table.
3. Set Y variable to name.
4. Set X variable to sex.
5. Apply mosaic plot.
6. Filter data where age equals 12.



### Example 16
> **Summary**: Generates a contingency table analysis for nominal variables, filtering rows based on height and grouping results by age.

<!-- Keywords: #ContingencyTable, #NominalVariables, #Filtering, #Grouping, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Contingency( Y( :name ), X( :sex ), Contingency Table( 0 ), Tests( 0 ), Where( :height < 63 ), By( :age ) );
```

**Code Explanation**:

1. Open data table;
2. Create contingency analysis.
3. Set Y variable to "name".
4. Set X variable to "sex".
5. Disable contingency table display.
6. Disable tests display.
7. Filter rows where height < 63.
8. Group results by "age".



### Example 17
> **Summary**: Runs a contingency analysis to visualize the distribution of nominal variables, enabling correspondence analysis and analysis of means for proportions with point options set to show needles.

<!-- Keywords: #ContingencyAnalysis, #CorrespondenceAnalysis, #AnalysisOfMeansForProportions, #NominalVariables, #JMPScriptingLanguage -->

**Code**:
```jsl
Open("data_table.jmp");
Contingency(
	Y( :age ),
	X( :sex ),
	Contingency Table( 0 ),
	Mosaic Plot( 0 ),
	Tests( 0 ),
	Correspondence Analysis( 1 ),
	Analysis of Means for Proportions( 1, Show Decision Limits( 0 ), Point Options( "Show Needles" ) ),
	SendToReport( Dispatch( {}, "Analysis of Means for Proportions", OutlineBox, {Close( 1 )} ) )
);
```

**Code Explanation**:

1. Open data table;
2. Perform contingency analysis.
3. Set Y variable to age.
4. Set X variable to sex.
5. Disable contingency table.
6. Disable mosaic plot.
7. Disable tests.
8. Enable correspondence analysis.
9. Enable analysis of means for proportions.
10. Hide decision limits.
11. Show needles in point options.
12. Close analysis of means for proportions outline.



### Example 18
> **Summary**: Analyze Age by sex in a contingency table, providing a summary of the relationship between these two nominal variables.

<!-- Keywords: #ContingencyTable, #NominalVariables, #JMPScriptingLanguage, #DataAnalysis, #DescriptiveStatistics -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = Contingency( Y( :Age ), X( :sex ) );
```

**Code Explanation**:

1. Set default names.
2. Open data table;
3. Create contingency object.
4. Analyze Age by sex.



### Example 19
> **Summary**: Generates contingency tables for nominal variables, filtering data by height and grouping results by age.

<!-- Keywords: #ContingencyTable, #NominalVariables, #DataFiltering, #GroupBy, #JSLScriptingLanguage -->

**Code**:
```jsl
Open("data_table.jmp");
Contingency( Y( :name ), X( :sex ), Contingency Table( 0 ), Tests( 0 ), Where( :height < 63 ), By( :age ) );
```

**Code Explanation**:

1. Open data table;
2. Run contingency analysis.
3. Set response variable.
4. Set factor variable.
5. Disable contingency table display.
6. Disable statistical tests.
7. Apply height filter.
8. Group by age variable.



### Example 20
> **Summary**: Analyze nominal variables by generating distributions and enabling correspondence analysis and measures of association in JMP.

<!-- Keywords: #JMPScriptingLanguage, #ContingencyAnalysis, #CorrespondenceAnalysis, #MeasuresofAssociation, #NominalVariables -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Contingency(
	Y( :age ),
	X( :sex ),
	Contingency Table( 0 ),
	Mosaic Plot( 0 ),
	Tests( 0 ),
	Correspondence Analysis( 1 ),
	Measures of Association( 1 ),
	SendToReport(
		Dispatch( {}, "Contingency Analysis of age By sex", OutlineBox, {Set Title( "Correspondence Analysis, Measures of Association" )} ),
		Dispatch( {"Correspondence Analysis"}, "Details", OutlineBox, {Close( 0 )} )
	)
);
```

**Code Explanation**:

1. Open table.
2. Create contingency object.
3. Set Y variable.
4. Set X variable.
5. Disable contingency table.
6. Disable mosaic plot.
7. Disable tests.
8. Enable correspondence analysis.
9. Enable measures of association.
10. Set report title and close details.



### Example 21
> **Summary**: Generates contingency tables to analyze nominal variables, specifically 'age' and 'sex', with configurable crosstabs options.

<!-- Keywords: #ContingencyTable, #NominalVariables, #CrosstabOptions, #JSLScripting, #DataAnalysis -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Contingency(
	Y( :age ),
	X( :sex ),
	Crosstabs( Count( 1 ), Total %( 1 ), Col %( 1 ), Row %( 1 ), Expected( 0 ), Deviation( 0 ), Name( "Cell Chi^2" )(0) )
);
```

**Code Explanation**:

1. Open data table;
2. Create contingency object.
3. Set Y variable to "age".
4. Set X variable to "sex".
5. Configure crosstabs options.
6. Count occurrences in cells.
7. Calculate total percentages.
8. Calculate column percentages.
9. Calculate row percentages.
10. Disable expected values.



### Example 22
> **Summary**: Generates contingency tables for nominal variables, enabling automatic recalculation and certified statistics calculation.

<!-- Keywords: #JSLScripting, #ContingencyTables, #NominalVariables, #AutomaticRecalculation, #CertifiedStatistics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
cont = dt << Contingency(
	Y( :age ),
	X( :sex ),
	Crosstabs( Count( 1 ), Total %( 1 ), Col %( 1 ), Row %( 1 ), Expected( 0 ), Deviation( 0 ), Name( "Cell Chi^2" )(0) )
);
cont << Automatic Recalc( 1 );
dt << select where( :age == 12 | :age == 13 );
dt << Hide and Exclude( 1 );
contTable1 = cont << Make into Data table;
sumStats1 = contTable1 << get as matrix;
certStats1 = [5 2 2 1,
20 8 8 4,
41.6666666666667 28.5714285714286 66.6666666666667 33.3333333333333,
50 20 20 10,
7 5 1 2,
28 20 4 8,
58.3333333333333 71.4285714285714 33.3333333333333 66.6666666666667,
46.6666666666667 33.3333333333333 6.66666666666667 13.3333333333333];
dt << clear row states;
dt << select Where( :age == 12 | :age == 17 );
dt << Hide and Exclude( 1 );
contTable2 = cont << Make into Data Table;
sumStats2 = contTable2 << get as matrix;
certSTats2 = [3 5 2 2,
10.3448275862069 17.2413793103448 6.89655172413793 6.89655172413793,
42.8571428571429 41.6666666666667 28.5714285714286 66.6666666666667,
25 41.6666666666667 16.6666666666667 16.6666666666667,
4 7 5 1,
13.7931034482759 24.1379310344828 17.2413793103448 3.44827586206897,
57.1428571428572 58.3333333333333 71.4285714285714 33.3333333333333,
23.5294117647059 41.1764705882353 29.4117647058824 5.88235294117647];
Close( dt, no save );
```

**Code Explanation**:

1. Open data table.
2. Create contingency table.
3. Enable automatic recalculation.
4. Select rows where age is 12 or 13.
5. Hide and exclude selected rows.
6. Convert contingency table to data table.
7. Retrieve table as matrix.
8. Define certified statistics for first selection.
9. Clear row states in original table.
10. Select rows where age is 12 or 17.
11. Hide and exclude selected rows.
12. Convert contingency table to data table again.
13. Retrieve table as matrix.
14. Define certified statistics for second selection.
15. Close original table without saving.



### Example 23
> **Summary**: Generates contingency tables and summary statistics for nominal variables, enabling interactive filtering by age group.

<!-- Keywords: #JSLScripting, #ContingencyTable, #NominalVariables, #InteractiveFiltering, #SummaryStatistics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
cont = dt << Contingency(
	Y( :age ),
	X( :sex ),
	Crosstabs( Count( 1 ), Total %( 1 ), Col %( 1 ), Row %( 1 ), Expected( 0 ), Deviation( 0 ), Name( "Cell Chi^2" )(0) )
);
cont << Automatic Recalc( 1 );
dt << select where( :age == 12 | :age == 13 );
dt << Hide and Exclude( 1 );
contTable1 = cont << Make into Data table;
sumStats1 = contTable1 << get as matrix;
certStats1 = [5 2 2 1,
20 8 8 4,
41.6666666666667 28.5714285714286 66.6666666666667 33.3333333333333,
50 20 20 10,
7 5 1 2,
28 20 4 8,
58.3333333333333 71.4285714285714 33.3333333333333 66.6666666666667,
46.6666666666667 33.3333333333333 6.66666666666667 13.3333333333333];
dt << clear row states;
dt << select Where( :age == 12 | :age == 17 );
dt << Hide and Exclude( 1 );
contTable2 = cont << Make into Data Table;
sumStats2 = contTable2 << get as matrix;
certSTats2 = [3 5 2 2,
10.3448275862069 17.2413793103448 6.89655172413793 6.89655172413793,
42.8571428571429 41.6666666666667 28.5714285714286 66.6666666666667,
25 41.6666666666667 16.6666666666667 16.6666666666667,
4 7 5 1,
13.7931034482759 24.1379310344828 17.2413793103448 3.44827586206897,
57.1428571428572 58.3333333333333 71.4285714285714 33.3333333333333,
23.5294117647059 41.1764705882353 29.4117647058824 5.88235294117647];
```

**Code Explanation**:

1. Open data table.
2. Create contingency table.
3. Enable automatic recalculation.
4. Select specific rows by age.
5. Hide and exclude selected rows.
6. Convert contingency table to data table.
7. Extract summary statistics as matrix.
8. Define certified statistics for comparison.
9. Clear previous row states.
10. Select different rows by age.
11. Hide and exclude new selected rows.
12. Convert new contingency table to data table.
13. Extract new summary statistics as matrix.
14. Define new certified statistics for comparison.



### Example 24
> **Summary**: Generates a contingency table and Cochran-Mantel-Haenszel test for analyzing the relationship between age and sex, utilizing the Contingency platform in JMP.

<!-- Keywords: #ContingencyTable, #CochranMantelHaenszel, #JMPScriptingLanguage, #DataAnalysis, #StatisticalModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Contingency(
	Y( :age ),
	X( :sex ),
	Contingency Table( 0 ),
	Mosaic Plot( 0 ),
	Tests( 0 ),
	Cochran Mantel Haenszel( :sex ),
	Measures of Association( 1 )
);
rpt = Report( obj );
obj2 = obj << redo analysis;
rpt2 = Report( obj2 );
```

**Code Explanation**:

1. Open data table;
2. Create contingency object.
3. Set Y variable to age.
4. Set X variable to sex.
5. Disable contingency table.
6. Disable mosaic plot.
7. Disable tests.
8. Enable Cochran-Mantel-Haenszel test.
9. Enable measures of association.
10. Redo analysis and report.



### Example 25
> **Summary**: Calculates and visualizes risk differences in a contingency table, utilizing the Contingency platform to analyze the relationship between Lung Cancer and Smoker status.

<!-- Keywords: #ContingencyTable, #RiskDifference, #JMPScriptingLanguage, #DataAnalysis, #StatisticalVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Contingency(
	Y( :Lung Cancer ),
	X( :Smoker ),
	Freq( :Count ),
	Contingency Table( Count( 1 ), Total %( 0 ), Col %( 0 ), Row %( 1 ) ),
	Risk Difference( 1 )
);
rpt = Report( obj );
act_val = rpt["Risk Difference", Table Box( 1 )] << get as matrix;
exp_val = [-0.251700298953662 -0.351766340417453 -0.151634257489871];
```

**Code Explanation**:

1. Open data table;
2. Create contingency object.
3. Set response variable: Lung Cancer.
4. Set factor variable: Smoker.
5. Set frequency variable: Count.
6. Configure contingency table display.
7. Enable risk difference calculation.
8. Generate report from object.
9. Extract risk difference values.
10. Define expected risk difference values.



### Example 26
> **Summary**: Creates a contingency table with Fisher's Exact Test and filters data by height range using Local Data Filter.

<!-- Keywords: #JSLScripting, #ContingencyTable, #FisherExactTest, #LocalDataFilter, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Contingency( Y( :age ), X( :sex ), Fisher's Exact Test( 1 ) );
obj << Local Data Filter( Add Filter( columns( :height ), Where( :height >= 56.1 & :height <= 58.2 ) ) );
```

**Code Explanation**:

1. Open data table;
2. Create contingency table.
3. Apply Fisher's Exact Test.
4. Add local data filter.
5. Filter height between 56.1 and 58.2.



### Example 27
> **Summary**: Analyze a contingency table to test for trends in nominal variables, extracting Jonckheere-Terpstra test statistics and performing one-way ANOVA on height.

<!-- Keywords: #JSLScriptingLanguage, #ContingencyTableAnalysis, #Jonckheere-TerpstraTest, #One-WayANOVA, #Height -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Contingency( Y( :sex ), X( :age ), Jonckheere Terpstra Test( 1 ) );
rpt = Report( obj );
jtstat_act = (rpt["Jonckheere-Terpstra Test", Number Col Box( "JT Statistic" )] << Get)[1];
jtz_act = (rpt["Jonckheere-Terpstra Test", Number Col Box( "Z" )] << Get)[1];
jtprob_act = (rpt["Jonckheere-Terpstra Test", Number Col Box( "Prob>Z" )] << Get)[1];
jtprob2sided_act = (rpt["Jonckheere-Terpstra Test", Number Col Box( "Prob>|Z|" )] << Get)[1];
jtstat_exp = 349.0000;
jtz_exp = 0.8350;
jtprob_exp = 0.2019;
jtprob2sided_exp = 0.4037;
obj2 = dt << Oneway( Y( :Height ), X( :age ) );
obj2 << Jonckheere Terpstra Test( 1 );
rpt2 = Report( obj2 );
```

**Code Explanation**:

1. Open data table;
2. Create contingency table analysis.
3. Extract Jonckheere-Terpstra test statistics.
4. Define expected test statistics.
5. Perform one-way ANOVA on height.
6. Apply Jonckheere-Terpstra test to ANOVA.



### Example 28
> **Summary**: Runs the Cochran-Armitage trend test to analyze the relationship between nominal variables, utilizing a Contingency table and generating a report object.

<!-- Keywords: #CochranArmitageTest, #ContingencyTable, #NominalVariables, #JMPScriptingLanguage, #StatisticalAnalysis -->

**Code**:
```jsl
car = Open("data_table.jmp");
ct = Contingency( Y( :sex ), X( :country ) );
ct << Exact Cochran Armitage Trend Test( 1 );
rpt = Report( ct );
jrn = rpt[Outline Box( "Cochran Armitage Trend Test" )] << get journal;
ct << close window;
Delete Symbols( ct, rpt, jrn, exout, scr );
```

**Code Explanation**:

1. Open data table;
2. Create contingency table.
3. Perform Cochran-Armitage test.
4. Generate report object.
5. Extract Cochran-Armitage trend test results.
6. Close contingency table window.
7. Delete unused symbols.



## Contingency using New Window
### Example 1
> **Summary**: Performs multiple correspondence analysis with supplementary rows for subject and gender, generating detailed coordinates and scaling for the first three dimensions, and visualizes relationships between variables using contingency tables, logistic regressions, and mosaic plots.

<!-- Keywords: #MultipleCorrespondenceAnalysis, #ContingencyTables, #LogisticRegression, #MosaicPlots, #JSLScript -->

**Code**:
```jsl
// Two Way Relationships
// Open data table
dt = Open("data_table.jmp");
// Two Way Relationships
New Window(
	"bands.data- Fit Y by X of band type",
	H List Box(
		Contingency(
			Y( :Banding? ),
			X( :paper type ),
			Contingency Table(
				Count( 1 ),
				Total %( 1 ),
				Col %( 1 ),
				Row %( 1 ),
				Expected( 0 ),
				Deviation( 0 ),
				Cell Chi Square( 0 )
			)
		),
		Contingency(
			Y( :Banding? ),
			X( :press type ),
			Contingency Table(
				Count( 1 ),
				Total %( 1 ),
				Col %( 1 ),
				Row %( 1 ),
				Expected( 0 ),
				Deviation( 0 ),
				Cell Chi Square( 0 )
			),
			SendToReport(
				Dispatch( {"Mosaic Plot"},
					"", NomAxisBox,
					Rotated Tick Labels(
						1
					)
				)
			)
		),
		Contingency(
			Y( :Banding? ),
			X( :press ),
			Contingency Table(
				Count( 1 ),
				Total %( 1 ),
				Col %( 1 ),
				Row %( 1 ),
				Expected( 0 ),
				Deviation( 0 ),
				Cell Chi Square( 0 )
			)
		),
		Logistic(
			Y( :Banding? ),
			X( :viscosity ),
			Show Points( 0 ),
			Show Rate Curve( 1 ),
			SendToReport(
				Dispatch( {}, "1",
					ScaleBox,
					{
					Min(
						31.7771084337349
					)}
				)
			)
		),
		Logistic(
			Y( :Banding? ),
			X( :ink temperature ),
			Show Points( 0 ),
			Show Rate Curve( 1 )
		),
		Logistic(
			Y( :Banding? ),
			X( :humidity ),
			Show Points( 0 ),
			Show Rate Curve( 1 )
		),
		Logistic(
			Y( :Banding? ),
			X( :press speed ),
			Show Points( 0 ),
			Show Rate Curve( 1 )
		),
		Logistic(
			Y( :Banding? ),
			X( :hardener ),
			Show Points( 0 ),
			Show Rate Curve( 1 )
		),
		Logistic(
			Y( :Banding? ),
			X( :roller durometer ),
			Show Points( 0 ),
			Show Rate Curve( 1 )
		),
		Logistic(
			Y( :Banding? ),
			X( :anode space ratio ),
			Show Points( 0 ),
			Show Rate Curve( 1 )
		)
	)
);
```

**Code Explanation**:

1. Open table.
2. Create new window.
3. Add horizontal list box.
4. Insert contingency analysis for paper type.
5. Insert contingency analysis for press type.
6. Rotate mosaic plot tick labels.
7. Insert contingency analysis for press.
8. Insert logistic regression for viscosity.
9. Set minimum scale for viscosity.
10. Insert logistic regressions for other variables.



### Example 2
> **Summary**: Creates a new window with two contingency analyses, one for marital status and another for country, using Column Switchers to enable interactive filtering.

<!-- Keywords: #JMPScriptingLanguage, #ContingencyAnalysis, #ColumnSwitcher, #InteractiveFiltering, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
New Window( "CS broadcast",
	H List Box( c1 = dt << Contingency( Y( :size ), X( :marital status ), ), c2 = dt << Contingency( Y( :size ), X( :country ), ) )
);
cs1 = c1 << Column Switcher( :marital status, {:sex, :country, :marital status} );
cs2 = c2 << Column Switcher( :country, {:sex, :country, :marital status} );
```

**Code Explanation**:

1. Open data table;
2. Create new window titled "CS broadcast".
3. Add horizontal list box with two items.
4. First item: contingency analysis with size as Y, marital status as X.
5. Second item: contingency analysis with size as Y, country as X.
6. Assign first contingency analysis to cs1.
7. Assign second contingency analysis to cs2.
8. Add column switcher to cs1 for marital status.
9. Set switchable columns for cs1: sex, country, marital status.
10. Add column switcher to cs2 for country.
11. Set switchable columns for cs2: sex, country, marital status.



### Example 3
> **Summary**: Creates a new window with two contingency tables, allowing for interactive exploration and broadcasting of results.

<!-- Keywords: #JMPScriptingLanguage, #ContingencyTables, #ColumnSwitcher, #Broadcasting, #DataVisualization -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
New Window( "CS broadcast",
	H List Box( c1 = dt << Contingency( Y( :size ), X( :marital status ), ), c2 = dt << Contingency( Y( :size ), X( :country ), ) )
);
cs1 = c1 << Column Switcher( :marital status, {:sex, :country, :marital status} );
cs2 = c2 << Column Switcher( :country, {:sex, :country, :marital status} );
cs1 << Broadcast( Next() );
```

**Code Explanation**:

1. Set default names to here.
2. Open data table;
3. Create new window named CS broadcast.
4. Add horizontal list box with two contingency tables.
5. First contingency table: Y is size, X is marital status.
6. Second contingency table: Y is size, X is country.
7. Add column switcher to first contingency table.
8. Switcher options: marital status, sex, country.
9. Add column switcher to second contingency table.
10. Switcher options: country, sex, marital status.
11. Broadcast next from first column switcher.



### Example 4
> **Summary**: Creates a new window with two tab pages, fitting logistic and contingency models to analyze age and weight, as well as sex, respectively.

<!-- Keywords: #JSLScriptingLanguage, #LogisticRegression, #ContingencyTable, #DataAnalysis, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
New Window( "dock close",
	H Splitter Box(
		Size( 600, 300 ),
		tp1 = Tab Page Box(
			"Logistic",
			dt << Logistic(
				Y( :age ),
				X( :weight ),
				SendToReport(
					Dispatch( {}, "Whole Model Test", OutlineBox, {Close( 1 )} ),
					Dispatch( {}, "Parameter Estimates", OutlineBox, {Close( 1 )} )
				)
			),
			<<Moveable( 1 ),
			<<Closeable( 1 ),
			<<Icon( "Logistic" ),
			<<Set Close( Function( {this}, Print( "tab closed" ) ) ),
			<<Set Close Tip( "Close Logistic" )
		),
		tp2 = Tab Page Box(
			"Contingency",
			dt << Contingency(
				Y( :age ),
				X( :sex ),
				Contingency Table,
				SendToReport(
					Dispatch( {}, "Contingency Table", OutlineBox, {Close( 1 )} ),
					Dispatch( {}, "Tests", OutlineBox, {Close( 1 )} )
				)
			),
			<<Moveable( 1 ),
			<<Closeable( 1 ),
			<<Icon( "Conting" ),
			<<Set Close( Function( {this}, Print( "tab closed" ) ) ),
			<<Set Close Tip( "Close Contingency" )
		),
		<<Dockable( 1 )
	)
);
tp1 << Closeable( 0 );
Close( dt, "nosave" );
win = New Window( "Example",
	Tab Box( "First Tab", Text Box( "Text One" ), "Second Tab", Button Box( "Press Two" ), "Third Tab", Number Edit Box( 3 ) )
);
win << Save Journal( "$temp/jrn1.jrn" );
```

**Code Explanation**:

1. Open data table;
2. Create new window "dock close".
3. Add horizontal splitter box.
4. Create tab page "Logistic".
5. Fit logistic model with age and weight.
6. Close "Whole Model Test" and "Parameter Estimates".
7. Make tab moveable and closeable.
8. Set icon and close function for "Logistic".
9. Create tab page "Contingency".
10. Fit contingency model with age and sex.
11. Close "Contingency Table" and "Tests".
12. Make tab moveable and closeable.
13. Set icon and close function for "Contingency".
14. Make window dockable.
15. Disable close for "Logistic" tab.
16. Close data table without saving.
17. Create new window "Example".
18. Add tab box with three tabs.
19. Save journal to $temp/jrn1.jrn.



### Example 5
> **Summary**: Creates a dockable window with two tabs, one for logistic regression and another for contingency analysis, using JMP Scripting Language (JSL) to fit models and generate reports.

<!-- Keywords: #JMPScriptingLanguage, #DockableWindow, #LogisticRegression, #ContingencyAnalysis, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
New Window( "dock close",
	H Splitter Box(
		Size( 600, 300 ),
		tp1 = Tab Page Box(
			"Logistic",
			dt << Logistic(
				Y( :age ),
				X( :weight ),
				SendToReport(
					Dispatch( {}, "Whole Model Test", OutlineBox, {Close( 1 )} ),
					Dispatch( {}, "Parameter Estimates", OutlineBox, {Close( 1 )} )
				)
			),
			<<Moveable( 1 ),
			<<Closeable( 1 ),
			<<Icon( "Logistic" ),
			<<Set Close( Function( {this}, Print( "tab closed" ) ) )
		),
		tp2 = Tab Page Box(
			"Contingency",
			dt << Contingency(
				Y( :age ),
				X( :sex ),
				Contingency Table,
				SendToReport(
					Dispatch( {}, "Contingency Table", OutlineBox, {Close( 1 )} ),
					Dispatch( {}, "Tests", OutlineBox, {Close( 1 )} )
				)
			),
			<<Moveable( 1 ),
			<<Closeable( 1 ),
			<<Icon( "Conting" ),
			<<Set Close( Function( {this}, Print( "tab closed" ) ) )
		),
		<<Dockable( 1 )
	)
);
tp1 << Icon( "$sample_images/pi.gif" );
tp1 << Icon( "Distrib" );
Close( dt, "nosave" );
New Window( "Example",
	tb = Tab Box(
		tp1 = Tab Page Box( "First Tab", Button Box( "Press One" ), ),
		tp2 = Tab Page Box( "Second Tab", Button Box( "Press Two" ), ),
		tp3 = Tab Page Box( "Third Tab", Button Box( "Press Three" ) )
	)
);
tp3 << Visibility( "Collapse" );
tb << Set Selected( 2 );
tb << Move Tab( 3, 1 );
tb << Move Tab( 2, 1 );
tb << Move Tab( 1, 3 );
tb << Move Tab( 2, 3 );
tb << Set Selected( 1 );
tb << Set Selected( 2 );
tp2 << Visibility( "Collapse" );
tb << close window;
win = New Window( "Example",
	Tab Box(
		t1 = Tab Page Box( "alpha", Panel Box( "panel", Text Box( "text" ) ) ),
		t2 = Tab Page Box( "beta", Button Box( "Press Me", Print( "Pressed." ) ) ), 
	)
);
t2 << Visibility( "Collapse" );
```

**Code Explanation**:

1. Open data table.
2. Create new dockable window.
3. Add horizontal splitter box.
4. Create logistic regression tab.
5. Fit logistic model.
6. Hide whole model test.
7. Hide parameter estimates.
8. Make tab movable.
9. Make tab closable.
10. Set tab icon.
11. Define close action.
12. Create contingency tab.
13. Fit contingency analysis.
14. Hide contingency table.
15. Hide tests.
16. Make tab movable.
17. Make tab closable.
18. Set tab icon.
19. Define close action.
20. Set splitter dockable.
21. Change logistic tab icon.
22. Change logistic tab icon again.
23. Close data table without saving.
24. Create new example window.
25. Add tab box.
26. Add first tab with button.
27. Add second tab with button.
28. Add third tab with button.
29. Collapse third tab.
30. Select second tab.
31. Move third tab to first position.
32. Move second tab to first position.
33. Move first tab to third position.
34. Move second tab to third position.
35. Select first tab.
36. Select second tab.
37. Collapse second tab.
38. Close example window.
39. Create new example window.
40. Add tab box.
41. Add alpha tab with panel and text.
42. Add beta tab with button.
43. Collapse beta tab.



## Contingency using Data Table
> **Summary**: Opens a data table, stacks columns, and performs contingency analysis to examine the relationship between characteristics and importance.

<!-- Keywords: #JMPScriptingLanguage, #DataTable, #StackColumns, #ContingencyAnalysis, #Importance -->

**Code**:
```jsl
// Stack Columns and Analyze
// Open data table
dt = Open("data_table.jmp");
// Stack Columns and Analyze
Data Table("data_table")
 << Stack(
	columns(
		:Grades, :Sports, :Looks, :Money
	),
	Source Label Column(
		"Characteristic"
	),
	Stacked Data Column( "Importance" ),
	Output Table( "Stacked Importance" )
);
Contingency(
	Y( :Characteristic ),
	X( :Importance ),
	Contingency Table(
		Count( 1 ),
		Total %( 0 ),
		Col %( 0 ),
		Row %( 0 ),
		Expected( 0 ),
		Deviation( 0 ),
		Cell Chi Square( 0 ),
		Col Cum( 0 ),
		Col Cum %( 0 ),
		Row Cum( 0 ),
		Row Cum %( 0 )
	)
);
```

**Code Explanation**:

1. Open table.
2. Stack columns.
3. Create stacked data table.
4. Perform contingency analysis.
5. Set Y variable.
6. Set X variable.
7. Configure contingency options.
8. Disable count display.
9. Disable percentage displays.
10. Display results.



## Contingency using Distribution
### Example 1
> **Summary**: Performs a distribution analysis with continuous and nominal variables, applying local data filters for age and recalculation on the weight column.

<!-- Keywords: #JSLScriptingLanguage, #DistributionAnalysis, #LocalDataFilter, #AutomaticRecalculation, #NominalVariable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Distribution(
	Automatic Recalc( 1 ),
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) ),
	Local Data Filter( Close Outline( 1 ), Add Filter( columns( :age ), Where( :age == {12, 13, 14} ) ) ), 
);
Contingency(
	Y( :age ),
	X( :sex ),
	Automatic Recalc( 1 ),
	Contingency Table,
	Local Data Filter(
		Close Outline( 1 ),
		Add Filter( columns( :age ), Where( :age == {12, 13, 14, 15} ), Display( :age, Size( 181, 102 ), List Display ) )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create distribution analysis.
3. Set automatic recalculation on.
4. Analyze weight column continuously.
5. Analyze age column nominally.
6. Add local data filter for age.
7. Filter age to 12, 13, 14.
8. Create contingency analysis.
9. Set Y as age.
10. Set X as sex.



### Example 2
> **Summary**: Analyze nominal and continuous variables in a data table, creating distributions for 'sex', 'marital status', 'age', 'country', 'size', and 'type', as well as a contingency table for 'size' vs 'marital status'.

<!-- Keywords: #JSL, #Distribution, #ContingencyTable, #DataAnalysis, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Distribution(
	Automatic Recalc( 1 ),
	Nominal Distribution( Column( :sex ) ),
	Nominal Distribution( Column( :marital status ) ),
	Continuous Distribution( Column( :age ) ),
	Nominal Distribution( Column( :country ) ),
	Nominal Distribution( Column( :size ) ),
	Nominal Distribution( Column( :type ) ), 
);
obj = Contingency( Y( :size ), X( :marital status ) );
```

**Code Explanation**:

1. Open data table;
2. Create distribution object.
3. Set automatic recalculation.
4. Analyze "sex" as nominal.
5. Analyze "marital status" as nominal.
6. Analyze "age" as continuous.
7. Analyze "country" as nominal.
8. Analyze "size" as nominal.
9. Analyze "type" as nominal.
10. Create contingency table for "size" vs "marital status".



### Example 3
> **Summary**: Analyze nominal and continuous columns in a data table, including contingency tables and distribution plots, using JMP's Distribution and Column Switcher features.

<!-- Keywords: #JMPScriptingLanguage, #DataAnalysis, #ColumnSwitcher, #DistributionPlot, #ContingencyTable -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = dt under test << Distribution(
	Automatic Recalc( 1 ),
	Nominal Distribution( Column( :sex ) ),
	Nominal Distribution( Column( :marital status ) ),
	Continuous Distribution( Column( :age ) ),
	Nominal Distribution( Column( :country ) ),
	Nominal Distribution( Column( :size ) ),
	Nominal Distribution( Column( :type ) ), 
);
obj = Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status, :size, :type, :age} );
```

**Code Explanation**:

1. Open data table;
2. Create distribution analysis.
3. Set automatic recalculation.
4. Analyze nominal column "sex".
5. Analyze nominal column "marital status".
6. Analyze continuous column "age".
7. Analyze nominal column "country".
8. Analyze nominal column "size".
9. Analyze nominal column "type".
10. Create contingency analysis for "size" vs. "marital status".



### Example 4
> **Summary**: Analyze a data table by creating a distribution object, enabling automatic recalculation, and applying nominal and continuous distributions to various columns. It also generates a contingency table for 'size' vs 'marital status' with a column switcher.

<!-- Keywords: #JSL, #DistributionObject, #ColumnSwitcher, #ContingencyTable, #DataAnalysis -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = dt under test << Distribution(
	Automatic Recalc( 1 ),
	Nominal Distribution( Column( :sex ) ),
	Nominal Distribution( Column( :marital status ) ),
	Continuous Distribution( Column( :age ) ),
	Nominal Distribution( Column( :country ) ),
	Nominal Distribution( Column( :size ) ),
	Nominal Distribution( Column( :type ) ), 
);
obj = Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status, :type, :age} );
```

**Code Explanation**:

1. Open data table.
2. Create distribution object.
3. Enable automatic recalculation.
4. Analyze nominal 'sex' column.
5. Analyze nominal 'marital status' column.
6. Analyze continuous 'age' column.
7. Analyze nominal 'country' column.
8. Analyze nominal 'size' column.
9. Analyze nominal 'type' column.
10. Create contingency table for 'size' vs 'marital status'.
11. Add column switcher to contingency table.



## Contingency using Graph Builder
### Example 1
> **Summary**: Creates two variability charts with nested factors using Graph Builder, displaying standard deviation charts and performing chi-square tests.

<!-- Keywords: #GraphBuilder, #VariabilityChart, #NestedFactors, #ChiSquareTest, #JSLScriptingLanguage -->

**Code**:
```jsl
Open("data_table.jmp");
Graph Builder(
	Size( 534, 448 ),
	Show Control Panel( 0 ),
	Variables( X( :sex ), Y( :age ) ),
	Elements( Mosaic( X, Y, Legend( 4 ), Name( "Chi-square Test" )(1) ) )
);
Contingency( Y( :age ), X( :sex ), Contingency Table );
Graph Builder(
	Size( 534, 448 ),
	Show Control Panel( 0 ),
	Variables( X( :age ), Y( :height ) ),
	Elements( Mosaic( X, Y, Legend( 4 ), Name( "Chi-square Test" )(1) ) )
);
```

**Code Explanation**:

1. Open data table;
2. Launch Graph Builder.
3. Set graph size.
4. Hide control panel.
5. Assign variables to axes.
6. Add mosaic element.
7. Perform chi-square test.
8. Create contingency table.
9. Launch another Graph Builder.
10. Set new graph size.



### Example 2
> **Summary**: Creates a mosaic plot to visualize the relationship between country and size, utilizing Graph Builder and performing contingency analysis.

<!-- Keywords: #GraphBuilder, #MosaicPlot, #ContingencyAnalysis, #JMPScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
Open("data_table.jmp");
gb = Graph Builder(
	Size( 534, 448 ),
	Show Control Panel( 0 ),
	Variables( X( :country ), Y( :size ) ),
	Elements( Mosaic( X, Y, Legend( 4 ), Name( "Chi-square Test" )(1) ) )
);
contingency_analysis = Contingency( Y( :Size ), X( :country ), Contingency Table );
```

**Code Explanation**:

1. Open data table;
2. Create new Graph Builder object.
3. Set window size to 534x448.
4. Hide control panel.
5. Assign X variable: country.
6. Assign Y variable: size.
7. Add Mosaic element to graph.
8. Enable Chi-square test in legend.
9. Perform contingency analysis on Size vs country.
10. Display contingency table.



### Example 3
> **Summary**: Creates a mosaic chart with nested factors using Graph Builder, enabling chi-square test and contingency analysis.

<!-- Keywords: #GraphBuilder, #MosaicChart, #ChiSquareTest, #ContingencyAnalysis, #NestedFactors -->

**Code**:
```jsl
dt = Open("data_table.jmp");
gb = Graph Builder(
	Size( 534, 448 ),
	Show Control Panel( 0 ),
	Variables( X( :country ), Y( :size ) ),
	Elements( Mosaic( X, Y, Legend( 4 ), Name( "Chi-square Test" )(1) ) )
);
contingency_analysis = Contingency( Y( :Size ), X( :country ), Contingency Table );
```

**Code Explanation**:

1. Open data table;
2. Create Graph Builder object.
3. Set graph size.
4. Hide control panel.
5. Assign X and Y variables.
6. Add mosaic element.
7. Enable chi-square test.
8. Perform contingency analysis.
9. Set Y variable for analysis.
10. Set X variable for analysis.



## Contingency using For Each
> **Summary**: Creates and configures contingency analyses for multiple samples, utilizing the Contingency platform in JMP.

<!-- Keywords: #JMPScriptingLanguage, #ContingencyAnalysis, #DataTable, #PresetSamples, #ReportTitle -->

**Code**:
```jsl
plat_samples = ["Contingency" => {"ANOM for Proportions", "Simple Publication Mosaic"}, => {}];
dt = Open("data_table.jmp");
For Each( {sample}, plat_samples["Contingency"],
	obj = dt << Contingency( Y( :Age ), X( :sex ) );
	Eval( Eval Expr( obj << Apply Preset( "Sample Presets", Expr( sample ) ) ) );
	obj << Set Report Title( sample );
);
```

**Code Explanation**:

1. Define preset samples.
2. Open data table.
3. Loop through each sample.
4. Create contingency analysis.
5. Apply preset to analysis.
6. Set report title to sample name.
7. Repeat for all samples.



## Contingency using Fit Group
### Example 1
> **Summary**: Creates contingency analysis for Type and Model, as well as Type and Country, with correspondence analysis, measures of association, Fisher's exact test, and Cochran Mantel Haenszel test.

<!-- Keywords: #ContingencyAnalysis, #CorrespondenceAnalysis, #MeasuresOfAssociation, #FisherExactTest, #CochranMantelHaenszel -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Fit Group(
	Contingency(
		Y( :Type ),
		X( :Model ),
		Contingency Table(
			Count( 1 ),
			Total %( 1 ),
			Col %( 1 ),
			Row %( 1 ),
			Expected( 0 ),
			Deviation( 0 ),
			Cell Chi Square( 0 ),
			Col Cum( 0 ),
			Col Cum %( 0 ),
			Row Cum( 0 ),
			Row Cum %( 0 )
		),
		Correspondence Analysis( 1 )
	),
	Contingency(
		Y( :Type ),
		X( :Country ),
		Contingency Table(
			Count( 1 ),
			Total %( 1 ),
			Col %( 1 ),
			Row %( 1 ),
			Expected( 0 ),
			Deviation( 0 ),
			Cell Chi Square( 0 ),
			Col Cum( 0 ),
			Col Cum %( 0 ),
			Row Cum( 0 ),
			Row Cum %( 0 )
		),
		Correspondence Analysis( 1 ),
		Measures of Association( 1 ),
		Fisher's Exact Test( 1 ),
		Cochran Mantel Haenszel( :Weight )
	),
	<<{Arrange in Rows( 2 )},
	SendToReport( Dispatch( {"Contingency Analysis of Type By Model", "Correspondence
Analysis"}, "Details", OutlineBox, {Close( 0 )} ) )
);
```

**Code Explanation**:

1. Open data table.
2. Create contingency analysis for Type and Model.
3. Configure contingency table settings.
4. Enable correspondence analysis.
5. Create second contingency analysis for Type and Country.
6. Configure second contingency table settings.
7. Enable correspondence analysis.
8. Enable measures of association.
9. Enable Fisher's exact test.
10. Enable Cochran Mantel Haenszel test with Weight.



### Example 2
> **Summary**: Analyze contingency tables for Type and Model, as well as Type and Country, with correspondence analysis, measures of association, and Cochran-Mantel-Haenszel test, and arranges reports in rows.

<!-- Keywords: #ContingencyAnalysis, #CorrespondenceAnalysis, #MeasuresOfAssociation, #CochranMantelHaenszel, #JMPScripting -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Fit Group(
	Contingency(
		Y( :Type ),
		X( :Model ),
		Contingency Table(
			Count( 1 ),
			Total %( 1 ),
			Col %( 1 ),
			Row %( 1 ),
			Expected( 0 ),
			Deviation( 0 ),
			Cell Chi Square( 0 ),
			Col Cum( 0 ),
			Col Cum %( 0 ),
			Row Cum( 0 ),
			Row Cum %( 0 )
		),
		Correspondence Analysis( 1 )
	),
	Contingency(
		Y( :Type ),
		X( :Country ),
		Contingency Table(
			Count( 1 ),
			Total %( 1 ),
			Col %( 1 ),
			Row %( 1 ),
			Expected( 0 ),
			Deviation( 0 ),
			Cell Chi Square( 0 ),
			Col Cum( 0 ),
			Col Cum %( 0 ),
			Row Cum( 0 ),
			Row Cum %( 0 )
		),
		Correspondence Analysis( 1 ),
		Measures of Association( 1 ),
		Cochran Mantel Haenszel( :Weight )
	),
	<<{Arrange in Rows( 2 )},
	SendToReport( Dispatch( {"Contingency Analysis of Type By Model", "Correspondence Analysis"}, "Details", OutlineBox, {Close( 0 )} ) )
);
```

**Code Explanation**:

1. Open data table.
2. Fit contingency analysis on Type and Model.
3. Configure contingency table options.
4. Enable correspondence analysis.
5. Fit another contingency analysis on Type and Country.
6. Configure contingency table options.
7. Enable correspondence analysis.
8. Enable measures of association.
9. Enable Cochran-Mantel-Haenszel test.
10. Arrange reports in rows.



## Contingency using If
> **Summary**: Creates and configures a contingency table with automatic recalculation, utilizing JMP scripting language.

<!-- Keywords: #JMPScriptingLanguage, #ContingencyTable, #AutomaticRecalculation, #DataAnalysis, #Scripting -->

**Code**:
```jsl
If( JMP Version() >= " 8.0.2",
	dt = Open("data_table.jmp");
	ct = Contingency( Y( sex ), X( age ) );
	ct << Automatic Recalc( 1 );
	s = ct << Get Script;
	arflag = 0;
	For( i = 1, i <= N Arg( s ) & !arflag, i++,
		arflag = Arg( s, i ) == Expr( Automatic Recalc( 1 ) )
	);
	Close( dt, No Save );
);
```

**Code Explanation**:

1. Check JMP version.
2. Open data table;
3. Create contingency table.
4. Enable automatic recalculation.
5. Retrieve script from table.
6. Initialize flag variable.
7. Loop through script arguments.
8. Check for "Automatic Recalc".
9. Set flag if found.
10. Close table without saving.



## Contingency using Select Where
> **Summary**: Selects and analyzes a subset of data based on size criteria, generating a contingency table with relative risk calculations for sex by size.

<!-- Keywords: #JSLScriptingLanguage, #ContingencyAnalysis, #DataSelection, #RelativeRisk, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Where( :size == "Small" | :size == "Medium" );
dtsub1 = dt << Subset( Selected Rows );
cont1 = dtsub1 << Contingency(
	Y( :sex ),
	X( :size ),
	Contingency Table( 0 ),
	Mosaic Plot( 0 ),
	Tests( 0 ),
	Relative Risk( 1, "Male", "Medium" ),
	Risk Difference( 1 ),
	Odds Ratio( 1 )
);
```

**Code Explanation**:

1. Open data table;
2. Select rows where size is Small or Medium.
3. Create subset of selected rows.
4. Run Contingency analysis.
5. Set Y variable to sex.
6. Set X variable to size.
7. Disable Contingency Table.
8. Disable Mosaic Plot.
9. Disable Tests.
10. Calculate Relative Risk for Male/Medium.



## Contingency using Set Property
### Example 1
> **Summary**: Runs a response screening analysis to identify significant associations between 'I am working on my career' and 'Gender', generating a 2x2 contingency table, matrix, and report with relative risk, risk difference, and odds ratio calculations.

<!-- Keywords: #JSL, #ResponseScreening, #ContingencyAnalysis, #RelativeRisk, #RiskDifference -->

**Code**:
```jsl
dt = Open("data_table.jmp");
:I am working on my career << Set Property( "Target Level", "Agree" );
obj1 = dt << Response Screening(
	Y( :I am working on my career ),
	X( :Gender ),
	PValues Table on Launch( 0 ),
	SendToReport(
		Dispatch( {}, "Rel Risk Label", StringColBox, {Visibility( "Visible" )} ),
		Dispatch( {}, "Risk Diff Label", StringColBox, {Visibility( "Visible" )} )
	)
);
dt2 = obj1 << Save 2 by M;
mat1 = dt2 << get as matrix;
obj2 = dt << Contingency( Y( :I am working on my career ), X( :Gender ), Contingency Table( 0 ), Mosaic Plot( 0 ), Tests( 0 ), );
With Window Handler( obj2 << Relative Risk( 1 ), Function( {dlg}, {}, dlg[Button Box( If( Host is( "Windows" ), 1, 3 ) )] << Click ) );
obj2 << Risk Difference( 1 );
obj2 << Odds Ratio( 1 );
rpt2 = Report( obj2 );
```

**Code Explanation**:

1. Open data table.
2. Set target level for variable.
3. Launch response screening analysis.
4. Hide p-values table.
5. Show relative risk label.
6. Show risk difference label.
7. Save 2x2 contingency table.
8. Convert table to matrix.
9. Launch contingency analysis.
10. Calculate relative risk.
11. Calculate risk difference.
12. Calculate odds ratio.
13. Retrieve report object.



### Example 2
> **Summary**: Runs response screening and contingency analysis to visualize the relationship between 'I am working on my career' and gender, with interactive risk difference and relative risk labels.

<!-- Keywords: #JSLScriptingLanguage, #ResponseScreening, #ContingencyAnalysis, #RiskDifference, #RelativeRisk -->

**Code**:
```jsl
dt = Open("data_table.jmp");
:Gender << Set Property( "Control Level", "M" );
obj1 = dt << Response Screening(
	Y( :I am working on my career ),
	X( :Gender ),
	PValues Table on Launch( 0 ),
	SendToReport(
		Dispatch( {}, "Rel Risk Label", StringColBox, {Visibility( "Visible" )} ),
		Dispatch( {}, "Risk Diff Label", StringColBox, {Visibility( "Visible" )} )
	)
);
dt2 = obj1 << Save 2 by M;
mat1 = dt2 << get as matrix;
obj2 = dt << Contingency( Y( :I am working on my career ), X( :Gender ), Contingency Table( 0 ), Mosaic Plot( 0 ), Tests( 0 ), );
With Window Handler( obj2 << Relative Risk( 1 ), Function( {dlg}, {}, dlg[Button Box( If( Host is( "Windows" ), 1, 3 ) )] << Click ) );
obj2 << Risk Difference( 1 );
obj2 << Odds Ratio( 1 );
rpt2 = Report( obj2 );
```

**Code Explanation**:

1. Open data table.
2. Set gender control level.
3. Perform response screening.
4. Hide P-values table.
5. Show relative risk label.
6. Show risk difference label.
7. Save contingency table.
8. Convert table to matrix.
9. Create contingency analysis.
10. Calculate relative risk.



### Example 3
> **Summary**: Runs a response screening analysis to identify significant relationships between 'I am working on my career' and 'Gender', with the option to save the 2x2 contingency table and visualize relative risk, risk difference, and odds ratio.

<!-- Keywords: #JSL, #ResponseScreening, #ContingencyAnalysis, #RelativeRisk, #RiskDifference -->

**Code**:
```jsl
dt = Open("data_table.jmp");
:I am working on my career << Set Property( "Target Level", "Agree" );
:Gender << Set Property( "Control Level", "M" );
obj1 = dt << Response Screening(
	Y( :I am working on my career ),
	X( :Gender ),
	PValues Table on Launch( 0 ),
	SendToReport(
		Dispatch( {}, "Rel Risk Label", StringColBox, {Visibility( "Visible" )} ),
		Dispatch( {}, "Risk Diff Label", StringColBox, {Visibility( "Visible" )} )
	)
);
dt2 = obj1 << Save 2 by M;
mat1 = dt2 << get as matrix;
obj2 = dt << Contingency(
	Y( :I am working on my career ),
	X( :Gender ),
	Contingency Table( 0 ),
	Mosaic Plot( 0 ),
	Tests( 0 ),
	Relative Risk( 1 ),
	Risk Difference( 1 ),
	Odds Ratio( 1 )
);
rpt2 = Report( obj2 );
```

**Code Explanation**:

1. Open data table.
2. Set target level for career question.
3. Set control level for gender.
4. Perform response screening analysis.
5. Hide p-values table.
6. Show relative risk label.
7. Show risk difference label.
8. Save 2x2 contingency table.
9. Convert table to matrix.
10. Perform contingency analysis.



## Contingency using Expr
> **Summary**: Creates and analyzes contingency tables for various categorical variables, including sex, marital status, country, and size, using Fisher's Exact Test and Cochran Armitage Trend Test.

<!-- Keywords: #JSLScripting, #ContingencyTables, #Fisher'sExactTest, #CochranArmitageTrendTest, #DataAnalysis -->

**Code**:
```jsl
car = Open("data_table.jmp");
fet1 = Expr(
	ct << Fisher's Exact Test( 1 );
	ct << close window;
	Delete Symbols( ct, exout );
);
fet2 = Expr(
	ct << Fisher's Exact Test( 1 );
	If( isPro, ct << Tests( 0 ) );
	ct << Tests( 1 );
	ct << Tests( 0 );
	ct << close window;
	Delete Symbols( ct, exout, scr );
);
ct = Contingency( Y( :sex ), X( :marital status ), Mosaic Plot( 0 ), Contingency Table( 0 ), Tests( 1 ) );
ct = Contingency( Y( :sex ), X( :marital status ), Mosaic Plot( 0 ), Contingency Table( 0 ), Tests( 0 ) );
ct = Contingency( Y( :sex ), X( :country ), Mosaic Plot( 0 ), Contingency Table( 0 ), Tests( 1 ) );
ct = Contingency( Y( :sex ), X( :country ), Mosaic Plot( 0 ), Contingency Table( 0 ), Tests( 0 ) );
ct = Contingency( Y( :size ), X( :sex ), Mosaic Plot( 0 ), Contingency Table( 0 ), Tests( 1 ) );
ct = Contingency( Y( :size ), X( :sex ), Mosaic Plot( 0 ), Contingency Table( 0 ), Tests( 0 ) );
ct = Contingency( Y( :country ), X( :type ), Mosaic Plot( 0 ), Contingency Table( 0 ), Tests( 1 ) );
ct = Contingency( Y( :country ), X( :type ), Mosaic Plot( 0 ), Contingency Table( 0 ), Tests( 0 ) );
SAS_ZStat = -0.5024;
SAS_ZStatExact = 0.3302;
ct = Contingency( Y( :sex ), X( :country ), Mosaic Plot( 0 ), Contingency Table( 0 ) );
ct << Exact Cochran Armitage Trend Test( 1 );
rpt = Report( ct );
asymz = (rpt[Outline Box( "Cochran Armitage Trend Test" )][Number Col Box( 1 )] << get)[1];
exactz = (rpt[Outline Box( "Cochran Armitage Trend Test" )][Number Col Box( 4 )] << get)[1];
isPro = 1;
If( isPro,
	ct << Cochran Armitage Trend Test( 0 )
);
ct << close window;
Delete Symbols( ct, scr );
```

**Code Explanation**:

1. Open data table;
2. Define `fet1` expression.
3. Define `fet2` expression.
4. Create contingency table for sex vs marital status.
5. Create contingency table for sex vs marital status without tests.
6. Create contingency table for sex vs country.
7. Create contingency table for sex vs country without tests.
8. Create contingency table for size vs sex.
9. Create contingency table for size vs sex without tests.
10. Create contingency table for country vs type.




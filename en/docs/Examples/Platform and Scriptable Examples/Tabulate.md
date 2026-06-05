# Tabulate

### Example 1
> **Summary**: Generates a tabulate summary of premium and claim USD data, grouped by branch and zone, with statistics for each column.

<!-- Keywords: #JMPScriptingLanguage, #TabulateSummary, #DataAnalysis, #GroupingColumns, #Statistics -->

**Code**:
```jsl
// Tabulate (Summary)
// Open data table
dt = Open("data_table.jmp");
// Tabulate (Summary)
Tabulate(
	Set Format(
		Sum(
			Premium USD( 15, 95 ),
			Claim USD( 15, 95 )
		)
	),
	Add Table(
		Column Table(
			Analysis Columns(
				:Premium USD
			),
			Statistics( N, Sum )
		),
		Column Table(
			Analysis Columns(
				:Claim USD
			),
			Statistics( N, Sum )
		),
		Row Table(
			Grouping Columns(
				:Branch, :Zone
			)
		)
	)
);
```

**Code Explanation**:

1. Open table.
2. Create tabulate summary.
3. Set format for summary.
4. Add premium USD column table.
5. Include premium USD statistics.
6. Add claim USD column table.
7. Include claim USD statistics.
8. Add row table.
9. Set grouping columns.
10. Display tabulate summary.



### Example 2
> **Summary**: Opens a data table, creates a tabulation with a column table and row table, and calculates the mean of the 'Baseline' column for each group in the 'Testers' column.

<!-- Keywords: #JMPScriptingLanguage, #Tabulate, #ColumnTable, #RowTable, #MeanStatistic -->

**Code**:
```jsl
// Tabulate
// Open data table
dt = Open("data_table.jmp");
// Tabulate
Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table(
			Analysis Columns( :Baseline ),
			Statistics( Mean )
		),
		Row Table(
			Grouping Columns( :Testers )
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create tabulation.
3. Hide control panel.
4. Add column table.
5. Select baseline column.
6. Calculate mean statistic.
7. Add row table.
8. Group by testers.



### Example 3
> **Summary**: Generates a tabulate report with mean and standard deviation statistics for the 'X' and 'Y' columns, grouped by 'Ship event' and 'Lot'.

<!-- Keywords: #JMPScriptingLanguage, #TabulateReport, #Statistics, #Grouping, #DataAnalysis -->

**Code**:
```jsl
// Tabulate
// Open data table
dt = Open("data_table.jmp");
// Tabulate
Tabulate(
	Add Table(
		Column Table(
			Analysis Columns( :X, :Y ),
			Statistics( Mean, Std Dev )
		),
		Row Table(
			Grouping Columns(
				:Ship event, :Lot
			)
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create tabulate report.
3. Add table to report.
4. Define column table.
5. Specify analysis columns.
6. Choose statistics: mean, standard deviation.
7. Define row table.
8. Set grouping columns.
9. Group by ship event.
10. Group by lot.



### Example 4
> **Summary**: Opens a data table, hides the control panel, and creates a tabulate object with two row tables grouped by 'surface quality' and 'color'.

<!-- Keywords: #JMPScriptingLanguage, #Tabulate, #DataTable, #GroupingColumns, #RowTables -->

**Code**:
```jsl
// Tabulate 2
// Open data table
dt = Open("data_table.jmp");
// Tabulate 2
Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Row Table(
			Grouping Columns(
				:surface quality
			)
		),
		Row Table(
			Grouping Columns( :color )
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create tabulate object.
3. Hide control panel.
4. Add first row table.
5. Set grouping column.
6. Add second row table.
7. Set grouping column.



### Example 5
> **Summary**: Opens a data table, creates a tabulate report with grouping columns for color and surface quality, and hides the control panel.

<!-- Keywords: #JMPScriptingLanguage, #TabulateReport, #GroupingColumns, #DataTable, #ControlPanel -->

**Code**:
```jsl
// Tabulate 3
// Open data table
dt = Open("data_table.jmp");
// Tabulate 3
Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table(
			Grouping Columns( :color )
		),
		Row Table(
			Grouping Columns(
				:surface quality
			)
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create tabulate report.
3. Hide control panel.
4. Add column table.
5. Set grouping column to color.
6. Add row table.
7. Set grouping column to surface quality.



### Example 6
> **Summary**: Creates a tabulate object to visualize and analyze body mass, flipper length, and species data, with interactive features for grouping by sex and species.

<!-- Keywords: #JSLScriptingLanguage, #TabulateObject, #InteractiveAnalysis, #DataVisualization, #JMP -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", Invisible );
obj = dt << Tabulate(
	Show Chart( 1 ),
	Uniform plot scale( 0 ),
	Add Table(
		Column Table( Analysis Columns( :Body Mass ), Grouping Columns( :Sex ) ),
		Column Table( Analysis Columns( :Flipper Length ), Statistics( Mean ) ),
		Row Table( Grouping Columns( :Species ) )
	)
);
rpt = Report( obj );
```

**Code Explanation**:

1. Open data table;
2. Create tabulate object.
3. Show chart in tabulate.
4. Set uniform plot scale.
5. Add column table for body mass.
6. Group body mass by sex.
7. Add column table for flipper length.
8. Calculate mean of flipper length.
9. Add row table for species.
10. Group species in row table.



### Example 7
> **Summary**: Creates a tabulation object with column and row grouping, displaying the results in a journal window.

<!-- Keywords: #JSLScriptingLanguage, #Tabulate, #JournalWindow, #ColumnGrouping, #RowGrouping -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << select where( :size == "Large" );
obj = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table( Column Table( Grouping Columns( :sex, :marital status ) ), Row Table( Grouping Columns( :country, :size ) ) )
);
obj << journal window();
```

**Code Explanation**:

1. Open data table.
2. Select rows where size is Large.
3. Create tabulation object.
4. Hide control panel.
5. Add column table with sex and marital status.
6. Add row table with country and size.
7. Display tabulation in journal window.



### Example 8
> **Summary**: Creates a tabulate object with grouped columns and rows, displaying the results in a journal window.

<!-- Keywords: #JSLScriptingLanguage, #TabulateObject, #JournalWindow, #DataSelection, #GroupingColumns -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
dt << select where( :size == "Large" );
obj = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table( Column Table( Grouping Columns( :sex, :marital status ) ), Row Table( Grouping Columns( :country, :size ) ) )
);
obj << journal window();
dt << close window();
```

**Code Explanation**:

1. Set default names.
2. Open data table.
3. Select rows where size is "Large".
4. Create tabulate object.
5. Hide control panel.
6. Add column table with sex and marital status.
7. Add row table with country and size.
8. Display tabulate in journal window.
9. Close data table window.



### Example 9
> **Summary**: Creates a tabulation object with customized item labels, column and row tables, and a report title, based on grouping columns and analysis columns.

<!-- Keywords: #JSLScriptingLanguage, #Tabulate, #DataAnalysis, #ReportGeneration, #Customization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Tab2 = dt << Tabulate(
	Order by count of grouping columns,
	Change Item Label( Statistics( "% of Total"n, "% of Age" ) ),
	Remove Column Label( Grouping Columns( :sex, :marital status ), Analysis Columns( age ) ),
	Order By Count( Grouping Columns( :sex, :size ), 0 ),
	Show Control Panel( 0 ),
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ), Analysis Columns( :age ), Statistics( "% of Total"n ) ),
		Row Table( Grouping Columns( :country, :size ) )
	),
	SendToReport(
		Dispatch( {}, "Tabulate", OutlineBox, {Set Title( "Tabulate - order by count for grouping cols, NOT :size and :sex" )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create tabulation object.
3. Order by count of groups.
4. Change item label to percentages.
5. Remove column labels for specific columns.
6. Order by count for selected groups.
7. Hide control panel.
8. Add column table with statistics.
9. Add row table with grouping.
10. Set report title.



### Example 10
> **Summary**: Creates a tabulated data visualization to analyze age distribution by type, country, size, and sex, utilizing the Tabulate function in JMP.

<!-- Keywords: #JMPScriptingLanguage, #TabulateFunction, #DataVisualization, #StatisticalAnalysis, #DataTable -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Tabulate(
	Show Control Panel( 0 ),
	Set Format( N( 9, -1 ) ),
	Add Table(
		Column Table( Analysis Columns( :age ), Statistics( Mean, Std Dev ) ),
		Column Table( Grouping Columns( :type ) ),
		Row Table( Grouping Columns( :country, :size ) ),
		Row Table( Grouping Columns( :sex ) )
	)
);
```

**Code Explanation**:

1. Open data_table data
2. Create tabulate object.
3. Hide control panel.
4. Set number format.
5. Add column table.
6. Analyze age: mean, std dev.
7. Group by type.
8. Add row table.
9. Group by country, size.
10. Add row table. Group by sex.



### Example 11
> **Summary**: Creates a tabulated report with summary statistics for 'age' by 'country', utilizing Column Table and Row Table features in JMP.

<!-- Keywords: #JMP, #Tabulate, #ColumnTable, #RowTable, #Statistics -->

**Code**:
```jsl
dt = Open( "data_table.jmp", "invisible" );
dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table(
			Analysis Columns( :age ),
			Statistics( Range, Sum, Min, Max ),
			Pack( Statistics( Min, Max ) ),
			Pack( Statistics( Range, Sum ) )
		),
		Row Table( Grouping Columns( :country ) )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Hide the control panel.
3. Add a table.
4. Define column table.
5. Set analysis columns.
6. Choose statistics: Range, Sum, Min, Max.
7. Pack Min and Max statistics.
8. Pack Range and Sum statistics.
9. Define row table.
10. Set grouping columns.



### Example 12
> **Summary**: Creates a tabulated data visualization to summarize engine size and maximum horsepower for each manufacturer and model, utilizing the Tabulate platform in JMP.

<!-- Keywords: #JMP, #Tabulate, #DataVisualization, #SummaryStatistics, #Scripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
tab = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table(
			Statistics( Sum ),
			Analysis Columns( :"Engine Size (liters)"n, :Maximum Horsepower ),
			Pack( Analysis Columns( "Engine Size (liters)"n, Maximum Horsepower ) )
		),
		Row Table( Grouping Columns( :Manufacturer, :Model ), Stack Grouping Columns( 1 ) )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create tabulate object.
3. Hide control panel.
4. Add column table.
5. Set statistics to sum.
6. Select analysis columns.
7. Pack analysis columns.
8. Add row table.
9. Group by manufacturer and model.
10. Stack grouping columns.



### Example 13
> **Summary**: Creates a tabulated report with analysis columns for OZONE, CO, SO2, NO, and PM10, using the Tabulate platform in JMP.

<!-- Keywords: #JMP, #Tabulate, #AnalysisColumns, #DataVisualization, #ReportGeneration -->

**Code**:
```jsl
dt = Open( "data_table.jmp", "private" );
tab = dt << Tabulate(
	Page Column( :State( "NC" ) ),
	Show Control Panel( 0 ),
	Add Table( Column Table( Analysis Columns( :OZONE, :CO, :SO2, :NO, :PM10 ) ) )
);
```

**Code Explanation**:

1. Open table.
2. Create tabulate object.
3. Set page column to NC.
4. Hide control panel.
5. Add table to tabulate.
6. Specify analysis columns.
7. Include OZONE column.
8. Include CO column.
9. Include SO2 column.
10. Include NO column.
11. Include PM10 column.



### Example 14
> **Summary**: Creates two tabulations in JMP, one for NC state and another for age 15, with specific column and row settings.

<!-- Keywords: #JMPScriptingLanguage, #Tabulate, #ColumnTable, #RowTable, #DataAnalysis -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", "private" );
tab = dt << Tabulate(
	Page Column( :State( "NC" ) ),
	Show Control Panel( 0 ),
	Add Table( Column Table( Analysis Columns( :OZONE, :CO, :SO2, :NO, :PM10 ) ) )
);
dt = Open( "$SAMPLE_DATA/data_table2.jmp", "private" );
tab2 = dt << Tabulate(
	Page Column( :age( 15 ) ),
	Show Control Panel( 0 ),
	Set Format( Name( "% of Total" )(9, 2) ),
	Add Table(
		Column Table( Analysis Columns( :height, :weight ) ),
		Column Table( Statistics( Name( "% of Total" ) ) ),
		Row Table( Grouping Columns( :sex ) )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create tabulation for NC state.
3. Hide control panel.
4. Add analysis columns: OZONE, CO, SO2, NO, PM10.
5. Open data table;
6. Create tabulation for age 15.
7. Hide control panel.
8. Set percentage format to 9, 2.
9. Add height and weight analysis columns.
10. Add percentage of total statistics.



### Example 15
> **Summary**: Creates a tabulation page with filtered data, hiding control panels and adding column tables for analysis.

<!-- Keywords: #JSLScriptingLanguage, #Tabulate, #ColumnTable, #AnalysisColumns, #PrivateData -->

**Code**:
```jsl
dt = Open( "$data_table.jmp", "private" );
tab = dt << Tabulate(
	Page Column( :State( "NC" ) ),
	Show Control Panel( 0 ),
	Add Table( Column Table( Analysis Columns( :OZONE, :CO, :SO2, :NO, :PM10 ) ) )
);
dt = Open( "data_table2.jmp", "private" );
```

**Code Explanation**:

1. Open data table;
2. Create tabulation page.
3. Filter State as NC.
4. Hide control panel.
5. Add column table analysis.
6. Include OZONE, CO, SO2, NO, PM10 columns.
7. Open data table;



### Example 16
> **Summary**: Creates a tabulate report with grouped columns and analysis, utilizing the Add Table and SendToReport functions in JMP.

<!-- Keywords: #JMPScriptingLanguage, #TabulateReport, #GroupedColumns, #Analysis, #SendToReport -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table( Grouping Columns( :sex ) ),
		Row Table( Grouping Columns( :age ), Analysis Columns( :height, :weight ), Statistics( Row % ) )
	),
	SendToReport(
		Dispatch( {}, "Tabulate", OutlineBox, {Set Title( "Tabulate - look for columns clearly separated & rows alternating colors" )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create tabulate object.
3. Hide control panel.
4. Add column table with grouping.
5. Add row table with grouping and analysis.
6. Set statistics to row percentage.
7. Send report to display.
8. Dispatch report settings.
9. Set title for tabulate.
10. Customize report appearance.



### Example 17
> **Summary**: Creates a tabulated data visualization with frequency distributions and weighted statistics for grouped columns, utilizing JMP's Tabulate platform.

<!-- Keywords: #JMPScriptingLanguage, #Tabulate, #FrequencyDistribution, #WeightedStatistics, #GroupedColumns -->

**Code**:
```jsl
dt = Open( "data_table.jmp", "Invisible" );
tab = dt << Tabulate( Add Table( Column Table( Grouping Columns( :age ) ) ) );
tab << Freq( :height );
tab << Freq();
tab << Weight( :height );
tab << ID( :Sex );
tab << Weight();
```

**Code Explanation**:

1. Open data table;
2. Create tabulate object.
3. Set age as grouping column.
4. Add height frequency.
5. Add default frequency.
6. Set height as weight column.
7. Set Sex as ID column.
8. Add default weight.



### Example 18
> **Summary**: Creates a tabulation table with frequency analysis and grouping by age, utilizing JMP's Tabulate platform.

<!-- Keywords: #JMP, #Tabulate, #FrequencyAnalysis, #Grouping, #DataVisualization -->

**Code**:
```jsl
dt = Open( "data_table.jmp", "Invisible" );
tab = dt << Tabulate( Add Table( Column Table( Grouping Columns( :age ) ) ) );
tab << Freq( :height );
tab << Freq();
tab << Weight( :height );
tab << ID( :Sex );
tab << Weight();
tab << ID();
```

**Code Explanation**:

1. Open data_table data
2. Create tabulation table.
3. Group by age.
4. Add height frequency.
5. Add overall frequency.
6. Set height as weight.
7. Add sex as identifier.
8. Set weight to default.
9. Add identifier to default.
10. Display tabulation.



### Example 19
> **Summary**: Runs the tabulation process to display a summary of Premium USD and Claim USD by Branch and Zone, utilizing Column Tables with Statistics for count and sum.

<!-- Keywords: #JSLScriptingLanguage, #Tabulate, #ColumnTable, #Statistics, #DataAnalysis -->

**Code**:
```jsl
Open("data_table.jmp");
Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table( Analysis Columns( :Premium USD ), Statistics( N, Sum ) ),
		Column Table( Analysis Columns( :Claim USD ), Statistics( N, Sum ) ),
		Row Table( Grouping Columns( :Branch, :Zone ) )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Initiate tabulation process.
3. Hide control panel.
4. Add table to tabulation.
5. Analyze Premium USD column.
6. Calculate count and sum.
7. Analyze Claim USD column.
8. Calculate count and sum.
9. Group rows by Branch and Zone.
10. Display tabulated results.



### Example 20
> **Summary**: Creates a tabulation with age, adding height and weight columns, and saving the script for future use.

<!-- Keywords: #JSLScriptingLanguage, #Tabulate, #ColumnTable, #AnalysisColumns, #DataVisualization -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", "private" );
tab = dt << Tabulate( Page Column( :age ), Show Control Panel( 0 ), Add Table( Column Table( Analysis Columns( :height, :weight ) ) ) );
saveScript = Char( tab << get script );
certScript = "Tabulate(Page Column(:age), Show Control Panel(0), Add Table(Column Table(Analysis Columns(:height, :weight))))";
tab << close window;
tabCP = dt << Tabulate( Page Column( :age ), Add Table( Column Table( Analysis Columns( :height, :weight ) ) ) );
saveScript2 = Char( tabCP << get script );
certScript2 = "Tabulate(Page Column(:age), Add Table(Column Table(Analysis Columns(:height, :weight))))";
```

**Code Explanation**:

1. Open data table;
2. Create tabulation with age.
3. Hide control panel.
4. Add height and weight columns.
5. Save tabulation script.
6. Define certified script.
7. Close tabulation window.
8. Recreate tabulation with age.
9. Save second tabulation script.
10. Define second certified script.



### Example 21
> **Summary**: Creates a tabulation report with filtered data for State 'NC', adding analysis columns and hiding the control panel.

<!-- Keywords: #JSLScriptingLanguage, #Tabulate, #ReportGeneration, #DataFiltering, #AnalysisColumns -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", "private" );
tab = dt << Tabulate(
	Page Column( :State( "NC" ) ),
	Show Control Panel( 0 ),
	Add Table( Column Table( Analysis Columns( :OZONE, :CO, :SO2, :NO, :PM10 ) ) )
);
rpt = tab << report;
```

**Code Explanation**:

1. Open data table;
2. Create a tabulation object.
3. Filter data for State NC.
4. Hide control panel.
5. Add analysis columns.
6. Generate report object.



### Example 22
> **Summary**: Creates a tabulate report with a custom format, grouping columns, and analysis statistics for a given data table.

<!-- Keywords: #JSL, #Tabulate, #DataVisualization, #CustomFormat, #GroupingColumns -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", "private" );
tab2 = dt << Tabulate(
	Page Column( :age( 15 ) ),
	Show Control Panel( 0 ),
	Set Format( Name( "% of Total" )(9, 2) ),
	Add Table(
		Column Table( Analysis Columns( :height, :weight ) ),
		Column Table( Statistics( Name( "% of Total" ) ) ),
		Row Table( Grouping Columns( :sex ) )
	)
);
rpt = tab2 << report;
```

**Code Explanation**:

1. Open data table.
2. Create new tabulate object.
3. Set page column to age 15.
4. Hide control panel.
5. Set format to percent of total.
6. Add table to tabulate.
7. Set analysis columns to height and weight.
8. Set statistics to percent of total.
9. Set grouping column to sex.
10. Generate report from tabulate.



### Example 23
> **Summary**: Creates two tabulations for the NC state, including OZONE, CO, SO2, NO, and PM10 columns, and extracts matrices from the resulting data tables.

<!-- Keywords: #JSLScripting, #Tabulation, #DataTable, #MatrixExtraction, #NCState -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", "private" );
tab1 = dt << Tabulate( Page Column( :State( "NC" ) ), Add Table( Column Table( Analysis Columns( :OZONE, :CO, :SO2, :NO, :PM10 ) ) ) );
tab1Dt = tab1 << Make into Data Table;
tab1Mat = tab1Dt << Get as Matrix;
tab2 = dt << Tabulate(
	Page Column( :State( "NC" ) ),
	Show Control Panel( 0 ),
	Add Table( Column Table( Analysis Columns( :OZONE, :CO, :SO2, :NO, :PM10 ) ) )
);
tab2Dt = tab2 << Make into Data Table;
tab2Mat = tab2Dt << Get as Matrix;
```

**Code Explanation**:

1. Open data table.
2. Create tabulation for NC state.
3. Include OZONE, CO, SO2, NO, PM10 columns.
4. Convert tabulation to data table.
5. Extract matrix from data table.
6. Create second tabulation for NC state.
7. Hide control panel.
8. Include OZONE, CO, SO2, NO, PM10 columns.
9. Convert second tabulation to data table.
10. Extract matrix from second data table.



### Example 24
> **Summary**: Filters and selects data in a table to display specific city and state combinations, utilizing Local Data Filter and Filter Column features.

<!-- Keywords: #JSLScriptingLanguage, #LocalDataFilter, #FilterColumn, #DataTable, #Tableau -->

**Code**:
```jsl
dt = Open("data_table.jmp");
tab = dt << Tabulate( Add Table( Column Table( Analysis Columns( :POP ) ) ) );
ldf = tab << Local Data Filter(
	Location( {62, 51} ),
	Add Filter(
		columns( :city, :State ),
		Display( :city, Size( 204, 170 ), List Display ),
		Display( :State, Size( 204, 170 ), List Display )
	)
);
ldf << (Filter Column( :state ) << Where( :state == "TX" ));
ldf << (Filter Column( :city ) << Where( :city == "ATLANTA" ));
ldf << (Filter Column( :city ) << Clear Selection);
ldf << (Filter Column( :state ) << Where( :state == "TX" ));
```

**Code Explanation**:

1. Open table.
2. Create tabulate.
3. Add table.
4. Add column table.
5. Add analysis columns.
6. Add local data filter.
7. Set filter location.
8. Add filter for city and state.
9. Set city display.
10. Set state display.



### Example 25
> **Summary**: Filters and tabulates data in a JMP script, specifically selecting rows with 'TX' state and 'ATLANTA' city, and displaying filtered columns.

<!-- Keywords: #JSLScriptingLanguage, #DataFiltering, #Tabulation, #JMP, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
tab = dt << Tabulate( Add Table( Column Table( Analysis Columns( :POP ) ) ) );
df = dt << Data Filter(
	Add Filter(
		columns( :city, :State ),
		Display( :city, Size( 204, 170 ), List Display ),
		Display( :State, Size( 204, 170 ), List Display )
	)
);
df << (Filter Column( :state ) << Where( :state == "TX" ));
df << (Filter Column( :city ) << Where( :city == "ATLANTA" ));
df << (Filter Column( :city ) << Clear Selection);
df << (Filter Column( :state ) << Where( :state == "TX" ));
```

**Code Explanation**:

1. Open data table;
2. Create tabulation for population column.
3. Add data filter to dataset.
4. Set filter for city and state columns.
5. Display filters with specified sizes.
6. Apply filter for state "TX".
7. Apply filter for city "ATLANTA".
8. Clear selection from city filter.
9. Reapply filter for state "TX".
10. End script execution.



### Example 26
> **Summary**: Creates a filtered data table with aggregated statistics for OZONE, grouped by Region, and limited to rows where State is 'MA'.

<!-- Keywords: #JSLScriptingLanguage, #DataFiltering, #AggregatedStatistics, #GroupBy, #DatatableManipulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Tabulate(
	show control panel( 0 ),
	Add Table( Column Table( Aggregate Statistics( :OZONE ) ), Row Table( Grouping Columns( :Region ) ) ),
	Local Data Filter(
		Add Filter( columns( :OZONE ), Where( :OZONE >= 0.1 & :OZONE <= 0.2 ) ),
		Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
	), 
);
dt << Select Where( :State == "MA" );
dt << Exclude();
dt1 = obj << Make Into Datatable;
```

**Code Explanation**:

1. Open data table.
2. Create tabulate object.
3. Hide control panel.
4. Add column table for OZONE.
5. Add row table grouped by Region.
6. Add local data filter for OZONE.
7. Set filter condition: 0.1 ‚â§ OZONE ‚â§ 0.2.
8. Select rows where State is "MA".
9. Exclude selected rows.
10. Convert tabulate to new datatable.



### Example 27
> **Summary**: Creates a tabulated data table with grouped rows by age and sex, extracting values from the age column.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #GroupBy, #Tabulate, #AgeSex -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dttab = dt << Tabulate( Add Table( Row Table( Grouping Columns( :age, :sex ) ) ) );
dt2 = dttab << Make Into Data Table;
m = dt2:age << Get Values;
```

**Code Explanation**:

1. Open data table;
2. Create tabulate object.
3. Add row table to tabulate.
4. Group by age and sex.
5. Make tabulate into data table.
6. Assign new data table to dt2.
7. Extract values from age column.



### Example 28
> **Summary**: Creates a tabulation window with column statistics and row grouping, formatting mean values as fixed decimals and percentages.

<!-- Keywords: #JSLScriptingLanguage, #Tabulate, #ColumnStatistics, #RowGrouping, #DataTable -->

**Code**:
```jsl
Open("data_table.jmp");
tab = Tabulate(
	Add Table(
		Column Table( Statistics( Mean, Name( "% of Total" ), Min, Max ) ),
		Row Table( Grouping Columns( :Date ), Analysis Columns( :Acid ) )
	)
);
tab << Set Format( Mean( Acid( 10, 3 ) ), Name( "% of Total" )(Acid( 10, 3 )), Min( Acid( 10, 3 ) ), Max( Acid( 10, 3 ) ) );
dt2 = tab << Make Into Data Table;
cert f = "Format(\!"Fixed Dec\!", 10, 3)";
f = Char( dt2:Mean << Get Format );
cert f = "Format(\!"Percent\!", 10, 3)";
f = Char( dt2:Name( "% of Total" ) << Get Format );
cert f = "Format(\!"Fixed Dec\!", 10, 3)";
f = Char( dt2:Min << Get Format );
cert f = "Format(\!"Fixed Dec\!", 10, 3)";
f = Char( dt2:Max << Get Format );
tab << Close Window();
```

**Code Explanation**:

1. Open data table;
2. Create tabulation window.
3. Define column statistics.
4. Define row grouping and analysis.
5. Set format for statistics.
6. Convert tabulation to data table.
7. Define fixed decimal format string.
8. Retrieve current format of Mean column.
9. Define percent format string.
10. Retrieve current format of % of Total column.



### Example 29
> **Summary**: Creates a tabulation with grouped columns by 'age' and 'sex', including analysis columns for 'weight' with mean calculation, and applies a local data filter to select specific age ranges.

<!-- Keywords: #JSL, #Tabulate, #DataFilter, #GroupingColumns, #AnalysisColumns -->

**Code**:
```jsl
dt = Open("data_table.jmp");
tab = Tabulate(
	Add Table(
		Column Table( Grouping Columns( :age ) ),
		Row Table( Grouping Columns( :sex ), Analysis Columns( :weight ), Statistics( Mean ) )
	),
	Local Data Filter(
		Location( {717, 111} ),
		Add Filter( columns( :age ), Where( :age == {12, 13, 14, 15} ) ),
		Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
	)
) << Make Into Data Table;
```

**Code Explanation**:

1. Open data table;
2. Create a tabulation.
3. Add a table to the tabulation.
4. Set grouping columns to "age".
5. Add row table to the tabulation.
6. Set grouping columns to "sex".
7. Add analysis columns for "weight".
8. Calculate mean for "weight".
9. Add local data filter.
10. Filter "age" for values 12, 13, 14, 15.
11. Convert tabulation to data table.



### Example 30
> **Summary**: Creates a tabulated data table with grouped columns for sex, age, and height, utilizing the Tabulate function.

<!-- Keywords: #JSLScriptingLanguage, #Tabulation, #DataTable, #GroupingColumns, #Matrix -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dtlist = (dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table( Column Table( Grouping Columns( :sex ) ), Row Table( Grouping Columns( :age ) ), Row Table( Grouping Columns( :height ) ) )
)) << Make Into Data Table( Invisible( 1 ), Output Table( "tabA" ) );
matrx = dtlist << get as matrix;
Close( dt, nosave );
```

**Code Explanation**:

1. Open table.
2. Create tabulation.
3. Hide control panel.
4. Group by sex.
5. Group by age.
6. Group by height.
7. Convert to data table.
8. Make invisible.
9. Name output table.
10. Convert to matrix.
11. Close original table.



### Example 31
> **Summary**: Creates a tabulation report with grouping by sex, age, and height, and extracts the data as a matrix.

<!-- Keywords: #JSLScriptingLanguage, #Tabulate, #DataTable, #MatrixExtraction, #Grouping -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dtlist = (dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table( Column Table( Grouping Columns( :sex ) ), Row Table( Grouping Columns( :age ) ), Row Table( Grouping Columns( :height ) ) )
)) << Make Into Data Table( Invisible( 1 ), Output Table( "tabA" ) );
matrx = dtlist << get as matrix;
```

**Code Explanation**:

1. Open data table.
2. Create tabulation report.
3. Hide control panel.
4. Group by sex.
5. Group by age.
6. Group by height.
7. Convert report to data table.
8. Name output table "tabA".
9. Make data table invisible.
10. Extract data as matrix.



### Example 32
> **Summary**: Creates a tabulated data visualization with summary statistics for 'Sales ($M)' and 'Assets' grouped by 'Type', utilizing JMP's Tabulate platform.

<!-- Keywords: #JMP, #Tabulate, #DataVisualization, #SummaryStatistics, #Grouping -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Tabulate(
	Show Control Panel( 0 ),
	show chart( 1 ),
	Add Table( Column Table( Grouping Columns( :Type ), Analysis Columns( :"Sales ($M)"n, :Assets ), statistics( min, mean, max ) ) )
);
obj << modify table( column table( 1 ), delete( analysis columns( :Assets ) ) );
```

**Code Explanation**:

1. Open data table;
2. Create tabulate object.
3. Hide control panel.
4. Show chart.
5. Add column table.
6. Set grouping column to "Type".
7. Add analysis columns: "Sales ($M)"n, "Assets".
8. Set statistics: min, mean, max.
9. Modify table.
10. Delete "Assets" from analysis columns.



### Example 33
> **Summary**: Creates a tabulated data table summarizing profits by sum, grouped by type and size, from an open JMP data table.

<!-- Keywords: #JSLScriptingLanguage, #Tabulate, #DataTable, #GroupingColumns, #StackGrouping -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table( Column Table( Analysis Columns( "Profits($M)"n ), Statistics( Sum ) ), Row Table( Grouping Columns( :type, :size Co ) ) )
);
obj << Modify Table( Row Table( 1 ), Modify Table Option( Stack Grouping Columns( true ) ) );
newTable3 = obj << make into data table;
```

**Code Explanation**:

1. Open data table.
2. Create tabulate object.
3. Hide control panel.
4. Add column table for profits.
5. Summarize profits by sum.
6. Group rows by type and size.
7. Modify table to stack grouping columns.
8. Convert tabulate to data table.
9. Assign new data table to variable.



### Example 34
> **Summary**: Creates a tabulated table with grouped columns and row tables, displaying statistics for 'Premium USD' and 'Claim USD', while modifying the column table to include an analysis column.

<!-- Keywords: #JSLScripting, #Tabulate, #ColumnTable, #RowTable, #AnalysisColumn -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table( Column Table( Statistics( N ), Grouping Columns( :age ) ), Row Table( Grouping Columns( :sex ) ) )
);
obj << Modify Table( Column Table( 1 ), Retype( Grouping Column( :age ) ), Analysis Column );
```

**Code Explanation**:

1. Open data table;
2. Create tabulation object.
3. Hide control panel.
4. Add column table with N statistic.
5. Group by age in column table.
6. Add row table with sex grouping.
7. Modify column table.
8. Change age to analysis column.
9. Update tabulation object.
10. Display modified table.



### Example 35
> **Summary**: Creates a tabulated data table with grouped columns, analysis columns, and statistics, including range, min, mean, and max.

<!-- Keywords: #JSLScriptingLanguage, #Tabulate, #DataTable, #Statistics, #GroupingColumns -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table( Column Table( Grouping Columns( :Type ), Analysis Columns( :"Sales ($M)"n, :Assets ), statistics( min, mean, max ) ) )
);
obj << modify table( column table( 1 ), Add( After( Statistics( max ) ), Statistics( Range ) ) );
obj << modify table( Column table( 1 ), Pack( Statistics( Min, Mean, Max, Range ) ) );
```

**Code Explanation**:

1. Open data table;
2. Create tabulation object.
3. Hide control panel.
4. Define column table.
5. Set grouping columns.
6. Set analysis columns.
7. Define statistics: min, mean, max.
8. Modify table: add Range statistic.
9. Pack statistics in table.
10. Display modified table.



### Example 36
> **Summary**: Creates a tabulated data table with grouped columns and statistics, including min, mean, and max values for 'Sales ($M)' and 'Assets', while hiding the control panel.

<!-- Keywords: #JSL, #Tabulate, #ColumnTable, #Statistics, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table( Column Table( Grouping Columns( :Type ), Analysis Columns( :"Sales ($M)"n, :Assets ), statistics( min, mean, max ) ) )
);
obj << modify table( column table( 1 ), Add( Before First, Statistics( Range ) ) );
```

**Code Explanation**:

1. Open data table;
2. Create tabulation object.
3. Hide control panel.
4. Add column table.
5. Group by Type.
6. Analyze Sales ($M) and Assets.
7. Calculate min, mean, max.
8. Modify table.
9. Add column table 1.
10. Insert Range statistic before first.



### Example 37
> **Summary**: Creates a tabulation report with row and column tables, grouping columns by gender, and redoing analysis to generate a new data table.

<!-- Keywords: #JSLScriptingLanguage, #Tabulate, #DataTable, #GroupingColumns, #RedoAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
tab = dt << Tabulate(
	Add Table(
		Row Table( Category Table, Statistics( Column %, Row % ) ),
		Column Table( Columns by Categories( :I am working on my career, :I want to see the world ) )
	)
);
tab << Modify Table( Column Table( 1 ), Add( Grouping Columns( :Gender ) ) );
tab << Redo Analysis;
newTab2 = tab << Make into data table;
cols = newTab2 << Get column names;
```

**Code Explanation**:

1. Open data table.
2. Create tabulation report.
3. Add row table with category statistics.
4. Add column table with selected columns.
5. Modify table to add gender grouping.
6. Redo analysis with modifications.
7. Convert report to data table.
8. Retrieve column names from new table.



### Example 38
> **Summary**: Creates two tabulation objects to summarize and group data from an open JMP data table, with modifications to pack and unpack analysis columns.

<!-- Keywords: #JSLScriptingLanguage, #Tabulate, #DataTable, #ColumnTable, #RowTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table( Statistics( Sum ), Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG ) ),
		Row Table( Grouping Columns( :Mfr Name, :Engine ) )
	)
);
obj << Modify Table( Column Table( 1 ), Pack( Analysis Columns( City MPG, Hwy MPG, Comb MPG ), Template( "^FIRST  (^OTHERS)", "/" ) ) );
obj2 = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table(
			Grouping Columns( :Engine ),
			Statistics( "% of Total"n ),
			Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG ),
			Pack( Analysis Columns( City MPG, Hwy MPG, Comb MPG ) )
		),
		Row Table( Grouping Columns( :Mfr Name ) )
	)
);
obj2 << Modify Table( Column Table( 1 ), Unpack( Analysis Columns( :City MPG ) ) );
newTable4 = obj2 << make into data table;
cols = newTable4 << get column names;
```

**Code Explanation**:

1. Open data table.
2. Create tabulation object.
3. Hide control panel.
4. Add column table with sums.
5. Group by manufacturer and engine.
6. Modify table to pack analysis columns.
7. Create second tabulation object.
8. Hide control panel.
9. Add column table with percentages.
10. Group by engine and manufacturer.
11. Modify table to unpack City MPG column.
12. Convert tabulation to data table.
13. Retrieve column names from new table.



### Example 39
> **Summary**: Creates a tabulated data table with grouped columns and aggregate statistics, utilizing the Tabulate function to categorize responses based on gender.

<!-- Keywords: #JSLScriptingLanguage, #Tabulation, #DataVisualization, #GroupingColumns, #AggregateStatistics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
tab2 = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table( Grouping Columns( :Gender ), Add Aggregate Statistics( :Gender ), Category Table( All ), Statistics( N, Row % ) ),
		Row Table(
			Columns by Categories(
				:I am working on my career, :I want to get my debt under control, :My home needs some major improvements,
				:I come from a large family, :I want to see the world
			)
		)
	)
);
newTab2 = tab2 << Make into data table;
tags2 = newTab2 << get tagged columns( "Stat: N" );
```

**Code Explanation**:

1. Open data table.
2. Create tabulation object.
3. Hide control panel.
4. Add column table with grouping.
5. Add aggregate statistics for gender.
6. Include all categories.
7. Add row table with columns.
8. Convert tabulation to data table.
9. Retrieve tagged columns for counts.
10. Store result in tags2 variable.



### Example 40
> **Summary**: Creates a tabulation with grouped columns and statistics, utilizing the Tabulate platform in JMP.

<!-- Keywords: #JMP, #Tabulate, #GroupingColumns, #Statistics, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
tab = dt << Tabulate( Add Table( Column Table( Statistics( Column %, Row % ) ) ) );
tab << Modify Table( Row Table( 1 ), Add( Grouping Columns( :Gender ) ) );
tab << redo analysis;
```

**Code Explanation**:

1. Open data table;
2. Create tabulation.
3. Add column table.
4. Add statistics: Column %, Row %.
5. Modify row table.
6. Add grouping columns: Gender.
7. Redo analysis.



### Example 41
> **Summary**: Creates a tabulated data table with grouped columns and row tables, summarizing miles by season and species.

<!-- Keywords: #JSLScriptingLanguage, #Tabulate, #DataTable, #GroupingColumns, #RowTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
tab1 = Tabulate(
	Remove Column Label( Grouping Columns( season ) ),
	Show Shading( 0 ),
	Add Table(
		Column Table( Analysis Columns( :miles ), Grouping Column( :season ), Statistics( Mean, Range ) ),
		Row Table( Grouping
      Column( :species ) )
	)
);
dt2 = tab1 << Make Into Data Table( 1 );
```

**Code Explanation**:

1. Open data table;
2. Create Tabulate object.
3. Remove column label for season.
4. Disable shading.
5. Add column table analysis.
6. Set miles as analysis column.
7. Group by season.
8. Calculate mean and range.
9. Add row table.
10. Group by species.



### Example 42
> **Summary**: Creates a tabulation report with custom grouping, analysis, and statistics for a specific data table.

<!-- Keywords: #JSLScriptingLanguage, #Tabulate, #DataAnalysis, #Customization, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << select rows( 39 :: 40 );
tab3 = Tabulate(
	Change Item Label( Grouping Columns( age( All ), "Total" ) ),
	Show Control Panel( 0 ),
	Show Shading( 0 ),
	Show Chart( 1 ),
	Add Table(
		Column Table( Grouping Columns( :sex ), Analysis Columns( :weight ), Statistics( Mean ) ),
		Row Table( Grouping Columns( :age ), Add Aggregate Statistics( :age ) )
	)
);
dt2 = tab3 << Make Into Data Table( 1 );
m = dt2 << Get All Columns As Matrix();
Close( dt2, nosave );
Close( dt, nosave );
certm = [1 1 5 2 1 1, 2 2 3 2 1 2];
dt = New Table( "test_valueorder2",
	Add Rows( 10 ),
	New Property( "Tabulate", Tabulate( Add Table( RowTable( Columns by Categories( :age, :age2 ) ) ) ) ),
	New Column( "age",
		Character,
		Ordinal,
		Set Property( "Notes", "Explore data adventurously" ),
		Set Property( "Value Ordering", {"11", "12", "13"} ),
		Set Values( {"11", "12", "12", "12", "12", "14", "15", "12", "13", "13"} )
	),
	New Column( "age2",
		Character,
		Ordinal,
		Set Property( "Value Ordering", {"11", "12", "13", "14", "15"} ),
		Set Values( {"13", "12", "12", "15", "15", "14", "11", "13", "11", "12"} )
	)
);
tab1 = Tabulate( Add Table( RowTable( Columns by Categories( :age, :age2 ) ) ) );
dt2 = tab1 << Make Into Data Table( 1 );
m = dt2 << Get All Columns As Matrix();
```

**Code Explanation**:

1. Open data table.
2. Select specific rows.
3. Create tabulation report.
4. Convert tabulation to data table.
5. Extract columns as matrix.
6. Close temporary data tables.
7. Define certificate matrix.
8. Create new test data table.
9. Add properties to new table.
10. Perform additional tabulation.



### Example 43
> **Summary**: Creates a tabulation object with customized settings and adds column and row tables to analyze data, utilizing the Tabulate function in JMP.

<!-- Keywords: #JMPScriptingLanguage, #TabulateFunction, #DataAnalysis, #Customization, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << select rows( 39 :: 40 );
tab3 = Tabulate(
	Change Item Label( Grouping Columns( age( All ), "Total" ) ),
	Show Control Panel( 0 ),
	Show Shading( 0 ),
	Show Chart( 1 ),
	Add Table(
		Column Table( Grouping Columns( :sex ), Analysis Columns( :weight ), Statistics( Mean ) ),
		Row Table( Grouping Columns( :age ), Add Aggregate Statistics( :age ) )
	)
);
dt2 = tab3 << Make Into Data Table( 1 );
m = dt2 << Get All Columns As Matrix();
```

**Code Explanation**:

1. Open data table.
2. Select specific rows.
3. Create tabulation object.
4. Configure tabulation settings.
5. Add column table to tabulation.
6. Add row table to tabulation.
7. Convert tabulation to data table.
8. Retrieve all columns as matrix.



### Example 44
> **Summary**: Creates a tabulation report to analyze data by sex, country, and size, with separate reports for male and female groups.

<!-- Keywords: #JSLScriptingLanguage, #Tabulate, #DataTable, #GroupingColumns, #RowTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
tab = Tabulate( Add Table( Column Table( Grouping Columns( :sex, :marital status ) ), Row Table( Grouping Columns( :country, :size ) ) ) );
dt << Select where( :sex == "Male" );
dt << Hide and Exclude( 1 );
tabDt = tab << Make into data table;
tabmatrix1 = tabDt << get as matrix;
Close( tabDt, no save );
dt << Clear Row States;
dt << Select Where( :sex == "Female" );
dt << Hide and Exclude( 1 );
tabDt2 = tab << Make into data table;
tabmatrix2 = tabDt2 << get as matrix;
```

**Code Explanation**:

1. Open data table.
2. Create tabulation report.
3. Select male rows.
4. Hide and exclude males.
5. Convert tabulation to data table.
6. Extract data table as matrix.
7. Close data table without saving.
8. Clear row states in original table.
9. Select female rows.
10. Hide and exclude females.



### Example 45
> **Summary**: Creates a tabulation with grouping by sex, marital status, country, and size, then selects male rows, hides and excludes them, and converts to a data table.

<!-- Keywords: #JSLScripting, #Tabulate, #DataTable, #Grouping, #Selection -->

**Code**:
```jsl
dt = Open("data_table.jmp");
tab = Tabulate( Add Table( Column Table( Grouping Columns( :sex, :marital status ) ), Row Table( Grouping Columns( :country, :size ) ) ) );
dt << Select where( :sex == "Male" );
dt << Hide and Exclude( 1 );
tabDt = tab << Make into data table;
tabmatrix1 = tabDt << get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Create a tabulation.
3. Group by sex, marital status.
4. Group rows by country, size.
5. Select rows where sex is Male.
6. Hide and exclude selected rows.
7. Convert tabulation to data table.
8. Get data table as matrix.



### Example 46
> **Summary**: Creates a tabulated data view with statistical summaries and sample size control, utilizing the Tabulate platform in JMP.

<!-- Keywords: #JMP, #Tabulate, #DataView, #Statistics, #SampleSizeControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Tabulate(
	Add Table( Column Table( Statistics( Mean, Std Dev ) ), Row Table( Analysis Columns( :ForSc, :SideSc, :CD3, :CD8, :CD4, :MCB ) ) )
);
obj << Test Build( Sample Size( 100 ) );
mytab = obj << Test Data View;
```

**Code Explanation**:

1. Open data table;
2. Create Tabulate object.
3. Add Column Table with Mean and Std Dev.
4. Add Row Table with specified columns.
5. Set sample size to 100.
6. Generate Test Build.
7. Create Test Data View.
8. Assign to mytab variable.



### Example 47
> **Summary**: Creates a tabulation report with row grouping by categories, utilizing the Tabulate and Add Table functions in JMP.

<!-- Keywords: #JMPScriptingLanguage, #TabulateFunction, #AddTableFunction, #RowGrouping, #DataAnalysis -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", invisible );
tab = dt << Tabulate( Add Table( Row Table( Columns by Categories( :Grades, :Sports, :Looks, :Money ) ) ) );
dtTab = tab << Make into data table( invisible );
tabMat = dtTab << Get as Matrix;
```

**Code Explanation**:

1. Open data table.
2. Create tabulation report.
3. Add row table to report.
4. Group columns by categories.
5. Convert report to data table.
6. Extract data table as matrix.



### Example 48
> **Summary**: Creates a tabulated data table with mean values for OZONE grouped by Region, and changes the label to 'Average'.

<!-- Keywords: #JSLScriptingLanguage, #Tabulate, #DataTable, #GroupingColumns, #ColumnTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
tab = dt << Tabulate(
	Add Table( Column Table( Analysis Columns( :OZONE ), Statistics( Mean ) ), Row Table( Grouping Columns( :Region ) ) )
);
tab << Change Item Label( Statistics( Mean, "Average" ) );
dtTab = tab << make into data table;
colNames = dtTab << Get Column Names;
```

**Code Explanation**:

1. Open data table.
2. Create tabulate object.
3. Add column table for OZONE mean.
4. Add row table grouped by Region.
5. Change mean label to Average.
6. Convert tabulate to data table.
7. Retrieve column names.



### Example 49
> **Summary**: Creates a tabulated data table with grouped columns and statistics, utilizing the Tabulate analysis in JMP.

<!-- Keywords: #JMPScriptingLanguage, #TabulateAnalysis, #DataTable, #GroupingColumns, #Statistics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
tab = dt << Tabulate(
	Show Control Panel( 0 ),
	Order by count of grouping columns( 1 ),
	Add Table( Column Table( Analysis Columns( :height, :weight ), Statistics( Max ) ), Row Table( Grouping Columns( :age, :sex ) ) )
);
dtTab = tab << Make into data table;
tabMatrix = dtTab << Get as Matrix;
```

**Code Explanation**:

1. Open data_table data
2. Create a tabulate analysis.
3. Hide control panel.
4. Order by grouping column count.
5. Add column table for height and weight.
6. Calculate max statistics.
7. Add row table for age and sex.
8. Convert tabulate to data table.
9. Extract data table as matrix.



### Example 50
> **Summary**: Creates a tabulation object with column statistics and row grouping, generating a data table with categorized columns.

<!-- Keywords: #JSLScriptingLanguage, #Tabulate, #DataTable, #ColumnStatistics, #RowGrouping -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", invisible );
tab = dt << Tabulate(
	Add Table(
		Column Table( Statistics( Name( "% of Total" ) ), Category Table( All ) ),
		Row Table(
			Grouping Columns( :Gender ),
			Add Aggregate Statistics( :Gender ),
			Columns by Categories( :Grades, :Sports, :Looks, :Money )
		)
	)
);
dtTab = tab << Make into data table( invisible );
tabMat = dtTab << get as matrix;
Close( dt, no save );
var = "abc";
```

**Code Explanation**:

1. Open data table.
2. Create tabulation object.
3. Add table to tabulation.
4. Set column statistics to percentage.
5. Include all categories.
6. Group rows by gender.
7. Add aggregate statistics for gender.
8. Categorize columns by grades, sports, looks, money.
9. Convert tabulation to data table.
10. Extract data as matrix.



### Example 51
> **Summary**: Fits a standard least squares model with a prediction profiler, utilizing the Tabulate function to generate a data table and matrix.

<!-- Keywords: #JSLScriptingLanguage, #TabulateFunction, #LeastSquaresModel, #PredictionProfiler, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Tabulate(
	Add Table( Column Table( Statistics( Mean, Std Dev ) ), Row Table( Analysis Columns( :ForSc, :SideSc, :CD3, :CD8, :CD4, :MCB ) ) )
);
var = 20;
obj << Test Build( Sample Size( var ) );
tabDt = obj << Make into data table();
tabMatrix = tabDt << Get as Matrix;
```

**Code Explanation**:

1. Open data table.
2. Create tabulation object.
3. Add column statistics.
4. Set analysis columns.
5. Assign variable value.
6. Build test with sample size.
7. Convert to data table.
8. Extract as matrix.



### Example 52
> **Summary**: Creates a data table from a tabulation object, specifying analysis columns and statistics for age, height, and weight.

<!-- Keywords: #JSLScriptingLanguage, #DataTable, #TabulationObject, #AnalysisColumns, #Statistics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
catTab = Tabulate(
	Show Control Panel( 0 ),
	Add Table( Column Table( Analysis Columns( :age, :height, :weight ), Statistics( N Categories ) ) )
);
catTable = catTab << Make into Data Table;
rowVector = catTable << Get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Create tabulation object.
3. Hide control panel.
4. Add column table analysis.
5. Specify age, height, weight columns.
6. Request N Categories statistics.
7. Convert tabulation to data table.
8. Retrieve data table as matrix.



### Example 53
> **Summary**: Creates a tabulated data table with grouped columns and rows, utilizing the Tabulate function to summarize data from the 'data_table.jmp' file.

<!-- Keywords: #JSLScriptingLanguage, #TabulateFunction, #DataTableManipulation, #GroupingColumns, #RowTable -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", private );
tab = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table( Column Table( Grouping Columns( :sex ) ), Row Table( Grouping Columns( :age ) ) )
);
stable = tab << Make Into Data Table( invisible, table name( "Stealth Table" ) );
seeIt = stable << Has Data View;
```

**Code Explanation**:

1. Open data table.
2. Create tabulation object.
3. Hide control panel.
4. Define column and row grouping.
5. Convert tabulation to data table.
6. Make new table invisible.
7. Name new table "Stealth Table".
8. Check if new table has data view.



### Example 54
> **Summary**: Creates a tabulation with grouped columns and row tables to analyze data from an open JMP data table.

<!-- Keywords: #JSLScriptingLanguage, #Tabulate, #DataAnalysis, #GroupingColumns, #RowTables -->

**Code**:
```jsl
dt = Open("data_table.jmp");
tab = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table( Grouping Columns( :Prior ), Statistics( N, Name( "% of Total" ), Row %, Column % ) ),
		Row Table( Grouping Columns( :Cell Type ) ),
		Row Table( Grouping Columns( :Treatment ) )
	)
);
tab << make into data table;
dtab1 = Data Table( 1 ) << get as matrix;
dtab2 = Data Table( 2 ) << get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Create tabulation.
3. Hide control panel.
4. Add column table.
5. Group by "Prior".
6. Calculate N, % of Total, Row %, Column %.
7. Add row table.
8. Group by "Cell Type".
9. Add another row table.
10. Group by "Treatment".



### Example 55
> **Summary**: Creates a tabulation with column statistics and row grouping, allowing for dynamic adjustment of column width.

<!-- Keywords: #JSLScriptingLanguage, #Tabulate, #ColumnStatistics, #RowGrouping, #DynamicWidthAdjustment -->

**Code**:
```jsl
dt = Open("data_table.jmp");
tab = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table( Column Table( Statistics( N, Name( "% of Total" ) ) ), Row Table( Grouping Columns( :age ) ) ),
	Display Column Width( Data Column( "% of Total" ), 120 )
);
width = tab << Display Column Width( Data Column( "% of Total" ) );
tab << Display Column Width( Data Column( "% of Total" ), 240 );
width = tab << Display Column Width( Data Column( "% of Total" ) );
tab << Display Column Width( Data Column( "% of Total" ), 0 );
width = tab << Display Column Width( Data Column( "% of Total" ) );
tab << Display Column Width( Data Column( "% of Total" ), -1 );
width = tab << Display Column Width( Data Column( "% of Total" ) );
tabScript = Char( tab << Get Script );
```

**Code Explanation**:

1. Open data table.
2. Create tabulation.
3. Hide control panel.
4. Add column table with statistics.
5. Set initial column width.
6. Retrieve current column width.
7. Increase column width.
8. Retrieve updated column width.
9. Set column width to zero.
10. Retrieve column width after reset.
11. Set column width to auto.
12. Retrieve final column width.
13. Get script for tabulation.



### Example 56
> **Summary**: Creates a tabulation report with grouped columns and row tables, displaying column widths for specific labels.

<!-- Keywords: #JSL, #Tabulate, #ColumnTable, #RowTable, #DisplayColumnWidth -->

**Code**:
```jsl
dt = Open("data_table.jmp");
tab = dt << Tabulate(
	show panel( 0 ),
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ), Analysis Columns( :age ), Statistics( Sum, "% of Total" ) ),
		Row Table( Grouping Columns( :type ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
tab << Display Column Width( Row Label( Row Table( 2 ), "country" ), 150 );
width = tab << Display Column Width( Row Label( Row Table( 2 ), "country" ) );
tab << Display Column Width( Row Label( Row Table( 2 ), "size" ), 150 );
width2 = tab << Display Column Width( Row Label( Row Table( 2 ), "size" ) );
tabScript = Char( tab << Get Script );
```

**Code Explanation**:

1. Open data table;
2. Create tabulation report.
3. Hide panel.
4. Add column table.
5. Group by sex and marital status.
6. Analyze age with sum and percentage.
7. Add row table.
8. Group by type.
9. Add second row table.
10. Group by country and size.



### Example 57
> **Summary**: Creates a tabulation report with column and row tables, filtering data by region, and adding new rows to the table.

<!-- Keywords: #JSLScriptingLanguage, #Tabulate, #DataTable, #FilteringData, #RowOperations -->

**Code**:
```jsl
dt = Open("data_table.jmp");
tab = dt << Tabulate(
	Show Control Panel( 1 ),
	Add Table( Column Table( Analysis Columns( :SAT Verbal ) ), Row Table( Grouping Columns( :Region ) ) )
);
dt << Select Where( :region == "Midwest" );
dt << delete rows();
dtTab = tab << Make into Data Table;
rownum = 353;
For( i = 1, i <= 5, i++,
	dt << add rows( 1 );
	dt:region[rownum] = "Central";
	rownum++;
);
dtTab2 = tab << Make into Data Table;
Close( dt, no save );
```

**Code Explanation**:

1. Open data table.
2. Create tabulation report.
3. Show control panel.
4. Add column table for SAT Verbal.
5. Add row table grouped by Region.
6. Select Midwest region rows.
7. Delete selected rows.
8. Convert tabulation to data table.
9. Initialize row number.
10. Loop to add Central region rows.



### Example 58
> **Summary**: Creates a grouped data table from an existing data table, utilizing Tabulate to add column and row tables based on sex and age grouping.

<!-- Keywords: #Tabulate, #DataTable, #Grouping, #JSLScriptingLanguage, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Tabulate();
obj << Add Table( Column Table( Grouping Columns( :sex ) ) );
obj << Add table( row table( grouping column( :age ) ) );
dtTab = obj << Make into data table;
```

**Code Explanation**:

1. Open data table;
2. Create a new tabulate object.
3. Add a column table with sex grouping.
4. Add a row table with age grouping.
5. Convert tabulate to data table.
6. Assign result to dtTab.



### Example 59
> **Summary**: Creates a data table with mean OZONE values and CO analysis, grouped by Region.

<!-- Keywords: #JSLScriptingLanguage, #DataTable, #ColumnTable, #RowTable, #AnalysisColumns -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Tabulate( Add Table( Column Table( Analysis Columns( :OZONE ), Statistics( Mean ) ), Row Table( Grouping Columns( :Region ) ) ) );
obj << modifytable( column table( 1 ), analysis columns( :CO ) );
dtTab = obj << Make into data table;
```

**Code Explanation**:

1. Open data table.
2. Create tabulate object.
3. Add column table for OZONE mean.
4. Add row table with Region grouping.
5. Modify table to include CO.
6. Convert tabulate to data table.



### Example 60
> **Summary**: Creates a grouped data table from an existing data table, with columns for sex and age.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #GroupingColumns, #ColumnTableModification, #MakeintoDataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Tabulate();
obj << Add Table( Column Table( Grouping Columns( :sex ) ) );
obj << modify table( column table( 1 ), grouping column( :age ) );
dtTab = obj << Make into data table;
```

**Code Explanation**:

1. Open data table;
2. Create tabulation object.
3. Add column table.
4. Group by "sex".
5. Modify first column table.
6. Group by "age".
7. Convert tabulation to data table.
8. Assign result to dtTab.



### Example 61
> **Summary**: Creates a data table with categorized columns by grouping 'Grades', 'Sports', and 'Looks' categories, and adds a new column for 'Money'.

<!-- Keywords: #JSLScriptingLanguage, #DataTableCreation, #ColumnCategorization, #RowGrouping, #TableModification -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Tabulate( Add Table( Row Table( Columns by Categories( :Grades, :Sports, :Looks ) ) ) );
obj << modify table( row table( 1 ), columns by categories( :Money ) );
dtTab = obj << Make into data table;
```

**Code Explanation**:

1. Open data table.
2. Create tabulation object.
3. Add row table to tabulation.
4. Define columns by categories.
5. Modify existing row table.
6. Add 'Money' column to categories.
7. Convert tabulation to data table.



### Example 62
> **Summary**: Creates a data table with grouped columns and tables for sex, age, height, and weight analysis.

<!-- Keywords: #JSLScriptingLanguage, #DataTable, #GroupingColumns, #ColumnTables, #RowTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Tabulate();
obj << Add Table( Column Table( Grouping Columns( :sex ) ) );
obj << Add table( row table( grouping column( :age ) ) );
obj << Add Table( Column Table( Analysis Column( :height ) ) );
obj << Add Table( Column Table( Analysis Column( :Weight ) ) );
obj << Modify Table( Column Table( 2 ), statistics( min, max ) );
dtTab = obj << Make into data table;
```

**Code Explanation**:

1. Open data table;
2. Create new tabulate object.
3. Add column table with sex grouping.
4. Add row table with age grouping.
5. Add column table for height analysis.
6. Add column table for weight analysis.
7. Modify height table to show min and max.
8. Convert tabulate to data table.
9. Assign result to dtTab variable.



### Example 63
> **Summary**: Creates a tabulation object to analyze sales data, grouping by type and calculating summary statistics, then modifies the table to remove assets.

<!-- Keywords: #JSLScriptingLanguage, #Tabulate, #DataAnalysis, #Statistics, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table( Grouping Columns( :Type ), Analysis Columns( :Name( "Sales ($M)" ), :Assets ), statistics( min, mean, max ) )
	)
);
obj << modify table( column table( 1 ), delete( analysis columns( :Assets ) ) );
dtTab = obj << Make into data table;
```

**Code Explanation**:

1. Open data table.
2. Create tabulation object.
3. Hide control panel.
4. Add table to tabulation.
5. Group by "Type".
6. Analyze "Sales ($M)" and "Assets".
7. Calculate min, mean, max.
8. Modify table to remove "Assets".
9. Convert tabulation to data table.
10. Assign result to dtTab.



### Example 64
> **Summary**: Runs data manipulation and visualization by creating multiple tabulation objects, modifying tables, and extracting values from a JMP data table.

<!-- Keywords: #JSLScripting, #DataManipulation, #Visualization, #Tabulation, #JMPDataTables -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = Tabulate( Add Table( Row Table( Columns by Categories( :Grades, :Sports, :Looks ) ) ) );
obj1 << modify table( row table( 1 ), columns by categories( :Money ) );
dt2 = obj1 << Make into data table;
matrix1 = dt2 << Get as Matrix;
obj2 = dt << Tabulate( Show Control Panel( 0 ), Add Table( Row Table( Grouping Columns( :Grades, :Sports, :Looks, :Money ) ) ) );
dt3 = obj2 << Make into data table;
getvals = dt3:Money << Get values;
obj3 = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table( Grouping Columns( :Race, :Sports, :Grades ) ),
		Row Table( Grouping Columns( :Name( "Urban/Rural" ), :Looks ) )
	)
);
dt4 = obj3 << Make into data table;
vals2 = As Column( dt4, "Urban/Rural" ) << get values;
Close( dt2, nosave );
Close( dt3, nosave );
```

**Code Explanation**:

1. Open data table.
2. Create initial tabulation object.
3. Modify tabulation to add 'Money' column.
4. Convert tabulation to data table.
5. Extract matrix from data table.
6. Create second tabulation object with control panel hidden.
7. Convert second tabulation to data table.
8. Retrieve 'Money' values from data table.
9. Create third tabulation object with specified grouping.
10. Convert third tabulation to data table and close temporary tables.



### Example 65
> **Summary**: Creates a tabulation report with aggregate statistics and column categorization, utilizing the Tabulate function to generate a data table.

<!-- Keywords: #JSLScriptingLanguage, #TabulateFunction, #DataTable, #AggregateStatistics, #ColumnCategorization -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", invisible );
tab = dt << Tabulate(
	Add Table(
		Column Table( Statistics( Name( "% of Total" ) ), Category Table( All ) ),
		Row Table(
			Grouping Columns( :Gender ),
			Add Aggregate Statistics( :Gender ),
			Columns by Categories( :Grades, :Sports, :Looks, :Money )
		)
	)
);
dtTab = tab << Make into data table( invisible );
tabMat = dtTab << get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Create tabulation report.
3. Set column statistics.
4. Set row grouping.
5. Add aggregate statistics.
6. Define columns by categories.
7. Convert report to data table.
8. Get data table as matrix.



### Example 66
> **Summary**: Fits a standard least squares model with a prediction profiler, utilizing the Tabulate platform to generate a data table and matrix.

<!-- Keywords: #JSLScriptingLanguage, #Tabulate, #DataTableGeneration, #MatrixExtraction, #LeastSquaresModel -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Tabulate(
	Add Table( Column Table( Statistics( Mean, Std Dev ) ), Row Table( Analysis Columns( :ForSc, :SideSc, :CD3, :CD8, :CD4, :MCB ) ) )
);
var = 35;
obj << Test Build( Sample Size( var ) );
tabDt = obj << Make into data table();
tabMatrix = tabDt << Get as Matrix;
```

**Code Explanation**:

1. Open table.
2. Create tabulation object.
3. Add column statistics.
4. Set analysis columns.
5. Define variable.
6. Build test with sample size.
7. Convert to data table.
8. Extract data as matrix.



### Example 67
> **Summary**: Creates a tabulated data table, filtering by region and adding new rows to simulate changes in regional data.

<!-- Keywords: #JSLScripting, #DataManipulation, #Tabulation, #Filtering, #RowOperations -->

**Code**:
```jsl
dt = Open("data_table.jmp");
tab = dt << Tabulate(
	Show Control Panel( 1 ),
	Add Table( Column Table( Analysis Columns( :SAT Verbal ) ), Row Table( Grouping Columns( :Region ) ) )
);
dt << Select Where( :region == "Midwest" );
dt << delete rows();
dtTab = tab << Make into Data Table;
rownum = 353;
For( i = 1, i <= 5, i++,
	dt << add rows( 1 );
	dt:region[rownum] = "Central";
	rownum++;
);
dtTab2 = tab << Make into Data Table;
```

**Code Explanation**:

1. Open data table.
2. Create tabulation.
3. Enable control panel.
4. Add column and row tables.
5. Group by region.
6. Select Midwest rows.
7. Delete selected rows.
8. Convert tabulation to data table.
9. Initialize row number.
10. Loop to add new rows.



### Example 68
> **Summary**: Creates a tabulated data table with grouped columns and analysis statistics, utilizing the Tabulate platform in JMP.

<!-- Keywords: #JMP, #Tabulate, #DataTable, #GroupingColumns, #AnalysisStatistics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
tab = Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ), Analysis Columns( :age ), Statistics( Mean, Std Dev ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
dTab1 = tab << make into data table( Full Path Column Name( 1 ) );
dTab2 = tab << make into data table();
tab << remove column label( grouping columns( :marital status, :sex ) );
dTab3 = tab << make into data table( Full Path Column Name( 1 ) );
dTab4 = tab << make into data table();
```

**Code Explanation**:

1. Open data table;
2. Create tabulation.
3. Hide control panel.
4. Add column table.
5. Group by sex, marital status.
6. Analyze age.
7. Calculate mean, standard deviation.
8. Add row table.
9. Group by country, size.
10. Make first data table.
11. Make second data table.
12. Remove marital status, sex labels.
13. Make third data table.
14. Make fourth data table.



### Example 69
> **Summary**: Runs data manipulation and visualization by creating multiple tabulation objects, modifying tables, and extracting values from a 'Money' column.

<!-- Keywords: #JSLScriptingLanguage, #DataManipulation, #Visualization, #TabulationObjects, #DataExtraction -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = Tabulate( Add Table( Row Table( Columns by Categories( :Grades, :Sports, :Looks ) ) ) );
obj1 << modify table( row table( 1 ), columns by categories( :Money ) );
dt2 = obj1 << Make into data table;
matrix1 = dt2 << Get as Matrix;
obj2 = dt << Tabulate( Show Control Panel( 0 ), Add Table( Row Table( Grouping Columns( :Grades, :Sports, :Looks, :Money ) ) ) );
dt3 = obj2 << Make into data table;
getvals = dt3:Money << Get values;
obj3 = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table( Grouping Columns( :Race, :Sports, :Grades ) ),
		Row Table( Grouping Columns( :Name( "Urban/Rural" ), :Looks ) )
	)
);
dt4 = obj3 << Make into data table;
vals2 = As Column( dt4, "Urban/Rural" ) << get values;
```

**Code Explanation**:

1. Open data table.
2. Create tabulation object.
3. Modify tabulation object.
4. Convert tabulation to data table.
5. Extract matrix from data table.
6. Create another tabulation object.
7. Convert second tabulation to data table.
8. Extract values from "Money" column.
9. Create third tabulation object.
10. Convert third tabulation to data table.



### Example 70
> **Summary**: Analyze miles by season, grouping results by species and displaying mean and range statistics.

<!-- Keywords: #JSLScriptingLanguage, #Tabulate, #GroupingColumns, #Statistics, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
tab1 = Tabulate(
	Remove Column Label( Grouping Columns( season ) ),
	Show Shading( 0 ),
	Add Table(
		Column Table( Analysis Column( :miles ), Grouping Column( :season ), Statistics( Mean, Range ) ),
		Row Table( Grouping
      Column( :species ) )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create tabulate object.
3. Remove column label for season.
4. Disable shading.
5. Add table to tabulate.
6. Analyze miles by season.
7. Calculate mean and range.
8. Group by species.
9. Display tabulate results.



### Example 71
> **Summary**: Runs the transformation and analysis of a data table by applying various mathematical functions to the 'height' column, including square root, logarithmic, exponential, and more, while calculating mean statistics for each transformation.

<!-- Keywords: #JSL, #DataTransformation, #Statistics, #MathematicalFunctions, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
tab = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table(
			Analysis Columns(
				:height,
				Transform Column( "Square Root[height]", Formula( Sqrt( :height ) ) ),
				Transform Column( "height^2", Formula( :height * :height ) ),
				Transform Column( "Log[height]", Formula( Log( :height ) ) ),
				Transform Column( "Exp[height]", Formula( Exp( :height ) ) ),
				Transform Column( "Log10[height]", Formula( Log10( :height ) ) ),
				Transform Column( "10^height", Formula( 10 ^ :height ) ),
				Transform Column( "Cube Root[height]", Formula( Root( :height, 3 ) ) ),
				Transform Column( "height^3", Formula( :height ^ 3 ) ),
				Transform Column( "1/height", Formula( 1 / :height ) ),
				Transform Column( "Abs[height]", Formula( Abs( :height ) ) ),
				Transform Column( "-height", Formula( -:height ) ),
				Transform Column( "Arrhenius[height]", Formula( Arrhenius( :height ) ) ),
				Transform Column( "Arrhenius Inverse[height]", Formula( Arrhenius Inv( :height ) ) ),
				Transform Column( "Logit[height]", Formula( Logit( :height ) ) ),
				Transform Column( "Logistic[height]", Formula( Logist( :height ) ) ),
				Transform Column( "Logit[height%]", Formula( Logit Percent( :height ) ) ),
				Transform Column( "Logistic[height%]", Formula( Logist Percent( :height ) ) )
			),
			Statistics( Mean )
		)
	)
);
tabDt = tab << make into data table;
tabMat = tabDt << Get as Matrix;
```

**Code Explanation**:

1. Open data table;
2. Create Tabulate report.
3. Hide control panel.
4. Add column table.
5. Set analysis columns: height.
6. Transform height to square root.
7. Transform height to square.
8. Transform height to log.
9. Transform height to exp.
10. Transform height to log10.
11. Transform height to 10^height.
12. Transform height to cube root.
13. Transform height to cube.
14. Transform height to reciprocal.
15. Transform height to absolute value.
16. Transform height to negative.
17. Transform height using Arrhenius function.
18. Transform height using Arrhenius inverse.
19. Transform height using Logit function.
20. Transform height using Logistic function.
21. Transform height using Logit percent.
22. Transform height using Logistic percent.
23. Calculate mean for each transformation.
24. Convert Tabulate report to data table.
25. Extract data table as matrix.



### Example 72
> **Summary**: Creates a tabulation report with grouping by sex and age, selecting columns, and deleting all columns.

<!-- Keywords: #JSLScriptingLanguage, #Tabulate, #ColumnTable, #RowTable, #DataManipulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Tabulate( Show Control Panel( 0 ), Add Table( Column Table( Grouping Columns( :sex ) ), Row Table( Grouping Columns( :age ) ) ) );
:age << set selected;
:sex << set selected;
dt << Delete Columns();
```

**Code Explanation**:

1. Open data table;
2. Create tabulation report.
3. Hide control panel.
4. Add column table.
5. Group by sex.
6. Add row table.
7. Group by age.
8. Select age column.
9. Select sex column.
10. Delete all columns.



### Example 73
> **Summary**: Runs data manipulation and analysis by opening a data table, creating tabulations, modifying tables, making data tables from tabulations, extracting matrices, and getting values.

<!-- Keywords: #JSLScriptingLanguage, #DataManipulation, #Tabulation, #DataAnalysis, #MatrixOperations -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = Tabulate( Add Table( Row Table( Columns by Categories( :Grades, :Sports, :Looks ) ) ) );
obj1 << modify table( row table( 1 ), columns by categories( :Money ) );
dt2 = obj1 << Make into data table;
matrix1 = dt2 << Get as Matrix;
Close( dt2, nosave );
obj2 = dt << Tabulate( Show Control Panel( 0 ), Add Table( Row Table( Grouping Columns( :Grades, :Sports, :Looks, :Money ) ) ) );
dt3 = obj2 << Make into data table;
getvals = dt3:Money << Get values;
```

**Code Explanation**:

1. Open data table.
2. Create initial tabulation.
3. Modify tabulation to add column.
4. Convert tabulation to data table.
5. Extract matrix from data table.
6. Close temporary data table.
7. Create second tabulation with control panel.
8. Convert second tabulation to data table.
9. Extract values from Money column.



### Example 74
> **Summary**: Creates a tabulated data table with grouped columns and rows, extracting 'Urban/Rural' values from the resulting data.

<!-- Keywords: #JSLScriptingLanguage, #Tabulation, #DataTable, #GroupingColumns, #RowTable -->

**Code**:
```jsl
dt4 = Open("data_table.jmp");
obj3 = dt4 << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table( Grouping Columns( :Race, :Sports, :Grades ) ),
		Row Table( Grouping Columns( :Name( "Urban/Rural" ), :Looks ) )
	)
);
dt5 = obj3 << Make into data table;
vals2 = As Column( dt5, "Urban/Rural" ) << get values;
Close( dt5, nosave );
```

**Code Explanation**:

1. Open data table.
2. Create tabulation object.
3. Hide control panel.
4. Define column grouping.
5. Define row grouping.
6. Convert tabulation to data table.
7. Extract "Urban/Rural" values.
8. Close temporary data table.



### Example 75
> **Summary**: Creates a data table with categorized columns, including 'Money', by modifying a tabulate object and converting it to a matrix.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #MatrixConversion, #TabulateObjectModification, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = Tabulate( Add Table( Row Table( Columns by Categories( :Grades, :Sports, :Looks ) ) ) );
obj1 << modify table( row table( 1 ), columns by categories( :Money ) );
dt2 = obj1 << Make into data table;
matrix1 = dt2 << Get as Matrix;
```

**Code Explanation**:

1. Open data table;
2. Create tabulate object.
3. Add row table with categories.
4. Modify table to add "Money".
5. Make tabulate into data table.
6. Convert data table to matrix.



### Example 76
> **Summary**: Creates a tabulation object with grouped columns and rows, extracting values from a specific column.

<!-- Keywords: #JSLScriptingLanguage, #Tabulate, #DataTable, #ColumnTable, #RowTable -->

**Code**:
```jsl
dt4 = Open("data_table.jmp");
obj3 = dt4 << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table( Grouping Columns( :Race, :Sports, :Grades ) ),
		Row Table( Grouping Columns( :Name( "Urban/Rural" ), :Looks ) )
	)
);
dt5 = obj3 << Make into data table;
vals2 = As Column( dt5, "Urban/Rural" ) << get values;
```

**Code Explanation**:

1. Open data table.
2. Create tabulation object.
3. Hide control panel.
4. Add column table.
5. Group by Race, Sports, Grades.
6. Add row table.
7. Group by Urban/Rural, Looks.
8. Convert tabulation to data table.
9. Extract "Urban/Rural" column.
10. Get values from column.



### Example 77
> **Summary**: Creates and customizes a tabulation by age, adding height and weight columns, and saving the script for future use.

<!-- Keywords: #JSLScriptingLanguage, #Tabulate, #ColumnTable, #AnalysisColumns, #Scripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
tab = dt << Tabulate( Page Column( :age ), Show Control Panel( 0 ), Add Table( Column Table( Analysis Columns( :height, :weight ) ) ) );
saveScript = Char( tab << get script );
certScript = "Tabulate(Page Column(:age), Show Control Panel(0), Add Table(Column Table(Analysis Columns(:height, :weight))))";
tab << close window;
tabCP = dt << Tabulate( Page Column( :age ), Add Table( Column Table( Analysis Columns( :height, :weight ) ) ) );
saveScript2 = Char( tabCP << get script );
certScript2 = "Tabulate(Page Column(:age), Add Table(Column Table(Analysis Columns(:height, :weight))))";
tabCP << Close Window;
```

**Code Explanation**:

1. Open data table;
2. Create tabulation by age.
3. Hide control panel.
4. Add height and weight columns.
5. Save tabulation script.
6. Define certification script.
7. Close tabulation window.
8. Recreate tabulation by age.
9. Save tabulation script again.
10. Define certification script again.
11. Close tabulation window.



### Example 78
> **Summary**: Creates a tabulated data table with age statistics and country grouping, modifying the table to add standard deviation and delete range and sum statistics.

<!-- Keywords: #JSLScriptingLanguage, #Tabulation, #DataTable, #Statistics, #Grouping -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj2 = dt << Tabulate(
	Add Table(
		Column Table( Analysis Columns( :age ), Statistics( Range, Min, Max, Sum ), Pack( Statistics( Min, Max ) ) ),
		Row Table( Grouping Columns( :country ) )
	)
);
obj2 << Modify Table( Column Table( 1 ), Delete( Statistics( "Range", "Sum" ) ) );
obj2 << modify table( column table( 1 ), Add( Statistics( "Std Dev" ) ) );
newtab2 = obj2 << make into data table;
cols2 = newtab2 << get column names;
```

**Code Explanation**:

1. Open data table;
2. Create tabulation object.
3. Add column table with age statistics.
4. Add row table with country grouping.
5. Modify table to delete Range and Sum.
6. Add Std Dev to column table.
7. Convert tabulation to data table.
8. Retrieve column names from new table.



### Example 79
> **Summary**: Calculates and visualizes summary statistics for a grouped data table, including median, quantiles, mean, standard deviation, and more.

<!-- Keywords: #JSLScriptingLanguage, #DataVisualization, #SummaryStatistics, #GroupedData, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
mytab = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :age ) ),
		Row Table(
			Grouping Columns( :sex ),
			Analysis Columns( :height ),
			Statistics(
				Median,
				Quantiles( 50 ),
				Quantiles( 1 ),
				Quantiles( 99 ),
				Mean,
				Std Dev,
				Min,
				Max,
				Range,
				Name( "% of Total" ),
				N Missing,
				Sum,
				Sum Wgt,
				Variance,
				Std Err,
				CV
			)
		)
	)
);
dt2 = mytab << Make Into Data Table;
m = dt2 << Get as Matrix;
```

**Code Explanation**:

1. Open data table;
2. Create tabulation.
3. Group by age.
4. Group by sex.
5. Analyze height.
6. Calculate median.
7. Calculate 50th percentile.
8. Calculate 1st percentile.
9. Calculate 99th percentile.
10. Convert tabulation to data table.



### Example 80
> **Summary**: Runs the analysis and reporting process for a baseline dataset, utilizing Tabulate to create a column table with statistics and a row table with grouping.

<!-- Keywords: #JSLScriptingLanguage, #Tabulate, #DataAnalysis, #Reporting, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Tabulate(
	Show Control Panel( 0 ),
	Show Shading( 0 ),
	Add Table( Column Table( Analysis Columns( :Baseline ), Statistics( N ) ), Row Table( Grouping Columns( :Testers ) ) )
);
:Baseline << Set Property( "Missing Value Codes", 0 );
:Baseline << Set Values( [0] );
obj2 = obj << Redo Analysis;
rpt = obj2 << Report;
expr = Parse( rpt[MultiTblNumColBox( 1 )] << Get Journal );
actN = Arg( Extract Expr( expr, Data( Wild List() ) ), 1 );
```

**Code Explanation**:

1. Open data table.
2. Create tabulation object.
3. Hide control panel and shading.
4. Add column table with baseline analysis.
5. Add row table with testers grouping.
6. Set missing value codes for Baseline.
7. Set Baseline values to zero.
8. Redo the analysis.
9. Generate report from analysis.
10. Parse report journal to extract expression.



### Example 81
> **Summary**: Tabulates data by grouping columns, adding a column table with analysis statistics, and saving the result as a new data table.

<!-- Keywords: #JSLScriptingLanguage, #Tabulate, #DataTable, #GroupingColumns, #Statistics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
tab1 = Tabulate(
	Remove Column Label( Grouping Columns( season ) ),
	Show Shading( 0 ),
	Add Table(
		Column Table( Analysis Columns( :miles ), Grouping Column( :season ), Statistics( Mean, Range ) ),
		Row Table( Grouping
      Column( :species ) )
	)
);
dt2 = tab1 << Make Into Data Table( 1 );
dt2 << Save( "$TEMP/" || "tabulatedata_table.jmp" );
dt2 << Set Name( "Original" );
```

**Code Explanation**:

1. Open data table.
2. Create tabulate object.
3. Remove column label for season.
4. Disable shading.
5. Add column table with miles analysis.
6. Group by season.
7. Calculate mean and range.
8. Add row table with species grouping.
9. Convert tabulate to data table.
10. Save as tabulateAnimals.jmp.
11. Rename data table to "Original".



### Example 82
> **Summary**: Creates a tabulated report with summary statistics for 'height' and 'weight' columns, utilizing the Tabulate function to generate a data table.

<!-- Keywords: #JSLScriptingLanguage, #TabulateFunction, #DataTableManipulation, #SummaryStatistics, #ColumnAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
tab = dt << Tabulate( Add Table( Column Table( Analysis Columns( :height, :weight ) ) ) );
tabDt = tab << make into data table;
```

**Code Explanation**:

1. Open data table;
2. Create Tabulate report.
3. Add height and weight columns.
4. Convert report to data table.



## Tabulate using New Column
### Example 1
> **Summary**: Creates a tabular report with a profiler plot, grouping data by 'age' and 'sex', analyzing 'height' statistics, and displaying the results in a JMP data table.

<!-- Keywords: #JMP, #DataTable, #Tabulate, #ProfilerPlot, #Grouping -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "id",
	Numeric,
	Continuous,
	Format( "Best", 12 ),
	Set Values( [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1] )
);
tab = dt << Tabulate(
	Show Chart( 1 ),
	Show Control Panel( 0 ),
	Plot Scale( 60, 90 ),
	Add Table(
		Column Table( Grouping Columns( :age, :sex ), Analysis Columns( :height ), Statistics( Mean ) ),
		Row Table( Grouping Columns( :id ) )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create new column "id".
3. Set column properties.
4. Assign values to "id".
5. Initiate tabulation process.
6. Enable chart display.
7. Disable control panel.
8. Set plot scale.
9. Define column table with grouping and analysis columns.
10. Define row table with grouping column.



### Example 2
> **Summary**: Creates and configures multiple tabulations in JMP, including data visualization, grouping, and statistical analysis.

<!-- Keywords: #JMPScriptingLanguage, #Tabulation, #DataVisualization, #Grouping, #StatisticalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "id",
	Numeric,
	Continuous,
	Format( "Best", 12 ),
	Set Values( [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1] )
);
tab = dt << Tabulate(
	Show Chart( 1 ),
	Show Control Panel( 0 ),
	Plot Scale( 60, 90 ),
	Add Table(
		Column Table( Grouping Columns( :age, :sex ), Analysis Columns( :height ), Statistics( Mean ) ),
		Row Table( Grouping Columns( :id ) )
	)
);
dt = Open("data_table.jmp");
tab8 = dt << Tabulate(
	Show Control Panel( 0 ),
	Order by count of grouping columns( 1 ),
	Add Table(
		Column Table( Grouping Columns( :Gender ), Statistics( N, Column % ) ),
		Row Table( Grouping Columns( :Single Status ) ),
		Row Table( Grouping Columns( :Job Satisfaction ) ),
		Row Table( Grouping Columns( :Brush After Waking Up ) ),
		Row Table( Grouping Columns( :I come from a large family ) ),
		Row Table( Grouping Columns( :Floss Other ) )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create new column "id".
3. Set values for "id" column.
4. Generate tabulation for "data_table".
5. Display chart in tabulation.
6. Hide control panel in tabulation.
7. Set plot scale to 60, 90.
8. Group by age and sex, analyze height mean.
9. Group by id.
10. Open data table;
11. Generate tabulation for "data_table".
12. Hide control panel in tabulation.
13. Order by count of grouping columns.
14. Group by Gender, analyze N and Column %.
15. Group by Single Status.
16. Group by Job Satisfaction.
17. Group by Brush After Waking Up.
18. Group by I come from a large family.
19. Group by Floss Other.



### Example 3
> **Summary**: Process of recoding values in a target column and generating a tabulate report with statistics, utilizing JMP's data update feature.

<!-- Keywords: #JMPScriptingLanguage, #DataUpdate, #TabulateReport, #RecodeValues, #ColumnManagement -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Begin Data Update;
col1 = dt << New Column( dt:Series Full );
col1 << Set Name( "Series Full 2" );
dt << Move Selected Columns( {col1}, after( dt:Series Full ) );
dt << Recode Column(
	dt:Series Full,
	{Recode(
		_rcNow,
		{Map Value( _rcNow, {"doz.", "dozens", "gal.", "gallons", "lb.", "pounds", "oz.", "ounces", "gm)", "grams)", "lit)", "liters)"} )},
		By Word( Delimiters( Get Whitespace Characters() ) )
	)},
	Target Column( col1 )
);
dt << End Data Update;
dtTab = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table( Column Table( Statistics( N, Name( "% of Total" ) ) ), Row Table( Grouping Columns( :Series Full 2 ) ) )
);
newTab = dtTab << Make Into Data Table;
tabList = :Series Full 2 << get as matrix;
```

**Code Explanation**:

1. Open data table.
2. Begin data update.
3. Create new column from existing.
4. Rename new column.
5. Move new column.
6. Recode values in target column.
7. End data update.
8. Create tabulate report.
9. Convert report to data table.
10. Retrieve column data as matrix.



### Example 4
> **Summary**: Creates and configures an ordinal model with multiple effects, generating a profiler plot for visualization.

<!-- Keywords: #JSLScriptingLanguage, #OrdinalModel, #MultipleEffects, #ProfilerPlot, #DataTableManipulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "h2", "numeric", "ordinal", width( 5 ), <<Set Formula( :height + 1 ) );
dt:height << Set Modeling Type( "ordinal" );
dt:height << Set Property( "Value Ordering", {51, 52, 55, 56, 59, 58, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70} );
dt:h2 << Set Property( "Value Ordering", {51, 52, 55, 56, 59, 58, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70} );
Tab = dt << Tabulate( Show Control Panel( 0 ), Add Table( Row Table( Columns by Categories( :height, :h2 ) ) ) );
dtTab = Tab << Make into data table();
matrix = dtTab << Get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Create new column h2.
3. Set formula for h2.
4. Set height modeling type to ordinal.
5. Define value ordering for height.
6. Define value ordering for h2.
7. Create tabulation with height and h2.
8. Convert tabulation to data table.
9. Extract data as matrix.



## Tabulate using Data Filter
> **Summary**: Data filtering and selection by applying multiple conditions to specific columns, then retrieves the filtered rows.

<!-- Keywords: #DataFiltering, #JSLScripting, #ConditionalSelection, #DataTableManipulation, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Data Filter( Add Filter( columns( :BP 8W, :BP 6M ) ), Add Filter( columns( :BP 12M ) ) );
obj << Match( Filter Columns( :BP 8W, :BP 6M ), Where( :BP 8W > 174.8 & :BP 8W < 184.2 ) );
obj << Match( Filter Columns( :BP 12M ), Where( :BP 12M > 181.9 & :BP 12M < 192.1 ) );
obj << Mode( Select( 1 ) );
r = dt << Get Selected Rows();
cert r = [3, 4, 6, 7, 9, 10, 11, 12, 15, 16, 18, 19, 20];
Close( dt, No Save );
 Preferences( Tabulate( Save grouping as tags in data table export( 0 ) ) );
 Preferences( Tabulate( Scroll Lock row headers in data table export( 0 ) ) );
```

**Code Explanation**:

1. Open data table;
2. Create Data Filter object.
3. Add filter for BP 8W and BP 6M.
4. Add filter for BP 12M.
5. Match BP 8W values between 174.8 and 184.2.
6. Match BP 12M values between 181.9 and 192.1.
7. Set filter mode to Select.
8. Get selected rows.
9. Define certified rows list.
10. Close table without saving.



## Tabulate using Run Script
> **Summary**: Creates a bubble plot and tabulation with progress grouped by direction, followed by row selection and deletion.

<!-- Keywords: #JSLScriptingLanguage, #BubblePlot, #Tabulation, #DataManipulation, #PathDiagram -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bp = dt << Run Script( "Bubble Plot" );
tab = dt << Tabulate( Add Table( Column Table( Analysis Columns( :Progress ) ), Row Table( Grouping Columns( :Direction ) ) ) );
dt << Select All Rows;
dt << Delete Rows;
```

**Code Explanation**:

1. Open data table;
2. Run "Bubble Plot" script.
3. Create tabulation with Progress.
4. Group rows by Direction.
5. Select all rows.
6. Delete selected rows.



## Tabulate using Delete File
> **Summary**: Creates a tabulation report with mean height calculations and sex grouping, utilizing JMP's data manipulation capabilities.

<!-- Keywords: #JMPScriptingLanguage, #DataManipulation, #TabulationReport, #MeanHeightCalculation, #SexGrouping -->

**Code**:
```jsl
Open( "$TEMP/Output.jrn" );
Delete File( "$TEMP/Output.jrn" );
dt = Open("data_table.jmp");
dtab = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table( Column Table( Analysis Columns( :height ), Statistics( Mean ) ), Row Table( Grouping Columns( :sex ) ) )
);
mdt = dtab << Make Into Data Table;
dtab << close window( 1 );
mdt << add rows( 1 );
Column( mdt, "sex" )[3] = "Diff";
Column( mdt, "Mean(height)" )[3] = Column( mdt, "Mean(height)" )[1] - Column( mdt, "Mean(height)" )[2];
vals = Column( mdt, "Mean(height)" ) << get as matrix;
```

**Code Explanation**:

1. Open a journal file.
2. Delete the opened journal file.
3. Open data table.
4. Create a tabulation report.
5. Hide control panel.
6. Add column table for height mean.
7. Add row table for sex grouping.
8. Convert tabulation to data table.
9. Close the tabulation window.
10. Add a new row to data table.
11. Set new row's sex to "Diff".
12. Calculate difference in means.
13. Store mean heights in a matrix.



## Tabulate using New Window
> **Summary**: Creates a tabulate report with grouping columns for sex and marital status, and generates a chart from the report.

<!-- Keywords: #JSLScriptingLanguage, #TabulateReport, #GroupingColumns, #ChartGeneration, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
myTab = New Window( "Test", V List Box( tab = Tabulate( Add Table( Row Table( Grouping Column( :sex, :marital status ) ) ) ) ) );
tab << Show Control Panel( 0 );
tab << Show Chart( 1 );
dt2 = tab << Make Into Data Table( 1 );
m = dt2 << Get All Columns As Matrix();
```

**Code Explanation**:

1. Open data table;
2. Create new window named Test.
3. Add tabulate report to window.
4. Set grouping columns to sex and marital status.
5. Hide control panel.
6. Show chart.
7. Create new data table from report.
8. Retrieve all columns as matrix.



## Tabulate using Add Table
> **Summary**: Creates and modifies a tabulate object to group data by age, sex, name, and perform statistical analysis on weight and height.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #GroupingAndAggregation, #StatisticalAnalysis, #TabulateObject -->

**Code**:
```jsl
dt = Open("data_table.jmp");
tab = tabulate( Add Table( row table( grouping columns( :age ) ) ) );
tab << add table( column table( grouping column( :sex ) ) );
tab << modify table( Column table( grouping columns( :sex ) ), Add( after( grouping column( :sex ) ), statistics( mean ) ) );
tab << modify table( Column table( grouping columns( :sex ) ), Add( after( grouping column( :sex ) ), analysis column( :weight ) ) );
tab << modify table( Column table( grouping columns( :sex ) ), Add( before( analysis column( :weight ) ), analysis column( :height ) ) );
tab << add table( row table( grouping column( :name ) ) );
tab << Make into data table;
tabDt2 = Data Table( 1 );
tabDt1 = Data Table( 2 );
```

**Code Explanation**:

1. Open data table;
2. Create tabulate object.
3. Add row table grouped by age.
4. Add column table grouped by sex.
5. Modify table: add mean after sex.
6. Modify table: add weight after sex.
7. Modify table: add height before weight.
8. Add row table grouped by name.
9. Convert tabulate to data table.
10. Assign data tables to variables.




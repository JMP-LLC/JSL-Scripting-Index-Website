# Compare Data Tables

### Example 1
> **Summary**: Compares two data tables and generates a report, allowing for easy analysis and visualization.

<!-- Keywords: #DataTableComparison, #ReportGeneration, #JMPScriptingLanguage, #DataAnalysisAutomation, #Visualization -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
dt2 = Open("data_table.jmp");
obj = dt1 << Compare Data Tables( compare With( Data Table("data_table") ) );
(obj << Report) << Save Window Report( "$TEMP/comparedt.jrp", embed data( 0 ) );
(obj << Report) << Close Window;
```

**Code Explanation**:

1. Open data table;
2. Open data table;
3. Compare Data Tables.
4. Generate report.
5. Save report.
6. Close report window.



### Example 2
> **Summary**: Compares two data tables, generates a report, and saves it to a temporary location.

<!-- Keywords: #JSLScripting, #DataComparison, #ReportGeneration, #JMP, #Automation -->

**Code**:
```jsl
dt = Open("data_table1.jmp");
dt2 = Open("data_table2.jmp");
obj = dt << Compare Data Tables( compare With( Data Table("data_table") ) );
(obj << Report) << Save Window Report( "$TEMP/comparedt.jrp", embed data( 0 ) );
(obj << Report) << Close Window;
Open( "$TEMP/comparedt.jrp" );
```

**Code Explanation**:

1. Open data table 1;
2. Open data table 2;
3. Compare data_table1 with data_table2.
4. Save comparison report.
5. Close comparison window.
6. Open saved report.



### Example 3
> **Summary**: Compares two data tables and saves a report, allowing for easy analysis and visualization of differences.

<!-- Keywords: #JMPScriptingLanguage, #DataTableComparison, #ReportGeneration, #Automation, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt2 = Open("data_table.jmp");
obj = dt << Compare Data Tables( compare With( Data Table("data_table") ) );
(obj << Report) << Save Window Report( "$TEMP/comparedt.jrp", embed data( 0 ) );
(obj << Report) << Close Window;
```

**Code Explanation**:

1. Open data table 1;
2. Open data table 2;
3. Compare data_table1 with data_table2.
4. Save comparison report.
5. Close comparison window.
6. Open saved report.



### Example 4
> **Summary**: Compares two data tables, linking and unlinking columns as needed, to facilitate data analysis.

<!-- Keywords: #JSLScriptingLanguage, #DataTableComparison, #ColumnLinking, #DataAnalysisAutomation, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt2 = Open("data_table.jmp");
obj = dt << Compare Data Tables( compare With( Data Table("data_table") ) );
obj << Get Script;
obj2 = Data Table("data_table") << Compare Data Tables( Compare with( Data Table("data_table") ), Unlink All, Link( {"ÂßìÂêç", "ÂßìÂêç"} ) );
```

**Code Explanation**:

1. Open data table 1;
2. Open data table 2;
3. Compare data_table1 with data_table2.
4. Get comparison script.
5. Compare data_table1 with data_table2 again.
6. Unlink all comparisons.
7. Link "ÂßìÂêç" columns.



### Example 5
> **Summary**: Compares two data tables in JMP, disabling table property and column attribute comparisons while focusing on data content differences.

<!-- Keywords: #JMPScriptingLanguage, #DataTableComparison, #ScriptAutomation, #TableProperties, #ColumnAttributes -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt2 = Open("data_table.jmp");
obj = dt << Compare Data Tables(
	Compare with( dt2 ),
	Compare Table Properties( 0 ),
	Compare Column Attributes and Properties( 0 ),
	Compare Data,
	Show Difference Summary( 0 ),
	Show Difference Plot( 0 )
);
compscript = Char( obj << Get Script );
```

**Code Explanation**:

1. Open data table;
2. Open data table;
3. Compare data tables.
4. Disable table property comparison.
5. Disable column attribute comparison.
6. Compare data contents.
7. Hide difference summary.
8. Hide difference plot.
9. Retrieve comparison script.
10. Convert script to character.



### Example 6
> **Summary**: Compares two data tables, suppressing the comparison window and generating a character matrix summarizing the differences.

<!-- Keywords: #JSLScriptingLanguage, #DataTableComparison, #MatrixGeneration, #SuppressedWindow, #CharacterOutput -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
dt2 = Open( "$TEMP/" || "DTsave1a.xls" );
res = dt1 << Compare Data Tables( compare With( dt2 ), Compare data, show window( 0 ) );
mtx = Char( res << Get Difference Summary matrix );
```

**Code Explanation**:

1. Open data table;
2. Open DTsave1a.xls table.
3. Compare data tables.
4. Suppress comparison window.
5. Get difference summary matrix.
6. Convert result to character.



### Example 7
> **Summary**: Compares two data tables, displaying a report and saving preferences for detailed comparison settings.

<!-- Keywords: #DataComparison, #JMPScriptingLanguage, #PreferencesManagement, #ReportGeneration, #TableAnalysis -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
dt2 = Open("data_table.jmp");
cdt = dt1 << Compare Data Tables( Compare with( dt2 ) );
(cdt << Report) << close window;
Preferences(
	Data Table Compare Table Variables and Table Scripts( 0 ),
	Data Table Compare Columns Attributes and Properties( 0 ),
	Data Table Compare Data( 0 ),
	Data Table Compare Show Difference Summary( 0 ),
	Data Table Compare Show Difference Plot( 0 )
);
prefsOff = Get Preferences(
	Data Table Compare Table Variables and Table Scripts,
	Data Table Compare Columns Attributes and Properties,
	Data Table Compare Data,
	Data Table Compare Show Difference Summary,
	Data Table Compare Show Difference Plot
);
cdt = dt1 << Compare Data Tables( Compare with( dt2 ) );
(cdt << Report) << close window;
Preferences(
	Data Table Compare Table Variables and Table Scripts( 0 ),
	Data Table Compare Columns Attributes and Properties( 0 ),
	Data Table Compare Data( 1 ),
	Data Table Compare Show Difference Summary( 1 ),
	Data Table Compare Show Difference Plot( 1 )
);
```

**Code Explanation**:

1. Open data table;
2. Open data table;
3. Compare data tables.
4. Close comparison report.
5. Set preferences off.
6. Save current preferences.
7. Compare data tables again.
8. Close comparison report.
9. Set detailed comparison preferences.
10. Restore original preferences.



## Compare Data Tables using Subset
> **Summary**: Compares data table properties, column attributes, and data values between two subsets of a data table, displaying summary and plot results.

<!-- Keywords: #JMPScriptingLanguage, #DataTableComparison, #SubsetData, #ComparisonAnalysis, #DataVisualization -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
dt2 = dt1 << Subset( Rows( 1 :: 40 ), Link to Original Data Table( 0 ) );
ct = dt1 << Compare Data Tables(
	Compare with( dt2 ),
	Compare table properties,
	Compare column attributes and properties,
	Compare data,
	Show difference summary( 0 ),
	Show difference plot( 0 )
);
ct << Show Difference Summary;
ct << Show Difference Plot;
```

**Code Explanation**:

1. Open data table.
2. Subset first 40 rows.
3. Compare original table.
4. Compare table properties.
5. Compare column attributes.
6. Compare data values.
7. Hide difference summary.
8. Hide difference plot.
9. Display difference summary.
10. Display difference plot.



## Compare Data Tables using Random
> **Summary**: Compares two data tables, including table properties and column attributes, to identify differences between them.

<!-- Keywords: #JMPScriptingLanguage, #DataComparison, #TableProperties, #ColumnAttributes, #ComparisonResults -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
dt2 = Open( "$SAMPLE_DATA/data_table.jmp", Random( 0.9 ) );
ct = dt1 << Compare Data Tables(
	Compare with( dt2 ),
	Compare table properties,
	Compare column attributes and properties,
	Compare data,
	Show difference summary( 0 ),
	Show difference plot( 0 )
);
ct << Show Difference Summary;
```

**Code Explanation**:

1. Open data table;
2. Open data table;
3. Compare data tables.
4. Compare table properties.
5. Compare column attributes.
6. Compare data.
7. Hide difference summary.
8. Hide difference plot.
9. Show difference summary.
10. Display comparison results.



## Compare Data Tables using Sort
> **Summary**: Runs data sorting and comparison operations to analyze relationships between age and height in a dataset, utilizing JMP's Sort and Compare Data Tables features.

<!-- Keywords: #JMPScriptingLanguage, #DataSorting, #ComparisonOperations, #DataAnalysis, #StatisticalComputing -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", "private" );
sortDt1 = dt << Sort( By( :age, :height ), Order );
sortDt2 = dt << Sort( By( :age, :height ), Order( ascending, ascending ) );
cdt = sortDt1 << Compare Data Tables( Compare with( sortDt2 ), Compare Data );
sortDt3 = dt << Sort( By( :height ), Order );
sortDt4 = dt << Sort( By( :height ), Order( ascending ) );
cdt2 = sortDt3 << Compare Data Tables( Compare with( sortDt4 ), Compare Data );
```

**Code Explanation**:

1. Open data table.
2. Sort table by age, height.
3. Sort table by age, height ascending.
4. Compare sorted tables.
5. Sort table by height.
6. Sort table by height ascending.
7. Compare sorted tables again.



## Compare Data Tables using Distribution
> **Summary**: Creates and compares a distribution analysis for weight with age, generating an interactive HTML report.

<!-- Keywords: #JSLScriptingLanguage, #DistributionAnalysis, #InteractiveReport, #DataComparison, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Distribution( Continuous Distribution( Column( :weight ) ), Nominal Distribution( Column( :age ) ) );
rpt = obj << report;
expDataTable = rpt[Table Box( 3 )] << make into data table;
obj << Save Interactive HTML( "$TEMP/distrib.htm" );
dtHTMLtable = Open( "$TEMP/distrib.htm", HTML Table( 4 ) );
ct = expDataTable << Compare Data Tables( Compare with( dtHTMLtable ), Compare data );
ct << show window( 0 );
dt << close window;
dtHTMLtable << close window;
expDataTable << close window;
```

**Code Explanation**:

1. Open data table;
2. Create distribution analysis for weight.
3. Add age to distribution analysis.
4. Retrieve report from analysis.
5. Extract third table box into new table.
6. Save interactive HTML report.
7. Open data table.
8. Compare extracted table with HTML table.
9. Hide comparison window.
10. Close original dataset and tables.




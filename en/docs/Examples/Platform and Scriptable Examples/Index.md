# Index

## Index using Select Where
### Example 1
> **Summary**: Creates a bubble plot with dynamic time index and no labels, selecting specific country data from an open JMP data table.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #DataSelection, #TimeIndex, #NoLabels -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Where( :Country == 3365 );
bp = dt << Run Script( "Bubble Plot Dynamic" );
bp << Time Index( 19 );
bp << No Labels;
```

**Code Explanation**:

1. Open data table.
2. Select specific country.
3. Run bubble plot script.
4. Set time index to 19.
5. Disable labels.



### Example 2
> **Summary**: Creates a bubble plot with dynamic time indexing and customizable labels, selecting specific country rows from an open data table.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #DataVisualization, #TimeIndexing, #CustomizableLabels -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Where( :Country == 3365 );
bp = dt << Run Script( "Bubble Plot Dynamic" );
bp << Time Index( 19 );
bp << No Labels;
bp << All Labels;
```

**Code Explanation**:

1. Open data table.
2. Select specific country rows.
3. Run bubble plot script.
4. Set time index to 19.
5. Disable all labels initially.
6. Enable all labels.



### Example 3
> **Summary**: Vizualizes data for a specific country by running a Bubble Plot Dynamic script and setting the time index to 19.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #DataVisualization, #TimeIndex, #ScriptAutomation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Where( :Country == 3365 );
bp = dt << Run Script( "Bubble Plot Dynamic" );
bp << Time Index( 19 );
```

**Code Explanation**:

1. Open data table.
2. Select rows where Country equals 3365.
3. Run Bubble Plot Dynamic script.
4. Set time index to 19.



### Example 4
> **Summary**: Creates a bubble plot with dynamic time index and label settings, selecting specific country data from an open data table.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #DataSelection, #TimeIndex, #LabelSettings -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Where( :Country == 3365 );
bp = dt << Run Script( "Bubble Plot Dynamic" );
bp << Time Index( 19 );
bp << No Labels;
bp << All Labels;
bp << Close Window;
```

**Code Explanation**:

1. Open data table;
2. Select specific country.
3. Run bubble plot script.
4. Set time index to 19.
5. Disable labels.
6. Enable all labels.
7. Close window.



## Index using Select Rows
### Example 1
> **Summary**: Selects and hides rows in a data table, specifically selecting rows 1 to 35 and excluding them from view.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #RowSelection, #HideandExclude, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Clear Select << Select Rows( Index( 1, 35 ) ) << Hide and Exclude;
```

**Code Explanation**:

1. Open data table;
2. Clear previous selections.
3. Select rows 1 to 35.
4. Hide and exclude selected rows.



### Example 2
> **Summary**: Selects and visualizes data rows from a specified range, creating a new data view with cleared selection.

<!-- Keywords: #JSLScriptingLanguage, #DataView, #SelectionManagement, #DataVisualization, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Rows( Index( 60, 90 ) );
dt2 = dt << Data View;
dt2 << Clear Select();
```

**Code Explanation**:

1. Open data table.
2. Select rows 60 to 90.
3. Create data view copy.
4. Clear selection in new view.



## Index using Run Script
> **Summary**: Creates and configures a web report with a bubble plot, including setting index title, description, timestamp, font style, logo, theme, and style.

<!-- Keywords: #JSLScriptingLanguage, #WebReport, #BubblePlot, #DataVisualization, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bubble1 = dt << Run Script( "Bubble Plot with Local Data Filter" );
webrpt = New Web Report();
webrpt << Add Report( bubble1 );
webrpt << Index(
	Title( "test_004_case1_title" ),
	Description( "test_004_case1_desc" ),
	Timestamp( 1 ),
	Font( "Arial Narrow", "Bold Italic" ),
	Logo( "$SAMPLE_IMAGES/pi.gif" ),
	Theme( "Blue" ),
	Style( "SmallList" )
);
dirPath = "$TEMP\TempReports";
rptPath = webrpt << Save( dirPath );
```

**Code Explanation**:

1. Open data table;
2. Run Bubble Plot script.
3. Create new web report.
4. Add bubble plot to report.
5. Set report index title.
6. Set report index description.
7. Include timestamp in index.
8. Set font style for index.
9. Add logo to index.
10. Set theme and style for index.
11. Save report to temporary directory.




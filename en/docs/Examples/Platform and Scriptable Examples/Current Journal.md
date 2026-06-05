# Current Journal

## Current Journal using Chart
### Example 1
> **Summary**: Creates and exports a bar chart with error bars to visualize mean height by sex, utilizing JMP's Chart platform.

<!-- Keywords: #JMPScriptingLanguage, #Chart, #ErrorBars, #BarChart, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
rpt = dt << Chart( X( :sex ), Y( Mean( :height ) ), Add Error Bars to Mean( Standard Error( 2 ) ), Bar Chart( 1 ) );
rpt << journal;
jnl = Current Journal();
isFileExists = File Exists( "$TEMP/errorBar.pdf" );
jnl << save pdf( "$TEMP/errorBar.pdf" );
```

**Code Explanation**:

1. Open data table.
2. Create chart with sex on X-axis.
3. Calculate mean height for each sex.
4. Add error bars for mean height.
5. Use bar chart style.
6. Convert chart to journal.
7. Get current journal reference.
8. Check if PDF file exists.
9. Save journal as PDF.
10. Save PDF to temporary directory.



### Example 2
> **Summary**: Creates and saves a bar chart from a data table, displaying mean height by sex with error bars for standard error.

<!-- Keywords: #JSLScriptingLanguage, #DataVisualization, #BarChart, #ErrorBars, #Journal -->

**Code**:
```jsl
dt = Open("data_table.jmp");
rpt = dt << Chart( X( :sex ), Y( Mean( :height ) ), Add Error Bars to Mean( Standard Error( 2 ) ), Bar Chart( 1 ) );
rpt << journal;
jnl = Current Journal();
jnl << Save Journal( "$TEMP/myTest.jrn" );
```

**Code Explanation**:

1. Open data table.
2. Create chart object.
3. Set X-axis to sex.
4. Set Y-axis to mean height.
5. Add error bars for standard error.
6. Display as bar chart.
7. Convert report to journal.
8. Get current journal.
9. Save journal to file.



## Current Journal using Window
> **Summary**: Creates and manipulates windows, data tables, charts, and journals in JMP, including setting window titles, renaming data tables, generating bar charts with error bars, and saving reports as PDFs.

<!-- Keywords: #JMP, #WindowHandler, #DataTables, #Charts, #Journaling -->

**Code**:
```jsl
myWin = Window( "estimatingPi" );
myWin << set window title( "Bla Bla Bla" );
myWin << get window title();
myWin << closewindow();
lst = Get Log( -6 );
dt = Open("data_table.jmp");
dt << setname( "Ding" );
myWin = Window( "Ding" );
myWin << closewindow();
dt = Open("data_table.jmp");
rpt = dt << Chart( X( :sex ), Y( Mean( :height ) ), Add Error Bars to Mean( Standard Error( 2 ) ), Bar Chart( 1 ) );
rpt << journal;
jnl = Current Journal();
isFileExists = File Exists( "$TEMP/errorBar.pdf" );
jnl << save pdf( "$TEMP/errorBar.pdf" );
```

**Code Explanation**:

1. Open estimatingPi.jsl script.
2. Create window named "estimatingPi".
3. Set window title to "Bla Bla Bla".
4. Retrieve and print window title.
5. Close the window.
6. Get log entries from -6.
7. Open data table.
8. Rename data table to "Ding".
9. Create window named "Ding".
10. Close the window.
11. Reopen data table.
12. Create bar chart with error bars.
13. Convert report to journal.
14. Save journal as PDF.




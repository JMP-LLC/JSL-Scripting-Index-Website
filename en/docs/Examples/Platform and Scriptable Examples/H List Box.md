# H List Box

## H List Box using New Window
### Example 1
> **Summary**: Creates a new window with a Bivariate script, which runs on a data table and saves the report with embedded data.

<!-- Keywords: #JSLScriptingLanguage, #BivariateAnalysis, #DataVisualization, #WindowCreation, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
w = New Window( "Neg filter", H List Box( Text Box( "Bivariate" ), biv = dt << Run Script( "Bivariate" ) ) );
w << Save Window Report( "$TEMP/image.jrp", embed data( 0 ) );
w << Close Window;
```

**Code Explanation**:

1. Open data table.
2. Create new window.
3. Add text box to window.
4. Run Bivariate script on data table.
5. Save window report.
6. Embed data in report.
7. Close window.



### Example 2
> **Summary**: Creates a new window with a bubble plot region, sets background color, and saves the report to a temporary file.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #NewWindow, #ReportSaving, #DataVisualization -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp", private );
win = New Window( "private data", H List Box( bp = dt << Run Script( "Bubble Plot Region" ) ) );
Report( bp )[FrameBox( 1 )] << Set Background Color( "Light Yellow" );
win << Save Window Report( "$TEMP/privatetable.jrp", embed data( 0 ) );
win << Close Window;
```

**Code Explanation**:

1. Open data table.
2. Create new window.
3. Run bubble plot script.
4. Change background color.
5. Save window report.
6. Close window.



### Example 3
> **Summary**: Creates and customizes a bubble plot report, including changing the frame background color and saving the window as a JMP report.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #DataVisualization, #ReportGeneration, #Customization -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp", private );
win = New Window( "private data", H List Box( bp = dt << Run Script( "Bubble Plot Region" ) ) );
Report( bp )[FrameBox( 1 )] << Set Background Color( "Light Yellow" );
win << Save Window Report( "$TEMP/privatetable.jrp", embed data( 0 ) );
win << Close Window;
Open( "$TEMP/privatetable.jrp" );
```

**Code Explanation**:

1. Open data table.
2. Create new window.
3. Run bubble plot script.
4. Change frame background color.
5. Save window report.
6. Close window.
7. Open saved report.




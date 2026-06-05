# Rect

## Rect using Text Edit Box
### Example 1
> **Summary**: Creates a bar chart from a data table, utilizing text edit boxes, titles, labels, and rectangles for customization.

<!-- Keywords: #JMPScriptingLanguage, #DataVisualization, #BarChart, #CustomizationOptions, #InteractiveAnalysis -->

**Code**:
```jsl
cert text edit bx = {Text Edit Box( "N", default font id( 9 ), wrapWidth( 277 ), justification( 1 ), vjustification( 1 ), left )};
cert title = {Title( "Type" )};
cert labels = {"Labels", Labels( "Aerospace", "Beverages", "Computer", "Drugs", "Oil", "Soap" )};
cert rect = {Rect( 0.855595667870036, 11, 0.945848375451264, 0, 1 ), Rect( 0.693140794223827, 27, 0.783393501805054, 0, 1 ),
Rect( 0.530685920577617, 12, 0.620938628158845, 0, 1 ), Rect( 0.371841155234657, 22, 0.462093862815885, 0, 1 ),
Rect( 0.209386281588448, 7, 0.299638989169675, 0, 1 ), Rect( 0.0469314079422383, 18, 0.137184115523466, 0, 1 )};
dt = Open("data_table.jmp");
obj = dt << Chart(
	X( :Type ),
	Y( N ),
	Level[1] << Colors( 72 ),
	Level[2] << Colors( 72 ),
	Level[3] << Colors( 72 ),
	Level[4] << Colors( 72 ),
	Level[5] << Colors( 72 ),
	Level[6] << Colors( 72 ),
	Bar Chart( 1 )
);
rpt = obj << report;
```

**Code Explanation**:

1. Define text edit box.
2. Define title.
3. Define labels.
4. Define rectangles.
5. Open data table.
6. Create chart object.
7. Set X axis variable.
8. Set Y axis variable.
9. Set colors for levels.
10. Generate bar chart.



### Example 2
> **Summary**: Creates a bar chart report from a data table, defining text edit box, title, labels, and rectangles for visualization.

<!-- Keywords: #JSLScriptingLanguage, #DataVisualization, #BarChart, #JMP, #ReportGeneration -->

**Code**:
```jsl
cert textedit bx = {Text Edit Box( "N", default font id( 9 ), wrapWidth( 277 ), justification( 1 ), vjustification( 1 ), left )};
cert title = {Title( "age" )};
cert labels = {"Labels", Labels( "12", "13", "14", "15", "16", "17" )};
cert rect = {Rect( 0.855595667870036, 3, 0.945848375451264, 0, 1 ), Rect( 0.693140794223827, 3, 0.783393501805054, 0, 1 ),
Rect( 0.530685920577617, 7, 0.620938628158845, 0, 1 ), Rect( 0.371841155234657, 12, 0.462093862815885, 0, 1 ),
Rect( 0.209386281588448, 7, 0.299638989169675, 0, 1 ), Rect( 0.0469314079422383, 8, 0.137184115523466, 0, 1 )};
dt = Open("data_table.jmp");
obj = dt << Chart(
	X( :age ),
	Y( N ),
	Level[1] << Colors( 72 ),
	Level[2] << Colors( 72 ),
	Level[3] << Colors( 72 ),
	Level[4] << Colors( 72 ),
	Level[5] << Colors( 72 ),
	Level[6] << Colors( 72 ),
	Bar Chart( 1 )
);
rpt = obj << report;
```

**Code Explanation**:

1. Define text edit box.
2. Define title.
3. Define labels.
4. Define rectangles.
5. Open data table.
6. Create chart object.
7. Set X axis to age.
8. Set Y axis to N.
9. Set bar colors.
10. Generate bar chart report.




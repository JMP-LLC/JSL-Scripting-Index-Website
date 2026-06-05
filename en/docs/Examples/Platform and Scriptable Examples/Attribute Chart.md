# Attribute Chart

### Example 1
> **Summary**: Visualizes the distribution of baby sleep patterns by creating an Attribute Chart with response variables A, B, and C, part variable Part, standard variable Standard, and enabling the Effectiveness Report.

<!-- Keywords: #AttributeChart, #DistributionAnalysis, #JMPScriptingLanguage, #DataVisualization, #EffectivenessReport -->

**Code**:
```jsl
// Attribute Chart
// Open data table
dt = Open("data_table.jmp");
// Attribute Chart
Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard ),
	Effectiveness Report( 1 )
);
```

**Code Explanation**:

1. Open data table.
2. Create attribute chart.
3. Set response variables.
4. Set part variable.
5. Set standard variable.
6. Enable effectiveness report.



### Example 2
> **Summary**: Creates an Attribute Chart to analyze data from a table, with customization options for scale boxes and formatting.

<!-- Keywords: #AttributeChart, #DataAnalysis, #Customization, #JSLScripting, #Visualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard ),
	Variability Chart( 1 ),
	Connect Effectiveness Points( 1 ),
	SendToReport(
		Dispatch( {"Gauge Attribute Chart"}, "2", ScaleBox, {Format( "Custom", Formula( Char( value ) || "%" ), 12 )} ),
		Dispatch( {"Gauge Attribute Chart"}, "2", ScaleBox( 2 ), {Format( "Custom", Formula( Round( value ^ 0.5, 2 ) ), 12 )} )
	)
);
```

**Code Explanation**:

1. Open data_table data
2. Create Attribute Chart.
3. Set Y variables: A, B, C.
4. Set X variable: Part.
5. Use Standard variable.
6. Enable Variability Chart.
7. Connect Effectiveness Points.
8. Customize first scale box.
9. Format values as percentage.
10. Customize second scale box.
11. Format values as square root rounded.



### Example 3
> **Summary**: Creates an attribute chart to visualize relationships between variables A, B, and C across different parts, utilizing standardization for effective analysis.

<!-- Keywords: #AttributeChart, #DataVisualization, #JMPScriptingLanguage, #Standardization, #PartVariable -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = Attribute Chart( Y( :A, :B, :C ), X( :Part ), Standard( :Standard ) );
```

**Code Explanation**:

1. Set default names.
2. Open data table.
3. Create attribute chart.
4. Set response variables.
5. Set part variable.
6. Set standard variable.



### Example 4
> **Summary**: Creates an Attribute Chart with customized settings, including response variables A, B, and C, part variable, standard variable, variability chart, and effectiveness points.

<!-- Keywords: #AttributeChart, #Customization, #EffectivenessPoints, #VariabilityChart, #JSLScripting -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard ),
	Variability Chart( 1 ),
	Effectiveness Report( 0 ),
	Show Effectiveness Points( 1 ),
	Connect Effectiveness Points( 1 ),
	Agreement by Rater Confid Intervals( 0 ),
	SendToReport(
		Dispatch( {}, "Attribute Gauge", OutlineBox,
			{Set Title(
				"Attribute Gauge Chart, Show Agreement Points, connect Agreement Points, Show Agreement grand Mean, Show Effectiveness Points, Connect Effectiveness Points"
			)}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create attribute chart object.
3. Set response variables A, B, C.
4. Set part variable.
5. Set standard variable.
6. Enable variability chart.
7. Disable effectiveness report.
8. Show effectiveness points.
9. Connect effectiveness points.
10. Customize chart title.



### Example 5
> **Summary**: Creates an attribute chart to analyze variables A, B, and C with respect to part and standard, including a variability chart.

<!-- Keywords: #AttributeChart, #VariabilityChart, #DataAnalysis, #JMPScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Attribute Chart( Y( :A, :B, :C ), X( :Part ), Standard( :Standard ), Variability Chart( 1 ) );
```

**Code Explanation**:

1. Open data table.
2. Create attribute chart object.
3. Set response variables A, B, C.
4. Set part variable.
5. Set standard variable.
6. Enable variability chart.



### Example 6
> **Summary**: Creates an attribute chart from a data table, specifying response variables A, B, and C, part variable Part, and standard variable Standard.

<!-- Keywords: #AttributeChart, #DataTable, #JSLScripting, #PartVariable, #StandardVariable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Attribute Chart( Y( :A, :B, :C ), X( :Part ), Standard( :Standard ) );
obj << Save Script to Data Table("data_table");
```

**Code Explanation**:

1. Open data table.
2. Create attribute chart.
3. Set response variables.
4. Set part variable.
5. Set standard variable.
6. Save script to data table.
7. Name script "testscript".



### Example 7
> **Summary**: Creates an Attribute Chart with response variables A, B, and C, factor variable Part, standard variable Standard, and shows effectiveness points, connecting them to display agreement intervals.

<!-- Keywords: #AttributeChart, #EffectivenessPoints, #VariabilityChart, #StandardVariable, #JSLScripting -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard ),
	Variability Chart( 1 ),
	Effectiveness Report( 0 ),
	Show Effectiveness Points( 1 ),
	Connect Effectiveness Points( 1 ),
	Agreement by Rater Confid Intervals( 0 ),
	SendToReport(
		Dispatch( {}, "Attribute Gauge", OutlineBox,
			{Set Title(
				"Attribute Gauge Chart, Show Agreement Points, connect Agreement Points, Show Agreement grand Mean, Show Effectiveness Points, Connect Effectiveness Points"
			)}
		)
	)
);
```

**Code Explanation**:

1. Open table.
2. Create attribute chart.
3. Set response variables.
4. Set factor variable.
5. Set standard variable.
6. Enable variability chart.
7. Disable effectiveness report.
8. Show effectiveness points.
9. Connect effectiveness points.
10. Set chart title.



### Example 8
> **Summary**: Creates and analyzes an attribute chart to explore relationships between variables A, B, C, and Part, with missing value codes set and report generated.

<!-- Keywords: #AttributeChart, #DataAnalysis, #JMPScripting, #MissingValueCodes, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Attribute Chart( Y( :A, :B, :C ), X( :Part ), Standard( :Standard ), Variability Chart( 1 ), Connect Effectiveness Points( 1 ) );
:Part << Set Property( "Missing Value Codes", {1} );
obj2 = obj << Redo Analysis;
rpt = obj2 << Report;
actN = (rpt[Number Col Box( 4 )][1]);
```

**Code Explanation**:

1. Open data table.
2. Create attribute chart.
3. Set missing value code.
4. Redo analysis.
5. Generate report.
6. Extract number column box.
7. Retrieve first element.



## Attribute Chart using New Column
> **Summary**: Creates an Attribute Chart with multiple effects and generates a profiler plot, utilizing the 'New Column' and 'Attribute Chart' functions in JMP.

<!-- Keywords: #JMPScriptingLanguage, #AttributeChart, #MultipleEffects, #ProfilerPlot, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << add rows( 78599 );
dt << New Column( "row", Numeric, "Continuous", Format( "Best", 12 ), Formula( Row() ) );
obj = dt << Attribute Chart( Y( :A, :B, :C ), X( :Part ) );
```

**Code Explanation**:

1. Open data table;
2. Add 78599 rows.
3. Create "row" column.
4. Set column formula to row number.
5. Generate Attribute Chart.
6. Set Y variables: A, B, C.
7. Set X variable: Part.




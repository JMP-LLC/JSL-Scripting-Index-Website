# Max

## Max using Run Script
> **Summary**: Compares distributions in a Weibull probability scale, sending report settings to dispatch 'Compare Distributions' with customized scale and tick values.

<!-- Keywords: #JMPScriptingLanguage, #WeibullDistribution, #ReportSettings, #Dispatch, #ScaleBox -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Run Script( "Life Distribution" );
obj << SendToReport(
	Dispatch( {"Compare Distributions"}, "2", ScaleBox,
		{Scale( "Weibull Probability" ), Min( 1.00031094518727e-13 ), Max( 0.547566849390804 ), Inc( 0.1 ), Minor Ticks( 0 )}
	)
);
```

**Code Explanation**:

1. Open table.
2. Run script "Life Distribution".
3. Send report settings.
4. Dispatch to "Compare Distributions".
5. Set scale to "Weibull Probability".
6. Define minimum scale value.
7. Define maximum scale value.
8. Set increment value.
9. Disable minor ticks.



## Max using Chart
> **Summary**: Creates a range chart with multiple Y axes, connecting points for the third axis, and visualizing high, low, and close values over time.

<!-- Keywords: #JMPScriptingLanguage, #RangeChart, #MultipleYAxes, #DataVisualization, #TimeSeriesAnalysis -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Chart( X( :YearWeek ), Y( Max( :High ), Min( :Low ), Mean( :Close ) ), Range Chart( 1 ), Y[3] << Connect Points( 1 ) );
```

**Code Explanation**:

1. Open data table;
2. Create chart object.
3. Set X axis to YearWeek.
4. Set Y axis to High, Low, Close.
5. Add range chart.
6. Connect points for third Y axis.
7. Save chart object.




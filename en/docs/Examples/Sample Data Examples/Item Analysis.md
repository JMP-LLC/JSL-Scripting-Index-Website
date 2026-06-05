# Item Analysis

> **Summary**: Perform item analysis using a 2-Parameter Logistic (2PL) model and visualize the results with dual plots, setting scale and reference lines.

<!-- Keywords: #ItemAnalysis, #Cross, #Format, #Line, #Max -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/MathScienceTest.jmp");
// Item Analysis
Item Analysis(
	Y(
		:Q1, :Q2, :Q3, :Q4, :Q5, :Q6, :Q7,
		:Q8, :Q9, :Q10, :Q11, :Q12, :Q13,
		:Q14
	),
	Model( "Logistic 2PL" ),
	Number of Plots Across( 2 ),
	SendToReport(
		Dispatch( {"Dual Plot"}, "1",
			ScaleBox,
			{Scale( "Linear" ),
			Format( "Fixed Dec", 1 ),
			Min( 0 ), Max( 2 ),
			Inc( 0.5 ), Minor Ticks( 1 ),
			Add Ref Line(
				1, "Dotted", "Black"
			)}
		),
		Dispatch( {"Dual Plot"}, "2",
			ScaleBox,
			{Scale( "Linear" ),
			Format( "Best" ), Min( -4 ),
			Max( 4 ), Inc( 1 ),
			Minor Ticks( 7 )}
		)
	)
);
```


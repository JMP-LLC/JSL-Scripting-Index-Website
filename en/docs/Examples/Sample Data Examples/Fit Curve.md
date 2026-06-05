# Fit Curve

> **Summary**: Analyze and Fit a Curve of Dissolution with Respect to Time, Including a Grouping by Batch and Utilizing F2 Analysis with Bootstrapping.

<!-- Keywords: #FitCurve, #alpha, #F2Analysis, #Group, #ID -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Dissolution DoE Verification Runs.jmp");
// Fit Curve of Dissolution by Time
Fit Curve(
	Y( :Dissolution ),
	X( :Time ),
	Group( :Batch ),
	F2 Analysis(
		Unit ID( :Tablet in Batch ),
		Alpha( 0.1 ),
		Reference Level( "Reference" ),
		Bootstrap Samples( 2500 )
	)
);
```


# Multiple Correspondence Analysis

## Example 1
> **Summary**: Generate multiple correspondence analysis

<!-- Keywords: #CorrespondenceAnalysis, #MultipleCorrespondenceAnalysis, #CellChiSquare, #CrossTable, #Square -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Car Poll.jmp");
// Multiple Correspondence Analysis
Multiple Correspondence Analysis(
	Y(
		:sex, :marital status, :country,
		:size
	),
	Cross Table(
		Cell Chi Square( 0 ),
		Show Total( 1 )
	)
);
```

## Example 2
> **Summary**: Generate multiple correspondence analysis with a supplementary variable

<!-- Keywords: #CorrespondenceAnalysis, #MultipleCorrespondenceAnalysis, #CellChiSquare, #columns, #CrossTable -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Car Poll.jmp");
// Multiple Correspondence Analysis - with Supplementary Variable
Multiple Correspondence Analysis(
	Y( :country, :size ),
	Z( :sex ),
	Cross Table(
		Cell Chi Square( 0 ),
		Show Total( 1 )
	),
	Cross Table of Supplementary Columns(
		Cell Chi Square( 0 ),
		Show Total( 1 )
	)
);
```

## Example 3
> **Summary**: Perform Multiple Correspondence Analysis (MCA) on categorical variables TV, Film, Art, and Restaurant, and display the total cross table.

<!-- Keywords: #CorrespondenceAnalysis, #MultipleCorrespondenceAnalysis, #CrossTable -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Employee Taste.jmp");
// MCA-level
Multiple Correspondence Analysis(
	Y( :TV, :Film, :Art, :Restaurant ),
	Cross Table( Show Total( 1 ) )
);
```

## Example 4
> **Summary**: Perform Multiple Correspondence Analysis (MCA) on categorical data variables with Subject as the supplementary variable, and generate a cross table with total values shown.

<!-- Keywords: #CorrespondenceAnalysis, #MultipleCorrespondenceAnalysis, #CrossTable -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Employee Taste.jmp");
// MCA-subject
Multiple Correspondence Analysis(
	Y( :TV, :Film, :Art, :Restaurant ),
	X( :Subject ),
	Cross Table( Show Total( 1 ) )
);
```

## Example 5
> **Summary**: Perform multiple correspondence analysis on categorical data, stratifying by gender, and customize the report display to include supplementary columns and specific dimension selection.

<!-- Keywords: #CorrespondenceAnalysis, #MultipleCorrespondenceAnalysis, #Close, #columns, #CrossTable -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Employee Taste.jmp");
// MCA-level-supp-gender
Multiple Correspondence Analysis(
	Y( :TV, :Film, :Art, :Restaurant ),
	Z( :Gender ),
	Cross Table( Show Total( 1 ) ),
	Cross Table of Supplementary Columns(
		Show Total( 1 )
	),
	Select dimension( 1, 3 ),
	SendToReport(
		Dispatch( {}, "Variable Summary",
			OutlineBox,
			{Close( 1 )}
		),
		Dispatch(
			{"Correspondence Analysis"},
			"2", ScaleBox,
			{Format( "Fixed Dec", 12, 0 ),
			Min( -2 ), Max( 3.5 ),
			Inc( 1 ), Minor Ticks( 1 )}
		),
		Dispatch(
			{"Correspondence Analysis"},
			"Details", OutlineBox,
			{Close( 1 )}
		)
	)
);
```

## Example 6
> **Summary**: Perform Multiple Correspondence Analysis with supplementary rows for subject and gender, and generate detailed coordinates and scaling for the first three dimensions.

<!-- Keywords: #CorrespondenceAnalysis, #MultipleCorrespondenceAnalysis, #Close, #CrossTable, #CrossTableofSupplementaryRows -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Employee Taste.jmp");
// MCA-subject-supp-gender
Multiple Correspondence Analysis(
	Y( :TV, :Film, :Art, :Restaurant ),
	X( :Subject ),
	Z( :Gender ),
	Cross Table( Show Total( 1 ) ),
	Cross Table of Supplementary Rows(
		Show Total( 1 )
	),
	Show Coordinates( 1 ),
	Select dimension( 1, 3 ),
	SendToReport(
		Dispatch( {}, "Variable Summary",
			OutlineBox,
			{Close( 1 )}
		),
		Dispatch(
			{"Correspondence Analysis"},
			"2", ScaleBox,
			{Format( "Fixed Dec", 12, 0 ),
			Min( -2 ), Max( 3.5 ),
			Inc( 1 ), Minor Ticks( 1 )}
		),
		Dispatch(
			{"Correspondence Analysis"},
			"Details", OutlineBox,
			{Close( 1 )}
		),
		Dispatch(
			{"Correspondence Analysis"},
			"Row and Column Coordinates",
			OutlineBox,
			{Close( 1 )}
		)
	)
);
```

## Example 7
> **Summary**: Perform Multiple Correspondence Analysis (MCA) on the given data table, fitting supplementary variables by age.

<!-- Keywords: #CorrespondenceAnalysis, #MultipleCorrespondenceAnalysis, #Close, #columns, #CrossTable -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Employee Taste.jmp");
// MCA-level-supp-age
Multiple Correspondence Analysis(
	Y( :TV, :Film, :Art, :Restaurant ),
	Z( :Age ),
	Cross Table( Show Total( 1 ) ),
	Cross Table of Supplementary Columns(
		Show Total( 1 )
	),
	SendToReport(
		Dispatch( {}, "Variable Summary",
			OutlineBox,
			{Close( 1 )}
		),
		Dispatch(
			{"Correspondence Analysis"},
			"Details", OutlineBox,
			{Close( 1 )}
		)
	)
);
```

## Example 8
> **Summary**: Perform Multiple Correspondence Analysis (MCA) with 'TV', 'Film', 'Art', and 'Restaurant' as categorical response variables, 'Subject' as a supplementary row variable, and 'Age' as a supplementary column variable, and visualize the results in a 2D plot.

<!-- Keywords: #CorrespondenceAnalysis, #MultipleCorrespondenceAnalysis, #Close, #CrossTable, #CrossTableofSupplementaryRows -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Employee Taste.jmp");
// MCA-subject-supp-age
Multiple Correspondence Analysis(
	Y( :TV, :Film, :Art, :Restaurant ),
	X( :Subject ),
	Z( :Age ),
	Cross Table( Show Total( 1 ) ),
	Cross Table of Supplementary Rows(
		Show Total( 1 )
	),
	Select dimension( 1, 3 ),
	SendToReport(
		Dispatch( {}, "Variable Summary",
			OutlineBox,
			{Close( 1 )}
		),
		Dispatch(
			{"Correspondence Analysis"},
			"2", ScaleBox,
			{Format( "Fixed Dec", 12, 0 ),
			Min( -2 ), Max( 3.5 ),
			Inc( 1 ), Minor Ticks( 1 )}
		),
		Dispatch(
			{"Correspondence Analysis"},
			"Details", OutlineBox,
			{Close( 1 )}
		)
	)
);
```

## Example 9
> **Summary**: Perform Multiple Correspondence Analysis on a dataset with Year as the dependent variable, Region and ID as supplementary variables, and Population as the frequency variable, including chi-square measures and totals in the cross tables.

<!-- Keywords: #CorrespondenceAnalysis, #MultipleCorrespondenceAnalysis, #CellChiSquare, #CrossTable, #CrossTableofSupplementaryRows -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/US Regional Population.jmp");
// Multiple Correspondence Analysis
Multiple Correspondence Analysis(
	Y( :Year ),
	X( :Region ),
	Freq( :Population ),
	Supplementary ID( :ID ),
	Cross Table(
		Cell Chi Square( 0 ),
		Show Total( 1 )
	),
	Cross Table of Supplementary Rows(
		Cell Chi Square( 0 ),
		Show Total( 1 )
	)
);
```


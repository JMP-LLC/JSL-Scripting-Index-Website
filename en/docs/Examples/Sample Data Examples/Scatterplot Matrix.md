# Scatterplot Matrix

> **Summary**: Create a lower triangular scatterplot matrix for analyzing the correlations between various fatty acid components in olive oil using the Scatterplot Matrix function.

<!-- Keywords: #ScatterplotMatrix, #FitLine, #Format, #Line, #MatrixFormat -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Olive Oil.jmp");
// Scatterplot Matrix
Scatterplot Matrix(
	Y(
		:palmitic, :palmitoleic, :stearic,
		:oleic, :linoleic, :linolenic,
		:arachidic, :eicosenoic
	),
	Matrix Format( "Lower Triangular" ),
	Fit Line( 0 )
);
```


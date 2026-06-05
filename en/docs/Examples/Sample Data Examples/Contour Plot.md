# Contour Plot

## Example 1
> **Summary**: Generate a contour plot

<!-- Keywords: #ContourPlot, #Boundary, #FillAreas, #Plot, #ShowBoundary -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Amplitude 21.jmp");
// Contour Plot
Contour Plot(
	X( x, y ),
	Y( :Amplitude ),
	Show Contours( 1 ),
	Show Boundary( 1 ),
	Fill Areas( 1 )
);
```

## Example 2
> **Summary**: Create a contour plot with X, Y, and Z variables and display boundaries and filled areas.

<!-- Keywords: #ContourPlot, #Boundary, #FillAreas, #Plot, #ShowBoundary -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Little Pond.jmp");
// Contour Plot
Contour Plot(
	X( :X, :Y ),
	Y( :Z ),
	Show Contours( 1 ),
	Show Boundary( 1 ),
	Fill Areas( 1 )
);
```


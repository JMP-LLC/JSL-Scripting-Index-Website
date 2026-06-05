# Ternary Plot

## Example 1
> **Summary**: Generate a ternary plot with the variables CuSO4, Na2S2O3, and Glyoxal.

<!-- Keywords: #TernaryPlot, #Plot, #Report, #Size -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Donev Mixture Data.jmp");
// Ternary Plot
obj =
Ternary Plot(
	Y( :CuSO4, :Na2S2O3, :Glyoxal )
);
Report( obj )[framebox( 1 )] <<
Marker Size( 4 );
```

## Example 2
> **Summary**: Create a Ternary Plot for visualizing the composition of Propanol, Butanol, and Pentanol using the NMR DoE data table from the Sample Data directory .

<!-- Keywords: #TernaryPlot, #Mode, #Plot, #Report, #SendToReport -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Functional Data/NMR DoE.jmp");
// Ternary Plot
Ternary Plot(
	X( :Propanol, :Butanol, :Pentanol ),
	SendToReport(
		Dispatch( {}, "Ternary Plot",
			FrameBox,
			{Marker Size( 6 ),
			Marker Drawing Mode(
				"Normal"
			)}
		)
	)
);
```

## Example 3
> **Summary**: Create a ternary plot to visualize the relationships between three variables: Screech, Whine, and Roar.

<!-- Keywords: #TernaryPlot, #Plot -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Hearing Loss.jmp");
// Ternary Plot
Ternary Plot(
	Y( :Screech, :Whine, :Roar )
);
```

## Example 4
> **Summary**: Create a ternary plot using the specified variables.

<!-- Keywords: #TernaryPlot, #Plot -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Plasticizer 78.jmp");
// Ternary Plot
Ternary Plot( Y( :p1, :p2, :p3 ) );
```

## Example 5
> **Summary**: Construct a ternary plot using three response variables in the provided dataset.

<!-- Keywords: #TernaryPlot, #Plot, #Report, #Size -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Plasticizer.jmp");
// Ternary Plot
obj = Ternary Plot( Y( :p1, :p2, :p3 ) );
Report( obj )[framebox( 1 )] <<
Marker Size( 4 );
```

## Example 6
> **Summary**: Create a ternary plot for the variables Yat, Yee, and Sam.

<!-- Keywords: #TernaryPlot, #Plot -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Pogo Jumps.jmp");
// Ternary Plot
Ternary Plot( Y( :Yat, :Yee, :Sam ) );
```


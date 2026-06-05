# Parallel Plot

## Example 1
> **Summary**: Create a Parallel Plot with uniform scaling, centered at zero, including variables related to fatty acids found in olive oil, and filter the data to only include observations where the Region is South. Adjust the frame size of the plot to 719 by 250 pixels.

<!-- Keywords: #DataFilter, #ParallelPlot, #AddFilter, #Centeratzero, #columns -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Olive Oil.jmp");
// Parallel Plot
Parallel Plot(
	Scale Uniformly( 0 ),
	Center at zero( 0 ),
	Y(
		:palmitic, :palmitoleic, :stearic,
		:oleic, :linoleic, :linolenic,
		:arachidic, :eicosenoic
	),
	Local Data Filter(
		Location( {126, 115} ),
		Add Filter(
			columns(
				:Subregion, :Region
			),
			Where( :Region == "South" ),
			Display(
				:Subregion,
				Size( 210, 172 ),
				List Display
			)
		),
		Mode(
			Select( 0 ),
			Show( 1 ),
			Include( 1 )
		)
	),
	SendToReport(
		Dispatch( {}, "Parallel Coord",
			FrameBox,
			{Frame Size( 719, 250 )}
		)
	)
);
```

## Example 2
> **Summary**: Generate a parallel plot to visualize the changes in verbal and math scores from 1992 to 2004 across multiple years.

<!-- Keywords: #ParallelPlot, #Plot -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/SAT.jmp");
// Parallel Plot
Parallel Plot(
	Y(
		:"2004 Verbal"n, :"2004 Math"n,
		:"2003 Verbal"n, :"2003 Math"n,
		:"2002 Verbal"n, :"2002 Math"n,
		:"2001 Verbal"n, :"2001 Math"n,
		:"1999 Verbal"n, :"1999 Math"n,
		:"1994 Verbal"n, :"1994 Math"n,
		:"1997 Verbal"n, :"1997 Math"n,
		:"1992 Verbal"n, :"1992 Math"n
	)
);
```

## Example 3
> **Summary**: Create a parallel plot for visualizing multiple variables in the Tablet Production data set.

<!-- Keywords: #ParallelPlot, #FrameSize, #Plot, #Report, #SendToReport -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Tablet Production.jmp");
// Parallel Plot
Parallel Plot(
	Y(
		:Lot Acceptance, :Disso,
		:API Particle Size, :Mill Time,
		:Screen Size,
		:Mag. Stearate Supplier,
		:Lactose Supplier,
		:Sugar Supplier, :Talc Supplier,
		:Blend Time, :Blend Speed,
		:Compressor, :Force,
		:Coating Supplier,
		:Coating Viscosity, :Inlet Temp,
		:Exhaust Temp, :Spray Rate,
		:Atomizer Pressure
	),
	SendToReport(
		Dispatch( {}, "Parallel Coord",
			FrameBox,
			Frame Size( 1082, 462 )
		),
		Dispatch( {}, "", NomAxisBox,
			Rotated Tick Labels( 1 )
		)
	)
);
```


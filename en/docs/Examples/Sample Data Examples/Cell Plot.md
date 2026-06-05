# Cell Plot

> **Summary**: Generate a cell plot to visualize the performance of verbal and math scores across different years for each state.

<!-- Keywords: #CellPlot, #Label, #Plot -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/SAT.jmp");
// Cell Plot
Cell Plot(
	Y(
		:"2004 Verbal"n, :"2004 Math"n,
		:"2003 Verbal"n, :"2003 Math"n,
		:"2002 Verbal"n, :"2002 Math"n,
		:"2001 Verbal"n, :"2001 Math"n,
		:"1999 Verbal"n, :"1999 Math"n,
		:"1994 Verbal"n, :"1994 Math"n,
		:"1997 Verbal"n, :"1997 Math"n,
		:"1992 Verbal"n, :"1992 Math"n
	),
	Label( :State )
);
```


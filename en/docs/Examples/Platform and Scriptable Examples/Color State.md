# Color State

## Color State using Row State
> **Summary**: Sets row states for rows 139 to 150 in a data table, using the Combine States function with Color State

<!-- Keywords: #JSLScriptingLanguage, #RowState, #CombineStates, #ColorState, #DataTable -->

**Code**:
```jsl
Open("data_table.jmp");
Row State( 139 ) = Combine States( Color State( 4 ) );
Row State( 140 ) = Combine States( Color State( 4 ) );
Row State( 141 ) = Combine States( Color State( 4 ) );
Row State( 142 ) = Combine States( Color State( 4 ) );
Row State( 143 ) = Combine States( Color State( 4 ) );
Row State( 144 ) = Combine States( Color State( 4 ) );
Row State( 145 ) = Combine States( Color State( 4 ) );
Row State( 146 ) = Combine States( Color State( 4 ) );
Row State( 147 ) = Combine States( Color State( 4 ) );
Row State( 148 ) = Combine States( Color State( 4 ) );
Row State( 149 ) = Combine States( Color State( 4 ) );
Row State( 150 ) = Combine States( Color State( 4 ) );
```

**Code Explanation**:

1. Open data table;
2. Set row state for row 139.
3. Set row state for row 140.
4. Set row state for row 141.
5. Set row state for row 142.
6. Set row state for row 143.
7. Set row state for row 144.
8. Set row state for row 145.
9. Set row state for row 146.
10. Set row state for row 147.
11. Set row state for row 148.
12. Set row state for row 149.
13. Set row state for row 150.



## Color State using New Column
> **Summary**: Creates a color palette by iterating through RGB values and generating a table with corresponding colors.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #RGBColors, #LoopingStructures, #TableGeneration -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = New Table( "colors",
	New Column( "R" ),
	New Column( "G" ),
	New Column( "B" ),
	New Column( "C" )
);
For Each( {red}, 0 :: 1 :: .1,
	For Each( {green}, 0 :: 1 :: .1,
		For Each( {blue}, 0 :: 1 :: .1,
			dt << add rows(
				{R = red, G = green, B = blue, C = RGB Color( red, green, blue )}
			)
		)
	)
);
For Each Row( dt, Row State( Row() ) = Color State( Eval List ({:R, :G, :B}) ) );
```

**Code Explanation**:

1. Set default names scope.
2. Create new table named "colors".
3. Add columns R, G, B, C.
4. Loop through red values from 0 to 1.
5. Loop through green values from 0 to 1.
6. Loop through blue values from 0 to 1.
7. Add rows with RGB values.
8. Assign RGB Color to column C.
9. Iterate over each row in table.
10. Set row color based on RGB values.




# Col Max

## Col Max using Col Min
> **Summary**: Visualizes data by coloring cells in a table based on specific conditions, utilizing the Match and Color Cells functions to highlight age, gender, height, and weight values.

<!-- Keywords: #JMPScriptingLanguage, #DataVisualization, #ConditionalFormatting, #TableManipulation, #InteractiveAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << set window size( 800, 500 );
minh = Col Min( Column( 4 ) );
rh = Col Max( Column( 4 ) ) - minh;
minw = Col Min( Column( 5 ) );
rw = Col Max( Column( 5 ) ) - minw;
For( i = 1, i <= N Row( dt ), i++,
	Match( Column( 2 )[i],
		12, Column( 2 ) << color cells( Red, {i} ),
		13, Column( 2 ) << color cells( Green, {i} ),
		14, Column( 2 ) << color cells( Blue, {i} ),
		15, Column( 2 ) << color cells( Orange, {i} ),
		16, Column( 2 ) << color cells( BlueGreen, {i} ),
		17, Column( 2 ) << color cells( Purple, {i} )
	);
	Match( Column( 3 )[i], "F", Column( 3 ) << color cells( Red, {i} ), "M", Column( 3 ) << color cells( Blue, {i} ), );
	valh = (Column( 4 )[i] - minh) / rh;
	Column( 4 ) << color cells( Heat Color( valh, <<WhiteToBlue ), {i} );
	valw = (Column( 5 )[i] - minw) / rw;
	Column( 5 ) << color cells( Heat Color( valw, <<WhiteToBlue ), {i} );
);
```

**Code Explanation**:

1. Open data table.
2. Set window size.
3. Find minimum height.
4. Calculate height range.
5. Find minimum weight.
6. Calculate weight range.
7. Loop through each row.
8. Color age cells based on value.
9. Color gender cells based on value.
10. Color height cells based on normalized value.
11. Color weight cells based on normalized value.



## Col Max using Expr
> **Summary**: Calculates maximum age from a data table, utilizing an Expr function to extract the relevant expression.

<!-- Keywords: #JSL, #ExprFunction, #DataTable, #MaxAge, #Calculation -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
max age expr = Expr( Col Max( :age ) );
```

**Code Explanation**:

1. Open data table.
2. Define max age expression.




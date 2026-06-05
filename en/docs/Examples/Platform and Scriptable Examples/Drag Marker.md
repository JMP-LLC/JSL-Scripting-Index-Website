# Drag Marker

## Scripting Index for Drag Marker 
> **Summary**: Runs data collection and visualization by creating a new window with a graph, enabling drag marker functionality, capturing mouse coordinates, and generating a table with X and Y values.

<!-- Keywords: #JMPScriptingLanguage, #DataVisualization, #GraphBuilder, #DragMarker, #MouseTrap -->

**Code**:
```jsl
//make data points on graph, then put in table
//basically, Scripting Index for Drag Marker() & Mouse Trap() + a button to make a table
Names Default To Here( 1 );
mat_x = [];
mat_y = []; 
New Window( "Data Maker",
	g = Graph(
		Drag Marker( mat_x, mat_y );
		Mousetrap(
			{},
			mat_x = mat_x |/ Matrix( {x} );
			mat_y = mat_y |/ Matrix( {y} );
		);
	),
	Button Box ("Make Data Table",
		dt = New Table ("Data",
			New Column ("X", values (mat_x)),
			New Column ("Y", values (mat_y))
		)
	)
);
```

**Code Explanation**:

1. Set default names context.
2. Initialize empty matrices for X and Y.
3. Create new window titled "Data Maker".
4. Add graph object to window.
5. Enable drag marker for graph.
6. Set up mouse trap for graph.
7. Capture mouse coordinates X and Y.
8. Append captured X coordinates to matrix.
9. Append captured Y coordinates to matrix.
10. Add button "Make Data Table" to window.
11. Create new table named "Data".
12. Add column "X" with matrix values.
13. Add column "Y" with matrix values.




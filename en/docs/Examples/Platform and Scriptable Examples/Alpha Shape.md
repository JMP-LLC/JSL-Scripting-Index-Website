# Alpha Shape

## Alpha Shape using Triangulation
> **Summary**: Creates a contour segment graph to visualize population data, utilizing triangulation and alpha shape techniques.

<!-- Keywords: #JSLScripting, #Triangulation, #AlphaShape, #ContourSegments, #GraphBuilder -->

**Code**:
```jsl
dt = Open("data_table.jmp");
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = Alpha Shape( tri );
{xx, yy} = tri << Get Points();
New Window( "Contour Seg Example",
	g = Graph Box(
		X Scale( Min( xx ) - .1, Max( xx ) + .1 ),
		Y Scale( Min( yy ) - .1, Max( yy ) + .1 ),
		Contour Seg( ashape, [0, 400, 1000, 2000, 9000], zColor( 5 + [64 32 0 16 48] ), Transparency( [1, 1, 1, 1, 1] ) )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create triangulation.
3. Generate alpha shape.
4. Retrieve points from triangulation.
5. Create new window.
6. Set X scale.
7. Set Y scale.
8. Add contour segments.
9. Define color scheme.
10. Set transparency levels.




# Triangulation

### Example 1
> **Summary**: Vizualizes triangulated data by generating a contour plot with specified levels and shape segments for hull paths.

<!-- Keywords: #JSLScripting, #Triangulation, #ContourPlot, #ShapeSegments, #GraphBox -->

**Code**:
```jsl
dt = Open("data_table.jmp");
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
{xx, yy} = tri << Get Points();
New Window( "Contour Seg Example",
	g = Graph Box(
		X Scale( Min( xx ) - .1, Max( xx ) + .1 ),
		Y Scale( Min( yy ) - .1, Max( yy ) + .1 ),
		Contour Seg( tri, [0, 400, 1000, 2000, 9000], zColor( 5 + [64 32 0 16 48] ), Transparency( [1, 1, 1, 1, 1] ) ),
		Shape Seg( {Path( tri << Get Hull Path() )}, <<Set Color( "Black" ) )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Perform triangulation on X, Y.
3. Extract points from triangulation.
4. Create new window named "Contour Seg Example".
5. Initialize Graph Box.
6. Set X scale with buffer.
7. Set Y scale with buffer.
8. Plot contour segments with specified levels.
9. Apply color to contour segments.
10. Add shape segments for hull path.



### Example 2
> **Summary**: Vizualizes triangulation data by generating a contour map with shape segments, utilizing the Triangulation and Graph Box platforms in JMP.

<!-- Keywords: #JMPScriptingLanguage, #Triangulation, #GraphBox, #ContourMap, #ShapeSegments -->

**Code**:
```jsl
Open("data_table.jmp");
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
{xx, yy} = tri << Get Points();
New Window( "Contour Seg Example",
	g = Graph Box(
		X Scale( Min( xx ) - .1, Max( xx ) + .1 ),
		Y Scale( Min( yy ) - .1, Max( yy ) + .1 ),
		Contour Seg( tri, [0, 400, 1000, 2000, 9000], zColor( 5 + [64 32 0 16 48] ), Transparency( [1, 1, 1, 1, 1] ) ),
		Shape Seg( {Path( tri << Get Hull Path() )}, <<Set Color( "Black" ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Contour Seg( 1 ) ));
```

**Code Explanation**:

1. Open data table;
2. Create triangulation object.
3. Retrieve points from triangulation.
4. Create new window.
5. Initialize graph box.
6. Set X scale.
7. Set Y scale.
8. Add contour segments.
9. Add shape segments.
10. Find contour segment.



### Example 3
> **Summary**: Creates a contour segment graph from triangulation data, utilizing X and Y scales, contour segments with custom colors and transparency, and shape segments for visual representation.

<!-- Keywords: #JSLScriptingLanguage, #Triangulation, #ContourSegments, #GraphBuilder, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
{xx, yy} = tri << Get Points();
New Window( "Contour Seg Example",
	g = Graph Box(
		X Scale( Min( xx ) - .1, Max( xx ) + .1 ),
		Y Scale( Min( yy ) - .1, Max( yy ) + .1 ),
		Contour Seg( tri, [0, 400, 1000, 2000, 9000], zColor( 5 + [64 32 0 16 48] ), Transparency( [1, 1, 1, 1, 1] ) ),
		Shape Seg( {Path( tri << Get Hull Path() )}, <<Set Color( "Black" ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Contour Seg( 1 ) ));
seg << Set Fill( "Fill Above" );
```

**Code Explanation**:

1. Open data table;
2. Create triangulation object.
3. Retrieve triangulation points.
4. Create new window for graph.
5. Set X-axis scale.
6. Set Y-axis scale.
7. Add contour segments to graph.
8. Add shape segments to graph.
9. Find frame box in graph.
10. Set contour segment fill mode.



### Example 4
> **Summary**: Creates a contour segment graph with shape segments, utilizing triangulation and point retrieval from a data table.

<!-- Keywords: #JSLScriptingLanguage, #Triangulation, #ContourSegments, #ShapeSegments, #GraphBox -->

**Code**:
```jsl
dt = Open("data_table.jmp");
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
{xx, yy} = tri << Get Points();
New Window( "Contour Seg Example",
	g = Graph Box(
		X Scale( Min( xx ) - .1, Max( xx ) + .1 ),
		Y Scale( Min( yy ) - .1, Max( yy ) + .1 ),
		Contour Seg( tri, [0, 400, 1000, 2000, 9000], zColor( 5 + [64 32 0 16 48] ), Transparency( [1, 1, 1, 1, 1] ) ),
		Shape Seg( {Path( tri << Get Hull Path() )}, <<Set Color( "Black" ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Contour Seg( 1 ) ));
seg << Set Fill( "Lines" );
```

**Code Explanation**:

1. Open data table;
2. Create triangulation.
3. Retrieve points from triangulation.
4. Create new window.
5. Initialize graph box.
6. Set X scale.
7. Set Y scale.
8. Add contour segments.
9. Add shape segments.
10. Set contour fill mode.



### Example 5
> **Summary**: Vizualizes triangulation results by creating a contour segment graph with interactive fill mode.

<!-- Keywords: #JSLScripting, #Triangulation, #ContourSegments, #GraphBox, #InteractiveVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
{xx, yy} = tri << Get Points();
New Window( "Contour Seg Example",
	g = Graph Box(
		X Scale( Min( xx ) - .1, Max( xx ) + .1 ),
		Y Scale( Min( yy ) - .1, Max( yy ) + .1 ),
		Contour Seg( tri, [0, 400, 1000, 2000, 9000], zColor( 5 + [64 32 0 16 48] ), Transparency( [1, 1, 1, 1, 1] ) ),
		Shape Seg( {Path( tri << Get Hull Path() )}, <<Set Color( "Black" ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Contour Seg( 1 ) ));
seg << Set Fill( "Fill Below" );
```

**Code Explanation**:

1. Open data table.
2. Perform triangulation.
3. Retrieve triangulation points.
4. Create new window.
5. Initialize graph box.
6. Set X axis scale.
7. Set Y axis scale.
8. Add contour segments.
9. Add shape segments.
10. Set fill mode for contour segment.



### Example 6
> **Summary**: Creates a contour segment graph with specified levels and colors, utilizing triangulation points to visualize data.

<!-- Keywords: #JSLScriptingLanguage, #Triangulation, #ContourSegments, #GraphBox, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
{xx, yy} = tri << Get Points();
New Window( "Contour Seg Example",
	g = Graph Box(
		X Scale( Min( xx ) - .1, Max( xx ) + .1 ),
		Y Scale( Min( yy ) - .1, Max( yy ) + .1 ),
		Contour Seg( tri, [0, 400, 1000, 2000, 9000], zColor( 5 + [64 32 0 16 48] ), Transparency( [1, 1, 1, 1, 1] ) ),
		Shape Seg( {Path( tri << Get Hull Path() )}, <<Set Color( "Black" ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Contour Seg( 1 ) ));
seg << Set Fill( "Fill Between" );
```

**Code Explanation**:

1. Open data_table data
2. Create triangulation for X, Y, POP.
3. Retrieve triangulation points.
4. Create new window "Contour Seg Example".
5. Initialize graph box.
6. Set X scale with padding.
7. Set Y scale with padding.
8. Add contour segments with specified levels and colors.
9. Add shape segment for hull path.
10. Set contour fill to "Fill Between".



### Example 7
> **Summary**: Creates a contour segment graph with triangulation and shape segments, utilizing JMP's Graph Builder platform.

<!-- Keywords: #JMPGraphBuilder, #Triangulation, #ContourSegments, #ShapeSegments, #DataVisualization -->

**Code**:
```jsl
Open("data_table.jmp");
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
{xx, yy} = tri << Get Points();
New Window( "Contour Seg Example",
	g = Graph Box(
		X Scale( Min( xx ) - .1, Max( xx ) + .1 ),
		Y Scale( Min( yy ) - .1, Max( yy ) + .1 ),
		Contour Seg( tri, [0, 400, 1000, 2000, 9000], zColor( 5 + [64 32 0 16 48] ), Transparency( [1, 1, 1, 1, 1] ) ),
		Shape Seg( {Path( tri << Get Hull Path() )}, <<Set Color( "Black" ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Contour Seg( 1 ) ));
seg << Set Fill( "Fill Below" );
str = seg << Get Fill;
str = Substr( str, 1, 5 );
```

**Code Explanation**:

1. Open data table;
2. Create triangulation object.
3. Retrieve points from triangulation.
4. Create new window for graph.
5. Configure X and Y scales.
6. Add contour segments to graph.
7. Add shape segments to graph.
8. Access first frame box.
9. Find first contour segment.
10. Set fill mode to below.



### Example 8
> **Summary**: Creates a contour segment graph with shape segments for hull paths, utilizing triangulation and point retrieval from a data table.

<!-- Keywords: #JSLScriptingLanguage, #Triangulation, #ContourSegments, #ShapeSegments, #GraphBox -->

**Code**:
```jsl
dt = Open("data_table.jmp");
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
{xx, yy} = tri << Get Points();
New Window( "Contour Seg Example",
	g = Graph Box(
		X Scale( Min( xx ) - .1, Max( xx ) + .1 ),
		Y Scale( Min( yy ) - .1, Max( yy ) + .1 ),
		Contour Seg( tri, [0, 400, 1000, 2000, 9000], zColor( 5 + [64 32 0 16 48] ), Transparency( [1, 1, 1, 1, 1] ) ),
		Shape Seg( {Path( tri << Get Hull Path() )}, <<Set Color( "Black" ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Contour Seg( 1 ) ));
seg << Set Fill( "Fill Below" );
str = seg << Get Fill;
str = Substr( str, 1, 5 );
seg << Set Fill( (seg << Get Fill) || " Above" );
```

**Code Explanation**:

1. Open data table;
2. Create triangulation for X, Y, POP.
3. Retrieve points from triangulation.
4. New window "Contour Seg Example".
5. Create graph box.
6. Set X and Y scales.
7. Add contour segments.
8. Add shape segments for hull path.
9. Find first frame box.
10. Find first contour segment.
11. Set fill to "Fill Below".
12. Get fill string.
13. Modify fill string.
14. Set modified fill string.



### Example 9
> **Summary**: Vizualizes triangulated data by generating a contour plot with shape segments, utilizing the Triangulation and Contour Seg functions in JMP.

<!-- Keywords: #JMPScriptingLanguage, #Triangulation, #ContourPlot, #ShapeSegments, #DataVisualization -->

**Code**:
```jsl
Open("data_table.jmp");
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri = tri << Peel;
{xx, yy} = tri << Get Points();
New Window( "Contour Seg Example",
	g = Graph Box(
		X Scale( Min( xx ) - .1, Max( xx ) + .1 ),
		Y Scale( Min( yy ) - .1, Max( yy ) + .1 ),
		Contour Seg( tri, [0, 400, 1000, 2000, 9000], zColor( 5 + [64 32 0 16 48] ), Transparency( [1, 1, 1, 1, 1] ) ),
		Shape Seg( {Path( tri << Get Hull Path() )}, <<Set Color( "Black" ) )
	)
);
frame = g[FrameBox( 1 )];
```

**Code Explanation**:

1. Open data table;
2. Perform triangulation on X, Y.
3. Apply peel operation.
4. Retrieve points from triangulation.
5. Create new window for visualization.
6. Set X scale for graph.
7. Set Y scale for graph.
8. Add contour segments to graph.
9. Add shape segments to graph.
10. Assign frame box to variable.



### Example 10
> **Summary**: Creates a contour segment map from a triangulation object, utilizing peel operation and point retrieval.

<!-- Keywords: #JSLScriptingLanguage, #Triangulation, #ContourSegments, #GraphBox, #PeelOperation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri = tri << Peel;
{xx, yy} = tri << Get Points();
New Window( "Contour Seg Example",
	g = Graph Box(
		X Scale( Min( xx ) - .1, Max( xx ) + .1 ),
		Y Scale( Min( yy ) - .1, Max( yy ) + .1 ),
		Contour Seg( tri, [0, 400, 1000, 2000, 9000], zColor( 5 + [64 32 0 16 48] ), Transparency( [1, 1, 1, 1, 1] ) ),
		Shape Seg( {Path( tri << Get Hull Path() )}, <<Set Color( "Black" ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Contour Seg( 1 ) ));
```

**Code Explanation**:

1. Open table.
2. Create triangulation object.
3. Perform peel operation.
4. Retrieve points.
5. Create new window.
6. Set graph box properties.
7. Add contour segments.
8. Add shape segments.
9. Access frame box.
10. Find contour segment.




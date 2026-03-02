# Alpha Shape



## Associated Constructors

### Alpha Shape

**Syntax:** ashape = Alpha Shape(Triangulation)

**Description:** Returns the alpha shape for the given triangulation.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );

```

## Item Messages

### Get Alpha

**Syntax:** alpha = obj &lt;&lt; Get Alpha

**Description:** Returns the current alpha value.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
ashape << Get Alpha();

```

### Get Edges

**Syntax:** edges = obj &lt;&lt; Get Edges

**Description:** Returns the indices of the edges in the form an Nx2 matrix.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get Edges;

```

### Get Hull Edges

**Syntax:** ind = obj &lt;&lt; Get Hull Edges

**Description:** Returns the indices of the edges on the boundary of the triangulation.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get Hull Edges;

```

### Get Hull Path

**Syntax:** ind = obj &lt;&lt; Get Hull Path

**Description:** Returns the boundary of the triangulation as a path.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get Hull Path;

```

### Get Hull Points

**Syntax:** ind = obj &lt;&lt; Get Hull Points

**Description:** Returns the indices of the points on the boundary of the triangulation.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get Hull Points;

```

### Get N Edges

**Syntax:** nedge = obj &lt;&lt; Get N Edges

**Description:** Returns the number of edges in the triangulation.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get NEdges;

```

### Get N Hull Edges

**Syntax:** nhull = obj &lt;&lt; Get N Hull Edges

**Description:** Returns the number of edges on the boundary of the triangulation.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get N Hull Edges;

```

### Get N Hull Points

**Syntax:** nhull = obj &lt;&lt; Get N Hull Points

**Description:** Returns the number of points on the boundary of the triangulation.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get N Hull Points;

```

### Get N Points

**Syntax:** npt = obj &lt;&lt; Get N Points

**Description:** Returns the number of unique points in the triangulation.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get N Points;

```

### Get N Triangles

**Syntax:** ntri = obj &lt;&lt; Get N Triangles

**Description:** Returns the number of triangles.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get N Triangles;

```

### Get Points

**Syntax:** {x1,x2} = obj &lt;&lt; Get Points

**Description:** Returns the coordinates of the unique points in the triangulation.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get Points;

```

### Get Tri Alpha

**Syntax:** [alpha1, ...] = obj &lt;&lt; Get Tri Alpha

**Description:** Returns the alpha values for each triangle.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
ashape << Get Tri Alpha();

```

### Get Triangles

**Syntax:** m = obj &lt;&lt; Get Triangles

**Description:** Returns the indices of the triangles in the form of an Nx3 matrix.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get Triangles;

```

### Get Y

**Syntax:** y = obj &lt;&lt; Get Y

**Description:** Returns the Y values of the unique points in the triangulation.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get Y;

```

### Peel

**Syntax:** tri = obj &lt;&lt; Peel

**Description:** Peel the boundary layer of a triangulation, returning a new triangulation.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
Show( tri << Get N Triangles );
tri2 = tri << Peel;
Show( tri2 << Get N Triangles );

```

### Set Alpha

**Syntax:** obj &lt;&lt; Set Alpha( alpha )

**Description:** Sets the current alpha value and recomputes the triangulation.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
ashape << Set Alpha( 0.5 );

```

### Subset

**Syntax:** tri = obj &lt;&lt; Subset( {indices} )

**Description:** Returns a triangulation resulting from the given subset of points.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
Show( tri << Get N Triangles );
tri2 = tri << Subset( tri << Get Hull Points );
Show( tri2 << Get N Triangles );

```


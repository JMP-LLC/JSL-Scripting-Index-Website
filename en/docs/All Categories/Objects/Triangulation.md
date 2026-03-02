# Triangulation



## Associated Constructors

### Triangulation

**Syntax:** triangulation = Triangulation( X(Column1, Column2), &lt; Y(Column) &gt; )

**Description:** Returns an object containing the Delaunay triangulation of the given point set. The optional Y will be averaged for duplicate points, and all points in the output will be unique.

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );tri = Triangulation( X( :X, :Y ), Y( :POP ) );

```

**Example 2**

```jsl

tri = Triangulation( X( [0 0 1 1], [0 1 0 1] ), Y( [0 1 2 3] ) );

```

## Item Messages

### Get Edges

**Syntax:** edges = obj &lt;&lt; Get Edges

**Description:** Returns the indices of the edges in the form an Nx2 matrix.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );tri = Triangulation( X( :X, :Y ), Y( :POP ) );tri << Get Edges;

```

### Get Hull Edges

**Syntax:** ind = obj &lt;&lt; Get Hull Edges

**Description:** Returns the indices of the edges on the boundary of the triangulation.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );tri = Triangulation( X( :X, :Y ), Y( :POP ) );tri << Get Hull Edges;

```

### Get Hull Path

**Syntax:** ind = obj &lt;&lt; Get Hull Path

**Description:** Returns the boundary of the triangulation as a path.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );tri = Triangulation( X( :X, :Y ), Y( :POP ) );tri << Get Hull Path;

```

### Get Hull Points

**Syntax:** ind = obj &lt;&lt; Get Hull Points

**Description:** Returns the indices of the points on the boundary of the triangulation.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );tri = Triangulation( X( :X, :Y ), Y( :POP ) );tri << Get Hull Points;

```

### Get N Edges

**Syntax:** nedge = obj &lt;&lt; Get N Edges

**Description:** Returns the number of edges in the triangulation.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );tri = Triangulation( X( :X, :Y ), Y( :POP ) );tri << Get NEdges;

```

### Get N Hull Edges

**Syntax:** nhull = obj &lt;&lt; Get N Hull Edges

**Description:** Returns the number of edges on the boundary of the triangulation.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );tri = Triangulation( X( :X, :Y ), Y( :POP ) );tri << Get N Hull Edges;

```

### Get N Hull Points

**Syntax:** nhull = obj &lt;&lt; Get N Hull Points

**Description:** Returns the number of points on the boundary of the triangulation.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );tri = Triangulation( X( :X, :Y ), Y( :POP ) );tri << Get N Hull Points;

```

### Get N Points

**Syntax:** npt = obj &lt;&lt; Get N Points

**Description:** Returns the number of unique points in the triangulation.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );tri = Triangulation( X( :X, :Y ), Y( :POP ) );tri << Get N Points;

```

### Get N Triangles

**Syntax:** ntri = obj &lt;&lt; Get N Triangles

**Description:** Returns the number of triangles.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );tri = Triangulation( X( :X, :Y ), Y( :POP ) );tri << Get N Triangles;

```

### Get Points

**Syntax:** {x1,x2} = obj &lt;&lt; Get Points

**Description:** Returns the coordinates of the unique points in the triangulation.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );tri = Triangulation( X( :X, :Y ), Y( :POP ) );tri << Get Points;

```

### Get Triangles

**Syntax:** m = obj &lt;&lt; Get Triangles

**Description:** Returns the indices of the triangles in the form of an Nx3 matrix.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );tri = Triangulation( X( :X, :Y ), Y( :POP ) );tri << Get Triangles;

```

### Get Y

**Syntax:** y = obj &lt;&lt; Get Y

**Description:** Returns the Y values of the unique points in the triangulation.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );tri = Triangulation( X( :X, :Y ), Y( :POP ) );tri << Get Y;

```

### Peel

**Syntax:** tri = obj &lt;&lt; Peel

**Description:** Peel the boundary layer of a triangulation, returning a new triangulation.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );tri = Triangulation( X( :X, :Y ), Y( :POP ) );Show( tri << Get N Triangles );tri2 = tri << Peel;Show( tri2 << Get N Triangles );

```

### Subset

**Syntax:** tri = obj &lt;&lt; Subset( {indices} )

**Description:** Returns a triangulation resulting from the given subset of points.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );tri = Triangulation( X( :X, :Y ), Y( :POP ) );Show( tri << Get N Triangles );tri2 = tri << Subset( tri << Get Hull Points );Show( tri2 << Get N Triangles );

```

### Transform

**Syntax:** obj &lt;&lt; Transform( "None"|"Range Normalized" )

**Description:** Set the transform for the triangulation computation. Transformation will not affect the coordinates of the output, but the triangulation will be computed in the transformed space. This might result in a different triangulation depending on the aspect ratio of the coordinate space and transformed space.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );tri = Triangulation( X( :X, :Y ), Y( :POP ) );tri << Transform( "Range Normalized" );

```


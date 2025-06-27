# Triangulation



### Get Edges

**Syntax:** edges = obj << Get Edges

**Description:** Returns the indices of the edges in the form an Nx2 matrix.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get Edges;

```

### Get Hull Edges

**Syntax:** ind = obj << Get Hull Edges

**Description:** Returns the indices of the edges on the boundary of the triangulation.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get Hull Edges;

```

### Get Hull Path

**Syntax:** ind = obj << Get Hull Path

**Description:** Returns the boundary of the triangulation as a path.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get Hull Path;

```

### Get Hull Points

**Syntax:** ind = obj << Get Hull Points

**Description:** Returns the indices of the points on the boundary of the triangulation.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get Hull Points;

```

### Get N Edges

**Syntax:** nedge = obj << Get N Edges

**Description:** Returns the number of edges in the triangulation.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get NEdges;

```

### Get N Hull Edges

**Syntax:** nhull = obj << Get N Hull Edges

**Description:** Returns the number of edges on the boundary of the triangulation.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get N Hull Edges;

```

### Get N Hull Points

**Syntax:** nhull = obj << Get N Hull Points

**Description:** Returns the number of points on the boundary of the triangulation.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get N Hull Points;

```

### Get N Points

**Syntax:** npt = obj << Get N Points

**Description:** Returns the number of unique points in the triangulation.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get N Points;

```

### Get N Triangles

**Syntax:** ntri = obj << Get N Triangles

**Description:** Returns the number of triangles.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get N Triangles;

```

### Get Points

**Syntax:** {x1,x2} = obj << Get Points

**Description:** Returns the coordinates of the unique points in the triangulation.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get Points;

```

### Get Triangles

**Syntax:** m = obj << Get Triangles

**Description:** Returns the indices of the triangles in the form of an Nx3 matrix.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get Triangles;

```

### Get Y

**Syntax:** y = obj << Get Y

**Description:** Returns the Y values of the unique points in the triangulation.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get Y;

```

### Peel

**Syntax:** tri = obj << Peel

**Description:** Peel the boundary layer of a triangulation, returning a new triangulation.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
Show( tri << Get N Triangles );
tri2 = tri << Peel;
Show( tri2 << Get N Triangles );

```

### Subset

**Syntax:** tri = obj << Subset( {indices} )

**Description:** Returns a triangulation resulting from the given subset of points.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
Show( tri << Get N Triangles );
tri2 = tri << Subset( tri << Get Hull Points );
Show( tri2 << Get N Triangles );

```

### Transform

**Syntax:** obj << Transform( "None"|"Range Normalized" )

**Description:** Set the transform for the triangulation computation. Transformation will not affect the coordinates of the output, but the triangulation will be computed in the transformed space. This might result in a different triangulation depending on the aspect ratio of the coordinate space and transformed space.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Transform( "Range Normalized" );

```

### Triangulation

**Syntax:** triangulation = Triangulation( X(Column1, Column2), < Y(Column) > )

**Description:** Returns an object containing the Delaunay triangulation of the given point set. The optional Y will be averaged for duplicate points, and all points in the output will be unique.

**Example 1**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );

```

**Example 2**

```

Names Default To Here( 1 );
tri = Triangulation( X( [0 0 1 1], [0 1 0 1] ), Y( [0 1 2 3] ) );

```


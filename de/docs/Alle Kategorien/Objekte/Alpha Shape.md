# Alpha Shape



## Elementmeldungen

### Get Alpha

**Syntax:** alpha = obj << Get Alpha

**Beschreibung:** Gibt den aktuellen Alpha-Wert zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
ashape << Get Alpha();

```

### Get Edges

**Syntax:** edges = obj << Get Edges

**Beschreibung:** Gibt die Indizes der Kanten in der Form einer Nx2-Matrix zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get Edges;

```

### Get Hull Edges

**Syntax:** ind = obj << Get Hull Edges

**Beschreibung:** Gibt die Indizes der Kanten am Rand der Triangulierung zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get Hull Edges;

```

### Get Hull Path

**Syntax:** ind = obj << Get Hull Path

**Beschreibung:** Gibt den Rand der Triangulierung als Pfad zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get Hull Path;

```

### Get Hull Points

**Syntax:** ind = obj << Get Hull Points

**Beschreibung:** Gibt die Indizes der Punkte am Rand der Triangulierung zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get Hull Points;

```

### Get N Edges

**Syntax:** nedge = obj << Get N Edges

**Beschreibung:** Gibt die Anzahl der Kanten in der Triangulierung zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get NEdges;

```

### Get N Hull Edges

**Syntax:** nhull = obj << Get N Hull Edges

**Beschreibung:** Gibt die Anzahl der Kanten am Rand der Triangulierung zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get N Hull Edges;

```

### Get N Hull Points

**Syntax:** nhull = obj << Get N Hull Points

**Beschreibung:** Gibt die Anzahl der Punkte am Rand der Triangulierung zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get N Hull Points;

```

### Get N Points

**Syntax:** npt = obj << Get N Points

**Beschreibung:** Gibt die Anzahl der eindeutigen Punkte in der Triangulierung zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get N Points;

```

### Get N Triangles

**Syntax:** ntri = obj << Get N Triangles

**Beschreibung:** Gibt die Anzahl der Dreiecke zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get N Triangles;

```

### Get Points

**Syntax:** {x1,x2} = obj << Get Points

**Beschreibung:** Gibt die Koordinaten der eindeutigen Punkte in der Triangulierung zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get Points;

```

### Get Tri Alpha

**Syntax:** [alpha1, ...] = obj << Get Tri Alpha

**Beschreibung:** Gibt die Alpha-Werte für jedes Dreieck zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
ashape << Get Tri Alpha();

```

### Get Triangles

**Syntax:** m = obj << Get Triangles

**Beschreibung:** Gibt die Indizes der Dreiecke in der Form einer Nx3-Matrix zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get Triangles;

```

### Get Y

**Syntax:** y = obj << Get Y

**Beschreibung:** Gibt die Anzahl der Y-Werte der eindeutigen Punkte in der Triangulierung zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get Y;

```

### Peel

**Syntax:** tri = obj << Peel

**Beschreibung:** Rand einer Triangulierung entfernen und neue Triangulierung zurückgeben.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
Show( tri << Get N Triangles );
tri2 = tri << Peel;
Show( tri2 << Get N Triangles );

```

### Set Alpha

**Syntax:** obj << Set Alpha( alpha )

**Beschreibung:** Legt den aktuellen Alpha-Wert fest und berechnet die Triangulierung neu.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
ashape << Set Alpha( 0.5 );

```

### Subset

**Syntax:** tri = obj << Subset( {indices} )

**Beschreibung:** Gibt eine Triangulierung resultierend aus der vorgegebenen Teilmenge von Punkten zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
Show( tri << Get N Triangles );
tri2 = tri << Subset( tri << Get Hull Points );
Show( tri2 << Get N Triangles );

```

## Zugehörige Konstruktoren

### Alpha Shape

**Syntax:** ashape = Alpha Shape(Triangulation)

**Beschreibung:** Gibt die Alpha-Form für die vorgegebene Triangulierung zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );

```


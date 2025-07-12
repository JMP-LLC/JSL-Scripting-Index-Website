# Triangulation



## Elementmeldungen

### Get Edges

**Syntax:** edges = obj << Get Edges

**Beschreibung:** Gibt die Indizes der Kanten in der Form einer Nx2-Matrix zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get Edges;

```

### Get Hull Edges

**Syntax:** ind = obj << Get Hull Edges

**Beschreibung:** Gibt die Indizes der Kanten am Rand der Triangulierung zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get Hull Edges;

```

### Get Hull Path

**Syntax:** ind = obj << Get Hull Path

**Beschreibung:** Gibt den Rand der Triangulierung als Pfad zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get Hull Path;

```

### Get Hull Points

**Syntax:** ind = obj << Get Hull Points

**Beschreibung:** Gibt die Indizes der Punkte am Rand der Triangulierung zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get Hull Points;

```

### Get N Edges

**Syntax:** nedge = obj << Get N Edges

**Beschreibung:** Gibt die Anzahl der Kanten in der Triangulierung zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get NEdges;

```

### Get N Hull Edges

**Syntax:** nhull = obj << Get N Hull Edges

**Beschreibung:** Gibt die Anzahl der Kanten am Rand der Triangulierung zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get N Hull Edges;

```

### Get N Hull Points

**Syntax:** nhull = obj << Get N Hull Points

**Beschreibung:** Gibt die Anzahl der Punkte am Rand der Triangulierung zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get N Hull Points;

```

### Get N Points

**Syntax:** npt = obj << Get N Points

**Beschreibung:** Gibt die Anzahl der eindeutigen Punkte in der Triangulierung zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get N Points;

```

### Get N Triangles

**Syntax:** ntri = obj << Get N Triangles

**Beschreibung:** Gibt die Anzahl der Dreiecke zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get N Triangles;

```

### Get Points

**Syntax:** {x1,x2} = obj << Get Points

**Beschreibung:** Gibt die Koordinaten der eindeutigen Punkte in der Triangulierung zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get Points;

```

### Get Triangles

**Syntax:** m = obj << Get Triangles

**Beschreibung:** Gibt die Indizes der Dreiecke in der Form einer Nx3-Matrix zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get Triangles;

```

### Get Y

**Syntax:** y = obj << Get Y

**Beschreibung:** Gibt die Anzahl der Y-Werte der eindeutigen Punkte in der Triangulierung zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get Y;

```

### Peel

**Syntax:** tri = obj << Peel

**Beschreibung:** Rand einer Triangulierung entfernen und neue Triangulierung zurückgeben.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
Show( tri << Get N Triangles );
tri2 = tri << Peel;
Show( tri2 << Get N Triangles );

```

### Subset

**Syntax:** tri = obj << Subset( {indices} )

**Beschreibung:** Gibt eine Triangulierung resultierend aus der vorgegebenen Teilmenge von Punkten zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
Show( tri << Get N Triangles );
tri2 = tri << Subset( tri << Get Hull Points );
Show( tri2 << Get N Triangles );

```

### Transform

**Syntax:** obj << Transform( "Keine"|"Normalisierte Spannweite" )

**Beschreibung:** Legt die Transformation für die Triangulierungsberechnung fest. Die Transformation wirkt sich nicht auf die Koordinaten der Ausgabe aus, doch die Triangulierung wird im transformierten Raum berechnet. Dies kann abhängig vom Seitenverhältnis des Koordinatenraums und des transformierten Raums zu einer unterschiedlichen Triangulierung führen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Transform( "Range Normalized" );

```

## Zugehörige Konstruktoren

### Triangulation

**Syntax:** triangulation = Triangulation( X(Column1, Column2), < Y(Column) > )

**Beschreibung:** Gibt ein Objekt mit der Delaunay-Triangulierung des vorgegebenen Punktesatzes zurück. Die optionale Y-Variable wird für doppelte Punkte gemittelt, und alle Punkte in der Ausgabe sind eindeutig.

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
tri = Triangulation( X( [0 0 1 1], [0 1 0 1] ), Y( [0 1 2 3] ) );

```


# Triangulation



## Costruttori associati

### Triangulation

**Sintassi:** triangulation = Triangulation( X(Column1, Column2), < Y(Column) > )

**Descrizione:** Restituisce un oggetto contenente la triangolazione di Delaunay del set di punti specificato. La Y facoltativa Y sarà mediata per i punti duplicati e tutti i punti dell&apos;output saranno univoci.

**Esempio 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
tri = Triangulation( X( [0 0 1 1], [0 1 0 1] ), Y( [0 1 2 3] ) );

```

## Messaggi degli elementi

### Get Edges

**Sintassi:** edges = obj << Get Edges

**Descrizione:** Restituisce gli indici dei lati sotto forma di una matrice Nx2.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get Edges;

```

### Get Hull Edges

**Sintassi:** ind = obj << Get Hull Edges

**Descrizione:** Restituisce gli indici dei lati sul limite della triangolazione.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get Hull Edges;

```

### Get Hull Path

**Sintassi:** ind = obj << Get Hull Path

**Descrizione:** Restituisce il limite della triangolazione come percorso.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get Hull Path;

```

### Get Hull Points

**Sintassi:** ind = obj << Get Hull Points

**Descrizione:** Restituisce gli indici dei punti sul limite della triangolazione.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get Hull Points;

```

### Get N Edges

**Sintassi:** nedge = obj << Get N Edges

**Descrizione:** Restituisce il numero di lati nella triangolazione.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get NEdges;

```

### Get N Hull Edges

**Sintassi:** nhull = obj << Get N Hull Edges

**Descrizione:** Restituisce il numero dei lati sul limite della triangolazione.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get N Hull Edges;

```

### Get N Hull Points

**Sintassi:** nhull = obj << Get N Hull Points

**Descrizione:** Restituisce il numero di punti sul limite della triangolazione.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get N Hull Points;

```

### Get N Points

**Sintassi:** npt = obj << Get N Points

**Descrizione:** Restituisce il numero di punti univoci nella triangolazione.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get N Points;

```

### Get N Triangles

**Sintassi:** ntri = obj << Get N Triangles

**Descrizione:** Restituisce il numero di triangoli.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get N Triangles;

```

### Get Points

**Sintassi:** {x1,x2} = obj << Get Points

**Descrizione:** Restituisce le coordinate dei punti univoci nella triangolazione.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get Points;

```

### Get Triangles

**Sintassi:** m = obj << Get Triangles

**Descrizione:** Restituisce gli indici dei triangoli sotto forma di una matrice Nx3.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get Triangles;

```

### Get Y

**Sintassi:** y = obj << Get Y

**Descrizione:** Restituisce i valori Y dei punti univoci nella triangolazione.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get Y;

```

### Peel

**Sintassi:** tri = obj << Peel

**Descrizione:** Rimuove il livello limite di una triangolazione restituendo una nuova triangolazione.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
Show( tri << Get N Triangles );
tri2 = tri << Peel;
Show( tri2 << Get N Triangles );

```

### Subset

**Sintassi:** tri = obj << Subset( {indices} )

**Descrizione:** Restituisce una triangolazione risultante dal sottoinsieme di punti specificato.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
Show( tri << Get N Triangles );
tri2 = tri << Subset( tri << Get Hull Points );
Show( tri2 << Get N Triangles );

```

### Transform

**Sintassi:** obj << Transform( "Nessuno"|"Range normalizzato" )

**Descrizione:** Imposta la trasformazione per il calcolo della triangolazione. La trasformazione non influirà sulle coordinate dell&apos;output, ma la triangolazione sarà calcolata nello spazio trasformato. Potrebbe derivarne una triangolazione diversa in base alle proporzioni dello spazio delle coordinate e dello spazio trasformato.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Transform( "Range Normalized" );

```


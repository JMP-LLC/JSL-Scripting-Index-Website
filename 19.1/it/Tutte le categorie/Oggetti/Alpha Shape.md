# Alpha Shape



## Costruttori associati

### Alpha Shape

**Sintassi:** ashape = Alpha Shape(Triangulation)

**Descrizione:** Restituisce la forma alfa per la triangolazione specificata.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );triang = Triangulation( X( :X, :Y ), Y( :POP ) );ashape = tri = Alpha Shape( triang );

```

## Messaggi degli elementi

### Get Alpha

**Sintassi:** alpha = obj &lt;&lt; Get Alpha

**Descrizione:** Restituisce il valore alfa corrente.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );triang = Triangulation( X( :X, :Y ), Y( :POP ) );ashape = tri = Alpha Shape( triang );ashape << Get Alpha();

```

### Get Edges

**Sintassi:** edges = obj &lt;&lt; Get Edges

**Descrizione:** Restituisce gli indici dei lati sotto forma di una matrice Nx2.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );triang = Triangulation( X( :X, :Y ), Y( :POP ) );ashape = tri = Alpha Shape( triang );tri << Get Edges;

```

### Get Hull Edges

**Sintassi:** ind = obj &lt;&lt; Get Hull Edges

**Descrizione:** Restituisce gli indici dei lati sul limite della triangolazione.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );triang = Triangulation( X( :X, :Y ), Y( :POP ) );ashape = tri = Alpha Shape( triang );tri << Get Hull Edges;

```

### Get Hull Path

**Sintassi:** ind = obj &lt;&lt; Get Hull Path

**Descrizione:** Restituisce il limite della triangolazione come percorso.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );triang = Triangulation( X( :X, :Y ), Y( :POP ) );ashape = tri = Alpha Shape( triang );tri << Get Hull Path;

```

### Get Hull Points

**Sintassi:** ind = obj &lt;&lt; Get Hull Points

**Descrizione:** Restituisce gli indici dei punti sul limite della triangolazione.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );triang = Triangulation( X( :X, :Y ), Y( :POP ) );ashape = tri = Alpha Shape( triang );tri << Get Hull Points;

```

### Get N Edges

**Sintassi:** nedge = obj &lt;&lt; Get N Edges

**Descrizione:** Restituisce il numero di lati nella triangolazione.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );triang = Triangulation( X( :X, :Y ), Y( :POP ) );ashape = tri = Alpha Shape( triang );tri << Get NEdges;

```

### Get N Hull Edges

**Sintassi:** nhull = obj &lt;&lt; Get N Hull Edges

**Descrizione:** Restituisce il numero dei lati sul limite della triangolazione.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );triang = Triangulation( X( :X, :Y ), Y( :POP ) );ashape = tri = Alpha Shape( triang );tri << Get N Hull Edges;

```

### Get N Hull Points

**Sintassi:** nhull = obj &lt;&lt; Get N Hull Points

**Descrizione:** Restituisce il numero di punti sul limite della triangolazione.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );triang = Triangulation( X( :X, :Y ), Y( :POP ) );ashape = tri = Alpha Shape( triang );tri << Get N Hull Points;

```

### Get N Points

**Sintassi:** npt = obj &lt;&lt; Get N Points

**Descrizione:** Restituisce il numero di punti univoci nella triangolazione.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );triang = Triangulation( X( :X, :Y ), Y( :POP ) );ashape = tri = Alpha Shape( triang );tri << Get N Points;

```

### Get N Triangles

**Sintassi:** ntri = obj &lt;&lt; Get N Triangles

**Descrizione:** Restituisce il numero di triangoli.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );triang = Triangulation( X( :X, :Y ), Y( :POP ) );ashape = tri = Alpha Shape( triang );tri << Get N Triangles;

```

### Get Points

**Sintassi:** {x1,x2} = obj &lt;&lt; Get Points

**Descrizione:** Restituisce le coordinate dei punti univoci nella triangolazione.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );triang = Triangulation( X( :X, :Y ), Y( :POP ) );ashape = tri = Alpha Shape( triang );tri << Get Points;

```

### Get Tri Alpha

**Sintassi:** [alpha1, ...] = obj &lt;&lt; Get Tri Alpha

**Descrizione:** Restituisce i valori alfa per ciascun triangolo.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );triang = Triangulation( X( :X, :Y ), Y( :POP ) );ashape = tri = Alpha Shape( triang );ashape << Get Tri Alpha();

```

### Get Triangles

**Sintassi:** m = obj &lt;&lt; Get Triangles

**Descrizione:** Restituisce gli indici dei triangoli sotto forma di una matrice Nx3.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );triang = Triangulation( X( :X, :Y ), Y( :POP ) );ashape = tri = Alpha Shape( triang );tri << Get Triangles;

```

### Get Y

**Sintassi:** y = obj &lt;&lt; Get Y

**Descrizione:** Restituisce i valori Y dei punti univoci nella triangolazione.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );triang = Triangulation( X( :X, :Y ), Y( :POP ) );ashape = tri = Alpha Shape( triang );tri << Get Y;

```

### Peel

**Sintassi:** tri = obj &lt;&lt; Peel

**Descrizione:** Rimuove il livello limite di una triangolazione restituendo una nuova triangolazione.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );triang = Triangulation( X( :X, :Y ), Y( :POP ) );ashape = tri = Alpha Shape( triang );Show( tri << Get N Triangles );tri2 = tri << Peel;Show( tri2 << Get N Triangles );

```

### Set Alpha

**Sintassi:** obj &lt;&lt; Set Alpha( alpha )

**Descrizione:** Imposta il valore alfa corrente e ricalcola la triangolazione.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );triang = Triangulation( X( :X, :Y ), Y( :POP ) );ashape = tri = Alpha Shape( triang );ashape << Set Alpha( 0.5 );

```

### Subset

**Sintassi:** tri = obj &lt;&lt; Subset( {indices} )

**Descrizione:** Restituisce una triangolazione risultante dal sottoinsieme di punti specificato.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );triang = Triangulation( X( :X, :Y ), Y( :POP ) );ashape = tri = Alpha Shape( triang );Show( tri << Get N Triangles );tri2 = tri << Subset( tri << Get Hull Points );Show( tri2 << Get N Triangles );

```


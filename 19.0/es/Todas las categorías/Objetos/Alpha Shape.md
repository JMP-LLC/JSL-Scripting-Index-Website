# Alpha Shape



## Constructores asociados

### Alpha Shape

**Sintaxis:** ashape = Alpha Shape(Triangulation)

**Descripción:** Devuelve la forma alfa de la triangulación indicada.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );

```

## Mensajes del elemento

### Get Alpha

**Sintaxis:** alpha = obj &lt;&lt; Get Alpha

**Descripción:** Devuelve el valor alfa actual.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
ashape << Get Alpha();

```

### Get Edges

**Sintaxis:** edges = obj &lt;&lt; Get Edges

**Descripción:** Devuelve los índices de los bordes en forma de matriz Nx2.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get Edges;

```

### Get Hull Edges

**Sintaxis:** ind = obj &lt;&lt; Get Hull Edges

**Descripción:** Devuelve los índices de los bordes del límite de la triangulación.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get Hull Edges;

```

### Get Hull Path

**Sintaxis:** ind = obj &lt;&lt; Get Hull Path

**Descripción:** Devuelve el límite de la triangulación como camino.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get Hull Path;

```

### Get Hull Points

**Sintaxis:** ind = obj &lt;&lt; Get Hull Points

**Descripción:** Devuelve los índices de los puntos en el límite de la triangulación.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get Hull Points;

```

### Get N Edges

**Sintaxis:** nedge = obj &lt;&lt; Get N Edges

**Descripción:** Devuelve el número de bordes en la triangulación.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get NEdges;

```

### Get N Hull Edges

**Sintaxis:** nhull = obj &lt;&lt; Get N Hull Edges

**Descripción:** Devuelve el número de bordes en el límite de la triangulación.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get N Hull Edges;

```

### Get N Hull Points

**Sintaxis:** nhull = obj &lt;&lt; Get N Hull Points

**Descripción:** Devuelve el número de puntos en el límite de la triangulación.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get N Hull Points;

```

### Get N Points

**Sintaxis:** npt = obj &lt;&lt; Get N Points

**Descripción:** Devuelve el número de puntos únicos de la triangulación.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get N Points;

```

### Get N Triangles

**Sintaxis:** ntri = obj &lt;&lt; Get N Triangles

**Descripción:** Devuelve el número de triángulos.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get N Triangles;

```

### Get Points

**Sintaxis:** {x1,x2} = obj &lt;&lt; Get Points

**Descripción:** Devuelve las coordenadas de los puntos únicos de la triangulación.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get Points;

```

### Get Tri Alpha

**Sintaxis:** [alpha1, ...] = obj &lt;&lt; Get Tri Alpha

**Descripción:** Devuelve los valores alfa de cada triángulo.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
ashape << Get Tri Alpha();

```

### Get Triangles

**Sintaxis:** m = obj &lt;&lt; Get Triangles

**Descripción:** Devuelve los índices de los triángulos en forma de matriz Nx3.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get Triangles;

```

### Get Y

**Sintaxis:** y = obj &lt;&lt; Get Y

**Descripción:** Devuelve los valores de Y de los puntos únicos de la triangulación.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get Y;

```

### Peel

**Sintaxis:** tri = obj &lt;&lt; Peel

**Descripción:** Separa la capa límite de una triangulación y devuelve una triangulación nueva.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
Show( tri << Get N Triangles );
tri2 = tri << Peel;
Show( tri2 << Get N Triangles );

```

### Set Alpha

**Sintaxis:** obj &lt;&lt; Set Alpha( alpha )

**Descripción:** Establece el valor alfa actual y vuelve a calcular la triangulación.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
ashape << Set Alpha( 0.5 );

```

### Subset

**Sintaxis:** tri = obj &lt;&lt; Subset( {indices} )

**Descripción:** Devuelve la triangulación que resulta del subconjunto indicado de puntos.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
Show( tri << Get N Triangles );
tri2 = tri << Subset( tri << Get Hull Points );
Show( tri2 << Get N Triangles );

```


# Triangulation



## Constructores asociados

### Triangulation

**Sintaxis:** triangulation = Triangulation( X(Column1, Column2), &lt; Y(Column) &gt; )

**Descripción:** Devuelve un objeto que contiene la triangulación de Delaunay del conjunto de puntos indicado. De la Y opcional se calcula la media de los puntos duplicados y todos los puntos de salida son únicos.

**Ejemplo 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );

```

**Ejemplo 2**

```jsl

Names Default To Here( 1 );
tri = Triangulation( X( [0 0 1 1], [0 1 0 1] ), Y( [0 1 2 3] ) );

```

## Mensajes del elemento

### Get Edges

**Sintaxis:** edges = obj &lt;&lt; Get Edges

**Descripción:** Devuelve los índices de los bordes en forma de matriz Nx2.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get Edges;

```

### Get Hull Edges

**Sintaxis:** ind = obj &lt;&lt; Get Hull Edges

**Descripción:** Devuelve los índices de los bordes del límite de la triangulación.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get Hull Edges;

```

### Get Hull Path

**Sintaxis:** ind = obj &lt;&lt; Get Hull Path

**Descripción:** Devuelve el límite de la triangulación como camino.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get Hull Path;

```

### Get Hull Points

**Sintaxis:** ind = obj &lt;&lt; Get Hull Points

**Descripción:** Devuelve los índices de los puntos en el límite de la triangulación.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get Hull Points;

```

### Get N Edges

**Sintaxis:** nedge = obj &lt;&lt; Get N Edges

**Descripción:** Devuelve el número de bordes en la triangulación.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get NEdges;

```

### Get N Hull Edges

**Sintaxis:** nhull = obj &lt;&lt; Get N Hull Edges

**Descripción:** Devuelve el número de bordes en el límite de la triangulación.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get N Hull Edges;

```

### Get N Hull Points

**Sintaxis:** nhull = obj &lt;&lt; Get N Hull Points

**Descripción:** Devuelve el número de puntos en el límite de la triangulación.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get N Hull Points;

```

### Get N Points

**Sintaxis:** npt = obj &lt;&lt; Get N Points

**Descripción:** Devuelve el número de puntos únicos de la triangulación.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get N Points;

```

### Get N Triangles

**Sintaxis:** ntri = obj &lt;&lt; Get N Triangles

**Descripción:** Devuelve el número de triángulos.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get N Triangles;

```

### Get Points

**Sintaxis:** {x1,x2} = obj &lt;&lt; Get Points

**Descripción:** Devuelve las coordenadas de los puntos únicos de la triangulación.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get Points;

```

### Get Triangles

**Sintaxis:** m = obj &lt;&lt; Get Triangles

**Descripción:** Devuelve los índices de los triángulos en forma de matriz Nx3.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get Triangles;

```

### Get Y

**Sintaxis:** y = obj &lt;&lt; Get Y

**Descripción:** Devuelve los valores de Y de los puntos únicos de la triangulación.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get Y;

```

### Peel

**Sintaxis:** tri = obj &lt;&lt; Peel

**Descripción:** Separa la capa límite de una triangulación y devuelve una triangulación nueva.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
Show( tri << Get N Triangles );
tri2 = tri << Peel;
Show( tri2 << Get N Triangles );

```

### Subset

**Sintaxis:** tri = obj &lt;&lt; Subset( {indices} )

**Descripción:** Devuelve la triangulación que resulta del subconjunto indicado de puntos.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
Show( tri << Get N Triangles );
tri2 = tri << Subset( tri << Get Hull Points );
Show( tri2 << Get N Triangles );

```

### Transform

**Sintaxis:** obj &lt;&lt; Transform( "Ninguna"|"Rango normalizado" )

**Descripción:** Establece la transformación para el cálculo de la triangulación. La transformación no afectará a las coordenadas de la salida, pero la triangulación se calculará en el espacio transformado. El resultado puede ser una triangulación distinta en función de la relación de aspecto entre espacio de coordenadas y el espacio transformado.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Transform( "Range Normalized" );

```


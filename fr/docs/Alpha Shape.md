# Alpha Shape



### Alpha Shape

**Syntaxe :** ashape = Alpha Shape(Triangulation)

**Description :** Renvoie la forme alpha correspondant à la triangulation donnée.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );

```

### Get Alpha

**Syntaxe :** alpha = obj << Get Alpha

**Description :** Renvoie la valeur alpha actuelle.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
ashape << Get Alpha();

```

### Get Edges

**Syntaxe :** edges = obj << Get Edges

**Description :** Renvoie les indices des arêtes sous forme d&apos;une matrice Nx2.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get Edges;

```

### Get Hull Edges

**Syntaxe :** ind = obj << Get Hull Edges

**Description :** Renvoie les indices des arêtes sur la frontière de la triangulation.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get Hull Edges;

```

### Get Hull Path

**Syntaxe :** ind = obj << Get Hull Path

**Description :** Renvoie la frontière de la triangulation sous forme de chemin d&apos;accès.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get Hull Path;

```

### Get Hull Points

**Syntaxe :** ind = obj << Get Hull Points

**Description :** Renvoie les indices des points sur la frontière de la triangulation.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get Hull Points;

```

### Get N Edges

**Syntaxe :** nedge = obj << Get N Edges

**Description :** Renvoie le nombre d&apos;arêtes dans la triangulation.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get NEdges;

```

### Get N Hull Edges

**Syntaxe :** nhull = obj << Get N Hull Edges

**Description :** Renvoie le nombre d&apos;arêtes présentes sur la frontière de la triangulation.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get N Hull Edges;

```

### Get N Hull Points

**Syntaxe :** nhull = obj << Get N Hull Points

**Description :** Renvoie le nombre de points sur la frontière de la triangulation.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get N Hull Points;

```

### Get N Points

**Syntaxe :** npt = obj << Get N Points

**Description :** Renvoie le nombre de points uniques dans la triangulation.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get N Points;

```

### Get N Triangles

**Syntaxe :** ntri = obj << Get N Triangles

**Description :** Renvoie le nombre de triangles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get N Triangles;

```

### Get Points

**Syntaxe :** {x1,x2} = obj << Get Points

**Description :** Renvoie les coordonnées des points uniques dans la triangulation.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get Points;

```

### Get Tri Alpha

**Syntaxe :** [alpha1, ...] = obj << Get Tri Alpha

**Description :** Renvoie les valeurs alpha de chaque triangle.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
ashape << Get Tri Alpha();

```

### Get Triangles

**Syntaxe :** m = obj << Get Triangles

**Description :** Renvoie les indices des triangles sous forme d&apos;une matrice Nx3.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get Triangles;

```

### Get Y

**Syntaxe :** y = obj << Get Y

**Description :** Renvoie les valeurs Y des points uniques dans la triangulation.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get Y;

```

### Peel

**Syntaxe :** tri = obj << Peel

**Description :** Enlève la couche frontière d&apos;une triangulation, en renvoyant une nouvelle triangulation.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
Show( tri << Get N Triangles );
tri2 = tri << Peel;
Show( tri2 << Get N Triangles );

```

### Set Alpha

**Syntaxe :** obj << Set Alpha( alpha )

**Description :** Définit la valeur alpha actuelle et recalcule la triangulation.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
ashape << Set Alpha( 0.5 );

```

### Subset

**Syntaxe :** tri = obj << Subset( {indices} )

**Description :** Renvoie une triangulation calculée à partir du sous-ensemble de points donné.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
Show( tri << Get N Triangles );
tri2 = tri << Subset( tri << Get Hull Points );
Show( tri2 << Get N Triangles );

```


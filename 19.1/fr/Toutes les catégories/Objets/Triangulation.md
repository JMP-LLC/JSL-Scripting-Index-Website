# Triangulation



## Constructeurs associés

### Triangulation

**Syntaxe :** triangulation = Triangulation( X(Column1, Column2), &lt; Y(Column) &gt; )

**Description :** Renvoie un objet contenant la triangulation de Delaunay de l&apos;ensemble de points donné. La moyenne de la valeur de Y (en option) est calculée pour les points dupliqués, et tous les points de la sortie sont uniques.

**Exemple 1**

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );tri = Triangulation( X( :X, :Y ), Y( :POP ) );

```

**Exemple 2**

```jsl

tri = Triangulation( X( [0 0 1 1], [0 1 0 1] ), Y( [0 1 2 3] ) );

```

## Messages d'éléments

### Get Edges

**Syntaxe :** edges = obj &lt;&lt; Get Edges

**Description :** Renvoie les indices des arêtes sous forme d&apos;une matrice Nx2.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );tri = Triangulation( X( :X, :Y ), Y( :POP ) );tri << Get Edges;

```

### Get Hull Edges

**Syntaxe :** ind = obj &lt;&lt; Get Hull Edges

**Description :** Renvoie les indices des arêtes sur la frontière de la triangulation.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );tri = Triangulation( X( :X, :Y ), Y( :POP ) );tri << Get Hull Edges;

```

### Get Hull Path

**Syntaxe :** ind = obj &lt;&lt; Get Hull Path

**Description :** Renvoie la frontière de la triangulation sous forme de chemin d&apos;accès.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );tri = Triangulation( X( :X, :Y ), Y( :POP ) );tri << Get Hull Path;

```

### Get Hull Points

**Syntaxe :** ind = obj &lt;&lt; Get Hull Points

**Description :** Renvoie les indices des points sur la frontière de la triangulation.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );tri = Triangulation( X( :X, :Y ), Y( :POP ) );tri << Get Hull Points;

```

### Get N Edges

**Syntaxe :** nedge = obj &lt;&lt; Get N Edges

**Description :** Renvoie le nombre d&apos;arêtes dans la triangulation.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );tri = Triangulation( X( :X, :Y ), Y( :POP ) );tri << Get NEdges;

```

### Get N Hull Edges

**Syntaxe :** nhull = obj &lt;&lt; Get N Hull Edges

**Description :** Renvoie le nombre d&apos;arêtes présentes sur la frontière de la triangulation.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );tri = Triangulation( X( :X, :Y ), Y( :POP ) );tri << Get N Hull Edges;

```

### Get N Hull Points

**Syntaxe :** nhull = obj &lt;&lt; Get N Hull Points

**Description :** Renvoie le nombre de points sur la frontière de la triangulation.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );tri = Triangulation( X( :X, :Y ), Y( :POP ) );tri << Get N Hull Points;

```

### Get N Points

**Syntaxe :** npt = obj &lt;&lt; Get N Points

**Description :** Renvoie le nombre de points uniques dans la triangulation.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );tri = Triangulation( X( :X, :Y ), Y( :POP ) );tri << Get N Points;

```

### Get N Triangles

**Syntaxe :** ntri = obj &lt;&lt; Get N Triangles

**Description :** Renvoie le nombre de triangles.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );tri = Triangulation( X( :X, :Y ), Y( :POP ) );tri << Get N Triangles;

```

### Get Points

**Syntaxe :** {x1,x2} = obj &lt;&lt; Get Points

**Description :** Renvoie les coordonnées des points uniques dans la triangulation.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );tri = Triangulation( X( :X, :Y ), Y( :POP ) );tri << Get Points;

```

### Get Triangles

**Syntaxe :** m = obj &lt;&lt; Get Triangles

**Description :** Renvoie les indices des triangles sous forme d&apos;une matrice Nx3.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );tri = Triangulation( X( :X, :Y ), Y( :POP ) );tri << Get Triangles;

```

### Get Y

**Syntaxe :** y = obj &lt;&lt; Get Y

**Description :** Renvoie les valeurs Y des points uniques dans la triangulation.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );tri = Triangulation( X( :X, :Y ), Y( :POP ) );tri << Get Y;

```

### Peel

**Syntaxe :** tri = obj &lt;&lt; Peel

**Description :** Enlève la couche frontière d&apos;une triangulation, en renvoyant une nouvelle triangulation.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );tri = Triangulation( X( :X, :Y ), Y( :POP ) );Show( tri << Get N Triangles );tri2 = tri << Peel;Show( tri2 << Get N Triangles );

```

### Subset

**Syntaxe :** tri = obj &lt;&lt; Subset( {indices} )

**Description :** Renvoie une triangulation calculée à partir du sous-ensemble de points donné.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );tri = Triangulation( X( :X, :Y ), Y( :POP ) );Show( tri << Get N Triangles );tri2 = tri << Subset( tri << Get Hull Points );Show( tri2 << Get N Triangles );

```

### Transform

**Syntaxe :** obj &lt;&lt; Transform( "Aucun(e)"|"Étendue normalisée" )

**Description :** Définir la transformation pour le calcul de la triangulation. La transformation n&apos;a aucun effet sur les coordonnées de la sortie, mais la triangulation est calculée dans l&apos;espace transformé. Ceci peut avoir comme résultat une triangulation différente en fonction des proportions de l&apos;espace des coordonnées par rapport à l&apos;espace transformé.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );tri = Triangulation( X( :X, :Y ), Y( :POP ) );tri << Transform( "Range Normalized" );

```


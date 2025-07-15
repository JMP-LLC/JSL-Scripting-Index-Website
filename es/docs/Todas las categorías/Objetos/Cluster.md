# Cluster



## Columnas

### Attribute ID

**Sintaxis:** obj = Y(...&lt;Attribute ID( column(s) )&gt;...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Para los datos apilados, identifica atributos, que serían columnas (variables) si los datos no estuvieran apilados.

### Columns

**Sintaxis:** obj &lt;&lt; Columns( column(s) )

### Freq

**Sintaxis:** obj &lt;&lt; Freq( column )

### Label

**Sintaxis:** obj &lt;&lt; Label( column )

### Object ID

**Sintaxis:** obj = Y(...&lt;Object ID( column(s) )&gt;...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Para los datos apilados, identifica individuos para el conglomerado. De lo contrario, se utiliza para agregar filas de datos en cada uno.

### Ordering

**Sintaxis:** obj &lt;&lt; Ordering( column )

### Weight

**Sintaxis:** obj &lt;&lt; Weight( column )

### Y

**Sintaxis:** obj &lt;&lt; Y( column(s) )

## Hierarchical Cluster

### Columnas

#### By

**Sintaxis:** obj &lt;&lt; By( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	By( _bycol )
);

```

### Constructores asociados

#### Hierarchical Cluster

**Sintaxis:** Hierarchical Cluster( Y( columns ) )

**Descripción:** Conglomera filas en función de las variables continuas o categóricas. El conglomerado jerárquico comienza tratando cada fila como su propio conglomerado y después combina dos conglomerados a la vez sucesivamente.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster( Y( :birth, :death ), Label( :country ) );

```

### Mensajes del elemento

#### Add Spatial Measures

**Sintaxis:** obj = Hierarchical Cluster(...Add Spatial Measures( state=0|1 )...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Le permite seleccionar y ponderar los componentes espaciales para ayudar en la conglomeración de patrones de defectos. Solo está disponible si la estructura de los datos especificados es Los datos están apilados.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wafer Stacked.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :Defects ),
	Object ID( :Lot, :Wafer ),
	Attribute ID( :X_Die, :Y_Die ),
	Method( "Ward" ),
	Standardize Data( 0 ),
	Dendrogram Scale( "Distance Scale" ),
	Number of Clusters( 12 ),
	g
    Add Spatial Measures(
		Attributes( 1 ),
		Angle( 1 ),
		Radius( 1 ),
		Streak Angle( 1 ),
		Streak Distance( 1 )
	)
);

```

#### Cluster Criterion

**Sintaxis:** obj &lt;&lt; Cluster Criterion( state=0|1 )

**Descripción:** Muestra u oculta el Criterio de conglomeración cúbica (CCC) para todo el rango de número de conglomerados. El CCC se utiliza para estimar el número de conglomerados, donde los valores más altos se traducen en un mejor ajuste.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Cluster Criterion
);

```

#### Cluster Summary

**Sintaxis:** obj &lt;&lt; Cluster Summary( state=0|1 )

**Descripción:** Muestra u oculta los estadísticos de resumen para cada uno de los números de conglomerados especificados.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Cluster Summary
);

```

#### Clustering History

**Sintaxis:** obj &lt;&lt; Clustering History( state=0|1 )

**Descripción:** Muestra u oculta el historial de aglomeración según el orden de las uniones. La tabla contiene distancias y se ordena de la más cercana a la más lejana. Opción activada de forma predeterminada.

**JMP Versión agregada:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Clustering History( 0 )
);

```

#### Color Clusters

**Sintaxis:** obj &lt;&lt; Color Clusters( state=0|1 )

**Descripción:** Colorea las filas y las etiquetas del dendrograma en función de la pertenencia al conglomerado. Los colores se actualizan cuando cambia el número de conglomerados.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Color Clusters( 1 );

```

#### Color Map

**Sintaxis:** obj &lt;&lt; Color Map

**Descripción:** Muestra u oculta un mapa de color junto al dendrograma.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Color Map( Green to Black to Red );
Wait( 1 );
obj << Color Map( Blue to Gray to Red );

```

#### Column Cluster Criterion

**Sintaxis:** obj &lt;&lt; Column Cluster Criterion( state=0|1 )

#### Column Dendrogram Position

**Sintaxis:** obj &lt;&lt; Column Dendrogram Position( "Debajo"|"Encima" )

**Descripción:** Mueve la posición del dendrograma para las columnas cuando se utiliza una conglomeración de dos vías.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y(
		:"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride,
		:Hexane
	),
	Number of Clusters( 5 ),
	Two Way Clustering,
	Column Dendrogram Position( "Above" )
);

```

#### Column Label Position

**Sintaxis:** obj &lt;&lt; Column Label Position( "Debajo"|"Encima" )

**Descripción:** Mueve la posición de las etiquetas en el dendrograma para las columnas cuando se utiliza una conglomeración de dos vías.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y(
		:"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride,
		:Hexane
	),
	Number of Clusters( 5 ),
	Two Way Clustering,
	Distance Graph( 0 ),
	Column Label Position( "Above" )
);

```

#### Constellation Plot

**Sintaxis:** obj &lt;&lt; Constellation Plot( state=0|1 )

**Descripción:** Muestra u oculta una forma alternativa de presentar la información en el dendrograma de conglomeración jerárquica. Cada observación (fila) está representada por un extremo y cada unión de conglomerados está representada por un nuevo punto. Las líneas trazadas representan la pertenencia a los conglomerados.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Constellation Plot( 1 );

```

#### Dendrogram Scale

**Sintaxis:** obj &lt;&lt; Dendrogram Scale( "Escala de distancia"|"Espaciado uniforme"|"Espaciado geométrico" )

**Descripción:** Especifica la escala para el dendrograma. El Espaciado uniforme hace que el espaciado sea el mismo en las distintas ramas del dendrograma. El Espaciado geométrico aumenta el espaciado a medida que se va subiendo por el árbol del dendrograma. La Escala de distancia utiliza el espaciado entre ramas proporcional a las distancias.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Dendrogram Scale( Geometric Spacing );

```

#### Dendrogram Width

**Sintaxis:** obj &lt;&lt; Dendrogram Width( number=min(max(256,n*3),500) )

**Descripción:** Especifica la anchura del marco del dendrograma para la conglomeración de filas. "min(max(256,n*3),500)" de forma predeterminada.

#### Distance Graph

**Sintaxis:** obj &lt;&lt; Distance Graph( state=0|1 )

**Descripción:** Muestra u oculta un gráfico que muestra la distancia superada en cada unión de conglomerados. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 ),
	Distance Graph( 0 )
);
Wait( 1 );
obj << Distance Graph( 1 );

```

#### Get Clusters

**Sintaxis:** obj &lt;&lt; Get Clusters

**Descripción:** Devuelve un vector de asignaciones de conglomerados para cada fila.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 3 )
);
c = obj << Get Clusters;
Show( c );

```

#### Get Column Display Order

**Sintaxis:** obj &lt;&lt; Get Column Display Order

**Descripción:** Devuelve un vector de la posición de visualización para cada columna de conglomeración de dos vías.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y(
		:Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane,
		:"1-Octanol"n
	),
	Twoway Clustering
);
rowOrder = obj << Get Column Display Order;

```

#### Get Column Names

**Sintaxis:** obj &lt;&lt; Get Column Names

**Descripción:** Devuelve los nombres de columnas en orden de conglomerados tras la conglomeración de dos vías.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster( Y( :birth, :death ), Label( :country ) );
c = obj << Get Column Names;
Show( c );

```

#### Get Display Order

**Sintaxis:** obj &lt;&lt; Get Display Order

**Descripción:** Devuelve un vector de la posición de visualización para cada fila del conglomerado, con valores faltantes para las filas que no se muestran.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y(
		:Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane,
		:"1-Octanol"n
	)
);
rowOrder = obj << Get Display Order;

```

#### Get Distance Matrix

**Sintaxis:** obj &lt;&lt; Get Distance Matrix

**Descripción:** Devuelve la matriz de distancias utilizada para conglomeraciones jerárquicas.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y(
		:"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride,
		:Hexane
	),
	Number of Clusters( 8 )
);
m = obj << Get Distance Matrix;
Show( m );

```

#### Hybrid Cycles

**Sintaxis:** obj = Hierarchical Cluster(...Hybrid Cycles( number=30 )...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica el número mínimo de ciclos de combinación de vecinos cercanos que se realizan antes de cambiar a la rutina de conglomeración jerárquica. "30" de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y(
		:"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride,
		:Hexane
	),
	Method( "Hybrid Ward" ),
	Hybrid Cycles( 20 )
);

```

#### Hybrid Goal

**Sintaxis:** obj = Hierarchical Cluster(...Hybrid Goal( number=400 )...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica el número máximo de conglomerados permitidos antes de cambiar a la rutina de conglomeración jerárquica. Cuando se inicia la rutina de conglomeración jerárquica, el número de conglomerados debe ser menor o igual que el objetivo híbrido. "400" de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y(
		:"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride,
		:Hexane
	),
	Method( "Hybrid Ward" ),
	Hybrid Goal( 300 )
);

```

#### Hybrid Initial K

**Sintaxis:** obj = Hierarchical Cluster(...Hybrid Initial K( number=10 )...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica el número inicial de vecinos utilizados en los ciclos de combinación de vecinos cercanos. El número de vecinos puede aumentar o disminuir en función de cuántos vecinos cercanos únicos se encuentren en el ciclo anterior. "10" de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y(
		:"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride,
		:Hexane
	),
	Method( "Hybrid Ward" ),
	Hybrid Initial K( 8 )
);

```

#### Hybrid Log Details

**Sintaxis:** obj = Hierarchical Cluster(...Hybrid Log Details( state=0|1 )...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica si se muestran la condición y los tiempos de cada estado del método Ward híbrido en el registro.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y(
		:"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride,
		:Hexane
	),
	Method( "Hybrid Ward" ),
	Hybrid Log Details( 1 )
);

```

#### Hybrid RandomPCA Dim

**Sintaxis:** obj = Hierarchical Cluster(...Hybrid RandomPCA Dim( number=0 )...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica el número de dimensiones que se utilizarán en la técnica de reducción de la dimensión de PCA aleatorizado. Esta técnica se utiliza cuando el valor de Dim. de PCA aleatoria híbrida es cualquier valor mayor que cero y proporciona mejoras de velocidad adicionales. "0" de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y(
		:"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride,
		:Hexane
	),
	Method( "Hybrid Ward" ),
	Hybrid RandomPCA Dim( 3 )
);

```

#### Late Join Outliers

**Sintaxis:** obj &lt;&lt; Late Join Outliers( state=0|1 )

**Descripción:** Muestra u oculta un informe sobre los elementos que se conglomeraron muy tarde en la aglomeración.

**JMP Versión agregada:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Late Join Outliers( 1 )
);

```

#### Legend

**Sintaxis:** obj &lt;&lt; Legend( state=0|1 )

**Descripción:** Muestra u oculta una leyenda para el mapa de color a la derecha del dendrograma.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 ),
	Color Map( Blue to Gray to Red )
);
obj << Legend( 1 );

```

#### Mark Clusters

**Sintaxis:** obj &lt;&lt; Mark Clusters( state=0|1 )

**Descripción:** Asigna marcadores a las filas de la tabla de datos que corresponden al conglomerado al que pertenece la fila. Los marcadores se actualizan si cambia el número de conglomerados. Si anula la selección de esta opción, los marcadores dejan de actualizarse en función del número de conglomerados.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Mark Clusters;

```

#### Method

**Sintaxis:** Method( "Average"|"Centroid"|"Ward"|"Single"|"Complete"|"Fast Ward"|"Hybrid Ward" )&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica el método de distancia utilizado para formar los conglomerados.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 ),
	Method( "Complete" )
);

```

#### Missing value imputation

**Sintaxis:** obj = Hierarchical Cluster(...Missing value imputation( state=0|1 )...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Imputa los valores faltantes mediante la imputación SVD multivariante o normal multivariante.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :OZONE, :CO, :SO2, :NO, :PM10, :Lead ),
	Method( "Ward" ),
	Standardize Data( 1 ),
	Missing value imputation( 1 ),
	Dendrogram Scale( "Distance Scale" ),
	Number of Clusters( 6 )
);

```

#### More Color Map Columns

**Sintaxis:** obj &lt;&lt; More Color Map Columns( column )

**Descripción:** Añade otro mapa de color basado en la columna especificada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Skull.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :length, :basilar, :zygomat, :postorb ),
	Color Map( "Blue to Gray to Red" ),
	More Color Map columns( :sex )
);

```

#### Number of Clusters

**Sintaxis:** obj &lt;&lt; Number of Clusters( number )

**Descripción:** Permite introducir el número de conglomerados y el lugar donde cortar el árbol para definir los grupos de conglomerados. Existe un icono de arrastre en forma de rombo que también puede cambiar el número de conglomerados.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 3 )
);

```

#### Number of Column Clusters

**Sintaxis:** obj &lt;&lt; Number of Column Clusters( number )

**Descripción:** Especifica el número de conglomerados de columna antes de guardar. Solo está disponible para la conglomeración de dos vías.

**JMP Versión agregada:** 17

#### Parallel Coord Plots

**Sintaxis:** obj &lt;&lt; Parallel Coord Plots

**Descripción:** Crea un gráfico de coordenadas paralelas para cada conglomerado, todos dentro de una ventana independiente.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Physical Data.jmp" );
obj = dt << Hierarchical Cluster(
	Y(
		:Type, :Weight, :Turning Circle, :Displacement, :Horsepower,
		:Gas Tank Size
	),
	Label( :Model ),
	Number of Clusters( 3 )
);
obj << Parallel Coord Plots;

```

#### Pivot on Selected Cluster

**Sintaxis:** obj &lt;&lt; Pivot on Selected Cluster

**Descripción:** Invierte el orden de los dos subconglomerados del conglomerado actualmente seleccionado.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster( Y( :birth, :death ), Label( :country ) );
dt << Select Rows( Loc( (obj << Get Clusters) == 3 ) );
Wait( 2 );
obj << Pivot on Selected Cluster;

```

#### Release Zoom

**Sintaxis:** obj &lt;&lt; Release Zoom

**Descripción:** Anula el zoom en el dendrograma para las filas seleccionadas.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Physical Data.jmp" );
dt << Select Rows( [19, 22, 45, 61, 62, 64] );
obj = dt << Hierarchical Cluster(
	Y(
		:Type, :Weight, :Turning Circle, :Displacement, :Horsepower,
		:Gas Tank Size
	),
	Label( :Model )
);
obj << Zoom to Selected Rows;
Wait( 2 );
obj << Release Zoom;

```

#### Row Dendrogram Position

**Sintaxis:** obj &lt;&lt; Row Dendrogram Position( "Izquierda"|"Derecha" )

**Descripción:** Mueve la posición del dendrograma para las filas.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y(
		:"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride,
		:Hexane
	),
	Two Way Clustering,
	Row Dendrogram Position( "Left" )
);

```

#### Row Label Position

**Sintaxis:** obj &lt;&lt; Row Label Position( "Izquierda"|"Derecha" )

**Descripción:** Mueve la posición de las etiquetas en el dendrograma para las filas.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y(
		:"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride,
		:Hexane
	),
	Two Way Clustering,
	Row Label Position( "Right" )
);

```

#### Row More Position

**Sintaxis:** obj &lt;&lt; Row More Position( "Izquierda"|"Derecha" )

**Descripción:** Mueve la posición del mapa de color añadido con el comando Más columnas del mapa de color.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Skull.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :length, :basilar, :zygomat, :postorb ),
	Color Map( "Blue to Gray to Red" ),
	More Color Map Columns( :sex ),
	Row More Position( "Right" )
);

```

#### Save Cluster Hierarchy

**Sintaxis:** obj &lt;&lt; Save Cluster Hierarchy

**Descripción:** Crea una tabla de datos que contiene información útil para la reconstrucción del dendrograma.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Save Cluster Hierarchy;

```

#### Save Cluster History

**Sintaxis:** obj &lt;&lt; Save Cluster History

**Descripción:** Guarda la tabla que aparece en el informe Historial de conglomeración como una nueva tabla de datos.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Save Cluster History
);

```

#### Save Cluster Means

**Sintaxis:** obj &lt;&lt; Save Cluster Means

**Descripción:** Guarda una tabla de medias de conglomerados para el número dado de conglomerados.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Save Cluster Means
);

```

#### Save Cluster Tree

**Sintaxis:** obj &lt;&lt; Save Cluster Tree

**Descripción:** Crea una tabla de datos que contiene los nodos del árbol de conglomerados.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Save Cluster Tree;

```

#### Save Clusters

**Sintaxis:** obj &lt;&lt; Save Clusters

**Descripción:** Crea una columna de tabla de datos que contiene los números de conglomerados.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Save Clusters;

```

#### Save Column Clusters

**Sintaxis:** obj &lt;&lt; Save Column Clusters

**Descripción:** Guarda una nueva tabla de datos que contiene información sobre la membresía de los conglomerados para las columnas. Solo está disponible para la conglomeración de dos vías.

**JMP Versión agregada:** 17

#### Save Constellation Coordinates

**Sintaxis:** obj &lt;&lt; Save Constellation Coordinates

**Descripción:** Guarda las coordenadas del gráfico de constelación en una nueva columna de la tabla de datos.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Constellation Plot( 1 );
obj << Save Constellation Coordinates( 1 );

```

#### Save Display Order

**Sintaxis:** obj &lt;&lt; Save Display Order

**Descripción:** Crea una columna de tabla de datos que contiene el orden en el que aparece la fila en el dendrograma.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Save Display Order;

```

#### Save Distance Matrix

**Sintaxis:** obj &lt;&lt; Save Distance Matrix

**Descripción:** Crea una tabla de datos que contiene las distancias entre observaciones.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Save Distance Matrix
);

```

#### Save Formula for Closest Cluster

**Sintaxis:** obj &lt;&lt; Save Formula for Closest Cluster

**Descripción:** Guarda una columna de fórmula en la tabla de datos que determina el número de conglomerados de la media de conglomerados más cercana.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Save Formula for Closest Cluster;

```

#### Scatterplot Matrix

**Sintaxis:** obj &lt;&lt; Scatterplot Matrix

**Descripción:** Crea una matriz de gráfico de dispersión en una nueva ventana con elipses de confianza basadas en el número actual de conglomerados.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Scatterplot Matrix
);

```

#### Set Random Seed

**Sintaxis:** obj &lt;&lt; Set Random Seed( number )

**Descripción:** Especifica una semilla aleatoria para reproducir los resultados de inicios futuros de la plataforma.

#### Show Dendrogram

**Sintaxis:** obj &lt;&lt; Show Dendrogram( state=0|1 )

**Descripción:** Le permite desactivar el dendrograma si solo desea ver el mapa de color. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 3 ),
	Distance Graph( 0 ),
	Color Map( Green to Black to Red ),
	Color Clusters( 1 ),
	Show Dendrogram( 0 )
);

```

#### Show NCluster Handle

**Sintaxis:** obj &lt;&lt; Show NCluster Handle( state=0|1 )

**Descripción:** Muestra u oculta el controlador con forma de rombo que se utiliza para escoger el número de conglomerados en el dendrograma. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 ),
	Color Clusters( 1 ),
	Show NCluster Handle( 0 )
);

```

#### Standardize

**Sintaxis:** obj &lt;&lt; Standardize( "No estandarizado"|"Columnas"|"Filas"|"Columnas y filas" )

**Descripción:** Alias de "Estandarizar por", que especifica cómo estandarizar los valores antes de la conglomeración.

#### Standardize By

**Sintaxis:** obj = Hierarchical Cluster(...Standardize By( "No estandarizado"|"Columnas"|"Filas"|"Columnas y filas" )...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica cómo estandarizar los valores antes de la conglomeración. Puede estandarizar por columnas, filas, columnas y filas, o no hacerlo.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y(
		:"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride,
		:Hexane
	),
	Standardize( "Unstandardized" ),
	Two Way Clustering,
	Row Label Position( "Right" )
);

```

#### Standardize Data

**Sintaxis:** obj &lt;&lt; Standardize Data( state=0|1 )

**Descripción:** El nombre de opción antiguo es aún compatible, pero se ha reemplazado por "Estandarizar por".

#### Standardize Robustly

**Sintaxis:** obj = Hierarchical Cluster(...Standardize Robustly( state=0|1 )...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Utiliza estimaciones robustas de la	media y la desviación estándar para estandarizar los datos.

#### Two Way Clustering

**Sintaxis:** obj = Hierarchical Cluster(...Two Way Clustering...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Conglomeración conjunta por columnas y filas. Las columnas deben medirse en la misma escala.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y(
		:"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride,
		:Hexane
	),
	Number of Clusters( 8 )
);
Wait( .1 );
obj << Two Way Clustering;

```

#### Use Saved Cluster Table

**Sintaxis:** obj = Hierarchical Cluster(...Use Saved Cluster Table( state=0|1 )...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Utiliza una tabla del historial de conglomeración independiente para especificar la conglomeración.

#### Zoom to Selected Rows

**Sintaxis:** obj &lt;&lt; Zoom to Selected Rows

**Descripción:** Aplica zoom en el dendrograma para las filas seleccionadas.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Physical Data.jmp" );
dt << Select Rows( [19, 22, 45, 61, 62, 64] );
obj = dt << Hierarchical Cluster(
	Y(
		:Type, :Weight, :Turning Circle, :Displacement, :Horsepower,
		:Gas Tank Size
	),
	Label( :Model )
);
Wait( 2 );
obj << Zoom to Selected Rows;

```

## KDTable

### Constructores asociados

#### KDTable

**Sintaxis:** tbl = KDTable( [ point1, point2, point3, point4, point5, ... ] )

**Descripción:** Devuelve una tabla para una búsqueda eficiente de vecinos cercanos. Los argumentos de la matriz son puntos k-dimensionales. No existe límite alguno en el número de dimensiones o puntos.

```jsl

Names Default To Here( 1 );
tbl = KDTable( [1 1 1, 1 2 1, 1 2 2, 2 2 2, 3 3 3, 4 5 6] );
{rows, dist} = tbl << K nearest rows( 2, 1 ); 
//2 nearest rows to row 1 are: 
Show( rows );

```

### Mensajes del elemento

#### Distance between rows

**Sintaxis:** distance = KDTable &lt;&lt; Distance between rows( row1, row2 )

**Descripción:** Devuelve la distancia entre dos filas. La distancia se aplica a las filas eliminadas, así como a las insertadas.

```jsl

Names Default To Here( 1 );
tbl = KDTable( [1 1, 2 2, 1 2, 2 1, 4 4] );
distance = tbl << Distance between rows( 1, 2 ); 
//distance from row 1 to row 2 is: 
Show( distance );

```

#### Insert rows

**Sintaxis:** n = KDTable &lt;&lt; Insert rows( number|[ vector ] )

**Descripción:** Le permite volver a insertar filas en las búsquedas de tablas. Los índices de las filas no cambian si se insertan o eliminan filas y solo se pueden eliminar y luego (volver a) insertar las filas originales. Devuelve el número de filas insertadas. Se ignorarán las filas que ya se hubieran insertado.

```jsl

Names Default To Here( 1 );
tbl = KDTable( [1 1, 2 2, 1 2, 2 1, 4 4] ); 
//  remove 3 rows 
tbl << Remove Rows( [2 1 3] ); 
//  re-insert 1 row 
tbl << InsertRows( 2 ); 
// re-insert 2 rows, ignoring row 2 
tbl << InsertRows( [3 2] );
{rows, dist} = tbl << K nearest rows( 2, 4 ); 
//2 nearest rows to row 4, ignoring row 1, are:
Show( rows );

```

#### K nearest rows

**Sintaxis:** {rows, dist} = KDTable &lt;&lt; K nearest rows( stop, &lt;position&gt; )

**Descripción:** Devuelve las n filas más cercanas y las distancias a un punto o fila (si se especifica la posición) o a todas las filas (si se omite la posición), deteniendo la búsqueda cuando se exceda el límite de distancia. La detención puede ser n o {n,limit}. La posición opcional es un punto en forma de matriz (1xK), donde K es el número de dimensiones o el número de una fila. Si no se especifica la posición, se devuelven las n filas más cercanas a cada fila en una matriz (filas x n).

```jsl

Names Default To Here( 1 );
tbl = KDTable( [1 1 1, 1 2 1, 1 2 2, 2 2 2, 3 3 3, 4 5 6] );
{rows, dist} = tbl << K nearest rows( {3, 2.0} ); 
//3 nearest rows to each row are: 
Show( rows );

```

#### Remove rows

**Sintaxis:** n = KDTable &lt;&lt; Remove rows( number|[ vector ] )

**Descripción:** Elimina filas de las búsquedas de tablas. Los índices de las filas no cambian si se insertan o eliminan filas y solo se pueden eliminar y luego (volver a) insertar las filas originales. El índice de la fila eliminada se puede utilizar como punto de inicio para las K filas más cercanas. Devuelve el número de filas eliminadas. Se ignorarán las filas que ya se hubieran eliminado.

```jsl

Names Default To Here( 1 );
tbl = KDTable( [1 1, 2 2, 1 2, 2 1, 4 4] );  
//  remove 2 rows
tbl << RemoveRows( [2 1] ); 
//  re-insert 1 row 
tbl << Insert rows( 2 );
{rows, dist} = tbl << K nearest rows( 2, [1.5 1.5] ); 
//2 nearest rows to point at [1.5 1.5], ignoring row 1, are: 
Show( rows );

```


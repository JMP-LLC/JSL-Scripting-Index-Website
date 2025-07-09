# Principal Components



### 3D Score Plot

**Sintaxis:** obj << 3D Score Plot( state=0|1 )

**Descripción:** Muestra u oculta un gráfico de dispersión 3D de los componentes principales como rayos en un espacio tridimensional.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << "3D Score Plot"n( 1 );

```

### Arrow Lines

**Sintaxis:** obj << Arrow Lines( state=0|1 )

**Descripción:** Muestra u oculta las líneas de flecha en el gráfico.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Arrow Lines( 0 );

```

### Bartlett Test

**Sintaxis:** obj << Bartlett Test( state=0|1 )

**Descripción:** Muestra u oculta un informe de los resultados de la prueba de homogeneidad de cada uno de los componentes principales.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Bartlett Test( 1 );

```

### Biplot

**Sintaxis:** obj << Biplot( number )

**Descripción:** Muestra u oculta un gráfico que superpone el gráfico de puntuaciones y el gráfico de cargas factoriales para el número especificado de componentes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Biplot( 2 );

```

### By

**Sintaxis:** obj = Principal Components(...<By( column(s) )>...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Realiza un análisis independiente para cada nivel de la columna especificada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	By( _bycol )
);

```

### Cluster Components

**Sintaxis:** obj << Cluster Components( state=0|1 )

**Descripción:** Muestra u oculta el informe Componentes estandarizados, que contiene los vectores propios del primer componente principal dentro de cada conglomerado. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Correlations" );
obj << Cluster Variables( Cluster Components( 1 ) );

```

### Cluster Members

**Sintaxis:** obj << Cluster Members( state=0|1 )

**Descripción:** Muestra u oculta un informe de las variables en cada conglomerado. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Correlations" );
obj << Cluster Variables( Cluster Members( 1 ) );

```

### Cluster Summary

**Sintaxis:** obj << Cluster Summary( state=0|1 )

**Descripción:** Muestra u oculta un informe que resume los resultados de la conglomeración de variables. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Correlations" );
obj << Cluster Variables( Cluster Summary( 1 ) );

```

### Cluster Variables

**Sintaxis:** obj << Cluster Variables( state=0|1 )

**Descripción:** Conglomera las variables en grupos similares.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Cluster Variables( 1 );

```

### Color Map on Correlations

**Sintaxis:** obj << Color Map on Correlations( state=0|1 )

**Descripción:** Muestra u oculta un mapa de color de las correlaciones entre variables, donde las variables se organizan de modo que los miembros del mismo conglomerado estén juntos en el gráfico. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Correlations" );
obj << Cluster Variables( Color Map On Correlations( 1 ) );

```

### Columns

**Sintaxis:** obj = Principal Components(...<Columns( column(s) )>...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica las variables que se van a analizar para los componentes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);

```

### Coordinate Matrix

**Sintaxis:** obj << Coordinate Matrix( state=0|1 )

**Descripción:** Shows or hides a table that contains the component coordinates. This option is available only when there is a categorical variable in the analysis.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width, :Species ),
	Standardize( "Standardized" )
);
obj << Coordinate  Matrix( 1 );

```

### Correlations

**Sintaxis:** obj << Correlations( state=0|1 )

**Descripción:** Muestra u oculta una matriz de coeficientes de correlación que resumen la fuerza de las relaciones lineales entre cada par de variables Y.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Correlations( 1 );

```

### Covariance Matrix

**Sintaxis:** obj << Covariance Matrix( state=0|1 )

**Descripción:** Muestra u oculta una matriz de covarianzas para cada par de variables Y.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Covariance Matrix( 1 );

```

### Eigenvalues

**Sintaxis:** obj << Eigenvalues( state=0|1 )

**Descripción:** Muestra u oculta los valores propios ordenados, su variación porcentual y la variación porcentual acumulada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Eigenvalues( 1 );

```

### Eigenvectors

**Sintaxis:** obj << Eigenvectors( state=0|1 )

**Descripción:** Muestra u oculta un informe de los vectores propios de cada uno de los componentes principales.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Eigenvectors( 1 );

```

### Estimation Method

**Sintaxis:** Estimation Method( REML | ML | Robust | Row-wise | Pairwise | Full SVD | Truncated SVD | Randomized SVD | Robust SVD | Sparse SVD)

<b>Elemento de inicio: Sí</b>

**Descripción:** Establece el método de estimación para calcular las correlaciones.

Si no hay valores faltantes, el método predeterminado es Por filas.

Si hay valores faltantes y el número de variables es <=10 y el número de filas <=5000, entonces el predeterminado es REML.

Si hay valores faltantes y el número de variables es >10 o el número de filas >5000, entonces el valor predeterminado es Por pares. "Predeterminado" de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" ),
	Estimation Method( "REML" )
);

```

### Factor Analysis

**Sintaxis:** obj << Factor Analysis( ML|PC, ONE|SMC, n Rotated, Varimax| Biquartimax| Equamax| Factorparsimax| Orthomax| Parsimax| Quartimax| Biquartimin| Covarimin| Obbiquartimax| Obequamax| Obfactorparsimax| Obequamax| Obfactorparsimax| Oblimin| Obparsimax| Obquartimax| Obvarimax| Quartimin| UnRotated| Promax )

**Descripción:** Muestra u oculta un informe del patrón de rotación factorial para los componentes principales.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Factor Analysis( "ML", "SMC", 2, "Varimax" );

```

### Formatted Loading Matrix

**Sintaxis:** obj << Formatted Loading Matrix( state=0|1 )

**Descripción:** Muestra u oculta un informe que contiene las cargas de los componentes con formato.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Formatted Loading Matrix( 1 );

```

### Freq

**Sintaxis:** obj = Principal Components(...<Freq( column )>...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica una columna cuyos valores asignan una frecuencia a cada fila del análisis.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Freq( _freqcol )
);

```

### Impute Missing Data

**Sintaxis:** obj << Impute Missing Data

**Descripción:** Imputa valores faltantes a todas las variables Y y crea una nueva tabla de datos que contiene los valores existentes y los valores de datos faltantes recientemente imputados.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Impute Missing Data( 1 );

```

### Launch Fit Model

**Sintaxis:** obj << Launch Fit Model

**Descripción:** Inicia Ajuste del modelo con las variables más representativas como predictores. Seleccione Guardar componentes del conglomerado en primer lugar si quiere usarlos como predictores.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Correlations" );
obj << Cluster Variables( Launch Fit Model );

```

### Loading Matrix

**Sintaxis:** obj << Loading Matrix( number )

**Descripción:** Muestra u oculta una tabla que contiene las cargas de los componentes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Loading Matrix( 1 );

```

### Loading Plot

**Sintaxis:** obj << Loading Plot( number )

**Descripción:** Muestra u oculta una matriz de gráficos que son representaciones bidimensionales de cargas factoriales.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Loading Plot( 2 );

```

### Missing value imputation

**Sintaxis:** obj = Principal Components(...Missing value imputation( state=0|1 )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Imputa valores faltantes a través de finalización de la matriz. Esta opción es aplicable a los métodos amplios. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10, :Lead ),
	Estimation Method( "Truncated SVD" ),
	Number of Components( 6 ),
	Missing value imputation( 0 ),
	Standardize( "Standardized" )
);

```

### Model Driven Multivariate Control Chart

**Sintaxis:** obj << Model Driven Multivariate Control Chart

**Descripción:** Inicia un gráfico de control multivariante basado en el modelo para el número especificado de componentes.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Model Driven Multivariate Control Chart( 2 );

```

### Number of Components

**Sintaxis:** obj = Principal Components(...Number of Components( number=10 )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Establece el número de componentes que se deben extraer. Para reducir el tiempo de cálculo, introduzca un número de componentes pequeño. "10" de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Estimation Method( "Sparse" ),
	Number of Components( 3 ),
	Standardize( "Standardized" )
);

```

### Outlier Analysis

**Sintaxis:** obj << Outlier Analysis( state=0|1 )

**Descripción:** Muestra u oculta el informe Análisis de valores atípicos, que le permite detectar valores atípicos en los datos a través de estadísticos de contribución y T².

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Estimation Method( "Default" ),
	Standardize( "Standardized" ),
	Outlier Analysis( 1 )
);

```

### Partial Contribution of Variables

**Sintaxis:** obj << Partial Contribution of Variables( number )

**Descripción:** Muestra u oculta una tabla que contiene las contribuciones parciales de las variables y un gráfico de las contribuciones parciales de los tres primeros componentes principales.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Partial Contribution of Variables(
	Plot of Partial Contribution of Variables( Overview( 3 ), "Side by side" )
);

```

### Principal Components

**Sintaxis:** Principal Components( Y( columns ) )

**Descripción:** Modela la variación en un conjunto de variables en términos de un número menor de combinaciones lineales independientes (componentes principales) de esas variables.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);

```

### Profiler for Predicteds

**Sintaxis:** obj << Profiler for Predicteds

**Descripción:** Inicia un perfilador para las predicciones utilizando el número de componentes especificado.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Profiler for Predicteds( 2 );

```

### Publish Components Formulas

**Sintaxis:** obj << Publish Components Formulas( number )

**Descripción:** Crea un número especificado de fórmulas de componentes principales y las guarda como scripts de columnas de fórmulas en la plataforma Almacén de fórmulas. Si no hay abierto un informe del Almacén de fórmulas, esta opción crea un informe del Almacén de fórmulas.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Estimation Method( "Wide" )
);
obj << Publish Components Formulas( 3 );

```

### Publish Normalized DModX Formula

**Sintaxis:** obj << Publish Normalized DModX Formula( number )

**Descripción:** Guarda la fórmula DModX normalizada basada en un número especificado de componentes principales como script de columnas de fórmulas en la plataforma Almacén de fórmulas. Si no hay abierto un informe del Almacén de fórmulas, esta opción crea un informe del Almacén de fórmulas.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Publish Normalized DModX Formula( 3 );

```

### Save Cluster Components

**Sintaxis:** obj << Save Cluster Components

**Descripción:** Guarda en la tabla de datos el componente de conglomerado (el primero principal) para cada conglomerado.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Correlations" );
obj << Cluster Variables( Save Cluster Components );

```

### Save Imputed Formula

**Sintaxis:** obj << Save Imputed Formula

**Descripción:** Imputa valores en los valores faltantes de la columna Y. Crea y guarda una nueva columna con una fórmula de imputación en la tabla de datos original.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Save Imputed Formula( 1 );

```

### Save Individual Partial Contributions

**Sintaxis:** obj << Save Individual Partial Contributions( number )

**Descripción:** Guarda las contribuciones parciales individuales en nuevas columnas de la tabla de datos.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Covariances" );
obj << Save Individual Partial Contributions( 3 );

```

### Save Individual Squared Cosines

**Sintaxis:** obj << Save Individual Squared Cosines( number )

**Descripción:** Guarda los cosenos al cuadrado individuales en nuevas columnas de la tabla de datos.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Covariances" );
obj << Save Individual Squared Cosines( 3 );

```

### Save Low Rank Principal Components

**Sintaxis:** obj << Save Low Rank Principal Components( number )

**Descripción:** Guarda las puntuaciones de los componentes principales de los datos de rango bajo, limpios de valores atípicos y ruido. Esta opción solo se aplica al método de estimación PCA robusto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" ),
	Estimation Method( "Robust PCA" ),
	Number of Components( 3 )
);
obj << Save Low Rank Principal Components( 3 );

```

### Save Normalized DModX

**Sintaxis:** obj << Save Normalized DModX( number )

**Descripción:** Guarda los valores DModX normalizados en una nueva columna de la tabla de datos.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Covariances" );
obj << Save Normalized DMODX( 3 );

```

### Save Predicteds

**Sintaxis:** obj << Save Predicteds( number )

**Descripción:** Guarda las variables predichas con un número especificado de componentes principales en columnas nuevas de la tabla de datos.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Covariances" );
obj << Save Predicteds( 3 );

```

### Save Predicteds as Component Formulas

**Sintaxis:** obj << Save Predicteds as Component Formulas

**Descripción:** Guarda las fórmulas de componentes para un número especificado de componentes principales en columnas nuevas de la tabla de datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Save Predicteds As Component Formulas( 3 );

```

### Save Principal Component Script

**Sintaxis:** obj << Save Principal Component Script( number )

**Descripción:** Guarda un script en la ventana de scripts que cuando se ejecute creará columnas nuevas en la tabla de datos para el número especificado de componentes principales.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << save principal Component script( 3 );

```

### Save Principal Component Values

**Sintaxis:** obj << Save Principal Component Values( number )

**Descripción:** Guarda el número especificado de componentes principales en nuevas columnas sin fórmula de la tabla de datos, incluso desde las celdas imputadas.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Save Principal Component Values( 3 );

```

### Save Principal Components

**Sintaxis:** obj << Save Principal Components( number )

**Descripción:** Guarda el número especificado de componentes principales en nuevas columnas de fórmulas de la tabla de datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Save Principal Components( 3 );

```

### Save Principal Components with Imputation

**Sintaxis:** obj << Save Principal Components with Imputation( number )

**Descripción:** Guarda el número especificado de componentes principales calculados mediante la imputación de los valores faltantes en nuevas columnas de la tabla de datos.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Save Principal Components with Imputation( 3 );

```

### Save Rotated Components

**Sintaxis:** obj << Save Rotated Components

**Descripción:** Guarda los componentes rotados en nuevas columnas de la tabla de datos.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" ),
	Factor Analysis( "SMC", 2, "Varimax" )
);
obj << Save Rotated Components;

```

### Save Rotated Components with Imputation

**Sintaxis:** obj << Save Rotated Components with Imputation

**Descripción:** Guarda los componentes rotados calculados mediante la imputación de los valores faltantes en nuevas columnas de la tabla de datos. Nota: esta opción solo está disponible una vez ejecutada la Rotación factorial.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" ),
	Factor Analysis( "SMC", 2, "Varimax" )
);
obj << Save Rotated Components with Imputation;

```

### Scatterplot Matrix

**Sintaxis:** obj << Scatterplot Matrix( number )

**Descripción:** Muestra u oculta una matriz de gráficos de cargas factoriales y puntuaciones para un número especificado de componentes principales.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Scatterplot Matrix( 4 );

```

### Score Ellipse Coverage

**Sintaxis:** obj << Score Ellipse Coverage( "0.90"|"0.95"|"0.99"|"1-sigma"|"2-sigma"|"3-sigma"|"Otro…" )

**Descripción:** Cambia el nivel alfa de las elipses de confianza en el gráfico de puntuaciones para cada par de componentes principales.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Score Ellipse Coverage( 0.9 );

```

### Score Ellipses

**Sintaxis:** obj << Score Ellipses( state=0|1 )

**Descripción:** Muestra u oculta elipses de confianza en el gráfico de puntuaciones para cada par de componentes principales.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Score Ellipses( 1 );

```

### Score Plot

**Sintaxis:** obj << Score Plot( number )

**Descripción:** Muestra u oculta una matriz de gráficos de dispersión que contienen las puntuaciones para cada par del número especificado de componentes principales.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Score Plot( 2 );

```

### Score Plot with Imputation

**Sintaxis:** obj << Score Plot with Imputation( number of principal components )

**Descripción:** Muestra u oculta una matriz de gráficos de dispersión que contienen las puntuaciones para cada par del número especificado de componentes principales, utilizando la imputación para los valores faltantes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Score Plot with Imputation( 2 );

```

### Scree Plot

**Sintaxis:** obj << Scree Plot( state=0|1 )

**Descripción:** Muestra u oculta un gráfico de líneas de los valores propios para cada componente.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Scree Plot( 1 );

```

### Select component

**Sintaxis:** obj << Select component( <specify dimension to plot> )

**Descripción:** Selecciona las dimensiones que se utilizan como ejes en los gráficos de resumen.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Standardize( "Standardized" )
);
obj << Select Component( 1, 3 );

```

### Show Supplementary Variable

**Sintaxis:** obj << Show Supplementary Variable( state=0|1 )

**Descripción:** Muestra u oculta las líneas de flecha para las variables suplementarias en el gráfico.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Z( :Species ),
	Standardize( "Standardized" )
);
obj << Show Supplementary Variable( 0 );

```

### Squared Cosines of Variables

**Sintaxis:** obj << Squared Cosines of Variables( number )

**Descripción:** Muestra u oculta una tabla que contiene los cosenos al cuadrado de las variables.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Squared Cosines of Variables(
	Plot of Squared Cosines of Variables( Overview( 3 ), "Stacked", "Horizontal" )
);

```

### Standardize

**Sintaxis:** obj = Principal Components(...Standardize( "Estandarizado"|"No escalado"|"No escalado y no centrado" )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica si se debe estandarizar individualmente cada columna.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Estimation Method( "Row-wise" ),
	Standardize( "Standardized" )
);

```

### Summary Plots

**Sintaxis:** obj << Summary Plots( state=0|1 )

**Descripción:** Muestra u oculta un nodo de esquema que contiene un gráfico de los valores propios, un gráfico de puntuaciones y un gráfico de cargas factoriales. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Summary Plots( 1 );

```

### Supplementary Variable

**Sintaxis:** obj << Supplementary Variable( column(s) )

**Descripción:** Especifica una o más variables suplementarias. Las variables suplementarias no se utilizan en ninguno de los cálculos de la plataforma e incluirlas no afecta a los resultados. Estas variables pueden mejorar la interpretación de los datos o pueden servir para análisis futuros.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Z( :Species ),
	Standardize( "Standardized" )
);

```

### Weight

**Sintaxis:** obj = Principal Components(...<Weight( column )>...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica una columna cuyos valores asignan un peso a cada fila del análisis.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Weight( _weightcol )
);

```

### Y

**Sintaxis:** obj = Principal Components(...<Y( column(s) )>...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica las variables que se van a analizar para los componentes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);

```

### Z

**Sintaxis:** obj << Z( column(s) )

**Descripción:** Especifica una o más variables suplementarias. Las variables suplementarias no se utilizan en ninguno de los cálculos de la plataforma e incluirlas no afecta a los resultados. Estas variables pueden mejorar la interpretación de los datos o pueden servir para análisis futuros.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Z( :Species ),
	Standardize( "Standardized" )
);

```

### on Correlations

**Sintaxis:** Principal Components( Y( columns ), On Correlations )

**Descripción:** Crea un informe de componentes principales utilizando la matriz de correlación.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);

```

### on Covariances

**Sintaxis:** Principal Components( Y( columns ), On Covariances )

**Descripción:** Crea un informe de componentes principales utilizando la matriz de covarianza.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	"on Covariances"
);

```

### on Unscaled

**Sintaxis:** Principal Components( Y( column ), On Unscaled )

**Descripción:** Crea un informe de componentes principales utilizando los datos no escalados.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	"on Unscaled"
);

```

